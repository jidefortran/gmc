const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const {
    participantName,
    participantAge = "",
    ndisNumber = "",
    planType = "",
    servicesRequested = [],
    urgency = "Standard",
    referrerName,
    referrerOrg = "",
    referrerRole = "",
    referrerPhone = "",
    referrerEmail,
    notes = "",
    company = "",
  } = req.body || {};

  if (company) return res.status(200).json({ ok: true }); // honeypot

  if (!participantName?.trim() || !referrerName?.trim() || !referrerEmail?.trim()) {
    return res.status(400).json({ error: "Participant name, your name and your email are required." });
  }
  if (!isEmail(referrerEmail.trim())) {
    return res.status(400).json({ error: "That email address doesn't look right." });
  }

  const referral = {
    receivedAt: new Date().toISOString(),
    participantName: participantName.trim(),
    participantAge: String(participantAge).trim(),
    ndisNumber: String(ndisNumber).trim(),
    planType: String(planType).trim(),
    servicesRequested: Array.isArray(servicesRequested) ? servicesRequested : [],
    urgency: String(urgency).trim(),
    referrerName: referrerName.trim(),
    referrerOrg: String(referrerOrg).trim(),
    referrerRole: String(referrerRole).trim(),
    referrerPhone: String(referrerPhone).trim(),
    referrerEmail: referrerEmail.trim(),
    notes: String(notes).trim(),
  };

  // Wire this up the same way as pages/api/contact.js (see the commented
  // SendGrid block there). Consider routing "Urgent" referrals to an SMS
  // alert or a different inbox than standard ones.
  console.log("[referral]", referral);

  return res.status(200).json({ ok: true });
}
