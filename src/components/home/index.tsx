import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Styles from './index.module.scss';
import resume from '@assets/documents/resume.pdf';
import thumb from '@assets/img/thumb.png';

const Home: FC = () => {
  return (
    <>
      <section
        className={`${Styles.home} ${Styles.bdGrid}`}
        id='home'
        data-aos='fade-up'
      >
        <div className={Styles.homeData}>
          <h1 className={Styles.homeTitle}>
            Hi,
            <br />
            I'am <span className={Styles.homeTitleColor}>Denzil</span>
            <br />
            Full Stack Developer
          </h1>

          <a
            href={resume}
            className={Styles.button}
            download='Resume of Denzil Rodrigues.pdf'
            target='_blank'
            rel='noreferrer'
          >
            Resume{' '}
            <FontAwesomeIcon
              className={Styles.paddingLeft}
              icon={faCloudDownload}
            />
          </a>
        </div>

        <div className={Styles.homeSocial}>
          <a
            href='https://www.linkedin.com/in/denzil-rodrigues-08abb8151/'
            className={Styles.homeSocialIcon}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faLinkedin} />
          </a>
          <a
            href='https://github.com/denzilrdz'
            className={Styles.homeSocialIcon}
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faGithub} />
          </a>
        </div>
        <div className={Styles.homeImg}>
          <img src={thumb} alt='' />
        </div>
      </section>
    </>
  );
};

export default Home;
