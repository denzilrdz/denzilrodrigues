import { FC } from 'react';
import abt from '../../assets/img/abt.jpg';

const About: FC = () => {
  return (
    <>
      <section className='about section' id='about' data-aos='fade-up'>
        <h2 className='section-title'>About</h2>

        <div className='about__container bd-grid'>
          <div className='about__img'>
            <img src={abt} alt='' />
          </div>

          <div>
            <h2 className='about__subtitle'>I'am Denzil</h2>
            <p className='about__text'>
              Seeking a challenging software engineering role that leverages my
              experience as a full stack developer, strong technical skills, and
              passion for creating innovative software solutions. With
              proficiency in multiple programming languages and frameworks, I am
              confident in my ability to design, develop, and maintain complex
              software systems that meet and exceed customer expectations. As a
              collaborative team player with excellent problem-solving skills
              and experience working in Agile environments, I am eager to
              contribute to the success of a dynamic and high-performing
              software development team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
