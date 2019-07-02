import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from "./store/index"
import { addArticle } from "./actions/index"
import { Provider } from "react-redux";

window.store = store;
window.addArticle = addArticle;

ReactDOM.render((
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
), 
document.getElementById('root')
);

serviceWorker.unregister();
