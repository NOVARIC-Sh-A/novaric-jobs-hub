
import React from 'react';
import type { CommunityPost } from '../types';
import { Icon } from './common/Icon';

const posts: CommunityPost[] = [
    {
        author: 'Blerina Hoxha',
        avatar: 'https://i.pravatar.cc/40?u=blerina_hoxha',
        title: 'Këshilla për intervistë për një rol Senior Frontend?',
        content: 'Kam një intervistë finale javën tjetër për një pozicion Senior Frontend. Ndonjë këshillë se çfarë të pres për pjesën e dizajnit të sistemit? Ata përmendën se do të përfshinte shkallëzimin e një aplikacioni chat në kohë reale.',
        timestamp: '2 orë më parë'
    },
    {
        author: 'Arben Kola',
        avatar: 'https://i.pravatar.cc/40?u=arben_kola',
        title: 'Prezantim: Faqja ime e re e portofolit',
        content: 'Përshëndetje të gjithëve! Sapo lansova portofolin tim të ri të ndërtuar me Astro dhe Tailwind CSS. Do të doja të merrja disa komente mbi dizajnin dhe performancën. Linku në komente!',
        timestamp: '1 ditë më parë'
    },
    {
        author: 'Drita Leka',
        avatar: 'https://i.pravatar.cc/40?u=drita_leka',
        title: 'A është Shqipëria një vend i mirë për karrierë në teknologji në 2024?',
        content: 'Unë jam një shkencëtar i të dhënave nga jashtë rajonit dhe po mendoj të zhvendosem në Tiranë. Si është skena e teknologjisë atje tani? A po punësojnë aktivisht kompanitë për role të të dhënave? Çdo informacion mbi pagën dhe balancën punë-jetë do të ishte i mrekullueshëm.',
        timestamp: '3 ditë më parë'
    }
];

const PostCard: React.FC<{ post: CommunityPost }> = ({ post }) => (
    <div className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md border border-slate-200 dark:border-slate-700">
        <div className="flex items-center mb-4">
            <img src={post.avatar} alt={post.author} className="w-10 h-10 rounded-full mr-4" />
            <div>
                <p className="font-semibold text-slate-800 dark:text-slate-200">{post.author}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{post.timestamp}</p>
            </div>
        </div>
        <h3 className="text-lg font-bold text-novaric-red mb-2">{post.title}</h3>
        <p className="text-slate-600 dark:text-slate-300 text-sm">{post.content}</p>
        <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-700 flex items-center space-x-4 text-slate-500 dark:text-slate-400">
            <button className="flex items-center space-x-1 hover:text-novaric-red transition-colors">
                <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 10v12" /><path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a2 2 0 0 1 1.79 1.11L15 5.88Z" /></svg>} />
                <span>Pëlqe</span>
            </button>
            <button className="flex items-center space-x-1 hover:text-novaric-red transition-colors">
                <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>} />
                <span>Komento</span>
            </button>
        </div>
    </div>
);

export const Community: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <Icon icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>} className="text-novaric-red text-5xl mx-auto mb-4" />
                <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">Qendra e Komunitetit</h2>
                <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">Lidhuni, bashkëpunoni dhe mbështesni njëri-tjetrin.</p>
            </div>

            <div className="space-y-6">
                {posts.map((post, index) => (
                    <PostCard key={index} post={post} />
                ))}
            </div>
        </div>
    )
};