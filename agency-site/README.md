# Agency Site (React + Vite + Tailwind v4.1 + DaisyUI v5 + GSAP)

## Run

npm i
npm run dev

## Notes

- Tailwind v4.1 via `@tailwindcss/vite` plugin (no PostCSS / no tailwind.config by default).
- DaisyUI v5 loaded using CSS `@plugin "daisyui"`; custom theme `agency` via `@plugin "daisyui/theme"`.
- Animations: GSAP ScrollTrigger (section reveals), hero/CTA stagger, orbit micro-interactions, route transitions, reduced-motion support.

⸻

Why this Tailwind v4.1 setup?
• Tailwind v4 favors Vite plugin + CSS-first config (@import "tailwindcss"; @plugin "...") instead of the old PostCSS/tailwind.config flow.  
 • DaisyUI v5 supports Tailwind v4 via CSS @plugin "daisyui" and custom themes via @plugin "daisyui/theme".
