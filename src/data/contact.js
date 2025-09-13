// src/data/contact.js

// Import icons as React components
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as XIcon } from '../assets/icons/x-twitter.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/email.svg';
import { ReactComponent as SmsIcon } from '../assets/icons/sms.svg';
import { ReactComponent as WhatsappIcon } from '../assets/icons/whatsapp.svg';

/**
 * A simple auto-incrementing ID generator.
 */
let nextId = 1;
const generateId = () => nextId++;

/**
 * @typedef {Object} ContactLink
 * @property {number} id - A unique, auto-incrementing identifier for the link.
 * @property {string} name - The name of the platform (e.g., 'LinkedIn', 'GitHub').
 * @property {object} icon - The imported React component for the icon.
 * @property {string} url - The full URL to the social media profile or contact method.
 * @property {string} label - A descriptive label for accessibility.
 */

/** @type {ContactLink[]} */
const socialLinks = [
  {
    id: generateId(),
    name: 'LinkedIn',
    icon: LinkedInIcon,
    url: 'https://www.linkedin.com/in/bonaventure-ugwu',
    label: 'Bonaventure Ugwu on LinkedIn',
  },
  {
    id: generateId(),
    name: 'GitHub',
    icon: GithubIcon,
    url: 'https://github.com/BonaventureCJ',
    label: 'Bonaventure Ugwu on GitHub',
  },
  {
    id: generateId(),
    name: 'X',
    icon: XIcon,
    url: 'https://x.com/your-username', // Replace with your actual X profile URL
    label: 'Bonaventure Ugwu on X',
  },
];

/** @type {object} */
const contactInfo = {
  phone: {
    number: '+2348061103300',
    display: '+234 806 110 3300',
    protocol: 'sms:',
    icon: SmsIcon,
    label: 'Send an SMS',
  },
  whatsapp: {
    number: '+2348061103300',
    display: '+234 806 110 3300',
    protocol: 'https://wa.me/',
    icon: WhatsappIcon,
    label: 'Chat on WhatsApp',
  },
  email: {
    primary: 'bonacjugwu@gmail.com',
    secondary: 'ugwubonaventure@gmail.com',
    protocol: 'mailto:',
    icon: EmailIcon,
    label: 'Send an Email',
  },
  ctaMessage: {
    form: "Feel free to reach out using the form below. I'd love to hear from you!",
    general: "Let's connect and build something great together. Find me on social media or reach me directly.",
  },
};

export { socialLinks, contactInfo };
