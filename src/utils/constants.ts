export const navRoutes = [
    { link: "/", icon: "material-symbols:home-rounded", name: 'home' },
    { link: "/portfolio", icon: "ic:baseline-lightbulb", name: 'portfolio' },
    { link: "/about", icon: "ic:sharp-person", name: 'about' },
    { link: "mailto:tofanvladit@gmail.com", icon: "mdi:gmail", name: 'mail' },
    { link: "https://github.com/TofanVlad", icon: "mdi:github", name: 'github' },
];

export const personalProjects = [
    {
        title: "Portfolio",
        description: `The portfolio is a simple website to show my work, skills, and information about me. I've done it in a minimalist format “That's one of my favorite formats of building websites”.`,
        image: "/Portfolio.webp",
        link: "https://github.com/TofanVlad/Portfolio",
    },
    {
        title: "Sushi",
        description: `This website was my first attempt to create a complete application with back-end. I used mongoose for back-end api and mongoDB for data base.`,
        image: "/Sushi.webp",
        link: "https://github.com/TofanVlad/Sushi",
    },
    {
        title: "Chat",
        description: `In this project I tried to copy the famous 'Twitch' chat, with the posibility to update your account, change color and username. Also with this project I started to use TailwindCSS.`,
        image: "/Chat.webp",
        link: "https://github.com/TofanVlad/Chat",
    },
    {
        title: "Notes",
        description: `This was my first individual project which is a simple notes/todo app, as for the back-end I used mongoDB.`,
        image: "/Notes.webp",
        link: "https://github.com/TofanVlad/Notes",
    },
];

export const commercialProjects = [
    {
        title: "OUYA",
        description: `This project was my first experience in commerical programming. Also learned a lot of new things like work with composables and the meaning of basic architecture.`,
        image: "/OUYA.webp",
        link: "https://ouya.md",
    },
    {
        title: "WheelIT",
        description: `A small landing page for a company that makes web-sites.`,
        image: "/WheelIT.webp",
        link: "https://wheelitinc.com",
    },
    {
        title: "Tehnoconduct",
        description: `My contribution to this project is partial design and developing. It is still in progress, so you'll have to wait to check it out! `,
        image: "/Tehnoconduct.webp",
        link: 'https://tehnoconduct.md'
    }
]