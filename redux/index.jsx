import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import store from "./Store";
import ControlPanel from "./components/ControlPanel.jsx";

ReactDOM.render(
    <Provider store={store}>
        <ControlPanel />
    </Provider>,
    document.querySelector("#root")
);
