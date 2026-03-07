# Gatsby Blog Fixes — Bugfix Design

## Overview

The sigit.cloud Gatsby 5 blog has 17 defects spanning a critical configuration bug, deprecated API usage, accessibility violations, code quality issues, and performance problems. The most severe defect is in `gatsby-config.js` where a JavaScript object literal contains duplicate `resolve` keys, causing `gatsby-remark-images` to be silently overwritten by `gatsby-remark-copy-linked-files` — meaning markdown images are never processed. The fix strategy is to address each defect with minimal, targeted changes while preserving all existing working behavior (navigation, pagination, metadata, build pipeline, page rendering).

## Glossary

- **Bug_Condition (C)**: The set of conditions across 17 defects that produce incorrect behavior — ranging from silent config overwrites to deprecated API usage to missing accessibility attributes
- **Property (P)**: The desired correct behavior for each defect — proper plugin separation, modern API usage, accessible markup, sanitized HTML, optimized images
- **Preservation**: The 8 existing behaviors that must remain unchanged — text rendering, navigation, pagination, metadata, build success, page rendering, PWA manifest, external links
- **gatsby-config.js**: The Gatsby configuration file defining site metadata and plugin pipeline
- **gatsby-node.js**: The Node API file that creates pages and slugs at build time
- **Head API**: Gatsby 5's built-in replacement for `react-helmet`, using an exported `Head` function from page/template components
- **defaultProps**: A deprecated React pattern for setting default prop values, replaced by JavaScript default parameters

## Bug Details

### Bug Condition

The bugs manifest across multiple files and categories. The critical defect is a JavaScript language-level issue: two `resolve` keys in the same object literal, where the second silently overwrites the first. The remaining defects involve deprecated APIs, missing accessibility attributes, unsanitized HTML, suboptimal configuration, and dead code.

**Formal Specification:**
```
FUNCTION isBugCondition(input)
  INPUT: input of type { file: String, context: String }
  OUTPUT: boolean

  // Category 1: Critical config defect
  IF input.file == "gatsby-config.js"
     AND input.context == "gatsby-transformer-remark plugins array"
     AND pluginObjectHasDuplicateResolveKeys(input)
  THEN RETURN true

  // Category 2: Deprecated dependencies
  IF input.file == "package.json"
     AND (hasDependency("gatsby-image") OR hasDependency("nvm"))
  THEN RETURN true

  // Category 3: Deprecated React patterns
  IF input.file IN ["seo.js", "header.js"]
     AND usesDefaultProps(input)
  THEN RETURN true

  // Category 4: Deprecated Gatsby APIs
  IF input.file IN ["seo.js"]
     AND usesReactHelmet(input)
  THEN RETURN true

  IF input.file IN ["gatsby-node.js", "blog-list.js"]
     AND usesDeprecatedSortSyntax(input)
  THEN RETURN true

  // Category 5: Code quality / security
  IF input.file == "blog-list.js" AND hasDuplicateKeyProps(input)
  THEN RETURN true

  IF input.file == "blog-post.js" AND usesUnsanitizedDangerouslySetInnerHTML(input)
  THEN RETURN true

  // Category 6: Accessibility
  IF input.file == "header.js" AND navLinksMissingAriaLabels(input)
  THEN RETURN true

  IF input.file == "blog-list.js" AND paginationNotWrappedInNav(input)
  THEN RETURN true

  // Category 7: Performance / SEO
  IF input.file == "gatsby-config.js"
     AND remarkImagesUsesEagerLoadingOrQuality100(input)
  THEN RETURN true

  IF input.file IN ["blog-post.js", "blog-list.js"]
     AND keywordsAreHardcoded(input)
  THEN RETURN true

  IF input.file == "gatsby-config.js" AND NOT hasSitemapPlugin(input)
  THEN RETURN true

  // Category 8: Dead code
  IF input.file == "src/archive/*" THEN RETURN true

  IF input.file IN ["streetphotography.js", "streetphotography2.js"]
     AND hasDuplicatedAlbumGridLogic(input)
  THEN RETURN true

  RETURN false
END FUNCTION
```

