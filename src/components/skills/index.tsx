import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faDocker,
  faGitAlt,
  faJava,
  faJira,
  faJs,
  faPhp,
  faPython,
  faReact,
} from '@fortawesome/free-brands-svg-icons';
import {
  faC,
  faCloud,
  faDatabase,
  faTimeline,
} from '@fortawesome/free-solid-svg-icons';
import skill from '@assets/img/skill.gif';
import Styles from './index.module.scss';

const Skills: FC = () => {
  return (
    <>
      <section className={Styles.section} id='skills' data-aos='fade-up'>
        <h2 className={Styles.sectionTitle}>Skills</h2>

        <div className={`${Styles.skillsContainer} ${Styles.bdGrid}`}>
          <div>
            <h2 className={Styles.skillsSubtitle}>Professional Skills</h2>
            <p className={Styles.skillsText}>
              To leverage my strong technical skills and my experience as a full
              stack developer to contribute to the success of a dynamic and
              innovative software development team.
            </p>
            <div className={Styles.skillsData} data-aos='fade-down'>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faJs} />
                </span>
                <span className={Styles.skillsNames}>JavaScript</span>
              </div>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faPython} />
                </span>
                <span className={Styles.skillsNames}>Python</span>
              </div>
            </div>
            <div className={Styles.skillsData} data-aos='fade-down'>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faDocker} />
                </span>
                <span className={Styles.skillsNames}>Docker</span>
              </div>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faJira} />
                </span>
                <span className={Styles.skillsNames}>JIRA</span>
              </div>
            </div>
            <div className={Styles.skillsData} data-aos='fade-down'>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faReact} />
                </span>
                <span className={Styles.skillsNames}>React</span>
              </div>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faJava} />
                </span>
                <span className={Styles.skillsNames}>Java</span>
              </div>
            </div>
            <div className={Styles.skillsData} data-aos='fade-down'>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faTimeline} />
                </span>
                <span className={Styles.skillsNames}>CI/CD</span>
              </div>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faPhp} />
                </span>
                <span className={Styles.skillsNames}>PHP</span>
              </div>
            </div>
            <div className={Styles.skillsData} data-aos='fade-down'>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faCloud} />
                </span>
                <span className={Styles.skillsNames}>AWS & Google Cloud</span>
              </div>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faC} />
                </span>
                <span className={Styles.skillsNames}>C</span>
              </div>
            </div>
            <div className={Styles.skillsData} data-aos='fade-down'>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faDatabase} />
                </span>
                <span className={Styles.skillsNames}>Database Management</span>
              </div>
              <div className={Styles.skillsNames}>
                <span className={Styles.skillsIcon}>
                  <FontAwesomeIcon size='sm' icon={faGitAlt} />
                </span>
                <span className={Styles.skillsNames}>Git</span>
              </div>
            </div>
          </div>

          <div data-aos='fade-down'>
            <img src={skill} alt='' className={Styles.skillsImg} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
