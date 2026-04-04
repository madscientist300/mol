// ===== CHAPTER: Organisms and Populations =====
const allQuestions = [
{
  "id": 1,
  "topic": "Introduction - Organisms and Population",
  "q": "Who is revered as the <b>Father of Ecology in India</b>?",
  "options": ["Ernst Haeckel", "Ramdeo Misra", "R. Mishra", "W. H. Pearsall"],
  "correct": 1,
  "explanation": "Ramdeo Misra is revered as the Father of Ecology in India as per NCERT. Ernst Haeckel coined the term 'Ecology' but is not referred to as the Father of Ecology in India. W. H. Pearsall was Misra's Ph.D. supervisor."
},
{
  "id": 2,
  "topic": "Introduction - Organisms and Population",
  "q": "Ramdeo Misra obtained his Ph.D. in Ecology from:",
  "options": ["Banaras Hindu University", "University of Cambridge", "Leeds University, UK", "Oxford University, UK"],
  "correct": 2,
  "explanation": "Ramdeo Misra obtained his Ph.D. in Ecology (1937) from Leeds University in UK under Prof. W. H. Pearsall, FRS."
},
{
  "id": 3,
  "topic": "Introduction - Organisms and Population",
  "q": "Consider the following statements regarding Ramdeo Misra:<br>(i) He obtained Ph.D. under Prof. W. H. Pearsall from Oxford University.<br>(ii) He established teaching and research in ecology at BHU, Varanasi.<br>(iii) He formulated the first postgraduate course in ecology in India.<br>(iv) He was awarded the Sanjay Gandhi Award in Environment and Ecology.<br><br>Which of the above statements are <b>correct</b>?",
  "options": ["(i), (ii) and (iii)", "(ii), (iii) and (iv)", "(i), (iii) and (iv)", "All of the above"],
  "correct": 1,
  "explanation": "Statement (i) is incorrect — Misra obtained his Ph.D. from Leeds University, UK, not Oxford. Statements (ii), (iii), and (iv) are all correct as per NCERT."
},
{
  "id": 4,
  "topic": "Introduction - Organisms and Population",
  "q": "Ecology is basically concerned with how many levels of biological organisation as per NCERT?",
  "options": ["Three", "Four", "Five", "Six"],
  "correct": 1,
  "explanation": "NCERT explicitly states: 'Ecology is basically concerned with four levels of biological organisation – organisms, populations, communities and biomes.'"
},
{
  "id": 5,
  "topic": "Introduction - Organisms and Population",
  "q": "Which of the following is <b>NOT</b> one of the four levels of biological organisation with which ecology is basically concerned?",
  "options": ["Organisms", "Populations", "Ecosystems", "Biomes"],
  "correct": 2,
  "explanation": "As per NCERT, ecology is basically concerned with four levels: organisms, populations, communities and biomes. 'Ecosystems' is a level of biological organisation but is not listed among the four levels ecology is 'basically concerned with' in NCERT's specific statement."
},
{
  "id": 6,
  "topic": "Introduction - Organisms and Population",
  "q": "When we ask '<b>How does the bird sing?</b>', we are seeking:",
  "options": ["The significance of the process", "The mechanism behind the process", "The evolutionary advantage", "The ecological niche of the bird"],
  "correct": 1,
  "explanation": "'How-type' questions seek the mechanism behind the process (e.g., operation of voice box and vibrating bone). 'Why-type' questions seek the significance of the process."
},
{
  "id": 7,
  "topic": "Introduction - Organisms and Population",
  "q": "'<b>Why does the bird sing?</b>' — The answer to this type of question, as per NCERT, may lie in:",
  "options": ["The operation of the voice box", "The vibrating bone structure", "The bird's need to communicate with its mate during breeding season", "The neural mechanism of sound production"],
  "correct": 2,
  "explanation": "NCERT states: for 'why-type' questions, the answer may lie in the bird's need to communicate with its mate during breeding season. This represents the significance (ultimate cause) of the process."
},
{
  "id": 8,
  "topic": "Introduction - Organisms and Population",
  "q": "<b>Assertion (A):</b> 'How-type' questions in biology seek the significance of a biological process.<br><b>Reason (R):</b> 'Why-type' questions in biology seek the mechanism behind a biological process.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "Both A and R are incorrect"],
  "correct": 3,
  "explanation": "Both statements are incorrect. As per NCERT, 'How-type' questions seek the mechanism (not significance), and 'Why-type' questions seek the significance (not mechanism). This is a common conceptual trap."
},
{
  "id": 9,
  "topic": "Introduction - Organisms and Population",
  "q": "The National Committee for Environmental Planning and Coordination was established in India in:",
  "options": ["1937", "1972", "1984", "1986"],
  "correct": 1,
  "explanation": "Due to Ramdeo Misra's efforts, the Government of India established the National Committee for Environmental Planning and Coordination in 1972, which later paved the way for the Ministry of Environment and Forests (1984)."
},
{
  "id": 10,
  "topic": "Introduction - Organisms and Population",
  "q": "The Ministry of Environment and Forests in India was established in:",
  "options": ["1972", "1980", "1984", "1986"],
  "correct": 2,
  "explanation": "The Ministry of Environment and Forests was established in 1984. Students often confuse this with 1972 (National Committee for Environmental Planning and Coordination) or 1986 (Environment Protection Act)."
},
{
  "id": 11,
  "topic": "Introduction - Organisms and Population",
  "q": "Which of the following correctly represents the sequence from lowest to highest level of biological organisation?",
  "options": ["Macromolecules → Cells → Tissues → Organs → Organisms → Population → Communities → Ecosystems → Biomes", "Cells → Macromolecules → Tissues → Organs → Organisms → Population → Communities → Biomes → Ecosystems", "Macromolecules → Tissues → Cells → Organs → Organisms → Population → Ecosystems → Communities → Biomes", "Macromolecules → Cells → Organs → Tissues → Organisms → Population → Communities → Ecosystems → Biomes"],
  "correct": 0,
  "explanation": "The correct sequence as per NCERT is: macromolecules → cells → tissues → organs → individual organisms → population → communities → ecosystems → biomes."
},
{
  "id": 12,
  "topic": "Introduction - Organisms and Population",
  "q": "Ecology as a subject studies:",
  "options": ["Only interactions among organisms", "Only interactions between organisms and abiotic environment", "Interactions among organisms and between organisms and their physical (abiotic) environment", "Only the molecular aspects of biological organisation"],
  "correct": 2,
  "explanation": "NCERT defines ecology as: 'a subject which studies the interactions among organisms and between the organism and its physical (abiotic) environment.' It includes both biotic and abiotic interactions."
},
{
  "id": 13,
  "topic": "Introduction - Organisms and Population",
  "q": "Ramdeo Misra's research laid the foundation for understanding of:<br>(i) Tropical communities and their succession<br>(ii) Environmental responses of plant populations<br>(iii) Productivity and nutrient cycling in tropical forest and grassland ecosystems<br>(iv) Marine ecosystem dynamics<br><br>Select the <b>correct</b> statements:",
  "options": ["(i), (ii) and (iii) only", "(i), (ii) and (iv) only", "(ii), (iii) and (iv) only", "All of the above"],
  "correct": 0,
  "explanation": "As per NCERT, Misra's research covered tropical communities and succession, environmental responses of plant populations, and productivity and nutrient cycling in tropical forest and grassland ecosystems. Marine ecosystem dynamics is not mentioned."
},
{
  "id": 14,
  "topic": "Introduction - Organisms and Population",
  "q": "<b>Assertion (A):</b> Ecology gives a holistic perspective to biology.<br><b>Reason (R):</b> Ecology studies how organisms interact with other organisms and physical habitats behaving like organised wholes such as population, community, ecosystem or the biosphere.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both statements are directly from NCERT. Ecology is described as a thread which gives a holistic perspective to biology because it explains how organisms interact at various levels — populations, communities, ecosystems, and biosphere. R correctly explains A."
},
{
  "id": 15,
  "topic": "Introduction - Organisms and Population",
  "q": "Ramdeo Misra was born on:",
  "options": ["26 August 1908", "26 August 1918", "28 August 1908", "26 October 1908"],
  "correct": 0,
  "explanation": "As per NCERT, Ramdeo Misra was born on 26 August 1908."
},
{
  "id": 16,
  "topic": "Introduction - Organisms and Population",
  "q": "The Ph.D. supervisor of Ramdeo Misra was:",
  "options": ["Prof. R. Mishra, FRS", "Prof. W. H. Pearsall, FRS", "Prof. E. Haeckel, FRS", "Prof. A. G. Tansley, FRS"],
  "correct": 1,
  "explanation": "Ramdeo Misra obtained his Ph.D. under Prof. W. H. Pearsall, FRS, from Leeds University, UK."
},
{
  "id": 17,
  "topic": "Introduction - Organisms and Population",
  "q": "At the Department of Botany of which university did Ramdeo Misra establish teaching and research in ecology?",
  "options": ["Delhi University", "Banaras Hindu University, Varanasi", "Allahabad University", "Calcutta University"],
  "correct": 1,
  "explanation": "Misra established teaching and research in ecology at the Department of Botany, Banaras Hindu University, Varanasi."
},
{
  "id": 18,
  "topic": "Introduction - Organisms and Population",
  "q": "Which of the following is described as a 'thread which weaves different areas of biological information into a unifying principle' in NCERT?",
  "options": ["Genetics", "Evolution", "Ecology", "Molecular Biology"],
  "correct": 2,
  "explanation": "NCERT states: 'Ecology is one such thread which gives us a holistic perspective to biology' by weaving different areas of biological information into a unifying principle."
},
{
  "id": 19,
  "topic": "Introduction - Organisms and Population",
  "q": "How many scholars obtained Ph.D. degrees under the supervision of Ramdeo Misra?",
  "options": ["Over 30", "Over 40", "Over 50", "Over 60"],
  "correct": 2,
  "explanation": "As per NCERT, over 50 scholars obtained Ph.D. degree under Ramdeo Misra's supervision."
},
{
  "id": 20,
  "topic": "Introduction - Organisms and Population",
  "q": "Which of the following fellowships was conferred upon Ramdeo Misra?<br>(i) Fellowship of the Indian National Science Academy<br>(ii) Fellowship of the World Academy of Arts and Science<br>(iii) Fellowship of the Royal Society, London<br><br>Select the correct answer:",
  "options": ["(i) and (ii) only", "(i) and (iii) only", "(ii) and (iii) only", "(i), (ii) and (iii)"],
  "correct": 0,
  "explanation": "NCERT mentions that Misra was honoured with Fellowships of the Indian National Science Academy and World Academy of Arts and Science. Fellowship of the Royal Society (FRS) is mentioned for his supervisor W. H. Pearsall, not for Misra himself."
},
{
  "id": 21,
  "topic": "Introduction - Organisms and Population",
  "q": "The establishment of National Committee for Environmental Planning and Coordination (1972) later paved the way for the establishment of:",
  "options": ["Central Pollution Control Board", "Ministry of Environment and Forests (1984)", "National Biodiversity Authority", "Wildlife Institute of India"],
  "correct": 1,
  "explanation": "NCERT clearly states the National Committee for Environmental Planning and Coordination (1972) paved the way for the Ministry of Environment and Forests (1984)."
},
{
  "id": 22,
  "topic": "Introduction - Organisms and Population",
  "q": "Which of the following is an example of a '<b>how-type</b>' question as described in NCERT?",
  "options": ["Why are night-blooming flowers generally white?", "How does the bee know which flower has nectar?", "Why does the bird sing?", "Why does cactus have so many thorns?"],
  "correct": 1,
  "explanation": "'How does the bee know which flower has nectar?' is a 'how-type' question seeking the mechanism. All other options are 'why-type' questions seeking significance."
},
{
  "id": 23,
  "topic": "Introduction - Organisms and Population",
  "q": "Which of the following is an example of a '<b>why-type</b>' question as given in NCERT?",
  "options": ["How does the bird sing?", "How does the bee know which flower has nectar?", "How does the chick recognise her own mother?", "Why does cactus have so many thorns?"],
  "correct": 3,
  "explanation": "'Why does cactus have so many thorns?' is a 'why-type' question seeking significance. Options A, B, and C are all 'how-type' questions seeking mechanisms."
},
{
  "id": 24,
  "topic": "Introduction - Organisms and Population",
  "q": "Consider the following statements:<br>(A) Ecology is basically concerned with organisms, populations, communities and ecosystems.<br>(B) Ecology is basically concerned with organisms, populations, communities and biomes.<br><br>Choose the correct option:",
  "options": ["Only A is correct", "Only B is correct", "Both A and B are correct", "Neither A nor B is correct"],
  "correct": 1,
  "explanation": "NCERT specifically states: 'Ecology is basically concerned with four levels of biological organisation – organisms, populations, communities and biomes.' The fourth level is biomes, NOT ecosystems. This is a common conceptual trap."
},
{
  "id": 25,
  "topic": "Introduction - Organisms and Population",
  "q": "<b>Assertion (A):</b> Ramdeo Misra is considered the Father of Ecology in India.<br><b>Reason (R):</b> He coined the term 'Ecology' for the first time.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 2,
  "explanation": "Assertion is correct — Ramdeo Misra is the Father of Ecology in India. Reason is incorrect — the term 'Ecology' was coined by Ernst Haeckel, not Ramdeo Misra."
},
{
  "id": 26,
  "topic": "Introduction - Organisms and Population",
  "q": "The answer to the question 'How does the bird sing?' involves:",
  "options": ["The bird's need to communicate with its mate", "The operation of the voice box and the vibrating bone in the bird", "The ecological significance of bird song", "The evolutionary advantage of singing behaviour"],
  "correct": 1,
  "explanation": "NCERT states that the answer to 'how does the bird sing' is in terms of the operation of the voice box and the vibrating bone in the bird — this describes the mechanism."
},
{
  "id": 27,
  "topic": "Introduction - Organisms and Population",
  "q": "Ramdeo Misra obtained his Ph.D. in Ecology in the year:",
  "options": ["1908", "1937", "1972", "1984"],
  "correct": 1,
  "explanation": "NCERT states Ramdeo Misra obtained Ph.D. in Ecology in 1937 from Leeds University, UK."
},
{
  "id": 28,
  "topic": "Introduction - Organisms and Population",
  "q": "Match the following:<br>(a) 1908 — (i) Establishment of Ministry of Environment and Forests<br>(b) 1937 — (ii) Birth of Ramdeo Misra<br>(c) 1972 — (iii) Ph.D. of Ramdeo Misra<br>(d) 1984 — (iv) National Committee for Environmental Planning and Coordination<br><br>Choose the correct match:",
  "options": ["(a)-(ii), (b)-(iii), (c)-(iv), (d)-(i)", "(a)-(iii), (b)-(ii), (c)-(i), (d)-(iv)", "(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)", "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)"],
  "correct": 0,
  "explanation": "1908 — Birth of Ramdeo Misra; 1937 — Ph.D. of Ramdeo Misra; 1972 — National Committee for Environmental Planning and Coordination; 1984 — Ministry of Environment and Forests."
},
{
  "id": 29,
  "topic": "Introduction - Organisms and Population",
  "q": "According to NCERT, which of the following correctly describes a particular aspect of ecology that is studied?",
  "options": ["Study of molecular interactions in cells", "Study of anthropogenic environmental degradation and the socio-political issues it has raised", "Study of genetic recombination and mutation", "Study of organ system physiology"],
  "correct": 1,
  "explanation": "NCERT states: 'A particular aspect of this is the study of anthropogenic environmental degradation and the socio-political issues it has raised.'"
},
{
  "id": 30,
  "topic": "Introduction - Organisms and Population",
  "q": "According to NCERT, organisms while remaining individuals interact as groups and behave like organised wholes. Which of the following is <b>NOT</b> mentioned as an example of such organised wholes?",
  "options": ["Population", "Community", "Tissue", "Biosphere"],
  "correct": 2,
  "explanation": "NCERT mentions population, community, ecosystem and biosphere as organised wholes at ecological levels. 'Tissue' is a level of biological organisation but not an ecological organised whole."
},
{
  "id": 31,
  "topic": "Introduction - Organisms and Population",
  "q": "<b>Assertion (A):</b> Ecology is basically concerned with five levels of biological organisation.<br><b>Reason (R):</b> These five levels include organisms, populations, communities, ecosystems and biomes.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "Both A and R are incorrect"],
  "correct": 3,
  "explanation": "Both are incorrect. NCERT states ecology is concerned with FOUR levels (not five): organisms, populations, communities, and biomes. Ecosystems is not listed in this specific statement."
},
{
  "id": 32,
  "topic": "Introduction - Organisms and Population",
  "q": "The chapter 'Organisms and Populations' in NCERT primarily explores ecology at which level?",
  "options": ["Community level", "Population level", "Ecosystem level", "Biome level"],
  "correct": 1,
  "explanation": "NCERT concludes the introduction by stating: 'In this chapter we explore ecology at population levels.' (and organisms level as indicated by the chapter title)."
},
{
  "id": 33,
  "topic": "Introduction - Organisms and Population",
  "q": "Consider the following:<br>Statement I: Diversity is a characteristic of living organisms only.<br>Statement II: Biology textbooks also show diversity in the way content is presented.<br><br>Which of the above is/are correct?",
  "options": ["Only Statement I", "Only Statement II", "Both Statements I and II", "Neither Statement I nor II"],
  "correct": 1,
  "explanation": "NCERT states: 'Diversity is not only a characteristic of living organisms but also of content in biology textbooks.' So Statement I is incorrect (it says 'only'), while Statement II is correct."
},
{
  "id": 34,
  "topic": "Introduction - Organisms and Population",
  "q": "According to NCERT, biology is presented as:<br>(i) Botany, Zoology and Microbiology<br>(ii) Classical and Modern<br>(iii) Theoretical and Applied<br><br>Which of the above is/are mentioned in NCERT?",
  "options": ["(i) only", "(i) and (ii) only", "(ii) and (iii) only", "(i), (ii) and (iii)"],
  "correct": 1,
  "explanation": "NCERT mentions that biology is presented either as botany, zoology and microbiology OR as classical and modern. Option (iii) 'Theoretical and Applied' is not mentioned."
},
{
  "id": 35,
  "topic": "Introduction - Organisms and Population",
  "q": "As per NCERT, 'Modern biology' is described as a euphemism for:",
  "options": ["Ecological aspects of biology", "Molecular aspects of biology", "Applied aspects of biology", "Evolutionary aspects of biology"],
  "correct": 1,
  "explanation": "NCERT states: 'The latter (modern) is a euphemism for molecular aspects of biology.'"
},
{
  "id": 36,
  "topic": "Populations - Population Attributes",
  "q": "A population is defined as a group of individuals of a species that:<br>(i) Live in a well-defined geographical area<br>(ii) Share or compete for similar resources<br>(iii) Potentially interbreed<br>(iv) Always reproduce sexually<br><br>Which of the above are correct?",
  "options": ["(i), (ii) and (iii) only", "(i), (ii) and (iv) only", "(i), (iii) and (iv) only", "All of the above"],
  "correct": 0,
  "explanation": "As per NCERT, a population shares a well-defined geographical area, shares/competes for similar resources, and potentially interbreeds. Statement (iv) is incorrect because even groups resulting from asexual reproduction are considered populations for ecological studies."
},
{
  "id": 37,
  "topic": "Populations - Population Attributes",
  "q": "Although the term 'interbreeding' implies sexual reproduction, a group of individuals resulting from <b>asexual reproduction</b> is:",
  "options": ["Not considered a population", "Considered a population only for genetic studies", "Generally considered a population for the purpose of ecological studies", "Considered a community, not a population"],
  "correct": 2,
  "explanation": "NCERT explicitly states: 'a group of individuals resulting from even asexual reproduction is also generally considered a population for the purpose of ecological studies.'"
},
{
  "id": 38,
  "topic": "Populations - Population Attributes",
  "q": "Which of the following is <b>NOT</b> an example of a population as mentioned in NCERT?",
  "options": ["All cormorants in a wetland", "Rats in an abandoned dwelling", "All animals in a forest tract", "Lotus plants in a pond"],
  "correct": 2,
  "explanation": "NCERT gives examples: cormorants in a wetland, rats in an abandoned dwelling, teakwood trees in a forest tract, bacteria in a culture plate, and lotus plants in a pond. 'All animals in a forest tract' includes multiple species, making it a community, not a population."
},
{
  "id": 39,
  "topic": "Populations - Population Attributes",
  "q": "Population ecology is an important area because it links:",
  "options": ["Ecology to molecular biology and biochemistry", "Ecology to population genetics and evolution", "Ecology to anatomy and morphology", "Ecology to taxonomy and systematics"],
  "correct": 1,
  "explanation": "NCERT states: 'Population ecology is, therefore, an important area because it links ecology to population genetics and evolution.'"
},
{
  "id": 40,
  "topic": "Populations - Population Attributes",
  "q": "<b>Assertion (A):</b> Natural selection operates at the individual organism level.<br><b>Reason (R):</b> It is the individual organism that has to cope with a changed environment.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT states that natural selection operates at the POPULATION level, not individual level. Reason is correct — NCERT states that 'an individual organism is the one that has to cope with a changed environment.' This is a classic trap."
},
{
  "id": 41,
  "topic": "Populations - Population Attributes",
  "q": "An individual organism has births and deaths, but a population has:",
  "options": ["Birth rates and death rates", "Births and deaths", "Only birth rates", "Only growth rates"],
  "correct": 0,
  "explanation": "NCERT clearly distinguishes: 'An individual may have births and deaths, but a population has birth rates and death rates.' These are per capita rates."
},
{
  "id": 42,
  "topic": "Populations - Population Attributes",
  "q": "If in a pond there were 20 lotus plants last year and through reproduction 8 new plants were added, the <b>birth rate</b> is:",
  "options": ["8/28 = 0.__(approximately) offspring per lotus per year", "8/20 = 0.4 offspring per lotus per year", "20/8 = 2.5 offspring per lotus per year", "28/20 = 1.4 offspring per lotus per year"],
  "correct": 1,
  "explanation": "Birth rate = number of new individuals / initial population = 8/20 = 0.4 offspring per lotus per year. A common student trap is dividing by the final population (28) instead of the initial population (20)."
},
{
  "id": 43,
  "topic": "Populations - Population Attributes",
  "q": "In a laboratory population of 40 fruitflies, 4 individuals died during a week. The <b>death rate</b> in the population during that period is:",
  "options": ["0.01 individuals per fruitfly per week", "0.4 individuals per fruitfly per week", "0.1 individuals per fruitfly per week", "4.0 individuals per fruitfly per week"],
  "correct": 2,
  "explanation": "Death rate = number of deaths / total population = 4/40 = 0.1 individuals per fruitfly per week, as given in NCERT."
},
{
  "id": 44,
  "topic": "Populations - Population Attributes",
  "q": "In a population of 50 organisms, if 10 new organisms are born in a year, the per capita birth rate is:",
  "options": ["0.__(5.0)", "0.__(0.__(2))", "0.2", "0.__(10)"],
  "correct": 2,
  "explanation": "Per capita birth rate = number of births / total population = 10/50 = 0.2 offspring per individual per year. This follows the same calculation method given in NCERT's lotus plant example."
},
{
  "id": 45,
  "topic": "Populations - Population Attributes",
  "q": "Which of the following is an attribute of a <b>population</b> but NOT of an individual?",
  "options": ["Birth", "Death", "Sex ratio", "Growth"],
  "correct": 2,
  "explanation": "NCERT states: 'An individual is either a male or a female but a population has a sex ratio.' Birth and death are individual attributes; birth rates and death rates are population attributes. Sex ratio is exclusively a population attribute."
},
{
  "id": 46,
  "topic": "Populations - Population Attributes",
  "q": "If the age distribution (per cent individuals of a given age or age group) is plotted for a population, the resulting structure is called:",
  "options": ["Growth curve", "Age pyramid", "Survivorship curve", "Population histogram"],
  "correct": 1,
  "explanation": "NCERT states: 'If the age distribution is plotted for the population, the resulting structure is called an age pyramid.'"
},
{
  "id": 47,
  "topic": "Populations - Population Attributes",
  "q": "The shape of the age pyramid reflects the <b>growth status</b> of the population. Which of the following growth statuses are represented?",
  "options": ["Growing and declining only", "Growing, stable and declining", "Growing, stable, declining and fluctuating", "Growing and stable only"],
  "correct": 1,
  "explanation": "NCERT mentions three growth statuses reflected by age pyramids: (a) growing, (b) stable, or (c) declining."
},
{
  "id": 48,
  "topic": "Populations - Population Attributes",
  "q": "For human population, the age pyramids generally show:",
  "options": ["Age distribution of only females", "Age distribution of only males", "Age distribution of males and females in a diagram", "Only the total number of individuals at each age"],
  "correct": 2,
  "explanation": "NCERT states: 'For human population, the age pyramids generally show age distribution of males and females in a diagram.'"
},
{
  "id": 49,
  "topic": "Populations - Population Attributes",
  "q": "Population size is technically called <b>population density</b> and is designated as:",
  "options": ["D", "P", "N", "ρ"],
  "correct": 2,
  "explanation": "NCERT states: 'Population size, technically called population density (designated as N).' This is a frequently asked factual point."
},
{
  "id": 50,
  "topic": "Populations - Population Attributes",
  "q": "The population size of <b>Siberian cranes at Bharatpur wetlands</b> in any year could be as low as:",
  "options": ["< 100", "< 50", "< 10", "< 1000"],
  "correct": 2,
  "explanation": "NCERT states: 'The size, in nature, could be as low as < 10 (Siberian cranes at Bharatpur wetlands in any year).'"
},
{
  "id": 51,
  "topic": "Populations - Population Attributes",
  "q": "In an area, there are 200 <b>Parthenium hysterophorus</b> plants and only a single huge <b>banyan tree</b> with a large canopy. In this context, which measure of population density would be more meaningful?",
  "options": ["Total number only", "Per cent cover or biomass", "Number per unit area", "Natality rate"],
  "correct": 1,
  "explanation": "NCERT states that in such cases, stating population density of banyan is low relative to Parthenium based on total number underestimates the banyan's role. Per cent cover or biomass is a more meaningful measure."
},
{
  "id": 52,
  "topic": "Populations - Population Attributes",
  "q": "<b>Assertion (A):</b> Total number is always the most appropriate measure of population density.<br><b>Reason (R):</b> In some cases, per cent cover or biomass is a more meaningful measure of population size.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "A is correct but R is incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT says total number is 'generally' (not always) the most appropriate measure, and in some cases it is 'meaningless or difficult to determine.' Reason is correct as stated by NCERT."
},
{
  "id": 53,
  "topic": "Populations - Population Attributes",
  "q": "The common name of <b>Parthenium hysterophorus</b> as mentioned in NCERT is:",
  "options": ["Congress grass", "Carrot grass", "Banyan grass", "Water hyacinth"],
  "correct": 1,
  "explanation": "NCERT refers to Parthenium hysterophorus as carrot grass."
},
{
  "id": 54,
  "topic": "Populations - Population Attributes",
  "q": "For a dense laboratory culture of bacteria in a petri dish, the best measure to report its population density would be:",
  "options": ["Total number by counting each individual", "Biomass or turbidity (optical density)", "Sex ratio of the culture", "Number of petri dishes used"],
  "correct": 1,
  "explanation": "NCERT implies that when the population is huge and counting is impossible or very time-consuming (like dense bacterial cultures), alternative measures like biomass or optical density are more practical."
},
{
  "id": 55,
  "topic": "Populations - Population Attributes",
  "q": "Which of the following is an example of <b>relative population density</b> as given in NCERT?",
  "options": ["Counting all fish in a lake", "Number of fish caught per trap", "Total biomass of fish in a lake", "Per cent cover of fish in a lake"],
  "correct": 1,
  "explanation": "NCERT states: 'the number of fish caught per trap is good enough measure of its total population density in the lake.' This is an example of relative density, not absolute density."
},
{
  "id": 56,
  "topic": "Populations - Population Attributes",
  "q": "The tiger census in national parks and tiger reserves is often based on:",
  "options": ["Direct counting of tigers", "Camera traps only", "Pug marks and fecal pellets", "Radio collaring only"],
  "correct": 2,
  "explanation": "NCERT states: 'The tiger census in our national parks and tiger reserves is often based on pug marks and fecal pellets.' This is an indirect method of estimation."
},
{
  "id": 57,
  "topic": "Populations - Population Attributes",
  "q": "Consider the following statements:<br>(A) Population density must always be measured in terms of total numbers.<br>(B) Per cent cover or biomass can be used as a measure of population density.<br>(C) Relative densities can serve the purpose of certain ecological investigations.<br><br>Which statements are correct?",
  "options": ["(A) and (B) only", "(B) and (C) only", "(A) and (C) only", "(A), (B) and (C)"],
  "correct": 1,
  "explanation": "Statement (A) is incorrect — population density need NOT always be measured in numbers; per cent cover or biomass can also be used. Statements (B) and (C) are correct as per NCERT."
},
{
  "id": 58,
  "topic": "Populations - Population Attributes",
  "q": "Which of the following correctly represents a <b>declining population</b>?",
  "options": ["Age pyramid with a broad base", "Age pyramid with a narrow base and broad top", "Age pyramid with equal proportions at all age groups", "Age pyramid that is bell-shaped"],
  "correct": 1,
  "explanation": "A declining population has fewer individuals in the pre-reproductive age group (narrow base) and more in older age groups (broad top). A broad base indicates a growing population, and equal proportions indicate a stable population."
},
{
  "id": 59,
  "topic": "Populations - Population Attributes",
  "q": "A <b>growing population</b> would have an age pyramid that is:",
  "options": ["Urn-shaped (narrow base)", "Bell-shaped (equal proportions)", "Triangular with a broad base", "Inverted triangular"],
  "correct": 2,
  "explanation": "A growing population has more pre-reproductive individuals (broad base) giving a triangular shape. Urn-shaped = declining; Bell-shaped = stable."
},
{
  "id": 60,
  "topic": "Populations - Population Attributes",
  "q": "<b>Assertion (A):</b> Birth rate and death rate in a population are expressed as per capita rates.<br><b>Reason (R):</b> These rates are expressed as change in numbers with respect to members of the population.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct, and R explains A. NCERT states: 'In a population these rates refer to per capita births and deaths. The rates, hence, expressed are change in numbers (increase or decrease) with respect to members of the population.'"
},
{
  "id": 61,
  "topic": "Populations - Population Attributes",
  "q": "Whatever ecological processes we wish to investigate in a population, we always evaluate them in terms of:",
  "options": ["Change in sex ratio", "Change in species diversity", "Change in population size", "Change in biomass only"],
  "correct": 2,
  "explanation": "NCERT states: 'Whatever ecological processes we wish to investigate in a population, be it the outcome of competition with another species, the impact of a predator or the effect of a pesticide application, we always evaluate them in terms of any change in the population size.'"
},
{
  "id": 62,
  "topic": "Populations - Population Attributes",
  "q": "Which of the following examples of population sizes is mentioned in NCERT?<br>(i) Siberian cranes at Bharatpur — <10<br>(ii) Chlamydomonas in a pond — millions<br>(iii) Tigers in India — thousands<br><br>Select the correct option:",
  "options": ["(i) and (ii) only", "(ii) and (iii) only", "(i) and (iii) only", "(i), (ii) and (iii)"],
  "correct": 0,
  "explanation": "NCERT specifically mentions Siberian cranes at Bharatpur (<10) and Chlamydomonas in a pond (millions). Tigers in India being thousands is not mentioned in this context."
},
{
  "id": 63,
  "topic": "Populations - Population Attributes",
  "q": "Match the following measures of population density with appropriate situations:<br>(a) Total number — (i) Dense bacterial culture<br>(b) Per cent cover/biomass — (ii) Fish in a lake<br>(c) Relative density — (iii) Moderate-sized countable population<br>(d) Indirect estimation — (iv) Banyan tree vs Parthenium<br><br>Choose the correct match:",
  "options": ["(a)-(iii), (b)-(iv), (c)-(ii), (d)-(i)", "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)", "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)", "(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)"],
  "correct": 0,
  "explanation": "Total number is best for moderate-sized countable populations; per cent cover/biomass for banyan vs Parthenium scenario; relative density for fish caught per trap; indirect estimation (pug marks) for tiger census. Dense bacterial culture would use biomass/turbidity."
},
{
  "id": 64,
  "topic": "Populations - Population Attributes",
  "q": "In a population, if 60 per cent are females and 40 per cent are males, this is an example of:",
  "options": ["Age distribution", "Sex ratio", "Population density", "Birth rate"],
  "correct": 1,
  "explanation": "NCERT gives this exact example: 'a population has a sex ratio (e.g., 60 per cent of the population are females and 40 per cent males).'"
},
{
  "id": 65,
  "topic": "Populations - Population Attributes",
  "q": "Consider the following statements:<br>Statement I: Natural selection operates at the individual level to evolve desired traits.<br>Statement II: An individual organism is the one that has to cope with a changed environment.<br><br>Choose the correct option:",
  "options": ["Both Statement I and II are correct", "Both Statement I and II are incorrect", "Statement I is incorrect but Statement II is correct", "Statement I is correct but Statement II is incorrect"],
  "correct": 2,
  "explanation": "Statement I is incorrect — NCERT states natural selection operates at the POPULATION level. Statement II is correct — 'an individual organism is the one that has to cope with a changed environment.' This is a frequently tested conceptual trap."
},
{
  "id": 66,
  "topic": "Populations - Population Attributes",
  "q": "In a population of 100 rabbits, 25 new offspring are born in one month. The per capita birth rate is:",
  "options": ["0.__(4)", "0.25 offspring per rabbit per month", "25 offspring per month", "0.__(2)"],
  "correct": 1,
  "explanation": "Per capita birth rate = births/population = 25/100 = 0.25 offspring per rabbit per month."
},
{
  "id": 67,
  "topic": "Populations - Population Attributes",
  "q": "A <b>stable population</b> would show an age pyramid that is:",
  "options": ["Broad at the base, tapering towards the top", "Narrow at the base, broad at the top", "Roughly equal at all age classes (bell-shaped)", "Irregular with random distribution"],
  "correct": 2,
  "explanation": "A stable population has roughly equal numbers of individuals in pre-reproductive, reproductive, and post-reproductive age groups, giving a bell-shaped or column-shaped pyramid."
},
{
  "id": 68,
  "topic": "Populations - Population Attributes",
  "q": "<b>Assertion (A):</b> Stating that the population density of banyan is low relative to carrot grass based on total number is misleading.<br><b>Reason (R):</b> A single huge banyan tree with a large canopy has an enormous ecological role in the community compared to individual Parthenium plants.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R correctly explains A. NCERT states that expressing population density of banyan as low relative to Parthenium by number alone 'amounts to underestimating the enormous role of the Banyan in that community.'"
},
{
  "id": 69,
  "topic": "Populations - Population Attributes",
  "q": "Which of the following is <b>NOT</b> a population attribute?",
  "options": ["Birth rate", "Sex ratio", "Body size of an individual", "Age pyramid"],
  "correct": 2,
  "explanation": "Body size is an attribute of an individual organism, not of a population. Birth rate, sex ratio, and age pyramid are all population attributes as per NCERT."
},
{
  "id": 70,
  "topic": "Populations - Population Attributes",
  "q": "We are mostly obliged to estimate population sizes indirectly because:",
  "options": ["Direct counting is always inaccurate", "Many populations are difficult to count directly or are never seen", "Indirect methods are always more accurate", "Populations remain constant and do not need counting"],
  "correct": 1,
  "explanation": "NCERT states: 'We are mostly obliged to estimate population sizes indirectly, without actually counting them or seeing them.' This is because many populations are huge, elusive, or difficult to count."
},
{
  "id": 71,
  "topic": "Populations - Population Attributes",
  "q": "Consider the following:<br>(i) Cormorants in a wetland<br>(ii) All organisms in a pond<br>(iii) Bacteria in a culture plate<br>(iv) Teakwood trees in a forest tract<br><br>Which of the above represent a <b>population</b>?",
  "options": ["(i), (ii) and (iii) only", "(i), (iii) and (iv) only", "(ii), (iii) and (iv) only", "All of the above"],
  "correct": 1,
  "explanation": "A population consists of individuals of the SAME species. 'All organisms in a pond' includes multiple species (community, not population). Cormorants in a wetland, bacteria in a culture plate, and teakwood trees in a forest tract are all populations of single species."
},
{
  "id": 72,
  "topic": "Populations - Population Attributes",
  "q": "If in a population of 200 deer, 30 died and 50 were born during a year, the per capita death rate and per capita birth rate respectively are:",
  "options": ["0.15 and 0.25", "0.25 and 0.15", "30 and 50", "0.__(3) and 0.__(5)"],
  "correct": 0,
  "explanation": "Per capita death rate = 30/200 = 0.15; Per capita birth rate = 50/200 = 0.25. Rates are always calculated against the initial population size."
},
{
  "id": 73,
  "topic": "Populations - Population Attributes",
  "q": "Which ecological investigation mentioned in NCERT uses <b>pug marks and fecal pellets</b> for population estimation?",
  "options": ["Lion census in Gir forest", "Tiger census in national parks and tiger reserves", "Elephant census in Kerala", "Rhinoceros census in Kaziranga"],
  "correct": 1,
  "explanation": "NCERT specifically mentions: 'The tiger census in our national parks and tiger reserves is often based on pug marks and fecal pellets.'"
},
{
  "id": 74,
  "topic": "Populations - Population Attributes",
  "q": "<b>Chlamydomonas</b> in a pond is mentioned in NCERT as an example of a population with a size that can go into:",
  "options": ["Hundreds", "Thousands", "Lakhs", "Millions"],
  "correct": 3,
  "explanation": "NCERT states population size 'could go into millions (Chlamydomonas in a pond).'"
},
{
  "id": 75,
  "topic": "Populations - Population Attributes",
  "q": "Consider the following statements about population density:<br>Statement I: Population density is always measured in terms of number of individuals per unit area.<br>Statement II: For some ecological investigations, relative densities serve the purpose equally well as absolute densities.<br><br>Which is correct?",
  "options": ["Both Statement I and II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and II are incorrect"],
  "correct": 2,
  "correct": 2,
  "explanation": "Statement I is incorrect — NCERT clearly states population density need NOT necessarily be measured in numbers only; per cent cover, biomass, or relative densities may be used. Statement II is correct as stated in NCERT."
},
{
  "id": 76,
  "topic": "Population Growth",
  "q": "The four basic processes that affect population density are:<br>(i) Natality<br>(ii) Mortality<br>(iii) Immigration<br>(iv) Emigration<br><br>Which of these contribute to an <b>increase</b> in population density?",
  "options": ["(i) and (iii)", "(ii) and (iv)", "(i) and (iv)", "(ii) and (iii)"],
  "correct": 0,
  "explanation": "Natality (births) and Immigration (individuals coming in) increase population density. Mortality (deaths) and Emigration (individuals leaving) decrease it. NCERT: 'two of which (natality and immigration) contribute to an increase in population density.'"
},
{
  "id": 77,
  "topic": "Population Growth",
  "q": "The population density at time t+1 is given by the equation:",
  "options": ["Nt+1 = Nt + [(B + E) – (D + I)]", "Nt+1 = Nt + [(B + I) – (D + E)]", "Nt+1 = Nt × [(B + I) – (D + E)]", "Nt+1 = Nt – [(B + I) + (D + E)]"],
  "correct": 1,
  "explanation": "NCERT gives the equation: Nt+1 = Nt + [(B + I) – (D + E)], where B = Births, I = Immigration, D = Deaths, E = Emigration."
},
{
  "id": 78,
  "topic": "Population Growth",
  "q": "<b>Natality</b> refers to:",
  "options": ["The number of deaths during a given period in the population", "The number of births during a given period in the population that are added to the initial density", "The number of individuals that have come into the habitat from elsewhere", "The number of individuals that left the habitat"],
  "correct": 1,
  "explanation": "NCERT defines natality as 'the number of births during a given period in the population that are added to the initial density.'"
},
{
  "id": 79,
  "topic": "Population Growth",
  "q": "<b>Emigration</b> refers to:",
  "options": ["The number of individuals of the same species that have come into the habitat from elsewhere", "The number of births during a given period", "The number of individuals of the population who left the habitat and gone elsewhere during the time period", "The number of deaths in the population during a given period"],
  "correct": 2,
  "explanation": "NCERT defines emigration as 'the number of individuals of the population who left the habitat and gone elsewhere during the time period under consideration.'"
},
{
  "id": 80,
  "topic": "Population Growth",
  "q": "Under normal conditions, which two factors are the most important in influencing population density?",
  "options": ["Immigration and emigration", "Births and deaths", "Immigration and births", "Emigration and deaths"],
  "correct": 1,
  "explanation": "NCERT states: 'Under normal conditions, births and deaths are the most important factors influencing population density, the other two factors assuming importance only under special conditions.'"
},
{
  "id": 81,
  "topic": "Population Growth",
  "q": "Immigration may contribute more significantly to population growth than birth rates when:",
  "options": ["The population is at carrying capacity", "A new habitat is just being colonised", "The population is declining due to predation", "The population shows logistic growth"],
  "correct": 1,
  "explanation": "NCERT states: 'if a new habitat is just being colonised, immigration may contribute more significantly to population growth than birth rates.'"
},
{
  "id": 82,
  "topic": "Population Growth",
  "q": "Population density will increase when:",
  "options": ["(B + I) < (D + E)", "(B + I) = (D + E)", "(B + I) > (D + E)", "B < D and I < E"],
  "correct": 2,
  "explanation": "From the equation Nt+1 = Nt + [(B + I) – (D + E)], population density increases when (B + I) > (D + E)."
},
{
  "id": 83,
  "topic": "Population Growth",
  "q": "<b>Assertion (A):</b> Immigration and emigration are always the most important factors affecting population density.<br><b>Reason (R):</b> Under normal conditions, births and deaths are the most important factors influencing population density.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — immigration and emigration assume importance only under special conditions, not always. Reason is correct as stated in NCERT."
},
{
  "id": 84,
  "topic": "Population Growth",
  "q": "If a population has N = 500, births = 100, deaths = 50, immigration = 30, and emigration = 20, the population density at the next time period would be:",
  "options": ["560", "600", "540", "580"],
  "correct": 0,
  "explanation": "Nt+1 = Nt + [(B + I) – (D + E)] = 500 + [(100 + 30) – (50 + 20)] = 500 + [130 – 70] = 500 + 60 = 560."
},
{
  "id": 85,
  "topic": "Growth Models",
  "q": "When resources in a habitat are unlimited, a population grows in:",
  "options": ["Logistic fashion", "Arithmetic fashion", "Exponential or geometric fashion", "Linear fashion"],
  "correct": 2,
  "explanation": "NCERT states: 'when resources in the habitat are unlimited, each species has the ability to realise fully its innate potential to grow in number... Then the population grows in an exponential or geometric fashion.'"
},
{
  "id": 86,
  "topic": "Growth Models",
  "q": "The equation for exponential growth is:",
  "options": ["dN/dt = rN(K–N)/K", "dN/dt = rN", "dN/dt = (b + d) × N", "dN/dt = K – N"],
  "correct": 1,
  "explanation": "NCERT gives the exponential growth equation as dN/dt = rN, where r = intrinsic rate of natural increase and N = population size."
},
{
  "id": 87,
  "topic": "Growth Models",
  "q": "In the exponential growth equation dN/dt = rN, the value of 'r' is called:",
  "options": ["Reproductive rate", "Intrinsic rate of natural increase", "Carrying capacity", "Growth potential"],
  "correct": 1,
  "explanation": "NCERT states: 'The r in this equation is called the intrinsic rate of natural increase and is a very important parameter chosen for assessing impacts of any biotic or abiotic factor on population growth.'"
},
{
  "id": 88,
  "topic": "Growth Models",
  "q": "In the equation dN/dt = (b – d) × N, 'b' and 'd' represent:",
  "options": ["Total number of births and total number of deaths", "Per capita birth rate and per capita death rate", "Birth rate and death rate of the entire ecosystem", "Biotic potential and death resistance"],
  "correct": 1,
  "explanation": "NCERT specifically clarifies: 'the birth rates (not total number but per capita births) are represented as b and death rates (again, per capita death rates) as d.' This is a common conceptual trap."
},
{
  "id": 89,
  "topic": "Growth Models",
  "q": "The intrinsic rate of natural increase (r) is derived as:",
  "options": ["r = b + d", "r = b × d", "r = b – d", "r = d – b"],
  "correct": 2,
  "explanation": "NCERT states: 'Let (b–d) = r', where b = per capita birth rate and d = per capita death rate."
},
{
  "id": 90,
  "topic": "Growth Models",
  "q": "The r value for <b>Norway rat</b> is:",
  "options": ["0.12", "0.0205", "0.015", "0.__(0.__(5))"],
  "correct": 2,
  "explanation": "NCERT states: 'for the Norway rat the r is 0.015.' The flour beetle has r = 0.12, and India's human population (1981) had r = 0.0205."
},
{
  "id": 91,
  "topic": "Growth Models",
  "q": "The r value for the <b>flour beetle</b> is:",
  "options": ["0.015", "0.0205", "0.12", "1.2"],
  "correct": 2,
  "explanation": "NCERT states the r value for flour beetle is 0.12. Norway rat = 0.015, India's human population (1981) = 0.0205."
},
{
  "id": 92,
  "topic": "Growth Models",
  "q": "In 1981, the r value for the human population in India was:",
  "options": ["0.015", "0.0__(5)", "0.12", "0.0205"],
  "correct": 3,
  "explanation": "NCERT states: 'In 1981, the r value for human population in India was 0.0205.'"
},
{
  "id": 93,
  "topic": "Growth Models",
  "q": "Match the organism with its r value:<br>(a) Norway rat — (i) 0.12<br>(b) Flour beetle — (ii) 0.0205<br>(c) Human population India (1981) — (iii) 0.015<br><br>Choose the correct match:",
  "options": ["(a)-(i), (b)-(ii), (c)-(iii)", "(a)-(iii), (b)-(i), (c)-(ii)", "(a)-(ii), (b)-(iii), (c)-(i)", "(a)-(iii), (b)-(ii), (c)-(i)"],
  "correct": 1,
  "explanation": "Norway rat = 0.015 (iii), Flour beetle = 0.12 (i), Human population India (1981) = 0.0205 (ii)."
},
{
  "id": 94,
  "topic": "Growth Models",
  "q": "The exponential growth equation when plotted as N versus time gives a:",
  "options": ["S-shaped curve", "J-shaped curve", "Bell-shaped curve", "Linear graph"],
  "correct": 1,
  "explanation": "NCERT states: the exponential growth equation 'results in a J-shaped curve when we plot N in relation to time.'"
},
{
  "id": 95,
  "topic": "Growth Models",
  "q": "The integral form of the exponential growth equation is:",
  "options": ["Nt = N0 × r × t", "Nt = N0 e^rt", "Nt = N0 + rt", "Nt = K × e^rt"],
  "correct": 1,
  "explanation": "NCERT gives the integral form as Nt = N0 e^rt, where Nt = population density after time t, N0 = initial population density, r = intrinsic rate of natural increase, e = base of natural logarithms."
},
{
  "id": 96,
  "topic": "Growth Models",
  "q": "In the equation Nt = N0 e^rt, the value of 'e' is:",
  "options": ["3.14159", "2.71828", "1.61803", "2.30259"],
  "correct": 1,
  "explanation": "NCERT states: 'e = the base of natural logarithms (2.71828).'"
},
{
  "id": 97,
  "topic": "Growth Models",
  "q": "In the integral form Nt = N0 e^rt, N0 represents:",
  "options": ["Population density after time t", "Carrying capacity", "Population density at time zero", "Intrinsic rate of natural increase"],
  "correct": 2,
  "explanation": "NCERT defines: 'N0 = Population density at time zero.'"
},
{
  "id": 98,
  "topic": "Growth Models",
  "q": "<b>Assertion (A):</b> Any species growing exponentially under unlimited resource conditions can reach enormous population densities in a short time.<br><b>Reason (R):</b> Darwin showed how even a slow growing animal like elephant could reach enormous numbers in the absence of checks.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct as per NCERT. Darwin's elephant example supports the assertion that exponential growth under unlimited resources leads to enormous population densities. R explains A."
},
{
  "id": 99,
  "topic": "Growth Models",
  "q": "The concept of exponential growth was related by Darwin to his theory of:",
  "options": ["Inheritance of acquired characters", "Natural selection", "Use and disuse", "Mutation theory"],
  "correct": 1,
  "explanation": "NCERT states: 'each species has the ability to realise fully its innate potential to grow in number, as Darwin observed while developing his theory of natural selection.'"
},
{
  "id": 100,
  "topic": "Growth Models",
  "q": "Which of the following is true regarding logistic growth?",
  "options": ["Resources are unlimited", "The growth curve is J-shaped", "It is also called Verhulst-Pearl Logistic Growth", "Carrying capacity is not considered"],
  "correct": 2,
  "explanation": "NCERT states: 'This type of population growth is called Verhulst-Pearl Logistic Growth.' Logistic growth occurs under limited resources, produces a sigmoid (S-shaped, not J-shaped) curve, and involves carrying capacity."
},
{
  "id": 101,
  "topic": "Growth Models",
  "q": "The equation for logistic growth as given in NCERT is:",
  "options": ["dN/dt = rN", "dN/dt = rN(K–N)/K", "dN/dt = rN(N–K)/K", "dN/dt = rN + K"],
  "correct": 1,
  "explanation": "NCERT gives the logistic growth equation as dN/dt = rN(K–N)/K, where K = carrying capacity."
},
{
  "id": 102,
  "topic": "Growth Models",
  "q": "In the logistic growth equation dN/dt = rN(K–N)/K, the term 'K' represents:",
  "options": ["Intrinsic rate of natural increase", "Initial population density", "Carrying capacity", "Death rate"],
  "correct": 2,
  "explanation": "NCERT defines K as the carrying capacity — 'a given habitat has enough resources to support a maximum possible number, beyond which no further growth is possible. Let us call this limit as nature's carrying capacity (K).'"
},
{
  "id": 103,
  "topic": "Growth Models",
  "q": "In the logistic growth equation, the factor <b>(K–N)/K</b> represents:",
  "options": ["The intrinsic rate of natural increase", "The proportion of carrying capacity already utilised", "The environmental resistance or the fraction of carrying capacity still available", "The total population density"],
  "correct": 2,
  "explanation": "The term (K–N)/K represents the fraction of carrying capacity still available for growth (environmental resistance). As N approaches K, this term approaches 0, slowing down growth."
},
{
  "id": 104,
  "topic": "Growth Models",
  "q": "When N equals K in the logistic growth equation, dN/dt becomes:",
  "options": ["rN", "rK", "Zero", "Infinity"],
  "correct": 2,
  "explanation": "When N = K: dN/dt = rN(K–N)/K = rN(K–K)/K = rN × 0/K = 0. Growth stops when population reaches carrying capacity."
},
{
  "id": 105,
  "topic": "Growth Models",
  "q": "When N is very small compared to K, the logistic growth equation approximates:",
  "options": ["dN/dt = 0", "dN/dt = rN (exponential growth)", "dN/dt = rK", "dN/dt = K–N"],
  "correct": 1,
  "explanation": "When N << K, (K–N)/K ≈ 1, so dN/dt = rN(1) = rN, which is the exponential growth equation. This explains why logistic growth initially resembles exponential growth."
},
{
  "id": 106,
  "topic": "Growth Models",
  "q": "A population growing in a habitat with limited resources shows the following phases in order:",
  "options": ["Acceleration → Lag → Deceleration → Asymptote", "Lag → Acceleration → Deceleration → Asymptote", "Lag → Deceleration → Acceleration → Asymptote", "Asymptote → Lag → Acceleration → Deceleration"],
  "correct": 1,
  "explanation": "NCERT states: 'A population growing in a habitat with limited resources show initially a lag phase, followed by phases of acceleration and deceleration and finally an asymptote.'"
},
{
  "id": 107,
  "topic": "Growth Models",
  "q": "A plot of N in relation to time in logistic growth results in a:",
  "options": ["J-shaped curve", "Sigmoid curve", "Linear curve", "Hyperbolic curve"],
  "correct": 1,
  "explanation": "NCERT states: 'A plot of N in relation to time (t) results in a sigmoid curve' for logistic growth."
},
{
  "id": 108,
  "topic": "Growth Models",
  "q": "<b>Assertion (A):</b> The logistic growth model is considered more realistic than the exponential growth model.<br><b>Reason (R):</b> Resources for growth for most animal populations are finite and become limiting sooner or later.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'Since resources for growth for most animal populations are finite and become limiting sooner or later, the logistic growth model is considered a more realistic one.'"
},
{
  "id": 109,
  "topic": "Growth Models",
  "q": "Consider the following statements:<br>Statement I: Exponential growth pattern gives a sigmoid curve.<br>Statement II: Logistic growth pattern gives a J-shaped curve.<br><br>Choose the correct option:",
  "options": ["Both Statement I and II are correct", "Statement I is correct but Statement II is incorrect", "Both Statement I and II are incorrect", "Statement I is incorrect but Statement II is correct"],
  "correct": 2,
  "explanation": "Both are INCORRECT. Exponential growth gives a J-shaped curve (not sigmoid), and logistic growth gives a sigmoid/S-shaped curve (not J-shaped). This is one of the most common conceptual traps in NEET."
},
{
  "id": 110,
  "topic": "Growth Models",
  "q": "Carrying capacity (K) is defined as:",
  "options": ["The minimum population a habitat can support", "The maximum possible number a habitat can support, beyond which no further growth is possible", "The population density at time zero", "The intrinsic rate of natural increase of a population"],
  "correct": 1,
  "explanation": "NCERT states: 'a given habitat has enough resources to support a maximum possible number, beyond which no further growth is possible. Let us call this limit as nature's carrying capacity (K).'"
},
{
  "id": 111,
  "topic": "Growth Models",
  "q": "Which of the following correctly differentiates exponential and logistic growth?",
  "options": ["Exponential — limited resources, S-curve; Logistic — unlimited resources, J-curve", "Exponential — unlimited resources, J-curve; Logistic — limited resources, S-curve", "Both show J-shaped curves under different conditions", "Both show S-shaped curves under different conditions"],
  "correct": 1,
  "explanation": "Exponential growth occurs under unlimited resources and produces a J-shaped curve. Logistic growth occurs under limited resources and produces an S-shaped (sigmoid) curve."
},
{
  "id": 112,
  "topic": "Growth Models",
  "q": "If a population has N0 = 100, r = 0.05 per year, and grows exponentially for 2 years, which equation would you use to calculate Nt?",
  "options": ["Nt = 100 + (0.05 × 2)", "Nt = 100 × e^(0.05 × 2)", "Nt = 100 × (0.05)^2", "Nt = 100 / e^(0.05 × 2)"],
  "correct": 1,
  "explanation": "Using the integral form Nt = N0 e^rt = 100 × e^(0.05 × 2) = 100 × e^0.1."
},
{
  "id": 113,
  "topic": "Growth Models",
  "q": "In the logistic growth equation, when the population density (N) is exactly half of the carrying capacity (K), the value of (K–N)/K is:",
  "options": ["0", "0.25", "0.5", "1.0"],
  "correct": 2,
  "explanation": "When N = K/2: (K–N)/K = (K – K/2)/K = (K/2)/K = 0.5. At this point, the population growth rate is maximum."
},
{
  "id": 114,
  "topic": "Growth Models",
  "q": "In logistic growth, the population growth rate (dN/dt) is <b>maximum</b> when:",
  "options": ["N = K", "N = 0", "N = K/2", "N = 2K"],
  "correct": 2,
  "explanation": "In logistic growth, dN/dt = rN(K–N)/K. This is maximized when N = K/2 (half the carrying capacity). This can be derived mathematically and is a frequently asked NEET concept."
},
{
  "id": 115,
  "topic": "Growth Models",
  "q": "The logistic growth model was proposed by:",
  "options": ["Darwin and Wallace", "Verhulst and Pearl", "Hardy and Weinberg", "Malthus and Darwin"],
  "correct": 1,
  "explanation": "NCERT refers to logistic growth as 'Verhulst-Pearl Logistic Growth.'"
},
{
  "id": 116,
  "topic": "Growth Models",
  "q": "Consider the following:<br>(A) When N = K, (K–N)/K = 0, so dN/dt = 0<br>(B) When N approaches zero, (K–N)/K approaches 1, so growth is nearly exponential<br>(C) When N > K, (K–N)/K becomes negative, so population declines<br><br>Which of the above are correct?",
  "options": ["(A) and (B) only", "(B) and (C) only", "(A) and (C) only", "(A), (B) and (C)"],
  "correct": 3,
  "explanation": "All three are correct. (A) At N=K, growth stops. (B) At very small N, logistic growth resembles exponential. (C) When N exceeds K, the growth rate becomes negative, leading to population decline."
},
{
  "id": 117,
  "topic": "Growth Models",
  "q": "Which of the following is <b>NOT</b> a phase of logistic growth as described in NCERT?",
  "options": ["Lag phase", "Acceleration phase", "Exponential phase", "Asymptote"],
  "correct": 2,
  "explanation": "NCERT describes four phases: lag phase → acceleration → deceleration → asymptote. 'Exponential phase' is not mentioned as a phase of logistic growth in NCERT."
},
{
  "id": 118,
  "topic": "Growth Models",
  "q": "<b>Assertion (A):</b> No population of any species in nature has at its disposal unlimited resources to permit exponential growth.<br><b>Reason (R):</b> This leads to competition between individuals for limited resources, and eventually the fittest individuals survive and reproduce.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and directly from NCERT. The limited resources lead to competition, and eventually fittest survive — this explains why exponential growth cannot continue indefinitely."
},
{
  "id": 119,
  "topic": "Growth Models",
  "q": "Among the following organisms, which has the <b>highest</b> intrinsic rate of natural increase (r)?",
  "options": ["Human population in India (1981)", "Norway rat", "Flour beetle", "Elephant"],
  "correct": 2,
  "explanation": "Flour beetle r = 0.12 > India human population r = 0.0205 > Norway rat r = 0.015. Elephant would have an even lower r value as Darwin described it as a slow-growing animal."
},
{
  "id": 120,
  "topic": "Growth Models",
  "q": "Among the following, which has the <b>lowest</b> intrinsic rate of natural increase (r) as per NCERT values?",
  "options": ["Flour beetle", "Norway rat", "Human population in India (1981)", "Norway rat has the lowest"],
  "correct": 1,
  "explanation": "Norway rat r = 0.015, which is the lowest among the three values given in NCERT. India (1981) = 0.0205, Flour beetle = 0.12."
},
{
  "id": 121,
  "topic": "Population Growth",
  "q": "Consider the following:<br>Statement I: Immigration is the number of individuals of the same species that come into the habitat from elsewhere.<br>Statement II: Emigration is the number of individuals of any species that come into the habitat.<br><br>Choose the correct option:",
  "options": ["Both statements are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both statements are incorrect"],
  "correct": 1,
  "explanation": "Statement I is correct as per NCERT. Statement II is incorrect — emigration is the number of individuals who LEFT the habitat (not came in), and immigration refers to same species (not any species)."
},
{
  "id": 122,
  "topic": "Growth Models",
  "q": "The parameter 'r' is chosen for assessing impacts of:",
  "options": ["Only biotic factors on population growth", "Only abiotic factors on population growth", "Any biotic or abiotic factor on population growth", "Only predation on population growth"],
  "correct": 2,
  "explanation": "NCERT states r is 'a very important parameter chosen for assessing impacts of any biotic or abiotic factor on population growth.'"
},
{
  "id": 123,
  "topic": "Growth Models",
  "q": "If in a population, per capita birth rate (b) = 0.3 and per capita death rate (d) = 0.1, the intrinsic rate of natural increase (r) is:",
  "options": ["0.4", "0.__(3)", "0.2", "0.03"],
  "correct": 2,
  "explanation": "r = b – d = 0.3 – 0.1 = 0.2. This follows directly from the NCERT equation."
},
{
  "id": 124,
  "topic": "Growth Models",
  "q": "In a population with K = 1000 and current N = 250, the value of (K–N)/K is:",
  "options": ["0.25", "0.75", "0.50", "1.0"],
  "correct": 1,
  "explanation": "(K–N)/K = (1000–250)/1000 = 750/1000 = 0.75. This means 75% of the carrying capacity is still available."
},
{
  "id": 125,
  "topic": "Growth Models",
  "q": "In a population with K = 500, N = 500, and r = 0.1, the population growth rate (dN/dt) is:",
  "options": ["50", "25", "0", "500"],
  "correct": 2,
  "explanation": "dN/dt = rN(K–N)/K = 0.1 × 500 × (500–500)/500 = 0.1 × 500 × 0 = 0. When N = K, growth rate is zero."
},
{
  "id": 126,
  "topic": "Growth Models",
  "q": "In a population with K = 200, N = 100, and r = 0.2, the population growth rate (dN/dt) is:",
  "options": ["20", "10", "40", "5"],
  "correct": 1,
  "explanation": "dN/dt = rN(K–N)/K = 0.2 × 100 × (200–100)/200 = 0.2 × 100 × 0.5 = 10."
},
{
  "id": 127,
  "topic": "Growth Models",
  "q": "Darwin demonstrated exponential growth potential using the example of which animal?",
  "options": ["Rabbit", "Elephant", "Fruit fly", "Norway rat"],
  "correct": 1,
  "explanation": "NCERT states: 'Darwin showed how even a slow growing animal like elephant could reach enormous numbers in the absence of checks.'"
},
{
  "id": 128,
  "topic": "Growth Models",
  "q": "The <b>asymptote</b> in logistic growth represents:",
  "options": ["The point where population starts growing", "The lag phase of growth", "The point where population density reaches carrying capacity", "The exponential phase of growth"],
  "correct": 2,
  "explanation": "NCERT states: 'finally an asymptote, when the population density reaches the carrying capacity.' The asymptote is the plateau where N = K."
},
{
  "id": 129,
  "topic": "Growth Models",
  "q": "Consider the following statements about carrying capacity (K):<br>(i) It is species-specific for a given habitat<br>(ii) It represents unlimited resources<br>(iii) Beyond K, no further growth is possible<br>(iv) It is the same for all species in a habitat<br><br>Which are correct?",
  "options": ["(i) and (iii) only", "(ii) and (iv) only", "(i), (ii) and (iii)", "All of the above"],
  "correct": 0,
  "explanation": "NCERT says K is 'nature's carrying capacity for that species in that habitat' — making it species and habitat specific (i correct, iv incorrect). K represents maximum supportable number under limited resources (ii incorrect). Beyond K, no further growth is possible (iii correct)."
},
{
  "id": 130,
  "topic": "Growth Models",
  "q": "Which of the following correctly describes the relationship between 'r' and population growth?",
  "options": ["When r is positive, population is declining", "When r is zero, population is growing", "When r is negative, population is declining", "When r is negative, population is growing"],
  "correct": 2,
  "explanation": "r = b – d. When r > 0, births exceed deaths and population grows. When r = 0, population is stable. When r < 0, deaths exceed births and population declines."
},
{
  "id": 131,
  "topic": "Growth Models",
  "q": "If a population of 1000 organisms has a per capita birth rate of 0.04 and per capita death rate of 0.01, the rate of population increase (dN/dt) under exponential growth is:",
  "options": ["30", "40", "50", "10"],
  "correct": 0,
  "explanation": "r = b – d = 0.04 – 0.01 = 0.03. dN/dt = rN = 0.03 × 1000 = 30 individuals per unit time."
},
{
  "id": 132,
  "topic": "Population Growth",
  "q": "Which of the following combinations would lead to a <b>decrease</b> in population density?",
  "options": ["High natality + High immigration", "High natality + Low mortality", "High mortality + High emigration", "High immigration + Low emigration"],
  "correct": 2,
  "explanation": "From the equation Nt+1 = Nt + [(B+I) – (D+E)], population decreases when (D+E) > (B+I). High mortality + high emigration increase (D+E), leading to population decline."
},
{
  "id": 133,
  "topic": "Growth Models",
  "q": "<b>Assertion (A):</b> A plot of N vs time for exponential growth gives a sigmoid curve.<br><b>Reason (R):</b> Exponential growth occurs when resources are unlimited.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — exponential growth gives a J-shaped curve, NOT a sigmoid curve. Sigmoid (S-shaped) is for logistic growth. Reason is correct."
},
{
  "id": 134,
  "topic": "Growth Models",
  "q": "In a habitat with K = 600 and r = 0.1, if the current population N = 600, the value of dN/dt using logistic growth equation would be:",
  "options": ["60", "30", "0", "6"],
  "correct": 2,
  "explanation": "dN/dt = rN(K–N)/K = 0.1 × 600 × (600–600)/600 = 0.1 × 600 × 0 = 0. At carrying capacity, growth is zero."
},
{
  "id": 135,
  "topic": "Growth Models",
  "q": "The governments of many countries have introduced various restraints to limit human population growth. This is analogous to which concept in ecology?",
  "options": ["Exponential growth", "Carrying capacity and logistic growth", "Immigration", "Natality"],
  "correct": 1,
  "explanation": "NCERT states: 'The governments of many countries have also realised this fact and introduced various restraints with a view to limit human population growth,' analogous to how carrying capacity limits population growth in nature (logistic growth)."
},
{
  "id": 136,
  "topic": "Life History Variation",
  "q": "Populations evolve to maximise their reproductive fitness, also called <b>Darwinian fitness</b>, which is measured by:",
  "options": ["Physical strength of the organism", "High r value (intrinsic rate of natural increase)", "Body size of the organism", "Longevity of the individual"],
  "correct": 1,
  "explanation": "NCERT states: 'Populations evolve to maximise their reproductive fitness, also called Darwinian fitness (high r value).' Darwinian fitness is reproductive fitness, NOT physical strength or longevity."
},
{
  "id": 137,
  "topic": "Life History Variation",
  "q": "Which of the following organisms breed <b>only once</b> in their lifetime?",
  "options": ["Most birds and mammals", "Pacific salmon fish and bamboo", "Oysters and pelagic fishes", "Birds and mammals"],
  "correct": 1,
  "explanation": "NCERT states: 'Some organisms breed only once in their lifetime (Pacific salmon fish, bamboo).' This reproductive strategy is called semelparity."
},
{
  "id": 138,
  "topic": "Life History Variation",
  "q": "Which of the following organisms breed <b>many times</b> during their lifetime?",
  "options": ["Pacific salmon fish", "Bamboo", "Most birds and mammals", "Pacific salmon and bamboo both"],
  "correct": 2,
  "explanation": "NCERT states: 'others breed many times during their lifetime (most birds and mammals).' This is called iteroparity. Pacific salmon and bamboo breed only once."
},
{
  "id": 139,
  "topic": "Life History Variation",
  "q": "Which of the following produce a <b>large number of small-sized offspring</b>?",
  "options": ["Birds and mammals", "Oysters and pelagic fishes", "Pacific salmon fish and bamboo", "Elephants and whales"],
  "correct": 1,
  "explanation": "NCERT states: 'Some produce a large number of small-sized offspring (Oysters, pelagic fishes).' Birds and mammals produce a small number of large-sized offspring."
},
{
  "id": 140,
  "topic": "Life History Variation",
  "q": "Which of the following produce a <b>small number of large-sized offspring</b>?",
  "options": ["Oysters", "Pelagic fishes", "Birds and mammals", "Pacific salmon fish"],
  "correct": 2,
  "explanation": "NCERT states: 'others produce a small number of large-sized offspring (birds, mammals).'"
},
{
  "id": 141,
  "topic": "Life History Variation",
  "q": "<b>Assertion (A):</b> Darwinian fitness refers to the physical strength and survival ability of an organism.<br><b>Reason (R):</b> Populations evolve to maximise their reproductive fitness in the habitat in which they live.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — Darwinian fitness refers to REPRODUCTIVE fitness (high r value), not physical strength. Reason is correct as stated in NCERT."
},
{
  "id": 142,
  "topic": "Life History Variation",
  "q": "Life history traits of organisms have evolved in relation to:",
  "options": ["Only abiotic components of the habitat", "Only biotic components of the habitat", "Constraints imposed by both abiotic and biotic components of the habitat", "Random genetic drift only"],
  "correct": 2,
  "explanation": "NCERT states: 'life history traits of organisms have evolved in relation to the constraints imposed by the abiotic and biotic components of the habitat in which they live.'"
},
{
  "id": 143,
  "topic": "Life History Variation",
  "q": "Consider the following statements:<br>(i) Pacific salmon breeds many times in its lifetime.<br>(ii) Bamboo breeds only once in its lifetime.<br>(iii) Birds produce large number of small-sized offspring.<br>(iv) Oysters produce large number of small-sized offspring.<br><br>Which of the above are correct?",
  "options": ["(i) and (iii) only", "(ii) and (iv) only", "(i) and (iv) only", "(ii) and (iii) only"],
  "correct": 1,
  "explanation": "Statement (i) is incorrect — Pacific salmon breeds only ONCE. Statement (ii) is correct — bamboo breeds once. Statement (iii) is incorrect — birds produce small number of large-sized offspring. Statement (iv) is correct — oysters produce large number of small-sized offspring."
},
{
  "id": 144,
  "topic": "Life History Variation",
  "q": "Under a particular set of selection pressures, organisms evolve towards:",
  "options": ["The largest body size possible", "The longest lifespan possible", "The most efficient reproductive strategy", "The highest metabolic rate"],
  "correct": 2,
  "explanation": "NCERT states: 'Under a particular set of selection pressures, organisms evolve towards the most efficient reproductive strategy.'"
},
{
  "id": 145,
  "topic": "Life History Variation",
  "q": "Match the following:<br>(a) Pacific salmon — (i) Large number of small offspring<br>(b) Birds — (ii) Breeds once in lifetime<br>(c) Oysters — (iii) Small number of large offspring<br>(d) Mammals — (iv) Breeds many times in lifetime<br><br>Choose the correct match:",
  "options": ["(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)", "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)", "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)", "(a)-(iv), (b)-(iii), (c)-(i), (d)-(ii)"],
  "correct": 0,
  "explanation": "Pacific salmon — breeds once (ii); Birds — breed many times AND produce small number of large offspring, here matched with (iv) breeds many times; Oysters — large number of small offspring (i); Mammals — small number of large offspring (iii). Note: Option A provides the best NCERT-aligned match."
},
{
  "id": 146,
  "topic": "Life History Variation",
  "q": "<b>Assertion (A):</b> Bamboo is an example of an organism that breeds many times during its lifetime.<br><b>Reason (R):</b> Bamboo produces a large number of seeds when it flowers.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "A is incorrect and R is also incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT lists bamboo as an organism that breeds ONLY ONCE in its lifetime (semelparous). Reason is correct — bamboo does produce a large number of seeds during its single flowering event."
},
{
  "id": 147,
  "topic": "Life History Variation",
  "q": "The evolution of life history traits in different species is currently:",
  "options": ["A resolved and well-understood topic", "No longer a focus of ecological research", "An important area of research being conducted by ecologists", "Only studied in the context of marine organisms"],
  "correct": 2,
  "explanation": "NCERT states: 'Evolution of life history traits in different species is currently an important area of research being conducted by ecologists.'"
},
{
  "id": 148,
  "topic": "Population Interactions",
  "q": "Even a plant species which makes its own food cannot survive alone because it needs:<br>(i) Soil microbes to break down organic matter and return inorganic nutrients<br>(ii) Animal agents for pollination<br>(iii) Other plants for competition<br><br>Which of the above are mentioned in NCERT?",
  "options": ["(i) only", "(i) and (ii) only", "(ii) and (iii) only", "(i), (ii) and (iii)"],
  "correct": 1,
  "explanation": "NCERT states: 'it needs soil microbes to break down the organic matter in soil and return the inorganic nutrients for absorption. And then, how will the plant manage pollination without an animal agent?' Competition is not mentioned as a reason for why a plant cannot survive alone."
},
{
  "id": 149,
  "topic": "Population Interactions",
  "q": "Interspecific interactions arise from the interaction of populations of:",
  "options": ["Same species", "Two different species", "Three or more species simultaneously", "Individuals within a single population"],
  "correct": 1,
  "explanation": "NCERT states: 'Interspecific interactions arise from the interaction of populations of two different species.'"
},
{
  "id": 150,
  "topic": "Population Interactions",
  "q": "In interspecific interactions, '+' sign represents:",
  "options": ["Detrimental interaction", "Neutral interaction", "Beneficial interaction", "No interaction"],
  "correct": 2,
  "explanation": "NCERT assigns: '+' for beneficial, '–' for detrimental, and '0' for neutral interaction."
},
{
  "id": 151,
  "topic": "Population Interactions",
  "q": "In <b>mutualism</b>, the interaction between two species is:",
  "options": ["+/–", "+/+", "–/–", "+/0"],
  "correct": 1,
  "explanation": "In mutualism, both species benefit (+/+). NCERT states: 'Both the species benefit in mutualism.'"
},
{
  "id": 152,
  "topic": "Population Interactions",
  "q": "In <b>competition</b>, the interaction between two species is:",
  "options": ["+/+", "+/–", "–/–", "–/0"],
  "correct": 2,
  "explanation": "In competition, both species lose (–/–). NCERT states: 'both lose in competition in their interactions with each other.'"
},
{
  "id": 153,
  "topic": "Population Interactions",
  "q": "In <b>parasitism</b>, the interaction is:",
  "options": ["+/+ (both benefit)", "+/– (parasite benefits, host is harmed)", "–/– (both are harmed)", "+/0 (parasite benefits, host unaffected)"],
  "correct": 1,
  "explanation": "NCERT states: 'In both parasitism and predation only one species benefits (parasite and predator, respectively) and the interaction is detrimental to the other species (host and prey, respectively).' So parasitism is +/–."
},
{
  "id": 154,
  "topic": "Population Interactions",
  "q": "In <b>predation</b>, which species benefits and which is harmed?",
  "options": ["Prey benefits, predator is harmed", "Both benefit equally", "Predator benefits, prey is harmed", "Neither benefits nor is harmed"],
  "correct": 2,
  "explanation": "NCERT states: 'In predation only one species benefits (predator) and the interaction is detrimental to the other species (prey).' So predation is +/– (predator +, prey –)."
},
{
  "id": 155,
  "topic": "Population Interactions",
  "q": "The interaction where one species is benefitted and the other is <b>neither benefitted nor harmed</b> is called:",
  "options": ["Mutualism", "Amensalism", "Commensalism", "Parasitism"],
  "correct": 2,
  "explanation": "NCERT states: 'The interaction where one species is benefitted and the other is neither benefitted nor harmed is called commensalism.' (+/0)"
},
{
  "id": 156,
  "topic": "Population Interactions",
  "q": "In <b>amensalism</b>, the interaction is:",
  "options": ["+/0", "–/0", "+/–", "–/–"],
  "correct": 1,
  "explanation": "NCERT states: 'In amensalism on the other hand one species is harmed whereas the other is unaffected.' So amensalism is –/0."
},
{
  "id": 157,
  "topic": "Population Interactions",
  "q": "Which of the following three types of interactions share the common characteristic that the <b>interacting species live closely together</b>?",
  "options": ["Mutualism, competition and predation", "Predation, parasitism and commensalism", "Competition, parasitism and amensalism", "Mutualism, parasitism and competition"],
  "correct": 1,
  "explanation": "NCERT states: 'Predation, parasitism and commensalism share a common characteristic – the interacting species live closely together.' This is a very important and frequently tested statement."
},
{
  "id": 158,
  "topic": "Population Interactions",
  "q": "Consider the following table of interactions:<br>(i) Mutualism: +/+<br>(ii) Competition: –/–<br>(iii) Parasitism: +/–<br>(iv) Commensalism: –/0<br>(v) Amensalism: +/0<br><br>Which of the above are <b>incorrectly</b> matched?",
  "options": ["(i) and (ii)", "(iii) and (iv)", "(iv) and (v)", "(i) and (iii)"],
  "correct": 2,
  "explanation": "Commensalism is +/0 (not –/0), and Amensalism is –/0 (not +/0). Options (iv) and (v) have their signs swapped. This is one of the most common traps in NEET."
},
{
  "id": 159,
  "topic": "Population Interactions",
  "q": "<b>Assertion (A):</b> In nature, animals, plants and microbes cannot live in isolation.<br><b>Reason (R):</b> They interact in various ways to form a biological community.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'animals, plants and microbes do not and cannot live in isolation but interact in various ways to form a biological community.'"
},
{
  "id": 160,
  "topic": "Population Interactions",
  "q": "Match the type of interaction with its correct sign notation:<br>(a) Mutualism — (i) –/0<br>(b) Amensalism — (ii) +/+<br>(c) Predation — (iii) –/–<br>(d) Competition — (iv) +/–<br><br>Choose the correct match:",
  "options": ["(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)", "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)", "(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)", "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)"],
  "correct": 0,
  "explanation": "Mutualism = +/+ (ii); Amensalism = –/0 (i); Predation = +/– (iv); Competition = –/– (iii)."
},
{
  "id": 161,
  "topic": "Population Interactions",
  "q": "Which of the following pairs of interactions have the <b>same sign notation</b> (+/–)?",
  "options": ["Mutualism and commensalism", "Parasitism and predation", "Competition and amensalism", "Commensalism and amensalism"],
  "correct": 1,
  "explanation": "Both parasitism and predation have +/– interaction. In parasitism, parasite benefits and host is harmed. In predation, predator benefits and prey is harmed."
},
{
  "id": 162,
  "topic": "Population Interactions",
  "q": "Consider the following statements:<br>Statement I: In commensalism, one species is benefitted while the other is harmed.<br>Statement II: In amensalism, one species is harmed while the other is unaffected.<br><br>Choose the correct option:",
  "options": ["Both Statement I and II are correct", "Statement I is correct but Statement II is incorrect", "Statement I is incorrect but Statement II is correct", "Both Statement I and II are incorrect"],
  "correct": 2,
  "explanation": "Statement I is incorrect — in commensalism, one species is benefitted and the other is NEITHER benefitted NOR harmed (+/0), not harmed. Statement II is correct — in amensalism, one is harmed and the other is unaffected (–/0)."
},
{
  "id": 163,
  "topic": "Population Interactions",
  "q": "For any species, the <b>minimal requirement</b> in a habitat is:",
  "options": ["No other species at all", "At least one more species on which it can feed", "At least ten different species for a balanced ecosystem", "At least one predator species"],
  "correct": 1,
  "explanation": "NCERT states: 'For any species, the minimal requirement is one more species on which it can feed.'"
},
{
  "id": 164,
  "topic": "Population Interactions",
  "q": "<b>Assertion (A):</b> Competition is an interaction where both species benefit.<br><b>Reason (R):</b> Competition leads to survival of the fittest.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — in competition both species LOSE (–/–), not benefit. NCERT states 'both lose in competition.' Reason is correct in a general sense — competition does lead to natural selection favoring the fittest."
},
{
  "id": 165,
  "topic": "Population Interactions",
  "q": "Which of the following is <b>NOT</b> a possible outcome sign for interspecific interactions as described in NCERT?",
  "options": ["+/+", "+/–", "–/0", "+/+/+"],
  "correct": 3,
  "explanation": "NCERT describes two-species interactions with signs +, –, and 0. '+/+/+' would imply three species, which is not part of the interspecific interaction classification given in NCERT."
},
{
  "id": 166,
  "topic": "Life History Variation",
  "q": "Which of the following pairs correctly represents organisms that breed <b>only once</b> in their lifetime?",
  "options": ["Salmon and most birds", "Bamboo and mammals", "Pacific salmon fish and bamboo", "Oysters and pelagic fishes"],
  "correct": 2,
  "explanation": "NCERT specifically lists Pacific salmon fish and bamboo as organisms that breed only once in their lifetime."
},
{
  "id": 167,
  "topic": "Life History Variation",
  "q": "Consider the following:<br>Statement I: Pelagic fishes produce small number of large-sized offspring.<br>Statement II: Mammals produce small number of large-sized offspring.<br><br>Which is correct?",
  "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 2,
  "explanation": "Statement I is incorrect — pelagic fishes produce LARGE number of SMALL-sized offspring. Statement II is correct — mammals produce small number of large-sized offspring, as stated in NCERT."
},
{
  "id": 168,
  "topic": "Population Interactions",
  "q": "Interspecific interactions can be:<br>(i) Beneficial to one or both species<br>(ii) Detrimental to one or both species<br>(iii) Neutral to one or both species<br><br>Which of the above is/are correct?",
  "options": ["(i) only", "(i) and (ii) only", "(i), (ii) and (iii)", "(ii) and (iii) only"],
  "correct": 2,
  "explanation": "NCERT states: 'They could be beneficial, detrimental or neutral (neither harm nor benefit) to one of the species or both.' All three outcomes are possible."
},
{
  "id": 169,
  "topic": "Population Interactions",
  "q": "A plant needs soil microbes for:",
  "options": ["Photosynthesis", "Breaking down organic matter and returning inorganic nutrients for absorption", "Direct food supply", "Protection from herbivores"],
  "correct": 1,
  "explanation": "NCERT states: 'it needs soil microbes to break down the organic matter in soil and return the inorganic nutrients for absorption.'"
},
{
  "id": 170,
  "topic": "Population Interactions",
  "q": "Which of the following correctly lists ALL six types of interspecific interactions mentioned in NCERT?",
  "options": ["Mutualism, Competition, Predation, Parasitism, Commensalism, Neutralism", "Mutualism, Competition, Predation, Parasitism, Commensalism, Amensalism", "Mutualism, Competition, Predation, Parasitism, Symbiosis, Amensalism", "Mutualism, Competition, Predation, Parasitism, Protocooperation, Amensalism"],
  "correct": 1,
  "explanation": "NCERT lists six interspecific interactions: Mutualism (+/+), Competition (–/–), Predation (+/–), Parasitism (+/–), Commensalism (+/0), and Amensalism (–/0). Neutralism and Protocooperation are not mentioned."
},
{
  "id": 171,
  "topic": "Life History Variation",
  "q": "<b>Assertion (A):</b> Oysters produce a small number of large-sized offspring to maximise reproductive fitness.<br><b>Reason (R):</b> Large-sized offspring have better chances of survival.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "A is incorrect and R is also incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT states oysters produce a LARGE number of SMALL-sized offspring, not the reverse. Reason is generally correct — large-sized offspring do tend to have better survival, which is why birds and mammals adopt this strategy."
},
{
  "id": 172,
  "topic": "Population Interactions",
  "q": "In which of the following interactions is one species <b>harmed</b> while the other is <b>unaffected</b>?",
  "options": ["Commensalism", "Mutualism", "Amensalism", "Parasitism"],
  "correct": 2,
  "explanation": "In amensalism (–/0), one species is harmed and the other is unaffected. In commensalism (+/0), one benefits and the other is unaffected. In parasitism (+/–), one benefits and one is harmed."
},
{
  "id": 173,
  "topic": "Population Interactions",
  "q": "Consider the following statements:<br>Statement I: Predation, parasitism and commensalism share the characteristic that interacting species live closely together.<br>Statement II: In competition, both species benefit from each other's presence.<br><br>Choose the correct option:",
  "options": ["Both statements are correct", "Only Statement I is correct", "Only Statement II is correct", "Both statements are incorrect"],
  "correct": 1,
  "explanation": "Statement I is correct — directly from NCERT. Statement II is incorrect — in competition both species LOSE (–/–), they do not benefit."
},
{
  "id": 174,
  "topic": "Population Interactions",
  "q": "Which of the following interactions is represented by the sign notation <b>+/0</b>?",
  "options": ["Amensalism", "Parasitism", "Commensalism", "Mutualism"],
  "correct": 2,
  "explanation": "Commensalism is +/0 — one species benefits, other is unaffected. Amensalism is –/0, Parasitism is +/–, Mutualism is +/+."
},
{
  "id": 175,
  "topic": "Population Interactions",
  "q": "Which of the following interactions is represented by the sign notation <b>–/0</b>?",
  "options": ["Commensalism", "Amensalism", "Predation", "Competition"],
  "correct": 1,
  "explanation": "Amensalism is –/0 — one species is harmed, other is unaffected. This is often confused with commensalism (+/0)."
},
{
  "id": 176,
  "topic": "Predation",
  "q": "Predation can be thought of as nature's way of:",
  "options": ["Eliminating weaker species permanently", "Transferring energy fixed by plants to higher trophic levels", "Reducing biodiversity in an ecosystem", "Increasing competition among prey species"],
  "correct": 1,
  "explanation": "NCERT states: 'You can think of predation as nature's way of transferring to higher trophic levels the energy fixed by plants.'"
},
{
  "id": 177,
  "topic": "Predation",
  "q": "In a broad ecological context, which of the following is considered a predator?",
  "options": ["Only a tiger eating a deer", "Only carnivorous animals", "A sparrow eating a seed", "Only parasites feeding on hosts"],
  "correct": 2,
  "explanation": "NCERT states: 'a sparrow eating any seed is no less a predator. Although animals eating plants are categorised separately as herbivores, they are, in a broad ecological context, not very different from predators.'"
},
{
  "id": 178,
  "topic": "Predation",
  "q": "Which of the following are important roles played by predators?<br>(i) Transfer energy across trophic levels<br>(ii) Keep prey populations under control<br>(iii) Maintain species diversity in a community<br>(iv) Increase competition among prey species<br><br>Select the correct option:",
  "options": ["(i) and (ii) only", "(i), (ii) and (iii) only", "(ii), (iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 1,
  "explanation": "NCERT mentions three roles: (i) conduits for energy transfer, (ii) keep prey populations under control, (iii) maintain species diversity by reducing intensity of competition. Predators REDUCE competition (not increase it), so (iv) is incorrect."
},
{
  "id": 179,
  "topic": "Predation",
  "q": "The <b>prickly pear cactus</b> was introduced into Australia in:",
  "options": ["Early 1900's", "Early 1920's", "Early 1940's", "Early 1950's"],
  "correct": 1,
  "explanation": "NCERT states: 'The prickly pear cactus introduced into Australia in the early 1920's caused havoc by spreading rapidly into millions of hectares of rangeland.'"
},
{
  "id": 180,
  "topic": "Predation",
  "q": "The invasive prickly pear cactus in Australia was brought under control by introducing:",
  "options": ["A cactus-feeding beetle", "A cactus-feeding moth", "A cactus-feeding bird", "A chemical herbicide"],
  "correct": 1,
  "explanation": "NCERT states: 'the invasive cactus was brought under control only after a cactus-feeding predator (a moth) from its natural habitat was introduced into the country.' Students often confuse this with a beetle."
},
{
  "id": 181,
  "topic": "Predation",
  "q": "<b>Assertion (A):</b> When certain exotic species are introduced into a geographical area, they become invasive and start spreading fast.<br><b>Reason (R):</b> The invaded land does not have the natural predators of the introduced species.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'they become invasive and start spreading fast because the invaded land does not have its natural predators.'"
},
{
  "id": 182,
  "topic": "Predation",
  "q": "Biological control methods adopted in agricultural pest control are based on:",
  "options": ["The ability of the predator to regulate prey population", "The use of chemical pesticides", "The introduction of genetically modified organisms", "The removal of all predators from the field"],
  "correct": 0,
  "explanation": "NCERT states: 'Biological control methods adopted in agricultural pest control are based on the ability of the predator to regulate prey population.'"
},
{
  "id": 183,
  "topic": "Predation",
  "q": "Predators help in maintaining species diversity in a community by:",
  "options": ["Increasing the intensity of competition among prey species", "Reducing the intensity of competition among competing prey species", "Eliminating all prey species equally", "Promoting mutualism among prey species"],
  "correct": 1,
  "explanation": "NCERT states: 'Predators also help in maintaining species diversity in a community, by reducing the intensity of competition among competing prey species.'"
},
{
  "id": 184,
  "topic": "Predation",
  "q": "In the rocky intertidal communities of the American Pacific Coast, the important predator mentioned in NCERT is:",
  "options": ["Sea urchin", "Starfish Pisaster", "Lobster", "Octopus"],
  "correct": 1,
  "explanation": "NCERT states: 'the starfish Pisaster is an important predator' in the rocky intertidal communities of the American Pacific Coast."
},
{
  "id": 185,
  "topic": "Predation",
  "q": "In the Pisaster experiment, when all starfish were removed from an enclosed intertidal area, what happened within a year?",
  "options": ["Biodiversity increased significantly", "More than 10 species of invertebrates became extinct", "The ecosystem remained unchanged", "Only 2 species became extinct"],
  "correct": 1,
  "explanation": "NCERT states: 'when all the starfish were removed from an enclosed intertidal area, more than 10 species of invertebrates became extinct within a year, because of interspecific competition.'"
},
{
  "id": 186,
  "topic": "Predation",
  "q": "The extinction of more than 10 invertebrate species after removal of Pisaster was due to:",
  "options": ["Lack of food", "Interspecific competition", "Disease outbreak", "Environmental pollution"],
  "correct": 1,
  "explanation": "NCERT clearly states the extinction was 'because of interspecific competition.' Without the predator to keep dominant competitors in check, competitive exclusion eliminated many species."
},
{
  "id": 187,
  "topic": "Predation",
  "q": "<b>Assertion (A):</b> Predators in nature are 'prudent'.<br><b>Reason (R):</b> If a predator is too efficient and overexploits its prey, the prey might become extinct and following it, the predator will also become extinct.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'If a predator is too efficient and overexploits its prey, then the prey might become extinct and following it, the predator will also become extinct for lack of food. This is the reason why predators in nature are prudent.'"
},
{
  "id": 188,
  "topic": "Predation",
  "q": "If prey species could achieve very high population densities without predators, it would cause:",
  "options": ["Ecosystem stability", "Ecosystem instability", "Increased biodiversity", "No significant change"],
  "correct": 1,
  "explanation": "NCERT states: 'But for predators, prey species could achieve very high population densities and cause ecosystem instability.'"
},
{
  "id": 189,
  "topic": "Predation",
  "q": "Some species of insects and frogs avoid being detected by predators through:",
  "options": ["Aposematic colouration", "Cryptic colouration (camouflage)", "Müllerian mimicry", "Batesian mimicry"],
  "correct": 1,
  "explanation": "NCERT states: 'Some species of insects and frogs are cryptically-coloured (camouflaged) to avoid being detected easily by the predator.'"
},
{
  "id": 190,
  "topic": "Predation",
  "q": "The <b>Monarch butterfly</b> is highly distasteful to its predator (bird) because of:",
  "options": ["Thorns on its wings", "Cryptic colouration", "A special chemical present in its body", "Its large body size"],
  "correct": 2,
  "explanation": "NCERT states: 'The Monarch butterfly is highly distasteful to its predator (bird) because of a special chemical present in its body.'"
},
{
  "id": 191,
  "topic": "Predation",
  "q": "The Monarch butterfly acquires its distasteful chemical during:",
  "options": ["The adult stage by feeding on nectar", "The pupal stage", "The caterpillar stage by feeding on a poisonous weed", "The egg stage"],
  "correct": 2,
  "explanation": "NCERT states: 'the butterfly acquires this chemical during its caterpillar stage by feeding on a poisonous weed.' This is a frequently tested fact — students often think the adult butterfly produces the chemical."
},
{
  "id": 192,
  "topic": "Predation",
  "q": "For plants, the predators are:",
  "options": ["Only carnivorous animals", "Herbivores", "Other plants", "Decomposers"],
  "correct": 1,
  "explanation": "NCERT states: 'For plants, herbivores are the predators.'"
},
{
  "id": 193,
  "topic": "Predation",
  "q": "Nearly what percentage of all insects are known to be <b>phytophagous</b>?",
  "options": ["10 per cent", "15 per cent", "25 per cent", "50 per cent"],
  "correct": 2,
  "explanation": "NCERT states: 'Nearly 25 per cent of all insects are known to be phytophagous (feeding on plant sap and other parts of plants).'"
},
{
  "id": 194,
  "topic": "Predation",
  "q": "The term '<b>phytophagous</b>' means:",
  "options": ["Feeding on fungi", "Feeding on dead organic matter", "Feeding on plant sap and other parts of plants", "Feeding on other insects"],
  "correct": 2,
  "explanation": "NCERT defines phytophagous as 'feeding on plant sap and other parts of plants.'"
},
{
  "id": 195,
  "topic": "Predation",
  "q": "Plants have evolved defences against herbivores because unlike animals they:",
  "options": ["Do not have immune systems", "Cannot run away from their predators", "Do not have nervous systems", "Cannot produce chemical compounds"],
  "correct": 1,
  "explanation": "NCERT states: 'The problem is particularly severe for plants because, unlike animals, they cannot run away from their predators.'"
},
{
  "id": 196,
  "topic": "Predation",
  "q": "The <b>most common morphological means of defence</b> in plants against herbivores is:",
  "options": ["Thick bark", "Waxy cuticle", "Thorns", "Spines on leaves"],
  "correct": 2,
  "explanation": "NCERT states: 'Thorns (Acacia, Cactus) are the most common morphological means of defence.'"
},
{
  "id": 197,
  "topic": "Predation",
  "q": "Which of the following plants are mentioned as examples of plants having thorns as a morphological defence?",
  "options": ["Calotropis and Nerium", "Acacia and Cactus", "Banyan and Parthenium", "Teak and Bamboo"],
  "correct": 1,
  "explanation": "NCERT mentions: 'Thorns (Acacia, Cactus) are the most common morphological means of defence.'"
},
{
  "id": 198,
  "topic": "Predation",
  "q": "The weed <b>Calotropis</b> produces highly poisonous:",
  "options": ["Alkaloids", "Tannins", "Cardiac glycosides", "Cyanogenic glucosides"],
  "correct": 2,
  "explanation": "NCERT states: 'The plant produces highly poisonous cardiac glycosides and that is why you never see any cattle or goats browsing on this plant.'"
},
{
  "id": 199,
  "topic": "Predation",
  "q": "<b>Assertion (A):</b> Cattle and goats are never seen browsing on Calotropis.<br><b>Reason (R):</b> Calotropis produces highly poisonous cardiac glycosides.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'The plant produces highly poisonous cardiac glycosides and that is why you never see any cattle or goats browsing on this plant.'"
},
{
  "id": 200,
  "topic": "Predation",
  "q": "Chemical substances extracted from plants on a commercial scale, such as nicotine, caffeine, quinine, strychnine and opium, are actually produced by plants as:",
  "options": ["Attractants for pollinators", "Nutrients for growth", "Defences against grazers and browsers", "Waste products of metabolism"],
  "correct": 2,
  "explanation": "NCERT states: 'A wide variety of chemical substances that we extract from plants on a commercial scale (nicotine, caffeine, quinine, strychnine, opium, etc.,) are produced by them actually as defences against grazers and browsers.'"
},
{
  "id": 201,
  "topic": "Predation",
  "q": "Which of the following is <b>NOT</b> mentioned as a plant chemical defence against herbivores in NCERT?",
  "options": ["Nicotine", "Caffeine", "Capsaicin", "Strychnine"],
  "correct": 2,
  "explanation": "NCERT specifically lists nicotine, caffeine, quinine, strychnine, and opium as chemical defences. Capsaicin is not mentioned in this context."
},
{
  "id": 202,
  "topic": "Predation",
  "q": "Chemical defences produced by plants can:<br>(i) Make the herbivore sick<br>(ii) Inhibit feeding or digestion<br>(iii) Disrupt reproduction of herbivore<br>(iv) Kill the herbivore<br><br>Which of the above are mentioned in NCERT?",
  "options": ["(i) and (ii) only", "(i), (ii) and (iii) only", "(iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 3,
  "explanation": "NCERT states: 'Many plants produce and store chemicals that make the herbivore sick when they are eaten, inhibit feeding or digestion, disrupt its reproduction or even kill it.' All four effects are mentioned."
},
{
  "id": 203,
  "topic": "Predation",
  "q": "Consider the following statements:<br>Statement I: Herbivores are categorised separately from predators.<br>Statement II: In a broad ecological context, herbivores are not very different from predators.<br><br>Choose the correct option:",
  "options": ["Both are correct and not contradictory", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 0,
  "explanation": "Both are correct and represent the same NCERT line: 'Although animals eating plants are categorised separately as herbivores, they are, in a broad ecological context, not very different from predators.' Both statements are valid from different perspectives."
},
{
  "id": 204,
  "topic": "Predation",
  "q": "The prickly pear cactus in Australia spread rapidly into:",
  "options": ["Thousands of hectares", "Hundreds of hectares", "Millions of hectares of rangeland", "Billions of hectares"],
  "correct": 2,
  "explanation": "NCERT states the prickly pear cactus caused havoc 'by spreading rapidly into millions of hectares of rangeland.'"
},
{
  "id": 205,
  "topic": "Predation",
  "q": "The cactus-feeding moth used to control prickly pear cactus in Australia was introduced from:",
  "options": ["India", "Africa", "Its natural habitat (home range of prickly pear)", "Europe"],
  "correct": 2,
  "explanation": "NCERT states: 'a cactus-feeding predator (a moth) from its natural habitat was introduced into the country.' The moth came from the natural habitat of the prickly pear cactus."
},
{
  "id": 206,
  "topic": "Predation",
  "q": "Which of the following is an example of <b>biological control</b> as described in NCERT?",
  "options": ["Using chemical pesticides to control crop pests", "Introducing cactus-feeding moth to control prickly pear cactus", "Genetic modification of crops for pest resistance", "Manual removal of weeds"],
  "correct": 1,
  "explanation": "The introduction of the cactus-feeding moth to control invasive prickly pear cactus in Australia is a classic example of biological control, based on the predator's ability to regulate prey population."
},
{
  "id": 207,
  "topic": "Predation",
  "q": "<b>Assertion (A):</b> Removal of Pisaster starfish from intertidal communities led to an increase in species diversity.<br><b>Reason (R):</b> Pisaster was preying on invertebrate species causing their decline.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is incorrect", "Both A and R are incorrect"],
  "correct": 3,
  "explanation": "Both are incorrect. Assertion is wrong — removal of Pisaster led to DECREASE in diversity (>10 species became extinct). Reason is also wrong — Pisaster's predation actually maintained diversity; its removal caused extinction through competition."
},
{
  "id": 208,
  "topic": "Predation",
  "q": "Consider the following prey defences:<br>(i) Cryptic colouration in insects and frogs<br>(ii) Poisonous chemicals in Monarch butterfly<br>(iii) Thorns in Acacia and Cactus<br>(iv) Cardiac glycosides in Calotropis<br><br>Which of the above are defence mechanisms against predation?",
  "options": ["(i) and (ii) only", "(iii) and (iv) only", "(i), (ii), (iii) and (iv)", "(i) and (iii) only"],
  "correct": 2,
  "explanation": "All four are defence mechanisms against predation as described in NCERT — cryptic colouration, chemical defence of Monarch butterfly, thorns in plants, and cardiac glycosides in Calotropis."
},
{
  "id": 209,
  "topic": "Predation",
  "q": "Match the following defences with the organisms:<br>(a) Cryptic colouration — (i) Calotropis<br>(b) Cardiac glycosides — (ii) Acacia, Cactus<br>(c) Thorns — (iii) Monarch butterfly<br>(d) Special distasteful chemical — (iv) Some insects and frogs<br><br>Choose the correct match:",
  "options": ["(a)-(iv), (b)-(i), (c)-(ii), (d)-(iii)", "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)", "(a)-(iv), (b)-(ii), (c)-(i), (d)-(iii)", "(a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)"],
  "correct": 0,
  "explanation": "Cryptic colouration — some insects and frogs (iv); Cardiac glycosides — Calotropis (i); Thorns — Acacia, Cactus (ii); Special distasteful chemical — Monarch butterfly (iii)."
},
{
  "id": 210,
  "topic": "Predation",
  "q": "Which of the following is <b>NOT</b> a chemical defence substance produced by plants as mentioned in NCERT?",
  "options": ["Nicotine", "Quinine", "Opium", "Morphine"],
  "correct": 3,
  "explanation": "NCERT specifically lists nicotine, caffeine, quinine, strychnine, and opium as plant chemical defences. Morphine (derived from opium) is not separately mentioned in this list."
},
{
  "id": 211,
  "topic": "Predation",
  "q": "Plants have evolved which types of defences against herbivores?",
  "options": ["Only morphological defences", "Only chemical defences", "Both morphological and chemical defences", "Only behavioural defences"],
  "correct": 2,
  "explanation": "NCERT states: 'Plants therefore have evolved an astonishing variety of morphological and chemical defences against herbivores.' Both types are mentioned."
},
{
  "id": 212,
  "topic": "Predation",
  "q": "Consider the following statements:<br>Statement I: The Monarch butterfly produces its own distasteful chemical as an adult.<br>Statement II: The Monarch butterfly acquires the distasteful chemical during its caterpillar stage by feeding on a poisonous weed.<br><br>Choose the correct option:",
  "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 2,
  "explanation": "Statement I is incorrect — the butterfly does not produce the chemical itself as an adult. Statement II is correct — NCERT states: 'the butterfly acquires this chemical during its caterpillar stage by feeding on a poisonous weed.'"
},
{
  "id": 213,
  "topic": "Predation",
  "q": "The predator of the Monarch butterfly, as mentioned in NCERT, is:",
  "options": ["Snake", "Lizard", "Bird", "Spider"],
  "correct": 2,
  "explanation": "NCERT states: 'The Monarch butterfly is highly distasteful to its predator (bird).'"
},
{
  "id": 214,
  "topic": "Predation",
  "q": "If a predator overexploits its prey, which of the following sequence of events occurs?",
  "options": ["Prey increases → Predator increases → Ecosystem stabilizes", "Prey becomes extinct → Predator also becomes extinct for lack of food", "Prey adapts → Predator switches to another prey", "Prey becomes extinct → Predator thrives on other resources"],
  "correct": 1,
  "explanation": "NCERT states: 'If a predator is too efficient and overexploits its prey, then the prey might become extinct and following it, the predator will also become extinct for lack of food.'"
},
{
  "id": 215,
  "topic": "Predation",
  "q": "The term '<b>prudent predator</b>' refers to a predator that:",
  "options": ["Kills all prey efficiently", "Does not overexploit its prey, thereby ensuring its own survival", "Feeds only on plants", "Switches between multiple prey species randomly"],
  "correct": 1,
  "explanation": "NCERT explains that predators in nature are 'prudent' — they do not overexploit their prey because doing so would lead to the extinction of both prey and predator."
},
{
  "id": 216,
  "topic": "Predation",
  "q": "<b>Assertion (A):</b> Nicotine, caffeine, quinine, strychnine and opium are extracted from plants for commercial purposes.<br><b>Reason (R):</b> These chemicals are produced by plants specifically for human use.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 2,
  "explanation": "Assertion is correct — these chemicals are commercially extracted from plants. Reason is incorrect — NCERT states these are 'produced by them actually as defences against grazers and browsers,' NOT for human use."
},
{
  "id": 217,
  "topic": "Predation",
  "q": "The Pisaster starfish experiment in NCERT demonstrates that predators help in:",
  "options": ["Reducing species diversity", "Increasing prey population density", "Maintaining species diversity", "Causing ecosystem instability"],
  "correct": 2,
  "explanation": "The removal of Pisaster (predator) led to extinction of >10 invertebrate species due to competition. This demonstrates that predators maintain species diversity by reducing competitive exclusion."
},
{
  "id": 218,
  "topic": "Predation",
  "q": "Which of the following correctly lists ALL the chemical defences of plants mentioned in NCERT?",
  "options": ["Nicotine, caffeine, quinine, strychnine, opium, cardiac glycosides", "Nicotine, caffeine, quinine, morphine, opium", "Nicotine, tannins, quinine, strychnine, opium", "Nicotine, caffeine, capsaicin, strychnine, opium"],
  "correct": 0,
  "explanation": "NCERT mentions nicotine, caffeine, quinine, strychnine, opium as commercial plant chemicals used as defences, and cardiac glycosides produced by Calotropis. Option A includes all of these."
},
{
  "id": 219,
  "topic": "Competition",
  "q": "Darwin was convinced that <b>interspecific competition</b> is:",
  "options": ["Irrelevant to evolution", "A potent force in organic evolution", "Only important for plants", "Only applicable to predator-prey interactions"],
  "correct": 1,
  "explanation": "NCERT states: 'When Darwin spoke of the struggle for existence and survival of the fittest in nature, he was convinced that interspecific competition is a potent force in organic evolution.'"
},
{
  "id": 220,
  "topic": "Competition",
  "q": "Which of the following is an example of competition between <b>totally unrelated species</b> as mentioned in NCERT?",
  "options": ["Two species of warblers competing for insects", "Flamingoes and resident fishes competing for zooplankton", "Balanus and Chathamalus competing for space", "Lions and tigers competing for prey"],
  "correct": 1,
  "explanation": "NCERT states: 'totally unrelated species could also compete for the same resource. For instance, in some shallow South American lakes, visiting flamingoes and resident fishes compete for their common food, the zooplankton in the lake.'"
},
{
  "id": 221,
  "topic": "Competition",
  "q": "In some shallow South American lakes, visiting flamingoes and resident fishes compete for:",
  "options": ["Space on the lake bed", "Zooplankton", "Phytoplankton", "Aquatic plants"],
  "correct": 1,
  "explanation": "NCERT states they compete for 'their common food, the zooplankton in the lake.'"
},
{
  "id": 222,
  "topic": "Competition",
  "q": "In <b>interference competition</b>, the feeding efficiency of one species is reduced due to:",
  "options": ["Lack of food resources", "The interfering and inhibitory presence of the other species", "Predation by a third species", "Abiotic environmental changes"],
  "correct": 1,
  "explanation": "NCERT states: 'in interference competition, the feeding efficiency of one species might be reduced due to the interfering and inhibitory presence of the other species, even if resources (food and space) are abundant.'"
},
{
  "id": 223,
  "topic": "Competition",
  "q": "<b>Assertion (A):</b> Resources must be limiting for competition to occur.<br><b>Reason (R):</b> In interference competition, feeding efficiency of one species is reduced even if resources are abundant.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT states 'resources need not be limiting for competition to occur.' Reason is correct — interference competition occurs even when resources are abundant."
},
{
  "id": 224,
  "topic": "Competition",
  "q": "Competition is best defined as a process in which the fitness of one species is significantly lower in the presence of another species. Fitness here is measured in terms of:",
  "options": ["Body size", "Longevity", "'r' — the intrinsic rate of natural increase", "Number of predators it can avoid"],
  "correct": 2,
  "explanation": "NCERT states: 'competition is best defined as a process in which the fitness of one species (measured in terms of its 'r' the intrinsic rate of increase) is significantly lower in the presence of another species.'"
},
{
  "id": 225,
  "topic": "Competition",
  "q": "<b>Gause's Competitive Exclusion Principle</b> states that:",
  "options": ["Two closely related species always co-exist by resource partitioning", "Two closely related species competing for the same resources cannot co-exist indefinitely and the inferior one will be eliminated", "Competition always leads to extinction of both species", "Unrelated species cannot compete for the same resources"],
  "correct": 1,
  "explanation": "NCERT states: 'Gause's Competitive Exclusion Principle states that two closely related species competing for the same resources cannot co-exist indefinitely and the competitively inferior one will be eliminated eventually.'"
},
{
  "id": 226,
  "topic": "Competition",
  "q": "Gause's Competitive Exclusion Principle may be true if:",
  "options": ["Resources are unlimited", "Resources are limiting", "There are no predators", "The habitat is very large"],
  "correct": 1,
  "explanation": "NCERT states: 'This may be true if resources are limiting, but not otherwise.'"
},
{
  "id": 227,
  "topic": "Competition",
  "q": "The <b>Abingdon tortoise</b> in Galapagos Islands became extinct within a decade after the introduction of:",
  "options": ["Rats", "Goats", "Cats", "Dogs"],
  "correct": 1,
  "explanation": "NCERT states: 'The Abingdon tortoise in Galapagos Islands became extinct within a decade after goats were introduced on the island, apparently due to the greater browsing efficiency of the goats.'"
},
{
  "id": 228,
  "topic": "Competition",
  "q": "The extinction of the Abingdon tortoise was apparently due to:",
  "options": ["Predation by goats", "Greater browsing efficiency of the goats", "Disease introduced by goats", "Habitat destruction by goats"],
  "correct": 1,
  "explanation": "NCERT states it was 'apparently due to the greater browsing efficiency of the goats.' This is competition (not predation) — goats outcompeted the tortoise for food."
},
{
  "id": 229,
  "topic": "Competition",
  "q": "<b>Competitive release</b> refers to:",
  "options": ["Extinction of a species due to competition", "A species expanding its distributional range when the competing species is removed", "Two species co-existing through resource partitioning", "A species becoming invasive in a new habitat"],
  "correct": 1,
  "explanation": "NCERT states: 'A species whose distribution is restricted to a small geographical area because of the presence of a competitively superior species, is found to expand its distributional range dramatically when the competing species is experimentally removed.'"
},
{
  "id": 230,
  "topic": "Competition",
  "q": "Connell's field experiments on barnacles were conducted on the rocky sea coasts of:",
  "options": ["Australia", "American Pacific Coast", "Scotland", "South America"],
  "correct": 2,
  "explanation": "NCERT states: 'Connell's elegant field experiments showed that on the rocky sea coasts of Scotland...'"
},
{
  "id": 231,
  "topic": "Competition",
  "q": "In Connell's barnacle experiment, the larger and competitively superior barnacle is:",
  "options": ["Chathamalus", "Balanus", "Pisaster", "Patella"],
  "correct": 1,
  "explanation": "NCERT states: 'the larger and competitively superior barnacle Balanus dominates the intertidal area, and excludes the smaller barnacle Chathamalus from that zone.'"
},
{
  "id": 232,
  "topic": "Competition",
  "q": "In the Connell experiment, <b>Chathamalus</b> is excluded from the intertidal zone by:",
  "options": ["Pisaster starfish", "Balanus", "Predatory fish", "Wave action"],
  "correct": 1,
  "explanation": "NCERT states: 'the larger and competitively superior barnacle Balanus dominates the intertidal area, and excludes the smaller barnacle Chathamalus from that zone.'"
},
{
  "id": 233,
  "topic": "Competition",
  "q": "Consider the following statements:<br>Statement I: Balanus is the smaller barnacle excluded from the intertidal zone.<br>Statement II: Chathamalus is the larger and competitively superior barnacle.<br><br>Choose the correct option:",
  "options": ["Both are correct", "Both are incorrect", "Only Statement I is correct", "Only Statement II is correct"],
  "correct": 1,
  "explanation": "Both are incorrect — they are swapped. NCERT states Balanus is the LARGER and competitively SUPERIOR barnacle, while Chathamalus is the SMALLER one that is excluded. This is a very common NEET trap."
},
{
  "id": 234,
  "topic": "Competition",
  "q": "In general, which groups appear to be <b>more adversely affected</b> by competition?",
  "options": ["Carnivores and omnivores", "Herbivores and plants", "Decomposers and microbes", "Predators and parasites"],
  "correct": 1,
  "explanation": "NCERT states: 'In general, herbivores and plants appear to be more adversely affected by competition than carnivores.'"
},
{
  "id": 235,
  "topic": "Competition",
  "q": "More recent studies on competition suggest that species facing competition might evolve mechanisms that promote:",
  "options": ["Competitive exclusion", "Co-existence rather than exclusion", "Emigration from the habitat", "Predation on the competing species"],
  "correct": 1,
  "explanation": "NCERT states: 'species facing competition might evolve mechanisms that promote co-existence rather than exclusion.'"
},
{
  "id": 236,
  "topic": "Competition",
  "q": "One mechanism that promotes co-existence of competing species is:",
  "options": ["Competitive exclusion", "Resource partitioning", "Predation", "Emigration"],
  "correct": 1,
  "explanation": "NCERT states: 'One such mechanism is resource partitioning.'"
},
{
  "id": 237,
  "topic": "Competition",
  "q": "<b>MacArthur</b> showed that five closely related species of warblers living on the same tree were able to avoid competition and co-exist due to:",
  "options": ["Different food preferences entirely", "Behavioural differences in their foraging activities", "Temporal separation over different seasons", "Predation by different predator species"],
  "correct": 1,
  "explanation": "NCERT states: 'MacArthur showed that five closely related species of warblers living on the same tree were able to avoid competition and co-exist due to behavioural differences in their foraging activities.'"
},
{
  "id": 238,
  "topic": "Competition",
  "q": "How many closely related warbler species did MacArthur study on the same tree?",
  "options": ["Three", "Four", "Five", "Six"],
  "correct": 2,
  "explanation": "NCERT states: 'five closely related species of warblers living on the same tree.'"
},
{
  "id": 239,
  "topic": "Competition",
  "q": "If two species compete for the same resource, they could avoid competition by:<br>(i) Choosing different times for feeding<br>(ii) Adopting different foraging patterns<br>(iii) Eating the same food at the same time<br><br>Which of the above are correct examples of resource partitioning?",
  "options": ["(i) and (ii) only", "(ii) and (iii) only", "(i) and (iii) only", "(i), (ii) and (iii)"],
  "correct": 0,
  "explanation": "NCERT states: 'they could avoid competition by choosing, for instance, different times for feeding or different foraging patterns.' Eating the same food at the same time is NOT resource partitioning."
},
{
  "id": 240,
  "topic": "Competition",
  "q": "<b>Assertion (A):</b> Evidence for competitive exclusion occurring in nature is always conclusive.<br><b>Reason (R):</b> In laboratory experiments, when resources are limited, the competitively superior species eventually eliminates the other.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT states 'evidence for such competitive exclusion occurring in nature is not always conclusive.' Reason is correct — laboratory experiments by Gause showed competitive exclusion under limited resources."
},
{
  "id": 241,
  "topic": "Competition",
  "q": "Match the following:<br>(a) Gause — (i) Warbler resource partitioning<br>(b) Connell — (ii) Competitive Exclusion Principle<br>(c) MacArthur — (iii) Barnacle competition experiment<br>(d) Darwin — (iv) Competition as force in organic evolution<br><br>Choose the correct match:",
  "options": ["(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)", "(a)-(iii), (b)-(ii), (c)-(iv), (d)-(i)", "(a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)", "(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)"],
  "correct": 0,
  "explanation": "Gause — Competitive Exclusion Principle (ii); Connell — barnacle experiment in Scotland (iii); MacArthur — warbler resource partitioning (i); Darwin — competition as potent force in organic evolution (iv)."
},
{
  "id": 242,
  "topic": "Competition",
  "q": "Consider the following:<br>Statement I: Competition occurs only when closely related species compete for limiting resources.<br>Statement II: Totally unrelated species can also compete for the same resource.<br><br>Choose the correct option:",
  "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 2,
  "explanation": "Statement I is incorrect — NCERT says 'this is not entirely true.' Statement II is correct — NCERT gives the example of flamingoes (birds) and fishes competing for zooplankton."
},
{
  "id": 243,
  "topic": "Competition",
  "q": "The Abingdon tortoise was found in:",
  "options": ["Madagascar Islands", "Hawaiian Islands", "Galapagos Islands", "Canary Islands"],
  "correct": 2,
  "explanation": "NCERT states: 'The Abingdon tortoise in Galapagos Islands became extinct within a decade after goats were introduced on the island.'"
},
{
  "id": 244,
  "topic": "Competition",
  "q": "The Abingdon tortoise became extinct within:",
  "options": ["A year", "A decade", "A century", "Two decades"],
  "correct": 1,
  "explanation": "NCERT states the Abingdon tortoise 'became extinct within a decade after goats were introduced.'"
},
{
  "id": 245,
  "topic": "Competition",
  "q": "<b>Assertion (A):</b> The Abingdon tortoise in Galapagos became extinct due to predation by goats.<br><b>Reason (R):</b> Goats had greater browsing efficiency than the tortoise.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — the tortoise went extinct due to COMPETITION (not predation) with goats. Goats did not eat the tortoise. Reason is correct — NCERT states 'apparently due to the greater browsing efficiency of the goats.'"
},
{
  "id": 246,
  "topic": "Competition",
  "q": "Which of the following statements about Gause's Competitive Exclusion Principle is correct?",
  "options": ["It is universally applicable in all situations", "It applies only when resources are limiting", "It has been conclusively proven in all natural habitats", "It suggests both species always go extinct"],
  "correct": 1,
  "explanation": "NCERT states: 'This may be true if resources are limiting, but not otherwise.' It is not universally applicable, not always conclusively proven in nature, and only the inferior species is eliminated (not both)."
},
{
  "id": 247,
  "topic": "Competition",
  "q": "Consider the following scientists and their contributions:<br>(i) Gause demonstrated competitive exclusion in laboratory experiments<br>(ii) Connell conducted field experiments on warblers<br>(iii) MacArthur studied barnacle competition in Scotland<br><br>Which of the above are correctly matched?",
  "options": ["(i) only", "(i) and (ii) only", "(ii) and (iii) only", "None of the above"],
  "correct": 0,
  "explanation": "Only (i) is correct — Gause demonstrated competitive exclusion in lab. (ii) is incorrect — Connell studied barnacles (not warblers). (iii) is incorrect — MacArthur studied warblers (not barnacles). Students frequently interchange Connell and MacArthur."
},
{
  "id": 248,
  "topic": "Competition",
  "q": "Which of the following is <b>NOT</b> true about interspecific competition?",
  "options": ["It can occur between unrelated species", "It can occur even when resources are abundant (interference competition)", "It always leads to extinction of the inferior species in nature", "It reduces the fitness (r value) of one species in the presence of another"],
  "correct": 2,
  "explanation": "NCERT states evidence for competitive exclusion in nature is 'not always conclusive.' Species may co-exist through resource partitioning. So competitive exclusion does NOT always occur in nature."
},
{
  "id": 249,
  "topic": "Competition",
  "q": "The warbler species studied by MacArthur co-existed on the same tree primarily through:",
  "options": ["Temporal partitioning only", "Morphological differences", "Behavioural differences in foraging activities (resource partitioning)", "Predator avoidance behaviour"],
  "correct": 2,
  "explanation": "NCERT states: 'five closely related species of warblers living on the same tree were able to avoid competition and co-exist due to behavioural differences in their foraging activities.' This is resource partitioning."
},
{
  "id": 250,
  "topic": "Competition",
  "q": "Which of the following correctly describes <b>interference competition</b>?",
  "options": ["Competition that occurs only when resources are scarce", "Competition where one species directly inhibits the feeding efficiency of another, even when resources are abundant", "Competition that always leads to extinction of one species", "Competition between predator and prey"],
  "correct": 1,
  "explanation": "NCERT states: 'in interference competition, the feeding efficiency of one species might be reduced due to the interfering and inhibitory presence of the other species, even if resources (food and space) are abundant.'"
},
{
  "id": 251,
  "topic": "Competition",
  "q": "<b>Assertion (A):</b> Competitive exclusion principle is supported by all recent ecological studies.<br><b>Reason (R):</b> Species facing competition might evolve mechanisms like resource partitioning that promote co-existence.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT states 'More recent studies do not support such gross generalisations about competition.' Reason is correct — species may evolve resource partitioning for co-existence."
},
{
  "id": 252,
  "topic": "Competition",
  "q": "In the context of competition, 'circumstantial evidence' mentioned in NCERT includes:<br>(i) Extinction of Abingdon tortoise after introduction of goats<br>(ii) Competitive release experiments<br>(iii) Connell's barnacle experiment<br><br>Which of the above are correct?",
  "options": ["(i) only", "(i) and (ii) only", "(i), (ii) and (iii)", "(ii) and (iii) only"],
  "correct": 2,
  "explanation": "NCERT mentions all three as evidence for competition: Abingdon tortoise extinction (circumstantial), competitive release, and Connell's barnacle experiment."
},
{
  "id": 253,
  "topic": "Competition",
  "q": "In Connell's experiment, <b>Balanus</b> dominates which zone?",
  "options": ["The subtidal zone", "The intertidal area", "The supratidal zone", "The deep sea zone"],
  "correct": 1,
  "explanation": "NCERT states: 'the larger and competitively superior barnacle Balanus dominates the intertidal area, and excludes the smaller barnacle Chathamalus from that zone.'"
},
{
  "id": 254,
  "topic": "Competition",
  "q": "Which of the following pairs is correctly matched?",
  "options": ["Connell — Warblers on same tree", "MacArthur — Barnacles on rocky coast", "Gause — Competitive Exclusion Principle", "Darwin — Resource partitioning theory"],
  "correct": 2,
  "explanation": "Gause — Competitive Exclusion Principle is correct. Connell studied barnacles (not warblers). MacArthur studied warblers (not barnacles). Darwin spoke about competition as a force in evolution (not resource partitioning)."
},
{
  "id": 255,
  "topic": "Competition",
  "q": "Consider the following statements about competition:<br>Statement I: Only closely related species can compete with each other.<br>Statement II: Flamingoes and fishes compete for zooplankton in shallow South American lakes.<br><br>In light of Statement II, Statement I is:",
  "options": ["Correct because flamingoes and fishes are related", "Correct because they share the same habitat", "Incorrect because totally unrelated species can also compete", "Correct because zooplankton is a limiting resource"],
  "correct": 2,
  "explanation": "NCERT explicitly states this is 'not entirely true' and gives the flamingoe-fish example showing that totally unrelated species can also compete for the same resource."
},
{
  "id": 256,
  "topic": "Competition",
  "q": "Which of the following experiments is associated with the rocky sea coasts of <b>Scotland</b>?",
  "options": ["Gause's Paramecium experiment", "MacArthur's warbler experiment", "Connell's barnacle experiment", "Pisaster starfish removal experiment"],
  "correct": 2,
  "explanation": "NCERT states: 'Connell's elegant field experiments showed that on the rocky sea coasts of Scotland...' The Pisaster experiment was on the American Pacific Coast."
},
{
  "id": 257,
  "topic": "Parasitism",
  "q": "Parasitism has evolved in:",
  "options": ["Only lower invertebrates", "Only vertebrates", "Many taxonomic groups from plants to higher vertebrates", "Only microorganisms"],
  "correct": 2,
  "explanation": "NCERT states: 'parasitism has evolved in so many taxonomic groups from plants to higher vertebrates.'"
},
{
  "id": 258,
  "topic": "Parasitism",
  "q": "Many parasites have evolved to be <b>host-specific</b>, which means they:",
  "options": ["Can parasitise any species of host", "Can parasitise only a single species of host", "Can parasitise only plants", "Can parasitise only animals"],
  "correct": 1,
  "explanation": "NCERT states: 'Many parasites have evolved to be host-specific (they can parasitise only a single species of host).'"
},
{
  "id": 259,
  "topic": "Parasitism",
  "q": "Host-parasite <b>co-evolution</b> means:",
  "options": ["Both host and parasite evolve independently without affecting each other", "If the host evolves resistance mechanisms, the parasite evolves mechanisms to counteract them", "The host always wins the evolutionary arms race", "The parasite always eliminates the host"],
  "correct": 1,
  "explanation": "NCERT states: 'both host and the parasite tend to co-evolve; that is, if the host evolves special mechanisms for rejecting or resisting the parasite, the parasite has to evolve mechanisms to counteract and neutralise them.'"
},
{
  "id": 260,
  "topic": "Parasitism",
  "q": "Which of the following are special adaptations evolved by parasites?<br>(i) Loss of unnecessary sense organs<br>(ii) Presence of adhesive organs or suckers<br>(iii) Loss of digestive system<br>(iv) High reproductive capacity<br><br>Select the correct option:",
  "options": ["(i) and (ii) only", "(i), (ii) and (iii) only", "(iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 3,
  "explanation": "NCERT mentions ALL four: loss of unnecessary sense organs, presence of adhesive organs or suckers, loss of digestive system, and high reproductive capacity."
},
{
  "id": 261,
  "topic": "Parasitism",
  "q": "The <b>human liver fluke</b> (a trematode parasite) depends on how many intermediate hosts to complete its life cycle?",
  "options": ["One", "Two", "Three", "None"],
  "correct": 1,
  "explanation": "NCERT states: 'The human liver fluke depends on two intermediate hosts (a snail and a fish) to complete its life cycle.' This is a very frequently tested fact."
},
{
  "id": 262,
  "topic": "Parasitism",
  "q": "The two intermediate hosts of the human liver fluke are:",
  "options": ["Snail and mosquito", "Snail and fish", "Fish and frog", "Mosquito and fish"],
  "correct": 1,
  "explanation": "NCERT states: 'a snail and a fish' are the two intermediate hosts of the human liver fluke."
},
{
  "id": 263,
  "topic": "Parasitism",
  "q": "The malarial parasite needs a <b>vector</b> to spread to other hosts. This vector is:",
  "options": ["Housefly", "Sandfly", "Mosquito", "Tsetse fly"],
  "correct": 2,
  "explanation": "NCERT states: 'The malarial parasite needs a vector (mosquito) to spread to other hosts.'"
},
{
  "id": 264,
  "topic": "Parasitism",
  "q": "Parasites may harm the host by:<br>(i) Reducing survival, growth and reproduction<br>(ii) Reducing population density<br>(iii) Rendering host more vulnerable to predation<br>(iv) Always killing the host<br><br>Which of the above are correct as per NCERT?",
  "options": ["(i), (ii) and (iii) only", "(i) and (iv) only", "(ii), (iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 0,
  "explanation": "NCERT mentions (i), (ii), and (iii). Statement (iv) is incorrect — parasites may harm but do not ALWAYS kill the host. An ideal parasite thrives without killing."
},
{
  "id": 265,
  "topic": "Parasitism",
  "q": "Parasites that feed on the <b>external surface</b> of the host organism are called:",
  "options": ["Endoparasites", "Ectoparasites", "Hyperparasites", "Brood parasites"],
  "correct": 1,
  "explanation": "NCERT states: 'Parasites that feed on the external surface of the host organism are called ectoparasites.'"
},
{
  "id": 266,
  "topic": "Parasitism",
  "q": "Which of the following are examples of <b>ectoparasites</b> as mentioned in NCERT?<br>(i) Lice on humans<br>(ii) Ticks on dogs<br>(iii) Copepods on marine fish<br>(iv) Liver fluke in humans<br><br>Select the correct option:",
  "options": ["(i), (ii) and (iii) only", "(i) and (ii) only", "(i), (ii), (iii) and (iv)", "(iii) and (iv) only"],
  "correct": 0,
  "explanation": "Lice on humans, ticks on dogs, and copepods on marine fish are all ectoparasites (external surface). Liver fluke is an endoparasite (lives inside the host)."
},
{
  "id": 267,
  "topic": "Parasitism",
  "q": "<b>Cuscuta</b> is a parasitic plant that has lost its:",
  "options": ["Chlorophyll only", "Leaves only", "Both chlorophyll and leaves", "Roots and stems"],
  "correct": 2,
  "explanation": "NCERT states: 'Cuscuta, a parasitic plant...has lost its chlorophyll and leaves in the course of evolution.' Students often mention only chlorophyll — it has lost BOTH."
},
{
  "id": 268,
  "topic": "Parasitism",
  "q": "Cuscuta is commonly found growing on:",
  "options": ["Large trees in forests", "Hedge plants", "Aquatic plants", "Desert shrubs"],
  "correct": 1,
  "explanation": "NCERT states: 'Cuscuta, a parasitic plant that is commonly found growing on hedge plants.'"
},
{
  "id": 269,
  "topic": "Parasitism",
  "q": "<b>Assertion (A):</b> The female mosquito is considered a parasite.<br><b>Reason (R):</b> The female mosquito needs blood for reproduction.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT explicitly states 'The female mosquito is not considered a parasite, although it needs our blood for reproduction.' Reason is correct — it does need blood for egg development. The mosquito is not a parasite because it doesn't live on/in the host."
},
{
  "id": 270,
  "topic": "Parasitism",
  "q": "<b>Endoparasites</b> live inside the host body at different sites including:<br>(i) Liver<br>(ii) Kidney<br>(iii) Lungs<br>(iv) Red blood cells<br><br>Which of the above are mentioned in NCERT?",
  "options": ["(i) and (ii) only", "(i), (ii) and (iii) only", "(iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 3,
  "explanation": "NCERT states: 'endoparasites are those that live inside the host body at different sites (liver, kidney, lungs, red blood cells, etc.).' All four are mentioned."
},
{
  "id": 271,
  "topic": "Parasitism",
  "q": "The life cycles of <b>endoparasites</b> are more complex because of:",
  "options": ["Their large body size", "Their extreme specialisation", "Their high mobility", "Their dependence on sunlight"],
  "correct": 1,
  "explanation": "NCERT states: 'The life cycles of endoparasites are more complex because of their extreme specialisation.'"
},
{
  "id": 272,
  "topic": "Parasitism",
  "q": "The morphological and anatomical features of endoparasites are:",
  "options": ["Highly complex and elaborate", "Greatly simplified while emphasising reproductive potential", "Identical to free-living organisms", "Focused on locomotion and sensory perception"],
  "correct": 1,
  "explanation": "NCERT states: 'Their morphological and anatomical features are greatly simplified while emphasising their reproductive potential.'"
},
{
  "id": 273,
  "topic": "Parasitism",
  "q": "<b>Brood parasitism</b> in birds involves:",
  "options": ["The parasitic bird building its own nest in the host's territory", "The parasitic bird laying its eggs in the nest of its host and letting the host incubate them", "The parasitic bird stealing food from the host's nest", "The parasitic bird killing the host's chicks"],
  "correct": 1,
  "explanation": "NCERT states: 'Brood parasitism in birds is a fascinating example of parasitism in which the parasitic bird lays its eggs in the nest of its host and lets the host incubate them.'"
},
{
  "id": 274,
  "topic": "Parasitism",
  "q": "In brood parasitism, the eggs of the parasitic bird have evolved to resemble the host's eggs in:",
  "options": ["Size only", "Colour only", "Size and colour", "Shape and weight"],
  "correct": 2,
  "explanation": "NCERT states: 'the eggs of the parasitic bird have evolved to resemble the host's egg in size and colour to reduce the chances of the host bird detecting the foreign eggs and ejecting them from the nest.'"
},
{
  "id": 275,
  "topic": "Parasitism",
  "q": "The eggs of the parasitic bird resemble the host's eggs to reduce the chances of:",
  "options": ["Predation by other birds", "The host bird detecting and ejecting the foreign eggs", "The eggs being damaged by weather", "Competition with the host's chicks"],
  "correct": 1,
  "explanation": "NCERT states: 'to reduce the chances of the host bird detecting the foreign eggs and ejecting them from the nest.'"
},
{
  "id": 276,
  "topic": "Parasitism",
  "q": "An example of brood parasitism mentioned in NCERT is:",
  "options": ["Eagle and sparrow", "Cuckoo (koel) and crow", "Parrot and pigeon", "Owl and robin"],
  "correct": 1,
  "explanation": "NCERT states: 'Try to follow the movements of the cuckoo (koel) and the crow in your neighborhood park during the breeding season.'"
},
{
  "id": 277,
  "topic": "Parasitism",
  "q": "The breeding season for observing brood parasitism between cuckoo and crow is:",
  "options": ["Autumn to winter", "Winter to spring", "Spring to summer", "Summer to autumn"],
  "correct": 2,
  "explanation": "NCERT states: 'follow the movements of the cuckoo (koel) and the crow...during the breeding season (spring to summer).'"
},
{
  "id": 278,
  "topic": "Parasitism",
  "q": "Consider the following statements:<br>Statement I: Endoparasites have complex morphological and anatomical features.<br>Statement II: Endoparasites emphasise their reproductive potential.<br><br>Choose the correct option:",
  "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 2,
  "explanation": "Statement I is incorrect — NCERT says endoparasites have GREATLY SIMPLIFIED (not complex) morphological and anatomical features. Statement II is correct — they emphasise reproductive potential."
},
{
  "id": 279,
  "topic": "Parasitism",
  "q": "<b>Assertion (A):</b> Parasites may render the host more vulnerable to predation.<br><b>Reason (R):</b> Parasites make the host physically weak.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'They might render the host more vulnerable to predation by making it physically weak.'"
},
{
  "id": 280,
  "topic": "Parasitism",
  "q": "Match the following:<br>(a) Ectoparasite on humans — (i) Copepods<br>(b) Ectoparasite on dogs — (ii) Cuscuta<br>(c) Ectoparasite on marine fish — (iii) Lice<br>(d) Parasitic plant — (iv) Ticks<br><br>Choose the correct match:",
  "options": ["(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)", "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)", "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)", "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)"],
  "correct": 0,
  "explanation": "Ectoparasite on humans = lice (iii); on dogs = ticks (iv); on marine fish = copepods (i); parasitic plant = Cuscuta (ii)."
},
{
  "id": 281,
  "topic": "Parasitism",
  "q": "Which of the following is an example of an <b>intermediate host</b> in the life cycle of the human liver fluke?",
  "options": ["Mosquito", "Snail", "Dog", "Crow"],
  "correct": 1,
  "explanation": "NCERT states the human liver fluke depends on 'two intermediate hosts (a snail and a fish).' Snail is one of the intermediate hosts."
},
{
  "id": 282,
  "topic": "Parasitism",
  "q": "Consider the following:<br>(i) Loss of digestive system<br>(ii) Development of strong locomotory organs<br>(iii) High reproductive capacity<br>(iv) Presence of adhesive organs or suckers<br><br>Which of the above are adaptations of parasites?",
  "options": ["(i), (iii) and (iv) only", "(i), (ii) and (iii) only", "(ii), (iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 0,
  "explanation": "NCERT mentions loss of sense organs, adhesive organs/suckers, loss of digestive system, and high reproductive capacity. Development of strong locomotory organs is NOT a parasite adaptation — parasites generally have reduced locomotion."
},
{
  "id": 283,
  "topic": "Parasitism",
  "q": "<b>Assertion (A):</b> Cuscuta is an ectoparasite of plants.<br><b>Reason (R):</b> Cuscuta has lost its chlorophyll and leaves and derives nutrition from the host plant.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct. Cuscuta grows on the external surface of the host plant (ectoparasite) and has lost chlorophyll and leaves, deriving nutrition from the host. R explains why Cuscuta is parasitic."
},
{
  "id": 284,
  "topic": "Parasitism",
  "q": "The human liver fluke belongs to the class:",
  "options": ["Cestoda", "Trematoda", "Nematoda", "Insecta"],
  "correct": 1,
  "explanation": "NCERT states: 'The human liver fluke (a trematode parasite)' — it belongs to class Trematoda."
},
{
  "id": 285,
  "topic": "Parasitism",
  "q": "Which of the following is the reason why <b>female mosquito is NOT considered a parasite</b>?",
  "options": ["It does not feed on blood", "It feeds on blood only temporarily and does not live on or in the host", "It only feeds on plant sap", "It is a predator, not a parasite"],
  "correct": 1,
  "explanation": "The female mosquito feeds on blood temporarily for egg development but does not live on or in the host permanently. A true parasite has a sustained association with the host. NCERT poses this as a thought question."
},
{
  "id": 286,
  "topic": "Parasitism",
  "q": "Consider the following:<br>Statement I: An ideal parasite should thrive within the host without harming it.<br>Statement II: Natural selection has led to the evolution of totally harmless parasites.<br><br>Choose the correct option:",
  "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 1,
  "explanation": "Statement I is presented as a concept in NCERT. Statement II is incorrect — NCERT poses the question 'why didn't natural selection lead to the evolution of such totally harmless parasites?' implying it hasn't happened."
},
{
  "id": 287,
  "topic": "Commensalism",
  "q": "In <b>commensalism</b>, the interaction between two species is such that:",
  "options": ["Both species benefit", "One species benefits and the other is harmed", "One species benefits and the other is neither harmed nor benefited", "Both species are harmed"],
  "correct": 2,
  "explanation": "NCERT states: 'This is the interaction in which one species benefits and the other is neither harmed nor benefited.'"
},
{
  "id": 288,
  "topic": "Commensalism",
  "q": "An orchid growing as an <b>epiphyte</b> on a mango branch is an example of:",
  "options": ["Parasitism", "Mutualism", "Commensalism", "Competition"],
  "correct": 2,
  "explanation": "NCERT states: 'An orchid growing as an epiphyte on a mango branch...benefit while neither the mango tree...derives any apparent benefit.' The orchid benefits (+) while mango is unaffected (0) = commensalism."
},
{
  "id": 289,
  "topic": "Commensalism",
  "q": "<b>Barnacles growing on the back of a whale</b> is an example of:",
  "options": ["Parasitism", "Mutualism", "Amensalism", "Commensalism"],
  "correct": 3,
  "explanation": "NCERT states barnacles benefit while 'neither the mango tree nor the whale derives any apparent benefit.' Barnacles on whale = commensalism (+/0)."
},
{
  "id": 290,
  "topic": "Commensalism",
  "q": "The <b>cattle egret and grazing cattle</b> association is a classic example of:",
  "options": ["Mutualism", "Commensalism", "Parasitism", "Amensalism"],
  "correct": 1,
  "explanation": "NCERT describes the cattle egret and grazing cattle as 'a classic example of commensalism.' Egrets benefit by catching insects flushed out by cattle movement."
},
{
  "id": 291,
  "topic": "Commensalism",
  "q": "The cattle egrets benefit from grazing cattle because:",
  "options": ["Cattle provide direct food to egrets", "Cattle, as they move, stir up and flush out insects from the vegetation", "Cattle protect egrets from predators", "Egrets feed on cattle parasites"],
  "correct": 1,
  "explanation": "NCERT states: 'the cattle, as they move, stir up and flush out insects from the vegetation that otherwise might be difficult for the egrets to find and catch.'"
},
{
  "id": 292,
  "topic": "Commensalism",
  "q": "In the interaction between <b>sea anemone and clown fish</b>:",
  "options": ["Both benefit equally (mutualism)", "The clown fish gets protection from predators while the anemone does not appear to benefit", "The sea anemone benefits while the clown fish is harmed", "Both are harmed by each other"],
  "correct": 1,
  "explanation": "NCERT states: 'The fish gets protection from predators which stay away from the stinging tentacles. The anemone does not appear to derive any benefit by hosting the clown fish.' This is commensalism."
},
{
  "id": 293,
  "topic": "Commensalism",
  "q": "The clown fish living among sea anemone's stinging tentacles gets protection from:",
  "options": ["Disease-causing pathogens", "Predators which stay away from the stinging tentacles", "Extreme water temperatures", "Water currents"],
  "correct": 1,
  "explanation": "NCERT states: 'The fish gets protection from predators which stay away from the stinging tentacles.'"
},
{
  "id": 294,
  "topic": "Commensalism",
  "q": "<b>Assertion (A):</b> The orchid growing on a mango tree is a parasite.<br><b>Reason (R):</b> The orchid derives its nutrition from the mango tree.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is incorrect", "Both A and R are incorrect"],
  "correct": 3,
  "explanation": "Both are incorrect. The orchid is an EPIPHYTE (not a parasite) — it uses the mango tree only for support, NOT for nutrition. The orchid makes its own food. This is commensalism, not parasitism."
},
{
  "id": 295,
  "topic": "Commensalism",
  "q": "Consider the following examples of commensalism from NCERT:<br>(i) Orchid on mango branch<br>(ii) Barnacles on whale<br>(iii) Cattle egret and grazing cattle<br>(iv) Sea anemone and clown fish<br><br>Which of the above are correct examples?",
  "options": ["(i) and (ii) only", "(i), (ii) and (iii) only", "(iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 3,
  "explanation": "All four are examples of commensalism as described in NCERT. In each case, one species benefits while the other is neither harmed nor benefited."
},
{
  "id": 296,
  "topic": "Parasitism",
  "q": "Consider the following:<br>Statement I: Ectoparasites live inside the host body.<br>Statement II: Endoparasites feed on the external surface of the host.<br><br>Choose the correct option:",
  "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 3,
  "explanation": "Both statements are incorrect — they are swapped. ECTOPARASITES feed on the EXTERNAL surface. ENDOPARASITES live INSIDE the host body. This is a very common NEET trap."
},
{
  "id": 297,
  "topic": "Commensalism",
  "q": "Match the following commensal relationships:<br>(a) Orchid — (i) Clown fish<br>(b) Barnacles — (ii) Cattle<br>(c) Cattle egret — (iii) Whale<br>(d) Sea anemone — (iv) Mango tree<br><br>Choose the correct match:",
  "options": ["(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)", "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)", "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)", "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)"],
  "correct": 0,
  "explanation": "Orchid — mango tree (iv); Barnacles — whale (iii); Cattle egret — cattle (ii); Sea anemone — clown fish (i)."
},
{
  "id": 298,
  "topic": "Parasitism",
  "q": "Which of the following statements about <b>brood parasitism</b> is INCORRECT?",
  "options": ["The parasitic bird lays eggs in the nest of the host", "The host incubates the parasitic bird's eggs", "The eggs of the parasitic bird have evolved to resemble the host's eggs in size and colour", "The parasitic bird builds its own nest alongside the host's nest"],
  "correct": 3,
  "explanation": "Option D is incorrect — the parasitic bird does NOT build its own nest. It lays eggs directly in the HOST's nest and lets the host incubate them."
},
{
  "id": 299,
  "topic": "Parasitism",
  "q": "<b>Assertion (A):</b> The life cycles of parasites are often complex, involving intermediate hosts or vectors.<br><b>Reason (R):</b> This facilitates parasitisation of the primary host.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'The life cycles of parasites are often complex, involving one or two intermediate hosts or vectors to facilitate parasitisation of its primary host.'"
},
{
  "id": 300,
  "topic": "Parasitism",
  "q": "Which of the following is correctly matched?",
  "options": ["Human liver fluke — one intermediate host (snail)", "Malarial parasite — two intermediate hosts (snail and fish)", "Human liver fluke — two intermediate hosts (snail and fish)", "Malarial parasite — two intermediate hosts (mosquito and snail)"],
  "correct": 2,
  "explanation": "Human liver fluke has TWO intermediate hosts — a snail and a fish. Malarial parasite needs a vector (mosquito), not two intermediate hosts."
},
{
  "id": 301,
  "topic": "Commensalism",
  "q": "<b>Assertion (A):</b> The interaction between cattle egret and grazing cattle is mutualism.<br><b>Reason (R):</b> The cattle, as they move, stir up and flush out insects benefiting the egret.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — it is COMMENSALISM (not mutualism) because the cattle does not derive any apparent benefit. Reason is correct — the cattle flush out insects that the egret feeds on."
},
{
  "id": 302,
  "topic": "Parasitism",
  "q": "Cuscuta derives its nutrition from:",
  "options": ["Soil through its own roots", "Photosynthesis using its own chlorophyll", "The host plant which it parasitises", "Atmospheric nitrogen fixation"],
  "correct": 2,
  "explanation": "NCERT states: 'It derives its nutrition from the host plant which it parasitises.' Cuscuta has lost its chlorophyll and leaves."
},
{
  "id": 303,
  "topic": "Parasitism",
  "q": "Which of the following organisms has BOTH lost chlorophyll AND leaves during evolution?",
  "options": ["Orchid", "Cuscuta", "Mistletoe", "Venus flytrap"],
  "correct": 1,
  "explanation": "NCERT specifically states Cuscuta 'has lost its chlorophyll and leaves in the course of evolution.' Orchids are epiphytes with chlorophyll."
},
{
  "id": 304,
  "topic": "Mutualism",
  "q": "Mutualism is an interaction that confers:",
  "options": ["Benefits to one species and harm to the other", "Benefits to both interacting species", "Harm to both interacting species", "Benefit to one and no effect on the other"],
  "correct": 1,
  "explanation": "NCERT states: 'This interaction confers benefits on both the interacting species.' Mutualism is a +/+ interaction."
},
{
  "id": 305,
  "topic": "Mutualism",
  "q": "<b>Lichens</b> represent an intimate mutualistic relationship between:",
  "options": ["A fungus and the roots of higher plants", "A fungus and photosynthesising algae or cyanobacteria", "Two species of algae", "An alga and a bryophyte"],
  "correct": 1,
  "explanation": "NCERT states: 'Lichens represent an intimate mutualistic relationship between a fungus and photosynthesising algae or cyanobacteria.'"
},
{
  "id": 306,
  "topic": "Mutualism",
  "q": "<b>Mycorrhizae</b> are associations between:",
  "options": ["Fungi and photosynthesising algae", "Fungi and the roots of higher plants", "Fungi and the stems of higher plants", "Two species of fungi"],
  "correct": 1,
  "explanation": "NCERT states: 'the mycorrhizae are associations between fungi and the roots of higher plants.'"
},
{
  "id": 307,
  "topic": "Mutualism",
  "q": "In mycorrhizal associations, the fungi help the plant in:",
  "options": ["Photosynthesis", "Absorption of essential nutrients from the soil", "Protection from predators", "Seed dispersal"],
  "correct": 1,
  "explanation": "NCERT states: 'The fungi help the plant in the absorption of essential nutrients from the soil.'"
},
{
  "id": 308,
  "topic": "Mutualism",
  "q": "In mycorrhizal associations, the plant provides the fungi with:",
  "options": ["Water and minerals", "Energy-yielding carbohydrates", "Nitrogen compounds", "Lipids and proteins"],
  "correct": 1,
  "explanation": "NCERT states: 'the plant in turn provides the fungi with energy-yielding carbohydrates.'"
},
{
  "id": 309,
  "topic": "Mutualism",
  "q": "<b>Assertion (A):</b> Mycorrhizae are mutualistic associations.<br><b>Reason (R):</b> Fungi help the plant absorb nutrients from soil while the plant provides carbohydrates to the fungi.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. The mutual benefit (nutrient absorption by fungi and carbohydrate supply by plant) makes it a mutualistic association."
},
{
  "id": 310,
  "topic": "Mutualism",
  "q": "Plants offer rewards to pollinators in the form of:",
  "options": ["Fruits and seeds", "Pollen and nectar", "Leaves and bark", "Roots and tubers"],
  "correct": 1,
  "explanation": "NCERT states: 'Plants offer rewards or fees in the form of pollen and nectar for pollinators and juicy and nutritious fruits for seed dispersers.'"
},
{
  "id": 311,
  "topic": "Mutualism",
  "q": "Plants offer rewards to <b>seed dispersers</b> in the form of:",
  "options": ["Pollen and nectar", "Juicy and nutritious fruits", "Thorns and spines", "Resin and latex"],
  "correct": 1,
  "explanation": "NCERT states: 'juicy and nutritious fruits for seed dispersers.' Pollen and nectar are for pollinators, not seed dispersers."
},
{
  "id": 312,
  "topic": "Mutualism",
  "q": "In plant-animal mutualism, 'cheaters' are:",
  "options": ["Pollinators that effectively transfer pollen", "Animals that try to steal nectar without aiding in pollination", "Plants that don't produce any reward", "Seed dispersers that eat the seeds"],
  "correct": 1,
  "explanation": "NCERT states: 'the mutually beneficial system should also be safeguarded against cheaters, for example, animals that try to steal nectar without aiding in pollination.'"
},
{
  "id": 313,
  "topic": "Mutualism",
  "q": "In many species of <b>fig trees</b>, there is a tight one-to-one relationship with:",
  "options": ["A species of butterfly", "A species of wasp", "A species of beetle", "A species of ant"],
  "correct": 1,
  "explanation": "NCERT states: 'In many species of fig trees, there is a tight one-to-one relationship with the pollinator species of wasp.'"
},
{
  "id": 314,
  "topic": "Mutualism",
  "q": "A given fig species can be pollinated only by:",
  "options": ["Any wasp species", "Its 'partner' wasp species and no other species", "Wind pollination", "Any insect visiting the flower"],
  "correct": 1,
  "explanation": "NCERT states: 'a given fig species can be pollinated only by its partner wasp species and no other species.'"
},
{
  "id": 315,
  "topic": "Mutualism",
  "q": "The female wasp uses the fig fruit as:",
  "options": ["Only a food source for adults", "An oviposition (egg-laying) site and uses developing seeds for nourishing its larvae", "A shelter from predators only", "A site for pupation only"],
  "correct": 1,
  "explanation": "NCERT states: 'The female wasp uses the fruit not only as an oviposition (egg-laying) site but uses the developing seeds within the fruit for nourishing its larvae.'"
},
{
  "id": 316,
  "topic": "Mutualism",
  "q": "The wasp pollinates the fig inflorescence while:",
  "options": ["Feeding on nectar", "Searching for suitable egg-laying sites", "Mating with other wasps", "Building its nest"],
  "correct": 1,
  "explanation": "NCERT states: 'The wasp pollinates the fig inflorescence while searching for suitable egg-laying sites.'"
},
{
  "id": 317,
  "topic": "Mutualism",
  "q": "In return for the favour of pollination, the fig offers the wasp:",
  "options": ["Nectar and pollen", "Some of its developing seeds as food for wasp larvae", "A permanent shelter", "Protection from predators"],
  "correct": 1,
  "explanation": "NCERT states: 'In return for the favour of pollination the fig offers the wasp some of its developing seeds, as food for the developing wasp larvae.'"
},
{
  "id": 318,
  "topic": "Mutualism",
  "q": "Consider the following statements about fig-wasp mutualism:<br>(i) The male wasp uses the fig fruit for oviposition.<br>(ii) A given fig species can be pollinated by any wasp species.<br>(iii) The fig offers some of its developing seeds to the wasp.<br>(iv) The wasp pollinates the fig while searching for egg-laying sites.<br><br>Which are correct?",
  "options": ["(i) and (ii) only", "(iii) and (iv) only", "(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)"],
  "correct": 1,
  "explanation": "Statement (i) is incorrect — the FEMALE wasp (not male) uses the fruit for oviposition. Statement (ii) is incorrect — only its specific partner wasp can pollinate a given fig species. Statements (iii) and (iv) are correct."
},
{
  "id": 319,
  "topic": "Mutualism",
  "q": "Orchids show a bewildering diversity of floral patterns that have evolved to attract:",
  "options": ["Butterflies and moths", "The right pollinator insect (bees and bumblebees)", "Birds and bats", "Wind currents for pollination"],
  "correct": 1,
  "explanation": "NCERT states: 'Orchids show a bewildering diversity of floral patterns many of which have evolved to attract the right pollinator insect (bees and bumblebees).'"
},
{
  "id": 320,
  "topic": "Mutualism",
  "q": "The Mediterranean orchid <b>Ophrys</b> employs which strategy to get pollination done?",
  "options": ["Offering abundant nectar", "Sexual deceit", "Wind pollination", "Attracting birds with bright colours"],
  "correct": 1,
  "explanation": "NCERT states: 'The Mediterranean orchid Ophrys employs sexual deceit to get pollination done by a species of bee.'"
},
{
  "id": 321,
  "topic": "Mutualism",
  "q": "In <b>Ophrys</b>, one petal of the flower bears an uncanny resemblance to:",
  "options": ["The male bee in size, colour and markings", "The female bee in size, colour and markings", "A wasp in shape and colour", "A butterfly in wing pattern"],
  "correct": 1,
  "explanation": "NCERT states: 'One petal of its flower bears an uncanny resemblance to the female of the bee in size, colour and markings.'"
},
{
  "id": 322,
  "topic": "Mutualism",
  "q": "In Ophrys pollination, the <b>male bee</b>:",
  "options": ["Feeds on the nectar of the orchid", "Is attracted to the flower petal resembling a female bee and pseudocopulates with it", "Lays eggs on the orchid flower", "Collects pollen deliberately for its hive"],
  "correct": 1,
  "explanation": "NCERT states: 'The male bee is attracted to what it perceives as a female, pseudocopulates with the flower, and during that process is dusted with pollen from the flower.'"
},
{
  "id": 323,
  "topic": "Mutualism",
  "q": "During '<b>pseudocopulation</b>' with the Ophrys flower, the male bee:",
  "options": ["Deposits pollen on the flower", "Is dusted with pollen from the flower", "Eats the flower petals", "Damages the ovary of the flower"],
  "correct": 1,
  "explanation": "NCERT states: 'pseudocopulates with the flower, and during that process is dusted with pollen from the flower.'"
},
{
  "id": 324,
  "topic": "Mutualism",
  "q": "When the same male bee '<b>pseudocopulates</b>' with another Ophrys flower, it:",
  "options": ["Collects more pollen", "Transfers pollen to it and thus pollinates the flower", "Lays eggs in the flower", "Destroys the flower"],
  "correct": 1,
  "explanation": "NCERT states: 'When this same bee pseudocopulates with another flower, it transfers pollen to it and thus, pollinates the flower.'"
},
{
  "id": 325,
  "topic": "Mutualism",
  "q": "<b>Assertion (A):</b> All orchids offer rewards (nectar/pollen) to their pollinators.<br><b>Reason (R):</b> The Mediterranean orchid Ophrys employs sexual deceit for pollination.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is incorrect but R is correct", "Both A and R are incorrect"],
  "correct": 2,
  "explanation": "Assertion is incorrect — NCERT explicitly states 'Not all orchids offer rewards.' Reason is correct — Ophrys uses sexual deceit (no reward) for pollination."
},
{
  "id": 326,
  "topic": "Mutualism",
  "q": "In the co-evolution of Ophrys and its bee pollinator, if the <b>female bee's colour patterns change</b> during evolution:",
  "options": ["Pollination will be enhanced", "Pollination success will be reduced unless the orchid co-evolves to maintain resemblance", "The orchid will switch to wind pollination", "The male bee will adapt immediately"],
  "correct": 1,
  "explanation": "NCERT states: 'If the female bee's colour patterns change even slightly for any reason during evolution, pollination success will be reduced unless the orchid flower co-evolves to maintain the resemblance of its petal to the female bee.'"
},
{
  "id": 327,
  "topic": "Mutualism",
  "q": "Consider the following:<br>Statement I: In Ophrys, the flower petal resembles the male bee.<br>Statement II: The female bee pseudocopulates with the Ophrys flower.<br><br>Choose the correct option:",
  "options": ["Both are correct", "Only Statement I is correct", "Only Statement II is correct", "Both are incorrect"],
  "correct": 3,
  "explanation": "Both are incorrect. Statement I is wrong — the petal resembles the FEMALE bee (not male). Statement II is wrong — the MALE bee (not female) pseudocopulates with the flower. This is one of the most common traps in NEET."
},
{
  "id": 328,
  "topic": "Mutualism",
  "q": "The most spectacular and evolutionarily fascinating examples of mutualism are found in:",
  "options": ["Animal-animal relationships", "Plant-animal relationships", "Microbe-microbe relationships", "Plant-plant relationships"],
  "correct": 1,
  "explanation": "NCERT states: 'The most spectacular and evolutionarily fascinating examples of mutualism are found in plant-animal relationships.'"
},
{
  "id": 329,
  "topic": "Mutualism",
  "q": "Plants need the help of animals for:",
  "options": ["Photosynthesis and respiration", "Pollinating their flowers and dispersing their seeds", "Nutrient absorption from soil", "Defence against other plants"],
  "correct": 1,
  "explanation": "NCERT states: 'Plants need the help of animals for pollinating their flowers and dispersing their seeds.'"
},
{
  "id": 330,
  "topic": "Mutualism",
  "q": "Match the following mutualistic associations:<br>(a) Lichens — (i) Fungi and roots of higher plants<br>(b) Mycorrhizae — (ii) Fungus and algae/cyanobacteria<br>(c) Fig-wasp — (iii) Orchid and bee (sexual deceit)<br>(d) Ophrys — (iv) Tight one-to-one pollination relationship<br><br>Choose the correct match:",
  "options": ["(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)", "(a)-(i), (b)-(ii), (c)-(iii), (d)-(iv)", "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)", "(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)"],
  "correct": 0,
  "explanation": "Lichens = fungus and algae/cyanobacteria (ii); Mycorrhizae = fungi and roots (i); Fig-wasp = tight one-to-one pollination (iv); Ophrys = sexual deceit by orchid with bee (iii)."
},
{
  "id": 331,
  "topic": "Mutualism",
  "q": "<b>Co-evolution</b> in plant-pollinator interactions refers to:",
  "options": ["Plants and pollinators evolving independently of each other", "The evolution of the flower and its pollinator species being tightly linked with one another", "Only the plant evolving while the pollinator remains unchanged", "Only the pollinator evolving while the plant remains unchanged"],
  "correct": 1,
  "explanation": "NCERT states: 'the evolutions of the flower and its pollinator species are tightly linked with one another.'"
},
{
  "id": 332,
  "topic": "Mutualism",
  "q": "Which of the following is <b>NOT</b> an example of mutualism?",
  "options": ["Lichens", "Mycorrhizae", "Fig-wasp relationship", "Barnacles on whale"],
  "correct": 3,
  "explanation": "Barnacles on whale is an example of COMMENSALISM (barnacles benefit, whale unaffected). Lichens, mycorrhizae, and fig-wasp are all examples of mutualism."
},
{
  "id": 333,
  "topic": "Mutualism",
  "q": "Consider the following statements:<br>(i) Lichens are mutualistic associations between fungus and algae/cyanobacteria.<br>(ii) Mycorrhizae are mutualistic associations between two species of fungi.<br>(iii) In mycorrhizae, fungi provide carbohydrates to the plant.<br><br>Which of the above are correct?",
  "options": ["(i) only", "(i) and (ii) only", "(ii) and (iii) only", "(i), (ii) and (iii)"],
  "correct": 0,
  "explanation": "Only (i) is correct. (ii) is incorrect — mycorrhizae are between fungi and roots of higher plants (not two fungi). (iii) is incorrect — the PLANT provides carbohydrates to the FUNGI (not vice versa)."
},
{
  "id": 334,
  "topic": "Mutualism",
  "q": "<b>Assertion (A):</b> Plant-animal interactions often involve co-evolution of the mutualists.<br><b>Reason (R):</b> The mutually beneficial system needs to be safeguarded against 'cheaters'.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT connects cheaters to co-evolution: 'the mutually beneficial system should also be safeguarded against cheaters...Now you can see why plant-animal interactions often involve co-evolution of the mutualists.'"
},
{
  "id": 335,
  "topic": "Mutualism",
  "q": "In the fig-wasp mutualism, which of the following uses the fig fruit for <b>oviposition</b>?",
  "options": ["Male wasp", "Female wasp", "Both male and female wasps", "Neither male nor female wasp"],
  "correct": 1,
  "explanation": "NCERT states: 'The female wasp uses the fruit not only as an oviposition (egg-laying) site...' Only the female wasp lays eggs."
},
{
  "id": 336,
  "topic": "Mutualism",
  "q": "Which of the following orchids does <b>NOT</b> offer any reward to its pollinator?",
  "options": ["All orchids offer rewards", "Mediterranean orchid Ophrys", "Orchids pollinated by bees", "Orchids pollinated by bumblebees"],
  "correct": 1,
  "explanation": "NCERT states: 'Not all orchids offer rewards. The Mediterranean orchid Ophrys employs sexual deceit to get pollination done.' Ophrys does not offer any reward."
},
{
  "id": 337,
  "topic": "Summary - Revision",
  "q": "As per the NCERT summary, ecology is concerned with how many levels of biological organisation?",
  "options": ["Three", "Four", "Five", "Six"],
  "correct": 1,
  "explanation": "NCERT summary states: 'It is concerned with four levels of biological organisation — organisms, populations, communities and biomes.'"
},
{
  "id": 338,
  "topic": "Summary - Revision",
  "q": "As per the NCERT summary, evolutionary changes through natural selection take place at:",
  "options": ["Individual level", "Community level", "Population level", "Ecosystem level"],
  "correct": 2,
  "explanation": "NCERT summary: 'Evolutionary changes through natural selection take place at the population level.'"
},
{
  "id": 339,
  "topic": "Summary - Revision",
  "q": "The shape of the age pyramid indicates whether a population is:",
  "options": ["Stationary, growing or declining", "Increasing, fluctuating or stable", "Young, mature or old", "Large, medium or small"],
  "correct": 0,
  "explanation": "NCERT summary uses the terms 'stationary, growing or declining.' Note: the summary uses 'stationary' instead of 'stable' used earlier in the chapter — both terms should be known."
},
{
  "id": 340,
  "topic": "Summary - Revision",
  "q": "According to the NCERT summary, the intrinsic rate of natural increase (r) is a measure of:",
  "options": ["The maximum population size", "The inherent potential of a population to grow", "The carrying capacity of the environment", "The death rate of the population"],
  "correct": 1,
  "explanation": "NCERT summary states: 'The intrinsic rate of natural increase (r) is a measure of the inherent potential of a population to grow.'"
},
{
  "id": 341,
  "topic": "Summary - Revision",
  "q": "According to the NCERT summary, when resources are unlimited the growth is usually:",
  "options": ["Logistic", "Exponential", "Linear", "Static"],
  "correct": 1,
  "explanation": "NCERT summary: 'When resources are unlimited, the growth is usually exponential but when resources become progressively limiting, the growth pattern turns logistic.'"
},
{
  "id": 342,
  "topic": "Summary - Revision",
  "q": "According to the NCERT summary, growth is ultimately limited by:",
  "options": ["The intrinsic rate of increase", "The birth rate", "The carrying capacity of the environment", "The immigration rate"],
  "correct": 2,
  "explanation": "NCERT summary: 'In either case, growth is ultimately limited by the carrying capacity of the environment.'"
},
{
  "id": 343,
  "topic": "Summary - Revision",
  "q": "Consider the following interactions and their outcomes as per NCERT summary:<br>(i) Competition — both species suffer<br>(ii) Predation — both species benefit<br>(iii) Commensalism — one benefits, other unaffected<br>(iv) Amensalism — one is harmed, other unaffected<br><br>Which are correctly matched?",
  "options": ["(i), (ii) and (iii) only", "(i), (iii) and (iv) only", "(ii), (iii) and (iv) only", "(i), (ii), (iii) and (iv)"],
  "correct": 1,
  "explanation": "Statement (ii) is incorrect — in predation, one benefits and the other SUFFERS (not both benefit). Statements (i), (iii) and (iv) are correctly matched."
},
{
  "id": 344,
  "topic": "Summary - Revision",
  "q": "According to the NCERT summary, predation is a very important process through which:",
  "options": ["Species diversity is reduced", "Trophic energy transfer is facilitated", "Competition is increased among prey", "Carrying capacity is determined"],
  "correct": 1,
  "explanation": "NCERT summary: 'Predation is a very important process through which trophic energy transfer is facilitated and some predators help in controlling their prey populations.'"
},
{
  "id": 345,
  "topic": "Summary - Revision",
  "q": "According to the NCERT summary, some of the most fascinating cases of mutualism in nature are seen in:",
  "options": ["Animal-animal interactions", "Microbe-microbe interactions", "Plant-pollinator interactions", "Predator-prey interactions"],
  "correct": 2,
  "explanation": "NCERT summary: 'Some of the most fascinating cases of mutualism in nature are seen in plant-pollinator interactions.'"
},
{
  "id": 346,
  "topic": "Summary - Revision",
  "q": "Populations grow through ______ and decline through ______:",
  "options": ["Deaths and emigration; births and immigration", "Births and immigration; deaths and emigration", "Births and emigration; deaths and immigration", "Deaths and immigration; births and emigration"],
  "correct": 1,
  "explanation": "NCERT summary: 'Populations grow through births and immigration and decline through deaths and emigration.'"
},
{
  "id": 347,
  "topic": "Summary - Revision",
  "q": "According to the NCERT summary, in competition it is presumed that:",
  "options": ["Both species co-exist indefinitely", "The superior competitor eliminates the inferior one", "Both species go extinct", "Neither species is affected"],
  "correct": 1,
  "explanation": "NCERT summary: 'In competition, it is presumed that the superior competitor eliminates the inferior one (the Competitive Exclusion Principle).'"
},
{
  "id": 348,
  "topic": "Summary - Revision",
  "q": "According to the NCERT summary, many closely related species have evolved various mechanisms to facilitate their:",
  "options": ["Extinction", "Competition", "Co-existence", "Emigration"],
  "correct": 2,
  "explanation": "NCERT summary: 'many closely related species have evolved various mechanisms which facilitate their co-existence.'"
},
{
  "id": 349,
  "topic": "Mutualism",
  "q": "<b>Assertion (A):</b> In Ophrys, the orchid must co-evolve if the female bee's colour patterns change.<br><b>Reason (R):</b> Pollination success depends on the resemblance of the orchid petal to the female bee.",
  "options": ["Both A and R are correct, and R is the correct explanation of A", "Both A and R are correct, but R is not the correct explanation of A", "A is correct but R is incorrect", "A is incorrect but R is correct"],
  "correct": 0,
  "explanation": "Both are correct and R explains A. NCERT states: 'If the female bee's colour patterns change even slightly... pollination success will be reduced unless the orchid flower co-evolves to maintain the resemblance of its petal to the female bee.'"
},
{
  "id": 350,
  "topic": "Mutualism",
  "q": "Which of the following is an example of <b>sexual deceit</b> in pollination?",
  "options": ["Fig-wasp mutualism", "Orchid Ophrys and bee", "Mycorrhizal association", "Lichen formation"],
  "correct": 1,
  "explanation": "NCERT states: 'The Mediterranean orchid Ophrys employs sexual deceit to get pollination done by a species of bee.' No other example of sexual deceit is mentioned."
}
];