### Examples

- **Defect 1.1 (Critical)**: In `gatsby-config.js`, the `gatsby-transformer-remark` plugins array contains `{ resolve: 'gatsby-remark-images', options: {...}, resolve: 'gatsby-remark-copy-linked-files', options: {...} }`. The second `resolve` key overwrites the first, so `gatsby-remark-images` is never loaded. Expected: two separate objects in the array.
- **Defect 1.4/1.5**: `SEO.defaultProps = { lang: 'en', meta: [], description: '' }` and `Header.defaultProps = { siteTitle: '' }` use the deprecated pattern. Expected: `function SEO({ description = '', lang = 'en', meta = [] })`.
- **Defect 1.6**: `import { Helmet } from "react-helmet"` in `seo.js` uses the deprecated library. Expected: export a `Head` function using Gatsby's built-in Head API.
- **Defect 1.10**: `<div dangerouslySetInnerHTML={{ __html: post.html }} />` in `blog-post.js` renders unsanitized HTML. Expected: sanitize with DOMPurify before rendering.
- **Defect 1.11**: Navigation links in `header.js` like `<Link to="/about/">` lack `aria-label` attributes. Expected: `<Link to="/about/" aria-label="about page">`.
- **Defect 1.13**: `gatsby-remark-images` configured with `loading: 'eager'` and `quality: 100`. Expected: `loading: 'lazy'` and `quality: 80`.

## Expected Behavior

### Preservation Requirements

**Unchanged Behaviors:**
- Text-only markdown blog posts must continue to render with proper formatting (3.1)
- Previous/next navigation between blog posts must continue to work with correct ordering (3.2)
- Blog list pagination must continue to show correct posts per page and navigate between pages (3.3)
- Site metadata (title, author, description) must continue to return correct values (3.4)
- The site must continue to build successfully via `gatsby build` for AWS Amplify deployment (3.5)
- Gallery, about, disclaimer, and street photography pages must continue to render correctly (3.6)
- PWA manifest must continue to produce correct manifest.json (3.7)
- External footer links must continue to open in new tabs with `noopener noreferrer` (3.8)

**Scope:**
All inputs that do NOT involve the 17 identified defect conditions should be completely unaffected by these fixes. This includes:
- Markdown content rendering (text, code blocks, links)
- Page routing and slug generation
- Static image processing via `gatsby-plugin-image`
- CSS styling and layout
- GraphQL data layer (site metadata, frontmatter fields)
- PWA manifest generation

## Hypothesized Root Cause

Based on the code analysis, the root causes are:

1. **Duplicate Object Key (Defect 1.1)**: The `gatsby-transformer-remark` plugins array contains a single object with two `resolve` keys and two `options` keys. In JavaScript, when an object literal has duplicate keys, the last one wins silently. This means `gatsby-remark-images` config is completely overwritten by `gatsby-remark-copy-linked-files`. This is the most impactful bug — images in markdown are not processed at all.

2. **Stale Dependencies (Defects 1.2, 1.3)**: The project was likely started from an older Gatsby starter that included `gatsby-image` (pre-v3). It was never cleaned up when `gatsby-plugin-image` was added. `nvm` was likely added by mistake — it's a shell tool, not an npm package.

3. **React/Gatsby Version Drift (Defects 1.4–1.8)**: The codebase was written for an earlier Gatsby/React version and not updated when upgrading to Gatsby 5 / React 18. `defaultProps` was standard practice pre-React 18. `react-helmet` was the standard before Gatsby 4.19+ introduced the Head API. The old `sort: { fields: [...], order: ... }` syntax was standard before Gatsby 5.

4. **Copy-Paste Oversight (Defect 1.9)**: The `key={node.fields.slug}` was applied to both the `<Link>` wrapper and the inner `<div>` in `blog-list.js`, likely from a refactor where the Link wrapper was added around an existing keyed div.

