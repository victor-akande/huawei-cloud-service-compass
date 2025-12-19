import React, { useState } from 'react';
import { WizardNode, ServiceRecommendation } from '../types';
import { services, decisionWizard } from '../data';
import { ArrowRight, RotateCcw, CheckCircle, ExternalLink } from 'lucide-react';

export const Wizard: React.FC = () => {
  const [currentNodeId, setCurrentNodeId] = useState<string>('start');
  const [history, setHistory] = useState<string[]>([]);
  const [result, setResult] = useState<ServiceRecommendation | null>(null);

  const currentNode = decisionWizard.find(n => n.id === currentNodeId);

  const handleOptionClick = (option: { nextNodeId?: string; resultServiceId?: string }) => {
    if (option.resultServiceId) {
      setResult(services[option.resultServiceId]);
    } else if (option.nextNodeId) {
      setHistory([...history, currentNodeId]);
      setCurrentNodeId(option.nextNodeId);
    }
  };

  const handleReset = () => {
    setCurrentNodeId('start');
    setHistory([]);
    setResult(null);
  };

  if (result) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border-t-4 border-blue-600 animate-fade-in">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Recommended Service</h2>
          <div className="mt-6 p-6 bg-slate-50 rounded-lg border border-slate-200">
             <div className="flex items-center justify-center mb-2 text-blue-600">
               {/* Icon could go here */}
             </div>
             <h3 className="text-2xl font-bold text-blue-700 mb-2">{result.name}</h3>
             <p className="text-gray-600 text-lg mb-4">{result.shortDescription}</p>
             <div className="text-sm text-slate-500 mb-2">
                <strong>Best fit for:</strong> {result.idealUseCases.join(', ')}
             </div>
             <a href={result.docUrl} target="_blank" rel="noreferrer" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
               View Documentation <ExternalLink className="h-4 w-4 ml-1" />
             </a>
          </div>
          
          <div className="mt-8">
            <button
              onClick={handleReset}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 transition-colors"
            >
              <RotateCcw className="mr-2 h-5 w-5" />
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!currentNode) return <div>Error: Node not found</div>;

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 max-w-3xl mx-auto min-h-[400px] flex flex-col justify-center animate-fade-in">
      <div className="mb-8">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
          Service Decision Tree
        </span>
        <h2 className="text-2xl font-bold text-gray-900 mt-2">
          {currentNode.question}
        </h2>
      </div>

      <div className="space-y-3">
        {currentNode.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleOptionClick(option)}
            className="w-full text-left px-6 py-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all group flex justify-between items-center"
          >
            <span className="text-lg text-gray-700 group-hover:text-blue-700 font-medium">
              {option.label}
            </span>
            <ArrowRight className="h-5 w-5 text-gray-300 group-hover:text-blue-500" />
          </button>
        ))}
      </div>

      {history.length > 0 && (
        <button
          onClick={handleReset}
          className="mt-8 text-gray-400 hover:text-gray-600 text-sm flex items-center hover:underline"
        >
          <RotateCcw className="mr-1 h-3 w-3" /> Reset Advisor
        </button>
      )}
    </div>
  );
};