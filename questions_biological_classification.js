const allQuestions = [
  {
    id: 1,
    topic: "Biological Classification - Introduction",
    difficulty: "Easy",
    type: "Direct",
    q: "Aristotle classified plants into which of the following groups based on simple morphological characters?",
    options: [
      "Trees, shrubs and herbs",
      "Trees, climbers and herbs",
      "Herbs, shrubs and grasses",
      "Trees, shrubs and creepers"
    ],
    correct: 0,
    explanation: "NCERT Line: 'He used simple morphological characters to classify plants into trees, shrubs and herbs.' Option B replaces 'shrubs' context with 'climbers', option C adds 'grasses', option D adds 'creepers' — none are NCERT terms. Common mistake: Students confuse Aristotle's plant classification with general botany terms."
  },
  {
    id: 2,
    topic: "Biological Classification - Introduction",
    difficulty: "Easy",
    type: "Direct",
    q: "Aristotle divided animals into two groups based on:",
    options: [
      "Presence or absence of vertebral column",
      "Habitat — aquatic and terrestrial",
      "Presence or absence of red blood",
      "Mode of nutrition — herbivores and carnivores"
    ],
    correct: 2,
    explanation: "NCERT Line: 'He also divided animals into two groups, those which had red blood and those that did not.' Option A is a common trap — vertebral column is a modern classification criterion, not Aristotle's. Students often confuse this with vertebrate/invertebrate classification. NCERT specifically says 'red blood', not vertebral column."
  },
  {
    id: 3,
    topic: "Biological Classification - Introduction",
    difficulty: "Easy",
    type: "Direct",
    q: "The Two Kingdom system of classification was developed during the time of:",
    options: [
      "Aristotle",
      "R.H. Whittaker",
      "Linnaeus",
      "Carl Woese"
    ],
    correct: 2,
    explanation: "NCERT Line: 'In Linnaeus' time a Two Kingdom system of classification with Plantae and Animalia kingdoms was developed.' Option A (Aristotle) is the most tempting distractor — he did classify organisms but did not propose the Two Kingdom system. Option B proposed 5 Kingdom, Option D proposed 3-domain system. Common mistake: confusing Aristotle with Linnaeus."
  },
  {
    id: 4,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>NOT</b> a limitation of the Two Kingdom classification system as per NCERT?",
    options: [
      "It did not distinguish between eukaryotes and prokaryotes",
      "It did not distinguish between unicellular and multicellular organisms",
      "It did not distinguish between photosynthetic and non-photosynthetic organisms",
      "It did not distinguish between autotrophic and saprophytic organisms"
    ],
    correct: 3,
    explanation: "NCERT Line: 'This system did not distinguish between the eukaryotes and prokaryotes, unicellular and multicellular organisms and photosynthetic (green algae) and non-photosynthetic (fungi) organisms.' The three limitations explicitly mentioned are: (1) eukaryotes vs prokaryotes, (2) unicellular vs multicellular, (3) photosynthetic vs non-photosynthetic. Option D — 'autotrophic and saprophytic' — is NOT the exact NCERT phrasing. NCERT says 'photosynthetic and non-photosynthetic', not 'autotrophic and saprophytic'. This is a classic NTA one-word-change trap."
  },
  {
    id: 5,
    topic: "Biological Classification - Introduction",
    difficulty: "Easy",
    type: "Direct",
    q: "Five Kingdom Classification was proposed by R.H. Whittaker in:",
    options: [
      "1959",
      "1969",
      "1979",
      "1989"
    ],
    correct: 1,
    explanation: "NCERT Line: 'R.H. Whittaker (1969) proposed a Five Kingdom Classification.' This is a very HIGH-YIELD fact — asked repeatedly in NEET. NTA commonly gives 1959 and 1979 as distractors. Students must memorise: Whittaker = 1969. Common mistake: Confusing with other classification years."
  },
  {
    id: 6,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> regarding the criteria used by R.H. Whittaker for Five Kingdom Classification?",
    options: [
      "Cell structure, body organisation, habitat, reproduction and phylogenetic relationships",
      "Cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships",
      "Cell structure, mode of nutrition, habitat, methods of reproduction and morphological characters",
      "Cell structure, body organisation, mode of nutrition, habitat and evolutionary relationships"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The main criteria for classification used by him include cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships.' These are exactly 5 criteria. Option A replaces 'mode of nutrition' with 'habitat' — this is the most common NTA trap. NCERT mentions habitat as a general characteristic but NOT as Whittaker's criterion. Option C and D also include 'habitat'. Common mistake: Adding 'habitat' to Whittaker's criteria."
  },
  {
    id: 7,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following are criteria used by R.H. Whittaker for the Five Kingdom Classification?<br>(i) Cell structure<br>(ii) Mode of nutrition<br>(iii) Habitat<br>(iv) Body organisation<br>(v) Phylogenetic relationships",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Whittaker's 5 criteria as per NCERT: cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships. From the given statements: (i) Cell structure ✅, (ii) Mode of nutrition ✅, (iii) Habitat ❌ — NOT a Whittaker criterion, (iv) Body organisation ✅, (v) Phylogenetic relationships ✅. So 4 out of 5 are correct. 'Habitat' is the trap — NCERT mentions it as a general characteristic needed for classification but NOT as one of Whittaker's specific criteria. Common mistake: Including habitat as Whittaker's criterion."
  },
  {
    id: 8,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following statements about the Two Kingdom Classification is <b>incorrect</b>?",
    options: [
      "It included all plants and animals under Plantae and Animalia respectively",
      "It grouped photosynthetic and non-photosynthetic organisms together",
      "A large number of organisms did not fall into either category",
      "It successfully distinguished prokaryotes from eukaryotes"
    ],
    correct: 3,
    explanation: "NCERT clearly states that the Two Kingdom system 'did not distinguish between the eukaryotes and prokaryotes'. Therefore, option D stating it 'successfully distinguished' is INCORRECT and hence the answer. Options A, B, and C are all directly supported by NCERT lines. Common mistake: Misreading 'incorrect' as 'correct' in the question stem — a classic NTA reading comprehension trap."
  },
  {
    id: 9,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Select the <b>correct</b> statement regarding the Five Kingdom Classification:",
    options: [
      "Fungi were placed under Kingdom Plantae due to the presence of cell wall",
      "Fungi were separated from plants because fungi have cellulosic cell wall",
      "Fungi were placed in a separate kingdom because they have chitin in their cell wall unlike cellulosic cell wall of green plants",
      "Fungi were placed under Kingdom Protista as they are heterotrophic"
    ],
    correct: 2,
    explanation: "NCERT Line: 'the fungi had chitin in their walls while the green plants had a cellulosic cell wall. When such characteristics were considered, the fungi were placed in a separate kingdom – Kingdom Fungi.' Option B is the most tempting wrong answer — it reverses the cell wall composition (says fungi have cellulose). Option A describes the old classification. Option D is factually wrong — fungi are NOT in Protista. Common mistake: Confusing chitin (fungi) with cellulose (plants)."
  },
  {
    id: 10,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements are <b>correct</b>?<br>(i) In the earlier classification, bacteria and blue-green algae were placed under 'Plants'<br>(ii) The character that unified the old Plant kingdom was presence of chlorophyll<br>(iii) Chlamydomonas and Spirogyra were placed together under algae in the older system<br>(iv) Fungi had chitin in their walls while green plants had a cellulosic cell wall",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT says 'Earlier classification systems included bacteria, blue green algae, fungi, mosses, ferns, gymnosperms and the angiosperms under Plants'. (ii) INCORRECT — NCERT says 'The character that unified this whole kingdom was that all the organisms included had a cell wall in their cells', NOT chlorophyll. This is the KEY trap. (iii) CORRECT — NCERT says 'Chlamydomonas and Spirogyra were placed together under algae'. (iv) CORRECT — NCERT directly states this. So 3 statements are correct. Common mistake: Assuming chlorophyll unified old Plant kingdom — it was CELL WALL."
  },
  {
    id: 11,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "The character that unified the entire Plant kingdom in earlier classification systems was:",
    options: [
      "Presence of chlorophyll in cells",
      "Presence of cell wall in cells",
      "Autotrophic mode of nutrition",
      "Multicellular body organisation"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The character that unified this whole kingdom was that all the organisms included had a cell wall in their cells.' This is a HIGH-YIELD trap question. Option A (chlorophyll) is the most tempting wrong answer — students assume plants = chlorophyll. But NCERT clearly says CELL WALL, because even fungi (no chlorophyll) were included in old Plant kingdom. Option C is wrong because fungi are heterotrophic. Option D is wrong because unicellular organisms were also included."
  },
  {
    id: 12,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "Except",
    q: "All of the following organisms were placed under 'Plants' in earlier classification systems <b>EXCEPT</b>:",
    options: [
      "Blue-green algae",
      "Fungi",
      "Amoeba",
      "Mosses"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Earlier classification systems included bacteria, blue green algae, fungi, mosses, ferns, gymnosperms and the angiosperms under Plants.' Amoeba was placed under the Animal Kingdom, not Plants. NCERT later states 'Paramoecium and Amoeba (which were earlier placed in the animal kingdom which lack cell wall)'. Common mistake: Confusing Amoeba with other protists that might have been placed under plants."
  },
  {
    id: 13,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about Kingdom Protista?",
    options: [
      "It includes all unicellular prokaryotic organisms",
      "It brought together Chlamydomonas and Chlorella with Paramoecium and Amoeba",
      "All members of Protista lack cell wall",
      "It includes only heterotrophic unicellular organisms"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Kingdom Protista has brought together Chlamydomonas, Chlorella (earlier placed in Algae within Plants and both having cell walls) with Paramoecium and Amoeba.' Option A is wrong — Protista includes EUKARYOTIC unicellular organisms, not prokaryotic (those are in Monera). Option C is wrong — Chlamydomonas and Chlorella HAVE cell walls. Option D is wrong — Chlamydomonas and Chlorella are autotrophic. Common mistake: Saying all Protista lack cell wall."
  },
  {
    id: 14,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> In Whittaker's classification, Chlamydomonas and Amoeba are placed in the same kingdom.<br><b>Reason (R):</b> Both Chlamydomonas and Amoeba are unicellular eukaryotic organisms.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT states Kingdom Protista brought together Chlamydomonas with Amoeba. Reason is TRUE — both are unicellular eukaryotes. R correctly EXPLAINS A because the basis of Protista is grouping all unicellular eukaryotic organisms. NCERT Line: 'the unicellular eukaryotic organisms were placed in Kingdom Protista.' The reason directly explains WHY they are in the same kingdom. Common mistake: Students choose option B thinking mode of nutrition difference means R doesn't explain A."
  },
  {
    id: 15,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Match",
    q: "Match the following kingdoms with their cell wall composition:<br><b>Column I</b> &emsp;&emsp;&emsp; <b>Column II</b><br>(a) Monera &emsp;&emsp;&emsp; (i) Absent<br>(b) Fungi &emsp;&emsp;&emsp;&emsp; (ii) Cellulose<br>(c) Plantae &emsp;&emsp;&emsp; (iii) Chitin<br>(d) Animalia &emsp;&emsp; (iv) Noncellulosic (Polysaccharide + amino acid)",
    options: [
      "a-iv, b-iii, c-ii, d-i",
      "a-ii, b-iii, c-iv, d-i",
      "a-iv, b-ii, c-iii, d-i",
      "a-iii, b-iv, c-ii, d-i"
    ],
    correct: 0,
    explanation: "From Table 2.1: Monera — Noncellulosic (Polysaccharide + amino acid) = (iv); Fungi — Present with chitin = (iii); Plantae — Present (cellulose) = (ii); Animalia — Absent = (i). So correct match: a-iv, b-iii, c-ii, d-i. Option C is the most tempting trap — it swaps Fungi (chitin) and Plantae (cellulose). Common mistake: Swapping chitin and cellulose between Fungi and Plantae."
  },
  {
    id: 16,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following kingdoms have cell wall present in <b>ALL</b> their members as per Whittaker's classification?<br>(i) Monera<br>(ii) Protista<br>(iii) Fungi<br>(iv) Plantae<br>(v) Animalia",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "From Table 2.1: Monera — cell wall present (Noncellulosic) ✅; Protista — cell wall 'Present in some' ❌ (NOT all); Fungi — cell wall present (chitin) ✅; Plantae — cell wall present (cellulose) ✅; Animalia — cell wall Absent ❌. So 3 kingdoms (Monera, Fungi, Plantae) have cell wall in ALL members. Key trap: Protista says 'present in SOME' — Chlamydomonas has cell wall but Amoeba does not. Common mistake: Including Protista as having cell wall in all members."
  },
  {
    id: 17,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Match",
    q: "Match the following kingdoms with their body organisation as per Table 2.1:<br><b>Column I</b> &emsp;&emsp;&emsp; <b>Column II</b><br>(a) Monera &emsp;&emsp;&emsp; (i) Tissue/organ<br>(b) Protista &emsp;&emsp;&emsp; (ii) Tissue/organ/organ system<br>(c) Plantae &emsp;&emsp;&emsp; (iii) Cellular<br>(d) Animalia &emsp;&emsp; (iv) Multicellular/loose tissue",
    options: [
      "a-iii, b-iii, c-ii, d-i",
      "a-iii, b-iii, c-i, d-ii",
      "a-iii, b-iv, c-i, d-ii",
      "a-iv, b-iii, c-i, d-ii"
    ],
    correct: 1,
    explanation: "From Table 2.1: Monera — Cellular (iii); Protista — Cellular (iii); Plantae — Tissue/organ (i); Animalia — Tissue/organ/organ system (ii). Note: Fungi = Multicellular/loose tissue (iv) but is NOT asked here. Option A swaps Plantae and Animalia — the most tempting trap. Common mistake: Confusing Plantae (tissue/organ) with Animalia (tissue/organ/organ system). Animalia has the ADDITIONAL 'organ system' level."
  },
  {
    id: 18,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Select the <b>incorrect</b> statement regarding Kingdom Monera:",
    options: [
      "It includes all prokaryotic organisms",
      "Cell wall is noncellulosic made of polysaccharide and amino acid",
      "Nuclear membrane is absent",
      "Mode of nutrition is exclusively autotrophic"
    ],
    correct: 3,
    explanation: "From Table 2.1: Monera nutrition = Autotrophic (chemosynthetic and photosynthetic) AND Heterotrophic (saprophytic/parasitic). So nutrition is NOT exclusively autotrophic — it includes BOTH autotrophic and heterotrophic modes. Options A, B, C are all correct as per Table 2.1. Common mistake: Forgetting that Monera includes heterotrophic bacteria along with autotrophic ones."
  },
  {
    id: 19,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements are <b>incorrect</b>?<br>(i) Monera has both autotrophic and heterotrophic nutrition<br>(ii) Protista shows only autotrophic mode of nutrition<br>(iii) Fungi are heterotrophic — saprophytic or parasitic<br>(iv) Animalia shows heterotrophic nutrition including holozoic mode<br>(v) Plantae shows autotrophic (photosynthetic) mode of nutrition",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 0,
    explanation: "Analysis: (i) CORRECT — Table 2.1 confirms Monera is autotrophic + heterotrophic. (ii) INCORRECT — Protista is autotrophic (photosynthetic) AND heterotrophic as per Table 2.1. (iii) CORRECT — Table 2.1 says Fungi: Heterotrophic (Saprophytic/Parasitic). (iv) CORRECT — Table 2.1 says Animalia: Heterotrophic (Holozoic/Saprophytic etc.). (v) CORRECT — Table 2.1 says Plantae: Autotrophic (Photosynthetic). Only statement (ii) is incorrect. Common mistake: Missing that Protista also has heterotrophic members (like Amoeba, Paramoecium)."
  },
  {
    id: 20,
    topic: "Biological Classification - Introduction",
    difficulty: "Easy",
    type: "Direct",
    q: "The cell wall of fungi is composed of:",
    options: [
      "Cellulose",
      "Chitin",
      "Polysaccharide and amino acid",
      "Peptidoglycan"
    ],
    correct: 1,
    explanation: "NCERT Line: 'the fungi had chitin in their walls'. Table 2.1 also confirms: Fungi cell wall = Present with chitin. Option A (cellulose) is for Plantae. Option C (polysaccharide + amino acid) is for Monera. Option D (peptidoglycan) is a common trap from bacterial cell wall knowledge but not the NCERT term used here. Common mistake: Confusing chitin with cellulose."
  },
  {
    id: 21,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Except",
    q: "Which of the following is <b>NOT</b> one of the five kingdoms proposed by R.H. Whittaker?",
    options: [
      "Monera",
      "Protista",
      "Chromista",
      "Fungi"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The kingdoms defined by him were named Monera, Protista, Fungi, Plantae and Animalia.' Chromista is NOT one of Whittaker's five kingdoms — it is used in some other classification systems. All other options (Monera, Protista, Fungi) are genuine Whittaker kingdoms. Common mistake: Confusing classification systems."
  },
  {
    id: 22,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> In the earlier classification, fungi were placed under the Plant kingdom.<br><b>Reason (R):</b> Fungi have chitin in their cell wall similar to green plants.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "Assertion is TRUE — NCERT says fungi were earlier included under 'Plants'. Reason is FALSE — NCERT clearly states 'fungi had chitin in their walls while the green plants had a cellulosic cell wall' — they are DIFFERENT, not similar. Fungi were placed in the old Plant kingdom because they had cell walls (the unifying character), NOT because of chitin similarity. The reason contains a factual error. Common mistake: Not reading the reason carefully — chitin ≠ cellulose."
  },
  {
    id: 23,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following pairs of organisms were placed in the Animal kingdom in earlier classification but are now placed in Kingdom Protista?",
    options: [
      "Chlamydomonas and Chlorella",
      "Paramoecium and Amoeba",
      "Spirogyra and Chlamydomonas",
      "Chlorella and Paramoecium"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Paramoecium and Amoeba (which were earlier placed in the animal kingdom which lack cell wall)'. Chlamydomonas and Chlorella were earlier placed in Algae within PLANTS (not animals). Option D mixes one from each. Common mistake: Confusing which organisms came from old Plant kingdom vs old Animal kingdom into Protista."
  },
  {
    id: 24,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Except",
    q: "In the Three-domain system, all of the following are true <b>EXCEPT</b>:",
    options: [
      "It divides Kingdom Monera into two domains",
      "The remaining eukaryotic kingdoms are placed in the third domain",
      "It results in a six kingdom classification",
      "It divides Kingdom Protista into two domains"
    ],
    correct: 3,
    explanation: "NCERT Line: 'The three-domain system has also been proposed that divides the Kingdom Monera into two domains, leaving the remaining eukaryotic kingdoms in the third domain and thereby a six kingdom classification.' It is MONERA that is divided into two domains, NOT Protista. Option D is the incorrect statement. Common mistake: Confusing which kingdom is split in the three-domain system."
  },
  {
    id: 25,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following kingdoms have <b>nuclear membrane present</b> in their cells?<br>(i) Monera<br>(ii) Protista<br>(iii) Fungi<br>(iv) Plantae<br>(v) Animalia",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "From Table 2.1: Monera — Nuclear membrane ABSENT ❌; Protista — Present ✅; Fungi — Present ✅; Plantae — Present ✅; Animalia — Present ✅. So 4 kingdoms have nuclear membrane present. Only Monera (prokaryotic) lacks nuclear membrane. Common mistake: Including Monera, forgetting it is prokaryotic."
  },
  {
    id: 26,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following statements is <b>correct</b>?",
    options: [
      "The cell wall of Monera is made of cellulose",
      "All members of Kingdom Protista possess cell wall",
      "The body organisation of Fungi is described as multicellular with loose tissue",
      "Animalia shows tissue/organ level of body organisation"
    ],
    correct: 2,
    explanation: "From Table 2.1: Fungi body organisation = Multicellular/loose tissue ✅. Option A is wrong — Monera cell wall = Noncellulosic (polysaccharide + amino acid), NOT cellulose. Option B is wrong — Protista cell wall is 'Present in SOME', not all. Option D is wrong — Animalia = Tissue/organ/ORGAN SYSTEM (not just tissue/organ — that's Plantae). Common mistake: Confusing Plantae (tissue/organ) with Animalia (tissue/organ/organ system)."
  },
  {
    id: 27,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements are <b>correct</b> regarding the earlier (Two Kingdom) classification?<br>(i) Bacteria and cyanobacteria were placed under Plants<br>(ii) The unifying character of old Plant kingdom was presence of chlorophyll<br>(iii) Chlamydomonas and Spirogyra were placed together under algae<br>(iv) Fungi were placed under Animal kingdom<br>(v) The system was proposed during Whittaker's time",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 1,
    explanation: "Analysis: (i) CORRECT — NCERT says bacteria and blue green algae (cyanobacteria) were under Plants. (ii) INCORRECT — The unifying character was CELL WALL, not chlorophyll. (iii) CORRECT — NCERT explicitly states this. (iv) INCORRECT — Fungi were placed under PLANTS (had cell wall), not Animals. (v) INCORRECT — Two Kingdom system was in LINNAEUS' time, not Whittaker's. So only 2 statements (i and iii) are correct. Common mistakes: (a) Chlorophyll vs cell wall confusion, (b) Fungi placement in old system."
  },
  {
    id: 28,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following were included under 'Plants' in earlier classification <b>EXCEPT</b>:",
    options: [
      "Gymnosperms",
      "Ferns",
      "Paramoecium",
      "Blue-green algae"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Earlier classification systems included bacteria, blue green algae, fungi, mosses, ferns, gymnosperms and the angiosperms under Plants.' Paramoecium was placed in the Animal kingdom (it lacks cell wall). NCERT states: 'Paramoecium and Amoeba (which were earlier placed in the animal kingdom which lack cell wall)'. Common mistake: Assuming all microorganisms were under Plants."
  },
  {
    id: 29,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "The mode of nutrition in Kingdom Animalia as per Whittaker's classification includes:",
    options: [
      "Only holozoic",
      "Heterotrophic — holozoic and saprophytic",
      "Autotrophic and heterotrophic",
      "Only saprophytic"
    ],
    correct: 1,
    explanation: "From Table 2.1: Animalia Mode of nutrition = Heterotrophic (Holozoic/Saprophytic etc.). Option A says 'only holozoic' which is incomplete — Table 2.1 also mentions saprophytic. Option C is wrong — Animalia is NOT autotrophic. Option D is wrong — it's not only saprophytic. Common mistake: Selecting 'only holozoic' and ignoring the saprophytic component mentioned in NCERT Table 2.1."
  },
  {
    id: 30,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Kingdom Protista includes organisms that were earlier placed in both Plant and Animal kingdoms.<br><b>Reason (R):</b> The criteria for classification changed from cell wall to cell structure and mode of nutrition in the five kingdom system.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT says Protista brought together Chlamydomonas, Chlorella (from old Plant kingdom) with Paramoecium and Amoeba (from old Animal kingdom). Reason is TRUE — NCERT says 'This happened because the criteria for classification changed' and Whittaker used cell structure, body organisation, mode of nutrition, etc. R correctly EXPLAINS A because the CHANGE in criteria is the reason organisms from different old kingdoms came together in Protista. Common mistake: Choosing B — but R does explain WHY the regrouping happened."
  },
  {
    id: 31,
    topic: "Biological Classification - Introduction",
    difficulty: "Easy",
    type: "Direct",
    q: "Blue-green algae are also known as:",
    options: [
      "Chlorella",
      "Cyanobacteria",
      "Chlamydomonas",
      "Chrysophytes"
    ],
    correct: 1,
    explanation: "NCERT Line: 'the prokaryotic bacteria and the blue green algae (cyanobacteria)'. The term in parentheses clearly shows blue-green algae = cyanobacteria. Option A (Chlorella) is a green alga in Protista. Option C (Chlamydomonas) is also a green alga. Option D (Chrysophytes) are golden algae. Common mistake: Confusing blue-green algae with green algae."
  },
  {
    id: 32,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about the cell type and nuclear membrane in Kingdom Monera?",
    options: [
      "Eukaryotic cell type with nuclear membrane present",
      "Prokaryotic cell type with nuclear membrane present",
      "Prokaryotic cell type with nuclear membrane absent",
      "Eukaryotic cell type with nuclear membrane absent"
    ],
    correct: 2,
    explanation: "From Table 2.1: Monera — Cell type: Prokaryotic; Nuclear membrane: Absent. This is a fundamental concept. Option B is the most tempting trap — it correctly says prokaryotic but incorrectly says nuclear membrane is present. By definition, prokaryotic cells lack nuclear membrane. Common mistake: Not understanding the direct link between prokaryotic nature and absence of nuclear membrane."
  },
  {
    id: 33,
    topic: "Biological Classification - Introduction",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following characteristics were felt to be necessary for classification beyond gross morphology, as mentioned in NCERT?<br>(i) Cell structure<br>(ii) Nature of wall<br>(iii) Mode of nutrition<br>(iv) Habitat<br>(v) Methods of reproduction<br>(vi) Evolutionary relationships",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 3,
    explanation: "NCERT Line: 'a need was also felt for including other characteristics like cell structure, nature of wall, mode of nutrition, habitat, methods of reproduction, evolutionary relationships, etc.' ALL SIX are mentioned by NCERT as characteristics felt necessary. Note: This is different from Whittaker's 5 specific criteria. Here NCERT lists general characteristics needed — and habitat IS included in this general list (though NOT in Whittaker's specific criteria). Common mistake: Confusing this general list with Whittaker's specific 5 criteria."
  },
  {
    id: 34,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following pairs were earlier placed under Algae within Plants and both had cell walls?",
    options: [
      "Paramoecium and Amoeba",
      "Chlamydomonas and Chlorella",
      "Amoeba and Chlamydomonas",
      "Spirogyra and Paramoecium"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Chlamydomonas, Chlorella (earlier placed in Algae within Plants and both having cell walls)'. Option A is wrong — Paramoecium and Amoeba were in the ANIMAL kingdom. Options C and D mix organisms from different old kingdoms. Common mistake: Mixing up which organisms had cell walls and which lacked them."
  },
  {
    id: 35,
    topic: "Biological Classification - Introduction",
    difficulty: "Easy",
    type: "Direct",
    q: "The three-domain system of classification results in how many kingdoms?",
    options: [
      "Three",
      "Five",
      "Six",
      "Seven"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The three-domain system has also been proposed that divides the Kingdom Monera into two domains, leaving the remaining eukaryotic kingdoms in the third domain and thereby a six kingdom classification.' Answer is 6. Option A (three) confuses domains with kingdoms. Option B (five) is Whittaker's system. Common mistake: Confusing number of domains (3) with number of kingdoms (6)."
  },
  {
    id: 36,
    topic: "Biological Classification - Introduction",
    difficulty: "Medium",
    type: "Statement",
    q: "An ideal classification system, as mentioned in NCERT, should reflect not only morphological, physiological and reproductive similarities but should also be:",
    options: [
      "Ecological, i.e., based on habitat",
      "Phylogenetic, i.e., based on evolutionary relationships",
      "Anatomical, i.e., based on internal structure",
      "Biochemical, i.e., based on chemical composition"
    ],
    correct: 1,
    explanation: "NCERT Line: 'an attempt has been made to evolve a classification system which reflects not only the morphological, physiological and reproductive similarities, but is also phylogenetic, i.e., is based on evolutionary relationships.' The word 'phylogenetic' and its definition are directly from NCERT. Common mistake: Choosing 'ecological' because habitat was mentioned earlier in a different context."
  },
  {
    id: 37,
    topic: "Kingdom Monera",
    difficulty: "Easy",
    type: "Direct",
    q: "Bacteria are the sole members of which kingdom in Whittaker's classification?",
    options: [
      "Protista",
      "Monera",
      "Fungi",
      "Plantae"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Bacteria are the sole members of the Kingdom Monera.' This is a direct recall question. Option A (Protista) is the common trap — students confuse unicellular organisms between Monera and Protista. Key distinction: Monera = prokaryotic, Protista = eukaryotic unicellular. Common mistake: Placing bacteria in Protista."
  },
  {
    id: 38,
    topic: "Kingdom Monera",
    difficulty: "Easy",
    type: "Direct",
    q: "Bacteria as a group show the most extensive:",
    options: [
      "Morphological diversity",
      "Reproductive diversity",
      "Metabolic diversity",
      "Structural diversity"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Compared to many other organisms, bacteria as a group show the most extensive metabolic diversity.' This is a HIGH-YIELD direct NCERT phrase. Option A (morphological diversity) is the most tempting wrong answer because NCERT also discusses bacterial shapes. But the exact phrase is 'metabolic diversity'. Common mistake: Choosing morphological diversity."
  },
  {
    id: 39,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following statements about bacterial shapes is <b>incorrect</b>?",
    options: [
      "Coccus is spherical in shape",
      "Bacillus is rod-shaped",
      "Vibrium is spiral in shape",
      "Spirillum is spiral in shape"
    ],
    correct: 2,
    explanation: "NCERT Line: 'the comma-shaped Vibrium (pl.: vibrio) and the spiral Spirillum.' Vibrium is COMMA-shaped, NOT spiral. Spiral is Spirillum. Option C incorrectly states Vibrium is spiral — this is the classic NTA trap of swapping Vibrium (comma) with Spirillum (spiral). Common mistake: Confusing comma-shaped Vibrium with spiral Spirillum."
  },
  {
    id: 40,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Match",
    q: "Match the bacterial shape with its correct name:<br><b>Column I (Shape)</b> &emsp; <b>Column II (Name)</b><br>(a) Spherical &emsp;&emsp;&emsp; (i) Spirillum<br>(b) Rod-shaped &emsp;&emsp; (ii) Vibrium<br>(c) Comma-shaped &emsp; (iii) Coccus<br>(d) Spiral &emsp;&emsp;&emsp;&emsp; (iv) Bacillus",
    options: [
      "a-iii, b-iv, c-ii, d-i",
      "a-iii, b-iv, c-i, d-ii",
      "a-iv, b-iii, c-ii, d-i",
      "a-iii, b-ii, c-iv, d-i"
    ],
    correct: 0,
    explanation: "From NCERT: Spherical = Coccus (iii), Rod-shaped = Bacillus (iv), Comma-shaped = Vibrium (ii), Spiral = Spirillum (i). So a-iii, b-iv, c-ii, d-i. Option B is the closest trap — it swaps Vibrium and Spirillum (comma vs spiral). Common mistake: Swapping Vibrium (comma) and Spirillum (spiral)."
  },
  {
    id: 41,
    topic: "Kingdom Monera",
    difficulty: "Easy",
    type: "Direct",
    q: "The vast majority of bacteria are:",
    options: [
      "Photosynthetic autotrophs",
      "Chemosynthetic autotrophs",
      "Heterotrophs",
      "Parasites"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The vast majority of bacteria are heterotrophs, i.e., they depend on other organisms or on dead organic matter for food.' Option D (parasites) is a subset of heterotrophs, not the majority. Option A and B are types of autotrophy — only SOME bacteria are autotrophic. Common mistake: Confusing 'parasites' (a type of heterotroph) with 'heterotrophs' (the broad category NCERT uses)."
  },
  {
    id: 42,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about Archaebacteria?",
    options: [
      "They have the same cell wall structure as other bacteria",
      "They differ from other bacteria in having a different cell wall structure",
      "They completely lack a cell wall",
      "They have a cellulosic cell wall"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Archaebacteria differ from other bacteria in having a different cell wall structure and this feature is responsible for their survival in extreme conditions.' Option A directly contradicts NCERT. Option C describes Mycoplasma, NOT Archaebacteria. Option D is for Plantae. Common mistake: Confusing Archaebacteria (different cell wall) with Mycoplasma (no cell wall)."
  },
  {
    id: 43,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Match",
    q: "Match the types of Archaebacteria with their habitats:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Halophiles &emsp;&emsp;&emsp; (i) Marshy areas<br>(b) Thermoacidophiles &emsp; (ii) Extreme salty areas<br>(c) Methanogens &emsp;&emsp; (iii) Hot springs",
    options: [
      "a-ii, b-iii, c-i",
      "a-iii, b-ii, c-i",
      "a-ii, b-i, c-iii",
      "a-i, b-iii, c-ii"
    ],
    correct: 0,
    explanation: "NCERT Line: 'extreme salty areas (halophiles), hot springs (thermoacidophiles) and marshy areas (methanogens).' Halophiles = extreme salty areas (ii), Thermoacidophiles = hot springs (iii), Methanogens = marshy areas (i). Option B swaps halophiles and thermoacidophiles — the most common NTA trap. Common mistake: Mixing up halophiles (salt) with thermoacidophiles (hot springs)."
  },
  {
    id: 44,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about Archaebacteria are <b>correct</b>?<br>(i) Halophiles live in extreme salty areas<br>(ii) Thermoacidophiles live in marshy areas<br>(iii) Methanogens are present in the gut of ruminant animals<br>(iv) Methanogens are responsible for production of methane from dung<br>(v) Their different cell wall structure helps them survive in extreme conditions",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'extreme salty areas (halophiles)'. (ii) INCORRECT — Thermoacidophiles live in HOT SPRINGS, not marshy areas. Marshy areas = methanogens. (iii) CORRECT — NCERT: 'Methanogens are present in the gut of several ruminant animals such as cows and buffaloes'. (iv) CORRECT — NCERT: 'responsible for the production of methane (biogas) from the dung of these animals'. (v) CORRECT — NCERT: 'this feature is responsible for their survival in extreme conditions'. So 4 statements are correct. Common mistake: Confusing thermoacidophiles habitat with methanogens habitat."
  },
  {
    id: 45,
    topic: "Kingdom Monera",
    difficulty: "Easy",
    type: "Direct",
    q: "Methanogens are present in the gut of:",
    options: [
      "Humans",
      "Several ruminant animals such as cows and buffaloes",
      "All herbivorous animals",
      "Carnivorous animals only"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Methanogens are present in the gut of several ruminant animals such as cows and buffaloes.' The exact NCERT phrasing specifies RUMINANT animals and gives examples of cows and buffaloes. Option C generalises to 'all herbivorous animals' which is broader than NCERT states. Common mistake: Generalising to all herbivores instead of specifically ruminant animals."
  },
  {
    id: 46,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about Eubacteria?",
    options: [
      "All eubacteria are motile and possess flagella",
      "They are characterised by the presence of a rigid cell wall, and if motile, a flagellum",
      "They completely lack cell wall",
      "They are characterised by the presence of a flexible cell wall"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They are characterised by the presence of a rigid cell wall, and if motile, a flagellum.' Option A is the most tempting trap — it says ALL eubacteria are motile, but NCERT says 'IF motile' implying NOT all are motile. Option C describes Mycoplasma. Option D says 'flexible' but NCERT says 'rigid'. Common mistake: Missing the 'if motile' qualifier — not all eubacteria have flagella."
  },
  {
    id: 47,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Cyanobacteria have which type of chlorophyll similar to green plants?",
    options: [
      "Chlorophyll b",
      "Chlorophyll c",
      "Chlorophyll a",
      "Chlorophyll d"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The cyanobacteria (also referred to as blue-green algae) have chlorophyll a similar to green plants and are photosynthetic autotrophs.' It is specifically chlorophyll 'a', NOT b, c, or d. Option A (chlorophyll b) is the most common trap because students associate green plants with chlorophyll b. But NCERT specifies chlorophyll a for cyanobacteria. Common mistake: Choosing chlorophyll b instead of a."
  },
  {
    id: 48,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Except",
    q: "Cyanobacteria can be all of the following <b>EXCEPT</b>:",
    options: [
      "Unicellular",
      "Colonial",
      "Multicellular with tissue-level organisation",
      "Filamentous"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The cyanobacteria are unicellular, colonial or filamentous.' NCERT mentions three forms: unicellular, colonial, filamentous. 'Multicellular with tissue-level organisation' is NOT mentioned — cyanobacteria are prokaryotic and cannot have tissue-level organisation. Options A, B, D are directly from NCERT. Common mistake: Confusing 'filamentous' with 'multicellular tissue-level'."
  },
  {
    id: 49,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about cyanobacteria are <b>correct</b>?<br>(i) They have chlorophyll b similar to green plants<br>(ii) They are photosynthetic autotrophs<br>(iii) Their colonies are generally surrounded by gelatinous sheath<br>(iv) They often form blooms in polluted water bodies<br>(v) Some can fix atmospheric nitrogen in heterocysts",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) INCORRECT — Cyanobacteria have chlorophyll 'a' NOT 'b'. This is the KEY trap. (ii) CORRECT — NCERT: 'are photosynthetic autotrophs'. (iii) CORRECT — NCERT: 'colonies are generally surrounded by gelatinous sheath'. (iv) CORRECT — NCERT: 'They often form blooms in polluted water bodies'. (v) CORRECT — NCERT: 'fix atmospheric nitrogen in specialised cells called heterocysts'. So 4 statements are correct. Common mistake: Not catching the chlorophyll a → b switch."
  },
  {
    id: 50,
    topic: "Kingdom Monera",
    difficulty: "Easy",
    type: "Direct",
    q: "The specialised cells in cyanobacteria for nitrogen fixation are called:",
    options: [
      "Akinetes",
      "Hormogonia",
      "Heterocysts",
      "Cysts"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Some of these organisms can fix atmospheric nitrogen in specialised cells called heterocysts, e.g., Nostoc and Anabaena.' The answer is heterocysts. Option A (akinetes) are resting spores — not from NCERT. Option B (hormogonia) are motile filaments — not from NCERT. Common mistake: Confusing heterocysts with other specialised structures."
  },
  {
    id: 51,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Select the <b>correct</b> pair of examples of cyanobacteria that fix atmospheric nitrogen:",
    options: [
      "Nostoc and Anabaena",
      "Nostoc and Spirogyra",
      "Anabaena and Chlamydomonas",
      "Chlorella and Nostoc"
    ],
    correct: 0,
    explanation: "NCERT Line: 'fix atmospheric nitrogen in specialised cells called heterocysts, e.g., Nostoc and Anabaena.' Option B includes Spirogyra — a green alga, not a cyanobacterium. Option C includes Chlamydomonas — a green alga. Option D includes Chlorella — a green alga. Common mistake: Confusing cyanobacteria (Nostoc, Anabaena) with green algae (Spirogyra, Chlamydomonas, Chlorella)."
  },
  {
    id: 52,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "Statement",
    q: "Chemosynthetic autotrophic bacteria oxidise various inorganic substances. Which of the following is <b>NOT</b> mentioned in NCERT as a substance oxidised by them?",
    options: [
      "Nitrates",
      "Ammonia",
      "Glucose",
      "Nitrites"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Chemosynthetic autotrophic bacteria oxidise various inorganic substances such as nitrates, nitrites and ammonia.' Glucose is an ORGANIC substance and is not mentioned. Chemosynthetic bacteria oxidise INORGANIC substances. Options A, B, D are all directly mentioned in NCERT. Common mistake: Not differentiating organic from inorganic substrates."
  },
  {
    id: 53,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Except",
    q: "Chemosynthetic autotrophic bacteria play a great role in recycling all of the following nutrients <b>EXCEPT</b>:",
    options: [
      "Nitrogen",
      "Phosphorous",
      "Carbon",
      "Sulphur"
    ],
    correct: 2,
    explanation: "NCERT Line: 'They play a great role in recycling nutrients like nitrogen, phosphorous, iron and sulphur.' The four nutrients mentioned are: nitrogen, phosphorous, iron and sulphur. CARBON is NOT mentioned in this list. Common mistake: Assuming carbon is recycled by chemosynthetic bacteria. Note: NCERT mentions iron but not carbon."
  },
  {
    id: 54,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following nutrients are recycled by chemosynthetic autotrophic bacteria as mentioned in NCERT?<br>(i) Nitrogen<br>(ii) Phosphorous<br>(iii) Iron<br>(iv) Sulphur<br>(v) Carbon",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "NCERT Line: 'They play a great role in recycling nutrients like nitrogen, phosphorous, iron and sulphur.' So (i) Nitrogen ✅, (ii) Phosphorous ✅, (iii) Iron ✅, (iv) Sulphur ✅, (v) Carbon ❌ — NOT mentioned. 4 out of 5 are correct. Common mistake: Including carbon, which is not in the NCERT list."
  },
  {
    id: 55,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Except",
    q: "Heterotrophic bacteria are helpful in all of the following <b>EXCEPT</b>:",
    options: [
      "Making curd from milk",
      "Production of antibiotics",
      "Fixing nitrogen in legume roots",
      "Production of methane from dung"
    ],
    correct: 3,
    explanation: "NCERT Line: 'They are helpful in making curd from milk, production of antibiotics, fixing nitrogen in legume roots, etc.' These three are attributed to HETEROTROPHIC bacteria. Option D (production of methane from dung) is done by METHANOGENS (Archaebacteria), not heterotrophic bacteria. Common mistake: Attributing methane production to heterotrophic bacteria instead of methanogens."
  },
  {
    id: 56,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is a disease caused by bacteria as mentioned in NCERT?",
    options: [
      "Malaria",
      "AIDS",
      "Citrus canker",
      "Influenza"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Cholera, typhoid, tetanus, citrus canker are well known diseases caused by different bacteria.' Citrus canker is a bacterial disease. Malaria is caused by Plasmodium (protist), AIDS by HIV (virus), Influenza by influenza virus. Common mistake: Students often think citrus canker is a fungal disease."
  },
  {
    id: 57,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following diseases are caused by bacteria as per NCERT?<br>(i) Cholera<br>(ii) Typhoid<br>(iii) Malaria<br>(iv) Tetanus<br>(v) Citrus canker",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Cholera, typhoid, tetanus, citrus canker are well known diseases caused by different bacteria.' So (i) Cholera ✅, (ii) Typhoid ✅, (iii) Malaria ❌ — caused by Plasmodium (protist), (iv) Tetanus ✅, (v) Citrus canker ✅. 4 out of 5 are bacterial diseases. Common mistake: Including malaria as a bacterial disease."
  },
  {
    id: 58,
    topic: "Kingdom Monera",
    difficulty: "Easy",
    type: "Direct",
    q: "Bacteria reproduce mainly by:",
    options: [
      "Budding",
      "Fragmentation",
      "Fission",
      "Sporulation"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Bacteria reproduce mainly by fission.' This is direct recall. Option D (sporulation) occurs only under unfavourable conditions and is NOT the main mode. Options A and B are reproduction methods of other organisms. Common mistake: Choosing sporulation, forgetting that spores are formed only under unfavourable conditions."
  },
  {
    id: 59,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following statements about bacterial reproduction is <b>incorrect</b>?",
    options: [
      "Bacteria reproduce mainly by fission",
      "Under unfavourable conditions, they produce spores",
      "They reproduce by sexual reproduction involving fusion of gametes",
      "They show a sort of sexual reproduction by primitive type of DNA transfer"
    ],
    correct: 2,
    explanation: "NCERT Line: 'They also reproduce by a sort of sexual reproduction by adopting a primitive type of DNA transfer from one bacterium to the other.' NCERT says 'a SORT of sexual reproduction' involving 'primitive DNA transfer' — NOT true sexual reproduction with gamete fusion. Option C incorrectly states 'fusion of gametes' which does not occur in bacteria. Common mistake: Equating primitive DNA transfer with true sexual reproduction involving gamete fusion."
  },
  {
    id: 60,
    topic: "Kingdom Monera",
    difficulty: "Easy",
    type: "Direct",
    q: "The smallest living cells known are:",
    options: [
      "Bacteria",
      "Mycoplasma",
      "Viruses",
      "Cyanobacteria"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They are the smallest living cells known.' 'They' refers to Mycoplasma. Option C (viruses) is the most tempting trap — viruses are smaller but are NOT considered 'living cells'. NCERT specifically says 'smallest living CELLS'. Option A (bacteria) are larger than mycoplasma. Common mistake: Choosing viruses, forgetting they are not 'living cells'."
  },
  {
    id: 61,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about Mycoplasma are <b>correct</b>?<br>(i) They completely lack a cell wall<br>(ii) They are the smallest living cells known<br>(iii) They can survive without oxygen<br>(iv) They are pathogenic only in animals<br>(v) They belong to Kingdom Monera",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'completely lack a cell wall'. (ii) CORRECT — NCERT: 'smallest living cells known'. (iii) CORRECT — NCERT: 'can survive without oxygen'. (iv) INCORRECT — NCERT says 'pathogenic in animals AND plants', not only animals. (v) CORRECT — Mycoplasma are bacteria, hence Kingdom Monera. So 4 statements are correct. Common mistake: Missing the 'and plants' part — Mycoplasma affect both animals and plants."
  },
  {
    id: 62,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Select the <b>incorrect</b> statement about Mycoplasma:",
    options: [
      "They completely lack a cell wall",
      "They are the smallest living cells known",
      "They cannot survive without oxygen",
      "Many mycoplasma are pathogenic in animals and plants"
    ],
    correct: 2,
    explanation: "NCERT Line: 'can survive without oxygen.' Option C states 'cannot survive without oxygen' — this directly contradicts NCERT. Mycoplasma CAN survive without oxygen (they are anaerobic). All other options are correct NCERT statements. Common mistake: Confusing aerobic vs anaerobic nature of Mycoplasma."
  },
  {
    id: 63,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Archaebacteria can survive in extreme environmental conditions.<br><b>Reason (R):</b> Archaebacteria have a different cell wall structure compared to other bacteria.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "NCERT Line: 'Archaebacteria differ from other bacteria in having a different cell wall structure and this feature is responsible for their survival in extreme conditions.' Both A and R are true, and NCERT explicitly states that the different cell wall structure IS RESPONSIBLE for their survival. So R correctly explains A. Common mistake: Choosing B — but NCERT directly establishes a causal link between cell wall structure and survival."
  },
  {
    id: 64,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following statements is <b>correct</b>?",
    options: [
      "Heterotrophic bacteria are the least abundant in nature",
      "The majority of heterotrophic bacteria are important pathogens",
      "Heterotrophic bacteria are the most abundant in nature and the majority are important decomposers",
      "Autotrophic bacteria are the most abundant in nature"
    ],
    correct: 2,
    explanation: "NCERT Lines: 'Heterotrophic bacteria are most abundant in nature. The majority are important decomposers.' Option A is directly opposite. Option B says 'majority are pathogens' but NCERT says 'majority are decomposers'. Option D says 'autotrophic most abundant' but NCERT says 'heterotrophic most abundant'. Common mistake: Confusing decomposers with pathogens — NCERT says majority are DECOMPOSERS, not pathogens."
  },
  {
    id: 65,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Cyanobacteria are classified as photosynthetic autotrophs.<br><b>Reason (R):</b> Cyanobacteria possess chlorophyll b similar to green plants.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "Assertion is TRUE — NCERT: 'cyanobacteria...are photosynthetic autotrophs.' Reason is FALSE — NCERT says cyanobacteria have 'chlorophyll a' NOT 'chlorophyll b'. The reason contains a one-word change trap (a → b). Common mistake: Not catching the chlorophyll a vs b switch. This is a classic NTA one-word-change trap."
  },
  {
    id: 66,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Bacteria produce spores under:",
    options: [
      "Favourable conditions for rapid multiplication",
      "Unfavourable conditions",
      "Both favourable and unfavourable conditions equally",
      "Moist and warm conditions only"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Sometimes, under unfavourable conditions, they produce spores.' Spore formation is specifically linked to UNFAVOURABLE conditions — it is a survival mechanism. Option A is the most tempting trap. Common mistake: Confusing spore formation (unfavourable) with normal reproduction by fission (favourable)."
  },
  {
    id: 67,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are extreme habitats where bacteria can survive <b>EXCEPT</b>:",
    options: [
      "Hot springs",
      "Deep oceans",
      "Stratosphere",
      "Deserts"
    ],
    correct: 2,
    explanation: "NCERT Line: 'They also live in extreme habitats such as hot springs, deserts, snow and deep oceans.' Stratosphere is NOT mentioned in NCERT as an extreme habitat for bacteria. Options A, B, D are directly from NCERT text. Common mistake: Assuming all extreme environments are mentioned in NCERT."
  },
  {
    id: 68,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements are <b>correct</b>?<br>(i) Bacteria are the most abundant micro-organisms<br>(ii) Cyanobacteria form blooms in clean freshwater bodies<br>(iii) Eubacteria are characterised by a rigid cell wall<br>(iv) Mycoplasma completely lack a cell wall<br>(v) Archaebacteria have the same cell wall structure as eubacteria",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'They are the most abundant micro-organisms'. (ii) INCORRECT — NCERT says 'form blooms in POLLUTED water bodies', not clean. One-word trap! (iii) CORRECT — NCERT: 'characterised by the presence of a rigid cell wall'. (iv) CORRECT — NCERT: 'completely lack a cell wall'. (v) INCORRECT — NCERT: 'Archaebacteria differ from other bacteria in having a DIFFERENT cell wall structure'. So 3 statements are correct. Common mistake: Missing 'polluted' vs 'clean' swap."
  },
  {
    id: 69,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Cyanobacteria often form blooms in:",
    options: [
      "Clean freshwater bodies",
      "Polluted water bodies",
      "Marine water only",
      "Terrestrial habitats only"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They often form blooms in polluted water bodies.' The key word is POLLUTED. Option A says 'clean' — a direct one-word-change trap. Options C and D are too restrictive. Common mistake: Choosing 'clean freshwater' instead of 'polluted water bodies'."
  },
  {
    id: 70,
    topic: "Kingdom Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about autotrophic bacteria?",
    options: [
      "They synthesise their own food from organic substrates",
      "They synthesise their own food from inorganic substrates",
      "They depend on other organisms for food",
      "They depend on dead organic matter for food"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Some of the bacteria are autotrophic, i.e., they synthesise their own food from inorganic substrates.' Option A changes 'inorganic' to 'organic' — a classic one-word NTA trap. Options C and D describe heterotrophic bacteria. Common mistake: Not differentiating inorganic substrates (autotrophs) from organic substrates."
  },
  {
    id: 71,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following are bacterial diseases as per NCERT?<br>(i) Cholera<br>(ii) Typhoid<br>(iii) Tetanus<br>(iv) Citrus canker<br>(v) Ringworm",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Cholera, typhoid, tetanus, citrus canker are well known diseases caused by different bacteria.' So (i) Cholera ✅, (ii) Typhoid ✅, (iii) Tetanus ✅, (iv) Citrus canker ✅, (v) Ringworm ❌ — Ringworm is a FUNGAL disease, not bacterial. 4 out of 5 are bacterial diseases. Common mistake: Including ringworm as a bacterial disease."
  },
  {
    id: 72,
    topic: "Kingdom Monera",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements:<br>(A) Chemosynthetic autotrophic bacteria oxidise organic substances for ATP production.<br>(B) Heterotrophic bacteria are most abundant in nature and majority are important decomposers.<br>(C) Mycoplasma are the smallest living cells and can survive without oxygen.<br>(D) Cyanobacteria have chlorophyll a and some fix nitrogen in heterocysts.<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B and C only",
      "B, C and D only",
      "A, C and D only",
      "A, B and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) INCORRECT — NCERT says chemosynthetic bacteria oxidise INORGANIC substances, not organic. 'Inorganic → organic' is a one-word trap. (B) CORRECT — NCERT: 'Heterotrophic bacteria are most abundant in nature. The majority are important decomposers.' (C) CORRECT — NCERT: 'smallest living cells known and can survive without oxygen.' (D) CORRECT — NCERT: 'chlorophyll a' and 'fix atmospheric nitrogen in heterocysts'. So B, C and D are correct. Common mistake: Not catching the organic vs inorganic trap in statement A."
  },
  {
    id: 73,
    topic: "Kingdom Protista",
    difficulty: "Easy",
    type: "Direct",
    q: "All single-celled eukaryotes are placed under:",
    options: [
      "Kingdom Monera",
      "Kingdom Fungi",
      "Kingdom Protista",
      "Kingdom Plantae"
    ],
    correct: 2,
    explanation: "NCERT Line: 'All single-celled eukaryotes are placed under Protista.' Option A (Monera) includes prokaryotes, not eukaryotes. Key distinction: Monera = prokaryotic unicellular; Protista = eukaryotic unicellular. Common mistake: Confusing Monera (prokaryotic) with Protista (eukaryotic)."
  },
  {
    id: 74,
    topic: "Kingdom Protista",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following groups are included under Kingdom Protista as per NCERT?<br>(i) Chrysophytes<br>(ii) Dinoflagellates<br>(iii) Euglenoids<br>(iv) Cyanobacteria<br>(v) Slime moulds<br>(vi) Protozoans",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 2,
    explanation: "NCERT Line: 'we include Chrysophytes, Dinoflagellates, Euglenoids, Slime moulds and Protozoans under Protista.' So (i) ✅ (ii) ✅ (iii) ✅ (iv) ❌ — Cyanobacteria are in Kingdom Monera (they are prokaryotes), (v) ✅ (vi) ✅. Five groups are correct. Common mistake: Including cyanobacteria under Protista — they are prokaryotic and belong to Monera."
  },
  {
    id: 75,
    topic: "Kingdom Protista",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about the members of Kingdom Protista?",
    options: [
      "All members have flagella or cilia",
      "Members are primarily terrestrial",
      "They reproduce only asexually",
      "Members are primarily aquatic"
    ],
    correct: 3,
    explanation: "NCERT Line: 'Members of Protista are primarily aquatic.' Option A is wrong — NCERT says 'SOME have flagella or cilia', not all. Option B says terrestrial — NCERT says aquatic. Option C says only asexually — NCERT says 'asexually AND sexually by a process involving cell fusion and zygote formation'. Common mistake: Saying all protists have flagella/cilia."
  },
  {
    id: 76,
    topic: "Kingdom Protista",
    difficulty: "Medium",
    type: "Statement",
    q: "Sexual reproduction in protists involves:",
    options: [
      "Binary fission and spore formation",
      "Cell fusion and zygote formation",
      "Fragmentation and regeneration",
      "Budding and gemmule formation"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Protists reproduce asexually and sexually by a process involving cell fusion and zygote formation.' Option A describes asexual methods. Options C and D are reproduction methods of other organisms. Common mistake: Confusing asexual reproduction methods with sexual reproduction in protists."
  },
  {
    id: 77,
    topic: "Kingdom Protista - Chrysophytes",
    difficulty: "Easy",
    type: "Direct",
    q: "Chrysophytes include:",
    options: [
      "Diatoms and euglenoids",
      "Diatoms and golden algae (desmids)",
      "Dinoflagellates and diatoms",
      "Slime moulds and diatoms"
    ],
    correct: 1,
    explanation: "NCERT Line: 'This group includes diatoms and golden algae (desmids).' Option A adds euglenoids — a separate protistan group. Option C adds dinoflagellates — also a separate group. Common mistake: Mixing up chrysophytes with other protistan groups. Remember: Chrysophytes = Diatoms + Desmids (golden algae)."
  },
  {
    id: 78,
    topic: "Kingdom Protista - Chrysophytes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>incorrect</b> about diatoms?",
    options: [
      "The cell walls form two thin overlapping shells fitting together as in a soap box",
      "The walls are embedded with silica and are indestructible",
      "They are the chief 'producers' in the oceans",
      "The walls are embedded with cellulose making them rigid"
    ],
    correct: 3,
    explanation: "NCERT Line: 'The walls are embedded with silica and thus the walls are indestructible.' Option D says 'cellulose' instead of 'silica' — this is a one-word-change trap. Diatom walls contain SILICA, not cellulose. Cellulose plates are found in DINOFLAGELLATES. Options A, B, C are all correct NCERT statements. Common mistake: Confusing silica (diatoms) with cellulose (dinoflagellates)."
  },
  {
    id: 79,
    topic: "Kingdom Protista - Chrysophytes",
    difficulty: "Easy",
    type: "Direct",
    q: "The accumulation of diatom cell wall deposits over billions of years is referred to as:",
    options: [
      "Ite",
      "Diatomaceous earth",
      "Siliceous ooze",
      "Humus"
    ],
    correct: 1,
    explanation: "NCERT Line: 'this accumulation over billions of years is referred to as diatomaceous earth.' This is a direct recall question. Option C (siliceous ooze) is a related but different geological term not used in NCERT. Common mistake: Confusing diatomaceous earth with other geological deposits."
  },
  {
    id: 80,
    topic: "Kingdom Protista - Chrysophytes",
    difficulty: "Medium",
    type: "Except",
    q: "Diatomaceous earth is used for all of the following <b>EXCEPT</b>:",
    options: [
      "Polishing",
      "Filtration of oils",
      "Filtration of syrups",
      "Manufacturing of glass"
    ],
    correct: 3,
    explanation: "NCERT Line: 'Being gritty this soil is used in polishing, filtration of oils and syrups.' Three uses are mentioned: polishing, filtration of oils, filtration of syrups. 'Manufacturing of glass' is NOT mentioned in NCERT. Common mistake: Adding uses not mentioned in NCERT."
  },
  {
    id: 81,
    topic: "Kingdom Protista - Chrysophytes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about chrysophytes?",
    options: [
      "They are exclusively marine organisms",
      "They are microscopic and float passively in water currents (plankton)",
      "All of them are heterotrophic",
      "They are found only in fresh water"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They are microscopic and float passively in water currents (plankton).' Option A says 'exclusively marine' — NCERT says 'fresh water as well as marine'. Option C says 'all heterotrophic' — NCERT says 'most of them are photosynthetic'. Option D says 'only fresh water' — incorrect. Common mistake: Restricting chrysophytes to one habitat."
  },
  {
    id: 82,
    topic: "Kingdom Protista - Chrysophytes",
    difficulty: "Medium",
    type: "Statement",
    q: "The chief 'producers' in the oceans are:",
    options: [
      "Dinoflagellates",
      "Euglenoids",
      "Diatoms",
      "Cyanobacteria"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Diatoms are the chief producers in the oceans.' Option A (dinoflagellates) is the most tempting trap — they are also marine and photosynthetic. Option D (cyanobacteria) are in Monera, not Protista. Common mistake: Choosing dinoflagellates over diatoms as chief ocean producers."
  },
  {
    id: 83,
    topic: "Kingdom Protista - Dinoflagellates",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about dinoflagellates?",
    options: [
      "They are mostly freshwater and heterotrophic",
      "Their cell wall has stiff silica plates on the outer surface",
      "They are mostly marine and photosynthetic",
      "They lack flagella"
    ],
    correct: 2,
    explanation: "NCERT Line: 'These organisms are mostly marine and photosynthetic.' Option A reverses both facts — freshwater (should be marine) and heterotrophic (should be photosynthetic). Option B says 'silica plates' — NCERT says 'stiff CELLULOSE plates'. This is a one-word trap (silica = diatoms, cellulose = dinoflagellates). Option D says 'lack flagella' but they have two. Common mistake: Swapping silica (diatoms) with cellulose (dinoflagellates)."
  },
  {
    id: 84,
    topic: "Kingdom Protista - Dinoflagellates",
    difficulty: "Hard",
    type: "Statement",
    q: "Regarding the flagella of dinoflagellates, which statement is <b>correct</b>?",
    options: [
      "They have a single flagellum that lies transversely",
      "They have two flagella, both lying longitudinally",
      "They have two flagella; one lies longitudinally and the other transversely in a furrow between the wall plates",
      "They have two flagella; one lies transversely and the other diagonally"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Most of them have two flagella; one lies longitudinally and the other transversely in a furrow between the wall plates.' This is exact NCERT phrasing. Option B says both longitudinal — incorrect. Option A says single flagellum — they have two. Common mistake: Swapping the arrangement (longitudinal ↔ transverse) or saying single flagellum."
  },
  {
    id: 85,
    topic: "Kingdom Protista - Dinoflagellates",
    difficulty: "Easy",
    type: "Direct",
    q: "Red tides are caused by rapid multiplication of:",
    options: [
      "Red algae",
      "Red dinoflagellates such as Gonyaulax",
      "Diatoms",
      "Euglenoids"
    ],
    correct: 1,
    explanation: "NCERT Line: 'red dinoflagellates (Example: Gonyaulax) undergo such rapid multiplication that they make the sea appear red (red tides).' Option A (red algae) is the most common trap — red tides are caused by dinoflagellates, not red algae. Common mistake: Confusing red tides (dinoflagellates) with red algae (Rhodophyta)."
  },
  {
    id: 86,
    topic: "Kingdom Protista - Dinoflagellates",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about red tides?",
    options: [
      "They are caused by red algae in freshwater bodies",
      "Toxins released during red tides can kill marine animals such as fishes",
      "Red tides are caused by rapid multiplication of euglenoids",
      "Red tides have no harmful effects on marine organisms"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Toxins released by such large numbers may even kill other marine animals such as fishes.' Option A is wrong on two counts — not red algae, and not freshwater (it's marine). Option D directly contradicts NCERT. Common mistake: Thinking red tides are harmless or caused by red algae."
  },
  {
    id: 87,
    topic: "Kingdom Protista - Euglenoids",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>incorrect</b> about euglenoids?",
    options: [
      "Majority are fresh water organisms found in stagnant water",
      "They have a cellulose cell wall that makes their body rigid",
      "They have two flagella — a short and a long one",
      "The pigments of euglenoids are identical to those present in higher plants"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Instead of a cell wall, they have a protein rich layer called pellicle which makes their body flexible.' Option B says 'cellulose cell wall' making body 'rigid' — this has TWO errors: (1) euglenoids have PELLICLE (protein-rich), not cell wall, (2) body is FLEXIBLE, not rigid. Options A, C, D are all correct NCERT statements. Common mistake: Assigning a cell wall to euglenoids — they have a protein-rich pellicle."
  },
  {
    id: 88,
    topic: "Kingdom Protista - Euglenoids",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about euglenoids are <b>correct</b>?<br>(i) They are found in stagnant water<br>(ii) They have a protein rich layer called pellicle instead of a cell wall<br>(iii) They have a single flagellum<br>(iv) In the presence of sunlight they are photosynthetic<br>(v) When deprived of sunlight they behave like heterotrophs<br>(vi) Their pigments are identical to those of higher plants",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — 'found in stagnant water'. (ii) CORRECT — 'protein rich layer called pellicle'. (iii) INCORRECT — NCERT says 'two flagella, a short and a long one', NOT one. (iv) CORRECT — 'photosynthetic in the presence of sunlight'. (v) CORRECT — 'deprived of sunlight they behave like heterotrophs'. (vi) CORRECT — 'pigments of euglenoids are identical to those present in higher plants'. So 5 are correct. Common mistake: Missing that euglenoids have TWO flagella, not one."
  },
  {
    id: 89,
    topic: "Kingdom Protista - Euglenoids",
    difficulty: "Medium",
    type: "Statement",
    q: "The protein-rich flexible layer in euglenoids is called:",
    options: [
      "Capsule",
      "Pellicle",
      "Glycocalyx",
      "Cell wall"
    ],
    correct: 1,
    explanation: "NCERT Line: 'they have a protein rich layer called pellicle which makes their body flexible.' Option D (cell wall) is the most tempting trap — NCERT explicitly says 'INSTEAD of a cell wall'. Options A and C are bacterial outer coverings. Common mistake: Calling it a cell wall instead of pellicle."
  },
  {
    id: 90,
    topic: "Kingdom Protista - Euglenoids",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Euglenoids are considered as a connecting link between plants and animals.<br><b>Reason (R):</b> Euglenoids are photosynthetic in the presence of sunlight but behave like heterotrophs when deprived of sunlight.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — Euglenoids show both plant-like (photosynthetic) and animal-like (heterotrophic) characters, making them a connecting link. Reason is TRUE — NCERT: 'photosynthetic in the presence of sunlight, when deprived of sunlight they behave like heterotrophs.' R correctly EXPLAINS A because their dual nutrition mode is the reason they are considered a link. Common mistake: Choosing B — but the mixotrophic nature IS the explanation for the link."
  },
  {
    id: 91,
    topic: "Kingdom Protista - Slime Moulds",
    difficulty: "Easy",
    type: "Direct",
    q: "Slime moulds are:",
    options: [
      "Parasitic protists",
      "Photosynthetic protists",
      "Saprophytic protists",
      "Chemosynthetic protists"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Slime moulds are saprophytic protists.' This is direct recall. Options A, B, D are incorrect modes of nutrition for slime moulds. Common mistake: Confusing saprophytic (feeds on dead organic matter) with parasitic (feeds on living organisms)."
  },
  {
    id: 92,
    topic: "Kingdom Protista - Slime Moulds",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about slime moulds?",
    options: [
      "Under suitable conditions they form fruiting bodies bearing spores",
      "Under suitable conditions they form an aggregation called plasmodium",
      "Under unfavourable conditions they form an aggregation called plasmodium",
      "Their spores lack true walls and are dispersed by water"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Under suitable conditions, they form an aggregation called plasmodium which may grow and spread over several feet.' Option A is wrong — fruiting bodies form under UNFAVOURABLE conditions, not suitable. Option C reverses the condition (unfavourable instead of suitable). Option D is wrong on two counts — spores POSSESS true walls and are dispersed by AIR currents, not water. Common mistake: Confusing suitable (plasmodium) with unfavourable (fruiting bodies/spores)."
  },
  {
    id: 93,
    topic: "Kingdom Protista - Slime Moulds",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about slime moulds are <b>correct</b>?<br>(i) They are saprophytic protists<br>(ii) The plasmodium forms under unfavourable conditions<br>(iii) Fruiting bodies bearing spores form during unfavourable conditions<br>(iv) The spores possess true walls<br>(v) Spores are dispersed by water currents",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'saprophytic protists'. (ii) INCORRECT — Plasmodium forms under SUITABLE conditions, not unfavourable. Key trap! (iii) CORRECT — NCERT: 'During unfavourable conditions, the plasmodium differentiates and forms fruiting bodies bearing spores.' (iv) CORRECT — NCERT: 'The spores possess true walls.' (v) INCORRECT — NCERT says 'dispersed by AIR currents', not water. So 3 are correct. Common mistake: Reversing suitable/unfavourable conditions and confusing air/water dispersal."
  },
  {
    id: 94,
    topic: "Kingdom Protista - Slime Moulds",
    difficulty: "Medium",
    type: "Statement",
    q: "The spores of slime moulds are:",
    options: [
      "Extremely fragile and survive for a few days only",
      "Lacking true walls and are dispersed by water",
      "Extremely resistant and survive for many years, dispersed by air currents",
      "Moderate in resistance and dispersed by insects"
    ],
    correct: 2,
    explanation: "NCERT Lines: 'They are extremely resistant and survive for many years, even under adverse conditions. The spores are dispersed by air currents.' Option A contradicts NCERT (fragile vs resistant; few days vs many years). Option B has two errors (lack walls vs possess true walls; water vs air). Common mistake: Saying spores are dispersed by water instead of air."
  },
  {
    id: 95,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Easy",
    type: "Direct",
    q: "All protozoans are:",
    options: [
      "Autotrophic",
      "Saprophytic",
      "Heterotrophic",
      "Photosynthetic"
    ],
    correct: 2,
    explanation: "NCERT Line: 'All protozoans are heterotrophs and live as predators or parasites.' The word 'ALL' makes this definitive. Common mistake: Confusing protozoans with other protists that may be photosynthetic (like euglenoids)."
  },
  {
    id: 96,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Medium",
    type: "Match",
    q: "Match the type of protozoan with its locomotory structure:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Amoeboid protozoans &emsp; (i) Cilia<br>(b) Flagellated protozoans &emsp; (ii) Pseudopodia<br>(c) Ciliated protozoans &emsp;&emsp; (iii) Flagella<br>(d) Sporozoans &emsp;&emsp;&emsp;&emsp;&emsp; (iv) No specific locomotory structure",
    options: [
      "a-ii, b-iii, c-i, d-iv",
      "a-iii, b-ii, c-i, d-iv",
      "a-ii, b-i, c-iii, d-iv",
      "a-i, b-iii, c-ii, d-iv"
    ],
    correct: 0,
    explanation: "From NCERT: Amoeboid = pseudopodia (ii), Flagellated = flagella (iii), Ciliated = cilia (i), Sporozoans = spore-like stage, no specific locomotory structure mentioned (iv). Option B swaps amoeboid and flagellated — the most common trap. Common mistake: Swapping pseudopodia (amoeboid) with flagella (flagellated)."
  },
  {
    id: 97,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Medium",
    type: "Match",
    q: "Match the protozoan with the disease it causes:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Trypanosoma &emsp;&emsp; (i) Malaria<br>(b) Plasmodium &emsp;&emsp;&emsp; (ii) Sleeping sickness<br>(c) Entamoeba &emsp;&emsp;&emsp; (iii) Amoebic dysentery",
    options: [
      "a-ii, b-i, c-iii",
      "a-i, b-ii, c-iii",
      "a-iii, b-i, c-ii",
      "a-ii, b-iii, c-i"
    ],
    correct: 0,
    explanation: "From NCERT: Trypanosoma = sleeping sickness (ii); Plasmodium = malaria (i); Entamoeba = parasite (associated with amoebic dysentery) (iii). Option B swaps Trypanosoma and Plasmodium — the most common NTA trap. Common mistake: Confusing Trypanosoma (sleeping sickness) with Plasmodium (malaria)."
  },
  {
    id: 98,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about ciliated protozoans?",
    options: [
      "They move using pseudopodia",
      "They have a cavity called gullet that opens to the outside of the cell surface",
      "They have an infectious spore-like stage in their life cycle",
      "They cause sleeping sickness"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They have a cavity (gullet) that opens to the outside of the cell surface.' Option A describes amoeboid protozoans. Option C describes sporozoans. Option D describes flagellated protozoans (Trypanosoma). Common mistake: Mixing up characteristics of the four protozoan groups."
  },
  {
    id: 99,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about protozoans are <b>correct</b>?<br>(i) All protozoans are heterotrophs<br>(ii) They are believed to be primitive relatives of animals<br>(iii) Marine amoeboid forms have cellulose shells on their surface<br>(iv) Sporozoans have an infectious spore-like stage in their life cycle<br>(v) Paramoecium is an example of ciliated protozoan",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'All protozoans are heterotrophs.' (ii) CORRECT — NCERT: 'believed to be primitive relatives of animals.' (iii) INCORRECT — NCERT says marine forms have SILICA shells, not cellulose. One-word trap! (iv) CORRECT — NCERT: 'infectious spore-like stage in their life cycle.' (v) CORRECT — NCERT: 'Example: Paramoecium.' So 4 are correct. Common mistake: Missing silica → cellulose swap in statement (iii)."
  },
  {
    id: 100,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Easy",
    type: "Direct",
    q: "Sleeping sickness is caused by:",
    options: [
      "Plasmodium",
      "Entamoeba",
      "Trypanosoma",
      "Paramoecium"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The parasitic forms cause diseases such as sleeping sickness. Example: Trypanosoma.' Option A (Plasmodium) causes malaria. Option B (Entamoeba) is a parasitic amoeba. Option D (Paramoecium) is a ciliated protozoan and is NOT a parasite. Common mistake: Confusing Trypanosoma with Plasmodium."
  },
  {
    id: 101,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Medium",
    type: "Statement",
    q: "Sporozoans are characterised by:",
    options: [
      "Presence of flagella for locomotion",
      "Presence of thousands of cilia",
      "An infectious spore-like stage in their life cycle",
      "Movement by pseudopodia"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Sporozoans: This includes diverse organisms that have an infectious spore-like stage in their life cycle.' Option A = flagellated protozoans, Option B = ciliated protozoans, Option D = amoeboid protozoans. Common mistake: Confusing sporozoans with other protozoan groups based on locomotion."
  },
  {
    id: 102,
    topic: "Kingdom Protista - Cross-concept",
    difficulty: "Hard",
    type: "Except",
    q: "Which of the following protists does <b>NOT</b> have a cell wall?",
    options: [
      "Diatoms",
      "Dinoflagellates",
      "Euglenoids",
      "Slime mould spores"
    ],
    correct: 2,
    explanation: "NCERT: Diatoms have cell walls embedded with silica. Dinoflagellates have cellulose plates (cell wall). Euglenoids have PELLICLE (protein-rich layer) INSTEAD of a cell wall. Slime mould spores possess TRUE WALLS. So euglenoids are the only ones WITHOUT a cell wall. Common mistake: Thinking euglenoids have a cell wall — they have pellicle instead."
  },
  {
    id: 103,
    topic: "Kingdom Protista - Cross-concept",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following protistan groups are primarily photosynthetic?<br>(i) Chrysophytes<br>(ii) Dinoflagellates<br>(iii) Euglenoids<br>(iv) Slime moulds<br>(v) Protozoans",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "Analysis: (i) Chrysophytes — 'Most of them are photosynthetic' ✅ (ii) Dinoflagellates — 'mostly marine and photosynthetic' ✅ (iii) Euglenoids — 'photosynthetic in the presence of sunlight' (mixotrophic, but photosynthetic primarily) ✅ (iv) Slime moulds — 'saprophytic protists' ❌ (v) Protozoans — 'All protozoans are heterotrophs' ❌. So 3 groups are primarily photosynthetic. Common mistake: Including slime moulds or protozoans as photosynthetic."
  },
  {
    id: 104,
    topic: "Kingdom Protista - Cross-concept",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Diatom cell walls are indestructible and accumulate over billions of years forming diatomaceous earth.<br><b>Reason (R):</b> Diatom cell walls are embedded with cellulose, making them extremely hard.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "Assertion is TRUE — NCERT: 'walls are indestructible...accumulation over billions of years is referred to as diatomaceous earth.' Reason is FALSE — NCERT says walls are embedded with SILICA, not cellulose. This is a one-word-change trap. Cellulose plates are found in dinoflagellates, not diatoms. Common mistake: Confusing silica (diatoms) with cellulose (dinoflagellates)."
  },
  {
    id: 105,
    topic: "Kingdom Protista - Cross-concept",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements:<br>(A) Diatom cell wall is made of silica<br>(B) Dinoflagellate cell wall has stiff cellulose plates<br>(C) Euglenoids have a cellulose-rich pellicle<br>(D) Slime mould spores possess true walls<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B and C only",
      "A, B and D only",
      "B, C and D only",
      "A, C and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) CORRECT — NCERT: 'walls are embedded with silica'. (B) CORRECT — NCERT: 'cell wall has stiff cellulose plates.' (C) INCORRECT — Pellicle is PROTEIN-rich, not cellulose-rich. One-word trap. (D) CORRECT — NCERT: 'spores possess true walls.' So A, B and D are correct. Common mistake: Not catching protein → cellulose swap in statement C."
  },
  {
    id: 106,
    topic: "Kingdom Protista - Dinoflagellates",
    difficulty: "Medium",
    type: "Except",
    q: "Dinoflagellates can appear in all of the following colours <b>EXCEPT</b>:",
    options: [
      "Yellow",
      "Violet",
      "Brown",
      "Red"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They appear yellow, green, brown, blue or red depending on the main pigments present in their cells.' The five colours mentioned are: yellow, green, brown, blue, red. VIOLET is NOT mentioned. Common mistake: Confusing blue with violet."
  },
  {
    id: 107,
    topic: "Kingdom Protista - Cross-concept",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following protists are correctly paired with their habitat <b>EXCEPT</b>:",
    options: [
      "Chrysophytes — freshwater and marine",
      "Dinoflagellates — mostly marine",
      "Euglenoids — mostly marine, found in turbulent water",
      "Amoeboid protozoans — freshwater, sea water or moist soil"
    ],
    correct: 2,
    explanation: "NCERT: Euglenoids are 'Majority fresh water organisms found in STAGNANT water' — not marine and not turbulent. Option C has two errors: marine (should be freshwater) and turbulent (should be stagnant). All other options are correct NCERT pairings. Common mistake: Confusing euglenoid habitat — they are freshwater, stagnant water organisms."
  },
  {
    id: 108,
    topic: "Kingdom Protista - Protozoans",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about amoeboid protozoans?",
    options: [
      "All amoeboid protozoans are parasitic",
      "They are exclusively freshwater organisms",
      "Marine forms have silica shells on their surface",
      "They move using cilia"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Marine forms have silica shells on their surface.' Option A is wrong — NCERT says 'Some of them such as Entamoeba are parasites', implying NOT all are parasitic. Option B is wrong — NCERT says 'fresh water, sea water or moist soil' (not exclusively freshwater). Option D is wrong — amoeboid protozoans use pseudopodia, not cilia. Common mistake: Saying all amoeboid protozoans are parasitic — only some like Entamoeba are."
  },
  {
    id: 109,
    topic: "Kingdom Fungi",
    difficulty: "Easy",
    type: "Direct",
    q: "Kingdom Fungi constitutes a unique kingdom of:",
    options: [
      "Autotrophic organisms",
      "Heterotrophic organisms",
      "Both autotrophic and heterotrophic organisms",
      "Chemosynthetic organisms"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The fungi constitute a unique kingdom of heterotrophic organisms.' This is direct recall. Option C is the most common trap — students think some fungi are autotrophic because lichens (fungi + algae) perform photosynthesis. But fungi themselves are strictly heterotrophic. Common mistake: Thinking lichens make fungi autotrophic."
  },
  {
    id: 110,
    topic: "Kingdom Fungi",
    difficulty: "Easy",
    type: "Direct",
    q: "White spots seen on mustard leaves are caused by:",
    options: [
      "A parasitic bacterium",
      "A parasitic fungus",
      "A virus",
      "A saprophytic fungus"
    ],
    correct: 1,
    explanation: "NCERT Line: 'White spots seen on mustard leaves are due to a parasitic fungus.' The fungus is Albugo (mentioned later). Option D says 'saprophytic' — but the fungus on living mustard is PARASITIC, not saprophytic. Common mistake: Confusing parasitic (living host) with saprophytic (dead matter)."
  },
  {
    id: 111,
    topic: "Kingdom Fungi",
    difficulty: "Easy",
    type: "Direct",
    q: "The cell walls of fungi are composed of:",
    options: [
      "Cellulose and pectin",
      "Chitin and polysaccharides",
      "Cellulose and chitin",
      "Polysaccharides and amino acids"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The cell walls of fungi are composed of chitin and polysaccharides.' Option A (cellulose and pectin) is for plant cell walls. Option D (polysaccharides and amino acids) is for Monera cell wall. Option C mixes cellulose with chitin — cellulose is NOT in fungal walls. Common mistake: Confusing fungal cell wall (chitin + polysaccharides) with Monera wall (polysaccharide + amino acid)."
  },
  {
    id: 112,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about the body structure of fungi?",
    options: [
      "All fungi are unicellular",
      "All fungi are filamentous without exception",
      "With the exception of yeasts which are unicellular, fungi are filamentous",
      "Fungi are exclusively multicellular with tissue-level organisation"
    ],
    correct: 2,
    explanation: "NCERT Line: 'With the exception of yeasts which are unicellular, fungi are filamentous.' Option B misses the yeast exception — a classic NTA trap. Option A is wrong — most fungi are filamentous. Option D is wrong — fungi have loose tissue organisation, not tissue-level. Common mistake: Forgetting yeast as the unicellular exception."
  },
  {
    id: 113,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>incorrect</b> about hyphae?",
    options: [
      "Hyphae are long, slender thread-like structures",
      "The network of hyphae is known as mycelium",
      "Coenocytic hyphae have septae dividing them into individual cells",
      "Some hyphae are continuous tubes filled with multinucleated cytoplasm"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Some hyphae are continuous tubes filled with multinucleated cytoplasm – these are called coenocytic hyphae. Others have septae or cross walls in their hyphae.' Option C is INCORRECT — coenocytic hyphae LACK septae (they are aseptate, continuous tubes). Septae are found in OTHER types of hyphae. Common mistake: Assigning septae to coenocytic hyphae — coenocytic means NO septa, multinucleated."
  },
  {
    id: 114,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "Fungi can live as symbionts in association with algae as lichens and with roots of higher plants as:",
    options: [
      "Mycoplasma",
      "Mycorrhiza",
      "Mycelium",
      "Mycobiont"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They can also live as symbionts – in association with algae as lichens and with roots of higher plants as mycorrhiza.' Option A (mycoplasma) is the smallest living cell, unrelated to fungal symbiosis. Option C (mycelium) is the network of hyphae. Option D (mycobiont) refers to the fungal partner in lichens, not the association itself. Common mistake: Confusing mycorrhiza with mycoplasma — similar-sounding terms."
  },
  {
    id: 115,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following are methods of vegetative reproduction in fungi as per NCERT?<br>(i) Fragmentation<br>(ii) Fission<br>(iii) Budding<br>(iv) Sporulation<br>(v) Conidia formation",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Reproduction in fungi can take place by vegetative means – fragmentation, fission and budding.' So (i) Fragmentation ✅, (ii) Fission ✅, (iii) Budding ✅, (iv) Sporulation ❌ — not listed under vegetative means, (v) Conidia formation ❌ — this is ASEXUAL reproduction, not vegetative. Three methods are correct. Common mistake: Confusing asexual spore formation with vegetative reproduction."
  },
  {
    id: 116,
    topic: "Kingdom Fungi",
    difficulty: "Hard",
    type: "Match",
    q: "Match the type of spore with its category of reproduction:<br><b>Column I (Spore)</b> &emsp;&emsp; <b>Column II (Reproduction type)</b><br>(a) Conidia &emsp;&emsp;&emsp;&emsp;&emsp; (i) Sexual<br>(b) Ascospores &emsp;&emsp;&emsp; (ii) Asexual<br>(c) Basidiospores &emsp;&emsp; (iii) Vegetative<br>(d) Oospores &emsp;&emsp;&emsp;&emsp; (iv) Sexual",
    options: [
      "a-ii, b-i, c-iv, d-i",
      "a-ii, b-i, c-i, d-i",
      "a-i, b-ii, c-i, d-ii",
      "a-ii, b-ii, c-i, d-i"
    ],
    correct: 1,
    explanation: "NCERT: 'Asexual reproduction is by spores called conidia or sporangiospores or zoospores, and sexual reproduction is by oospores, ascospores and basidiospores.' Conidia = asexual (ii); Ascospores = sexual (i); Basidiospores = sexual (i); Oospores = sexual (i). So a-ii, b-i, c-i, d-i. Common mistake: Placing conidia under sexual or ascospores under asexual."
  },
  {
    id: 117,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "The correct sequence of steps in the sexual cycle of fungi is:",
    options: [
      "Karyogamy → Plasmogamy → Meiosis",
      "Plasmogamy → Meiosis → Karyogamy",
      "Plasmogamy → Karyogamy → Meiosis",
      "Meiosis → Plasmogamy → Karyogamy"
    ],
    correct: 2,
    explanation: "NCERT: '(i) Fusion of protoplasms — plasmogamy. (ii) Fusion of two nuclei — karyogamy. (iii) Meiosis in zygote resulting in haploid spores.' The correct sequence is Plasmogamy → Karyogamy → Meiosis. Option A reverses the first two steps. Common mistake: Placing karyogamy before plasmogamy — protoplasm must fuse before nuclei can fuse."
  },
  {
    id: 118,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about plasmogamy and karyogamy?",
    options: [
      "Plasmogamy is fusion of two nuclei; karyogamy is fusion of protoplasms",
      "Plasmogamy is fusion of protoplasms; karyogamy is fusion of two nuclei",
      "Both plasmogamy and karyogamy refer to nuclear fusion",
      "Plasmogamy is meiosis in the zygote"
    ],
    correct: 1,
    explanation: "NCERT: 'Fusion of protoplasms between two motile or non-motile gametes called plasmogamy. Fusion of two nuclei called karyogamy.' Option A reverses the definitions — the single most common NTA trap in this topic. Common mistake: Swapping plasmogamy (protoplasm fusion) with karyogamy (nuclear fusion)."
  },
  {
    id: 119,
    topic: "Kingdom Fungi",
    difficulty: "Hard",
    type: "Statement",
    q: "The dikaryotic stage (n + n) occurs in which of the following groups of fungi?",
    options: [
      "Phycomycetes and Ascomycetes",
      "Ascomycetes and Basidiomycetes",
      "Phycomycetes and Basidiomycetes",
      "Ascomycetes and Deuteromycetes"
    ],
    correct: 1,
    explanation: "NCERT Line: 'in other fungi (ascomycetes and basidiomycetes), an intervening dikaryotic stage (n + n, i.e., two nuclei per cell) occurs.' Only ascomycetes and basidiomycetes show dikaryophase. Phycomycetes show direct fusion to diploid. Deuteromycetes lack known sexual stages. Common mistake: Including phycomycetes in dikaryotic group."
  },
  {
    id: 120,
    topic: "Kingdom Fungi - Phycomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about Phycomycetes?",
    options: [
      "Mycelium is septate and branched",
      "Mycelium is aseptate and coenocytic",
      "Mycelium is septate and coenocytic",
      "Mycelium is absent"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The mycelium is aseptate and coenocytic.' Phycomycetes = aseptate (no cross walls) + coenocytic (multinucleated continuous tube). Option A describes ascomycetes/basidiomycetes. Option C is contradictory — septate and coenocytic cannot coexist. Common mistake: Confusing phycomycetes (aseptate) with ascomycetes/basidiomycetes (septate)."
  },
  {
    id: 121,
    topic: "Kingdom Fungi - Phycomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "In Phycomycetes, asexual spores are produced <b>endogenously</b> in:",
    options: [
      "Conidiophores",
      "Asci",
      "Basidia",
      "Sporangium"
    ],
    correct: 3,
    explanation: "NCERT Line: 'These spores are endogenously produced in sporangium.' Option A (conidiophores) produce conidia EXOGENOUSLY in ascomycetes. Option B (asci) produce ascospores endogenously in ascomycetes. Option C (basidia) produce basidiospores exogenously. Common mistake: Confusing sporangium (phycomycetes) with conidiophores (ascomycetes) or asci (ascomycetes)."
  },
  {
    id: 122,
    topic: "Kingdom Fungi - Phycomycetes",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about Phycomycetes are <b>correct</b>?<br>(i) Mycelium is aseptate and coenocytic<br>(ii) Zoospores are non-motile asexual spores<br>(iii) Aplanospores are non-motile<br>(iv) Sexual reproduction involves zygospore formation<br>(v) Gametes can be isogamous, anisogamous or oogamous",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'aseptate and coenocytic'. (ii) INCORRECT — Zoospores are MOTILE, not non-motile. NCERT: 'zoospores (motile)'. Key trap! (iii) CORRECT — NCERT: 'aplanospores (non-motile)'. (iv) CORRECT — NCERT: 'A zygospore is formed by fusion of two gametes.' (v) CORRECT — NCERT: 'isogamous or dissimilar (anisogamous or oogamous).' So 4 are correct. Common mistake: Reversing motile (zoospores) and non-motile (aplanospores)."
  },
  {
    id: 123,
    topic: "Kingdom Fungi - Phycomycetes",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are examples of Phycomycetes <b>EXCEPT</b>:",
    options: [
      "Mucor",
      "Rhizopus",
      "Albugo",
      "Aspergillus"
    ],
    correct: 3,
    explanation: "NCERT Line: 'Some common examples are Mucor, Rhizopus (the bread mould) and Albugo (the parasitic fungi on mustard).' Aspergillus is an ASCOMYCETE, not a Phycomycete. Common mistake: Misplacing Aspergillus — it belongs to Ascomycetes along with Penicillium and Neurospora."
  },
  {
    id: 124,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Easy",
    type: "Direct",
    q: "Ascomycetes are commonly known as:",
    options: [
      "Club fungi",
      "Sac-fungi",
      "Imperfect fungi",
      "Bracket fungi"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Commonly known as sac-fungi, the ascomycetes...' Option A (club fungi) is associated with basidiomycetes. Option C (imperfect fungi) is deuteromycetes. Option D (bracket fungi) is a type of basidiomycete. Common mistake: Confusing sac-fungi (ascomycetes) with club fungi (basidiomycetes)."
  },
  {
    id: 125,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Hard",
    type: "Statement",
    q: "In Ascomycetes, asexual spores (conidia) are produced <b>exogenously</b> on conidiophores, while sexual spores (ascospores) are produced:",
    options: [
      "Exogenously on the basidium",
      "Endogenously in sac-like asci",
      "Exogenously on conidiophores",
      "Endogenously in sporangium"
    ],
    correct: 1,
    explanation: "NCERT Line: 'asexual spores are conidia produced exogenously on the special mycelium called conidiophores. Sexual spores are called ascospores which are produced endogenously in sac like asci.' Conidia = EXO on conidiophores; Ascospores = ENDO in asci. Option A describes basidiospores. Option D describes phycomycetes. Common mistake: Reversing exogenous/endogenous production — the #1 NTA trap in fungi."
  },
  {
    id: 126,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about Ascomycetes?",
    options: [
      "They are saprophytic, decomposers, parasitic or coprophilous",
      "Their mycelium is aseptate and coenocytic",
      "Sexual spores are produced exogenously on asci",
      "They reproduce only by asexual means"
    ],
    correct: 0,
    explanation: "NCERT Line: 'They are saprophytic, decomposers, parasitic or coprophilous (growing on dung).' Option B is wrong — ascomycetes have SEPTATE mycelium, not aseptate (aseptate = phycomycetes). Option C is wrong — ascospores are produced ENDOGENOUSLY in asci, not exogenously. Option D is wrong — they reproduce both asexually (conidia) and sexually (ascospores). Common mistake: Saying ascomycetes are aseptate."
  },
  {
    id: 127,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Neurospora is used extensively in:",
    options: [
      "Industrial alcohol production",
      "Antibiotic production",
      "Biochemical and genetic work",
      "Bread making"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Neurospora is used extensively in biochemical and genetic work.' Option B (antibiotic production) = Penicillium. Option D (bread making) = yeast. Common mistake: Confusing Neurospora's use with Penicillium's use."
  },
  {
    id: 128,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are Ascomycetes <b>EXCEPT</b>:",
    options: [
      "Penicillium",
      "Aspergillus",
      "Neurospora",
      "Mucor"
    ],
    correct: 3,
    explanation: "NCERT: Ascomycetes examples — Penicillium, yeast (Saccharomyces), Aspergillus, Claviceps, Neurospora. Mucor is a PHYCOMYCETE. Common mistake: Placing Mucor under Ascomycetes — Mucor belongs to Phycomycetes along with Rhizopus and Albugo."
  },
  {
    id: 129,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>incorrect</b> about Basidiomycetes?",
    options: [
      "The mycelium is branched and septate",
      "Asexual spores are generally not found",
      "Sex organs are present and produce gametes for plasmogamy",
      "Basidiospores are exogenously produced on the basidium"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The sex organs are absent, but plasmogamy is brought about by fusion of two vegetative or somatic cells of different strains or genotypes.' Option C states sex organs are PRESENT — this directly contradicts NCERT. Sex organs are ABSENT in basidiomycetes. Plasmogamy occurs through vegetative/somatic cell fusion. Common mistake: This is one of the MOST TESTED facts — sex organs are ABSENT in basidiomycetes."
  },
  {
    id: 130,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about Basidiomycetes are <b>correct</b>?<br>(i) They include mushrooms, bracket fungi and puffballs<br>(ii) Mycelium is aseptate and coenocytic<br>(iii) Asexual spores are generally not found<br>(iv) Sex organs are absent<br>(v) Karyogamy and meiosis take place in the basidium producing four basidiospores",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'mushrooms, bracket fungi or puffballs'. (ii) INCORRECT — Basidiomycetes mycelium is 'branched and SEPTATE', not aseptate. Aseptate = Phycomycetes. Key trap! (iii) CORRECT — NCERT: 'asexual spores are generally not found.' (iv) CORRECT — NCERT: 'sex organs are absent.' (v) CORRECT — NCERT: 'Karyogamy and meiosis take place in the basidium producing four basidiospores.' So 4 are correct. Common mistake: Saying basidiomycetes have aseptate mycelium."
  },
  {
    id: 131,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "In Basidiomycetes, plasmogamy is brought about by:",
    options: [
      "Fusion of motile gametes",
      "Fusion of two vegetative or somatic cells of different strains",
      "Fusion of ascospores",
      "Fusion of zoospores"
    ],
    correct: 1,
    explanation: "NCERT Line: 'plasmogamy is brought about by fusion of two vegetative or somatic cells of different strains or genotypes.' Option A is wrong — sex organs and gametes are absent. Options C and D involve spore types not relevant to basidiomycete plasmogamy. Common mistake: Thinking basidiomycetes have gametes — they lack sex organs entirely."
  },
  {
    id: 132,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Easy",
    type: "Direct",
    q: "Basidiospores are produced on fruiting bodies called:",
    options: [
      "Ascocarps",
      "Basidiocarps",
      "Sporangia",
      "Conidiophores"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The basidia are arranged in fruiting bodies called basidiocarps.' Option A (ascocarps) = fruiting bodies of ascomycetes. Option C (sporangia) = spore-producing structure of phycomycetes. Option D (conidiophores) = conidia-bearing hyphae in ascomycetes. Common mistake: Confusing basidiocarps with ascocarps."
  },
  {
    id: 133,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Hard",
    type: "Match",
    q: "Match the fungal class with its correct example:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Phycomycetes &emsp;&emsp; (i) Agaricus<br>(b) Ascomycetes &emsp;&emsp; (ii) Alternaria<br>(c) Basidiomycetes &emsp; (iii) Albugo<br>(d) Deuteromycetes &emsp; (iv) Claviceps",
    options: [
      "a-iii, b-iv, c-i, d-ii",
      "a-iii, b-i, c-iv, d-ii",
      "a-iv, b-iii, c-i, d-ii",
      "a-ii, b-iv, c-iii, d-i"
    ],
    correct: 0,
    explanation: "From NCERT: Phycomycetes — Mucor, Rhizopus, Albugo (iii); Ascomycetes — Aspergillus, Claviceps, Neurospora (iv); Basidiomycetes — Agaricus, Ustilago, Puccinia (i); Deuteromycetes — Alternaria, Colletotrichum, Trichoderma (ii). So a-iii, b-iv, c-i, d-ii. Common mistake: Misplacing Albugo or Claviceps — Albugo is phycomycete, Claviceps is ascomycete."
  },
  {
    id: 134,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are examples of Basidiomycetes <b>EXCEPT</b>:",
    options: [
      "Agaricus",
      "Ustilago",
      "Puccinia",
      "Neurospora"
    ],
    correct: 3,
    explanation: "NCERT: Basidiomycetes examples — Agaricus (mushroom), Ustilago (smut) and Puccinia (rust fungus). Neurospora is an ASCOMYCETE. Common mistake: Placing Neurospora under Basidiomycetes — it is an ascomycete used in biochemical and genetic work."
  },
  {
    id: 135,
    topic: "Kingdom Fungi - Deuteromycetes",
    difficulty: "Easy",
    type: "Direct",
    q: "Deuteromycetes are commonly known as:",
    options: [
      "Sac-fungi",
      "Club fungi",
      "Imperfect fungi",
      "Slime moulds"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Commonly known as imperfect fungi because only the asexual or vegetative phases of these fungi are known.' Option A = ascomycetes; Option B = basidiomycetes; Option D = protistan group. Common mistake: Confusing imperfect fungi with other fungal groups."
  },
  {
    id: 136,
    topic: "Kingdom Fungi - Deuteromycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Deuteromycetes are called 'imperfect fungi' because:",
    options: [
      "Their cell wall lacks chitin",
      "Their mycelium is aseptate",
      "Only the asexual or vegetative phases are known",
      "They cannot form spores of any kind"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Commonly known as imperfect fungi because only the asexual or vegetative phases of these fungi are known.' Option D is wrong — they DO produce asexual spores (conidia). Option B is wrong — their mycelium is septate and branched. Option A is wrong — fungal cell walls generally have chitin. Common mistake: Thinking imperfect means 'no spores at all' — they produce conidia (asexual spores)."
  },
  {
    id: 137,
    topic: "Kingdom Fungi - Deuteromycetes",
    difficulty: "Hard",
    type: "Statement",
    q: "Once the perfect (sexual) stages of Deuteromycetes are discovered, they are often moved to:",
    options: [
      "Phycomycetes and Ascomycetes",
      "Ascomycetes and Basidiomycetes",
      "Phycomycetes and Basidiomycetes",
      "A new kingdom altogether"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Once perfect (sexual) stages of members of deuteromycetes were discovered, they were often moved to ascomycetes and basidiomycetes.' Not Phycomycetes. Common mistake: Including Phycomycetes as a destination for reclassified deuteromycetes."
  },
  {
    id: 138,
    topic: "Kingdom Fungi - Deuteromycetes",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following statements about Deuteromycetes are <b>correct</b>?<br>(i) Only asexual or vegetative phases are known<br>(ii) They reproduce by asexual spores known as conidia<br>(iii) Mycelium is aseptate and coenocytic<br>(iv) Some are decomposers of litter and help in mineral cycling<br>(v) Alternaria and Trichoderma are examples",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'only the asexual or vegetative phases...are known.' (ii) CORRECT — NCERT: 'reproduce only by asexual spores known as conidia.' (iii) INCORRECT — NCERT: 'mycelium is SEPTATE and branched', NOT aseptate. Key trap! (iv) CORRECT — NCERT: 'decomposers of litter and help in mineral cycling.' (v) CORRECT — NCERT: 'Alternaria, Colletotrichum and Trichoderma.' So 4 are correct. Common mistake: Saying deuteromycetes are aseptate — they are septate."
  },
  {
    id: 139,
    topic: "Kingdom Fungi - Cross-concept",
    difficulty: "Hard",
    type: "Match",
    q: "Match the fungal class with its mycelium type:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Phycomycetes &emsp;&emsp; (i) Septate and branched<br>(b) Ascomycetes &emsp;&emsp; (ii) Aseptate and coenocytic<br>(c) Basidiomycetes &emsp; (iii) Branched and septate<br>(d) Deuteromycetes &emsp; (iv) Septate and branched",
    options: [
      "a-ii, b-i, c-iii, d-iv",
      "a-i, b-ii, c-iii, d-iv",
      "a-ii, b-iii, c-i, d-iv",
      "a-iv, b-i, c-ii, d-iii"
    ],
    correct: 0,
    explanation: "From NCERT: Phycomycetes = aseptate and coenocytic (ii); Ascomycetes = branched and septate (i); Basidiomycetes = branched and septate (iii); Deuteromycetes = septate and branched (iv). Note: Ascomycetes, Basidiomycetes and Deuteromycetes ALL have septate mycelium — only Phycomycetes is aseptate. Common mistake: Assigning aseptate to any class other than Phycomycetes."
  },
  {
    id: 140,
    topic: "Kingdom Fungi - Cross-concept",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following fungal classes have <b>septate</b> mycelium?<br>(i) Phycomycetes<br>(ii) Ascomycetes<br>(iii) Basidiomycetes<br>(iv) Deuteromycetes",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "NCERT: Phycomycetes = ASEPTATE and coenocytic ❌; Ascomycetes = 'branched and septate' ✅; Basidiomycetes = 'branched and septate' ✅; Deuteromycetes = 'septate and branched' ✅. So 3 classes have septate mycelium. Only Phycomycetes is aseptate. Common mistake: Including Phycomycetes as septate or excluding one of the other three."
  },
  {
    id: 141,
    topic: "Kingdom Fungi - Cross-concept",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Basidiomycetes do not produce asexual spores.<br><b>Reason (R):</b> Sex organs are absent in Basidiomycetes.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 1,
    explanation: "Assertion: TRUE — NCERT says 'asexual spores are generally not found' in basidiomycetes. Reason: TRUE — NCERT says 'sex organs are absent.' However, R does NOT explain A. The absence of sex organs explains WHY plasmogamy occurs through somatic cell fusion — it does NOT explain why asexual spores are absent. These are two independent facts. Common mistake: Thinking absence of sex organs explains absence of asexual spores — they are unrelated characteristics."
  },
  {
    id: 142,
    topic: "Kingdom Fungi - Cross-concept",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Deuteromycetes are called imperfect fungi and are often reclassified.<br><b>Reason (R):</b> Once the sexual stages of deuteromycetes are discovered, they are moved to ascomycetes or basidiomycetes.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT: They are called imperfect fungi and when sexual stages are found, they are reclassified. Reason is TRUE — NCERT: 'were often moved to ascomycetes and basidiomycetes.' R correctly explains A — the reason for reclassification IS the discovery of sexual stages and subsequent movement to the correct class. Common mistake: Choosing B — but the reason is directly the CAUSE of the reclassification mentioned in the assertion."
  },
  {
    id: 143,
    topic: "Kingdom Fungi - Cross-concept",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements:<br>(A) In Phycomycetes, spores are endogenously produced in sporangium<br>(B) In Ascomycetes, conidia are produced endogenously on conidiophores<br>(C) In Basidiomycetes, basidiospores are exogenously produced on the basidium<br>(D) In Deuteromycetes, conidia are the only means of reproduction<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B and C only",
      "A, C and D only",
      "B, C and D only",
      "A, B and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) CORRECT — NCERT: 'spores are endogenously produced in sporangium.' (B) INCORRECT — Conidia are produced EXOGENOUSLY, not endogenously. NCERT: 'conidia produced exogenously on the special mycelium called conidiophores.' This is the KEY trap — endo/exo reversal. (C) CORRECT — NCERT: 'basidiospores are exogenously produced on the basidium.' (D) CORRECT — NCERT: 'reproduce only by asexual spores known as conidia.' So A, C and D are correct. Common mistake: Not catching the endo → exo switch in statement B."
  },
  {
    id: 144,
    topic: "Kingdom Fungi - Cross-concept",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following fungi have septate mycelium <b>EXCEPT</b>:",
    options: [
      "Penicillium",
      "Agaricus",
      "Rhizopus",
      "Alternaria"
    ],
    correct: 2,
    explanation: "Penicillium = Ascomycete (septate); Agaricus = Basidiomycete (septate); Alternaria = Deuteromycete (septate); Rhizopus = PHYCOMYCETE (ASEPTATE and coenocytic). Only Phycomycetes have aseptate mycelium. Common mistake: Not recognising Rhizopus as a Phycomycete — it is the bread mould."
  },
  {
    id: 145,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about coprophilous fungi?",
    options: [
      "They grow on decaying wood in moist places",
      "They grow on dung",
      "They grow as obligate parasites on mustard",
      "They grow as symbionts with algae"
    ],
    correct: 1,
    explanation: "NCERT Line: 'parasitic or coprophilous (growing on dung).' NCERT explicitly defines coprophilous as 'growing on dung.' Option A describes Phycomycetes habitat. Option C describes Albugo. Option D describes lichens. Common mistake: Not knowing the definition of coprophilous."
  },
  {
    id: 146,
    topic: "Kingdom Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "Select the <b>correct</b> statement regarding asexual spores in fungi:",
    options: [
      "Zoospores are non-motile spores",
      "Aplanospores are motile spores",
      "Conidia, sporangiospores and zoospores are types of asexual spores",
      "Ascospores and basidiospores are types of asexual spores"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Asexual reproduction is by spores called conidia or sporangiospores or zoospores, and sexual reproduction is by oospores, ascospores and basidiospores.' Option A is wrong — zoospores are MOTILE. Option B is wrong — aplanospores are NON-motile. Option D is wrong — ascospores and basidiospores are SEXUAL spores. Common mistake: Mixing up asexual spores (conidia, sporangiospores, zoospores) with sexual spores (oospores, ascospores, basidiospores)."
  },
  {
    id: 147,
    topic: "Kingdom Protista - Conceptual",
    difficulty: "Medium",
    type: "Statement",
    q: "Kingdom Protista is considered to form a link with the kingdoms dealing with:",
    options: [
      "Only plants and animals",
      "Only plants and fungi",
      "Plants, animals and fungi",
      "Only animals and fungi"
    ],
    correct: 2,
    explanation: "NCERT Line: 'This kingdom forms a link with the others dealing with plants, animals and fungi.' Protista links ALL three — plants (photosynthetic protists like Chrysophytes), animals (heterotrophic protozoans) and fungi (saprophytic slime moulds). Option A misses fungi. Option B misses animals. Common mistake: Excluding one of the three linked kingdoms."
  },
  {
    id: 148,
    topic: "Kingdom Protista - Conceptual",
    difficulty: "Medium",
    type: "AR",
    q: "<b>Assertion (A):</b> The boundaries of Kingdom Protista are not well defined.<br><b>Reason (R):</b> What may be a 'photosynthetic protistan' to one biologist may be 'a plant' to another.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "NCERT Lines: 'the boundaries of this kingdom are not well defined. What may be a photosynthetic protistan to one biologist may be a plant to another.' Both A and R are directly from NCERT. R correctly explains A — the lack of clear boundaries is BECAUSE of differing opinions on where to place certain organisms. Common mistake: Choosing B — but the example given in R is the exact reason NCERT gives for ill-defined boundaries."
  },
  {
    id: 149,
    topic: "Kingdom Fungi - Puccinia",
    difficulty: "Medium",
    type: "Statement",
    q: "Puccinia, which causes wheat rust, belongs to the class:",
    options: [
      "Phycomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    correct: 2,
    explanation: "NCERT Line (Basidiomycetes section): 'Some common members are Agaricus (mushroom), Ustilago (smut) and Puccinia (rust fungus).' Puccinia is clearly listed as a Basidiomycete. This is one of the MOST TESTED facts in NEET. Option B (Ascomycetes) is the most common wrong answer — students confuse the class. Common mistake: Placing Puccinia under Ascomycetes instead of Basidiomycetes."
  },
  {
    id: 150,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following are correctly matched?<br>(i) Agaricus — Mushroom<br>(ii) Ustilago — Rust fungus<br>(iii) Puccinia — Smut<br>(iv) Rhizopus — Bread mould<br>(v) Albugo — Parasitic fungus on mustard",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 1,
    explanation: "Analysis: (i) Agaricus = Mushroom ✅ — NCERT: 'Agaricus (mushroom)'. (ii) Ustilago = Rust fungus ❌ — Ustilago = SMUT, not rust. NCERT: 'Ustilago (smut)'. KEY TRAP! (iii) Puccinia = Smut ❌ — Puccinia = RUST fungus, not smut. NCERT: 'Puccinia (rust fungus)'. These two are SWAPPED — the classic NTA trap! (iv) Rhizopus = Bread mould ✅ — NCERT: 'Rhizopus (the bread mould)'. (v) Albugo = Parasitic fungus on mustard ✅ — NCERT: 'Albugo (the parasitic fungi on mustard)'. So 3 are correct. Common mistake: Confusing Ustilago (smut) with Puccinia (rust) — the #1 NTA trap in fungi examples."
  },
  {
    id: 151,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Easy",
    type: "Direct",
    q: "The scientific name of yeast is:",
    options: [
      "Neurospora",
      "Saccharomyces",
      "Penicillium",
      "Aspergillus"
    ],
    correct: 1,
    explanation: "NCERT Line: 'rarely unicellular, e.g., yeast (Saccharomyces).' The scientific name is explicitly given in parentheses. Option A (Neurospora) = used in genetic work. Option C (Penicillium) = source of antibiotics. Option D (Aspergillus) = another ascomycete. Common mistake: Not memorising the scientific name — Saccharomyces is HIGH-YIELD for NEET."
  },
  {
    id: 152,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following pairs of edible ascomycetes are considered delicacies?",
    options: [
      "Morels and truffles",
      "Mushrooms and puffballs",
      "Mucor and Rhizopus",
      "Penicillium and Aspergillus"
    ],
    correct: 0,
    explanation: "NCERT Line: 'Many members like morels and truffles are edible and are considered delicacies.' Option B (mushrooms and puffballs) are basidiomycetes, not ascomycetes. Option C (Mucor and Rhizopus) are phycomycetes and not edible delicacies. Option D are not edible. Common mistake: Confusing edible ascomycetes (morels, truffles) with edible basidiomycetes (mushrooms)."
  },
  {
    id: 153,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Rusts and smuts are examples of which class of fungi that grow as parasites in living plant bodies?",
    options: [
      "Phycomycetes",
      "Ascomycetes",
      "Basidiomycetes",
      "Deuteromycetes"
    ],
    correct: 2,
    explanation: "NCERT Line: 'They grow in soil, on logs and tree stumps and in living plant bodies as parasites, e.g., rusts and smuts.' This is in the Basidiomycetes section. Puccinia (rust) and Ustilago (smut) are basidiomycetes. Common mistake: Placing rusts and smuts under Ascomycetes or Deuteromycetes."
  },
  {
    id: 154,
    topic: "Kingdom Fungi - Cross-concept",
    difficulty: "Hard",
    type: "Match",
    q: "Match the fungus with its common name/association:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Ustilago &emsp;&emsp;&emsp; (i) Bread mould<br>(b) Puccinia &emsp;&emsp;&emsp; (ii) Smut<br>(c) Rhizopus &emsp;&emsp;&emsp; (iii) Rust fungus<br>(d) Albugo &emsp;&emsp;&emsp;&emsp; (iv) Parasitic on mustard",
    options: [
      "a-ii, b-iii, c-i, d-iv",
      "a-iii, b-ii, c-i, d-iv",
      "a-ii, b-iii, c-iv, d-i",
      "a-iv, b-iii, c-i, d-ii"
    ],
    correct: 0,
    explanation: "From NCERT: Ustilago = smut (ii); Puccinia = rust fungus (iii); Rhizopus = bread mould (i); Albugo = parasitic on mustard (iv). Option B swaps Ustilago (smut) and Puccinia (rust) — the most predictable NTA trap. Common mistake: Ustilago-smut and Puccinia-rust confusion is one of the TOP 5 most tested facts in NEET Biology."
  },
  {
    id: 155,
    topic: "Kingdom Fungi - Phycomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about Phycomycetes habitat?",
    options: [
      "They are found only in aquatic habitats",
      "They are found in aquatic habitats, on decaying wood in moist places, or as obligate parasites on plants",
      "They are found only in soil as saprophytes",
      "They are found exclusively on living animals as parasites"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Members of phycomycetes are found in aquatic habitats and on decaying wood in moist and damp places or as obligate parasites on plants.' This includes THREE habitats — aquatic, decaying wood in moist places, and as obligate parasites on plants. Option A is too restrictive. Common mistake: Limiting phycomycetes to only aquatic habitats."
  },
  {
    id: 156,
    topic: "Kingdom Fungi - Absorption",
    difficulty: "Medium",
    type: "Statement",
    q: "Most fungi are heterotrophic and obtain their nutrition by:",
    options: [
      "Ingesting solid food particles",
      "Absorbing soluble organic matter from dead substrates",
      "Photosynthesis in the presence of sunlight",
      "Chemosynthesis using inorganic substances"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Most fungi are heterotrophic and absorb soluble organic matter from dead substrates and hence are called saprophytes.' Key word is 'ABSORB' — fungi do NOT ingest food like animals. Option A describes holozoic nutrition (animals). This absorption mode is a KEY distinguishing feature of fungi. Common mistake: Confusing absorption (fungi) with ingestion (animals)."
  },
  {
    id: 157,
    topic: "Cross-topic - Prokaryotic vs Eukaryotic",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following kingdoms in Whittaker's classification contain <b>eukaryotic</b> organisms?<br>(i) Monera<br>(ii) Protista<br>(iii) Fungi<br>(iv) Plantae<br>(v) Animalia",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "From Table 2.1: Monera = Prokaryotic ❌; Protista = Eukaryotic ✅; Fungi = Eukaryotic ✅; Plantae = Eukaryotic ✅; Animalia = Eukaryotic ✅. So 4 kingdoms are eukaryotic. Only Monera is prokaryotic. Common mistake: Including Monera as eukaryotic or excluding one of the four eukaryotic kingdoms."
  },
  {
    id: 158,
    topic: "Cross-topic - Nutrition Comparison",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following kingdoms show <b>BOTH</b> autotrophic and heterotrophic modes of nutrition?<br>(i) Monera<br>(ii) Protista<br>(iii) Fungi<br>(iv) Plantae<br>(v) Animalia",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 1,
    explanation: "From Table 2.1: Monera = Autotrophic (chemosynthetic + photosynthetic) AND Heterotrophic ✅; Protista = Autotrophic (photosynthetic) AND Heterotrophic ✅; Fungi = Heterotrophic ONLY ❌; Plantae = Autotrophic ONLY ❌; Animalia = Heterotrophic ONLY ❌. So 2 kingdoms (Monera and Protista) show BOTH modes. Common mistake: Including Fungi (strictly heterotrophic) or excluding Protista."
  },
  {
    id: 159,
    topic: "Cross-topic - Cell Wall Comparison",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements about cell wall composition:<br>(A) Monera — Polysaccharide and amino acid (noncellulosic)<br>(B) Fungi — Chitin and polysaccharides<br>(C) Plantae — Cellulose<br>(D) Dinoflagellates — Silica plates<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B, C and D",
      "A, B and C only",
      "A, C and D only",
      "B, C and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) CORRECT — Table 2.1: Monera cell wall = Noncellulosic (Polysaccharide + amino acid). (B) CORRECT — NCERT: 'cell walls of fungi are composed of chitin and polysaccharides.' (C) CORRECT — Table 2.1: Plantae cell wall = cellulose. (D) INCORRECT — Dinoflagellates have stiff CELLULOSE plates, NOT silica. Silica is for DIATOMS. Classic swap trap! So A, B and C are correct. Common mistake: Confusing diatom silica with dinoflagellate cellulose."
  },
  {
    id: 160,
    topic: "Cross-topic - Examples Classification",
    difficulty: "Hard",
    type: "Except",
    q: "All of the following organisms belong to Kingdom Protista <b>EXCEPT</b>:",
    options: [
      "Gonyaulax",
      "Euglena",
      "Nostoc",
      "Plasmodium"
    ],
    correct: 2,
    explanation: "Gonyaulax = dinoflagellate (Protista) ✅; Euglena = euglenoid (Protista) ✅; Nostoc = cyanobacteria (Kingdom MONERA) — it is prokaryotic ❌; Plasmodium = sporozoan (Protista) ✅. Nostoc belongs to Kingdom Monera because it is a prokaryotic cyanobacterium. Common mistake: Placing Nostoc under Protista because it's microscopic — but it's PROKARYOTIC, hence Monera."
  },
  {
    id: 161,
    topic: "Cross-topic - Comprehensive Classification",
    difficulty: "Hard",
    type: "Match",
    q: "Match the organism with its correct kingdom:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Anabaena &emsp;&emsp;&emsp; (i) Protista<br>(b) Amoeba &emsp;&emsp;&emsp; (ii) Monera<br>(c) Penicillium &emsp;&emsp; (iii) Fungi<br>(d) Paramoecium &emsp; (iv) Protista",
    options: [
      "a-ii, b-i, c-iii, d-iv",
      "a-i, b-ii, c-iii, d-iv",
      "a-ii, b-iv, c-iii, d-i",
      "a-iii, b-i, c-ii, d-iv"
    ],
    correct: 0,
    explanation: "From NCERT: Anabaena = cyanobacterium = Monera (ii); Amoeba = protozoan = Protista (i); Penicillium = ascomycete = Fungi (iii); Paramoecium = ciliated protozoan = Protista (iv). Option B swaps Anabaena and Amoeba — placing Anabaena in Protista (wrong — it's prokaryotic). Common mistake: Placing cyanobacteria (Anabaena, Nostoc) under Protista instead of Monera."
  },
  {
    id: 162,
    topic: "Kingdom Fungi - Basidiomycetes",
    difficulty: "Medium",
    type: "Direct",
    q: "The number of basidiospores produced per basidium is:",
    options: [
      "Two",
      "Four",
      "Eight",
      "Sixteen"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Karyogamy and meiosis take place in the basidium producing four basidiospores.' Meiosis produces 4 haploid cells, hence 4 basidiospores per basidium. Option C (eight) is the number of ascospores per ascus in some ascomycetes. Common mistake: Confusing the number of basidiospores (4) with ascospores (typically 8)."
  },
  {
    id: 163,
    topic: "Kingdom Fungi - Phycomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "In Phycomycetes, the sexual spore formed by fusion of two gametes is called:",
    options: [
      "Ascospore",
      "Basidiospore",
      "Zygospore",
      "Conidium"
    ],
    correct: 2,
    explanation: "NCERT Line: 'A zygospore is formed by fusion of two gametes.' Zygospore is the sexual spore specific to Phycomycetes. Option A = Ascomycetes sexual spore; Option B = Basidiomycetes sexual spore; Option D = asexual spore. Common mistake: Confusing zygospore (Phycomycetes) with oospore (also mentioned for Phycomycetes) or ascospore (Ascomycetes)."
  },
  {
    id: 164,
    topic: "Cross-topic - Silica Structures",
    difficulty: "Hard",
    type: "Statement",
    q: "Silica is found in which of the following structures?<br>(A) Cell walls of diatoms<br>(B) Shells of marine amoeboid protozoans<br>(C) Cell wall of dinoflagellates<br>(D) Pellicle of euglenoids",
    options: [
      "A and B only",
      "A, B and C",
      "A only",
      "A, B, C and D"
    ],
    correct: 0,
    explanation: "From NCERT: Diatoms — 'walls are embedded with silica' ✅; Marine amoeboid protozoans — 'Marine forms have silica shells on their surface' ✅; Dinoflagellates — have 'stiff CELLULOSE plates', NOT silica ❌; Euglenoids — have 'PROTEIN rich layer called pellicle', NOT silica ❌. So A and B only. Common mistake: Adding dinoflagellates (cellulose, not silica) to the silica list."
  },
  {
    id: 165,
    topic: "Kingdom Monera - Cyanobacteria",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following are habitats where cyanobacteria can be found?<br>(i) Freshwater<br>(ii) Marine<br>(iii) Terrestrial<br>(iv) Deep ocean trenches<br>(v) Polluted water bodies",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "NCERT Lines: 'freshwater/marine or terrestrial algae' + 'They often form blooms in polluted water bodies.' So (i) Freshwater ✅, (ii) Marine ✅, (iii) Terrestrial ✅, (iv) Deep ocean trenches ❌ — NOT specifically mentioned for cyanobacteria, (v) Polluted water bodies ✅ (bloom formation). 4 habitats are correct. Common mistake: Including deep ocean trenches — mentioned for bacteria generally but not specifically for cyanobacteria."
  },
  {
    id: 166,
    topic: "Kingdom Protista - Slime Moulds",
    difficulty: "Medium",
    type: "Statement",
    q: "Select the <b>correct</b> statement about the feeding mechanism of slime moulds:",
    options: [
      "They absorb nutrients through their cell wall like fungi",
      "They are photosynthetic and prepare their own food",
      "Their body moves along decaying twigs and leaves engulfing organic material",
      "They are parasitic and depend on living host organisms"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The body moves along decaying twigs and leaves engulfing organic material.' Key word: ENGULFING — this is phagocytosis-like behaviour, different from fungal absorption. Option A describes fungal nutrition. Common mistake: Assuming slime moulds absorb like fungi — they ENGULF organic material."
  },
  {
    id: 167,
    topic: "Cross-topic - Saprophytes vs Parasites",
    difficulty: "Medium",
    type: "Statement",
    q: "In fungi, saprophytes and parasites differ in that:",
    options: [
      "Saprophytes absorb organic matter from dead substrates while parasites depend on living organisms",
      "Saprophytes depend on living organisms while parasites absorb from dead substrates",
      "Both saprophytes and parasites feed on dead organic matter",
      "Both saprophytes and parasites depend on living organisms"
    ],
    correct: 0,
    explanation: "NCERT Lines: 'absorb soluble organic matter from dead substrates and hence are called saprophytes. Those that depend on living plants and animals are called parasites.' Option B reverses the definitions — the classic NTA swap trap. Common mistake: Reversing saprophyte (dead) and parasite (living) definitions."
  },
  {
    id: 168,
    topic: "Kingdom Fungi - Ascomycetes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about the fruiting bodies of Ascomycetes?",
    options: [
      "They are called basidiocarps and contain basidia",
      "They are called ascocarps and contain sac-like asci",
      "They are called sporangia and contain zoospores",
      "They are called conidiophores and contain conidia"
    ],
    correct: 1,
    explanation: "NCERT Line: 'These asci are arranged in different types of fruiting bodies called ascocarps.' Option A describes Basidiomycetes. Option C describes Phycomycetes. Option D — conidiophores bear conidia but are NOT fruiting bodies. Common mistake: Confusing ascocarps (Ascomycetes) with basidiocarps (Basidiomycetes)."
  },
  {
    id: 169,
    topic: "Cross-topic - Endogenous vs Exogenous",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following spore-producing structures produce spores <b>endogenously</b>?<br>(i) Sporangium in Phycomycetes<br>(ii) Conidiophores in Ascomycetes<br>(iii) Asci in Ascomycetes<br>(iv) Basidia in Basidiomycetes",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 1,
    explanation: "From NCERT: (i) Sporangium — 'endogenously produced in sporangium' ✅ ENDOGENOUS; (ii) Conidiophores — 'conidia produced exogenously on conidiophores' ❌ EXOGENOUS; (iii) Asci — 'ascospores produced endogenously in sac like asci' ✅ ENDOGENOUS; (iv) Basidia — 'basidiospores are exogenously produced on the basidium' ❌ EXOGENOUS. So 2 structures produce spores endogenously. The endogenous/exogenous pattern: Sporangium (ENDO), Conidiophores (EXO), Asci (ENDO), Basidia (EXO). Common mistake: This is the MOST TESTED pattern — inside structures (sporangium, asci) = endogenous; on surface structures (conidiophores, basidia) = exogenous."
  },
  {
    id: 170,
    topic: "Cross-topic - Fungal Classes Comparison",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements:<br>(A) Phycomycetes — aseptate, coenocytic, zygospore<br>(B) Ascomycetes — septate, conidia (exogenous), ascospores (endogenous)<br>(C) Basidiomycetes — septate, sex organs present, basidiospores (endogenous)<br>(D) Deuteromycetes — septate, only conidia, no known sexual stage<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B, C and D",
      "A, B and D only",
      "A, C and D only",
      "B, C and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) CORRECT — Phycomycetes: aseptate, coenocytic, zygospore. (B) CORRECT — Ascomycetes: septate, conidia exogenous, ascospores endogenous. (C) INCORRECT — TWO errors: sex organs are ABSENT (not present), and basidiospores are EXOGENOUS (not endogenous). Double trap! (D) CORRECT — Deuteromycetes: septate, only conidia, no known sexual stage. So A, B and D are correct. Common mistake: Missing both errors in statement C — sex organs absent + basidiospores exogenous."
  },
  {
    id: 171,
    topic: "Cross-topic - Disease and Organism",
    difficulty: "Hard",
    type: "Except",
    q: "All of the following disease-causing organisms belong to Kingdom Protista <b>EXCEPT</b>:",
    options: [
      "Plasmodium",
      "Trypanosoma",
      "Entamoeba",
      "Puccinia"
    ],
    correct: 3,
    explanation: "Plasmodium = sporozoan (Protista) ✅; Trypanosoma = flagellated protozoan (Protista) ✅; Entamoeba = amoeboid protozoan (Protista) ✅; Puccinia = rust fungus (Kingdom Fungi — Basidiomycetes) ❌. Puccinia causes wheat rust and belongs to Kingdom Fungi. Common mistake: Including Puccinia under Protista because it causes disease."
  },
  {
    id: 172,
    topic: "Kingdom Fungi - Deuteromycetes",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are examples of Deuteromycetes <b>EXCEPT</b>:",
    options: [
      "Alternaria",
      "Colletotrichum",
      "Trichoderma",
      "Claviceps"
    ],
    correct: 3,
    explanation: "NCERT: Deuteromycetes examples — 'Alternaria, Colletotrichum and Trichoderma.' Claviceps belongs to ASCOMYCETES. NCERT lists 'Aspergillus, Claviceps and Neurospora' as ascomycete examples. Common mistake: Misplacing Claviceps — it's an Ascomycete, not a Deuteromycete."
  },
  {
    id: 173,
    topic: "Cross-topic - Body Organisation",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following kingdoms has body organisation described as 'multicellular/loose tissue' in Whittaker's classification?",
    options: [
      "Monera",
      "Protista",
      "Fungi",
      "Plantae"
    ],
    correct: 2,
    explanation: "From Table 2.1: Monera = Cellular; Protista = Cellular; Fungi = Multicellular/loose tissue; Plantae = Tissue/organ; Animalia = Tissue/organ/organ system. Fungi have the unique 'multicellular/loose tissue' body organisation. Common mistake: Assigning tissue/organ level to fungi — that's for Plantae."
  },
  {
    id: 174,
    topic: "Cross-topic - Complete Kingdom Comparison",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about Whittaker's Five Kingdom classification are <b>correct</b>?<br>(i) Monera includes all prokaryotic organisms<br>(ii) Protista includes all unicellular eukaryotic organisms<br>(iii) Fungi are exclusively autotrophic<br>(iv) Plantae body organisation is tissue/organ level<br>(v) Animalia shows heterotrophic nutrition including holozoic mode",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — All prokaryotes in Monera. (ii) CORRECT — All unicellular eukaryotes in Protista. (iii) INCORRECT — Fungi are HETEROTROPHIC, not autotrophic. Key trap! (iv) CORRECT — Table 2.1: Plantae = Tissue/organ. (v) CORRECT — Table 2.1: Animalia = Heterotrophic (Holozoic/Saprophytic etc.). So 4 are correct. Common mistake: Thinking fungi have any autotrophic members — they are exclusively heterotrophic."
  },
  {
    id: 175,
    topic: "Kingdom Fungi - Ascomycetes Detail",
    difficulty: "Medium",
    type: "Statement",
    q: "In Ascomycetes, conidia on germination produce:",
    options: [
      "Ascospores",
      "Sporangia",
      "Mycelium",
      "Basidiospores"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Conidia on germination produce mycelium.' This is a direct NCERT fact. Conidia are asexual spores that grow into new mycelium when conditions are favourable. Options A, B, D are incorrect — conidia don't produce other spore types directly. Common mistake: Thinking conidia produce more spores instead of mycelium."
  },
  {
    id: 176,
    topic: "Cross-topic - Comprehensive Organism-Kingdom",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following organisms are correctly placed in their respective kingdoms?<br>(i) Nostoc — Monera<br>(ii) Euglena — Protista<br>(iii) Agaricus — Fungi (Basidiomycetes)<br>(iv) Saccharomyces — Protista<br>(v) Gonyaulax — Protista",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) Nostoc — Monera ✅ (cyanobacterium = prokaryote). (ii) Euglena — Protista ✅ (euglenoid = eukaryotic unicellular). (iii) Agaricus — Fungi (Basidiomycetes) ✅ (mushroom). (iv) Saccharomyces — Protista ❌ — Saccharomyces (yeast) belongs to Kingdom FUNGI (Ascomycetes), NOT Protista. KEY TRAP! (v) Gonyaulax — Protista ✅ (dinoflagellate). So 4 are correct. Common mistake: Placing yeast (Saccharomyces) under Protista because it's unicellular — but it's a FUNGUS (Ascomycete)."
  },
  {
    id: 177,
    topic: "Kingdom Plantae",
    difficulty: "Easy",
    type: "Direct",
    q: "Kingdom Plantae includes all eukaryotic organisms that contain:",
    options: [
      "Chitin",
      "Chlorophyll",
      "Cellulose only",
      "Peptidoglycan"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Kingdom Plantae includes all eukaryotic chlorophyll-containing organisms commonly called plants.' The defining character is chlorophyll. Option C (cellulose) is a cell wall component, not the defining criterion of the kingdom. Option A = fungi cell wall. Option D = bacterial cell wall. Common mistake: Choosing cellulose (cell wall) instead of chlorophyll (the defining feature)."
  },
  {
    id: 178,
    topic: "Kingdom Plantae",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following statements about Kingdom Plantae is <b>correct</b>?",
    options: [
      "All members of Plantae are completely autotrophic",
      "A few members are partially heterotrophic such as insectivorous plants or parasites",
      "All members are heterotrophic",
      "Members lack chlorophyll and depend on other organisms"
    ],
    correct: 1,
    explanation: "NCERT Line: 'A few members are partially heterotrophic such as the insectivorous plants or parasites.' Key word is 'PARTIALLY heterotrophic' — they still have chlorophyll and perform photosynthesis but supplement nutrition. Option A says 'completely autotrophic' — incorrect because of insectivorous plants and parasites. Common mistake: Thinking all plants are fully autotrophic — insectivorous plants and Cuscuta are exceptions."
  },
  {
    id: 179,
    topic: "Kingdom Plantae",
    difficulty: "Easy",
    type: "Direct",
    q: "Bladderwort and Venus fly trap are examples of:",
    options: [
      "Parasitic plants",
      "Saprophytic plants",
      "Insectivorous plants",
      "Epiphytic plants"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Bladderwort and Venus fly trap are examples of insectivorous plants.' These are partially heterotrophic — they trap and digest insects. Option A (parasitic) describes Cuscuta. Common mistake: Confusing insectivorous plants (Bladderwort, Venus fly trap) with parasitic plants (Cuscuta)."
  },
  {
    id: 180,
    topic: "Kingdom Plantae",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is a parasitic plant as mentioned in NCERT?",
    options: [
      "Venus fly trap",
      "Bladderwort",
      "Cuscuta",
      "Drosera"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Cuscuta is a parasite.' Venus fly trap and Bladderwort are INSECTIVOROUS (not parasitic). Drosera (sundew) is also insectivorous but not mentioned in this specific NCERT chapter. Common mistake: Confusing parasitic plants (Cuscuta) with insectivorous plants (Venus fly trap, Bladderwort)."
  },
  {
    id: 181,
    topic: "Kingdom Plantae",
    difficulty: "Medium",
    type: "Statement",
    q: "The cell wall of plant cells is mainly made of:",
    options: [
      "Chitin",
      "Cellulose",
      "Polysaccharide and amino acid",
      "Protein-rich pellicle"
    ],
    correct: 1,
    explanation: "NCERT Line: 'cell wall mainly made of cellulose.' Option A (chitin) = fungi cell wall. Option C = Monera cell wall (polysaccharide + amino acid). Option D = euglenoid outer covering (pellicle). Common mistake: Confusing cellulose (plants) with chitin (fungi) — one of the most tested comparisons in NEET."
  },
  {
    id: 182,
    topic: "Kingdom Plantae",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following groups are included under Kingdom Plantae?<br>(i) Algae<br>(ii) Bryophytes<br>(iii) Fungi<br>(iv) Pteridophytes<br>(v) Gymnosperms<br>(vi) Angiosperms",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Plantae includes algae, bryophytes, pteridophytes, gymnosperms and angiosperms.' So (i) ✅ (ii) ✅ (iii) ❌ — Fungi is a SEPARATE kingdom (iv) ✅ (v) ✅ (vi) ✅. Five groups are correct. Common mistake: Including Fungi under Plantae — Fungi is a separate kingdom in Whittaker's classification."
  },
  {
    id: 183,
    topic: "Kingdom Plantae",
    difficulty: "Medium",
    type: "Statement",
    q: "The life cycle of plants has two distinct phases that alternate with each other. These are:",
    options: [
      "The haploid sporophytic and the diploid gametophytic",
      "The diploid sporophytic and the haploid gametophytic",
      "The diploid sporophytic and the diploid gametophytic",
      "The haploid sporophytic and the haploid gametophytic"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Life cycle of plants has two distinct phases – the diploid sporophytic and the haploid gametophytic – that alternate with each other.' Sporophytic = DIPLOID (2n); Gametophytic = HAPLOID (n). Option A reverses the ploidy — the #1 NTA trap on this topic. Common mistake: Swapping diploid/haploid between sporophytic and gametophytic phases."
  },
  {
    id: 184,
    topic: "Kingdom Plantae",
    difficulty: "Easy",
    type: "Direct",
    q: "The phenomenon in which diploid sporophytic and haploid gametophytic phases alternate with each other in the life cycle of plants is called:",
    options: [
      "Metagenesis",
      "Alternation of generations",
      "Metamorphosis",
      "Parthenogenesis"
    ],
    correct: 1,
    explanation: "NCERT Line: 'This phenomenon is called alternation of generations.' This is direct recall. Option A (metagenesis) refers to alternation of asexual and sexual generations in animals like Obelia. Option C (metamorphosis) is transformation during development. Option D (parthenogenesis) is development from unfertilised egg. Common mistake: Confusing alternation of generations (plants) with metagenesis (animals)."
  },
  {
    id: 185,
    topic: "Kingdom Plantae",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about Kingdom Plantae are <b>correct</b>?<br>(i) All members are completely autotrophic<br>(ii) Bladderwort and Venus fly trap are insectivorous plants<br>(iii) Cuscuta is an insectivorous plant<br>(iv) Plant cell wall is mainly made of cellulose<br>(v) Plants show alternation of generations",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 1,
    explanation: "Analysis: (i) INCORRECT — 'A few members are PARTIALLY heterotrophic' — not ALL completely autotrophic. (ii) CORRECT — NCERT directly states this. (iii) INCORRECT — Cuscuta is a PARASITE, not insectivorous. Classic swap trap! (iv) CORRECT — NCERT: 'cell wall mainly made of cellulose.' (v) CORRECT — NCERT: 'This phenomenon is called alternation of generations.' So 3 are correct. Common mistake: (a) Thinking all plants are completely autotrophic, (b) Calling Cuscuta insectivorous instead of parasitic."
  },
  {
    id: 186,
    topic: "Kingdom Plantae",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Insectivorous plants like Bladderwort and Venus fly trap are considered partially heterotrophic.<br><b>Reason (R):</b> These plants completely lack chlorophyll and cannot perform photosynthesis.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "Assertion is TRUE — NCERT: 'A few members are partially heterotrophic such as the insectivorous plants.' Reason is FALSE — Insectivorous plants DO have chlorophyll and perform photosynthesis. They are 'PARTIALLY' heterotrophic — they supplement their nutrition by trapping insects (mainly for nitrogen). NCERT says Plantae includes 'chlorophyll-containing organisms.' Common mistake: Thinking insectivorous plants lack chlorophyll — they have it but supplement nutrition by catching insects."
  },
  {
    id: 187,
    topic: "Kingdom Plantae",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are included under Kingdom Plantae <b>EXCEPT</b>:",
    options: [
      "Algae",
      "Bryophytes",
      "Fungi",
      "Gymnosperms"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Plantae includes algae, bryophytes, pteridophytes, gymnosperms and angiosperms.' Fungi is a SEPARATE kingdom — Kingdom Fungi. It was placed under Plants in the old Two Kingdom classification but was separated due to chitin cell wall and heterotrophic nature. Common mistake: Including fungi under Plantae — an error from the old classification system."
  },
  {
    id: 188,
    topic: "Kingdom Animalia",
    difficulty: "Easy",
    type: "Direct",
    q: "Kingdom Animalia is characterised by organisms that are:",
    options: [
      "Autotrophic, prokaryotic and unicellular",
      "Heterotrophic, eukaryotic and multicellular",
      "Heterotrophic, prokaryotic and multicellular",
      "Autotrophic, eukaryotic and multicellular"
    ],
    correct: 1,
    explanation: "NCERT Line: 'This kingdom is characterised by heterotrophic eukaryotic organisms that are multicellular.' All three characteristics must be present: heterotrophic + eukaryotic + multicellular. Option C says 'prokaryotic' — animals are eukaryotic. Option D says 'autotrophic' — animals are heterotrophic. Common mistake: Confusing prokaryotic with eukaryotic."
  },
  {
    id: 189,
    topic: "Kingdom Animalia",
    difficulty: "Easy",
    type: "Direct",
    q: "Animal cells differ from plant cells in that animal cells:",
    options: [
      "Have cell walls made of chitin",
      "Lack cell walls",
      "Have cell walls made of cellulose",
      "Have cell walls made of peptidoglycan"
    ],
    correct: 1,
    explanation: "NCERT Line: 'their cells lack cell walls.' This is a fundamental difference between animal and plant cells. Option A (chitin) = fungi. Option C (cellulose) = plants. Option D (peptidoglycan) = bacteria. Common mistake: Assigning any type of cell wall to animal cells."
  },
  {
    id: 190,
    topic: "Kingdom Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "Animals store food reserves as:",
    options: [
      "Starch and cellulose",
      "Glycogen or fat",
      "Starch or fat",
      "Glycogen or starch"
    ],
    correct: 1,
    explanation: "NCERT Line: 'store food reserves as glycogen or fat.' STARCH is the storage form in PLANTS, not animals. Option A includes starch AND cellulose — both are plant-associated. Option C replaces glycogen with starch — a one-word trap. Option D includes starch instead of fat. Common mistake: Choosing 'starch' instead of 'glycogen' — starch = plants, glycogen = animals."
  },
  {
    id: 191,
    topic: "Kingdom Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "The mode of nutrition in animals is:",
    options: [
      "Saprophytic — by absorption of organic matter",
      "Holozoic — by ingestion of food",
      "Autotrophic — by photosynthesis",
      "Holozoic — by absorption of food"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Their mode of nutrition is holozoic – by ingestion of food.' Key: HOLOZOIC = INGESTION (not absorption). Option A describes fungal nutrition. Option D is the most tempting trap — it says holozoic but changes 'ingestion' to 'absorption'. Absorption is for fungi, ingestion is for animals. Common mistake: Confusing ingestion (animals) with absorption (fungi)."
  },
  {
    id: 192,
    topic: "Kingdom Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>incorrect</b> about Kingdom Animalia?",
    options: [
      "They digest their food in an internal cavity",
      "They follow a definite growth pattern",
      "All animals are capable of locomotion",
      "Higher forms show elaborate sensory and neuromotor mechanism"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Most of them are capable of locomotion.' NCERT says 'MOST', not 'ALL'. Option C states 'all animals' — this is incorrect. Some animals like sponges, corals, barnacles are sessile. Options A, B, D are all directly from NCERT. Common mistake: Assuming all animals can move — NCERT specifically says 'most', not 'all'."
  },
  {
    id: 193,
    topic: "Kingdom Animalia",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about Kingdom Animalia are <b>correct</b>?<br>(i) They are heterotrophic eukaryotic multicellular organisms<br>(ii) Their cells have cell walls made of cellulose<br>(iii) Food reserves are stored as glycogen or fat<br>(iv) Mode of nutrition is holozoic — by ingestion<br>(v) All animals are capable of locomotion<br>(vi) Sexual reproduction involves copulation followed by embryological development",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'heterotrophic eukaryotic organisms that are multicellular.' (ii) INCORRECT — NCERT: 'cells LACK cell walls.' Key trap! (iii) CORRECT — NCERT: 'store food reserves as glycogen or fat.' (iv) CORRECT — NCERT: 'holozoic – by ingestion of food.' (v) INCORRECT — NCERT says 'MOST of them are capable of locomotion', not ALL. (vi) CORRECT — NCERT: 'copulation of male and female followed by embryological development.' So 4 are correct. Common mistake: Including cell wall statement and 'all animals' locomotion statement as correct."
  },
  {
    id: 194,
    topic: "Kingdom Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "Animals grow into adults that have:",
    options: [
      "An indefinite shape and size with continuous growth",
      "A definite shape and size following a definite growth pattern",
      "Variable shape and size depending on environment",
      "No specific growth pattern"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They follow a definite growth pattern and grow into adults that have a definite shape and size.' Animals show DEFINITE growth (unlike plants which show indefinite growth). Option A describes plant growth pattern. Common mistake: Confusing definite growth (animals) with indefinite growth (plants)."
  },
  {
    id: 195,
    topic: "Kingdom Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about sexual reproduction in animals?",
    options: [
      "It involves cell fusion and zygote formation like in protists",
      "It is by copulation of male and female followed by embryological development",
      "It involves plasmogamy and karyogamy like in fungi",
      "It is primarily by spore formation"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The sexual reproduction is by copulation of male and female followed by embryological development.' Option A describes protistan sexual reproduction. Option C describes fungal sexual reproduction. Option D describes reproduction in fungi/lower plants. Common mistake: Applying terms from other kingdoms to animal reproduction."
  },
  {
    id: 196,
    topic: "Kingdom Animalia",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Animals directly or indirectly depend on plants for food.<br><b>Reason (R):</b> Animals are heterotrophic and cannot synthesise their own food.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT: 'They directly or indirectly depend on plants for food.' Reason is TRUE — Animals are heterotrophic (cannot make their own food). R correctly EXPLAINS A — BECAUSE animals cannot synthesise food (heterotrophic), they MUST depend on plants (autotrophs) directly or indirectly. Common mistake: Choosing B — but the inability to make food IS the reason for dependence on plants."
  },
  {
    id: 197,
    topic: "Cross-topic: Plantae vs Animalia",
    difficulty: "Hard",
    type: "Match",
    q: "Match the feature with the correct kingdom:<br><b>Column I (Feature)</b> &emsp;&emsp;&emsp; <b>Column II (Kingdom)</b><br>(a) Cell wall made of cellulose &emsp; (i) Animalia<br>(b) Food stored as glycogen &emsp;&emsp; (ii) Plantae<br>(c) Holozoic nutrition &emsp;&emsp;&emsp;&emsp; (iii) Animalia<br>(d) Alternation of generations &emsp; (iv) Plantae",
    options: [
      "a-ii, b-iii, c-i, d-iv",
      "a-ii, b-i, c-iii, d-iv",
      "a-i, b-ii, c-iii, d-iv",
      "a-ii, b-iii, c-iii, d-ii"
    ],
    correct: 1,
    explanation: "From NCERT: Cellulose cell wall = Plantae (ii); Glycogen storage = Animalia (i); Holozoic nutrition = Animalia (iii); Alternation of generations = Plantae (iv). Option A swaps glycogen to (iii) instead of (i) — numbering trap. Common mistake: Placing glycogen under Plantae — glycogen is the storage form in ANIMALS; plants store starch."
  },
  {
    id: 198,
    topic: "Cross-topic: Plantae vs Animalia",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements:<br>(A) Plants show alternation of generations while animals do not<br>(B) Plants store food as starch while animals store food as glycogen or fat<br>(C) Both plant and animal cells have cell walls made of cellulose<br>(D) Plants are autotrophic while animals are heterotrophic<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B and D only",
      "A, C and D only",
      "B, C and D only",
      "A, B, C and D"
    ],
    correct: 0,
    explanation: "Analysis: (A) CORRECT — Plants show alternation of generations (NCERT). Animals reproduce by copulation + embryological development. (B) CORRECT — Plants store starch; animals store glycogen or fat (NCERT). (C) INCORRECT — Animal cells LACK cell walls. NCERT: 'their cells lack cell walls.' Only plant cells have cellulose cell walls. KEY TRAP! (D) CORRECT — Plants = autotrophic (photosynthetic); Animals = heterotrophic (holozoic). So A, B and D are correct. Common mistake: Including statement C — animal cells do NOT have cell walls."
  },
  {
    id: 199,
    topic: "Cross-topic: Plantae vs Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is a distinguishing feature of Kingdom Animalia that sets it apart from Kingdom Plantae?",
    options: [
      "Presence of chloroplasts",
      "Food stored as glycogen or fat",
      "Cell wall made of cellulose",
      "Alternation of generations"
    ],
    correct: 1,
    explanation: "Options A, C, D are features of Kingdom PLANTAE. Glycogen/fat storage is unique to ANIMALIA. Plants store food as starch. NCERT: 'store food reserves as glycogen or fat.' Common mistake: Not recognising glycogen as the animal storage carbohydrate."
  },
  {
    id: 200,
    topic: "Cross-topic: All Five Kingdoms",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following kingdoms in Whittaker's classification have organisms that are <b>exclusively heterotrophic</b>?<br>(i) Monera<br>(ii) Protista<br>(iii) Fungi<br>(iv) Plantae<br>(v) Animalia",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 1,
    explanation: "Analysis: (i) Monera — BOTH autotrophic and heterotrophic ❌. (ii) Protista — BOTH autotrophic and heterotrophic ❌. (iii) Fungi — exclusively HETEROTROPHIC ✅. (iv) Plantae — primarily AUTOTROPHIC (a few partially heterotrophic but kingdom is autotrophic) ❌. (v) Animalia — exclusively HETEROTROPHIC ✅. So 2 kingdoms are exclusively heterotrophic: Fungi and Animalia. Common mistake: Including Monera or Protista (both have auto + hetero members) as exclusively heterotrophic."
  },
  {
    id: 201,
    topic: "Cross-topic: Cell Wall Comparison",
    difficulty: "Hard",
    type: "Match",
    q: "Match the kingdom with its cell wall status:<br><b>Column I</b> &emsp;&emsp; <b>Column II</b><br>(a) Monera &emsp;&emsp; (i) Cellulose cell wall<br>(b) Fungi &emsp;&emsp;&emsp; (ii) Cell wall absent<br>(c) Plantae &emsp;&emsp; (iii) Chitin and polysaccharides<br>(d) Animalia &emsp; (iv) Noncellulosic (polysaccharide + amino acid)",
    options: [
      "a-iv, b-iii, c-i, d-ii",
      "a-iii, b-iv, c-i, d-ii",
      "a-iv, b-i, c-iii, d-ii",
      "a-ii, b-iii, c-i, d-iv"
    ],
    correct: 0,
    explanation: "From NCERT/Table 2.1: Monera = Noncellulosic polysaccharide + amino acid (iv); Fungi = Chitin + polysaccharides (iii); Plantae = Cellulose (i); Animalia = Absent (ii). Option B swaps Monera and Fungi — the most tempting trap. Common mistake: Confusing Monera wall (polysaccharide + amino acid) with Fungi wall (chitin + polysaccharides)."
  },
  {
    id: 202,
    topic: "Cross-topic: Nutrition Across Kingdoms",
    difficulty: "Hard",
    type: "Statement",
    q: "Which of the following correctly describes the mode of nutrition in fungi and animals respectively?",
    options: [
      "Both show holozoic nutrition by ingestion",
      "Fungi — absorption of soluble organic matter; Animals — holozoic by ingestion",
      "Fungi — holozoic by ingestion; Animals — absorption of soluble organic matter",
      "Both show saprophytic nutrition by absorption"
    ],
    correct: 1,
    explanation: "NCERT: Fungi = 'absorb soluble organic matter from dead substrates' (absorption); Animals = 'holozoic – by ingestion of food.' Option C reverses the modes — classic NTA swap. Option A says both are holozoic — fungi are NOT holozoic. Common mistake: Confusing absorption (fungi) with ingestion (animals) — both are heterotrophic but differ in mechanism."
  },
  {
    id: 203,
    topic: "Kingdom Plantae",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> In the life cycle of plants, the lengths of haploid and diploid phases vary among different groups.<br><b>Reason (R):</b> Plants show alternation of generations where diploid sporophytic and haploid gametophytic phases alternate.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT: 'The lengths of the haploid and diploid phases...vary among different groups in plants.' Reason is TRUE — NCERT: 'two distinct phases – the diploid sporophytic and the haploid gametophytic – that alternate with each other.' R explains A because the varying dominance of sporophytic and gametophytic phases in different plant groups IS the reason for varying lengths. Common mistake: Choosing B — but alternation of generations directly explains why phase lengths vary."
  },
  {
    id: 204,
    topic: "Cross-topic: Partially Heterotrophic",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are partially heterotrophic members of Kingdom Plantae <b>EXCEPT</b>:",
    options: [
      "Bladderwort",
      "Venus fly trap",
      "Cuscuta",
      "Spirogyra"
    ],
    correct: 3,
    explanation: "NCERT mentions Bladderwort and Venus fly trap as insectivorous plants (partially heterotrophic) and Cuscuta as a parasite (partially heterotrophic). Spirogyra is a fully AUTOTROPHIC green alga — it is not partially heterotrophic. Common mistake: Including any random alga as partially heterotrophic."
  },
  {
    id: 205,
    topic: "Kingdom Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "Elaborate sensory and neuromotor mechanisms are seen in:",
    options: [
      "All forms of animals",
      "Lower forms of animals only",
      "Higher forms of animals",
      "All members of Kingdom Plantae"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Higher forms show elaborate sensory and neuromotor mechanism.' Key word: HIGHER forms — not all animals. Lower forms like sponges have very basic organisation. Common mistake: Saying all animals have elaborate sensory mechanisms — NCERT specifically says 'higher forms'."
  },
  {
    id: 206,
    topic: "Cross-topic: Five Kingdoms Overview",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements are <b>correct</b>?<br>(i) Plantae members have eukaryotic cells with prominent chloroplasts<br>(ii) Animalia members digest food in an internal cavity<br>(iii) Plants follow indefinite growth while animals follow definite growth<br>(iv) Animals store food as starch<br>(v) Cuscuta is an insectivorous plant",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'eukaryotic structure with prominent chloroplasts.' (ii) CORRECT — NCERT: 'They digest their food in an internal cavity.' (iii) CORRECT — NCERT says animals have 'definite growth pattern' and 'definite shape and size'; plants generally show indefinite growth. (iv) INCORRECT — Animals store glycogen or fat, NOT starch. Starch = plants. (v) INCORRECT — Cuscuta is a PARASITE, not insectivorous. Bladderwort and Venus fly trap are insectivorous. So 3 are correct. Common mistake: (a) Starch vs glycogen confusion, (b) Cuscuta = parasite, not insectivorous."
  },
  {
    id: 207,
    topic: "Cross-topic: Storage Products",
    difficulty: "Medium",
    type: "Statement",
    q: "The food storage forms in plants and animals respectively are:",
    options: [
      "Glycogen and starch",
      "Starch and glycogen/fat",
      "Fat and glycogen",
      "Cellulose and chitin"
    ],
    correct: 1,
    explanation: "Plants store food as STARCH; Animals store food as GLYCOGEN or FAT. NCERT (Animalia): 'store food reserves as glycogen or fat.' Option A reverses the order — glycogen is for animals, starch is for plants. Option D lists structural components, not storage forms. Common mistake: Reversing the storage products — starch (plants) vs glycogen (animals)."
  },
  {
    id: 208,
    topic: "Cross-topic: Comprehensive",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Animals follow a definite growth pattern unlike plants.<br><b>Reason (R):</b> Animals grow into adults that have a definite shape and size.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT: 'They follow a definite growth pattern.' Plants generally show open/indefinite growth. Reason is TRUE — NCERT: 'grow into adults that have a definite shape and size.' R explains A because having a definite final shape and size IS the manifestation/explanation of definite growth pattern. Common mistake: Choosing B — but R directly describes WHAT 'definite growth pattern' means, hence it explains A."
  },
  {
    id: 209,
    topic: "Viruses",
    difficulty: "Easy",
    type: "Direct",
    q: "The word 'virus' means:",
    options: [
      "Small organism",
      "Venom or poisonous fluid",
      "Infectious particle",
      "Crystalline body"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Virus means venom or poisonous fluid.' This is a direct recall question — exact NCERT phrase. Option C sounds logical but is not the literal meaning given in NCERT. Common mistake: Choosing a logical-sounding option instead of the exact NCERT definition."
  },
  {
    id: 210,
    topic: "Viruses",
    difficulty: "Easy",
    type: "Direct",
    q: "Dmitri Ivanowsky (1892) recognised certain microbes as the causal organism of:",
    options: [
      "Potato spindle tuber disease",
      "Mosaic disease of tobacco",
      "Mad cow disease",
      "Mumps"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Dmitri Ivanowsky (1892) recognised certain microbes as causal organism of the mosaic disease of tobacco.' Option A (potato spindle tuber) is caused by a viroid, discovered by Diener. Option C is caused by prions. Common mistake: Confusing Ivanowsky's discovery (tobacco mosaic) with Diener's discovery (potato spindle tuber)."
  },
  {
    id: 211,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following scientists named the pathogen as 'virus' and called the fluid as <i>Contagium vivum fluidum</i>?",
    options: [
      "Dmitri Ivanowsky",
      "M.W. Beijerinck",
      "W.M. Stanley",
      "T.O. Diener"
    ],
    correct: 1,
    explanation: "NCERT Line: 'M.W. Beijerinck (1898) demonstrated that the extract of the infected plants of tobacco could cause infection in healthy plants and named the new pathogen virus and called the fluid as Contagium vivum fluidum.' Option A (Ivanowsky) is the most tempting trap — he discovered the causal agent but did NOT name it. Beijerinck gave the name 'virus' and coined 'Contagium vivum fluidum'. Common mistake: Attributing the naming to Ivanowsky instead of Beijerinck."
  },
  {
    id: 212,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Match",
    q: "Match the scientist with the correct contribution:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Ivanowsky &emsp;&emsp; (i) Crystallisation of viruses<br>(b) Beijerinck &emsp;&emsp;&emsp; (ii) Discovery of causal agent of TMV<br>(c) Stanley &emsp;&emsp;&emsp;&emsp; (iii) Named virus; coined Contagium vivum fluidum",
    options: [
      "a-ii, b-iii, c-i",
      "a-iii, b-ii, c-i",
      "a-i, b-iii, c-ii",
      "a-ii, b-i, c-iii"
    ],
    correct: 0,
    explanation: "From NCERT: Ivanowsky (1892) = recognised causal organism of TMV (ii); Beijerinck (1898) = named 'virus', coined Contagium vivum fluidum (iii); Stanley (1935) = crystallisation of viruses (i). Option B swaps Ivanowsky and Beijerinck — the most common NTA trap. Option D swaps Beijerinck and Stanley. Common mistake: Mixing up the three scientists' contributions."
  },
  {
    id: 213,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "W.M. Stanley (1935) showed that:",
    options: [
      "Viruses are the causal organisms of tobacco mosaic disease",
      "The extract of infected tobacco plants can cause infection in healthy plants",
      "Viruses could be crystallised and crystals consist largely of proteins",
      "Viruses contain both RNA and DNA as genetic material"
    ],
    correct: 2,
    explanation: "NCERT Line: 'W.M. Stanley (1935) showed that viruses could be crystallised and crystals consist largely of proteins.' Option A = Ivanowsky's contribution. Option B = Beijerinck's contribution. Option D is factually wrong — no virus has both RNA and DNA. Common mistake: Attributing crystallisation to Ivanowsky or Beijerinck instead of Stanley."
  },
  {
    id: 214,
    topic: "Viruses",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about viruses are <b>correct</b>?<br>(i) Dmitri Ivanowsky (1892) discovered the mosaic disease of tobacco<br>(ii) M.W. Beijerinck named the fluid as Contagium vivum fluidum<br>(iii) W.M. Stanley (1935) crystallised viruses<br>(iv) Stanley showed that crystals consist largely of nucleic acids<br>(v) Viruses passed through bacteria-proof filters",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'Ivanowsky (1892) recognised...mosaic disease of tobacco.' (ii) CORRECT — NCERT: 'called the fluid as Contagium vivum fluidum.' (iii) CORRECT — NCERT: 'Stanley (1935) showed that viruses could be crystallised.' (iv) INCORRECT — Stanley showed crystals consist largely of PROTEINS, not nucleic acids. One-word trap! (v) CORRECT — NCERT: 'passed through bacteria-proof filters.' So 4 are correct. Common mistake: 'Proteins' switched to 'nucleic acids' — Stanley's crystals were largely PROTEIN."
  },
  {
    id: 215,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about viruses?",
    options: [
      "They are cellular organisms with a defined nucleus",
      "They are non-cellular organisms characterised by an inert crystalline structure outside the living cell",
      "They are free-living organisms that can replicate independently",
      "They have their own metabolic machinery"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The viruses are non-cellular organisms that are characterised by having an inert crystalline structure outside the living cell.' Options A, C, D all imply cellular characteristics — viruses are NON-cellular, cannot replicate independently, and lack metabolic machinery. Common mistake: Thinking viruses can replicate independently — they need host cell machinery."
  },
  {
    id: 216,
    topic: "Viruses",
    difficulty: "Easy",
    type: "Direct",
    q: "Viruses are:",
    options: [
      "Facultative parasites",
      "Obligate parasites",
      "Saprophytes",
      "Free-living organisms"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Viruses are obligate parasites.' They cannot survive or replicate outside a living host cell. Option A (facultative parasites) implies they can survive as free-living — viruses cannot. Common mistake: Confusing obligate (compulsory) with facultative (optional) parasitism."
  },
  {
    id: 217,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about viral genetic material?",
    options: [
      "All viruses contain both RNA and DNA",
      "A virus contains either RNA or DNA but never both",
      "All viruses contain only DNA",
      "All viruses contain only RNA"
    ],
    correct: 1,
    explanation: "NCERT Lines: 'viruses also contain genetic material, that could be either RNA or DNA. No virus contains both RNA and DNA.' This is one of the MOST TESTED NCERT lines. Option A directly contradicts NCERT. Options C and D are too restrictive. Common mistake: Thinking some viruses have both RNA and DNA — NCERT explicitly denies this."
  },
  {
    id: 218,
    topic: "Viruses",
    difficulty: "Hard",
    type: "Statement",
    q: "Which of the following correctly describes the genetic material of viruses that infect plants, animals and bacteria respectively?",
    options: [
      "dsDNA; ssRNA; ssRNA",
      "ssRNA; ssRNA or dsRNA or dsDNA; dsDNA",
      "dsDNA; dsDNA; ssRNA",
      "ssRNA; dsDNA only; ssRNA"
    ],
    correct: 1,
    explanation: "NCERT Lines: 'viruses that infect plants have single stranded RNA and viruses that infect animals have either single or double stranded RNA or double stranded DNA. Bacterial viruses or bacteriophages are usually double stranded DNA viruses.' So: Plant = ssRNA; Animal = ssRNA/dsRNA/dsDNA; Bacteria = dsDNA. Option A reverses plant and bacteria. Option C says plant = dsDNA which is wrong. Common mistake: Swapping plant virus (ssRNA) with bacteriophage (dsDNA) — the #1 NTA trap."
  },
  {
    id: 219,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "Bacteriophages (viruses that infect bacteria) are usually:",
    options: [
      "Single stranded RNA viruses",
      "Double stranded RNA viruses",
      "Single stranded DNA viruses",
      "Double stranded DNA viruses"
    ],
    correct: 3,
    explanation: "NCERT Line: 'Bacterial viruses or bacteriophages (viruses that infect the bacteria) are usually double stranded DNA viruses.' Option A (ssRNA) describes plant viruses — the most common swap. Common mistake: Assigning ssRNA to bacteriophages — ssRNA is for plant viruses."
  },
  {
    id: 220,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "The protein coat of a virus is called:",
    options: [
      "Capsomere",
      "Pellicle",
      "Capsid",
      "Glycocalyx"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The protein coat called capsid made of small subunits called capsomeres.' Capsid = the entire protein coat; Capsomeres = small subunits making up the capsid. Option A (capsomere) is the SUBUNIT, not the whole coat — this is the most tempting trap. Common mistake: Confusing capsid (whole coat) with capsomeres (subunits)."
  },
  {
    id: 221,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "The small subunits that make up the capsid of a virus are called:",
    options: [
      "Virions",
      "Capsomeres",
      "Prions",
      "Viroids"
    ],
    correct: 1,
    explanation: "NCERT Line: 'protein coat called capsid made of small subunits called capsomeres.' Option A (virions) refers to a complete virus particle — not from this specific NCERT text. Options C and D are completely different entities (infectious protein and free RNA respectively). Common mistake: Confusing capsomeres with virions."
  },
  {
    id: 222,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "Capsomeres in viruses are arranged in:",
    options: [
      "Helical or polyhedral geometric forms",
      "Spherical or cubical forms",
      "Linear or branched forms",
      "Amorphous or irregular forms"
    ],
    correct: 0,
    explanation: "NCERT Line: 'These capsomeres are arranged in helical or polyhedral geometric forms.' Only two arrangements are mentioned: helical and polyhedral. Options B, C, D are not mentioned in NCERT. Common mistake: Adding 'spherical' — NCERT says polyhedral, not spherical."
  },
  {
    id: 223,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are diseases caused by viruses <b>EXCEPT</b>:",
    options: [
      "Mumps",
      "Herpes",
      "Cholera",
      "Influenza"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Viruses cause diseases like mumps, small pox, herpes and influenza.' Cholera is a BACTERIAL disease (mentioned in Kingdom Monera section). Options A, B, D are all viral diseases per NCERT. Common mistake: Including cholera as a viral disease — it is caused by bacteria."
  },
  {
    id: 224,
    topic: "Viruses",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following are diseases caused by viruses as per NCERT?<br>(i) Mumps<br>(ii) Small pox<br>(iii) Tetanus<br>(iv) Herpes<br>(v) Influenza<br>(vi) AIDS",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 2,
    explanation: "NCERT Lines: 'Viruses cause diseases like mumps, small pox, herpes and influenza. AIDS in humans is also caused by a virus.' So (i) Mumps ✅, (ii) Small pox ✅, (iii) Tetanus ❌ — bacterial disease (mentioned in Monera), (iv) Herpes ✅, (v) Influenza ✅, (vi) AIDS ✅. Five are viral diseases. Common mistake: Including tetanus (bacterial) as a viral disease."
  },
  {
    id: 225,
    topic: "Viruses",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following are symptoms of viral infection in plants as per NCERT?<br>(i) Mosaic formation<br>(ii) Leaf rolling and curling<br>(iii) Yellowing and vein clearing<br>(iv) Dwarfing and stunted growth<br>(v) Root rotting",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "NCERT Line: 'In plants, the symptoms can be mosaic formation, leaf rolling and curling, yellowing and vein clearing, dwarfing and stunted growth.' So (i) ✅ (ii) ✅ (iii) ✅ (iv) ✅ (v) ❌ — Root rotting is NOT mentioned. Four symptoms are correct. Common mistake: Adding symptoms not listed in NCERT."
  },
  {
    id: 226,
    topic: "Viruses",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Viruses are not included in Whittaker's Five Kingdom Classification.<br><b>Reason (R):</b> Viruses are non-cellular organisms and are considered not truly 'living' as they lack a cell structure.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT: 'In the five kingdom classification of Whittaker there is no mention of...viruses.' Reason is TRUE — NCERT: 'Viruses did not find a place in classification since they are not considered truly living, if we understand living as those organisms that have a cell structure.' R correctly EXPLAINS A — viruses were excluded FROM the classification BECAUSE they are non-cellular and not truly living. Common mistake: Choosing B — but NCERT explicitly links the non-cellular nature to the exclusion from classification."
  },
  {
    id: 227,
    topic: "Viruses",
    difficulty: "Medium",
    type: "Statement",
    q: "A virus is described as a nucleoprotein because it contains:",
    options: [
      "Only nucleic acid without any protein",
      "Only protein without any nucleic acid",
      "Both nucleic acid (RNA or DNA) and protein (capsid)",
      "Lipid and carbohydrate in addition to nucleic acid"
    ],
    correct: 2,
    explanation: "NCERT Line: 'In addition to proteins, viruses also contain genetic material, that could be either RNA or DNA... A virus is a nucleoprotein.' Nucleoprotein = nucleic acid + protein. Option A describes viroids (free RNA, no protein). Option B describes prions (protein only). Common mistake: Not understanding nucleoprotein = nucleic acid + protein combination."
  },
  {
    id: 228,
    topic: "Viroids",
    difficulty: "Easy",
    type: "Direct",
    q: "Viroids were discovered by:",
    options: [
      "Dmitri Ivanowsky",
      "M.W. Beijerinck",
      "W.M. Stanley",
      "T.O. Diener"
    ],
    correct: 3,
    explanation: "NCERT Line: 'In 1971, T.O. Diener discovered a new infectious agent.' Options A, B, C are all associated with virus discoveries. Common mistake: Confusing Diener (viroids, 1971) with the three virus scientists."
  },
  {
    id: 229,
    topic: "Viroids",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about viroids?",
    options: [
      "They are larger than viruses and have a protein coat",
      "They are smaller than viruses and consist of free RNA lacking a protein coat",
      "They consist of abnormally folded proteins",
      "They contain double stranded DNA"
    ],
    correct: 1,
    explanation: "NCERT Lines: 'a new infectious agent that was smaller than viruses...It was found to be a free RNA; it lacked the protein coat that is found in viruses, hence the name viroid.' Option A reverses size and adds protein coat — double error. Option C describes PRIONS. Option D is wrong — viroids are free RNA. Common mistake: Confusing viroids (free RNA, no protein) with prions (abnormally folded protein)."
  },
  {
    id: 230,
    topic: "Viroids",
    difficulty: "Medium",
    type: "Statement",
    q: "The disease caused by viroid as mentioned in NCERT is:",
    options: [
      "Tobacco mosaic disease",
      "Potato spindle tuber disease",
      "Mad cow disease",
      "Citrus canker"
    ],
    correct: 1,
    explanation: "NCERT Line: 'caused potato spindle tuber disease.' Option A (TMV) = virus (Ivanowsky). Option C (mad cow disease) = prion. Option D (citrus canker) = bacterium. Common mistake: Confusing potato spindle tuber (viroid) with tobacco mosaic (virus)."
  },
  {
    id: 231,
    topic: "Viroids",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements about viroids are <b>correct</b>?<br>(i) They were discovered by T.O. Diener in 1971<br>(ii) They are larger than viruses<br>(iii) They are free RNA lacking protein coat<br>(iv) The RNA of viroid is of low molecular weight<br>(v) They cause potato spindle tuber disease",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'In 1971, T.O. Diener discovered...' (ii) INCORRECT — Viroids are SMALLER than viruses, not larger. NCERT: 'smaller than viruses.' Key trap! (iii) CORRECT — NCERT: 'free RNA; it lacked the protein coat.' (iv) CORRECT — NCERT: 'RNA of the viroid was of low molecular weight.' (v) CORRECT — NCERT: 'caused potato spindle tuber disease.' So 4 are correct. Common mistake: Saying viroids are larger than viruses — they are SMALLER."
  },
  {
    id: 232,
    topic: "Prions",
    difficulty: "Medium",
    type: "Statement",
    q: "Prions are infectious agents that consist of:",
    options: [
      "Free RNA of low molecular weight",
      "Double stranded DNA with a protein coat",
      "Abnormally folded protein",
      "Single stranded RNA with a capsid"
    ],
    correct: 2,
    explanation: "NCERT Line: 'certain infectious neurological diseases were found to be transmitted by an agent consisting of abnormally folded protein.' Prions are ONLY protein — no nucleic acid. Option A describes viroids. Options B and D describe viruses. Common mistake: Confusing prions (protein only) with viroids (RNA only) or viruses (nucleoprotein)."
  },
  {
    id: 233,
    topic: "Prions",
    difficulty: "Medium",
    type: "Match",
    q: "Match the disease with the correct organism:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Bovine spongiform encephalopathy (BSE) &emsp; (i) Humans<br>(b) Creutzfeldt-Jacob disease (CJD) &emsp;&emsp;&emsp;&emsp; (ii) Cattle",
    options: [
      "a-ii, b-i",
      "a-i, b-ii",
      "a-ii, b-ii",
      "a-i, b-i"
    ],
    correct: 0,
    explanation: "NCERT Lines: 'bovine spongiform encephalopathy (BSE) commonly called mad cow disease in cattle' = cattle (ii); 'its analogous variant Creutzfeldt–Jacob disease (CJD) in humans' = humans (i). Option B swaps the two — BSE in humans and CJD in cattle, which is incorrect. Common mistake: Swapping BSE (cattle) with CJD (humans)."
  },
  {
    id: 234,
    topic: "Prions",
    difficulty: "Hard",
    type: "Statement",
    q: "Which of the following is <b>incorrect</b> about prions?",
    options: [
      "They consist of abnormally folded protein",
      "They are similar in size to viruses",
      "They cause infectious neurological diseases",
      "They contain RNA as their genetic material"
    ],
    correct: 3,
    explanation: "NCERT does NOT mention any nucleic acid in prions. Prions are ONLY abnormally folded proteins — they lack both DNA and RNA. Option D incorrectly assigns RNA to prions. Options A, B, C are all directly from NCERT. Common mistake: Confusing prions (protein only) with viroids (RNA) — prions have NO nucleic acid."
  },
  {
    id: 235,
    topic: "Lichens",
    difficulty: "Easy",
    type: "Direct",
    q: "Lichens are symbiotic associations between:",
    options: [
      "Algae and bacteria",
      "Fungi and bacteria",
      "Algae and fungi",
      "Fungi and bryophytes"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Lichens are symbiotic associations i.e. mutually useful associations, between algae and fungi.' This is one of the most frequently tested facts. Common mistake: Replacing one component — saying 'bacteria' instead of algae or fungi."
  },
  {
    id: 236,
    topic: "Lichens",
    difficulty: "Medium",
    type: "Statement",
    q: "In lichens, the algal component and fungal component are respectively known as:",
    options: [
      "Mycobiont and phycobiont",
      "Phycobiont and mycobiont",
      "Phytobiont and mycobiont",
      "Mycobiont and phytobiont"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The algal component is known as phycobiont and fungal component as mycobiont.' PHYCObiont = algal (phyco = algae); MYCObiont = fungal (myco = fungi). Option A reverses the two — the #1 NTA trap on this topic. Mnemonic: P(hyco) = P(lant-like/algae); M(yco) = M(ushroom-like/fungi). Common mistake: Swapping phycobiont and mycobiont — the most tested trap in lichens."
  },
  {
    id: 237,
    topic: "Lichens",
    difficulty: "Medium",
    type: "Statement",
    q: "In lichens, the phycobiont and mycobiont are respectively:",
    options: [
      "Heterotrophic and autotrophic",
      "Autotrophic and heterotrophic",
      "Both autotrophic",
      "Both heterotrophic"
    ],
    correct: 1,
    explanation: "NCERT Line: 'which are autotrophic and heterotrophic, respectively.' Phycobiont (algal) = autotrophic; Mycobiont (fungal) = heterotrophic. Option A reverses the nutritional modes. Common mistake: Reversing autotrophic (algae) and heterotrophic (fungi) for the two components."
  },
  {
    id: 238,
    topic: "Lichens",
    difficulty: "Medium",
    type: "Statement",
    q: "In the symbiotic association of lichens, the roles of algae and fungi respectively are:",
    options: [
      "Algae provide shelter; fungi prepare food",
      "Algae prepare food; fungi provide shelter and absorb mineral nutrients and water",
      "Both algae and fungi prepare food",
      "Fungi prepare food; algae provide shelter"
    ],
    correct: 1,
    explanation: "NCERT Lines: 'Algae prepare food for fungi and fungi provide shelter and absorb mineral nutrients and water for its partner.' Option A reverses the roles completely. Option D also reverses. Common mistake: Reversing the roles — algae = food maker (autotrophic); fungi = shelter + minerals + water provider."
  },
  {
    id: 239,
    topic: "Lichens",
    difficulty: "Easy",
    type: "Direct",
    q: "Lichens are considered very good indicators of:",
    options: [
      "Soil fertility",
      "Water pollution",
      "Air pollution",
      "Temperature change"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Lichens are very good pollution indicators – they do not grow in polluted areas.' NCERT says 'pollution indicators' generally, but in ecological context this primarily refers to air pollution (SO₂ sensitivity). Common mistake: Choosing water pollution — lichens indicate air pollution, not water."
  },
  {
    id: 240,
    topic: "Lichens",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about lichens?",
    options: [
      "They grow abundantly in polluted industrial areas",
      "They do not grow in polluted areas",
      "They are parasitic associations between algae and fungi",
      "The fungal component prepares food by photosynthesis"
    ],
    correct: 1,
    explanation: "NCERT Line: 'they do not grow in polluted areas.' Option A directly contradicts NCERT. Option C says 'parasitic' — NCERT says 'symbiotic (mutually useful)'. Option D says fungi photosynthesize — only algae (phycobiont) do. Common mistake: Saying lichens grow in polluted areas — they specifically do NOT."
  },
  {
    id: 241,
    topic: "Cross-topic: Virus vs Viroid vs Prion",
    difficulty: "Hard",
    type: "Match",
    q: "Match the infectious agent with its composition:<br><b>Column I</b> &emsp;&emsp; <b>Column II</b><br>(a) Virus &emsp;&emsp;&emsp; (i) Free RNA only (no protein coat)<br>(b) Viroid &emsp;&emsp; (ii) Abnormally folded protein only<br>(c) Prion &emsp;&emsp;&emsp; (iii) Nucleoprotein (nucleic acid + protein coat)",
    options: [
      "a-iii, b-i, c-ii",
      "a-i, b-iii, c-ii",
      "a-iii, b-ii, c-i",
      "a-ii, b-i, c-iii"
    ],
    correct: 0,
    explanation: "From NCERT: Virus = nucleoprotein (nucleic acid + capsid) (iii); Viroid = free RNA, no protein coat (i); Prion = abnormally folded protein (ii). Option C swaps viroid and prion — the most common NTA trap. Option B swaps virus and viroid. Common mistake: Swapping viroid (RNA only) with prion (protein only) — remember: viroID = nucleic acID; prION = proteIN."
  },
  {
    id: 242,
    topic: "Cross-topic: Virus vs Viroid vs Prion",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements are <b>correct</b>?<br>(i) Viruses are nucleoproteins containing either RNA or DNA<br>(ii) Viroids are free RNA with a protein coat<br>(iii) Prions are abnormally folded proteins causing neurological diseases<br>(iv) No virus contains both RNA and DNA<br>(v) Viroids cause potato spindle tuber disease",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'A virus is a nucleoprotein...either RNA or DNA.' (ii) INCORRECT — Viroids are free RNA but LACK the protein coat. NCERT: 'lacked the protein coat.' Key trap! (iii) CORRECT — NCERT: 'abnormally folded protein...infectious neurological diseases.' (iv) CORRECT — NCERT: 'No virus contains both RNA and DNA.' (v) CORRECT — NCERT: 'caused potato spindle tuber disease.' So 4 are correct. Common mistake: Adding protein coat to viroids — viroids specifically LACK protein coat."
  },
  {
    id: 243,
    topic: "Lichens",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Lichens are considered good pollution indicators.<br><b>Reason (R):</b> Lichens do not grow in polluted areas.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT: 'Lichens are very good pollution indicators.' Reason is TRUE — NCERT: 'they do not grow in polluted areas.' R correctly EXPLAINS A — the reason lichens serve as pollution indicators IS BECAUSE they do not grow in polluted areas (their presence indicates clean air, absence indicates pollution). Common mistake: Choosing B — but R directly explains WHY lichens are pollution indicators."
  },
  {
    id: 244,
    topic: "Cross-topic: Comprehensive",
    difficulty: "Hard",
    type: "Except",
    q: "All of the following are correctly matched <b>EXCEPT</b>:",
    options: [
      "Ivanowsky (1892) — Mosaic disease of tobacco",
      "Beijerinck (1898) — Contagium vivum fluidum",
      "Stanley (1935) — Crystallisation of viruses",
      "Diener (1971) — Crystallisation of viroids"
    ],
    correct: 3,
    explanation: "Diener (1971) DISCOVERED viroids — he did NOT crystallise them. NCERT: 'T.O. Diener discovered a new infectious agent...potato spindle tuber disease.' Crystallisation was Stanley's contribution (for viruses). Options A, B, C are all correctly matched per NCERT. Common mistake: Not reading carefully — Diener discovered viroids, he did not crystallise them."
  },
  {
    id: 245,
    topic: "Cross-topic: Virus-Viroid-Prion-Lichen Comprehensive",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements:<br>(A) Viruses are obligate parasites and are inert outside their specific host cell<br>(B) Viroids have a protein coat of low molecular weight<br>(C) Prions cause bovine spongiform encephalopathy (BSE) and Creutzfeldt-Jacob disease (CJD)<br>(D) Lichens are symbiotic associations where phycobiont is autotrophic and mycobiont is heterotrophic<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B, C and D",
      "A, C and D only",
      "A, B and C only",
      "B, C and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) CORRECT — NCERT: 'inert outside their specific host cell. Viruses are obligate parasites.' (B) INCORRECT — Viroids LACK protein coat. NCERT: 'lacked the protein coat.' The RNA (not protein coat) is of low molecular weight. Deliberate trap — combining two viroid facts incorrectly! (C) CORRECT — NCERT: 'bovine spongiform encephalopathy (BSE)...Creutzfeldt-Jacob disease (CJD).' (D) CORRECT — NCERT: 'phycobiont...autotrophic and heterotrophic, respectively.' So A, C and D are correct. Common mistake: Thinking viroids have a protein coat — they are FREE RNA without any protein."
  },
  {
    id: 246,
    topic: "Cross-topic: Years and Scientists",
    difficulty: "Hard",
    type: "Match",
    q: "Match the scientist with the correct year:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Ivanowsky &emsp;&emsp; (i) 1971<br>(b) Beijerinck &emsp;&emsp; (ii) 1892<br>(c) Stanley &emsp;&emsp;&emsp;&emsp; (iii) 1898<br>(d) Diener &emsp;&emsp;&emsp;&emsp; (iv) 1935",
    options: [
      "a-ii, b-iii, c-iv, d-i",
      "a-iii, b-ii, c-iv, d-i",
      "a-ii, b-iv, c-iii, d-i",
      "a-ii, b-iii, c-i, d-iv"
    ],
    correct: 0,
    explanation: "From NCERT: Ivanowsky = 1892 (ii); Beijerinck = 1898 (iii); Stanley = 1935 (iv); Diener = 1971 (i). Option B swaps Ivanowsky (1892) and Beijerinck (1898) — most common trap. Option D swaps Stanley (1935) and Diener (1971). Mnemonic: I-B-S-D → 1892-1898-1935-1971 (chronological). Common mistake: Mixing up the years — especially Ivanowsky (1892) and Beijerinck (1898)."
  },
  {
    id: 247,
    topic: "Cross-topic: Complete Chapter Integration",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following infectious agents contain <b>nucleic acid</b>?<br>(i) Virus<br>(ii) Viroid<br>(iii) Prion<br>(iv) Bacteriophage<br>(v) Mycoplasma",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) Virus — Contains RNA or DNA ✅; (ii) Viroid — Contains free RNA ✅; (iii) Prion — Contains ONLY abnormally folded protein, NO nucleic acid ❌; (iv) Bacteriophage — A type of virus, contains dsDNA ✅; (v) Mycoplasma — A living cell (bacterium), contains DNA ✅. So 4 agents contain nucleic acid. Only prions lack nucleic acid. Common mistake: (a) Including prions (protein only), (b) Forgetting that bacteriophages are viruses with DNA."
  },
  {
    id: 248,
    topic: "Viruses",
    difficulty: "Medium",
    type: "AR",
    q: "<b>Assertion (A):</b> Viruses are called obligate parasites.<br><b>Reason (R):</b> Viruses can replicate only inside a living host cell using the host cell machinery.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT: 'Viruses are obligate parasites.' Reason is TRUE — NCERT: 'they take over the machinery of the host cell to replicate themselves.' R correctly EXPLAINS A — viruses are obligate parasites BECAUSE they can only replicate inside a host cell. They are inert outside and need host machinery. Common mistake: Choosing B — but the dependency on host cell IS the reason for obligate parasitism."
  },
  {
    id: 249,
    topic: "Summary - Historical",
    difficulty: "Easy",
    type: "Direct",
    q: "Who first proposed biological classification of plants and animals on the basis of simple morphological characters?",
    options: [
      "Linnaeus",
      "Aristotle",
      "Whittaker",
      "Beijerinck"
    ],
    correct: 1,
    explanation: "NCERT Summary: 'Biological classification of plants and animals was first proposed by Aristotle on the basis of simple morphological characters.' Key word: FIRST. Linnaeus LATER classified into two kingdoms. Whittaker proposed five kingdom. Common mistake: Choosing Linnaeus — he classified into two kingdoms but was NOT the first to propose biological classification."
  },
  {
    id: 250,
    topic: "Summary - Historical Sequence",
    difficulty: "Medium",
    type: "Statement",
    q: "The correct chronological sequence of classification proposals is:",
    options: [
      "Linnaeus → Aristotle → Whittaker",
      "Whittaker → Aristotle → Linnaeus",
      "Aristotle → Linnaeus → Whittaker",
      "Linnaeus → Whittaker → Aristotle"
    ],
    correct: 2,
    explanation: "NCERT Summary: 'Aristotle...first proposed...Linnaeus later classified...Whittaker proposed an elaborate five kingdom classification.' Chronological order: Aristotle (earliest) → Linnaeus (Two Kingdom) → Whittaker (1969, Five Kingdom). Common mistake: Placing Linnaeus before Aristotle — Aristotle was the earliest."
  },
  {
    id: 251,
    topic: "Summary - Monera",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is described as 'cosmopolitan in distribution' in the NCERT summary?",
    options: [
      "Protists",
      "Fungi",
      "Bacteria",
      "Viruses"
    ],
    correct: 2,
    explanation: "NCERT Summary Line: 'Bacteria are cosmopolitan in distribution.' Note: In the main text, FUNGI are also called cosmopolitan. But in the SUMMARY specifically, the term 'cosmopolitan' is used for bacteria. This is a potential NTA trap — both bacteria and fungi are cosmopolitan, but context matters. Common mistake: Choosing fungi — while also cosmopolitan, the summary specifically uses this term for bacteria."
  },
  {
    id: 252,
    topic: "Summary - Fungi",
    difficulty: "Medium",
    type: "Statement",
    q: "According to the NCERT summary, the mode of nutrition in most fungi is:",
    options: [
      "Autotrophic",
      "Holozoic",
      "Parasitic",
      "Saprophytic"
    ],
    correct: 3,
    explanation: "NCERT Summary: 'Most fungi are saprophytic in their mode of nutrition.' Key word: MOST — not ALL. Some fungi are parasitic, some are coprophilous. Option B (holozoic) is for animals. Option A (autotrophic) — fungi are never autotrophic. Common mistake: Saying ALL fungi are saprophytic — NCERT says 'most', acknowledging parasitic and other modes too."
  },
  {
    id: 253,
    topic: "Summary - Fungi Classification",
    difficulty: "Easy",
    type: "Direct",
    q: "The number of classes in Kingdom Fungi as mentioned in NCERT is:",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "NCERT Summary: 'Phycomycetes, Ascomycetes, Basidiomycetes and Deuteromycetes are the four classes under this kingdom.' Exactly FOUR classes. Common mistake: Saying five classes — students sometimes try to add a fifth class."
  },
  {
    id: 254,
    topic: "Summary - Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "According to the NCERT summary, animals reproduce:",
    options: [
      "Only by the sexual mode",
      "Only by the asexual mode",
      "Mostly by the sexual mode",
      "Equally by sexual and asexual modes"
    ],
    correct: 2,
    explanation: "NCERT Summary: 'They reproduce mostly by the sexual mode.' Key word: MOSTLY — not only/exclusively. Some lower animals reproduce asexually (budding in Hydra, etc.). Option A says 'only sexual' — this is the classic one-word trap. Common mistake: Saying animals reproduce ONLY sexually — NCERT says 'mostly'."
  },
  {
    id: 255,
    topic: "Summary - Excluded Organisms",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following are NOT included in Whittaker's Five Kingdom Classification as per NCERT?<br>(i) Viruses<br>(ii) Viroids<br>(iii) Prions<br>(iv) Lichens<br>(v) Mycoplasma",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "NCERT mentions that viruses, viroids, prions (from main text) and lichens (from summary) are NOT included in the five kingdom classification. (i) Viruses ✅ excluded, (ii) Viroids ✅ excluded, (iii) Prions ✅ excluded (main text mentions them as acellular), (iv) Lichens ✅ excluded — NCERT Summary: 'as well as the lichens are not included', (v) Mycoplasma ❌ — they ARE included under Kingdom Monera. So 4 are excluded. Common mistake: Including mycoplasma as excluded — mycoplasma are bacteria (Monera), hence included."
  },
  {
    id: 256,
    topic: "Summary - Cross-concept",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following kingdoms have members that reproduce <b>BOTH</b> asexually and sexually?<br>(i) Monera<br>(ii) Protista<br>(iii) Fungi<br>(iv) Plantae<br>(v) Animalia",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "From NCERT: (i) Monera — fission (asexual) + primitive DNA transfer (sort of sexual) ✅; (ii) Protista — 'reproduce both asexually and sexually' ✅ (Summary confirms); (iii) Fungi — 'show asexual and sexual reproduction' ✅ (Summary confirms); (iv) Plantae — sporophytic and gametophytic generations involve both modes ✅; (v) Animalia — 'reproduce mostly by the sexual mode' — some show asexual reproduction, but 'mostly sexual'. Considering NCERT's explicit mention, 4 kingdoms clearly show both. Common mistake: Either over-counting or under-counting based on interpreting the Animalia line."
  },
  {
    id: 257,
    topic: "Summary - Comprehensive",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following statements from NCERT Summary:<br>(A) Aristotle first proposed biological classification on the basis of morphological characters<br>(B) Whittaker's criteria included cell structure, body organisation, mode of nutrition, reproduction and phylogenetic relationships<br>(C) Bacteria show the most extensive structural diversity<br>(D) Protists have defined nucleus and membrane-bound organelles<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A, B and D only",
      "A, B, C and D",
      "A, C and D only",
      "B, C and D only"
    ],
    correct: 0,
    explanation: "Analysis: (A) CORRECT — Summary: 'first proposed by Aristotle on the basis of simple morphological characters.' (B) CORRECT — Summary confirms all 5 criteria. (C) INCORRECT — Summary says bacteria show 'most extensive METABOLIC diversity', NOT 'structural diversity'. One-word trap: metabolic → structural. (D) CORRECT — Summary: 'Protists have defined nucleus and other membrane bound organelles.' So A, B and D only. Common mistake: Missing metabolic → structural swap in statement C."
  },
  {
    id: 258,
    topic: "Summary - Protista",
    difficulty: "Medium",
    type: "Except",
    q: "All of the following are included under Kingdom Protista as per NCERT <b>EXCEPT</b>:",
    options: [
      "Chrysophytes",
      "Euglenoids",
      "Archaebacteria",
      "Slime moulds"
    ],
    correct: 2,
    explanation: "NCERT Summary: 'Kingdom Protista includes all single-celled eukaryotes such as Chrysophytes, Dinoflagellates, Euglenoids, Slime-moulds and Protozoans.' Archaebacteria belong to Kingdom MONERA (prokaryotic). Common mistake: Placing Archaebacteria under Protista — they are prokaryotes in Monera."
  },
  {
    id: 259,
    topic: "Summary - Plantae",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following groups are correctly listed under Kingdom Plantae as per NCERT Summary?<br>(i) Algae<br>(ii) Bryophytes<br>(iii) Pteridophytes<br>(iv) Gymnosperms<br>(v) Angiosperms<br>(vi) Fungi",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 2,
    explanation: "NCERT Summary: 'Algae, bryophytes, pteridophytes, gymnosperms and angiosperms are included in this group.' (i) ✅ (ii) ✅ (iii) ✅ (iv) ✅ (v) ✅ (vi) ❌ — Fungi is a SEPARATE kingdom. So 5 are correct. Common mistake: Including fungi under Plantae."
  },
  {
    id: 260,
    topic: "Summary - Cross Kingdom Comparison",
    difficulty: "Hard",
    type: "Match",
    q: "Match the kingdom with its defining characteristic as per NCERT Summary:<br><b>Column I</b> &emsp;&emsp;&emsp;&emsp; <b>Column II</b><br>(a) Monera &emsp;&emsp;&emsp; (i) Eukaryotic, chlorophyll-containing<br>(b) Protista &emsp;&emsp;&emsp; (ii) Heterotrophic, multicellular, lacks cell wall<br>(c) Plantae &emsp;&emsp;&emsp; (iii) Most extensive metabolic diversity<br>(d) Animalia &emsp;&emsp; (iv) Single-celled eukaryotes",
    options: [
      "a-iii, b-iv, c-i, d-ii",
      "a-iv, b-iii, c-i, d-ii",
      "a-iii, b-iv, c-ii, d-i",
      "a-iii, b-i, c-iv, d-ii"
    ],
    correct: 0,
    explanation: "From NCERT Summary: Monera (bacteria) = most extensive metabolic diversity (iii); Protista = single-celled eukaryotes (iv); Plantae = eukaryotic chlorophyll-containing (i); Animalia = heterotrophic, multicellular, lacks cell wall (ii). Option B swaps Monera and Protista. Common mistake: Assigning 'metabolic diversity' to Protista instead of Monera."
  },
  {
    id: 261,
    topic: "Summary - Comprehensive Revision",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements from the NCERT Summary are <b>correct</b>?<br>(i) Bacteria may be autotrophic or heterotrophic<br>(ii) Most fungi are saprophytic<br>(iii) Protists reproduce only asexually<br>(iv) Plants exhibit alternation of generations<br>(v) Animals are holozoic in their mode of nutrition",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — Summary: 'Bacteria may be autotrophic or heterotrophic.' (ii) CORRECT — Summary: 'Most fungi are saprophytic.' (iii) INCORRECT — Summary: 'They reproduce both asexually AND sexually.' 'Only asexually' is wrong. (iv) CORRECT — Summary: 'life cycle of plants exhibit alternation of generations.' (v) CORRECT — Summary: 'mode of nutrition of these organism is holozoic.' So 4 are correct. Common mistake: Missing that Protista reproduce BOTH asexually and sexually."
  },
  {
    id: 262,
    topic: "Summary - Whittaker's Classification",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>NOT</b> one of the main criteria used by Whittaker for Five Kingdom Classification as stated in the NCERT Summary?",
    options: [
      "Cell structure",
      "Mode of nutrition and reproduction",
      "Habitat and geographical distribution",
      "Phylogenetic relationships"
    ],
    correct: 2,
    explanation: "NCERT Summary: 'The main criteria of the five kingdom classification were cell structure, body organisation, mode of nutrition and reproduction, and phylogenetic relationships.' HABITAT is NOT a criterion — this is the most tested fact about Whittaker's classification. The summary reinforces this by listing exactly the same 5 criteria without habitat. Common mistake: Including habitat — it is NOT one of Whittaker's classification criteria."
  },
  {
    id: 263,
    topic: "Summary - Animalia",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following features of Kingdom Animalia is <b>correctly</b> stated as per the NCERT Summary?",
    options: [
      "Autotrophic eukaryotic multicellular organisms with cell wall",
      "Heterotrophic prokaryotic unicellular organisms lacking cell wall",
      "Heterotrophic eukaryotic multicellular organisms lacking cell wall",
      "Heterotrophic eukaryotic unicellular organisms lacking cell wall"
    ],
    correct: 2,
    explanation: "NCERT Summary: 'The heterotrophic eukaryotic, multicellular organisms lacking a cell wall are included in the Kingdom Animalia.' Three key features: heterotrophic + eukaryotic + multicellular + lacking cell wall. Option D says 'unicellular' — animals are multicellular. Option B says 'prokaryotic' — animals are eukaryotic. Common mistake: Missing one of the four key characteristics."
  },
  {
    id: 264,
    topic: "Summary - Comprehensive Cross-Kingdom",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Bacteria show the most extensive metabolic diversity among all organisms.<br><b>Reason (R):</b> Bacteria may be autotrophic (both photosynthetic and chemosynthetic) or heterotrophic (saprophytic, parasitic) in their mode of nutrition.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — NCERT Summary: 'These organisms show the most extensive metabolic diversity.' Reason is TRUE — NCERT (main text and summary) confirms both autotrophic and heterotrophic modes. R correctly EXPLAINS A because the REASON bacteria show such extensive metabolic diversity IS their ability to use multiple nutritional modes — autotrophic (photo + chemo) and heterotrophic (sapro + parasitic). Common mistake: Choosing B — the diverse nutritional modes are directly the basis for metabolic diversity."
  },
  {
    id: 265,
    topic: "Summary - Plantae Detail",
    difficulty: "Medium",
    type: "Statement",
    q: "The life cycle of plants exhibits alternation between which two generations?",
    options: [
      "Sporophytic and gametophytic generations",
      "Vegetative and reproductive generations",
      "Haploid and polyploid generations",
      "Sexual and asexual generations"
    ],
    correct: 0,
    explanation: "NCERT Summary: 'The life cycle of plants exhibit alternation of generations – gametophytic and sporophytic generations.' The two alternating phases are: sporophytic (diploid) and gametophytic (haploid). Option D sounds correct but is not the NCERT terminology. Option C says 'polyploid' — not correct (it's diploid, not polyploid). Common mistake: Using 'sexual and asexual' instead of the correct NCERT terms 'gametophytic and sporophytic'."
  },
  {
    id: 266,
    topic: "Summary - Complete Chapter Revision",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following organism-kingdom pairings are <b>correct</b>?<br>(i) Nostoc — Monera<br>(ii) Gonyaulax — Protista<br>(iii) Agaricus — Fungi<br>(iv) Cuscuta — Plantae<br>(v) Puccinia — Protista<br>(vi) Trypanosoma — Protista",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 2,
    explanation: "Analysis: (i) Nostoc — Monera ✅ (cyanobacterium = prokaryote). (ii) Gonyaulax — Protista ✅ (dinoflagellate). (iii) Agaricus — Fungi ✅ (basidiomycete mushroom). (iv) Cuscuta — Plantae ✅ (parasitic plant). (v) Puccinia — Protista ❌ — Puccinia is a BASIDIOMYCETE (Kingdom Fungi), NOT Protista. KEY TRAP! (vi) Trypanosoma — Protista ✅ (flagellated protozoan). So 5 are correct. Common mistake: Placing Puccinia under Protista — it's a rust fungus (Basidiomycetes, Kingdom Fungi)."
  },
  {
    id: 267,
    topic: "Summary - Comprehensive Integration",
    difficulty: "Hard",
    type: "Except",
    q: "All of the following pairs show the correct matching of organism and its characteristic <b>EXCEPT</b>:",
    options: [
      "Diatoms — Chief producers in oceans",
      "Methanogens — Present in gut of ruminants",
      "Mycoplasma — Largest living cells with thick cell wall",
      "Euglenoids — Protein-rich pellicle instead of cell wall"
    ],
    correct: 2,
    explanation: "NCERT states Mycoplasma are 'the SMALLEST living cells known' and 'completely LACK a cell wall.' Option C says 'largest' and 'thick cell wall' — BOTH are wrong. This is a double-error trap. Options A, B, D are all correct NCERT pairings. Common mistake: Not catching the double error — mycoplasma are smallest (not largest) and lack cell wall (not thick cell wall)."
  },
  {
    id: 268,
    topic: "Summary - Virus/Viroid/Lichen Exclusion",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> about the organisms not included in Whittaker's Five Kingdom Classification?",
    options: [
      "Viruses, viroids and lichens are included in Kingdom Monera",
      "Viruses, viroids and lichens are not included in the five kingdom classification",
      "Only viruses are excluded; viroids and lichens are in Kingdom Protista",
      "Lichens are included in Kingdom Fungi"
    ],
    correct: 1,
    explanation: "NCERT Summary: 'Some acellular organisms like viruses and viroids as well as the lichens are not included in the five kingdom system of classification.' All three — viruses, viroids AND lichens — are excluded. Option D says lichens are in Fungi — lichens are symbiotic associations, not placed in any single kingdom. Common mistake: Placing lichens solely under Fungi — they are associations of algae AND fungi."
  },
  {
    id: 269,
    topic: "Summary - Comprehensive Revision",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following summary statements:<br>(A) Linnaeus classified organisms into five kingdoms<br>(B) Whittaker's classification criteria include phylogenetic relationships<br>(C) Kingdom Protista includes all single-celled eukaryotes<br>(D) Fungi show only asexual reproduction<br><br>Which of the above statements are <b>correct</b>?",
    options: [
      "A and B only",
      "B and C only",
      "A, B and C only",
      "B, C and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) INCORRECT — Linnaeus classified into TWO kingdoms (Plantae and Animalia), not five. Five kingdoms = Whittaker. (B) CORRECT — Summary: criteria include 'phylogenetic relationships.' (C) CORRECT — Summary: 'Kingdom Protista includes all single-celled eukaryotes.' (D) INCORRECT — Summary: 'They show asexual AND sexual reproduction.' So B and C only. Common mistake: Attributing five kingdoms to Linnaeus instead of Whittaker."
  },
  {
    id: 270,
    topic: "Summary - Chapter Consolidation",
    difficulty: "Hard",
    type: "Match",
    q: "Match the kingdom with its mode of nutrition as per NCERT:<br><b>Column I</b> &emsp;&emsp;&emsp; <b>Column II</b><br>(a) Monera &emsp;&emsp;&emsp; (i) Holozoic<br>(b) Fungi &emsp;&emsp;&emsp;&emsp; (ii) Autotrophic or heterotrophic<br>(c) Plantae &emsp;&emsp;&emsp; (iii) Saprophytic (mostly)<br>(d) Animalia &emsp;&emsp; (iv) Autotrophic (photosynthetic)",
    options: [
      "a-ii, b-iii, c-iv, d-i",
      "a-iii, b-ii, c-iv, d-i",
      "a-ii, b-iv, c-iii, d-i",
      "a-iv, b-iii, c-ii, d-i"
    ],
    correct: 0,
    explanation: "From NCERT Summary: Monera = autotrophic or heterotrophic (ii); Fungi = saprophytic mostly (iii); Plantae = autotrophic/photosynthetic (iv); Animalia = holozoic (i). Option B swaps Monera and Fungi. Option C swaps Fungi and Plantae. Common mistake: Assigning 'saprophytic' to Monera instead of Fungi."
  },
  {
    id: 271,
    topic: "Summary - Ultimate Revision",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following pairs are <b>correctly</b> matched as per the entire chapter?<br>(i) Archaebacteria — Different cell wall structure for survival in extreme conditions<br>(ii) Diatoms — Cell walls embedded with cellulose<br>(iii) Euglenoids — Protein-rich pellicle, mixotrophic<br>(iv) Basidiomycetes — Sex organs absent, basidiospores exogenous<br>(v) Viroids — Free RNA, no protein coat, potato spindle tuber disease<br>(vi) Prions — Abnormally folded protein, mad cow disease",
    options: [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — Archaebacteria differ in cell wall → survival in extreme conditions. (ii) INCORRECT — Diatom walls embedded with SILICA, not cellulose. Cellulose = dinoflagellates. KEY ONE-WORD TRAP! (iii) CORRECT — Pellicle (protein), photosynthetic + heterotrophic. (iv) CORRECT — Sex organs absent, basidiospores exogenously produced. (v) CORRECT — Free RNA, no coat, potato spindle tuber. (vi) CORRECT — Abnormally folded protein, BSE/mad cow. So 5 are correct. Common mistake: Silica (diatoms) vs cellulose (dinoflagellates) — the most frequently tested swap."
  },
  {
    id: 272,
    topic: "Summary - Final Integration",
    difficulty: "Hard",
    type: "AR",
    q: "<b>Assertion (A):</b> Fungi were separated from Kingdom Plantae and placed in a separate kingdom in Whittaker's classification.<br><b>Reason (R):</b> Fungi are heterotrophic and have chitin in their cell walls unlike the cellulosic cell wall of green plants.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Assertion is TRUE — Fungi were separated from old Plant kingdom and given their own kingdom. Reason is TRUE — NCERT (Introduction): 'fungi had chitin in their walls while the green plants had a cellulosic cell wall' + fungi are heterotrophic vs plants are autotrophic. R correctly EXPLAINS A — the differences in cell wall composition (chitin vs cellulose) and mode of nutrition (heterotrophic vs autotrophic) are exactly WHY fungi were separated. Common mistake: Choosing B — but NCERT explicitly links these differences to the separation."
  },
  {
    id: 273,
    topic: "Summary - Final Comprehensive",
    difficulty: "Hard",
    type: "Except",
    q: "All of the following facts are stated in the NCERT Summary <b>EXCEPT</b>:",
    options: [
      "Bacteria show the most extensive metabolic diversity",
      "Kingdom Protista includes all single-celled eukaryotes",
      "Whittaker proposed Five Kingdom Classification in 1969",
      "Animals reproduce mostly by the sexual mode"
    ],
    correct: 2,
    explanation: "While the NCERT main text mentions 'R.H. Whittaker (1969)', the SUMMARY section does NOT specifically mention the year 1969. The summary simply says 'Whittaker proposed an elaborate five kingdom classification' without the year. Options A, B, and D are all directly stated in the summary. This is an extremely subtle question testing whether students read the SUMMARY specifically vs the main text. Common mistake: Assuming all facts from main text appear in the summary — the year 1969 is NOT in the summary."
  },
  {
    id: 274,
    topic: "Kingdom Monera - Bacterial Shapes",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following represents the correct singular and plural forms of bacterial shapes as per NCERT?",
    options: [
      "Coccus — cocci; Bacillus — bacillae; Vibrium — vibria",
      "Coccus — cocci; Bacillus — bacilli; Vibrium — vibrio",
      "Coccus — coccae; Bacillus — bacilli; Vibrium — vibrio",
      "Coccus — cocci; Bacillus — bacilli; Vibrium — vibriae"
    ],
    correct: 1,
    explanation: "NCERT Line: 'spherical Coccus (pl.: cocci), the rod-shaped Bacillus (pl.: bacilli), the comma-shaped Vibrium (pl.: vibrio).' The EXACT plural forms are: cocci, bacilli, vibrio. Option A changes bacilli to 'bacillae' — wrong Latin ending. Option D changes vibrio to 'vibriae'. Common mistake: Creating incorrect plural forms — NCERT provides exact plurals in parentheses."
  },
  {
    id: 275,
    topic: "Kingdom Fungi - Habitat Preference",
    difficulty: "Medium",
    type: "Statement",
    q: "Fungi prefer to grow in:",
    options: [
      "Cold and dry places",
      "Warm and humid places",
      "Hot and arid deserts",
      "Extremely cold polar regions"
    ],
    correct: 1,
    explanation: "NCERT Line: 'They prefer to grow in warm and humid places.' This is a direct recall fact. The next line in NCERT connects this to food preservation: 'Have you ever wondered why we keep food in the refrigerator? Yes, it is to prevent food from going bad due to bacterial or fungal infections.' Common mistake: Not associating fungal growth preference with everyday life examples like refrigeration."
  },
  {
    id: 276,
    topic: "Kingdom Fungi - Practical Application",
    difficulty: "Medium",
    type: "AR",
    q: "<b>Assertion (A):</b> We keep food in the refrigerator to prevent it from going bad.<br><b>Reason (R):</b> Low temperature inhibits growth of bacteria and fungi that prefer warm and humid conditions.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "NCERT Lines: 'They prefer to grow in warm and humid places. Have you ever wondered why we keep food in the refrigerator? Yes, it is to prevent food from going bad due to bacterial or fungal infections.' Both A and R are true and R directly explains A — cold temperature prevents microbial growth. Common mistake: Choosing B — but NCERT explicitly links refrigeration to prevention of bacterial/fungal growth."
  },
  {
    id: 277,
    topic: "Kingdom Fungi - Classification Basis",
    difficulty: "Medium",
    type: "HowMany",
    q: "How many of the following form the basis for dividing Kingdom Fungi into various classes?<br>(i) Morphology of the mycelium<br>(ii) Mode of spore formation<br>(iii) Fruiting bodies<br>(iv) Habitat and geographical distribution<br>(v) Mode of nutrition",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The morphology of the mycelium, mode of spore formation and fruiting bodies form the basis for the division of the kingdom into various classes.' Exactly THREE bases: (i) Mycelium morphology ✅, (ii) Mode of spore formation ✅, (iii) Fruiting bodies ✅, (iv) Habitat ❌ — NOT a basis, (v) Mode of nutrition ❌ — NOT a basis for class division. Common mistake: Adding habitat or nutrition — these are NOT bases for fungal class division."
  },
  {
    id: 278,
    topic: "Kingdom Fungi - Sexual Spore Matching",
    difficulty: "Hard",
    type: "Match",
    q: "Match the sexual spore with the correct fungal class:<br><b>Column I (Spore)</b> &emsp;&emsp; <b>Column II (Class)</b><br>(a) Oospore &emsp;&emsp;&emsp;&emsp; (i) Basidiomycetes<br>(b) Ascospore &emsp;&emsp;&emsp; (ii) Phycomycetes<br>(c) Basidiospore &emsp;&emsp; (iii) Ascomycetes<br>(d) Zygospore &emsp;&emsp;&emsp; (iv) Phycomycetes",
    options: [
      "a-ii, b-iii, c-i, d-iv",
      "a-iii, b-ii, c-i, d-iv",
      "a-ii, b-i, c-iii, d-iv",
      "a-iv, b-iii, c-i, d-ii"
    ],
    correct: 0,
    explanation: "From NCERT: Oospore → Phycomycetes (formed by fusion of gametes, along with zygospore); Ascospore → Ascomycetes (endogenous in asci); Basidiospore → Basidiomycetes (exogenous on basidium); Zygospore → Phycomycetes. So a-ii, b-iii, c-i, d-iv. Note: BOTH oospore and zygospore are associated with Phycomycetes. Option B swaps oospore and ascospore classes. Common mistake: Not knowing that oospores belong to Phycomycetes."
  },
  {
    id: 279,
    topic: "Kingdom Fungi - Phycomycetes Gametes",
    difficulty: "Hard",
    type: "Statement",
    q: "In Phycomycetes, the gametes involved in sexual reproduction can be:",
    options: [
      "Only isogamous",
      "Only anisogamous",
      "Isogamous, anisogamous or oogamous",
      "Only oogamous"
    ],
    correct: 2,
    explanation: "NCERT Line: 'These gametes are similar in morphology (isogamous) or dissimilar (anisogamous or oogamous).' All THREE types of gametic fusion occur in Phycomycetes — isogamous (similar gametes), anisogamous (dissimilar gametes), and oogamous (large egg + small sperm). Common mistake: Selecting only one type — Phycomycetes show ALL three types."
  },
  {
    id: 280,
    topic: "Kingdom Fungi - Basidiomycetes Detail",
    difficulty: "Medium",
    type: "Statement",
    q: "In Basidiomycetes, although asexual spores are generally not found, the common mode of vegetative reproduction is:",
    options: [
      "Budding",
      "Fission",
      "Fragmentation",
      "Conidia formation"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The asexual spores are generally not found, but vegetative reproduction by fragmentation is common.' This is a frequently overlooked detail. Option D (conidia) — asexual spores are NOT found in basidiomycetes. Options A and B are not specifically mentioned for basidiomycetes. Common mistake: Saying basidiomycetes have no reproduction other than sexual — they reproduce vegetatively by fragmentation."
  },
  {
    id: 281,
    topic: "Viruses - Genetic Material Detail",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following statements about viral genetic material is <b>correct</b>?",
    options: [
      "The protein coat of a virus is infectious",
      "The genetic material of a virus is infectious",
      "Both protein coat and genetic material are equally infectious",
      "Neither protein coat nor genetic material is infectious individually"
    ],
    correct: 1,
    explanation: "NCERT Line: 'A virus is a nucleoprotein and the genetic material is infectious.' The GENETIC MATERIAL (RNA or DNA) is the infectious component, NOT the protein coat. The capsid (protein coat) merely protects the nucleic acid. Common mistake: Thinking the protein coat is the infectious part — it is the GENETIC MATERIAL that is infectious."
  },
  {
    id: 282,
    topic: "Viruses - Translation",
    difficulty: "Easy",
    type: "Direct",
    q: "<i>Contagium vivum fluidum</i> means:",
    options: [
      "Poisonous living fluid",
      "Infectious living fluid",
      "Crystalline living protein",
      "Non-cellular living organism"
    ],
    correct: 1,
    explanation: "NCERT Line: 'called the fluid as Contagium vivum fluidum (infectious living fluid).' The translation is given in parentheses — infectious living fluid. Option A says 'poisonous' — that is the meaning of 'virus', not Contagium vivum fluidum. Common mistake: Confusing the meaning of 'virus' (venom/poisonous fluid) with 'Contagium vivum fluidum' (infectious living fluid)."
  },
  {
    id: 283,
    topic: "Viruses - Host Cell Interaction",
    difficulty: "Medium",
    type: "Statement",
    q: "Once viruses infect a cell, they:",
    options: [
      "Live in harmony with the host cell without causing damage",
      "Take over the machinery of the host cell to replicate themselves, killing the host",
      "Produce their own ribosomes and replicate independently",
      "Become dormant and remain inactive permanently"
    ],
    correct: 1,
    explanation: "NCERT Line: 'Once they infect a cell, they take over the machinery of the host cell to replicate themselves, killing the host.' Key points: (1) take over HOST machinery (don't have their own), (2) replicate, (3) KILL the host. Option C is wrong — viruses do NOT produce their own ribosomes. Common mistake: Thinking viruses replicate independently — they are entirely dependent on host cell machinery."
  },
  {
    id: 284,
    topic: "Viruses - Plant Virus Qualifier",
    difficulty: "Hard",
    type: "Statement",
    q: "Regarding the genetic material of plant viruses, NCERT states that:",
    options: [
      "All plant viruses have double stranded DNA",
      "All plant viruses have single stranded RNA without any exception",
      "In general, plant viruses have single stranded RNA",
      "Plant viruses have either RNA or DNA in equal proportions"
    ],
    correct: 2,
    explanation: "NCERT Line: 'In general, viruses that infect plants have single stranded RNA.' The qualifier 'IN GENERAL' is critical — it suggests this is the USUAL case but not an absolute rule. Option B says 'without any exception' — NCERT's use of 'in general' implies there may be exceptions. This is a subtle but important NTA trap. Common mistake: Missing the 'in general' qualifier and treating it as an absolute rule."
  },
  {
    id: 285,
    topic: "Kingdom Protista - Flagellated Protozoans",
    difficulty: "Medium",
    type: "Statement",
    q: "Flagellated protozoans are:",
    options: [
      "All free-living",
      "All parasitic",
      "Either free-living or parasitic",
      "All saprophytic"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The members of this group are either free-living or parasitic.' Not ALL are parasitic — NCERT clearly says 'either free-living or parasitic.' Option B is the most common mistake — students assume all flagellated protozoans are parasitic because Trypanosoma (a parasite) is given as an example. Common mistake: Generalising from Trypanosoma to all flagellated protozoans."
  },
  {
    id: 286,
    topic: "Kingdom Protista - Euglenoids Detail",
    difficulty: "Medium",
    type: "Statement",
    q: "When euglenoids are deprived of sunlight, they behave like heterotrophs by:",
    options: [
      "Absorbing soluble organic matter like fungi",
      "Predating on other smaller organisms",
      "Performing chemosynthesis",
      "Forming spores and becoming dormant"
    ],
    correct: 1,
    explanation: "NCERT Line: 'when deprived of sunlight they behave like heterotrophs by predating on other smaller organisms.' Key word: PREDATING — this is animal-like behaviour (ingestion/predation), NOT fungal absorption. Option A describes fungal nutrition. Common mistake: Assuming euglenoids switch to absorption-type heterotrophy — they actually PREDATE (hunt) other organisms."
  },
  {
    id: 287,
    topic: "Kingdom Protista - Euglenoids",
    difficulty: "Medium",
    type: "Statement",
    q: "The pigments of euglenoids are:",
    options: [
      "Identical to those present in cyanobacteria",
      "Different from those in any other organism",
      "Identical to those present in higher plants",
      "Identical to those present in fungi"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Interestingly, the pigments of euglenoids are identical to those present in higher plants.' This makes euglenoids similar to plants in their photosynthetic pigment composition. Option A is wrong — cyanobacteria have chlorophyll a only; euglenoids have pigments identical to HIGHER PLANTS (chlorophyll a + b etc.). Common mistake: Confusing euglenoid pigments with cyanobacterial pigments."
  },
  {
    id: 288,
    topic: "Cross-topic: Cosmopolitan Organisms",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following are described as 'cosmopolitan' in NCERT Chapter 2?<br>(i) Bacteria<br>(ii) Fungi<br>(iii) Protists<br>(iv) Viruses<br>(v) Lichens",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 1,
    explanation: "NCERT uses 'cosmopolitan' for TWO groups: (i) Bacteria — Summary: 'Bacteria are cosmopolitan in distribution' ✅; (ii) Fungi — Main text: 'Fungi are cosmopolitan and occur in air, water, soil and on animals and plants' ✅; (iii) Protists — described as 'primarily aquatic', NOT cosmopolitan ❌; (iv) Viruses — described as 'obligate parasites', NOT explicitly cosmopolitan ❌; (v) Lichens — not described as cosmopolitan ❌. So 2 groups. Common mistake: Assuming only bacteria OR only fungi are cosmopolitan — NCERT uses this term for BOTH."
  },
  {
    id: 289,
    topic: "Kingdom Fungi - Sexual Cycle Detail",
    difficulty: "Hard",
    type: "Statement",
    q: "During sexual reproduction in fungi, two haploid hyphae of compatible mating types come together and fuse. In some fungi, the fusion of two haploid cells <b>immediately</b> results in:",
    options: [
      "Dikaryotic cells (n + n)",
      "Haploid cells (n)",
      "Diploid cells (2n)",
      "Polyploid cells (4n)"
    ],
    correct: 2,
    explanation: "NCERT Line: 'In some fungi the fusion of two haploid cells immediately results in diploid cells (2n).' Key word: IMMEDIATELY — in some fungi (like Phycomycetes), there is no intervening dikaryotic stage. Option A (dikaryotic) occurs in ascomycetes and basidiomycetes where an INTERVENING dikaryotic stage occurs, not immediately diploid. Common mistake: Thinking dikaryotic stage occurs in all fungi — only in ascomycetes and basidiomycetes."
  },
  {
    id: 290,
    topic: "Cross-topic: Comprehensive Spore Comparison",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following are correctly paired?<br>(i) Zoospores — Motile, asexual, Phycomycetes<br>(ii) Aplanospores — Non-motile, asexual, Phycomycetes<br>(iii) Conidia — Asexual, produced endogenously in Ascomycetes<br>(iv) Ascospores — Sexual, produced endogenously in asci<br>(v) Basidiospores — Sexual, produced exogenously on basidia",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'zoospores (motile)' — asexual spore of Phycomycetes. (ii) CORRECT — NCERT: 'aplanospores (non-motile)' — asexual spore of Phycomycetes. (iii) INCORRECT — Conidia are produced EXOGENOUSLY on conidiophores, NOT endogenously. NCERT: 'conidia produced exogenously on the special mycelium called conidiophores.' KEY TRAP! (iv) CORRECT — NCERT: 'ascospores...produced endogenously in sac like asci.' (v) CORRECT — NCERT: 'basidiospores are exogenously produced on the basidium.' So 4 are correct. Common mistake: Saying conidia are endogenous — they are EXOGENOUS on conidiophores."
  },
  {
    id: 291,
    topic: "Kingdom Protista - Ciliated Protozoan Detail",
    difficulty: "Medium",
    type: "Statement",
    q: "In ciliated protozoans, food is directed into the gullet by:",
    options: [
      "Pseudopodial movement",
      "Flagellar movement",
      "Coordinated movement of rows of cilia",
      "Engulfing through the cell membrane"
    ],
    correct: 2,
    explanation: "NCERT Line: 'The coordinated movement of rows of cilia causes the water laden with food to be steered into the gullet.' It is the COORDINATED movement of ROWS of cilia that directs food. Option A = amoeboid protozoans. Option B = flagellated protozoans. Common mistake: Confusing the feeding mechanism of ciliated protozoans with amoeboid protozoans."
  },
  {
    id: 292,
    topic: "Cross-topic: Endogenous vs Exogenous Complete",
    difficulty: "Hard",
    type: "Statement",
    q: "Consider the following:<br>(A) Sporangiospores in Phycomycetes — Endogenous in sporangium<br>(B) Conidia in Ascomycetes — Exogenous on conidiophores<br>(C) Ascospores in Ascomycetes — Endogenous in asci<br>(D) Basidiospores in Basidiomycetes — Endogenous in basidia<br><br>Which of the above are <b>correct</b>?",
    options: [
      "A, B, C and D",
      "A, B and C only",
      "A, C and D only",
      "B, C and D only"
    ],
    correct: 1,
    explanation: "Analysis: (A) CORRECT — NCERT: 'spores are endogenously produced in sporangium.' (B) CORRECT — NCERT: 'conidia produced exogenously on conidiophores.' (C) CORRECT — NCERT: 'ascospores produced endogenously in sac like asci.' (D) INCORRECT — Basidiospores are produced EXOGENOUSLY on basidia, NOT endogenously. NCERT: 'basidiospores are exogenously produced on the basidium.' Pattern: Inside structures (sporangium, asci) = ENDO; On surface (conidiophores, basidia) = EXO. Common mistake: Saying basidiospores are endogenous — they are EXOGENOUS."
  },
  {
    id: 293,
    topic: "Cross-topic: Organism Examples — Ultimate Test",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following organism-class pairings within Kingdom Fungi are <b>correct</b>?<br>(i) Mucor — Phycomycetes<br>(ii) Saccharomyces — Ascomycetes<br>(iii) Neurospora — Basidiomycetes<br>(iv) Ustilago — Basidiomycetes<br>(v) Alternaria — Deuteromycetes<br>(vi) Albugo — Ascomycetes",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) Mucor — Phycomycetes ✅ (NCERT: 'Some common examples are Mucor...'). (ii) Saccharomyces — Ascomycetes ✅ (NCERT: 'rarely unicellular, e.g., yeast (Saccharomyces)'). (iii) Neurospora — Basidiomycetes ❌ — Neurospora is an ASCOMYCETE, not Basidiomycete. (iv) Ustilago — Basidiomycetes ✅ (NCERT: 'Ustilago (smut)'). (v) Alternaria — Deuteromycetes ✅ (NCERT: 'Alternaria, Colletotrichum and Trichoderma'). (vi) Albugo — Ascomycetes ❌ — Albugo is a PHYCOMYCETE. So 4 are correct. Common mistake: Misplacing Neurospora (Ascomycete → Basidiomycete) and Albugo (Phycomycete → Ascomycete)."
  },
  {
    id: 294,
    topic: "Cross-topic: Virus Meaning vs CVF",
    difficulty: "Hard",
    type: "Statement",
    q: "Which of the following correctly differentiates the meaning of 'virus' from '<i>Contagium vivum fluidum</i>'?",
    options: [
      "Virus means 'infectious living fluid'; CVF means 'venom or poisonous fluid'",
      "Virus means 'venom or poisonous fluid'; CVF means 'infectious living fluid'",
      "Both virus and CVF mean the same thing — 'infectious living fluid'",
      "Both virus and CVF mean the same thing — 'venom or poisonous fluid'"
    ],
    correct: 1,
    explanation: "NCERT Lines: 'Virus means venom or poisonous fluid' AND 'called the fluid as Contagium vivum fluidum (infectious living fluid).' These are TWO DIFFERENT meanings: Virus = venom/poisonous fluid; CVF = infectious living fluid. Option A reverses them. Options C and D equate them incorrectly. Common mistake: Thinking both terms mean the same thing — they have different literal meanings."
  },
  {
    id: 295,
    topic: "Kingdom Monera - Soil Bacteria",
    difficulty: "Easy",
    type: "Direct",
    q: "According to NCERT, how many bacteria are present in a handful of soil?",
    options: [
      "Thousands",
      "Millions",
      "Hundreds",
      "Tens"
    ],
    correct: 2,
    explanation: "NCERT Line: 'Hundreds of bacteria are present in a handful of soil.' The exact NCERT figure is HUNDREDS — not thousands or millions. This is a direct numerical recall. Option A (thousands) and B (millions) are common exaggerations students assume. Common mistake: Overestimating the number — NCERT specifically says 'hundreds'."
  },
  {
    id: 296,
    topic: "Kingdom Fungi - Common Examples",
    difficulty: "Medium",
    type: "Statement",
    q: "Which of the following is <b>correct</b> as per NCERT?",
    options: [
      "Toadstools are not fungi",
      "Common mushroom and toadstools are both fungi",
      "Toadstools are edible and mushrooms are poisonous",
      "Toadstools belong to Kingdom Protista"
    ],
    correct: 1,
    explanation: "NCERT Line: 'The common mushroom you eat and toadstools are also fungi.' Both mushrooms and toadstools are fungi. Option A directly contradicts NCERT. Option C reverses the edibility — generally, mushrooms are edible while many toadstools are poisonous (though NCERT doesn't make this explicit distinction here). Common mistake: Not knowing that toadstools are fungi — they belong to Basidiomycetes."
  },
  {
    id: 297,
    topic: "Cross-topic: Comprehensive Disease-Organism-Kingdom",
    difficulty: "Hard",
    type: "Except",
    q: "All of the following disease-organism-kingdom combinations are correct <b>EXCEPT</b>:",
    options: [
      "Cholera — Bacteria — Monera",
      "Sleeping sickness — Trypanosoma — Protista",
      "Potato spindle tuber disease — Viroid — Not classified in five kingdoms",
      "Citrus canker — Virus — Not classified in five kingdoms"
    ],
    correct: 3,
    explanation: "NCERT clearly states citrus canker is a BACTERIAL disease (Kingdom Monera): 'Cholera, typhoid, tetanus, citrus canker are well known diseases caused by different bacteria.' Option D incorrectly classifies citrus canker as a viral disease. Options A, B, C are all correct. Common mistake: Thinking citrus canker is caused by a virus — it is a bacterial disease mentioned alongside cholera and typhoid."
  },
  {
    id: 298,
    topic: "Cross-topic: Ultimate Chapter Integration",
    difficulty: "Hard",
    type: "HowMany",
    q: "How many of the following statements from Chapter 2 are <b>correct</b>?<br>(i) The character that unified the old Plant kingdom was cell wall<br>(ii) Fungi prefer warm and humid places<br>(iii) Bacteria show the most extensive morphological diversity<br>(iv) Lichens do not grow in polluted areas<br>(v) In general, plant viruses have single stranded RNA<br>(vi) Viroids have low molecular weight RNA with a protein coat",
    options: [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
    explanation: "Analysis: (i) CORRECT — NCERT: 'The character that unified this whole kingdom was that all the organisms included had a cell wall in their cells.' (ii) CORRECT — NCERT: 'They prefer to grow in warm and humid places.' (iii) INCORRECT — NCERT says 'most extensive METABOLIC diversity', NOT 'morphological diversity.' One-word swap! (iv) CORRECT — NCERT: 'they do not grow in polluted areas.' (v) CORRECT — NCERT: 'In general, viruses that infect plants have single stranded RNA.' (vi) INCORRECT — Viroids have low molecular weight RNA but LACK protein coat. NCERT: 'it lacked the protein coat.' So 4 are correct. Common mistakes: (a) Metabolic vs morphological swap, (b) Adding protein coat to viroids."
  }
];
