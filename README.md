# sigit.cloud

A personal blog and street photography portfolio built with Gatsby 5, React 18, and deployed via AWS Amplify.

**Live site:** [https://sigit.cloud](https://sigit.cloud)

## Tech Stack

- **Framework:** Gatsby 5, React 18
- **Content:** Markdown blog posts (`src/mdblogs/`)
- **Image Processing:** gatsby-plugin-image, gatsby-plugin-sharp
- **Gallery:** react-image-gallery
- **Sanitization:** isomorphic-dompurify
- **Deployment:** AWS Amplify (auto-deploys on push to `master`)
- **Build Image:** Amazon Linux 2023, Node 18

## Project Structure

```
src/
├── components/       # Layout, Header, SEO, AlbumGrid
├── mdblogs/          # Markdown blog posts
├── pages/
│   ├── about.js
│   ├── gallery.js
│   ├── create-album.js         # Album creator (GitHub PAT auth)
│   ├── streetphotography.js    # Album 1 index
│   ├── streetphotography/      # Album 1 individual albums
│   ├── streetphotography2.js   # Album 2 index
│   ├── streetphotography2/     # Album 2 individual albums
│   ├── streetphotography3.js   # Album 3 index
│   └── streetphotography3/     # Album 3 individual albums
├── templates/        # blog-post.js, blog-list.js
└── images/
static/               # Street photography images per album
```

## Build & Test

```shell
# Use Node 18
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 18

# Install dependencies
npm install

# Run tests
npx jest --no-cache
```

Example test output:
```
PASS  __tests__/bug-condition.test.js
PASS  __tests__/preservation.test.js

Test Suites: 2 passed, 2 total
Tests:       78 passed, 78 total
Snapshots:   0 total
Time:        0.772 s
Ran all test suites.
```

```shell
# Build
npx gatsby build
```

Example build output:
```
success compile gatsby files - 2.191s
success load gatsby config - 0.036s
success load plugins - 0.662s
...
success Building static HTML for pages - 2.233s - 1/1 0.45/s
info Done building in 16.857228062 sec

  ╭────────────────────────────────────────────────────────────────╮
  │                                                                │
  │   (SSG) Generated at build time                                │
  │ D (DSG) Deferred static generation - page generated at runtime │
  │ ∞ (SSR) Server-side renders at runtime (uses getServerData)    │
  │ λ (Function) Gatsby function                                   │
  │                                                                │
  ╰────────────────────────────────────────────────────────────────╯
```

```shell
# Serve locally (after build)
npx gatsby serve
```

Example serve output:
```
You can now view gatsby-starter-default in the browser.

  http://localhost:9000/
```

Then open `http://localhost:9000/` in your browser to verify.

## Local Dev Testing (Cloud9)

For AWS Cloud9 environments, bind to all interfaces so the preview works:

```shell
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 18
npx gatsby serve --host 0.0.0.0 --port 8000
```

```
Now using node v18.20.8 (npm v10.8.2)

You can now view gatsby-starter-default in the browser.

  Local:            http://localhost:8000/
  On Your Network:  http://10.0.10.242:8000/
```

## Full Local Workflow (test → build → serve)

```shell
npx jest --no-cache && npx gatsby build && npx gatsby serve
```

This runs tests first, then builds, then serves. If any step fails, the chain stops.

## Deploy

Auto-deploys via AWS Amplify on push to `master`. Build config is in `amplify.yml`.

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/sigitp-git/sigit.cloud-gatsby)
