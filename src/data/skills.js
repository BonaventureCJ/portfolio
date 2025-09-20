// src/data/skills.js

// Import all icon assets as React components using SVGR syntax
// Arranged to match the order of appearance in the skills array

// --- Languages & Frameworks ---
import { ReactComponent as NextjsIcon } from '../assets/icons/nextjs.svg';
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as TypescriptIcon } from '../assets/icons/typescript.svg';
import { ReactComponent as JavascriptIcon } from '../assets/icons/javascript.svg';
import { ReactComponent as Html5Icon } from '../assets/icons/html5.svg';
import { ReactComponent as Css3Icon } from '../assets/icons/css3.svg';

// --- Core Development Practices ---
import { ReactComponent as GitIcon } from '../assets/icons/git.svg';
import { ReactComponent as GithubIcon } from '../assets/icons/github.svg';
import { ReactComponent as ApiIcon } from '../assets/icons/api.svg';
import { ReactComponent as ResponsiveDesignIcon } from '../assets/icons/responsive-design.svg';
import { ReactComponent as SeoIcon } from '../assets/icons/seo.svg';
import { ReactComponent as AccessibilityIcon } from '../assets/icons/accessibility.svg';
import { ReactComponent as CrossBrowserIcon } from '../assets/icons/cross-browser.svg';

// --- State Management ---
import { ReactComponent as ReduxIcon } from '../assets/icons/redux.svg';
import { ReactComponent as ReactRouterIcon } from '../assets/icons/react-router.svg';

// --- Styling (Specialized) ---
import { ReactComponent as SassIcon } from '../assets/icons/sass.svg';
import { ReactComponent as CssModulesIcon } from '../assets/icons/css-modules.svg';
import { ReactComponent as TailwindIcon } from '../assets/icons/tailwind.svg';
import { ReactComponent as BootstrapIcon } from '../assets/icons/bootstrap.svg';

// --- Build Tools & Others ---
import { ReactComponent as FigmaIcon } from '../assets/icons/figma.svg';
import { ReactComponent as ViteIcon } from '../assets/icons/vite.svg';
import { ReactComponent as WebpackIcon } from '../assets/icons/webpack.svg';
import { ReactComponent as BabelIcon } from '../assets/icons/babel.svg';
import { ReactComponent as PnpmIcon } from '../assets/icons/pnpm.svg';
import { ReactComponent as NpmIcon } from '../assets/icons/npm.svg';
import { ReactComponent as EmmetIcon } from '../assets/icons/emmet.svg';

// --- CMS & E-commerce ---
import { ReactComponent as WordpressIcon } from '../assets/icons/wordpress.svg';
import { ReactComponent as WoocommerceIcon } from '../assets/icons/woocommerce.svg';

// Unique ID generator
let nextId = 1;
const generateId = () => nextId++;

const skills = [
  // --- Languages & Frameworks (Fundamental) ---
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
    name: 'React.js',
    category: 'Languages & Frameworks',
    icon: ReactIcon,
    isFeatured: true,
    level: 'Major',
  },
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
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'HTML5',
    category: 'Languages & Frameworks',
    icon: Html5Icon,
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'CSS3',
    category: 'Languages & Frameworks',
    icon: Css3Icon,
    isFeatured: false,
    level: 'Major',
  },
  // --- Core Development Practices ---
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
  {
    id: generateId(),
    name: 'API Integration',
    category: 'Development Practices',
    icon: ApiIcon,
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Responsive Design',
    category: 'Development Practices',
    icon: ResponsiveDesignIcon,
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Search Engine Optimization (SEO)',
    category: 'Development Practices',
    icon: SeoIcon,
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
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'React Router',
    category: 'Libraries',
    icon: ReactRouterIcon,
    isFeatured: false,
    level: 'Major',
  },
  // --- Styling (Specialized) ---
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
    name: 'CSS Modules',
    category: 'Styling',
    icon: CssModulesIcon,
    isFeatured: false,
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
    name: 'Bootstrap',
    category: 'Styling',
    icon: BootstrapIcon,
    isFeatured: false,
    level: 'Major',
  },
  // --- Build Tools & Others ---
  {
    id: generateId(),
    name: 'Figma',
    category: 'Design Tools',
    icon: FigmaIcon,
    isFeatured: false,
    level: 'Major',
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
    name: 'pnpm',
    category: 'Build Tools',
    icon: PnpmIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'npm',
    category: 'Build Tools',
    icon: NpmIcon,
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'npx',
    category: 'Build Tools',
    icon: NpmIcon,
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
