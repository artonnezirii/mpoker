import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link} from 'react-router-dom';
import sitelogo from '../assets/img/site-logo.svg';
import Logo from './Logo';
export default function Header() {
  const navLinks = [
    {
      btn_title: 'home',
      to: 'home'
    },
    {
      btn_title: 'How to play',
      to: 'howto'
    },
    {
      btn_title: 'Promotions & Events',
      to: 'promotions'
    },
    {
      btn_title: 'Torunaments',
      to: 'torunaments'
    },
    {
      btn_title: 'Deposit & Withdrawals',
      to: 'dipowithdrw'
    },
    {
      btn_title: 'Mpoker Learn',
      to: 'mpokerlrn'
    },
    {
      btn_title: 'Shop',
      to: 'shop'
    },
  ];
  const [isMenu, setIsMenu] = useState(false);
  const handleTouchStart  = (event) => {
    setIsMenu(!isMenu);
  };
  
  return (
    <>
      <header className='heading'>   
        <Container>
          <div className="heading-top d-flex align-items-center justify-content-between">
              <a href="#"><img src={sitelogo} alt="" /></a>
              <Link to="https://play.mpoker.com/" target='_blank' className='boxed-btn d-none'>Play in Web</Link>
              <div className='login d-flex align-items-cente'>
                <Link to="https://play.mpoker.com/" className='btn'>sign In</Link>
                <Link to="https://play.mpoker.com/" className='btn active'>Sign Up</Link>
              </div>
          </div>
          <div className='heading-wrap d-flex align-items-center'>
          <Logo />
          <nav className='heading-menu'>
            <ul className="d-flex align-items-center">
              {navLinks.map((link, index) => (
                <li key={index} className='d-block'>
                  <Link className="heading-link text-capitalize" to={link.to} spy={true} smooth={true} duration={600} offset={0} onTouchStart={() => handleTouchStart(link.to)}>{link.btn_title}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="heading-actions d-flex align-items-center flex-wrap">
            <Link className='d-lg-none pe-2' to="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10.7934 1.33325H5.20671C2.78004 1.33325 1.33337 2.77992 1.33337 5.20659V10.7866C1.33337 13.2199 2.78004 14.6666 5.20671 14.6666H10.7867C13.2134 14.6666 14.66 13.2199 14.66 10.7933V5.20659C14.6667 2.77992 13.22 1.33325 10.7934 1.33325ZM9.86004 8.35325L7.50671 10.7066C7.40671 10.8066 7.28004 10.8533 7.15337 10.8533C7.02671 10.8533 6.90004 10.8066 6.80004 10.7066C6.60671 10.5133 6.60671 10.1933 6.80004 9.99992L8.80004 7.99992L6.80004 5.99992C6.60671 5.80659 6.60671 5.48659 6.80004 5.29325C6.99337 5.09992 7.31337 5.09992 7.50671 5.29325L9.86004 7.64659C10.06 7.83992 10.06 8.15992 9.86004 8.35325Z" fill="#8294A8"/>
            </svg>
            </Link>
          </div>
          </div>
        </Container>
      </header>
    </>
  )
}
