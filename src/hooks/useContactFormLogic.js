// src/hooks/useContactFormLogic.js
import { useState, useEffect } from 'react';
import { useForm } from '@formspree/react';

// Email format validation helper function
const validateEmailFormat = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

// Custom hook to encapsulate all form logic
export const useContactFormLogic = () => {
    const [state, handleSubmit] = useForm(process.env.FORMSPREE_FORM_ID || 'xzzaweop');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState({});
    const [emailError, setEmailError] = useState('');
    const [hasInteracted, setHasInteracted] = useState(false);
    const [canSubmit, setCanSubmit] = useState(false);
    
    // New state to prevent toast from showing on subsequent renders
    const [hasShownToast, setHasShownToast] = useState(false);

    // Validation function for all fields, checks against requirements
    const validateAllFields = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
        if (!formData.message.trim()) newErrors.message = 'Message is required.';
        // Update errors state for potential UI feedback
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handles real-time validation for email and updates form data
    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        if (value.trim() && !validateEmailFormat(value)) {
            setEmailError('Invalid email address format.');
        } else {
            setEmailError('');
        }
    };

    // Handles updates for other form inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Handles form submission
    const onSubmit = async (e) => {
        e.preventDefault();
        setHasInteracted(true);
        const isValid = validateAllFields() && !emailError;

        if (isValid && canSubmit) {
            await handleSubmit(e);
        }
    };

    // Effect to manage the canSubmit state and handle success logic
    useEffect(() => {
        const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');
        setCanSubmit(allFieldsFilled && !emailError);

        // If submission was successful and the toast hasn't been shown, mark it
        if (state.succeeded && !hasShownToast) {
          setHasShownToast(true);
        }
    }, [formData, emailError, state.succeeded, hasShownToast]);

    return {
        state,
        formData,
        errors,
        emailError,
        hasInteracted,
        canSubmit,
        handleEmailChange,
        handleInputChange,
        onSubmit,
        hasShownToast,
    };
};
