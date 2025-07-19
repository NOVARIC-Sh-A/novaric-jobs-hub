
import { GoogleGenAI, GenerateContentResponse, Type } from "@google/genai";
import type { Job, CareerPath, SkillGapResult } from '../types';

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
    throw new Error("API_KEY environment variable not set.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const jobSchema = {
    type: Type.ARRAY,
    items: {
        type: Type.OBJECT,
        properties: {
            title: { type: Type.STRING, description: "Titulli i Punës" },
            company: { type: Type.STRING, description: "Emri i Kompanisë" },
            location: { type: Type.STRING, description: "Vendndodhja e Punës, p.sh., 'Valletta, Maltë'" },
            description: { type: Type.STRING, description: "Një përshkrim i shkurtër i punës me 2-3 fjali." },
            skillsRequired: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Lista e aftësive kryesore." },
        },
        required: ["title", "company", "location", "description", "skillsRequired"],
    },
};

const careerPathSchema = {
    type: Type.OBJECT,
    properties: {
        path: {
            type: Type.ARRAY,
            description: "Një varg hapash në rrugën e karrierës.",
            items: {
                type: Type.OBJECT,
                properties: {
                    step: { type: Type.INTEGER, description: "Numri i hapit në sekuencë." },
                    title: { type: Type.STRING, description: "Titulli i këtij hapi ose roli në karrierë." },
                    description: { type: Type.STRING, description: "Një përshkrim i detajuar i asaj që duhet arritur në këtë hap." },
                    skillsToAcquire: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Aftësi specifike për t'u mësuar gjatë këtij hapi." },
                },
                required: ["step", "title", "description", "skillsToAcquire"],
            }
        }
    },
    required: ["path"],
};

const skillGapSchema = {
    type: Type.OBJECT,
    properties: {
        summary: { type: Type.STRING, description: "Një përmbledhje e nivelit të lartë të analizës së hendekut të aftësive." },
        missingSkills: {
            type: Type.ARRAY,
            description: "Një varg aftësish që mungojnë në ekip.",
            items: {
                type: Type.OBJECT,
                properties: {
                    skill: { type: Type.STRING, description: "Emri i aftësisë që mungon." },
                    recommendation: { type: Type.STRING, description: "Rekomandim, p.sh., 'Trajnuar ekipi ekzistues' ose 'Punësuar talent i ri'." },
                    reasoning: { type: Type.STRING, description: "Arsyetimi pas rekomandimit." }
                },
                required: ["skill", "recommendation", "reasoning"],
            }
        }
    },
    required: ["summary", "missingSkills"],
};


export const getJobRecommendations = async (role: string, skills: string): Promise<Job[]> => {
    const prompt = `Bazuar në profilin e mëposhtëm të përdoruesit, gjenero 5 oferta pune të përshtatshme në Maltë. Profili: Roli - "${role}", Aftësitë - "${skills}".`;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema: jobSchema,
        },
    });

    const json = JSON.parse(response.text);
    return json as Job[];
};

export const getCareerPath = async (currentRole: string, targetRole: string): Promise<CareerPath> => {
    const prompt = `Krijo një plan karriere të detajuar por të përmbledhur për dikë që kalon nga pozicioni "${currentRole}" në pozicionin "${targetRole}". Përvijo 3-5 hapa kryesorë. Për çdo hap, përfshi titullin e rolit/momentit kyç, një përshkrim dhe një listë të aftësive kryesore për t'u fituar.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema: careerPathSchema,
        },
    });

    const json = JSON.parse(response.text);
    return json as CareerPath;
};

export const analyzeSkillsGap = async (teamSkills: string, projectDescription: string): Promise<SkillGapResult> => {
    const prompt = `Analizo hendekun e aftësive për një ekip me aftësitë e mëposhtme: "${teamSkills}". Ata duhet të përfundojnë këtë projekt: "${projectDescription}". Identifiko 3-5 aftësitë kryesore që mungojnë. Për çdo aftësi që mungon, jep një rekomandim nëse duhet 'Trajnuar ekipi ekzistues' apo 'Punësuar talent i ri' dhe një arsyetim të shkurtër. Jep një përmbledhje të përgjithshme.`;

    const response: GenerateContentResponse = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
            responseMimeType: 'application/json',
            responseSchema: skillGapSchema,
        },
    });

    const json = JSON.parse(response.text);
    return json as SkillGapResult;
};