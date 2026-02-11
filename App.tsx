import React from 'react';
import { Routes, Route, Link, NavLink, useParams } from 'react-router-dom';
import { PROFILE_DATA, PRODUCTS } from './constants';
import SocialIcons from './components/SocialIcons';
import ProductCard from './components/ProductCard';
import NewsletterForm from './components/NewsletterForm';

const App: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to a UI-friendly initial avatar if the URL fails (Cyan-500 background)
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PROFILE_DATA.name)}&background=06b6d4&color=fff&size=256`;
  };
  const opportunityPoints = [
    'Get paid up to 50% for sharing viral products.',
    'Use a simple copy-and-paste system.',
    'Build uncapped income potential from your phone.'
  ];

  return (
    <div className="min-h-screen pb-24 selection:bg-cyan-500/30 text-slate-100">
      {/* Premium Background Layer */}
      <div className="fixed inset-0 -z-10 pointer-events-none bg-[#05070d]">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-[900px] h-[600px] bg-cyan-500/10 blur-[140px] rounded-full opacity-60" />
        <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-500/10 blur-[140px] rounded-full opacity-60" />
      </div>

      {/* Main Container - Exact Stan Store Width */}
      <div className="max-w-[560px] mx-auto px-5 sm:px-6 md:px-8 pt-10 sm:pt-16 md:pt-20">
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Profile Header */}
                <header className="flex flex-col items-center sm:items-start text-center sm:text-left mb-10 sm:mb-12">
                  <nav className="w-full mb-6">
                    <ul className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <li>
                        <NavLink
                          to="/"
                          end
                          className={({ isActive }) =>
                            `inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] transition ${
                              isActive
                                ? 'border-cyan-300/50 bg-cyan-400/20 text-cyan-100'
                                : 'border-white/15 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100'
                            }`
                          }
                        >
                          Home
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/opportunity"
                          className={({ isActive }) =>
                            `inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] transition ${
                              isActive
                                ? 'border-cyan-300/50 bg-cyan-400/20 text-cyan-100'
                                : 'border-white/15 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100'
                            }`
                          }
                        >
                          Opportunity
                        </NavLink>
                      </li>
                      <li>
                        <NavLink
                          to="/farmasi"
                          className={({ isActive }) =>
                            `inline-flex items-center rounded-full border px-3 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] transition ${
                              isActive
                                ? 'border-cyan-300/50 bg-cyan-400/20 text-cyan-100'
                                : 'border-white/15 bg-white/5 text-slate-300 hover:border-cyan-300/40 hover:text-cyan-100'
                            }`
                          }
                        >
                          Farmasi
                        </NavLink>
                      </li>
                    </ul>
                  </nav>

                  <div className="relative mb-6">
                    {/* Profile Image Container */}
                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full border-[4px] border-slate-800/80 p-1.5 bg-slate-900 shadow-2xl overflow-hidden ring-4 ring-cyan-500/10">
                      <img
                        src={PROFILE_DATA.avatarUrl}
                        alt={PROFILE_DATA.name}
                        className="w-full h-full rounded-full object-cover shadow-inner"
                        onError={handleImageError}
                      />
                    </div>
                  </div>
                  
                  <h1 className="text-2xl sm:text-3xl md:text-[34px] font-extrabold tracking-tight text-white mb-1.5">
                    {PROFILE_DATA.name}
                  </h1>
                  <p className="text-cyan-200 font-semibold text-[10px] sm:text-xs md:text-sm mb-4 tracking-[0.3em] uppercase">
                    {PROFILE_DATA.username}
                  </p>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-[420px] font-medium px-2 sm:px-4">
                    {PROFILE_DATA.bio}
                  </p>

                  <SocialIcons socials={PROFILE_DATA.socials} />

                  <div className="w-full mt-6 group relative p-4 sm:p-5 md:p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-[22px] sm:rounded-[24px] shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:border-cyan-300/60 hover:ring-1 hover:ring-cyan-400/40 hover:shadow-cyan-500/30 animate-fade-slide-up">
                    <p className="text-[10px] sm:text-xs text-cyan-200 font-semibold tracking-[0.3em] uppercase mb-2">
                      Opportunity
                    </p>
                    <Link
                      to="/opportunity"
                      className="block group-hover:text-cyan-100 transition-colors"
                      aria-label="View opportunity details"
                    >
                      <h2 className="text-[20px] sm:text-[22px] md:text-[26px] font-bold leading-snug text-white tracking-tight max-w-[46ch] mx-auto sm:mx-0">
                        {PROFILE_DATA.mainHeading}
                      </h2>
                    </Link>

                    <ul className="mt-4 space-y-2 text-center sm:text-left">
                      {opportunityPoints.map((point) => (
                        <li key={point} className="flex items-start justify-center sm:justify-start gap-2 text-sm sm:text-[15px] text-slate-200">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      to="/opportunity"
                      className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/20 px-4 py-3 text-sm sm:text-base font-bold text-cyan-100 shadow-inner transition-all duration-300 hover:bg-cyan-300 hover:text-slate-900 hover:border-cyan-200"
                    >
                      Learn More About The Opportunity
                    </Link>
                    <Link
                      to="/farmasi"
                      className="mt-3 inline-flex w-full items-center justify-center rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm sm:text-base font-semibold text-slate-100 transition-all duration-300 hover:bg-white/10 hover:border-cyan-300/40 hover:text-cyan-100"
                    >
                      Learn More About Farmasi
                    </Link>
                  </div>

                </header>

                {/* Product List */}
                <main className="space-y-3 sm:space-y-4">
                  {PRODUCTS.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </main>

                <NewsletterForm />
              </>
            }
          />
          <Route path="/product/:slug" element={<ProductDetail />} />
          <Route path="/opportunity" element={<OpportunityPage />} />
          <Route path="/farmasi" element={<FarmasiPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer */}
        <footer className="mt-24 text-center">
          <div className="flex flex-col items-center gap-1 opacity-40">
            <p className="text-[10px] text-slate-500 uppercase tracking-[0.4em] font-black">
              © 2026 {PROFILE_DATA.name}
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const ProductDetail: React.FC = () => {
  const { slug } = useParams();
  const product = PRODUCTS.find((item) => item.link === `/product/${slug}`);

  if (!product) {
    return <NotFound />;
  }

  return (
    <section className="space-y-6">
      <Link to="/" className="text-xs uppercase tracking-[0.3em] text-cyan-200 hover:text-cyan-100">
        ← Back to store
      </Link>
      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl">
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70 font-semibold">
              Digital Resource
            </p>
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mt-2">
              {product.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3">
              {product.description || product.subtitle}
            </p>
          </div>

          {product.highlights && (
            <ul className="grid gap-2 text-sm text-slate-200">
              {product.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {product.price && (
            <div className="flex items-center justify-between border-t border-white/10 pt-4">
              <span className="text-sm text-slate-400">Full access</span>
              <span className="text-lg font-semibold text-cyan-100">{product.price}</span>
            </div>
          )}

          <a
            href="https://levelupwithkerrieoliver.com/checkout"
            className="inline-flex items-center justify-center rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            target="_blank"
            rel="noreferrer"
          >
            Get instant access
          </a>
        </div>
      </div>
    </section>
  );
};

const OpportunityPage: React.FC = () => {
  const learnPoints = [
    'How to earn up to 50% by sharing viral products.',
    'How to start with a simple copy-and-paste system.',
    'How to build uncapped income potential from your phone.',
    'How to create income around your current commitments.'
  ];

  return (
    <section className="space-y-6">
      <Link to="/" className="text-xs uppercase tracking-[0.3em] text-cyan-200 hover:text-cyan-100">
        ← Back to main page
      </Link>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl animate-fade-slide-up">
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80 font-semibold">
              Opportunity
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight tracking-tight">
              Join the #1 UK Team
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Work with our team and earn by sharing high-demand digital products, even if you are starting from scratch.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">What You&apos;ll Learn</h2>
            <ul className="space-y-2">
              {learnPoints.map((point) => (
                <li key={point} className="flex items-start justify-center sm:justify-start gap-2 text-sm sm:text-base text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.levelupwithkerrieoliver.com/opportunity"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/20 px-4 py-3 text-sm sm:text-base font-bold text-cyan-100 shadow-inner transition-all duration-300 hover:bg-cyan-300 hover:text-slate-900 hover:border-cyan-200"
            >
              Yes Kerrie, Send Me The Presentation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const FarmasiPage: React.FC = () => {
  const featuredVideoUrl = 'https://www.youtube.com/embed/rGebBlaK87s';
  const kerrieImageUrl = 'https://d1yei2z3i6k35z.cloudfront.net/11889457/67fe423e3055b_Copyoffunnelpic-45.png';
  const meetKerrieStory = [
    "Hi, I'm Kerrie. My journey has been shaped by early motherhood, health challenges, and a long-standing passion for networking and beauty. At 17, I became a mum, and by 18, I joined my first party-plan business to create more freedom and flexibility.",
    "Over the years, I trained as a beauty therapist and makeup artist, and I have now been self-employed for more than 25 years. In the last five years, I focused heavily on building online through social media.",
    "In August 2023, I was diagnosed with breast cancer and stepped back briefly. The community, purpose, and friendships in this industry brought me back, and I returned with renewed focus and gratitude.",
    "Today, I help women build flexible online income around real-life commitments, especially those managing family responsibilities or health challenges."
  ];
  const meetKerrieHighlights = [
    '25+ years in business',
    'Beauty therapist and makeup artist',
    'Built online through social media',
    'Focused on flexible income for women'
  ];
  const additionalVideos = [
    { title: 'Farmasi Story', url: 'https://www.youtube.com/embed/v7xcEdTMkyA', type: 'youtube' as const },
    { title: 'Visit Farmacity', url: 'https://www.youtube.com/embed/RvsoWjpVkpA', type: 'youtube' as const },
    { title: '10 Ways To Get Paid', url: 'https://www.youtube.com/embed/_q8VDB54NZE', type: 'youtube' as const },
    {
      title: 'Team Freedom Intro',
      url: 'https://d1yei2z3i6k35z.cloudfront.net/11889457/67fe429b49dde_7151877424398391052.mp4',
      type: 'mp4' as const
    }
  ];
  const whyFarmasi = [
    '70+ year old company.',
    '500+ products.',
    'Certified and toxic-free products.',
    'Formulates products in-house.',
    'Cash rich and debt free.',
    '33+ countries and growing.',
    'Luxury products at affordable prices.',
    'Pays 35% more than industry average.',
    'Daily incentives and prizes.',
    'Company trips and worldwide travel.',
    'Recognized as one of the fastest-growing and most innovative direct sales companies.'
  ];

  const successNames = [
    'Joanna Leyan Bacon',
    'Letasha Bolton',
    'Elizabeth McPhillips',
    'Hannah Pickering'
  ];

  return (
    <section className="space-y-6">
      <Link to="/" className="text-xs uppercase tracking-[0.3em] text-cyan-200 hover:text-cyan-100">
        ← Back to main page
      </Link>

      <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl animate-fade-slide-up">
        <div className="flex flex-col gap-6 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80 font-semibold">
              Farmasi
            </p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mt-2 leading-tight tracking-tight">
              Join Team Freedom
            </h1>
            <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
              Build an online income with Team Freedom while sharing products people already love.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">Watch The Overview</h2>
            <p className="text-sm sm:text-base text-slate-300 mb-4">
              Watch this quick walkthrough to understand how Team Freedom and Farmasi work.
            </p>
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10 bg-black/40 pt-[56.25%]">
              <iframe
                src={featuredVideoUrl}
                title="Farmasi Team Freedom overview video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4 sm:p-5">
            <div className="grid gap-5 sm:gap-6 md:grid-cols-[210px,1fr] md:items-start">
              <div className="mx-auto md:mx-0 w-full max-w-[210px]">
                <img
                  src={kerrieImageUrl}
                  alt="Kerrie"
                  className="w-full aspect-[4/5] rounded-2xl object-cover border border-white/10 shadow-lg"
                  loading="lazy"
                />
                <div className="mt-3 rounded-xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-2">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-cyan-100 font-semibold">Team Freedom</p>
                  <p className="text-sm text-slate-200 mt-1">Founder-led mentorship and support.</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/80 font-semibold">Founder Story</p>
                  <h2 className="text-xl sm:text-2xl font-bold text-white mt-2">Meet Kerrie</h2>
                </div>

                <div className="space-y-3 text-sm sm:text-base text-slate-200 leading-relaxed">
                  {meetKerrieStory.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {meetKerrieHighlights.map((highlight) => (
                    <div key={highlight} className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-100">
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">Why Farmasi</h2>
            <ul className="space-y-2">
              {whyFarmasi.map((point) => (
                <li key={point} className="flex items-start justify-center sm:justify-start gap-2 text-sm sm:text-base text-slate-200">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300 flex-shrink-0" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">More Videos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {additionalVideos.map((video) => (
                <div key={video.url} className="rounded-xl border border-white/10 bg-black/30 p-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-cyan-200 mb-2 px-1">{video.title}</p>
                  {video.type === 'youtube' ? (
                    <div className="relative w-full overflow-hidden rounded-lg border border-white/10 bg-black/40 pt-[56.25%]">
                      <iframe
                        src={video.url}
                        title={video.title}
                        className="absolute inset-0 h-full w-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <video
                      controls
                      className="w-full rounded-lg border border-white/10 bg-black"
                      preload="metadata"
                    >
                      <source src={video.url} type="video/mp4" />
                    </video>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/20 p-4 sm:p-5">
            <h2 className="text-base sm:text-lg font-bold text-white mb-3">Success Leaves Clues</h2>
            <p className="text-sm sm:text-base text-slate-300 mb-3">
              These ladies are living proof that anyone, no matter their background or circumstances, can be successful with Team Freedom.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {successNames.map((name) => (
                <div key={name} className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100">
                  {name}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/30 bg-cyan-400/10 p-4 sm:p-5">
            <p className="text-sm sm:text-base text-cyan-100 font-semibold">
              Plus access to our free beginners course for anyone who activates their Farmasi account.
            </p>
            <p className="text-sm sm:text-base text-slate-200 mt-2">
              Get started for just £20/$20 with a sample kit.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="https://www.levelupwithkerrieoliver.com/farmasi"
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center rounded-xl border border-cyan-300/40 bg-cyan-400/20 px-4 py-3 text-sm sm:text-base font-bold text-cyan-100 shadow-inner transition-all duration-300 hover:bg-cyan-300 hover:text-slate-900 hover:border-cyan-200"
            >
              Join Team Freedom Here
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const NotFound: React.FC = () => (
  <section className="text-center space-y-4">
    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70 font-semibold">
      Page not found
    </p>
    <h1 className="text-2xl sm:text-3xl font-semibold text-white">Let’s get you back.</h1>
    <Link to="/" className="text-sm text-cyan-200 hover:text-cyan-100">
      Return to the main page
    </Link>
  </section>
);

export default App;
