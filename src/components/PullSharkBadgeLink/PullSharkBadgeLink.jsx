// src/components/PullSharkBadgeLink/PullSharkBadgeLink.jsx
import React from 'react';
import PropTypes from 'prop-types';
import ReactIcon from 'components/ReactIcon/ReactIcon';
import styles from './PullSharkBadgeLink.module.scss';
import { aboutData } from 'data/about';

const PullSharkBadgeLink = ({ className }) => {
    const href = aboutData.gitHubAchievementsUrl;
    const ariaLabel = "View Bonaventure's GitHub Pull Shark Badge achievement";
    const title = "Click to view the GitHub achievement badge";

    // Merge the internal and external class names
    const mergedClassName = [styles.pullSharkLink, className].filter(Boolean).join(' ');

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            title={title}
            className={mergedClassName}
        >
            Pull Shark Badge
            <ReactIcon
                prefix="fa"
                name="FaMedal"
                className={styles.pullSharkLink__icon}
            />
        </a>
    );
};

PullSharkBadgeLink.propTypes = {
    className: PropTypes.string, // Optional className prop
};

PullSharkBadgeLink.defaultProps = {
    className: '',
};

export default PullSharkBadgeLink;
