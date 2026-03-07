/**
 * Bug Condition Exploration Tests
 *
 * These tests encode the EXPECTED (correct) behavior for all 17 defects.
 * They should FAIL on unfixed code — failure confirms the bugs exist.
 * After fixes are applied, these same tests should PASS.
 *
 * Validates: Requirements 1.1–1.17
 */

const fs = require('fs')
const path = require('path')

// Helper: read file as string
const readFile = (relPath) =>
  fs.readFileSync(path.resolve(__dirname, '..', relPath), 'utf-8')

// Helper: parse gatsby-config.js by evaluating it
const loadGatsbyConfig = () => {
  // Clear require cache so we always get fresh config
  const configPath = path.resolve(__dirname, '..', 'gatsby-config.js')
  delete require.cache[configPath]
  return require(configPath)
}

// Helper: load package.json
const loadPackageJson = () => {
  const pkgPath = path.resolve(__dirname, '..', 'package.json')
  delete require.cache[pkgPath]
  return require(pkgPath)
}

describe('Bug Condition Exploration — Config Duplicate Key (Defect 1.1)', () => {
  test('gatsby-transformer-remark plugins array has separate objects for gatsby-remark-images and gatsby-remark-copy-linked-files', () => {
    const config = loadGatsbyConfig()
    const remarkPlugin = config.plugins.find(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-transformer-remark'
    )
    expect(remarkPlugin).toBeDefined()

    const subPlugins = remarkPlugin.options.plugins
    expect(Array.isArray(subPlugins)).toBe(true)

    const imagePlugin = subPlugins.find(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-remark-images'
    )
    const copyPlugin = subPlugins.find(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-remark-copy-linked-files'
    )

    // Both must exist as separate objects
    expect(imagePlugin).toBeDefined()
    expect(copyPlugin).toBeDefined()
    // They must be different objects (not the same one with overwritten keys)
    expect(imagePlugin).not.toBe(copyPlugin)
  })
})


describe('Bug Condition Exploration — Image Performance (Defect 1.13)', () => {
  test('gatsby-remark-images has loading: lazy and quality: 80', () => {
    const config = loadGatsbyConfig()
    const remarkPlugin = config.plugins.find(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-transformer-remark'
    )
    const subPlugins = remarkPlugin.options.plugins

    const imagePlugin = subPlugins.find(
      (p) => typeof p === 'object' && p.resolve === 'gatsby-remark-images'
    )

    // On unfixed code, gatsby-remark-images is overwritten so imagePlugin may not exist,
    // or if it does, it has loading: 'eager' and quality: 100
    expect(imagePlugin).toBeDefined()
    expect(imagePlugin.options.loading).toBe('lazy')
    expect(imagePlugin.options.quality).toBe(80)
  })
})

describe('Bug Condition Exploration — Deprecated Dependencies (Defects 1.2, 1.3)', () => {
  test('gatsby-image is NOT in package.json dependencies', () => {
    const pkg = loadPackageJson()
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    }
    expect(allDeps).not.toHaveProperty('gatsby-image')
  })

  test('no source files import from gatsby-image', () => {
    const aboutSource = readFile('src/pages/about.js')
    expect(aboutSource).not.toMatch(/from\s+["']gatsby-image["']/)
  })

  test('nvm is NOT in package.json dependencies', () => {
    const pkg = loadPackageJson()
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    }
    expect(allDeps).not.toHaveProperty('nvm')
  })
})

describe('Bug Condition Exploration — Deprecated react-helmet (Defect 1.6)', () => {
  test('react-helmet is NOT in package.json dependencies', () => {
    const pkg = loadPackageJson()
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    }
    expect(allDeps).not.toHaveProperty('react-helmet')
  })

  test('gatsby-plugin-react-helmet is NOT in package.json dependencies', () => {
    const pkg = loadPackageJson()
    const allDeps = {
      ...pkg.dependencies,
      ...pkg.devDependencies,
    }
    expect(allDeps).not.toHaveProperty('gatsby-plugin-react-helmet')
  })

  test('gatsby-config.js plugins do not contain gatsby-plugin-react-helmet', () => {
    const config = loadGatsbyConfig()
    const hasHelmetPlugin = config.plugins.some(
      (p) =>
        p === 'gatsby-plugin-react-helmet' ||
        (typeof p === 'object' && p.resolve === 'gatsby-plugin-react-helmet')
    )
    expect(hasHelmetPlugin).toBe(false)
  })
})


