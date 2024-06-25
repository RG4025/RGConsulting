import React, { useContext } from "react";
import { sendAlert } from "../../App";

export default function FirstService() {
  const getAlert = useContext(sendAlert);

  const serviceData = [
    {
      imgSrc:
        "https://static.wixstatic.com/media/82fcd3_0b475e3f9c2a4244aceaa58c1ca3c932~mv2.jpg/v1/fill/w_704,h_435,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/82fcd3_0b475e3f9c2a4244aceaa58c1ca3c932~mv2.jpg",
      heading: "PROJECT MANAGEMENT",
      time: "1",
      price: "220",
    },
    {
      imgSrc:
        "https://static.wixstatic.com/media/82fcd3_ee75c9f1b8e7451cbbf134f22529874e~mv2.jpg/v1/fill/w_704,h_435,fp_0.50_0.50,q_80,usm_0.66_1.00_0.01,enc_auto/82fcd3_ee75c9f1b8e7451cbbf134f22529874e~mv2.jpg",
      heading: "OPERATIONAL CONSULTING",
      time: "1",
      price: "150",
    },
  ];

  return (
    <>
      <section className=" serviceSection pt-2 pt-sm-3 main_contact">
        <div className="container">
          <div className="text-center my-1 my-sm-5">
            <h1 className="py-5">SERVICES</h1>
          </div>

          {serviceData.map((rg) => {
            return (
              <div className="container my-1 my-sm-5 pb-md-5" key={rg.imgSrc}>
                <div className="container">
                  <div className="d-md-flex service_wrapper">
                    <div className="w-100">
                      <img
                        src={rg.imgSrc}
                        alt="serviceImage"
                        className="img-fluid"
                      />
                    </div>

                    <div className="container d-flex justify-content-center ">
                      <div className="text-left mt-5">
                        <h3 className="my-3">{rg.heading}</h3>

                        <span className="py-3">{rg.time} hr</span>
                        <br />
                        <span className="my-3">${rg.price}</span>
                        <br />
                        <button
                          type="button"
                          className="mt-4"
                          onClick={getAlert}
                        >
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
