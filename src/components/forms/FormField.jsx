// src/components/forms/FormField.jsx
import React from 'react';
import styles from './FormField.module.scss';
import PropTypes from 'prop-types';

const FormField = ({
    label,
    name,
    type = 'text',
    value,
    onChange,
    error,
    hasInteracted,
    isTextarea = false,
    ...rest
}) => {
    const isInvalid = !!(error && (hasInteracted || value.trim()));
    const inputClass = isTextarea ? styles['form-field__textarea'] : styles['form-field__input'];

    return (
        <div className={styles['form-field__group']}>
            <label htmlFor={name} className={styles['form-field__label']}>
                {label} <span className={styles['form-field__required-symbol']} aria-hidden="true">*</span>
            </label>
            {isTextarea ? (
                <textarea
                    id={name}
                    name={name}
                    className={`${inputClass} ${isInvalid ? styles['form-field__textarea--invalid'] : ''}`}
                    value={value}
                    onChange={onChange}
                    aria-required="true"
                    aria-invalid={isInvalid}
                    aria-describedby={`${name}-error`}
                    rows="5"
                    {...rest}
                ></textarea>
            ) : (
                <input
                    type={type}
                    id={name}
                    name={name}
                    className={`${inputClass} ${isInvalid ? styles['form-field__input--invalid'] : ''}`}
                    value={value}
                    onChange={onChange}
                    aria-required="true"
                    aria-invalid={isInvalid}
                    aria-describedby={`${name}-error`}
                    {...rest}
                />
            )}
            {isInvalid && (
                <p id={`${name}-error`} className={styles['form-field__error-message']}>
                    {error}
                </p>
            )}
        </div>
    );
};

FormField.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    hasInteracted: PropTypes.bool,
    isTextarea: PropTypes.bool,
};

export default FormField;
