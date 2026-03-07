# Implementation Plan

- [x] 1. Write bug condition exploration tests
  - **Property 1: Bug Condition** - Gatsby Blog Multi-Defect Verification
  - **CRITICAL**: These tests MUST FAIL on unfixed code - failure confirms the bugs exist
  - **DO NOT attempt to fix the tests or the code when they fail**
  - **NOTE**: These tests encode the expected behavior - they will validate the fixes when they pass after implementation
  - **GOAL**: Surface counterexamples that demonstrate each bug category exists
  - **Scoped PBT Approach**: For each deterministic defect, scope the property to the concrete failing case(s)
  - Create test file `__tests__/bug-condition.test.js` with the following test cases:
  - **Config Duplicate Key (Defect 1.1)**: Parse `gatsby-config.js`, find the `gatsby-transformer-remark` plugin entry, and assert its `options.plugins` array contains at least 2 separate objects — one with `resolve: 'gatsby-remark-images'` and another with `resolve: 'gatsby-remark-copy-linked-files'`. On unfixed code, the single object with duplicate `resolve` keys means only `gatsby-remark-copy-linked-files` survives, so the test FAILS (confirms the overwrite bug).
  - **Image Performance (Defect 1.13)**: In the same config parse, assert `gatsby-remark-images` options have `loading: 'lazy'` and `quality: 80`. On unfixed code, values are `eager`/`100` (or the plugin is missing entirely), so the test FAILS.
  - **Deprecated Dependencies (Defects 1.2, 1.3)**: Read `package.json`, assert `gatsby-image` and `nvm` are NOT in dependencies. On unfixed code, both are present, so the test FAILS.
  - **Deprecated react-helmet (Defect 1.6)**: Assert `react-helmet` and `gatsby-plugin-react-helmet` are NOT in `package.json` dependencies, and `gatsby-config.js` plugins array does not contain `gatsby-plugin-react-helmet`. On unfixed code, all are present, so the test FAILS.
  - **defaultProps Usage (Defects 1.4, 1.5)**: Read `src/components/seo.js` and `src/components/header.js` as strings, assert neither contains `.defaultProps`. On unfixed code, both contain `defaultProps`, so the test FAILS.
  - **Deprecated Sort Syntax (Defects 1.7, 1.8)**: Read `gatsby-node.js` and `src/templates/blog-list.js` as strings, assert neither contains `fields: [frontmatter___date]` (old syntax) and both contain `frontmatter___date: DESC` (new syntax). On unfixed code, old syntax is present, so the test FAILS.
  - **Duplicate Key Props (Defect 1.9)**: Read `src/templates/blog-list.js`, count occurrences of `key={node.fields.slug}` — assert it appears exactly once (on the `<Link>`). On unfixed code, it appears twice, so the test FAILS.
  - **Unsanitized HTML (Defect 1.10)**: Read `src/templates/blog-post.js`, assert it imports `dompurify` (or `isomorphic-dompurify`) and uses `DOMPurify.sanitize` before `dangerouslySetInnerHTML`. On unfixed code, no sanitization exists, so the test FAILS.
  - **Missing Accessibility (Defects 1.11, 1.12)**: Read `src/components/header.js`, assert navigation `<Link>` elements include `aria-label`. Read `src/templates/blog-list.js`, assert pagination is wrapped in `<nav aria-label="pagination">`. On unfixed code, both are missing, so the test FAILS.
  - **Hardcoded Keywords (Defect 1.14)**: Read `src/components/seo.js`, assert the function signature includes a `keywords` parameter with a default value. On unfixed code, no `keywords` param exists, so the test FAILS.
  - **Missing Sitemap (Defect 1.15)**: Parse `gatsby-config.js`, assert plugins array contains `gatsby-plugin-sitemap`. On unfixed code, it's absent, so the test FAILS.
  - **Dead Code (Defect 1.16)**: Assert `src/archive/` directory does not exist using `fs.existsSync`. On unfixed code, it exists, so the test FAILS.
  - **Duplicated Street Photography (Defect 1.17)**: Assert `src/components/album-grid.js` exists (shared component). On unfixed code, it doesn't exist, so the test FAILS.
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests FAIL (this is correct - it proves the bugs exist)
  - Document counterexamples found to understand root causes
  - Mark task complete when tests are written, run, and failures are documented
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 1.14, 1.15, 1.16, 1.17_

