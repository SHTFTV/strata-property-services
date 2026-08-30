type SnowRemovalVideoProps = {
  cityName: string;
  poster: string;
};

export function SnowRemovalVideo({ cityName, poster }: SnowRemovalVideoProps) {
  return (
    <section className="bg-secondary px-6 py-16 text-white" aria-labelledby="snow-video-title">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-orange-400">PlowWow field operations</p>
          <h2 id="snow-video-title" className="mb-5 text-3xl font-black md:text-4xl">
            Snow Removal in {cityName}: Ready Before the Storm
          </h2>
          <p className="mb-4 text-lg leading-relaxed text-slate-200">
            See the branded PlowWow snow-removal system used for strata, commercial and multi-family properties across {cityName}: prepared equipment, visible crews and a documented response plan.
          </p>
          <p className="text-sm leading-relaxed text-slate-400">
            Video summary: a 10-second PlowWow snow-operations brand film showing professional winter-service readiness. Strata Property Services coordinates local snow and ice service with PlowWow for seasonal contracts, plowing and de-icing.
          </p>
        </div>
        <figure className="overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl">
          <video className="aspect-video w-full object-cover" controls playsInline preload="metadata" poster={poster} aria-label={`PlowWow snow removal operations serving ${cityName}`}>
            <source src="/videos/plowwow-snow-removal-operations.mp4" type="video/mp4" />
            Your browser does not support embedded video. Call 604-761-1518 for snow-removal service in {cityName}.
          </video>
          <figcaption className="px-5 py-4 text-sm text-slate-300">PlowWow snow and ice operations serving {cityName} strata and commercial properties.</figcaption>
        </figure>
      </div>
    </section>
  );
}
