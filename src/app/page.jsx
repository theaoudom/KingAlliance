"use client";

import React from 'react';
import Link from 'next/link';
import {
  ArrowRight, Facebook, Calendar, Users, BookOpen,
  Shirt, Newspaper, PlayCircle, MapPin, Shield, Trophy, Clock,
} from 'lucide-react';
import { getLastMatch } from '../data/fixtures';
import { clubArticles } from '../data/news';

const lastMatch = getLastMatch();
const yearsActive = new Date().getFullYear() - 2016;

/* ── helpers ── */
const ResultBadge = ({ result }) => {
  if (!result) return null;
  const letter = result.charAt(0);
  const map = { W: ['bg-green-500', 'WIN'], D: ['bg-gray-500', 'DRAW'], L: ['bg-red-500', 'LOSS'] };
  const [cls, label] = map[letter] || map['D'];
  return <span className={`${cls} text-white text-xs font-black px-4 py-1.5 rounded-full tracking-widest`}>{label}</span>;
};

const SectionLabel = ({ children }) => (
  <p className="text-xs text-[#d4af37] font-black uppercase tracking-widest mb-2">{children}</p>
);

/* ── brotherhood photos ── */
const brotherhoodPhotos = [
  { imageUrl: "/images/team/activity_2018_a.jpg", caption: "After the match" },
  { imageUrl: "/images/team/activity_2018_b.jpg", caption: "The squad gathers" },
  { imageUrl: "/images/team/activity_2018_c.jpg", caption: "Muddy but proud" },
  { imageUrl: "/images/team/activity_2018_d.jpg", caption: "Brothers on the pitch" },
];

/* ── year photos ── */
const teamEras = [
  { year: "2016", imageUrl: "/images/team/2016_team.png", label: "The Beginning" },
  { year: "2018", imageUrl: "/images/team/2018_team.jpg", label: "King United Era" },
  { year: "2019", imageUrl: "/images/team/2019_team.jpg", label: "Growing the Squad" },
  { year: "2021", imageUrl: "/images/team/2021_team.png", label: "The Return" },
  { year: "2022", imageUrl: "/images/team/2025_team.png", label: "The Golden Kit" },
];

