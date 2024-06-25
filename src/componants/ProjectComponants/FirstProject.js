import React from "react";
// import { socketConnect } from "sockettwo";
export default function FirstProject() {
  // const status = socketConnect("https://ride.reapmind.com");
  // if (status) {
  //   console.log(`The socket are connected successfully! on: ${status}`);
  // }
  
  const ourProject = [
    {
      imgUrl:
        "https://static.wixstatic.com/media/82fcd3_f5b2e31b2f244bc6abb664c10a1d8bc4~mv2.jpg/v1/crop/x_0,y_157,w_5500,h_3353/fill/w_657,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1163568487.jpg",
      name: "FIRST PROJECT",
      para: "Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/82fcd3_9a2239df57c946c485ee266996b123a5~mv2.jpg/v1/crop/x_1088,y_616,w_4412,h_2700/fill/w_657,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1180038900.jpg",
      name: "SECOND PROJECT",
      para: "Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/82fcd3_279d841331e2451fa21f0e987ef4a325~mv2.jpg/v1/crop/x_0,y_54,w_2000,h_1224/fill/w_657,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1175414010.jpg",
      name: "THIRD PROJECT",
      para: "Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
    {
      imgUrl:
        "https://static.wixstatic.com/media/82fcd3_7eb8f2488b994e01aa6fa3ad938df939~mv2.jpg/v1/crop/x_0,y_319,w_6986,h_4274/fill/w_657,h_402,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/GettyImages-1210182374.jpg",
      name: "FOURTH PROJECT",
      para: "Im a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.",
    },
  ];

  return (
    <>
      <section className=" my-sm-5 pt-sm-5 main_contact">
        <div className="container mt-sm-5 section_wrapper_project">
          <div className="text-center mb-5">
            <h1 style={{ fontSize: "50px", color: "" }}>PROJECTS</h1>
          </div>

          <div className="row ">
            {ourProject.map((rg, key) => {
              return (
                <div
                  className="my-2 my-sm-5 col-12 col-md-5 section_wrapper_project"
                  key={key}
                >
                  <div className="container">
                    <figure>
                      <div className="secondAbout_image">
                        <img
                          src={rg.imgUrl}
                          alt="Project"
                          className="img-fluid"
                        />
                      </div>
                      <figcaption>
                        <div className="container text-left">
                          <h3 className="my-4">{rg.name}</h3>
                          <p className="mt-3">{rg.para}</p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
