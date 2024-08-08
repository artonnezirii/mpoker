import React from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import 'react-modal-video/css/modal-video.css';
import playicon from '../assets/img/play.svg';
import bannertitle from '../assets/img/banner-title.svg'
import batch from '../assets/img/banner-batch.png'
import btableImg from '../assets/img/hero-table.png'
export default function Banner() {


  return (
    <div className='banner'>
      <Container>
        <Row>
          <Col>
            <div className='banner-wrapper position-relative z-1  d-lg-flex align-items-center justify-content-between'>
              <div className="banner-content">
                <h1>Welcome to <br /> <img src={bannertitle} alt="banner title" /></h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                  Suggested Content: "Welcome to the ultimate online gaming experience at MPoker! Engage in top-tier poker games, enjoy secure crypto transactions, and access our exclusive first deposit bonuses.</p>
                <Link to="https://play.mpoker.com/" className='boxed-btn'>Play now <img className='ms-2' src={playicon} alt="" /></Link>
                <img className='batch' src={batch} alt="" />
              </div>
              <div className="banner-right">
                <img className='btableImg' src={btableImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
