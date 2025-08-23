// Extended longform content per service + per subsection. Placeholder marketing copy.
// Structure: { [serviceId]: { overview: [paragraphs], sections: { [bulletId]: [paragraphs] } } }

export const serviceContent = {
    'brand-strategy': {
        overview: [
            'We translate raw market and customer signal into a positioning platform that your team can actually operationalize. No 80‑page decks collecting dust—concise guardrails that accelerate decisions.',
            'Our strategy sprints balance qualitative interviews, quantitative demand mapping and messaging stress tests to find language that converts and a narrative arc that compounds brand equity.'
        ],
        sections: {
            'market-research': ['Landscape, whitespace and competitor dissection to isolate the edges you can sustainably own.'],
            'brand-positioning': ['We crystallize a value architecture: core promise, 3‑5 proof pillars, objection dissolvers and a repeatable elevator story.'],
            'customer-persona': ['Personas are behaviour + trigger based, tied to funnel states—not vanity demographics.'],
            'strategy-roadmap': ['90/180 day sequencing aligned to revenue levers, mapped to owners, KPIs and gating assumptions.']
        }
    },
    'website-platform': {
        overview: [
            'Your site is a growth system—speed, clarity and modularity make experimentation cheap. We engineer foundations that marketing and product can both iterate on.',
            'Design tokens + component libraries keep brand fidelity while enabling rapid landing page creation and CRO testing.'
        ],
        sections: {
            'design-dev': ['Performance budgets, accessibility and maintainable architecture baked in from day one.'],
            'landing-pages': ['We stand up a landing system: hero, proof, offer, objection patterns that can be remixed quickly.'],
            'ux-ui': ['User journeys mapped to intent states with friction audits and prioritized fixes.']
        }
    },
    'search-marketing': {
        overview: [
            'We compound intent capture: technical health → information architecture → topical authority → conversion plumbing.',
            'Data models predict marginal ROI of content clusters so you prioritize what will move pipeline—not vanity traffic.'
        ],
        sections: {
            'seo': ['Full‑funnel SEO: discoverability, relevance, authority and conversion alignment.'],
            'keyword-research': ['Demand mapping groups queries by jobs-to-be-done and commercial intent weighting.'],
            'technical-seo': ['Proactive monitoring: CWV, log files, crawl budget, structured data, index anomalies.']
        }
    },
    'social-media': {
        overview: ['Narrative systems + creative operations that build community, not just impressions.'],
        sections: { 'organic-management': ['Governance: tone, pillars, response protocols and escalation paths.'] }
    },
    'content-marketing': {
        overview: ['Content is an owned acquisition engine. We build frameworks that compound authority and nurture buying belief.'],
        sections: { 'blog-writing': ['Topic cluster scoring balances difficulty, intent depth and internal link leverage.'] }
    },
    'email-crm': {
        overview: ['Lifecycle orchestration: capture → onboard → activate → expand → retain.'],
        sections: { 'campaign-automation': ['Behavioral triggers and progressive profiling unlock segmentation precision.'] }
    },
    'influencer-partnerships': {
        overview: ['Third‑party trust accelerates awareness slope and lowers CAC when structured as a portfolio.'],
        sections: { 'influencer-campaigns': ['Talent sourcing matrix scores relevance, reach quality, creative alignment and cost efficiency.'] }
    },
    'analytics-data': {
        overview: ['Decision velocity is a moat. We implement reliable instrumentation and self‑serve insight layers.'],
        sections: { 'tracking-setup': ['Server + client events normalized to a unified schema with QA dashboards.'] }
    },
    'advanced-emerging': {
        overview: ['We test edge channels & automation loops early for asymmetrical upside before they commoditize.']
    },
    'reputation-experience': {
        overview: ['Trust & feedback loops increase conversion and retention while informing roadmap prioritization.']
    }
};
