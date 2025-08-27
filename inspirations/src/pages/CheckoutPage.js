import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import clsx from 'clsx';
import { products } from '../config/products';
import { calculateBestPrice } from '../utils/pricing';

const CheckoutPage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    // Novo estado para seleção de múltiplos produtos
    const [wantsTools, setWantsTools] = useState(false);
    const [wantsAcademy, setWantsAcademy] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [couponCode, setCouponCode] = useState('');

    const summary = calculateBestPrice({ wantsTools, wantsAcademy, selectedPlan, billingCycle, couponCode });
    const { finalPrice, items } = summary;

    const handlePlanSelect = (planKey) => {
        // Garante que as ferramentas sejam selecionadas se um plano for escolhido
        if (!wantsTools) setWantsTools(true);
        setSelectedPlan(planKey);
    };

    const isPaymentDisabled = (!wantsTools && !wantsAcademy) || (wantsTools && !selectedPlan);

    return (
        <div className={clsx('flex flex-col min-h-screen', isDarkMode ? 'bg-deepDark text-stellarWhite' : 'bg-stellarWhite text-deepDark')}>
            <Header />
            <main className="flex-grow container mx-auto px-6 py-12">
                <button onClick={() => navigate('/hub')} className="flex items-center text-sm font-semibold mb-8 text-gray-500 hover:text-gray-300">
                    <FaArrowLeft className="mr-2" />
                    Voltar para o Hub
                </button>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                    {/* Coluna da Esquerda: Configuração */}
                    <div className="lg:col-span-2">
                        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
                        
                        <h2 className="text-xl font-semibold mb-4">1. Escolha seus produtos</h2>
                        <div className="space-y-4 mb-8">
                            {/* Checkbox para Ferramentas de IA */}
                            <div onClick={() => setWantsTools(!wantsTools)} className={clsx('p-6 rounded-lg border-2 cursor-pointer flex items-center justify-between', wantsTools ? 'border-rocketBlue bg-rocketBlue/10' : isDarkMode ? 'border-gray-700' : 'border-gray-200')}>
                                <div>
                                    <h3 className="font-bold">Ferramentas de IA</h3>
                                    <p className="text-sm">{products.tools.description}</p>
                                </div>
                                <div className={clsx('w-6 h-6 rounded-md flex items-center justify-center', wantsTools ? 'bg-rocketBlue' : 'bg-gray-500')}>
                                    {wantsTools && <FaCheck className="text-white" />}
                                </div>
                            </div>
                            {/* Checkbox para Apolus Academy */}
                            <div onClick={() => setWantsAcademy(!wantsAcademy)} className={clsx('p-6 rounded-lg border-2 cursor-pointer flex items-center justify-between', wantsAcademy ? 'border-rocketBlue bg-rocketBlue/10' : isDarkMode ? 'border-gray-700' : 'border-gray-200')}>
                                <div>
                                    <h3 className="font-bold">Apolus Academy</h3>
                                    <p className="text-sm">{products.academy.description}</p>
                                </div>
                                <div className={clsx('w-6 h-6 rounded-md flex items-center justify-center', wantsAcademy ? 'bg-rocketBlue' : 'bg-gray-500')}>
                                    {wantsAcademy && <FaCheck className="text-white" />}
                                </div>
                            </div>
                        </div>

                        <h2 className="text-xl font-semibold mb-4">2. Configure sua assinatura</h2>
                        <div className="flex justify-center items-center mb-6">
                            <button onClick={() => setBillingCycle('monthly')} className={clsx('px-6 py-2 rounded-l-lg font-semibold', billingCycle === 'monthly' ? 'bg-rocketBlue text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300')}>Mensal</button>
                            <button onClick={() => setBillingCycle('quarterly')} className={clsx('px-6 py-2 rounded-r-lg font-semibold', billingCycle === 'quarterly' ? 'bg-rocketBlue text-white' : 'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300')}>Trimestral</button>
                        </div>

                        {wantsTools && (
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {Object.keys(products.tools.plans).map(planKey => {
                                    const plan = products.tools.plans[planKey];
                                    return (
                                        <div key={planKey} onClick={() => handlePlanSelect(planKey)} className={clsx('p-6 rounded-lg border-2 cursor-pointer text-center flex items-center justify-center h-24', selectedPlan === planKey ? 'border-rocketBlue bg-rocketBlue/10' : isDarkMode ? 'border-gray-700' : 'border-gray-200')}>
                                            <h3 className="font-bold text-lg">{plan.name}</h3>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    </div>

                    {/* Coluna da Direita: Resumo */}
                    <div className="lg:col-span-1">
                        <div className={clsx('p-6 rounded-lg border sticky top-24', isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200')}>
                            <h2 className={clsx('text-xl font-bold mb-4 border-b pb-3', isDarkMode ? 'border-gray-700' : 'border-gray-200')}>Resumo do Pedido</h2>
                            {items.length > 0 ? items.map((item, index) => (
                                <div key={index} className="flex justify-between items-start py-2 text-sm">
                                    <div>
                                        <p className="font-semibold">{item.name}</p>
                                        {item.note && <p className="text-xs text-green-400">{item.note}</p>}
                                    </div>
                                    <p className="font-medium">{item.price > 0 ? `R$ ${item.price.toFixed(2).replace('.', ',')}` : 'Incluso'}</p>
                                </div>
                            )) : <p className="text-sm text-gray-500">Selecione um produto para começar.</p>}
                            
                            <div className={clsx('mt-4 border-t pt-3', isDarkMode ? 'border-gray-700' : 'border-gray-200')}>
                                <div className="flex justify-between font-bold text-lg">
                                    <p>Total</p>
                                    <p>R$ {finalPrice.toFixed(2).replace('.', ',')}</p>
                                </div>
                            </div>
                            <div className="mt-4">
                                <div className="flex">
                                    <input type="text" value={couponCode} onChange={(e) => setCouponCode(e.target.value.toUpperCase())} placeholder="Cupom de desconto" className={clsx('w-full p-2 rounded-l-md border', isDarkMode ? 'bg-gray-700 border-gray-600' : 'border-gray-300')} />
                                    <button className="bg-gray-600 text-white font-semibold px-4 rounded-r-md">Aplicar</button>
                                </div>
                            </div>
                            <button disabled={isPaymentDisabled} className="w-full bg-rocketBlue text-white font-bold py-3 rounded-lg mt-6 disabled:opacity-50 disabled:cursor-not-allowed">
                                Finalizar Pagamento
                            </button>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default CheckoutPage;
