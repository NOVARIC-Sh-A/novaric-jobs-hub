
import React, { useState, useCallback } from 'react';
import { getJobRecommendations } from '../services/geminiService';
import type { Job } from '../types';
import { Spinner } from './common/Spinner';
import { Icon } from './common/Icon';

const JobCard: React.FC<{ job: Job }> = ({ job }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-start">
            <div>
                <h3 className="text-xl font-bold text-novaric-red">{job.title}</h3>
                <p className="text-md font-semibold text-slate-700 dark:text-slate-300">{job.company}</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">{job.location}</p>
            </div>
            <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg>} className="text-slate-400" />
        </div>
        <p className="mt-4 text-slate-600 dark:text-slate-300">{job.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
            {job.skillsRequired.map((skill, index) => (
                <span key={index} className="bg-novaric-blue/10 dark:bg-novaric-blue/20 text-novaric-blue dark:text-novaric-blue text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {skill}
                </span>
            ))}
        </div>
    </div>
);

export const JobRecommendations: React.FC = () => {
    const [role, setRole] = useState('Frontend Developer');
    const [skills, setSkills] = useState('React, TypeScript, Tailwind CSS');
    const [jobs, setJobs] = useState<Job[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(null);
        setJobs([]);

        try {
            const result = await getJobRecommendations(role, skills);
            setJobs(result);
        } catch (err) {
            setError('Dështoi në marrjen e rekomandimeve të punës. Ju lutemi kontrolloni çelësin tuaj të API-t dhe provoni përsëri.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [role, skills]);

    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Përputhje Inteligjente e Punës</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Futni rolin dhe aftësitë tuaja të dëshiruara për të gjetur mundësinë tuaj të ardhshme.</p>
            </div>

            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-lg mb-8">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Roli Juaj i Dëshiruar</label>
                        <input
                            type="text"
                            id="role"
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-novaric-blue focus:border-novaric-blue"
                            placeholder="p.sh., Inxhinier Softueri"
                        />
                    </div>
                    <div>
                        <label htmlFor="skills" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Aftësitë Tuaja Kryesore</label>
                        <input
                            type="text"
                            id="skills"
                            value={skills}
                            onChange={(e) => setSkills(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-white dark:bg-slate-700 border border-slate-300 dark:border-slate-600 rounded-md shadow-sm focus:outline-none focus:ring-novaric-blue focus:border-novaric-blue"
                            placeholder="p.sh., Python, SQL, AWS"
                        />
                    </div>
                </div>
                <div className="mt-6 text-center">
                    <button type="submit" disabled={loading} className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-novaric-red hover:bg-novaric-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-novaric-red disabled:bg-slate-400">
                        {loading ? 'Duke kërkuar...' : 'Gjej Punë'}
                    </button>
                </div>
            </form>

            {loading && <Spinner />}
            {error && <p className="text-center text-red-500 bg-red-100 dark:bg-red-900/50 p-3 rounded-md">{error}</p>}

            {!loading && jobs.length > 0 && (
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200">Përputhjet Tuaja Kryesore</h3>
                    {jobs.map((job, index) => (
                        <JobCard key={index} job={job} />
                    ))}
                </div>
            )}
        </div>
    );
};