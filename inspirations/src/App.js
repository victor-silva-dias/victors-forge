import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import { ThemeProvider } from './context/ThemeContext';
import { EntitlementProvider, useEntitlement } from './context/EntitlementContext';
import Login from './components/Login';
import Signup from './components/Signup';
import Catalogo from './components/Catalogo';
import ApolusAcademy from './pages/ApolusAcademy';
import CentralTrabalhista from './centrals/CentralTrabalhista';
import CopilotoDePrompt from './copilots/CopilotoDePrompt';
import CopilotoEstrategista from './copilots/CopilotoEstrategista';
import PricingPage from './components/PricingPage';
import UpgradePage from './components/UpgradePage';
import PrivateRoute from './components/PrivateRoute';
import LoadingScreen from './components/LoadingScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import GerenciadorDeComunicacoes from './components/GerenciadorDeComunicacoes';
import ScrollToTop from './components/ScrollToTop';
import HubPage from './pages/HubPage';
import CheckoutPage from './pages/CheckoutPage';
import PaymentSuccessPage from './pages/PaymentSuccessPage';
import PaymentCancelPage from './pages/PaymentCancelPage';

// Inner component to use the context
const AppContent = () => {
  const [authStatus, setAuthStatus] = useState('loading');
  const [user, setUser] = useState(null);
  const { setEntitlement, isSigningUp } = useEntitlement();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);

        if (isSigningUp) {
          setAuthStatus('allowed');
          return;
        }

        setAuthStatus('loading');
        try {
          const response = await fetch(`https://api-dev.apolus.ai/webhook/auth/entitlement-check?userId=${user.uid}`);
          if (!response.ok) throw new Error('API request failed');

          const entitlementData = await response.json();
          if (typeof entitlementData !== 'object' || entitlementData === null || typeof entitlementData.bloqueado === 'undefined') {
            throw new Error('Invalid API response');
          }

          setEntitlement(entitlementData);
          setAuthStatus(entitlementData.bloqueado ? 'blocked' : 'allowed');

        } catch (error) {
          console.error("Entitlement check failed:", error);
          setEntitlement(null);
          setAuthStatus('blocked');
        }
      } else {
        setUser(null);
        setEntitlement(null);
        setAuthStatus('loggedOut');
      }
    });

    return () => unsubscribe();
  }, [setEntitlement, isSigningUp]);

  if (authStatus === 'loading') {
    return <LoadingScreen />;
  }

  return (
    <>
      <GerenciadorDeComunicacoes />
      {(() => {
        switch (authStatus) {
          case 'allowed':
            return (
              <Routes>
                <Route element={<PrivateRoute user={user} />}>
                  <Route path="/hub" element={<HubPage />} />
                  <Route path="/catalogo" element={<Catalogo />} />
                  <Route path="/central" element={<CentralTrabalhista />} />
                  <Route path="/copiloto-de-prompt" element={<CopilotoDePrompt />} />
                  <Route path="/copiloto-estrategista" element={<CopilotoEstrategista />} />
                  <Route path="/academy" element={<ApolusAcademy />} />
                  <Route path="/apolus-academy" element={<ApolusAcademy />} />
                  <Route path="/planos" element={<PricingPage />} />
                  <Route path="/checkout" element={<CheckoutPage />} />
                  <Route path="/payment/success" element={<PaymentSuccessPage />} />
                  <Route path="/payment/cancel" element={<PaymentCancelPage />} />
                </Route>
                <Route path="*" element={<Navigate to="/hub" replace />} />
              </Routes>
            );
          case 'blocked':
            return (
              <Routes>
                <Route path="/upgrade" element={<UpgradePage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="*" element={<Navigate to="/upgrade" replace />} />
              </Routes>
            );
          case 'loggedOut':
          default:
            return (
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/upgrade" element={<UpgradePage />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
              </Routes>
            );
        }
      })()}
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ThemeProvider>
        <EntitlementProvider>
          <div className="App">
            <AppContent />
          </div>
        </EntitlementProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
