import { FC, useState } from 'react';
import resume from '../../assets/documents/resume.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';

const Header: FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <header className='l-header'>
        <nav className='nav bd-grid'>
          <div>
            {/* eslint-disable-next-line */}
            <a href='#' className='nav__logo' rel='noreferrer'>
              Denzil Rodrigues
            </a>
          </div>

          <div className='nav__menu' id='nav-menu'>
            <ul className='nav__list'>
              <li className='nav__item'>
                <a
                  href='#home'
                  onClick={() => setActiveTab(0)}
                  className={`nav__link ${activeTab === 0 ? 'active' : ''}`}
                >
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActiveTab(1)}
                  href='#about'
                  className={`nav__link ${activeTab === 1 ? 'active' : ''}`}
                  rel='noreferrer'
                >
                  About
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActiveTab(2)}
                  href='#skills'
                  className={`nav__link ${activeTab === 2 ? 'active' : ''}`}
                  rel='noreferrer'
                >
                  Skills
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActiveTab(3)}
                  href='#work'
                  className={`nav__link ${activeTab === 3 ? 'active' : ''}`}
                  rel='noreferrer'
                >
                  Work
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActiveTab(4)}
                  href='#contact'
                  className={`nav__link ${activeTab === 4 ? 'active' : ''}`}
                  rel='noreferrer'
                >
                  Contact
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActiveTab(5)}
                  href={resume}
                  download='Resume of Denzil Rodrigues.pdf'
                  target='_blank'
                  className={`nav__link ${activeTab === 5 ? 'active' : ''}`}
                  rel='noreferrer'
                >
                  Resume
                  <FontAwesomeIcon
                    className='padding_left'
                    icon={faCloudDownload}
                  />
                </a>
              </li>
            </ul>
          </div>

          <div className='nav__toggle' id='nav-toggle'>
            <i className='bx bx-menu'></i>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
