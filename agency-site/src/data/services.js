// Central service + subsection metadata for mega menu & individual pages.
// Each service: id (slug), title, summary, bullets: [{ id, label, blurb }], image (Unsplash), icon (emoji for now)

export const services = [
    {
        id: 'brand-strategy',
        title: 'Brand & Strategy',
        icon: '🎯',
        summary: 'Positioning, messaging and strategic clarity that compounds growth.',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'market-research', label: 'Market Research & Competitors', blurb: 'Deep qualitative + quantitative landscape analysis to uncover whitespace and differentiators.' },
            { id: 'brand-positioning', label: 'Brand Positioning & Messaging', blurb: 'Clear narrative + value architecture that resonates with your ICP.' },
            { id: 'customer-persona', label: 'Customer Persona Development', blurb: 'Evidence‑based persona frameworks that drive channel & creative decisions.' },
            { id: 'strategy-roadmap', label: 'Digital Strategy Roadmap', blurb: 'Sequenced 90/180-day action plan aligned to revenue goals.' },
            { id: 'content-strategy', label: 'Content Strategy', blurb: 'Topic map + pillar / cluster system to build topical authority.' }
        ]
    },
    {
        id: 'website-platform',
        title: 'Website & Platform',
        icon: '🖥️',
        summary: 'High‑performance experiences engineered to convert & scale.',
        image: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'design-dev', label: 'Design & Development', blurb: 'WordPress, Shopify & custom stacks built with speed + maintainability.' },
            { id: 'landing-pages', label: 'Landing Page Optimization', blurb: 'Modular landing systems iterated via rapid experiments.' },
            { id: 'mobile-app', label: 'Mobile App Development', blurb: 'Cross‑platform product builds focused on retention & UX.' },
            { id: 'ux-ui', label: 'UX / UI Design', blurb: 'Research‑driven flows and component libraries for consistency.' },
            { id: 'cro', label: 'Conversion Rate Optimization', blurb: 'Hypothesis pipeline: test, learn & systemize lifts.' }
        ]
    },
    {
        id: 'search-marketing',
        title: 'Search Marketing',
        icon: '🔎',
        summary: 'Own intent. Technical excellence + compounding content velocity.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'seo', label: 'SEO', blurb: 'Holistic technical + content + authority growth program.' },
            { id: 'keyword-research', label: 'Keyword Research', blurb: 'Demand mapping + difficulty / intent modelling.' },
            { id: 'on-page', label: 'On‑Page Optimization', blurb: 'Semantic structure, internal links, entity enrichment.' },
            { id: 'off-page', label: 'Off‑Page / Backlinks', blurb: 'Digital PR & authority asset development.' },
            { id: 'technical-seo', label: 'Technical SEO', blurb: 'Indexation, performance, structured data, CWV monitoring.' },
            { id: 'local-seo', label: 'Local SEO', blurb: 'GBP optimization + localized landing experiences.' },
            { id: 'sem-ppc', label: 'SEM / PPC', blurb: 'Full‑funnel paid search architecture and optimization.' },
            { id: 'google-ads', label: 'Google Ads', blurb: 'Search, Display, Shopping & Performance Max management.' },
            { id: 'bing-ads', label: 'Bing Ads', blurb: 'Supplemental incremental search capture.' }
        ]
    },
    {
        id: 'social-media',
        title: 'Social Media Marketing',
        icon: '📣',
        summary: 'Narratives, creative & paid distribution that build community and demand.',
        image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'organic-management', label: 'Organic Management', blurb: 'Channel ops, calendars, tone guidelines.' },
            { id: 'creative-production', label: 'Content Creation', blurb: 'Reels, shorts, carousels, motion & variants at scale.' },
            { id: 'posting-scheduling', label: 'Posting & Scheduling', blurb: 'Cadence + tooling + QA workflows.' },
            { id: 'community', label: 'Community Engagement', blurb: 'Systems for replies, moderation & retention.' },
            { id: 'paid-social', label: 'Paid Social Advertising', blurb: 'Full funnel structures + creative iteration loops.' },
            { id: 'facebook-ads', label: 'Facebook / Instagram Ads', blurb: 'Meta account rebuilds & creative stress tests.' },
            { id: 'tiktok-ads', label: 'TikTok Ads', blurb: 'Native storytelling + rapid hook experimentation.' },
            { id: 'linkedin-ads', label: 'LinkedIn Ads', blurb: 'Precision B2B targeting + messaging frameworks.' },
            { id: 'snapchat-ads', label: 'Snapchat Ads', blurb: 'Youth audience reach + complementary scale.' },
            { id: 'twitter-ads', label: 'X (Twitter) Ads', blurb: 'Conversation‑driven demand capture.' }
        ]
    },
    {
        id: 'content-marketing',
        title: 'Content Marketing',
        icon: '✍️',
        summary: 'Multi‑format asset engines that educate, rank & persuade.',
        image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'blog-writing', label: 'Blog & SEO Content', blurb: 'Topical authority + conversion‑intent clusters.' },
            { id: 'video-production', label: 'Video Production', blurb: 'Short + long form pipelines with retention metrics.' },
            { id: 'creative-media', label: 'Photography & Design', blurb: 'On‑brand visual systems & templates.' },
            { id: 'infographics', label: 'Infographics', blurb: 'Data storytelling for links & shares.' },
            { id: 'long-form-assets', label: 'Case Studies & E‑Books', blurb: 'Deep proof & lead magnets.' }
        ]
    },
    {
        id: 'email-crm',
        title: 'Email & CRM',
        icon: '📬',
        summary: 'Lifecycle orchestration to activate, nurture & retain.',
        image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'campaign-automation', label: 'Campaign Design & Automation', blurb: 'Behavioral & promotional flow architecture.' },
            { id: 'nurture-sequences', label: 'Lead Nurture Sequences', blurb: 'Progressive profiling + value ladder messaging.' },
            { id: 'list-segmentation', label: 'List Segmentation & Growth', blurb: 'Capture mechanics, hygiene & enrichment.' },
            { id: 'crm-setup', label: 'CRM Setup & Management', blurb: 'HubSpot / SFDC architecture + data QA.' }
        ]
    },
    {
        id: 'influencer-partnerships',
        title: 'Influencer & Partnerships',
        icon: '🤝',
        summary: 'Leverage 3rd‑party trust & networks to accelerate reach.',
        image: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'influencer-campaigns', label: 'Influencer Campaigns', blurb: 'Talent sourcing, briefs, compliance & analytics.' },
            { id: 'affiliate-program', label: 'Affiliate Program Setup', blurb: 'Platform selection + partner recruitment engine.' },
            { id: 'brand-collabs', label: 'Brand Collaboration Campaigns', blurb: 'Joint offers, co‑marketing & ecosystem plays.' }
        ]
    },
    {
        id: 'analytics-data',
        title: 'Analytics & Data',
        icon: '📊',
        summary: 'Instrumentation & insight loops that de‑risk scaling.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'tracking-setup', label: 'Tracking & Analytics Setup', blurb: 'GA4, GTM, pixels & server events.' },
            { id: 'dashboards', label: 'KPI Dashboards & Reports', blurb: 'Executive + ops level visibility.' },
            { id: 'ab-testing', label: 'A/B Testing', blurb: 'Experiment design, stats, decision cadence.' },
            { id: 'attribution', label: 'Attribution Modeling', blurb: 'Multi‑touch clarity for budget allocation.' }
        ]
    },
    {
        id: 'advanced-emerging',
        title: 'Advanced & Emerging',
        icon: '🚀',
        summary: 'Edge channels & automation to unlock unfair advantages.',
        image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'automation-ai', label: 'Automation & Chatbots', blurb: 'AI conversation flows & enrichment loops.' },
            { id: 'sms-whatsapp', label: 'SMS & WhatsApp', blurb: 'Lifecycle + promotional orchestration.' },
            { id: 'podcast', label: 'Podcast Production', blurb: 'End‑to‑end planning & distribution.' },
            { id: 'webinars', label: 'Webinars & Virtual Events', blurb: 'Acquisition + nurturing events engine.' },
            { id: 'ar-vr', label: 'AR / VR Campaigns', blurb: 'Immersive experiential marketing.' }
        ]
    },
    {
        id: 'reputation-experience',
        title: 'Reputation & CX',
        icon: '⭐',
        summary: 'Trust and feedback loops that compound lifetime value.',
        image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1000&q=60',
        bullets: [
            { id: 'orm', label: 'Online Reputation Management', blurb: 'Monitoring + narrative defense.' },
            { id: 'review-generation', label: 'Review Generation', blurb: 'Automated asks & amplification.' },
            { id: 'feedback-loops', label: 'Customer Feedback Loops', blurb: 'Voice-of-customer systems & analysis.' }
        ]
    }
]

export function getService(id) { return services.find(s => s.id === id) }
