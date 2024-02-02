import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Swal from 'sweetalert2'
import { Routes,Route } from 'react-router-dom';

import './App.css';
import Navbar from './componants/Navbar';
import Sevensection from './componants/Sevensection';
import Sixsection from './componants/Sixsection';
import AboutCompoFirst from './componants/Aboutcomponnts/AboutCompoFirst';
import MainHome from './componants/HomeComponants.js/MainHome';
import FirstProject from './componants/ProjectComponants/FirstProject';
import  FirstService  from './componants/ServicesComponants/FirstService';
import FirstPlan from './componants/PlanAndPlanigcomponants/FirstPlan';
import FirstTool from './componants/ToolComponants/FirstTool';
import LogIn from './componants/LogIn/LogIn';
import { createContext } from 'react';

const sendAlert = createContext();
function App() {

  // navbar array 
  // const navbar = ['Home','About','Project','Service','Plan & Pricing','Tool & Tips','Contact','Log In']
 const swAlert = () =>{
    Swal.fire("Sorry for the inconvenience! this is the demo..");
 }

  return (
    <>
    <div>
      {/* navbar componant */}
     <Navbar/>

    {/* <HomeMain/> */}
      <sendAlert.Provider value={swAlert}>
      <Routes>
      {/* <Route path='/'/> */}


      <Route path='/' element={<MainHome/>}/>
      <Route path='/AboutCompoFirst' element={<AboutCompoFirst/>}/>
      <Route path='/FirstProject' element={<FirstProject/>}/>
      <Route path='/FirstService' element={<FirstService/>}/>
      <Route path='/FirstPlan' element={<FirstPlan/>}/>
      <Route path='/FirstTool' element={<FirstTool/>}/>
      <Route path='/LogIn' element={<LogIn/>}/>
      </Routes>


      {/* six section */}
      <Sixsection/> 

      {/* seven section */}
      <Sevensection/>

      </sendAlert.Provider>
    </div>

    </>
  );
}

export default App;
export {sendAlert};