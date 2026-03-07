# Bugfix Requirements Document

## Introduction

The sigit.cloud Gatsby 5 blog has multiple bugs spanning a critical configuration defect, deprecated API usage, accessibility violations, code quality issues, and performance problems. The most severe issue is in `gatsby-config.js` where `gatsby-remark-images` is silently overwritten by `gatsby-remark-copy-linked-files` due to duplicate `resolve` keys in the same object, meaning images in markdown posts are not processed. Additional issues include deprecated React patterns (`defaultProps`, `react-helmet`), missing accessibility attributes, deprecated Gatsby 5 GraphQL sort syntax, and suboptimal image loading settings. Since the site auto-deploys to production via AWS Amplify on git push, all fixes must be locally tested before committing.

## Bug Analysis

### Current Behavior (Defect)

1.1 WHEN `gatsby-transformer-remark` processes markdown files THEN the system silently ignores `gatsby-remark-images` configuration because `gatsby-remark-copy-linked-files` overwrites the `resolve` key in the same JavaScript object literal, resulting in images not being optimized or processed

1.2 WHEN the project dependencies are installed THEN the system includes the deprecated `gatsby-image` package alongside its replacement `gatsby-plugin-image`, adding unnecessary bundle weight and potential confusion

1.3 WHEN the project dependencies are installed THEN the system includes `nvm` as an npm dependency even though nvm is a system-level tool and not a valid npm package

1.4 WHEN the `SEO` component is rendered THEN the system uses `SEO.defaultProps` which is deprecated in React 18 and removed in React 19

1.5 WHEN the `Header` component is rendered THEN the system uses `Header.defaultProps` which is deprecated in React 18 and removed in React 19

1.6 WHEN the SEO component renders meta tags THEN the system uses `react-helmet` and `gatsby-plugin-react-helmet` which are deprecated in Gatsby 5 in favor of the built-in Head API

1.7 WHEN `gatsby-node.js` queries for blog posts THEN the system uses the deprecated `sort: { fields: [...], order: ... }` GraphQL syntax which is not the preferred Gatsby 5 format

1.8 WHEN `blog-list.js` queries for blog posts THEN the system uses the same deprecated `sort: { fields: [...], order: ... }` GraphQL syntax

1.9 WHEN `blog-list.js` renders the list of posts THEN the system assigns duplicate `key` props to both the `Link` wrapper and the inner `div` using `node.fields.slug`, which is a React anti-pattern

1.10 WHEN `blog-post.js` renders markdown HTML content THEN the system uses `dangerouslySetInnerHTML` without any sanitization, exposing the page to potential XSS if markdown content contains malicious scripts

1.11 WHEN navigation links are rendered in `header.js` THEN the system does not provide `aria-label` attributes on the navigation links, reducing accessibility for screen reader users

1.12 WHEN navigation links are rendered in `blog-list.js` pagination THEN the system does not wrap pagination controls in a `<nav>` element with an `aria-label`, reducing accessibility

1.13 WHEN `gatsby-remark-images` processes images THEN the system uses `loading: eager` and `quality: 100` for all images, causing unnecessarily large payloads and slower page loads

1.14 WHEN the SEO component renders keywords THEN the system hardcodes the same keyword array on every page instead of using per-post keywords from frontmatter

1.15 WHEN the site is built THEN the system does not generate a sitemap or RSS feed, reducing discoverability by search engines and feed readers

1.16 WHEN the `src/archive/` directory is included in the project THEN the system ships dead/unused files (old backups, `.txt` renamed files) that add noise to the repository

1.17 WHEN `streetphotography.js` and `streetphotography2.js` exist as separate pages THEN the system likely contains duplicated logic across these two files

### Expected Behavior (Correct)

2.1 WHEN `gatsby-transformer-remark` processes markdown files THEN the system SHALL configure `gatsby-remark-images` and `gatsby-remark-copy-linked-files` as separate entries in the plugins array so both plugins are applied correctly

2.2 WHEN the project dependencies are installed THEN the system SHALL not include the deprecated `gatsby-image` package since `gatsby-plugin-image` is already present as its replacement

2.3 WHEN the project dependencies are installed THEN the system SHALL not include `nvm` as an npm dependency since it is a system-level tool

2.4 WHEN the `SEO` component is rendered THEN the system SHALL use JavaScript default parameter values instead of `SEO.defaultProps`

2.5 WHEN the `Header` component is rendered THEN the system SHALL use JavaScript default parameter values instead of `Header.defaultProps`

2.6 WHEN the SEO component renders meta tags THEN the system SHALL use the Gatsby 5 built-in Head API instead of `react-helmet` and `gatsby-plugin-react-helmet`

2.7 WHEN `gatsby-node.js` queries for blog posts THEN the system SHALL use the Gatsby 5 preferred sort syntax `sort: { frontmatter___date: DESC }`

2.8 WHEN `blog-list.js` queries for blog posts THEN the system SHALL use the Gatsby 5 preferred sort syntax `sort: { frontmatter___date: DESC }`

2.9 WHEN `blog-list.js` renders the list of posts THEN the system SHALL use unique `key` props — the `key` on the outer `Link` element is sufficient and the inner `div` SHALL not have a duplicate `key`

2.10 WHEN `blog-post.js` renders markdown HTML content THEN the system SHALL sanitize the HTML output (e.g., using DOMPurify) before passing it to `dangerouslySetInnerHTML`

2.11 WHEN navigation links are rendered in `header.js` THEN the system SHALL provide `aria-label` attributes on navigation links (e.g., `aria-label="about page"`, `aria-label="gallery page"`)

2.12 WHEN pagination controls are rendered in `blog-list.js` THEN the system SHALL wrap them in a `<nav aria-label="pagination">` element

2.13 WHEN `gatsby-remark-images` processes images THEN the system SHALL use `loading: lazy` and `quality: 80` as defaults for better performance

2.14 WHEN the SEO component renders keywords THEN the system SHALL accept an optional `keywords` prop and fall back to default keywords only when per-post keywords are not provided via frontmatter

2.15 WHEN the site is built THEN the system SHALL include `gatsby-plugin-sitemap` to generate a sitemap for search engine discoverability

2.16 WHEN the project is maintained THEN the system SHALL remove or relocate the `src/archive/` directory so dead files are not included in the source tree

2.17 WHEN street photography pages are rendered THEN the system SHALL consolidate duplicated logic between `streetphotography.js` and `streetphotography2.js` into a shared component or parameterized page

### Unchanged Behavior (Regression Prevention)

3.1 WHEN markdown blog posts with text-only content are rendered THEN the system SHALL CONTINUE TO display them correctly with proper formatting

3.2 WHEN users navigate between blog posts using previous/next links THEN the system SHALL CONTINUE TO navigate correctly with proper post ordering

3.3 WHEN the blog list pagination is used to browse pages THEN the system SHALL CONTINUE TO display the correct number of posts per page and navigate between pages

3.4 WHEN the site metadata (title, author, description) is queried THEN the system SHALL CONTINUE TO return the correct values across all pages

3.5 WHEN the site is built and deployed via AWS Amplify THEN the system SHALL CONTINUE TO build successfully without errors

3.6 WHEN users visit the gallery, about, disclaimer, or street photography pages THEN the system SHALL CONTINUE TO render those pages correctly

3.7 WHEN the manifest plugin generates PWA metadata THEN the system SHALL CONTINUE TO produce correct manifest.json with the configured theme and icons

3.8 WHEN external links in the footer are clicked THEN the system SHALL CONTINUE TO open in new tabs with `noopener noreferrer` attributes
