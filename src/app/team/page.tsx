import Header from "../components/header";
import Footer from "../components/footer";
import BackgroundTop from "../components/background_top";
import BackgroundBottom from "../components/background_bottom";
import TeamMemberCard from "./team_member_card";
import { team } from "./team_member_data";

export default function Team() {
  return (
    <>
      <Header />
      <div className="relative isolate px-4 sm:px-6 lg:px-8 pt-14 pb-5 md:pt-8">
        <BackgroundTop />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Our Team
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Meet the people behind LMU Developers.
            </p>
          </div>
        </div>

        {/* Team Members Grid */}
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="mt-2">
                <TeamMemberCard
                  imagePath={member.image}
                  name={member.name}
                  links={member.links}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Join Us Section */}
        <div className="mt-32 flex flex-col md:flex-row items-center justify-center gap-y-4 md:gap-x-6">
          <p className="text-center">Want to be part of this team?</p>
          <a
            href="mailto:contact@lmu-dev.org"
            className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Join Us!
          </a>
        </div>

        <div className="mb-32 md:mb-64" />
        <BackgroundBottom />
      </div>
      <Footer />
    </>
  );
}
