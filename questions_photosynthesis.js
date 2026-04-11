const allQuestions = [
{
  id: 1,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following statements is/are correct regarding the two perspectives of biology mentioned in NCERT?<br>(i) One perspective describes organisation at organismic and above level<br>(ii) The second perspective describes at cellular and molecular level<br>(iii) The first perspective resulted in physiology and biochemistry<br>(iv) The second perspective resulted in ecology and related disciplines",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(iii) and (iv) only"
  ],
  correct: 0,
  explanation: "Statements (i) and (ii) are correct. Statement (iii) is wrong because the organismic and above level resulted in ecology (not physiology). Statement (iv) is wrong because cellular and molecular level resulted in physiology and biochemistry (not ecology). This is a common NCERT-based conceptual trap where students interchange the two perspectives."
},
{
  id: 2,
  topic: "Introduction - Photosynthesis Overview",
  q: "The organismic and above level of organisation in biology primarily resulted in the development of:",
  options: [
    "Physiology and biochemistry",
    "Ecology and related disciplines",
    "Molecular biology and genetics",
    "Anatomy and morphology only"
  ],
  correct: 1,
  explanation: "As per NCERT, the organismic and above level of organisation resulted in ecology and related disciplines, while cellular and molecular level resulted in physiology and biochemistry."
},
{
  id: 3,
  topic: "Introduction - Photosynthesis Overview",
  q: "Melvin Calvin received his Nobel Prize for:",
  options: [
    "Discovery of C14 radioactive isotope",
    "Mapping the pathway of carbon assimilation in photosynthesis",
    "Discovery of light reactions in photosynthesis",
    "Establishing the electron transport chain in chloroplasts"
  ],
  correct: 1,
  explanation: "Calvin earned the Nobel Prize in 1961 specifically for mapping the pathway of carbon assimilation (carbon fixation) in photosynthesis, not for discovering C14 or light reactions."
},
{
  id: 4,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which radioactive isotope was used by Calvin and Bassham to trace the path of carbon in photosynthesis?",
  options: [
    "C12",
    "C13",
    "C14",
    "C11"
  ],
  correct: 2,
  explanation: "Calvin and J.A. Bassham labelled carbon dioxide with C14 (radioactive carbon-14) to trace the path of carbon during photosynthesis. C12 is the most common stable isotope and C13 is another stable isotope."
},
{
  id: 5,
  topic: "Introduction - Photosynthesis Overview",
  q: "Calvin proposed that plants change light energy to chemical energy by:",
  options: [
    "Splitting water molecules using enzymes",
    "Transferring an electron in an organised array of pigment molecules and other substances",
    "Direct conversion of CO₂ into glucose",
    "Absorption of light by carotenoids exclusively"
  ],
  correct: 1,
  explanation: "As per NCERT, Calvin proposed that plants change light energy to chemical energy by transferring an electron in an organised array of pigment molecules and other substances. This is a direct NCERT statement-based question."
},
{
  id: 6,
  topic: "Introduction - Photosynthesis Overview",
  q: "Melvin Calvin received his Ph.D. in:",
  options: [
    "Botany from University of California",
    "Biochemistry from University of Minnesota",
    "Chemistry from University of Minnesota",
    "Physics from University of California, Berkeley"
  ],
  correct: 2,
  explanation: "As per NCERT, Calvin received his Ph.D. in Chemistry from the University of Minnesota. He later served as Professor of Chemistry at the University of California, Berkeley. Students often confuse the two universities."
},
{
  id: 7,
  topic: "Introduction - Photosynthesis Overview",
  q: "Consider the following statements:<br>(A) Photosynthesis is a physico-chemical process<br>(B) Photosynthesis is the primary source of all food on earth<br>(C) Green plants release CO₂ into the atmosphere through photosynthesis<br>(D) All living forms on earth ultimately depend on sunlight for energy<br><br>Choose the <b>correct</b> statements:",
  options: [
    "(A), (B) and (D) only",
    "(A), (B), (C) and (D)",
    "(B) and (D) only",
    "(A) and (C) only"
  ],
  correct: 0,
  explanation: "Statements A, B and D are correct as per NCERT. Statement C is wrong — photosynthesis releases oxygen (O₂) into the atmosphere, not CO₂. This is a classic NEET trap where students may overlook the substitution of O₂ with CO₂."
},
{
  id: 8,
  topic: "Introduction - Photosynthesis Overview",
  q: "Photosynthesis is important due to two reasons. Select the correct pair:",
  options: [
    "Primary source of all food on earth and release of CO₂",
    "Primary source of all food on earth and release of O₂ into atmosphere",
    "Release of O₂ and fixation of nitrogen",
    "Synthesis of proteins and release of O₂"
  ],
  correct: 1,
  explanation: "NCERT clearly states two reasons for the importance of photosynthesis: (1) it is the primary source of all food on earth, and (2) it is responsible for the release of oxygen into the atmosphere by green plants."
},
{
  id: 9,
  topic: "Introduction - Photosynthesis Overview",
  q: "<b>Assertion (A):</b> Green plants are called autotrophs.<br><b>Reason (R):</b> Green plants synthesise their own food through chemosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is true — green plants are indeed autotrophs. However, the Reason is false because green plants synthesise food through photosynthesis, NOT chemosynthesis. Chemosynthesis is carried out by certain bacteria. This is a common NEET trap."
},
{
  id: 10,
  topic: "Introduction - Photosynthesis Overview",
  q: "<b>Assertion (A):</b> All living forms on earth depend on sunlight for energy.<br><b>Reason (R):</b> The use of energy from sunlight by plants doing photosynthesis is the basis of life on earth.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both statements are directly from NCERT and are true. The reason correctly explains the assertion — because plants use sunlight via photosynthesis to produce food and oxygen, all life ultimately depends on sunlight."
},
{
  id: 11,
  topic: "Introduction - Photosynthesis Overview",
  q: "Melvin Calvin was born in:",
  options: [
    "California in 1911",
    "Minnesota in 1911",
    "Berkeley in 1901",
    "Minnesota in 1961"
  ],
  correct: 1,
  explanation: "As per NCERT, Melvin Calvin was born in Minnesota in April 1911. 1961 is the year he received the Nobel Prize, not his birth year — a common confusion trap."
},
{
  id: 12,
  topic: "Introduction - Photosynthesis Overview",
  q: "Calvin's co-worker in studying the reactions of carbon fixation in green plants was:",
  options: [
    "Arnon",
    "Hill",
    "J.A. Bassham",
    "Blackman"
  ],
  correct: 2,
  explanation: "As per NCERT, Calvin worked along with J.A. Bassham to study reactions in green plants forming sugar and other substances from raw materials. Arnon, Hill, and Blackman are associated with other aspects of photosynthesis."
},
{
  id: 13,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following is <b>NOT</b> listed as a raw material used by green plants in Calvin's study?",
  options: [
    "Carbon dioxide",
    "Water",
    "Minerals",
    "Nitrogen gas"
  ],
  correct: 3,
  explanation: "NCERT mentions that plants form sugar from raw materials like carbon dioxide, water, and minerals. Nitrogen gas is not mentioned as a raw material for photosynthesis in this context."
},
{
  id: 14,
  topic: "Introduction - Photosynthesis Overview",
  q: "The principles of photosynthesis established by Calvin are presently being used in:<br>(i) Studies on renewable resource for energy and materials<br>(ii) Basic studies in solar energy research<br>(iii) Genetic engineering of crop plants<br>(iv) Nuclear energy research",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii)",
    "(i), (ii), (iii) and (iv)",
    "(ii) and (iv) only"
  ],
  correct: 0,
  explanation: "As per NCERT, Calvin's principles are being used in studies on renewable resource for energy and materials AND basic studies in solar energy research. Genetic engineering and nuclear energy research are not mentioned."
},
{
  id: 15,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following best describes photosynthesis as stated in NCERT?",
  options: [
    "A purely chemical process",
    "A purely physical process",
    "A physico-chemical process",
    "A biochemical process only"
  ],
  correct: 2,
  explanation: "NCERT specifically describes photosynthesis as a 'physico-chemical process' — involving both physical (light absorption, electron transfer) and chemical (bond formation, reactions) components. Students often choose 'biochemical' which is not the exact NCERT term."
},
{
  id: 16,
  topic: "Introduction - Photosynthesis Overview",
  q: "The year in which Calvin was awarded the Nobel Prize is:",
  options: [
    "1951",
    "1911",
    "1971",
    "1961"
  ],
  correct: 3,
  explanation: "Calvin earned the Nobel Prize in 1961 for mapping the pathway of carbon assimilation in photosynthesis. 1911 is his birth year — a common confusion trap."
},
{
  id: 17,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following statements is <b>incorrect</b>?",
  options: [
    "All animals depend on plants for their food",
    "Green plants synthesise the food they need through photosynthesis",
    "Autotrophic nutrition is found in both plants and animals",
    "All organisms that depend on green plants for food are heterotrophs"
  ],
  correct: 2,
  explanation: "Autotrophic nutrition is found ONLY in plants (and certain bacteria), NOT in animals. This is directly stated in NCERT. All other statements are correct as per the text."
},
{
  id: 18,
  topic: "Introduction - Photosynthesis Overview",
  q: "Consider the following regarding the chapter on photosynthesis:<br>(A) It focuses on the structure of photosynthetic machinery<br>(B) It discusses various reactions that transform chemical energy into light energy<br>(C) It describes reactions that transform light energy into chemical energy",
  options: [
    "(A) and (B) only",
    "(A) and (C) only",
    "(A), (B) and (C)",
    "(B) and (C) only"
  ],
  correct: 1,
  explanation: "Statement B is wrong — the chapter focuses on reactions that transform light energy INTO chemical energy, not the reverse. NCERT clearly states the chapter focuses on structure of photosynthetic machinery and reactions that transform light energy into chemical energy."
},
{
  id: 19,
  topic: "Introduction - Photosynthesis Overview",
  q: "<b>Assertion (A):</b> Photosynthesis is the basis of life on earth.<br><b>Reason (R):</b> Photosynthesis provides food and releases nitrogen into the atmosphere.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is true — photosynthesis is indeed the basis of life on earth. Reason is false because photosynthesis releases oxygen (O₂), NOT nitrogen, into the atmosphere. Replacing oxygen with nitrogen is a classic NEET distractor."
},
{
  id: 20,
  topic: "Introduction - Photosynthesis Overview",
  q: "The two apparently irreconcilable perspectives on biology essentially rested on:",
  options: [
    "Two different species of organisms",
    "Two levels of organisation of life forms and phenomena",
    "Two different geological time periods",
    "Two branches of chemistry"
  ],
  correct: 1,
  explanation: "NCERT states that the two perspectives essentially rested on two levels of organisation of life forms and phenomena — one at organismic and above level, and the other at cellular and molecular level."
},
{
  id: 21,
  topic: "Introduction - Photosynthesis Overview",
  q: "In the context of plant physiology, the description of physiological processes in NCERT is given in molecular terms but in the context of:",
  options: [
    "Ecological interactions only",
    "Cellular activities and even at organism level",
    "Population dynamics",
    "Evolutionary adaptations"
  ],
  correct: 1,
  explanation: "NCERT clearly states that physiological processes are described in molecular terms but in the context of cellular activities and even at organism level. Wherever appropriate, the relation to environment is also discussed."
},
{
  id: 22,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following is used as an example for describing physiological processes in the NCERT unit on plant physiology?",
  options: [
    "Gymnosperms",
    "Algae",
    "Flowering plants",
    "Bryophytes"
  ],
  correct: 2,
  explanation: "NCERT mentions 'Description of physiological processes, in flowering plants as an example, is what is given in the chapters in this unit.' Flowering plants (angiosperms) are used as the model organism."
},
{
  id: 23,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following processes is <b>NOT</b> mentioned in the NCERT introduction as being described in molecular terms in the plant physiology unit?",
  options: [
    "Photosynthesis",
    "Respiration",
    "Plant growth and development",
    "Mineral absorption by roots"
  ],
  correct: 3,
  explanation: "NCERT specifically mentions photosynthesis, respiration, and plant growth and development as processes described in molecular terms. Mineral absorption by roots is not specifically mentioned in this introductory passage."
},
{
  id: 24,
  topic: "Introduction - Photosynthesis Overview",
  q: "Calvin served as Professor of Chemistry at:",
  options: [
    "University of Minnesota",
    "Massachusetts Institute of Technology",
    "University of California, Berkeley",
    "Harvard University"
  ],
  correct: 2,
  explanation: "NCERT states that Calvin served as Professor of Chemistry at the University of California, Berkeley. He received his Ph.D. from the University of Minnesota — students often confuse these two."
},
{
  id: 25,
  topic: "Introduction - Photosynthesis Overview",
  q: "Calvin's research on photosynthesis was carried out:",
  options: [
    "Before World War I",
    "During World War II",
    "Just after World War II",
    "In the 21st century"
  ],
  correct: 2,
  explanation: "NCERT states 'Just after world war II, when the world was under shock after the Hiroshima-Nagasaki bombings... Calvin and co-workers put radioactivity to beneficial use.'"
},
{
  id: 26,
  topic: "Introduction - Photosynthesis Overview",
  q: "Calvin and co-workers put radioactivity to beneficial use in the context of:",
  options: [
    "Medical imaging of human organs",
    "Nuclear power generation",
    "Studying carbon fixation in photosynthesis",
    "Genetic mutation studies"
  ],
  correct: 2,
  explanation: "After the ill-effects of radioactivity were witnessed through Hiroshima-Nagasaki bombings, Calvin put radioactivity to beneficial use by using C14-labelled CO₂ to study carbon assimilation in photosynthesis."
},
{
  id: 27,
  topic: "Introduction - Photosynthesis Overview",
  q: "Select the <b>incorrect</b> match:",
  options: [
    "Organismic and above level → Ecology",
    "Cellular and molecular level → Physiology and Biochemistry",
    "Green plants → Autotrophs",
    "Cellular and molecular level → Ecology"
  ],
  correct: 3,
  explanation: "Cellular and molecular level resulted in physiology and biochemistry, NOT ecology. Ecology resulted from organismic and above level of organisation. This is a direct NCERT-based matching trap."
},
{
  id: 28,
  topic: "Introduction - Photosynthesis Overview",
  q: "Read the following statements and choose the correct option:<br>(i) Green plants use light energy to drive the synthesis of organic compounds<br>(ii) Heterotrophic nutrition is found only in animals<br>(iii) Autotrophic nutrition is found only in plants<br>(iv) All living forms depend on sunlight for energy",
  options: [
    "(i), (ii) and (iv) are correct",
    "(i), (iii) and (iv) are correct",
    "(ii) and (iii) only are correct",
    "All are correct"
  ],
  correct: 1,
  explanation: "Statement (ii) is incorrect because heterotrophic nutrition is found in animals, fungi, and many other organisms — not ONLY in animals. Statements (i), (iii), and (iv) are correct as per NCERT. Note: NCERT says 'autotrophic nutrition is found only in plants' in this context."
},
{
  id: 29,
  topic: "Introduction - Photosynthesis Overview",
  q: "<b>Assertion (A):</b> Calvin used C14-labelled carbon dioxide in his experiments.<br><b>Reason (R):</b> Radioactive isotopes can be traced through metabolic pathways to map biochemical reactions.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Calvin used C14-labelled CO₂ precisely because radioactive isotopes can be traced through metabolic pathways, allowing him to map the path of carbon assimilation in photosynthesis. R correctly explains A."
},
{
  id: 30,
  topic: "Introduction - Photosynthesis Overview",
  q: "The NCERT chapter on photosynthesis primarily focuses on:<br>(i) Structure of photosynthetic machinery<br>(ii) Reactions that transform light energy into chemical energy<br>(iii) Taxonomy of photosynthetic organisms<br>(iv) Evolution of photosynthesis",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii)",
    "(iii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 0,
  explanation: "NCERT clearly states 'This chapter focusses on the structure of the photosynthetic machinery and the various reactions that transform light energy into chemical energy.' Taxonomy and evolution of photosynthesis are not mentioned as focus areas."
},
{
  id: 31,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following correctly represents the relationship between autotrophs and heterotrophs?",
  options: [
    "Autotrophs depend on heterotrophs for food",
    "Heterotrophs synthesise their own food and share with autotrophs",
    "All organisms that depend on green plants for food are heterotrophs",
    "Both autotrophs and heterotrophs can carry out photosynthesis"
  ],
  correct: 2,
  explanation: "NCERT states that 'all other organisms that depend on the green plants for food are heterotrophs.' Autotrophs (green plants) synthesise their own food; they do not depend on heterotrophs."
},
{
  id: 32,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which event motivated Calvin to use radioactivity for beneficial purposes?",
  options: [
    "Discovery of DNA structure",
    "Hiroshima-Nagasaki bombings and the ill-effects of radioactivity",
    "Invention of the electron microscope",
    "Discovery of chlorophyll structure"
  ],
  correct: 1,
  explanation: "NCERT mentions that 'when the world was under shock after the Hiroshima-Nagasaki bombings, and seeing the ill-effects of radioactivity, Calvin and co-workers put radioactivity to beneficial use' — by using C14 to study photosynthesis."
},
{
  id: 33,
  topic: "Introduction - Photosynthesis Overview",
  q: "Which of the following is <b>NOT</b> a reason for the importance of photosynthesis as mentioned in NCERT?",
  options: [
    "Primary source of all food on earth",
    "Release of oxygen into the atmosphere",
    "Fixation of atmospheric nitrogen",
    "Both (A) and (B) are reasons mentioned in NCERT"
  ],
  correct: 2,
  explanation: "Fixation of atmospheric nitrogen is NOT a function of photosynthesis. NCERT mentions only two reasons: (1) primary source of all food, and (2) release of oxygen. Nitrogen fixation is done by certain bacteria, not through photosynthesis."
},
{
  id: 34,
  topic: "Introduction - Photosynthesis Overview",
  q: "<b>Assertion (A):</b> The two perspectives on biology were apparently irreconcilable.<br><b>Reason (R):</b> They rested on different levels of organisation — one at organismic and above, and the other at cellular and molecular level.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. The two perspectives were irreconcilable because they operated at fundamentally different levels of biological organisation, making R the correct explanation of A."
},
{
  id: 35,
  topic: "Introduction - Photosynthesis Overview",
  q: "In the organised array proposed by Calvin for energy conversion in plants, the key participants are:",
  options: [
    "Enzymes and ATP only",
    "Pigment molecules and other substances",
    "DNA and RNA molecules",
    "Ribosomes and mitochondria"
  ],
  correct: 1,
  explanation: "Calvin proposed that plants convert light energy to chemical energy by transferring an electron in an organised array of 'pigment molecules and other substances.' This is a direct NCERT statement."
},
{
  id: 36,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "In the experiment using a variegated leaf to test for photosynthesis, starch was found only in:",
  options: [
    "The white parts of the leaf",
    "The entire leaf uniformly",
    "The green parts of the leaf exposed to light",
    "The parts covered with black paper"
  ],
  correct: 2,
  explanation: "Photosynthesis occurs only in the green parts (containing chlorophyll) and in the presence of light. Variegated leaves have green and non-green parts; only green parts test positive for starch."
},
{
  id: 37,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "In the experiment to prove CO₂ is required for photosynthesis, KOH-soaked cotton is used to:",
  options: [
    "Release CO₂ slowly",
    "Absorb oxygen from the test tube",
    "Absorb CO₂ from the enclosed space",
    "Provide moisture to the leaf"
  ],
  correct: 2,
  explanation: "KOH (potassium hydroxide) absorbs CO₂. The part of the leaf enclosed with KOH-soaked cotton is deprived of CO₂ and tests negative for starch, proving CO₂ is essential for photosynthesis."
},
{
  id: 38,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "Consider the following statements regarding simple photosynthesis experiments:<br>(i) Chlorophyll is required for photosynthesis<br>(ii) Light is required for photosynthesis<br>(iii) O₂ is required for photosynthesis<br>(iv) CO₂ is required for photosynthesis",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(i), (iii) and (iv) only",
    "All of the above"
  ],
  correct: 1,
  explanation: "NCERT states that simple experiments show chlorophyll, light, and CO₂ are required for photosynthesis. O₂ is a product of photosynthesis, not a requirement. This is a common student trap."
},
{
  id: 39,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "In the KOH experiment, the part of the leaf exposed to air tests <b>positive</b> for starch because:",
  options: [
    "It received more light than the enclosed part",
    "It had access to atmospheric CO₂ needed for photosynthesis",
    "KOH released nutrients to the other part",
    "Air provides nitrogen required for starch synthesis"
  ],
  correct: 1,
  explanation: "The exposed part had access to atmospheric CO₂ and light, allowing photosynthesis and starch formation. The enclosed part lacked CO₂ (absorbed by KOH), so no photosynthesis occurred."
},
{
  id: 40,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "<b>Assertion (A):</b> The portion of the leaf enclosed in a test tube with KOH-soaked cotton tested negative for starch.<br><b>Reason (R):</b> KOH absorbs light, preventing photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Assertion is true — the enclosed leaf part tested negative for starch. But the Reason is false — KOH absorbs CO₂, NOT light. The absence of CO₂ (not light) prevented photosynthesis in the enclosed part."
},
{
  id: 41,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "To prove that light is necessary for photosynthesis, the experiment involves:",
  options: [
    "Using a variegated leaf exposed to light",
    "Partially covering a leaf with black paper and exposing to light",
    "Enclosing leaf in a test tube with KOH",
    "Immersing leaf in boiling water"
  ],
  correct: 1,
  explanation: "Partially covering a leaf with black paper ensures one part gets light and the other doesn't. Only the light-exposed part tests positive for starch, proving light is essential for photosynthesis."
},
{
  id: 42,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "Which of the following experiments proves that chlorophyll is essential for photosynthesis?",
  options: [
    "Leaf partially covered with black paper",
    "Leaf enclosed with KOH-soaked cotton",
    "Variegated leaf exposed to light and tested for starch",
    "Leaf kept in dark for 48 hours"
  ],
  correct: 2,
  explanation: "A variegated leaf has green (chlorophyll-containing) and non-green parts. When exposed to light and tested for starch, only the green parts show starch, proving chlorophyll is essential."
},
{
  id: 43,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "The test used to detect the end product of photosynthesis in the leaf experiments is:",
  options: [
    "Biuret test",
    "Benedict's test",
    "Iodine test for starch",
    "Sudan III test"
  ],
  correct: 2,
  explanation: "Iodine test is used to detect starch (turns blue-black). Glucose produced during photosynthesis is stored as starch in leaves. Biuret tests for proteins, Benedict's for reducing sugars, and Sudan III for lipids."
},
{
  id: 44,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "<b>Assertion (A):</b> Both a variegated leaf experiment and a black paper experiment prove the same requirement of photosynthesis.<br><b>Reason (R):</b> Both experiments test for the necessity of CO₂.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false and R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Assertion is false — the variegated leaf experiment proves chlorophyll is essential, while the black paper experiment proves light is essential. They test different requirements. Reason is also false — neither tests for CO₂ necessity. CO₂ requirement is proven by the KOH experiment."
},
{
  id: 45,
  topic: "Early Experiments - Joseph Priestley",
  q: "Joseph Priestley's experiments revealed the essential role of _______ in the growth of green plants.",
  options: [
    "Water",
    "Minerals",
    "Air",
    "Soil"
  ],
  correct: 2,
  explanation: "NCERT states that Priestley performed experiments that 'revealed the essential role of air in the growth of green plants.' He later discovered oxygen in 1774."
},
{
  id: 46,
  topic: "Early Experiments - Joseph Priestley",
  q: "Priestley concluded from his bell jar experiments that:",
  options: [
    "Plants damage the air like burning candles",
    "Plants restore to the air whatever breathing animals and burning candles remove",
    "Plants require carbon dioxide for growth",
    "Oxygen is essential for photosynthesis"
  ],
  correct: 1,
  explanation: "Priestley's hypothesis was that 'plants restore to the air whatever breathing animals and burning candles remove.' He observed that a mint plant in a bell jar kept the mouse alive and the candle burning."
},
{
  id: 47,
  topic: "Early Experiments - Joseph Priestley",
  q: "Priestley performed his series of experiments on the role of air in plant growth in:",
  options: [
    "1774",
    "1770",
    "1854",
    "1730"
  ],
  correct: 1,
  explanation: "Priestley performed his experiments in 1770. He discovered oxygen later in 1774. Students often confuse these two dates."
},
{
  id: 48,
  topic: "Early Experiments - Joseph Priestley",
  q: "In Priestley's experiment, which of the following is correct?<br>(i) A candle burning in a closed bell jar gets extinguished<br>(ii) A mouse suffocates in a closed bell jar<br>(iii) A mint plant in the bell jar kept the mouse alive<br>(iv) A mint plant in the bell jar caused the candle to extinguish faster",
  options: [
    "(i), (ii) and (iii) only",
    "(i) and (ii) only",
    "(i), (ii), (iii) and (iv)",
    "(ii), (iii) and (iv) only"
  ],
  correct: 0,
  explanation: "Statements (i), (ii) and (iii) are correct. Statement (iv) is wrong — the mint plant restored the air so the candle continued to burn, not extinguish faster."
},
{
  id: 49,
  topic: "Early Experiments - Joseph Priestley",
  q: "Priestley concluded that a burning candle or a breathing animal:",
  options: [
    "Produce oxygen that supports plant growth",
    "Damage the air in a closed space",
    "Release carbon dioxide beneficial for plants",
    "Have no effect on the air composition"
  ],
  correct: 1,
  explanation: "Priestley concluded that 'a burning candle or an animal that breathe the air, both somehow, damage the air.' He did not specify CO₂ or O₂ by name — he spoke in terms of 'damaging' and 'restoring' air."
},
{
  id: 50,
  topic: "Early Experiments - Jan Ingenhousz",
  q: "Jan Ingenhousz modified Priestley's experiment by:",
  options: [
    "Using a different plant species",
    "Placing the setup once in the dark and once in the sunlight",
    "Replacing the bell jar with a flask",
    "Using CO₂-enriched air"
  ],
  correct: 1,
  explanation: "Ingenhousz used a similar setup as Priestley but placed it once in the dark and once in the sunlight, showing that sunlight is essential for the plant process that purifies the air."
},
{
  id: 51,
  topic: "Early Experiments - Jan Ingenhousz",
  q: "Ingenhousz used an aquatic plant to demonstrate that:",
  options: [
    "Plants absorb CO₂ only in darkness",
    "In bright sunlight, small bubbles of oxygen were formed around green parts",
    "Roots of aquatic plants release oxygen",
    "All parts of the plant release oxygen equally"
  ],
  correct: 1,
  explanation: "Ingenhousz showed that in bright sunlight, small bubbles (later identified as O₂) formed around the green parts of the aquatic plant, while in the dark they did not."
},
{
  id: 52,
  topic: "Early Experiments - Jan Ingenhousz",
  q: "Ingenhousz showed that oxygen is released only by:",
  options: [
    "All parts of the plant",
    "Roots of the plant",
    "The green parts of the plant",
    "The flowers of the plant"
  ],
  correct: 2,
  explanation: "NCERT states: 'he showed that it is only the green part of the plants that could release oxygen.' This is because only green parts contain chlorophyll needed for photosynthesis."
},
{
  id: 53,
  topic: "Early Experiments - Jan Ingenhousz",
  q: "<b>Assertion (A):</b> Jan Ingenhousz showed that sunlight is essential for photosynthesis.<br><b>Reason (R):</b> Priestley had already proved that sunlight is essential for purification of air by plants.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Assertion is true — Ingenhousz demonstrated that sunlight is essential. Reason is false — Priestley did NOT prove that sunlight is essential. Priestley showed plants restore air, but it was Ingenhousz who added the sunlight component."
},
{
  id: 54,
  topic: "Early Experiments - Jan Ingenhousz",
  q: "The correct chronological order of the scientists is:",
  options: [
    "Ingenhousz → Priestley → Sachs → Engelmann",
    "Priestley → Ingenhousz → Sachs → Engelmann",
    "Sachs → Priestley → Ingenhousz → Engelmann",
    "Engelmann → Sachs → Priestley → Ingenhousz"
  ],
  correct: 1,
  explanation: "Priestley (1770) → Ingenhousz (1730-1799, after Priestley) → Julius von Sachs (1854) → T.W. Engelmann (1843-1909). This is the chronological order of their key contributions."
},
{
  id: 55,
  topic: "Early Experiments - Julius von Sachs",
  q: "Julius von Sachs provided evidence for:",
  options: [
    "Oxygen evolution during photosynthesis",
    "Role of sunlight in photosynthesis",
    "Production of glucose when plants grow",
    "Role of CO₂ in photosynthesis"
  ],
  correct: 2,
  explanation: "NCERT states: 'It was not until about 1854 that Julius von Sachs provided evidence for production of glucose when plants grow.' He also showed glucose is stored as starch."
},
{
  id: 56,
  topic: "Early Experiments - Julius von Sachs",
  q: "Julius von Sachs found that the green substance in plants is located in:",
  options: [
    "Cell wall",
    "Vacuoles",
    "Special bodies within plant cells (later called chloroplasts)",
    "Nucleus"
  ],
  correct: 2,
  explanation: "Sachs showed that chlorophyll is located in special bodies within plant cells, which were later called chloroplasts. This was a key discovery linking the site of photosynthesis to a specific organelle."
},
{
  id: 57,
  topic: "Early Experiments - Julius von Sachs",
  q: "Which of the following is <b>NOT</b> a contribution of Julius von Sachs?",
  options: [
    "Evidence for production of glucose during plant growth",
    "Chlorophyll is located in special bodies (chloroplasts)",
    "Glucose is usually stored as starch",
    "O₂ evolved in photosynthesis comes from water"
  ],
  correct: 3,
  explanation: "The discovery that O₂ comes from water was made by Cornelius van Niel, not Sachs. Sachs contributed to understanding glucose production, starch storage, and chloroplast localisation."
},
{
  id: 58,
  topic: "Early Experiments - Julius von Sachs",
  q: "Consider the following statements about Julius von Sachs:<br>(A) He provided evidence for glucose production in plants around 1854<br>(B) He showed glucose is stored as starch<br>(C) He discovered that only green parts of plants make glucose<br>(D) He discovered the role of sunlight in photosynthesis<br><br>Choose the correct statements:",
  options: [
    "(A), (B) and (C) only",
    "(A), (B), (C) and (D)",
    "(A) and (B) only",
    "(C) and (D) only"
  ],
  correct: 0,
  explanation: "Statements A, B and C are correct as per NCERT. Statement D is wrong — the role of sunlight was demonstrated by Jan Ingenhousz, not Sachs."
},
{
  id: 59,
  topic: "Early Experiments - T.W. Engelmann",
  q: "T.W. Engelmann's experiment involved:",
  options: [
    "Using a prism to split light and illuminating Cladophora in a suspension of aerobic bacteria",
    "Burning a candle in a bell jar with a mint plant",
    "Labelling CO₂ with radioactive carbon",
    "Enclosing a leaf in KOH solution"
  ],
  correct: 0,
  explanation: "Engelmann used a prism to split light into spectral components, illuminated the green alga Cladophora placed in a suspension of aerobic bacteria, and observed where bacteria accumulated to detect O₂ evolution sites."
},
{
  id: 60,
  topic: "Early Experiments - T.W. Engelmann",
  q: "In Engelmann's experiment, aerobic bacteria accumulated mainly in the region of:",
  options: [
    "Green and yellow light",
    "Blue and red light",
    "Orange and violet light",
    "All wavelengths equally"
  ],
  correct: 1,
  explanation: "Bacteria accumulated mainly in the region of blue and red light because maximum photosynthesis (and hence O₂ evolution) occurs in these wavelengths. This matches the absorption spectrum of chlorophyll a and b."
},
{
  id: 61,
  topic: "Early Experiments - T.W. Engelmann",
  q: "Engelmann used aerobic bacteria in his experiment because:",
  options: [
    "They could fix carbon dioxide",
    "They could detect the sites of O₂ evolution",
    "They provided CO₂ for the alga",
    "They absorbed excess light energy"
  ],
  correct: 1,
  explanation: "Aerobic bacteria require O₂ for survival. They were used as biological indicators to detect sites of O₂ evolution. Where more O₂ was released (due to more photosynthesis), more bacteria accumulated."
},
{
  id: 62,
  topic: "Early Experiments - T.W. Engelmann",
  q: "The first action spectrum of photosynthesis described by Engelmann resembles roughly the:",
  options: [
    "Emission spectrum of sunlight",
    "Absorption spectrum of carotenoids only",
    "Absorption spectra of chlorophyll a and b",
    "Fluorescence spectrum of chlorophyll"
  ],
  correct: 2,
  explanation: "NCERT states that Engelmann's action spectrum 'resembles roughly the absorption spectra of chlorophyll a and b.' This confirms that chlorophyll a and b are the primary photosynthetic pigments."
},
{
  id: 63,
  topic: "Early Experiments - T.W. Engelmann",
  q: "The organism used in Engelmann's experiment was:",
  options: [
    "Spirogyra",
    "Chlamydomonas",
    "Cladophora",
    "Volvox"
  ],
  correct: 2,
  explanation: "NCERT specifically mentions that Engelmann used the green alga Cladophora in his experiment. This is a frequently asked factual point in NEET."
},
{
  id: 64,
  topic: "Early Experiments - T.W. Engelmann",
  q: "<b>Assertion (A):</b> Engelmann described the first action spectrum of photosynthesis.<br><b>Reason (R):</b> He observed that aerobic bacteria accumulated mainly in the region of green light.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Assertion is true — Engelmann described the first action spectrum. Reason is false — bacteria accumulated in blue and red light regions, NOT green light. Green light is mostly reflected by chlorophyll, causing least photosynthesis."
},
{
  id: 65,
  topic: "Early Experiments - Key Features Known by Mid-19th Century",
  q: "By the middle of the nineteenth century, the key features of plant photosynthesis were known. Which of the following correctly represents these?",
  options: [
    "Plants use heat energy to make proteins from CO₂ and water",
    "Plants use light energy to make carbohydrates from CO₂ and water",
    "Plants use chemical energy to make lipids from CO₂ and minerals",
    "Plants use light energy to make amino acids from N₂ and water"
  ],
  correct: 1,
  explanation: "NCERT states: 'plants could use light energy to make carbohydrates from CO₂ and water.' This was the established understanding by the mid-19th century."
},
{
  id: 66,
  topic: "Early Experiments - Empirical Equation",
  q: "The early empirical equation of photosynthesis was represented as:<br>CO₂ + H₂O → [CH₂O] + O₂<br>Here [CH₂O] represents:",
  options: [
    "Formaldehyde",
    "A carbohydrate (e.g., glucose)",
    "Carbon monoxide",
    "Methanol"
  ],
  correct: 1,
  explanation: "NCERT states that [CH₂O] represented a carbohydrate, with glucose (a six-carbon sugar) as an example. It is not formaldehyde (HCHO) in biological context — it represents the empirical formula of a carbohydrate."
},
{
  id: 67,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Cornelius van Niel demonstrated that photosynthesis is essentially:",
  options: [
    "A light-independent reaction producing oxygen",
    "A light-dependent reaction in which hydrogen from a suitable oxidisable compound reduces CO₂ to carbohydrates",
    "A process where CO₂ is the source of O₂ released",
    "A process that occurs only in green plants"
  ],
  correct: 1,
  explanation: "Van Niel demonstrated that photosynthesis is essentially a light-dependent reaction in which hydrogen from a suitable oxidisable compound reduces CO₂ to carbohydrates. This was a milestone contribution."
},
{
  id: 68,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Cornelius van Niel's studies were based on:",
  options: [
    "Green algae and cyanobacteria",
    "Purple and green sulphur bacteria",
    "Flowering plants only",
    "Fungi and lichens"
  ],
  correct: 1,
  explanation: "NCERT states that van Niel based his studies on purple and green bacteria (sulphur bacteria) to demonstrate the general nature of photosynthesis."
},
{
  id: 69,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Van Niel's general equation for photosynthesis is:<br>2H₂A + CO₂ → 2A + CH₂O + H₂O<br>In green plants, H₂A is:",
  options: [
    "H₂S",
    "H₂O",
    "NH₃",
    "H₂SO₄"
  ],
  correct: 1,
  explanation: "In green plants, H₂A = H₂O (water is the hydrogen donor). Water is oxidised to O₂. In purple and green sulphur bacteria, H₂A = H₂S (hydrogen sulphide is the hydrogen donor)."
},
{
  id: 70,
  topic: "Early Experiments - Cornelius van Niel",
  q: "In purple and green sulphur bacteria, when H₂S is the hydrogen donor, the oxidation product is:",
  options: [
    "O₂",
    "H₂O",
    "Sulphur or sulphate",
    "SO₂"
  ],
  correct: 2,
  explanation: "NCERT states: 'When H₂S is the hydrogen donor for purple and green sulphur bacteria, the oxidation product is sulphur or sulphate depending on the organism and not O₂.' This is a high-yield NEET concept."
},
{
  id: 71,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Van Niel inferred that the O₂ evolved by green plants comes from:",
  options: [
    "Carbon dioxide",
    "Carbohydrates",
    "Water",
    "Both CO₂ and H₂O equally"
  ],
  correct: 2,
  explanation: "Van Niel inferred that O₂ evolved comes from H₂O, not from CO₂. This was a groundbreaking inference later confirmed by radioisotopic techniques."
},
{
  id: 72,
  topic: "Early Experiments - Cornelius van Niel",
  q: "The inference that O₂ in photosynthesis comes from water and not CO₂ was later proved by:",
  options: [
    "Chromatography techniques",
    "Radioisotopic techniques",
    "Electron microscopy",
    "X-ray crystallography"
  ],
  correct: 1,
  explanation: "NCERT specifically states: 'This was later proved by using radioisotopic techniques.' Heavy oxygen (O¹⁸) labelled water was used to trace the source of O₂."
},
{
  id: 73,
  topic: "Early Experiments - Cornelius van Niel",
  q: "<b>Assertion (A):</b> Some organisms do not release O₂ during photosynthesis.<br><b>Reason (R):</b> In these organisms, the hydrogen donor is H₂S instead of H₂O.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. When H₂S is the hydrogen donor (as in purple and green sulphur bacteria), sulphur or sulphate is produced instead of O₂. Since H₂O is not split, O₂ is not released. R correctly explains A."
},
{
  id: 74,
  topic: "Early Experiments - Correct Equation of Photosynthesis",
  q: "The correct overall equation of photosynthesis is:",
  options: [
    "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂",
    "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂",
    "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂",
    "12CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂"
  ],
  correct: 1,
  explanation: "The correct equation is: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂. Twelve molecules of water are used as substrate because water is the source of O₂ and hydrogen. Six water molecules are also formed as product."
},
{
  id: 75,
  topic: "Early Experiments - Correct Equation of Photosynthesis",
  q: "In the overall equation of photosynthesis, 12 molecules of water are used as substrate because:",
  options: [
    "Six molecules provide H₂ and six provide O₂",
    "Water is the source of all oxygen released, and 12 H₂O are needed to release 6O₂ (12 oxygen atoms)",
    "Six water molecules act as solvents only",
    "Excess water is needed to dilute the products"
  ],
  correct: 1,
  explanation: "12 water molecules are needed because each water molecule provides one oxygen atom. To release 6O₂ (12 oxygen atoms), 12H₂O must be split. The hydrogen from water reduces CO₂ to glucose."
},
{
  id: 76,
  topic: "Early Experiments - Correct Equation of Photosynthesis",
  q: "The overall process of photosynthesis is:",
  options: [
    "A single-step reaction",
    "A two-step reaction only",
    "A multistep process",
    "A reversible single reaction"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'Note that this is not a single reaction but description of a multistep process called photosynthesis.' It involves light reactions and dark reactions with many intermediate steps."
},
{
  id: 77,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Which of the following scientists was a microbiologist who made a milestone contribution to understanding photosynthesis?",
  options: [
    "Joseph Priestley",
    "Julius von Sachs",
    "Cornelius van Niel",
    "T.W. Engelmann"
  ],
  correct: 2,
  explanation: "NCERT describes Cornelius van Niel as a microbiologist who made a milestone contribution by demonstrating the general nature of photosynthesis through his studies on purple and green bacteria."
},
{
  id: 78,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Select the <b>incorrect</b> statement:",
  options: [
    "In green plants, H₂O is the hydrogen donor and is oxidised to O₂",
    "Purple and green sulphur bacteria use H₂S as hydrogen donor",
    "Van Niel inferred that O₂ evolved by green plants comes from CO₂",
    "Some organisms do not release O₂ during photosynthesis"
  ],
  correct: 2,
  explanation: "Van Niel inferred that O₂ comes from H₂O, NOT from CO₂. This is the opposite of what was previously believed. This is one of the most important conceptual traps in NEET."
},
{
  id: 79,
  topic: "Early Experiments - Scientist Contributions",
  q: "Match the scientist with their contribution:<br>(i) Priestley — (P) First action spectrum<br>(ii) Ingenhousz — (Q) Glucose production evidence<br>(iii) Sachs — (R) Role of air in plant growth<br>(iv) Engelmann — (S) Sunlight essential for photosynthesis",
  options: [
    "(i)-R, (ii)-S, (iii)-Q, (iv)-P",
    "(i)-S, (ii)-R, (iii)-P, (iv)-Q",
    "(i)-R, (ii)-P, (iii)-S, (iv)-Q",
    "(i)-P, (ii)-Q, (iii)-R, (iv)-S"
  ],
  correct: 0,
  explanation: "Priestley → Role of air (R), Ingenhousz → Sunlight essential (S), Sachs → Glucose production (Q), Engelmann → First action spectrum (P). This is a high-frequency NEET matching question."
},
{
  id: 80,
  topic: "Early Experiments - Scientist Contributions",
  q: "Who discovered oxygen?",
  options: [
    "Jan Ingenhousz",
    "Julius von Sachs",
    "Joseph Priestley",
    "Cornelius van Niel"
  ],
  correct: 2,
  explanation: "NCERT states: 'Priestley, you may recall, discovered oxygen in 1774.' This is a direct factual recall frequently tested in NEET."
},
{
  id: 81,
  topic: "Early Experiments - Scientist Contributions",
  q: "Consider the following pairs:<br>(i) Priestley (1733-1804)<br>(ii) Ingenhousz (1730-1799)<br>(iii) Engelmann (1843-1909)<br>(iv) Van Niel (1897-1985)<br><br>Who among these was born earliest?",
  options: [
    "Priestley",
    "Ingenhousz",
    "Engelmann",
    "Van Niel"
  ],
  correct: 1,
  explanation: "Ingenhousz was born in 1730, which is the earliest among the given scientists. Priestley was born in 1733. Students often assume Priestley was born first because his experiments are described first in NCERT."
},
{
  id: 82,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Which of the following represents van Niel's generalised equation of photosynthesis?",
  options: [
    "CO₂ + H₂O → CH₂O + O₂",
    "2H₂A + CO₂ → 2A + CH₂O + H₂O",
    "6CO₂ + 12H₂O → C₆H₁₂O₆ + 6O₂ + 6H₂O",
    "CO₂ + 2H₂S → CH₂O + H₂O + 2S"
  ],
  correct: 1,
  explanation: "Van Niel's generalised equation is: 2H₂A + CO₂ → 2A + CH₂O + H₂O, where H₂A is the hydrogen donor. For green plants, A = O (H₂A = H₂O). For sulphur bacteria, A = S (H₂A = H₂S)."
},
{
  id: 83,
  topic: "Early Experiments - Cornelius van Niel",
  q: "<b>Assertion (A):</b> The O₂ released during photosynthesis in green plants comes from water.<br><b>Reason (R):</b> This was first inferred by van Niel and later proved by radioisotopic techniques.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both statements are true and the Reason correctly explains how we know the Assertion is true. Van Niel inferred it from comparative studies of sulphur bacteria, and radioisotopic techniques (using O¹⁸) confirmed it."
},
{
  id: 84,
  topic: "Early Experiments - Scientist Contributions",
  q: "The year associated with Julius von Sachs' evidence for glucose production is approximately:",
  options: [
    "1770",
    "1774",
    "1854",
    "1897"
  ],
  correct: 2,
  explanation: "NCERT states: 'It was not until about 1854 that Julius von Sachs provided evidence for production of glucose when plants grow.' 1770 is Priestley's experiment year, 1774 is oxygen discovery, 1897 is van Niel's birth year."
},
{
  id: 85,
  topic: "Early Experiments - Engelmann",
  q: "Which of the following statements is correct about Engelmann's experiment?<br>(i) He used a prism to split light<br>(ii) He used Spirogyra as the test organism<br>(iii) Aerobic bacteria accumulated in blue and red light regions<br>(iv) He described the first absorption spectrum of chlorophyll",
  options: [
    "(i) and (iii) only",
    "(i), (ii) and (iii)",
    "(i), (iii) and (iv)",
    "All are correct"
  ],
  correct: 0,
  explanation: "Only (i) and (iii) are correct. Statement (ii) is wrong — he used Cladophora, not Spirogyra. Statement (iv) is wrong — he described the first ACTION spectrum (not absorption spectrum) of photosynthesis."
},
{
  id: 86,
  topic: "Early Experiments - Scientist Contributions",
  q: "Who among the following showed that chlorophyll is located in special bodies within plant cells?",
  options: [
    "T.W. Engelmann",
    "Cornelius van Niel",
    "Julius von Sachs",
    "Jan Ingenhousz"
  ],
  correct: 2,
  explanation: "NCERT states that Sachs showed 'the green substance in plants (chlorophyll) is located in special bodies (later called chloroplasts) within plant cells.'"
},
{
  id: 87,
  topic: "Early Experiments - Correct Equation of Photosynthesis",
  q: "In the correct equation of photosynthesis, how many molecules of water appear as <b>product</b>?",
  options: [
    "12",
    "6",
    "0",
    "3"
  ],
  correct: 1,
  explanation: "In the correct equation: 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂, six molecules of water appear as product. 12 molecules of water are substrates. Students often forget that water is both a reactant and product."
},
{
  id: 88,
  topic: "Early Experiments - Correct Equation of Photosynthesis",
  q: "How many molecules of O₂ are released in the overall equation of photosynthesis for one molecule of glucose formed?",
  options: [
    "12",
    "3",
    "6",
    "1"
  ],
  correct: 2,
  explanation: "The equation 6CO₂ + 12H₂O → C₆H₁₂O₆ + 6H₂O + 6O₂ shows that 6 molecules of O₂ are released per molecule of glucose synthesised."
},
{
  id: 89,
  topic: "Early Experiments - Conceptual Integration",
  q: "Which of the following is a correct sequence of discoveries in the history of photosynthesis?",
  options: [
    "O₂ evolution → glucose production → action spectrum → O₂ comes from H₂O",
    "Glucose production → O₂ evolution → O₂ comes from H₂O → action spectrum",
    "Role of air → sunlight essential → glucose production → action spectrum → O₂ source from H₂O",
    "Action spectrum → role of air → glucose production → O₂ source"
  ],
  correct: 2,
  explanation: "Priestley (role of air, 1770) → Ingenhousz (sunlight essential) → Sachs (glucose production, 1854) → Engelmann (action spectrum) → Van Niel (O₂ from H₂O). This chronological order matches NCERT."
},
{
  id: 90,
  topic: "Early Experiments - Conceptual Integration",
  q: "<b>Assertion (A):</b> Engelmann's action spectrum of photosynthesis matches the absorption spectrum of chlorophyll a and b.<br><b>Reason (R):</b> Maximum photosynthesis occurs in the wavelengths maximally absorbed by chlorophyll.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both statements are true. The action spectrum (which wavelengths drive photosynthesis most) matches the absorption spectrum because photosynthesis is most efficient at wavelengths that chlorophyll absorbs most (blue and red). R correctly explains A."
},
{
  id: 91,
  topic: "What Do We Know - Basic Requirements of Photosynthesis",
  q: "Which of the following is the correct combination of requirements for photosynthesis as proven by simple experiments?",
  options: [
    "Chlorophyll, water, and minerals",
    "Chlorophyll, light, and CO₂",
    "Light, CO₂, and O₂",
    "Chlorophyll, light, and O₂"
  ],
  correct: 1,
  explanation: "NCERT states: 'chlorophyll (green pigment of the leaf), light and CO₂ are required for photosynthesis to occur.' Water and minerals are also needed but the three proven by simple experiments are chlorophyll, light, and CO₂."
},
{
  id: 92,
  topic: "Early Experiments - Cornelius van Niel",
  q: "Van Niel's contribution is considered a 'milestone' because he:",
  options: [
    "Discovered chloroplasts",
    "Proved that O₂ comes from CO₂",
    "Demonstrated the general nature of photosynthesis as a light-dependent reaction reducing CO₂ using hydrogen from an oxidisable compound",
    "Described the first action spectrum"
  ],
  correct: 2,
  explanation: "Van Niel's milestone was demonstrating the general equation of photosynthesis — that it involves a hydrogen donor (H₂A) reducing CO₂ in a light-dependent manner. This generalised the process beyond green plants to include bacteria."
},
{
  id: 93,
  topic: "Early Experiments - Joseph Priestley",
  q: "In Priestley's experiment, the plant used was:",
  options: [
    "Hydrilla",
    "Cladophora",
    "Mint",
    "Rose"
  ],
  correct: 2,
  explanation: "NCERT specifically mentions that Priestley 'placed a mint plant in the same bell jar.' Mint plant is the correct answer. Cladophora was used by Engelmann, and Hydrilla is commonly used in O₂ evolution experiments in labs."
},
{
  id: 94,
  topic: "Early Experiments - Conceptual Integration",
  q: "Which of the following scientists used bacteria in their photosynthesis experiments?<br>(i) T.W. Engelmann<br>(ii) Cornelius van Niel<br>(iii) Joseph Priestley<br>(iv) Jan Ingenhousz",
  options: [
    "(i) and (ii) only",
    "(i) only",
    "(ii) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 0,
  explanation: "Engelmann used aerobic bacteria as O₂ detectors, and van Niel studied purple and green sulphur bacteria. Priestley used a candle and mouse (not bacteria), and Ingenhousz used aquatic plants (not bacteria)."
},
{
  id: 95,
  topic: "Early Experiments - Conceptual Integration",
  q: "Which of the following is <b>incorrect</b> about the early empirical equation CO₂ + H₂O → [CH₂O] + O₂?",
  options: [
    "It represents a simplified version of photosynthesis",
    "[CH₂O] represents a carbohydrate",
    "It was the equation for oxygen-evolving organisms",
    "It correctly shows that O₂ is released from CO₂"
  ],
  correct: 3,
  explanation: "The early equation did not specify the source of O₂. It was van Niel who later demonstrated that O₂ comes from H₂O, not CO₂. The early equation could mislead one into thinking O₂ comes from CO₂, which is incorrect."
},
{
  id: 96,
  topic: "Early Experiments - Ingenhousz",
  q: "The bubbles formed around the green parts of the aquatic plant in Ingenhousz's experiment were later identified to be of:",
  options: [
    "Carbon dioxide",
    "Nitrogen",
    "Oxygen",
    "Hydrogen"
  ],
  correct: 2,
  explanation: "NCERT states: 'Later he identified these bubbles to be of oxygen.' The bubbles were O₂ released during photosynthesis from the green parts of the aquatic plant in bright sunlight."
},
{
  id: 97,
  topic: "Early Experiments - Conceptual Integration",
  q: "Consider the following:<br>(A) Priestley — discovered oxygen in 1774<br>(B) Ingenhousz — used an aquatic plant<br>(C) Sachs — showed chlorophyll is in chloroplasts<br>(D) Engelmann — used Spirogyra<br>(E) Van Niel — studied sulphur bacteria<br><br>How many of the above statements are correct?",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 2,
  explanation: "Statements A, B, C, and E are correct (four statements). Statement D is wrong — Engelmann used Cladophora, not Spirogyra. This is a commonly confused factual point."
},
{
  id: 98,
  topic: "Early Experiments - Correct Equation of Photosynthesis",
  q: "<b>Assertion (A):</b> In the overall equation of photosynthesis, 12 molecules of water are used as substrate.<br><b>Reason (R):</b> Water serves as the hydrogen donor and the source of all O₂ released during photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. 12H₂O are needed because water is the hydrogen donor for reducing CO₂ and the source of all 6O₂ (12 oxygen atoms) released. To provide 12 oxygen atoms for 6O₂, 12 water molecules must be split. R correctly explains A."
}
,
{
  id: 99,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Photosynthesis occurs in:",
  options: [
    "Green leaves only",
    "Green leaves and other green parts of the plant",
    "All parts of the plant including roots",
    "Only in mesophyll cells of leaves"
  ],
  correct: 1,
  explanation: "NCERT states: 'Photosynthesis does take place in the green leaves of plants but it does so also in other green parts of the plants.' Examples include green stems, green sepals, etc. It is not limited to leaves alone."
},
{
  id: 100,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which cells in the leaves have a large number of chloroplasts?",
  options: [
    "Epidermal cells",
    "Guard cells only",
    "Mesophyll cells",
    "Companion cells"
  ],
  correct: 2,
  explanation: "NCERT states that 'the mesophyll cells in the leaves have a large number of chloroplasts.' Mesophyll cells are the primary site of photosynthesis in leaves."
},
{
  id: 101,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Chloroplasts in mesophyll cells align themselves along the walls such that they get:",
  options: [
    "Maximum CO₂ concentration",
    "Maximum water supply",
    "The optimum quantity of incident light",
    "Protection from UV radiation"
  ],
  correct: 2,
  explanation: "NCERT states: 'Usually the chloroplasts align themselves along the walls of the mesophyll cells, such that they get the optimum quantity of the incident light.' This alignment maximises light capture efficiency."
},
{
  id: 102,
  topic: "Where Does Photosynthesis Take Place?",
  q: "The membranous system within the chloroplast consists of:<br>(i) Grana<br>(ii) Stroma lamellae<br>(iii) Matrix stroma<br>(iv) Cristae",
  options: [
    "(i), (ii) and (iii)",
    "(i) and (ii) only",
    "(i), (ii), (iii) and (iv)",
    "(ii) and (iv) only"
  ],
  correct: 1,
  explanation: "NCERT mentions that 'within the chloroplast there is membranous system consisting of grana, the stroma lamellae, and the matrix stroma.' However, the matrix stroma is NOT part of the membranous system — it is the fluid matrix. The membranous system includes grana and stroma lamellae. Cristae are found in mitochondria, not chloroplasts. The correct answer is (i) and (ii) only."
},
{
  id: 103,
  topic: "Where Does Photosynthesis Take Place?",
  q: "There is a clear division of labour within the chloroplast. The membrane system is responsible for:",
  options: [
    "Enzymatic synthesis of sugar and starch",
    "Trapping light energy and synthesis of ATP and NADPH",
    "Carbon fixation and sugar synthesis",
    "Starch storage and glucose breakdown"
  ],
  correct: 1,
  explanation: "NCERT states: 'The membrane system is responsible for trapping the light energy and also for the synthesis of ATP and NADPH.' Sugar synthesis occurs in the stroma."
},
{
  id: 104,
  topic: "Where Does Photosynthesis Take Place?",
  q: "In the stroma of chloroplast, the reactions that occur are:",
  options: [
    "Light-driven photochemical reactions",
    "Trapping of light energy",
    "Enzymatic reactions that synthesise sugar",
    "Photolysis of water"
  ],
  correct: 2,
  explanation: "NCERT states: 'In stroma, enzymatic reactions synthesise sugar, which in turn forms starch.' These are the carbon reactions (dark reactions) that use ATP and NADPH produced by the membrane system."
},
{
  id: 105,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Light reactions are also called:",
  options: [
    "Carbon reactions",
    "Dark reactions",
    "Photochemical reactions",
    "Biosynthetic reactions"
  ],
  correct: 2,
  explanation: "NCERT states: 'The former set of reactions, since they are directly light driven are called light reactions (photochemical reactions).' They occur in the membrane system (thylakoids) of chloroplasts."
},
{
  id: 106,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Dark reactions are also referred to as:",
  options: [
    "Photochemical reactions",
    "Carbon reactions",
    "Photolysis reactions",
    "Photorespiration"
  ],
  correct: 1,
  explanation: "NCERT states that the dark reactions are also called 'carbon reactions.' They are named so because they involve carbon fixation (reduction of CO₂ to sugar)."
},
{
  id: 107,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following statements about dark reactions is <b>correct</b>?",
  options: [
    "They occur only in darkness",
    "They are completely independent of light",
    "They are not directly light driven but depend on the products of light reactions",
    "They do not require ATP or NADPH"
  ],
  correct: 2,
  explanation: "NCERT specifically clarifies: dark reactions 'are not directly light driven but are dependent on the products of light reactions (ATP and NADPH).' It warns: 'this should not be construed to mean that they occur in darkness or that they are not light-dependent.'"
},
{
  id: 108,
  topic: "Where Does Photosynthesis Take Place?",
  q: "<b>Assertion (A):</b> Dark reactions occur in darkness.<br><b>Reason (R):</b> Dark reactions are not directly driven by light.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is FALSE — NCERT explicitly warns that 'this should not be construed to mean that they occur in darkness.' Reason is TRUE — dark reactions are not directly light driven but depend on ATP and NADPH from light reactions. This is one of the most common NEET conceptual traps."
},
{
  id: 109,
  topic: "Where Does Photosynthesis Take Place?",
  q: "The products of light reactions that are utilized by dark reactions are:",
  options: [
    "CO₂ and H₂O",
    "Glucose and O₂",
    "ATP and NADPH",
    "Starch and sucrose"
  ],
  correct: 2,
  explanation: "NCERT states that dark reactions 'are dependent on the products of light reactions (ATP and NADPH).' These are the assimilatory power used for carbon fixation in the Calvin cycle."
},
{
  id: 110,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Match the following:<br>(i) Membrane system — (P) Sugar synthesis<br>(ii) Stroma — (Q) ATP and NADPH synthesis<br>(iii) Grana — (R) Starch storage<br>(iv) Stroma lamellae — (S) Part of membranous system",
  options: [
    "(i)-Q, (ii)-P, (iii)-S, (iv)-S",
    "(i)-P, (ii)-Q, (iii)-R, (iv)-S",
    "(i)-Q, (ii)-R, (iii)-S, (iv)-P",
    "(i)-S, (ii)-P, (iii)-Q, (iv)-R"
  ],
  correct: 0,
  explanation: "Membrane system → ATP and NADPH synthesis (Q); Stroma → Sugar synthesis (P); Both Grana and Stroma lamellae are parts of the membranous system (S). This matches option A."
},
{
  id: 111,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Sugar synthesised in the stroma is usually stored as:",
  options: [
    "Sucrose",
    "Fructose",
    "Starch",
    "Cellulose"
  ],
  correct: 2,
  explanation: "NCERT states: 'In stroma, enzymatic reactions synthesise sugar, which in turn forms starch.' Starch is the storage form of glucose in chloroplasts (as starch grains)."
},
{
  id: 112,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Consider the following statements:<br>(A) Light reactions occur in the membrane system of chloroplasts<br>(B) Dark reactions occur in the stroma<br>(C) Light reactions produce O₂, ATP and NADPH<br>(D) Dark reactions are also called photochemical reactions<br><br>Which statements are correct?",
  options: [
    "(A), (B) and (C) only",
    "(A) and (B) only",
    "(A), (B), (C) and (D)",
    "(B), (C) and (D) only"
  ],
  correct: 0,
  explanation: "Statements A, B, and C are correct. Statement D is wrong — light reactions (not dark reactions) are called photochemical reactions. Dark reactions are called carbon reactions."
},
{
  id: 113,
  topic: "Where Does Photosynthesis Take Place?",
  q: "<b>Assertion (A):</b> There is a clear division of labour within the chloroplast.<br><b>Reason (R):</b> The membrane system traps light and synthesises ATP and NADPH, while the stroma carries out enzymatic sugar synthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. The division of labour is precisely what R describes — membrane system for light reactions and stroma for dark reactions. R correctly explains A."
},
{
  id: 114,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following is <b>NOT</b> a function of the membrane system in chloroplasts?",
  options: [
    "Trapping light energy",
    "Synthesis of ATP",
    "Synthesis of NADPH",
    "Enzymatic synthesis of sugar"
  ],
  correct: 3,
  explanation: "Enzymatic synthesis of sugar occurs in the stroma, not in the membrane system. The membrane system is responsible for trapping light, and synthesis of ATP and NADPH."
},
{
  id: 115,
  topic: "Where Does Photosynthesis Take Place?",
  q: "The term 'dark reactions' is used by convention to:",
  options: [
    "Indicate that these reactions occur only at night",
    "Distinguish them from light reactions as they are not directly light driven",
    "Show that these reactions do not need any energy",
    "Indicate they are inhibited by light"
  ],
  correct: 1,
  explanation: "NCERT states: 'to distinguish the latter they are called, by convention, as dark reactions (carbon reactions).' The term is used only to distinguish them from directly light-driven reactions, NOT to imply they occur in darkness."
},
{
  id: 116,
  topic: "Where Does Photosynthesis Take Place?",
  q: "When chloroplasts receive very high intensity light, their flat surfaces would be oriented:",
  options: [
    "Parallel to the cell wall to maximise light absorption",
    "Perpendicular to the incident light to minimise light absorption",
    "Randomly in the cytoplasm",
    "Towards the nucleus of the cell"
  ],
  correct: 1,
  explanation: "When light intensity is very high, chloroplasts orient their flat surfaces perpendicular to incident light (edge-on) to avoid photodamage. In low light, they align parallel to walls to maximise light capture. NCERT hints at this when asking about alignment."
},
{
  id: 117,
  topic: "Where Does Photosynthesis Take Place?",
  q: "When light intensity is low, chloroplasts in mesophyll cells would orient with their flat surfaces:",
  options: [
    "Perpendicular to the cell wall",
    "Parallel to the cell wall facing incident light",
    "Stacked on top of each other",
    "Away from the cell wall towards the centre"
  ],
  correct: 1,
  explanation: "In low light, chloroplasts align with flat surfaces parallel to the wall facing light to maximise the surface area exposed to incident light, ensuring optimum light absorption."
},
{
  id: 118,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following correctly describes the site of light reactions and dark reactions?",
  options: [
    "Light reactions — Stroma; Dark reactions — Grana",
    "Light reactions — Grana and thylakoid membrane; Dark reactions — Stroma",
    "Both occur in the stroma",
    "Both occur in the grana"
  ],
  correct: 1,
  explanation: "Light reactions (photochemical reactions) occur in the membrane system (grana/thylakoid membranes). Dark reactions (carbon reactions) occur in the stroma. This is the division of labour within the chloroplast."
},
{
  id: 119,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Select the <b>incorrect</b> statement regarding photosynthesis:",
  options: [
    "Photosynthesis occurs in green leaves and other green parts of the plant",
    "Mesophyll cells have a large number of chloroplasts",
    "Dark reactions are completely independent of light reactions",
    "The membrane system traps light energy"
  ],
  correct: 2,
  explanation: "Dark reactions are NOT completely independent of light reactions — they depend on ATP and NADPH produced by light reactions. NCERT explicitly warns against this misconception."
},
{
  id: 120,
  topic: "Where Does Photosynthesis Take Place?",
  q: "<b>Assertion (A):</b> Chloroplasts align along the walls of mesophyll cells.<br><b>Reason (R):</b> This alignment helps chloroplasts get optimum quantity of incident light.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. Chloroplasts align along the walls to get optimum light. R correctly explains A."
},
{
  id: 121,
  topic: "Where Does Photosynthesis Take Place?",
  q: "The matrix of the chloroplast is called:",
  options: [
    "Grana",
    "Thylakoid lumen",
    "Stroma",
    "Cristae"
  ],
  correct: 2,
  explanation: "The fluid matrix of the chloroplast is called stroma (also referred to as matrix stroma in NCERT). Grana are stacks of thylakoids, thylakoid lumen is inside thylakoids, and cristae are found in mitochondria."
},
{
  id: 122,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following pairs is correctly matched?",
  options: [
    "Light reactions — Carbon reactions",
    "Dark reactions — Photochemical reactions",
    "Light reactions — Photochemical reactions",
    "Stroma — Light trapping"
  ],
  correct: 2,
  explanation: "Light reactions = Photochemical reactions (directly light driven). Dark reactions = Carbon reactions. These are the correct NCERT terminologies. Options A, B, and D are mismatched."
},
{
  id: 123,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Consider the following:<br>(i) Grana — Part of membranous system<br>(ii) Stroma lamellae — Part of membranous system<br>(iii) Stroma — Site of dark reactions<br>(iv) Stroma — Part of membranous system<br><br>Which of the above are correct?",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(i) and (iii) only",
    "(ii) and (iv) only"
  ],
  correct: 0,
  explanation: "Statements (i), (ii), and (iii) are correct. Statement (iv) is wrong — stroma is the matrix (fluid part), NOT part of the membranous system. The membranous system consists of grana and stroma lamellae."
},
{
  id: 124,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following green parts of a plant, other than leaves, can carry out photosynthesis?",
  options: [
    "Green stems, green sepals, green fruits",
    "Roots and tubers",
    "Xylem vessels",
    "Heartwood"
  ],
  correct: 0,
  explanation: "Any green part of the plant containing chloroplasts can carry out photosynthesis. Green stems, green sepals, and green unripe fruits contain chlorophyll and can photosynthesize. Roots, xylem, and heartwood lack chlorophyll."
},
{
  id: 125,
  topic: "Where Does Photosynthesis Take Place?",
  q: "The reactions that are 'directly light driven' in photosynthesis occur in:",
  options: [
    "Stroma",
    "Cytoplasm",
    "Membrane system of chloroplast",
    "Cell wall"
  ],
  correct: 2,
  explanation: "NCERT states that light reactions are 'directly light driven' and occur in the membrane system (grana/thylakoid membranes) of the chloroplast, where light trapping, ATP, and NADPH synthesis take place."
},
{
  id: 126,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following statements is a common misconception about dark reactions that NCERT specifically warns against?<br>(i) Dark reactions occur only in darkness<br>(ii) Dark reactions are not light-dependent at all<br>(iii) Dark reactions depend on ATP and NADPH from light reactions",
  options: [
    "(i) and (ii) are misconceptions; (iii) is correct",
    "(i) only is a misconception",
    "(iii) is a misconception",
    "All three are misconceptions"
  ],
  correct: 0,
  explanation: "NCERT warns that (i) and (ii) are misconceptions — dark reactions do NOT occur only in darkness and they ARE indirectly light-dependent. Statement (iii) is the correct fact — dark reactions depend on ATP and NADPH."
},
{
  id: 127,
  topic: "Where Does Photosynthesis Take Place?",
  q: "<b>Assertion (A):</b> Photosynthesis occurs only in the leaves of plants.<br><b>Reason (R):</b> Only leaves contain mesophyll cells with chloroplasts.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  correct: 3,
  explanation: "Both are false. Assertion is false because photosynthesis occurs in leaves AND other green parts of the plant. Reason is also false because chloroplasts are present in other green parts too, not exclusively in leaf mesophyll cells."
},
{
  id: 128,
  topic: "Where Does Photosynthesis Take Place?",
  q: "The stroma lamellae in the chloroplast are:",
  options: [
    "Part of the matrix stroma only",
    "Membranes connecting grana to each other",
    "Found inside mitochondria",
    "Non-membranous structures"
  ],
  correct: 1,
  explanation: "Stroma lamellae (also called intergranal lamellae or fret membranes) are membranous connections between grana. They are part of the membranous system within the chloroplast."
},
{
  id: 129,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following is the correct sequence of structures from outside to inside in a chloroplast?",
  options: [
    "Outer membrane → Inner membrane → Stroma → Thylakoid membrane → Thylakoid lumen",
    "Outer membrane → Stroma → Inner membrane → Grana",
    "Inner membrane → Outer membrane → Grana → Stroma",
    "Stroma → Outer membrane → Inner membrane → Grana"
  ],
  correct: 0,
  explanation: "The correct sequence from outside to inside is: Outer membrane → Inner membrane → Stroma (matrix) → Thylakoid membrane (grana + stroma lamellae) → Thylakoid lumen (interior space of thylakoid)."
},
{
  id: 130,
  topic: "Where Does Photosynthesis Take Place?",
  q: "If dark reactions are stopped, light reactions will:",
  options: [
    "Continue indefinitely at the same rate",
    "Eventually slow down due to accumulation of ATP and NADPH",
    "Speed up to compensate",
    "Not be affected at all"
  ],
  correct: 1,
  explanation: "Light reactions produce ATP and NADPH which are consumed by dark reactions. If dark reactions stop, ATP and NADPH accumulate, and their precursors (ADP, Pi, NADP⁺) become depleted, eventually slowing down light reactions. This shows the interdependence of the two sets of reactions."
},
{
  id: 131,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Which of the following correctly describes the relationship between light reactions and dark reactions?",
  options: [
    "They are completely independent of each other",
    "Light reactions depend on dark reactions but not vice versa",
    "Dark reactions depend on light reactions for ATP and NADPH",
    "Both occur simultaneously in the same compartment"
  ],
  correct: 2,
  explanation: "NCERT states that dark reactions 'are dependent on the products of light reactions (ATP and NADPH).' They occur in different compartments — light reactions in membranes, dark reactions in stroma."
},
{
  id: 132,
  topic: "Where Does Photosynthesis Take Place?",
  q: "How many of the following are components of the membranous system of chloroplast?<br>(i) Grana<br>(ii) Stroma lamellae<br>(iii) Stroma<br>(iv) Outer membrane<br>(v) Inner membrane",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 0,
  explanation: "In the context of NCERT's description of the internal membranous system involved in photosynthesis, only grana and stroma lamellae are mentioned as the membranous system. While outer and inner membranes are also membranes, NCERT specifically refers to grana and stroma lamellae as the membranous system responsible for light reactions."
},
{
  id: 133,
  topic: "Where Does Photosynthesis Take Place?",
  q: "Select the correct statement(s):<br>(A) Light reactions are directly light driven<br>(B) Dark reactions are directly light driven<br>(C) Dark reactions are indirectly dependent on light<br>(D) Light reactions occur in stroma",
  options: [
    "(A) and (C) only",
    "(A), (B) and (C)",
    "(A) and (D) only",
    "(B) and (D) only"
  ],
  correct: 0,
  explanation: "Statement A is correct — light reactions are directly light driven. Statement C is correct — dark reactions are indirectly dependent on light (through ATP and NADPH). B is wrong (dark reactions are NOT directly light driven) and D is wrong (light reactions occur in the membrane system, not stroma)."
}
,
{
  id: 134,
  topic: "Photosynthetic Pigments",
  q: "The technique used to separate leaf pigments is:",
  options: [
    "Electrophoresis",
    "Centrifugation",
    "Paper chromatography",
    "Spectrophotometry"
  ],
  correct: 2,
  explanation: "NCERT states: 'We can look for an answer to this question by trying to separate the leaf pigments of any green plant through paper chromatography.' Chromatography separates pigments based on their differential solubility."
},
{
  id: 135,
  topic: "Photosynthetic Pigments",
  q: "How many pigments are responsible for the colour seen in leaves?",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 2,
  explanation: "NCERT states: 'the colour that we see in leaves is not due to a single pigment but due to four pigments: Chlorophyll a, chlorophyll b, xanthophylls, and carotenoids.'"
},
{
  id: 136,
  topic: "Photosynthetic Pigments",
  q: "Match the pigment with its colour in the chromatogram:<br>(i) Chlorophyll a — (P) Yellow<br>(ii) Chlorophyll b — (Q) Yellow to yellow-orange<br>(iii) Xanthophylls — (R) Bright or blue green<br>(iv) Carotenoids — (S) Yellow green",
  options: [
    "(i)-R, (ii)-S, (iii)-P, (iv)-Q",
    "(i)-S, (ii)-R, (iii)-Q, (iv)-P",
    "(i)-R, (ii)-P, (iii)-S, (iv)-Q",
    "(i)-P, (ii)-Q, (iii)-R, (iv)-S"
  ],
  correct: 0,
  explanation: "Chlorophyll a = Bright/blue green (R), Chlorophyll b = Yellow green (S), Xanthophylls = Yellow (P), Carotenoids = Yellow to yellow-orange (Q). This is a direct NCERT-based matching and a frequently asked NEET question."
},
{
  id: 137,
  topic: "Photosynthetic Pigments",
  q: "Chlorophyll a appears as which colour in a chromatogram?",
  options: [
    "Yellow green",
    "Yellow",
    "Bright or blue green",
    "Yellow to yellow-orange"
  ],
  correct: 2,
  explanation: "NCERT states Chlorophyll a is 'bright or blue green in the chromatogram.' Students often confuse it with chlorophyll b (yellow green)."
},
{
  id: 138,
  topic: "Photosynthetic Pigments",
  q: "Chlorophyll b appears as which colour in a chromatogram?",
  options: [
    "Bright or blue green",
    "Yellow green",
    "Yellow",
    "Orange"
  ],
  correct: 1,
  explanation: "NCERT states Chlorophyll b is 'yellow green' in the chromatogram. Chlorophyll a is bright/blue green. This is a high-frequency NEET distinction."
},
{
  id: 139,
  topic: "Photosynthetic Pigments",
  q: "Pigments are defined as substances that have the ability to:",
  options: [
    "Reflect all wavelengths of light equally",
    "Absorb light at specific wavelengths",
    "Emit light at specific wavelengths",
    "Transmit all wavelengths of light"
  ],
  correct: 1,
  explanation: "NCERT defines: 'Pigments are substances that have an ability to absorb light, at specific wavelengths.' Each pigment has a characteristic absorption spectrum."
},
{
  id: 140,
  topic: "Photosynthetic Pigments",
  q: "The most abundant plant pigment in the world is:",
  options: [
    "Chlorophyll b",
    "Carotenoids",
    "Chlorophyll a",
    "Xanthophylls"
  ],
  correct: 2,
  explanation: "Chlorophyll a is the most abundant plant pigment in the world. NCERT hints at this when it asks 'Can you guess which is the most abundant plant pigment in the world?' and then discusses chlorophyll a as the chief pigment."
},
{
  id: 141,
  topic: "Photosynthetic Pigments",
  q: "Chlorophyll a shows maximum absorption in which regions of the visible spectrum?",
  options: [
    "Green and yellow regions",
    "Blue and red regions",
    "Orange and violet regions",
    "All wavelengths equally"
  ],
  correct: 1,
  explanation: "NCERT states: 'the wavelengths at which there is maximum absorption by chlorophyll a, i.e., in the blue and the red regions.' This corresponds to the two absorption peaks of chlorophyll a."
},
{
  id: 142,
  topic: "Photosynthetic Pigments",
  q: "The chief pigment associated with photosynthesis is:",
  options: [
    "Chlorophyll b",
    "Xanthophylls",
    "Carotenoids",
    "Chlorophyll a"
  ],
  correct: 3,
  explanation: "NCERT states: 'we can conclude that chlorophyll a is the chief pigment associated with photosynthesis.' It is also called the primary photosynthetic pigment or reaction centre pigment."
},
{
  id: 143,
  topic: "Photosynthetic Pigments",
  q: "Which of the following are called accessory pigments?<br>(i) Chlorophyll a<br>(ii) Chlorophyll b<br>(iii) Xanthophylls<br>(iv) Carotenoids",
  options: [
    "(i), (ii) and (iii) only",
    "(ii), (iii) and (iv) only",
    "(i) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 1,
  explanation: "NCERT states: 'other thylakoid pigments like chlorophyll b, xanthophylls and carotenoids, which are called accessory pigments.' Chlorophyll a is the chief/primary pigment, NOT an accessory pigment."
},
{
  id: 144,
  topic: "Photosynthetic Pigments",
  q: "Accessory pigments absorb light and transfer the energy to:",
  options: [
    "Chlorophyll b",
    "Xanthophylls",
    "Chlorophyll a",
    "Carotenoids"
  ],
  correct: 2,
  explanation: "NCERT states that accessory pigments 'also absorb light and transfer the energy to chlorophyll a.' All accessory pigments funnel absorbed light energy to chlorophyll a, the reaction centre pigment."
},
{
  id: 145,
  topic: "Photosynthetic Pigments",
  q: "Accessory pigments serve two important functions. These are:<br>(i) Enable a wider range of wavelengths to be utilised<br>(ii) Protect chlorophyll a from photo-oxidation<br>(iii) Directly participate in the Calvin cycle<br>(iv) Store light energy as starch",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii)",
    "(iii) and (iv) only",
    "(i) and (iv) only"
  ],
  correct: 0,
  explanation: "NCERT states accessory pigments 'not only enable a wider range of wavelength of incoming light to be utilised for photosynthesis but also protect chlorophyll a from photo-oxidation.' Statements (iii) and (iv) are incorrect."
},
{
  id: 146,
  topic: "Photosynthetic Pigments",
  q: "<b>Assertion (A):</b> Chlorophyll a is the chief pigment associated with photosynthesis.<br><b>Reason (R):</b> The absorption spectrum of chlorophyll a closely matches the action spectrum of photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT concludes that chlorophyll a is the chief pigment because its absorption peaks (blue and red) correspond to wavelengths where maximum photosynthesis occurs. R correctly explains A."
},
{
  id: 147,
  topic: "Photosynthetic Pigments",
  q: "Is there a complete one-to-one overlap between the absorption spectrum of chlorophyll a and the action spectrum of photosynthesis?",
  options: [
    "Yes, they overlap completely",
    "No, there is no overlap at all",
    "No, there is not a complete one-to-one overlap",
    "They overlap only in the green region"
  ],
  correct: 2,
  explanation: "NCERT asks: 'can you say that there is a complete one-to-one overlap between the absorption spectrum of chlorophyll a and the action spectrum of photosynthesis?' The answer is no — because accessory pigments also contribute, and some photosynthesis occurs at other wavelengths too."
},
{
  id: 148,
  topic: "Photosynthetic Pigments",
  q: "The reason the absorption spectrum of chlorophyll a does not completely match the action spectrum of photosynthesis is:",
  options: [
    "Chlorophyll a does not participate in photosynthesis",
    "Accessory pigments also absorb light at other wavelengths and transfer energy to chlorophyll a",
    "Only green light drives photosynthesis",
    "Chlorophyll b inhibits photosynthesis at certain wavelengths"
  ],
  correct: 1,
  explanation: "Accessory pigments (Chl b, xanthophylls, carotenoids) absorb light at wavelengths not efficiently absorbed by Chl a and transfer the energy to Chl a. This broadens the action spectrum beyond the absorption spectrum of Chl a alone."
},
{
  id: 149,
  topic: "Photosynthetic Pigments",
  q: "Most of the photosynthesis takes place in which regions of the visible spectrum?",
  options: [
    "Green and yellow regions",
    "Blue and red regions",
    "Violet and orange regions only",
    "Infrared and ultraviolet regions"
  ],
  correct: 1,
  explanation: "NCERT states: 'most of the photosynthesis takes place in the blue and red regions of the spectrum.' These correspond to the absorption peaks of chlorophyll a."
},
{
  id: 150,
  topic: "Photosynthetic Pigments",
  q: "Some photosynthesis does take place at wavelengths other than blue and red. This is because:",
  options: [
    "Chlorophyll a absorbs all wavelengths equally",
    "Accessory pigments absorb light at other wavelengths and transfer energy to chlorophyll a",
    "Water molecules absorb green light",
    "CO₂ absorbs wavelengths other than blue and red"
  ],
  correct: 1,
  explanation: "NCERT states: 'some photosynthesis does take place at the other wavelengths of the visible spectrum' because accessory pigments absorb at those wavelengths and transfer the energy to chlorophyll a."
},
{
  id: 151,
  topic: "Photosynthetic Pigments",
  q: "<b>Assertion (A):</b> Carotenoids protect chlorophyll a from photo-oxidation.<br><b>Reason (R):</b> Carotenoids are accessory pigments located in thylakoid membranes.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both A and R are true. Carotenoids do protect chlorophyll a from photo-oxidation, and they are thylakoid pigments. However, R does not explain WHY carotenoids protect chlorophyll a — the protective mechanism involves quenching of excited triplet state chlorophyll and singlet oxygen, which is not stated in R."
},
{
  id: 152,
  topic: "Photosynthetic Pigments",
  q: "Which of the following is <b>NOT</b> an accessory pigment?",
  options: [
    "Chlorophyll b",
    "Xanthophylls",
    "Chlorophyll a",
    "Carotenoids"
  ],
  correct: 2,
  explanation: "Chlorophyll a is the chief/primary pigment, NOT an accessory pigment. Chlorophyll b, xanthophylls, and carotenoids are accessory pigments that absorb light and transfer energy to chlorophyll a."
},
{
  id: 153,
  topic: "Photosynthetic Pigments",
  q: "The colour of xanthophylls in a chromatogram is:",
  options: [
    "Bright green",
    "Yellow green",
    "Yellow",
    "Yellow to yellow-orange"
  ],
  correct: 2,
  explanation: "NCERT states xanthophylls are 'yellow' in the chromatogram. Carotenoids are 'yellow to yellow-orange.' Students often confuse xanthophylls with carotenoids. Xanthophylls are oxygenated carotenoids."
},
{
  id: 154,
  topic: "Photosynthetic Pigments",
  q: "The colour of carotenoids in a chromatogram is:",
  options: [
    "Yellow",
    "Bright green",
    "Yellow green",
    "Yellow to yellow-orange"
  ],
  correct: 3,
  explanation: "NCERT states carotenoids are 'yellow to yellow-orange' in the chromatogram. This distinguishes them from xanthophylls (yellow) and chlorophyll b (yellow green)."
},
{
  id: 155,
  topic: "Photosynthetic Pigments",
  q: "Consider the following about photosynthetic pigments:<br>(A) The green colour of leaves is due to a single pigment<br>(B) Four pigments contribute to the colour of leaves<br>(C) Even the same plant can show different shades of green<br>(D) Paper chromatography can separate all leaf pigments",
  options: [
    "(A), (B) and (C) only",
    "(B), (C) and (D) only",
    "(A) and (D) only",
    "All are correct"
  ],
  correct: 1,
  explanation: "Statement A is wrong — NCERT says 'the colour that we see in leaves is not due to a single pigment but due to four pigments.' Statements B, C, and D are all correct as per NCERT."
},
{
  id: 156,
  topic: "Photosynthetic Pigments",
  q: "Which of the following correctly describes the role of chlorophyll b in photosynthesis?",
  options: [
    "It is the reaction centre pigment",
    "It directly reduces CO₂ to glucose",
    "It absorbs light and transfers energy to chlorophyll a",
    "It splits water during photolysis"
  ],
  correct: 2,
  explanation: "Chlorophyll b is an accessory pigment that absorbs light (especially in blue and orange regions) and transfers the energy to chlorophyll a. It does not serve as the reaction centre pigment."
},
{
  id: 157,
  topic: "Photosynthetic Pigments",
  q: "The many shades of green in plant leaves are due to:",
  options: [
    "Different concentrations of a single pigment",
    "Different proportions of multiple pigments (Chl a, Chl b, xanthophylls, carotenoids)",
    "Differences in leaf thickness only",
    "Presence of anthocyanins in all leaves"
  ],
  correct: 1,
  explanation: "NCERT opens the section by asking why there are 'so many shades of green in leaves.' The answer is that leaves contain four pigments in different proportions, creating varying shades of green."
},
{
  id: 158,
  topic: "Photosynthetic Pigments",
  q: "<b>Assertion (A):</b> Accessory pigments enable a wider range of wavelengths to be utilised for photosynthesis.<br><b>Reason (R):</b> Accessory pigments absorb light at wavelengths not efficiently absorbed by chlorophyll a and transfer that energy to chlorophyll a.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and R correctly explains A. Because accessory pigments absorb at additional wavelengths and transfer energy to Chl a, the plant can utilise a broader range of the visible spectrum for photosynthesis."
},
{
  id: 159,
  topic: "Photosynthetic Pigments",
  q: "Photo-oxidation of chlorophyll a is prevented by:",
  options: [
    "Chlorophyll b only",
    "Accessory pigments (including carotenoids)",
    "Stroma enzymes",
    "ATP synthase"
  ],
  correct: 1,
  explanation: "NCERT states that accessory pigments 'also protect chlorophyll a from photo-oxidation.' Carotenoids are particularly known for this photoprotective role by quenching reactive oxygen species."
},
{
  id: 160,
  topic: "Photosynthetic Pigments",
  q: "Which of the following statements about the action spectrum of photosynthesis is <b>incorrect</b>?",
  options: [
    "It shows the rate of photosynthesis at different wavelengths",
    "Maximum photosynthesis occurs in blue and red regions",
    "It completely overlaps with the absorption spectrum of chlorophyll a",
    "Some photosynthesis occurs at other wavelengths of the visible spectrum"
  ],
  correct: 2,
  explanation: "NCERT clearly indicates there is NOT a complete one-to-one overlap between the absorption spectrum of Chl a and the action spectrum. The action spectrum is broader because accessory pigments also contribute."
},
{
  id: 161,
  topic: "Photosynthetic Pigments",
  q: "The absorption spectrum shows:",
  options: [
    "The rate of photosynthesis at different wavelengths",
    "The wavelengths of light absorbed by a pigment",
    "The wavelengths of light emitted by a pigment",
    "The amount of CO₂ fixed at different wavelengths"
  ],
  correct: 1,
  explanation: "An absorption spectrum shows the wavelengths (colours) of light absorbed by a particular pigment. It is different from the action spectrum, which shows the rate of photosynthesis at different wavelengths."
},
{
  id: 162,
  topic: "Photosynthetic Pigments",
  q: "The action spectrum of photosynthesis shows:",
  options: [
    "Which wavelengths are absorbed by chlorophyll a",
    "The rate of photosynthesis at different wavelengths of light",
    "The emission spectrum of chlorophyll fluorescence",
    "The reflectance of light by leaves"
  ],
  correct: 1,
  explanation: "The action spectrum depicts the rate (effectiveness) of photosynthesis at different wavelengths. NCERT discusses Figure 11.3b showing 'the wavelengths at which maximum photosynthesis occurs in a plant.'"
},
{
  id: 163,
  topic: "Photosynthetic Pigments",
  q: "Select the <b>correct</b> sequence of pigments from most to least soluble in the chromatographic solvent (as they appear from top to bottom on chromatogram):",
  options: [
    "Carotenoids → Xanthophylls → Chlorophyll a → Chlorophyll b",
    "Chlorophyll b → Chlorophyll a → Xanthophylls → Carotenoids",
    "Xanthophylls → Carotenoids → Chlorophyll b → Chlorophyll a",
    "Chlorophyll a → Chlorophyll b → Carotenoids → Xanthophylls"
  ],
  correct: 0,
  explanation: "In paper chromatography, the most soluble pigment travels the farthest. The order from top (most soluble) to bottom is: Carotenoids → Xanthophylls → Chlorophyll a → Chlorophyll b. This is a classic NEET question on Rf values."
},
{
  id: 164,
  topic: "Photosynthetic Pigments",
  q: "<b>Assertion (A):</b> The colour of leaves is due to a single pigment — chlorophyll.<br><b>Reason (R):</b> Chromatographic separation reveals only one green band from leaf extract.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "Both A and R are false",
    "A is true but R is false"
  ],
  correct: 2,
  explanation: "Both are false. The leaf colour is due to FOUR pigments (not one). Chromatographic separation reveals multiple bands — Chl a (blue-green), Chl b (yellow-green), xanthophylls (yellow), and carotenoids (yellow-orange)."
},
{
  id: 165,
  topic: "Photosynthetic Pigments",
  q: "Chlorophyll a shows absorption peaks in:",
  options: [
    "Green and yellow regions",
    "Blue and red regions",
    "Only the red region",
    "Only the blue region"
  ],
  correct: 1,
  explanation: "Chlorophyll a has two absorption peaks — one in the blue region (~430 nm) and one in the red region (~660 nm). It reflects green light, which is why leaves appear green."
},
{
  id: 166,
  topic: "Photosynthetic Pigments",
  q: "Which of the following is the reason why leaves appear green to our eyes?",
  options: [
    "Chlorophyll absorbs green light most efficiently",
    "Chlorophyll reflects and transmits green light",
    "Carotenoids absorb green light",
    "Xanthophylls emit green light"
  ],
  correct: 1,
  explanation: "Chlorophyll absorbs blue and red light strongly. Green light is reflected and transmitted, making leaves appear green to our eyes. Chlorophyll does NOT absorb green light efficiently."
},
{
  id: 167,
  topic: "Photosynthetic Pigments",
  q: "All photosynthetic pigments are located in the:",
  options: [
    "Stroma of chloroplast",
    "Thylakoid membranes",
    "Cell wall",
    "Cytoplasm"
  ],
  correct: 1,
  explanation: "NCERT refers to 'other thylakoid pigments like chlorophyll b, xanthophylls and carotenoids.' All photosynthetic pigments are embedded in the thylakoid membranes as part of photosystems."
},
{
  id: 168,
  topic: "Photosynthetic Pigments",
  q: "Consider the following statements:<br>(A) Chlorophyll a is the primary pigment<br>(B) Chlorophyll b, xanthophylls and carotenoids are accessory pigments<br>(C) Accessory pigments transfer absorbed light energy to chlorophyll b<br>(D) Accessory pigments protect chlorophyll a from photo-oxidation",
  options: [
    "(A), (B) and (D) only",
    "(A), (B), (C) and (D)",
    "(A) and (B) only",
    "(C) and (D) only"
  ],
  correct: 0,
  explanation: "Statements A, B, and D are correct. Statement C is wrong — accessory pigments transfer energy to chlorophyll a (NOT chlorophyll b). Chlorophyll a is the final energy acceptor in the antenna system."
},
{
  id: 169,
  topic: "Photosynthetic Pigments",
  q: "Which of the following pigments has the highest Rf value in paper chromatography of leaf extract?",
  options: [
    "Chlorophyll a",
    "Chlorophyll b",
    "Xanthophylls",
    "Carotenoids"
  ],
  correct: 3,
  explanation: "Carotenoids are the most soluble in the chromatographic solvent and travel the farthest, giving them the highest Rf value. The order of Rf values: Carotenoids > Xanthophylls > Chlorophyll a > Chlorophyll b."
},
{
  id: 170,
  topic: "Photosynthetic Pigments",
  q: "Which pigment has the lowest Rf value in paper chromatography?",
  options: [
    "Carotenoids",
    "Xanthophylls",
    "Chlorophyll a",
    "Chlorophyll b"
  ],
  correct: 3,
  explanation: "Chlorophyll b is the least soluble in the chromatographic solvent and travels the shortest distance, giving it the lowest Rf value. This is because it is the most polar of the four pigments."
},
{
  id: 171,
  topic: "Photosynthetic Pigments",
  q: "<b>Assertion (A):</b> The action spectrum of photosynthesis is broader than the absorption spectrum of chlorophyll a alone.<br><b>Reason (R):</b> Accessory pigments absorb light at wavelengths not efficiently absorbed by chlorophyll a and contribute to photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The action spectrum is broader than the absorption spectrum of Chl a because accessory pigments absorb additional wavelengths and transfer energy to Chl a, enabling photosynthesis across a wider range. R correctly explains A."
},
{
  id: 172,
  topic: "Photosynthetic Pigments",
  q: "Which of the following is the correct distinction between absorption spectrum and action spectrum?",
  options: [
    "Absorption spectrum shows rate of photosynthesis; action spectrum shows light absorbed by pigments",
    "Absorption spectrum shows wavelengths absorbed by a pigment; action spectrum shows rate of photosynthesis at different wavelengths",
    "Both are identical for chlorophyll a",
    "Absorption spectrum applies to whole plants; action spectrum applies to isolated pigments"
  ],
  correct: 1,
  explanation: "Absorption spectrum shows which wavelengths a pigment absorbs. Action spectrum shows the rate of a biological process (photosynthesis) at different wavelengths. They are related but not identical."
},
{
  id: 173,
  topic: "Photosynthetic Pigments",
  q: "If all accessory pigments are removed from a plant, which of the following will happen?<br>(i) Range of wavelengths usable for photosynthesis will decrease<br>(ii) Chlorophyll a will be more prone to photo-oxidation<br>(iii) Total rate of photosynthesis will decrease<br>(iv) Photosynthesis will stop completely",
  options: [
    "(i), (ii) and (iii) only",
    "(i) and (ii) only",
    "(iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 0,
  explanation: "Without accessory pigments: the range of usable wavelengths decreases (i), Chl a becomes prone to photo-oxidation (ii), and overall photosynthesis rate decreases (iii). However, photosynthesis won't stop completely (iv is wrong) because Chl a can still absorb blue and red light."
},
{
  id: 174,
  topic: "Photosynthetic Pigments",
  q: "The green colour of a leaf is due to the fact that:",
  options: [
    "Chlorophyll absorbs green light most efficiently",
    "Green light is reflected and transmitted by chlorophyll while blue and red are absorbed",
    "Carotenoids produce green pigment",
    "All wavelengths are absorbed except ultraviolet"
  ],
  correct: 1,
  explanation: "Chlorophyll absorbs blue and red light strongly. Green light is reflected and transmitted, making leaves appear green to our eyes. Chlorophyll does NOT absorb green light efficiently."
},
{
  id: 175,
  topic: "Photosynthetic Pigments",
  q: "Which of the following statements is <b>incorrect</b>?",
  options: [
    "Chlorophyll a is bright or blue green",
    "Xanthophylls are yellow to yellow-orange",
    "Carotenoids are yellow to yellow-orange",
    "Chlorophyll b is yellow green"
  ],
  correct: 1,
  explanation: "Xanthophylls are 'yellow' (not yellow to yellow-orange) as per NCERT. Carotenoids are 'yellow to yellow-orange.' Students frequently interchange the colours of xanthophylls and carotenoids — this is a classic NEET trap."
}
,
{
  id: 176,
  topic: "What is Light Reaction?",
  q: "Light reactions are also called:",
  options: [
    "Carbon reactions",
    "Biosynthetic phase",
    "Photochemical phase",
    "Dark phase"
  ],
  correct: 2,
  explanation: "NCERT states: 'Light reactions or the Photochemical phase include light absorption, water splitting, oxygen release, and the formation of high-energy chemical intermediates, ATP and NADPH.'"
},
{
  id: 177,
  topic: "What is Light Reaction?",
  q: "Which of the following are included in light reactions?<br>(i) Light absorption<br>(ii) Water splitting<br>(iii) Oxygen release<br>(iv) Formation of ATP and NADPH<br>(v) Carbon fixation",
  options: [
    "(i), (ii), (iii) and (iv) only",
    "(i), (ii), (iii), (iv) and (v)",
    "(i) and (iv) only",
    "(ii), (iii) and (v) only"
  ],
  correct: 0,
  explanation: "NCERT lists light absorption, water splitting, oxygen release, and formation of ATP and NADPH as events of light reactions. Carbon fixation occurs in the dark reactions (Calvin cycle), not in light reactions."
},
{
  id: 178,
  topic: "What is Light Reaction?",
  q: "The high-energy chemical intermediates formed during light reactions are:",
  options: [
    "Glucose and O₂",
    "ATP and NADPH",
    "NADH and FADH₂",
    "ADP and NADP⁺"
  ],
  correct: 1,
  explanation: "NCERT states light reactions involve 'the formation of high-energy chemical intermediates, ATP and NADPH.' These are also called assimilatory power. NADH and FADH₂ are produced in respiration, not in light reactions of photosynthesis."
},
{
  id: 179,
  topic: "What is Light Reaction?",
  q: "The pigments in the thylakoid membrane are organised into:",
  options: [
    "One photosystem only",
    "Two discrete photochemical light harvesting complexes within PS I and PS II",
    "Three photosystems",
    "Four independent pigment complexes"
  ],
  correct: 1,
  explanation: "NCERT states: 'The pigments are organised into two discrete photochemical light harvesting complexes (LHC) within the Photosystem I (PS I) and Photosystem II (PS II).'"
},
{
  id: 180,
  topic: "What is Light Reaction?",
  q: "PS I and PS II are named in the sequence of:",
  options: [
    "Their function during light reaction",
    "Their discovery",
    "Their size",
    "Their location in the thylakoid"
  ],
  correct: 1,
  explanation: "NCERT explicitly states: 'These are named in the sequence of their discovery, and not in the sequence in which they function during the light reaction.' PS II functions first, though it was discovered second."
},
{
  id: 181,
  topic: "What is Light Reaction?",
  q: "<b>Assertion (A):</b> PS I functions before PS II during the light reaction.<br><b>Reason (R):</b> PS I was discovered before PS II.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is FALSE — PS II functions first, not PS I. Reason is TRUE — PS I was discovered first, hence the numbering. The naming reflects discovery order, not functional order. This is a classic NEET trap."
},
{
  id: 182,
  topic: "What is Light Reaction?",
  q: "The light harvesting complexes (LHC) are made up of:",
  options: [
    "Only chlorophyll a molecules",
    "Hundreds of pigment molecules bound to proteins",
    "DNA and RNA molecules",
    "Lipids and carbohydrates"
  ],
  correct: 1,
  explanation: "NCERT states: 'The LHC are made up of hundreds of pigment molecules bound to proteins.' This includes chlorophyll a, chlorophyll b, xanthophylls, and carotenoids bound to specific proteins."
},
{
  id: 183,
  topic: "What is Light Reaction?",
  q: "Each photosystem has all the pigments forming a light harvesting system also called:",
  options: [
    "Reaction centre",
    "Stroma lamellae",
    "Antennae",
    "Grana"
  ],
  correct: 2,
  explanation: "NCERT states: 'Each photosystem has all the pigments (except one molecule of chlorophyll a) forming a light harvesting system also called antennae.' The antennae system absorbs light and funnels energy to the reaction centre."
},
{
  id: 184,
  topic: "What is Light Reaction?",
  q: "In each photosystem, the antennae system includes all pigments <b>except</b>:",
  options: [
    "Chlorophyll b",
    "Carotenoids",
    "One molecule of chlorophyll a that forms the reaction centre",
    "Xanthophylls"
  ],
  correct: 2,
  explanation: "NCERT states: 'Each photosystem has all the pigments (except one molecule of chlorophyll a) forming a light harvesting system.' That single chlorophyll a molecule forms the reaction centre, not the antennae."
},
{
  id: 185,
  topic: "What is Light Reaction?",
  q: "The reaction centre of a photosystem is formed by:",
  options: [
    "Hundreds of pigment molecules",
    "A single molecule of chlorophyll a",
    "A single molecule of chlorophyll b",
    "A complex of carotenoids"
  ],
  correct: 1,
  explanation: "NCERT states: 'The single chlorophyll a molecule forms the reaction centre.' This is the molecule that actually participates in the photochemical reaction by losing an electron."
},
{
  id: 186,
  topic: "What is Light Reaction?",
  q: "The reaction centre chlorophyll a in PS I has an absorption peak at:",
  options: [
    "680 nm",
    "700 nm",
    "430 nm",
    "660 nm"
  ],
  correct: 1,
  explanation: "NCERT states: 'In PS I the reaction centre chlorophyll a has an absorption peak at 700 nm, hence is called P700.' 680 nm is for PS II (P680)."
},
{
  id: 187,
  topic: "What is Light Reaction?",
  q: "The reaction centre chlorophyll a in PS II has absorption maxima at:",
  options: [
    "700 nm",
    "730 nm",
    "680 nm",
    "640 nm"
  ],
  correct: 2,
  explanation: "NCERT states: 'in PS II it has absorption maxima at 680 nm, and is called P680.' 700 nm is for PS I (P700). Students often swap these values."
},
{
  id: 188,
  topic: "What is Light Reaction?",
  q: "P700 refers to:",
  options: [
    "The reaction centre chlorophyll a of PS II",
    "An accessory pigment with absorption at 700 nm",
    "The reaction centre chlorophyll a of PS I with absorption peak at 700 nm",
    "A carotenoid absorbing at 700 nm"
  ],
  correct: 2,
  explanation: "P700 is the reaction centre chlorophyll a of PS I with absorption peak at 700 nm. 'P' stands for pigment. This is a high-frequency NEET question."
},
{
  id: 189,
  topic: "What is Light Reaction?",
  q: "P680 refers to:",
  options: [
    "The reaction centre chlorophyll a of PS I",
    "The reaction centre chlorophyll a of PS II with absorption maxima at 680 nm",
    "An antenna pigment in PS II",
    "A xanthophyll molecule in PS II"
  ],
  correct: 1,
  explanation: "P680 is the reaction centre chlorophyll a of PS II with absorption maxima at 680 nm. It is the pigment that initiates electron flow in the Z scheme by losing electrons upon light absorption."
},
{
  id: 190,
  topic: "What is Light Reaction?",
  q: "Match the following:<br>(i) PS I — (P) P680<br>(ii) PS II — (Q) P700<br>(iii) Antennae — (R) Single chlorophyll a molecule<br>(iv) Reaction centre — (S) Hundreds of pigment molecules",
  options: [
    "(i)-Q, (ii)-P, (iii)-S, (iv)-R",
    "(i)-P, (ii)-Q, (iii)-R, (iv)-S",
    "(i)-Q, (ii)-P, (iii)-R, (iv)-S",
    "(i)-P, (ii)-Q, (iii)-S, (iv)-R"
  ],
  correct: 0,
  explanation: "PS I = P700 (Q), PS II = P680 (P), Antennae = Hundreds of pigment molecules (S), Reaction centre = Single chlorophyll a molecule (R). This is a direct NCERT-based matching."
},
{
  id: 191,
  topic: "What is Light Reaction?",
  q: "<b>Assertion (A):</b> The reaction centre is different in both photosystems.<br><b>Reason (R):</b> PS I has P700 while PS II has P680 as their reaction centre chlorophyll a.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. The reaction centre differs because PS I has P700 (absorption at 700 nm) and PS II has P680 (absorption at 680 nm). R correctly explains how the reaction centres differ."
},
{
  id: 192,
  topic: "What is Light Reaction?",
  q: "The antennae pigments help to make photosynthesis more efficient by:",
  options: [
    "Directly fixing CO₂",
    "Absorbing different wavelengths of light",
    "Splitting water molecules",
    "Synthesising ATP"
  ],
  correct: 1,
  explanation: "NCERT states: 'These pigments help to make photosynthesis more efficient by absorbing different wavelengths of light.' The antennae system captures a wider range of light wavelengths and funnels the energy to the reaction centre."
},
{
  id: 193,
  topic: "What is Light Reaction?",
  q: "Which of the following is <b>incorrect</b> about photosystems?",
  options: [
    "Each photosystem has a light harvesting complex",
    "The LHC consists of hundreds of pigment molecules bound to proteins",
    "All pigment molecules in a photosystem form the reaction centre",
    "The reaction centre is a single chlorophyll a molecule"
  ],
  correct: 2,
  explanation: "Statement C is incorrect — NOT all pigment molecules form the reaction centre. All pigments EXCEPT one molecule of chlorophyll a form the antennae (light harvesting system). Only ONE chlorophyll a molecule forms the reaction centre."
},
{
  id: 194,
  topic: "What is Light Reaction?",
  q: "Several protein complexes are involved in the light reactions. Which of the following is <b>NOT</b> directly part of light reactions?",
  options: [
    "PS I complex",
    "PS II complex",
    "Cytochrome complex",
    "RuBisCO enzyme complex"
  ],
  correct: 3,
  explanation: "RuBisCO (Ribulose bisphosphate carboxylase/oxygenase) is involved in the Calvin cycle (dark reactions), not in light reactions. PS I, PS II, and cytochrome complexes are all involved in light reactions."
},
{
  id: 195,
  topic: "What is Light Reaction?",
  q: "Consider the following statements:<br>(A) PS I has P700 as reaction centre<br>(B) PS II has P700 as reaction centre<br>(C) PS II functions before PS I in the light reaction<br>(D) PS I was discovered first<br><br>Choose the correct statements:",
  options: [
    "(A), (C) and (D) only",
    "(A) and (B) only",
    "(B), (C) and (D) only",
    "(A), (B), (C) and (D)"
  ],
  correct: 0,
  explanation: "A is correct (PS I = P700), C is correct (PS II functions first), D is correct (PS I discovered first, hence named I). B is wrong — PS II has P680, not P700."
},
{
  id: 196,
  topic: "The Electron Transport",
  q: "In PS II, the reaction centre chlorophyll a absorbs light of wavelength:",
  options: [
    "700 nm",
    "680 nm",
    "430 nm",
    "580 nm"
  ],
  correct: 1,
  explanation: "NCERT states: 'In photosystem II the reaction centre chlorophyll a absorbs 680 nm wavelength of red light.' This causes electrons to become excited."
},
{
  id: 197,
  topic: "The Electron Transport",
  q: "When the reaction centre chlorophyll a of PS II absorbs light, the electrons:",
  options: [
    "Fall to a lower energy level",
    "Are destroyed",
    "Become excited and jump into an orbit farther from the atomic nucleus",
    "Are transferred directly to NADP⁺"
  ],
  correct: 2,
  explanation: "NCERT states that light causes 'electrons to become excited and jump into an orbit farther from the atomic nucleus.' These high-energy electrons are then captured by an electron acceptor."
},
{
  id: 198,
  topic: "The Electron Transport",
  q: "The excited electrons from PS II are picked up by an electron acceptor and passed to:",
  options: [
    "NADP⁺ directly",
    "An electron transport system consisting of cytochromes",
    "The stroma enzymes",
    "ATP synthase directly"
  ],
  correct: 1,
  explanation: "NCERT states: 'These electrons are picked up by an electron acceptor which passes them to an electron transport system consisting of cytochromes.' The electrons move downhill through this transport chain."
},
{
  id: 199,
  topic: "The Electron Transport",
  q: "The movement of electrons through the electron transport chain from PS II is described as:",
  options: [
    "Uphill in terms of redox potential",
    "Downhill in terms of redox potential",
    "At the same redox potential throughout",
    "Random in terms of energy"
  ],
  correct: 1,
  explanation: "NCERT states: 'This movement of electrons is downhill, in terms of an oxidation-reduction or redox potential scale.' Electrons move from higher energy to lower energy carriers."
},
{
  id: 200,
  topic: "The Electron Transport",
  q: "As electrons pass through the electron transport chain, they are:",
  options: [
    "Used up and destroyed",
    "Converted to protons",
    "Not used up but passed on to PS I",
    "Stored in the thylakoid lumen"
  ],
  correct: 2,
  explanation: "NCERT states: 'The electrons are not used up as they pass through the electron transport chain, but are passed on to the pigments of photosystem PS I.' Electrons are carriers of energy, not consumed."
},
{
  id: 201,
  topic: "The Electron Transport",
  q: "After passing through the electron transport chain, electrons from PS II are passed on to:",
  options: [
    "NADP⁺",
    "Water molecules",
    "The pigments of PS I",
    "ATP synthase"
  ],
  correct: 2,
  explanation: "NCERT states: 'The electrons are not used up as they pass through the electron transport chain, but are passed on to the pigments of photosystem PS I.' From PS I, they eventually reach NADP⁺."
},
{
  id: 202,
  topic: "The Electron Transport",
  q: "Electrons in the reaction centre of PS I are excited when they receive red light of wavelength:",
  options: [
    "680 nm",
    "660 nm",
    "700 nm",
    "730 nm"
  ],
  correct: 2,
  explanation: "NCERT states: 'electrons in the reaction centre of PS I are also excited when they receive red light of wavelength 700 nm.' These excited electrons are transferred to another acceptor molecule."
},
{
  id: 203,
  topic: "The Electron Transport",
  q: "The excited electrons from PS I are transferred to an acceptor molecule that has:",
  options: [
    "A lower redox potential",
    "A greater redox potential",
    "The same redox potential as PS I",
    "No redox potential"
  ],
  correct: 1,
  explanation: "NCERT states: 'transferred to another acceptor molecule that has a greater redox potential.' This means the acceptor is at a higher energy level (more negative redox potential), enabling the electrons to eventually reduce NADP⁺."
},
{
  id: 204,
  topic: "The Electron Transport",
  q: "The final electron acceptor in the Z scheme of light reactions is:",
  options: [
    "Cytochrome",
    "PS I",
    "NADP⁺",
    "Oxygen"
  ],
  correct: 2,
  explanation: "NCERT states that electrons finally move 'downhill to NADP⁺ reducing it to NADPH + H⁺.' NADP⁺ is the terminal/final electron acceptor in the light reactions."
},
{
  id: 205,
  topic: "The Electron Transport",
  q: "The reduction of NADP⁺ during light reactions produces:",
  options: [
    "NADH + H⁺",
    "NADPH + H⁺",
    "FADH₂",
    "NADP⁺ + 2H⁺"
  ],
  correct: 1,
  explanation: "NCERT states: 'The addition of these electrons reduces NADP⁺ to NADPH + H⁺.' NADPH (not NADH) is produced in photosynthesis. NADH is produced in cellular respiration."
},
{
  id: 206,
  topic: "The Electron Transport",
  q: "The Z scheme of electron transport in photosynthesis involves the flow of electrons in the sequence:",
  options: [
    "PS I → Electron transport chain → PS II → NADP⁺",
    "PS II → Electron transport chain → PS I → NADP⁺",
    "NADP⁺ → PS I → Electron transport chain → PS II",
    "PS II → NADP⁺ → PS I → Electron transport chain"
  ],
  correct: 1,
  explanation: "NCERT describes the Z scheme: 'starting from PS II, uphill to the acceptor, down the electron transport chain to PS I, excitation of electrons, transfer to another acceptor, and finally downhill to NADP⁺.' The correct order is PS II → ETC → PS I → NADP⁺."
},
{
  id: 207,
  topic: "The Electron Transport",
  q: "The Z scheme is named so because of its:",
  options: [
    "Zigzag pattern of light absorption",
    "Characteristic Z shape when carriers are placed on a redox potential scale",
    "Z-shaped structure of the thylakoid membrane",
    "Involvement of the enzyme Zymase"
  ],
  correct: 1,
  explanation: "NCERT states: 'is called the Z scheme, due to its characteristic shape. This shape is formed when all the carriers are placed in a sequence on a redox potential scale.' The alternation between uphill and downhill electron movements creates the Z shape."
},
{
  id: 208,
  topic: "The Electron Transport",
  q: "In the Z scheme, the electron flow involves:<br>(i) Uphill movement from PS II to the primary acceptor<br>(ii) Downhill movement through the electron transport chain<br>(iii) Uphill movement from PS I to another acceptor<br>(iv) Downhill movement to NADP⁺",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iv) only",
    "(i), (ii), (iii) and (iv)",
    "(ii) and (iv) only"
  ],
  correct: 2,
  explanation: "All four are correct as per NCERT: electrons go uphill from PS II to acceptor, downhill through ETC to PS I, uphill from PS I to another acceptor, then downhill to NADP⁺. This creates the characteristic Z-shaped pathway."
},
{
  id: 209,
  topic: "The Electron Transport",
  q: "<b>Assertion (A):</b> The Z scheme involves both uphill and downhill movement of electrons.<br><b>Reason (R):</b> Light energy is used to push electrons uphill at PS II and PS I, while they move downhill through the electron transport chain.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The Z scheme involves uphill movements (light-driven excitation at PS II and PS I) and downhill movements (through ETC and to NADP⁺). R correctly explains why electrons can move both uphill and downhill."
},
{
  id: 210,
  topic: "The Electron Transport",
  q: "The electron transport system in the Z scheme consists of:",
  options: [
    "Rubisco enzymes",
    "Cytochromes",
    "Calvin cycle enzymes",
    "Lipid molecules"
  ],
  correct: 1,
  explanation: "NCERT states that excited electrons from PS II are passed to 'an electron transport system consisting of cytochromes.' Cytochromes are iron-containing proteins that participate in electron transfer."
},
{
  id: 211,
  topic: "The Electron Transport",
  q: "Which of the following is the correct description of the complete Z scheme?",
  options: [
    "PS II → uphill to acceptor → downhill through ETC to PS I → excitation → uphill to acceptor → downhill to NADP⁺",
    "PS I → uphill to acceptor → downhill through ETC to PS II → excitation → uphill to acceptor → downhill to NADP⁺",
    "PS II → downhill to ETC → uphill to PS I → downhill to NADP⁺",
    "NADP⁺ → PS I → ETC → PS II → H₂O"
  ],
  correct: 0,
  explanation: "NCERT describes the complete Z scheme as: 'starting from the PS II, uphill to the acceptor, down the electron transport chain to PS I, excitation of electrons, transfer to another acceptor, and finally downhill to NADP⁺ reducing it to NADPH + H⁺.'"
},
{
  id: 212,
  topic: "The Electron Transport",
  q: "<b>Assertion (A):</b> Electrons in the Z scheme start from PS I and end at PS II.<br><b>Reason (R):</b> PS I was discovered before PS II.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "Assertion is FALSE — electrons start from PS II and end at NADP⁺ (passing through PS I). Reason is TRUE — PS I was indeed discovered first. The naming does not reflect functional order."
},
{
  id: 213,
  topic: "The Electron Transport",
  q: "During the Z scheme, the reduction of NADP⁺ to NADPH + H⁺ involves the addition of:",
  options: [
    "Protons only",
    "Electrons from PS I acceptor",
    "Electrons and protons",
    "ATP molecules"
  ],
  correct: 2,
  explanation: "NCERT states: 'The addition of these electrons reduces NADP⁺ to NADPH + H⁺.' The reduction requires both electrons (from the electron transport chain via PS I) and protons (H⁺) to form NADPH."
},
{
  id: 214,
  topic: "The Electron Transport",
  q: "Which of the following correctly represents the redox potential changes in the Z scheme?",
  options: [
    "Continuously downhill from PS II to NADP⁺",
    "Continuously uphill from PS II to NADP⁺",
    "Uphill at PS II, downhill through ETC, uphill at PS I, downhill to NADP⁺",
    "Random changes with no pattern"
  ],
  correct: 2,
  explanation: "The Z scheme involves alternating uphill and downhill movements: uphill at PS II (light-driven), downhill through ETC, uphill at PS I (light-driven), downhill to NADP⁺. This creates the characteristic Z shape on a redox potential scale."
},
{
  id: 215,
  topic: "What is Light Reaction?",
  q: "Which of the following processes does <b>NOT</b> occur during light reactions?",
  options: [
    "Water splitting",
    "Oxygen release",
    "Carbon fixation",
    "Formation of ATP and NADPH"
  ],
  correct: 2,
  explanation: "Carbon fixation occurs during the dark reactions (Calvin cycle), not during light reactions. Light reactions involve light absorption, water splitting, O₂ release, and formation of ATP and NADPH."
},
{
  id: 216,
  topic: "What is Light Reaction?",
  q: "<b>Assertion (A):</b> The antennae system of a photosystem consists of all pigment molecules including the reaction centre chlorophyll a.<br><b>Reason (R):</b> All pigments in a photosystem function as light harvesting molecules.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  correct: 3,
  explanation: "Both are false. Assertion is false because NCERT says 'all the pigments (except one molecule of chlorophyll a) forming a light harvesting system.' The reaction centre Chl a is NOT part of the antennae. Reason is also false because the reaction centre Chl a does not function as a light harvesting molecule — it undergoes the photochemical reaction."
},
{
  id: 217,
  topic: "The Electron Transport",
  q: "Consider the following statements about the Z scheme:<br>(A) It starts from PS II<br>(B) It ends with the reduction of NADP⁺<br>(C) Cytochromes are involved in electron transport<br>(D) Electrons are used up during the process<br><br>Which statements are correct?",
  options: [
    "(A), (B) and (C) only",
    "(A) and (B) only",
    "(A), (B), (C) and (D)",
    "(B), (C) and (D) only"
  ],
  correct: 0,
  explanation: "Statements A, B, and C are correct. Statement D is wrong — NCERT states 'The electrons are not used up as they pass through the electron transport chain.' Electrons are transferred, not consumed."
},
{
  id: 218,
  topic: "The Electron Transport",
  q: "The term 'downhill' movement of electrons in the context of the Z scheme refers to:",
  options: [
    "Physical movement of electrons downward in the thylakoid",
    "Movement from higher to lower redox potential (releasing energy)",
    "Movement from stroma to lumen",
    "Movement against the concentration gradient"
  ],
  correct: 1,
  explanation: "NCERT describes electron movement as 'downhill, in terms of an oxidation-reduction or redox potential scale.' This means electrons move from carriers with higher energy (more negative redox potential) to those with lower energy, releasing energy in the process."
},
{
  id: 219,
  topic: "What is Light Reaction?",
  q: "How many molecules of chlorophyll a form the reaction centre in each photosystem?",
  options: [
    "Hundreds",
    "Two",
    "One",
    "Ten"
  ],
  correct: 2,
  explanation: "NCERT states: 'The single chlorophyll a molecule forms the reaction centre.' Only ONE molecule of chlorophyll a acts as the reaction centre in each photosystem."
},
{
  id: 220,
  topic: "The Electron Transport",
  q: "Select the <b>incorrect</b> statement about the Z scheme:",
  options: [
    "Electrons flow from PS II to PS I",
    "The Z shape is formed when carriers are placed on a redox potential scale",
    "NADP⁺ is reduced to NADPH + H⁺",
    "Electrons flow from PS I to PS II"
  ],
  correct: 3,
  explanation: "Electrons flow from PS II to PS I (not PS I to PS II). The Z scheme clearly shows the direction: PS II → ETC → PS I → NADP⁺. Option D reverses this flow and is incorrect."
},
{
  id: 221,
  topic: "What is Light Reaction?",
  q: "Which of the following is correct about PS II?<br>(i) Reaction centre is P680<br>(ii) It absorbs light at 700 nm<br>(iii) It functions first in the Z scheme<br>(iv) Its electrons are passed to cytochromes",
  options: [
    "(i), (iii) and (iv) only",
    "(i) and (ii) only",
    "(i), (ii), (iii) and (iv)",
    "(ii) and (iv) only"
  ],
  correct: 0,
  explanation: "Statement (ii) is wrong — PS II absorbs at 680 nm, not 700 nm. Statements (i), (iii), and (iv) are all correct as per NCERT. PS II has P680, functions first, and sends electrons to the ETC (cytochromes)."
},
{
  id: 222,
  topic: "The Electron Transport",
  q: "The 'uphill' movement of electrons in the Z scheme occurs at:",
  options: [
    "The cytochrome complex only",
    "PS II and PS I when light excites the reaction centre chlorophyll",
    "NADP⁺ reductase only",
    "The electron transport chain between PS II and PS I"
  ],
  correct: 1,
  explanation: "Uphill movement occurs at both PS II and PS I where light energy excites electrons to higher energy levels. The downhill movement occurs through the ETC (between PS II and PS I) and from PS I acceptor to NADP⁺."
},
{
  id: 223,
  topic: "The Electron Transport",
  q: "<b>Assertion (A):</b> NADPH is produced only in the Z scheme of non-cyclic electron transport.<br><b>Reason (R):</b> Electrons from PS I are finally passed to NADP⁺ reducing it to NADPH + H⁺.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The Z scheme (non-cyclic electron flow) is the pathway that produces NADPH because electrons from PS I are transferred to NADP⁺. In cyclic electron flow, electrons return to PS I and no NADPH is formed. R correctly explains A."
},
{
  id: 224,
  topic: "What is Light Reaction?",
  q: "Which of the following is common to both PS I and PS II?",
  options: [
    "Same absorption wavelength for the reaction centre",
    "Presence of a light harvesting complex with multiple pigments",
    "Same reaction centre chlorophyll a (P700)",
    "Both produce NADPH directly"
  ],
  correct: 1,
  explanation: "Both PS I and PS II have a light harvesting complex (LHC/antennae) made of hundreds of pigment molecules bound to proteins. Their reaction centres differ (P700 vs P680), and only PS I pathway leads to NADPH formation."
},
{
  id: 225,
  topic: "The Electron Transport",
  q: "In the Z scheme, energy is used to push electrons 'uphill' at two points. The source of this energy is:",
  options: [
    "ATP hydrolysis",
    "Heat from cellular respiration",
    "Light energy absorbed by the photosystems",
    "Chemical energy from glucose"
  ],
  correct: 2,
  explanation: "Light energy absorbed by PS II (680 nm) and PS I (700 nm) provides the energy needed to excite electrons to higher energy levels (uphill movement). This is why these are called 'light reactions.'"
},
{
  id: 226,
  topic: "What is Light Reaction?",
  q: "Which photosystem functions <b>first</b> during the light reaction?",
  options: [
    "PS I",
    "PS II",
    "Both function simultaneously without any order",
    "Neither — cyclic electron flow occurs first"
  ],
  correct: 1,
  explanation: "PS II functions first in the Z scheme. NCERT clarifies that PS I and PS II are named in the order of their discovery, not their functional order. PS II (P680) initiates the electron flow."
},
{
  id: 227,
  topic: "The Electron Transport",
  q: "What happens to the electrons that are excited in PS II after they complete the electron transport chain?",
  options: [
    "They are lost to the environment",
    "They return to PS II",
    "They are passed to PS I",
    "They reduce CO₂ directly"
  ],
  correct: 2,
  explanation: "NCERT states: 'The electrons are not used up as they pass through the electron transport chain, but are passed on to the pigments of photosystem PS I.' From there, they undergo further excitation and ultimately reduce NADP⁺."
},
{
  id: 228,
  topic: "The Electron Transport",
  q: "The Z scheme describes electron flow in:",
  options: [
    "Cyclic photophosphorylation",
    "Non-cyclic electron transport",
    "The Calvin cycle",
    "Glycolysis"
  ],
  correct: 1,
  explanation: "The Z scheme describes non-cyclic electron transport involving both PS II and PS I, where electrons flow from water to NADP⁺. Cyclic electron flow involves only PS I and does not form a Z shape."
},
{
  id: 229,
  topic: "What is Light Reaction?",
  q: "Consider the following:<br>(A) Light absorption is part of light reactions<br>(B) Water splitting is part of dark reactions<br>(C) ATP formation occurs in light reactions<br>(D) NADPH formation occurs in light reactions",
  options: [
    "(A), (C) and (D) only",
    "(A) and (C) only",
    "(A), (B), (C) and (D)",
    "(B), (C) and (D) only"
  ],
  correct: 0,
  explanation: "Statements A, C, and D are correct — all are part of light reactions. Statement B is wrong — water splitting (photolysis) is part of light reactions, NOT dark reactions."
},
{
  id: 230,
  topic: "The Electron Transport",
  q: "Which of the following best describes the redox potential of the acceptor molecule of PS I compared to PS I reaction centre?",
  options: [
    "Lower redox potential (less negative)",
    "Greater redox potential (more negative)",
    "Same redox potential",
    "Zero redox potential"
  ],
  correct: 1,
  explanation: "NCERT states electrons from PS I 'are transferred to another acceptor molecule that has a greater redox potential.' A greater (more negative) redox potential means the acceptor is at a higher energy level, capable of eventually reducing NADP⁺."
},
{
  id: 231,
  topic: "What is Light Reaction?",
  q: "Which of the following is <b>incorrect</b> about the light harvesting complex (LHC)?",
  options: [
    "It is present within both PS I and PS II",
    "It consists of hundreds of pigment molecules bound to proteins",
    "It includes the reaction centre chlorophyll a molecule",
    "It is also called the antennae system"
  ],
  correct: 2,
  explanation: "The LHC/antennae system includes all pigments EXCEPT the single molecule of chlorophyll a that forms the reaction centre. NCERT states: 'all the pigments (except one molecule of chlorophyll a) forming a light harvesting system also called antennae.'"
},
{
  id: 232,
  topic: "The Electron Transport",
  q: "<b>Assertion (A):</b> The electrons are used up as they pass through the electron transport chain.<br><b>Reason (R):</b> Electrons lose all their energy while moving through cytochromes.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "Both A and R are false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Both are false. NCERT explicitly states: 'The electrons are not used up as they pass through the electron transport chain, but are passed on to the pigments of photosystem PS I.' Electrons lose some energy (not all) during downhill movement."
},
{
  id: 233,
  topic: "The Electron Transport",
  q: "The sequence of events in the Z scheme on a redox potential scale creates a shape resembling the letter:",
  options: [
    "S",
    "W",
    "N",
    "Z"
  ],
  correct: 3,
  explanation: "NCERT states it 'is called the Z scheme, due to its characteristic shape. This shape is formed when all the carriers are placed in a sequence on a redox potential scale.' The alternating uphill-downhill-uphill-downhill pattern creates a Z shape."
},
{
  id: 234,
  topic: "What is Light Reaction?",
  q: "The wavelength 680 nm falls in which region of the visible spectrum?",
  options: [
    "Blue region",
    "Green region",
    "Red region",
    "Violet region"
  ],
  correct: 2,
  explanation: "Both 680 nm and 700 nm fall in the red region of the visible spectrum. NCERT states PS II 'absorbs 680 nm wavelength of red light.' The red region of visible light spans approximately 620-750 nm."
},
{
  id: 235,
  topic: "What is Light Reaction?",
  q: "Which statement correctly differentiates PS I from PS II?",
  options: [
    "PS I has P680, PS II has P700",
    "PS I functions first, PS II functions second",
    "PS I has P700 and was discovered first; PS II has P680 and functions first",
    "PS I is in stroma, PS II is in thylakoid membrane"
  ],
  correct: 2,
  explanation: "PS I has P700 (absorption at 700 nm) and was discovered first. PS II has P680 (absorption at 680 nm) and functions first in the light reaction. Both are located in the thylakoid membrane."
},
{
  id: 236,
  topic: "The Electron Transport",
  q: "If PS I is functional but PS II is non-functional, which of the following will occur?",
  options: [
    "Both ATP and NADPH will be produced normally",
    "Only cyclic electron flow can occur; no water splitting, no NADPH production from non-cyclic flow",
    "Only NADPH will be produced",
    "Both water splitting and NADPH production will continue normally"
  ],
  correct: 1,
  explanation: "If PS II is non-functional, the Z scheme (non-cyclic electron flow) cannot operate. Water splitting won't occur (no O₂ release). Only cyclic electron flow around PS I can function, producing ATP but not NADPH."
},
{
  id: 237,
  topic: "The Electron Transport",
  q: "The electron transport chain between PS II and PS I serves to:",
  options: [
    "Transfer electrons downhill from PS II acceptor to PS I",
    "Transfer electrons uphill using light energy",
    "Directly reduce NADP⁺",
    "Split water molecules"
  ],
  correct: 0,
  explanation: "The ETC (consisting of cytochromes) transfers electrons downhill (in terms of redox potential) from the PS II primary acceptor to the PS I pigments. This downhill flow releases energy used for ATP synthesis (chemiosmosis)."
},
{
  id: 238,
  topic: "What is Light Reaction?",
  q: "Which of the following pairs of wavelengths are absorbed by the reaction centres of PS I and PS II respectively?",
  options: [
    "680 nm and 700 nm",
    "700 nm and 680 nm",
    "430 nm and 660 nm",
    "660 nm and 430 nm"
  ],
  correct: 1,
  explanation: "PS I reaction centre (P700) absorbs at 700 nm, and PS II reaction centre (P680) absorbs at 680 nm. The question asks for PS I and PS II respectively, so the answer is 700 nm and 680 nm."
}
,
{
  id: 239,
  topic: "Splitting of Water",
  q: "The splitting of water during photosynthesis is associated with:",
  options: [
    "PS I",
    "PS II",
    "Stroma",
    "Cytochrome complex"
  ],
  correct: 1,
  explanation: "NCERT states: 'The splitting of water is associated with the PS II.' PS II is responsible for photolysis of water, which provides electrons, protons, and oxygen."
},
{
  id: 240,
  topic: "Splitting of Water",
  q: "The products of water splitting during photosynthesis are:",
  options: [
    "H₂ and O₂",
    "2H⁺, [O] and electrons",
    "H₂O₂ and electrons",
    "OH⁻ and H⁺"
  ],
  correct: 1,
  explanation: "NCERT states: 'water is split into 2H⁺, [O] and electrons.' The [O] combines to form O₂, which is a net product of photosynthesis."
},
{
  id: 241,
  topic: "Splitting of Water",
  q: "The complete equation for water splitting in photosynthesis is:",
  options: [
    "H₂O → H⁺ + OH⁻",
    "2H₂O → 4H⁺ + O₂ + 4e⁻",
    "H₂O → H₂ + O",
    "2H₂O → 2H₂ + O₂"
  ],
  correct: 1,
  explanation: "NCERT gives the equation: 2H₂O → 4H⁺ + O₂ + 4e⁻. Two water molecules are split to produce four protons, one molecule of oxygen, and four electrons."
},
{
  id: 242,
  topic: "Splitting of Water",
  q: "The electrons lost from PS II are replaced by:",
  options: [
    "Electrons from PS I",
    "Electrons from NADPH",
    "Electrons from splitting of water",
    "Electrons from the cytochrome complex"
  ],
  correct: 2,
  explanation: "NCERT states: 'The electrons that were moved from photosystem II must be replaced. This is achieved by electrons available due to splitting of water.' Water acts as the ultimate electron donor in photosynthesis."
},
{
  id: 243,
  topic: "Splitting of Water",
  q: "The electrons needed to replace those removed from PS I are provided by:",
  options: [
    "Water directly",
    "NADPH",
    "PS II",
    "ATP"
  ],
  correct: 2,
  explanation: "NCERT states: 'The electrons needed to replace those removed from photosystem I are provided by photosystem II.' PS II passes electrons through the ETC to PS I, replacing its lost electrons."
},
{
  id: 244,
  topic: "Splitting of Water",
  q: "<b>Assertion (A):</b> Oxygen is produced during the light reactions of photosynthesis.<br><b>Reason (R):</b> Oxygen is released as a result of splitting of water associated with PS II.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. O₂ is indeed produced during light reactions, and it comes from the splitting of water associated with PS II. NCERT says: 'This creates oxygen, one of the net products of photosynthesis.' R correctly explains A."
},
{
  id: 245,
  topic: "Splitting of Water",
  q: "The water splitting complex is physically located on:",
  options: [
    "The outer side of the thylakoid membrane",
    "The inner side of the membrane of the thylakoid",
    "The stroma of the chloroplast",
    "The outer membrane of the chloroplast"
  ],
  correct: 1,
  explanation: "NCERT states: 'the water splitting complex is associated with the PS II, which itself is physically located on the inner side of the membrane of the thylakoid.' This means it faces the thylakoid lumen."
},
{
  id: 246,
  topic: "Splitting of Water",
  q: "The protons (H⁺) and O₂ released during water splitting are released into:",
  options: [
    "The stroma",
    "The cytoplasm",
    "The thylakoid lumen",
    "The outer membrane space"
  ],
  correct: 2,
  explanation: "Since the water splitting complex is located on the inner side of the thylakoid membrane, the protons (H⁺) and O₂ are released into the thylakoid lumen (inner side of thylakoid). NCERT hints at this with its question about the lumen."
},
{
  id: 247,
  topic: "Splitting of Water",
  q: "How many electrons are released when 2 molecules of water are split?",
  options: [
    "2",
    "6",
    "4",
    "8"
  ],
  correct: 2,
  explanation: "From the equation: 2H₂O → 4H⁺ + O₂ + 4e⁻, four electrons are released when two water molecules are split."
},
{
  id: 248,
  topic: "Splitting of Water",
  q: "How many protons (H⁺) are released when 2 molecules of water are split?",
  options: [
    "2",
    "4",
    "6",
    "8"
  ],
  correct: 1,
  explanation: "From the equation: 2H₂O → 4H⁺ + O₂ + 4e⁻, four protons (H⁺) are released when two water molecules are split."
},
{
  id: 249,
  topic: "Splitting of Water",
  q: "<b>Assertion (A):</b> PS II continuously requires a supply of electrons.<br><b>Reason (R):</b> The excited electrons from PS II are passed to the electron transport chain and need to be replaced.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. PS II continuously loses electrons (which are excited and passed to the ETC), so it needs a constant supply of replacement electrons. These come from water splitting. R correctly explains A."
},
{
  id: 250,
  topic: "Splitting of Water",
  q: "Which of the following is a net product of photosynthesis produced during water splitting?",
  options: [
    "ATP",
    "NADPH",
    "Oxygen",
    "Glucose"
  ],
  correct: 2,
  explanation: "NCERT states: 'This creates oxygen, one of the net products of photosynthesis.' O₂ is released from water splitting. ATP and NADPH are intermediates, and glucose is produced in dark reactions."
},
{
  id: 251,
  topic: "Splitting of Water",
  q: "Which of the following is <b>incorrect</b> about the splitting of water?",
  options: [
    "It is associated with PS II",
    "It produces H⁺, O₂ and electrons",
    "It occurs on the outer side of the thylakoid membrane",
    "It provides electrons to replace those lost from PS II"
  ],
  correct: 2,
  explanation: "Water splitting occurs on the INNER side of the thylakoid membrane (lumen side), not the outer side. NCERT states that 'PS II, which itself is physically located on the inner side of the membrane of the thylakoid.'"
},
{
  id: 252,
  topic: "Splitting of Water",
  q: "The accumulation of H⁺ ions in the thylakoid lumen due to water splitting contributes to:",
  options: [
    "Carbon fixation",
    "Creating a proton gradient for ATP synthesis",
    "NADPH formation directly",
    "Starch synthesis"
  ],
  correct: 1,
  explanation: "The H⁺ ions released into the lumen by water splitting contribute to the proton gradient across the thylakoid membrane. This gradient drives ATP synthesis through chemiosmosis via ATP synthase."
},
{
  id: 253,
  topic: "Splitting of Water",
  q: "In the equation 2H₂O → 4H⁺ + O₂ + 4e⁻, the water molecule acts as:",
  options: [
    "An electron acceptor",
    "An electron donor",
    "A proton acceptor",
    "An enzyme"
  ],
  correct: 1,
  explanation: "Water acts as an electron donor in the light reactions. It donates electrons to replace those lost from PS II. The oxidation of water releases electrons, protons, and O₂."
},
{
  id: 254,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Phosphorylation is defined as:",
  options: [
    "The breakdown of ATP to ADP",
    "The synthesis of ATP from ADP and inorganic phosphate",
    "The synthesis of NADPH from NADP⁺",
    "The splitting of water molecules"
  ],
  correct: 1,
  explanation: "NCERT states: 'The process through which ATP is synthesised by cells (in mitochondria and chloroplasts) is named phosphorylation.' It involves adding a phosphate group to ADP to form ATP."
},
{
  id: 255,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Photophosphorylation is the synthesis of ATP from ADP and inorganic phosphate:",
  options: [
    "In the absence of light",
    "In the presence of light",
    "Only in mitochondria",
    "Only during dark reactions"
  ],
  correct: 1,
  explanation: "NCERT defines: 'Photophosphorylation is the synthesis of ATP from ADP and inorganic phosphate in the presence of light.' The prefix 'photo' indicates light-dependent ATP synthesis."
},
{
  id: 256,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Non-cyclic photophosphorylation occurs when:",
  options: [
    "Only PS I is functional",
    "Only PS II is functional",
    "Both PS I and PS II work in series, first PS II then PS I",
    "Neither PS I nor PS II is functional"
  ],
  correct: 2,
  explanation: "NCERT states: 'When the two photosystems work in a series, first PS II and then the PS I, a process called non-cyclic photo-phosphorylation occurs.' Both photosystems are required."
},
{
  id: 257,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "The products of non-cyclic photophosphorylation are:",
  options: [
    "Only ATP",
    "Only NADPH + H⁺",
    "Both ATP and NADPH + H⁺",
    "Only O₂"
  ],
  correct: 2,
  explanation: "NCERT states: 'Both ATP and NADPH + H⁺ are synthesised by this kind of electron flow.' Non-cyclic flow (Z scheme) produces both ATP and NADPH."
},
{
  id: 258,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Cyclic photophosphorylation occurs when:",
  options: [
    "Both PS I and PS II are functional",
    "Only PS II is functional",
    "Only PS I is functional",
    "Neither photosystem is functional"
  ],
  correct: 2,
  explanation: "NCERT states: 'When only PS I is functional, the electron is circulated within the photosystem and the phosphorylation occurs due to cyclic flow of electrons.' Only PS I is involved in cyclic photophosphorylation."
},
{
  id: 259,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "In cyclic photophosphorylation, the excited electron from PS I:",
  options: [
    "Passes to NADP⁺ and reduces it",
    "Is cycled back to the PS I complex through the electron transport chain",
    "Is transferred to PS II",
    "Is used to split water"
  ],
  correct: 1,
  explanation: "NCERT states: 'The excited electron does not pass on to NADP⁺ but is cycled back to the PS I complex through the electron transport chain.' This cyclic flow produces only ATP."
},
{
  id: 260,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "A possible location where cyclic photophosphorylation could be happening is:",
  options: [
    "Grana lamellae",
    "Stroma lamellae",
    "Stroma matrix",
    "Outer membrane of chloroplast"
  ],
  correct: 1,
  explanation: "NCERT states: 'A possible location where this could be happening is in the stroma lamellae.' This is because stroma lamellae lack PS II and NADP reductase enzyme."
},
{
  id: 261,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "The stroma lamellae membranes lack:<br>(i) PS I<br>(ii) PS II<br>(iii) NADP reductase enzyme<br>(iv) ATP synthase",
  options: [
    "(i) and (iii) only",
    "(ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(ii) only"
  ],
  correct: 1,
  explanation: "NCERT states: 'the stroma lamellae membranes lack PS II as well as NADP reductase enzyme.' PS I is present in stroma lamellae (otherwise cyclic photophosphorylation couldn't occur there)."
},
{
  id: 262,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "The grana lamellae (thylakoid membranes of grana) contain:",
  options: [
    "Only PS I",
    "Only PS II",
    "Both PS I and PS II",
    "Neither PS I nor PS II"
  ],
  correct: 2,
  explanation: "NCERT states: 'the membrane or lamellae of the grana have both PS I and PS II.' Non-cyclic photophosphorylation involving both photosystems occurs in the grana."
},
{
  id: 263,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Cyclic photophosphorylation results in the synthesis of:",
  options: [
    "Both ATP and NADPH + H⁺",
    "Only NADPH + H⁺",
    "Only ATP",
    "Neither ATP nor NADPH"
  ],
  correct: 2,
  explanation: "NCERT states: 'The cyclic flow hence, results only in the synthesis of ATP, but not of NADPH + H⁺.' Since electrons cycle back to PS I without reaching NADP⁺, no NADPH is formed."
},
{
  id: 264,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "<b>Assertion (A):</b> Cyclic photophosphorylation does not produce NADPH + H⁺.<br><b>Reason (R):</b> In cyclic flow, the excited electron does not pass to NADP⁺ but is cycled back to PS I.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. Since the excited electron returns to PS I instead of reducing NADP⁺, no NADPH is produced. R correctly explains why A is true."
},
{
  id: 265,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Cyclic photophosphorylation also occurs when only light of wavelengths:",
  options: [
    "Below 680 nm are available",
    "Beyond 680 nm are available for excitation",
    "Exactly 680 nm are available",
    "In the green region are available"
  ],
  correct: 1,
  explanation: "NCERT states: 'Cyclic photophosphorylation also occurs when only light of wavelengths beyond 680 nm are available for excitation.' Light beyond 680 nm can excite PS I (P700) but not PS II (P680)."
},
{
  id: 266,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "When only light of wavelengths beyond 680 nm is available:<br>(i) PS I can be excited<br>(ii) PS II can be excited<br>(iii) Only cyclic electron flow occurs<br>(iv) Both ATP and NADPH are produced",
  options: [
    "(i) and (iii) only",
    "(ii) and (iv) only",
    "(i), (ii), (iii) and (iv)",
    "(i), (iii) and (iv) only"
  ],
  correct: 0,
  explanation: "Light beyond 680 nm can excite PS I (P700 absorbs at 700 nm) but NOT PS II (P680 requires 680 nm or shorter wavelength). Only cyclic flow occurs, producing only ATP (not NADPH). So (i) and (iii) are correct."
},
{
  id: 267,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Which of the following correctly distinguishes non-cyclic from cyclic photophosphorylation?",
  options: [
    "Non-cyclic involves only PS I; cyclic involves both PS I and PS II",
    "Non-cyclic produces only ATP; cyclic produces both ATP and NADPH",
    "Non-cyclic involves both PS I and PS II and produces ATP + NADPH; cyclic involves only PS I and produces only ATP",
    "Non-cyclic occurs in stroma lamellae; cyclic occurs in grana"
  ],
  correct: 2,
  explanation: "Non-cyclic photophosphorylation involves both PS I and PS II (Z scheme) and produces both ATP and NADPH. Cyclic involves only PS I and produces only ATP. Non-cyclic occurs in grana; cyclic possibly in stroma lamellae."
},
{
  id: 268,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "ATP is synthesised in cells through phosphorylation in:",
  options: [
    "Mitochondria only",
    "Chloroplasts only",
    "Both mitochondria and chloroplasts",
    "Nucleus and ribosomes"
  ],
  correct: 2,
  explanation: "NCERT states: 'The process through which ATP is synthesised by cells (in mitochondria and chloroplasts) is named phosphorylation.' Mitochondria (oxidative) and chloroplasts (photo) both synthesise ATP."
},
{
  id: 269,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "<b>Assertion (A):</b> Cyclic photophosphorylation possibly occurs in stroma lamellae.<br><b>Reason (R):</b> Stroma lamellae lack PS II and NADP reductase enzyme.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Because stroma lamellae lack PS II and NADP reductase, only PS I-mediated cyclic electron flow can occur there, making them a possible location for cyclic photophosphorylation. R correctly explains A."
},
{
  id: 270,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "In non-cyclic photophosphorylation, the two photosystems are connected through:",
  options: [
    "Direct physical contact",
    "An electron transport chain (Z scheme)",
    "The Calvin cycle",
    "Starch granules"
  ],
  correct: 1,
  explanation: "NCERT states: 'The two photosystems are connected through an electron transport chain, as seen earlier – in the Z scheme.' The ETC (including cytochromes) links PS II to PS I."
},
{
  id: 271,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Consider the following table:<br><br>| Feature | Non-cyclic | Cyclic |<br>|---------|-----------|--------|<br>| PS involved | (A) | (B) |<br>| Products | (C) | (D) |<br><br>Select the correct combination:",
  options: [
    "(A) PS I + PS II, (B) PS I only, (C) ATP + NADPH, (D) ATP only",
    "(A) PS I only, (B) PS I + PS II, (C) ATP only, (D) ATP + NADPH",
    "(A) PS II only, (B) PS I only, (C) NADPH only, (D) ATP only",
    "(A) PS I + PS II, (B) PS II only, (C) ATP + NADPH, (D) NADPH only"
  ],
  correct: 0,
  explanation: "Non-cyclic: PS I + PS II → ATP + NADPH. Cyclic: PS I only → ATP only. This is a direct comparison from NCERT content."
},
{
  id: 272,
  topic: "Splitting of Water",
  q: "Consider the following statements:<br>(A) Water splitting is associated with PS I<br>(B) O₂ produced in photosynthesis comes from water<br>(C) Water acts as the electron donor in photosynthesis<br>(D) Water splitting occurs on the inner side of the thylakoid membrane",
  options: [
    "(A), (B) and (C) only",
    "(B), (C) and (D) only",
    "(A), (B), (C) and (D)",
    "(B) and (D) only"
  ],
  correct: 1,
  explanation: "Statement A is wrong — water splitting is associated with PS II, not PS I. Statements B, C, and D are all correct as per NCERT."
},
{
  id: 273,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Living organisms extract energy from oxidisable substances and store it in the form of:",
  options: [
    "Heat energy",
    "Bond energy in ATP",
    "Light energy",
    "Sound energy"
  ],
  correct: 1,
  explanation: "NCERT states: 'Living organisms have the capability of extracting energy from oxidisable substances and store this in the form of bond energy. Special substances like ATP, carry this energy in their chemical bonds.'"
},
{
  id: 274,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Which of the following is <b>incorrect</b> about cyclic photophosphorylation?",
  options: [
    "It involves only PS I",
    "Electrons are cycled back to PS I",
    "It produces both ATP and NADPH",
    "It may occur in stroma lamellae"
  ],
  correct: 2,
  explanation: "Cyclic photophosphorylation produces only ATP, NOT NADPH. NCERT states: 'The cyclic flow hence, results only in the synthesis of ATP, but not of NADPH + H⁺.' All other statements are correct."
},
{
  id: 275,
  topic: "Splitting of Water",
  q: "<b>Assertion (A):</b> Water splitting releases protons into the thylakoid lumen.<br><b>Reason (R):</b> The water splitting complex is located on the inner side of the thylakoid membrane.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Since the water splitting complex is on the inner side (lumen side) of the thylakoid membrane, the H⁺ ions and O₂ are released into the lumen. R correctly explains why protons accumulate in the lumen."
},
{
  id: 276,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "If light of wavelength 700 nm but NOT 680 nm is provided to a plant, which type of photophosphorylation will occur?",
  options: [
    "Non-cyclic photophosphorylation",
    "Both cyclic and non-cyclic",
    "Cyclic photophosphorylation only",
    "Neither cyclic nor non-cyclic"
  ],
  correct: 2,
  explanation: "700 nm light excites PS I (P700) but cannot excite PS II (P680 needs ≤680 nm). Without PS II, non-cyclic flow cannot occur. Only cyclic photophosphorylation (PS I only) will take place, producing only ATP."
},
{
  id: 277,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "NADP reductase enzyme is absent in:",
  options: [
    "Grana lamellae",
    "Stroma lamellae",
    "Stroma matrix",
    "Both grana and stroma lamellae"
  ],
  correct: 1,
  explanation: "NCERT states: 'the stroma lamellae membranes lack PS II as well as NADP reductase enzyme.' This is why NADPH cannot be produced during cyclic photophosphorylation in stroma lamellae."
},
{
  id: 278,
  topic: "Splitting of Water",
  q: "How many water molecules need to be split to release one molecule of O₂?",
  options: [
    "1",
    "2",
    "4",
    "6"
  ],
  correct: 1,
  explanation: "From the equation: 2H₂O → 4H⁺ + O₂ + 4e⁻, two water molecules must be split to release one molecule of O₂."
},
{
  id: 279,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "In non-cyclic photophosphorylation, which photosystem functions first?",
  options: [
    "PS I",
    "PS II",
    "Both function simultaneously",
    "Neither — only ETC functions"
  ],
  correct: 1,
  explanation: "NCERT states: 'the two photosystems work in a series, first PS II and then the PS I.' PS II (P680) absorbs light first, then electrons pass through the ETC to PS I (P700)."
},
{
  id: 280,
  topic: "Splitting of Water",
  q: "The ultimate source of electrons for the photosynthetic electron transport chain is:",
  options: [
    "NADPH",
    "ATP",
    "Water",
    "Carbon dioxide"
  ],
  correct: 2,
  explanation: "Water is the ultimate electron donor in photosynthesis. Water splitting provides electrons to replace those lost from PS II, which ultimately drive the entire Z scheme. Without water, the electron flow cannot be sustained."
},
{
  id: 281,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Which of the following statements is correct?<br>(A) Stroma lamellae have both PS I and PS II<br>(B) Grana lamellae have both PS I and PS II<br>(C) Stroma lamellae have only PS I<br>(D) Grana lamellae have only PS II",
  options: [
    "(A) and (D) only",
    "(B) and (C) only",
    "(A) and (B) only",
    "(C) and (D) only"
  ],
  correct: 1,
  explanation: "NCERT states: 'the membrane or lamellae of the grana have both PS I and PS II' and stroma lamellae 'lack PS II' (meaning they have only PS I). So statements B and C are correct."
},
{
  id: 282,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "<b>Assertion (A):</b> In cyclic photophosphorylation, water is not split.<br><b>Reason (R):</b> PS II, which is associated with water splitting, is not involved in cyclic photophosphorylation.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Since cyclic photophosphorylation involves only PS I (no PS II), and water splitting is associated with PS II, no water is split during cyclic flow. R correctly explains A."
},
{
  id: 283,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "In cyclic photophosphorylation, O₂ is:",
  options: [
    "Released as in non-cyclic flow",
    "Not released because water is not split",
    "Consumed by the process",
    "Produced in the stroma"
  ],
  correct: 1,
  explanation: "Since cyclic photophosphorylation does not involve PS II, water is not split, and therefore no O₂ is released. O₂ evolution is associated only with non-cyclic electron flow where PS II splits water."
},
{
  id: 284,
  topic: "Splitting of Water",
  q: "Select the <b>incorrect</b> statement about photolysis of water:",
  options: [
    "It is associated with PS II",
    "It produces H⁺, O₂ and electrons",
    "It occurs on the outer surface of the thylakoid membrane",
    "It provides replacement electrons for PS II"
  ],
  correct: 2,
  explanation: "Photolysis occurs on the INNER side of the thylakoid membrane (facing the lumen), not the outer surface. NCERT clearly states PS II 'is physically located on the inner side of the membrane of the thylakoid.'"
},
{
  id: 285,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Match the following:<br>(i) Non-cyclic photophosphorylation — (P) Only ATP produced<br>(ii) Cyclic photophosphorylation — (Q) Both ATP and NADPH produced<br>(iii) Grana lamellae — (R) PS I only<br>(iv) Stroma lamellae — (S) PS I and PS II",
  options: [
    "(i)-Q, (ii)-P, (iii)-S, (iv)-R",
    "(i)-P, (ii)-Q, (iii)-R, (iv)-S",
    "(i)-Q, (ii)-P, (iii)-R, (iv)-S",
    "(i)-P, (ii)-Q, (iii)-S, (iv)-R"
  ],
  correct: 0,
  explanation: "Non-cyclic → ATP + NADPH (Q); Cyclic → Only ATP (P); Grana → PS I and PS II (S); Stroma lamellae → PS I only (R)."
},
{
  id: 286,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Which of the following is common to both cyclic and non-cyclic photophosphorylation?",
  options: [
    "Involvement of PS II",
    "Production of NADPH",
    "Production of ATP",
    "Splitting of water"
  ],
  correct: 2,
  explanation: "ATP production is common to both cyclic and non-cyclic photophosphorylation. NADPH, water splitting, and PS II involvement occur only in non-cyclic flow."
},
{
  id: 287,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Which of the following is exclusive to non-cyclic photophosphorylation?<br>(i) NADPH production<br>(ii) ATP production<br>(iii) Water splitting<br>(iv) O₂ evolution<br>(v) Involvement of PS II",
  options: [
    "(i), (iii), (iv) and (v) only",
    "(i) and (ii) only",
    "(ii) and (iii) only",
    "(i), (ii), (iii), (iv) and (v)"
  ],
  correct: 0,
  explanation: "NADPH production (i), water splitting (iii), O₂ evolution (iv), and PS II involvement (v) are exclusive to non-cyclic flow. ATP production (ii) occurs in both cyclic and non-cyclic pathways."
},
{
  id: 288,
  topic: "Splitting of Water",
  q: "The role of water in photosynthesis is:<br>(i) Electron donor for PS II<br>(ii) Source of O₂<br>(iii) Source of protons (H⁺)<br>(iv) Source of carbon for glucose",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(i) and (ii) only",
    "(iv) only"
  ],
  correct: 0,
  explanation: "Water donates electrons to PS II (i), is the source of O₂ released (ii), and provides protons (iii) that contribute to the proton gradient and NADPH formation. Carbon for glucose comes from CO₂, not water (iv is wrong)."
},
{
  id: 289,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "If a plant is illuminated with far-red light (wavelength >680 nm) only, which of the following will be observed?",
  options: [
    "Both ATP and NADPH are produced",
    "Only NADPH is produced",
    "Only ATP is produced through cyclic photophosphorylation",
    "No photosynthesis occurs at all"
  ],
  correct: 2,
  explanation: "Far-red light (>680 nm) can excite PS I (P700 = 700 nm) but NOT PS II (P680 = 680 nm). Only cyclic electron flow around PS I can occur, producing ATP only. No NADPH or O₂ is produced."
},
{
  id: 290,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "<b>Assertion (A):</b> Non-cyclic photophosphorylation cannot occur in stroma lamellae.<br><b>Reason (R):</b> Stroma lamellae lack PS II and NADP reductase enzyme, both essential for non-cyclic flow.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Non-cyclic flow requires both PS I and PS II (and NADP reductase for NADPH). Since stroma lamellae lack PS II and NADP reductase, non-cyclic photophosphorylation cannot occur there. R correctly explains A."
},
{
  id: 291,
  topic: "Splitting of Water",
  q: "During photolysis, for every O₂ molecule released, how many electrons are donated to PS II?",
  options: [
    "1",
    "2",
    "4",
    "6"
  ],
  correct: 2,
  explanation: "From the equation 2H₂O → 4H⁺ + O₂ + 4e⁻, for every O₂ molecule released, 4 electrons are produced and donated to PS II to replace its lost electrons."
},
{
  id: 292,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "The special substance that carries energy in its chemical bonds as mentioned in NCERT is:",
  options: [
    "NADPH",
    "Glucose",
    "ATP",
    "Chlorophyll"
  ],
  correct: 2,
  explanation: "NCERT states: 'Special substances like ATP, carry this energy in their chemical bonds.' ATP is the universal energy currency of the cell."
},
{
  id: 293,
  topic: "Splitting of Water",
  q: "Which of the following correctly represents the relationship: PS II → electrons → PS I?",
  options: [
    "PS II provides replacement electrons for PS I",
    "PS II receives electrons from PS I",
    "PS II and PS I share the same electrons simultaneously",
    "PS I provides electrons to PS II"
  ],
  correct: 0,
  explanation: "NCERT states: 'The electrons needed to replace those removed from photosystem I are provided by photosystem II.' In the Z scheme, electron flow is PS II → ETC → PS I."
},
{
  id: 294,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Which of the following is <b>NOT</b> a feature of non-cyclic photophosphorylation?",
  options: [
    "Both PS I and PS II are involved",
    "ATP and NADPH are both produced",
    "Electrons are cycled back to PS I",
    "Water is split to provide electrons"
  ],
  correct: 2,
  explanation: "Electrons cycling back to PS I is a feature of CYCLIC photophosphorylation, not non-cyclic. In non-cyclic flow, electrons travel from water → PS II → ETC → PS I → NADP⁺ (a linear path)."
},
{
  id: 295,
  topic: "Splitting of Water",
  q: "The significance of water splitting in the context of the proton gradient is:",
  options: [
    "It removes protons from the lumen",
    "It releases H⁺ into the lumen, contributing to the proton gradient",
    "It releases H⁺ into the stroma",
    "It has no role in creating the proton gradient"
  ],
  correct: 1,
  explanation: "Water splitting releases H⁺ into the thylakoid lumen (since the water splitting complex faces the lumen). This contributes to the proton gradient across the thylakoid membrane, which drives ATP synthesis."
},
{
  id: 296,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Consider the following comparison:<br>| Feature | Process X | Process Y |<br>|---------|----------|----------|<br>| Photosystems | PS I + PS II | PS I only |<br>| Products | ATP + NADPH | ATP only |<br>| Location | Grana | Stroma lamellae |<br><br>Process X and Process Y are:",
  options: [
    "X = Cyclic, Y = Non-cyclic",
    "X = Non-cyclic, Y = Cyclic",
    "X = Dark reaction, Y = Light reaction",
    "X = Calvin cycle, Y = Z scheme"
  ],
  correct: 1,
  explanation: "Process X (both photosystems, ATP + NADPH, grana) = Non-cyclic photophosphorylation. Process Y (PS I only, ATP only, stroma lamellae) = Cyclic photophosphorylation."
},
{
  id: 297,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "<b>Assertion (A):</b> In cyclic electron flow, no O₂ is evolved.<br><b>Reason (R):</b> Cyclic electron flow does not involve water splitting as PS II is not involved.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. O₂ is not evolved because water is not split. Water splitting requires PS II, which is not involved in cyclic electron flow. R correctly explains A."
},
{
  id: 298,
  topic: "Splitting of Water",
  q: "The process of water splitting in the presence of light during photosynthesis is also called:",
  options: [
    "Hydrolysis",
    "Photolysis",
    "Glycolysis",
    "Proteolysis"
  ],
  correct: 1,
  explanation: "Photolysis means 'splitting by light.' The light-dependent splitting of water during photosynthesis is called photolysis of water. Hydrolysis is splitting by water, glycolysis is glucose splitting, and proteolysis is protein splitting."
},
{
  id: 299,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "Which of the following wavelength conditions would favour ONLY non-cyclic photophosphorylation?",
  options: [
    "Only far-red light (>700 nm)",
    "Only light beyond 680 nm",
    "Light of wavelengths including 680 nm and shorter",
    "Complete darkness"
  ],
  correct: 2,
  explanation: "Non-cyclic photophosphorylation requires both PS II (P680 nm) and PS I (P700 nm). Light at 680 nm or shorter wavelengths can excite BOTH photosystems. Light beyond 680 nm only excites PS I, favouring cyclic flow."
},
{
  id: 300,
  topic: "Splitting of Water",
  q: "If the water splitting complex is inhibited, which of the following will be directly affected?<br>(i) Electron supply to PS II<br>(ii) O₂ evolution<br>(iii) Proton gradient in the lumen<br>(iv) Cyclic photophosphorylation",
  options: [
    "(i), (ii) and (iii) only",
    "(i) and (ii) only",
    "(i), (ii), (iii) and (iv)",
    "(iv) only"
  ],
  correct: 0,
  explanation: "Inhibiting water splitting directly affects electron supply to PS II (i), O₂ evolution (ii), and proton gradient (iii, since H⁺ from water splitting won't accumulate in lumen). Cyclic photophosphorylation (iv) is NOT directly affected because it involves only PS I."
},
{
  id: 301,
  topic: "Cyclic and Non-cyclic Photo-phosphorylation",
  q: "The biological significance of cyclic photophosphorylation is to:",
  options: [
    "Produce NADPH for the Calvin cycle",
    "Produce additional ATP needed for the Calvin cycle when NADPH supply is sufficient",
    "Split water and release O₂",
    "Fix carbon dioxide into glucose"
  ],
  correct: 1,
  explanation: "The Calvin cycle requires more ATP than NADPH (3 ATP : 2 NADPH ratio). Cyclic photophosphorylation produces extra ATP without NADPH, helping to balance the ATP/NADPH ratio needed for carbon fixation."
}
,
{
  id: 302,
  topic: "Chemiosmotic Hypothesis",
  q: "The chemiosmotic hypothesis explains:",
  options: [
    "The mechanism of water splitting",
    "The mechanism of ATP synthesis in the chloroplast",
    "The mechanism of carbon fixation",
    "The mechanism of NADPH oxidation"
  ],
  correct: 1,
  explanation: "NCERT states: 'The chemiosmotic hypothesis has been put forward to explain the mechanism' of ATP synthesis in the chloroplast. It links ATP synthesis to the proton gradient across the thylakoid membrane."
},
{
  id: 303,
  topic: "Chemiosmotic Hypothesis",
  q: "In photosynthesis, ATP synthesis is linked to the development of a proton gradient across:",
  options: [
    "The outer membrane of the chloroplast",
    "The inner membrane of the chloroplast",
    "The thylakoid membranes",
    "The plasma membrane of the cell"
  ],
  correct: 2,
  explanation: "NCERT states: 'in photosynthesis too, ATP synthesis is linked to development of a proton gradient across a membrane. This time these are the membranes of thylakoid.' Not the chloroplast envelope membranes."
},
{
  id: 304,
  topic: "Chemiosmotic Hypothesis",
  q: "In photosynthesis, proton accumulation occurs towards:",
  options: [
    "The stroma side of the thylakoid membrane",
    "The outer membrane space of the chloroplast",
    "The inside of the thylakoid membrane, i.e., in the lumen",
    "The cytoplasm of the cell"
  ],
  correct: 2,
  explanation: "NCERT states: 'here the proton accumulation is towards the inside of the membrane, i.e., in the lumen.' This is opposite to respiration where protons accumulate in the intermembrane space."
},
{
  id: 305,
  topic: "Chemiosmotic Hypothesis",
  q: "In respiration, protons accumulate in the:",
  options: [
    "Mitochondrial matrix",
    "Intermembrane space of the mitochondria",
    "Thylakoid lumen",
    "Stroma of chloroplast"
  ],
  correct: 1,
  explanation: "NCERT states: 'In respiration, protons accumulate in the intermembrane space of the mitochondria when electrons move through the ETS.' This is in contrast to photosynthesis where they accumulate in the thylakoid lumen."
},
{
  id: 306,
  topic: "Chemiosmotic Hypothesis",
  q: "Which of the following is a difference between proton accumulation in photosynthesis and respiration?",
  options: [
    "In photosynthesis: stroma; In respiration: matrix",
    "In photosynthesis: thylakoid lumen; In respiration: intermembrane space of mitochondria",
    "In photosynthesis: intermembrane space; In respiration: thylakoid lumen",
    "Both accumulate protons in the same compartment"
  ],
  correct: 1,
  explanation: "NCERT explicitly compares: photosynthesis — protons in thylakoid lumen; respiration — protons in intermembrane space of mitochondria. Both create a proton gradient for ATP synthesis but in different organelles and compartments."
},
{
  id: 307,
  topic: "Chemiosmotic Hypothesis",
  q: "Which of the following causes proton accumulation in the thylakoid lumen?<br>(i) Splitting of water on the inner side of the membrane<br>(ii) Transport of protons across the membrane during electron transport<br>(iii) Removal of protons from the stroma by NADP reductase<br>(iv) Direct pumping of protons from the cytoplasm",
  options: [
    "(i), (ii) and (iii) only",
    "(i) and (ii) only",
    "(i), (ii), (iii) and (iv)",
    "(ii) and (iv) only"
  ],
  correct: 0,
  explanation: "NCERT describes three processes: (a) water splitting releases H⁺ into the lumen, (b) electron transport moves protons from stroma to lumen, (c) NADP reductase removes protons from stroma for NADPH synthesis. Statement (iv) is not mentioned."
},
{
  id: 308,
  topic: "Chemiosmotic Hypothesis",
  q: "The splitting of water molecule takes place on which side of the thylakoid membrane?",
  options: [
    "Outer side (stroma side)",
    "Inner side (lumen side)",
    "Both sides equally",
    "Neither side — it occurs in the stroma"
  ],
  correct: 1,
  explanation: "NCERT states: 'splitting of the water molecule takes place on the inner side of the membrane, the protons or hydrogen ions that are produced by the splitting of water accumulate within the lumen of the thylakoids.'"
},
{
  id: 309,
  topic: "Chemiosmotic Hypothesis",
  q: "The primary acceptor of electrons is located towards which side of the thylakoid membrane?",
  options: [
    "Inner side (lumen side)",
    "Outer side (stroma side)",
    "Inside the thylakoid membrane",
    "In the stroma matrix"
  ],
  correct: 1,
  explanation: "NCERT states: 'the primary acceptor of electron which is located towards the outer side of the membrane transfers its electron not to an electron carrier but to an H carrier.' The outer side faces the stroma."
},
{
  id: 310,
  topic: "Chemiosmotic Hypothesis",
  q: "The primary acceptor of electrons transfers its electron to:",
  options: [
    "An electron carrier directly",
    "An H carrier (hydrogen carrier)",
    "NADP⁺ directly",
    "ATP synthase"
  ],
  correct: 1,
  explanation: "NCERT states: 'the primary accepter of electron which is located towards the outer side of the membrane transfers its electron not to an electron carrier but to an H carrier.' This H carrier removes a proton from the stroma."
},
{
  id: 311,
  topic: "Chemiosmotic Hypothesis",
  q: "The H carrier molecule removes a proton from the _______ while transporting an electron, and releases the proton into the _______.",
  options: [
    "Lumen; stroma",
    "Stroma; lumen",
    "Cytoplasm; lumen",
    "Lumen; cytoplasm"
  ],
  correct: 1,
  explanation: "NCERT states: 'this molecule removes a proton from the stroma while transporting an electron. When this molecule passes on its electron to the electron carrier on the inner side of the membrane, the proton is released into the inner side or the lumen side.'"
},
{
  id: 312,
  topic: "Chemiosmotic Hypothesis",
  q: "The NADP reductase enzyme is located on:",
  options: [
    "The inner side of the thylakoid membrane (lumen side)",
    "The stroma side of the membrane",
    "The outer membrane of the chloroplast",
    "Inside the thylakoid lumen"
  ],
  correct: 1,
  explanation: "NCERT states: 'The NADP reductase enzyme is located on the stroma side of the membrane.' It reduces NADP⁺ using electrons from PS I acceptor and protons from the stroma."
},
{
  id: 313,
  topic: "Chemiosmotic Hypothesis",
  q: "For the reduction of NADP⁺ to NADPH + H⁺, the requirements are:<br>(i) Electrons from the acceptor of PS I<br>(ii) Protons from the stroma<br>(iii) NADP reductase enzyme<br>(iv) Protons from the lumen",
  options: [
    "(i), (ii) and (iii) only",
    "(i) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(ii) and (iv) only"
  ],
  correct: 0,
  explanation: "NCERT states: 'Along with electrons that come from the acceptor of electrons of PS I, protons are necessary for the reduction of NADP⁺ to NADPH + H⁺. These protons are also removed from the stroma.' NADP reductase catalyses this reaction. Protons from the lumen are not used."
},
{
  id: 314,
  topic: "Chemiosmotic Hypothesis",
  q: "The reduction of NADP⁺ to NADPH + H⁺ by NADP reductase causes protons to be removed from:",
  options: [
    "The thylakoid lumen",
    "The stroma",
    "The intermembrane space",
    "The cytoplasm"
  ],
  correct: 1,
  explanation: "NCERT states: 'These protons are also removed from the stroma.' The NADP reductase enzyme on the stroma side uses stroma protons, further decreasing their number and contributing to the proton gradient."
},
{
  id: 315,
  topic: "Chemiosmotic Hypothesis",
  q: "The net effect of the three processes on the proton distribution is:",
  options: [
    "Protons increase in stroma and decrease in lumen",
    "Protons decrease in stroma and accumulate in lumen",
    "Protons remain equal on both sides",
    "Protons accumulate in the stroma only"
  ],
  correct: 1,
  explanation: "NCERT states: 'within the chloroplast, protons in the stroma decrease in number, while in the lumen there is accumulation of protons.' This creates the proton gradient across the thylakoid membrane."
},
{
  id: 316,
  topic: "Chemiosmotic Hypothesis",
  q: "The proton gradient across the thylakoid membrane results in:",
  options: [
    "An increase in pH in the lumen",
    "A measurable decrease in pH in the lumen",
    "No change in pH",
    "An increase in pH in both lumen and stroma"
  ],
  correct: 1,
  explanation: "NCERT states: 'This creates a proton gradient across the thylakoid membrane as well as a measurable decrease in pH in the lumen.' More H⁺ in the lumen means lower pH (more acidic)."
},
{
  id: 317,
  topic: "Chemiosmotic Hypothesis",
  q: "<b>Assertion (A):</b> The pH of the thylakoid lumen is lower than the pH of the stroma.<br><b>Reason (R):</b> Protons accumulate in the lumen due to water splitting, electron transport, and NADP⁺ reduction.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Protons accumulate in the lumen (making it acidic/low pH) while being removed from the stroma (making it basic/high pH). The three processes described in NCERT create this gradient. R correctly explains A."
},
{
  id: 318,
  topic: "Chemiosmotic Hypothesis",
  q: "The proton gradient is important because:",
  options: [
    "It directly fixes CO₂",
    "Its breakdown leads to the synthesis of ATP",
    "It splits water molecules",
    "It produces NADPH directly"
  ],
  correct: 1,
  explanation: "NCERT states: 'This gradient is important because it is the breakdown of this gradient that leads to the synthesis of ATP.' Protons flow down the gradient through ATP synthase, providing energy for ATP formation."
},
{
  id: 319,
  topic: "Chemiosmotic Hypothesis",
  q: "The proton gradient is broken down by movement of protons through:",
  options: [
    "The thylakoid membrane directly (simple diffusion)",
    "The transmembrane channel of CF₀ of ATP synthase",
    "NADP reductase enzyme",
    "Aquaporins in the thylakoid membrane"
  ],
  correct: 1,
  explanation: "NCERT states: 'The gradient is broken down due to the movement of protons across the membrane to the stroma through the transmembrane channel of the CF₀ of the ATP synthase.'"
},
{
  id: 320,
  topic: "Chemiosmotic Hypothesis",
  q: "The ATP synthase enzyme consists of two parts:",
  options: [
    "CF₀ and CF₁",
    "F₀ and F₁ only",
    "PS I and PS II",
    "Cytochrome b and cytochrome f"
  ],
  correct: 0,
  explanation: "NCERT states: 'The ATP synthase enzyme consists of two parts: one called the CF₀ is embedded in the thylakoid membrane... The other portion is called CF₁.' In chloroplasts, the notation is CF₀ and CF₁ (C for chloroplast)."
},
{
  id: 321,
  topic: "Chemiosmotic Hypothesis",
  q: "The CF₀ portion of ATP synthase is:",
  options: [
    "Located on the stroma surface and synthesises ATP",
    "Embedded in the thylakoid membrane and forms a transmembrane channel",
    "Located in the thylakoid lumen",
    "Found in the stroma matrix"
  ],
  correct: 1,
  explanation: "NCERT states: 'CF₀ is embedded in the thylakoid membrane and forms a transmembrane channel that carries out facilitated diffusion of protons across the membrane.'"
},
{
  id: 322,
  topic: "Chemiosmotic Hypothesis",
  q: "The CF₁ portion of ATP synthase:",
  options: [
    "Is embedded in the thylakoid membrane",
    "Protrudes on the outer surface of the thylakoid membrane facing the stroma",
    "Is located inside the thylakoid lumen",
    "Is a soluble enzyme in the stroma with no membrane association"
  ],
  correct: 1,
  explanation: "NCERT states: 'CF₁ protrudes on the outer surface of the thylakoid membrane on the side that faces the stroma.' This is where the actual ATP synthesis occurs."
},
{
  id: 323,
  topic: "Chemiosmotic Hypothesis",
  q: "CF₀ carries out:",
  options: [
    "Active transport of protons against the gradient",
    "Facilitated diffusion of protons across the membrane",
    "Simple diffusion of electrons",
    "Osmosis of water molecules"
  ],
  correct: 1,
  explanation: "NCERT states that CF₀ 'forms a transmembrane channel that carries out facilitated diffusion of protons across the membrane.' Protons move down their concentration gradient through this channel."
},
{
  id: 324,
  topic: "Chemiosmotic Hypothesis",
  q: "The breakdown of the proton gradient provides energy to cause:",
  options: [
    "Splitting of water",
    "A conformational change in the CF₁ particle",
    "Excitation of chlorophyll a",
    "Reduction of NADP⁺"
  ],
  correct: 1,
  explanation: "NCERT states: 'The breakdown of the gradient provides enough energy to cause a conformational change in the CF₁ particle of the ATP synthase, which makes the enzyme synthesise several molecules of energy-packed ATP.'"
},
{
  id: 325,
  topic: "Chemiosmotic Hypothesis",
  q: "<b>Assertion (A):</b> ATP is synthesised when protons flow from the lumen to the stroma through ATP synthase.<br><b>Reason (R):</b> The conformational change in CF₁ caused by proton flow activates the enzyme to synthesise ATP.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Protons flow from the lumen (high H⁺) to the stroma (low H⁺) through CF₀. This flow causes a conformational change in CF₁, which catalyses ATP synthesis. R correctly explains the mechanism stated in A."
},
{
  id: 326,
  topic: "Chemiosmotic Hypothesis",
  q: "Chemiosmosis requires all of the following <b>EXCEPT</b>:",
  options: [
    "A membrane",
    "A proton pump",
    "ATP synthase",
    "RuBisCO enzyme"
  ],
  correct: 3,
  explanation: "NCERT states: 'Chemiosmosis requires a membrane, a proton pump, a proton gradient and ATP synthase.' RuBisCO is involved in the Calvin cycle (carbon fixation), not in chemiosmosis."
},
{
  id: 327,
  topic: "Chemiosmotic Hypothesis",
  q: "The four requirements for chemiosmosis are:",
  options: [
    "Membrane, proton pump, proton gradient, and NADP reductase",
    "Membrane, proton pump, proton gradient, and ATP synthase",
    "PS I, PS II, cytochrome complex, and NADP reductase",
    "Water, CO₂, light, and chlorophyll"
  ],
  correct: 1,
  explanation: "NCERT clearly lists: 'Chemiosmosis requires a membrane, a proton pump, a proton gradient and ATP synthase.' This is a direct NCERT statement frequently asked in NEET."
},
{
  id: 328,
  topic: "Chemiosmotic Hypothesis",
  q: "In chemiosmosis, energy is used to pump protons across a membrane to create:",
  options: [
    "An electron gradient",
    "A high concentration of protons within the thylakoid lumen",
    "A high concentration of protons in the stroma",
    "Equal concentration of protons on both sides"
  ],
  correct: 1,
  explanation: "NCERT states: 'Energy is used to pump protons across a membrane, to create a gradient or a high concentration of protons within the thylakoid lumen.' The lumen becomes proton-rich."
},
{
  id: 329,
  topic: "Chemiosmotic Hypothesis",
  q: "ATP synthase has a channel that allows:",
  options: [
    "Diffusion of electrons back across the membrane",
    "Active transport of protons into the lumen",
    "Diffusion of protons back across the membrane",
    "Transport of glucose across the membrane"
  ],
  correct: 2,
  explanation: "NCERT states: 'ATP synthase has a channel that allows diffusion of protons back across the membrane.' This diffusion of protons from lumen to stroma through CF₀ releases energy for ATP synthesis."
},
{
  id: 330,
  topic: "Chemiosmotic Hypothesis",
  q: "The ATP and NADPH produced during the light reactions are used immediately in:",
  options: [
    "Further light reactions",
    "Biosynthetic reactions in the stroma for fixing CO₂ and synthesis of sugars",
    "Glycolysis in the cytoplasm",
    "Krebs cycle in the mitochondria"
  ],
  correct: 1,
  explanation: "NCERT states: 'the ATP will be used immediately in the biosynthetic reaction taking place in the stroma, responsible for fixing CO₂, and synthesis of sugars.' These are the dark reactions (Calvin cycle)."
},
{
  id: 331,
  topic: "Chemiosmotic Hypothesis",
  q: "Which of the following is <b>incorrect</b> about the proton gradient in chloroplasts?",
  options: [
    "Protons accumulate in the thylakoid lumen",
    "Proton number decreases in the stroma",
    "The pH of the lumen increases due to proton accumulation",
    "The gradient is created by water splitting, electron transport, and NADP⁺ reduction"
  ],
  correct: 2,
  explanation: "When protons accumulate in the lumen, the pH DECREASES (becomes more acidic), not increases. More H⁺ = lower pH. NCERT states 'a measurable decrease in pH in the lumen.'"
},
{
  id: 332,
  topic: "Chemiosmotic Hypothesis",
  q: "Match the following:<br>(i) CF₀ — (P) Protrudes on stroma side<br>(ii) CF₁ — (Q) Embedded in thylakoid membrane<br>(iii) NADP reductase — (R) Located on stroma side<br>(iv) Water splitting complex — (S) Located on inner side (lumen side)",
  options: [
    "(i)-Q, (ii)-P, (iii)-R, (iv)-S",
    "(i)-P, (ii)-Q, (iii)-S, (iv)-R",
    "(i)-Q, (ii)-P, (iii)-S, (iv)-R",
    "(i)-R, (ii)-S, (iii)-P, (iv)-Q"
  ],
  correct: 0,
  explanation: "CF₀ = Embedded in thylakoid membrane (Q); CF₁ = Protrudes on stroma side (P); NADP reductase = Stroma side (R); Water splitting complex = Inner/lumen side (S). All directly from NCERT."
},
{
  id: 333,
  topic: "Chemiosmotic Hypothesis",
  q: "<b>Assertion (A):</b> Both photosynthesis and respiration use chemiosmosis for ATP synthesis.<br><b>Reason (R):</b> In both processes, a proton gradient is created across a membrane and ATP synthase uses this gradient.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT draws the comparison: 'Like in respiration, in photosynthesis too, ATP synthesis is linked to development of a proton gradient across a membrane.' R correctly explains the common mechanism."
},
{
  id: 334,
  topic: "Chemiosmotic Hypothesis",
  q: "Consider the following about the location of components on the thylakoid membrane:<br>(A) Water splitting complex — inner side (lumen)<br>(B) Primary electron acceptor — outer side (stroma)<br>(C) NADP reductase — inner side (lumen)<br>(D) CF₁ of ATP synthase — outer side (stroma)<br><br>Which are correct?",
  options: [
    "(A), (B), (C) and (D)",
    "(A), (B) and (D) only",
    "(A) and (C) only",
    "(C) and (D) only"
  ],
  correct: 1,
  explanation: "A is correct (water splitting = inner/lumen side), B is correct (primary acceptor = outer/stroma side), D is correct (CF₁ = stroma side). C is wrong — NADP reductase is on the stroma side, not lumen side."
},
{
  id: 335,
  topic: "Chemiosmotic Hypothesis",
  q: "The direction of proton flow through ATP synthase during photosynthesis is:",
  options: [
    "From stroma to lumen",
    "From lumen to stroma",
    "From intermembrane space to matrix",
    "From cytoplasm to stroma"
  ],
  correct: 1,
  explanation: "Protons accumulate in the lumen and flow through ATP synthase (CF₀ channel) to the stroma, down the concentration gradient. This flow from lumen → stroma drives ATP synthesis."
},
{
  id: 336,
  topic: "Chemiosmotic Hypothesis",
  q: "In mitochondria, the direction of proton flow through ATP synthase is:",
  options: [
    "From matrix to intermembrane space",
    "From intermembrane space to matrix",
    "From lumen to stroma",
    "From stroma to lumen"
  ],
  correct: 1,
  explanation: "In mitochondria, protons accumulate in the intermembrane space and flow through ATP synthase to the matrix. This is analogous to lumen → stroma flow in chloroplasts."
},
{
  id: 337,
  topic: "Chemiosmotic Hypothesis",
  q: "How many processes contribute to creating the proton gradient across the thylakoid membrane as described in NCERT?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 2,
  explanation: "NCERT describes three processes: (a) water splitting releasing H⁺ into lumen, (b) H carrier transporting protons from stroma to lumen during electron transport, (c) NADP reductase removing protons from stroma for NADPH synthesis."
},
{
  id: 338,
  topic: "Chemiosmotic Hypothesis",
  q: "<b>Assertion (A):</b> The proton gradient in chloroplasts is created with higher H⁺ concentration in the lumen.<br><b>Reason (R):</b> In mitochondria, the proton gradient has higher H⁺ concentration in the matrix.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Assertion is TRUE — lumen has higher H⁺ in chloroplasts. Reason is FALSE — in mitochondria, higher H⁺ concentration is in the intermembrane space, NOT the matrix. This is a common NEET trap comparing the two organelles."
},
{
  id: 339,
  topic: "Chemiosmotic Hypothesis",
  q: "Which of the following statements about the H carrier in electron transport is correct?",
  options: [
    "It transports only electrons, not protons",
    "It removes a proton from the lumen and releases it into the stroma",
    "It removes a proton from the stroma and releases it into the lumen",
    "It transports protons from the stroma to the cytoplasm"
  ],
  correct: 2,
  explanation: "NCERT states the H carrier 'removes a proton from the stroma while transporting an electron. When this molecule passes on its electron to the electron carrier on the inner side of the membrane, the proton is released into the inner side or the lumen side.'"
},
{
  id: 340,
  topic: "Chemiosmotic Hypothesis",
  q: "The CF₁ particle of ATP synthase undergoes a conformational change when:",
  options: [
    "Light strikes the thylakoid membrane",
    "Water is split in the lumen",
    "Protons flow through CF₀ from lumen to stroma",
    "NADP⁺ is reduced to NADPH"
  ],
  correct: 2,
  explanation: "NCERT states: 'The breakdown of the gradient provides enough energy to cause a conformational change in the CF₁ particle.' This occurs when protons flow through CF₀ from lumen to stroma."
},
{
  id: 341,
  topic: "Chemiosmotic Hypothesis",
  q: "Select the <b>incorrect</b> statement about ATP synthase in chloroplasts:",
  options: [
    "CF₀ is embedded in the thylakoid membrane",
    "CF₁ protrudes into the thylakoid lumen",
    "CF₀ forms a transmembrane channel for proton diffusion",
    "CF₁ undergoes conformational change to synthesise ATP"
  ],
  correct: 1,
  explanation: "CF₁ protrudes on the OUTER surface of the thylakoid membrane facing the STROMA, not into the lumen. NCERT states: 'CF₁ protrudes on the outer surface of the thylakoid membrane on the side that faces the stroma.'"
},
{
  id: 342,
  topic: "Chemiosmotic Hypothesis",
  q: "Which of the following correctly describes the sequence of events in chemiosmosis?",
  options: [
    "Proton gradient → ATP synthase channel opens → protons diffuse to stroma → conformational change in CF₁ → ATP synthesis",
    "ATP synthesis → proton gradient formed → protons pumped into lumen",
    "NADPH formed → proton gradient → water splitting → ATP synthesis",
    "CO₂ fixation → proton gradient → ATP synthesis"
  ],
  correct: 0,
  explanation: "The correct sequence: Proton gradient is created → protons diffuse through CF₀ channel to stroma → energy released causes conformational change in CF₁ → ATP is synthesised. This is the chemiosmotic mechanism."
},
{
  id: 343,
  topic: "Chemiosmotic Hypothesis",
  q: "Consider the following comparison between chloroplasts and mitochondria:<br>(i) Proton-rich compartment: Lumen (chloroplast) vs Intermembrane space (mitochondria)<br>(ii) ATP synthase faces: Stroma (chloroplast) vs Matrix (mitochondria)<br>(iii) Proton gradient drives: ATP synthesis in both<br><br>Which statements are correct?",
  options: [
    "(i) and (iii) only",
    "(i), (ii) and (iii)",
    "(ii) and (iii) only",
    "(i) only"
  ],
  correct: 1,
  explanation: "All three are correct. In chloroplasts: lumen is proton-rich, CF₁ faces stroma. In mitochondria: intermembrane space is proton-rich, F₁ faces matrix. In both, proton gradient drives ATP synthesis."
},
{
  id: 344,
  topic: "Chemiosmotic Hypothesis",
  q: "If the thylakoid membrane becomes freely permeable to protons, what would happen?",
  options: [
    "ATP synthesis would increase dramatically",
    "The proton gradient would collapse and ATP synthesis would stop",
    "NADPH production would increase",
    "Water splitting would stop"
  ],
  correct: 1,
  explanation: "If the membrane becomes freely permeable, protons would leak back without passing through ATP synthase. The proton gradient would collapse, and ATP synthesis would stop. Chemiosmosis requires an intact membrane to maintain the gradient."
},
{
  id: 345,
  topic: "Chemiosmotic Hypothesis",
  q: "The protons used for NADP⁺ reduction to NADPH + H⁺ are taken from:",
  options: [
    "The thylakoid lumen",
    "The stroma",
    "The cytoplasm",
    "The intermembrane space"
  ],
  correct: 1,
  explanation: "NCERT states: 'protons are necessary for the reduction of NADP⁺ to NADPH + H⁺. These protons are also removed from the stroma.' This further reduces stroma H⁺ concentration, enhancing the proton gradient."
},
{
  id: 346,
  topic: "Chemiosmotic Hypothesis",
  q: "<b>Assertion (A):</b> NADP reductase activity contributes to the proton gradient.<br><b>Reason (R):</b> NADP reductase removes protons from the stroma for NADP⁺ reduction, decreasing stroma H⁺ concentration.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. By removing H⁺ from the stroma, NADP reductase increases the concentration difference between lumen and stroma, contributing to the proton gradient. R correctly explains A."
},
{
  id: 347,
  topic: "Chemiosmotic Hypothesis",
  q: "ATP synthase in the chloroplast synthesises ATP on which side of the thylakoid membrane?",
  options: [
    "The lumen side",
    "The stroma side",
    "Inside the thylakoid membrane",
    "In the intermembrane space"
  ],
  correct: 1,
  explanation: "Since CF₁ (the catalytic portion) protrudes on the stroma side of the thylakoid membrane, ATP is synthesised on the stroma side, where it is immediately available for use in the Calvin cycle."
},
{
  id: 348,
  topic: "Chemiosmotic Hypothesis",
  q: "Which of the following is a similarity between chemiosmosis in chloroplasts and mitochondria?",
  options: [
    "Both create proton gradients across the same membrane",
    "Both use ATP synthase to convert the energy of proton gradient into ATP",
    "Protons accumulate in the matrix in both",
    "Both produce NADPH"
  ],
  correct: 1,
  explanation: "Both chloroplasts and mitochondria use ATP synthase to harness the proton gradient for ATP synthesis. However, the specific membranes and compartments differ (thylakoid vs inner mitochondrial membrane)."
},
{
  id: 349,
  topic: "Chemiosmotic Hypothesis",
  q: "How many of the following contribute to decreasing proton concentration in the stroma?<br>(i) Water splitting<br>(ii) H carrier transporting protons from stroma to lumen<br>(iii) NADP reductase removing protons from stroma",
  options: [
    "One",
    "Two",
    "Three",
    "None"
  ],
  correct: 1,
  explanation: "Statements (ii) and (iii) decrease stroma proton concentration. Statement (i) — water splitting — releases protons into the lumen (increases lumen H⁺) but does not directly remove protons from the stroma. So two processes decrease stroma H⁺."
}
,
{
  id: 350,
  topic: "Where Are ATP and NADPH Used?",
  q: "The products of light reaction are:",
  options: [
    "ATP, NADPH and glucose",
    "ATP, NADPH and O₂",
    "ATP, NADH and O₂",
    "NADPH, O₂ and glucose"
  ],
  correct: 1,
  explanation: "NCERT states: 'the products of light reaction are ATP, NADPH and O₂.' Glucose is not a product of light reactions — it is synthesised during the biosynthetic (dark) phase."
},
{
  id: 351,
  topic: "Where Are ATP and NADPH Used?",
  q: "Of the products of light reactions, which one diffuses out of the chloroplast?",
  options: [
    "ATP",
    "NADPH",
    "O₂",
    "Glucose"
  ],
  correct: 2,
  explanation: "NCERT states: 'Of these O₂ diffuses out of the chloroplast while ATP and NADPH are used to drive the processes leading to the synthesis of food.' O₂ is released as a byproduct."
},
{
  id: 352,
  topic: "Where Are ATP and NADPH Used?",
  q: "ATP and NADPH produced during light reactions are used for:",
  options: [
    "Water splitting",
    "Oxygen evolution",
    "Synthesis of sugars (biosynthetic phase)",
    "Excitation of chlorophyll"
  ],
  correct: 2,
  explanation: "NCERT states: 'ATP and NADPH are used to drive the processes leading to the synthesis of food, more accurately, sugars. This is the biosynthetic phase of photosynthesis.'"
},
{
  id: 353,
  topic: "Where Are ATP and NADPH Used?",
  q: "The biosynthetic phase of photosynthesis:",
  options: [
    "Directly depends on the presence of light",
    "Does not directly depend on light but depends on products of light reaction",
    "Is completely independent of light in every way",
    "Occurs only in the presence of sunlight"
  ],
  correct: 1,
  explanation: "NCERT states: 'This process does not directly depend on the presence of light but is dependent on the products of the light reaction, i.e., ATP and NADPH, besides CO₂ and H₂O.' This is why it is conventionally called the dark reaction."
},
{
  id: 354,
  topic: "Where Are ATP and NADPH Used?",
  q: "The biosynthetic phase requires all of the following <b>EXCEPT</b>:",
  options: [
    "ATP",
    "NADPH",
    "CO₂ and H₂O",
    "Direct light energy"
  ],
  correct: 3,
  explanation: "NCERT states the biosynthetic phase is dependent on 'ATP and NADPH, besides CO₂ and H₂O.' It does NOT directly depend on light. However, it indirectly needs light to supply ATP and NADPH."
},
{
  id: 355,
  topic: "Where Are ATP and NADPH Used?",
  q: "The evidence that the biosynthetic phase does not directly require light is:",
  options: [
    "It occurs faster in darkness",
    "Immediately after light becomes unavailable, the process continues for some time and then stops",
    "It occurs only in the dark",
    "Light inhibits sugar synthesis"
  ],
  correct: 1,
  explanation: "NCERT states: 'immediately after light becomes unavailable, the biosynthetic process continues for some time, and then stops. If then, light is made available, the synthesis starts again.' This proves it doesn't directly need light but needs ATP/NADPH from light reactions."
},
{
  id: 356,
  topic: "Where Are ATP and NADPH Used?",
  q: "<b>Assertion (A):</b> The biosynthetic phase stops after some time when light is removed.<br><b>Reason (R):</b> Without light, ATP and NADPH supply from light reactions ceases, and the biosynthetic phase cannot continue without them.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The biosynthetic phase continues briefly in the dark using residual ATP/NADPH, but stops when these are depleted. R correctly explains why the process eventually stops."
},
{
  id: 357,
  topic: "Where Are ATP and NADPH Used?",
  q: "Calling the biosynthetic phase as 'dark reaction' is considered a misnomer because:",
  options: [
    "It occurs only in the dark",
    "It does not need CO₂",
    "It does not actually occur in darkness — it depends on ATP and NADPH from light reactions",
    "It requires direct sunlight"
  ],
  correct: 2,
  explanation: "NCERT suggests the term 'dark reaction' is a misnomer because the biosynthetic phase depends on products of light reactions (ATP and NADPH). Without light, these products are not generated, and the process stops. It does not truly occur in 'darkness.'"
},
{
  id: 358,
  topic: "Where Are ATP and NADPH Used?",
  q: "Melvin Calvin used which radioactive isotope in his studies of algal photosynthesis?",
  options: [
    "¹⁸O",
    "³²P",
    "¹⁴C",
    "³⁵S"
  ],
  correct: 2,
  explanation: "NCERT states: 'The use of radioactive ¹⁴C by him in algal photosynthesis studies led to the discovery that the first CO₂ fixation product was a 3-carbon organic acid.' ¹⁴C was used to trace the path of carbon."
},
{
  id: 359,
  topic: "Where Are ATP and NADPH Used?",
  q: "Calvin's experiments on CO₂ fixation were conducted using:",
  options: [
    "Flowering plants",
    "Algae",
    "Fungi",
    "Bacteria"
  ],
  correct: 1,
  explanation: "NCERT states: 'The use of radioactive ¹⁴C by him in algal photosynthesis studies.' Calvin used the green alga Chlorella in his experiments to trace the path of carbon during photosynthesis."
},
{
  id: 360,
  topic: "Where Are ATP and NADPH Used?",
  q: "The first CO₂ fixation product discovered by Calvin was:",
  options: [
    "Oxaloacetic acid (OAA)",
    "3-phosphoglyceric acid (PGA)",
    "Ribulose bisphosphate (RuBP)",
    "Glucose-6-phosphate"
  ],
  correct: 1,
  explanation: "NCERT states: 'the first CO₂ fixation product was a 3-carbon organic acid... The first product identified was 3-phosphoglyceric acid or in short PGA.' PGA is a 3-carbon compound."
},
{
  id: 361,
  topic: "Where Are ATP and NADPH Used?",
  q: "3-phosphoglyceric acid (PGA) contains how many carbon atoms?",
  options: [
    "2",
    "3",
    "4",
    "5"
  ],
  correct: 1,
  explanation: "NCERT states that the first product was 'a 3-carbon organic acid' and asks 'How many carbon atoms does it have?' PGA (3-phosphoglyceric acid) has 3 carbon atoms."
},
{
  id: 362,
  topic: "Where Are ATP and NADPH Used?",
  q: "The complete biosynthetic pathway of CO₂ fixation worked out by Calvin is called:",
  options: [
    "Hatch-Slack pathway",
    "Calvin cycle",
    "Krebs cycle",
    "Glycolytic pathway"
  ],
  correct: 1,
  explanation: "NCERT states: 'He also contributed to working out the complete biosynthetic pathway; hence it was called Calvin cycle after him.' The Calvin cycle is the C₃ pathway of carbon fixation."
},
{
  id: 363,
  topic: "Where Are ATP and NADPH Used?",
  q: "In certain plants, the first stable product of CO₂ fixation was found to be a 4-carbon acid identified as:",
  options: [
    "Phosphoglyceric acid (PGA)",
    "Phosphoenolpyruvate (PEP)",
    "Oxaloacetic acid (OAA)",
    "Malic acid"
  ],
  correct: 2,
  explanation: "NCERT states: 'the first stable product of CO₂ fixation was again an organic acid, but one which had 4 carbon atoms in it. This acid was identified to be oxaloacetic acid or OAA.'"
},
{
  id: 364,
  topic: "Where Are ATP and NADPH Used?",
  q: "OAA (Oxaloacetic acid) contains how many carbon atoms?",
  options: [
    "3",
    "4",
    "5",
    "6"
  ],
  correct: 1,
  explanation: "NCERT states OAA is 'an organic acid, but one which had 4 carbon atoms in it.' OAA is the first stable product of the C₄ pathway."
},
{
  id: 365,
  topic: "Where Are ATP and NADPH Used?",
  q: "CO₂ assimilation during photosynthesis is mainly of two types based on:",
  options: [
    "The amount of light absorbed",
    "The first stable product of CO₂ fixation",
    "The number of chloroplasts in the cell",
    "The type of chlorophyll present"
  ],
  correct: 1,
  explanation: "NCERT states: 'CO₂ assimilation during photosynthesis was said to be of two main types: those in which the first product of CO₂ fixation is a C₃ acid (PGA), i.e., the C₃ pathway, and those in which the first product was a C₄ acid (OAA), i.e., the C₄ pathway.'"
},
{
  id: 366,
  topic: "Where Are ATP and NADPH Used?",
  q: "The C₃ pathway is characterised by:",
  options: [
    "OAA as the first stable product",
    "PGA (a 3-carbon acid) as the first stable product of CO₂ fixation",
    "Glucose as the first product",
    "RuBP as the first product"
  ],
  correct: 1,
  explanation: "NCERT states: 'plants in which the first product of CO₂ fixation is a C₃ acid (PGA), i.e., the C₃ pathway.' PGA (3-phosphoglyceric acid) is a 3-carbon compound."
},
{
  id: 367,
  topic: "Where Are ATP and NADPH Used?",
  q: "The C₄ pathway is characterised by:",
  options: [
    "PGA as the first stable product",
    "Glucose as the first stable product",
    "OAA (a 4-carbon acid) as the first stable product of CO₂ fixation",
    "Pyruvic acid as the first product"
  ],
  correct: 2,
  explanation: "NCERT states: 'those in which the first product was a C₄ acid (OAA), i.e., the C₄ pathway.' OAA (Oxaloacetic acid) is a 4-carbon compound."
},
{
  id: 368,
  topic: "Where Are ATP and NADPH Used?",
  q: "Match the following:<br>(i) C₃ pathway — (P) OAA<br>(ii) C₄ pathway — (Q) PGA<br>(iii) Calvin cycle — (R) 4-carbon first product<br>(iv) First stable C₄ product — (S) 3-carbon first product",
  options: [
    "(i)-Q, (ii)-P, (iii)-S, (iv)-R",
    "(i)-Q, (ii)-R, (iii)-S, (iv)-P",
    "(i)-S, (ii)-R, (iii)-Q, (iv)-P",
    "(i)-P, (ii)-Q, (iii)-R, (iv)-S"
  ],
  correct: 1,
  explanation: "C₃ pathway = PGA (Q), C₄ pathway = 4-carbon first product (R), Calvin cycle = C₃ pathway = 3-carbon first product (S), First stable C₄ product = OAA (P). Note: C₃ pathway and Calvin cycle are the same."
},
{
  id: 369,
  topic: "Where Are ATP and NADPH Used?",
  q: "<b>Assertion (A):</b> Calvin used radioactive ¹⁴C to trace the path of carbon during photosynthesis.<br><b>Reason (R):</b> Radioactive isotopes can be tracked through metabolic pathways to identify intermediate products.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Calvin used ¹⁴C-labelled CO₂ because radioactive isotopes can be traced through metabolic pathways. This allowed him to identify PGA as the first product and map the complete Calvin cycle. R correctly explains A."
},
{
  id: 370,
  topic: "Where Are ATP and NADPH Used?",
  q: "Which of the following is <b>incorrect</b>?",
  options: [
    "PGA is the first stable product of C₃ pathway",
    "OAA is the first stable product of C₄ pathway",
    "Calvin cycle is the C₄ pathway",
    "The biosynthetic phase is also called the dark reaction"
  ],
  correct: 2,
  explanation: "Calvin cycle is the C₃ pathway (not C₄). NCERT states that Calvin worked out the biosynthetic pathway where PGA (3C) is the first product, hence the Calvin cycle = C₃ pathway."
},
{
  id: 371,
  topic: "Where Are ATP and NADPH Used?",
  q: "In the biosynthetic phase, CO₂ is combined with H₂O to produce:",
  options: [
    "Amino acids",
    "Fatty acids",
    "Sugars (CH₂O)ₙ",
    "Proteins"
  ],
  correct: 2,
  explanation: "NCERT states: 'CO₂ is combined with H₂O to produce (CH₂O)ₙ or sugars.' The biosynthetic phase synthesises carbohydrates from CO₂ and H₂O using ATP and NADPH."
},
{
  id: 372,
  topic: "Where Are ATP and NADPH Used?",
  q: "When CO₂ is taken into a reaction or 'fixed', the term 'CO₂ fixation' refers to:",
  options: [
    "Release of CO₂ from organic compounds",
    "Incorporation of CO₂ into an organic compound",
    "Absorption of CO₂ by water",
    "Conversion of CO₂ into O₂"
  ],
  correct: 1,
  explanation: "CO₂ fixation means the incorporation of inorganic CO₂ into an organic compound. In C₃ plants, CO₂ is fixed into PGA; in C₄ plants, into OAA."
},
{
  id: 373,
  topic: "Where Are ATP and NADPH Used?",
  q: "Consider the following:<br>(A) ATP is used in the biosynthetic phase<br>(B) NADPH is used in the biosynthetic phase<br>(C) O₂ is used in the biosynthetic phase<br>(D) CO₂ is used in the biosynthetic phase",
  options: [
    "(A), (B), (C) and (D)",
    "(A), (B) and (D) only",
    "(A) and (B) only",
    "(C) and (D) only"
  ],
  correct: 1,
  explanation: "NCERT mentions the biosynthetic phase depends on 'ATP and NADPH, besides CO₂ and H₂O.' O₂ is NOT used in the biosynthetic phase — it is a byproduct of light reactions that diffuses out."
},
{
  id: 374,
  topic: "Where Are ATP and NADPH Used?",
  q: "<b>Assertion (A):</b> PGA is a 3-carbon compound and OAA is a 4-carbon compound.<br><b>Reason (R):</b> PGA is the first product of the C₄ pathway and OAA is the first product of the C₃ pathway.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "Assertion is TRUE — PGA has 3 carbons and OAA has 4 carbons. Reason is FALSE — it reverses the pathways. PGA is the first product of the C₃ pathway, and OAA is the first product of the C₄ pathway. This is a classic NEET trap."
},
{
  id: 375,
  topic: "Where Are ATP and NADPH Used?",
  q: "Calvin's work on CO₂ fixation was conducted:",
  options: [
    "Before World War I",
    "During World War II",
    "Just after World War II",
    "In the 21st century"
  ],
  correct: 2,
  explanation: "NCERT states: 'Just after world war II, among the several efforts to put radioisotopes to beneficial use, the work of Melvin Calvin is exemplary.' His experiments were conducted after WWII."
},
{
  id: 376,
  topic: "Where Are ATP and NADPH Used?",
  q: "Which of the following correctly represents the two main types of CO₂ assimilation?",
  options: [
    "C₃ pathway (first product = OAA) and C₄ pathway (first product = PGA)",
    "C₃ pathway (first product = PGA) and C₄ pathway (first product = OAA)",
    "C₃ pathway (first product = glucose) and C₄ pathway (first product = sucrose)",
    "C₃ pathway (first product = RuBP) and C₄ pathway (first product = PEP)"
  ],
  correct: 1,
  explanation: "NCERT states: C₃ pathway — first product is PGA (3-carbon); C₄ pathway — first product is OAA (4-carbon). This is the fundamental distinction between the two pathways."
},
{
  id: 377,
  topic: "Where Are ATP and NADPH Used?",
  q: "The biosynthetic phase of photosynthesis is also called:",
  options: [
    "Photochemical phase",
    "Light reaction",
    "Dark reaction or carbon reaction",
    "Photolysis"
  ],
  correct: 2,
  explanation: "The biosynthetic phase is conventionally called the dark reaction (or carbon reaction). NCERT, however, points out that calling it 'dark reaction' is a misnomer since it indirectly depends on light."
},
{
  id: 378,
  topic: "Where Are ATP and NADPH Used?",
  q: "If light is made available after a period of darkness during which the biosynthetic phase had stopped, what happens?",
  options: [
    "The biosynthetic phase does not restart",
    "The synthesis starts again",
    "Only O₂ is produced, not sugars",
    "The plant dies permanently"
  ],
  correct: 1,
  explanation: "NCERT states: 'If then, light is made available, the synthesis starts again.' This is because light reactions resume, producing ATP and NADPH, which restart the biosynthetic phase."
},
{
  id: 379,
  topic: "Where Are ATP and NADPH Used?",
  q: "Which of the following is the correct sequence of events when light is removed and then restored?",
  options: [
    "Light removed → biosynthetic phase stops immediately → light restored → no effect",
    "Light removed → biosynthetic phase continues briefly → stops → light restored → synthesis restarts",
    "Light removed → biosynthetic phase speeds up → light restored → phase slows down",
    "Light removed → O₂ production increases → light restored → O₂ decreases"
  ],
  correct: 1,
  explanation: "NCERT describes: when light becomes unavailable, biosynthetic process continues for some time (using residual ATP/NADPH), then stops. When light returns, synthesis restarts as ATP/NADPH are replenished."
},
{
  id: 380,
  topic: "Where Are ATP and NADPH Used?",
  q: "Select the <b>incorrect</b> statement:",
  options: [
    "O₂ diffuses out of the chloroplast",
    "ATP and NADPH are used for sugar synthesis",
    "The biosynthetic phase directly depends on light",
    "CO₂ is required for the biosynthetic phase"
  ],
  correct: 2,
  explanation: "NCERT states the biosynthetic phase 'does not directly depend on the presence of light.' It indirectly depends on light through ATP and NADPH. Saying it DIRECTLY depends on light is incorrect."
},
{
  id: 381,
  topic: "Where Are ATP and NADPH Used?",
  q: "<b>Assertion (A):</b> The discovery of C₃ and C₄ pathways showed that not all plants fix CO₂ in the same way.<br><b>Reason (R):</b> In C₃ plants, PGA is the first product, while in C₄ plants, OAA is the first stable product.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The existence of two pathways proves that different plants fix CO₂ differently. R correctly explains A by identifying the distinct first products of each pathway."
},
{
  id: 382,
  topic: "Where Are ATP and NADPH Used?",
  q: "The discovery that some plants have OAA as the first CO₂ fixation product was made through:",
  options: [
    "Studies on a single plant species",
    "Experiments conducted over a wide range of plants",
    "Theoretical calculations only",
    "Electron microscopy of chloroplasts"
  ],
  correct: 1,
  explanation: "NCERT states: 'Experiments conducted over a wide range of plants led to the discovery of another group of plants, where the first stable product of CO₂ fixation was again an organic acid, but one which had 4 carbon atoms.'"
},
{
  id: 383,
  topic: "Where Are ATP and NADPH Used?",
  q: "Which of the following pairs is correctly matched?",
  options: [
    "C₃ plants — OAA — Calvin cycle",
    "C₄ plants — PGA — Hatch-Slack pathway",
    "C₃ plants — PGA — Calvin cycle",
    "C₄ plants — PGA — Calvin cycle"
  ],
  correct: 2,
  explanation: "C₃ plants have PGA as first product and follow the Calvin cycle. C₄ plants have OAA as first product and follow the C₄ (Hatch-Slack) pathway. Option C correctly matches all three."
},
{
  id: 384,
  topic: "Where Are ATP and NADPH Used?",
  q: "Consider the following statements:<br>(i) The biosynthetic phase continues indefinitely in darkness<br>(ii) ATP and NADPH from light reactions drive the biosynthetic phase<br>(iii) O₂ is used in the biosynthetic phase<br>(iv) CO₂ is fixed into organic acids during the biosynthetic phase<br><br>How many statements are correct?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "Only statements (ii) and (iv) are correct. Statement (i) is wrong — the process stops when ATP/NADPH are exhausted. Statement (iii) is wrong — O₂ is a byproduct of light reactions, not used in the biosynthetic phase."
},
{
  id: 385,
  topic: "Where Are ATP and NADPH Used?",
  q: "<b>Assertion (A):</b> 'Dark reaction' is a misnomer for the biosynthetic phase.<br><b>Reason (R):</b> The biosynthetic phase depends on ATP and NADPH produced only during light reactions and cannot continue indefinitely in the dark.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT implies that 'dark reaction' is misleading because the process cannot occur indefinitely without light. Since it depends on light-generated ATP and NADPH, calling it 'dark reaction' is a misnomer. R correctly explains A."
},
{
  id: 386,
  topic: "Where Are ATP and NADPH Used?",
  q: "The biosynthetic phase of photosynthesis takes place in:",
  options: [
    "The thylakoid membrane",
    "The thylakoid lumen",
    "The stroma of the chloroplast",
    "The cytoplasm"
  ],
  correct: 2,
  explanation: "The biosynthetic phase (Calvin cycle/dark reactions) takes place in the stroma of the chloroplast, where the enzymes for CO₂ fixation and sugar synthesis are located. NCERT earlier mentioned that 'In stroma, enzymatic reactions synthesise sugar.'"
},
{
  id: 387,
  topic: "Where Are ATP and NADPH Used?",
  q: "Which of the following flow charts correctly represents the fate of light reaction products?",
  options: [
    "Light reactions → ATP + NADPH + O₂ → all three used in dark reactions",
    "Light reactions → ATP + NADPH + O₂ → O₂ diffuses out; ATP + NADPH used in biosynthetic phase",
    "Light reactions → ATP + O₂ → both used in dark reactions; NADPH is released",
    "Light reactions → NADPH + O₂ → both used in Calvin cycle"
  ],
  correct: 1,
  explanation: "Light reactions produce ATP, NADPH, and O₂. O₂ diffuses out of the chloroplast. ATP and NADPH are used in the biosynthetic phase (dark reactions) for CO₂ fixation and sugar synthesis."
},
{
  id: 388,
  topic: "Where Are ATP and NADPH Used?",
  q: "PGA stands for:",
  options: [
    "Phosphoglycolate acid",
    "3-Phosphoglyceric acid",
    "Phosphogluconic acid",
    "Pyruvate-glycerate acid"
  ],
  correct: 1,
  explanation: "NCERT states: 'The first product identified was 3-phosphoglyceric acid or in short PGA.' It is a 3-carbon organic acid and the first stable product of CO₂ fixation in C₃ plants."
},
{
  id: 389,
  topic: "Where Are ATP and NADPH Used?",
  q: "OAA stands for:",
  options: [
    "Oxalic acid",
    "Oleic acetic acid",
    "Oxaloacetic acid",
    "Oxalogenic acid"
  ],
  correct: 2,
  explanation: "NCERT states: 'This acid was identified to be oxaloacetic acid or OAA.' It is a 4-carbon organic acid and the first stable product of CO₂ fixation in C₄ plants."
},
{
  id: 390,
  topic: "Where Are ATP and NADPH Used?",
  q: "Which of the following correctly describes the relationship between C₃ and C₄ pathways?",
  options: [
    "C₃ and C₄ pathways are completely unrelated processes",
    "C₃ pathway occurs in all plants; C₄ pathway is additional in certain plants",
    "C₄ pathway replaces C₃ pathway entirely in C₄ plants",
    "Both pathways produce identical first products"
  ],
  correct: 1,
  explanation: "The Calvin cycle (C₃ pathway) occurs in ALL plants. In C₄ plants, the C₄ pathway is an additional mechanism where CO₂ is first fixed into OAA before being passed to the Calvin cycle. C₄ plants have both pathways."
},
{
  id: 391,
  topic: "Where Are ATP and NADPH Used?",
  q: "Calvin's research was described by NCERT as 'exemplary' among post-war efforts to:",
  options: [
    "Develop nuclear weapons",
    "Put radioisotopes to beneficial use",
    "Build new types of microscopes",
    "Develop new crop varieties"
  ],
  correct: 1,
  explanation: "NCERT states: 'among the several efforts to put radioisotopes to beneficial use, the work of Melvin Calvin is exemplary.' He used ¹⁴C (a radioactive isotope) to study photosynthesis."
}
,
{
  id: 392,
  topic: "The Primary Acceptor of CO₂",
  q: "The primary acceptor of CO₂ in the Calvin cycle is:",
  options: [
    "A 2-carbon compound",
    "A 3-carbon compound (PGA)",
    "A 5-carbon ketose sugar (RuBP)",
    "A 6-carbon sugar (glucose)"
  ],
  correct: 2,
  explanation: "NCERT states: 'the acceptor molecule was a 5-carbon ketose sugar – ribulose bisphosphate (RuBP).' This was unexpected because scientists initially assumed it would be a 2-carbon compound."
},
{
  id: 393,
  topic: "The Primary Acceptor of CO₂",
  q: "Scientists initially believed the primary CO₂ acceptor would be a:",
  options: [
    "3-carbon compound",
    "5-carbon compound",
    "2-carbon compound",
    "6-carbon compound"
  ],
  correct: 2,
  explanation: "NCERT states: 'they also believed that since the first product was a C₃ acid, the primary acceptor would be a 2-carbon compound.' The logic was: 2C + 1C (CO₂) = 3C (PGA). However, the actual acceptor was the 5-carbon RuBP."
},
{
  id: 394,
  topic: "The Primary Acceptor of CO₂",
  q: "RuBP stands for:",
  options: [
    "Ribulose biphosphate",
    "Ribulose bisphosphate",
    "Ribose bisphosphate",
    "Ribulose monophosphate"
  ],
  correct: 1,
  explanation: "NCERT states the acceptor was 'ribulose bisphosphate (RuBP).' It is a 5-carbon ketose sugar with two phosphate groups. 'Bisphosphate' (not biphosphate) is the correct term."
},
{
  id: 395,
  topic: "The Primary Acceptor of CO₂",
  q: "RuBP is a:",
  options: [
    "5-carbon aldose sugar",
    "5-carbon ketose sugar",
    "6-carbon ketose sugar",
    "3-carbon organic acid"
  ],
  correct: 1,
  explanation: "NCERT specifically describes RuBP as 'a 5-carbon ketose sugar.' Ketose means it has a ketone functional group, distinguishing it from aldose sugars."
},
{
  id: 396,
  topic: "The Primary Acceptor of CO₂",
  q: "<b>Assertion (A):</b> Scientists expected the primary CO₂ acceptor to be a 2-carbon compound.<br><b>Reason (R):</b> Since the first product (PGA) had 3 carbons, adding 1 carbon from CO₂ to a 2-carbon compound would logically produce a 3-carbon product.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The scientists' logic was: 2C acceptor + 1C (CO₂) = 3C (PGA). This reasoning, though logical, was wrong — the actual acceptor is the 5C RuBP, which combines with CO₂ to form an unstable 6C intermediate that immediately splits into two 3C PGA molecules. R correctly explains A."
},
{
  id: 397,
  topic: "The Primary Acceptor of CO₂",
  q: "When RuBP (5C) accepts CO₂ (1C), the product formed is:",
  options: [
    "One molecule of 6-carbon sugar",
    "Two molecules of 3-PGA (3C each)",
    "One molecule of 3-PGA and one molecule of 3C sugar",
    "Three molecules of 2-carbon compound"
  ],
  correct: 1,
  explanation: "When RuBP (5C) fixes CO₂ (1C), an unstable 6C intermediate is formed that immediately breaks into two molecules of 3-PGA (3C each). NCERT states the reaction 'results in the formation of two molecules of 3-PGA.'"
},
{
  id: 398,
  topic: "The Primary Acceptor of CO₂",
  q: "How many carbon atoms does the molecule have which, after fixing CO₂, would produce PGA (3C)?",
  options: [
    "2 carbon atoms",
    "3 carbon atoms",
    "4 carbon atoms",
    "5 carbon atoms"
  ],
  correct: 3,
  explanation: "NCERT asks this question and answers: the acceptor is RuBP with 5 carbon atoms. RuBP (5C) + CO₂ (1C) → unstable 6C → 2 × PGA (3C). This was 'very unexpected' to scientists."
},
{
  id: 399,
  topic: "The Calvin Cycle",
  q: "The Calvin pathway occurs in:",
  options: [
    "Only C₃ plants",
    "Only C₄ plants",
    "All photosynthetic plants",
    "Only in algae"
  ],
  correct: 2,
  explanation: "NCERT emphatically states: 'the Calvin pathway occurs in all photosynthetic plants; it does not matter whether they have C₃ or C₄ (or any other) pathways.' This is a crucial NEET concept."
},
{
  id: 400,
  topic: "The Calvin Cycle",
  q: "The three stages of the Calvin cycle are:",
  options: [
    "Glycolysis, Krebs cycle, and ETC",
    "Carboxylation, oxidation, and regeneration",
    "Carboxylation, reduction, and regeneration",
    "Fixation, phosphorylation, and hydrolysis"
  ],
  correct: 2,
  explanation: "NCERT states: 'the Calvin cycle can be described under three stages: carboxylation, reduction and regeneration.' These three stages complete one turn of the Calvin cycle."
},
{
  id: 401,
  topic: "The Calvin Cycle",
  q: "Carboxylation in the Calvin cycle refers to:",
  options: [
    "Release of CO₂ from organic compounds",
    "Fixation of CO₂ into a stable organic intermediate",
    "Reduction of CO₂ to glucose",
    "Regeneration of RuBP"
  ],
  correct: 1,
  explanation: "NCERT states: 'Carboxylation is the fixation of CO₂ into a stable organic intermediate.' It is the most crucial step where CO₂ is used for carboxylation of RuBP."
},
{
  id: 402,
  topic: "The Calvin Cycle",
  q: "Carboxylation is described as the most crucial step of the Calvin cycle because:",
  options: [
    "It produces glucose directly",
    "It is the step where CO₂ is fixed into a stable organic intermediate",
    "It regenerates RuBP",
    "It produces NADPH"
  ],
  correct: 1,
  explanation: "NCERT states: 'Carboxylation is the most crucial step of the Calvin cycle where CO₂ is utilised for the carboxylation of RuBP.' Without this step, carbon from CO₂ cannot enter the organic compound pool."
},
{
  id: 403,
  topic: "The Calvin Cycle",
  q: "The enzyme that catalyses the carboxylation of RuBP is:",
  options: [
    "PEP carboxylase",
    "RuBP carboxylase-oxygenase (RuBisCO)",
    "ATP synthase",
    "NADP reductase"
  ],
  correct: 1,
  explanation: "NCERT states: 'This reaction is catalysed by the enzyme RuBP carboxylase which results in the formation of two molecules of 3-PGA. Since this enzyme also has an oxygenation activity it would be more correct to call it RuBP carboxylase-oxygenase or RuBisCO.'"
},
{
  id: 404,
  topic: "The Calvin Cycle",
  q: "RuBisCO stands for:",
  options: [
    "Ribulose biphosphate carboxylase oxidase",
    "RuBP carboxylase-oxygenase",
    "Ribulose bisphosphate carboxylase-oxidoreductase",
    "Ribose bisphosphate carboxylase-oxygenase"
  ],
  correct: 1,
  explanation: "NCERT states: 'it would be more correct to call it RuBP carboxylase-oxygenase or RuBisCO.' The enzyme has both carboxylase and oxygenase activities."
},
{
  id: 405,
  topic: "The Calvin Cycle",
  q: "RuBisCO has dual activity. These are:",
  options: [
    "Carboxylation and reduction",
    "Carboxylation and oxygenation",
    "Reduction and regeneration",
    "Oxygenation and phosphorylation"
  ],
  correct: 1,
  explanation: "NCERT states: 'this enzyme also has an oxygenation activity' in addition to carboxylation. RuBisCO can fix both CO₂ (carboxylation) and O₂ (oxygenation). The oxygenation activity leads to photorespiration."
},
{
  id: 406,
  topic: "The Calvin Cycle",
  q: "<b>Assertion (A):</b> RuBisCO is more correctly called RuBP carboxylase-oxygenase.<br><b>Reason (R):</b> The enzyme has both carboxylation and oxygenation activities.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. The dual activity (carboxylase + oxygenase) justifies calling the enzyme RuBP carboxylase-oxygenase (RuBisCO). R correctly explains A."
},
{
  id: 407,
  topic: "The Calvin Cycle",
  q: "During carboxylation, one molecule of CO₂ combines with one molecule of RuBP to form:",
  options: [
    "One molecule of 3-PGA",
    "Two molecules of 3-PGA",
    "One molecule of glucose",
    "One molecule of OAA"
  ],
  correct: 1,
  explanation: "NCERT states carboxylation of RuBP by RuBisCO 'results in the formation of two molecules of 3-PGA.' RuBP (5C) + CO₂ (1C) → unstable 6C intermediate → 2 × 3-PGA (3C each)."
},
{
  id: 408,
  topic: "The Calvin Cycle",
  q: "The reduction stage of the Calvin cycle involves:",
  options: [
    "Fixation of CO₂",
    "Series of reactions leading to glucose formation using ATP and NADPH",
    "Regeneration of RuBP",
    "Splitting of water"
  ],
  correct: 1,
  explanation: "NCERT states: 'Reduction – These are a series of reactions that lead to the formation of glucose.' During reduction, 'carbohydrate is formed at the expense of the photochemically made ATP and NADPH.'"
},
{
  id: 409,
  topic: "The Calvin Cycle",
  q: "For each CO₂ molecule fixed in the Calvin cycle, the reduction step requires:",
  options: [
    "2 ATP and 2 NADPH",
    "3 ATP and 2 NADPH",
    "1 ATP and 1 NADPH",
    "3 ATP and 3 NADPH"
  ],
  correct: 0,
  explanation: "NCERT states: 'The steps involve utilisation of 2 molecules of ATP for phosphorylation and two of NADPH for reduction per CO₂ molecule fixed.' Note: This is for the reduction step specifically."
},
{
  id: 410,
  topic: "The Calvin Cycle",
  q: "In the reduction step, ATP is used for:",
  options: [
    "Carboxylation",
    "Phosphorylation",
    "Oxygenation",
    "Hydrolysis"
  ],
  correct: 1,
  explanation: "NCERT states: 'utilisation of 2 molecules of ATP for phosphorylation.' ATP provides the phosphate group and energy for phosphorylating 3-PGA to form 1,3-bisphosphoglyceric acid."
},
{
  id: 411,
  topic: "The Calvin Cycle",
  q: "In the reduction step, NADPH is used for:",
  options: [
    "Phosphorylation",
    "Reduction",
    "Carboxylation",
    "Regeneration"
  ],
  correct: 1,
  explanation: "NCERT states: 'two of NADPH for reduction per CO₂ molecule fixed.' NADPH provides the reducing power (electrons and H⁺) to reduce 1,3-bisphosphoglyceric acid to glyceraldehyde-3-phosphate (G3P)."
},
{
  id: 412,
  topic: "The Calvin Cycle",
  q: "How many turns of the Calvin cycle are required for the formation of one molecule of glucose?",
  options: [
    "3 turns",
    "4 turns",
    "6 turns",
    "12 turns"
  ],
  correct: 2,
  explanation: "NCERT states: 'The fixation of six molecules of CO₂ and 6 turns of the cycle are required for the formation of one molecule of glucose.' Each turn fixes one CO₂, so 6 turns for glucose (6C)."
},
{
  id: 413,
  topic: "The Calvin Cycle",
  q: "Regeneration in the Calvin cycle refers to:",
  options: [
    "Formation of glucose",
    "Fixation of CO₂",
    "Regeneration of the CO₂ acceptor molecule RuBP",
    "Production of NADPH"
  ],
  correct: 2,
  explanation: "NCERT states: 'Regeneration of the CO₂ acceptor molecule RuBP is crucial if the cycle is to continue uninterrupted.' Without RuBP regeneration, the cycle cannot accept new CO₂ molecules."
},
{
  id: 414,
  topic: "The Calvin Cycle",
  q: "The regeneration step of the Calvin cycle requires:",
  options: [
    "2 ATP and 2 NADPH",
    "1 ATP for phosphorylation to form RuBP",
    "3 ATP and 2 NADPH",
    "No ATP or NADPH"
  ],
  correct: 1,
  explanation: "NCERT states: 'The regeneration steps require one ATP for phosphorylation to form RuBP.' This ATP converts ribulose-5-phosphate to ribulose-1,5-bisphosphate (RuBP)."
},
{
  id: 415,
  topic: "The Calvin Cycle",
  q: "For every CO₂ molecule entering the Calvin cycle, the total requirement is:",
  options: [
    "2 ATP and 2 NADPH",
    "3 ATP and 2 NADPH",
    "3 ATP and 3 NADPH",
    "6 ATP and 6 NADPH"
  ],
  correct: 1,
  explanation: "NCERT states: 'for every CO₂ molecule entering the Calvin cycle, 3 molecules of ATP and 2 of NADPH are required.' This includes 2 ATP for reduction + 1 ATP for regeneration = 3 ATP, and 2 NADPH for reduction."
},
{
  id: 416,
  topic: "The Calvin Cycle",
  q: "The difference in the number of ATP and NADPH used in the Calvin cycle is probably met by:",
  options: [
    "Non-cyclic photophosphorylation alone",
    "Oxidative phosphorylation in mitochondria",
    "Cyclic photophosphorylation",
    "Substrate-level phosphorylation"
  ],
  correct: 2,
  explanation: "NCERT states: 'It is probably to meet this difference in number of ATP and NADPH used in the dark reaction that the cyclic phosphorylation takes place.' Cyclic photophosphorylation produces extra ATP without NADPH."
},
{
  id: 417,
  topic: "The Calvin Cycle",
  q: "<b>Assertion (A):</b> Cyclic photophosphorylation is important for the Calvin cycle.<br><b>Reason (R):</b> The Calvin cycle requires more ATP than NADPH per CO₂ fixed, and cyclic photophosphorylation supplies the extra ATP.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The Calvin cycle needs 3 ATP : 2 NADPH per CO₂. Non-cyclic flow produces ATP and NADPH in roughly equal amounts, so cyclic flow generates the extra ATP. R correctly explains A."
},
{
  id: 418,
  topic: "The Calvin Cycle",
  q: "To make one molecule of glucose, the total ATP requirement in the Calvin cycle is:",
  options: [
    "6 ATP",
    "12 ATP",
    "18 ATP",
    "24 ATP"
  ],
  correct: 2,
  explanation: "NCERT states: 'In: Six CO₂, 18 ATP, 12 NADPH.' Since 3 ATP per CO₂ × 6 CO₂ = 18 ATP for one glucose molecule."
},
{
  id: 419,
  topic: "The Calvin Cycle",
  q: "To make one molecule of glucose, the total NADPH requirement in the Calvin cycle is:",
  options: [
    "6 NADPH",
    "12 NADPH",
    "18 NADPH",
    "24 NADPH"
  ],
  correct: 1,
  explanation: "NCERT states: 'In: 12 NADPH.' Since 2 NADPH per CO₂ × 6 CO₂ = 12 NADPH for one glucose molecule."
},
{
  id: 420,
  topic: "The Calvin Cycle",
  q: "The inputs and outputs of the Calvin cycle for one glucose molecule are:<br>Select the <b>correct</b> option:",
  options: [
    "In: 6CO₂, 18 ATP, 12 NADPH → Out: 1 glucose, 18 ADP, 12 NADP⁺",
    "In: 6CO₂, 12 ATP, 18 NADPH → Out: 1 glucose, 12 ADP, 18 NADP⁺",
    "In: 6CO₂, 18 ATP, 18 NADPH → Out: 1 glucose, 18 ADP, 18 NADP⁺",
    "In: 12CO₂, 18 ATP, 12 NADPH → Out: 2 glucose, 18 ADP, 12 NADP⁺"
  ],
  correct: 0,
  explanation: "NCERT provides the table: In — Six CO₂, 18 ATP, 12 NADPH; Out — One glucose, 18 ADP, 12 NADP⁺. This is a direct NCERT fact frequently tested in NEET."
},
{
  id: 421,
  topic: "The Calvin Cycle",
  q: "Match the Calvin cycle stages with their functions:<br>(i) Carboxylation — (P) Formation of glucose using ATP and NADPH<br>(ii) Reduction — (Q) Fixation of CO₂ into RuBP<br>(iii) Regeneration — (R) Reformation of RuBP",
  options: [
    "(i)-Q, (ii)-P, (iii)-R",
    "(i)-P, (ii)-Q, (iii)-R",
    "(i)-R, (ii)-P, (iii)-Q",
    "(i)-Q, (ii)-R, (iii)-P"
  ],
  correct: 0,
  explanation: "Carboxylation = Fixation of CO₂ (Q); Reduction = Formation of glucose using ATP and NADPH (P); Regeneration = Reformation of RuBP (R). This matches option A."
},
{
  id: 422,
  topic: "The Calvin Cycle",
  q: "Which of the following is <b>incorrect</b> about the Calvin cycle?",
  options: [
    "It occurs in the stroma of chloroplasts",
    "It occurs only in C₃ plants",
    "RuBisCO catalyses the carboxylation step",
    "6 turns are needed to produce one glucose molecule"
  ],
  correct: 1,
  explanation: "NCERT clearly states: 'the Calvin pathway occurs in all photosynthetic plants; it does not matter whether they have C₃ or C₄ (or any other) pathways.' Saying it occurs only in C₃ plants is incorrect."
},
{
  id: 423,
  topic: "The Calvin Cycle",
  q: "During the Calvin cycle, RuBP is regenerated in the:",
  options: [
    "Carboxylation stage",
    "Reduction stage",
    "Regeneration stage",
    "All three stages equally"
  ],
  correct: 2,
  explanation: "NCERT states: 'Regeneration of the CO₂ acceptor molecule RuBP is crucial if the cycle is to continue uninterrupted.' RuBP is specifically regenerated in the regeneration stage using 1 ATP."
},
{
  id: 424,
  topic: "The Calvin Cycle",
  q: "<b>Assertion (A):</b> The Calvin cycle is a cyclic pathway.<br><b>Reason (R):</b> RuBP, the CO₂ acceptor, is regenerated at the end of each turn of the cycle.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states 'the pathway operated in a cyclic manner; the RuBP was regenerated.' The cycle is cyclic precisely because RuBP is regenerated, allowing continuous CO₂ fixation. R correctly explains A."
},
{
  id: 425,
  topic: "The Calvin Cycle",
  q: "Per turn of the Calvin cycle (one CO₂ fixed), the ATP requirement is distributed as:",
  options: [
    "3 ATP for reduction, 0 for regeneration",
    "2 ATP for reduction, 1 ATP for regeneration",
    "1 ATP for reduction, 2 ATP for regeneration",
    "3 ATP for carboxylation, 0 for reduction"
  ],
  correct: 1,
  explanation: "NCERT states: '2 molecules of ATP for phosphorylation' in the reduction step and '1 ATP for phosphorylation to form RuBP' in the regeneration step. Total = 2 + 1 = 3 ATP per CO₂."
},
{
  id: 426,
  topic: "The Calvin Cycle",
  q: "Consider the following about the Calvin cycle:<br>(A) Carboxylation fixes CO₂ into a stable organic intermediate<br>(B) Reduction forms carbohydrate at the expense of ATP and NADPH<br>(C) Regeneration forms RuBP so the cycle continues<br>(D) Carboxylation is catalysed by NADP reductase",
  options: [
    "(A), (B), (C) and (D)",
    "(A), (B) and (C) only",
    "(B) and (C) only",
    "(A) and (D) only"
  ],
  correct: 1,
  explanation: "Statements A, B, and C are correct as per NCERT. Statement D is wrong — carboxylation is catalysed by RuBisCO, not NADP reductase. NADP reductase is involved in reducing NADP⁺ to NADPH in the light reactions."
},
{
  id: 427,
  topic: "The Calvin Cycle",
  q: "For the formation of one glucose molecule, how many CO₂ molecules must be fixed?",
  options: [
    "3",
    "4",
    "6",
    "12"
  ],
  correct: 2,
  explanation: "NCERT states: 'The fixation of six molecules of CO₂ and 6 turns of the cycle are required for the formation of one molecule of glucose.' Glucose has 6 carbons, requiring 6 CO₂."
},
{
  id: 428,
  topic: "The Primary Acceptor of CO₂",
  q: "Select the <b>incorrect</b> statement about the primary acceptor of CO₂:",
  options: [
    "It is a 5-carbon ketose sugar",
    "It is called ribulose bisphosphate (RuBP)",
    "It is a 2-carbon compound as initially expected by scientists",
    "Its discovery was unexpected"
  ],
  correct: 2,
  explanation: "The primary acceptor is NOT a 2-carbon compound. Scientists initially expected it to be 2C, but 'the studies very unexpectedly showed that the acceptor molecule was a 5-carbon ketose sugar – RuBP.'"
},
{
  id: 429,
  topic: "The Calvin Cycle",
  q: "Which stage of the Calvin cycle does NOT directly use ATP or NADPH?",
  options: [
    "Carboxylation",
    "Reduction",
    "Regeneration",
    "Both reduction and regeneration"
  ],
  correct: 0,
  explanation: "Carboxylation uses only CO₂ and RuBP (catalysed by RuBisCO) — no ATP or NADPH is directly required. Reduction uses 2 ATP and 2 NADPH per CO₂. Regeneration uses 1 ATP per CO₂."
},
{
  id: 430,
  topic: "The Calvin Cycle",
  q: "The ratio of ATP to NADPH required per CO₂ molecule in the Calvin cycle is:",
  options: [
    "2 : 3",
    "3 : 2",
    "1 : 1",
    "6 : 6"
  ],
  correct: 1,
  explanation: "NCERT states: 'for every CO₂ molecule entering the Calvin cycle, 3 molecules of ATP and 2 of NADPH are required.' So the ratio is 3 ATP : 2 NADPH."
},
{
  id: 431,
  topic: "The Calvin Cycle",
  q: "The ratio of ATP to NADPH required for one glucose molecule in the Calvin cycle is:",
  options: [
    "12 : 18",
    "18 : 12",
    "18 : 18",
    "12 : 12"
  ],
  correct: 1,
  explanation: "For one glucose: 18 ATP and 12 NADPH are required (6 CO₂ × 3 ATP = 18 ATP; 6 CO₂ × 2 NADPH = 12 NADPH). The ratio is 18:12 or simplified 3:2."
},
{
  id: 432,
  topic: "The Calvin Cycle",
  q: "<b>Assertion (A):</b> RuBP regeneration is crucial for the Calvin cycle.<br><b>Reason (R):</b> Without RuBP, CO₂ cannot be fixed and the cycle would stop.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states: 'Regeneration of the CO₂ acceptor molecule RuBP is crucial if the cycle is to continue uninterrupted.' Since RuBP is the CO₂ acceptor, without it, carboxylation cannot occur. R correctly explains A."
},
{
  id: 433,
  topic: "The Calvin Cycle",
  q: "Which of the following correctly represents the output of 6 turns of the Calvin cycle?",
  options: [
    "6 glucose molecules",
    "1 glucose molecule, 18 ADP, 12 NADP⁺",
    "1 glucose molecule, 12 ADP, 18 NADP⁺",
    "2 glucose molecules, 18 ADP, 12 NADP⁺"
  ],
  correct: 1,
  explanation: "NCERT table shows: Out — One glucose, 18 ADP, 12 NADP⁺. Six turns of the cycle fix 6 CO₂ and produce one glucose molecule."
},
{
  id: 434,
  topic: "The Calvin Cycle",
  q: "The enzyme RuBisCO is significant because:<br>(i) It is the most abundant enzyme on earth<br>(ii) It catalyses the most crucial step of the Calvin cycle<br>(iii) It has dual activity — carboxylation and oxygenation<br>(iv) It is found only in C₃ plants",
  options: [
    "(i), (ii) and (iii) only",
    "(ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(iv) only"
  ],
  correct: 0,
  explanation: "Statements (i), (ii), and (iii) are correct. RuBisCO is the most abundant enzyme on earth, catalyses the crucial carboxylation step, and has both carboxylase and oxygenase activities. Statement (iv) is wrong — RuBisCO is found in ALL photosynthetic plants (C₃, C₄, and others)."
},
{
  id: 435,
  topic: "The Calvin Cycle",
  q: "During carboxylation, CO₂ combines with:",
  options: [
    "PGA",
    "G3P (glyceraldehyde-3-phosphate)",
    "Ribulose-1,5-bisphosphate",
    "Phosphoenolpyruvate (PEP)"
  ],
  correct: 2,
  explanation: "NCERT states: 'carboxylation, during which CO₂ combines with ribulose-1,5-bisphosphate.' RuBP is the CO₂ acceptor molecule in the Calvin cycle. PEP is the CO₂ acceptor in C₄ pathway."
},
{
  id: 436,
  topic: "The Calvin Cycle",
  q: "If 12 CO₂ molecules enter the Calvin cycle, how many ATP and NADPH molecules would be required?",
  options: [
    "36 ATP and 24 NADPH",
    "24 ATP and 36 NADPH",
    "18 ATP and 12 NADPH",
    "36 ATP and 36 NADPH"
  ],
  correct: 0,
  explanation: "Per CO₂: 3 ATP and 2 NADPH. For 12 CO₂: 12 × 3 = 36 ATP and 12 × 2 = 24 NADPH. This would produce 2 glucose molecules (12C total)."
},
{
  id: 437,
  topic: "The Calvin Cycle",
  q: "If 12 CO₂ molecules enter the Calvin cycle, how many glucose molecules would be produced?",
  options: [
    "1",
    "2",
    "6",
    "12"
  ],
  correct: 1,
  explanation: "6 CO₂ → 1 glucose. So 12 CO₂ → 2 glucose molecules. Each glucose has 6 carbons, and 12 CO₂ provides 12 carbon atoms, enough for 2 glucose molecules."
},
{
  id: 438,
  topic: "The Calvin Cycle",
  q: "Which of the following is the correct sequence of stages in the Calvin cycle?",
  options: [
    "Reduction → Carboxylation → Regeneration",
    "Regeneration → Carboxylation → Reduction",
    "Carboxylation → Reduction → Regeneration",
    "Carboxylation → Regeneration → Reduction"
  ],
  correct: 2,
  explanation: "The correct sequence is: Carboxylation (CO₂ fixation) → Reduction (PGA reduced to G3P using ATP and NADPH) → Regeneration (RuBP reformed using ATP). This is directly from NCERT."
},
{
  id: 439,
  topic: "The Primary Acceptor of CO₂",
  q: "<b>Assertion (A):</b> The discovery that RuBP (5C) is the primary CO₂ acceptor was unexpected.<br><b>Reason (R):</b> Scientists had spent many years trying to identify a 2-carbon compound as the acceptor.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states: 'The studies very unexpectedly showed that the acceptor molecule was a 5-carbon ketose sugar' and 'they spent many years trying to identify a 2-carbon compound before they discovered the 5-carbon RuBP.' R explains why the discovery was unexpected."
},
{
  id: 440,
  topic: "The Calvin Cycle",
  q: "The oxygenation activity of RuBisCO leads to:",
  options: [
    "Increased glucose production",
    "Photorespiration",
    "Increased NADPH production",
    "Enhanced Calvin cycle efficiency"
  ],
  correct: 1,
  explanation: "The oxygenation activity of RuBisCO leads to photorespiration, a wasteful process where O₂ is fixed instead of CO₂. NCERT mentions the oxygenation activity and its implications are discussed in later sections."
},
{
  id: 441,
  topic: "The Calvin Cycle",
  q: "How many molecules of 3-PGA are formed when 6 CO₂ are fixed in the Calvin cycle?",
  options: [
    "6",
    "12",
    "18",
    "3"
  ],
  correct: 1,
  explanation: "Each CO₂ fixed with RuBP produces 2 molecules of 3-PGA. For 6 CO₂: 6 × 2 = 12 molecules of 3-PGA."
},
{
  id: 442,
  topic: "The Calvin Cycle",
  q: "In the Calvin cycle, the net carbon gain per turn is:",
  options: [
    "5 carbon atoms",
    "3 carbon atoms",
    "1 carbon atom",
    "6 carbon atoms"
  ],
  correct: 2,
  explanation: "Per turn, one CO₂ (1C) is fixed. RuBP (5C) + CO₂ (1C) → 2 PGA (6C total). But 5C worth of carbon goes back to regenerate RuBP. So the net gain is 1 carbon per turn."
},
{
  id: 443,
  topic: "The Calvin Cycle",
  q: "Select the correct statement about the Calvin cycle:",
  options: [
    "It occurs only in the thylakoid membrane",
    "It requires light energy directly",
    "Carboxylation does not require ATP or NADPH directly",
    "Regeneration does not require ATP"
  ],
  correct: 2,
  explanation: "Carboxylation (CO₂ + RuBP → 2 PGA, catalysed by RuBisCO) does not directly use ATP or NADPH. ATP and NADPH are used in the reduction and regeneration steps."
},
{
  id: 444,
  topic: "The Calvin Cycle",
  q: "Which of the following tables is correct for the Calvin cycle?",
  options: [
    "Per CO₂: 2 ATP, 3 NADPH; Per glucose: 12 ATP, 18 NADPH",
    "Per CO₂: 3 ATP, 2 NADPH; Per glucose: 18 ATP, 12 NADPH",
    "Per CO₂: 3 ATP, 3 NADPH; Per glucose: 18 ATP, 18 NADPH",
    "Per CO₂: 2 ATP, 2 NADPH; Per glucose: 12 ATP, 12 NADPH"
  ],
  correct: 1,
  explanation: "NCERT: Per CO₂ = 3 ATP + 2 NADPH. Per glucose (6 CO₂) = 18 ATP + 12 NADPH. This is a direct NCERT-based calculation frequently tested in NEET."
},
{
  id: 445,
  topic: "The Calvin Cycle",
  q: "Which step of the Calvin cycle uses NADPH?",
  options: [
    "Carboxylation",
    "Reduction",
    "Regeneration",
    "Both carboxylation and regeneration"
  ],
  correct: 1,
  explanation: "NADPH is used only in the reduction step. NCERT states: 'two of NADPH for reduction per CO₂ molecule fixed.' Carboxylation uses no ATP/NADPH directly, and regeneration uses only ATP."
},
{
  id: 446,
  topic: "The Calvin Cycle",
  q: "Which step(s) of the Calvin cycle use ATP?",
  options: [
    "Reduction only",
    "Regeneration only",
    "Both reduction and regeneration",
    "Carboxylation only"
  ],
  correct: 2,
  explanation: "ATP is used in both reduction (2 ATP for phosphorylation) and regeneration (1 ATP to form RuBP). Total = 3 ATP per CO₂. Carboxylation does not use ATP directly."
},
{
  id: 447,
  topic: "The Primary Acceptor of CO₂",
  q: "How many carbon atoms does the unstable intermediate formed when CO₂ combines with RuBP have?",
  options: [
    "3",
    "4",
    "5",
    "6"
  ],
  correct: 3,
  explanation: "RuBP (5C) + CO₂ (1C) = unstable 6C intermediate. This intermediate immediately breaks into two molecules of 3-PGA (3C each). The 6C intermediate is too unstable to be isolated."
},
{
  id: 448,
  topic: "The Calvin Cycle",
  q: "<b>Assertion (A):</b> The Calvin cycle occurs in C₄ plants as well.<br><b>Reason (R):</b> C₄ plants use the C₄ pathway only as an additional CO₂ concentration mechanism, but the actual CO₂ fixation into sugars occurs via the Calvin cycle.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT clearly states the Calvin pathway occurs in ALL photosynthetic plants. In C₄ plants, the C₄ pathway is a preliminary CO₂ concentrating mechanism, but the Calvin cycle is where sugars are actually synthesised. R correctly explains A."
},
{
  id: 449,
  topic: "The Calvin Cycle",
  q: "If RuBisCO is inhibited in a plant, which of the following would be directly affected?",
  options: [
    "Light reactions only",
    "Carboxylation step of the Calvin cycle",
    "Water splitting",
    "Cyclic photophosphorylation"
  ],
  correct: 1,
  explanation: "RuBisCO catalyses the carboxylation of RuBP. If inhibited, CO₂ cannot be fixed, the carboxylation step stops, and consequently the entire Calvin cycle would halt. Light reactions and water splitting are not directly affected."
},
{
  id: 450,
  topic: "The Calvin Cycle",
  q: "How many molecules of RuBP are consumed and regenerated per turn of the Calvin cycle?",
  options: [
    "1 consumed, 1 regenerated",
    "2 consumed, 2 regenerated",
    "6 consumed, 6 regenerated",
    "1 consumed, 2 regenerated"
  ],
  correct: 0,
  explanation: "Per turn: 1 RuBP is consumed (reacts with CO₂ in carboxylation) and 1 RuBP is regenerated (in the regeneration step). This is what makes it a cycle — the acceptor is continuously recycled."
},
{
  id: 451,
  topic: "The Calvin Cycle",
  q: "If the Calvin cycle is blocked at the regeneration step, which of the following would accumulate?",
  options: [
    "RuBP",
    "CO₂",
    "Triose phosphates (G3P)",
    "Glucose"
  ],
  correct: 2,
  explanation: "If regeneration is blocked, triose phosphates (G3P) cannot be converted back to RuBP. G3P would accumulate. RuBP would be depleted since it is consumed but not regenerated. CO₂ fixation would also slow down."
},
{
  id: 452,
  topic: "The Calvin Cycle",
  q: "The total number of ATP molecules used in the reduction step to produce one glucose molecule is:",
  options: [
    "6",
    "12",
    "18",
    "24"
  ],
  correct: 1,
  explanation: "Reduction uses 2 ATP per CO₂. For one glucose (6 CO₂): 6 × 2 = 12 ATP in the reduction step. The remaining 6 ATP (of the total 18) are used in the regeneration step."
},
{
  id: 453,
  topic: "The Calvin Cycle",
  q: "The total number of ATP molecules used in the regeneration step to produce one glucose molecule is:",
  options: [
    "6",
    "12",
    "18",
    "3"
  ],
  correct: 0,
  explanation: "Regeneration uses 1 ATP per CO₂. For one glucose (6 CO₂): 6 × 1 = 6 ATP in the regeneration step. Total ATP = 12 (reduction) + 6 (regeneration) = 18 ATP."
}
,
{
  id: 454,
  topic: "C₄ Pathway",
  q: "C₄ plants are adapted to:",
  options: [
    "Cold temperate regions",
    "Dry tropical regions",
    "Deep aquatic habitats",
    "Arctic tundra"
  ],
  correct: 1,
  explanation: "NCERT states: 'Plants that are adapted to dry tropical regions have the C₄ pathway.' C₄ plants are well-suited to hot, dry, and high-light environments."
},
{
  id: 455,
  topic: "C₄ Pathway",
  q: "C₄ plants use which pathway as their main biosynthetic pathway?",
  options: [
    "C₄ pathway (Hatch-Slack pathway) only",
    "C₃ pathway or Calvin cycle",
    "Glycolysis",
    "Krebs cycle"
  ],
  correct: 1,
  explanation: "NCERT states: 'Though these plants have the C₄ oxaloacetic acid as the first CO₂ fixation product they use the C₃ pathway or the Calvin cycle as the main biosynthetic pathway.' The C₄ pathway is only a CO₂ concentrating mechanism."
},
{
  id: 456,
  topic: "C₄ Pathway",
  q: "Which of the following are special characteristics of C₄ plants?<br>(i) Special type of leaf anatomy<br>(ii) Tolerate higher temperatures<br>(iii) Response to high light intensities<br>(iv) Lack photorespiration<br>(v) Greater productivity of biomass",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii), (iv) and (v)",
    "(iv) and (v) only",
    "(i) and (iv) only"
  ],
  correct: 1,
  explanation: "NCERT lists all five: 'They have a special type of leaf anatomy, they tolerate higher temperatures, they show a response to high light intensities, they lack a process called photorespiration and have greater productivity of biomass.'"
},
{
  id: 457,
  topic: "C₄ Pathway",
  q: "The particularly large cells around the vascular bundles of C₄ plants are called:",
  options: [
    "Mesophyll cells",
    "Companion cells",
    "Bundle sheath cells",
    "Guard cells"
  ],
  correct: 2,
  explanation: "NCERT states: 'The particularly large cells around the vascular bundles of the C₄ plants are called bundle sheath cells.' These cells are crucial for the Calvin cycle in C₄ plants."
},
{
  id: 458,
  topic: "C₄ Pathway",
  q: "The special leaf anatomy of C₄ plants is called:",
  options: [
    "Dorsiventral anatomy",
    "Isobilateral anatomy",
    "Kranz anatomy",
    "Centric anatomy"
  ],
  correct: 2,
  explanation: "NCERT states: 'the leaves which have such anatomy are said to have Kranz anatomy.' 'Kranz' means 'wreath' and reflects the arrangement of cells around the vascular bundles."
},
{
  id: 459,
  topic: "C₄ Pathway",
  q: "The word 'Kranz' means:",
  options: [
    "Circle",
    "Wreath",
    "Bundle",
    "Crown"
  ],
  correct: 1,
  explanation: "NCERT states: 'Kranz means wreath and is a reflection of the arrangement of cells.' The bundle sheath cells form a wreath-like arrangement around the vascular bundles."
},
{
  id: 460,
  topic: "C₄ Pathway",
  q: "Bundle sheath cells in C₄ plants are characterised by:<br>(i) Large number of chloroplasts<br>(ii) Thick walls impervious to gaseous exchange<br>(iii) No intercellular spaces<br>(iv) Thin walls with many intercellular spaces",
  options: [
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(i) and (iv) only",
    "(ii) and (iv) only"
  ],
  correct: 0,
  explanation: "NCERT states bundle sheath cells are 'characterised by having a large number of chloroplasts, thick walls impervious to gaseous exchange and no intercellular spaces.' Statement (iv) is the opposite and is wrong."
},
{
  id: 461,
  topic: "C₄ Pathway",
  q: "Examples of C₄ plants include:",
  options: [
    "Wheat and rice",
    "Maize and sorghum",
    "Pea and gram",
    "Mango and apple"
  ],
  correct: 1,
  explanation: "NCERT mentions: 'You may like to cut a section of the leaves of C₄ plants – maize or sorghum – to observe the Kranz anatomy.' Wheat and rice are C₃ plants."
},
{
  id: 462,
  topic: "C₄ Pathway",
  q: "The C₄ pathway is also known as:",
  options: [
    "Calvin cycle",
    "Hatch and Slack Pathway",
    "Krebs cycle",
    "EMP pathway"
  ],
  correct: 1,
  explanation: "NCERT states: 'This pathway that has been named the Hatch and Slack Pathway, is again a cyclic process.' It is named after the scientists Hatch and Slack who elucidated it."
},
{
  id: 463,
  topic: "C₄ Pathway",
  q: "The Hatch and Slack Pathway is:",
  options: [
    "A linear process",
    "A cyclic process",
    "A branching process",
    "An irreversible single-step reaction"
  ],
  correct: 1,
  explanation: "NCERT states: 'This pathway that has been named the Hatch and Slack Pathway, is again a cyclic process.' PEP is regenerated at the end, completing the cycle."
},
{
  id: 464,
  topic: "C₄ Pathway",
  q: "The primary CO₂ acceptor in the C₄ pathway is:",
  options: [
    "RuBP (5C)",
    "PGA (3C)",
    "Phosphoenolpyruvate or PEP (3C)",
    "OAA (4C)"
  ],
  correct: 2,
  explanation: "NCERT states: 'The primary CO₂ acceptor is a 3-carbon molecule phosphoenol pyruvate (PEP) and is present in the mesophyll cells.' PEP is a 3-carbon compound, not RuBP."
},
{
  id: 465,
  topic: "C₄ Pathway",
  q: "PEP (phosphoenolpyruvate) is present in which cells of C₄ plants?",
  options: [
    "Bundle sheath cells",
    "Mesophyll cells",
    "Epidermal cells",
    "Guard cells"
  ],
  correct: 1,
  explanation: "NCERT states: 'The primary CO₂ acceptor is a 3-carbon molecule phosphoenol pyruvate (PEP) and is present in the mesophyll cells.' The initial CO₂ fixation occurs in mesophyll cells."
},
{
  id: 466,
  topic: "C₄ Pathway",
  q: "The enzyme responsible for CO₂ fixation in the mesophyll cells of C₄ plants is:",
  options: [
    "RuBisCO",
    "PEP carboxylase or PEPcase",
    "ATP synthase",
    "NADP reductase"
  ],
  correct: 1,
  explanation: "NCERT states: 'The enzyme responsible for this fixation is PEP carboxylase or PEPcase.' RuBisCO is absent in mesophyll cells of C₄ plants."
},
{
  id: 467,
  topic: "C₄ Pathway",
  q: "<b>Assertion (A):</b> The mesophyll cells of C₄ plants lack RuBisCO enzyme.<br><b>Reason (R):</b> In C₄ plants, the initial CO₂ fixation in mesophyll cells is catalysed by PEPcase, not RuBisCO.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states: 'It is important to register that the mesophyll cells lack RuBisCO enzyme.' PEPcase catalyses the initial fixation instead. R correctly explains why RuBisCO is not needed in mesophyll cells."
},
{
  id: 468,
  topic: "C₄ Pathway",
  q: "The C₄ acid OAA is formed in:",
  options: [
    "Bundle sheath cells",
    "Mesophyll cells",
    "Stroma of chloroplasts",
    "Thylakoid lumen"
  ],
  correct: 1,
  explanation: "NCERT states: 'The C₄ acid OAA is formed in the mesophyll cells.' OAA is the first stable product of CO₂ fixation in C₄ plants."
},
{
  id: 469,
  topic: "C₄ Pathway",
  q: "OAA formed in mesophyll cells is converted to other C₄ acids such as:",
  options: [
    "Pyruvic acid or lactic acid",
    "Malic acid or aspartic acid",
    "Citric acid or succinic acid",
    "Fumaric acid or oxalic acid"
  ],
  correct: 1,
  explanation: "NCERT states: 'It then forms other 4-carbon compounds like malic acid or aspartic acid in the mesophyll cells itself.' These C₄ acids are then transported to bundle sheath cells."
},
{
  id: 470,
  topic: "C₄ Pathway",
  q: "The C₄ acids (malic acid or aspartic acid) are transported from mesophyll cells to:",
  options: [
    "Epidermal cells",
    "Guard cells",
    "Bundle sheath cells",
    "Root cells"
  ],
  correct: 2,
  explanation: "NCERT states: C₄ acids 'are transported to the bundle sheath cells.' In bundle sheath cells, these acids are broken down to release CO₂."
},
{
  id: 471,
  topic: "C₄ Pathway",
  q: "In the bundle sheath cells, C₄ acids are broken down to release:",
  options: [
    "O₂ and a 4-carbon molecule",
    "CO₂ and a 3-carbon molecule",
    "CO₂ and a 5-carbon molecule",
    "H₂O and a 2-carbon molecule"
  ],
  correct: 1,
  explanation: "NCERT states: 'In the bundle sheath cells these C₄ acids are broken down to release CO₂ and a 3-carbon molecule.' The CO₂ enters the Calvin cycle, and the 3C molecule returns to mesophyll cells."
},
{
  id: 472,
  topic: "C₄ Pathway",
  q: "The 3-carbon molecule released in bundle sheath cells is transported back to mesophyll cells where it is converted to:",
  options: [
    "OAA",
    "PGA",
    "PEP",
    "RuBP"
  ],
  correct: 2,
  explanation: "NCERT states: 'The 3-carbon molecule is transported back to the mesophyll where it is converted to PEP again, thus, completing the cycle.' PEP regeneration completes the C₄ cycle."
},
{
  id: 473,
  topic: "C₄ Pathway",
  q: "The CO₂ released in bundle sheath cells enters:",
  options: [
    "The C₄ pathway again",
    "The atmosphere",
    "The C₃ or Calvin pathway",
    "The photorespiratory pathway"
  ],
  correct: 2,
  explanation: "NCERT states: 'The CO₂ released in the bundle sheath cells enters the C₃ or the Calvin pathway, a pathway common to all plants.'"
},
{
  id: 474,
  topic: "C₄ Pathway",
  q: "Bundle sheath cells are rich in which enzyme but lack which other enzyme?",
  options: [
    "Rich in PEPcase, lack RuBisCO",
    "Rich in RuBisCO, lack PEPcase",
    "Rich in both RuBisCO and PEPcase",
    "Lack both RuBisCO and PEPcase"
  ],
  correct: 1,
  explanation: "NCERT states: 'The bundle sheath cells are rich in an enzyme RuBisCO, but lack PEPcase.' Conversely, mesophyll cells have PEPcase but lack RuBisCO."
},
{
  id: 475,
  topic: "C₄ Pathway",
  q: "Match the following for C₄ plants:<br>(i) Mesophyll cells — (P) RuBisCO present, PEPcase absent<br>(ii) Bundle sheath cells — (Q) PEPcase present, RuBisCO absent<br>(iii) Mesophyll cells — (R) Calvin cycle occurs<br>(iv) Bundle sheath cells — (S) Initial CO₂ fixation occurs",
  options: [
    "(i)-Q, (ii)-P, (iii)-S, (iv)-R",
    "(i)-P, (ii)-Q, (iii)-R, (iv)-S",
    "(i)-Q, (ii)-P, (iii)-R, (iv)-S",
    "(i)-S, (ii)-R, (iii)-Q, (iv)-P"
  ],
  correct: 0,
  explanation: "Mesophyll cells: PEPcase present, RuBisCO absent (Q), initial CO₂ fixation (S). Bundle sheath cells: RuBisCO present, PEPcase absent (P), Calvin cycle occurs (R). So (i)-Q, (ii)-P, (iii)-S, (iv)-R."
},
{
  id: 476,
  topic: "C₄ Pathway",
  q: "In C₃ plants, the Calvin pathway occurs in:",
  options: [
    "Bundle sheath cells only",
    "All mesophyll cells",
    "Both mesophyll and bundle sheath cells",
    "Epidermal cells"
  ],
  correct: 1,
  explanation: "NCERT states: 'the Calvin pathway occurs in all the mesophyll cells of the C₃ plants.' C₃ plants do not have the specialised Kranz anatomy."
},
{
  id: 477,
  topic: "C₄ Pathway",
  q: "In C₄ plants, the Calvin pathway occurs in:",
  options: [
    "All mesophyll cells",
    "Bundle sheath cells only",
    "Both mesophyll and bundle sheath cells",
    "Epidermal cells"
  ],
  correct: 1,
  explanation: "NCERT states: 'In the C₄ plants it does not take place in the mesophyll cells but does so only in the bundle sheath cells.' This is a key distinction between C₃ and C₄ plants."
},
{
  id: 478,
  topic: "C₄ Pathway",
  q: "<b>Assertion (A):</b> The Calvin pathway is common to both C₃ and C₄ plants.<br><b>Reason (R):</b> The Calvin pathway is the main biosynthetic pathway that produces sugars in all photosynthetic plants.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states: 'the basic pathway that results in the formation of the sugars, the Calvin pathway, is common to the C₃ and C₄ plants.' R correctly explains why it is common."
},
{
  id: 479,
  topic: "C₄ Pathway",
  q: "Which of the following is the correct sequence of events in the C₄ pathway?",
  options: [
    "CO₂ + RuBP → OAA → malic acid → bundle sheath cells → CO₂ + 3C → Calvin cycle",
    "CO₂ + PEP → OAA → malic acid/aspartic acid → bundle sheath cells → CO₂ + 3C → Calvin cycle; 3C → mesophyll → PEP",
    "CO₂ + PEP → PGA → bundle sheath → glucose",
    "CO₂ + OAA → PEP → bundle sheath → Calvin cycle"
  ],
  correct: 1,
  explanation: "The correct sequence: CO₂ + PEP → OAA (in mesophyll) → C₄ acids (malic/aspartic acid) → transported to bundle sheath → broken down to CO₂ + 3C molecule → CO₂ enters Calvin cycle; 3C molecule returns to mesophyll → reconverted to PEP."
},
{
  id: 480,
  topic: "C₄ Pathway",
  q: "How many carbon atoms does PEP have?",
  options: [
    "2",
    "3",
    "4",
    "5"
  ],
  correct: 1,
  explanation: "NCERT states: 'The primary CO₂ acceptor is a 3-carbon molecule phosphoenol pyruvate (PEP).' PEP has 3 carbon atoms."
},
{
  id: 481,
  topic: "C₄ Pathway",
  q: "Select the <b>incorrect</b> statement about C₄ plants:",
  options: [
    "They have Kranz anatomy",
    "They tolerate higher temperatures",
    "RuBisCO is present in their mesophyll cells",
    "They lack photorespiration"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'the mesophyll cells lack RuBisCO enzyme.' RuBisCO is present in bundle sheath cells, not mesophyll cells of C₄ plants. All other statements are correct."
},
{
  id: 482,
  topic: "C₄ Pathway",
  q: "The presence of bundle sheath around vascular bundles helps to identify:",
  options: [
    "C₃ plants",
    "C₄ plants",
    "CAM plants specifically",
    "All plants equally"
  ],
  correct: 1,
  explanation: "NCERT states: 'The presence of the bundle sheath would help you identify the C₄ plants.' Prominent, well-developed bundle sheath cells with Kranz anatomy are characteristic of C₄ plants."
},
{
  id: 483,
  topic: "C₄ Pathway",
  q: "Bundle sheath cells have thick walls that are impervious to gaseous exchange. This is significant because:",
  options: [
    "It allows O₂ to enter freely",
    "It prevents CO₂ from leaking out, maintaining high CO₂ concentration for RuBisCO",
    "It allows CO₂ to escape easily",
    "It has no functional significance"
  ],
  correct: 1,
  explanation: "Thick walls impervious to gas exchange prevent CO₂ from leaking out of bundle sheath cells. This maintains a high CO₂ concentration, ensuring RuBisCO works as carboxylase rather than oxygenase."
},
{
  id: 484,
  topic: "Photorespiration",
  q: "RuBisCO is the most abundant enzyme in the world because:",
  options: [
    "It is present in all organisms",
    "It is needed in large quantities since it catalyses the crucial first step of the Calvin cycle in all photosynthetic plants",
    "It is a very small enzyme",
    "It is produced in mitochondria of all cells"
  ],
  correct: 1,
  explanation: "RuBisCO catalyses the first CO₂ fixation step of the Calvin cycle, which occurs in ALL photosynthetic plants. Given the enormous amount of photosynthesis occurring globally, RuBisCO is required in massive quantities."
},
{
  id: 485,
  topic: "Photorespiration",
  q: "RuBisCO's active site can bind to:",
  options: [
    "Only CO₂",
    "Only O₂",
    "Both CO₂ and O₂",
    "Neither CO₂ nor O₂"
  ],
  correct: 2,
  explanation: "NCERT states: 'its active site can bind to both CO₂ and O₂ – hence the name.' This dual binding ability leads to either carboxylation (productive) or oxygenation (photorespiration)."
},
{
  id: 486,
  topic: "Photorespiration",
  q: "The binding of CO₂ and O₂ to RuBisCO is:",
  options: [
    "Cooperative",
    "Competitive",
    "Non-competitive",
    "Allosteric"
  ],
  correct: 1,
  explanation: "NCERT states: 'This binding is competitive.' CO₂ and O₂ compete for the same active site on RuBisCO. The relative concentration of each determines which binds."
},
{
  id: 487,
  topic: "Photorespiration",
  q: "RuBisCO has a much greater affinity for CO₂ when:",
  options: [
    "O₂ concentration is very high",
    "CO₂ concentration is very low",
    "The CO₂:O₂ ratio is nearly equal",
    "Temperature is very high"
  ],
  correct: 2,
  explanation: "NCERT states: 'RuBisCO has a much greater affinity for CO₂ when the CO₂:O₂ is nearly equal.' Under normal conditions, RuBisCO preferentially binds CO₂."
},
{
  id: 488,
  topic: "Photorespiration",
  q: "Which of the following determines whether RuBisCO acts as carboxylase or oxygenase?",
  options: [
    "Light intensity",
    "Temperature only",
    "The relative concentration of O₂ and CO₂",
    "The amount of water available"
  ],
  correct: 2,
  explanation: "NCERT states: 'It is the relative concentration of O₂ and CO₂ that determines which of the two will bind to the enzyme.' High CO₂ favours carboxylation; high O₂ favours oxygenation."
},
{
  id: 489,
  topic: "Photorespiration",
  q: "In C₃ plants, when O₂ binds to RuBisCO, the products formed are:",
  options: [
    "Two molecules of 3-PGA",
    "One molecule of phosphoglycerate and one molecule of phosphoglycolate",
    "One molecule of OAA and one molecule of PGA",
    "Two molecules of phosphoglycolate"
  ],
  correct: 1,
  explanation: "NCERT states: 'RuBP instead of being converted to 2 molecules of PGA binds with O₂ to form one molecule of phosphoglycerate and phosphoglycolate (2 Carbon).' This is the photorespiratory pathway."
},
{
  id: 490,
  topic: "Photorespiration",
  q: "Phosphoglycolate formed during photorespiration contains how many carbon atoms?",
  options: [
    "2",
    "3",
    "4",
    "5"
  ],
  correct: 0,
  explanation: "NCERT states phosphoglycolate is a '2 Carbon' compound. It is formed when O₂ binds to RuBisCO instead of CO₂."
},
{
  id: 491,
  topic: "Photorespiration",
  q: "In the photorespiratory pathway:<br>(i) There is no synthesis of sugars<br>(ii) There is no synthesis of ATP<br>(iii) CO₂ is released<br>(iv) ATP is utilised",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(iii) and (iv) only"
  ],
  correct: 2,
  explanation: "NCERT states: 'In the photorespiratory pathway, there is neither synthesis of sugars, nor of ATP. Rather it results in the release of CO₂ with the utilisation of ATP.' All four statements are correct."
},
{
  id: 492,
  topic: "Photorespiration",
  q: "<b>Assertion (A):</b> Photorespiration is a wasteful process.<br><b>Reason (R):</b> In photorespiration, neither sugars nor ATP are synthesised, and CO₂ is released with utilisation of ATP.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Photorespiration is wasteful because it consumes ATP, releases CO₂, and produces no sugars or ATP. This reduces the net photosynthetic efficiency of C₃ plants. R correctly explains A."
},
{
  id: 493,
  topic: "Photorespiration",
  q: "The biological function of photorespiration is:",
  options: [
    "To protect plants from excess light",
    "To produce additional ATP",
    "Not known yet",
    "To enhance CO₂ fixation"
  ],
  correct: 2,
  explanation: "NCERT states: 'The biological function of photorespiration is not known yet.' Despite being a wasteful process, its exact biological purpose remains unclear."
},
{
  id: 494,
  topic: "Photorespiration",
  q: "Photorespiration does <b>NOT</b> occur in:",
  options: [
    "C₃ plants",
    "C₄ plants",
    "All plants equally",
    "Algae"
  ],
  correct: 1,
  explanation: "NCERT states: 'In C₄ plants photorespiration does not occur.' This is because C₄ plants have a mechanism to increase CO₂ concentration at the RuBisCO site in bundle sheath cells."
},
{
  id: 495,
  topic: "Photorespiration",
  q: "C₄ plants avoid photorespiration by:",
  options: [
    "Eliminating RuBisCO completely",
    "Increasing the concentration of CO₂ at the enzyme site in bundle sheath cells",
    "Functioning only at night",
    "Using a different enzyme instead of RuBisCO for the Calvin cycle"
  ],
  correct: 1,
  explanation: "NCERT states: 'they have a mechanism that increases the concentration of CO₂ at the enzyme site.' The C₄ acid from mesophyll is broken down in bundle sheath cells, increasing intracellular CO₂ concentration."
},
{
  id: 496,
  topic: "Photorespiration",
  q: "In C₄ plants, the high CO₂ concentration in bundle sheath cells ensures that RuBisCO functions as:",
  options: [
    "An oxygenase predominantly",
    "A carboxylase, minimising the oxygenase activity",
    "Both carboxylase and oxygenase equally",
    "Neither carboxylase nor oxygenase"
  ],
  correct: 1,
  explanation: "NCERT states: 'this ensures that the RuBisCO functions as a carboxylase minimising the oxygenase activity.' High CO₂ concentration outcompetes O₂ for binding to RuBisCO's active site."
},
{
  id: 497,
  topic: "Photorespiration",
  q: "<b>Assertion (A):</b> C₄ plants have greater productivity and yields than C₃ plants.<br><b>Reason (R):</b> C₄ plants lack photorespiration, so there is no wasteful loss of CO₂ and ATP.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states: 'Now that you know that the C₄ plants lack photorespiration, you probably can understand why productivity and yields are better in these plants.' Absence of photorespiration means more net carbon fixation. R correctly explains A."
},
{
  id: 498,
  topic: "C₄ Pathway",
  q: "Consider the following comparison between mesophyll cells and bundle sheath cells in C₄ plants:<br>(A) Mesophyll: PEPcase present; Bundle sheath: PEPcase absent<br>(B) Mesophyll: RuBisCO present; Bundle sheath: RuBisCO absent<br>(C) Mesophyll: Initial CO₂ fixation; Bundle sheath: Calvin cycle<br>(D) Mesophyll: Calvin cycle; Bundle sheath: Initial CO₂ fixation",
  options: [
    "(A) and (C) only",
    "(B) and (D) only",
    "(A), (B) and (C)",
    "(A) and (D) only"
  ],
  correct: 0,
  explanation: "A is correct (mesophyll has PEPcase; bundle sheath lacks it). C is correct (mesophyll does initial fixation; bundle sheath does Calvin cycle). B is wrong (mesophyll LACKS RuBisCO). D reverses the roles."
},
{
  id: 499,
  topic: "Photorespiration",
  q: "Which of the following is <b>NOT</b> produced during photorespiration?",
  options: [
    "CO₂",
    "Phosphoglycolate",
    "ATP",
    "Phosphoglycerate"
  ],
  correct: 2,
  explanation: "NCERT states: 'In the photorespiratory pathway there is no synthesis of ATP or NADPH.' ATP is actually consumed during photorespiration, not produced. CO₂, phosphoglycolate, and phosphoglycerate are products."
},
{
  id: 500,
  topic: "C₄ Pathway",
  q: "Which of the following is <b>incorrect</b> about the Hatch and Slack pathway?",
  options: [
    "It is a cyclic process",
    "PEP is the primary CO₂ acceptor",
    "OAA is formed in bundle sheath cells",
    "PEPcase catalyses the initial CO₂ fixation"
  ],
  correct: 2,
  explanation: "OAA is formed in MESOPHYLL cells, not bundle sheath cells. NCERT states: 'The C₄ acid OAA is formed in the mesophyll cells.' In bundle sheath cells, C₄ acids are broken down."
},
{
  id: 501,
  topic: "Photorespiration",
  q: "In the photorespiratory pathway, when O₂ binds to RuBisCO, the substrate is:",
  options: [
    "PGA",
    "PEP",
    "RuBP",
    "OAA"
  ],
  correct: 2,
  explanation: "NCERT states: 'the RuBP instead of being converted to 2 molecules of PGA binds with O₂.' RuBP is the substrate that binds with O₂ when oxygenase activity of RuBisCO dominates."
},
{
  id: 502,
  topic: "C₄ Pathway",
  q: "The C₄ pathway acts as a CO₂ concentrating mechanism. The CO₂ is concentrated in:",
  options: [
    "Mesophyll cells",
    "Bundle sheath cells",
    "Epidermal cells",
    "Guard cells"
  ],
  correct: 1,
  explanation: "NCERT states: 'the C₄ acid from the mesophyll is broken down in the bundle sheath cells to release CO₂ – this results in increasing the intracellular concentration of CO₂.' CO₂ is concentrated in bundle sheath cells."
},
{
  id: 503,
  topic: "C₄ Pathway and Photorespiration",
  q: "Consider the following statements:<br>(A) C₃ plants show photorespiration<br>(B) C₄ plants show photorespiration<br>(C) C₄ plants have higher productivity than C₃ plants<br>(D) C₄ plants tolerate higher temperatures<br><br>Which are correct?",
  options: [
    "(A), (C) and (D) only",
    "(A), (B), (C) and (D)",
    "(B) and (C) only",
    "(A) and (B) only"
  ],
  correct: 0,
  explanation: "A, C, and D are correct. B is wrong — C₄ plants do NOT show photorespiration. NCERT states C₃ plants show photorespiration, C₄ plants lack it, C₄ plants have greater productivity and tolerate higher temperatures."
},
{
  id: 504,
  topic: "C₄ Pathway",
  q: "In C₄ plants, the initial CO₂ fixation and the Calvin cycle are spatially separated. The initial fixation occurs in _______ and the Calvin cycle in _______.",
  options: [
    "Bundle sheath cells; mesophyll cells",
    "Mesophyll cells; bundle sheath cells",
    "Both occur in mesophyll cells",
    "Both occur in bundle sheath cells"
  ],
  correct: 1,
  explanation: "In C₄ plants, initial CO₂ fixation (C₄ pathway) occurs in mesophyll cells, and the Calvin cycle occurs in bundle sheath cells. This spatial separation is a key feature of C₄ photosynthesis."
},
{
  id: 505,
  topic: "C₄ Pathway",
  q: "<b>Assertion (A):</b> Bundle sheath cells in C₄ plants have no intercellular spaces.<br><b>Reason (R):</b> This prevents CO₂ from leaking out, maintaining high concentration for RuBisCO to function as carboxylase.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. No intercellular spaces and thick walls impervious to gas exchange prevent CO₂ leakage, ensuring high CO₂ concentration in bundle sheath cells. R correctly explains the functional significance of A."
},
{
  id: 506,
  topic: "Photorespiration",
  q: "Select the correct comparison between photorespiration and normal (dark) respiration:",
  options: [
    "Both produce ATP",
    "Photorespiration produces ATP; normal respiration does not",
    "Normal respiration produces ATP; photorespiration does not — rather it consumes ATP",
    "Neither produces ATP"
  ],
  correct: 2,
  explanation: "Normal respiration produces ATP. NCERT states about photorespiration: 'there is no synthesis of ATP or NADPH. Rather it results in the release of CO₂ with the utilisation of ATP.' So photorespiration consumes ATP."
},
{
  id: 507,
  topic: "Photorespiration",
  q: "Which of the following conditions would increase photorespiration in C₃ plants?",
  options: [
    "High CO₂ concentration",
    "High O₂ concentration relative to CO₂",
    "Low temperature",
    "Low light intensity"
  ],
  correct: 1,
  explanation: "Since binding is competitive, high O₂ relative to CO₂ would increase O₂ binding to RuBisCO, increasing photorespiration. NCERT states: 'It is the relative concentration of O₂ and CO₂ that determines which of the two will bind.'"
},
{
  id: 508,
  topic: "C₄ Pathway",
  q: "Which of the following correctly lists the differences between C₃ and C₄ plants?",
  options: [
    "C₃: Kranz anatomy present; C₄: Kranz anatomy absent",
    "C₃: First product is OAA; C₄: First product is PGA",
    "C₃: Photorespiration present; C₄: Photorespiration absent",
    "C₃: Higher productivity; C₄: Lower productivity"
  ],
  correct: 2,
  explanation: "C₃ plants show photorespiration; C₄ plants lack it. Option A reverses Kranz anatomy (C₄ has it). Option B reverses the first products. Option D reverses productivity (C₄ is more productive)."
},
{
  id: 509,
  topic: "C₄ Pathway",
  q: "In C₃ plants, the Calvin cycle occurs in:",
  options: [
    "Bundle sheath cells only",
    "All mesophyll cells",
    "Guard cells",
    "Epidermal cells"
  ],
  correct: 1,
  explanation: "NCERT states: 'the Calvin pathway occurs in all the mesophyll cells of the C₃ plants.' C₃ plants do not have prominent bundle sheath cells for photosynthesis."
},
{
  id: 510,
  topic: "C₄ Pathway",
  q: "Match the following:<br>(i) PEPcase — (P) Bundle sheath cells<br>(ii) RuBisCO — (Q) Mesophyll cells<br>(iii) Calvin cycle in C₄ plants — (R) Mesophyll cells of C₄ plants<br>(iv) Initial CO₂ fixation in C₄ plants — (S) Bundle sheath cells of C₄ plants",
  options: [
    "(i)-Q, (ii)-P, (iii)-S, (iv)-R",
    "(i)-R, (ii)-S, (iii)-P, (iv)-Q",
    "(i)-Q, (ii)-P, (iii)-P, (iv)-Q",
    "(i)-R, (ii)-P, (iii)-S, (iv)-Q"
  ],
  correct: 0,
  explanation: "PEPcase is in mesophyll cells (Q) of C₄ plants. RuBisCO is in bundle sheath cells (P). Calvin cycle in C₄ plants occurs in bundle sheath (S). Initial CO₂ fixation in C₄ occurs in mesophyll (R). Wait — let me reconsider: (i)-Q means PEPcase in mesophyll ✓, (ii)-P means RuBisCO in bundle sheath ✓, (iii)-S means Calvin in bundle sheath ✓, (iv)-R means initial fixation in mesophyll ✓. Note: P and S both refer to bundle sheath, Q and R both to mesophyll."
},
{
  id: 511,
  topic: "Photorespiration",
  q: "If CO₂ concentration is artificially increased around a C₃ plant, photorespiration would:",
  options: [
    "Increase significantly",
    "Remain unchanged",
    "Decrease because CO₂ would outcompete O₂ for binding to RuBisCO",
    "Increase because more substrate is available"
  ],
  correct: 2,
  explanation: "Since CO₂ and O₂ binding to RuBisCO is competitive, increasing CO₂ concentration would shift the competition in favour of CO₂ binding (carboxylation), reducing oxygenase activity and photorespiration."
},
{
  id: 512,
  topic: "C₄ Pathway",
  q: "The C₄ pathway involves how many carboxylation events per CO₂ molecule?",
  options: [
    "One (in mesophyll only)",
    "Two (once in mesophyll by PEPcase, once in bundle sheath by RuBisCO)",
    "Three",
    "None — CO₂ is not fixed"
  ],
  correct: 1,
  explanation: "Each CO₂ is fixed twice: first by PEPcase in mesophyll cells (forming OAA), then the CO₂ released in bundle sheath is fixed again by RuBisCO in the Calvin cycle. This double fixation is a unique feature."
},
{
  id: 513,
  topic: "Photorespiration",
  q: "<b>Assertion (A):</b> C₄ plants show tolerance to higher temperatures.<br><b>Reason (R):</b> At higher temperatures, the oxygenase activity of RuBisCO increases, but C₄ plants overcome this through their CO₂ concentrating mechanism.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. At higher temperatures, O₂ solubility decreases less than CO₂ solubility, favouring oxygenase activity. C₄ plants overcome this by concentrating CO₂ in bundle sheath cells, maintaining carboxylase activity. R correctly explains A."
},
{
  id: 514,
  topic: "C₄ Pathway",
  q: "In the C₄ cycle, the molecule that is regenerated to complete the cycle is:",
  options: [
    "OAA",
    "PGA",
    "PEP",
    "RuBP"
  ],
  correct: 2,
  explanation: "NCERT states: 'The 3-carbon molecule is transported back to the mesophyll where it is converted to PEP again, thus, completing the cycle.' PEP is the regenerated molecule, just as RuBP is regenerated in the Calvin cycle."
},
{
  id: 515,
  topic: "C₄ Pathway and Photorespiration",
  q: "Which of the following is a correct difference between C₃ and C₄ plants?",
  options: [
    "C₃ plants have Kranz anatomy; C₄ plants do not",
    "C₃ plants: Calvin cycle in mesophyll; C₄ plants: Calvin cycle in bundle sheath",
    "C₃ plants lack photorespiration; C₄ plants show photorespiration",
    "C₃ plants: primary CO₂ acceptor is PEP; C₄ plants: primary CO₂ acceptor is RuBP"
  ],
  correct: 1,
  explanation: "C₃ plants: Calvin cycle occurs in mesophyll cells. C₄ plants: Calvin cycle occurs in bundle sheath cells. A reverses Kranz anatomy. C reverses photorespiration. D reverses CO₂ acceptors."
},
{
  id: 516,
  topic: "Photorespiration",
  q: "Consider the following about photorespiration:<br>(i) It is called 'photorespiration' because it occurs in light and consumes O₂ while releasing CO₂<br>(ii) It synthesises glucose<br>(iii) It is a wasteful process<br>(iv) It occurs only in C₃ plants",
  options: [
    "(i), (iii) and (iv) only",
    "(i) and (iii) only",
    "(ii) and (iv) only",
    "(i), (ii), (iii) and (iv)"
  ],
  correct: 0,
  explanation: "Statements (i), (iii), and (iv) are correct. Statement (ii) is wrong — NCERT states 'there is neither synthesis of sugars, nor of ATP' during photorespiration."
},
{
  id: 517,
  topic: "C₄ Pathway",
  q: "Which of the following is <b>NOT</b> a characteristic of bundle sheath cells?",
  options: [
    "Large number of chloroplasts",
    "Thick walls impervious to gaseous exchange",
    "No intercellular spaces",
    "Presence of PEPcase enzyme"
  ],
  correct: 3,
  explanation: "Bundle sheath cells LACK PEPcase. NCERT states: 'The bundle sheath cells are rich in an enzyme RuBisCO, but lack PEPcase.' PEPcase is found in mesophyll cells."
},
{
  id: 518,
  topic: "C₄ Pathway and Photorespiration",
  q: "<b>Assertion (A):</b> In C₄ plants, the mesophyll cells lack RuBisCO while bundle sheath cells lack PEPcase.<br><b>Reason (R):</b> This spatial separation of enzymes ensures that initial CO₂ fixation occurs in mesophyll cells and the Calvin cycle in bundle sheath cells.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The absence of RuBisCO in mesophyll means Calvin cycle cannot occur there; absence of PEPcase in bundle sheath means initial C₄ fixation cannot occur there. R correctly explains the functional significance of A."
},
{
  id: 519,
  topic: "C₄ Pathway",
  q: "The C₄ acid that is transported from mesophyll to bundle sheath can be:",
  options: [
    "Only malic acid",
    "Only aspartic acid",
    "Either malic acid or aspartic acid",
    "Only OAA"
  ],
  correct: 2,
  explanation: "NCERT states: 'It then forms other 4-carbon compounds like malic acid or aspartic acid... which are transported to the bundle sheath cells.' The specific C₄ acid transported varies among C₄ plant species."
}
,
{
  id: 520,
  topic: "Factors Affecting Photosynthesis - Introduction",
  q: "The rate of photosynthesis is important in determining:",
  options: [
    "The colour of flowers",
    "The yield of plants including crop plants",
    "The height of trees only",
    "The root length of plants"
  ],
  correct: 1,
  explanation: "NCERT states: 'The rate of photosynthesis is very important in determining the yield of plants including crop plants.' Higher photosynthetic rate generally leads to higher biomass and crop yield."
},
{
  id: 521,
  topic: "Factors Affecting Photosynthesis - Introduction",
  q: "Photosynthesis is influenced by:",
  options: [
    "Only internal (plant) factors",
    "Only external factors",
    "Both internal (plant) and external factors",
    "Neither internal nor external factors"
  ],
  correct: 2,
  explanation: "NCERT states: 'Photosynthesis is under the influence of several factors, both internal (plant) and external.' Both types of factors simultaneously affect the rate of photosynthesis."
},
{
  id: 522,
  topic: "Factors Affecting Photosynthesis - Introduction",
  q: "Which of the following are internal (plant) factors affecting photosynthesis?<br>(i) Number, size, age and orientation of leaves<br>(ii) Mesophyll cells and chloroplasts<br>(iii) Internal CO₂ concentration<br>(iv) Amount of chlorophyll<br>(v) Availability of sunlight",
  options: [
    "(i), (ii), (iii) and (iv) only",
    "(i), (ii), (iii), (iv) and (v)",
    "(v) only",
    "(i) and (iv) only"
  ],
  correct: 0,
  explanation: "NCERT lists internal factors: 'the number, size, age and orientation of leaves, mesophyll cells and chloroplasts, internal CO₂ concentration and the amount of chlorophyll.' Sunlight availability (v) is an external factor."
},
{
  id: 523,
  topic: "Factors Affecting Photosynthesis - Introduction",
  q: "Which of the following are external factors affecting photosynthesis?",
  options: [
    "Number of chloroplasts and amount of chlorophyll",
    "Availability of sunlight, temperature, CO₂ concentration and water",
    "Internal CO₂ concentration and leaf orientation",
    "Genetic predisposition of the plant"
  ],
  correct: 1,
  explanation: "NCERT states: 'The external factors would include the availability of sunlight, temperature, CO₂ concentration and water.' Internal CO₂ concentration, chloroplast number, and genetics are internal factors."
},
{
  id: 524,
  topic: "Factors Affecting Photosynthesis - Introduction",
  q: "The plant or internal factors are dependent on:",
  options: [
    "Soil type only",
    "The genetic predisposition and the growth of the plant",
    "External temperature only",
    "Water availability only"
  ],
  correct: 1,
  explanation: "NCERT states: 'The plant or internal factors are dependent on the genetic predisposition and the growth of the plant.' Genetic makeup determines the inherent photosynthetic capacity."
},
{
  id: 525,
  topic: "Factors Affecting Photosynthesis - Law of Limiting Factors",
  q: "Blackman's Law of Limiting Factors was proposed in:",
  options: [
    "1770",
    "1854",
    "1905",
    "1961"
  ],
  correct: 2,
  explanation: "NCERT states: 'Blackman's (1905) Law of Limiting Factors comes into effect.' This law is fundamental to understanding how multiple factors interact to control photosynthetic rate."
},
{
  id: 526,
  topic: "Factors Affecting Photosynthesis - Law of Limiting Factors",
  q: "Blackman's Law of Limiting Factors states:",
  options: [
    "All factors equally affect the rate of a chemical process",
    "If a chemical process is affected by more than one factor, its rate will be determined by the factor nearest to its minimal value",
    "Only light determines the rate of photosynthesis",
    "Temperature is always the limiting factor"
  ],
  correct: 1,
  explanation: "NCERT states: 'If a chemical process is affected by more than one factor, then its rate will be determined by the factor which is nearest to its minimal value: it is the factor which directly affects the process if its quantity is changed.'"
},
{
  id: 527,
  topic: "Factors Affecting Photosynthesis - Law of Limiting Factors",
  q: "At any given point, the rate of photosynthesis is determined by:",
  options: [
    "The factor available in excess",
    "The factor available at sub-optimal levels",
    "The average of all factors",
    "Only the internal factors"
  ],
  correct: 1,
  explanation: "NCERT states: 'at any point the rate will be determined by the factor available at sub-optimal levels.' This is the limiting factor concept — the bottleneck determines the overall rate."
},
{
  id: 528,
  topic: "Factors Affecting Photosynthesis - Law of Limiting Factors",
  q: "According to the law of limiting factors, if a plant has optimal light and CO₂ but very low temperature, photosynthesis will:",
  options: [
    "Proceed normally",
    "Not occur because temperature is the limiting factor",
    "Increase due to excess light",
    "Produce more O₂ than usual"
  ],
  correct: 1,
  explanation: "NCERT gives this exact example: 'despite the presence of a green leaf and optimal light and CO₂ conditions, the plant may not photosynthesise if the temperature is very low.' Temperature becomes the limiting factor."
},
{
  id: 529,
  topic: "Factors Affecting Photosynthesis - Law of Limiting Factors",
  q: "<b>Assertion (A):</b> Even when light and CO₂ are optimal, photosynthesis may not occur if temperature is very low.<br><b>Reason (R):</b> According to Blackman's Law, the factor nearest to its minimal value limits the rate of the process.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. Low temperature becomes the limiting factor that determines the rate, regardless of optimal light and CO₂. R (Blackman's Law) correctly explains A."
},
{
  id: 530,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "While discussing light as a factor affecting photosynthesis, we need to distinguish between:",
  options: [
    "Light colour and light temperature",
    "Light quality, light intensity and duration of exposure to light",
    "Light wavelength and light frequency only",
    "Artificial light and natural light only"
  ],
  correct: 1,
  explanation: "NCERT states: 'We need to distinguish between light quality, light intensity and the duration of exposure to light, while discussing light as a factor that affects photosynthesis.'"
},
{
  id: 531,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "At low light intensities, the relationship between incident light and CO₂ fixation rates is:",
  options: [
    "Exponential",
    "Linear",
    "Inverse",
    "No relationship exists"
  ],
  correct: 1,
  explanation: "NCERT states: 'There is a linear relationship between incident light and CO₂ fixation rates at low light intensities.' As light increases, photosynthesis increases proportionally at low intensities."
},
{
  id: 532,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "At higher light intensities, the rate of photosynthesis:",
  options: [
    "Continues to increase linearly",
    "Decreases immediately",
    "Gradually does not show further increase as other factors become limiting",
    "Doubles with each unit increase in light"
  ],
  correct: 2,
  explanation: "NCERT states: 'At higher light intensities, gradually the rate does not show further increase as other factors become limiting.' The rate plateaus because CO₂ or temperature becomes the bottleneck."
},
{
  id: 533,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "Light saturation occurs at what percentage of full sunlight?",
  options: [
    "1 per cent",
    "5 per cent",
    "10 per cent",
    "50 per cent"
  ],
  correct: 2,
  explanation: "NCERT states: 'light saturation occurs at 10 per cent of the full sunlight.' Beyond this, increasing light does not increase photosynthesis rate. This is a frequently asked factual point."
},
{
  id: 534,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "Light is rarely a limiting factor in nature because:",
  options: [
    "All plants grow in direct sunlight",
    "Light saturation occurs at just 10% of full sunlight",
    "Plants can photosynthesise in complete darkness",
    "Light has no effect on photosynthesis"
  ],
  correct: 1,
  explanation: "NCERT states: 'Hence, except for plants in shade or in dense forests, light is rarely a limiting factor in nature.' Since saturation occurs at only 10% of full sunlight, most plants receive sufficient light."
},
{
  id: 535,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "For which types of plants might light be a limiting factor?",
  options: [
    "Desert plants",
    "Plants in shade or dense forests",
    "Aquatic surface plants",
    "Tropical grassland plants"
  ],
  correct: 1,
  explanation: "NCERT states: 'except for plants in shade or in dense forests, light is rarely a limiting factor.' Under the canopy of dense forests, insufficient light may reach the lower plants."
},
{
  id: 536,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "Increase in incident light beyond a saturation point causes:",
  options: [
    "Further increase in photosynthesis",
    "No effect at all",
    "Breakdown of chlorophyll and a decrease in photosynthesis",
    "Increased water absorption"
  ],
  correct: 2,
  explanation: "NCERT states: 'Increase in incident light beyond a point causes the breakdown of chlorophyll and a decrease in photosynthesis.' This is called photo-inhibition or solarisation."
},
{
  id: 537,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "<b>Assertion (A):</b> Very high light intensity decreases photosynthesis.<br><b>Reason (R):</b> Excessive light causes breakdown of chlorophyll (photo-oxidation).",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states excessive light causes 'breakdown of chlorophyll and a decrease in photosynthesis.' R (chlorophyll breakdown) correctly explains why photosynthesis decreases at very high light."
},
{
  id: 538,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "The major limiting factor for photosynthesis is:",
  options: [
    "Light",
    "Temperature",
    "Carbon dioxide",
    "Water"
  ],
  correct: 2,
  explanation: "NCERT states: 'Carbon dioxide is the major limiting factor for photosynthesis.' This is because atmospheric CO₂ concentration is very low (0.03–0.04%)."
},
{
  id: 539,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "The concentration of CO₂ in the atmosphere is:",
  options: [
    "Between 0.3 and 0.4 per cent",
    "Between 0.03 and 0.04 per cent",
    "Between 3 and 4 per cent",
    "Between 0.003 and 0.004 per cent"
  ],
  correct: 1,
  explanation: "NCERT states: 'The concentration of CO₂ is very low in the atmosphere (between 0.03 and 0.04 per cent).' This low concentration makes CO₂ the primary limiting factor."
},
{
  id: 540,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "Increase in CO₂ concentration upto _______ can increase CO₂ fixation rates:",
  options: [
    "0.01 per cent",
    "0.03 per cent",
    "0.05 per cent",
    "0.1 per cent"
  ],
  correct: 2,
  explanation: "NCERT states: 'Increase in concentration upto 0.05 per cent can cause an increase in CO₂ fixation rates; beyond this the levels can become damaging over longer periods.'"
},
{
  id: 541,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "CO₂ concentration beyond 0.05 per cent can be:",
  options: [
    "Beneficial for all plants",
    "Neutral with no effect",
    "Damaging over longer periods",
    "Required for optimal photosynthesis"
  ],
  correct: 2,
  explanation: "NCERT states: 'beyond this the levels can become damaging over longer periods.' Excessively high CO₂ can have toxic effects on plant metabolism."
},
{
  id: 542,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "At low light conditions, how do C₃ and C₄ plants respond to high CO₂?",
  options: [
    "Both show increased photosynthesis",
    "Neither group responds to high CO₂ conditions",
    "Only C₄ plants respond",
    "Only C₃ plants respond"
  ],
  correct: 1,
  explanation: "NCERT states: 'At low light conditions neither group responds to high CO₂ conditions.' Light becomes the limiting factor, so increasing CO₂ has no effect."
},
{
  id: 543,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "At high light intensities:",
  options: [
    "Neither C₃ nor C₄ plants respond to increased CO₂",
    "Both C₃ and C₄ plants show increase in rates of photosynthesis with increasing CO₂",
    "Only C₃ plants show increased photosynthesis",
    "Only C₄ plants show increased photosynthesis"
  ],
  correct: 1,
  explanation: "NCERT states: 'At high light intensities, both C₃ and C₄ plants show increase in the rates of photosynthesis.' However, they reach saturation at different CO₂ concentrations."
},
{
  id: 544,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "C₄ plants show CO₂ saturation at about:",
  options: [
    "260 µlL⁻¹",
    "360 µlL⁻¹",
    "450 µlL⁻¹",
    "560 µlL⁻¹"
  ],
  correct: 1,
  explanation: "NCERT states: 'the C₄ plants show saturation at about 360 µlL⁻¹.' C₄ plants reach their maximum photosynthetic rate at lower CO₂ concentration compared to C₃ plants."
},
{
  id: 545,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "C₃ plants show CO₂ saturation beyond:",
  options: [
    "260 µlL⁻¹",
    "360 µlL⁻¹",
    "450 µlL⁻¹",
    "560 µlL⁻¹"
  ],
  correct: 2,
  explanation: "NCERT states: 'C₃ responds to increased CO₂ concentration and saturation is seen only beyond 450 µlL⁻¹.' C₃ plants continue to benefit from higher CO₂ levels up to this point."
},
{
  id: 546,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "Current availability of CO₂ levels is limiting to:",
  options: [
    "C₄ plants",
    "C₃ plants",
    "Both equally",
    "Neither C₃ nor C₄"
  ],
  correct: 1,
  explanation: "NCERT states: 'current availability of CO₂ levels is limiting to the C₃ plants.' C₄ plants saturate at ~360 µlL⁻¹ (close to current atmospheric CO₂), while C₃ plants can benefit from more CO₂."
},
{
  id: 547,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "C₃ plants respond to higher CO₂ concentration by showing increased rates of photosynthesis. This has been utilised for:",
  options: [
    "Growing plants in dark rooms",
    "Greenhouse crops like tomatoes and bell pepper grown in CO₂-enriched atmosphere",
    "Reducing crop yields intentionally",
    "Growing plants underwater"
  ],
  correct: 1,
  explanation: "NCERT states: 'This has been used for some greenhouse crops such as tomatoes and bell pepper. They are allowed to grow in carbon dioxide enriched atmosphere that leads to higher yields.'"
},
{
  id: 548,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "<b>Assertion (A):</b> Growing C₃ crops in CO₂-enriched greenhouses increases their yield.<br><b>Reason (R):</b> C₃ plants respond to higher CO₂ concentration by showing increased rates of photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Increasing CO₂ in greenhouses increases C₃ plant photosynthesis, leading to higher yields (e.g., tomatoes, bell pepper). R correctly explains why this practice works."
},
{
  id: 549,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "Which of the following greenhouse crops are grown in CO₂-enriched atmosphere?",
  options: [
    "Rice and wheat",
    "Tomatoes and bell pepper",
    "Maize and sorghum",
    "Sugarcane and millet"
  ],
  correct: 1,
  explanation: "NCERT mentions: 'some greenhouse crops such as tomatoes and bell pepper.' Maize and sorghum are C₄ plants grown in open fields, not typically in CO₂-enriched greenhouses."
},
{
  id: 550,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "The dark reactions are controlled primarily by:",
  options: [
    "Light quality",
    "Light intensity",
    "Temperature (being enzymatic)",
    "Water availability"
  ],
  correct: 2,
  explanation: "NCERT states: 'The dark reactions being enzymatic are temperature controlled.' Enzymes are sensitive to temperature changes, affecting reaction rates."
},
{
  id: 551,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "Light reactions are:",
  options: [
    "Not affected by temperature at all",
    "Temperature sensitive but affected to a much lesser extent than dark reactions",
    "More temperature sensitive than dark reactions",
    "Affected only by water availability"
  ],
  correct: 1,
  explanation: "NCERT states: 'Though the light reactions are also temperature sensitive they are affected to a much lesser extent.' Dark reactions (enzymatic) are more temperature-dependent."
},
{
  id: 552,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "Which group of plants responds better to higher temperatures?",
  options: [
    "C₃ plants",
    "C₄ plants",
    "Both respond equally",
    "Neither responds to temperature"
  ],
  correct: 1,
  explanation: "NCERT states: 'The C₄ plants respond to higher temperatures and show higher rate of photosynthesis while C₃ plants have a much lower temperature optimum.'"
},
{
  id: 553,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "<b>Assertion (A):</b> C₃ plants have a lower temperature optimum for photosynthesis than C₄ plants.<br><b>Reason (R):</b> C₃ plants undergo photorespiration at higher temperatures, reducing net photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. At higher temperatures, photorespiration increases in C₃ plants (O₂ solubility relatively increases), reducing net photosynthesis. C₄ plants avoid this through their CO₂ concentrating mechanism. R correctly explains A."
},
{
  id: 554,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "The temperature optimum for photosynthesis depends on:",
  options: [
    "Only the species of plant",
    "Only the latitude",
    "The habitat that the plants are adapted to",
    "Only the altitude"
  ],
  correct: 2,
  explanation: "NCERT states: 'The temperature optimum for photosynthesis of different plants also depends on the habitat that they are adapted to.' Plants adapt to their local thermal environment."
},
{
  id: 555,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "Tropical plants have _______ temperature optimum compared to temperate plants.",
  options: [
    "A lower",
    "The same",
    "A higher",
    "A fluctuating"
  ],
  correct: 2,
  explanation: "NCERT states: 'Tropical plants have a higher temperature optimum than the plants adapted to temperate climates.' This is because tropical plants are adapted to warmer conditions."
},
{
  id: 556,
  topic: "Factors Affecting Photosynthesis - Water",
  q: "The effect of water on photosynthesis is primarily:",
  options: [
    "As a direct reactant in dark reactions",
    "Through its effect on the plant (indirect) rather than directly on photosynthesis",
    "Through increasing temperature",
    "Through producing O₂ in excess"
  ],
  correct: 1,
  explanation: "NCERT states: 'Even though water is one of the reactants in the light reaction, the effect of water as a factor is more through its effect on the plant, rather than directly on photosynthesis.'"
},
{
  id: 557,
  topic: "Factors Affecting Photosynthesis - Water",
  q: "Water stress affects photosynthesis by:<br>(i) Causing stomata to close, reducing CO₂ availability<br>(ii) Making leaves wilt, reducing leaf surface area<br>(iii) Reducing metabolic activity of leaves<br>(iv) Directly increasing O₂ concentration",
  options: [
    "(i), (ii) and (iii) only",
    "(i) and (ii) only",
    "(i), (ii), (iii) and (iv)",
    "(iv) only"
  ],
  correct: 0,
  explanation: "NCERT states: 'Water stress causes the stomata to close hence reducing the CO₂ availability. Besides, water stress also makes leaves wilt, thus, reducing the surface area of the leaves and their metabolic activity as well.' Statement (iv) is not mentioned."
},
{
  id: 558,
  topic: "Factors Affecting Photosynthesis - Water",
  q: "Water stress causes stomata to close, which directly reduces:",
  options: [
    "Light absorption",
    "CO₂ availability",
    "O₂ production",
    "Chlorophyll synthesis"
  ],
  correct: 1,
  explanation: "NCERT states: 'Water stress causes the stomata to close hence reducing the CO₂ availability.' When stomata close, CO₂ cannot enter the leaf, reducing the rate of carbon fixation."
},
{
  id: 559,
  topic: "Factors Affecting Photosynthesis - Water",
  q: "<b>Assertion (A):</b> Water is a reactant in light reactions, yet its main effect on photosynthesis is indirect.<br><b>Reason (R):</b> Water stress mainly affects photosynthesis by causing stomatal closure and leaf wilting, rather than by directly limiting the light reaction.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Although water is split in light reactions, its indirect effects (stomatal closure → reduced CO₂, leaf wilting → reduced surface area) have a greater impact on photosynthetic rate. R correctly explains A."
},
{
  id: 560,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "Which of the following is <b>NOT</b> an internal factor affecting photosynthesis?",
  options: [
    "Number of leaves",
    "Amount of chlorophyll",
    "Availability of sunlight",
    "Internal CO₂ concentration"
  ],
  correct: 2,
  explanation: "Availability of sunlight is an external factor. NCERT lists internal factors as: 'number, size, age and orientation of leaves, mesophyll cells and chloroplasts, internal CO₂ concentration and the amount of chlorophyll.'"
},
{
  id: 561,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "Which of the following is <b>NOT</b> an external factor affecting photosynthesis?",
  options: [
    "Sunlight availability",
    "Temperature",
    "Amount of chlorophyll",
    "CO₂ concentration"
  ],
  correct: 2,
  explanation: "Amount of chlorophyll is an internal (plant) factor. External factors include: 'the availability of sunlight, temperature, CO₂ concentration and water.'"
},
{
  id: 562,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "Consider the following statements about C₃ and C₄ plants' response to CO₂:<br>(A) At low light, neither C₃ nor C₄ responds to high CO₂<br>(B) At high light, both respond to increased CO₂<br>(C) C₄ plants saturate at a lower CO₂ concentration than C₃ plants<br>(D) C₃ plants saturate at a lower CO₂ concentration than C₄ plants",
  options: [
    "(A), (B) and (C) only",
    "(A), (B) and (D) only",
    "(A) and (B) only",
    "(A), (B), (C) and (D)"
  ],
  correct: 0,
  explanation: "A, B, and C are correct. D is wrong — C₄ plants saturate at ~360 µlL⁻¹ (lower), while C₃ plants saturate beyond 450 µlL⁻¹ (higher). C₃ plants continue to respond to higher CO₂."
},
{
  id: 563,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "The graph of light intensity vs. rate of photosynthesis shows:",
  options: [
    "A straight line throughout",
    "Linear increase at low intensities, then a plateau at higher intensities",
    "An exponential curve throughout",
    "A decrease throughout"
  ],
  correct: 1,
  explanation: "NCERT describes: 'a linear relationship between incident light and CO₂ fixation rates at low light intensities. At higher light intensities, gradually the rate does not show further increase.' This gives a linear rise followed by a plateau."
},
{
  id: 564,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "Match the factor with its key effect on photosynthesis:<br>(i) Light — (P) Major limiting factor; atmospheric levels very low<br>(ii) CO₂ — (Q) Controls dark reactions primarily<br>(iii) Temperature — (R) Rarely limiting; saturation at 10% of full sunlight<br>(iv) Water — (S) Indirect effect through stomatal closure and wilting",
  options: [
    "(i)-R, (ii)-P, (iii)-Q, (iv)-S",
    "(i)-P, (ii)-R, (iii)-S, (iv)-Q",
    "(i)-Q, (ii)-S, (iii)-P, (iv)-R",
    "(i)-S, (ii)-Q, (iii)-R, (iv)-P"
  ],
  correct: 0,
  explanation: "Light — Rarely limiting (R); CO₂ — Major limiting factor (P); Temperature — Controls dark reactions (Q); Water — Indirect effect (S). All from NCERT."
},
{
  id: 565,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "<b>Assertion (A):</b> C₄ plants reach CO₂ saturation at a lower concentration than C₃ plants.<br><b>Reason (R):</b> C₄ plants have a CO₂ concentrating mechanism that maintains high CO₂ at the RuBisCO site.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. C₄ plants saturate at ~360 µlL⁻¹ because their CO₂ concentrating mechanism efficiently delivers CO₂ to RuBisCO. C₃ plants lack this mechanism and saturate at >450 µlL⁻¹. R correctly explains A."
},
{
  id: 566,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "Which of the following comparisons is correct?",
  options: [
    "C₃ plants: Higher temperature optimum; C₄ plants: Lower temperature optimum",
    "C₃ plants: Lower temperature optimum; C₄ plants: Higher temperature optimum",
    "Both have the same temperature optimum",
    "Temperature does not affect either group"
  ],
  correct: 1,
  explanation: "NCERT states: 'C₄ plants respond to higher temperatures and show higher rate of photosynthesis while C₃ plants have a much lower temperature optimum.'"
},
{
  id: 567,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "Several factors simultaneously affect photosynthesis. Usually the rate is limited by:",
  options: [
    "All factors equally",
    "The most abundant factor",
    "One factor that is the major cause — available at sub-optimal levels",
    "Only external factors"
  ],
  correct: 2,
  explanation: "NCERT states: 'usually one factor is the major cause or is the one that limits the rate.' This is Blackman's principle — the factor at sub-optimal level limits the overall rate."
},
{
  id: 568,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "Which of the following correctly describes the effect of light on photosynthesis?<br>(i) Linear increase at low intensities<br>(ii) Plateau at higher intensities<br>(iii) Saturation at 10% of full sunlight<br>(iv) Chlorophyll breakdown at very high intensities",
  options: [
    "(i) and (ii) only",
    "(i), (ii) and (iii) only",
    "(i), (ii), (iii) and (iv)",
    "(iii) and (iv) only"
  ],
  correct: 2,
  explanation: "All four are correct as per NCERT. At low light: linear increase. At higher light: plateau (other factors become limiting). Saturation at 10% sunlight. Very high light: chlorophyll breakdown and decreased photosynthesis."
},
{
  id: 569,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "At low light conditions, increasing CO₂ concentration for C₃ and C₄ plants will:",
  options: [
    "Increase photosynthesis in both",
    "Increase photosynthesis only in C₃",
    "Increase photosynthesis only in C₄",
    "Not increase photosynthesis in either"
  ],
  correct: 3,
  explanation: "NCERT states: 'At low light conditions neither group responds to high CO₂ conditions.' Light is the limiting factor at low intensities, so increasing CO₂ has no effect."
},
{
  id: 570,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "Select the <b>incorrect</b> statement about factors affecting photosynthesis:",
  options: [
    "CO₂ is the major limiting factor for photosynthesis",
    "Light is always the major limiting factor in nature",
    "Dark reactions are more temperature-sensitive than light reactions",
    "Water stress indirectly affects photosynthesis"
  ],
  correct: 1,
  explanation: "NCERT states: 'except for plants in shade or in dense forests, light is rarely a limiting factor in nature.' Saying light is ALWAYS the major limiting factor is incorrect. CO₂ is the major limiting factor."
},
{
  id: 571,
  topic: "Factors Affecting Photosynthesis - Water",
  q: "Water stress reduces photosynthesis through:<br>(i) Stomatal closure → reduced CO₂<br>(ii) Leaf wilting → reduced leaf surface area<br>(iii) Reduced metabolic activity<br><br>How many of the above mechanisms are mentioned in NCERT?",
  options: [
    "One",
    "Two",
    "Three",
    "None"
  ],
  correct: 2,
  explanation: "All three are mentioned: 'Water stress causes the stomata to close hence reducing the CO₂ availability. Besides, water stress also makes leaves wilt, thus, reducing the surface area of the leaves and their metabolic activity as well.'"
},
{
  id: 572,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "<b>Assertion (A):</b> Several factors simultaneously affect photosynthesis.<br><b>Reason (R):</b> According to Blackman's Law, the rate is determined by the factor nearest to its minimal value.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both are true but R does not explain A. A states that several factors simultaneously affect photosynthesis. R states how the rate is determined (by limiting factor). R explains how rate is determined, not why multiple factors affect the process simultaneously."
},
{
  id: 573,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "Which of the following correctly represents the CO₂ saturation points?",
  options: [
    "C₃: ~360 µlL⁻¹; C₄: >450 µlL⁻¹",
    "C₃: >450 µlL⁻¹; C₄: ~360 µlL⁻¹",
    "C₃: ~200 µlL⁻¹; C₄: ~200 µlL⁻¹",
    "C₃: ~360 µlL⁻¹; C₄: ~360 µlL⁻¹"
  ],
  correct: 1,
  explanation: "NCERT: C₄ plants saturate at ~360 µlL⁻¹; C₃ plants saturate beyond 450 µlL⁻¹. Students commonly interchange these values — a frequent NEET trap."
},
{
  id: 574,
  topic: "Factors Affecting Photosynthesis - Temperature",
  q: "Which set of reactions in photosynthesis is more affected by temperature changes?",
  options: [
    "Light reactions",
    "Dark reactions",
    "Both equally",
    "Neither is affected"
  ],
  correct: 1,
  explanation: "NCERT states: 'The dark reactions being enzymatic are temperature controlled. Though the light reactions are also temperature sensitive they are affected to a much lesser extent.'"
},
{
  id: 575,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "A plant is placed in an environment with optimal temperature, optimal water, and optimal CO₂, but in complete darkness. According to Blackman's Law:",
  options: [
    "Photosynthesis will occur normally",
    "Light is the limiting factor and photosynthesis will not occur",
    "CO₂ will become the limiting factor",
    "Temperature will become the limiting factor"
  ],
  correct: 1,
  explanation: "Without light, no photosynthesis can occur regardless of other optimal conditions. Light becomes the limiting factor as per Blackman's Law — the factor at minimal value determines the rate."
},
{
  id: 576,
  topic: "Factors Affecting Photosynthesis - CO₂ Concentration",
  q: "Greenhouse cultivation of tomatoes in CO₂-enriched atmosphere is beneficial because tomatoes are:",
  options: [
    "C₄ plants that need extra CO₂",
    "C₃ plants that respond to higher CO₂ with increased photosynthesis and yield",
    "CAM plants that fix CO₂ at night",
    "C₃ plants that do not respond to CO₂"
  ],
  correct: 1,
  explanation: "Tomatoes are C₃ plants. NCERT states C₃ plants 'respond to higher CO₂ concentration by showing increased rates of photosynthesis leading to higher productivity.' Hence, CO₂ enrichment in greenhouses benefits tomato yields."
},
{
  id: 577,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "Light quality refers to:",
  options: [
    "The intensity of light",
    "The wavelength (colour) composition of light",
    "The duration of light exposure",
    "The source of light"
  ],
  correct: 1,
  explanation: "Light quality refers to the spectral composition (wavelength/colour) of light. Different wavelengths (blue, red, green, etc.) have different effects on photosynthesis. Light intensity is the brightness, and duration is the photoperiod."
},
{
  id: 578,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "Consider the following:<br>(A) Internal factors: genetic, structural (leaves, chloroplasts), biochemical (chlorophyll, CO₂)<br>(B) External factors: light, temperature, CO₂, water<br>(C) Usually one factor limits the rate at any time<br>(D) All factors have equal effect at all times<br><br>Which are correct?",
  options: [
    "(A), (B) and (C) only",
    "(A), (B), (C) and (D)",
    "(A) and (B) only",
    "(D) only"
  ],
  correct: 0,
  explanation: "A, B, and C are correct per NCERT. D is wrong — Blackman's Law says one factor (the limiting one) determines the rate, not that all factors have equal effect at all times."
},
{
  id: 579,
  topic: "Factors Affecting Photosynthesis - Comprehensive",
  q: "Which of the following is the most accurate statement about the law of limiting factors?",
  options: [
    "It applies only to photosynthesis",
    "It applies to any chemical process affected by more than one factor",
    "It applies only to temperature-dependent reactions",
    "It was proposed by Melvin Calvin"
  ],
  correct: 1,
  explanation: "NCERT states: 'If a chemical process is affected by more than one factor, then its rate will be determined by the factor which is nearest to its minimal value.' It applies to any multi-factor chemical process, not just photosynthesis. It was proposed by Blackman (1905)."
},
{
  id: 580,
  topic: "Factors Affecting Photosynthesis - Light",
  q: "<b>Assertion (A):</b> Light saturation for photosynthesis occurs at 10% of full sunlight.<br><b>Reason (R):</b> At 10% sunlight, other factors like CO₂ become limiting and the rate cannot increase further.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. At 10% full sunlight, the light reactions are saturated and other factors (especially CO₂) become the bottleneck. R correctly explains why light saturation occurs at such a low percentage."
}
,
{
  id: 581,
  topic: "Summary - Comprehensive Revision",
  q: "Green plants make their own food by photosynthesis. During this process, CO₂ from the atmosphere is taken in by leaves through:",
  options: [
    "Lenticels",
    "Stomata",
    "Root hairs",
    "Cuticle"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'carbon dioxide from the atmosphere is taken in by leaves through stomata.' Stomata are the primary entry points for CO₂ in leaves."
},
{
  id: 582,
  topic: "Summary - Comprehensive Revision",
  q: "The carbohydrates principally made during photosynthesis are:",
  options: [
    "Sucrose and fructose",
    "Glucose and starch",
    "Cellulose and maltose",
    "Glycogen and lactose"
  ],
  correct: 1,
  explanation: "NCERT summary states CO₂ is 'used for making carbohydrates, principally glucose and starch.' Glucose is the immediate product; starch is the storage form."
},
{
  id: 583,
  topic: "Summary - Comprehensive Revision",
  q: "Photosynthesis takes place in:",
  options: [
    "All parts of the plant equally",
    "Only in the roots",
    "Only in the green parts of the plants, mainly the leaves",
    "Only in the flowers"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Photosynthesis takes place only in the green parts of the plants, mainly the leaves.' Other green parts like stems can also photosynthesize."
},
{
  id: 584,
  topic: "Summary - Comprehensive Revision",
  q: "Within the leaves, the cells responsible for CO₂ fixation are:",
  options: [
    "Epidermal cells",
    "Guard cells",
    "Mesophyll cells",
    "Xylem cells"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'the mesophyll cells have a large number of chloroplasts that are responsible for CO₂ fixation.'"
},
{
  id: 585,
  topic: "Summary - Comprehensive Revision",
  q: "Within the chloroplasts:<br>(A) Membranes are sites for light reactions<br>(B) Stroma is the site for the carbon fixing pathway<br>(C) Membranes are sites for the Calvin cycle<br>(D) Stroma is the site for light reactions",
  options: [
    "(A) and (B) only",
    "(C) and (D) only",
    "(A), (B), (C) and (D)",
    "(A) only"
  ],
  correct: 0,
  explanation: "NCERT summary states: 'the membranes are sites for the light reaction, while the chemosynthetic pathway occurs in the stroma.' Statements C and D reverse the locations and are incorrect."
},
{
  id: 586,
  topic: "Summary - Comprehensive Revision",
  q: "Photosynthesis has two stages:",
  options: [
    "Glycolysis and Krebs cycle",
    "Light reaction and carbon fixing reactions",
    "Photolysis and chemiosmosis only",
    "Carboxylation and oxygenation only"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Photosynthesis has two stages: the light reaction and the carbon fixing reactions.' These correspond to the photochemical phase and the biosynthetic phase respectively."
},
{
  id: 587,
  topic: "Summary - Comprehensive Revision",
  q: "In the light reaction, light energy is absorbed by pigments in the antenna and funnelled to:",
  options: [
    "All chlorophyll molecules equally",
    "Special chlorophyll a molecules called reaction centre chlorophylls",
    "Carotenoids at the reaction centre",
    "Chlorophyll b at the reaction centre"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'the light energy is absorbed by the pigments present in the antenna, and funnelled to special chlorophyll a molecules called reaction centre chlorophylls.'"
},
{
  id: 588,
  topic: "Summary - Comprehensive Revision",
  q: "PS I has a reaction centre that absorbs at:",
  options: [
    "680 nm",
    "700 nm",
    "430 nm",
    "660 nm"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'PS I has a 700 nm absorbing chlorophyll a P700 molecule at its reaction centre.'"
},
{
  id: 589,
  topic: "Summary - Comprehensive Revision",
  q: "PS II has a reaction centre that absorbs red light at:",
  options: [
    "700 nm",
    "730 nm",
    "680 nm",
    "640 nm"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'PS II has a P680 reaction centre that absorbs red light at 680 nm.'"
},
{
  id: 590,
  topic: "Summary - Error Detection (NCERT Summary)",
  q: "The NCERT summary states that electrons are 'finally transferred to NAD forming NADH.' Identify the error:",
  options: [
    "There is no error — NAD and NADH are correct",
    "It should be NADP⁺ forming NADPH (not NAD forming NADH)",
    "It should be FAD forming FADH₂",
    "Electrons are not transferred at all"
  ],
  correct: 1,
  explanation: "This is a known error in the NCERT summary. The correct statement should be: electrons are finally transferred to NADP⁺ forming NADPH + H⁺. NAD⁺/NADH are involved in respiration, not photosynthesis. NEET may test awareness of this distinction."
},
{
  id: 591,
  topic: "Summary - Comprehensive Revision",
  q: "During the light reaction, a proton gradient is created across:",
  options: [
    "The outer membrane of the chloroplast",
    "The plasma membrane",
    "The membrane of the thylakoid",
    "The nuclear membrane"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'a proton gradient is created across the membrane of the thylakoid.' This gradient drives ATP synthesis via chemiosmosis."
},
{
  id: 592,
  topic: "Summary - Error Detection (NCERT Summary)",
  q: "The NCERT summary mentions 'F₀ part of the ATPase enzyme.' In the context of chloroplasts, the more accurate terminology would be:",
  options: [
    "F₀ is correct for chloroplasts",
    "CF₀ (C for chloroplast)",
    "EF₀ (E for eukaryote)",
    "MF₀ (M for membrane)"
  ],
  correct: 1,
  explanation: "In the detailed text, NCERT uses CF₀ and CF₁ for chloroplast ATP synthase. The summary uses 'F₀' which is mitochondrial terminology. The correct notation for chloroplasts is CF₀. NEET students should know both terminologies."
},
{
  id: 593,
  topic: "Summary - Comprehensive Revision",
  q: "The breakdown of the proton gradient through the F₀ (CF₀) part of ATP synthase releases energy for:",
  options: [
    "Water splitting",
    "Synthesis of ATP",
    "CO₂ fixation directly",
    "Chlorophyll synthesis"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'The breakdown of the protons gradient due to movement through the F₀ part of the ATPase enzyme releases enough energy for synthesis of ATP.'"
},
{
  id: 594,
  topic: "Summary - Comprehensive Revision",
  q: "Splitting of water molecules is associated with:",
  options: [
    "PS I",
    "PS II",
    "Both PS I and PS II equally",
    "The stroma"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Splitting of water molecules is associated with PS II resulting in the release of O₂, protons and transfer of electrons to PS II.'"
},
{
  id: 595,
  topic: "Summary - Comprehensive Revision",
  q: "The products of water splitting are:",
  options: [
    "O₂ only",
    "O₂, protons and electrons",
    "H₂ and O₂",
    "CO₂ and H₂O"
  ],
  correct: 1,
  explanation: "NCERT summary states water splitting results in 'the release of O₂, protons and transfer of electrons to PS II.' All three products are essential for the light reactions."
},
{
  id: 596,
  topic: "Summary - Comprehensive Revision",
  q: "In the carbon fixation cycle, CO₂ is added by which enzyme to which molecule?",
  options: [
    "PEPcase to PEP",
    "RuBisCO to RuBP",
    "RuBisCO to PGA",
    "PEPcase to RuBP"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'CO₂ is added by the enzyme, RuBisCO, to a 5-carbon compound RuBP.' This is the carboxylation step of the Calvin cycle."
},
{
  id: 597,
  topic: "Summary - Comprehensive Revision",
  q: "When CO₂ is added to RuBP by RuBisCO, the product is:",
  options: [
    "1 molecule of 6-carbon glucose",
    "2 molecules of 3-carbon PGA",
    "1 molecule of 4-carbon OAA",
    "2 molecules of 5-carbon RuBP"
  ],
  correct: 1,
  explanation: "NCERT summary states: RuBP 'is converted to 2 molecules of 3-carbon PGA.' This is the first stable product of the Calvin cycle."
},
{
  id: 598,
  topic: "Summary - Comprehensive Revision",
  q: "PGA is then converted to sugar by:",
  options: [
    "The light reactions",
    "The Calvin cycle",
    "Glycolysis",
    "The Krebs cycle"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'This is then converted to sugar by the Calvin cycle, and the RuBP is regenerated.' The Calvin cycle includes the reduction and regeneration steps."
},
{
  id: 599,
  topic: "Summary - Comprehensive Revision",
  q: "During the Calvin cycle, the molecules utilised from the light reaction are:",
  options: [
    "O₂ and H₂O",
    "ATP and NADPH",
    "Glucose and starch",
    "CO₂ and H₂O"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'During this process ATP and NADPH synthesised in the light reaction are utilised.' These provide the energy and reducing power for sugar synthesis."
},
{
  id: 600,
  topic: "Summary - Comprehensive Revision",
  q: "RuBisCO also catalyses a wasteful oxygenation reaction in C₃ plants called:",
  options: [
    "Fermentation",
    "Cellular respiration",
    "Photorespiration",
    "Chemiosmosis"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'RuBisCO also catalyses a wasteful oxygenation reaction in C₃ plants: photorespiration.' This reduces the efficiency of photosynthesis in C₃ plants."
},
{
  id: 601,
  topic: "Summary - Comprehensive Revision",
  q: "Some tropical plants show a special type of photosynthesis called:",
  options: [
    "CAM pathway",
    "C₃ pathway",
    "C₄ pathway",
    "Photorespiration"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Some tropical plants show a special type of photosynthesis called C₄ pathway.'"
},
{
  id: 602,
  topic: "Summary - Comprehensive Revision",
  q: "In C₄ plants, the first product of CO₂ fixation in the mesophyll is:",
  options: [
    "A 3-carbon compound (PGA)",
    "A 4-carbon compound",
    "A 5-carbon compound (RuBP)",
    "A 6-carbon compound (glucose)"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'the first product of CO₂ fixation that takes place in the mesophyll, is a 4-carbon compound.' This is OAA (oxaloacetic acid)."
},
{
  id: 603,
  topic: "Summary - Comprehensive Revision",
  q: "In C₄ plants, the Calvin pathway for carbohydrate synthesis is carried out in:",
  options: [
    "Mesophyll cells",
    "Bundle sheath cells",
    "Both mesophyll and bundle sheath cells",
    "Epidermal cells"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'In the bundle sheath cells the Calvin pathway is carried out for the synthesis of carbohydrates.'"
},
{
  id: 604,
  topic: "Summary - Comprehensive Revision",
  q: "<b>Assertion (A):</b> Photorespiration is described as a 'wasteful' reaction.<br><b>Reason (R):</b> Photorespiration releases CO₂ and consumes ATP without producing sugars or ATP.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT calls it a 'wasteful oxygenation reaction.' As established earlier, photorespiration produces no sugars or ATP and consumes ATP while releasing CO₂. R correctly explains why it is wasteful."
},
{
  id: 605,
  topic: "Summary - Comprehensive Revision",
  q: "Consider the complete process of photosynthesis. The correct sequence of major events is:",
  options: [
    "Carbon fixation → Light absorption → Water splitting → Sugar synthesis",
    "Light absorption → Water splitting → Electron transport → NADPH + ATP formation → Carbon fixation → Sugar synthesis",
    "Sugar synthesis → Light absorption → Carbon fixation → Water splitting",
    "Water splitting → Carbon fixation → Light absorption → Sugar synthesis"
  ],
  correct: 1,
  explanation: "The correct sequence: Light is absorbed by antenna pigments → Water is split at PS II → Electrons are transported through the Z scheme → NADPH and ATP are formed → CO₂ is fixed and reduced to sugar in the Calvin cycle."
},
{
  id: 606,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following is the correct summary of the light reaction?",
  options: [
    "CO₂ + H₂O → Glucose + O₂",
    "Light energy → absorbed by antenna → electrons excited → transferred through PS II and PS I → NADPH formed; proton gradient → ATP formed; water split → O₂ released",
    "RuBP + CO₂ → 2 PGA → Sugar + RuBP regenerated",
    "PEP + CO₂ → OAA → transported to bundle sheath"
  ],
  correct: 1,
  explanation: "Option B correctly summarises all the key events of the light reaction as described in the NCERT summary. Option A is the overall equation. Option C is the Calvin cycle. Option D is the C₄ pathway."
},
{
  id: 607,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following is the correct summary of the carbon fixing reactions?",
  options: [
    "Light absorbed → electrons excited → NADPH formed",
    "Water split → O₂ released → proton gradient formed",
    "CO₂ added to RuBP by RuBisCO → 2 PGA → converted to sugar → RuBP regenerated using ATP and NADPH",
    "PEP + CO₂ → OAA → malic acid → bundle sheath"
  ],
  correct: 2,
  explanation: "Option C correctly summarises the Calvin cycle (carbon fixing reactions): carboxylation (CO₂ + RuBP → 2 PGA), reduction (PGA → sugar using ATP/NADPH), and regeneration (RuBP reformed)."
},
{
  id: 608,
  topic: "Summary - Comprehensive Revision",
  q: "Select the <b>incorrect</b> statement from the following:",
  options: [
    "PS I has P700 at its reaction centre",
    "PS II has P680 at its reaction centre",
    "Electrons are finally transferred to NAD forming NADH in photosynthesis",
    "Water splitting is associated with PS II"
  ],
  correct: 2,
  explanation: "Statement C is incorrect — in photosynthesis, electrons are transferred to NADP⁺ forming NADPH (not NAD forming NADH). NAD/NADH are involved in respiration. This is an error present in the NCERT summary that NEET students must be aware of."
},
{
  id: 609,
  topic: "Summary - Comprehensive Revision",
  q: "<b>Assertion (A):</b> The Calvin pathway is common to both C₃ and C₄ plants.<br><b>Reason (R):</b> In C₄ plants, the Calvin pathway occurs in bundle sheath cells, while in C₃ plants it occurs in mesophyll cells.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The Calvin pathway is the main biosynthetic pathway in ALL photosynthetic plants. In C₃ plants it occurs in mesophyll cells; in C₄ plants in bundle sheath cells. R explains where the common pathway operates in each type, supporting A."
},
{
  id: 610,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following correctly represents the division of labour within the chloroplast?",
  options: [
    "Membranes → Carbon fixation; Stroma → Light reactions",
    "Membranes → Light reactions; Stroma → Carbon fixation",
    "Both reactions occur in the membranes",
    "Both reactions occur in the stroma"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'the membranes are sites for the light reaction, while the chemosynthetic pathway occurs in the stroma.' This is the fundamental division of labour."
},
{
  id: 611,
  topic: "Summary - Comprehensive Revision",
  q: "Consider the following flow chart of photosynthesis:<br>Light energy → Antenna pigments → Reaction centre (Chl a) → Electron excitation → PS II & PS I → _____ → Proton gradient → ATP<br><br>What fills the blank?",
  options: [
    "Glucose formation",
    "CO₂ fixation",
    "NADPH (NADP⁺ reduction)",
    "Starch synthesis"
  ],
  correct: 2,
  explanation: "After electron transport through PS II and PS I, electrons reduce NADP⁺ to NADPH. The proton gradient formed during this process drives ATP synthesis. NADPH formation is the terminal event of the electron transport chain."
},
{
  id: 612,
  topic: "Summary - Comprehensive Revision",
  q: "The NCERT summary refers to the carbon fixing reactions occurring in the stroma as the 'chemosynthetic pathway.' This is more commonly known as:",
  options: [
    "The light reaction",
    "The Calvin cycle (biosynthetic phase / dark reaction)",
    "Chemosynthesis by bacteria",
    "The Hatch-Slack pathway"
  ],
  correct: 1,
  explanation: "The 'chemosynthetic pathway' mentioned in the summary refers to the Calvin cycle (carbon fixing reactions / dark reactions / biosynthetic phase) occurring in the stroma. It should not be confused with bacterial chemosynthesis."
},
{
  id: 613,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following molecules is regenerated at the end of the Calvin cycle?",
  options: [
    "PGA",
    "OAA",
    "RuBP",
    "PEP"
  ],
  correct: 2,
  explanation: "NCERT summary states: PGA is 'converted to sugar by the Calvin cycle, and the RuBP is regenerated.' RuBP regeneration is essential for the cycle to continue."
},
{
  id: 614,
  topic: "Summary - Comprehensive Revision",
  q: "In C₄ plants, the initial CO₂ fixation takes place in:",
  options: [
    "Bundle sheath cells",
    "Mesophyll cells",
    "Guard cells",
    "Epidermal cells"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'the first product of CO₂ fixation that takes place in the mesophyll, is a 4-carbon compound.' Initial fixation occurs in mesophyll; Calvin cycle in bundle sheath."
},
{
  id: 615,
  topic: "Summary - Comprehensive Revision",
  q: "<b>Assertion (A):</b> Mesophyll cells have a large number of chloroplasts.<br><b>Reason (R):</b> Chloroplasts are responsible for CO₂ fixation during photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT summary states: 'the mesophyll cells have a large number of chloroplasts that are responsible for CO₂ fixation.' Having many chloroplasts supports the high demand for CO₂ fixation. R correctly explains A."
},
{
  id: 616,
  topic: "Summary - Comprehensive Revision",
  q: "Consider the following about C₃ and C₄ plants:<br>(A) C₃: First product is PGA (3C)<br>(B) C₃: Calvin cycle in mesophyll cells<br>(C) C₄: First product is a 4C compound<br>(D) C₄: Calvin cycle in bundle sheath cells<br>(E) C₄: Photorespiration is significant<br><br>How many statements are correct?",
  options: [
    "Three",
    "Four",
    "Five",
    "Two"
  ],
  correct: 1,
  explanation: "Statements A, B, C, and D are correct (four). Statement E is wrong — photorespiration does NOT occur significantly in C₄ plants. It is C₃ plants that show photorespiration."
},
{
  id: 617,
  topic: "Summary - Comprehensive Revision",
  q: "The electrons released from water splitting are transferred to:",
  options: [
    "PS I directly",
    "NADP⁺ directly",
    "PS II",
    "ATP synthase"
  ],
  correct: 2,
  explanation: "NCERT summary states water splitting results in 'transfer of electrons to PS II.' These electrons replace the ones lost by PS II when its reaction centre (P680) is excited by light."
},
{
  id: 618,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following represents the correct overall summary of photosynthesis?",
  options: [
    "Light reaction: Light → ATP + NADPH + O₂; Dark reaction: CO₂ + ATP + NADPH → Sugar + RuBP regenerated",
    "Light reaction: CO₂ → Sugar; Dark reaction: H₂O → O₂",
    "Light reaction: CO₂ → ATP; Dark reaction: ATP → Sugar",
    "Light reaction: Sugar → CO₂; Dark reaction: CO₂ → O₂"
  ],
  correct: 0,
  explanation: "Light reactions convert light energy to chemical energy (ATP + NADPH) and release O₂ from water splitting. Dark reactions use ATP + NADPH to fix CO₂ into sugar via the Calvin cycle with RuBP regeneration."
},
{
  id: 619,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following is <b>NOT</b> mentioned as a product of water splitting in the NCERT summary?",
  options: [
    "O₂",
    "Protons (H⁺)",
    "Electrons",
    "NADPH"
  ],
  correct: 3,
  explanation: "NCERT summary mentions water splitting releases 'O₂, protons and transfer of electrons to PS II.' NADPH is formed later when electrons from PS I reduce NADP⁺, not directly from water splitting."
},
{
  id: 620,
  topic: "Summary - Comprehensive Revision",
  q: "The NCERT summary uses the term 'chemosynthetic pathway' for the reactions occurring in the stroma. This term should not be confused with:",
  options: [
    "Photosynthesis",
    "Chemosynthesis carried out by certain bacteria using chemical energy",
    "The Calvin cycle",
    "Carbon fixation"
  ],
  correct: 1,
  explanation: "Chemosynthesis by bacteria (using chemical energy from inorganic compounds) is fundamentally different from the Calvin cycle in chloroplasts (which uses ATP and NADPH from light reactions). The NCERT summary's use of 'chemosynthetic' may cause confusion."
},
{
  id: 621,
  topic: "Summary - Comprehensive Revision",
  q: "According to the NCERT summary, the complete process of photosynthesis involves:<br>(i) CO₂ uptake through stomata<br>(ii) Light absorption by antenna pigments<br>(iii) Electron transport through PS II and PS I<br>(iv) Proton gradient formation and ATP synthesis<br>(v) Water splitting at PS II<br>(vi) CO₂ fixation by RuBisCO<br>(vii) Sugar synthesis via Calvin cycle<br><br>How many of these are mentioned in the summary?",
  options: [
    "Five",
    "Six",
    "Seven",
    "Four"
  ],
  correct: 2,
  explanation: "All seven events are mentioned in the NCERT summary: stomatal CO₂ uptake, antenna light absorption, electron transport, proton gradient/ATP, water splitting at PS II, RuBisCO-catalysed CO₂ fixation, and Calvin cycle sugar synthesis."
},
{
  id: 622,
  topic: "Summary - Error Detection",
  q: "Identify how many errors exist in the following NCERT summary statement: 'After absorbing light, electrons are excited and transferred through PS II and PS I and finally to NAD forming NADH.'",
  options: [
    "No errors",
    "One error — NAD should be NADP⁺ and NADH should be NADPH",
    "Two errors",
    "Three errors"
  ],
  correct: 1,
  explanation: "There is one conceptual error: 'NAD forming NADH' should be 'NADP⁺ forming NADPH.' In photosynthesis, NADP⁺ (not NAD⁺) is the electron acceptor, forming NADPH (not NADH). This is a well-known error in the NCERT summary."
},
{
  id: 623,
  topic: "Summary - Comprehensive Revision",
  q: "<b>Assertion (A):</b> The C₄ pathway is a special type of photosynthesis found in some tropical plants.<br><b>Reason (R):</b> In C₄ plants, the first product of CO₂ fixation is a 4-carbon compound formed in mesophyll cells.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The C₄ pathway is special to tropical plants. The formation of a 4-carbon compound as the first product in mesophyll cells is what defines and distinguishes the C₄ pathway. R correctly explains what makes it special."
},
{
  id: 624,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following best represents the relationship between light reactions and dark reactions?",
  options: [
    "They are completely independent",
    "Light reactions provide ATP and NADPH that are used by dark reactions for sugar synthesis",
    "Dark reactions provide energy for light reactions",
    "Both produce O₂"
  ],
  correct: 1,
  explanation: "NCERT summary confirms: 'ATP and NADPH synthesised in the light reaction are utilised' during the Calvin cycle. Light reactions supply the energy currency; dark reactions use it for biosynthesis."
},
{
  id: 625,
  topic: "Summary - Comprehensive Revision",
  q: "Which of the following is the correct complete summary of what happens at PS II?",
  options: [
    "P680 absorbs light → electrons excited → water split → O₂ + H⁺ + electrons released → electrons enter ETC",
    "P700 absorbs light → electrons to NADP⁺ → NADPH formed",
    "CO₂ is fixed → PGA formed",
    "Protons flow through ATP synthase → ATP formed"
  ],
  correct: 0,
  explanation: "At PS II: P680 absorbs 680 nm light, electrons are excited and enter the ETC; water is split to replace lost electrons, releasing O₂, protons, and electrons. Option B describes PS I events."
}
];
