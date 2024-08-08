import React from 'react';
import { Container, Row, Col } 
from 'react-bootstrap';
import Slider from "react-slick";
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import icon from '../assets/img/playred.png';
import slotimg1 from "../assets/img/slotimg1.jpg";
import slotimg2 from "../assets/img/slotimg2.png";
import slotimg3 from "../assets/img/slotimg3.png";
import slotimg4 from "../assets/img/slotimg4.png";
import slotimg5 from "../assets/img/slotimg5.png";
import slotimg6 from "../assets/img/slotimg6.png";
import slotimg7 from "../assets/img/slotimg7.png";
import { Link } from 'react-router-dom';
import classNames from 'classnames'; 

function Slots() {
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
  const slotsItems = [
    { img: slotimg1,
        icon: icon,
        url: "https://play.mpoker.com",
     },
    { 
        img: slotimg2,
        icon: icon,
        url: "https://play.mpoker.com",

    },
    { img: slotimg3,
        icon: icon,
        url: "https://play.mpoker.com",
    },
    { img: slotimg4,
        icon: icon,
        url: "https://play.mpoker.com",
    },
    { img: slotimg5,
        icon: icon,
        url: "https://play.mpoker.com",
    },
    { img: slotimg6,
        icon: icon,
        url: "https://play.mpoker.com",
    },
    { img: slotimg7,
        icon: icon,
        url: "https://play.mpoker.com",
     },
    { img: slotimg1,
        icon: icon,
        url: "https://play.mpoker.com", 
    },
    { img: slotimg2,
        icon: icon,
        url: "https://play.mpoker.com",
     },
    { img: slotimg3,
        icon: icon,
        url: "https://play.mpoker.com",
     },
    { img: slotimg4,
        icon: icon,
        url: "https://play.mpoker.com", 
    },
    { img: slotimg5,
        icon: icon,
        url: "https://play.mpoker.com",
     },
    { img: slotimg6,
        icon: icon,
        url: "https://play.mpoker.com",
     },
    { img: slotimg7,
        icon: icon,
        url: "https://play.mpoker.com",
     },
];

  return (
    <div className="slots slider-cards">
     <Container>
        <Row>
            <Col className='slots-slider position-relative'>
                <h3>Slots</h3>
                <Slider {...settings}>
                    {slotsItems.map((item, index) => (
                        <div key={index} className={classNames({'activeplay': item.icon && item.url})}>
                            <figure>
                                <img src={item.img} alt={`slots ${index + 1}`} />
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

export default Slots;
