import { FC, FormEvent, useState } from 'react';
import Styles from './index.module.scss';
import { sendMailAction } from './contact.actions';

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
      const payload = {
        name: target.username.value,
        email: target.email.value,
        message: target.message.value,
        reason: 'portfolio',
      };
      await sendMailAction(payload);
      setMsg(msgState.sent);
    } catch (e) {
      setMsg(msgState.error);
    }
  };

  return (
    <>
      <section className={Styles.section} id='contact' data-aos='fade-up'>
        <h2 className={Styles.sectionTitle}>Contact</h2>

        <div className={`${Styles.contactContainer} ${Styles.bdGrid}`}>
          <form onSubmit={sendEmail} className={Styles.contact__form}>
            <input
              required
              name='username'
              type='text'
              id='username'
              placeholder='Name'
              className={Styles.contactInput}
            />
            <input
              required
              name='email'
              id='email'
              type='email'
              placeholder='Email'
              className={Styles.contactInput}
            />
            <textarea
              required
              placeholder='Message'
              name='message'
              id='message'
              cols={0}
              rows={10}
              className={Styles.contactInput}
            ></textarea>
            <button
              type='submit'
              className={`${Styles.contactButton} ${Styles.button}`}
              disabled={msg === msgState.sending ? true : false}
            >
              Submit
            </button>
          </form>
          <div className={Styles.messageContainer}>
            <p className={Styles.message}>
              {msg === msgState.sent && 'Sent Successfully!'}
              {msg === msgState.error && 'There was a error try again'}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contacts;
