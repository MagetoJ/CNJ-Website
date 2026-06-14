export const faqData = [
  { question: "What destinations do you offer?", answer: "CNJ Safaris offers unforgettable safari experiences across East Africa, including Kenya and Tanzania. Popular destinations include Masai Mara National Reserve, Amboseli National Park, Lake Nakuru National Park, Serengeti National Park, and Ngorongoro Conservation Area." },
  { question: "Why choose CNJ Safaris?", answer: "We provide personalized safari experiences, expert local guides, carefully selected accommodations, luxury transportation, and exceptional customer service from arrival to departure." },
  { question: "Are your safaris private or shared?", answer: "We offer both private safaris and group safaris. Private safaris provide a more personalized experience, while group safaris are ideal for travelers looking for a more affordable option." },
  { question: "Can solo travelers book a safari?", answer: "Yes. Solo travelers are welcome and can choose from private or group safari packages." },
  { question: "How do I book a safari?", answer: "You can submit an inquiry through our website, contact us via WhatsApp, email us, or request a customized itinerary." },
  { question: "How much deposit is required?", answer: "A deposit of 30%–50% is typically required to confirm your booking. The remaining balance is due before arrival or according to your booking agreement." },
  { question: "What payment methods do you accept?", answer: "We accept bank transfers, credit/debit cards, and selected international payment options." },
  { question: "Can I customize my itinerary?", answer: "Absolutely. We specialize in tailor-made safari experiences based on your budget, interests, and travel dates." },
  { question: "How far in advance should I book?", answer: "We recommend booking 3–6 months in advance, especially during peak safari seasons." },
  { question: "What is the best time to visit Kenya and Tanzania?", answer: "The best safari months are generally June to October and January to March, when wildlife viewing is excellent." },
  { question: "When does the Great Migration take place?", answer: "The famous migration between Serengeti National Park and Masai Mara National Reserve typically occurs between July and October." },
  { question: "Will I see the Big Five?", answer: "While wildlife sightings can never be guaranteed, our experienced guides maximize your chances of spotting lions, elephants, leopards, rhinos, and buffalo." },
  { question: "Are your guides experienced?", answer: "Yes. Our guides are professional, knowledgeable, and experienced in wildlife tracking and guest safety." },
  { question: "How many people are in a safari vehicle?", answer: "Group sizes vary depending on the package, but we prioritize comfort and excellent wildlife viewing opportunities." },
  { question: "What types of accommodation do you offer?", answer: "We offer luxury lodges, tented camps, boutique safari camps, and budget-friendly accommodations." },
  { question: "Are meals included?", answer: "Most safari packages include meals as specified in your itinerary." },
  { question: "Can dietary requirements be accommodated?", answer: "Yes. Please inform us in advance about any dietary restrictions or preferences." },
  { question: "Do lodges have Wi-Fi?", answer: "Many lodges and camps provide Wi-Fi, though connectivity may vary in remote safari locations." },
  { question: "Do I need a visa?", answer: "Visa requirements depend on your nationality. We recommend checking the latest immigration requirements before travel." },
  { question: "Do I need travel insurance?", answer: "Yes. We strongly recommend comprehensive travel insurance covering medical emergencies, cancellations, and personal belongings." },
  { question: "Do I need a visa to visit Kenya?", answer: "Visa requirements depend on your nationality. Please ensure you secure an eVata or Electronic Travel Authorization (eTA) prior to departure depending on national guidelines." },
  { question: "Is East Africa safe for tourists?", answer: "Yes. Kenya and Tanzania are among Africa's leading tourism destinations. We prioritize guest safety throughout your journey." },
  { question: "What should I pack for an African safari?", answer: "We recommend packing lightweight neutral clothing, comfortable walking shoes, a high-quality camera and binoculars, sunscreen, a wide-brimmed hat, sunglasses, and a warm light jacket or fleece for early morning and evening game drives." },
  { question: "Will someone pick me up at the airport?", answer: "Yes. We offer seamless airport pickup and drop-off services for all our safari guests." },
  { question: "Which airport should I fly into?", answer: "Depending on your itinerary, you may arrive through Jomo Kenyatta International Airport (Nairobi, Kenya), Kilimanjaro International Airport (Tanzania), or other regional hubs." },
  { question: "What vehicles do you use?", answer: "We use well-maintained 4x4 custom safari land cruisers equipped with pop-up roofs for optimal game viewing and photography." },
  { question: "Are safaris suitable for children?", answer: "Yes. We offer family-friendly safari packages thoughtfully curated with specialized lodges and activities suitable for all ages." },
  { question: "Can you arrange honeymoon safaris?", answer: "Absolutely. We specialize in creating highly romantic safari and tropical beach experiences tailored explicitly for honeymooners." },
  { question: "Do you organize birthday or anniversary safaris?", answer: "Yes. We can arrange special celebrations, surprise bush dinners, private sundowners, and customized milestone events." },
  { question: "Do you support local communities?", answer: "Yes. We actively collaborate with local communities and support responsible, ethical tourism initiatives that directly benefit wildlife conservation and indigenous livelihoods." },
  { question: "Are your safaris environmentally responsible?", answer: "We champion sustainable travel practices, minimize carbon footprints, and partner with certified eco-conscious lodges and camps whenever possible." },
  { question: "How much does a safari in Kenya cost?", answer: "Safari costs vary depending on personalization, duration, and accommodation levels. Standard packages generally range from $1,200 to $5,000+ per person covering entries, expert tracking, and full board accommodation." },
  { question: "What is the best safari company in Kenya?", answer: "CNJ Safaris provides some of the highest-rated personalized and private experiences due to our hand-picked native guides, premium 4x4 configurations, and exceptional custom client care." },
  { question: "How many days do I need for a safari?", answer: "We highly suggest at least 4 to 8 days to experience key ecosystems properly without rushing between vast National Parks." },
  { question: "Are safari packages all-inclusive?", answer: "Most packages are fundamentally all-inclusive covering your domestic park transit, professional guide-tracker services, entry permits, and specified full-board accommodation meals." },
  { question: "What animals can I see on safari?", answer: "You stand excellent chances to encounter Africa's legendary Big Five (Lions, Leopards, Elephants, Rhinos, Buffalos), alongside Cheetahs, Giraffes, Zebras, Hippos, and millions of Wildebeest during migration cycles." }
];

