import React from 'react';
import { ShieldCheck, Info, Mail, CheckCircle2 } from 'lucide-react';

export const About = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-primary py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Intercalink</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Malaysia's premier platform for curated, verified, and licensed online casino links.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="bg-white rounded-3xl p-10 md:p-16 shadow-xl border border-gray-100 space-y-12">
          <section>
            <h2 className="text-3xl font-bold text-dark mb-6">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              At Intercalink, our mission is to provide Malaysian players with a safe, organized, and transparent directory of online gaming platforms. We understand the challenges of finding reliable links in a crowded market, and we're here to bridge that gap by curating only the most trustworthy options.
            </p>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-dark mb-6 flex items-center gap-2">
                <ShieldCheck className="text-primary" /> How We Select Casinos
              </h3>
              <ul className="space-y-4">
                {[
                  'Valid international gaming licenses (PAGCOR, MGA, Curacao)',
                  'Support for local Malaysian payment methods (DuitNow, TNG)',
                  'Proven track record of fast and reliable withdrawals',
                  'High-quality 24/7 customer support in BM/English/Chinese',
                  'Fair gaming practices and verified RTP'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 className="text-accent shrink-0 mt-0.5" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h3 className="text-xl font-bold text-dark mb-4">Editorial Guidelines</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Our reviews are conducted by independent experts with years of experience in the industry. While we may receive commissions from some of the links on our site, this does not influence our ratings or reviews. We prioritize player safety above all else.
              </p>
            </div>
          </section>

          <section id="disclosure" className="p-8 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
              <Info size={20} /> Affiliate Disclosure
            </h3>
            <p className="text-sm text-blue-900 leading-relaxed">
              Intercalink participates in affiliate marketing programs. This means we may earn a commission when you click on links and make a deposit at a casino. These commissions help us maintain this directory and keep our services free for all users. We only recommend platforms that meet our strict security standards.
            </p>
          </section>

          <section id="contact" className="text-center py-12 border-t border-gray-100">
            <h2 className="text-3xl font-bold text-dark mb-6">Get in Touch</h2>
            <p className="text-gray-500 mb-8">Have a question or want to suggest a casino for our directory?</p>
            <a href="mailto:support@casinolinkhub.my" className="inline-flex items-center gap-3 bg-primary text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg">
              <Mail size={20} /> support@casinolinkhub.my
            </a>
          </section>
        </div>
      </div>
    </div>
  );
};
