// src/components/Buttons/Button.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactIcon from '../ReactIcon/ReactIcon'; // Import the centralized ReactIcon component
import styles from './Button.module.scss';

/**
 * A versatile and reusable Button component that can render as a button, anchor tag, or react-router Link.
 *
 * @param {object} props
 * @param {'primary' | 'secondary' | 'tertiary'} props.variant - Defines the button's style variant.
 * @param {'button' | 'submit' | 'reset'} [props.type] - The native HTML button type (only for <button> element).
 * @param {'small' | 'medium' | 'large'} [props.size] - Defines the button's size.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {Function} [props.onClick] - Click handler function.
 * @param {React.ReactNode} props.children - The content inside the button (text or other nodes).
 * @param {string} [props.className] - Additional CSS classes.
 * @param {string} [props.to] - The destination for react-router-dom Link (internal navigation).
 * @param {string} [props.href] - The destination for a standard anchor tag (external navigation/downloads).
 * @param {string} [props.ariaLabel] - ARIA label for accessibility.
 * @param {object} [props.style] - Inline styles for specific overrides.
 * @param {object} [props.icon] - Optional icon object with 'name' and 'prefix'.
 * @param {'left' | 'right'} [props.iconPosition='left'] - Position of the icon relative to the text.
 */
const Button = ({
    variant,
    type = 'button',
    size = 'medium',
    disabled = false,
    onClick,
    children,
    className = '',
    style = {},
    ariaLabel,
    to,
    href,
    icon,
    iconPosition = 'left',
    ...otherProps
}) => {
    const classes = [
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        icon ? styles[`button--with-icon-${iconPosition}`] : '',
        className,
    ].filter(Boolean).join(' ');

    // Standard content structure for all button types
    const buttonContent = (
        <>
            {icon && iconPosition === 'left' && (
                <span className={styles['button__icon-wrapper']} aria-hidden="true">
                    <ReactIcon {...icon} />
                </span>
            )}
            {/* Conditionally render children if they exist */}
            {children && (
                <span className={styles['button__text']}>
                    {children}
                </span>
            )}
            {icon && iconPosition === 'right' && (
                <span className={styles['button__icon-wrapper']} aria-hidden="true">
                    <ReactIcon {...icon} />
                </span>
            )}
        </>
    );

    // 1. Render as a react-router Link component
    if (to) {
        return (
            <Link
                to={to}
                className={classes}
                aria-label={ariaLabel}
                style={style}
                {...otherProps}
            >
                {buttonContent}
            </Link>
        );
    }

    // 2. Render as a standard HTML anchor <a> tag
    if (href) {
        return (
            <a
                href={href}
                className={classes}
                aria-label={ariaLabel}
                style={style}
                onClick={onClick}
                {...otherProps}
            >
                {buttonContent}
            </a>
        );
    }

    // 3. Default: Render as a native HTML <button> element
    return (
        <button
            type={type}
            className={classes}
            disabled={disabled}
            onClick={onClick}
            style={style}
            aria-label={ariaLabel}
            {...otherProps}
        >
            {buttonContent}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node, // Children is now optional for icon-only buttons
    className: PropTypes.string,
    style: PropTypes.object,
    ariaLabel: PropTypes.string,
    to: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.shape({
        name: PropTypes.string.isRequired,
        prefix: PropTypes.string.isRequired,
    }),
    iconPosition: PropTypes.oneOf(['left', 'right']),
};

export default Button;
