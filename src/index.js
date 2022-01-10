import React from 'react';
import ReactDOM from 'react-dom';
import Background from './components/Background';
import Main from './Main';

ReactDOM.render(
  <React.StrictMode>
    <Background />
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

