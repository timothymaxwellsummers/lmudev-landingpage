import Image from "next/image";
import PartnerImage from "../components/partners";
import { partners } from './data/partners';
import { Button } from "@/components/ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";




export default function Home() {
  return (
    <>
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#74D680] to-[#378B29] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto min-h-screen flex items-center max-w-2xl py-16 sm:py-16 lg:py-32">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              LMU{" "}
              <code className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 pr-2 sm:text-6xl">
                Developers
              </code>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Building Apps for and with the LMU Community. Goal: Build a great
              team, create awesome projects, and grow together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="bg-primary" variant="default">Join us!</Button>
              <Button variant="link">Learn more <ArrowRight className="ml-1 h-4 w-4"/></Button>
            </div>

            <div className="mx-auto mt-14 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              {partners.map((sponsor, index) => (
                <PartnerImage
                  key={index}
                  source={sponsor.source}
                  alt={sponsor.alt}
                  href={sponsor.href}
                />
              ))}
            </div>

            <div className="sm:mb-8 sm:flex sm:justify-center pt-8">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Working on solutions for these organisations.&nbsp;
                <a href="#" className="font-semibold text-green-500">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Find us on GitHub <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#378B29] to-[#74D680] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </>
  );
}
