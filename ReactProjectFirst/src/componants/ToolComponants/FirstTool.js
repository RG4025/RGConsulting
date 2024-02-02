import React from "react";
import SecondTool from "./SecondTool";

export default function FirstTool() {
  return (
    <>
      <section className="container-fluid  py-2 py-sm-5 main_contact">
        <div className="container my-sm-5 pb-sm-5">
          <div className="text-center w-75 d-flex justify-content-center align-items-center flex-column firstTool_wrapper">
            <h1>TOOLS & TIPS</h1>

            <p>
              Use this area to upload files you wish to share with your users.
              You can manage who has access to your files and what they can do,
              such as view & download, upload items and more.
            </p>
          </div>
          <div className="mt-sm-5">
            <SecondTool />
          </div>
        </div>
      </section>
    </>
  );
}
