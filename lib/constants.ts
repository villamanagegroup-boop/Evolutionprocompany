export const BRAND = {
  colors: {
    purple: "#7B2FBE",
    magenta: "#C2185B",
    red: "#E8334A",
    gold: "#F5C842",
    dark: "#0D0A14",
    cream: "#FFF8F0",
    gradient: "linear-gradient(135deg, #7B2FBE, #C2185B, #E8334A)",
  },
};

export const SHOWS = [
  {
    season: "Spring",
    performanceMonth: "April",
    trainingMonths: "January – March",
    description:
      "Our opening showcase of the year. A high-energy fusion of contemporary dance and precision ice work that sets the tone for the season.",
    theme: "Ignite",
    color: "#7B2FBE",
  },
  {
    season: "Summer",
    performanceMonth: "August",
    trainingMonths: "May – July",
    description:
      "Our most ambitious production. Full theatrical storytelling with original choreography, live vocals, and touring elements.",
    theme: "Ascend",
    color: "#C2185B",
  },
  {
    season: "Holiday",
    performanceMonth: "December",
    trainingMonths: "September – November",
    description:
      "The signature year-end spectacular. Multi-act production featuring the full company, guest artists, and audience favorites.",
    theme: "Illuminate",
    color: "#E8334A",
  },
];

export const STATS = [
  { value: "3", label: "Productions Per Year" },
  { value: "3", label: "Company Tracks" },
  { value: "6+", label: "Age Eligible" },
  { value: "3", label: "Phase Growth Plan" },
];

export const DISCIPLINES = [
  "Figure Skater",
  "Contemporary Dancer",
  "Urban / Hip-Hop",
  "Ballet",
  "Both (Ice & Dance)",
  "Other",
];

export const MEMBERSHIP_TIERS = [
  {
    name: "Company Member",
    price: "$175/mo",
    description: "The core EPC experience — productions, rehearsals, creative community, and real performance opportunities.",
    features: [
      "Full participation in EPC productions and showcases",
      "Company rehearsals and performance preparation",
      "Ensemble and principal casting consideration",
      "Performance-focused choreography and staging",
      "Acting, storytelling, and stage presentation development",
      "Collaborative work with skaters, dancers, and artists across disciplines",
      "Select workshops, master classes, and guest experiences",
      "Features in EPC media and promotional content",
      "Company retreats, outings, and community gatherings",
      "First access to production announcements, auditions, and opportunities",
    ],
    featured: false,
  },
  {
    name: "Professional Development Track",
    price: "$225/mo",
    description: "An optional add-on for Company Members who want additional industry-focused opportunities and career development experiences. Designed for performers interested in expanding their exposure to professional opportunities, creative leadership, and industry connections.",
    castingNote: "This upgrade does not affect casting. All Company Members may be considered for principal roles based on performance readiness and production needs.",
    features: [
      "All Company Member benefits",
      "Priority consideration for corporate and specialty performances",
      "Professional development workshops and industry sessions",
      "NIL partnerships and brand collaboration opportunities",
      "Talent development guidance and portfolio building",
      "Professional media features and performance reel opportunities",
      "Greater visibility in company promotional content",
      "Leadership and mentorship opportunities within EPC",
      "Creative contribution to select productions and projects",
      "Priority access to workshops, intensives, and special events",
    ],
    featured: true,
  },
];

export const WHY_JOIN = [
  {
    title: "Paid Performance Opportunities",
    description:
      "Senior Company performers (12+) may be selected for paid performance opportunities through EPC productions, special events, and company projects. EPC is designed to create real-world performance experiences for artists who are ready to take their craft seriously.",
  },
  {
    title: "Professional Development",
    description:
      "Train with experienced choreographers and industry professionals in choreography, performance quality, conditioning, flexibility, and technique. Each division — Flex, Junior, and Senior — is structured to support growth, confidence, and stage-ready performance skills.",
  },
  {
    title: "Talent Pathways",
    description:
      "Outstanding performers may be introduced to EPC's broader talent network, connecting them with casting opportunities, touring productions, and industry professionals. EPC is committed to helping performers grow both on stage and beyond the company.",
  },
];

export const GROWTH_PHASES = [
  {
    phase: "Phase 1",
    title: "DMV Launch",
    description:
      "Establish the company in the DC/MD/VA market. Build the core company roster, deliver three high-quality productions per year, and develop the EPC brand identity in the regional performance community.",
    status: "active",
  },
  {
    phase: "Phase 2",
    title: "East Coast Touring",
    description:
      "Expand productions to major East Coast venues. Partner with regional touring circuits, grow the company to 30+ members, and establish EPC as a recognized touring ice-dance company.",
    status: "upcoming",
  },
  {
    phase: "Phase 3",
    title: "National Expansion",
    description:
      "Full national touring circuit with 50+ member roster, corporate sponsorships, and television/streaming production partnerships. Evolution Production Company becomes a household name.",
    status: "future",
  },
];

