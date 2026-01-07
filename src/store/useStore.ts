import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Experience {
    id: number
    titre: string
    entreprise: string
    duree: string
    description: string
}

export interface Formation {
    id: number
    titre: string
    etablissement: string
    annee: string
}

export interface CVData {
    nom: string
    titre: string
    profilSummary: string
    email: string
    phone: string
    location: string
    photo: string
    skills: string
    experiences: Experience[]
    formations: Formation[]
    languages: { name: string; level: string }[]
    interests: string[]
    qualities: string[]
    certificates: { title: string; year: string }[]
    projects: { title: string; link?: string }[]
}

export interface LetterData {
    recipientName: string
    recipientTitle: string
    companyName: string
    companyAddress: string
    date: string
    subject: string
    content: string
}

interface AppState {
    currentPage: string
    currentTemplateId: string
    cvData: CVData
    letterData: LetterData
    jobDescription: string
    dashboardScore: number
    setCurrentPage: (page: string) => void
    setTemplate: (id: string) => void
    updateCVData: (data: Partial<CVData>) => void
    updateLetterData: (data: Partial<LetterData>) => void
    setJobDescription: (desc: string) => void
    setDashboardScore: (score: number) => void
    addExperience: (exp: Experience) => void
    removeExperience: (id: number) => void
    addFormation: (form: Formation) => void
    removeFormation: (id: number) => void
}

const DEFAULT_CV_DATA: CVData = {
    nom: '',
    titre: '',
    profilSummary: '',
    email: '',
    phone: '',
    location: '',
    photo: '',
    skills: '',
    experiences: [],
    formations: [],
    languages: [],
    interests: [],
    qualities: [],
    certificates: [],
    projects: []
}

const DEFAULT_LETTER_DATA: LetterData = {
    recipientName: '',
    recipientTitle: '',
    companyName: '',
    companyAddress: '',
    date: new Date().toLocaleDateString('fr-FR'),
    subject: 'Candidature pour le poste de...',
    content: ''
}

export const useStore = create<AppState>()(
    persist(
        (set) => ({
            currentPage: 'accueil',
            currentTemplateId: 'template1',
            cvData: DEFAULT_CV_DATA,
            letterData: DEFAULT_LETTER_DATA,
            jobDescription: '',
            dashboardScore: 0,
            setCurrentPage: (page) => set({ currentPage: page }),
            setTemplate: (id) => set({ currentTemplateId: id }),
            updateCVData: (data) => set((state) => ({ cvData: { ...state.cvData, ...data } })),
            updateLetterData: (data) => set((state) => ({ letterData: { ...state.letterData, ...data } })),
            setJobDescription: (desc) => set({ jobDescription: desc }),
            setDashboardScore: (score) => set({ dashboardScore: score }),
            addExperience: (exp) => set((state) => ({ cvData: { ...state.cvData, experiences: [...state.cvData.experiences, exp] } })),
            removeExperience: (id) => set((state) => ({ cvData: { ...state.cvData, experiences: state.cvData.experiences.filter(e => e.id !== id) } })),
            addFormation: (form) => set((state) => ({ cvData: { ...state.cvData, formations: [...state.cvData.formations, form] } })),
            removeFormation: (id) => set((state) => ({ cvData: { ...state.cvData, formations: state.cvData.formations.filter(f => f.id !== id) } })),
        }),
        {
            name: 'deos-studio-storage',
        }
    )
)