- [x] 2. Write preservation property tests (BEFORE implementing fix)
  - **Property 2: Preservation** - Existing Site Behavior Unchanged
  - **IMPORTANT**: Follow observation-first methodology
  - Create test file `__tests__/preservation.test.js` with the following test cases:
  - **Site Metadata Preservation (3.4)**: Observe that `gatsby-config.js` `siteMetadata` contains `title: 'sigit.cloud'`, `author: 'Sigit Priyanggoro'`, `description` with expected value, `siteUrl: 'https://sigit.cloud'`, and `social` with `linkedin` and `github`. Write test asserting these values are unchanged.
  - **Plugin Pipeline Preservation (3.5, 3.7)**: Observe that `gatsby-config.js` plugins array contains `gatsby-source-filesystem` (images + mdblogs), `gatsby-transformer-remark`, `gatsby-transformer-sharp`, `gatsby-plugin-sharp`, `gatsby-plugin-image`, `gatsby-plugin-manifest` with correct options. Write test asserting all these plugins remain present with their configurations intact.
  - **Manifest Preservation (3.7)**: Observe that `gatsby-plugin-manifest` options include `name: 'gatsby-starter-default'`, `theme_color: '#663399'`, `icon: 'src/images/gatsby-icon.png'`. Write test asserting these values are unchanged.
  - **Page Creation Preservation (3.2, 3.3, 3.6)**: Observe that `gatsby-node.js` `createPages` creates blog post pages from slugs with `previous`/`next` context, and blog list pages with `postsPerPage: 6`, correct `numPages` calculation, and paths `/`, `2`, `3`, etc. Write test asserting the page creation logic is unchanged — `postsPerPage` is 6, pagination paths are correct, previous/next context is passed.
  - **Slug Creation Preservation (3.1)**: Observe that `gatsby-node.js` `onCreateNode` creates slug fields for `MarkdownRemark` nodes using `createFilePath`. Write test asserting this logic is unchanged.
  - **Layout Structure Preservation (3.6, 3.8)**: Read `src/components/layout.js` and observe its structure. Write test asserting the layout component still renders header, main content, and footer with external links that have `target="_blank"` and `rel="noopener noreferrer"`.
  - **Blog Post Template Preservation (3.1, 3.2)**: Observe that `src/templates/blog-post.js` renders post title, date, HTML content, and previous/next navigation links. Write test asserting these elements are still present in the template.
  - **Blog List Template Preservation (3.3)**: Observe that `src/templates/blog-list.js` renders post titles linked to slugs, post dates, excerpts, and pagination controls with prev/next and page numbers. Write test asserting these elements are still present.
  - **Street Photography Pages Preservation (3.6)**: Observe that `streetphotography.js` renders 8 album links (london2023fujixt5, london2023ctm10r, seattle2023m10r, nyhavn2023m10r, stroget2023fuji, seattle2023m10r, tokyo2023fuji, kyoto2023fuji, tsukiji2023rch) and `streetphotography2.js` renders 6 album links (fushimi2023rch, yosakoi2023fuji, shibuya2023fuji, seattle2023rch, seattle2021lq, newyork2021lq). Write test asserting all album links and navigation between Album 1/Album 2 are preserved.
  - Run tests on UNFIXED code
  - **EXPECTED OUTCOME**: Tests PASS (this confirms baseline behavior to preserve)
  - Mark task complete when tests are written, run, and passing on unfixed code
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 3. Fix critical config bug and optimize image settings in gatsby-config.js

  - [x] 3.1 Separate duplicate resolve keys in gatsby-transformer-remark plugins array
    - In `gatsby-config.js`, the `gatsby-transformer-remark` `options.plugins` array has a single object with duplicate `resolve` keys: `gatsby-remark-images` is overwritten by `gatsby-remark-copy-linked-files`
    - Split into two separate objects in the array:
      ```js
      plugins: [
        {
          resolve: `gatsby-remark-images`,
          options: { maxWidth: 590, linkImagesToOriginal: false, loading: `lazy`, quality: 80 },
        },
        {
          resolve: `gatsby-remark-copy-linked-files`,
          options: { ignoreFileExtensions: [] },
        },
      ]
      ```
    - Change `loading: 'eager'` to `loading: 'lazy'` and `quality: 100` to `quality: 80` in the same step
    - _Bug_Condition: pluginObjectHasDuplicateResolveKeys AND remarkImagesUsesEagerLoadingOrQuality100_
    - _Expected_Behavior: Both remark plugins exist as separate array entries with optimized image settings_
    - _Preservation: gatsby-transformer-remark plugin structure and other plugins unchanged_
    - _Requirements: 2.1, 2.13_

  - [x] 3.2 Remove gatsby-plugin-react-helmet from plugins array
    - Remove the `gatsby-plugin-react-helmet` string entry from the `plugins` array in `gatsby-config.js`
    - _Bug_Condition: usesReactHelmet in gatsby-config.js_
    - _Expected_Behavior: gatsby-plugin-react-helmet is not in the plugins array_
    - _Preservation: All other plugins remain unchanged_
    - _Requirements: 2.6_

  - [x] 3.3 Add gatsby-plugin-sitemap to plugins array
    - Add `gatsby-plugin-sitemap` to the `plugins` array in `gatsby-config.js`
    - _Bug_Condition: NOT hasSitemapPlugin_
    - _Expected_Behavior: gatsby-plugin-sitemap is present in plugins array_
    - _Preservation: All other plugins remain unchanged_
    - _Requirements: 2.15_

