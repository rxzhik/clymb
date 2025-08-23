import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

export const prefersReduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Reveal children on scroll with a default y:20 + opacity pattern */
export function revealSection(container, { childSelector = '[data-reveal]', stagger = 0.08 } = {}) {
    if (!container || prefersReduced()) return
    const ctx = gsap.context(() => {
        const targets = container.querySelectorAll(childSelector)
        // Ensure any previously hidden (opacity/visibility) nodes are force-shown before animating
        gsap.set(targets, { autoAlpha: 1 })
        const tl = gsap.timeline({
            scrollTrigger: { trigger: container, start: "top 80%", once: true }
        })
        tl.from(targets, {
            y: 20, opacity: 0, duration: 0.6, ease: "power2.out", stagger
        })
    }, container)
    return () => ctx.revert()
}
