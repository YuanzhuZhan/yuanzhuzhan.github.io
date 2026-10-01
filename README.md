# Yuanzhu Zhan — Academic Website

A static academic homepage based on the Minimal Academic Website template by [Yuhui Zhang](https://cs.stanford.edu/~yuhuiz/). The original MIT license is retained.

## Preview

From this directory run:

```sh
python3 -m http.server 8000
```

Open http://localhost:8000. You can also open `index.html` directly: content is rendered in HTML and the fonts are served locally.

## Update content

- `index.html`: biography, projects, education, service, and skills.
- `publications.json`: archived structured publication records; not rendered on the homepage.
- `styles.css`: layout, colors, and mobile styles.
- `scripts.js`: optional shared pause/play control for looping project previews.
- `media/Yuanzhu_CV.pdf`: downloadable CV.
- `media/*.mp4`: compressed H.264 videos with fast-start metadata.
- `images/projects/*.jpg`: video posters.
- `images/Headshot Sedona.JPG`: existing profile portrait.

To add a project, add an `article.project` inside `.project-list`, with a preview and a `.project-content` description. Each project occupies one row on desktop and stacks its preview above the text on narrow screens. Paper links are included in the project descriptions; there is no separate publication section.

To replace a demo, update its `source`, `poster`, accessible label, description, and project links together. Videos use `autoplay loop muted playsinline` and play without clicking. The AM-Bench PNG stays static. A shared “Pause animations” button lets visitors stop motion.


## Content sources

Biography, education, publication authors/order/status, academic service, skills, contact information, and paper/profile links follow `../26fall/media/Yuanzhu_CV.pdf` (September 2026). The existing page supplied the PhD candidate designation, advisor, and portrait. Project page links were taken from the local ARI lab website repository. No awards or personal interests were invented.

The owner supplied the final project media in `media/`. The GIFs and PNG were matched by SHA-1 to the corresponding project assets in the local ARI lab repository:

- `outdoor-aerial-manipulation.mp4`: outdoor aerial manipulation (compressed from `../26fall/media/MPC_outdoor_hero.mp4`).
- `homepage2.gif`: self-supervised UAV trajectory planning; served as `trajectory-planning.mp4`.
- `real_world.gif`: contact-aware aerial manipulation; served as `contact-aware-manipulation.mp4`.
- `teaser.png`: AM-Bench overview; click to view the full-size image.

Original GIFs are preserved. MP4 copies reduce transfer size and provide pause/play controls. DexAM is not included in the final page.

## Hosting

This folder can be served as a static website, including through GitHub Pages. All local asset paths are relative and support a repository subpath. No build step, package installation, or API keys are required. Nothing has been deployed by this edit.
