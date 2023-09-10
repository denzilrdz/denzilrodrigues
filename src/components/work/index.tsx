import { FC, useEffect, useState } from 'react';
import apartment from '@assets/img/apartment.gif';
import cart from '@assets/img/cart.gif';
import eventx from '@assets/img/eventx.gif';
import imagesCompare from '@assets/img/imagesCompare.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Styles from './index.module.scss';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const Work: FC = () => {
  const getWindowWidth = () => {
    return window.innerWidth;
  };

  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleWidthResize = () => {
      setWindowWidth(getWindowWidth());
    };
    window.addEventListener('resize', handleWidthResize);

    return () => {
      window.removeEventListener('resize', handleWidthResize);
    };
  }, []);

  const workObj = [
    {
      label: 'Images Compare',
      img: imagesCompare,
      description:
        'An open-source Python package allows for image comparison between two provided images using a specified threshold.',
      link: 'https://pypi.org/project/images-compare/',
      github: '',
    },
    {
      label: 'EventX',
      img: eventx,
      description:
        ' EVENTX is designed Proudly for Event Rental Businesses. This App encompasses spectrum of advanced functionalities. This is developed using React and firebase Realtime database.',
      link: 'https://fourthrocktechnologies.in/',
      github: '',
    },
    {
      label: 'Cart',
      img: cart,
      description:
        'This is not just another e-commerce website but is focused on the privacy of the user. The user is assigned a group where the sub-interest changes every three days and the main-interest every week. This project is developed using Django framework.',
      link: '',
      github: 'https://github.com/denzilrdz/My-Cart',
    },
    {
      label: 'Apartment Management System',
      img: apartment,
      description:
        'JSP system for day-to-day activities of apartment like bill payments, swimming and gym membership, hall booking, appointment for vacant apartment, service request for apartment.',
      link: '',
      github: 'https://github.com/denzilrdz/Apartment-Managment-System',
    },
  ];
  return (
    <>
      <section className={Styles.section} id='work' data-aos='fade-up'>
        <h2 className={Styles.sectionTitle}>Work</h2>
        <div className={`${Styles.workContainer}`}>
          <Splide
            options={{
              type: 'loop',
              perPage: windowWidth > 768 ? 3 : 1,
              focus: 'center',
            }}
          >
            {workObj.map((ele) => (
              <SplideSlide key={ele.label}>
                <div className={Styles.cardBody}>
                  <img
                    className={Styles.workImg}
                    src={ele.img}
                    alt={ele.label}
                  />
                  <h4 className={Styles.workTitle}> {ele.label}</h4>
                  <p className={Styles.workText}>{ele.description}</p>
                  {ele.link && (
                    <a
                      href={ele.link}
                      target='_blank'
                      rel='noreferrer'
                      className={Styles.workIcon}
                    >
                      <FontAwesomeIcon size='sm' icon={faEye} />
                    </a>
                  )}
                  {ele.github && (
                    <a
                      href={ele.github}
                      target='_blank'
                      rel='noreferrer'
                      className={Styles.workIcon}
                    >
                      <FontAwesomeIcon size='sm' icon={faGithub} />
                    </a>
                  )}
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>
    </>
  );
};

export default Work;
