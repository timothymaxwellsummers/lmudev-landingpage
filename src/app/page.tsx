"use client";
import Image from "next/image";
import Header from "./components/header";
import Bento from "./components/bento";
import Footer from "./components/footer";
import BackgroundTop from "./components/background_top";
import BackgroundCenter from "./components/background_center";
import BackgroundBottom from "./components/background_bottom";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative isolate px-6 pt-14 pb-5 md:pt-8 lg:px-8">
        <BackgroundTop />
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              LMU{" "}
              <i className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 pr-2 sm:text-6xl">
                Developers
              </i>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Building Apps for and with the LMU Community. Goal: Build a great
              team, create awesome projects, and grow together.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="mailto:contact@lmu-dev.org"
                className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join Us!
              </a>
              <a
                href="#bento"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
            <div className="mx-auto mt-14 mb-5 md:mb-auto grid max-w-md grid-cols-3 items-center gap-x-8 gap-y-10 sm:max-w-md sm:grid-cols-3 sm:gap-x-10 lg:mx-auto lg:max-w-md lg:grid-cols-3">
              <Image
                className="max-h-10 md:max-h-12 w-full object-contain justify-self-center col-span-1"
                src="/partners/lmu_logo.svg"
                alt="LMU"
                width={208}
                height={64}
                quality={100}
              />
              <Image
                className="max-h-10 md:max-h-12 w-full object-contain justify-self-center col-span-1"
                src="/partners/stuve_logo.svg"
                alt="StuVe LMU"
                width={208}
                height={64}
                quality={100}
              />
              <Image
                className="max-h-10 md:max-h-12 w-full object-contain justify-self-center col-span-1"
                src="/partners/stwm_logo.svg"
                alt="Studierendenwerk München"
                width={208}
                height={64}
                quality={100}
              />
            </div>
            <BackgroundCenter />
            <div className="sm:mb-8 sm:flex sm:justify-center pt-8">
              <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Working on solutions for these organisations.&nbsp;
                <a href="https://github.com/orgs/lmu-devs/" target="_blank" className="font-semibold text-green-500">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Find us on GitHub <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Bento />
      <Footer />
      <BackgroundBottom />
    </div>
  );
}
