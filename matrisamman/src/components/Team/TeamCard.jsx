import React from 'react';
import { IconBrandInstagram, IconBrandFacebook, IconBrandLinkedin } from '@tabler/icons-react';

export default function TeamCard({ name, role, image, socials = [] }) {
  const gold = '#D4AF37';

  const renderIcon = (type) => {
    switch (type) {
      case 'instagram':
        return <IconBrandInstagram size={18} stroke={1.5} color={gold} />;
      case 'facebook':
        return <IconBrandFacebook size={18} stroke={1.5} color={gold} />;
      case 'linkedin':
        return <IconBrandLinkedin size={18} stroke={1.5} color={gold} />;
      default:
        return null;
    }
  };

  // If socials array is empty, add placeholder links for insta, fb, linkedin
  const defaultSocials = [
    { type: 'instagram', href: '#' },
    { type: 'facebook', href: '#' },
    { type: 'linkedin', href: '#' }
  ];

  const finalSocials = socials.length > 0 ? socials : defaultSocials;

  return (
    <article
      className="w-full max-w-xs p-4 rounded-2xl border border-white/10 shadow-lg backdrop-blur-md transition-all hover:scale-[1.02]"
      style={{
        background: 'linear-gradient(135deg, rgba(139, 20, 20, 0.35), rgba(255, 110, 110, 0.15))',
        boxShadow: '0 8px 32px rgba(154, 0, 37, 0.25)'
      }}
    >
      <div className="flex items-center gap-4">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-20 h-20 rounded-full object-cover ring-2 ring-white/20 shadow-sm"
          />
          <span
            className="absolute -bottom-1 -right-1 block w-3 h-3 rounded-full"
            style={{
              background: 'linear-gradient(180deg, rgba(212,175,55,1), rgba(255,223,99,0.9))',
              boxShadow: '0 0 8px rgba(212,175,55,0.6)'
            }}
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold" style={{ color: gold }}>{name}</h3>
          <p className="text-sm mt-0.5 text-white/85">{role}</p>
        </div>
      </div>

      {finalSocials.length > 0 && (
        <div className="mt-4 flex items-center gap-3">
          {finalSocials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${name}'s ${s.type} profile`}
              className="flex items-center gap-2 px-2 py-1 rounded-full text-xs font-medium border border-white/6 backdrop-blur-sm hover:scale-105 hover:shadow-lg transition-all"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              {renderIcon(s.type)}
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
