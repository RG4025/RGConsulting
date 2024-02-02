function Foursection(props) {
  let main = props.setImage;

  return (
    <>
      <div className="my-5 text-center py-5">
        <h3 className="my-5 fs-1">OUR CLIENTS</h3>

        <div className="d-md-flex mb-5">


                   { 
                      main.map((rg,key) => {
                      return (
                            <div className="col" key={key}>
                              <div className="container">

                                <img src={rg} className="w-50" />
                              </div>
                            </div>
                        );
                       })
                    }
             </div>
      </div>
    </>
  );
}

export default Foursection;
