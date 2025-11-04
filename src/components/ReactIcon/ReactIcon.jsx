// src/components/ReactIcon/ReactIcon.jsx
import React from 'react';
// Import each icon library as a namespace
import * as FaIcons from 'react-icons/fa';
import * as MdIcons from 'react-icons/md';
import * as BsIcons from 'react-icons/bs';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi'; // Example: Game Icons
import * as HiIcons from 'react-icons/hi2'; // Example: Heroicons v2
import * as SiIcons from 'react-icons/si'; // Example: Simple Icons
import * as LiaIcons from 'react-icons/lia'; // Example: Line Awesome
import styles from './ReactIcon.module.scss';

// Map icon library prefixes to their respective imports
const iconLibraries = {
    fa: FaIcons,
    md: MdIcons,
    bs: BsIcons,
    ai: AiIcons,
    gi: GiIcons,
    hi: HiIcons,
    si: SiIcons,
    lia: LiaIcons,
};

/**
 * A central component to render icons from various libraries consistently.
 * @param {string} name - The name of the icon (e.g., "FaArrowRight").
 * @param {string} prefix - The prefix for the icon library (e.g., "fa", "md", "bs").
 * @param {string} [className] - Optional className to apply external styles.
 * @param {object} [props] - Any additional SVG properties to pass to the icon.
 */
const ReactIcon = ({ name, prefix, className, ...props }) => {
    if (!prefix || !name) {
        console.warn(`Icon component is missing required 'prefix' or 'name' prop.`);
        return null;
    }

    const library = iconLibraries[prefix.toLowerCase()];

    if (!library) {
        console.warn(`Icon library with prefix "${prefix}" not found.`);
        return null;
    }

    const IconComponent = library[name];

    if (!IconComponent) {
        console.warn(`Icon "${name}" not found in library "${prefix}".`);
        return null;
    }

    const iconClassNames = `${styles['react-icon']} ${className || ''}`;

    return <IconComponent className={iconClassNames} {...props} />;
};

export default ReactIcon;
