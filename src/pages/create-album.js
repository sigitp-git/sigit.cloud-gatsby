import React, { useState, useRef, useCallback } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/layout.css"

const REPO_OWNER = "sigitp-git"
const REPO_NAME = "sigit.cloud-gatsby"
const BRANCH = "master"
const ALLOWED_USER = "sigitp-git"

// GitHub API helpers
const ghApi = (path, token, opts = {}) =>
  fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}${path}`, {
    ...opts,
    headers: {
      Authorization: `token ${token}`,
      Accept: "application/vnd.github.v3+json",
      ...(opts.headers || {}),
    },
  }).then(async r => {
    const data = await r.json()
    if (!r.ok) throw new Error(data.message || `GitHub API ${r.status}`)
    return data
  })

const fileToBase64 = file =>
  new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result.split(",")[1])
    reader.onerror = reject
    reader.readAsDataURL(file)
  })

const slugify = str =>
  str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").substring(0, 40)

const textToBase64 = str => {
  const bytes = new TextEncoder().encode(str)
  let binary = ""
  for (const b of bytes) binary += String.fromCharCode(b)
  return btoa(binary)
}

// Known album collections in order. "streetphotography" is Album 1, suffix number = album number.
const COLLECTION_LABEL = col => {
  if (col === "streetphotography") return "Album 1"
  const num = col.replace("streetphotography", "")
  return `Album ${num}`
}

// Fetch a file from the repo (returns content string or null if not found)
const ghGetFile = async (filePath, token) => {
  try {
    const data = await ghApi(`/contents/${filePath}?ref=${BRANCH}`, token)
    return atob(data.content.replace(/\n/g, ""))
  } catch {
    return null
  }
}

// List all streetphotography* collection directories in src/pages/ via GitHub API
const ghListCollections = async token => {
  try {
    const items = await ghApi(`/contents/src/pages?ref=${BRANCH}`, token)
    const collections = items
      .filter(
        i =>
          i.type === "dir" &&
          i.name.startsWith("streetphotography")
      )
      .map(i => i.name)
      .sort((a, b) => {
        const numA = parseInt(a.replace("streetphotography", "") || "1")
        const numB = parseInt(b.replace("streetphotography", "") || "1")
        return numA - numB
      })
    return collections
  } catch {
    return ["streetphotography", "streetphotography2", "streetphotography3"]
  }
}

// Generate nav links JSX for index pages (../ prefix)
function navLinksIndex(collections) {
  const lines = []
  for (const col of collections) {
    const label = COLLECTION_LABEL(col)
    if (col === collections[0]) {
      lines.push(
        `        <Link to="../${col}/" style={{ fontSize: \`1rem\` }}>📸 | ${label}</Link>`
      )
    } else {
      lines.push(
        `        <Link to="../${col}/" style={{ fontSize: \`1rem\` }}> | ${label}</Link>`
      )
    }
  }
  return lines.join("\n")
}

// Generate nav links JSX for sub-album pages (../../ prefix)
function navLinksSubpage(collections) {
  const lines = []
  for (const col of collections) {
    const label = COLLECTION_LABEL(col)
    if (col === collections[0]) {
      lines.push(
        `        <Link to="../../${col}/" style={{ fontSize: \`1rem\` }}>📸 | ${label}</Link>`
      )
    } else {
      lines.push(
        `        <Link to="../../${col}/" style={{ fontSize: \`1rem\` }}> | ${label}</Link>`
      )
    }
  }
  return lines.join("\n")
}

// Parse existing album entries from an index page
function parseExistingAlbums(indexContent) {
  const albums = []
  const re = /<Link to="([^"]+)\/" [^>]*>\s*<span[^>]*><h4>([^<]+)<\/h4><\/span>/g
  let m
  while ((m = re.exec(indexContent)) !== null) {
    albums.push({ slug: m[1], title: m[2] })
  }
  return albums
}

