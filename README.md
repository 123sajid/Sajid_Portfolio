# Sajid Mujibur Rehman — AI/ML Engineer Portfolio

A responsive, clean-white React + Vite portfolio built to support AI/ML Engineer applications.

## Included sections
- Hero / professional positioning
- About
- Skills
- Experience
- Projects
- Research highlight
- Education
- Contact

## 1. Requirements
Install Node.js (LTS) from https://nodejs.org/ and have a GitHub account.

## 2. Run locally
Extract this folder, open a terminal in the project directory, and run:

```bash
npm install
npm run dev
```

Open the local URL shown in the terminal (usually `http://localhost:5173`).

## 3. Personalize before publishing
Open `src/main.jsx` and update the `PROFILE` object:
- Replace `REPLACE-WITH-YOUR-GITHUB-USERNAME` with your actual GitHub username.
- Confirm your email and LinkedIn URL.
- Add a CV PDF to `public/Sajid-Mujibur-Rehman-CV.pdf` if you want the CV link to work (or remove the `cv` field; it is not currently displayed as a button).

Also:
- Add real repository URLs to project cards where available.
- Add a public CV PDF only if you want recruiters to download it; do not commit private contact details you do not want public.
- Add screenshots or demo links for projects only after checking that they work.
- Confirm all dates, titles, and research figures.
- The EduPhoniex description intentionally does not publish the reported “88% improvement” as a verified achievement. Add it only after confirming the exact metric and evaluation context.
- The financial analysis project is framed as a project concept until you add the actual repository, screenshots, and measured findings.
- Review the Food-101 runtime and accuracy figures against your notebook before publishing.

## 4. Build for production
```bash
npm run build
npm run preview
```
Vite writes the deployable website to `dist/`.

## 5. Free hosting with GitHub Pages
This project can be hosted free with GitHub Pages using GitHub Actions.

1. Create a GitHub repository named `sajid-ai-ml-portfolio`.
2. Upload the project files to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions**.
5. Add `.github/workflows/deploy.yml` (provided in this project).
6. The included `vite.config.js` is already configured with `base: "/sajid-ai-ml-portfolio/"` for this repository name. If you choose a different repository name, update the base to match it.
7. Commit and push. Check the Actions tab for the deployment status. Your public URL will be `https://YOUR-USERNAME.github.io/sajid-ai-ml-portfolio/`.

For a user/organization repository named `USERNAME.github.io`, use `base: '/'`.

## 6. Free hosting alternative: Netlify or Vercel
Import the GitHub repository into Netlify or Vercel and use:
- Build command: `npm run build`
- Publish/output directory: `dist`

These providers offer free tiers, subject to their current terms and usage limits.

## Important
The site is a static portfolio; it does not include a backend, contact-form service, authentication, or analytics. The email button opens the visitor's email application.
