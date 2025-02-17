import Default from './Default';

function Podcast() {
  return (
    <Default>
      <div className="flex text-white text-lg md:text-xl text-center mt-5 font-['KoHo'] tracking-wider justify-center pt-10">
        Listen to the latest episodes of our podcast:
      </div>

      <div className="flex text-white text-2xl md:text-3xl text-center tracking-wider justify-center pt-5">
      <a className="flex mx-6 scale-150" href="https://podcasts.apple.com/ca/podcast/ethics-decoded/id1790667591"><i className="bi bi-apple"></i></a>
      <a className="flex mx-6 scale-150" href="https://open.spotify.com/show/1SHQckfrxnPl1aMFiGnviH?si=9e0d16dda5b34c3c"><i className="bi bi-spotify"></i></a>
      </div>

      <div className="w-full max-w-3xl mx-auto my-4 pt-5 px-4">
        <iframe
          className="w-full rounded-2xl"
          height="152"
          src="https://open.spotify.com/embed/episode/0t9v5Leo9nLQXoChOTV9mS?utm_source=generator"
          frameBorder="0"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          allowFullScreen
          loading="lazy"
        />
      </div>

      <div className="w-full max-w-3xl mx-auto my-4 pt-5 px-4">
      <iframe className="w-full rounded-2xl" src="https://open.spotify.com/embed/episode/5Yi7g2qQ9LSwVlxBPVuqBk?utm_source=generator" height="152" frameBorder="0" allowFullScreen  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
      </div>
    </Default>

  )
}

export default Podcast