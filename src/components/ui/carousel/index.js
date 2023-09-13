import React from "react";
import CardNews from "@/components/ui/cardNews";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";

const Carousel = ({ newsData }) => {
  return (
    <div id="carouselExampleFade" className="carousel slide ">
      <div className="row justify-content-end mb-3">
        <div className="col-2 d-flex justify-content-end ">
          <button
            className="btn btn-secondary rounded-circle py-2 px-2 d-flex align-items-center justify-content-center"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <AiOutlineArrowLeft />
          </button>
        </div>
        <div className="col-2">
          <button
            className="btn btn-secondary rounded-circle py-2 px-2 d-flex align-items-center justify-content-center"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <AiOutlineArrowRight />
          </button>
        </div>
      </div>
      <div className="carousel-inner">
        {/* {newsData.map((news, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <CardNews news={news} />
          </div>
        ))} */}
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
  );
};

export default Carousel;
