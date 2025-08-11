import { useEffect } from 'react'
import { revealSection } from './revealSection.js'
export default function useReveal(ref, options) {
    useEffect(() => {
        if (!ref.current) return
        return revealSection(ref.current, options)
    }, [ref])
}
