# Joannah Nicole Hofileña — Portfolio

Built with **React + Vite** (no Create React App). Deploys instantly on Vercel.

## 🚀 Deploy to Vercel (3 steps)

1. Upload this folder to a **GitHub repository**
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import your repo
3. Vercel auto-detects Vite → click **Deploy** ✅

No extra config needed. The `vercel.json` handles routing.

## 🛠 Run Locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## 📁 Project Structure

```
portfolio/
├── index.html              ← Vite entry (root level)
├── vite.config.js
├── package.json
├── vercel.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── About.jsx
        ├── Experience.jsx
        ├── Projects.jsx
        ├── Skills.jsx
        ├── Blog.jsx
        └── Contact.jsx
```

## ✏️ Quick Customizations

- **Your photo** → add image to `public/` folder, reference as `/photo.jpg` in `Hero.jsx`
- **LinkedIn / GitHub links** → add in `Contact.jsx`
- **New project** → add entry to the `projects` array in `Projects.jsx`
- **Accent color** → change `--accent` in `src/index.css`
