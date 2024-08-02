import React from 'react';

const SpotifySection = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4 p-4">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/49Cg8XlXuKNfWpYgwAt9hm?utm_source=generator"
        width="100%"
        height="352"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy">
      </iframe>
      <div className="flex items-center justify-center">
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold text-white">
            <p>Mi playlist favorita del</p>
            <p className="bg-gradient-to-r from-blue-400 via-green-500 to-yellow-500 bg-clip-text text-transparent hitespace-pre-wrap">momento</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpotifySection;