import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faBrain, faBalanceScale, faShieldAlt, faChalkboardTeacher, faBookOpen } from '@fortawesome/free-solid-svg-icons';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/ThemeContext';
import clsx from 'clsx';
import mixpanel from '../mixpanel';

const ApolusAcademy = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    useEffect(() => {
        mixpanel.track('Apolus Academy Page Viewed');
    }, []);

    const handleGoBack = () => {
        navigate('/catalogo');
    };

    const packages = [
        {
            icon: faBrain,
            title: 'Diagnóstico Estratégico',
            description: 'Aprenda a mapear o caso e identificar as melhores teses com IAs especialistas.',
        },
        {
            icon: faBalanceScale,
            title: 'Instrumentalização',
            description: 'Transforme a tese em uma petição ou parecer bem-fundamentado e persuasivo.',
        },
        {
            icon: faShieldAlt,
            title: 'Análise Contraditória',
            description: 'Antecipe as objeções e fortaleça seus argumentos contra qualquer questionamento.',
        },
        {
            icon: faChalkboardTeacher,
            title: 'Aulas ao Vivo Mensais',
            description: 'Participe de encontros práticos com demonstrações e tire suas dúvidas em tempo real.',
        },
        {
            icon: faBookOpen,
            title: 'Acervo Completo',
            description: 'Acesse todas as aulas gravadas, guias e tutoriais quando e onde quiser.',
        },
    ];

    return (
        <div className={clsx('flex flex-col min-h-screen', isDarkMode ? 'dark bg-deepDark' : 'bg-lightBackground')}>
            <Header pageTitle="Apolus Academy" />
            <main className="flex-1 w-full">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="mb-10">
                        <button
                            onClick={handleGoBack}
                            className={clsx(
                                'flex items-center text-sm font-semibold transition-colors',
                                isDarkMode ? 'text-darkText hover:text-stellarWhite' : 'text-lightText hover:text-rocketBlue'
                            )}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
                            Voltar
                        </button>
                    </div>

                    {/* Main Content Card */}
                    <div className={clsx('rounded-xl shadow-2xl p-8 sm:p-12', isDarkMode ? 'bg-darkSurface' : 'bg-lightSurface')}>
                        <div className="text-center mb-12">
                            <h2 className="text-base font-semibold tracking-wider uppercase text-apolusBlue">
                                Em Breve
                            </h2>
                            <h1 className={clsx('text-4xl md:text-5xl font-extrabold mt-2', isDarkMode ? 'text-stellarWhite' : 'text-gray-900')}>
                                O que você aprende na Apolus Academy
                            </h1>
                            <p className={clsx('mt-4 text-lg max-w-3xl mx-auto', isDarkMode ? 'text-darkText' : 'text-lightText')}>
                                Aprenda o método da <strong>Inteligência Jurídica Expandida</strong> e aplique no mesmo dia com nossas ferramentas.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {packages.map((pkg, index) => (
                                <div key={index} className={clsx('p-6 rounded-lg transition-all duration-300', isDarkMode ? 'bg-darkCard hover:bg-darkBorder' : 'bg-lightCard hover:bg-lightBorder')}>
                                    <FontAwesomeIcon icon={pkg.icon} className="text-3xl mb-4 text-apolusBlue" />
                                    <h3 className={clsx('text-xl font-bold mb-2', isDarkMode ? 'text-stellarWhite' : 'text-gray-900')}>{pkg.title}</h3>
                                    <p className={clsx(isDarkMode ? 'text-darkText' : 'text-lightText')}>{pkg.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-16">
                             <div className="inline-block bg-yellow-400 text-yellow-900 font-bold text-sm px-4 py-2 rounded-full">
                                LANÇAMENTO EM BREVE
                             </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default ApolusAcademy;
