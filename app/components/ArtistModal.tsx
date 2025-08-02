import React from 'react';
import { X, Instagram, Facebook, Music, Volume2, Star } from 'lucide-react';
import artistsData from '../../data/artists.json';

interface ArtistModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'dj' | 'groupe' | null;
}

const ArtistModal: React.FC<ArtistModalProps> = ({ isOpen, onClose, type }) => {
  if (!isOpen || !type) return null;

  // Filtrer les artistes selon le type
  const filteredArtists = artistsData.artists.filter(artist => {
    if (type === 'dj') {
      return artist.tags.includes('DJ') || artist.name.toLowerCase().includes('dj');
    } else if (type === 'groupe') {
      return !artist.tags.includes('DJ') && !artist.name.toLowerCase().includes('dj');
    }
    return false;
  });

  const getTypeIcon = () => {
    return type === 'dj' ? Volume2 : Music;
  };

  const getTypeTitle = () => {
    return type === 'dj' ? 'DJ Sets' : 'Groupes Live';
  };

  const getTypeColor = () => {
    return type === 'dj' ? 'from-green-500 to-emerald-500' : 'from-pink-500 to-rose-500';
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border-2 border-pink-200">
        {/* Header */}
        <div className="sticky top-0 bg-gradient-to-r from-pink-50 to-white rounded-t-3xl p-6 border-b-2 border-pink-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-2xl bg-gradient-to-br ${getTypeColor()} shadow-lg`}>
                {React.createElement(getTypeIcon(), { className: "w-6 h-6 text-white" })}
              </div>
              <div>
                <h2 className="text-2xl font-black text-gray-800">{getTypeTitle()}</h2>
                <p className="text-gray-600">Découvrez nos artistes</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {filteredArtists.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {filteredArtists.map((artist, index) => (
                <div
                  key={artist.id}
                  className="group bg-gradient-to-br from-white to-pink-50 rounded-2xl p-6 shadow-lg border-2 border-pink-200/50 hover:shadow-xl transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Artist Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-black text-gray-800 mb-1">{artist.name}</h3>
                      <p className="text-gray-600 text-sm">{artist.description}</p>
                    </div>
                    <div className="flex gap-1">
                      {artist.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 text-xs font-semibold bg-pink-100 text-pink-700 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Artist Image Placeholder */}
                  <div className="w-full h-32 bg-gradient-to-br from-pink-200 to-rose-200 rounded-xl mb-4 flex items-center justify-center">
                    <Music className="w-8 h-8 text-pink-600" />
                  </div>

                  {/* Social Links */}
                  {artist.socialLinks && (
                    <div className="flex gap-3 mb-4">
                      {artist.socialLinks.instagram && (
                        <a
                          href={`https://instagram.com/${artist.socialLinks.instagram}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:scale-105 transition-transform duration-200"
                        >
                          <Instagram className="w-4 h-4" />
                          <span className="text-sm font-semibold">Instagram</span>
                        </a>
                      )}
                      {artist.socialLinks.facebook && (
                        <a
                          href={`https://facebook.com/${artist.socialLinks.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg hover:scale-105 transition-transform duration-200"
                        >
                          <Facebook className="w-4 h-4" />
                          <span className="text-sm font-semibold">Facebook</span>
                        </a>
                      )}
                      {artist.socialLinks.soundcloud && (
                        <a
                          href={`https://soundcloud.com/${artist.socialLinks.soundcloud}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg hover:scale-105 transition-transform duration-200"
                        >
                          <Music className="w-4 h-4" />
                          <span className="text-sm font-semibold">SoundCloud</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* Special Badge */}
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm font-semibold text-gray-700">
                      {type === 'dj' ? 'DJ Officiel' : 'Groupe Live'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Music className="w-10 h-10 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {type === 'dj' ? 'DJ Sets' : 'Groupes Live'}
              </h3>
              <p className="text-gray-600">
                Les détails des artistes seront bientôt disponibles !
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="sticky bottom-0 bg-gradient-to-r from-pink-50 to-white rounded-b-3xl p-6 border-t-2 border-pink-200">
          <div className="text-center">
            <p className="text-sm text-gray-600">
              Restez connectés pour plus d'informations sur nos artistes !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtistModal; 