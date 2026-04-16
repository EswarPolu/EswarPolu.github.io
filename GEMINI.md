# Gemini Project Context: Portfolio Website

This document provides essential context and guidelines for AI agents interacting with the Nandeeswar Reddy Polu portfolio project.

## 🚀 Project Overview
A production-grade, single-page portfolio website for a DevOps/Cloud Engineer. The project emphasizes accessibility, performance, and a modern aesthetic without relying on external frameworks or build tools.

- **Primary Technlogies**: HTML5, CSS3 (Modern features like Grid/Flexbox), Vanilla JavaScript (ES6+).
- **Key Features**: 
  - Adaptive Dark/Light theme (system preference + manual toggle).
  - Interactive HTML5 Canvas particle background with mouse repulsion.
  - Scroll-triggered reveal animations via `IntersectionObserver`.
  - WCAG 2.1 Level AA accessibility compliance.
  - High performance (Lazy loading, font preconnect, optimized mobile CPU usage).

## 🏗️ Architecture
The entire application is contained within a single-file entry point to eliminate build complexity and dependency overhead.

- **`index.html`**: The core of the application.
  - **Styles (Lines 1-2005)**: Comprehensive CSS including theming variables, responsive breakpoints, and animations.
  - **Markup (Lines 2006-2600)**: Semantic HTML structured into five main sections (`#Hero`, `#Skills`, `#Experience`, `#Projects`, `#Contact`).
  - **Scripts (Lines 2600-3538)**: Modular vanilla JS for theme management, canvas animations, and scroll interactions.
- **`assets/`**: Static resources including profile images, project thumbnails (`.webp`), and the resume PDF.
- **`.github/workflows/deploy.yml`**: CI/CD pipeline for automated deployment to GitHub Pages.

## 🛠️ Development Workflow

### Local Development
No build process or `npm install` is required.
```bash
# Recommended: Simple HTTP server for accurate testing
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Key Commands & Tasks
- **Manual Testing**: Verify changes in both Dark and Light modes.
- **Responsiveness**: Test across breakpoints: Mobile (375px), Tablet (768px), and Desktop (1024px+).
- **Accessibility**: Ensure keyboard navigability and visible focus states remain intact.

### Coding Conventions
- **CSS**: 
  - Use established CSS custom properties (variables) for colors and spacing.
  - Follow the mobile-first responsive pattern.
  - Use the three-tier button system: `.btn-primary` (orange), `.btn-secondary` (cyan), `.btn-tertiary` (ghost).
- **HTML**: 
  - Maintain semantic structure for SEO and screen readers.
  - Use `class="reveal"` or `class="reveal reveal-delay-N"` for scroll animations.
- **JavaScript**: 
  - Keep scripts vanilla and dependency-free.
  - Optimize for performance (e.g., lower particle counts on mobile).

## 🚢 Deployment
Automated via GitHub Actions. Any push to the `main` branch triggers a deployment to [eswarpolu.github.io](https://eswarpolu.github.io).

## 🤖 AI Agent Integration
The `.agent` directory contains an **AI Agent Capability Expansion Toolkit**. This is a separate system providing specialized roles and skills for AI-assisted development and is not part of the portfolio's runtime code.

## 📄 Reference Documents
- **`CLAUDE.md`**: Detailed architectural and editing guidelines for AI agents.
- **`report.md`**: Comprehensive frontend analysis, performance metrics, and a TODO list for future enhancements.
- **`README.md`**: High-level project summary and quick-start guide.
