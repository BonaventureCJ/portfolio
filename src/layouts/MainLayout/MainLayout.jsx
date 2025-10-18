//src/layouts/MainLayout/MainLayout.jsx
import { Outlet, ScrollRestoration } from 'react-router-dom';

// Import your reusable layout components
import MainNavigation from 'layouts/Navigation/MainNavigation';
import Footer from 'layouts/Footer/Footer';

// Import the SCSS module for styling this specific layout
import styles from './MainLayout.module.scss';

function MainLayout() {
  return (
    <div className={styles.mainLayout}>
      <MainNavigation />
      
      {/* 
        The <Outlet /> component renders the content of the child route.
        For example, when on the '/about' page, the <About /> component
        will be rendered here.
      */}
      <main className={styles.mainContent}>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Footer />
    </div>
  );
}

export default MainLayout;
