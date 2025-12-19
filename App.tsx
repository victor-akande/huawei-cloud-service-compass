import React, { useState } from 'react';
import { scenarios } from './data';
import { Category } from './types';
import { ScenarioCard } from './components/ScenarioCard';
import { Wizard } from './components/Wizard';
import { Glossary } from './components/Glossary';
import { ServiceComparison } from './components/ServiceComparison';
import { LayoutGrid, GitBranch, Search, Cloud, BookOpen, Scale } from 'lucide-react';

const categories: Category[] = [
  'Compute', 'Storage', 'Networking', 'Database', 'Intelligence', 'Security', 'Middleware', 'Developer Services'
];

type Tab = 'explorer' | 'wizard' | 'glossary' | 'comparison';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('explorer');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  
  // State for Service Comparison
  const [comparisonIds, setComparisonIds] = useState<string[]>([]);

  const toggleComparison = (id: string) => {
    setComparisonIds(prev => {
      if (prev.includes(id)) return prev.filter(item => item !== id);
      if (prev.length >= 3) {
        alert("You can compare up to 3 services at a time.");
        return prev;
      }
      return [...prev, id];
    });
  };

  const removeFromComparison = (id: string) => {
    setComparisonIds(prev => prev.filter(item => item !== id));
  };

  const filteredScenarios = scenarios.filter(s => {
    const matchesCategory = selectedCategory === 'All' || s.category === selectedCategory;
    const matchesSearch = s.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          s.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <header className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('explorer')}>
            <div className="bg-red-600 p-1.5 rounded-lg">
              <Cloud className="h-6 w-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold tracking-tight">Huawei Cloud <span className="text-slate-400 font-light">Service Compass</span></h1>
            </div>
          </div>
          <nav className="flex space-x-1 bg-slate-800 p-1 rounded-lg overflow-x-auto">
            <button
              onClick={() => setActiveTab('explorer')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center whitespace-nowrap ${activeTab === 'explorer' ? 'bg-slate-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <LayoutGrid className="h-4 w-4 mr-2" />
              Scenarios
            </button>
            <button
              onClick={() => setActiveTab('wizard')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center whitespace-nowrap ${activeTab === 'wizard' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <GitBranch className="h-4 w-4 mr-2" />
              Decision Tree
            </button>
            <button
              onClick={() => setActiveTab('glossary')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center whitespace-nowrap ${activeTab === 'glossary' ? 'bg-green-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Glossary
            </button>
             <button
              onClick={() => setActiveTab('comparison')}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center whitespace-nowrap relative ${activeTab === 'comparison' ? 'bg-purple-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              <Scale className="h-4 w-4 mr-2" />
              Compare
              {comparisonIds.length > 0 && (
                <span className="ml-2 bg-red-500 text-white text-[10px] px-1.5 rounded-full">
                  {comparisonIds.length}
                </span>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Intro Hero */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            {activeTab === 'explorer' && 'Scenario Explorer'}
            {activeTab === 'wizard' && 'Interactive Decision Tree'}
            {activeTab === 'glossary' && 'Service Glossary'}
            {activeTab === 'comparison' && 'Service Comparison'}
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-slate-500">
            {activeTab === 'explorer' && 'Browse common architectural patterns and discover the optimal Huawei Cloud components.'}
            {activeTab === 'wizard' && 'Answer a few questions about your workload to get a tailored recommendation.'}
            {activeTab === 'glossary' && 'Browse all available services, view documentation, and select items for comparison.'}
            {activeTab === 'comparison' && 'Compare features, pricing, and benefits side-by-side.'}
          </p>
        </div>

        {activeTab === 'wizard' && (
          <Wizard />
        )}

        {activeTab === 'glossary' && (
          <Glossary selectedServiceIds={comparisonIds} onToggleService={toggleComparison} />
        )}

        {activeTab === 'comparison' && (
           <ServiceComparison selectedServiceIds={comparisonIds} onRemoveService={removeFromComparison} />
        )}

        {activeTab === 'explorer' && (
          <div className="space-y-8 animate-fade-in">
            {/* Filters */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-slate-200">
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                <button
                  onClick={() => setSelectedCategory('All')}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${selectedCategory === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                >
                  All
                </button>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${selectedCategory === cat ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <div className="relative w-full sm:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-slate-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search scenarios..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg leading-5 bg-white placeholder-slate-500 focus:outline-none focus:placeholder-slate-400 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                />
              </div>
            </div>

            {/* Grid */}
            {filteredScenarios.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredScenarios.map(scenario => (
                  <ScenarioCard key={scenario.id} scenario={scenario} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-slate-100">
                  <Search className="h-6 w-6 text-slate-400" />
                </div>
                <h3 className="mt-2 text-sm font-medium text-slate-900">No scenarios found</h3>
                <p className="mt-1 text-sm text-slate-500">Try adjusting your filters or search terms.</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-slate-500">
            Built and maintained by <a href="https://www.linkedin.com/in/avictorx" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline">Victor Akande</a>
            </p>
        </div>
      </footer>
    </div>
  );
}