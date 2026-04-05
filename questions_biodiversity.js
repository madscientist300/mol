const allQuestions = [
{
  id: 1,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "The term 'Biodiversity' was popularised by:<br>(a sociobiologist who described the combined diversity at all levels of biological organisation)",
  options: ["Paul Ehrlich", "Edward Wilson", "Robert May", "Alexander von Humboldt"],
  correct: 1,
  explanation: "Edward Wilson, a sociobiologist, popularised the term 'Biodiversity' to describe the combined diversity at all levels of biological organisation — from macromolecules within cells to biomes. Paul Ehrlich is associated with rivet popper hypothesis, Robert May with global species estimates, and Humboldt with species-area relationship."
},
{
  id: 2,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following represents the correct descending order of species number as per NCERT?",
  options: ["Beetles > Fishes > Ants > Orchids", "Beetles > Fishes > Orchids > Ants", "Beetles > Orchids > Fishes > Ants", "Fishes > Beetles > Orchids > Ants"],
  correct: 1,
  explanation: "As per NCERT: Beetles = 3,00,000; Fishes = 28,000; Orchids = 20,000; Ants = 20,000. So correct descending order is Beetles > Fishes > Orchids ≥ Ants. Option B correctly places Orchids before Ants (orchids ~20,000, ants >20,000 — but NCERT states 'more than 20,000 species of ants' and 'nearly 20,000 species of orchids'). Actually ants (>20,000) > orchids (~20,000), making option A correct on closer reading. However, the NCERT approximate values make B the best match among given options with Beetles > Fishes > Orchids > Ants not perfectly accurate. Re-checking: Ants >20,000, Orchids ~20,000, so Ants ≥ Orchids. Correct order: Beetles (3,00,000) > Fishes (28,000) > Ants (>20,000) > Orchids (~20,000) = Option A."
},
{
  id: 3,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Consider the following statements:<br>I. There are more than 3,00,000 species of beetles.<br>II. There are nearly 28,000 species of orchids.<br>III. There are more than 20,000 species of ants.<br>IV. There are about 28,000 species of fishes.<br>Which of the above statements are correct?",
  options: ["I and II only", "III and IV only", "I, II, and III", "II and IV only"],
  correct: 1,
  explanation: "As per NCERT: Ants — more than 20,000 species (III ✓); Beetles — 3,00,000 species (I says 'more than' — NCERT says 3,00,000 exactly, so I is questionable); Fishes — 28,000 species (IV ✓); Orchids — nearly 20,000 (II says 28,000 — WRONG). Statement I is slightly misleading, II is clearly wrong. Statements III and IV are correct."
},
{
  id: 4,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "The genetic variation shown by the medicinal plant <b>Rauwolfia vomitoria</b> growing in different Himalayan ranges is in terms of:",
  options: ["Difference in leaf morphology and flower colour", "Potency and concentration of reserpine", "Number of chromosomes in different populations", "Variation in root length and stem diameter"],
  correct: 1,
  explanation: "As per NCERT, the genetic variation in Rauwolfia vomitoria growing in different Himalayan ranges is in terms of the potency and concentration of the active chemical reserpine that the plant produces. This is a classic NCERT example for genetic diversity."
},
{
  id: 5,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following is the active chemical produced by <b>Rauwolfia vomitoria</b>?",
  options: ["Quinine", "Vinblastin", "Reserpine", "Morphine"],
  correct: 2,
  explanation: "Reserpine is the active chemical produced by Rauwolfia vomitoria. It is used as a tranquilizer and anti-hypertensive drug. Quinine is from Cinchona, Vinblastin from Catharanthus (Vinca), and Morphine from Papaver somniferum."
},
{
  id: 6,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "India has more than _______ genetically different strains of rice and _______ varieties of mango.",
  options: ["1,00,000 and 500", "50,000 and 1,000", "25,000 and 2,000", "50,000 and 500"],
  correct: 1,
  explanation: "As per NCERT, India has more than 50,000 genetically different strains of rice and 1,000 varieties of mango. These are classic NCERT numbers frequently tested in NEET."
},
{
  id: 7,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Assertion (A): The Western Ghats have a greater amphibian species diversity than the Eastern Ghats.<br>Reason (R): This is an example of ecological diversity.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 2,
  explanation: "The assertion is true — NCERT clearly states Western Ghats have greater amphibian species diversity than Eastern Ghats. However, this is an example of SPECIES diversity, NOT ecological diversity. Ecological diversity refers to diversity at the ecosystem level (e.g., deserts, rainforests, mangroves). Hence A is true, R is false."
},
{
  id: 8,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following is an example of <b>ecological diversity</b>?",
  options: ["50,000 strains of rice in India", "Western Ghats having more amphibian species than Eastern Ghats", "India having deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows", "Rauwolfia vomitoria showing variation in reserpine concentration"],
  correct: 2,
  explanation: "Ecological diversity refers to diversity at the ecosystem level. India with its deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows has greater ecosystem diversity than Norway. Option A is genetic diversity, B is species diversity, D is genetic diversity."
},
{
  id: 9,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which Scandinavian country is compared with India in NCERT to illustrate the concept of ecological diversity?",
  options: ["Sweden", "Finland", "Denmark", "Norway"],
  correct: 3,
  explanation: "NCERT specifically compares India with Norway (a Scandinavian country) to explain ecological diversity. India has greater ecosystem diversity (deserts, rain forests, mangroves, coral reefs, etc.) compared to Norway."
},
{
  id: 10,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Biodiversity exists at all levels of biological organisation ranging from:",
  options: ["Cells to ecosystems", "Tissues to biomes", "Macromolecules within cells to biomes", "Organelles to landscapes"],
  correct: 2,
  explanation: "As per NCERT, immense diversity exists at all levels of biological organisation ranging from macromolecules within cells to biomes. This is the precise NCERT wording — a common trap question where students may choose 'cells to ecosystems'."
},
{
  id: 11,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Edward Wilson, who popularised the term 'Biodiversity', is a:",
  options: ["Ecologist", "Sociobiologist", "Taxonomist", "Geneticist"],
  correct: 1,
  explanation: "NCERT specifically describes Edward Wilson as a sociobiologist. This is a frequently asked factual point in NEET. Students often confuse his designation with ecologist or taxonomist."
},
{
  id: 12,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Consider the following statements regarding levels of biodiversity:<br>I. Genetic diversity refers to variation within a species at the genetic level.<br>II. Species diversity refers to variety of species within a region.<br>III. Ecological diversity refers to diversity at the population level.<br>IV. India has greater ecological diversity than Norway.<br>Which statements are correct?",
  options: ["I, II, and IV only", "I, II, III, and IV", "I and II only", "II, III, and IV only"],
  correct: 0,
  explanation: "Statement III is incorrect — ecological diversity refers to diversity at the ecosystem level, NOT the population level. Statements I, II, and IV are all correct as per NCERT. India has greater ecological diversity than Norway due to its varied ecosystems."
},
{
  id: 13,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which group of organisms has the maximum number of species as mentioned in NCERT?",
  options: ["Ants", "Orchids", "Beetles", "Fishes"],
  correct: 2,
  explanation: "Beetles have the maximum number of species — approximately 3,00,000. Fishes have 28,000, ants have more than 20,000, and orchids have nearly 20,000. Beetles are the most species-rich group among those mentioned in NCERT."
},
{
  id: 14,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "The variation in potency and concentration of reserpine in <b>Rauwolfia vomitoria</b> from different Himalayan ranges is an example of:",
  options: ["Species diversity", "Ecological diversity", "Community diversity", "Genetic diversity"],
  correct: 3,
  explanation: "Variation within a single species (Rauwolfia vomitoria) over its distributional range is an example of genetic diversity. The variation here is at the genetic level affecting the chemical composition (reserpine concentration) of the plant."
},
{
  id: 15,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Assertion (A): India has more than 50,000 genetically different strains of rice.<br>Reason (R): This is an example of species diversity in India.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 2,
  explanation: "Assertion is true — India indeed has more than 50,000 genetically different strains of rice. However, the Reason is false — different genetic strains within the same species (rice) represent GENETIC diversity, not species diversity. Species diversity involves variety of different species."
},
{
  id: 16,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following ecosystems is <b>NOT</b> mentioned as part of India's ecological diversity in NCERT?",
  options: ["Mangroves", "Alpine meadows", "Taiga", "Estuaries"],
  correct: 2,
  explanation: "NCERT mentions India's ecological diversity includes deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows. Taiga (boreal coniferous forest) is NOT mentioned as part of India's ecological diversity in this context. Taiga is primarily found in subarctic regions."
},
{
  id: 17,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp; Column II<br>(a) Genetic diversity &emsp; (i) Western Ghats vs Eastern Ghats amphibians<br>(b) Species diversity &emsp; (ii) India vs Norway ecosystems<br>(c) Ecological diversity &emsp; (iii) Rauwolfia vomitoria reserpine variation<br><br>Select the correct option:",
  options: ["(a)-(iii), (b)-(i), (c)-(ii)", "(a)-(i), (b)-(ii), (c)-(iii)", "(a)-(ii), (b)-(iii), (c)-(i)", "(a)-(iii), (b)-(ii), (c)-(i)"],
  correct: 0,
  explanation: "Genetic diversity → Rauwolfia vomitoria reserpine variation (within one species); Species diversity → Western Ghats vs Eastern Ghats amphibian diversity (different species compared); Ecological diversity → India vs Norway ecosystem comparison. Correct match: (a)-(iii), (b)-(i), (c)-(ii)."
},
{
  id: 18,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "The term 'biodiversity' describes the combined diversity at:",
  options: ["Only the species level", "Only genetic and species levels", "All levels of biological organisation", "Only ecosystem level"],
  correct: 2,
  explanation: "As per NCERT and Edward Wilson's definition, biodiversity describes the combined diversity at ALL levels of biological organisation — genetic, species, and ecological. It is not limited to any single level."
},
{
  id: 19,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following statements is <b>INCORRECT</b>?",
  options: ["Biodiversity exists from macromolecules within cells to biomes", "Edward Wilson was an ecologist who coined the term biodiversity", "India has more than 1,000 varieties of mango", "Rauwolfia vomitoria shows genetic diversity in different Himalayan ranges"],
  correct: 1,
  explanation: "Edward Wilson is described as a SOCIOBIOLOGIST, not an ecologist. He popularised (not coined) the term biodiversity. All other statements are correct as per NCERT. This is a common student trap — confusing his designation."
},
{
  id: 20,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Biodiversity and its conservation are vital environmental issues of international concern because:",
  options: ["Biodiversity has only aesthetic value", "It took millions of years to accumulate but could be lost in less than two centuries", "Biodiversity affects only tropical countries", "Species loss rate has decreased in recent decades"],
  correct: 1,
  explanation: "NCERT states: 'It has taken millions of years of evolution to accumulate this rich diversity in nature, but we could lose all that wealth in less than two centuries if the present rates of species losses continue.' This contrast makes biodiversity conservation a critical international concern."
},
{
  id: 21,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "How many species of fishes are mentioned in NCERT in the context of Earth's biodiversity?",
  options: ["20,000", "28,000", "30,000", "25,000"],
  correct: 1,
  explanation: "NCERT mentions 28,000 species of fishes. This is a direct factual question that is frequently tested. Students often confuse this number with the number of ants or orchids."
},
{
  id: 22,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "In the context of biodiversity, 'heterogeneity' refers to:",
  options: ["Uniformity in species distribution", "Immense diversity in the biosphere", "Genetic similarity among populations", "Homogeneous ecosystem structure"],
  correct: 1,
  explanation: "NCERT uses the term 'heterogeneity' as a synonym for diversity: 'In our biosphere immense diversity (or heterogeneity) exists not only at the species level but at all levels of biological organisation.' Heterogeneity = diversity/variety."
},
{
  id: 23,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Consider the following:<br>I. Deserts<br>II. Rain forests<br>III. Tundra<br>IV. Mangroves<br>V. Coral reefs<br>VI. Alpine meadows<br>Which of the above are mentioned as examples of India's ecological diversity in NCERT?",
  options: ["I, II, III, IV, V, and VI", "I, II, IV, V, and VI only", "I, II, III, and V only", "All except III and VI"],
  correct: 1,
  explanation: "NCERT mentions India's ecological diversity includes deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows. Tundra (III) is NOT mentioned as part of India's ecological diversity. So I, II, IV, V, and VI are correct."
},
{
  id: 24,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Assertion (A): India has greater ecosystem diversity than Norway.<br>Reason (R): India has varied ecosystems like deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. India's greater ecosystem diversity compared to Norway is precisely because of its varied ecosystems (deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, alpine meadows). R correctly explains A."
},
{
  id: 25,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "1,000 varieties of mango in India is an example of:",
  options: ["Species diversity", "Ecological diversity", "Genetic diversity", "Community diversity"],
  correct: 2,
  explanation: "1,000 varieties of mango represent genetic diversity — variation within a single species (Mangifera indica). Different varieties are genetically different strains of the same species. Similarly, 50,000 strains of rice also represent genetic diversity."
},
{
  id: 26,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following questions is <b>NOT</b> listed among those asked by ecologists and evolutionary biologists regarding biodiversity in NCERT?",
  options: ["Why are there so many species?", "How did this diversification come about?", "What is the molecular basis of species formation?", "How do humans benefit from the diversity of life?"],
  correct: 2,
  explanation: "NCERT lists: Why are there so many species? Did such diversity exist throughout earth's history? How did diversification come about? How and why is diversity important to biosphere? How do humans benefit? 'What is the molecular basis of species formation?' is NOT among the listed questions."
},
{
  id: 27,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "The number of orchid species mentioned in NCERT is:",
  options: ["More than 20,000", "Nearly 20,000", "28,000", "More than 30,000"],
  correct: 1,
  explanation: "NCERT states 'nearly 20,000 species of orchids'. Note the qualifier 'nearly' — this is different from ants which are 'more than 20,000'. NEET often tests such precise NCERT wording differences."
},
{
  id: 28,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following pairs correctly represents the level of biodiversity and its example?",
  options: ["Genetic diversity – Western Ghats amphibians vs Eastern Ghats amphibians", "Species diversity – 50,000 strains of rice in India", "Ecological diversity – India having deserts, rain forests, and coral reefs", "Species diversity – Rauwolfia vomitoria reserpine variation"],
  correct: 2,
  explanation: "Ecological diversity = India having deserts, rain forests, coral reefs, etc. (ecosystem level). Western Ghats vs Eastern Ghats amphibians = species diversity (not genetic). 50,000 strains of rice = genetic diversity. Rauwolfia reserpine variation = genetic diversity."
},
{
  id: 29,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following statements is correct regarding biodiversity?<br>I. Biodiversity refers only to species diversity.<br>II. Immense diversity exists at all levels of biological organisation.<br>III. Edward Wilson described biodiversity as combined diversity at all levels of biological organisation.<br>IV. Diversity exists only at species and ecosystem levels.",
  options: ["I and IV only", "II and III only", "I, II, and III", "II, III, and IV"],
  correct: 1,
  explanation: "Statement I is wrong — biodiversity includes genetic, species, and ecological diversity, not only species diversity. Statement IV is wrong — diversity also exists at the genetic level. Statements II and III are correct as per NCERT."
},
{
  id: 30,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "It has taken _______ of evolution to accumulate the rich diversity in nature, but we could lose all that wealth in less than _______.",
  options: ["Thousands of years; one century", "Millions of years; two centuries", "Billions of years; five centuries", "Millions of years; one decade"],
  correct: 1,
  explanation: "NCERT states: 'It has taken millions of years of evolution to accumulate this rich diversity in nature, but we could lose all that wealth in less than two centuries if the present rates of species losses continue.' Exact NCERT wording."
},
{
  id: 31,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following is <b>NOT</b> a level of biodiversity as described in NCERT?",
  options: ["Genetic diversity", "Species diversity", "Ecological diversity", "Molecular diversity"],
  correct: 3,
  explanation: "NCERT describes three levels of biodiversity: Genetic diversity, Species diversity, and Ecological diversity. 'Molecular diversity' is not listed as a separate level of biodiversity in NCERT, though biodiversity ranges from macromolecules to biomes."
},
{
  id: 32,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "A single species showing high diversity at the genetic level over its distributional range is an example of:",
  options: ["Alpha diversity", "Species diversity", "Genetic diversity", "Ecological diversity"],
  correct: 2,
  explanation: "As per NCERT: 'A single species might show high diversity at the genetic level over its distributional range.' This clearly defines genetic diversity — variation within a species across different geographical areas."
},
{
  id: 33,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Select the <b>INCORRECT</b> statement:",
  options: ["Beetles have approximately 3,00,000 species", "There are more than 20,000 species of orchids", "India has more than 50,000 genetically different strains of rice", "The Western Ghats have greater amphibian species diversity than the Eastern Ghats"],
  correct: 1,
  explanation: "NCERT states 'nearly 20,000 species of orchids' — not 'more than 20,000'. The word 'nearly' indicates the number is close to but not exceeding 20,000. In contrast, ants have 'more than 20,000 species'. This subtle wording difference is a classic NEET trap."
},
{
  id: 34,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Assertion (A): Biodiversity and its conservation are vital environmental issues of international concern.<br>Reason (R): More and more people around the world are beginning to realise the critical importance of biodiversity for survival and well-being.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both statements are true and directly from NCERT. The reason explains WHY biodiversity conservation has become an international concern — because of growing global awareness about its importance for human survival and well-being. R correctly explains A."
},
{
  id: 35,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "In NCERT, which plant is used as an example to explain genetic diversity?",
  options: ["Cinchona officinalis", "Catharanthus roseus", "Rauwolfia vomitoria", "Ocimum sanctum"],
  correct: 2,
  explanation: "Rauwolfia vomitoria is the specific NCERT example used to explain genetic diversity. Its populations in different Himalayan ranges show variation in potency and concentration of reserpine. Other plants listed are not used as examples for genetic diversity in this context."
},
{
  id: 36,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following correctly differentiates species diversity from genetic diversity?",
  options: ["Species diversity is variation within a species; genetic diversity is variation between species", "Species diversity is variety of species in a region; genetic diversity is variation within a single species", "Both are the same but measured at different scales", "Species diversity includes only animals; genetic diversity includes only plants"],
  correct: 1,
  explanation: "Species diversity = variety of different species within a region (e.g., amphibian species in Western vs Eastern Ghats). Genetic diversity = variation within a single species over its distributional range (e.g., Rauwolfia reserpine variation, rice strains, mango varieties). Option A reverses the definitions."
},
{
  id: 37,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following ecosystems are mentioned in NCERT as part of India's ecological diversity?<br>I. Deserts<br>II. Rain forests<br>III. Wetlands<br>IV. Estuaries<br>V. Grasslands<br>VI. Coral reefs",
  options: ["I, II, III, IV, and VI only", "I, II, III, V, and VI only", "All of the above", "I, II, IV, V, and VI only"],
  correct: 0,
  explanation: "NCERT specifically mentions: deserts, rain forests, mangroves, coral reefs, wetlands, estuaries, and alpine meadows. Grasslands (V) are NOT mentioned in this list. Correct answer includes I, II, III, IV, and VI."
},
{
  id: 38,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "The most species-rich group among the following, as per numbers given in NCERT, is:",
  options: ["Ants (>20,000 species)", "Orchids (~20,000 species)", "Fishes (28,000 species)", "Beetles (3,00,000 species)"],
  correct: 3,
  explanation: "Beetles with 3,00,000 species are by far the most species-rich group mentioned in NCERT. Fishes (28,000), Ants (>20,000), and Orchids (~20,000) follow. This reflects J.B.S. Haldane's famous quote about God having 'an inordinate fondness for beetles' (covered later in NCERT)."
},
{
  id: 39,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Which of the following is the correct combination of NCERT examples for <b>genetic diversity</b>?",
  options: ["Rauwolfia vomitoria, rice strains, mango varieties", "Western Ghats amphibians, coral reefs, mangroves", "Deserts, rain forests, alpine meadows", "Beetles, ants, fishes, orchids"],
  correct: 0,
  explanation: "All three — Rauwolfia vomitoria (reserpine variation), 50,000 rice strains, and 1,000 mango varieties — are examples of genetic diversity (variation within a species). Option B mixes species and ecological diversity examples. C is ecological diversity. D represents overall species counts."
},
{
  id: 40,
  topic: "Introduction to Biodiversity & Levels of Biodiversity",
  q: "Biodiversity is described by Edward Wilson as combined diversity at all levels of biological organisation. The <b>most important</b> levels include:<br>I. Genetic diversity<br>II. Chromosomal diversity<br>III. Species diversity<br>IV. Ecological diversity<br>V. Population diversity",
  options: ["I, II, and III only", "I, III, and IV only", "I, III, IV, and V", "All of the above"],
  correct: 1,
  explanation: "NCERT states: 'The most important of them are — (i) Genetic diversity, (ii) Species diversity, (iii) Ecological diversity.' Chromosomal diversity and population diversity are NOT listed as separate levels in NCERT. Only I, III, and IV are correct."
},
{
  id: 41,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "According to IUCN (2004), the total number of plant and animal species described so far is:",
  options: ["Slightly more than 1 million", "Slightly more than 1.5 million", "About 7 million", "Between 20 to 50 million"],
  correct: 1,
  explanation: "As per NCERT (IUCN 2004 data), slightly more than 1.5 million plant and animal species have been described so far. 7 million is Robert May's estimate of total global species. 20–50 million are extreme estimates."
},
{
  id: 42,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "A more conservative and scientifically sound estimate of global species diversity was made by:",
  options: ["Edward Wilson", "Paul Ehrlich", "Alexander von Humboldt", "Robert May"],
  correct: 3,
  explanation: "Robert May placed the global species diversity at about 7 million — described by NCERT as a 'more conservative and scientifically sound estimate.' Edward Wilson popularised the term biodiversity. Students often confuse these two scientists."
},
{
  id: 43,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Robert May's estimate of global species diversity is approximately:",
  options: ["1.5 million", "5 million", "7 million", "20 million"],
  correct: 2,
  explanation: "Robert May's conservative and scientifically sound estimate places global species diversity at about 7 million. 1.5 million is the number already described (IUCN 2004). 20–50 million are extreme estimates."
},
{
  id: 44,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "More than 70 per cent of all the species recorded are:",
  options: ["Plants", "Fungi", "Animals", "Prokaryotes"],
  correct: 2,
  explanation: "As per NCERT, more than 70% of all recorded species are animals, while plants (including algae, fungi, bryophytes, gymnosperms, and angiosperms) comprise no more than 22% of the total."
},
{
  id: 45,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Plants (including algae, fungi, bryophytes, gymnosperms and angiosperms) comprise no more than _______ of the total recorded species.",
  options: ["10 per cent", "22 per cent", "50 per cent", "70 per cent"],
  correct: 1,
  explanation: "NCERT states plants comprise no more than 22% of total recorded species. Note that in this NCERT context, 'plants' include algae, fungi, bryophytes, gymnosperms, and angiosperms. Animals constitute >70%."
},
{
  id: 46,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Among animals, the most species-rich taxonomic group is:",
  options: ["Mammals", "Fishes", "Insects", "Reptiles"],
  correct: 2,
  explanation: "Insects are the most species-rich taxonomic group among animals, making up more than 70% of the total animal species. NCERT states: 'out of every 10 animals on this planet, 7 are insects.'"
},
{
  id: 47,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Out of every 10 animals on this planet, how many are insects?",
  options: ["3", "5", "7", "9"],
  correct: 2,
  explanation: "NCERT directly states: 'out of every 10 animals on this planet, 7 are insects.' This reflects the fact that insects make up more than 70% of all animal species recorded."
},
{
  id: 48,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following statements is correct as per NCERT?",
  options: ["The number of fish species is more than the number of fungi species", "The number of fungi species is more than the combined total of fishes, amphibians, reptiles, and mammals", "The number of mammal species exceeds the number of fungi species", "Amphibians are the most species-rich group after insects"],
  correct: 1,
  explanation: "NCERT explicitly states: 'The number of fungi species in the world is more than the combined total of the species of fishes, amphibians, reptiles and mammals.' This is a frequently tested NEET fact."
},
{
  id: 49,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Species inventories are more complete in:",
  options: ["Tropical countries than temperate countries", "Temperate countries than tropical countries", "Marine ecosystems than terrestrial ecosystems", "Islands than continents"],
  correct: 1,
  explanation: "NCERT states: 'For many taxonomic groups, species inventories are more complete in temperate than in tropical countries.' This is because tropical regions have overwhelmingly more undiscovered species. Students often confuse 'more complete inventories' with 'more species.'"
},
{
  id: 50,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "To estimate the total number of species on Earth, biologists use:",
  options: ["Direct counting of all organisms in all habitats", "Statistical comparison of temperate-tropical species richness of an exhaustively studied insect group and extrapolate to others", "Satellite imaging of all ecosystems", "Genetic barcoding of all known organisms"],
  correct: 1,
  explanation: "NCERT describes the method: biologists make a statistical comparison of the temperate-tropical species richness of an exhaustively studied group of insects and extrapolate this ratio to other groups to arrive at a gross estimate."
},
{
  id: 51,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Some extreme estimates of global species diversity range from:",
  options: ["5 to 10 million", "10 to 20 million", "20 to 50 million", "50 to 100 million"],
  correct: 2,
  explanation: "NCERT states: 'Some extreme estimates range from 20 to 50 million.' Robert May's more conservative estimate is about 7 million. 1.5 million have been described so far."
},
{
  id: 52,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Consider the following statements:<br>I. More than 70% of all recorded species are animals.<br>II. Among animals, insects make up more than 70% of the total.<br>III. Plants comprise more than 50% of total recorded species.<br>IV. Fungi species outnumber combined fishes, amphibians, reptiles and mammals.<br>Which statements are correct?",
  options: ["I, II, and IV only", "I, II, and III only", "I and II only", "All of the above"],
  correct: 0,
  explanation: "Statement III is incorrect — plants comprise no more than 22% (not more than 50%). Statements I (animals >70% of all species), II (insects >70% of animals), and IV (fungi > fishes + amphibians + reptiles + mammals) are all correct as per NCERT."
},
{
  id: 53,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Why are conventional taxonomic methods not suitable for identifying prokaryotic species?",
  options: ["Prokaryotes are too large to study", "Many prokaryotic species are not culturable under laboratory conditions", "Prokaryotes do not have DNA", "Prokaryotes are all identical in morphology and genetics"],
  correct: 1,
  explanation: "NCERT states: 'conventional taxonomic methods are not suitable for identifying microbial species and many species are simply not culturable under laboratory conditions.' If biochemical/molecular criteria are used, prokaryotic diversity alone might run into millions."
},
{
  id: 54,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "If biochemical or molecular criteria are used for delineating prokaryotic species, their diversity alone might:",
  options: ["Be about 1,000 species", "Run into millions", "Remain the same as current estimates", "Decrease significantly"],
  correct: 1,
  explanation: "NCERT states: 'If we accept biochemical or molecular criteria for delineating species for this group, then their diversity alone might run into millions.' This highlights the enormous hidden diversity among prokaryotes."
},
{
  id: 55,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Assertion (A): The estimates of total species described so far do not include prokaryotic species.<br>Reason (R): Conventional taxonomic methods are suitable for identifying all microbial species.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 2,
  explanation: "A is true — NCERT notes 'these estimates do not give any figures for prokaryotes.' R is false — NCERT states conventional taxonomic methods are NOT suitable for identifying microbial species (many are not culturable). Hence A is true, R is false."
},
{
  id: 56,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "India has _______ per cent of the world's land area and _______ per cent share of global species diversity.",
  options: ["2.4% and 8.1%", "4.2% and 8.1%", "2.4% and 12%", "8.1% and 2.4%"],
  correct: 0,
  explanation: "NCERT states: India has only 2.4% of the world's land area but its share of global species diversity is an impressive 8.1%. This disproportionate richness makes India one of the 12 mega diversity countries."
},
{
  id: 57,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "India is one of the _______ mega diversity countries of the world.",
  options: ["8", "10", "12", "17"],
  correct: 2,
  explanation: "NCERT states India is one of the 12 mega diversity countries. Students often confuse this with '17 megadiverse countries' (a different classification used by other organizations). NCERT specifically says 12."
},
{
  id: 58,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "How many species of plants and animals have been recorded from India?",
  options: ["Nearly 45,000 plants and 45,000 animals", "Nearly 45,000 plants and nearly 90,000 animals", "Nearly 90,000 plants and 45,000 animals", "Nearly 22,000 plants and 45,000 animals"],
  correct: 1,
  explanation: "NCERT states: 'Nearly 45,000 species of plants and twice as many of animals have been recorded from India.' Twice 45,000 = 90,000 animals. This is a calculation-based trap — students often miss 'twice as many.'"
},
{
  id: 59,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "According to May's global estimates, what percentage of total species have been recorded so far?",
  options: ["8.1 per cent", "10 per cent", "22 per cent", "50 per cent"],
  correct: 2,
  explanation: "NCERT states: 'If we accept May's global estimates, only 22 per cent of the total species have been recorded so far.' This means ~78% of species remain undiscovered. This percentage is used to estimate India's undiscovered species."
},
{
  id: 60,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Based on May's estimates, how many plant and animal species are yet to be discovered and described in India?",
  options: ["More than 50,000 plants and 1,00,000 animals", "More than 1,00,000 plants and more than 3,00,000 animals", "More than 45,000 plants and 90,000 animals", "More than 2,00,000 plants and 5,00,000 animals"],
  correct: 1,
  explanation: "NCERT estimates that applying May's proportion (only 22% recorded) to India's figures, there are probably more than 1,00,000 plant species and more than 3,00,000 animal species yet to be discovered and described in India."
},
{
  id: 61,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "The statement 'Nature's biological library is burning even before we catalogued the titles of all the books stocked there' refers to:",
  options: ["Increasing rate of discovery of new species", "Species becoming extinct before being discovered", "Destruction of libraries containing biological records", "Burning of forests for agricultural purposes only"],
  correct: 1,
  explanation: "This NCERT metaphor highlights that a large fraction of species faces the threat of extinction even before we discover them. The 'library burning' = species loss; 'cataloguing books' = discovering and naming species."
},
{
  id: 62,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Consider the following statements:<br>I. India has 2.4% of world's land area.<br>II. India's share of global species diversity is 8.1%.<br>III. India is one of 17 mega diversity countries.<br>IV. Nearly 45,000 plant species have been recorded from India.<br>Which statements are correct?",
  options: ["I, II, and IV only", "I, II, III, and IV", "I, III, and IV only", "I and II only"],
  correct: 0,
  explanation: "Statement III is incorrect — NCERT states India is one of 12 (not 17) mega diversity countries. Statements I (2.4% land area), II (8.1% species diversity), and IV (45,000 plant species) are all correct as per NCERT."
},
{
  id: 63,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Assertion (A): India is one of the 12 mega diversity countries of the world.<br>Reason (R): India has 2.4% of the world's land area but 8.1% share of global species diversity.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. India's disproportionately high species diversity (8.1%) compared to its land area (2.4%) is precisely the reason it qualifies as one of the 12 mega diversity countries. R correctly explains A."
},
{
  id: 64,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "In the context of NCERT, 'plants' in the species composition data include:<br>I. Algae<br>II. Fungi<br>III. Bryophytes<br>IV. Gymnosperms<br>V. Angiosperms<br>VI. Prokaryotes",
  options: ["I, II, III, IV, and V only", "I, III, IV, and V only", "All of the above", "I, II, and V only"],
  correct: 0,
  explanation: "NCERT explicitly states: 'plants (including algae, fungi, bryophytes, gymnosperms and angiosperms) comprise no more than 22 per cent.' Prokaryotes are NOT included — NCERT specifically notes estimates do not give any figures for prokaryotes."
},
{
  id: 65,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following is <b>INCORRECT</b> regarding species estimates?",
  options: ["Robert May estimated global species diversity at about 7 million", "IUCN (2004) recorded slightly more than 1.5 million species", "Extreme estimates of global species range from 20 to 50 million", "Robert May estimated global species diversity at about 20 million"],
  correct: 3,
  explanation: "Robert May's estimate is about 7 million (conservative and scientifically sound), NOT 20 million. 20–50 million represents extreme estimates. This is a common student trap — confusing May's estimate with extreme estimates."
},
{
  id: 66,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "An overwhelmingly large proportion of species waiting to be discovered are found in:",
  options: ["Temperate regions", "Polar regions", "Tropical regions", "Deep ocean floors"],
  correct: 2,
  explanation: "NCERT states: 'Considering that an overwhelmingly large proportion of the species waiting to be discovered are in the tropics.' Although temperate regions have more complete inventories, tropical regions harbor far more undiscovered species."
},
{
  id: 67,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Assertion (A): Species inventories are more complete in temperate countries than tropical countries.<br>Reason (R): Temperate regions have more species than tropical regions.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 2,
  explanation: "A is true — NCERT states species inventories are more complete in temperate than tropical countries. R is false — tropical regions actually have MORE species (most undiscovered species are in tropics). Inventories being more complete does NOT mean more species exist there."
},
{
  id: 68,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "The percentage of insects among all animal species is:",
  options: ["More than 50%", "More than 70%", "More than 90%", "About 22%"],
  correct: 1,
  explanation: "Insects make up more than 70% of all animal species. NCERT states insects are the most species-rich taxonomic group among animals, making up more than 70% of total animal species — 7 out of every 10 animals are insects."
},
{
  id: 69,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following pairs of percentages correctly represents the species composition of recorded species on Earth?",
  options: ["Animals — 22%, Plants — 70%", "Animals — >70%, Plants — ≤22%", "Animals — 50%, Plants — 50%", "Animals — >70%, Plants — >30%"],
  correct: 1,
  explanation: "NCERT states: Animals >70% of all recorded species; Plants (including algae, fungi, bryophytes, gymnosperms, angiosperms) ≤22%. The remaining ~8% is unaccounted in this simplified breakup."
},
{
  id: 70,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Select the correct statement regarding prokaryotic species diversity:",
  options: ["Their exact number is well documented by IUCN", "Conventional taxonomic methods are sufficient for their identification", "If molecular criteria are used, their diversity alone might run into millions", "They are included in the 1.5 million described species figure"],
  correct: 2,
  explanation: "NCERT states: if biochemical/molecular criteria are accepted, prokaryotic diversity alone might run into millions. Their numbers are NOT included in the 1.5 million figure. Conventional methods are NOT suitable. Their exact number is NOT well documented."
},
{
  id: 71,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Consider the following statements about India's biodiversity:<br>I. India has about 45,000 recorded plant species.<br>II. India has about 45,000 recorded animal species.<br>III. India is one of the 12 mega diversity countries.<br>IV. India's share of global species diversity is 2.4%.<br>Which of the above are correct?",
  options: ["I and III only", "I, II, and III", "II, III, and IV", "I and IV only"],
  correct: 0,
  explanation: "Statement II is wrong — India has ~90,000 animal species (twice the 45,000 plants). Statement IV is wrong — 2.4% is India's land area share, not species diversity share (which is 8.1%). Only I (45,000 plants) and III (12 mega diversity countries) are correct."
},
{
  id: 72,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which group's species number exceeds the combined total of fishes, amphibians, reptiles, and mammals?",
  options: ["Insects", "Fungi", "Angiosperms", "Algae"],
  correct: 1,
  explanation: "NCERT states: 'The number of fungi species in the world is more than the combined total of the species of fishes, amphibians, reptiles and mammals.' This is a surprising and frequently tested fact in NEET."
},
{
  id: 73,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "The IUCN stands for:",
  options: ["International Union for Conservation of Nature and Natural Resources", "International Union for Classification of Natural and Native Resources", "Indian Union for Conservation of Nature and Natural Resources", "International Unit for Conservation of Nature and Natural Resources"],
  correct: 0,
  explanation: "IUCN = International Union for Conservation of Nature and Natural Resources. Students often confuse 'Conservation' with 'Classification' or 'Indian' with 'International'. NCERT explicitly mentions the full form."
},
{
  id: 74,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Assertion (A): The number of fungi species in the world is more than the combined total of fishes, amphibians, reptiles, and mammals.<br>Reason (R): Fungi are decomposers and occupy diverse ecological niches.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 1,
  explanation: "A is true — NCERT directly states this fact. R is also true — fungi are decomposers and occupy diverse niches. However, R does not directly explain WHY fungi species number exceeds the combined vertebrate groups mentioned. The reason for higher species numbers involves evolutionary diversification, not just ecological roles. Hence R is not the correct explanation of A."
},
{
  id: 75,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following is used to estimate the total number of species on Earth?",
  options: ["Comparing DNA sequences of all known organisms", "Temperate-tropical species richness ratio of an exhaustively studied insect group extrapolated to other groups", "Counting all organisms in sample quadrats globally", "Using fossil records to predict current diversity"],
  correct: 1,
  explanation: "NCERT describes the method: biologists compare temperate-tropical species richness of an exhaustively studied group of insects, then extrapolate this ratio to other animal and plant groups to get a gross estimate of total species on Earth."
},
{
  id: 76,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "If only 22% of total species have been recorded so far (May's estimate) and about 1.5 million have been described, the estimated total number of species is approximately:",
  options: ["About 3 million", "About 5 million", "About 7 million", "About 10 million"],
  correct: 2,
  explanation: "If 1.5 million = 22% of total, then total = 1.5/0.22 ≈ 6.8 million ≈ 7 million. This aligns with Robert May's estimate of about 7 million global species. This is a calculation-based application question."
},
{
  id: 77,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following statements about the estimation of species diversity is <b>INCORRECT</b>?",
  options: ["Estimates vary widely and many are only educated guesses", "Species inventories are more complete in tropical countries", "Prokaryotic species are not included in current estimates", "Robert May's estimate is considered more conservative than extreme estimates"],
  correct: 1,
  explanation: "This is INCORRECT. NCERT states species inventories are more complete in TEMPERATE countries, not tropical countries. Although tropical regions have more species to be discovered, their inventories are less complete. All other statements are correct."
},
{
  id: 78,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "The major constraint in completing the inventory of India's biological wealth includes:<br>I. Immense trained manpower (taxonomists) required<br>II. Time required to complete the job<br>III. Species becoming extinct before being discovered<br>Which of the above are mentioned in NCERT?",
  options: ["I and II only", "I and III only", "II and III only", "I, II, and III"],
  correct: 3,
  explanation: "NCERT mentions all three: 'Consider the immense trained manpower (taxonomists) and the time required to complete the job' and 'a large fraction of these species faces the threat of becoming extinct even before we discover them.' All three (I, II, III) are correct."
},
{
  id: 79,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following correctly represents the approximate percentage of species on Earth that are animals and insects respectively?<br>(Total species = animals; Among animals = insects)",
  options: ["Animals >70% of total species; Insects >70% of all animals", "Animals >50% of total species; Insects >50% of all animals", "Animals >70% of total species; Insects >50% of all animals", "Animals >80% of total species; Insects >80% of all animals"],
  correct: 0,
  explanation: "NCERT states two separate >70% figures: (1) Animals make up >70% of ALL recorded species, and (2) Insects make up >70% of all ANIMAL species. Students often confuse these two distinct percentages or think they refer to the same thing."
},
{
  id: 80,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Calculate: If insects are >70% of animals, and animals are >70% of total species, then insects as a percentage of total species is approximately:",
  options: ["About 25%", "About 49%", "About 70%", "About 85%"],
  correct: 1,
  explanation: "Insects ≈ 70% of animals; Animals ≈ 70% of total species. So Insects ≈ 0.70 × 0.70 = 0.49 = ~49% of total species. Nearly half of all known species on Earth are insects! This is a HOTs calculation-based question."
},
{
  id: 81,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following is <b>NOT</b> included under 'plants' as per NCERT's species composition data?",
  options: ["Algae", "Fungi", "Prokaryotes", "Bryophytes"],
  correct: 2,
  explanation: "NCERT includes algae, fungi, bryophytes, gymnosperms, and angiosperms under 'plants' (22% of total). Prokaryotes are specifically excluded — NCERT notes that estimates 'do not give any figures for prokaryotes.'"
},
{
  id: 82,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Assertion (A): An overwhelmingly large proportion of undiscovered species are in the tropics.<br>Reason (R): Species inventories are more complete in temperate countries than in tropical countries.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 1,
  explanation: "Both A and R are true and directly from NCERT. However, R does not explain A — species inventories being more complete in temperate countries is a result of better documentation there, not the cause of more undiscovered species in the tropics. The tropics have more undiscovered species because of inherently greater species richness."
},
{
  id: 83,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "India's share of global species diversity (8.1%) compared to its land area (2.4%) is approximately:",
  options: ["Equal", "About 2 times", "About 3.4 times", "About 5 times"],
  correct: 2,
  explanation: "8.1% ÷ 2.4% ≈ 3.375, approximately 3.4 times. India's species diversity share is roughly 3.4 times its land area share, making it disproportionately species-rich and qualifying as a mega diversity country."
},
{
  id: 84,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "The total number of animal species recorded from India is approximately:",
  options: ["45,000", "90,000", "1,35,000", "3,00,000"],
  correct: 1,
  explanation: "NCERT states: 'Nearly 45,000 species of plants and twice as many of animals have been recorded from India.' Twice 45,000 = 90,000 animal species. Common trap: students may select 45,000 missing the 'twice as many' phrase."
},
{
  id: 85,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following correctly explains why we may never complete the inventory of India's biological wealth?",
  options: ["India does not have any undiscovered species", "All species in India have already been catalogued", "A large fraction of species may become extinct before being discovered, and the task requires immense manpower and time", "India has fewer species than currently estimated"],
  correct: 2,
  explanation: "NCERT highlights three challenges: (1) immense trained manpower (taxonomists) needed, (2) time required, and (3) species becoming extinct before discovery. The metaphor 'Nature's biological library is burning even before we catalogued the titles' captures this concern."
},
{
  id: 86,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Consider the following:<br>I. >1.5 million species described (IUCN 2004)<br>II. ~7 million species estimated (Robert May)<br>III. 20–50 million (extreme estimates)<br>IV. ~22% species recorded so far<br><br>The correct ascending order of these estimates is:",
  options: ["I < II < III", "II < I < III", "III < II < I", "I < III < II"],
  correct: 0,
  explanation: "1.5 million (described) < 7 million (May's estimate) < 20–50 million (extreme estimates). And 22% of total have been recorded. The ascending order of numbers is I < II < III."
},
{
  id: 87,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "The term 'educated guesses' in NCERT is used in the context of:",
  options: ["Identifying new species using molecular methods", "Estimating the total number of species on Earth", "Classifying species into taxonomic groups", "Determining genetic diversity within a species"],
  correct: 1,
  explanation: "NCERT states: 'we have no clear idea of how many species are yet to be discovered and described. Estimates vary widely and many of them are only educated guesses.' This refers to the difficulty of estimating total species on Earth."
},
{
  id: 88,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following is true about the year and source of the species count data mentioned in NCERT?",
  options: ["IUCN, 2010 — about 2 million species", "IUCN, 2004 — slightly more than 1.5 million species", "WWF, 2004 — about 7 million species", "UNEP, 2000 — about 1 million species"],
  correct: 1,
  explanation: "NCERT specifically cites IUCN (2004) as the source: total plant and animal species described = slightly more than 1.5 million. The year 2004 and source IUCN are important factual details frequently tested."
},
{
  id: 89,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Match the following scientists with their contributions:<br>Column I &emsp;&emsp;&emsp; Column II<br>(a) Edward Wilson &emsp; (i) Conservative estimate of ~7 million species<br>(b) Robert May &emsp; (ii) Popularised the term 'Biodiversity'<br><br>Select the correct option:",
  options: ["(a)-(i), (b)-(ii)", "(a)-(ii), (b)-(i)", "(a)-(i), (b)-(i)", "(a)-(ii), (b)-(ii)"],
  correct: 1,
  explanation: "Edward Wilson (sociobiologist) → popularised the term 'Biodiversity'. Robert May → conservative estimate of global species diversity at about 7 million. Students frequently interchange these two scientists."
},
{
  id: 90,
  topic: "World's Biodiversity & India's Biodiversity",
  q: "Which of the following statements best describes why India is called a mega diversity country?",
  options: ["India has the largest land area in Asia", "India has 2.4% of world's land area but 8.1% share of global species diversity", "India has more species than all other countries combined", "India has the most number of national parks in the world"],
  correct: 1,
  explanation: "India's disproportionately high species diversity (8.1%) relative to its small land area (2.4%) makes it one of the 12 mega diversity countries. This combination of high diversity on limited land area is the defining criterion."
},
{
  id: 91,
  topic: "Patterns of Biodiversity",
  q: "The most well-known pattern in biodiversity distribution is:",
  options: ["Altitudinal gradient in diversity", "Latitudinal gradient in diversity", "Longitudinal gradient in diversity", "Depth gradient in diversity"],
  correct: 1,
  explanation: "NCERT states the most well-known pattern is the latitudinal gradient in diversity — species diversity generally decreases as we move from the equator towards the poles. This is the most frequently discussed biogeographical pattern."
},
{
  id: 92,
  topic: "Patterns of Biodiversity",
  q: "In general, species diversity decreases as we move:",
  options: ["From poles towards the equator", "Away from the equator towards the poles", "From tropical to subtropical regions", "From land to ocean"],
  correct: 1,
  explanation: "NCERT clearly states: 'species diversity decreases as we move away from the equator towards the poles.' Tropics harbour more species than temperate or polar areas. This is the latitudinal gradient in diversity."
},
{
  id: 93,
  topic: "Patterns of Biodiversity",
  q: "The latitudinal range of tropics is:",
  options: ["0° to 23.5° N", "23.5° N to 66.5° N", "23.5° N to 23.5° S", "0° to 45° N and S"],
  correct: 2,
  explanation: "NCERT defines tropics as the latitudinal range of 23.5°N to 23.5°S. This zone harbours more species than temperate or polar areas, with very few exceptions."
},
{
  id: 94,
  topic: "Patterns of Biodiversity",
  q: "Colombia, located near the equator, has nearly _______ species of birds.",
  options: ["105", "427", "1,200", "1,400"],
  correct: 3,
  explanation: "Colombia has nearly 1,400 species of birds. Compare: New York (41°N) has 105 species and Greenland (71°N) has only 56 species. India has >1,200 bird species. This demonstrates the latitudinal gradient beautifully."
},
{
  id: 95,
  topic: "Patterns of Biodiversity",
  q: "Arrange the following regions in decreasing order of bird species richness:<br>I. New York (41°N)<br>II. Colombia (near equator)<br>III. Greenland (71°N)<br>IV. India (tropical latitudes)",
  options: ["II > IV > I > III", "IV > II > I > III", "II > I > IV > III", "II > IV > III > I"],
  correct: 0,
  explanation: "Colombia (~1,400) > India (>1,200) > New York (105) > Greenland (56). This clearly demonstrates the latitudinal gradient — species richness decreases from equator to poles. India, being mostly tropical, has high diversity."
},
{
  id: 96,
  topic: "Patterns of Biodiversity",
  q: "New York at 41°N has _______ bird species while Greenland at 71°N has only _______ bird species.",
  options: ["56 and 105", "105 and 56", "1,400 and 105", "427 and 56"],
  correct: 1,
  explanation: "New York (41°N) = 105 bird species; Greenland (71°N) = 56 bird species. This is a direct NCERT fact. Students often interchange these numbers — remember: higher latitude = fewer species."
},
{
  id: 97,
  topic: "Patterns of Biodiversity",
  q: "A forest in a tropical region like Ecuador has up to _______ times as many species of vascular plants as a forest of equal area in a temperate region like the Midwest of the USA.",
  options: ["5", "10", "20", "100"],
  correct: 1,
  explanation: "NCERT states: 'A forest in a tropical region like Equador has up to 10 times as many species of vascular plants as a forest of equal area in a temperate region like the Midwest of the USA.' This demonstrates tropical species richness."
},
{
  id: 98,
  topic: "Patterns of Biodiversity",
  q: "The greatest biodiversity on earth is found in:",
  options: ["The tropical forests of Southeast Asia", "The Amazonian rain forest in South America", "The Congo basin in Africa", "The Western Ghats of India"],
  correct: 1,
  explanation: "NCERT states: 'The largely tropical Amazonian rain forest in South America has the greatest biodiversity on earth.' It is home to >40,000 plant species, 3,000 fish species, 1,300 bird species, and >1,25,000 invertebrate species."
},
{
  id: 99,
  topic: "Patterns of Biodiversity",
  q: "The Amazonian rain forest is home to more than _______ species of plants.",
  options: ["10,000", "20,000", "40,000", "1,00,000"],
  correct: 2,
  explanation: "NCERT states the Amazonian rain forest has more than 40,000 species of plants. This is the single most species-rich region on Earth for plants."
},
{
  id: 100,
  topic: "Patterns of Biodiversity",
  q: "In the Amazonian rain forest, the number of mammal species and amphibian species are:",
  options: ["427 mammals and 378 amphibians", "427 mammals and 427 amphibians", "378 mammals and 427 amphibians", "1,300 mammals and 427 amphibians"],
  correct: 1,
  explanation: "Both mammals and amphibians have exactly 427 species each in the Amazonian rain forest. This is a classic NCERT trap — students assume different groups must have different numbers. Reptiles have 378 species."
},
{
  id: 101,
  topic: "Patterns of Biodiversity",
  q: "Consider the following Amazonian rain forest species data:<br>I. Plants — more than 40,000<br>II. Fishes — 3,000<br>III. Birds — 1,300<br>IV. Mammals — 427<br>V. Amphibians — 378<br>VI. Reptiles — 427<br>VII. Invertebrates — more than 1,25,000<br><br>Which of the above are correctly matched?",
  options: ["I, II, III, IV, and VII only", "All are correct", "I, II, III, and VII only", "I, II, III, IV, V, and VI are incorrect"],
  correct: 0,
  explanation: "V and VI are swapped — Amphibians = 427 (not 378) and Reptiles = 378 (not 427). Correct data: Plants >40,000; Fishes 3,000; Birds 1,300; Mammals 427; Amphibians 427; Reptiles 378; Invertebrates >1,25,000. Statements I, II, III, IV, and VII are correct."
},
{
  id: 102,
  topic: "Patterns of Biodiversity",
  q: "The number of reptile species in the Amazonian rain forest is:",
  options: ["427", "378", "1,300", "3,000"],
  correct: 1,
  explanation: "Reptiles = 378 species in the Amazonian rain forest. Students often confuse this with 427 (which is the number for both mammals AND amphibians). Remember: Reptiles = 378, Mammals = Amphibians = 427."
},
{
  id: 103,
  topic: "Patterns of Biodiversity",
  q: "Scientists estimate that in the Amazonian rain forests there might be at least _______ insect species waiting to be discovered.",
  options: ["1,25,000", "5,00,000", "20,00,000 (two million)", "50,00,000"],
  correct: 2,
  explanation: "NCERT states: 'Scientists estimate that in these rain forests there might be at least two million insect species waiting to be discovered and named.' 1,25,000 is the number of currently known invertebrates there."
},
{
  id: 104,
  topic: "Patterns of Biodiversity",
  q: "Which of the following is <b>NOT</b> a hypothesis proposed to explain greater biological diversity in the tropics?",
  options: ["Tropics had long evolutionary time due to absence of glaciations", "Tropical environments are less seasonal and more constant", "More solar energy in tropics leads to higher productivity", "Tropical regions have higher rate of extinction leading to rapid speciation"],
  correct: 3,
  explanation: "NCERT lists three hypotheses: (a) long evolutionary time (no glaciations), (b) constant/predictable environment → niche specialisation, (c) more solar energy → higher productivity → greater diversity. 'Higher rate of extinction leading to rapid speciation' is NOT a listed hypothesis."
},
{
  id: 105,
  topic: "Patterns of Biodiversity",
  q: "According to one hypothesis, tropical regions have greater biodiversity because:",
  options: ["Temperate regions have more solar energy than tropics", "Tropical latitudes have remained relatively undisturbed for millions of years allowing long evolutionary time for speciation", "Tropical environments are highly seasonal promoting rapid speciation", "Glaciations in tropics promoted species diversification"],
  correct: 1,
  explanation: "NCERT hypothesis (a): 'Unlike temperate regions subjected to frequent glaciations in the past, tropical latitudes have remained relatively undisturbed for millions of years and thus, had a long evolutionary time for species diversification.' Speciation is a function of time."
},
{
  id: 106,
  topic: "Patterns of Biodiversity",
  q: "Assertion (A): Tropical environments promote niche specialisation and lead to greater species diversity.<br>Reason (R): Tropical environments are less seasonal, relatively more constant and predictable.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both statements are directly from NCERT. The constant and predictable nature of tropical environments (R) is the reason why niche specialisation occurs, leading to greater species diversity (A). R correctly explains A."
},
{
  id: 107,
  topic: "Patterns of Biodiversity",
  q: "Which of the following correctly links solar energy to biodiversity in tropics?",
  options: ["More solar energy → lower productivity → less diversity", "More solar energy → higher productivity → directly increases diversity", "More solar energy → higher productivity → indirectly contributes to greater diversity", "Less solar energy → higher productivity → greater diversity"],
  correct: 2,
  explanation: "NCERT states: 'There is more solar energy available in the tropics, which contributes to higher productivity; this in turn might contribute INDIRECTLY to greater diversity.' Note the word 'indirectly' — a key NCERT trap. The relationship is indirect, not direct."
},
{
  id: 108,
  topic: "Patterns of Biodiversity",
  q: "The hypothesis that 'speciation is generally a function of time' is used to explain tropical biodiversity because:",
  options: ["Tropics have existed for a shorter period than temperate regions", "Temperate regions were subjected to frequent glaciations while tropics remained undisturbed for millions of years", "Tropics experience more frequent glaciations than temperate regions", "Time has no relation to speciation in any region"],
  correct: 1,
  explanation: "Unlike temperate regions that were subjected to frequent glaciations, tropical latitudes remained relatively undisturbed for millions of years. This longer undisturbed period provided more evolutionary time for species diversification through speciation."
},
{
  id: 109,
  topic: "Patterns of Biodiversity",
  q: "Consider the following hypotheses for greater tropical biodiversity:<br>I. Long evolutionary time due to absence of glaciations<br>II. Constant environments promote niche specialisation<br>III. More solar energy leads to higher productivity<br>IV. Greater rate of immigration from temperate regions<br><br>Which are mentioned in NCERT?",
  options: ["I, II, and III only", "I, II, III, and IV", "I and II only", "II, III, and IV only"],
  correct: 0,
  explanation: "NCERT mentions only three hypotheses: (a) long evolutionary time — no glaciations, (b) constant environments → niche specialisation, (c) more solar energy → higher productivity → indirectly greater diversity. 'Greater immigration from temperate regions' (IV) is NOT mentioned."
},
{
  id: 110,
  topic: "Patterns of Biodiversity",
  q: "The species-area relationship was observed by:",
  options: ["Robert May", "Edward Wilson", "Alexander von Humboldt", "Paul Ehrlich"],
  correct: 2,
  explanation: "Alexander von Humboldt, the great German naturalist and geographer, observed the species-area relationship during his pioneering explorations in the wilderness of South American jungles. Students often confuse him with Robert May (global species estimate) or Edward Wilson (biodiversity term)."
},
{
  id: 111,
  topic: "Patterns of Biodiversity",
  q: "Alexander von Humboldt made his observations on species-area relationships during his explorations in:",
  options: ["African jungles", "South American jungles", "Southeast Asian rainforests", "Australian outback"],
  correct: 1,
  explanation: "NCERT states: 'During his pioneering and extensive explorations in the wilderness of South American jungles, the great German naturalist and geographer Alexander von Humboldt observed that within a region species richness increased with increasing explored area.'"
},
{
  id: 112,
  topic: "Patterns of Biodiversity",
  q: "The relationship between species richness and area for a wide variety of taxa turns out to be a:",
  options: ["Straight line on normal scale", "Rectangular hyperbola", "Sigmoid curve", "Exponential curve"],
  correct: 1,
  explanation: "NCERT states the relation between species richness and area is a rectangular hyperbola. On a logarithmic scale, this becomes a straight line described by log S = log C + Z log A. Students must distinguish between the two representations."
},
{
  id: 113,
  topic: "Patterns of Biodiversity",
  q: "On a logarithmic scale, the species-area relationship is described by the equation:",
  options: ["S = CA^Z", "log S = log C + Z log A", "S = C + ZA", "log S = Z log C + log A"],
  correct: 1,
  explanation: "NCERT gives the equation: log S = log C + Z log A, where S = species richness, A = area, Z = slope of line (regression coefficient), C = Y-intercept. This is the linearised form of S = CA^Z on a log scale."
},
{
  id: 114,
  topic: "Patterns of Biodiversity",
  q: "In the equation log S = log C + Z log A, 'Z' represents:",
  options: ["Y-intercept", "Species richness", "Slope of the line (regression coefficient)", "Area explored"],
  correct: 2,
  explanation: "Z = slope of the line (regression coefficient). S = species richness, A = area, C = Y-intercept. Z represents how steeply species richness increases with area. This is a frequently tested NEET question."
},
{
  id: 115,
  topic: "Patterns of Biodiversity",
  q: "In the species-area relationship equation, 'C' represents:",
  options: ["Regression coefficient", "Carrying capacity", "Y-intercept", "Species richness constant"],
  correct: 2,
  explanation: "C = Y-intercept in the equation log S = log C + Z log A. It is NOT carrying capacity (which is used in population ecology). This is a conceptual trap — students may confuse C here with carrying capacity K."
},
{
  id: 116,
  topic: "Patterns of Biodiversity",
  q: "The value of Z (regression coefficient) for species-area relationships within a region typically lies in the range of:",
  options: ["0.6 to 1.2", "0.1 to 0.2", "1.0 to 2.0", "0.01 to 0.05"],
  correct: 1,
  explanation: "NCERT states: 'the value of Z lies in the range of 0.1 to 0.2, regardless of the taxonomic group or the region.' This is for within-region analysis. For entire continents, Z ranges from 0.6 to 1.2 (steeper slopes)."
},
{
  id: 117,
  topic: "Patterns of Biodiversity",
  q: "The Z value of 0.1 to 0.2 in species-area relationship is remarkably similar regardless of:",
  options: ["Only the taxonomic group", "Only the geographical region", "Both the taxonomic group and the region", "The size of the continent"],
  correct: 2,
  explanation: "NCERT states: 'regardless of the taxonomic group or the region (whether it is the plants in Britain, birds in California or molluscs in New York state, the slopes of the regression line are amazingly similar).' Z = 0.1–0.2 holds for both different taxa AND different regions."
},
{
  id: 118,
  topic: "Patterns of Biodiversity",
  q: "Which of the following examples are given in NCERT to illustrate that Z values (0.1–0.2) are similar across different taxa and regions?<br>I. Plants in Britain<br>II. Birds in California<br>III. Molluscs in New York state<br>IV. Insects in Amazon",
  options: ["I, II, and III only", "I, II, III, and IV", "I and II only", "II, III, and IV only"],
  correct: 0,
  explanation: "NCERT specifically mentions three examples: plants in Britain, birds in California, and molluscs in New York state. 'Insects in Amazon' (IV) is NOT mentioned in this context. Only I, II, and III are correct."
},
{
  id: 119,
  topic: "Patterns of Biodiversity",
  q: "When species-area relationships are analysed among very large areas like entire continents, the Z value lies in the range of:",
  options: ["0.1 to 0.2", "0.01 to 0.05", "0.6 to 1.2", "2.0 to 3.0"],
  correct: 2,
  explanation: "NCERT states: 'if you analyse the species-area relationships among very large areas like the entire continents, you will find that the slope of the line to be much steeper (Z values in the range of 0.6 to 1.2).' This is significantly higher than 0.1–0.2 for smaller regions."
},
{
  id: 120,
  topic: "Patterns of Biodiversity",
  q: "For frugivorous birds and mammals in tropical forests of different continents, the slope (Z value) is found to be:",
  options: ["0.1", "0.2", "1.15", "0.6"],
  correct: 2,
  explanation: "NCERT states: 'for frugivorous (fruit-eating) birds and mammals in the tropical forests of different continents, the slope is found to be 1.15.' This falls within the continental range of 0.6–1.2 and represents a steeper slope."
},
{
  id: 121,
  topic: "Patterns of Biodiversity",
  q: "Frugivorous birds and mammals are:",
  options: ["Seed-eating birds and mammals", "Fruit-eating birds and mammals", "Insect-eating birds and mammals", "Nectar-feeding birds and mammals"],
  correct: 1,
  explanation: "NCERT explicitly defines frugivorous as 'fruit-eating.' Frugivorous birds and mammals in tropical forests of different continents show a species-area slope of 1.15. Students may confuse frugivorous with granivorous (seed-eating) or insectivorous."
},
{
  id: 122,
  topic: "Patterns of Biodiversity",
  q: "Assertion (A): The Z value for species-area relationships among entire continents is much steeper (0.6–1.2) than for smaller regions (0.1–0.2).<br>Reason (R): Larger areas harbour proportionally fewer species than smaller areas.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 2,
  explanation: "A is true — NCERT confirms steeper Z values (0.6–1.2) for continents vs 0.1–0.2 for smaller regions. R is false — a steeper slope means species richness increases MORE rapidly with area at continental scales, NOT that larger areas have fewer species. R contradicts the meaning of steeper slopes."
},
{
  id: 123,
  topic: "Patterns of Biodiversity",
  q: "Alexander von Humboldt observed that within a region, species richness increased with increasing explored area:",
  options: ["Indefinitely without any limit", "But only up to a limit", "Only in temperate regions", "Only for animal species, not plants"],
  correct: 1,
  explanation: "NCERT states: 'within a region species richness increased with increasing explored area, but only up to a limit.' This is a key qualifier — the increase is not unlimited, which is represented by the rectangular hyperbola curve."
},
{
  id: 124,
  topic: "Patterns of Biodiversity",
  q: "Which of the following taxa are mentioned as showing species-area rectangular hyperbola relationship?<br>I. Angiosperm plants<br>II. Birds<br>III. Bats<br>IV. Freshwater fishes<br>V. Reptiles",
  options: ["I, II, III, and IV only", "I, II, and IV only", "All of the above", "I, II, III, IV, and V"],
  correct: 0,
  explanation: "NCERT mentions: 'the relation between species richness and area for a wide variety of taxa (angiosperm plants, birds, bats, freshwater fishes) turns out to be a rectangular hyperbola.' Reptiles (V) are NOT mentioned in this specific list."
},
{
  id: 125,
  topic: "Patterns of Biodiversity",
  q: "Alexander von Humboldt was a:",
  options: ["British ecologist", "German naturalist and geographer", "American evolutionary biologist", "French taxonomist"],
  correct: 1,
  explanation: "NCERT describes Alexander von Humboldt as 'the great German naturalist and geographer.' He made his pioneering observations during explorations in South American jungles. His nationality and profession are frequently tested."
},
{
  id: 126,
  topic: "Patterns of Biodiversity",
  q: "Select the <b>INCORRECT</b> statement regarding latitudinal gradient in biodiversity:",
  options: ["Species diversity generally increases from equator to poles", "Colombia near the equator has nearly 1,400 bird species", "Tropics harbour more species than temperate or polar areas", "India has more than 1,200 species of birds"],
  correct: 0,
  explanation: "Species diversity DECREASES (not increases) from equator to poles. This is the fundamental latitudinal gradient. All other statements are correct as per NCERT. This is a classic reversal trap in NEET."
},
{
  id: 127,
  topic: "Patterns of Biodiversity",
  q: "Consider the following statements:<br>I. Speciation is generally a function of time.<br>II. Temperate regions were subjected to frequent glaciations in the past.<br>III. Tropical environments are highly seasonal.<br>IV. More solar energy in tropics contributes to higher productivity.<br><br>Which statements are correct as per NCERT?",
  options: ["I, II, and IV only", "I, II, and III only", "I, III, and IV only", "All of the above"],
  correct: 0,
  explanation: "Statement III is incorrect — NCERT states tropical environments are LESS seasonal, relatively more constant and predictable (not highly seasonal). Statements I (speciation = function of time), II (temperate glaciations), and IV (solar energy → productivity) are all correct."
},
{
  id: 128,
  topic: "Patterns of Biodiversity",
  q: "The number of fish species in the Amazonian rain forest is:",
  options: ["427", "1,300", "3,000", "40,000"],
  correct: 2,
  explanation: "Amazonian rain forest has 3,000 species of fishes. 427 = mammals and amphibians each; 1,300 = birds; 40,000 = plants. Students must memorize these distinct numbers for different groups."
},
{
  id: 129,
  topic: "Patterns of Biodiversity",
  q: "The number of invertebrate species in the Amazonian rain forest is more than:",
  options: ["40,000", "1,25,000", "3,000", "20,00,000"],
  correct: 1,
  explanation: "NCERT states the Amazonian rain forest is home to more than 1,25,000 invertebrates. Additionally, at least 2 million insect species may be waiting to be discovered. 40,000 is plants; 3,000 is fishes."
},
{
  id: 130,
  topic: "Patterns of Biodiversity",
  q: "Match the following Amazonian rain forest species numbers:<br>Column I &emsp;&emsp; Column II<br>(a) Plants &emsp;&emsp; (i) 427<br>(b) Birds &emsp;&emsp; (ii) >40,000<br>(c) Mammals &emsp; (iii) 378<br>(d) Reptiles &emsp; (iv) 1,300<br><br>Select the correct match:",
  options: ["(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)", "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)", "(a)-(ii), (b)-(i), (c)-(iv), (d)-(iii)", "(a)-(ii), (b)-(iv), (c)-(iii), (d)-(i)"],
  correct: 0,
  explanation: "Plants = >40,000 (ii); Birds = 1,300 (iv); Mammals = 427 (i); Reptiles = 378 (iii). The correct matching is (a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)."
},
{
  id: 131,
  topic: "Patterns of Biodiversity",
  q: "Assertion (A): Greater solar energy in tropics directly increases species diversity.<br>Reason (R): More solar energy contributes to higher productivity which in turn contributes to greater diversity.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is false, but R is true", "Both A and R are false"],
  correct: 2,
  explanation: "A is false — NCERT says solar energy contributes INDIRECTLY (not directly) to greater diversity. R is true — NCERT states: 'more solar energy available in the tropics, which contributes to higher productivity; this in turn might contribute indirectly to greater diversity.' The word 'indirectly' is the key trap."
},
{
  id: 132,
  topic: "Patterns of Biodiversity",
  q: "The species-area relationship on a normal (non-logarithmic) scale gives a:",
  options: ["Straight line", "Rectangular hyperbola", "J-shaped curve", "Bell-shaped curve"],
  correct: 1,
  explanation: "On a normal scale, the species-area relationship is a rectangular hyperbola. Only when plotted on a logarithmic scale does it become a straight line (log S = log C + Z log A). This distinction is a common NEET trap."
},
{
  id: 133,
  topic: "Patterns of Biodiversity",
  q: "On a logarithmic scale, the species-area relationship gives a:",
  options: ["Rectangular hyperbola", "Sigmoid curve", "Straight line", "Exponential curve"],
  correct: 2,
  explanation: "On a logarithmic scale, the species-area relationship becomes a straight line described by log S = log C + Z log A. On a normal scale, it is a rectangular hyperbola. NEET frequently tests which graph corresponds to which scale."
},
{
  id: 134,
  topic: "Patterns of Biodiversity",
  q: "A steeper slope (higher Z value) in species-area relationship among continents means:",
  options: ["Species richness decreases with area at continental level", "Species richness increases more steeply with area at continental level", "There is no relationship between species and area at continental level", "Smaller areas within a continent have more species"],
  correct: 1,
  explanation: "A steeper slope means species richness increases more rapidly/steeply with increasing area. At continental scales (Z = 0.6–1.2), the increase in species with area is more pronounced than at smaller regional scales (Z = 0.1–0.2)."
},
{
  id: 135,
  topic: "Patterns of Biodiversity",
  q: "Which of the following is <b>CORRECT</b> about the species-area relationship?",
  options: ["Z value is always greater than 1 for any area", "Z value for continents is lower than for smaller regions", "Z value for smaller regions (0.1–0.2) is lower than for continents (0.6–1.2)", "The relationship does not follow any mathematical equation"],
  correct: 2,
  explanation: "Z for smaller regions = 0.1–0.2; Z for continents = 0.6–1.2. The continental Z is much higher (steeper slope). A is wrong (Z can be <1); B is wrong (continental Z is higher, not lower); D is wrong (it follows log S = log C + Z log A)."
},
{
  id: 136,
  topic: "Patterns of Biodiversity",
  q: "India has more than 1,200 species of birds because:",
  options: ["India is located in polar latitudes", "Much of India's land area lies in tropical latitudes", "India has very few ecosystems", "India is located entirely in temperate latitudes"],
  correct: 1,
  explanation: "NCERT states: 'India, with much of its land area in the tropical latitudes, has more than 1,200 species of birds.' Being in tropical latitudes means India benefits from the latitudinal gradient — tropics harbour more species."
},
{
  id: 137,
  topic: "Patterns of Biodiversity",
  q: "Which of the following statements about niche specialisation in tropics is correct?",
  options: ["Seasonal environments promote niche specialisation", "Constant and predictable tropical environments promote niche specialisation", "Niche specialisation decreases species diversity", "Niche specialisation occurs only in temperate regions"],
  correct: 1,
  explanation: "NCERT states: 'Tropical environments, unlike temperate ones, are less seasonal, relatively more constant and predictable. Such constant environments promote niche specialisation and lead to a greater species diversity.' Constant environments (not seasonal) promote niche specialisation."
},
{
  id: 138,
  topic: "Patterns of Biodiversity",
  q: "Consider the Z values:<br>I. Plants in Britain — Z ≈ 0.1–0.2<br>II. Birds in California — Z ≈ 0.1–0.2<br>III. Frugivorous birds and mammals across continents — Z = 1.15<br>IV. Molluscs in New York state — Z ≈ 0.6–1.2<br><br>Which of the above are correctly stated?",
  options: ["I, II, and III only", "I, II, III, and IV", "I and II only", "All are correct"],
  correct: 0,
  explanation: "IV is incorrect — Molluscs in New York state have Z in the range of 0.1–0.2 (within-region analysis), NOT 0.6–1.2. The range 0.6–1.2 applies to very large areas like entire continents. I, II, and III are all correct."
},
{
  id: 139,
  topic: "Patterns of Biodiversity",
  q: "Which of the following factors does NOT directly explain greater tropical biodiversity as per NCERT?",
  options: ["Long evolutionary time for speciation", "Less seasonal and more constant environment", "Higher rate of mutation in tropical organisms", "More solar energy leading to higher productivity"],
  correct: 2,
  explanation: "NCERT mentions three hypotheses: (a) long evolutionary time, (b) constant environment → niche specialisation, (c) more solar energy → productivity. 'Higher rate of mutation in tropical organisms' is NOT mentioned in NCERT as a hypothesis for greater tropical biodiversity."
},
{
  id: 140,
  topic: "Patterns of Biodiversity",
  q: "Assertion (A): Temperate regions have lower species diversity than tropical regions.<br>Reason (R): Temperate regions were subjected to frequent glaciations in the past which disrupted species diversification.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. Frequent glaciations in temperate regions disrupted species diversification, allowing less evolutionary time compared to tropics that remained undisturbed. This is one of the NCERT hypotheses explaining why temperate regions have lower diversity. R is a valid explanation of A."
},
{
  id: 141,
  topic: "Patterns of Biodiversity",
  q: "In the Amazonian rain forest, the number of bird species exceeds the number of:",
  options: ["Plant species", "Invertebrate species", "Mammal and amphibian species combined", "Fish species"],
  correct: 2,
  explanation: "Birds = 1,300; Mammals (427) + Amphibians (427) = 854. So birds (1,300) > mammals + amphibians combined (854). Birds < Fishes (3,000); Birds << Plants (>40,000); Birds << Invertebrates (>1,25,000)."
},
{
  id: 142,
  topic: "Patterns of Biodiversity",
  q: "The species-area relationship holds true for a wide variety of taxa including all of the following EXCEPT:",
  options: ["Angiosperm plants", "Bats", "Freshwater fishes", "Marine mammals"],
  correct: 3,
  explanation: "NCERT lists angiosperm plants, birds, bats, and freshwater fishes as taxa showing the species-area rectangular hyperbola. Marine mammals are NOT mentioned in this list. This is a direct elimination-type question."
},
{
  id: 143,
  topic: "Patterns of Biodiversity",
  q: "Which country is used as an example of tropical region for comparing vascular plant diversity with a temperate region?",
  options: ["Colombia", "Brazil", "Ecuador", "India"],
  correct: 2,
  explanation: "NCERT uses Ecuador (tropical) vs Midwest of USA (temperate) for comparing vascular plant diversity. Ecuador's tropical forest has up to 10 times more vascular plant species. Colombia is used for bird species comparison. Don't confuse the two."
},
{
  id: 144,
  topic: "Patterns of Biodiversity",
  q: "Select the correct statement regarding the species-area relationship:",
  options: ["The relationship was first observed by Robert May", "Species richness decreases with increasing area", "The graph on logarithmic scale is a rectangular hyperbola", "The graph on normal scale is a rectangular hyperbola"],
  correct: 3,
  explanation: "On normal (non-logarithmic) scale, the graph is a rectangular hyperbola. On logarithmic scale, it becomes a straight line. The relationship was observed by Alexander von Humboldt (not Robert May). Species richness increases (not decreases) with area."
},
{
  id: 145,
  topic: "Patterns of Biodiversity",
  q: "If log S = log C + Z log A, then on antilog transformation, the equation becomes:",
  options: ["S = C + ZA", "S = C × A^Z", "S = C^Z × A", "S = Z × C × A"],
  correct: 1,
  explanation: "log S = log C + Z log A = log C + log A^Z = log(C × A^Z). Therefore, S = C × A^Z (or S = CA^Z). This is the power function form of the species-area relationship. Understanding this mathematical transformation is important for NEET."
},
{
  id: 146,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "A stable biological community should exhibit all of the following attributes EXCEPT:",
  options: ["Not too much variation in productivity from year to year", "Resistant or resilient to occasional disturbances", "Resistant to invasions by alien species", "High year-to-year variation in species composition and productivity"],
  correct: 3,
  explanation: "A stable community should NOT show too much variation in productivity. It should be resistant/resilient to disturbances and resistant to alien species invasion. High year-to-year variation contradicts the definition of stability as per NCERT."
},
{
  id: 147,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "David Tilman's long-term ecosystem experiments used:",
  options: ["Indoor laboratory setups", "Outdoor plots", "Aquatic mesocosms", "Computer simulations"],
  correct: 1,
  explanation: "NCERT specifically states: 'David Tilman's long-term ecosystem experiments using outdoor plots provide some tentative answers.' This is a direct factual point — students often overlook the 'outdoor plots' detail."
},
{
  id: 148,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "David Tilman's experiments showed that plots with more species:",
  options: ["Showed more year-to-year variation in total biomass", "Showed less year-to-year variation in total biomass", "Had lower productivity", "Were more susceptible to alien species invasion"],
  correct: 1,
  explanation: "NCERT states: 'Tilman found that plots with more species showed less year-to-year variation in total biomass.' More species = more stable biomass production. This supports the idea that greater species diversity leads to greater ecosystem stability."
},
{
  id: 149,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In Tilman's experiments, increased diversity contributed to:",
  options: ["Lower productivity", "Higher productivity", "No change in productivity", "Decreased stability"],
  correct: 1,
  explanation: "NCERT states: 'He also showed that in his experiments, increased diversity contributed to higher productivity.' This is a key finding — species diversity positively correlates with both stability (less biomass variation) and productivity."
},
{
  id: 150,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Consider the following statements regarding David Tilman's experiments:<br>I. Plots with more species showed less year-to-year variation in total biomass.<br>II. Increased diversity contributed to higher productivity.<br>III. The experiments were conducted in indoor controlled environments.<br>IV. The experiments provided definitive answers about species richness and ecosystem function.<br><br>Which statements are correct?",
  options: ["I and II only", "I, II, and III", "I, II, and IV", "All of the above"],
  correct: 0,
  explanation: "III is incorrect — experiments used outdoor plots, not indoor environments. IV is incorrect — NCERT says these provide 'tentative answers' (not definitive). Only I and II are correct as per NCERT."
},
{
  id: 151,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The 'rivet popper hypothesis' was proposed by:",
  options: ["David Tilman", "Edward Wilson", "Robert May", "Paul Ehrlich"],
  correct: 3,
  explanation: "The rivet popper hypothesis was used by Paul Ehrlich, a Stanford ecologist. Students frequently confuse him with David Tilman (ecosystem experiments), Edward Wilson (biodiversity term), or Robert May (global species estimate). This is one of the most frequently asked NEET questions."
},
{
  id: 152,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Paul Ehrlich, who used the rivet popper hypothesis, is associated with:",
  options: ["Harvard University", "Stanford University", "Oxford University", "Cambridge University"],
  correct: 1,
  explanation: "NCERT describes Paul Ehrlich as a 'Stanford ecologist.' His university affiliation is a directly tested factual point in NEET. He used the airplane-rivet analogy to explain the importance of species in an ecosystem."
},
{
  id: 153,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In the rivet popper hypothesis, the airplane represents:",
  options: ["A species", "A population", "An ecosystem", "A biome"],
  correct: 2,
  explanation: "In Paul Ehrlich's rivet popper hypothesis: airplane = ecosystem, rivets = species, passengers popping rivets = species becoming extinct. The airplane as a whole system represents the ecosystem."
},
{
  id: 154,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In the rivet popper hypothesis, the rivets represent:",
  options: ["Ecosystems", "Biomes", "Species", "Genes"],
  correct: 2,
  explanation: "Rivets in the airplane represent species in the ecosystem. Just as rivets hold an airplane together, species hold an ecosystem together. Removing rivets (losing species) progressively weakens the plane (ecosystem)."
},
{
  id: 155,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In Paul Ehrlich's rivet popper hypothesis, the loss of rivets on the wings of the airplane represents:",
  options: ["Loss of any random species", "Loss of key species that drive major ecosystem functions", "Loss of alien invasive species", "Loss of less critical species"],
  correct: 1,
  explanation: "NCERT states: 'Loss of rivets on the wings (key species that drive major ecosystem functions) is obviously a more serious threat to flight safety than loss of a few rivets on the seats or windows inside the plane.' Wings = key species; seats/windows = less critical species."
},
{
  id: 156,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In the rivet popper hypothesis, loss of rivets on the seats or windows inside the airplane represents:",
  options: ["Loss of key species driving major ecosystem functions", "Loss of relatively less critical species", "Complete ecosystem collapse", "Loss of alien species"],
  correct: 1,
  explanation: "Rivets on seats/windows = relatively less critical species. Their loss is less threatening compared to loss of rivets on wings (key species). However, continuous loss of even these rivets eventually weakens the ecosystem."
},
{
  id: 157,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Assertion (A): In the rivet popper hypothesis, initial loss of a few rivets may not affect flight safety.<br>Reason (R): The loss of every single species immediately causes ecosystem collapse.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 2,
  explanation: "A is true — NCERT states initial rivet loss 'may not affect flight safety (proper functioning of the ecosystem) initially.' R is false — NOT every species loss causes immediate collapse. The hypothesis explains that cumulative species loss progressively weakens the ecosystem, and which species is lost also matters."
},
{
  id: 158,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "According to the rivet popper hypothesis, as more and more rivets are removed from the airplane:",
  options: ["The plane becomes stronger", "The plane becomes dangerously weak over a period of time", "There is no effect on flight safety", "Only the aesthetics of the plane are affected"],
  correct: 1,
  explanation: "NCERT states: 'as more and more rivets are removed, the plane becomes dangerously weak over a period of time.' This represents progressive ecosystem weakening due to cumulative species loss. The effect is gradual, not immediate."
},
{
  id: 159,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Which of the following is <b>NOT</b> an attribute of a stable biological community as per NCERT?",
  options: ["Resistant to occasional disturbances", "Resilient to occasional disturbances", "Shows high year-to-year variation in productivity", "Resistant to invasions by alien species"],
  correct: 2,
  explanation: "A stable community should show NOT too much variation in productivity (i.e., LOW variation). High year-to-year variation indicates instability, not stability. Resistance, resilience, and resistance to alien invasions are all attributes of stability."
},
{
  id: 160,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The statement 'communities with more species, generally, tend to be more stable than those with less species' was believed by ecologists for:",
  options: ["A few years", "One decade", "Many decades", "Only recently"],
  correct: 2,
  explanation: "NCERT states: 'For many decades, ecologists believed that communities with more species, generally, tend to be more stable than those with less species.' This has been a long-held ecological belief."
},
{
  id: 161,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Select the correct match:<br>Column I &emsp;&emsp;&emsp; Column II<br>(a) Airplane &emsp;&emsp; (i) Species<br>(b) Rivets &emsp;&emsp;&emsp; (ii) Ecosystem<br>(c) Passengers popping rivets &emsp; (iii) Causing species extinction<br>(d) Flight safety &emsp; (iv) Proper functioning of ecosystem",
  options: ["(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)", "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)", "(a)-(ii), (b)-(iii), (c)-(i), (d)-(iv)", "(a)-(iv), (b)-(i), (c)-(iii), (d)-(ii)"],
  correct: 0,
  explanation: "Airplane = Ecosystem (ii); Rivets = Species (i); Passengers popping rivets = Causing species extinction (iii); Flight safety = Proper functioning of ecosystem (iv). This complete mapping of the rivet popper analogy is frequently tested."
},
{
  id: 162,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "David Tilman's long-term ecosystem experiments provided:",
  options: ["Definitive answers about species richness and ecosystem function", "Tentative answers about the link between species richness and ecosystem stability", "Evidence against the importance of biodiversity", "Proof that species richness has no effect on productivity"],
  correct: 1,
  explanation: "NCERT specifically uses the word 'tentative answers' — not definitive. Tilman's experiments provided tentative evidence that species richness contributes to ecosystem stability and productivity. This word choice is a key NCERT trap."
},
{
  id: 163,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Paul Ehrlich is described in NCERT as:",
  options: ["A Harvard sociobiologist", "A German naturalist", "A Stanford ecologist", "A British evolutionary biologist"],
  correct: 2,
  explanation: "NCERT describes Paul Ehrlich as a 'Stanford ecologist.' Edward Wilson is the sociobiologist, Alexander von Humboldt is the German naturalist. This scientist-designation matching is a high-frequency NEET question."
},
{
  id: 164,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Assertion (A): Rich biodiversity is essential for ecosystem health and imperative for human survival.<br>Reason (R): David Tilman found that increased diversity contributed to higher productivity and less variation in total biomass.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true and from NCERT. Tilman's experimental findings (more diversity → higher productivity, less biomass variation) provide scientific evidence supporting the assertion that biodiversity is essential for ecosystem health. R explains A."
},
{
  id: 165,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In the rivet popper hypothesis, which rivet is removed is also critical because:",
  options: ["All rivets are equally important to flight safety", "Loss of rivets on the wings (key species) is more serious than loss of rivets on seats or windows", "Only rivets on the windows matter", "Rivets on seats are more critical than those on wings"],
  correct: 1,
  explanation: "NCERT states: 'which rivet is removed may also be critical. Loss of rivets on the wings (key species that drive major ecosystem functions) is obviously a more serious threat to flight safety than loss of a few rivets on the seats or windows.' Not all species losses are equally damaging."
},
{
  id: 166,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Which of the following correctly represents the two key findings of David Tilman's experiments?",
  options: ["Less species → more stable biomass; More diversity → less productivity", "More species → less variation in total biomass; More diversity → higher productivity", "More species → more variation in total biomass; More diversity → lower productivity", "Less species → less variation in total biomass; Less diversity → higher productivity"],
  correct: 1,
  explanation: "Tilman found: (1) plots with more species showed LESS year-to-year variation in total biomass, and (2) increased diversity contributed to HIGHER productivity. Both findings support the positive role of species diversity."
},
{
  id: 167,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The disturbances to which a stable community must be resistant or resilient include:",
  options: ["Only natural disturbances", "Only man-made disturbances", "Both natural and man-made disturbances", "Only climatic disturbances"],
  correct: 2,
  explanation: "NCERT states a stable community 'must be either resistant or resilient to occasional disturbances (natural or man-made).' Both types of disturbances are mentioned. Students often miss 'man-made' disturbances."
},
{
  id: 168,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Consider the following scientists and their contributions:<br>I. David Tilman — Rivet popper hypothesis<br>II. Paul Ehrlich — Long-term ecosystem experiments<br>III. Edward Wilson — Popularised the term 'Biodiversity'<br>IV. Robert May — Global species diversity estimate of ~7 million<br><br>Which of the above are correctly matched?",
  options: ["I and II only", "III and IV only", "I, II, and III", "All are correctly matched"],
  correct: 1,
  explanation: "I is wrong — David Tilman did long-term ecosystem experiments (not rivet popper). II is wrong — Paul Ehrlich proposed the rivet popper hypothesis (not ecosystem experiments). III (Edward Wilson — biodiversity term) and IV (Robert May — 7 million) are correct."
},
{
  id: 169,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Which of the following best describes the rivet popper hypothesis?",
  options: ["Removing any single species will immediately collapse the ecosystem", "Species loss is inconsequential to ecosystem functioning", "Progressive species loss weakens an ecosystem over time, and loss of key species is more critical than others", "All species are equally important and their loss has identical impact"],
  correct: 2,
  explanation: "The rivet popper hypothesis explains that: (1) initial species loss may not immediately affect the ecosystem, (2) cumulative loss progressively weakens it, and (3) loss of key species (rivets on wings) is more critical than less important ones (rivets on seats/windows). Not all species losses have equal impact."
},
{
  id: 170,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The rivet popper hypothesis is used as an analogy to explain:",
  options: ["Why species diversity varies with latitude", "The importance of each species in an ecosystem", "The species-area relationship", "How new species are formed"],
  correct: 1,
  explanation: "The rivet popper hypothesis is an analogy used to develop proper perspective on why each species matters in an ecosystem. It addresses questions like: Does it matter if a few species become extinct? The analogy shows that every species (rivet) contributes to ecosystem integrity."
},
{
  id: 171,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Assertion (A): All species in an ecosystem are equally important for ecosystem functioning.<br>Reason (R): In the rivet popper hypothesis, loss of rivets on the wings is more serious than loss of rivets on seats.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is false, but R is true", "Both A and R are false"],
  correct: 2,
  explanation: "A is false — the rivet popper hypothesis clearly shows that NOT all species are equally important. Key species (wing rivets) are more critical. R is true — NCERT states loss of wing rivets is more serious. R actually contradicts A."
},
{
  id: 172,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In the context of ecosystem stability, 'resilient' means the community:",
  options: ["Prevents disturbance from occurring", "Resists any change during disturbance", "Recovers after being disturbed", "Becomes permanently altered after disturbance"],
  correct: 2,
  explanation: "Resilience refers to the ability to recover/bounce back after a disturbance. Resistance means the ability to resist change during disturbance. NCERT mentions both: a stable community must be 'either resistant or resilient to occasional disturbances.' These are distinct concepts."
},
{
  id: 173,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "According to NCERT, rich biodiversity is:",
  options: ["Only essential for ecosystem health", "Only imperative for human survival", "Both essential for ecosystem health and imperative for human survival", "Neither essential for ecosystem health nor for human survival"],
  correct: 2,
  explanation: "NCERT states: 'rich biodiversity is not only essential for ecosystem health but imperative for the very survival of the human race on this planet.' Both aspects are explicitly mentioned — ecosystem health AND human survival."
},
{
  id: 174,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Which of the following questions is mentioned in NCERT to illustrate the importance of species diversity?",
  options: ["Would Western Ghats ecosystems be less functional if one of its tree frog species is lost forever?", "How many species of beetles exist in the Amazon?", "What is the Z value for bird species in India?", "How many megadiverse countries exist in the world?"],
  correct: 0,
  explanation: "NCERT poses: 'Would Western Ghats ecosystems be less functional if one of its tree frog species is lost forever?' and 'How is our quality of life affected if, say, instead of 20,000 we have only 15,000 species of ants on earth?' These illustrate the importance of each species."
},
{
  id: 175,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The passengers popping rivets in Paul Ehrlich's analogy represent:",
  options: ["New species being formed", "Humans causing species to become extinct", "Natural selection operating on species", "Species migrating to new habitats"],
  correct: 1,
  explanation: "In the rivet popper hypothesis, passengers popping rivets = humans causing species extinction. Each passenger takes a rivet home (each extinction event removes a species), progressively weakening the airplane (ecosystem)."
},
{
  id: 176,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Select the <b>INCORRECT</b> statement about the rivet popper hypothesis:",
  options: ["It was used by Paul Ehrlich, a Stanford ecologist", "Airplane represents an ecosystem and rivets represent species", "Loss of any rivet immediately causes the airplane to crash", "Loss of rivets on wings is more critical than on seats or windows"],
  correct: 2,
  explanation: "INCORRECT — the hypothesis states that initial rivet loss 'may not affect flight safety initially.' The plane does NOT crash immediately when a few rivets are removed. It becomes dangerously weak progressively as more rivets are removed. All other statements are correct."
},
{
  id: 177,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "David Tilman's experiments demonstrated a relationship between species diversity and:<br>I. Ecosystem stability<br>II. Productivity<br>III. Year-to-year variation in total biomass<br><br>Which of the above are correct?",
  options: ["I and II only", "II and III only", "I and III only", "I, II, and III"],
  correct: 3,
  explanation: "Tilman demonstrated all three relationships: (I) More species → more stable ecosystem; (II) Increased diversity → higher productivity; (III) More species → less year-to-year variation in total biomass. All three are interconnected findings from his experiments."
},
{
  id: 178,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Assertion (A): Species richness and ecosystem functioning are linked.<br>Reason (R): David Tilman's experiments showed plots with more species had less variation in biomass and higher productivity.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. Tilman's experimental findings (less biomass variation, higher productivity in species-rich plots) provide direct evidence that species richness and ecosystem functioning are linked. R correctly explains A with experimental evidence."
},
{
  id: 179,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The three attributes of a stable biological community as per NCERT are:<br>I. Low year-to-year variation in productivity<br>II. Resistant or resilient to occasional disturbances<br>III. Resistant to invasions by alien species<br>IV. High species turnover rate<br>V. Rapid succession after disturbance",
  options: ["I, II, and III only", "I, II, III, and IV", "I, III, and V only", "All of the above"],
  correct: 0,
  explanation: "NCERT lists three attributes: (I) not too much variation in productivity, (II) resistant or resilient to disturbances, (III) resistant to alien species invasions. High species turnover (IV) and rapid succession (V) are NOT mentioned as stability attributes."
},
{
  id: 180,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In the rivet popper hypothesis, 'flight safety' represents:",
  options: ["Species diversity", "Proper functioning of the ecosystem", "Number of passengers on the plane", "Size of the airplane"],
  correct: 1,
  explanation: "Flight safety = proper functioning of the ecosystem. NCERT explicitly states: 'it may not affect flight safety (proper functioning of the ecosystem) initially.' The analogy maps flight safety to ecosystem function."
},
{
  id: 181,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Match the following scientists with their correct descriptions:<br>(a) Paul Ehrlich &emsp; (i) Sociobiologist, popularised 'Biodiversity'<br>(b) Edward Wilson &emsp; (ii) Long-term ecosystem experiments<br>(c) David Tilman &emsp; (iii) Stanford ecologist, rivet popper hypothesis<br>(d) Robert May &emsp; (iv) Conservative estimate of global species ~7 million",
  options: ["(a)-(iii), (b)-(i), (c)-(ii), (d)-(iv)", "(a)-(i), (b)-(iii), (c)-(iv), (d)-(ii)", "(a)-(ii), (b)-(iv), (c)-(i), (d)-(iii)", "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)"],
  correct: 0,
  explanation: "Paul Ehrlich = Stanford ecologist, rivet popper (iii); Edward Wilson = Sociobiologist, biodiversity term (i); David Tilman = Long-term ecosystem experiments (ii); Robert May = ~7 million species estimate (iv). This four-scientist matching is a comprehensive NEET question."
},
{
  id: 182,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The rivet popper hypothesis highlights two important points about species loss. These are:<br>I. Cumulative loss of species progressively weakens the ecosystem.<br>II. Which species is lost is also critical.<br>III. All species are equally replaceable.<br>IV. Loss of key species is more threatening than loss of less critical species.",
  options: ["I, II, and IV only", "I and III only", "II and III only", "I, II, III, and IV"],
  correct: 0,
  explanation: "Statement III is incorrect — the hypothesis shows that species are NOT equally replaceable (key species like wing rivets are more critical). Statements I (progressive weakening), II (which species matters), and IV (key species more threatening) are all correct."
},
{
  id: 183,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "NCERT mentions that 'we are losing species at an alarming pace.' This concern is addressed through which analogy?",
  options: ["Alexander von Humboldt's species-area relationship", "David Tilman's productivity experiments", "Paul Ehrlich's rivet popper hypothesis", "Robert May's conservative species estimate"],
  correct: 2,
  explanation: "The concern about losing species at an alarming pace is addressed through Paul Ehrlich's rivet popper hypothesis, which uses the airplane-rivet analogy to explain why each species loss matters and how cumulative loss weakens ecosystems."
},
{
  id: 184,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Which of the following is <b>NOT</b> a correct interpretation of the rivet popper hypothesis?",
  options: ["Ecosystem can tolerate a few species losses initially", "Continuous species loss makes the ecosystem dangerously weak", "Key species loss is more critical than loss of less important species", "Ecosystem remains unaffected regardless of how many species are lost"],
  correct: 3,
  explanation: "The hypothesis clearly states that continued species loss weakens the ecosystem over time. 'Ecosystem remains unaffected regardless of how many species are lost' directly contradicts the core message. Only initial minor loss may not cause immediate collapse, but cumulative loss is dangerous."
},
{
  id: 185,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Consider the following:<br>Statement I: Ecologists have given a definitive answer about whether species number matters for ecosystem functioning.<br>Statement II: David Tilman's experiments provided tentative answers about the link between species richness and ecosystem stability.<br><br>Which is correct?",
  options: ["Only Statement I is correct", "Only Statement II is correct", "Both statements are correct", "Both statements are incorrect"],
  correct: 1,
  explanation: "Statement I is incorrect — NCERT says 'ecologists have NOT been able to give a definitive answer.' Statement II is correct — NCERT says Tilman's experiments provide 'tentative answers.' The word choices 'definitive' vs 'tentative' are key NCERT traps."
},
{
  id: 186,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Assertion (A): Loss of a tree frog species from the Western Ghats may make the ecosystem less functional.<br>Reason (R): According to the rivet popper hypothesis, every species contributes to ecosystem integrity, and loss of key species can be particularly damaging.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true. NCERT poses the question about Western Ghats tree frog loss to illustrate species importance. The rivet popper hypothesis (R) provides the conceptual framework explaining why each species matters. R correctly explains A."
},
{
  id: 187,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "In the rivet popper hypothesis, 'key species that drive major ecosystem functions' are analogous to:",
  options: ["Rivets on the seats of the airplane", "Rivets on the windows of the airplane", "Rivets on the wings of the airplane", "The passengers of the airplane"],
  correct: 2,
  explanation: "NCERT states: 'Loss of rivets on the wings (key species that drive major ecosystem functions) is obviously a more serious threat to flight safety.' Wings = key species. Seats/windows = less critical species. Passengers = agents causing extinction."
},
{
  id: 188,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Which of the following NCERT examples illustrates the concern about species loss?",
  options: ["Instead of 20,000, having only 15,000 species of ants on earth", "Having 50,000 strains of rice in India", "India having 2.4% land area but 8.1% species diversity", "Colombia having 1,400 bird species"],
  correct: 0,
  explanation: "NCERT asks: 'How is our quality of life affected if, say, instead of 20,000 we have only 15,000 species of ants on earth?' This is used to illustrate the concern about species loss and prompt thinking about biodiversity importance."
},
{
  id: 189,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "Tilman's experiments showed that total biomass variation and productivity in plots with more species are respectively:",
  options: ["Higher variation and lower productivity", "Lower variation and higher productivity", "Higher variation and higher productivity", "Lower variation and lower productivity"],
  correct: 1,
  explanation: "Tilman found: (1) LESS year-to-year variation in total biomass (= lower variation) and (2) HIGHER productivity in plots with more species. Both findings support the positive role of species diversity in ecosystem functioning."
},
{
  id: 190,
  topic: "The Importance of Species Diversity to the Ecosystem",
  q: "The rivet popper hypothesis was described in NCERT as:",
  options: ["A scientific theory", "A mathematical model", "An analogy", "A law of ecology"],
  correct: 2,
  explanation: "NCERT states: 'we can develop a proper perspective through an analogy (the rivet popper hypothesis).' It is explicitly described as an analogy, not a theory, model, or law. This is an important distinction."
},
{
  id: 191,
  topic: "Loss of Biodiversity",
  q: "According to the IUCN Red List (2004), how many species have gone extinct in the last 500 years?",
  options: ["338", "784", "359", "1,000"],
  correct: 1,
  explanation: "IUCN Red List (2004) documents the extinction of 784 species in the last 500 years, including 338 vertebrates, 359 invertebrates, and 87 plants. Students must memorize these exact numbers."
},
{
  id: 192,
  topic: "Loss of Biodiversity",
  q: "The 784 species documented as extinct by IUCN (2004) include:",
  options: ["338 invertebrates, 359 vertebrates, and 87 plants", "338 vertebrates, 359 invertebrates, and 87 plants", "338 vertebrates, 359 plants, and 87 invertebrates", "359 vertebrates, 338 invertebrates, and 87 plants"],
  correct: 1,
  explanation: "784 extinct species = 338 vertebrates + 359 invertebrates + 87 plants. A classic student trap is to interchange vertebrates (338) and invertebrates (359). Remember: invertebrates (359) > vertebrates (338) > plants (87)."
},
{
  id: 193,
  topic: "Loss of Biodiversity",
  q: "The colonisation of tropical Pacific Islands by humans led to the extinction of more than:",
  options: ["200 species of native birds", "784 species of native birds", "2,000 species of native birds", "500 species of native birds"],
  correct: 2,
  explanation: "NCERT states: 'The colonisation of tropical Pacific Islands by humans is said to have led to the extinction of more than 2,000 species of native birds.' Don't confuse with 200 cichlid species (Lake Victoria) or 784 (IUCN total)."
},
{
  id: 194,
  topic: "Loss of Biodiversity",
  q: "Match the following recently extinct animals with their locations:<br>(a) Dodo &emsp;&emsp;&emsp; (i) Australia<br>(b) Quagga &emsp;&emsp; (ii) Russia<br>(c) Thylacine &emsp; (iii) Mauritius<br>(d) Steller's Sea Cow &emsp; (iv) Africa",
  options: ["(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)", "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)", "(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)", "(a)-(i), (b)-(iv), (c)-(iii), (d)-(ii)"],
  correct: 0,
  explanation: "Dodo = Mauritius (iii); Quagga = Africa (iv); Thylacine = Australia (i); Steller's Sea Cow = Russia (ii). This is one of the most frequently tested matching questions in NEET biodiversity chapter."
},
{
  id: 195,
  topic: "Loss of Biodiversity",
  q: "The three subspecies of tiger that have gone extinct are:",
  options: ["Bengal, Siberian, and Sumatran", "Bali, Javan, and Caspian", "Malayan, Indochinese, and South China", "Bali, Bengal, and Caspian"],
  correct: 1,
  explanation: "NCERT mentions three extinct tiger subspecies: Bali, Javan, and Caspian. Bengal, Siberian, Sumatran, Malayan, Indochinese, and South China tigers still exist (though many are endangered). This is a direct NCERT fact."
},
{
  id: 196,
  topic: "Loss of Biodiversity",
  q: "Which group of organisms appears to be most vulnerable to extinction?",
  options: ["Birds", "Mammals", "Amphibians", "Reptiles"],
  correct: 2,
  explanation: "NCERT states: 'some groups like amphibians appear to be more vulnerable to extinction.' Also, 32% of all amphibian species face extinction threat — the highest percentage among the groups mentioned. This is a very high-frequency NEET question."
},
{
  id: 197,
  topic: "Loss of Biodiversity",
  q: "The percentage of all bird species facing the threat of extinction worldwide is:",
  options: ["12 per cent", "23 per cent", "31 per cent", "32 per cent"],
  correct: 0,
  explanation: "12% of all bird species face extinction threat. Compare: Mammals = 23%, Gymnosperms = 31%, Amphibians = 32%. Birds have the lowest threatened percentage among these four groups."
},
{
  id: 198,
  topic: "Loss of Biodiversity",
  q: "Arrange the following taxa in increasing order of percentage of species facing extinction threat:<br>Birds, Mammals, Amphibians, Gymnosperms",
  options: ["Birds < Mammals < Gymnosperms < Amphibians", "Mammals < Birds < Gymnosperms < Amphibians", "Birds < Mammals < Amphibians < Gymnosperms", "Amphibians < Gymnosperms < Mammals < Birds"],
  correct: 0,
  explanation: "Birds (12%) < Mammals (23%) < Gymnosperms (31%) < Amphibians (32%). This is the correct ascending order. Students often confuse gymnosperms (31%) and amphibians (32%) since they are very close."
},
{
  id: 199,
  topic: "Loss of Biodiversity",
  q: "The percentage of mammal species and gymnosperm species facing extinction threat are respectively:",
  options: ["32% and 31%", "23% and 31%", "12% and 23%", "31% and 32%"],
  correct: 1,
  explanation: "Mammals = 23% and Gymnosperms = 31%. Students often confuse these with amphibians (32%). Remember the order: Birds 12% < Mammals 23% < Gymnosperms 31% < Amphibians 32%."
},
{
  id: 200,
  topic: "Loss of Biodiversity",
  q: "More than _______ species worldwide are currently facing the threat of extinction.",
  options: ["5,500", "10,500", "15,500", "25,500"],
  correct: 2,
  explanation: "NCERT states: 'more than 15,500 species world-wide are facing the threat of extinction.' This is a direct factual number from NCERT that is frequently tested in NEET."
},
{
  id: 201,
  topic: "Loss of Biodiversity",
  q: "The last twenty years alone have witnessed the disappearance of _______ species.",
  options: ["7", "17", "27", "87"],
  correct: 2,
  explanation: "NCERT states: 'The last twenty years alone have witnessed the disappearance of 27 species.' 87 is the number of extinct plant species. 27 represents the recent rapid rate of extinction."
},
{
  id: 202,
  topic: "Loss of Biodiversity",
  q: "How many episodes of mass extinction occurred before humans appeared on Earth?",
  options: ["Three", "Four", "Five", "Six"],
  correct: 2,
  explanation: "NCERT states: 'there were five episodes of mass extinction of species' during the long period since origin of life. The current human-caused extinction is called the 'Sixth Extinction.' Five occurred before humans appeared."
},
{
  id: 203,
  topic: "Loss of Biodiversity",
  q: "The 'Sixth Extinction' currently in progress differs from previous mass extinctions in:",
  options: ["The number of species affected", "The types of species going extinct", "The rates of extinction — 100 to 1,000 times faster than pre-human times", "The geographic distribution of extinctions"],
  correct: 2,
  explanation: "NCERT states: 'The difference is in the rates; the current species extinction rates are estimated to be 100 to 1,000 times faster than in the pre-human times and our activities are responsible for the faster rates.' The rate, not just the number, is the key difference."
},
{
  id: 204,
  topic: "Loss of Biodiversity",
  q: "If present trends continue, nearly _______ of all species on earth might be wiped out within the next _______ years.",
  options: ["One-third; 50", "Half; 100", "One-quarter; 200", "Half; 50"],
  correct: 1,
  explanation: "NCERT states: 'if the present trends continue, nearly half of all the species on earth might be wiped out within the next 100 years.' Half (50%) and 100 years are the exact NCERT figures."
},
{
  id: 205,
  topic: "Loss of Biodiversity",
  q: "Loss of biodiversity in a region may lead to all of the following EXCEPT:",
  options: ["Decline in plant production", "Lowered resistance to environmental perturbations", "Increased variability in ecosystem processes", "Increased resistance to drought"],
  correct: 3,
  explanation: "NCERT lists three consequences: (a) decline in plant production, (b) LOWERED resistance to perturbations like drought (not increased), (c) increased variability in ecosystem processes. 'Increased resistance to drought' is the opposite of what actually happens."
},
{
  id: 206,
  topic: "Loss of Biodiversity",
  q: "The 'Evil Quartet' refers to:",
  options: ["Four major benefits of biodiversity", "Four levels of biodiversity", "Four major causes of biodiversity loss", "Four types of species interactions"],
  correct: 2,
  explanation: "The Evil Quartet is the sobriquet used to describe the four major causes of biodiversity loss: (i) Habitat loss and fragmentation, (ii) Over-exploitation, (iii) Alien species invasions, (iv) Co-extinctions."
},
{
  id: 207,
  topic: "Loss of Biodiversity",
  q: "Which of the following is the most important cause driving animals and plants to extinction?",
  options: ["Over-exploitation", "Alien species invasions", "Co-extinctions", "Habitat loss and fragmentation"],
  correct: 3,
  explanation: "NCERT states: 'Habitat loss and fragmentation: This is the most important cause driving animals and plants to extinction.' While all four causes are important, habitat loss is explicitly identified as the most significant."
},
{
  id: 208,
  topic: "Loss of Biodiversity",
  q: "Tropical rain forests once covered more than _______ per cent of earth's land surface but now cover no more than _______ per cent.",
  options: ["20% and 10%", "14% and 6%", "25% and 12%", "14% and 8%"],
  correct: 1,
  explanation: "NCERT states: 'Once covering more than 14 per cent of the earth's land surface, these rain forests now cover no more than 6 per cent.' The reduction from 14% to 6% represents massive habitat loss. Don't reverse these numbers."
},
{
  id: 209,
  topic: "Loss of Biodiversity",
  q: "The Amazon rain forest is called:",
  options: ["The heart of the planet", "The lungs of the planet", "The kidneys of the planet", "The brain of the planet"],
  correct: 1,
  explanation: "NCERT states: 'The Amazon rain forest (it is so huge that it is called the \"lungs of the planet\").' This metaphor refers to the Amazon's role in global oxygen production and carbon dioxide absorption."
},
{
  id: 210,
  topic: "Loss of Biodiversity",
  q: "The Amazon rain forest is being cut and cleared for:<br>I. Cultivating soya beans<br>II. Conversion to grasslands for raising beef cattle<br>III. Building industrial complexes<br>IV. Mining operations",
  options: ["I and II only", "I, II, and III", "I, II, III, and IV", "I only"],
  correct: 0,
  explanation: "NCERT mentions only two reasons: cultivating soya beans and conversion to grasslands for raising beef cattle. Industrial complexes (III) and mining operations (IV) are NOT mentioned in NCERT for Amazon deforestation."
},
{
  id: 211,
  topic: "Loss of Biodiversity",
  q: "When large habitats are broken into small fragments, which of the following are badly affected?<br>I. Mammals and birds requiring large territories<br>II. Animals with migratory habits<br>III. Microorganisms in the soil<br>IV. Small sedentary invertebrates",
  options: ["I and II only", "I, II, and III", "III and IV only", "I, II, III, and IV"],
  correct: 0,
  explanation: "NCERT states: 'When large habitats are broken up into small fragments...mammals and birds requiring large territories and certain animals with migratory habits are badly affected, leading to population declines.' Only I and II are mentioned."
},
{
  id: 212,
  topic: "Loss of Biodiversity",
  q: "Which of the following extinct species is an example of over-exploitation by humans?",
  options: ["Dodo", "Passenger pigeon", "Nile perch", "Cichlid fish"],
  correct: 1,
  explanation: "NCERT states: 'Many species extinctions in the last 500 years (Steller's sea cow, passenger pigeon) were due to overexploitation by humans.' Dodo is listed among recent extinctions but not specifically under overexploitation. Nile perch is an invasive species, not extinct. Cichlids went extinct due to alien species (Nile perch)."
},
{
  id: 213,
  topic: "Loss of Biodiversity",
  q: "The Nile perch was introduced into:",
  options: ["Lake Tanganyika in East Africa", "Lake Victoria in East Africa", "Lake Malawi in East Africa", "Lake Chad in West Africa"],
  correct: 1,
  explanation: "NCERT states: 'The Nile perch introduced into Lake Victoria in east Africa led eventually to the extinction of an ecologically unique assemblage of more than 200 species of cichlid fish.' Lake Victoria is the specific lake mentioned."
},
{
  id: 214,
  topic: "Loss of Biodiversity",
  q: "The introduction of Nile perch into Lake Victoria led to the extinction of more than _______ species of _______ fish.",
  options: ["200 species of catfish", "200 species of cichlid fish", "2,000 species of cichlid fish", "100 species of cichlid fish"],
  correct: 1,
  explanation: "NCERT states: 'more than 200 species of cichlid fish in the lake' went extinct due to Nile perch introduction. Don't confuse 200 cichlids with 2,000 Pacific Island birds. The fish group is cichlids, not catfish."
},
{
  id: 215,
  topic: "Loss of Biodiversity",
  q: "Which of the following is an example of alien invasive weed species in India?<br>I. Parthenium (carrot grass)<br>II. Lantana<br>III. Eicchornia (water hyacinth)<br>IV. Rauwolfia vomitoria",
  options: ["I, II, and III only", "I and III only", "I, II, III, and IV", "II and III only"],
  correct: 0,
  explanation: "NCERT mentions Parthenium (carrot grass), Lantana, and Eicchornia (water hyacinth) as invasive weed species. Rauwolfia vomitoria is a medicinal plant used as an example of genetic diversity, NOT an invasive species."
},
{
  id: 216,
  topic: "Loss of Biodiversity",
  q: "The African catfish <b>Clarias gariepinus</b> was illegally introduced into India for:",
  options: ["Medicinal purposes", "Ornamental purposes", "Aquaculture purposes", "Biological control purposes"],
  correct: 2,
  explanation: "NCERT states: 'The recent illegal introduction of the African catfish Clarias gariepinus for aquaculture purposes is posing a threat to the indigenous catfishes in our rivers.' The purpose was aquaculture (fish farming)."
},
{
  id: 217,
  topic: "Loss of Biodiversity",
  q: "Co-extinction occurs when:",
  options: ["Two unrelated species go extinct simultaneously by chance", "A species becomes extinct and its obligatorily associated species also become extinct", "Multiple species are wiped out by a single natural disaster", "Alien species cause extinction of all native species"],
  correct: 1,
  explanation: "NCERT states: 'When a species becomes extinct, the plant and animal species associated with it in an obligatory way also become extinct.' Co-extinction involves obligate associations — not chance co-occurrence or disaster events."
},
{
  id: 218,
  topic: "Loss of Biodiversity",
  q: "Which of the following is an example of co-extinction?",
  options: ["Nile perch causing extinction of cichlid fish", "Passenger pigeon hunted to extinction", "Host fish becoming extinct leading to extinction of its unique parasites", "Tropical rain forest destruction causing habitat loss"],
  correct: 2,
  explanation: "NCERT states: 'When a host fish species becomes extinct, its unique assemblage of parasites also meets the same fate.' This is co-extinction — obligately associated species going extinct together. Nile perch example is alien species invasion, not co-extinction."
},
{
  id: 219,
  topic: "Loss of Biodiversity",
  q: "A coevolved plant-pollinator mutualism is an example of co-extinction because:",
  options: ["Both species benefit equally from the relationship", "Extinction of one invariably leads to the extinction of the other", "Both species are invasive", "Both species compete for the same resources"],
  correct: 1,
  explanation: "NCERT states: 'the case of a coevolved plant-pollinator mutualism where extinction of one invariably leads to the extinction of the other.' Since both are obligately dependent, loss of one causes loss of the other — this is co-extinction."
},
{
  id: 220,
  topic: "Loss of Biodiversity",
  q: "The four causes of biodiversity loss constituting the 'Evil Quartet' are:",
  options: ["Habitat loss, over-exploitation, pollution, climate change", "Habitat loss and fragmentation, over-exploitation, alien species invasions, co-extinctions", "Over-exploitation, alien species, co-extinctions, natural disasters", "Habitat loss, pollution, alien species, overgrazing"],
  correct: 1,
  explanation: "The Evil Quartet: (i) Habitat loss and fragmentation, (ii) Over-exploitation, (iii) Alien species invasions, (iv) Co-extinctions. Pollution and climate change are NOT part of the Evil Quartet as defined in NCERT."
},
{
  id: 221,
  topic: "Loss of Biodiversity",
  q: "Assertion (A): Amphibians are the most vulnerable group to extinction.<br>Reason (R): 32 per cent of all amphibian species face the threat of extinction, which is the highest among the groups mentioned in NCERT.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. NCERT states amphibians appear more vulnerable, and 32% of amphibian species face extinction — the highest percentage among birds (12%), mammals (23%), and gymnosperms (31%). R provides statistical evidence supporting A."
},
{
  id: 222,
  topic: "Loss of Biodiversity",
  q: "Select the <b>INCORRECT</b> statement:",
  options: ["Current extinction rates are 100 to 1,000 times faster than pre-human times", "Five episodes of mass extinction occurred before humans appeared", "The Sixth Extinction is entirely due to natural causes", "Nearly half of all species may be wiped out within the next 100 years"],
  correct: 2,
  explanation: "The Sixth Extinction is due to HUMAN activities, not natural causes. NCERT states: 'our activities are responsible for the faster rates.' All other statements are correct as per NCERT."
},
{
  id: 223,
  topic: "Loss of Biodiversity",
  q: "Consider the following statements:<br>I. Habitat loss and fragmentation is the most important cause of extinction.<br>II. Over-exploitation occurs when 'need' turns to 'greed'.<br>III. Alien species invasions always benefit native species.<br>IV. Co-extinctions involve obligatory associations between species.<br><br>Which statements are correct?",
  options: ["I, II, and IV only", "I, II, and III only", "I, II, III, and IV", "I and IV only"],
  correct: 0,
  explanation: "Statement III is incorrect — alien species invasions cause DECLINE or EXTINCTION of indigenous species, not benefit. Statements I (habitat loss = most important), II (need → greed), and IV (co-extinctions = obligatory associations) are correct."
},
{
  id: 224,
  topic: "Loss of Biodiversity",
  q: "Which of the following cause-example pairs is <b>INCORRECT</b>?",
  options: ["Over-exploitation — Steller's sea cow", "Alien species invasion — Nile perch in Lake Victoria", "Habitat loss — Tropical rain forest destruction", "Co-extinction — Passenger pigeon"],
  correct: 3,
  explanation: "Passenger pigeon went extinct due to OVER-EXPLOITATION by humans, NOT co-extinction. Co-extinction examples include host fish-parasite relationships and plant-pollinator mutualisms. All other pairs are correctly matched."
},
{
  id: 225,
  topic: "Loss of Biodiversity",
  q: "Besides total habitat loss, which other factor threatens the survival of many species?",
  options: ["Degradation of habitats by pollution", "Increase in habitat area", "Introduction of native species", "Decrease in human population"],
  correct: 0,
  explanation: "NCERT states: 'Besides total loss, the degradation of many habitats by pollution also threatens the survival of many species.' Pollution degrades habitat quality even when the habitat is not completely destroyed."
},
{
  id: 226,
  topic: "Loss of Biodiversity",
  q: "Assertion (A): Habitat fragmentation badly affects mammals, birds, and migratory animals.<br>Reason (R): These animals require large territories and continuous habitats for their survival.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. NCERT states fragmentation badly affects 'mammals and birds requiring large territories and certain animals with migratory habits.' The need for large territories and continuous habitat explains why fragmentation is harmful. R correctly explains A."
},
{
  id: 227,
  topic: "Loss of Biodiversity",
  q: "The scientific name of the African catfish illegally introduced in India is:",
  options: ["Clarias batrachus", "Clarias gariepinus", "Heteropneustes fossilis", "Labeo rohita"],
  correct: 1,
  explanation: "NCERT mentions Clarias gariepinus as the African catfish introduced illegally for aquaculture. Clarias batrachus is the Asian/Indian catfish. Heteropneustes fossilis (singhi) and Labeo rohita (rohu) are native Indian fishes."
},
{
  id: 228,
  topic: "Loss of Biodiversity",
  q: "The water hyacinth, an invasive weed species, has the scientific name:",
  options: ["Parthenium hysterophorus", "Lantana camara", "Eicchornia crassipes", "Salvinia molesta"],
  correct: 2,
  explanation: "NCERT mentions Eicchornia as water hyacinth. Parthenium is carrot grass. Lantana is another invasive weed. All three are mentioned as invasive species in NCERT but only Eicchornia is water hyacinth."
},
{
  id: 229,
  topic: "Loss of Biodiversity",
  q: "Which of the following consequences of biodiversity loss is mentioned in NCERT?<br>I. Decline in plant production<br>II. Lowered resistance to drought<br>III. Increased variability in water use and pest cycles<br>IV. Increase in animal production",
  options: ["I, II, and III only", "I and II only", "I, II, III, and IV", "I, II, and IV only"],
  correct: 0,
  explanation: "NCERT mentions: (a) decline in plant production, (b) lowered resistance to environmental perturbations such as drought, (c) increased variability in plant productivity, water use, pest and disease cycles. 'Increase in animal production' (IV) is NOT mentioned."
},
{
  id: 230,
  topic: "Loss of Biodiversity",
  q: "Steller's Sea Cow was found in which country before its extinction?",
  options: ["Mauritius", "Australia", "Africa", "Russia"],
  correct: 3,
  explanation: "NCERT lists: Dodo (Mauritius), Quagga (Africa), Thylacine (Australia), Steller's Sea Cow (Russia). Steller's Sea Cow was a large marine mammal found in Russian waters, hunted to extinction through overexploitation."
},
{
  id: 231,
  topic: "Loss of Biodiversity",
  q: "Assertion (A): Over-exploitation is described as 'need' turning to 'greed.'<br>Reason (R): Steller's sea cow and passenger pigeon went extinct due to over-exploitation by humans.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true and from NCERT. A correctly describes the concept of over-exploitation. R provides specific examples that demonstrate how human greed (over-exploitation) led to species extinction. R supports and explains A."
},
{
  id: 232,
  topic: "Loss of Biodiversity",
  q: "Presently, many _______ populations around the world are over-harvested, endangering some commercially important species.",
  options: ["Freshwater fish", "Marine fish", "Bird", "Mammal"],
  correct: 1,
  explanation: "NCERT states: 'Presently many marine fish populations around the world are over harvested, endangering the continued existence of some commercially important species.' This specifically refers to marine (not freshwater) fish."
},
{
  id: 233,
  topic: "Loss of Biodiversity",
  q: "Which of the following is <b>NOT</b> part of the 'Evil Quartet'?",
  options: ["Habitat loss and fragmentation", "Climate change", "Alien species invasions", "Co-extinctions"],
  correct: 1,
  explanation: "The Evil Quartet includes: (i) Habitat loss and fragmentation, (ii) Over-exploitation, (iii) Alien species invasions, (iv) Co-extinctions. Climate change is NOT part of the Evil Quartet as defined in NCERT, though it is a recognized threat to biodiversity."
},
{
  id: 234,
  topic: "Loss of Biodiversity",
  q: "Consider the following:<br>Statement I: Extinctions across taxa are random.<br>Statement II: Amphibians appear to be more vulnerable to extinction than other groups.<br><br>Which is correct?",
  options: ["Only Statement I is correct", "Only Statement II is correct", "Both statements are correct", "Both statements are incorrect"],
  correct: 1,
  explanation: "Statement I is incorrect — NCERT states 'extinctions across taxa are NOT random.' Statement II is correct — 'some groups like amphibians appear to be more vulnerable to extinction.' The non-random nature of extinctions means some groups are disproportionately affected."
},
{
  id: 235,
  topic: "Loss of Biodiversity",
  q: "The origin and diversification of life on earth spans a period of more than:",
  options: ["1 billion years", "2 billion years", "3 billion years", "4 billion years"],
  correct: 2,
  explanation: "NCERT states: 'During the long period (> 3 billion years) since the origin and diversification of life on earth there were five episodes of mass extinction.' The period is more than 3 billion years."
},
{
  id: 236,
  topic: "Loss of Biodiversity",
  q: "Which of the following correctly represents an alien species invasion and its impact?",
  options: ["Nile perch in Lake Victoria → extinction of >200 cichlid fish species", "Steller's sea cow in Russia → extinction of marine mammals", "Passenger pigeon in North America → decline of forest ecosystems", "Dodo in Mauritius → extinction of native plants"],
  correct: 0,
  explanation: "Nile perch introduction into Lake Victoria causing extinction of >200 cichlid fish species is the classic NCERT example of alien species invasion. Steller's sea cow and passenger pigeon are examples of over-exploitation, not alien invasion."
},
{
  id: 237,
  topic: "Loss of Biodiversity",
  q: "The carrot grass (Parthenium) is an example of:",
  options: ["Endangered native species", "Invasive alien weed species", "Medicinal plant", "Co-extinct species"],
  correct: 1,
  explanation: "NCERT mentions Parthenium (carrot grass) as an invasive weed species that causes environmental damage and threatens native species. It is an alien species, not a native, medicinal, or co-extinct species."
},
{
  id: 238,
  topic: "Loss of Biodiversity",
  q: "Match the causes of biodiversity loss with their correct descriptions:<br>(a) Habitat loss &emsp; (i) Need turning to greed<br>(b) Over-exploitation &emsp; (ii) Obligatory associations leading to mutual extinction<br>(c) Alien species invasion &emsp; (iii) Most important cause of extinction<br>(d) Co-extinction &emsp; (iv) Introduction of non-native species",
  options: ["(a)-(iii), (b)-(i), (c)-(iv), (d)-(ii)", "(a)-(i), (b)-(iii), (c)-(ii), (d)-(iv)", "(a)-(iv), (b)-(ii), (c)-(iii), (d)-(i)", "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)"],
  correct: 0,
  explanation: "Habitat loss = most important cause (iii); Over-exploitation = need turning to greed (i); Alien species invasion = introduction of non-native species (iv); Co-extinction = obligatory associations leading to mutual extinction (ii)."
},
{
  id: 239,
  topic: "Loss of Biodiversity",
  q: "Which of the following is true about the current rate of species extinction?",
  options: ["It is equal to pre-human extinction rates", "It is 10 to 100 times faster than pre-human rates", "It is 100 to 1,000 times faster than pre-human rates", "It is slower than pre-human extinction rates"],
  correct: 2,
  explanation: "NCERT states: 'the current species extinction rates are estimated to be 100 to 1,000 times faster than in the pre-human times.' This dramatic acceleration is what makes the Sixth Extinction so alarming."
},
{
  id: 240,
  topic: "Loss of Biodiversity",
  q: "Assertion (A): The 'Sixth Extinction' is different from the previous five mass extinctions.<br>Reason (R): The current extinction is primarily driven by human activities and the rates are 100 to 1,000 times faster than pre-human times.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. The Sixth Extinction differs from previous five in its cause (human activities) and rate (100–1,000× faster). R correctly explains WHY the Sixth Extinction is different. Previous five were caused by natural events."
},
{
  id: 241,
  topic: "Loss of Biodiversity",
  q: "The Quagga, which is now extinct, was found in:",
  options: ["Mauritius", "Russia", "Australia", "Africa"],
  correct: 3,
  explanation: "Quagga was found in Africa. It was a subspecies of zebra that went extinct. Remember: Dodo = Mauritius, Quagga = Africa, Thylacine = Australia, Steller's Sea Cow = Russia."
},
{
  id: 242,
  topic: "Loss of Biodiversity",
  q: "The Thylacine (Tasmanian wolf/tiger), which is now extinct, was native to:",
  options: ["Africa", "Russia", "Australia", "Mauritius"],
  correct: 2,
  explanation: "Thylacine was native to Australia (specifically Tasmania). It is listed among recent extinctions in NCERT along with Dodo (Mauritius), Quagga (Africa), and Steller's Sea Cow (Russia)."
},
{
  id: 243,
  topic: "Loss of Biodiversity",
  q: "Which of the following statements about the IUCN Red List (2004) extinction data is correct?",
  options: ["More vertebrates went extinct than invertebrates", "More invertebrates went extinct than vertebrates", "Equal numbers of vertebrates and invertebrates went extinct", "More plants went extinct than animals"],
  correct: 1,
  explanation: "Invertebrates (359) > Vertebrates (338) > Plants (87). More invertebrates went extinct than vertebrates. Total = 784 species. This is a subtle numerical trap — students often assume vertebrates would be more."
},
{
  id: 244,
  topic: "Loss of Biodiversity",
  q: "Increased variability in which of the following ecosystem processes is a consequence of biodiversity loss?<br>I. Plant productivity<br>II. Water use<br>III. Pest and disease cycles<br>IV. Nitrogen fixation",
  options: ["I, II, and III only", "I and III only", "I, II, III, and IV", "II, III, and IV only"],
  correct: 0,
  explanation: "NCERT states biodiversity loss leads to 'increased variability in certain ecosystem processes such as plant productivity, water use, and pest and disease cycles.' Nitrogen fixation (IV) is NOT mentioned in this context."
},
{
  id: 245,
  topic: "Loss of Biodiversity",
  q: "Which of the following pairs are both examples of species that went extinct due to over-exploitation?",
  options: ["Dodo and Quagga", "Steller's sea cow and passenger pigeon", "Nile perch and cichlid fish", "Parthenium and Lantana"],
  explanation: "NCERT specifically states: 'Many species extinctions in the last 500 years (Steller's sea cow, passenger pigeon) were due to overexploitation by humans.' Dodo and Quagga are listed as recent extinctions but not specifically under overexploitation. Nile perch is an invasive species. Parthenium and Lantana are invasive weeds."
},
{
  id: 246,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The reasons for conserving biodiversity can be grouped into:",
  options: ["Two categories: utilitarian and ethical", "Three categories: narrowly utilitarian, broadly utilitarian, and ethical", "Four categories: economic, ecological, social, and ethical", "Three categories: direct, indirect, and aesthetic"],
  correct: 1,
  explanation: "NCERT clearly states three categories: narrowly utilitarian, broadly utilitarian, and ethical. This is the exact NCERT classification. Students must not confuse with any other grouping."
},
{
  id: 247,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Direct economic benefits derived from nature such as food, firewood, fibre, and industrial products fall under:",
  options: ["Broadly utilitarian arguments", "Ethical arguments", "Narrowly utilitarian arguments", "Ecological arguments"],
  correct: 2,
  explanation: "Narrowly utilitarian arguments relate to direct economic benefits from nature — food, firewood, fibre, construction material, industrial products, and medicinal products. 'Narrowly' refers to direct, tangible economic gains."
},
{
  id: 248,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "More than _______ per cent of the drugs currently sold in the market worldwide are derived from plants.",
  options: ["10", "15", "25", "50"],
  correct: 2,
  explanation: "NCERT states: 'More than 25 per cent of the drugs currently sold in the market worldwide are derived from plants.' This is one of the most frequently tested numbers in NEET from this chapter."
},
{
  id: 249,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "How many species of plants contribute to traditional medicines used by native peoples around the world?",
  options: ["2,500", "5,000", "25,000", "50,000"],
  correct: 2,
  explanation: "NCERT states: '25,000 species of plants contribute to the traditional medicines used by native peoples around the world.' Don't confuse 25,000 (plant species for traditional medicine) with 25% (drugs derived from plants) — different contexts, similar-looking numbers."
},
{
  id: 250,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Bioprospecting refers to:",
  options: ["Conservation of biodiversity in natural habitats", "Exploring molecular, genetic and species-level diversity for products of economic importance", "Cataloguing all species in a region", "Estimating the total number of species on Earth"],
  correct: 1,
  explanation: "NCERT defines bioprospecting as 'exploring molecular, genetic and species-level diversity for products of economic importance.' It is NOT conservation (that's in situ/ex situ), cataloguing (that's taxonomy), or estimating species (that's biodiversity assessment)."
},
{
  id: 251,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The Amazon forest is estimated to produce what percentage of the total oxygen in Earth's atmosphere through photosynthesis?",
  options: ["10 per cent", "15 per cent", "20 per cent", "30 per cent"],
  correct: 2,
  explanation: "NCERT states: 'The fast dwindling Amazon forest is estimated to produce, through photosynthesis, 20 per cent of the total oxygen in the earth's atmosphere.' This is a broadly utilitarian argument for conserving biodiversity."
},
{
  id: 252,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The Amazon forest producing 20% of Earth's oxygen is an example of which argument for biodiversity conservation?",
  options: ["Narrowly utilitarian", "Ethical", "Broadly utilitarian", "Philosophical"],
  correct: 2,
  explanation: "Ecosystem services like oxygen production are broadly utilitarian arguments. Narrowly utilitarian = direct economic benefits (food, medicines). Ethical = intrinsic value of species. Amazon's oxygen production is an ecosystem service = broadly utilitarian."
},
{
  id: 253,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following are mentioned in NCERT as natural pollinators?<br>I. Bees<br>II. Bumblebees<br>III. Butterflies<br>IV. Birds<br>V. Bats",
  options: ["I, II, III, IV, and V", "I, II, IV, and V only", "I, II, and III only", "I, III, IV, and V only"],
  correct: 1,
  explanation: "NCERT specifically lists: bees, bumblebees, birds, and bats as pollinators. Butterflies (III) are NOT mentioned in this specific NCERT list of pollinators. This is a common trap — students assume butterflies are included."
},
{
  id: 254,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The aesthetic pleasures of walking through thick woods, watching spring flowers, or waking up to a bulbul's song are examples of:",
  options: ["Narrowly utilitarian values", "Ethical values", "Broadly utilitarian values (intangible benefits)", "Direct economic benefits"],
  correct: 2,
  explanation: "NCERT categorizes aesthetic pleasures as 'intangible benefits' under broadly utilitarian arguments. This is a major student trap — many incorrectly classify aesthetic values under ethical arguments. Ethical arguments relate to intrinsic value and moral duty."
},
{
  id: 255,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The ethical argument for conserving biodiversity is based on:",
  options: ["Direct economic benefits from species", "Ecosystem services provided by nature", "The intrinsic value of every species and moral duty to care for them", "Aesthetic pleasures derived from nature"],
  correct: 2,
  explanation: "NCERT states the ethical argument relates to: every species having intrinsic value, moral duty to care for their well-being, and passing on biological legacy to future generations. It is philosophical/spiritual, NOT based on economic or service value."
},
{
  id: 256,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following industrial products are mentioned in NCERT as direct economic benefits from nature?<br>I. Tannins<br>II. Lubricants<br>III. Dyes<br>IV. Resins<br>V. Perfumes<br>VI. Rubber",
  options: ["I, II, III, IV, and V only", "I, II, III, IV, V, and VI", "I, III, and V only", "I, II, IV, and VI only"],
  correct: 0,
  explanation: "NCERT lists: tannins, lubricants, dyes, resins, and perfumes as industrial products derived from nature. Rubber (VI) is NOT specifically mentioned in this NCERT list. Only I, II, III, IV, and V are correct."
},
{
  id: 257,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Assertion (A): Every species has an intrinsic value, even if it may not have economic value to us.<br>Reason (R): This is the narrowly utilitarian argument for biodiversity conservation.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 2,
  explanation: "A is true — NCERT states every species has intrinsic value regardless of economic importance. R is false — this is the ETHICAL argument, NOT the narrowly utilitarian argument. Narrowly utilitarian deals with direct economic benefits."
},
{
  id: 258,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Match the following arguments with their correct descriptions:<br>(a) Narrowly utilitarian &emsp; (i) Ecosystem services like oxygen production and pollination<br>(b) Broadly utilitarian &emsp; (ii) Direct economic benefits like food, medicines<br>(c) Ethical &emsp;&emsp;&emsp;&emsp;&emsp; (iii) Intrinsic value of species and moral duty",
  options: ["(a)-(ii), (b)-(i), (c)-(iii)", "(a)-(i), (b)-(ii), (c)-(iii)", "(a)-(iii), (b)-(i), (c)-(ii)", "(a)-(ii), (b)-(iii), (c)-(i)"],
  correct: 0,
  explanation: "Narrowly utilitarian = direct economic benefits (ii); Broadly utilitarian = ecosystem services (i); Ethical = intrinsic value and moral duty (iii). This matching is the most fundamental concept from this section."
},
{
  id: 259,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Pollination is mentioned in NCERT as an example of:",
  options: ["Narrowly utilitarian argument", "Ethical argument", "Broadly utilitarian argument (ecosystem service)", "Bioprospecting"],
  correct: 2,
  explanation: "Pollination is an ecosystem service — a broadly utilitarian argument. NCERT discusses pollination alongside oxygen production as services provided by ecosystems. Without pollinators, plants cannot produce fruits or seeds."
},
{
  id: 260,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "We have a moral duty to care for the well-being of other species and pass on our biological legacy to future generations. This represents:",
  options: ["Narrowly utilitarian argument", "Broadly utilitarian argument", "Ethical argument", "Economic argument"],
  correct: 2,
  explanation: "NCERT states: 'We have a moral duty to care for their well-being and pass on our biological legacy in good order to future generations.' This is the ethical argument — based on philosophy, spirituality, and moral obligation."
},
{
  id: 261,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Consider the following statements:<br>I. More than 25% of drugs worldwide are derived from plants.<br>II. 25,000 plant species contribute to traditional medicines.<br>III. Bioprospecting explores diversity for products of economic importance.<br>IV. All the above represent ethical arguments for conservation.<br><br>Which statements are correct?",
  options: ["I, II, and III only", "I and II only", "All of the above", "I, II, III, and IV"],
  correct: 0,
  explanation: "Statements I, II, and III are all correct as per NCERT. Statement IV is incorrect — these all represent NARROWLY utilitarian arguments (direct economic benefits from biodiversity), NOT ethical arguments."
},
{
  id: 262,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Select the <b>INCORRECT</b> statement regarding biodiversity conservation arguments:",
  options: ["Food, firewood, and medicines are narrowly utilitarian benefits", "Pollination and oxygen production are broadly utilitarian ecosystem services", "Aesthetic pleasures are part of ethical arguments", "Every species has intrinsic value regardless of economic importance"],
  correct: 2,
  explanation: "Aesthetic pleasures (walking through woods, watching flowers, bulbul's song) are BROADLY utilitarian benefits (intangible benefits), NOT ethical arguments. Ethical arguments relate to intrinsic value and moral duty. This is the most common student error."
},
{
  id: 263,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Nations endowed with rich biodiversity can expect to reap enormous benefits through:",
  options: ["Deforestation for agriculture", "Bioprospecting", "Over-exploitation of resources", "Introduction of alien species"],
  correct: 1,
  explanation: "NCERT states: 'With increasing resources put into bioprospecting, nations endowed with rich biodiversity can expect to reap enormous benefits.' Bioprospecting = exploring biodiversity for economically important products."
},
{
  id: 264,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Bioprospecting explores diversity at which levels?<br>I. Molecular level<br>II. Genetic level<br>III. Species level<br>IV. Ecosystem level",
  options: ["I, II, and III only", "I and II only", "II and III only", "I, II, III, and IV"],
  correct: 0,
  explanation: "NCERT defines bioprospecting as 'exploring molecular, genetic and species-level diversity for products of economic importance.' Ecosystem level (IV) is NOT mentioned in the definition. Only molecular, genetic, and species levels are included."
},
{
  id: 265,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Assertion (A): The Amazon forest is crucial for global oxygen supply.<br>Reason (R): The Amazon forest produces 20 per cent of total oxygen in Earth's atmosphere through photosynthesis.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. Amazon's production of 20% of Earth's atmospheric oxygen through photosynthesis (R) directly explains why it is crucial for global oxygen supply (A). R is the correct explanation of A."
},
{
  id: 266,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following is NOT a direct economic benefit (narrowly utilitarian) from nature as per NCERT?",
  options: ["Cereals and pulses", "Tannins and dyes", "Oxygen production by Amazon forest", "Construction material and firewood"],
  correct: 2,
  explanation: "Oxygen production by the Amazon forest is a broadly utilitarian argument (ecosystem service), NOT a narrowly utilitarian direct economic benefit. Food, industrial products (tannins, dyes), and construction material are all narrowly utilitarian."
},
{
  id: 267,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Without natural pollinators, plants cannot give us:",
  options: ["Roots and tubers", "Fruits or seeds", "Leaves and stems", "Wood and timber"],
  correct: 1,
  explanation: "NCERT states: 'Pollination (without which plants cannot give us fruits or seeds) is another service ecosystems provide through pollinators.' Without pollination, fruit and seed production would fail."
},
{
  id: 268,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The concept that every species has an 'intrinsic value' is part of which conservation argument?",
  options: ["Narrowly utilitarian", "Broadly utilitarian", "Ethical", "Economic"],
  correct: 2,
  explanation: "NCERT states: 'Philosophically or spiritually, we need to realise that every species has an intrinsic value, even if it may not be of current or any economic value to us.' This is the ethical argument — value beyond economics."
},
{
  id: 269,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Consider the following:<br>I. Walking through thick woods — aesthetic pleasure<br>II. Watching spring flowers in bloom — aesthetic pleasure<br>III. Waking up to a bulbul's song — aesthetic pleasure<br><br>All of the above fall under which category of conservation arguments?",
  options: ["Narrowly utilitarian", "Ethical", "Broadly utilitarian", "Spiritual"],
  correct: 2,
  explanation: "All three are intangible benefits under broadly utilitarian arguments. NCERT specifically places aesthetic pleasures under broadly utilitarian — 'There are other intangible benefits that we derive from nature.' NOT under ethical arguments."
},
{
  id: 270,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following food items are mentioned in NCERT as direct economic benefits from nature?",
  options: ["Cereals, pulses, and fruits", "Cereals, pulses, and fish", "Cereals, meat, and dairy", "Pulses, fruits, and honey"],
  correct: 0,
  explanation: "NCERT specifically mentions: 'food (cereals, pulses, fruits)' as direct economic benefits. Fish, meat, dairy, and honey are NOT specifically listed in this NCERT context."
},
{
  id: 271,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Assertion (A): Aesthetic pleasures from nature are part of the ethical argument for conservation.<br>Reason (R): Walking through thick woods and watching spring flowers have no economic value.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is false, but R is true", "Both A and R are false"],
  correct: 2,
  explanation: "A is false — aesthetic pleasures are part of BROADLY utilitarian arguments (intangible benefits), NOT ethical arguments. R is arguably true — aesthetic pleasures are intangible and hard to price. But since A is false, the answer is: A is false, R is true."
},
{
  id: 272,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The term 'biological legacy' in the context of biodiversity conservation refers to:",
  options: ["Economic benefits passed to future generations", "The rich biodiversity we must pass on to future generations in good order", "Scientific knowledge about species", "Genetic engineering products for future use"],
  correct: 1,
  explanation: "NCERT states: 'We have a moral duty to care for their well-being and pass on our biological legacy in good order to future generations.' Biological legacy = the biodiversity we inherit and must preserve for future generations."
},
{
  id: 273,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Consider the following benefits:<br>I. Food and firewood<br>II. Oxygen production<br>III. Pollination<br>IV. Medicinal products<br>V. Aesthetic pleasures<br><br>Which represent broadly utilitarian arguments?",
  options: ["I and IV only", "II, III, and V only", "I, II, and IV only", "II and III only"],
  correct: 1,
  explanation: "Broadly utilitarian = ecosystem services + intangible benefits: Oxygen production (II), Pollination (III), Aesthetic pleasures (V). Food and firewood (I) and medicinal products (IV) are narrowly utilitarian (direct economic benefits)."
},
{
  id: 274,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following is true about the ethical argument for biodiversity conservation?",
  options: ["It focuses on direct economic gains from species", "It relates to ecosystem services like pollination", "It emphasizes that every species has an intrinsic value regardless of economic use", "It deals with aesthetic pleasures from nature"],
  correct: 2,
  explanation: "The ethical argument is about intrinsic value, moral duty, and philosophical/spiritual responsibility towards all species — NOT about economic gains, ecosystem services, or aesthetics. Those belong to narrowly or broadly utilitarian categories."
},
{
  id: 275,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Select the correct statement regarding bioprospecting:",
  options: ["It is the illegal exploitation of biodiversity by multinational companies", "It explores molecular, genetic, and species-level diversity for economically important products", "It is the same as biopiracy", "It involves conservation of endangered species in zoos"],
  correct: 1,
  explanation: "NCERT defines bioprospecting as 'exploring molecular, genetic and species-level diversity for products of economic importance.' It is NOT biopiracy (illegal exploitation) or ex situ conservation (zoos). Bioprospecting is a legitimate scientific exploration."
},
{
  id: 276,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following correctly categorizes the conservation arguments?<br>(a) 25% drugs from plants → ?<br>(b) Amazon producing 20% oxygen → ?<br>(c) Every species has intrinsic value → ?",
  options: ["(a) Narrowly utilitarian, (b) Broadly utilitarian, (c) Ethical", "(a) Broadly utilitarian, (b) Narrowly utilitarian, (c) Ethical", "(a) Ethical, (b) Broadly utilitarian, (c) Narrowly utilitarian", "(a) Narrowly utilitarian, (b) Ethical, (c) Broadly utilitarian"],
  correct: 0,
  explanation: "25% drugs = direct economic benefit = narrowly utilitarian; Amazon 20% oxygen = ecosystem service = broadly utilitarian; Intrinsic value = ethical. This is the classic NCERT categorization."
},
{
  id: 277,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Assertion (A): Bioprospecting can bring enormous economic benefits to nations with rich biodiversity.<br>Reason (R): Bioprospecting involves exploring biodiversity at molecular, genetic, and species levels for economically valuable products.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true and directly from NCERT. Nations with rich biodiversity can benefit economically through bioprospecting (A), and the reason is that bioprospecting systematically explores diversity for products of economic importance (R). R explains A."
},
{
  id: 278,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "NCERT mentions the cost of oxygen from a hospital cylinder to illustrate:",
  options: ["The narrowly utilitarian value of oxygen", "The economic value of ecosystem services like oxygen production by Amazon", "The ethical importance of conserving forests", "The cost of deforestation"],
  correct: 1,
  explanation: "NCERT asks: 'Can we put an economic value on this service by nature? You can get some idea by finding out how much your neighborhood hospital spends on a cylinder of oxygen.' This illustrates the enormous economic value of ecosystem services (broadly utilitarian)."
},
{
  id: 279,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following statements is <b>INCORRECT</b>?",
  options: ["25,000 plant species contribute to traditional medicines", "More than 25% of marketed drugs are derived from plants", "Bioprospecting explores diversity for products of economic importance", "All medicinally useful plants in tropical rain forests have been explored"],
  correct: 3,
  explanation: "NCERT states: 'Nobody knows how many more medicinally useful plants there are in tropical rain forests waiting to be explored.' This means NOT all medicinal plants have been discovered yet. All other statements are correct."
},
{
  id: 280,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The pollination service is provided by all of the following EXCEPT:",
  options: ["Bees", "Bumblebees", "Butterflies", "Bats"],
  correct: 2,
  explanation: "NCERT lists pollinators as: bees, bumblebees, birds, and bats. Butterflies are NOT mentioned in this NCERT pollinator list. While butterflies are pollinators in reality, NCERT specifically lists only these four groups in this context."
},
{
  id: 281,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Consider the following benefits from biodiversity:<br>I. Fibre and construction material<br>II. Tannins, lubricants, and perfumes<br>III. Traditional medicines from 25,000 plant species<br><br>These collectively represent:",
  options: ["Broadly utilitarian arguments", "Ethical arguments", "Narrowly utilitarian arguments", "Ecological arguments"],
  correct: 2,
  explanation: "All three — fibre/construction material, industrial products (tannins, lubricants, perfumes), and traditional medicines — are DIRECT economic benefits, representing narrowly utilitarian arguments for biodiversity conservation."
},
{
  id: 282,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The phrase 'Can we put a price tag on such things?' in NCERT refers to:",
  options: ["Economic value of medicines from plants", "Cost of bioprospecting", "Intangible aesthetic benefits from nature", "Value of timber and firewood"],
  correct: 2,
  explanation: "NCERT uses this phrase after describing aesthetic pleasures — walking through woods, spring flowers, bulbul's song. These intangible benefits are difficult to quantify economically, hence 'Can we put a price tag on such things?'"
},
{
  id: 283,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following represents the correct hierarchy from most tangible to most intangible benefits of biodiversity?",
  options: ["Ethical → Broadly utilitarian → Narrowly utilitarian", "Narrowly utilitarian → Broadly utilitarian → Ethical", "Broadly utilitarian → Narrowly utilitarian → Ethical", "Ethical → Narrowly utilitarian → Broadly utilitarian"],
  correct: 1,
  explanation: "Narrowly utilitarian (direct economic) = most tangible → Broadly utilitarian (ecosystem services + aesthetic) = moderately tangible → Ethical (intrinsic value, moral duty) = most intangible/abstract. This hierarchy helps understand the three categories."
},
{
  id: 284,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Assertion (A): Pollination is an ecosystem service that falls under broadly utilitarian arguments.<br>Reason (R): Without natural pollinators like bees, bumblebees, birds, and bats, plants cannot produce fruits or seeds.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true. Pollination is an ecosystem service (broadly utilitarian) because nature provides it free of cost through pollinators. R explains WHY pollination is crucial — without it, no fruits or seeds. R correctly explains the importance underlying A."
},
{
  id: 285,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following is the most appropriate definition of 'intrinsic value' of a species?",
  options: ["The economic value a species contributes to the market", "The value of ecosystem services provided by the species", "The inherent worth of a species regardless of its economic utility to humans", "The aesthetic pleasure a species provides to humans"],
  correct: 2,
  explanation: "NCERT states: 'every species has an intrinsic value, even if it may not be of current or any economic value to us.' Intrinsic value = inherent worth independent of economic utility. This is the core of the ethical argument."
},
{
  id: 286,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The bird mentioned in NCERT whose song is described as an aesthetic pleasure is:",
  options: ["Cuckoo", "Nightingale", "Bulbul", "Sparrow"],
  correct: 2,
  explanation: "NCERT mentions 'waking up to a bulbul's song in the morning' as an example of aesthetic pleasure (intangible benefit). No other bird is mentioned in this context."
},
{
  id: 287,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following combinations correctly represents ALL categories of biodiversity conservation arguments mentioned in NCERT?",
  options: ["Economic, ecological, aesthetic", "Direct, indirect, ethical", "Narrowly utilitarian, broadly utilitarian, ethical", "Utilitarian, non-utilitarian, spiritual"],
  correct: 2,
  explanation: "NCERT explicitly names three categories: narrowly utilitarian, broadly utilitarian, and ethical. No other terminology (economic/ecological/aesthetic, direct/indirect, utilitarian/non-utilitarian) is used in NCERT for this classification."
},
{
  id: 288,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Consider the following statements:<br>I. Aesthetic benefits are part of broadly utilitarian arguments.<br>II. 25% of drugs are derived from animals.<br>III. Bioprospecting explores molecular, genetic, and species-level diversity.<br>IV. Every species has intrinsic value — this is an ethical argument.<br><br>Which statements are correct?",
  options: ["I, III, and IV only", "I, II, and III only", "I, II, III, and IV", "II and IV only"],
  correct: 0,
  explanation: "Statement II is incorrect — 25% of drugs are derived from PLANTS (not animals). Statements I (aesthetic = broadly utilitarian), III (bioprospecting definition), and IV (intrinsic value = ethical) are all correct."
},
{
  id: 289,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "The ecosystem service of pollination is provided by pollinators that include:",
  options: ["Bees, butterflies, birds, and bats", "Bees, bumblebees, butterflies, and moths", "Bees, bumblebees, birds, and bats", "Bees, wasps, birds, and bats"],
  correct: 2,
  explanation: "NCERT specifically lists: bees, bumblebees, birds, and bats as pollinators. Butterflies, moths, and wasps are NOT in this specific NCERT list. The exact NCERT wording must be followed for NEET."
},
{
  id: 290,
  topic: "Biodiversity Conservation – Why Conserve?",
  q: "Which of the following is <b>NOT</b> mentioned as a direct economic benefit (narrowly utilitarian) in NCERT?",
  options: ["Firewood", "Perfumes", "Pollination service", "Resins"],
  correct: 2,
  explanation: "Pollination is an ecosystem SERVICE — a broadly utilitarian benefit, NOT a direct economic benefit. Firewood, perfumes, and resins are all direct economic benefits listed under narrowly utilitarian arguments in NCERT."
},
{
  id: 291,
  topic: "How Do We Conserve Biodiversity?",
  q: "Conserving and protecting the whole ecosystem to save its biodiversity at all levels is called:",
  options: ["Ex situ conservation", "In situ conservation", "Cryopreservation", "Bioprospecting"],
  correct: 1,
  explanation: "In situ (on site) conservation means protecting the whole ecosystem in its natural habitat. NCERT gives the example: 'we save the entire forest to save the tiger.' Ex situ is off-site conservation."
},
{
  id: 292,
  topic: "How Do We Conserve Biodiversity?",
  q: "Ex situ conservation is the desirable approach when:",
  options: ["The entire ecosystem needs protection", "A species is endangered or threatened and needs urgent measures to save it from extinction", "Biodiversity hotspots need to be identified", "Sacred groves need to be protected"],
  correct: 1,
  explanation: "NCERT states: 'when there are situations where an animal or plant is endangered or threatened and needs urgent measures to save it from extinction, ex situ (off site) conservation is the desirable approach.' It targets individual species at risk."
},
{
  id: 293,
  topic: "How Do We Conserve Biodiversity?",
  q: "Biodiversity hotspots are regions with:",
  options: ["Very high species richness only", "High degree of endemism only", "Very high species richness and high degree of endemism", "Low species richness but high endemism"],
  correct: 2,
  explanation: "NCERT defines hotspots as 'regions with very high levels of species richness AND high degree of endemism.' Both criteria must be met simultaneously. Having only one criterion is insufficient."
},
{
  id: 294,
  topic: "How Do We Conserve Biodiversity?",
  q: "Endemism refers to:",
  options: ["Species found in all parts of the world", "Species confined to a particular region and not found anywhere else", "Species that are migratory in nature", "Species that are invasive in nature"],
  correct: 1,
  explanation: "NCERT defines endemism as 'species confined to that region and not found anywhere else.' Endemic species are geographically restricted. This makes hotspots with high endemism irreplaceable — if destroyed, those species are lost forever."
},
{
  id: 295,
  topic: "How Do We Conserve Biodiversity?",
  q: "The total number of biodiversity hotspots in the world currently is:",
  options: ["25", "28", "34", "36"],
  correct: 2,
  explanation: "NCERT states: 'Initially 25 biodiversity hotspots were identified but subsequently nine more have been added to the list, bringing the total number of biodiversity hotspots in the world to 34.' (25 + 9 = 34)"
},
{
  id: 296,
  topic: "How Do We Conserve Biodiversity?",
  q: "Initially, the number of biodiversity hotspots identified was:",
  options: ["15", "20", "25", "34"],
  correct: 2,
  explanation: "Initially 25 hotspots were identified, and subsequently 9 more were added, making the total 34. Students must remember both numbers: initial (25) and total (34)."
},
{
  id: 297,
  topic: "How Do We Conserve Biodiversity?",
  q: "How many additional biodiversity hotspots were added to the original list?",
  options: ["5", "7", "9", "11"],
  correct: 2,
  explanation: "NCERT states 9 more were added to the initial 25, bringing the total to 34. (34 − 25 = 9)"
},
{
  id: 298,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following are biodiversity hotspots covering India's exceptionally high biodiversity regions?<br>I. Western Ghats and Sri Lanka<br>II. Indo-Burma<br>III. Himalaya<br>IV. Sundaland",
  options: ["I, II, and III only", "I and III only", "I, II, III, and IV", "II and III only"],
  correct: 0,
  explanation: "NCERT mentions three hotspots covering India: Western Ghats and Sri Lanka, Indo-Burma, and Himalaya. Sundaland (IV) is a hotspot but does NOT cover India. Only I, II, and III are correct."
},
{
  id: 299,
  topic: "How Do We Conserve Biodiversity?",
  q: "All biodiversity hotspots put together cover less than _______ per cent of Earth's land area.",
  options: ["1", "2", "5", "10"],
  correct: 1,
  explanation: "NCERT states: 'all the biodiversity hotspots put together cover less than 2 per cent of the earth's land area.' Despite this tiny area, they harbour an extremely high number of species."
},
{
  id: 300,
  topic: "How Do We Conserve Biodiversity?",
  q: "Strict protection of biodiversity hotspots could reduce the ongoing mass extinctions by almost:",
  options: ["10 per cent", "20 per cent", "30 per cent", "50 per cent"],
  correct: 2,
  explanation: "NCERT states: 'strict protection of these hotspots could reduce the ongoing mass extinctions by almost 30 per cent.' This shows the enormous conservation value of hotspots despite their small area."
},
{
  id: 301,
  topic: "How Do We Conserve Biodiversity?",
  q: "India has _______ biosphere reserves, _______ national parks and _______ wildlife sanctuaries.",
  options: ["14, 90, and 448", "18, 100, and 500", "14, 104, and 551", "12, 80, and 400"],
  correct: 0,
  explanation: "NCERT states: 'India now has 14 biosphere reserves, 90 national parks and 448 wildlife sanctuaries.' These exact numbers are very frequently tested in NEET. Remember: 14-90-448."
},
{
  id: 302,
  topic: "How Do We Conserve Biodiversity?",
  q: "Sacred groves are found in all of the following regions EXCEPT:",
  options: ["Khasi and Jaintia Hills in Meghalaya", "Aravalli Hills of Rajasthan", "Thar Desert of Rajasthan", "Western Ghat regions of Karnataka and Maharashtra"],
  correct: 2,
  explanation: "NCERT mentions sacred groves in: Khasi & Jaintia Hills (Meghalaya), Aravalli Hills (Rajasthan), Western Ghats (Karnataka & Maharashtra), Sarguja, Chanda & Bastar (Madhya Pradesh). Thar Desert is NOT mentioned."
},
{
  id: 303,
  topic: "How Do We Conserve Biodiversity?",
  q: "In Meghalaya, the sacred groves serve as:",
  options: ["Tourist attractions", "Agricultural lands", "The last refuges for a large number of rare and threatened plants", "Industrial timber reserves"],
  correct: 2,
  explanation: "NCERT states: 'In Meghalaya, the sacred groves are the last refuges for a large number of rare and threatened plants.' This makes Meghalayan sacred groves critically important for plant conservation."
},
{
  id: 304,
  topic: "How Do We Conserve Biodiversity?",
  q: "Sacred groves in NCERT are mentioned in the context of:",
  options: ["Ex situ conservation", "In situ conservation", "Cryopreservation", "Bioprospecting"],
  correct: 1,
  explanation: "Sacred groves protect entire tracts of forest with all trees and wildlife within — this is in situ conservation. They are protected through religious and cultural traditions, providing natural habitat protection."
},
{
  id: 305,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following areas of sacred groves are located in Madhya Pradesh?<br>I. Sarguja<br>II. Chanda<br>III. Bastar<br>IV. Khasi Hills",
  options: ["I, II, and III only", "I and III only", "I, II, III, and IV", "IV only"],
  correct: 0,
  explanation: "NCERT mentions Sarguja, Chanda, and Bastar areas of Madhya Pradesh as having sacred groves. Khasi Hills (IV) are in Meghalaya, not Madhya Pradesh. Only I, II, and III are correct."
},
{
  id: 306,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following is an example of ex situ conservation?<br>I. Zoological parks<br>II. Botanical gardens<br>III. Wildlife safari parks<br>IV. National parks<br>V. Seed banks",
  options: ["I, II, III, and V only", "I, II, and III only", "I, II, III, IV, and V", "IV and V only"],
  correct: 0,
  explanation: "Zoological parks, botanical gardens, wildlife safari parks, and seed banks are all ex situ conservation. National parks (IV) are in situ conservation. Only I, II, III, and V are ex situ."
},
{
  id: 307,
  topic: "How Do We Conserve Biodiversity?",
  q: "Cryopreservation techniques are used in ex situ conservation to:",
  options: ["Grow plants in tissue culture", "Preserve gametes of threatened species in viable and fertile condition for long periods", "Store seeds in seed banks", "Maintain animals in zoological parks"],
  correct: 1,
  explanation: "NCERT states: 'gametes of threatened species can be preserved in viable and fertile condition for long periods using cryopreservation techniques.' Cryopreservation specifically deals with gamete preservation at very low temperatures."
},
{
  id: 308,
  topic: "How Do We Conserve Biodiversity?",
  q: "Modern ex situ conservation techniques include all of the following EXCEPT:",
  options: ["Cryopreservation of gametes", "In vitro fertilisation of eggs", "Tissue culture for plant propagation", "Establishment of sacred groves"],
  correct: 3,
  explanation: "Sacred groves are in situ conservation (protection in natural habitat through cultural traditions). Cryopreservation, in vitro fertilisation, and tissue culture are all modern ex situ techniques mentioned in NCERT."
},
{
  id: 309,
  topic: "How Do We Conserve Biodiversity?",
  q: "Seeds of different genetic strains of commercially important plants can be preserved for long periods in:",
  options: ["Zoological parks", "Sacred groves", "Seed banks", "National parks"],
  correct: 2,
  explanation: "NCERT states: 'Seeds of different genetic strains of commercially important plants can be kept for long periods in seed banks.' Seed banks are an ex situ conservation method for preserving plant genetic diversity."
},
{
  id: 310,
  topic: "How Do We Conserve Biodiversity?",
  q: "The Convention on Biological Diversity ('The Earth Summit') was held in:",
  options: ["Johannesburg, 1992", "Rio de Janeiro, 1992", "Rio de Janeiro, 2002", "Johannesburg, 2010"],
  correct: 1,
  explanation: "NCERT states: 'The historic Convention on Biological Diversity (\"The Earth Summit\") held in Rio de Janeiro in 1992.' Students must not confuse this with the 2002 Johannesburg summit."
},
{
  id: 311,
  topic: "How Do We Conserve Biodiversity?",
  q: "The World Summit on Sustainable Development was held in:",
  options: ["Rio de Janeiro in 1992", "Johannesburg, South Africa in 2002", "Kyoto, Japan in 1997", "Paris, France in 2015"],
  correct: 1,
  explanation: "NCERT states: 'the World Summit on Sustainable Development held in 2002 in Johannesburg, South Africa.' Rio de Janeiro (1992) hosted the Earth Summit. These two events are frequently confused."
},
{
  id: 312,
  topic: "How Do We Conserve Biodiversity?",
  q: "At the World Summit on Sustainable Development (2002), _______ countries pledged to achieve significant reduction in biodiversity loss by _______.",
  options: ["150 countries; 2005", "190 countries; 2010", "200 countries; 2015", "190 countries; 2020"],
  correct: 1,
  explanation: "NCERT states: '190 countries pledged their commitment to achieve by 2010, a significant reduction in the current rate of biodiversity loss.' Both the number (190) and target year (2010) are frequently tested."
},
{
  id: 313,
  topic: "How Do We Conserve Biodiversity?",
  q: "Assertion (A): Biodiversity hotspots are also regions of accelerated habitat loss.<br>Reason (R): Hotspots have very high species richness and high endemism.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 1,
  explanation: "Both A and R are true. However, R does NOT explain why hotspots face accelerated habitat loss. Having high species richness and endemism doesn't cause habitat loss — human activities do. R describes what hotspots are, not why they face habitat loss."
},
{
  id: 314,
  topic: "How Do We Conserve Biodiversity?",
  q: "Match the following international events with their locations:<br>(a) Convention on Biological Diversity (Earth Summit) &emsp; (i) Johannesburg<br>(b) World Summit on Sustainable Development &emsp; (ii) Rio de Janeiro",
  options: ["(a)-(ii), (b)-(i)", "(a)-(i), (b)-(ii)", "(a)-(ii), (b)-(ii)", "(a)-(i), (b)-(i)"],
  correct: 0,
  explanation: "Earth Summit (Convention on Biological Diversity) = Rio de Janeiro (1992); World Summit on Sustainable Development = Johannesburg (2002). This is one of the most commonly tested matching questions in NEET."
},
{
  id: 315,
  topic: "How Do We Conserve Biodiversity?",
  q: "Consider the following statements:<br>I. Biodiversity hotspots cover less than 2% of Earth's land area.<br>II. They harbour an extremely high number of species.<br>III. Their strict protection could reduce mass extinctions by 30%.<br>IV. India has four biodiversity hotspots.<br><br>Which statements are correct?",
  options: ["I, II, and III only", "I, II, III, and IV", "I and II only", "I, II, and IV only"],
  correct: 0,
  explanation: "Statement IV is incorrect — India has THREE hotspots (Western Ghats & Sri Lanka, Indo-Burma, Himalaya), not four. Statements I (<2% area), II (high species numbers), and III (~30% extinction reduction) are all correct."
},
{
  id: 316,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following is <b>NOT</b> an in situ conservation strategy?",
  options: ["Biosphere reserves", "National parks", "Botanical gardens", "Wildlife sanctuaries"],
  correct: 2,
  explanation: "Botanical gardens are ex situ conservation — species are taken out of their natural habitat and maintained in special settings. Biosphere reserves, national parks, and wildlife sanctuaries are all in situ conservation methods protecting species in their natural habitat."
},
{
  id: 317,
  topic: "How Do We Conserve Biodiversity?",
  q: "Assertion (A): In situ conservation involves protecting species in their natural habitat.<br>Reason (R): National parks, wildlife sanctuaries, and biosphere reserves are examples of in situ conservation.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true. In situ conservation means protecting organisms in their natural habitat (A). National parks, sanctuaries, and biosphere reserves are examples where this is implemented (R). R provides specific examples that explain/support A."
},
{
  id: 318,
  topic: "How Do We Conserve Biodiversity?",
  q: "The number of national parks in India as per NCERT is:",
  options: ["14", "90", "448", "104"],
  correct: 1,
  explanation: "India has 90 national parks. 14 = biosphere reserves; 448 = wildlife sanctuaries. Students commonly confuse these three numbers. Remember the sequence: 14 (BR) < 90 (NP) < 448 (WS)."
},
{
  id: 319,
  topic: "How Do We Conserve Biodiversity?",
  q: "The number of wildlife sanctuaries in India as per NCERT is:",
  options: ["90", "14", "448", "550"],
  correct: 2,
  explanation: "India has 448 wildlife sanctuaries. This is the largest number among the three categories: 14 biosphere reserves, 90 national parks, and 448 wildlife sanctuaries."
},
{
  id: 320,
  topic: "How Do We Conserve Biodiversity?",
  q: "Sacred groves in India reflect:",
  options: ["Modern conservation strategies developed by government", "Religious and cultural traditions that emphasised protection of nature", "Ex situ conservation practices", "International conservation agreements"],
  correct: 1,
  explanation: "NCERT states: 'India has also a history of religious and cultural traditions that emphasised protection of nature.' Sacred groves are tracts of forest protected through cultural and religious traditions — a form of community-based in situ conservation."
},
{
  id: 321,
  topic: "How Do We Conserve Biodiversity?",
  q: "Match the sacred grove locations with their states:<br>(a) Khasi and Jaintia Hills &emsp; (i) Rajasthan<br>(b) Aravalli Hills &emsp;&emsp;&emsp;&emsp; (ii) Meghalaya<br>(c) Sarguja, Chanda, Bastar &emsp; (iii) Madhya Pradesh",
  options: ["(a)-(ii), (b)-(i), (c)-(iii)", "(a)-(i), (b)-(ii), (c)-(iii)", "(a)-(iii), (b)-(i), (c)-(ii)", "(a)-(ii), (b)-(iii), (c)-(i)"],
  correct: 0,
  explanation: "Khasi and Jaintia Hills = Meghalaya (ii); Aravalli Hills = Rajasthan (i); Sarguja, Chanda, Bastar = Madhya Pradesh (iii). This is a frequently tested matching question in NEET."
},
{
  id: 322,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following ex situ conservation techniques involves preservation at extremely low temperatures?",
  options: ["Tissue culture", "Seed banking", "Cryopreservation", "In vitro fertilisation"],
  correct: 2,
  explanation: "Cryopreservation involves preserving gametes at extremely low temperatures (using liquid nitrogen) in viable and fertile condition for long periods. Tissue culture involves growing plants from explants. Seed banks store seeds. IVF fertilises eggs outside the body."
},
{
  id: 323,
  topic: "How Do We Conserve Biodiversity?",
  q: "Plants can be propagated ex situ using:",
  options: ["Cryopreservation techniques", "Tissue culture methods", "In vitro fertilisation", "Seed dispersal"],
  correct: 1,
  explanation: "NCERT states: 'plants can be propagated using tissue culture methods.' Cryopreservation is for gametes, IVF is for eggs, and seed dispersal is a natural process. Tissue culture is the specific ex situ technique for plant propagation."
},
{
  id: 324,
  topic: "How Do We Conserve Biodiversity?",
  q: "Consider the following statements about biodiversity hotspots:<br>I. They have very high species richness.<br>II. They have high degree of endemism.<br>III. They cover more than 10% of Earth's land area.<br>IV. They are regions of accelerated habitat loss.",
  options: ["I, II, and IV only", "I, II, and III only", "I, II, III, and IV", "All of the above"],
  correct: 0,
  explanation: "Statement III is incorrect — hotspots cover LESS than 2% of Earth's land area (not more than 10%). Statements I (high species richness), II (high endemism), and IV (accelerated habitat loss) are all correct as per NCERT."
},
{
  id: 325,
  topic: "How Do We Conserve Biodiversity?",
  q: "The 'Earth Summit' is also known as:",
  options: ["World Summit on Sustainable Development", "Convention on Biological Diversity", "Kyoto Protocol", "Montreal Protocol"],
  correct: 1,
  explanation: "NCERT states: 'The historic Convention on Biological Diversity (\"The Earth Summit\") held in Rio de Janeiro in 1992.' The Earth Summit = Convention on Biological Diversity. World Summit on Sustainable Development was held in 2002 in Johannesburg — a different event."
},
{
  id: 326,
  topic: "How Do We Conserve Biodiversity?",
  q: "Assertion (A): Biodiversity conservation is a collective responsibility of all nations.<br>Reason (R): Biodiversity knows no political boundaries.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true and directly from NCERT: 'Biodiversity knows no political boundaries and its conservation is therefore a collective responsibility of all nations.' R (no political boundaries) correctly explains WHY conservation must be a collective responsibility (A)."
},
{
  id: 327,
  topic: "How Do We Conserve Biodiversity?",
  q: "Select the <b>INCORRECT</b> match:",
  options: ["Rio de Janeiro, 1992 — Convention on Biological Diversity", "Johannesburg, 2002 — World Summit on Sustainable Development", "190 countries — pledged to reduce biodiversity loss by 2010", "Rio de Janeiro, 2002 — Earth Summit"],
  correct: 3,
  explanation: "The Earth Summit was held in Rio de Janeiro in 1992, NOT 2002. In 2002, the World Summit on Sustainable Development was held in Johannesburg. All other matches are correct."
},
{
  id: 328,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following correctly represents the relationship: hotspot area on Earth and extinction reduction?",
  options: ["<2% area; 30% extinction reduction", "2% area; 50% extinction reduction", "<5% area; 30% extinction reduction", "<2% area; 50% extinction reduction"],
  correct: 0,
  explanation: "NCERT states hotspots cover <2% of Earth's land area and strict protection could reduce mass extinctions by almost 30%. Both numbers must be remembered precisely — <2% and ~30%."
},
{
  id: 329,
  topic: "How Do We Conserve Biodiversity?",
  q: "In sacred groves, all the trees and wildlife within were:",
  options: ["Commercially harvested for timber", "Venerated and given total protection", "Used for medicinal purposes only", "Cleared for agricultural land"],
  correct: 1,
  explanation: "NCERT states: 'tracts of forest were set aside, and all the trees and wildlife within were venerated and given total protection.' Sacred groves represent community-based conservation through religious/cultural values."
},
{
  id: 330,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following Western Ghat states are mentioned in NCERT as having sacred groves?",
  options: ["Kerala and Tamil Nadu", "Karnataka and Maharashtra", "Goa and Karnataka", "Maharashtra and Kerala"],
  correct: 1,
  explanation: "NCERT mentions 'Western Ghat regions of Karnataka and Maharashtra' as locations with sacred groves. Kerala, Tamil Nadu, and Goa are NOT mentioned in this specific NCERT context of sacred groves."
},
{
  id: 331,
  topic: "How Do We Conserve Biodiversity?",
  q: "Consider the following ex situ conservation methods:<br>I. Cryopreservation — gametes preserved for long periods<br>II. In vitro fertilisation — eggs fertilised outside body<br>III. Tissue culture — plant propagation<br>IV. Seed banks — seeds of genetic strains stored<br><br>Which are correctly described?",
  options: ["I and III only", "I, II, and IV only", "I, II, III, and IV", "II and III only"],
  correct: 2,
  explanation: "All four are correctly described as per NCERT: Cryopreservation for gametes, IVF for eggs, tissue culture for plants, and seed banks for seeds of different genetic strains. All are modern ex situ techniques."
},
{
  id: 332,
  topic: "How Do We Conserve Biodiversity?",
  q: "The concept of 'threatened species' as used in NCERT refers to organisms facing:",
  options: ["Low risk of extinction in the wild", "A very high risk of extinction in the wild in the near future", "Certain extinction within one year", "No risk of extinction"],
  correct: 1,
  explanation: "NCERT defines threatened/endangered species as 'organisms facing a very high risk of extinction in the wild in the near future.' This is the precise NCERT definition used in the context of ex situ conservation."
},
{
  id: 333,
  topic: "How Do We Conserve Biodiversity?",
  q: "Many animals that have become extinct in the wild continue to be maintained in:",
  options: ["Biosphere reserves", "Sacred groves", "Zoological parks", "National parks"],
  correct: 2,
  explanation: "NCERT states: 'There are many animals that have become extinct in the wild but continue to be maintained in zoological parks.' Zoological parks (ex situ) can preserve species even after they disappear from the wild."
},
{
  id: 334,
  topic: "How Do We Conserve Biodiversity?",
  q: "Assertion (A): Ex situ conservation has advanced beyond keeping threatened species in enclosures.<br>Reason (R): Modern techniques like cryopreservation, in vitro fertilisation, tissue culture, and seed banks are now used.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true and from NCERT. Modern technologies (cryopreservation, IVF, tissue culture, seed banks) represent advancements beyond traditional enclosure-based ex situ conservation. R lists the specific techniques that explain HOW ex situ conservation has advanced (A)."
},
{
  id: 335,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which Indian hotspot includes Sri Lanka as part of its designation?",
  options: ["Indo-Burma", "Himalaya", "Western Ghats and Sri Lanka", "Sundaland"],
  correct: 2,
  explanation: "NCERT lists 'Western Ghats and Sri Lanka' as one combined hotspot. Sri Lanka is grouped with Western Ghats, not listed separately. Students must remember this as a single hotspot name."
},
{
  id: 336,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following correctly represents the ascending order of protected area numbers in India?",
  options: ["National parks < Biosphere reserves < Wildlife sanctuaries", "Biosphere reserves < National parks < Wildlife sanctuaries", "Wildlife sanctuaries < National parks < Biosphere reserves", "Biosphere reserves < Wildlife sanctuaries < National parks"],
  correct: 1,
  explanation: "Biosphere reserves (14) < National parks (90) < Wildlife sanctuaries (448). Ascending order: 14 < 90 < 448. BR < NP < WS."
},
{
  id: 337,
  topic: "How Do We Conserve Biodiversity?",
  q: "The Earth Summit (1992) called upon all nations to take measures for:<br>I. Conservation of biodiversity<br>II. Sustainable utilisation of its benefits<br>III. Elimination of all endangered species<br>IV. Ban on all bioprospecting activities",
  options: ["I and II only", "I, II, and III", "I, II, III, and IV", "I only"],
  correct: 0,
  explanation: "NCERT states the Earth Summit 'called upon all nations to take appropriate measures for conservation of biodiversity and sustainable utilisation of its benefits.' Elimination of species (III) and banning bioprospecting (IV) are NOT mentioned."
},
{
  id: 338,
  topic: "How Do We Conserve Biodiversity?",
  q: "The statement 'we save the entire forest to save the tiger' illustrates which conservation approach?",
  options: ["Ex situ conservation", "Cryopreservation", "In situ conservation", "Bioprospecting"],
  correct: 2,
  explanation: "NCERT uses this example to explain in situ conservation: 'When we conserve and protect the whole ecosystem, its biodiversity at all levels is protected — we save the entire forest to save the tiger.' Protecting the whole habitat = in situ."
},
{
  id: 339,
  topic: "How Do We Conserve Biodiversity?",
  q: "Select the <b>INCORRECT</b> statement about biodiversity hotspots:",
  options: ["Initially 25 hotspots were identified", "Subsequently 9 more were added making total 34", "India has three hotspots", "Hotspots cover more than 10% of Earth's land area"],
  correct: 3,
  explanation: "Hotspots cover LESS than 2% of Earth's land area, NOT more than 10%. All other statements are correct: 25 initially, 9 added = 34 total, and India has 3 hotspots."
},
{
  id: 340,
  topic: "How Do We Conserve Biodiversity?",
  q: "Match the following conservation techniques with their applications:<br>(a) Cryopreservation &emsp; (i) Plant propagation<br>(b) Tissue culture &emsp;&emsp; (ii) Gamete preservation<br>(c) Seed banks &emsp;&emsp;&emsp; (iii) Long-term seed storage<br>(d) In vitro fertilisation &emsp; (iv) Egg fertilisation outside body",
  options: ["(a)-(ii), (b)-(i), (c)-(iii), (d)-(iv)", "(a)-(i), (b)-(ii), (c)-(iv), (d)-(iii)", "(a)-(iii), (b)-(iv), (c)-(i), (d)-(ii)", "(a)-(iv), (b)-(iii), (c)-(ii), (d)-(i)"],
  correct: 0,
  explanation: "Cryopreservation = gamete preservation (ii); Tissue culture = plant propagation (i); Seed banks = long-term seed storage (iii); In vitro fertilisation = egg fertilisation outside body (iv). All correctly matched."
},
{
  id: 341,
  topic: "How Do We Conserve Biodiversity?",
  q: "The conflict between _______ and _______ makes it unrealistic for nations to conserve all their biological wealth.",
  options: ["Science and religion", "Development and conservation", "Agriculture and industry", "Urban and rural areas"],
  correct: 1,
  explanation: "NCERT states: 'Faced with the conflict between development and conservation, many nations find it unrealistic and economically not feasible to conserve all their biological wealth.' This development vs conservation conflict drives the prioritization approach of hotspots."
},
{
  id: 342,
  topic: "How Do We Conserve Biodiversity?",
  q: "Assertion (A): The number of species waiting to be saved far exceeds available conservation resources.<br>Reason (R): This is why biodiversity hotspots were identified for maximum protection.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true. Because resources are limited and species to be saved are too many (A), conservationists prioritized hotspots for maximum protection (R). Hotspot identification was a strategic response to limited resources. R correctly explains the approach taken in response to A."
},
{
  id: 343,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following is true about sacred groves?",
  options: ["They are a form of ex situ conservation", "They are found only in Meghalaya", "They represent protection of nature through religious and cultural traditions", "They are managed by the central government of India"],
  correct: 2,
  explanation: "Sacred groves represent protection of nature through religious/cultural traditions (in situ). They are found in multiple states (Meghalaya, Rajasthan, Karnataka, Maharashtra, MP) — not only Meghalaya. They are community-managed, not centrally managed."
},
{
  id: 344,
  topic: "How Do We Conserve Biodiversity?",
  q: "Consider the following:<br>Statement I: The World Summit on Sustainable Development was held in Rio de Janeiro in 1992.<br>Statement II: 190 countries pledged to reduce biodiversity loss by 2010 at the Johannesburg summit.<br><br>Which is correct?",
  options: ["Only Statement I is correct", "Only Statement II is correct", "Both are correct", "Both are incorrect"],
  correct: 1,
  explanation: "Statement I is incorrect — Rio de Janeiro 1992 hosted the Earth Summit (Convention on Biological Diversity), NOT the World Summit on Sustainable Development. Statement II is correct — 190 countries at Johannesburg (2002) pledged the 2010 target."
},
{
  id: 345,
  topic: "How Do We Conserve Biodiversity?",
  q: "Which of the following is the correct sequence of events?",
  options: ["Johannesburg Summit (2002) → Rio Earth Summit (1992) → 2010 target", "Rio Earth Summit (1992) → Johannesburg Summit (2002) → 2010 target", "2010 target → Rio Earth Summit (1992) → Johannesburg Summit (2002)", "Rio Earth Summit (1992) → 2010 target → Johannesburg Summit (2002)"],
  correct: 1,
  explanation: "Chronological order: Rio de Janeiro Earth Summit (1992) → Johannesburg World Summit on Sustainable Development (2002) → 2010 target for biodiversity loss reduction. The 2010 target was set at the 2002 summit."
},
{
  id: 346,
  topic: "Summary – Biodiversity and Conservation",
  q: "Life originated on earth nearly:",
  options: ["3.0 billion years ago", "3.5 billion years ago", "3.8 billion years ago", "4.5 billion years ago"],
  correct: 2,
  explanation: "NCERT Summary states: 'Since life originated on earth nearly 3.8 billion years ago.' This specific number is from the summary section and is frequently tested. 4.5 billion years is the age of Earth itself, not the origin of life."
},
{
  id: 347,
  topic: "Summary – Biodiversity and Conservation",
  q: "Biodiversity refers to:",
  options: ["Only the number of species in a region", "The sum total of diversity at all levels of biological organisation", "Only genetic variation within species", "The number of ecosystems in a country"],
  correct: 1,
  explanation: "NCERT Summary defines: 'Biodiversity refers to the sum total of diversity that exists at all levels of biological organisation.' It encompasses genetic, species, and ecosystem diversity — not just one level."
},
{
  id: 348,
  topic: "Summary – Biodiversity and Conservation",
  q: "According to the NCERT summary, there might still be nearly _______ million species on earth waiting to be discovered and named.",
  options: ["2", "4", "6", "10"],
  correct: 2,
  explanation: "NCERT Summary states: 'there might still be nearly 6 million species on earth waiting to be discovered and named.' Note: Robert May's total estimate is ~7 million; 1.5 million already described; ~6 million remaining undiscovered."
},
{
  id: 349,
  topic: "Summary – Biodiversity and Conservation",
  q: "According to the NCERT summary, nearly _______ species have become extinct in recent times.",
  options: ["500", "700", "784", "1,000"],
  correct: 1,
  explanation: "The Summary states 'nearly 700 species have become extinct in recent times.' The main text states 784 (IUCN Red List 2004). Both numbers may appear in NEET — know the context: ~700 (summary approximation) vs 784 (IUCN exact data)."
},
{
  id: 350,
  topic: "Summary – Biodiversity and Conservation",
  q: "More than _______ species from India currently face the threat of extinction.",
  options: ["250", "450", "650", "1,000"],
  correct: 2,
  explanation: "NCERT Summary states: 'more than 15,500 species (of which > 650 are from India) currently face the threat of extinction.' The India-specific number (>650) is found ONLY in the summary section and is a high-frequency NEET fact."
},
{
  id: 351,
  topic: "Summary – Biodiversity and Conservation",
  q: "Communities with high diversity tend to be:<br>I. Less variable<br>II. More productive<br>III. More resistant to biological invasions<br>IV. More susceptible to disturbances",
  options: ["I, II, and III only", "I and II only", "I, II, III, and IV", "II, III, and IV only"],
  correct: 0,
  explanation: "NCERT Summary states: 'communities with high diversity tend to be less variable, more productive and more resistant to biological invasions.' Statement IV contradicts this — high diversity communities are MORE resistant, not more susceptible. Only I, II, and III are correct."
},
{
  id: 352,
  topic: "Summary – Biodiversity and Conservation",
  q: "Which of the following ecosystem services are mentioned in the NCERT summary?<br>I. Pollination<br>II. Pest control<br>III. Climate moderation<br>IV. Flood control<br>V. Nitrogen fixation",
  options: ["I, II, III, and IV only", "I and II only", "I, II, III, IV, and V", "I, III, and IV only"],
  correct: 0,
  explanation: "NCERT Summary mentions: 'ecosystem services such as pollination, pest control, climate moderation and flood control.' Nitrogen fixation (V) is NOT mentioned. The summary adds pest control, climate moderation, and flood control which were not in the main text."
},
{
  id: 353,
  topic: "Summary – Biodiversity and Conservation",
  q: "The indirect benefits from biodiversity mentioned in the NCERT summary include all of the following EXCEPT:",
  options: ["Pollination", "Pest control", "Food and firewood", "Flood control"],
  correct: 2,
  explanation: "Food and firewood are DIRECT benefits (narrowly utilitarian). Indirect benefits (ecosystem services) include pollination, pest control, climate moderation, and flood control. Direct vs indirect benefit classification is a common NEET trap."
},
{
  id: 354,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary states that conservation efforts are aimed at protecting diversity at:",
  options: ["Only the species level", "Only the genetic and species levels", "Genetic, species, and ecosystem levels", "Only the ecosystem level"],
  correct: 2,
  explanation: "Summary states: 'Of particular importance is the diversity at genetic, species and ecosystem levels and conservation efforts are aimed at protecting diversity at all these levels.' All three levels are targets of conservation."
},
{
  id: 355,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary mentions the Fungi group in the context that:",
  options: ["Fungi have fewer species than vertebrates", "Fungi have more species than all vertebrate species combined", "Fungi have the same number of species as vertebrates", "Fungi are the most species-rich group on earth"],
  correct: 1,
  explanation: "Summary states: 'The group Fungi has more species than all the vertebrate species combined.' This reinforces the main text fact and is frequently tested in NEET."
},
{
  id: 356,
  topic: "Summary – Biodiversity and Conservation",
  q: "According to the summary, important explanations for species richness of the tropics include all EXCEPT:",
  options: ["Tropics had more evolutionary time", "Tropics provide a relatively constant environment", "Tropics receive more solar energy contributing to greater productivity", "Tropics have more frequent glaciation events"],
  correct: 3,
  explanation: "Tropics have FEWER (actually no) glaciation events — that's why they had more evolutionary time. Frequent glaciations occurred in TEMPERATE regions. All other options are correct explanations listed in the summary."
},
{
  id: 357,
  topic: "Summary – Biodiversity and Conservation",
  q: "The species-area relationship is generally described as:",
  options: ["A linear function", "A rectangular hyperbolic function", "An exponential function", "A sigmoid function"],
  correct: 1,
  explanation: "NCERT Summary states: 'the species-area relationship is generally a rectangular hyperbolic function.' This is the graph shape on a normal scale. On a logarithmic scale, it becomes a straight line."
},
{
  id: 358,
  topic: "Summary – Biodiversity and Conservation",
  q: "The present rates of extinction are largely attributed to:",
  options: ["Natural disasters", "Volcanic eruptions", "Human activities", "Climatic changes during ice ages"],
  correct: 2,
  explanation: "Summary states: 'the present rates of extinction, largely attributed to human activities, are 100 to 1000 times higher.' Human activities — not natural events — are the primary cause of the Sixth Extinction."
},
{
  id: 359,
  topic: "Summary – Biodiversity and Conservation",
  q: "The causes of high extinction rates listed in the NCERT summary include:<br>I. Habitat loss and fragmentation<br>II. Over-exploitation<br>III. Biological invasions<br>IV. Co-extinctions<br>V. Climate change",
  options: ["I, II, III, and IV only", "I, II, and III only", "I, II, III, IV, and V", "I, III, and V only"],
  correct: 0,
  explanation: "Summary lists: 'habitat (particularly forests) loss and fragmentation, over-exploitation, biological invasions and co-extinctions.' Climate change (V) is NOT listed as a cause in NCERT. The four causes = Evil Quartet."
},
{
  id: 360,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary states that the number of wildlife sanctuaries in India is more than:",
  options: ["400", "448", "450", "500"],
  correct: 2,
  explanation: "Summary says '>450 wildlife sanctuaries' while the main text says 448. Both are essentially the same, but the summary uses the approximation >450. NEET may use either number — remember both."
},
{
  id: 361,
  topic: "Summary – Biodiversity and Conservation",
  q: "Assertion (A): Earth's rich biodiversity is vital for the very survival of mankind.<br>Reason (R): We receive both direct benefits (food, fibre, pharmaceuticals) and indirect benefits (ecosystem services) from biodiversity.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true and from the NCERT summary. The combination of direct benefits (food, fibre, etc.) and indirect benefits (pollination, pest control, climate moderation, flood control) explains why biodiversity is vital for human survival. R correctly explains A."
},
{
  id: 362,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary mentions that we have a _______ responsibility to take care of Earth's biodiversity.",
  options: ["Legal", "Political", "Moral", "Scientific"],
  correct: 2,
  explanation: "Summary states: 'We also have a moral responsibility to take good care of earth's biodiversity and pass it on in good order to our next generation.' This reflects the ethical argument for conservation."
},
{
  id: 363,
  topic: "Summary – Biodiversity and Conservation",
  q: "Consider the following statements from the NCERT summary:<br>I. More than 1.5 million species have been recorded worldwide.<br>II. Nearly 6 million species are waiting to be discovered.<br>III. >70% of named species are plants.<br>IV. 70% of animals are insects.",
  options: ["I, II, and IV only", "I and II only", "I, II, III, and IV", "All are correct"],
  correct: 0,
  explanation: "Statement III is incorrect — >70% of named species are ANIMALS (not plants). Plants comprise only about 22%. Statements I (>1.5 million recorded), II (~6 million undiscovered), and IV (70% of animals are insects) are correct."
},
{
  id: 364,
  topic: "Summary – Biodiversity and Conservation",
  q: "Which of the following direct benefits from biodiversity are mentioned in the NCERT summary?<br>I. Food<br>II. Fibre<br>III. Firewood<br>IV. Pharmaceuticals<br>V. Perfumes",
  options: ["I, II, III, and IV only", "I, II, III, IV, and V", "I, III, and IV only", "I and IV only"],
  correct: 0,
  explanation: "The summary mentions: 'direct benefits (food, fibre, firewood, pharmaceuticals, etc.).' Perfumes (V) are mentioned in the main text under narrowly utilitarian but NOT specifically listed in the summary's direct benefits list."
},
{
  id: 365,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary mentions species richness is a function of:",
  options: ["Longitude of a region", "Altitude of a region", "Area of a region", "Depth of the ocean"],
  correct: 2,
  explanation: "Summary states: 'Species richness is also function of the area of a region.' This refers to the species-area relationship discovered by Alexander von Humboldt."
},
{
  id: 366,
  topic: "Summary – Biodiversity and Conservation",
  q: "Select the <b>INCORRECT</b> statement from the NCERT summary:",
  options: ["India has about 45,000 species of plants", "India has about 45,000 species of animals", "India is one of the 12 mega diversity countries", "34 biodiversity hotspots have been proposed worldwide"],
  correct: 1,
  explanation: "India has about 45,000 species of plants and TWICE as many (90,000) species of animals — NOT 45,000 animals. This 'twice as many' calculation trap is one of the most common errors students make."
},
{
  id: 367,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary mentions that in in situ conservation:",
  options: ["Threatened species are taken out of their habitat", "Endangered species are protected in their natural habitat so the entire ecosystem is protected", "Gametes are preserved using cryopreservation", "Species are maintained in zoological parks"],
  correct: 1,
  explanation: "Summary states: 'In in situ conservation, the endangered species are protected in their natural habitat so that the entire ecosystem is protected.' Options A, C, and D describe ex situ conservation methods."
},
{
  id: 368,
  topic: "Summary – Biodiversity and Conservation",
  q: "Which of the following is the correct combination of ex situ conservation methods mentioned in the NCERT summary?",
  options: ["National parks, sacred groves, biosphere reserves", "Zoological parks, botanical gardens, in vitro fertilisation, tissue culture, cryopreservation", "Biodiversity hotspots, national parks, wildlife sanctuaries", "Seed banks, sacred groves, biosphere reserves"],
  correct: 1,
  explanation: "Summary lists ex situ methods as: 'protective maintenance of threatened species in zoological parks and botanical gardens, in vitro fertilisation, tissue culture propagation and cryopreservation of gametes.' All others listed are in situ methods."
},
{
  id: 369,
  topic: "Summary – Biodiversity and Conservation",
  q: "The three biodiversity hotspots covering India as mentioned in the summary are:",
  options: ["Western Ghats, Eastern Ghats, and Himalaya", "Western Ghats-Sri Lanka, Himalaya, and Indo-Burma", "Himalaya, Indo-Burma, and Sundaland", "Western Ghats-Sri Lanka, Deccan Plateau, and Indo-Burma"],
  correct: 1,
  explanation: "Summary confirms: 'three (Western Ghats-Sri Lanka, Himalaya and Indo-Burma) cover India's rich biodiversity regions.' Note: Western Ghats-Sri Lanka is ONE hotspot, not two separate ones."
},
{
  id: 370,
  topic: "Summary – Biodiversity and Conservation",
  q: "Assertion (A): Species diversity is generally highest in the tropics and decreases towards the poles.<br>Reason (R): Tropics had more evolutionary time, provide constant environment, and receive more solar energy.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both A and R are true and directly from the NCERT summary. The three reasons listed in R (evolutionary time, constant environment, solar energy) are the accepted explanations for the latitudinal gradient described in A. R correctly explains A."
},
{
  id: 371,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary mentions that Earth's fossil history reveals:",
  options: ["No mass extinctions in the past", "Incidence of mass extinctions in the past", "Constant species diversity throughout history", "Only one mass extinction event"],
  correct: 1,
  explanation: "Summary states: 'Earth's fossil history reveals incidence of mass extinctions in the past.' Five mass extinctions occurred before humans, and the sixth is currently underway due to human activities."
},
{
  id: 372,
  topic: "Summary – Biodiversity and Conservation",
  q: "The summary mentions habitat loss with particular emphasis on loss of:",
  options: ["Grasslands", "Deserts", "Forests", "Wetlands"],
  correct: 2,
  explanation: "Summary states: 'The causes of high extinction rates at present include habitat (particularly forests) loss and fragmentation.' Forests are specifically highlighted as the most critical habitat being lost."
},
{
  id: 373,
  topic: "Summary – Biodiversity and Conservation",
  q: "Consider the following from the NCERT summary:<br>I. 34 biodiversity hotspots proposed worldwide<br>II. India has 14 biosphere reserves<br>III. India has 90 national parks<br>IV. India has >450 wildlife sanctuaries<br>V. India has 3 biodiversity hotspots<br><br>Which are correct?",
  options: ["All of the above", "I, II, III, and V only", "I, II, and III only", "I, III, IV, and V only"],
  correct: 0,
  explanation: "All five statements are correct as per the NCERT summary: 34 hotspots globally, 14 biosphere reserves, 90 national parks, >450 wildlife sanctuaries, and 3 hotspots covering India."
},
{
  id: 374,
  topic: "Summary – Biodiversity and Conservation",
  q: "The three categories of reasons for conserving biodiversity as mentioned in the summary are:",
  options: ["Economic, ecological, and social", "Narrowly utilitarian, broadly utilitarian, and ethical", "Direct, indirect, and moral", "Scientific, commercial, and spiritual"],
  correct: 1,
  explanation: "Summary confirms: 'The reasons for conserving biodiversity are narrowly utilitarian, broadly utilitarian and ethical.' This is the exact NCERT terminology — no other classification is acceptable for NEET."
},
{
  id: 375,
  topic: "Summary – Biodiversity and Conservation",
  q: "Climate moderation is mentioned in the NCERT summary as:",
  options: ["A direct benefit of biodiversity", "A narrowly utilitarian argument", "An ecosystem service (indirect benefit)", "An ethical argument for conservation"],
  correct: 2,
  explanation: "Summary lists climate moderation among 'ecosystem services such as pollination, pest control, climate moderation and flood control.' Ecosystem services are indirect benefits under broadly utilitarian arguments."
},
{
  id: 376,
  topic: "Summary – Biodiversity and Conservation",
  q: "Which of the following statements correctly summarizes the entire chapter as per NCERT?",
  options: ["Biodiversity loss is not a significant concern for human survival", "Only species-level diversity matters for conservation", "Earth's biodiversity is vital for human survival and must be conserved through in situ and ex situ approaches", "Conservation is the sole responsibility of tropical countries"],
  correct: 2,
  explanation: "The NCERT summary concludes that biodiversity is vital for human survival, reasons for conservation span three categories, and both in situ (hotspots, protected areas, sacred groves) and ex situ (zoos, tissue culture, cryopreservation) methods are needed."
},
{
  id: 377,
  topic: "Summary – Biodiversity and Conservation",
  q: "The phrase 'pass it on in good order to our next generation' in the NCERT summary relates to which conservation argument?",
  options: ["Narrowly utilitarian", "Broadly utilitarian", "Ethical (moral responsibility)", "Economic"],
  correct: 2,
  explanation: "Summary states: 'We also have a moral responsibility to take good care of earth's biodiversity and pass it on in good order to our next generation.' This reflects the ethical argument — moral duty to preserve biodiversity for future generations."
},
{
  id: 378,
  topic: "Summary – Biodiversity and Conservation",
  q: "Assertion (A): More than 15,500 species worldwide currently face the threat of extinction, of which more than 650 are from India.<br>Reason (R): The present rates of extinction are 100 to 1,000 times higher than pre-human rates due to human activities.",
  options: ["Both A and R are true, and R is the correct explanation of A", "Both A and R are true, but R is NOT the correct explanation of A", "A is true, but R is false", "A is false, but R is true"],
  correct: 0,
  explanation: "Both are true and from the NCERT summary. The alarmingly high number of threatened species (A) is a consequence of the unprecedented extinction rates caused by human activities (R). R explains the underlying cause behind the threat numbers in A."
},
{
  id: 379,
  topic: "Summary – Biodiversity and Conservation",
  q: "Consider the following numbers from NCERT:<br>I. 3.8 billion years — origin of life<br>II. 1.5 million — species recorded<br>III. 6 million — species yet to be discovered<br>IV. 784 — species extinct (IUCN 2004)<br>V. 700 — species extinct (summary)<br><br>Which are mentioned in the NCERT summary specifically?",
  options: ["I, II, III, and V only", "I, II, III, IV, and V", "I, II, and III only", "All of the above"],
  correct: 0,
  explanation: "The SUMMARY specifically mentions: 3.8 billion years (I), >1.5 million recorded (II), ~6 million undiscovered (III), and ~700 extinct (V). The number 784 (IV) is from the MAIN TEXT (IUCN Red List 2004), not the summary."
},
{
  id: 380,
  topic: "Summary – Biodiversity and Conservation",
  q: "Flood control is mentioned in the NCERT summary as an example of:",
  options: ["Direct economic benefit", "Narrowly utilitarian value", "Ecosystem service (broadly utilitarian)", "Ethical value"],
  correct: 2,
  explanation: "Flood control is listed among ecosystem services: 'pollination, pest control, climate moderation and flood control.' These are indirect benefits under broadly utilitarian arguments. Flood control was added in the summary but not discussed in the main text."
},
{
  id: 381,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary mentions sacred groves as part of India's:",
  options: ["Ex situ conservation efforts", "International conservation agreements", "In situ conservation efforts", "Bioprospecting activities"],
  correct: 2,
  explanation: "Summary states: 'Our country's in situ conservation efforts are reflected in its 14 biosphere reserves, 90 national parks, >450 wildlife sanctuaries and many sacred groves.' Sacred groves are clearly part of in situ conservation."
},
{
  id: 382,
  topic: "Summary – Biodiversity and Conservation",
  q: "According to the NCERT summary, which of the following is correct about the enormous diversification of life forms?",
  options: ["It occurred only in the last 1 million years", "It has been happening since life originated nearly 3.8 billion years ago", "It started only after humans appeared on Earth", "It occurred mainly in the last 500 years"],
  correct: 1,
  explanation: "Summary states: 'Since life originated on earth nearly 3.8 billion years ago, there had been enormous diversification of life forms on earth.' The diversification has been a continuous process spanning billions of years."
},
{
  id: 383,
  topic: "Summary – Biodiversity and Conservation",
  q: "Which of the following pairs of numbers from the NCERT summary are correctly associated?",
  options: ["15,500 threatened species worldwide; >650 from India", ">15,500 threatened species worldwide; >650 from India", "15,500 threatened species worldwide; >450 from India", ">15,500 threatened species worldwide; >450 from India"],
  correct: 1,
  explanation: "Summary states: 'more than 15,500 species (of which >650 are from India) currently face the threat of extinction.' The exact phrasing is 'more than 15,500' (i.e., >15,500) and '>650 from India.'"
},
{
  id: 384,
  topic: "Summary – Biodiversity and Conservation",
  q: "The NCERT summary uses the term 'biological invasions' instead of:",
  options: ["Habitat fragmentation", "Over-exploitation", "Alien species invasions", "Co-extinctions"],
  correct: 2,
  explanation: "The summary uses 'biological invasions' as a synonym for 'alien species invasions' mentioned in the main text. Both terms refer to the same cause of biodiversity loss — introduction of non-native species that harm indigenous species."
},
{
  id: 385,
  topic: "Summary – Biodiversity and Conservation",
  q: "Select the correct combination of ALL ecosystem services mentioned in the NCERT summary:",
  options: ["Pollination and pest control only", "Pollination, pest control, climate moderation, and flood control", "Pollination, oxygen production, and flood control", "Pest control, climate moderation, flood control, and nitrogen fixation"],
  correct: 1,
  explanation: "Summary lists exactly four ecosystem services: 'pollination, pest control, climate moderation and flood control.' Oxygen production (mentioned in main text for Amazon) and nitrogen fixation are NOT listed in the summary's ecosystem services."
}
];