// Generate a collection index page (e.g. streetphotography3.js)
function generateIndexPage(collectionName, albums, allCollections) {
  const funcName = collectionName.replace(/-/g, "_")
  const albumGrids = []
  for (let i = 0; i < albums.length; i += 3) {
    const chunk = albums.slice(i, i + 3)
    const items = chunk.map(album =>
      `        <div className="blog-list">
          <Link to="${album.slug}/" style={{ fontSize: \`1rem\` }}>
            <span className="footer-links"><h4>${album.title}</h4></span>
            <img src="../../${collectionName}/${album.slug}/1.jpg" alt="${album.title}"
              style={{ width: 300, height: 300, objectFit: "cover", borderRadius: "4px" }} />
          </Link>
        </div>`
    ).join("\n")
    albumGrids.push(`      <AlbumGrid>\n${items}\n      </AlbumGrid>`)
  }

  // Bottom nav: link back to all other collections
  const backLinks = allCollections
    .filter(c => c !== collectionName)
    .map(c => {
      const label = COLLECTION_LABEL(c)
      const idx = allCollections.indexOf(c)
      const arrow = idx < allCollections.indexOf(collectionName) ? '{"<< "}back to' : '{">> "}go to'
      return `      <Link to="../${c}/" style={{ fontSize: \`1rem\` }}>${arrow} 📸 ${label}</Link>\n      <br />`
    })
    .join("\n")

  return `import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Link } from "gatsby"
import AlbumGrid from "../components/album-grid"
import "../components/layout.css"

const ${funcName} = () => {
  return (
    <Layout>
      <div
        style={{
          background: \`white\`,
          marginBottom: \`0rem\`,
          border: \`1px hidden var(--headerSubLinkBG)\`,
        }}
      >
${navLinksIndex(allCollections)}
      </div>
${albumGrids.join("\n      {/*===========3SET=========*/}\n")}
${backLinks}
      <br />
    </Layout>
  )
}
export default ${funcName}

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[\`sigit\`, \`priyanggoro\`, \`street photography\`, \`leica\`, \`fujifilm\`]}
    />
  )
}
`
}

// Update nav links in any page content. Replaces the nav <div> block.
function updateNavInContent(content, collections, prefix) {
  // Match the nav div containing Album links
  const navRegex = /(<div\s*\n?\s*style=\{?\{[^}]*\}\}?\s*>\s*\n)([\s\S]*?)(^\s*<\/div>)/m
  const match = content.match(navRegex)
  if (!match) return null // couldn't find nav block

  const navFn = prefix === "../" ? navLinksIndex : navLinksSubpage
  const newNav = navFn(collections) + "\n"
  const updated = content.replace(match[0], match[1] + newNav + match[3])

  return updated !== content ? updated : null
}

// Generate the album page source code (matches existing pattern)
function generateAlbumPageCode(slug, imageCount, title, camera, albumCollection, allCollections) {
  const funcName = slug.replace(/-/g, "_")
  const imgFolder = slug
  const lines = []
  for (let i = 1; i <= imageCount; i++) {
    lines.push(`    "../${imgFolder}/${i}.jpg",`)
  }

  const h4Text = camera ? `${title} | ${camera}` : title

  return `import React from "react"
import "react-image-gallery/styles/css/image-gallery.css"
import ImageGallery from "react-image-gallery"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { Link } from "gatsby"

const ${funcName} = () => {
  const response = [
${lines.join("\n")}
  ]

  const images = response.map(url => ({
    original: \`\${url}\`,
    thumbnail: \`\${url}\`,
  }))

  return (
    <Layout>
      <div
        style={{
          background: \`white\`,
          marginBottom: \`1rem\`,
          border: \`1px hidden var(--headerSubLinkBG)\`,
        }}
      >
${navLinksSubpage(allCollections)}
      </div>
      <h4>${h4Text}</h4>
      <ImageGallery items={images} slideOnThumbnailOver={true} />
    </Layout>
  )
}
export default ${funcName}

export function Head() {
  return (
    <SEO
      title="Street Photography"
      keywords={[\`sigit\`, \`priyanggoro\`, \`street photography\`, \`leica\`, \`fujifilm\`]}
    />
  )
}
`
}

