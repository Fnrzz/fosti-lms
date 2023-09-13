import Carousel from "@/components/ui/carousel";
import GetNews from "./getNews";
import { useEffect, useState } from "react";

const News = () => {
  const [newsData, setNewsData] = useState([]);

  // useEffect(() => {
  //   // Mengambil data dari API saat komponen dimuat
  //   GetNews().then((data) => {
  //     setNewsData(data);
  //   });
  // }, []);

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
          {/* <Carousel newsData={newsData} /> */}
          <Carousel />
        </div>
      </div>
    </div>
  );
};

export default News;
