import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import Layout from './components/Layout/Layout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Layout>
      <App />
    </Layout>
  </Provider>
);
