import React, { useState, useEffect } from 'react';
import thumb from './assets/img/thumb.png';
import abt from './assets/img/abt.jpg';
import apartment from './assets/img/apartment.gif';
import cart from './assets/img/cart.gif';
import resume from './assets/documents/resume.pdf';
import eventx1 from './assets/img/eventx1.jpg';
import skill from './assets/img/skill.gif';
import './assets/css/styles.css';
import emailjs from 'emailjs-com';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  const [msg, setMsg] = useState('');
  const [active, setActive] = useState('home');
  const [homeA, setHomeA] = useState('');
  const [aboutA, setAboutA] = useState('');
  const [skillA, setSkillA] = useState('');
  const [workA, setworkA] = useState('');
  const [contactA, setContactA] = useState('');
  const [resumeA, setResumeA] = useState('');

  useEffect(() => {
    setAboutA('');
    setHomeA('');
    setSkillA('');
    setworkA('');
    setContactA('');
    setResumeA('');
    if (active === 'home') {
      setHomeA('active');
    } else if (active === 'about') {
      setAboutA('active');
    } else if (active === 'skill') {
      setSkillA('active');
    } else if (active === 'work') {
      setworkA('active');
    } else if (active === 'contact') {
      setContactA('active');
    } else if (active === 'resume') {
      setResumeA('active');
    }
  }, [active, homeA, aboutA, skillA, workA, contactA, resumeA]);

  const sendEmail = (e) => {
    e.preventDefault();
    setMsg('sending');
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_JS_SERVICE_ID,
        process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_JS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text);
          setMsg('success');
        },
        (error) => {
          console.log(error.text);
          setMsg('error');
        }
      );
  };
  return (
    <>
      {/* <!--===== HEADER =====--> */}
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
                  onClick={() => setActive('home')}
                  className={`nav__link ${homeA}`}
                >
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActive('about')}
                  href='#about'
                  className={`nav__link ${aboutA}`}
                  rel='noreferrer'
                >
                  About
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActive('skill')}
                  href='#skills'
                  className={`nav__link ${skillA}`}
                  rel='noreferrer'
                >
                  Skills
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActive('work')}
                  href='#work'
                  className={`nav__link ${workA}`}
                  rel='noreferrer'
                >
                  Work
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActive('contact')}
                  href='#contact'
                  className={`nav__link ${contactA}`}
                  rel='noreferrer'
                >
                  Contact
                </a>
              </li>
              <li className='nav__item'>
                <a
                  onClick={() => setActive('resume')}
                  href={resume}
                  download='Resume of Denzil Rodrigues.pdf'
                  target='_blank'
                  className={`nav__link ${resumeA}`}
                  rel='noreferrer'
                >
                  Resume
                  <iconify-icon data-icon='akar-icons:download'></iconify-icon>
                </a>
              </li>
            </ul>
          </div>

          <div className='nav__toggle' id='nav-toggle'>
            <i className='bx bx-menu'></i>
          </div>
        </nav>
      </header>

      <main className='l-main'>
        {/* <!--===== HOME =====--> */}
        <section className='home bd-grid' id='home' data-aos='fade-up'>
          <div className='home__data'>
            <h1 className='home__title'>
              Hi,
              <br />
              I'am <span className='home__title-color'>Denzil</span>
              <br />
              Full Stack Developer
            </h1>

            <a
              href={resume}
              className='button'
              download='Resume of Denzil Rodrigues.pdf'
              target='_blank'
              rel='noreferrer'
            >
              Resume{' '}
              <iconify-icon data-icon='akar-icons:download'></iconify-icon>
            </a>
          </div>

          <div className='home__social'>
            <a
              href='https://www.linkedin.com/in/denzil-rodrigues-08abb8151/'
              className='home__social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <iconify-icon
                data-icon='brandico:linkedin-rect'
                className='bx bxl-linkedin'
              ></iconify-icon>
            </a>
            <a
              href='https://github.com/denzilrdz'
              className='home__social-icon'
              target='_blank'
              rel='noreferrer'
            >
              <iconify-icon
                data-icon='bi:github'
                className='bx bxl-github'
              ></iconify-icon>
            </a>
          </div>

          <div className='home__img'>
            <img src={thumb} alt='' />
          </div>
        </section>

        {/* <!--===== ABOUT =====--> */}
        <section className='about section' id='about' data-aos='fade-up'>
          <h2 className='section-title'>About</h2>

          <div className='about__container bd-grid'>
            <div className='about__img'>
              <img src={abt} alt='' />
            </div>

            <div>
              <h2 className='about__subtitle'>I'am Denzil</h2>
              <p className='about__text'>
                I am very adaptable to the environment, with focused,
                quality-oriented work skills that are efficient and
                result-oriented. A member of AICUF since 2015. I have actively
                participated in hunger-drives, medical camps, state councils and
                state camps organized by AICUF. I like to listen to music, sing
                and play guitar. I am familiar with tools such as Adobe XD,
                Adobe Premiere, Adobe Photoshop, Snapseed and create short
                videos.
              </p>
            </div>
          </div>
        </section>

        {/* <!--===== SKILLS =====--> */}
        <section className='skills section' id='skills' data-aos='fade-up'>
          <h2 className='section-title'>Skills</h2>

          <div className='skills__container bd-grid'>
            <div>
              <h2 className='skills__subtitle'>Profesional Skills</h2>
              <p className='skills__text'>
                Focused Computer Applications major, aiming to leverage a proven
                knowledge of advanced technology, hardware engineering, and
                database server skills. Please refer my resume for more details.
              </p>
              <div className='skills__data' data-aos='fade-dowm'>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='ant-design:html5-filled'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>HTML5</span>
                </div>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='fa-brands:java'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>JAVA</span>
                </div>
              </div>
              <div className='skills__data' data-aos='fade-dowm'>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='bx:bxl-css3'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>CSS3</span>
                </div>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='cib:php'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>PHP</span>
                </div>
              </div>
              <div className='skills__data' data-aos='fade-dowm'>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='akar-icons:javascript-fill'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>JAVASCRIPT</span>
                </div>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='bx:bxl-c-plus-plus'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>C++</span>
                </div>
              </div>
              <div className='skills__data' data-aos='fade-dowm'>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='tabler:brand-python'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>PYTHON</span>
                </div>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='cib:coreui-c'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>C</span>
                </div>
              </div>
              <div className='skills__data' data-aos='fade-dowm'>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='teenyicons:c-sharp-solid'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>C#</span>
                </div>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='whh:nosql'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>NoSQL</span>
                </div>
              </div>
              <div className='skills__data' data-aos='fade-dowm'>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='akar-icons:cloud'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>AWS & GOOGLE CLOUD</span>
                </div>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='bx:bxl-nodejs'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>NODE.JS</span>
                </div>
              </div>
              <div className='skills__data' data-aos='fade-dowm'>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='ant-design:database-filled'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>DATABASE MANAGEMENT</span>
                </div>
                <div className='skills__names'>
                  <span className='skills__icon'>
                    <iconify-icon
                      data-icon='mdi:git'
                      className='skills__icon'
                    ></iconify-icon>
                  </span>
                  <span className='skills__name'>GIT</span>
                </div>
              </div>
            </div>

            <div data-aos='fade-dowm'>
              <img src={skill} alt='' className='skills__img' />
            </div>
          </div>
        </section>

        {/* <!--===== WORK =====--> */}
        <section className='work section' id='work' data-aos='fade-up'>
          <h2 className='section-title'>Work</h2>

          <div className='work__container bd-grid'>
            <div className='work__img' data-aos='fade-up'>
              <img src={eventx1} alt='' />
              <div className='card-body'>
                <h4 className=''>EventX</h4>
                <p className='skills__text' style={{ padding: '5px' }}>
                  EVENTX is designed Proudly for Event Rental Businesses. This
                  App encompasses spectrum of advanced functionalities. This is
                  developed using React and firebase Realtime database.
                </p>
                <a
                  href='https://fourthrocktechnologies.in/'
                  target='_blank'
                  rel='noreferrer'
                  className='skills__icon'
                >
                  <iconify-icon
                    data-icon='carbon:view-filled'
                    className='skills__icon'
                  ></iconify-icon>
                </a>
              </div>
            </div>
            <div className='work__img' data-aos='fade-up'>
              <img src={cart} alt='' />
              <div className='card-body'>
                <h4 className=''>Cart</h4>
                <p className='skills__text' style={{ padding: '5px' }}>
                  This is not just another e-commerce website but is focused on
                  the privacy of the user. The user is assigned a group where
                  the sub-interest changes every three days and the
                  main-interest every week. This project is developed using
                  Django framework.
                </p>
                <a
                  href='https://github.com/denzilrdz/My-Cart'
                  target='_blank'
                  rel='noreferrer'
                  className='skills__icon'
                >
                  <iconify-icon
                    data-icon='akar-icons:github-fill'
                    className='skills__icon'
                  ></iconify-icon>
                </a>
              </div>
            </div>
            <div className='work__img' data-aos='fade-up'>
              <img src={apartment} alt='' />
              <div className='card-body'>
                <h4 className=''>Apartment Management System</h4>
                <p className='skills__text' style={{ padding: '1px' }}>
                  JSP system for day-to-day activities of apartment like bill
                  payments, swimming and gym membership, hall booking,
                  appointment for vacant apartment, service request for
                  apartment.
                </p>
                <a
                  href='https://github.com/denzilrdz/Apartment-Managment-System'
                  target='_blank'
                  rel='noreferrer'
                  className='skills__icon'
                >
                  <iconify-icon
                    data-icon='akar-icons:github-fill'
                    className='skills__icon'
                  ></iconify-icon>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* <!--===== CONTACT =====--> */}
        <section className='contact section' id='contact' data-aos='fade-up'>
          <h2 className='section-title'>Contact</h2>

          <div className='contact__container bd-grid'>
            <form onSubmit={sendEmail} className='contact__form'>
              <input
                required
                name='name'
                type='text'
                id='name'
                placeholder='Name'
                className='contact__input'
              />
              <input
                required
                name='email'
                id='email'
                type='email'
                placeholder='Email'
                className='contact__input'
              />
              <textarea
                required
                placeholder='Message'
                name='mesg'
                id='mesg'
                cols='0'
                rows='10'
                className='contact__input'
              ></textarea>
              <button type='submit' className='contact__button button'>
                Submit
              </button>
            </form>
            <div className='message__container'>
              {msg === 'sending' ? <progress className='message' /> : ''}
              {msg === 'success' ? (
                <p className='message'>Sent Successfully! </p>
              ) : (
                ''
              )}
              {msg === 'error' ? (
                <p className='message'>There was a error try again. </p>
              ) : (
                ''
              )}
            </div>
          </div>
        </section>
      </main>

      {/* <!--===== FOOTER =====--> */}
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
    </>
  );
}

export default App;
