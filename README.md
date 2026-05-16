# Yoink Landing

Landing page for Yoink, a Chrome extension that turns YouTube videos into structured input for Claude or ChatGPT.

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
NEXT_PUBLIC_SITE_URL=https://your-production-domain.example
```

If the variable is not set, the site falls back to the current Vercel URL.
Before launch, make sure this is not pointed at a domain owned by another Yoink
product.

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
yoink_waitlist_channel_decoder
yoink_waitlist_niche_corpus
yoink_waitlist_podcast
```

To also send signups into separate Resend Audiences, create these four
audiences in Resend and add their IDs to Vercel:

```bash
RESEND_AUDIENCE_ID_MAC=...
RESEND_AUDIENCE_ID_CHANNEL_DECODER=...
RESEND_AUDIENCE_ID_NICHE_CORPUS=...
RESEND_AUDIENCE_ID_PODCAST=...
```

Suggested audience names:

```text
yoink-v2-mac-waitlist
yoink-v2-channel-decoder-waitlist
yoink-v2-niche-corpus-waitlist
yoink-v2-podcast-waitlist
```

To retrieve the waitlist, open Resend Contacts and filter/export by the
`yoink_waitlist_*` properties, or use the configured per-feature Audiences if
the audience IDs are set. The route does not send confirmation emails.
