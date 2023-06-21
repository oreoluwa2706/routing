import React from "react";
import "./gallery.css";
import event1 from "../../images/cartoon.png";
import Best from "../../Components/best/best";
import GalleryHeader from "../../images/images-splash.jpg";
const Gallery = () => {
  return (
    <>
      <div className="about_header">
        <div>
          <img src={GalleryHeader} alt="" />
        </div>
      </div>
      {/*Best*/}
      <Best />
      {/**Event Speakers */}
      <div className="event_speaker container">
        <div className="content">
          <h6>Event Speakers</h6>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, eum
            in? Eius commodi voluptatibus neque autem labore provident,
            voluptatum, deserunt velit temporibus reprehenderit at ea, minima
            fugiat mollitia. Maiores, laboriosam?
          </p>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={event1} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={event1} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={event1} className="img-fluid" alt="" />
            </div>
          </div>
          {/**Second Row*/}
          <div className="col-sm-4">
            <div className="box">
              <img src={event1} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={event1} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="box">
              <img src={event1} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
