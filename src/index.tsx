import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import { App } from 'components/App';
import { Loader } from 'components/Loader/Loader';
import { store, persistor } from "./redux/store";
import './index.css';

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
ReactDOM.createRoot(document.getElementById('root')).render(

    <BrowserRouter basename="/tasty-treats">
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>

);