export const AUDITION_TIERS = [
  {
    name: "Junior Company",
    ages: "Ages 6–11",
    description:
      "Full company membership for younger performers. Juniors train and perform alongside the Senior Company with age-appropriate roles and a dedicated development curriculum.",
    requirements: [
      "Ages 6–11 at time of audition",
      "Basic skating or dance experience preferred",
      "Solo (60 seconds) required only for those seeking principal consideration",
      "Parent/guardian consent required",
      "Commitment to full training cycle",
    ],
    payout: "Priority consideration for Senior Company auditions upon age or skill readiness",
    color: "#7B2FBE",
  },
  {
    name: "Senior Company",
    ages: "Ages 12+",
    description:
      "The advanced level of EPC. Senior members commit to the full season, perform in all productions, and earn real compensation. Principal and corporate spots are earned through audition — all members perform.",
    requirements: [
      "Ages 12+ at time of audition",
      "Intermediate to advanced skill level preferred",
      "Solo (90 seconds) required only for those seeking principal consideration",
      "Resume or performance history helpful, not required",
      "Full season commitment required",
    ],
    payout: "Compensation per show performed and year-end net profit share",
    color: "#C2185B",
  },
  {
    name: "Flex Track",
    ages: "All Ages",
    description:
      "For performers who are new to skating or dance and building foundational skills. Flex members perform in all three annual productions in ensemble roles. Principal role eligibility is skill-based — as technique and stage readiness develop, so does your casting opportunity.",
    requirements: [
      "Open to all ages and experience levels",
      "No solo required — bring your current skill level",
      "Parent/guardian consent required for minors",
      "Weekly development sessions building toward production readiness",
      "Performs in ensemble roles across all 3 productions",
    ],
    payout: "Development track — ensemble performer in all productions, principal-eligible as skills advance",
    color: "#E8334A",
  },
];

export const FAQ = [
  {
    question: "Do I need to skate AND dance?",
    answer:
      "No. We welcome skaters, dancers, and performers who specialize in one discipline. Multi-disciplined artists are welcome, but specialization is valued.",
  },
  {
    question: "How many shows will I perform in?",
    answer:
      "All company members appear in productions. Performance opportunities are a core part of EPC — roles and casting vary based on track, production needs, and readiness. Principal and corporate spots are earned through the audition process.",
  },
  {
    question: "What is the Flex Track?",
    answer:
      "The Flex Track is a development pathway for performers who are new to skating or dance. It's a structured program with a clear path into Junior or Senior Company once foundational skills are established.",
  },
  {
    question: "What does training look like week-to-week?",
    answer:
      "Two sessions per week: one ice-based and one off-ice. Sessions cover choreography, conditioning, acting, flexibility, and technique depending on the training phase.",
  },
  {
    question: "Who covers travel costs for touring shows?",
    answer:
      "Members are responsible for their own travel to touring shows. EPC provides advance scheduling so you can plan accordingly.",
  },
  {
    question: "When are the next auditions?",
    answer:
      "Auditions are coming to the DMV area soon. Register your interest now to be first notified of dates, locations, and requirements.",
  },
  {
    question: "Can Junior Company members move to Senior Company?",
    answer:
      "Yes. Juniors who age into the 12+ range or demonstrate Senior-level skill are given priority consideration in Senior Company auditions.",
  },
  {
    question: "Do I have to leave my current studio, club, or team to join EPC?",
    answer:
      "No. EPC is designed to complement your current training and performance environment, not replace it.",
  },
  {
    question: "Who can join EPC?",
    answer:
      "EPC is open to skaters, dancers, and other performers depending on current productions, auditions, and company needs.",
  },
  {
    question: "What is the difference between Company Members and the Professional Development Track?",
    answer:
      "Company Membership is the core EPC experience. The Professional Development Track is an optional add-on for members who want additional industry-focused opportunities, career development, and expanded visibility within the company.",
  },
  {
    question: "Will all members perform?",
    answer:
      "Performance opportunities are a core part of EPC, though roles and casting may vary based on production needs, membership type, and readiness.",
  },
  {
    question: "Are there special events outside of rehearsals and performances?",
    answer:
      "Yes. EPC plans to offer workshops, gatherings, outings, and additional creative experiences as the company continues to grow.",
  },
];

export const RINK_PARTNER_BENEFITS = [
  {
    title: "Official EPC Partner Designation",
    description:
      "Your rink becomes a named Official EPC Partner Rink — included in all EPC marketing, digital presence, and production materials.",
  },
  {
    title: "Priority Rehearsal Scheduling",
    description:
      "EPC locks in recurring rehearsal blocks at your facility, giving you dependable, recurring revenue throughout the training season.",
  },
  {
    title: "Co-Hosted Events & Revenue Share",
    description:
      "Partner on EPC production nights and community showcases held at your rink. Revenue share model — your facility, your cut.",
  },
  {
    title: "Joint Marketing & Social Features",
    description:
      "EPC promotes your rink across all social channels, email audiences, and production programs. Your brand reaches our growing performer and family network.",
  },
  {
    title: "EPC Talent for Rink Events",
    description:
      "Access to EPC performers for rink open houses, holiday showcases, and community events — at a preferred partner rate.",
  },
  {
    title: "Custom Partnership Package",
    description:
      "All rink partnerships are structured around your facility's needs and calendar. We build the deal around you.",
  },
];

export const CORPORATE_PARTNER_TIERS = [
  {
    name: "Supporting Sponsor",
    level: "Entry",
    features: [
      "Logo in production programs",
      "Social media feature (1x per production)",
      "2 VIP tickets per show",
      "Certificate of sponsorship",
    ],
  },
  {
    name: "Presenting Sponsor",
    level: "Premier",
    features: [
      "Logo on all production marketing materials",
      "Named in all show announcements",
      "Dedicated social media campaign",
      "8 VIP tickets per show",
      "Private meet & greet with the company",
      "Co-branded digital content",
    ],
  },
  {
    name: "Title Sponsor",
    level: "Signature",
    features: [
      "Production named in your brand's honor",
      "Full brand integration across all EPC channels",
      "Exclusive pre-show brand activation opportunity",
      "20 VIP tickets per show",
      "Custom partnership activation — your vision",
      "Year-round EPC brand alignment",
    ],
  },
];
