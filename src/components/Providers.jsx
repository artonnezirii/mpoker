import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa6';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import img1 from "../assets/img/provider/1.svg";
import img2 from "../assets/img/provider/2.svg";
import img3 from "../assets/img/provider/3.svg";
import img4 from "../assets/img/provider/4.svg";
import img5 from "../assets/img/provider/5.svg";
import img6 from "../assets/img/provider/6.svg";
import img7 from "../assets/img/provider/7.svg";
import img8 from "../assets/img/provider/8.svg";
import img9 from "../assets/img/provider/9.svg";
import img10 from "../assets/img/provider/10.svg";
import img11 from "../assets/img/provider/11.svg";
import img12 from "../assets/img/provider/12.svg";
import img13 from "../assets/img/provider/13.svg";
import img14 from "../assets/img/provider/14.svg";
import img15 from "../assets/img/provider/15.svg";
import img16 from "../assets/img/provider/16.svg";
import img17 from "../assets/img/provider/17.svg";
import img18 from "../assets/img/provider/18.svg";
import img19 from "../assets/img/provider/19.svg";
import img20 from "../assets/img/provider/20.svg";
import img21 from "../assets/img/provider/21.svg";
import img22 from "../assets/img/provider/22.svg";

export default function Providers() {
    const providerItems = [
        { img: img1 },
        { img: img2 },
        { img: img3 },
        { img: img4 },
        { img: img5 },
        { img: img6 },
        { img: img7 },
        { img: img8 },
        { img: img9 },
        { img: img10 },
        { img: img11 },
        { img: img12 },
        { img: img13 },
        { img: img14 },
        { img: img15 },
        { img: img16 },
        { img: img17 },
        { img: img18 },
        { img: img19 },
        { img: img20 },
        { img: img21 },
        { img: img22 },
    ];

    return (
        <div className="provider">
            <Container>
                <Row>
                    <Col className='provider-slider position-relative'>
                        <h3>Providers</h3>
                        <Swiper
                            breakpoints={{
                                0: {
                                    slidesPerView: 2.4,
                                    spaceBetween: 15,
                                },
                                481: {
                                    slidesPerView: 3.5,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 22,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 24,
                                },
                                1280: {
                                    slidesPerView: 7,
                                    spaceBetween: 24,
                                }
                            }}
                            navigation={{
                                nextEl: '.provider-next',
                                prevEl: '.provider-prev',
                            }}
                            modules={[Navigation]}
                            spaceBetween={20}
                            slidesPerView={7}
                            loop={true}
                            speed={500}
                        >
                            {providerItems.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <figure>
                                        <img src={item.img} alt={`Provider ${index + 1}`} />
                                    </figure>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className='navigation'>
                            <div className="provider-prev  custom-prev"><FaAngleLeft /></div>
                            <div className="provider-next custom-next"><FaAngleRight /></div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
