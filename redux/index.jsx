import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import ControlPanel from "./components/ControlPanel.jsx";
import store from "./Store";

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.querySelector("#root")
);
