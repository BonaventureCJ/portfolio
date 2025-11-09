// src/data/skills.js

/**
 * Developer Tip: Centralized Icon Management & Data Decoupling
 *
 * This file uses string keys for icons instead of direct component imports.
 * This approach decouples data (what is displayed) from the UI implementation (how it is displayed)
 * and offers significant benefits in enterprise-level applications:
 *
 * 1. Portability and Scalability: The skill data is a clean, framework-agnostic array of objects.
 *    This allows the data to be easily managed, updated, or even served from a
 *    remote API or CMS without affecting the UI components that render it.
 *    As the number of skills and icons grows, this centralized system remains easy to manage.
 *
 * 2. Maintainability and Readability: All icon components are managed in a single
 *    file ('src/components/Icon/icons.js'). This reduces repetitive imports,
 *    eliminates the potential for merge conflicts in component files, and keeps
 *    the data file focused purely on data.
 *
 * 3. Performance and Tree-Shaking: By not importing all icons directly into this file,
 *    the application can take full advantage of "tree-shaking." This means the build tool
 *    can efficiently remove any unused icons from the final bundle, resulting in a smaller
 *    bundle size and faster load times.
 *
 * 4. Improved Testability: Decoupling data from presentation simplifies testing. The data
 *    can be unit-tested independently of the rendering components.
 *
 * 5. Avoided Anti-Pattern: Importing icon components directly from 'components/Icon/icons'
 *    with dot or bracket syntax would have been a poor practice. That approach tightly
 *    couples the data to the UI, sacrificing the portability and performance benefits
 *    detailed above.
 *
 * The string key is used by the reusable <Icon /> component to render the correct SVG.
 */

import generateId from 'utils/helpers';

export const skills = [
  // --- Languages & Frameworks (Fundamental) ---
  {
    id: generateId(),
    name: 'Next.js',
    category: 'Languages & Frameworks',
    icon: 'NextjsIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'React.js',
    category: 'Languages & Frameworks',
    icon: 'ReactIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'TypeScript',
    category: 'Languages & Frameworks',
    icon: 'TypescriptIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'JavaScript (ES6+)',
    category: 'Languages & Frameworks',
    icon: 'JavascriptIcon',
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'HTML5',
    category: 'Languages & Frameworks',
    icon: 'Html5Icon',
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'CSS3',
    category: 'Languages & Frameworks',
    icon: 'Css3Icon',
    isFeatured: false,
    level: 'Major',
  },
  // --- Core Development Practices ---
  {
    id: generateId(),
    name: 'Git',
    category: 'Version Control',
    icon: 'GitIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'GitHub',
    category: 'Version Control',
    icon: 'GithubIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'API Integration',
    category: 'Development Practices',
    icon: 'ApiIcon',
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Responsive Design',
    category: 'Development Practices',
    icon: 'ResponsiveDesignIcon',
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Search Engine Optimization (SEO)',
    category: 'Development Practices',
    icon: 'SeoIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Web Accessibility (WCAG)',
    category: 'Development Practices',
    icon: 'AccessibilityIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Cross-browser Compatibility',
    category: 'Development Practices',
    icon: 'CrossBrowserIcon',
    isFeatured: false,
    level: 'Major',
  },
  // --- State Management ---
  {
    id: generateId(),
    name: 'Redux Toolkit',
    category: 'State Management',
    icon: 'ReduxIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'React Context API',
    category: 'State Management',
    icon: 'ReactIcon',
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'React Router',
    category: 'Libraries',
    icon: 'ReactRouterIcon',
    isFeatured: false,
    level: 'Major',
  },
  // --- Styling (Specialized) ---
  {
    id: generateId(),
    name: 'Sass/SCSS',
    category: 'Styling',
    icon: 'SassIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'CSS Modules',
    category: 'Styling',
    icon: 'CssModulesIcon',
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Tailwind CSS',
    category: 'Styling',
    icon: 'TailwindIcon',
    isFeatured: true,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Bootstrap',
    category: 'Styling',
    icon: 'BootstrapIcon',
    isFeatured: false,
    level: 'Major',
  },
  // --- Build Tools & Others ---
  {
    id: generateId(),
    name: 'Figma',
    category: 'Design Tools',
    icon: 'FigmaIcon',
    isFeatured: false,
    level: 'Major',
  },
  {
    id: generateId(),
    name: 'Vite',
    category: 'Build Tools',
    icon: 'ViteIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Webpack',
    category: 'Build Tools',
    icon: 'WebpackIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Babel',
    category: 'Build Tools',
    icon: 'BabelIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Node.js',
    category: 'Tools & Technologies',
    icon: 'NodejsIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Visual Studio Code',
    category: 'Development Tools',
    icon: 'VscodeIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'pnpm',
    category: 'Package Managers',
    icon: 'PnpmIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'npm',
    category: 'Package Managers',
    icon: 'NpmIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'npx',
    category: 'Package Managers',
    icon: 'NpmIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'Emmet',
    category: 'Development Tools',
    icon: 'EmmetIcon',
    isFeatured: false,
    level: 'Other',
  },
  // --- CMS & E-commerce ---
  {
    id: generateId(),
    name: 'WordPress',
    category: 'CMS & E-commerce',
    icon: 'WordpressIcon',
    isFeatured: false,
    level: 'Other',
  },
  {
    id: generateId(),
    name: 'WooCommerce',
    category: 'CMS & E-commerce',
    icon: 'WoocommerceIcon',
    isFeatured: false,
    level: 'Other',
  },
];
