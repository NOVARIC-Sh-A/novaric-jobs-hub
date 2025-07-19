import React from 'react';
import { View, PageContext } from '../types';
import { Icon } from './common/Icon';

const FooterLink: React.FC<{
    children: React.ReactNode;
    onClick: () => void;
    isBottomLink?: boolean;
}> = ({ children, onClick, isBottomLink = false }) => (
    <li>
        <button
            onClick={onClick}
            className={`transition-colors duration-200 text-left ${isBottomLink
                    ? 'text-slate-400 hover:text-white text-xs'
                    : 'text-slate-300 hover:text-white text-sm py-1'
                }`}
        >
            {children}
        </button>
    </li>
);

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h4 className="font-bold text-white text-base mb-4">{children}</h4>
);

const socialIcons = {
    linkedin: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>,
    youtube: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>,
};

const pageContents = {
    // Për Kandidatët
    allJobs: { view: View.ALL_JOBS, title: 'Të gjitha Punët', content: 'Shfletoni të gjitha mundësitë tona aktuale të punës në industri dhe sektorë të ndryshëm.' },
    careerAdvice: { view: View.CAREER_ADVICE, title: 'Këshilla Karriere', content: "Merrni këshilla nga ekspertët për të ndërtuar CV-në tuaj, për t'u përgatitur për intervista dhe për të avancuar në karrierën tuaj." },
    careersAtNovaric: { view: View.CAREERS_AT_NOVARIC, title: 'Karrierë në NOVARIC®', content: 'Bashkohuni me ekipin tonë dinamik dhe bëhuni pjesë e një kompanie që investon te njerëzit e saj. Shihni pozicionet tona të hapura.' },

    // Për Punëdhënësit
    staffingSolutions: { view: View.STAFFING_SOLUTIONS, title: 'Zgjidhje Stafi', content: 'Ne ofrojmë zgjidhje fleksibël dhe të personalizuara të personelit për të përmbushur nevojat e biznesit tuaj, nga punonjësit e përkohshëm deri te vendosjet e përhershme.' },
    workforceInsights: { view: View.WORKFORCE_INSIGHTS, title: 'Analiza të Fuqisë Punëtore', content: 'Përdorni të dhënat dhe analizat tona për të kuptuar tendencat e tregut të punës dhe për të marrë vendime strategjike për fuqinë tuaj punëtore.' },
    digitalServices: { view: View.DIGITAL_SERVICES, title: 'Shërbime Dixhitale', content: 'Platforma jonë dixhitale ofron mjete të fuqishme për menaxhimin e aplikantëve, analizën e aftësive dhe më shumë.' },

    // Rreth NOVARIC®
    companyProfile: { view: View.COMPANY_PROFILE, title: 'Profili i Kompanisë', content: 'Mësoni më shumë rreth misionit, vlerave dhe historisë së NOVARIC® dhe se si ne po formësojmë të ardhmen e punës.' },
    sustainability: { view: View.SUSTAINABILITY, title: 'Qëndrueshmëria', content: 'Ne jemi të përkushtuar ndaj praktikave të biznesit të qëndrueshëm që kanë një ndikim pozitiv në shoqëri dhe mjedis.' },
    press: { view: View.PRESS, title: 'Shtypi', content: 'Gjeni njoftimet tona më të fundit për shtyp, lajmet e kompanisë dhe burimet për mediat.' },
    investors: { view: View.INVESTORS, title: 'Investitorët', content: 'Informacion për investitorët, duke përfshirë raportet financiare, prezantimet dhe informacionin mbi aksionet.' },

    // Rreth kësaj faqeje
    disclaimer: { view: View.DISCLAIMER, title: 'Përgjegjësia', content: 'Informacioni në këtë faqe interneti ofrohet vetëm për qëllime informacioni të përgjithshëm. Ne nuk japim asnjë garanci për plotësinë ose saktësinë e tij.' },

    // Bottom links
    terms: { view: View.TERMS_OF_USE, title: 'Kushtet dhe Rregullat', content: "Mirë se vini në Ekosistemin e Karrierës NOVARIC®. Duke hyrë ose përdorur platformën tonë, ju pranoni të jeni të lidhur me këto Kushte dhe Rregulla." },
    accessibility: { view: View.ACCESSIBILITY, title: 'Aksesueshmëria', content: 'NOVARIC® është e përkushtuar të sigurojë që platforma jonë digjitale të jetë e aksesueshme për të gjithë përdoruesit, pavarësisht nga aftësia.' },
    cookies: { view: View.COOKIE_POLICY, title: 'Politika e Cookies', content: "Faqja jonë e internetit përdor cookies për të përmirësuar përvojën e përdoruesit. Kjo politikë shpjegon se çfarë janë cookies, si i përdorim ato dhe si mund t'i menaxhoni." },
    privacy: { view: View.PRIVACY_POLICY, title: 'Njoftimi i Privatësisë', content: 'NOVARIC® është e përkushtuar për të mbrojtur privatësinë tuaj. Ky njoftim përshkruan se si ne mbledhim, përdorim, zbulojmë dhe mbrojmë informacionin tuaj.' },
    misconduct: { view: View.MISCONDUCT_POLICY, title: 'Politika e Raportimit të Sjelljes së Pahijshme', content: 'Procedura jonë për raportimin e çdo sjelljeje të pahijshme ose shqetësimi etik. Ne e marrim seriozisht integritetin.' },
    sitemap: { view: View.SITEMAP, title: 'Harta e Faqes', content: 'Gjeni një përmbledhje të të gjitha faqeve në faqen tonë të internetit për navigim të lehtë.' },
    contact: { view: View.CONTACT, title: 'Na Kontaktoni', content: '' },
    brandGuidelines: { view: View.BRAND_GUIDELINES, title: 'Udhëzimet e Markës', content: '' },
};


