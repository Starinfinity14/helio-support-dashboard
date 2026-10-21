import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";

const app = express();
const port = Number(process.env.PORT || 3000);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

app.disable("x-powered-by");
app.use(express.json({ limit: "100kb" }));
app.use(express.static(path.join(__dirname, "public"), { maxAge: "1h" }));

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, app: "Helio Support", mode: "demo", timestamp: new Date().toISOString() });
});

app.post("/api/draft-reply", (req, res) => {
  const message = String(req.body?.message || "").trim().slice(0, 3000);
  const tone = ["friendly", "professional", "concise"].includes(req.body?.tone) ? req.body.tone : "friendly";
  if (!message) return res.status(400).json({ error: "Add a customer message first." });

  // Deliberately deterministic demo logic. Replace with a server-side AI provider integration.
  const lower = message.toLowerCase();
  let core = "Thanks for reaching out. I’m checking this for you and will follow up with the next steps shortly.";
  if (/(refund|return|money back)/.test(lower)) {
    core = "Thanks for contacting us about your refund. I’ll review the order details and our refund policy, then confirm the available next steps.";
  } else if (/(shipping|delivery|tracking|where.*order)/.test(lower)) {
    core = "Thanks for checking in. I’ll look into the latest shipping status and share the tracking details as soon as they’re confirmed.";
  } else if (/(cancel|cancellation)/.test(lower)) {
    core = "Thanks for letting us know. I’ll check the order status and confirm whether cancellation is still available before making any changes.";
  } else if (/(broken|damaged|defect|not working)/.test(lower)) {
    core = "I’m sorry the item isn’t working as expected. Please share your order number and, if possible, a brief description of the issue so we can review the best resolution.";
  }
  const prefix = tone === "professional" ? "Hello, " : tone === "concise" ? "Thanks — " : "Hi there, ";
  const reply = prefix + core.charAt(0).toLowerCase() + core.slice(1) + (tone === "concise" ? "" : "\n\nBest,\nSupport Team");
  res.json({ reply, mode: "template-demo", note: "Demo reply only: connect an AI provider and your support policy before production use." });
});

app.get("*", (_req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

app.listen(port, "0.0.0.0", () => {
  console.log(`Helio Support listening on port ${port}`);
});