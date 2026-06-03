# Design & Layout Implementation Todo List

This todo list outlines the steps to implement layout reordering, typography scaling, and asset weight optimization for the WNC Radio Project.

- [x] **1. Asset Weight Optimization**
  - [x] Copy the original high-resolution color logo (`logo_g.webp`) to `logo_g_highres.webp` to keep the raw master file in the repository.
  - [x] Convert `logo_g.webp` to lossy WebP at 90% quality using ImageMagick (target size: ~3 KB vs current 17.8 KB) to optimize transmission on slow emergency networks.

- [x] **2. Typography & Hierarchy Setup**
  - [x] Add typography scale variables to the `:root` block of `index.html`, `repeaters.html`, and `gmrs_quick_reference.html`:
    * `--h1-size: 1.5rem;`
    * `--h2-size: 1.15rem;`
  - [x] Update `h1` style definitions in all three HTML files to use `font-size: var(--h1-size);` to prevent line wrapping on small screens.
  - [x] Update `h2` style definitions in all three HTML files to use `font-size: var(--h2-size);`.

- [x] **3. Secondary Button Styling**
  - *Emergency Benefit: Differentiates secondary external resources from critical offline tools to decrease user choice paralysis.*
  - [x] Add `.btn-secondary` CSS rules to `index.html`, `repeaters.html`, and `gmrs_quick_reference.html` (transparent background, 1px border, responsive hover/active coloring).

- [x] **4. Emergency UX Layout Reordering**
  - *Emergency Benefit: Positions offline-available emergency local repeater guides first, ensuring they are instantly accessible when mobile data is down.*
  - [x] Group and reorder buttons in `index.html`:
    * **Top Section**: "Emergency & Reference (Always Offline Capable)"
      * *GMRS Repeaters* (Primary Button)
      * *FRS/GMRS Quick Reference* (Primary Button)
    * **Bottom Section**: "Community & Training (Requires Internet)"
      * *Donate*, *Free Class Sign Ups*, *How to Get Licensed*, *Facebook Group*, *Flat Top Coverage Map*, *Radio Images* (styled as Secondary Outline Buttons).

- [ ] **5. Service Worker Update & Verification**
  - [x] Bump PWA `CACHE_NAME` version in `sw.js`.
  - [ ] Test the site locally (validate light/dark modes and mobile responsive grid scaling).

- [ ] **6. UX & Aesthetic Enhancements (Designer Feedback)**
  - *Emergency Benefit: Native OS system font rendering and improved visual hierarchy reduce cognitive load and fatigue during high-stress operations.*
  - [x] Update `--font-main: sans-serif;` to native system UI font stack (`system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`) in `index.html`, `repeaters.html`, and `gmrs_quick_reference.html`.
  - [x] Soften button aesthetics by increasing `border-radius` from `4px` to `8px` in all three HTML files.
  - [x] Add smooth CSS interactions (`transition: all 0.2s ease;`) to all buttons to prevent harsh state switching.
  - [x] Set button text line-height to `1.35` for balanced multi-line text alignment.
  - [ ] Improve vertical spacing/grouping by increasing `.section-title` top margin from `1.5rem` to `2.5rem` on the homepage.
  - [x] Harden dark mode contrast by using a high-contrast text and border color (e.g., `#8ab4f8`) for secondary outline buttons in dark mode instead of the low-contrast `--primary` blue (`#3d6e97`).
  - [ ] Increase footer top margin (e.g., from `2rem` to `3rem`) to improve separation.
  - [ ] Polish PWA offline indicator bar design.

- [ ] **7. Emergency Resiliency & UX Improvements**
  - [ ] **Make Emergency Buttons Visually Distinct**
    * *Why:* Cognitive load spikes during a crisis. Users need to instinctively identify critical resources without having to read and process every button on the screen.
    * *How:* Change the background color of the "Emergency & Reference" buttons to a high-visibility alert color (e.g., safety orange or red). Add universally recognized icons (like a medical cross, warning triangle, or radio tower) to these specific buttons to make them pop.
  - [ ] **Cache the Coverage Map for Offline Mode**
    * *Why:* Knowing repeater footprints is vital when regional cell infrastructure fails. Hiding the coverage map when the device goes offline removes a critical navigation and communication asset exactly when it is needed most.
    * *How:* Move the coverage map to the "Emergency & Reference" category. Configure your service worker to pre-cache the map assets (whether static images or vector tiles) locally so it renders reliably without an active WAN connection.
  - [ ] **Elevate Critical Actionable Data Above the Fold**
    * *Why:* The weekly net schedule and introductory text occupy premium upper-screen space. In a genuine emergency, every pixel of vertical space matters to reduce scrolling. Immediate action takes precedence over community scheduling.
    * *How:* Swap the visual hierarchy. Place the "Emergency & Reference" block immediately below the project title. Move the "Weekly net on Flat Top..." text below the emergency buttons or relegate it to the "Community" section.
  - [ ] **Expose Primary Frequencies Instantly**
    * *Why:* In an active emergency, even tapping a button and waiting for a page transition takes too much time. Users shouldn't have to navigate to a secondary page to find the primary local lifeline.
    * *How:* Add a static, high-contrast text block directly on the home page stating the primary emergency fallback frequency and its required PL/CTCSS tones (e.g., "Primary Emergency: CH 15 / 462.550 MHz / Tone 141.3").
  - [ ] **Improve Dark Mode Button Contrast**
    * *Why:* The dark blue "Emergency & Reference" buttons on the dark theme background lack strong visual contrast. This makes them difficult to read quickly under harsh field lighting, bright sun glare, or high-stress situations.
    * *How:* Lighten the button fill color in dark mode to ensure WCAG-compliant contrast, or use a stark contrasting border and text color so the primary actions clearly separate from the background UI.

