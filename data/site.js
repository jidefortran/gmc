export const site = {
  name: "Grace & Mercy Care Services",
  legalName: "Grace & Mercy Care Services Pty Ltd",
  shortName: "Grace & Mercy",
  tagline: "NDIS supports built around the life you want.",
  description:
    "A registered NDIS provider in Perth, Western Australia, offering supported independent living, recovery accommodation, support coordination, psychosocial recovery coaching, short term stays and community participation.",
  url: "https://www.gmcservices.net.au",
  abn: "14 659 977 876",
  phone: "0404 185 123",
  phoneHref: "tel:+61404185123",
  email: "info@gmcservices.net.au",
  address: {
    street: "25 Hayford Road",
    suburb: "Haynes",
    state: "WA",
    postcode: "6112",
    country: "Australia",
  },
  serviceArea: "Haynes, Armadale, Gosnells and the wider Perth metropolitan area",
  hours: [
    { days: "Monday – Friday", time: "9:00am – 5:00pm" },
    { days: "Public holidays", time: "Closed" },
    { days: "Supported accommodation", time: "Staffed 24 hours" },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61566851346836" },
    { label: "Twitter", href: "https://www.twitter.com/GraceMercyCare" },
  ],
};

export const nav = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const about = {
  intro: [
    "Grace & Mercy Care Services Pty Ltd is a disability support services provider based in Perth, Western Australia. We are committed to partnering with people living with disabilities in order to improve their quality of life utilising a person-centred approach. This commitment is reflected in our values, our vision, our culture, and at the foundation of everything we do. Our commitment includes supporting and empowering Aboriginal and Torres Strait Islander people, and those from culturally and linguistically diverse backgrounds.",
    "We actively promote the safety of children. Our services include assistance with social and community participation, psychosocial recovery coaching, support coordination, independent living, supported independent living, and short term accommodation. Staffing levels include registered nurses, enrolled nurses, disability support workers, mental health support workers, psychosocial recovery coaches, and support coordinators. All of our operations adhere strictly to NDIS standards. With a team of highly enthusiastic, energetic, compassionate and friendly employees, we provide high-quality, effective and person-centred support services to every individual we care for.",
  ],
};

export const contactIntro =
  "Founded with the core mission of bridging the gap between individuals with disabilities and the critical services they require, we understand the unique challenges faced by this community. With a focus on empowerment, independence and inclusivity, we're here to assist you every step of the way.";

export const values = [
  {
    title: "Relationships",
    body: "We believe that relationships are key in any organisation. Building trust is more than just working together — it is understanding one another, and inspiring positive change through strong, enduring relationships.",
  },
  {
    title: "Imagination",
    body: "We understand the importance of imagination in identifying what is possible and what works. We are always open to new ways of doing things, and we do so openly and willingly.",
  },
  {
    title: "Responsiveness",
    body: "Our approach to solving problems requires agility and collaboration to meet individual and community needs.",
  },
  {
    title: "Courage",
    body: "In times of change, we find the courage to challenge norms and the drive to make a difference, building a community that inspires action for personal growth.",
  },
  {
    title: "Respect",
    body: "In addition to respecting people's rights, we strive to see the world from a diverse and inclusive perspective.",
  },
  {
    title: "Empowerment",
    body: "Supporting participants to make their own choices, and to set and pursue their own goals.",
  },
];

