import { FC } from 'react';
import abt from '@assets/img/abt.jpg'
import Styles from './index.module.scss';

const About: FC = () => {
  return (
    <>
      <section className={Styles.section} id='about' data-aos='fade-up'>
        <h2 className={Styles.sectionTitle}>About</h2>
        <div className={`${Styles.aboutContainer} ${Styles.bdGrid}`}>
          <div className={Styles.aboutImg}>
            <img src={abt} alt='Denzil' />
          </div>
          <div>
            <h2 className={Styles.aboutSubtitle}>I'am Denzil</h2>
            <p>
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
