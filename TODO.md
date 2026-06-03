# Design & Layout Implementation Todo List

This todo list outlines the steps to implement layout reordering, typography scaling, and asset weight optimization for the WNC Radio Project.

- [ ] **1. Asset Weight Optimization**
  - [ ] Copy the original high-resolution color logo (`logo_g.webp`) to `logo_g_highres.webp` to keep the raw master file in the repository.
  - [ ] Convert `logo_g.webp` to lossy WebP at 90% quality using ImageMagick (target size: ~3 KB vs current 17.8 KB) to optimize transmission on slow emergency networks.

- [x] **2. Typography & Hierarchy Setup**
  - [x] Add typography scale variables to the `:root` block of `index.html`, `repeaters.html`, and `gmrs_quick_reference.html`:
    * `--h1-size: 1.5rem;`
    * `--h2-size: 1.15rem;`
  - [x] Update `h1` style definitions in all three HTML files to use `font-size: var(--h1-size);` to prevent line wrapping on small screens.
  - [x] Update `h2` style definitions in all three HTML files to use `font-size: var(--h2-size);`.

- [ ] **3. Secondary Button Styling**
  - [ ] Add `.btn-secondary` CSS rules to `index.html`, `repeaters.html`, and `gmrs_quick_reference.html`:
    * Background: transparent
    * Border: 1px solid `var(--primary)`
    * Color: `var(--primary)`
    * Hover/Active states matching light and dark themes.

- [ ] **4. Emergency UX Layout Reordering**
  - [ ] Group and reorder buttons in `index.html`:
    * **Top Section**: "Emergency & Reference (Always Offline Capable)"
      * *GMRS Repeaters* (Primary Button)
      * *FRS/GMRS Quick Reference* (Primary Button)
    * **Bottom Section**: "Community & Training (Requires Internet)"
      * *Donate*, *Free Class Sign Ups*, *How to Get Licensed*, *Facebook Group*, *Flat Top Coverage Map*, *Radio Images* (styled as Secondary Outline Buttons).

- [ ] **5. Service Worker Update & Verification**
  - [ ] Bump PWA `CACHE_NAME` version in `sw.js`.
  - [ ] Test the site locally (validate light/dark modes and mobile responsive grid scaling).
