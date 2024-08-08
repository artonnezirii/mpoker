import React, { useState } from 'react';
import ModalVideo from 'react-modal-video';
import 'react-modal-video/css/modal-video.css';
import srtopimg1 from '../assets/img/servictpimg1.png';
import srtopimg2 from '../assets/img/servictpimg2.png';
import srtopimg3 from '../assets/img/servictpimg3.png';

import srbimg1 from '../assets/img/srbimg1.png';
import srbimg2 from '../assets/img/srbimg2.png';
import srbimg3 from '../assets/img/srbimg3.png';


import playicon from '../assets/img/play.svg';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Service() {
  const [isOpen, setOpen] = useState(false);
  const [videoId, setVideoId] = useState('');

  const serviceItems = [
    {
      srtopimg: srtopimg1,
      playicon: playicon,
      title: 'No Limit <strong>Hold’em</strong>',
      desc: `Join the thrilling world of No Limit Hold’em at MPoker! From casual games to high-stakes tournaments, we have something for every level of play.`,
    },
    {
      srtopimg: srtopimg2,
      playicon: playicon,
      title: 'Hold’em <strong>Torunaments</strong>',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
    },
    {
      srtopimg: srtopimg3,
      playicon: playicon,
      title: 'Cash <strong>Games</strong>',
      desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.`,
    },
  ];

  const handleOpenVideo = (id) => {
    setVideoId(id);
    setOpen(true);
  };

  const srbItems = [
    {
      srtopimg: srbimg1,
      captitle: "POKER",
    },
    {
      srtopimg: srbimg2,
      captitle: "CASINO",
    },
    {
      srtopimg: srbimg3,
      captitle: "SPORTBOOKS",
    },
  ];


  return (
    <div className='service'>
      <div className="service-top">
        <Container>
          <Row>
            {serviceItems.map((item, index) => (
              <Col xl={4} md={6} key={index}>
                <div className="single-item d-md-flex align-items-center">
                  <figure className='srtopimg'>
                    <img src={item.srtopimg} alt="" />
                  </figure>
                  <div className="content">
                    <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                    <p>{item.desc}</p>
                    <Link to="https://play.mpoker.com/" className="boxed-btn">
                      <img src={item.playicon} alt="" /> Play
                    </Link>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="service-bottom mt-lg-4 pt-2 pt-lg-3">
        <Container>
          <Row>
            {srbItems.map((item, index) => (
              <Col xl={4} md={6} key={index}>
                <div className="single-img-box">
                  <figure>
                    <img src={item.srtopimg} alt="" />
                  </figure>
                  <caption>{item.captitle}</caption>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <ModalVideo
        channel='youtube'
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
