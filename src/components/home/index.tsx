import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudDownload } from '@fortawesome/free-solid-svg-icons';
import resume from '../../assets/documents/resume.pdf';
import thumb from '../../assets/img/thumb.png';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home: FC = () => {
  return (
    <>
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
            <FontAwesomeIcon className='padding_left' icon={faCloudDownload} />
          </a>
        </div>

        <div className='home__social'>
          <a
            href='https://www.linkedin.com/in/denzil-rodrigues-08abb8151/'
            className='home__social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faLinkedin} />
          </a>
          <a
            href='https://github.com/denzilrdz'
            className='home__social-icon'
            target='_blank'
            rel='noreferrer'
          >
            <FontAwesomeIcon size='xl' icon={faGithub} />
          </a>
        </div>

        <div className='home__img'>
          <img src={thumb} alt='' />
        </div>
      </section>
    </>
  );
};

export default Home;
