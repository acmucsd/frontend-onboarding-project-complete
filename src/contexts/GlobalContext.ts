import React from 'react';

type GlobalContextType = {
  loggedIn: boolean;
};

export const GlobalContext = React.createContext<GlobalContextType>({
  loggedIn: false,
});
