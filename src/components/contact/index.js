import React, { useState } from 'react';

const Contacts = (props) => {
  const [msg, setMsg] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    setMsg('sending');
    try {
      const response = await fetch(
        'https://us-central1-mailer-3abe7.cloudfunctions.net/sendMail',
        {
          method: 'POST',
          mode: 'no-cors',
          body: JSON.stringify({
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
            reason: 'portfolio',
          }),
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
      const data = await response.json();
      console.log(data);
      if (response.status >= 400) {
        setMsg('error');
        return;
      }
      setMsg('success');
    } catch (e) {
      console.error(e);
      setMsg('error');
    }
  };
  return (
    <React.Fragment>
      <section className='contact section' id='contact' data-aos='fade-up'>
        <h2 className='section-title'>Contact</h2>

        <div className='contact__container bd-grid'>
          <form onSubmit={sendEmail} className='contact__form'>
            <input
              required
              name='name'
              type='text'
              id='name'
              placeholder='Name'
              className='contact__input'
            />
            <input
              required
              name='email'
              id='email'
              type='email'
              placeholder='Email'
              className='contact__input'
            />
            <textarea
              required
              placeholder='Message'
              name='message'
              id='message'
              cols='0'
              rows='10'
              className='contact__input'
            ></textarea>
            <button type='submit' className='contact__button button'>
              Submit
            </button>
          </form>
          <div className='message__container'>
            {msg === 'sending' ? <progress className='message' /> : ''}
            {msg === 'success' ? (
              <p className='message'>Sent Successfully! </p>
            ) : (
              ''
            )}
            {msg === 'error' ? (
              <p className='message'>There was a error try again. </p>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contacts;
