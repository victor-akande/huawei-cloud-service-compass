import React, { useState } from 'react';
import { services } from '../data';
import { Category } from '../types';
import { Search, ExternalLink, Plus, Check } from 'lucide-react';
import * as Icons from 'lucide-react';

interface GlossaryProps {
  selectedServiceIds: string[];
  onToggleService: (id: string) => void;
}

export const Glossary: React.FC<GlossaryProps> = ({ selectedServiceIds, onToggleService }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState<Category | 'All'>('All');

  const categories: Category[] = [
    'Compute', 'Storage', 'Networking', 'Database', 'Intelligence', 'Security', 'Middleware'
  ];

  const serviceList = Object.values(services).filter(service => {
    const matchesSearch = service.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || service.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Controls */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-slate-400" />
            </div>
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            />
          </div>
          
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setFilterCategory('All')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${filterCategory === 'All' ? 'bg-slate-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              All
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-colors ${filterCategory === cat ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {serviceList.map(service => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const IconComponent = (Icons as any)[service.iconName] || Icons.Box;
          const isSelected = selectedServiceIds.includes(service.id);

          return (
            <div key={service.id} className={`bg-white rounded-lg shadow-sm border transition-all duration-300 hover:shadow-md flex flex-col ${isSelected ? 'border-blue-500 ring-1 ring-blue-500' : 'border-slate-200'}`}>
              <div className="p-6 flex-grow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-medium px-2 py-1 bg-slate-100 rounded text-slate-600">
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-1">{service.name}</h3>
                <p className="text-sm text-slate-600 mb-4 h-10 line-clamp-2">{service.shortDescription}</p>

                <div className="space-y-2 mb-4">
                   <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Top Features</h4>
                   <ul className="text-xs text-slate-600 space-y-1">
                     {service.features.slice(0, 3).map((f, i) => (
                       <li key={i} className="flex items-center">
                         <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                         {f}
                       </li>
                     ))}
                   </ul>
                </div>
              </div>

              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 rounded-b-lg flex justify-between items-center">
                <a 
                  href={service.docUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center"
                >
                  Docs <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                
                <button
                  onClick={() => onToggleService(service.id)}
                  className={`text-sm font-medium px-3 py-1.5 rounded-md flex items-center transition-colors ${
                    isSelected 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  {isSelected ? (
                    <>
                      <Check className="h-3 w-3 mr-1.5" /> Selected
                    </>
                  ) : (
                    <>
                      <Plus className="h-3 w-3 mr-1.5" /> Compare
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};