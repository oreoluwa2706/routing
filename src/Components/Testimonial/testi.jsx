import "./testi.css";
import Testi1 from "../../images/pic_bulbon.jpg";
import React from "react";
import "./testi.css";
const testi = () => {
  return (
    <div>
      <div className="testimonial container">
        <div className="content">
          <h6>You Need To Start</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A explicabo
            in harum, nam vel aliquam illum ex quam eligendi alias, nisi magnam
            cumque aspernatur odit minima beatae blanditiis cupiditate non.
          </p>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, perspiciatis adipisci libero veritatis minima soluta
                officiis vero vitae laborum illum repellendus. Id, consequuntur
                nam culpa earum assumenda eius natus qui.
              </p>
              <h6>Learning To Code</h6>
              <img src={Testi1} className="" alt="" />
            </div>
          </div>
          <div className="col-sm-4 mid">
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, perspiciatis adipisci libero veritatis minima soluta
                officiis vero vitae laborum illum repellendus. Id, consequuntur
                nam culpa earum assumenda eius natus qui.
              </p>
              <h6>Learning To Code</h6>
              <img src={Testi1} className="" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Aliquid, perspiciatis adipisci libero veritatis minima soluta
                officiis vero vitae laborum illum repellendus. Id, consequuntur
                nam culpa earum assumenda eius natus qui.
              </p>
              <h6>Learning To Code</h6>
              <img src={Testi1} className="" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default testi;
