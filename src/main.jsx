import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import QueryProvider from './utils/QueryProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain="pauciva.eu.auth0.com"
      clientId="l9nttm0dnoICOXMBixmGUAdfIPoa8COl"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      audience="http://localhost:4000"
    >
      <QueryProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </QueryProvider>
    </Auth0Provider>
  </React.StrictMode>
);
