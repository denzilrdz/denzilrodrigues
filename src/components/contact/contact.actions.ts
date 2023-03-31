import { cloudFuncBaseUrl, defaultReqHeaders } from '../../config/config';

export const sendMailAction = async (payload: Object) => {
  try {
    const url = `${cloudFuncBaseUrl}/sendMail`;
    const res = await fetch(url, {
      method: 'POST',
      headers: defaultReqHeaders,
      body: JSON.stringify(payload),
    });
    if (res.status >= 400) throw new Error('Failed to send mail');
    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};
