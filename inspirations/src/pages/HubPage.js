import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaBrain } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import clsx from 'clsx';

const HubPage = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={clsx('flex flex-col min-h-screen', isDarkMode ? 'bg-deepDark text-stellarWhite' : 'bg-stellarWhite text-deepDark')}>
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Bem-vindo à Apolus.
                </h1>
                <p className={clsx('text-md md:text-lg max-w-2xl mx-auto mb-12', isDarkMode ? 'text-gray-300' : 'text-gray-600')}>
                    Por onde você quer começar?
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                    {/* Card Ferramentas de IA */}
                    <Link to="/catalogo" className={clsx(
                        'p-8 rounded-xl border transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center',
                        isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-rocketBlue' : 'bg-white border-gray-200 hover:border-rocketBlue'
                    )}>
                        <FaRocket className="text-5xl text-rocketBlue mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Ferramentas de IA</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            Acesse nossas IAs especialistas para criar teses, estratégias e documentos.
                        </p>
                    </Link>

                    {/* Card Apolus Academy */}
                    <Link to="/academy" className={clsx(
                        'p-8 rounded-xl border transition-transform transform hover:scale-105 hover:shadow-2xl flex flex-col items-center justify-center',
                        isDarkMode ? 'bg-gray-800 border-gray-700 hover:border-rocketBlue' : 'bg-white border-gray-200 hover:border-rocketBlue'
                    )}>
                        <FaBrain className="text-5xl text-rocketBlue mb-4" />
                        <h2 className="text-2xl font-bold mb-2">Apolus Academy</h2>
                        <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
                            Aprenda o método da Inteligência Jurídica Expandida e domine IA na sua advocacia.
                        </p>
                    </Link>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default HubPage;
