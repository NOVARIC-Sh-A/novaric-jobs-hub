
import React from 'react';
import type { PageContext } from '../../types';

interface JobListingPageProps {
    context: PageContext | null;
}

export const JobListingPage: React.FC<JobListingPageProps> = ({ context }) => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 border-b pb-4">
                    {context?.title || 'Lista Punësh'}
                </h1>
                <div className="text-center py-12">
                    <svg className="mx-auto h-12 w-12 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path vectorEffect="non-scaling-stroke" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-slate-900 dark:text-white">Nuk u gjetën punë</h3>
                    <p className="mt-1 text-sm text-slate-500">Aktualisht nuk ka lista punësh për këtë kategori.</p>
                </div>
            </div>
        </div>
    );
};