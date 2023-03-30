import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import skill from '../../assets/img/skill.gif';
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

const Skills: FC = () => {
  return (
    <>
      <section className='skills section' id='skills' data-aos='fade-up'>
        <h2 className='section-title'>Skills</h2>

        <div className='skills__container bd-grid'>
          <div>
            <h2 className='skills__subtitle'>Professional Skills</h2>
            <p className='skills__text'>
              To leverage my strong technical skills and my experience as a full
              stack developer to contribute to the success of a dynamic and
              innovative software development team.
            </p>
            <div className='skills__data' data-aos='fade-down'>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faJs} />
                </span>
                <span className='skills__name'>JavaScript</span>
              </div>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faPython} />
                </span>
                <span className='skills__name'>Python</span>
              </div>
            </div>
            <div className='skills__data' data-aos='fade-down'>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faDocker} />
                </span>
                <span className='skills__name'>Docker</span>
              </div>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faJira} />
                </span>
                <span className='skills__name'>JIRA</span>
              </div>
            </div>
            <div className='skills__data' data-aos='fade-down'>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faReact} />
                </span>
                <span className='skills__name'>React</span>
              </div>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faJava} />
                </span>
                <span className='skills__name'>Java</span>
              </div>
            </div>
            <div className='skills__data' data-aos='fade-down'>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faTimeline} />
                </span>
                <span className='skills__name'>CI/CD</span>
              </div>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faPhp} />
                </span>
                <span className='skills__name'>PHP</span>
              </div>
            </div>
            <div className='skills__data' data-aos='fade-down'>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faCloud} />
                </span>
                <span className='skills__name'>AWS & Google Cloud</span>
              </div>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faC} />
                </span>
                <span className='skills__name'>C</span>
              </div>
            </div>
            <div className='skills__data' data-aos='fade-down'>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faDatabase} />
                </span>
                <span className='skills__name'>Database Management</span>
              </div>
              <div className='skills__names'>
                <span className='skills__icon'>
                  <FontAwesomeIcon size='sm' icon={faGitAlt} />
                </span>
                <span className='skills__name'>Git</span>
              </div>
            </div>
          </div>

          <div data-aos='fade-down'>
            <img src={skill} alt='' className='skills__img' />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
