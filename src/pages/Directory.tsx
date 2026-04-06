import React from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Filter, Search, ChevronDown, Star, ExternalLink, Shield } from 'lucide-react';
import { CASINOS, CATEGORIES } from '@/src/constants';
import { CasinoCard } from '@/src/components/CasinoCard';
import { cn } from '@/src/lib/utils';

export const Directory = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const categoryFilter = searchParams.get('cat') || 'all';
  const [searchQuery, setSearchQuery] = React.useState('');
  const [sortBy, setSortBy] = React.useState('rating');

  const filteredCasinos = CASINOS.filter(casino => {
    const matchesCategory = categoryFilter === 'all' || casino.categories.includes(categoryFilter);
    const matchesSearch = casino.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         casino.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating;
    if (sortBy === 'newest') return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-dark mb-4">Casino Directory</h1>
          <p className="text-gray-500 max-w-2xl">
            Browse our curated list of licensed online casinos in Malaysia. Filter by category to find exactly what you're looking for.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-dark mb-6 flex items-center gap-2">
                <Filter size={18} /> Categories
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setSearchParams({ cat: 'all' })}
                  className={cn(
                    "w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors",
                    categoryFilter === 'all' ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50"
                  )}
                >
                  All Categories
                </button>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSearchParams({ cat: cat.id })}
                    className={cn(
                      "w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors flex justify-between items-center",
                      categoryFilter === cat.id ? "bg-primary text-white" : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    {cat.name}
                    <span className={cn(
                      "text-[10px] px-2 py-0.5 rounded-full",
                      categoryFilter === cat.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-400"
                    )}>
                      {cat.linkCount}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="font-bold text-dark mb-6">Trust Indicators</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="bg-green-50 p-1.5 rounded-full text-accent">
                    <Shield size={14} />
                  </div>
                  PAGCOR Licensed
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="bg-green-50 p-1.5 rounded-full text-accent">
                    <Shield size={14} />
                  </div>
                  Verified SSL
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-600">
                  <div className="bg-green-50 p-1.5 rounded-full text-accent">
                    <Shield size={14} />
                  </div>
                  Fast Payouts
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4">
            {/* Toolbar */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <div className="relative w-full sm:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Search casinos..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-2.5 bg-gray-50 rounded-xl outline-none border border-transparent focus:border-primary transition-colors text-sm"
                />
              </div>
              <div className="flex items-center gap-4 w-full sm:w-auto">
                <span className="text-sm text-gray-500 whitespace-nowrap">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-sm font-medium outline-none focus:border-primary w-full sm:w-auto"
                >
                  <option value="rating">Top Rated</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Results Grid */}
            {filteredCasinos.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCasinos.map(casino => (
                  <CasinoCard key={casino.id} casino={casino} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-3xl p-20 text-center border border-dashed border-gray-200">
                <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="text-gray-300" size={40} />
                </div>
                <h3 className="text-xl font-bold text-dark mb-2">No casinos found</h3>
                <p className="text-gray-500">Try adjusting your filters or search query.</p>
                <button
                  onClick={() => { setSearchQuery(''); setSearchParams({ cat: 'all' }); }}
                  className="mt-6 text-primary font-bold hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};
