import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

// Icône TikTok personnalisée
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-.88-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer: React.FC = () => {
  // Réseaux sociaux avec couleurs pastel
  const socials = [
    { 
      id: 1, 
      name: 'Facebook', 
      link: 'https://www.facebook.com/OEH.HELHa', 
      icon: Facebook,
      color: 'hover:bg-pink-500 hover:text-white border-pink-300'
    },
    { 
      id: 2, 
      name: 'Instagram', 
      link: 'https://instagram.com/OEH.HELHa', 
      icon: Instagram,
      color: 'hover:bg-rose-500 hover:text-white border-rose-300'
    },
    { 
      id: 3, 
      name: 'Tiktok', 
      link: 'https://www.tiktok.com/@oeh.helha', 
      icon: TikTokIcon,
      color: 'hover:bg-green-500 hover:text-white border-green-300'
    }
  ];

  return (
    <footer className="py-8 relative">
      {/* Éléments décoratifs Sakura */}
      <div className="absolute top-0 left-10 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-rose-300/20 
                     rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-10 w-40 h-40 bg-gradient-to-br from-green-300/20 to-emerald-300/20 
                     rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Réseaux sociaux avec thème pastel */}
        <div className="flex justify-center space-x-4 mb-6">
          {socials.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-circle btn-outline group
                         transition-all duration-300 hover:scale-110 ${social.color}`}
              >
                <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            );
          })}
        </div>
        
        {/* Copyright */}
        <div className="text-center text-base-content/70">
          <p>&copy; 2025 Organisation des étudiant·es de la HELHa</p>
          <p>Designed by Lawzen</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;