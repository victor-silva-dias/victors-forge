
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheckCircle, FaRocket, FaAward, FaBrain, FaBolt } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import clsx from 'clsx';
import Header from './Header';
import Footer from './Footer';
import mixpanel from '../mixpanel';
import ComparisonTables from './ComparisonTables';
import { products, enterprisePlan } from '../config/products';

const UpgradePage = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const [billingCycle, setBillingCycle] = useState('monthly');
    const navigate = useNavigate();

    const plans = { ...products.tools.plans, enterprise: enterprisePlan };

    const handlePlanClick = (planKey, cycle) => {
        const plan = plans[planKey];

        if (plan?.isEnterprise) {
            mixpanel.track(`Click to Contact - ${plan.name}`);
            window.open(plan.ctaLink, '_blank');
        } else {
            const cycleInPortuguese = cycle === 'monthly' ? 'Mensal' : 'Trimestral';
            mixpanel.track(`Click to Checkout (from Upgrade) - ${plan.name} ${cycleInPortuguese}`, {
                'Plan Name': plan.name,
                'Billing Cycle': cycle
            });
            navigate('/checkout', { state: { plan: planKey, cycle: cycle } });
        }
    };

    const handleBillingCycleChange = (cycle) => {
        setBillingCycle(cycle);
        mixpanel.track('Billing Cycle Changed', {
            'Billing Cycle': cycle
        });
    };

    return (
        <div className={clsx('flex flex-col min-h-screen font-sans', isDarkMode ? 'bg-deepDark text-stellarWhite' : 'bg-stellarWhite text-deepDark')}>
            <Header showBackButton={true} />
            <main className="flex-grow container mx-auto px-6 py-12 md:py-20">
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                        Seu acesso de teste terminou.
                    </h1>
                    <p className={clsx('text-md md:text-lg max-w-3xl mx-auto mb-4', isDarkMode ? 'text-gray-300' : 'text-gray-600')}>
                        Escolha um dos planos abaixo para continuar acessando a Central de IA e os Copilotos. <span className="font-bold text-rocketBlue">Renove agora e mantenha seu desconto de 10%.</span>
                    </p>
                    <div className="inline-block bg-yellow-200 text-yellow-800 font-semibold px-4 py-2 rounded-lg">
                        <FaAward className="inline-block mr-2" />
                        Oferta de Lançamento: –10% em todos os planos!
                    </div>
                </div>

                <div className="flex justify-center items-center mb-12">
                    <button
                        onClick={() => handleBillingCycleChange('monthly')}
                        className={clsx('px-6 py-2 rounded-l-lg font-semibold transition-colors', {
                            'bg-rocketBlue text-white': billingCycle === 'monthly',
                            'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300': billingCycle !== 'monthly'
                        })}
                    >
                        Mensal
                    </button>
                    <button
                        onClick={() => handleBillingCycleChange('quarterly')}
                        className={clsx('px-6 py-2 rounded-r-lg font-semibold transition-colors', {
                            'bg-rocketBlue text-white': billingCycle === 'quarterly',
                            'bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300': billingCycle !== 'quarterly'
                        })}
                    >
                        Trimestral
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
                    {Object.entries(plans).map(([planKey, plan]) => {
                        const currentCycleData = plan.cycles ? plan.cycles[billingCycle] : {};
                        const isFeatured = plan.ribbon === 'Mais Popular';

                        return (
                            <div
                                key={plan.name}
                                className={clsx(
                                    'rounded-xl p-8 border flex flex-col justify-between transition-all duration-300 relative',
                                    {
                                        'border-rocketBlue shadow-2xl scale-105': isFeatured,
                                        [isDarkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white']: true,
                                    }
                                )}
                            >
                                <div>
                                    {plan.ribbon && (
                                        <div className="text-center -mt-11 mb-3">
                                            <span className="bg-rocketBlue text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase shadow-lg">
                                                {plan.ribbon}
                                            </span>
                                        </div>
                                    )}
                                    <h2 className="text-2xl font-bold text-center mb-1">{plan.name}</h2>
                                    <p className="text-center text-naveGray mb-4 h-10 flex items-center justify-center">{plan.subtitle || ' '}</p>
                                    
                                    <div className="text-center mb-6 min-h-[90px]">
                                        {plan.isEnterprise ? (
                                            <div className='flex flex-col items-center justify-center h-full'>
                                                <p className="text-xl font-bold">Solução Personalizada</p>
                                            </div>
                                        ) : (
                                            <div>
                                                {currentCycleData.originalPrice && <p className="text-lg text-naveGray line-through">R$ {currentCycleData.originalPrice}</p>}
                                                <p className={clsx("text-4xl font-extrabold", isDarkMode ? "text-white" : "text-rocketBlue")}>
                                                    R$ {currentCycleData.promoPrice || currentCycleData.price}
                                                    {billingCycle === 'monthly' && <span className="text-lg font-semibold">/mês</span>}
                                                </p>
                                                {billingCycle === 'quarterly' && currentCycleData.equivalent && (
                                                    <p className="text-sm text-naveGray mt-1">(equivalente a R$ {currentCycleData.equivalent}/mês)</p>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-6 flex-grow">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start">
                                                <FaCheckCircle className="text-green-500 mr-3 mt-1 flex-shrink-0" />
                                                <span dangerouslySetInnerHTML={{ __html: feature }}></span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto pt-4">
                                    <button
                                        onClick={() => handlePlanClick(planKey, billingCycle)}
                                        className={clsx(
                                            'w-full block text-center font-bold py-3 rounded-lg transition-transform transform hover:scale-105',
                                            isFeatured 
                                                ? 'bg-rocketBlue text-white shadow-lg hover:bg-opacity-90'
                                                : (isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300')
                                        )}
                                    >
                                        {plan.ctaText || 'Assinar ' + plan.name}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>
                
                <ComparisonTables />

            </main>
            <Footer />
        </div>
    );
};

export default UpgradePage;
