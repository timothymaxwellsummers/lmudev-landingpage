import Header from "../components/header";
import Footer from "../components/footer";
import BackgroundTop from "../components/background_top";
import BackgroundBottom from "../components/background_bottom";
import ProjectCard from "./project_card";

export default function Projects() {
  const projects = [
    {
      title: "LMU Students App",
      status: "In Development",
      tags: [
        "Mobile App",
        "Open Source",
        "Flutter",
        "Dart",
        "Python",
        "FastAPI",
        "Figma",
      ],
      description:
        "A mobile application for Android and iOS that enables students to easily access information about LMU services. With LMU Students users can check canteen menus, rate dishes, and find building on campus. We aim to develop this app together with the LMU community to further enhance its features in the future.",
      previewImage: "/lmu_students_preview.png",
      links: [
        {
          text: "Check out the Frontend",
          url: "https://github.com/lmu-devs/lmu_app_client",
          iconPath: "/github.svg",
        },
        {
          text: "Check out the Backend",
          url: "https://github.com/lmu-devs/lmu_app_backend",
          iconPath: "/github.svg",
        },
      ],
    },
  ];

  return (
    <>
      <Header />
      <div className="relative isolate px-6 pt-14 pb-5 md:pt-8 lg:px-8">
        <BackgroundTop />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Projects
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              See what we are working on.
            </p>
          </div>
        </div>
        <div>
          {projects.map((project, index) => (
            <div key={index} className={index !== projects.length - 1 ? "mb-24" : ""}>
              <ProjectCard
                title={project.title}
                status={project.status}
                tags={project.tags}
                description={project.description}
                previewImage={project.previewImage}
                links={project.links}
              />
            </div>
          ))}
        </div>
        <div className="mb-64" />
      </div>
      <Footer />
      <BackgroundBottom />
    </>
  );
}
