/**
 * Enquiry endpoint.
 *
 * Works out of the box (validates + logs). To actually deliver mail, set
 * SENDGRID_API_KEY and CONTACT_TO in your environment and uncomment the
 * SendGrid block below after running: npm i @sendgrid/mail
 */

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    name,
    email,
    phone = "",
    service = "",
    subject = "",
    message = "",
    company = "",
  } = req.body || {};

  // honeypot: pretend success so bots don't retry
  if (company) return res.status(200).json({ ok: true });

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: "Name and email are required." });
  }
  if (!isEmail(email.trim())) {
    return res.status(400).json({ error: "That email address doesn't look right." });
  }
  if (message.length > 5000) {
    return res.status(400).json({ error: "Message is too long." });
  }

  const enquiry = {
    receivedAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim(),
    phone: String(phone).trim(),
    service: String(service).trim(),
    subject: String(subject).trim(),
    message: String(message).trim(),
  };

  // --- Delivery -----------------------------------------------------------
  // const sgMail = require("@sendgrid/mail");
  // sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  // await sgMail.send({
  //   to: process.env.CONTACT_TO,
  //   from: process.env.CONTACT_FROM,
  //   replyTo: enquiry.email,
  //   subject: `Website enquiry — ${enquiry.name}${enquiry.service ? ` (${enquiry.service})` : ""}`,
  //   text: Object.entries(enquiry).map(([k, v]) => `${k}: ${v}`).join("\n"),
  // });

  console.log("[enquiry]", enquiry);

  return res.status(200).json({ ok: true });
}
