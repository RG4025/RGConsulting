import React, { useContext } from "react";
import { sendAlert } from "../../App";

function Secondsection(props) {

    const getAlert = useContext(sendAlert);
    let main = props.setData;

  return (
    <section className="container-fluid my-5 sec_sec_main">
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-3">

            {
                main.map((rg,key) =>{
                    return(

                <div className="col my-4" key={key}>
                    <div className="container text-center sec_sec_ancher">

                    <h3 className="mt-4">{rg.title}</h3>

                    <p>
                        {rg.body}
                    </p>

                    <a href={rg.btn_href} type="button" onClick={getAlert}>More Info</a>
                    </div>
                </div>
                    )
                })
            }

        </div>
      </div>
    </section>
  );
}

export default Secondsection;
