import React from 'react';
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
// @ts-expect-error TS(2307): Cannot find module 'components/App' or its corresp... Remove this comment to see the full error message
import { App } from 'components/App';
// @ts-expect-error TS(2307): Cannot find module 'components/Loader/Loader' or i... Remove this comment to see the full error message
import { Loader } from 'components/Loader/Loader';
import { store, persistor } from "./redux/store";
import './index.css';

// @ts-expect-error TS(2345): Argument of type 'HTMLElement | null' is not assig... Remove this comment to see the full error message
ReactDOM.createRoot(document.getElementById('root')).render(

    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <BrowserRouter basename="/tasty-treats">
      {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Provider store={store}>
        {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <PersistGate loading={<Loader />} persistor={persistor}>
          {/* @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>

);
