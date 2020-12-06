import React from "react"
import ReactDOM from "react-dom"
import App from "./App";
import {BrowserRouter} from "react-router-dom";

import "./assets/bootstrap.min.css"
import "./assets/blog.css"


ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById('root')
)