/* ─────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="bg-white">

      {/* ── 1. HERO ── */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center text-white overflow-hidden">
        <img
          src="/images/team/2025_team.png"
          alt="King Alliance FC 2025"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/95" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 rounded-full bg-[#d4af37] blur-xl opacity-25 scale-150" />
            <img
              src="/images/logo/logo.png"
              alt="King Alliance FC"
              className="relative h-24 w-24 rounded-full border-2 border-[#d4af37]/50 shadow-2xl"
            />
          </div>

          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-10 bg-[#d4af37]/60" />
            <p className="text-[#d4af37] font-bold tracking-[0.35em] uppercase text-xs">
              Est. 2016 &nbsp;•&nbsp; Kompong Popil
            </p>
            <div className="h-px w-10 bg-[#d4af37]/60" />
          </div>

          <h1
            className="font-black uppercase leading-[0.9] tracking-tight"
            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.7)', fontSize: 'clamp(3.5rem, 12vw, 7rem)' }}
          >
            <span className="block text-white">King</span>
            <span className="block text-[#d4af37]">Alliance</span>
          </h1>

          <div className="w-24 h-1 bg-[#d4af37] rounded-full mt-6 mb-5" />
          <p className="text-white/70 text-base md:text-lg font-light tracking-[0.15em] uppercase">
            Brotherhood &nbsp;·&nbsp; Passion &nbsp;·&nbsp; Football
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full max-w-sm sm:max-w-none sm:justify-center">
            <Link
              href="/players"
              className="bg-[#d4af37] text-[#201d2a] px-8 py-4 font-black rounded-xl flex items-center justify-center hover:bg-yellow-300 transition-all duration-300 hover:scale-105 shadow-xl text-sm uppercase tracking-wider"
            >
              Meet the Squad <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/fixtures"
              className="border-2 border-white/30 text-white px-8 py-4 font-bold rounded-xl flex items-center justify-center hover:bg-white/10 hover:border-white/60 transition-all duration-300 backdrop-blur-sm text-sm uppercase tracking-wider"
            >
              View Fixtures
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-white text-[10px] uppercase tracking-widest">Scroll</span>
          <div className="w-5 h-8 border border-white/40 rounded-full flex justify-center pt-1.5">
            <div className="w-0.5 h-2 bg-white rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* ── 2. STATS BAR ── */}
      <section className="bg-[#201d2a]">
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex flex-wrap items-stretch justify-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { value: "2016", label: "Founded", icon: Trophy },
              { value: yearsActive, label: "Years of Football", icon: Clock },
              { value: "KPP", label: "Home Ground", icon: MapPin },
            ].map(({ value, label, icon: Icon }) => (
              <div key={label} className="group flex-1 min-w-[140px] text-center py-10 px-6">
                <Icon className="h-4 w-4 text-[#d4af37]/50 mx-auto mb-3 group-hover:text-[#d4af37] transition-colors duration-300" />
                <div className="text-4xl md:text-5xl font-black text-[#d4af37] group-hover:scale-105 transition-transform duration-300 origin-bottom">
                  {value}
                </div>
                <div className="mt-2 text-xs text-gray-500 font-semibold uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. LATEST RESULT ── */}
      {lastMatch && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="flex items-end justify-between mb-10">
              <div>
                <SectionLabel>Match Centre</SectionLabel>
                <h2 className="text-3xl md:text-4xl font-extrabold text-[#201d2a]">Latest Result</h2>
              </div>
              <Link href="/fixtures" className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#d4af37] font-semibold transition-colors pb-1">
                All Results <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="relative bg-[#201d2a] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none" />

              <div className="flex flex-wrap items-center justify-between gap-2 px-8 py-4 border-b border-white/8 text-xs text-gray-500">
                <span className="flex items-center gap-1.5"><Shield size={12} className="text-[#d4af37]/50" />{lastMatch.competition}</span>
                <span className="flex items-center gap-1.5"><Calendar size={12} className="text-[#d4af37]/50" />
                  {new Date(lastMatch.date).toLocaleDateString('en-US', { weekday: 'short', month: 'long', day: 'numeric', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-1.5"><MapPin size={12} className="text-[#d4af37]/50" />{lastMatch.venue}</span>
              </div>

              <div className="px-8 py-12 flex items-center justify-between text-white gap-4">
                <div className="flex flex-col items-center flex-1 text-center gap-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-[#d4af37]/15 rounded-full blur-xl scale-150" />
                    {lastMatch.homeTeam.logoUrl
                      ? <img src={lastMatch.homeTeam.logoUrl} alt={lastMatch.homeTeam.name} className="relative h-20 w-20 object-contain" />
                      : <Shield size={72} className="relative text-gray-500" />}
                  </div>
                  <span className="font-bold text-sm max-w-[110px] leading-snug">{lastMatch.homeTeam.name}</span>
                </div>

                <div className="text-center flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="text-6xl md:text-7xl font-black tracking-tighter leading-none" style={{ textShadow: '0 0 40px rgba(212,175,55,0.2)' }}>
                    {lastMatch.score}
                  </div>
                  <ResultBadge result={lastMatch.result} />
                  <span className="text-gray-600 text-xs uppercase tracking-widest">Full Time</span>
                </div>

                <div className="flex flex-col items-center flex-1 text-center gap-3">
                  {lastMatch.awayTeam.logoUrl
                    ? <img src={lastMatch.awayTeam.logoUrl} alt={lastMatch.awayTeam.name} className="h-20 w-20 object-contain" />
                    : <Shield size={72} className="text-gray-500" />}
                  <span className="font-bold text-sm max-w-[110px] leading-snug">{lastMatch.awayTeam.name}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── 4. LATEST NEWS ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>Club Updates</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#201d2a]">Latest News</h2>
            </div>
            <Link href="/latest" className="flex items-center gap-1 text-sm text-gray-400 hover:text-[#d4af37] font-semibold transition-colors pb-1">
              All News <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clubArticles.map((article, i) => (
              <Link
                key={article.id}
                href={article.link}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-4 left-4 bg-[#d4af37] text-[#201d2a] text-xs font-black uppercase px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-xs text-gray-400 mb-2">
                    {new Date(article.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                  </p>
                  <h3 className="font-bold text-[#201d2a] text-lg leading-snug group-hover:text-[#d4af37] transition-colors duration-200">
                    {article.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-2 leading-relaxed line-clamp-2">{article.summary}</p>
                  <div className="mt-4 flex items-center gap-1.5 text-[#d4af37] text-sm font-bold">
                    Read more <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>


      {/* ── 6. PHOTO TIMELINE ── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>Through The Years</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#201d2a]">The Club in Photos</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {teamEras.map(({ year, imageUrl, label }) => (
              <Link
                key={year}
                href="/history"
                className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[3/4]"
              >
                <img
                  src={imageUrl}
                  alt={`King Alliance FC ${year}`}
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-[#d4af37] text-xs font-black uppercase tracking-widest">{year}</p>
                  <p className="text-white font-bold text-sm">{label}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. BROTHERHOOD STRIP ── */}
      <section className="py-20 bg-[#201d2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <SectionLabel>King United Era · 2018</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Brotherhood</h2>
            <p className="mt-2 text-gray-400 max-w-xl">Mud on the boots, smiles on their faces. These are the moments that built the club.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {brotherhoodPhotos.map(({ imageUrl, caption }) => (
              <div key={imageUrl} className="group relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg">
                <img
                  src={imageUrl}
                  alt={caption}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold">{caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 8. EXPLORE ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SectionLabel>The Club</SectionLabel>
            <h2 className="text-4xl font-extrabold text-[#201d2a]">Explore King Alliance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/players" className="group md:col-span-2 relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[320px]">
              <img src="/images/team/2025_team.png" alt="The Squad" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <SectionLabel>2025 Roster</SectionLabel>
                <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">The Squad</h3>
                <p className="text-white/60 text-sm mt-2 mb-5">Meet every player representing King Alliance FC</p>
                <div className="inline-flex items-center gap-2 text-[#d4af37] text-sm font-bold border-b border-[#d4af37]/40 pb-0.5 group-hover:border-[#d4af37] transition-colors">
                  View Squad <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <Users className="absolute top-6 right-6 h-12 w-12 text-white/10" />
            </Link>

            <Link href="/fixtures" className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[320px]">
              <img src="/images/team/fixtures_hero.jpg" alt="Fixtures & Results" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <SectionLabel>All Seasons</SectionLabel>
                <h3 className="text-2xl md:text-3xl font-black text-white leading-tight">Fixtures &amp; Results</h3>
                <p className="text-white/60 text-sm mt-2 mb-5">Every match, every scoreline</p>
                <div className="inline-flex items-center gap-2 text-[#d4af37] text-sm font-bold border-b border-[#d4af37]/40 pb-0.5 group-hover:border-[#d4af37] transition-colors">
                  View All <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
              <Calendar className="absolute top-6 right-6 h-10 w-10 text-white/20" />
            </Link>

            <Link href="/history" className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[220px]">
              <img src="/images/team/2016_team.png" alt="Club History" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <SectionLabel>Est. 2016</SectionLabel>
                <h3 className="text-xl font-black text-white">Club History</h3>
                <div className="mt-2 inline-flex items-center gap-1 text-white/60 text-xs font-semibold">
                  Our journey <ArrowRight className="h-3 w-3" />
                </div>
              </div>
              <BookOpen className="absolute top-5 right-5 h-8 w-8 text-white/15" />
            </Link>

            <Link href="/kit" className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[220px]">
              <img src="/images/kits/2019_team_kit.png" alt="The Kits" className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <SectionLabel>Wear the Colors</SectionLabel>
                <h3 className="text-xl font-black text-white">The Kits</h3>
                <div className="mt-2 inline-flex items-center gap-1 text-white/60 text-xs font-semibold">
                  Explore <ArrowRight className="h-3 w-3" />
                </div>
              </div>
              <Shirt className="absolute top-5 right-5 h-8 w-8 text-white/15" />
            </Link>

            <Link href="/latest" className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 min-h-[220px]">
              <img src="/images/team/2021_team.png" alt="Latest News" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <SectionLabel>Club Updates</SectionLabel>
                <h3 className="text-xl font-black text-white">Latest News</h3>
                <div className="mt-2 inline-flex items-center gap-1 text-white/60 text-xs font-semibold">
                  Read more <ArrowRight className="h-3 w-3" />
                </div>
              </div>
              <Newspaper className="absolute top-5 right-5 h-8 w-8 text-white/15" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 8. FEATURED VIDEO ── */}
      <section className="py-20 bg-[#201d2a]">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-end justify-between mb-10">
            <div>
              <SectionLabel>Behind The Scenes</SectionLabel>
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Latest Video</h2>
            </div>
            <a href="https://web.facebook.com/kingalliance1" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-[#d4af37] font-semibold transition-colors pb-1">
              <Facebook size={14} /> More on Facebook
            </a>
          </div>

          <a
            href="https://web.facebook.com/share/v/16tvkgdWrN/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 hover:ring-[#d4af37]/30 transition-all duration-300"
          >
            <img src="/images/tumnail_vdo1.png" alt="Post-match interview" className="w-full object-cover group-hover:scale-[1.02] transition-transform duration-700" />
            <div className="absolute inset-0 bg-black/50 group-hover:bg-black/35 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#d4af37] rounded-full blur-xl opacity-0 group-hover:opacity-40 scale-150 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 border-2 border-white/50 group-hover:border-[#d4af37] group-hover:bg-[#d4af37]/20 transition-all duration-300 backdrop-blur-sm">
                  <PlayCircle className="h-10 w-10 text-white group-hover:text-[#d4af37] transition-colors duration-300" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-7 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-white font-bold text-base md:text-lg leading-snug">
                    កិច្ចសម្ភាសចំណាប់អារម្មណ៍កីឡាករនៅពេលប្រកួតចប់
                  </p>
                  <p className="text-gray-400 text-sm mt-1.5 flex items-center gap-2">
                    <span className="bg-white/10 text-white px-2 py-0.5 rounded text-xs font-mono">1:21</span>
                    Post-match interview
                  </p>
                </div>
                <span className="flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[#d4af37] text-xs font-bold uppercase tracking-wider">
                  Watch →
                </span>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* ── 9. FACEBOOK CTA ── */}
      <section className="relative py-24 overflow-hidden bg-gray-50">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#d4af37]/5 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-lg mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#1877f2]/10 mb-6">
            <Facebook className="h-8 w-8 text-[#1877f2]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#201d2a] leading-tight">
            Stay Connected<br />
            <span className="text-[#d4af37]">with the Club</span>
          </h2>
          <p className="text-gray-500 mt-4 mb-8 leading-relaxed">
            Follow us on Facebook for live match updates, behind-the-scenes content, photos, and the latest club news.
          </p>
          <a
            href="https://web.facebook.com/kingalliance1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#1877f2] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#1464d2] transition-all duration-300 hover:scale-105 shadow-lg shadow-blue-500/20 text-sm"
          >
            <Facebook className="h-5 w-5" />
            Follow King Alliance FC
          </a>
          <p className="mt-5 text-xs text-gray-400 flex items-center justify-center gap-1.5">
            <MapPin size={11} />
            Kompong Popil, Prey Veng, Cambodia
          </p>
        </div>
      </section>

    </div>
  );
}
