import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalContext, GlobalProvider } from './contexts/GlobalContext';

import './index.css';
import Paths from './Paths';

ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <Paths />
    </GlobalProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
