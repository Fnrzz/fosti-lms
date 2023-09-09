import CardNews from "@/components/ui/cardNews";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

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
            <div className="row justify-content-end mb-2">
              <div className="col-2 d-flex justify-content-end ">
                <button
                  className="btn btn-secondary rounded-4 d-flex align-items-center justify-content-center"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="prev"
                >
                  <AiOutlineArrowLeft />
                </button>
              </div>
              <div className="col-2">
                <button
                  className="btn btn-secondary rounded-4 d-flex align-items-center justify-content-center"
                  type="button"
                  data-bs-target="#carouselExampleFade"
                  data-bs-slide="next"
                >
                  <AiOutlineArrowRight />
                </button>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
