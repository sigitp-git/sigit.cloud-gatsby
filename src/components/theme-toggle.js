import React, { useEffect, useState } from "react"
import "./theme-toggle.css"

const MoonIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
  </svg>
)

const SunIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <line x1="12" y1="2" x2="12" y2="4" />
    <line x1="12" y1="20" x2="12" y2="22" />
    <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
    <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
    <line x1="2" y1="12" x2="4" y2="12" />
    <line x1="20" y1="12" x2="22" y2="12" />
    <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
    <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
  </svg>
)

const ThemeToggle = () => {
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme") || "light"
    setTheme(current)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  // Render both icons; CSS shows the correct one based on data-theme attribute
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle"
      aria-label={theme === "dark" ? "Enable light mode" : "Enable dark mode"}
      title={theme === "dark" ? "Enable light mode" : "Enable dark mode"}
    >
      <span className="theme-toggle__moon"><MoonIcon /></span>
      <span className="theme-toggle__sun"><SunIcon /></span>
    </button>
  )
}

export default ThemeToggle
