import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import Styles from './index.module.scss';
import Batches from '@components/batches';

const Footer: FC = () => {
  return (
    <>
      <footer className={Styles.footer}>
        <p className={Styles.footerTitle}>Denzil Rodrigues</p>
        <div className={Styles.footerSocial}>
          <a
            href='https://www.facebook.com/denziljr9/'
            className={Styles.footerIcon}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faFacebookF} />
          </a>
          <a
            href='https://www.instagram.com/denzil.rdz/'
            className={Styles.footerIcon}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faInstagram} />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=919113203669'
            className={Styles.footerIcon}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faWhatsapp} />
          </a>
          <a
            href='mailto: denzil.rdz@gmail.com'
            className={Styles.footerIcon}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faPaperPlane} />
          </a>
        </div>
        <div className=''>
          <Batches />
        </div>
      </footer>
    </>
  );
};

export default Footer;
