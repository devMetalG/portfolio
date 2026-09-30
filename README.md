# Guillermo Franco Borjon / Portfolio

A static portfolio built with semantic HTML, CSS, and vanilla JavaScript. No build step, framework, remote font, or runtime CDN is required.

## Preview

Open `index.html` in a browser. The site also works on any static host, including the existing Vercel deployment.

## Deployment

`package.json` pins Vercel's build environment to Node.js 24.x, overriding the legacy Node.js 18 setting in the project dashboard. It adds no dependencies or build step; the portfolio remains a static site. Changes pushed to `main` trigger the existing Vercel and GitHub Pages integrations.

## Content

- Edit the profile, professional experience, technical skills, and contact links in `index.html`.
- `img/resume.pdf` contains the owner's updated September 2026 resume.
- There is intentionally no Work section or project gallery. Legacy screenshot assets are retained but not referenced by the page.

The current title, dates, responsibilities, outcomes, education, and contact details are based on `CV_Guillermo_Franco_Borjon.pdf`, supplied by the owner. Outcomes retain the resume's approximate wording where relevant. Forge Finance is mentioned as an independent initiative in development, not as a shipped product.

Descriptions of workplace systems stay at the level of responsibilities, architecture, and technologies. Do not add confidential code, internal URLs, credentials, customer data, or screenshots. Technical context for the current AETO role and Forge Finance was checked against repository manifests and representative implementation files supplied by the owner. Leadership, migration outcomes, dates, and impact metrics remain resume-sourced; repository contents alone do not establish those claims. So-far remains based solely on the resume.

The analysis checkouts and internal source notes are kept outside this portfolio repository. Do not copy or publish those materials with the site.

## Interface

Responsive navigation, keyboard support, reduced-motion support, and clipboard success/failure feedback. Profile, experience, contact links, and resume downloads remain available without JavaScript.

The header theme picker offers System (default), Light, and Dark. System follows the operating-system appearance, including live changes. Explicit choices persist in `localStorage` under `portfolio.theme` and synchronize between tabs. If browser storage is blocked, the choice still works for the current visit. `js/theme.js` runs before CSS to avoid an incorrect-theme flash. Without JavaScript, CSS follows the system preference.

## Icons

`js/icons.js` contains selected Lucide icon definitions. Lucide is licensed under ISC; see `LICENSE-lucide.txt`.
