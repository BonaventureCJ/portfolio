import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

/**
 * A versatile and reusable Button component.
 *
 * @param {object} props
 * @param {'primary' | 'secondary' | 'tertiary'} props.variant - Defines the button's style variant.
 * @param {'button' | 'submit' | 'reset'} [props.type] - The native HTML button type.
 * @param {'small' | 'medium' | 'large'} [props.size] - Defines the button's size.
 * @param {boolean} [props.disabled] - Whether the button is disabled.
 * @param {Function} [props.onClick] - Click handler function.
 * @param {React.ReactNode} props.children - The content inside the button.
 * @param {string} [props.className] - Additional CSS classes.
 * @param {object} [props.style] - Inline styles for specific overrides.
 * @param {string} [props.ariaLabel] - ARIA label for accessibility.
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
    ...otherProps // Captures any other standard HTML button props (e.g., 'data-testid')
}) => {

    // Construct the final CSS class string dynamically using styles object properties
    const classes = [
        styles.button, // Base class
        styles[`button--${variant}`], // Variant class (using bracket notation for dynamic access)
        styles[`button--${size}`],     // Size class
        className, // Allows user to pass external classes if needed
    ].filter(Boolean).join(' '); // Filter removes any undefined/null values

    return (
        <button
            type={type}
            // Use the dynamically constructed local classes string
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
};

export default Button;