export const services = [
  {
    slug: "supported-independent-living",
    title: "Supported Independent Living",
    short: "SIL",
    excerpt:
      "Shared housing tailored to residents, staffed around the clock, with daily living skills taught alongside day-to-day support.",
    image: "/images/service-sil.jpg",
    imageAlt: "A bright shared living room with an open kitchen and natural light",
    ndis: "Assistance with Daily Life — Supported Independent Living",
    intro:
      "Grace & Mercy Care Services offers a range of Supported Independent Living (SIL) options. You have the choice of a room in one of our housing units, shared between two and four people who co-habit and share communal areas. Accommodation is tailored to suit the needs of the people living there.",
    sections: [
      {
        heading: "Staffing",
        body: "Our SIL homes are staffed with one to two support workers on a 24-hour basis, providing support and assistance with cooking, appointments, shopping and other daily tasks.",
      },
      {
        heading: "Building independence",
        body: "Staff also teach daily living skills to help residents progress toward full independent living, alongside the day-to-day support they provide.",
      },
    ],
    points: [
      "Choice of room within shared housing units",
      "Shared between 2–4 people, tailored to residents' needs",
      "1–2 staff on site, 24 hours a day",
      "Support with cooking, appointments and shopping",
      "Daily living skills taught to build toward independence",
    ],
  },
  {
    slug: "support-coordination",
    title: "Support Coordination",
    short: "Coordination",
    excerpt:
      "Coordinators who know Western Australia's local services, with written reporting for your plan reviews.",
    image: "/images/service-coordination.jpg",
    imageAlt: "Two people reviewing documents together at a kitchen table",
    ndis: "Capacity Building — Support Coordination",
    intro:
      "We offer support coordination across Western Australia. Our qualified, experienced Support Coordinators are familiar with local services and can give you the information you need to make the best choice for your plan.",
    sections: [
      {
        heading: "Reporting and reviews",
        body: "We provide written reports, as required, on outcomes, successes and barriers, to support your participant funding reviews.",
      },
      {
        heading: "Building toward independence",
        body: "We work to strengthen and enhance your abilities so you can coordinate supports and participate in your community with greater independence over the longer term.",
      },
      {
        heading: "Getting started",
        body: "If your NDIS plan includes support coordination, we'd like to sit down and discuss your objectives and what you expect from a Support Coordinator.",
      },
    ],
    points: [
      "Support coordination delivered across Western Australia",
      "Coordinators familiar with local services and providers",
      "Written reports on outcomes for your plan reviews",
      "Focus on building your independence over the longer term",
    ],
  },
  {
    slug: "psychosocial-recovery-coaching",
    title: "Psychosocial Recovery Coach",
    short: "Recovery Coach",
    excerpt:
      "A coach who helps you make sense of your plan, connects you to services, and works with you through a crisis.",
    image: "/images/service-recovery-coach.jpg",
    imageAlt: "Two people walking and talking together along a tree-lined path",
    ndis: "Capacity Building — Psychosocial Recovery Coaching",
    intro:
      "Our Psychosocial Recovery Coaches help NDIS participants make sense of their plan and get the most from their funding.",
    sections: [
      {
        heading: "Connecting you to support",
        body: "Recovery Coaches connect you to the services you need — both NDIS-funded and community supports — and coach you to work toward your own goals.",
      },
      {
        heading: "When things get hard",
        body: "Coaches help you prepare for a crisis and work through it if one arises.",
      },
      {
        heading: "Working with your team",
        body: "Coaches work closely with your support workers to make sure they understand how best to support you in achieving your goals.",
      },
    ],
    points: [
      "Help to understand your plan and use your funding well",
      "Connections to NDIS and community supports",
      "Coaching toward your own goals",
      "Crisis preparation and support if things get hard",
      "Close work with your support workers",
    ],
  },
  {
    slug: "recovery-accommodation",
    title: "Recovery Accommodation",
    short: "Recovery",
    excerpt:
      "Staffed accommodation for people recovering from mental illness while awaiting transition into the community.",
    image: "/images/service-recovery-accom.jpg",
    imageAlt: "A calm, simply furnished bedroom with morning light through a window",
    ndis: "Assistance with Daily Life — Recovery Accommodation",
    intro:
      "Recovery accommodation is designed to help people living with mental illness recover while they wait to transition into the community.",
    sections: [
      {
        heading: "Support after discharge",
        body: "It's especially suited to people recently discharged from hospital, helping you build daily living skills and physical and mental capacity before re-establishing yourself in the community.",
      },
      {
        heading: "Staffing",
        body: "This accommodation is fully staffed around the clock, 24 hours a day, seven days a week, with qualified staff.",
      },
    ],
    points: [
      "Support for people recovering from mental illness",
      "Suited to recent hospital discharge",
      "Builds daily living skills and physical and mental capacity",
      "Staffed 24/7 with qualified staff",
    ],
  },
  {
    slug: "short-term-accommodation",
    title: "Respite / Short Stay Accommodation",
    short: "Respite",
    excerpt:
      "Fully equipped, 24/7 staffed accommodation from a few hours to several weeks.",
    image: "/images/service-respite.jpg",
    imageAlt: "A comfortable, accessible guest room with a made bed and armchair",
    ndis: "Core — Short Term Accommodation (including respite)",
    intro:
      "Our respite / short term accommodation is fully furnished and equipped, and open 24/7, staffed by qualified support workers for the length of your stay.",
    sections: [
      {
        heading: "Length of stay",
        body: "You can stay anywhere from a few hours to several weeks, depending on how much time you'd like, with comfort built in throughout.",
      },
      {
        heading: "Designed for convenience",
        body: "The accommodation is designed to offer the most convenient experience for the people staying with us.",
      },
    ],
    points: [
      "Fully equipped, modern accommodation",
      "Staffed 24/7 by qualified support workers",
      "Stays from a few hours to several weeks",
      "Designed for comfort and convenience",
    ],
  },
  {
    slug: "community-participation",
    title: "Community Participation",
    short: "Community",
    excerpt:
      "Programs built around your own goals — in a group or one-to-one — with staff experienced in complex needs.",
    image: "/images/service-community.jpg",
    imageAlt: "People enjoying a community garden and market on a sunny day",
    ndis: "Core — Assistance with Social & Community Participation",
    intro:
      "Social interaction and community engagement are essential parts of daily life, and we believe in supporting you to connect and participate in your community every day.",
    sections: [
      {
        heading: "Built around your goals",
        body: "We work closely with you and your support network to identify the community-based activities you're most interested in, the goals you'd like to achieve, and the best way to get there — then design a program around them.",
      },
      {
        heading: "Group or one-to-one",
        body: "Activities take place in the community, either within a group or one-to-one with a Grace & Mercy Care Services support worker, matched to your current social and communication skills.",
      },
      {
        heading: "Experienced with complex needs",
        body: "Our staff are experienced working with a diverse range of disabilities, including complex needs, and work with you and your loved ones to make sure every outing meets your goals.",
      },
    ],
    points: [
      "Programs built around your own goals and interests",
      "Activities in a group or one-to-one",
      "Matched to your current social and communication skills",
      "Staff experienced with complex needs",
    ],
  },
];

