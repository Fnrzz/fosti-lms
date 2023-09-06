import CardNews from "@/components/ui/cardNews";

const News = () => {
  return (
    <div className="container py-5">
      <div className="row g-3 align-items-center">
        <div className="col-12 col-md-4">
          <h3 className="fw-semibold">Our newest program</h3>
          <h6>
            In collaboration with partners, we organize several programs to
            support Indonesian developers.
          </h6>
        </div>
        <div className="col-12 col-md-8">
          <div id="carouselExampleFade" className="carousel slide ">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <CardNews />
              </div>
              <div className="carousel-item">
                <CardNews />
              </div>
              <div className="carousel-item">
                <CardNews />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleFade"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
