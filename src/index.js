import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductProvider } from './Context/ProductContext';
import { RequestProvider } from './Context/RequestContext';
import { ValidationProvider } from './Context/ValidationContext';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <ProductProvider>
      <RequestProvider>
        <ValidationProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ValidationProvider>
      </RequestProvider>
    </ProductProvider>
  </React.StrictMode>
);