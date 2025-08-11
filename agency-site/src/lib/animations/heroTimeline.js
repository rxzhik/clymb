import { gsap } from "gsap"

/** Staggers hero headline lines + CTAs */
export default function heroTimeline(scope) {
    if (!scope) return () => { }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return () => { }
    const words = scope.querySelectorAll('[data-hero-word]')
    const ctas = scope.querySelectorAll('[data-hero-cta]')
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } })
    tl.from(words, { y: 24, opacity: 0, stagger: 0.05, duration: .6, immediateRender: false, clearProps: "opacity,transform" })
        .from(ctas, { y: 14, opacity: 0, stagger: 0.1, duration: .5, immediateRender: false, clearProps: "opacity,transform" }, "-=0.2")
    return () => tl.kill()
}
