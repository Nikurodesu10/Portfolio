# Joannah Nicole Hofileña — Portfolio

A clean, minimal React portfolio built for Vercel deployment.

## 🚀 Deploy to Vercel (Step-by-step)

### Option A: GitHub + Vercel (Recommended)

1. **Create a GitHub account** at https://github.com if you don't have one
2. **Create a new repository** — click the `+` icon → "New repository"
3. **Upload this folder** — drag all these files into the repository
4. **Go to Vercel** at https://vercel.com and sign up (free) with your GitHub account
5. Click **"Add New Project"** → Import your GitHub repository
6. Vercel auto-detects Create React App — just click **"Deploy"**
7. Your site goes live at `https://your-project-name.vercel.app` 🎉

### Option B: Vercel CLI

```bash
npm install -g vercel
cd portfolio
npm install
vercel
```

Follow the prompts — it will give you a live URL instantly.

## 🛠 Run Locally

```bash
npm install
npm start
```

Opens at http://localhost:3000

## 📁 Structure

```
portfolio/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Experience.js
│   │   ├── Projects.js
│   │   ├── Skills.js
│   │   ├── Blog.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── vercel.json
```

## ✏️ Customization

- **Add a photo**: Put your image in `public/` and add `<img src="/your-photo.jpg">` in `Hero.js`
- **Add projects**: Edit the `projects` array in `Projects.js`
- **Update skills**: Edit `skillGroups` in `Skills.js`
- **Change colors**: Edit CSS variables in `index.css`
- **Add your LinkedIn**: Add a link in `Contact.js`

## 🎨 Tech Stack

- React 18
- CSS Variables (no external CSS library)
- Google Fonts: DM Serif Display + DM Sans
- Deployed on Vercel
