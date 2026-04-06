import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, ExternalLink, Info } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <span className="text-2xl font-heading font-extrabold text-white tracking-tighter">
                Intercalink
              </span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Pautan ke kasino terbaik Malaysia. Sah. Trusted. Terkini. We curate the most reliable gaming platforms for Malaysian players.
            </p>
            <div className="flex items-center gap-4">
              <div className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <Mail size={18} />
              </div>
              <div className="bg-gray-800 p-2 rounded-full hover:bg-primary transition-colors cursor-pointer">
                <Info size={18} />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/directory" className="hover:text-primary transition-colors">Casino Directory</Link></li>
              <li><Link to="/bonuses" className="hover:text-primary transition-colors">Latest Bonuses</Link></li>
              <li><Link to="/blog" className="hover:text-primary transition-colors">Gaming Blog</Link></li>
              <li><Link to="/submit" className="hover:text-primary transition-colors">Submit a Link</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Categories</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/directory?cat=online-casinos" className="hover:text-primary transition-colors">Online Casinos</Link></li>
              <li><Link to="/directory?cat=live-casino" className="hover:text-primary transition-colors">Live Casino</Link></li>
              <li><Link to="/directory?cat=slot-games" className="hover:text-primary transition-colors">Slot Games</Link></li>
              <li><Link to="/directory?cat=crypto-casinos" className="hover:text-primary transition-colors">Crypto Casinos</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6">Support</h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/about#contact" className="hover:text-primary transition-colors">Contact Support</Link></li>
              <li><Link to="/about#disclosure" className="hover:text-primary transition-colors">Affiliate Disclosure</Link></li>
              <li><Link to="/about#terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Intercalink. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="bg-red-600 text-white px-2 py-0.5 rounded font-bold">18+</span>
              <span>Gamble Responsibly</span>
            </div>
            <div className="text-xs text-gray-500 flex items-center gap-1">
              <ShieldCheck size={14} className="text-accent" />
              Licensed Directory
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg text-[10px] text-gray-500 leading-relaxed">
          <p>
            <strong>Affiliate Disclosure:</strong> Intercalink is an independent directory and link aggregator. Some links on this website are affiliate links, which means we may receive a commission if you click through and make a deposit. This does not affect the quality of our reviews or the ranking of casinos. We only list platforms that meet our strict safety and licensing criteria.
          </p>
        </div>
      </div>
    </footer>
  );
};
