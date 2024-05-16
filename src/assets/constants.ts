export interface IProject {
    title: { en: string, ro: string }
    href?: string
    year: number
    tehnologies: string[]
    description: { en: string, ro: string }
    video: string
}

export const myStack: string[] = ['Vue JS', 'Nuxt JS', 'Tailwind CSS', 'Three JS', 'API', 'i18n', 'Typescript', 'git', 'SEO']

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
    tehnologies: ['Vue', 'typescript', 'api', 'scss'],
    description: {
        en: 'My very first full-stack project that I did on my own. Implemented responsive design along with various modals.',
        ro: 'Primul meu proiect full-stack pe care l-am făcut pe cont propriu. Am implementat design responsive împreună cu diverse funcționalități.',
    },
    video: '/images/Sushi.png'
}]