5. **Missing Security Consideration (Defect 1.10)**: `dangerouslySetInnerHTML` was used directly with `post.html` from the markdown transformer without sanitization. While the content is author-controlled, this is a security best practice gap.

6. **Accessibility Oversight (Defects 1.11, 1.12)**: Navigation links and pagination controls were built without accessibility attributes — common in starter templates.

7. **Unoptimized Defaults (Defect 1.13)**: `loading: eager` and `quality: 100` were set explicitly, likely for development convenience, but are suboptimal for production.

8. **Hardcoded SEO (Defect 1.14)**: The same keyword array is copy-pasted into every component that uses SEO, rather than being driven by frontmatter data.

9. **Missing Plugins (Defect 1.15)**: `gatsby-plugin-sitemap` was never added to the config.

10. **Dead Code Accumulation (Defects 1.16, 1.17)**: The `src/archive/` directory contains old backups. The two street photography pages share identical layout/SEO/navigation boilerplate with only different album data.

## Correctness Properties

Property 1: Bug Condition — Plugin Configuration Integrity

_For any_ Gatsby config where `gatsby-transformer-remark` is configured with sub-plugins, the fixed configuration SHALL have `gatsby-remark-images` and `gatsby-remark-copy-linked-files` as separate objects in the plugins array, each with their own `resolve` and `options` keys, so both plugins are loaded and applied during markdown processing.

**Validates: Requirements 2.1, 2.13**

Property 2: Bug Condition — Dependency Hygiene

_For any_ build of the project, the fixed `package.json` SHALL NOT include `gatsby-image` or `nvm` as dependencies, and SHALL NOT include `react-helmet` or `gatsby-plugin-react-helmet` after the Head API migration is complete.

**Validates: Requirements 2.2, 2.3**

Property 3: Bug Condition — Modern React Patterns

_For any_ rendering of the SEO or Header components with missing optional props, the fixed components SHALL apply default values via JavaScript default parameters (not `defaultProps`), producing the same default behavior as before.

**Validates: Requirements 2.4, 2.5**

Property 4: Bug Condition — Gatsby Head API Migration

_For any_ page that renders SEO meta tags, the fixed implementation SHALL use Gatsby's built-in Head API (exported `Head` function) instead of `react-helmet`, producing equivalent `<title>`, `<meta>`, and `<html lang>` tags in the document head.

**Validates: Requirements 2.6**

Property 5: Bug Condition — GraphQL Sort Syntax

_For any_ GraphQL query that sorts markdown posts by date, the fixed query SHALL use the Gatsby 5 syntax `sort: { frontmatter___date: DESC }` instead of the deprecated `sort: { fields: [...], order: ... }` syntax.

**Validates: Requirements 2.7, 2.8**

Property 6: Bug Condition — React Key Uniqueness

_For any_ list of blog posts rendered in `blog-list.js`, the fixed component SHALL assign a `key` prop only to the outermost element (`<Link>`) in each iteration, with no duplicate `key` on inner elements.

**Validates: Requirements 2.9**

Property 7: Bug Condition — HTML Sanitization

_For any_ HTML string passed to `dangerouslySetInnerHTML` in `blog-post.js`, the fixed component SHALL sanitize the HTML (e.g., via DOMPurify) to remove potentially malicious script tags, event handlers, and other XSS vectors before rendering.

**Validates: Requirements 2.10**

Property 8: Bug Condition — Navigation Accessibility

_For any_ navigation link rendered in `header.js`, the fixed component SHALL include an `aria-label` attribute describing the link destination. _For any_ pagination control block in `blog-list.js`, the fixed component SHALL wrap it in a `<nav>` element with `aria-label="pagination"`.

**Validates: Requirements 2.11, 2.12**

Property 9: Bug Condition — SEO Keywords Flexibility

