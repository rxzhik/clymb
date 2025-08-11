import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

/** Tweens number text content once per view */
export default function counterUp(el, to = 100, { duration = 1.2 } = {}) {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { el.textContent = String(to); return () => { } }
    let obj = { val: 0 }
    const st = ScrollTrigger.create({
        trigger: el,
        start: "top 80%",
        once: true,
        onEnter: () => {
            gsap.to(obj, {
                val: to, duration, ease: "power1.out",
                onUpdate: () => el.textContent = Math.round(obj.val).toLocaleString()
            })
        }
    })
    return () => st.kill()
}
