import Marquee from "react-fast-marquee";

export default function Bento() {
  return (
    <section>
      <div className="mx-auto px-6 max-w-6xl text-gray-500 pb-20">
        <div className="relative">
          <div className="relative z-10 grid gap-3 grid-cols-6">
            <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200">
              <div className="size-fit m-auto relative flex flex-col items-center">
                <div className="relative flex justify-center w-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-24 h-24"
                  >
                    <defs>
                      <linearGradient
                        id="gradient1"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          style={{ stopColor: "#ff5858", stopOpacity: 0.9 }}
                        />
                        <stop
                          offset="100%"
                          style={{ stopColor: "#f857a6", stopOpacity: 0.9 }}
                        />
                      </linearGradient>
                    </defs>
                    <path
                      fill="url(#gradient1)"
                      d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z"
                    />
                  </svg>
                </div>
                <h2 className="mt-6 text-center font-semibold text-gray-950 text-3xl">
                  Meet new like minded people
                </h2>
              </div>
            </div>

            <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
              <div>
                <img src="./cvIllu.svg" alt="CV Icon" />
                <div className="">
                  <h2 className="text-center font-semibold text-gray-950 text-3xl">
                    + Extend your CV
                  </h2>
                  <p className="text-center text-gray-700 pt-2">
                    &rarr; Non-Profit engagement
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-8 rounded-xl bg-white border border-gray-200">
              <div>
                <div className="flex justify-center items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#CFCFCF"
                    className="w-13 h-13 scale-75"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="#CFCFCF"
                    className="w-13 h-13 scale-75"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
                    />
                  </svg>
                </div>
                <div className="mt-5 text-center relative z-10 space-y-2">
                  <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950">
                    Work on your courses
                  </h2>
                  <p className=" text-gray-700">
                    Use LMU Developers to work on a course or thesis.
                    <br />
                    Work on something bigger than the usual scope of a course
                  </p>
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-3 overflow-hidden p-8 rounded-xl bg-white border border-gray-200 flex items-center justify-center h-full">
              <div className="text-4xl font-semibold w-full px-6 text-gray-950">
                <div className="float-right">
                  Work on{" "}
                  <i className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 pr-2">
                    real
                  </i>{" "}
                  projects
                </div>
                <br />
                <div className="text-nowrap pt-4">
                  For{" "}
                  <i className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-green-600 pr-2">
                    real
                  </i>{" "}
                  people
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-3 overflow-hidden relative py-8 rounded-xl bg-white border border-gray-200">
              <h2 className="text-lg font-medium text-gray-800 transition group-hover:text-purple-950 px-8">
                Dive into your favourite tools!{" "}
              </h2>
              <Marquee speed={50} className="pt-8">
                <img src="figma.png" alt="Tool Logo 1" className="h-20 px-2" />
                <img src="vscode.png" alt="Tool Logo 2" className="h-20 px-2" />
                <img src="notion.png" alt="Tool Logo 2" className="h-20 px-2" />
                <img src="node.png" alt="Tool Logo 1" className="h-20 px-2" />
                <img src="next.png" alt="Tool Logo 2" className="h-20 px-2" />
                <img
                  src="flutter.png"
                  alt="Tool Logo 2"
                  className="h-20 px-2"
                />
                <img src="git.png" alt="Tool Logo 2" className="h-20 px-2" />
                <img src="react.png" alt="Tool Logo 2" className="h-20 px-2" />
                <img src="vercel.png" alt="Tool Logo 2" className="h-20 px-2" />
                <img src="aws.png" alt="Tool Logo 2" className="h-20 px-2" />
              </Marquee>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
