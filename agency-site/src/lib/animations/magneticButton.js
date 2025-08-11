import { gsap } from "gsap"

/** Magnetic hover effect for primary CTA */
export default function magneticButton(btn) {
    if (!btn) return () => { }
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return () => { }
    const move = (e) => {
        const r = btn.getBoundingClientRect()
        const x = e.clientX - (r.left + r.width / 2)
        const y = e.clientY - (r.top + r.height / 2)
        gsap.to(btn, { x: x * 0.15, y: y * 0.15, duration: 0.25, ease: "power2.out" })
    }
    const leave = () => gsap.to(btn, { x: 0, y: 0, duration: 0.3 })
    btn.addEventListener('mousemove', move)
    btn.addEventListener('mouseleave', leave)
    return () => { btn.removeEventListener('mousemove', move); btn.removeEventListener('mouseleave', leave) }
}
