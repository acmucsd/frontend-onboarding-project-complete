import React, { useContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router';
import { User } from '../api';
import { pathLinks } from '../pathLinks';

type GlobalContextType = {
  apiUrl: string;
  user: User | null;
  loggedIn: boolean;
  logout: Function;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setApiUrl: React.Dispatch<React.SetStateAction<string>>;
};

export const GlobalContext = React.createContext<GlobalContextType>(null as any);

export const GlobalProvider: React.FC = ({ children }) => {
  const [apiUrl, setApiUrl] = useState('http://localhost:4000');
  const [user, setUser] = useState<User | null>(null);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    setLoggedIn(user !== null);
  }, [user]);

  return (
    <GlobalContext.Provider
      value={{
        apiUrl,
        user,
        loggedIn,
        logout: () => {
          setUser(null);
        },
        setApiUrl,
        setUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const RequireLogin = ({ children }) => {
  const { loggedIn } = useContext(GlobalContext);
  return loggedIn ? children : <Redirect to={pathLinks.home} />;
};
