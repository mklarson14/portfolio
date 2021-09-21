import React from "react";
import Social from "../SocialTwo";

const Slider = () => {
  return (
    <div className="slider-two">
      <div className="shane_tm_hero" id="home" data-style="three">
        <div className="background">
          <div
            className="image"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/slider/IMG_1792.jpg"
              })`,
            }}
          ></div>
        </div>
        {/* End .background */}

        <div className="container">
          <div className="content">
            <div className="name_wrap">
              <h3>
                <span>McKenna</span>Larson<span className="overlay_effect"></span>
              </h3>
            </div>
            {/* End title */}

            <div className="job_wrap">
              <span className="job">
                Software Developer
                <span className="overlay_effect"></span>
              </span>
            </div>
            {/* End designation */}

            <div className="job_wrap sociallo">
              <span className="job">
                <Social />
                <span className="overlay_effect"></span>
              </span>
            </div>
          </div>
          {/* End content */}

          <div className="shane_tm_down loaded">
            <div className="line_wrapper">
              <div className="line"></div>
            </div>
          </div>
        </div>
        {/* End .container */}
      </div>
    </div>
  );
};

export default Slider;
