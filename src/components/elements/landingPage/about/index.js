import React from "react";
import AccrodionAbout from "@/components/ui/accordionAbout";

const About = () => {
  return (
    <div className="container">
      <div className="row flex-column">
        <div className="col">
          <h3 className="fw-semibold text-center">
            Why Should You Study With Us?
          </h3>
        </div>
        <div className="col mt-2 d-flex justify-content-center">
          <p className="text-secondary d-md-block d-none w-50 text-center">
            Its time to wisely choose learning resources. Not only is the
            material guaranteed, We also have professional reviewers who will
            review your code.
          </p>
          <p className="text-secondary d-sm-block d-md-none text-center">
            Its time to wisely choose learning resources. Not only is the
            material guaranteed, We also have professional reviewers who will
            review your code.
          </p>
        </div>
      </div>
      <AccrodionAbout />
    </div>
  );
};

export default About;
