import React from "react"

const AlbumGrid = ({ children }) => {
  return (
    <div className="three-columns-grid" style={{ marginBottom: "1.5rem" }}>
      {children}
    </div>
  )
}

export default AlbumGrid
