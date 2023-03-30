import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

const Footer: FC = () => {
  return (
    <>
      <footer className='footer'>
        <p className='footer__title'>Denzil Rodrigues</p>
        <div className='footer__social'>
          <a
            href='https://www.facebook.com/denziljr9/'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faFacebookF} />
          </a>
          <a
            href='https://www.instagram.com/denzil.rdz/'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faInstagram} />
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=919113203669'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faWhatsapp} />
          </a>
          <a
            href='mailto: denzil.rdz@gmail.com'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faPaperPlane} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
