import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import store from "./app/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);


