'use client';

import Image from 'next/image';
import React from 'react';

interface TeamMemberCardProps {
  imagePath: string;
  name: string;
  links: { url: string; iconPath: string }[];
}

export default function TeamMemberCard({
  imagePath,
  name,
  links,
}: TeamMemberCardProps) {
  return (
    <div className="max-w-6xl mx-auto p-8 border border-gray-200 rounded-xl bg-white h-full">
      <div className="flex flex-col items-center h-full">
        {/* Image Section */}
        <div className="w-full flex justify-center mb-6">
            <Image
            src={imagePath}
            alt={name}
            width={128}
            height={128}
            className="rounded-full object-cover border-2 border-gray-200 hover:border-gray-300 transition-colors duration-200"
            />
        </div>

        {/* Name Section */}
        <h3 className="text-xl font-semibold text-gray-900">{name}</h3>

        {/* Links Section */}
        <div className="flex gap-4 mt-2 px-3 py-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              className="flex items-center justify-center text-gray-700 hover:text-blue-600"
            >
              <Image
                src={link.iconPath}
                alt={`${name} Icon`}
                width={24}
                height={24}
                className="text-gray-300"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
