
import './index.css';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { PersistGate } from 'redux-persist/lib/integration/react';
import Loader from './components/Core/Loader';
import {store, persistor} from './redux/store';
import routes from "../src/config/routes"



render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Loader/>}>
            {routes(store)}
        </PersistGate>
    </Provider>,
    document.getElementById('root')
)

