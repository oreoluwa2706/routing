import "./about.css";
import React from "react";
import AboutHeader from "../../images/imagessa.jpg";
import AboutImage from "../../images/Grey White Modern Minimalist Infographic Instagram Story.png";
import Best from "../../Components/best/best";
const AboutPage = () => {
  return (
    <>
      <div className="about_header">
        <div>
          <img src={AboutHeader} alt="" />
        </div>
        <div className="Overlay"></div>
      </div>
      <div className="about_main container">
        <div className="row">
          <div className="col-sm-5">
            <h6>About us</h6>
            <h5>Drils and Bits</h5>
            <p>
              A beautiful website alone is not enough. Our designs are optimized
              for search engines, helping your website rank higher in search
              results and attract organic traffic. We employ industry-leading
              SEO techniques to ensure your website gets the visibility it
              deserves.
              <br />
              <br />
              With the majority of internet users accessing websites on mobile
              devices, it's essential to have a website that looks great and
              functions seamlessly across all screen sizes. Our responsive
              design approach ensures your website adapts to any device,
              providing an exceptional user experience at all times.
              <br />
              We understand that every business is unique. That's why we tailor
              our services to meet your specific needs and objectives. Whether
              you're a small startup or a large enterprise, we have the
              expertise to deliver a website that reflects your brand identity
              and aligns with your business goals.
              <br />
              <br />
              Don't miss out on the opportunity to elevate your business with a
              captivating website! Contact us today to discuss your project and
              we'll create a digital masterpiece that sets you apart from the
              competition and drives your business towards success.
              <br />
            </p>
          </div>
          <div className="offset-sm-2 col-sm-5">
            <div className="box">
              <img src={AboutImage} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/**Best */}
      <Best />
    </>
  );
};

export default AboutPage;
