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
 * @typedef {Object} ContactItem
 * @property {number} id - A unique, auto-incrementing identifier for the contact item.
 * @property {string} name - The name of the platform (e.g., 'LinkedIn', 'GitHub').
 * @property {object} icon - The imported React component for the icon.
 * @property {string} type - The type of contact (e.g., 'social', 'email', 'phone').
 * @property {string} url - The full URL or protocol for the contact method (e.g., 'https://...', 'mailto:...').
 * @property {string} display - The text to be displayed for the link (e.g., '@BonaventureCJ', 'bonacjugwu@gmail.com').
 * @property {string} label - A descriptive label for accessibility.
 * @property {boolean} isFeatured - Indicates if the link should be featured on the homepage.
 */

/** @type {ContactItem[]} */
const contactItems = [
  // Social Links
  {
    id: generateId(),
    name: 'LinkedIn',
    icon: LinkedInIcon,
    type: 'social',
    url: 'https://www.linkedin.com/in/bonaventure-ugwu',
    display: 'Bonaventure Ugwu',
    label: 'Bonaventure Ugwu on LinkedIn',
    isFeatured: true,
  },
  {
    id: generateId(),
    name: 'GitHub',
    icon: GithubIcon,
    type: 'social',
    url: 'https://github.com/BonaventureCJ',
    display: 'BonaventureCJ',
    label: 'Bonaventure Ugwu on GitHub',
    isFeatured: true,
  },
  {
    id: generateId(),
    name: 'X',
    icon: XIcon,
    type: 'social',
    url: 'https://x.com/your-username',
    display: '@your-username',
    label: 'Bonaventure Ugwu on X',
    isFeatured: false,
  },
  // Communication Links
  {
    id: generateId(),
    name: 'Email',
    icon: EmailIcon,
    type: 'email',
    url: 'mailto:bonacjugwu@gmail.com',
    display: 'bonacjugwu@gmail.com',
    label: 'Send an Email to Bonaventure',
    isFeatured: true,
  },
  {
    id: generateId(),
    name: 'WhatsApp',
    icon: WhatsappIcon,
    type: 'whatsapp',
    url: 'https://wa.me/+2348061103300',
    display: '+234 806 110 3300',
    label: 'Chat on WhatsApp',
    isFeatured: false,
  },
  {
    id: generateId(),
    name: 'Phone/SMS',
    icon: SmsIcon,
    type: 'phone',
    url: 'sms:+2348061103300',
    display: '+234 806 110 3300',
    label: 'Send an SMS',
    isFeatured: false,
  },
];

// Combine the two data messages into one object or keep it separate based on preference
const ctaMessage = {
  form: "Feel free to reach out using the form below. I'd love to hear from you!",
  general: "Let's connect and build something great together. Find me on social media or reach me directly.",
};

export { contactItems, ctaMessage };
