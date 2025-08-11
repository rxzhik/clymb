import { gsap } from "gsap"

/** Staggers hero headline lines + CTAs */
export default function heroTimeline(scope) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return () => { }
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.from(scope.querySelectorAll('[data-hero-word]'), { y: 24, opacity: 0, stagger: 0.05, duration: .6 })
        .from(scope.querySelectorAll('[data-hero-cta]'), { y: 14, opacity: 0, stagger: 0.1, duration: .5 }, "-=0.2")
    return () => tl.kill()
}
