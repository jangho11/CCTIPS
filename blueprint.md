# CCTIPS - Creative Content Tips

## Overview

A modern, content-focused website providing tips and articles for creative content creators. The goal is to build a structured, visually appealing site suitable for future monetization with Google AdSense.

## Design and Features (Version 1)

*   **Overall Style:** Clean, modern, and professional. Uses a balanced layout with clear typography and a defined color palette.
*   **Layout:**
    *   Responsive design for mobile and desktop.
    *   Header with site title and navigation.
    *   Main section with a grid of article cards.
    *   Footer with standard site links.
*   **Color Palette:**
    *   Primary: A professional blue (`#2a76c6`)
    *   Accent: A vibrant coral (`#ff7f50`)
    *   Text: Dark gray (`#333`)
    *   Background: Light gray/off-white (`#f4f4f4`)
*   **Typography:**
    *   Headings: A clean, sans-serif font (e.g., Montserrat or Raleway from Google Fonts).
    *   Body: A readable sans-serif font (e.g., Open Sans or Lato from Google Fonts).
*   **Components (Web Components):**
    *   `<site-header>`: Encapsulates the header and navigation.
    *   `<site-footer>`: Encapsulates the footer.
    *   `<article-card>`: A reusable card to display a summary of an article, with an image, title, and snippet.
*   **Content:**
    *   Placeholder articles about content creation (e.g., "5 Tips for Engaging Thumbnails", "The Secret to Viral Videos", "Mastering SEO for Your Blog").

## Current Plan

1.  **Create `blueprint.md`:** Document the project vision and plan. (Completed)
2.  **Update `index.html`:**
    *   Add Google Fonts links.
    *   Set up the basic page structure (header, main, footer).
    *   Include `<site-header>`, `<article-card>`s, and `<site-footer>` custom elements.
3.  **Update `style.css`:**
    *   Implement the full design: layout, colors, typography, and responsive rules.
    *   Add styles for the cards and other elements to make them visually appealing.
4.  **Update `main.js`:**
    *   Define and register the custom elements: `SiteHeader`, `SiteFooter`, and `ArticleCard`.
    *   Populate the page with some initial article data.