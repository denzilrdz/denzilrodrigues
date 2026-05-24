declare module '*.scss';
declare module '*.svg';
declare module '*.gif';
declare module '*.jpg';
declare module '*.pdf';
declare module '*.png';

interface RecaptchaEnterprise {
  ready(callback: () => void): void;
  render(
    container: string | HTMLElement,
    parameters: {
      sitekey: string;
      action?: string;
      callback?: (token: string) => void;
      'expired-callback'?: () => void;
      'error-callback'?: () => void;
    },
  ): number;
  reset(widgetId?: number): void;
  getResponse(widgetId?: number): string;
}

interface Window {
  grecaptcha: {
    enterprise: RecaptchaEnterprise;
  };
}
