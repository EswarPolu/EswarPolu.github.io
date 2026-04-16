# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a **static single-page portfolio website** for Nandeeswar Reddy Polu, a DevOps/Cloud Engineer. The entire site is contained in a single `index.html` file with embedded CSS and JavaScript—no build process, no dependencies, no package.json.

**Live Site**: [eswarpolu.github.io](https://eswarpolu.github.io)  
**Tech Stack**: Pure HTML5, CSS3, vanilla JavaScript  
**Target Browsers**: Modern browsers with ES6+ support  
**Current Grade**: A+ (95.7/100)

## Architecture

### Single-File Structure
The entire application lives in `index.html` (~3000 lines):
- **Lines 1-2005**: `<style>` block containing all CSS
  - CSS custom properties for theming (dark/light mode)
  - Responsive design with mobile-first approach
  - Custom animations and transitions
- **Lines 2006-2600**: HTML markup for five main sections:
  - `#Hero` - Introduction with animated metrics and pipeline card
  - `#Skills` - Technology stack table
  - `#Experience` - Work history timeline
  - `#Projects` - Blog posts/project cards
  - `#Contact` - Contact information and social links
- **Lines 2600-3001**: `<script>` blocks with JavaScript functionality:
  - Theme toggle (dark/light mode with localStorage persistence)
  - Custom cursor animation
  - Particle field canvas background (80 particles with mouse repulsion)
  - Scroll-based reveal animations using IntersectionObserver
  - Counter animations for metrics
  - Mobile hamburger menu

### Key Features
1. **Theme System**: Root-level CSS variables switch between `.dark` and `.light` classes on `<html>` element
2. **Custom Cursor**: Fixed-position `#cursor` div tracks mouse movement with blend mode
3. **Particle Background**: HTML5 Canvas with 80 animated dots that repel from mouse cursor
4. **Scroll Animations**: IntersectionObserver triggers `.reveal` class additions for fade-in effects
5. **Mobile Menu**: Slide-down overlay navigation with hamburger button animation
6. **Three-Tier Button System**: PRIMARY (orange) → SECONDARY (cyan) → TERTIARY (ghost) for clear visual hierarchy
7. **CSS Grid Accordions**: Experience section uses modern `grid-template-rows: 0fr → 1fr` for unlimited content height
8. **Accessibility Features**: WCAG 2.1 Level AA compliant with reduced motion support, keyboard navigation, and visible focus states
9. **Performance Optimization**: Font preconnect for 93% faster text rendering, touch-friendly sizing (44x44px minimum)

## Assets Directory

- `profile-rectangle.jpg` - Main hero section photo
- `profile-square.png` - Alternative profile image
- `resume.pdf` - Downloadable resume (linked in navbar and mobile menu)
- `*.webp` images - Blog post thumbnails

**IMPORTANT**: The resume is referenced at `assets/resume.pdf` in two locations:
- Navbar download button (line ~2045)
- Mobile menu download button (line ~2941)

If the resume file is missing, both download buttons will fail. The git status shows `resume.pdf` was deleted—this needs to be restored or the links updated.

## Deployment

**Automated via GitHub Actions** (`.github/workflows/deploy.yml`):
- Triggers on push to `main` or `master` branches
- Also supports manual workflow dispatch
- Uploads entire repository to GitHub Pages
- No build step—deploys raw files as-is

To deploy changes:
```bash
git add index.html  # or any changed files
git commit -m "Description of changes"
git push origin main
```

GitHub Actions will automatically deploy within 1-2 minutes.

## Development Workflow

### Local Development
Since there's no build process, simply open `index.html` in a browser:
```bash
# Option 1: Direct file open
open index.html  # macOS
xdg-open index.html  # Linux

# Option 2: Simple HTTP server (recommended for accurate testing)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Editing Guidelines
1. **CSS Changes**: Edit the `<style>` block (lines 1-2005)
   - CSS variables are defined in `:root` and `:root.light` selectors
   - Use existing utility patterns instead of adding new styles
   - Test both dark and light modes

2. **Content Changes**: Edit HTML structure (lines 2006-2600)
   - Maintain the `id` attributes on sections for anchor navigation
   - Preserve `class="reveal"` and `class="reveal reveal-delay-N"` for animations
   - Keep semantic HTML structure for accessibility

3. **JavaScript Changes**: Edit `<script>` blocks (lines 2600-3001)
   - Main script handles theme, animations, and interactions
   - Mobile menu script is separate and self-contained
   - Be cautious with IntersectionObserver configurations


## .agent Directory (Antigravity Kit)

This directory contains an **AI Agent Capability Expansion Toolkit** with:
- **20 Specialist Agents** (`agents/`) - Role-based AI personas for different development domains
- **36 Skills** (`skills/`) - Modular knowledge modules agents can reference
- **11 Workflows** (`workflows/`) - Slash command procedures
- **Scripts** (`scripts/`) - Validation and automation utilities

This is a separate system for AI-assisted development and is **not part of the portfolio website itself**. It provides structured prompts and workflows for Claude Code and similar AI tools.

See `.agent/ARCHITECTURE.md` for full documentation.

## Common Tasks

### Update Personal Information
- **Name/Title**: Search for "Nandeeswar Reddy Polu" and "DevOps·Cloud Engineer"
- **Email**: Search for "polunandeeswar2002@gmail.com"
- **Availability Status**: Edit the "hero-badge" div text and dot animation

### Add New Skills
Edit the `#Skills` section table (starting ~line 2166). Each skill row follows this structure:
```html
<tr>
  <td><div class="td-icon" style="background:COLOR"><svg>...</svg></div></td>
  <td><div class="td-domain">Domain Name</div></td>
  <td><div class="td-chips"><span class="chip">Tool1</span><span class="chip">Tool2</span></div></td>
  <td><div class="td-years">X+</div></td>
</tr>
```

### Add Experience Entry
Experience items are in `#Experience` section with `timeline-item` class. Copy an existing entry structure and modify dates, company, role, and achievements.

### Add Blog Post / Project
Project cards are in `#Projects` section. Each uses the `project-card` structure with an image, title, description, and external link.

### Change Color Scheme
Edit CSS custom properties in `:root` (dark mode) and `:root.light` (light mode):
- `--primary` - Main accent color (orange by default)
- `--cyan` - Secondary accent color
- `--surface-*` - Background layers
- `--text-*` - Text colors

## Git Configuration

**Repository**: GitHub-hosted, auto-deploys to GitHub Pages
- Main branch: `main`
- Deploy trigger: Push to `main` branch
- Remote: origin (EeswarSunny/portfolio)



## Change History

**Recent improvements and grade progression**: See `report.md` for detailed analysis.

