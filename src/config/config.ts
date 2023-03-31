export const exeEnv = Object.freeze({
  prod: 'prod',
});

export const urls = Object.freeze({
  prod: {
    cloudFuncBaseUrl: 'https://us-central1-mailer-3abe7.cloudfunctions.net',
  },
});

export const cloudFuncBaseUrl = urls[exeEnv.prod].cloudFuncBaseUrl;

export const defaultReqHeaders = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
  'Access-Control-Allow-Origin': '*',
};
