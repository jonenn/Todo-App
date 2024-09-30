import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { Provider } from 'react-redux';
import App from './app/App.jsx';
import { store } from './features/store.js';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <Provider store={store}>
         <App />
      </Provider>
   </StrictMode>
);
