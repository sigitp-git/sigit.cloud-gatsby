/**
 * Preservation Property Tests
 *
 * These tests verify existing site behavior that MUST be preserved
 * through all bugfix changes. They should PASS on both unfixed and
 * fixed code — any failure indicates a regression.
 *
 * Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8
 */

const fs = require('fs')
const path = require('path')

// Helper: read file as string
const readFile = (relPath) =>
  fs.readFileSync(path.resolve(__dirname, '..', relPath), 'utf-8')

// Helper: parse gatsby-config.js
const loadGatsbyConfig = () => {
  const configPath = path.resolve(__dirname, '..', 'gatsby-config.js')
  delete require.cache[configPath]
  return require(configPath)
}

// ============================================================
// 1. Site Metadata Preservation (3.4)
// ============================================================
describe('Preservation — Site Metadata (3.4)', () => {
  let config

  beforeAll(() => {
    config = loadGatsbyConfig()
  })

  test('siteMetadata.title is "sigit.cloud"', () => {
    expect(config.siteMetadata.title).toBe('sigit.cloud')
  })

  test('siteMetadata.author is "Sigit Priyanggoro"', () => {
    expect(config.siteMetadata.author).toBe('Sigit Priyanggoro')
  })

  test('siteMetadata.description contains expected value', () => {
    expect(config.siteMetadata.description).toBe(
      'sigit.cloud, a serverless blog, built with GatsbyJS, AWS Amplify, AWS AppSync, and Amazon DynamoDB'
    )
  })

  test('siteMetadata.siteUrl is "https://sigit.cloud"', () => {
    expect(config.siteMetadata.siteUrl).toBe('https://sigit.cloud')
  })

  test('siteMetadata.social has linkedin and github', () => {
    expect(config.siteMetadata.social).toBeDefined()
    expect(config.siteMetadata.social.linkedin).toBe('sigitpriyanggoro')
    expect(config.siteMetadata.social.github).toBe('sigitp-git')
  })
})


// ============================================================
// 2. Plugin Pipeline Preservation (3.5, 3.7)
// ============================================================
describe('Preservation — Plugin Pipeline (3.5, 3.7)', () => {
  let config

  beforeAll(() => {
    config = loadGatsbyConfig()
  })

  // Helper to check if a plugin exists (string or object with resolve)
  const hasPlugin = (name) =>
    config.plugins.some(
      (p) => p === name || (typeof p === 'object' && p.resolve === name)
    )

  test('plugins include gatsby-source-filesystem for images', () => {
    const fsPlugins = config.plugins.filter(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-source-filesystem'
    )
    const imagesPlugin = fsPlugins.find(
      (p) => p.options && p.options.name === 'images'
    )
    expect(imagesPlugin).toBeDefined()
  })

  test('plugins include gatsby-source-filesystem for mdblogs', () => {
    const fsPlugins = config.plugins.filter(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-source-filesystem'
    )
    const mdblogsPlugin = fsPlugins.find(
      (p) => p.options && p.options.name === 'mdblogs'
    )
    expect(mdblogsPlugin).toBeDefined()
  })

  test('plugins include gatsby-transformer-remark', () => {
    expect(hasPlugin('gatsby-transformer-remark')).toBe(true)
  })

  test('plugins include gatsby-transformer-sharp', () => {
    expect(hasPlugin('gatsby-transformer-sharp')).toBe(true)
  })

  test('plugins include gatsby-plugin-sharp', () => {
    expect(hasPlugin('gatsby-plugin-sharp')).toBe(true)
  })

  test('plugins include gatsby-plugin-image', () => {
    expect(hasPlugin('gatsby-plugin-image')).toBe(true)
  })

  test('plugins include gatsby-plugin-manifest', () => {
    expect(hasPlugin('gatsby-plugin-manifest')).toBe(true)
  })
})

