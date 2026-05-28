import { FC } from 'react';
import abt from '@assets/img/abt.jpg';
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
              Full Stack Developer with a passion for building intelligent,
              scalable software from robust web applications to AI-powered
              systems using LangChain, LangGraph, LangSmith, and Model Context
              Protocol (MCP). I bring hands-on experience across the full
              development lifecycle, designing and shipping solutions that are
              both technically sound and user-focused. I thrive in Agile teams
              where collaboration, clean code, and continuous improvement are
              the norm. Currently exploring the intersection of software
              engineering and AI, building agentic workflows, LLM integrations,
              and context-aware applications that push beyond traditional
              development. Open to challenging roles where I can contribute
              across the stack and grow alongside a high-performing team.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
