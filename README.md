# My React.js Personal Portfolio Website

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Purpose

To showcase my personal Portfolio webpage

## To test project

run npm i

Then npm start
### 



## FOLDER SETUP



### UPDATED FOLDER SETUP



06 September, 2025
/portfolio
├── public/                 # Static assets like index.html, favicon, robots.txt
├── src/                    # All application code
│   ├── assets/             # Images and icons
│   │   ├── images/
│   │   └── icons/
│   ├── components/         # Reusable, presentational components
│   │   ├── Cards/          
│   │   │   ├── MajorSkillsCard.jsx
│   │   │   ├── MajorSkillsCard.module.scss
│   │   │   ├── OtherSkillsCard.jsx
│   │   │   ├── OtherSkillsCard.module.scss
│   │   │   └── ProjectsCard.jsx
│   │   │   └── ProjectsCard.module.scss
│   │   └── ContactsCard/
│   │       ├── ContactsCard.jsx
│   │       └── ContactsCard.module.scss
│   ├── data/               # Local data acting as a mock API
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── contact-info.js
│   ├── features/           # Pages and their specific components
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.scss
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.scss
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.scss
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.scss
│   │   └── Skills/
│   │       ├── Skills.jsx
│   │       └── Skills.module.scss
│   ├── layouts/            # Page layouts
│   │   ├── MainLayout.jsx
│   │   ├── MainLayout.module.scss
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.module.scss
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.scss
│   ├── services/           # Data-fetching and business logic (for a real API)
│   │   └── api.js
│   ├── styles/             # Global styles, variables, and resets
│   │   ├── _abstracts.scss   # Variables, mixins, functions
│   │   ├── _normalize.scss
│   │   ├── _resets.scss
│   │   └── global.scss
│   ├── App.jsx             # Main application component for routing
│   └── index.js            # Entry file to render the app
├── .gitignore
├── package.json
├── jsconfig.json           # New file for absolute imports
└── README.md


### UPDATED FOLDER SETUP
UPDATED: 08 September, 2025
/portfolio
├── public/                 # Static assets like index.html, favicon, robots.txt
├── src/                    # All application code
│   ├── assets/             # Static files (images, fonts, icons)
│   │   ├── images/
│   │   └── icons/
│   ├── components/         # Reusable, atomic UI components
│   │   ├── Cards/
│   │   │   ├── MajorSkillsCard.jsx
│   │   │   ├── MajorSkillsCard.module.scss
│   │   │   ├── OtherSkillsCard.jsx
│   │   │   ├── OtherSkillsCard.module.scss
│   │   │   └── ProjectsCard.jsx
│   │   │   └── ProjectsCard.module.scss
│   │   ├── ContactsCard/
│   │   │   ├── ContactsCard.jsx
│   │   │   └── ContactsCard.module.scss
│   │   └── Utility/
│   │       ├── ErrorBoundaryPage/
│   │       │   ├── ErrorBoundaryPage.jsx
│   │       │   └── ErrorBoundaryPage.module.scss
│   │       └── NotFoundPage/
│   │           ├── NotFoundPage.jsx
│   │           └── NotFoundPage.module.scss
│   ├── data/               # Local data acting as a mock API
│   │   ├── skills.js
│   │   ├── projects.js
│   │   └── contact-info.js
│   ├── features/           # Pages and their specific components
│   │   ├── About/
│   │   │   ├── About.jsx
│   │   │   └── About.module.scss
│   │   ├── Contact/
│   │   │   ├── Contact.jsx
│   │   │   └── Contact.module.scss
│   │   ├── Home/
│   │   │   ├── Home.jsx
│   │   │   └── Home.module.scss
│   │   ├── Projects/
│   │   │   ├── Projects.jsx
│   │   │   └── Projects.module.scss
│   │   └── Skills/
│   │       ├── Skills.jsx
│   │       └── Skills.module.scss
│   ├── layouts/            # Page layouts like the main navigation and footer
│   │   ├── MainLayout.jsx
│   │   ├── MainLayout.module.scss
│   │   ├── Navigation/
│   │   │   ├── Navigation.jsx
│   │   │   └── Navigation.module.scss
│   │   └── Footer/
│   │       ├── Footer.jsx
│   │       └── Footer.module.scss
│   ├── services/           # Data-fetching and business logic (for a real API)
│   │   └── api.js
│   ├── styles/             # Global styles, variables, and resets
│   │   ├── _abstracts.scss   # Variables, mixins, functions
│   │   ├── _normalize.scss
│   │   ├── _resets.scss
│   │   └── global.scss
│   ├── App.jsx             # Main application component for routing
│   └── index.js            # Entry file to render the app
├── .gitignore
├── package.json
├── jsconfig.json           # For absolute imports and editor tooling
├── README.md               # Project documentation
└── [optional] craco.config.js # Only if you opted for full import aliases

### Required SVGs
2025 09 09
    |   ├── typescript.svg
    │   ├── javascript.svg
    │   ├── react.svg
    │   ├── nextjs.svg
    │   ├── html5.svg
    │   ├── css3.svg
    │   ├── redux.svg
    │   ├── sass.svg
    │   ├── tailwind.svg
    │   ├── css-modules.svg
    │   ├── bootstrap.svg
    │   ├── git.svg
    │   ├── github.svg
    │   ├── vite.svg
    │   ├── webpack.svg
    │   ├── babel.svg
    │   ├── figma.svg
    │   ├── emmet.svg
    │   ├── react-router.svg
    │   ├── responsive-design.svg
    │   ├── api.svg
    │   ├── accessibility.svg
    │   └── cross-browser.svg