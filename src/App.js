import React, { useEffect } from 'react';
import './assets/css/styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Header from './components/header';
import Footer from './components/footer';
import Skills from './components/skills';
import Home from './components/home';
import About from './components/about';
import Contacts from './components/contact';
import Work from './components/work';

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  return (
    <React.Fragment>
      <Header />
      <main className='l-main'>
        <Home />
        <About />
        <Skills />
        <Work />
        <Contacts />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
