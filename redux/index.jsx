import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';
import { Provider } from "react-redux";

import ControlPanel from "./components/ControlPanel.jsx";
import store from "./Store";
import './index.less';

const appRender = (ControlPanel)=>{
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <ControlPanel />
            </Provider>
        </AppContainer>,
        document.querySelector("#root")
    );
}
appRender(ControlPanel)


if(module.hot){
    module.hot.accept('./components/ControlPanel',()=>{
        const App = require('./components/ControlPanel').default;
        appRender(App);
    })
}
