# Personal Website

This is my personal website, built with HTML and raw CSS. It is hosted on GitHub Pages.

## Features

- **Responsive Design**: The website is designed to be responsive and accessible on various devices.
- **Custom Styling**: Uses custom CSS for a clean and modern look.

## Resume

The resume is authored in LaTeX under [`resume/`](resume/) (entry point `resume/resume.tex`).
The compiled `resume.pdf` is **not** committed — it is built and published by CI.

On every push to `main`, [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. Compiles `resume/resume.tex` to a PDF.
2. Copies it to `resume.pdf` at the site root (where `gale.html` embeds it).
3. Deploys the whole site to GitHub Pages.

To edit the resume, change the `.tex` sources and push — the site rebuilds automatically.

> **Setup note:** In the repo's **Settings → Pages**, the build source must be set to
> **GitHub Actions** (rather than "Deploy from a branch") for this workflow to publish.

