import React from 'react';

const Footer = (props) => {
  return (
    <React.Fragment>
      <footer className='footer'>
        <p className='footer__title'>Denzil Rodrigues</p>
        <div className='footer__social'>
          <a
            href='https://www.facebook.com/denziljr9/'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <iconify-icon
              data-icon='brandico:facebook'
              className='bx bxl-facebook'
            ></iconify-icon>
          </a>
          <a
            href='https://www.instagram.com/denzil.rdz/'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <iconify-icon
              data-icon='akar-icons:instagram-fill'
              className='bx bxl-instagram'
            ></iconify-icon>
          </a>
          <a
            href='https://api.whatsapp.com/send?phone=919113203669'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <iconify-icon
              data-icon='akar-icons:whatsapp-fill'
              className='bx bxl-whatsapp'
            ></iconify-icon>
          </a>
          <a
            href='mailto: denzil.rdz@gmail.com'
            className='footer__icon'
            target='_blank'
            rel='noreferrer'
          >
            <iconify-icon
              data-icon='simple-icons:gmail'
              className='bx bxl-whatsapp'
            ></iconify-icon>
          </a>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
