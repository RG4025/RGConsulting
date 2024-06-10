import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import SocketProvider from "my-react-socket-package";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <BrowserRouter>
    {/* <SocketProvider url="https://dev.vkonnecthealth.com/">
    </SocketProvider> */}
      <App />
  </BrowserRouter>

);
