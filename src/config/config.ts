const exeEnvObj = Object.freeze({
  prod: 'prod',
});

const exeEnv = exeEnvObj.prod;

const urls = Object.freeze({
  [exeEnvObj.prod]: {
    cloudFuncBaseUrl:
      'https://us-central1-mailer-3abe7.cloudfunctions.net/sendMail',
    firebaseConfig: {
      apiKey: 'AIzaSyDNEOJ-VreSdIArt7bT-IREZIjr9Tg1Wl8',
      authDomain: 'mailer-3abe7.firebaseapp.com',
      projectId: 'mailer-3abe7',
      storageBucket: 'mailer-3abe7.firebasestorage.app',
      messagingSenderId: '600783755472',
      appId: '1:600783755472:web:b7817638587e778a2326d5',
      measurementId: 'G-C37N5VG330',
    },
    recaptchaSiteKey: '6Lfy2fksAAAAAB2dyx0ZKX97Db7FkNmdIZIaRSE5',
  },
});

export const exeUrls = urls[exeEnv];

export const defaultReqHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};
