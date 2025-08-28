// Extended longform content per service + per subsection. Placeholder marketing copy.
// Structure: { [serviceId]: { overview: [paragraphs], sections: { [bulletId]: [paragraphs] } } }

export const serviceContent = {
    'brand-strategy': {
        overview: [
            'We translate raw market and customer signal into a positioning platform that your team can actually operationalize. No 80‑page decks collecting dust—concise guardrails that accelerate decisions.',
            'Our strategy sprints balance qualitative interviews, quantitative demand mapping and messaging stress tests to find language that converts and a narrative arc that compounds brand equity.'
        ],
        sections: {
            'market-research': [
                'We triangulate qualitative interviews, competitor messaging, demand curve data and SERP / share-of-voice analysis to map the real landscape—not a theoretical quadrant. This reveals where incumbents over-invest and where durable whitespace lives.',
                'We build a synthesis dashboard: category narrative themes, pricing/packaging signals, feature parity heatmaps and unmet-job clusters. Each becomes an input to positioning hypotheses.',
                'Outputs include an opportunity thesis: what to own, what to neutralize, what to ignore—reducing strategic noise and focusing creative and budget on leverage points.'
            ],
            'brand-positioning': [
                'We codify a value architecture: core promise, proof pillars, differentiators, category reframes and objection dissolvers all tied to evidence. This becomes a repeatable elevator narrative any team member can deploy.',
                'Messaging stress-tests run across segments, funnel stages and channels (email hooks, paid headlines, hero copy variants) to quantify resonance and clarity before broad rollout.',
                'Deliverable: a living messaging OS—concise, versioned, with guardrails and “do / don’t” examples—so brand fidelity scales without bottlenecking creative velocity.'
            ],
            'customer-persona': [
                'Personas grounded in behavior, triggers, switching costs and success metrics—not vanity demographics. We cluster by job-to-be-done and activation friction.',
                'Each persona includes: triggering events, prioritized pains, motivational language, perceived risks, buying committee roles, and retention expansion levers.',
                'Framework enables channel-specific creative briefs that map message → objection → proof asset, ensuring higher conversion coherence across touchpoints.'
            ],
            'strategy-roadmap': [
                'A 90 / 180 day sequencing model balances foundational debt paydown with compounding growth plays. Each initiative has an owner, KPI, gating assumptions and kill criteria.',
                'We score roadmap items on impact, confidence, effort and strategic compounding to force ruthless focus. Low-leverage busywork gets surfaced and removed.',
                'Roadmap becomes a living operating layer: weekly variance commentary, experiment queue, and a backlog groomed by fresh signal—not static slides.'
            ],
            'content-strategy': [
                'We construct a pillar / cluster map aligned to funnel intent: awareness education, consideration differentiation, decision proof and post-sale expansion.',
                'Topic selection model blends search intent depth, internal link potential, share velocity proxies and sales enablement gaps to prioritize asset creation.',
                'Editorial playbooks define angle formulas, proof insertion cadence (data, quotes, visuals) and modular snippet extraction for social and email repurposing.'
            ]
        }
    },
    'website-platform': {
        overview: [
            'Your site is a growth system—speed, clarity and modularity make experimentation cheap. We engineer foundations that marketing and product can both iterate on.',
            'Design tokens + component libraries keep brand fidelity while enabling rapid landing page creation and CRO testing.'
        ],
        sections: {
            'design-dev': [
                'We establish a performance budget (LCP, CLS, TTFB targets) and enforce it via CI checks so regressions never silently ship.',
                'Component architecture (design tokens + accessibility primitives) ensures marketing can assemble pages without engineering fire drills.',
                'We document a theming + variant strategy (e.g. hero, testimonial, pricing matrix) enabling fast ABM or campaign-specific deployments.'
            ],
            'landing-pages': [
                'Landing system includes conversion pattern library: headline archetypes, offer framing, social proof sequencing, friction reducers and CTA microcopy formulas.',
                'We wire analytics-specific attributes and structured events for every critical interaction so post-test analysis is instant, not forensic.',
                'Playbook: hypothesis capture → variant spec → build → QA → launch → stats engine → learning archive to compound over time.'
            ],
            'mobile-app': [
                'We align product surfaces to activation metrics: shorten first-value time, reduce abandonment, increase habit loops.',
                'Tech stack decisions (native vs cross-platform) are made against lifecycle cost models: performance, hiring, maintenance, velocity.',
                'Instrumentation & release process include feature flags + staged rollout enabling safe experimentation post-launch.'
            ],
            'ux-ui': [
                'We map intent journeys and identify friction points via heuristic evaluation + session review + funnel drop analysis.',
                'Design system tokens (spacing, typography scale, state layers) unify brand expression and enforce accessibility compliance (WCAG AA+).',
                'Prototype validation sessions surface cognitive load and comprehension gaps prior to costly full-build investment.'
            ],
            'cro': [
                'We maintain a prioritized experiment backlog scored on ICE / PXL hybrid to balance upside and learning potential.',
                'Each test has a decision framework: metric guardrails, runtime thresholds, and pre-defined follow-up branches.',
                'Knowledge base stores hypothesis, outcome, insight and next action—preventing re-testing dead ideas and accelerating compounding lifts.'
            ]
        }
    },
    'search-marketing': {
        overview: [
            'We compound intent capture: technical health → information architecture → topical authority → conversion plumbing.',
            'Data models predict marginal ROI of content clusters so you prioritize what will move pipeline—not vanity traffic.'
        ],
        sections: {
            'seo': [
                'Holistic program blending technical reliability, semantic breadth, authority asset acquisition and conversion alignment.',
                'We create an information architecture blueprint optimizing crawl depth and internal link equity flow to priority clusters.',
                'Quarterly health sprints neutralize emerging risks (CWV drift, index bloat, cannibalization) before they erode momentum.'
            ],
            'keyword-research': [
                'We segment queries by jobs-to-be-done, funnel stage and commercial priority; not just raw volume.',
                'Difficulty modelling incorporates link gap, SERP volatility and intent ambiguity so forecasts reflect reality.',
                'Output: prioritized cluster backlog with projected traffic, assisted pipeline value and asset format recommendation.'
            ],
            'on-page': [
                'Entity and topical coverage audits ensure semantic completeness without keyword stuffing.',
                'We deploy structured data and internal link anchor optimization to tighten relevance signaling.',
                'Content refresh playbook tracks decay curves and triggers targeted updates to protect ranking equity.'
            ],
            'off-page': [
                'Authority plan emphasizes linkable assets (data studies, tools, visual frameworks) over transactional outreach spam.',
                'Digital PR calendar ties topical newsjacking & evergreen research releases to brand narrative pillars.',
                'We monitor link velocity & competitor acquisition patterns to calibrate sustainable growth pace.'
            ],
            'technical-seo': [
                'Continuous monitoring of log files, crawl traps, rendering parity and structured data health with alert thresholds.',
                'Architecture recommendations favor simplicity and edge caching to reduce latency & crawling inefficiencies.',
                'Remediation sprints produce ticket bundles: issue → impact quantification → fix spec → QA evidence.'
            ],
            'local-seo': [
                'Profile optimization: category alignment, media assets, service descriptors, review schema integration.',
                'Location page templates embed geo-modified entity structures and conversion-oriented trust markers.',
                'Citation & reputation signals tracked in a dashboard to quickly resolve NAP inconsistencies.'
            ],
            'sem-ppc': [
                'Account architecture aligns to intent tiers and lifecycle value segments, not arbitrary match type silos.',
                'Query mining + negative sculpting tighten efficiency while creative iteration improves CTR & Quality Score.',
                'Budget pacing + marginal CPA curves inform weekly reallocation for maximum blended ROI.'
            ],
            'google-ads': [
                'We structure campaigns for modular testing: ad group theming, message variant matrices, landing alignment.',
                'Data layer event fidelity ensures conversion segmentation (new vs existing, product tiers) for smarter bidding.',
                'Scripts / automation manage anomalies: sudden CPC spikes, budget caps, conversion lag adjustments.'
            ],
            'bing-ads': [
                'Incremental capture strategy focusing on high-ROAS tail and competitor brand leakage.',
                'We adapt winning Google creative while customizing sitelinks and extensions to Bing SERP nuances.',
                'Cross-engine attribution monitored to avoid double counting and to right-size spend allocation.'
            ]
        }
    },
    'social-media': {
        overview: [
            'Narrative systems + creative operations that build community, not just impressions.'
        ],
        sections: {
            'organic-management': [
                'We define governance: voice principles, content pillars, escalation workflows and response tone libraries.',
                'Content calendar architecture balances episodic series, reactive opportunistic slots and evergreen repurposing.',
                'KPI framework maps leading indicators (saves, shares, engaged follows) to lagging pipeline contribution.'
            ],
            'creative-production': [
                'Production pod model: script → storyboard → shoot → edit → versioning → distribution using reusable templates.',
                'Hook & retention heuristics (pattern interrupts, caption layering, pacing) codified into briefs for creators.',
                'Asset tagging taxonomy accelerates future remixing and performance analysis.'
            ],
            'posting-scheduling': [
                'We implement tooling and batching workflows to reduce manual scheduling overhead and QA failure points.',
                'Cadence modeling tests frequency elasticity vs engagement decay to find optimal posting rhythm.',
                'Real-time slot overrides allow agile insertion of timely narrative moments without breaking structure.'
            ],
            'community': [
                'Engagement playbook: priority tiers, SLAs, tone modulation and escalation triggers for legal or PR events.',
                'We surface conversational intelligence (recurrent objections, feature requests) back to product & sales.',
                'Advocacy cultivation: micro-ambassador identification, surprise & delight moments, UGC amplification loops.'
            ],
            'paid-social': [
                'Full-funnel structuring: prospecting creative archetypes, mid-funnel education, bottom-funnel proof variants.',
                'Creative iteration scoreboard tracks hook performance, scroll-stop rate, thumb pause frames.',
                'Budget shifting automation reallocates spend daily based on MER and marginal CPA thresholds.'
            ],
            'facebook-ads': [
                'Account simplification to leverage algorithmic aggregation while preserving creative testing lanes.',
                'Signal strengthening: conversion API implementation, event prioritization, value-based optimization.',
                'Creative testing ladder: concept → angle → format → thumbstop → offer to isolate lift drivers.'
            ],
            'tiktok-ads': [
                'Native creative formula: pattern interrupt within 1s, context compression, cliff sequencing, CTA reinforcement.',
                'UGC + creator collaboration pipeline managing briefs, rights clearance and performance feedback loops.',
                'Iterative hook matrix using watch-through & rewatch metrics to prune weak variants fast.'
            ],
            'linkedin-ads': [
                'Segmentation by buying committee role & problem awareness stage informs bespoke narrative arcs.',
                'We test document ads, conversation ads, and high-intent retargeting blends for LTV-efficient acquisition.',
                'Lead quality scoring loops feed CRM disposition data back into bid and creative optimization.'
            ],
            'snapchat-ads': [
                'Creative emphasizes immediacy + playful visual grammar tuned to younger audience expectations.',
                'We leverage pixel + catalog feeds for dynamic formats while suppressing creative fatigue with rotation rules.',
                'Attribution reconciliation handles cross-device lag to prevent premature pausing of profitable sets.'
            ],
            'twitter-ads': [
                'Conversation-driven strategy: promote threads with compounding engagement velocity not isolated promos.',
                'Creative frameworks center on curiosity gaps and contrarian insights to earn dwell time.',
                'We monitor topic trend adjacency to opportunistically amplify distribution without bloating CPC.'
            ]
        }
    },
    'content-marketing': {
        overview: [
            'Content is an owned acquisition engine. We build frameworks that compound authority and nurture buying belief.'
        ],
        sections: {
            'blog-writing': [
                'Cluster strategy: pillar assets orchestrate internal linking to derivative supporting articles improving semantic breadth.',
                'We integrate conversion micro-goals (email capture modules, secondary CTAs) contextually instead of intrusive gating.',
                'Editorial analytics surface decay, cannibalization and underperforming SERP CTR for targeted refresh cycles.'
            ],
            'video-production': [
                'We blueprint hook families, pacing heuristics and retention checkpoints into repeatable storyboard templates.',
                'End-to-end pipeline: ideation → scripting → batch shooting → editing macros → vertical repurposing.',
                'Performance instrumentation ties watch segments & drop-off points to creative iteration backlog.'
            ],
            'creative-media': [
                'Centralized asset library with metadata allows rapid remixing across channels while preserving brand coherence.',
                'Template systems for decks, one-pagers, carousels reduce design request queue and enable scale.',
                'Visual QA checklist enforces accessibility, contrast, legibility and responsive adaptation.'
            ],
            'infographics': [
                'Narrative data framing converts raw stats into persuasive story arcs with tension, insight and resolution.',
                'Design emphasizes scannability: modular panels, hierarchy signaling, minimal cognitive load per frame.',
                'Distribution plan includes embed outreach, press targeting and derivative micro-snippets for social.'
            ],
            'long-form-assets': [
                'We architect high-leverage anchor assets (eBooks, case study compendiums, benchmarking reports) that seed months of derivative content.',
                'Gated vs ungated decision matrix weighs lead quality deterioration vs organic flywheel acceleration.',
                'Production workflow integrates SME interviews, data extraction, design staging and nurture sequence alignment.'
            ]
        }
    },
    'email-crm': {
        overview: [
            'Lifecycle orchestration: capture → onboard → activate → expand → retain.'
        ],
        sections: {
            'campaign-automation': [
                'We map event + attribute triggers and progressive profiling paths to personalize messaging without creepiness.',
                'Automation architecture minimizes overlap & collision; each flow has a defined purpose and suppression logic.',
                'Experiment framework tests send time optimization, narrative sequencing and dynamic content variants.'
            ],
            'nurture-sequences': [
                'Journey design segments by problem awareness & role—sequencing education, social proof and urgency scaffolding.',
                'We embed conversion micro-surveys to capture evolving pains and feed the personalization model.',
                'KPI dashboards track velocity to MQL/SQO uplift vs generic batch-and-blast benchmarks.'
            ],
            'list-segmentation': [
                'Data hygiene routines (bounce pruning, inactivity re-engagement, enrichment) preserve sender reputation and ROI.',
                'Segmentation model mixes recency, frequency, monetary proxies and behavioral triggers.',
                'We construct dynamic cohorts driving tailored offers, reducing unsubscribes and increasing LTV.'
            ],
            'crm-setup': [
                'Architecture blueprint: objects, lifecycle stages, lead statuses, SLA timers, pipeline definitions.',
                'Field normalization & validation rules prevent downstream reporting corruption and attribution gaps.',
                'Playbooks for sales → marketing feedback loops accelerate collateral creation and objection handling.'
            ]
        }
    },
    'influencer-partnerships': {
        overview: [
            'Third‑party trust accelerates awareness slope and lowers CAC when structured as a portfolio.'
        ],
        sections: {
            'influencer-campaigns': [
                'Sourcing matrix evaluates relevance, authenticity, audience quality (fake follower scan) and creative alignment.',
                'Brief framework clarifies narrative objective, mandatory proof points, compliance constraints and performance KPIs.',
                'Performance loop: UTMs + unique codes feed ROI model guiding reinvestment or rotation decisions.'
            ],
            'affiliate-program': [
                'We design tiered commission structures balancing margin with partner activation incentives.',
                'Recruitment engine leverages competitor backlink mining, niche community scans and existing customer advocates.',
                'Enablement portal centralizes creative assets, messaging updates and conversion optimization tips.'
            ],
            'brand-collabs': [
                'Co-marketing opportunity scoring: audience overlap, cross-promo capacity, narrative complementarity.',
                'Joint campaign operating model defines asset ownership, launch choreography and lead routing.',
                'Post-mortem templates capture partner learnings and feed a growing collaboration playbook.'
            ]
        }
    },
    'analytics-data': {
        overview: [
            'Decision velocity is a moat. We implement reliable instrumentation and self‑serve insight layers.'
        ],
        sections: {
            'tracking-setup': [
                'We audit existing event schemas, reconcile against business questions and design a normalized spec.',
                'Implementation spans client + server events with deduplication logic and QA dashboards for anomaly detection.',
                'Governance: versioning, naming conventions, ownership and deprecation process to prevent schema entropy.'
            ],
            'dashboards': [
                'Layered dashboards: exec pulse (north stars, variance), marketing ops (channel efficiency), product growth (activation & retention cohorts).',
                'We build semantic models so non-technical stakeholders can self-serve without writing brittle SQL.',
                'Alerting thresholds surface meaningful deviations quickly while suppressing noise.'
            ],
            'ab-testing': [
                'Experiment design guardrails: minimum detectable effect, sample ratio mismatch checks, sequential testing ethics.',
                'Stats engine selection (Bayesian vs frequentist) driven by decision cadence and tolerance for false lifts.',
                'Central experiment registry prevents collision and preserves institutional learning.'
            ],
            'attribution': [
                'Hybrid model approach: position-based + time decay with incrementality tests to validate weighting.',
                'We reconcile ad platform conversions, analytics events and CRM opportunity data into a single pane.',
                'Insights drive budget reallocation based on marginal ROAS / pipeline contribution, not vanity channel preference.'
            ]
        }
    },
    'advanced-emerging': {
        overview: [
            'We test edge channels & automation loops early for asymmetrical upside before they commoditize.'
        ],
        sections: {
            'automation-ai': [
                'We map repetitive workflows ripe for augmentation: lead qualification, support triage, content repurposing.',
                'Conversation design emphasizes guardrails, fallback intents and data privacy considerations.',
                'Measurement framework tracks deflected tickets, time saved, and incremental revenue assisted.'
            ],
            'sms-whatsapp': [
                'Lifecycle mapping determines where immediacy (abandoned cart, onboarding nudge) yields net positive experience.',
                'Compliance + consent architecture maintains deliverability and trust.',
                'We test message framing: utility-first vs incentive vs social proof to optimize engagement.'
            ],
            'podcast': [
                'Show positioning clarifies POV, recurring segment structure and guest sourcing filters.',
                'Production workflow: research → prep doc → recording ops → editing brand kit → distribution slicing.',
                'Attribution model links listens → site behavior → pipeline influence via tagged offers & vanity URLs.'
            ],
            'webinars': [
                'Topic selection matrix: audience tension, novelty, sales alignment and replay evergreen value.',
                'Run-of-show engineering balances insight density with interactive polls & live Q&A loops.',
                'Post-event nurture differentiates registrant attendee states with contextual follow-up sequences.'
            ],
            'ar-vr': [
                'Use case evaluation focuses on experiential ROI vs novelty risk—prioritizing interactive demos & training modules.',
                'Rapid prototyping validates engagement assumptions before high-fidelity asset investment.',
                'Measurement ties dwell time, interaction depth and assisted conversion lift.'
            ]
        }
    },
    'reputation-experience': {
        overview: [
            'Trust & feedback loops increase conversion and retention while informing roadmap prioritization.'
        ],
        sections: {
            'orm': [
                'Listening stack monitors brand, competitor and category keyword clusters across review, social and forum surfaces.',
                'Narrative defense playbooks define classification, escalation and response tonality frameworks.',
                'Sentiment trend dashboards correlate shifts with launches or incidents to drive rapid mitigation.'
            ],
            'review-generation': [
                'We orchestrate timing & channel mix for review asks to maximize acceptance without fatigue.',
                'Personalization tokens + frictionless UX increase completion rate while staying compliant with platform policies.',
                'Amplification: structured data markup, case study extraction, and paid retargeting creative reuse.'
            ],
            'feedback-loops': [
                'Voice-of-customer program integrates NPS, CSAT, churn exit, and in-product micro-surveys into a unified repository.',
                'Insight processing pipeline tags themes, severity and dollar impact enabling prioritization scoring.',
                'Closed-loop rituals broadcast implemented changes, reinforcing participation and reducing churn.'
            ]
        }
    }
};
