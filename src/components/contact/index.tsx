import { FC, FormEvent, useCallback, useEffect, useRef, useState } from 'react';
import Styles from './index.module.scss';
import { sendMailAction } from './contact.actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { exeUrls } from '@config/config';

const Contacts: FC = () => {
  enum msgState {
    idle,
    sending,
    sent,
    error,
  }

  const [msg, setMsg] = useState(msgState.idle);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  const onCaptchaSuccess = useCallback((token: string) => {
    setRecaptchaToken(token);
  }, []);

  const onCaptchaExpired = useCallback(() => {
    setRecaptchaToken(null);
  }, []);

  useEffect(() => {
    const renderCaptcha = () => {
      if (
        recaptchaContainerRef.current &&
        window.grecaptcha?.enterprise &&
        widgetIdRef.current === null
      ) {
        try {
          widgetIdRef.current = window.grecaptcha.enterprise.render(
            recaptchaContainerRef.current,
            {
              sitekey: exeUrls.recaptchaSiteKey,
              action: 'CONTACT',
              callback: onCaptchaSuccess,
              'expired-callback': onCaptchaExpired,
              'error-callback': onCaptchaExpired,
            }
          );
        } catch {
          // Widget may already be rendered
        }
      }
    };

    if (window.grecaptcha?.enterprise) {
      window.grecaptcha.enterprise.ready(renderCaptcha);
    } else {
      // Script may still be loading — poll briefly
      const interval = setInterval(() => {
        if (window.grecaptcha?.enterprise) {
          clearInterval(interval);
          window.grecaptcha.enterprise.ready(renderCaptcha);
        }
      }, 200);
      return () => clearInterval(interval);
    }
  }, [onCaptchaSuccess, onCaptchaExpired]);

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();

    if (!recaptchaToken) return;

    const target = e.target as HTMLFormElement;
    setMsg(msgState.sending);
    try {
      const payload = {
        name: target.username.value,
        email: target.email.value,
        message: target.message.value,
        reason: 'portfolio',
        recaptchaToken,
      };
      await sendMailAction(payload);
      setMsg(msgState.sent);
    } catch (e) {
      setMsg(msgState.error);
    }

    // Reset captcha after submission
    setRecaptchaToken(null);
    if (widgetIdRef.current !== null && window.grecaptcha?.enterprise) {
      window.grecaptcha.enterprise.reset(widgetIdRef.current);
    }
  };

  const isSending = msg === msgState.sending;
  const canSubmit = !!recaptchaToken && !isSending;

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

            <div className={Styles.recaptchaWrapper}>
              <div ref={recaptchaContainerRef} className={Styles.recaptchaBox}></div>
              {!recaptchaToken && msg !== msgState.idle && (
                <p className={Styles.recaptchaHint}>Please complete the captcha to continue</p>
              )}
            </div>

            <button
              type='submit'
              className={`${Styles.contactButton} ${Styles.button}`}
              disabled={!canSubmit}
            >
              {isSending ? (
                <FontAwesomeIcon className={Styles.loader} icon={faSpinner} />
              ) : (
                'Submit'
              )}
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
