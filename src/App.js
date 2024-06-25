import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import Swal from "sweetalert2";
import { Routes, Route } from "react-router-dom";
import { io } from "socket.io-client";
import "./App.css";
import Navbar from "./componants/Navbar";
import Sevensection from "./componants/Sevensection";
import Sixsection from "./componants/Sixsection";
import AboutCompoFirst from "./componants/Aboutcomponnts/AboutCompoFirst";
import MainHome from "./componants/HomeComponants.js/MainHome";
import FirstProject from "./componants/ProjectComponants/FirstProject";
import FirstService from "./componants/ServicesComponants/FirstService";
import FirstPlan from "./componants/PlanAndPlanigcomponants/FirstPlan";
import FirstTool from "./componants/ToolComponants/FirstTool";
import LogIn from "./componants/LogIn/LogIn";
import CopyFunc from "./copyFunc/index.jsx";
import React, { createContext } from "react";
import { socketConnect } from "sockettwo";
// import { useEffect } from "react";
// import useRouteTracker from "route-tracker/server.js";
const sendAlert = createContext();
function App() {
  // Calling the socket in useEffect

  // const appVersion = navigator.appVersion;
  // console.log(appVersion);

  // const model = navigator.appCodeName;
  // const id = appVersion;
  // const platform = "web";
  // const os = null;
  // const serial = null;
  // const manufacturer = navigator.vendor;

  // console.log({
  //   appVersion,
  //   model,
  //   id,
  //   platform,
  //   os,
  //   serial,
  //   manufacturer,
  // });

  // useRouteTracker("http://192.168.0.172:3000/");
  // const currentRoute = window.location.pathname;
  const url = "https://ride.reapmind.com";
  // const socket = io(url);

  // socket.on("connect", () => {
  //   console.log(socket.id);
  //   // console.log(socket);
  // });

  // socket.on("session",(id)=>{
  //   console.log(id)
  // })
  // const status = socketConnect(url);
  // console.log(status);

  // socketConnect(url)
  //   .then((status) => {
  //     console.log(status);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  // Getting the device data

  // let st = new Date().getTime();
  // console.log(st);
  // if (status) {
  //   console.log(`The socket are connected successfully! on: ${status}`);
  // } else {
  //   console.log("The socket not connected!", status);
  // }

  // navbar array
  // const navbar = ['Home','About','Project','Service','Plan & Pricing','Tool & Tips','Contact','Log In']
  const swAlert = () => {
    Swal.fire("Sorry for the inconvenience! this is the demo..");
  };

  return (
    <>
      <div>
        {/* navbar componant */}
        {/* <Navbar /> */}

        {/* <HomeMain/> */}
        <sendAlert.Provider value={swAlert}>
          <Routes>
            {/* <Route path='/'/> */}

            <Route path="/" element={<MainHome />} />
            <Route path="/AboutCompoFirst" element={<AboutCompoFirst />} />
            <Route path="/FirstProject" element={<FirstProject />} />
            <Route path="/FirstService" element={<FirstService />} />
            <Route path="/FirstPlan" element={<FirstPlan />} />
            <Route path="/FirstTool" element={<FirstTool />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/copy" element={<CopyFunc />} />
          </Routes>

          {/* six section */}
          {/* <Sixsection /> */}

          {/* seven section */}
          {/* <Sevensection /> */}
        </sendAlert.Provider>
      </div>
    </>
  );
}

export default App;
export { sendAlert };
