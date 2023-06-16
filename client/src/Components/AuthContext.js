import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cook, setCook]=useState(false);

  return (
    <AuthContext.Provider value={{ loggedIn, setLoggedIn, cook, setCook }}>
      {children}
    </AuthContext.Provider>
  );
};