// Styles
const styles = {
  container: { maxWidth: 600, margin: "0 auto" },
  field: { marginBottom: "1rem" },
  label: { display: "block", marginBottom: "0.3rem", fontWeight: "bold", fontSize: "0.9rem" },
  input: {
    width: "100%", padding: "0.5rem", fontSize: "1rem",
    border: "1px solid var(--blogListBrdr)", borderRadius: 4,
    fontFamily: "inherit",
  },
  select: {
    width: "100%", padding: "0.5rem", fontSize: "1rem",
    border: "1px solid var(--blogListBrdr)", borderRadius: 4,
    background: "white", fontFamily: "inherit",
  },
  btn: {
    padding: "0.7rem 1.5rem", fontSize: "1rem", cursor: "pointer",
    background: "var(--headerColor)", color: "white", border: "none",
    borderRadius: 4, fontFamily: "inherit",
  },
  btnDisabled: { opacity: 0.5, cursor: "not-allowed" },
  preview: {
    display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))",
    gap: "0.5rem", marginTop: "0.5rem",
  },
  previewImg: { width: "100%", height: 120, objectFit: "cover", borderRadius: 4 },
  log: {
    background: "var(--blogListBG)", padding: "1rem", borderRadius: 4,
    fontSize: "0.85rem", maxHeight: 300, overflowY: "auto",
    fontFamily: "monospace", whiteSpace: "pre-wrap", marginTop: "1rem",
  },
  tokenRow: { display: "flex", gap: "0.5rem", alignItems: "center" },
  success: {
    background: "#e8f5e9", padding: "1rem", borderRadius: 4,
    marginTop: "1rem", color: "#2e7d32",
  },
  error: {
    background: "#ffebee", padding: "1rem", borderRadius: 4,
    marginTop: "1rem", color: "#c62828",
  },
}

