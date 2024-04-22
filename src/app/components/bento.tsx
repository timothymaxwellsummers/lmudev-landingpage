import Marquee from "react-fast-marquee";

export default function Bento() {
  return (
    <section>
      <div className="mx-auto px-6 max-w-6xl text-gray-500 pb-20">
        <div className="relative">
          <div className="relative z-10 grid gap-3 grid-cols-6">
            <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-8 rounded-xl bg-white border border-gray-200">
              <div className="size-fit m-auto relative">
                <div className="relative h-24 w-56 flex items-center">
                  <svg
                    className="absolute inset-0 size-full text-gray-400"
                    viewBox="0 0 254 104"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  <span className="w-fit block mx-auto text-5xl font-semibold text-transparent bg-clip-text bg-gradient-to-br from-blue-300 to-pink-600">
                    100%
                  </span>
                </div>
                <h2 className="mt-6 text-center font-semibold text-gray-950 text-3xl">
                  Customizable
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
                <img src="flutter.png" alt="Tool Logo 2" className="h-20 px-2" />
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
