// ===== CHAPTER: Ecosystem =====
const allQuestions = [
{
  id: 1,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "An ecosystem is defined as a functional unit of nature where:",
  options: [
    "Living organisms interact only with the physical environment",
    "Living organisms interact among themselves and also with the surrounding physical environment",
    "Only abiotic components interact with each other",
    "Only biotic components interact with each other"
  ],
  correct: 1,
  explanation: "As per NCERT, an ecosystem is a functional unit of nature where living organisms interact among themselves AND with the surrounding physical environment. Option A is incomplete as it misses organism-organism interactions."
},
{
  id: 2,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following is <b>not</b> an example of a man-made ecosystem?",
  options: [
    "Crop field",
    "Aquarium",
    "Wetland",
    "Both A and B are man-made ecosystems"
  ],
  correct: 2,
  explanation: "Wetland is a natural aquatic ecosystem. Crop fields and aquarium are specifically mentioned in NCERT as man-made ecosystems. Students often confuse wetlands as man-made due to artificial wetlands, but NCERT lists it under natural aquatic ecosystems."
},
{
  id: 3,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Consider the following statements:<br>(i) The entire biosphere can be regarded as a global ecosystem.<br>(ii) Biosphere is a composite of all local ecosystems on Earth.<br>(iii) Ecosystems are broadly divided into terrestrial, aquatic and aerial categories.<br>Which of the above statements is/are correct?",
  options: [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "(i), (ii) and (iii)",
    "Only (iii)"
  ],
  correct: 0,
  explanation: "Statements (i) and (ii) are directly from NCERT. Statement (iii) is incorrect — NCERT divides ecosystems into two basic categories: terrestrial and aquatic. There is no 'aerial' category mentioned."
},
{
  id: 4,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "The vertical distribution of different species occupying different levels in an ecosystem is called:",
  options: [
    "Zonation",
    "Succession",
    "Stratification",
    "Gradation"
  ],
  correct: 2,
  explanation: "Stratification is the vertical distribution of different species occupying different levels. Zonation refers to horizontal distribution. Students commonly confuse stratification with zonation — this is a classic NEET trap."
},
{
  id: 5,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "In a forest ecosystem, the correct sequence of stratification from top to bottom is:",
  options: [
    "Herbs → Shrubs → Trees",
    "Shrubs → Trees → Herbs and grasses",
    "Trees → Shrubs → Herbs and grasses",
    "Trees → Herbs and grasses → Shrubs"
  ],
  correct: 2,
  explanation: "As per NCERT, trees occupy the top vertical strata, shrubs the second layer, and herbs and grasses occupy the bottom layers. This is the standard forest stratification pattern."
},
{
  id: 6,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following correctly lists all the functional aspects of an ecosystem as per NCERT?",
  options: [
    "Productivity, Decomposition, Energy flow, Nutrient cycling",
    "Productivity, Decomposition, Food web, Ecological succession",
    "Productivity, Energy flow, Nutrient cycling, Speciation",
    "Decomposition, Energy flow, Nutrient cycling, Adaptation"
  ],
  correct: 0,
  explanation: "NCERT specifically lists four functional aspects: (i) Productivity, (ii) Decomposition, (iii) Energy flow, and (iv) Nutrient cycling. Options B, C, and D include terms not listed as core functional aspects."
},
{
  id: 7,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "In a pond ecosystem, the autotrophic components include:<br>(i) Phytoplankton<br>(ii) Zooplankton<br>(iii) Some algae<br>(iv) Floating, submerged and marginal plants<br>Select the correct option:",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "(ii), (iii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 1,
  explanation: "Zooplankton are consumers (heterotrophs), not autotrophs. NCERT specifically mentions phytoplankton, some algae, and floating, submerged and marginal plants as autotrophic components of a pond ecosystem."
},
{
  id: 8,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "The decomposers in a pond ecosystem are especially abundant at the:",
  options: [
    "Surface of the water",
    "Middle zone of the pond",
    "Edges of the pond",
    "Bottom of the pond"
  ],
  correct: 3,
  explanation: "NCERT specifically states that decomposers (fungi, bacteria and flagellates) are especially abundant at the bottom of the pond. This is because dead organic matter settles at the bottom where decomposition primarily occurs."
},
{
  id: 9,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following organisms are listed as decomposers in a pond ecosystem as per NCERT?",
  options: [
    "Fungi, bacteria and protozoans",
    "Fungi, bacteria and flagellates",
    "Bacteria, algae and flagellates",
    "Fungi, zooplankton and bacteria"
  ],
  correct: 1,
  explanation: "NCERT specifically mentions fungi, bacteria and flagellates as the decomposers in a pond ecosystem. Students often select protozoans or zooplankton — these are consumers, not decomposers in this context."
},
{
  id: 10,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "<b>Assertion (A):</b> Energy flow in an ecosystem is unidirectional.<br><b>Reason (R):</b> Energy is dissipated and lost as heat to the environment at each trophic level.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true as per NCERT. Energy moves unidirectionally towards higher trophic levels and is dissipated as heat at each level. The loss as heat is precisely WHY energy cannot cycle back — making R the correct explanation of A."
},
{
  id: 11,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following is <b>incorrect</b> about a pond ecosystem?",
  options: [
    "It is a fairly self-sustainable unit",
    "Abiotic components include water with dissolved substances and soil deposit at bottom",
    "Consumers include zooplankton, free swimming and bottom dwelling forms",
    "Energy flow in a pond is bidirectional unlike terrestrial ecosystems"
  ],
  correct: 3,
  explanation: "Energy flow is ALWAYS unidirectional in any ecosystem — whether aquatic or terrestrial. NCERT clearly states 'unidirectional movement of energy towards higher trophic levels.' Options A, B, and C are all correct NCERT statements."
},
{
  id: 12,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "The process of conversion of inorganic material into organic material in an ecosystem is carried out by:",
  options: [
    "Decomposers",
    "Consumers",
    "Autotrophs",
    "Detritivores"
  ],
  correct: 2,
  explanation: "NCERT states: 'conversion of inorganic into organic material with the help of radiant energy of the sun by the autotrophs.' Decomposers do the reverse — they convert organic to inorganic (mineralisation)."
},
{
  id: 13,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following factors regulate the rate of function of a pond ecosystem?<br>(i) Solar input<br>(ii) Cycle of temperature<br>(iii) Day-length<br>(iv) Other climatic conditions<br>Select the correct option:",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 3,
  explanation: "NCERT states: 'The solar input, the cycle of temperature, day-length and other climatic conditions regulate the rate of function of the entire pond.' All four are correct."
},
{
  id: 14,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "The process of decomposition and mineralisation of dead matter in an ecosystem is important because it:",
  options: [
    "Provides energy directly to the consumers",
    "Releases materials back for reuse by autotrophs",
    "Increases the trophic levels in the ecosystem",
    "Converts organic matter into fossil fuels"
  ],
  correct: 1,
  explanation: "NCERT states: 'decomposition and mineralisation of the dead matter to release them back for reuse by the autotrophs.' This recycling function is crucial for sustaining the ecosystem."
},
{
  id: 15,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following is <b>not</b> an example of a terrestrial ecosystem?",
  options: [
    "Forest",
    "Estuary",
    "Desert",
    "Grassland"
  ],
  correct: 1,
  explanation: "Estuary is an aquatic ecosystem as per NCERT. Forest, grassland and desert are listed as terrestrial ecosystems. Students sometimes confuse estuary with a terrestrial ecosystem because it has land-water interface."
},
{
  id: 16,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "<b>Assertion (A):</b> A small pond can explain complex interactions of an aquatic ecosystem.<br><b>Reason (R):</b> A pond exhibits all four basic components — productivity, decomposition, energy flow and nutrient cycling.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "NCERT states that a pond is 'a fairly self-sustainable unit and rather simple example that explains even the complex interactions.' It exhibits all four basic functional components, which is why it can serve as a model — R correctly explains A."
},
{
  id: 17,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Consider the following pairs:<br>(i) Phytoplankton – Autotrophs<br>(ii) Zooplankton – Decomposers<br>(iii) Flagellates – Decomposers<br>(iv) Free swimming forms – Consumers<br>Which of the above pairs is/are correctly matched?",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "(i) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 1,
  explanation: "Zooplankton are consumers, NOT decomposers. Phytoplankton are autotrophs, flagellates are decomposers (as per NCERT specifically for pond), and free swimming forms are consumers. Pair (ii) is incorrectly matched."
},
{
  id: 18,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following correctly describes the species composition of an ecosystem?",
  options: [
    "The vertical distribution of species at different levels",
    "The identification and enumeration of plant and animal species",
    "The functional role of each species in the ecosystem",
    "The interaction patterns among different species"
  ],
  correct: 1,
  explanation: "NCERT defines: 'Identification and enumeration of plant and animal species of an ecosystem gives its species composition.' Option A describes stratification, not species composition."
},
{
  id: 19,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following aquatic ecosystems is mentioned in NCERT as a natural aquatic ecosystem?<br>(i) Pond<br>(ii) Lake<br>(iii) Aquarium<br>(iv) Wetland<br>(v) Estuary<br>(vi) River",
  options: [
    "(i), (ii), (iii), (iv), (v) and (vi)",
    "(i), (ii), (iv), (v) and (vi) only",
    "(i), (ii), (iii) and (vi) only",
    "(i), (ii) and (vi) only"
  ],
  correct: 1,
  explanation: "Aquarium is a man-made ecosystem, not a natural aquatic ecosystem. NCERT lists pond, lake, wetland, river and estuary as examples of natural aquatic ecosystems. Aquarium is listed separately as man-made."
},
{
  id: 20,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "The abiotic component of a pond ecosystem includes:<br>(i) Dissolved inorganic substances<br>(ii) Dissolved organic substances<br>(iii) Soil deposit at the bottom<br>(iv) Phytoplankton",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(i) and (iii) only"
  ],
  correct: 1,
  explanation: "NCERT states: 'The abiotic component is the water with all the dissolved inorganic and organic substances and the rich soil deposit at the bottom.' Phytoplankton are biotic (autotrophic) components."
},
{
  id: 21,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "In an ecosystem, the events of production, consumption, decomposition and mineralisation are:",
  options: [
    "Repeated over and over again",
    "Unidirectional and non-repeatable",
    "Occur only once in a life cycle",
    "Dependent on the size of ecosystem"
  ],
  correct: 0,
  explanation: "NCERT explicitly states 'these events are repeated over and over again.' This repetition is fundamental to ecosystem functioning and sustainability."
},
{
  id: 22,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "<b>Assertion (A):</b> Nutrients cycle repeatedly in an ecosystem.<br><b>Reason (R):</b> Energy flows unidirectionally and is lost as heat at each trophic level.",
  options: [
    "Both A and R are true but R is not the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both statements are true as per NCERT. However, R explains why energy does NOT cycle — it does not explain WHY nutrients cycle. Nutrients cycle because of decomposition and mineralisation, not because of energy dissipation. So R is not the correct explanation of A."
},
{
  id: 23,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Marginal plants in a pond ecosystem are found at the:",
  options: [
    "Centre of the pond",
    "Bottom of the pond",
    "Edges of the pond",
    "Surface floating freely"
  ],
  correct: 2,
  explanation: "NCERT mentions 'floating, submerged and marginal plants found at the edges.' Marginal plants grow at the margins/edges of the pond where the water is shallow and meets the land."
},
{
  id: 24,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following statements is <b>incorrect</b>?",
  options: [
    "Ecosystem varies greatly in size from a small pond to a large forest",
    "Crop fields are examples of natural terrestrial ecosystems",
    "A pond is a shallow water body exhibiting all basic components of an ecosystem",
    "The biosphere is regarded as a global ecosystem by many ecologists"
  ],
  correct: 1,
  explanation: "Crop fields are man-made ecosystems, not natural terrestrial ecosystems. NCERT specifically states: 'Crop fields and an aquarium may also be considered as man-made ecosystems.'"
},
{
  id: 25,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "The interaction of biotic and abiotic components of an ecosystem results in:",
  options: [
    "Speciation",
    "A physical structure characteristic for each type of ecosystem",
    "Formation of new ecosystems",
    "Elimination of weaker species"
  ],
  correct: 1,
  explanation: "NCERT states: 'Interaction of biotic and abiotic components result in a physical structure that is characteristic for each type of ecosystem.' This is a direct NCERT statement frequently tested."
},
{
  id: 26,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following performs the function of releasing nutrients back for reuse by autotrophs?",
  options: [
    "Primary consumers",
    "Secondary consumers",
    "Producers",
    "Decomposers"
  ],
  correct: 3,
  explanation: "Decomposers carry out decomposition and mineralisation of dead matter, releasing nutrients back for reuse by autotrophs. This is the recycling function that maintains nutrient cycling in the ecosystem."
},
{
  id: 27,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Consider the following statements about ecosystems:<br>(A) Energy flow is cyclic in nature.<br>(B) Nutrient cycling involves decomposition and mineralisation.<br>(C) A pond ecosystem is not self-sustainable.<br>(D) Stratification refers to vertical distribution of species.<br>How many of the above statements are <b>correct</b>?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "Only statements B and D are correct. Statement A is wrong — energy flow is unidirectional, not cyclic. Statement C is wrong — NCERT says a pond is a 'fairly self-sustainable unit.' So two statements are correct."
},
{
  id: 28,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "In the context of ecosystem structure, which of the following is <b>not</b> a level in forest stratification as described in NCERT?",
  options: [
    "Trees",
    "Shrubs",
    "Climbers",
    "Herbs and grasses"
  ],
  correct: 2,
  explanation: "NCERT mentions only three strata in forest stratification: trees (top), shrubs (second), and herbs and grasses (bottom). Climbers are not mentioned as a separate stratum in the NCERT description."
},
{
  id: 29,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "<b>Assertion (A):</b> Crop fields are considered as ecosystems.<br><b>Reason (R):</b> Crop fields have both biotic and abiotic components that interact with each other.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A"
  ],
  correct: 2,
  explanation: "Crop fields are man-made ecosystems as per NCERT. They qualify as ecosystems because they have interacting biotic and abiotic components — the fundamental definition of an ecosystem. R correctly explains A."
},
{
  id: 30,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Bottom dwelling forms in a pond ecosystem belong to which category?",
  options: [
    "Producers",
    "Decomposers",
    "Consumers",
    "Autotrophs"
  ],
  correct: 2,
  explanation: "NCERT states: 'The consumers are represented by the zooplankton, the free swimming and bottom dwelling forms.' Bottom dwelling forms are consumers. Students may confuse them with decomposers (which are also at the bottom), but NCERT clearly categorises them as consumers."
},
{
  id: 31,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following best describes the role of radiant energy of the sun in an ecosystem?",
  options: [
    "It helps decomposers break down organic matter",
    "It helps autotrophs convert inorganic material into organic material",
    "It directly provides energy to consumers",
    "It drives the process of mineralisation"
  ],
  correct: 1,
  explanation: "NCERT states: 'conversion of inorganic into organic material with the help of the radiant energy of the sun by the autotrophs.' Solar energy is used by autotrophs for photosynthesis — the primary production process."
},
{
  id: 32,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Select the <b>incorrect</b> match:",
  options: [
    "Estuary – Aquatic ecosystem",
    "Desert – Terrestrial ecosystem",
    "Aquarium – Natural ecosystem",
    "Grassland – Terrestrial ecosystem"
  ],
  correct: 2,
  explanation: "Aquarium is a man-made ecosystem, not a natural ecosystem. NCERT specifically mentions aquarium under man-made ecosystems along with crop fields."
},
{
  id: 33,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "The dissipation and loss of energy in an ecosystem occurs in the form of:",
  options: [
    "Light",
    "Chemical energy",
    "Heat",
    "Mechanical energy"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'unidirectional movement of energy towards the higher trophic levels and its dissipation and loss as heat to the environment.' Energy is lost as heat at each trophic level."
},
{
  id: 34,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "How many of the following are aquatic ecosystems as per NCERT?<br>Pond, Lake, Wetland, Forest, River, Estuary, Desert, Grassland",
  options: [
    "Three",
    "Four",
    "Five",
    "Six"
  ],
  correct: 2,
  explanation: "Five are aquatic ecosystems: Pond, Lake, Wetland, River, and Estuary. Forest, Desert, and Grassland are terrestrial ecosystems. Students must carefully count and categorise — a common NEET trap."
},
{
  id: 35,
  topic: "Ecosystem – Introduction & Structure and Function",
  q: "Which of the following correctly represents the sequence of events that are repeated in an ecosystem?",
  options: [
    "Consumption → Production → Decomposition → Mineralisation",
    "Production → Consumption → Mineralisation → Decomposition",
    "Production → Consumption → Decomposition → Mineralisation → Reuse by autotrophs",
    "Decomposition → Mineralisation → Production → Consumption"
  ],
  correct: 2,
  explanation: "NCERT describes the sequence as: conversion of inorganic to organic by autotrophs (production) → consumption by heterotrophs → decomposition and mineralisation of dead matter → release back for reuse by autotrophs. This is the correct logical and NCERT-aligned sequence."
},
{
  id: 36,
  topic: "Productivity",
  q: "Primary production is defined as:",
  options: [
    "The rate of biomass production per unit area per unit time",
    "The amount of biomass or organic matter produced per unit area over a time period by plants during photosynthesis",
    "The rate of formation of new organic matter by consumers",
    "The total amount of energy fixed by heterotrophs"
  ],
  correct: 1,
  explanation: "Primary production is the AMOUNT of biomass/organic matter produced per unit area over a time period by plants during photosynthesis. Option A describes productivity (rate), not production (amount). This production vs productivity distinction is a classic NEET trap."
},
{
  id: 37,
  topic: "Productivity",
  q: "The rate of biomass production in an ecosystem is called:",
  options: [
    "Primary production",
    "Net production",
    "Productivity",
    "Secondary production"
  ],
  correct: 2,
  explanation: "NCERT defines: 'The rate of biomass production is called productivity.' Production is the amount; productivity is the rate. This distinction is crucial and frequently tested in NEET."
},
{
  id: 38,
  topic: "Productivity",
  q: "Which of the following is the correct formula for Net Primary Productivity?",
  options: [
    "NPP = GPP + R",
    "NPP = GPP × R",
    "NPP = R – GPP",
    "NPP = GPP – R"
  ],
  correct: 3,
  explanation: "NCERT clearly states: GPP – R = NPP, where R is respiration losses. A considerable amount of GPP is utilised by plants in respiration, and what remains is NPP."
},
{
  id: 39,
  topic: "Productivity",
  q: "Net primary productivity is the available biomass for consumption by:",
  options: [
    "Herbivores only",
    "Decomposers only",
    "Herbivores and decomposers",
    "All autotrophs"
  ],
  correct: 2,
  explanation: "NCERT states: 'Net primary productivity is the available biomass for the consumption to heterotrophs (herbivores and decomposers).' Students commonly select only herbivores, forgetting that decomposers also depend on NPP. This is a frequently tested trap."
},
{
  id: 40,
  topic: "Productivity",
  q: "Primary production is expressed in terms of:",
  options: [
    "Weight only (gm⁻²)",
    "Energy only (kcal m⁻²)",
    "Weight (gm⁻²) or energy (kcal m⁻²)",
    "Number of organisms per unit area"
  ],
  correct: 2,
  explanation: "NCERT states primary production 'is expressed in terms of weight (gm⁻²) or energy (kcal m⁻²).' Both units are acceptable. Students often remember only one unit."
},
{
  id: 41,
  topic: "Productivity",
  q: "Productivity is expressed in terms of:",
  options: [
    "gm⁻² yr⁻¹ or kcal m⁻² yr⁻¹",
    "gm⁻² or kcal m⁻²",
    "kg per organism per year",
    "tons per biome per century"
  ],
  correct: 0,
  explanation: "Productivity, being a rate, includes a time component. NCERT states it is expressed as gm⁻² yr⁻¹ or kcal m⁻² yr⁻¹. Option B represents production (amount), not productivity (rate). The inclusion of 'yr⁻¹' differentiates productivity from production."
},
{
  id: 42,
  topic: "Productivity",
  q: "Secondary productivity is defined as:",
  options: [
    "The rate of production of organic matter during photosynthesis",
    "The biomass available after respiration losses in plants",
    "The rate of formation of new organic matter by consumers",
    "The total biomass produced by decomposers"
  ],
  correct: 2,
  explanation: "NCERT defines: 'Secondary productivity is defined as the rate of formation of new organic matter by consumers.' Option A defines GPP, Option B describes NPP. Secondary productivity relates to consumers (heterotrophs), not producers."
},
{
  id: 43,
  topic: "Productivity",
  q: "The annual net primary productivity of the whole biosphere is approximately:",
  options: [
    "55 billion tons of organic matter",
    "115 billion tons of organic matter",
    "170 billion tons of organic matter",
    "200 billion tons of organic matter"
  ],
  correct: 2,
  explanation: "NCERT states: 'The annual net primary productivity of the whole biosphere is approximately 170 billion tons (dry weight) of organic matter.' 55 billion tons is only the ocean's share. This exact figure is a favourite in NEET."
},
{
  id: 44,
  topic: "Productivity",
  q: "Despite occupying about 70% of Earth's surface, the productivity of oceans is only:",
  options: [
    "85 billion tons",
    "115 billion tons",
    "55 billion tons",
    "170 billion tons"
  ],
  correct: 2,
  explanation: "NCERT states: 'despite occupying about 70 per cent of the surface, the productivity of the oceans are only 55 billion tons.' The remaining 115 billion tons comes from land. This ocean productivity paradox is very frequently tested."
},
{
  id: 45,
  topic: "Productivity",
  q: "The land contributes approximately how much to the total biosphere productivity?",
  options: [
    "55 billion tons",
    "170 billion tons",
    "85 billion tons",
    "115 billion tons"
  ],
  correct: 3,
  explanation: "Total biosphere NPP = 170 billion tons. Ocean = 55 billion tons. Therefore, land = 170 – 55 = 115 billion tons. This calculation-based question is a common NEET pattern."
},
{
  id: 46,
  topic: "Productivity",
  q: "<b>Assertion (A):</b> Gross primary productivity is always greater than net primary productivity.<br><b>Reason (R):</b> A considerable amount of GPP is utilised by plants in respiration.",
  options: [
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Since NPP = GPP – R, and R (respiration) is always a positive value, GPP is always greater than NPP. The reason correctly explains this — respiration losses reduce GPP to give NPP."
},
{
  id: 47,
  topic: "Productivity",
  q: "Which of the following factors does <b>not</b> affect primary productivity as per NCERT?",
  options: [
    "Plant species inhabiting the area",
    "Availability of nutrients",
    "Rate of secondary consumption",
    "Photosynthetic capacity of plants"
  ],
  correct: 2,
  explanation: "NCERT lists factors affecting primary productivity: plant species, environmental factors, availability of nutrients, and photosynthetic capacity of plants. Rate of secondary consumption is NOT mentioned as a factor affecting primary productivity."
},
{
  id: 48,
  topic: "Productivity",
  q: "Consider the following statements:<br>(i) GPP is the rate of production of organic matter during photosynthesis.<br>(ii) NPP is always greater than GPP.<br>(iii) Respiration losses reduce GPP to NPP.<br>(iv) Secondary productivity refers to the rate of production by autotrophs.<br>How many of the above statements are <b>correct</b>?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "Only statements (i) and (iii) are correct. Statement (ii) is wrong — NPP is always LESS than GPP. Statement (iv) is wrong — secondary productivity refers to consumers, not autotrophs. So two statements are correct."
},
{
  id: 49,
  topic: "Productivity",
  q: "The basic requirement for any ecosystem to function and sustain is:",
  options: [
    "Availability of water",
    "Presence of decomposers",
    "A constant input of solar energy",
    "Availability of mineral nutrients in the soil"
  ],
  correct: 2,
  explanation: "NCERT opens the productivity section with: 'A constant input of solar energy is the basic requirement for any ecosystem to function and sustain.' While other options are important, solar energy is stated as the BASIC requirement."
},
{
  id: 50,
  topic: "Productivity",
  q: "Gross primary productivity of an ecosystem refers to:",
  options: [
    "Total biomass available for heterotrophs",
    "Rate of production of organic matter during photosynthesis",
    "Biomass remaining after respiration losses",
    "Rate of formation of new organic matter by consumers"
  ],
  correct: 1,
  explanation: "NCERT defines: 'Gross primary productivity of an ecosystem is the rate of production of organic matter during photosynthesis.' Option A and C relate to NPP, and Option D defines secondary productivity."
},
{
  id: 51,
  topic: "Productivity",
  q: "<b>Assertion (A):</b> Oceans have lower productivity than land despite covering 70% of Earth's surface.<br><b>Reason (R):</b> Light availability decreases with depth in oceans, limiting photosynthesis to the euphotic zone.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both statements are true. Oceans produce only 55 billion tons out of 170 billion tons despite covering 70% surface. Light limitation in deeper zones restricts photosynthesis to only the upper euphotic zone, which is a primary reason for low ocean productivity. R correctly explains A."
},
{
  id: 52,
  topic: "Productivity",
  q: "Which of the following is <b>incorrect</b> about productivity?",
  options: [
    "It is the rate of biomass production",
    "It is expressed in gm⁻² yr⁻¹",
    "GPP includes respiration losses",
    "NPP includes respiration losses"
  ],
  correct: 3,
  explanation: "NPP = GPP – R. NPP does NOT include respiration losses — they have already been subtracted. GPP is the total production including what will be used in respiration. This is a common conceptual trap."
},
{
  id: 53,
  topic: "Productivity",
  q: "If the GPP of an ecosystem is 1000 kcal m⁻² yr⁻¹ and the respiration losses are 400 kcal m⁻² yr⁻¹, the NPP would be:",
  options: [
    "1400 kcal m⁻² yr⁻¹",
    "400 kcal m⁻² yr⁻¹",
    "600 kcal m⁻² yr⁻¹",
    "2.5 kcal m⁻² yr⁻¹"
  ],
  correct: 2,
  explanation: "NPP = GPP – R = 1000 – 400 = 600 kcal m⁻² yr⁻¹. This is a direct application of the NCERT formula. Option A adds instead of subtracting — a common student error."
},
{
  id: 54,
  topic: "Productivity",
  q: "Which of the following correctly differentiates between primary production and productivity?",
  options: [
    "Primary production is rate; productivity is amount",
    "Primary production is amount; productivity is rate",
    "Both refer to the same concept",
    "Primary production is for autotrophs; productivity is for heterotrophs"
  ],
  correct: 1,
  explanation: "Primary production is the AMOUNT of biomass produced per unit area over time. Productivity is the RATE of biomass production. This distinction is explicitly given in NCERT and is a highly tested concept."
},
{
  id: 55,
  topic: "Productivity",
  q: "Consider the following statements:<br>(A) Primary productivity varies in different types of ecosystems.<br>(B) Primary productivity depends on photosynthetic capacity of plants.<br>(C) The 170 billion tons figure represents GPP of the biosphere.<br>(D) Oceans contribute more than land to global primary productivity.<br>Which of the above are correct?",
  options: [
    "(A) and (B) only",
    "(A), (B) and (C)",
    "(A), (B) and (D)",
    "(A), (B), (C) and (D)"
  ],
  correct: 0,
  explanation: "Statements A and B are correct as per NCERT. Statement C is wrong — 170 billion tons represents NPP (net primary productivity), not GPP. Statement D is wrong — oceans contribute only 55 billion tons vs land's 115 billion tons."
},
{
  id: 56,
  topic: "Productivity",
  q: "The respiration losses (R) in the equation GPP – R = NPP refer to respiration by:",
  options: [
    "Consumers only",
    "Decomposers only",
    "Plants themselves",
    "All organisms in the ecosystem"
  ],
  correct: 2,
  explanation: "NCERT states: 'A considerable amount of GPP is utilised by PLANTS in respiration.' The R in this equation refers specifically to plant respiration, not consumer or decomposer respiration. This is a critical conceptual distinction frequently tested."
},
{
  id: 57,
  topic: "Productivity",
  q: "Which of the following units is used to compare the productivity of different ecosystems?",
  options: [
    "kcal per organism",
    "gm⁻² yr⁻¹ or kcal m⁻² yr⁻¹",
    "tons per ecosystem",
    "kg per hectare"
  ],
  correct: 1,
  explanation: "NCERT states productivity is expressed in gm⁻² yr⁻¹ or kcal m⁻² yr⁻¹ 'to compare the productivity of different ecosystems.' Per unit area per unit time basis enables fair comparison across ecosystems of different sizes."
},
{
  id: 58,
  topic: "Productivity",
  q: "Select the correct sequence of decreasing contribution to global net primary productivity:",
  options: [
    "Ocean > Land",
    "Land > Ocean",
    "Land = Ocean",
    "Cannot be determined from NCERT data"
  ],
  correct: 1,
  explanation: "Land contributes ~115 billion tons and ocean contributes ~55 billion tons out of 170 billion tons total. So Land > Ocean in terms of contribution to global NPP, despite ocean covering 70% of Earth's surface."
},
{
  id: 59,
  topic: "Productivity",
  q: "<b>Assertion (A):</b> Secondary productivity is expressed in the same units as primary productivity.<br><b>Reason (R):</b> Both are measures of the rate of formation of organic matter.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both primary and secondary productivity are rates of organic matter formation — primary by autotrophs and secondary by consumers. Since both measure rates of biomass production, they use the same units (gm⁻² yr⁻¹). R correctly explains why the units are the same."
},
{
  id: 60,
  topic: "Productivity",
  q: "Which of the following is <b>not</b> a factor affecting primary productivity as mentioned in NCERT?",
  options: [
    "Plant species inhabiting the area",
    "Environmental factors",
    "Predation pressure by herbivores",
    "Availability of nutrients"
  ],
  correct: 2,
  explanation: "NCERT lists: plant species, environmental factors, availability of nutrients, and photosynthetic capacity of plants as factors affecting primary productivity. Predation pressure by herbivores is NOT mentioned as a factor affecting primary productivity."
},
{
  id: 61,
  topic: "Productivity",
  q: "The annual net primary productivity of the whole biosphere is expressed as:",
  options: [
    "170 billion tons (fresh weight) of organic matter",
    "170 billion tons (dry weight) of organic matter",
    "55 billion tons (dry weight) of organic matter",
    "170 billion tons (dry weight) of inorganic matter"
  ],
  correct: 1,
  explanation: "NCERT specifically mentions: '170 billion tons (dry weight) of organic matter.' The term 'dry weight' is critical — it excludes water content. Students who skip this detail may select option A (fresh weight), which is incorrect."
},
{
  id: 62,
  topic: "Productivity",
  q: "In an ecosystem, the biomass that is directly available for consumption by the next trophic level is:",
  options: [
    "Gross Primary Productivity",
    "Total Respiration",
    "Net Primary Productivity",
    "Secondary Productivity"
  ],
  correct: 2,
  explanation: "NPP is the biomass available for heterotrophs (herbivores and decomposers). GPP includes the portion used by plants for their own respiration, so it is not entirely available for the next trophic level."
},
{
  id: 63,
  topic: "Productivity",
  q: "Which of the following correctly describes what happens to GPP in an ecosystem?",
  options: [
    "Entirely consumed by herbivores",
    "A part is used in plant respiration, the rest becomes NPP",
    "Entirely converted into secondary productivity",
    "Entirely stored as biomass without any loss"
  ],
  correct: 1,
  explanation: "NCERT states: 'A considerable amount of GPP is utilised by plants in respiration. Gross primary productivity minus respiration losses (R), is the net primary productivity.' So GPP is partitioned into respiration and NPP."
},
{
  id: 64,
  topic: "Productivity",
  q: "Consider the following:<br>Total biosphere NPP = 170 billion tons<br>Ocean NPP = 55 billion tons<br>Ocean surface area = ~70% of Earth<br>Land surface area = ~30% of Earth<br><br>Based on this, which conclusion is most accurate?",
  options: [
    "Per unit area productivity of ocean is higher than land",
    "Per unit area productivity of land is higher than ocean",
    "Per unit area productivity of ocean and land are equal",
    "Ocean has higher total productivity than land"
  ],
  correct: 1,
  explanation: "Ocean covers 70% surface but produces only 55/170 ≈ 32% of total NPP. Land covers 30% surface but produces 115/170 ≈ 68% of total NPP. Therefore, per unit area, land productivity is significantly higher than ocean productivity."
},
{
  id: 65,
  topic: "Productivity",
  q: "Which of the following statements is <b>correct</b>?",
  options: [
    "GPP is always less than NPP",
    "Secondary productivity refers to the rate of production by autotrophs in the second year",
    "Productivity of different ecosystems can be compared using gm⁻² yr⁻¹",
    "NPP includes the respiration losses of plants"
  ],
  correct: 2,
  explanation: "Productivity is expressed in gm⁻² yr⁻¹ to compare different ecosystems. Option A is wrong — GPP > NPP always. Option B is wrong — secondary productivity refers to consumers, not autotrophs. Option D is wrong — NPP = GPP minus R, so R is excluded from NPP."
},
{
  id: 66,
  topic: "Productivity",
  q: "<b>Assertion (A):</b> Primary productivity varies in different types of ecosystems.<br><b>Reason (R):</b> Primary productivity depends on plant species, environmental factors, nutrient availability and photosynthetic capacity.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are directly from NCERT. Primary productivity varies across ecosystems precisely because the listed factors (plant species, environment, nutrients, photosynthetic capacity) differ across ecosystems. R is the correct explanation of A."
},
{
  id: 67,
  topic: "Productivity",
  q: "The percentage of Earth's surface covered by oceans is approximately:",
  options: [
    "50 per cent",
    "60 per cent",
    "70 per cent",
    "80 per cent"
  ],
  correct: 2,
  explanation: "NCERT states: 'despite occupying about 70 per cent of the surface.' This is a directly stated fact that appears in NEET as part of statement-based questions."
},
{
  id: 68,
  topic: "Productivity",
  q: "If GPP of an ecosystem is 5000 gm⁻² yr⁻¹ and NPP is 3000 gm⁻² yr⁻¹, what is the respiration loss?",
  options: [
    "8000 gm⁻² yr⁻¹",
    "3000 gm⁻² yr⁻¹",
    "5000 gm⁻² yr⁻¹",
    "2000 gm⁻² yr⁻¹"
  ],
  correct: 3,
  explanation: "NPP = GPP – R, therefore R = GPP – NPP = 5000 – 3000 = 2000 gm⁻² yr⁻¹. This is a simple rearrangement of the NCERT formula."
},
{
  id: 69,
  topic: "Productivity",
  q: "Which of the following is <b>true</b> regarding the relationship between GPP and NPP?",
  options: [
    "NPP can sometimes exceed GPP",
    "GPP is always equal to NPP in aquatic ecosystems",
    "NPP is what remains of GPP after respiration losses by plants",
    "GPP is the productivity of the second trophic level"
  ],
  correct: 2,
  explanation: "NPP = GPP – R. NPP is always less than GPP because R is always positive (plants always respire). NPP can never exceed GPP. GPP relates to autotrophs (first trophic level), not the second."
},
{
  id: 70,
  topic: "Productivity",
  q: "How many of the following are correct?<br>(i) Primary production is expressed in gm⁻² or kcal m⁻²<br>(ii) Productivity is expressed in gm⁻² yr⁻¹ or kcal m⁻² yr⁻¹<br>(iii) NPP = GPP + R<br>(iv) 170 billion tons is the approximate annual NPP of the biosphere<br>(v) Ocean contributes more than 50% of total biosphere NPP",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 1,
  explanation: "Statements (i), (ii), and (iv) are correct. Statement (iii) is wrong — NPP = GPP – R (minus, not plus). Statement (v) is wrong — ocean contributes 55/170 ≈ 32%, not more than 50%. So three statements are correct."
},
{
  id: 71,
  topic: "Decomposition",
  q: "Decomposition is the process in which decomposers break down complex organic matter into:",
  options: [
    "Simpler organic substances only",
    "Inorganic substances like CO₂, water and nutrients",
    "Complex inorganic substances",
    "Humus and detritus"
  ],
  correct: 1,
  explanation: "NCERT defines decomposition as breaking down of complex organic matter into inorganic substances like carbon dioxide, water and nutrients. Option A is wrong — the end products are inorganic, not organic. Option D is wrong — humus is an intermediate, and detritus is the raw material."
},
{
  id: 72,
  topic: "Decomposition",
  q: "Which of the following constitutes detritus?<br>(i) Dead leaves<br>(ii) Bark<br>(iii) Flowers<br>(iv) Dead animal remains<br>(v) Fecal matter<br>(vi) Living roots",
  options: [
    "(i), (ii), (iii), (iv) and (v) only",
    "(i), (ii), (iii) and (iv) only",
    "(i), (ii), (iii), (iv), (v) and (vi)",
    "(i) and (iv) only"
  ],
  correct: 0,
  explanation: "NCERT states: 'Dead plant remains such as leaves, bark, flowers and dead remains of animals, including fecal matter, constitute detritus.' Living roots are NOT detritus. Students commonly forget that fecal matter is included in detritus — a classic NEET trap."
},
{
  id: 73,
  topic: "Decomposition",
  q: "The correct sequence of steps in decomposition is:",
  options: [
    "Fragmentation → Leaching → Catabolism → Humification → Mineralisation",
    "Leaching → Fragmentation → Catabolism → Mineralisation → Humification",
    "Catabolism → Fragmentation → Leaching → Humification → Mineralisation",
    "Fragmentation → Catabolism → Leaching → Mineralisation → Humification"
  ],
  correct: 0,
  explanation: "NCERT lists the steps as: fragmentation, leaching, catabolism, humification and mineralisation — in this order. However, NCERT also states they operate simultaneously on detritus. The listed order represents the logical conceptual flow."
},
{
  id: 74,
  topic: "Decomposition",
  q: "Fragmentation of detritus is carried out by:",
  options: [
    "Bacterial enzymes",
    "Fungal enzymes",
    "Detritivores such as earthworms",
    "Chemical weathering"
  ],
  correct: 2,
  explanation: "NCERT states: 'Detritivores (e.g., earthworm) break down detritus into smaller particles. This process is called fragmentation.' Bacterial and fungal enzymes are involved in catabolism, NOT fragmentation. This is a critical distinction frequently tested in NEET."
},
{
  id: 75,
  topic: "Decomposition",
  q: "During leaching, water-soluble inorganic nutrients:",
  options: [
    "Are absorbed by plant roots immediately",
    "Go down into the soil horizon and get precipitated as unavailable salts",
    "Are released into the atmosphere",
    "Accumulate on the surface as humus"
  ],
  correct: 1,
  explanation: "NCERT states: 'By the process of leaching, water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts.' Key word is 'unavailable' — these nutrients are NOT immediately available to plants."
},
{
  id: 76,
  topic: "Decomposition",
  q: "Catabolism in the context of decomposition refers to:",
  options: [
    "Breaking of detritus into smaller particles by detritivores",
    "Degradation of detritus into simpler inorganic substances by bacterial and fungal enzymes",
    "Accumulation of dark coloured humus in soil",
    "Movement of water-soluble nutrients into soil horizon"
  ],
  correct: 1,
  explanation: "NCERT defines: 'Bacterial and fungal enzymes degrade detritus into simpler inorganic substances. This process is called catabolism.' Option A is fragmentation, Option C is humification, and Option D is leaching."
},
{
  id: 77,
  topic: "Decomposition",
  q: "Which of the following properties of humus is <b>incorrect</b>?",
  options: [
    "Dark coloured amorphous substance",
    "Highly resistant to microbial action",
    "Crystalline in nature",
    "Serves as a reservoir of nutrients"
  ],
  correct: 2,
  explanation: "Humus is COLLOIDAL in nature, not crystalline. NCERT states humus is 'dark coloured amorphous substance... highly resistant to microbial action... colloidal in nature... serves as a reservoir of nutrients.' Crystalline vs colloidal is a favourite NEET trap."
},
{
  id: 78,
  topic: "Decomposition",
  q: "<b>Assertion (A):</b> Humus undergoes decomposition at an extremely slow rate.<br><b>Reason (R):</b> Humus is highly resistant to microbial action.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both statements are directly from NCERT. Humus decomposes extremely slowly precisely because it is highly resistant to microbial action. R is the correct explanation of A."
},
{
  id: 79,
  topic: "Decomposition",
  q: "The process by which humus is further degraded by microbes and inorganic nutrients are released is called:",
  options: [
    "Humification",
    "Catabolism",
    "Mineralisation",
    "Leaching"
  ],
  correct: 2,
  explanation: "NCERT states: 'The humus is further degraded by some microbes and release of inorganic nutrients occur by the process known as mineralisation.' Humification FORMS humus; mineralisation DEGRADES humus. This humification vs mineralisation confusion is the most common NEET trap."
},
{
  id: 80,
  topic: "Decomposition",
  q: "Humification leads to the formation of:",
  options: [
    "Inorganic salts",
    "Simple sugars",
    "Humus — a dark coloured amorphous substance",
    "Water-soluble nutrients"
  ],
  correct: 2,
  explanation: "NCERT states: 'Humification leads to accumulation of a dark coloured amorphous substance called humus.' Humification forms humus; mineralisation breaks down humus to release inorganic nutrients."
},
{
  id: 81,
  topic: "Decomposition",
  q: "Consider the following statements about decomposition:<br>(i) Fragmentation, leaching and catabolism operate simultaneously on detritus.<br>(ii) Humification and mineralisation occur during decomposition in the soil.<br>(iii) Decomposition is largely an anaerobic process.<br>Which of the above is/are correct?",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii)",
    "(ii) and (iii) only",
    "(i) only"
  ],
  correct: 0,
  explanation: "Statements (i) and (ii) are correct as per NCERT. Statement (iii) is wrong — NCERT states 'Decomposition is largely an oxygen-requiring process' (aerobic, not anaerobic). This aerobic vs anaerobic trap is very commonly tested."
},
{
  id: 82,
  topic: "Decomposition",
  q: "The rate of decomposition is <b>slower</b> when detritus is rich in:",
  options: [
    "Nitrogen and water-soluble substances",
    "Lignin and chitin",
    "Sugars and proteins",
    "Water and minerals"
  ],
  correct: 1,
  explanation: "NCERT states: 'decomposition rate is slower if detritus is rich in lignin and chitin, and quicker if detritus is rich in nitrogen and water-soluble substances like sugars.' Lignin and chitin are resistant to decomposition. This is one of the most frequently asked NEET facts."
},
{
  id: 83,
  topic: "Decomposition",
  q: "The rate of decomposition is <b>quicker</b> when detritus is rich in:",
  options: [
    "Lignin and cellulose",
    "Chitin and suberin",
    "Nitrogen and water-soluble substances like sugars",
    "Lignin and chitin"
  ],
  correct: 2,
  explanation: "NCERT clearly states decomposition is quicker when detritus is rich in nitrogen and water-soluble substances like sugars. These are easily broken down by microbial enzymes. Lignin and chitin are resistant and slow down decomposition."
},
{
  id: 84,
  topic: "Decomposition",
  q: "The most important climatic factors that regulate decomposition are:",
  options: [
    "Light and humidity",
    "Wind and rainfall",
    "Temperature and soil moisture",
    "Altitude and latitude"
  ],
  correct: 2,
  explanation: "NCERT states: 'Temperature and soil moisture are the most important climatic factors that regulate decomposition through their effects on the activities of soil microbes.' This is a direct NCERT statement."
},
{
  id: 85,
  topic: "Decomposition",
  q: "Warm and moist environment:",
  options: [
    "Inhibits decomposition",
    "Has no effect on decomposition",
    "Favours decomposition",
    "Favours only humification but not mineralisation"
  ],
  correct: 2,
  explanation: "NCERT states: 'Warm and moist environment favour decomposition.' This is because warmth and moisture enhance the activities of soil microbes that carry out decomposition."
},
{
  id: 86,
  topic: "Decomposition",
  q: "Low temperature and anaerobiosis result in:",
  options: [
    "Rapid mineralisation",
    "Faster decomposition rate",
    "Build up of organic materials",
    "Increased microbial activity"
  ],
  correct: 2,
  explanation: "NCERT states: 'low temperature and anaerobiosis inhibit decomposition resulting in build up of organic materials.' This is why peat bogs and tundra regions accumulate large amounts of organic matter."
},
{
  id: 87,
  topic: "Decomposition",
  q: "<b>Assertion (A):</b> Decomposition is largely an oxygen-requiring process.<br><b>Reason (R):</b> Anaerobiosis inhibits decomposition and results in build up of organic materials.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is not the correct explanation of A"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. The fact that anaerobiosis (absence of oxygen) inhibits decomposition and leads to organic material accumulation confirms that decomposition requires oxygen. R correctly explains why A is true."
},
{
  id: 88,
  topic: "Decomposition",
  q: "Which of the following is <b>correct</b> about humus?<br>(i) It is colloidal in nature.<br>(ii) It undergoes rapid decomposition.<br>(iii) It serves as a reservoir of nutrients.<br>(iv) It is dark coloured and crystalline.",
  options: [
    "(i) and (iii) only",
    "(i), (ii) and (iii)",
    "(ii) and (iv) only",
    "(i), (iii) and (iv)"
  ],
  correct: 0,
  explanation: "Only (i) and (iii) are correct. Statement (ii) is wrong — humus decomposes at an extremely SLOW rate. Statement (iv) is partially wrong — humus is dark coloured but AMORPHOUS (not crystalline) and COLLOIDAL in nature."
},
{
  id: 89,
  topic: "Decomposition",
  q: "Which of the following correctly differentiates between humification and mineralisation?",
  options: [
    "Humification releases inorganic nutrients; mineralisation forms humus",
    "Humification forms humus; mineralisation degrades humus to release inorganic nutrients",
    "Both are the same process occurring at different rates",
    "Humification is aerobic; mineralisation is anaerobic"
  ],
  correct: 1,
  explanation: "Humification leads to accumulation of humus. Mineralisation is the further degradation of humus by microbes, releasing inorganic nutrients. Option A reverses the two processes — a very common student error."
},
{
  id: 90,
  topic: "Decomposition",
  q: "Earthworms are called farmer's friend because they:",
  options: [
    "Help in photosynthesis",
    "Fix atmospheric nitrogen",
    "Help in breakdown of complex organic matter and loosening of soil",
    "Produce antibiotics that kill plant pathogens"
  ],
  correct: 2,
  explanation: "NCERT states earthworms 'help in the breakdown of complex organic matter as well as in loosening of the soil.' This dual role makes them beneficial to agriculture — they are detritivores that aid fragmentation."
},
{
  id: 91,
  topic: "Decomposition",
  q: "The raw material for decomposition is:",
  options: [
    "Humus",
    "Inorganic nutrients",
    "Detritus",
    "Mineral salts"
  ],
  correct: 2,
  explanation: "NCERT states: 'detritus... is the raw material for decomposition.' Humus is an intermediate product of decomposition, not the raw material. Detritus includes dead remains and fecal matter."
},
{
  id: 92,
  topic: "Decomposition",
  q: "Consider the following statements:<br>(A) Fragmentation is carried out by bacterial and fungal enzymes.<br>(B) Catabolism is carried out by detritivores like earthworms.<br>(C) Leaching involves movement of water-soluble nutrients into soil horizon.<br>(D) Humification and mineralisation occur in the soil.<br>Which of the above are <b>incorrect</b>?",
  options: [
    "(A) and (B) only",
    "(C) and (D) only",
    "(A), (B) and (C)",
    "(B) and (D) only"
  ],
  correct: 0,
  explanation: "Statements A and B are reversed. Fragmentation is by detritivores (earthworms), and catabolism is by bacterial and fungal enzymes. Statements C and D are correct as per NCERT. Swapping fragmentation and catabolism agents is a very common NEET trap."
},
{
  id: 93,
  topic: "Decomposition",
  q: "During leaching, the nutrients that go down into the soil horizon become:",
  options: [
    "Immediately available to plants",
    "Part of humus",
    "Precipitated as unavailable salts",
    "Converted to organic compounds"
  ],
  correct: 2,
  explanation: "NCERT states: nutrients 'go down into the soil horizon and get precipitated as unavailable salts.' The key term is 'unavailable' — these salts are not readily accessible to plants. Students often assume leached nutrients are immediately available."
},
{
  id: 94,
  topic: "Decomposition",
  q: "Temperature and soil moisture regulate decomposition through their effects on:",
  options: [
    "Chemical composition of detritus",
    "Rate of photosynthesis",
    "Activities of soil microbes",
    "Physical structure of the ecosystem"
  ],
  correct: 2,
  explanation: "NCERT states: 'Temperature and soil moisture are the most important climatic factors that regulate decomposition through their effects on the activities of soil microbes.' Soil microbes are the agents of decomposition."
},
{
  id: 95,
  topic: "Decomposition",
  q: "<b>Assertion (A):</b> In tundra regions, there is a significant build up of organic materials.<br><b>Reason (R):</b> Low temperature inhibits the activity of decomposers.",
  options: [
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false"
  ],
  correct: 1,
  explanation: "Both are true. NCERT states low temperature inhibits decomposition resulting in build up of organic materials. In tundra, extremely low temperatures reduce microbial activity, slowing decomposition significantly. R correctly explains A."
},
{
  id: 96,
  topic: "Decomposition",
  q: "Which of the following substances in detritus would <b>slow down</b> the rate of decomposition?<br>(i) Lignin<br>(ii) Nitrogen<br>(iii) Chitin<br>(iv) Water-soluble sugars",
  options: [
    "(i) and (iii) only",
    "(ii) and (iv) only",
    "(i), (ii) and (iii)",
    "(i), (iii) and (iv)"
  ],
  correct: 0,
  explanation: "NCERT states decomposition is slower when detritus is rich in lignin and chitin. Nitrogen and water-soluble sugars ACCELERATE decomposition. This lignin-chitin vs nitrogen-sugars distinction is extremely important for NEET."
},
{
  id: 97,
  topic: "Decomposition",
  q: "Which of the following is <b>not</b> a step in the process of decomposition as per NCERT?",
  options: [
    "Fragmentation",
    "Nitrification",
    "Humification",
    "Catabolism"
  ],
  correct: 1,
  explanation: "NCERT lists five steps: Fragmentation, Leaching, Catabolism, Humification and Mineralisation. Nitrification is a part of the nitrogen cycle, not a step of decomposition as described in this chapter."
},
{
  id: 98,
  topic: "Decomposition",
  q: "The agents involved in catabolism during decomposition are:",
  options: [
    "Detritivores like earthworms",
    "Physical forces like wind and water",
    "Bacterial and fungal enzymes",
    "Autotrophs and producers"
  ],
  correct: 2,
  explanation: "NCERT states: 'Bacterial and fungal enzymes degrade detritus into simpler inorganic substances. This process is called catabolism.' Detritivores carry out fragmentation, not catabolism."
},
{
  id: 99,
  topic: "Decomposition",
  q: "How many of the following statements are correct?<br>(i) Decomposition converts complex organic matter into inorganic substances.<br>(ii) Detritus includes fecal matter.<br>(iii) Humus is resistant to microbial action.<br>(iv) Catabolism is carried out by detritivores.<br>(v) Mineralisation releases inorganic nutrients from humus.",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 2,
  explanation: "Statements (i), (ii), (iii), and (v) are correct. Statement (iv) is wrong — catabolism is carried out by bacterial and fungal enzymes, not detritivores. Detritivores carry out fragmentation. So four statements are correct."
},
{
  id: 100,
  topic: "Decomposition",
  q: "The two factors that control the rate of decomposition are:",
  options: [
    "Light intensity and wind speed",
    "Chemical composition of detritus and climatic factors",
    "Soil pH and altitude",
    "Biotic diversity and abiotic stress"
  ],
  correct: 1,
  explanation: "NCERT states: 'The rate of decomposition is controlled by chemical composition of detritus and climatic factors.' These are the two broad categories of factors controlling decomposition rate."
},
{
  id: 101,
  topic: "Decomposition",
  q: "Select the <b>correct</b> statement(s):<br>(A) Fragmentation, leaching and catabolism operate sequentially, not simultaneously.<br>(B) Humification and mineralisation occur during decomposition in the soil.<br>(C) Leaching results in precipitation of available salts.",
  options: [
    "(A) only",
    "(B) only",
    "(A) and (C) only",
    "(B) and (C) only"
  ],
  correct: 1,
  explanation: "Only (B) is correct. Statement (A) is wrong — NCERT explicitly says 'all the above steps in decomposition operate simultaneously on the detritus.' Statement (C) is wrong — leaching results in precipitation of UNAVAILABLE salts, not available ones."
},
{
  id: 102,
  topic: "Decomposition",
  q: "<b>Assertion (A):</b> Humus serves as a reservoir of nutrients.<br><b>Reason (R):</b> Humus is colloidal in nature.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is not the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true as per NCERT. The colloidal nature of humus gives it a large surface area and charge properties that help it adsorb and hold nutrients, thus serving as a reservoir. R correctly explains A — colloidal nature is the reason for nutrient holding capacity."
},
{
  id: 103,
  topic: "Decomposition",
  q: "Which of the following pairs is <b>correctly</b> matched?",
  options: [
    "Fragmentation – Bacterial enzymes",
    "Catabolism – Earthworms",
    "Mineralisation – Release of inorganic nutrients from humus",
    "Leaching – Formation of humus"
  ],
  correct: 2,
  explanation: "Mineralisation is correctly matched — it involves degradation of humus by microbes and release of inorganic nutrients. Option A is wrong (fragmentation = detritivores). Option B is wrong (catabolism = bacterial/fungal enzymes). Option D is wrong (leaching = movement of water-soluble nutrients, not humus formation)."
},
{
  id: 104,
  topic: "Decomposition",
  q: "In which of the following conditions would decomposition be <b>fastest</b>?",
  options: [
    "Cold and dry environment with lignin-rich detritus",
    "Warm and moist environment with nitrogen-rich detritus",
    "Cold and moist environment with chitin-rich detritus",
    "Warm and dry environment with lignin-rich detritus"
  ],
  correct: 1,
  explanation: "Decomposition is fastest when: (1) environment is warm and moist (favours microbial activity), and (2) detritus is rich in nitrogen and water-soluble substances. Option B satisfies both conditions. Lignin and chitin slow down decomposition; cold temperature inhibits it."
},
{
  id: 105,
  topic: "Decomposition",
  q: "Which of the following is the correct sequence from raw material to final products in decomposition?",
  options: [
    "Humus → Detritus → Inorganic nutrients",
    "Detritus → Humus → Inorganic nutrients",
    "Inorganic nutrients → Detritus → Humus",
    "Detritus → Inorganic nutrients → Humus"
  ],
  correct: 1,
  explanation: "Detritus is the raw material → undergoes various steps → humification produces humus → mineralisation further degrades humus → releasing inorganic nutrients. So the correct sequence is Detritus → Humus → Inorganic nutrients."
},
{
  id: 106,
  topic: "Decomposition",
  q: "Dead plant remains such as leaves, bark and flowers along with dead animal remains and fecal matter collectively form:",
  options: [
    "Humus",
    "Detritus",
    "Compost",
    "Minerals"
  ],
  correct: 1,
  explanation: "NCERT defines: 'Dead plant remains such as leaves, bark, flowers and dead remains of animals, including fecal matter, constitute detritus.' Humus is a product of decomposition, not the starting material."
},
{
  id: 107,
  topic: "Decomposition",
  q: "Which of the following is <b>true</b> about the process of leaching?",
  options: [
    "Detritus is broken into smaller particles",
    "Humus accumulates in the soil",
    "Water-soluble inorganic nutrients go down into soil horizon",
    "Bacterial enzymes degrade detritus into inorganic substances"
  ],
  correct: 2,
  explanation: "NCERT states: 'By the process of leaching, water-soluble inorganic nutrients go down into the soil horizon and get precipitated as unavailable salts.' Option A = fragmentation, B = humification, D = catabolism."
},
{
  id: 108,
  topic: "Decomposition",
  q: "Consider the following:<br>(i) Humus is amorphous<br>(ii) Humus is resistant to microbial action<br>(iii) Humus decomposes rapidly<br>(iv) Humus is colloidal<br>(v) Humus is dark coloured<br>How many of the above are correct as per NCERT?",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 2,
  explanation: "Statements (i), (ii), (iv), and (v) are correct. Statement (iii) is wrong — humus undergoes decomposition at an extremely SLOW rate, not rapidly. So four statements are correct."
},
{
  id: 109,
  topic: "Decomposition",
  q: "In which of the following conditions would organic materials accumulate?<br>(i) Low temperature<br>(ii) High temperature and moisture<br>(iii) Anaerobiosis<br>(iv) Aerobic conditions",
  options: [
    "(i) and (iii) only",
    "(ii) and (iv) only",
    "(i), (ii) and (iii)",
    "(i) and (iv) only"
  ],
  correct: 0,
  explanation: "NCERT states: 'low temperature and anaerobiosis inhibit decomposition resulting in build up of organic materials.' High temperature with moisture and aerobic conditions favour decomposition, so organic materials would NOT accumulate under those conditions."
},
{
  id: 110,
  topic: "Decomposition",
  q: "<b>Assertion (A):</b> Detritus rich in lignin decomposes faster than detritus rich in nitrogen.<br><b>Reason (R):</b> Lignin is easily degraded by microbial enzymes.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "Both A and R are false"
  ],
  correct: 3,
  explanation: "Both A and R are false. NCERT states decomposition is SLOWER when detritus is rich in lignin and chitin, and QUICKER when rich in nitrogen. Lignin is resistant to microbial degradation, not easily degraded. Both statements are opposite to NCERT."
},
{
  id: 111,
  topic: "Energy Flow",
  q: "Sun is the only source of energy for all ecosystems on Earth except:",
  options: [
    "Tropical rainforest ecosystem",
    "Deep sea hydro-thermal ecosystem",
    "Desert ecosystem",
    "Tundra ecosystem"
  ],
  correct: 1,
  explanation: "NCERT states: 'Except for the deep sea hydro-thermal ecosystem, sun is the only source of energy for all ecosystems on Earth.' Deep sea hydro-thermal ecosystems derive energy from chemical sources (chemosynthesis). This is a frequently tested NCERT-specific fact."
},
{
  id: 112,
  topic: "Energy Flow",
  q: "Of the incident solar radiation, the photosynthetically active radiation (PAR) constitutes:",
  options: [
    "Less than 50 per cent",
    "Exactly 50 per cent",
    "More than 50 per cent",
    "About 2-10 per cent"
  ],
  correct: 0,
  explanation: "NCERT states: 'Of the incident solar radiation less than 50 per cent of it is photosynthetically active radiation (PAR).' Option D (2-10%) refers to the percentage of PAR captured by plants, NOT the PAR itself. This is the most common NEET trap in this topic."
},
{
  id: 113,
  topic: "Energy Flow",
  q: "Plants capture what percentage of PAR?",
  options: [
    "Less than 50 per cent",
    "50 per cent",
    "2-10 per cent",
    "100 per cent"
  ],
  correct: 2,
  explanation: "NCERT states: 'Plants capture only 2-10 per cent of the PAR.' Note: this is 2-10% of PAR, not of total incident solar radiation. Less than 50% refers to PAR as a fraction of total solar radiation."
},
{
  id: 114,
  topic: "Energy Flow",
  q: "Consider the following statements:<br>(i) Plants capture 2-10% of total incident solar radiation.<br>(ii) PAR is less than 50% of incident solar radiation.<br>(iii) Plants capture 2-10% of PAR.<br>Which of the above is/are correct?",
  options: [
    "(i) and (ii) only",
    "(ii) and (iii) only",
    "(i) only",
    "(i), (ii) and (iii)"
  ],
  correct: 1,
  explanation: "Statements (ii) and (iii) are correct as per NCERT. Statement (i) is WRONG — plants capture 2-10% of PAR, not of total incident solar radiation. Since PAR itself is <50% of total radiation, plants capture 2-10% of that <50%. This distinction is the most tested trap in energy flow."
},
{
  id: 115,
  topic: "Energy Flow",
  q: "The flow of energy in an ecosystem is:",
  options: [
    "Bidirectional",
    "Cyclic",
    "Multidirectional",
    "Unidirectional"
  ],
  correct: 3,
  explanation: "NCERT states: 'you find unidirectional flow of energy from the sun to producers and then to consumers.' Energy flows only in one direction — from lower to higher trophic levels — and is lost as heat at each level. It cannot be recycled."
},
{
  id: 116,
  topic: "Energy Flow",
  q: "Ecosystems need a constant supply of energy to counteract the universal tendency toward increasing disorderliness. This is in accordance with:",
  options: [
    "First Law of Thermodynamics",
    "Second Law of Thermodynamics",
    "Law of Limiting Factors",
    "Law of Minimum"
  ],
  correct: 1,
  explanation: "NCERT states: 'ecosystems are not exempt from the Second Law of thermodynamics. They need a constant supply of energy to synthesise the molecules they require, to counteract the universal tendency toward increasing disorderliness.' The Second Law relates to entropy (disorder)."
},
{
  id: 117,
  topic: "Energy Flow",
  q: "In a terrestrial ecosystem, the major producers are:",
  options: [
    "Phytoplankton and algae",
    "Herbaceous and woody plants",
    "Fungi and bacteria",
    "Mosses and lichens only"
  ],
  correct: 1,
  explanation: "NCERT states: 'In a terrestrial ecosystem, major producers are herbaceous and woody plants.' Phytoplankton and algae are producers of aquatic ecosystems. Fungi and bacteria are decomposers."
},
{
  id: 118,
  topic: "Energy Flow",
  q: "Producers in an aquatic ecosystem include:<br>(i) Phytoplankton<br>(ii) Algae<br>(iii) Higher plants<br>(iv) Zooplankton",
  options: [
    "(i), (ii), (iii) and (iv)",
    "(i) and (ii) only",
    "(i), (ii) and (iii) only",
    "(i) and (iv) only"
  ],
  correct: 2,
  explanation: "NCERT states: 'producers in an aquatic ecosystem are various species like phytoplankton, algae and higher plants.' Zooplankton are consumers, not producers."
},
{
  id: 119,
  topic: "Energy Flow",
  q: "An animal that feeds on plants is called a primary consumer. What is it also called?",
  options: [
    "Primary carnivore",
    "Secondary consumer",
    "Herbivore",
    "Omnivore"
  ],
  correct: 2,
  explanation: "NCERT states: 'Obviously the primary consumers will be herbivores.' Primary consumers feed directly on producers (plants) and are therefore herbivores by definition."
},
{
  id: 120,
  topic: "Energy Flow",
  q: "Which of the following is a common herbivore in an aquatic ecosystem as per NCERT?",
  options: [
    "Insects",
    "Birds",
    "Mammals",
    "Molluscs"
  ],
  correct: 3,
  explanation: "NCERT states: 'Some common herbivores are insects, birds and mammals in terrestrial ecosystem and molluscs in aquatic ecosystem.' Molluscs as aquatic herbivores is a frequently overlooked NCERT detail."
},
{
  id: 121,
  topic: "Energy Flow",
  q: "A primary carnivore in a food chain is the same as:",
  options: [
    "Primary consumer",
    "Secondary consumer",
    "Tertiary consumer",
    "Producer"
  ],
  correct: 1,
  explanation: "NCERT states: 'The consumers that feed on these herbivores are carnivores, or more correctly primary carnivores (though secondary consumers).' So primary carnivore = secondary consumer. This nomenclature confusion is a common NEET trap."
},
{
  id: 122,
  topic: "Energy Flow",
  q: "In the food chain: Grass → Goat → Man, the trophic levels of goat and man respectively are:",
  options: [
    "T1 and T2",
    "T2 and T3",
    "T3 and T4",
    "T1 and T3"
  ],
  correct: 1,
  explanation: "Grass = Producer = T1. Goat = Primary consumer (herbivore) = T2. Man = Secondary consumer = T3. So goat and man occupy T2 and T3 respectively."
},
{
  id: 123,
  topic: "Energy Flow",
  q: "The detritus food chain (DFC) begins with:",
  options: [
    "Living producers",
    "Primary consumers",
    "Dead organic matter",
    "Sunlight"
  ],
  correct: 2,
  explanation: "NCERT states: 'The detritus food chain (DFC) begins with dead organic matter.' It is made up of decomposers which degrade dead organic matter or detritus. GFC begins with living producers."
},
{
  id: 124,
  topic: "Energy Flow",
  q: "Decomposers are also known as:",
  options: [
    "Autotrophs",
    "Saprotrophs",
    "Lithotrophs",
    "Chemotrophs"
  ],
  correct: 1,
  explanation: "NCERT states: 'These are also known as saprotrophs (sapro: to decompose).' Saprotrophs meet their energy and nutrient requirements by degrading dead organic matter or detritus."
},
{
  id: 125,
  topic: "Energy Flow",
  q: "<b>Assertion (A):</b> In an aquatic ecosystem, GFC is the major conduit for energy flow.<br><b>Reason (R):</b> In a terrestrial ecosystem, a much larger fraction of energy flows through the DFC than through GFC.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both statements are true as per NCERT. However, the dominance of DFC in terrestrial ecosystems does not explain WHY GFC is dominant in aquatic ecosystems. They are independent facts about different ecosystems. R is not the explanation of A."
},
{
  id: 126,
  topic: "Energy Flow",
  q: "In a terrestrial ecosystem, the major conduit for energy flow is:",
  options: [
    "Grazing food chain",
    "Detritus food chain",
    "Parasitic food chain",
    "Both GFC and DFC equally"
  ],
  correct: 1,
  explanation: "NCERT states: 'in a terrestrial ecosystem, a much larger fraction of energy flows through the detritus food chain than through the GFC.' Students commonly assume GFC is dominant everywhere — this is a classic NEET trap."
},
{
  id: 127,
  topic: "Energy Flow",
  q: "Which of the following organisms help in connecting the detritus food chain with the grazing food chain?",
  options: [
    "Strict herbivores",
    "Strict carnivores",
    "Omnivores like cockroaches and crows",
    "Autotrophs"
  ],
  correct: 2,
  explanation: "NCERT states: 'some animals like cockroaches, crows, etc., are omnivores' and 'some of the organisms of DFC are prey to the GFC animals.' Omnivores connect DFC and GFC, forming food webs."
},
{
  id: 128,
  topic: "Energy Flow",
  q: "Food webs are formed due to:",
  options: [
    "Organisms feeding on only one type of food",
    "Natural interconnection of food chains",
    "Energy being recycled in ecosystems",
    "All organisms belonging to the same trophic level"
  ],
  correct: 1,
  explanation: "NCERT states: 'These natural interconnection of food chains make it a food web.' Food webs arise because organisms often feed at multiple trophic levels and multiple food chains overlap."
},
{
  id: 129,
  topic: "Energy Flow",
  q: "The trophic level occupied by producers is:",
  options: [
    "First trophic level",
    "Second trophic level",
    "Third trophic level",
    "Zero trophic level"
  ],
  correct: 0,
  explanation: "NCERT states: 'Producers belong to the first trophic level, herbivores (primary consumer) to the second and carnivores (secondary consumer) to the third.' Producers always occupy T1."
},
{
  id: 130,
  topic: "Energy Flow",
  q: "The amount of energy at successive trophic levels in an ecosystem:",
  options: [
    "Increases",
    "Remains the same",
    "Decreases",
    "First increases then decreases"
  ],
  correct: 2,
  explanation: "NCERT states: 'the amount of energy decreases at successive trophic levels.' This is because only about 10% of energy is transferred from one trophic level to the next, with the rest being lost as heat."
},
{
  id: 131,
  topic: "Energy Flow",
  q: "The standing crop of a trophic level is measured as:",
  options: [
    "The rate of energy flow per unit time",
    "The mass of living organisms (biomass) or the number in a unit area",
    "The total dead organic matter in the ecosystem",
    "The rate of production of new biomass"
  ],
  correct: 1,
  explanation: "NCERT states: 'The standing crop is measured as the mass of living organisms (biomass) or the number in a unit area.' Standing crop is not a rate — it is the mass of living material at a particular time."
},
{
  id: 132,
  topic: "Energy Flow",
  q: "Measurement of biomass in terms of dry weight is more accurate because:",
  options: [
    "Dry weight includes water content",
    "Water content varies among organisms and does not represent true organic matter",
    "Dry weight is always higher than fresh weight",
    "Fresh weight cannot be measured"
  ],
  correct: 1,
  explanation: "Dry weight removes variable water content, giving a more consistent and accurate measure of actual organic matter. Water content varies between species, seasons, and conditions, making fresh weight an unreliable comparison metric."
},
{
  id: 133,
  topic: "Energy Flow",
  q: "According to the 10 per cent law, if the energy available at the producer level is 10,000 kcal, the energy available at the tertiary consumer level would be:",
  options: [
    "1000 kcal",
    "100 kcal",
    "10 kcal",
    "1 kcal"
  ],
  correct: 2,
  explanation: "Producer = 10,000 kcal → Primary consumer (10%) = 1000 kcal → Secondary consumer (10%) = 100 kcal → Tertiary consumer (10%) = 10 kcal. Three transfers occur, each retaining only 10%."
},
{
  id: 134,
  topic: "Energy Flow",
  q: "The number of trophic levels in a grazing food chain is restricted because of:",
  options: [
    "Availability of space",
    "10 per cent law of energy transfer",
    "Absence of decomposers",
    "Lack of water"
  ],
  correct: 1,
  explanation: "NCERT states: 'The number of trophic levels in the grazing food chain is restricted as the transfer of energy follows 10 per cent law.' With only 10% transferred at each level, energy becomes insufficient to support another trophic level after 4-5 levels."
},
{
  id: 135,
  topic: "Energy Flow",
  q: "Which of the following statements about decomposers is <b>incorrect</b>?",
  options: [
    "They are heterotrophic organisms",
    "They are mainly fungi and bacteria",
    "They secrete digestive enzymes that breakdown dead matter",
    "They absorb complex organic materials directly without digestion"
  ],
  correct: 3,
  explanation: "NCERT states: 'Decomposers secrete digestive enzymes that breakdown dead and waste materials into simple, inorganic materials, which are subsequently absorbed by them.' They first digest externally (extracellular digestion) and then absorb — they do NOT absorb complex materials directly."
},
{
  id: 136,
  topic: "Energy Flow",
  q: "<b>Assertion (A):</b> The detritus food chain may be connected with the grazing food chain at some levels.<br><b>Reason (R):</b> Some organisms of DFC are prey to the GFC animals and some animals are omnivores.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is not the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are directly from NCERT. DFC connects to GFC because: (1) some DFC organisms are eaten by GFC animals, and (2) omnivores like cockroaches and crows feed in both chains. R correctly explains A."
},
{
  id: 137,
  topic: "Energy Flow",
  q: "Consider the following:<br>(i) In aquatic ecosystems, GFC is the major conduit for energy flow.<br>(ii) In terrestrial ecosystems, GFC is the major conduit for energy flow.<br>(iii) DFC begins with dead organic matter.<br>(iv) GFC begins with living producers.<br>Which of the above are correct?",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "(ii), (iii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 1,
  explanation: "Statements (i), (iii), and (iv) are correct. Statement (ii) is WRONG — in terrestrial ecosystems, DFC (not GFC) is the major conduit for energy flow. This GFC-aquatic vs DFC-terrestrial distinction is among the most tested NEET facts."
},
{
  id: 138,
  topic: "Energy Flow",
  q: "When any organism dies, it is converted to detritus or dead biomass that serves as an energy source for:",
  options: [
    "Producers",
    "Primary consumers",
    "Decomposers",
    "Autotrophs"
  ],
  correct: 2,
  explanation: "NCERT states: 'When any organism dies it is converted to detritus or dead biomass that serves as an energy source for decomposers.' Dead biomass enters the detritus food chain where decomposers break it down."
},
{
  id: 139,
  topic: "Energy Flow",
  q: "The standing crop refers to:",
  options: [
    "The total crop harvested in a year",
    "Each trophic level has a certain mass of living material at a particular time",
    "The detritus accumulated over many years",
    "The total productivity of all trophic levels combined"
  ],
  correct: 1,
  explanation: "NCERT states: 'Each trophic level has a certain mass of living material at a particular time called as the standing crop.' It is a snapshot of biomass at a given point in time, not a cumulative or rate measure."
},
{
  id: 140,
  topic: "Energy Flow",
  q: "Select the <b>incorrect</b> statement about energy flow in an ecosystem:",
  options: [
    "Energy flow is unidirectional",
    "Energy flow follows the 10 per cent law",
    "Energy trapped by a producer remains permanently in the organism",
    "Energy decreases at successive trophic levels"
  ],
  correct: 2,
  explanation: "NCERT states: 'No energy that is trapped into an organism remains in it for ever.' Energy is either passed on to a consumer or released when the organism dies. Option C directly contradicts this NCERT statement."
},
{
  id: 141,
  topic: "Energy Flow",
  q: "Death of an organism is the beginning of:",
  options: [
    "Grazing food chain",
    "Parasitic food chain",
    "Detritus food chain",
    "Predator food chain"
  ],
  correct: 2,
  explanation: "NCERT states: 'Death of organism is the beginning of the detritus food chain/web.' Dead organic matter forms detritus, which is the starting point of DFC."
},
{
  id: 142,
  topic: "Energy Flow",
  q: "According to the 10 per cent law, if the primary producers fix 1000 J of energy, how much energy would be available to the secondary consumers?",
  options: [
    "100 J",
    "10 J",
    "1 J",
    "0.1 J"
  ],
  correct: 1,
  explanation: "Producers = 1000 J → Primary consumers (10%) = 100 J → Secondary consumers (10%) = 10 J. Two transfers, each retaining 10% of the previous level's energy."
},
{
  id: 143,
  topic: "Energy Flow",
  q: "Which of the following correctly represents a simple grazing food chain as per NCERT?",
  options: [
    "Dead leaves → Earthworm → Frog → Snake",
    "Grass → Goat → Man",
    "Phytoplankton → Bacteria → Fish",
    "Detritus → Fungi → Bacteria"
  ],
  correct: 1,
  explanation: "NCERT specifically depicts: 'Grass → Goat → Man' as a simple grazing food chain where Grass = Producer, Goat = Primary Consumer, Man = Secondary Consumer. Option A and D are detritus food chains. Option C is incorrect as bacteria are decomposers, not primary consumers of phytoplankton."
},
{
  id: 144,
  topic: "Energy Flow",
  q: "<b>Assertion (A):</b> The number of trophic levels in a detritus food chain may not be as restricted as in a grazing food chain.<br><b>Reason (R):</b> The 10 per cent law strictly restricts the number of trophic levels in GFC.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Both are true. NCERT implies that GFC is restricted by the 10% law by questioning whether similar limitation exists in DFC. However, the 10% law's restriction on GFC does not directly explain why DFC may have fewer restrictions — the energy dynamics in DFC are different. R is not the correct explanation of A."
},
{
  id: 145,
  topic: "Energy Flow",
  q: "The biomass of a species is expressed in terms of:",
  options: [
    "Number of individuals only",
    "Fresh or dry weight",
    "Volume of organisms",
    "Rate of reproduction"
  ],
  correct: 1,
  explanation: "NCERT states: 'The biomass of a species is expressed in terms of fresh or dry weight.' Dry weight measurement is considered more accurate as it eliminates variable water content."
},
{
  id: 146,
  topic: "Energy Flow",
  q: "Consider the following organisms:<br>(i) Cockroaches<br>(ii) Crows<br>(iii) Goats<br>(iv) Frogs<br>Which of these are omnivores as per NCERT?",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii)",
    "(iii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 0,
  explanation: "NCERT specifically mentions 'some animals like cockroaches, crows, etc., are omnivores.' Goats are herbivores and frogs are carnivores. Only cockroaches and crows are named as omnivores in this context."
},
{
  id: 147,
  topic: "Energy Flow",
  q: "Which of the following is <b>true</b> about a trophic level?",
  options: [
    "It is based on the habitat of the organism",
    "It is based on the source of nutrition or food of the organism",
    "It is based on the reproductive capacity of the organism",
    "It is based on the body size of the organism"
  ],
  correct: 1,
  explanation: "NCERT states: 'Based on the source of their nutrition or food, organisms occupy a specific place in the food chain that is known as their trophic level.' Trophic level is determined by feeding relationships, not habitat, size, or reproduction."
},
{
  id: 148,
  topic: "Energy Flow",
  q: "How many of the following are correct?<br>(i) PAR is less than 50% of incident solar radiation.<br>(ii) Plants capture 2-10% of PAR.<br>(iii) GFC is the major conduit in terrestrial ecosystems.<br>(iv) Standing crop is measured as biomass or number per unit area.<br>(v) Decomposers are also called saprotrophs.",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 2,
  explanation: "Statements (i), (ii), (iv), and (v) are correct — all directly from NCERT. Statement (iii) is WRONG — DFC (not GFC) is the major conduit in terrestrial ecosystems. GFC is major in aquatic ecosystems. Four statements are correct."
},
{
  id: 149,
  topic: "Energy Flow",
  q: "An organism at the second trophic level is a:",
  options: [
    "Producer",
    "Primary consumer / Herbivore",
    "Secondary consumer / Primary carnivore",
    "Tertiary consumer"
  ],
  correct: 1,
  explanation: "NCERT states: 'Producers belong to the first trophic level, herbivores (primary consumer) to the second and carnivores (secondary consumer) to the third.' T2 = Primary consumer = Herbivore."
},
{
  id: 150,
  topic: "Energy Flow",
  q: "<b>Assertion (A):</b> Only 2-10% of PAR sustains the entire living world.<br><b>Reason (R):</b> All organisms are dependent for their food on producers, either directly or indirectly.",
  options: [
    "A is false but R is true",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true as per NCERT. Plants capture only 2-10% of PAR, and this small amount sustains the entire living world because all organisms depend on producers (directly or indirectly) for food. R correctly explains WHY this small energy capture sustains all life."
},
{
  id: 151,
  topic: "Energy Flow",
  q: "In the context of energy flow, which law of thermodynamics explains that energy is neither created nor destroyed but transformed?",
  options: [
    "Second Law of Thermodynamics",
    "Zeroth Law of Thermodynamics",
    "First Law of Thermodynamics",
    "Third Law of Thermodynamics"
  ],
  correct: 2,
  explanation: "The First Law of Thermodynamics (Law of Conservation of Energy) states that energy can neither be created nor destroyed but only transformed. NCERT asks: 'Is this in keeping with the first law of thermodynamics?' regarding unidirectional energy flow."
},
{
  id: 152,
  topic: "Energy Flow",
  q: "Decomposers meet their energy and nutrient requirements by:",
  options: [
    "Photosynthesis",
    "Chemosynthesis",
    "Degrading dead organic matter or detritus",
    "Consuming living organisms"
  ],
  correct: 2,
  explanation: "NCERT states: 'They meet their energy and nutrient requirements by degrading dead organic matter or detritus.' Decomposers are saprotrophs — they feed on dead matter, not living organisms, and do not photosynthesise."
},
{
  id: 153,
  topic: "Energy Flow",
  q: "Select the correct match:<br>(A) Primary consumer → Herbivore → T2<br>(B) Secondary consumer → Primary carnivore → T3<br>(C) Producer → Autotroph → T1<br>(D) Tertiary consumer → Secondary carnivore → T4",
  options: [
    "(A) and (C) only",
    "(A), (B) and (C) only",
    "(A), (C) and (D) only",
    "(A), (B), (C) and (D)"
  ],
  correct: 3,
  explanation: "All four matches are correct as per NCERT. Primary consumer = Herbivore = T2. Secondary consumer = Primary carnivore = T3. Producer = Autotroph = T1. Tertiary consumer = Secondary carnivore = T4."
},
{
  id: 154,
  topic: "Energy Flow",
  q: "In a food chain with 4 trophic levels, if the energy at T1 is 100,000 J, what would be the energy at T4 as per the 10% law?",
  options: [
    "1000 J",
    "100 J",
    "10 J",
    "10,000 J"
  ],
  correct: 1,
  explanation: "T1 = 100,000 J → T2 = 10,000 J (10%) → T3 = 1,000 J (10%) → T4 = 100 J (10%). Three energy transfers occur between T1 and T4, each passing only 10%."
},
{
  id: 155,
  topic: "Energy Flow",
  q: "Which of the following is <b>incorrect</b>?",
  options: [
    "Saprotrophs secrete digestive enzymes on dead matter externally",
    "Simple inorganic materials are subsequently absorbed by decomposers after extracellular digestion",
    "Decomposers include mainly fungi and bacteria",
    "Decomposers are autotrophic organisms"
  ],
  correct: 3,
  explanation: "Decomposers are HETEROTROPHIC organisms, not autotrophic. NCERT states: 'It is made up of decomposers which are heterotrophic organisms, mainly fungi and bacteria.' All other options are correct NCERT statements."
},
{
  id: 156,
  topic: "Ecological Pyramids",
  q: "The base of an ecological pyramid represents:",
  options: [
    "Top level consumers",
    "Secondary consumers",
    "Producers or the first trophic level",
    "Decomposers"
  ],
  correct: 2,
  explanation: "NCERT states: 'The base of each pyramid represents the producers or the first trophic level while the apex represents tertiary or top level consumer.' This is a fundamental concept of ecological pyramids."
},
{
  id: 157,
  topic: "Ecological Pyramids",
  q: "The three types of ecological pyramids are:",
  options: [
    "Pyramid of number, pyramid of biomass, pyramid of productivity",
    "Pyramid of number, pyramid of biomass, pyramid of energy",
    "Pyramid of species, pyramid of biomass, pyramid of energy",
    "Pyramid of number, pyramid of diversity, pyramid of energy"
  ],
  correct: 1,
  explanation: "NCERT lists: '(a) pyramid of number; (b) pyramid of biomass and (c) pyramid of energy.' Pyramid of productivity, species, and diversity are not among the three types described in NCERT."
},
{
  id: 158,
  topic: "Ecological Pyramids",
  q: "In a grassland ecosystem, the pyramid of number shows that nearly 6 million plants support how many top carnivores?",
  options: [
    "6",
    "60",
    "3",
    "300"
  ],
  correct: 2,
  explanation: "NCERT states: 'Only three top-carnivores are supported in an ecosystem based on production of nearly 6 millions plants.' This specific grassland data is a favourite in NEET statement-based questions."
},
{
  id: 159,
  topic: "Ecological Pyramids",
  q: "Which of the following pyramids is <b>always upright</b> and can <b>never be inverted</b>?",
  options: [
    "Pyramid of number",
    "Pyramid of biomass",
    "Pyramid of energy",
    "Both pyramid of number and biomass"
  ],
  correct: 2,
  explanation: "NCERT states: 'Pyramid of energy is always upright, can never be inverted, because when energy flows from a particular trophic level to the next, some energy is always lost as heat at each step.' This is the MOST frequently tested fact about ecological pyramids in NEET."
},
{
  id: 160,
  topic: "Ecological Pyramids",
  q: "The pyramid of biomass in sea is generally inverted because:",
  options: [
    "Producers have more biomass than consumers",
    "Biomass of fishes far exceeds that of phytoplankton",
    "Phytoplankton have more biomass than fishes",
    "Decomposers form the largest biomass"
  ],
  correct: 1,
  explanation: "NCERT states: 'The pyramid of biomass in sea is generally inverted because the biomass of fishes far exceeds that of phytoplankton.' Despite being producers, phytoplankton have a small standing crop due to rapid turnover rate."
},
{
  id: 161,
  topic: "Ecological Pyramids",
  q: "In an aquatic ecosystem, a small standing crop of phytoplankton supports a large standing crop of zooplankton. This results in:",
  options: [
    "An upright pyramid of biomass",
    "An inverted pyramid of biomass",
    "An inverted pyramid of energy",
    "An upright pyramid of number"
  ],
  correct: 1,
  explanation: "NCERT states: 'Inverted pyramid of biomass – small standing crop of phytoplankton supports large standing crop of zooplankton.' The producer biomass being less than consumer biomass creates an inverted pyramid of biomass."
},
{
  id: 162,
  topic: "Ecological Pyramids",
  q: "Primary producers convert what percentage of the energy in sunlight available to them into NPP?",
  options: [
    "10%",
    "5%",
    "1%",
    "50%"
  ],
  correct: 2,
  explanation: "NCERT states in the context of energy pyramid: 'primary producers convert only 1% of the energy in the sunlight available to them into NPP.' This is different from 2-10% of PAR — 1% refers to total sunlight available, not just PAR."
},
{
  id: 163,
  topic: "Ecological Pyramids",
  q: "<b>Assertion (A):</b> Pyramid of energy can never be inverted.<br><b>Reason (R):</b> Some energy is always lost as heat when energy flows from one trophic level to the next.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are directly from NCERT. Pyramid of energy is always upright because energy is lost as heat at each trophic level, ensuring energy at a lower level is always more than at a higher level. R correctly explains why energy pyramid cannot be inverted."
},
{
  id: 164,
  topic: "Ecological Pyramids",
  q: "A sparrow is a primary consumer when it eats:",
  options: [
    "Insects and worms",
    "Seeds, fruits and peas",
    "Other small birds",
    "Dead organic matter"
  ],
  correct: 1,
  explanation: "NCERT states: 'a sparrow is a primary consumer when it eats seeds, fruits, peas, and a secondary consumer when it eats insects and worms.' When eating plant material, it is at T2 (primary consumer); when eating insects, it is at T3 (secondary consumer)."
},
{
  id: 165,
  topic: "Ecological Pyramids",
  q: "A sparrow functions as a secondary consumer when it eats:",
  options: [
    "Seeds and fruits",
    "Peas and grains",
    "Insects and worms",
    "Algae and phytoplankton"
  ],
  correct: 2,
  explanation: "NCERT states: 'a sparrow is... a secondary consumer when it eats insects and worms.' Insects and worms are primary consumers (herbivores), so a sparrow eating them functions as a secondary consumer (T3)."
},
{
  id: 166,
  topic: "Ecological Pyramids",
  q: "A trophic level represents:",
  options: [
    "A specific species in the ecosystem",
    "A functional level, not a species as such",
    "The physical location of an organism",
    "The reproductive strategy of an organism"
  ],
  correct: 1,
  explanation: "NCERT states: 'the trophic level represents a functional level, not a species as such. A given species may occupy more than one trophic level in the same ecosystem at the same time.' This is a critical conceptual point for NEET."
},
{
  id: 167,
  topic: "Ecological Pyramids",
  q: "Which of the following is a limitation of ecological pyramids as per NCERT?<br>(i) Does not account for same species at two or more trophic levels.<br>(ii) Assumes a simple food chain.<br>(iii) Does not accommodate food webs.<br>(iv) Saprophytes are not given any place.",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 3,
  explanation: "All four are limitations mentioned in NCERT: doesn't account for species at multiple trophic levels, assumes simple food chains (which almost never exist), doesn't accommodate food webs, and saprophytes are excluded despite their vital role."
},
{
  id: 168,
  topic: "Ecological Pyramids",
  q: "In most ecosystems, pyramids of number, biomass and energy are:",
  options: [
    "Always inverted",
    "Always upright",
    "Upright in most cases",
    "Upright only for energy"
  ],
  correct: 2,
  explanation: "NCERT states: 'In most ecosystems, all the pyramids, of number, of energy and biomass are upright.' Note the word 'most' — there are exceptions for number and biomass, but NOT for energy (which is always upright)."
},
{
  id: 169,
  topic: "Ecological Pyramids",
  q: "An inverted pyramid of number would be observed in which ecosystem?",
  options: [
    "Grassland ecosystem",
    "Pond ecosystem",
    "Tree ecosystem (parasitic food chain)",
    "Desert ecosystem"
  ],
  correct: 2,
  explanation: "NCERT implies: 'If you were to count the number of insects feeding on a big tree... add an estimate of the number of small birds depending on the insects, as also the number of larger birds eating the smaller.' A single tree supports many insects → fewer birds → even fewer large birds, giving an inverted pyramid of number at the base."
},
{
  id: 170,
  topic: "Ecological Pyramids",
  q: "Which of the following is <b>not</b> given any place in ecological pyramids despite playing a vital role in the ecosystem?",
  options: [
    "Producers",
    "Primary consumers",
    "Saprophytes",
    "Tertiary consumers"
  ],
  correct: 2,
  explanation: "NCERT states: 'saprophytes are not given any place in ecological pyramids even though they play a vital role in the ecosystem.' This is one of the major limitations of ecological pyramids."
},
{
  id: 171,
  topic: "Ecological Pyramids",
  q: "Each bar in the energy pyramid indicates:",
  options: [
    "The number of organisms at each trophic level",
    "The amount of energy present at each trophic level in a given time or annually per unit area",
    "The total biomass of organisms at each trophic level",
    "The rate of reproduction at each trophic level"
  ],
  correct: 1,
  explanation: "NCERT states: 'Each bar in the energy pyramid indicates the amount of energy present at each trophic level in a given time or annually per unit area.' This distinguishes energy pyramids from number and biomass pyramids."
},
{
  id: 172,
  topic: "Ecological Pyramids",
  q: "Consider the following statements:<br>(A) Pyramid of energy can be inverted in aquatic ecosystems.<br>(B) Pyramid of biomass is inverted in sea.<br>(C) Pyramid of number is always upright.<br>(D) A given species may occupy more than one trophic level simultaneously.<br>Which of the above are correct?",
  options: [
    "(A) and (C) only",
    "(B) and (D) only",
    "(A), (B) and (D)",
    "(B), (C) and (D)"
  ],
  correct: 1,
  explanation: "Only (B) and (D) are correct. Statement (A) is wrong — pyramid of energy is NEVER inverted in any ecosystem. Statement (C) is wrong — pyramid of number can be inverted (e.g., tree ecosystem). B and D are directly from NCERT."
},
{
  id: 173,
  topic: "Ecological Pyramids",
  q: "<b>Assertion (A):</b> Ecological pyramids do not accommodate food webs.<br><b>Reason (R):</b> Ecological pyramids assume a simple food chain, which almost never exists in nature.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. Ecological pyramids cannot accommodate food webs precisely because they are based on the assumption of a simple, linear food chain. Since nature has food webs, this is a major limitation. R correctly explains A."
},
{
  id: 174,
  topic: "Ecological Pyramids",
  q: "Any calculations of energy content, biomass or numbers in ecological pyramids must:",
  options: [
    "Include only the dominant species at that trophic level",
    "Include all organisms at that trophic level",
    "Include only producers and top consumers",
    "Exclude decomposers and detritivores"
  ],
  correct: 1,
  explanation: "NCERT states: 'Any calculations of energy content, biomass or numbers, has to include all organisms at that trophic level. No generalisations we make will be true if we take only a few individuals at any trophic level into account.'"
},
{
  id: 175,
  topic: "Ecological Pyramids",
  q: "The pyramid of biomass in a terrestrial ecosystem is generally:",
  options: [
    "Inverted",
    "Upright",
    "Spindle-shaped",
    "Variable — sometimes upright, sometimes inverted"
  ],
  correct: 1,
  explanation: "NCERT states: 'In most ecosystems, all the pyramids, of number, of energy and biomass are upright.' The pyramid of biomass is generally upright in terrestrial ecosystems, with biomass decreasing at higher trophic levels. Inversion occurs mainly in aquatic (sea) ecosystems."
},
{
  id: 176,
  topic: "Ecological Pyramids",
  q: "Which of the following statements is <b>correct</b>?",
  options: [
    "Pyramid of energy can be inverted in deep sea ecosystems",
    "Pyramid of biomass is always upright in all ecosystems",
    "Pyramid of number can be inverted in a tree-based ecosystem",
    "Pyramid of energy is sometimes inverted in terrestrial ecosystems"
  ],
  correct: 2,
  explanation: "A tree-based ecosystem gives an inverted pyramid of number — one big tree (producer) supports many insects → fewer birds → even fewer top predators. Option A and D are wrong — energy pyramid is NEVER inverted. Option B is wrong — biomass pyramid is inverted in sea."
},
{
  id: 177,
  topic: "Ecological Pyramids",
  q: "Why is the pyramid of biomass inverted in the ocean despite phytoplankton being the producers?",
  options: [
    "Phytoplankton have very high biomass",
    "Phytoplankton have a small standing crop due to rapid turnover despite high productivity",
    "Fish do not consume phytoplankton",
    "Decomposers have the highest biomass in the ocean"
  ],
  correct: 1,
  explanation: "Phytoplankton reproduce and are consumed rapidly, maintaining a small standing crop (biomass at any given time) despite high productivity. The consumers (zooplankton, fish) accumulate greater biomass, creating an inverted pyramid. This rapid turnover concept explains the apparent paradox."
},
{
  id: 178,
  topic: "Ecological Pyramids",
  q: "In the pyramid of number for a grassland ecosystem, the shape is:",
  options: [
    "Inverted",
    "Upright",
    "Diamond-shaped",
    "Spindle-shaped"
  ],
  correct: 1,
  explanation: "NCERT describes the grassland pyramid of number as upright: 6 million plants → decreasing numbers at each higher trophic level → only 3 top carnivores. Producers are most numerous, and numbers decrease toward the apex."
},
{
  id: 179,
  topic: "Ecological Pyramids",
  q: "How many of the following pyramids can be inverted?<br>(i) Pyramid of number<br>(ii) Pyramid of biomass<br>(iii) Pyramid of energy",
  options: [
    "None",
    "One only",
    "Two only",
    "All three"
  ],
  correct: 2,
  explanation: "Pyramid of number can be inverted (tree ecosystem) and pyramid of biomass can be inverted (sea ecosystem). Pyramid of energy can NEVER be inverted. So two out of three can be inverted."
},
{
  id: 180,
  topic: "Ecological Pyramids",
  q: "<b>Assertion (A):</b> A given species may occupy more than one trophic level in the same ecosystem at the same time.<br><b>Reason (R):</b> Trophic level represents a functional level, not a species as such.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are directly from NCERT. A species can occupy multiple trophic levels (e.g., sparrow at T2 and T3) precisely because trophic levels are functional categories based on feeding relationships, not fixed species designations. R correctly explains A."
},
{
  id: 181,
  topic: "Ecological Pyramids",
  q: "Which of the following correctly explains why energy at a lower trophic level is always more than at a higher level?",
  options: [
    "Organisms at lower levels are larger in size",
    "Energy is lost as heat at each step of transfer",
    "Producers absorb all the solar energy",
    "Consumers do not use energy for metabolism"
  ],
  correct: 1,
  explanation: "NCERT states: 'when energy flows from a particular trophic level to the next trophic level, some energy is always lost as heat at each step.' This progressive loss ensures energy at lower levels always exceeds that at higher levels."
},
{
  id: 182,
  topic: "Ecological Pyramids",
  q: "Select the <b>incorrect</b> statement:",
  options: [
    "Pyramid of number in a grassland ecosystem is upright",
    "Pyramid of biomass in the sea is generally inverted",
    "Pyramid of energy in all ecosystems is always upright",
    "Pyramid of energy in aquatic ecosystems is inverted"
  ],
  correct: 3,
  explanation: "Pyramid of energy is ALWAYS upright and can NEVER be inverted — in ANY ecosystem, including aquatic. Options A, B, and C are all correct NCERT statements. This is the most important ecological pyramid fact for NEET."
},
{
  id: 183,
  topic: "Ecological Pyramids",
  q: "Consider the following about the limitations of ecological pyramids:<br>(i) They do not accommodate food webs.<br>(ii) They account for species at multiple trophic levels.<br>(iii) They assume simple food chains.<br>(iv) Saprophytes are given due importance.<br>How many statements are <b>correct</b>?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "Statements (i) and (iii) are correct limitations. Statement (ii) is wrong — pyramids do NOT account for species at multiple trophic levels (that's a limitation). Statement (iv) is wrong — saprophytes are NOT given any place (another limitation). Two statements are correct."
},
{
  id: 184,
  topic: "Ecological Pyramids",
  q: "In an ecosystem where a large tree is the producer, the pyramid of number would be:",
  options: [
    "Upright with a broad base",
    "Inverted with a narrow base",
    "Always the same as energy pyramid",
    "Diamond-shaped"
  ],
  correct: 1,
  explanation: "NCERT implies: one big tree → many insects feeding on it → fewer small birds → even fewer large birds. Since the producer (one tree) is fewer in number than the consumers (many insects), the base is narrow and the pyramid is inverted."
},
{
  id: 185,
  topic: "Ecological Pyramids",
  q: "The ecological pyramids express the relationship between organisms at different trophic levels in terms of:",
  options: [
    "Number, biomass or energy",
    "Number, diversity or energy",
    "Biomass, diversity or productivity",
    "Number, biomass or productivity"
  ],
  correct: 0,
  explanation: "NCERT states: 'This relationship is expressed in terms of number, biomass or energy.' These are the three parameters used to construct the three types of ecological pyramids."
},
{
  id: 186,
  topic: "Ecological Pyramids",
  q: "In a food chain: Plant → Insect → Frog → Snake → Hawk, how many trophic levels does this food chain have?",
  options: [
    "Three",
    "Four",
    "Five",
    "Six"
  ],
  correct: 2,
  explanation: "Plant = T1, Insect = T2, Frog = T3, Snake = T4, Hawk = T5. There are 5 trophic levels. NCERT mentions that in nature, it is possible to have producer, herbivore, primary carnivore, secondary carnivore levels."
},
{
  id: 187,
  topic: "Ecological Pyramids",
  q: "<b>Assertion (A):</b> The pyramid of biomass in a sea is inverted.<br><b>Reason (R):</b> Phytoplankton have a higher rate of reproduction and turnover, maintaining a small standing crop despite high productivity.",
  options: [
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. The inverted biomass pyramid in the sea occurs because phytoplankton, despite being highly productive, maintain a small standing crop due to rapid reproduction and consumption (high turnover). Consumers accumulate larger biomass. R correctly explains the paradox in A."
},
{
  id: 188,
  topic: "Ecological Pyramids",
  q: "Which of the following is <b>true</b> about ecological pyramids?",
  options: [
    "Saprophytes occupy the apex of all pyramids",
    "Pyramid of energy is sometimes inverted in polar ecosystems",
    "Pyramid of biomass shows a sharp decrease in biomass at higher trophic levels in terrestrial ecosystems",
    "Pyramid of number is always upright in all ecosystems"
  ],
  correct: 2,
  explanation: "NCERT states: 'Pyramid of biomass shows a sharp decrease in biomass at higher trophic levels.' This is true for terrestrial ecosystems. Option A is wrong — saprophytes are not included. Option B is wrong — energy pyramid is never inverted. Option D is wrong — number pyramid can be inverted."
},
{
  id: 189,
  topic: "Ecological Pyramids",
  q: "Humans can function at multiple trophic levels because:",
  options: [
    "They are strict herbivores",
    "They are strict carnivores",
    "They are omnivores — eating both plant and animal food",
    "They are decomposers"
  ],
  correct: 2,
  explanation: "NCERT asks: 'Can you work out how many trophic levels human beings function at in a food chain?' Humans are omnivores — they eat plants (T2 as primary consumer), herbivorous animals (T3 as secondary consumer), and even carnivorous animals (T4 as tertiary consumer)."
},
{
  id: 190,
  topic: "Ecological Pyramids",
  q: "Which of the following pyramids can <b>never</b> be inverted?",
  options: [
    "Pyramid of number",
    "Pyramid of biomass",
    "Both pyramid of number and biomass",
    "Pyramid of energy"
  ],
  correct: 3,
  explanation: "NCERT categorically states: 'Pyramid of energy is always upright, can never be inverted.' Pyramids of number and biomass can both be inverted under certain conditions (tree ecosystem for number, ocean for biomass)."
},
{
  id: 191,
  topic: "Ecological Pyramids",
  q: "Consider the following ecological pyramids:<br>(i) Pyramid of number in a grassland – Upright<br>(ii) Pyramid of biomass in the sea – Upright<br>(iii) Pyramid of energy in a forest – Upright<br>(iv) Pyramid of number in a tree ecosystem – Inverted<br>Which of the above are correctly described?",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "(ii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 1,
  explanation: "Statements (i), (iii), and (iv) are correct. Statement (ii) is wrong — pyramid of biomass in the sea is generally INVERTED (not upright), because fish biomass exceeds phytoplankton biomass."
},
{
  id: 192,
  topic: "Ecological Pyramids",
  q: "An ecological pyramid assumes:",
  options: [
    "A complex food web",
    "Multiple interconnected food chains",
    "A simple food chain",
    "Equal energy at all trophic levels"
  ],
  correct: 2,
  explanation: "NCERT states as a limitation: 'It assumes a simple food chain, something that almost never exists in nature; it does not accommodate a food web.' This assumption makes ecological pyramids an oversimplification of real ecosystems."
},
{
  id: 193,
  topic: "Ecological Pyramids",
  q: "In most ecosystems, producers are more in number and biomass than herbivores, and herbivores are more in number and biomass than carnivores. This describes:",
  options: [
    "Inverted pyramids",
    "Upright pyramids of number and biomass",
    "Pyramid of energy only",
    "Food web pattern"
  ],
  correct: 1,
  explanation: "NCERT states: 'In most ecosystems, all the pyramids, of number, of energy and biomass are upright, i.e., producers are more in number and biomass than the herbivores, and herbivores are more in number and biomass than the carnivores.' This describes upright pyramids."
},
{
  id: 194,
  topic: "Ecological Pyramids",
  q: "Which of the following correctly matches the pyramid type with its characteristic?",
  options: [
    "Pyramid of energy – Can be inverted in aquatic ecosystems",
    "Pyramid of biomass – Always upright in all ecosystems",
    "Pyramid of number – Can be inverted in tree-based ecosystems",
    "Pyramid of energy – Inverted in terrestrial ecosystems"
  ],
  correct: 2,
  explanation: "Pyramid of number can be inverted in a tree-based ecosystem (one tree → many insects → fewer birds). Options A and D are wrong — energy pyramid is never inverted. Option B is wrong — biomass pyramid is inverted in sea."
},
{
  id: 195,
  topic: "Ecological Pyramids",
  q: "<b>Assertion (A):</b> Saprophytes are not given any place in ecological pyramids.<br><b>Reason (R):</b> Saprophytes do not play any significant role in the ecosystem.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "A is true — NCERT states saprophytes are not given place in pyramids. R is FALSE — NCERT says 'even though they play a vital role in the ecosystem.' Saprophytes are important but are simply not accommodated in the pyramid structure."
},
{
  id: 196,
  topic: "Ecological Pyramids",
  q: "How many of the following can result in an inverted ecological pyramid?<br>(i) Pyramid of number in a tree ecosystem<br>(ii) Pyramid of biomass in sea<br>(iii) Pyramid of energy in a tropical forest<br>(iv) Pyramid of biomass in a grassland",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "Only (i) and (ii) result in inverted pyramids. Pyramid of number is inverted in tree ecosystem (one tree supports many insects). Pyramid of biomass is inverted in sea (phytoplankton < fish biomass). Energy pyramid (iii) is NEVER inverted. Biomass pyramid in grassland (iv) is upright."
},
{
  id: 197,
  topic: "Ecological Pyramids",
  q: "If no generalisations about ecological pyramids will be true unless we include all individuals at a trophic level, what must calculations of energy, biomass or numbers include?",
  options: [
    "Only dominant species at each trophic level",
    "Only producers and apex predators",
    "All organisms at that trophic level",
    "Only organisms in the grazing food chain"
  ],
  correct: 2,
  explanation: "NCERT states: 'Any calculations of energy content, biomass or numbers, has to include all organisms at that trophic level. No generalisations we make will be true if we take only a few individuals at any trophic level into account.'"
},
{
  id: 198,
  topic: "Ecological Pyramids",
  q: "The apex of an ecological pyramid represents:",
  options: [
    "Producers",
    "Primary consumers",
    "Decomposers",
    "Tertiary or top level consumer"
  ],
  correct: 3,
  explanation: "NCERT states: 'The base of each pyramid represents the producers or the first trophic level while the apex represents tertiary or top level consumer.' The apex always has the fewest organisms, least biomass, and least energy."
},
{
  id: 199,
  topic: "Ecological Pyramids",
  q: "Which of the following is an example of an organism occupying two different trophic levels simultaneously as per NCERT?",
  options: [
    "Earthworm",
    "Phytoplankton",
    "Sparrow",
    "Mushroom"
  ],
  correct: 2,
  explanation: "NCERT specifically uses sparrow as an example: 'a sparrow is a primary consumer when it eats seeds, fruits, peas, and a secondary consumer when it eats insects and worms.' It simultaneously occupies T2 and T3."
},
{
  id: 200,
  topic: "Ecological Pyramids",
  q: "Select the correct combination of statements:<br>(A) Pyramid of energy is always upright.<br>(B) Pyramid of biomass is always upright.<br>(C) Pyramid of number is always upright.<br>(D) Energy at a lower trophic level is always more than at a higher level.",
  options: [
    "(A) and (D) only",
    "(A), (B) and (D) only",
    "(A), (C) and (D) only",
    "(A), (B), (C) and (D)"
  ],
  correct: 0,
  explanation: "Only (A) and (D) are ALWAYS true. Statement (B) is wrong — biomass pyramid is inverted in the sea. Statement (C) is wrong — number pyramid is inverted in tree ecosystem. Energy-related statements (A and D) are always true because energy is lost as heat at each level."
},
{
  id: 201,
  topic: "Ecosystem – Summary",
  q: "An ecosystem is best described as:",
  options: [
    "Only a functional unit of nature",
    "Only a structural unit of nature",
    "A structural and functional unit of nature comprising abiotic and biotic components",
    "A unit comprising only biotic components"
  ],
  correct: 2,
  explanation: "The summary section of NCERT states: 'An ecosystem is a structural and functional unit of nature and it comprises abiotic and biotic components.' Note that the introduction says 'functional unit' while the summary says 'structural and functional unit' — NEET may test either wording."
},
{
  id: 202,
  topic: "Ecosystem – Summary",
  q: "The abiotic components of an ecosystem include:",
  options: [
    "Producers, consumers and decomposers",
    "Inorganic materials — air, water and soil",
    "Phytoplankton, algae and plants",
    "Fungi, bacteria and flagellates"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Abiotic components are inorganic materials — air, water and soil.' All other options describe biotic components (producers, consumers, decomposers)."
},
{
  id: 203,
  topic: "Ecosystem – Summary",
  q: "The biotic components of an ecosystem are:",
  options: [
    "Air, water and soil",
    "Temperature, light and humidity",
    "Producers, consumers and decomposers",
    "Carbon, nitrogen and phosphorus"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'biotic components are producers, consumers and decomposers.' Options A and B are abiotic components. Option D lists nutrient elements."
},
{
  id: 204,
  topic: "Ecosystem – Summary",
  q: "The two main structural features of an ecosystem are:",
  options: [
    "Productivity and decomposition",
    "Energy flow and nutrient cycling",
    "Species composition and stratification",
    "Food chain and food web"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Species composition and stratification are the two main structural features of an ecosystem.' Options A and B are functional aspects, not structural features."
},
{
  id: 205,
  topic: "Ecosystem – Summary",
  q: "According to the summary section of NCERT, primary productivity is defined as:",
  options: [
    "The amount of biomass produced by consumers",
    "The rate of capture of solar energy or biomass production of the producers",
    "The rate of decomposition of organic matter",
    "The total energy available at the last trophic level"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Primary productivity is the rate of capture of solar energy or biomass production of the producers.' This definition emphasises the rate aspect, distinguishing it from primary production (amount)."
},
{
  id: 206,
  topic: "Ecosystem – Summary",
  q: "As per the NCERT summary, GPP is defined as:",
  options: [
    "The remaining biomass after utilisation by producers",
    "Rate of capture of solar energy or total production of organic matter",
    "Rate of assimilation of food energy by consumers",
    "Rate of decomposition of detritus"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Rate of capture of solar energy or total production of organic matter is called as GPP.' This slightly different wording from the main text is important — NEET may use either version."
},
{
  id: 207,
  topic: "Ecosystem – Summary",
  q: "NPP as defined in the NCERT summary is:",
  options: [
    "Total production of organic matter by producers",
    "Rate of assimilation of food by consumers",
    "The remaining biomass or energy left after utilisation of producers",
    "The total energy fixed by decomposers"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'NPP is the remaining biomass or the energy left after utilisation of producers.' This means NPP = GPP minus what producers use for their own respiration."
},
{
  id: 208,
  topic: "Ecosystem – Summary",
  q: "Secondary productivity as defined in the NCERT summary is:",
  options: [
    "Rate of formation of new organic matter by consumers",
    "Rate of assimilation of food energy by the consumers",
    "Rate of biomass production by producers",
    "Rate of decomposition by saprotrophs"
  ],
  correct: 1,
  explanation: "NCERT summary defines secondary productivity as 'the rate of assimilation of food energy by the consumers.' Note: the main text says 'rate of formation of new organic matter by consumers.' NEET can use either wording — both are correct NCERT definitions from different sections."
},
{
  id: 209,
  topic: "Ecosystem – Summary",
  q: "According to the NCERT summary, decomposition involves which of the following processes?",
  options: [
    "Fragmentation, leaching and catabolism",
    "Fragmentation, leaching, catabolism, humification and mineralisation",
    "Only fragmentation and mineralisation",
    "Only catabolism and humification"
  ],
  correct: 0,
  explanation: "NCERT summary simplifies decomposition to three processes: 'fragmentation of detritus, leaching and catabolism.' The main text describes five steps (including humification and mineralisation). NEET may test either version — students must know both."
},
{
  id: 210,
  topic: "Ecosystem – Summary",
  q: "<b>Assertion (A):</b> The NCERT summary mentions three processes of decomposition while the main text mentions five steps.<br><b>Reason (R):</b> Humification and mineralisation are included in the main text but not explicitly listed in the summary's process list.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "This is a factual observation from NCERT. The summary lists three processes (fragmentation, leaching, catabolism) while the main text lists five steps (adding humification and mineralisation). R correctly identifies the two missing processes, explaining the discrepancy."
},
{
  id: 211,
  topic: "Ecosystem – Summary",
  q: "Nutrient cycling involves:",
  options: [
    "Only the storage of nutrients in the soil",
    "Only the movement of nutrients through organisms",
    "The storage and movement of nutrient elements through various components of the ecosystem",
    "The loss of nutrients from the ecosystem permanently"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'The storage and movement of nutrient elements through the various components of the ecosystem is called nutrient cycling.' Both storage AND movement are included — not just one."
},
{
  id: 212,
  topic: "Ecosystem – Summary",
  q: "Nutrient cycling is of two types:",
  options: [
    "Aerobic and anaerobic",
    "Gaseous and sedimentary",
    "Primary and secondary",
    "Cyclic and non-cyclic"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Nutrient cycling is of two types — gaseous and sedimentary.' Gaseous cycles have atmosphere/hydrosphere as reservoirs, while sedimentary cycles have Earth's crust as reservoir."
},
{
  id: 213,
  topic: "Ecosystem – Summary",
  q: "The reservoir for the gaseous type of nutrient cycle is:",
  options: [
    "Earth's crust",
    "Lithosphere",
    "Atmosphere or hydrosphere",
    "Deep ocean sediments"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Atmosphere or hydrosphere is the reservoir for the gaseous type of cycle (carbon).' Earth's crust is the reservoir for the sedimentary type."
},
{
  id: 214,
  topic: "Ecosystem – Summary",
  q: "The reservoir for the sedimentary type of nutrient cycle is:",
  options: [
    "Atmosphere",
    "Hydrosphere",
    "Earth's crust",
    "Biosphere"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Earth's crust is the reservoir for sedimentary type (phosphorus).' Atmosphere/hydrosphere is the reservoir for gaseous cycles like carbon."
},
{
  id: 215,
  topic: "Ecosystem – Summary",
  q: "Which of the following is an example of a gaseous nutrient cycle?",
  options: [
    "Phosphorus cycle",
    "Carbon cycle",
    "Sulphur cycle",
    "Iron cycle"
  ],
  correct: 1,
  explanation: "NCERT summary specifically mentions carbon cycle as an example of gaseous type: 'gaseous type of cycle (carbon).' Phosphorus is the example given for sedimentary type."
},
{
  id: 216,
  topic: "Ecosystem – Summary",
  q: "Which of the following is an example of a sedimentary nutrient cycle?",
  options: [
    "Nitrogen cycle",
    "Carbon cycle",
    "Oxygen cycle",
    "Phosphorus cycle"
  ],
  correct: 3,
  explanation: "NCERT summary specifically mentions: 'Earth's crust is the reservoir for sedimentary type (phosphorus).' Phosphorus cycle is the NCERT example of sedimentary cycle because phosphorus has no gaseous phase in its cycle."
},
{
  id: 217,
  topic: "Ecosystem – Summary",
  q: "Ecosystem services are defined as:",
  options: [
    "The structural features of an ecosystem",
    "Products of ecosystem processes",
    "The trophic levels in an ecosystem",
    "The abiotic components of an ecosystem"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Products of ecosystem processes are named as ecosystem services.' These include benefits that ecosystems provide, such as purification of air and water by forests."
},
{
  id: 218,
  topic: "Ecosystem – Summary",
  q: "An example of ecosystem services mentioned in NCERT is:",
  options: [
    "Stratification in forests",
    "Decomposition of organic matter",
    "Purification of air and water by forests",
    "Pyramid of energy"
  ],
  correct: 2,
  explanation: "NCERT summary gives the specific example: 'e.g., purification of air and water by forests.' This is a product/benefit of ecosystem processes — hence an ecosystem service."
},
{
  id: 219,
  topic: "Ecosystem – Summary",
  q: "Consider the following statements:<br>(i) An ecosystem is a structural and functional unit of nature.<br>(ii) Species composition and stratification are functional features.<br>(iii) Productivity, decomposition, energy flow and nutrient cycling are the four important components of an ecosystem.<br>(iv) Nutrients are repeatedly used through nutrient cycling.<br>Which of the above are correct?",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "(i), (ii), (iii) and (iv)",
    "(ii) and (iv) only"
  ],
  correct: 1,
  explanation: "Statements (i), (iii), and (iv) are correct. Statement (ii) is WRONG — species composition and stratification are STRUCTURAL features (not functional). NCERT clearly says 'two main structural features.' This is a classic NEET trap."
},
{
  id: 220,
  topic: "Ecosystem – Summary",
  q: "<b>Assertion (A):</b> Carbon cycle is a gaseous type of nutrient cycle.<br><b>Reason (R):</b> The reservoir for carbon cycle is the atmosphere or hydrosphere.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is not the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are directly from NCERT summary. Carbon cycle is gaseous because its reservoir is the atmosphere/hydrosphere (not Earth's crust). The nature of the reservoir determines whether a cycle is gaseous or sedimentary. R correctly explains A."
},
{
  id: 221,
  topic: "Ecosystem – Summary",
  q: "Select the <b>incorrect</b> match:",
  options: [
    "Gaseous cycle – Atmosphere/Hydrosphere – Carbon",
    "Sedimentary cycle – Earth's crust – Phosphorus",
    "Ecosystem services – Purification of air and water",
    "Sedimentary cycle – Atmosphere – Phosphorus"
  ],
  correct: 3,
  explanation: "Phosphorus (sedimentary cycle) has Earth's crust as its reservoir, NOT atmosphere. NCERT states: 'Earth's crust is the reservoir for sedimentary type (phosphorus).' Option D incorrectly pairs sedimentary cycle with atmosphere."
},
{
  id: 222,
  topic: "Ecosystem – Summary",
  q: "The four important functional components of an ecosystem are:",
  options: [
    "Species composition, stratification, food chain, food web",
    "Producers, consumers, decomposers, abiotic factors",
    "Productivity, decomposition, energy flow, nutrient cycling",
    "GPP, NPP, secondary productivity, standing crop"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Productivity, decomposition, energy flow, and nutrient cycling are the four important components of an ecosystem.' Options A and B describe structural aspects, and Option D lists subtypes of productivity measures."
},
{
  id: 223,
  topic: "Ecosystem – Summary",
  q: "In decomposition, complex organic compounds of detritus are converted to:",
  options: [
    "Simpler organic compounds only",
    "Carbon dioxide, water and inorganic nutrients",
    "Humus only",
    "Complex inorganic compounds"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'In decomposition, complex organic compounds of detritus are converted to carbon dioxide, water and inorganic nutrients by the decomposers.' The end products are specifically CO₂, water, and inorganic nutrients."
},
{
  id: 224,
  topic: "Ecosystem – Summary",
  q: "Energy flow in an ecosystem is:",
  options: [
    "Cyclic",
    "Bidirectional",
    "Unidirectional",
    "Multidirectional"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Energy flow is unidirectional.' Energy flows from sun → producers → consumers → decomposers and is lost as heat at each step. It cannot be recycled, unlike nutrients."
},
{
  id: 225,
  topic: "Ecosystem – Summary",
  q: "The correct sequence of energy flow as described in the NCERT summary is:",
  options: [
    "Decomposers → Producers → Consumers",
    "Plants capture solar energy → Food transferred from producers to decomposers",
    "Consumers → Producers → Decomposers",
    "Decomposers → Consumers → Producers"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'First, plants capture solar energy and then, food is transferred from the producers to decomposers.' This describes the general direction of energy flow through the ecosystem."
},
{
  id: 226,
  topic: "Ecosystem – Summary",
  q: "Organisms of different trophic levels connected for food or energy relationship form a:",
  options: [
    "Pyramid",
    "Food chain",
    "Nutrient cycle",
    "Biome"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Organisms of different trophic levels in nature are connected to each other for food or energy relationship forming a food chain.'"
},
{
  id: 227,
  topic: "Ecosystem – Summary",
  q: "Which of the following correctly differentiates between gaseous and sedimentary nutrient cycles?",
  options: [
    "Gaseous cycle has Earth's crust as reservoir; sedimentary has atmosphere",
    "Gaseous cycle has atmosphere/hydrosphere as reservoir; sedimentary has Earth's crust",
    "Both have atmosphere as their reservoir",
    "Both have Earth's crust as their reservoir"
  ],
  correct: 1,
  explanation: "NCERT summary clearly distinguishes: 'Atmosphere or hydrosphere is the reservoir for the gaseous type of cycle (carbon), whereas Earth's crust is the reservoir for sedimentary type (phosphorus).' Option A reverses the reservoirs — a common trap."
},
{
  id: 228,
  topic: "Ecosystem – Summary",
  q: "Consider the following:<br>(A) Ecosystem services include purification of air and water by forests.<br>(B) Nutrients are used only once and then lost from the ecosystem.<br>(C) Every organism occupies a place in an ecosystem based on source of nutrition.<br>(D) Nutrient cycling involves only movement, not storage, of nutrients.",
  options: [
    "(A) and (C) only",
    "(A), (B) and (C)",
    "(A), (C) and (D)",
    "(A), (B), (C) and (D)"
  ],
  correct: 0,
  explanation: "Only (A) and (C) are correct. Statement (B) is wrong — NCERT says 'nutrients are repeatedly used through this process.' Statement (D) is wrong — nutrient cycling involves 'storage AND movement' of nutrient elements. Both B and D contain common student misconceptions."
},
{
  id: 229,
  topic: "Ecosystem – Summary",
  q: "<b>Assertion (A):</b> Phosphorus cycle is a sedimentary type of nutrient cycle.<br><b>Reason (R):</b> Earth's crust is the reservoir for the phosphorus cycle.",
  options: [
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are directly from NCERT summary. Phosphorus cycle is sedimentary precisely because its reservoir is Earth's crust (not atmosphere or hydrosphere). The nature of the reservoir defines the cycle type. R correctly explains A."
},
{
  id: 230,
  topic: "Ecosystem – Summary",
  q: "Which of the following is <b>not</b> listed as an abiotic component in the NCERT summary?",
  options: [
    "Air",
    "Water",
    "Soil",
    "Producers"
  ],
  correct: 3,
  explanation: "NCERT summary states: 'Abiotic components are inorganic materials — air, water and soil.' Producers are biotic components, not abiotic. This basic classification is frequently tested in NEET."
},
{
  id: 231,
  topic: "Ecosystem – Summary",
  q: "How many of the following are correctly paired?<br>(i) GPP – Rate of capture of solar energy<br>(ii) NPP – Total production of organic matter<br>(iii) Secondary productivity – Rate of assimilation of food energy by consumers<br>(iv) Ecosystem services – Products of ecosystem processes",
  options: [
    "Two",
    "Three",
    "Four",
    "One"
  ],
  correct: 1,
  explanation: "Pairs (i), (iii), and (iv) are correct. Pair (ii) is wrong — 'total production of organic matter' defines GPP, not NPP. NPP is 'the remaining biomass or energy left after utilisation of producers.' Three pairs are correctly matched."
},
{
  id: 232,
  topic: "Ecosystem – Summary",
  q: "The characteristic physical structure of each ecosystem results from:",
  options: [
    "Interaction amongst abiotic components only",
    "Interaction amongst biotic components only",
    "Interaction amongst abiotic and biotic components",
    "Sunlight and temperature only"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Each ecosystem has characteristic physical structure resulting from interaction amongst abiotic and biotic components.' Both types of components must interact to produce the characteristic structure."
},
{
  id: 233,
  topic: "Ecosystem – Summary",
  q: "Every organism occupies a place in an ecosystem based on:",
  options: [
    "Its body size",
    "Its reproductive capacity",
    "Its source of nutrition",
    "Its geographic location"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Based on source of nutrition every organism occupies a place in an ecosystem.' This refers to the trophic level concept — where an organism fits in the food chain depends on what it eats."
},
{
  id: 234,
  topic: "Ecosystem – Summary",
  q: "Select the correct statement(s) about nutrient cycling:<br>(A) Nutrients are repeatedly used through nutrient cycling.<br>(B) Carbon cycle is a sedimentary type.<br>(C) Phosphorus cycle has Earth's crust as its reservoir.<br>(D) Nutrient cycling involves storage and movement of nutrients.",
  options: [
    "(A), (B) and (C) only",
    "(A), (C) and (D) only",
    "(B) and (D) only",
    "(A), (B), (C) and (D)"
  ],
  correct: 1,
  explanation: "Statements (A), (C), and (D) are correct. Statement (B) is WRONG — carbon cycle is a GASEOUS type (reservoir: atmosphere/hydrosphere), not sedimentary. This carbon-gaseous vs phosphorus-sedimentary distinction is a very common NEET trap."
},
{
  id: 235,
  topic: "Ecosystem – Summary",
  q: "<b>Assertion (A):</b> Energy flow is unidirectional while nutrient cycling is cyclic in an ecosystem.<br><b>Reason (R):</b> Energy is lost as heat at each trophic level but nutrients are repeatedly used through cycling.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both are true and directly derived from NCERT summary. Energy flows unidirectionally because it is lost as heat and cannot be recycled. Nutrients are repeatedly used because decomposers release them back for reuse. R correctly explains the contrast in A."
},
{
  id: 236,
  topic: "Ecosystem – Summary",
  q: "Which of the following is <b>incorrect</b> about the NCERT summary description of decomposition?",
  options: [
    "Complex organic compounds are converted to CO₂, water and inorganic nutrients",
    "It is carried out by decomposers",
    "It involves fragmentation, leaching and catabolism",
    "It involves five distinct processes including photolysis"
  ],
  correct: 3,
  explanation: "The NCERT summary mentions three processes (fragmentation, leaching, catabolism). Photolysis is not a process of decomposition — it relates to photosynthesis. The main text mentions five steps (adding humification and mineralisation), but photolysis is never included."
},
{
  id: 237,
  topic: "Ecosystem – Summary",
  q: "Which of the following pairs correctly represents the two types of nutrient cycling with their respective examples?",
  options: [
    "Gaseous – Phosphorus; Sedimentary – Carbon",
    "Gaseous – Carbon; Sedimentary – Phosphorus",
    "Gaseous – Nitrogen; Sedimentary – Carbon",
    "Gaseous – Phosphorus; Sedimentary – Nitrogen"
  ],
  correct: 1,
  explanation: "NCERT summary clearly states: 'gaseous type of cycle (carbon)... sedimentary type (phosphorus).' Carbon = gaseous (atmosphere/hydrosphere reservoir). Phosphorus = sedimentary (Earth's crust reservoir). Option A reverses them — a classic NEET trap."
},
{
  id: 238,
  topic: "Ecosystem – Summary",
  q: "How many of the following are biotic components of an ecosystem?<br>(i) Producers<br>(ii) Air<br>(iii) Consumers<br>(iv) Water<br>(v) Decomposers<br>(vi) Soil",
  options: [
    "Two",
    "Three",
    "Four",
    "Six"
  ],
  correct: 1,
  explanation: "Biotic components are: (i) Producers, (iii) Consumers, and (v) Decomposers = 3. Air (ii), Water (iv), and Soil (vi) are abiotic components (inorganic materials). Three biotic components are listed."
},
{
  id: 239,
  topic: "Ecosystem – Summary",
  q: "The difference between GPP and NPP as described in the NCERT summary is that:",
  options: [
    "GPP is the remaining biomass after producer utilisation; NPP is total production",
    "GPP is total production of organic matter; NPP is remaining biomass after producer utilisation",
    "GPP is for consumers; NPP is for producers",
    "GPP and NPP are the same concept with different names"
  ],
  correct: 1,
  explanation: "NCERT summary: GPP = 'Rate of capture of solar energy or total production of organic matter.' NPP = 'remaining biomass or the energy left after utilisation of producers.' GPP is total; NPP is what remains after plant respiration. Option A reverses them."
},
{
  id: 240,
  topic: "Ecosystem – Summary",
  q: "Which of the following comprehensive statements about ecosystems is <b>entirely correct</b> as per NCERT?",
  options: [
    "Energy flow is cyclic and nutrient cycling is unidirectional",
    "Species composition and productivity are the two main structural features",
    "Ecosystem services are products of ecosystem processes, e.g., purification of air and water by forests",
    "Secondary productivity is the rate of capture of solar energy by consumers"
  ],
  correct: 2,
  explanation: "Option C is directly from NCERT summary. Option A is reversed — energy is unidirectional, nutrients are cyclic. Option B is wrong — species composition and STRATIFICATION (not productivity) are structural features. Option D is wrong — secondary productivity is rate of ASSIMILATION of food energy, not capture of solar energy."
}
];
