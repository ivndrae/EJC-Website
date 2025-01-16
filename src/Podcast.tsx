import Default from './Default';

function Podcast() {
  return (
    <Default>
      <div className="flex text-white text-lg md:text-xl text-center mt-5 font-['KoHo'] tracking-wider justify-center pt-10">
        Listen to the latest episode of our podcast, now available on Spotify and Apple Music:
      </div>

      <div className="w-full max-w-3xl mx-auto my-4 pt-5 px-4">
        <iframe
          className="w-full rounded-2xl"
          height="152"
          src="https://open.spotify.com/embed/episode/5Yi7g2qQ9LSwVlxBPVuqBk?utm_source=generator"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="w-full max-w-2xl mx-auto my-4 px-4 pt-5">
        <iframe
          className="w-full h-[300px] sm:h-[375px] md:h-[450px] rounded-lg overflow-hidden"
          src="https://embed.podcasts.apple.com/us/podcast/ethics-decoded-encode-canada/id1790667591"
          frameBorder="0"
          allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
          sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        />
      </div>
    </Default>

  )
}

export default Podcast