
import React from 'react';
import type { PageContext } from '../../types';

export interface PageContent {
    title: string;
    content: string;
}

interface StaticPageProps {
    context: PageContext | null;
}

export const StaticPage: React.FC<StaticPageProps> = ({ context }) => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b pb-4">
                    {context?.title || 'Faqe'}
                </h1>
                <div className="prose prose-slate dark:prose-invert max-w-none">
                    <p>{context?.content || 'Nuk ka përmbajtje të disponueshme për këtë faqe.'}</p>
                </div>
            </div>
        </div>
    );
};