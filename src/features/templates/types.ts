import { CVData } from '@/store/useStore'

export interface TemplateProps {
    data: CVData
    accentColor: string
    bgColor: string
    fontFamily: string
}

export interface TemplateDefinition {
    id: string
    name: string
    description: string
    accent: string
    bgColor: string
    font: string
    component: React.FC<TemplateProps>
}
