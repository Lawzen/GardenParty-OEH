"use client"
import React, { useState, useEffect, useMemo, useRef } from 'react';
import { 
  Ticket, 
  Facebook, 
  Instagram, 
  Twitter,
  ChevronDown,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Music,
  Star,
  Volume2,
  VolumeX,
  Leaf,
  Flower,
} from 'lucide-react';

const Hero: React.FC = () => {
  const [countdown, setCountdown] = useState([
    { value: '00', label: 'Jours' },
    { value: '00', label: 'Heures' },
    { value: '00', label: 'Minutes' },
    { value: '00', label: 'Secondes' }
  ]);

  const [isVisible, setIsVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Date cible: jeudi 25 septembre 2025
  const targetDate = new Date(2025, 8, 25, 19);

  // Particules Sakura (pétales de fleurs)
  const sakuraPetals = useMemo(() => 
    Array.from({ length: 25 }, (_, i) => {
      const size = Math.random() > 0.7 ? 'w-4 h-4' : Math.random() > 0.4 ? 'w-3 h-3' : 'w-2 h-2';
      const rotation = Math.random() * 360;
      const petalIcons = [Leaf, Flower];
      const petalIcon = petalIcons[Math.floor(Math.random() * petalIcons.length)];
      
      return {
        id: i,
        initialStyle: {
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${i * 0.3}s`,
          animationDuration: `${4 + Math.random() * 6}s`,
          transform: `rotate(${rotation}deg)`
        },
        size,
        icon: petalIcon,
        color: Math.random() > 0.6 ? 'text-pink-300' : 
               Math.random() > 0.3 ? 'text-rose-300' : 'text-pink-200',
        movement: Math.random() > 0.5 ? 'float' : 'drift',
        blur: Math.random() > 0.7 ? 'blur-[0.5px]' : '',
        opacity: 0.6 + Math.random() * 0.4
      };
    }), []
  );

  // Pétales qui tombent
  const fallingPetals = useMemo(() => 
    Array.from({ length: 8 }, (_, i) => {
      const rotation = Math.random() * 360;
      const petalIcons = [Leaf, Flower];
      const petalIcon = petalIcons[Math.floor(Math.random() * petalIcons.length)];
      
      return {
        id: `falling-${i}`,
        style: {
          left: `${Math.random() * 100}%`,
          animationDelay: `${i * 2}s`,
          transform: `rotate(${rotation}deg)`
        },
        icon: petalIcon,
        size: Math.random() > 0.6 ? 'w-3 h-3' : 'w-2 h-2',
        opacity: 0.4 + Math.random() * 0.3
      };
    }), []
  );


  // Infos événement avec thème Sakura
  const eventInfo = [
    {
      icon: Calendar,
      title: '25 Septembre 2025',
      subtitle: 'Sous les cerisiers'
    },
    {
        icon: MapPin,
        title: 'Campus HELHa Mons',
        subtitle: 'Jardin fleuri'
      },
    {
      icon: Clock,
      title: '19h00 - 02h00',
      subtitle: 'Nuit magique'
    }
    
  ];

  // Fonctions audio
  const toggleAudio = async () => {
    if (audioRef.current) {
      try {
        if (isPlaying) {
          audioRef.current.pause();
          setIsPlaying(false);
          setIsMuted(true);
        } else {
          // S'assurer que l'audio n'est pas muet avant de jouer
          audioRef.current.muted = false;
          await audioRef.current.play();
          setIsPlaying(true);
          setIsMuted(false);
        }
      } catch (error) {
        console.warn('Erreur audio:', error);
        // En cas d'erreur, réinitialiser l'état
        setIsPlaying(false);
        setIsMuted(true);
      }
    }
  };

  const handleAudioEnded = () => {
    setIsPlaying(false);
    setIsMuted(true);
  };

  const handleAudioError = (error: React.SyntheticEvent<HTMLAudioElement, Event>) => {
    console.error('Erreur audio:', error);
    setIsPlaying(false);
    setIsMuted(true);
  };


  // Fonctions countdown optimisées
  const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance < 0) {
      setCountdown([
        { value: '00', label: 'Jours' },
        { value: '00', label: 'Heures' },
        { value: '00', label: 'Minutes' },
        { value: '00', label: 'Secondes' }
      ]);
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    setCountdown([
      { value: padNumber(days), label: 'Jours' },
      { value: padNumber(hours), label: 'Heures' },
      { value: padNumber(minutes), label: 'Minutes' },
      { value: padNumber(seconds), label: 'Secondes' }
    ]);
  };

  const padNumber = (num: number): string => {
    return num.toString().padStart(2, '0');
  };

  useEffect(() => {
    // Initialisation
    updateCountdown();
    const intervalId = setInterval(updateCountdown, 1000);
    const timer = setTimeout(() => setIsVisible(true), 300);
    
    // Préchargement audio
    if (audioRef.current) {
      audioRef.current.volume = 0.3; // Volume par défaut
      audioRef.current.muted = false; // Commencer muet pour respecter les politiques des navigateurs
    }
    
    return () => {
      clearInterval(intervalId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden">
        {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        onEnded={handleAudioEnded}
        onError={handleAudioError}
        preload="auto"
        className="hidden"
      >
        <source src="/assets/audio/sakura-ambient.mp3" type="audio/mpeg" />
        Votre navigateur ne supporte pas l'élément audio.
      </audio>

      {/* Contrôle Audio Optimisé */}
      <div className="fixed top-6 right-6 z-50">
        <div className="tooltip tooltip-left" data-tip={isPlaying ? "Couper la musique" : "Musique d'ambiance"}>
          <button
            onClick={toggleAudio}
            className={`btn btn-circle glass group transition-all duration-300 
                       ${isPlaying ? 'btn-primary' : 'btn-outline btn-primary'}
                       hover:scale-110 shadow-lg backdrop-blur-md`}
            aria-label={isPlaying ? "Couper le son" : "Activer la musique"}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 group-hover:animate-pulse" />
            ) : (
              <Volume2 className="w-5 h-5 group-hover:animate-pulse" />
            )}
          </button>
        </div>
      </div>
      


      {/* Pétales de Sakura flottants */}
      {sakuraPetals.map((petal) => {
        const PetalIcon = petal.icon;
        return (
          <div
            key={petal.id}
            className={`absolute ${petal.size} ${petal.blur}
                       ${petal.movement === 'float' ? 'animate-float-sakura' : 'animate-drift-sakura'} 
                       will-change-transform flex items-center justify-center`}
            style={{
              ...petal.initialStyle,
              opacity: petal.opacity
            }}
          >
            <PetalIcon className={`w-full h-full ${petal.color} drop-shadow-lg`} />
          </div>
        );
      })}

      {/* Pétales qui tombent */}
      {fallingPetals.map((petal) => {
        const PetalIcon = petal.icon;
        return (
          <div
            key={petal.id}
            className={`absolute ${petal.size} animate-falling-petals will-change-transform flex items-center justify-center`}
            style={{
              ...petal.style,
              opacity: petal.opacity
            }}
          >
            <PetalIcon className="w-full h-full text-pink-300 drop-shadow-sm" />
          </div>
        );
      })}

      {/* Contenu principal */}
      <div className={`relative z-10 min-h-screen flex items-center justify-center px-4 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}>
                 <div className="text-center max-w-6xl mx-auto py-24">
          
          {/* Badge événement Sakura
          <div className="inline-flex items-center gap-2 bg-pink-100/80 backdrop-blur-lg 
                         border-2 border-pink-200 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Sparkles className="w-4 h-4 text-pink-500" />
            <span className="text-pink-700 text-sm font-semibold">Garden Party Sakura Edition</span>
            <Star className="w-4 h-4 text-pink-500 animate-pulse" />
          </div> */}

          {/* Logo avec effet Sakura */}
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-200/30 to-green-200/30 rounded-3xl blur-2xl" />
            <img 
              src="/assets/img/logo/oeh.png"
              alt="OEH"
              className="relative h-32 md:h-40 mx-auto drop-shadow-lg transition-all duration-700 
                        hover:scale-110 hover:rotate-2 filter brightness-105 logo-desktop"
            />
            {/* Pétales autour du logo */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-300 rounded-full opacity-70 animate-pulse" />
            <div className="absolute -bottom-1 -left-3 w-4 h-4 bg-green-300 rounded-full opacity-60 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          
          {/* Titre avec effet Sakura */}
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-6 leading-none">
              <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-400 
                             bg-clip-text text-transparent drop-shadow-sm">
                GARDEN
              </span>
              <br />
              <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)] 
               [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]">
                PARTY
              </span>
            </h1>
            
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-px bg-gradient-to-r from-transparent via-pink-300 to-transparent w-20" />
              <div className="flex gap-1">
                <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse" />
                <Music className="w-6 h-6 text-pink-500 animate-pulse" />
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
              <div className="h-px bg-gradient-to-r from-transparent via-green-300 to-transparent w-20" />
            </div>
            
            <p className="text-2xl md:text-3xl text-base-content font-light tracking-wide">
              Édition <span className="font-bold text-primary">Sakura 2025</span>
            </p>
            <p className="text-lg text-base-content/70 mt-2 italic">
              "Sous les cerisiers en fleurs"
            </p>
          </div>


          {/* Compteur à rebours Sakura */}
          <div className="mb-12">
            <h3 className="text-base-content/80 text-lg mb-6 font-medium">Floraison dans</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {countdown.map((time, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-xl border-2 border-pink-200
                           rounded-3xl p-6 hover:scale-105 transition-all duration-300
                           hover:bg-pink-50 hover:shadow-xl hover:border-pink-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-4xl md:text-5xl font-black text-primary mb-2 
                                group-hover:scale-110 transition-transform duration-300">
                    {time.value}
                  </div>
                  <div className="text-base-content/70 text-sm uppercase tracking-widest font-medium">
                    {time.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Infos événement avec style pastel */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {eventInfo.map((info, index) => {
              const IconComponent = info.icon;
              const colors = ['bg-pink-100 border-pink-200', 'bg-green-100 border-green-200', 'bg-rose-100 border-rose-200'];
              const iconColors = ['text-pink-600', 'text-green-600', 'text-rose-600'];
              
              return (
                <div 
                  key={index}
                  className={`group ${colors[index]} backdrop-blur-lg border-2 rounded-3xl p-6
                           hover:scale-105 transition-all duration-300 hover:shadow-xl`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`bg-white p-4 rounded-2xl mb-4 shadow-md
                                  group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-6 h-6 ${iconColors[index]}`} />
                    </div>
                    <h3 className="text-base-content font-bold text-lg mb-1">{info.title}</h3>
                    <p className="text-base-content/70 text-sm">{info.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>


      {/* Éléments décoratifs Sakura */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-pink-300/20 to-rose-300/20 
                     rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-300/20 to-emerald-300/20 
                     rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Branches de cerisier decoratives */}
      <div className="absolute top-10 right-20 opacity-20">
        <svg width="120" height="80" viewBox="0 0 120 80" className="text-pink-400">
          <path d="M10 70 Q 30 50, 50 60 T 90 40 Q 100 35, 110 30" 
                stroke="currentColor" strokeWidth="3" fill="none"/>
          <circle cx="25" cy="55" r="4" fill="currentColor" opacity="0.7"/>
          <circle cx="45" cy="62" r="3" fill="currentColor" opacity="0.8"/>
          <circle cx="75" cy="48" r="4" fill="currentColor" opacity="0.6"/>
          <circle cx="95" cy="38" r="3" fill="currentColor" opacity="0.9"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
