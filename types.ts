export type Category = 
  | 'Compute' 
  | 'Storage' 
  | 'Networking' 
  | 'Database' 
  | 'Intelligence' 
  | 'Security' 
  | 'Middleware'
  | 'Developer Services' 
  | 'Edge/IoT'
  | 'Business Apps';

export interface ServiceRecommendation {
  id: string;
  name: string;
  category: Category;
  shortDescription: string;
  iconName: string;
  // New detailed fields for comparison and glossary
  features: string[];
  benefits: string[];
  pricingModel: string;
  idealUseCases: string[];
  docUrl: string;
}

export interface Scenario {
  id: string;
  title: string;
  description: string;
  category: Category;
  recommendedServiceId: string;
  rationale: string;
  keyFactors: string[];
}

export interface WizardNode {
  id: string;
  question: string;
  options: {
    label: string;
    nextNodeId?: string;
    resultServiceId?: string;
  }[];
}