_For any_ page that renders the SEO component, the fixed component SHALL accept an optional `keywords` prop and render those keywords as a meta tag, falling back to default keywords only when the prop is not provided.

**Validates: Requirements 2.14**

Property 10: Bug Condition — Sitemap Generation

_For any_ production build, the fixed `gatsby-config.js` SHALL include `gatsby-plugin-sitemap` in the plugins array so a sitemap is generated for search engine discoverability.

**Validates: Requirements 2.15**

Property 11: Bug Condition — Dead Code Removal and Consolidation

_For any_ build of the project, the `src/archive/` directory SHALL NOT exist. The street photography pages SHALL share a common album grid component to eliminate duplicated layout/SEO/navigation boilerplate.

**Validates: Requirements 2.16, 2.17**

Property 12: Preservation — Existing Site Behavior

_For any_ input where the bug condition does NOT hold (text-only markdown rendering, post navigation, pagination, site metadata, build pipeline, static pages, PWA manifest, external links), the fixed code SHALL produce the same result as the original code, preserving all existing functionality.

**Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8**

## Fix Implementation

### Changes Required

Assuming our root cause analysis is correct:

**File**: `gatsby-config.js`

**Changes**:
1. **Separate remark plugin objects (Defect 1.1)**: Split the single object with duplicate `resolve` keys into two separate objects in the `gatsby-transformer-remark` plugins array:
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
2. **Optimize image settings (Defect 1.13)**: Change `loading: 'eager'` to `loading: 'lazy'` and `quality: 100` to `quality: 80` in the `gatsby-remark-images` options (done in step 1 above).
3. **Remove gatsby-plugin-react-helmet (Defect 1.6)**: Remove `gatsby-plugin-react-helmet` from the plugins array.
4. **Add gatsby-plugin-sitemap (Defect 1.15)**: Add `gatsby-plugin-sitemap` to the plugins array.

---

**File**: `package.json`

**Changes**:
1. **Remove deprecated/invalid dependencies (Defects 1.2, 1.3)**: Remove `gatsby-image` and `nvm` from dependencies.
2. **Remove react-helmet dependencies (Defect 1.6)**: Remove `react-helmet` and `gatsby-plugin-react-helmet` from dependencies.
3. **Add new dependencies**: Add `dompurify` (for HTML sanitization) and `gatsby-plugin-sitemap`.

---

**File**: `src/components/seo.js`

**Changes**:
1. **Replace defaultProps with default parameters (Defect 1.4)**: Change function signature to `function SEO({ description = '', lang = 'en', meta = [], keywords = [], title })`.
2. **Migrate from react-helmet to Head API (Defect 1.6)**: Remove `Helmet` import. Refactor the component to work with Gatsby's Head API pattern. The SEO component will return meta tag elements directly. Pages/templates will export a `Head` function that uses the SEO component.
3. **Support per-page keywords (Defect 1.14)**: Add `keywords` prop with default fallback. Render keywords meta tag when keywords array is non-empty.
4. **Remove defaultProps and PropTypes blocks**: Clean up the deprecated patterns.

---

**File**: `src/components/header.js`

**Changes**:
1. **Replace defaultProps with default parameters (Defect 1.5)**: Change to `const Header = ({ siteTitle = '' }) => (`.
2. **Add aria-labels to navigation links (Defect 1.11)**: Add `aria-label` attributes to the about, gallery, and street photography links.
3. **Remove defaultProps and PropTypes blocks**: Clean up deprecated patterns.

---

**File**: `gatsby-node.js`

**Changes**:
1. **Update GraphQL sort syntax (Defect 1.7)**: Change `sort: { fields: [frontmatter___date], order: DESC }` to `sort: { frontmatter___date: DESC }`.

---

**File**: `src/templates/blog-list.js`

