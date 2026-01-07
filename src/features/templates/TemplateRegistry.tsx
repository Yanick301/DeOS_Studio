import { Zenith } from './Zenith'
import { Obsidian } from './Obsidian'
import { Executive } from './Executive'
import { Minimalist } from './Minimalist'
import { Creative } from './Creative'
import { Elite } from './Elite'
import { ModernArt } from './ModernArt'
import { ClassicBanker } from './ClassicBanker'
import { Tokyo } from './Tokyo'
import { Startup } from './Startup'
import { Architect } from './Architect'
import { Engineer } from './Engineer'
import { GreenCorp } from './GreenCorp'
import { Berlin } from './Berlin'
import { Silk } from './Silk'
import { Cyberpunk } from './Cyberpunk'
import { Botanical } from './Botanical'
import { Vogue } from './Vogue'
import { Bauhaus } from './Bauhaus'
import { Gatsby } from './Gatsby'
import { Glass } from './Glass'
import { Journal } from './Journal'
import { Nordic } from './Nordic'
import { Nova } from './Nova'
import { Orbit } from './Orbit'
import { Royale } from './Royale'
import { Slate } from './Slate'
import { SlateNight } from './SlateNight'
import { EliteCouture } from './EliteCouture'
import { MajestyCouture } from './MajestyCouture'
import { Elysian } from './Elysian'
import { Midnight } from './Midnight'
import { Ivory } from './Ivory'
import { Copper } from './Copper'
import { Emerald } from './Emerald'
import { Monochrome } from './Monochrome'
import { Futura } from './Futura'
import { Heritage } from './Heritage'
import { Prism } from './Prism'
import { Vanguard } from './Vanguard'
import { Symmetry } from './Symmetry'
import { Essence } from './Essence'
import { Impact } from './Impact'
import { Nebula } from './Nebula'
import { Aurora } from './Aurora'
import { Summit } from './Summit'
import { TemplateDefinition } from './types'

