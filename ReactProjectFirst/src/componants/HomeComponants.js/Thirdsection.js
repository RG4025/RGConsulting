import React, { useContext } from "react";
import { sendAlert } from "../../App";


function Thirdsection() {

  const getAlert = useContext(sendAlert);

  return (
    <>
      <div className="main_parent" style={{overflow:'hidden'}}>
        <section className="sec_three_one ">
          <img
            src="https://media.gettyimages.com/id/1269225044/photo/mountain-hiker.jpg?s=612x612&w=0&k=20&c=5UywXvphtc9bx4Q-RplMO7skGCyPWPh9NsfVT046UlA="
            alt="Image Mountain"
          />
        </section>
          <div className="container">
            <div className="text-center sec_three_two text-dark">
              <h3 className="fs-2 text-center">ABOUT US</h3>

              <p className="mt-3">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>
              <br />
              <br />
              <p className="mb-5">
                I'm a paragraph. Click here to add your own text and edit me.
                It’s easy. Just click “Edit Text” or double click me to add your
                own content and make changes to the font. Feel free to drag and
                drop me anywhere you like on your page. I’m a great place for
                you to tell a story and let your users know a little more about
                you.
              </p>

              <a href="#" onClick={getAlert}>Learn More</a>
            </div>
          </div>
      </div>
    </>
  );
}

export default Thirdsection;
