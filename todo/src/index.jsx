import React from "react";
import ReactDOM from "react-dom";
import {AppContainer} from 'react-hot-loader';
import { Provider } from "react-redux";

import TodoApp from "./TodoApp";
import store from "./Store";
import './style.less';

const mountNode = document.getElementById("root")
const appRender = (TodoApp)=>{
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <TodoApp />
            </Provider>
        </AppContainer>,
        mountNode
    );
}
appRender(TodoApp)


if(module.hot && process.env.NODE_ENV !== 'production'){
    module.hot.accept('./TodoApp',()=>{
        ReactDOM.unmountComponentAtNode(mountNode);
        // const App = require('./TodoApp').default;
        appRender(App);
    })
}
