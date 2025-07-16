import React, { useState } from 'react';

const ThemeToggle: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
        if (!isDarkMode) {
            document.body.classList.add('dark-mode');
            document.body.style.setProperty('--bg', 'linear-gradient(135deg, #18181b 0%, #312e81 100%)');
            document.body.style.setProperty('--card-bg', '#23272f');
            document.body.style.setProperty('--color', '#fff');
            document.body.style.setProperty('--accent', '#818cf8');
            document.body.style.setProperty('--box-shadow', '0 4px 24px rgba(129,140,248,0.12)');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.style.setProperty('--bg', 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)');
            document.body.style.setProperty('--card-bg', '#fff');
            document.body.style.setProperty('--color', '#222');
            document.body.style.setProperty('--accent', '#6366f1');
            document.body.style.setProperty('--box-shadow', '0 4px 24px rgba(99,102,241,0.08)');
        }
    };

    return (
        <div className="theme-toggle">
            <button onClick={toggleTheme} style={{fontWeight:'600',fontSize:'1rem'}}>
                {isDarkMode ? '🌞 Light Mode' : '🌚 Dark Mode'}
            </button>
        </div>
    );
};

export default ThemeToggle;