// ============================================================
// 3. Manifest Preservation (3.7)
// ============================================================
describe('Preservation — Manifest Options (3.7)', () => {
  let manifestPlugin

  beforeAll(() => {
    const config = loadGatsbyConfig()
    manifestPlugin = config.plugins.find(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-plugin-manifest'
    )
  })

  test('manifest name is "gatsby-starter-default"', () => {
    expect(manifestPlugin.options.name).toBe('gatsby-starter-default')
  })

  test('manifest theme_color is "#663399"', () => {
    expect(manifestPlugin.options.theme_color).toBe('#663399')
  })

  test('manifest icon is "src/images/gatsby-icon.png"', () => {
    expect(manifestPlugin.options.icon).toBe('src/images/gatsby-icon.png')
  })
})


// ============================================================
// 4. Page Creation Preservation (3.2, 3.3, 3.6)
// ============================================================
describe('Preservation — Page Creation Logic (3.2, 3.3, 3.6)', () => {
  let source

  beforeAll(() => {
    source = readFile('gatsby-node.js')
  })

  test('postsPerPage is 6', () => {
    expect(source).toMatch(/postsPerPage\s*=\s*6/)
  })

  test('first page path is "/"', () => {
    // i === 0 ? `/` : ...
    expect(source).toMatch(/i\s*===\s*0\s*\?\s*[`'"]\/[`'"]\s*:/)
  })

  test('subsequent page paths use index + 1 (e.g., "2", "3")', () => {
    // The pattern: `${i + 1}` for non-first pages
    expect(source).toMatch(/`\$\{i\s*\+\s*1\}`/)
  })

  test('previous context is passed to blog post pages', () => {
    expect(source).toMatch(/previous/)
    // Verify previous is computed and passed in context
    expect(source).toMatch(/context:\s*\{[^}]*previous/)
  })

  test('next context is passed to blog post pages', () => {
    expect(source).toMatch(/next/)
    expect(source).toMatch(/context:\s*\{[^}]*next/)
  })

  test('numPages is calculated from posts.length / postsPerPage', () => {
    expect(source).toMatch(/Math\.ceil\(posts\.length\s*\/\s*postsPerPage\)/)
  })
})

// ============================================================
// 5. Slug Creation Preservation (3.1)
// ============================================================
describe('Preservation — Slug Creation (3.1)', () => {
  let source

  beforeAll(() => {
    source = readFile('gatsby-node.js')
  })

  test('onCreateNode is exported', () => {
    expect(source).toMatch(/exports\.onCreateNode/)
  })

  test('checks for MarkdownRemark node type', () => {
    expect(source).toMatch(/node\.internal\.type\s*===\s*[`'"]MarkdownRemark[`'"]/)
  })

  test('uses createFilePath to generate slugs', () => {
    expect(source).toMatch(/createFilePath/)
  })

  test('creates slug field using createNodeField', () => {
    expect(source).toMatch(/createNodeField/)
    expect(source).toMatch(/name:\s*[`'"]slug[`'"]/)
  })
})


// ============================================================
// 6. Layout Structure Preservation (3.6, 3.8)
// ============================================================
describe('Preservation — Layout Structure (3.6, 3.8)', () => {
  let source

  beforeAll(() => {
    source = readFile('src/components/layout.js')
  })

  test('layout renders a header component', () => {
    expect(source).toMatch(/<Header\s/)
  })

  test('layout renders a <main> element', () => {
    expect(source).toMatch(/<main>/)
  })

  test('layout renders a <footer> element', () => {
    expect(source).toMatch(/<footer>/)
  })

  test('external links have target="_blank"', () => {
    // All <a href="https://..."> links should have target="_blank"
    const externalLinks = source.match(/<a\s[^>]*href=["']https?:\/\/[^"']+["'][^>]*>/g)
    expect(externalLinks).not.toBeNull()
    expect(externalLinks.length).toBeGreaterThan(0)
    externalLinks.forEach((link) => {
      expect(link).toMatch(/target=["']_blank["']/)
    })
  })

  test('external links have rel="noopener noreferrer"', () => {
    const externalLinks = source.match(/<a\s[^>]*href=["']https?:\/\/[^"']+["'][^>]*>/g)
    expect(externalLinks).not.toBeNull()
    externalLinks.forEach((link) => {
      expect(link).toMatch(/rel=["']noopener noreferrer["']/)
    })
  })
})

// ============================================================
// 7. Blog Post Template Preservation (3.1, 3.2)
// ============================================================
describe('Preservation — Blog Post Template (3.1, 3.2)', () => {
  let source

  beforeAll(() => {
    source = readFile('src/templates/blog-post.js')
  })

  test('renders post title from frontmatter', () => {
    expect(source).toMatch(/post\.frontmatter\.title/)
  })

  test('renders post date from frontmatter', () => {
    expect(source).toMatch(/post\.frontmatter\.date/)
  })

  test('renders HTML content via dangerouslySetInnerHTML', () => {
    expect(source).toMatch(/dangerouslySetInnerHTML/)
  })

  test('renders previous navigation link', () => {
    expect(source).toMatch(/previous/)
    expect(source).toMatch(/previous\.fields\.slug/)
    expect(source).toMatch(/rel=["']prev["']/)
  })

  test('renders next navigation link', () => {
    expect(source).toMatch(/next/)
    expect(source).toMatch(/next\.fields\.slug/)
    expect(source).toMatch(/rel=["']next["']/)
  })
})

// ============================================================
// 8. Blog List Template Preservation (3.3)
// ============================================================
describe('Preservation — Blog List Template (3.3)', () => {
  let source

  beforeAll(() => {
    source = readFile('src/templates/blog-list.js')
  })

  test('renders post titles linked to slugs', () => {
    expect(source).toMatch(/node\.frontmatter\.title/)
    expect(source).toMatch(/node\.fields\.slug/)
  })

  test('renders post dates', () => {
    expect(source).toMatch(/node\.frontmatter\.date/)
  })

  test('renders post excerpts', () => {
    expect(source).toMatch(/node\.excerpt/)
  })

  test('has pagination with prev/next controls', () => {
    expect(source).toMatch(/Prev/)
    expect(source).toMatch(/Next/)
  })

  test('has page number links', () => {
    // Array.from({ length: numPages }, ...) generates page number links
    expect(source).toMatch(/Array\.from\(\{\s*length:\s*numPages\s*\}/)
  })
})


// ============================================================
// 9. Street Photography Pages Preservation (3.6)
// ============================================================
describe('Preservation — Street Photography Pages (3.6)', () => {
  let sp1Source, sp2Source

  beforeAll(() => {
    sp1Source = readFile('src/pages/streetphotography.js')
    sp2Source = readFile('src/pages/streetphotography2.js')
  })

  // Album 1 links
  const album1Links = [
    'london2023fujixt5',
    'london2023ctm10r',
    'seattle2023m10r',
    'nyhavn2023m10r',
    'stroget2023fuji',
    'tokyo2023fuji',
    'kyoto2023fuji',
    'tsukiji2023rch',
  ]

  test.each(album1Links)(
    'streetphotography.js contains album link "%s"',
    (link) => {
      expect(sp1Source).toMatch(new RegExp(link))
    }
  )

  // Album 2 links
  const album2Links = [
    'fushimi2023rch',
    'yosakoi2023fuji',
    'shibuya2023fuji',
    'seattle2023rch',
    'seattle2021lq',
    'newyork2021lq',
  ]

  test.each(album2Links)(
    'streetphotography2.js contains album link "%s"',
    (link) => {
      expect(sp2Source).toMatch(new RegExp(link))
    }
  )

  test('streetphotography.js has navigation to Album 2', () => {
    expect(sp1Source).toMatch(/Album 2/)
    expect(sp1Source).toMatch(/streetphotography2/)
  })

  test('streetphotography2.js has navigation to Album 1', () => {
    expect(sp2Source).toMatch(/Album 1/)
    expect(sp2Source).toMatch(/streetphotography\//)
  })

  test('streetphotography.js has Album 1 label', () => {
    expect(sp1Source).toMatch(/Album 1/)
  })

  test('streetphotography2.js has Album 2 label', () => {
    expect(sp2Source).toMatch(/Album 2/)
  })
})
