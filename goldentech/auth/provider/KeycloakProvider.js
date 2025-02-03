import React, { createContext, useContext, useEffect, useState } from 'react';
import { initKeycloak, keycloak, logout } from '../config/keycloak';

const KeycloakContext = createContext({
  initialized: false,
  authenticated: false,
  user: null,
  logout: () => {},
});

export const KeycloakProvider = ({ children }) => {
  const [initialized, setInitialized] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const [keycloakInitialized, setKeycloakInitialized] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && !keycloakInitialized) {
      initKeycloak()
        .then(auth => {
          setAuthenticated(auth);
          if (keycloak && auth) {
            setUser({
              name: keycloak.tokenParsed?.username,
              dni: keycloak.tokenParsed?.dni
            });
          }
          setInitialized(true);
          setKeycloakInitialized(true); // Marca como inicializado para evitar reinicializaciones
        })
        .catch(err => console.error('Failed to initialize Keycloak', err));
    }
  }, [keycloakInitialized]); // Solo se ejecuta si keycloakInitialized cambia

  return (
    <KeycloakContext.Provider value={{ initialized, authenticated, user, logout }}>
      {initialized && children} {/* Solo renderiza los hijos cuando Keycloak esté inicializado */}
    </KeycloakContext.Provider>
  );
};

export const useKeycloak = () => useContext(KeycloakContext);