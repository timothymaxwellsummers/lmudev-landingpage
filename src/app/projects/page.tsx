import Header from "../components/header";
import Footer from "../components/footer";
import BackgroundTop from "../components/background_top";
import BackgroundBottom from "../components/background_bottom";
import ProjectCard from "./project_card";
import { projects } from "./project_data";

export default function Projects() {
  return (
    <>
      <Header />
      <div className="relative isolate px-4 sm:px-6 lg:px-8 pt-14 pb-5 md:pt-8">
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
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {projects.map((project, index) => (
            <div
              id={project.id}
              key={index}
              className={index !== projects.length - 1 ? "mb-16" : ""}
            >
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
        <div className="mb-32 md:mb-64" />
        <BackgroundBottom />
      </div>
      <Footer />
    </>
  );
}