**Changes**:
1. **Update GraphQL sort syntax (Defect 1.8)**: Same sort syntax update as gatsby-node.js.
2. **Remove duplicate key prop (Defect 1.9)**: Remove `key={node.fields.slug}` from the inner `<div>`, keeping it only on the outer `<Link>`.
3. **Wrap pagination in nav element (Defect 1.12)**: Wrap the pagination `<ul>` and prev/next links in `<nav aria-label="pagination">`.
4. **Migrate to Head API (Defect 1.6)**: Export a `Head` function that renders SEO meta tags instead of using the `<SEO>` component inline.

---

**File**: `src/templates/blog-post.js`

**Changes**:
1. **Sanitize HTML output (Defect 1.10)**: Import DOMPurify and sanitize `post.html` before passing to `dangerouslySetInnerHTML`: `dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.html) }}`.
2. **Migrate to Head API (Defect 1.6)**: Export a `Head` function for SEO meta tags.
3. **Support frontmatter keywords (Defect 1.14)**: Pass keywords from frontmatter to the SEO Head component. Update the GraphQL query to include a `keywords` field from frontmatter.

---

**File**: `src/archive/` (Defect 1.16)

**Changes**:
1. **Remove entire directory**: Delete `src/archive/` and all its contents (old backups, `.txt` renamed files, draft folder).

---

**Files**: `src/pages/streetphotography.js`, `src/pages/streetphotography2.js` (Defect 1.17)

**Changes**:
1. **Extract shared AlbumGrid component**: Create `src/components/album-grid.js` that accepts an array of album data (title, link, image src, alt text) and renders the 3-column grid layout.
2. **Refactor both pages**: Both pages import `AlbumGrid` and pass their respective album data arrays, eliminating duplicated layout/SEO/navigation boilerplate. Keep the album navigation links (Album 1 / Album 2) and page-specific album data.

## Testing Strategy

### Validation Approach

The testing strategy follows a two-phase approach: first, surface counterexamples that demonstrate the bugs on unfixed code, then verify the fixes work correctly and preserve existing behavior. Given this is a Gatsby project deployed via AWS Amplify, the primary validation is `gatsby build` succeeding locally before any git push.

### Exploratory Bug Condition Checking

**Goal**: Surface counterexamples that demonstrate the bugs BEFORE implementing fixes. Confirm or refute the root cause analysis.

**Test Plan**: Write structural tests that parse configuration files and render components to verify the defects exist. Run on UNFIXED code to observe failures.

**Test Cases**:
1. **Config Duplicate Key Test**: Parse `gatsby-config.js` and verify that the `gatsby-transformer-remark` plugins array has only one effective remark sub-plugin (will confirm the overwrite on unfixed code)
2. **Deprecated Dependency Test**: Check `package.json` for `gatsby-image` and `nvm` (will find them on unfixed code)
3. **defaultProps Usage Test**: Check that `SEO.defaultProps` and `Header.defaultProps` exist (will find them on unfixed code)
4. **react-helmet Import Test**: Check that `seo.js` imports from `react-helmet` (will find it on unfixed code)
5. **Deprecated Sort Syntax Test**: Grep `gatsby-node.js` and `blog-list.js` for `fields:` in sort (will find deprecated syntax on unfixed code)
6. **Unsanitized HTML Test**: Render `blog-post.js` with a script-tag payload and verify it passes through unsanitized (will pass through on unfixed code)
7. **Missing Accessibility Test**: Render `header.js` and verify nav links lack `aria-label` (will confirm on unfixed code)

**Expected Counterexamples**:
- `gatsby-remark-images` config is completely absent from the effective plugin list
- `gatsby-image` and `nvm` present in dependencies
- `defaultProps` pattern found in SEO and Header components
- `react-helmet` imported in seo.js
- Old sort syntax found in GraphQL queries

### Fix Checking

**Goal**: Verify that for all inputs where the bug condition holds, the fixed code produces the expected behavior.

**Pseudocode:**
```
FOR ALL input WHERE isBugCondition(input) DO
  result := applyFix(input)
  ASSERT expectedBehavior(result)
END FOR
```