- [x] 4. Clean up deprecated and invalid dependencies in package.json

  - [x] 4.1 Remove gatsby-image, nvm, react-helmet, and gatsby-plugin-react-helmet from dependencies
    - Remove `gatsby-image`, `nvm`, `react-helmet`, and `gatsby-plugin-react-helmet` from the `dependencies` object in `package.json`
    - _Bug_Condition: hasDependency("gatsby-image") OR hasDependency("nvm") OR hasDependency("react-helmet") OR hasDependency("gatsby-plugin-react-helmet")_
    - _Expected_Behavior: None of these packages appear in dependencies_
    - _Preservation: All other dependencies remain unchanged_
    - _Requirements: 2.2, 2.3, 2.6_

  - [x] 4.2 Add dompurify (or isomorphic-dompurify) and gatsby-plugin-sitemap as dependencies
    - Add `isomorphic-dompurify` and `gatsby-plugin-sitemap` to `dependencies` in `package.json`
    - Use `isomorphic-dompurify` instead of `dompurify` since Gatsby SSR needs server-side support
    - _Expected_Behavior: New dependencies are available for HTML sanitization and sitemap generation_
    - _Requirements: 2.10, 2.15_

- [x] 5. Migrate SEO component from react-helmet to Gatsby Head API

  - [x] 5.1 Rewrite seo.js to use Gatsby Head API with default parameters
    - Remove `import { Helmet } from "react-helmet"` and `import PropTypes from "prop-types"`
    - Change function signature to `function SEO({ description = '', lang = 'en', meta = [], keywords = [], title })`
    - Replace `<Helmet>` rendering with a component that returns JSX meta tag elements directly (for use inside a `Head` export)
    - The SEO component should return a fragment with `<title>`, `<html lang>`, and `<meta>` tags
    - Add `keywords` prop support: render `<meta name="keywords">` when keywords array is non-empty, fall back to default keywords when empty
    - Remove `SEO.defaultProps` and `SEO.propTypes` blocks entirely
    - _Bug_Condition: usesDefaultProps(seo.js) AND usesReactHelmet(seo.js) AND keywordsAreHardcoded_
    - _Expected_Behavior: Uses default parameters, Head API pattern, flexible keywords prop_
    - _Preservation: Same meta tags are rendered (title, description, og:*, twitter:*, author info)_
    - _Requirements: 2.4, 2.6, 2.14_

  - [x] 5.2 Update blog-post.js to export Head function and add HTML sanitization
    - Remove inline `<SEO>` component usage from the render body
    - Export a named `Head` function that uses the refactored SEO component to render meta tags
    - Import `DOMPurify` from `isomorphic-dompurify` and sanitize `post.html` before `dangerouslySetInnerHTML`: `DOMPurify.sanitize(post.html)`
    - Update GraphQL query to include `keywords` from frontmatter (optional field)
    - Pass frontmatter `keywords` to the SEO Head component, falling back to default keywords
    - _Bug_Condition: usesReactHelmet AND usesUnsanitizedDangerouslySetInnerHTML AND keywordsAreHardcoded_
    - _Expected_Behavior: Head API for SEO, sanitized HTML, per-post keywords from frontmatter_
    - _Preservation: Post title, date, content, and prev/next navigation still render correctly_
    - _Requirements: 2.6, 2.10, 2.14_

  - [x] 5.3 Update blog-list.js to export Head function, fix duplicate keys, and add pagination accessibility
    - Remove inline `<SEO>` component usage from the render body
    - Export a named `Head` function that uses the refactored SEO component
    - Remove `key={node.fields.slug}` from the inner `<div>` element, keeping it only on the outer `<Link>`
    - Wrap the pagination `<ul>` and prev/next links in `<nav aria-label="pagination">`
    - Update GraphQL sort syntax from `sort: { fields: [frontmatter___date], order: DESC }` to `sort: { frontmatter___date: DESC }`
    - _Bug_Condition: hasDuplicateKeyProps AND paginationNotWrappedInNav AND usesDeprecatedSortSyntax_
    - _Expected_Behavior: Unique keys, accessible pagination nav, modern sort syntax, Head API_
    - _Preservation: Post list rendering, pagination logic, and page navigation unchanged_
    - _Requirements: 2.6, 2.8, 2.9, 2.12_

