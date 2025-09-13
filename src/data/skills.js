// src/data/skills.js

// Import all icon assets as React components using SVGR syntax
import { ReactComponent as TypescriptIcon } from '../assets/icons/typescript.svg';
import { ReactComponent as JavascriptIcon } from '../assets/icons/javascript.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as NextjsIcon } from '../assets/icons/nextjs.svg';
import { ReactComponent as Html5Icon } from '../assets/icons/html5.svg';
import { ReactComponent as Css3Icon } from '../assets/icons/css3.svg';
import { ReactComponent as ReduxIcon } from '../assets/icons/redux.svg';
import { ReactComponent as SassIcon } from '../assets/icons/sass.svg';
import { ReactComponent as TailwindIcon } from '../assets/icons/tailwind.svg';
import { ReactComponent as CssModulesIcon } from '../assets/icons/css-modules.svg';
import { ReactComponent as BootstrapIcon } from '../assets/icons/bootstrap.svg';
import { ReactComponent as GitIcon } from '../assets/icons/git.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as ViteIcon } from '../assets/icons/vite.svg';
import { ReactComponent as WebpackIcon } from '../assets/icons/webpack.svg';
import { ReactComponent as BabelIcon } from '../assets/icons/babel.svg';
import { ReactComponent as FigmaIcon } from '../assets/icons/figma.svg';
import { ReactComponent as EmmetIcon } from '../assets/icons/emmet.svg';
import { ReactComponent as ReactRouterIcon } from '../assets/icons/react-router.svg';
import { ReactComponent as ResponsiveDesignIcon } from '../assets/icons/responsive-design.svg';
import { ReactComponent as ApiIcon } from '../assets/icons/api.svg';
import { ReactComponent as AccessibilityIcon } from '../assets/icons/accessibility.svg';
import { ReactComponent as CrossBrowserIcon } from '../assets/icons/cross-browser.svg';
import { ReactComponent as NpmIcon } from '../assets/icons/npm.svg';
import { ReactComponent as WordpressIcon } from '../assets/icons/wordpress.svg';
import { ReactComponent as WoocommerceIcon } from '../assets/icons/woocommerce.svg';

let nextId = 1;
const generateId = () => nextId++;

const skills = [
  // --- Languages & Frameworks ---
  {
    id: generateId(),
    name: 'TypeScript',
    category: 'Languages & Frameworks',
    icon: TypescriptIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'JavaScript (ES6+)',
    category: 'Languages & Frameworks',
    icon: JavascriptIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'React.js',
    category: 'Languages & Frameworks',
    icon: ReactIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Next.js',
    category: 'Languages & Frameworks',
    icon: NextjsIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'HTML5',
    category: 'Languages & Frameworks',
    icon: Html5Icon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'CSS3',
    category: 'Languages & Frameworks',
    icon: Css3Icon,
    isFeatured: true,
    level: 'Major',
  },
  // --- State Management ---
  {
    id: generateId(),
    name: 'Redux Toolkit',
    category: 'State Management',
    icon: ReduxIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'React Context API',
    category: 'State Management',
    icon: ReactIcon, // Reusing React icon
    isFeatured: true,
    level: 'Major',
  },
  // --- Styling ---
  {
    id: generateId(),
    name: 'Sass/SCSS',
    category: 'Styling',
    icon: SassIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: TailwindIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'CSS Modules',
    category: 'Styling',
    icon: CssModulesIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Bootstrap',
    category: 'Styling',
    icon: BootstrapIcon,
    isFeatured: false,
    level: 'Other',
  },
  // --- Version Control ---
  {
    id: generateId(),
    name: 'Git',
    category: 'Version Control',
    icon: GitIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'GitHub',
    category: 'Version Control',
    icon: GithubIcon,
    isFeatured: true,
    level: 'Major',
  },
  // --- Build Tools & Others ---
  {
    id: generateId(),
    name: 'npm',
    category: 'Build Tools',
    icon: NpmIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'npx',
    category: 'Build Tools',
    icon: NpmIcon, // Often uses the same icon as npm
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Vite',
    category: 'Build Tools',
    icon: ViteIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Webpack',
    category: 'Build Tools',
    icon: WebpackIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Babel',
    category: 'Build Tools',
    icon: BabelIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Figma',
    category: 'Design Tools',
    icon: FigmaIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Emmet',
    category: 'Development Tools',
    icon: EmmetIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'React Router',
    category: 'Libraries',
    icon: ReactRouterIcon,
    isFeatured: false,
    level: 'Other',
  },
  // --- Development Practices ---
  {
    id: generateId(),
    name: 'Responsive Design',
    category: 'Development Practices',
    icon: ResponsiveDesignIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'API Integration',
    category: 'Development Practices',
    icon: ApiIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Web Accessibility (WCAG)',
    category: 'Development Practices',
    icon: AccessibilityIcon,
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Cross-browser Compatibility',
    category: 'Development Practices',
    icon: CrossBrowserIcon,
    isFeatured: false,
    level: 'Other',
  },
  // --- CMS & E-commerce ---
  {
    id: generateId(),
    name: 'WordPress',
    category: 'CMS & E-commerce',
    icon: WordpressIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'WooCommerce',
    category: 'CMS & E-commerce',
    icon: WoocommerceIcon,
    isFeatured: false,
    level: 'Other',
  },
];

export default skills;
