var allQuestions = [
  {
    id: 1,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following is <b>not</b> included under Kingdom Plantae in the modern classification?",
    options: [
      "Cyanobacteria",
      "Bryophytes",
      "Pteridophytes",
      "Gymnosperms"
    ], correct: 0,
    explanation: "Cyanobacteria (blue-green algae) belong to Kingdom Monera and have been excluded from Plantae. Despite the name 'algae,' they are prokaryotic and not true plants."
  },
  {
    id: 2,
    topic: "Introduction – Plant Kingdom",
    q: "The Five Kingdom classification was proposed by:",
    options: [
      "Bentham and Hooker",
      "Whittaker",
      "Linnaeus",
      "Engler and Prantl"
    ], correct: 1,
    explanation: "R.H. Whittaker (1969) proposed the Five Kingdom classification — Monera, Protista, Fungi, Animalia and Plantae."
  },
  {
    id: 3,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following groups were earlier placed under Plantae but are now <b>excluded</b>?<br>(i) Fungi<br>(ii) Monera with cell walls<br>(iii) Protista with cell walls<br>(iv) Gymnosperms",
    options: [
      "(ii) and (iii) only",
      "(i) and (iv) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)"
    ], correct: 2,
    explanation: "Fungi, cell-walled members of Monera (e.g., cyanobacteria) and cell-walled Protista were earlier placed in Plantae but are now excluded. Gymnosperms remain in Plantae."
  },
  {
    id: 4,
    topic: "Introduction – Plant Kingdom",
    q: "Artificial classification systems are characterised by:<br>(A) Being based on a few superficial morphological characters<br>(B) Giving equal weightage to vegetative and sexual characters<br>(C) Separating closely related species<br>(D) All of the above",
    options: [
      "Only (A) and (B)",
      "Only (A) and (C)",
      "Only (B) and (C)",
      "All of the above"
    ],
    correct: 3,
    explanation: "Artificial systems used gross superficial characters, gave equal weightage to vegetative and sexual features, and often separated closely related species. All statements are correct."
  },
  {
    id: 5,
    topic: "Introduction – Plant Kingdom",
    q: "The classification system given by Linnaeus was based primarily on:",
    options: [
      "Androecium structure",
      "Evolutionary relationships",
      "Phytochemistry",
      "Embryological features"
    ], correct: 0,
    explanation: "Linnaeus's system of classification was based on the androecium structure (stamens). It is considered an artificial system."
  },
  {
    id: 6,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Artificial systems of classification are not acceptable.<br><br><b>Reason (R):</b> Vegetative characters are more easily affected by environment than sexual characters.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Artificial systems gave equal weightage to vegetative and sexual characters. Since vegetative characters are easily influenced by environment, these systems are unreliable. R correctly explains why A is true."
  },
  {
    id: 7,
    topic: "Introduction – Plant Kingdom",
    q: "Natural classification of flowering plants was given by:",
    options: [
      "Linnaeus",
      "George Bentham and Joseph Dalton Hooker",
      "Whittaker",
      "Engler and Prantl"
    ], correct: 1,
    explanation: "George Bentham and Joseph Dalton Hooker gave a natural classification system for flowering plants based on natural affinities."
  },
  {
    id: 8,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following features are considered in <b>natural classification</b> but <b>not</b> in artificial classification?<br>(i) Ultrastructure<br>(ii) Anatomy<br>(iii) Embryology<br>(iv) Phytochemistry<br>(v) Habit and colour",
    options: [
      "(v) only",
      "(i), (ii), (iii), (iv) and (v)",
      "(i), (ii), (iii) and (iv)",
      "(i) and (ii) only"
    ], correct: 2,
    explanation: "Natural classification considers internal features like ultrastructure, anatomy, embryology and phytochemistry. Habit and colour are superficial characters used in artificial systems."
  },
  {
    id: 9,
    topic: "Introduction – Plant Kingdom",
    q: "Phylogenetic classification is based on:",
    options: [
      "Gross morphological characters",
      "Vegetative characters only",
      "Chemical constituents of the plant",
      "Evolutionary relationships"
    ], correct: 3,
    explanation: "Phylogenetic classification systems are based on evolutionary relationships between organisms and assume that members of the same taxa share a common ancestor."
  },
  {
    id: 10,
    topic: "Introduction – Plant Kingdom",
    q: "In phylogenetic classification, organisms belonging to the same taxa are assumed to have:",
    options: [
      "A common ancestor",
      "Similar habitat",
      "Same chromosome number",
      "Identical chemical composition"
    ], correct: 0,
    explanation: "Phylogenetic classification assumes a common ancestor for organisms placed in the same taxon, reflecting evolutionary descent."
  },
  {
    id: 11,
    topic: "Introduction – Plant Kingdom",
    q: "Numerical taxonomy is based on:",
    options: [
      "Only reproductive characters",
      "All observable characteristics processed using computers",
      "Only molecular data",
      "Fossil evidence"
    ],
    correct: 1,
    explanation: "Numerical taxonomy uses all observable characteristics. Numbers and codes are assigned to all characters and data is processed by computers, giving equal importance to each character."
  },
  {
    id: 12,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following statements about <b>Numerical Taxonomy</b> is/are correct?<br>(i) Each character is given equal importance<br>(ii) Hundreds of characters can be considered simultaneously<br>(iii) It is easily carried out using computers<br>(iv) It gives more weightage to reproductive characters",
    options: [
      "(i), (ii), (iii) and (iv)",
      "(i) and (iii) only",
      "(i), (ii) and (iii) only",
      "(iv) only"
    ], correct: 2,
    explanation: "In numerical taxonomy, every character is given equal importance, hundreds of characters can be considered, and computation is done by computers. Statement (iv) is wrong — no extra weightage is given to reproductive characters."
  },
  {
    id: 13,
    topic: "Introduction – Plant Kingdom",
    q: "Cytotaxonomy is based on:",
    options: [
      "Chemical constituents of the plant",
      "Anatomical features only",
      "Fossil records",
      "Chromosome number, structure and behaviour"
    ], correct: 3,
    explanation: "Cytotaxonomy uses cytological information such as chromosome number, structure and behaviour for classification."
  },
  {
    id: 14,
    topic: "Introduction – Plant Kingdom",
    q: "Chemotaxonomy utilises which of the following for resolving taxonomic confusions?",
    options: [
      "Chemical constituents of the plant",
      "Evolutionary relationships",
      "Cytological information",
      "Morphological features"
    ], correct: 0,
    explanation: "Chemotaxonomy uses chemical constituents of plants to help resolve taxonomic confusions."
  },
  {
    id: 15,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Cyanobacteria are no longer classified as algae.<br><br><b>Reason (R):</b> Cyanobacteria are prokaryotic organisms belonging to Kingdom Monera.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Cyanobacteria (blue-green algae) are prokaryotic, placed under Monera, and hence no longer classified under Plantae as algae. R correctly explains A."
  },
  {
    id: 16,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following is the correct sequence of classification systems from earliest to most recent?",
    options: [
      "Natural → Artificial → Phylogenetic",
      "Artificial → Natural → Phylogenetic",
      "Phylogenetic → Artificial → Natural",
      "Natural → Phylogenetic → Artificial"
    ], correct: 1,
    explanation: "The earliest were artificial systems (e.g., Linnaeus), followed by natural systems (e.g., Bentham & Hooker), and presently phylogenetic classification systems are accepted."
  },
  {
    id: 17,
    topic: "Introduction – Plant Kingdom",
    q: "Consider the following statements:<br>(i) Linnaeus's classification is an example of a natural system.<br>(ii) Bentham and Hooker's classification is a natural system.<br>(iii) Phylogenetic systems consider evolutionary relationships.<br>Which of the above statements is/are correct?",
    options: [
      "(i) and (ii) only",
      "(i) only",
      "(ii) and (iii) only",
      "(i), (ii) and (iii)"
    ], correct: 2,
    explanation: "Linnaeus's system is artificial (based on androecium), not natural. Bentham and Hooker gave a natural classification. Phylogenetic systems are based on evolutionary relationships. So (ii) and (iii) are correct."
  },
  {
    id: 18,
    topic: "Introduction – Plant Kingdom",
    q: "Why is the artificial system of classification considered <b>unacceptable</b>?<br>(A) It gives equal importance to vegetative and sexual characters<br>(B) Vegetative characters are more easily affected by environment<br>(C) Closely related species often get separated<br>(D) All of the above",
    options: [
      "Only (A) and (B)",
      "Only (B) and (C)",
      "Only (A)",
      "All of the above"
    ],
    correct: 3,
    explanation: "All three reasons contribute to the unacceptability of artificial systems. Equal weightage to environmentally influenced vegetative characters and separation of closely related species make them unreliable."
  },
  {
    id: 19,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following is <b>not</b> a major group described under Kingdom Plantae in this chapter?",
    options: [
      "Fungi",
      "Algae",
      "Bryophytes",
      "Angiosperms"
    ], correct: 0,
    explanation: "Fungi have been excluded from Kingdom Plantae. The chapter describes Algae, Bryophytes, Pteridophytes, Gymnosperms and Angiosperms under Plantae."
  },
  {
    id: 20,
    topic: "Introduction – Plant Kingdom",
    q: "Match the following:<br>(a) Numerical Taxonomy → (i) Chemical constituents<br>(b) Cytotaxonomy → (ii) All observable characters with computer processing<br>(c) Chemotaxonomy → (iii) Chromosome number, structure, behaviour",
    options: [
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(iii), c-(i)",
      "a-(iii), b-(i), c-(ii)",
      "a-(ii), b-(i), c-(iii)"
    ], correct: 1,
    explanation: "Numerical taxonomy uses all observable characters processed by computers (ii). Cytotaxonomy is based on chromosomal information (iii). Chemotaxonomy uses chemical constituents (i)."
  },
  {
    id: 21,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Natural classification is considered superior to artificial classification.<br><br><b>Reason (R):</b> Natural classification considers not only external features but also internal features like anatomy, embryology and phytochemistry.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Natural classification is superior because it is based on natural affinities considering both external and internal features, unlike artificial systems that rely on superficial characters. R correctly explains A."
  },
  {
    id: 22,
    topic: "Introduction – Plant Kingdom",
    q: "The earliest systems of classification used:<br>(i) Habit<br>(ii) Colour<br>(iii) Number and shape of leaves<br>(iv) Embryological features",
    options: [
      "(iv) only",
      "(i), (ii), (iii) and (iv)",
      "(i), (ii) and (iii) only",
      "(i) and (iii) only"
    ], correct: 2,
    explanation: "The earliest (artificial) systems used gross superficial morphological characters such as habit, colour, number and shape of leaves. Embryological features were used in natural systems, not artificial ones."
  },
  {
    id: 23,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following taxonomic tools becomes especially important when there is <b>no supporting fossil evidence</b>?",
    options: [
      "Only morphological classification",
      "Only the Linnaeus system",
      "Artificial classification systems",
      "Numerical taxonomy, cytotaxonomy and chemotaxonomy"
    ], correct: 3,
    explanation: "When fossil evidence is unavailable, alternative sources like numerical taxonomy, cytotaxonomy and chemotaxonomy help resolve classification difficulties."
  },
  {
    id: 24,
    topic: "Introduction – Plant Kingdom",
    q: "In which year was the Five Kingdom classification proposed?",
    options: [
      "1969",
      "1959",
      "1979",
      "1989"
    ], correct: 0,
    explanation: "Whittaker proposed the Five Kingdom classification in 1969."
  },
  {
    id: 25,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following kingdoms are included in Whittaker's Five Kingdom classification?<br>(i) Monera<br>(ii) Protista<br>(iii) Fungi<br>(iv) Animalia<br>(v) Plantae",
    options: [
      "(i), (ii) and (v) only",
      "(i), (ii), (iii), (iv) and (v)",
      "(i), (iii) and (v) only",
      "(ii), (iv) and (v) only"
    ],
    correct: 1,
    explanation: "Whittaker's Five Kingdom classification includes all five — Monera, Protista, Fungi, Animalia and Plantae."
  },
  {
    id: 26,
    topic: "Introduction – Plant Kingdom",
    q: "Select the <b>incorrect</b> statement regarding artificial classification systems:",
    options: [
      "They used gross superficial morphological characters",
      "They separated closely related species",
      "They considered evolutionary relationships",
      "They gave equal weightage to vegetative and sexual characters"
    ],
    correct: 2,
    explanation: "Artificial systems did NOT consider evolutionary relationships. Evolutionary relationships are the basis of phylogenetic classification, not artificial classification."
  },
  {
    id: 27,
    topic: "Introduction – Plant Kingdom",
    q: "Consider the following:<br>Statement I: Blue-green algae are true algae belonging to Kingdom Plantae.<br>Statement II: Fungi were earlier classified under Plantae but are now excluded.<br>Which of the above is correct?",
    options: [
      "Only Statement I",
      "Neither Statement I nor Statement II",
      "Both Statement I and Statement II",
      "Only Statement II"
    ], correct: 3,
    explanation: "Blue-green algae (cyanobacteria) are prokaryotes belonging to Monera, not true algae — so Statement I is wrong. Fungi were indeed earlier placed in Plantae but now excluded — Statement II is correct."
  },
  {
    id: 28,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following is <b>not</b> a feature used in natural classification?",
    options: [
      "Only habit and colour",
      "Ultrastructure",
      "Phytochemistry",
      "Embryology"
    ], correct: 0,
    explanation: "Only habit and colour are superficial features used in artificial classification. Natural classification uses embryology, ultrastructure, anatomy and phytochemistry."
  },
  {
    id: 29,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> In numerical taxonomy, each character is given equal importance.<br><br><b>Reason (R):</b> Numbers and codes are assigned to all characters and data are processed by computers.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "In numerical taxonomy, all observable characters are assigned numbers/codes and processed by computers, ensuring each character gets equal importance. R correctly explains how A is achieved."
  },
  {
    id: 30,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following classification system is <b>presently acceptable</b>?",
    options: [
      "Artificial classification",
      "Phylogenetic classification",
      "Natural classification",
      "Classification by Linnaeus"
    ], correct: 1,
    explanation: "At present, phylogenetic classification systems based on evolutionary relationships are considered the most acceptable."
  },
  {
    id: 31,
    topic: "Introduction – Plant Kingdom",
    q: "Identify the correct pair:<br>(A) Cytotaxonomy – Chemical constituents<br>(B) Chemotaxonomy – Chromosome number<br>(C) Numerical Taxonomy – All observable characters<br>(D) Artificial system – Embryological features",
    options: [
      "Cytotaxonomy – Chemical constituents",
      "Chemotaxonomy – Chromosome number",
      "Numerical Taxonomy – All observable characters",
      "Artificial system – Embryological features"
    ],
    correct: 2,
    explanation: "Numerical taxonomy uses all observable characteristics. Cytotaxonomy uses chromosomal data (not chemicals), Chemotaxonomy uses chemical constituents (not chromosomes), and artificial systems use superficial characters (not embryology)."
  },
  {
    id: 32,
    topic: "Introduction – Plant Kingdom",
    q: "Which one of the following groups is <b>correctly</b> described under Kingdom Plantae in modern classification?",
    options: [
      "Algae, Bryophytes, Fungi, Gymnosperms, Angiosperms",
      "Algae, Bryophytes, Pteridophytes, Fungi, Angiosperms",
      "Cyanobacteria, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms",
      "Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms"
    ], correct: 3,
    explanation: "Under Kingdom Plantae, the groups described are Algae, Bryophytes, Pteridophytes, Gymnosperms and Angiosperms. Fungi and Cyanobacteria are excluded."
  },
  {
    id: 33,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following characters is most <b>unreliable</b> for classification because it is easily affected by environment?",
    options: [
      "Vegetative characters",
      "Reproductive characters",
      "Chromosomal characters",
      "Chemical constituents"
    ], correct: 0,
    explanation: "Vegetative characters (habit, leaf shape, colour, etc.) are more easily influenced by environmental factors, making them unreliable for classification compared to reproductive characters."
  },
  {
    id: 34,
    topic: "Introduction – Plant Kingdom",
    q: "The natural classification system for flowering plants given by Bentham and Hooker considered:<br>(i) External features<br>(ii) Internal features<br>(iii) Ultrastructure<br>(iv) Anatomy<br>(v) Embryology<br>(vi) Phytochemistry",
    options: [
      "(i) only",
      "(i), (ii), (iii), (iv), (v) and (vi)",
      "(i) and (ii) only",
      "(iii), (iv), (v) and (vi) only"
    ], correct: 1,
    explanation: "Natural classification systems consider not only external features but also internal features including ultrastructure, anatomy, embryology and phytochemistry — all six are considered."
  },
  {
    id: 35,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Artificial systems of classification often separated closely related species.<br><br><b>Reason (R):</b> They were based on only a few superficial morphological characteristics.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Because artificial systems relied on only a few superficial characters (like habit, colour, leaf shape), closely related species with different superficial appearances were often placed in separate groups. R correctly explains A."
  },
  {
    id: 36,
    topic: "Algae",
    q: "Which of the following is <b>not</b> a characteristic of algae?",
    options: [
      "Chlorophyll-bearing",
      "Thalloid body",
      "Heterotrophic nutrition",
      "Largely aquatic"
    ],
    correct: 2,
    explanation: "Algae are autotrophic (photosynthetic), not heterotrophic. They are chlorophyll-bearing, thalloid, simple and largely aquatic organisms."
  },
  {
    id: 37,
    topic: "Algae",
    q: "Algae can occur in association with fungi and animals. Select the correct pair:",
    options: [
      "Lichen – association with animals",
      "Algae on sloth bear – association with fungi",
      "Algae on moist stones – association with animals",
      "Lichen – association with fungi"
    ], correct: 3,
    explanation: "Lichens represent an association between algae and fungi. Algae also occur on animals like the sloth bear, but lichen is specifically an algae-fungi association."
  },
  {
    id: 38,
    topic: "Algae",
    q: "Match the following algal forms with their body types:<br>(a) Volvox – (i) Filamentous<br>(b) Ulothrix – (ii) Colonial<br>(c) Spirogyra – (iii) Massive plant body<br>(d) Kelps – (iv) Filamentous",
    options: [
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(ii), b-(iv), c-(i), d-(iii)",
      "a-(iii), b-(i), c-(iv), d-(ii)"
    ],
    correct: 0,
    explanation: "Volvox is colonial (ii), Ulothrix is filamentous (i), Spirogyra is filamentous (iv), and Kelps form massive plant bodies (iii)."
  },
  {
    id: 39,
    topic: "Algae",
    q: "The most common type of asexual spore produced by algae is:",
    options: [
      "Aplanospore",
      "Zoospore",
      "Hypnospore",
      "Autospore"
    ], correct: 1,
    explanation: "The most common asexual spores in algae are zoospores, which are flagellated (motile) and on germination give rise to new plants."
  },
  {
    id: 40,
    topic: "Algae",
    q: "In <b>Spirogyra</b>, sexual reproduction involves fusion of gametes that are:",
    options: [
      "Flagellated and similar in size",
      "Flagellated and dissimilar in size",
      "Non-flagellated and similar in size",
      "Non-motile female and motile male"
    ], correct: 2,
    explanation: "In Spirogyra, gametes are non-flagellated (non-motile) but similar in size. This type of isogamous reproduction involves non-motile isogametes."
  },
  {
    id: 41,
    topic: "Algae",
    q: "Which of the following correctly represents <b>anisogamous</b> reproduction?",
    options: [
      "Fusion of flagellated gametes of similar size as in Ulothrix",
      "Fusion of non-flagellated gametes of similar size as in Spirogyra",
      "Fusion of a large non-motile female gamete and smaller motile male gamete as in Volvox",
      "Fusion of two gametes dissimilar in size as in Eudorina"
    ], correct: 3,
    explanation: "Anisogamous reproduction involves fusion of two gametes that are dissimilar in size, as seen in species of Eudorina. Volvox and Fucus show oogamy, not anisogamy."
  },
  {
    id: 42,
    topic: "Algae",
    q: "Oogamous reproduction is characterised by:<br>(i) Large, non-motile female gamete<br>(ii) Smaller, motile male gamete<br>(iii) Both gametes similar in size<br>(iv) Found in Volvox and Fucus",
    options: [
      "(i), (ii) and (iv) only",
      "(i) and (ii) only",
      "(iii) and (iv) only",
      "(i), (ii), (iii) and (iv)"
    ],
    correct: 0,
    explanation: "Oogamy involves a large non-motile (static) female gamete and a smaller motile male gamete. It is found in Volvox and Fucus. Statement (iii) is wrong — gametes are dissimilar in size."
  },
  {
    id: 43,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Algae are of paramount importance as primary producers in aquatic ecosystems.<br><br><b>Reason (R):</b> At least half of the total carbon dioxide fixation on earth is carried out by algae.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Algae are primary producers of energy-rich compounds forming the basis of aquatic food cycles. Their massive contribution to CO₂ fixation (at least half on earth) supports their role as primary producers. R correctly explains A."
  },
  {
    id: 44,
    topic: "Algae",
    q: "Which of the following is <b>incorrectly</b> matched?",
    options: [
      "Porphyra – Marine algae used as food",
      "Laminaria – Source of carrageen",
      "Chlorella – Unicellular alga used as food supplement",
      "Gelidium – Source of agar"
    ], correct: 1,
    explanation: "Carrageen is obtained from red algae, not from Laminaria (which is a brown alga). Laminaria is used as food. Algin is obtained from brown algae, and carrageen from red algae."
  },
  {
    id: 45,
    topic: "Algae",
    q: "Agar is commercially obtained from:",
    options: [
      "Sargassum and Laminaria",
      "Porphyra and Polysiphonia",
      "Gelidium and Gracilaria",
      "Chlorella and Chlamydomonas"
    ], correct: 2,
    explanation: "Agar is obtained from Gelidium and Gracilaria (red algae). It is used to grow microbes and in preparation of ice-creams and jellies."
  },
  {
    id: 46,
    topic: "Algae",
    q: "<b>Chlorella</b> is used as a food supplement because it is:",
    options: [
      "Rich in carbohydrates",
      "Rich in minerals only",
      "Rich in lipids only",
      "Rich in proteins"
    ], correct: 3,
    explanation: "Chlorella is a unicellular alga rich in proteins, used as a food supplement even by space travellers."
  },
  {
    id: 47,
    topic: "Algae",
    q: "Hydrocolloids like <b>algin</b> and <b>carrageen</b> are obtained from:",
    options: [
      "Brown algae and red algae respectively",
      "Green algae and brown algae respectively",
      "Red algae and green algae respectively",
      "Brown algae and green algae respectively"
    ], correct: 0,
    explanation: "Algin is obtained from brown algae and carrageen from red algae. Both are hydrocolloids (water-holding substances) used commercially."
  },
  {
    id: 48,
    topic: "Algae",
    q: "The major pigments present in Chlorophyceae are:",
    options: [
      "Chlorophyll a, c and fucoxanthin",
      "Chlorophyll a and b",
      "Chlorophyll a, d and r-phycoerythrin",
      "Chlorophyll a, b and phycoerythrin"
    ], correct: 1,
    explanation: "Chlorophyceae (green algae) have chlorophyll a and b as dominant pigments, which give them a grass green colour."
  },
  {
    id: 49,
    topic: "Algae",
    q: "Pyrenoids in green algae contain:",
    options: [
      "Starch only",
      "Protein only",
      "Protein besides starch",
      "Lipids and starch"
    ],
    correct: 2,
    explanation: "Pyrenoids are storage bodies located in chloroplasts of green algae. They contain protein besides starch."
  },
  {
    id: 50,
    topic: "Algae",
    q: "The cell wall of green algae is composed of:",
    options: [
      "Inner layer of pectose and outer layer of cellulose",
      "Cellulose and algin",
      "Only cellulose",
      "Inner layer of cellulose and outer layer of pectose"
    ], correct: 3,
    explanation: "Green algae have a rigid cell wall made of an inner layer of cellulose and an outer layer of pectose."
  },
  {
    id: 51,
    topic: "Algae",
    q: "Which of the following chloroplast shapes is <b>not</b> found in green algae?",
    options: [
      "All of these are found in green algae",
      "Spiral or ribbon-shaped",
      "Reticulate",
      "Cup-shaped"
    ], correct: 0,
    explanation: "Chloroplasts in green algae can be discoid, plate-like, reticulate, cup-shaped, spiral or ribbon-shaped. All forms mentioned are found in different species of green algae."
  },
  {
    id: 52,
    topic: "Algae",
    q: "Which of the following statements about <b>Phaeophyceae</b> is <b>incorrect</b>?",
    options: [
      "They are found primarily in marine habitats",
      "Food is stored as floridean starch",
      "They possess chlorophyll a and c",
      "Kelps may reach a height of 100 metres"
    ], correct: 1,
    explanation: "Floridean starch is the stored food in Rhodophyceae (red algae), not Phaeophyceae. Brown algae store food as laminarin or mannitol."
  },
  {
    id: 53,
    topic: "Algae",
    q: "The brown colour of Phaeophyceae is due to the presence of:",
    options: [
      "r-phycoerythrin",
      "Chlorophyll b",
      "Fucoxanthin",
      "Phycocyanin"
    ],
    correct: 2,
    explanation: "Brown algae vary in colour from olive green to various shades of brown depending upon the amount of the xanthophyll pigment fucoxanthin present in them."
  },
  {
    id: 54,
    topic: "Algae",
    q: "In brown algae, the vegetative cell wall is composed of:",
    options: [
      "Cellulose only",
      "Pectose and cellulose",
      "Cellulose, pectin and polysulphate esters",
      "Cellulose with a gelatinous coating of algin"
    ], correct: 3,
    explanation: "Brown algae have a cellulosic wall usually covered on the outside by a gelatinous coating of algin."
  },
  {
    id: 55,
    topic: "Algae",
    q: "The plant body of brown algae is usually differentiated into:<br>(i) Holdfast<br>(ii) Stipe<br>(iii) Frond<br>Select the correct option:",
    options: [
      "(i), (ii) and (iii)",
      "(i) and (iii) only",
      "(i) and (ii) only",
      "(ii) and (iii) only"
    ], correct: 0,
    explanation: "Brown algae body is usually attached by a holdfast, has a stalk called stipe, and a leaf-like photosynthetic organ called the frond."
  },
  {
    id: 56,
    topic: "Algae",
    q: "Zoospores of brown algae are characterised by being:",
    options: [
      "Biflagellate, pear-shaped with two equal apically attached flagella",
      "Biflagellate, pear-shaped with two unequal laterally attached flagella",
      "Uniflagellate and spherical",
      "Non-flagellated and non-motile"
    ],
    correct: 1,
    explanation: "Asexual reproduction in most brown algae is by biflagellate zoospores that are pear-shaped and have two unequal laterally attached flagella."
  },
  {
    id: 57,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Red algae can occur at great depths in oceans.<br><br><b>Reason (R):</b> The red pigment r-phycoerythrin enables them to absorb blue-green wavelengths of light that penetrate deep water.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Red algae occur in both well-lighted and deep ocean regions because r-phycoerythrin can absorb blue-green light wavelengths that penetrate to greater depths. R correctly explains A."
  },
  {
    id: 58,
    topic: "Algae",
    q: "Floridean starch is structurally very similar to:",
    options: [
      "Amylose and cellulose",
      "Starch and mannitol",
      "Amylopectin and glycogen",
      "Laminarin and mannitol"
    ], correct: 2,
    explanation: "Floridean starch, the stored food of red algae, is very similar to amylopectin and glycogen in structure."
  },
  {
    id: 59,
    topic: "Algae",
    q: "Which of the following is a <b>unique</b> feature of Rhodophyceae regarding reproduction?",
    options: [
      "They reproduce by flagellated zoospores",
      "They produce biflagellate gametes",
      "Sexual reproduction is isogamous",
      "Both spores and gametes are non-motile"
    ], correct: 3,
    explanation: "Red algae reproduce asexually by non-motile spores and sexually by non-motile gametes. Flagella are completely absent in Rhodophyceae — this is a distinctive feature."
  },
  {
    id: 60,
    topic: "Algae",
    q: "Sexual reproduction in red algae is:",
    options: [
      "Oogamous with complex post-fertilisation developments",
      "Anisogamous",
      "Isogamous",
      "Both isogamous and anisogamous"
    ], correct: 0,
    explanation: "Sexual reproduction in Rhodophyceae is oogamous and is accompanied by complex post-fertilisation developments."
  },
  {
    id: 61,
    topic: "Algae",
    q: "Consider the following statements:<br>(i) Chlorophyceae stores food as starch<br>(ii) Phaeophyceae stores food as mannitol or laminarin<br>(iii) Rhodophyceae stores food as floridean starch<br>(iv) All three classes store food as starch<br>Which statements are correct?",
    options: [
      "(i) and (iv) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only"
    ], correct: 1,
    explanation: "Green algae store starch, brown algae store mannitol/laminarin, and red algae store floridean starch. Statement (iv) is incorrect — storage forms differ among the three classes."
  },
  {
    id: 62,
    topic: "Algae",
    q: "Which class of algae has flagella <b>completely absent</b>?",
    options: [
      "Chlorophyceae",
      "Phaeophyceae",
      "Rhodophyceae",
      "Both Chlorophyceae and Rhodophyceae"
    ],
    correct: 2,
    explanation: "Rhodophyceae (red algae) lack flagella entirely. Both their spores and gametes are non-motile. Green and brown algae produce flagellated zoospores."
  },
  {
    id: 63,
    topic: "Algae",
    q: "Match the following algal classes with their cell wall composition:<br>(a) Chlorophyceae – (i) Cellulose and algin<br>(b) Phaeophyceae – (ii) Cellulose, pectin and polysulphate esters<br>(c) Rhodophyceae – (iii) Cellulose and pectose",
    options: [
      "a-(iii), b-(ii), c-(i)",
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(iii), c-(i)",
      "a-(iii), b-(i), c-(ii)"
    ], correct: 3,
    explanation: "Chlorophyceae: cellulose + pectose (iii); Phaeophyceae: cellulose + algin (i); Rhodophyceae: cellulose + pectin + polysulphate esters (ii)."
  },
  {
    id: 64,
    topic: "Algae",
    q: "The flagellar number and position in Chlorophyceae is:",
    options: [
      "2–8, equal, apical",
      "2, unequal, lateral",
      "Absent",
      "2, equal, lateral"
    ],
    correct: 0,
    explanation: "Green algae have 2–8 equal flagella with apical insertion. Brown algae have 2 unequal lateral flagella. Red algae lack flagella entirely."
  },
  {
    id: 65,
    topic: "Algae",
    q: "Which of the following algae is <b>not</b> a member of Rhodophyceae?",
    options: [
      "Polysiphonia",
      "Ectocarpus",
      "Porphyra",
      "Gracilaria"
    ], correct: 1,
    explanation: "Ectocarpus is a member of Phaeophyceae (brown algae), not Rhodophyceae. Polysiphonia, Porphyra, Gracilaria and Gelidium are red algae."
  },
  {
    id: 66,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Vegetative reproduction in all three classes of algae occurs by fragmentation.<br><br><b>Reason (R):</b> Fragmentation is the only method of reproduction found in algae.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "A is true — all three classes reproduce vegetatively by fragmentation. But R is false — algae also reproduce asexually (by spores) and sexually (by fusion of gametes). Fragmentation is not the only method."
  },
  {
    id: 67,
    topic: "Algae",
    q: "Which of the following correctly describes the <b>habitat</b> distribution of the three algal classes?",
    options: [
      "Chlorophyceae – mostly marine; Phaeophyceae – freshwater; Rhodophyceae – marine",
      "Chlorophyceae – only freshwater; Phaeophyceae – mostly freshwater; Rhodophyceae – primarily marine",
      "Chlorophyceae – freshwater, brackish and salt water; Phaeophyceae – primarily marine; Rhodophyceae – mostly marine in warmer areas",
      "Chlorophyceae – mostly marine; Phaeophyceae – only marine; Rhodophyceae – only freshwater"
    ],
    correct: 2,
    explanation: "Green algae occur in fresh, brackish and salt water. Brown algae are primarily marine. Red algae are mostly marine with greater concentrations in warmer areas."
  },
  {
    id: 68,
    topic: "Algae",
    q: "In brown algae, gametes are:",
    options: [
      "Pyriform with two equal apically attached flagella",
      "Amoeboid and non-flagellated",
      "Spherical and non-motile",
      "Pyriform with two laterally attached flagella"
    ], correct: 3,
    explanation: "In brown algae, gametes are pyriform (pear-shaped) and bear two laterally attached flagella."
  },
  {
    id: 69,
    topic: "Algae",
    q: "Consider the following statements about types of sexual reproduction in algae:<br>(A) Isogamous – fusion of flagellated, similar-sized gametes occurs in <b>Ulothrix</b><br>(B) Isogamous – fusion of non-flagellated, similar-sized gametes occurs in <b>Spirogyra</b><br>(C) Anisogamous – fusion of dissimilar-sized gametes occurs in <b>Eudorina</b><br>(D) Oogamous – fusion of large non-motile female and smaller motile male gamete occurs in <b>Volvox</b>",
    options: [
      "All A, B, C and D are correct",
      "Only A, B and C are correct",
      "Only A and B are correct",
      "Only C and D are correct"
    ], correct: 0,
    explanation: "All four statements are correct as per NCERT. Ulothrix – flagellated isogamy; Spirogyra – non-flagellated isogamy; Eudorina – anisogamy; Volvox – oogamy."
  },
  {
    id: 70,
    topic: "Algae",
    q: "Which of the following is <b>not</b> a use of agar obtained from red algae?",
    options: [
      "Growing microbes in laboratories",
      "Extraction of algin for commercial use",
      "Preparation of jellies",
      "Preparation of ice-creams"
    ], correct: 1,
    explanation: "Algin is obtained from brown algae, not from agar/red algae. Agar (from Gelidium and Gracilaria) is used to grow microbes, and in ice-cream and jelly preparations."
  },
  {
    id: 71,
    topic: "Algae",
    q: "Which pigment is responsible for the <b>red colour</b> in Rhodophyceae?",
    options: [
      "Fucoxanthin",
      "Chlorophyll d",
      "r-phycoerythrin",
      "Chlorophyll b"
    ],
    correct: 2,
    explanation: "The predominance of the red pigment r-phycoerythrin gives red algae their characteristic colour."
  },
  {
    id: 72,
    topic: "Algae",
    q: "Which of the following algae can show <b>all three types</b> of sexual reproduction — isogamous, anisogamous and oogamous?",
    options: [
      "Only Rhodophyceae",
      "Only Chlorophyceae",
      "Only Phaeophyceae",
      "Both Chlorophyceae and Phaeophyceae"
    ], correct: 3,
    explanation: "Both Chlorophyceae (green algae) and Phaeophyceae (brown algae) can exhibit isogamous, anisogamous or oogamous sexual reproduction. Red algae show only oogamous reproduction."
  },
  {
    id: 73,
    topic: "Algae",
    q: "Which of the following is a correct statement about <b>Phaeophyceae</b>?",
    options: [
      "The simplest form is Ectocarpus and the largest forms are kelps reaching up to 100 metres",
      "Food is stored as floridean starch",
      "They are predominantly freshwater forms",
      "Flagella are absent in all reproductive cells"
    ], correct: 0,
    explanation: "Brown algae range from simple filamentous Ectocarpus to profusely branched kelps reaching up to 100 metres. They are primarily marine, store food as laminarin/mannitol, and have flagellated zoospores and gametes."
  },
  {
    id: 74,
    topic: "Algae",
    q: "Select the <b>incorrect</b> match:",
    options: [
      "Chlamydomonas – Chlorophyceae",
      "Gelidium – Phaeophyceae",
      "Dictyota – Phaeophyceae",
      "Polysiphonia – Rhodophyceae"
    ], correct: 1,
    explanation: "Gelidium is a member of Rhodophyceae (red algae), not Phaeophyceae. It is a source of agar."
  },
  {
    id: 75,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Brown algae are primarily marine.<br><br><b>Reason (R):</b> Brown algae possess chlorophyll a, c, carotenoids and the xanthophyll pigment fucoxanthin.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 1,
    explanation: "Both statements are true. Brown algae are indeed primarily marine, and they do possess chlorophyll a, c, carotenoids and fucoxanthin. However, their pigment composition does not explain why they are predominantly marine. Hence R is not the correct explanation of A."
  },
  {
    id: 76,
    topic: "Algae",
    q: "The protoplast of brown algal vegetative cells contains:<br>(i) Plastids<br>(ii) Centrally located vacuole<br>(iii) Nucleus<br>Which of the above is/are correct?",
    options: [
      "(i) only",
      "(i) and (iii) only",
      "(i), (ii) and (iii)",
      "(ii) only"
    ],
    correct: 2,
    explanation: "The protoplast of brown algae contains plastids, a centrally located vacuole, and a nucleus — all three are present."
  },
  {
    id: 77,
    topic: "Algae",
    q: "Which of the following algae is used as food by space travellers?",
    options: [
      "Sargassum",
      "Polysiphonia",
      "Gelidium",
      "Chlorella"
    ], correct: 3,
    explanation: "Chlorella, a unicellular green alga rich in proteins, is used as a food supplement even by space travellers."
  },
  {
    id: 78,
    topic: "Algae",
    q: "In the context of algal classification, consider the following:<br>Statement I: Chlorophyceae have 2–8 equal flagella with apical insertion.<br>Statement II: Phaeophyceae have 2 unequal flagella with lateral insertion.<br>Statement III: Rhodophyceae have 2 equal flagella with apical insertion.",
    options: [
      "Statements I and II are correct, III is incorrect",
      "Statements I and III are correct, II is incorrect",
      "All three are correct",
      "Only Statement II is correct"
    ],
    correct: 0,
    explanation: "Statement I (green algae: 2–8 equal, apical) and Statement II (brown algae: 2 unequal, lateral) are correct. Statement III is wrong — red algae completely lack flagella."
  },
  {
    id: 79,
    topic: "Algae",
    q: "Some green algae store food in the form of:",
    options: [
      "Only starch",
      "Starch and oil droplets",
      "Mannitol",
      "Floridean starch"
    ],
    correct: 1,
    explanation: "Green algae store food mainly as starch (in pyrenoids), but some may also store food in the form of oil droplets."
  },
  {
    id: 80,
    topic: "Algae",
    q: "How many species of marine algae are approximately used as food?",
    options: [
      "About 30 species",
      "About 50 species",
      "About 70 species",
      "About 100 species"
    ],
    correct: 2,
    explanation: "Approximately 70 species of marine algae are used as food. Examples include species of Porphyra, Laminaria and Sargassum."
  },
  {
    id: 81,
    topic: "Algae",
    q: "Union of gametes in oogamous species of brown algae may take place:",
    options: [
      "Only in water",
      "Only within the oogonium",
      "Only on land surface",
      "In water or within the oogonium"
    ], correct: 3,
    explanation: "In brown algae, union of gametes may take place in water or within the oogonium in oogamous species."
  },
  {
    id: 82,
    topic: "Algae",
    q: "Which of the following is <b>not</b> a member of Chlorophyceae?",
    options: [
      "Fucus",
      "Chara",
      "Chlamydomonas",
      "Spirogyra"
    ], correct: 0,
    explanation: "Fucus is a member of Phaeophyceae (brown algae). Chlamydomonas, Volvox, Ulothrix, Spirogyra and Chara are members of Chlorophyceae."
  },
  {
    id: 83,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Algae increase the level of dissolved oxygen in their immediate environment.<br><br><b>Reason (R):</b> Algae are photosynthetic organisms that release oxygen as a by-product.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Being photosynthetic, algae release O₂ as a by-product, which increases the dissolved oxygen level in their environment. R correctly explains A."
  },
  {
    id: 84,
    topic: "Bryophytes",
    q: "Bryophytes are called <b>amphibians of the plant kingdom</b> because:",
    options: [
      "They are fully aquatic organisms",
      "They can live in soil but depend on water for sexual reproduction",
      "They can live both in water and on land without any dependency",
      "They reproduce only by asexual methods on land"
    ],
    correct: 1,
    explanation: "Bryophytes can live in soil but are dependent on water for sexual reproduction (transfer of antherozoids to archegonia), hence called amphibians of the plant kingdom."
  },
  {
    id: 85,
    topic: "Bryophytes",
    q: "The main plant body of a bryophyte is:",
    options: [
      "Diploid sporophyte",
      "Diploid gametophyte",
      "Haploid gametophyte",
      "Haploid sporophyte"
    ], correct: 2,
    explanation: "The main plant body of bryophytes is haploid. It produces gametes, hence called a gametophyte. The sporophyte is dependent on the gametophyte."
  },
  {
    id: 86,
    topic: "Bryophytes",
    q: "Which of the following statements about bryophytes is <b>incorrect</b>?",
    options: [
      "They play an important role in plant succession on bare rocks",
      "They are attached to substratum by rhizoids",
      "The plant body is thallus-like",
      "They possess true roots, stems and leaves"
    ], correct: 3,
    explanation: "Bryophytes lack true roots, stems or leaves. They may possess root-like, leaf-like or stem-like structures. All other statements are correct."
  },
  {
    id: 87,
    topic: "Bryophytes",
    q: "The rhizoids in bryophytes can be:",
    options: [
      "Unicellular or multicellular",
      "Only multicellular",
      "Only unicellular",
      "Always absent"
    ], correct: 0,
    explanation: "Bryophytes are attached to the substratum by unicellular or multicellular rhizoids. The type varies among different bryophyte groups."
  },
  {
    id: 88,
    topic: "Bryophytes",
    q: "The male sex organ in bryophytes is called <b>antheridium</b>. It produces:",
    options: [
      "Non-motile sperms",
      "Biflagellate antherozoids",
      "Uniflagellate antherozoids",
      "Multiflagellate antherozoids"
    ],
    correct: 1,
    explanation: "The antheridium produces biflagellate antherozoids. These are released into water where they swim to reach the archegonium."
  },
  {
    id: 89,
    topic: "Bryophytes",
    q: "The female sex organ in bryophytes is:",
    options: [
      "Club-shaped archegonium producing multiple eggs",
      "Flask-shaped oogonium producing multiple eggs",
      "Flask-shaped archegonium producing a single egg",
      "Spherical archegonium producing a single egg"
    ], correct: 2,
    explanation: "The female sex organ is the archegonium, which is flask-shaped and produces a single egg."
  },
  {
    id: 90,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> The sex organs in bryophytes are multicellular.<br><br><b>Reason (R):</b> In algae, sex organs are generally unicellular.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 1,
    explanation: "Both statements are true. Bryophyte sex organs are multicellular (antheridium and archegonium), and algal sex organs are generally unicellular. However, R does not explain why bryophyte sex organs are multicellular."
  },
  {
    id: 91,
    topic: "Bryophytes",
    q: "After fertilisation in bryophytes, the zygote:",
    options: [
      "Immediately undergoes reduction division",
      "Remains dormant permanently",
      "Directly germinates into a gametophyte",
      "Does not undergo reduction division immediately but produces a multicellular sporophyte"
    ], correct: 3,
    explanation: "Zygotes do not undergo reduction division immediately. They produce a multicellular body called the sporophyte. Meiosis occurs later in the sporophyte to produce haploid spores."
  },
  {
    id: 92,
    topic: "Bryophytes",
    q: "The sporophyte in bryophytes is:",
    options: [
      "Not free-living, attached to the gametophyte and derives nourishment from it",
      "Free-living but heterotrophic",
      "Free-living and autotrophic",
      "Partially free-living and partially parasitic"
    ], correct: 0,
    explanation: "The sporophyte in bryophytes is not free-living. It is attached to the photosynthetic gametophyte and derives nourishment from it."
  },
  {
    id: 93,
    topic: "Bryophytes",
    q: "Haploid spores in bryophytes are produced by:",
    options: [
      "Mitosis in the gametophyte",
      "Meiosis in some cells of the sporophyte",
      "Mitosis in the sporophyte",
      "Meiosis in the gametophyte"
    ],
    correct: 1,
    explanation: "Some cells of the sporophyte undergo reduction division (meiosis) to produce haploid spores. These spores germinate to produce the gametophyte."
  },
  {
    id: 94,
    topic: "Bryophytes",
    q: "Which of the following correctly represents the life cycle sequence in bryophytes?",
    options: [
      "Spore → Sporophyte → Gametes → Zygote → Gametophyte",
      "Zygote → Gametophyte → Spores → Sporophyte → Gametes",
      "Spore → Gametophyte → Gametes → Zygote → Sporophyte → Spores",
      "Gametes → Sporophyte → Spores → Gametophyte → Zygote"
    ], correct: 2,
    explanation: "Spores germinate to form the gametophyte, which produces gametes. Gamete fusion forms the zygote, which develops into the sporophyte. The sporophyte produces spores by meiosis."
  },
  {
    id: 95,
    topic: "Bryophytes",
    q: "Species of <b>Sphagnum</b> provide peat which is used as:<br>(i) Fuel<br>(ii) Packing material for trans-shipment of living material<br>(iii) Food for humans<br>Select the correct option:",
    options: [
      "(i) only",
      "(iii) only",
      "(i), (ii) and (iii)",
      "(i) and (ii) only"
    ], correct: 3,
    explanation: "Sphagnum provides peat used as fuel and as packing material for trans-shipment of living material (due to its water-holding capacity). It is not used as human food."
  },
  {
    id: 96,
    topic: "Bryophytes",
    q: "Mosses along with lichens are the first organisms to colonise rocks. This makes them important because:",
    options: [
      "They decompose rocks making the substrate suitable for growth of higher plants",
      "They produce oxygen for other organisms",
      "They prevent rainfall",
      "They attract animal pollinators"
    ], correct: 0,
    explanation: "Mosses and lichens colonise bare rocks first (pioneers in succession). They decompose rocks, making the substrate suitable for the growth of higher plants — this is their great ecological importance."
  },
  {
    id: 97,
    topic: "Bryophytes",
    q: "Mosses help in preventing soil erosion because:",
    options: [
      "They have deep root systems",
      "They form dense mats on the soil that reduce the impact of falling rain",
      "They secrete chemicals that bind soil particles",
      "They absorb all the rainwater completely"
    ],
    correct: 1,
    explanation: "Mosses form dense mats on the soil, which reduce the impact of falling rain and thus prevent soil erosion."
  },
  {
    id: 98,
    topic: "Bryophytes",
    q: "The plant body of liverworts is:",
    options: [
      "Thalloid, isobilateral and erect",
      "Leafy, radially symmetrical and erect",
      "Thalloid, dorsiventral and closely appressed to the substrate",
      "Thalloid, dorsiventral and free-floating"
    ], correct: 2,
    explanation: "The plant body of liverworts (e.g., Marchantia) is thalloid, dorsiventral and closely appressed (pressed close) to the substrate."
  },
  {
    id: 99,
    topic: "Bryophytes",
    q: "<b>Gemmae</b> in liverworts are:",
    options: [
      "Green, multicellular, sexual buds developing in archegonia",
      "Colourless, multicellular, sexual structures in antheridia",
      "Brown, unicellular, asexual spores in capsules",
      "Green, multicellular, asexual buds developing in gemma cups on thalli"
    ], correct: 3,
    explanation: "Gemmae are green, multicellular, asexual buds which develop in small receptacles called gemma cups located on the thalli. They detach and germinate to form new individuals."
  },
  {
    id: 100,
    topic: "Bryophytes",
    q: "Asexual reproduction in liverworts takes place by:<br>(i) Fragmentation of thalli<br>(ii) Formation of gemmae<br>(iii) Formation of zoospores",
    options: [
      "(i) and (ii) only",
      "(i) and (iii) only",
      "(i), (ii) and (iii)",
      "(ii) only"
    ],
    correct: 0,
    explanation: "Asexual reproduction in liverworts occurs by fragmentation of thalli and by formation of specialised structures called gemmae. Zoospores are not produced by liverworts."
  },
  {
    id: 101,
    topic: "Bryophytes",
    q: "The sporophyte of liverworts is differentiated into:",
    options: [
      "Root, stem and leaves",
      "Foot, seta and capsule",
      "Holdfast, stipe and frond",
      "Protonema and leafy stage"
    ],
    correct: 1,
    explanation: "The sporophyte of liverworts is differentiated into a foot, seta and capsule. Spores are produced within the capsule after meiosis."
  },
  {
    id: 102,
    topic: "Bryophytes",
    q: "During sexual reproduction in liverworts, male and female sex organs are produced:",
    options: [
      "Always on the same thallus",
      "Always on different thalli",
      "Either on the same or on different thalli",
      "Only on the sporophyte"
    ],
    correct: 2,
    explanation: "In liverworts, male and female sex organs may be produced either on the same or on different thalli."
  },
  {
    id: 103,
    topic: "Bryophytes",
    q: "The predominant stage in the life cycle of a moss is the <b>gametophyte</b>, which consists of:",
    options: [
      "Only the protonema stage",
      "Only the leafy stage",
      "Three stages — protonema, leafy and capsule stages",
      "Two stages — protonema stage and leafy stage"
    ], correct: 3,
    explanation: "The moss gametophyte consists of two stages: (1) the protonema stage (first) that develops from spore, and (2) the leafy stage that develops from secondary protonema as a lateral bud."
  },
  {
    id: 104,
    topic: "Bryophytes",
    q: "The protonema stage of mosses is:",
    options: [
      "A creeping, green, branched and frequently filamentous stage",
      "An upright, leafy structure",
      "A capsule-bearing sporophytic structure",
      "A non-green, underground structure"
    ], correct: 0,
    explanation: "The protonema is the first stage of the moss gametophyte. It is a creeping, green, branched and frequently filamentous stage that develops directly from a spore."
  },
  {
    id: 105,
    topic: "Bryophytes",
    q: "The leafy stage of mosses develops from:",
    options: [
      "The spore directly",
      "The secondary protonema as a lateral bud",
      "The capsule of the sporophyte",
      "The archegonium"
    ],
    correct: 1,
    explanation: "The leafy stage develops from the secondary protonema as a lateral bud. It consists of upright, slender axes bearing spirally arranged leaves."
  },
  {
    id: 106,
    topic: "Bryophytes",
    q: "In mosses, leaves are arranged on the upright axes in a:",
    options: [
      "Whorled pattern",
      "Opposite pattern",
      "Spiral arrangement",
      "Two rows (distichous)"
    ],
    correct: 2,
    explanation: "In the leafy stage of mosses, upright slender axes bear spirally arranged leaves."
  },
  {
    id: 107,
    topic: "Bryophytes",
    q: "In mosses, the rhizoids are:",
    options: [
      "Unicellular and unbranched",
      "Unicellular and branched",
      "Always absent",
      "Multicellular and branched"
    ], correct: 3,
    explanation: "In the leafy stage of mosses, the plant is attached to the soil through multicellular and branched rhizoids."
  },
  {
    id: 108,
    topic: "Bryophytes",
    q: "In mosses, sex organs are produced at:",
    options: [
      "The apex of the leafy shoots",
      "The protonema stage",
      "The base of the leafy shoots",
      "The capsule of the sporophyte"
    ], correct: 0,
    explanation: "In mosses, antheridia and archegonia are produced at the apex of the leafy shoots."
  },
  {
    id: 109,
    topic: "Bryophytes",
    q: "Vegetative reproduction in mosses occurs by:",
    options: [
      "Only by gemma cups",
      "Fragmentation and budding in the secondary protonema",
      "Only by zoospores",
      "Only by fragmentation of the sporophyte"
    ], correct: 1,
    explanation: "Vegetative reproduction in mosses takes place by fragmentation and by budding in the secondary protonema."
  },
  {
    id: 110,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> The sporophyte of mosses is more elaborate than that of liverworts.<br><br><b>Reason (R):</b> In both mosses and liverworts, the sporophyte consists of foot, seta and capsule.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 1,
    explanation: "Both are true — the moss sporophyte is more elaborate than that of liverworts, and both have foot, seta and capsule. However, having the same three parts does not explain why mosses have a more elaborate sporophyte (it's due to a more complex capsule with elaborate spore dispersal mechanism)."
  },
  {
    id: 111,
    topic: "Bryophytes",
    q: "Which of the following is <b>not</b> an example of moss?",
    options: [
      "Funaria",
      "Polytrichum",
      "Marchantia",
      "Sphagnum"
    ],
    correct: 2,
    explanation: "Marchantia is a liverwort, not a moss. Funaria, Polytrichum and Sphagnum are common examples of mosses."
  },
  {
    id: 112,
    topic: "Bryophytes",
    q: "Consider the following statements:<br>(i) Bryophytes have more differentiated plant body than algae<br>(ii) Bryophytes possess true roots, stems and leaves<br>(iii) The dominant phase in bryophytes is the gametophyte<br>(iv) The sporophyte is parasitic on the gametophyte",
    options: [
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(i) and (iii) only",
      "(i), (iii) and (iv) only"
    ], correct: 3,
    explanation: "Statement (ii) is wrong — bryophytes lack true roots, stems and leaves. Statements (i), (iii) and (iv) are correct. The sporophyte is attached to and derives nourishment from the gametophyte (parasitic on it)."
  },
  {
    id: 113,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> Bryophytes usually occur in damp, humid and shaded localities.<br><br><b>Reason (R):</b> They require water for the transfer of male gametes (antherozoids) to the archegonium during sexual reproduction.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Bryophytes live in moist habitats because their biflagellate antherozoids need water to swim to the archegonium for fertilisation. R correctly explains A."
  },
  {
    id: 114,
    topic: "Bryophytes",
    q: "In the leafy members of liverworts, tiny leaf-like appendages are arranged in:",
    options: [
      "Two rows on stem-like structures",
      "Spiral arrangement on stem-like structures",
      "Whorled arrangement on stem-like structures",
      "Random arrangement on thallus"
    ], correct: 0,
    explanation: "The leafy members of liverworts have tiny leaf-like appendages arranged in two rows on the stem-like structures, unlike mosses where leaves are spirally arranged."
  },
  {
    id: 115,
    topic: "Bryophytes",
    q: "Select the <b>correct</b> difference between liverworts and mosses:",
    options: [
      "Liverworts have a protonema stage but mosses do not",
      "Mosses have a more elaborate sporophyte than liverworts",
      "Liverworts have spirally arranged leaves while mosses have two-rowed leaves",
      "Mosses have a thalloid body while liverworts have a leafy body"
    ],
    correct: 1,
    explanation: "The sporophyte in mosses is more elaborate than in liverworts. Mosses (not liverworts) have a protonema stage. Mosses have spirally arranged leaves, while leafy liverworts have two-rowed appendages."
  },
  {
    id: 116,
    topic: "Bryophytes",
    q: "Sphagnum is economically important because of its capacity to:",
    options: [
      "Fix atmospheric nitrogen",
      "Produce antibiotics",
      "Hold water",
      "Produce edible fruits"
    ], correct: 2,
    explanation: "Sphagnum (a moss) provides peat used as fuel and packing material for trans-shipment of living material because of its excellent capacity to hold water."
  },
  {
    id: 117,
    topic: "Bryophytes",
    q: "Which of the following pairs act as <b>pioneer species</b> in ecological succession on bare rocks?",
    options: [
      "Ferns and gymnosperms",
      "Angiosperms and bryophytes",
      "Algae and fungi",
      "Mosses and lichens"
    ], correct: 3,
    explanation: "Mosses along with lichens are the first organisms to colonise rocks (pioneer species in lithosere succession). They decompose rocks, making the substrate suitable for higher plants."
  },
  {
    id: 118,
    topic: "Bryophytes",
    q: "Consider the following:<br>Statement I: The protonema of mosses develops directly from a spore.<br>Statement II: The leafy stage of mosses develops directly from a spore.<br>Which of the above is/are correct?",
    options: [
      "Only Statement I",
      "Only Statement II",
      "Both Statements I and II",
      "Neither Statement I nor Statement II"
    ],
    correct: 0,
    explanation: "Only Statement I is correct. The protonema develops directly from a spore. The leafy stage develops from the secondary protonema as a lateral bud, NOT directly from a spore."
  },
  {
    id: 119,
    topic: "Bryophytes",
    q: "Which of the following statements about <b>gemma cups</b> is correct?",
    options: [
      "They are receptacles for sexual buds in mosses",
      "They are small receptacles on the thalli of liverworts where gemmae develop",
      "They are found on the sporophyte of mosses",
      "They contain haploid spores produced by meiosis"
    ],
    correct: 1,
    explanation: "Gemma cups are small receptacles located on the thalli of liverworts (e.g., Marchantia). Gemmae — green, multicellular, asexual buds — develop inside them."
  },
  {
    id: 120,
    topic: "Bryophytes",
    q: "Spores produced within the capsule of a bryophyte sporophyte are formed after:",
    options: [
      "Mitosis",
      "Amitosis",
      "Meiosis",
      "Binary fission"
    ], correct: 2,
    explanation: "Spores are formed after meiosis (reduction division) within the capsule of the sporophyte. These haploid spores germinate to form the gametophyte."
  },
  {
    id: 121,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> The plant body of bryophytes is more differentiated than that of algae.<br><br><b>Reason (R):</b> Bryophytes possess true vascular tissues for conduction.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 2,
    explanation: "A is true — bryophytes are more differentiated than algae (having root-like, stem-like, leaf-like structures). But R is false — bryophytes lack true vascular tissues. Vascular tissues first appear in pteridophytes."
  },
  {
    id: 122,
    topic: "Bryophytes",
    q: "Match the following structures with their descriptions:<br>(a) Antheridium – (i) Flask-shaped, produces a single egg<br>(b) Archegonium – (ii) Male sex organ producing biflagellate antherozoids<br>(c) Gemma – (iii) Green, multicellular, asexual bud<br>(d) Protonema – (iv) Creeping, green, branched, filamentous stage",
    options: [
      "a-(iii), b-(iv), c-(i), d-(ii)",
      "a-(i), b-(ii), c-(iv), d-(iii)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(ii), b-(i), c-(iii), d-(iv)"
    ], correct: 3,
    explanation: "Antheridium (ii) is the male sex organ producing biflagellate antherozoids. Archegonium (i) is flask-shaped producing a single egg. Gemma (iii) is a green, multicellular, asexual bud. Protonema (iv) is creeping, green, branched and filamentous."
  },
  {
    id: 123,
    topic: "Bryophytes",
    q: "The spores germinated from the capsule of a moss sporophyte give rise to:",
    options: [
      "A free-living gametophyte (protonema)",
      "Another sporophyte directly",
      "Gemmae",
      "Antherozoids"
    ], correct: 0,
    explanation: "Haploid spores from the moss capsule germinate to produce the protonema — the first stage of the free-living gametophyte."
  },
  {
    id: 124,
    topic: "Bryophytes",
    q: "Mosses have an <b>elaborate mechanism</b> of:",
    options: [
      "Water absorption",
      "Spore dispersal",
      "Gamete production",
      "Nitrogen fixation"
    ],
    correct: 1,
    explanation: "As per NCERT, mosses have an elaborate mechanism of spore dispersal, which aids in their widespread distribution."
  },
  {
    id: 125,
    topic: "Bryophytes",
    q: "Which of the following is a liverwort?",
    options: [
      "Funaria",
      "Polytrichum",
      "Marchantia",
      "Sphagnum"
    ], correct: 2,
    explanation: "Marchantia is a liverwort with a thalloid, dorsiventral body. Funaria, Polytrichum and Sphagnum are mosses."
  },
  {
    id: 126,
    topic: "Bryophytes",
    q: "Consider the following about the <b>leafy stage of mosses</b>:<br>(i) Upright, slender axes<br>(ii) Spirally arranged leaves<br>(iii) Attached by multicellular, branched rhizoids<br>(iv) Bears the sex organs<br>Which of the above is/are correct?",
    options: [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(iv) only",
      "(i), (ii), (iii) and (iv)"
    ], correct: 3,
    explanation: "All four statements are correct. The leafy stage has upright slender axes, spirally arranged leaves, is attached by multicellular branched rhizoids, and bears the sex organs (antheridia and archegonia) at the apex."
  },
  {
    id: 127,
    topic: "Bryophytes",
    q: "In bryophytes, the <b>dominant generation</b> is:",
    options: [
      "Gametophytic and haploid",
      "Gametophytic and diploid",
      "Sporophytic and diploid",
      "Sporophytic and haploid"
    ], correct: 0,
    explanation: "In bryophytes, the dominant (main) plant body is gametophyte, which is haploid. The sporophyte is dependent on the gametophyte."
  },
  {
    id: 128,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> Sphagnum peat is used as packing material for trans-shipment of living material.<br><br><b>Reason (R):</b> Sphagnum has a remarkable capacity to hold water, keeping the living material moist during transport.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Sphagnum peat is used for packing living material precisely because of its excellent water-holding capacity, which keeps material moist during transport. R correctly explains A."
  },
  {
    id: 129,
    topic: "Bryophytes",
    q: "Which of the following is <b>not</b> a part of the bryophyte sporophyte?",
    options: [
      "Foot",
      "Protonema",
      "Capsule",
      "Seta"
    ], correct: 1,
    explanation: "Protonema is the first stage of the gametophyte in mosses, not a part of the sporophyte. The sporophyte consists of foot, seta and capsule."
  },
  {
    id: 130,
    topic: "Bryophytes",
    q: "Some mosses provide food for:",
    options: [
      "Only aquatic organisms",
      "Only insects",
      "Herbaceous mammals, birds and other animals",
      "Only fungi"
    ], correct: 2,
    explanation: "As per NCERT, some mosses provide food for herbaceous mammals, birds and other animals."
  },
  {
    id: 131,
    topic: "Bryophytes",
    q: "Which is the <b>correct sequence</b> of stages in the life cycle of a moss?",
    options: [
      "Spore → Leafy stage → Protonema → Gametes → Zygote → Sporophyte",
      "Gametes → Zygote → Spore → Protonema → Leafy stage → Sporophyte",
      "Spore → Sporophyte → Protonema → Leafy stage → Gametes → Zygote",
      "Spore → Protonema → Leafy stage → Gametes → Zygote → Sporophyte"
    ], correct: 3,
    explanation: "The correct sequence is: Spore germinates into protonema (1st stage) → leafy stage develops from protonema (2nd stage) → sex organs produce gametes → fertilisation forms zygote → zygote develops into sporophyte → spores formed by meiosis."
  },
  {
    id: 132,
    topic: "Pteridophytes",
    q: "Pteridophytes are evolutionarily significant because they are the:",
    options: [
      "First terrestrial plants to possess vascular tissues",
      "First plants to show alternation of generations",
      "First plants to produce seeds",
      "First plants to show heterospory"
    ], correct: 0,
    explanation: "Pteridophytes are the first terrestrial plants to possess vascular tissues — xylem and phloem. This is a key evolutionary milestone as per NCERT."
  },
  {
    id: 133,
    topic: "Pteridophytes",
    q: "Which of the following is <b>not</b> a use of pteridophytes?",
    options: [
      "Medicinal purposes",
      "Primary source of timber",
      "Grown as ornamentals",
      "Soil-binders"
    ], correct: 1,
    explanation: "Pteridophytes are used for medicinal purposes, as soil-binders, and are frequently grown as ornamentals. Timber is obtained from gymnosperms and angiosperms, not pteridophytes."
  },
  {
    id: 134,
    topic: "Pteridophytes",
    q: "The dominant phase in the life cycle of pteridophytes is the:",
    options: [
      "Gametophyte",
      "Prothallus",
      "Sporophyte",
      "Protonema"
    ],
    correct: 2,
    explanation: "In pteridophytes, the main plant body is the sporophyte (diploid), which is the dominant phase. This is in contrast to bryophytes where the gametophyte is dominant."
  },
  {
    id: 135,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> The dominant phase in bryophytes is gametophytic while in pteridophytes it is sporophytic.<br><br><b>Reason (R):</b> Pteridophytes possess vascular tissues while bryophytes do not.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 1,
    explanation: "Both A and R are true. Bryophytes have dominant gametophyte; pteridophytes have dominant sporophyte. Pteridophytes do possess vascular tissues while bryophytes don't. However, presence of vascular tissue doesn't directly explain why the dominant phase shifted — so R is not the correct explanation of A."
  },
  {
    id: 136,
    topic: "Pteridophytes",
    q: "The sporophyte of pteridophytes is differentiated into:",
    options: [
      "Foot, seta and capsule",
      "Holdfast, stipe and frond",
      "Thallus, rhizoids and sporangium",
      "True root, stem and leaves"
    ], correct: 3,
    explanation: "The pteridophyte sporophyte is differentiated into true root, stem and leaves with well-differentiated vascular tissues. Foot, seta and capsule is the bryophyte sporophyte."
  },
  {
    id: 137,
    topic: "Pteridophytes",
    q: "Small leaves in pteridophytes are called <b>microphylls</b>, as found in:",
    options: [
      "Selaginella",
      "Ferns",
      "Dryopteris",
      "Adiantum"
    ], correct: 0,
    explanation: "Microphylls (small leaves) are found in Selaginella. Ferns (Dryopteris, Pteris, Adiantum) possess macrophylls (large leaves)."
  },
  {
    id: 138,
    topic: "Pteridophytes",
    q: "Macrophylls (large leaves) in pteridophytes are characteristic of:",
    options: [
      "Selaginella",
      "Ferns",
      "Lycopodium",
      "Equisetum"
    ], correct: 1,
    explanation: "Macrophylls are large leaves characteristic of ferns (e.g., Dryopteris, Pteris, Adiantum). Selaginella has microphylls (small leaves)."
  },
  {
    id: 139,
    topic: "Pteridophytes",
    q: "Sporangia in pteridophytes are borne on leaf-like appendages called:",
    options: [
      "Strobili",
      "Prothallus",
      "Sporophylls",
      "Rhizophores"
    ], correct: 2,
    explanation: "Sporangia are subtended by leaf-like appendages called sporophylls. In some cases, sporophylls may form compact structures called strobili or cones."
  },
  {
    id: 140,
    topic: "Pteridophytes",
    q: "Strobili or cones are formed by compact arrangement of sporophylls in:",
    options: [
      "Lycopodium and Adiantum",
      "Dryopteris and Pteris",
      "Adiantum and Psilotum",
      "Selaginella and Equisetum"
    ], correct: 3,
    explanation: "Sporophylls may form distinct compact structures called strobili or cones in Selaginella and Equisetum as per NCERT."
  },
  {
    id: 141,
    topic: "Pteridophytes",
    q: "Spores in pteridophytes are produced by:",
    options: [
      "Meiosis in spore mother cells",
      "Mitosis in spore mother cells",
      "Budding of sporangia",
      "Fragmentation of sporophylls"
    ], correct: 0,
    explanation: "Sporangia produce spores by meiosis in spore mother cells. These haploid spores germinate to give rise to the gametophyte (prothallus)."
  },
  {
    id: 142,
    topic: "Pteridophytes",
    q: "The gametophyte of pteridophytes is called:",
    options: [
      "Protonema",
      "Prothallus",
      "Thallus",
      "Strobilus"
    ],
    correct: 1,
    explanation: "The gametophyte of pteridophytes is called prothallus. It is inconspicuous, small, multicellular, free-living, mostly photosynthetic and thalloid. Protonema is the first stage of moss gametophyte."
  },
  {
    id: 143,
    topic: "Pteridophytes",
    q: "Which of the following describes the prothallus of pteridophytes correctly?<br>(i) Inconspicuous and small<br>(ii) Multicellular<br>(iii) Free-living<br>(iv) Mostly photosynthetic<br>(v) Thalloid",
    options: [
      "(i), (ii) and (iii) only",
      "(i), (ii), (iv) and (v) only",
      "(i), (ii), (iii), (iv) and (v)",
      "(iii) and (iv) only"
    ],
    correct: 2,
    explanation: "All five characteristics are correct for the prothallus: it is inconspicuous, small, multicellular, free-living, mostly photosynthetic and thalloid."
  },
  {
    id: 144,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> The spread of living pteridophytes is limited to narrow geographical regions.<br><br><b>Reason (R):</b> The gametophytes require cool, damp, shady places and water is needed for fertilisation.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "The restricted requirement of cool, damp, shady places for gametophyte growth AND the need for water for fertilisation limits the geographical spread of pteridophytes. R correctly explains A."
  },
  {
    id: 145,
    topic: "Pteridophytes",
    q: "In pteridophytes, water is required for:",
    options: [
      "Germination of spores",
      "Photosynthesis in sporophyte",
      "Growth of the sporophyte",
      "Transfer of antherozoids to the archegonium"
    ], correct: 3,
    explanation: "Water is required for transfer of antherozoids (male gametes) released from antheridia to the mouth of archegonium for fertilisation — similar to bryophytes."
  },
  {
    id: 146,
    topic: "Pteridophytes",
    q: "In majority of pteridophytes, all spores are of similar kind. Such plants are called:",
    options: [
      "Homosporous",
      "Heterosporous",
      "Monosporous",
      "Polysporous"
    ], correct: 0,
    explanation: "Plants producing spores of similar kind are called homosporous. Majority of pteridophytes are homosporous."
  },
  {
    id: 147,
    topic: "Pteridophytes",
    q: "Which of the following genera are <b>heterosporous</b> pteridophytes?",
    options: [
      "Dryopteris and Pteris",
      "Selaginella and Salvinia",
      "Psilotum and Lycopodium",
      "Equisetum and Adiantum"
    ],
    correct: 1,
    explanation: "Selaginella and Salvinia are heterosporous pteridophytes producing two kinds of spores — megaspores (large) and microspores (small)."
  },
  {
    id: 148,
    topic: "Pteridophytes",
    q: "In heterosporous pteridophytes, megaspores germinate to give rise to:",
    options: [
      "Male gametophytes",
      "Sporophytes directly",
      "Female gametophytes",
      "Strobili"
    ], correct: 2,
    explanation: "Megaspores (large spores) germinate to give rise to female gametophytes, while microspores (small spores) give rise to male gametophytes."
  },
  {
    id: 149,
    topic: "Pteridophytes",
    q: "The development of zygotes into young embryos within the female gametophytes of heterosporous pteridophytes is considered a precursor to:",
    options: [
      "Alternation of generations",
      "Vegetative reproduction",
      "Spore formation",
      "Seed habit"
    ], correct: 3,
    explanation: "In heterosporous pteridophytes, the female gametophyte is retained on the parent sporophyte and zygote develops into embryo within it. This event is a precursor to the seed habit — an important step in evolution."
  },
  {
    id: 150,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> Heterospory in pteridophytes is considered an important step in evolution.<br><br><b>Reason (R):</b> In heterosporous pteridophytes, the female gametophyte is retained on the parent sporophyte and the zygote develops into an embryo within it, which is a precursor to seed habit.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Heterospory is evolutionarily important because the retention of the female gametophyte on the parent sporophyte and embryo development within it foreshadows the seed habit seen in higher plants. R correctly explains A."
  },
  {
    id: 151,
    topic: "Pteridophytes",
    q: "Match the classes of pteridophytes with their examples:<br>(a) Psilopsida – (i) Equisetum<br>(b) Lycopsida – (ii) Dryopteris<br>(c) Sphenopsida – (iii) Psilotum<br>(d) Pteropsida – (iv) Selaginella",
    options: [
      "a-(iii), b-(iv), c-(i), d-(ii)",
      "a-(i), b-(ii), c-(iii), d-(iv)",
      "a-(iv), b-(iii), c-(ii), d-(i)",
      "a-(ii), b-(i), c-(iv), d-(iii)"
    ],
    correct: 0,
    explanation: "Psilopsida — Psilotum (iii); Lycopsida — Selaginella, Lycopodium (iv); Sphenopsida — Equisetum (i); Pteropsida — Dryopteris, Pteris, Adiantum (ii)."
  },
  {
    id: 152,
    topic: "Pteridophytes",
    q: "Pteridophytes are classified into how many classes?",
    options: [
      "Two",
      "Four",
      "Three",
      "Five"
    ], correct: 1,
    explanation: "Pteridophytes are classified into four classes: Psilopsida, Lycopsida, Sphenopsida and Pteropsida."
  },
  {
    id: 153,
    topic: "Pteridophytes",
    q: "<b>Equisetum</b> belongs to the class:",
    options: [
      "Psilopsida",
      "Lycopsida",
      "Sphenopsida",
      "Pteropsida"
    ],
    correct: 2,
    explanation: "Equisetum (horsetail) belongs to class Sphenopsida."
  },
  {
    id: 154,
    topic: "Pteridophytes",
    q: "Which of the following correctly lists members of class <b>Pteropsida</b>?",
    options: [
      "Selaginella, Lycopodium",
      "Salvinia, Selaginella",
      "Psilotum, Equisetum",
      "Dryopteris, Pteris, Adiantum"
    ], correct: 3,
    explanation: "Pteropsida includes the ferns — Dryopteris, Pteris and Adiantum."
  },
  {
    id: 155,
    topic: "Pteridophytes",
    q: "Consider the following statements:<br>(i) Pteridophytes have true roots, stems and leaves<br>(ii) Bryophytes have true roots, stems and leaves<br>(iii) Pteridophytes have vascular tissues<br>(iv) Bryophytes have vascular tissues",
    options: [
      "(i) and (iii) only",
      "(ii) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(i) and (iv) only"
    ],
    correct: 0,
    explanation: "Only statements (i) and (iii) are correct. Pteridophytes have true roots, stems, leaves with vascular tissues. Bryophytes lack true roots/stems/leaves and vascular tissues."
  },
  {
    id: 156,
    topic: "Pteridophytes",
    q: "Which of the following is the <b>correct</b> contrast between bryophytes and pteridophytes?",
    options: [
      "Bryophytes — sporophyte dominant; Pteridophytes — gametophyte dominant",
      "Bryophytes — gametophyte dominant; Pteridophytes — sporophyte dominant",
      "Both have gametophyte as dominant phase",
      "Both have sporophyte as dominant phase"
    ],
    correct: 1,
    explanation: "In bryophytes, the gametophyte is the dominant phase. In pteridophytes, the sporophyte is the dominant phase — a key evolutionary advancement."
  },
  {
    id: 157,
    topic: "Pteridophytes",
    q: "The gametophyte (prothallus) of pteridophytes is:",
    options: [
      "Large, conspicuous and the dominant phase",
      "Non-photosynthetic and parasitic on sporophyte",
      "Inconspicuous, small but free-living and mostly photosynthetic",
      "Large, free-living and non-photosynthetic"
    ], correct: 2,
    explanation: "The prothallus is inconspicuous, small, multicellular, free-living and mostly photosynthetic. Unlike bryophytes where gametophyte is dominant, in pteridophytes it is reduced."
  },
  {
    id: 158,
    topic: "Pteridophytes",
    q: "In pteridophytes, the sex organs on the gametophyte are:",
    options: [
      "Antheridia only",
      "Archegonia only",
      "Neither antheridia nor archegonia",
      "Both antheridia and archegonia"
    ], correct: 3,
    explanation: "The gametophytes of pteridophytes bear both male sex organs (antheridia) and female sex organs (archegonia)."
  },
  {
    id: 159,
    topic: "Pteridophytes",
    q: "Select the <b>incorrect</b> statement about pteridophytes:",
    options: [
      "The gametophyte is dependent on the sporophyte for nutrition",
      "They are the first terrestrial plants with vascular tissues",
      "The main plant body is a sporophyte",
      "The sporangia produce spores by meiosis"
    ], correct: 0,
    explanation: "The prothallus (gametophyte) of pteridophytes is free-living and mostly photosynthetic — NOT dependent on the sporophyte. In bryophytes, the sporophyte depends on the gametophyte, but in pteridophytes, the gametophyte is independent."
  },
  {
    id: 160,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> In heterosporous pteridophytes, the female gametophyte is retained on the parent sporophyte for variable periods.<br><br><b>Reason (R):</b> This facilitates the development of zygotes into young embryos within the female gametophyte.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Both are true. The retention of the female gametophyte on the parent sporophyte facilitates embryo development within it — this is a precursor to seed habit. R correctly explains the significance of A."
  },
  {
    id: 161,
    topic: "Pteridophytes",
    q: "Pteridophytes are commonly found in:",
    options: [
      "Hot, dry deserts",
      "Cool, damp, shady places",
      "Only aquatic habitats",
      "Only tropical grasslands"
    ],
    correct: 1,
    explanation: "Pteridophytes are found in cool, damp, shady places though some may flourish in sandy-soil conditions."
  },
  {
    id: 162,
    topic: "Pteridophytes",
    q: "Which of the following is <b>not</b> an example of pteridophyte?",
    options: [
      "Selaginella",
      "Equisetum",
      "Marchantia",
      "Adiantum"
    ], correct: 2,
    explanation: "Marchantia is a liverwort (bryophyte), not a pteridophyte. Selaginella, Equisetum and Adiantum are all pteridophytes."
  },
  {
    id: 163,
    topic: "Pteridophytes",
    q: "In heterosporous pteridophytes, microspores germinate to give rise to:",
    options: [
      "Female gametophytes",
      "Sporophytes",
      "Prothallus with both sexes",
      "Male gametophytes"
    ], correct: 3,
    explanation: "Microspores (small spores) germinate to give rise to male gametophytes, while megaspores (large spores) give rise to female gametophytes."
  },
  {
    id: 164,
    topic: "Pteridophytes",
    q: "Consider the following statements about <b>Selaginella</b>:<br>(i) It has microphylls<br>(ii) It forms strobili<br>(iii) It is heterosporous<br>(iv) It belongs to class Lycopsida",
    options: [
      "(i), (ii), (iii) and (iv)",
      "(i), (ii) and (iii) only",
      "(i) and (ii) only",
      "(iii) and (iv) only"
    ], correct: 0,
    explanation: "All four statements are correct for Selaginella: microphylls (small leaves), strobili formation, heterosporous nature, and classification under Lycopsida."
  },
  {
    id: 165,
    topic: "Pteridophytes",
    q: "Which of the following is an <b>aquatic</b> heterosporous pteridophyte?",
    options: [
      "Selaginella",
      "Salvinia",
      "Lycopodium",
      "Psilotum"
    ],
    correct: 1,
    explanation: "Salvinia is a heterosporous pteridophyte that is aquatic (water fern). Selaginella is also heterosporous but is terrestrial."
  },
  {
    id: 166,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> Pteridophytes include horsetails and ferns.<br><br><b>Reason (R):</b> Equisetum is known as horsetail and Dryopteris, Pteris, Adiantum are ferns.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Pteridophytes do include horsetails (Equisetum) and ferns (Dryopteris, Pteris, Adiantum). R provides correct examples explaining A."
  },
  {
    id: 167,
    topic: "Pteridophytes",
    q: "The zygote in pteridophytes develops into:",
    options: [
      "A free-living gametophyte",
      "Prothallus",
      "A multicellular well-differentiated sporophyte",
      "Strobilus"
    ],
    correct: 2,
    explanation: "The zygote produces a multicellular, well-differentiated sporophyte, which is the dominant phase in pteridophytes."
  },
  {
    id: 168,
    topic: "Pteridophytes",
    q: "Which of the following pairs of characters differentiates pteridophytes from bryophytes?<br>(i) Presence of vascular tissues<br>(ii) Dominant sporophytic phase<br>(iii) True roots, stems and leaves<br>(iv) Presence of archegonia",
    options: [
      "(i) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only",
      "(i), (ii) and (iii) only"
    ], correct: 3,
    explanation: "Vascular tissues, dominant sporophyte, and true roots/stems/leaves differentiate pteridophytes from bryophytes. Archegonia are present in BOTH groups, so (iv) is not a differentiating character."
  },
  {
    id: 169,
    topic: "Pteridophytes",
    q: "Which of the following represents the <b>correct</b> evolutionary sequence?",
    options: [
      "Bryophytes → Pteridophytes → Gymnosperms → Angiosperms",
      "Pteridophytes → Bryophytes → Gymnosperms → Angiosperms",
      "Gymnosperms → Bryophytes → Pteridophytes → Angiosperms",
      "Angiosperms → Gymnosperms → Pteridophytes → Bryophytes"
    ], correct: 0,
    explanation: "The correct evolutionary sequence is: Bryophytes → Pteridophytes → Gymnosperms → Angiosperms, showing progressive complexity and adaptation to terrestrial life."
  },
  {
    id: 170,
    topic: "Pteridophytes",
    q: "In pteridophytes, the sporophyte bears sporangia that are subtended by:",
    options: [
      "Rhizoids",
      "Sporophylls",
      "Prothallus",
      "Gemma cups"
    ],
    correct: 1,
    explanation: "Sporangia are subtended by leaf-like appendages called sporophylls. In some cases, these sporophylls form strobili or cones."
  },
  {
    id: 171,
    topic: "Pteridophytes",
    q: "Select the <b>correct</b> statement about spore production and gametophyte development in pteridophytes:",
    options: [
      "Spores are produced by mitosis and develop into sporophytes",
      "Spores are produced by mitosis and germinate to form gametophytes",
      "Spores are produced by meiosis and germinate to form gametophytes (prothallus)",
      "Spores are produced by meiosis and develop directly into sporophytes"
    ], correct: 2,
    explanation: "Spores are produced by meiosis in spore mother cells within sporangia. These haploid spores germinate to give rise to the gametophyte (prothallus)."
  },
  {
    id: 172,
    topic: "Pteridophytes",
    q: "<b>Lycopodium</b> belongs to the class:",
    options: [
      "Psilopsida",
      "Pteropsida",
      "Sphenopsida",
      "Lycopsida"
    ], correct: 3,
    explanation: "Lycopodium (club moss) belongs to class Lycopsida, along with Selaginella."
  },
  {
    id: 173,
    topic: "Pteridophytes",
    q: "<b>Psilotum</b> belongs to the class:",
    options: [
      "Psilopsida",
      "Lycopsida",
      "Sphenopsida",
      "Pteropsida"
    ],
    correct: 0,
    explanation: "Psilotum belongs to class Psilopsida, the most primitive class of pteridophytes."
  },
  {
    id: 174,
    topic: "Pteridophytes",
    q: "Consider the following:<br>Statement I: In homosporous pteridophytes, all spores are of similar kind.<br>Statement II: Selaginella and Salvinia are homosporous.<br>Which of the above is/are correct?",
    options: [
      "Only Statement II",
      "Only Statement I",
      "Both Statements I and II",
      "Neither Statement I nor Statement II"
    ], correct: 1,
    explanation: "Statement I is correct — homosporous plants produce spores of similar kind. Statement II is wrong — Selaginella and Salvinia are heterosporous, producing megaspores and microspores."
  },
  {
    id: 175,
    topic: "Pteridophytes",
    q: "The female gametophyte in heterosporous pteridophytes is retained on the parent sporophyte. This is significant because:",
    options: [
      "It prevents fertilisation",
      "It leads to asexual reproduction",
      "It facilitates embryo development within female gametophyte — a precursor to seed habit",
      "It makes the gametophyte independent"
    ], correct: 2,
    explanation: "Retention of the female gametophyte on the parent sporophyte and development of the zygote into embryo within it is a precursor to the seed habit, considered an important evolutionary step."
  },
  {
    id: 176,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> Pteridophytes require water for sexual reproduction like bryophytes.<br><br><b>Reason (R):</b> Antherozoids of pteridophytes are motile and need water to swim to the archegonium.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Both A and R are true. Like bryophytes, pteridophytes also need water for sexual reproduction because antherozoids must swim through water to reach the archegonium. R correctly explains A."
  },
  {
    id: 177,
    topic: "Pteridophytes",
    q: "Which of the following <b>correctly</b> compares the sporophyte of bryophytes and pteridophytes?",
    options: [
      "Bryophyte sporophyte is free-living; pteridophyte sporophyte is dependent",
      "Both have dependent sporophytes",
      "Both have free-living sporophytes",
      "Bryophyte sporophyte is dependent on gametophyte; pteridophyte sporophyte is the dominant independent phase"
    ], correct: 3,
    explanation: "In bryophytes, the sporophyte is dependent on the gametophyte. In pteridophytes, the sporophyte is the dominant, well-differentiated independent phase with true roots, stems, leaves and vascular tissues."
  },
  {
    id: 178,
    topic: "Pteridophytes",
    q: "Which of the following is <b>incorrectly</b> matched?",
    options: [
      "Sphenopsida — Dryopteris",
      "Lycopsida — Selaginella",
      "Psilopsida — Psilotum",
      "Pteropsida — Adiantum"
    ], correct: 0,
    explanation: "Dryopteris belongs to Pteropsida, not Sphenopsida. Sphenopsida includes Equisetum. All other matches are correct."
  },
  {
    id: 179,
    topic: "Pteridophytes",
    q: "Which of the following is true about the prothallus of pteridophytes?<br>(A) It is the sporophytic phase<br>(B) It is always parasitic on the sporophyte<br>(C) It is a free-living, mostly photosynthetic gametophyte<br>(D) It produces spores by meiosis",
    options: [
      "Only A",
      "Only B",
      "Only C",
      "Only D"
    ],
    correct: 2,
    explanation: "Prothallus is the gametophytic phase (not sporophytic), free-living and mostly photosynthetic (not parasitic), and it produces gametes (not spores). Only option C is correct."
  },
  {
    id: 180,
    topic: "Pteridophytes",
    q: "In the context of evolution, arrange the following events in the <b>correct order</b>:<br>(i) Development of vascular tissues<br>(ii) Heterospory<br>(iii) Seed habit<br>(iv) Terrestrial adaptation with rhizoids",
    options: [
      "(i) → (iv) → (iii) → (ii)",
      "(iv) → (i) → (ii) → (iii)",
      "(iii) → (ii) → (i) → (iv)",
      "(ii) → (iii) → (iv) → (i)"
    ], correct: 1,
    explanation: "Evolutionary sequence: terrestrial adaptation with rhizoids (bryophytes) → vascular tissues (pteridophytes) → heterospory (advanced pteridophytes) → seed habit (gymnosperms)."
  },
  {
    id: 181,
    topic: "Pteridophytes",
    q: "Some pteridophytes may flourish well in:",
    options: [
      "Only aquatic conditions",
      "Only extremely cold conditions",
      "Sandy-soil conditions",
      "Only deep ocean habitats"
    ], correct: 2,
    explanation: "While pteridophytes are generally found in cool, damp, shady places, NCERT specifically mentions that some may flourish well in sandy-soil conditions."
  },
  {
    id: 182,
    topic: "Gymnosperms",
    q: "The term 'gymnosperm' literally means:",
    options: [
      "Covered seeds",
      "Winged seeds",
      "Hidden seeds",
      "Naked seeds"
    ], correct: 3,
    explanation: "Gymnosperm is derived from Greek words 'gymnos' meaning naked and 'sperma' meaning seeds. The seeds are not enclosed within an ovary wall and remain exposed."
  },
  {
    id: 183,
    topic: "Gymnosperms",
    q: "In gymnosperms, the ovules are:",
    options: [
      "Not enclosed by any ovary wall and remain exposed before and after fertilisation",
      "Enclosed within the ovary wall before and after fertilisation",
      "Enclosed before fertilisation but exposed after fertilisation",
      "Exposed before fertilisation but enclosed after fertilisation"
    ], correct: 0,
    explanation: "In gymnosperms, the ovules are not enclosed by any ovary wall and remain exposed both before and after fertilisation. Hence, the seeds are naked."
  },
  {
    id: 184,
    topic: "Gymnosperms",
    q: "One of the tallest tree species belongs to gymnosperms. It is:",
    options: [
      "Pinus",
      "Sequoia",
      "Cycas",
      "Cedrus"
    ], correct: 1,
    explanation: "The giant redwood tree Sequoia is one of the tallest tree species and belongs to gymnosperms."
  },
  {
    id: 185,
    topic: "Gymnosperms",
    q: "Coralloid roots are found in <b>Cycas</b> and are associated with:",
    options: [
      "Mycorrhizal fungi",
      "Parasitic angiosperms",
      "N₂-fixing cyanobacteria",
      "Rhizobium bacteria"
    ], correct: 2,
    explanation: "In Cycas, small specialised roots called coralloid roots are associated with N₂-fixing cyanobacteria. Mycorrhizal association is found in Pinus, not Cycas."
  },
  {
    id: 186,
    topic: "Gymnosperms",
    q: "Mycorrhiza (fungal association with roots) is found in:",
    options: [
      "Cycas",
      "Cedrus",
      "Sequoia",
      "Pinus"
    ], correct: 3,
    explanation: "Roots in Pinus have fungal association in the form of mycorrhiza. Cycas has coralloid roots with N₂-fixing cyanobacteria."
  },
  {
    id: 187,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Cycas has coralloid roots.<br><br><b>Reason (R):</b> Coralloid roots of Cycas are associated with N₂-fixing cyanobacteria.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 1,
    explanation: "Both A and R are true. Cycas does have coralloid roots and they are associated with N₂-fixing cyanobacteria. However, the association with cyanobacteria does not explain why these roots exist or their coral-like shape — so R is not the correct explanation of A."
  },
  {
    id: 188,
    topic: "Gymnosperms",
    q: "Match the following gymnosperms with their stem characteristics:<br>(a) Cycas – (i) Branched<br>(b) Pinus – (ii) Unbranched<br>(c) Cedrus – (iii) Branched",
    options: [
      "a-(ii), b-(i), c-(iii)",
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(iii), c-(i)",
      "a-(iii), b-(ii), c-(i)"
    ],
    correct: 0,
    explanation: "Cycas has unbranched stem (ii), while Pinus (i) and Cedrus (iii) have branched stems."
  },
  {
    id: 189,
    topic: "Gymnosperms",
    q: "In <b>Cycas</b>, the leaves are:",
    options: [
      "Needle-like and evergreen",
      "Pinnate and persist for a few years",
      "Scale-like and deciduous",
      "Simple with parallel venation"
    ],
    correct: 1,
    explanation: "In Cycas, the pinnate (compound) leaves persist for a few years. Needle-like leaves are characteristic of conifers like Pinus."
  },
  {
    id: 190,
    topic: "Gymnosperms",
    q: "The needle-like leaves of conifers are an adaptation to:",
    options: [
      "Increase photosynthetic area",
      "Attract pollinators",
      "Reduce surface area and thus reduce water loss",
      "Increase water absorption"
    ],
    correct: 2,
    explanation: "In conifers, needle-like leaves reduce the surface area, which helps reduce water loss. This is an adaptation to withstand extremes of temperature, humidity and wind."
  },
  {
    id: 191,
    topic: "Gymnosperms",
    q: "Leaves in gymnosperms are adapted to withstand extremes of temperature, humidity and wind by having:<br>(i) Needle-like shape in conifers<br>(ii) Thick cuticle<br>(iii) Sunken stomata<br>Select the correct option:",
    options: [
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i) only",
      "(i), (ii) and (iii)"
    ], correct: 3,
    explanation: "All three adaptations are present — needle-like leaves (reduced surface area), thick cuticle and sunken stomata — all help reduce water loss in gymnosperms."
  },
  {
    id: 192,
    topic: "Gymnosperms",
    q: "Gymnosperms are:",
    options: [
      "Heterosporous",
      "Homosporous",
      "Non-sporous",
      "Sometimes homosporous, sometimes heterosporous"
    ], correct: 0,
    explanation: "Gymnosperms are heterosporous — they produce haploid microspores and megaspores."
  },
  {
    id: 193,
    topic: "Gymnosperms",
    q: "The sporophylls in gymnosperms are arranged spirally along an axis to form:",
    options: [
      "Sori",
      "Strobili or cones",
      "Gemma cups",
      "Prothallus"
    ], correct: 1,
    explanation: "Sporophylls are arranged spirally along an axis to form lax or compact strobili or cones in gymnosperms."
  },
  {
    id: 194,
    topic: "Gymnosperms",
    q: "The microsporangiate strobili are also called:",
    options: [
      "Female cones",
      "Megasporangiate cones",
      "Male strobili",
      "Archegonial cones"
    ], correct: 2,
    explanation: "Strobili bearing microsporophylls and microsporangia are called microsporangiate or male strobili."
  },
  {
    id: 195,
    topic: "Gymnosperms",
    q: "The reduced male gametophyte in gymnosperms is called:",
    options: [
      "Prothallus",
      "Protonema",
      "Archegonium",
      "Pollen grain"
    ], correct: 3,
    explanation: "The microspores develop into a highly reduced male gametophytic generation confined to a limited number of cells — called a pollen grain."
  },
  {
    id: 196,
    topic: "Gymnosperms",
    q: "Development of pollen grains in gymnosperms takes place within the:",
    options: [
      "Microsporangia",
      "Megasporangia",
      "Archegonia",
      "Nucellus"
    ], correct: 0,
    explanation: "The development of pollen grains takes place within the microsporangia, which are borne on microsporophylls of male cones."
  },
  {
    id: 197,
    topic: "Gymnosperms",
    q: "The cones bearing megasporophylls with ovules are called:",
    options: [
      "Microsporangiate or male strobili",
      "Macrosporangiate or female strobili",
      "Pollen cones",
      "Stamen cones"
    ],
    correct: 1,
    explanation: "Cones bearing megasporophylls with ovules or megasporangia are called macrosporangiate or female strobili."
  },
  {
    id: 198,
    topic: "Gymnosperms",
    q: "In <b>Pinus</b>, the male and female cones are borne:",
    options: [
      "On different trees",
      "Only male cones are present",
      "On the same tree",
      "Only female cones are present"
    ], correct: 2,
    explanation: "In Pinus, the male or female cones or strobili may be borne on the same tree (monoecious condition)."
  },
  {
    id: 199,
    topic: "Gymnosperms",
    q: "In <b>Cycas</b>, the male cones and megasporophylls are borne on:",
    options: [
      "The same tree",
      "Underground structures",
      "Same cone",
      "Different trees"
    ], correct: 3,
    explanation: "In Cycas, male cones and megasporophylls are borne on different trees (dioecious condition). This contrasts with Pinus where both are on the same tree."
  },
  {
    id: 200,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Pinus is monoecious while Cycas is dioecious.<br><br><b>Reason (R):</b> In Pinus, male and female cones are on the same tree, while in Cycas they are on different trees.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Both are true. Pinus bears both male and female cones on the same tree (monoecious), while Cycas has them on different trees (dioecious). R correctly defines and explains A."
  },
  {
    id: 201,
    topic: "Gymnosperms",
    q: "The megaspore mother cell in gymnosperms is differentiated from one of the cells of the:",
    options: [
      "Nucellus",
      "Integument",
      "Archegonium",
      "Microsporangium"
    ], correct: 0,
    explanation: "The megaspore mother cell is differentiated from one of the cells of the nucellus. The nucellus is protected by envelopes and the composite structure is called an ovule."
  },
  {
    id: 202,
    topic: "Gymnosperms",
    q: "The ovule in gymnosperms is a composite structure consisting of:",
    options: [
      "Only nucellus",
      "Nucellus protected by envelopes (integuments)",
      "Only megaspore mother cell",
      "Pollen grain and megaspore"
    ],
    correct: 1,
    explanation: "The nucellus is protected by envelopes (integuments) and this composite structure is called an ovule. Ovules are borne on megasporophylls."
  },
  {
    id: 203,
    topic: "Gymnosperms",
    q: "The megaspore mother cell divides meiotically to form:",
    options: [
      "Two megaspores",
      "Three megaspores",
      "Four megaspores",
      "Eight megaspores"
    ],
    correct: 2,
    explanation: "The megaspore mother cell divides meiotically to form four megaspores. One of these develops into a multicellular female gametophyte."
  },
  {
    id: 204,
    topic: "Gymnosperms",
    q: "How many of the four megaspores develop into female gametophyte in gymnosperms?",
    options: [
      "All four",
      "Three",
      "Two",
      "One"
    ],
    correct: 3,
    explanation: "Only one of the four megaspores (enclosed within the megasporangium) develops into a multicellular female gametophyte that bears two or more archegonia."
  },
  {
    id: 205,
    topic: "Gymnosperms",
    q: "The multicellular female gametophyte in gymnosperms bears:",
    options: [
      "Two or more archegonia",
      "Antheridia only",
      "Gemma cups",
      "Zoospores"
    ], correct: 0,
    explanation: "The female gametophyte bears two or more archegonia or female sex organs. It is retained within the megasporangium."
  },
  {
    id: 206,
    topic: "Gymnosperms",
    q: "Unlike bryophytes and pteridophytes, in gymnosperms the male and female gametophytes:",
    options: [
      "Are large and conspicuous",
      "Do not have independent free-living existence and remain within sporangia on sporophytes",
      "Have independent free-living existence",
      "Are always found in aquatic habitats"
    ], correct: 1,
    explanation: "In gymnosperms, both male and female gametophytes do not have an independent free-living existence. They remain within the sporangia retained on the sporophytes — a key difference from bryophytes and pteridophytes."
  },
  {
    id: 207,
    topic: "Gymnosperms",
    q: "Pollination in gymnosperms occurs by:",
    options: [
      "Water",
      "Insects",
      "Air currents (wind)",
      "Animals"
    ],
    correct: 2,
    explanation: "Pollen grains released from microsporangia are carried in air currents (wind pollination/anemophily) to come in contact with the opening of ovules on megasporophylls."
  },
  {
    id: 208,
    topic: "Gymnosperms",
    q: "After pollination in gymnosperms, the pollen tube:",
    options: [
      "Grows towards the stigma",
      "Develops into a prothallus",
      "Directly releases spores into the megasporangium",
      "Grows towards archegonia in the ovules and discharges contents near the mouth of archegonia"
    ], correct: 3,
    explanation: "The pollen tube carrying male gametes grows towards archegonia in the ovules and discharges their contents near the mouth of the archegonia. There is no stigma in gymnosperms."
  },
  {
    id: 209,
    topic: "Gymnosperms",
    q: "Following fertilisation in gymnosperms:",
    options: [
      "Zygote develops into a gametophyte",
      "Zygote develops into an embryo and ovules develop into naked seeds",
      "Ovules develop into fruits",
      "Seeds are enclosed within an ovary wall"
    ], correct: 1,
    explanation: "After fertilisation, the zygote develops into an embryo and ovules into seeds. These seeds are not covered (naked) — the defining feature of gymnosperms."
  },
  {
    id: 210,
    topic: "Gymnosperms",
    q: "Consider the following statements:<br>(i) Gymnosperms include medium-sized trees, tall trees and shrubs<br>(ii) The roots are generally tap roots<br>(iii) Leaves may be simple or compound<br>(iv) All gymnosperms are herbaceous",
    options: [
      "(iv) only",
      "(i), (ii), (iii) and (iv)",
      "(i), (ii) and (iii) only",
      "(i) and (ii) only"
    ], correct: 2,
    explanation: "Statements (i), (ii) and (iii) are correct. Statement (iv) is wrong — gymnosperms include medium-sized trees or tall trees and shrubs, not herbs."
  },
  {
    id: 211,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Gymnosperms do not require water for fertilisation.<br><br><b>Reason (R):</b> In gymnosperms, pollen tubes carry male gametes to the archegonia.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Unlike bryophytes and pteridophytes, gymnosperms do not need water for fertilisation because pollen tubes carry male gametes directly to archegonia. R correctly explains A."
  },
  {
    id: 212,
    topic: "Gymnosperms",
    q: "Which of the following is <b>not</b> an adaptation of gymnosperm leaves to reduce water loss?",
    options: [
      "Needle-like shape",
      "Thick cuticle",
      "Sunken stomata",
      "Broad lamina with thin cuticle"
    ],
    correct: 3,
    explanation: "Broad lamina with thin cuticle would increase water loss, not reduce it. Needle-like shape, thick cuticle and sunken stomata are all adaptations to reduce water loss in gymnosperms."
  },
  {
    id: 213,
    topic: "Gymnosperms",
    q: "Which of the following comparisons between bryophytes, pteridophytes and gymnosperms is <b>correct</b>?",
    options: [
      "In all three, gametophytes are free-living",
      "In bryophytes and pteridophytes, gametophytes are free-living; in gymnosperms they are not",
      "In all three, gametophytes are retained within sporangia",
      "In gymnosperms and pteridophytes, gametophytes are free-living; in bryophytes they are not"
    ],
    correct: 1,
    explanation: "In bryophytes, the gametophyte is the dominant free-living phase. In pteridophytes, the prothallus is a small free-living gametophyte. In gymnosperms, gametophytes are NOT free-living and remain within sporangia on sporophytes."
  },
  {
    id: 214,
    topic: "Gymnosperms",
    q: "Select the <b>incorrect</b> statement about gymnosperms:",
    options: [
      "They are heterosporous",
      "Seeds are naked",
      "Ovules are enclosed within an ovary wall",
      "Sporophylls are arranged to form cones"
    ], correct: 2,
    explanation: "Ovules in gymnosperms are NOT enclosed by any ovary wall — they remain exposed. This is the defining feature that makes their seeds 'naked'. All other statements are correct."
  },
  {
    id: 215,
    topic: "Gymnosperms",
    q: "Match the following root associations with the correct gymnosperm:<br>(a) Mycorrhiza – (i) Cycas<br>(b) Coralloid roots with cyanobacteria – (ii) Pinus",
    options: [
      "a-(ii), b-(ii)",
      "a-(i), b-(ii)",
      "a-(i), b-(i)",
      "a-(ii), b-(i)"
    ], correct: 3,
    explanation: "Mycorrhiza (fungal association) is found in Pinus (ii). Coralloid roots associated with N₂-fixing cyanobacteria are found in Cycas (i)."
  },
  {
    id: 216,
    topic: "Gymnosperms",
    q: "The female gametophyte in gymnosperms is retained within the:",
    options: [
      "Microsporangium",
      "Megasporangium",
      "Pollen grain",
      "Strobilus"
    ], correct: 1,
    explanation: "The multicellular female gametophyte is retained within the megasporangium (ovule). It does not have a free-living existence."
  },
  {
    id: 217,
    topic: "Gymnosperms",
    q: "Consider the following evolutionary progression regarding water dependency for fertilisation:<br>(i) Bryophytes — need water<br>(ii) Pteridophytes — need water<br>(iii) Gymnosperms — do not need water<br>Which is/are correct?",
    options: [
      "(i) and (ii) only",
      "(iii) only",
      "(i), (ii) and (iii)",
      "(i) only"
    ],
    correct: 2,
    explanation: "All three are correct. Bryophytes and pteridophytes require water for transfer of antherozoids. Gymnosperms overcome this dependency through pollen tubes that carry male gametes to archegonia."
  },
  {
    id: 218,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Seeds of gymnosperms are naked.<br><br><b>Reason (R):</b> In gymnosperms, ovules are not enclosed by any ovary wall.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Gymnosperm seeds are naked because ovules are not enclosed by an ovary wall and remain exposed both before and after fertilisation. R directly explains A."
  },
  {
    id: 219,
    topic: "Gymnosperms",
    q: "In gymnosperms, the male gametophytic generation is:",
    options: [
      "Highly elaborate with many cells",
      "A multicellular protonema",
      "A large, free-living prothallus",
      "Highly reduced and confined to a limited number of cells"
    ], correct: 3,
    explanation: "The male gametophyte in gymnosperms is highly reduced and confined to only a limited number of cells. This reduced gametophyte is the pollen grain."
  },
  {
    id: 220,
    topic: "Gymnosperms",
    q: "Which of the following <b>correctly</b> represents the dominant phase in the life cycle of gymnosperms?",
    options: [
      "Gametophyte (haploid)",
      "Sporophyte (diploid)",
      "Both equally dominant",
      "Prothallus"
    ],
    correct: 1,
    explanation: "Like pteridophytes, the sporophyte (diploid) is the dominant phase in gymnosperms. The gametophyte is highly reduced and not free-living."
  },
  {
    id: 221,
    topic: "Gymnosperms",
    q: "Which of the following is <b>not</b> a gymnosperm?",
    options: [
      "Pinus",
      "Cedrus",
      "Marchantia",
      "Cycas"
    ],
    correct: 2,
    explanation: "Marchantia is a liverwort (bryophyte). Pinus, Cedrus and Cycas are gymnosperms."
  },
  {
    id: 222,
    topic: "Gymnosperms",
    q: "In gymnosperms, pollen grains come in contact with ovules through:",
    options: [
      "Water medium",
      "Insect vectors",
      "Underground root connections",
      "Air currents reaching the opening of ovules on megasporophylls"
    ], correct: 3,
    explanation: "Pollen grains are carried by air currents and come in contact with the opening of ovules borne on megasporophylls. Gymnosperms are wind-pollinated."
  },
  {
    id: 223,
    topic: "Gymnosperms",
    q: "Consider the following about <b>heterospory</b> in gymnosperms:<br>(i) Microspores develop into pollen grains<br>(ii) Megaspores develop into female gametophyte<br>(iii) Both types of spores are produced within sporangia<br>(iv) Sporangia are borne on sporophylls",
    options: [
      "(i) and (ii) only",
      "(i), (ii), (iii) and (iv)",
      "(i), (ii) and (iii) only",
      "(iii) and (iv) only"
    ], correct: 1,
    explanation: "All four statements are correct. Gymnosperms are heterosporous; microspores become pollen grains, megaspores give rise to female gametophytes, both spore types form in sporangia on sporophylls."
  },
  {
    id: 224,
    topic: "Gymnosperms",
    q: "Which of the following is <b>incorrectly</b> matched?",
    options: [
      "Pinus — Branched stem, mycorrhiza",
      "Cycas — Unbranched stem, coralloid roots",
      "Sequoia — Unbranched stem, coralloid roots",
      "Cedrus — Branched stem"
    ], correct: 2,
    explanation: "Sequoia (giant redwood) is described as one of the tallest tree species. Unbranched stem and coralloid roots are specifically described for Cycas, not Sequoia."
  },
  {
    id: 225,
    topic: "Gymnosperms",
    q: "Sunken stomata in gymnosperm leaves help to:",
    options: [
      "Increase rate of photosynthesis",
      "Increase water absorption",
      "Facilitate gas exchange during rain",
      "Reduce water loss"
    ], correct: 3,
    explanation: "Sunken stomata (stomata located in pits below the leaf surface) create a humid microenvironment that reduces the rate of transpiration (water loss)."
  },
  {
    id: 226,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> The male gametophyte in gymnosperms is called a pollen grain.<br><br><b>Reason (R):</b> The male gametophytic generation in gymnosperms is highly reduced and confined to a limited number of cells.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Both are true. The pollen grain IS the reduced male gametophyte, and R explains WHY it is called so — because the gametophytic generation is highly reduced to only a few cells forming the pollen grain."
  },
  {
    id: 227,
    topic: "Gymnosperms",
    q: "Which of the following features is shared by <b>both</b> pteridophytes and gymnosperms?",
    options: [
      "Free-living gametophyte",
      "Presence of archegonia",
      "Heterospory in all members",
      "Seed formation"
    ], correct: 1,
    explanation: "Both pteridophytes and gymnosperms possess archegonia (female sex organs). Free-living gametophytes are found in pteridophytes but NOT in gymnosperms. Not all pteridophytes are heterosporous. Seed formation is found in gymnosperms but not in pteridophytes."
  },
  {
    id: 228,
    topic: "Gymnosperms",
    q: "How many archegonia are typically present in the female gametophyte of gymnosperms?",
    options: [
      "Only one",
      "Exactly ten",
      "Two or more",
      "Archegonia are absent"
    ], correct: 2,
    explanation: "The multicellular female gametophyte in gymnosperms bears two or more archegonia or female sex organs."
  },
  {
    id: 229,
    topic: "Gymnosperms",
    q: "Consider the following statements:<br>Statement I: In Pinus, male and female cones are borne on the same tree.<br>Statement II: In Cycas, male cones and megasporophylls are borne on the same tree.<br>Which is/are correct?",
    options: [
      "Neither Statement I nor Statement II",
      "Only Statement II",
      "Both Statements I and II",
      "Only Statement I"
    ], correct: 3,
    explanation: "Only Statement I is correct. In Pinus, male and female cones are on the same tree (monoecious). In Cycas, they are on different trees (dioecious) — so Statement II is wrong."
  },
  {
    id: 230,
    topic: "Gymnosperms",
    q: "Arrange the following in the <b>correct evolutionary sequence</b> with respect to water dependency for fertilisation and seed formation:",
    options: [
      "Gymnosperms → Pteridophytes → Bryophytes",
      "Bryophytes → Pteridophytes → Gymnosperms",
      "Pteridophytes → Bryophytes → Gymnosperms",
      "Gymnosperms → Bryophytes → Pteridophytes"
    ],
    correct: 1,
    explanation: "Bryophytes (water-dependent, no seeds) → Pteridophytes (water-dependent, heterospory as precursor to seed habit) → Gymnosperms (water-independent for fertilisation, produce seeds). This shows progressive evolution."
  },
  {
    id: 231,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Gymnosperms do not form fruits.<br><br><b>Reason (R):</b> Ovary is absent in gymnosperms, and fruits develop from the ovary wall.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Gymnosperms do not form fruits because they lack an ovary wall. Fruits are structures formed from the ovary (in angiosperms). Since ovary is absent in gymnosperms, fruit formation is impossible. R correctly explains A."
  },
  {
    id: 232,
    topic: "Gymnosperm Reproduction",
    q: "In gymnosperms, the two kinds of spores are produced within sporangia that are borne on:",
    options: [
      "Rhizoids",
      "Prothallus",
      "Sporophylls arranged spirally along an axis",
      "Gemma cups"
    ], correct: 2,
    explanation: "Sporangia bearing microspores and megaspores are borne on sporophylls, which are arranged spirally along an axis to form lax or compact strobili or cones."
  },
  {
    id: 233,
    topic: "Gymnosperm Reproduction",
    q: "The strobili bearing microsporophylls and microsporangia are called:",
    options: [
      "Macrosporangiate or female strobili",
      "Archegoniate strobili",
      "Megasporangiate or bisexual strobili",
      "Microsporangiate or male strobili"
    ], correct: 3,
    explanation: "Strobili bearing microsporophylls and microsporangia are called microsporangiate or male strobili. Those bearing megasporophylls with ovules are macrosporangiate or female strobili."
  },
  {
    id: 234,
    topic: "Gymnosperm Reproduction",
    q: "The pollen grain in gymnosperms represents:",
    options: [
      "The dominant sporophytic generation",
      "A highly reduced male gametophytic generation confined to a limited number of cells",
      "A free-living multicellular gametophyte",
      "The female gametophyte"
    ],
    correct: 1,
    explanation: "Microspores develop into a male gametophytic generation that is highly reduced and confined to only a limited number of cells — this reduced gametophyte is called a pollen grain."
  },
  {
    id: 235,
    topic: "Gymnosperm Reproduction",
    q: "Pollen grain development in gymnosperms takes place within the:",
    options: [
      "Megasporangia",
      "Ovules",
      "Microsporangia",
      "Archegonia"
    ],
    correct: 2,
    explanation: "The development of pollen grains takes place within the microsporangia, which are present on microsporophylls of male strobili."
  },
  {
    id: 236,
    topic: "Gymnosperm Reproduction",
    q: "Consider the following statements:<br>(i) In Pinus, male and female cones are borne on the same tree<br>(ii) In Cycas, male cones and megasporophylls are borne on different trees<br>(iii) In Cycas, male cones and megasporophylls are borne on the same tree<br>Which of the above is/are correct?",
    options: [
      "(ii) and (iii) only",
      "(i) and (iii) only",
      "(i), (ii) and (iii)",
      "(i) and (ii) only"
    ], correct: 3,
    explanation: "Statements (i) and (ii) are correct. Pinus is monoecious (both cones on same tree), while Cycas is dioecious (male cones and megasporophylls on different trees). Statement (iii) is wrong."
  },
  {
    id: 237,
    topic: "Gymnosperm Reproduction",
    q: "The megaspore mother cell in gymnosperms is differentiated from one of the cells of the:",
    options: [
      "Integument",
      "Nucellus",
      "Archegonium",
      "Microsporangium"
    ], correct: 1,
    explanation: "The megaspore mother cell is differentiated from one of the cells of the nucellus. The nucellus, protected by envelopes (integuments), forms the composite structure called an ovule."
  },
  {
    id: 238,
    topic: "Gymnosperm Reproduction",
    q: "The composite structure called an <b>ovule</b> in gymnosperms consists of:",
    options: [
      "Only the megaspore mother cell",
      "Only the integuments",
      "Nucellus protected by envelopes (integuments)",
      "Microsporangium and nucellus"
    ], correct: 2,
    explanation: "The nucellus is protected by envelopes (integuments) and this composite structure is called an ovule. Ovules are borne on megasporophylls."
  },
  {
    id: 239,
    topic: "Gymnosperm Reproduction",
    q: "The megaspore mother cell divides <b>meiotically</b> to form:",
    options: [
      "Two megaspores",
      "Three megaspores",
      "Eight megaspores",
      "Four megaspores"
    ], correct: 3,
    explanation: "The megaspore mother cell divides meiotically to form four megaspores. Only one of them develops into a multicellular female gametophyte."
  },
  {
    id: 240,
    topic: "Gymnosperm Reproduction",
    q: "Out of four megaspores formed after meiosis in gymnosperms, how many develop into the female gametophyte?",
    options: [
      "All four",
      "One",
      "Two",
      "Three"
    ], correct: 1,
    explanation: "Only one of the four megaspores, enclosed within the megasporangium, develops into a multicellular female gametophyte that bears two or more archegonia."
  },
  {
    id: 241,
    topic: "Gymnosperm Reproduction",
    q: "<b>Assertion (A):</b> The female gametophyte in gymnosperms is retained within the megasporangium.<br><br><b>Reason (R):</b> In gymnosperms, the gametophytes do not have an independent free-living existence.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Both A and R are true. Unlike bryophytes and pteridophytes, gymnosperm gametophytes (both male and female) remain within the sporangia retained on the sporophytes. R correctly explains why the female gametophyte is retained."
  },
  {
    id: 242,
    topic: "Gymnosperm Reproduction",
    q: "After release from microsporangia, pollen grains in gymnosperms reach the ovules through:",
    options: [
      "Water currents",
      "Insect vectors",
      "Air currents",
      "Self-pollination only"
    ],
    correct: 2,
    explanation: "Pollen grains released from microsporangia are carried by air currents and come in contact with the opening of ovules borne on megasporophylls."
  },
  {
    id: 243,
    topic: "Gymnosperm Reproduction",
    q: "The pollen tube in gymnosperms grows towards the archegonia in the ovules and:",
    options: [
      "Releases spores near the archegonia",
      "Forms a new sporophyte directly",
      "Produces female gametes",
      "Discharges male gametes near the mouth of the archegonia"
    ], correct: 3,
    explanation: "The pollen tube carrying male gametes grows towards archegonia in the ovules and discharges their contents near the mouth of the archegonia, facilitating fertilisation."
  },
  {
    id: 244,
    topic: "Gymnosperm Reproduction",
    q: "Following fertilisation in gymnosperms:<br>(i) Zygote develops into an embryo<br>(ii) Ovules develop into seeds<br>(iii) Seeds are covered by fruit wall<br>Which statements are correct?",
    options: [
      "(i), (ii) and (iii)",
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i) only"
    ],
    correct: 1,
    explanation: "After fertilisation, the zygote develops into an embryo and ovules into seeds. The seeds are NOT covered (naked) — there is no fruit wall. Statement (iii) is wrong."
  },
  {
    id: 245,
    topic: "Gymnosperm Reproduction",
    q: "Which of the following represents the <b>correct sequence</b> of events in gymnosperm reproduction?",
    options: [
      "Seed → Pollination → Fertilisation → Embryo → Pollen tube",
      "Fertilisation → Pollination → Embryo → Seed → Pollen tube",
      "Pollination → Pollen tube formation → Male gamete discharge near archegonia → Fertilisation → Embryo → Seed",
      "Pollen tube → Pollination → Archegonia → Seed → Embryo"
    ], correct: 2,
    explanation: "The correct sequence: Pollen grains reach ovules via air currents (pollination) → pollen tube grows towards archegonia → male gametes discharged near mouth of archegonia → fertilisation → zygote → embryo → ovule becomes seed."
  },
  {
    id: 246,
    topic: "Gymnosperm Reproduction",
    q: "<b>Assertion (A):</b> In gymnosperms, water is not required for fertilisation.<br><br><b>Reason (R):</b> Male gametes are carried to archegonia by pollen tubes, eliminating the need for external water.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Unlike bryophytes and pteridophytes where antherozoids swim through water, gymnosperm male gametes are carried by pollen tubes to archegonia. Hence water is not needed for fertilisation. R correctly explains A."
  },
  {
    id: 247,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Kingdom Plantae includes:<br>(i) Algae<br>(ii) Bryophytes<br>(iii) Pteridophytes<br>(iv) Gymnosperms<br>(v) Angiosperms<br>(vi) Fungi",
    options: [
      "(i), (ii), (iii), (iv), (v) and (vi)",
      "(iv) and (v) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii), (iv) and (v) only"
    ], correct: 3,
    explanation: "Plant Kingdom includes algae, bryophytes, pteridophytes, gymnosperms and angiosperms. Fungi are excluded from Plantae in modern classification."
  },
  {
    id: 248,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is the <b>correct</b> description of algae?",
    options: [
      "Chlorophyll-bearing, complex, heterotrophic, terrestrial organisms",
      "Chlorophyll-bearing, simple, thalloid, autotrophic, largely aquatic organisms",
      "Non-chlorophyll-bearing, thalloid, autotrophic organisms",
      "Complex, vascular, autotrophic, aquatic organisms"
    ],
    correct: 1,
    explanation: "Algae are chlorophyll-bearing, simple, thalloid, autotrophic and largely aquatic organisms as per NCERT definition."
  },
  {
    id: 249,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Algae are classified into three classes based on:<br>(i) Type of pigment possessed<br>(ii) Type of stored food<br>(iii) Number of flagella<br>Select the correct option:",
    options: [
      "(i) only",
      "(i), (ii) and (iii)",
      "(i) and (ii) only",
      "(iii) only"
    ], correct: 2,
    explanation: "According to the NCERT summary, algae are classified into Chlorophyceae, Phaeophyceae and Rhodophyceae based on the type of pigment possessed and the type of stored food."
  },
  {
    id: 250,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following correctly describes <b>bryophytes</b>?",
    options: [
      "Plants with true roots, stems and leaves that are fully aquatic",
      "Naked-seeded plants with cones",
      "Plants with vascular tissues and independent sporophyte",
      "Plants that can live in soil but are dependent on water for sexual reproduction"
    ], correct: 3,
    explanation: "Bryophytes are plants that can live in soil but depend on water for sexual reproduction. They lack true roots, stems and leaves and lack vascular tissues."
  },
  {
    id: 251,
    topic: "Plant Kingdom Summary – Comparative",
    q: "The plant body of liverworts is <b>thalloid and dorsiventral</b> whereas in mosses it has:",
    options: [
      "Thalloid and dorsiventral body",
      "Upright, slender axes bearing spirally arranged leaves",
      "True roots and branched stems",
      "Needle-like leaves with sunken stomata"
    ],
    correct: 1,
    explanation: "Liverworts have a thalloid, dorsiventral plant body, while mosses have upright, slender axes bearing spirally arranged leaves — a key difference between the two bryophyte groups."
  },
  {
    id: 252,
    topic: "Plant Kingdom Summary – Comparative",
    q: "In bryophytes, the main plant body is called a <b>gametophyte</b> because it:",
    options: [
      "Produces spores",
      "Develops from the zygote",
      "Produces gametes",
      "Bears sporangia"
    ], correct: 2,
    explanation: "The main plant body of bryophytes is gamete-producing, hence called a gametophyte. It bears antheridia (male sex organs) and archegonia (female sex organs)."
  },
  {
    id: 253,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following about pteridophytes:<br>(i) The main plant is a sporophyte<br>(ii) It is differentiated into true root, stem and leaves<br>(iii) These organs possess well-differentiated vascular tissues<br>(iv) The gametophytes require hot, dry places to grow",
    options: [
      "(i), (ii), (iii) and (iv)",
      "(iv) only",
      "(i) and (iv) only",
      "(i), (ii) and (iii) only"
    ], correct: 3,
    explanation: "Statements (i), (ii) and (iii) are correct. Statement (iv) is wrong — gametophytes of pteridophytes require cool, damp places to grow, not hot dry places."
  },
  {
    id: 254,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Water is required for transfer of male gametes to archegonium in:",
    options: [
      "Only bryophytes",
      "Both bryophytes and pteridophytes",
      "Only pteridophytes",
      "Bryophytes, pteridophytes and gymnosperms"
    ], correct: 1,
    explanation: "Both bryophytes and pteridophytes require water for the transfer of male gametes (antherozoids) to the archegonium. Gymnosperms do not require water — male gametes are carried by pollen tubes."
  },
  {
    id: 255,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Gymnosperms are called naked-seeded plants.<br><br><b>Reason (R):</b> In gymnosperms, ovules are not enclosed by any ovary wall and after fertilisation seeds remain exposed.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Gymnosperms are called naked-seeded plants because ovules are not enclosed by an ovary wall and seeds remain exposed after fertilisation. R directly explains A."
  },
  {
    id: 256,
    topic: "Plant Kingdom Summary – Comparative",
    q: "In gymnosperms, the sporophylls are arranged spirally on an axis to form:",
    options: [
      "Prothallus",
      "Sori",
      "Male and female cones respectively",
      "Gemma cups"
    ],
    correct: 2,
    explanation: "Microsporophylls and megasporophylls are arranged spirally on an axis to form male and female cones (strobili), respectively."
  },
  {
    id: 257,
    topic: "Plant Kingdom Summary – Comparative",
    q: "In gymnosperms, the pollen grain germinates and the pollen tube releases the male gamete into the ovule where it fuses with the egg cell in:",
    options: [
      "Antheridia",
      "Microsporangia",
      "Megasporangia wall",
      "Archegonia"
    ], correct: 3,
    explanation: "The pollen tube carries male gametes to the archegonia in the ovule, where the male gamete fuses with the egg cell."
  },
  {
    id: 258,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Angiosperms are divided into:",
    options: [
      "Gymnosperms and pteridophytes",
      "Dicotyledons and monocotyledons",
      "Liverworts and mosses",
      "Chlorophyceae and Rhodophyceae"
    ], correct: 1,
    explanation: "Angiosperms are divided into two classes — the dicotyledons and the monocotyledons."
  },
  {
    id: 259,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Arrange the following plant groups in <b>increasing order of body complexity</b>:",
    options: [
      "Pteridophytes → Algae → Bryophytes → Gymnosperms → Angiosperms",
      "Bryophytes → Algae → Gymnosperms → Pteridophytes → Angiosperms",
      "Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms",
      "Angiosperms → Gymnosperms → Pteridophytes → Bryophytes → Algae"
    ], correct: 2,
    explanation: "The correct evolutionary order of increasing complexity: Algae (simplest, thalloid) → Bryophytes (more differentiated, no vascular tissue) → Pteridophytes (true organs, vascular tissue) → Gymnosperms (seeds, no fruit) → Angiosperms (seeds within fruits)."
  },
  {
    id: 260,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Match the plant group with the <b>dominant phase</b> in their life cycle:<br>(a) Bryophytes – (i) Sporophyte<br>(b) Pteridophytes – (ii) Gametophyte<br>(c) Gymnosperms – (iii) Sporophyte",
    options: [
      "a-(iii), b-(ii), c-(i)",
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(iii), c-(i)",
      "a-(ii), b-(i), c-(iii)"
    ], correct: 3,
    explanation: "Bryophytes — gametophyte dominant (ii); Pteridophytes — sporophyte dominant (i); Gymnosperms — sporophyte dominant (iii)."
  },
  {
    id: 261,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is the <b>first</b> group of plants to possess vascular tissues?",
    options: [
      "Algae",
      "Pteridophytes",
      "Bryophytes",
      "Gymnosperms"
    ], correct: 1,
    explanation: "Pteridophytes are the first terrestrial plants to possess well-differentiated vascular tissues (xylem and phloem)."
  },
  {
    id: 262,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following groups has <b>true roots, stems and leaves</b>?<br>(i) Algae<br>(ii) Bryophytes<br>(iii) Pteridophytes<br>(iv) Gymnosperms",
    options: [
      "(i) and (ii) only",
      "(i), (ii), (iii) and (iv)",
      "(iii) and (iv) only",
      "(ii) and (iii) only"
    ], correct: 2,
    explanation: "Only pteridophytes and gymnosperms (and angiosperms) have true roots, stems and leaves. Algae have a thalloid body. Bryophytes have root-like, stem-like and leaf-like structures but NOT true roots, stems or leaves."
  },
  {
    id: 263,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following statements:<br>Statement I: In bryophytes, the sporophyte produces haploid spores.<br>Statement II: In pteridophytes, the sporophyte bears sporangia which produce spores.<br>Which is/are correct?",
    options: [
      "Only Statement I",
      "Only Statement II",
      "Neither Statement I nor Statement II",
      "Both Statements I and II"
    ], correct: 3,
    explanation: "Both are correct. In bryophytes, the sporophyte produces haploid spores that germinate to form gametophytes. In pteridophytes, the sporophyte bears sporangia that produce spores, which germinate to form gametophytes."
  },
  {
    id: 264,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Select the group in which <b>seeds are produced</b>:",
    options: [
      "Bryophytes and pteridophytes",
      "Gymnosperms and angiosperms",
      "Algae and bryophytes",
      "Pteridophytes and gymnosperms"
    ], correct: 1,
    explanation: "Seeds are produced only in gymnosperms and angiosperms. Algae, bryophytes and pteridophytes do not produce seeds — they reproduce by spores."
  },
  {
    id: 265,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Algae reproduce sexually by formation of gametes which may show isogamy, anisogamy or oogamy.<br><br><b>Reason (R):</b> In isogamy, gametes are similar in size; in anisogamy, they are dissimilar; in oogamy, a large non-motile female gamete fuses with a smaller motile male gamete.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Both A and R are true. Algae exhibit all three types of sexual reproduction. R correctly defines and explains the three types mentioned in A."
  },
  {
    id: 266,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which plant group shows the <b>most primitive</b> body organisation?",
    options: [
      "Bryophytes",
      "Pteridophytes",
      "Algae",
      "Gymnosperms"
    ], correct: 2,
    explanation: "Algae have the most primitive body organisation — simple, thalloid bodies without any differentiation into root, stem or leaf-like structures (though some show slight differentiation)."
  },
  {
    id: 267,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following correctly compares the <b>attachment structures</b> across plant groups?",
    options: [
      "Algae — rhizoids; Bryophytes — holdfasts; Pteridophytes — true roots",
      "Algae — true roots; Bryophytes — rhizoids; Pteridophytes — rhizoids",
      "All groups have true roots",
      "Bryophytes — rhizoids; Pteridophytes — true roots; Gymnosperms — tap roots"
    ], correct: 3,
    explanation: "Bryophytes are attached by rhizoids (unicellular or multicellular). Pteridophytes have true roots. Gymnosperms generally have tap roots. Algae may be attached by holdfasts (in some forms)."
  },
  {
    id: 268,
    topic: "Plant Kingdom Summary – Comparative",
    q: "In which of the following plant groups are <b>both antheridia and archegonia</b> present?<br>(i) Bryophytes<br>(ii) Pteridophytes<br>(iii) Gymnosperms",
    options: [
      "(i) only",
      "(i), (ii) and (iii)",
      "(i) and (ii) only",
      "(ii) and (iii) only"
    ], correct: 1,
    explanation: "Antheridia and archegonia are present in bryophytes, pteridophytes and gymnosperms (all three). In gymnosperms, archegonia are present in the female gametophyte within the ovule."
  },
  {
    id: 269,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Select the <b>incorrect</b> comparison:",
    options: [
      "Algae — thalloid body; Bryophytes — thalloid or leafy body",
      "Pteridophytes — vascular tissues present; Bryophytes — vascular tissues absent",
      "Gymnosperms — seeds naked; Angiosperms — seeds enclosed",
      "Bryophytes — sporophyte dominant; Pteridophytes — gametophyte dominant"
    ],
    correct: 3,
    explanation: "Option D is incorrect. In bryophytes, the GAMETOPHYTE is dominant (not sporophyte). In pteridophytes, the SPOROPHYTE is dominant (not gametophyte). The statement reverses the dominant phases."
  },
  {
    id: 270,
    topic: "Plant Kingdom Summary – Comparative",
    q: "The <b>zygote</b> in bryophytes develops into:",
    options: [
      "A free-living gametophyte",
      "Haploid spores directly",
      "A multicellular body called sporophyte",
      "A prothallus"
    ], correct: 2,
    explanation: "In bryophytes, male and female gametes fuse to form a zygote, which produces a multicellular body called a sporophyte. The sporophyte then produces haploid spores."
  },
  {
    id: 271,
    topic: "Plant Kingdom Summary – Comparative",
    q: "In pteridophytes, spores germinate to form gametophytes which require:",
    options: [
      "Hot, dry places",
      "Direct sunlight only",
      "Deep ocean water",
      "Cool, damp places"
    ], correct: 3,
    explanation: "The gametophytes (prothallus) of pteridophytes require cool, damp places to grow. This is one reason for the limited geographical distribution of pteridophytes."
  },
  {
    id: 272,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is the <b>correct</b> evolutionary advancement in gymnosperms over pteridophytes?",
    options: [
      "Development of vascular tissues",
      "Production of seeds",
      "Presence of archegonia",
      "Presence of antheridia"
    ],
    correct: 1,
    explanation: "Gymnosperms produce seeds (ovule → seed after fertilisation), which is a major evolutionary advancement over pteridophytes that reproduce by spores. Vascular tissues first appeared in pteridophytes; archegonia and antheridia are in both groups."
  },
  {
    id: 273,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> The gametophyte of pteridophytes is free-living while that of gymnosperms is not.<br><br><b>Reason (R):</b> In gymnosperms, both male and female gametophytes remain within sporangia retained on the sporophytes.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "In pteridophytes, the prothallus is a free-living, mostly photosynthetic gametophyte. In gymnosperms, gametophytes are retained within sporangia on the sporophyte. R correctly explains the difference stated in A."
  },
  {
    id: 274,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following correctly traces the <b>progressive reduction of gametophyte</b> across plant groups?",
    options: [
      "Algae (reduced) → Bryophytes (dominant) → Pteridophytes (free-living, small) → Gymnosperms (retained, not free-living)",
      "Gymnosperms (dominant) → Pteridophytes (reduced) → Bryophytes (absent)",
      "Bryophytes (dominant) → Pteridophytes (free-living, small) → Gymnosperms (retained, not free-living)",
      "Pteridophytes (dominant) → Bryophytes (reduced) → Gymnosperms (absent)"
    ], correct: 2,
    explanation: "The gametophyte shows progressive reduction: Bryophytes (dominant, independent) → Pteridophytes (free-living but small, inconspicuous) → Gymnosperms (highly reduced, not free-living, retained within sporangia)."
  },
  {
    id: 275,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following features is common to <b>all</b> plant groups — algae, bryophytes, pteridophytes, gymnosperms and angiosperms?",
    options: [
      "Presence of vascular tissues",
      "Production of seeds",
      "Presence of true roots",
      "Alternation of generations"
    ], correct: 3,
    explanation: "Alternation of generations (between gametophytic and sporophytic phases) is common to all plant groups. Vascular tissues start from pteridophytes, seeds from gymnosperms, and true roots from pteridophytes."
  },
  {
    id: 276,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following comparisons:<br>(i) Algae reproduce vegetatively by fragmentation<br>(ii) Bryophytes reproduce asexually by spore formation in the sporophyte<br>(iii) Pteridophytes produce spores by meiosis in sporangia<br>(iv) Gymnosperms produce microspores and megaspores<br>Which of the above is/are correct?",
    options: [
      "(i) and (ii) only",
      "(i), (ii), (iii) and (iv)",
      "(i), (ii) and (iii) only",
      "(iii) and (iv) only"
    ], correct: 1,
    explanation: "All four statements are correct as per NCERT. Algae reproduce vegetatively by fragmentation, bryophyte sporophytes produce spores, pteridophyte sporangia produce spores by meiosis, and gymnosperms produce both microspores and megaspores."
  },
  {
    id: 277,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Match the following plant groups with the type of body differentiation:<br>(a) Algae – (i) True root, stem and leaves with vascular tissue<br>(b) Bryophytes – (ii) Simple, thalloid<br>(c) Pteridophytes – (iii) Root-like, stem-like, leaf-like structures without vascular tissue",
    options: [
      "a-(i), b-(ii), c-(iii)",
      "a-(iii), b-(ii), c-(i)",
      "a-(ii), b-(iii), c-(i)",
      "a-(ii), b-(i), c-(iii)"
    ], correct: 2,
    explanation: "Algae — simple, thalloid (ii); Bryophytes — root-like, stem-like, leaf-like structures without vascular tissue (iii); Pteridophytes — true root, stem and leaves with vascular tissue (i)."
  },
  {
    id: 278,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Bryophytes possess root-like, leaf-like and stem-like structures but not true roots, stems and leaves.<br><br><b>Reason (R):</b> True roots, stems and leaves require well-differentiated vascular tissues which are absent in bryophytes.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Bryophytes lack vascular tissues and hence their structures are called root-like, stem-like and leaf-like rather than true roots, stems and leaves. True differentiation of these organs requires vascular tissues. R correctly explains A."
  },
  {
    id: 279,
    topic: "Plant Kingdom Summary – Comparative",
    q: "The <b>sporophyte</b> is dependent on the gametophyte in:",
    options: [
      "Pteridophytes",
      "Gymnosperms",
      "Angiosperms",
      "Bryophytes"
    ], correct: 3,
    explanation: "In bryophytes, the sporophyte is not free-living and is attached to the photosynthetic gametophyte, deriving nourishment from it. In pteridophytes and gymnosperms, the sporophyte is independent and dominant."
  },
  {
    id: 280,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is <b>not</b> a method of vegetative reproduction in algae?",
    options: [
      "Fragmentation",
      "Budding in secondary protonema",
      "Zoospore formation",
      "Fragmentation is the only vegetative method"
    ],
    correct: 1,
    explanation: "Budding in secondary protonema is a vegetative reproduction method in mosses, not algae. Algae reproduce vegetatively by fragmentation. Zoospore formation is asexual, not vegetative."
  },
  {
    id: 281,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Select the correct order of the appearance of the following features during plant evolution:<br>(i) Vascular tissues<br>(ii) Seeds<br>(iii) Flowers and fruits<br>(iv) Rhizoids for attachment",
    options: [
      "(iii) → (ii) → (i) → (iv)",
      "(i) → (iv) → (ii) → (iii)",
      "(iv) → (i) → (ii) → (iii)",
      "(iv) → (ii) → (i) → (iii)"
    ], correct: 2,
    explanation: "Evolutionary order: Rhizoids (bryophytes, iv) → Vascular tissues (pteridophytes, i) → Seeds (gymnosperms, ii) → Flowers and fruits (angiosperms, iii)."
  },
  {
    id: 282,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is a unique feature of <b>angiosperms</b> compared to gymnosperms?",
    options: [
      "Presence of vascular tissues",
      "Production of seeds",
      "Presence of archegonia",
      "Seeds enclosed within fruits (ovary wall)"
    ], correct: 3,
    explanation: "In angiosperms, seeds are enclosed within fruits (developed from the ovary wall). In gymnosperms, seeds are naked. Vascular tissues and seed production are shared features. Archegonia are absent in angiosperms."
  },
  {
    id: 283,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following comprehensive comparison:<br>(i) Algae → No embryo formation<br>(ii) Bryophytes → Embryo develops within archegonium<br>(iii) Pteridophytes → Zygote forms sporophyte<br>(iv) Gymnosperms → Zygote develops into embryo within ovule<br>Which are correct?",
    options: [
      "(i) and (ii) only",
      "(i), (ii), (iii) and (iv)",
      "(ii), (iii) and (iv) only",
      "(i) and (iv) only"
    ],
    correct: 1,
    explanation: "All four are correct. Algae don't form embryos (no embryo stage). In bryophytes, pteridophytes and gymnosperms, the zygote develops into an embryo — within archegonium (bryophytes), on the gametophyte (pteridophytes), or within the ovule (gymnosperms)."
  },
  {
    id: 284,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Pteridophytes are more advanced than bryophytes but less advanced than gymnosperms.<br><br><b>Reason (R):</b> Pteridophytes have vascular tissues and true organs but lack seeds, while gymnosperms produce seeds.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Pteridophytes are more advanced than bryophytes (vascular tissues, true organs, dominant sporophyte) but less advanced than gymnosperms (which produce seeds and don't need water for fertilisation). R correctly explains A."
  },
  {
    id: 285,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is common to <b>bryophytes, pteridophytes and gymnosperms</b> but <b>absent in algae</b>?",
    options: [
      "Alternation of generations",
      "Autotrophic nutrition",
      "Multicellular sex organs (antheridia and archegonia)",
      "Chlorophyll"
    ], correct: 2,
    explanation: "Multicellular sex organs (antheridia and archegonia) are present in bryophytes, pteridophytes and gymnosperms but absent in algae (which generally have unicellular sex organs). Alternation of generations, autotrophic nutrition and chlorophyll are present in all groups."
  },
  {
    id: 286,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following shows the <b>correct progressive increase</b> in sporophyte independence?",
    options: [
      "Gymnosperms → Pteridophytes → Bryophytes",
      "Pteridophytes → Bryophytes → Gymnosperms",
      "Algae → Gymnosperms → Bryophytes → Pteridophytes",
      "Bryophytes (dependent on gametophyte) → Pteridophytes (independent, dominant) → Gymnosperms (independent, dominant, seed-forming)"
    ], correct: 3,
    explanation: "Sporophyte independence increases: Bryophytes (sporophyte dependent on gametophyte) → Pteridophytes (sporophyte independent and dominant) → Gymnosperms (sporophyte dominant, produces seeds, gametophyte fully dependent)."
  },

  // ===== ANGIOSPERMS (Q287–Q305) =====
  {
    id: 287,
    topic: "Angiosperms",
    q: "Angiosperms differ from gymnosperms in having:",
    options: [
      "Pollen grains",
      "Flowers and fruits enclosing seeds",
      "Seeds",
      "Vascular tissue"
    ], correct: 1,
    explanation: "The defining feature of angiosperms is that the seeds are enclosed within a fruit (ripened ovary), hence also called flowering plants. Gymnosperms also have pollen, seeds, and vascular tissue — but their seeds are naked (not enclosed in fruit)."
  },
  {
    id: 288,
    topic: "Angiosperms",
    q: "The term 'angiosperm' literally means:",
    options: [
      "Naked seed",
      "Flowering plant only",
      "Enclosed seed",
      "Vascular plant"
    ], correct: 2,
    explanation: "Angiosperm is derived from Greek: 'angios' = vessel/container and 'sperma' = seed. So angiosperm literally means 'enclosed seed' — seeds are enclosed within a fruit (the ripened ovary). Gymnosperm = 'naked seed.'"
  },
  {
    id: 289,
    topic: "Angiosperms",
    q: "Angiosperms are the most dominant plant group on Earth today. Which of the following <b>correctly</b> lists reasons for their success?<br>(i) Presence of flowers for pollination<br>(ii) Seeds enclosed in fruits for dispersal<br>(iii) Vessel elements for efficient water transport<br>(iv) Dependence on water for fertilisation",
    options: [
      "(i) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only",
      "(i), (ii) and (iii) only"
    ], correct: 3,
    explanation: "Angiosperms' ecological success is attributed to flowers (aid in pollination), enclosed seeds/fruits (aid in dispersal), and vessel elements (for efficient water and mineral transport). Dependence on water for fertilisation is a DISADVANTAGE — angiosperms are independent of water for fertilisation (unlike bryophytes and pteridophytes)."
  },
  {
    id: 290,
    topic: "Angiosperms",
    q: "Angiosperms are divided into two classes based on the number of cotyledons. Which of the following is <b>incorrect</b>?",
    options: [
      "Monocots have one cotyledon",
      "Monocots have reticulate venation",
      "Dicots have two cotyledons",
      "Dicots have tap root system"
    ], correct: 1,
    explanation: "Monocots have parallel venation (NOT reticulate). Reticulate venation is characteristic of dicots. Other statements are correct: monocots have 1 cotyledon, dicots have 2 cotyledons, and dicots typically have tap root systems."
  },
  {
    id: 291,
    topic: "Angiosperms",
    q: "<b>Assertion (A):</b> Angiosperms are the most evolved group of plants.<br><br><b>Reason (R):</b> They have well-differentiated vascular tissue with vessels, enclose seeds in fruits, and show double fertilisation.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Angiosperms are the most advanced (evolved) group in the plant kingdom (A). Their advanced status is due to presence of vessels in xylem for efficient water transport, seeds enclosed in fruits, and the unique double fertilisation process (R). R correctly provides the structural and reproductive reasons for A."
  },
  {
    id: 292,
    topic: "Angiosperms",
    q: "Double fertilisation, a unique feature of angiosperms, involves:",
    options: [
      "Two pollen grains fusing with one egg cell",
      "One pollen grain fusing with two egg cells",
      "Fusion of one male gamete with the egg (syngamy) AND fusion of another male gamete with the secondary nucleus (triple fusion)",
      "Fusion of two polar nuclei only, without fertilisation"
    ],
    correct: 2,
    explanation: "Double fertilisation in angiosperms involves: (1) Syngamy — one male gamete + egg cell → zygote (2n), and (2) Triple fusion — other male gamete + two polar nuclei → Primary Endosperm Nucleus (3n). Both events are called 'double fertilisation' since two fusion events occur involving two male gametes."
  },
  {
    id: 293,
    topic: "Angiosperms",
    q: "The endosperm in angiosperms is:",
    options: [
      "Diploid (2n), formed from fertilisation of egg",
      "Haploid (n), formed from polar nuclei directly",
      "Tetraploid (4n), formed by double fertilisation",
      "Triploid (3n), formed by triple fusion"
    ], correct: 3,
    explanation: "Endosperm is formed by triple fusion — one male gamete (n) + two polar nuclei (n + n) = Primary Endosperm Nucleus (3n = triploid). Endosperm nourishes the developing embryo. This triploid endosperm is unique to angiosperms."
  },
  {
    id: 294,
    topic: "Angiosperms",
    q: "In angiosperms, the phloem differs from that of gymnosperms by the presence of:",
    options: [
      "Sieve cells instead of sieve tubes",
      "Companion cells along with sieve tube elements",
      "Absence of all living cells",
      "Tracheids instead of vessels"
    ],
    correct: 1,
    explanation: "Angiosperm phloem has sieve tube elements associated with companion cells. Gymnosperm phloem has sieve cells but LACKS companion cells. The presence of companion cells is a distinctive feature of angiosperm phloem."
  },
  {
    id: 295,
    topic: "Angiosperms",
    q: "Which of the following features is <b>exclusively</b> found in angiosperms among all plant groups?",
    options: [
      "Presence of seeds",
      "Presence of vascular tissue",
      "Double fertilisation and formation of triploid endosperm",
      "Presence of vessels in xylem"
    ],
    correct: 2,
    explanation: "Double fertilisation leading to triploid (3n) endosperm is exclusively found in angiosperms. Seeds are also in gymnosperms. Vascular tissue is in pteridophytes and gymnosperms. Vessel elements are present in some gymnosperms too (e.g., Gnetum)."
  },
  {
    id: 296,
    topic: "Angiosperms",
    q: "The fruit in angiosperms is derived from:",
    options: [
      "The ovule after fertilisation",
      "The pericarp alone",
      "The entire flower after pollination",
      "The ripened ovary after fertilisation"
    ], correct: 3,
    explanation: "A fruit is a ripened ovary. After fertilisation, the ovary wall (pericarp) develops into the fruit wall, enclosing the seeds (developed from ovules). This enclosure of seeds distinguishes angiosperms from gymnosperms where seeds are naked."
  },
  {
    id: 297,
    topic: "Angiosperms",
    q: "Consider the following:<br>(i) Angiosperms have vessels in xylem<br>(ii) Gymnosperms have only tracheids in xylem<br>(iii) Angiosperms have companion cells in phloem<br>(iv) Gymnosperms have companion cells in phloem<br><br>How many are correct?",
    options: [
      "One",
      "Three",
      "Two",
      "Four"
    ], correct: 1,
    explanation: "(i) CORRECT — angiosperms have vessels (highly efficient water conducting elements). (ii) CORRECT — gymnosperms lack vessels; they have only tracheids. (iii) CORRECT — angiosperm phloem has companion cells. (iv) INCORRECT — gymnosperm phloem lacks companion cells; it has sieve cells but NO companion cells. Three are correct."
  },
  {
    id: 298,
    topic: "Angiosperms",
    q: "The flower is considered a modified:",
    options: [
      "Vegetative shoot",
      "Leaf",
      "Sporophyll-bearing condensed shoot",
      "Underground structure"
    ], correct: 2,
    explanation: "A flower is a condensed, modified shoot bearing sporophylls (stamens = microsporophylls; carpels = megasporophylls). This interpretation links the flower to the sporangia-bearing structures of pteridophytes and gymnosperms, reflecting evolutionary continuity."
  },
  {
    id: 299,
    topic: "Angiosperms",
    q: "<b>Assertion (A):</b> In angiosperms, fertilisation can occur without the presence of water.<br><br><b>Reason (R):</b> Pollen tube delivers the male gametes directly to the egg cell inside the ovule.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Unlike bryophytes and pteridophytes where motile sperms swim in water to the egg, angiosperms (and gymnosperms) produce pollen tubes that carry male gametes directly to the egg. This eliminates dependence on water for fertilisation. R correctly explains A."
  },
  {
    id: 300,
    topic: "Angiosperms",
    q: "Which of the following statements correctly differentiates monocots from dicots?<br>(i) Monocots: fibrous roots, parallel venation, flower parts in 3s<br>(ii) Dicots: tap roots, reticulate venation, flower parts in 4s or 5s<br>(iii) Monocots: vascular bundles are scattered<br>(iv) Dicots: vascular bundles arranged in a ring",
    options: [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(iii) and (iv) only",
      "(i), (ii), (iii) and (iv)"
    ], correct: 3,
    explanation: "All four statements are correct. Monocots have fibrous roots, parallel venation, flower parts in multiples of 3, and scattered vascular bundles. Dicots have tap roots, reticulate venation, flower parts in 4s or 5s, and ring-arranged vascular bundles."
  },
  {
    id: 301,
    topic: "Angiosperms",
    q: "The gametophyte generation in angiosperms is represented by:",
    options: [
      "The entire plant body",
      "Pollen grain (male gametophyte) and embryo sac (female gametophyte)",
      "Only the ovule",
      "The endosperm only"
    ],
    correct: 1,
    explanation: "In angiosperms, the gametophyte is highly reduced and entirely dependent on the sporophyte. The male gametophyte = pollen grain (2-celled or 3-celled structure). The female gametophyte = embryo sac (7-celled, 8-nucleate structure). Both are microscopic and nutritionally dependent on the sporophyte."
  },
  {
    id: 302,
    topic: "Angiosperms",
    q: "The embryo sac of a typical angiosperm is:",
    options: [
      "8-celled and 8-nucleate",
      "4-celled and 4-nucleate",
      "7-celled and 8-nucleate",
      "3-celled and 6-nucleate"
    ], correct: 2,
    explanation: "A typical (Polygonum type) angiosperm embryo sac is 7-celled and 8-nucleate: 3 antipodal cells, 2 synergids, 1 egg cell, and 1 central cell with 2 polar nuclei. The central cell thus has 2 nuclei — making 8 nuclei total in 7 cells."
  },
  {
    id: 303,
    topic: "Angiosperms",
    q: "<b>Assertion (A):</b> Angiosperms are the most successful land plants today.<br><br><b>Reason (R):</b> They have adapted to almost all habitats and show maximum diversity in form.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Angiosperms are the most successful plant group (A) because they have colonised almost every terrestrial and aquatic habitat and show maximum diversity in growth form — trees, shrubs, herbs, aquatics, parasites, carnivores, etc. (R). This ecological flexibility explains their dominance."
  },
  {
    id: 304,
    topic: "Angiosperms",
    q: "Which of the following is <b>absent</b> in angiosperms compared to gymnosperms?",
    options: [
      "Pollen grains",
      "Seeds",
      "Vascular tissue",
      "Naked ovules (ovules not enclosed in ovary)"
    ], correct: 3,
    explanation: "Gymnosperms have naked ovules — ovules not enclosed in an ovary. In angiosperms, ovules are enclosed within the ovary. After fertilisation, the ovary becomes the fruit. The enclosed nature of ovules/seeds is the key difference. Pollen grains, seeds, and vascular tissue are present in both."
  },
  {
    id: 305,
    topic: "Angiosperms",
    q: "Identify the <b>incorrectly</b> matched pair:",
    options: [
      "Monocot example — Wheat, Maize, Rice",
      "Dicot example — Mango, Pea, Sunflower",
      "Monocot — reticulate venation",
      "Dicot — tap root system"
    ],
    correct: 2,
    explanation: "Monocots have PARALLEL venation (not reticulate). Reticulate (net-like) venation is characteristic of dicots. Examples of monocots (wheat, maize, rice) and dicots (mango, pea, sunflower), and dicots having tap roots — all are correct. Option C alone is incorrect."
  },

  // ===== ADVANCED GYMNOSPERM QUESTIONS (Q306–Q309) =====
  {
    id: 306,
    topic: "Gymnosperms",
    q: "Among gymnosperms, which genus contains the vessel elements in its xylem — making it exceptional among gymnosperms?",
    options: [
      "Pinus",
      "Gnetum",
      "Cycas",
      "Cedrus"
    ], correct: 1,
    explanation: "Gnetum is exceptional among gymnosperms in possessing vessel elements in its xylem, a feature typically associated with angiosperms. Most other gymnosperms (Pinus, Cycas) have only tracheids. This is an important NEET distinction."
  },
  {
    id: 307,
    topic: "Gymnosperms",
    q: "The coralloid roots of Cycas contain:",
    options: [
      "Mycorrhizal fungi for mineral absorption",
      "Parasitic nematodes",
      "Nitrogen-fixing cyanobacteria (Anabaena, Nostoc)",
      "Rhizobium bacteria for nitrogen fixation"
    ], correct: 2,
    explanation: "NCERT states that Cycas has special coralloid roots which contain N₂-fixing cyanobacteria such as Anabaena and Nostoc. This nitrogen fixation provides the plant with usable nitrogen. Rhizobium is found in legumes (dicots), not gymnosperms."
  },
  {
    id: 308,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> In gymnosperms, the male and female gametophytes are dependent on the sporophyte.<br><br><b>Reason (R):</b> Gymnosperms show a drastic reduction of the gametophyte generation compared to pteridophytes.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "In gymnosperms, the gametophyte is highly reduced and entirely enclosed within and dependent on the sporophyte tissues (A). This represents a significant reduction compared to pteridophytes where both gametophyte and sporophyte are independent (R). R correctly explains A as part of the evolutionary trend."
  },
  {
    id: 309,
    topic: "Gymnosperms",
    q: "The microsporophylls and megasporophylls in gymnosperms are arranged to form:",
    options: [
      "Thalli",
      "Flowers",
      "Fruits",
      "Strobili (cones)"
    ], correct: 3,
    explanation: "NCERT states: 'The microsporophylls and the megasporophylls are arranged spirally or in a whorled fashion on an axis to form lax or compact strobili or cones.' Strobili/cones are equivalent to the flower in gymnosperms — but they are NOT true flowers."
  },

  // ===== COMPREHENSIVE CROSS-KINGDOM SUMMARY MCQs (Q310–Q316) =====
  {
    id: 310,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following correctly shows the <b>increasing</b> order of complexity and evolutionary advancement among plant groups?",
    options: [
      "Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms",
      "Bryophytes → Algae → Gymnosperms → Pteridophytes → Angiosperms",
      "Angiosperms → Gymnosperms → Pteridophytes → Bryophytes → Algae",
      "Algae → Pteridophytes → Bryophytes → Gymnosperms → Angiosperms"
    ],
    correct: 0,
    explanation: "The correct ascending order of evolutionary complexity is: Algae (simplest, no true organs) → Bryophytes (no vascular tissue) → Pteridophytes (vascular tissue, no seeds) → Gymnosperms (seeds, naked) → Angiosperms (seeds enclosed in fruit, most complex). Option A is correct."
  },
  {
    id: 311,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following:<br>(i) Algae — no alternation of generations<br>(ii) Bryophytes — gametophyte dominant<br>(iii) Pteridophytes — sporophyte dominant<br>(iv) Gymnosperms — gametophyte dominant<br><br>How many are correct?",
    options: [
      "One",
      "Four",
      "Three",
      "Two"
    ], correct: 3,
    explanation: "(i) INCORRECT — algae do show alternation of generations (e.g., Ectocarpus has isomorphic AoG). (ii) CORRECT — in bryophytes, the gametophyte is the dominant, independent generation. (iii) CORRECT — in pteridophytes, the sporophyte (fern plant) is dominant and independent. (iv) INCORRECT — in gymnosperms, the SPOROPHYTE is dominant; gametophyte is highly reduced and dependent. Two are correct."
  },
  {
    id: 312,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following groups requires water as a medium for fertilisation?<br>(i) Algae<br>(ii) Bryophytes<br>(iii) Pteridophytes<br>(iv) Gymnosperms<br>(v) Angiosperms",
    options: [
      "(i), (ii), (iii), (iv) and (v)",
      "(i), (ii), (iii) and (iv)",
      "(iv) and (v) only",
      "(i), (ii) and (iii) only"
    ], correct: 3,
    explanation: "Algae, bryophytes, and pteridophytes all require water for fertilisation — their sperms are motile (flagellated) and swim to the egg. Gymnosperms and angiosperms evolved the pollen tube mechanism, eliminating water dependence for fertilisation. This was a major evolutionary advance."
  },
  {
    id: 313,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Gymnosperms and angiosperms are better suited for terrestrial life than bryophytes and pteridophytes.<br><br><b>Reason (R):</b> Seed plants do not require water for fertilisation and produce seeds that protect the embryo.",
    options: [
      "Both A and R are true and R is the correct explanation of A",
      "Both A and R are true but R is not the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    correct: 0,
    explanation: "Both true. Seed plants (gymnosperms + angiosperms) are better adapted to land (A) because: (1) they don't need water for fertilisation (pollen tube mechanism), and (2) seeds provide a protected, nutrient-rich package for embryo development (R). These two features together explain why seed plants dominate terrestrial ecosystems."
  },
  {
    id: 314,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Select the <b>incorrect</b> comparison between gymnosperms and angiosperms:",
    options: [
      "Gymnosperms: naked seeds; Angiosperms: seeds enclosed in fruit",
      "Gymnosperms: xylem has only tracheids (mostly); Angiosperms: xylem has vessels",
      "Gymnosperms: double fertilisation; Angiosperms: single fertilisation",
      "Gymnosperms: phloem lacks companion cells; Angiosperms: phloem has companion cells"
    ],
    correct: 2,
    explanation: "Option C is INCORRECT and reversed. Double fertilisation is EXCLUSIVELY an angiosperm feature. Gymnosperms show single fertilisation — one male gamete fuses with the egg to form the zygote. Options A, B, and D are all correctly stated comparisons."
  },
  {
    id: 315,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is a <b>correct</b> match between a plant group and its unique feature?",
    options: [
      "Bryophytes — first vascular plants to colonise land",
      "Algae — multicellular sex organs with sterile jacket layer",
      "Gymnosperms — enclosed seeds within fruit",
      "Pteridophytes — first plants with vascular tissue and true roots, stem and leaves"
    ], correct: 3,
    explanation: "Pteridophytes are the first vascular plants — they have xylem and phloem, true roots, stems and leaves. Bryophytes are non-vascular ('amphibians of plant kingdom'). Gymnosperms have naked seeds (not enclosed). Multicellular sex organs with sterile jacket layer are present in bryophytes and pteridophytes, not algae."
  },
  {
    id: 316,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following matching of structural terms:<br>(i) Holdfast, Stipe, Frond — Brown algae body parts<br>(ii) Rhizoids, Stem, Leaves — Bryophyte body parts<br>(iii) Rhizome, Fronds, Sori — Pteridophyte features<br>(iv) Microsporophylls, Megasporophylls, Strobili — Gymnosperm reproductive structures<br><br>How many pairs are correctly matched?",
    options: [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    correct: 3,
    explanation: "All four are correctly matched: (i) Brown algae body = holdfast (anchorage) + stipe (stalk) + frond (leaf-like). (ii) Bryophytes have rhizoids (instead of roots), stem-like and leaf-like structures. (iii) Ferns have rhizome (underground stem), fronds (large leaves), and sori (spore clusters). (iv) Gymnosperms have microsporophylls and megasporophylls arranged into strobili/cones. All four correct."
  }
];
