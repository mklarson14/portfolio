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
                      <a href="https://allparks2021.netlify.app/">allparks.com</a>{" "}
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
                              <a href="https://github.com/mklarson14/AllParks">Git Repository</a>{""}
                              <span>August 2021</span>
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>               
                            Users are able to search by state for any National Park, 
                            Monument or Public Lands that is available through the 
                            National Park Service API. Users then can save places 
                            they wish to visit to a favorites page. Each Park is displayed 
                            on a card which the user has access to more information on a specific
                            park.
                            </p>
                            <p>
                              This app was created with React.js, Node.js, Redux.js, MUI and CSS. 
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
                    <a href="https://smac-overflow.netlify.app/">smac-overflow.com</a>{" "}
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
                                  process.env.PUBLIC_URL + "img/news/smacChat.jpg"
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
                              <a href="https://github.com/marrerap/DC-capstone-project">Git Repository</a>{" "}
                              <span>September 2021</span>
                            </p>
                          </div>
                          {/* End details */}
                          <div className="description">
                            <p>
                              As member of a 4-person development team, we built a chat support app 
                              that allows Software Developers of all experience 
                              levels come together in a simple to use platform and share 
                              their questions and solutions in channels that have been 
                              created for specific languages.
                            </p>
                            <p>
                              My primary responsibilities included setting up document 
                              links, the chat page, and chat navigation.
                            </p>
                            <p>
                              Capstone project built with React.js, Firebase, MUI, 
                              React-Bootstrap, Node.js, Redux.js, and CSS.                          
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
                          process.env.PUBLIC_URL + "img/news/dtHome.jpg"
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
                    <a href="https://digital-trails.herokuapp.com/">digitaltrails.com</a>{" "}
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
                                  process.env.PUBLIC_URL + "img/news/dt.jpg"
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
                              <a href="https://github.com/marrerap/digital-trails">Git Repository</a>{" "}
                              <span>July 2021</span>
                            </p>
                          </div>
                          {/* END DETAILS */}
                          <div className="description">
                            <p>
                              As a member of a 4-person team, we created a CRUD 
                              social media app. A user can register with this app, 
                              manage friends, plan hikes, and mark off completed hikes.  
                            </p>
                            <p>
                              My key responsibilities were to set up the database, 
                              and assemble the user profile.
                            </p>
 
                            <p>
                              Technologies used to create this project are PostgreSQL, 
                              Express.js, Bootstrap, and JavaScript.

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
