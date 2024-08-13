'use client'

const translates = {
    'uk': 'Блоги',
    'en': 'Blogs'
}

import ToggleLanguage from "../ui/ToggleLanguage";
import { useLanguage } from "./LanguageProvider";

export const Header = () => {
    const { language, setLanguage } = useLanguage()!
    let languageValid = language as 'uk' | 'en'
    console.log(language)
    return <header>
        <ToggleLanguage />
        {translates[languageValid]}
    </header>
};