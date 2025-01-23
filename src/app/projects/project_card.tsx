'use client';

import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  status: string;
  tags: string[];
  description: string;
  previewImage: string;
  links: { text: string; url: string; iconPath: string }[];
}

export default function ProjectCard({
  title,
  status,
  tags,
  description,
  previewImage,
  links,
}: ProjectCardProps) {
  return (
    <div className="h-full flex flex-col max-w-6xl mx-auto p-8 border border-gray-200 rounded-xl bg-white">
      <div className="flex flex-1 flex-col lg:flex-row gap-8">
        {/* Project Details Section */}
        <div className="flex-1 lg:flex-[2] flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-4">
              <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
              <p className="text-sm tracking-tight text-green-600 pr-2">{status}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              {tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-sm font-medium border border-gray-300 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 hover:border-gray-400 transition-colors duration-150"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 space-y-4">
              <p className="text-sm text-gray-600 leading-[1.85]">
                {description}
              </p>
            </div>
          </div>

          {/* Links Section for Desktop */}
          <div className="hidden lg:flex mt-8 flex-wrap gap-x-8 gap-y-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center gap-2 text-sm text-gray-700 font-medium hover:underline"
              >
                <Image
                  src={link.iconPath}
                  alt={`${link.text} Icon`}
                  width={20}
                  height={20}
                  className="text-gray-300"
                  style={{ color: '#D1D5DB' }}
                />
                {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:flex-[1] flex flex-col items-center">
          <div className="relative w-full max-w-[448px] h-[320px] lg:h-[420px]">
            <Image
              src={previewImage}
              alt={title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>

          {/* Links Section for Mobile and Tablet */}
          <div className="w-full mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 lg:hidden">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center gap-2 text-sm text-gray-700 font-medium hover:underline"
              >
                <Image
                  src={link.iconPath}
                  alt={`${link.text} Icon`}
                  width={20}
                  height={20}
                  className="text-gray-300"
                  style={{ color: '#D1D5DB' }}
                />
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
