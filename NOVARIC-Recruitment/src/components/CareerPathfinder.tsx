
import React, { useState, useCallback } from 'react';
import { getCareerPath } from '../services/geminiService';
import type { CareerPath, CareerPathStep } from '../types';
import { Spinner } from './common/Spinner';
import { Icon } from './common/Icon';

const PathStep: React.FC<{ step: CareerPathStep, isLast: boolean }> = ({ step, isLast }) => (
    <div className="relative pl-8">
        {!isLast && <div className="absolute left-4 top-4 -ml-px mt-1 w-0.5 h-full bg-slate-300 dark:bg-slate-600"></div>}
        <div className="flex items-center">
            <div className="z-10 bg-novaric-red rounded-full h-8 w-8 flex items-center justify-center text-white font-bold">{step.step}</div>
            <h3 className="ml-4 text-xl font-bold text-slate-800 dark:text-white">{step.title}</h3>
        </div>
        <div className="ml-12 mt-2 pb-8">
            <p className="text-slate-600 dark:text-slate-300">{step.description}</p>
            <div className="mt-4">
                <h4 className="font-semibold text-slate-700 dark:text-slate-200">Aftësi për t'u fituar:</h4>
                <div className="mt-2 flex flex-wrap gap-2">
                    {step.skillsToAcquire.map((skill, i) => (
                        <span key={i} className="bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-medium px-2.5 py-0.5 rounded-md">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    </div>
);


export const CareerPathfinder: React.FC = () => {
    const [currentRole, setCurrentRole] = useState('Junior Graphic Designer');
    const [targetRole, setTargetRole] = useState('Art Director');
    const [path, setPath] = useState<CareerPath | null>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setPath(null);

        try {
            const result = await getCareerPath(currentRole, targetRole);
            setPath(result);
        } catch (err) {
            setError('Dështoi në gjenerimin e planit të karrierës. Ju lutemi kontrolloni çelësin tuaj të API-t dhe provoni përsëri.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [currentRole, targetRole]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Mjeti i Planifikimit të Karrierës</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Harto udhëtimin tënd nga roli aktual në punën tënde të ëndrrave.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="currentRole" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Roli Aktual</label>
                        <input
                            type="text"
                            id="currentRole"
                            value={currentRole}
                            onChange={(e) => setCurrentRole(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-novaric-blue focus:border-novaric-blue"
                            placeholder="p.sh., Zhvillues Junior"
                        />
                    </div>
                    <div>
                        <label htmlFor="targetRole" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Roli i Synuar</label>
                        <input
                            type="text"
                            id="targetRole"
                            value={targetRole}
                            onChange={(e) => setTargetRole(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-novaric-blue focus:border-novaric-blue"
                            placeholder="p.sh., Inxhinier i Lartë DevOps"
                        />
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button type="submit" disabled={loading} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-novaric-red hover:bg-novaric-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-novaric-red disabled:bg-slate-400">
                        {loading ? 'Duke gjeneruar...' : 'Harto Karrierën Time'}
                    </button>
                </div>
            </form>

            {loading && <Spinner />}
            {error && <p className="text-center text-red-500 bg-red-100 dark:bg-red-900/50 p-3 rounded-md">{error}</p>}

            {!loading && path && (
                <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg">
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-6">Rruga Juaj drejt {targetRole}</h3>
                    <div>
                        {path.path.map((step, index) => (
                            <PathStep key={step.step} step={step} isLast={index === path.path.length - 1} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};