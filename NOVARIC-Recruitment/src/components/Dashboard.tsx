import React from 'react';
import { View } from '../types';
import { Icon } from './common/Icon';
import type { Insight } from '../types';

interface DashboardProps {
    setView: (view: View) => void;
}

interface FeatureCardProps {
    title: React.ReactNode;
    description: string;
    icon: React.ReactNode;
    view: View;
    onClick: (view: View) => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, view, onClick }) => (
    <div
        className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 h-full flex flex-col"
        onClick={() => onClick(view)}
    >
        <div className="flex items-center space-x-4 mb-3">
            <Icon icon={icon} className="text-novaric-red text-3xl" />
            <h3 className="text-xl font-bold text-slate-800 dark:text-white">{title}</h3>
        </div>
        <p className="text-slate-600 dark:text-slate-300 flex-grow">{description}</p>
    </div>
);

const InsightCard: React.FC<{ insight: Insight }> = ({ insight }) => (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
        <img src={insight.image} alt={insight.title} className="w-full h-40 object-cover" />
        <div className="p-5">
            <p className="text-sm text-novaric-blue font-semibold">{insight.category}</p>
            <h4 className="font-bold text-lg mt-1 text-slate-800 dark:text-white">{insight.title}</h4>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{insight.summary}</p>
            <a href={insight.link} className="text-sm font-semibold text-novaric-red mt-4 inline-block">Lexo më shumë &rarr;</a>
        </div>
    </div>
);


const featureIcons = {
    jobs: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>,
    path: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z" /><path d="M12 12.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9zM19 19l-4-4" /></svg>,
    skills: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v18" /><path d="m19 12-7 7-7-7" /></svg>,
    learning: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>,
    staffing: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 19a6 6 0 0 0-12 0" /><circle cx="8" cy="10" r="4" /><path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8" /></svg>,
    community: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
};

const insights: Insight[] = [
    {
        title: "E Ardhmja e Punës Hibride në Shqipëri",
        category: "Trendet e Punës",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
        summary: "Një analizë e thellë se si kompanitë shqiptare po përshtaten me modelet e reja të punës dhe çfarë do të thotë kjo për talentin.",
        link: "#"
    },
    {
        title: "Si të Tërhiqni Talentet më të Mirë të Teknologjisë",
        category: "Rekrutim",
        image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop",
        summary: "Strategjitë kryesore që punëdhënësit duhet të përdorin për të dalë në pah në një treg konkurrues talentesh teknologjike.",
        link: "#"
    },
    {
        title: "Rëndësia e Aftësive të Buta në Epokën Dixhitale",
        category: "Zhvillim Profesional",
        image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2070&auto=format&fit=crop",
        summary: "Pse aftësitë si komunikimi dhe inteligjenca emocionale janë më të vlefshme se kurrë në vendin e punës modern.",
        link: "#"
    }
];

export const Dashboard: React.FC<DashboardProps> = ({ setView }) => {
    return (
        <div className="animate-fade-in -mt-8 -mx-4">
            <div className="relative bg-slate-800 text-white pt-24 pb-16 px-4">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop')" }}
                ></div>
                <div className="relative container mx-auto text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">Mirë se vini në Ekosistemin NOVARIC<sup>®</sup></h1>
                    <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">Qendra juaj e vetme për zhvillimin e karrierës, përmirësimin e aftësive dhe rrjetëzimin profesional.</p>
                </div>
            </div>

            <div className="container mx-auto px-4 py-12">
                <section id="services" className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-10">Mjetet dhe Shërbimet Tona</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <FeatureCard
                            title="Përputhja e Punës me AI"
                            description="Lëreni AI-në tonë t'ju lidhë me mundësi relevante bazuar në aftësitë, përvojën dhe aspiratat tuaja të karrierës."
                            icon={featureIcons.jobs}
                            view={View.JOBS}
                            onClick={setView}
                        />
                        <FeatureCard
                            title="Mjeti i Planifikimit të Karrierës"
                            description="Vizualizoni trajektoret e mundshme të karrierës dhe identifikoni aftësitë e nevojshme për të arritur qëllimet tuaja profesionale."
                            icon={featureIcons.path}
                            view={View.CAREER_PATH}
                            onClick={setView}
                        />
                        <FeatureCard
                            title={<>Akademia NOVARIC<sup>®</sup></>}
                            description="Qasuni në udhëtime të personalizuara mësimore, module mikromësimi dhe certifikime për të adresuar boshllëqet e aftësive."
                            icon={featureIcons.learning}
                            view={View.LEARNING}
                            onClick={setView}
                        />
                        <FeatureCard
                            title="Analiza e Hendekut të Aftësive"
                            description="Identifikoni boshllëqet e aftësive brenda ekipit tuaj dhe merrni rekomandime të drejtuara nga AI për trajnime ose punësime."
                            icon={featureIcons.skills}
                            view={View.SKILLS_GAP}
                            onClick={setView}
                        />
                        <FeatureCard
                            title="Zgjidhje Stafi për Biznese"
                            description="Ofrim zgjidhjesh rekrutimi të personalizuara për të gjetur talentin e duhur për ekipin tuaj, nga pozicionet teknike te ato ekzekutive."
                            icon={featureIcons.staffing}
                            view={View.RECRUITMENT}
                            onClick={setView}
                        />
                        <FeatureCard
                            title="Qendra e Komunitetit"
                            description="Lidhuni, ndani njohuri dhe rrituni me profesionistë të tjerë në fushën tuaj."
                            icon={featureIcons.community}
                            view={View.COMMUNITY}
                            onClick={setView}
                        />
                    </div>
                </section>

                <section id="insights">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">Analizat e Fundit</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insights.map(insight => (
                            <InsightCard key={insight.title} insight={insight} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};