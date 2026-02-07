import React from 'react';
import { SocialLink } from '../types';
import { getSocialIcon } from '../constants';

interface SocialIconsProps {
  socials: SocialLink[];
}

const SocialIcons: React.FC<SocialIconsProps> = ({ socials }) => {
  return (
    <div className="flex items-center justify-center gap-4 mt-4">
      {socials.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition-all duration-300 hover:scale-110 hover:border-cyan-300/40 hover:text-cyan-200"
        >
          {getSocialIcon(social.platform)}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
