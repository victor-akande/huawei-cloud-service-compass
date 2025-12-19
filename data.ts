import { Scenario, ServiceRecommendation, WizardNode } from './types';

export const services: Record<string, ServiceRecommendation> = {
  // --- COMPUTE ---
  'ecs': { 
    id: 'ecs', 
    name: 'Elastic Cloud Server', 
    category: 'Compute', 
    shortDescription: 'Standard virtualized computing for general workloads.', 
    iconName: 'Server',
    features: ['x86 & Kunpeng Architectures', 'Elastic Scaling', 'QingTian Architecture', 'Various Disk Types'],
    benefits: ['Flexible billing', 'High availability (99.975%)', 'Rich ecosystem', 'Cost optimization via Auto Scaling'],
    pricingModel: 'Pay-per-use, Yearly/Monthly, Spot Instances',
    idealUseCases: ['Websites', 'Web Applications', 'Dev/Test Environments', 'Distributed Caching'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/ecs.html'
  },
  'bms': { 
    id: 'bms', 
    name: 'Bare Metal Server', 
    category: 'Compute', 
    shortDescription: 'Dedicated physical servers for high-performance workloads.', 
    iconName: 'BareMetalServer',
    features: ['No virtualization overhead', 'Direct hardware access', 'Physical core visibility', 'High-speed InfiniBand'],
    benefits: ['Deterministic performance', 'License optimization (Oracle)', 'Ultimate isolation/security'],
    pricingModel: 'Yearly/Monthly',
    idealUseCases: ['High-Performance Computing (HPC)', 'High-Frequency Trading (HFT)', 'Core Databases (Oracle RAC)'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/bms.html'
  },
  'deh': { 
    id: 'deh', 
    name: 'Dedicated Host', 
    category: 'Compute', 
    shortDescription: 'Dedicated physical server with virtualization for compliance.', 
    iconName: 'DedicatedHost',
    features: ['Physical isolation', 'BYOL support', 'Host-level visibility', 'ECS management compatibility'],
    benefits: ['Regulatory compliance', 'License cost savings', 'Resource exclusivity'],
    pricingModel: 'Yearly/Monthly',
    idealUseCases: ['Financial systems', 'Governmental workloads', 'Sensitive enterprise applications'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/deh.html'
  },
  'flexus-l': { 
    id: 'flexus-l', 
    name: 'Flexus L Instance', 
    category: 'Compute', 
    shortDescription: 'Out-of-the-box lightweight server for SMEs.', 
    iconName: 'FlexusL',
    features: ['Pre-configured compute/network bundles', 'Simplified console', 'Pre-integrated application images'],
    benefits: ['Simplicity (3-step setup)', 'Predictable costs', 'Low maintenance'],
    pricingModel: 'Yearly/Monthly (Bundled)',
    idealUseCases: ['Personal blogs', 'SME websites', 'Small e-commerce stores'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/flexus-l.html'
  },
  'flexus-x': { 
    id: 'flexus-x', 
    name: 'Flexus X Instance', 
    category: 'Compute', 
    shortDescription: 'Flexible compute with custom vCPU:Memory ratios.', 
    iconName: 'FlexusX',
    features: ['Custom resource ratios (e.g., 1:6)', 'X-Turbo acceleration', 'Intelligent scheduling'],
    benefits: ['Cost optimization (no over-provisioning)', 'Higher performance benchmarks'],
    pricingModel: 'Pay-per-use, Yearly/Monthly',
    idealUseCases: ['Memory-heavy caching (Redis)', 'Database replicas', 'Microservices'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/flexus-x.html'
  },
  'cce': { 
    id: 'cce', 
    name: 'Cloud Container Engine (CCE)', 
    category: 'Compute', 
    shortDescription: 'Managed Kubernetes for production microservices.', 
    iconName: 'Container',
    features: ['Managed Kubernetes Control Plane', 'Docker/Containerd Support', 'Istio Integration'],
    benefits: ['Standard K8s APIs', 'High scalability', 'DevOps integration'],
    pricingModel: 'Cluster Management Fee + Node Resources',
    idealUseCases: ['Microservices', 'CI/CD Pipelines', 'Hybrid Cloud Apps'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cce.html'
  },
  'cci': { 
    id: 'cci', 
    name: 'Cloud Container Instance (CCI)', 
    category: 'Compute', 
    shortDescription: 'Serverless containers for burst capacity.', 
    iconName: 'Zap',
    features: ['Serverless K8s', 'Second-level startup', 'Per-second billing'],
    benefits: ['No node management', 'Instant burst scaling', 'Zero maintenance'],
    pricingModel: 'Pay-per-second (vCPU/Mem)',
    idealUseCases: ['Flash Sales', 'Batch Processing', 'Scientific Computing'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cci.html'
  },
  'functiongraph': { 
    id: 'functiongraph', 
    name: 'FunctionGraph', 
    category: 'Compute', 
    shortDescription: 'Serverless event-driven computing.', 
    iconName: 'FunctionGraph',
    features: ['Event triggers (OBS, API)', 'Polyglot support', 'Millisecond scaling'],
    benefits: ['Zero server management', 'Micro-billing (pay-per-execution)', 'Idle cost is zero'],
    pricingModel: 'Pay-per-use (Requests + Duration)',
    idealUseCases: ['ETL pipelines', 'Image processing', 'Web/Mobile backends'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/functiongraph.html'
  },
  'gacs': { 
    id: 'gacs', 
    name: 'GPU Accelerated Cloud Server', 
    category: 'Compute', 
    shortDescription: 'Servers with powerful GPU acceleration for AI and rendering.', 
    iconName: 'GACS',
    features: ['GPU Passthrough', 'NVLink support', 'G-series (Graphics) & P-series (Compute)'],
    benefits: ['Massive parallel processing power', 'Reduced time-to-insight', 'Cost-effective supercomputing'],
    pricingModel: 'Pay-per-use, Yearly/Monthly',
    idealUseCases: ['AI Training/Inference', 'Cloud Gaming', '3D Rendering', 'Scientific Simulation'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/gpu.html'
  },
  'cph': { 
    id: 'cph', 
    name: 'Cloud Phone Host', 
    category: 'Compute', 
    shortDescription: 'Virtualized Android mobile devices on the cloud.', 
    iconName: 'Mobile',
    features: ['Native ARM architecture (Kunpeng)', 'MonBox virtualization', 'Android OS compatibility'],
    benefits: ['80% higher efficiency than x86 emulators', 'Data security (stays on cloud)'],
    pricingModel: 'Yearly/Monthly',
    idealUseCases: ['Cloud Gaming', 'Virtual Office', 'App Testing farms'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cph.html'
  },
  'dcc': { 
    id: 'dcc', 
    name: 'Dedicated Computing Cluster', 
    category: 'Compute', 
    shortDescription: 'Physically isolated pool of compute resources.', 
    iconName: 'Cluster',
    features: ['Cluster-level isolation', 'Hybrid networking', 'Physical lock support'],
    benefits: ['Ultimate security', 'Stable performance (no noisy neighbors)', 'Compliance'],
    pricingModel: 'Yearly/Monthly',
    idealUseCases: ['Strategic national projects', 'Core banking systems', 'Highly sensitive data processing'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dcc.html'
  },
  'as': { 
    id: 'as', 
    name: 'Auto Scaling', 
    category: 'Compute', 
    shortDescription: 'Automatically adjusts compute resources based on demand.', 
    iconName: 'AutoScaling',
    features: ['Scaling policies (alarm/schedule)', 'ELB integration', 'Lifecycle hooks'],
    benefits: ['TCO reduction (pay only for what is used)', 'Fault tolerance (auto-healing)'],
    pricingModel: 'Free (Resources created are billed)',
    idealUseCases: ['Flash sales', 'Periodic batch jobs', 'Web applications with variable load'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/as.html'
  },
  'ims': { 
    id: 'ims', 
    name: 'Image Management Service', 
    category: 'Compute', 
    shortDescription: 'Management of private and public server images.', 
    iconName: 'Image',
    features: ['Private image creation', 'Image sharing', 'Cross-region replication'],
    benefits: ['Standardization', 'Rapid mass deployment', 'Simplified migration'],
    pricingModel: 'Pay-per-use (Storage cost)',
    idealUseCases: ['Disaster recovery', 'Mass deployment', 'Application standardization'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/ims.html'
  },
  'clouddc': { 
    id: 'clouddc', 
    name: 'Cloud Data Center', 
    category: 'Compute', 
    shortDescription: 'On-premise asset management with cloud operations.', 
    iconName: 'DataCenter',
    features: ['Infrastructure management by Huawei', 'Cloud interconnect', 'Asset ownership'],
    benefits: ['Data sovereignty', 'Low latency to local assets', 'Cloud-like operational model'],
    pricingModel: 'Yearly/Monthly (iRack/iMetal/CloudDCN)',
    idealUseCases: ['Legacy migration', 'Data residency compliance'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/clouddc.html'
  },
  
  // --- STORAGE ---
  'evs': { 
    id: 'evs', 
    name: 'Elastic Volume Service (EVS)', 
    category: 'Storage', 
    shortDescription: 'Block storage for OS boots and Databases.', 
    iconName: 'Disc',
    features: ['Low Latency', 'High IOPS', 'Snapshot/Backup', 'Shared Disks'],
    benefits: ['Persistent storage', 'High performance', 'Reliability'],
    pricingModel: 'Provisioned Capacity (GB) + Type',
    idealUseCases: ['OS Boot Disks', 'Database Storage', 'High I/O Apps'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/evs.html'
  },
  'obs': { 
    id: 'obs', 
    name: 'Object Storage Service (OBS)', 
    category: 'Storage', 
    shortDescription: 'Massive scale storage for web assets and data lakes.', 
    iconName: 'Cloud',
    features: ['99.9999999999% Reliability', 'Tiered Storage (Hot, Warm, Cold)', 'REST API', 'Static Website Hosting'],
    benefits: ['Infinite scaling', 'Global accessibility', 'Low cost for archive'],
    pricingModel: 'Storage Used + Traffic',
    idealUseCases: ['Data Lakes', 'Backup/Archive', 'Video/Image Hosting'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/obs.html'
  },
  'sfs': { 
    id: 'sfs', 
    name: 'Scalable File Service (SFS)', 
    category: 'Storage', 
    shortDescription: 'Shared file storage (NAS) for multiple instances.', 
    iconName: 'Folder',
    features: ['NFS Protocol', 'Elastic Scaling', 'Shared Access'],
    benefits: ['Standard file semantics', 'Easy sharing across ECS'],
    pricingModel: 'Storage Used',
    idealUseCases: ['Content Management', 'Home Directories', 'Log Sharing'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/sfs.html'
  },
  'sfs-turbo': { 
    id: 'sfs-turbo', 
    name: 'SFS Turbo', 
    category: 'Storage', 
    shortDescription: 'High-performance file storage for HPC/AI.', 
    iconName: 'Activity',
    features: ['Micro-latency', 'Millions of IOPS', 'Metadata Acceleration'],
    benefits: ['Accelerates AI training', 'Speeds up rendering'],
    pricingModel: 'Provisioned Capacity',
    idealUseCases: ['HPC', 'AI Training', 'Video Rendering'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/sfs.html'
  },
  'sfsturbo': { 
    id: 'sfsturbo', 
    name: 'Scalable File Service Turbo (SFS Turbo)', 
    category: 'Storage', 
    shortDescription: 'High-performance shared file storage for HPC and AI.', 
    iconName: 'Speedometer',
    features: [],
    benefits: [],
    pricingModel: 'Provisioned Capacity/Performance + Duration',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/sfsturbo.html'
  },
  'dss': { 
    id: 'dss', 
    name: 'Dedicated Distributed Storage Service (DSS)', 
    category: 'Storage', 
    shortDescription: 'Physically isolated block storage for compliance.', 
    iconName: 'Lock',
    features: [],
    benefits: [],
    pricingModel: 'Dedicated Pool Capacity + Duration',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dss.html'
  },
  'cbr': { 
    id: 'cbr', 
    name: 'Cloud Backup and Recovery (CBR)', 
    category: 'Storage', 
    shortDescription: 'Unified backup for cloud and on-prem resources.', 
    iconName: 'Shield',
    features: [],
    benefits: [],
    pricingModel: 'Vault Capacity + Protection Type',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cbr.html'
  },
  'sdrs': { 
    id: 'sdrs', 
    name: 'Business Recovery Service (BRS)', 
    category: 'Storage', 
    shortDescription: 'Real-time replication for zero-data-loss DR.', 
    iconName: 'Refresh',
    features: [],
    benefits: [],
    pricingModel: 'Protected Instances + Replication Traffic',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/sdrs.html'
  },
  'des': { 
    id: 'des', 
    name: 'Data Express Service (DES)', 
    category: 'Storage', 
    shortDescription: 'Physical data transport for massive migration.', 
    iconName: 'Truck',
    features: [],
    benefits: [],
    pricingModel: 'Per Order/Device + Duration',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/des.html'
  },
  'vbs': { 
    id: 'vbs', 
    name: 'Volume Backup Service (VBS)', 
    category: 'Storage', 
    shortDescription: 'Snapshot-based backup for EVS disks.', 
    iconName: 'Snapshot',
    features: [],
    benefits: [],
    pricingModel: 'Snapshot Storage Used',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/vbs.html'
  },
  'csbs': { 
    id: 'csbs', 
    name: 'Cloud Server Backup Service (CSBS)', 
    category: 'Storage', 
    shortDescription: 'Consistent backup for entire ECS instances.', 
    iconName: 'Server',
    features: [],
    benefits: [],
    pricingModel: 'Backup Capacity + Protection Fee',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/csbs.html'
  },

  // --- DATABASE ---
  'rds': { 
    id: 'rds', 
    name: 'Relational Database Service (RDS)', 
    category: 'Database', 
    shortDescription: 'Managed MySQL/PostgreSQL for standard web apps.', 
    iconName: 'Database',
    features: ['Automated Backups', 'Read Replicas', 'Multi-AZ HA', 'Monitoring'],
    benefits: ['Reduced admin overhead', 'Easy scaling', 'Reliability'],
    pricingModel: 'Instance Type + Storage',
    idealUseCases: ['Web Applications', 'Ecommerce', 'SaaS Platforms'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/rds.html'
  },
  'gaussdb': { 
    id: 'gaussdb', 
    name: 'GaussDB', 
    category: 'Database', 
    shortDescription: 'Distributed enterprise database for finance/high-scale.', 
    iconName: 'ServerCrash',
    features: ['Distributed Architecture', 'Global Consistency', 'PB-level Storage', 'Oracle Compatibility'],
    benefits: ['High concurrency', 'Financial-grade reliability', 'Massive throughput'],
    pricingModel: 'Node-based',
    idealUseCases: ['Core Banking', 'Government Systems', 'Large ERPs'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/opengauss.html'
  },
  'dds': { 
    id: 'dds', 
    name: 'Document Database Service (DDS)', 
    category: 'Database', 
    shortDescription: 'Managed MongoDB for unstructured data.', 
    iconName: 'FileJson',
    features: ['MongoDB Compatibility', 'Sharding', 'Replica Sets', 'Point-in-time Recovery'],
    benefits: ['Flexible schema', 'High availability', 'Scalable'],
    pricingModel: 'Instance/Node + Storage',
    idealUseCases: ['Gaming', 'IoT Data', 'Content Management'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dds.html'
  },
  'geminidb-redis': { 
    id: 'geminidb-redis', 
    name: 'GeminiDB Redis', 
    category: 'Database', 
    shortDescription: 'Disk-persistent Redis for massive caching.', 
    iconName: 'Layers',
    features: ['Redis Protocol', 'Decoupled Compute/Storage', 'Data Persistence', 'Fast Restart'],
    benefits: ['Cost effective vs Memory', 'Data safety', 'Massive capacity'],
    pricingModel: 'Compute + Storage capacity',
    idealUseCases: ['Gaming Leaderboards', 'Ad Targeting', 'Stream Processing'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/geminidb.html'
  },
  
  // --- INTELLIGENCE ---
  'mrs': { 
    id: 'mrs', 
    name: 'MapReduce Service (MRS)', 
    category: 'Intelligence', 
    shortDescription: 'Managed Hadoop/Spark for legacy ecosystem migration.', 
    iconName: 'GitMerge',
    features: ['Hadoop/Spark/Hive/HBase', 'Enterprise Security', 'Manager Console'],
    benefits: ['Full ecosystem support', 'Migrate without code changes'],
    pricingModel: 'Cluster Node Resources',
    idealUseCases: ['Data Warehousing', 'Offline Analytics', 'Legacy Hadoop Migration'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/mrs.html'
  },
  'dli': { 
    id: 'dli', 
    name: 'Data Lake Insight (DLI)', 
    category: 'Intelligence', 
    shortDescription: 'Serverless SQL analytics on OBS data.', 
    iconName: 'Search',
    features: ['Serverless Spark/Flink', 'Standard SQL', 'Separated Compute/Storage'],
    benefits: ['No infrastructure ops', 'Pay only for queries', 'Agile'],
    pricingModel: 'Scanned Data Volume or CU usage',
    idealUseCases: ['Log Analysis', 'Ad-hoc Queries', 'Real-time Stream Processing'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dli.html'
  },
  'dws': { 
    id: 'dws', 
    name: 'Data Warehouse Service (DWS)', 
    category: 'Intelligence', 
    shortDescription: 'Enterprise OLAP for high-performance reporting.', 
    iconName: 'BarChart',
    features: ['MPP Architecture', 'PostgreSQL Compatibility', 'Standard SQL'],
    benefits: ['High performance reporting', 'PB-scale analytics'],
    pricingModel: 'Cluster Nodes',
    idealUseCases: ['Business Intelligence (BI)', 'Data Marts', 'Reporting'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dws.html'
  },
  'modelarts': { 
    id: 'modelarts', 
    name: 'ModelArts', 
    category: 'Intelligence', 
    shortDescription: 'End-to-end AI development platform.', 
    iconName: 'Brain',
    features: ['AutoML', 'Jupyter Notebooks', 'Training & Inference', 'Data Labeling'],
    benefits: ['One-stop shop for AI', 'Lowers barrier to entry', 'Efficient training'],
    pricingModel: 'Training/Inference Duration',
    idealUseCases: ['Computer Vision', 'NLP', 'Custom AI Models'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/modelarts.html'
  },

  // --- NETWORKING ---
  'vpc': { 
    id: 'vpc', 
    name: 'Virtual Private Cloud (VPC)', 
    category: 'Networking', 
    shortDescription: 'Isolated network container.', 
    iconName: 'Globe',
    features: ['Subnets', 'Security Groups', 'Route Tables', 'ACLs'],
    benefits: ['Network isolation', 'Security control', 'Flexible topology'],
    pricingModel: 'Free (Resources inside charged)',
    idealUseCases: ['Network Segmentation', 'Secure Cloud Environment'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/vpc.html'
  },
  'elb': { 
    id: 'elb', 
    name: 'Elastic Load Balance (ELB)', 
    category: 'Networking', 
    shortDescription: 'Traffic distribution for high availability.', 
    iconName: 'Share2',
    features: ['L4 (TCP/UDP) & L7 (HTTP/HTTPS)', 'Health Checks', 'Session Stickiness'],
    benefits: ['High availability', 'Fault tolerance', 'Traffic management'],
    pricingModel: 'Instance Fee + Traffic',
    idealUseCases: ['Web Farms', 'Microservices Gateways'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/elb.html'
  },
  'dc': { 
    id: 'dc', 
    name: 'Direct Connect', 
    category: 'Networking', 
    shortDescription: 'Dedicated physical line for mission-critical hybrid cloud.', 
    iconName: 'Link',
    features: ['Physical Connection', 'High Bandwidth', 'Low Latency'],
    benefits: ['Stable connection', 'Enhanced security', 'Predictable performance'],
    pricingModel: 'Port Fee + Connection Fee',
    idealUseCases: ['Hybrid Cloud', 'Data Center Extension'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dc.html'
  },
  'cdn': { 
    id: 'cdn', 
    name: 'Content Delivery Network (CDN)', 
    category: 'Networking', 
    shortDescription: 'Global content delivery for static assets.', 
    iconName: 'Wifi',
    features: ['Global Nodes', 'Cache Control', 'HTTPS Support'],
    benefits: ['Faster load times', 'Reduced origin load', 'Better user experience'],
    pricingModel: 'Traffic Requests',
    idealUseCases: ['Video Streaming', 'Website Acceleration', 'Download Distribution'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cdn.html'
  },
  'nat': { 
    id: 'nat', 
    name: 'NAT Gateway', 
    category: 'Networking', 
    shortDescription: 'Enables Internet access for private servers.', 
    iconName: 'ArrowUpRight',
    features: [],
    benefits: [],
    pricingModel: 'Gateway Spec + Usage Duration',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/nat.html'
  },
  'eip': { 
    id: 'eip', 
    name: 'Elastic IP (EIP)', 
    category: 'Networking', 
    shortDescription: 'Independent public IP resources.', 
    iconName: 'MapPin',
    features: [],
    benefits: [],
    pricingModel: 'IP Fee + Bandwidth/Traffic',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/eip.html'
  },
  'vpcep': { 
    id: 'vpcep', 
    name: 'VPC Endpoint (VPCEP)', 
    category: 'Networking', 
    shortDescription: 'Private connection to cloud services across VPCs.', 
    iconName: 'Link2',
    features: [],
    benefits: [],
    pricingModel: 'Endpoint Fee + Traffic',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/vpcep.html'
  },
  'vpn': { 
    id: 'vpn', 
    name: 'Virtual Private Network (VPN)', 
    category: 'Networking', 
    shortDescription: 'Secure encrypted tunnel over the public internet.', 
    iconName: 'Lock',
    features: [],
    benefits: [],
    pricingModel: 'Gateway Fee + Bandwidth',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/vpn.html'
  },
  'cc': { 
    id: 'cc', 
    name: 'Cloud Connect', 
    category: 'Networking', 
    shortDescription: 'One-stop global network interconnection.', 
    iconName: 'CloudRain',
    features: [],
    benefits: ['Global compliance', 'Low latency cross-border', 'No complex VPN config'],
    pricingModel: 'Bandwidth Package',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cc.html'
  },
  'er': { 
    id: 'er', 
    name: 'Enterprise Router (ER)', 
    category: 'Networking', 
    shortDescription: 'Centralized router for complex network topologies.', 
    iconName: 'GitMerge',
    features: [],
    benefits: [],
    pricingModel: 'Instance + Connection + Traffic',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/er.html'
  },
  'dns': { 
    id: 'dns', 
    name: 'Domain Name Service (DNS)', 
    category: 'Networking', 
    shortDescription: 'Highly available authoritative DNS resolution.', 
    iconName: 'List',
    features: [],
    benefits: ['High availability', 'Fast resolution speed', 'Unified management'],
    pricingModel: 'Free (Basic) / Quota Based',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dns.html'
  },
  'ga': { 
    id: 'ga', 
    name: 'Global Accelerator (GA)', 
    category: 'Networking', 
    shortDescription: 'Network acceleration for global applications.', 
    iconName: 'Zap',
    features: [],
    benefits: [],
    pricingModel: 'Instance + Traffic',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/ga.html'
  },

  // --- SECURITY & MIDDLEWARE ---
  'waf': { 
    id: 'waf', 
    name: 'Web Application Firewall (WAF)', 
    category: 'Security', 
    shortDescription: 'Layer 7 protection against SQLi, XSS.', 
    iconName: 'ShieldCheck',
    features: ['OWASP Top 10 Protection', 'Custom Rules', 'Bot Mitigation'],
    benefits: ['Application security', 'Compliance', 'Real-time defense'],
    pricingModel: 'Monthly Subscription',
    idealUseCases: ['Public Websites', 'E-commerce', 'API Protection'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/waf.html'
  },
  'hss': { 
    id: 'hss', 
    name: 'Host Security Service (HSS)', 
    category: 'Security', 
    shortDescription: 'Endpoint protection and intrusion detection.', 
    iconName: 'Lock',
    features: ['Vulnerability Scan', 'Intrusion Detection', 'Ransomware Protection'],
    benefits: ['Server hardening', 'Threat visibility', 'Compliance reporting'],
    pricingModel: 'Per Host/Month',
    idealUseCases: ['Server Security', 'Compliance Audits'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/hss.html'
  },
  'dms-kafka': { 
    id: 'dms-kafka', 
    name: 'DMS for Kafka', 
    category: 'Middleware', 
    shortDescription: 'High throughput log aggregation.', 
    iconName: 'MessageSquare',
    features: ['Managed Kafka', 'Auto-scaling', 'Message persistence'],
    benefits: ['High throughput', 'Decoupling systems', 'Reliability'],
    pricingModel: 'Instance Specification',
    idealUseCases: ['Log Aggregation', 'Stream Processing', 'Event Sourcing'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/kafka.html'
  },
  'dcs': { 
    id: 'dcs', 
    name: 'Distributed Cache Service (DCS)', 
    category: 'Middleware', 
    shortDescription: 'In-memory caching (Redis/Memcached).', 
    iconName: 'Zap',
    features: ['Redis/Memcached Compatible', 'Hot Standby', 'Backup/Restore'],
    benefits: ['Sub-millisecond latency', 'High concurrency', 'Managed service'],
    pricingModel: 'Instance Memory Size',
    idealUseCases: ['Session Store', 'Database Caching', 'Real-time Analytics'],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/dcs.html'
  },
  'codearts_req': { 
    id: 'codearts_req', 
    name: 'CodeArts Req', 
    category: 'Developer Services', 
    shortDescription: 'Agile project management and requirement tracking.', 
    iconName: 'Board',
    features: [],
    benefits: ['Visualized progress tracking', 'Efficient team collaboration', 'Customizable workflows'],
    pricingModel: 'Free (Basic) / Monthly per User (Pro/Enterprise)',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/projectman.html'
  },
  'codearts_repo': { 
    id: 'codearts_repo', 
    name: 'CodeArts Repo', 
    category: 'Developer Services', 
    shortDescription: 'Secure, Git-based distributed code hosting.', 
    iconName: 'Git-Repo',
    features: [],
    benefits: [],
    pricingModel: 'Free / Storage & User Quota Packages',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/codehub.html'
  },
  'codearts_pipeline': { 
    id: 'codearts_pipeline', 
    name: 'CodeArts Pipeline', 
    category: 'Developer Services', 
    shortDescription: 'Visualized orchestration for continuous delivery.', 
    iconName: 'Pipeline',
    features: [],
    benefits: [],
    pricingModel: 'Pay-per-use (Execution Duration) / Subscription',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cloudpipeline.html'
  },
  'codearts_check': { 
    id: 'codearts_check', 
    name: 'CodeArts Check', 
    category: 'Developer Services', 
    shortDescription: 'Automated static code analysis and quality check.', 
    iconName: 'Check-Shield',
    features: [],
    benefits: [],
    pricingModel: 'Pay-per-use / Subscription',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/codecheck.html'
  },
  'codearts_build': { 
    id: 'codearts_build', 
    name: 'CodeArts Build', 
    category: 'Developer Services', 
    shortDescription: 'Cloud-based compilation and build automation.', 
    iconName: 'Build-Hammer',
    features: [],
    benefits: ['No build server maintenance', 'High-speed parallel builds', 'Elastic scalability'],
    pricingModel: 'Pay-per-use (Build Duration) / Subscription',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cloudbuild.html'
  },
  'codearts_deploy': { 
    id: 'codearts_deploy', 
    name: 'CodeArts Deploy', 
    category: 'Developer Services', 
    shortDescription: 'Automated application deployment service.', 
    iconName: 'Deploy-Rocket',
    features: [],
    benefits: [],
    pricingModel: 'Pay-per-use / Subscription',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/clouddeploy.html'
  },
  'codearts_testplan': { 
    id: 'codearts_testplan', 
    name: 'CodeArts TestPlan', 
    category: 'Developer Services', 
    shortDescription: 'One-stop test management and automation platform.', 
    iconName: 'Test-Beaker',
    features: [],
    benefits: ['Full test lifecycle management', 'Improved test coverage', 'Collaborative testing'],
    pricingModel: 'Pay-per-use / Subscription',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cloudtest.html'
  },
  'codearts_artifact': { 
    id: 'codearts_artifact', 
    name: 'CodeArts Artifact', 
    category: 'Developer Services', 
    shortDescription: 'Secure software artifact and dependency management.', 
    iconName: 'Artifact-Box',
    features: [],
    benefits: [],
    pricingModel: 'Storage Capacity + Traffic',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cloudrelease.html'
  },
  'cae': { 
    id: 'cae', 
    name: 'Cloud Application Engine (CAE)', 
    category: 'Developer Services', 
    shortDescription: 'Serverless platform for hosting web apps and microservices.', 
    iconName: 'App-Engine',
    features: [],
    benefits: [],
    pricingModel: 'Pay-per-use (vCPU/Memory Duration)',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cae.html'
  },
  'cpts': { 
    id: 'cpts', 
    name: 'CodeArts PerfTest', 
    category: 'Developer Services', 
    shortDescription: 'Massive-scale performance and stress testing.', 
    iconName: 'Speed-Test',
    features: [],
    benefits: [],
    pricingModel: 'Pay-per-use (VUM - Virtual User Minutes)',
    idealUseCases: [],
    docUrl: 'https://www.huaweicloud.com/intl/en-us/product/cpts.html'
  },
};

export const scenarios: Scenario[] = [
  // Compute Scenarios
  {
    id: 'web-hosting-std',
    title: 'Standard Enterprise Web App',
    description: 'Hosting a typical Nginx/Apache web server farm with variable traffic patterns (e.g., Black Friday).',
    category: 'Compute',
    recommendedServiceId: 'ecs',
    rationale: 'Offers the best balance of cost and control. Supports Auto Scaling to handle traffic peaks.',
    keyFactors: ['Vertical/Horizontal Scaling', 'Standard OS support', 'General Purpose']
  },
  {
    id: 'hpc-trading',
    title: 'High-Frequency Trading / HPC',
    description: 'Workloads where micro-latency from virtualization is unacceptable, or specialized hardware access is needed.',
    category: 'Compute',
    recommendedServiceId: 'bms',
    rationale: 'Eliminates the hypervisor layer ("noisy neighbor" effect) for deterministic performance.',
    keyFactors: ['No Hypervisor overhead', 'Direct Hardware Access', 'Steady State High Load']
  },
  {
    id: 'compliance-banking',
    title: 'Regulatory/Banking Core System',
    description: 'Sensitive data handling where regulations dictate physical isolation, but cloud flexibility is still desired.',
    category: 'Compute',
    recommendedServiceId: 'deh',
    rationale: 'Provides a physical server dedicated to a single tenant while allowing virtualization management (ECS) within that host.',
    keyFactors: ['Physical Isolation', 'Compliance', 'BYOL (Bring Your Own License)']
  },
  {
    id: 'personal-blog',
    title: 'Small Business Website / Blog',
    description: 'Simple corporate website, personal blog, or small e-commerce store.',
    category: 'Compute',
    recommendedServiceId: 'flexus-l',
    rationale: 'An "out-of-the-box" bundled solution (compute + network + storage) that reduces configuration complexity.',
    keyFactors: ['Simplicity', 'Low Cost', 'Bundled Solution']
  },
  {
    id: 'memory-cache-node',
    title: 'Memory-Heavy Caching Node',
    description: 'Workloads like caching servers or in-memory databases that need lots of RAM but low CPU.',
    category: 'Compute',
    recommendedServiceId: 'flexus-x',
    rationale: 'Allows custom vCPU-to-Memory ratios (e.g., 2 vCPU : 12 GB RAM) to avoid over-provisioning CPU.',
    keyFactors: ['Flexible Ratios', 'Cost Optimization', 'Memory Intensive']
  },
  {
    id: 'k8s-prod',
    title: 'Microservices Production Cluster',
    description: 'Long-running microservices requiring full control over cluster configuration and networking.',
    category: 'Compute',
    recommendedServiceId: 'cce',
    rationale: 'Managed Kubernetes service providing full control and integration with enterprise networking.',
    keyFactors: ['Full K8s Control', 'Long-running', 'Ecosystem Integration']
  },
  {
    id: 'flash-sale',
    title: 'Flash Sale / Traffic Burst',
    description: 'Extreme, unpredictable traffic spikes where provisioning nodes takes too long.',
    category: 'Compute',
    recommendedServiceId: 'cci',
    rationale: 'Serverless Kubernetes that creates pods in seconds, providing immediate burst capacity.',
    keyFactors: ['Second-level scaling', 'Serverless K8s', 'No node management']
  },
  {
    id: 'thumbnail-gen',
    title: 'Image Processing / ETL Triggers',
    description: 'Event-driven tasks, such as generating a thumbnail when an image is uploaded.',
    category: 'Compute',
    recommendedServiceId: 'functiongraph',
    rationale: 'Pay-per-execution model. Ideally suited for event-driven "glue" code.',
    keyFactors: ['Event-driven', 'Pay-per-use', 'Zero Ops']
  },
  {
    id: 'sme-website-light',
    title: 'SME Corporate Website/Blog',
    description: 'A small business website or personal blog with moderate, predictable traffic and limited IT staff.',
    category: 'Compute',
    recommendedServiceId: 'flexus-l',
    rationale: 'The bundled \'out-of-the-box\' nature removes complexity (VPC, Security Groups) and provides predictable monthly costs.',
    keyFactors: []
  },
  {
    id: 'hpc-simulation',
    title: 'High-Performance Computing Simulation',
    description: 'Running fluid dynamics or genome sequencing where computational latency must be minimized and consistent.',
    category: 'Compute',
    recommendedServiceId: 'bms',
    rationale: 'Eliminates the hypervisor layer to prevent \'noisy neighbor\' interference and allows direct hardware access (RDMA).',
    keyFactors: []
  },
  {
    id: 'flash-sale-burst',
    title: 'E-commerce Flash Sale',
    description: 'Handling an unpredictable, massive spike in traffic that occurs in seconds (e.g., ticket sales).',
    category: 'Compute',
    recommendedServiceId: 'cci',
    rationale: 'Serverless containers can scale out in seconds, whereas provisioning ECS VMs takes minutes, risking downtime during the initial spike.',
    keyFactors: []
  },
  {
    id: 'regulatory-banking',
    title: 'Core Banking System',
    description: 'A mission-critical financial system subject to strict regulatory requirements regarding data isolation.',
    category: 'Compute',
    recommendedServiceId: 'dcc',
    rationale: 'Provides a physically isolated resource pool, ensuring no resource sharing with other public cloud tenants while maintaining cloud flexibility.',
    keyFactors: []
  },
  {
    id: 'mobile-cloud-gaming',
    title: 'Cloud Gaming Platform',
    description: 'Hosting Android-based games rendered in the cloud and streamed to users\' devices.',
    category: 'Compute',
    recommendedServiceId: 'cph',
    rationale: 'Uses ARM-based servers to run Android natively, avoiding the 40% performance penalty of emulating Android on x86 architecture.',
    keyFactors: []
  },
  {
    id: 'image-processing-etl',
    title: 'Event-Driven Image Processing',
    description: 'Generating thumbnails or processing metadata whenever a user uploads an image to object storage.',
    category: 'Compute',
    recommendedServiceId: 'functiongraph',
    rationale: 'Perfect for event-driven tasks. You pay only for the milliseconds of processing time per image, with zero cost when idle.',
    keyFactors: ['Event-driven', 'Pay-per-execution', 'Zero Idle Cost']
  },
  {
    id: 'legacy-oracle-migration',
    title: 'Legacy Database Migration',
    description: 'Migrating an on-premise Oracle database with licensing tied to physical CPU cores.',
    category: 'Compute',
    recommendedServiceId: 'bms',
    rationale: 'Allows for precise physical core counting to satisfy licensing audits, which is difficult or expensive in virtualized environments.',
    keyFactors: []
  },
  {
    id: 'multi-cloud-k8s',
    title: 'Hybrid Cloud App Delivery',
    description: 'Managing a microservice application distributed across Huawei Cloud and an on-premise data center.',
    category: 'Compute',
    recommendedServiceId: 'cce',
    rationale: 'Provides a unified control plane to manage traffic, policy, and deployment across disparate Kubernetes clusters.',
    keyFactors: []
  },
  {
    id: 'memory-caching',
    title: 'High-Performance Caching Layer',
    description: 'A Redis caching layer that requires large amounts of RAM but minimal CPU usage.',
    category: 'Compute',
    recommendedServiceId: 'flexus-x',
    rationale: 'Allows customization of vCPU-to-Memory ratios (e.g., low CPU, high RAM), preventing the need to overpay for CPU just to get memory.',
    keyFactors: []
  },

  // Storage Scenarios
  {
    id: 'boot-disk',
    title: 'OS Boot Disk',
    description: 'Storage required to boot an operating system for ECS or BMS.',
    category: 'Storage',
    recommendedServiceId: 'evs',
    rationale: 'Only block storage supports OS booting and provides the necessary low latency.',
    keyFactors: ['Bootable', 'Low Latency', 'Block Level']
  },
  {
    id: 'video-repo',
    title: 'Video/Image Repository',
    description: 'Storing images and videos served directly to the internet or via CDN.',
    category: 'Storage',
    recommendedServiceId: 'obs',
    rationale: 'Provides infinite scaling, direct HTTP access, and seamless CDN integration.',
    keyFactors: ['Unstructured Data', 'HTTP Access', 'Massive Scale']
  },
  {
    id: 'hpc-data',
    title: 'HPC / AI Training Data',
    description: 'Hundreds of compute nodes accessing the same dataset simultaneously (e.g., gene sequencing).',
    category: 'Storage',
    recommendedServiceId: 'sfs-turbo',
    rationale: 'Optimized for high throughput and IOPS under concurrency ("thundering herd" problem).',
    keyFactors: ['Shared Access', 'High Performance', 'Media Rendering']
  },
  {
    id: 'critical-db',
    title: 'Mission-Critical Database',
    description: 'Hosting a core banking database requiring consistent IOPS and data isolation.',
    category: 'Storage',
    recommendedServiceId: 'dss',
    rationale: 'Dedicated physical storage resources eliminate \'noisy neighbor\' interference.',
    keyFactors: []
  },
  {
    id: 'ai-training-storage',
    title: 'AI Model Training Storage',
    description: 'Storage for high-performance AI training clusters where thousands of nodes access data simultaneously.',
    category: 'Storage',
    recommendedServiceId: 'sfsturbo',
    rationale: 'Optimized to handle the \'thundering herd\' problem with microsecond latency and high throughput.',
    keyFactors: []
  },
  {
    id: 'disaster-recovery',
    title: 'Zero-Loss Disaster Recovery',
    description: 'Ensuring business continuity with zero data loss in case of a site failure.',
    category: 'Storage',
    recommendedServiceId: 'sdrs',
    rationale: 'Provides real-time replication with RPO=0, ensuring no data is lost during failover.',
    keyFactors: []
  },
  {
    id: 'offline-migration',
    title: 'Massive Offline Data Migration',
    description: 'Moving Petabytes of archival data from an on-premise datacenter with slow internet.',
    category: 'Storage',
    recommendedServiceId: 'des',
    rationale: 'Physical transport via Teleport device is significantly faster than uploading via internet.',
    keyFactors: []
  },
  {
    id: 'consistent-server-backup',
    title: 'Multi-Disk Consistency Backup',
    description: 'Backing up an ECS instance hosting a database where data and logs reside on separate disks, requiring them to be captured at the exact same moment.',
    category: 'Storage',
    recommendedServiceId: 'csbs',
    rationale: 'Ensures \'crash consistency\' across multiple disks attached to a single server, preventing data corruption during restore for complex applications.',
    keyFactors: []
  },
  {
    id: 'massive-offline-migration',
    title: 'Petabyte-Scale Data Ingestion',
    description: 'Migrating 500 TB of historical video archives or geological survey data from a remote datacenter with limited internet bandwidth to Huawei Cloud OBS.',
    category: 'Storage',
    recommendedServiceId: 'des',
    rationale: 'Utilizes physical Teleport devices to transport data offline, bypassing internet bandwidth bottlenecks and significantly reducing migration time.',
    keyFactors: []
  },
  {
    id: 'regulatory-dr-compliance',
    title: 'Cross-Region Disaster Recovery',
    description: 'Implementing a unified backup policy that automatically replicates backups to a geographically distant region to meet regulatory DR compliance.',
    category: 'Storage',
    recommendedServiceId: 'cbr',
    rationale: 'Provides a unified console for policy-based automation and natively supports Cross-Region Replication (CRR) for disaster recovery compliance.',
    keyFactors: []
  },

  // Database
  {
    id: 'standard-cms',
    title: 'Standard CMS/Web App DB',
    description: 'Backend for Wordpress, Drupal, or standard SaaS applications.',
    category: 'Database',
    recommendedServiceId: 'rds',
    rationale: 'Commodity choice managing backups, patching, and HA. Ideal for Lift and Shift.',
    keyFactors: ['Managed SQL', 'Compatibility', 'Cost Effective']
  },
  {
    id: 'bank-oracle-mig',
    title: 'Financial Core / Oracle Migration',
    description: 'Bank migrating off Exadata, requiring extreme scale and distributed transactions.',
    category: 'Database',
    recommendedServiceId: 'gaussdb',
    rationale: 'Distributed architecture offering global consistency and massive throughput.',
    keyFactors: ['Distributed Transactions', 'Financial Grade', 'High Concurrency']
  },
  {
    id: 'gaming-leaderboard',
    title: 'Gaming Leaderboard',
    description: 'Massive caching requirements where data must persist even after restart.',
    category: 'Database',
    recommendedServiceId: 'geminidb-redis',
    rationale: 'Persists data to high-speed storage unlike standard memory-only Redis.',
    keyFactors: ['Persistence', 'High Speed', 'Caching']
  },

  // Intelligence
  {
    id: 'legacy-hadoop',
    title: 'Migrating Legacy Hadoop Cluster',
    description: 'Company with a massive on-prem Hadoop cluster and complex custom configs.',
    category: 'Intelligence',
    recommendedServiceId: 'mrs',
    rationale: 'Provides full control to replicate complex on-prem environments.',
    keyFactors: ['Hadoop/Spark', 'Cluster Control', 'Legacy Migration']
  },
  {
    id: 'serverless-sql',
    title: 'Agile Data Exploration',
    description: 'Running SQL queries on data in OBS without managing servers.',
    category: 'Intelligence',
    recommendedServiceId: 'dli',
    rationale: 'Serverless Big Data. Handles batch and stream processing via SQL.',
    keyFactors: ['Serverless', 'SQL', 'Agile']
  },

  // Network/Security/Middleware
  {
    id: 'hybrid-banking',
    title: 'Mission-Critical Hybrid Connectivity',
    description: 'Connecting on-premise banking data center to cloud for active-active replication.',
    category: 'Networking',
    recommendedServiceId: 'dc',
    rationale: 'Guarantees bandwidth, low latency, and security (traffic avoids public internet).',
    keyFactors: ['SLA Guarantee', 'Security', 'Low Latency']
  },
  {
    id: 'web-defense',
    title: 'Public Web App Protection',
    description: 'Protecting a public website from SQL Injection and XSS attacks.',
    category: 'Security',
    recommendedServiceId: 'waf',
    rationale: 'Inspects Layer 7 traffic to virtual patch vulnerabilities.',
    keyFactors: ['Layer 7 Inspection', 'OWASP Top 10', 'App Security']
  },
  {
    id: 'global-web-app',
    title: 'High-Performance Global Web App',
    description: 'Delivering static and dynamic content to users worldwide with minimal latency.',
    category: 'Networking',
    recommendedServiceId: 'cdn',
    rationale: 'Caches static content at the edge (2800+ nodes) to reduce load times for global users.',
    keyFactors: []
  },
  {
    id: 'secure-backend-access',
    title: 'Secure Serverless Internet Access',
    description: 'Allowing backend database servers in a private subnet to update without exposing them to the internet.',
    category: 'Networking',
    recommendedServiceId: 'nat',
    rationale: 'Using SNAT allows private servers to initiate outbound connections while remaining invisible to inbound traffic.',
    keyFactors: []
  },
  {
    id: 'cross-border-office',
    title: 'Multinational Office Interconnection',
    description: 'Connecting VPCs in Hong Kong and Singapore for a unified internal office network.',
    category: 'Networking',
    recommendedServiceId: 'cc',
    rationale: 'Cloud Connect creates a compliant, low-latency private network across regions using Huawei\'s backbone.',
    keyFactors: []
  },
  {
    id: 'sme-hybrid',
    title: 'Cost-Effective Hybrid Cloud',
    description: 'A startup connecting their local office to the cloud for development and testing.',
    category: 'Networking',
    recommendedServiceId: 'vpn',
    rationale: 'VPN establishes a secure tunnel over the public internet, offering a low-cost alternative to Direct Connect.',
    keyFactors: []
  },
  {
    id: 'private-service-access',
    title: 'Private SaaS Access',
    description: 'Accessing Huawei Cloud services (like OBS or DNS) from a VPC without traversing the public internet.',
    category: 'Networking',
    recommendedServiceId: 'vpcep',
    rationale: 'Keeps traffic entirely within the Huawei Cloud internal network, enhancing security and reducing latency.',
    keyFactors: []
  },
  {
    id: 'serverless-web-hosting',
    title: 'Zero-Ops Web App Hosting',
    description: 'Hosting a web application or microservice without managing servers or K8s clusters.',
    category: 'Developer Services',
    recommendedServiceId: 'cae',
    rationale: 'Allows deploying directly from source code or images with automatic scaling and no infrastructure maintenance.',
    keyFactors: []
  },
  {
    id: 'performance-stress-test',
    title: 'High-Concurrency Stress Testing',
    description: 'Simulating Black Friday traffic loads to test system stability before a major event.',
    category: 'Developer Services',
    recommendedServiceId: 'cpts',
    rationale: 'Generates massive concurrent virtual users to simulate peak loads and identify performance bottlenecks.',
    keyFactors: []
  },
  {
    id: 'secure-code-collab',
    title: 'Secure Enterprise Code Collaboration',
    description: 'A distributed team working on proprietary code requiring strict access control and IP protection.',
    category: 'Developer Services',
    recommendedServiceId: 'codearts_repo',
    rationale: 'Provides enterprise-grade security features like IP allowlists, granular branch permissions, and audit logs.',
    keyFactors: []
  }
];

// COMPREHENSIVE DECISION TREE
export const decisionWizard: WizardNode[] = [
  // Level 1: Primary Goal
  {
    id: 'start',
    question: 'What is your primary goal for this project?',
    options: [
      { label: 'Host an Application or Website (Compute)', nextNodeId: 'compute-type' },
      { label: 'Store Files, Data, or Backups', nextNodeId: 'storage-type' },
      { label: 'Manage a Database', nextNodeId: 'db-type' },
      { label: 'Analyze Data or AI/ML', nextNodeId: 'intel-type' },
      { label: 'Secure or Connect Networks', nextNodeId: 'net-sec-type' },
      { label: 'Develop Applications (Developer Services)', nextNodeId: 'dev-type' },
    ]
  },

  // --- DEVELOPER SERVICES BRANCH ---
  {
    id: 'dev-type',
    question: 'What developer service do you need?',
    options: [
      { label: 'Project Management and Requirements', resultServiceId: 'codearts_req' },
      { label: 'Code Hosting and Collaboration', resultServiceId: 'codearts_repo' },
      { label: 'CI/CD Pipelines', resultServiceId: 'codearts_pipeline' },
      { label: 'Code Quality Checks', resultServiceId: 'codearts_check' },
      { label: 'Automated Builds', resultServiceId: 'codearts_build' },
      { label: 'Application Deployment', resultServiceId: 'codearts_deploy' },
      { label: 'Testing and Test Plans', resultServiceId: 'codearts_testplan' },
      { label: 'Artifact Management', resultServiceId: 'codearts_artifact' },
      { label: 'Serverless App Hosting', resultServiceId: 'cae' },
      { label: 'Performance Testing', resultServiceId: 'cpts' },
    ]
  },

  // --- COMPUTE BRANCH ---
  {
    id: 'compute-type',
    question: 'What is the nature of your application?',
    options: [
      { label: 'Standard Web App / General Purpose', nextNodeId: 'compute-scaling' },
      { label: 'Containerized / Microservices', nextNodeId: 'compute-containers' },
      { label: 'Event-driven / Short Tasks', resultServiceId: 'functiongraph' },
      { label: 'Simple Personal Blog / Small Business', resultServiceId: 'flexus-l' },
      { label: 'High Performance / Specialized Hardware', nextNodeId: 'compute-hpc' },
    ]
  },
  {
    id: 'compute-scaling',
    question: 'Do you need specific vCPU:Memory ratios (e.g. Memory Optimized)?',
    options: [
      { label: 'Yes, I need to customize ratios', resultServiceId: 'flexus-x' },
      { label: 'No, standard balanced resources', resultServiceId: 'ecs' },
    ]
  },
  {
    id: 'compute-containers',
    question: 'Do you need full control over the Kubernetes nodes?',
    options: [
      { label: 'Yes, full cluster management', resultServiceId: 'cce' },
      { label: 'No, serverless burstable pods', resultServiceId: 'cci' },
    ]
  },
  {
    id: 'compute-hpc',
    question: 'Do you require physical isolation or BYOL?',
    options: [
      { label: 'Yes, physical isolation required', resultServiceId: 'deh' },
      { label: 'No, just raw performance', resultServiceId: 'bms' },
    ]
  },

  // --- STORAGE BRANCH ---
  {
    id: 'storage-type',
    question: 'What type of data are you storing?',
    options: [
      { label: 'Operating System / Boot Data', resultServiceId: 'evs' },
      { label: 'Unstructured Files (Images, Videos, Backups)', resultServiceId: 'obs' },
      { label: 'Shared Files (NAS) for multiple servers', nextNodeId: 'storage-file' },
    ]
  },
  {
    id: 'storage-file',
    question: 'What is the performance requirement?',
    options: [
      { label: 'Standard file sharing', resultServiceId: 'sfs' },
      { label: 'High-performance / HPC / AI Training', resultServiceId: 'sfs-turbo' },
    ]
  },

  // --- DATABASE BRANCH ---
  {
    id: 'db-type',
    question: 'What type of database engine do you need?',
    options: [
      { label: 'Relational (SQL)', nextNodeId: 'db-sql' },
      { label: 'NoSQL / Document', resultServiceId: 'dds' },
      { label: 'In-Memory Caching (Redis)', nextNodeId: 'db-cache' },
    ]
  },
  {
    id: 'db-sql',
    question: 'What is the scale of your transaction volume?',
    options: [
      { label: 'Standard Enterprise / Web App', resultServiceId: 'rds' },
      { label: 'Mission Critical / Financial / Massive Scale', resultServiceId: 'gaussdb' },
    ]
  },
  {
    id: 'db-cache',
    question: 'Do you need disk persistence for your cache?',
    options: [
      { label: 'Yes, strict persistence needed', resultServiceId: 'geminidb-redis' },
      { label: 'No, pure in-memory is fine', resultServiceId: 'dcs' },
    ]
  },

  // --- INTELLIGENCE BRANCH ---
  {
    id: 'intel-type',
    question: 'What is your primary analytics task?',
    options: [
      { label: 'Developing / Training AI Models', resultServiceId: 'modelarts' },
      { label: 'Big Data Processing', nextNodeId: 'intel-bigdata' },
    ]
  },
  {
    id: 'intel-bigdata',
    question: 'Do you want to manage clusters or use serverless SQL?',
    options: [
      { label: 'Manage Hadoop/Spark Clusters (Migration)', resultServiceId: 'mrs' },
      { label: 'Serverless SQL on OBS data', resultServiceId: 'dli' },
      { label: 'Enterprise Data Warehousing', resultServiceId: 'dws' },
    ]
  },

  // --- NETWORK/SEC BRANCH ---
  {
    id: 'net-sec-type',
    question: 'Are you focusing on connectivity or protection?',
    options: [
      { label: 'Connectivity / Traffic Management', nextNodeId: 'net-conn' },
      { label: 'Security / Protection', nextNodeId: 'sec-prot' },
    ]
  },
  {
    id: 'net-conn',
    question: 'What do you need to connect?',
    options: [
      { label: 'Connect On-Prem to Cloud (Private)', resultServiceId: 'dc' },
      { label: 'Distribute Internet Traffic (Load Balancing)', resultServiceId: 'elb' },
      { label: 'Accelerate Content Delivery', resultServiceId: 'cdn' },
      { label: 'Isolate Network Environment', resultServiceId: 'vpc' },
    ]
  },
  {
    id: 'sec-prot',
    question: 'What are you protecting?',
    options: [
      { label: 'Web Applications (SQLi, XSS)', resultServiceId: 'waf' },
      { label: 'Server Endpoints (Intrusion/Ransomware)', resultServiceId: 'hss' },
    ]
  },
];