export const Footer: React.FC<{ setView: (view: View, context: PageContext | null) => void; }> = ({ setView }) => {
    const handleLinkClick = (page: { view: View; title: string; content: string | React.ReactNode; }) => {
        setView(page.view, { title: page.title, content: page.content });
    };

    return (
        <footer className="bg-novaric-red text-slate-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
                    {/* Column 1: Për Kandidatët */}
                    <div>
                        <SectionTitle>Për Kandidatët</SectionTitle>
                        <ul className="space-y-1">
                            <FooterLink onClick={() => handleLinkClick(pageContents.allJobs)}>Të gjitha punët</FooterLink>
                            <FooterLink onClick={() => handleLinkClick(pageContents.careerAdvice)}>Këshilla karriere</FooterLink>
                            <FooterLink onClick={() => handleLinkClick(pageContents.careersAtNovaric)}>Karrierë në NOVARIC<sup>®</sup></FooterLink>
                        </ul>
                    </div>
                    {/* Column 2: Për Punëdhënësit */}
                    <div>
                        <SectionTitle>Për Punëdhënësit</SectionTitle>
                        <ul className="space-y-1">
                            <FooterLink onClick={() => handleLinkClick(pageContents.staffingSolutions)}>Zgjidhje stafi</FooterLink>
                            <FooterLink onClick={() => handleLinkClick(pageContents.workforceInsights)}>Analiza të fuqisë punëtore</FooterLink>
                            <FooterLink onClick={() => handleLinkClick(pageContents.digitalServices)}>Shërbime dixhitale</FooterLink>
                        </ul>
                    </div>
                    {/* Column 3: Investitorët */}
                    <div>
                        <SectionTitle>Investitorët</SectionTitle>
                        <ul className="space-y-1">
                            <FooterLink onClick={() => handleLinkClick(pageContents.investors)}>Marrëdhëniet me investitorët</FooterLink>
                        </ul>
                    </div>
                    {/* Column 4: Shtypi */}
                    <div>
                        <SectionTitle>Shtypi</SectionTitle>
                        <ul className="space-y-1">
                            <FooterLink onClick={() => handleLinkClick(pageContents.press)}>Njoftime për shtyp</FooterLink>
                        </ul>
                    </div>
                    {/* Column 5: Rreth NOVARIC */}
                    <div>
                        <SectionTitle>Rreth NOVARIC<sup>®</sup></SectionTitle>
                        <ul className="space-y-1">
                            <FooterLink onClick={() => handleLinkClick(pageContents.companyProfile)}>Profili i kompanisë</FooterLink>
                            <FooterLink onClick={() => handleLinkClick(pageContents.sustainability)}>Qëndrueshmëria</FooterLink>
                            <FooterLink onClick={() => handleLinkClick(pageContents.contact)}>Na kontaktoni</FooterLink>
                        </ul>
                    </div>
                    {/* Column 6: Rreth kësaj faqeje */}
                    <div>
                        <SectionTitle>Rreth kësaj faqeje</SectionTitle>
                        <ul className="space-y-1">
                            <FooterLink onClick={() => handleLinkClick(pageContents.disclaimer)}>Përgjegjësia</FooterLink>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-red-400/50 my-10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-red-200/90 gap-8">
                    <div className="flex space-x-4 text-white">
                        <a href="#" className="hover:text-white/80 transition-colors"><Icon icon={socialIcons.linkedin} /></a>
                        <a href="#" className="hover:text-white/80 transition-colors"><Icon icon={socialIcons.youtube} /></a>
                    </div>
                    <div className="text-left md:text-right text-red-200/80">
                        <p className='font-bold text-white'>NOVARIC<sup>®</sup> Sh.A.</p>
                        <p>E regjistruar në Shqipëri NUIS: M02111033E. Adresa: Rruga Studenti, Nd 2, H 6, 4001, Shkodër, Shqipëri.</p>
                        <p>NOVARIC<sup>®</sup> është një markë e regjistruar e NOVARIC<sup>®</sup> Sh.A.</p>
                    </div>
                </div>

                <div className="border-t border-red-400/50 mt-10 mb-8"></div>

                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.contact)}>Na kontaktoni</FooterLink>
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.terms)}>Kushtet dhe Rregullat</FooterLink>
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.accessibility)}>Aksesueshmëria</FooterLink>
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.cookies)}>Cookies</FooterLink>
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.privacy)}>Njoftimi i Privatësisë</FooterLink>
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.misconduct)}>Procedura e raportimit të sjelljes së pahijshme</FooterLink>
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.sitemap)}>Harta e faqes</FooterLink>
                    <FooterLink isBottomLink onClick={() => handleLinkClick(pageContents.brandGuidelines)}>Udhëzimet e Markës</FooterLink>
                </div>

                <p className="text-center text-xs text-red-200/70 mt-8">&copy; {new Date().getFullYear()} NOVARIC<sup>®</sup></p>
            </div>
        </footer>
    );
};