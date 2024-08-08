import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import icon1 from '../assets/img/socialicon1.svg'
import icon2 from '../assets/img/socialicon2.svg'
import icon3 from '../assets/img/socialicon3.svg'
import icon4 from '../assets/img/socialicon4.svg'
import icon5 from '../assets/img/socialicon5.svg'
import icon6 from '../assets/img/socialicon6.svg'
import icon7 from '../assets/img/socialicon7.svg'

export default function Social({ className }) {
  const socialIcons = [
    {
      icon: icon1,
      url: '/'
    },
    {
      icon: icon2,
      url: '/'
    },
    {
      icon: icon3,
      url: '/'
    },
    {
      icon: icon4,
      url: '/'
    },
    {
      icon: icon5,
      url: '/'
    },
    {
      icon: icon6,
      url: '/'
    },
    {
      icon: icon7,
      url: '/'
    },
  ];
  return (
    <ul className={`social-list d-flex align-items-center flex-wrap gap-2 ${className}`}>
      {socialIcons.map((item, index) => (
        <li key={index}>
          <a href={item.url} data-aos="fade-up" data-aos-duration="1800" data-aos-delay="" data-aos-offset="0" target="_blank" className="social-link d-flex align-items-center justify-content-center ms-1">
            <img src={item.icon} alt="" />
          </a>
        </li>
      ))}
    </ul>
  )
}