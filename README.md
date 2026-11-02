# Tyler Reid portfolio

React + Vite portfolio with a separate guitar lessons page and a Formspree contact form.

## Local development

Use Node.js 22 (at least 22.12).

```sh
npm ci
npm run dev
```

`npm test` runs the contact submission tests using mocked requests; it does not send emails.
`npm run build` creates `dist/`. `npm run preview` serves that build locally.

## Deploy to Render

1. Commit and push the source changes, including new files, `package-lock.json`, and `render.yaml`, to GitHub.
2. In Render, choose **New → Blueprint** and connect `TylerReidd/portfolio` on the branch containing these changes.
3. Review and apply the `tyler-reid-portfolio` static site from `render.yaml`.

The Blueprint installs locked dependencies, runs tests, builds the site, publishes `dist/`, and adds the rewrite needed for direct visits to `/lessons`. `.node-version` selects Node.js 22. No backend or secret environment variables are required for this site; the Formspree submission URL is intentionally public.

If creating a **Static Site** manually instead of using a Blueprint, enter:

| Setting | Value |
| --- | --- |
| Root directory | Leave blank (repository root) |
| Build command | `npm ci && npm test && npm run build` |
| Publish directory | `dist` |
| Rewrite source | `/*` |
| Rewrite destination | `/index.html` |
| Rewrite action | Rewrite |

Do not upload an old build or use `npm run dev` as a production server. Render creates a fresh build from source; generated `dist/` files are ignored by Git.

After deploying, open the public URL, refresh `/lessons` directly, check the screenshot gallery on a phone, and submit one inquiry to verify delivery from the live site. In Formspree, check any domain restrictions if a live submission is rejected.

Deployment references: [Render static sites](https://render.com/docs/static-sites), [Blueprint configuration](https://render.com/docs/blueprint-spec), [rewrites](https://render.com/docs/redirects-rewrites).

## Content and screenshots

Edit project descriptions, screenshot captions, the contact endpoint, and service area in `src/data/content.js`. The Formspree dashboard controls the recipient address; changing the displayed email in this file does not change form delivery.

Original PNG screenshots are preserved in `assets/screenshots/`, outside the published directory. The site serves lossless WebP copies from `public/images/projects/`. To regenerate the currently used screenshots with the WebP `cwebp` encoder installed locally:

```sh
npm run images:optimize
```

The generated WebP files are committed, so Render does not need an image encoder.

## After launch

- [ ] Record a 30–60 second Forte walkthrough showing the teacher/student workflow. Add it as an optional watch link near the project.
- [ ] Request a genuine client or student testimonial and permission to publish it. Add the approved quote and attribution.
- [ ] Once the public domain is settled, add canonical URLs, a social sharing image, and a sitemap.
