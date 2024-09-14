"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-gray-600">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">bla bla</h2>
            <p className="mt-2">
              Building innovative solutions for the community.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Explore</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  onClick={() => alert("⚠️ This content is coming soon :)")}
                  className="hover:text-gray-800"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  onClick={() => alert("⚠️ This content is coming soon :)")}
                  className="hover:text-gray-800"
                >
                  Team
                </a>
              </li>
              <li>
                <a href="#bento" className="hover:text-gray-800">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Follow Us</h2>
            <div className="flex mt-2 space-x-4">
              <a
                href="https://github.com/orgs/lmu-devs/repositories"
                target="_blank"
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.87 8.16 6.84 9.49.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.61-3.37-1.34-3.37-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.98 1.03-2.68-.1-.26-.45-1.29.1-2.69 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.4.2 2.43.1 2.69.64.7 1.03 1.59 1.03 2.68 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85 0 1.34-.01 2.42-.01 2.75 0 .27.18.59.69.48A10.02 10.02 0 0022 12c0-5.52-4.48-10-10-10z"
                  ></path>
                </svg>
              </a>
              <a
                onClick={() => alert("⚠️ This content is coming soon :)")}
                className="text-gray-600 hover:text-gray-800"
              >
                <svg
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Legal</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/datenschutz" className="hover:text-gray-800">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="/impressum" className="hover:text-gray-800">
                  Impressum
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          © 2024 Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
