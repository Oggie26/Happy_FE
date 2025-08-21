import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('auth_state');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setIsAuthenticated(Boolean(parsed?.isAuthenticated));
        setUser(parsed?.user || null);
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('auth_state', JSON.stringify({ isAuthenticated, user }));
  }, [isAuthenticated, user]);

  const login = async (credentials) => {
    const { username } = credentials;
    setUser({ username });
    setIsAuthenticated(true);
    return true;
  };

  const logout = () => {
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = useMemo(() => ({ isAuthenticated, user, login, logout }), [isAuthenticated, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

