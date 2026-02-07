import React from 'react';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import { PROFILE_DATA, PRODUCTS } from './constants';
import SocialIcons from './components/SocialIcons';
import ProductCard from './components/ProductCard';
import NewsletterForm from './components/NewsletterForm';

const App: React.FC = () => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // Fallback to a UI-friendly initial avatar if the URL fails (Cyan-500 background)
    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(PROFILE_DATA.name)}&background=06b6d4&color=fff&size=256`;
  };

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
                <header className="flex flex-col items-center text-center mb-10 sm:mb-12">
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
