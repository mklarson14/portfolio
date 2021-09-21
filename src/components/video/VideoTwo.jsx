import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="shane_tm_section">
      <div className="shane_tm_business_video">
        <div className="bg">
          <div
            className="image jarallax"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + "img/video/smac.jpg"
              })`,
            }}
          ></div>
          <div className="overlay"></div>
        </div>
        {/* End .bg */}

        <div className="content">
          <ModalVideo
            channel="vimeo"
            autoplay
            isOpen={isOpen}
            videoId="609256652"
            onClose={() => setOpen(false)}
          />

          <div data-aos="fade-up" data-aos-duration="1200">
            <span className="rounded" onClick={() => setOpen(true)}></span>
          </div>

          <h3
            className="text"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="50"
          >
            Check out my latest project!
          </h3>

          <div
            className="shane_tm_video_button"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <button className="popup-youtube" onClick={() => setOpen(true)}>
              Watch Video
            </button>
          </div>
        </div>
        {/* End .content */}
      </div>
      {/* End .shane_tm_business_video */}
    </div>
    // End .shane_tm_section
  );
};

export default Video;