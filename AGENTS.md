# WNC Radio Project Standards

This document outlines the foundational technical mandates for the WNC Radio Project. Adhere to these standards to ensure the site remains a reliable tool for emergency communication.

## 1. Target Audience & Use Case
*   **Non-Technical Users:** The interface must be intuitively designed for people who are not tech-savvy and who may be under severe stress or panic during an emergency.
*   **Hostile Network Conditions:** The app must function reliably on extremely slow, unstable connections, dropping gracefully to a fully offline mode when networks completely fail.

## 2. Performance Mandate
*   **Zero-Dependency:** The site must remain purely static with **zero external requests** for CSS or JS. This ensures maximum load speed on congested emergency cell towers.
*   **Inlined Assets:** Styles and scripts must be inlined within each HTML file. Do NOT use external `.css` or `.js` files (with the exception of the PWA service worker). This eliminates unnecessary HTTP handshakes.
*   **No Build Process:** We intentionally avoid local or CI build phases (e.g., bundlers, minifiers). The site is authored directly in plain HTML, CSS, and JS. This ensures extreme simplicity and allows updates to be pushed immediately without waiting for pipelines, which is critical during emergency situations.

## 3. Styling Conventions
*   **CSS Variables:** All colors and fonts must be defined in the `:root` block of each file.
    *   `--primary`: #1d3e59 (Brand Dark Blue)
    *   `--primary-hover`: #2a5a7e
    *   `--primary-active`: #152d42
    *   `--text`: #333
    *   `--muted`: #666
    *   `--border`: #ccc
*   **Hybrid Scroll Pattern:** Long content pages (e.g., Repeaters) should follow this layout:
    *   The **Header** (branding) is inside the scrollable `<main>` container so it can be scrolled away.
    *   The **Footer** (navigation) is placed outside `<main>` and pinned to the bottom of the viewport using Flexbox on the `body`.

## 4. PWA & Offline Strategy
*   **Network-First Strategy:** The Service Worker (`sw.js`) must prioritize fetching from the network to ensure data freshness, but fall back **immediately** to the cache if the network fails.
*   **Pre-caching:** All core assets (HTML pages, logo, manifest) must be included in the `ASSETS` array in `sw.js` to ensure the entire site is cached on the first visit.
*   **Hardening:** 
    *   Only cache responses with `status === 200` to prevent caching error pages.
    *   Explicitly handle missing cache entries by throwing an Error rather than returning `undefined` to prevent browser `TypeError` bugs.

## 5. Maintenance Workflows
*   **Cache Invalidation:** Always bump the `CACHE_NAME` version in `sw.js` (e.g., `v1.3` -> `v1.4`) whenever making changes to HTML, CSS, or assets that need to be reflected immediately for users. This forces a background update and ensures the offline experience remains current.
*   **Branding:** Every HTML page must include links for `manifest.json`, `apple-touch-icon`, and a standard `favicon` using the `logo_g.webp` asset.
*   **PWA Persistence:** When updating HTML files, ensure the PWA registration script remains intact at the bottom of the `<body>`.
