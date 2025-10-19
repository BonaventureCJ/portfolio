// src/components/Buttons/Button.jsx (Refactored)
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // We need to import Link from react-router-dom to handle internal navigation
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
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {string} [props.to] - The destination for react-router-dom Link (internal navigation).
 * @param {string} [props.href] - The destination for a standard anchor tag (external navigation/downloads).
 * @param {string} [props.ariaLabel] - ARIA label for accessibility.
 * @param {object} [props.style] - Inline styles for specific overrides.
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
    to,   // Prop for react-router-dom Link
    href, // Prop for standard anchor tag
    ...otherProps
}) => {

    const classes = [
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        className,
    ].filter(Boolean).join(' ');

    // 1. If 'to' prop is provided, render as a react-router Link component
    if (to) {
        return (
            <Link
                to={to}
                className={classes}
                aria-label={ariaLabel}
                style={style}
                // 'type', 'disabled', and 'onClick' are not standard props for Link, 
                // so we only pass through generic otherProps like title, target, etc.
                {...otherProps} 
            >
                {children}
            </Link>
        );
    }

    // 2. If 'href' prop is provided, render as a standard HTML anchor <a> tag
    if (href) {
        return (
            <a
                href={href}
                className={classes}
                aria-label={ariaLabel}
                style={style}
                // Pass onClick here as anchor tags can use onClick handlers
                onClick={onClick} 
                // Pass through any standard anchor props like download, target, rel
                {...otherProps}
            >
                {children}
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
            {children}
        </button>
    );
};

Button.propTypes = {
    variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']).isRequired,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    style: PropTypes.object,
    ariaLabel: PropTypes.string,
    to: PropTypes.string, // Prop type for react-router link
    href: PropTypes.string, // Prop type for standard anchor
};

export default Button;
