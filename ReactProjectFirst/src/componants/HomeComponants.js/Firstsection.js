import React, { useContext } from "react";
import { sendAlert } from "../../App";

function Firstsection() {

  const getAlert = useContext(sendAlert);

  return (
    <>
      <section className=" back_image_one d-flex justify-content-center align-items-center main_conatct">
        <img
          src="https://media.gettyimages.com/id/1269225044/photo/mountain-hiker.jpg?s=612x612&w=0&k=20&c=5UywXvphtc9bx4Q-RplMO7skGCyPWPh9NsfVT046UlA="
          className="img-fluid"
          alt="Image Mountain"
        />
      
        <div className="section_one_div w-50 bg-white text-black text-center mt-3 mb-5">
          <p>Developing Innovative Strategies</p>
          <h1>ACHIEVING GROWTH</h1>
          <button type="button" className="sec_one_btn" onClick={getAlert}>
            Book A Consulting
          </button>
        </div>
      </section>
    </>
  );
}

export default Firstsection;
