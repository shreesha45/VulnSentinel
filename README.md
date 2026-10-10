# VulnSentinel
An SBOM based software supply chain vulnerability analysis and risk prioritzation platform.

🛡️ VulnSentinel

Intelligent Software Supply Chain Vulnerability Analysis & Risk Prioritization

See the risk. Prioritize the threat. Secure your software.

VulnSentinel is a software supply chain security platform designed to analyze Software Bills of Materials (SBOMs), identify known vulnerabilities in software dependencies, and help developers prioritize remediation using vulnerability intelligence and transparent risk assessment.

By combining vulnerability databases, exploitation signals, and AI-assisted explanations, VulnSentinel aims to make software dependency security more understandable and actionable.

«🚧 Project Status: Under active development. Features and integrations will be released incrementally.»

---

🎯 Problem Statement

Modern applications depend on numerous open-source libraries and third-party packages. These dependencies may contain known vulnerabilities that introduce security risks into the software supply chain.

Developers often face challenges such as:

- Identifying vulnerable dependencies across large projects.
- Understanding the severity and practical significance of reported vulnerabilities.
- Determining which vulnerabilities should be addressed first.
- Finding reliable remediation information.
- Managing and reviewing vulnerability findings across multiple scans.

Traditional vulnerability reports can overwhelm developers with findings without providing enough context to guide remediation.

💡 Our Solution

VulnSentinel aims to transform SBOM data into actionable security insights.

The platform will allow developers to upload an SBOM, analyze its components against vulnerability intelligence sources, review prioritized findings, and explore remediation guidance.

Core Objectives

- Automate SBOM ingestion and component analysis.
- Identify known vulnerabilities in software dependencies.
- Incorporate severity and exploitation intelligence into risk prioritization.
- Explain security findings using AI-assisted analysis.
- Maintain scan history for tracking and review.
- Present security information through an intuitive dashboard.

---

✨ Planned Features

1. 📦 SBOM Analysis

- Upload SBOM files in supported JSON formats.
- Support for SPDX and CycloneDX.
- Extract package names, versions, and available identifiers.
- Validate input files and handle malformed documents.

2. 🔍 Vulnerability Detection

- Integrate the OSV vulnerability database.
- Match software components against known vulnerability records.
- Display vulnerability identifiers and available severity information.
- Provide references to authoritative vulnerability records.

3. ⚖️ Risk Prioritization

- Analyze CVSS severity scores when available.
- Incorporate EPSS exploitation probability estimates.
- Identify vulnerabilities listed in CISA's Known Exploited Vulnerabilities catalog.
- Rank findings using transparent, documented prioritization rules.
- Explain why particular findings receive higher priority.

4. 🤖 AI-Assisted Security Analysis

- Generate understandable explanations of vulnerability findings.
- Assist developers in interpreting security reports.
- Suggest potential remediation actions based on verified vulnerability information.
- Help developers understand recommended dependency updates.

AI-generated recommendations will be treated as suggestions and distinguished from verified vulnerability intelligence.

5. 📊 Security Dashboard

- Display analyzed software components.
- Summarize vulnerability findings by severity.
- Highlight known-exploited vulnerabilities.
- Present prioritized remediation tasks.
- Provide access to individual vulnerability details.

6. 🗄️ Scan History

- Store scan metadata and results using SQLite.
- Review previous scan results.
- Support future comparisons between scans.

7. 📄 Security Reports

- Generate downloadable vulnerability reports.
- Include component details, vulnerability references, and available risk indicators.
- Present remediation priorities in a developer-friendly format.

---

🧰 Technology Stack

Technology| Purpose
React| Frontend user interface
Vite| Frontend development and build tooling
Python| Backend development and security analysis
FastAPI| REST API development
SQLite| Persistent storage for scan history
OSV API| Open-source vulnerability intelligence
CISA KEV| Identification of known-exploited vulnerabilities
EPSS| Exploitation probability estimates
CVSS| Vulnerability severity assessment
Groq API| AI-assisted explanations and remediation guidance
Git & GitHub| Version control and collaboration

The technology stack and integrations are subject to implementation and testing.

---

🏗️ Architecture

VulnSentinel is planned around a modular architecture.

                    ┌──────────────────────┐
                    │      Developer       │
                    └──────────┬───────────┘
                               │
                               ▼
                    ┌──────────────────────┐
                    │   React + Vite UI    │
                    │  Upload & Dashboard  │
                    └──────────┬───────────┘
                               │ HTTP
                               ▼
                    ┌──────────────────────┐
                    │   FastAPI Backend    │
                    └──────────┬───────────┘
                               │
                ┌──────────────┼──────────────┐
                ▼              ▼              ▼
        ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
        │    SBOM     │ │ Vulnerability│ │  Risk       │
        │   Parser    │ │   Analysis   │ │  Engine     │
        └─────────────┘ └──────┬──────┘ └──────┬──────┘
                               │               │
                               ▼               ▼
                       ┌─────────────┐ ┌─────────────┐
                       │ OSV / Other │ │ Prioritized │
                       │ Intelligence│ │  Findings   │
                       └─────────────┘ └──────┬──────┘
                                              │
                              ┌───────────────┴──────────────┐
                              ▼                              ▼
                      ┌─────────────┐                ┌─────────────┐
                      │   SQLite    │                │ Groq API    │
                      │ Scan History│                │ AI Assistance│
                      └─────────────┘                └─────────────┘

