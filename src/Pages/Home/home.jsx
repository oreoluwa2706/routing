import Header from "../../images/quiz.21c92eb7.jpg";
import Custom1 from "../../images/Dark Green White Clean & Simple Infographic Information Instagram Story.png";
import Custom2 from "../../images/Grey White Modern Minimalist Infographic Instagram Story.png";
import Custom3 from "../../images/Purple White Red Energetic Abstract Announcement Facebook Post.png";
import React from "react";
import "./home.css";
import Best from "../../Components/best/best";
import CustomSection from "../../Components/custom/custom";
import { Testimonial } from "../../Components";
import SecondHeader from "../../images/imagessa.jpg";
const Home = () => {
  return (
    <>
      <div className="header">
        <div>
          <div className="img">
            <img src={Header} alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>
            Transform Your Business with a <span>Stunning Website!</span>
          </h6>
          <p>
            Are you looking to establish a strong online presence for your
            business? Look no further! We are here to bring your vision to life
            with captivating and professional website design. In today's digital
            world, a well-designed website is crucial for attracting customers
            and staying ahead of the competition
          </p>
        </div>
      </div>
      {/**Custom Section */}
      <div className="custom container">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Custom1} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Custom2} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Custom3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/*Custom*/}
      <CustomSection />
      {/**Second Header */}
      <div className="second_header">
        <div>
          <div className="img">
            <img src={SecondHeader} alt="" />
          </div>

          <div className="Overlay"> </div>
        </div>
        <div className="SecondHeaderContent">
          <h6>Search Engine Visibility...</h6>
        </div>
      </div>
      {/**Testimonial */}
      <Testimonial />
      {/**Best Events */}

      <Best />
      {/**Footer */}
    </>
  );
};

export default Home;
