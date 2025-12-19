import React from 'react';
import { Scenario, ServiceRecommendation } from '../types';
import { services } from '../data';
import * as Icons from 'lucide-react';

interface ScenarioCardProps {
  scenario: Scenario;
}

export const ScenarioCard: React.FC<ScenarioCardProps> = ({ scenario }) => {
  const service = services[scenario.recommendedServiceId];
  
  // Dynamic Icon rendering
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const IconComponent = (Icons as any)[service.iconName] || Icons.HelpCircle;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-slate-200 hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between mb-4">
          <span className={`px-2 py-1 text-xs font-semibold rounded-full 
            ${scenario.category === 'Compute' ? 'bg-blue-100 text-blue-800' : 
              scenario.category === 'Storage' ? 'bg-green-100 text-green-800' :
              scenario.category === 'Database' ? 'bg-orange-100 text-orange-800' :
              'bg-slate-100 text-slate-800'}`}>
            {scenario.category}
          </span>
        </div>
        <h3 className="text-lg font-bold text-slate-900 mb-2">{scenario.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-3">{scenario.description}</p>
        
        <div className="space-y-1">
          {scenario.keyFactors.map((factor, idx) => (
            <div key={idx} className="flex items-center text-xs text-slate-500">
              <Icons.Check className="h-3 w-3 mr-1 text-green-500" />
              {factor}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-50 p-4 border-t border-slate-100">
        <div className="text-xs text-slate-500 uppercase font-semibold mb-2">Recommended Solution</div>
        <div className="flex items-start">
          <div className="flex-shrink-0 p-2 bg-white rounded shadow-sm">
            <IconComponent className="h-6 w-6 text-blue-600" />
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-bold text-slate-900">{service.name}</h4>
            <p className="text-xs text-slate-600 mt-1">{scenario.rationale}</p>
          </div>
        </div>
      </div>
    </div>
  );
};