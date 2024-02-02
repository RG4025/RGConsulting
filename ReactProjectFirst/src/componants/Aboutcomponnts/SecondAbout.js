export default function SecondAbout(props) {
  let main = props.setData;
  return (
    <>
      <section className="my-1 my-sm-5 pt-sm-5">
        <div className="container mt-sm-5">
          <div className="row ">
            {main.map((rg,key) => {
              return (
                <div className="col-12 col-md-4 section_wrapper" key={key}>
                  <figure>
                    <div className="secondAbout_image">
                      <img src={rg.imgUrl} alt="author" className="img-fluid" />
                    </div>
                    <figcaption>    
                      <div className="container text-left">
                        <h3 className="my-4">{rg.name}</h3>
                        <span className="my-5">{rg.post}</span>
                        <p className="mt-3">{rg.para}</p>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
