import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="pauciva.eu.auth0.com"/* {import.meta.env.REACT_APP_AUTH0_DOMAIN} */
      clientId="l9nttm0dnoICOXMBixmGUAdfIPoa8COl"/* {import.meta.env.REACT_APP_AUTH0_CLIENT_ID} */
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
      audience="http://localhost:4000"/* {import.meta.env.REACT_APP_AUTH0_AUDIENCE} */
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Auth0Provider>
  </React.StrictMode>
);
