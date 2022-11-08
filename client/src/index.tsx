import { StyledEngineProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import GlobalStyle from './styles/globalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <Provider store={store}>
      <StyledEngineProvider injectFirst>
        <GlobalStyle />
        <App />
      </StyledEngineProvider>
    </Provider>
  </>,
);
