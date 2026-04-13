const allQuestions = [
  {
    id: 1,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following is <b>not</b> included under Kingdom Plantae in the modern classification?",
    options: [
      "Bryophytes",
      "Cyanobacteria",
      "Pteridophytes",
      "Gymnosperms"
    ],
    correct: 1,
    explanation: "Cyanobacteria (blue-green algae) belong to Kingdom Monera and have been excluded from Plantae. Despite the name 'algae,' they are prokaryotic and not true plants."
  },
  {
    id: 2,
    topic: "Introduction – Plant Kingdom",
    q: "The Five Kingdom classification was proposed by:",
    options: [
      "Bentham and Hooker",
      "Linnaeus",
      "Whittaker",
      "Engler and Prantl"
    ],
    correct: 2,
    explanation: "R.H. Whittaker (1969) proposed the Five Kingdom classification — Monera, Protista, Fungi, Animalia and Plantae."
  },
  {
    id: 3,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following groups were earlier placed under Plantae but are now <b>excluded</b>?<br>(i) Fungi<br>(ii) Monera with cell walls<br>(iii) Protista with cell walls<br>(iv) Gymnosperms",
    options: [
      "(i), (ii) and (iii) only",
      "(i) and (iv) only",
      "(ii) and (iii) only",
      "(i), (ii), (iii) and (iv)"
    ],
    correct: 0,
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
      "Evolutionary relationships",
      "Androecium structure",
      "Phytochemistry",
      "Embryological features"
    ],
    correct: 1,
    explanation: "Linnaeus's system of classification was based on the androecium structure (stamens). It is considered an artificial system."
  },
  {
    id: 6,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Artificial systems of classification are not acceptable.<br><b>Reason (R):</b> Vegetative characters are more easily affected by environment than sexual characters.",
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
      "Whittaker",
      "George Bentham and Joseph Dalton Hooker",
      "Engler and Prantl"
    ],
    correct: 2,
    explanation: "George Bentham and Joseph Dalton Hooker gave a natural classification system for flowering plants based on natural affinities."
  },
  {
    id: 8,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following features are considered in <b>natural classification</b> but <b>not</b> in artificial classification?<br>(i) Ultrastructure<br>(ii) Anatomy<br>(iii) Embryology<br>(iv) Phytochemistry<br>(v) Habit and colour",
    options: [
      "(i), (ii), (iii) and (iv)",
      "(i), (ii), (iii), (iv) and (v)",
      "(v) only",
      "(i) and (ii) only"
    ],
    correct: 0,
    explanation: "Natural classification considers internal features like ultrastructure, anatomy, embryology and phytochemistry. Habit and colour are superficial characters used in artificial systems."
  },
  {
    id: 9,
    topic: "Introduction – Plant Kingdom",
    q: "Phylogenetic classification is based on:",
    options: [
      "Gross morphological characters",
      "Vegetative characters only",
      "Evolutionary relationships",
      "Chemical constituents of the plant"
    ],
    correct: 2,
    explanation: "Phylogenetic classification systems are based on evolutionary relationships between organisms and assume that members of the same taxa share a common ancestor."
  },
  {
    id: 10,
    topic: "Introduction – Plant Kingdom",
    q: "In phylogenetic classification, organisms belonging to the same taxa are assumed to have:",
    options: [
      "Similar habitat",
      "A common ancestor",
      "Same chromosome number",
      "Identical chemical composition"
    ],
    correct: 1,
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
      "(i), (ii) and (iii) only",
      "(i) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only"
    ],
    correct: 0,
    explanation: "In numerical taxonomy, every character is given equal importance, hundreds of characters can be considered, and computation is done by computers. Statement (iv) is wrong — no extra weightage is given to reproductive characters."
  },
  {
    id: 13,
    topic: "Introduction – Plant Kingdom",
    q: "Cytotaxonomy is based on:",
    options: [
      "Chemical constituents of the plant",
      "Chromosome number, structure and behaviour",
      "Fossil records",
      "Anatomical features only"
    ],
    correct: 1,
    explanation: "Cytotaxonomy uses cytological information such as chromosome number, structure and behaviour for classification."
  },
  {
    id: 14,
    topic: "Introduction – Plant Kingdom",
    q: "Chemotaxonomy utilises which of the following for resolving taxonomic confusions?",
    options: [
      "Cytological information",
      "Evolutionary relationships",
      "Chemical constituents of the plant",
      "Morphological features"
    ],
    correct: 2,
    explanation: "Chemotaxonomy uses chemical constituents of plants to help resolve taxonomic confusions."
  },
  {
    id: 15,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Cyanobacteria are no longer classified as algae.<br><b>Reason (R):</b> Cyanobacteria are prokaryotic organisms belonging to Kingdom Monera.",
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
      "Phylogenetic → Artificial → Natural",
      "Artificial → Natural → Phylogenetic",
      "Natural → Phylogenetic → Artificial"
    ],
    correct: 2,
    explanation: "The earliest were artificial systems (e.g., Linnaeus), followed by natural systems (e.g., Bentham & Hooker), and presently phylogenetic classification systems are accepted."
  },
  {
    id: 17,
    topic: "Introduction – Plant Kingdom",
    q: "Consider the following statements:<br>(i) Linnaeus's classification is an example of a natural system.<br>(ii) Bentham and Hooker's classification is a natural system.<br>(iii) Phylogenetic systems consider evolutionary relationships.<br>Which of the above statements is/are correct?",
    options: [
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i) only",
      "(i), (ii) and (iii)"
    ],
    correct: 1,
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
      "Algae",
      "Fungi",
      "Bryophytes",
      "Angiosperms"
    ],
    correct: 1,
    explanation: "Fungi have been excluded from Kingdom Plantae. The chapter describes Algae, Bryophytes, Pteridophytes, Gymnosperms and Angiosperms under Plantae."
  },
  {
    id: 20,
    topic: "Introduction – Plant Kingdom",
    q: "Match the following:<br>(a) Numerical Taxonomy → (i) Chemical constituents<br>(b) Cytotaxonomy → (ii) All observable characters with computer processing<br>(c) Chemotaxonomy → (iii) Chromosome number, structure, behaviour",
    options: [
      "a-(ii), b-(iii), c-(i)",
      "a-(i), b-(ii), c-(iii)",
      "a-(iii), b-(i), c-(ii)",
      "a-(ii), b-(i), c-(iii)"
    ],
    correct: 0,
    explanation: "Numerical taxonomy uses all observable characters processed by computers (ii). Cytotaxonomy is based on chromosomal information (iii). Chemotaxonomy uses chemical constituents (i)."
  },
  {
    id: 21,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Natural classification is considered superior to artificial classification.<br><b>Reason (R):</b> Natural classification considers not only external features but also internal features like anatomy, embryology and phytochemistry.",
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
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only",
      "(i) and (iii) only"
    ],
    correct: 0,
    explanation: "The earliest (artificial) systems used gross superficial morphological characters such as habit, colour, number and shape of leaves. Embryological features were used in natural systems, not artificial ones."
  },
  {
    id: 23,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following taxonomic tools becomes especially important when there is <b>no supporting fossil evidence</b>?",
    options: [
      "Only morphological classification",
      "Numerical taxonomy, cytotaxonomy and chemotaxonomy",
      "Artificial classification systems",
      "Only the Linnaeus system"
    ],
    correct: 1,
    explanation: "When fossil evidence is unavailable, alternative sources like numerical taxonomy, cytotaxonomy and chemotaxonomy help resolve classification difficulties."
  },
  {
    id: 24,
    topic: "Introduction – Plant Kingdom",
    q: "In which year was the Five Kingdom classification proposed?",
    options: [
      "1959",
      "1969",
      "1979",
      "1989"
    ],
    correct: 1,
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
      "Only Statement II",
      "Both Statement I and Statement II",
      "Neither Statement I nor Statement II"
    ],
    correct: 1,
    explanation: "Blue-green algae (cyanobacteria) are prokaryotes belonging to Monera, not true algae — so Statement I is wrong. Fungi were indeed earlier placed in Plantae but now excluded — Statement II is correct."
  },
  {
    id: 28,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following is <b>not</b> a feature used in natural classification?",
    options: [
      "Embryology",
      "Ultrastructure",
      "Phytochemistry",
      "Only habit and colour"
    ],
    correct: 3,
    explanation: "Only habit and colour are superficial features used in artificial classification. Natural classification uses embryology, ultrastructure, anatomy and phytochemistry."
  },
  {
    id: 29,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> In numerical taxonomy, each character is given equal importance.<br><b>Reason (R):</b> Numbers and codes are assigned to all characters and data are processed by computers.",
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
      "Natural classification",
      "Phylogenetic classification",
      "Classification by Linnaeus"
    ],
    correct: 2,
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
      "Algae, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms",
      "Cyanobacteria, Bryophytes, Pteridophytes, Gymnosperms, Angiosperms",
      "Algae, Bryophytes, Pteridophytes, Fungi, Angiosperms"
    ],
    correct: 1,
    explanation: "Under Kingdom Plantae, the groups described are Algae, Bryophytes, Pteridophytes, Gymnosperms and Angiosperms. Fungi and Cyanobacteria are excluded."
  },
  {
    id: 33,
    topic: "Introduction – Plant Kingdom",
    q: "Which of the following characters is most <b>unreliable</b> for classification because it is easily affected by environment?",
    options: [
      "Reproductive characters",
      "Vegetative characters",
      "Chromosomal characters",
      "Chemical constituents"
    ],
    correct: 1,
    explanation: "Vegetative characters (habit, leaf shape, colour, etc.) are more easily influenced by environmental factors, making them unreliable for classification compared to reproductive characters."
  },
  {
    id: 34,
    topic: "Introduction – Plant Kingdom",
    q: "The natural classification system for flowering plants given by Bentham and Hooker considered:<br>(i) External features<br>(ii) Internal features<br>(iii) Ultrastructure<br>(iv) Anatomy<br>(v) Embryology<br>(vi) Phytochemistry",
    options: [
      "(i) only",
      "(i) and (ii) only",
      "(i), (ii), (iii), (iv), (v) and (vi)",
      "(iii), (iv), (v) and (vi) only"
    ],
    correct: 2,
    explanation: "Natural classification systems consider not only external features but also internal features including ultrastructure, anatomy, embryology and phytochemistry — all six are considered."
  },
  {
    id: 35,
    topic: "Introduction – Plant Kingdom",
    q: "<b>Assertion (A):</b> Artificial systems of classification often separated closely related species.<br><b>Reason (R):</b> They were based on only a few superficial morphological characteristics.",
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
      "Lichen – association with fungi",
      "Algae on moist stones – association with animals"
    ],
    correct: 2,
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
      "Hypnospore",
      "Zoospore",
      "Autospore"
    ],
    correct: 2,
    explanation: "The most common asexual spores in algae are zoospores, which are flagellated (motile) and on germination give rise to new plants."
  },
  {
    id: 40,
    topic: "Algae",
    q: "In <b>Spirogyra</b>, sexual reproduction involves fusion of gametes that are:",
    options: [
      "Flagellated and similar in size",
      "Non-flagellated and similar in size",
      "Flagellated and dissimilar in size",
      "Non-motile female and motile male"
    ],
    correct: 1,
    explanation: "In Spirogyra, gametes are non-flagellated (non-motile) but similar in size. This type of isogamous reproduction involves non-motile isogametes."
  },
  {
    id: 41,
    topic: "Algae",
    q: "Which of the following correctly represents <b>anisogamous</b> reproduction?",
    options: [
      "Fusion of flagellated gametes of similar size as in Ulothrix",
      "Fusion of non-flagellated gametes of similar size as in Spirogyra",
      "Fusion of two gametes dissimilar in size as in Eudorina",
      "Fusion of a large non-motile female gamete and smaller motile male gamete as in Volvox"
    ],
    correct: 2,
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
    q: "<b>Assertion (A):</b> Algae are of paramount importance as primary producers in aquatic ecosystems.<br><b>Reason (R):</b> At least half of the total carbon dioxide fixation on earth is carried out by algae.",
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
      "Gelidium – Source of agar",
      "Chlorella – Unicellular alga used as food supplement",
      "Laminaria – Source of carrageen"
    ],
    correct: 3,
    explanation: "Carrageen is obtained from red algae, not from Laminaria (which is a brown alga). Laminaria is used as food. Algin is obtained from brown algae, and carrageen from red algae."
  },
  {
    id: 45,
    topic: "Algae",
    q: "Agar is commercially obtained from:",
    options: [
      "Sargassum and Laminaria",
      "Gelidium and Gracilaria",
      "Porphyra and Polysiphonia",
      "Chlorella and Chlamydomonas"
    ],
    correct: 1,
    explanation: "Agar is obtained from Gelidium and Gracilaria (red algae). It is used to grow microbes and in preparation of ice-creams and jellies."
  },
  {
    id: 46,
    topic: "Algae",
    q: "<b>Chlorella</b> is used as a food supplement because it is:",
    options: [
      "Rich in carbohydrates",
      "Rich in proteins",
      "Rich in lipids only",
      "Rich in minerals only"
    ],
    correct: 1,
    explanation: "Chlorella is a unicellular alga rich in proteins, used as a food supplement even by space travellers."
  },
  {
    id: 47,
    topic: "Algae",
    q: "Hydrocolloids like <b>algin</b> and <b>carrageen</b> are obtained from:",
    options: [
      "Green algae and brown algae respectively",
      "Brown algae and red algae respectively",
      "Red algae and green algae respectively",
      "Brown algae and green algae respectively"
    ],
    correct: 1,
    explanation: "Algin is obtained from brown algae and carrageen from red algae. Both are hydrocolloids (water-holding substances) used commercially."
  },
  {
    id: 48,
    topic: "Algae",
    q: "The major pigments present in Chlorophyceae are:",
    options: [
      "Chlorophyll a, c and fucoxanthin",
      "Chlorophyll a, d and r-phycoerythrin",
      "Chlorophyll a and b",
      "Chlorophyll a, b and phycoerythrin"
    ],
    correct: 2,
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
      "Inner layer of cellulose and outer layer of pectose",
      "Only cellulose",
      "Cellulose and algin"
    ],
    correct: 1,
    explanation: "Green algae have a rigid cell wall made of an inner layer of cellulose and an outer layer of pectose."
  },
  {
    id: 51,
    topic: "Algae",
    q: "Which of the following chloroplast shapes is <b>not</b> found in green algae?",
    options: [
      "Cup-shaped",
      "Spiral or ribbon-shaped",
      "Reticulate",
      "All of these are found in green algae"
    ],
    correct: 3,
    explanation: "Chloroplasts in green algae can be discoid, plate-like, reticulate, cup-shaped, spiral or ribbon-shaped. All forms mentioned are found in different species of green algae."
  },
  {
    id: 52,
    topic: "Algae",
    q: "Which of the following statements about <b>Phaeophyceae</b> is <b>incorrect</b>?",
    options: [
      "They are found primarily in marine habitats",
      "They possess chlorophyll a and c",
      "Food is stored as floridean starch",
      "Kelps may reach a height of 100 metres"
    ],
    correct: 2,
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
      "Cellulose with a gelatinous coating of algin",
      "Cellulose, pectin and polysulphate esters",
      "Pectose and cellulose"
    ],
    correct: 1,
    explanation: "Brown algae have a cellulosic wall usually covered on the outside by a gelatinous coating of algin."
  },
  {
    id: 55,
    topic: "Algae",
    q: "The plant body of brown algae is usually differentiated into:<br>(i) Holdfast<br>(ii) Stipe<br>(iii) Frond<br>Select the correct option:",
    options: [
      "(i) and (ii) only",
      "(i) and (iii) only",
      "(i), (ii) and (iii)",
      "(ii) and (iii) only"
    ],
    correct: 2,
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
    q: "<b>Assertion (A):</b> Red algae can occur at great depths in oceans.<br><b>Reason (R):</b> The red pigment r-phycoerythrin enables them to absorb blue-green wavelengths of light that penetrate deep water.",
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
      "Amylopectin and glycogen",
      "Starch and mannitol",
      "Laminarin and mannitol"
    ],
    correct: 1,
    explanation: "Floridean starch, the stored food of red algae, is very similar to amylopectin and glycogen in structure."
  },
  {
    id: 59,
    topic: "Algae",
    q: "Which of the following is a <b>unique</b> feature of Rhodophyceae regarding reproduction?",
    options: [
      "They reproduce by flagellated zoospores",
      "Both spores and gametes are non-motile",
      "Sexual reproduction is isogamous",
      "They produce biflagellate gametes"
    ],
    correct: 1,
    explanation: "Red algae reproduce asexually by non-motile spores and sexually by non-motile gametes. Flagella are completely absent in Rhodophyceae — this is a distinctive feature."
  },
  {
    id: 60,
    topic: "Algae",
    q: "Sexual reproduction in red algae is:",
    options: [
      "Isogamous",
      "Anisogamous",
      "Oogamous with complex post-fertilisation developments",
      "Both isogamous and anisogamous"
    ],
    correct: 2,
    explanation: "Sexual reproduction in Rhodophyceae is oogamous and is accompanied by complex post-fertilisation developments."
  },
  {
    id: 61,
    topic: "Algae",
    q: "Consider the following statements:<br>(i) Chlorophyceae stores food as starch<br>(ii) Phaeophyceae stores food as mannitol or laminarin<br>(iii) Rhodophyceae stores food as floridean starch<br>(iv) All three classes store food as starch<br>Which statements are correct?",
    options: [
      "(i), (ii) and (iii) only",
      "(i) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only"
    ],
    correct: 0,
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
      "a-(iii), b-(i), c-(ii)",
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(iii), c-(i)",
      "a-(iii), b-(ii), c-(i)"
    ],
    correct: 0,
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
      "Porphyra",
      "Ectocarpus",
      "Gracilaria"
    ],
    correct: 2,
    explanation: "Ectocarpus is a member of Phaeophyceae (brown algae), not Rhodophyceae. Polysiphonia, Porphyra, Gracilaria and Gelidium are red algae."
  },
  {
    id: 66,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Vegetative reproduction in all three classes of algae occurs by fragmentation.<br><b>Reason (R):</b> Fragmentation is the only method of reproduction found in algae.",
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
      "Chlorophyceae – freshwater, brackish and salt water; Phaeophyceae – primarily marine; Rhodophyceae – mostly marine in warmer areas"
    ],
    correct: 1,
    explanation: "Green algae occur in fresh, brackish and salt water. Brown algae are primarily marine. Red algae are mostly marine with greater concentrations in warmer areas."
  },
  {
    id: 68,
    topic: "Algae",
    q: "In brown algae, gametes are:",
    options: [
      "Pyriform with two equal apically attached flagella",
      "Pyriform with two laterally attached flagella",
      "Spherical and non-motile",
      "Amoeboid and non-flagellated"
    ],
    correct: 1,
    explanation: "In brown algae, gametes are pyriform (pear-shaped) and bear two laterally attached flagella."
  },
  {
    id: 69,
    topic: "Algae",
    q: "Consider the following statements about types of sexual reproduction in algae:<br>(A) Isogamous – fusion of flagellated, similar-sized gametes occurs in <b>Ulothrix</b><br>(B) Isogamous – fusion of non-flagellated, similar-sized gametes occurs in <b>Spirogyra</b><br>(C) Anisogamous – fusion of dissimilar-sized gametes occurs in <b>Eudorina</b><br>(D) Oogamous – fusion of large non-motile female and smaller motile male gamete occurs in <b>Volvox</b>",
    options: [
      "Only A and B are correct",
      "Only A, B and C are correct",
      "All A, B, C and D are correct",
      "Only C and D are correct"
    ],
    correct: 2,
    explanation: "All four statements are correct as per NCERT. Ulothrix – flagellated isogamy; Spirogyra – non-flagellated isogamy; Eudorina – anisogamy; Volvox – oogamy."
  },
  {
    id: 70,
    topic: "Algae",
    q: "Which of the following is <b>not</b> a use of agar obtained from red algae?",
    options: [
      "Growing microbes in laboratories",
      "Preparation of ice-creams",
      "Preparation of jellies",
      "Extraction of algin for commercial use"
    ],
    correct: 3,
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
      "Both Chlorophyceae and Phaeophyceae",
      "Only Phaeophyceae"
    ],
    correct: 2,
    explanation: "Both Chlorophyceae (green algae) and Phaeophyceae (brown algae) can exhibit isogamous, anisogamous or oogamous sexual reproduction. Red algae show only oogamous reproduction."
  },
  {
    id: 73,
    topic: "Algae",
    q: "Which of the following is a correct statement about <b>Phaeophyceae</b>?",
    options: [
      "They are predominantly freshwater forms",
      "Food is stored as floridean starch",
      "The simplest form is Ectocarpus and the largest forms are kelps reaching up to 100 metres",
      "Flagella are absent in all reproductive cells"
    ],
    correct: 2,
    explanation: "Brown algae range from simple filamentous Ectocarpus to profusely branched kelps reaching up to 100 metres. They are primarily marine, store food as laminarin/mannitol, and have flagellated zoospores and gametes."
  },
  {
    id: 74,
    topic: "Algae",
    q: "Select the <b>incorrect</b> match:",
    options: [
      "Chlamydomonas – Chlorophyceae",
      "Dictyota – Phaeophyceae",
      "Gelidium – Phaeophyceae",
      "Polysiphonia – Rhodophyceae"
    ],
    correct: 2,
    explanation: "Gelidium is a member of Rhodophyceae (red algae), not Phaeophyceae. It is a source of agar."
  },
  {
    id: 75,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Brown algae are primarily marine.<br><b>Reason (R):</b> Brown algae possess chlorophyll a, c, carotenoids and the xanthophyll pigment fucoxanthin.",
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
      "Chlorella",
      "Gelidium",
      "Polysiphonia"
    ],
    correct: 1,
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
      "In water or within the oogonium",
      "Only on land surface"
    ],
    correct: 2,
    explanation: "In brown algae, union of gametes may take place in water or within the oogonium in oogamous species."
  },
  {
    id: 82,
    topic: "Algae",
    q: "Which of the following is <b>not</b> a member of Chlorophyceae?",
    options: [
      "Chlamydomonas",
      "Chara",
      "Fucus",
      "Spirogyra"
    ],
    correct: 2,
    explanation: "Fucus is a member of Phaeophyceae (brown algae). Chlamydomonas, Volvox, Ulothrix, Spirogyra and Chara are members of Chlorophyceae."
  },
  {
    id: 83,
    topic: "Algae",
    q: "<b>Assertion (A):</b> Algae increase the level of dissolved oxygen in their immediate environment.<br><b>Reason (R):</b> Algae are photosynthetic organisms that release oxygen as a by-product.",
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
      "Haploid gametophyte",
      "Diploid gametophyte",
      "Haploid sporophyte"
    ],
    correct: 1,
    explanation: "The main plant body of bryophytes is haploid. It produces gametes, hence called a gametophyte. The sporophyte is dependent on the gametophyte."
  },
  {
    id: 86,
    topic: "Bryophytes",
    q: "Which of the following statements about bryophytes is <b>incorrect</b>?",
    options: [
      "They possess true roots, stems and leaves",
      "They are attached to substratum by rhizoids",
      "The plant body is thallus-like",
      "They play an important role in plant succession on bare rocks"
    ],
    correct: 0,
    explanation: "Bryophytes lack true roots, stems or leaves. They may possess root-like, leaf-like or stem-like structures. All other statements are correct."
  },
  {
    id: 87,
    topic: "Bryophytes",
    q: "The rhizoids in bryophytes can be:",
    options: [
      "Only unicellular",
      "Only multicellular",
      "Unicellular or multicellular",
      "Always absent"
    ],
    correct: 2,
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
      "Flask-shaped archegonium producing a single egg",
      "Flask-shaped oogonium producing multiple eggs",
      "Spherical archegonium producing a single egg"
    ],
    correct: 1,
    explanation: "The female sex organ is the archegonium, which is flask-shaped and produces a single egg."
  },
  {
    id: 90,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> The sex organs in bryophytes are multicellular.<br><b>Reason (R):</b> In algae, sex organs are generally unicellular.",
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
      "Does not undergo reduction division immediately but produces a multicellular sporophyte",
      "Directly germinates into a gametophyte",
      "Remains dormant permanently"
    ],
    correct: 1,
    explanation: "Zygotes do not undergo reduction division immediately. They produce a multicellular body called the sporophyte. Meiosis occurs later in the sporophyte to produce haploid spores."
  },
  {
    id: 92,
    topic: "Bryophytes",
    q: "The sporophyte in bryophytes is:",
    options: [
      "Free-living and autotrophic",
      "Free-living but heterotrophic",
      "Not free-living, attached to the gametophyte and derives nourishment from it",
      "Partially free-living and partially parasitic"
    ],
    correct: 2,
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
      "Spore → Gametophyte → Gametes → Zygote → Sporophyte → Spores",
      "Zygote → Gametophyte → Spores → Sporophyte → Gametes",
      "Gametes → Sporophyte → Spores → Gametophyte → Zygote"
    ],
    correct: 1,
    explanation: "Spores germinate to form the gametophyte, which produces gametes. Gamete fusion forms the zygote, which develops into the sporophyte. The sporophyte produces spores by meiosis."
  },
  {
    id: 95,
    topic: "Bryophytes",
    q: "Species of <b>Sphagnum</b> provide peat which is used as:<br>(i) Fuel<br>(ii) Packing material for trans-shipment of living material<br>(iii) Food for humans<br>Select the correct option:",
    options: [
      "(i) only",
      "(i) and (ii) only",
      "(i), (ii) and (iii)",
      "(iii) only"
    ],
    correct: 1,
    explanation: "Sphagnum provides peat used as fuel and as packing material for trans-shipment of living material (due to its water-holding capacity). It is not used as human food."
  },
  {
    id: 96,
    topic: "Bryophytes",
    q: "Mosses along with lichens are the first organisms to colonise rocks. This makes them important because:",
    options: [
      "They produce oxygen for other organisms",
      "They decompose rocks making the substrate suitable for growth of higher plants",
      "They prevent rainfall",
      "They attract animal pollinators"
    ],
    correct: 1,
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
      "Thalloid, dorsiventral and closely appressed to the substrate",
      "Leafy, radially symmetrical and erect",
      "Thalloid, dorsiventral and free-floating"
    ],
    correct: 1,
    explanation: "The plant body of liverworts (e.g., Marchantia) is thalloid, dorsiventral and closely appressed (pressed close) to the substrate."
  },
  {
    id: 99,
    topic: "Bryophytes",
    q: "<b>Gemmae</b> in liverworts are:",
    options: [
      "Green, multicellular, sexual buds developing in archegonia",
      "Green, multicellular, asexual buds developing in gemma cups on thalli",
      "Brown, unicellular, asexual spores in capsules",
      "Colourless, multicellular, sexual structures in antheridia"
    ],
    correct: 1,
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
      "Two stages — protonema stage and leafy stage",
      "Three stages — protonema, leafy and capsule stages"
    ],
    correct: 2,
    explanation: "The moss gametophyte consists of two stages: (1) the protonema stage (first) that develops from spore, and (2) the leafy stage that develops from secondary protonema as a lateral bud."
  },
  {
    id: 104,
    topic: "Bryophytes",
    q: "The protonema stage of mosses is:",
    options: [
      "An upright, leafy structure",
      "A creeping, green, branched and frequently filamentous stage",
      "A capsule-bearing sporophytic structure",
      "A non-green, underground structure"
    ],
    correct: 1,
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
      "Multicellular and branched",
      "Always absent",
      "Unicellular and branched"
    ],
    correct: 1,
    explanation: "In the leafy stage of mosses, the plant is attached to the soil through multicellular and branched rhizoids."
  },
  {
    id: 108,
    topic: "Bryophytes",
    q: "In mosses, sex organs are produced at:",
    options: [
      "The base of the leafy shoots",
      "The protonema stage",
      "The apex of the leafy shoots",
      "The capsule of the sporophyte"
    ],
    correct: 2,
    explanation: "In mosses, antheridia and archegonia are produced at the apex of the leafy shoots."
  },
  {
    id: 109,
    topic: "Bryophytes",
    q: "Vegetative reproduction in mosses occurs by:",
    options: [
      "Fragmentation and budding in the secondary protonema",
      "Only by gemma cups",
      "Only by zoospores",
      "Only by fragmentation of the sporophyte"
    ],
    correct: 0,
    explanation: "Vegetative reproduction in mosses takes place by fragmentation and by budding in the secondary protonema."
  },
  {
    id: 110,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> The sporophyte of mosses is more elaborate than that of liverworts.<br><b>Reason (R):</b> In both mosses and liverworts, the sporophyte consists of foot, seta and capsule.",
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
      "(i), (iii) and (iv) only",
      "(i) and (iii) only",
      "(i), (ii), (iii) and (iv)"
    ],
    correct: 1,
    explanation: "Statement (ii) is wrong — bryophytes lack true roots, stems and leaves. Statements (i), (iii) and (iv) are correct. The sporophyte is attached to and derives nourishment from the gametophyte (parasitic on it)."
  },
  {
    id: 113,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> Bryophytes usually occur in damp, humid and shaded localities.<br><b>Reason (R):</b> They require water for the transfer of male gametes (antherozoids) to the archegonium during sexual reproduction.",
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
      "Spiral arrangement on stem-like structures",
      "Two rows on stem-like structures",
      "Whorled arrangement on stem-like structures",
      "Random arrangement on thallus"
    ],
    correct: 1,
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
      "Hold water",
      "Produce antibiotics",
      "Produce edible fruits"
    ],
    correct: 1,
    explanation: "Sphagnum (a moss) provides peat used as fuel and packing material for trans-shipment of living material because of its excellent capacity to hold water."
  },
  {
    id: 117,
    topic: "Bryophytes",
    q: "Which of the following pairs act as <b>pioneer species</b> in ecological succession on bare rocks?",
    options: [
      "Ferns and gymnosperms",
      "Mosses and lichens",
      "Algae and fungi",
      "Angiosperms and bryophytes"
    ],
    correct: 1,
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
      "Meiosis",
      "Amitosis",
      "Binary fission"
    ],
    correct: 1,
    explanation: "Spores are formed after meiosis (reduction division) within the capsule of the sporophyte. These haploid spores germinate to form the gametophyte."
  },
  {
    id: 121,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> The plant body of bryophytes is more differentiated than that of algae.<br><b>Reason (R):</b> Bryophytes possess true vascular tissues for conduction.",
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
      "a-(ii), b-(i), c-(iii), d-(iv)",
      "a-(i), b-(ii), c-(iv), d-(iii)",
      "a-(ii), b-(i), c-(iv), d-(iii)",
      "a-(iii), b-(iv), c-(i), d-(ii)"
    ],
    correct: 0,
    explanation: "Antheridium (ii) is the male sex organ producing biflagellate antherozoids. Archegonium (i) is flask-shaped producing a single egg. Gemma (iii) is a green, multicellular, asexual bud. Protonema (iv) is creeping, green, branched and filamentous."
  },
  {
    id: 123,
    topic: "Bryophytes",
    q: "The spores germinated from the capsule of a moss sporophyte give rise to:",
    options: [
      "Another sporophyte directly",
      "A free-living gametophyte (protonema)",
      "Gemmae",
      "Antherozoids"
    ],
    correct: 1,
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
      "Sphagnum",
      "Marchantia"
    ],
    correct: 3,
    explanation: "Marchantia is a liverwort with a thalloid, dorsiventral body. Funaria, Polytrichum and Sphagnum are mosses."
  },
  {
    id: 126,
    topic: "Bryophytes",
    q: "Consider the following about the <b>leafy stage of mosses</b>:<br>(i) Upright, slender axes<br>(ii) Spirally arranged leaves<br>(iii) Attached by multicellular, branched rhizoids<br>(iv) Bears the sex organs<br>Which of the above is/are correct?",
    options: [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only"
    ],
    correct: 2,
    explanation: "All four statements are correct. The leafy stage has upright slender axes, spirally arranged leaves, is attached by multicellular branched rhizoids, and bears the sex organs (antheridia and archegonia) at the apex."
  },
  {
    id: 127,
    topic: "Bryophytes",
    q: "In bryophytes, the <b>dominant generation</b> is:",
    options: [
      "Sporophytic and diploid",
      "Gametophytic and diploid",
      "Gametophytic and haploid",
      "Sporophytic and haploid"
    ],
    correct: 2,
    explanation: "In bryophytes, the dominant (main) plant body is gametophyte, which is haploid. The sporophyte is dependent on the gametophyte."
  },
  {
    id: 128,
    topic: "Bryophytes",
    q: "<b>Assertion (A):</b> Sphagnum peat is used as packing material for trans-shipment of living material.<br><b>Reason (R):</b> Sphagnum has a remarkable capacity to hold water, keeping the living material moist during transport.",
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
      "Seta",
      "Capsule",
      "Protonema"
    ],
    correct: 3,
    explanation: "Protonema is the first stage of the gametophyte in mosses, not a part of the sporophyte. The sporophyte consists of foot, seta and capsule."
  },
  {
    id: 130,
    topic: "Bryophytes",
    q: "Some mosses provide food for:",
    options: [
      "Herbaceous mammals, birds and other animals",
      "Only insects",
      "Only aquatic organisms",
      "Only fungi"
    ],
    correct: 0,
    explanation: "As per NCERT, some mosses provide food for herbaceous mammals, birds and other animals."
  },
  {
    id: 131,
    topic: "Bryophytes",
    q: "Which is the <b>correct sequence</b> of stages in the life cycle of a moss?",
    options: [
      "Spore → Leafy stage → Protonema → Gametes → Zygote → Sporophyte",
      "Spore → Protonema → Leafy stage → Gametes → Zygote → Sporophyte",
      "Spore → Sporophyte → Protonema → Leafy stage → Gametes → Zygote",
      "Gametes → Zygote → Spore → Protonema → Leafy stage → Sporophyte"
    ],
    correct: 1,
    explanation: "The correct sequence is: Spore germinates into protonema (1st stage) → leafy stage develops from protonema (2nd stage) → sex organs produce gametes → fertilisation forms zygote → zygote develops into sporophyte → spores formed by meiosis."
  },
  {
    id: 132,
    topic: "Pteridophytes",
    q: "Pteridophytes are evolutionarily significant because they are the:",
    options: [
      "First plants to show alternation of generations",
      "First terrestrial plants to possess vascular tissues",
      "First plants to produce seeds",
      "First plants to show heterospory"
    ],
    correct: 1,
    explanation: "Pteridophytes are the first terrestrial plants to possess vascular tissues — xylem and phloem. This is a key evolutionary milestone as per NCERT."
  },
  {
    id: 133,
    topic: "Pteridophytes",
    q: "Which of the following is <b>not</b> a use of pteridophytes?",
    options: [
      "Medicinal purposes",
      "Soil-binders",
      "Grown as ornamentals",
      "Primary source of timber"
    ],
    correct: 3,
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
    q: "<b>Assertion (A):</b> The dominant phase in bryophytes is gametophytic while in pteridophytes it is sporophytic.<br><b>Reason (R):</b> Pteridophytes possess vascular tissues while bryophytes do not.",
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
      "True root, stem and leaves",
      "Thallus, rhizoids and sporangium"
    ],
    correct: 2,
    explanation: "The pteridophyte sporophyte is differentiated into true root, stem and leaves with well-differentiated vascular tissues. Foot, seta and capsule is the bryophyte sporophyte."
  },
  {
    id: 137,
    topic: "Pteridophytes",
    q: "Small leaves in pteridophytes are called <b>microphylls</b>, as found in:",
    options: [
      "Ferns",
      "Selaginella",
      "Dryopteris",
      "Adiantum"
    ],
    correct: 1,
    explanation: "Microphylls (small leaves) are found in Selaginella. Ferns (Dryopteris, Pteris, Adiantum) possess macrophylls (large leaves)."
  },
  {
    id: 138,
    topic: "Pteridophytes",
    q: "Macrophylls (large leaves) in pteridophytes are characteristic of:",
    options: [
      "Selaginella",
      "Equisetum",
      "Lycopodium",
      "Ferns"
    ],
    correct: 3,
    explanation: "Macrophylls are large leaves characteristic of ferns (e.g., Dryopteris, Pteris, Adiantum). Selaginella has microphylls (small leaves)."
  },
  {
    id: 139,
    topic: "Pteridophytes",
    q: "Sporangia in pteridophytes are borne on leaf-like appendages called:",
    options: [
      "Strobili",
      "Sporophylls",
      "Prothallus",
      "Rhizophores"
    ],
    correct: 1,
    explanation: "Sporangia are subtended by leaf-like appendages called sporophylls. In some cases, sporophylls may form compact structures called strobili or cones."
  },
  {
    id: 140,
    topic: "Pteridophytes",
    q: "Strobili or cones are formed by compact arrangement of sporophylls in:",
    options: [
      "Selaginella and Equisetum",
      "Dryopteris and Pteris",
      "Adiantum and Psilotum",
      "Lycopodium and Adiantum"
    ],
    correct: 0,
    explanation: "Sporophylls may form distinct compact structures called strobili or cones in Selaginella and Equisetum as per NCERT."
  },
  {
    id: 141,
    topic: "Pteridophytes",
    q: "Spores in pteridophytes are produced by:",
    options: [
      "Mitosis in spore mother cells",
      "Meiosis in spore mother cells",
      "Budding of sporangia",
      "Fragmentation of sporophylls"
    ],
    correct: 1,
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
    q: "<b>Assertion (A):</b> The spread of living pteridophytes is limited to narrow geographical regions.<br><b>Reason (R):</b> The gametophytes require cool, damp, shady places and water is needed for fertilisation.",
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
      "Transfer of antherozoids to the archegonium",
      "Growth of the sporophyte"
    ],
    correct: 2,
    explanation: "Water is required for transfer of antherozoids (male gametes) released from antheridia to the mouth of archegonium for fertilisation — similar to bryophytes."
  },
  {
    id: 146,
    topic: "Pteridophytes",
    q: "In majority of pteridophytes, all spores are of similar kind. Such plants are called:",
    options: [
      "Heterosporous",
      "Homosporous",
      "Monosporous",
      "Polysporous"
    ],
    correct: 1,
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
      "Female gametophytes",
      "Sporophytes directly",
      "Strobili"
    ],
    correct: 1,
    explanation: "Megaspores (large spores) germinate to give rise to female gametophytes, while microspores (small spores) give rise to male gametophytes."
  },
  {
    id: 149,
    topic: "Pteridophytes",
    q: "The development of zygotes into young embryos within the female gametophytes of heterosporous pteridophytes is considered a precursor to:",
    options: [
      "Alternation of generations",
      "Vegetative reproduction",
      "Seed habit",
      "Spore formation"
    ],
    correct: 2,
    explanation: "In heterosporous pteridophytes, the female gametophyte is retained on the parent sporophyte and zygote develops into embryo within it. This event is a precursor to the seed habit — an important step in evolution."
  },
  {
    id: 150,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> Heterospory in pteridophytes is considered an important step in evolution.<br><b>Reason (R):</b> In heterosporous pteridophytes, the female gametophyte is retained on the parent sporophyte and the zygote develops into an embryo within it, which is a precursor to seed habit.",
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
      "Three",
      "Four",
      "Five"
    ],
    correct: 2,
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
      "Dryopteris, Pteris, Adiantum",
      "Psilotum, Equisetum",
      "Salvinia, Selaginella"
    ],
    correct: 1,
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
      "Inconspicuous, small but free-living and mostly photosynthetic",
      "Non-photosynthetic and parasitic on sporophyte",
      "Large, free-living and non-photosynthetic"
    ],
    correct: 1,
    explanation: "The prothallus is inconspicuous, small, multicellular, free-living and mostly photosynthetic. Unlike bryophytes where gametophyte is dominant, in pteridophytes it is reduced."
  },
  {
    id: 158,
    topic: "Pteridophytes",
    q: "In pteridophytes, the sex organs on the gametophyte are:",
    options: [
      "Antheridia only",
      "Archegonia only",
      "Both antheridia and archegonia",
      "Neither antheridia nor archegonia"
    ],
    correct: 2,
    explanation: "The gametophytes of pteridophytes bear both male sex organs (antheridia) and female sex organs (archegonia)."
  },
  {
    id: 159,
    topic: "Pteridophytes",
    q: "Select the <b>incorrect</b> statement about pteridophytes:",
    options: [
      "The main plant body is a sporophyte",
      "They are the first terrestrial plants with vascular tissues",
      "The gametophyte is dependent on the sporophyte for nutrition",
      "The sporangia produce spores by meiosis"
    ],
    correct: 2,
    explanation: "The prothallus (gametophyte) of pteridophytes is free-living and mostly photosynthetic — NOT dependent on the sporophyte. In bryophytes, the sporophyte depends on the gametophyte, but in pteridophytes, the gametophyte is independent."
  },
  {
    id: 160,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> In heterosporous pteridophytes, the female gametophyte is retained on the parent sporophyte for variable periods.<br><b>Reason (R):</b> This facilitates the development of zygotes into young embryos within the female gametophyte.",
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
      "Marchantia",
      "Equisetum",
      "Adiantum"
    ],
    correct: 1,
    explanation: "Marchantia is a liverwort (bryophyte), not a pteridophyte. Selaginella, Equisetum and Adiantum are all pteridophytes."
  },
  {
    id: 163,
    topic: "Pteridophytes",
    q: "In heterosporous pteridophytes, microspores germinate to give rise to:",
    options: [
      "Female gametophytes",
      "Sporophytes",
      "Male gametophytes",
      "Prothallus with both sexes"
    ],
    correct: 2,
    explanation: "Microspores (small spores) germinate to give rise to male gametophytes, while megaspores (large spores) give rise to female gametophytes."
  },
  {
    id: 164,
    topic: "Pteridophytes",
    q: "Consider the following statements about <b>Selaginella</b>:<br>(i) It has microphylls<br>(ii) It forms strobili<br>(iii) It is heterosporous<br>(iv) It belongs to class Lycopsida",
    options: [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iii) and (iv) only"
    ],
    correct: 2,
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
    q: "<b>Assertion (A):</b> Pteridophytes include horsetails and ferns.<br><b>Reason (R):</b> Equisetum is known as horsetail and Dryopteris, Pteris, Adiantum are ferns.",
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
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only",
      "(i) and (iv) only"
    ],
    correct: 0,
    explanation: "Vascular tissues, dominant sporophyte, and true roots/stems/leaves differentiate pteridophytes from bryophytes. Archegonia are present in BOTH groups, so (iv) is not a differentiating character."
  },
  {
    id: 169,
    topic: "Pteridophytes",
    q: "Which of the following represents the <b>correct</b> evolutionary sequence?",
    options: [
      "Pteridophytes → Bryophytes → Gymnosperms → Angiosperms",
      "Bryophytes → Pteridophytes → Gymnosperms → Angiosperms",
      "Gymnosperms → Bryophytes → Pteridophytes → Angiosperms",
      "Angiosperms → Gymnosperms → Pteridophytes → Bryophytes"
    ],
    correct: 1,
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
      "Spores are produced by meiosis and germinate to form gametophytes (prothallus)",
      "Spores are produced by mitosis and germinate to form gametophytes",
      "Spores are produced by meiosis and develop directly into sporophytes"
    ],
    correct: 1,
    explanation: "Spores are produced by meiosis in spore mother cells within sporangia. These haploid spores germinate to give rise to the gametophyte (prothallus)."
  },
  {
    id: 172,
    topic: "Pteridophytes",
    q: "<b>Lycopodium</b> belongs to the class:",
    options: [
      "Psilopsida",
      "Lycopsida",
      "Sphenopsida",
      "Pteropsida"
    ],
    correct: 1,
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
      "Only Statement I",
      "Only Statement II",
      "Both Statements I and II",
      "Neither Statement I nor Statement II"
    ],
    correct: 0,
    explanation: "Statement I is correct — homosporous plants produce spores of similar kind. Statement II is wrong — Selaginella and Salvinia are heterosporous, producing megaspores and microspores."
  },
  {
    id: 175,
    topic: "Pteridophytes",
    q: "The female gametophyte in heterosporous pteridophytes is retained on the parent sporophyte. This is significant because:",
    options: [
      "It prevents fertilisation",
      "It facilitates embryo development within female gametophyte — a precursor to seed habit",
      "It leads to asexual reproduction",
      "It makes the gametophyte independent"
    ],
    correct: 1,
    explanation: "Retention of the female gametophyte on the parent sporophyte and development of the zygote into embryo within it is a precursor to the seed habit, considered an important evolutionary step."
  },
  {
    id: 176,
    topic: "Pteridophytes",
    q: "<b>Assertion (A):</b> Pteridophytes require water for sexual reproduction like bryophytes.<br><b>Reason (R):</b> Antherozoids of pteridophytes are motile and need water to swim to the archegonium.",
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
      "Bryophyte sporophyte is dependent on gametophyte; pteridophyte sporophyte is the dominant independent phase",
      "Both have free-living sporophytes",
      "Both have dependent sporophytes"
    ],
    correct: 1,
    explanation: "In bryophytes, the sporophyte is dependent on the gametophyte. In pteridophytes, the sporophyte is the dominant, well-differentiated independent phase with true roots, stems, leaves and vascular tissues."
  },
  {
    id: 178,
    topic: "Pteridophytes",
    q: "Which of the following is <b>incorrectly</b> matched?",
    options: [
      "Psilopsida — Psilotum",
      "Lycopsida — Selaginella",
      "Sphenopsida — Dryopteris",
      "Pteropsida — Adiantum"
    ],
    correct: 2,
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
      "(iv) → (i) → (ii) → (iii)",
      "(i) → (iv) → (iii) → (ii)",
      "(iii) → (ii) → (i) → (iv)",
      "(ii) → (iii) → (iv) → (i)"
    ],
    correct: 0,
    explanation: "Evolutionary sequence: terrestrial adaptation with rhizoids (bryophytes) → vascular tissues (pteridophytes) → heterospory (advanced pteridophytes) → seed habit (gymnosperms)."
  },
  {
    id: 181,
    topic: "Pteridophytes",
    q: "Some pteridophytes may flourish well in:",
    options: [
      "Only aquatic conditions",
      "Sandy-soil conditions",
      "Only extremely cold conditions",
      "Only deep ocean habitats"
    ],
    correct: 1,
    explanation: "While pteridophytes are generally found in cool, damp, shady places, NCERT specifically mentions that some may flourish well in sandy-soil conditions."
  },
  {
    id: 182,
    topic: "Gymnosperms",
    q: "The term 'gymnosperm' literally means:",
    options: [
      "Covered seeds",
      "Naked seeds",
      "Hidden seeds",
      "Winged seeds"
    ],
    correct: 1,
    explanation: "Gymnosperm is derived from Greek words 'gymnos' meaning naked and 'sperma' meaning seeds. The seeds are not enclosed within an ovary wall and remain exposed."
  },
  {
    id: 183,
    topic: "Gymnosperms",
    q: "In gymnosperms, the ovules are:",
    options: [
      "Enclosed within the ovary wall before and after fertilisation",
      "Not enclosed by any ovary wall and remain exposed before and after fertilisation",
      "Enclosed before fertilisation but exposed after fertilisation",
      "Exposed before fertilisation but enclosed after fertilisation"
    ],
    correct: 1,
    explanation: "In gymnosperms, the ovules are not enclosed by any ovary wall and remain exposed both before and after fertilisation. Hence, the seeds are naked."
  },
  {
    id: 184,
    topic: "Gymnosperms",
    q: "One of the tallest tree species belongs to gymnosperms. It is:",
    options: [
      "Pinus",
      "Cycas",
      "Sequoia",
      "Cedrus"
    ],
    correct: 2,
    explanation: "The giant redwood tree Sequoia is one of the tallest tree species and belongs to gymnosperms."
  },
  {
    id: 185,
    topic: "Gymnosperms",
    q: "Coralloid roots are found in <b>Cycas</b> and are associated with:",
    options: [
      "Mycorrhizal fungi",
      "N₂-fixing cyanobacteria",
      "Parasitic angiosperms",
      "Rhizobium bacteria"
    ],
    correct: 1,
    explanation: "In Cycas, small specialised roots called coralloid roots are associated with N₂-fixing cyanobacteria. Mycorrhizal association is found in Pinus, not Cycas."
  },
  {
    id: 186,
    topic: "Gymnosperms",
    q: "Mycorrhiza (fungal association with roots) is found in:",
    options: [
      "Cycas",
      "Pinus",
      "Sequoia",
      "Cedrus"
    ],
    correct: 1,
    explanation: "Roots in Pinus have fungal association in the form of mycorrhiza. Cycas has coralloid roots with N₂-fixing cyanobacteria."
  },
  {
    id: 187,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Cycas has coralloid roots.<br><b>Reason (R):</b> Coralloid roots of Cycas are associated with N₂-fixing cyanobacteria.",
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
      "(i), (ii) and (iii)",
      "(i) only"
    ],
    correct: 2,
    explanation: "All three adaptations are present — needle-like leaves (reduced surface area), thick cuticle and sunken stomata — all help reduce water loss in gymnosperms."
  },
  {
    id: 192,
    topic: "Gymnosperms",
    q: "Gymnosperms are:",
    options: [
      "Homosporous",
      "Heterosporous",
      "Non-sporous",
      "Sometimes homosporous, sometimes heterosporous"
    ],
    correct: 1,
    explanation: "Gymnosperms are heterosporous — they produce haploid microspores and megaspores."
  },
  {
    id: 193,
    topic: "Gymnosperms",
    q: "The sporophylls in gymnosperms are arranged spirally along an axis to form:",
    options: [
      "Sori",
      "Gemma cups",
      "Strobili or cones",
      "Prothallus"
    ],
    correct: 2,
    explanation: "Sporophylls are arranged spirally along an axis to form lax or compact strobili or cones in gymnosperms."
  },
  {
    id: 194,
    topic: "Gymnosperms",
    q: "The microsporangiate strobili are also called:",
    options: [
      "Female cones",
      "Male strobili",
      "Megasporangiate cones",
      "Archegonial cones"
    ],
    correct: 1,
    explanation: "Strobili bearing microsporophylls and microsporangia are called microsporangiate or male strobili."
  },
  {
    id: 195,
    topic: "Gymnosperms",
    q: "The reduced male gametophyte in gymnosperms is called:",
    options: [
      "Prothallus",
      "Protonema",
      "Pollen grain",
      "Archegonium"
    ],
    correct: 2,
    explanation: "The microspores develop into a highly reduced male gametophytic generation confined to a limited number of cells — called a pollen grain."
  },
  {
    id: 196,
    topic: "Gymnosperms",
    q: "Development of pollen grains in gymnosperms takes place within the:",
    options: [
      "Megasporangia",
      "Microsporangia",
      "Archegonia",
      "Nucellus"
    ],
    correct: 1,
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
      "On the same tree",
      "Only male cones are present",
      "Only female cones are present"
    ],
    correct: 1,
    explanation: "In Pinus, the male or female cones or strobili may be borne on the same tree (monoecious condition)."
  },
  {
    id: 199,
    topic: "Gymnosperms",
    q: "In <b>Cycas</b>, the male cones and megasporophylls are borne on:",
    options: [
      "The same tree",
      "Different trees",
      "Same cone",
      "Underground structures"
    ],
    correct: 1,
    explanation: "In Cycas, male cones and megasporophylls are borne on different trees (dioecious condition). This contrasts with Pinus where both are on the same tree."
  },
  {
    id: 200,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Pinus is monoecious while Cycas is dioecious.<br><b>Reason (R):</b> In Pinus, male and female cones are on the same tree, while in Cycas they are on different trees.",
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
      "Integument",
      "Nucellus",
      "Archegonium",
      "Microsporangium"
    ],
    correct: 1,
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
      "Antheridia only",
      "Two or more archegonia",
      "Gemma cups",
      "Zoospores"
    ],
    correct: 1,
    explanation: "The female gametophyte bears two or more archegonia or female sex organs. It is retained within the megasporangium."
  },
  {
    id: 206,
    topic: "Gymnosperms",
    q: "Unlike bryophytes and pteridophytes, in gymnosperms the male and female gametophytes:",
    options: [
      "Are large and conspicuous",
      "Have independent free-living existence",
      "Do not have independent free-living existence and remain within sporangia on sporophytes",
      "Are always found in aquatic habitats"
    ],
    correct: 2,
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
      "Grows towards archegonia in the ovules and discharges contents near the mouth of archegonia",
      "Directly releases spores into the megasporangium",
      "Develops into a prothallus"
    ],
    correct: 1,
    explanation: "The pollen tube carrying male gametes grows towards archegonia in the ovules and discharges their contents near the mouth of the archegonia. There is no stigma in gymnosperms."
  },
  {
    id: 209,
    topic: "Gymnosperms",
    q: "Following fertilisation in gymnosperms:",
    options: [
      "Zygote develops into an embryo and ovules develop into naked seeds",
      "Zygote develops into a gametophyte",
      "Ovules develop into fruits",
      "Seeds are enclosed within an ovary wall"
    ],
    correct: 0,
    explanation: "After fertilisation, the zygote develops into an embryo and ovules into seeds. These seeds are not covered (naked) — the defining feature of gymnosperms."
  },
  {
    id: 210,
    topic: "Gymnosperms",
    q: "Consider the following statements:<br>(i) Gymnosperms include medium-sized trees, tall trees and shrubs<br>(ii) The roots are generally tap roots<br>(iii) Leaves may be simple or compound<br>(iv) All gymnosperms are herbaceous",
    options: [
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iv) only",
      "(i) and (ii) only"
    ],
    correct: 0,
    explanation: "Statements (i), (ii) and (iii) are correct. Statement (iv) is wrong — gymnosperms include medium-sized trees or tall trees and shrubs, not herbs."
  },
  {
    id: 211,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> Gymnosperms do not require water for fertilisation.<br><b>Reason (R):</b> In gymnosperms, pollen tubes carry male gametes to the archegonia.",
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
      "Ovules are enclosed within an ovary wall",
      "Seeds are naked",
      "Sporophylls are arranged to form cones"
    ],
    correct: 1,
    explanation: "Ovules in gymnosperms are NOT enclosed by any ovary wall — they remain exposed. This is the defining feature that makes their seeds 'naked'. All other statements are correct."
  },
  {
    id: 215,
    topic: "Gymnosperms",
    q: "Match the following root associations with the correct gymnosperm:<br>(a) Mycorrhiza – (i) Cycas<br>(b) Coralloid roots with cyanobacteria – (ii) Pinus",
    options: [
      "a-(ii), b-(i)",
      "a-(i), b-(ii)",
      "a-(i), b-(i)",
      "a-(ii), b-(ii)"
    ],
    correct: 0,
    explanation: "Mycorrhiza (fungal association) is found in Pinus (ii). Coralloid roots associated with N₂-fixing cyanobacteria are found in Cycas (i)."
  },
  {
    id: 216,
    topic: "Gymnosperms",
    q: "The female gametophyte in gymnosperms is retained within the:",
    options: [
      "Microsporangium",
      "Pollen grain",
      "Megasporangium",
      "Strobilus"
    ],
    correct: 2,
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
    q: "<b>Assertion (A):</b> Seeds of gymnosperms are naked.<br><b>Reason (R):</b> In gymnosperms, ovules are not enclosed by any ovary wall.",
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
      "Highly reduced and confined to a limited number of cells",
      "A large, free-living prothallus",
      "A multicellular protonema"
    ],
    correct: 1,
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
      "Air currents reaching the opening of ovules on megasporophylls",
      "Underground root connections"
    ],
    correct: 2,
    explanation: "Pollen grains are carried by air currents and come in contact with the opening of ovules borne on megasporophylls. Gymnosperms are wind-pollinated."
  },
  {
    id: 223,
    topic: "Gymnosperms",
    q: "Consider the following about <b>heterospory</b> in gymnosperms:<br>(i) Microspores develop into pollen grains<br>(ii) Megaspores develop into female gametophyte<br>(iii) Both types of spores are produced within sporangia<br>(iv) Sporangia are borne on sporophylls",
    options: [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iii) and (iv) only"
    ],
    correct: 2,
    explanation: "All four statements are correct. Gymnosperms are heterosporous; microspores become pollen grains, megaspores give rise to female gametophytes, both spore types form in sporangia on sporophylls."
  },
  {
    id: 224,
    topic: "Gymnosperms",
    q: "Which of the following is <b>incorrectly</b> matched?",
    options: [
      "Pinus — Branched stem, mycorrhiza",
      "Cycas — Unbranched stem, coralloid roots",
      "Cedrus — Branched stem",
      "Sequoia — Unbranched stem, coralloid roots"
    ],
    correct: 3,
    explanation: "Sequoia (giant redwood) is described as one of the tallest tree species. Unbranched stem and coralloid roots are specifically described for Cycas, not Sequoia."
  },
  {
    id: 225,
    topic: "Gymnosperms",
    q: "Sunken stomata in gymnosperm leaves help to:",
    options: [
      "Increase rate of photosynthesis",
      "Increase water absorption",
      "Reduce water loss",
      "Facilitate gas exchange during rain"
    ],
    correct: 2,
    explanation: "Sunken stomata (stomata located in pits below the leaf surface) create a humid microenvironment that reduces the rate of transpiration (water loss)."
  },
  {
    id: 226,
    topic: "Gymnosperms",
    q: "<b>Assertion (A):</b> The male gametophyte in gymnosperms is called a pollen grain.<br><b>Reason (R):</b> The male gametophytic generation in gymnosperms is highly reduced and confined to a limited number of cells.",
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
      "Heterospory in all members",
      "Presence of archegonia",
      "Seed formation"
    ],
    correct: 2,
    explanation: "Both pteridophytes and gymnosperms possess archegonia (female sex organs). Free-living gametophytes are found in pteridophytes but NOT in gymnosperms. Not all pteridophytes are heterosporous. Seed formation is found in gymnosperms but not in pteridophytes."
  },
  {
    id: 228,
    topic: "Gymnosperms",
    q: "How many archegonia are typically present in the female gametophyte of gymnosperms?",
    options: [
      "Only one",
      "Two or more",
      "Exactly ten",
      "Archegonia are absent"
    ],
    correct: 1,
    explanation: "The multicellular female gametophyte in gymnosperms bears two or more archegonia or female sex organs."
  },
  {
    id: 229,
    topic: "Gymnosperms",
    q: "Consider the following statements:<br>Statement I: In Pinus, male and female cones are borne on the same tree.<br>Statement II: In Cycas, male cones and megasporophylls are borne on the same tree.<br>Which is/are correct?",
    options: [
      "Only Statement I",
      "Only Statement II",
      "Both Statements I and II",
      "Neither Statement I nor Statement II"
    ],
    correct: 0,
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
    q: "<b>Assertion (A):</b> Gymnosperms do not form fruits.<br><b>Reason (R):</b> Ovary is absent in gymnosperms, and fruits develop from the ovary wall.",
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
      "Sporophylls arranged spirally along an axis",
      "Prothallus",
      "Gemma cups"
    ],
    correct: 1,
    explanation: "Sporangia bearing microspores and megaspores are borne on sporophylls, which are arranged spirally along an axis to form lax or compact strobili or cones."
  },
  {
    id: 233,
    topic: "Gymnosperm Reproduction",
    q: "The strobili bearing microsporophylls and microsporangia are called:",
    options: [
      "Macrosporangiate or female strobili",
      "Microsporangiate or male strobili",
      "Megasporangiate or bisexual strobili",
      "Archegoniate strobili"
    ],
    correct: 1,
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
      "(i) and (ii) only",
      "(i) and (iii) only",
      "(i), (ii) and (iii)",
      "(ii) and (iii) only"
    ],
    correct: 0,
    explanation: "Statements (i) and (ii) are correct. Pinus is monoecious (both cones on same tree), while Cycas is dioecious (male cones and megasporophylls on different trees). Statement (iii) is wrong."
  },
  {
    id: 237,
    topic: "Gymnosperm Reproduction",
    q: "The megaspore mother cell in gymnosperms is differentiated from one of the cells of the:",
    options: [
      "Integument",
      "Archegonium",
      "Nucellus",
      "Microsporangium"
    ],
    correct: 2,
    explanation: "The megaspore mother cell is differentiated from one of the cells of the nucellus. The nucellus, protected by envelopes (integuments), forms the composite structure called an ovule."
  },
  {
    id: 238,
    topic: "Gymnosperm Reproduction",
    q: "The composite structure called an <b>ovule</b> in gymnosperms consists of:",
    options: [
      "Only the megaspore mother cell",
      "Nucellus protected by envelopes (integuments)",
      "Only the integuments",
      "Microsporangium and nucellus"
    ],
    correct: 1,
    explanation: "The nucellus is protected by envelopes (integuments) and this composite structure is called an ovule. Ovules are borne on megasporophylls."
  },
  {
    id: 239,
    topic: "Gymnosperm Reproduction",
    q: "The megaspore mother cell divides <b>meiotically</b> to form:",
    options: [
      "Two megaspores",
      "Three megaspores",
      "Four megaspores",
      "Eight megaspores"
    ],
    correct: 2,
    explanation: "The megaspore mother cell divides meiotically to form four megaspores. Only one of them develops into a multicellular female gametophyte."
  },
  {
    id: 240,
    topic: "Gymnosperm Reproduction",
    q: "Out of four megaspores formed after meiosis in gymnosperms, how many develop into the female gametophyte?",
    options: [
      "All four",
      "Three",
      "Two",
      "One"
    ],
    correct: 3,
    explanation: "Only one of the four megaspores, enclosed within the megasporangium, develops into a multicellular female gametophyte that bears two or more archegonia."
  },
  {
    id: 241,
    topic: "Gymnosperm Reproduction",
    q: "<b>Assertion (A):</b> The female gametophyte in gymnosperms is retained within the megasporangium.<br><b>Reason (R):</b> In gymnosperms, the gametophytes do not have an independent free-living existence.",
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
      "Discharges male gametes near the mouth of the archegonia",
      "Produces female gametes",
      "Forms a new sporophyte directly"
    ],
    correct: 1,
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
      "Pollination → Pollen tube formation → Male gamete discharge near archegonia → Fertilisation → Embryo → Seed",
      "Fertilisation → Pollination → Embryo → Seed → Pollen tube",
      "Seed → Pollination → Fertilisation → Embryo → Pollen tube",
      "Pollen tube → Pollination → Archegonia → Seed → Embryo"
    ],
    correct: 0,
    explanation: "The correct sequence: Pollen grains reach ovules via air currents (pollination) → pollen tube grows towards archegonia → male gametes discharged near mouth of archegonia → fertilisation → zygote → embryo → ovule becomes seed."
  },
  {
    id: 246,
    topic: "Gymnosperm Reproduction",
    q: "<b>Assertion (A):</b> In gymnosperms, water is not required for fertilisation.<br><b>Reason (R):</b> Male gametes are carried to archegonia by pollen tubes, eliminating the need for external water.",
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
      "(i), (ii), (iii), (iv) and (v) only",
      "(i), (ii) and (iii) only",
      "(iv) and (v) only"
    ],
    correct: 1,
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
      "(i) and (ii) only",
      "(i), (ii) and (iii)",
      "(iii) only"
    ],
    correct: 1,
    explanation: "According to the NCERT summary, algae are classified into Chlorophyceae, Phaeophyceae and Rhodophyceae based on the type of pigment possessed and the type of stored food."
  },
  {
    id: 250,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following correctly describes <b>bryophytes</b>?",
    options: [
      "Plants with true roots, stems and leaves that are fully aquatic",
      "Plants that can live in soil but are dependent on water for sexual reproduction",
      "Plants with vascular tissues and independent sporophyte",
      "Naked-seeded plants with cones"
    ],
    correct: 1,
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
      "Produces gametes",
      "Develops from the zygote",
      "Bears sporangia"
    ],
    correct: 1,
    explanation: "The main plant body of bryophytes is gamete-producing, hence called a gametophyte. It bears antheridia (male sex organs) and archegonia (female sex organs)."
  },
  {
    id: 253,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following about pteridophytes:<br>(i) The main plant is a sporophyte<br>(ii) It is differentiated into true root, stem and leaves<br>(iii) These organs possess well-differentiated vascular tissues<br>(iv) The gametophytes require hot, dry places to grow",
    options: [
      "(i), (ii), (iii) and (iv)",
      "(i), (ii) and (iii) only",
      "(i) and (iv) only",
      "(iv) only"
    ],
    correct: 1,
    explanation: "Statements (i), (ii) and (iii) are correct. Statement (iv) is wrong — gametophytes of pteridophytes require cool, damp places to grow, not hot dry places."
  },
  {
    id: 254,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Water is required for transfer of male gametes to archegonium in:",
    options: [
      "Only bryophytes",
      "Only pteridophytes",
      "Both bryophytes and pteridophytes",
      "Bryophytes, pteridophytes and gymnosperms"
    ],
    correct: 2,
    explanation: "Both bryophytes and pteridophytes require water for the transfer of male gametes (antherozoids) to the archegonium. Gymnosperms do not require water — male gametes are carried by pollen tubes."
  },
  {
    id: 255,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Gymnosperms are called naked-seeded plants.<br><b>Reason (R):</b> In gymnosperms, ovules are not enclosed by any ovary wall and after fertilisation seeds remain exposed.",
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
      "Archegonia",
      "Megasporangia wall"
    ],
    correct: 2,
    explanation: "The pollen tube carries male gametes to the archegonia in the ovule, where the male gamete fuses with the egg cell."
  },
  {
    id: 258,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Angiosperms are divided into:",
    options: [
      "Gymnosperms and pteridophytes",
      "Liverworts and mosses",
      "Dicotyledons and monocotyledons",
      "Chlorophyceae and Rhodophyceae"
    ],
    correct: 2,
    explanation: "Angiosperms are divided into two classes — the dicotyledons and the monocotyledons."
  },
  {
    id: 259,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Arrange the following plant groups in <b>increasing order of body complexity</b>:",
    options: [
      "Pteridophytes → Algae → Bryophytes → Gymnosperms → Angiosperms",
      "Algae → Bryophytes → Pteridophytes → Gymnosperms → Angiosperms",
      "Bryophytes → Algae → Gymnosperms → Pteridophytes → Angiosperms",
      "Angiosperms → Gymnosperms → Pteridophytes → Bryophytes → Algae"
    ],
    correct: 1,
    explanation: "The correct evolutionary order of increasing complexity: Algae (simplest, thalloid) → Bryophytes (more differentiated, no vascular tissue) → Pteridophytes (true organs, vascular tissue) → Gymnosperms (seeds, no fruit) → Angiosperms (seeds within fruits)."
  },
  {
    id: 260,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Match the plant group with the <b>dominant phase</b> in their life cycle:<br>(a) Bryophytes – (i) Sporophyte<br>(b) Pteridophytes – (ii) Gametophyte<br>(c) Gymnosperms – (iii) Sporophyte",
    options: [
      "a-(ii), b-(i), c-(iii)",
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(iii), c-(i)",
      "a-(iii), b-(ii), c-(i)"
    ],
    correct: 0,
    explanation: "Bryophytes — gametophyte dominant (ii); Pteridophytes — sporophyte dominant (i); Gymnosperms — sporophyte dominant (iii)."
  },
  {
    id: 261,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is the <b>first</b> group of plants to possess vascular tissues?",
    options: [
      "Algae",
      "Bryophytes",
      "Pteridophytes",
      "Gymnosperms"
    ],
    correct: 2,
    explanation: "Pteridophytes are the first terrestrial plants to possess well-differentiated vascular tissues (xylem and phloem)."
  },
  {
    id: 262,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following groups has <b>true roots, stems and leaves</b>?<br>(i) Algae<br>(ii) Bryophytes<br>(iii) Pteridophytes<br>(iv) Gymnosperms",
    options: [
      "(i) and (ii) only",
      "(iii) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(ii) and (iii) only"
    ],
    correct: 1,
    explanation: "Only pteridophytes and gymnosperms (and angiosperms) have true roots, stems and leaves. Algae have a thalloid body. Bryophytes have root-like, stem-like and leaf-like structures but NOT true roots, stems or leaves."
  },
  {
    id: 263,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following statements:<br>Statement I: In bryophytes, the sporophyte produces haploid spores.<br>Statement II: In pteridophytes, the sporophyte bears sporangia which produce spores.<br>Which is/are correct?",
    options: [
      "Only Statement I",
      "Only Statement II",
      "Both Statements I and II",
      "Neither Statement I nor Statement II"
    ],
    correct: 2,
    explanation: "Both are correct. In bryophytes, the sporophyte produces haploid spores that germinate to form gametophytes. In pteridophytes, the sporophyte bears sporangia that produce spores, which germinate to form gametophytes."
  },
  {
    id: 264,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Select the group in which <b>seeds are produced</b>:",
    options: [
      "Bryophytes and pteridophytes",
      "Algae and bryophytes",
      "Gymnosperms and angiosperms",
      "Pteridophytes and gymnosperms"
    ],
    correct: 2,
    explanation: "Seeds are produced only in gymnosperms and angiosperms. Algae, bryophytes and pteridophytes do not produce seeds — they reproduce by spores."
  },
  {
    id: 265,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Algae reproduce sexually by formation of gametes which may show isogamy, anisogamy or oogamy.<br><b>Reason (R):</b> In isogamy, gametes are similar in size; in anisogamy, they are dissimilar; in oogamy, a large non-motile female gamete fuses with a smaller motile male gamete.",
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
      "Algae",
      "Pteridophytes",
      "Gymnosperms"
    ],
    correct: 1,
    explanation: "Algae have the most primitive body organisation — simple, thalloid bodies without any differentiation into root, stem or leaf-like structures (though some show slight differentiation)."
  },
  {
    id: 267,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following correctly compares the <b>attachment structures</b> across plant groups?",
    options: [
      "Algae — rhizoids; Bryophytes — holdfasts; Pteridophytes — true roots",
      "Algae — true roots; Bryophytes — rhizoids; Pteridophytes — rhizoids",
      "Bryophytes — rhizoids; Pteridophytes — true roots; Gymnosperms — tap roots",
      "All groups have true roots"
    ],
    correct: 2,
    explanation: "Bryophytes are attached by rhizoids (unicellular or multicellular). Pteridophytes have true roots. Gymnosperms generally have tap roots. Algae may be attached by holdfasts (in some forms)."
  },
  {
    id: 268,
    topic: "Plant Kingdom Summary – Comparative",
    q: "In which of the following plant groups are <b>both antheridia and archegonia</b> present?<br>(i) Bryophytes<br>(ii) Pteridophytes<br>(iii) Gymnosperms",
    options: [
      "(i) only",
      "(i) and (ii) only",
      "(i), (ii) and (iii)",
      "(ii) and (iii) only"
    ],
    correct: 2,
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
      "A multicellular body called sporophyte",
      "Haploid spores directly",
      "A prothallus"
    ],
    correct: 1,
    explanation: "In bryophytes, male and female gametes fuse to form a zygote, which produces a multicellular body called a sporophyte. The sporophyte then produces haploid spores."
  },
  {
    id: 271,
    topic: "Plant Kingdom Summary – Comparative",
    q: "In pteridophytes, spores germinate to form gametophytes which require:",
    options: [
      "Hot, dry places",
      "Cool, damp places",
      "Deep ocean water",
      "Direct sunlight only"
    ],
    correct: 1,
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
    q: "<b>Assertion (A):</b> The gametophyte of pteridophytes is free-living while that of gymnosperms is not.<br><b>Reason (R):</b> In gymnosperms, both male and female gametophytes remain within sporangia retained on the sporophytes.",
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
      "Bryophytes (dominant) → Pteridophytes (free-living, small) → Gymnosperms (retained, not free-living)",
      "Gymnosperms (dominant) → Pteridophytes (reduced) → Bryophytes (absent)",
      "Pteridophytes (dominant) → Bryophytes (reduced) → Gymnosperms (absent)"
    ],
    correct: 1,
    explanation: "The gametophyte shows progressive reduction: Bryophytes (dominant, independent) → Pteridophytes (free-living but small, inconspicuous) → Gymnosperms (highly reduced, not free-living, retained within sporangia)."
  },
  {
    id: 275,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following features is common to <b>all</b> plant groups — algae, bryophytes, pteridophytes, gymnosperms and angiosperms?",
    options: [
      "Presence of vascular tissues",
      "Production of seeds",
      "Alternation of generations",
      "Presence of true roots"
    ],
    correct: 2,
    explanation: "Alternation of generations (between gametophytic and sporophytic phases) is common to all plant groups. Vascular tissues start from pteridophytes, seeds from gymnosperms, and true roots from pteridophytes."
  },
  {
    id: 276,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Consider the following comparisons:<br>(i) Algae reproduce vegetatively by fragmentation<br>(ii) Bryophytes reproduce asexually by spore formation in the sporophyte<br>(iii) Pteridophytes produce spores by meiosis in sporangia<br>(iv) Gymnosperms produce microspores and megaspores<br>Which of the above is/are correct?",
    options: [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iii) and (iv)",
      "(iii) and (iv) only"
    ],
    correct: 2,
    explanation: "All four statements are correct as per NCERT. Algae reproduce vegetatively by fragmentation, bryophyte sporophytes produce spores, pteridophyte sporangia produce spores by meiosis, and gymnosperms produce both microspores and megaspores."
  },
  {
    id: 277,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Match the following plant groups with the type of body differentiation:<br>(a) Algae – (i) True root, stem and leaves with vascular tissue<br>(b) Bryophytes – (ii) Simple, thalloid<br>(c) Pteridophytes – (iii) Root-like, stem-like, leaf-like structures without vascular tissue",
    options: [
      "a-(ii), b-(iii), c-(i)",
      "a-(iii), b-(ii), c-(i)",
      "a-(i), b-(ii), c-(iii)",
      "a-(ii), b-(i), c-(iii)"
    ],
    correct: 0,
    explanation: "Algae — simple, thalloid (ii); Bryophytes — root-like, stem-like, leaf-like structures without vascular tissue (iii); Pteridophytes — true root, stem and leaves with vascular tissue (i)."
  },
  {
    id: 278,
    topic: "Plant Kingdom Summary – Comparative",
    q: "<b>Assertion (A):</b> Bryophytes possess root-like, leaf-like and stem-like structures but not true roots, stems and leaves.<br><b>Reason (R):</b> True roots, stems and leaves require well-differentiated vascular tissues which are absent in bryophytes.",
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
      "Bryophytes",
      "Angiosperms"
    ],
    correct: 2,
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
      "(iv) → (i) → (ii) → (iii)",
      "(i) → (iv) → (ii) → (iii)",
      "(iii) → (ii) → (i) → (iv)",
      "(iv) → (ii) → (i) → (iii)"
    ],
    correct: 0,
    explanation: "Evolutionary order: Rhizoids (bryophytes, iv) → Vascular tissues (pteridophytes, i) → Seeds (gymnosperms, ii) → Flowers and fruits (angiosperms, iii)."
  },
  {
    id: 282,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following is a unique feature of <b>angiosperms</b> compared to gymnosperms?",
    options: [
      "Presence of vascular tissues",
      "Production of seeds",
      "Seeds enclosed within fruits (ovary wall)",
      "Presence of archegonia"
    ],
    correct: 2,
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
    q: "<b>Assertion (A):</b> Pteridophytes are more advanced than bryophytes but less advanced than gymnosperms.<br><b>Reason (R):</b> Pteridophytes have vascular tissues and true organs but lack seeds, while gymnosperms produce seeds.",
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
      "Multicellular sex organs (antheridia and archegonia)",
      "Autotrophic nutrition",
      "Chlorophyll"
    ],
    correct: 1,
    explanation: "Multicellular sex organs (antheridia and archegonia) are present in bryophytes, pteridophytes and gymnosperms but absent in algae (which generally have unicellular sex organs). Alternation of generations, autotrophic nutrition and chlorophyll are present in all groups."
  },
  {
    id: 286,
    topic: "Plant Kingdom Summary – Comparative",
    q: "Which of the following shows the <b>correct progressive increase</b> in sporophyte independence?",
    options: [
      "Gymnosperms → Pteridophytes → Bryophytes",
      "Bryophytes (dependent on gametophyte) → Pteridophytes (independent, dominant) → Gymnosperms (independent, dominant, seed-forming)",
      "Algae → Gymnosperms → Bryophytes → Pteridophytes",
      "Pteridophytes → Bryophytes → Gymnosperms"
    ],
    correct: 1,
    explanation: "Sporophyte independence increases: Bryophytes (sporophyte dependent on gametophyte) → Pteridophytes (sporophyte independent and dominant) → Gymnosperms (sporophyte dominant, produces seeds, gametophyte fully dependent)."
  }
];
