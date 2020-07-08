import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import * as serviceWorker from "./serviceWorker";
import store from "./redux/redux-store";
import App from "./App";
import {Provider} from "react-redux";
import {BrowserRouter, HashRouter} from "react-router-dom";


// let renderEntireDocument = (state) => {
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <HashRouter>
                <App/>
            </HashRouter>
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
// };

// renderEntireDocument(store.getState());
// store.subscribe(() => {
// 	renderEntireDocument(store.getState());
// });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