export const faqs = [
  {
    q: "Do I need to be an NDIS participant to use your services?",
    a: "Most of our supports are funded through an NDIS plan. We work with plan-managed and self-managed participants of all age groups. If you don't have a plan yet, or you're waiting on an access decision, contact us anyway and we can point you in the right direction.",
  },
  {
    q: "Which areas do you cover?",
    a: "We're based in Haynes and deliver support coordination across Western Australia, with other supports focused on the Perth metropolitan area. For supported and short term accommodation, location depends on current vacancies — ask us what's available.",
  },
  {
    q: "How is my plan managed with you?",
    a: "We work with plan and self-managed participants. Supports are quoted against NDIS line items so you can see exactly which part of your plan is being drawn on.",
  },
  {
    q: "Can I choose my support workers?",
    a: "Yes. We introduce workers before they start, and if the match isn't right you can ask for a change. Consistency matters, so we try to get it right early.",
  },
  {
    q: "How quickly can support start?",
    a: "Community and daily living supports can often start within a week or two of a service agreement. Accommodation depends on vacancies and, where there are housemates, on the matching process.",
  },
  {
    q: "What happens if I want to make a complaint?",
    a: "Tell us directly by phone or email and we'll work through it with you. You can also raise concerns with the NDIS Quality and Safeguards Commission at any time — see our Complaints page for the full process.",
  },
  {
    q: "Are you a registered NDIS provider?",
    a: "Yes. You can confirm our current registration on the NDIS Quality and Safeguards Commission provider register.",
  },
];

export const steps = [
  {
    title: "Get in touch",
    body: "A short phone call, email or message. Tell us roughly what you're after — you don't need your plan in front of you.",
  },
  {
    title: "Sit down together",
    body: "We meet at your place or ours, go through your goals and your plan, and tell you honestly what we can and can't cover.",
  },
  {
    title: "Agree the supports",
    body: "A clear service agreement with hours, line items and costs written out, plus who your key contacts are.",
  },
  {
    title: "Start and review",
    body: "Supports begin, and we check in early and often to make sure things are working the way you expect.",
  },
];

/**
 * Team bios and testimonials are left empty on purpose — real names, roles
 * and quotes need to come from the business, not be invented. The About
 * and homepage sections that read these arrays only render once there's
 * real content here. See README.md → "Adding your team and testimonials".
 */
export const team = [
  // { name: "", role: "", bio: "" },
];

export const testimonials = [
  // { quote: "", name: "", context: "" }, // e.g. context: "Parent of a participant"
];

// Published nationally by the NDIS Quality and Safeguards Commission —
// safe to display on any registered provider's site.
export const ndisCommission = {
  complaintsPhone: "1800 035 544",
  complaintsPhoneHref: "tel:1800035544",
  website: "https://www.ndiscommission.gov.au",
};
