import React, { useState } from "react";
import Modal from "react-modal";
import Social from "../Social";

Modal.setAppElement("#root");

const NewsTwo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }

  return (
    <div className="shane_tm_section" id="news">
      <div className="shane_tm_news">
        <div className="container">
          <div className="shane_tm_title">
            <span>Portfolio</span>
            <h3>Projects</h3>
          </div>
          {/* End shane_tm_title */}
          <div className="news_list">
            <ul>
              <li data-aos="fade-right" data-aos-duration="1200">
                <div className="list_inner">
                  <div className="image" onClick={toggleModalOne}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/1.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalOne}>
                      AllParks
                    </h3>
                    <p className="date">
                      <span>August 2021</span>
                    </p>
                  </div>
                  {/* End details */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen}
                    onRequestClose={toggleModalOne}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalOne}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close icon */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/HomePage.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                             Find National Parks, Monuments, and Public Lands by state.
                            </h3>
                            <p className="date">
                              <a href="#">Solo project</a>{" "}
                              <span>August 2021</span>
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* End description */}
                          <div className="news_share">
                            <Social />
                            {/* End social share */}
                          </div>
                          {/* End news share */}
                        </div>
                      </div>
                      {/* End box inner */}
                    </div>
                    {/* End modal box news */}
                  </Modal>
                  {/* End modal */}
                </div>
              </li>
              {/* End single blog */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="150"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalTwo}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/2.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* End image */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalTwo}>
                      S.M.A.C. Overflow
                    </h3>
                    <p className="date">
                      <span>September 2021</span>
                    </p>
                  </div>
                  {/* End details */}

                  <Modal
                    isOpen={isOpen2}
                    onRequestClose={toggleModalTwo}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button className="close-modal" onClick={toggleModalTwo}>
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* End close modal */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/9.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* End image */}
                          <div className="details">
                            <h3 className="title">
                              Chat support for Software Developers
                            </h3>
                            <p className="date">
                              <a href="#">Team project</a>{" "}
                              <span>September 2021</span>
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* End description */}
                          <div className="news_share">
                            <Social />
                            {/* End social share */}
                          </div>
                          {/* End news share */}
                        </div>
                      </div>
                    </div>
                  </Modal>
                  {/* End modal */}
                </div>
                {/* End list inner */}
              </li>
              {/* End single blog */}

              <li
                data-aos="fade-right"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="list_inner">
                  <div className="image" onClick={toggleModalThree}>
                    <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                    <div
                      className="main"
                      style={{
                        backgroundImage: `url(${
                          process.env.PUBLIC_URL + "img/news/8.jpg"
                        })`,
                      }}
                    ></div>
                  </div>
                  {/* END IMAGE */}

                  <div className="details">
                    <h3 className="title" onClick={toggleModalThree}>
                      Digital Trails
                    </h3>
                    <p className="date">
                      <span>July 2021</span>
                    </p>
                  </div>
                  {/* END DETAILS */}

                  {/* START MODAL */}
                  <Modal
                    isOpen={isOpen3}
                    onRequestClose={toggleModalThree}
                    contentLabel="My dialog"
                    className="custom-modal"
                    overlayClassName="custom-overlay"
                    closeTimeoutMS={500}
                  >
                    <div className="shane_tm_modalbox_news">
                      <button
                        className="close-modal"
                        onClick={toggleModalThree}
                      >
                        <img src="/img/svg/cancel.svg" alt="close icon" />
                      </button>
                      {/* END CLOSE MODAL */}
                      <div className="box_inner">
                        <div className="description_wrap scrollable">
                          <div className="image">
                            <img src="/img/placeholders/4-3.jpg" alt="thumb" />
                            <div
                              className="main"
                              style={{
                                backgroundImage: `url(${
                                  process.env.PUBLIC_URL + "img/news/8.jpg"
                                })`,
                              }}
                            ></div>
                          </div>
                          {/* END IMAGE */}
                          <div className="details">
                            <h3 className="title">
                              Plan a hike and invite like minded hikers!
                            </h3>
                            <p className="date">
                              <a href="#">Team Project</a>{" "}
                              <span>July 2021</span>
                            </p>
                          </div>
                          {/* END DETAILS */}
                          <div className="description">
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                            <blockquote>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </blockquote>
                            <p>
                              As Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities. We
                              encounter professionals with careers to covet and
                              lives to write books about. As Vintage decided to
                              have a closer look into fast-paced New York web
                              design realm in person, we get to acquaint with
                              most diverse and exceptionally captivating
                              personalities. As Vintage decided to have a closer
                              look into fast-paced New York web design realm in
                              person, we get to acquaint with most diverse and
                              exceptionally captivating personalities. As
                              Vintage decided to have a closer look into
                              fast-paced New York web design realm in person, we
                              get to acquaint with most diverse and
                              exceptionally captivating personalities.
                            </p>
                          </div>
                          {/* END DESCRIPTION */}
                          <div className="news_share">
                            <Social />
                            {/* END SOCIAL SHARE */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Modal>
                </div>
                {/* END LIST INNER */}
              </li>

              {/* End single blog */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsTwo;
