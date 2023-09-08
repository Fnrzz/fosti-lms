import { useState } from "react";
import Image from "next/image";
import Style from "./style.module.css";
const AccordionAbout = () => {
  const [imageShow, setImageShow] = useState("1");
  const [imageOpacity, setImageOpacity] = useState(1);

  const handleImage = (number) => {
    setImageOpacity(0);
    setTimeout(() => {
      setImageShow(number);
      setImageOpacity(1);
    }, 500);
  };

  return (
    <div className={`row g-3 align-items-center ${Style["accordion-about"]}`}>
      <div className="col-12 col-md-5">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item bg-body-secondary">
            <h2 className="accordion-header">
              <button
                className="accordion-button fw-bold bg-body-secondary text-dark"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
                onClick={() => handleImage("1")}
              >
                Global Industry Standard Curriculum
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                The curriculum was developed with world companies and technology
                owners according to the latest industry needs.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-body-secondary ">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-body-secondary text-dark fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
                onClick={() => handleImage("2")}
              >
                Flexible Learning According To Your Schedule
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Study anytime, anywhere, independently. Free to choose classes
                according to learning interests. Lifetime access to classes and
                discussion forums after graduation.
              </div>
            </div>
          </div>
          <div className="accordion-item bg-body-secondary">
            <h2 className="accordion-header">
              <button
                className="accordion-button bg-body-secondary text-dark fw-bold collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
                onClick={() => handleImage("3")}
              >
                Code Reviews From Expert Developers
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                Validate your skills through 1-on-1 Professional Code Review
                provided directly by a Developer Expert.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-none d-md-block col-md-7">
        <Image
          src={`/images/feature-${imageShow}.png`}
          width={600}
          height={400}
          className={Style["fade-image"]}
          style={{ opacity: imageOpacity }}
          alt="feature"
        />
      </div>
    </div>
  );
};

export default AccordionAbout;
