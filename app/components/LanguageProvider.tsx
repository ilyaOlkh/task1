'use client'

import { createContext, useState, useContext, Dispatch, SetStateAction } from 'react';

interface ILanguageContext {
    language: string
    setLanguage: Dispatch<SetStateAction<string>>
}


const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }: { children: JSX.Element }) => {
    const [language, setLanguage] = useState('en');
    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
