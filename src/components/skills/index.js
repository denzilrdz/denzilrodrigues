import React from 'react';
import skill from '../../assets/img/skill.gif';

const Skills = (props) => {
  return (
    <React.Fragment>
      <section className='skills section' id='skills' data-aos='fade-up'>
        <h2 className='section-title'>Skills</h2>

        <div className='skills__container bd-grid'>
          <div>
            <h2 className='skills__subtitle'>Profesional Skills</h2>
            <p className='skills__text'>
              To leverage my strong technical skills and my experience as a full
              stack developer to contribute to the success of a dynamic and
              innovative software development team.
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
    </React.Fragment>
  );
};

export default Skills;
