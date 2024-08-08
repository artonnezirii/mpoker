import homeLogo from '../assets/img/home.svg';
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <Link className="logo" to="/" spy={true} smooth={true} duration={600} offset={0}>
      <img src={homeLogo} alt="home-logo" />
    </Link>
  )
}

