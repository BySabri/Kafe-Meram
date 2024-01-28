import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./home.css"
import ana1 from "./ana-1.jpg"
import ana2 from "./ana-2.jpg"
import ana3 from "./ana-3.jpg"
import ana4 from "./ana-4.jpg"
import Navbar from '../navbar/Navbar';


export default function Home() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
        autoplay: true, 
        autoplaySpeed: 5000,
      };

      return (
<>
      <Navbar/>
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <img src={ana1} alt="Slide 1" />
          </div>
          <div>
            <img src={ana2} alt="Slide 2" />
          </div>
          <div>
            <img src={ana3} alt="Slide 3" />
          </div>
          <div>
            <img src={ana4} alt="Slide 4" />
          </div>
        </Slider>
      </div>
    </>
      );
    }
    
