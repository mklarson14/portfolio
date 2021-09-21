import React from "react";

const AboutTwo = () => {
  return (
    <>
      <div className="shane_tm_section" id="about">
        <div className="shane_tm_about">
          <div className="container">
            <div className="about_inner">
              <div className="left">
                <div
                  className="image"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <img src="/img/about/telluride.jpg" alt="skiingTelluride" />

                  <div
                    className="main"
                    style={{
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL + "img/about/telluride.jpg"
                      })`,
                    }}
                  ></div>
                </div>
                {/* End image */}
              </div>
              {/* End left */}

              <div className="right">
                <div
                  className="shane_tm_title"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <span>About Me</span>
                  <h3>Software Developer based in Seattle, WA </h3>
                </div>
                <div
                  className="text"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <p>
                    I am a Software Developer, an adventure seeker, and a divergent thinker.
                    I utilize my past experiences to bring a fresh perspective to evaluate problems and develop solutions.
                    Between backcountry skiing with friends and developing a full-stack app with classmates, communicating and collorabting is part of my everyday life. 
                  </p>
                </div>
                <div
                  className="shane_tm_button"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <a href="img/resume/McKennaLarsonDev2021.pdf" download>
                    Download Resume
                  </a>
                </div>
              </div>
              {/* End right */}
            </div>
          </div>
          {/* End container */}
        </div>
      </div>
    </>
  );
};

export default AboutTwo;
