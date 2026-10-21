# Helio Support — AI Support Dashboard Starter

A responsive customer-support inbox template built with Node.js + Express and vanilla HTML/CSS/JS. Designed as a source-code product that buyers can customize.

## What works in this starter
- Responsive support dashboard and conversation list
- Search and inbox filters (All, Assigned to me, Unassigned)
- Conversation detail panel using clearly fictional `.example.test` contacts
- Deterministic reply-draft endpoint with tone selection and basic issue categories
- Health endpoint at `/api/health`
- Railway-compatible `PORT` binding and production start command
- No API keys required to run the demo

## Important limitations
This is a **demo/template**, not a production support platform. It does not connect to email, chat, CRM, ticketing, payment, or AI-provider services. Draft generation is deterministic template logic, not an LLM. Sending replies, authentication, team permissions, persistent database storage, privacy workflows, and real analytics are not implemented. Do not enter real customer data. The UI includes demo metrics and sample conversations.

## Requirements
- Node.js 20+
- npm

## Run locally
```bash
npm install
npm start
```
Open `http://localhost:3000`. Check `http://localhost:3000/api/health`.

## Deploy to Railway
1. Put this folder in a Git repository you control.
2. Create a new Railway project and deploy from that repository.
3. Railway should detect the Node app from `package.json`. Start command: `npm start`.
4. Ensure the service listens on `0.0.0.0` and uses `process.env.PORT` (already configured).
5. After deployment, open the generated domain and check `/api/health`.
6. Keep secrets out of source control. This demo needs no environment variables or API keys.

**Cost note:** Railway pricing and trial/free allowances can change. Confirm the current account pricing before deployment; do not assume persistent hosting is free. This package can be tested locally at no hosting cost.

## Suggested production roadmap
1. Add authentication and workspace-level authorization.
2. Add a database and migrations; scope every ticket to a workspace.
3. Connect one inbox provider using official APIs and least-privilege scopes.
4. Add a server-side AI provider adapter with strict input limits and an explicit no-send-by-default policy.
5. Add human approval, audit logs, rate limits, data retention/deletion, and error monitoring.
6. Add automated tests for auth, tenant isolation, draft quality, provider failures, and empty/large inboxes.

## Project structure
```text
.
├── package.json
├── server.js
├── public/
│   ├── index.html
│   ├── styles.css
│   └── app.js
├── .env.example
├── LICENSE
├── SELLER-CHECKLIST.md
└── README.md
```

## License
See `LICENSE`. Choose and verify your final commercial license before distributing the package.
