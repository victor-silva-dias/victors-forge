import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import clsx from 'clsx';
import { FaGraduationCap, FaTools, FaBuilding, FaInfinity, FaCheck, FaBullseye, FaFileAlt, FaShieldAlt, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

const Checkmark = () => <span className="text-green-500 font-bold">✔</span>;
const Dash = () => <span className="text-gray-400 font-bold">-</span>;
const InfinityIcon = () => <div className="flex justify-center items-center"><FaInfinity /></div>;


const ComparisonTables = () => {
  const { isDarkMode } = useContext(ThemeContext);

  const tableBaseClasses = "min-w-full";
  const thBaseClasses = "px-6 py-4 text-left text-xs font-medium uppercase tracking-wider";
  const thDarkClasses = "bg-gray-800 text-gray-400";
  const thLightClasses = "bg-gray-100 text-gray-500";
  
  const tdBaseClasses = "px-6 py-4 whitespace-nowrap text-sm";
  const tdDarkClasses = "text-gray-300";
  const tdLightClasses = "text-gray-700";
  const trHoverClass = isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-50";

  const featuresData = [
    { 
        section: 'Ferramentas de IA', 
        icon: <FaTools className="text-rocketBlue" />,
        items: [
            { feature: 'Acesso a todas as Centrais de IA', essential: <Checkmark />, professional: <Checkmark />, executive: <Checkmark />, enterprise: <Checkmark /> },
            { feature: 'Acesso a todos os Copilotos', essential: <Checkmark />, professional: <Checkmark />, executive: <Checkmark />, enterprise: <Checkmark /> },
            { feature: 'Interações/mês — Copilotos', essential: '200', professional: '600', executive: <InfinityIcon />, enterprise: 'Sob medida' },
            { feature: 'Interações/mês — Centrais', essential: '80', professional: '200', executive: '500', enterprise: 'Sob medida' },
        ]
    },
    {
        section: 'Apolus Academy',
        icon: <FaGraduationCap className="text-rocketBlue" />,
        items: [
            { feature: 'Aulas, materiais e ao vivo', essential: <InfinityIcon />, professional: <InfinityIcon />, executive: <InfinityIcon />, enterprise: <InfinityIcon /> },
            { feature: 'Eventos e workshops abertos', essential: <Checkmark />, professional: <Checkmark />, executive: <Checkmark />, enterprise: <Checkmark /> },
        ]
    },
    {
        section: 'Serviços e Suporte',
        icon: <FaBuilding className="text-rocketBlue" />,
        items: [
            { feature: 'Onboarding personalizado (time/equipe)', essential: <Dash />, professional: <Dash />, executive: <Dash />, enterprise: <Checkmark /> },
            { feature: 'Integrações corporativas (SSO/SAML, API)', essential: <Dash />, professional: <Dash />, executive: <Dash />, enterprise: <Checkmark /> },
            { feature: 'Viabilidade de features personalizadas', essential: <Dash />, professional: <Dash />, executive: <Dash />, enterprise: <Checkmark /> },
        ]
    }
  ];

  const academyData = [
    { icon: <FaBullseye />, trilha: 'Diagnóstico Estratégico', recebe: 'Aprenda a mapear o caso e identificar as melhores teses com IAs especialistas.' },
    { icon: <FaFileAlt />, trilha: 'Instrumentalização', recebe: 'Transforme a tese em uma petição ou parecer bem-fundamentado e persuasivo.' },
    { icon: <FaShieldAlt />, trilha: 'Análise Contraditória', recebe: 'Antecipe as objeções e fortaleça seus argumentos contra qualquer questionamento.' },
    { icon: <FaChalkboardTeacher />, trilha: 'Aulas ao Vivo Mensais', recebe: 'Participe de encontros práticos com demonstrações e tire suas dúvidas em tempo real.' },
    { icon: <FaBook />, trilha: 'Acervo Completo', recebe: 'Acesse todas as aulas gravadas, guias e tutoriais quando e onde quiser.' },
  ];

  return (
    <div className="space-y-16 mt-24">
      <div className={clsx("shadow-xl rounded-2xl overflow-hidden border", isDarkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200")}>
        <h2 className={clsx("text-2xl md:text-3xl font-bold p-6", isDarkMode ? "text-white" : "text-gray-900")}>
            Tudo o que a Apolus oferece, em detalhes
        </h2>
        <div className="overflow-x-auto">
          <table className={clsx(tableBaseClasses, isDarkMode ? "divide-gray-700" : "divide-gray-200")}>
            <thead className={clsx(isDarkMode ? thDarkClasses : thLightClasses)}>
              <tr>
                <th className={clsx(thBaseClasses, 'font-extrabold')}>Recursos e Benefícios</th>
                <th className={clsx(thBaseClasses, "text-center font-extrabold")}>Essencial</th>
                <th className={clsx(thBaseClasses, "text-center font-extrabold")}>Profissional</th>
                <th className={clsx(thBaseClasses, "text-center font-extrabold")}>Executivo</th>
                <th className={clsx(thBaseClasses, "text-center font-extrabold")}>Enterprise</th>
              </tr>
            </thead>
            {featuresData.map(section => (
                <tbody key={section.section} className={clsx("divide-y", isDarkMode ? 'divide-gray-700 bg-gray-900' : 'divide-gray-200 bg-white')}>
                    <tr>
                        <td colSpan="5" className={clsx("p-3 border-t", isDarkMode ? "bg-gray-800 border-gray-600" : "bg-gray-100 border-gray-300")}>
                           <h3 className={clsx("text-md font-semibold flex items-center", isDarkMode? "text-white" : "text-gray-800")}>
                                {section.icon}
                                <span className="ml-2">{section.section}</span>
                           </h3>
                        </td>
                    </tr>
                    {section.items.map((item, index) => (
                        <tr key={index} className={trHoverClass}>
                        <td className={clsx(tdBaseClasses, 'font-medium align-middle', isDarkMode ? tdDarkClasses : tdLightClasses)}>{item.feature}</td>
                        <td className={clsx(tdBaseClasses, 'text-center font-semibold align-middle', isDarkMode ? tdDarkClasses : tdLightClasses)}>{item.essential}</td>
                        <td className={clsx(tdBaseClasses, 'text-center font-semibold align-middle', isDarkMode ? tdDarkClasses : tdLightClasses)}>{item.professional}</td>
                        <td className={clsx(tdBaseClasses, 'text-center font-semibold align-middle', isDarkMode ? tdDarkClasses : tdLightClasses)}>{item.executive}</td>
                        <td className={clsx(tdBaseClasses, 'text-center font-semibold align-middle', isDarkMode ? tdDarkClasses : tdLightClasses)}>{item.enterprise}</td>
                        </tr>
                    ))}
                </tbody>
            ))}
          </table>
        </div>
      </div>

      <div className={clsx("p-8 rounded-2xl", isDarkMode ? "bg-gray-800" : "bg-transparent")}>
        <div className="text-center mb-10">
            <h2 className={clsx("text-2xl md:text-3xl font-bold mb-2 flex items-center justify-center", isDarkMode ? "text-white" : "text-gray-900")}>
                <FaGraduationCap className="text-rocketBlue mr-3"/>
                O que você aprende na Apolus Academy
            </h2>
            <p className={clsx('text-md max-w-2xl mx-auto', isDarkMode ? 'text-gray-300' : 'text-gray-600')}>
              Aprenda o método da <strong>Inteligência Jurídica Expandida</strong> e aplique no mesmo dia com nossas ferramentas.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {academyData.map((item, index) => (
                <div key={index} className={clsx("p-6 rounded-lg transform transition-transform hover:scale-105", isDarkMode ? "bg-gray-900" : "bg-white shadow-lg")}>
                    <div className="flex items-center mb-4">
                        <span className="text-2xl text-rocketBlue mr-4">{item.icon}</span>
                        <h3 className="text-lg font-semibold">{item.trilha}</h3>
                    </div>
                    <p className={isDarkMode ? "text-gray-400" : "text-gray-600"}>{item.recebe}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ComparisonTables;
