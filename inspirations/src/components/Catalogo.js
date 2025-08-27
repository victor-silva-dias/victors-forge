
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { faScaleBalanced, faGavel, faHandcuffs, faLightbulb, faArrowRight, faBrain } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import Header from './Header';
import Footer from './Footer';
import Card from './Card';
import InfoSection from './InfoSection';
import { ThemeContext } from '../context/ThemeContext';
import mixpanel from '../mixpanel';
import ApolusAcademyBanner from './ApolusAcademyBanner';

const LaunchPromotionBanner = () => {
    const { isDarkMode } = useContext(ThemeContext);
    const navigate = useNavigate();

    const handleBannerClick = () => {
        mixpanel.track('Pricing Banner Clicked');
        navigate('/planos');
    };

    return (
        <div
            onClick={handleBannerClick}
            className={clsx(
                'rounded-lg p-5 mb-12 text-left transition-all duration-300 cursor-pointer',
                'md:flex md:items-center md:justify-between',
                isDarkMode
                  ? 'bg-gray-800 border border-gray-700 hover:border-rocketBlue'
                  : 'bg-blue-50 border border-blue-200 hover:border-rocketBlue'
            )}
        >
            <div className="md:flex-grow">
                <h3 className={clsx('font-bold text-lg mb-1', isDarkMode ? 'text-stellarWhite' : 'text-deepDark')}>
                    <span className="text-rocketBlue">Oferta Exclusiva de Lançamento!</span>
                </h3>
                <p className={clsx('text-sm', isDarkMode ? 'text-gray-300' : 'text-gray-600')}>
                    Aproveite <strong>10% de desconto adicional</strong> em todos os planos. Válido por tempo limitado!
                </p>
            </div>
            <div className="hidden md:flex items-center text-rocketBlue font-semibold transition-transform group-hover:translate-x-1">
                Ver Planos
                <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </div>
        </div>
    );
};

function Catalogo() {
  const { isDarkMode } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleCentralTrabalhistaClick = () => {
    mixpanel.track('Central Trabalhista Clicked');
    navigate('/central');
  };

  const handleCopilotoDePromptClick = () => {
    mixpanel.track('Copiloto de Prompt Clicked');
    navigate('/copiloto-de-prompt');
  };

  const handleCopilotoEstrategistaClick = () => {
    mixpanel.track('Copiloto Estrategista Clicked');
    navigate('/copiloto-estrategista');
  };

  const handleCentralCivelClick = () => {
    mixpanel.track('Central Cível Clicked (Coming Soon)');
  };

  const handleCentralPenalClick = () => {
    mixpanel.track('Central Penal Clicked (Coming Soon)');
  };

  const bgColor = isDarkMode ? 'bg-deepDark' : 'bg-stellarWhite';
  const textColor = isDarkMode ? 'text-stellarWhite' : 'text-deepDark';

  return (
    <div className={clsx(bgColor, textColor, 'min-h-screen font-sans flex flex-col')}>
      <Header />
      <main className="container mx-auto px-6 py-10 flex-grow">
        <LaunchPromotionBanner />

        {/* Seção de Copilotos com Mini-Cards */}
        <div className="mb-12">
          <h2 className={clsx('text-xl font-semibold mb-2', textColor)}>
            Copilotos
          </h2>
          <p className="text-naveGray mb-4">Ferramentas para potencializar seu fluxo de trabalho e maximizar seus resultados.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Mini-Card para Copiloto de Prompt */}
            <div
              onClick={handleCopilotoDePromptClick}
              className={clsx(
                'p-4 rounded-lg cursor-pointer transition-all duration-300 group',
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              )}
            >
              <div className="flex items-start space-x-4">
                <div className={clsx('w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0',
                                    isDarkMode ? 'bg-gray-900' : 'bg-gray-200')}>
                  <FontAwesomeIcon icon={faLightbulb} className={clsx('text-lg', isDarkMode ? 'text-yellow-300' : 'text-yellow-500')} />
                </div>
                <div>
                  <h3 className={clsx('font-semibold', textColor)}>Copiloto de Prompt</h3>
                  <p className="text-sm text-naveGray mt-1">
                    Construa o prompt perfeito através de uma entrevista guiada e potencialize suas Interações.
                  </p>
                </div>
              </div>
            </div>
            {/* Outros mini-cards podem ser adicionados aqui */}
            <div
              onClick={handleCopilotoEstrategistaClick}
              className={clsx(
                'p-4 rounded-lg cursor-pointer transition-all duration-300 group',
                isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'
              )}
            >
              <div className="flex items-start space-x-4">
                <div className={clsx('w-10 h-10 flex items-center justify-center rounded-full flex-shrink-0',
                                    isDarkMode ? 'bg-gray-900' : 'bg-gray-200')}>
                  <FontAwesomeIcon icon={faBrain} className={clsx('text-lg', isDarkMode ? 'text-indigo-300' : 'text-indigo-500')} />
                </div>
                <div>
                  <h3 className={clsx('font-semibold', textColor)}>Copiloto Estrategista</h3>
                  <p className="text-sm text-naveGray mt-1">
                    Receba um parceiro intelectual para maximizar o valor estratégico dos seus casos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção das Centrais de Inteligência */}
        <div className="mb-12">
          <h2 className={clsx('text-2xl font-semibold mb-2', textColor)}>
            Suas Centrais de Inteligência Jurídica
          </h2>
          <p className="text-naveGray">Selecione uma das opções abaixo para iniciar interações especializadas</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <Card
            title="Central Trabalhista"
            description="Sua IA especializada para consultas trabalhistas. Obtenha auxílio em petições, recursos e cálculos de forma ágil e precisa."
            icon={faScaleBalanced}
            isAvailable={true}
            onClick={handleCentralTrabalhistaClick}
          />
          <Card
            title="Central Cível"
            description="Em breve: Inteligência Cível para seus casos complexos."
            icon={faGavel}
            isAvailable={false}
            onClick={handleCentralCivelClick}
          />
          <Card
            title="Central Penal"
            description="Em breve: Inteligência Penal para seus processos criminais."
            icon={faHandcuffs}
            isAvailable={false}
            onClick={handleCentralPenalClick}
          />
        </div>

        <ApolusAcademyBanner
            title="Conheça a Apolus Academy"
            description="Aprenda o método da Inteligência Jurídica Expandida e domine as Centrais e os Copilotos da Apolus. Do diagnóstico estratégico à análise contraditória, eleve sua atuação."
            buttonText="Explorar a Academy"
            onClick={() => navigate('/apolus-academy')}
        />

        <InfoSection />
      </main>
      <Footer />
    </div>
  );
}

export default Catalogo;
