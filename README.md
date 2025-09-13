# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


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