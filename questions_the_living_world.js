const allQuestions = [
{
  id: 1,
  topic: "Introduction - The Living World",
  q: "Biology is defined in the NCERT text as:",
  options: [
    "The science of life forms only",
    "The science of living processes only",
    "The science of life forms and living processes",
    "The science of classification of living organisms"
  ],
  correct: 2,
  explanation: "As per NCERT, 'Biology is the science of life forms and living processes.' It covers both — the organisms themselves and the processes occurring in them. Options A and B are incomplete, and D is too narrow."
},
{
  id: 2,
  topic: "Introduction - The Living World",
  q: "Which of the following was deified by early man?<br>(i) Wind<br>(ii) Sea<br>(iii) Fire<br>(iv) Soil<br>(v) Some animals and plants",
  options: [
    "i, ii, iii and v only",
    "i, ii, iii, iv and v",
    "i, ii and iii only",
    "i, iii and v only"
  ],
  correct: 0,
  explanation: "NCERT specifically mentions that early man deified some inanimate matter — wind, sea, fire — and some among animals and plants. Soil is NOT mentioned. Hence (i), (ii), (iii) and (v) only."
},
{
  id: 3,
  topic: "Introduction - The Living World",
  q: "A common feature of all inanimate and animate objects that early man deified was:",
  options: [
    "Their beauty and elegance",
    "Their economic importance",
    "The sense of awe or fear they evoked",
    "Their utility in daily life"
  ],
  correct: 2,
  explanation: "NCERT states: 'A common feature of all such forms of inanimate and animate objects was the sense of awe or fear that they evoked.' Not beauty, utility, or economic importance."
},
{
  id: 4,
  topic: "Introduction - The Living World",
  q: "Which of the following views of biology led to limited progress in biological knowledge?",
  options: [
    "Biocentric view",
    "Anthropocentric view",
    "Ecocentric view",
    "Theocentric view"
  ],
  correct: 1,
  explanation: "NCERT clearly states: 'Societies which indulged in anthropocentric view of biology could register limited progress in biological knowledge.' Anthropocentric = human-centred view."
},
{
  id: 5,
  topic: "Introduction - The Living World",
  q: "The systematic description of life forms brought in detailed systems of:<br>(i) Identification<br>(ii) Nomenclature<br>(iii) Classification<br>(iv) Evolution",
  options: [
    "i, ii and iii only",
    "i, ii, iii and iv",
    "ii and iii only",
    "i and iii only"
  ],
  correct: 0,
  explanation: "NCERT states: 'Systematic and monumental description of life forms brought in, out of necessity, detailed systems of identification, nomenclature and classification.' Evolution is NOT mentioned here."
},
{
  id: 6,
  topic: "Introduction - The Living World",
  q: "The biggest spin-off of systematic studies of life forms was:",
  options: [
    "Discovery of new species",
    "Development of medicines",
    "Recognition of sharing of similarities among living organisms both horizontally and vertically",
    "Understanding of evolution by natural selection"
  ],
  correct: 2,
  explanation: "NCERT explicitly says: 'The biggest spin off of such studies was the recognition of the sharing of similarities among living organisms both horizontally and vertically.'"
},
{
  id: 7,
  topic: "Introduction - The Living World",
  q: "The revelation that all present-day living organisms are related to each other and to all organisms that ever lived on earth led to:",
  options: [
    "Development of genetic engineering",
    "Cultural movements for conservation of biodiversity",
    "Discovery of fossils",
    "Establishment of zoological parks"
  ],
  correct: 1,
  explanation: "NCERT states this revelation 'humbled man and led to cultural movements for conservation of biodiversity.' Not genetic engineering or fossil discovery."
},
{
  id: 8,
  topic: "Introduction - The Living World",
  q: "Ernst Mayr has been called:",
  options: [
    "The Father of Modern Biology",
    "The Father of Taxonomy",
    "The Darwin of the 20th century",
    "The Linnaeus of the 20th century"
  ],
  correct: 2,
  explanation: "NCERT mentions Ernst Mayr as 'The Darwin of the 20th century.' He was a Harvard University evolutionary biologist. Other titles are not attributed to him in the text."
},
{
  id: 9,
  topic: "Introduction - The Living World",
  q: "Ernst Mayr was born in:",
  options: [
    "London, England",
    "Vienna, Austria",
    "Kempten, Germany",
    "Zurich, Switzerland"
  ],
  correct: 2,
  explanation: "As per NCERT, Ernst Mayr was born on 5 July 1904, in Kempten, Germany."
},
{
  id: 10,
  topic: "Introduction - The Living World",
  q: "Which of the following is <b>NOT</b> a research area of Ernst Mayr?",
  options: [
    "Ornithology and taxonomy",
    "Zoogeography and evolution",
    "Molecular biology and genetics",
    "Systematics and history of biology"
  ],
  correct: 2,
  explanation: "NCERT lists Mayr's research areas as ornithology, taxonomy, zoogeography, evolution, systematics, and the history and philosophy of biology. Molecular biology and genetics are NOT mentioned."
},
{
  id: 11,
  topic: "Introduction - The Living World",
  q: "Ernst Mayr almost single-handedly made which of the following the central question of evolutionary biology?",
  options: [
    "Origin of life",
    "Mechanism of natural selection",
    "Origin of species diversity",
    "Inheritance of acquired characters"
  ],
  correct: 2,
  explanation: "NCERT states: 'He almost single-handedly made the origin of species diversity the central question of evolutionary biology that it is today.'"
},
{
  id: 12,
  topic: "Introduction - The Living World",
  q: "Ernst Mayr pioneered the currently accepted definition of:",
  options: [
    "A taxonomic genus",
    "A biological species",
    "Natural selection",
    "A phylogenetic tree"
  ],
  correct: 1,
  explanation: "NCERT clearly states: 'He also pioneered the currently accepted definition of a biological species.' This is the Biological Species Concept (BSC)."
},
{
  id: 13,
  topic: "Introduction - The Living World",
  q: "The three prizes widely regarded as the <b>triple crown of biology</b> won by Ernst Mayr are:",
  options: [
    "Nobel Prize, Balzan Prize, Crafoord Prize",
    "Balzan Prize, International Prize for Biology, Crafoord Prize",
    "Nobel Prize, International Prize for Biology, Balzan Prize",
    "Crafoord Prize, Nobel Prize, International Prize for Biology"
  ],
  correct: 1,
  explanation: "NCERT states: 'Mayr was awarded the three prizes widely regarded as the triple crown of biology: the Balzan Prize in 1983, the International Prize for Biology in 1994, and the Crafoord Prize in 1999.' Nobel Prize is NOT among them."
},
{
  id: 14,
  topic: "Introduction - The Living World",
  q: "Match the following prizes of Ernst Mayr with the correct year:<br>(i) Balzan Prize - (a) 1999<br>(ii) International Prize for Biology - (b) 1983<br>(iii) Crafoord Prize - (c) 1994",
  options: [
    "i-b, ii-c, iii-a",
    "i-a, ii-b, iii-c",
    "i-c, ii-a, iii-b",
    "i-b, ii-a, iii-c"
  ],
  correct: 0,
  explanation: "Balzan Prize → 1983 (b), International Prize for Biology → 1994 (c), Crafoord Prize → 1999 (a). The chronological order is important and frequently tested."
},
{
  id: 15,
  topic: "Introduction - The Living World",
  q: "Ernst Mayr joined Harvard's Faculty of Arts and Sciences in _____ and retired in _____.",
  options: [
    "1950 and 1970",
    "1953 and 1975",
    "1955 and 1980",
    "1948 and 1975"
  ],
  correct: 1,
  explanation: "NCERT states: 'Mayr joined Harvard's Faculty of Arts and Sciences in 1953 and retired in 1975.' He assumed the title Alexander Agassiz Professor of Zoology Emeritus."
},
{
  id: 16,
  topic: "Introduction - The Living World",
  q: "Ernst Mayr died at the age of:",
  options: [
    "96 in 2000",
    "98 in 2002",
    "100 in 2004",
    "102 in 2006"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'Mayr died at the age of 100 in the year 2004.' He was born in 1904 and lived a full century."
},
{
  id: 17,
  topic: "Introduction - The Living World",
  q: "The title assumed by Ernst Mayr after retirement from Harvard was:",
  options: [
    "Professor Emeritus of Evolutionary Biology",
    "Alexander Agassiz Professor of Zoology Emeritus",
    "Charles Darwin Professor of Ornithology Emeritus",
    "Honorary Professor of Systematics"
  ],
  correct: 1,
  explanation: "NCERT specifically mentions the title 'Alexander Agassiz Professor of Zoology Emeritus' was assumed by Mayr after retirement."
},
{
  id: 18,
  topic: "Introduction - The Living World",
  q: "Which of the following habitats are <b>NOT</b> mentioned in NCERT as extraordinary habitats for living organisms?",
  options: [
    "Cold mountains and deciduous forests",
    "Oceans and fresh water lakes",
    "Deserts and hot springs",
    "Tropical rainforests and caves"
  ],
  correct: 3,
  explanation: "NCERT lists cold mountains, deciduous forests, oceans, fresh water lakes, deserts, and hot springs. Tropical rainforests and caves are NOT specifically mentioned in this introductory paragraph."
},
{
  id: 19,
  topic: "Introduction - The Living World",
  q: "Consider the following statements:<br>(i) The ecological conflict and cooperation occur among members of a population<br>(ii) The ecological conflict and cooperation occur among populations of a community<br>(iii) Molecular traffic occurs inside a cell<br>Which of the above statements are correct as per NCERT?",
  options: [
    "i and ii only",
    "ii and iii only",
    "i and iii only",
    "i, ii and iii"
  ],
  correct: 3,
  explanation: "All three are directly from NCERT: 'The ecological conflict and cooperation among members of a population and among populations of a community or even the molecular traffic inside a cell.' All three are correct."
},
{
  id: 20,
  topic: "Introduction - The Living World",
  q: "The question 'What indeed is life?' has two implicit questions. These are:",
  options: [
    "A scientific question and a religious question",
    "A technical question and a philosophical question",
    "A biological question and a chemical question",
    "A theoretical question and a practical question"
  ],
  correct: 1,
  explanation: "NCERT states: 'The first is a technical one...what living is as opposed to the non-living, and the second is a philosophical one...what the purpose of life is.' Scientists attempt only the technical question."
},
{
  id: 21,
  topic: "Introduction - The Living World",
  q: "<b>Assertion (A):</b> As scientists, we attempt to answer what the purpose of life is.<br><b>Reason (R):</b> The question 'What is life?' has a philosophical dimension.",
  options: [
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is not the correct explanation of A",
    "A is false, but R is true",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is FALSE — NCERT says 'As scientists, we shall not attempt answering the second question' (philosophical/purpose). Reason is TRUE — the question does have a philosophical dimension."
},
{
  id: 22,
  topic: "Introduction - The Living World",
  q: "<b>Assertion (A):</b> Societies with an anthropocentric view of biology registered limited progress in biological knowledge.<br><b>Reason (R):</b> Anthropocentric view places humans at the centre of all biological understanding, limiting broader exploration.",
  options: [
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is not the correct explanation of A",
    "A is true, but R is false",
    "Both A and R are false"
  ],
  correct: 0,
  explanation: "Both statements are true. An anthropocentric (human-centred) view restricts the scope of biological inquiry, which is why such societies had limited progress. R correctly explains A."
},
{
  id: 23,
  topic: "Introduction - The Living World",
  q: "<b>Assertion (A):</b> Ernst Mayr was awarded the Nobel Prize for his contribution to evolutionary biology.<br><b>Reason (R):</b> He pioneered the biological species concept.",
  options: [
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is not the correct explanation of A",
    "A is false, but R is true",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is FALSE — Mayr was NOT awarded the Nobel Prize. His triple crown consisted of Balzan Prize, International Prize for Biology, and Crafoord Prize. Reason is TRUE — he did pioneer the biological species concept."
},
{
  id: 24,
  topic: "Introduction - The Living World",
  q: "The description of living organisms including human beings began:",
  options: [
    "At the very beginning of human civilization",
    "Much later in human history",
    "Only after the invention of the microscope",
    "Only after Darwin's theory of evolution"
  ],
  correct: 1,
  explanation: "NCERT states: 'The description of living organisms including human beings began much later in human history.' Not at the beginning or after specific scientific inventions."
},
{
  id: 25,
  topic: "Introduction - The Living World",
  q: "Sharing of similarities among living organisms is described in NCERT as occurring:",
  options: [
    "Only horizontally",
    "Only vertically",
    "Both horizontally and vertically",
    "Neither horizontally nor vertically"
  ],
  correct: 2,
  explanation: "NCERT mentions 'recognition of the sharing of similarities among living organisms both horizontally and vertically.' Horizontal = among contemporaries; Vertical = across evolutionary lineage."
},
{
  id: 26,
  topic: "Introduction - The Living World",
  q: "Select the <b>incorrect</b> statement regarding Ernst Mayr:",
  options: [
    "His research career spanned nearly 80 years",
    "He was listed among the 100 greatest scientists of all time",
    "He received the Crafoord Prize before the Balzan Prize",
    "He was associated with Harvard University"
  ],
  correct: 2,
  explanation: "Balzan Prize was in 1983 and Crafoord Prize in 1999. So Mayr received Balzan Prize BEFORE Crafoord Prize, not after. Option C reverses the order, making it incorrect."
},
{
  id: 27,
  topic: "Introduction - The Living World",
  q: "The systematic and monumental description of life forms was brought about:",
  options: [
    "Out of curiosity",
    "Out of necessity",
    "Out of religious motivation",
    "Out of economic interest"
  ],
  correct: 1,
  explanation: "NCERT uses the phrase 'out of necessity' — 'Systematic and monumental description of life forms brought in, out of necessity, detailed systems of identification, nomenclature and classification.'"
},
{
  id: 28,
  topic: "Introduction - The Living World",
  q: "Which of the following is <b>NOT</b> mentioned in NCERT as an example that evokes awe and deep sense of wonder?",
  options: [
    "A galloping horse",
    "Migrating birds",
    "The valley of flowers",
    "A blooming coral reef"
  ],
  correct: 3,
  explanation: "NCERT mentions 'a galloping horse, migrating birds, the valley of flowers, or the attacking shark.' A blooming coral reef is NOT mentioned in this context."
},
{
  id: 29,
  topic: "Introduction - The Living World",
  q: "Consider the following statements about early man's perception:<br>(A) Early man could easily perceive the difference between inanimate matter and living organisms<br>(B) Early man deified all animals and plants<br>(C) Early man deified some inanimate matter<br>Which of the above is/are correct?",
  options: [
    "A and B only",
    "A and C only",
    "B and C only",
    "A, B and C"
  ],
  correct: 1,
  explanation: "Statement A is correct — early man could easily perceive the difference. Statement B is INCORRECT — only 'some among' animals and plants were deified, not all. Statement C is correct — wind, sea, fire were deified."
},
{
  id: 30,
  topic: "Introduction - The Living World",
  q: "The technical question implicit in 'What is life?' seeks to answer:",
  options: [
    "What the purpose of life is",
    "What living is as opposed to the non-living",
    "How organisms evolve over time",
    "Why biodiversity should be conserved"
  ],
  correct: 1,
  explanation: "NCERT states: 'The first is a technical one and seeks answer to what living is as opposed to the non-living.' The purpose of life is the philosophical question which scientists do not attempt."
},
{
  id: 31,
  topic: "Introduction - The Living World",
  q: "Ernst Mayr's career spanned nearly:",
  options: [
    "50 years",
    "60 years",
    "80 years",
    "100 years"
  ],
  correct: 2,
  explanation: "NCERT states: 'Throughout his nearly 80-year career.' Although he lived 100 years, his career span was about 80 years."
},
{
  id: 32,
  topic: "Introduction - The Living World",
  q: "Which of the following correctly represents the chronological order of Ernst Mayr's awards?",
  options: [
    "International Prize for Biology → Balzan Prize → Crafoord Prize",
    "Crafoord Prize → Balzan Prize → International Prize for Biology",
    "Balzan Prize → International Prize for Biology → Crafoord Prize",
    "Balzan Prize → Crafoord Prize → International Prize for Biology"
  ],
  correct: 2,
  explanation: "Balzan Prize (1983) → International Prize for Biology (1994) → Crafoord Prize (1999). This is the correct chronological order as given in NCERT."
},
{
  id: 33,
  topic: "Introduction - The Living World",
  q: "<b>Assertion (A):</b> The biggest spin-off of systematic studies of living organisms was the development of modern medicine.<br><b>Reason (R):</b> Systematic studies led to recognition of sharing of similarities among organisms both horizontally and vertically.",
  options: [
    "Both A and R are true, and R is the correct explanation of A",
    "Both A and R are true, but R is not the correct explanation of A",
    "A is false, but R is true",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is FALSE — the biggest spin-off was the recognition of shared similarities, NOT development of modern medicine. Reason is TRUE as directly stated in NCERT."
},
{
  id: 34,
  topic: "Introduction - The Living World",
  q: "According to NCERT, which of the following reflects the correct understanding?<br>(i) All present-day living organisms are related to each other<br>(ii) All present-day organisms are related to all organisms that ever lived on earth<br>(iii) This revelation led to cultural movements for conservation of biodiversity",
  options: [
    "i and ii only",
    "i and iii only",
    "ii and iii only",
    "i, ii and iii"
  ],
  correct: 3,
  explanation: "All three are directly stated in NCERT: present-day organisms are related to each other AND to all organisms that ever lived. This revelation humbled man and led to cultural movements for biodiversity conservation."
},
{
  id: 35,
  topic: "Introduction - The Living World",
  q: "In the context of the living world, 'horizontal similarities' among organisms refers to similarities:",
  options: [
    "Among organisms at the same evolutionary time/level",
    "Among organisms across different evolutionary lineages vertically",
    "Only among organisms of the same species",
    "Only among organisms of the same kingdom"
  ],
  correct: 0,
  explanation: "Horizontal similarities refer to similarities shared among contemporary organisms (at the same level/time). Vertical similarities refer to those shared across evolutionary ancestry (ancestor-descendant). NCERT mentions both types."
},
{
  id: 36,
  topic: "Introduction - The Living World",
  q: "Which of the following is the <b>correct</b> statement about Ernst Mayr?",
  options: [
    "He was a British evolutionary biologist at Oxford University",
    "He was born in 1904 and died in 2010",
    "He was a Harvard University evolutionary biologist born in Kempten, Germany",
    "He received the Nobel Prize in 1983"
  ],
  correct: 2,
  explanation: "Mayr was born in Kempten, Germany (not British), associated with Harvard (not Oxford), died in 2004 at age 100 (not 2010), and never received a Nobel Prize. Only option C is entirely correct."
}
,
  {
    "id": 37,
    "topic": "Diversity in the Living World",
    "q": "The number of known and described species of living organisms ranges between:",
    "options": [
      "1.2–1.3 million",
      "1.5–1.6 million",
      "1.7–1.8 million",
      "2.5–3.0 million"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The number of species that are known and described range between 1.7-1.8 million.' This refers to biodiversity. Students often confuse this with estimated total species."
  },
  {
    "id": 38,
    "topic": "Diversity in the Living World",
    "q": "Biodiversity refers to:",
    "options": [
      "The number of organisms present on earth",
      "The number and types of organisms present on earth",
      "The variety of ecosystems present on earth",
      "The genetic variation within a species"
    ],
    "correct": 1,
    "explanation": "NCERT defines biodiversity as 'the number and types of organisms present on earth.' Option A misses 'types', Option C and D refer to other levels of biodiversity not mentioned here."
  },
  {
    "id": 39,
    "topic": "Diversity in the Living World",
    "q": "Each different kind of plant, animal or organism that you see, represents a:",
    "options": [
      "Genus",
      "Family",
      "Species",
      "Taxon"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Each different kind of plant, animal or organism that you see, represents a species.' Species is the basic unit of classification."
  },
  {
    "id": 40,
    "topic": "Diversity in the Living World",
    "q": "The process of standardising the naming of living organisms such that a particular organism is known by the same name all over the world is called:",
    "options": [
      "Identification",
      "Classification",
      "Taxonomy",
      "Nomenclature"
    ],
    "correct": 3,
    "explanation": "NCERT defines nomenclature as the process of standardising the naming of living organisms so that a particular organism is known by the same name worldwide."
  },
  {
    "id": 41,
    "topic": "Diversity in the Living World",
    "q": "Nomenclature is only possible when:",
    "options": [
      "The organism is classified into a kingdom",
      "The organism is described correctly and we know to what organism the name is attached to",
      "The organism's DNA has been sequenced",
      "The organism's evolutionary history is known"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Nomenclature or naming is only possible when the organism is described correctly and we know to what organism the name is attached to. This is identification.'"
  },
  {
    "id": 42,
    "topic": "Diversity in the Living World",
    "q": "Scientific names for plants are based on principles provided in:",
    "options": [
      "ICZN",
      "ICBN",
      "IBCN",
      "ICNB"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'For plants, scientific names are based on agreed principles and criteria, which are provided in International Code for Botanical Nomenclature (ICBN).' ICZN is for animals."
  },
  {
    "id": 43,
    "topic": "Diversity in the Living World",
    "q": "ICZN stands for:",
    "options": [
      "International Code for Zoological Nomenclature",
      "International Code of Zoological Nomenclature",
      "International Commission of Zoological Nomenclature",
      "International Committee for Zoological Nomenclature"
    ],
    "correct": 1,
    "explanation": "NCERT uses: 'International Code of Zoological Nomenclature (ICZN).' Note the preposition 'of' — NCERT uses 'for' in ICBN but 'of' in ICZN. This is a common NEET trap. ICBN uses 'for', ICZN uses 'of'."
  },
  {
    "id": 44,
    "topic": "Diversity in the Living World",
    "q": "The system of providing a name with two components is called:",
    "options": [
      "Polynomial nomenclature",
      "Trinomial nomenclature",
      "Binomial nomenclature",
      "Uninomial nomenclature"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Each name has two components – the Generic name and the specific epithet. This system of providing a name with two components is called Binomial nomenclature.'"
  },
  {
    "id": 45,
    "topic": "Diversity in the Living World",
    "q": "Binomial nomenclature was given by:",
    "options": [
      "Ernst Mayr",
      "Charles Darwin",
      "Carolus Linnaeus",
      "Aristotle"
    ],
    "correct": 2,
    "explanation": "NCERT clearly states: 'This naming system given by Carolus Linnaeus is being practised by biologists all over the world.' Linnaeus is the Father of Taxonomy."
  },
  {
    "id": 46,
    "topic": "Diversity in the Living World",
    "q": "In the scientific name <i>Mangifera indica</i>, <i>Mangifera</i> represents the:",
    "options": [
      "Specific epithet",
      "Species",
      "Genus",
      "Family"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'In this name Mangifera represents the genus while indica, is a particular species, or a specific epithet.' The first word is always the generic name."
  },
  {
    "id": 47,
    "topic": "Diversity in the Living World",
    "q": "Consider the following rules of nomenclature:<br>(i) Biological names are generally in Latin<br>(ii) They are written in italics<br>(iii) Both words when handwritten are separately underlined<br>(iv) The specific epithet starts with a capital letter<br>Which of the above are correct?",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv",
      "i, iii and iv only",
      "ii, iii and iv only"
    ],
    "correct": 0,
    "explanation": "Statement (iv) is INCORRECT — the specific epithet starts with a small letter, not a capital letter. NCERT says: 'The first word denoting the genus starts with a capital letter while the specific epithet starts with a small letter.' Statements i, ii and iii are correct."
  },
  {
    "id": 48,
    "topic": "Diversity in the Living World",
    "q": "In a biological name, both words when handwritten are:",
    "options": [
      "Jointly underlined",
      "Separately underlined",
      "Written in bold",
      "Written in CAPITALS"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Both the words in a biological name, when handwritten, are separately underlined, or printed in italics to indicate their Latin origin.' Jointly underlined is a very common student error."
  },
  {
    "id": 49,
    "topic": "Diversity in the Living World",
    "q": "In the scientific name <i>Mangifera indica</i> Linn., 'Linn.' indicates:",
    "options": [
      "The genus was described by Linnaeus",
      "The species was first described by Linnaeus",
      "The plant belongs to the family Linnaceae",
      "The nomenclature system was given by Linnaeus"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Mangifera indica Linn. It indicates that this species was first described by Linnaeus.' The author name appears after the specific epithet and refers to who first described the species."
  },
  {
    "id": 50,
    "topic": "Diversity in the Living World",
    "q": "The name of the author appears in a scientific name:",
    "options": [
      "Before the generic name",
      "Between the generic name and specific epithet",
      "After the specific epithet",
      "It is not included in the scientific name"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Name of the author appears after the specific epithet, i.e., at the end of the biological name and is written in an abbreviated form.'"
  },
  {
    "id": 51,
    "topic": "Diversity in the Living World",
    "q": "Which of the following is the <b>correct</b> way to write the scientific name of mango?",
    "options": [
      "Mangifera Indica",
      "mangifera indica",
      "Mangifera indica",
      "MANGIFERA INDICA"
    ],
    "correct": 2,
    "explanation": "NCERT rule: 'The first word denoting the genus starts with a capital letter while the specific epithet starts with a small letter.' So Mangifera (capital M) indica (small i) is correct."
  },
  {
    "id": 52,
    "topic": "Diversity in the Living World",
    "q": "Classification is the process by which anything is grouped into convenient categories based on:",
    "options": [
      "Evolutionary relationships",
      "Genetic makeup",
      "Some easily observable characters",
      "Geographical distribution"
    ],
    "correct": 2,
    "explanation": "NCERT defines: 'Classification is the process by which anything is grouped into convenient categories based on some easily observable characters.' Not evolutionary relationships or genetics."
  },
  {
    "id": 53,
    "topic": "Diversity in the Living World",
    "q": "The scientific term for categories used to study organisms is:",
    "options": [
      "Taxon",
      "Taxa",
      "Taxonomy",
      "Systematics"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The scientific term for these categories is taxa.' Taxa is the plural form. A single category is a taxon. Taxonomy is the process, not the category."
  },
  {
    "id": 54,
    "topic": "Diversity in the Living World",
    "q": "Which of the following correctly represents taxa at different levels?",
    "options": [
      "Animals, Mammals, Dogs — all represent taxa at the same level",
      "Animals, Mammals, Dogs — represent taxa at different levels",
      "Only 'Animals' can be considered as a taxon",
      "Only 'Dogs' can be considered as a taxon"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'animals', 'mammals' and 'dogs' represent taxa at different levels. A dog is a mammal and mammals are animals — showing hierarchical levels."
  },
  {
    "id": 55,
    "topic": "Diversity in the Living World",
    "q": "The process of classification of organisms into different taxa based on their characteristics is called:",
    "options": [
      "Nomenclature",
      "Identification",
      "Taxonomy",
      "Systematics"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Based on characteristics, all living organisms can be classified into different taxa. This process of classification is taxonomy.' Systematics is broader and includes evolutionary relationships."
  },
  {
    "id": 56,
    "topic": "Diversity in the Living World",
    "q": "Which of the following form the basis of modern taxonomic studies?<br>(i) External structure<br>(ii) Internal structure<br>(iii) Structure of cell<br>(iv) Development process<br>(v) Ecological information",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv only",
      "i, ii, iii, iv and v",
      "i and ii only"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'External and internal structure, along with the structure of cell, development process and ecological information of organisms are essential and form the basis of modern taxonomic studies.' All five are included."
  },
  {
    "id": 57,
    "topic": "Diversity in the Living World",
    "q": "The processes that are basic to taxonomy are:<br>(i) Characterisation<br>(ii) Identification<br>(iii) Classification<br>(iv) Nomenclature<br>(v) Evolution",
    "options": [
      "i, ii, iii and iv only",
      "i, ii, iii, iv and v",
      "ii, iii and iv only",
      "i, iii and iv only"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'Characterisation, identification, classification and nomenclature are the processes that are basic to taxonomy.' Evolution is NOT listed among these four basic processes."
  },
  {
    "id": 58,
    "topic": "Diversity in the Living World",
    "q": "The earliest classifications of organisms were based on:",
    "options": [
      "Morphological characters",
      "Evolutionary relationships",
      "Uses of various organisms",
      "Habitat of organisms"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Human beings needed to find sources for their basic needs of food, clothing and shelter. Hence, the earliest classifications were based on the uses of various organisms.'"
  },
  {
    "id": 59,
    "topic": "Diversity in the Living World",
    "q": "The word 'systematics' is derived from the Latin word:",
    "options": [
      "Systema meaning systematic arrangement of organisms",
      "Systemos meaning system of organisms",
      "Systematikos meaning orderly arrangement",
      "Systema meaning system of classification"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'The word systematics is derived from the Latin word 'systema' which means systematic arrangement of organisms.'"
  },
  {
    "id": 60,
    "topic": "Diversity in the Living World",
    "q": "Linnaeus used which title for his publication?",
    "options": [
      "Systema Plantarum",
      "Systema Naturae",
      "Species Plantarum",
      "Genera Plantarum"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Linnaeus used Systema Naturae as the title of his publication.' Species Plantarum is another work by Linnaeus but not mentioned in this context."
  },
  {
    "id": 61,
    "topic": "Diversity in the Living World",
    "q": "Systematics takes into account:",
    "options": [
      "Only morphological characters",
      "Only classification of organisms",
      "Evolutionary relationships between organisms",
      "Only nomenclature of organisms"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Systematics takes into account evolutionary relationships between organisms.' This distinguishes systematics from taxonomy which focuses more on classification."
  },
  {
    "id": 62,
    "topic": "Diversity in the Living World",
    "q": "<b>Assertion (A):</b> Local names of organisms create confusion in biological communication.<br><b>Reason (R):</b> Local names vary from place to place, even within a country.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both are true. NCERT mentions that local names vary from place to place, even within a country, which would create confusion — hence the need for standardized nomenclature. R correctly explains A."
  },
  {
    "id": 63,
    "topic": "Diversity in the Living World",
    "q": "<b>Assertion (A):</b> Scientific names ensure that each organism has only one name.<br><b>Reason (R):</b> Scientific names also ensure that a name has not been used for any other known organism.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both statements are directly from NCERT and both are true. The reason that a name hasn't been used for another organism is precisely what ensures each organism has only one unique name. R explains A."
  },
  {
    "id": 64,
    "topic": "Diversity in the Living World",
    "q": "<b>Assertion (A):</b> Taxonomy and Systematics are exactly the same in their scope.<br><b>Reason (R):</b> Systematics includes identification, nomenclature, classification and also considers evolutionary relationships.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — systematics is broader than taxonomy. Reason is TRUE — NCERT states: 'The scope of systematics was later enlarged to include identification, nomenclature and classification. Systematics takes into account evolutionary relationships between organisms.'"
  },
  {
    "id": 65,
    "topic": "Diversity in the Living World",
    "q": "<b>Assertion (A):</b> Biological names are Latinised irrespective of their origin.<br><b>Reason (R):</b> Latin was the language of educated Europeans during the development of taxonomy.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 1,
    "explanation": "Assertion is TRUE — NCERT says: 'They are Latinised or derived from Latin irrespective of their origin.' Reason is also TRUE (historically accurate), but NCERT does not explicitly state R as the reason for A. So R is not the NCERT-based explanation of A."
  },
  {
    "id": 66,
    "topic": "Diversity in the Living World",
    "q": "Select the <b>incorrect</b> statement regarding rules of nomenclature:",
    "options": [
      "Biological names are generally in Latin and written in italics",
      "The first word represents the genus and starts with a capital letter",
      "The second component denotes the specific epithet and starts with a capital letter",
      "Both words when handwritten are separately underlined"
    ],
    "correct": 2,
    "explanation": "Option C is INCORRECT — the specific epithet starts with a small letter, NOT a capital letter. NCERT rule: 'The first word denoting the genus starts with a capital letter while the specific epithet starts with a small letter.'"
  },
  {
    "id": 67,
    "topic": "Diversity in the Living World",
    "q": "Consider the following statements:<br>(A) ICBN provides rules for naming plants<br>(B) ICZN provides rules for naming animals<br>(C) Both codes ensure that each organism has more than one scientific name<br>(D) Both codes are internationally accepted",
    "options": [
      "A, B and D are correct",
      "A, B and C are correct",
      "A, C and D are correct",
      "All are correct"
    ],
    "correct": 0,
    "explanation": "Statement C is INCORRECT — the scientific names ensure that each organism has ONLY ONE name, not more than one. A, B and D are all correct as per NCERT."
  },
  {
    "id": 68,
    "topic": "Diversity in the Living World",
    "q": "Which of the following statements about taxa is <b>correct</b>?",
    "options": [
      "Taxa can indicate categories at only one level",
      "Taxa can indicate categories at very different levels",
      "Only species can be called a taxon",
      "Taxa is singular and taxon is plural"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'You must recognise that taxa can indicate categories at very different levels.' Plants, Wheat, Animals, Mammals, Dogs — all are taxa at different levels. Also, taxa is plural; taxon is singular (Option D reverses this)."
  },
  {
    "id": 69,
    "topic": "Diversity in the Living World",
    "q": "The two components of a binomial name are:",
    "options": [
      "Family name and Generic name",
      "Generic name and Specific epithet",
      "Order name and Species name",
      "Generic name and Author name"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Each name has two components – the Generic name and the specific epithet.' The author name appears after the binomial name but is not one of the two components."
  },
  {
    "id": 70,
    "topic": "Diversity in the Living World",
    "q": "The earliest classification by human beings was based on basic needs of:",
    "options": [
      "Food, water and shelter",
      "Food, clothing and shelter",
      "Food, clothing and medicine",
      "Food, shelter and transport"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Human beings needed to find sources for their basic needs of food, clothing and shelter.' Water, medicine and transport are NOT mentioned."
  },
  {
    "id": 71,
    "topic": "Diversity in the Living World",
    "q": "Which of the following correctly differentiates taxonomy from systematics?<br>(i) Taxonomy deals with classification of organisms into different taxa<br>(ii) Systematics takes into account evolutionary relationships<br>(iii) The scope of systematics is narrower than taxonomy",
    "options": [
      "i and ii only",
      "i and iii only",
      "ii and iii only",
      "i, ii and iii"
    ],
    "correct": 0,
    "explanation": "Statements (i) and (ii) are correct. Statement (iii) is INCORRECT — the scope of systematics is BROADER (not narrower) than taxonomy, as it also includes evolutionary relationships."
  },
  {
    "id": 72,
    "topic": "Diversity in the Living World",
    "q": "Consider the following:<br>(A) Description of any organism should enable people in any part of the world to arrive at the same name<br>(B) A scientific name given to one organism can be reused for another organism of a different group<br>Choose the correct option:",
    "options": [
      "Both A and B are correct",
      "Only A is correct",
      "Only B is correct",
      "Both A and B are incorrect"
    ],
    "correct": 1,
    "explanation": "Statement A is correct as stated in NCERT. Statement B is INCORRECT — NCERT says: 'They also ensure that such a name has not been used for any other known organism.' Scientific names are unique and cannot be reused."
  },
  {
    "id": 73,
    "topic": "Diversity in the Living World",
    "q": "The branch of study that deals with relationships among different kinds of organisms and their diversities is referred to as:",
    "options": [
      "Taxonomy",
      "Nomenclature",
      "Systematics",
      "Ecology"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Human beings were not only interested in knowing more about different kinds of organisms and their diversities, but also the relationships among them. This branch of study was referred to as systematics.'"
  },
  {
    "id": 74,
    "topic": "Diversity in the Living World",
    "q": "Select the <b>correct</b> sequence of processes basic to taxonomy:",
    "options": [
      "Nomenclature → Identification → Classification → Characterisation",
      "Characterisation → Identification → Classification → Nomenclature",
      "Classification → Characterisation → Nomenclature → Identification",
      "Identification → Characterisation → Nomenclature → Classification"
    ],
    "correct": 1,
    "explanation": "NCERT lists: 'Characterisation, identification, classification and nomenclature are the processes that are basic to taxonomy.' The logical sequence is: Characterise first → Identify → Classify → Name. This matches option B."
  },
  {
    "id": 75,
    "topic": "Diversity in the Living World",
    "q": "<b>Assertion (A):</b> As we explore new areas, new organisms are continuously being identified.<br><b>Reason (R):</b> The total number of species on earth has already been fully documented.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is TRUE — NCERT says: 'As we explore new areas, and even old ones, new organisms are continuously being identified.' Reason is FALSE — total species are NOT fully documented; only 1.7-1.8 million are known so far."
  },
  {
    "id": 76,
    "topic": "Diversity in the Living World",
    "q": "Which of the following statements is <b>incorrect</b> about biological names?",
    "options": [
      "They are generally in Latin",
      "They are Latinised or derived from Latin irrespective of their origin",
      "When printed, both words are written in bold",
      "When printed, both words are written in italics"
    ],
    "correct": 2,
    "explanation": "NCERT says biological names are 'printed in italics' not bold. When handwritten, they are separately underlined. Option C states 'written in bold' which is incorrect as per NCERT."
  },
  {
    "id": 77,
    "topic": "Diversity in the Living World",
    "q": "The scope of systematics was later enlarged to include:<br>(i) Identification<br>(ii) Nomenclature<br>(iii) Classification<br>(iv) Genetics",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv",
      "ii and iii only",
      "i and iv only"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'The scope of systematics was later enlarged to include identification, nomenclature and classification.' Genetics is NOT mentioned in this context."
  }
,
  {
    "id": 78,
    "topic": "Taxonomic Categories",
    "q": "Classification involves:",
    "options": [
      "A single step process",
      "A hierarchy of steps in which each step represents a rank or category",
      "Random grouping of organisms",
      "Only two steps — identification and naming"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Classification is not a single step process but involves hierarchy of steps in which each step represents a rank or category.' It is a multi-step hierarchical process."
  },
  {
    "id": 79,
    "topic": "Taxonomic Categories",
    "q": "All categories together constitute the:",
    "options": [
      "Taxonomic key",
      "Taxonomic aid",
      "Taxonomic hierarchy",
      "Taxonomic index"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'All categories together constitute the taxonomic hierarchy.' Each category is a part of the overall taxonomic arrangement."
  },
  {
    "id": 80,
    "topic": "Taxonomic Categories",
    "q": "Each category referred to as a unit of classification represents a rank and is commonly termed as:",
    "options": [
      "Taxa",
      "Taxon",
      "Taxonomy",
      "Taxonomic aid"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Each category, referred to as a unit of classification, in fact, represents a rank and is commonly termed as taxon (pl.: taxa).' Taxon is singular; taxa is plural."
  },
  {
    "id": 81,
    "topic": "Taxonomic Categories",
    "q": "Taxonomic groups/categories are:",
    "options": [
      "Merely morphological aggregates",
      "Distinct biological entities and not merely morphological aggregates",
      "Only theoretical concepts without real organisms",
      "Based solely on molecular data"
    ],
    "correct": 1,
    "explanation": "NCERT clearly states: 'These taxonomic groups/categories are distinct biological entities and not merely morphological aggregates.' This is a very important NCERT line for statement-based questions."
  },
  {
    "id": 82,
    "topic": "Taxonomic Categories",
    "q": "Insects are recognisable as a concrete group because they share common features like:",
    "options": [
      "Two pairs of jointed legs",
      "Three pairs of jointed legs",
      "Four pairs of jointed legs",
      "Five pairs of jointed legs"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Insects represent a group of organisms sharing common features like three pairs of jointed legs.' Three pairs = six legs, which is the defining feature of class Insecta."
  },
  {
    "id": 83,
    "topic": "Taxonomic Categories",
    "q": "The common taxonomic categories in the correct descending order are:",
    "options": [
      "Kingdom → Division → Class → Order → Family → Genus → Species",
      "Kingdom → Phylum → Order → Class → Family → Genus → Species",
      "Kingdom → Phylum/Division → Class → Order → Family → Genus → Species",
      "Kingdom → Class → Phylum → Order → Family → Genus → Species"
    ],
    "correct": 2,
    "explanation": "NCERT lists: kingdom, phylum or division (for plants), class, order, family, genus and species. The correct descending hierarchy is Kingdom → Phylum/Division → Class → Order → Family → Genus → Species. Option B reverses Order and Class."
  },
  {
    "id": 84,
    "topic": "Taxonomic Categories",
    "q": "For plants, the term used instead of phylum is:",
    "options": [
      "Class",
      "Order",
      "Division",
      "Section"
    ],
    "correct": 2,
    "explanation": "NCERT mentions: 'kingdom, phylum or division (for plants).' In plant taxonomy, 'Division' is used instead of 'Phylum' which is used for animals. This is a very commonly asked fact."
  },
  {
    "id": 85,
    "topic": "Taxonomic Categories",
    "q": "The lowest taxonomic category for all organisms including plants and animals is:",
    "options": [
      "Genus",
      "Family",
      "Species",
      "Variety"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'All organisms, including those in the plant and animal kingdoms have species as the lowest category.' Not genus, family, or variety."
  },
  {
    "id": 86,
    "topic": "Taxonomic Categories",
    "q": "The basic requirement to place an organism in various categories is:",
    "options": [
      "Knowledge of its habitat",
      "Knowledge of characters of an individual or group of organisms",
      "Knowledge of its evolutionary history",
      "Knowledge of its economic importance"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The basic requirement is the knowledge of characters of an individual or group of organisms. This helps in identifying similarities and dissimilarities.'"
  },
  {
    "id": 87,
    "topic": "Taxonomic Categories",
    "q": "Consider the following statements:<br>(i) Each rank or taxon represents a unit of classification<br>(ii) Category denotes rank<br>(iii) Groups represent category<br>(iv) Taxonomic categories are merely morphological aggregates<br>Which of the above are correct?",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv",
      "i and ii only",
      "ii, iii and iv only"
    ],
    "correct": 0,
    "explanation": "Statements i, ii and iii are directly from NCERT. Statement iv is INCORRECT — NCERT says they are 'distinct biological entities and NOT merely morphological aggregates.'"
  },
  {
    "id": 88,
    "topic": "Taxonomic Categories",
    "q": "<b>Assertion (A):</b> Classification is a single step process.<br><b>Reason (R):</b> Each step in classification represents a rank or category.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — NCERT clearly says 'Classification is NOT a single step process.' Reason is TRUE — each step does represent a rank or category."
  },
  {
    "id": 89,
    "topic": "Taxonomic Categories",
    "q": "Which of the following is the correct hierarchy from lowest to highest?",
    "options": [
      "Species → Genus → Family → Order → Class → Phylum → Kingdom",
      "Species → Family → Genus → Order → Class → Phylum → Kingdom",
      "Species → Genus → Order → Family → Class → Phylum → Kingdom",
      "Species → Genus → Family → Class → Order → Phylum → Kingdom"
    ],
    "correct": 0,
    "explanation": "The correct ascending order is: Species → Genus → Family → Order → Class → Phylum/Division → Kingdom. Options B, C and D jumble Family/Order or Order/Class positions."
  },
  {
    "id": 90,
    "topic": "Taxonomic Categories",
    "q": "The total number of obligate taxonomic categories from Kingdom to Species is:",
    "options": [
      "Five",
      "Six",
      "Seven",
      "Eight"
    ],
    "correct": 2,
    "explanation": "The seven obligate categories are: Kingdom, Phylum/Division, Class, Order, Family, Genus, Species = 7 categories. This is directly from the NCERT list."
  },
  {
    "id": 91,
    "topic": "Taxonomic Categories",
    "q": "<b>Assertion (A):</b> Taxonomic categories are distinct biological entities.<br><b>Reason (R):</b> Organisms placed in a taxonomic category share certain fundamental characteristics.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both are true. Taxonomic categories are distinct biological entities (NCERT exact line), and this is BECAUSE organisms in a category share fundamental characteristics. R correctly explains A."
  },
  {
    "id": 92,
    "topic": "Species",
    "q": "Taxonomic studies consider a group of individual organisms with _____ as a species.",
    "options": [
      "Similar habitat",
      "Fundamental similarities",
      "Identical DNA sequences",
      "Common ancestry only"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Taxonomic studies consider a group of individual organisms with fundamental similarities as a species.' Not identical DNA, habitat, or ancestry alone."
  },
  {
    "id": 93,
    "topic": "Species",
    "q": "One should be able to distinguish one species from another closely related species based on:",
    "options": [
      "Geographical distribution",
      "Distinct morphological differences",
      "Behavioural differences only",
      "Molecular differences only"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'One should be able to distinguish one species from the other closely related species based on the distinct morphological differences.'"
  },
  {
    "id": 94,
    "topic": "Species",
    "q": "Match the following organisms with their correct specific epithets:<br>(i) Mango - (a) tuberosum<br>(ii) Potato - (b) leo<br>(iii) Lion - (c) indica",
    "options": [
      "i-a, ii-b, iii-c",
      "i-c, ii-a, iii-b",
      "i-b, ii-c, iii-a",
      "i-c, ii-b, iii-a"
    ],
    "correct": 1,
    "explanation": "Mango = Mangifera indica (c), Potato = Solanum tuberosum (a), Lion = Panthera leo (b). These are directly given examples in NCERT."
  },
  {
    "id": 95,
    "topic": "Species",
    "q": "In the names <i>Mangifera indica</i>, <i>Solanum tuberosum</i> and <i>Panthera leo</i>, the first words represent:",
    "options": [
      "Specific epithets",
      "Species names",
      "Genera (another higher level of taxon)",
      "Family names"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The first words Mangifera, Solanum and Panthera are genera and represents another higher level of taxon or category.' They are generic names, not specific epithets."
  },
  {
    "id": 96,
    "topic": "Species",
    "q": "Each genus may have:",
    "options": [
      "Only one specific epithet",
      "One or more than one specific epithets representing different organisms",
      "Only two specific epithets",
      "No specific epithet"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Each genus may have one or more than one specific epithets representing different organisms, but having morphological similarities.'"
  },
  {
    "id": 97,
    "topic": "Species",
    "q": "<i>Panthera</i> has another specific epithet called:",
    "options": [
      "pardus",
      "tigris",
      "leo",
      "domestica"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Panthera has another specific epithet called tigris.' So Panthera leo (lion) and Panthera tigris (tiger) are two species of genus Panthera. Pardus is mentioned later under Genus topic."
  },
  {
    "id": 98,
    "topic": "Species",
    "q": "<i>Solanum</i> includes species like:",
    "options": [
      "nigrum and melongena",
      "indica and tuberosum",
      "leo and tigris",
      "sapiens and erectus"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'Solanum includes species like nigrum and melongena.' Solanum nigrum (black nightshade) and Solanum melongena (brinjal) are species of genus Solanum along with S. tuberosum (potato)."
  },
  {
    "id": 99,
    "topic": "Species",
    "q": "Human beings belong to the species _____ which is grouped in the genus _____.",
    "options": [
      "sapiens; Homo",
      "Homo; sapiens",
      "erectus; Homo",
      "sapiens; Panthera"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'Human beings belong to the species sapiens which is grouped in the genus Homo. The scientific name thus, for human being, is written as Homo sapiens.'"
  },
  {
    "id": 100,
    "topic": "Species",
    "q": "Consider the following:<br>(A) indica is the specific epithet of mango<br>(B) tuberosum is the genus of potato<br>(C) Panthera is the genus of lion<br>(D) Homo is the specific epithet of human beings<br>Which are correct?",
    "options": [
      "A and C only",
      "A, B and C",
      "B and D only",
      "A, C and D"
    ],
    "correct": 0,
    "explanation": "A is correct (indica = specific epithet of mango). B is INCORRECT (tuberosum is the specific epithet, not genus; Solanum is the genus). C is correct (Panthera = genus of lion). D is INCORRECT (Homo is the genus, not specific epithet; sapiens is the specific epithet)."
  },
  {
    "id": 101,
    "topic": "Species",
    "q": "The organisms within a genus have different specific epithets but share:",
    "options": [
      "Identical morphology",
      "Morphological similarities",
      "Same specific epithet",
      "Same habitat"
    ],
    "correct": 1,
    "explanation": "NCERT states organisms in a genus have 'one or more than one specific epithets representing different organisms, but having morphological similarities.' They share similarities, not identical morphology."
  },
  {
    "id": 102,
    "topic": "Species",
    "q": "<b>Assertion (A):</b> Species is the lowest taxonomic category.<br><b>Reason (R):</b> A species is a group of individual organisms with fundamental similarities.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 1,
    "explanation": "Both A and R are true. Species IS the lowest category (NCERT line), and species IS defined by fundamental similarities. However, the reason it is the 'lowest' category is because of the hierarchy, not merely because of fundamental similarities. R does not directly explain why it is the lowest."
  },
  {
    "id": 103,
    "topic": "Genus",
    "q": "Genus comprises a group of:",
    "options": [
      "Related families",
      "Related orders",
      "Related species which has more characters in common compared to species of other genera",
      "Related classes"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Genus comprises a group of related species which has more characters in common in comparison to species of other genera.' Genera are aggregates of closely related species."
  },
  {
    "id": 104,
    "topic": "Genus",
    "q": "Genera can be defined as:",
    "options": [
      "Aggregates of closely related families",
      "Aggregates of closely related species",
      "Aggregates of closely related orders",
      "Aggregates of closely related kingdoms"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'We can say that genera are aggregates of closely related species.' This is a precise and frequently tested definition."
  },
  {
    "id": 105,
    "topic": "Genus",
    "q": "Potato and brinjal are two different species but both belong to the genus:",
    "options": [
      "Panthera",
      "Mangifera",
      "Solanum",
      "Felis"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Potato and brinjal are two different species but both belong to the genus Solanum.' Potato = Solanum tuberosum, Brinjal = Solanum melongena."
  },
  {
    "id": 106,
    "topic": "Genus",
    "q": "Which of the following are species of the genus <i>Panthera</i>?<br>(i) Lion<br>(ii) Leopard<br>(iii) Tiger<br>(iv) Cat",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv",
      "i and iii only",
      "i, iii and iv only"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'Lion (Panthera leo), leopard (P. pardus) and tiger (P. tigris)...are all species of the genus Panthera.' Cat belongs to genus Felis, NOT Panthera."
  },
  {
    "id": 107,
    "topic": "Genus",
    "q": "Match the following species with their scientific names:<br>(i) Lion - (a) P. tigris<br>(ii) Leopard - (b) P. leo<br>(iii) Tiger - (c) P. pardus",
    "options": [
      "i-b, ii-c, iii-a",
      "i-a, ii-b, iii-c",
      "i-c, ii-a, iii-b",
      "i-b, ii-a, iii-c"
    ],
    "correct": 0,
    "explanation": "Lion = Panthera leo (b), Leopard = P. pardus (c), Tiger = P. tigris (a). This is directly stated in NCERT and frequently asked in NEET."
  },
  {
    "id": 108,
    "topic": "Genus",
    "q": "The genus <i>Panthera</i> differs from the genus <i>Felis</i>. <i>Felis</i> includes:",
    "options": [
      "Lions",
      "Tigers",
      "Cats",
      "Leopards"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'This genus (Panthera) differs from another genus Felis which includes cats.' Lions, tigers, and leopards belong to Panthera, not Felis."
  },
  {
    "id": 109,
    "topic": "Genus",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Panthera leo – Lion",
      "Panthera pardus – Leopard",
      "Panthera tigris – Tiger",
      "Panthera domestica – Cat"
    ],
    "correct": 3,
    "explanation": "Cat belongs to genus Felis, NOT Panthera. NCERT clearly states: 'This genus differs from another genus Felis which includes cats.' So Panthera domestica is an incorrect combination."
  },
  {
    "id": 110,
    "topic": "Genus",
    "q": "Consider the following statements:<br>(A) Species of the same genus have more characters in common than species of other genera<br>(B) Potato and brinjal belong to different genera<br>(C) Lion and cat belong to the same genus<br>Which of the above is/are correct?",
    "options": [
      "A only",
      "A and B only",
      "B and C only",
      "A, B and C"
    ],
    "correct": 0,
    "explanation": "Only A is correct — this is the NCERT definition of genus. B is INCORRECT (both potato and brinjal belong to genus Solanum). C is INCORRECT (lion = Panthera, cat = Felis — different genera)."
  },
  {
    "id": 111,
    "topic": "Genus",
    "q": "<b>Assertion (A):</b> Lion and tiger are placed in the same genus <i>Panthera</i>.<br><b>Reason (R):</b> They share several common features and have more characters in common compared to cat.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both are true. Lion (P. leo) and tiger (P. tigris) are in genus Panthera because they share several common features (NCERT line). Cat is in genus Felis because it differs from Panthera. R correctly explains why they are in the same genus."
  },
  {
    "id": 112,
    "topic": "Genus",
    "q": "<b>Assertion (A):</b> Cat belongs to the genus <i>Panthera</i>.<br><b>Reason (R):</b> <i>Felis</i> is a different genus from <i>Panthera</i>.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — cat belongs to genus Felis, NOT Panthera. Reason is TRUE — NCERT states Felis is a different genus from Panthera. The Reason actually disproves the Assertion."
  },
  {
    "id": 113,
    "topic": "Species",
    "q": "Select the <b>correct</b> statement:",
    "options": [
      "Solanum tuberosum and Solanum melongena belong to different genera",
      "Panthera leo and Felis domestica belong to the same genus",
      "Mangifera indica and Solanum tuberosum belong to different genera",
      "Homo sapiens and Panthera tigris belong to the same genus"
    ],
    "correct": 2,
    "explanation": "Mangifera (mango) and Solanum (potato) are indeed different genera. Option A is wrong — both Solanum species belong to the SAME genus. Option B is wrong — Panthera and Felis are different genera. Option D is wrong — Homo and Panthera are different genera."
  },
  {
    "id": 114,
    "topic": "Taxonomic Categories",
    "q": "Which of the following represents the correct descending order of taxonomic hierarchy?",
    "options": [
      "Kingdom → Phylum → Class → Family → Order → Genus → Species",
      "Kingdom → Phylum → Class → Order → Genus → Family → Species",
      "Kingdom → Phylum → Class → Order → Family → Genus → Species",
      "Kingdom → Phylum → Order → Class → Family → Genus → Species"
    ],
    "correct": 2,
    "explanation": "NCERT lists: Kingdom, Phylum/Division, Class, Order, Family, Genus, Species. A common trap is reversing Order and Family or Class and Order. Only option C has the correct sequence."
  },
  {
    "id": 115,
    "topic": "Taxonomic Categories",
    "q": "Consider the following mnemonic-related sequence:<br>King Philip Came Over For Good Spaghetti<br>This represents:",
    "options": [
      "Kingdom, Phylum, Class, Order, Family, Genus, Species",
      "Kingdom, Phylum, Community, Order, Family, Genus, Species",
      "Kingdom, Phylum, Class, Order, Form, Genus, Species",
      "Kingdom, Phylum, Class, Organism, Family, Genus, Species"
    ],
    "correct": 0,
    "explanation": "The mnemonic represents the seven taxonomic categories in descending order: Kingdom, Phylum, Class, Order, Family, Genus, Species — exactly as listed in NCERT."
  },
  {
    "id": 116,
    "topic": "Species",
    "q": "How many species of genus <i>Solanum</i> are mentioned in the NCERT text?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 2,
    "explanation": "NCERT mentions three species of Solanum: tuberosum (potato), nigrum, and melongena (brinjal). Students often miss Solanum nigrum mentioned in the text."
  },
  {
    "id": 117,
    "topic": "Taxonomic Categories",
    "q": "Select the <b>incorrect</b> statement regarding taxonomic categories:",
    "options": [
      "Each category is a part of overall taxonomic arrangement",
      "All categories together constitute the taxonomic hierarchy",
      "Species is the highest taxonomic category",
      "Each category represents a rank commonly termed as taxon"
    ],
    "correct": 2,
    "explanation": "Species is the LOWEST taxonomic category, not the highest. NCERT states: 'All organisms have species as the lowest category.' Kingdom is the highest. Options A, B and D are all correct statements from NCERT."
  },
  {
    "id": 118,
    "topic": "Genus",
    "q": "Which of the following pairs of organisms belong to the <b>same genus</b>?",
    "options": [
      "Lion and Cat",
      "Potato and Mango",
      "Tiger and Leopard",
      "Human and Lion"
    ],
    "correct": 2,
    "explanation": "Tiger (Panthera tigris) and Leopard (Panthera pardus) both belong to genus Panthera. Lion and Cat = Panthera and Felis (different). Potato and Mango = Solanum and Mangifera (different). Human and Lion = Homo and Panthera (different)."
  },
  {
    "id": 119,
    "topic": "Species",
    "q": "Consider the following:<br>(i) <i>indica</i> is a specific epithet<br>(ii) <i>tuberosum</i> is a specific epithet<br>(iii) <i>leo</i> is a generic name<br>(iv) <i>Panthera</i> is a specific epithet<br>Which are correct?",
    "options": [
      "i and ii only",
      "i, ii and iii",
      "i, ii, iii and iv",
      "iii and iv only"
    ],
    "correct": 0,
    "explanation": "Only (i) and (ii) are correct — indica and tuberosum are specific epithets. (iii) is WRONG — leo is a specific epithet, not a generic name. (iv) is WRONG — Panthera is a generic name (genus), not a specific epithet."
  },
  {
    "id": 120,
    "topic": "Taxonomic Categories",
    "q": "<b>Assertion (A):</b> In plant taxonomy, the term 'Division' is used instead of 'Phylum'.<br><b>Reason (R):</b> Plants and animals follow different nomenclature codes (ICBN and ICZN respectively).",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 1,
    "explanation": "Both A and R are true. NCERT says 'phylum or division (for plants)' and ICBN/ICZN are separate codes. However, the existence of separate codes is not the direct reason why 'Division' is used — it's a traditional convention. R does not directly explain A."
  },
  {
    "id": 121,
    "topic": "Species",
    "q": "The scientific name of human being is correctly written as:",
    "options": [
      "homo sapiens",
      "Homo Sapiens",
      "Homo sapiens",
      "HOMO SAPIENS"
    ],
    "correct": 2,
    "explanation": "As per nomenclature rules stated in NCERT: genus starts with capital letter, specific epithet starts with small letter. So Homo (capital H) sapiens (small s) is correct. NCERT confirms: 'Homo sapiens.'"
  },
  {
    "id": 122,
    "topic": "Genus",
    "q": "Which of the following genera and their included organisms is <b>correctly</b> matched?<br>(i) Solanum — Potato, Brinjal<br>(ii) Panthera — Lion, Tiger, Leopard<br>(iii) Felis — Cat<br>(iv) Mangifera — Potato, Mango",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv",
      "ii and iii only",
      "i and iv only"
    ],
    "correct": 0,
    "explanation": "Statements i, ii and iii are all correctly matched as per NCERT. Statement iv is INCORRECT — Mangifera includes mango (Mangifera indica), NOT potato. Potato belongs to Solanum."
  },
  {
    "id": 123,
    "topic": "Taxonomic Categories",
    "q": "Knowledge of characters of an individual or group of organisms helps in identifying:",
    "options": [
      "Only similarities among organisms of the same kind",
      "Only dissimilarities among organisms of different kinds",
      "Similarities and dissimilarities among individuals of the same kind as well as of other kinds",
      "Only the habitat of organisms"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'This helps in identifying similarities and dissimilarities among the individuals of the same kind of organisms as well as of other kinds of organisms.' Both similarities AND dissimilarities, among same AND different kinds."
  }
,
  {
    "id": 124,
    "topic": "Family",
    "q": "Family has a group of related genera with:",
    "options": [
      "More similarities as compared to genus and species",
      "Still less number of similarities as compared to genus and species",
      "Same number of similarities as genus",
      "No similarities at all"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Family, has a group of related genera with still less number of similarities as compared to genus and species.' As we go higher in hierarchy, similarities decrease."
  },
  {
    "id": 125,
    "topic": "Family",
    "q": "Among plants, families are characterised on the basis of:",
    "options": [
      "Only vegetative features",
      "Only reproductive features",
      "Both vegetative and reproductive features",
      "Only molecular features"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Families are characterised on the basis of both vegetative and reproductive features of plant species.' Not one or the other alone."
  },
  {
    "id": 126,
    "topic": "Family",
    "q": "Which of the following genera are placed in the family Solanaceae?<br>(i) Solanum<br>(ii) Petunia<br>(iii) Datura<br>(iv) Mangifera",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv",
      "i and iii only",
      "i and ii only"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'Three different genera Solanum, Petunia and Datura are placed in the family Solanaceae.' Mangifera is NOT mentioned under Solanaceae."
  },
  {
    "id": 127,
    "topic": "Family",
    "q": "Genus <i>Panthera</i> and genus <i>Felis</i> are both placed in the family:",
    "options": [
      "Canidae",
      "Hominidae",
      "Felidae",
      "Solanaceae"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Genus Panthera, comprising lion, tiger leopard is put along with genus, Felis (cats) in the family Felidae.' Both big cats and small cats belong to Felidae."
  },
  {
    "id": 128,
    "topic": "Family",
    "q": "Cat and dog are separated into two different families. These are:",
    "options": [
      "Felidae and Hominidae respectively",
      "Canidae and Felidae respectively",
      "Felidae and Canidae respectively",
      "Panthera and Felis respectively"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'They are separated into two different families – Felidae and Canidae, respectively.' Cat = Felidae, Dog = Canidae. Option B reverses the order. Panthera and Felis are genera, not families."
  },
  {
    "id": 129,
    "topic": "Family",
    "q": "Consider the following statements:<br>(A) Solanum, Petunia and Datura belong to family Solanaceae<br>(B) Panthera and Felis belong to different families<br>(C) Cat belongs to family Felidae and dog to family Canidae<br>Which of the above is/are correct?",
    "options": [
      "A and B only",
      "B and C only",
      "A and C only",
      "A, B and C"
    ],
    "correct": 2,
    "explanation": "A is correct (NCERT exact line). B is INCORRECT — NCERT says both Panthera AND Felis are placed in family Felidae, not different families. C is correct (NCERT exact line). So A and C only."
  },
  {
    "id": 130,
    "topic": "Family",
    "q": "<b>Assertion (A):</b> Genus <i>Panthera</i> and genus <i>Felis</i> belong to different families.<br><b>Reason (R):</b> Lion and cat show both similarities and differences.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — both Panthera and Felis belong to the SAME family Felidae. Reason is TRUE — NCERT mentions that cat and dog show similarities and differences. But it is cat and DOG that are in different families, not Panthera and Felis."
  },
  {
    "id": 131,
    "topic": "Family",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Solanum – Solanaceae",
      "Petunia – Solanaceae",
      "Datura – Solanaceae",
      "Panthera – Canidae"
    ],
    "correct": 3,
    "explanation": "Panthera belongs to family Felidae, NOT Canidae. NCERT states: 'genus Panthera...is put along with genus Felis (cats) in the family Felidae.' Canidae includes dogs."
  },
  {
    "id": 132,
    "topic": "Family",
    "q": "If you observe the features of a cat and a dog, you will find:",
    "options": [
      "Only similarities",
      "Only differences",
      "Some similarities and some differences",
      "No observable features in common"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'If you observe the features of a cat and a dog, you will find some similarities and some differences as well.' That's why they are in the same order (Carnivora) but different families (Felidae & Canidae)."
  },
  {
    "id": 133,
    "topic": "Order",
    "q": "Order is the assemblage of:",
    "options": [
      "Related species",
      "Related genera",
      "Related families which exhibit a few similar characters",
      "Related classes"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Order being a higher category, is the assemblage of families which exhibit a few similar characters.' Order groups related families, not species, genera, or classes."
  },
  {
    "id": 134,
    "topic": "Order",
    "q": "Generally, order and other higher taxonomic categories are identified based on:",
    "options": [
      "A single unique character",
      "Aggregates of characters",
      "Only molecular characters",
      "Only reproductive characters"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Generally, order and other higher taxonomic categories are identified based on the aggregates of characters.' Not a single character or only molecular/reproductive characters."
  },
  {
    "id": 135,
    "topic": "Order",
    "q": "Plant families Convolvulaceae and Solanaceae are included in the order:",
    "options": [
      "Carnivora",
      "Primata",
      "Polymoniales",
      "Rosales"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Plant families like Convolvulaceae, Solanaceae are included in the order Polymoniales mainly based on the floral characters.' Carnivora and Primata are animal orders."
  },
  {
    "id": 136,
    "topic": "Order",
    "q": "The plant families Convolvulaceae and Solanaceae are placed in the same order mainly based on:",
    "options": [
      "Vegetative characters",
      "Root characters",
      "Floral characters",
      "Seed characters"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Plant families like Convolvulaceae, Solanaceae are included in the order Polymoniales mainly based on the floral characters.' Floral characters are the primary basis."
  },
  {
    "id": 137,
    "topic": "Order",
    "q": "The animal order Carnivora includes which of the following families?",
    "options": [
      "Felidae and Hominidae",
      "Felidae and Canidae",
      "Canidae and Hominidae",
      "Felidae only"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The animal order, Carnivora, includes families like Felidae and Canidae.' Hominidae is NOT mentioned under Carnivora — it belongs to order Primata."
  },
  {
    "id": 138,
    "topic": "Order",
    "q": "In the order, the number of similar characters is _____ as compared to different genera included in a family.",
    "options": [
      "More",
      "Equal",
      "Less",
      "Always zero"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The similar characters are less in number as compared to different genera included in a family.' As we move from family to order, common characters decrease."
  },
  {
    "id": 139,
    "topic": "Order",
    "q": "Consider the following:<br>(i) Order groups related families<br>(ii) Polymoniales is a plant order<br>(iii) Carnivora includes only family Felidae<br>(iv) Higher categories are identified based on aggregates of characters<br>Which are correct?",
    "options": [
      "i, ii and iv only",
      "i, ii, iii and iv",
      "i and ii only",
      "ii, iii and iv only"
    ],
    "correct": 0,
    "explanation": "Statements i, ii and iv are correct per NCERT. Statement iii is INCORRECT — Carnivora includes BOTH Felidae AND Canidae, not only Felidae."
  },
  {
    "id": 140,
    "topic": "Order",
    "q": "<b>Assertion (A):</b> Convolvulaceae and Solanaceae are placed in the same order.<br><b>Reason (R):</b> Both families show similar floral characters.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both are true. NCERT states these families are included in order Polymoniales 'mainly based on the floral characters.' The floral similarity (R) is the reason they are placed together (A). R correctly explains A."
  },
  {
    "id": 141,
    "topic": "Class",
    "q": "The category 'Class' includes:",
    "options": [
      "Related species",
      "Related genera",
      "Related families",
      "Related orders"
    ],
    "correct": 3,
    "explanation": "NCERT states: 'This category includes related orders.' Class groups related orders — for example, class Mammalia includes order Primata and order Carnivora."
  },
  {
    "id": 142,
    "topic": "Class",
    "q": "Order Primata comprises:",
    "options": [
      "Tiger, cat and dog",
      "Monkey, gorilla and gibbon",
      "Lion, tiger and leopard",
      "Fishes, amphibians and reptiles"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Order Primata comprising monkey, gorilla and gibbon.' Tiger, cat and dog belong to order Carnivora."
  },
  {
    "id": 143,
    "topic": "Class",
    "q": "Order Primata and order Carnivora are both placed in:",
    "options": [
      "Phylum Chordata",
      "Class Mammalia",
      "Family Felidae",
      "Kingdom Animalia"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Order Primata...is placed in class Mammalia along with order Carnivora.' Both are orders within class Mammalia."
  },
  {
    "id": 144,
    "topic": "Class",
    "q": "Order Carnivora includes animals like:",
    "options": [
      "Monkey, gorilla and gibbon",
      "Tiger, cat and dog",
      "Fishes, amphibians and reptiles",
      "Only lion and tiger"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Order Carnivora that includes animals like tiger, cat and dog.' Monkey, gorilla and gibbon belong to order Primata."
  },
  {
    "id": 145,
    "topic": "Class",
    "q": "Consider the following statements:<br>(A) Order Primata includes monkey, gorilla and gibbon<br>(B) Order Carnivora includes tiger, cat and dog<br>(C) Both orders are placed in class Mammalia<br>(D) Class Mammalia has only two orders",
    "options": [
      "A, B and C only",
      "A, B, C and D",
      "A and B only",
      "B, C and D only"
    ],
    "correct": 0,
    "explanation": "A, B and C are all correct per NCERT. D is INCORRECT — NCERT states: 'Class Mammalia has other orders also.' So it has MORE than just Primata and Carnivora."
  },
  {
    "id": 146,
    "topic": "Class",
    "q": "<b>Assertion (A):</b> Class Mammalia has only two orders — Primata and Carnivora.<br><b>Reason (R):</b> NCERT mentions only these two orders under Mammalia.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 3,
    "explanation": "Both are FALSE. NCERT explicitly says: 'Class Mammalia has other orders also.' So Mammalia has MORE than two orders. The text mentions only two as examples, not as the only orders."
  },
  {
    "id": 147,
    "topic": "Class",
    "q": "Which of the following is <b>incorrectly</b> placed?",
    "options": [
      "Monkey → Order Primata",
      "Gorilla → Order Primata",
      "Dog → Order Primata",
      "Tiger → Order Carnivora"
    ],
    "correct": 2,
    "explanation": "Dog belongs to order Carnivora, NOT Primata. NCERT says: 'Order Primata comprising monkey, gorilla and gibbon' and 'order Carnivora that includes animals like tiger, cat and dog.'"
  },
  {
    "id": 148,
    "topic": "Phylum",
    "q": "Classes comprising animals like fishes, amphibians, reptiles, birds and mammals constitute the category called:",
    "options": [
      "Order",
      "Family",
      "Phylum",
      "Division"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Classes comprising animals like fishes, amphibians, reptiles, birds along with mammals constitute the next higher category called Phylum.' Division is used for plants."
  },
  {
    "id": 149,
    "topic": "Phylum",
    "q": "Fishes, amphibians, reptiles, birds and mammals are all included in phylum Chordata based on common features like:",
    "options": [
      "Presence of vertebral column and lungs",
      "Presence of notochord and dorsal hollow neural system",
      "Presence of exoskeleton and jointed appendages",
      "Presence of mammary glands and hair"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'All these, based on the common features like presence of notochord and dorsal hollow neural system, are included in phylum Chordata.' Not vertebral column/lungs (not all chordates have these)."
  },
  {
    "id": 150,
    "topic": "Phylum",
    "q": "In case of plants, classes with a few similar characters are assigned to a higher category called:",
    "options": [
      "Phylum",
      "Division",
      "Order",
      "Kingdom"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'In case of plants, classes with a few similar characters are assigned to a higher category called Division.' Phylum is used for animals; Division is the plant equivalent."
  },
  {
    "id": 151,
    "topic": "Phylum",
    "q": "Which of the following is <b>NOT</b> mentioned in NCERT as a class comprising phylum Chordata?",
    "options": [
      "Fishes",
      "Amphibians",
      "Insects",
      "Birds"
    ],
    "correct": 2,
    "explanation": "NCERT mentions: fishes, amphibians, reptiles, birds and mammals under phylum Chordata. Insects are NOT chordates — they belong to phylum Arthropoda."
  },
  {
    "id": 152,
    "topic": "Phylum",
    "q": "Consider the following statements about Phylum Chordata:<br>(i) It includes fishes, amphibians, reptiles, birds and mammals<br>(ii) Common feature is presence of notochord<br>(iii) Common feature is dorsal hollow neural system<br>(iv) Common feature is presence of mammary glands",
    "options": [
      "i, ii and iii only",
      "i, ii, iii and iv",
      "i and iv only",
      "ii and iii only"
    ],
    "correct": 0,
    "explanation": "Statements i, ii and iii are correct per NCERT. Statement iv is INCORRECT — mammary glands are a feature of class Mammalia only, not of all chordates. Fishes, amphibians, reptiles and birds lack mammary glands."
  },
  {
    "id": 153,
    "topic": "Phylum",
    "q": "<b>Assertion (A):</b> The term 'Division' is used for plants instead of 'Phylum'.<br><b>Reason (R):</b> In plants, classes with a few similar characters are grouped into a higher category called Division.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both are true and R directly explains A. NCERT states: 'In case of plants, classes with a few similar characters are assigned to a higher category called Division.' This is why Division is the plant equivalent of Phylum."
  },
  {
    "id": 154,
    "topic": "Kingdom",
    "q": "The highest category in the classification system of animals is:",
    "options": [
      "Phylum",
      "Class",
      "Kingdom Animalia",
      "Division"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'All animals belonging to various phyla are assigned to the highest category called Kingdom Animalia.' Kingdom is the highest (broadest) taxonomic category."
  },
  {
    "id": 155,
    "topic": "Kingdom",
    "q": "Kingdom Plantae comprises:",
    "options": [
      "All plants from various phyla",
      "All plants from various divisions",
      "Only flowering plants",
      "Only seed-bearing plants"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The Kingdom Plantae, on the other hand, is distinct, and comprises all plants from various divisions.' For plants, the term 'division' is used, not 'phyla.'"
  },
  {
    "id": 156,
    "topic": "Kingdom",
    "q": "As we go higher from species to kingdom, the number of common characteristics:",
    "options": [
      "Goes on increasing",
      "Remains constant",
      "Goes on decreasing",
      "First increases then decreases"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'As we go higher from species to kingdom, the number of common characteristics goes on decreasing.' This is a fundamental concept of taxonomic hierarchy."
  },
  {
    "id": 157,
    "topic": "Kingdom",
    "q": "Lower the taxa:",
    "options": [
      "Fewer are the characteristics that members within the taxon share",
      "More are the characteristics that the members within the taxon share",
      "Greater is the difficulty of determining relationships",
      "More complex is the classification"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Lower the taxa, more are the characteristics that the members within the taxon share.' Species (lowest) members share the most characters; Kingdom (highest) members share the fewest."
  },
  {
    "id": 158,
    "topic": "Kingdom",
    "q": "Higher the category:",
    "options": [
      "Easier is the determination of relationships to other taxa at the same level",
      "Greater is the difficulty of determining the relationship to other taxa at the same level",
      "More are the common characteristics shared",
      "Simpler is the classification"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Higher the category, greater is the difficulty of determining the relationship to other taxa at the same level. Hence, the problem of classification becomes more complex.'"
  },
  {
    "id": 159,
    "topic": "Kingdom",
    "q": "Taxonomists have developed sub-categories in the hierarchy to facilitate:",
    "options": [
      "Easy memorization of organisms",
      "More sound and scientific placement of various taxa",
      "Reduction in the number of species",
      "Simplification of kingdom-level grouping"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Taxonomists have also developed sub-categories in this hierarchy to facilitate more sound and scientific placement of various taxa.' Sub-categories provide finer classification."
  },
  {
    "id": 160,
    "topic": "Kingdom",
    "q": "Consider the following statements:<br>(i) Species to Kingdom is the ascending order of taxonomic hierarchy<br>(ii) Common characteristics increase from species to kingdom<br>(iii) Problem of classification becomes more complex at higher categories<br>Which of the above is/are correct?",
    "options": [
      "i and ii only",
      "i and iii only",
      "ii and iii only",
      "i, ii and iii"
    ],
    "correct": 1,
    "explanation": "Statement i is correct — Species to Kingdom IS ascending order (NCERT exact). Statement ii is INCORRECT — common characteristics DECREASE from species to kingdom, not increase. Statement iii is correct (NCERT exact line)."
  },
  {
    "id": 161,
    "topic": "Kingdom",
    "q": "<b>Assertion (A):</b> As we move from species to kingdom, the number of common characteristics increases.<br><b>Reason (R):</b> Kingdom is the highest and broadest category in taxonomy.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — common characteristics DECREASE from species to kingdom, not increase. Reason is TRUE — Kingdom IS the highest and broadest category. This is one of the most common student traps."
  },
  {
    "id": 162,
    "topic": "Family",
    "q": "Which of the following represents the correct relationship?",
    "options": [
      "Family Felidae includes genus Panthera only",
      "Family Felidae includes genus Panthera and genus Felis",
      "Family Canidae includes genus Panthera and genus Felis",
      "Family Felidae includes genus Panthera and genus Canis"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Genus Panthera...is put along with genus, Felis (cats) in the family Felidae.' Both Panthera (big cats) and Felis (small cats) are in Felidae. Canidae is for dogs."
  },
  {
    "id": 163,
    "topic": "Order",
    "q": "Which of the following pairs of families belongs to the order Carnivora?",
    "options": [
      "Solanaceae and Convolvulaceae",
      "Felidae and Canidae",
      "Felidae and Hominidae",
      "Canidae and Solanaceae"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The animal order, Carnivora, includes families like Felidae and Canidae.' Solanaceae and Convolvulaceae are plant families (order Polymoniales). Hominidae is not mentioned under Carnivora."
  },
  {
    "id": 164,
    "topic": "Family, Order, Class - Integrated",
    "q": "Arrange the following in correct hierarchical ascending order:<br>Felidae → Carnivora → Mammalia → Chordata → Animalia",
    "options": [
      "Family → Order → Class → Phylum → Kingdom",
      "Order → Family → Class → Phylum → Kingdom",
      "Family → Class → Order → Phylum → Kingdom",
      "Family → Order → Phylum → Class → Kingdom"
    ],
    "correct": 0,
    "explanation": "Felidae = Family, Carnivora = Order, Mammalia = Class, Chordata = Phylum, Animalia = Kingdom. The correct ascending hierarchy is: Family → Order → Class → Phylum → Kingdom."
  },
  {
    "id": 165,
    "topic": "Family, Order, Class - Integrated",
    "q": "Consider the complete classification chain: <i>Panthera leo</i> (Lion)<br>Which of the following is the correct hierarchy?",
    "options": [
      "Species leo → Genus Panthera → Family Canidae → Order Carnivora → Class Mammalia",
      "Species leo → Genus Panthera → Family Felidae → Order Carnivora → Class Mammalia",
      "Species leo → Genus Panthera → Family Felidae → Order Primata → Class Mammalia",
      "Species leo → Genus Felis → Family Felidae → Order Carnivora → Class Mammalia"
    ],
    "correct": 1,
    "explanation": "Lion = Panthera leo → Genus Panthera → Family Felidae → Order Carnivora → Class Mammalia. Option A has wrong family (Canidae). Option C has wrong order (Primata). Option D has wrong genus (Felis is for cats)."
  },
  {
    "id": 166,
    "topic": "Family, Order, Class - Integrated",
    "q": "Which of the following organisms does NOT belong to order Carnivora?",
    "options": [
      "Tiger",
      "Cat",
      "Dog",
      "Gorilla"
    ],
    "correct": 3,
    "explanation": "NCERT says order Carnivora includes tiger, cat and dog. Gorilla belongs to order Primata (along with monkey and gibbon). This is a frequently asked NEET trap."
  },
  {
    "id": 167,
    "topic": "Family, Order, Class - Integrated",
    "q": "<b>Assertion (A):</b> Cat and dog belong to the same order but different families.<br><b>Reason (R):</b> Cat belongs to family Felidae and dog to family Canidae, but both are placed in order Carnivora.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both are true and R correctly explains A. Cat (Felidae) and Dog (Canidae) are different families but both under order Carnivora (NCERT exact lines). R provides the specific classification that supports A."
  },
  {
    "id": 168,
    "topic": "Phylum & Kingdom - Integrated",
    "q": "<b>Assertion (A):</b> Kingdom Plantae comprises all plants from various phyla.<br><b>Reason (R):</b> In plant classification, the term 'Division' is used instead of 'Phylum'.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — NCERT says Kingdom Plantae comprises all plants from various DIVISIONS, not phyla. Reason is TRUE — Division is the plant equivalent of Phylum. The Reason actually corrects the Assertion."
  },
  {
    "id": 169,
    "topic": "Kingdom",
    "q": "Select the <b>correct</b> statement regarding taxonomic hierarchy:",
    "options": [
      "Members of a kingdom share more common characters than members of a species",
      "Higher the taxa, easier it is to determine relationships to other taxa",
      "Lower the taxa, more are the characteristics shared by members",
      "The number of common characteristics increases from species to kingdom"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Lower the taxa, more are the characteristics that the members within the taxon share.' Option A is reversed. Option B is reversed (higher = more difficult). Option D is reversed (decreases, not increases)."
  },
  {
    "id": 170,
    "topic": "Phylum",
    "q": "The two common features mentioned by NCERT that unite all chordates are:<br>(i) Presence of notochord<br>(ii) Dorsal hollow neural system<br>(iii) Presence of vertebral column<br>(iv) Bilateral symmetry",
    "options": [
      "i and ii only",
      "i, ii and iii",
      "i, ii, iii and iv",
      "iii and iv only"
    ],
    "correct": 0,
    "explanation": "NCERT specifically mentions only two features: 'presence of notochord and dorsal hollow neural system.' Vertebral column and bilateral symmetry are NOT mentioned in this context. The question tests NCERT-specific knowledge."
  },
  {
    "id": 171,
    "topic": "Family, Order, Class, Phylum, Kingdom - Integrated",
    "q": "Match the following:<br>(i) Family - (a) Assemblage of related orders<br>(ii) Order - (b) Group of related genera<br>(iii) Class - (c) Assemblage of related families<br>(iv) Phylum - (d) Group of related classes",
    "options": [
      "i-b, ii-c, iii-a, iv-d",
      "i-c, ii-b, iii-a, iv-d",
      "i-b, ii-a, iii-c, iv-d",
      "i-d, ii-c, iii-b, iv-a"
    ],
    "correct": 0,
    "explanation": "Family = group of related genera (b). Order = assemblage of related families (c). Class = assemblage of related orders (a). Phylum = group of related classes (d). Each category groups the one below it."
  },
  {
    "id": 172,
    "topic": "Family, Order, Class - Integrated",
    "q": "How many genera of family Solanaceae are mentioned in NCERT?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 2,
    "explanation": "NCERT mentions three genera under Solanaceae: Solanum, Petunia and Datura. Students sometimes forget Petunia or Datura."
  },
  {
    "id": 173,
    "topic": "Family, Order, Class, Phylum, Kingdom - Integrated",
    "q": "Consider the following hierarchy for classification of dog:<br>Species → Genus → Family Canidae → Order Carnivora → Class _____ → Phylum Chordata → Kingdom Animalia<br>The blank should be filled with:",
    "options": [
      "Primata",
      "Felidae",
      "Mammalia",
      "Vertebrata"
    ],
    "correct": 2,
    "explanation": "Dog → Order Carnivora → Class Mammalia → Phylum Chordata → Kingdom Animalia. NCERT places order Carnivora under Class Mammalia. Primata is an order, Felidae is a family, Vertebrata is a sub-phylum."
  }
,
  {
    "id": 174,
    "topic": "Summary & Table 1.1",
    "q": "According to NCERT summary, which of the following features make us seek the defining characteristics of living organisms?<br>(i) Size<br>(ii) Colour<br>(iii) Habitat<br>(iv) Physiological features<br>(v) Morphological features",
    "options": [
      "i, ii and iii only",
      "i, iv and v only",
      "i, ii, iii, iv and v",
      "iv and v only"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The very range of organisms in terms of size, colour, habitat, physiological and morphological features make us seek the defining characteristics of living organisms.' All five are mentioned."
  },
  {
    "id": 175,
    "topic": "Summary & Table 1.1",
    "q": "The taxonomic studies of various species of plants and animals are useful in:<br>(i) Agriculture<br>(ii) Forestry<br>(iii) Industry<br>(iv) Knowing bio-resources and their diversity",
    "options": [
      "i, ii and iii only",
      "i and iv only",
      "i, ii, iii and iv",
      "i and ii only"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The taxonomic studies of various species of plants and animals are useful in agriculture, forestry, industry and in general for knowing our bio-resources and their diversity.' All four are correct."
  },
  {
    "id": 176,
    "topic": "Summary & Table 1.1",
    "q": "The basics of taxonomy like identification, naming and classification are universally evolved under:",
    "options": [
      "National codes",
      "International codes",
      "Regional codes",
      "Institutional codes"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The basics of taxonomy like identification, naming and classification of organisms are universally evolved under international codes.' These include ICBN and ICZN."
  },
  {
    "id": 177,
    "topic": "Summary & Table 1.1",
    "q": "Each organism is identified and assigned a correct scientific name based on:",
    "options": [
      "Only resemblances among organisms",
      "Only distinct differences among organisms",
      "Resemblances and distinct differences",
      "Habitat and geographical distribution"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Based on the resemblances and distinct differences, each organism is identified and assigned a correct scientific/biological name.' Both similarities AND differences are considered."
  },
  {
    "id": 178,
    "topic": "Summary & Table 1.1",
    "q": "An organism represents/occupies a _____ in the system of classification.",
    "options": [
      "Random position",
      "Place or position",
      "Temporary slot",
      "Variable rank"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'An organism represents/occupies a place or position in the system of classification.' Each organism has a definite position in the hierarchy."
  },
  {
    "id": 179,
    "topic": "Summary & Table 1.1",
    "q": "The scientific name of housefly is:",
    "options": [
      "Musca indica",
      "Musca domestica",
      "Muscidae domestica",
      "Drosophila domestica"
    ],
    "correct": 1,
    "explanation": "From Table 1.1: Housefly = Musca domestica. Musca is the genus and domestica is the specific epithet. Muscidae is the family, not genus. Drosophila is fruit fly."
  },
  {
    "id": 180,
    "topic": "Summary & Table 1.1",
    "q": "The scientific name of wheat is:",
    "options": [
      "Triticum indica",
      "Poaceae aestivum",
      "Triticum aestivum",
      "Oryza aestivum"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Wheat = Triticum aestivum. Triticum is the genus, aestivum is the specific epithet. Poaceae is the family. Oryza is the genus for rice."
  },
  {
    "id": 181,
    "topic": "Summary & Table 1.1",
    "q": "The family of mango (<i>Mangifera indica</i>) is:",
    "options": [
      "Solanaceae",
      "Poaceae",
      "Anacardiaceae",
      "Muscidae"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Mango belongs to family Anacardiaceae. This is a very common NEET trap — students often confuse it with Solanaceae (which includes Solanum, Petunia, Datura)."
  },
  {
    "id": 182,
    "topic": "Summary & Table 1.1",
    "q": "The order to which mango belongs is:",
    "options": [
      "Polymoniales",
      "Poales",
      "Sapindales",
      "Primata"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Mango → Order Sapindales. Polymoniales includes Solanaceae and Convolvulaceae. Poales is for wheat. Primata is an animal order."
  },
  {
    "id": 183,
    "topic": "Summary & Table 1.1",
    "q": "Mango belongs to class:",
    "options": [
      "Monocotyledonae",
      "Dicotyledonae",
      "Mammalia",
      "Insecta"
    ],
    "correct": 1,
    "explanation": "From Table 1.1: Mango → Class Dicotyledonae. Wheat belongs to Monocotyledonae. Mammalia and Insecta are animal classes."
  },
  {
    "id": 184,
    "topic": "Summary & Table 1.1",
    "q": "Wheat belongs to class:",
    "options": [
      "Dicotyledonae",
      "Monocotyledonae",
      "Insecta",
      "Mammalia"
    ],
    "correct": 1,
    "explanation": "From Table 1.1: Wheat → Class Monocotyledonae. Mango is Dicotyledonae. This distinction is extremely important for NEET."
  },
  {
    "id": 185,
    "topic": "Summary & Table 1.1",
    "q": "Both mango and wheat belong to the same:",
    "options": [
      "Class",
      "Order",
      "Family",
      "Division/Phylum"
    ],
    "correct": 3,
    "explanation": "From Table 1.1: Mango = Angiospermae, Wheat = Angiospermae. Both share the same Division (Angiospermae) but differ in Class (Dicotyledonae vs Monocotyledonae), Order (Sapindales vs Poales) and Family (Anacardiaceae vs Poaceae)."
  },
  {
    "id": 186,
    "topic": "Summary & Table 1.1",
    "q": "The family of wheat is:",
    "options": [
      "Anacardiaceae",
      "Muscidae",
      "Hominidae",
      "Poaceae"
    ],
    "correct": 3,
    "explanation": "From Table 1.1: Wheat → Family Poaceae (grass family). Anacardiaceae is for mango, Muscidae is for housefly, Hominidae is for man."
  },
  {
    "id": 187,
    "topic": "Summary & Table 1.1",
    "q": "The order of wheat is:",
    "options": [
      "Sapindales",
      "Primata",
      "Diptera",
      "Poales"
    ],
    "correct": 3,
    "explanation": "From Table 1.1: Wheat → Order Poales. Sapindales is for mango, Primata is for man, Diptera is for housefly."
  },
  {
    "id": 188,
    "topic": "Summary & Table 1.1",
    "q": "The family of man (<i>Homo sapiens</i>) is:",
    "options": [
      "Muscidae",
      "Felidae",
      "Hominidae",
      "Canidae"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Man → Family Hominidae. Muscidae is for housefly, Felidae is for cats/big cats, Canidae is for dogs."
  },
  {
    "id": 189,
    "topic": "Summary & Table 1.1",
    "q": "Housefly belongs to the order:",
    "options": [
      "Primata",
      "Diptera",
      "Carnivora",
      "Poales"
    ],
    "correct": 1,
    "explanation": "From Table 1.1: Housefly → Order Diptera. Diptera means 'two wings' — houseflies have one pair of functional wings. Primata is for primates, Carnivora for carnivores."
  },
  {
    "id": 190,
    "topic": "Summary & Table 1.1",
    "q": "Housefly belongs to class:",
    "options": [
      "Mammalia",
      "Dicotyledonae",
      "Insecta",
      "Monocotyledonae"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Housefly → Class Insecta. Mammalia is for mammals (man). Dicotyledonae and Monocotyledonae are plant classes."
  },
  {
    "id": 191,
    "topic": "Summary & Table 1.1",
    "q": "Housefly belongs to phylum:",
    "options": [
      "Chordata",
      "Angiospermae",
      "Arthropoda",
      "Mollusca"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Housefly → Phylum Arthropoda. Chordata is for man. Angiospermae is a plant division for mango and wheat."
  },
  {
    "id": 192,
    "topic": "Summary & Table 1.1",
    "q": "Match the organisms with their correct families:<br>(i) Man - (a) Poaceae<br>(ii) Housefly - (b) Anacardiaceae<br>(iii) Mango - (c) Hominidae<br>(iv) Wheat - (d) Muscidae",
    "options": [
      "i-c, ii-d, iii-b, iv-a",
      "i-d, ii-c, iii-a, iv-b",
      "i-c, ii-b, iii-d, iv-a",
      "i-a, ii-d, iii-c, iv-b"
    ],
    "correct": 0,
    "explanation": "Man → Hominidae (c), Housefly → Muscidae (d), Mango → Anacardiaceae (b), Wheat → Poaceae (a). All from Table 1.1."
  },
  {
    "id": 193,
    "topic": "Summary & Table 1.1",
    "q": "Match the organisms with their correct orders:<br>(i) Man - (a) Diptera<br>(ii) Housefly - (b) Poales<br>(iii) Mango - (c) Primata<br>(iv) Wheat - (d) Sapindales",
    "options": [
      "i-c, ii-a, iii-b, iv-d",
      "i-a, ii-c, iii-d, iv-b",
      "i-c, ii-a, iii-d, iv-b",
      "i-d, ii-a, iii-c, iv-b"
    ],
    "correct": 2,
    "explanation": "Man → Primata (c), Housefly → Diptera (a), Mango → Sapindales (d), Wheat → Poales (b). All directly from Table 1.1."
  },
  {
    "id": 194,
    "topic": "Summary & Table 1.1",
    "q": "Match the organisms with their correct classes:<br>(i) Man - (a) Insecta<br>(ii) Housefly - (b) Monocotyledonae<br>(iii) Mango - (c) Mammalia<br>(iv) Wheat - (d) Dicotyledonae",
    "options": [
      "i-c, ii-d, iii-a, iv-b",
      "i-c, ii-a, iii-d, iv-b",
      "i-a, ii-c, iii-b, iv-d",
      "i-d, ii-a, iii-c, iv-b"
    ],
    "correct": 1,
    "explanation": "Man → Mammalia (c), Housefly → Insecta (a), Mango → Dicotyledonae (d), Wheat → Monocotyledonae (b). All from Table 1.1."
  },
  {
    "id": 195,
    "topic": "Summary & Table 1.1",
    "q": "Which two organisms from Table 1.1 share the same phylum/division?",
    "options": [
      "Man and Housefly",
      "Mango and Wheat",
      "Man and Mango",
      "Housefly and Wheat"
    ],
    "correct": 1,
    "explanation": "Mango and Wheat both belong to Division Angiospermae. Man = Chordata, Housefly = Arthropoda. No animal-plant pair shares the same phylum/division."
  },
  {
    "id": 196,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following organisms belongs to phylum Chordata?",
    "options": [
      "Housefly",
      "Mango",
      "Wheat",
      "Man"
    ],
    "correct": 3,
    "explanation": "From Table 1.1: Only Man (Homo sapiens) belongs to Phylum Chordata. Housefly = Arthropoda. Mango and Wheat = Angiospermae (Division, not Phylum)."
  },
  {
    "id": 197,
    "topic": "Summary & Table 1.1",
    "q": "Consider the following statements from Table 1.1:<br>(A) Man and Housefly belong to the same phylum<br>(B) Mango and Wheat belong to the same division<br>(C) Man and Housefly belong to the same kingdom<br>Which are correct?",
    "options": [
      "A and B only",
      "B and C only",
      "A and C only",
      "A, B and C"
    ],
    "correct": 1,
    "explanation": "A is INCORRECT — Man = Chordata, Housefly = Arthropoda (different phyla). B is correct — both = Angiospermae. C is correct — both are animals (Kingdom Animalia). So B and C only."
  },
  {
    "id": 198,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following is <b>incorrectly</b> matched from Table 1.1?",
    "options": [
      "Man – Hominidae – Primata",
      "Housefly – Muscidae – Diptera",
      "Mango – Anacardiaceae – Poales",
      "Wheat – Poaceae – Poales"
    ],
    "correct": 2,
    "explanation": "Mango belongs to family Anacardiaceae but order Sapindales (NOT Poales). Poales is the order for Wheat. This is a very common NEET trap — confusing orders of mango and wheat."
  },
  {
    "id": 199,
    "topic": "Summary & Table 1.1",
    "q": "The genus name of housefly is the same as its:",
    "options": [
      "Family name",
      "Specific epithet",
      "Common name",
      "None of the above — genus and common name differ"
    ],
    "correct": 3,
    "explanation": "The genus of housefly is Musca, while its common name is Housefly, specific epithet is domestica, and family is Muscidae. None of these match — genus (Musca) is distinct from common name (Housefly)."
  },
  {
    "id": 200,
    "topic": "Summary & Table 1.1",
    "q": "For housefly, the genus name <i>Musca</i> and family name <i>Muscidae</i> appear similar. Which of the following is correct?",
    "options": [
      "The family is always derived from its genus name",
      "The family name Muscidae is derived from the genus Musca",
      "The genus name is derived from the family name",
      "There is no relationship between genus and family names"
    ],
    "correct": 1,
    "explanation": "In taxonomy, family names are often derived from the type genus. Muscidae is derived from Musca. Similarly, Hominidae from Homo, Felidae from Felis. This is a common pattern in zoological nomenclature."
  },
  {
    "id": 201,
    "topic": "Summary & Table 1.1",
    "q": "Which organism from Table 1.1 belongs to the order Sapindales?",
    "options": [
      "Man",
      "Housefly",
      "Mango",
      "Wheat"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Only Mango (Mangifera indica) belongs to order Sapindales. Man = Primata, Housefly = Diptera, Wheat = Poales."
  },
  {
    "id": 202,
    "topic": "Summary & Table 1.1",
    "q": "The genus and specific epithet of wheat are:",
    "options": [
      "Poaceae and aestivum",
      "Triticum and Poaceae",
      "Triticum and aestivum",
      "Poales and Triticum"
    ],
    "correct": 2,
    "explanation": "From Table 1.1: Wheat = Triticum aestivum. Triticum = genus, aestivum = specific epithet. Poaceae is the family, Poales is the order."
  },
  {
    "id": 203,
    "topic": "Summary & Table 1.1",
    "q": "Select the organism whose genus name is the same as the first part of its biological name:",
    "options": [
      "All four organisms in Table 1.1",
      "Only Man and Mango",
      "Only Housefly and Wheat",
      "None of the organisms"
    ],
    "correct": 0,
    "explanation": "In binomial nomenclature, the first word IS always the genus name. So for ALL organisms: Homo (Man), Musca (Housefly), Mangifera (Mango), Triticum (Wheat) — the genus = first part of biological name."
  },
  {
    "id": 204,
    "topic": "Summary & Table 1.1",
    "q": "<b>Assertion (A):</b> Mango and Wheat belong to the same class.<br><b>Reason (R):</b> Both Mango and Wheat belong to Division Angiospermae.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — Mango = Dicotyledonae, Wheat = Monocotyledonae (different classes). Reason is TRUE — both DO belong to Division Angiospermae. Same division but different classes — very important trap!"
  },
  {
    "id": 205,
    "topic": "Summary & Table 1.1",
    "q": "<b>Assertion (A):</b> Man and Housefly both belong to Kingdom Animalia but differ at the phylum level.<br><b>Reason (R):</b> Man belongs to Phylum Chordata while Housefly belongs to Phylum Arthropoda.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 0,
    "explanation": "Both are true. Man and Housefly are both animals (Kingdom Animalia) but Man = Chordata, Housefly = Arthropoda. R provides the exact phyla that explain why A is true."
  },
  {
    "id": 206,
    "topic": "Summary & Table 1.1",
    "q": "<b>Assertion (A):</b> Mango belongs to family Solanaceae.<br><b>Reason (R):</b> Mango belongs to genus <i>Mangifera</i>.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is false, but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE — Mango belongs to family Anacardiaceae, NOT Solanaceae (which includes Solanum, Petunia, Datura). Reason is TRUE — Mango's genus is Mangifera. This is one of the most common NEET traps."
  },
  {
    "id": 207,
    "topic": "Summary & Table 1.1",
    "q": "How many organisms in Table 1.1 belong to Division Angiospermae?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 1,
    "explanation": "Two organisms — Mango (Mangifera indica) and Wheat (Triticum aestivum) — both belong to Division Angiospermae. Man and Housefly are animals and belong to phyla (Chordata and Arthropoda respectively)."
  },
  {
    "id": 208,
    "topic": "Summary & Table 1.1",
    "q": "How many organisms in Table 1.1 belong to Class Mammalia?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 0,
    "explanation": "Only one organism — Man (Homo sapiens) — belongs to Class Mammalia. Housefly = Insecta, Mango = Dicotyledonae, Wheat = Monocotyledonae."
  },
  {
    "id": 209,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following represents the complete classification of Housefly in correct descending order?",
    "options": [
      "Arthropoda → Insecta → Diptera → Muscidae → Musca → domestica",
      "Chordata → Insecta → Diptera → Muscidae → Musca → domestica",
      "Arthropoda → Diptera → Insecta → Muscidae → Musca → domestica",
      "Arthropoda → Insecta → Muscidae → Diptera → Musca → domestica"
    ],
    "correct": 0,
    "explanation": "Correct descending order: Phylum Arthropoda → Class Insecta → Order Diptera → Family Muscidae → Genus Musca → Species domestica. Option B has wrong phylum, C and D jumble class/order/family."
  },
  {
    "id": 210,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following represents the complete classification of Man in correct descending order?",
    "options": [
      "Chordata → Mammalia → Hominidae → Primata → Homo → sapiens",
      "Chordata → Mammalia → Primata → Hominidae → Homo → sapiens",
      "Arthropoda → Mammalia → Primata → Hominidae → Homo → sapiens",
      "Chordata → Primata → Mammalia → Hominidae → Homo → sapiens"
    ],
    "correct": 1,
    "explanation": "Correct order: Phylum Chordata → Class Mammalia → Order Primata → Family Hominidae → Genus Homo → Species sapiens. Option A reverses Order and Family. Option C has wrong phylum. Option D reverses Class and Order."
  },
  {
    "id": 211,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following represents the complete classification of Wheat in correct descending order?",
    "options": [
      "Angiospermae → Monocotyledonae → Poales → Poaceae → Triticum → aestivum",
      "Angiospermae → Dicotyledonae → Poales → Poaceae → Triticum → aestivum",
      "Angiospermae → Monocotyledonae → Poaceae → Poales → Triticum → aestivum",
      "Angiospermae → Monocotyledonae → Sapindales → Poaceae → Triticum → aestivum"
    ],
    "correct": 0,
    "explanation": "Correct order: Division Angiospermae → Class Monocotyledonae → Order Poales → Family Poaceae → Genus Triticum → Species aestivum. B has wrong class, C reverses order/family, D has wrong order."
  },
  {
    "id": 212,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following represents the complete classification of Mango in correct descending order?",
    "options": [
      "Angiospermae → Dicotyledonae → Sapindales → Solanaceae → Mangifera → indica",
      "Angiospermae → Monocotyledonae → Sapindales → Anacardiaceae → Mangifera → indica",
      "Angiospermae → Dicotyledonae → Sapindales → Anacardiaceae → Mangifera → indica",
      "Angiospermae → Dicotyledonae → Polymoniales → Anacardiaceae → Mangifera → indica"
    ],
    "correct": 2,
    "explanation": "Correct: Angiospermae → Dicotyledonae → Sapindales → Anacardiaceae → Mangifera → indica. A has wrong family (Solanaceae). B has wrong class (Monocotyledonae). D has wrong order (Polymoniales)."
  },
  {
    "id": 213,
    "topic": "Summary & Table 1.1",
    "q": "Consider the following pairs:<br>(A) Man – Arthropoda<br>(B) Housefly – Chordata<br>(C) Mango – Angiospermae<br>(D) Wheat – Angiospermae<br>Which pairs are <b>correctly</b> matched?",
    "options": [
      "A and B only",
      "C and D only",
      "A, B, C and D",
      "B and C only"
    ],
    "correct": 1,
    "explanation": "A is INCORRECT (Man = Chordata, not Arthropoda). B is INCORRECT (Housefly = Arthropoda, not Chordata). C is correct (Mango = Angiospermae). D is correct (Wheat = Angiospermae). Only C and D."
  },
  {
    "id": 214,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Man – Hominidae",
      "Housefly – Muscidae",
      "Mango – Poaceae",
      "Wheat – Poaceae"
    ],
    "correct": 2,
    "explanation": "Mango belongs to family Anacardiaceae, NOT Poaceae. Poaceae is the family of Wheat. Man → Hominidae and Housefly → Muscidae are correct. This is a high-frequency NEET trap."
  },
  {
    "id": 215,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following pair of organism and order is <b>correctly</b> matched?",
    "options": [
      "Man – Diptera",
      "Housefly – Primata",
      "Mango – Poales",
      "Wheat – Poales"
    ],
    "correct": 3,
    "explanation": "Wheat → Poales is correct. Man → Primata (not Diptera). Housefly → Diptera (not Primata). Mango → Sapindales (not Poales)."
  },
  {
    "id": 216,
    "topic": "Summary & Table 1.1",
    "q": "Which two organisms from Table 1.1 belong to the same kingdom but different phyla/divisions?",
    "options": [
      "Man and Mango",
      "Man and Housefly",
      "Mango and Wheat",
      "Housefly and Wheat"
    ],
    "correct": 1,
    "explanation": "Man (Chordata) and Housefly (Arthropoda) — both belong to Kingdom Animalia but different phyla. Mango and Wheat share the same division (Angiospermae). Man-Mango and Housefly-Wheat are from different kingdoms entirely."
  },
  {
    "id": 217,
    "topic": "Summary & Table 1.1",
    "q": "In Table 1.1, the lowest taxonomic category at which Mango and Wheat differ is:",
    "options": [
      "Division",
      "Class",
      "Order",
      "Family"
    ],
    "correct": 1,
    "explanation": "Both share the same Division (Angiospermae) but differ at Class level — Mango = Dicotyledonae, Wheat = Monocotyledonae. Since Class is a lower level than Division, they first differ at Class."
  },
  {
    "id": 218,
    "topic": "Summary & Table 1.1",
    "q": "In Table 1.1, Man and Housefly share the same:",
    "options": [
      "Phylum",
      "Class",
      "Kingdom",
      "Order"
    ],
    "correct": 2,
    "explanation": "Man and Housefly both belong to Kingdom Animalia. They differ at every level below that: Phylum (Chordata vs Arthropoda), Class (Mammalia vs Insecta), Order (Primata vs Diptera), etc."
  },
  {
    "id": 219,
    "topic": "Summary & Table 1.1",
    "q": "<b>Assertion (A):</b> Housefly belongs to phylum Arthropoda and class Insecta.<br><b>Reason (R):</b> Housefly has three pairs of jointed legs and belongs to order Diptera.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is not the correct explanation of A",
      "A is true, but R is false",
      "Both A and R are false"
    ],
    "correct": 1,
    "explanation": "Both A and R are true. Housefly = Arthropoda, Insecta and Diptera (all from Table 1.1). However, R does not directly explain why it is in Arthropoda and Insecta specifically — jointed legs relate to Arthropoda, three pairs to Insecta, but Diptera (two wings) relates to order, not class/phylum."
  },
  {
    "id": 220,
    "topic": "Summary & Table 1.1",
    "q": "A student claims that Wheat belongs to family Anacardiaceae. This statement is:",
    "options": [
      "Correct, as Wheat is an angiosperm",
      "Incorrect, Wheat belongs to family Poaceae",
      "Correct, as Wheat and Mango are both flowering plants",
      "Incorrect, Wheat belongs to family Muscidae"
    ],
    "correct": 1,
    "explanation": "Wheat belongs to family Poaceae (grass family), NOT Anacardiaceae. Anacardiaceae is the family of Mango. Muscidae is an animal family (housefly). Being an angiosperm doesn't determine family."
  },
  {
    "id": 221,
    "topic": "Summary & Table 1.1",
    "q": "Consider the following about the organisms in Table 1.1:<br>(i) Man and Housefly both belong to Kingdom Animalia<br>(ii) Mango and Wheat both belong to Kingdom Plantae<br>(iii) All four organisms share the same Kingdom<br>Which of the above is/are correct?",
    "options": [
      "i and ii only",
      "iii only",
      "i only",
      "i, ii and iii"
    ],
    "correct": 0,
    "explanation": "i is correct — Man and Housefly are animals. ii is correct — Mango and Wheat are plants. iii is INCORRECT — animals and plants belong to DIFFERENT kingdoms (Animalia vs Plantae). They do NOT all share the same kingdom."
  },
  {
    "id": 222,
    "topic": "Summary & Table 1.1",
    "q": "Which of the following is the correct pair of organism and its genus?",
    "options": [
      "Man – Homo, Housefly – Muscidae",
      "Man – Hominidae, Housefly – Musca",
      "Man – Homo, Housefly – Musca",
      "Man – Homo, Housefly – Diptera"
    ],
    "correct": 2,
    "explanation": "Man → Genus Homo, Housefly → Genus Musca. Muscidae is a family (not genus). Hominidae is a family (not genus). Diptera is an order (not genus). Only option C correctly identifies both genera."
  },
  {
    "id": 223,
    "topic": "Summary & Table 1.1",
    "q": "The branch of knowledge dealing with identification, nomenclature and classification of organisms is referred to as:",
    "options": [
      "Systematics",
      "Morphology",
      "Taxonomy",
      "Ecology"
    ],
    "correct": 2,
    "explanation": "NCERT Summary states: 'The branch of knowledge dealing with these aspects is referred to as taxonomy.' While systematics is related, the summary specifically uses 'taxonomy' for identification, nomenclature and classification."
  }
];
