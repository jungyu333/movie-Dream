import Router from './router';
import axios from 'axios';
import React from 'react';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;

function App() {
  return (
    <>
      <Router />
    </>
  );
}

export default App;
