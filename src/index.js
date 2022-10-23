import React from "react"
import * as ReactDOM from 'react-dom/client';
import App from "./App";

import style from "./css/index.scss"

render();


function render()
{
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    const element = <App></App>;
    root.render(element);
}
