const allQuestions = [
{
  id: 1,
  topic: "Introduction to Plant Anatomy",
  q: "The study of internal structure of plants is called:",
  options: ["Morphology", "Anatomy", "Histology", "Physiology"],
  correct: 1,
  explanation: "As per NCERT, the study of internal structure of plants is called anatomy. Morphology deals with external form. Histology is a general term for tissue study (more commonly used in animals). Physiology deals with functions."
},
{
  id: 2,
  topic: "Introduction to Plant Anatomy",
  q: "Which of the following represents the correct sequence of levels of organisation in plants?",
  options: ["Tissues → Cells → Organs", "Organs → Tissues → Cells", "Cells → Tissues → Organs", "Cells → Organs → Tissues"],
  correct: 2,
  explanation: "NCERT clearly states: Cells are the basic unit → cells are organised into tissues → tissues are organised into organs. Option C is correct."
},
{
  id: 3,
  topic: "Introduction to Plant Anatomy",
  q: "Consider the following statements:<br>I. Monocots and dicots show anatomical differences.<br>II. Internal structures of plants show adaptations to diverse environments.<br>III. All plant organs have identical internal structure.<br>Which of the above statements is/are correct?",
  options: ["I and II only", "I and III only", "II and III only", "I, II and III"],
  correct: 0,
  explanation: "Statements I and II are directly from NCERT. Statement III is incorrect — NCERT explicitly states that different organs in a plant show differences in their internal structure."
},
{
  id: 4,
  topic: "Introduction to Plant Anatomy",
  q: "<b>Assertion (A):</b> Different organs of a plant show differences in their internal structure.<br><b>Reason (R):</b> Monocots and dicots within angiosperms are anatomically similar.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Assertion is true — NCERT states different organs show differences in internal structure. Reason is false — monocots and dicots are anatomically different, not similar."
},
{
  id: 5,
  topic: "Introduction to Plant Anatomy",
  q: "Anatomical differences within angiosperms are primarily observed between:",
  options: ["Gymnosperms and Angiosperms", "Monocots and Dicots", "Algae and Bryophytes", "Pteridophytes and Gymnosperms"],
  correct: 1,
  explanation: "NCERT specifically mentions that within angiosperms, monocots and dicots are anatomically different. This is a key NCERT line."
},
{
  id: 6,
  topic: "Introduction to Plant Anatomy",
  q: "Plant anatomy primarily deals with the study of:",
  options: [
    "External features and their modifications",
    "Internal structure and functional organisation of higher plants",
    "Classification of plants based on flowers",
    "Ecological adaptations of lower plants"
  ],
  correct: 1,
  explanation: "NCERT states the chapter introduces 'internal structure and functional organisation of higher plants.' Option B matches this description precisely."
},
{
  id: 7,
  topic: "The Tissue System",
  q: "The classification of tissue systems into epidermal, ground and vascular is based on:",
  options: [
    "Types of cells only",
    "Function only",
    "Structure and location",
    "Origin and development"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'On the basis of their structure and location, there are three types of tissue systems.' This is a frequently confused point — students often choose 'types of cells' which is the basis for classifying tissues, NOT tissue systems."
},
{
  id: 8,
  topic: "The Tissue System",
  q: "Which of the following is NOT a type of tissue system in plants?",
  options: ["Epidermal tissue system", "Meristematic tissue system", "Ground tissue system", "Vascular tissue system"],
  correct: 1,
  explanation: "The three tissue systems are: Epidermal, Ground (fundamental), and Vascular (conducting). Meristematic tissue is a type of tissue, not a tissue system. This is a classic NEET conceptual trap."
},
{
  id: 9,
  topic: "The Tissue System",
  q: "Consider the following statements about tissue systems:<br>I. Tissue systems are classified based on the types of cells present.<br>II. The ground tissue system is also called the fundamental tissue system.<br>III. The vascular tissue system is also called the conducting tissue system.<br>Which statements are correct?",
  options: ["I and II only", "II and III only", "I and III only", "I, II and III"],
  correct: 1,
  explanation: "Statement I is wrong — tissue systems are classified based on structure and location (not types of cells — that's for tissues). Statements II and III are correct as per NCERT nomenclature."
},
{
  id: 10,
  topic: "The Tissue System",
  q: "<b>Assertion (A):</b> Structure and function of tissues depend on their location in the plant body.<br><b>Reason (R):</b> There are three types of tissue systems classified on the basis of their structure and location.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both statements are true and from NCERT. However, R does not explain A — R is about classification of tissue systems, while A is about the dependence of structure/function on location. They are related but R doesn't explain WHY structure depends on location."
},
{
  id: 11,
  topic: "The Tissue System",
  q: "The ground tissue system is also known as:",
  options: ["Conducting tissue system", "Protective tissue system", "Fundamental tissue system", "Secretary tissue system"],
  correct: 2,
  explanation: "NCERT uses 'ground or fundamental tissue system' — both names refer to the same system."
},
{
  id: 12,
  topic: "The Tissue System",
  q: "Match the following:<br>Column I — Column II<br>(a) Epidermal tissue system — (i) Conducting<br>(b) Ground tissue system — (ii) Outermost covering<br>(c) Vascular tissue system — (iii) Fundamental<br>Choose the correct option:",
  options: [
    "a-ii, b-iii, c-i",
    "a-i, b-ii, c-iii",
    "a-iii, b-i, c-ii",
    "a-ii, b-i, c-iii"
  ],
  correct: 0,
  explanation: "Epidermal = outermost covering (ii), Ground = fundamental (iii), Vascular = conducting (i). Correct match: a-ii, b-iii, c-i."
},
{
  id: 13,
  topic: "Epidermal Tissue System",
  q: "The epidermal tissue system comprises all of the following EXCEPT:",
  options: ["Epidermal cells", "Stomata", "Trichomes and hairs", "Vascular bundles"],
  correct: 3,
  explanation: "NCERT states the epidermal tissue system comprises epidermal cells, stomata and the epidermal appendages (trichomes and hairs). Vascular bundles belong to the vascular tissue system."
},
{
  id: 14,
  topic: "Epidermal Tissue System",
  q: "Epidermal cells are:",
  options: ["Collenchymatous with dense cytoplasm", "Sclerenchymatous with no vacuole", "Parenchymatous with a large vacuole", "Meristematic with prominent nucleus"],
  correct: 2,
  explanation: "NCERT clearly states: 'Epidermal cells are parenchymatous with a small amount of cytoplasm lining the cell wall and a large vacuole.' This is a NEET favourite — students often confuse with collenchymatous."
},
{
  id: 15,
  topic: "Epidermal Tissue System",
  q: "Which of the following statements regarding the cuticle is <b>incorrect</b>?",
  options: [
    "It is a waxy thick layer present on the outside of the epidermis",
    "It prevents the loss of water",
    "It is present on root epidermis as well",
    "It covers the epidermis of aerial parts"
  ],
  correct: 2,
  explanation: "NCERT explicitly states 'Cuticle is absent in roots.' This is a very high-yield NEET fact. Cuticle is present on aerial parts to prevent water loss but absent in roots to allow water absorption."
},
{
  id: 16,
  topic: "Epidermal Tissue System",
  q: "In grasses, the guard cells are:",
  options: ["Bean-shaped", "Dumb-bell shaped", "Kidney-shaped", "Spherical"],
  correct: 1,
  explanation: "NCERT states: 'In grasses, the guard cells are dumb-bell shaped.' In most other plants (dicots), guard cells are bean-shaped (or kidney-shaped). This is a direct NEET question frequently asked."
},
{
  id: 17,
  topic: "Epidermal Tissue System",
  q: "Consider the following statements about guard cells:<br>I. The outer walls (away from stomatal pore) are highly thickened.<br>II. The inner walls (towards stomatal pore) are highly thickened.<br>III. Guard cells possess chloroplasts.<br>Which of the above is/are correct?",
  options: ["I and III only", "II and III only", "I only", "I, II and III"],
  correct: 1,
  explanation: "Statement I is WRONG — this is a classic NEET trap! The outer walls (away from pore) are THIN and the inner walls (towards pore) are HIGHLY THICKENED. Statement III is correct — guard cells possess chloroplasts. So II and III are correct."
},
{
  id: 18,
  topic: "Epidermal Tissue System",
  q: "The stomatal apparatus includes:",
  options: [
    "Only guard cells and stomatal pore",
    "Guard cells, stomatal pore and subsidiary cells",
    "Stomatal aperture, guard cells and subsidiary cells",
    "Epidermal cells, guard cells and trichomes"
  ],
  correct: 2,
  explanation: "NCERT states: 'The stomatal aperture, guard cells and the surrounding subsidiary cells are together called stomatal apparatus.' Note: it says stomatal aperture (not pore) — this subtle wording is a potential NEET trap."
},
{
  id: 19,
  topic: "Epidermal Tissue System",
  q: "Root hairs differ from trichomes in being:",
  options: [
    "Multicellular and present on roots",
    "Unicellular and present on stems",
    "Unicellular elongations of epidermal cells of roots",
    "Multicellular elongations of epidermal cells of stems"
  ],
  correct: 2,
  explanation: "NCERT states root hairs are 'unicellular elongations of the epidermal cells' present on roots. Trichomes are epidermal hairs on stems and are 'usually multicellular.' This unicellular (root hair) vs multicellular (trichome) distinction is a NEET classic."
},
{
  id: 20,
  topic: "Epidermal Tissue System",
  q: "<b>Assertion (A):</b> Cuticle is absent in roots.<br><b>Reason (R):</b> Roots need to absorb water and minerals from the soil.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both A and R are true. Cuticle is a waxy layer that prevents water loss. Its absence in roots is logically explained by the need of roots to absorb water — cuticle would hinder absorption. R correctly explains A."
},
{
  id: 21,
  topic: "Epidermal Tissue System",
  q: "Which of the following is <b>NOT</b> a function of stomata?",
  options: ["Transpiration", "Gaseous exchange", "Absorption of minerals", "Regulation of water loss"],
  correct: 2,
  explanation: "NCERT states stomata regulate the process of transpiration and gaseous exchange. Absorption of minerals is the function of root hairs, not stomata."
},
{
  id: 22,
  topic: "Epidermal Tissue System",
  q: "Subsidiary cells are:",
  options: [
    "Guard cells that have lost their function",
    "Specialised epidermal cells near guard cells",
    "Inner layer cells of the cortex",
    "Cells of the endodermis"
  ],
  correct: 1,
  explanation: "NCERT states: 'Sometimes, a few epidermal cells, in the vicinity of the guard cells become specialised in their shape and size and are known as subsidiary cells.' They are NOT guard cells themselves."
},
{
  id: 23,
  topic: "Epidermal Tissue System",
  q: "Which of the following features is correctly matched?",
  options: [
    "Root hairs – Multicellular – Absorption",
    "Trichomes – Unicellular – Transpiration prevention",
    "Root hairs – Unicellular – Absorption of water and minerals",
    "Trichomes – Unicellular – Secretory function"
  ],
  correct: 2,
  explanation: "Root hairs are unicellular elongations that help absorb water and minerals. Trichomes are usually multicellular (not unicellular). This is one of the most important distinctions for NEET."
},
{
  id: 24,
  topic: "Epidermal Tissue System",
  q: "Trichomes may show all of the following features EXCEPT:",
  options: [
    "They may be branched or unbranched",
    "They may be soft or stiff",
    "They may be secretory",
    "They are always unicellular"
  ],
  correct: 3,
  explanation: "NCERT states trichomes in the shoot system are usually multicellular. They may be branched/unbranched, soft/stiff, and even secretory. 'Always unicellular' is incorrect — that applies to root hairs."
},
{
  id: 25,
  topic: "Epidermal Tissue System",
  q: "The epidermis of leaves contains special structures that regulate transpiration and gaseous exchange. These are:",
  options: ["Trichomes", "Lenticels", "Stomata", "Hydathodes"],
  correct: 2,
  explanation: "NCERT states: 'Stomata are structures present in the epidermis of leaves. Stomata regulate the process of transpiration and gaseous exchange.' Lenticels are in the bark, hydathodes are for guttation."
},
{
  id: 26,
  topic: "Epidermal Tissue System",
  q: "Consider the following:<br>I. Epidermis is usually multi-layered.<br>II. Epidermal cells form a continuous layer.<br>III. Epidermal cells are elongated and compactly arranged.<br>IV. Cuticle prevents water loss.<br>Which statements are correct?",
  options: ["I, II and III", "II, III and IV", "I, III and IV", "I, II, III and IV"],
  correct: 1,
  explanation: "Statement I is WRONG — NCERT says 'Epidermis is usually single-layered.' Statements II, III and IV are all correct as per NCERT. This is a common trap where students assume epidermis is multi-layered."
},
{
  id: 27,
  topic: "Epidermal Tissue System",
  q: "<b>Assertion (A):</b> Guard cells are responsible for opening and closing of stomata.<br><b>Reason (R):</b> Guard cells possess chloroplasts.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both A and R are true. Guard cells regulate stomatal opening/closing. The presence of chloroplasts enables photosynthesis in guard cells, which generates sugars → changes osmotic pressure → controls turgor → opens/closes stomata. R explains A."
},
{
  id: 28,
  topic: "Epidermal Tissue System",
  q: "In guard cells, the wall facing the stomatal pore is:",
  options: ["Thin and flexible", "Highly thickened", "Equally thickened as outer wall", "Absent"],
  correct: 1,
  explanation: "NCERT: 'The inner walls (towards the stomatal pore) are highly thickened.' This differential thickening is crucial for the mechanism of stomatal opening and closing."
},
{
  id: 29,
  topic: "Epidermal Tissue System",
  q: "Select the <b>incorrect</b> statement:",
  options: [
    "Trichomes help in preventing water loss due to transpiration",
    "Root hairs help absorb water and minerals from the soil",
    "Trichomes in the shoot system are usually unicellular",
    "Guard cells in grasses are dumb-bell shaped"
  ],
  correct: 2,
  explanation: "Trichomes in the shoot system are usually MULTICELLULAR, not unicellular. Root hairs are unicellular. This is one of the most tested NCERT distinctions in NEET."
},
{
  id: 30,
  topic: "Epidermal Tissue System",
  q: "Each stoma is composed of:",
  options: [
    "Two dumb-bell shaped cells in all plants",
    "Two bean-shaped guard cells enclosing a stomatal pore",
    "Multiple guard cells surrounding a pore",
    "Single guard cell with a central pore"
  ],
  correct: 1,
  explanation: "NCERT: 'Each stoma is composed of two bean-shaped cells known as guard cells which enclose stomatal pore.' Dumb-bell shape is specific to grasses only, not all plants. 'Two bean-shaped' is the general description."
},
{
  id: 31,
  topic: "Epidermal Tissue System",
  q: "Which of the following organelles is present in guard cells but generally absent in other epidermal cells?",
  options: ["Mitochondria", "Ribosomes", "Chloroplasts", "Golgi apparatus"],
  correct: 2,
  explanation: "Guard cells possess chloroplasts (NCERT). Other epidermal cells are generally parenchymatous with large vacuoles and lack chloroplasts. This is functionally significant for stomatal regulation."
},
{
  id: 32,
  topic: "Epidermal Tissue System",
  q: "The primary function of the cuticle is:",
  options: [
    "Gaseous exchange",
    "Absorption of water",
    "Prevention of water loss",
    "Photosynthesis"
  ],
  correct: 2,
  explanation: "NCERT: cuticle is a 'waxy thick layer called the cuticle which prevents the loss of water.' It acts as a waterproofing layer on aerial parts."
},
{
  id: 33,
  topic: "Epidermal Tissue System",
  q: "Consider the following pairs:<br>I. Root hairs — Unicellular — Roots<br>II. Trichomes — Multicellular — Stem<br>III. Guard cells — Bean-shaped — Grasses<br>IV. Subsidiary cells — Specialised epidermal cells — Near guard cells<br>Which pairs are correctly matched?",
  options: ["I, II and IV only", "I, II and III only", "II, III and IV only", "I, II, III and IV"],
  correct: 0,
  explanation: "Pairs I, II and IV are correct. Pair III is WRONG — guard cells in grasses are dumb-bell shaped, not bean-shaped. Bean-shaped guard cells are the general type found in most dicots."
},
{
  id: 34,
  topic: "Epidermal Tissue System",
  q: "<b>Assertion (A):</b> Trichomes and root hairs are both epidermal appendages.<br><b>Reason (R):</b> Both trichomes and root hairs are multicellular structures.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — both are part of the epidermal tissue system as appendages. R is false — root hairs are unicellular, only trichomes are usually multicellular. This is a highly tested trap."
},
{
  id: 35,
  topic: "Epidermal Tissue System",
  q: "The epidermis is the outermost layer of the:",
  options: [
    "Secondary plant body",
    "Primary plant body",
    "Both primary and secondary plant body",
    "Vascular tissue system"
  ],
  correct: 1,
  explanation: "NCERT specifically states: 'The epidermis is the outermost layer of the primary plant body.' In secondary growth, periderm replaces the epidermis. This is a precise NCERT wording-based question."
},
{
  id: 36,
  topic: "Epidermal Tissue System",
  q: "How many of the following statements are correct?<br>I. Epidermis is made up of elongated, compactly arranged cells.<br>II. Epidermis forms a continuous layer.<br>III. Epidermal cells have dense cytoplasm and small vacuoles.<br>IV. Cuticle is present on roots for protection.",
  options: ["One", "Two", "Three", "Four"],
  correct: 1,
  explanation: "Only statements I and II are correct. Statement III is wrong — epidermal cells have a SMALL amount of cytoplasm and a LARGE vacuole (not small). Statement IV is wrong — cuticle is absent in roots. So two statements are correct."
},
{
  id: 37,
  topic: "Epidermal Tissue System",
  q: "A student observes dumb-bell shaped guard cells under a microscope. The leaf sample most likely belongs to:",
  options: ["A dicot plant", "A grass", "A gymnosperm", "A fern"],
  correct: 1,
  explanation: "NCERT states dumb-bell shaped guard cells are characteristic of grasses (which are monocots). Dicots typically have bean-shaped/kidney-shaped guard cells. This is a direct application-based NEET question."
},
{
  id: 38,
  topic: "Epidermal Tissue System",
  q: "Which of the following is a common function shared by both cuticle and trichomes?",
  options: [
    "Gaseous exchange",
    "Water absorption",
    "Reducing water loss",
    "Photosynthesis"
  ],
  correct: 2,
  explanation: "Cuticle prevents water loss (waxy layer). Trichomes also help in preventing water loss due to transpiration. Both serve the common function of reducing water loss, though by different mechanisms."
},
{
  id: 39,
  topic: "Epidermal Tissue System",
  q: "Which of the following is <b>NOT</b> a component of the stomatal apparatus?",
  options: ["Stomatal aperture", "Guard cells", "Subsidiary cells", "Trichomes"],
  correct: 3,
  explanation: "NCERT defines stomatal apparatus as: stomatal aperture + guard cells + surrounding subsidiary cells. Trichomes are separate epidermal appendages and NOT part of the stomatal apparatus."
},
{
  id: 40,
  topic: "Epidermal Tissue System",
  q: "Consider the following statements and select the correct option:<br>(a) Guard cells regulate opening and closing of stomata.<br>(b) Epidermal cells are parenchymatous.<br>(c) Subsidiary cells are modified guard cells.<br>(d) Root hairs are unicellular.",
  options: [
    "a, b and d are correct; c is incorrect",
    "a, b and c are correct; d is incorrect",
    "All are correct",
    "a and d are correct; b and c are incorrect"
  ],
  correct: 0,
  explanation: "Statements a, b and d are correct per NCERT. Statement c is INCORRECT — subsidiary cells are NOT modified guard cells; they are specialised epidermal cells in the vicinity of guard cells. This is a conceptual trap."
},
{
  id: 41,
  topic: "Epidermal Tissue System",
  q: "<b>Assertion (A):</b> The inner wall of guard cells is thicker than the outer wall.<br><b>Reason (R):</b> Differential wall thickening of guard cells helps in the opening and closing mechanism of stomata.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "A is true — inner walls (towards pore) are highly thickened while outer walls (away from pore) are thin. R is true and correctly explains A — this differential thickening is the structural basis for stomatal movement. When turgor increases, thin outer walls bulge out, pulling thick inner walls apart, opening the pore."
},
{
  id: 42,
  topic: "Epidermal Tissue System",
  q: "Identify the <b>wrong</b> statement regarding trichomes:",
  options: [
    "They are present on the stem",
    "They may be secretory",
    "They help in preventing water loss",
    "They are always unbranched and soft"
  ],
  correct: 3,
  explanation: "NCERT states trichomes 'may be branched or unbranched and soft or stiff.' The word 'always unbranched and soft' is incorrect. All other options are correct per NCERT."
}
,
{
  id: 43,
  topic: "The Ground Tissue System",
  q: "The ground tissue system consists of:",
  options: [
    "All tissues including epidermis and vascular bundles",
    "All tissues except epidermis and vascular bundles",
    "Only parenchyma and collenchyma",
    "Only vascular tissues and epidermis"
  ],
  correct: 1,
  explanation: "NCERT clearly states: 'All tissues except epidermis and vascular bundles constitute the ground tissue.' This is a direct definition-based question frequently asked in NEET."
},
{
  id: 44,
  topic: "The Ground Tissue System",
  q: "The ground tissue system is made up of:",
  options: [
    "Complex tissues such as xylem and phloem",
    "Simple tissues such as parenchyma, collenchyma and sclerenchyma",
    "Only meristematic tissues",
    "Only collenchyma and sclerenchyma"
  ],
  correct: 1,
  explanation: "NCERT states ground tissue 'consists of simple tissues such as parenchyma, collenchyma and sclerenchyma.' It does NOT include complex tissues — those belong to the vascular tissue system."
},
{
  id: 45,
  topic: "The Ground Tissue System",
  q: "Parenchymatous cells in the primary stems and roots are usually present in all of the following EXCEPT:",
  options: [
    "Cortex",
    "Pith",
    "Medullary rays",
    "Epidermis"
  ],
  correct: 3,
  explanation: "NCERT states parenchymatous cells are present in cortex, pericycle, pith and medullary rays. Epidermis is a separate tissue system (epidermal tissue system), not part of the ground tissue."
},
{
  id: 46,
  topic: "The Ground Tissue System",
  q: "In leaves, the ground tissue is called:",
  options: [
    "Cortex",
    "Pith",
    "Mesophyll",
    "Pericycle"
  ],
  correct: 2,
  explanation: "NCERT: 'In leaves, the ground tissue consists of thin-walled chloroplast containing cells and is called mesophyll.' This is a key NCERT term and a NEET favourite."
},
{
  id: 47,
  topic: "The Ground Tissue System",
  q: "Mesophyll cells are characterized by being:",
  options: [
    "Thick-walled and lacking chloroplasts",
    "Thin-walled and containing chloroplasts",
    "Barrel-shaped with suberin deposition",
    "Elongated with dense cytoplasm and no vacuole"
  ],
  correct: 1,
  explanation: "NCERT describes mesophyll as 'thin-walled chloroplast containing cells.' This distinguishes them from other ground tissue cells that may lack chloroplasts."
},
{
  id: 48,
  topic: "The Ground Tissue System",
  q: "<b>Assertion (A):</b> The ground tissue system includes parenchyma, collenchyma and sclerenchyma.<br><b>Reason (R):</b> The ground tissue system comprises all tissues of the plant body including epidermis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — ground tissue includes simple tissues (parenchyma, collenchyma, sclerenchyma). R is false — ground tissue excludes epidermis AND vascular bundles. This is a classic NEET conceptual trap."
},
{
  id: 49,
  topic: "The Ground Tissue System",
  q: "Consider the following statements:<br>I. Ground tissue is also called fundamental tissue system.<br>II. Mesophyll is a type of ground tissue found in leaves.<br>III. Ground tissue includes xylem and phloem.<br>IV. Parenchymatous cells are found in pericycle.<br>Which statements are correct?",
  options: [
    "I, II and IV only",
    "I, II and III only",
    "II, III and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statement III is WRONG — xylem and phloem are complex tissues belonging to the vascular tissue system, not ground tissue. Statements I (NCERT alternate name), II (mesophyll) and IV (parenchyma in pericycle) are all correct."
},
{
  id: 50,
  topic: "The Ground Tissue System",
  q: "Which of the following regions does <b>NOT</b> contain parenchymatous cells as part of the ground tissue?",
  options: [
    "Pith",
    "Cortex",
    "Xylem vessels",
    "Medullary rays"
  ],
  correct: 2,
  explanation: "Xylem vessels are part of the vascular tissue system (complex tissue), not the ground tissue system. Parenchymatous cells are found in cortex, pericycle, pith and medullary rays as part of ground tissue."
},
{
  id: 51,
  topic: "The Vascular Tissue System",
  q: "The vascular system consists of:",
  options: [
    "Simple tissues — parenchyma and collenchyma",
    "Complex tissues — xylem and phloem",
    "Simple tissues — sclerenchyma only",
    "Complex tissues — xylem only"
  ],
  correct: 1,
  explanation: "NCERT: 'The vascular system consists of complex tissues, the phloem and the xylem.' Both xylem and phloem together constitute vascular bundles."
},
{
  id: 52,
  topic: "The Vascular Tissue System",
  q: "Open vascular bundles are characteristic of:",
  options: [
    "Monocotyledonous stems",
    "Dicotyledonous stems",
    "Both monocot and dicot stems",
    "Roots only"
  ],
  correct: 1,
  explanation: "NCERT: 'In dicotyledonous stems, cambium is present between phloem and xylem. Such vascular bundles... are called open vascular bundles.' Monocots lack cambium and have closed bundles."
},
{
  id: 53,
  topic: "The Vascular Tissue System",
  q: "Closed vascular bundles are found in monocotyledons because:",
  options: [
    "Cambium is present between xylem and phloem",
    "Cambium is absent and they cannot form secondary tissues",
    "Xylem and phloem are arranged in alternate manner",
    "Phloem is absent in monocots"
  ],
  correct: 1,
  explanation: "NCERT: 'In the monocotyledons, the vascular bundles have no cambium present in them. Hence, since they do not form secondary tissues they are referred to as closed.' The absence of cambium is the key reason."
},
{
  id: 54,
  topic: "The Vascular Tissue System",
  q: "Radial arrangement of vascular bundles means:",
  options: [
    "Xylem and phloem are on the same radius",
    "Xylem and phloem are arranged alternately along different radii",
    "Phloem surrounds xylem completely",
    "Xylem surrounds phloem completely"
  ],
  correct: 1,
  explanation: "NCERT: 'When xylem and phloem within a vascular bundle are arranged in an alternate manner along the different radii, the arrangement is called radial such as in roots.' This is a key distinction from conjoint arrangement."
},
{
  id: 55,
  topic: "The Vascular Tissue System",
  q: "Radial vascular bundles are typically found in:",
  options: [
    "Stems", "Leaves", "Roots", "Flowers"
  ],
  correct: 2,
  explanation: "NCERT clearly states radial arrangement is found 'such as in roots.' Stems and leaves typically have conjoint vascular bundles."
},
{
  id: 56,
  topic: "The Vascular Tissue System",
  q: "In conjoint vascular bundles, the phloem is usually located:",
  options: [
    "On the inner side of xylem",
    "On the outer side of xylem",
    "Alternating with xylem on different radii",
    "Surrounding xylem on all sides"
  ],
  correct: 1,
  explanation: "NCERT: 'The conjoint vascular bundles usually have the phloem located only on the outer side of xylem.' This is a very important structural detail tested in NEET."
},
{
  id: 57,
  topic: "The Vascular Tissue System",
  q: "Conjoint vascular bundles are common in:",
  options: [
    "Roots only",
    "Stems and leaves",
    "Roots and stems",
    "Leaves only"
  ],
  correct: 1,
  explanation: "NCERT: 'Such vascular bundles are common in stems and leaves.' Roots have radial arrangement. This is a frequent NEET question."
},
{
  id: 58,
  topic: "The Vascular Tissue System",
  q: "<b>Assertion (A):</b> Vascular bundles in monocotyledonous stems are called closed.<br><b>Reason (R):</b> Cambium is absent in monocot vascular bundles, so secondary growth does not occur.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both A and R are true, and R correctly explains A. The absence of cambium prevents secondary tissue formation, which is exactly why they are termed 'closed.' NCERT directly supports this."
},
{
  id: 59,
  topic: "The Vascular Tissue System",
  q: "Consider the following statements:<br>I. Open vascular bundles can form secondary xylem and phloem.<br>II. Closed vascular bundles possess cambium.<br>III. Radial arrangement is found in roots.<br>IV. Conjoint bundles have xylem and phloem on the same radius.<br>Which statements are correct?",
  options: [
    "I, III and IV only",
    "I and II only",
    "II, III and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statement II is WRONG — closed vascular bundles LACK cambium (that's why they're closed). Statements I (open = secondary growth possible), III (radial in roots), and IV (conjoint = same radius) are all correct per NCERT."
},
{
  id: 60,
  topic: "The Vascular Tissue System",
  q: "Which of the following is correctly matched?",
  options: [
    "Open vascular bundle — No cambium — Monocot stem",
    "Closed vascular bundle — Cambium present — Dicot stem",
    "Radial vascular bundle — Alternate xylem and phloem — Roots",
    "Conjoint vascular bundle — Alternate xylem and phloem — Stems"
  ],
  correct: 2,
  explanation: "Only option C is correct: Radial bundles have xylem and phloem arranged alternately on different radii and are found in roots. Option A is wrong (open = has cambium = dicot). Option B is wrong (closed = no cambium = monocot). Option D is wrong (conjoint = same radius, not alternate)."
},
{
  id: 61,
  topic: "The Vascular Tissue System",
  q: "The ability to form secondary xylem and phloem is a feature of:",
  options: [
    "Closed vascular bundles",
    "Radial vascular bundles",
    "Open vascular bundles",
    "All types of vascular bundles"
  ],
  correct: 2,
  explanation: "NCERT: Open vascular bundles 'possess the ability to form secondary xylem and phloem tissues' because cambium is present between xylem and phloem."
},
{
  id: 62,
  topic: "The Vascular Tissue System",
  q: "In a conjoint vascular bundle, if phloem is present on both outer and inner sides of xylem, it is called:",
  options: [
    "Collateral",
    "Bicollateral",
    "Radial",
    "Concentric"
  ],
  correct: 1,
  explanation: "When phloem is on only the outer side of xylem — it's collateral. When phloem is on both sides (outer and inner) of xylem — it's bicollateral. NCERT mentions phloem usually on outer side only (collateral type). Bicollateral is found in Cucurbitaceae."
},
{
  id: 63,
  topic: "The Vascular Tissue System",
  q: "Select the <b>incorrect</b> statement about vascular bundles:",
  options: [
    "Xylem and phloem together constitute vascular bundles",
    "Conjoint vascular bundles are found in stems and leaves",
    "Open vascular bundles are found in monocotyledonous stems",
    "Radial vascular bundles are found in roots"
  ],
  correct: 2,
  explanation: "Open vascular bundles are found in DICOTYLEDONOUS stems (not monocot). Monocot stems have CLOSED vascular bundles. This is one of the most common NEET traps."
},
{
  id: 64,
  topic: "The Vascular Tissue System",
  q: "How many of the following are features of closed vascular bundles?<br>I. Cambium is present.<br>II. Found in monocot stems.<br>III. Cannot form secondary tissues.<br>IV. Xylem and phloem are on the same radius.",
  options: ["One", "Two", "Three", "Four"],
  correct: 2,
  explanation: "Statements II, III, and IV are correct. Statement I is WRONG — closed bundles LACK cambium. Closed bundles are in monocot stems, cannot form secondary tissues, and are conjoint type (same radius). Three statements are correct."
},
{
  id: 65,
  topic: "Dicotyledonous Root",
  q: "The outermost layer of a dicotyledonous root is:",
  options: [
    "Epidermis",
    "Epiblema",
    "Endodermis",
    "Pericycle"
  ],
  correct: 1,
  explanation: "NCERT uses the term 'epiblema' for the outermost layer of root, NOT epidermis. This is a classic NEET trap — the term 'epidermis' is used for aerial parts while 'epiblema' (or rhizodermis) is used for roots."
},
{
  id: 66,
  topic: "Dicotyledonous Root",
  q: "The cortex of a dicotyledonous root consists of:",
  options: [
    "Several layers of thick-walled sclerenchyma cells",
    "Several layers of thin-walled parenchyma cells with intercellular spaces",
    "Single layer of barrel-shaped cells",
    "Compact collenchyma cells without intercellular spaces"
  ],
  correct: 1,
  explanation: "NCERT: 'The cortex consists of several layers of thin-walled parenchyma cells with intercellular spaces.' The single layer of barrel-shaped cells refers to endodermis, not cortex."
},
{
  id: 67,
  topic: "Dicotyledonous Root",
  q: "The endodermis of a dicotyledonous root is characterized by all of the following EXCEPT:",
  options: [
    "It is the innermost layer of the cortex",
    "It comprises barrel-shaped cells",
    "It has prominent intercellular spaces",
    "It has casparian strips on tangential and radial walls"
  ],
  correct: 2,
  explanation: "NCERT clearly states endodermis comprises 'a single layer of barrel-shaped cells WITHOUT any intercellular spaces.' The presence of 'prominent intercellular spaces' is incorrect. This is a high-yield NEET trap."
},
{
  id: 68,
  topic: "Dicotyledonous Root",
  q: "Casparian strips are deposits of:",
  options: [
    "Lignin on radial walls only",
    "Cutin on all walls of endodermal cells",
    "Suberin on tangential as well as radial walls of endodermal cells",
    "Pectin on tangential walls only"
  ],
  correct: 2,
  explanation: "NCERT: 'The tangential as well as radial walls of the endodermal cells have a deposition of water-impermeable, waxy material suberin in the form of casparian strips.' Note: it's suberin (not lignin/cutin), and on both tangential AND radial walls."
},
{
  id: 69,
  topic: "Dicotyledonous Root",
  q: "The pericycle in a dicotyledonous root is involved in:",
  options: [
    "Absorption of water only",
    "Initiation of lateral roots and vascular cambium during secondary growth",
    "Deposition of casparian strips",
    "Formation of root hairs"
  ],
  correct: 1,
  explanation: "NCERT: 'Initiation of lateral roots and vascular cambium during the secondary growth takes place in these cells (pericycle).' Root hairs arise from epiblema, casparian strips are in endodermis."
},
{
  id: 70,
  topic: "Dicotyledonous Root",
  q: "The pericycle in a dicot root is described as:",
  options: [
    "Several layers of thin-walled parenchyma cells",
    "A few layers of thick-walled parenchymatous cells",
    "Single layer of barrel-shaped cells",
    "Multiple layers of collenchymatous cells"
  ],
  correct: 1,
  explanation: "NCERT: 'Next to endodermis lies a few layers of thick-walled parenchymatous cells referred to as pericycle.' Note: barrel-shaped cells describe endodermis, not pericycle."
},
{
  id: 71,
  topic: "Dicotyledonous Root",
  q: "In a dicotyledonous root, the pith is:",
  options: [
    "Large and well developed",
    "Small or inconspicuous",
    "Absent",
    "Made of sclerenchyma"
  ],
  correct: 1,
  explanation: "NCERT: 'The pith is small or inconspicuous' in a dicot root. This contrasts with monocot roots where the pith is large and well developed. This is a NEET classic comparison point."
},
{
  id: 72,
  topic: "Dicotyledonous Root",
  q: "Conjunctive tissue in a dicot root refers to:",
  options: [
    "Tissue connecting epidermis and cortex",
    "Parenchymatous cells lying between xylem and phloem",
    "Tissue of the pericycle region",
    "Endodermal cells with casparian strips"
  ],
  correct: 1,
  explanation: "NCERT: 'The parenchymatous cells which lie between the xylem and the phloem are called conjunctive tissue.' This is an often overlooked but tested NCERT term."
},
{
  id: 73,
  topic: "Dicotyledonous Root",
  q: "The number of xylem and phloem patches in a typical dicotyledonous root is usually:",
  options: [
    "More than six",
    "Two to four",
    "Only one",
    "More than ten"
  ],
  correct: 1,
  explanation: "NCERT: 'There are usually two to four xylem and phloem patches' in a dicot root. Monocot roots have more than six (polyarch). This numerical distinction is a NEET favourite."
},
{
  id: 74,
  topic: "Dicotyledonous Root",
  q: "The stele in a dicotyledonous root includes all of the following EXCEPT:",
  options: [
    "Pericycle",
    "Vascular bundles",
    "Pith",
    "Cortex"
  ],
  correct: 3,
  explanation: "NCERT: 'All tissues on the innerside of the endodermis such as pericycle, vascular bundles and pith constitute the stele.' Cortex is OUTSIDE the endodermis and is NOT part of the stele. This is a classic NEET trap."
},
{
  id: 75,
  topic: "Dicotyledonous Root",
  q: "<b>Assertion (A):</b> Casparian strips are water-impermeable.<br><b>Reason (R):</b> Casparian strips are made of suberin, a waxy material.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT describes suberin as 'water-impermeable, waxy material.' The waxy nature of suberin is the reason casparian strips are water-impermeable. R correctly explains A."
},
{
  id: 76,
  topic: "Dicotyledonous Root",
  q: "Consider the following statements about a dicot root:<br>I. Epiblema cells protrude to form multicellular root hairs.<br>II. Endodermis has barrel-shaped cells without intercellular spaces.<br>III. Lateral roots originate from pericycle.<br>IV. Cambium ring develops between xylem and phloem.<br>Which statements are correct?",
  options: [
    "I, II and III",
    "II, III and IV",
    "I, III and IV",
    "I, II, III and IV"
  ],
  correct: 1,
  explanation: "Statement I is WRONG — root hairs are UNICELLULAR (not multicellular). Statements II (barrel-shaped, no intercellular spaces), III (lateral roots from pericycle) and IV (cambium between xylem and phloem) are all correct per NCERT."
},
{
  id: 77,
  topic: "Dicotyledonous Root",
  q: "The correct sequence of tissues from the outermost to the innermost in a dicot root is:",
  options: [
    "Epiblema → Endodermis → Cortex → Pericycle → Vascular bundles → Pith",
    "Epiblema → Cortex → Endodermis → Pericycle → Vascular bundles → Pith",
    "Epidermis → Pericycle → Cortex → Endodermis → Vascular bundles → Pith",
    "Epiblema → Cortex → Pericycle → Endodermis → Vascular bundles → Pith"
  ],
  correct: 1,
  explanation: "The correct order from outside to inside: Epiblema → Cortex (several layers of parenchyma) → Endodermis (innermost cortex layer) → Pericycle → Vascular bundles → Pith. This sequence is directly from NCERT description."
},
{
  id: 78,
  topic: "Dicotyledonous Root",
  q: "Casparian strips are found on which walls of endodermal cells?",
  options: [
    "Only radial walls",
    "Only tangential walls",
    "Tangential as well as radial walls",
    "All walls including inner and outer tangential walls"
  ],
  correct: 2,
  explanation: "NCERT: 'The tangential as well as radial walls of the endodermal cells have a deposition of... suberin in the form of casparian strips.' Students often remember only radial walls — the inclusion of tangential walls is important."
},
{
  id: 79,
  topic: "Dicotyledonous Root",
  q: "Which of the following structures originates from the pericycle of a dicot root?",
  options: [
    "Root hairs",
    "Lateral roots",
    "Root cap",
    "Casparian strips"
  ],
  correct: 1,
  explanation: "NCERT: 'Initiation of lateral roots... takes place in these cells (pericycle).' Root hairs originate from epiblema. Root cap originates from calyptrogen. Casparian strips are in endodermis."
},
{
  id: 80,
  topic: "Dicotyledonous Root",
  q: "<b>Assertion (A):</b> Endodermis is the innermost layer of the cortex in a dicot root.<br><b>Reason (R):</b> Endodermis is part of the stele.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — NCERT states 'The innermost layer of the cortex is called endodermis.' R is FALSE — the stele includes all tissues on the INNER SIDE of the endodermis. Endodermis itself is part of the cortex, NOT the stele. Major NEET trap!"
},
{
  id: 81,
  topic: "Dicotyledonous Root",
  q: "The vascular bundles in a dicot root are:",
  options: [
    "Conjoint and open",
    "Conjoint and closed",
    "Radial with 2-4 xylem and phloem patches",
    "Radial with more than six xylem bundles"
  ],
  correct: 2,
  explanation: "In roots, vascular bundles are arranged radially (xylem and phloem on alternate radii). Dicot roots have 2-4 xylem and phloem patches. More than six (polyarch) is a monocot root feature. Conjoint arrangement is in stems and leaves."
},
{
  id: 82,
  topic: "Dicotyledonous Root",
  q: "Select the <b>incorrect</b> statement regarding the endodermis of a dicot root:",
  options: [
    "It is a single layer of barrel-shaped cells",
    "It has casparian strips made of suberin",
    "It has intercellular spaces for gaseous exchange",
    "It is the innermost layer of the cortex"
  ],
  correct: 2,
  explanation: "NCERT specifically states endodermis has cells 'without any intercellular spaces.' The presence of intercellular spaces in endodermis is incorrect. All other statements are correct per NCERT."
},
{
  id: 83,
  topic: "Dicotyledonous Root",
  q: "Which of the following is NOT a component of the stele in a dicot root?",
  options: [
    "Pericycle",
    "Vascular bundles",
    "Endodermis",
    "Pith"
  ],
  correct: 2,
  explanation: "NCERT: 'All tissues on the innerside of the endodermis such as pericycle, vascular bundles and pith constitute the stele.' Endodermis is the boundary of cortex and NOT a part of stele. Very frequently tested."
},
{
  id: 84,
  topic: "Dicotyledonous Root",
  q: "A student observes a root T.S. with the following features:<br>- Small, inconspicuous pith<br>- 2-4 xylem patches<br>- Casparian strips in endodermis<br>- Pericycle giving rise to lateral roots<br>This root most likely belongs to:",
  options: [
    "A monocotyledonous plant",
    "A dicotyledonous plant",
    "A gymnosperm",
    "A pteridophyte"
  ],
  correct: 1,
  explanation: "Small pith and 2-4 xylem patches are characteristic of dicot roots. Monocot roots have large, well-developed pith and more than 6 (polyarch) xylem bundles. Casparian strips and lateral roots from pericycle are found in both."
},
{
  id: 85,
  topic: "Monocotyledonous Root",
  q: "The anatomy of a monocot root is similar to a dicot root in which of the following aspects?",
  options: [
    "Number of xylem bundles",
    "Size of pith",
    "Presence of epidermis, cortex, endodermis, pericycle, vascular bundles and pith",
    "Ability to undergo secondary growth"
  ],
  correct: 2,
  explanation: "NCERT: 'The anatomy of the monocot root is similar to the dicot root in many respects. It has epidermis, cortex, endodermis, pericycle, vascular bundles and pith.' The differences lie in xylem number, pith size, and absence of secondary growth."
},
{
  id: 86,
  topic: "Monocotyledonous Root",
  q: "The xylem bundles in a monocotyledonous root are:",
  options: [
    "Usually 2 to 4 (diarch to tetrarch)",
    "Usually more than six (polyarch)",
    "Always 2 (diarch)",
    "Always 6 (hexarch)"
  ],
  correct: 1,
  explanation: "NCERT: 'There are usually more than six (polyarch) xylem bundles in the monocot root.' Dicot roots have fewer (2-4) xylem bundles. The term 'polyarch' is a NEET favourite."
},
{
  id: 87,
  topic: "Monocotyledonous Root",
  q: "In a monocotyledonous root, the pith is:",
  options: [
    "Small or inconspicuous",
    "Large and well developed",
    "Completely absent",
    "Replaced by sclerenchyma"
  ],
  correct: 1,
  explanation: "NCERT: 'Pith is large and well developed' in monocot roots. This is opposite to dicot roots where pith is 'small or inconspicuous.' This comparison is frequently asked in NEET."
},
{
  id: 88,
  topic: "Monocotyledonous Root",
  q: "Monocotyledonous roots do not undergo secondary growth because:",
  options: [
    "They lack pericycle",
    "They lack endodermis",
    "They lack vascular cambium",
    "They have polyarch xylem"
  ],
  correct: 2,
  explanation: "NCERT states monocot roots 'do not undergo any secondary growth.' This is because vascular cambium does not develop in monocot roots (similar to closed vascular bundles in monocot stems lacking cambium)."
},
{
  id: 89,
  topic: "Monocotyledonous Root",
  q: "<b>Assertion (A):</b> Monocot roots have more than six xylem bundles.<br><b>Reason (R):</b> Monocot roots undergo extensive secondary growth.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — monocot roots are polyarch (>6 xylem bundles). R is FALSE — NCERT clearly states 'Monocotyledonous roots do not undergo any secondary growth.' This is a major conceptual trap."
},
{
  id: 90,
  topic: "Monocotyledonous Root",
  q: "Consider the following differences between dicot and monocot roots:<br>I. Dicot root — 2 to 4 xylem bundles; Monocot root — More than 6 xylem bundles<br>II. Dicot root — Large pith; Monocot root — Small pith<br>III. Dicot root — Secondary growth occurs; Monocot root — No secondary growth<br>Which of the above is/are correct?",
  options: [
    "I and III only",
    "I and II only",
    "II and III only",
    "I, II and III"
  ],
  correct: 0,
  explanation: "Statement II is REVERSED — Dicot root has SMALL/inconspicuous pith, Monocot root has LARGE and well-developed pith. Statements I and III are correct as per NCERT. This reversal is a classic NEET trap."
},
{
  id: 91,
  topic: "Monocotyledonous Root",
  q: "Match Column I with Column II:<br>Column I — Column II<br>(a) Dicot root pith — (i) Large and well developed<br>(b) Monocot root pith — (ii) Small or inconspicuous<br>(c) Dicot root xylem — (iii) Polyarch<br>(d) Monocot root xylem — (iv) 2-4 patches<br>Select the correct option:",
  options: [
    "a-i, b-ii, c-iii, d-iv",
    "a-ii, b-i, c-iv, d-iii",
    "a-ii, b-i, c-iii, d-iv",
    "a-i, b-ii, c-iv, d-iii"
  ],
  correct: 1,
  explanation: "Dicot root: pith = small/inconspicuous (ii), xylem = 2-4 patches (iv). Monocot root: pith = large and well developed (i), xylem = polyarch/more than 6 (iii). Correct match: a-ii, b-i, c-iv, d-iii."
},
{
  id: 92,
  topic: "Monocotyledonous Root",
  q: "The term 'polyarch' in context of monocot roots refers to:",
  options: [
    "Presence of many cortical layers",
    "Presence of many phloem patches only",
    "Presence of usually more than six xylem bundles",
    "Presence of multiple endodermal layers"
  ],
  correct: 2,
  explanation: "NCERT: 'there are usually more than six (polyarch) xylem bundles in the monocot root.' Polyarch specifically refers to the number of xylem bundles (arches), not phloem or cortical layers."
},
{
  id: 93,
  topic: "Monocotyledonous Root",
  q: "Which of the following is a common feature of BOTH dicot and monocot roots?",
  options: [
    "Polyarch xylem bundles",
    "Large and well-developed pith",
    "Presence of endodermis with casparian strips",
    "Ability to undergo secondary growth"
  ],
  correct: 2,
  explanation: "Both dicot and monocot roots have epidermis, cortex, endodermis (with casparian strips), pericycle, vascular bundles and pith. Polyarch and large pith are monocot-specific. Secondary growth occurs only in dicot roots."
},
{
  id: 94,
  topic: "Monocotyledonous Root",
  q: "A student examines a root cross-section and finds:<br>- Polyarch xylem<br>- Large, well-developed pith<br>- No evidence of secondary growth<br>The root belongs to:",
  options: [
    "A dicotyledonous plant",
    "A monocotyledonous plant",
    "A gymnosperm",
    "Cannot be determined"
  ],
  correct: 1,
  explanation: "All three features — polyarch xylem (>6 bundles), large well-developed pith, and absence of secondary growth — are characteristic features of monocot roots as described in NCERT."
},
{
  id: 95,
  topic: "Dicotyledonous Root",
  q: "During secondary growth in a dicot root, the cambium ring develops between:",
  options: [
    "Cortex and endodermis",
    "Epidermis and cortex",
    "Xylem and phloem",
    "Pericycle and endodermis"
  ],
  correct: 2,
  explanation: "NCERT: 'Later, a cambium ring develops between the xylem and phloem.' This cambium produces secondary xylem inward and secondary phloem outward."
},
{
  id: 96,
  topic: "Dicotyledonous Root",
  q: "Suberin is described in NCERT as:",
  options: [
    "Water-permeable, non-waxy material",
    "Water-impermeable, waxy material",
    "Water-soluble protein",
    "Lipid-soluble carbohydrate"
  ],
  correct: 1,
  explanation: "NCERT precisely describes suberin as 'water-impermeable, waxy material' deposited in the form of casparian strips on endodermal cell walls. This exact wording is NEET-important."
},
{
  id: 97,
  topic: "Monocotyledonous Root",
  q: "How many of the following features are shared by both dicot and monocot roots?<br>I. Epiblema is the outermost layer<br>II. Cortex of parenchyma cells<br>III. Endodermis present<br>IV. Pericycle present<br>V. Secondary growth occurs",
  options: ["Two", "Three", "Four", "Five"],
  correct: 2,
  explanation: "Features I, II, III, and IV are shared by both. Feature V is NOT shared — secondary growth occurs only in dicot roots, NOT in monocot roots. So four features are common."
},
{
  id: 98,
  topic: "The Vascular Tissue System",
  q: "In a conjoint vascular bundle, xylem and phloem are:",
  options: [
    "Arranged alternately along different radii",
    "Jointly situated along the same radius",
    "Separated by endodermis",
    "Found only in roots"
  ],
  correct: 1,
  explanation: "NCERT: 'In conjoint type of vascular bundles, the xylem and phloem are jointly situated along the same radius of vascular bundles.' Alternate arrangement on different radii = radial type, found in roots."
},
{
  id: 99,
  topic: "Dicotyledonous Root",
  q: "<b>Assertion (A):</b> The cortex in a dicot root has intercellular spaces.<br><b>Reason (R):</b> The endodermis in a dicot root lacks intercellular spaces.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both are true. Cortex has thin-walled parenchyma with intercellular spaces. Endodermis has barrel-shaped cells without intercellular spaces. However, R does not explain WHY cortex has intercellular spaces — they are independent facts."
},
{
  id: 100,
  topic: "The Ground Tissue System",
  q: "<b>Assertion (A):</b> Mesophyll is part of the ground tissue system in leaves.<br><b>Reason (R):</b> Mesophyll consists of thin-walled cells containing chloroplasts.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both statements are true per NCERT. However, R describes the characteristics of mesophyll cells — it does not explain WHY mesophyll is part of ground tissue (which is because it is neither epidermis nor vascular tissue). So R is not the correct explanation of A."
},
{
  id: 101,
  topic: "The Vascular Tissue System",
  q: "Which of the following combinations is correct?<br>I. Dicot stem — Open — Conjoint<br>II. Monocot stem — Closed — Conjoint<br>III. Root — Radial — Open<br>IV. Leaves — Conjoint — Closed",
  options: [
    "I and II only",
    "I, II and IV only",
    "I, II and III only",
    "All are correct"
  ],
  correct: 0,
  explanation: "I is correct (dicot stem = open, conjoint). II is correct (monocot stem = closed, conjoint). III is partially wrong — roots have radial arrangement but the open/closed terminology applies to conjoint bundles with respect to cambium. IV is not directly stated in given NCERT passage. I and II are clearly correct."
},
{
  id: 102,
  topic: "Dicotyledonous Root",
  q: "In a dicot root, the tissue that lies immediately internal to the endodermis is:",
  options: [
    "Cortex",
    "Pith",
    "Pericycle",
    "Conjunctive tissue"
  ],
  correct: 2,
  explanation: "NCERT: 'Next to endodermis lies a few layers of thick-walled parenchymatous cells referred to as pericycle.' The pericycle is the first tissue encountered inside the endodermis."
},
{
  id: 103,
  topic: "Dicotyledonous Root",
  q: "How many of the following are functions of the pericycle in a dicot root?<br>I. Initiation of lateral roots<br>II. Formation of vascular cambium during secondary growth<br>III. Absorption of water and minerals<br>IV. Deposition of casparian strips",
  options: ["One", "Two", "Three", "Four"],
  correct: 1,
  explanation: "Only I and II are functions of pericycle (NCERT). Absorption of water is by root hairs (epiblema). Casparian strips are in endodermis. Two functions are correct."
},
{
  id: 104,
  topic: "Monocotyledonous Root",
  q: "Select the correct statement:",
  options: [
    "Dicot root has polyarch xylem and large pith",
    "Monocot root has 2-4 xylem bundles and small pith",
    "Monocot root has polyarch xylem and large well-developed pith",
    "Both dicot and monocot roots undergo secondary growth"
  ],
  correct: 2,
  explanation: "Option C correctly describes monocot root: polyarch (>6) xylem bundles and large, well-developed pith. Options A and B have the dicot-monocot features reversed. Option D is wrong — only dicot roots undergo secondary growth."
}
,
{
  id: 105,
  topic: "Dicotyledonous Stem",
  q: "The outermost protective layer of a dicotyledonous stem is:",
  options: [
    "Hypodermis",
    "Epidermis",
    "Epiblema",
    "Endodermis"
  ],
  correct: 1,
  explanation: "NCERT: 'The epidermis is the outermost protective layer of the stem.' Epiblema is the outermost layer in roots, not stems. Hypodermis lies below epidermis. Endodermis is the innermost cortical layer."
},
{
  id: 106,
  topic: "Dicotyledonous Stem",
  q: "The epidermis of a dicot stem may bear all of the following EXCEPT:",
  options: [
    "Cuticle",
    "Trichomes",
    "A few stomata",
    "Root hairs"
  ],
  correct: 3,
  explanation: "NCERT: epidermis is 'covered with a thin layer of cuticle, it may bear trichomes and a few stomata.' Root hairs are found on the epiblema of roots, not on stems."
},
{
  id: 107,
  topic: "Dicotyledonous Stem",
  q: "The cortex of a dicotyledonous stem consists of how many sub-zones?",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 1,
  explanation: "NCERT describes three sub-zones of cortex: (1) Outer hypodermis (collenchymatous), (2) Middle cortical layers (parenchymatous), and (3) Innermost endodermis (starch sheath). This is a direct NCERT fact."
},
{
  id: 108,
  topic: "Dicotyledonous Stem",
  q: "The hypodermis of a dicotyledonous stem is made up of:",
  options: [
    "Sclerenchymatous cells",
    "Parenchymatous cells",
    "Collenchymatous cells",
    "Meristematic cells"
  ],
  correct: 2,
  explanation: "NCERT: 'The outer hypodermis consists of a few layers of collenchymatous cells just below the epidermis.' This is one of the most tested NEET facts — students often confuse it with the sclerenchymatous hypodermis of monocot stems."
},
{
  id: 109,
  topic: "Dicotyledonous Stem",
  q: "The function of the hypodermis in a young dicot stem is:",
  options: [
    "Photosynthesis",
    "Storage of starch",
    "Providing mechanical strength",
    "Water absorption"
  ],
  correct: 2,
  explanation: "NCERT: the collenchymatous hypodermis provides 'mechanical strength to the young stem.' Collenchyma provides flexible support especially in growing organs."
},
{
  id: 110,
  topic: "Dicotyledonous Stem",
  q: "The cortical layers below the hypodermis in a dicot stem consist of:",
  options: [
    "Thick-walled sclerenchyma cells without intercellular spaces",
    "Rounded thin-walled parenchymatous cells with conspicuous intercellular spaces",
    "Collenchymatous cells with thickened corners",
    "Barrel-shaped cells with casparian strips"
  ],
  correct: 1,
  explanation: "NCERT: 'Cortical layers below hypodermis consist of rounded thin walled parenchymatous cells with conspicuous intercellular spaces.' Barrel-shaped cells with casparian strips describe endodermis of roots."
},
{
  id: 111,
  topic: "Dicotyledonous Stem",
  q: "The innermost layer of the cortex in a dicot stem is called the endodermis. It is also referred to as:",
  options: [
    "Casparian strip",
    "Bundle sheath",
    "Starch sheath",
    "Pericycle"
  ],
  correct: 2,
  explanation: "NCERT: 'The cells of the endodermis are rich in starch grains and the layer is also referred to as the starch sheath.' This is a very high-yield NEET term — endodermis of dicot stem = starch sheath."
},
{
  id: 112,
  topic: "Dicotyledonous Stem",
  q: "The endodermis in a dicot stem is rich in:",
  options: [
    "Suberin",
    "Lignin",
    "Starch grains",
    "Chloroplasts"
  ],
  correct: 2,
  explanation: "NCERT: 'The cells of the endodermis are rich in starch grains.' In roots, endodermis has suberin (casparian strips). In stems, endodermis = starch sheath. This root vs stem endodermis distinction is a NEET favourite."
},
{
  id: 113,
  topic: "Dicotyledonous Stem",
  q: "The pericycle in a dicot stem is present as:",
  options: [
    "A continuous ring of parenchyma",
    "Semi-lunar patches of sclerenchyma above the phloem",
    "A few layers of collenchyma below the epidermis",
    "Barrel-shaped cells below the endodermis"
  ],
  correct: 1,
  explanation: "NCERT: 'Pericycle is present on the inner side of the endodermis and above the phloem in the form of semi-lunar patches of sclerenchyma.' This 'semi-lunar patches of sclerenchyma' description is a very important NEET detail."
},
{
  id: 114,
  topic: "Dicotyledonous Stem",
  q: "Medullary rays in a dicot stem are composed of:",
  options: [
    "Sclerenchymatous cells arranged tangentially",
    "Collenchymatous cells arranged radially",
    "Radially placed parenchymatous cells between vascular bundles",
    "Xylem and phloem fibres"
  ],
  correct: 2,
  explanation: "NCERT: 'In between the vascular bundles there are a few layers of radially placed parenchymatous cells, which constitute medullary rays.' They connect pith with cortex."
},
{
  id: 115,
  topic: "Dicotyledonous Stem",
  q: "The arrangement of vascular bundles in a dicotyledonous stem is:",
  options: [
    "Scattered throughout the ground tissue",
    "Arranged in a ring",
    "Arranged in two rings",
    "Confined to the centre"
  ],
  correct: 1,
  explanation: "NCERT: 'A large number of vascular bundles are arranged in a ring; the ring arrangement of vascular bundles is a characteristic of dicot stem.' Scattered arrangement is a monocot stem characteristic."
},
{
  id: 116,
  topic: "Dicotyledonous Stem",
  q: "Each vascular bundle in a dicot stem is described as:",
  options: [
    "Conjoint, closed, with exarch protoxylem",
    "Conjoint, open, with endarch protoxylem",
    "Radial, open, with endarch protoxylem",
    "Conjoint, closed, with endarch protoxylem"
  ],
  correct: 1,
  explanation: "NCERT: 'Each vascular bundle is conjoint, open, and with endarch protoxylem.' This three-part description (conjoint + open + endarch) is a NEET high-yield combination. Open = cambium present. Endarch = protoxylem towards centre."
},
{
  id: 117,
  topic: "Dicotyledonous Stem",
  q: "The pith of a dicot stem is characterized by:",
  options: [
    "Small, thick-walled sclerenchyma cells",
    "Rounded, parenchymatous cells with large intercellular spaces",
    "Collenchymatous cells with irregular thickenings",
    "Barrel-shaped cells rich in starch"
  ],
  correct: 1,
  explanation: "NCERT: 'A large number of rounded, parenchymatous cells with large intercellular spaces which occupy the central portion of the stem constitute the pith.' Barrel-shaped cells rich in starch describe the endodermis (starch sheath)."
},
{
  id: 118,
  topic: "Dicotyledonous Stem",
  q: "Consider the following statements about a dicot stem:<br>I. Hypodermis is collenchymatous.<br>II. Endodermis is also called starch sheath.<br>III. Pericycle is present as a continuous ring of parenchyma.<br>IV. Vascular bundles are arranged in a ring.<br>Which statements are correct?",
  options: [
    "I, II and IV only",
    "I, II and III only",
    "II, III and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statement III is WRONG — pericycle is present as semi-lunar patches of SCLERENCHYMA (not a continuous ring of parenchyma). Statements I, II and IV are all correct per NCERT."
},
{
  id: 119,
  topic: "Dicotyledonous Stem",
  q: "<b>Assertion (A):</b> Vascular bundles of a dicot stem are called open.<br><b>Reason (R):</b> Cambium is present between xylem and phloem in dicot stem vascular bundles.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and R correctly explains A. NCERT defines open vascular bundles as those with cambium present between phloem and xylem, giving them the ability to form secondary tissues."
},
{
  id: 120,
  topic: "Dicotyledonous Stem",
  q: "Endarch protoxylem means:",
  options: [
    "Protoxylem is located towards the periphery",
    "Protoxylem is located towards the centre (pith)",
    "Metaxylem is located towards the centre",
    "Protoxylem is absent"
  ],
  correct: 1,
  explanation: "Endarch = protoxylem towards the centre/pith. Exarch = protoxylem towards the periphery (found in roots). In dicot stems, protoxylem is endarch. This is a conceptual term frequently asked in NEET."
},
{
  id: 121,
  topic: "Dicotyledonous Stem",
  q: "The correct sequence of layers from outside to inside in a dicot stem is:",
  options: [
    "Epidermis → Endodermis → Hypodermis → Cortex → Pericycle → Vascular bundles → Pith",
    "Epidermis → Hypodermis → Cortical layers → Endodermis → Pericycle → Vascular bundles → Pith",
    "Epidermis → Cortex → Hypodermis → Pericycle → Endodermis → Vascular bundles → Pith",
    "Epidermis → Pericycle → Hypodermis → Cortex → Endodermis → Vascular bundles → Pith"
  ],
  correct: 1,
  explanation: "Correct order from NCERT: Epidermis (outermost) → Hypodermis (collenchyma, outer cortex) → Cortical parenchyma layers → Endodermis/starch sheath (innermost cortex) → Pericycle (semi-lunar sclerenchyma) → Vascular bundles (ring) → Pith (central)."
},
{
  id: 122,
  topic: "Dicotyledonous Stem",
  q: "Which of the following is <b>NOT</b> a feature of the pericycle in a dicot stem?",
  options: [
    "Present on the inner side of the endodermis",
    "Present above the phloem",
    "Composed of semi-lunar patches of sclerenchyma",
    "Composed of collenchymatous cells"
  ],
  correct: 3,
  explanation: "Pericycle in dicot stem = semi-lunar patches of SCLERENCHYMA (not collenchyma). Collenchymatous cells form the hypodermis. This sclerenchyma vs collenchyma distinction between pericycle and hypodermis is a frequent NEET trap."
},
{
  id: 123,
  topic: "Dicotyledonous Stem",
  q: "Consider the following:<br>(a) Starch sheath = Endodermis of dicot stem<br>(b) Casparian strips = Endodermis of dicot root<br>(c) Semi-lunar patches = Pericycle of dicot stem<br>(d) Barrel-shaped cells = Pericycle of dicot root<br>Which pairs are correctly matched?",
  options: [
    "a, b and c only",
    "a, b and d only",
    "b, c and d only",
    "All are correct"
  ],
  correct: 0,
  explanation: "a, b and c are correct. d is WRONG — barrel-shaped cells are a feature of ENDODERMIS of dicot root (not pericycle). Pericycle in dicot root = thick-walled parenchymatous cells. Classic mix-up trap!"
},
{
  id: 124,
  topic: "Dicotyledonous Stem",
  q: "<b>Assertion (A):</b> The endodermis in a dicot stem is called the starch sheath.<br><b>Reason (R):</b> The endodermal cells of dicot stem have casparian strips made of suberin.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — NCERT calls it starch sheath because endodermal cells are rich in starch grains. R is FALSE — casparian strips with suberin are found in the endodermis of ROOTS, not stems. Stem endodermis = starch sheath. This root-stem endodermis confusion is a top NEET trap."
},
{
  id: 125,
  topic: "Dicotyledonous Stem",
  q: "The ring arrangement of vascular bundles is a characteristic feature of:",
  options: [
    "Monocot stem",
    "Dicot stem",
    "Monocot root",
    "Dicot root"
  ],
  correct: 1,
  explanation: "NCERT: 'the ring arrangement of vascular bundles is a characteristic of dicot stem.' Monocot stems have scattered vascular bundles. Roots (both) have radial arrangement."
},
{
  id: 126,
  topic: "Dicotyledonous Stem",
  q: "Which of the following is present between vascular bundles in a dicot stem?",
  options: [
    "Conjunctive tissue",
    "Medullary rays",
    "Bundle sheath",
    "Casparian strips"
  ],
  correct: 1,
  explanation: "NCERT: 'In between the vascular bundles there are a few layers of radially placed parenchymatous cells, which constitute medullary rays.' Conjunctive tissue is between xylem and phloem in roots. Bundle sheath is in monocot stems."
},
{
  id: 127,
  topic: "Dicotyledonous Stem",
  q: "How many of the following features are characteristic of a dicot stem?<br>I. Collenchymatous hypodermis<br>II. Starch sheath<br>III. Scattered vascular bundles<br>IV. Conjoint, open vascular bundles with endarch protoxylem<br>V. Semi-lunar patches of sclerenchyma in pericycle",
  options: ["Two", "Three", "Four", "Five"],
  correct: 2,
  explanation: "I, II, IV, and V are dicot stem features = FOUR correct. Statement III is WRONG — scattered vascular bundles are a monocot stem feature. Dicot stem has ring arrangement."
},
{
  id: 128,
  topic: "Dicotyledonous Stem",
  q: "Select the <b>incorrect</b> statement regarding a dicot stem:",
  options: [
    "Epidermis is covered with a thin layer of cuticle",
    "Hypodermis provides mechanical strength to the young stem",
    "Endodermis has casparian strips",
    "Pith is made of parenchymatous cells with large intercellular spaces"
  ],
  correct: 2,
  explanation: "Casparian strips are in the endodermis of ROOTS (with suberin). The endodermis of dicot STEM is the starch sheath (rich in starch grains, no casparian strips). This is one of the most tested differences in NEET."
},
{
  id: 129,
  topic: "Monocotyledonous Stem",
  q: "The hypodermis of a monocotyledonous stem is:",
  options: [
    "Collenchymatous",
    "Parenchymatous",
    "Sclerenchymatous",
    "Meristematic"
  ],
  correct: 2,
  explanation: "NCERT: 'The monocot stem has a sclerenchymatous hypodermis.' This contrasts with the collenchymatous hypodermis of dicot stems. This is THE most frequently asked NEET comparison point between dicot and monocot stems."
},
{
  id: 130,
  topic: "Monocotyledonous Stem",
  q: "The vascular bundles in a monocotyledonous stem are:",
  options: [
    "Arranged in a ring",
    "Scattered throughout the ground tissue",
    "Confined to the peripheral region only",
    "Arranged in two concentric rings"
  ],
  correct: 1,
  explanation: "NCERT: monocot stem has 'a large number of scattered vascular bundles.' Ring arrangement is characteristic of dicot stems. This is a fundamental dicot vs monocot stem distinguishing feature."
},
{
  id: 131,
  topic: "Monocotyledonous Stem",
  q: "Each vascular bundle in a monocot stem is surrounded by:",
  options: [
    "Parenchymatous bundle sheath",
    "Sclerenchymatous bundle sheath",
    "Collenchymatous bundle sheath",
    "No bundle sheath is present"
  ],
  correct: 1,
  explanation: "NCERT: 'each surrounded by a sclerenchymatous bundle sheath.' Bundle sheath in monocot stem is sclerenchymatous — this detail is frequently tested in NEET."
},
{
  id: 132,
  topic: "Monocotyledonous Stem",
  q: "The vascular bundles in a monocot stem are:",
  options: [
    "Conjoint and open",
    "Radial and closed",
    "Conjoint and closed",
    "Conjoint and open with endarch protoxylem"
  ],
  correct: 2,
  explanation: "NCERT: 'Vascular bundles are conjoint and closed.' Closed = no cambium = no secondary growth. Open vascular bundles are found in dicot stems. This is an extremely important NEET fact."
},
{
  id: 133,
  topic: "Monocotyledonous Stem",
  q: "In a monocot stem, the peripheral vascular bundles are:",
  options: [
    "Larger than centrally located ones",
    "Same size as centrally located ones",
    "Generally smaller than centrally located ones",
    "Absent"
  ],
  correct: 2,
  explanation: "NCERT: 'Peripheral vascular bundles are generally smaller than the centrally located ones.' This is an often overlooked but tested NCERT detail."
},
{
  id: 134,
  topic: "Monocotyledonous Stem",
  q: "Which of the following is absent in the vascular bundles of a monocot stem?",
  options: [
    "Xylem",
    "Phloem",
    "Phloem parenchyma",
    "Protoxylem"
  ],
  correct: 2,
  explanation: "NCERT: 'The phloem parenchyma is absent' in monocot stem vascular bundles. This is a very specific NCERT detail and a NEET favourite question."
},
{
  id: 135,
  topic: "Monocotyledonous Stem",
  q: "Water-containing cavities in a monocot stem are present:",
  options: [
    "In the ground tissue",
    "In the epidermis",
    "Within the vascular bundles",
    "In the hypodermis"
  ],
  correct: 2,
  explanation: "NCERT: 'water-containing cavities are present within the vascular bundles.' These are lysigenous cavities formed by the breakdown of protoxylem elements."
},
{
  id: 136,
  topic: "Monocotyledonous Stem",
  q: "The ground tissue in a monocotyledonous stem is:",
  options: [
    "Differentiated into cortex, endodermis and pith",
    "Large, conspicuous and parenchymatous",
    "Small and sclerenchymatous",
    "Divided into medullary rays and pericycle"
  ],
  correct: 1,
  explanation: "NCERT: 'a large, conspicuous parenchymatous ground tissue.' In monocot stem, the ground tissue is NOT differentiated into cortex, endodermis and pith like in dicot stem — it is a single undifferentiated mass."
},
{
  id: 137,
  topic: "Monocotyledonous Stem",
  q: "<b>Assertion (A):</b> Monocot stems cannot undergo secondary growth.<br><b>Reason (R):</b> Vascular bundles in monocot stems are closed (lack cambium).",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both A and R are true, and R correctly explains A. Closed vascular bundles lack cambium, which is required for secondary growth. Without cambium, no secondary xylem or phloem can be produced."
},
{
  id: 138,
  topic: "Monocotyledonous Stem",
  q: "Consider the following differences between dicot and monocot stems:<br>I. Dicot — Collenchymatous hypodermis; Monocot — Sclerenchymatous hypodermis<br>II. Dicot — Ring arrangement of VBs; Monocot — Scattered VBs<br>III. Dicot — Open VBs; Monocot — Closed VBs<br>IV. Dicot — Phloem parenchyma absent; Monocot — Phloem parenchyma present<br>Which of the above are correct?",
  options: [
    "I, II and III only",
    "I, II and IV only",
    "II, III and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statement IV is REVERSED — Phloem parenchyma is ABSENT in monocot stem (NCERT), not dicot stem. Statements I, II and III are all correctly stated per NCERT. This reversal trap is extremely common in NEET."
},
{
  id: 139,
  topic: "Monocotyledonous Stem",
  q: "Select the <b>incorrect</b> statement about a monocot stem:",
  options: [
    "Hypodermis is sclerenchymatous",
    "Vascular bundles are scattered",
    "Bundle sheath is sclerenchymatous",
    "Vascular bundles are open"
  ],
  correct: 3,
  explanation: "Vascular bundles in monocot stems are CLOSED (not open). Open VBs are characteristic of dicot stems. All other statements are correct per NCERT."
},
{
  id: 140,
  topic: "Dicotyledonous Stem",
  q: "A student observes a stem cross-section with the following features:<br>- Ring arrangement of vascular bundles<br>- Collenchymatous hypodermis<br>- Starch sheath<br>- Semi-lunar patches of sclerenchyma in pericycle<br>The stem belongs to:",
  options: [
    "A monocot plant",
    "A dicot plant",
    "A gymnosperm",
    "Cannot be determined"
  ],
  correct: 1,
  explanation: "All four features — ring arrangement, collenchymatous hypodermis, starch sheath, and semi-lunar sclerenchyma patches in pericycle — are characteristic of a dicotyledonous stem per NCERT."
},
{
  id: 141,
  topic: "Monocotyledonous Stem",
  q: "A student observes a stem cross-section with the following features:<br>- Scattered vascular bundles<br>- Sclerenchymatous hypodermis<br>- Sclerenchymatous bundle sheath around each VB<br>- No differentiation of ground tissue into cortex and pith<br>The stem belongs to:",
  options: [
    "A dicot plant",
    "A monocot plant",
    "A fern",
    "A gymnosperm"
  ],
  correct: 1,
  explanation: "All features — scattered VBs, sclerenchymatous hypodermis, sclerenchymatous bundle sheath, and undifferentiated ground tissue — are characteristic of a monocotyledonous stem."
},
{
  id: 142,
  topic: "Dicotyledonous Stem",
  q: "Match Column I with Column II for a dicot stem:<br>(a) Hypodermis — (i) Starch grains<br>(b) Endodermis — (ii) Sclerenchyma semi-lunar patches<br>(c) Pericycle — (iii) Collenchyma<br>(d) Pith — (iv) Parenchyma with large intercellular spaces<br>Select the correct match:",
  options: [
    "a-iii, b-i, c-ii, d-iv",
    "a-i, b-iii, c-iv, d-ii",
    "a-ii, b-i, c-iii, d-iv",
    "a-iii, b-ii, c-i, d-iv"
  ],
  correct: 0,
  explanation: "Hypodermis = collenchyma (iii), Endodermis = starch grains/starch sheath (i), Pericycle = semi-lunar sclerenchyma patches (ii), Pith = parenchyma with large intercellular spaces (iv). Correct match: a-iii, b-i, c-ii, d-iv."
},
{
  id: 143,
  topic: "Dicotyledonous Stem",
  q: "<b>Assertion (A):</b> The pericycle of a dicot stem is present as semi-lunar patches of sclerenchyma.<br><b>Reason (R):</b> These patches are present above the phloem and on the inner side of the endodermis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both A and R are true per NCERT. However, R describes the LOCATION of the pericycle patches — it does not explain WHY they are semi-lunar sclerenchyma patches. The location is a fact, not an explanation for the nature of pericycle."
},
{
  id: 144,
  topic: "Monocotyledonous Stem",
  q: "Which of the following features is common to BOTH dicot and monocot stems?",
  options: [
    "Collenchymatous hypodermis",
    "Conjoint vascular bundles",
    "Ring arrangement of vascular bundles",
    "Open vascular bundles"
  ],
  correct: 1,
  explanation: "Both dicot (conjoint, open) and monocot (conjoint, closed) stems have CONJOINT vascular bundles. The difference lies in open vs closed. Collenchymatous hypodermis = dicot only. Ring arrangement = dicot only. Open VBs = dicot only."
},
{
  id: 145,
  topic: "Dicotyledonous Stem",
  q: "In a dicot stem, the protoxylem is directed towards:",
  options: [
    "Periphery (exarch)",
    "Centre/pith (endarch)",
    "Laterally",
    "No specific direction"
  ],
  correct: 1,
  explanation: "NCERT: dicot stem VBs have 'endarch protoxylem.' Endarch means protoxylem is towards the centre (pith) and metaxylem towards the periphery. Exarch (protoxylem towards periphery) is found in roots."
},
{
  id: 146,
  topic: "Monocotyledonous Stem",
  q: "How many of the following are features of a monocot stem?<br>I. Sclerenchymatous hypodermis<br>II. Scattered vascular bundles<br>III. Conjoint, open vascular bundles<br>IV. Sclerenchymatous bundle sheath<br>V. Phloem parenchyma absent<br>VI. Water-containing cavities in vascular bundles",
  options: ["Three", "Four", "Five", "Six"],
  correct: 2,
  explanation: "Statement III is WRONG — monocot stem VBs are conjoint and CLOSED (not open). Statements I, II, IV, V, and VI are all correct per NCERT. So FIVE features are correct."
},
{
  id: 147,
  topic: "Dicotyledonous Stem",
  q: "The cells between epidermis and pericycle in a dicot stem constitute:",
  options: [
    "Pith",
    "Stele",
    "Cortex",
    "Medullary rays"
  ],
  correct: 2,
  explanation: "NCERT: 'The cells arranged in multiple layers between epidermis and pericycle constitute the cortex.' The cortex includes hypodermis, cortical parenchyma layers, and endodermis (starch sheath)."
},
{
  id: 148,
  topic: "Monocotyledonous Stem",
  q: "<b>Assertion (A):</b> In a monocot stem, the ground tissue is not differentiated into cortex, endodermis, pericycle and pith.<br><b>Reason (R):</b> Vascular bundles in monocot stems are scattered throughout the ground tissue.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both A and R are true. Because VBs are scattered throughout the ground tissue (not arranged in a ring), there is no clear distinction between cortex and pith, hence the ground tissue remains undifferentiated. R explains A."
},
{
  id: 149,
  topic: "Dicotyledonous Stem",
  q: "Which of the following pairs is <b>incorrectly</b> matched?",
  options: [
    "Dicot stem endodermis — Starch sheath",
    "Dicot root endodermis — Casparian strips",
    "Dicot stem hypodermis — Sclerenchymatous",
    "Dicot stem pericycle — Semi-lunar sclerenchyma patches"
  ],
  correct: 2,
  explanation: "Dicot stem hypodermis is COLLENCHYMATOUS, not sclerenchymatous. Sclerenchymatous hypodermis is a feature of MONOCOT stems. This is the #1 most tested dicot vs monocot stem difference in NEET."
},
{
  id: 150,
  topic: "Monocotyledonous Stem",
  q: "In a monocot stem, the structure that surrounds each vascular bundle is called:",
  options: [
    "Pericycle",
    "Endodermis",
    "Bundle sheath",
    "Casparian strip"
  ],
  correct: 2,
  explanation: "NCERT: 'each surrounded by a sclerenchymatous bundle sheath.' This bundle sheath is a distinctive feature of monocot stems. In dicot stems, vascular bundles are not individually surrounded by a bundle sheath."
},
{
  id: 151,
  topic: "Dicotyledonous Stem",
  q: "Consider the following about cortex sub-zones in a dicot stem:<br>I. Hypodermis — Collenchymatous — Below epidermis<br>II. Middle cortical layers — Parenchymatous — With intercellular spaces<br>III. Endodermis — Starch sheath — Innermost cortex<br>Which are correct?",
  options: [
    "I and III only",
    "II and III only",
    "I and II only",
    "I, II and III"
  ],
  correct: 3,
  explanation: "Statement II has been corrected to 'Parenchymatous'. All three statements are correct per NCERT."
},
{
  id: 152,
  topic: "Monocotyledonous Stem",
  q: "Which of the following is present in a monocot stem but absent in a dicot stem?",
  options: [
    "Medullary rays",
    "Starch sheath",
    "Bundle sheath around each vascular bundle",
    "Conjoint vascular bundles"
  ],
  correct: 2,
  explanation: "Sclerenchymatous bundle sheath around each VB is unique to monocot stems. Medullary rays and starch sheath are dicot stem features. Conjoint VBs are present in both (open in dicot, closed in monocot)."
},
{
  id: 153,
  topic: "Dicotyledonous Stem",
  q: "Which of the following is present in a dicot stem but absent in a monocot stem?",
  options: [
    "Hypodermis",
    "Medullary rays",
    "Epidermis",
    "Vascular bundles"
  ],
  correct: 1,
  explanation: "Medullary rays (radially placed parenchyma between VBs) are present in dicot stems (where VBs are in a ring). In monocot stems, VBs are scattered, so medullary rays as distinct structures are absent. Both have hypodermis (different type), epidermis, and VBs."
},
{
  id: 154,
  topic: "Monocotyledonous Stem",
  q: "Select the correct combination of features for a monocot stem:",
  options: [
    "Collenchymatous hypodermis, ring VBs, open, phloem parenchyma present",
    "Sclerenchymatous hypodermis, scattered VBs, closed, phloem parenchyma absent",
    "Sclerenchymatous hypodermis, ring VBs, open, phloem parenchyma absent",
    "Collenchymatous hypodermis, scattered VBs, closed, phloem parenchyma absent"
  ],
  correct: 1,
  explanation: "All four features in option B match NCERT for monocot stem: sclerenchymatous hypodermis + scattered VBs + closed VBs + phloem parenchyma absent. This is a classic NEET combination question."
},
{
  id: 155,
  topic: "Dicotyledonous Stem",
  q: "In a dicot stem, the pericycle is located:",
  options: [
    "Between epidermis and hypodermis",
    "Between cortex and vascular bundles, inner to endodermis and above phloem",
    "Between xylem and phloem",
    "In the central pith region"
  ],
  correct: 1,
  explanation: "NCERT: 'Pericycle is present on the inner side of the endodermis and above the phloem.' So it lies between the endodermis (innermost cortex) and the vascular bundles."
},
{
  id: 156,
  topic: "Monocotyledonous Stem",
  q: "Water-containing cavities in monocot stem vascular bundles are formed by:",
  options: [
    "Degeneration of protoxylem",
    "Degeneration of phloem",
    "Active secretion by parenchyma",
    "Dissolution of bundle sheath"
  ],
  correct: 0,
  explanation: "These lysigenous cavities are formed by the breakdown/degeneration of protoxylem elements. NCERT mentions their presence within vascular bundles. They are also called protoxylem lacunae."
},
{
  id: 157,
  topic: "Dicotyledonous Stem",
  q: "<b>Assertion (A):</b> In a dicot stem, collenchyma is found in the hypodermis.<br><b>Reason (R):</b> Collenchyma provides mechanical strength to young growing organs due to its flexible nature.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT says collenchymatous hypodermis 'provides mechanical strength to the young stem.' Collenchyma is ideal for young stems because it provides flexible support without hindering growth, unlike rigid sclerenchyma. R correctly explains A."
},
{
  id: 158,
  topic: "Monocotyledonous Stem",
  q: "Consider the following features:<br>I. Phloem parenchyma present<br>II. Cambium present between xylem and phloem<br>III. Bundle sheath present<br>IV. Scattered vascular bundles<br>Which of the above are features of a monocot stem?",
  options: [
    "I and II only",
    "III and IV only",
    "I, II and III only",
    "I, II, III and IV"
  ],
  correct: 1,
  explanation: "Statement I is WRONG — phloem parenchyma is ABSENT in monocot stems. Statement II is WRONG — cambium is absent (closed VBs). Statements III (sclerenchymatous bundle sheath) and IV (scattered VBs) are correct monocot stem features."
},
{
  id: 159,
  topic: "Dicotyledonous Stem",
  q: "Which of the following tissues is NOT found in the cortex of a dicot stem?",
  options: [
    "Collenchyma",
    "Parenchyma",
    "Sclerenchyma",
    "Endodermis"
  ],
  correct: 2,
  explanation: "The cortex of a dicot stem has three sub-zones: collenchymatous hypodermis, parenchymatous cortical layers, and endodermis (starch sheath). Sclerenchyma is found in the PERICYCLE (as semi-lunar patches), not in the cortex."
},
{
  id: 160,
  topic: "Dicotyledonous Stem",
  q: "The medullary rays in a dicot stem connect:",
  options: [
    "Epidermis with endodermis",
    "Pith with cortex (through radial parenchyma between VBs)",
    "Xylem with phloem within VBs",
    "Hypodermis with pericycle"
  ],
  correct: 1,
  explanation: "Medullary rays are radially placed parenchymatous cells BETWEEN vascular bundles. They connect the pith (centre) with the cortex (periphery), facilitating lateral transport of materials."
},
{
  id: 161,
  topic: "Monocotyledonous Stem",
  q: "In a monocot stem, differentiation of ground tissue into distinct cortex and pith is:",
  options: [
    "Clearly visible like dicot stem",
    "Not present — ground tissue is undifferentiated",
    "Present but with sclerenchyma replacing parenchyma",
    "Present only in the peripheral region"
  ],
  correct: 1,
  explanation: "In monocot stems, VBs are scattered throughout the ground tissue, so there is no clear differentiation into cortex and pith. The entire ground tissue is a single conspicuous parenchymatous mass."
},
{
  id: 162,
  topic: "Dicotyledonous Stem",
  q: "Which is the correct combination for a dicot stem vascular bundle?",
  options: [
    "Radial, open, exarch",
    "Conjoint, closed, endarch",
    "Conjoint, open, endarch",
    "Conjoint, open, exarch"
  ],
  correct: 2,
  explanation: "NCERT: 'Each vascular bundle is conjoint, open, and with endarch protoxylem.' This combination — conjoint + open + endarch — is one of the most important NEET facts. Radial is in roots. Closed is in monocot stems. Exarch is in roots."
},
{
  id: 163,
  topic: "Monocotyledonous Stem",
  q: "Match the following stem features:<br>(a) Dicot stem — (i) Closed VBs<br>(b) Monocot stem — (ii) Starch sheath<br>(c) Dicot stem — (iii) Scattered VBs<br>(d) Monocot stem — (iv) Open VBs<br>Select the correct combination:",
  options: [
    "a-iv, b-iii, c-ii, d-i",
    "a-ii, b-i, c-iv, d-iii",
    "a-iv, b-i, c-ii, d-iii",
    "a-ii, b-iii, c-iv, d-i"
  ],
  correct: 0,
  explanation: "Dicot stem: open VBs (iv) and starch sheath (ii). Monocot stem: scattered VBs (iii) and closed VBs (i). Correct: a-iv, b-iii, c-ii, d-i."
},
{
  id: 164,
  topic: "Dicotyledonous Stem",
  q: "In a dicot stem, the cuticle is described as:",
  options: [
    "Thick and waxy",
    "Thin layer",
    "Absent",
    "Present only on the lower surface"
  ],
  correct: 1,
  explanation: "NCERT: epidermis is 'covered with a thin layer of cuticle.' Note: in stems it's a THIN layer, while on leaves it can be thicker. This precise NCERT wording matters for statement-based questions."
}
,
{
  id: 165,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "A vertical section of a dorsiventral leaf through the lamina shows three main parts. These are:",
  options: [
    "Epidermis, cortex and vascular system",
    "Epidermis, mesophyll and vascular system",
    "Cuticle, mesophyll and pith",
    "Epidermis, palisade and ground tissue"
  ],
  correct: 1,
  explanation: "NCERT: 'The vertical section of a dorsiventral leaf through the lamina shows three main parts, namely, epidermis, mesophyll and vascular system.' Cortex and pith are stem/root terms, not leaf terms."
},
{
  id: 166,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "In a dorsiventral leaf, the adaxial epidermis refers to the:",
  options: [
    "Lower surface epidermis",
    "Upper surface epidermis",
    "Lateral surface epidermis",
    "Epidermis around the midrib only"
  ],
  correct: 1,
  explanation: "NCERT: 'epidermis which covers both the upper surface (adaxial epidermis) and lower surface (abaxial epidermis).' Adaxial = upper (towards the axis/stem), Abaxial = lower (away from axis). This terminology is extremely important for NEET."
},
{
  id: 167,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "In a dorsiventral leaf, which surface generally bears more stomata?",
  options: [
    "Adaxial (upper) epidermis",
    "Abaxial (lower) epidermis",
    "Both surfaces equally",
    "Neither surface has stomata"
  ],
  correct: 1,
  explanation: "NCERT: 'The abaxial epidermis generally bears more stomata than the adaxial epidermis.' In fact, the adaxial epidermis 'may even lack stomata.' This is one of the most frequently tested NEET facts about dorsiventral leaves."
},
{
  id: 168,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Which of the following statements about the adaxial epidermis of a dorsiventral leaf is correct?",
  options: [
    "It always has more stomata than abaxial epidermis",
    "It may even lack stomata",
    "It lacks cuticle",
    "It bears bulliform cells"
  ],
  correct: 1,
  explanation: "NCERT: 'The latter (adaxial epidermis) may even lack stomata.' Bulliform cells are found in monocot (isobilateral) leaves, not dicot dorsiventral leaves. Both surfaces have conspicuous cuticle."
},
{
  id: 169,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The tissue between the upper and lower epidermis of a leaf is called:",
  options: [
    "Cortex",
    "Ground tissue",
    "Mesophyll",
    "Pith"
  ],
  correct: 2,
  explanation: "NCERT: 'The tissue between the upper and the lower epidermis is called the mesophyll.' Cortex, ground tissue and pith are terms used for stems and roots."
},
{
  id: 170,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Mesophyll tissue is made up of:",
  options: [
    "Collenchyma",
    "Sclerenchyma",
    "Parenchyma possessing chloroplasts",
    "Both collenchyma and sclerenchyma"
  ],
  correct: 2,
  explanation: "NCERT: 'Mesophyll, which possesses chloroplasts and carry out photosynthesis, is made up of parenchyma.' Mesophyll is the primary photosynthetic tissue of the leaf."
},
{
  id: 171,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The two types of cells in the mesophyll of a dorsiventral leaf are:",
  options: [
    "Collenchyma and sclerenchyma",
    "Palisade parenchyma and spongy parenchyma",
    "Adaxial parenchyma and abaxial sclerenchyma",
    "Bundle sheath cells and companion cells"
  ],
  correct: 1,
  explanation: "NCERT: 'It has two types of cells – the palisade parenchyma and the spongy parenchyma.' This differentiation into palisade and spongy is a characteristic feature of dorsiventral (dicot) leaves."
},
{
  id: 172,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Palisade parenchyma in a dorsiventral leaf is:",
  options: [
    "Oval, loosely arranged, located abaxially",
    "Elongated, vertically arranged, located adaxially",
    "Round, compactly arranged, located in the midrib",
    "Irregular, scattered throughout mesophyll"
  ],
  correct: 1,
  explanation: "NCERT: 'The adaxially placed palisade parenchyma is made up of elongated cells, which are arranged vertically and parallel to each other.' This precise description — adaxial, elongated, vertical, parallel — is a NEET favourite."
},
{
  id: 173,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Spongy parenchyma in a dorsiventral leaf is characterized by all EXCEPT:",
  options: [
    "Oval or round cells",
    "Loosely arranged",
    "Numerous large spaces and air cavities",
    "Cells arranged vertically and parallel to each other"
  ],
  correct: 3,
  explanation: "Cells arranged vertically and parallel to each other describe PALISADE parenchyma, not spongy. NCERT describes spongy parenchyma as 'oval or round and loosely arranged' with 'numerous large spaces and air cavities between these cells.'"
},
{
  id: 174,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The spongy parenchyma in a dorsiventral leaf is situated:",
  options: [
    "Above the palisade cells, towards adaxial epidermis",
    "Below the palisade cells, extending to the lower epidermis",
    "Within the vascular bundles",
    "Only around the midrib"
  ],
  correct: 1,
  explanation: "NCERT: 'The oval or round and loosely arranged spongy parenchyma is situated below the palisade cells and extends to the lower epidermis.' So the arrangement is: upper epidermis → palisade → spongy → lower epidermis."
},
{
  id: 175,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The vascular bundles in a dorsiventral leaf are found in:",
  options: [
    "Only in the midrib",
    "Veins and the midrib",
    "Only in the mesophyll",
    "Only in the epidermis"
  ],
  correct: 1,
  explanation: "NCERT: 'Vascular system includes vascular bundles, which can be seen in the veins and the midrib.' VBs are present in all veins (of varying size) and the midrib."
},
{
  id: 176,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The size of vascular bundles in a dorsiventral leaf depends on:",
  options: [
    "The age of the leaf",
    "The size of the veins",
    "The number of stomata",
    "The thickness of the cuticle"
  ],
  correct: 1,
  explanation: "NCERT: 'The size of the vascular bundles are dependent on the size of the veins.' Larger veins have larger VBs, smaller veins have smaller VBs."
},
{
  id: 177,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "In a dorsiventral leaf, the vascular bundles are surrounded by:",
  options: [
    "Thin-walled parenchymatous cells",
    "Sclerenchymatous bundle sheath",
    "A layer of thick-walled bundle sheath cells",
    "Bulliform cells"
  ],
  correct: 2,
  explanation: "NCERT: 'The vascular bundles are surrounded by a layer of thick walled bundle sheath cells.' Note: NCERT says 'thick walled' but doesn't specifically say sclerenchymatous here (unlike monocot stem). Bulliform cells are in monocot leaves."
},
{
  id: 178,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The venation pattern in dicot leaves is:",
  options: [
    "Parallel venation",
    "Reticulate venation",
    "Both parallel and reticulate",
    "No venation"
  ],
  correct: 1,
  explanation: "NCERT: 'The veins vary in thickness in the reticulate venation of the dicot leaves.' Reticulate venation is characteristic of dicot leaves, while parallel venation is characteristic of monocot leaves."
},
{
  id: 179,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "<b>Assertion (A):</b> The veins in a dicot leaf vary in thickness.<br><b>Reason (R):</b> Dicot leaves show reticulate venation.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT: 'The veins vary in thickness in the reticulate venation of the dicot leaves.' Reticulate venation involves a network of veins of different sizes (midrib → secondary → tertiary veins), which directly explains why veins vary in thickness. R explains A."
},
{
  id: 180,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Consider the following statements about a dorsiventral leaf:<br>I. Both adaxial and abaxial epidermis have a conspicuous cuticle.<br>II. Abaxial epidermis has more stomata than adaxial.<br>III. Mesophyll is differentiated into palisade and spongy parenchyma.<br>IV. Palisade parenchyma is located towards the abaxial side.<br>Which are correct?",
  options: [
    "I, II and III only",
    "I, II and IV only",
    "I, III and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statement IV is WRONG — palisade parenchyma is located ADAXIALLY (towards upper surface), not abaxially. NCERT: 'The adaxially placed palisade parenchyma.' Statements I, II and III are all correct per NCERT."
},
{
  id: 181,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The correct arrangement of tissues from adaxial to abaxial surface in a dorsiventral leaf is:",
  options: [
    "Upper epidermis → Spongy parenchyma → Palisade parenchyma → Lower epidermis",
    "Upper epidermis → Palisade parenchyma → Spongy parenchyma → Lower epidermis",
    "Upper epidermis → Vascular bundles → Mesophyll → Lower epidermis",
    "Cuticle → Spongy parenchyma → Palisade parenchyma → Cuticle"
  ],
  correct: 1,
  explanation: "From adaxial to abaxial: Upper epidermis (+ cuticle) → Palisade parenchyma (elongated, vertical) → Spongy parenchyma (oval, loosely arranged, extends to lower epidermis) → Lower epidermis (+ cuticle). This sequence is directly from NCERT."
},
{
  id: 182,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Select the <b>incorrect</b> statement about mesophyll:",
  options: [
    "It is made up of parenchyma",
    "It possesses chloroplasts",
    "It carries out photosynthesis",
    "It is made up of collenchyma and sclerenchyma"
  ],
  correct: 3,
  explanation: "NCERT clearly states mesophyll 'is made up of parenchyma' and 'possesses chloroplasts and carry out photosynthesis.' It is NOT made of collenchyma and sclerenchyma — these are mechanical tissues, not photosynthetic."
},
{
  id: 183,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "In a dorsiventral leaf, air cavities are predominantly present in:",
  options: [
    "Palisade parenchyma",
    "Spongy parenchyma",
    "Bundle sheath",
    "Epidermis"
  ],
  correct: 1,
  explanation: "NCERT: spongy parenchyma has 'numerous large spaces and air cavities between these cells.' Palisade cells are compactly arranged vertically and parallel, with minimal air spaces."
},
{
  id: 184,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "<b>Assertion (A):</b> Palisade parenchyma is the main photosynthetic tissue in a dorsiventral leaf.<br><b>Reason (R):</b> Palisade cells are elongated and arranged vertically with numerous chloroplasts.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Palisade parenchyma being the main photosynthetic tissue is because the elongated, vertically arranged cells are packed with chloroplasts, maximizing light absorption. R correctly explains A."
},
{
  id: 185,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "The epidermis of a dorsiventral leaf has:",
  options: [
    "A conspicuous cuticle on adaxial surface only",
    "A conspicuous cuticle on abaxial surface only",
    "A conspicuous cuticle on both surfaces",
    "No cuticle on either surface"
  ],
  correct: 2,
  explanation: "NCERT: 'The epidermis which covers both the upper surface (adaxial epidermis) and lower surface (abaxial epidermis) of the leaf has a conspicuous cuticle.' Cuticle is present on BOTH surfaces."
},
{
  id: 186,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "The anatomy of an isobilateral leaf is similar to a dorsiventral leaf but differs in:",
  options: [
    "Presence of epidermis and vascular bundles",
    "Distribution of stomata and differentiation of mesophyll",
    "Presence of cuticle and mesophyll",
    "Type of vascular bundles"
  ],
  correct: 1,
  explanation: "NCERT states two characteristic differences: (1) Stomata present on BOTH surfaces (vs mostly abaxial in dicot), and (2) Mesophyll NOT differentiated into palisade and spongy (vs differentiated in dicot)."
},
{
  id: 187,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "In an isobilateral leaf, the stomata are present on:",
  options: [
    "Only the adaxial surface",
    "Only the abaxial surface",
    "Both surfaces of the epidermis",
    "Neither surface"
  ],
  correct: 2,
  explanation: "NCERT: 'In an isobilateral leaf, the stomata are present on both the surfaces of the epidermis.' This is one of the key differences from dorsiventral leaves where abaxial surface has more stomata."
},
{
  id: 188,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "In an isobilateral leaf, the mesophyll is:",
  options: [
    "Differentiated into palisade and spongy parenchyma",
    "Not differentiated into palisade and spongy parenchyma",
    "Made up of sclerenchyma",
    "Absent"
  ],
  correct: 1,
  explanation: "NCERT: 'the mesophyll is not differentiated into palisade and spongy parenchyma.' This undifferentiated mesophyll is the second key difference from dorsiventral leaves."
},
{
  id: 189,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Bulliform cells are:",
  options: [
    "Small, thick-walled cells present in the mesophyll",
    "Large, empty, colourless adaxial epidermal cells along the veins in grasses",
    "Guard cells that are dumb-bell shaped",
    "Abaxial epidermal cells filled with chloroplasts"
  ],
  correct: 1,
  explanation: "NCERT: 'In grasses, certain adaxial epidermal cells along the veins modify themselves into large, empty, colourless cells. These are called bulliform cells.' Every descriptor — large, empty, colourless, adaxial, along veins — is important for NEET."
},
{
  id: 190,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Bulliform cells are found in:",
  options: [
    "Dicotyledonous leaves",
    "Grasses (monocotyledonous leaves)",
    "Dicotyledonous stems",
    "Roots of monocots"
  ],
  correct: 1,
  explanation: "NCERT: 'In grasses, certain adaxial epidermal cells along the veins modify themselves into large, empty, colourless cells. These are called bulliform cells.' They are specific to grass (monocot) leaves."
},
{
  id: 191,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "When bulliform cells are turgid:",
  options: [
    "The leaf curls inwards",
    "The leaf surface is exposed (flat)",
    "The leaf falls off",
    "Stomata close"
  ],
  correct: 1,
  explanation: "NCERT: 'When the bulliform cells in the leaves have absorbed water and are turgid, the leaf surface is exposed.' Turgid = flat/exposed leaf. Flaccid = curled inward."
},
{
  id: 192,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "When bulliform cells are flaccid due to water stress, they:",
  options: [
    "Make the leaf surface exposed",
    "Make the leaves curl inwards to minimise water loss",
    "Increase transpiration",
    "Promote stomatal opening"
  ],
  correct: 1,
  explanation: "NCERT: 'When they are flaccid due to water stress, they make the leaves curl inwards to minimise water loss.' This is an adaptive mechanism to reduce water loss during drought conditions."
},
{
  id: 193,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "The function of bulliform cells is to:",
  options: [
    "Carry out photosynthesis",
    "Store food materials",
    "Regulate leaf rolling to minimise water loss",
    "Provide mechanical strength to leaves"
  ],
  correct: 2,
  explanation: "Bulliform cells regulate leaf rolling — turgid = leaf flat/exposed, flaccid = leaf curls inward to minimise water loss. They do NOT photosynthesize (they are colourless/lack chloroplasts) or store food."
},
{
  id: 194,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "<b>Assertion (A):</b> Bulliform cells are large, empty and colourless.<br><b>Reason (R):</b> Bulliform cells are actively involved in photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — NCERT describes bulliform cells as 'large, empty, colourless cells.' R is FALSE — being colourless and empty, bulliform cells are NOT involved in photosynthesis. They regulate leaf rolling for water conservation."
},
{
  id: 195,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "The parallel venation in monocot leaves is reflected internally by:",
  options: [
    "Veins of varying thickness like dicot leaves",
    "Near similar sizes of vascular bundles (except in main veins)",
    "Absence of vascular bundles",
    "Presence of reticulate network of VBs"
  ],
  correct: 1,
  explanation: "NCERT: 'The parallel venation in monocot leaves is reflected in the near similar sizes of vascular bundles (except in main veins) as seen in vertical sections of the leaves.' In contrast, dicot leaves with reticulate venation have VBs of varying sizes."
},
{
  id: 196,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Consider the following statements:<br>I. Isobilateral leaves have stomata on both surfaces.<br>II. Dorsiventral leaves have mesophyll differentiated into palisade and spongy.<br>III. Bulliform cells are present in dorsiventral leaves.<br>IV. Isobilateral leaf mesophyll is not differentiated.<br>Which are correct?",
  options: [
    "I, II and IV only",
    "I, II and III only",
    "II, III and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statement III is WRONG — bulliform cells are found in GRASSES (isobilateral/monocot leaves), NOT in dorsiventral (dicot) leaves. Statements I, II and IV are all correct per NCERT."
},
{
  id: 197,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Bulliform cells are modified:",
  options: [
    "Abaxial epidermal cells",
    "Mesophyll cells",
    "Adaxial epidermal cells along the veins",
    "Guard cells"
  ],
  correct: 2,
  explanation: "NCERT: 'certain adaxial epidermal cells along the veins modify themselves into large, empty, colourless cells.' They are modified ADAXIAL (upper) epidermal cells, not abaxial or mesophyll cells."
},
{
  id: 198,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "<b>Assertion (A):</b> An isobilateral leaf is called so because both surfaces look similar.<br><b>Reason (R):</b> In an isobilateral leaf, stomata are present on both surfaces and mesophyll is not differentiated.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both A and R are true. The leaf is called isobilateral (iso = equal, bilateral = two sides) because both surfaces are structurally similar — stomata on both sides and no differentiation of mesophyll into palisade (adaxial) and spongy (abaxial). R explains A."
},
{
  id: 199,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "A dicot leaf is called dorsiventral because:",
  options: [
    "It has identical upper and lower surfaces",
    "The dorsal (upper/adaxial) and ventral (lower/abaxial) surfaces are structurally different",
    "It has bulliform cells on the dorsal surface",
    "Mesophyll is undifferentiated"
  ],
  correct: 1,
  explanation: "A dorsiventral leaf has structurally different upper (dorsal/adaxial) and lower (ventral/abaxial) surfaces — different stomatal distribution, palisade on adaxial, spongy on abaxial. Isobilateral leaves have similar surfaces."
},
{
  id: 200,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Select the <b>incorrect</b> match:",
  options: [
    "Dorsiventral leaf — Reticulate venation — VBs of varying sizes",
    "Isobilateral leaf — Parallel venation — VBs of near similar sizes",
    "Dorsiventral leaf — Mesophyll differentiated — Palisade and spongy",
    "Isobilateral leaf — Mesophyll differentiated — Palisade and spongy"
  ],
  correct: 3,
  explanation: "Option D is incorrect — isobilateral leaf mesophyll is NOT differentiated into palisade and spongy parenchyma. This differentiation is a feature of dorsiventral (dicot) leaves only."
},
{
  id: 201,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "How many of the following are features of bulliform cells?<br>I. Large<br>II. Empty<br>III. Colourless<br>IV. Located on abaxial epidermis<br>V. Present along the veins<br>VI. Found in grasses",
  options: ["Three", "Four", "Five", "Six"],
  correct: 2,
  explanation: "Statement IV is WRONG — bulliform cells are on the ADAXIAL (upper) epidermis, not abaxial. Statements I (large), II (empty), III (colourless), V (along veins), and VI (in grasses) are all correct per NCERT. So FIVE features are correct."
},
{
  id: 202,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Which of the following correctly describes the palisade parenchyma?",
  options: [
    "Oval cells, loosely arranged, located abaxially, with air cavities",
    "Elongated cells, arranged vertically and parallel, located adaxially",
    "Round cells, compactly arranged, present around vascular bundles",
    "Irregular cells, scattered throughout mesophyll on both surfaces"
  ],
  correct: 1,
  explanation: "NCERT: 'The adaxially placed palisade parenchyma is made up of elongated cells, which are arranged vertically and parallel to each other.' Option A describes spongy parenchyma."
},
{
  id: 203,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Match Column I with Column II:<br>(a) Bulliform cells turgid — (i) Leaf curls inward<br>(b) Bulliform cells flaccid — (ii) Leaf surface exposed<br>(c) Dorsiventral mesophyll — (iii) Not differentiated<br>(d) Isobilateral mesophyll — (iv) Differentiated into palisade and spongy<br>Select the correct match:",
  options: [
    "a-ii, b-i, c-iv, d-iii",
    "a-i, b-ii, c-iv, d-iii",
    "a-ii, b-i, c-iii, d-iv",
    "a-i, b-ii, c-iii, d-iv"
  ],
  correct: 0,
  explanation: "Turgid bulliform cells = leaf exposed (ii). Flaccid = leaf curls inward (i). Dorsiventral mesophyll = differentiated (iv). Isobilateral mesophyll = not differentiated (iii). Correct: a-ii, b-i, c-iv, d-iii."
},
{
  id: 204,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "In a dorsiventral leaf, reticulate venation results in:",
  options: [
    "Vascular bundles of near similar sizes",
    "Veins of varying thickness and VBs of varying sizes",
    "Absence of bundle sheath",
    "Bulliform cells along the veins"
  ],
  correct: 1,
  explanation: "NCERT: 'The veins vary in thickness in the reticulate venation of the dicot leaves' and 'The size of the vascular bundles are dependent on the size of the veins.' So reticulate venation = varying vein thickness = varying VB sizes."
},
{
  id: 205,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Which of the following is present in an isobilateral leaf but absent in a dorsiventral leaf?",
  options: [
    "Mesophyll",
    "Stomata",
    "Bulliform cells",
    "Vascular bundles"
  ],
  correct: 2,
  explanation: "Bulliform cells are unique to grass (monocot/isobilateral) leaves. Both types of leaves have mesophyll, stomata, and vascular bundles — though with structural differences."
},
{
  id: 206,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Which feature is present in a dorsiventral leaf but absent in an isobilateral leaf?",
  options: [
    "Vascular bundles",
    "Differentiation of mesophyll into palisade and spongy parenchyma",
    "Epidermis",
    "Cuticle"
  ],
  correct: 1,
  explanation: "Differentiation of mesophyll into palisade and spongy parenchyma is specific to dorsiventral (dicot) leaves. In isobilateral leaves, mesophyll is undifferentiated. Both have VBs, epidermis, and cuticle."
},
{
  id: 207,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "<b>Assertion (A):</b> In grasses, leaves curl inward during water stress.<br><b>Reason (R):</b> Bulliform cells become flaccid during water stress, causing the leaf to roll inward to minimise water loss.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both A and R are true. NCERT: 'When they are flaccid due to water stress, they make the leaves curl inwards to minimise water loss.' R correctly and completely explains the mechanism behind A."
},
{
  id: 208,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Consider the following:<br>I. In a dorsiventral leaf, xylem in the vascular bundle is located towards the adaxial epidermis.<br>II. Phloem is located towards the abaxial epidermis.<br>III. Bundle sheath is absent around vascular bundles.<br>Which are correct?",
  options: [
    "I and II only",
    "I and III only",
    "II and III only",
    "I, II and III"
  ],
  correct: 0,
  explanation: "In leaf VBs, xylem is towards adaxial (upper) and phloem towards abaxial (lower) surface — this is the standard arrangement. Statement III is WRONG — NCERT states VBs are surrounded by thick-walled bundle sheath cells."
},
{
  id: 209,
  topic: "Summary",
  q: "The plant tissues are broadly classified into:",
  options: [
    "Simple and complex",
    "Meristematic and permanent",
    "Epidermal and vascular",
    "Primary and secondary"
  ],
  correct: 1,
  explanation: "NCERT summary: 'The plant tissues are broadly classified into meristematic (apical, lateral and intercalary) and permanent (simple and complex).' Simple and complex are sub-types of permanent tissue."
},
{
  id: 210,
  topic: "Summary",
  q: "The ground tissue system is divided into three zones:",
  options: [
    "Epidermis, cortex and pith",
    "Cortex, pericycle and pith",
    "Xylem, phloem and cambium",
    "Parenchyma, collenchyma and sclerenchyma"
  ],
  correct: 1,
  explanation: "NCERT summary: 'The ground tissue system forms the main bulk of the plant. It is divided into three zones – cortex, pericycle and pith.' Epidermis is a separate tissue system. Parenchyma, collenchyma, sclerenchyma are tissue types, not zones."
},
{
  id: 211,
  topic: "Summary",
  q: "Secondary growth occurs in:",
  options: [
    "Most monocotyledonous roots and stems",
    "Most dicotyledonous roots and stems",
    "Both monocot and dicot roots and stems equally",
    "Only in roots of all plants"
  ],
  correct: 1,
  explanation: "NCERT summary: 'The secondary growth occurs in most of the dicotyledonous roots and stems.' Note the word 'most' — not ALL dicots. Monocots generally do not undergo secondary growth."
},
{
  id: 212,
  topic: "Summary",
  q: "Monocotyledonous and dicotyledonous plants differ in all of the following EXCEPT:",
  options: [
    "Type of vascular bundles",
    "Number of vascular bundles",
    "Location of vascular bundles",
    "Presence of xylem and phloem"
  ],
  correct: 3,
  explanation: "NCERT summary: 'They differ in type, number and location of vascular bundles.' Both monocots and dicots have xylem and phloem — this is common. They differ in type (open/closed), number, and location (ring/scattered)."
},
{
  id: 213,
  topic: "Summary",
  q: "The main functions of tissues include all EXCEPT:",
  options: [
    "Assimilation of food and its storage",
    "Transportation of water, minerals and photosynthates",
    "Mechanical support",
    "Reproduction"
  ],
  correct: 3,
  explanation: "NCERT summary lists three main functions: 'Assimilation of food and its storage, transportation of water, minerals and photosynthates, and mechanical support.' Reproduction is not listed as a main function of tissues."
},
{
  id: 214,
  topic: "Summary",
  q: "Consider the following statements:<br>I. Meristematic tissues include apical, lateral and intercalary types.<br>II. Permanent tissues include simple and complex types.<br>III. The vascular tissue system is formed by xylem and phloem.<br>IV. The epidermal tissue system forms the main bulk of the plant.<br>Which are correct?",
  options: [
    "I, II and III only",
    "I, II and IV only",
    "I, III and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statement IV is WRONG — it is the GROUND tissue system that forms the main bulk of the plant, not the epidermal tissue system. Statements I, II and III are all correct per NCERT summary."
},
{
  id: 215,
  topic: "Summary",
  q: "The vascular bundles are classified into different types based on:",
  options: [
    "Presence of cambium and location of xylem and phloem",
    "Number of cells and size of vessels",
    "Presence of cuticle and trichomes",
    "Type of stomata and guard cells"
  ],
  correct: 0,
  explanation: "NCERT summary: 'On the basis of presence of cambium, location of xylem and phloem, the vascular bundles are of different types.' Cambium presence → open/closed. Xylem-phloem location → radial/conjoint."
},
{
  id: 216,
  topic: "Summary",
  q: "<b>Assertion (A):</b> The ground tissue system forms the main bulk of the plant.<br><b>Reason (R):</b> It includes cortex, pericycle and pith.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The ground tissue system includes cortex (several layers), pericycle, and pith — collectively these regions constitute the largest volume of the plant body, making it the main bulk. R explains A."
},
{
  id: 217,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "A student examines two leaf cross-sections. Leaf A has palisade and spongy parenchyma with more stomata on the lower surface. Leaf B has undifferentiated mesophyll, stomata on both surfaces, and bulliform cells.<br>Leaf A and Leaf B respectively belong to:",
  options: [
    "Monocot and Dicot",
    "Dicot and Monocot",
    "Both are Dicot",
    "Both are Monocot"
  ],
  correct: 1,
  explanation: "Leaf A features (differentiated mesophyll, more abaxial stomata) = dorsiventral/dicot leaf. Leaf B features (undifferentiated mesophyll, stomata on both surfaces, bulliform cells) = isobilateral/monocot leaf."
},
{
  id: 218,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "Bulliform cells differ from other epidermal cells in being:",
  options: [
    "Small, thick-walled and pigmented",
    "Large, empty and colourless",
    "Small, filled with chloroplasts",
    "Large, filled with anthocyanin"
  ],
  correct: 1,
  explanation: "NCERT describes bulliform cells as 'large, empty, colourless cells.' They are distinctly different from normal epidermal cells — larger in size, devoid of contents (empty), and lack pigments (colourless)."
},
{
  id: 219,
  topic: "Summary",
  q: "The epidermal tissue system is made up of:",
  options: [
    "Xylem, phloem and cambium",
    "Epidermal cells, stomata and epidermal appendages",
    "Cortex, pericycle and pith",
    "Parenchyma, collenchyma and sclerenchyma"
  ],
  correct: 1,
  explanation: "NCERT summary: 'The epidermal tissue systems are made of epidermal cells, stomata and the epidermal appendages.' Option C describes ground tissue zones. Option D describes simple tissue types. Option A describes vascular tissue components."
},
{
  id: 220,
  topic: "Summary",
  q: "The conducting tissues that translocate water, minerals and food material are:",
  options: [
    "Parenchyma and collenchyma",
    "Epidermis and cortex",
    "Xylem and phloem (vascular bundles)",
    "Sclerenchyma and fibres"
  ],
  correct: 2,
  explanation: "NCERT summary: 'The vascular bundles form the conducting tissue and translocate water, minerals and food material.' Xylem transports water and minerals; phloem translocates food (photosynthates)."
},
{
  id: 221,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "In a dorsiventral leaf cross-section, which of the following is seen in the vascular bundle?",
  options: [
    "Xylem towards abaxial and phloem towards adaxial side",
    "Xylem towards adaxial and phloem towards abaxial side",
    "Xylem and phloem arranged radially",
    "Xylem completely surrounding phloem"
  ],
  correct: 1,
  explanation: "In leaf vascular bundles, xylem is towards the upper (adaxial) surface and phloem towards the lower (abaxial) surface. NCERT asks the student to 'find the position of xylem in the vascular bundle' in the figure."
},
{
  id: 222,
  topic: "Isobilateral (Monocotyledonous) Leaf",
  q: "In monocot leaves with parallel venation, the vascular bundles (except main veins) are:",
  options: [
    "Of widely varying sizes",
    "Of near similar sizes",
    "Progressively increasing in size from margin to centre",
    "Absent in minor veins"
  ],
  correct: 1,
  explanation: "NCERT: 'The parallel venation in monocot leaves is reflected in the near similar sizes of vascular bundles (except in main veins).' This contrasts with dicot leaves where VB size varies with vein thickness."
},
{
  id: 223,
  topic: "Summary",
  q: "Select the correct statement regarding secondary growth:",
  options: [
    "It occurs in all angiosperms",
    "It occurs in most dicotyledonous roots and stems",
    "It occurs exclusively in monocots",
    "It occurs only in roots of dicots"
  ],
  correct: 1,
  explanation: "NCERT summary: 'The secondary growth occurs in most of the dicotyledonous roots and stems.' It does not occur in monocots (generally) and not in all dicots either — the word 'most' is key."
},
{
  id: 224,
  topic: "Dorsiventral (Dicotyledonous) Leaf",
  q: "Which of the following is an INCORRECT difference between dorsiventral and isobilateral leaves?",
  options: [
    "Dorsiventral — More stomata on abaxial surface; Isobilateral — Stomata on both surfaces equally",
    "Dorsiventral — Mesophyll differentiated; Isobilateral — Mesophyll undifferentiated",
    "Dorsiventral — Reticulate venation; Isobilateral — Parallel venation",
    "Dorsiventral — Bulliform cells present; Isobilateral — Bulliform cells absent"
  ],
  correct: 3,
  explanation: "Option D is REVERSED — bulliform cells are present in ISOBILATERAL (monocot) leaves and ABSENT in dorsiventral (dicot) leaves. All other options correctly state the differences."
}
];
