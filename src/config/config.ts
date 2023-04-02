const exeEnvObj = Object.freeze({
  prod: 'prod',
});

const exeEnv = exeEnvObj.prod;

const urls = Object.freeze({
  prod: {
    cloudFuncBaseUrl: 'https://us-central1-mailer-3abe7.cloudfunctions.net',
  },
});

export const exeUrls = urls[exeEnv];

export const defaultReqHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};
