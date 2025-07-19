import React from 'react';
import { View, PageContext } from '../types';

interface HeaderProps {
    currentView: View;
    setView: (view: View, context?: PageContext) => void;
}

const NavLink: React.FC<{
    view: View;
    currentView: View;
    setView: (view: View) => void;
    children: React.ReactNode;
}> = ({ view, currentView, setView, children }) => (
    <button
        onClick={() => setView(view)}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${currentView === view
                ? 'bg-novaric-red text-white'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
    >
        {children}
    </button>
);

export const Header: React.FC<HeaderProps> = ({ currentView, setView }) => {
    const navItems = [
        { view: View.DASHBOARD, label: 'Paneli' },
        { view: View.JOBS, label: 'Përputhjet e Punës' },
        { view: View.CAREER_PATH, label: 'Plani i Karrierës' },
        { view: View.SKILLS_GAP, label: 'Analizuesi i Aftësive' },
        { view: View.LEARNING, label: 'Akademia' },
        { view: View.COMMUNITY, label: 'Komuniteti' },
        { view: View.RECRUITMENT, label: 'Rekrutimi' },
    ];

    return (
        <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md sticky top-0 z-50">
            <nav className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    <button onClick={() => setView(View.DASHBOARD)} className="flex items-center group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-novaric-blue rounded-lg p-1">
                        <img
                            src="https://novaricstorage.blob.core.windows.net/media/NOVARIC-Recruitment-Logo_11052022_150x150-e1717752703951.webp"
                            alt="NOVARIC® Logo"
                            className="h-14 w-auto"
                        />
                        <div className="ml-3 text-left">
                            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-800 dark:text-slate-200">
                                NOVARIC<sup>®</sup>
                            </span>
                            <span className="hidden sm:block text-sm text-novaric-blue -mt-1">
                                Recruitment
                            </span>
                        </div>
                    </button>
                    <div className="hidden md:flex items-center space-x-2">
                        {navItems.map(item => (
                            <NavLink key={item.view} view={item.view} currentView={currentView} setView={setView}>
                                {item.label}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </nav>
        </header>
    );
};