Specifically:
- Parse fixed `gatsby-config.js` → both remark plugins exist as separate array entries
- Parse fixed `package.json` → no `gatsby-image`, `nvm`, `react-helmet`, or `gatsby-plugin-react-helmet`
- Render fixed SEO with no props → defaults applied via default parameters
- Render fixed Header with no props → default empty string applied
- Check fixed `seo.js` → no `react-helmet` import, uses Head API pattern
- Check fixed GraphQL queries → use `sort: { frontmatter___date: DESC }`
- Render fixed `blog-list.js` → inner div has no `key` prop, pagination wrapped in `<nav aria-label="pagination">`
- Render fixed `blog-post.js` with XSS payload → script tags stripped by DOMPurify
- Render fixed `header.js` → all nav links have `aria-label`
- Check fixed `gatsby-config.js` → includes `gatsby-plugin-sitemap`
- Verify `src/archive/` does not exist
- Verify `AlbumGrid` component exists and is used by both street photography pages

### Preservation Checking

**Goal**: Verify that for all inputs where the bug condition does NOT hold, the fixed code produces the same result as the original code.

**Pseudocode:**
```
FOR ALL input WHERE NOT isBugCondition(input) DO
  ASSERT originalBehavior(input) == fixedBehavior(input)
END FOR
```

**Testing Approach**: Property-based testing is recommended for preservation checking because:
- It generates many test cases automatically across the input domain
- It catches edge cases that manual unit tests might miss
- It provides strong guarantees that behavior is unchanged for all non-buggy inputs

**Test Plan**: Observe behavior on UNFIXED code first for non-bug inputs, then write property-based tests capturing that behavior.

**Test Cases**:
1. **Markdown Text Rendering Preservation**: Verify text-only markdown posts render identically before and after fixes
2. **Post Navigation Preservation**: Verify previous/next links continue to point to correct posts with correct ordering
3. **Pagination Preservation**: Verify correct number of posts per page and correct page navigation
4. **Site Metadata Preservation**: Verify `useStaticQuery` returns identical metadata (title, author, description, social links)
5. **Build Success Preservation**: Run `gatsby build` locally and verify it completes without errors
6. **Static Page Preservation**: Verify gallery, about, disclaimer, and street photography pages render correctly
7. **PWA Manifest Preservation**: Verify manifest.json output is unchanged
8. **External Link Preservation**: Verify footer links still have `target="_blank"` and `rel="noopener noreferrer"`

### Unit Tests

- Test `gatsby-config.js` plugin array structure (both remark plugins present as separate entries)
- Test SEO component renders correct meta tags with default and custom props
- Test SEO component renders keywords meta tag when keywords provided
- Test Header component renders with default and custom siteTitle
- Test Header navigation links have correct `aria-label` attributes
- Test `blog-list.js` pagination is wrapped in `<nav aria-label="pagination">`
- Test `blog-list.js` post list items have unique keys (no duplicate key on inner div)
- Test `blog-post.js` sanitizes HTML (script tags, event handlers stripped)
- Test `AlbumGrid` component renders correct number of album cards

### Property-Based Tests

- Generate random HTML strings (including XSS payloads) and verify DOMPurify sanitization removes all script/event-handler content while preserving safe HTML
- Generate random keyword arrays and verify SEO component renders them correctly, falling back to defaults when empty
- Generate random sets of blog post data and verify pagination math (posts per page, number of pages, correct slicing)
- Generate random post orderings and verify sort produces descending date order

### Integration Tests

- Full `gatsby build` succeeds locally with all fixes applied
- Markdown posts with images render correctly (gatsby-remark-images processes them)
- Blog list pages display correct posts with working pagination
- Blog post pages display sanitized content with working prev/next navigation
- Street photography pages render album grids correctly from shared component
- SEO Head tags appear correctly in built HTML output
- Sitemap is generated at `/sitemap-index.xml`