const CreateAlbum = () => {
  const [token, setToken] = useState(() =>
    typeof window !== "undefined" ? localStorage.getItem("gh_pat") || "" : ""
  )
  const [authenticated, setAuthenticated] = useState(false)
  const [ghUser, setGhUser] = useState("")
  const [title, setTitle] = useState("")
  const [camera, setCamera] = useState("")
  const [collection, setCollection] = useState("streetphotography3")
  const [customCollection, setCustomCollection] = useState("")
  const [collections, setCollections] = useState([
    "streetphotography", "streetphotography2", "streetphotography3",
  ])
  const [files, setFiles] = useState([])
  const [previews, setPreviews] = useState([])
  const [log, setLog] = useState([])
  const [publishing, setPublishing] = useState(false)
  const [result, setResult] = useState(null)
  const fileInputRef = useRef(null)

  const addLog = useCallback(msg => {
    setLog(prev => [...prev, `${new Date().toLocaleTimeString()} ${msg}`])
  }, [])

  const handleLogin = async () => {
    if (!token.trim()) return
    try {
      const res = await fetch("https://api.github.com/user", {
        headers: { Authorization: `token ${token}` },
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.message)
      if (data.login !== ALLOWED_USER) {
        addLog(`❌ Access denied. Only ${ALLOWED_USER} can use this page.`)
        return
      }
      localStorage.setItem("gh_pat", token)
      setGhUser(data.login)
      setAuthenticated(true)
      addLog(`✅ Authenticated as ${data.login}`)
      // Discover existing collections
      const cols = await ghListCollections(token)
      if (cols.length > 0) {
        setCollections(cols)
        setCollection(cols[cols.length - 1]) // default to latest
        addLog(`📂 Found collections: ${cols.map(COLLECTION_LABEL).join(", ")}`)
      }
    } catch (err) {
      addLog(`❌ Auth failed: ${err.message}`)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("gh_pat")
    setToken("")
    setAuthenticated(false)
    setGhUser("")
    setLog([])
  }

  const handleFiles = e => {
    const selected = Array.from(e.target.files)
      .filter(f => /\.(jpg|jpeg|png|webp)$/i.test(f.name))
      .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }))
    setFiles(selected)
    setPreviews(selected.map(f => URL.createObjectURL(f)))
  }

  const handlePublish = async () => {
    if (!title.trim() || files.length === 0) return
    setPublishing(true)
    setResult(null)

    const effectiveCollection = collection === "__new__" ? customCollection.trim() : collection
    if (!effectiveCollection || !effectiveCollection.startsWith("streetphotography")) {
      addLog("❌ Collection name must start with 'streetphotography'")
      setPublishing(false)
      return
    }

    const slug = slugify(title)
    const imgDir = `static/${effectiveCollection}/${slug}`
    const pagePath = `src/pages/${effectiveCollection}/${slug}.js`
    const indexPath = `src/pages/${effectiveCollection}.js`

    try {
      // Step 1: Get the current commit SHA and tree SHA
      addLog("📡 Getting latest commit...")
      const ref = await ghApi(`/git/refs/heads/${BRANCH}`, token)
      const commitSha = ref.object.sha
      const commit = await ghApi(`/git/commits/${commitSha}`, token)
      const baseTreeSha = commit.tree.sha

      // Step 2: Discover all collections and determine the full nav set
      addLog("� Discovering album collections...")
      const existingCollections = await ghListCollections(token)
      const allCollections = [...existingCollections]
      if (!allCollections.includes(effectiveCollection)) {
        allCollections.push(effectiveCollection)
        allCollections.sort((a, b) => {
          const numA = parseInt(a.replace("streetphotography", "") || "1")
          const numB = parseInt(b.replace("streetphotography", "") || "1")
          return numA - numB
        })
      }
      const isNewCollection = !existingCollections.includes(effectiveCollection)
      addLog(`  Collections: ${allCollections.map(COLLECTION_LABEL).join(", ")}${isNewCollection ? ` (${COLLECTION_LABEL(effectiveCollection)} is new)` : ""}`)

      // Step 3: Create blobs for each image
      addLog(`📤 Uploading ${files.length} images...`)
      const treeItems = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        addLog(`  Uploading ${i + 1}/${files.length}: ${file.name} (${(file.size / 1024).toFixed(0)} KB)`)
        const base64 = await fileToBase64(file)
        const blob = await ghApi("/git/blobs", token, {
          method: "POST",
          body: JSON.stringify({ content: base64, encoding: "base64" }),
        })
        treeItems.push({
          path: `${imgDir}/${i + 1}.jpg`,
          mode: "100644",
          type: "blob",
          sha: blob.sha,
        })
      }

      // Step 4: Create blob for the album page source
      addLog("📝 Generating album page...")
      const pageCode = generateAlbumPageCode(slug, files.length, title, camera, effectiveCollection, allCollections)
      const pageBlob = await ghApi("/git/blobs", token, {
        method: "POST",
        body: JSON.stringify({ content: textToBase64(pageCode), encoding: "base64" }),
      })
      treeItems.push({
        path: pagePath,
        mode: "100644",
        type: "blob",
        sha: pageBlob.sha,
      })

      // Step 5: Update the index page for this collection
      addLog("📝 Updating index page...")
      const existingIndex = await ghGetFile(indexPath, token)
      let albums = existingIndex ? parseExistingAlbums(existingIndex) : []
      if (!albums.find(a => a.slug === slug)) {
        albums.push({ slug, title })
      }
      const indexCode = generateIndexPage(effectiveCollection, albums, allCollections)
      const indexBlob = await ghApi("/git/blobs", token, {
        method: "POST",
        body: JSON.stringify({ content: textToBase64(indexCode), encoding: "base64" }),
      })
      treeItems.push({
        path: indexPath,
        mode: "100644",
        type: "blob",
        sha: indexBlob.sha,
      })

      // Step 6: If this is a new collection, update nav on ALL existing pages
      if (isNewCollection) {
        addLog("🔗 Updating navigation across all existing pages...")

        for (const col of existingCollections) {
          // Update the index page for this collection
          const colIndexPath = `src/pages/${col}.js`
          const colIndexContent = await ghGetFile(colIndexPath, token)
          if (colIndexContent) {
            const updated = updateNavInContent(colIndexContent, allCollections, "../")
            if (updated) {
              const blob = await ghApi("/git/blobs", token, {
                method: "POST",
                body: JSON.stringify({ content: textToBase64(updated), encoding: "base64" }),
              })
              treeItems.push({ path: colIndexPath, mode: "100644", type: "blob", sha: blob.sha })
              addLog(`  Updated nav: ${colIndexPath}`)
            }
          }

          // Update all sub-album pages in this collection
          try {
            const dirItems = await ghApi(`/contents/src/pages/${col}?ref=${BRANCH}`, token)
            const jsFiles = dirItems.filter(i => i.name.endsWith(".js"))
            for (const jsFile of jsFiles) {
              const filePath = `src/pages/${col}/${jsFile.name}`
              const content = await ghGetFile(filePath, token)
              if (content) {
                const updated = updateNavInContent(content, allCollections, "../../")
                if (updated) {
                  const blob = await ghApi("/git/blobs", token, {
                    method: "POST",
                    body: JSON.stringify({ content: textToBase64(updated), encoding: "base64" }),
                  })
                  treeItems.push({ path: filePath, mode: "100644", type: "blob", sha: blob.sha })
                  addLog(`  Updated nav: ${filePath}`)
                }
              }
            }
          } catch {
            addLog(`  ⚠️ Could not list pages in ${col}/`)
          }
        }
      }

      // Step 7: Create a new tree
      addLog("🌳 Creating commit tree...")
      const newTree = await ghApi("/git/trees", token, {
        method: "POST",
        body: JSON.stringify({ base_tree: baseTreeSha, tree: treeItems }),
      })

      // Step 8: Create the commit
      const commitMsg = `Add album: ${title}`
      addLog(`💾 Committing: "${commitMsg}"`)
      const newCommit = await ghApi("/git/commits", token, {
        method: "POST",
        body: JSON.stringify({
          message: commitMsg,
          tree: newTree.sha,
          parents: [commitSha],
        }),
      })

      // Step 9: Update the branch ref
      await ghApi(`/git/refs/heads/${BRANCH}`, token, {
        method: "PATCH",
        body: JSON.stringify({ sha: newCommit.sha }),
      })

      addLog(`✅ Pushed commit ${newCommit.sha.substring(0, 7)} to ${BRANCH}`)
      addLog("🚀 Amplify will auto-deploy shortly!")
      addLog(`📍 Album page: /${effectiveCollection}/${slug}/`)
      addLog(`📍 Index page: /${effectiveCollection}/`)
      setResult({
        success: true,
        message: `Album "${title}" published! Amplify will deploy it to sigit.cloud/${effectiveCollection}/${slug}/`,
      })
    } catch (err) {
      addLog(`❌ Error: ${err.message}`)
      setResult({ success: false, message: err.message })
    } finally {
      setPublishing(false)
    }
  }

  return (
    <Layout>
      <div style={styles.container}>
        <h3>Create Street Photography Album</h3>

        {/* Auth section */}
        {!authenticated ? (
          <div style={styles.field}>
            <label style={styles.label} htmlFor="gh-token">
              GitHub Personal Access Token
            </label>
            <small style={{ display: "block", marginBottom: "0.5rem", color: "#666" }}>
              Needs <code>repo</code> scope.{" "}
              <a href="https://github.com/settings/tokens/new?scopes=repo&description=sigit.cloud-album-creator"
                target="_blank" rel="noopener noreferrer">
                Create one here
              </a>
            </small>
            <div style={styles.tokenRow}>
              <input
                id="gh-token"
                type="password"
                style={{ ...styles.input, flex: 1 }}
                value={token}
                onChange={e => setToken(e.target.value)}
                placeholder="ghp_xxxxxxxxxxxx"
                onKeyDown={e => e.key === "Enter" && handleLogin()}
              />
              <button style={styles.btn} onClick={handleLogin} type="button">
                Login
              </button>
            </div>
          </div>
        ) : (
          <div style={{ ...styles.field, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span>Logged in as <strong>{ghUser}</strong></span>
            <button
              style={{ ...styles.btn, background: "#666", padding: "0.4rem 1rem", fontSize: "0.85rem" }}
              onClick={handleLogout}
              type="button"
            >
              Logout
            </button>
          </div>
        )}

        {authenticated && (
          <>
            {/* Album collection */}
            <div style={styles.field}>
              <label style={styles.label} htmlFor="collection">Album Collection</label>
              <select
                id="collection"
                style={styles.select}
                value={collection}
                onChange={e => setCollection(e.target.value)}
              >
                {collections.map(col => (
                  <option key={col} value={col}>{COLLECTION_LABEL(col)} ({col})</option>
                ))}
                <option value="__new__">+ New collection...</option>
              </select>
              {collection === "__new__" && (
                <div style={{ marginTop: "0.5rem" }}>
                  <small style={{ display: "block", marginBottom: "0.3rem", color: "#666" }}>
                    Enter name like "streetphotography4"
                  </small>
                  <input
                    style={styles.input}
                    value={customCollection}
                    onChange={e => setCustomCollection(e.target.value)}
                    placeholder="streetphotography4"
                  />
                </div>
              )}
            </div>

            {/* Title */}
            <div style={styles.field}>
              <label style={styles.label} htmlFor="album-title">Album Title</label>
              <input
                id="album-title"
                style={styles.input}
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder='e.g. "Fushimi Inari night hike 🇯🇵 2023"'
              />
            </div>

            {/* Camera */}
            <div style={styles.field}>
              <label style={styles.label} htmlFor="camera">Camera (optional)</label>
              <input
                id="camera"
                style={styles.input}
                value={camera}
                onChange={e => setCamera(e.target.value)}
                placeholder='e.g. "📸 Ricoh GRIIIx"'
              />
            </div>

            {/* Photos */}
            <div style={styles.field}>
              <label style={styles.label}>Photos</label>
              <small style={{ display: "block", marginBottom: "0.5rem", color: "#666" }}>
                Select all photos for this album. They will be sorted by filename and numbered 1.jpg, 2.jpg, etc.
              </small>
              <button
                style={styles.btn}
                onClick={() => fileInputRef.current?.click()}
                type="button"
              >
                Select Photos
              </button>
              <input
                ref={fileInputRef}
                type="file"
                multiple
                accept="image/jpeg,image/png,image/webp"
                style={{ display: "none" }}
                onChange={handleFiles}
              />
              {files.length > 0 && (
                <p style={{ marginTop: "0.5rem" }}>{files.length} photos selected</p>
              )}
              {previews.length > 0 && (
                <div style={styles.preview}>
                  {previews.map((src, i) => (
                    <img key={i} src={src} alt={`Preview ${i + 1}`} style={styles.previewImg} />
                  ))}
                </div>
              )}
            </div>

            {/* Publish */}
            <div style={{ ...styles.field, marginTop: "1.5rem" }}>
              <button
                style={{
                  ...styles.btn,
                  ...(publishing || !title.trim() || files.length === 0 ? styles.btnDisabled : {}),
                  width: "100%",
                  padding: "1rem",
                  fontSize: "1.1rem",
                }}
                onClick={handlePublish}
                disabled={publishing || !title.trim() || files.length === 0}
                type="button"
              >
                {publishing ? "Publishing..." : `Publish Album (${files.length} photos)`}
              </button>
            </div>
          </>
        )}

        {/* Result */}
        {result && (
          <div style={result.success ? styles.success : styles.error}>
            {result.message}
          </div>
        )}

        {/* Log */}
        {log.length > 0 && (
          <div style={styles.log}>
            {log.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
      </div>
    </Layout>
  )
}

export default CreateAlbum

export function Head() {
  return (
    <SEO
      title="Create Album"
      keywords={[`sigit`, `priyanggoro`, `street photography`, `album creator`]}
    />
  )
}
