import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import './index.css'
import {Provider} from 'react-redux';
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/es/integration/react'
import { getTotals } from "./redux/cartRedux";

store.dispatch(getTotals());

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

