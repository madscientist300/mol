// ===== CHAPTER: Microbes in Human Welfare =====
const allQuestions = [
  {
    "id": 1,
    "topic": "Introduction",
    "q": "Consider the following statements regarding microbes:<br>(i) Prions are proteinaceous infectious agents<br>(ii) Bacteria and fungi can form colonies visible to naked eye on nutritive media<br>(iii) Microbes are found only in moderate environmental conditions<br>(iv) All microbes are harmful to humans<br><br>Which of the above statements are <b>correct</b>?",
    "options": [
      "(i) and (ii) only",
      "(i) and (iii) only",
      "(i), (ii) and (iv)",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Statements (i) and (ii) are correct per NCERT. Statement (iii) is wrong – microbes thrive even in extreme environments (thermal vents at 100°C, under snow, acidic environments). Statement (iv) is wrong – several microbes are beneficial."
  },
  {
    "id": 2,
    "topic": "Introduction",
    "q": "Which of the following is <b>NOT</b> listed as a type of microbe in NCERT?",
    "options": [
      "Viroids",
      "Prions",
      "Lichens",
      "Protozoa"
    ],
    "correct": 2,
    "explanation": "NCERT lists protozoa, bacteria, fungi, microscopic viruses, viroids, and prions as microbes. Lichens (symbiotic association of algae/cyanobacteria and fungi) are NOT listed as microbes in this context."
  },
  {
    "id": 3,
    "topic": "Introduction",
    "q": "Assertion (A): Microbes can survive in thermal vents where temperatures may be as high as 100°C.<br>Reason (R): All microbes are thermophilic in nature.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is true – NCERT mentions microbes in geysers at 100°C. Reason is false – NOT all microbes are thermophilic. Only specific extremophilic microbes tolerate such conditions."
  },
  {
    "id": 4,
    "topic": "Introduction",
    "q": "Prions differ from viroids in being:",
    "options": [
      "Nucleic acid-based infectious agents",
      "Proteinaceous infectious agents",
      "Cellular micro-organisms",
      "Lipid-enclosed particles"
    ],
    "correct": 1,
    "explanation": "Prions are proteinaceous infectious agents (lacking nucleic acid). Viroids are free RNA molecules without protein coat. This is a very frequently tested NEET distinction."
  },
  {
    "id": 5,
    "topic": "Introduction",
    "q": "Microbes have been found in all of the following extreme habitats <b>EXCEPT</b>:",
    "options": [
      "Deep inside geysers at 100°C",
      "Under layers of snow several metres thick",
      "Highly acidic environments",
      "Complete vacuum of outer space"
    ],
    "correct": 3,
    "explanation": "NCERT mentions thermal vents (100°C), deep soil, under thick snow layers, and highly acidic environments. Vacuum of outer space is NOT mentioned."
  },
  {
    "id": 6,
    "topic": "Introduction",
    "q": "Which of the following statements is <b>incorrect</b> about microbes?",
    "options": [
      "All microbes are pathogenic in nature",
      "Microbes are present in soil, water, air and inside organisms",
      "Prions are proteinaceous infectious agents",
      "Bacteria and fungi can form visible colonies on nutritive media"
    ],
    "correct": 0,
    "explanation": "'All microbes are pathogenic' is incorrect. NCERT explicitly states that several microbes are useful to humans in diverse ways. This is the most common misconception tested in NEET."
  },
  {
    "id": 7,
    "topic": "Introduction",
    "q": "Cultures of microbes grown on nutritive media forming visible colonies are useful for:",
    "options": [
      "Gene therapy only",
      "Studies on micro-organisms",
      "Vaccine production only",
      "Antibiotic extraction only"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Such cultures are useful in studies on micro-organisms.' This is a direct line-based NCERT fact."
  },
  {
    "id": 8,
    "topic": "Introduction",
    "q": "Which group among microbes includes <b>only</b> acellular members?",
    "options": [
      "Bacteria and fungi",
      "Protozoa and bacteria",
      "Viruses, viroids and prions",
      "Fungi and protozoa"
    ],
    "correct": 2,
    "explanation": "Viruses, viroids, and prions are all acellular. Bacteria are prokaryotic cells, protozoa are unicellular eukaryotes, and fungi are eukaryotic – all cellular."
  },
  {
    "id": 9,
    "topic": "Introduction",
    "q": "Which of the following Kingdoms of living organisms contains <b>exclusively microscopic</b> members?",
    "options": [
      "Plantae",
      "Animalia",
      "Monera",
      "Fungi"
    ],
    "correct": 2,
    "explanation": "Kingdom Monera (bacteria and cyanobacteria) are exclusively microscopic. Fungi includes both microscopic (yeasts, moulds) and macroscopic (mushrooms) forms. Plantae and Animalia have macroscopic members."
  },
  {
    "id": 10,
    "topic": "Introduction",
    "q": "Assertion (A): Microbes are present even inside our bodies.<br>Reason (R): All microbes that exist inside the human body are pathogenic.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is true – NCERT states microbes are present inside our bodies and other organisms. Reason is false – many microbes inside the body are beneficial (e.g., LAB in stomach check disease-causing microbes)."
  },
  {
    "id": 11,
    "topic": "Introduction",
    "q": "Read the following statements and select the <b>correct</b> option:<br>Statement I: Viruses are always microscopic.<br>Statement II: Fungi are always microscopic.",
    "options": [
      "Both Statement I and II are correct",
      "Only Statement I is correct",
      "Only Statement II is correct",
      "Both Statement I and II are incorrect"
    ],
    "correct": 1,
    "explanation": "Statement I is correct – viruses are always microscopic. Statement II is incorrect – fungi include macroscopic forms like mushrooms. NCERT lists 'microscopic animal and plant viruses' confirming their microscopic nature, while fungi range from microscopic to macroscopic."
  },
  {
    "id": 12,
    "topic": "Introduction",
    "q": "Which of the following can form visible colonies on nutritive media?",
    "options": [
      "Viruses and viroids",
      "Bacteria and fungi",
      "Prions and viroids",
      "Viruses and prions"
    ],
    "correct": 1,
    "explanation": "NCERT specifically states: 'Microbes like bacteria and many fungi can be grown on nutritive media to form colonies that can be seen with the naked eyes.' Viruses, viroids, and prions cannot form colonies on nutritive media as they are obligate intracellular/acellular."
  },
  {
    "id": 13,
    "topic": "Introduction",
    "q": "Consider the following sites:<br>(i) Deep inside geysers (thermal vents)<br>(ii) Deep in the soil<br>(iii) Under layers of snow several metres thick<br>(iv) Highly acidic environments<br><br>According to NCERT, microbes can exist at:",
    "options": [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(ii), (iii) and (iv) only",
      "All – (i), (ii), (iii) and (iv)"
    ],
    "correct": 3,
    "explanation": "NCERT explicitly lists ALL four extreme environments as places where microbes are present even when no other life-form could exist. This is a complete list-based factual question."
  },
  {
    "id": 14,
    "topic": "Introduction",
    "q": "Which of the following is the <b>smallest</b> infectious agent that lacks both nucleic acid and cellular structure?",
    "options": [
      "Viroid",
      "Virus",
      "Prion",
      "Mycoplasma"
    ],
    "correct": 2,
    "explanation": "Prions are proteinaceous infectious agents – they lack nucleic acid and cellular structure. Viroids are RNA without protein coat. Viruses have nucleic acid (DNA/RNA) with protein coat. Mycoplasma is the smallest cell (has both nucleic acid and cell membrane)."
  },
  {
    "id": 15,
    "topic": "Introduction",
    "q": "The diversity of microbes includes all of the following <b>EXCEPT</b>:",
    "options": [
      "Protozoa and bacteria",
      "Fungi and viruses",
      "Viroids and prions",
      "Bryophytes and pteridophytes"
    ],
    "correct": 3,
    "explanation": "Bryophytes and pteridophytes are macroscopic plant groups, NOT microbes. NCERT lists protozoa, bacteria, fungi, microscopic viruses, viroids, and prions as diverse microbes."
  },
  {
    "id": 16,
    "topic": "Microbes in Household Products",
    "q": "Which of the following bacteria is responsible for the conversion of milk into curd?",
    "options": [
      "Acetobacter aceti",
      "Lactobacillus",
      "Streptococcus thermophilus",
      "Propionibacterium sharmanii"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Micro-organisms such as Lactobacillus and others commonly called lactic acid bacteria (LAB) grow in milk and convert it to curd.' This is a high-frequency NEET question."
  },
  {
    "id": 17,
    "topic": "Microbes in Household Products",
    "q": "During curd formation, LAB produce acids that:<br>(i) Coagulate milk proteins<br>(ii) Completely digest milk proteins<br>(iii) Partially digest milk proteins<br><br>Select the <b>correct</b> option:",
    "options": [
      "(i) and (ii) only",
      "(i) and (iii) only",
      "(ii) and (iii) only",
      "(i), (ii) and (iii)"
    ],
    "correct": 1,
    "explanation": "NCERT uses the word 'partially' – 'LAB produce acids that coagulate and PARTIALLY digest the milk proteins.' 'Completely digest' is wrong. The word 'partially' is a very common NEET trap."
  },
  {
    "id": 18,
    "topic": "Microbes in Household Products",
    "q": "Conversion of milk to curd improves its nutritional quality by increasing:",
    "options": [
      "Vitamin C",
      "Vitamin B12",
      "Vitamin D",
      "Vitamin A"
    ],
    "correct": 1,
    "explanation": "NCERT explicitly states: 'converting milk to curd, which also improves its nutritional quality by increasing vitamin B12.' Students often confuse this with other B vitamins – a classic NEET trap."
  },
  {
    "id": 19,
    "topic": "Microbes in Household Products",
    "q": "Assertion (A): A small amount of curd is added to fresh milk as inoculum for curd preparation.<br>Reason (R): The inoculum contains millions of Lactic Acid Bacteria (LAB) that multiply at suitable temperature.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both are true and R correctly explains A. NCERT states: 'A small amount of curd added to the fresh milk as inoculum or starter contain millions of LAB, which at suitable temperatures multiply, thus converting milk to curd.'"
  },
  {
    "id": 20,
    "topic": "Microbes in Household Products",
    "q": "LAB in our stomach play a beneficial role by:",
    "options": [
      "Producing vitamin C",
      "Checking disease-causing microbes",
      "Digesting cellulose",
      "Producing hydrochloric acid"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'In our stomach too, the LAB play very beneficial role in checking disease-causing microbes.' This is a high-yield NEET fact."
  },
  {
    "id": 21,
    "topic": "Microbes in Household Products",
    "q": "The puffed-up appearance of dough used for making dosa and idli is due to:",
    "options": [
      "Production of O₂ gas",
      "Production of CO₂ gas",
      "Production of N₂ gas",
      "Absorption of water vapour"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The puffed-up appearance of dough is due to the production of CO₂ gas.' This CO₂ is produced during fermentation."
  },
  {
    "id": 22,
    "topic": "Microbes in Household Products",
    "q": "The dough used for making <b>dosa and idli</b> is fermented by:",
    "options": [
      "Baker's yeast",
      "Bacteria",
      "Fungi",
      "Protozoa"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The dough which is used for making foods such as dosa and idli is also fermented by bacteria.' This is a MAJOR NEET trap – students confuse this with yeast (which is used for bread). Dosa/idli = bacteria; Bread = yeast."
  },
  {
    "id": 23,
    "topic": "Microbes in Household Products",
    "q": "Baker's yeast used for making bread is:",
    "options": [
      "Saccharomyces cerevisiae",
      "Propionibacterium sharmanii",
      "Lactobacillus",
      "Aspergillus niger"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'the dough which is used for making bread is fermented using baker's yeast (Saccharomyces cerevisiae).' This is a direct NCERT fact tested repeatedly in NEET."
  },
  {
    "id": 24,
    "topic": "Microbes in Household Products",
    "q": "'Toddy' is a traditional drink made by:",
    "options": [
      "Fermenting grape juice",
      "Fermenting sap from palms",
      "Fermenting rice water",
      "Fermenting sugarcane juice"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Toddy, a traditional drink of some parts of southern India is made by fermenting sap from palms.'"
  },
  {
    "id": 25,
    "topic": "Microbes in Household Products",
    "q": "Toddy is a traditional drink of some parts of:",
    "options": [
      "Northern India",
      "Eastern India",
      "Southern India",
      "Western India"
    ],
    "correct": 2,
    "explanation": "NCERT specifically mentions: 'Toddy, a traditional drink of some parts of southern India.' This regional detail is a factual NEET point."
  },
  {
    "id": 26,
    "topic": "Microbes in Household Products",
    "q": "The large holes in 'Swiss cheese' are due to:",
    "options": [
      "Production of O₂ by Lactobacillus",
      "Production of CO₂ by Propionibacterium sharmanii",
      "Mechanical pressing during manufacture",
      "Production of H₂S by Streptococcus"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'the large holes in Swiss cheese are due to production of a large amount of CO₂ by a bacterium named Propionibacterium sharmanii.' This is one of the most frequently asked NEET facts."
  },
  {
    "id": 27,
    "topic": "Microbes in Household Products",
    "q": "'Roquefort cheese' is ripened by growing:",
    "options": [
      "Specific bacteria on them",
      "Specific fungi on them",
      "Specific algae on them",
      "Specific protozoa on them"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The Roquefort cheese are ripened by growing a specific fungi on them, which gives them a particular flavour.' Bacteria vs fungi is a classic NEET trap for Swiss cheese vs Roquefort cheese."
  },
  {
    "id": 28,
    "topic": "Microbes in Household Products",
    "q": "Consider the following statements:<br>(i) Swiss cheese – Propionibacterium sharmanii<br>(ii) Roquefort cheese – Specific fungi<br>(iii) Bread – Saccharomyces cerevisiae<br>(iv) Dosa/Idli – Saccharomyces cerevisiae<br><br>Which of the above microbe–product matchings are <b>correct</b>?",
    "options": [
      "(i), (ii) and (iii) only",
      "(i), (ii) and (iv) only",
      "(ii), (iii) and (iv) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Statements (i), (ii), and (iii) are correct. Statement (iv) is wrong – dosa/idli dough is fermented by BACTERIA, not by Saccharomyces cerevisiae (baker's yeast). Baker's yeast is for bread. This is the most common student error."
  },
  {
    "id": 29,
    "topic": "Microbes in Household Products",
    "q": "Assertion (A): Cheese is one of the oldest food items in which microbes were used.<br>Reason (R): Different varieties of cheese get characteristic texture, flavour, and taste from the specific microbes used.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 1,
    "explanation": "Both A and R are true. However, R does not explain WHY cheese is one of the OLDEST food items – it only explains why varieties differ. The 'oldest' status is a historical fact, not explained by specificity of microbes."
  },
  {
    "id": 30,
    "topic": "Microbes in Household Products",
    "q": "Which of the following metabolic pathway is responsible for CO₂ production during dough fermentation?",
    "options": [
      "Aerobic respiration",
      "Anaerobic respiration / Fermentation",
      "Photosynthesis",
      "Chemosynthesis"
    ],
    "correct": 1,
    "explanation": "NCERT asks: 'Can you tell which metabolic pathway is taking place resulting in the formation of CO₂?' – The answer is fermentation (anaerobic respiration), as microbes break down sugars anaerobically producing CO₂ and ethanol/organic acids."
  },
  {
    "id": 31,
    "topic": "Microbes in Household Products",
    "q": "Which of the following food items are made by fermentation using microbes?<br>(i) Fish<br>(ii) Soyabean<br>(iii) Bamboo shoots<br>(iv) Cheese",
    "options": [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(iii) and (iv) only",
      "All – (i), (ii), (iii) and (iv)"
    ],
    "correct": 3,
    "explanation": "NCERT states: 'Microbes are also used to ferment fish, soyabean and bamboo-shoots to make foods' and cheese also involves microbial fermentation. So all four are correct."
  },
  {
    "id": 32,
    "topic": "Microbes in Household Products",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Curd – Lactobacillus",
      "Bread – Saccharomyces cerevisiae",
      "Swiss cheese – Propionibacterium sharmanii",
      "Dosa and idli – Saccharomyces cerevisiae"
    ],
    "correct": 3,
    "explanation": "Dosa and idli dough is fermented by BACTERIA, not by Saccharomyces cerevisiae. S. cerevisiae (baker's yeast) is used for bread. This mismatch is one of the most tested NEET traps."
  },
  {
    "id": 33,
    "topic": "Microbes in Household Products",
    "q": "The term 'inoculum' or 'starter' in curd formation refers to:",
    "options": [
      "Fresh milk without any microbe",
      "A small amount of curd added to fresh milk",
      "A chemical enzyme added to milk",
      "Rennet extracted from calf stomach"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'A small amount of curd added to the fresh milk as inoculum or starter contain millions of LAB.' The inoculum provides the initial population of LAB needed for fermentation."
  },
  {
    "id": 34,
    "topic": "Microbes in Household Products",
    "q": "Read the following statements:<br>Statement I: LAB produce acids that coagulate and completely digest milk proteins.<br>Statement II: Conversion of milk to curd increases vitamin B12 content.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is incorrect – LAB PARTIALLY digest milk proteins, not completely. Statement II is correct – NCERT explicitly states that curd formation increases vitamin B12. The word 'partially' vs 'completely' is a deliberate NEET trap."
  },
  {
    "id": 35,
    "topic": "Microbes in Household Products",
    "q": "Which of the following is a <b>correct</b> difference between Swiss cheese and Roquefort cheese?",
    "options": [
      "Swiss cheese – fungi; Roquefort cheese – bacteria",
      "Swiss cheese – Propionibacterium sharmanii; Roquefort cheese – specific fungi",
      "Swiss cheese – Lactobacillus; Roquefort cheese – Saccharomyces",
      "Both are ripened by the same microorganism"
    ],
    "correct": 1,
    "explanation": "Swiss cheese – large holes due to CO₂ by bacterium Propionibacterium sharmanii. Roquefort cheese – ripened by specific fungi for flavour. Option A reverses the organisms, which is the classic trap."
  },
  {
    "id": 36,
    "topic": "Microbes in Household Products",
    "q": "The specificity of different varieties of cheese in terms of texture, flavour and taste comes from:",
    "options": [
      "The type of milk used",
      "The microbes used",
      "The temperature of storage",
      "The country of origin"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Different varieties of cheese are known by their characteristic texture, flavour and taste, the specificity coming from the microbes used.' This is a direct NCERT line."
  },
  {
    "id": 37,
    "topic": "Microbes in Household Products",
    "q": "Assertion (A): The dough used for making dosa and idli shows a puffed-up appearance.<br>Reason (R): Baker's yeast (Saccharomyces cerevisiae) ferments the dough producing CO₂.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is true – dosa/idli dough does show puffed-up appearance. Reason is false – dosa/idli dough is fermented by BACTERIA, NOT baker's yeast. Baker's yeast is used for bread. This is a CRITICAL distinction in NEET."
  },
  {
    "id": 38,
    "topic": "Microbes in Household Products",
    "q": "Which of the following vitamins is increased in nutritional quality when milk is converted to curd?",
    "options": [
      "Vitamin B1 (Thiamine)",
      "Vitamin B2 (Riboflavin)",
      "Vitamin B12 (Cobalamin)",
      "Vitamin B6 (Pyridoxine)"
    ],
    "correct": 2,
    "explanation": "NCERT specifically mentions vitamin B12. Students often select B2 or B6 by guessing. B12 (Cobalamin) is the ONLY correct answer as per NCERT. This is a very high-frequency NEET question."
  },
  {
    "id": 39,
    "topic": "Microbes in Household Products",
    "q": "Consider the following:<br>(a) Curd → Lactobacillus<br>(b) Bread → Saccharomyces cerevisiae<br>(c) Swiss cheese → Propionibacterium sharmanii<br>(d) Toddy → Fermentation of sap from palms<br><br>How many of the above are <b>correctly</b> matched?",
    "options": [
      "Only two",
      "Only three",
      "All four",
      "Only one"
    ],
    "correct": 2,
    "explanation": "All four are correctly matched as per NCERT. (a) Curd = Lactobacillus ✓ (b) Bread = Saccharomyces cerevisiae ✓ (c) Swiss cheese = Propionibacterium sharmanii ✓ (d) Toddy = palm sap fermentation ✓."
  },
  {
    "id": 40,
    "topic": "Microbes in Household Products",
    "q": "In the context of curd formation, which of the following is <b>NOT</b> a role of LAB?",
    "options": [
      "Coagulation of milk proteins",
      "Partial digestion of milk proteins",
      "Increasing vitamin B12 content",
      "Complete hydrolysis of lactose to galactose and glucose only"
    ],
    "correct": 3,
    "explanation": "NCERT mentions LAB coagulate and partially digest milk proteins, and improve nutritional quality by increasing vitamin B12. 'Complete hydrolysis of lactose to galactose and glucose only' is NOT mentioned in NCERT as a role of LAB in curd formation."
  },
  {
    "id": 41,
    "topic": "Microbes in Household Products",
    "q": "Which of the following statements about 'Toddy' is <b>correct</b>?<br>(i) It is a traditional drink<br>(ii) It is popular in some parts of southern India<br>(iii) It is made by fermenting sap from palms<br>(iv) It is a non-fermented beverage",
    "options": [
      "(i), (ii) and (iii) only",
      "(i) and (iv) only",
      "(ii), (iii) and (iv) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Statements (i), (ii), and (iii) are correct per NCERT. Statement (iv) is wrong – toddy IS a fermented drink. NCERT states: 'Toddy, a traditional drink of some parts of southern India is made by FERMENTING sap from palms.'"
  },
  {
    "id": 42,
    "topic": "Microbes in Household Products",
    "q": "Which of the following statements is correct regarding Swiss cheese?<br>Statement I: Large holes in Swiss cheese are due to CO₂ production.<br>Statement II: The CO₂ is produced by a fungus named Propionibacterium sharmanii.",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correct": 2,
    "explanation": "Statement I is correct – large holes are due to CO₂. Statement II is incorrect – Propionibacterium sharmanii is a BACTERIUM, not a fungus. This bacteria vs fungi distinction is a classic NEET conceptual trap."
  },
  {
    "id": 43,
    "topic": "Microbes in Household Products",
    "q": "Match the following and select the <b>correct</b> option:<br>(a) Lactobacillus → (i) Bread<br>(b) Saccharomyces cerevisiae → (ii) Curd<br>(c) Propionibacterium sharmanii → (iii) Roquefort cheese<br>(d) Specific fungi → (iv) Swiss cheese",
    "options": [
      "a-ii, b-i, c-iv, d-iii",
      "a-i, b-ii, c-iii, d-iv",
      "a-ii, b-i, c-iii, d-iv",
      "a-iv, b-iii, c-ii, d-i"
    ],
    "correct": 0,
    "explanation": "Correct matching: Lactobacillus → Curd (ii); Saccharomyces cerevisiae → Bread (i); Propionibacterium sharmanii → Swiss cheese (iv); Specific fungi → Roquefort cheese (iii). This tests all four organism-product associations from NCERT."
  },
  {
    "id": 44,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Production of industrial products using microbes on a large scale requires growing them in very large vessels called:",
    "options": [
      "Bioreactors",
      "Fermentors",
      "Incubators",
      "Autoclaves"
    ],
    "correct": 1,
    "explanation": "NCERT specifically states: 'Production on an industrial scale requires growing microbes in very large vessels called fermentors.' While bioreactors is a term used in biotechnology, in this NCERT context the correct term is fermentors."
  },
  {
    "id": 45,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "The yeast <i>Saccharomyces cerevisiae</i> is commonly called:",
    "options": [
      "Brewer's yeast only",
      "Baker's yeast only",
      "Both brewer's yeast and baker's yeast",
      "Fission yeast"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'the same yeast Saccharomyces cerevisiae used for bread-making and commonly called brewer\\'s yeast.' So it is used as both baker's yeast (bread) and brewer's yeast (beverages). This dual usage is a commonly tested NEET concept."
  },
  {
    "id": 46,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Which of the following alcoholic beverages are produced <b>without distillation</b>?",
    "options": [
      "Whisky and brandy",
      "Wine and beer",
      "Rum and whisky",
      "Brandy and beer"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Wine and beer are produced without distillation whereas whisky, brandy and rum are produced by distillation of the fermented broth.' This distillation vs non-distillation distinction is a very high-frequency NEET question."
  },
  {
    "id": 47,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Which of the following alcoholic beverages are produced <b>by distillation</b> of the fermented broth?<br>(i) Wine<br>(ii) Beer<br>(iii) Whisky<br>(iv) Brandy<br>(v) Rum",
    "options": [
      "(i), (ii) and (iii)",
      "(iii), (iv) and (v)",
      "(i), (iii) and (v)",
      "(ii), (iv) and (v)"
    ],
    "correct": 1,
    "explanation": "Whisky, brandy, and rum are produced by distillation. Wine and beer are produced WITHOUT distillation. This is a direct NCERT categorization."
  },
  {
    "id": 48,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Assertion (A): Different types of alcoholic drinks are obtained from fermentation.<br>Reason (R): The type of raw material used and the type of processing (with or without distillation) determine the kind of alcoholic drink produced.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both are true and R correctly explains A. NCERT states: 'Depending on the type of raw material used for fermentation and the type of processing (with or without distillation) different types of alcoholic drinks are obtained.'"
  },
  {
    "id": 49,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Brewer's yeast ferments which of the following to produce ethanol?",
    "options": [
      "Malted cereals and fruit juices",
      "Cellulose and starch only",
      "Proteins and lipids",
      "Amino acids and fatty acids"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'Saccharomyces cerevisiae...is used for fermenting malted cereals and fruit juices, to produce ethanol.' Not cellulose, proteins, or lipids."
  },
  {
    "id": 50,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Consider the following statements:<br>Statement I: Wine is produced by distillation of fermented broth.<br>Statement II: Rum is produced without distillation.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correct": 1,
    "explanation": "Both are INCORRECT. Wine is produced WITHOUT distillation, and rum is produced WITH distillation. This is a reversal trap – NCERT clearly categorizes wine & beer (no distillation) and whisky, brandy & rum (distillation)."
  },
  {
    "id": 51,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Which of the following is <b>correctly</b> matched?",
    "options": [
      "Beer – Distilled beverage",
      "Whisky – Non-distilled beverage",
      "Wine – Non-distilled beverage",
      "Brandy – Non-distilled beverage"
    ],
    "correct": 2,
    "explanation": "Wine is a non-distilled beverage as per NCERT. Beer is also non-distilled, but option A incorrectly says 'distilled.' Whisky and brandy are distilled beverages."
  },
  {
    "id": 52,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Read the following statements about yeasts in industrial products:<br>(i) Yeasts have been used from time immemorial for beverage production<br>(ii) Saccharomyces cerevisiae is used for both bread and alcoholic beverages<br>(iii) The end product of yeast fermentation is methanol<br><br>Which statements are <b>correct</b>?",
    "options": [
      "(i) and (ii) only",
      "(ii) and (iii) only",
      "(i) and (iii) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Statements (i) and (ii) are correct per NCERT. Statement (iii) is wrong – yeast fermentation produces ETHANOL, not methanol. Methanol vs ethanol is a classic NEET trap."
  },
  {
    "id": 53,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Assertion (A): Beer and wine are produced without distillation.<br>Reason (R): Beer and wine have higher ethanol concentration compared to whisky and rum.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is true – NCERT confirms beer and wine are non-distilled. Reason is false – distilled beverages like whisky and rum have HIGHER alcohol concentration, not lower. Distillation increases ethanol concentration."
  },
  {
    "id": 54,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Which of the following is the <b>common organism</b> used for both bread making and production of alcoholic beverages?",
    "options": [
      "Lactobacillus",
      "Aspergillus niger",
      "Saccharomyces cerevisiae",
      "Penicillium notatum"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'the same yeast Saccharomyces cerevisiae used for bread-making and commonly called brewer\\'s yeast.' One organism, two major industrial applications."
  },
  {
    "id": 55,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "The metabolic reaction in yeast that produces ethanol during fermentation is:",
    "options": [
      "Aerobic respiration",
      "Alcoholic fermentation (anaerobic)",
      "Lactic acid fermentation",
      "Photophosphorylation"
    ],
    "correct": 1,
    "explanation": "Yeast performs alcoholic fermentation under anaerobic conditions: Glucose → 2 Ethanol + 2 CO₂. NCERT hints at this by asking 'Do you recollect the metabolic reactions which result in the production of ethanol by yeast?'"
  },
  {
    "id": 56,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Match the following beverages with their processing type:<br>(a) Wine → (i) Distilled<br>(b) Whisky → (ii) Non-distilled<br>(c) Beer → (iii) Distilled<br>(d) Rum → (iv) Non-distilled<br><br>Select the correct match:",
    "options": [
      "a-ii, b-i, c-iv, d-iii",
      "a-i, b-ii, c-iii, d-iv",
      "a-ii, b-iii, c-i, d-iv",
      "a-iv, b-i, c-ii, d-iii"
    ],
    "correct": 0,
    "explanation": "Wine – Non-distilled (ii); Whisky – Distilled (i); Beer – Non-distilled (iv); Rum – Distilled (iii). NCERT: Wine & beer = no distillation; Whisky, brandy & rum = distillation."
  },
  {
    "id": 57,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "Which of the following is <b>NOT</b> a distilled alcoholic beverage as per NCERT?",
    "options": [
      "Whisky",
      "Brandy",
      "Wine",
      "Rum"
    ],
    "correct": 2,
    "explanation": "Wine is NOT distilled. NCERT clearly states: 'Wine and beer are produced without distillation whereas whisky, brandy and rum are produced by distillation.'"
  },
  {
    "id": 58,
    "topic": "Microbes in Industrial Products – Beverages",
    "q": "The raw materials fermented by <i>Saccharomyces cerevisiae</i> for beverage production include:<br>(i) Malted cereals<br>(ii) Fruit juices<br>(iii) Cellulose<br>(iv) Animal proteins",
    "options": [
      "(i) and (ii) only",
      "(i), (ii) and (iii)",
      "(iii) and (iv) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "NCERT states S. cerevisiae ferments 'malted cereals and fruit juices.' Cellulose and animal proteins are NOT mentioned as substrates for yeast fermentation."
  },
  {
    "id": 59,
    "topic": "Antibiotics",
    "q": "The word 'antibiotic' literally means:",
    "options": [
      "For life",
      "Against life",
      "With life",
      "Without life"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Anti is a Greek word that means against, and bio means life, together they mean against life (in the context of disease-causing organisms).' However, for humans they are 'pro life.'"
  },
  {
    "id": 60,
    "topic": "Antibiotics",
    "q": "Antibiotics are chemical substances which are produced by some microbes and can:",
    "options": [
      "Kill disease-causing microbes only",
      "Retard the growth of disease-causing microbes only",
      "Kill or retard the growth of other disease-causing microbes",
      "Kill all types of cells including host cells"
    ],
    "correct": 2,
    "explanation": "NCERT states antibiotics 'can kill or retard the growth of other (disease-causing) microbes.' The 'or' is critical – antibiotics may be bactericidal (kill) OR bacteriostatic (retard growth). Students often miss the 'retard' part."
  },
  {
    "id": 61,
    "topic": "Antibiotics",
    "q": "The first antibiotic to be discovered was:",
    "options": [
      "Streptomycin",
      "Chloramphenicol",
      "Penicillin",
      "Tetracycline"
    ],
    "correct": 2,
    "explanation": "NCERT explicitly states: 'Penicillin was the first antibiotic to be discovered, and it was a chance discovery.' This is a very high-frequency NEET fact."
  },
  {
    "id": 62,
    "topic": "Antibiotics",
    "q": "Alexander Fleming discovered Penicillin while working on:",
    "options": [
      "Streptococcus bacteria",
      "Staphylococci bacteria",
      "Salmonella bacteria",
      "Bacillus bacteria"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Alexander Fleming while working on Staphylococci bacteria, once observed a mould growing in one of his unwashed culture plates.' Staphylococci (NOT Streptococci) is a very common NEET trap."
  },
  {
    "id": 63,
    "topic": "Antibiotics",
    "q": "The mould that inhibited the growth of <i>Staphylococci</i> in Fleming's culture plate was:",
    "options": [
      "Aspergillus niger",
      "Penicillium notatum",
      "Trichoderma polysporum",
      "Mucor mucedo"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'he named it Penicillin after the mould Penicillium notatum.' The antibiotic Penicillin is named after the mould that produces it."
  },
  {
    "id": 64,
    "topic": "Antibiotics",
    "q": "Assertion (A): The discovery of Penicillin was a chance discovery.<br>Reason (R): Fleming deliberately grew <i>Penicillium notatum</i> on his culture plates to test its antibacterial properties.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is true – NCERT calls it 'a chance discovery.' Reason is false – Fleming did NOT deliberately grow the mould. He observed it growing accidentally on his UNWASHED culture plates. The key word is 'unwashed' indicating it was accidental."
  },
  {
    "id": 65,
    "topic": "Antibiotics",
    "q": "The full potential of Penicillin as an effective antibiotic was established by:",
    "options": [
      "Alexander Fleming alone",
      "Ernest Chain and Howard Florey",
      "Watson and Crick",
      "Robert Koch and Louis Pasteur"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'its full potential as an effective antibiotic was established much later by Ernest Chain and Howard Florey.' Fleming discovered it; Chain and Florey established its potential. This role distinction is a NEET trap."
  },
  {
    "id": 66,
    "topic": "Antibiotics",
    "q": "Penicillin was extensively used to treat soldiers wounded in:",
    "options": [
      "World War I",
      "World War II",
      "Korean War",
      "Vietnam War"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'This antibiotic was extensively used to treat American soldiers wounded in World War II.' The specific war and nationality (American) are factual NEET points."
  },
  {
    "id": 67,
    "topic": "Antibiotics",
    "q": "Fleming, Chain, and Florey were awarded the Nobel Prize in the year:",
    "options": [
      "1928",
      "1940",
      "1945",
      "1953"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Fleming, Chain and Florey were awarded the Nobel Prize in 1945, for this discovery.' 1928 is sometimes confused as it was when Fleming first observed the mould."
  },
  {
    "id": 68,
    "topic": "Antibiotics",
    "q": "Consider the following statements:<br>(i) Penicillin was the first antibiotic discovered<br>(ii) Fleming was working on Streptococci when he discovered Penicillin<br>(iii) The mould was growing in an unwashed culture plate<br>(iv) Ernest Chain and Howard Florey established the full potential of Penicillin<br><br>Which statements are <b>correct</b>?",
    "options": [
      "(i), (ii), (iii) and (iv)",
      "(i), (iii) and (iv) only",
      "(i) and (ii) only",
      "(ii) and (iv) only"
    ],
    "correct": 1,
    "explanation": "Statement (ii) is INCORRECT – Fleming was working on STAPHYLOCOCCI, not Streptococci. This Staphylococci vs Streptococci confusion is the most tested NEET trap in this topic. Statements (i), (iii), and (iv) are correct."
  },
  {
    "id": 69,
    "topic": "Antibiotics",
    "q": "Which of the following diseases was <b>NOT</b> mentioned in NCERT as being treated by antibiotics?",
    "options": [
      "Plague",
      "Diphtheria",
      "Diabetes",
      "Leprosy"
    ],
    "correct": 2,
    "explanation": "NCERT mentions plague, whooping cough (kali khansi), diphtheria (gal ghotu), and leprosy (kusht rog) as diseases treated by antibiotics. Diabetes is a metabolic disorder NOT treated by antibiotics."
  },
  {
    "id": 70,
    "topic": "Antibiotics",
    "q": "Antibiotics are regarded as one of the most significant discoveries of:",
    "options": [
      "The eighteenth century",
      "The nineteenth century",
      "The twentieth century",
      "The twenty-first century"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Antibiotics produced by microbes are regarded as one of the most significant discoveries of the twentieth century.' This is a direct NCERT fact."
  },
  {
    "id": 71,
    "topic": "Antibiotics",
    "q": "Match the following:<br>(a) Discovery of Penicillin → (i) Ernest Chain and Howard Florey<br>(b) Establishment of full potential → (ii) Alexander Fleming<br>(c) Nobel Prize 1945 → (iii) Fleming, Chain and Florey<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-ii, b-i, c-iii",
      "a-i, b-ii, c-iii",
      "a-iii, b-i, c-ii",
      "a-ii, b-iii, c-i"
    ],
    "correct": 0,
    "explanation": "Discovery = Fleming (ii); Full potential = Chain & Florey (i); Nobel 1945 = All three (iii). NCERT clearly distinguishes the roles of all three scientists."
  },
  {
    "id": 72,
    "topic": "Antibiotics",
    "q": "Assertion (A): Antibiotics are 'against life' in the context of disease-causing organisms.<br>Reason (R): With reference to human beings, antibiotics are 'pro life'.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 1,
    "explanation": "Both A and R are true as per NCERT. However, R is NOT the explanation of A – they are two separate perspectives. Antibiotics being 'against life' of pathogens is not explained BY them being 'pro life' for humans; these are two different viewpoints."
  },
  {
    "id": 73,
    "topic": "Antibiotics",
    "q": "The chemical produced by the mould <i>Penicillium notatum</i> prevented the growth of:",
    "options": [
      "Streptococcus",
      "Staphylococci",
      "Salmonella",
      "Clostridium"
    ],
    "correct": 1,
    "explanation": "NCERT states that Fleming observed 'Staphylococci could not grow' around the mould. The mould's chemical (Penicillin) inhibited Staphylococci growth."
  },
  {
    "id": 74,
    "topic": "Antibiotics",
    "q": "Which of the following diseases mentioned in NCERT has the local name 'gal ghotu'?",
    "options": [
      "Plague",
      "Whooping cough",
      "Diphtheria",
      "Leprosy"
    ],
    "correct": 2,
    "explanation": "NCERT gives local names: whooping cough = kali khansi, diphtheria = gal ghotu, leprosy = kusht rog. Knowing these local names can be useful in NEET matching questions."
  },
  {
    "id": 75,
    "topic": "Antibiotics",
    "q": "Read the following statements:<br>Statement I: Penicillin was a planned and deliberate discovery by Alexander Fleming.<br>Statement II: Fleming observed that Staphylococci could not grow around a mould in his unwashed culture plate.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is incorrect – it was a CHANCE discovery, not planned. Statement II is correct – NCERT confirms Fleming observed Staphylococci unable to grow around the mould in his unwashed culture plate."
  },
  {
    "id": 76,
    "topic": "Antibiotics",
    "q": "Which of the following is the <b>correct</b> chronological sequence of events in the Penicillin story?",
    "options": [
      "Chain & Florey's work → Fleming's observation → Nobel Prize → Use in WWII",
      "Fleming's observation → Chain & Florey's work → Use in WWII → Nobel Prize in 1945",
      "Nobel Prize → Fleming's observation → Use in WWII → Chain & Florey's work",
      "Use in WWII → Fleming's observation → Nobel Prize → Chain & Florey's work"
    ],
    "correct": 1,
    "explanation": "Correct order: Fleming observed mould → Chain & Florey established full potential → Used in WWII for American soldiers → Nobel Prize in 1945. This chronological sequence is directly traceable from NCERT text."
  },
  {
    "id": 77,
    "topic": "Antibiotics",
    "q": "The word 'Penicillin' was named after:",
    "options": [
      "The scientist who discovered it",
      "The disease it was used to treat",
      "The mould Penicillium notatum",
      "The bacterium it was tested against"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'he named it Penicillin after the mould Penicillium notatum.' The antibiotic was named after its source organism, not the scientist or the disease."
  },
  {
    "id": 78,
    "topic": "Antibiotics",
    "q": "Which of the following correctly describes the role of Alexander Fleming in the discovery of Penicillin?",
    "options": [
      "He discovered the mould and established its full clinical potential",
      "He only observed the mould and the chemical it produced",
      "He established the full potential of Penicillin in clinical use",
      "He used Penicillin to treat American soldiers in WWII"
    ],
    "correct": 1,
    "explanation": "Fleming ONLY observed the mould and the chemical (Penicillin) it produced. The full potential was established by Chain & Florey LATER. Fleming did not himself establish clinical use. This distinction between discovery and clinical establishment is a key NEET concept."
  },
  {
    "id": 79,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "<i>Aspergillus niger</i> is used for the commercial production of:",
    "options": [
      "Acetic acid",
      "Butyric acid",
      "Citric acid",
      "Lactic acid"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Aspergillus niger (a fungus) of citric acid.' This is one of the most tested organism-product matchings in NEET."
  },
  {
    "id": 80,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "<i>Acetobacter aceti</i> is used for the production of:",
    "options": [
      "Citric acid",
      "Acetic acid",
      "Butyric acid",
      "Ethanol"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Acetobacter aceti (a bacterium) of acetic acid.' The name 'Aceto-' itself hints at acetic acid (vinegar). This is a direct NCERT fact."
  },
  {
    "id": 81,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "<i>Clostridium butylicum</i> is a bacterium that produces:",
    "options": [
      "Citric acid",
      "Lactic acid",
      "Butyric acid",
      "Acetic acid"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Clostridium butylicum (a bacterium) of butyric acid.' The name 'butylicum' correlates with butyric acid."
  },
  {
    "id": 82,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Which of the following is a <b>fungus</b> among the acid-producing microbes mentioned in NCERT?",
    "options": [
      "Acetobacter aceti",
      "Clostridium butylicum",
      "Aspergillus niger",
      "Lactobacillus"
    ],
    "correct": 2,
    "explanation": "NCERT specifically mentions Aspergillus niger as 'a fungus.' Acetobacter aceti, Clostridium butylicum, and Lactobacillus are all bacteria. This fungus vs bacterium distinction is a classic NEET trap."
  },
  {
    "id": 83,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Consider the following matches:<br>(i) Aspergillus niger – Citric acid – Fungus<br>(ii) Acetobacter aceti – Acetic acid – Bacterium<br>(iii) Clostridium butylicum – Butyric acid – Fungus<br>(iv) Lactobacillus – Lactic acid – Bacterium<br><br>Which of the above are <b>correctly</b> matched?",
    "options": [
      "(i), (ii) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(ii) and (iv) only",
      "(i) and (iii) only"
    ],
    "correct": 0,
    "explanation": "Statement (iii) is INCORRECT – Clostridium butylicum is a BACTERIUM, not a fungus. Among acid producers in NCERT, only Aspergillus niger is a fungus; all others (Acetobacter, Clostridium, Lactobacillus) are bacteria."
  },
  {
    "id": 84,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Lipases are used in:",
    "options": [
      "Clarification of fruit juices",
      "Detergent formulations",
      "Clot busting",
      "Immunosuppression"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Lipases are used in detergent formulations and are helpful in removing oily stains from the laundry.' Not for juice clarification (pectinases/proteases) or clot busting (streptokinase)."
  },
  {
    "id": 85,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Bottled fruit juices are clearer than homemade juices because they are clarified using:",
    "options": [
      "Lipases and amylases",
      "Pectinases and proteases",
      "Cellulases and lipases",
      "Ligases and isomerases"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'bottled juices are clarified by the use of pectinases and proteases.' This enzyme pair (pectinases + proteases) is a very high-frequency NEET fact. Lipases are for detergents, not juice clarification."
  },
  {
    "id": 86,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Streptokinase used as a 'clot buster' is produced by:",
    "options": [
      "Staphylococcus",
      "Streptococcus",
      "Clostridium",
      "Bacillus"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Streptokinase produced by the bacterium Streptococcus.' The prefix 'Strepto-' in streptokinase directly relates to Streptococcus. Note: Fleming worked on Staphylococci (not Streptococcus) – a common confusion."
  },
  {
    "id": 87,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Streptokinase is used as a 'clot buster' for removing clots from blood vessels of patients who have undergone:",
    "options": [
      "Renal failure",
      "Myocardial infarction leading to heart attack",
      "Liver cirrhosis",
      "Organ transplant"
    ],
    "correct": 1,
    "explanation": "NCERT states streptokinase is used 'for removing clots from the blood vessels of patients who have undergone myocardial infarction leading to heart attack.' This clinical application is a very important NEET fact."
  },
  {
    "id": 88,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Cyclosporin A, used as an immunosuppressive agent, is produced by:",
    "options": [
      "Monascus purpureus",
      "Trichoderma polysporum",
      "Penicillium notatum",
      "Aspergillus niger"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Cyclosporin A...is produced by the fungus Trichoderma polysporum.' Monascus purpureus produces statins, not cyclosporin A. This is a very high-frequency NEET organism-product matching question."
  },
  {
    "id": 89,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Cyclosporin A is used as an immunosuppressive agent in:",
    "options": [
      "Cancer chemotherapy",
      "Organ-transplant patients",
      "Myocardial infarction",
      "Blood cholesterol management"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Cyclosporin A, that is used as an immunosuppressive agent in organ-transplant patients.' It prevents immune rejection of transplanted organs."
  },
  {
    "id": 90,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Statins are produced by:",
    "options": [
      "Trichoderma polysporum",
      "Streptococcus",
      "Monascus purpureus",
      "Aspergillus niger"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Statins produced by the yeast Monascus purpureus.' Trichoderma polysporum produces Cyclosporin A. This organism swap is a classic NEET trap."
  },
  {
    "id": 91,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Statins are commercialised as:",
    "options": [
      "Clot busters",
      "Immunosuppressive agents",
      "Blood-cholesterol lowering agents",
      "Antibiotic agents"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Statins produced by the yeast Monascus purpureus have been commercialised as blood-cholesterol lowering agents.' Not clot busters (streptokinase) or immunosuppressants (cyclosporin A)."
  },
  {
    "id": 92,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Statins lower blood cholesterol by:",
    "options": [
      "Increasing cholesterol excretion",
      "Competitively inhibiting the enzyme responsible for cholesterol synthesis",
      "Breaking down cholesterol in blood",
      "Blocking cholesterol absorption from intestine"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'It acts by competitively inhibiting the enzyme responsible for synthesis of cholesterol.' The mechanism is competitive inhibition – this 'competitive' keyword is crucial for NEET."
  },
  {
    "id": 93,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Assertion (A): Statins act as blood-cholesterol lowering agents.<br>Reason (R): Statins competitively inhibit the enzyme responsible for cholesterol synthesis.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. Statins lower cholesterol BECAUSE they competitively inhibit the enzyme (HMG-CoA reductase) involved in cholesterol synthesis. This is a direct cause-effect relationship from NCERT."
  },
  {
    "id": 94,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Lipases – Detergent formulations",
      "Pectinases – Juice clarification",
      "Streptokinase – Immunosuppression",
      "Statins – Blood cholesterol lowering"
    ],
    "correct": 2,
    "explanation": "Streptokinase is a CLOT BUSTER (not immunosuppressive). Cyclosporin A is the immunosuppressive agent. Streptokinase–immunosuppression is the incorrect match. This swap between streptokinase and cyclosporin A applications is a frequent NEET trap."
  },
  {
    "id": 95,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Streptokinase has been modified by <b>genetic engineering</b> for its use as a clot buster. This statement highlights the role of:",
    "options": [
      "Traditional breeding",
      "Biotechnology",
      "Natural selection",
      "Spontaneous mutation"
    ],
    "correct": 1,
    "explanation": "NCERT states streptokinase is 'produced by the bacterium Streptococcus and modified by genetic engineering.' Genetic engineering is a key tool of biotechnology."
  },
  {
    "id": 96,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Consider the following bioactive molecules:<br>(a) Cyclosporin A – Trichoderma polysporum – Immunosuppressive<br>(b) Statins – Monascus purpureus – Clot buster<br>(c) Streptokinase – Streptococcus – Blood cholesterol lowering<br><br>Which of the above are <b>correctly</b> matched?",
    "options": [
      "(a) only",
      "(a) and (b) only",
      "(b) and (c) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Only (a) is correct. (b) is wrong – statins are cholesterol-lowering agents, NOT clot busters. (c) is wrong – streptokinase is a clot buster, NOT cholesterol-lowering. The applications of statins, streptokinase, and cyclosporin A are frequently swapped in NEET to confuse students."
  },
  {
    "id": 97,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Which of the following organisms is classified as a <b>yeast</b> in NCERT?",
    "options": [
      "Trichoderma polysporum",
      "Aspergillus niger",
      "Monascus purpureus",
      "Acetobacter aceti"
    ],
    "correct": 2,
    "explanation": "NCERT specifically calls Monascus purpureus a 'yeast.' Trichoderma polysporum and Aspergillus niger are fungi. Acetobacter aceti is a bacterium. The organism classification matters in NEET."
  },
  {
    "id": 98,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Match the following enzymes/bioactive molecules with their applications:<br>(a) Lipases → (i) Clot buster<br>(b) Pectinases → (ii) Detergent formulations<br>(c) Streptokinase → (iii) Immunosuppression<br>(d) Cyclosporin A → (iv) Juice clarification<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-ii, b-iv, c-i, d-iii",
      "a-iv, b-ii, c-iii, d-i",
      "a-ii, b-i, c-iv, d-iii",
      "a-iii, b-iv, c-ii, d-i"
    ],
    "correct": 0,
    "explanation": "Lipases → Detergents (ii); Pectinases → Juice clarification (iv); Streptokinase → Clot buster (i); Cyclosporin A → Immunosuppression (iii). This is a comprehensive matching question covering all major enzyme/bioactive molecule applications from NCERT."
  },
  {
    "id": 99,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Which of the following is <b>correct</b> about <i>Trichoderma polysporum</i>?",
    "options": [
      "It is a yeast that produces statins",
      "It is a bacterium that produces streptokinase",
      "It is a fungus that produces cyclosporin A",
      "It is a fungus that produces citric acid"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'cyclosporin A...is produced by the fungus Trichoderma polysporum.' It is classified as a fungus (not yeast or bacterium), and it produces cyclosporin A (not statins or citric acid)."
  },
  {
    "id": 100,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Lipases in detergent formulations are helpful in removing:",
    "options": [
      "Protein stains",
      "Oily stains from laundry",
      "Blood stains",
      "Rust stains"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Lipases are used in detergent formulations and are helpful in removing oily stains from the laundry.' Lipases break down lipids/fats, hence they remove OILY stains specifically."
  },
  {
    "id": 101,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Consider the following statements:<br>Statement I: <i>Aspergillus niger</i> is a bacterium used for citric acid production.<br>Statement II: <i>Saccharomyces cerevisiae</i> is used for commercial production of ethanol.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is incorrect – Aspergillus niger is a FUNGUS, not a bacterium. Statement II is correct – NCERT states 'Yeast (Saccharomyces cerevisiae) is used for commercial production of ethanol.' The fungus vs bacterium classification trap for Aspergillus niger is very common in NEET."
  },
  {
    "id": 102,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Assertion (A): Bottled fruit juices are clearer than homemade juices.<br>Reason (R): Bottled juices are clarified using lipases and cellulases.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is true – NCERT confirms bottled juices are clearer. Reason is false – bottled juices are clarified by PECTINASES and PROTEASES, not lipases and cellulases. The enzyme swap is a deliberate NEET trap."
  },
  {
    "id": 103,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Which of the following pairs of organisms are both <b>fungi</b> as per NCERT classification?",
    "options": [
      "Aspergillus niger and Acetobacter aceti",
      "Trichoderma polysporum and Aspergillus niger",
      "Monascus purpureus and Clostridium butylicum",
      "Lactobacillus and Streptococcus"
    ],
    "correct": 1,
    "explanation": "Both Trichoderma polysporum (produces Cyclosporin A) and Aspergillus niger (produces citric acid) are classified as fungi in NCERT. Acetobacter, Clostridium, Lactobacillus, and Streptococcus are all bacteria. Monascus purpureus is a yeast."
  },
  {
    "id": 104,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "How many of the following acid producers are <b>bacteria</b>?<br>(i) Aspergillus niger<br>(ii) Acetobacter aceti<br>(iii) Clostridium butylicum<br>(iv) Lactobacillus",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 2,
    "explanation": "Acetobacter aceti, Clostridium butylicum, and Lactobacillus are bacteria (three). Aspergillus niger is a FUNGUS. So 3 out of 4 are bacteria."
  },
  {
    "id": 105,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Streptokinase is described as a 'clot buster' because it:",
    "options": [
      "Prevents blood clot formation",
      "Removes clots from blood vessels",
      "Increases blood viscosity",
      "Produces fibrinogen"
    ],
    "correct": 1,
    "explanation": "NCERT states streptokinase is 'used as a clot buster for removing clots from the blood vessels of patients who have undergone myocardial infarction.' It REMOVES existing clots, not just prevents their formation."
  },
  {
    "id": 106,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Which of the following microbe–product–application combinations is <b>completely correct</b>?",
    "options": [
      "Monascus purpureus – Cyclosporin A – Immunosuppression",
      "Trichoderma polysporum – Statins – Cholesterol lowering",
      "Streptococcus – Streptokinase – Clot buster",
      "Aspergillus niger – Acetic acid – Food preservation"
    ],
    "correct": 2,
    "explanation": "Streptococcus → Streptokinase → Clot buster is completely correct. Option A is wrong (Monascus produces statins, not cyclosporin A). Option B is wrong (Trichoderma produces cyclosporin A, not statins). Option D is wrong (Aspergillus niger produces citric acid, not acetic acid)."
  },
  {
    "id": 107,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "The type of inhibition by which statins lower blood cholesterol is:",
    "options": [
      "Non-competitive inhibition",
      "Uncompetitive inhibition",
      "Competitive inhibition",
      "Allosteric inhibition"
    ],
    "correct": 2,
    "explanation": "NCERT states statins act by 'competitively inhibiting the enzyme responsible for synthesis of cholesterol.' Competitive inhibition means statins structurally resemble the substrate and compete for the active site of the enzyme."
  },
  {
    "id": 108,
    "topic": "Chemicals, Enzymes and Other Bioactive Molecules",
    "q": "Match the following microbes with the type of organism they are:<br>(a) Aspergillus niger → (i) Yeast<br>(b) Monascus purpureus → (ii) Bacterium<br>(c) Streptococcus → (iii) Fungus<br>(d) Acetobacter aceti → (iv) Bacterium<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-iii, b-i, c-ii, d-iv",
      "a-i, b-iii, c-iv, d-ii",
      "a-iii, b-ii, c-i, d-iv",
      "a-ii, b-i, c-iv, d-iii"
    ],
    "correct": 0,
    "explanation": "Aspergillus niger = Fungus (iii); Monascus purpureus = Yeast (i); Streptococcus = Bacterium (ii); Acetobacter aceti = Bacterium (iv). NCERT explicitly classifies each organism. Getting the classification right is essential for NEET."
  },
  {
    "id": 109,
    "topic": "Microbes in Sewage Treatment",
    "q": "Municipal waste-water is also called sewage. It contains:",
    "options": [
      "Only inorganic salts and minerals",
      "Large amounts of organic matter and microbes, many of which are pathogenic",
      "Only pathogenic microbes without organic matter",
      "Purified water with traces of chemicals"
    ],
    "correct": 1,
    "explanation": "NCERT states sewage 'contains large amounts of organic matter and microbes. Many of which are pathogenic.' It is not just microbes or just organic matter — both are present, and many microbes are pathogenic."
  },
  {
    "id": 110,
    "topic": "Microbes in Sewage Treatment",
    "q": "Treatment of waste water in sewage treatment plants (STPs) is carried out by:",
    "options": [
      "Autotrophic microbes added externally",
      "Heterotrophic microbes naturally present in the sewage",
      "Chemical agents like chlorine only",
      "Photosynthetic algae added to the sewage"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Treatment of waste water is done by the heterotrophic microbes naturally present in the sewage.' Key points: (1) heterotrophic (NOT autotrophic), (2) naturally present (NOT externally added). Both are common NEET traps."
  },
  {
    "id": 111,
    "topic": "Microbes in Sewage Treatment",
    "q": "Sewage treatment is carried out in how many stages?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'This treatment is carried out in two stages' – Primary treatment (physical) and Secondary treatment (biological). Students sometimes add a 'tertiary' stage which is NOT mentioned in NCERT."
  },
  {
    "id": 112,
    "topic": "Microbes in Sewage Treatment",
    "q": "Primary treatment of sewage basically involves:",
    "options": [
      "Biological degradation of organic matter",
      "Physical removal of particles through filtration and sedimentation",
      "Chemical treatment with antibiotics",
      "Anaerobic digestion of sludge"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'These treatment steps basically involve physical removal of particles – large and small – from the sewage through filtration and sedimentation.' Primary treatment is PHYSICAL, not biological or chemical."
  },
  {
    "id": 113,
    "topic": "Microbes in Sewage Treatment",
    "q": "During primary treatment of sewage, the correct sequence of steps is:",
    "options": [
      "Sedimentation of grit → Removal of floating debris → Formation of primary sludge",
      "Removal of floating debris by sequential filtration → Removal of grit by sedimentation → Formation of primary sludge and effluent",
      "Aeration → Floc formation → Sedimentation",
      "Anaerobic digestion → Filtration → Release into rivers"
    ],
    "correct": 1,
    "explanation": "NCERT states the sequence: (1) floating debris removed by sequential filtration, (2) grit (soil and small pebbles) removed by sedimentation, (3) solids that settle = primary sludge, supernatant = effluent. Options C and D describe secondary treatment/later stages."
  },
  {
    "id": 114,
    "topic": "Microbes in Sewage Treatment",
    "q": "In primary treatment of sewage, the 'grit' that is removed by sedimentation refers to:",
    "options": [
      "Floating organic debris",
      "Soil and small pebbles",
      "Bacterial flocs",
      "Activated sludge"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Then the grit (soil and small pebbles) are removed by sedimentation.' Grit specifically refers to soil and small pebbles – not floating debris (removed by filtration) or flocs/activated sludge (formed during secondary treatment)."
  },
  {
    "id": 115,
    "topic": "Microbes in Sewage Treatment",
    "q": "During primary treatment, all solids that settle form the <b>primary sludge</b> and the supernatant forms the:",
    "options": [
      "Activated sludge",
      "Biogas",
      "Effluent",
      "Flocs"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'All solids that settle form the primary sludge, and the supernatant forms the effluent.' The effluent (supernatant) is then taken for secondary treatment. Activated sludge is formed during secondary treatment."
  },
  {
    "id": 116,
    "topic": "Microbes in Sewage Treatment",
    "q": "Assertion (A): Primary treatment of sewage is also called biological treatment.<br>Reason (R): Primary treatment involves physical removal of particles through filtration and sedimentation.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is false but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE – Primary treatment is PHYSICAL treatment, NOT biological. SECONDARY treatment is called biological treatment. Reason is TRUE – primary treatment does involve physical removal. This primary (physical) vs secondary (biological) swap is a very common NEET trap."
  },
  {
    "id": 117,
    "topic": "Microbes in Sewage Treatment",
    "q": "In secondary treatment, the primary effluent is passed into large aeration tanks where:",
    "options": [
      "It is left undisturbed for natural sedimentation",
      "It is constantly agitated mechanically and air is pumped into it",
      "Anaerobic bacteria digest the organic matter",
      "Chemical disinfectants are added"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The primary effluent is passed into large aeration tanks where it is constantly agitated mechanically and air is pumped into it.' Both mechanical agitation AND air pumping occur – this creates conditions for aerobic microbes to grow."
  },
  {
    "id": 118,
    "topic": "Microbes in Sewage Treatment",
    "q": "Flocs formed during secondary treatment of sewage are:",
    "options": [
      "Masses of fungi only",
      "Masses of bacteria associated with fungal filaments to form mesh-like structures",
      "Chemical precipitates of organic matter",
      "Colonies of anaerobic bacteria"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'vigorous growth of useful aerobic microbes into flocs (masses of bacteria associated with fungal filaments to form mesh like structures).' Flocs contain BOTH bacteria AND fungal filaments – not bacteria alone or fungi alone. They are AEROBIC, not anaerobic."
  },
  {
    "id": 119,
    "topic": "Microbes in Sewage Treatment",
    "q": "Consider the following statements about flocs:<br>(i) They are masses of bacteria only<br>(ii) They contain bacteria associated with fungal filaments<br>(iii) They form mesh-like structures<br>(iv) They are formed by anaerobic microbes<br><br>Which statements are <b>correct</b>?",
    "options": [
      "(i) and (iv) only",
      "(ii) and (iii) only",
      "(i), (ii) and (iii)",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "Only (ii) and (iii) are correct. (i) is wrong – flocs are bacteria ASSOCIATED WITH fungal filaments (not bacteria only). (iv) is wrong – flocs are formed by AEROBIC microbes in aeration tanks, not anaerobic."
  },
  {
    "id": 120,
    "topic": "Microbes in Sewage Treatment",
    "q": "BOD (Biochemical Oxygen Demand) refers to:",
    "options": [
      "The amount of oxygen dissolved in water at a given temperature",
      "The amount of oxygen that would be consumed if all the organic matter in one litre of water were oxidised by bacteria",
      "The total amount of organic matter in sewage",
      "The amount of CO₂ released during aerobic respiration in water"
    ],
    "correct": 1,
    "explanation": "NCERT defines: 'BOD refers to the amount of the oxygen that would be consumed if all the organic matter in one litre of water were oxidised by bacteria.' This exact definition is extremely important for NEET – note the key words: oxygen, organic matter, one litre, oxidised by bacteria."
  },
  {
    "id": 121,
    "topic": "Microbes in Sewage Treatment",
    "q": "The BOD test measures:",
    "options": [
      "The amount of organic matter directly",
      "The rate of uptake of oxygen by micro-organisms in a sample of water",
      "The amount of dissolved CO₂ in water",
      "The number of bacteria present in sewage"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The BOD test measures the rate of uptake of oxygen by micro-organisms in a sample of water.' It is an INDIRECT measure of organic matter – this 'indirect' nature is a key NEET concept."
  },
  {
    "id": 122,
    "topic": "Microbes in Sewage Treatment",
    "q": "Assertion (A): BOD is a direct measure of the organic matter present in water.<br>Reason (R): The BOD test measures the rate of uptake of oxygen by micro-organisms in a sample of water.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is false but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE – BOD is an INDIRECT measure of organic matter, not direct. NCERT states: 'indirectly, BOD is a measure of the organic matter present in the water.' Reason is TRUE. The word 'indirectly' is one of the biggest NEET traps in this topic."
  },
  {
    "id": 123,
    "topic": "Microbes in Sewage Treatment",
    "q": "Which of the following statements about BOD is <b>correct</b>?",
    "options": [
      "The greater the BOD, the less polluting the water",
      "The greater the BOD of waste water, more is its polluting potential",
      "BOD has no relation to pollution",
      "Lower BOD indicates more organic matter in water"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The greater the BOD of waste water, more is its polluting potential.' Higher BOD means more organic matter, which means more pollution. This direct relationship (high BOD = high pollution) is frequently tested in NEET."
  },
  {
    "id": 124,
    "topic": "Microbes in Sewage Treatment",
    "q": "During secondary treatment, the microbes growing as flocs consume the major part of organic matter in the effluent, which leads to:",
    "options": [
      "Increase in BOD",
      "Significant reduction in BOD",
      "No change in BOD",
      "Increase in pathogenic microbes"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'these microbes consume the major part of the organic matter in the effluent. This significantly reduces the BOD of the effluent.' Less organic matter = less oxygen demand = reduced BOD."
  },
  {
    "id": 125,
    "topic": "Microbes in Sewage Treatment",
    "q": "After BOD is reduced significantly during secondary treatment, the effluent is passed into a settling tank where the bacterial flocs sediment to form:",
    "options": [
      "Primary sludge",
      "Activated sludge",
      "Grit",
      "Biogas"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'the effluent is then passed into a settling tank where the bacterial flocs are allowed to sediment. This sediment is called activated sludge.' Primary sludge forms during primary treatment. Activated sludge is specific to secondary treatment."
  },
  {
    "id": 126,
    "topic": "Microbes in Sewage Treatment",
    "q": "A small part of the activated sludge is pumped back into the aeration tank to serve as:",
    "options": [
      "Nutrient source",
      "Chemical catalyst",
      "Inoculum",
      "Biogas substrate"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'A small part of the activated sludge is pumped back into the aeration tank to serve as the inoculum.' The recycled sludge provides the initial microbial population for the next batch of sewage treatment. The word 'inoculum' is also used in curd formation."
  },
  {
    "id": 127,
    "topic": "Microbes in Sewage Treatment",
    "q": "The remaining <b>major part</b> of the activated sludge is pumped into:",
    "options": [
      "Aeration tanks",
      "Primary settling tank",
      "Anaerobic sludge digesters",
      "Natural water bodies directly"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The remaining major part of the sludge is pumped into large tanks called anaerobic sludge digesters.' KEY: Small part → aeration tank (inoculum); Major part → anaerobic sludge digesters. This 'small vs major' distinction is a classic NEET trap."
  },
  {
    "id": 128,
    "topic": "Microbes in Sewage Treatment",
    "q": "Consider the following statements about activated sludge:<br>Statement I: A major part of activated sludge is pumped back into the aeration tank as inoculum.<br>Statement II: A small part of activated sludge is pumped into anaerobic sludge digesters.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correct": 1,
    "explanation": "BOTH statements are INCORRECT – they are REVERSED. NCERT says: SMALL part → back to aeration tank as inoculum; MAJOR part → anaerobic sludge digesters. This reversal is one of the most frequent NEET traps in sewage treatment."
  },
  {
    "id": 129,
    "topic": "Microbes in Sewage Treatment",
    "q": "In anaerobic sludge digesters, the bacteria and fungi in the sludge are digested by:",
    "options": [
      "Aerobic bacteria",
      "Anaerobic bacteria",
      "Fungal enzymes",
      "Chemical treatment"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'other kinds of bacteria, which grow anaerobically, digest the bacteria and the fungi in the sludge.' The digesters are ANAEROBIC – different from the AEROBIC conditions in aeration tanks."
  },
  {
    "id": 130,
    "topic": "Microbes in Sewage Treatment",
    "q": "During anaerobic digestion of sludge, bacteria produce a mixture of gases including:",
    "options": [
      "Oxygen, nitrogen and carbon dioxide",
      "Methane, hydrogen sulphide and carbon dioxide",
      "Oxygen, methane and nitrogen",
      "Hydrogen, helium and methane"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'bacteria produce a mixture of gases such as methane, hydrogen sulphide and carbon dioxide.' These three gases form biogas. Note: Oxygen is NOT produced (anaerobic conditions)."
  },
  {
    "id": 131,
    "topic": "Microbes in Sewage Treatment",
    "q": "Biogas produced during anaerobic digestion of sludge can be used as a source of energy because it is:",
    "options": [
      "Radioactive",
      "Inflammable",
      "Acidic",
      "Non-toxic"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'These gases form biogas and can be used as source of energy as it is inflammable.' The inflammable nature (due to methane) makes it useful as fuel/energy source."
  },
  {
    "id": 132,
    "topic": "Microbes in Sewage Treatment",
    "q": "The effluent from the <b>secondary</b> treatment plant is generally released into:",
    "options": [
      "Aeration tanks for re-treatment",
      "Anaerobic sludge digesters",
      "Natural water bodies like rivers and streams",
      "Underground storage tanks"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The effluent from the secondary treatment plant is generally released into natural water bodies like rivers and streams.' After secondary treatment, BOD is sufficiently reduced for safe discharge."
  },
  {
    "id": 133,
    "topic": "Microbes in Sewage Treatment",
    "q": "Assertion (A): The microbes in the aeration tank during secondary treatment are aerobic.<br>Reason (R): The microbes in the anaerobic sludge digesters are also aerobic.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is TRUE – aeration tanks promote aerobic microbes (air is pumped in). Reason is FALSE – anaerobic sludge digesters contain ANAEROBIC bacteria (not aerobic). This aerobic (aeration tank) vs anaerobic (sludge digester) distinction is a key NEET concept."
  },
  {
    "id": 134,
    "topic": "Microbes in Sewage Treatment",
    "q": "The correct sequence of steps in sewage treatment is:",
    "options": [
      "Aeration → Filtration → Sedimentation → Anaerobic digestion",
      "Sequential filtration → Sedimentation → Aeration → Settling → Anaerobic digestion",
      "Anaerobic digestion → Aeration → Filtration → Release",
      "Settling → Aeration → Sequential filtration → Anaerobic digestion"
    ],
    "correct": 1,
    "explanation": "Primary treatment: Sequential filtration (floating debris) → Sedimentation (grit) → then Secondary treatment: Aeration (floc formation, BOD reduction) → Settling (activated sludge) → Anaerobic digestion (biogas). Option B follows the correct NCERT sequence."
  },
  {
    "id": 135,
    "topic": "Microbes in Sewage Treatment",
    "q": "Which of the following statements about sewage treatment is <b>correct</b>?",
    "options": [
      "This methodology has been practiced for about a decade",
      "No man-made technology has been able to rival microbial treatment of sewage",
      "Sewage treatment using microbes was recently discovered",
      "Man-made technologies have completely replaced microbial sewage treatment"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'This methodology has been practiced for more than a century now' and 'no man-made technology has been able to rival the microbial treatment of sewage.' Option A (decade) and C (recently) are wrong – it's been >100 years."
  },
  {
    "id": 136,
    "topic": "Microbes in Sewage Treatment",
    "q": "The Ganga Action Plan and Yamuna Action Plan were initiated by:",
    "options": [
      "Ministry of Health and Family Welfare",
      "Ministry of Environment and Forests",
      "Ministry of Water Resources",
      "Ministry of Urban Development"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The Ministry of Environment and Forests has initiated Ganga Action Plan and Yamuna Action Plan to save these major rivers of our country from pollution.' This specific ministry name is a factual NEET point."
  },
  {
    "id": 137,
    "topic": "Microbes in Sewage Treatment",
    "q": "Untreated sewage discharged directly into rivers leads to:<br>(i) River pollution<br>(ii) Increase in water-borne diseases<br>(iii) Decrease in BOD of river water<br><br>Which of the above are correct?",
    "options": [
      "(i) and (ii) only",
      "(i) and (iii) only",
      "(ii) and (iii) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Statements (i) and (ii) are correct – NCERT states untreated sewage causes 'pollution and increase in water-borne diseases.' Statement (iii) is WRONG – untreated sewage INCREASES BOD (more organic matter = higher BOD = more pollution), not decreases it."
  },
  {
    "id": 138,
    "topic": "Microbes in Sewage Treatment",
    "q": "Match the following:<br>(a) Primary sludge → (i) Sediment of bacterial flocs after secondary treatment<br>(b) Activated sludge → (ii) Solids that settle during primary treatment<br>(c) Effluent → (iii) Mixture of methane, H₂S, CO₂<br>(d) Biogas → (iv) Supernatant from primary settling tank<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-ii, b-i, c-iv, d-iii",
      "a-i, b-ii, c-iii, d-iv",
      "a-iv, b-iii, c-ii, d-i",
      "a-ii, b-iv, c-i, d-iii"
    ],
    "correct": 0,
    "explanation": "Primary sludge = solids settled during primary treatment (ii); Activated sludge = sediment of bacterial flocs after secondary treatment (i); Effluent = supernatant from primary settling tank (iv); Biogas = methane + H₂S + CO₂ mixture (iii). This comprehensive matching tests all key terms from sewage treatment."
  },
  {
    "id": 139,
    "topic": "Microbes in Sewage Treatment",
    "q": "Read the following statements and select the <b>incorrect</b> one:",
    "options": [
      "Primary treatment involves physical removal of particles",
      "Secondary treatment is also called biological treatment",
      "Flocs are formed during primary treatment",
      "BOD is an indirect measure of organic matter in water"
    ],
    "correct": 2,
    "explanation": "Flocs are formed during SECONDARY treatment (in aeration tanks), NOT during primary treatment. Primary treatment involves only physical processes (filtration and sedimentation). This is a very common NEET trap – associating flocs with the wrong treatment stage."
  },
  {
    "id": 140,
    "topic": "Microbes in Sewage Treatment",
    "q": "Assertion (A): A small part of activated sludge is recycled back to the aeration tank.<br>Reason (R): This recycled sludge serves as an inoculum providing the microbial population for the next cycle of treatment.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. The small part of activated sludge is recycled BECAUSE it contains microbes that serve as inoculum – providing the starter microbial population for the next batch of treatment. This is directly from NCERT."
  },
  {
    "id": 141,
    "topic": "Microbes in Sewage Treatment",
    "q": "Which of the following is the correct relationship between BOD and pollution?",
    "options": [
      "High BOD = Low pollution",
      "High BOD = High polluting potential",
      "BOD is unrelated to pollution",
      "Zero BOD = Maximum pollution"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The greater the BOD of waste water, more is its polluting potential.' Higher organic matter → Higher oxygen demand → Higher BOD → Greater pollution. This direct proportionality is a NEET favourite."
  },
  {
    "id": 142,
    "topic": "Microbes in Sewage Treatment",
    "q": "Consider the following flow chart of sewage treatment:<br>Sewage → [A] → Primary sludge + Effluent → [B] → Activated sludge + Treated effluent → [C] → Biogas<br><br>Identify A, B, and C:",
    "options": [
      "A-Secondary treatment, B-Primary treatment, C-Aeration",
      "A-Primary treatment, B-Secondary treatment, C-Anaerobic digestion",
      "A-Anaerobic digestion, B-Primary treatment, C-Secondary treatment",
      "A-Aeration, B-Filtration, C-Primary treatment"
    ],
    "correct": 1,
    "explanation": "A = Primary treatment (produces primary sludge + effluent); B = Secondary treatment (produces activated sludge + treated effluent); C = Anaerobic digestion (produces biogas from activated sludge). This follows the exact NCERT sequence."
  },
  {
    "id": 143,
    "topic": "Microbes in Sewage Treatment",
    "q": "The purpose of the Ganga Action Plan and Yamuna Action Plan is to:",
    "options": [
      "Increase industrial discharge into rivers",
      "Build large number of sewage treatment plants so only treated sewage is discharged",
      "Ban all human activities near rivers",
      "Divert river water for irrigation only"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Under these plans, it is proposed to build a large number of sewage treatment plants so that only treated sewage may be discharged in the rivers.' The focus is on increasing STPs to reduce untreated sewage discharge."
  },
  {
    "id": 144,
    "topic": "Microbes in Sewage Treatment",
    "q": "During secondary treatment, the useful microbes that form flocs are:",
    "options": [
      "Anaerobic",
      "Aerobic",
      "Facultative anaerobes only",
      "Chemolithotrophs"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'vigorous growth of useful aerobic microbes into flocs.' Air is actively pumped into aeration tanks to support AEROBIC microbes. Anaerobic bacteria are involved later in the sludge digesters, not in floc formation."
  },
  {
    "id": 145,
    "topic": "Microbes in Sewage Treatment",
    "q": "Which of the following components of biogas is responsible for making it a useful source of energy?",
    "options": [
      "Carbon dioxide",
      "Hydrogen sulphide",
      "Methane",
      "Nitrogen"
    ],
    "correct": 2,
    "explanation": "Biogas contains methane, H₂S, and CO₂. Methane (CH₄) is the primary combustible component that makes biogas inflammable and useful as an energy source. CO₂ and H₂S are not significant energy sources. Nitrogen is NOT a component of biogas as per NCERT."
  },
  {
    "id": 146,
    "topic": "Microbes in Sewage Treatment",
    "q": "Consider the following:<br>Statement I: Primary sludge is formed during primary treatment by sedimentation.<br>Statement II: Activated sludge is formed when bacterial flocs sediment in the settling tank after secondary treatment.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correct": 0,
    "explanation": "Both statements are correct. Primary sludge = settled solids during primary treatment. Activated sludge = sedimented bacterial flocs after secondary treatment in the settling tank. These are two different types of sludge formed at two different stages."
  },
  {
    "id": 147,
    "topic": "Microbes in Sewage Treatment",
    "q": "How many of the following gases are components of biogas produced during anaerobic digestion of sludge?<br>(i) Methane<br>(ii) Oxygen<br>(iii) Hydrogen sulphide<br>(iv) Carbon dioxide<br>(v) Nitrogen",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct": 1,
    "explanation": "Only THREE – methane, hydrogen sulphide, and carbon dioxide – are components of biogas as per NCERT. Oxygen and nitrogen are NOT mentioned. Anaerobic conditions mean oxygen is absent."
  },
  {
    "id": 148,
    "topic": "Microbes in Sewage Treatment",
    "q": "Which of the following is <b>NOT</b> a step in primary treatment of sewage?",
    "options": [
      "Removal of floating debris by sequential filtration",
      "Removal of grit by sedimentation",
      "Formation of primary sludge and effluent",
      "Aeration and formation of flocs"
    ],
    "correct": 3,
    "explanation": "Aeration and floc formation occur during SECONDARY treatment, not primary treatment. Primary treatment only involves physical processes: sequential filtration (floating debris), sedimentation (grit), and separation into primary sludge and effluent."
  },
  {
    "id": 149,
    "topic": "Microbes in Production of Biogas",
    "q": "Biogas is a mixture of gases produced by microbial activity containing predominantly:",
    "options": [
      "Carbon dioxide",
      "Hydrogen sulphide",
      "Methane",
      "Nitrogen"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Biogas is a mixture of gases (containing predominantly methane) produced by the microbial activity.' The predominant gas is methane (CH₄), not CO₂. This is one of the most common NEET traps – students confuse biogas composition with fermentation gases (CO₂)."
  },
  {
    "id": 150,
    "topic": "Microbes in Production of Biogas",
    "q": "The type of gas produced by microbes depends upon:",
    "options": [
      "Only the microbes involved",
      "Only the organic substrates used",
      "Both the microbes and the organic substrates they utilise",
      "The temperature of the environment only"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The type of the gas produced depends upon the microbes and the organic substrates they utilise.' Both factors are important – not just one. This 'both' aspect can be tested in NEET."
  },
  {
    "id": 151,
    "topic": "Microbes in Production of Biogas",
    "q": "In fermentation of dough, cheese making and production of beverages, the main gas produced is:",
    "options": [
      "Methane",
      "Hydrogen",
      "Carbon dioxide",
      "Hydrogen sulphide"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'In the examples cited in relation to fermentation of dough, cheese making and production of beverages, the main gas produced was CO₂.' This contrasts with methanogens that produce predominantly methane."
  },
  {
    "id": 152,
    "topic": "Microbes in Production of Biogas",
    "q": "Methanogens are bacteria that grow:",
    "options": [
      "Aerobically on proteinaceous material",
      "Anaerobically on cellulosic material",
      "Aerobically on cellulosic material",
      "Anaerobically on lipid-rich material"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'certain bacteria, which grow anaerobically on cellulosic material, produce large amount of methane along with CO₂ and H₂. These bacteria are collectively called methanogens.' Two key words: ANAEROBICALLY + CELLULOSIC material. Both must be correct."
  },
  {
    "id": 153,
    "topic": "Microbes in Production of Biogas",
    "q": "Which of the following is a common example of methanogen?",
    "options": [
      "Lactobacillus",
      "Methanobacterium",
      "Streptococcus",
      "Acetobacter aceti"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'one such common bacterium is Methanobacterium.' This is the only methanogen named in NCERT for this chapter. Lactobacillus produces lactic acid, Streptococcus produces streptokinase, and Acetobacter produces acetic acid."
  },
  {
    "id": 154,
    "topic": "Microbes in Production of Biogas",
    "q": "Methanogens produce a large amount of methane along with:",
    "options": [
      "CO₂ and H₂S",
      "CO₂ and H₂",
      "O₂ and N₂",
      "H₂S and NH₃"
    ],
    "correct": 1,
    "explanation": "NCERT states methanogens 'produce large amount of methane along with CO₂ and H₂.' NOTE: The gases here are methane + CO₂ + H₂. This differs from sewage treatment biogas which includes H₂S. The presence of H₂ (hydrogen) instead of H₂S is a critical NEET distinction."
  },
  {
    "id": 155,
    "topic": "Microbes in Production of Biogas",
    "q": "Methanogens are commonly found in:<br>(i) Anaerobic sludge during sewage treatment<br>(ii) Rumen of cattle<br>(iii) Human small intestine<br>(iv) Aeration tanks of STPs<br><br>Which of the above are correct as per NCERT?",
    "options": [
      "(i) and (ii) only",
      "(i), (ii) and (iii)",
      "(ii) and (iv) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "NCERT mentions only TWO locations: (i) anaerobic sludge during sewage treatment and (ii) rumen of cattle. Human small intestine and aeration tanks (aerobic, not anaerobic) are NOT mentioned. Methanogens are strict anaerobes – they cannot survive in aerobic aeration tanks."
  },
  {
    "id": 156,
    "topic": "Microbes in Production of Biogas",
    "q": "The rumen is:",
    "options": [
      "A part of the small intestine of cattle",
      "A part of the stomach of cattle",
      "The large intestine of cattle",
      "The oesophagus of cattle"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'These bacteria are also present in the rumen (a part of stomach) of cattle.' Rumen is specifically described as a part of the STOMACH, not intestine or oesophagus. This anatomical detail is important for NEET."
  },
  {
    "id": 157,
    "topic": "Microbes in Production of Biogas",
    "q": "In the rumen of cattle, methanogens help in:",
    "options": [
      "Digestion of proteins",
      "Breakdown of cellulose",
      "Synthesis of vitamins",
      "Absorption of minerals"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'In rumen, these bacteria help in the breakdown of cellulose and play an important role in the nutrition of cattle.' Methanogens utilize cellulosic material – the main component of cattle food (grass, fodder)."
  },
  {
    "id": 158,
    "topic": "Microbes in Production of Biogas",
    "q": "Assertion (A): Human beings are unable to digest the cellulose present in their food.<br>Reason (R): Humans lack cellulose-digesting methanogens like <i>Methanobacterium</i> in their digestive system.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R explains A. NCERT implies that humans cannot digest cellulose (asks: 'Do you think we, human beings, are able to digest the cellulose present in our foods?'). This is because humans lack the methanogens/cellulase-producing microbes that cattle have in their rumen."
  },
  {
    "id": 159,
    "topic": "Microbes in Production of Biogas",
    "q": "The excreta (dung) of cattle is commonly called:",
    "options": [
      "Slurry",
      "Compost",
      "Gobar",
      "Humus"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'the excreta (dung) of cattle, commonly called gobar, is rich in these bacteria.' Gobar is the Hindi term for cattle dung. Slurry is the mixture fed into the biogas plant, not the dung itself."
  },
  {
    "id": 160,
    "topic": "Microbes in Production of Biogas",
    "q": "Cattle dung (gobar) is rich in:",
    "options": [
      "Aerobic bacteria",
      "Methanogens",
      "Photosynthetic algae",
      "Nitrogen-fixing bacteria"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'the excreta (dung) of cattle, commonly called gobar, is rich in these bacteria' (referring to methanogens). Since cattle food contains cellulose digested by methanogens in rumen, the dung is rich in these bacteria."
  },
  {
    "id": 161,
    "topic": "Microbes in Production of Biogas",
    "q": "Biogas generated from cattle dung is commonly called:",
    "options": [
      "Natural gas",
      "LPG",
      "Gobar gas",
      "Coal gas"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Dung can be used for generation of biogas, commonly called gobar gas.' This is a direct NCERT term. It should not be confused with natural gas (fossil fuel) or LPG."
  },
  {
    "id": 162,
    "topic": "Microbes in Production of Biogas",
    "q": "The biogas plant consists of a concrete tank that is:",
    "options": [
      "2-5 feet deep",
      "5-8 feet deep",
      "10-15 feet deep",
      "20-25 feet deep"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'The biogas plant consists of a concrete tank (10-15 feet deep) in which bio-wastes are collected and a slurry of dung is fed.' The depth 10-15 feet is a specific factual detail from NCERT."
  },
  {
    "id": 163,
    "topic": "Microbes in Production of Biogas",
    "q": "In a biogas plant, the floating cover placed over the slurry:",
    "options": [
      "Prevents microbial activity",
      "Keeps on rising as gas is produced",
      "Allows aerobic conditions inside the tank",
      "Absorbs the gas produced"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'A floating cover is placed over the slurry, which keeps on rising as the gas is produced in the tank due to the microbial activity.' The rising of the floating cover indicates gas accumulation. It does NOT prevent microbial activity or allow aerobic conditions."
  },
  {
    "id": 164,
    "topic": "Microbes in Production of Biogas",
    "q": "The spent slurry removed from a biogas plant may be used as:",
    "options": [
      "Raw material for plastic production",
      "Fertiliser",
      "Fuel for cooking",
      "Animal feed"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The spent slurry is removed through another outlet and may be used as fertiliser.' This is a sustainable aspect of the biogas plant – both gas and residual slurry have useful applications."
  },
  {
    "id": 165,
    "topic": "Microbes in Production of Biogas",
    "q": "Biogas plants are more often built in:",
    "options": [
      "Urban areas",
      "Industrial zones",
      "Rural areas",
      "Coastal areas"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Cattle dung is available in large quantities in rural areas where cattle are used for a variety of purposes. So biogas plants are more often built in rural areas.' The availability of cattle dung determines the location."
  },
  {
    "id": 166,
    "topic": "Microbes in Production of Biogas",
    "q": "The biogas produced in biogas plants is used for:",
    "options": [
      "Cooking and lighting",
      "Running automobiles only",
      "Industrial electricity generation only",
      "Water purification"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'The biogas thus produced is used for cooking and lighting.' These are the two specific uses mentioned in NCERT. Automobile and industrial uses are not mentioned."
  },
  {
    "id": 167,
    "topic": "Microbes in Production of Biogas",
    "q": "The technology of biogas production was developed in India mainly due to the efforts of:",
    "options": [
      "ICAR and CSIR",
      "IARI and KVIC",
      "DRDO and ISRO",
      "ICMR and DBT"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The technology of biogas production was developed in India mainly due to the efforts of Indian Agricultural Research Institute (IARI) and Khadi and Village Industries Commission (KVIC).' IARI + KVIC is a very high-frequency NEET fact. Students often confuse IARI with ICAR."
  },
  {
    "id": 168,
    "topic": "Microbes in Production of Biogas",
    "q": "IARI stands for:",
    "options": [
      "Indian Association of Research Institutions",
      "Indian Agricultural Research Institute",
      "International Agricultural Research Institute",
      "Indian Academy of Rural Industries"
    ],
    "correct": 1,
    "explanation": "NCERT gives the full form: Indian Agricultural Research Institute (IARI). This is different from ICAR (Indian Council of Agricultural Research). The full form distinction is a NEET factual point."
  },
  {
    "id": 169,
    "topic": "Microbes in Production of Biogas",
    "q": "KVIC stands for:",
    "options": [
      "Khadi and Village Industrial Council",
      "Khadi and Village Industries Commission",
      "Kerala Village Industries Commission",
      "Khadi and Voluntary Industries Commission"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Khadi and Village Industries Commission (KVIC).' The exact full form matters – it is 'Commission' not 'Council' and 'Industries' not 'Industrial.' These subtle word differences can appear in NEET."
  },
  {
    "id": 170,
    "topic": "Microbes in Production of Biogas",
    "q": "Assertion (A): Cattle dung (gobar) is rich in methanogens.<br>Reason (R): Methanogens present in the rumen of cattle help in breaking down cellulose, and these bacteria pass out with the dung.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. Methanogens in the rumen break down cellulose in cattle food. These bacteria then pass through the digestive tract and are excreted in the dung, making gobar rich in methanogens."
  },
  {
    "id": 171,
    "topic": "Microbes in Production of Biogas",
    "q": "Consider the following statements:<br>Statement I: Methanogens grow aerobically on cellulosic material.<br>Statement II: <i>Methanobacterium</i> is a common methanogen.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is INCORRECT – methanogens grow ANAEROBICALLY (not aerobically) on cellulosic material. Statement II is correct – NCERT names Methanobacterium as a common methanogen. The anaerobic vs aerobic distinction for methanogens is a critical NEET trap."
  },
  {
    "id": 172,
    "topic": "Microbes in Production of Biogas",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Methanogens – Anaerobic sludge",
      "Methanobacterium – Rumen of cattle",
      "Biogas – Predominantly CO₂",
      "Gobar gas – Cattle dung"
    ],
    "correct": 2,
    "explanation": "Biogas predominantly contains METHANE, not CO₂. NCERT states: 'Biogas is a mixture of gases (containing predominantly methane).' All other options are correctly matched. This methane vs CO₂ confusion is a very high-frequency NEET trap."
  },
  {
    "id": 173,
    "topic": "Microbes in Production of Biogas",
    "q": "Consider the following about the biogas plant:<br>(i) Concrete tank is 10-15 feet deep<br>(ii) Slurry of dung is fed into the tank<br>(iii) A fixed rigid cover is placed over the slurry<br>(iv) An outlet supplies biogas to nearby houses<br><br>Which of the above are <b>correct</b>?",
    "options": [
      "(i), (ii) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(i) and (ii) only",
      "(iii) and (iv) only"
    ],
    "correct": 0,
    "explanation": "Statement (iii) is INCORRECT – the cover is FLOATING (not fixed/rigid). NCERT states: 'A floating cover is placed over the slurry, which keeps on rising as the gas is produced.' Statements (i), (ii), and (iv) are correct."
  },
  {
    "id": 174,
    "topic": "Microbes in Production of Biogas",
    "q": "Assertion (A): Biogas plants are more often built in rural areas.<br>Reason (R): Cattle dung is available in large quantities in rural areas where cattle are used for a variety of purposes.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both are true and R correctly explains A. NCERT states: 'Cattle dung is available in large quantities in rural areas...So biogas plants are more often built in rural areas.' The availability of raw material (cattle dung) in rural areas explains the location of biogas plants."
  },
  {
    "id": 175,
    "topic": "Microbes in Production of Biogas",
    "q": "Which of the following correctly differentiates the gases produced during dough fermentation and by methanogens?",
    "options": [
      "Dough fermentation – methane; Methanogens – CO₂",
      "Dough fermentation – CO₂; Methanogens – methane (predominantly) along with CO₂ and H₂",
      "Both produce primarily methane",
      "Both produce primarily hydrogen sulphide"
    ],
    "correct": 1,
    "explanation": "NCERT states dough fermentation produces mainly CO₂, whereas methanogens produce large amounts of methane along with CO₂ and H₂."
  },
  {
    "id": 176,
    "topic": "Microbes in Production of Biogas",
    "q": "Read the following statements carefully:<br>Statement I: Biogas produced from cattle dung predominantly contains CO₂.<br>Statement II: The technology of biogas production in India was developed by IARI and KVIC.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is INCORRECT – biogas predominantly contains METHANE, not CO₂. Statement II is correct – NCERT confirms IARI and KVIC developed the technology. The methane vs CO₂ trap in biogas is one of the most important distinctions tested in NEET."
  },
  {
    "id": 177,
    "topic": "Microbes in Production of Biogas",
    "q": "In a biogas plant, what is fed into the concrete tank?",
    "options": [
      "Pure methanogens culture",
      "Bio-wastes and a slurry of dung",
      "Chemical reagents and catalysts",
      "Aerobic bacteria and oxygen"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'a concrete tank (10-15 feet deep) in which bio-wastes are collected and a slurry of dung is fed.' No chemicals, pure cultures, or aerobic conditions are involved – the methanogens are already present in the dung."
  },
  {
    "id": 178,
    "topic": "Microbes in Production of Biogas",
    "q": "Which of the following statements is <b>correct</b> regarding the differences between biogas produced during sewage treatment and biogas from a biogas plant?<br>Statement I: Sewage biogas contains methane, H₂S, and CO₂.<br>Statement II: Methanogens produce methane, CO₂, and H₂.",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correct": 0,
    "explanation": "Both are correct as per NCERT. Sewage treatment biogas = methane + H₂S + CO₂ (Topic: Sewage Treatment). Methanogens produce methane + CO₂ + H₂ (Topic: Biogas Production). The key difference is H₂S (sewage) vs H₂ (methanogens). This subtle gas composition difference is a high-level NEET trap."
  },
  {
    "id": 179,
    "topic": "Microbes in Production of Biogas",
    "q": "Which of the following is <b>NOT</b> true about <i>Methanobacterium</i>?",
    "options": [
      "It is a methanogen",
      "It grows anaerobically",
      "It is found in the rumen of cattle",
      "It grows aerobically on proteinaceous substrates"
    ],
    "correct": 3,
    "explanation": "Methanobacterium grows ANAEROBICALLY on CELLULOSIC material (not aerobically on proteins). All other statements are correct per NCERT. This question tests the two key characteristics: anaerobic growth + cellulosic substrate."
  },
  {
    "id": 180,
    "topic": "Microbes in Production of Biogas",
    "q": "How many of the following are uses or products of a biogas plant?<br>(i) Biogas for cooking<br>(ii) Biogas for lighting<br>(iii) Spent slurry as fertiliser<br>(iv) Methane for automobile fuel<br>(v) Electricity for industries",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct": 1,
    "explanation": "Only THREE are mentioned in NCERT: (i) Cooking, (ii) Lighting, and (iii) Spent slurry as fertiliser. Automobile fuel (iv) and industrial electricity (v) are NOT mentioned in NCERT as uses of biogas plant products."
  },
  {
    "id": 181,
    "topic": "Microbes in Production of Biogas",
    "q": "Assertion (A): The floating cover of a biogas plant keeps on rising during operation.<br>Reason (R): Microbial activity in the tank produces gases that accumulate and push the floating cover upward.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. NCERT states the floating cover 'keeps on rising as the gas is produced in the tank due to the microbial activity.' The gas production by microbial activity creates pressure that pushes the cover upward."
  },
  {
    "id": 182,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Biocontrol refers to:",
    "options": [
      "Use of chemical pesticides for controlling plant diseases",
      "Use of biological methods for controlling plant diseases and pests",
      "Use of genetically modified organisms for food production",
      "Use of radiation for sterilising insect pests"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Biocontrol refers to the use of biological methods for controlling plant diseases and pests.' It relies on biological organisms/methods, NOT chemicals or radiation."
  },
  {
    "id": 183,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Chemical insecticides and pesticides used in modern agriculture are:<br>(i) Toxic to human beings and animals<br>(ii) Polluting soil and ground water<br>(iii) Contaminating fruits, vegetables and crop plants<br>(iv) Completely safe for the environment<br><br>Which of the above are <b>correct</b>?",
    "options": [
      "(i), (ii) and (iii) only",
      "(i) and (iv) only",
      "(ii), (iii) and (iv) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Statements (i), (ii), and (iii) are correct per NCERT. Statement (iv) is wrong – chemicals are described as harmful and polluting, NOT safe. NCERT states they are 'toxic and extremely harmful' and have been 'polluting our environment.'"
  },
  {
    "id": 184,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Our soil is also polluted through the use of:",
    "options": [
      "Biofertilisers",
      "Weedicides to remove weeds",
      "Organic compost",
      "Biopesticides"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Our soil is also polluted through our use of weedicides to remove weeds.' Weedicides are chemical herbicides that cause soil pollution. Biofertilisers and organic compost are eco-friendly alternatives."
  },
  {
    "id": 185,
    "topic": "Microbes as Biocontrol Agents",
    "q": "A key belief of the organic farmer is that:",
    "options": [
      "Chemical pesticides are essential for high yield",
      "Monoculture is the most sustainable practice",
      "Biodiversity furthers health",
      "Eradication of all pests is necessary"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'A key belief of the organic farmer is that biodiversity furthers health.' This is a foundational concept of organic farming – more variety = more sustainable landscape. This contrasts with chemical-intensive farming."
  },
  {
    "id": 186,
    "topic": "Microbes as Biocontrol Agents",
    "q": "According to the organic farming approach, pests should be:",
    "options": [
      "Completely eradicated using biological methods",
      "Kept at manageable levels by checks and balances within the ecosystem",
      "Eliminated using a combination of chemicals and biocontrol",
      "Ignored completely as they cause no harm"
    ],
    "correct": 1,
    "explanation": "NCERT states insects called pests 'are not eradicated, but instead are kept at manageable levels by a complex system of checks and balances within a living and vibrant ecosystem.' NOT eradicated – just managed."
  },
  {
    "id": 187,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Assertion (A): Eradication of pests is considered undesirable by organic farmers.<br>Reason (R): Beneficial predatory and parasitic insects depend upon pests as food or hosts.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. NCERT states: 'the eradication of the creatures that are often described as pests is not only possible, but also undesirable, for without them the beneficial predatory and parasitic insects which depend upon them as food or hosts would not be able to survive.'"
  },
  {
    "id": 188,
    "topic": "Microbes as Biocontrol Agents",
    "q": "'Conventional' farming practices often use chemical methods that:",
    "options": [
      "Selectively kill only harmful organisms",
      "Kill both useful and harmful life forms indiscriminately",
      "Promote biodiversity in the ecosystem",
      "Have no effect on non-target organisms"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Contrary to the conventional farming practices which often use chemical methods to kill both useful and harmful life forms indiscriminately.' The word 'indiscriminately' is key – chemicals do not distinguish between beneficial and harmful organisms."
  },
  {
    "id": 189,
    "topic": "Microbes as Biocontrol Agents",
    "q": "An important part of the biological farming approach is to become familiar with:<br>(i) Various life forms that inhabit the field<br>(ii) Their life cycles<br>(iii) Patterns of feeding<br>(iv) Habitats they prefer<br><br>Which of the above are correct?",
    "options": [
      "(i) and (ii) only",
      "(i), (ii) and (iii) only",
      "(iii) and (iv) only",
      "All – (i), (ii), (iii) and (iv)"
    ],
    "correct": 3,
    "explanation": "NCERT states: 'become familiar with the various life forms that inhabit the field, predators as well as pests, and also their life cycles, patterns of feeding and the habitats that they prefer.' All four aspects are mentioned."
  },
  {
    "id": 190,
    "topic": "Microbes as Biocontrol Agents",
    "q": "The Ladybird beetle with red and black markings is useful to get rid of:",
    "options": [
      "Mosquitoes",
      "Butterfly caterpillars",
      "Aphids",
      "Locusts"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'the Ladybird, and Dragonflies are useful to get rid of aphids and mosquitoes, respectively.' Ladybird controls APHIDS. Dragonflies control mosquitoes. This is a very frequently tested matching in NEET."
  },
  {
    "id": 191,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Dragonflies are useful as biocontrol agents to get rid of:",
    "options": [
      "Aphids",
      "Caterpillars",
      "Mosquitoes",
      "Beetles"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Dragonflies are useful to get rid of...mosquitoes.' Ladybird → aphids; Dragonflies → mosquitoes. The reversal of these targets is one of the most common NEET traps in this chapter."
  },
  {
    "id": 192,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Ladybird – Aphids",
      "Dragonflies – Mosquitoes",
      "Bacillus thuringiensis – Butterfly caterpillars",
      "Ladybird – Mosquitoes"
    ],
    "correct": 3,
    "explanation": "Ladybird controls APHIDS, not mosquitoes. Mosquitoes are controlled by dragonflies. This swap between Ladybird targets and dragonfly targets is a classic NEET elimination question."
  },
  {
    "id": 193,
    "topic": "Microbes as Biocontrol Agents",
    "q": "<i>Bacillus thuringiensis</i> (Bt) is used as a microbial biocontrol agent to control:",
    "options": [
      "Aphids",
      "Mosquitoes",
      "Butterfly caterpillars",
      "Fungal pathogens of plants"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'An example of microbial biocontrol agents that can be introduced in order to control butterfly caterpillars is the bacteria Bacillus thuringiensis.' Bt is specific for caterpillars (larval stage of butterflies), NOT aphids, mosquitoes, or fungi."
  },
  {
    "id": 194,
    "topic": "Microbes as Biocontrol Agents",
    "q": "<i>Bacillus thuringiensis</i> is available commercially as:",
    "options": [
      "Liquid culture in bottles",
      "Dried spores in sachets",
      "Live bacteria in capsules",
      "Lyophilised cells in vials"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'These are available in sachets as dried spores which are mixed with water and sprayed onto vulnerable plants.' The form is DRIED SPORES in SACHETS – this specific detail is tested in NEET."
  },
  {
    "id": 195,
    "topic": "Microbes as Biocontrol Agents",
    "q": "The dried spores of <i>Bacillus thuringiensis</i> are sprayed onto vulnerable plants such as:",
    "options": [
      "Rice and wheat",
      "Brassicas and fruit trees",
      "Cotton and jute",
      "Sugarcane and maize"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'sprayed onto vulnerable plants such as brassicas and fruit trees.' Brassicas (cabbage family) and fruit trees are specifically mentioned as target plants. These are the plants commonly attacked by butterfly caterpillars."
  },
  {
    "id": 196,
    "topic": "Microbes as Biocontrol Agents",
    "q": "When insect larvae eat the spores of <i>Bacillus thuringiensis</i>, the toxin is released in:",
    "options": [
      "The mouth of the larvae",
      "The gut of the larvae",
      "On the surface of the plant",
      "In the soil around the plant"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'where these are eaten by the insect larvae. In the gut of the larvae, the toxin is released and the larvae get killed.' The toxin acts in the GUT of larvae – not on plant surface or in the mouth. This location of action is a critical NEET concept."
  },
  {
    "id": 197,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Consider the following statements about <i>Bacillus thuringiensis</i>:<br>Statement I: The bacterial disease kills caterpillars but leaves other insects unharmed.<br>Statement II: Bt toxin kills all types of insects indiscriminately.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is correct but Statement II is incorrect",
      "Statement I is incorrect but Statement II is correct"
    ],
    "correct": 2,
    "explanation": "Statement I is correct – NCERT states: 'The bacterial disease will kill the caterpillars, but leave other insects unharmed.' Statement II is incorrect – Bt is SELECTIVE, not indiscriminate. This selectivity is what makes it valuable as a biocontrol agent."
  },
  {
    "id": 198,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Bt-cotton was developed by:",
    "options": [
      "Traditional cross-breeding methods",
      "Introduction of B. thuringiensis toxin genes into plants through genetic engineering",
      "Spraying Bt spores directly on cotton plants",
      "Natural mutation in cotton plants"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'the scientists have introduced B. thuringiensis toxin genes into plants. Such plants are resistant to attack by insect pests. Bt-cotton is one such example.' Genetic engineering was used, NOT traditional breeding or spraying."
  },
  {
    "id": 199,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Assertion (A): Bt-cotton is resistant to attack by insect pests.<br>Reason (R): <i>B. thuringiensis</i> toxin genes have been introduced into cotton plants through genetic engineering.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. Bt-cotton is resistant to insect pests BECAUSE it contains the Bt toxin gene introduced through genetic engineering. The plant itself produces the toxin that kills insect larvae."
  },
  {
    "id": 200,
    "topic": "Microbes as Biocontrol Agents",
    "q": "<i>Trichoderma</i> species used as biocontrol agents are:",
    "options": [
      "Parasitic bacteria common in leaf ecosystems",
      "Free-living fungi common in root ecosystems",
      "Parasitic fungi common in stem ecosystems",
      "Free-living bacteria common in soil surface"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Trichoderma species are free-living fungi that are very common in the root ecosystems.' Three key descriptors: (1) FREE-LIVING (not parasitic), (2) FUNGI (not bacteria), (3) ROOT ecosystems (not leaf/stem). All three are commonly tested traps."
  },
  {
    "id": 201,
    "topic": "Microbes as Biocontrol Agents",
    "q": "<i>Trichoderma</i> is an effective biocontrol agent of:",
    "options": [
      "Insect pests of crops",
      "Several plant pathogens",
      "Mosquitoes and aphids",
      "Butterfly caterpillars"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'They are effective biocontrol agents of several plant pathogens.' Trichoderma controls plant DISEASES (pathogens), not insect pests. Bt controls caterpillars; Ladybird controls aphids; dragonflies control mosquitoes."
  },
  {
    "id": 202,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Consider the following statements about <i>Trichoderma</i>:<br>(i) It is a free-living fungus<br>(ii) It is common in root ecosystems<br>(iii) It controls insect pests<br>(iv) It is an effective biocontrol agent of plant pathogens<br><br>Which statements are <b>correct</b>?",
    "options": [
      "(i), (ii) and (iv) only",
      "(i), (ii) and (iii) only",
      "(i) and (iii) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Statement (iii) is INCORRECT – Trichoderma controls plant PATHOGENS (diseases), NOT insect pests. Statements (i), (ii), and (iv) are correct as per NCERT. Confusing pest control with pathogen control is a common NEET trap."
  },
  {
    "id": 203,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Baculoviruses are pathogens that attack:",
    "options": [
      "Plants and fungi",
      "Insects and other arthropods",
      "Mammals and birds",
      "Fish and amphibians"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Baculoviruses are pathogens that attack insects and other arthropods.' They are insect-specific viruses used as biocontrol agents."
  },
  {
    "id": 204,
    "topic": "Microbes as Biocontrol Agents",
    "q": "The majority of baculoviruses used as biological control agents belong to the genus:",
    "options": [
      "Retrovirus",
      "Nucleopolyhedrovirus",
      "Tobamovirus",
      "Bacteriophage"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The majority of baculoviruses used as biological control agents are in the genus Nucleopolyhedrovirus.' This specific genus name is a very high-frequency NEET fact."
  },
  {
    "id": 205,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Nucleopolyhedrovirus is described as an excellent candidate for:",
    "options": [
      "Broad spectrum insecticidal applications",
      "Species-specific, narrow spectrum insecticidal applications",
      "Herbicidal applications",
      "Fungicidal applications"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'These viruses are excellent candidates for species-specific, narrow spectrum insecticidal applications.' TWO key terms: SPECIES-SPECIFIC and NARROW SPECTRUM. They do NOT have broad spectrum activity – this distinction is a major NEET trap."
  },
  {
    "id": 206,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Baculoviruses (Nucleopolyhedrovirus) have been shown to have <b>no negative impacts</b> on:<br>(i) Plants<br>(ii) Mammals<br>(iii) Birds<br>(iv) Fish<br>(v) Non-target insects<br><br>How many of the above are correct?",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct": 3,
    "explanation": "ALL FIVE are correct. NCERT states: 'They have been shown to have no negative impacts on plants, mammals, birds, fish or even on non-target insects.' This complete safety profile makes them ideal for ecologically sensitive applications."
  },
  {
    "id": 207,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Assertion (A): Nucleopolyhedrovirus is an excellent candidate for narrow spectrum insecticidal applications.<br>Reason (R): These viruses have no negative impacts on plants, mammals, birds, fish or non-target insects.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. The virus is useful for narrow spectrum applications BECAUSE it is species-specific and does not harm non-target organisms. The safety profile directly supports its use in targeted pest management."
  },
  {
    "id": 208,
    "topic": "Microbes as Biocontrol Agents",
    "q": "The use of baculoviruses is especially desirable when:",
    "options": [
      "Quick eradication of all insects is needed",
      "Beneficial insects are being conserved in an IPM programme",
      "Chemical pesticides have failed to work",
      "Large-scale monoculture needs protection"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'This is especially desirable when beneficial insects are being conserved to aid in an overall integrated pest management (IPM) programme, or when an ecologically sensitive area is being treated.' Conservation of beneficial insects in IPM is the key context."
  },
  {
    "id": 209,
    "topic": "Microbes as Biocontrol Agents",
    "q": "IPM stands for:",
    "options": [
      "Insect Pest Monitoring",
      "Integrated Pest Management",
      "Induced Plant Modification",
      "Internal Parasite Mechanism"
    ],
    "correct": 1,
    "explanation": "NCERT mentions: 'integrated pest management (IPM) programme.' IPM = Integrated Pest Management, which combines biological, cultural, and minimal chemical methods for pest control."
  },
  {
    "id": 210,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Match the following biocontrol agents with their targets:<br>(a) Ladybird → (i) Mosquitoes<br>(b) Dragonflies → (ii) Butterfly caterpillars<br>(c) Bacillus thuringiensis → (iii) Plant pathogens<br>(d) Trichoderma → (iv) Aphids<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-iv, b-i, c-ii, d-iii",
      "a-i, b-iv, c-iii, d-ii",
      "a-iv, b-ii, c-i, d-iii",
      "a-ii, b-i, c-iv, d-iii"
    ],
    "correct": 0,
    "explanation": "Ladybird → Aphids (iv); Dragonflies → Mosquitoes (i); Bt → Butterfly caterpillars (ii); Trichoderma → Plant pathogens (iii). This comprehensive matching tests all four biocontrol agent-target pairs from NCERT."
  },
  {
    "id": 211,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Which of the following is <b>NOT</b> a characteristic of Nucleopolyhedrovirus?",
    "options": [
      "Species-specific",
      "Narrow spectrum insecticidal",
      "No negative impact on non-target insects",
      "Broad spectrum activity affecting all insects"
    ],
    "correct": 3,
    "explanation": "Nucleopolyhedrovirus is species-specific and has NARROW spectrum (not broad spectrum). NCERT specifically uses 'narrow spectrum' – this directly contrasts with 'broad spectrum.' Broad spectrum would mean killing many types of insects, which contradicts its species-specific nature."
  },
  {
    "id": 212,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Read the following statements:<br>Statement I: <i>Trichoderma</i> is a parasitic fungus commonly found in leaf ecosystems.<br>Statement II: <i>Bacillus thuringiensis</i> toxin is released in the gut of insect larvae.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is INCORRECT – Trichoderma is a FREE-LIVING (not parasitic) fungus common in ROOT ecosystems (not leaf). Statement II is correct – NCERT states toxin is released 'in the gut of the larvae.' Both 'free-living vs parasitic' and 'root vs leaf' are traps."
  },
  {
    "id": 213,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Which of the following correctly describes the organic farming approach?",
    "options": [
      "It aims to eradicate all pests using biological methods",
      "It is a holistic approach that seeks to understand webs of interaction between organisms",
      "It uses chemicals selectively to target only harmful organisms",
      "It relies exclusively on baculoviruses for pest control"
    ],
    "correct": 1,
    "explanation": "NCERT states organic farming is 'a holistic approach that seeks to develop an understanding of the webs of interaction between the myriad of organisms that constitute the field fauna and flora.' It does NOT aim for eradication and does NOT use chemicals."
  },
  {
    "id": 214,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Consider the following organisms:<br>(a) Ladybird – Beetle<br>(b) Bacillus thuringiensis – Virus<br>(c) Trichoderma – Fungus<br>(d) Nucleopolyhedrovirus – Bacterium<br><br>Which of the above are <b>correctly</b> classified?",
    "options": [
      "(a) and (c) only",
      "(a), (c) and (d)",
      "(b) and (d) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "Only (a) and (c) are correct. (b) is wrong – Bt is a BACTERIUM, not a virus. (d) is wrong – Nucleopolyhedrovirus is a VIRUS (genus of baculoviruses), not a bacterium. Mixing up the organism type (bacterium vs virus vs fungus) is a classic NEET trap."
  },
  {
    "id": 215,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Assertion (A): The use of biocontrol measures will greatly reduce dependence on toxic chemicals and pesticides.<br>Reason (R): Biocontrol agents like Bt, Trichoderma and baculoviruses target specific pests without harming the entire ecosystem.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. NCERT states biocontrol measures reduce dependence on chemicals. This is BECAUSE biocontrol agents are specific (Bt kills caterpillars only, baculoviruses are species-specific, Trichoderma targets plant pathogens) and don't harm non-target organisms."
  },
  {
    "id": 216,
    "topic": "Microbes as Biocontrol Agents",
    "q": "Which of the following pairs represent a <b>microbial</b> biocontrol agent and an <b>insect</b> biocontrol agent respectively?",
    "options": [
      "Bacillus thuringiensis and Trichoderma",
      "Ladybird and Dragonfly",
      "Bacillus thuringiensis and Ladybird",
      "Nucleopolyhedrovirus and Trichoderma"
    ],
    "correct": 2,
    "explanation": "Bacillus thuringiensis is a MICROBIAL (bacterial) biocontrol agent. Ladybird is an INSECT biocontrol agent (beetle). Option A has two microbial agents. Option B has two insect agents. Option D has a virus and a fungus (both microbial). Only Option C correctly pairs one microbial + one insect biocontrol agent."
  },
  {
    "id": 217,
    "topic": "Microbes as Biofertilisers",
    "q": "Biofertilisers are:",
    "options": [
      "Chemical substances that enrich soil nutrients",
      "Organisms that enrich the nutrient quality of the soil",
      "Genetically modified plants that fix nitrogen",
      "Inorganic fertilisers produced by microbial action"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Biofertilisers are organisms that enrich the nutrient quality of the soil.' They are ORGANISMS, not chemicals or inorganic substances. This definition-based distinction is crucial for NEET."
  },
  {
    "id": 218,
    "topic": "Microbes as Biofertilisers",
    "q": "The main sources of biofertilisers are:",
    "options": [
      "Bacteria, fungi and cyanobacteria",
      "Bacteria, protozoa and viruses",
      "Fungi, algae and viroids",
      "Bacteria, viruses and prions"
    ],
    "correct": 0,
    "explanation": "NCERT states: 'The main sources of biofertilisers are bacteria, fungi and cyanobacteria.' Protozoa, viruses, viroids, and prions are NOT listed as biofertiliser sources. This is a direct NCERT fact."
  },
  {
    "id": 219,
    "topic": "Microbes as Biofertilisers",
    "q": "Nodules on the roots of leguminous plants are formed by the symbiotic association of:",
    "options": [
      "Azotobacter",
      "Azospirillum",
      "Rhizobium",
      "Anabaena"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'nodules on the roots of leguminous plants formed by the symbiotic association of Rhizobium.' Rhizobium is the SYMBIOTIC nitrogen-fixer. Azotobacter and Azospirillum are FREE-LIVING. Anabaena is a cyanobacterium."
  },
  {
    "id": 220,
    "topic": "Microbes as Biofertilisers",
    "q": "<i>Rhizobium</i> fixes atmospheric nitrogen into:",
    "options": [
      "Inorganic nitrates only",
      "Organic forms",
      "Gaseous ammonia only",
      "Elemental nitrogen"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'These bacteria fix atmospheric nitrogen into organic forms, which is used by the plant as nutrient.' The nitrogen is fixed into ORGANIC forms – not inorganic nitrates or gaseous ammonia."
  },
  {
    "id": 221,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following are <b>free-living</b> nitrogen-fixing bacteria in the soil?",
    "options": [
      "Rhizobium and Azotobacter",
      "Azospirillum and Azotobacter",
      "Rhizobium and Azospirillum",
      "Anabaena and Nostoc"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Other bacteria can fix atmospheric nitrogen while free-living in the soil (examples Azospirillum and Azotobacter).' Rhizobium is SYMBIOTIC (not free-living). Anabaena and Nostoc are cyanobacteria, not bacteria in this context."
  },
  {
    "id": 222,
    "topic": "Microbes as Biofertilisers",
    "q": "Assertion (A): <i>Rhizobium</i> is a free-living nitrogen-fixing bacterium found in soil.<br>Reason (R): <i>Azotobacter</i> forms a symbiotic association with roots of leguminous plants.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is false but R is false",
      "A is true but R is false"
    ],
    "correct": 2,
    "explanation": "BOTH A and R are FALSE – they are completely REVERSED. Rhizobium is SYMBIOTIC (forms root nodules on legumes), NOT free-living. Azotobacter is FREE-LIVING, NOT symbiotic with legumes. This reversal is one of the most important NEET traps."
  },
  {
    "id": 223,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following is <b>correctly</b> matched?",
    "options": [
      "Rhizobium – Free-living in soil",
      "Azospirillum – Symbiotic with legumes",
      "Azotobacter – Free-living in soil",
      "Glomus – Free-living nitrogen fixer"
    ],
    "correct": 2,
    "explanation": "Azotobacter is correctly described as free-living in soil. Rhizobium is symbiotic (NOT free-living). Azospirillum is free-living (NOT symbiotic with legumes). Glomus forms mycorrhiza for phosphorus absorption (NOT nitrogen fixation)."
  },
  {
    "id": 224,
    "topic": "Microbes as Biofertilisers",
    "q": "Mycorrhiza is a symbiotic association between:",
    "options": [
      "Bacteria and plant roots",
      "Fungi and plant roots",
      "Cyanobacteria and plant roots",
      "Algae and fungi"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Fungi are also known to form symbiotic associations with plants (mycorrhiza).' Mycorrhiza = FUNGI + plant. NOT bacteria + plant or cyanobacteria + plant. Confusing mycorrhiza with Rhizobium (bacteria + legume) is a classic NEET error."
  },
  {
    "id": 225,
    "topic": "Microbes as Biofertilisers",
    "q": "Many members of which genus form mycorrhiza?",
    "options": [
      "Rhizobium",
      "Azotobacter",
      "Glomus",
      "Anabaena"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Many members of the genus Glomus form mycorrhiza.' Glomus is the specific fungal genus mentioned. Rhizobium and Azotobacter are bacteria. Anabaena is a cyanobacterium."
  },
  {
    "id": 226,
    "topic": "Microbes as Biofertilisers",
    "q": "The fungal symbiont in mycorrhiza absorbs _________ from soil and passes it to the plant.",
    "options": [
      "Nitrogen",
      "Phosphorus",
      "Potassium",
      "Iron"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The fungal symbiont in these associations absorbs phosphorus from soil and passes it to the plant.' Mycorrhiza → PHOSPHORUS absorption. NOT nitrogen (which is fixed by Rhizobium/Azotobacter). The N₂ vs P swap is one of the biggest NEET traps."
  },
  {
    "id": 227,
    "topic": "Microbes as Biofertilisers",
    "q": "Plants having mycorrhizal association show additional benefits such as:<br>(i) Resistance to root-borne pathogens<br>(ii) Tolerance to salinity and drought<br>(iii) Overall increase in plant growth and development<br>(iv) Resistance to all aerial pathogens<br><br>Which of the above are correct as per NCERT?",
    "options": [
      "(i), (ii) and (iii) only",
      "(i) and (ii) only",
      "(ii), (iii) and (iv) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "NCERT mentions (i), (ii), and (iii) as benefits. Statement (iv) is wrong – NCERT specifies resistance to ROOT-BORNE pathogens, NOT all aerial pathogens. The word 'root-borne' is specific and a potential NEET trap."
  },
  {
    "id": 228,
    "topic": "Microbes as Biofertilisers",
    "q": "Assertion (A): Mycorrhizal associations help plants absorb nitrogen from soil.<br>Reason (R): The fungal symbiont in mycorrhiza absorbs phosphorus from soil and passes it to the plant.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is false but R is true",
      "A is false and R is false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE – mycorrhiza helps absorb PHOSPHORUS (not nitrogen) from soil. Reason is TRUE – NCERT confirms the fungal symbiont absorbs phosphorus. This nitrogen vs phosphorus confusion for mycorrhiza is extremely common in NEET."
  },
  {
    "id": 229,
    "topic": "Microbes as Biofertilisers",
    "q": "Cyanobacteria used as biofertilisers are:",
    "options": [
      "Heterotrophic microbes",
      "Autotrophic microbes",
      "Parasitic microbes",
      "Saprophytic microbes"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'Cyanobacteria are autotrophic microbes widely distributed in aquatic and terrestrial environments.' They are AUTOTROPHIC (photosynthetic). Not heterotrophic, parasitic, or saprophytic. This nutritional classification is a NEET fact."
  },
  {
    "id": 230,
    "topic": "Microbes as Biofertilisers",
    "q": "Cyanobacteria are widely distributed in:",
    "options": [
      "Only aquatic environments",
      "Only terrestrial environments",
      "Both aquatic and terrestrial environments",
      "Only deep sea environments"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Cyanobacteria are autotrophic microbes widely distributed in aquatic and terrestrial environments.' BOTH environments – not just one. Students often associate cyanobacteria only with aquatic habitats."
  },
  {
    "id": 231,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following are examples of nitrogen-fixing cyanobacteria?",
    "options": [
      "Rhizobium, Azotobacter, Azospirillum",
      "Anabaena, Nostoc, Oscillatoria",
      "Glomus, Trichoderma, Aspergillus",
      "Lactobacillus, Streptococcus, Acetobacter"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'many of which can fix atmospheric nitrogen, e.g. Anabaena, Nostoc, Oscillatoria, etc.' These are cyanobacteria. Option A lists bacteria. Option C lists fungi. Option D lists other bacteria."
  },
  {
    "id": 232,
    "topic": "Microbes as Biofertilisers",
    "q": "In <b>paddy fields</b>, which of the following serve as an important biofertiliser?",
    "options": [
      "Rhizobium",
      "Azotobacter",
      "Cyanobacteria",
      "Glomus"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'In paddy fields, cyanobacteria serve as an important biofertiliser.' Rhizobium is specific to leguminous plants, not paddy. Glomus forms mycorrhiza. The cyanobacteria-paddy field association is a very high-frequency NEET fact."
  },
  {
    "id": 233,
    "topic": "Microbes as Biofertilisers",
    "q": "Blue green algae (cyanobacteria) contribute to soil fertility by:<br>(i) Fixing atmospheric nitrogen<br>(ii) Adding organic matter to the soil<br><br>Which of the above is/are correct?",
    "options": [
      "(i) only",
      "(ii) only",
      "Both (i) and (ii)",
      "Neither (i) nor (ii)"
    ],
    "correct": 2,
    "explanation": "NCERT states cyanobacteria fix atmospheric nitrogen AND 'Blue green algae also add organic matter to the soil and increase its fertility.' Both roles are mentioned – nitrogen fixation AND organic matter addition."
  },
  {
    "id": 234,
    "topic": "Microbes as Biofertilisers",
    "q": "Consider the following statements:<br>Statement I: <i>Azospirillum</i> forms symbiotic association with leguminous plants to fix nitrogen.<br>Statement II: <i>Rhizobium</i> forms root nodules on leguminous plants for nitrogen fixation.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is INCORRECT – Azospirillum is FREE-LIVING in soil, NOT symbiotic with legumes. Statement II is correct – Rhizobium forms nodules on leguminous roots (symbiotic). This symbiotic vs free-living distinction is repeatedly tested in NEET."
  },
  {
    "id": 235,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following is <b>incorrectly</b> matched?",
    "options": [
      "Rhizobium – Symbiotic nitrogen fixation",
      "Glomus – Mycorrhiza – Phosphorus absorption",
      "Anabaena – Cyanobacterium – Nitrogen fixation",
      "Azotobacter – Mycorrhiza – Phosphorus absorption"
    ],
    "correct": 3,
    "explanation": "Azotobacter is a FREE-LIVING nitrogen-fixing BACTERIUM, NOT a mycorrhiza-forming fungus. Azotobacter has nothing to do with phosphorus absorption. Glomus forms mycorrhiza for phosphorus absorption. This is a classic organism-function swap trap."
  },
  {
    "id": 236,
    "topic": "Microbes as Biofertilisers",
    "q": "Match the following biofertilisers with their primary function:<br>(a) Rhizobium → (i) Phosphorus absorption<br>(b) Glomus → (ii) Free-living N₂ fixation in soil<br>(c) Azotobacter → (iii) Symbiotic N₂ fixation<br>(d) Anabaena → (iv) N₂ fixation in paddy fields<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-iii, b-i, c-ii, d-iv",
      "a-i, b-iii, c-iv, d-ii",
      "a-iii, b-ii, c-i, d-iv",
      "a-iv, b-i, c-iii, d-ii"
    ],
    "correct": 0,
    "explanation": "Rhizobium → Symbiotic N₂ fixation (iii); Glomus → Phosphorus absorption via mycorrhiza (i); Azotobacter → Free-living N₂ fixation (ii); Anabaena → N₂ fixation in paddy fields (iv). This comprehensive matching covers all four biofertiliser types."
  },
  {
    "id": 237,
    "topic": "Microbes as Biofertilisers",
    "q": "Assertion (A): Cyanobacteria serve as an important biofertiliser in paddy fields.<br>Reason (R): Cyanobacteria are autotrophic microbes that can fix atmospheric nitrogen.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both A and R are true, and R correctly explains A. Cyanobacteria are important in paddy fields BECAUSE they are autotrophic and can fix atmospheric nitrogen, enriching the soil with nitrogen – a key nutrient for rice plants."
  },
  {
    "id": 238,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following is <b>NOT</b> a benefit of mycorrhizal association mentioned in NCERT?",
    "options": [
      "Resistance to root-borne pathogens",
      "Tolerance to salinity and drought",
      "Overall increase in plant growth",
      "Nitrogen fixation from atmosphere"
    ],
    "correct": 3,
    "explanation": "Nitrogen fixation is NOT a function of mycorrhiza. NCERT lists three benefits: (1) resistance to root-borne pathogens, (2) tolerance to salinity and drought, (3) overall increase in plant growth and development. Mycorrhiza absorbs PHOSPHORUS, not nitrogen."
  },
  {
    "id": 239,
    "topic": "Microbes as Biofertilisers",
    "q": "How many of the following are <b>bacteria</b> that serve as biofertilisers?<br>(i) Rhizobium<br>(ii) Azospirillum<br>(iii) Azotobacter<br>(iv) Glomus<br>(v) Anabaena",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct": 1,
    "explanation": "Only THREE are bacteria: Rhizobium, Azospirillum, and Azotobacter. Glomus is a FUNGUS (forms mycorrhiza). Anabaena is a CYANOBACTERIUM (blue-green alga). NCERT distinguishes between bacteria, fungi, and cyanobacteria as the three main sources of biofertilisers."
  },
  {
    "id": 240,
    "topic": "Microbes as Biofertilisers",
    "q": "Consider the following:<br>(i) Rhizobium – Symbiotic – Leguminous plants<br>(ii) Azotobacter – Free-living – Soil<br>(iii) Glomus – Mycorrhiza – Phosphorus absorption<br>(iv) Oscillatoria – Cyanobacterium – Paddy fields<br><br>How many of the above are <b>correctly</b> described?",
    "options": [
      "One",
      "Two",
      "Three",
      "All four"
    ],
    "correct": 3,
    "explanation": "ALL FOUR are correctly described per NCERT. Rhizobium = symbiotic with legumes ✓; Azotobacter = free-living in soil ✓; Glomus = mycorrhiza for P absorption ✓; Oscillatoria = cyanobacterium in paddy fields (nitrogen fixer) ✓."
  },
  {
    "id": 241,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following microbes enriches the <b>nitrogen</b> content of soil while being <b>free-living</b>?",
    "options": [
      "Rhizobium",
      "Glomus",
      "Azospirillum",
      "Anabaena"
    ],
    "correct": 2,
    "explanation": "NCERT states: 'Other bacteria can fix atmospheric nitrogen while free-living in the soil (examples Azospirillum and Azotobacter), thus enriching the nitrogen content of the soil.' Rhizobium is symbiotic. Glomus absorbs phosphorus. Anabaena is a cyanobacterium (could be considered correct, but NCERT specifically lists Azospirillum as a free-living BACTERIAL example)."
  },
  {
    "id": 242,
    "topic": "Microbes as Biofertilisers",
    "q": "Read the following statements:<br>Statement I: Mycorrhiza is formed by symbiotic association of bacteria with plant roots.<br>Statement II: The fungal symbiont in mycorrhiza absorbs phosphorus from soil.<br><br>Select the correct option:",
    "options": [
      "Both Statements I and II are correct",
      "Both Statements I and II are incorrect",
      "Statement I is incorrect but Statement II is correct",
      "Statement I is correct but Statement II is incorrect"
    ],
    "correct": 2,
    "explanation": "Statement I is INCORRECT – mycorrhiza is formed by FUNGI (not bacteria) with plant roots. Statement II is correct – NCERT confirms the fungal symbiont absorbs phosphorus. The fungi vs bacteria mix-up for mycorrhiza is a critical NEET trap."
  },
  {
    "id": 243,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following correctly represents the THREE main sources of biofertilisers as per NCERT?",
    "options": [
      "Bacteria, viruses, and fungi",
      "Bacteria, fungi, and cyanobacteria",
      "Fungi, algae, and protozoa",
      "Bacteria, protozoa, and cyanobacteria"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The main sources of biofertilisers are bacteria, fungi and cyanobacteria.' Viruses, algae (other than cyanobacteria), and protozoa are NOT listed as biofertiliser sources."
  },
  {
    "id": 244,
    "topic": "Microbes as Biofertilisers",
    "q": "Assertion (A): <i>Glomus</i> is a genus of fungi that forms mycorrhiza with plant roots.<br>Reason (R): The mycorrhizal association helps the plant in absorption of atmospheric nitrogen.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 2,
    "explanation": "Assertion is TRUE – NCERT confirms Glomus forms mycorrhiza. Reason is FALSE – mycorrhiza helps in PHOSPHORUS absorption (not nitrogen). The nitrogen vs phosphorus swap for mycorrhiza is one of the most frequent NEET traps."
  },
  {
    "id": 245,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following cyanobacteria is <b>NOT</b> mentioned in NCERT as an example of nitrogen-fixing cyanobacterium?",
    "options": [
      "Anabaena",
      "Nostoc",
      "Oscillatoria",
      "Spirulina"
    ],
    "correct": 3,
    "explanation": "NCERT lists Anabaena, Nostoc, and Oscillatoria as examples. Spirulina is NOT mentioned in this context in NCERT. Students may recall Spirulina from other contexts but it is not listed here as a biofertiliser."
  },
  {
    "id": 246,
    "topic": "Microbes as Biofertilisers",
    "q": "The overuse of chemical fertilisers has contributed to:",
    "options": [
      "Increased biodiversity",
      "Environmental pollution",
      "Improved soil health",
      "Enhanced microbial activity in soil"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'The use of the chemical fertilisers to meet the ever-increasing demand of agricultural produce has contributed significantly to this pollution.' Overuse of chemical fertilisers leads to environmental pollution, not improved biodiversity or soil health."
  },
  {
    "id": 247,
    "topic": "Microbes as Biofertilisers",
    "q": "Which organism derives nutrients while living <b>symbiotically</b> with leguminous plant roots and also helps the plant?",
    "options": [
      "Azotobacter",
      "Azospirillum",
      "Rhizobium",
      "Oscillatoria"
    ],
    "correct": 2,
    "explanation": "Rhizobium forms a symbiotic association with leguminous plant roots (nodules). The bacterium fixes nitrogen for the plant, and in return gets shelter and nutrients from the plant. Azotobacter and Azospirillum are free-living. Oscillatoria is a cyanobacterium."
  },
  {
    "id": 248,
    "topic": "Microbes as Biofertilisers",
    "q": "Consider the following about biofertilisers:<br>(i) Rhizobium – Bacteria – Symbiotic – Nitrogen fixation<br>(ii) Glomus – Fungi – Symbiotic – Phosphorus absorption<br>(iii) Azotobacter – Bacteria – Free-living – Nitrogen fixation<br>(iv) Nostoc – Cyanobacteria – Autotrophic – Nitrogen fixation<br><br>How many are <b>correctly</b> described?",
    "options": [
      "One",
      "Two",
      "Three",
      "All four"
    ],
    "correct": 3,
    "explanation": "ALL FOUR are correctly described as per NCERT. Each entry correctly identifies the organism, classification, lifestyle, and function. This is a comprehensive factual recall question covering the entire biofertiliser topic."
  },
  {
    "id": 249,
    "topic": "Microbes as Biofertilisers",
    "q": "Which of the following statements about mycorrhizal plants is <b>incorrect</b>?",
    "options": [
      "They show resistance to root-borne pathogens",
      "They show tolerance to salinity",
      "They show tolerance to drought",
      "They show resistance to all viral diseases"
    ],
    "correct": 3,
    "explanation": "NCERT mentions resistance to ROOT-BORNE pathogens, tolerance to salinity and drought. 'Resistance to all viral diseases' is NOT mentioned. Mycorrhizal benefits are specific to root-related issues and overall growth – not all diseases."
  },
  {
    "id": 250,
    "topic": "Microbes as Biofertilisers",
    "q": "The use of biofertilisers helps to:",
    "options": [
      "Increase soil pollution",
      "Reduce dependence on chemical fertilisers",
      "Eliminate all soil microbes",
      "Increase the use of pesticides"
    ],
    "correct": 1,
    "explanation": "NCERT states: 'farmers use these regularly in their fields to replenish soil nutrients and to reduce dependence on chemical fertilisers.' Biofertilisers are eco-friendly alternatives that reduce chemical fertiliser use."
  },
  {
    "id": 251,
    "topic": "Microbes as Biofertilisers",
    "q": "Match the following:<br>(a) Nitrogen fixation (symbiotic) → (i) Glomus<br>(b) Nitrogen fixation (free-living) → (ii) Anabaena<br>(c) Phosphorus absorption → (iii) Rhizobium<br>(d) Nitrogen fixation (paddy fields) → (iv) Azotobacter<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-iii, b-iv, c-i, d-ii",
      "a-iv, b-iii, c-ii, d-i",
      "a-i, b-ii, c-iii, d-iv",
      "a-iii, b-i, c-iv, d-ii"
    ],
    "correct": 0,
    "explanation": "Symbiotic N₂ fixation → Rhizobium (iii); Free-living N₂ fixation → Azotobacter (iv); Phosphorus absorption → Glomus (i); N₂ fixation in paddy fields → Anabaena (ii). This is the most comprehensive matching question for biofertilisers."
  },
  {
    "id": 252,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following microbe–product pairs is <b>incorrectly</b> matched?",
    "options": [
      "Lactobacillus – Curd",
      "Saccharomyces cerevisiae – Bread",
      "Propionibacterium sharmanii – Roquefort cheese",
      "Aspergillus niger – Citric acid"
    ],
    "correct": 2,
    "explanation": "Propionibacterium sharmanii is associated with SWISS cheese (large holes due to CO₂), NOT Roquefort cheese. Roquefort cheese is ripened by specific FUNGI. This is one of the most frequently tested organism-product swaps in NEET."
  },
  {
    "id": 253,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Consider the following statements:<br>(i) LAB convert milk to curd and increase vitamin B12<br>(ii) Bread is fermented by <i>Saccharomyces cerevisiae</i><br>(iii) Idli and dosa dough is fermented by yeast<br>(iv) Cheese gets its specific flavour from the microbes used<br><br>Which are <b>correct</b>?",
    "options": [
      "(i), (ii) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(i) and (ii) only",
      "(iii) and (iv) only"
    ],
    "correct": 0,
    "explanation": "Statement (iii) is INCORRECT – idli and dosa dough is fermented by BACTERIA, not yeast. Statements (i), (ii), and (iv) are correct per NCERT. This bacteria vs yeast distinction for dosa/idli is the most tested trap in household products."
  },
  {
    "id": 254,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Assertion (A): Microbes play a role in treating sewage through activated sludge formation.<br>Reason (R): This process has been used for more than a hundred years.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 1,
    "explanation": "Both A and R are true. However, R does not EXPLAIN why microbes treat sewage. The fact that it has been used for >100 years is a historical fact, not the mechanism/reason for how microbes treat sewage. The mechanism involves aerobic and anaerobic digestion."
  },
  {
    "id": 255,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following scientists is correctly associated with the discovery and development of Penicillin?<br>(i) Alexander Fleming – Discovery<br>(ii) Ernest Chain – Establishing full potential<br>(iii) Howard Florey – Establishing full potential<br>(iv) All three – Nobel Prize 1945",
    "options": [
      "(i) and (iv) only",
      "(i), (ii), (iii) and (iv)",
      "(ii) and (iii) only",
      "(i) and (ii) only"
    ],
    "correct": 1,
    "explanation": "All four statements are correct per NCERT. Fleming discovered Penicillin; Chain and Florey established its full potential; all three received the Nobel Prize in 1945. This complete association is a direct NCERT fact."
  },
  {
    "id": 256,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Read the following statements and identify the <b>incorrect</b> one:",
    "options": [
      "Methanogens produce methane while degrading plant waste",
      "Biogas is used as a source of energy in rural areas",
      "Primary treatment of sewage is a biological process",
      "Antibiotics like penicillin are used to kill disease-causing microbes"
    ],
    "correct": 2,
    "explanation": "Primary treatment is a PHYSICAL process (filtration and sedimentation), NOT biological. SECONDARY treatment is the biological process. All other statements are correct per NCERT summary."
  },
  {
    "id": 257,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following represents the <b>correct</b> sequence of organic acid – producing microbe?",
    "options": [
      "Citric acid – Acetobacter aceti",
      "Acetic acid – Aspergillus niger",
      "Butyric acid – Clostridium butylicum",
      "Lactic acid – Clostridium butylicum"
    ],
    "correct": 2,
    "explanation": "Butyric acid – Clostridium butylicum is correct. Citric acid = Aspergillus niger (NOT Acetobacter). Acetic acid = Acetobacter aceti (NOT Aspergillus). Lactic acid = Lactobacillus (NOT Clostridium). The organism-acid pairings are very commonly swapped in NEET."
  },
  {
    "id": 258,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Consider the following biocontrol agents and their targets:<br>(i) Ladybird – Mosquitoes<br>(ii) Dragonflies – Aphids<br>(iii) Bt – Butterfly caterpillars<br>(iv) Trichoderma – Plant pathogens<br><br>Which are <b>correctly</b> matched?",
    "options": [
      "(i) and (ii) only",
      "(iii) and (iv) only",
      "(i), (ii) and (iii)",
      "All of the above"
    ],
    "correct": 1,
    "explanation": "Statements (i) and (ii) are REVERSED – Ladybird controls APHIDS (not mosquitoes) and Dragonflies control MOSQUITOES (not aphids). Only (iii) Bt → caterpillars and (iv) Trichoderma → plant pathogens are correct."
  },
  {
    "id": 259,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following is used as an immunosuppressive agent in organ transplant patients?",
    "options": [
      "Streptokinase",
      "Statins",
      "Cyclosporin A",
      "Penicillin"
    ],
    "correct": 2,
    "explanation": "NCERT: Cyclosporin A (from Trichoderma polysporum) = immunosuppressive in organ transplants. Streptokinase = clot buster. Statins = cholesterol lowering. Penicillin = antibiotic. This is one of the most tested bioactive molecule-application matchings."
  },
  {
    "id": 260,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following is <b>correctly</b> matched regarding biogas?",
    "options": [
      "Biogas predominantly contains CO₂",
      "Methanogens are aerobic bacteria",
      "Methanobacterium is found in rumen of cattle",
      "Biogas technology was developed by ICAR and CSIR"
    ],
    "correct": 2,
    "explanation": "Methanobacterium is found in the rumen of cattle – correct per NCERT. Biogas predominantly contains METHANE (not CO₂). Methanogens are ANAEROBIC (not aerobic). Technology was developed by IARI and KVIC (not ICAR and CSIR)."
  },
  {
    "id": 261,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Assertion (A): Biofertilisers are preferred over chemical fertilisers.<br>Reason (R): Chemical fertilisers contribute significantly to environmental pollution.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is true but R is false",
      "A is false but R is true"
    ],
    "correct": 0,
    "explanation": "Both are true and R correctly explains A. NCERT states there is 'large pressure to switch to organic farming' because 'the use of chemical fertilisers...has contributed significantly to this pollution.' The environmental damage caused by chemicals is why biofertilisers are preferred."
  },
  {
    "id": 262,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "How many of the following are <b>fungi</b> mentioned in the chapter?<br>(i) Aspergillus niger<br>(ii) Trichoderma polysporum<br>(iii) Trichoderma (biocontrol)<br>(iv) Penicillium notatum<br>(v) Monascus purpureus<br>(vi) Saccharomyces cerevisiae",
    "options": [
      "Three",
      "Four",
      "Five",
      "Six"
    ],
    "correct": 3,
    "explanation": "ALL SIX are fungi (yeasts are a type of fungi). Aspergillus niger (citric acid), Trichoderma polysporum (cyclosporin A), Trichoderma (biocontrol), Penicillium notatum (penicillin), Monascus purpureus (statins – yeast), and Saccharomyces cerevisiae (yeast for bread/beverages). All belong to Kingdom Fungi."
  },
  {
    "id": 263,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following correctly differentiates between primary sludge and activated sludge?",
    "options": [
      "Primary sludge is formed in secondary treatment; activated sludge in primary treatment",
      "Primary sludge is formed by sedimentation in primary treatment; activated sludge is formed from bacterial flocs in secondary treatment",
      "Both are formed during primary treatment",
      "Both are formed during secondary treatment"
    ],
    "correct": 1,
    "explanation": "Primary sludge = settled solids during PRIMARY treatment. Activated sludge = sedimented bacterial flocs during SECONDARY treatment. They form at different stages and have different compositions. Option A reverses the stages."
  },
  {
    "id": 264,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following pairs both involve <b>symbiotic</b> associations?",
    "options": [
      "Rhizobium with legumes and Glomus forming mycorrhiza",
      "Azotobacter in soil and Azospirillum in soil",
      "Anabaena in paddy fields and Oscillatoria in paddy fields",
      "Azospirillum in soil and Glomus forming mycorrhiza"
    ],
    "correct": 0,
    "explanation": "Rhizobium–legume (symbiotic N₂ fixation) and Glomus–mycorrhiza (symbiotic P absorption) are BOTH symbiotic. Azotobacter, Azospirillum, Anabaena, and Oscillatoria are all FREE-LIVING. Option D mixes a free-living organism with a symbiotic one."
  },
  {
    "id": 265,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Consider the following applications of microbial products:<br>(a) Streptokinase – Clot buster<br>(b) Cyclosporin A – Blood cholesterol lowering<br>(c) Statins – Immunosuppressive<br>(d) Lipases – Detergent formulations<br><br>How many are <b>correctly</b> matched?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "correct": 1,
    "explanation": "Only TWO are correct: (a) Streptokinase = clot buster ✓ and (d) Lipases = detergent formulations ✓. (b) is wrong – Cyclosporin A is IMMUNOSUPPRESSIVE, not cholesterol-lowering. (c) is wrong – Statins are CHOLESTEROL-LOWERING, not immunosuppressive. The applications of (b) and (c) are swapped."
  },
  {
    "id": 266,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following diseases was specifically mentioned in NCERT as being treated by antibiotics?<br>(i) Diphtheria<br>(ii) Whooping cough<br>(iii) Pneumonia<br>(iv) Plague<br>(v) Leprosy<br>(vi) Malaria",
    "options": [
      "(i), (ii), (iii), (iv) and (v) only",
      "(i), (ii) and (iii) only",
      "(i), (ii), (iv) and (v) only",
      "All of the above"
    ],
    "correct": 0,
    "explanation": "NCERT main text mentions plague, whooping cough, diphtheria, and leprosy. The summary adds pneumonia. Malaria is NOT mentioned as treated by antibiotics (it's caused by a protozoan and treated with antimalarial drugs). So (i) through (v) are correct."
  },
  {
    "id": 267,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following statements about <i>Saccharomyces cerevisiae</i> is <b>incorrect</b>?",
    "options": [
      "It is used as baker's yeast",
      "It is used as brewer's yeast",
      "It ferments dosa and idli dough",
      "It is used for commercial production of ethanol"
    ],
    "correct": 2,
    "explanation": "Saccharomyces cerevisiae does NOT ferment dosa/idli dough – that is done by BACTERIA. S. cerevisiae is used for bread (baker's yeast), alcoholic beverages (brewer's yeast), and commercial ethanol production. The dosa/idli–bacteria connection is a perennial NEET trap."
  },
  {
    "id": 268,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Assertion (A): BOD is a direct measure of the organic matter present in water.<br>Reason (R): Greater BOD of waste water indicates more polluting potential.",
    "options": [
      "Both A and R are true, and R is the correct explanation of A",
      "Both A and R are true, but R is NOT the correct explanation of A",
      "A is false but R is true",
      "Both A and R are false"
    ],
    "correct": 2,
    "explanation": "Assertion is FALSE – BOD is an INDIRECT measure of organic matter (not direct). Reason is TRUE – greater BOD means more pollution. The word 'indirect' is critical and one of the most tested NEET traps."
  },
  {
    "id": 269,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following represents the correct combination of biocontrol agent types?<br>Bacterium – Fungus – Virus",
    "options": [
      "Trichoderma – Bt – Nucleopolyhedrovirus",
      "Bt – Trichoderma – Nucleopolyhedrovirus",
      "Bt – Nucleopolyhedrovirus – Trichoderma",
      "Nucleopolyhedrovirus – Bt – Trichoderma"
    ],
    "correct": 1,
    "explanation": "Bt (Bacillus thuringiensis) = Bacterium; Trichoderma = Fungus; Nucleopolyhedrovirus = Virus. The sequence Bacterium–Fungus–Virus matches Option B. Knowing the classification of each biocontrol agent is crucial for NEET."
  },
  {
    "id": 270,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "How many of the following involve <b>anaerobic</b> processes?<br>(i) Fermentation by yeast for bread<br>(ii) Aerobic microbes forming flocs in aeration tank<br>(iii) Methanogens producing methane<br>(iv) Anaerobic sludge digestion<br>(v) Cyanobacteria fixing nitrogen",
    "options": [
      "Two",
      "Three",
      "Four",
      "Five"
    ],
    "correct": 1,
    "explanation": "THREE involve anaerobic processes: (i) Yeast fermentation for bread (anaerobic), (iii) Methanogens producing methane (anaerobic), and (iv) Anaerobic sludge digestion (anaerobic). (ii) Floc formation in aeration tank is AEROBIC. (v) Cyanobacteria are AUTOTROPHIC and photosynthetic (not specifically anaerobic)."
  },
  {
    "id": 271,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following chapters' concepts are linked to Bt-cotton?",
    "options": [
      "Molecular Basis of Inheritance",
      "Biotechnology and its Applications",
      "Principles of Inheritance",
      "Evolution"
    ],
    "correct": 1,
    "explanation": "NCERT states regarding Bt-cotton: 'You will learn more about this in chapter 10' which is Biotechnology and its Applications. Bt-cotton involves genetic engineering – a key topic of biotechnology."
  },
  {
    "id": 272,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Match the following microbes with their type:<br>(a) Lactobacillus → (i) Fungus<br>(b) Saccharomyces cerevisiae → (ii) Cyanobacterium<br>(c) Aspergillus niger → (iii) Bacterium<br>(d) Anabaena → (iv) Yeast/Fungus<br><br>Select the <b>correct</b> match:",
    "options": [
      "a-iii, b-iv, c-i, d-ii",
      "a-i, b-iii, c-iv, d-ii",
      "a-iii, b-i, c-iv, d-ii",
      "a-ii, b-iv, c-i, d-iii"
    ],
    "correct": 0,
    "explanation": "Lactobacillus = Bacterium (iii); Saccharomyces cerevisiae = Yeast/Fungus (iv); Aspergillus niger = Fungus (i); Anabaena = Cyanobacterium (ii). Correct organism classification is foundational for NEET questions in this chapter."
  },
  {
    "id": 273,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following correctly lists the gases in biogas produced during <b>anaerobic sludge digestion</b> in sewage treatment?",
    "options": [
      "Methane, CO₂, and H₂",
      "Methane, H₂S, and CO₂",
      "Methane, O₂, and N₂",
      "CO₂, H₂, and O₂"
    ],
    "correct": 1,
    "explanation": "During sewage treatment, anaerobic sludge digestion produces methane, H₂S, and CO₂. This differs from methanogen-produced gases (methane, CO₂, H₂). The H₂S vs H₂ distinction between sewage biogas and methanogen biogas is a subtle but important NEET difference."
  },
  {
    "id": 274,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Consider the following complete pathway:<br>Milk → [A] → Curd (with increased [B])<br><br>Identify A and B:",
    "options": [
      "A = Saccharomyces cerevisiae; B = Vitamin C",
      "A = Lactobacillus (LAB); B = Vitamin B12",
      "A = Acetobacter aceti; B = Vitamin B2",
      "A = Streptococcus; B = Vitamin B6"
    ],
    "correct": 1,
    "explanation": "Milk is converted to curd by Lactobacillus (LAB) with an increase in Vitamin B12. NCERT explicitly states these two facts. No other organism-vitamin combination is correct for curd formation."
  },
  {
    "id": 275,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Read the following statements and select the one that is <b>NOT</b> stated in NCERT:<br>",
    "options": [
      "Microbes are used to treat sewage through activated sludge formation",
      "Methanogens produce methane while degrading plant waste",
      "All microbes are pathogenic and harmful to humans",
      "Biocontrol measures help avoid heavy use of toxic pesticides"
    ],
    "correct": 2,
    "explanation": "NCERT clearly states: 'Not all microbes are pathogenic. Many microbes are very useful to human beings.' The statement 'All microbes are pathogenic and harmful' CONTRADICTS NCERT. All other statements are directly from the NCERT summary."
  },
  {
    "id": 276,
    "topic": "Chapter Summary – Comprehensive Revision",
    "q": "Which of the following represents the <b>most comprehensive</b> list of ways microbes are useful to humans as described in NCERT?",
    "options": [
      "Household products, industrial products, and antibiotics only",
      "Sewage treatment, biogas production, and biocontrol only",
      "Household products, industrial products, antibiotics, sewage treatment, biogas production, biocontrol, and biofertilisers",
      "Only antibiotics and biofertilisers"
    ],
    "correct": 2,
    "explanation": "NCERT covers ALL of the following microbial contributions: household products (curd, bread, cheese), industrial products (beverages, chemicals, enzymes), antibiotics, sewage treatment, biogas production, biocontrol agents, and biofertilisers. This is the complete list of topics in the chapter."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { allQuestions };
}
