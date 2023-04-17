import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import Styles from './index.module.scss';
import resume from '@assets/documents/resume.pdf';

const Header: FC = () => {
  return (
    <>
      <header className={Styles.lHeader}>
        <nav className={`${Styles.nav} ${Styles.bdGrid}`}>
          <div>
            <a href='#' className={Styles.navLogo} rel='noreferrer'>
              Denzil Rodrigues
            </a>
          </div>

          <div className={Styles.navMenu} id='nav-menu'>
            <ul className={Styles.navList}>
              <li className={Styles.navItem}>
                <a href='#home' className={Styles.navLink} rel='noreferrer'>
                  Home
                </a>
              </li>
              <li className={Styles.navItem}>
                <a href='#about' className={Styles.navLink} rel='noreferrer'>
                  About
                </a>
              </li>
              <li className={Styles.navItem}>
                <a href='#skills' className={Styles.navLink} rel='noreferrer'>
                  Skills
                </a>
              </li>
              <li className={Styles.navItem}>
                <a href='#work' className={Styles.navLink} rel='noreferrer'>
                  Work
                </a>
              </li>
              <li className={Styles.navItem}>
                <a href='#contact' className={Styles.navLink} rel='noreferrer'>
                  Contact
                </a>
              </li>
              <li className={Styles.navItem}>
                <a
                  href={resume}
                  download='Resume of Denzil Rodrigues.pdf'
                  target='_blank'
                  className={Styles.navLink}
                  rel='noreferrer'
                >
                  Resume
                  <FontAwesomeIcon
                    className={Styles.paddingLeft}
                    icon={faCloudDownload}
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
