import React, { useEffect, useState } from "react"
import "./theme-toggle.css"

const getInitialTheme = () => {
  if (typeof window === "undefined") return "light"
  return document.documentElement.getAttribute("data-theme") || "light"
}

const ThemeToggle = () => {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    // Sync in case SSR script already set it
    const current = document.documentElement.getAttribute("data-theme") || "light"
    if (current !== theme) {
      setTheme(current)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button
      onClick={toggleTheme}
      className={`theme-switch ${theme === "dark" ? "theme-switch--dark" : ""}`}
      aria-label={theme === "light" ? "Enable dark mode" : "Enable light mode"}
      title={theme === "light" ? "Enable dark mode" : "Enable light mode"}
    >
      <span className="theme-switch__icon theme-switch__sun">☀️</span>
      <span className="theme-switch__icon theme-switch__moon">🌙</span>
      <span className="theme-switch__slider" />
    </button>
  )
}

export default ThemeToggle
