import type React from 'react';

export enum View {
    DASHBOARD = 'DASHBOARD',
    JOBS = 'JOBS',
    CAREER_PATH = 'CAREER_PATH',
    SKILLS_GAP = 'SKILLS_GAP',
    LEARNING = 'LEARNING',
    COMMUNITY = 'COMMUNITY',
    RECRUITMENT = 'RECRUITMENT',
    BRAND_GUIDELINES = 'BRAND_GUIDELINES',
    JOB_LISTING = 'JOB_LISTING',
    COOKIE_POLICY = 'COOKIE_POLICY',
    PRIVACY_POLICY = 'PRIVACY_POLICY',
    TERMS_OF_USE = 'TERMS_OF_USE',
    CONTACT = 'CONTACT',
    // New views for corporate footer
    ALL_JOBS = 'ALL_JOBS',
    CAREER_ADVICE = 'CAREER_ADVICE',
    CAREERS_AT_NOVARIC = 'CAREERS_AT_NOVARIC',
    STAFFING_SOLUTIONS = 'STAFFING_SOLUTIONS',
    WORKFORCE_INSIGHTS = 'WORKFORCE_INSIGHTS',
    DIGITAL_SERVICES = 'DIGITAL_SERVICES',
    COMPANY_PROFILE = 'COMPANY_PROFILE',
    SUSTAINABILITY = 'SUSTAINABILITY',
    PRESS = 'PRESS',
    INVESTORS = 'INVESTORS',
    DISCLAIMER = 'DISCLAIMER',
    ACCESSIBILITY = 'ACCESSIBILITY',
    SITEMAP = 'SITEMAP',
    MISCONDUCT_POLICY = 'MISCONDUCT_POLICY',
}

export interface PageContext {
    title: string;
    content?: string | React.ReactNode;
}

export interface Job {
    title: string;
    company: string;
    location: string;
    description: string;
    skillsRequired: string[];
}

export interface CareerPathStep {
    step: number;
    title: string;
    description: string;
    skillsToAcquire: string[];
}

export interface CareerPath {
    path: CareerPathStep[];
}

export interface MissingSkill {
    skill: string;
    recommendation: string;
    reasoning: string;
}

export interface SkillGapResult {
    summary: string;
    missingSkills: MissingSkill[];
}

export interface Course {
    title: string;
    provider: string;
    description: string;
}

export interface CommunityPost {
    author: string;
    title: string;
    content: string;
    timestamp: string;
    avatar: string;
}

export interface Insight {
    title: string;
    category: string;
    image: string;
    summary: string;
    link: string;
}