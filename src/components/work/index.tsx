import { FC } from 'react';
import apartment from '../../assets/img/apartment.gif';
import cart from '../../assets/img/cart.gif';
import eventx from '../../assets/img/eventx.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Styles from './index.module.scss';

const Work: FC = () => {
  return (
    <>
      <section className={Styles.section} id='work' data-aos='fade-up'>
        <h2 className={Styles.sectionTitle}>Work</h2>

        <div className={`${Styles.workContainer} ${Styles.bdGrid}`}>
          <div className={Styles.workImg} data-aos='fade-up'>
            <img src={eventx} alt='EventX' />
            <div className={Styles.cardBody}>
              <h4>EventX</h4>
              <p className={Styles.workText}>
                EVENTX is designed Proudly for Event Rental Businesses. This App
                encompasses spectrum of advanced functionalities. This is
                developed using React and firebase Realtime database.
              </p>
              <a
                href='https://fourthrocktechnologies.in/'
                target='_blank'
                rel='noreferrer'
                className={Styles.workIcon}
              >
                <FontAwesomeIcon size='sm' icon={faEye} />
              </a>
            </div>
          </div>
          <div className={Styles.workImg} data-aos='fade-up'>
            <img src={cart} alt='Cart' />
            <div className={Styles.cardBody}>
              <h4>Cart</h4>
              <p className={Styles.workText}>
                This is not just another e-commerce website but is focused on
                the privacy of the user. The user is assigned a group where the
                sub-interest changes every three days and the main-interest
                every week. This project is developed using Django framework.
              </p>
              <a
                href='https://github.com/denzilrdz/My-Cart'
                target='_blank'
                rel='noreferrer'
                className={Styles.workIcon}
              >
                <FontAwesomeIcon size='sm' icon={faGithub} />
              </a>
            </div>
          </div>
          <div className={Styles.workImg} data-aos='fade-up'>
            <img src={apartment} alt='Apartment Management System' />
            <div className={Styles.cardBody}>
              <h4>Apartment Management System</h4>
              <p className={Styles.workText}>
                JSP system for day-to-day activities of apartment like bill
                payments, swimming and gym membership, hall booking, appointment
                for vacant apartment, service request for apartment.
              </p>
              <a
                href='https://github.com/denzilrdz/Apartment-Managment-System'
                target='_blank'
                rel='noreferrer'
                className={Styles.workIcon}
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
