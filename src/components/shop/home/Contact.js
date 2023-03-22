import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import React from "react";
import { Navber } from "../partials";

const images = [
  {
    id: 1,
    src: "https://i.ibb.co/QF2h1pm/img1.jpg",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://i.ibb.co/SdsDLkd/img2.jpg",
    alt: "Image 2 ",
  },
  {
    id: 3,
    src: "https://i.ibb.co/85G4fVy/img3.jpg",
    alt: "Image 3",
  },
];

const Contact = () => {
  return (
    <>
      <Navber />
      <div className="main">
        <ImageSlider images={images} />
        <h2 style={{ textAlign: "center", marginTop: "3rem", fontSize: '30px', fontWeight: 600 }}>
          Location Details
        </h2>
        <div className="map">
          <iframe
            title="my map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.9619679834204!2d77.9256918145785!3d9.598543293127085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06d3554bfa8549%3A0xa5af1f00e2f1be4d!2sRms%20cottage%20and%20industries!5e0!3m2!1sen!2sin!4v1677604552776!5m2!1sen!2sin"
            width="80%"
            height="450"
            style={{ border: 0, borderRadius: "5%", boxShadow: "2px 2px 2px 3px rgba(135, 95, 47, 0.626)" }}
            loading="lazy"
          ></iframe>
        </div>
        {/* <div className="chat">
      <a href="https://api.whatsapp.com/send?phone=9487257490&text=hai" rel="noopener noreferrer" target="_blank">
            <img className="whatsapp-logo" src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png" height="45" width="45" alt="whatsapp-logo" />
            <p>Start Chat</p>
      </a>
      </div> */}

        <div className="chat">
          <a href="https://api.whatsapp.com/send?phone=9487257490&text=hai" rel="noopener noreferrer" target="_blank">
            <img className="whatsapp-logo" src="https://clipart.info/images/ccovers/1499955335whatsapp-icon-logo-png.png" height="45" width="45" alt="whatsapp-logo" />
          </a>
        </div>
        <div className="contact">
          <div className="address">
            <p style={{ color: "white" }}>3/251-14, bypass to pavali road pavali village,</p>
            <p style={{ color: "white" }}>bypass to pavali road pavali village,</p>
            <p style={{ color: "white" }}>ayyan kovil street,</p>
            <p style={{ color: "white" }}>Virudhunagar - 626001,</p>
            <p style={{ color: "white" }}>Tamil Nadu</p>
          </div>
          <div className="mobile">
            <p style={{ color: "white" }}>
              Contact Number: <strong>9487257490</strong>
            </p>
          </div>
          <div className="mail">
            <a href="mailto:maanmark@gmail.com">Mail</a>
          </div>
        </div>
      </div>
    </>
  );
};

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="tag"></div>
      <div className="imgslider">
        <Slider {...settings}>
          {images.map((item) => (
            <div key={item.id}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Contact;
