import React from 'react';
import { Container, Row, Col } 
from 'react-bootstrap';
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import icon from '../assets/img/playred.png';
import casinoimg1 from "../assets/img/casinoimg1.png";
import casinoimg2 from "../assets/img/casinoimg2.png";
import casinoimg3 from "../assets/img/casinoimg3.png";
import casinoimg4 from "../assets/img/casinoimg4.png";
import casinoimg5 from "../assets/img/casinoimg5.png";
import casinoimg6 from "../assets/img/casinoimg6.png";
import casinoimg7 from "../assets/img/casinoimg7.png";
import { Link } from 'react-router-dom';
import classNames from 'classnames'; 

function Casino() {
  const settings = {
    infinite: false,
    centerMode: false,
    slidesToShow: 3.8,
    speed: 700,
    rows: 1,
    slidesPerRow: 2,
    slidesToScroll: .5,    
    nextArrow: <FaAngleRight  />,
    prevArrow: <FaAngleLeft />,
    responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 2.7,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2.7,
          }
        },
        {
          breakpoint: 767,
          settings: {
            slidesToShow: 2.3,
          }
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1.5,
            rows: 2,
          }
        },
      ]
  };
  const casinoItems = [
    { img: casinoimg1,
        icon: icon,
        url: "https://play.mpoker.com", 
    },        
    {
        img: casinoimg2,
        icon: icon,
        url: "https://play.mpoker.com",
    },
    { img: casinoimg3,
        icon: icon,
        url: "https://play.mpoker.com",
     },
    { img: casinoimg4,
        icon: icon,
        url: "https://play.mpoker.com", },
    { img: casinoimg5,
        icon: icon,
        url: "https://play.mpoker.com", },
    { img: casinoimg6,
        icon: icon,
        url: "https://play.mpoker.com", },
    { img: casinoimg7,
        icon: icon,
        url: "https://play.mpoker.com", },
    { img: casinoimg1,
        icon: icon,
        url: "https://play.mpoker.com", },        
    { 
        img: casinoimg2,
        icon: icon,
        url: "https://play.mpoker.com",
    },
    { img: casinoimg3,
        icon: icon,
        url: "https://play.mpoker.com", },
    { img: casinoimg4,
        icon: icon,
        url: "https://play.mpoker.com", },
    { img: casinoimg5,
        icon: icon,
        url: "https://play.mpoker.com", },
    { img: casinoimg6,
        icon: icon,
        url: "https://play.mpoker.com",},
    { img: casinoimg7,
        icon: icon,
        url: "https://play.mpoker.com", },
];

  return (
    <div className="casino slider-cards">
     <Container>
        <Row>
            <Col className='slots-slider position-relative'>
                <h3>Live Casino</h3>
                <Slider {...settings}>
                    {casinoItems.map((item, index) => (
                        <div key={index} className={classNames({'activeplay': item.icon && item.url})}>
                            <figure>
                                <img src={item.img} alt={`casino ${index + 1}`} />
                            </figure>
                            <span className='live'>new</span>
                            {item.icon && item.url && (                                        
                            <Link to={item.url} className='play'>
                                <img src={item.icon} alt="" />
                            </Link>
                            )}
                        </div>
                    ))}
                </Slider>
            </Col>
        </Row>
     </Container>
    </div>
  );
}

export default Casino;
