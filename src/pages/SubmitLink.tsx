import React from 'react';
import { Send, Info, ShieldCheck } from 'lucide-react';

export const SubmitLink = () => {
  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      <div className="bg-white border-b border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-dark mb-4">Submit a Casino Link</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Help us expand our directory. If you know a trusted casino platform that isn't listed yet, submit it for review by our team.
          </p>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {submitted ? (
          <div className="bg-white rounded-3xl p-12 text-center shadow-xl border border-gray-100">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
              <ShieldCheck size={40} />
            </div>
            <h2 className="text-2xl font-bold text-dark mb-4">Submission Received!</h2>
            <p className="text-gray-500 mb-8">
              Thank you for your contribution. Our team will review the platform for licensing and safety before adding it to the directory. This usually takes 3-5 business days.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-primary font-bold hover:underline"
            >
              Submit another link
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Casino Name</label>
                  <input
                    required
                    type="text"
                    placeholder="e.g. Platinum Casino"
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-primary transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Website URL</label>
                  <input
                    required
                    type="url"
                    placeholder="https://..."
                    className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-primary transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Category</label>
                <select className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-primary transition-colors">
                  <option>Online Casino</option>
                  <option>Live Casino</option>
                  <option>Slot Games</option>
                  <option>Sports Betting</option>
                  <option>Crypto Casino</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Description / Notes</label>
                <textarea
                  rows={4}
                  placeholder="Tell us why this casino should be listed..."
                  className="w-full px-4 py-3 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-primary transition-colors resize-none"
                ></textarea>
              </div>

              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-3">
                <Info className="text-primary shrink-0 mt-0.5" size={18} />
                <p className="text-xs text-blue-800 leading-relaxed">
                  <strong>Note:</strong> We only list casinos with valid international licenses. Submitting a link does not guarantee a listing. All submissions are subject to manual review.
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-all shadow-lg flex items-center justify-center gap-2"
              >
                Submit for Review <Send size={18} />
              </button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
