/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

const React = require("react")

const setThemeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      var resolved = theme || (systemDark ? 'dark' : 'light');
      document.documentElement.setAttribute('data-theme', resolved);
    } catch (e) {}
  })();
`

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      key: "theme-init",
      dangerouslySetInnerHTML: { __html: setThemeScript },
    }),
  ])
}