- [x] 6. Update header.js with default parameters and accessibility

  - [x] 6.1 Replace defaultProps with default parameters and add aria-labels
    - Change `const Header = ({ siteTitle }) => (` to `const Header = ({ siteTitle = '' }) => (`
    - Add `aria-label="about page"` to the about `<Link>`
    - Add `aria-label="gallery page"` to the gallery `<Link>`
    - Add `aria-label="street photography page"` to the street photography `<Link>`
    - Remove `Header.propTypes` and `Header.defaultProps` blocks
    - Remove `import PropTypes from "prop-types"`
    - _Bug_Condition: usesDefaultProps(header.js) AND navLinksMissingAriaLabels_
    - _Expected_Behavior: Default parameters, all nav links have aria-label attributes_
    - _Preservation: Header layout, styling, and navigation destinations unchanged_
    - _Requirements: 2.5, 2.11_

- [x] 7. Update gatsby-node.js GraphQL sort syntax

  - [x] 7.1 Replace deprecated sort syntax with Gatsby 5 format
    - Change `sort: { fields: [frontmatter___date], order: DESC }` to `sort: { frontmatter___date: DESC }`
    - _Bug_Condition: usesDeprecatedSortSyntax in gatsby-node.js_
    - _Expected_Behavior: Uses Gatsby 5 preferred sort syntax_
    - _Preservation: Post ordering and page creation logic unchanged_
    - _Requirements: 2.7_

