import React from 'react';
import { Gift, Shield, ExternalLink, Filter, Search } from 'lucide-react';
import { BONUSES } from '@/src/constants';
import { motion } from 'motion/react';

export const Bonuses = () => {
  const [filter, setFilter] = React.useState('all');

  const filteredBonuses = filter === 'all' ? BONUSES : BONUSES.filter(b => b.type.toLowerCase() === filter.toLowerCase());

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-secondary/20 text-yellow-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-4">Exclusive Offers</span>
          <h1 className="text-4xl md:text-5xl font-bold text-dark mb-6">Latest Casino Bonuses</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Find the best value for your money. We curate the most generous welcome bonuses, free spins, and no-deposit offers in Malaysia.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {['all', 'Welcome', 'Reload', 'No Deposit', 'Free Spins'].map(type => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                filter === type ? 'bg-primary text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {type === 'all' ? 'All Bonuses' : type}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBonuses.map((bonus, i) => (
            <motion.div
              key={bonus.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-gray-100 card-shadow flex flex-col"
            >
              <div className="p-8 flex-grow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center p-2 border border-gray-100">
                    <img src={bonus.casinoLogo} alt={bonus.casinoName} className="max-h-full max-w-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">{bonus.casinoName}</p>
                    <div className="bg-blue-50 text-primary text-[10px] font-bold px-2 py-0.5 rounded inline-block uppercase mt-1">
                      {bonus.type} Bonus
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-dark mb-4 leading-tight">{bonus.title}</h3>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Wagering</span>
                    <span className="font-bold text-dark">{bonus.wagering}</span>
                  </div>
                  {bonus.code && (
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Bonus Code</span>
                      <span className="bg-gray-100 px-3 py-1 rounded font-mono font-bold text-primary border border-dashed border-primary/30">
                        {bonus.code}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-green-50 rounded-2xl border border-green-100 flex items-center gap-3">
                  <Shield className="text-accent" size={20} />
                  <p className="text-[10px] text-green-800 font-medium">Verified & Active for April 2026</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 border-t border-gray-100">
                <a
                  href={bonus.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-primary text-white font-bold hover:bg-blue-700 transition-all shadow-md"
                >
                  Claim Bonus <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
