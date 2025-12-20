import React from 'react';
import { services } from '../data';
import { X, Check } from 'lucide-react';
import * as Icons from 'lucide-react';

interface ServiceComparisonProps {
  selectedServiceIds: string[];
  onRemoveService: (id: string) => void;
}

export const ServiceComparison: React.FC<ServiceComparisonProps> = ({ selectedServiceIds, onRemoveService }) => {
  const selectedServices = selectedServiceIds.map(id => services[id]).filter(Boolean);

  if (selectedServices.length === 0) {
    return (
      <div className="text-center py-20 bg-white rounded-xl border border-dashed border-slate-300">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-slate-100">
          <Icons.Scale className="h-6 w-6 text-slate-400" />
        </div>
        <h3 className="mt-2 text-sm font-medium text-slate-900">No services selected</h3>
        <p className="mt-1 text-sm text-slate-500">Go to the Glossary to select services for comparison.</p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      {/* Desktop Table View */}
      <div className="hidden md:block overflow-x-auto bg-white rounded-xl shadow-sm border border-slate-200 pb-4">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="p-4 border-b border-slate-200 bg-slate-50 w-48 min-w-[12rem] sticky left-0 z-10 text-sm font-semibold text-slate-500 uppercase tracking-wider">
                Service
              </th>
              {selectedServices.map(service => {
                 // eslint-disable-next-line @typescript-eslint/no-explicit-any
                 const IconComponent = (Icons as any)[service.iconName] || Icons.Box;
                 return (
                  <th key={service.id} className="p-4 border-b border-slate-200 min-w-[16rem] relative group">
                    <div className="flex flex-col items-center text-center">
                      <button 
                        onClick={() => onRemoveService(service.id)}
                        className="absolute top-2 right-2 p-1 text-slate-300 hover:text-red-500 transition-colors"
                        title="Remove from comparison"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="p-3 bg-blue-50 rounded-full mb-3 text-blue-600">
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
                      <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-600 mt-2">
                        {service.category}
                      </span>
                    </div>
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            <tr>
              <td className="p-4 bg-slate-50 font-medium text-slate-700 sticky left-0 z-10 border-r border-slate-100">Description</td>
              {selectedServices.map(service => (
                <td key={service.id} className="p-4 text-sm text-slate-600 align-top">
                  {service.shortDescription}
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-slate-50 font-medium text-slate-700 sticky left-0 z-10 border-r border-slate-100">Key Features</td>
              {selectedServices.map(service => (
                <td key={service.id} className="p-4 text-sm text-slate-600 align-top">
                  <ul className="space-y-1">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
            <tr>
              <td className="p-4 bg-slate-50 font-medium text-slate-700 sticky left-0 z-10 border-r border-slate-100">Pricing Model</td>
              {selectedServices.map(service => (
                <td key={service.id} className="p-4 text-sm text-slate-600 align-top">
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-100">
                    {service.pricingModel}
                  </span>
                </td>
              ))}
            </tr>
             <tr>
              <td className="p-4 bg-slate-50 font-medium text-slate-700 sticky left-0 z-10 border-r border-slate-100">Benefits</td>
              {selectedServices.map(service => (
                <td key={service.id} className="p-4 text-sm text-slate-600 align-top">
                   <ul className="space-y-1">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
             <tr>
              <td className="p-4 bg-slate-50 font-medium text-slate-700 sticky left-0 z-10 border-r border-slate-100">Ideal For</td>
              {selectedServices.map(service => (
                <td key={service.id} className="p-4 text-sm text-slate-600 align-top italic">
                  {service.idealUseCases.join(', ')}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {selectedServices.map(service => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const IconComponent = (Icons as any)[service.iconName] || Icons.Box;
          return (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-slate-200 p-4">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">{service.name}</h3>
                    <span className="text-xs font-medium px-2 py-0.5 bg-slate-100 rounded text-slate-600">
                      {service.category}
                    </span>
                  </div>
                </div>
                <button 
                  onClick={() => onRemoveService(service.id)}
                  className="p-1 text-slate-300 hover:text-red-500 transition-colors"
                  title="Remove from comparison"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Service Details */}
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Description</h4>
                  <p className="text-sm text-slate-600">{service.shortDescription}</p>
                </div>

                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {service.features.map((f, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600">
                        <Check className="h-3.5 w-3.5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Pricing Model</h4>
                  <span className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs font-medium border border-green-100">
                    {service.pricingModel}
                  </span>
                </div>

                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Benefits</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-600">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-slate-700 mb-2">Ideal For</h4>
                  <p className="text-sm text-slate-600 italic">{service.idealUseCases.join(', ')}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};