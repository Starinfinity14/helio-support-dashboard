# Seller packaging checklist

## Before listing
- [ ] Run `npm install` and `npm start` on a clean Node.js 20+ environment.
- [ ] Run `npm run check`.
- [ ] Open `/api/health` and verify JSON response.
- [ ] Test search, inbox filters, conversation selection, reply drafting and demo-mode warning.
- [ ] Verify that no real customer data, API secrets, personal access tokens, or private credentials are included.
- [ ] Replace the placeholder license with a clear license reviewed for the chosen sales model.
- [ ] Add screenshots captured from the actual running build.
- [ ] Confirm marketplace seller-age, identity, tax and payout rules before creating an account.
- [ ] State clearly that AI provider integration, real inbox integrations, authentication, persistence and message sending are not included.
- [ ] Verify Railway pricing and buyer deployment steps at time of listing.

## Accurate product positioning
**Suggested title:** Helio Support — AI-Ready Support Inbox Dashboard (Node.js Template)

**Included:** responsive dashboard UI, demo conversations, filters/search, deterministic reply-draft endpoint, health check, Railway deployment notes.

**Not included:** live AI model, connected inbox, database, authentication, billing, real sending, or production security hardening.

Do not claim production-ready AI, live integrations, verified Railway deployment, or marketplace approval until each has been independently tested.