export const templates: TemplateDefinition[] = [
    {
        id: 'elite-couture',
        name: 'The Elite (Couture Ed.)',
        description: 'Design éditorial de haute voltige. Pour les profils hors du commun.',
        accent: '#d4af37',
        bgColor: '#ffffff',
        font: "'Playfair Display', serif",
        component: EliteCouture
    },
    {
        id: 'majesty-couture',
        name: 'The Majesty (Couture Ed.)',
        description: 'Design impérial et solennel. Pour laisser une empreinte indélébile.',
        accent: '#e2b808',
        bgColor: '#020617',
        font: "'Playfair Display', serif",
        component: MajestyCouture
    },
    {
        id: 'template1',
        name: 'The Zenith (Elite-Pro)',
        description: 'Classique, bordures Indigo. Idéal pour le Management.',
        accent: '#4f46e5',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Zenith
    },
    {
        id: 'template2',
        name: 'The Obsidian (Luxe)',
        description: 'Fond sombre, texte clair, accents Or. Ultra Premium.',
        accent: '#facc15',
        bgColor: '#1f2937',
        font: "'Inter', sans-serif",
        component: Obsidian
    },
    {
        id: 'template3',
        name: 'The Executive (Finance)',
        description: "Design épuré, style banque d'affaires. Très haute visibilité.",
        accent: '#0369a1',
        bgColor: '#fcfcfd',
        font: "'Inter', sans-serif",
        component: Executive
    },
    {
        id: 'template4',
        name: 'The Minimalist (Pro)',
        description: 'Structure ultra-propre, typographie aérée. Pour les puristes.',
        accent: '#10b981',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Minimalist
    },
    {
        id: 'template5',
        name: 'The Creative (Artist)',
        description: 'Asymétrie, design éditorial, typographie impactante.',
        accent: '#ec4899',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Creative
    },
    {
        id: 'template6',
        name: 'The Elite (Premium Sidebar)',
        description: 'Sidebar structurée, layout aéré. Très élégant.',
        accent: '#6366f1',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Elite
    },
    {
        id: 'template7',
        name: 'Modern Art (Black Label)',
        description: 'Header noir imposant, style magazine de mode.',
        accent: '#fbbf24',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: ModernArt
    },
    {
        id: 'template8',
        name: 'Classic Banker (Serif)',
        description: 'Style Wall Street traditionnel. Confiance absolue.',
        accent: '#000000',
        bgColor: '#ffffff',
        font: "'Times New Roman', serif",
        component: ClassicBanker
    },
    {
        id: 'template9',
        name: 'Tokyo (Modern Min)',
        description: 'Inspiration Japonaise. Un équilibre parfait.',
        accent: '#ef4444',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Tokyo
    },
    {
        id: 'template10',
        name: 'The Startup (Dynamic)',
        description: 'Moderne, simple, accents dynamiques. Idéal pour la Tech.',
        accent: '#8b5cf6',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Startup
    },
    {
        id: 'template11',
        name: 'The Architect (Geometric)',
        description: 'Layout asymétrique noir profond. Ultra-Premium.',
        accent: '#f97316',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Architect
    },
    {
        id: 'template12',
        name: 'The Engineer (Source Code)',
        description: 'Inspiration technique, typographie monospace.',
        accent: '#3b82f6',
        bgColor: '#ffffff',
        font: "'Fira Code', monospace",
        component: Engineer
    },
    {
        id: 'template13',
        name: 'Green Corp (Traditional)',
        description: 'Sobre, vert confiance, layout corporate classique.',
        accent: '#059669',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: GreenCorp
    },
    {
        id: 'template14',
        name: 'Berlin (Industrial)',
        description: 'Look brutaliste, typographie bold. Très impactant.',
        accent: '#dc2626',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Berlin
    },
    {
        id: 'template15',
        name: 'The Silk (Elegance)',
        description: 'Design doux, typographie serif italique. Très chic.',
        accent: '#92400e',
        bgColor: '#fffaf5',
        font: "'Playfair Display', serif",
        component: Silk
    },
    {
        id: 'template16',
        name: 'Cyberpunk (Neon Pulse)',
        description: 'Futuriste, accents néons, interface immersive.',
        accent: '#00ffff',
        bgColor: '#0a0a0c',
        font: "'Orbitron', sans-serif",
        component: Cyberpunk
    },
    {
        id: 'template17',
        name: 'Botanical (Eco-Zen)',
        description: 'Naturel, vert sauge, design organique et apaisant.',
        accent: '#4ade80',
        bgColor: '#fdfcf8',
        font: "'Outfit', sans-serif",
        component: Botanical
    },
    {
        id: 'template18',
        name: 'Vogue (High Fashion)',
        description: 'Style éditorial magazine, visuel dominant.',
        accent: '#f43f5e',
        bgColor: '#ffffff',
        font: "'Playfair Display', serif",
        component: Vogue
    },
    {
        id: 'template19',
        name: 'Bauhaus (Abstract)',
        description: 'Inspiration Bauhaus, formes géométriques et couleurs primaires.',
        accent: '#e63946',
        bgColor: '#f1faee',
        font: "'Inter', sans-serif",
        component: Bauhaus
    },
    {
        id: 'template20',
        name: 'The Gatsby (Art Deco)',
        description: 'Style Art Déco des années 20. Or et Noir.',
        accent: '#d4af37',
        bgColor: '#1a1a1a',
        font: "'Playfair Display', serif",
        component: Gatsby
    },
    {
        id: 'template21',
        name: 'Glassmorphism (Crystal)',
        description: 'Effet de transparence et flou. Très moderne.',
        accent: '#60a5fa',
        bgColor: '#f8fafc',
        font: "'Inter', sans-serif",
        component: Glass
    },
    {
        id: 'template22',
        name: 'The Journal (Daily)',
        description: 'Style journal papier, typographie serif structurée.',
        accent: '#27272a',
        bgColor: '#fffcf5',
        font: "'Lora', serif",
        component: Journal
    },
    {
        id: 'template23',
        name: 'Nordic (Pure)',
        description: 'Minimalisme scandinave. Froid et efficace.',
        accent: '#64748b',
        bgColor: '#f1f5f9',
        font: "'Inter', sans-serif",
        component: Nordic
    },
    {
        id: 'template24',
        name: 'Nova (Stellar)',
        description: 'Gradient cosmique et design futuriste.',
        accent: '#c026d3',
        bgColor: '#0f172a',
        font: "'Inter', sans-serif",
        component: Nova
    },
    {
        id: 'template25',
        name: 'Orbit (Modern Circle)',
        description: 'Éléments circulaires et layout dynamique.',
        accent: '#0ea5e9',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Orbit
    },
    {
        id: 'template26',
        name: 'The Royale (Crown)',
        description: 'Design royal, pourpre et or.',
        accent: '#fbbf24',
        bgColor: '#581c87',
        font: "'Playfair Display', serif",
        component: Royale
    },
    {
        id: 'template27',
        name: 'Slate (Modern Corporate)',
        description: 'Style corporatif moderne et professionnel.',
        accent: '#334155',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Slate
    },
    {
        id: 'template28',
        name: 'Slate Night (Dark Slate)',
        description: 'Version sombre du Slate. Très élégante.',
        accent: '#94a3b8',
        bgColor: '#0f172a',
        font: "'Inter', sans-serif",
        component: SlateNight
    },
    {
        id: 'elysian',
        name: 'The Elysian (Grand Luxe)',
        description: 'Design divin, accents or et blanc pur. Pour le sommet de la hiérarchie.',
        accent: '#d4af37',
        bgColor: '#ffffff',
        font: "'Playfair Display', serif",
        component: Elysian
    },
    {
        id: 'midnight',
        name: 'The Midnight (Cyber Spec)',
        description: 'Interface sombre, accents bleu néon. Pour la tech de pointe.',
        accent: '#3b82f6',
        bgColor: '#0f172a',
        font: "'Inter', sans-serif",
        component: Midnight
    },
    {
        id: 'ivory',
        name: 'The Ivory (Refined)',
        description: 'Douceur et minimalisme. Un équilibre parfait de beige et charbon.',
        accent: '#78350f',
        bgColor: '#fafaf6',
        font: "'Lora', serif",
        component: Ivory
    },
    {
        id: 'copper',
        name: 'The Copper (Industrial)',
        description: 'Robuste, accents cuivre chaud. Design de caractère.',
        accent: '#d97706',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Copper
    },
    {
        id: 'emerald',
        name: 'The Emerald (Eco-Pro)',
        description: 'Design organique et frais. Idéal pour le développement durable.',
        accent: '#059669',
        bgColor: '#fbfdfb',
        font: "'Outfit', sans-serif",
        component: Emerald
    },
    {
        id: 'monochrome',
        name: 'The Monochrome (Hardcore)',
        description: 'Noir et blanc strict. Un style Bauhaus radical.',
        accent: '#000000',
        bgColor: '#ffffff',
        font: "'Courier New', monospace",
        component: Monochrome
    },
    {
        id: 'futura',
        name: 'The Futura (Next Gen)',
        description: 'Layout tech moderne, dégradés violets. Futuriste.',
        accent: '#8b5cf6',
        bgColor: '#fdf2ff',
        font: "'Inter', sans-serif",
        component: Futura
    },
    {
        id: 'heritage',
        name: 'The Heritage (Classic)',
        description: 'Style journal traditionnel. Confiance et prestige historique.',
        accent: '#1a1a1a',
        bgColor: '#fffdfa',
        font: "'Playfair Display', serif",
        component: Heritage
    },
    {
        id: 'prism',
        name: 'The Prism (Artist Mix)',
        description: 'Vibrant, créatif, effets de verre. Pour les esprits libres.',
        accent: '#f43f5e',
        bgColor: '#0a0a0a',
        font: "'Inter', sans-serif",
        component: Prism
    },
    {
        id: 'vanguard',
        name: 'The Vanguard (Bold)',
        description: 'Asymétrique, rouge vif, design de tête.',
        accent: '#ef4444',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Vanguard
    },
    {
        id: 'symmetry',
        name: 'The Symmetry (Balanced)',
        description: 'Grilles parfaites, lignes fines. La perfection géométrique.',
        accent: '#475569',
        bgColor: '#ffffff',
        font: "'Inter', sans-serif",
        component: Symmetry
    },
    {
        id: 'essence',
        name: 'The Essence (Soft)',
        description: 'Courbes douces, tons pastels. Pour une approche humaine.',
        accent: '#ec4899',
        bgColor: '#fffafb',
        font: "'Outfit', sans-serif",
        component: Essence
    },
    {
        id: 'impact',
        name: 'The Impact (Power)',
        description: 'Ultra-contrasté, orange flamboyant. Pour ne pas passer inaperçu.',
        accent: '#f97316',
        bgColor: '#0c0c0e',
        font: "'Inter', sans-serif",
        component: Impact
    },
    {
        id: 'nebula',
        name: 'The Nebula (Stellar)',
        description: 'Layout cosmique, verres fumés et étoiles. Immersion totale.',
        accent: '#6366f1',
        bgColor: '#020617',
        font: "'Inter', sans-serif",
        component: Nebula
    },
    {
        id: 'aurora',
        name: 'The Aurora (Luminous)',
        description: 'Lumières boréales, élégance éthérée. Très haut de gamme.',
        accent: '#fb7185',
        bgColor: '#fdfcfb',
        font: "'Lora', serif",
        component: Aurora
    },
    {
        id: 'summit',
        name: 'The Summit (Ultimate)',
        description: 'Le sommet du design corporate. Le standard des PDG.',
        accent: '#1e293b',
        bgColor: '#f8fafc',
        font: "'Inter', sans-serif",
        component: Summit
    }
]

export const getTemplate = (id: string) => templates.find(t => t.id === id) || templates[0]
