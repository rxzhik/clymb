import { useEffect } from 'react'
import { gsap } from 'gsap'

const prefersReduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Hook to animate desktop mega menu panel open/close
export function useMegaMenuAnimation(panelRef, open) {
    useEffect(() => {
        const panel = panelRef.current
        if (!panel) return

        // Ensure starting state
        if (!panel._init) {
            gsap.set(panel, { autoAlpha: 0, clipPath: 'inset(0 0 100% 0)' })
            panel._init = true
        }

        if (prefersReduced()) {
            gsap.set(panel, { autoAlpha: open ? 1 : 0, clipPath: open ? 'inset(0 0 0% 0)' : 'inset(0 0 100% 0)' })
            return
        }

        if (open) {
            gsap.killTweensOf(panel)
            const items = panel.querySelectorAll('[data-mega-animate]')
            gsap.set(panel, { autoAlpha: 1 })
            const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
            tl.fromTo(panel, { clipPath: 'inset(0 0 100% 0)' }, { clipPath: 'inset(0 0 0% 0)', duration: 0.45 })
                .from(items, { y: 18, opacity: 0, stagger: 0.05, duration: 0.5, ease: 'power3.out' }, '-=0.25')
        } else {
            const items = panel.querySelectorAll('[data-mega-animate]')
            const tl = gsap.timeline({ onComplete: () => gsap.set(panel, { autoAlpha: 0 }) })
            tl.to(items, { y: -10, opacity: 0, duration: 0.25, stagger: 0.04, ease: 'power2.in' })
                .to(panel, { clipPath: 'inset(0 0 100% 0)', duration: 0.3, ease: 'power2.in' }, 0)
        }
    }, [open, panelRef])
}
