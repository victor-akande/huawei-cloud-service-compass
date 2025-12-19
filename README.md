# Huawei Cloud Service Compass

A web-based interactive decision support tool designed to help users select optimal Huawei Cloud services for their architectural needs. It provides a user-friendly interface to explore common cloud patterns, answer guided questions for tailored recommendations, browse a comprehensive service catalog, and compare selected services side-by-side, all while emphasizing Huawei Cloud's offerings for compute, storage, networking, databases, intelligence, security, middleware, and developer services.

## Features

- **Scenario Explorer**: A tabbed interface to filter and browse predefined architectural scenarios (e.g., web hosting, HPC, database migration) by category or search, displaying recommended services with rationales and key factors.
- **Interactive Decision Tree (Wizard)**: A step-by-step questionnaire that guides users through questions about their workload goals, leading to personalized service recommendations with details like features, benefits, and documentation links.
- **Service Glossary**: An alphabetical or filtered list of Huawei Cloud services, allowing users to view in-depth information (e.g., pricing models, ideal use cases) and select up to three for comparison.
- **Service Comparison**: A table view to compare selected services across attributes like descriptions, features, pricing, benefits, and use cases, with options to remove items.
- Additional capabilities: Responsive design with Tailwind CSS, dynamic icon rendering using Lucide React, state management for tabs and selections, and integration with external documentation via links.

## Target Audience

Cloud architects, IT professionals, developers, and enterprises migrating to or optimizing workloads on Huawei Cloud, particularly those needing guidance on service selection for scenarios like web apps, AI training, hybrid connectivity, or compliance-driven deployments. It assumes familiarity with cloud concepts but simplifies complex decisions through visual aids and structured workflows.

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Deployment**: Static site (can be hosted on any web server)

## Installation and Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/victor-akande/huawei-cloud-architect-tool.git
   cd huawei-cloud-architect-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` (or the port shown in the terminal).

## Building for Production

To build the project for production:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Contributing

This project is open-source. Contributions are welcome! Please fork the repository and submit a pull request. The main branch is `main`, and development happens on `dev`.

## License

[Specify license if any, e.g., MIT]

## Contact

Built and maintained by [Victor Akande](https://www.linkedin.com/in/avictorx).</content>
<parameter name="filePath">/workspaces/huawei-cloud-architect-tool/README.md
