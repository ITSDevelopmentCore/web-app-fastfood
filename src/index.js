import React from "react"
import * as ReactDOM from 'react-dom/client';
import App from "./App";

import style from "./css/index.scss"

render();

window.Telegram.WebApp.themeParams.bg_color = "#FFFFFF";
window.Telegram.WebApp.themeParams.secondary_bg_color = "#FFFFFF";

function render()
{
    const root = ReactDOM.createRoot(
        document.getElementById('root')
    );
    const element = <App></App>;
    root.render(element);
}