The risk engine will operate independently of the AI assistant. Vulnerability identification and risk prioritization will rely on structured data and documented rules rather than AI-generated guesses.

---

🔄 How It Will Work

1. Upload: The developer uploads a supported SBOM.
2. Parse: VulnSentinel validates the file and extracts software components.
3. Analyze: Components are checked against available vulnerability intelligence.
4. Enrich: Findings are supplemented with available severity and exploitation indicators.
5. Prioritize: The risk engine ranks findings using documented rules.
6. Explain: The dashboard presents evidence, context, and remediation guidance.
7. Store: Scan metadata and results are saved for future review.
8. Report: The developer can review and export security findings as supported.

---

🚀 Getting Started

Installation instructions will be finalized as the application becomes functional.

Prerequisites

- Python 3.11 or a compatible supported version.
- Node.js and npm.
- Git.
- An OSV API connection.
- A Groq API key for AI-assisted functionality.

Clone the Repository

git clone https://github.com/YOUR_USERNAME/vulnsentinel.git
cd vulnsentinel

Replace "YOUR_USERNAME" with your GitHub username.

Development Setup

The frontend and backend setup instructions will be added after the initial project structure and dependencies are established.

AI-assisted functionality will require a Groq API key stored securely in an environment variable. The key must never be committed to the repository or exposed through frontend code.

---

🗺️ Development Roadmap

- [ ] Establish the project structure and development environment.
- [ ] Build the React frontend and FastAPI backend.
- [ ] Implement SBOM upload and validation.
- [ ] Add SPDX and CycloneDX JSON parsing.
- [ ] Integrate OSV vulnerability lookup.
- [ ] Implement vulnerability result normalization.
- [ ] Integrate CVSS, EPSS, and CISA KEV data where available.
- [ ] Develop a transparent risk-prioritization engine.
- [ ] Build the vulnerability dashboard.
- [ ] Integrate SQLite scan history.
- [ ] Add Groq-powered explanations and remediation assistance.
- [ ] Implement downloadable reports.
- [ ] Add automated tests and sample SBOMs.
- [ ] Complete documentation and deployment.

---

🔐 Security and Reliability

VulnSentinel is intended to provide useful security information, not guarantee that software is secure.

The project will follow these principles:

- Treat uploaded SBOMs as untrusted input.
- Validate and normalize package identifiers before querying external services.
- Keep API keys and credentials outside version control.
- Handle API failures and incomplete vulnerability data gracefully.
- Distinguish missing information from a confirmed absence of vulnerabilities.
- Keep AI-generated guidance separate from verified vulnerability records.
- Document the limitations of vulnerability matching and risk prioritization.

A clean scan does not prove that an application is free from vulnerabilities.

---

🎯 Project Goals

VulnSentinel is being developed to explore practical applications of:

- Software supply chain security.
- Vulnerability intelligence.
- SBOM processing and dependency analysis.
- Risk-based security prioritization.
- AI-assisted developer tooling.
- Full-stack application development.
- API integration and data persistence.

The long-term goal is to make vulnerability analysis more transparent, understandable, and actionable for developers.

---

🤝 Contributing

Contributions, bug reports, and suggestions are welcome.

Potential areas for contribution include:

- SBOM format support.
- Vulnerability data integrations.
- Risk-prioritization methods.
- Testing and validation.
- Dashboard improvements.
- Documentation and usability.

Contribution guidelines will be added as the project matures.

---

📚 Security Intelligence Sources

- "OSV — Open Source Vulnerabilities" (https://osv.dev/)
- "CISA Known Exploited Vulnerabilities Catalog" (https://www.cisa.gov/known-exploited-vulnerabilities-catalog)
- "FIRST EPSS" (https://www.first.org/epss/)
- "NVD — National Vulnerability Database" (https://nvd.nist.gov/)
- "CycloneDX" (https://cyclonedx.org/)
- "SPDX" (https://spdx.dev/)

---

👨‍💻 Project Information

Project Name: VulnSentinel
Category: Cybersecurity / Software Supply Chain Security
Type: Full-Stack Security Analysis Platform
Status: Under Development

---

<p align="center">
  <b>VulnSentinel</b><br>
  See the risk. Prioritize the threat. Secure your software.
</p>
