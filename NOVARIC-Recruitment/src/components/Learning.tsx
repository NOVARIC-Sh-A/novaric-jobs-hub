
import React from 'react';
import type { Course } from '../types';
import { Icon } from './common/Icon';

const courses: Course[] = [
    {
        title: 'Modele të Avancuara në React',
        provider: 'Akademia NOVARIC',
        description: 'Zotëroni konceptet e avancuara të React duke përfshirë hooks, context dhe optimizimin e performancës për aplikacione të nivelit të lartë.'
    },
    {
        title: 'AI për Drejtues Biznesi',
        provider: 'Instituti EuroTech',
        description: 'Kuptoni se si të shfrytëzoni AI dhe machine learning për të nxitur rritjen e biznesit dhe inovacionin, pa pasur nevojë për përvojë kodimi.'
    },
    {
        title: 'Bazat e Cloud Native & DevOps',
        provider: 'Këshilli i Aftësive të BE',
        description: 'Mësoni parimet e DevOps dhe mjetet e nevojshme për të ndërtuar, vendosur dhe menaxhuar aplikacione cloud-native.'
    },
    {
        title: 'Komunikim Efektiv & Punë në Ekip',
        provider: 'Akademia NOVARIC',
        description: 'Zhvilloni aftësi të buta thelbësore për sukses në vendin e punës, duke përfshirë komunikimin, bashkëpunimin dhe zgjidhjen e konflikteve.'
    }
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => (
    <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-200">
        <h3 className="text-xl font-bold text-novaric-red">{course.title}</h3>
        <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 mt-1">
            Ofruesi: {
                course.provider === 'Akademia NOVARIC'
                    ? <>Akademia NOVARIC<sup>®</sup></>
                    : course.provider
            }
        </p>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{course.description}</p>
        <button className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-novaric-red hover:bg-novaric-red/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-novaric-red">
            Mëso më shumë
        </button>
    </div>
);


export const Learning: React.FC = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
                <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" /><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" /></svg>} className="text-novaric-red text-5xl mx-auto mb-4" />
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Akademia NOVARIC<sup>®</sup></h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Mësim gjatë gjithë jetës dhe zhvillim i aftësive në majë të gishtave.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                {courses.map((course, index) => (
                    <CourseCard key={index} course={course} />
                ))}
            </div>
        </div>
    );
}