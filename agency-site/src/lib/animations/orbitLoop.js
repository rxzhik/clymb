import { gsap } from "gsap"

/** Slow rotation on parent circle + gentle float for each icon. */
export default function orbitLoop(root) {
    if (!root) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const parent = root.querySelector('.orbit-parent')
    const items = root.querySelectorAll('.orbit-item')

    const rot = gsap.to(parent, { rotate: 360, duration: 60, repeat: -1, ease: "none" })

    items.forEach((el, i) => {
        gsap.to(el, { y: 6, yoyo: true, repeat: -1, duration: 1.6 + (i % 3) * 0.2, ease: "sine.inOut", delay: i * 0.1 })
        gsap.set(el, { rotate: 0 })
    })

    root.addEventListener('mouseenter', () => rot.timeScale(2))
    root.addEventListener('mouseleave', () => rot.timeScale(1))

    return () => rot.kill()
}
