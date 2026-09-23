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
    role = "",
    availability = "",
    experience = "",
    message = "",
    company = "",
  } = req.body || {};

  if (company) return res.status(200).json({ ok: true }); // honeypot

  if (!name?.trim() || !email?.trim()) {
    return res.status(400).json({ error: "Name and email are required." });
  }
  if (!isEmail(email.trim())) {
    return res.status(400).json({ error: "That email address doesn't look right." });
  }

  const applicant = {
    receivedAt: new Date().toISOString(),
    name: name.trim(),
    email: email.trim(),
    phone: String(phone).trim(),
    role: String(role).trim(),
    availability: String(availability).trim(),
    experience: String(experience).trim(),
    message: String(message).trim(),
  };

  console.log("[careers]", applicant);

  return res.status(200).json({ ok: true });
}
