import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Star, Shield, Gift, Check, X, ExternalLink, ArrowLeft, CreditCard, Smartphone, Globe } from 'lucide-react';
import { CASINOS } from '@/src/constants';
import { motion } from 'motion/react';

export const CasinoDetail = () => {
  const { id } = useParams();
  const casino = CASINOS.find(c => c.id === id);

  if (!casino) return <Navigate to="/directory" />;

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link to="/directory" className="inline-flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-primary transition-colors">
          <ArrowLeft size={16} /> Back to Directory
        </Link>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-50 p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100">
              <motion.img
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                src={casino.logo}
                alt={casino.name}
                className="max-h-48 drop-shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="md:w-2/3 p-8 md:p-12">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <h1 className="text-4xl font-bold text-dark">{casino.name}</h1>
                <div className="flex items-center gap-1 bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-lg font-bold">
                  <Star size={20} fill="currentColor" /> {casino.rating}
                </div>
                <div className="bg-blue-50 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1.5">
                  <Shield size={14} /> {casino.license} Licensed
                </div>
              </div>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{casino.description}</p>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-xl shadow-sm"><Gift className="text-primary" size={32} /></div>
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Exclusive Welcome Offer</p>
                    <p className="text-xl font-extrabold text-dark">{casino.welcomeBonus}</p>
                  </div>
                </div>
                <a href={casino.bonusUrl} className="gradient-btn w-full sm:w-auto text-center">Claim Bonus Now</a>
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={casino.visitUrl} className="bg-dark text-white px-10 py-4 rounded-xl font-bold hover:bg-black transition-all flex items-center gap-2 shadow-lg">
                  Visit Official Website <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8">Pros & Cons</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-accent font-bold flex items-center gap-2"><div className="bg-green-50 p-1 rounded-full"><Check size={16} /></div> What We Like</h4>
                <ul className="space-y-3">
                  {casino.pros.map((pro, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                      <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-accent"></div>{pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-red-500 font-bold flex items-center gap-2"><div className="bg-red-50 p-1 rounded-full"><X size={16} /></div> What Could Improve</h4>
                <ul className="space-y-3">
                  {casino.cons.map((con, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-3">
                      <div className="mt-1 shrink-0 w-1.5 h-1.5 rounded-full bg-red-400"></div>{con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-8">Payment Methods</h3>
            <div className="flex flex-wrap gap-4">
              {casino.paymentMethods.map(method => (
                <div key={method} className="bg-gray-50 border border-gray-100 px-6 py-4 rounded-2xl flex items-center gap-3">
                  <CreditCard className="text-primary" size={20} /><span className="font-bold text-dark">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 sticky top-28">
            <h3 className="text-xl font-bold mb-6">Casino Info</h3>
            <div className="space-y-6">
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div className="flex items-center gap-3 text-gray-500 text-sm"><Shield size={18} /> License</div>
                <span className="font-bold text-dark">{casino.license}</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div className="flex items-center gap-3 text-gray-500 text-sm"><Globe size={18} /> Region</div>
                <span className="font-bold text-dark">Malaysia</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-gray-50">
                <div className="flex items-center gap-3 text-gray-500 text-sm"><Smartphone size={18} /> Mobile App</div>
                <span className="font-bold text-accent">Available</span>
              </div>
            </div>
            <a href={casino.visitUrl} target="_blank" rel="noopener noreferrer" className="w-full mt-8 flex items-center justify-center gap-2 py-4 px-4 rounded-xl bg-primary text-white font-bold hover:bg-blue-700 transition-all shadow-lg">
              Play Now <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
