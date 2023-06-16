import Header from "../../images/quiz.21c92eb7.jpg";
import Custom1 from "../../images/network.jpg";
import Custom2 from "../../images/myimage.png";
import Custom3 from "../../images/cartoon.png";
import React from "react";
import "./home.css";
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
            Coding is a <span>Process</span>
          </h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti,
            numquam nam. Sit odit expedita laboriosam possimus distinctio, vitae
            harum fugiat doloremque quas mollitia rerum corrupti error, eum
            nihil ad pariatur.
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
          <h6>We are starting right now...</h6>
        </div>
      </div>
      {/**Testimonial */}
      <Testimonial />
    </>
  );
};

export default Home;
