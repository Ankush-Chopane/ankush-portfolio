# Ankush Chopane — Portfolio

A single-page portfolio built from your résumé content: hero, projects, technical experience & training, skills, certificates, achievements, education, and contact — all in plain HTML/CSS/JS, so it deploys instantly with no build step.

## Files

```
index.html    → all page content
style.css     → design system (colors, type, layout)
script.js     → mobile menu toggle
assets/
  Ankush_Chopane_Resume.pdf → downloadable résumé (linked from the nav and hero)
vercel.json   → clean-URL config for Vercel
```

## Deploy to Vercel — easiest path (no coding tools needed)

1. Go to https://vercel.com and sign up / log in (you can use your GitHub or Google account).
2. Click **Add New → Project**.
3. Choose **"Deploy without Git"** / drag-and-drop option, and drag this whole folder onto the page.
   - If you don't see that option, use the alternative path below (GitHub) — Vercel's UI changes occasionally.
4. Click **Deploy**. In under a minute you'll get a live URL like `ankush-chopane.vercel.app`.

## Deploy via GitHub (recommended — makes future edits easy)

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Upload all the files in this folder to that repo (via GitHub's "Add file → Upload files" in the browser, or `git push` if you're comfortable with Git).
3. Go to https://vercel.com/new, choose **Import Git Repository**, and select your new repo.
4. Framework preset: choose **Other** (it's a static site, no build command needed).
5. Click **Deploy**.
6. Every time you push a change to GitHub, Vercel redeploys automatically.

## Custom domain / project name

After deploying, go to your project → **Settings → Domains** to set a custom `.vercel.app` subdomain (e.g. `ankush-chopane.vercel.app`) or connect a real domain if you buy one later.

## Editing content later

- All text lives directly in `index.html` — search for the section you want to change (e.g. `id="work"` for projects).
- Colors and fonts are defined once at the top of `style.css` under `:root { ... }` — change `--accent` or `--ink` there to re-theme the whole site.
- To swap the résumé PDF, replace `assets/Ankush_Chopane_Resume.pdf` with a new file of the same name.

## Notes

- The two fonts (Fraunces, IBM Plex Sans) load from Google Fonts via a `<link>` in `index.html` — this works fine once deployed; you just won't see them in offline/sandboxed previews.
- The site is fully responsive (test by resizing your browser or opening on mobile) and uses no frameworks or build tools, so there's nothing to install to run it locally — just open `index.html` in a browser.
