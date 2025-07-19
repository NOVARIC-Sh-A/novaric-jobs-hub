import React from 'react';
import { Logo } from './common/Logo';

const ColorSwatch: React.FC<{ color: string; name: string; hex: string }> = ({ color, name, hex }) => (
    <div>
        <div className={`w-full h-24 rounded-lg shadow-inner ${color}`}></div>
        <div className="mt-2">
            <p className="font-bold text-slate-800 dark:text-white">{name}</p>
            <p className="text-sm text-slate-500 dark:text-slate-400">{hex}</p>
        </div>
    </div>
);

export const BrandGuidelines: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Udhëzimet e Markës</h2>
                <p className="mt-2 text-slate-600 dark:text-slate-400">Asetet tona zyrtare të markës dhe udhëzimet për identitet të qëndrueshëm.</p>
            </div>

            <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-lg space-y-12">

                {/* Logo Section */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b pb-2">Logoja</h3>
                    <div className="flex flex-col md:flex-row items-center gap-8">
                        <div className="p-8 bg-slate-100 dark:bg-slate-700 rounded-lg">
                            <Logo size="xl" />
                        </div>
                        <div className='flex-1'>
                            <p className="text-slate-600 dark:text-slate-300">Logoja e NOVARIC<sup>®</sup> është identifikuesi kryesor për markën tonë. Ajo duhet të përdoret në mënyrë të qëndrueshme në të gjitha komunikimet.</p>
                            <ul className="list-disc list-inside mt-4 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                                <li>Mos ndryshoni ngjyrat, proporcionet ose orientimin.</li>
                                <li>Siguroni që ka hapësirë të mjaftueshme rreth logos.</li>
                                <li>Përdorni versionin SVG për qartësi në të gjitha platformat digjitale.</li>
                                <li>Logoja përfshin simbolin e markës së regjistruar (<sup>®</sup>) si standard.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Colors Section */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b pb-2">Paleta e Ngjyrave</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ColorSwatch color="bg-novaric-red" name="E Kuqe Novaric (Primare)" hex="#8B2526" />
                        <ColorSwatch color="bg-novaric-blue" name="Blu Novaric (Theksuese)" hex="#00AEEF" />
                    </div>
                </div>

                {/* Typography Section */}
                <div>
                    <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-4 border-b pb-2">Tipografia</h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">Aplikacioni ynë përdor fontin standard pa-serif të sistemit për lexueshmëri dhe ndjesi amtare në të gjitha pajisjet.</p>
                    <div>
                        <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white">Titulli 1 (shumë i trashë)</h1>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">Titulli 2 (i trashë)</h2>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mt-2">Titulli 3 (i trashë)</h3>
                        <p className="text-base text-slate-600 dark:text-slate-300 mt-4">Ky është teksti standard i trupit. Përdoret për paragrafë dhe përshkrime më të gjata për të siguruar lexueshmëri maksimale për përdoruesit tanë.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};