describe('Bug Condition Exploration — defaultProps Usage (Defects 1.4, 1.5)', () => {
  test('seo.js does not contain .defaultProps', () => {
    const seoSource = readFile('src/components/seo.js')
    expect(seoSource).not.toMatch(/\.defaultProps/)
  })

  test('header.js does not contain .defaultProps', () => {
    const headerSource = readFile('src/components/header.js')
    expect(headerSource).not.toMatch(/\.defaultProps/)
  })
})

describe('Bug Condition Exploration — Sort Syntax (Defects 1.7, 1.8)', () => {
  test('gatsby-node.js uses sort syntax with frontmatter___date', () => {
    const source = readFile('gatsby-node.js')
    // Should contain sort with frontmatter___date ordering
    expect(source).toMatch(/frontmatter___date/)
    expect(source).toMatch(/DESC/)
  })

  test('blog-list.js uses sort syntax with frontmatter___date', () => {
    const source = readFile('src/templates/blog-list.js')
    // Should contain sort with frontmatter___date ordering
    expect(source).toMatch(/frontmatter___date/)
    expect(source).toMatch(/DESC/)
  })
})

describe('Bug Condition Exploration — Duplicate Key Props (Defect 1.9)', () => {
  test('key={node.fields.slug} appears exactly once in blog-list.js', () => {
    const source = readFile('src/templates/blog-list.js')
    const matches = source.match(/key=\{node\.fields\.slug\}/g)
    expect(matches).not.toBeNull()
    expect(matches.length).toBe(1)
  })
})

describe('Bug Condition Exploration — Unsanitized HTML (Defect 1.10)', () => {
  test('blog-post.js imports dompurify and uses DOMPurify.sanitize', () => {
    const source = readFile('src/templates/blog-post.js')
    // Should import dompurify (or isomorphic-dompurify)
    expect(source).toMatch(/import.*(?:dompurify|isomorphic-dompurify)/i)
    // Should use DOMPurify.sanitize
    expect(source).toMatch(/DOMPurify\.sanitize/)
  })
})


describe('Bug Condition Exploration — Missing Accessibility (Defects 1.11, 1.12)', () => {
  test('header.js navigation links include aria-label', () => {
    const source = readFile('src/components/header.js')
    // Find Link elements to /about/, /gallery/, /streetphotography/
    // Each should have an aria-label attribute
    expect(source).toMatch(/Link[^>]*to=["']\/about\/["'][^>]*aria-label/)
    expect(source).toMatch(/Link[^>]*to=["']\/gallery\/["'][^>]*aria-label/)
    expect(source).toMatch(/Link[^>]*to=["']\/streetphotography\/["'][^>]*aria-label/)
  })

  test('blog-list.js pagination is wrapped in <nav aria-label="pagination">', () => {
    const source = readFile('src/templates/blog-list.js')
    expect(source).toMatch(/<nav[^>]*aria-label=["']pagination["']/)
  })
})

describe('Bug Condition Exploration — Hardcoded Keywords (Defect 1.14)', () => {
  test('seo.js function signature includes keywords parameter', () => {
    const source = readFile('src/components/seo.js')
    // The function signature should destructure a keywords parameter
    expect(source).toMatch(/function\s+SEO\s*\(\s*\{[^}]*keywords/)
  })
})

describe('Bug Condition Exploration — Missing Sitemap (Defect 1.15)', () => {
  test('gatsby-config.js plugins include gatsby-plugin-sitemap', () => {
    const config = loadGatsbyConfig()
    const hasSitemap = config.plugins.some(
      (p) =>
        p === 'gatsby-plugin-sitemap' ||
        (typeof p === 'object' && p.resolve === 'gatsby-plugin-sitemap')
    )
    expect(hasSitemap).toBe(true)
  })
})

describe('Bug Condition Exploration — Dead Code (Defect 1.16)', () => {
  test('src/archive/ directory does not exist', () => {
    const archivePath = path.resolve(__dirname, '..', 'src', 'archive')
    expect(fs.existsSync(archivePath)).toBe(false)
  })
})

describe('Bug Condition Exploration — Duplicated Street Photography (Defect 1.17)', () => {
  test('src/components/album-grid.js exists (shared component)', () => {
    const albumGridPath = path.resolve(
      __dirname,
      '..',
      'src',
      'components',
      'album-grid.js'
    )
    expect(fs.existsSync(albumGridPath)).toBe(true)
  })
})
