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
                Creative <span>Expertise</span>
              </h6>
              <p>
                Our team of talented designers knows how to craft visually
                stunning websites that grab attention and leave a lasting
                impression. We combine cutting-edge design techniques with
                user-centric layouts to create an immersive and delightful
                browsing experience for your customers.
              </p>
            </div>
          </div>
          <div className="offset-sm-2 col-sm-5 ">
            <div className="box">
              <h6>
                Customized <span>Solutions</span>
              </h6>
              <p>
                We understand that every business is unique. That's why we
                tailor our services to meet your specific needs and objectives.
                Whether you're a small startup or a large enterprise, we have
                the expertise to deliver a website that reflects your brand
                identity and aligns with your business goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomSection;
