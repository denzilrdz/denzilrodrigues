import { analytics } from './firebase';
import { logEvent } from 'firebase/analytics';

/**
 * Log a custom event to Firebase Analytics.
 */
export const trackEvent = (
  eventName: string,
  params?: Record<string, string | number | boolean>,
) => {
  logEvent(analytics, eventName, params);
};

// ── Specific event helpers ──────────────────────────────────────────────

/** Fired when a user successfully submits the contact form. */
export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit');
};

/** Fired when a user clicks the resume download link. */
export const trackResumeDownload = (source: 'header' | 'home') => {
  trackEvent('resume_download', { source });
};

/** Fired when a user clicks an outbound social link. */
export const trackSocialClick = (
  platform: string,
  source: 'home' | 'footer',
) => {
  trackEvent('social_click', { platform, source });
};

/** Fired when a user clicks a project link (live demo or GitHub). */
export const trackProjectClick = (
  project: string,
  linkType: 'live' | 'github',
) => {
  trackEvent('project_click', { project, link_type: linkType });
};

/** Fired when a section scrolls into view (via AOS). */
export const trackSectionView = (section: string) => {
  trackEvent('section_view', { section });
};
