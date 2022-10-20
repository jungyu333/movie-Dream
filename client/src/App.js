import Router from './router';
import axios from 'axios';
import React from 'react';
import GlobalFont from './fonts/fonts';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <>
      <GlobalFont />
      <Router />
    </>
  );
}

export default App;