export const affordableSafariPackages = [
  {
    _id: "aff-pkg-001",
    title: "3-Day Maasai Mara Budget Explorer",
    slug: "3-day-maasai-mara-budget-explorer",
    durationDays: 3,
    basePrice: 350,
    destinationName: "Maasai Mara",
    category: "Budget-Friendly",
    image: "/A Safari and Beach Getaway in One Perfect Itinerary.jpeg",
    highlights: ["Big Five Opportunities", "Maasai Mara Wildlife Experience", "Great Migration Tracking"],
    accommodations: [{ name: "Standard Tented Bush Camp", type: "Budget Tented Camp" }],
    days: [
      {
        dayNumber: 1,
        title: "Nairobi to Maasai Mara Reserve",
        description: "Depart from Nairobi in a shared custom 4x4 safari vehicle. Journey down the Great Rift Valley escarpment into the legendary Maasai Mara. Enjoy an introductory afternoon game drive.",
        activities: ["Scenic Rift Valley Drive", "Sunset Game Tracking"]
      },
      {
        dayNumber: 2,
        title: "Full Day Savanna Expedition",
        description: "Spend a comprehensive full day tracking the Big Five across the endless plains. Picnic lunch served under a classic acacia tree near the Mara River.",
        activities: ["Full-Day Game Drive", "Mara River Hippo Observation"]
      },
      {
        dayNumber: 3,
        title: "Morning Tracking & Return Transit",
        description: "Conduct an early dawn predator tracking session, eat a hearty bush breakfast, and return back to Nairobi arriving by late afternoon.",
        activities: ["Dawn Predator Drive", "Transit to Nairobi"]
      }
    ]
  },
  {
    _id: "aff-pkg-002",
    title: "4-Day Amboseli Value Safari",
    slug: "4-day-amboseli-value-safari",
    durationDays: 4,
    basePrice: 550,
    destinationName: "Amboseli",
    category: "Value Safari Tours",
    image: "/Experience an unforgettable Big 5 safari at .jpeg",
    highlights: ["Mount Kilimanjaro Views", "Giant Elephant Herds", "Exceptional Photography"],
    accommodations: [{ name: "Amboseli Wilderness Camp", type: "Boutique Bush Camp" }],
    days: [
      {
        dayNumber: 1,
        title: "Arrival under Kilimanjaro",
        description: "Drive south from Nairobi arriving at Amboseli in time for lunch. Embark on a game drive against the backdrop of Africa's highest peak.",
        activities: ["Ecosystem Orientation Drive"]
      },
      {
        dayNumber: 2,
        title: "Swamps & Elephant Pathways",
        description: "Full day tracking the massive elephant bulls of Amboseli as they traverse the central marshes and dry dust plains.",
        activities: ["Elephant Tracking", "Observation Hill Viewpoint"]
      },
      {
        dayNumber: 3,
        title: "Cultural Interaction & Big Cats",
        description: "Combine an authentic morning visit to a traditional Maasai community homestead with an afternoon big cat tracking route.",
        activities: ["Maasai Village Tour", "Evening Predator Patrol"]
      },
      {
        dayNumber: 4,
        title: "Dawn Vista & Departure",
        description: "Capture the clear morning silhouette of Mount Kilimanjaro during breakfast before checking out for your return transit.",
        activities: ["Sunrise Photography"]
      }
    ]
  },
  {
    _id: "aff-pkg-003",
    title: "5-Day Classic Kenya Wildlife Adventure",
    slug: "5-day-kenya-wildlife-adventure",
    durationDays: 5,
    basePrice: 850,
    destinationName: "Multi-Destination",
    category: "Cost-Effective Adventures",
    image: "/Why you should visit Kenya   Style for Wanderlust.jpeg",
    highlights: ["Rhino Sanctuary Sightings", "Flamingo Flocks", "Amboseli Elephants"],
    accommodations: [{ name: "Econest Safari Lodges", type: "Boutique Bush Camp" }],
    days: [
      { dayNumber: 1, title: "Nairobi to Lake Nakuru Sanctuary", description: "Drive to Lake Nakuru National Park, famous for its black and white rhino sanctuaries.", activities: ["Rhino Tracking"] },
      { dayNumber: 2, title: "Lake Nakuru to Maasai Mara", description: "Transit to the magnificent Mara ecosystem with an evening game route.", activities: ["Savanna Transit Drive"] },
      { dayNumber: 3, title: "The Ultimate Mara Plains Tracker", description: "Full day charting migration paths and open grassland hunting patterns.", activities: ["Migration Scouting"] },
      { dayNumber: 4, title: "Maasai Mara to Amboseli Plains", description: "Scenic transfer toward the southern dynamic elephant corridors.", activities: ["Ecosystem Crossing Route"] },
      { dayNumber: 5, title: "Amboseli Checkout to Nairobi", description: "Conclude with an early morning game drive before driving back to Nairobi.", activities: ["Final Savanna Tracking"] }
    ]
  },
  {
    _id: "aff-pkg-004",
    title: "6-Day Tanzania Budget-Friendly Circuit",
    slug: "6-day-tanzania-budget-safari",
    durationDays: 6,
    basePrice: 1250,
    destinationName: "Serengeti & Ngorongoro",
    category: "Budget-Friendly",
    image: "/Serengeti National Park on days 2 & 3 of the .jpeg",
    highlights: ["Serengeti Plains Tracking", "Ngorongoro Crater Floor", "Tarangire Baobabs"],
    accommodations: [{ name: "Ngorongoro Eco-Lodge", type: "Luxury Tented Camp" }],
    days: [
      { dayNumber: 1, title: "Arusha to Tarangire National Park", description: "Explore Tarangire's ancient baobab landscapes and large herds of elephants.", activities: ["Baobab Route Tracking"] },
      { dayNumber: 2, title: "Tarangire to Central Serengeti", description: "Journey into the heart of Africa's most famous wildlife arena.", activities: ["Endless Plains Game Drive"] },
      { dayNumber: 3, title: "Serengeti Migration Search", description: "Track massive herds of wildebeest and zebras followed by large prides of lions.", activities: ["Predator-Prey Tracking"] },
      { dayNumber: 4, title: "Serengeti to Ngorongoro Highlands", description: "Enjoy a morning game drive out of Serengeti, moving into the volcanic crater highlands.", activities: ["Caldera Escarpment Drive"] },
      { dayNumber: 5, title: "Ngorongoro Crater Floor Extraction", description: "Descend 600 meters into the crater floor for an exceptional wildlife viewing experience inside a natural caldera.", activities: ["Crater Floor Exploration"] },
      { dayNumber: 6, title: "Highlands Transfer back to Arusha", description: "Enjoy a relaxed breakfast before returning to Arusha for your onward international flight.", activities: ["Transit Journey"] }
    ]
  }
];