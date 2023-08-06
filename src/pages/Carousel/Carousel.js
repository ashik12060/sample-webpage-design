import React from "react";
import imgS1 from "../../media/smiley-handsome-man-posing.jpg";
import imgS2 from "../../media/smiling-young-man-with-crossed-arms-outdoors.jpg";
import imgS3 from "../../media/young-woman-wearing-red-shirt.jpg";
import './Carousel.css'
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Carousel = () => {
  return (
    <div className="bg">
      <div className="continer-main2">
          <div className="caro-container">
            <div>
              <img className="caro-img" src={imgS1} alt="jeans" />
            </div>
            <div className>
              <h3>Jacob Jones</h3>
              <small>Buffalo, NJ</small>
              <p className="text-left">
                Socialable on as carriage my position weedings railery consider. Peculiar triflin absolute and wandered
              </p>
            </div>
          </div>
          <div className="caro-container">
            <div>
              <img className="caro-img" src={imgS2} alt="jeans" />
            </div>
            <div className>
            <h3>Jacob Jones</h3>
              <small>Buffalo, NJ</small>
              <p className="text-left">
                Socialable on as carriage my position weedings railery consider. Peculiar triflin absolute and wandered
              </p>
            </div>
          </div>
          <div className="caro-container">
            <div>
              <img className="caro-img" src={imgS3} alt="jeans" />
            </div>
            <div className>
            <h3>Jacob Jones</h3>
              <small>Buffalo, NJ</small>
              <p className="text-left">
                Socialable on as carriage my position weedings railery consider. Peculiar triflin absolute and wandered
              </p>
            </div>
          </div>
          
        </div>
        <div className="arrow-container">
        <button className="arrow-sign1"><FontAwesomeIcon  icon={faArrowLeft} /></button>
        <button className="arrow-sign2"><FontAwesomeIcon  icon={faArrowRight} /></button>
        </div>
    </div>
  );
};

export default Carousel;
