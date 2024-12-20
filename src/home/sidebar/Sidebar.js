import React , { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {

  const navItems = [
    {
      icon: "/images/home.svg",
      text: "Overview",
      link: "/home/overview",
      hasDivider: true
    },
    {
      icon: "/images/prospect.svg",
      text: "Prospect",
      link: "/home/settings",
      hasDivider: false,
      badge: 10
    },
    {
      icon: "/images/applicant.svg",
      text: "Applicant",
      link: "/home/applicant",
      hasDivider: true,
      expand: true
    },
    {
      icon: "/images/recruiting.svg",
      text: "Recruiting Tools",
      link: "/home/recruiting"
    },
    {
      text: "Recruiting QR Code",
      link: "/home/recruiting-qr-code"
    },
    {
      icon: "/images/settings.svg",
      text: "Account",
      link: "/home/account"
    }
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [isRecruitingQrCodeVisible, setIsRecruitingQrCodeVisible] = useState(0)
  return (
    <div className='sidebar-container'>
 <aside className="sidebar">
      <ul>
        {navItems.map((item, index) => (
          <li key={index} className={item.hasDivider ? 'with-divider' : ''}>
            <NavLink to={item.link} onClick={() => setActiveItemIndex(index)}>
              {item.icon && (
                <img src={item.icon} alt={item.text} className={activeItemIndex === index ? 'svg-icon' : ''} data-effect="special" />
              )}

            <span className={activeItemIndex === index ? 'active' : ''} data-effect={!item.icon ? 'left-padding' : ''}>{item.text}</span>
           
            {item.badge && (
              <span className='badge'>
                {item.badge > 9 ? '9+' : item.badge}
              </span>
            )}

            {item.expand && (
              <img className='applicant-arrow' src='/images/arrow-down.png' alt='expand'/>
            )}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>

    <div className='sidebar-bottom-container'>
      <div className='logout-container'>
        <img src='/images/logout.png' alt='logout'/>
        <span className='logout'>Logout</span>
      </div>

      <div className='language-container'>
        <img src='/images/language.png' alt='language'/>
        <span>EN</span>
        <img src='/images/language-arrow-down.png' alt='language' data-effect="arrow"/>
      </div>
    </div>
    </div>
   
  );
};

export default Sidebar;