- [x] 8. Remove dead code and consolidate street photography pages

  - [x] 8.1 Delete src/archive/ directory
    - Remove the entire `src/archive/` directory and all its contents (old backups, `.txt` renamed files, draft folder)
    - _Bug_Condition: src/archive/* exists_
    - _Expected_Behavior: src/archive/ directory does not exist_
    - _Requirements: 2.16_

  - [x] 8.2 Create shared AlbumGrid component
    - Create `src/components/album-grid.js` that accepts an `albums` prop (array of `{ to, title, src, alt }`) and renders the 3-column grid layout
    - The component should render `<div class="three-columns-grid">` with `<div className="blog-list">` items containing `<Link>`, `<h4>` title, and `<StaticImage>`
    - Note: Since `StaticImage` requires static `src` props at build time, the shared component should extract the repeated grid wrapper and card structure, while each page still provides its own `StaticImage` elements as children or uses a render pattern compatible with StaticImage constraints
    - _Expected_Behavior: Shared component eliminates duplicated layout/grid boilerplate_
    - _Requirements: 2.17_

  - [x] 8.3 Refactor streetphotography.js and streetphotography2.js to use shared component
    - Refactor both pages to import and use the shared `AlbumGrid` component (or shared grid wrapper)
    - Keep page-specific album data (StaticImage elements with their static src paths) since StaticImage requires compile-time static strings
    - Keep the album navigation links (Album 1 / Album 2) and page-specific SEO
    - Migrate both pages to use Head API for SEO (export `Head` function)
    - _Bug_Condition: hasDuplicatedAlbumGridLogic_
    - _Expected_Behavior: Shared component used by both pages, Head API for SEO_
    - _Preservation: All album links, images, and navigation between Album 1/Album 2 preserved_
    - _Requirements: 2.6, 2.17_

- [x] 9. Verify bug condition exploration tests now pass

  - [x] 9.1 Re-run bug condition exploration tests after all fixes
    - **Property 1: Expected Behavior** - All 17 Defects Resolved
    - **IMPORTANT**: Re-run the SAME tests from task 1 - do NOT write new tests
    - The tests from task 1 encode the expected behavior for all 17 defects
    - When these tests pass, it confirms all bug conditions are resolved:
      - Config: two separate remark plugin objects with `lazy`/`80` settings
      - Dependencies: no `gatsby-image`, `nvm`, `react-helmet`, `gatsby-plugin-react-helmet`
      - Components: no `defaultProps`, no `react-helmet` imports
      - GraphQL: Gatsby 5 sort syntax in both files
      - Code quality: single `key` prop, sanitized HTML
      - Accessibility: `aria-label` on nav links, `<nav>` around pagination
      - SEO: `keywords` parameter in SEO component, `gatsby-plugin-sitemap` in config
      - Dead code: no `src/archive/`, shared `album-grid.js` exists
    - Run bug condition exploration tests from task 1
    - **EXPECTED OUTCOME**: Tests PASS (confirms all bugs are fixed)
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17_

  - [x] 9.2 Re-run preservation tests after all fixes
    - **Property 2: Preservation** - Existing Site Behavior Still Unchanged
    - **IMPORTANT**: Re-run the SAME tests from task 2 - do NOT write new tests
    - Run preservation property tests from task 2
    - **EXPECTED OUTCOME**: Tests PASS (confirms no regressions)
    - Confirm all preservation tests still pass after fixes:
      - Site metadata unchanged
      - Plugin pipeline intact
      - Manifest options unchanged
      - Page creation logic unchanged (postsPerPage, pagination paths, prev/next)
      - Slug creation unchanged
      - Layout structure with footer links unchanged
      - Blog post template structure unchanged
      - Blog list template structure unchanged
      - Street photography album links and navigation preserved
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8_

- [x] 10. Checkpoint - Ensure all tests pass and site builds successfully
  - Run all tests (`bug-condition` and `preservation`) and confirm they pass
  - Run `gatsby build` locally to verify the site builds without errors
  - Verify no regressions in the build output
  - Ensure all fixes are ready for commit (auto-deploys to AWS Amplify on git push)
  - Ask the user if questions arise
