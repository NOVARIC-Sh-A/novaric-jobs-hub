
import React from 'react';
import { Icon } from '../common/Icon';

const contactInfo = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
        title: 'Zyra (Shqipëri)',
        content: 'Rruga Studenti, Nd 2, H 6, 4001, Shkodër, Shqipëri',
        contentLines: null
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>,
        title: 'Zyra (Maltë)',
        content: "LEVEL 4 ANGELICA COURT, TRIQ GIUSEPPE CALI', TA XBIEX, XBX 1425, Malta",
        contentLines: null
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>,
        title: 'Kontakt (Shqipëri)',
        content: null,
        contentLines: [
            'contact@novaric.al',
            '+355 (0) 222 55 999',
            '+355 (0) 692051474'
        ]
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
        title: 'Kontakt (Maltë)',
        content: null,
        contentLines: [
            'contact@novaric.co',
            '+356 27112206',
            '+355 (0) 692051475'
        ]
    }
];

export const ContactPage: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Na Kontaktoni</h1>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Do të donim të dëgjonim nga ju. Kontaktoni me ekipin tonë.</p>
            </div>
            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg">
                <div className="grid md:grid-cols-2 gap-8 text-center">
                    {contactInfo.map(item => (
                        <div key={item.title} className="flex flex-col items-center p-4">
                            <Icon icon={item.icon} className="text-novaric-red text-4xl mb-4" />
                            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{item.title}</h3>
                            <div className="mt-2 text-slate-600 dark:text-slate-300">
                                {item.content ? (
                                    <p>{item.content}</p>
                                ) : (
                                    item.contentLines?.map((line, index) => (
                                        <p key={index}>{line}</p>
                                    ))
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
