import React from 'react';
import abt from '../../assets/img/abt.jpg';

const About = (props) => {
  return (
    <React.Fragment>
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
              and play guitar. I am familiar with tools such as Adobe XD, Adobe
              Premiere, Adobe Photoshop, Snapseed and create short videos.
            </p>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
