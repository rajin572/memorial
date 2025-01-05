"use client";

import React, { createContext, useState, useEffect, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [state, setState] = useState({ language: 'en' });

    // Load the language from localStorage on mount
    useEffect(() => {
        const savedLanguage = localStorage.getItem('language') || 'en';
        setState({ language: savedLanguage });
    }, []);

    // Update localStorage whenever the language changes
    const setStateLanguage = (language) => {
        setState({ language });
        localStorage.setItem('language', language);
    };

    return (
        <LanguageContext.Provider value={{ state, setStateLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};



export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};