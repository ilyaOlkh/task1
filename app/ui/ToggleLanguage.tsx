'use client'

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { useLanguage } from '../components/LanguageProvider';

const ToggleLanguage = () => {
    const langContext = useLanguage()
    if (langContext) {

        const { language, setLanguage } = langContext
        const handleLanguage = (
            event: React.MouseEvent<HTMLElement>,
            newLanguage: string,
        ) => {

            setLanguage(newLanguage);
        };

        return <>
            < ToggleButtonGroup
                value={language}
                exclusive
                onChange={handleLanguage}
                aria-label="language"
            >
                <ToggleButton value="uk" aria-label="language uk">
                    uk
                </ToggleButton>
                <ToggleButton value="en" aria-label="language en">
                    en
                </ToggleButton>
            </ToggleButtonGroup >
        </>
    } else {
        console.log('немає контексту мови')
    }
}

export default ToggleLanguage