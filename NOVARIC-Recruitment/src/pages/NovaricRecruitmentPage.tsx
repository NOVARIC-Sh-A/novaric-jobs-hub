import React from 'react';
import { View, PageContext } from '../../types';
import { Icon } from '../common/Icon';
import { Logo } from '../common/Logo';

interface NovaricRecruitmentPageProps {
    setView: (view: View, context?: PageContext | null) => void;
}

const serviceItems = [
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="7" rx="2" ry="2" /><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" /></svg>,
        title: 'Gjetja e Talenteve',
        description: 'Ne përdorim strategji të avancuara për të gjetur dhe tërhequr kandidatët më të mirë pasivë dhe aktivë në treg.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="m21.3 21.3-3.3-3.3" /><path d="M18 18a3 3 0 1 0-4.24-4.24 3 3 0 0 0 4.24 4.24Z" /></svg>,
        title: 'Kërkimi Ekzekutiv',
        description: 'Shërbimi ynë konfidencial i kërkimit është i specializuar në identifikimin dhe vendosjen e liderëve të nivelit të lartë.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>,
        title: 'Rekrutimi Teknik',
        description: 'Ekspertiza jonë e thellë në industri na lejon të gjejmë talentë të specializuar në fusha si IT, inxhinieri dhe më shumë.'
    },
    {
        icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20Z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
        title: 'Rekrutim Ndërkombëtar',
        description: 'Ne lehtësojmë procesin e punësimit të talenteve nga e gjithë Evropa, duke menaxhuar logjistikën dhe pajtueshmërinë.'
    }
];

const ServiceCard: React.FC<{ item: typeof serviceItems[0] }> = ({ item }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <Icon icon={item.icon} className="text-novaric-blue text-4xl mb-4" />
        <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
        <p className="text-slate-600 dark:text-slate-300">{item.description}</p>
    </div>
)

export const NovaricRecruitmentPage: React.FC<NovaricRecruitmentPageProps> = ({ setView }) => {
    return (
        <div className="animate-fade-in">
            {/* Branded Hero Section */}
            <div className="bg-novaric-red text-white rounded-lg shadow-xl -mx-4 -mt-8 mb-12">
                <div className="max-w-6xl mx-auto px-4 py-16 text-center flex flex-col items-center">
                    <div className="bg-white rounded-full p-3 shadow-lg mb-6">
                        <Logo size="xl" />
                    </div>
                    <p className="text-2xl font-light tracking-wide">
                        Bringing Human to Industry<sup>&trade;</sup>
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto">
                <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg mb-12">
                    <p className="text-lg text-center text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                        NOVARIC<sup>®</sup> Rekrutimi është shtylla themelore e biznesit tonë, e përkushtuar për të lidhur kompanitë me talentin e jashtëzakonshëm që u nevojitet për të pasur sukses. Ne besojmë se njerëzit e duhur janë katalizatori për rritje dhe inovacion. Ekipi ynë i ekspertëve punon ngushtë me klientët për të kuptuar nevojat e tyre unike dhe për të ofruar zgjidhje rekrutimi të personalizuara që japin rezultate.
                    </p>
                </div>

                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-center text-slate-900 dark:text-white mb-8">Shërbimet Tona Kryesore</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {serviceItems.map(item => <ServiceCard key={item.title} item={item} />)}
                    </div>
                </div>

                <div className="text-center bg-novaric-red/10 dark:bg-novaric-red/20 p-8 rounded-lg">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Gati për të Gjetur Talentin Tuaj të Ardhshëm?</h3>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-xl mx-auto">Le të diskutojmë se si NOVARIC<sup>®</sup> mund të ndihmojë organizatën tuaj të rritet. Kontaktoni specialistët tanë të rekrutimit sot.</p>
                    <button
                        onClick={() => setView(View.CONTACT)}
                        className="mt-6 inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-novaric-red hover:bg-novaric-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-novaric-red"
                    >
                        Kontaktoni Specialistët Tanë
                    </button>
                </div>
            </div>
        </div>
    );
};