import React, { createContext, useState, useContext } from 'react';

export const EntitlementContext = createContext();

export const useEntitlement = () => useContext(EntitlementContext);

export const EntitlementProvider = ({ children }) => {
  const [entitlement, setEntitlement] = useState(null);
  const [isSigningUp, setIsSigningUp] = useState(false); // Sinalizador para o fluxo de cadastro

  const value = {
    entitlement,
    setEntitlement,
    isSigningUp,
    setIsSigningUp,
  };

  return (
    <EntitlementContext.Provider value={value}>
      {children}
    </EntitlementContext.Provider>
  );
};
