interface ProjectData {
    id: string;
    title: string;
    status: string;
    tags: string[];
    description: string;
    previewImage: string;
    links: { text: string; url: string; iconPath: string }[];
}

export const projects: ProjectData[] = [
    {
        id: "lmustudents",
        title: "LMU Students App",
        status: "In Development",
        tags: [
        "Mobile App",
        "Open Source",
        "Android",
        "iOS",
        "Flutter",
        "Dart",
        "Python",
        "FastAPI",
        ],
        description:
        "A mobile application for Android and iOS that enables students to easily access information about LMU services. With LMU Students users can check canteen menus, rate dishes, and find building on campus. We aim to develop this app together with the LMU community to further enhance its features in the future.",
        previewImage: "/projects/lmu_students_preview.png",
        links: [
        {
            text: "Frontend",
            url: "https://github.com/lmu-devs/lmu_app_client",
            iconPath: "/github.svg",
        },
        {
            text: "Backend",
            url: "https://github.com/lmu-devs/lmu_app_backend",
            iconPath: "/github.svg",
        },
        ],
    },
    {
        id: "lmudev_website",
        title: "LMU Developers Website",
        status: "Completed",
        tags: [
        "Web Development",
        "Open Source",
        "Next.js",
        "Tailwind CSS",
        "React",
        "Vercel",
        ],
        description:
        "The webiste you are currently on. This is the central hub for our student organization. It showcases the projects and team members of LMU Developers. The website still gets updates from time to time and will feature more conetent in the future.",
        previewImage: "/projects/lmudev_website_preview.png",
        links: [
        {
            text: "Check out the Code",
            url: "https://github.com/timothymaxwellsummers/lmudev-landingpage",
            iconPath: "/github.svg",
        },
        ],
    },
]