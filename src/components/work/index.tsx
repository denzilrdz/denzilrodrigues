import { FC } from 'react';
import apartment from '../../assets/img/apartment.gif';
import cart from '../../assets/img/cart.gif';
import eventx from '../../assets/img/eventx.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Work: FC = () => {
  return (
    <>
      <section className='work section' id='work' data-aos='fade-up'>
        <h2 className='section-title'>Work</h2>

        <div className='work__container bd-grid'>
          <div className='work__img' data-aos='fade-up'>
            <img src={eventx} alt='' />
            <div className='card_body'>
              <h4 className=''>EventX</h4>
              <p className='skills__text' style={{ padding: '5px' }}>
                EVENTX is designed Proudly for Event Rental Businesses. This App
                encompasses spectrum of advanced functionalities. This is
                developed using React and firebase Realtime database.
              </p>
              <a
                href='https://fourthrocktechnologies.in/'
                target='_blank'
                rel='noreferrer'
                className='skills__icon'
              >
                <FontAwesomeIcon size='sm' icon={faEye} />
              </a>
            </div>
          </div>
          <div className='work__img' data-aos='fade-up'>
            <img src={cart} alt='' />
            <div className='card_body'>
              <h4 className=''>Cart</h4>
              <p className='skills__text' style={{ padding: '5px' }}>
                This is not just another e-commerce website but is focused on
                the privacy of the user. The user is assigned a group where the
                sub-interest changes every three days and the main-interest
                every week. This project is developed using Django framework.
              </p>
              <a
                href='https://github.com/denzilrdz/My-Cart'
                target='_blank'
                rel='noreferrer'
                className='skills__icon'
              >
                <FontAwesomeIcon size='sm' icon={faGithub} />
              </a>
            </div>
          </div>
          <div className='work__img' data-aos='fade-up'>
            <img src={apartment} alt='' />
            <div className='card_body'>
              <h4 className=''>Apartment Management System</h4>
              <p className='skills__text' style={{ padding: '1px' }}>
                JSP system for day-to-day activities of apartment like bill
                payments, swimming and gym membership, hall booking, appointment
                for vacant apartment, service request for apartment.
              </p>
              <a
                href='https://github.com/denzilrdz/Apartment-Managment-System'
                target='_blank'
                rel='noreferrer'
                className='skills__icon'
              >
                <FontAwesomeIcon size='sm' icon={faGithub} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
