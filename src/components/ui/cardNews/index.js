import Image from "next/image";

const CardNews = ({ news }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="card rounded-4 shadow-sm" style={{ width: "75%" }}>
        <div className="card-body p-3">
          <div className="row g-3 align-items-start">
            <div className="col-12 col-md-4">
              <Image
                src="/images/card-example.png"
                layout="responsive"
                width={500}
                height={300}
                alt="card-example"
              />
            </div>
            <div className="col-12 col-md-8">
              <small className="card-subtitle text-body-secondary">
                Oleh Google, GoTo, dan Traveloka
              </small>
              <h6 className="card-title my-2">Bangkit Academy 2023</h6>
              <small className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the content.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardNews;
