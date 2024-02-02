import React, { useContext } from "react";
import { sendAlert } from "../../App";

export default function FirstPlan() {

  const getAlert = useContext(sendAlert);

  let add = document.getElementById("changeClass");

  function show() {
    add.classList.toggle("main_plan2");
  }

  const planOne = [
    {
      heading: "Management 101",
      price: "50",
      data: "Actualize your business model and boost your KPIs",
      secondData: "Valid for 3 months",
    },
    {
      heading: "Financial Strategy",
      price: "100",
      data: "Add value and maximize your competitive advantage",
      secondData: "Valid for 6 months",
    },
    {
      heading: "Data and Digital Soal",
      price: "70",
      data: "Harness the power of technology to upgrade your business",
      secondData: "Valid for 12 months",
    },
  ];
  let count = planOne.length;

  const planTwo = [
    "1 Goal setting consultation",
    "3 Individual sessions",
    "Online resources",
  ];

  const planThree = [
    "1 Monthly goal setting meeting",
    "Unlimited individual sessions",
    "Online resources",
    "Phone support",
    "Weekly newsletter",
  ];

  const planFour = [
    "1 Monthly goal setting meeting",
    "4 Individual sessions",
    "Online resources",
    "1 Guest pass",
    "Phone support",
    "Weekly newsletter",
    "Priority support",
  ];

  return (
    <>
      <section className="container-fluid  pt-sm-5 main_contact">
        <div className="">
          <div className="text-center plan_wrapperOne py-sm-5 my-2 my-sm-5">
            <h1>GROWTH AND INNOVATION PLANS</h1>

            <p>
              We help businesses improve their performance through innovation in
              products, services, and strategy.
            </p>
          </div>

          <div className="container-fluid">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
              {planOne.map((rg, i, key) => {
                if (count === i + 2) {
                  return (
                    <div
                      className="d-flex justify-content-center align-items-center col "
                      key={key}
                    >
                      <div className="text-center plan_wrapperTwo pb-3 pb-sm-4">
                        <div className="plan_wrapperThree pt-3 pt-sm-5">
                          <h6 className="head_title">Best Value</h6>
                          <h5>{rg.heading}</h5>

                          <p className="dollerSetParent">
                            <strong>{rg.price}</strong>
                            <span className="dollerSetChild">$</span>
                          </p>
                          <span className="mx-3">{rg.data}</span>
                          <br />
                          <small>{rg.secondData}</small>
                          <br />
                          <button type="button" className="my-3" onClick={getAlert}>
                            Select
                          </button>
                        </div>
                        <div id="changeClass" className="styling mt-3">
                          {planThree.map((rg, key) => {
                            return (
                              <p>
                                <i class="bi bi-check-circle me-2"></i>
                                {rg}
                              </p>
                            );
                          })}
                        </div>
                        <div className="d-block d-sm-none">
                          <p onClick={show}>click to see</p>
                        </div>
                      </div>
                    </div>
                  );
                }

                if (count === i + 1) {
                  return (
                    <div
                      className="d-flex justify-content-center align-items-center col "
                      key={key}
                    >
                      <div className="text-center plan_wrapperTwo py-3 py-sm-5">
                        <h5>{rg.heading}</h5>

                        <p className="dollerSetParent">
                          <strong>{rg.price}</strong>
                          <span className="dollerSetChild">$</span>
                        </p>
                        <span className="mx-3">{rg.data}</span>
                        <br />
                        <small>{rg.secondData}</small>
                        <br />
                        <button type="button" className="my-3"  onClick={getAlert}>
                          Select
                        </button>

                        <div id="changeClass" className="styling mt-3">
                          {planFour.map((rg, key) => {
                            return (
                              <p>
                                <i class="bi bi-check-circle me-2"></i>
                                {rg}
                              </p>
                            );
                          })}
                        </div>
                        <div className="d-block d-sm-none">
                          <p onClick={show}>click to see</p>
                        </div>
                      </div>
                    </div>
                  );
                } else {
                  return (
                    <>
                      <div
                        className="d-flex justify-content-center align-items-center col "
                        key={key}
                      >
                        <div className="text-center plan_wrapperTwo py-3 py-sm-5">
                          <h5>{rg.heading}</h5>

                          <p className="dollerSetParent">
                            <strong>{rg.price}</strong>
                            <span className="dollerSetChild">$</span>
                          </p>
                          <span className="mx-3">{rg.data}</span>
                          <br />
                          <small>{rg.secondData}</small>
                          <br />
                          <button type="button" className="my-3"  onClick={getAlert}>
                            Select
                          </button>

                          <div id="changeClass" className="styling mt-3">
                            {planTwo.map((rg, key) => {
                              return (
                                <p>
                                  <i class="bi bi-check-circle me-2"></i>
                                  {rg}
                                </p>
                              );
                            })}
                          </div>
                          <div className="d-block d-sm-none">
                            <p onClick={show}>click to see</p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
