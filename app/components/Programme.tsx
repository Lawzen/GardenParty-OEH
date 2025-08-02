"use client"
import React, { useState } from 'react';
import { 
  Clock,
  MapPin,
  Sparkles,
  Music,
  Star,
  Volume2,
  AlertTriangle,
  Heart,
  Coffee,
  Shield,
  Beer,
  PartyPopper,
  Gamepad
} from 'lucide-react';
import ArtistModal from './ArtistModal';

const Programme: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'dj' | 'groupe' | null>(null);

  const handleItemClick = (title: string) => {
    if (title.toLowerCase().includes('dj')) {
      setModalType('dj');
      setModalOpen(true);
    } else if (title.toLowerCase().includes('groupe')) {
      setModalType('groupe');
      setModalOpen(true);
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
  };
  const programmeItems = [
    {
      icon: Clock,
      time: "16h00",
      title: "Ouverture de l'événement",
      description: "Début des festivités",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Music,
      time: "16h30 - 19h45",
      title: "Groupes Live",
      description: "Groupe 1 : 16h30 - 18h00 | Groupe 2 : 18h45 - 19h45",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Volume2,
      time: "20h00 - 02h00",
      title: "DJ Sets",
      description: "DJ 1 : 20h00 - 22h00 | DJ 2 : 22h00 - 00h00 | DJ 3 : 00h00 - 02h00",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: Beer,
      time: "01h30",
      title: "Fermeture du Bar ISIC",
      description: "",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: PartyPopper,
      time: "02h00",
      title: "Fermeture de l'évenement",
      description: "",
      color: "from-pink-500 to-rose-500"

    }
  ];

  const services = [
    { icon: "🎈", title: "Jeux Gonflables", description: "Structures gonflables pour s'amuser" },
    { icon: "🍕", title: "Food Trucks & Drink Truck", description: "Variété de cuisines du monde" },
    { icon: "🛡️", title: "Stands", description: "Présence de stands d'informations et de sensibilisations" },
    { icon: "🍺", title: "Bar ISIC", description: "Bar étudiant avec tarifs préférentiels" },
    { icon: "🚗", title: "Borne Éthylotest", description: "Sécurité routière assurée" },
    { icon: "📸", title: "Photobooth", description: "Souvenirs instantanés de la soirée" }
  ];

  const importantInfos = [
    {
      icon: AlertTriangle,
      title: "Pas de Vestiaire",
      description: "Préparez-vous en conséquence",
      color: "text-amber-600",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200"
    },
    {
      icon: Clock,
      title: "Fermeture du Bar",
      description: "01h30",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      icon: MapPin,
      title: "Fin de l'Événement",
      description: "02h00",
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200"
    },
    {
      icon: Coffee,
      title: "Caution ÉcoCups",
      description: "1€ par gobelet",
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      icon: Shield,
      title: "Safe' Ekip OEH",
      description: "Croix Rouge présente",
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200"
    },
    {
      icon: Heart,
      title: "Code de Sécurité",
      description: "\"Blue Lagoon\" au bar si danger",
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      borderColor: "border-pink-200"
    }
  ];

  return (
<section id="programme" className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
        {/* Titre de section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100/80 backdrop-blur-lg 
                         border-2 border-green-200 rounded-full px-6 py-3 mb-8 shadow-lg">
            <Clock className="w-4 h-4 text-green-600" />
            <span className="text-green-700 text-sm font-semibold">Programme Détaillé</span>
            <Sparkles className="w-4 h-4 text-green-600" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-green-600 via-emerald-500 to-green-400 
                           bg-clip-text text-transparent">
              DÉCOUVREZ
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-600 via-rose-500 to-pink-400 
                           bg-clip-text text-transparent">
              LE PROGRAMME
            </span>
          </h2>
          
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            Une journée complète d'animations, de musique et de festivités sous les cerisiers
          </p>
        </div>

        {/* Timeline du programme */}
        <div className="max-w-4xl mx-auto mb-48">
          <div className="relative">
            {/* Ligne de temps */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-pink-300 to-green-300 rounded-full"></div>
            
            {programmeItems.map((item, index) => {
              const IconComponent = item.icon;
              const isLeft = index % 2 === 0;
              
              return (
                <div key={index} className="relative flex items-center mb-12">
                  {/* Point sur la timeline */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full 
                                 bg-gradient-to-br ${item.color} shadow-xl z-10 flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  
                                     {/* Contenu */}
                   <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'ml-auto pl-8 text-left'}`}>
                     <div 
                       className={`bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border-2 
                                  ${isLeft ? 'border-pink-200' : 'border-green-200'} 
                                  hover:scale-105 transition-all duration-300 hover:shadow-xl cursor-pointer`}
                       onClick={() => handleItemClick(item.title)}
                     >
                      <div className={`text-sm font-bold mb-2 ${isLeft ? 'text-pink-600' : 'text-green-600'}`}>
                        {item.time}
                      </div>
                                             <h3 className="text-xl font-bold text-base-content mb-2">{item.title}</h3>
                       <div className="text-base-content/70 space-y-2">
                         {item.description.includes('|') ? (
                           item.description.split('|').map((part, idx) => (
                             <p key={idx} className="text-sm leading-relaxed">
                               {part.trim()}
                             </p>
                           ))
                         ) : (
                           <p className="text-sm leading-relaxed">{item.description}</p>
                         )}
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Services et animations 
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-600 to-pink-600 bg-clip-text text-transparent">
              Services & Animations
            </span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} 
                   className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border-2 border-pink-200/50
                            hover:scale-105 transition-all duration-300 hover:shadow-xl text-center"
                   style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-4xl mb-4">{service.icon}</div>
                                 <h4 className="text-lg font-bold text-base-content mb-3">{service.title}</h4>
                 <div className="text-base-content/70 text-sm leading-relaxed">
                   {service.description}
                 </div>
              </div>
            ))}
          </div>
        </div>*/}

        {/* Informations importantes - UI complètement repensée */}
<div className="space-y-8 ">
  <div className="text-center">
    <h3 className="text-3xl md:text-4xl font-bold ">
      <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
        Informations Importantes
      </span>
    </h3>
    <p className="text-lg text-base-content/70">
      Tout ce que vous devez savoir pour passer une soirée en toute sécurité
    </p>
  </div>

  {/* Container principal avec design moderne */}
  <div className="bg-gradient-to-br from-white/90 to-pink-50/90  rounded-3xl p-8 mb-20 border-2 border-pink-200 shadow-xl">
    
    {/* Section Pratique */}
    <div className="mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Clock className="w-6 h-6 text-pink-500" />
        Infos Pratiques
      </h4>
      
      <div className="grid md:grid-cols-2 gap-4">
        {/* Pas de vestiaire */}
        <div className="flex items-center gap-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-4">
          <div className="bg-amber-100 p-2 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <div>
            <h5 className="font-semibold text-amber-800">Pas de Vestiaire</h5>
            <p className="text-sm text-amber-700">Préparez-vous en conséquence</p>
          </div>
        </div>

        {/* Caution ÉcoCups */}
        <div className="flex items-center gap-4 bg-green-50 border-l-4 border-green-400 rounded-r-xl p-4">
          <div className="bg-green-100 p-2 rounded-lg">
            <Coffee className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <h5 className="font-semibold text-green-800">Caution ÉcoCups</h5>
            <p className="text-sm text-green-700">1€ par gobelet réutilisable</p>
          </div>
        </div>
      </div>
    </div>

    {/* Section Horaires */}
    <div className="mb-8">
      <h4 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
        <Clock className="w-6 h-6 text-blue-500" />
        Horaires de Fermeture
      </h4>
      
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <Clock className="w-8 h-8 text-blue-600" />
            </div>
            <h5 className="text-lg font-bold text-blue-800 mb-1">Fermeture du Bar</h5>
            <p className="text-2xl font-black text-blue-600">01h30</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin className="w-8 h-8 text-purple-600" />
            </div>
            <h5 className="text-lg font-bold text-purple-800 mb-1">Fin de l'Événement</h5>
            <p className="text-2xl font-black text-purple-600">02h00</p>
          </div>
        </div>
      </div>
    </div>
  </div>



          {/* Message de sécurité spécial */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 border-2 border-red-200 rounded-2xl p-8 shadow-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
                <h4 className="text-2xl font-bold text-red-700">Ta Sécurité, Notre Priorité</h4>
                <Heart className="w-8 h-8 text-red-500 animate-pulse" />
              </div>
              
              <div className="bg-white/80 rounded-xl p-6 border-2 border-red-200">
                <p className="text-lg text-red-700 mb-2 font-semibold">
                  🆘 Code de Sécurité : "Blue Lagoon"
                </p>
                <p className="text-red-600">
                  Si tu ne te sens pas en sécurité, va au bar et demande un <strong>"Blue Lagoon"</strong>. 
                  Notre équipe Safe' Ekip OEH est là pour t'aider discrètement.
                </p>
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6 text-sm text-red-600">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  <span>Safe' Ekip OEH</span>
                </div>
              </div>
            </div>
          </div>
                 </div>
       </div>

       {/* Modal pour les artistes */}
       <ArtistModal 
         isOpen={modalOpen}
         onClose={closeModal}
         type={modalType}
       />
     </section>
   );
 };

export default Programme;
