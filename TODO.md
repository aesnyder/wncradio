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
