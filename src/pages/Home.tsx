import React from 'react';
import { Search, ShieldCheck, Zap, Trophy, Star, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CASINOS, CATEGORIES, BLOG_POSTS } from '@/src/constants';
import { CasinoCard } from '@/src/components/CasinoCard';
import * as Icons from 'lucide-react';

export const Home = () => {
  const featuredCasino = CASINOS.find(c => c.isFeatured) || CASINOS[0];
  const latestCasinos = CASINOS.filter(c => !c.isFeatured).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gray-900 pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block bg-primary/20 text-primary text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6 border border-primary/30">
                Malaysia's #1 Casino Directory
              </span>
              <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-white mb-6 leading-tight">
                Intercalink — Pautan ke Kasino <span className="text-secondary">Terbaik</span> Malaysia
              </h1>
              <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                Sah. Trusted. Terkini. Kami mengumpul dan menyusun pautan ke laman web kasino berlesen, promosi, dan platform permainan terbaik.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative max-w-2xl mx-auto"
            >
              <div className="flex items-center bg-white rounded-2xl p-2 shadow-2xl">
                <div className="flex-grow flex items-center px-4">
                  <Search className="text-gray-400 mr-3" size={20} />
                  <input
                    type="text"
                    placeholder="Cari kasino, bonus, atau platform..."
                    className="w-full py-3 outline-none text-dark"
                  />
                </div>
                <button className="bg-primary text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-700 transition-colors hidden sm:block">
                  Search
                </button>
              </div>
            </motion.div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <ShieldCheck className="text-accent" size={18} /> Licensed Only
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Zap className="text-secondary" size={18} /> Instant Access
              </div>
              <div className="flex items-center gap-2 text-white text-sm font-medium">
                <Trophy className="text-primary" size={18} /> Top Bonuses
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Casino */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/3 bg-gray-50 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
            <img
              src={featuredCasino.logo}
              alt={featuredCasino.name}
              className="max-h-48 drop-shadow-xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="md:w-2/3 p-8 md:p-12">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="bg-secondary text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">Platinum Choice</span>
              <div className="flex items-center gap-1 text-yellow-500 font-bold">
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <Star size={16} fill="currentColor" />
                <span className="ml-1 text-dark text-sm">4.9/5.0</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">{featuredCasino.name}</h2>
            <p className="text-gray-600 mb-8 leading-relaxed max-w-xl">
              {featuredCasino.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3 text-sm font-semibold text-dark">
                <div className="bg-accent/10 p-1.5 rounded-full text-accent">
                  <Icons.Check size={14} />
                </div>
                Fastest withdrawals in MY
              </div>
              <div className="flex items-center gap-3 text-sm font-semibold text-dark">
                <div className="bg-accent/10 p-1.5 rounded-full text-accent">
                  <Icons.Check size={14} />
                </div>
                Exclusive VIP program
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={featuredCasino.visitUrl} className="gradient-btn text-center flex items-center justify-center gap-2">
                Play Now <ExternalLink size={18} />
              </a>
              <Link to={`/casino/${featuredCasino.id}`} className="py-3 px-8 rounded-lg border border-gray-200 font-bold text-gray-700 hover:bg-gray-50 transition-colors text-center">
                Read Review
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Browse by Category</h2>
            <p className="text-gray-500">Find the perfect platform for your favorite games</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => {
              const IconComponent = (Icons as any)[cat.icon] || Icons.Layout;
              return (
                <Link
                  key={cat.id}
                  to={`/directory?cat=${cat.id}`}
                  className="group bg-gray-50 hover:bg-primary p-8 rounded-2xl transition-all duration-300 text-center border border-gray-100 hover:border-primary"
                >
                  <div className="bg-white group-hover:bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm transition-colors">
                    <IconComponent className="text-primary group-hover:text-white" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-dark group-hover:text-white mb-1">{cat.name}</h3>
                  <p className="text-sm text-gray-500 group-hover:text-white/70">{cat.linkCount} Links</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Added */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-dark mb-2">Latest Added Casinos</h2>
              <p className="text-gray-500">Freshly verified platforms in Malaysia</p>
            </div>
            <Link to="/directory" className="text-primary font-bold flex items-center gap-2 hover:underline">
              View All <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestCasinos.map(casino => (
              <CasinoCard key={casino.id} casino={casino} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-20 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-50 p-4 rounded-full mb-6">
                <ShieldCheck className="text-primary" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Licensed Casinos Only</h3>
              <p className="text-gray-500 text-sm">We only list platforms with valid licenses from PAGCOR, Curacao, or MGA.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-green-50 p-4 rounded-full mb-6">
                <Icons.Lock className="text-accent" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe & Secure Links</h3>
              <p className="text-gray-500 text-sm">Every link is scanned and verified to ensure you land on the official website.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-yellow-50 p-4 rounded-full mb-6">
                <Icons.UserCheck className="text-yellow-600" size={40} />
              </div>
              <h3 className="text-xl font-bold mb-3">Expert Reviews</h3>
              <p className="text-gray-500 text-sm">Our team of experienced players tests every platform before listing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-dark mb-4">Gaming Guides & News</h2>
            <p className="text-gray-500">Stay updated with the latest in the Malaysian gaming world</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {BLOG_POSTS.map(post => (
              <Link key={post.id} to="/blog" className="group">
                <div className="rounded-2xl overflow-hidden mb-6 relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  {post.isSponsored && (
                    <div className="absolute top-4 left-4 bg-secondary text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase">
                      Sponsored
                    </div>
                  )}
                </div>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-dark group-hover:text-primary transition-colors mb-3 leading-tight">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2">{post.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to find your next winning platform?</h2>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto">
            Join thousands of Malaysian players who trust Intercalink for the most reliable and updated casino links.
          </p>
          <Link to="/directory" className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors shadow-xl inline-block">
            Explore Directory
          </Link>
        </div>
      </section>
    </div>
  );
};
