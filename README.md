# Sai Physics — NEET Prep

An interactive web app to help **Sai** prepare for the NEET physics exam. Each topic begins with an everyday analogy, then the formula, then a live simulation you can play with, and finally MCQs / NEET PYQs / numericals — with progress tracked across sessions.

## Chapters covered (v0.1)

1. **Laws of Motion**
   - Newton's three laws (with three live simulations)
   - Rocket propulsion (variable-mass, Tsiolkovsky equation)
   - Conservation of momentum
   - Gun–bullet recoil numericals
   - Mixed NEET PYQs

2. **Work, Power & Energy**
   - Work and the work–energy theorem
   - Conservation of energy (roller-coaster sim with friction)
   - Power
   - Collisions (elastic, inelastic, coefficient of restitution — with live 1D collision sim)
   - Mixed NEET PYQs

## Tech stack

- React 18 + Vite
- Tailwind CSS
- React Router v6
- Framer Motion
- KaTeX (`react-katex`) for equations
- HTML Canvas for live simulations
- `localStorage` for progress tracking (no backend)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173

## Build

```bash
npm run build
npm run preview
```

## Deploy on Netlify

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git → pick `physics-sai`**.
3. Build command `npm run build`, publish directory `dist` (already in `netlify.toml`).
4. Deploy.

The included `netlify.toml` handles SPA routing.

## Adding a new chapter

1. Create `src/pages/ChapterXYZ.jsx` with a `ChapterLanding`.
2. Add routes in `src/App.jsx`.
3. Drop topic pages under `src/pages/topics/<chapter>/` and data under `src/data/<chapter>/`.
4. Reuse `MCQQuiz`, `NumericalProblem`, `Callout`, `TopicPage` — same shape every chapter.

---
Made with ❤️ for Sai's NEET prep.
