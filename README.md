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

## Local Dev Testing

```
ubuntu@cloud9-sigitp2:~/sigit.cloud-gatsby$ export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 18 && npx gatsby serve --host 0.0.0.0 --port 8000
Now using node v18.20.8 (npm v10.8.2)

You can now view gatsby-starter-default in the browser.

  Local:            http://localhost:8000/
  On Your Network:  http://10.0.10.242:8000/
```

## Build & Test

```shell
# Use Node 18
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" && nvm use 18

# Install dependencies
npm install

# Run tests
npm test

# Build
npx gatsby build

# Serve locally
npx gatsby serve --host 0.0.0.0 --port 8000
```

## Deploy

Auto-deploys via AWS Amplify on push to `master`. Build config is in `amplify.yml`.

[![amplifybutton](https://oneclick.amplifyapp.com/button.svg)](https://console.aws.amazon.com/amplify/home#/deploy?repo=https://github.com/sigitp-git/sigit.cloud-gatsby)
