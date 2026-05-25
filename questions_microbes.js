// ===== CHAPTER: Microbes in Human Welfare =====
var allQuestions = [
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
  },
  {
    "id": 277,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "HowMany",
    "hots": true,
    "q": "How many are associated with secondary treatment in STP from the given box?<br><b>Primary sludge, Aeration tank, Flocs, Sequential filtration, UV ray treatment, Reverse osmosis, Anaerobic sludge digesters, Decrease in BOD, Chlorination</b>",
    "options": ["8", "6", "4", "2"],
    "correct": 2,
    "explanation": "SOLUTION: Aeration tank, flocs, reduction in BOD of the effluent and anaerobic sludge digester are associated with secondary treatment in STP.\nCorrect because these 4 elements specifically participate in the biological (secondary) phase. The tempting option '6' or '8' is wrong because Primary sludge belongs to primary treatment, while UV, Chlorination, Reverse osmosis, and Sequential filtration are parts of tertiary treatment."
  },
  {
    "id": 278,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Statement",
    "hots": true,
    "q": "Read the statements and choose the correct option accordingly.<br><b>Statement A:</b> Dried spores of Bacillus thuringiensis (Bt) is used as bioinsecticide.<br><b>Statement B:</b> Bt can be introduced to control butterfly caterpillars.",
    "options": ["Both statements are correct", "Both statements are incorrect", "Only A is correct", "Only B is correct"],
    "correct": 0,
    "explanation": "SOLUTION: Dried spores of Bacillus thuringiensis are available in sachets and used as bio-insecticides to control butterfly caterpillars.\nCorrect because Bt spores are widely sold in sachets to specifically target and kill butterfly caterpillars without harming other insects. The tempting options favoring only one statement are wrong because both represent factual, standard applications of Bt."
  },
  {
    "id": 279,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Toddy is fermented sap of",
    "options": ["Yeast", "Caryota urens", "Bacteria", "Sugarcane"],
    "correct": 1,
    "explanation": "SOLUTION: Toddy is fermented sap of Caryota urens.\nCorrect because Caryota urens is a species of palm tree from which the sap is extracted to make the traditional drink Toddy. The tempting option 'Yeast' is wrong because yeast is the microbe that performs the fermentation, not the source of the sap."
  },
  {
    "id": 280,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which one is not a tool used for IPM?",
    "options": ["Summer ploughing", "Late planting", "Excess use of pesticides", "Quarantine measures"],
    "correct": 2,
    "explanation": "SOLUTION: Many tools have been successfully used for IPM in several crops as summer ploughing, quarantine measure, late planting and controlled use of pesticides.\nCorrect because Integrated Pest Management (IPM) strictly advocates against the 'excess' use of chemical pesticides, promoting sustainable and biological alternatives. The tempting options like 'Late planting' are wrong as they are actual cultural tools used in IPM."
  },
  {
    "id": 281,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which one is incorrect statement with respect to discovery of penicillin?",
    "options": ["Fleming found the growth of mould inhibited the growth of Staphylococci in culture plate", "Fleming found that the chemical was produced by the mould Penicillium notatum and named it Penicillin", "Penicillin acts on cell wall of plant cells", "Fleming, Chain and Florey were awarded Nobel prize for this discovery"],
    "correct": 2,
    "explanation": "SOLUTION: Penicillin antibiotic inhibits cell wall formation in bacterial cells.\nCorrect because penicillin specifically targets the peptidoglycan cell wall of bacteria, not plant cells. The tempting option regarding the Nobel Prize is wrong to select because it is a true statement (they were indeed awarded the prize in 1945)."
  },
  {
    "id": 282,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Bottled juices are clarified by the use of",
    "options": ["Pectinases", "Proteases", "Lipase", "Both (1) and (2)"],
    "correct": 3,
    "explanation": "SOLUTION: Pectinases and proteases are used in clarifying fruit juices which are product of Aspergillus niger and Mortierella renispora respectively.\nCorrect because both enzymes break down the structural proteins and pectins that cause cloudiness in juices. The tempting option 'Lipase' is wrong because lipases break down fats (used in detergents), not the components causing cloudiness in fruit juice."
  },
  {
    "id": 283,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "In which stage of sewage treatment pathogens and pesticides can be removed?",
    "options": ["Primary treatment", "Secondary treatment", "Biological treatment", "Tertiary treatment"],
    "correct": 3,
    "explanation": "SOLUTION: During tertiary stage of sewage treatment DDT, pesticides and pathogens are removed by physico-chemical process.\nCorrect because tertiary treatment involves advanced physico-chemical processes like chlorination or UV radiation specifically designed to eliminate traces of pathogens and chemicals. The tempting option 'Secondary treatment' is wrong as it only targets organic matter (BOD reduction)."
  },
  {
    "id": 284,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Cyanobacteria help farmers by",
    "options": ["Reducing alkalinity of soil", "Ammonification", "Reducing acidity of soil", "By denitrification"],
    "correct": 0,
    "explanation": "SOLUTION: Cyanobacteria are helpful to farmers as they increase soil fertility and reduce alkalinity of soil.\nCorrect because certain cyanobacteria excrete acidic compounds that help neutralize alkaline soils, making them better for cultivation. The tempting option 'Reducing acidity' is wrong because they actually help reduce alkalinity, not acidity."
  },
  {
    "id": 285,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Except",
    "hots": true,
    "q": "Select odd one w.r.t. source of antibiotics.",
    "options": ["Bacteria", "Fungi", "Actinomycetes", "Protozoans"],
    "correct": 3,
    "explanation": "SOLUTION: Protozoans are not useful in production of antibiotics.\nCorrect because antibiotics are commercially produced mainly from bacteria (like Bacillus), fungi (like Penicillium), and Actinomycetes (like Streptomyces). The tempting option 'Actinomycetes' is wrong to select as an odd one because it is actually a major source of antibiotics."
  },
  {
    "id": 286,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Microbe used for the production of pectinase is",
    "options": ["Aspergillus niger", "Rhizopus", "Bacillus species", "Acetobacter"],
    "correct": 0,
    "explanation": "SOLUTION: Aspergillus niger is used for production of enzyme pectinase.\nCorrect because the fungus Aspergillus niger is industrially cultivated to extract pectinase. The tempting option 'Acetobacter' is wrong because it is used for acetic acid production, not pectinase."
  },
  {
    "id": 287,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Treatment of waste water is done by",
    "options": ["Chemoautotrophic microbes already present in sewage", "Heterotrophic microbes inoculated in sewage from outside only", "Heterotrophic microbes naturally present in sewage", "Photoautotrophic microbes present in sewage"],
    "correct": 2,
    "explanation": "SOLUTION: Waste water contains large amount of organic matter and microbes i.e., aerobic heterotrophic microbes into flocs.\nCorrect because the biological treatment relies on the indigenous aerobic heterotrophic bacteria naturally occurring in the sewage to consume the organic waste. The tempting option 'inoculated from outside' is wrong because while inoculum (activated sludge) is added later, it is derived from the sewage itself, not an external source."
  },
  {
    "id": 288,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which of the following is odd w.r.t. free living nitrogen fixing bacteria?",
    "options": ["Rhizobium", "Clostridium", "Rhodospirillum", "Azotobacter"],
    "correct": 0,
    "explanation": "SOLUTION: Rhizobium forms symbiotic association with root nodules of leguminous plants.\nCorrect because Rhizobium is primarily a symbiotic nitrogen fixer, whereas the others are free-living in the soil. The tempting option 'Azotobacter' is wrong to select because it is a classic example of a free-living aerobic nitrogen fixer."
  },
  {
    "id": 289,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "The first antibiotic penicilline was discovered by",
    "options": ["Chain and Florey", "Waksman", "Albert", "Alexander Fleming"],
    "correct": 3,
    "explanation": "SOLUTION: First antibiotic penicillin was discovered by Alexander Fleming.\nCorrect because Fleming accidentally discovered penicillin in 1928. The tempting option 'Chain and Florey' is wrong because they were responsible for isolating and establishing its potential as an effective drug, not for the initial discovery."
  },
  {
    "id": 290,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Besides paddy fields, cyanobacteria are also found inside vegetative part of",
    "options": ["Equisetum", "Cycas", "Psilotum", "Pinus"],
    "correct": 1,
    "explanation": "SOLUTION: In coralloid root of Cycas, cyanobacteria Anabaena cycadae form symbiotic association and help in N2 fixation.\nCorrect because the specialized coralloid roots of Cycas harbor symbiotic cyanobacteria. The tempting option 'Pinus' is wrong because Pinus roots form symbiotic associations with mycorrhizal fungi, not cyanobacteria."
  },
  {
    "id": 291,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following microbe is used for ripening of swiss cheese?",
    "options": ["Penicillium roqueforti", "Penicillium camemberti", "Propionibacterium shermanii", "Streptomyces griseus"],
    "correct": 2,
    "explanation": "SOLUTION: Swiss cheese is ripened with the help of bacterium Propionibacterium sharmanii.\nCorrect because this specific bacterium produces large amounts of CO2, creating the characteristic holes in Swiss cheese. The tempting option 'Penicillium roqueforti' is wrong as it is used for ripening Roquefort cheese, imparting a distinct flavor rather than large holes."
  },
  {
    "id": 292,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Except",
    "hots": true,
    "q": "Mark the odd one w.r.t. Nucleopolyhedrovirus (NPV).",
    "options": ["Broad spectrum herbicidal application", "Species-specific", "Used as biocontrol agent", "Nucleoprotein particles"],
    "correct": 0,
    "explanation": "SOLUTION: Nucleopolyhedrovirus (NPV) have narrow spectrum insecticidal application.\nCorrect because NPVs are known for their extremely narrow, species-specific targeted insecticidal applications, not broad spectrum. The tempting option 'Species-specific' is wrong to select because it is a true characteristic of NPVs."
  },
  {
    "id": 293,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Alcoholic beverage with maximum alcohol content is",
    "options": ["Beer", "Brandy", "Whisky", "Gin"],
    "correct": 1,
    "explanation": "SOLUTION: Brandy - 60-70% alcohol, Whisky - 50% alcohol, Gin-40% alcohol, Beer - 3-6% alcohol.\nCorrect because Brandy is a distilled beverage that generally achieves the highest alcohol concentration among the choices provided. The tempting option 'Whisky' is wrong because its alcohol content (usually 40-50%) is lower than that of Brandy."
  },
  {
    "id": 294,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Mark incorrect match.",
    "options": ["Dragonfly - Biocontrol for mosquitoes", "Anaerobic sludge digestor - Biogas production", "Oscillatoria - Increases alkalinity of soil", "Mycorrhiza - Biofertilizer"],
    "correct": 2,
    "explanation": "SOLUTION: Oscillatoria is a cyanobacteria, which reduces alkalinity of soil.\nCorrect because Oscillatoria secretes acidic substances that decrease soil alkalinity, making the 'increases' statement false. The tempting option 'Dragonfly - Biocontrol for mosquitoes' is wrong to select because it is a correct biological relationship."
  },
  {
    "id": 295,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "HowMany",
    "hots": true,
    "q": "Read the following statements.<br>(a) Curd is more nutritious than milk<br>(b) Cheese is a partially degraded concentrate of milk fat and caesin protein<br>(c) Swelling of dough during bread making is called leavening<br>(d) Wine and beer are produced without distillation<br>How many statements are correct?",
    "options": ["Two", "Four", "Three", "One"],
    "correct": 1,
    "explanation": "SOLUTION: All the given statements are correct.\nCorrect because every statement provided represents an accurate microbiological fact regarding household and industrial products. The tempting options indicating fewer correct statements are wrong because no statement contains a factual error."
  },
  {
    "id": 296,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Barley malt is used in preparation of",
    "options": ["Wine", "Beer", "Cheese", "Whisky"],
    "correct": 1,
    "explanation": "SOLUTION: Barley malt is used in preparation of beer.\nCorrect because malted barley is the primary fermented substrate used by brewer's yeast to produce beer. The tempting option 'Whisky' is wrong because although whisky uses fermented grain mash (sometimes barley), beer is the direct undistilled beverage referenced fundamentally with barley malt."
  },
  {
    "id": 297,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following fern is an excellent biofertilizer?",
    "options": ["Marsilea", "Pteridium", "Azolla", "Salvinia"],
    "correct": 2,
    "explanation": "SOLUTION: Cyanobacteria Anabaena azollae form symbiotic association with pteridophyte Azolla and fix atmospheric N2. Thus, this fern is used as bio-fertilizer.\nCorrect because Azolla harbors nitrogen-fixing cyanobacteria within its leaves, immensely enriching the soil, especially in paddy fields. The tempting option 'Salvinia' is wrong because it is an aquatic fern that does not form this nitrogen-fixing symbiotic relationship."
  },
  {
    "id": 298,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following microbe is most active nitrogen fixer in rice fields?",
    "options": ["Rhizobium", "Aulosira", "Rhodospirillum", "Frankia"],
    "correct": 1,
    "explanation": "SOLUTION: BGA Aulosira is an excellent N2 fixer in paddy field.\nCorrect because Aulosira is a highly active free-living cyanobacterium specifically noted for its intense nitrogen-fixing capabilities in flooded rice fields. The tempting option 'Rhizobium' is wrong because it primarily fixes nitrogen in the root nodules of leguminous plants, not rice."
  },
  {
    "id": 299,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "An immunosuppressive agent used in organ transplant patients is",
    "options": ["Streptokinase", "Statin", "Cyclosporin-A", "Lipase"],
    "correct": 2,
    "explanation": "SOLUTION: Cyclosporin A is an immunosuppressive agent.\nCorrect because Cyclosporin A, produced by Trichoderma polysporum, suppresses the immune system to prevent organ rejection. The tempting option 'Statin' is wrong because statins are used as blood-cholesterol lowering agents, not immunosuppressants."
  },
  {
    "id": 300,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which one is not used as a biopesticide?",
    "options": ["Xanthomonas campestris", "Bacillus thuringiensis", "Nucleopolyhedro virus", "Trichoderma"],
    "correct": 0,
    "explanation": "SOLUTION: Xanthomonas campestris bacterium causes black rot of crucifers, not used as bio-pesticides.\nCorrect because Xanthomonas is a harmful plant pathogen responsible for crop diseases, making it unusable as a biopesticide. The tempting option 'Trichoderma' is wrong because it is a well-known free-living fungus used effectively to biocontrol root pathogens."
  },
  {
    "id": 301,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "During waste water treatment methanogenic bacteria are used for",
    "options": ["Primary treatment", "Secondary aerobic treatment", "Secondary anaerobic treatment", "Tertiary treatment"],
    "correct": 2,
    "explanation": "SOLUTION: Methanogens are anaerobes, used in secondary treatment.\nCorrect because methanogenic bacteria break down the organic matter in anaerobic sludge digesters, producing biogas. The tempting option 'Secondary aerobic treatment' is wrong because methanogens are strict anaerobes and would die in the presence of oxygen."
  },
  {
    "id": 302,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following insecticides is of plant origin?",
    "options": ["2,4-D", "2,4,5-T", "Rotenone", "Malathione"],
    "correct": 2,
    "explanation": "SOLUTION: Rotenone is a natural insecticide, obtained from roots of Derris elliptica.\nCorrect because Rotenone is naturally extracted from the roots of specific plants. The tempting option '2,4-D' is wrong because it is a synthetic chemical herbicide, not a natural plant-derived insecticide."
  },
  {
    "id": 303,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "A biocontrol agent common in the root ecosystem used to control plant pathogens is",
    "options": ["Baculovirus", "Trichoderma", "Bacillus thuringiensis", "Glomus"],
    "correct": 1,
    "explanation": "SOLUTION: Fungus Trichoderma is very common in the root ecosystems and are effective against several plant pathogens.\nCorrect because Trichoderma forms a protective shield around root systems, parasitizing and deterring harmful pathogens. The tempting option 'Glomus' is wrong because it forms mycorrhizal associations to aid in phosphorus absorption, rather than acting as a primary biocontrol agent."
  },
  {
    "id": 304,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Besides paddy fields, cyanobacteria are also found inside vegetative part of",
    "options": ["Cycas", "Equisetum", "Pinus", "Psilotum"],
    "correct": 0,
    "explanation": "SOLUTION: Some species of BGA such as Anabaena form symbiotic association with coralloid root of Cycas.\nCorrect because the specialized coralloid roots of Cycas plants naturally host nitrogen-fixing cyanobacteria. The tempting option 'Pinus' is wrong because pine trees associate with mycorrhizal fungi rather than cyanobacteria."
  },
  {
    "id": 305,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Match",
    "hots": true,
    "q": "Match Column-l with Column-ll and select the correct option.<br><b>Column-I</b><br>(A) Swiss Cheese<br>(B) Dosa<br>(C) Penicilline<br>(D) Butyric acid<br><br><b>Column-II</b><br>(i) Clostridium<br>(ii) Penicillium<br>(iii) Propionibacterium sharmanii<br>(iv) Leuconostoc",
    "options": ["A(ii), B(iv), C(i), D(iii)", "A(iii), B(iv), C(ii), D(i)", "A(iii), B(i), C(ii), D(iv)", "A(i), B(iv), C(ii), D(iii)"],
    "correct": 1,
    "explanation": "SOLUTION: A. Swiss cheese is ripened by Propionibacterium sharmanii. B. Dosa is prepared by using bacteria Leuconostoc. C. Penicillin is obtained from Penicillium notatum. D. Butyric acid is produced by Clostridium butylicum.\nCorrect because the respective microbes perfectly match their resulting products. The tempting option switching the Penicillium and Propionibacterium matches is wrong based on known microbiological functions."
  },
  {
    "id": 306,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Match",
    "hots": true,
    "q": "Find the correct match from the following enlisted industrial products.",
    "options": ["Streptokinase - Streptococcus", "Amylase - Candida lipolytica", "Statin - Trichoderma polysporum", "Cyclosporin A - Monascus purpureus"],
    "correct": 0,
    "explanation": "SOLUTION: Streptokinase is obtained from Streptococcus.\nCorrect because the bacterium Streptococcus is genetically modified to produce the clot-buster streptokinase. The tempting option 'Statin - Trichoderma polysporum' is wrong because Statins are produced by Monascus purpureus, while Trichoderma produces Cyclosporin A."
  },
  {
    "id": 307,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Organic farming aims",
    "options": ["Raising of crops through the use of biofertilizers", "Reducing dependence on chemical fertilizers", "Using genetically modified crops", "Both (1) and (2)"],
    "correct": 3,
    "explanation": "SOLUTION: Organic farming is raising of crops through the use of biofertilizers. It is helpful to reduce dependence on chemical fertilizers.\nCorrect because organic farming specifically avoids synthetic agrochemicals and instead relies on ecological processes and biofertilizers. The tempting option 'Using genetically modified crops' is wrong because organic standards generally restrict or prohibit the use of GMOs."
  },
  {
    "id": 308,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Find the incorrect match amongst the following biocontrol agents.",
    "options": ["Ladybird - Aphids", "Dragonflies - Mosquitoes", "Baculovirus - Plants", "Bacillus thuringiensis - Butterfly catterpillar"],
    "correct": 2,
    "explanation": "SOLUTION: Baculovirus are pathogens that attack insects and other arthropods.\nCorrect because Baculoviruses specifically target arthropods and have absolutely no negative impact on plants. The tempting option 'Dragonflies - Mosquitoes' is wrong to select because dragonflies actually do prey on mosquitoes, making it a correct match."
  },
  {
    "id": 309,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Statins are competitive inhibitor of",
    "options": ["Pectinase", "Streptokinase", "HMG CoA reductase", "Cellulase"],
    "correct": 2,
    "explanation": "SOLUTION: Statins are blood cholesterol lowering agent. It is competitive inhibitors of beta-hydroxy-beta-methylglutaryl CoA reductase. (HMG CoA reductase).\nCorrect because statins directly compete with the natural substrate at the active site of HMG CoA reductase, an enzyme essential for cholesterol synthesis. The tempting option 'Streptokinase' is wrong because statins do not inhibit streptokinase; streptokinase is a separate therapeutic enzyme."
  },
  {
    "id": 310,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Swiss cheese is ripened with the help of",
    "options": ["Algae", "Bacteria", "Fungi", "Actinomycetes"],
    "correct": 1,
    "explanation": "SOLUTION: Swiss cheese is ripened by bacterium Propionibacterium sharmanii.\nCorrect because the ripening agent, Propionibacterium shermanii, is classified as a true bacterium. The tempting option 'Fungi' is wrong because fungi (like Penicillium) are used to ripen other cheeses like Roquefort, not Swiss cheese."
  },
  {
    "id": 311,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Statins are products of",
    "options": ["Streptococcus", "Trichoderma", "Candida", "Monascus"],
    "correct": 3,
    "explanation": "SOLUTION: Statins are product of yeast- Monascus purpureus.\nCorrect because the commercial production of blood-cholesterol lowering statins utilizes the yeast Monascus. The tempting option 'Trichoderma' is wrong because it produces the immunosuppressant Cyclosporin A, not statins."
  },
  {
    "id": 312,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Correctly identify the enzymes (A), (B) and (C) of yeast during leavening process of bread making.<br>Wheat flour starch -> <b>(A)</b> -> Maltose -> <b>(B)</b> -> Glucose -> <b>(C)</b> -> Ethyl alcohol + CO2",
    "options": ["(A) Zymase, (B) Amylase, (C) Maltase", "(A) Zymase, (B) Maltase, (C) Amylase", "(A) Amylase, (B) Maltase, (C) Zymase", "(A) Maltase, (B) Amylase, (C) Zymase"],
    "correct": 2,
    "explanation": "SOLUTION: Swelling of dough during bread making (leavening) is caused by three enzymes amylase, maltase and zymase.\nCorrect because Amylase breaks down starch to maltose, Maltase breaks down maltose to glucose, and Zymase ferments glucose into ethanol and CO2. The tempting option starting with 'Maltase' is wrong because maltase cannot act on complex starch molecules."
  },
  {
    "id": 313,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Match",
    "hots": true,
    "q": "Match the columns correctly.<br><b>Column-I</b><br>(a) Toddy<br>(b) Roquefort cheese<br>(c) Baker's yeast<br>(d) Curd<br><br><b>Column-II</b><br>(i) Caryota urens<br>(ii) Lactobacillus acidophilus<br>(iii) Penicillium roqueforti<br>(iv) Saccharomyces",
    "options": ["(a)->(i), (b)->(iii), (c)->(ii), (d)->(iv)", "(a)->(i), (b)->(iii), (c)->(iv), (d)->(ii)", "(a)->(ii), (b)->(i), (c)->(iii), (d)->(iv)", "(a)->(ii), (b)->(iv), (c)->(i), (d)->(iii)"],
    "correct": 1,
    "explanation": "SOLUTION: Correct match is - Toddy - Caryota urens, Roquefort cheese - Penicillium roqueforti, Baker's yeast - Saccharomyces, Curd - Lactobacillus acidophilus.\nCorrect because Toddy comes from the Caryota palm, Roquefort uses Penicillium fungi, Baker's yeast is Saccharomyces cerevisiae, and curd is formed by LAB. The tempting option switching yeast and curd bacteria is fundamentally incorrect regarding their distinct fermentative roles."
  },
  {
    "id": 314,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "The substrate used for beer is",
    "options": ["Barley malt", "Fermented rice", "Cashew-apple", "Potato"],
    "correct": 0,
    "explanation": "SOLUTION: For beer production substrate used is barley malt.\nCorrect because germinated and dried barley grains (malt) provide the essential sugars required by yeast to brew beer. The tempting option 'Cashew-apple' is wrong because it is the substrate specifically fermented to make the Goan beverage Feni, not beer."
  },
  {
    "id": 315,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Statement",
    "hots": true,
    "q": "A: Tertiary treatment of waste water is done to make this fit for domestic use.<br>B: Tertiary treatment removes DDT, pesticides, pathogens from the waste water.",
    "options": ["Both A and B are incorrect", "Both A and B are correct", "Only A is correct", "Only B is correct"],
    "correct": 1,
    "explanation": "SOLUTION: Both statements are correct.\nCorrect because tertiary treatment specifically applies advanced physical and chemical techniques to remove stubborn dissolved compounds, fine particles, and harmful pathogens, rendering the water safe enough for reuse. The tempting option 'Only B is correct' is wrong because A is also true; the ultimate goal of removing those hazards is precisely to make it fit for consumption/domestic use."
  },
  {
    "id": 316,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Except",
    "hots": true,
    "q": "Select the odd one w.r.t. biofertilizers.",
    "options": ["Bacteria", "Fungi", "Cyanobacteria", "Viruses"],
    "correct": 3,
    "explanation": "SOLUTION: Viruses are obligate parasite cannot be used as biofertilizers.\nCorrect because viruses require a living host to replicate and do not possess the metabolic machinery to fix nitrogen or mobilize soil nutrients. The tempting option 'Fungi' is wrong to select because fungi (like Glomus) are actively used as biofertilizers in mycorrhizal associations."
  },
  {
    "id": 317,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Statement",
    "hots": true,
    "q": "Read the following statements A and B and choose the correct option.<br><b>A:</b> Curd is more nutritious than milk.<br><b>B:</b> LAB present in curd checks growth of disease causing microbes.",
    "options": ["Both the statements A and B are incorrect", "Only statement A is correct", "Only statements B is correct", "Both the statements A and B are correct"],
    "correct": 3,
    "explanation": "SOLUTION: Both the statements are correct. Curd is more nutritious than milk because it contains a number of vitamins, especially B12.\nCorrect because Lactic Acid Bacteria (LAB) convert milk to curd, enhancing nutrient profiles and producing acids that inhibit pathogens in the stomach. The tempting option 'Only statement A is correct' is wrong because statement B is a vital, proven physiological benefit of LAB."
  },
  {
    "id": 318,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "The free-living fungus Trichoderma can be used for",
    "options": ["Biological control of plant diseases", "Killing insects", "Controlling butterfly caterpillars", "Producing antibiotics"],
    "correct": 0,
    "explanation": "SOLUTION: Trichoderma is a biocontrol agent being developed for use in treatment of plant disease.\nCorrect because Trichoderma species are highly effective, free-living fungi present in root ecosystems that suppress soil-borne plant pathogens. The tempting option 'Controlling butterfly caterpillars' is wrong because that is the specific niche of Bacillus thuringiensis (Bt), not Trichoderma."
  },
  {
    "id": 319,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which of the following is incorrectly matched?",
    "options": ["VAM - Phosphate absorption", "Tertiary sewage treatment - Physico-chemical process", "Ozone gas - Primary treatment", "Rotenone - Natural insecticide"],
    "correct": 2,
    "explanation": "SOLUTION: Primary treatment is related to physical treatment of sewage. There is no involvement of ozone gas.\nCorrect because ozone gas is utilized as a chemical disinfectant during advanced tertiary treatment, not physical primary treatment. The tempting option 'Rotenone - Natural insecticide' is wrong to select because it is a completely true match (derived from plant roots)."
  },
  {
    "id": 320,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Major component of biogas is",
    "options": ["H2", "H2S", "CO2", "CH4"],
    "correct": 3,
    "explanation": "SOLUTION: Major component of biogas is methane (50-70%).\nCorrect because methane ($CH_4$) constitutes the largest percentage of biogas produced by methanogens. The tempting option 'CO2' is wrong because carbon dioxide is the second most abundant component (30-40%), not the primary component."
  },
  {
    "id": 321,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Diagram",
    "hots": true,
    "q": "Observe the given diagram of a biogas plant and name the labelled parts <b>A, B and C</b>.",
    "options": ["A-Aerobic digester, B-Gas, C-Dung water", "A-Anaerobic digester, B-Gas holder, C-Dung water", "A-Gobar gas plant, B-Anaerobic digester, C-Dung water", "A-Anaerobic digester, B-Gas, C-Aerobic digester"],
    "correct": 1,
    "explanation": "SOLUTION: A. Anaerobic digester, B. Gas holder, C. Dung water.\nCorrect because 'A' represents the underground concrete tank where anaerobic digestion occurs, 'B' is the floating cover that moves up as gas builds up, and 'C' is the entry inlet charge chamber for dung slurry. The tempting options mentioning 'Aerobic digester' are completely wrong since biogas production is strictly an obligate anaerobic process."
  },
  {
    "id": 322,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following material takes the longest time for biodegradation?",
    "options": ["Cotton", "Paper", "Bone", "Jute"],
    "correct": 2,
    "explanation": "SOLUTION: Bone is degraded very slowly.\nCorrect because bones contain highly stable mineral matrices and dense collagen networks resistant to rapid microbial enzyme breakdown. The tempting option 'Jute' is wrong because, as a natural plant fiber composed of cellulose, it degrades far quicker than calcified animal bones."
  },
  {
    "id": 323,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which of the following statements is not concerned with antibiotics?",
    "options": ["They are 'prolife' in context of human beings", "Have ability to kill or retard the growth of microbes", "Work by acting on different metabolic pathways", "First antibiotic was obtained from a member of Actinomycetes"],
    "correct": 3,
    "explanation": "SOLUTION: The first antibiotic discovered by Alexander Fleming was Penicillin. It is produced by fungus Penicillium notatum a member of Ascomycetes.\nCorrect because Penicillium notatum is an Ascomycete fungus, not a member of the bacterial group Actinomycetes. The tempting option 'They are prolife in context of human beings' is wrong to select because it is a true concept—antibiotics mean 'against life' for pathogens but are 'pro-life' for humans."
  },
  {
    "id": 324,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Choose the correct sequence of steps and micro-organisms involved in biogas production.",
    "options": ["Fermentative microbes -> decomposers -> methanogens", "Decomposers -> methanogens -> putrefying microbes", "Putrefying microbes -> saprophytic microbes -> methanogens", "Decomposers -> fermentative microbes -> methanogens"],
    "correct": 3,
    "explanation": "SOLUTION: Complex compound -> (Decomposers) -> Monomers -> (Fermentive microbes) -> Organic acid -> (Methanogens) -> Methane, H2, N2.\nCorrect because biopolymers are first broken down by decomposers, then converted to organic acids by fermentative microbes, and finally converted to methane by methanogens. The tempting option 'Fermentative microbes -> decomposers' is wrong because fermentation cannot occur until complex polymers are solubilized by initial decomposers."
  },
  {
    "id": 325,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "In the STPs, biological process of microbial degradation of organic matter involves",
    "options": ["Utilisation of activated sludge as inoculant produced in the physical process", "Only anaerobic breakdown of organic matter", "Masses of unicellular fungi entangled in filamentous bacterial forms represent flocs", "Reduction in dissolved oxygen after the microbial activity"],
    "correct": 0,
    "explanation": "SOLUTION: Biological treatment is both aerobic and anaerobic. Masses of unicellular bacterial entangled in filamentous fungi forms represent flocs. During biological treatment of sewage, BOD is greatly reduced. Utilisation of activated sludge as inoculant produced in the biological phase is standard.\nCorrect because a fraction of sedimented biological activated sludge is recycled back into the aeration tank as an inoculum. The tempting option 'Reduction in dissolved oxygen after...' is tricky but wrong; dissolved oxygen goes up after treatment is complete because the biological oxygen demand (BOD) has dropped sharply."
  },
  {
    "id": 326,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Baculoviruses does not show",
    "options": ["Host specificity", "Narrow spectrum applications", "Effects on non-target pathogens", "Utility in IPM programme"],
    "correct": 2,
    "explanation": "SOLUTION: Species specific biocontrol agents do not effect non-target pathogens.\nCorrect because Baculoviruses are completely safe for non-target organisms, insects, and plants. The tempting option 'Narrow spectrum applications' is wrong to select because baculoviruses *do* display narrow-spectrum insecticidal action."
  },
  {
    "id": 327,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Enzyme which has the fibrinolytic effect i.e., preventing blood clots from growing is",
    "options": ["Protease", "Amylase", "Lipase", "Streptokinase"],
    "correct": 3,
    "explanation": "SOLUTION: Streptokinase - dissolves blood clots.\nCorrect because streptokinase acts as a potent clot buster for patients who have suffered myocardial infarction. The tempting option 'Protease' is wrong because proteases clear protein stains in laundry detergents or clarify juices rather than functioning as specialized therapeutic clot dissolving factors."
  },
  {
    "id": 328,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Statins are produced by a ________ and have been commercialised as ________.",
    "options": ["Bacteria, blood-cholesterol lowering agent", "Trichoderma, immunosuppressive agent", "Yeast, blood-cholesterol lowering agent", "Bacteria, clot buster"],
    "correct": 2,
    "explanation": "SOLUTION: Statins are produced by the yeast Monascus purpureus. These bioactive molecules are commercialised as blood-cholesterol lowering agents.\nCorrect because Monascus purpureus is classified taxonomic-wise as a yeast (fungus). The tempting option 'Bacteria, blood-cholesterol lowering agent' is wrong because statins are fungal by origin, not bacterial."
  },
  {
    "id": 329,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "The fermentative activity of fungus Trichoderma polysporum yields which of the following substance?",
    "options": ["Statin", "Cyclosporin - A", "Gluconic acid", "Soya sauce"],
    "correct": 1,
    "explanation": "SOLUTION: Cyclosporin A is used as an immunosuppressive agent in organ-transplant patients, is produced by fungus, Trichoderma polysporum.\nCorrect because Cyclosporin-A is the unique metabolite synthesized by this fungal species. The tempting option 'Statin' is wrong because statins are synthesized by Monascus purpureus."
  },
  {
    "id": 330,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Large holed Swiss cheese is ripened with the help of CO2 producing bacterium called",
    "options": ["Saccharomyces cerevisiae", "Leuconostoc cremoris", "Streptococcus cremoris", "Propionibacterium sharmanii"],
    "correct": 3,
    "explanation": "SOLUTION: Large holed swiss cheese is ripened with the help of bacterium Propionibacterium sharmanii.\nCorrect because Propionibacterium shermanii releases massive volumes of $CO_2$ gas through its metabolic activity, leaving behind holes. The tempting option 'Saccharomyces cerevisiae' is wrong because it is a yeast used in bread making, not cheese ripening."
  },
  {
    "id": 331,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Yoghurt is produced by curdling of milk with the help of",
    "options": ["Streptococcus thermophilus and Lactobacillus bulgaricus", "Streptococcus lactis and Streptococcus cremoris", "Lactobacillus acidophilus and Fusarium oxysporum", "Spirulina and Saccharomyces cerevisiae"],
    "correct": 0,
    "explanation": "SOLUTION: Lactobacillus bulgaricus and Streptococcus thermophilus are involved in the preparation of yoghurt.\nCorrect because this unique synergistic combination of starter cultures transforms milk into authentic yoghurt. The tempting option 'Lactobacillus acidophilus...' is wrong because L. acidophilus on its own produces standard household curd, not specialized yoghurt."
  },
  {
    "id": 332,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Roquefort cheese is ripened by a member of",
    "options": ["Basidiomycetes", "Deuteromycetes", "Ascomycetes", "Phycomycetes"],
    "correct": 2,
    "explanation": "SOLUTION: Roquefort cheese is ripened by fungus Penicillium roqueforti. It is a member of Ascomycetes.\nCorrect because the genus Penicillium belongs inside the fungal class Ascomycetes. The tempting option 'Deuteromycetes' is historical but wrong under modern canonical classifications where Penicillium forms are placed cleanly into Ascomycota."
  },
  {
    "id": 333,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Find odd one out w.r.t. bioinsecticides.",
    "options": ["Bacillus thuringiensis", "Trichoderma", "Species specific nucleopolyhedrovirus", "Azadirachtin from neem"],
    "correct": 1,
    "explanation": "SOLUTION: Rotenone is obtained from the roots of Derris elliptica. Trichoderma is used as a bio-fungicide/pathogen controller, not an insecticide.\nCorrect because Trichoderma is primarily utilized to counter root fungal pathogens, not insect pests. The tempting option 'Species specific nucleopolyhedrovirus' is wrong to select because it represents an authentic biological tool used against destructive insects and arthropods."
  },
  {
    "id": 334,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Match",
    "hots": true,
    "q": "Match column I with column II and choose the correct option.<br><b>Column I:</b><br>a. Statins<br>b. Swiss cheese<br>c. Cyclosporin A<br>d. Citric acid<br><br><b>Column II:</b><br>(i) Propionibacterium<br>(ii) Aspergillus<br>(iii) Monascus<br>(iv) Trichoderma",
    "options": ["a(ii), b(i), c(iii), d(iv)", "a(iv), b(iii), c(i), d(ii)", "a(iii), b(i), c(ii), d(iv)", "a(iii), b(i), c(iv), d(ii)"],
    "correct": 3,
    "explanation": "SOLUTION: Swiss cheese has characteristic larger holes and is ripened with Propionibacterium shermanii. Cyclosporin A is produced by Trichoderma polysporum. Statins map to Monascus, and Citric acid maps to Aspergillus.\nCorrect because configuration 'a(iii), b(i), c(iv), d(ii)' aligns all biological sources flawlessly. The tempting option switching Cyclosporin and Statin lines is structurally incorrect."
  },
  {
    "id": 335,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Biological activities are carried out in which of the following stages in sewage treatment plant?",
    "options": ["Primary treatment", "Secondary treatment", "Tertiary treatment", "Chemical treatment"],
    "correct": 1,
    "explanation": "SOLUTION: Oxygen is consumed by microbes for the oxidation of organic compounds. This process occurs during secondary treatment.\nCorrect because secondary treatment is also designated explicitly as biological treatment due to its intense deployment of heterotrophic microbes. The tempting option 'Primary treatment' is wrong since it focuses entirely on the physical sorting of debris via sedimentation and sequential filtration."
  },
  {
    "id": 336,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Baculoviruses are pathogens that attack",
    "options": ["Birds and mammals", "Fishes and reptiles", "Insects and other arthropods", "Pathogenic fungi"],
    "correct": 2,
    "explanation": "SOLUTION: Baculoviruses are pathogens that attack insects and other arthropods.\nCorrect because their biological host range is strictly isolated to specific groups of target invertebrate arthropods. The tempting option 'Pathogenic fungi' is wrong because they do not target fungal species."
  },
  {
    "id": 337,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following is used in the preparation of curd?",
    "options": ["Propionibacterium sharmanii", "Lactobacillus acidophilus", "Penicillium roqueforti", "Penicillium camemberti"],
    "correct": 1,
    "explanation": "SOLUTION: Lactobacillus acidophilus grows in milk and convert it into curd.\nCorrect because L. acidophilus produces acids that coagulate milk proteins into fresh curd. The tempting option 'Propionibacterium sharmanii' is wrong because it is used for Swiss cheese, not standard curd."
  },
  {
    "id": 338,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following is used in detergents to remove proteinaceous spots?",
    "options": ["Citric acid", "Gluconic acid", "Proteases", "Amylases"],
    "correct": 2,
    "explanation": "SOLUTION: Proteases act upon protein molecules and break them into shorter chains that are removed easily.\nCorrect because proteases digest blood or food protein spots embedded inside soiled textiles. The tempting option 'Amylases' is wrong because amylases break down starches, not protein stains."
  },
  {
    "id": 339,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Which of following statements is correct?",
    "options": ["Alcoholic fermentation by yeast and conversion of alcohol to acetic acid both are aerobic processes", "Alcoholic fermentation is aerobic and conversion of alcohol to acetic acid is anaerobic one", "Alcoholic fermentation by yeast and conversion of acetic acid to methane by methanogens both are anaerobic processes", "Alcoholic fermentation by yeast and conversion of acetic acid to methane both are aerobic processes"],
    "correct": 2,
    "explanation": "SOLUTION: Alcoholic fermentation by yeast and conversion of acetic acid to methane by methanogens are both anaerobic processes. Conversion of alcohol to acetic acid is an aerobic process.\nCorrect because both yeast fermentation and methanogenesis run completely in the absence of oxygen. The tempting option stating that 'conversion of alcohol to acetic acid is anaerobic' is wrong because Acetobacter requires oxygen to convert ethanol to acetic acid."
  },
  {
    "id": 340,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following is correct for mycorrhiza?",
    "options": ["Absorbs nitrogen and water only", "Hel Helps in nitrogen fixation and hence, regarded as fertilizer", "Absorb and store N, P, K and Ca", "Restricted to gymnospermous plants only"],
    "correct": 2,
    "explanation": "SOLUTION: Mycorrhiza absorb and store nitrogen, phosphorus, potassium and calcium. Along with gymnosperm, mycorrhizal association is also seen in other plants such as orchids and coffee.\nCorrect because the fungal mycelium increases the surface area for absorbing a broad spectrum of minerals. The tempting option 'Restricted to gymnospermous plants only' is wrong because mycorrhizae occur abundantly across angiosperms too."
  },
  {
    "id": 341,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "The bioactive molecule produced by the yeast Monascus purpureus have been commercialised as",
    "options": ["Immunosuppressive agent", "Blood-cholesterol lowering agent", "Clot buster", "Agents to increase inmunity"],
    "correct": 1,
    "explanation": "SOLUTION: Statins are produced by the yeast- Monascus purpureus. These bioactive molecules are commercialised as blood-cholesterol lowering agents.\nCorrect because statins block cholesterol production in the liver. The tempting option 'Immunosuppressive agent' is wrong because Cyclosporin-A handles immunosuppression, not statins."
  },
  {
    "id": 342,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Who was/were awarded Nobel prize in 1945 for the discovery of penicillin and establishing its potential effectiveness?",
    "options": ["Alexander Fleming", "Ernest chain and Howard Florey", "Fleming, Chain and Florey", "Howard Florey"],
    "correct": 2,
    "explanation": "SOLUTION: Fleming, Chain and Florey were awarded the Nobel prize in 1945 for the discovery of penicillin.\nCorrect because all three shared the prize for uncovering and clinically developing the first true antibiotic. The tempting option 'Alexander Fleming' is wrong because, although he discovered it, he shared the award with Chain and Florey for its development."
  },
  {
    "id": 343,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Nutritional quality of curd is better than milk due to presence of excess amount of",
    "options": ["Vitamin C", "Vitamin B6", "Vitamin B12", "Calciurn"],
    "correct": 2,
    "explanation": "SOLUTION: Curd is more nutritious than milk as it contains a number of vitamins especially B12.\nCorrect because lactic acid bacteria synthesize substantial amounts of cyanocobalamin (Vitamin B12) during fermentation. The tempting option 'Calcium' is wrong because while curd contains calcium, its level does not drastically increase over milk like Vitamin B12 does."
  },
  {
    "id": 344,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "The technology of biogas production in India was developed due to the efforts of",
    "options": ["Imported from Japan", "Imported from Denmark", "Imported from USA", "Developed in India due to efforts of IARI and KVIC"],
    "correct": 3,
    "explanation": "SOLUTION: IARI (Indian Agriculture Research Institute) and KVIC (Khadi and Village Industries Commission) developed the technology of biogas production.\nCorrect because these two national bodies spearheaded indigenous research on rural anaerobic digesters. The tempting options suggesting it was imported are historically incorrect."
  },
  {
    "id": 345,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Most efficient nitrogen fixer in rice field is",
    "options": ["Aulosira", "Cylindrospermum", "Nostoc", "Microcystis"],
    "correct": 0,
    "explanation": "SOLUTION: Aulosira is most active, non-symbiotic nitrogen fixer in rice field.\nCorrect because Aulosira is the dominant, highly productive free-living cyanobacterium in flooded rice paddies. The tempting option 'Nostoc' is wrong because while Nostoc fixes nitrogen, Aulosira is quantitatively more efficient in rice fields."
  },
  {
    "id": 346,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Except",
    "hots": true,
    "q": "The enzyrne which is not involved in leavening process, is",
    "options": ["Zymase", "Rennin", "Amylase", "Maltase"],
    "correct": 1,
    "explanation": "SOLUTION: Swelling of dough during bread making is known as leavening. It is caused due to the activities of enzymes amylase, maltase and zymase secreted by yeast.\nCorrect because Rennin is a milk-coagulating enzyme used in cheese production, not bread making. The tempting option 'Zymase' is wrong to select because zymase is critical for converting glucose into ethanol and CO2 to fluff the dough."
  },
  {
    "id": 347,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "To make soft and porous bread, a small quantity of yeast powder is added to wheat flour and the same is kneaded. What is the correct event for it?",
    "options": ["Amylase converts starch into maltose sugar", "It is due to fermentation of glucose into pyruvate", "It is due to production and accumulation of ethyl alcohol", "It is due to evaporation of ethyl alcohol and CO2 gas"],
    "correct": 3,
    "explanation": "SOLUTION: CO2 gas along with ethyl alcohol evaporate during baking make the bread porous and soft.\nCorrect because when the dough is baked, trapped pockets of carbon dioxide gas expand and escape along with vaporized alcohol, creating pores. The tempting option 'production and accumulation of ethyl alcohol' is wrong because simple accumulation doesn't form pores; the actual baking and evaporation step expands the dough."
  },
  {
    "id": 348,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "In STPs, primary sludge is produced when sewage is",
    "options": ["Passed through filtration and sedimentation", "Anaerobically digested", "Treated with aerobic heterotrophic microbes in the aeration tank", "Chlorinated and treated with UV rays"],
    "correct": 0,
    "explanation": "SOLUTION: Primary sludge is produced as the result of primary treatment of sewage water.\nCorrect because primary sludge consists of all the heavy solid matter that settles out during physical sedimentation. The tempting option 'Treated with aerobic heterotrophic microbes...' is wrong because that step yields activated sludge during secondary treatment, not primary sludge."
  },
  {
    "id": 349,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Swelling of dough during bread making is due to the activities of enzymes",
    "options": ["Zymase, protease and amylase", "Amylase, pectinase and maltase", "Protease, pectinase and zymase", "Zymase, amylase and maltase"],
    "correct": 3,
    "explanation": "SOLUTION: Swelling of dough during bread making is due to the activities of enzymes amylase, maltase and zymase.\nCorrect because these three enzymes work sequentially to break down wheat starch into fermentable sugars and release $CO_2$. The tempting options containing 'pectinase' are wrong because pectinase breaks down fruit pectins, not flour starches."
  },
  {
    "id": 350,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Microbial degradation of organic matter in STP takes place during",
    "options": ["Primary treatment", "Secondary treatment", "Tertiary treatment", "Reverse osmosis"],
    "correct": 1,
    "explanation": "SOLUTION: During secondary treatment, heterotrophic micro-organisms are used for degradation of organic waste.\nCorrect because biological secondary treatment relies on microbes to consume and break down dissolved organic matter. The tempting option 'Primary treatment' is wrong because primary treatment is purely a physical sorting phase involving filtration and settling."
  },
  {
    "id": 351,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Biogas production:",
    "options": ["Involves utilisation of obligate anaerobes only", "Is methane rich fuel having CO2 and H2S in traces", "Generation involves use of fermentive microbes during solubilisation", "Has calorific value of 4429 kcal/m3"],
    "correct": 3,
    "explanation": "SOLUTION: Biogas has CO2 30-40%. Its standardized calorific energy profile tracks to 4429 kcal/m3.\nCorrect because 4429 kcal/m3 represents the exact thermodynamic value of the gas mix. The tempting option 'having CO2 and H2S in traces' is wrong because $CO_2$ is present in large amounts (30-40%), not traces."
  },
  {
    "id": 352,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Eleven membered cyclic oligopeptides obtained from fungus Trichoderma polysporum and used as immunosuppressive agent is",
    "options": ["Statin", "Streptokinase", "Cyclosporin A", "Proteases"],
    "correct": 2,
    "explanation": "SOLUTION: Trichoderma polysporum produces cyclosporin A which is an immunosuppressive agent.\nCorrect because Cyclosporin-A is chemically classified as a cyclic oligopeptide containing 11 amino acids. The tempting option 'Statin' is wrong because statins are structural inhibitors of cholesterol enzymes, not cyclic peptides."
  },
  {
    "id": 353,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Find the incorrect statement(s).<br><b>a.</b> Flocs are masses of anaerobic bacteria associated with fungal filaments.<br><b>b.</b> BOD gets reduced significantly when the secondary treatment is done using aerobic microbes.<br><b>c.</b> Activated sludge can be sedimented only after anaerobic digestion of sewage.<br><b>d.</b> Mixture of gases is released during aerobic digestion of sewage.",
    "options": ["a, b, c & d", "Only c", "All, except b", "a, b & d"],
    "correct": 2,
    "explanation": "SOLUTION: Biogas is released during anaerobic digestion of sewage. Flocs are aerobic bacteria, activated sludge settles before anaerobic digestion, and biogas comes from anaerobic tanks. Only statement 'b' is correct.\nCorrect because statements a, c, and d contain fundamental errors regarding structural oxygen requirements. The tempting option 'a, b & d' is wrong because 'b' is a completely true statement."
  },
  {
    "id": 354,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "The effective biocontrol agent of several plant pathogens is",
    "options": ["Bacillus thuringiensis", "Ladybird beetle", "Trichoderma", "Baculovirus"],
    "correct": 2,
    "explanation": "SOLUTION: Trichoderma species are very common in the root ecosystems and are effective against several plant pathogens.\nCorrect because Trichoderma directly suppresses fungi and plant diseases in root zones. The tempting option 'Bacillus thuringiensis' is wrong because Bt specifically targets insect larvae like caterpillars, not broad plant fungal pathogens."
  },
  {
    "id": 355,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Match",
    "hots": true,
    "q": "Select the correct match.<br><b>Column-I:</b><br>a. Gluconic acid<br>b. Cyclosporin A<br>c. Statins<br>d. Streptomycin<br><br><b>Column-II:</b><br>(i) Streptomyces griseus<br>(ii) Monascus purpureus<br>(iii) Trichoderma polysporum<br>(iv) Penicillium species",
    "options": ["a(iv), b(iii), c(ii), d(i)", "a(i), b(iii), c(ii), d(iv)", "a(iii), b(iv), c(ii), d(i)", "a(ii), b(i), c(iv), d(iii)"],
    "correct": 0,
    "explanation": "SOLUTION: Gluconic acid is obtained from Penicillium species. Streptomycin is an antibiotic obtained from Streptomyces griseus. Cyclosporin comes from Trichoderma and Statins from Monascus.\nCorrect because option 'a(iv), b(iii), c(ii), d(i)' assigns all industrial organic products cleanly to their respective source microbes. Other configurations break the established chemical pathways."
  },
  {
    "id": 356,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Select the incorrect match.",
    "options": ["Monascus - Statins", "Trichoderma - Thurioside", "Aspergillus - Citric acid", "Propionibacterium - Swiss cheese"],
    "correct": 1,
    "explanation": "SOLUTION: Trichoderma is used to produce cyclosporin A, an immunosuppressive agent.\nCorrect because Thurioside is a metabolic toxin produced by Bacillus *thuringiensis*, not the fungus Trichoderma. The tempting option 'Monascus - Statins' is wrong to select because it is a true match."
  },
  {
    "id": 357,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "The anaerobic bacteria that can fix atmospheric nitrogen while free living in the soil are",
    "options": ["Frankia","Anabaena azollae","Rhizobium","Clostridium"],
    "correct": 3,
    "explanation": "SOLUTION: Clostridium is anaerobic free living N2 fixing bacterium .\nCorrect because Clostridium operates efficiently in oxygen-depleted soil zones to fix nitrogen independently. The tempting option 'Rhizobium' is wrong because it is a symbiotic bacterium that requires a host root nodule to fix nitrogen, not a free-living anaerobic one."
  },
  {
    "id": 358,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "During sewage treatment, a small part of the activated sludge is pumped back into the aeration tank to",
    "options": ["Serve as inoculum","Serve as nutrient medium","Produce biogas","Produce CO"],
    "correct": 0,
    "explanation": "SOLUTION: During secondary treatment of sewage, a small amount of the activated sludge is pumped back into the aeration tank to serve as inoculum .\nCorrect because this recycled sludge contains millions of active, hungry heterotrophic microbes that kickstart organic decomposition in the incoming wastewater. The tempting option 'Produce biogas' is wrong because biogas is generated when the *bulk* of the sludge is sent to the anaerobic digester, not the aeration tank."
  },
  {
    "id": 359,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Except",
    "hots": true,
    "q": "Which of the following organisms is not used in organic farming?",
    "options": ["E. coli","Anabaena","Oscillatoria","Nostoc"],
    "correct": 0,
    "explanation": "SOLUTION: E. coli cannot increase the fertility of soil .\nCorrect because E. coli is a gut bacterium without any inherent nitrogen-fixing or phosphate-solubilizing traits necessary for farming. The tempting option 'Oscillatoria' is wrong to select because it is a cyanobacterium that contributes to soil enrichment."
  },
  {
    "id": 360,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Bioactive molecule used as immunosuppressant in organ transplant patients is",
    "options": ["Cyclosporin-A","Statins","Streptokinase","TPA"],
    "correct": 0,
    "explanation": "SOLUTION: Cyclosporin A an immunosuppressive agent, is obtained from Trichoderma polysporum .\nCorrect because Cyclosporin-A selectively suppresses T-cell activity to prevent graft rejection. The tempting option 'Statins' is wrong because statins act on blood-cholesterol synthesis enzymes rather than immune responses."
  },
  {
    "id": 361,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Effective biocontrol agent of fungal origin against several plant pathogens is",
    "options": ["Bacillus thuringiensis","Trichoderma","Baculovirus","Streptomyces"],
    "correct": 1,
    "explanation": "SOLUTION: Different Trichoderma species can be used to control fungi, insects and nematodes .\nCorrect because Trichoderma is an authenticated free-living root fungus. The tempting option 'Bacillus thuringiensis' is wrong because Bt is a *bacterium*, not a fungus."
  },
  {
    "id": 362,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "'Flocs', developed during secondary treatment of sewage refers to",
    "options": ["Masses of obligate anaerobic bacteria associated with fungal filaments","Masses of bacteria developing in anaerobic sludge digesters","Mesh formed by groups of methanogenic bacteria","Mesh of fungal filaments when associated with masses of aerobic bacteria"],
    "correct": 3,
    "explanation": "SOLUTION: Flocks developed during secondary treatment of sewage are masses of aerobic bacterial associated with fungal filaments .\nCorrect because flocs require continuous aeration to form a structural mesh that actively consumes dissolved waste. The tempting option 'Masses of obligate anaerobic bacteria...' is wrong because flocs are inherently aerobic and function inside the aeration tank."
  },
  {
    "id": 363,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following organism is common in root ecosystems and acts as an effective biocontrol agent of several plant pathogens?",
    "options": ["Nucleopolyhedrovirus","Ladybird beetle","Cactoblastis","Trichoderma"],
    "correct": 3,
    "explanation": "SOLUTION: Trichoderma species are very common in the root ecosystem and are effective against several plant pathogens .\nCorrect because Trichoderma protects plants right at the root-soil interface. The tempting option 'Ladybird beetle' is wrong because ladybirds live above ground on foliage hunting aphids, not in root ecosystems."
  },
  {
    "id": 364,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Except",
    "hots": true,
    "q": "Read the following four statements (a-d) and find out the incorrect ones w.r.t. lactic acid bacteria.<br><b>a.</b> In our stomach, they play beneficial role by checking disease causing microbes.<br><b>b.</b> LAB produce acids that coagulate and completely digest the milk proteins.<br><b>c.</b> Improve the nutritional quality by increasing the amount of vitamins especially riboflavin.<br><b>d.</b> Require suitable temperature for their multiplication.",
    "options": ["a & b","a & c","b & c","b & d"],
    "correct": 2,
    "explanation": "SOLUTION: During curd formation, partial digestion of milk occurs and amount of cobalamin i.e. vitamin B12 increases .\nCorrect because statement 'b' is false (LAB only *partially* digest milk proteins)  and statement 'c' is false (it increases Vitamin B12/cobalamin, not riboflavin). The tempting option 'a & b' is wrong because statement 'a' is completely correct."
  },
  {
    "id": 365,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Different varieties of cheese are known by their characteristic texture, flavour and taste. These specificity are due to the",
    "options": ["Flavouring agent used","Microbes used","Inherent quality","Minerals present in milk"],
    "correct": 1,
    "explanation": "SOLUTION: Different types of flavour, texture and taste in cheese are due to type of microbes used .\nCorrect because the precise strain of metabolic bacteria or fungi shapes the fermentation products. The tempting option 'Flavouring agent used' is wrong because standard traditional cheeses derive their distinctive characteristics purely from biological maturation, not artificial flavor additives."
  },
  {
    "id": 366,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Find the odd one out with respect to distillation of fermented broth.",
    "options": ["Rum","Wine","Brandy","Whisky"],
    "correct": 1,
    "explanation": "SOLUTION: Wine is obtained without distillation of fermented broth .\nCorrect because wine and beer are low-alcohol beverages consumed straight from fermentation. The tempting option 'Brandy' is wrong to select because brandy is a distilled spirit with elevated alcohol content."
  },
  {
    "id": 367,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Alexander Fleming accidently discovered antibiotic penicillin from a mould, but he was working on",
    "options": ["Streptococci","Streptobacilli","Staphylobacilli","Staphylococci"],
    "correct": 3,
    "explanation": "SOLUTION: Alexander Fleming discovered penicillin while working on Staphylococci .\nCorrect because Fleming observed the clear inhibition zones on a culture plate of Staphylococci bacteria contaminated by the mould. The tempting option 'Streptococci' is wrong because, though it sounds similar, it is a completely separate bacterial genus."
  },
  {
    "id": 368,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Match",
    "hots": true,
    "q": "Which of the following option gives the correct matching of microbe, product and use?",
    "options": ["Saccharomyces - Methanol - Beverage production","Streptococcus - Streptokinase - Blood-cholesterol lowering agent","Monascus - Statins - Clot buster","Trichoderma - Cyclosporin A - Organ transplantation"],
    "correct": 3,
    "explanation": "SOLUTION: Cyclosporine-A obtained from Trichoderma is immunosuppressive used in organ transplant patients .\nCorrect because this exact triplet matches the source microbe, active metabolite, and functional therapy perfectly. The tempting option with Streptococcus is wrong because streptokinase acts as a clot buster, not a blood-cholesterol lowering agent."
  },
  {
    "id": 369,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Consider the statements with blanks:<br>a. All solids that settle during primary treatment forms <b>(i)</b>.<br>b. Secondary treatment of sewage is also known as <b>(iii)</b> treatment.<br>c. A part of activated sludge is pumped back to serve as <b>(iv)</b>.<br>d. Sewage water is treated till <b>(v)</b> is reduced.<br>Identify the correct blanks.",
    "options": ["(i) Primary sludge, (iii) Flocs, (v) DO","(ii) Effluent, (iii) Biological, (iv) Inoculum, (v) BOD","(i) Primary sludge, (iii) Flocs, (iv) Inoculum, (v) DO","(i) Effluent, (ii) Primary sludge, (iii) Flocs, (v) BOD"],
    "correct": 1,
    "explanation": "SOLUTION: (i) Primary sludge, (ii) Effluent, (iii) Biological, (iv) Inoculum, (v) BOD .\nCorrect because the matching maps to option (2) accurately based on standard text fill-ups. The tempting option (3) is wrong because wastewater treatment continues until Biochemical Oxygen Demand (BOD) is *reduced*, not DO."
  },
  {
    "id": 370,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Find out which one of the following statements is not correct with respect to biogas plant?",
    "options": ["It has a floating cover which keeps on rising as gas is produced","It consists of a 10-15 feet deep tank in which bio-wastes are collected and a slurry of dung is fed","Main gases produced are methane, isobutane and propane","Spent slurry may be used as fertiliser"],
    "correct": 2,
    "explanation": "SOLUTION: Main gas produced in biogas production is methane .\nCorrect because the gas mix contains methane ($CH_4$) and carbon dioxide ($CO_2$), along with traces of $H_2$ and $H_2S$, but no alkanes like isobutane or propane. The tempting option describing a 10-15 feet deep tank is wrong to select because it is a correct dimension of a standard anaerobic digester."
  },
  {
    "id": 371,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which one of the following pairs is wrongly matched?",
    "options": ["Ladybird - Aphids","Dragonflies - Mosquitoes","Trichoderma - Insect pests and weeds","Baculoviruses - Insects and other arthropods"],
    "correct": 2,
    "explanation": "SOLUTION: Trichoderma is used against soil-borne pathogens .\nCorrect because Trichoderma is a biocontrol fungus used to control plant fungal pathogens, not macro-insects or weeds. The tempting option 'Baculoviruses...' is wrong to select because it is completely true."
  },
  {
    "id": 372,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Except",
    "hots": true,
    "q": "Which of the following statements is incorrect about bio-fertilisers?",
    "options": ["Bacteria, fungi and cyanobacteria are major sources","These are ecofriendly","Micro-organisms involved can be symbiotic or free living","They cannot be photosynthetic"],
    "correct": 3,
    "explanation": "SOLUTION: Bacteria, fungi and cyanobacteria are used as biofertilisers. They are ecofriendly and can be symbiotic or free living .\nCorrect because cyanobacteria are photosynthetic autotrophs that double as key biofertilizers. The tempting option 'can be symbiotic or free living' is wrong to select because it accurately describes biological tools like Rhizobium vs. Azotobacter."
  },
  {
    "id": 373,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Find the odd one out with respect to mycorrhiza.",
    "options": ["Many members of genus Glomus form mycorrhiza","Fungal partner helps in absorption of soil minerals except phosphorus","Provide protection against root-borne pathogens","Provide tolerance to salinity and drought"],
    "correct": 1,
    "explanation": "SOLUTION: Along with other minerals, fungi in mycorrhiza help in absorption of phosphorus too .\nCorrect because phosphorus is the main mineral absorbed by mycorrhizal fungal networks. The tempting option 'Provide protection against root-borne pathogens' is wrong to select because this is a documented secondary benefit of mycorrhizal roots."
  },
  {
    "id": 374,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Mark the mis-matched pair.",
    "options": ["Aspergillus niger - Citric acid","Nucleopolyhedrovirus - Narrow spectrum weedicide","Blue green algae - Important biofertilizer in paddy fields","Glomus - Mycorrhiza"],
    "correct": 1,
    "explanation": "SOLUTION: Nucleopolyhedroviruses are insecticides .\nCorrect because NPV acts as a narrow-spectrum biological *insecticide*, not a weedicide. The tempting option 'Glomus - Mycorrhiza' is wrong to select because Glomus is a major fungal genus that forms mycorrhizae."
  },
  {
    "id": 375,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Masses of bacteria associated with fungal filaments to form mesh like structures in aeration tank of STPs is called",
    "options": ["Flocs","Primary sludge","Sewage","Biofertiliser"],
    "correct": 0,
    "explanation": "SOLUTION: Flocs are masses of bacteria associated with the fungal filaments to form mesh-like structures .\nCorrect because these mesh-like configurations describe microbial flocs. The tempting option 'Primary sludge' is wrong because sludge is formed via physical sedimentation before any fungal filaments develop."
  },
  {
    "id": 376,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Proteases used in detergents and clearing of juices are obtained from",
    "options": ["Monascus purpureus","Mortierella renispora","Streptococcus","Trichoderma sp."],
    "correct": 1,
    "explanation": "SOLUTION: Proteases that help in clarifying fruit juices are obtained from Mortierella renispora .\nCorrect because Mortierella renispora is an industrial producer of these enzymes. The tempting option 'Monascus purpureus' is wrong because Monascus produces blood-cholesterol lowering statins, not industrial proteases."
  },
  {
    "id": 377,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Except",
    "hots": true,
    "q": "Select the incorrect statement w.r.t. streptokinase enzyme activity.",
    "options": ["Shows fibrinolytic effect","Used as a blood clot buster","Produced by Streptococci","Used as an immunosuppressive agent"],
    "correct": 3,
    "explanation": "SOLUTION: Cyclosporin A is an immunosuppressive agent .\nCorrect because streptokinase breaks down fibrin clots, whereas Cyclosporin-A handles immunosuppression. The tempting option 'Shows fibrinolytic effect' is wrong to select because that is the correct medical term for its clot-dissolving action."
  },
  {
    "id": 378,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "During waste water treatment process in STPs:",
    "options": ["Floating debris is removed by sedimentation","Primary effluent is passed directly in secondary settling tank for treatment","A major part of sedimented flocs or activated sludge is send to anaerobic sludge digester","Secondary treatment is carried out in aeration tank by anaerobic heterotrophic bacteria and fungi"],
    "correct": 2,
    "explanation": "SOLUTION: The major part of activated sludge obtained from settling tank is send to anaerobic sludge digester .\nCorrect because sending the bulk sludge to anaerobic tanks produces biogas. The tempting option (4) is wrong because secondary treatment inside the aeration tank relies on *aerobic* microbes, not anaerobic ones."
  },
  {
    "id": 379,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Baculoviruses are pathogens that:",
    "options": ["Attack insect and arthropods","Placed in genus Nucleopolyhedrovirus","Shows specific insecticidal application","All (1), (2) and (3) are correct"],
    "correct": 3,
    "explanation": "SOLUTION: The majority of baculoviruses are in the genus Nucleopolyhedro virus. These are of narrow spectrum insecticidal application .\nCorrect because all three individual points are key traits of baculoviruses. The tempting standalone options are incomplete."
  },
  {
    "id": 380,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following pair of alcoholic drinks is produced by distillation of the fermented broth?",
    "options": ["Beer and Wine","Wine and Brandy","Beer and Whisky","Brandy and Whisky"],
    "correct": 3,
    "explanation": "SOLUTION: Brandy, whisky and rum are produced by distillation, while wine and beer are produced without distillation .\nCorrect because Brandy and Whisky go through distillation to boost their alcohol purity. The tempting option 'Beer and Wine' is wrong because both are un-distilled beverages."
  },
  {
    "id": 381,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "<b>A</b> produced by the <b>B</b> and modified by genetic engineering is used as 'clot buster' for removing clots from the blood vessels of heart patients. Select the correct option for A and B.",
    "options": ["(A) Cyclosporin A, (B) Streptococcus","(A) Immunosuppressive agent, (B) Trichoderma polysporum","(A) Streptokinase, (B) Streptococcus","(A) Streptokinase, (B) Trichoderma polysporum"],
    "correct": 2,
    "explanation": "SOLUTION: Cyclosporin A is used as immunosuppressive agent in organ transplant patients, and is produced by the fungus Trichoderma polysporum. Streptokinase is clot buster .\nCorrect because Streptokinase is the designated clot buster produced by Streptococcus bacterial cultures. The tempting option combining Streptokinase with Trichoderma is incorrect because Trichoderma produces Cyclosporin-A."
  },
  {
    "id": 382,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following significantly reduces the biochemical oxygen demand of the effluent in STPs?",
    "options": ["Masses of algae associated with fungal filaments","Masses of bacteria associated with algal filaments","Masses of bacteria associated with fungal filaments","Masses of algae associated with viruses"],
    "correct": 2,
    "explanation": "SOLUTION: Flocs are masses of bacteria with fungal filaments .\nCorrect because these biological flocs consume organic matter, lowering the effluent's BOD. The tempting option with algal filaments is wrong because flocs are built from bacteria and *fungi*, not algae."
  },
  {
    "id": 383,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Bacillus thuringiensis:",
    "options": ["Controls aphids and Ladybird beetle","Are available in sachets as syrups","Serves as an important biofertiliser in paddy fields","Releases toxin in the gut of insect larvae and the larvae get killed"],
    "correct": 3,
    "explanation": "SOLUTION: Bacillus thuringiensis controls butterfly caterpillars. It releases toxins in the gut of larvae .\nCorrect because the alkaline pH of the insect gut activates the Bt protoxin, creating pores that kill the larva. The tempting option 'available as syrups' is wrong because Bt is sold as dry spores in sachets, not syrups."
  },
  {
    "id": 384,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following organisms can fix atmospheric nitrogen while free living in the soil?",
    "options": ["Rhizobium","Frankia","Glomus","Azospirillum"],
    "correct": 3,
    "explanation": "SOLUTION: Rhizobium and Frankia are symbiotic N2 fixer .\nCorrect because Azospirillum can fix atmospheric nitrogen freely in the rhizosphere without formatting rigid nodules. The tempting option 'Rhizobium' is wrong because it requires a symbiotic relationship with leguminous root nodules to fix nitrogen."
  },
  {
    "id": 385,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Which of the following statements is incorrect?",
    "options": ["The greater the BOD of waste water, more is its polluting potential","Baculoviruses are pathogens that attack several insects and plants","Trichoderma species are effective biocontrol agents of several plant pathogens","Nicotine is a bioinsecticide"],
    "correct": 1,
    "explanation": "SOLUTION: Baculoviruses attack several insects and arthopods .\nCorrect because Baculoviruses have zero negative impacts on plants. The tempting option regarding BOD is wrong to select because it is a true biological rule."
  },
  {
    "id": 386,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Biogas is a mixture of gases produced from the microbial activity and it consists of all, except",
    "options": ["Methane and CO2","Hydrogen and nitrogen","Sulphur dioxide and carbon monoxide","Hydrogen sulphide and nitrogen"],
    "correct": 2,
    "explanation": "SOLUTION: Biogas contains CH4, CO2, H2, N2 and H2S .\nCorrect because toxic industrial gases like sulfur dioxide ($SO_2$) and carbon monoxide ($CO$) are not produced during anaerobic digestion. The tempting option 'Hydrogen sulphide and nitrogen' is wrong to select because both are found in trace amounts within biogas."
  },
  {
    "id": 387,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Wine and beer are produced",
    "options": ["By distillation only","By fermentation and distillation","By fermentation but without distillation","Without fermentation and distillation"],
    "correct": 2,
    "explanation": "SOLUTION: Wine and beer are produced without the distillation of fermented broth .\nCorrect because they are categorized as un-distilled alcoholic beverages. The tempting option 'By fermentation and distillation' is wrong because that applies to spirits like whiskey or brandy."
  },
  {
    "id": 388,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Which of the following is one of the most significant discoveries of the twentieth century that greatly contributed towards the welfare of human society?",
    "options": ["Biogas","Curd","Antibiotics","Citric acid"],
    "correct": 2,
    "explanation": "SOLUTION: Antibiotics are regarded as one of the most significant discoveries of the twentieth century .\nCorrect because antibiotics revolutionized modern medicine by saving millions from bacterial infections. The tempting option 'Curd' is wrong because curd fermentation dates back millennia, making it an ancient discovery rather than a 20th-century breakthrough."
  },
  {
    "id": 389,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Match",
    "hots": true,
    "q": "Fill in the blanks:<br>A. ________ are the masses of bacteria associated with fungal filaments.<br>B. ________ is used as a 'clot buster'.<br>C. Baculoviruses are excellent candidates for ________ insecticidal application.<br>D. ________ are organisms that enrich the nutrient quality of the soil.",
    "options": ["A-Flocs, B-Streptokinase, C-Narrow spectrum, D-Biofertiliser","A-Flocs, B-Cyclosporin-A, C-Broad spectrum, D-Biofertiliser","A-Primary sludge, B-Streptokinase, C-Narrow spectrum, D-Biofertiliser","A-Flocs, B-Streptokinase, C-Narrow spectrum, D-Biopesticides"],
    "correct": 0,
    "explanation": "SOLUTION: A - Flocs; B - Streptokinase; C- Narrow spectrum; D - Biofertilisers; Streptokinase is a blood clot buster. Baculoviruses are of narrow spectrum insecticidal application .\nCorrect because option (1) accurately fills all four blanks sequentially. The tempting option (4) falls short because 'D' explicitly describes biofertilizers that improve soil nutrients, not biopesticides."
  },
  {
    "id": 390,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "In a STP, microbial flocs are formed in",
    "options": ["Anaerobic sludge digester","Primary treatment","Aeration tank","Physicochemical treatment"],
    "correct": 2,
    "explanation": "SOLUTION: In STPs, microbial flocs are formed in aeration tank of biological treatment .\nCorrect because aerobic conditions inside the aeration tank allow bacteria and fungi to mesh together into flocs. The tempting option 'Anaerobic sludge digester' is wrong because those tanks are kept strictly anaerobic, which breaks down flocs."
  },
  {
    "id": 391,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Use of some microbes as biofertiliser to enhance crop productivity is called",
    "options": ["Organic farming","Marine farming","Micro farming","Compost farming"],
    "correct": 0,
    "explanation": "SOLUTION: Microbes are used in organic farming .\nCorrect because organic farming centers on shifting from synthetic chemicals to biofertilizers and ecological processes. The tempting option 'Compost farming' is wrong because composting is just one practice under the larger umbrella of organic farming."
  },
  {
    "id": 392,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Direct",
    "hots": true,
    "q": "Dough used for making dosa and bread are fermented respectively by",
    "options": ["Bacteria and Fungi","Fungi and Bacteria","Eukaryotic and Prokaryotic organism","Yeast and Moneran"],
    "correct": 0,
    "explanation": "SOLUTION: The fermented preparation of rice and black gram for making dosa is prepared by using a bacterium. Dough for bread making is prepared by yeast .\nCorrect because dosa batter is fermented by lactic acid bacteria, while bread dough is risen using baker's yeast (a fungus). The tempting option 'Fungi and Bacteria' is wrong because it flips the correct sequence."
  },
  {
    "id": 393,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "Direct",
    "hots": true,
    "q": "Three water samples: Drinking water, untreated sewage water, and secondary effluent have BOD values of 2 mg/L, 400 mg/L, and 20 mg/L respectively. Match them to the correct labels <b>A, B, and C</b> if A=20 mg/L, B=2 mg/L, C=400 mg/L.",
    "options": ["A-Secondary effluent, B-Drinking water, C-Untreated sewage","A-Untreated sewage, B-Drinking water, C-Secondary effluent","A-Drinking water, B-Secondary effluent, C-Untreated sewage","A-Untreated sewage, B-Secondary effluent, C-Drinking water"],
    "correct": 0,
    "explanation": "SOLUTION: More polluted water has more BOD .\nCorrect because clean drinking water has the lowest BOD (2 mg/L), untreated sewage has the highest (400 mg/L), and treated secondary effluent sits in the middle (20 mg/L). The tempting option (2) is wrong because it attributes the highest BOD value to secondary effluent instead of untreated sewage."
  },
  {
    "id": 394,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "Except",
    "hots": true,
    "q": "Sewage treatment process includes all of these features/activities, except",
    "options": ["A small part of the activated sludge is pumped back into the aeration tank to serve as inoculum","Activated sludge cannot be used in anaerobic digestion process","Anaerobic bacteria digest bacteria in sludge digesters","Transfer of primary effluent in aeration tanks"],
    "correct": 1,
    "explanation": "SOLUTION: Activated sludge in STPs is used in anaerobic sludge digestion .\nCorrect because the majority of sedimented activated sludge is purposefully pumped into anaerobic digesters to produce biogas. The tempting option 'Transfer of primary effluent...' is wrong to select because it correctly describes moving liquid out of the settling tanks into biological treatment units."
  },
  {
    "id": 395,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "Direct",
    "hots": true,
    "q": "Toddy is made by fermenting sap from",
    "options": ["Coconut","Agave","Palm","Aloe vera"],
    "correct": 2,
    "explanation": "SOLUTION: Toddy is made by fermenting sap from palm (Caryota urens) .\nCorrect because this traditional beverage relies on extracting and fermenting wild palm sap. The tempting option 'Agave' is wrong because Agave sap is fermented to make the traditional Mexican drink pulque or distilled into tequila, not Indian Toddy."
  },
  {
    "id": 396,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Wine and Beer are produced through the process of distillation.<br><b>Reason (R):</b> Nutrient medium utilized for wine is yeast.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 3,
    "explanation": "SOLUTION: Whisky and Brandy are produced through the process of distillation. Yeast is the fermenting organism, not the nutrient medium .\nCorrect because both statements are factually wrong: wine and beer are produced *without* distillation , and yeast acts as the microbial catalyst, while fruit juice serves as the nutrient medium. Any option assuming either statement is true is incorrect."
  },
  {
    "id": 397,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> After 24 hours toddy remains palatable.<br><b>Reason (R):</b> Toddy does not undergo fermentation.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 3,
    "explanation": "SOLUTION: It becomes unpalatable due to fermentation .\nCorrect because both statements are false: Toddy ferments rapidly and turns sour and unpalatable if left past 24 hours , making the claim that it doesn't ferment completely incorrect."
  },
  {
    "id": 398,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> BOD is a measure of the organic matter present in the water.<br><b>Reason (R):</b> Greater the BOD of waste water, less is its polluting potential.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 2,
    "explanation": "SOLUTION: Greater the BOD of waste water, more will be its polluting potential .\nCorrect because Assertion is a true biological fact , but the Reason is completely false because a higher BOD indicates heavily polluted water. Option (4) is incorrect because the assertion statement is scientifically valid."
  },
  {
    "id": 399,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Baculoviruses as biocontrol agents have no negative impact on plants, mammals and target insects.<br><b>Reason (R):</b> These are effective against several plant pathogens.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 3,
    "explanation": "SOLUTION: Baculoviruses have impact only on target insects. It attacks on insects and other arthropods .\nCorrect because both statements are false: Baculoviruses are designed to kill *target* insects, so saying they have no impact on them is false ; furthermore, they target arthropods, not plant pathogens."
  },
  {
    "id": 400,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Lactic acid bacteria (LAB) produces lactic acid that coagulates and digest all the milk proteins.<br><b>Reason (R):</b> These bacteria ensure that they multiply by releasing all the energy contained in the milk.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 3,
    "explanation": "SOLUTION: Lab coagulates and only partially digest the milk proteins to produce curd. During lactic acid fermentation only partial oxidation occurs that releases only less than 7% of energy .\nCorrect because both statements are false: LAB only *partially* digests milk proteins , and anaerobic lactic acid fermentation extracts less than 7% of the total energy available in milk sugar."
  },
  {
    "id": 401,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> The nutritional quality of milk is enhanced when it is converted into curd.<br><b>Reason (R):</b> One such improvement is the increase in the quantity of vitamin B12.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: When milk is coagulated into curd the availability of B12 increases .\nCorrect because curd contains a better nutrient profile than milk precisely because LAB synthesizes additional Vitamin B12 during coagulation. Thus, the reason provides the perfect explanation for the assertion."
  },
  {
    "id": 402,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Microbes are used in the fermentation of fish, soyabean and bamboo shoots to make foods that have larger self life.<br><b>Reason (R):</b> Fermentation using such microbes actually decreases the nutritional quality of these foods.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 2,
    "explanation": "SOLUTION: Fermentation using microbes actually increases the nutritional quality of the food by making the bioavailability of nutrients .\nCorrect because the Assertion is true , but the Reason is false because fermentation improves nutrient bioavailability and quality instead of decreasing it. Option (1) is incorrect because it validates a false reason."
  },
  {
    "id": 403,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> An organ transplant patient is administered regular dose of cyclosporin-A.<br><b>Reason (R):</b> Cyclosporin-A is an immunosuppressant agent.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: Cyclosporin-A is an immunosuppressant obtained from the fungus Trichoderma polysporum that is administered to patients in whom organ transplantation has occurred to avoid graft rejection .\nCorrect because the reason directly explains why transplant patients must take the drug—to calm immune defenses and safeguard the new organ."
  },
  {
    "id": 404,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Microbes have been used in the production of different varieties of cheese.<br><b>Reason (R):</b> Different types of microbes are known to bring characteristic texture, flavour and taste.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: A variety of microbes such as bacteria and fungi are used in ripening of cheese to enhance their texture, flavour and taste .\nCorrect because specific fermentation pathways create distinct cheese profiles, making the reason a valid explanation for the assertion."
  },
  {
    "id": 405,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> A large number of aerobic heterotrophic microbes grow in the aeration tanks during primary treatment of sewage water.<br><b>Reason (R):</b> These aerobic microbes significantly increase the biochemical oxygen demand (BOD) so that they can be discharged directly into rivers.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 3,
    "explanation": "SOLUTION: Both A & R are false. Aerobic heterotrophic microbes are grown in aeration tanks during secondary treatment. These microbes actually significantly reduce the BOD .\nCorrect because both are false: this growth occurs during secondary treatment (not primary) , and their activity reduces the BOD to clean the water, rather than increasing it."
  },
  {
    "id": 406,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> The sediment accumulated in the secondary treatment is called activated sludge.<br><b>Reason (R):</b> It is used as an inoculum during the secondary treatment in STP.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 1,
    "explanation": "SOLUTION: Activated sludge contain microbes and it is used as inoculum .\nCorrect because both statements are true , but the Reason simply states a use for the sludge instead of explaining *why* the sedimented material is given that name."
  },
  {
    "id": 407,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> BOD of the sewage water gets significantly reduced during secondary treatment.<br><b>Reason (R):</b> Vigorous aeration in the tanks helps in the reduction of BOD.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: BOD indirectly refers to the organic matter present in the water. BOD gets significantly reduced due to vigorous aeration .\nCorrect because constant aeration keeps aerobic flocs active so they can quickly consume organic pollutants and reduce the water's BOD. Thus, the reason explains the assertion."
  },
  {
    "id": 408,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Streptokinase is produced by genetically modified streptococcus.<br><b>Reason (R):</b> Naturally occurred Streptococcus doesn't produce streptokinase.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: Streptokinase is produced by genetically modified Streptococcus because streptokinase is not produced by naturally occurring Streptococcus .\nCorrect because commercial therapeutic production relies on bioengineered strains since wild-type strains do not naturally produce it in configurations safe or sufficient for clinical use. The reason explains why genetic modification is necessary."
  },
  {
    "id": 409,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Monascus purpureus is useful in the commercial production of blood lowering cholesterol agents.<br><b>Reason (R):</b> These agents act by competitively inhibiting the enzyme responsible for synthesis of cholesterol.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: Monascus purpureus is useful in the commercial production of blood lowering cholesterol agents because these agents act by competitively inhibiting the enzyme responsible for synthesis of cholesterol agents .\nCorrect because the reason outlines the exact mechanism of statins (produced by Monascus), which explicitly explains why they successfully lower blood cholesterol levels."
  },
  {
    "id": 410,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> An organic farmer believes that biodiversity furthers health.<br><b>Reason (R):</b> He has a holistic approach in understanding the intricate complexities between various flora and fauna.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: An organic farmer believes that biodiversity furthers health. The more variety a landscape has, the more sustainable it is .\nCorrect because an organic farmer's reliance on ecosystem balances stems directly from a holistic view of flora and fauna interactions. The reason explains the assetion."
  },
  {
    "id": 411,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> The key belief of an organic farmer is that sometimes even pests are not completely eradicated.<br><b>Reason (R):</b> He has a very conventional farming approach towards it.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 2,
    "explanation": "SOLUTION: The key belief of an organic farmer is that sometimes even pests are not completely eradicated because an organic farmer believes that biodiversity furthers health .\nCorrect because the Assertion is true , but the Reason is false because organic farming is a modern ecological alternative that stands in direct contrast to chemical-heavy conventional farming."
  },
  {
    "id": 412,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> The beetle ladybird with red and black markings are useful in getting rid of mosquitoes.<br><b>Reason (R):</b> These beetles are used in the biocontrol of mosquito larvae as they feed on them.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 3,
    "explanation": "SOLUTION: Both A & R are false. Beetles caused ladybird are useful to get rid of aphids and not mosquitoes or their larvae forms .\nCorrect because both statements are false: ladybirds target aphids , while dragonflies are the biological predators used to manage mosquitoes."
  },
  {
    "id": 413,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> The sachets containing spores of Bacillus thuringiensis are sprayed onto vulnerable plants such as brassicas and fruit trees.<br><b>Reason (R):</b> These spores are later eaten by dragonflies in which they release toxins in their gut leaving perforations and thereby killing them.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 2,
    "explanation": "SOLUTION: A is true & R is false. The spores are eaten up by the caterpillars of insects like butterflies and cotton bollworms in which the active form of toxin is released in their gut causing perforations leading to the death of them .\nCorrect because the Assertion is standard , but the Reason is false because the spores target insect larvae like butterfly caterpillars, not beneficial predators like dragonflies."
  },
  {
    "id": 414,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Trichoderma is a fungus that causes excessive infestation of the plant root system.<br><b>Reason (R):</b> These are most common type of pathogen found in the roots of several plants.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 3,
    "explanation": "SOLUTION: Trichoderma is a common fungus used in the treatment of several plant pathogens as biocontrol agents .\nCorrect because both statements are false: Trichoderma is a symbiotic biocontrol agent that protects roots , meaning it acts as a defender rather than a harmful plant pathogen."
  },
  {
    "id": 415,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Majority of baculoviruses such as the genes NPV are used as biocontrol agents against many different pathogens like insects and other arthropods.<br><b>Reason (R):</b> These are having broad spectrum insecticidal applications that help to get rid of many pathogens at a time.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 2,
    "explanation": "SOLUTION: A is true while R is false. They have narrow spectrum insecticidal properties that are species specific and also not have any negative impact on plants, mammals, birds, fish or even on non-target insects .\nCorrect because the Assertion is true , but the Reason is false because baculoviruses have narrow-spectrum, species-specific profiles instead of broad-spectrum ones."
  },
  {
    "id": 416,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Integrated pest management (IPM) programme, helps in the treatnent of ecologically sensitive areas.<br><b>Reason (R):</b> It helps in the restoration and conservation of species that may be very critical in the well being of that ecosystem.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: Integrated pest management programme, helps in the treatment of ecologically sensitive areas because it helps in the restoration and conservation of species that may be very critical in the well being of that ecosystem .\nCorrect because IPM minimizes non-target chemical damage, directly supporting the preservation of key species in sensitive ecosystems. The reason explains the assertion."
  },
  {
    "id": 417,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Methanogenesis is an obligate anaerobic process.<br><b>Reason (R):</b> In this process apart from CH4 even CO2 and H2S are released.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 1,
    "explanation": "SOLUTION: Methanogenesis is an obligate anaerobic process because it occurs in marshy area or where the oxygen availability is very less. Apart from CH4, gases like CO2 and H2S are also produced.\nCorrect because both statements are scientifically true, but the release of secondary gases (Reason) does not explain *why* the process is biochemically restricted to oxygen-free environments (Assertion)."
  },
  {
    "id": 418,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> A large part of activated sludges is pumped into anaerobic sludge digester.<br><b>Reason (R):</b> These bacteria grow on the flocs to produce a mixture of gases such as methane, hydrogen sulphide and carbon dioxide.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 1,
    "explanation": "SOLUTION: Major part of the sludge is pumped into anaerobic sludge digester because here other kinds of bacteria, which grow anaerobically, digest the bacteria and the fungi in the sludge.\nCorrect because both statements are factual, but the Reason describes the metabolic gas output rather than explaining the underlying structural purpose of the transfer, which is the breakdown of aerobic microbial masses by anaerobic digesters."
  },
  {
    "id": 419,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Trichoderma can be used as both industrial microbe as well as a biocontrol agent.<br><b>Reason (R):</b> Some species carries out both the functions.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 2,
    "explanation": "SOLUTION: Trichoderma can be used as both industrial microbes as well as a biocontrol agent because some species are used in synthesing bioactive molecules and some other are used as biocontrol agent.\nCorrect because the Assertion is true, but the Reason is false; different, distinct species within the genus Trichoderma carry out these separate roles (e.g., *Trichoderma polysporum* produces industrial Cyclosporin-A, while other strains act as root biocontrol agents), rather than a single species performing both functions simultaneously."
  },
  {
    "id": 420,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Penicillin was extensively used to treat American soldiers in world war-II.<br><b>Reason (R):</b> In Greek 'Anti' is against & 'bios' means life so literally antibiotics mean against life.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 1,
    "explanation": "SOLUTION: Both the statements are correct. The word antibiotics means against life for bacteria while it is pro-life in the context of human beings.\nCorrect because both statements are perfectly true historical and etymological facts, but the literal Greek definition of the word 'antibiotic' (Reason) does not explain the historical event of treating wounded soldiers on WWII battlefields (Assertion)."
  },
  {
    "id": 421,
    "topic": "HOTs",
    "difficulty": "Medium",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Lactic acid bacteria play an important role in checking the diseases of the stomach.<br><b>Reason (R):</b> Antibiotics are one of the most significant discoveries of 19th century.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 2,
    "explanation": "SOLUTION: Antibiotics are one of the most significant discovery of 20th century.\nCorrect because the Assertion accurately details a beneficial role of LAB in the human gut, but the Reason is completely false because antibiotics were discovered in the 20th century (1928), not the 19th century."
  },
  {
    "id": 422,
    "topic": "HOTs",
    "difficulty": "Hard",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> Malting of cereals is done before fermenting them with yeast.<br><b>Reason (R):</b> Fermenting microbes rely on anaerobic pathway of respiration.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 1,
    "explanation": "SOLUTION: Malting of cereals is done before fermenting them with yeast because in malting process complex sugar is broken down into simple sugar due to rate of fermentation increases.\nCorrect because both statements are true facts, but the biochemical reason malting is done is to break down starch into simple fermentable sugars like maltose, which doesn't directly correlate with the general fact that yeast respires anaerobically."
  },
  {
    "id": 423,
    "topic": "HOTs",
    "difficulty": "Easy",
    "type": "AR",
    "hots": true,
    "q": "<b>Assertion (A):</b> The yeast species of Baker's yeast and Brewer's yeast is the same.<br><b>Reason (R):</b> Both of them represent the same species called Saccharomyces cerevisiae.",
    "options": ["Both A and R are true and R is correct explanation","Both A and R are true but R is not correct explanation","A is true statement but R is false","Both A and Reason are false statements"],
    "correct": 0,
    "explanation": "SOLUTION: The yeast species of Baker's yeast and Brewer's yeast is the same as both of them represents the same species called Saccharomyces cerevisiae.\nCorrect because both common industrial applications rely on different strains of the exact same fungal species, *Saccharomyces cerevisiae*. The reason directly validates and explains the assertion."
  }
];

if (typeof module !== 'undefined') {
  module.exports = { allQuestions };
}
