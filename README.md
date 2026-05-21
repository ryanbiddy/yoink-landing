# Yoink Landing

Landing page for Yoink v2, the YouTube layer for Claude, ChatGPT, and local AI agents.

## Development

```bash
npm install
npm run dev
```

The site is built with Next.js 14, TypeScript, and Tailwind CSS for Vercel.

## Search and GEO basics

Set the canonical production URL in Vercel so metadata, Open Graph, JSON-LD,
`robots.txt`, and `sitemap.xml` all point at the same place:

```bash
NEXT_PUBLIC_CANONICAL_URL=https://your-production-domain.example
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=your-production-domain.example
NEXT_PUBLIC_WINDOWS_DOWNLOAD_URL=https://github.com/ryanbiddy/yoink/releases/latest
```

If the canonical URL variable is not set, the site falls back to
`https://yoink-landing-five.vercel.app`. `NEXT_PUBLIC_CANONICAL_URL` is the
single-line domain swap to use when the final Yoink domain goes live. Plausible
is only loaded when `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` is set. The Windows download
URL should point at the latest GitHub release until the approved Chrome Web
Store listing is ready.

## Roadmap waitlists

The "What's coming next" section posts feature-specific signups to
`POST /api/waitlist`.

Required Vercel environment variable:

```bash
RESEND_API_KEY=re_xxxxxxxxx
```

With only `RESEND_API_KEY` set, the route creates or updates a Resend Contact
with these properties:

```text
yoink_waitlists
yoink_waitlist_last_feature
yoink_waitlist_last_label
yoink_waitlist_last_audience
yoink_waitlist_source
yoink_waitlist_signed_up_at
yoink_waitlist_mac
yoink_waitlist_multi_platform
yoink_waitlist_projects
yoink_waitlist_podcast
```

To also send signups into separate Resend Audiences, create these four
audiences in Resend and add their IDs to Vercel:

```bash
RESEND_AUDIENCE_ID_MAC=...
RESEND_AUDIENCE_ID_MULTI_PLATFORM=...
RESEND_AUDIENCE_ID_PROJECTS=...
RESEND_AUDIENCE_ID_PODCAST=...
```

Suggested audience names:

```text
yoink-v2-mac-waitlist
yoink-future-multi-platform-waitlist
yoink-future-projects-waitlist
yoink-v2-podcast-waitlist
```

To retrieve the waitlist, open Resend Contacts and filter/export by the
`yoink_waitlist_*` properties, or use the configured per-feature Audiences if
the audience IDs are set. The route does not send confirmation emails.
