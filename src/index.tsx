import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalContext } from './contexts/GlobalContext';

import './index.css';
import Paths from './Paths';

ReactDOM.render(
  <React.StrictMode>
    <GlobalContext.Provider value={{ loggedIn: false }}>
      <Paths />
    </GlobalContext.Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
