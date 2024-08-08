import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import Social from './Social';
import SiteLogo from '../assets/img/site-logo.svg'

import pl1 from '../assets/img/pymntlgo1.svg'
import pl2 from '../assets/img/pymntlgo2.svg'
import pl3 from '../assets/img/pymntlgo3.svg'
import pl4 from '../assets/img/pymntlgo4.svg'
import pl5 from '../assets/img/pymntlgo5.svg'
import pl6 from '../assets/img/pymntlgo6.svg'
import pl7 from '../assets/img/pymntlgo7.svg'
import pl8 from '../assets/img/pymntlgo8.svg'
import pl9 from '../assets/img/pymntlgo9.svg'
import pl10 from '../assets/img/pymntlgo10.svg'
import pl11 from '../assets/img/pymntlgo11.svg'
import pl12 from '../assets/img/pymntlgo12.svg'
import pl13 from '../assets/img/pymntlgo13.svg'
import pl14 from '../assets/img/pymntlgo14.svg'

const menus = [
  {
    category: 'Casino',
    items: [
      { name: 'Slots', path: '/' },
      { name: 'Roulette', path: '/' },
      { name: 'Live Baccarat', path: '/' },
      { name: 'Blackjack', path: '/' },
      { name: 'Live Casino', path: '/' },
      { name: 'Sportsbook', path: '/' },
      { name: 'Providers', path: '/' },
    ],
  },
  {
    category: 'Sports',
    items: [
      { name: 'Slots', path: '/' },
      { name: 'Roulette', path: '/' },
      { name: 'Live Baccarat', path: '/' },
    ],
  },
  {
    category: 'Promo',
    items: [
      { name: 'Affiliate FAQ', path: '/' },
      { name: 'General Betting Rules', path: '/' },
      { name: 'Help Centre', path: '/' },
      { name: 'Payment Options', path: '/' },
      { name: 'The Clubhouse FAQ', path: '/' },
    ],
  },
  {
    category: 'About Us',
    items: [
      { name: 'Terms and Conditions', path: '/' },
      { name: 'Responsible Gaming', path: '/' },
      { name: 'Self-Exclusion', path: '/' },
      { name: 'Dispute Resolution', path: '/' },
      { name: 'AML', path: '/' },
      { name: 'Fairness and RNG Testing', path: '/' },
      { name: 'Methods', path: '/' },
      { name: 'KYC Policies', path: '/' },
      { name: 'Account, Pay-outs and Bonuses', path: '/' },
    ],
  },
  {
    category: 'Support & Legal',
    items: [
      { name: 'Affiliate FAQ', path: '/' },
      { name: 'General Betting Rules', path: '/' },
      { name: 'Help Centre', path: '/' },
      { name: 'Payment Options', path: '/' },
    ],
  },
];

const paymentitems = [
  {
    url: "/",
    logo: pl1,
  },
  {
    url: "/",
    logo: pl2,
  },
  {
    url: "/",
    logo: pl3,
  },
  {
    url: "/",
    logo: pl4,
  },
  {
    url: "/",
    logo: pl5,
  },
  {
    url: "/",
    logo: pl6,
  },
  {
    url: "/",
    logo: pl7,
  },
  {
    url: "/",
    logo: pl8,
  },
  {
    url: "/",
    logo: pl9,
  },
  {
    url: "/",
    logo: pl10,
  },
  {
    url: "/",
    logo: pl11,
  },
  {
    url: "/",
    logo: pl12,
  },
  {
    url: "/",
    logo: pl13,
  },
  {
    url: "/",
    logo: pl14,
  },
]

export default function Footer() {
  return (
    <div className='footer'>
      <Container>
        <Row>
          <Col>
            <div className='footer-content d-flex align-items-start gap-3 gap-xl-5'>
              <div className='footer-menus  d-flex align-items-start flex-wrap justify-content-between gap-3 gap-xl-5'>
                {menus.map((menu, index) => (
                  <div className='menu-box' key={index}>
                    <h5>{menu.category}</h5>
                    <ul>
                      {menu.items.map((link, idx) => (
                        <li key={idx}>
                          <Link to={link.path}>{link.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <div className='footer-right'>
              <Link className="logo" to="/" spy={true} smooth={true} duration={600} offset={0}>
                <img src={SiteLogo} alt="home-logo" />
              </Link>
                <Social />
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. </p>
                  
                  <p>Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className='d-md-none'>
          <Col className='text-center'>  
              <div className='payment-methods'>             
              <h4>Payment methods</h4>           
                <ul className="itemlists d-flex align-items-center justify-content-center flex-wrap">
                  {paymentitems.map((item, index)=>(
                    <Link to={item.url} key={index}><img src={item.logo} alt="" /></Link>
                  ))}
                </ul>
              </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
