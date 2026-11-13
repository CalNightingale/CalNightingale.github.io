# Personal Website

My personal website: one hand-written `index.html` and `stylesheet.css`, with no framework or build step,
hosted on GitHub Pages. It follows the system light/dark preference.

`gale.html` only redirects to `/`, so older `calnight.in/gale` links keep working.

## Images

Photos are resized before they are committed; keep each one near the size it is displayed at
(for example, `cwebp -q 80`). Project icons live in `assets/projects/` rather than being linked
from each project's site, so they cannot break when those sites change.

## Resume

The resume is authored in LaTeX under [`resume/`](resume/) (entry point `resume/resume.tex`).
The compiled `resume.pdf` is **not** committed — it is built and published by CI.

On every push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Compiles `resume/resume.tex` to a PDF.
2. Copies it to `resume.pdf` at the site root, where `index.html` links to it.
3. Deploys the whole site to GitHub Pages.

To edit the resume, change the `.tex` sources and push — the site rebuilds automatically.

> **Setup note:** In the repo's **Settings → Pages**, the build source must be set to
> **GitHub Actions** (rather than "Deploy from a branch") for this workflow to publish.

