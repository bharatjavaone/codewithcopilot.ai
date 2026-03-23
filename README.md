# codewithcopilot.ai — Setup & Deployment Guide

This is the complete source code for **codewithcopilot.ai** — a free, structured learning
academy for GitHub Copilot and AI developer tools.

---

## Step 1 — Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** button (top right) → **New repository**
3. Name it: `codewithcopilot.ai` (or anything you like, e.g. `copilot-academy`)
4. Set it to **Public** (required for free GitHub Pages)
5. Do **not** check "Add a README file" — you already have one
6. Click **Create repository**
7. GitHub will show you a page with commands — **keep this page open**, you'll need the repo URL

---

## Step 2 — Upload these files to GitHub

### Option A — Using GitHub Desktop (easiest if you're new to Git)

1. Download [GitHub Desktop](https://desktop.github.com/) and sign in
2. Click **File → Clone repository → URL**
3. Paste your new repo URL (looks like `https://github.com/YOUR_USERNAME/codewithcopilot.ai`)
4. Choose a folder to clone into on your computer, click **Clone**
5. **Copy all the files from this `website/` folder** into the cloned folder
6. Back in GitHub Desktop, you'll see all the files listed as "changes"
7. Type a commit message like "Initial site scaffold" → click **Commit to main**
8. Click **Push origin** → your files are now on GitHub!

### Option B — Using GitHub's web upload (no software needed)

1. On your new empty GitHub repo page, click **uploading an existing file**
2. Drag and drop ALL files and folders from this `website/` folder
   - `index.html`, `learn.html`, `lesson.html`
   - The `css/` folder
   - The `js/` folder
3. Scroll down, click **Commit changes**

---

## Step 3 — Enable GitHub Pages

1. On your GitHub repository page, click **Settings** (top tab)
2. In the left sidebar, click **Pages**
3. Under "Source", select **Deploy from a branch**
4. Set branch to **main** and folder to **/ (root)**
5. Click **Save**
6. GitHub will show: *"Your site is ready to be published at https://YOUR_USERNAME.github.io/copilot-academy/"*
7. It takes 1–2 minutes. Visit that URL to see your site live! 🎉

---

## Step 4 — Connect your custom domain (codewithcopilot.ai)

### Part A — Tell GitHub about your domain

1. In GitHub Settings → Pages → Custom domain
2. Type `codewithcopilot.ai` and click Save
3. A file called `CNAME` will be auto-created in your repo

### Part B — Point your Namecheap domain to GitHub Pages

1. Log in to [namecheap.com](https://namecheap.com)
2. Go to **Domain List** → click **Manage** next to codewithcopilot.ai
3. Click **Advanced DNS** tab
4. Delete any existing A records
5. Add these 4 new **A records** (GitHub Pages IP addresses):

   | Type | Host | Value          |
   |------|------|----------------|
   | A    | @    | 185.199.108.153 |
   | A    | @    | 185.199.109.153 |
   | A    | @    | 185.199.110.153 |
   | A    | @    | 185.199.111.153 |

6. Add a **CNAME record**:

   | Type  | Host | Value                           |
   |-------|------|---------------------------------|
   | CNAME | www  | YOUR_USERNAME.github.io         |

7. Click Save. DNS propagation takes up to 24 hours (usually under 1 hour).

### Part C — Enable HTTPS (free SSL)

1. Back in GitHub Settings → Pages
2. Once the domain is verified, tick **Enforce HTTPS**
3. Done — your site now has a padlock 🔒

---

## Step 5 — Add your YouTube video IDs

The lessons show a placeholder until you add real video IDs.

1. Open **`js/modules.js`** in any text editor (VS Code works great)
2. Find the module you want to update, e.g.:
   ```js
   { id: '101', videoId: 'REPLACE_101', ... }
   ```
3. Go to YouTube and find the video for that lesson
4. Copy the part after `watch?v=` in the URL
   - Example: `https://www.youtube.com/watch?v=Fi3AJZZregI` → `Fi3AJZZregI`
5. Replace the placeholder:
   ```js
   { id: '101', videoId: 'Fi3AJZZregI', ... }
   ```
6. Save the file → commit and push to GitHub → your site updates automatically

---

## How to Add a New Lesson

1. Open `js/modules.js`
2. Copy an existing module block (from `{` to the closing `},`)
3. Paste it at the end of the `MODULES` array (before the final `]`)
4. Fill in:
   - `id` — a new unique ID like `'502'`
   - `level` — e.g. `'Level 502'`
   - `series` — group name e.g. `'Testing & Quality'`
   - `title` — the lesson name
   - `duration` — e.g. `'25 min'`
   - `videoId` — the YouTube video ID
   - `objectives`, `takeaways`, `resources` — lesson content
   - `quiz` — array of question objects (copy the pattern from existing quizzes)
5. Save, commit, push — the new lesson appears automatically on the site

---

## File Structure

```
website/
├── index.html        ← Landing page (hero, curriculum overview)
├── learn.html        ← Academy overview (all modules + your progress)
├── lesson.html       ← Individual lesson page (video + content + quiz)
├── css/
│   └── style.css     ← All visual styles
├── js/
│   ├── modules.js    ← ALL lesson content, quiz questions, and video IDs
│   └── app.js        ← Quiz engine, progress tracking, page rendering
└── README.md         ← This file
```

**The only file you need to edit regularly is `js/modules.js`** — it's where all lesson content lives.

---

## How Progress Tracking Works

- Progress (completed lessons, quiz scores) is saved in the user's **browser localStorage**
- This means it's free, requires no server, and works instantly
- The trade-off: progress resets if the user clears their browser data or switches devices
- In the future, you can add a free backend (like Supabase) for cross-device sync — but it's not needed to get started

---

## Cost Summary

| Item              | Cost         |
|-------------------|--------------|
| Domain (Namecheap) | ~$12/year (you already paid this) |
| GitHub Pages hosting | **Free** |
| SSL certificate   | **Free** |
| CDN / bandwidth   | **Free** |
| Backend / database | **Free** (progress in browser) |
| **Total/month**   | **$0** |

---

*Built with ❤️ for the AI developer community*
