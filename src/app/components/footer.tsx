"use client";
import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-gray-600">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">LMU Developers</h2>
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
                href="https://github.com/orgs/lmu-devs/"
                target="_blank"
                className="text-gray-600 hover:text-gray-800"
              >
                <Image 
                  src="/github.svg" 
                  alt="GitHub"
                  width={24}
                  height={24}
                  style={{ filter: 'invert(46%) sepia(0%) saturate(0%) hue-rotate(147deg) brightness(95%) contrast(92%)' }}
                />
              </a>
              <a
                href="https://www.linkedin.com/company/lmu-dev/"
                target="_blank"
                className="text-gray-600 hover:text-gray-800"
              >
              <Image 
                src="/linkedin.svg" 
                alt="LinkedIn"
                width={24}
                height={24}
                style={{ filter: 'invert(46%) sepia(0%) saturate(0%) hue-rotate(147deg) brightness(95%) contrast(92%)' }}
              />
              </a>
              <a
                href="https://www.instagram.com/lmu.developers/"
                target="_blank"
                className="text-gray-600 hover:text-gray-800"
              >
              <Image 
                src="/instagram.svg" 
                alt="Instagram"
                width={24}
                height={24}
                style={{ filter: 'invert(46%) sepia(0%) saturate(0%) hue-rotate(147deg) brightness(95%) contrast(92%)' }}
              />
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Legal</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="/datenschutz" className="hover:text-gray-800">
                  Data Privacy
                </a>
              </li>
              <li>
                <a href="/impressum" className="hover:text-gray-800">
                  Legal Notice
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500 mt-8">
          © 2025. LMU Developers. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
