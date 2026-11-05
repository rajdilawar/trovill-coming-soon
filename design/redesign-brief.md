# TROVILL Homepage Redesign Brief

## Goal

Refactor the existing static TROVILL coming-soon homepage into a restrained, editorial, black-and-white campaign page using the supplied images.

## Layout

- Slim white header with the TROVILL logo on the left and Wishlist, Our Story, and Contact links on the right.
- Wishlist links to the existing launch signup; no product-wishlist feature is present.
- Three stacked, full-width campaign image banners:
  1. “THE FIRST CHAPTER” / “Designed in Berlin. Launching soon.” / “Get early access”
  2. “DETAILS MAKE THE DIFFERENCE” / “Signature cuffs. Quiet distinction.”
  3. “In a world of fast fashion, we choose to slow down — creating clothing that feels personal, lives beautifully, and endures over time.”
- Eight-image detail grid: four columns by two rows on desktop, two columns by four rows on mobile.
- Preserve the launch signup, existing FAQ, and minimal footer below the grid.

## Visual direction

- Pure white interface backgrounds, black typography and controls, subtle neutral borders.
- Keep photographs in their original natural colours and crop with `object-fit`; never distort them.
- Keep banner text as HTML and position each banner’s copy intentionally.
- Adapt banner crops, overlays and navigation for mobile while keeping text readable.
- Identify supplied certification hang-tag artwork as previews.

## Implementation and constraints

- Keep the existing HTML/CSS/JS stack and reuse the MailerLite signup, validation, consent, confirmation messages, SEO metadata, and legal links.
- No extra dependencies, autoplay, or non-working interactions.
- No deployment.

## Asset note

- Supplied portrait photos can be cropped for full-width banners.
- There is no standalone cuff-detail photo; the grid uses a right-side crop of `assets/hero-desktop.jpg`.
