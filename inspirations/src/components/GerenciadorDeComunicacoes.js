import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEntitlement } from '../context/EntitlementContext';
import { useTheme } from '../context/ThemeContext';
import ModalNotificacao from './ModalNotificacao';

const GerenciadorDeComunicacoes = () => {
  const { entitlement } = useEntitlement();
  const { isDarkMode } = useTheme();
  const [notificacaoAtiva, setNotificacaoAtiva] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (entitlement) {
      const { em_trial, dias_restantes } = entitlement;

      if (!em_trial) {
        setNotificacaoAtiva(null);
        return;
      }

      const hasSeenWelcomeModal = localStorage.getItem('visualizouModalBoasVindas');
      if (!hasSeenWelcomeModal) {
        setNotificacaoAtiva('D0');
        return; 
      }
      
      if (dias_restantes !== null && dias_restantes <= 4) {
        setNotificacaoAtiva('TRIAL_EXPIRING');
        return; 
      }
    }
  }, [entitlement]);

  const fecharModalBoasVindas = () => {
    localStorage.setItem('visualizouModalBoasVindas', 'true');
    setNotificacaoAtiva(null);
  };

  const fecharModalTrial = () => {
    setNotificacaoAtiva(null);
    navigate('/catalogo');
  };

  const handleAtivarAgora = () => {
    setNotificacaoAtiva(null);
    navigate('/planos');
  };

  const handleVerCatalogo = () => {
    fecharModalBoasVindas();
    navigate('/catalogo');
  };

  switch (notificacaoAtiva) {
    case 'D0':
      return (
        <ModalNotificacao
          titulo="Bem-vindo à Apolus! 🚀"
          videoUrl="https://www.youtube.com/embed/w4IweC-hUKw"
          textoDoBotao="Ver catálogo completo"
          acaoDoBotao={handleVerCatalogo}
          onClose={fecharModalBoasVindas}
          isDarkMode={isDarkMode}
        />
      );
    case 'TRIAL_EXPIRING':
        return (
          <ModalNotificacao
            titulo="Seu teste está acabando!"
            mensagem="Garanta acesso contínuo e aproveite o Desconto de Lançamento: 10% OFF."
            textoDoBotao="Ativar agora"
            acaoDoBotao={handleAtivarAgora}
            onClose={fecharModalTrial}
            isDarkMode={isDarkMode}
          />
        );
    default:
      return null;
  }
};

export default GerenciadorDeComunicacoes;
