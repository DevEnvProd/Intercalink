import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink, Shield, Gift, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Casino } from '@/src/types';
import { cn } from '@/src/lib/utils';

interface CasinoCardProps {
  casino: Casino;
  variant?: 'default' | 'compact' | 'featured';
}

export const CasinoCard: React.FC<CasinoCardProps> = ({ casino, variant = 'default' }) => {
  const isFeatured = variant === 'featured' || casino.isFeatured;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "bg-white rounded-2xl overflow-hidden card-shadow border border-gray-100 flex flex-col",
        isFeatured && "ring-2 ring-secondary/50"
      )}
    >
      {/* Badge */}
      <div className="relative">
        {isFeatured && (
          <div className="absolute top-4 left-4 z-10 bg-secondary text-dark text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1 shadow-sm">
            <Star size={10} fill="currentColor" /> Featured
          </div>
        )}
        {casino.isNew && (
          <div className="absolute top-4 left-4 z-10 bg-accent text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
            New Listing
          </div>
        )}
        <div className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm text-dark text-[10px] font-bold px-2 py-1 rounded border border-gray-200 flex items-center gap-1">
          <Shield size={10} className="text-primary" /> {casino.license}
        </div>

        {/* Logo Section */}
        <div className="h-48 bg-gray-50 flex items-center justify-center p-8">
          <img
            src={casino.logo}
            alt={casino.name}
            className="max-h-full max-w-full object-contain drop-shadow-md"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-dark">{casino.name}</h3>
          <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-sm font-bold">
            <Star size={14} fill="currentColor" /> {casino.rating}
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 font-mono">
          {casino.categories.slice(0, 2).map(cat => (
            <span key={cat} className="uppercase">#{cat.replace('-', ' ')}</span>
          ))}
        </div>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-6 flex items-start gap-3">
          <Gift className="text-primary shrink-0 mt-1" size={18} />
          <div>
            <p className="text-[10px] text-primary font-bold uppercase tracking-widest mb-1">Welcome Bonus</p>
            <p className="text-sm font-bold text-dark leading-tight">{casino.welcomeBonus}</p>
          </div>
        </div>

        <div className="mt-auto space-y-3">
          <Link
            to={`/casino/${casino.id}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-gray-200 text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Full Review <ArrowRight size={16} />
          </Link>
          <a
            href={casino.visitUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-primary text-white text-sm font-bold hover:bg-blue-700 transition-all shadow-md hover:shadow-lg"
          >
            Visit Casino <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
