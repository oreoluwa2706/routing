import "./custom.css";
import React from "react";

const CustomSection = () => {
  return (
    <div>
      <div className="customSection container">
        <div className="row">
          <div className="col-sm-5 active">
            <div className="box">
              <h6>
                Time Wait For No <span>Man</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium libero, voluptatem, saepe est atque inventore ullam
                quibusdam harum iste dolor alias, blanditiis nihil perferendis
                cumque quae unde aliquid officiis nisi.
              </p>
            </div>
          </div>
          <div className="offset-sm-2 col-sm-5 ">
            <div className="box">
              <h6>
                It Never Too Late To <span>Start</span>
              </h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium libero, voluptatem, saepe est atque inventore ullam
                quibusdam harum iste dolor alias, blanditiis nihil perferendis
                cumque quae unde aliquid officiis nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
