import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const NewsletterForm: React.FC = () => {
  return (
    <section className="mt-10 sm:mt-12 rounded-[26px] sm:rounded-[28px] border border-white/10 bg-white/5 p-6 sm:p-8 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-300/60 hover:ring-1 hover:ring-cyan-400/40 hover:shadow-cyan-500/30">
      <div className="flex flex-col gap-3">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70 font-semibold">
          Free Weekly Newsletter
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-white">
          Level up your digital product business.
        </h2>
        <p className="text-sm sm:text-base text-slate-300 max-w-[420px]">
          Actionable tactics, launch checklists, and conversion tips delivered every Tuesday.
        </p>
      </div>

      <form className="mt-6 flex flex-col gap-3 sm:flex-row">
        <label className="sr-only" htmlFor="newsletter-email">Email address</label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          required
          placeholder="you@example.com"
          className="flex-1 rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 text-sm text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
        />
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
        >
          Join free
          <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </form>

      <p className="mt-3 text-xs text-slate-500">
        Replace the form action with your email provider (Mailchimp, ConvertKit, or Beehiiv) before launch.
      </p>
    </section>
  );
};

export default NewsletterForm;
