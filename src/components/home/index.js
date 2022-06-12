import React from 'react';
import resume from '../../assets/documents/resume.pdf';
import thumb from '../../assets/img/thumb.png';

const Home = (props) => {
  return (
    <React.Fragment>
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
            Resume <iconify-icon data-icon='akar-icons:download'></iconify-icon>
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
    </React.Fragment>
  );
};

export default Home;
