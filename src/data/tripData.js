export const tripData = {
  tripName: "London Cultural Trip 2026",
  schoolName: "HELP International School Kuala Lumpur",
  departureDate: "2026-11-05T09:15:00+08:00",
  returnDate: "2026-11-12T21:25:00+00:00",
  pdfPath: "/documents/london-parent-information.pdf",
  formLabel: "Update Student Details",
  formUrl: "https://forms.gle/w6yVJerMU6MZnz8S6",
  emergencyNote:
    "Replace emergency phone numbers, staff contacts, and live tracking links before publishing publicly.",
  hero: {
    eyebrow: "Information Hub",
    headline: "London Cultural Trip 2026",
    summary:
      "Please refer to this website regularly for the latest London Trip updates, travel information, packing guidance, and safeguarding expectations.",
  },
  quickFacts: [
    { label: "Trip length", value: "8 days" },
    { label: "Travel window", value: "5-13 November 2026" },
  ],
  flightTickets: [
    {
      label: "Outbound flight",
      airline: "Malaysia Airlines",
      flightNumber: "MH4",
      route: "KUL-LHR",
      date: "5 Nov 2026",
      time: "09:15-15:25",
      terminalNote: "Kuala Lumpur to London Heathrow",
      luggageAllowance: "25KG",
      direction: "outbound",
    },
    {
      label: "Return flight",
      airline: "Malaysia Airlines",
      flightNumber: "MH1",
      route: "LHR-KUL",
      date: "12 Nov 2026",
      time: "21:25-18:20 (+1)",
      terminalNote: "London Heathrow to Kuala Lumpur",
      luggageAllowance: "25KG",
      direction: "return",
    },
  ],
  noticeBoard: [
    {
      title: "Complete the parent form",
      detail: "Required as soon as possible for flight booking and trip preparation.",
      tone: "urgent",
    },
    {
      title: "Passport validity",
      detail: "Student passports must be valid until at least 13 May 2027.",
      tone: "important",
    },
    {
      title: "Roaming or UK SIM",
      detail: "Students need international roaming or a UK-compatible SIM for communication and group safety.",
      tone: "info",
    },
  ],
  latestUpdates: [
    {
      date: "Deadline: Monday 7 September 2026",
      deadlineDate: "2026-09-07",
      title: "Honest Burger food order",
      detail: "Please update your food order preference for our meal at Honest Burger on Friday 6 November 2026.",
      link: "https://forms.gle/ewUUyoGsjnXRrToW8",
      linkLabel: "Submit Food Preference",
    },
    {
      date: "Wednesday 23 September 2026",
      deadlineDate: "2026-09-23",
      title: "London Trip Briefing",
      detail:
        "3:30 - 5:00pm, Level 5 Auditorium. Zoom meeting available for those unable to attend in person - students and parents advised to attend.",
    },
    {
      date: "30 September 2026",
      deadlineDate: "2026-09-30",
      title: "Final Payment",
      detail: "Amount RM6,650 due by 30th September 2026",
    },
    {
      date: "Action needed",
      title: "Update student details",
      detail:
        "Double check and update all student details, especially Passport and Visa information, as we need to confirm with our tour operator.",
      link: "https://forms.gle/w6yVJerMU6MZnz8S6",
      linkLabel: "Update Student Details",
    },
  ],
  reasons: [
    {
      title: "Performing Arts",
      detail: "World-class theatre and backstage learning.",
      icon: "/why-it-matters/performing-arts.png",
    },
    {
      title: "Cultural Immersion",
      detail: "Navigating one of the world's great capital cities.",
      icon: "/why-it-matters/cultural-immersion.png",
    },
    {
      title: "Independence",
      detail: "Building personal responsibility and confidence.",
      icon: "/why-it-matters/independence.png",
    },
    {
      title: "History and Heritage",
      detail: "Engaging directly with over 2,000 years of British history.",
      icon: "/why-it-matters/history-heritage.png",
    },
    {
      title: "Science and Innovation",
      detail: "Exploring global scientific discovery and film technology.",
      icon: "/why-it-matters/science-innovation.png",
    },
  ],
  itinerary: [
    {
      day: "Day 1",
      date: "5 Nov",
      title: "Arrival into London Heathrow",
      icon: "/itinerary/day-1-icon.svg",
      type: "travel",
      highlights: [
        "Arrival into London Heathrow",
        "Transfer to Royal National Hotel",
        "Evening meal on foot (local)",
        "Guy Fawkes Night fireworks display - Alexandra Palace",
      ],
    },
    {
      day: "Day 2",
      date: "6 Nov",
      title: "Main London sights",
      icon: "/itinerary/day-2-icon.svg",
      type: "culture",
      highlights: [
        "4-hour walking tour (main London sights)",
        "London Dungeon",
        "Dinner at Honest Burger",
        "The Lion King",
        {
          label: "The Lion King seats",
          children: ["Grand Circle", "Row H seats 1-16", "Row J seats 6-16"],
        },
      ],
    },
    {
      day: "Day 3",
      date: "7 Nov",
      title: "Harry Potter Studios",
      icon: "/itinerary/day-3-icon.svg",
      type: "innovation",
      highlights: [
        {
          label: "Warner Bros Studios - Harry Potter Experience",
          children: ["Group 1 - 12:30 pm", "Group 2 - 1:00 pm", "Group 3 - 1:30 pm"],
        },
        "Dinner at Top Hat Restaurant",
      ],
    },
    {
      day: "Day 4",
      date: "8 Nov",
      title: "River cruise and West End",
      icon: "/itinerary/day-4-icon.svg",
      type: "learning",
      highlights: [
        "Tower of London",
        "Thames River Cruise",
        "London Eye",
        "Dinner at Hard Rock Cafe",
        "Free time in Piccadilly Circus",
      ],
    },
    {
      day: "Day 5",
      date: "9 Nov",
      title: "Museums and evening meal",
      icon: "/itinerary/day-5-icon.svg",
      type: "arts",
      highlights: ["Natural History Museum", "Science Museum", "Dinner at Pizza Hut"],
    },
    {
      day: "Day 6",
      date: "10 Nov",
      title: "Globe workshop and Oliver",
      icon: "/itinerary/day-6-icon.svg",
      type: "city",
      highlights: [
        {
          label: "Visit Globe Theatre for workshop: A Midsummer Night's Dream",
        },
        "Dinner at Little Italy",
        {
          label: "Oliver seats",
          children: ["Grand Circle", "Row B seats 7-20", "Row C seats 6-18"],
        },
      ],
    },
    {
      day: "Day 7",
      date: "11 Nov",
      title: "Drury Lane and Covent Garden",
      icon: "/itinerary/day-7-icon.svg",
      type: "arts",
      highlights: [
        "Visit Theatre Royal Drury Lane for educational tour",
        "Covent Garden",
        "Dinner at Bills",
        {
          label: "The Play That Goes Wrong seats",
          children: ["Stalls", "Row H seats 18-23", "Row J seats 19-25", "Row K seats 13-26"],
        },
      ],
    },
    {
      day: "Day 8",
      date: "12 Nov",
      title: "West End workshop and departure",
      icon: "/itinerary/day-8-icon.svg",
      type: "travel",
      highlights: ["West End workshop", "Free time for shopping", "Depart from London Heathrow"],
    },
  ],
  parentInfo: {
    eyebrow: "Parent Information",
    title: "Parent Trip Details",
    copy: "Confirmed theatre seating blocks, Harry Potter Studios group times, and guidance for parents wishing to join any activities.",
    theatreSeating: [
      {
        show: "The Lion King",
        date: "6 Nov 2026",
        block: "Grand Circle",
        rows: ["Row H seats 1-16", "Row J seats 6-16"],
      },
      {
        show: "Oliver",
        date: "10 Nov 2026",
        block: "Grand Circle",
        rows: ["Row B seats 7-20", "Row C seats 6-18"],
      },
      {
        show: "The Play That Goes Wrong",
        date: "11 Nov 2026",
        block: "Stalls",
        rows: ["Row H seats 18-23", "Row J seats 19-25", "Row K seats 13-26"],
      },
    ],
    harryPotterGroups: [
      { group: "Group 1", time: "12:30 pm" },
      { group: "Group 2", time: "1:00 pm" },
      { group: "Group 3", time: "1:30 pm" },
    ],
    joiningActivities: [
      "Parents wishing to join any activities during the trip are welcome to do so, subject to seat and ticket availability.",
      "Costs for additional tickets are the responsibility of the joining parent and must be paid directly to the event vendors.",
      "Please submit your details to Mr Ben and advise which activities you would like to join.",
    ],
  },
  learningTracks: [
    {
      title: "West End Experiences",
      items: [
        "The Lion King: puppetry, choreography, live orchestra",
        "The Play That Goes Wrong: physical comedy, timing, technical theatre",
        "Oliver: musical theatre, ensemble performance, storytelling",
      ],
    },
    {
      title: "Behind the Curtain",
      items: [
        "Shakespeare's Globe: theatre history and Elizabethan performance",
        "Theatre Royal Drury Lane: backstage operations and professional production",
        "West End Workshop: performance skills and industry training",
      ],
    },
    {
      title: "Science and Innovation",
      items: [
        "Science Museum: interactive exhibits and engineering",
        "Natural History Museum: natural world and scientific discovery",
        "Harry Potter Studios: film production, sets, and visual effects",
      ],
    },
  ],
  travel: {
    flights: {
      outbound: "MH4, Kuala Lumpur to London Heathrow, 5 Nov 2026, 09:15-15:25",
      inbound: "MH1, London Heathrow to Kuala Lumpur, 12 Nov 2026, 21:25-18:20 (+1)",
      duration: "Approx. 14 hours to London and 13 hours returning to Kuala Lumpur.",
    },
    flightTimeTips: [
      "Adjust to London time on boarding and sleep during the second half of the flight.",
      "Download offline entertainment and fully charge devices; keep power banks in cabin baggage.",
      "Wear comfortable layers and bring a hoodie or neck pillow for overnight rest.",
      "Walk around and stretch every few hours to improve circulation and reduce stiffness.",
      "Limit caffeine before sleep, eat light meals, and drink water regularly.",
      "Keep medication, chargers, travel documents, and a spare t-shirt in cabin baggage.",
    ],
    jetLagRecoveryTips: [
      "Stay awake until local bedtime on the first evening and avoid long daytime naps.",
      "Spend time outdoors in daylight and stay active during the first full day.",
      "Drink plenty of water and eat meals according to London time immediately after arrival.",
      "Shower and change clothes at the hotel to help your body feel reset.",
      "Limit screen time late at night during the first two evenings.",
      "Feeling tired on day one is normal; most students adjust within 2 to 3 days.",
    ],
    londonWeather: [
      "Expected temperatures: 5C to 12C",
      "Cold mornings and evenings",
      "Frequent rain showers are possible",
      "Earlier sunsets and shorter daylight hours",
      "Layered clothing is strongly recommended",
    ],
  },
  entryRequirements: [
    "ETA required for the majority of students.",
    "ETA fee: GBP 20.",
    "ETA valid for 2 years and linked directly to the passport.",
    "Approval evidence must be sent to the school.",
    "A standard visitor visa is required for specific nationalities only.",
    "The school will contact affected families directly.",
  ],
  packing: {
    documents: [
      "Passport",
      "ETA or visa approval",
      "Phone and charger",
      "Debit or travel card",
      "Required medication",
    ],
    clothing: [
      "1 waterproof winter jacket",
      "2 hoodies or warm layers",
      "7-8 days of casual clothing",
      "2-3 pairs of comfortable trousers",
      "Comfortable walking shoes",
      "Sleepwear and undergarments",
      "Small umbrella",
    ],
    theatreDressCode: [
      "Formal or smart casual attire for West End evenings",
      "No slippers or sportswear",
    ],
    officialGear: [
      "Trip hoodie or T-shirt for flights, transfers, and Harry Potter Studios",
      "Supports visibility, safeguarding, and group identification",
    ],
  },
  payments: [
    {
      title: "Spending",
      detail:
        "Prepaid multi-currency cards are strongly recommended, such as Wise or Touch 'n Go Visa.",
    },
    {
      title: "Security",
      detail: "Reduces the need to carry large amounts of physical cash.",
    },
    {
      title: "Travel",
      detail:
        "Useful for contactless Tube travel, restaurants, shopping, and day-to-day spending.",
    },
  ],
  expectations: [
    "Students must bring a personal mobile phone.",
    "Students should be ready for extensive daily walking.",
    "Strict room curfews will be enforced.",
    "Respectful, professional behaviour is expected throughout.",
    "Teacher supervision runs throughout all activities.",
    "A mandatory buddy system will be used.",
  ],
  safety: [
    {
      title: "Smart travel habits",
      detail:
        "Keep phones, wallets, and valuables secure and out of sight. Inside pockets, zipped bags, money belts, or cross-body bags are recommended.",
    },
    {
      title: "The Tube",
      detail:
        "Students will travel in supervised groups on the London Underground with close staff and EST guide oversight.",
    },
    {
      title: "General safety",
      detail:
        "Students will receive safety briefings and remain supervised throughout activities in a busy international city.",
    },
  ],
  supervision: [
    "1:8 staff-to-student ratio",
    "EST guides supporting all travel days",
    "Mandatory trip wristbands with emergency contacts",
    "EST app with itinerary and location tracking",
    "Regular headcounts throughout the day",
  ],
  emergencyContacts: {
    note: "Emergency numbers, staff contacts, airport meeting arrangements, and the live tracking link are pending final school approval. This section will be updated with confirmed details closer to departure.",
    emergency: [
      { label: "24-hour emergency contact", detail: "To be confirmed" },
      { label: "School office (Kuala Lumpur)", detail: "To be confirmed" },
    ],
    staff: [
      { role: "Trip Lead", name: "To be confirmed", contact: "To be confirmed" },
      { role: "Assistant Trip Lead", name: "To be confirmed", contact: "To be confirmed" },
      { role: "EST Tour Guide", name: "To be confirmed", contact: "To be confirmed" },
    ],
    airportMeeting: {
      outbound:
        "Meeting point and time for departure on 5 November 2026 will be confirmed closer to the date.",
      return: "Arrival collection arrangements for 12 November 2026 will be confirmed closer to the date.",
    },
    liveTracking: "Live tracking will be added here once approved by the school.",
  },
  nextSteps: [
    "Complete the parent Google Form as soon as possible.",
    "Submit passport details and provide ETA or visa updates when available.",
    "Set up international roaming or a UK-compatible SIM before departure.",
    "Expect more travel information in Term 1 of AY 2026-2027, including airport meeting procedures and final departure arrangements.",
  ],
  faqs: [
    {
      question: "What should be updated first after copying this to Replit?",
      answer:
        "Start with the Google Form link, emergency contacts, ETA guidance links, and any staff-approved logistics. Those are the highest-value live items for parents.",
    },
    {
      question: "Can this site show live updates during the trip?",
      answer:
        "Yes. The simplest option is to keep editing the updates array in the data file. If you later want non-technical updates, this structure can be moved to Airtable, Supabase, or a CMS.",
    },
    {
      question: "Should student group lists be published here?",
      answer:
        "Only if the site is private and school-approved. This build leaves student names out by default to reduce privacy risk.",
    },
  ],
};
