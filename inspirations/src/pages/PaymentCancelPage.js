import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaTimesCircle } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import clsx from 'clsx';

const PaymentCancelPage = () => {
    const { isDarkMode } = useContext(ThemeContext);

    return (
        <div className={clsx('flex flex-col min-h-screen', isDarkMode ? 'bg-deepDark text-stellarWhite' : 'bg-stellarWhite text-deepDark')}>
            <Header />
            <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
                <FaTimesCircle className="text-6xl text-red-500 mb-6" />
                <h1 className="text-3xl md:text-4xl font-extrabold mb-4">
                    Ocorreu um problema.
                </h1>
                <p className={clsx('text-md md:text-lg max-w-2xl mx-auto mb-8', isDarkMode ? 'text-gray-300' : 'text-gray-600')}>
                    Não foi possível processar seu pagamento. Por favor, tente novamente ou entre em contato com o suporte.
                </p>
                <Link
                    to="/checkout"
                    className="bg-rocketBlue text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105"
                >
                    Tentar Novamente
                </Link>
            </main>
            <Footer />
        </div>
    );
};

export default PaymentCancelPage;
