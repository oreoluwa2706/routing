import React from "react";
import "./best.css";
import Event1 from "../../images/images-splash.jpg";
import Event2 from "../../images/Screenshot (20).png";
import Event3 from "../../images/Screenshot (18).png";
import Event4 from "../../images/Screenshot (22).png";
import Event5 from "../../images/Screenshot (24).png";
import Event6 from "../../images/Screenshot (40).png";

const Best = () => {
  return (
    <>
      <div className="container best">
        <div className="content">
          <h6>Best Events</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            saepe temporibus harum porro officiis, asperiores iusto eveniet?
            Voluptatibus sunt quos, distinctio necessitatibus perspiciatis
            excepturi voluptatum, deserunt accusamus repudiandae obcaecati
            suscipit.
          </p>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Event1} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Event2} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Event3} className="img-fluid" alt="" />
            </div>
          </div>
          {/**Second row
           *
           */}
          <div className="col-sm-4">
            <div className="box">
              <img src={Event4} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Event5} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={Event6} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Best;
