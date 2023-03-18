import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Keycloak from 'keycloak-js';
import App from './App';
import './index.css';

const keycloak: Keycloak.KeycloakInstance = Keycloak();

keycloak.init({ onLoad: 'login-required' }) // Keycloak init sjekker og autentiserer.
  .success(() => {
    ReactDOM.render(
      <App />,
      document.getElementById('root') as HTMLElement
    );
  })
  .error(error => console.log(error));
