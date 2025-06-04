export interface IProject {
    title: { en: string, ro: string }
    href?: string
    year: number
    tehnologies: string[]
    description: { en: string, ro: string }
    video: string
    role?: string
}

export const myStack: string[] = ['Vue JS', 'Nuxt JS', 'Tailwind CSS', 'Three JS', 'API', 'SwiperJS', 'Typescript', 'git', 'SEO']

export const projectsInfo: IProject[] = [{
    title: {
        en: 'Tehnoconduct',
        ro: 'Tehnoconduct',
    },
    href: 'https://tehnoconduct.md',
    year: 2024,
    tehnologies: ['Nuxt', 'Tailwind', 'Typescript', 'api'],
    description: {
        en: 'Built out the frontend for tehnoconduct.md from scratch. implemented animations to enrich user experience.',
        ro: 'Am creat frontend-ul pentru tehnoconduct.md de la zero, de asemenea am implementat animații pentru a îmbogăți experiența utilizatorului.',
    },
    video: '/images/Tehnoconduct.png'
}, {
    title: {
        en: 'Sushi',
        ro: 'Sushi',
    },
    year: 2023,
    href: 'https://github.com/TofanVlad/Sushi',
    role: 'FullStack DEVELOPER',
    tehnologies: ['Vue', 'Typescript', 'api', 'scss'],
    description: {
        en: 'My very first full-stack project that I did on my own. Implemented responsive design along with various modals.',
        ro: 'Primul meu proiect full-stack pe care l-am făcut pe cont propriu. Am implementat design responsive împreună cu diverse funcționalități.',
    },
    video: '/images/Sushi.png'
}, {
    href: 'https://github.com/TofanVlad/Minesweeper',
    title: {
        en: 'Minesweeper',
        ro: 'Minesweeper',
    },
    year: 2024,
    tehnologies: ['Vue', 'Typescript', 'TailwindCSS'],
    description: {
        en: 'In this project I recreated the popular game Minesweeper.',
        ro: 'În acest proiect am recreat jocul popular Minesweeper.',
    },
    video: '/images/MineSweeper.png'
}, {
    href: 'https://github.com/TofanVlad/innete',
    title: {
        en: 'Inette',
        ro: 'Inette',
    },
    year: 2024,
    tehnologies: ['Vue', 'Typescript', 'TailwindCSS', 'AnimeJS'],
    description: {
        en: 'This project is replica of real web-site inette.co.',
        ro: 'Acest proiect este replica unui web-site real inette.co.',
    },
    video: '/images/Inette.png'
}, {
    href: 'https://www.arhiterra.md/ro/',
    title: {
        en: 'ARHITERRA',
        ro: 'ARHITERRA',
    },
    year: 2025,
    tehnologies: ['Nuxt', 'Typescript', 'TailwindCSS', 'SwiperJS'],
    description: {
        en: 'Comercial project of a architecture company.',
        ro: 'Proiect comercial a unei companii de arhitectură.',
    },
    video: '/images/ARHITERRA.png'
}
]

