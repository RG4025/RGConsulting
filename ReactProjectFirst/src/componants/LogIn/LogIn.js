import React, { useContext } from "react";
import Swal from 'sweetalert2'
import { sendAlert } from "../../App";

// or via CommonJS
// const Swal = require('sweetalert2')
export default function LogIn() {

    const getAlert = useContext(sendAlert);

    // function swAlert(){
    //     Swal.fire("Sorry for the inconvenience! this is the demo..");
    // }


  return (
    <>
      <section className="container-fluid my-2 my-sm-5">
        <div className="container my-5">
          <div className="main_loginForm ">
            <div className="container d-flex justify-content-center alig-items-center py-5">
              <div>
                <h3 className="pb-3">Login</h3>
                <div className="row row-cols-1 row-cols-sm-2">

                <div className="col">
                  <label htmlFor="email"> Your Name:</label>
                  <br />
                  <input type="email" placeholder="Email" />
                </div>

                <div className="col">
                  <label htmlFor="pass">Your Password:</label>
                  <br />
                  <input type="password" placeholder="Password" />
                  <br />
                  <a href="#" onClick={getAlert}>Forget Password?</a>
                </div>
                </div>
                <div className="my-3">
                <div>
                  <div>
                    <button  type="button" onClick={getAlert}>Login</button>
                    <p>Not a member? <a href="#" onClick={getAlert}>Signup now</a></p>
                  </div>

                  <div>
                    
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
