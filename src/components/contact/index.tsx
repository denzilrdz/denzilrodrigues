import { FC, FormEvent, useState } from 'react';

const Contacts: FC = () => {
  enum msgState {
    idle,
    sending,
    sent,
    error,
  }

  const [msg, setMsg] = useState(msgState.idle);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    setMsg(msgState.sending);
    try {
      const response = await fetch(
        'https://us-central1-mailer-3abe7.cloudfunctions.net/sendMail',
        {
          method: 'POST',
          body: JSON.stringify({
            name: target.username.value,
            email: target.email.value,
            message: target.message.value,
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
        setMsg(msgState.error);
        return;
      }
      setMsg(msgState.sent);
    } catch (e) {
      console.error(e);
      setMsg(msgState.error);
    }
  };
  return (
    <>
      <section className='contact section' id='contact' data-aos='fade-up'>
        <h2 className='section-title'>Contact</h2>

        <div className='contact__container bd-grid'>
          <form onSubmit={sendEmail} className='contact__form'>
            <input
              required
              name='username'
              type='text'
              id='username'
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
              cols={0}
              rows={10}
              className='contact__input'
            ></textarea>
            <button type='submit' className='contact__button button'>
              Submit
            </button>
          </form>
          <div className='message__container'>
            {msg === msgState.sending && (
              <progress className='progress_color' />
            )}
            {msg === msgState.sent && (
              <p className='message'>Sent Successfully! </p>
            )}
            {msg === msgState.error && (
              <p className='message'>There was a error try again. </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
