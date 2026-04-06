import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { BLOG_POSTS } from '@/src/constants';
import { Link } from 'react-router-dom';

export const Blog = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Gaming Blog & Guides</h1>
            <p className="text-gray-500 text-lg">
              Stay ahead of the game with our expert guides, industry news, and in-depth casino reviews tailored for the Malaysian market.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {BLOG_POSTS.map(post => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  {post.isSponsored && (
                    <div className="absolute top-6 left-6 bg-secondary text-dark text-xs font-bold px-4 py-1.5 rounded-full uppercase shadow-lg">
                      Sponsored Review
                    </div>
                  )}
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex items-center gap-6 text-xs text-gray-400 font-bold uppercase tracking-widest mb-6">
                    <div className="flex items-center gap-2"><Calendar size={14} /> {post.date}</div>
                    <div className="flex items-center gap-2"><User size={14} /> {post.author}</div>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-dark mb-4 hover:text-primary transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                    {post.excerpt}
                  </p>
                  <button className="text-primary font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                    Read Full Article <ArrowRight size={18} />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-8">
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Search Blog</h3>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-12 pr-4 py-3 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-primary transition-colors"
                />
              </div>
            </div>

            <div className="bg-primary p-8 rounded-3xl text-white shadow-xl">
              <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
              <p className="text-blue-100 text-sm mb-6">Get the latest casino links and exclusive bonuses delivered to your inbox.</p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl outline-none mb-4 placeholder:text-white/50"
              />
              <button className="w-full bg-white text-primary font-bold py-3 rounded-xl hover:bg-blue-50 transition-colors">
                Join Now
              </button>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
              <h3 className="text-xl font-bold mb-6">Popular Topics</h3>
              <div className="flex flex-wrap gap-2">
                {['Strategy', 'Reviews', 'News', 'Bonuses', 'Safe Gaming', 'Mobile', 'Crypto'].map(tag => (
                  <span key={tag} className="px-4 py-2 bg-gray-50 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-100 cursor-pointer transition-colors">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};
