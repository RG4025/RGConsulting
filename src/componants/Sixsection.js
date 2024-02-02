import React, { useContext } from "react";
import { sendAlert } from "../App";

function Sixsection() {

  const getAlert = useContext(sendAlert);

  return (
    <>
      <section style={{ background: "#0C3C60" }} className=" pb-1 pb-sm-5 main_contact">
        <div className="container mt-sm-5 pt-sm-5" style={{margin:'0 auto'}}>
          <div className="text-center py-5">
            <h3 className="text-light fs-1 px-5">CONTACT</h3>
          </div>

          <div className="container" style={{margin:'0 auto'}}>
            <div className="row">
              <div className="col-12 col-sm-6  my-3">
                     <div className="container">

                        <label className="text-light fs-5">First Name</label>
                        <br/>
                        <input type="text" className="input_one w-75 text-light"/>
                    </div> 
              </div>
              
                    <div className="col-12 col-sm-6  my-3">
                        <div className="container">
                                <label className="text-light fs-5">Last Name</label>
                                <br/>
                                <input type="text" className="input_one w-75 text-light"/>
                        </div>
                    </div>
              <div className="col-12 col-sm-6  my-3">
                        <div className="container">
                                <label className="text-light fs-5">Email*</label>
                                <br/>
                                <input type="text" className="input_one w-75 text-light"/>
                        </div>
                </div>
              <div className="col-12 col-sm-6  my-3">
                        <div className="container">
                                <label className="text-light fs-5">Subject</label>
                                <br/>
                                <input type="text" className="input_one w-75 text-light"/>
                         </div>
              </div>

            
            </div>

            <div className="row mt-3 pb-5">
                <div className="col-12 col-sm-9">
                    <label className="text-light">Message</label>
                    <br/>
                    <textarea className="textareaMain w-100" ></textarea>
                </div>
                <div className="col-12 col-sm-3 mt-4">
                    <button type="submit" className="btnSubmit" onClick={getAlert}>Submit</button>
                </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 pb-5">

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d119270.54670247904!2d77.76174549999999!3d20.9040872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4a67774bc15%3A0x3c7b3f78ca4f9635!2z4KSF4KSu4KSw4KS-4KS14KSk4KWALCDgpK7gpLngpL7gpLDgpL7gpLfgpY3gpJ_gpY3gpLA!5e0!3m2!1shi!2sin!4v1700571531052!5m2!1shi!2sin" className="w-100 h-100"></iframe>
            
        </div>
      </section>
    </>
  );
}

export default Sixsection;
