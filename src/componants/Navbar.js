import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

function Navbar(){
  const navbar = [
    "Home",
    "About",
    "Project",
    "Service",
    "Plan & Pricing",
    "Tool & Tips",
    "Contact",
    "Log In",
  ];

  // scrolling event

  const [id, setId] = useState(" ");

  var scrolling = 0;
  //  let navbar= document.getElementById('main_nav_fix');

  useEffect(
    function () {
      window.addEventListener("scroll", function () {
        var scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > scrolling) {
          setId("main_nav_fix");
        } else {
          setId("");
        }
        scrolling = scrollTop;
      });
    },
    [setId]
  );

  // let main = props.setData;
  const rowLen = navbar.length;

  const [nav, setNav] = useState("navbar_main");

  const [icon, setIcon] = useState("nav__toggler");

  function showDiv() {
    if (nav === "navbar_main") {
      setNav("navbar_main2");
    } else {
      setNav("navbar_main");
    }

    

  if (icon === "nav__toggler") {
    setIcon("nav__toggler toggle");
  } else setIcon("nav__toggler");


  }

  return (

    <>
    <div id={id} className="container-fluid navbar_first mb-5 py-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h4 className="mt-1">JAMES CONSULTING</h4>
          </div>
          <div className="ms-5 d-md-block">
            <ul className={nav}>
              {navbar.map((rg, i) => {
                if(true){

                  if (rowLen === i + 8) {
                    return (
                      <li className="nav-item" key={rg}>
                      <Link
                        className="nav-link text-light active"
                        to="/"
                        key={rg}
                      >
                      <span>{rg}</span>
                      </Link>
                    </li>
                  );
                } else if (rowLen === i + 7) {
                  return (
                    <li className="nav-item" key={rg}>
                      <Link
                        className="nav-link text-light active"
                        to="/AboutCompoFirst"
                        key={rg}
                      >
                       <span>{rg}</span> 
                      </Link>
                    </li>
                  );
                } else if (rowLen === i + 6) {
                  return (
                    <li className="nav-item" key={rg}>
                      <Link
                        className="nav-link text-light active"
                        to="/FirstProject"
                        key={rg}
                        >
                       <span> {rg}</span>
                      </Link>
                    </li>
                  );
                } else if (rowLen === i + 5) {
                  return (
                    <li className="nav-item" key={rg}>
                      <Link
                        className="nav-link text-light active"
                        to="/FirstService"
                        key={rg}
                        >
                       <span>{rg}</span> 
                      </Link>
                      {/* <a href="#" className="nav-link text-light">{rg}</a> */}
                    </li>
                  );
                } else if (rowLen === i + 4) {
                  return (
                    <li className="nav-item" key={rg}>
                      <Link
                        className="nav-link text-light active"
                        to="/FirstPlan"
                        key={rg}
                      >
                       <span>{rg}</span> 
                      </Link>
                    </li>
                  );
                } else if (rowLen === i + 3) {
                  return (
                    <li className="nav-item" key={rg}>
                      <Link
                        className="nav-link text-light active"
                        to="/FirstTool"
                        key={rg}
                        >
                       <span> {rg}</span>
                      </Link>
                    </li>
                  );
                } else if (rowLen === i + 2) {
                  return (
                    <li className="nav-item" key={rg}>
                      <Link
                        className="nav-link text-light active"
                        to="/Sixsection"
                        key={rg}
                        >
                       <span> {rg}</span>
                      </Link>
                    </li>
                  );
                } else if (rowLen === i + 1) {
                  return (
                    <li className="nav-item" key={rg}>
                      {/* <a href="/" className="nav-link text-light"><i className="bi bi-person-circle me-2 mt-2 fs-6"></i>{rg}</a> */}
                      <Link
                        className="nav-link text-light active"
                        to="/LogIn"
                        key={rg}
                      >
                        <i className="bi bi-person-circle me-2 mt-2 fs-6"></i>
                       <span>{rg}</span> 
                      </Link>
                    </li>
                  );
                }
              }
              })}
            </ul>
           </div>
                  <div className={icon} onClick={showDiv}>
                    {/* <i className={icon}></i> */}
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                  </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Navbar;
