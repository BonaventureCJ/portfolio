// Import icons from a library like react-icons
// Ensure you have react-icons installed (npm install react-icons)
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// Import your locally-scoped SCSS module for styling
import styles from './Footer.module.scss';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        {/* Link to your GitHub profile */}
        <a 
          href="https://github.com/YourUsername" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaGithub className={styles.icon} />
        </a>
        
        {/* Link to your LinkedIn profile */}
        <a 
          href="https://linkedin.com/in/YourUsername" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaLinkedin className={styles.icon} />
        </a>
        
        {/* Link to your Twitter profile */}
        <a 
          href="https://twitter.com/YourUsername" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FaTwitter className={styles.icon} />
        </a>
      </div>

      <p className={styles.copyright}>
        &copy; {currentYear} Bonaventure C.J. Ugwu. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
