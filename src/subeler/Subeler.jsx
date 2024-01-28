import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./sube.css"
import Sube1 from "./sube-1/Sube1";
import Sube2 from './sube-2/Sube2';
import Sube3 from './sube-3/Sube3';
import Sube4 from './sube-4/Sube4';



export default function Subeler () {


    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "0",
        arrows: true,
        autoplay: true, 
        autoplaySpeed: 8000,
      };
    
      return(
       <>
         <div>
          <div id='subeler' className="slider-container-1">
              <Slider {...settings}>
                <div>
                  <Sube1/>
                </div>
                <div>
                  <Sube2/>
                </div>
                <div>
                  <Sube3/>
                </div>
                <div>
                  <Sube4/>
                </div>
              </Slider>
            </div>
        </div>   
      </>
      )
}
