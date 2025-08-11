import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Reveal children on scroll with a default y:20 + opacity pattern */
export function revealSection(container, { childSelector = '[data-reveal]', stagger = 0.08 } = {}) {
    if (!container || prefersReduced()) return
    const ctx = gsap.context(() => {
        const tl = gsap.timeline({
            scrollTrigger: { trigger: container, start: "top 80%", once: true }
        })
        tl.from(container.querySelectorAll(childSelector), {
            y: 20, opacity: 0, duration: 0.6, ease: "power2.out", stagger
        })
    }, container)
    return () => ctx.revert()
}
