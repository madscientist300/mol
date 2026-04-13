const allQuestions = [
{
  id: 1,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following can serve as respiratory substrates in plants under certain conditions?",
  options: [
    "Carbohydrates only",
    "Carbohydrates and fats only",
    "Carbohydrates, proteins, fats and organic acids",
    "Carbohydrates and proteins only"
  ],
  correct: 2,
  explanation: "As per NCERT, usually carbohydrates are oxidised, but proteins, fats and even organic acids can be used as respiratory substrates in some plants under certain conditions. Students often forget organic acids."
},
{
  id: 2,
  topic: "Introduction – Respiration in Plants",
  q: "<b>Assertion (A):</b> ATP is called the energy currency of the cell.<br><b>Reason (R):</b> Energy released during oxidation in respiration is directly used for cellular processes without any intermediate.",
  options: [
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "ATP is indeed the energy currency (A is true). However, energy released during respiration is NOT used directly — it is first trapped as ATP, which is then broken down when energy is needed. Hence R is false. This is a common NCERT conceptual trap."
},
{
  id: 3,
  topic: "Introduction – Respiration in Plants",
  q: "Consider the following statements:<br>(I) In green plants, all cells carry out photosynthesis<br>(II) Chloroplasts are most often located in cells of the superficial layers<br>(III) Non-green parts of plants need food for oxidation<br>(IV) Food is translocated only to roots in green plants<br>Which of the above statements are correct?",
  options: [
    "I and II only",
    "II and III only",
    "I, II and III",
    "II, III and IV"
  ],
  correct: 1,
  explanation: "Statement I is wrong — not all cells photosynthesize, only those with chloroplasts. Statement IV is wrong — food is translocated to ALL non-green parts, not just roots. Statements II and III are directly from NCERT."
},
{
  id: 4,
  topic: "Introduction – Respiration in Plants",
  q: "In eukaryotes, the breakdown of complex molecules to yield energy during cellular respiration takes place in:",
  options: [
    "Chloroplasts and cytoplasm",
    "Mitochondria only",
    "Cytoplasm only",
    "Cytoplasm and mitochondria"
  ],
  correct: 3,
  explanation: "NCERT clearly states that breakdown of complex molecules occurs in the cytoplasm AND in the mitochondria in eukaryotes. Saying 'mitochondria only' is a common student error — glycolysis occurs in the cytoplasm."
},
{
  id: 5,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following statements is/are correct regarding cellular respiration?<br>(I) It involves breaking of C-C bonds of complex compounds<br>(II) It occurs through oxidation within cells<br>(III) It leads to release of considerable amount of energy<br>(IV) All energy contained in respiratory substrates is released in a single step",
  options: [
    "I and III only",
    "I, II and IV",
    "I, II and III only",
    "I, II, III and IV"
  ],
  correct: 2,
  explanation: "Statements I, II and III are correct as per NCERT definition of respiration. Statement IV is false — energy is NOT released in a single step; it is released in a series of slow stepwise reactions controlled by enzymes."
},
{
  id: 6,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following organisms can prepare their own food by trapping light energy and converting it into chemical energy?",
  options: [
    "Green plants and cyanobacteria",
    "Green plants and fungi",
    "Cyanobacteria and saprophytes",
    "All prokaryotes"
  ],
  correct: 0,
  explanation: "NCERT specifically mentions green plants and cyanobacteria as organisms that prepare their own food via photosynthesis. Fungi are saprophytes. Not all prokaryotes are autotrophic."
},
{
  id: 7,
  topic: "Introduction – Respiration in Plants",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp; Column II<br>(i) Herbivores &emsp; (P) Dependent on dead and decaying matter<br>(ii) Saprophytes &emsp; (Q) Obtain food from plants directly<br>(iii) Carnivores &emsp; (R) Obtain food from plants indirectly<br>(iv) Green plants &emsp; (S) Prepare their own food<br><br>Select the correct option:",
  options: [
    "i-R, ii-P, iii-Q, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-Q, ii-R, iii-P, iv-S",
    "i-P, ii-Q, iii-R, iv-S"
  ],
  correct: 1,
  explanation: "Herbivores obtain food from plants directly (Q). Saprophytes (like fungi) depend on dead/decaying matter (P). Carnivores obtain food from plants indirectly (R) — they eat herbivores. Green plants prepare their own food (S)."
},
{
  id: 8,
  topic: "Introduction – Respiration in Plants",
  q: "Saprophytes like fungi obtain their nutrition by:",
  options: [
    "Trapping light energy for photosynthesis",
    "Directly consuming living organisms",
    "Absorbing minerals from soil only",
    "Depending on dead and decaying matter"
  ],
  correct: 3,
  explanation: "NCERT explicitly states: 'Saprophytes like fungi are dependent on dead and decaying matter.' They are neither photosynthetic nor parasitic as described in this context."
},
{
  id: 9,
  topic: "Introduction – Respiration in Plants",
  q: "The breaking of C-C bonds of complex compounds through oxidation within the cells, leading to release of considerable amount of energy is called:",
  options: [
    "Respiration",
    "Photosynthesis",
    "Fermentation",
    "Photorespiration"
  ],
  correct: 0,
  explanation: "This is the exact NCERT definition of respiration. Students may confuse this with fermentation, but fermentation is a specific anaerobic pathway, not the general definition of respiration."
},
{
  id: 10,
  topic: "Introduction – Respiration in Plants",
  q: "<b>Assertion (A):</b> Energy during respiration is released in a series of slow stepwise reactions.<br><b>Reason (R):</b> These reactions are controlled by enzymes, and energy is trapped as chemical energy in the form of ATP.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both statements are directly from NCERT and are true. The reason that enzymes control these reactions and energy is trapped as ATP correctly explains WHY energy release is slow and stepwise (not all at once)."
},
{
  id: 11,
  topic: "Introduction – Respiration in Plants",
  q: "In green plants, food needs to be translocated to non-green parts because:",
  options: [
    "All cells in the plant are heterotrophic",
    "Only cells containing chloroplasts can carry out photosynthesis",
    "Non-green cells lack mitochondria for respiration",
    "Translocation occurs only for storage purposes"
  ],
  correct: 1,
  explanation: "NCERT states that only cells containing chloroplasts carry out photosynthesis. Non-green cells lack chloroplasts, so they cannot make their own food and need it translocated. They do NOT lack mitochondria — they carry out respiration normally."
},
{
  id: 12,
  topic: "Introduction – Respiration in Plants",
  q: "Consider the following statements about the energy released during respiration:<br>(I) It is released free into the cell directly<br>(II) It is released in a single step<br>(III) It is trapped as chemical energy in the form of ATP<br>(IV) ATP acts as energy currency of the cell<br>Which of the above statements are correct?",
  options: [
    "I and II only",
    "I and III only",
    "I, III and IV",
    "III and IV only"
  ],
  correct: 3,
  explanation: "NCERT explicitly states that energy is NOT released free into the cell (I is wrong) and NOT in a single step (II is wrong). Energy is trapped as ATP (III) and ATP acts as energy currency (IV). This is a classic trap — students may select option C including statement I."
},
{
  id: 13,
  topic: "Introduction – Respiration in Plants",
  q: "The ultimate source of all food that is respired by living organisms for life processes is:",
  options: [
    "Photosynthesis",
    "Chemosynthesis",
    "Fermentation",
    "Nitrogen fixation"
  ],
  correct: 0,
  explanation: "NCERT states: 'ultimately all the food that is respired for life processes comes from photosynthesis.' This includes food for heterotrophs and saprophytes, which indirectly depends on photosynthesis."
},
{
  id: 14,
  topic: "Introduction – Respiration in Plants",
  q: "In eukaryotes, photosynthesis and cellular respiration occur in which organelles respectively?",
  options: [
    "Both in chloroplasts",
    "Both in mitochondria",
    "Chloroplasts; and cytoplasm + mitochondria",
    "Mitochondria; and chloroplasts"
  ],
  correct: 2,
  explanation: "NCERT clearly states photosynthesis occurs in chloroplasts, while breakdown of complex molecules (respiration) takes place in cytoplasm and mitochondria. Option D reverses the locations — a common trap."
},
{
  id: 15,
  topic: "Introduction – Respiration in Plants",
  q: "<b>Assertion (A):</b> All food that is respired for life processes ultimately comes from photosynthesis.<br><b>Reason (R):</b> Animals are autotrophic in nature and can synthesize their own food.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 1,
  explanation: "Assertion is true — NCERT states all respired food ultimately comes from photosynthesis. Reason is false — animals are heterotrophic, not autotrophic. They obtain food from plants directly or indirectly."
},
{
  id: 16,
  topic: "Introduction – Respiration in Plants",
  q: "The carbon skeleton produced during the process of respiration is used as:",
  options: [
    "Waste products to be excreted from the cell",
    "Direct energy source for cellular processes",
    "Fuel for further oxidation only",
    "Precursors for biosynthesis of other molecules in the cell"
  ],
  correct: 3,
  explanation: "NCERT states: 'the carbon skeleton produced during respiration is used as precursors for biosynthesis of other molecules in the cell.' This is an often-overlooked concept — respiration is not just about energy; it provides building blocks too."
},
{
  id: 17,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following statements about respiration is <b>INCORRECT</b>?",
  options: [
    "Energy released by oxidation in respiration is used directly for cellular processes",
    "Respiratory substrates are compounds that are oxidised during respiration",
    "ATP is broken down whenever and wherever energy needs to be utilised",
    "Carbohydrates are usually oxidised to release energy"
  ],
  correct: 0,
  explanation: "NCERT emphasizes that energy released during respiration is NOT used directly. It is first trapped as ATP, which is then broken down when needed. This is one of the most important conceptual traps in this chapter."
},
{
  id: 18,
  topic: "Introduction – Respiration in Plants",
  q: "All living organisms need energy for carrying out daily life activities. Which of the following is/are included in such activities?",
  options: [
    "Absorption and transport only",
    "Movement and reproduction only",
    "Absorption, transport, movement, reproduction and even breathing",
    "Only movement and breathing"
  ],
  correct: 2,
  explanation: "NCERT lists absorption, transport, movement, reproduction and even breathing as life activities requiring energy. The word 'even breathing' is significant — it highlights that breathing itself requires energy, which surprises many students."
},
{
  id: 19,
  topic: "Introduction – Respiration in Plants",
  q: "<b>Assertion (A):</b> In green plants, not all cells, tissues and organs carry out photosynthesis.<br><b>Reason (R):</b> Chloroplasts are most often located in cells of the superficial layers of the plant.",
  options: [
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both A and R are true and directly from NCERT. Since chloroplasts are located mostly in superficial layers, internal/deep cells lack chloroplasts and cannot photosynthesize — hence R correctly explains A."
},
{
  id: 20,
  topic: "Introduction – Respiration in Plants",
  q: "All of the following statements about photosynthesis in green plants are true <b>EXCEPT</b>:",
  options: [
    "Light energy is converted into chemical energy",
    "Energy is stored in bonds of carbohydrates like glucose, sucrose and starch",
    "Cyanobacteria can also prepare their own food via photosynthesis",
    "All cells in a green plant carry out photosynthesis"
  ],
  correct: 3,
  explanation: "NCERT clearly states 'not all cells, tissues and organs photosynthesise' — only cells with chloroplasts (in superficial layers) do. Options A, B and C are all correct as per NCERT."
},
{
  id: 21,
  topic: "Introduction – Respiration in Plants",
  q: "All the energy required for 'life' processes is obtained by:",
  options: [
    "Oxidation of some macromolecules that we call food",
    "Reduction of macromolecules in the cell",
    "Hydrolysis of water molecules",
    "Direct absorption of solar energy by all cells"
  ],
  correct: 0,
  explanation: "NCERT states: 'All the energy required for life processes is obtained by oxidation of some macromolecules that we call food.' The key word is oxidation, not reduction or hydrolysis."
},
{
  id: 22,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following correctly describes the relationship between breathing and cellular respiration?",
  options: [
    "Breathing and cellular respiration are completely unrelated processes",
    "Breathing provides CO₂ which is used in cellular respiration",
    "The process of breathing is very much connected to the process of release of energy from food",
    "Cellular respiration can occur only during active breathing"
  ],
  correct: 2,
  explanation: "NCERT states: 'the process of breathing is very much connected to the process of release of energy from food.' Breathing provides O₂ (not CO₂) for oxidation, and they are connected, not identical or unrelated."
},
{
  id: 23,
  topic: "Introduction – Respiration in Plants",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp; Column II<br>(i) Photosynthesis &emsp; (P) Cytoplasm and mitochondria<br>(ii) Respiration &emsp;&emsp; (Q) Chloroplasts<br>(iii) ATP &emsp;&emsp;&emsp;&emsp;&emsp; (R) Respiratory substrate<br>(iv) Carbohydrate &emsp; (S) Energy currency<br><br>Select the correct match:",
  options: [
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-P, iii-S, iv-R",
    "i-Q, ii-P, iii-R, iv-S",
    "i-P, ii-Q, iii-S, iv-R"
  ],
  correct: 1,
  explanation: "Photosynthesis → Chloroplasts (Q); Respiration → Cytoplasm and mitochondria (P); ATP → Energy currency (S); Carbohydrate → Respiratory substrate (R). Option C is a trap — it swaps ATP and Carbohydrate matches."
},
{
  id: 24,
  topic: "Introduction – Respiration in Plants",
  q: "Consider the following statements:<br>(I) Proteins can be used as respiratory substrates in some plants<br>(II) Fats can serve as respiratory substrates under certain conditions<br>(III) Organic acids cannot be used as respiratory substrates<br>(IV) Carbohydrates are the usual respiratory substrates<br>Which statements are correct?",
  options: [
    "I, II and III",
    "III and IV only",
    "I, III and IV",
    "I, II and IV"
  ],
  correct: 3,
  explanation: "NCERT states that proteins, fats and even organic acids can be used as respiratory substrates under certain conditions. So statement III is false — organic acids CAN be used. Statements I, II and IV are correct."
},
{
  id: 25,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following is the correct sequence of energy transformation during photosynthesis and respiration?",
  options: [
    "Light energy → Chemical energy (in carbohydrate bonds) → ATP",
    "Chemical energy → Light energy → ATP",
    "ATP → Light energy → Chemical energy",
    "Light energy → ATP → Chemical energy (in carbohydrate bonds)"
  ],
  correct: 0,
  explanation: "During photosynthesis, light energy is trapped and converted to chemical energy stored in carbohydrate bonds. During respiration, this chemical energy is released stepwise and trapped as ATP. The correct flow is: Light → Chemical energy in bonds → ATP."
},
{
  id: 26,
  topic: "Introduction – Respiration in Plants",
  q: "A student states: 'Fungi are heterotrophs that obtain food from living host organisms.' With reference to NCERT, this statement is:",
  options: [
    "Correct, as fungi are parasites",
    "Incorrect, as NCERT describes fungi (saprophytes) as dependent on dead and decaying matter",
    "Correct, as all heterotrophs depend on living organisms",
    "Incorrect, as fungi are autotrophs"
  ],
  correct: 1,
  explanation: "NCERT specifically states: 'Saprophytes like fungi are dependent on dead and decaying matter.' While some fungi can be parasitic, the NCERT introduction describes them as saprophytes. Fungi are NOT autotrophs."
},
{
  id: 27,
  topic: "Introduction – Respiration in Plants",
  q: "<b>Assertion (A):</b> Even green plants require food to be translocated to various parts of the plant body.<br><b>Reason (R):</b> All cells of green plants contain chloroplasts and can carry out photosynthesis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — non-green parts need food translocated to them. R is false — NOT all cells of green plants contain chloroplasts. Only cells in superficial layers have chloroplasts. This is precisely why translocation is needed."
},
{
  id: 28,
  topic: "Introduction – Respiration in Plants",
  q: "The compounds that are oxidised during the process of respiration are known as:",
  options: [
    "Enzymes",
    "Coenzymes",
    "Energy carriers",
    "Respiratory substrates"
  ],
  correct: 3,
  explanation: "NCERT defines: 'The compounds that are oxidised during this process are known as respiratory substrates.' This is a direct definitional question — enzymes and coenzymes facilitate the process but are not themselves oxidised as fuel."
},
{
  id: 29,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following is/are true about energy release during cellular respiration?<br>(I) Energy is released in a series of slow stepwise reactions<br>(II) These reactions are controlled by enzymes<br>(III) Energy is trapped as chemical energy in the form of ATP<br>(IV) All energy in respiratory substrates is released free into the cell",
  options: [
    "I, II and III only",
    "I and III only",
    "II and IV only",
    "I, II, III and IV"
  ],
  correct: 0,
  explanation: "Statements I, II and III are directly from NCERT. Statement IV is false — NCERT explicitly states 'all the energy contained in respiratory substrates is NOT released free into the cell.' Energy is trapped as ATP."
},
{
  id: 30,
  topic: "Introduction – Respiration in Plants",
  q: "Which of the following best explains why ATP is called the 'energy currency' of the cell?",
  options: [
    "ATP is the most abundant molecule in the cell",
    "ATP is synthesized during respiration and broken down whenever and wherever energy needs to be utilised",
    "ATP is found exclusively in mitochondria",
    "ATP cannot be recycled or regenerated"
  ],
  correct: 1,
  explanation: "NCERT states ATP is synthesized by trapping energy during respiration and is 'broken down whenever (and wherever) energy needs to be utilised.' This universal role of energy transfer makes it the energy currency. ATP is NOT limited to mitochondria and CAN be recycled."
},
{
  id: 31,
  topic: "Introduction – Respiration in Plants",
  q: "Consider the following pairs:<br>(I) Green plants – Autotrophic<br>(II) Animals – Heterotrophic<br>(III) Fungi – Autotrophic<br>(IV) Cyanobacteria – Autotrophic (can prepare own food)<br>Which pairs are correctly matched?",
  options: [
    "I and II only",
    "I, II and III",
    "I, II and IV",
    "All of the above"
  ],
  correct: 2,
  explanation: "Green plants and cyanobacteria are autotrophic — they prepare their own food via photosynthesis. Animals are heterotrophic. Fungi are NOT autotrophic — they are saprophytes (dependent on dead matter). So III is incorrect."
},
{
  id: 32,
  topic: "Introduction – Respiration in Plants",
  q: "In the context of respiration, which of the following statements is the <b>most accurate</b> as per NCERT?",
  options: [
    "The process of respiration is unconnected to photosynthesis",
    "Respiration occurs only in animals and not in plants",
    "Energy released during oxidation is used directly without involvement of ATP",
    "The carbon skeleton produced during respiration serves as precursors for biosynthesis of other molecules"
  ],
  correct: 3,
  explanation: "NCERT states that carbon skeletons produced during respiration serve as precursors for biosynthesis. Option A is wrong — respiration and photosynthesis are connected. Option B is wrong — all organisms respire. Option C is wrong — energy is channeled through ATP, not used directly."
},
{
  id: 33,
  topic: "Do Plants Breathe?",
  q: "Plants do not possess specialised organs for gaseous exchange. Instead, they use:",
  options: [
    "Lungs and trachea",
    "Stomata and lenticels",
    "Gills and spiracles",
    "Alveoli and bronchioles"
  ],
  correct: 1,
  explanation: "NCERT states plants have no specialised organs for gaseous exchange but use stomata and lenticels for this purpose. Lungs, gills, spiracles, alveoli are all animal respiratory structures."
},
{
  id: 34,
  topic: "Do Plants Breathe?",
  q: "Which of the following is <b>NOT</b> a reason why plants can get along without respiratory organs?",
  options: [
    "Each plant part takes care of its own gas-exchange needs",
    "Plants have an efficient circulatory system that transports gases rapidly between parts",
    "Plants do not present great demands for gas exchange",
    "The distance that gases must diffuse is not great even in large plants"
  ],
  correct: 1,
  explanation: "NCERT explicitly states there is VERY LITTLE transport of gases from one plant part to another. Plants do NOT have an efficient gas transport system — the opposite is true. This is a key NCERT trap where students confuse animal and plant physiology."
},
{
  id: 35,
  topic: "Do Plants Breathe?",
  q: "Consider the following statements:<br>(I) There is very little transport of gases from one plant part to another<br>(II) Roots, stems and leaves respire at rates far higher than animals<br>(III) Each living cell in a plant is located quite close to the surface of the plant<br>(IV) Loose packing of parenchyma cells provides an interconnected network of air spaces<br>Which of the above are correct?",
  options: [
    "I, II and III",
    "II, III and IV",
    "I, III and IV",
    "I, II and IV"
  ],
  correct: 2,
  explanation: "Statement II is false — NCERT states plants respire at rates FAR LOWER than animals, not higher. Statements I, III and IV are directly from NCERT. This is a common trap that reverses the comparison."
},
{
  id: 36,
  topic: "Do Plants Breathe?",
  q: "<b>Assertion (A):</b> During photosynthesis, availability of O₂ is not a problem in photosynthesising cells.<br><b>Reason (R):</b> O₂ is released within the cell during photosynthesis.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both statements are directly from NCERT. O₂ is released as a byproduct of the light reactions of photosynthesis within the cell, which ensures its availability for respiration. Thus R correctly explains A."
},
{
  id: 37,
  topic: "Do Plants Breathe?",
  q: "In thick woody stems, the living cells are:",
  options: [
    "Uniformly distributed throughout the stem cross-section",
    "Organised in thin layers inside and beneath the bark",
    "Found only in the pith region",
    "Absent, as all stem cells are dead"
  ],
  correct: 1,
  explanation: "NCERT specifically states: 'In stems, the living cells are organised in thin layers inside and beneath the bark.' The interior cells are dead and provide only mechanical support. This ensures gas exchange is not a problem."
},
{
  id: 38,
  topic: "Do Plants Breathe?",
  q: "The cells in the interior of thick, woody stems are:",
  options: [
    "Actively photosynthesising cells",
    "Living cells that carry out high rates of respiration",
    "Dead cells that provide only mechanical support",
    "Living parenchyma cells with loose packing"
  ],
  correct: 2,
  explanation: "NCERT states: 'The cells in the interior are dead and provide only mechanical support.' This is why diffusion distance is not a limiting factor — living cells are near the surface, not deep inside."
},
{
  id: 39,
  topic: "Do Plants Breathe?",
  q: "The interconnected network of air spaces in plants is facilitated by:",
  options: [
    "Tight packing of sclerenchyma cells",
    "Presence of tracheids and vessels",
    "Loose packing of parenchyma cells in leaves, stems and roots",
    "Presence of large intercellular spaces in xylem"
  ],
  correct: 2,
  explanation: "NCERT states the loose packing of parenchyma cells in leaves, stems and roots provides an interconnected network of air spaces. Sclerenchyma is tightly packed. Tracheids/vessels are for water transport."
},
{
  id: 40,
  topic: "Do Plants Breathe?",
  q: "The complete combustion of glucose produces:",
  options: [
    "CO₂ and ethanol as end products",
    "CO₂ and H₂O as end products with most energy given out as heat",
    "Pyruvic acid and CO₂ as end products",
    "CO₂, H₂O and all energy trapped as ATP"
  ],
  correct: 1,
  explanation: "NCERT states: 'The complete combustion of glucose, which produces CO₂ and H₂O as end products, yields energy most of which is given out as heat.' Note: not ALL energy is trapped as ATP — most is lost as heat in direct combustion."
},
{
  id: 41,
  topic: "Do Plants Breathe?",
  q: "The strategy used by plant cells to prevent all liberated energy from going out as heat is to:",
  options: [
    "Oxidise glucose in one single step",
    "Store all glucose without oxidising it",
    "Oxidise glucose in several small steps enabling energy coupling to ATP synthesis",
    "Convert glucose to fat before oxidation"
  ],
  correct: 2,
  explanation: "NCERT states: 'The key is to oxidise glucose not in one step but in several small steps enabling some steps to be just large enough such that the energy released can be coupled to ATP synthesis.' This is the fundamental strategy of cellular respiration."
},
{
  id: 42,
  topic: "Do Plants Breathe?",
  q: "Consider the following statements about gas exchange in plants:<br>(I) Plants have specialised organs like lungs for gaseous exchange<br>(II) Stomata and lenticels help in gaseous exchange<br>(III) Only during photosynthesis are large volumes of gases exchanged<br>(IV) Each leaf is well adapted to take care of its own gas exchange needs<br>Which statements are correct?",
  options: [
    "I, II and III",
    "II, III and IV",
    "I and IV only",
    "I, II, III and IV"
  ],
  correct: 1,
  explanation: "Statement I is false — NCERT clearly states plants have NO specialised organs for gaseous exchange. Statements II, III and IV are directly from NCERT. Students often miss that large volume gas exchange occurs ONLY during photosynthesis."
},
{
  id: 43,
  topic: "Do Plants Breathe?",
  q: "<b>Assertion (A):</b> There is very little transport of gases from one plant part to another.<br><b>Reason (R):</b> Each plant part takes care of its own gas-exchange needs.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both statements are true and from NCERT. Because each plant part independently handles its own gas exchange, there is no need for long-distance gas transport — hence R correctly explains A."
},
{
  id: 44,
  topic: "Do Plants Breathe?",
  q: "The first cells on this planet are believed to have lived in an atmosphere that:",
  options: [
    "Was rich in oxygen",
    "Lacked oxygen",
    "Had equal amounts of O₂ and CO₂",
    "Contained only nitrogen"
  ],
  correct: 1,
  explanation: "NCERT states: 'There are sufficient reasons to believe that the first cells on this planet lived in an atmosphere that lacked oxygen.' This is consistent with the idea that early Earth was reducing/anaerobic."
},
{
  id: 45,
  topic: "Do Plants Breathe?",
  q: "Which of the following correctly defines glycolysis?",
  options: [
    "Complete oxidation of glucose to CO₂ and H₂O",
    "Breakdown of glucose to pyruvic acid without the help of oxygen",
    "Conversion of pyruvic acid to acetyl CoA",
    "Oxidation of NADH in the electron transport chain"
  ],
  correct: 1,
  explanation: "NCERT defines glycolysis as: 'This breakdown of glucose to pyruvic acid is called glycolysis.' It is the partial oxidation of glucose without oxygen. Complete oxidation involves further steps like Krebs cycle and ETC."
},
{
  id: 46,
  topic: "Do Plants Breathe?",
  q: "All living organisms retain the enzymatic machinery to partially oxidise glucose without the help of oxygen. This implies that:",
  options: [
    "Aerobic respiration evolved before anaerobic respiration",
    "Glycolysis is an evolutionarily ancient pathway present in all organisms",
    "Only anaerobic organisms can perform glycolysis",
    "Oxygen is essential for all forms of glucose oxidation"
  ],
  correct: 1,
  explanation: "NCERT states all living organisms retain this machinery, indicating glycolysis is evolutionarily ancient and universal. It existed before oxygen appeared in Earth's atmosphere. Aerobic respiration evolved later, not before."
},
{
  id: 47,
  topic: "Do Plants Breathe?",
  q: "Organisms in which the requirement for anaerobic conditions is compulsory are called:",
  options: [
    "Facultative anaerobes",
    "Obligate aerobes",
    "Obligate anaerobes",
    "Facultative aerobes"
  ],
  correct: 2,
  explanation: "NCERT distinguishes between facultative anaerobes (can survive with or without O₂) and obligate anaerobes (requirement for anaerobic condition is obligatory/compulsory). Students commonly confuse these two terms."
},
{
  id: 48,
  topic: "Do Plants Breathe?",
  q: "Which of the following organisms can survive both in the presence and absence of oxygen?",
  options: [
    "Obligate aerobes",
    "Obligate anaerobes",
    "Facultative anaerobes",
    "Strict anaerobes"
  ],
  correct: 2,
  explanation: "Facultative anaerobes can switch between aerobic and anaerobic modes of respiration depending on oxygen availability. Obligate anaerobes can survive ONLY without oxygen. Obligate aerobes require oxygen compulsorily."
},
{
  id: 49,
  topic: "Do Plants Breathe?",
  q: "<b>Assertion (A):</b> Most cells of a plant have at least a part of their surface in contact with air.<br><b>Reason (R):</b> Loose packing of parenchyma cells in leaves, stems and roots provides an interconnected network of air spaces.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both statements are directly from NCERT. The loose packing of parenchyma creates air spaces that ensure most cells contact air — R correctly explains A. This is how gas exchange occurs without specialised organs."
},
{
  id: 50,
  topic: "Do Plants Breathe?",
  q: "During the process of respiration, which of the following is utilised and which are released as products?",
  options: [
    "CO₂ utilised; O₂, H₂O and energy released",
    "O₂ utilised; CO₂, H₂O and energy released",
    "H₂O utilised; O₂, CO₂ and energy released",
    "O₂ and CO₂ utilised; H₂O and energy released"
  ],
  correct: 1,
  explanation: "NCERT states: 'During the process of respiration, oxygen is utilised, and carbon dioxide, water and energy are released as products.' Students sometimes confuse this with photosynthesis where CO₂ and H₂O are utilised."
},
{
  id: 51,
  topic: "Do Plants Breathe?",
  q: "Which of the following is <b>INCORRECT</b> regarding gas exchange in plants?",
  options: [
    "Each plant part takes care of its own gas-exchange needs",
    "Lenticels are openings present in stems for gas exchange",
    "Gases are extensively transported from roots to leaves through specialised channels",
    "Living cells in stems are organised in thin layers inside and beneath the bark"
  ],
  correct: 2,
  explanation: "NCERT explicitly states there is VERY LITTLE transport of gases from one part to another. There are no specialised channels for gas transport in plants. Each part independently handles its own gas exchange."
},
{
  id: 52,
  topic: "Do Plants Breathe?",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Stomata &emsp;&emsp;&emsp;&emsp;&emsp; (P) Opening in woody stems<br>(ii) Lenticels &emsp;&emsp;&emsp;&emsp;&emsp; (Q) Air spaces in plant tissues<br>(iii) Parenchyma &emsp;&emsp;&emsp; (R) Gas exchange in leaves<br>(iv) Interior stem cells &emsp; (S) Dead; mechanical support<br><br>Select the correct match:",
  options: [
    "i-R, ii-P, iii-Q, iv-S",
    "i-P, ii-R, iii-S, iv-Q",
    "i-R, ii-Q, iii-P, iv-S",
    "i-Q, ii-P, iii-R, iv-S"
  ],
  correct: 0,
  explanation: "Stomata → Gas exchange in leaves (R); Lenticels → Openings in woody stems (P); Parenchyma (loose packing) → Air spaces (Q); Interior stem cells → Dead, mechanical support (S). Option C is a trap swapping lenticels and parenchyma."
},
{
  id: 53,
  topic: "Do Plants Breathe?",
  q: "Why is the complete combustion of glucose not a useful strategy for cells?",
  options: [
    "It does not produce CO₂ and H₂O",
    "It yields energy but most of it is given out as heat and cannot be coupled to ATP synthesis",
    "It does not release any energy",
    "It requires anaerobic conditions"
  ],
  correct: 1,
  explanation: "NCERT states that complete combustion yields energy 'most of which is given out as heat.' If all energy is released as heat in one step, it cannot be coupled to useful ATP synthesis. Hence stepwise oxidation is the cellular strategy."
},
{
  id: 54,
  topic: "Do Plants Breathe?",
  q: "Consider the following statements:<br>(I) Large volumes of gases are exchanged during photosynthesis<br>(II) Large volumes of gases are exchanged during respiration in plants<br>(III) Plants respire at rates far lower than animals<br>(IV) Each leaf takes care of its own gas exchange needs during photosynthesis<br>Which statements are correct as per NCERT?",
  options: [
    "I, II, III and IV",
    "I and II only",
    "I, III and IV only",
    "II and III only"
  ],
  correct: 2,
  explanation: "NCERT states 'Only during photosynthesis are large volumes of gases exchanged' — implying during respiration, gas exchange volumes are small. So statement II is incorrect. Statements I, III and IV are correct."
},
{
  id: 55,
  topic: "Do Plants Breathe?",
  q: "The oxidation of glucose in cells occurs in several small steps primarily to:",
  options: [
    "Produce more CO₂ per molecule of glucose",
    "Reduce the requirement for enzymes",
    "Enable coupling of released energy to ATP synthesis",
    "Increase heat production for thermoregulation"
  ],
  correct: 2,
  explanation: "NCERT states the key strategy is to oxidise glucose in several small steps 'enabling some steps to be just large enough such that the energy released can be coupled to ATP synthesis.' The goal is ATP production, not heat generation."
},
{
  id: 56,
  topic: "Do Plants Breathe?",
  q: "<b>Assertion (A):</b> All living organisms retain the enzymatic machinery to partially oxidise glucose without the help of oxygen.<br><b>Reason (R):</b> The first cells on this planet are believed to have lived in an atmosphere that lacked oxygen.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true and from NCERT. Because early cells evolved in an oxygen-free atmosphere, they developed glycolysis (anaerobic pathway). This machinery has been retained in all organisms, even those that now live aerobically. R explains why A is true."
},
{
  id: 57,
  topic: "Do Plants Breathe?",
  q: "Which of the following correctly differentiates facultative anaerobes from obligate anaerobes?",
  options: [
    "Facultative anaerobes can survive only without O₂; obligate anaerobes can survive with or without O₂",
    "Facultative anaerobes can survive with or without O₂; obligate anaerobes require absence of O₂",
    "Both can survive only in the presence of O₂",
    "Both can survive only in the absence of O₂"
  ],
  correct: 1,
  explanation: "Facultative anaerobes are flexible — they can switch between aerobic and anaerobic metabolism. Obligate anaerobes require anaerobic conditions compulsorily — oxygen is toxic to them. Students often reverse these definitions."
},
{
  id: 58,
  topic: "Do Plants Breathe?",
  q: "Which of the following statements about lenticels is correct?",
  options: [
    "They are found in leaves and are the main site of transpiration",
    "They are openings in stems that facilitate gaseous exchange",
    "They are present only in herbaceous stems",
    "They transport water from roots to leaves"
  ],
  correct: 1,
  explanation: "NCERT states that stems 'have openings called lenticels.' Lenticels are present in bark of woody stems and facilitate gaseous exchange. Stomata (not lenticels) are the main sites of transpiration in leaves."
},
{
  id: 59,
  topic: "Do Plants Breathe?",
  q: "A plant cell catabolises the glucose molecule in such a way that not all the liberated energy goes out as heat. This is called:",
  options: [
    "Complete combustion",
    "Spontaneous oxidation",
    "Stepwise controlled oxidation (cellular respiration)",
    "Uncontrolled exothermic reaction"
  ],
  correct: 2,
  explanation: "NCERT describes the cellular strategy as catabolising glucose in several small controlled steps (not all at once) so energy can be trapped as ATP rather than being entirely lost as heat. This is the essence of cellular respiration."
},
{
  id: 60,
  topic: "Do Plants Breathe?",
  q: "Consider the following statements:<br>(I) Most cells of a plant have at least a part of their surface in contact with air<br>(II) This is facilitated by tight packing of collenchyma cells<br>(III) Parenchyma cells in leaves, stems and roots show loose packing<br>(IV) Loose packing provides an interconnected network of air spaces<br>Which statements are correct?",
  options: [
    "I and II only",
    "I, II and III",
    "I, III and IV",
    "II, III and IV"
  ],
  correct: 2,
  explanation: "Statement II is false — NCERT says LOOSE packing of PARENCHYMA (not tight packing of collenchyma) facilitates air contact. Statements I, III and IV are directly from NCERT."
},
{
  id: 61,
  topic: "Do Plants Breathe?",
  q: "<b>Assertion (A):</b> The distance that gases must diffuse even in large, bulky plants is not great.<br><b>Reason (R):</b> Each living cell in a plant is located quite close to the surface of the plant.",
  options: [
    "A is false but R is true",
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both directly from NCERT. Because living cells are organised near the surface (in thin layers inside/beneath bark in stems), the diffusion distance for gases is small. R correctly explains why A is true."
},
{
  id: 62,
  topic: "Do Plants Breathe?",
  q: "The breakdown of glucose to pyruvic acid is called glycolysis. This process:",
  options: [
    "Requires molecular oxygen",
    "Occurs only in anaerobic organisms",
    "Can occur without the help of oxygen and is retained in all living organisms",
    "Requires mitochondria for completion"
  ],
  correct: 2,
  explanation: "NCERT states: 'all living organisms retain the enzymatic machinery to partially oxidise glucose without the help of oxygen. This breakdown of glucose to pyruvic acid is called glycolysis.' It does NOT require O₂ or mitochondria (occurs in cytoplasm)."
},
{
  id: 63,
  topic: "Do Plants Breathe?",
  q: "How many of the following statements are correct?<br>(I) Plants require O₂ for respiration<br>(II) Plants give out CO₂ during respiration<br>(III) Plants have specialised organs similar to animal lungs<br>(IV) Plants use stomata and lenticels for gas exchange<br>(V) Gas exchange in plants occurs mainly through long-distance transport",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 1,
  explanation: "Statements I, II and IV are correct (three statements). Statement III is wrong — plants have NO specialised respiratory organs. Statement V is wrong — there is very little transport of gases between plant parts; each part handles its own exchange."
},
{
  id: 64,
  topic: "Do Plants Breathe?",
  q: "The combustion reaction during respiration requires oxygen. However, some organisms can survive without O₂. Which of the following is the partial oxidation pathway that all organisms possess?",
  options: [
    "Krebs cycle",
    "Electron Transport Chain",
    "Glycolysis",
    "Oxidative phosphorylation"
  ],
  correct: 2,
  explanation: "NCERT states all organisms retain the enzymatic machinery for glycolysis — the partial oxidation of glucose to pyruvic acid without oxygen. Krebs cycle, ETC and oxidative phosphorylation all require aerobic conditions (mitochondria)."
},
{
  id: 65,
  topic: "Do Plants Breathe?",
  q: "Which of the following best explains why only during photosynthesis are large volumes of gases exchanged in plants?",
  options: [
    "Photosynthesis occurs at much higher rates involving uptake of CO₂ and release of O₂ in bulk, while respiration rates in plants are far lower",
    "Plants do not respire at all, so only photosynthesis involves gas exchange",
    "Respiration does not produce or consume any gases",
    "Stomata open only during photosynthesis and remain closed at all other times"
  ],
  correct: 0,
  explanation: "NCERT states plants 'do not present great demands for gas exchange' during respiration as they respire at rates far lower than animals. However, during photosynthesis, large volumes of CO₂ are absorbed and O₂ released. Plants DO respire — option B is wrong."
},
{
  id: 66,
  topic: "Glycolysis",
  q: "The term glycolysis is derived from Greek words meaning:",
  options: [
    "Fat splitting",
    "Sugar splitting",
    "Protein splitting",
    "Acid splitting"
  ],
  correct: 1,
  explanation: "Glycolysis is derived from Greek words 'glycos' meaning sugar and 'lysis' meaning splitting. It literally means the splitting of sugar (glucose). This is a direct NCERT fact."
},
{
  id: 67,
  topic: "Glycolysis",
  q: "The scheme of glycolysis is also referred to as the EMP pathway. EMP stands for:",
  options: [
    "Embden-Meyerhof-Pauling",
    "Embden-Meyerhof-Parnas",
    "Embden-Morgan-Parnas",
    "Euler-Meyerhof-Parnas"
  ],
  correct: 1,
  explanation: "NCERT states the scheme was given by Gustav Embden, Otto Meyerhof, and J. Parnas — hence EMP pathway. Common trap: confusing Parnas with Pauling or Morgan."
},
{
  id: 68,
  topic: "Glycolysis",
  q: "Glycolysis occurs in which part of the cell?",
  options: [
    "Mitochondrial matrix",
    "Inner mitochondrial membrane",
    "Cytoplasm",
    "Chloroplast stroma"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'Glycolysis occurs in the cytoplasm of the cell.' This is one of the most frequently tested facts — students often confuse it with the mitochondrial matrix (where Krebs cycle occurs)."
},
{
  id: 69,
  topic: "Glycolysis",
  q: "In anaerobic organisms, glycolysis is:",
  options: [
    "One of several respiratory pathways available",
    "The only process in respiration",
    "Not present as they use Krebs cycle instead",
    "Present but functions only in the presence of O₂"
  ],
  correct: 1,
  explanation: "NCERT states: 'In anaerobic organisms, it is the only process in respiration.' They lack mitochondrial pathways (Krebs cycle, ETC) and rely solely on glycolysis followed by fermentation."
},
{
  id: 70,
  topic: "Glycolysis",
  q: "In plants, the glucose used for glycolysis is primarily derived from:",
  options: [
    "Amino acid degradation",
    "Fatty acid oxidation",
    "Sucrose (end product of photosynthesis) or storage carbohydrates",
    "Direct absorption from the soil"
  ],
  correct: 2,
  explanation: "NCERT states: 'In plants, this glucose is derived from sucrose, which is the end product of photosynthesis, or from storage carbohydrates.' Plants do not absorb glucose from soil."
},
{
  id: 71,
  topic: "Glycolysis",
  q: "The enzyme that converts sucrose into glucose and fructose is:",
  options: [
    "Hexokinase",
    "Invertase",
    "Phosphofructokinase",
    "Aldolase"
  ],
  correct: 1,
  explanation: "NCERT states: 'Sucrose is converted into glucose and fructose by the enzyme, invertase.' Hexokinase phosphorylates glucose to glucose-6-phosphate. Students commonly confuse invertase with hexokinase."
},
{
  id: 72,
  topic: "Glycolysis",
  q: "Glucose and fructose are phosphorylated to give rise to glucose-6-phosphate by the activity of the enzyme:",
  options: [
    "Invertase",
    "Phosphorylase",
    "Aldolase",
    "Hexokinase"
  ],
  correct: 3,
  explanation: "NCERT states: 'Glucose and fructose are phosphorylated to give rise to glucose-6-phosphate by the activity of the enzyme hexokinase.' This is the first step where ATP is consumed."
},
{
  id: 73,
  topic: "Glycolysis",
  q: "How many enzyme-controlled reactions are involved in glycolysis?",
  options: [
    "Eight",
    "Nine",
    "Ten",
    "Twelve"
  ],
  correct: 2,
  explanation: "NCERT states: 'a chain of ten reactions, under the control of different enzymes, takes place to produce pyruvate from glucose.' Exactly 10 steps — this is a commonly tested numerical fact."
},
{
  id: 74,
  topic: "Glycolysis",
  q: "<b>Assertion (A):</b> Glycolysis is present in all living organisms.<br><b>Reason (R):</b> Glycolysis is the most ancient metabolic pathway that evolved when the Earth's atmosphere lacked oxygen.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. NCERT states glycolysis 'is present in all living organisms.' From the previous section, early cells lived in an oxygen-free atmosphere and developed glycolysis. Its universality is because it is the most ancient pathway — R correctly explains A."
},
{
  id: 75,
  topic: "Glycolysis",
  q: "During glycolysis, glucose undergoes:",
  options: [
    "Complete oxidation to CO₂ and H₂O",
    "Complete reduction to ethanol",
    "Partial oxidation to form two molecules of pyruvic acid",
    "Partial reduction to form lactic acid"
  ],
  correct: 2,
  explanation: "NCERT states: 'glucose undergoes partial oxidation to form two molecules of pyruvic acid.' Complete oxidation requires Krebs cycle and ETC. Glycolysis is only partial oxidation — a frequently tested concept."
},
{
  id: 76,
  topic: "Glycolysis",
  q: "ATP is utilised at which steps during glycolysis?",
  options: [
    "Conversion of glucose to glucose-6-phosphate and conversion of PGAL to BPGA",
    "Conversion of glucose to glucose-6-phosphate and conversion of fructose-6-phosphate to fructose 1,6-bisphosphate",
    "Conversion of BPGA to PGA and conversion of PEP to pyruvic acid",
    "Conversion of fructose-6-phosphate to fructose 1,6-bisphosphate and conversion of PEP to pyruvic acid"
  ],
  correct: 1,
  explanation: "NCERT clearly states: 'ATP is utilised at two steps: first in the conversion of glucose into glucose-6-phosphate and second in the conversion of fructose-6-phosphate to fructose 1,6-bisphosphate.' Option C describes ATP-yielding steps, not ATP-consuming steps."
},
{
  id: 77,
  topic: "Glycolysis",
  q: "Fructose 1,6-bisphosphate is split into:",
  options: [
    "Two molecules of glyceraldehyde-3-phosphate",
    "Dihydroxyacetone phosphate and 3-phosphoglyceraldehyde (PGAL)",
    "Two molecules of dihydroxyacetone phosphate",
    "Phosphoenolpyruvate and pyruvic acid"
  ],
  correct: 1,
  explanation: "NCERT states: 'The fructose 1,6-bisphosphate is split into dihydroxyacetone phosphate and 3-phosphoglyceraldehyde (PGAL).' These are two different triose phosphates (both 3C), not two identical molecules."
},
{
  id: 78,
  topic: "Glycolysis",
  q: "During glycolysis, NADH + H⁺ is formed from NAD⁺ at which step?",
  options: [
    "Glucose → Glucose-6-phosphate",
    "Fructose-6-phosphate → Fructose 1,6-bisphosphate",
    "3-phosphoglyceraldehyde (PGAL) → 1,3-bisphosphoglycerate (BPGA)",
    "PEP → Pyruvic acid"
  ],
  correct: 2,
  explanation: "NCERT states: 'there is one step where NADH + H⁺ is formed from NAD⁺; this is when 3-phosphoglyceraldehyde (PGAL) is converted to 1,3-bisphosphoglycerate (BPGA).' Two redox-equivalents are removed from PGAL and transferred to NAD⁺."
},
{
  id: 79,
  topic: "Glycolysis",
  q: "During the conversion of PGAL to BPGA, which of the following occurs?<br>(I) PGAL is oxidised<br>(II) NAD⁺ is reduced to NADH + H⁺<br>(III) Inorganic phosphate is added<br>(IV) ATP is directly consumed",
  options: [
    "I and II only",
    "I, II and III",
    "II and IV only",
    "I, II, III and IV"
  ],
  correct: 1,
  explanation: "NCERT states: 'Two redox-equivalents are removed from PGAL and transferred to NAD⁺. PGAL is oxidised and with inorganic phosphate to get converted into BPGA.' So I, II and III are correct. ATP is NOT consumed at this step — IV is wrong."
},
{
  id: 80,
  topic: "Glycolysis",
  q: "The conversion of BPGA to 3-phosphoglyceric acid (PGA) is an energy yielding process. This energy is trapped by the formation of:",
  options: [
    "NADH + H⁺",
    "FADH₂",
    "GTP",
    "ATP"
  ],
  correct: 3,
  explanation: "NCERT states: 'The conversion of BPGA to 3-phosphoglyceric acid (PGA), is also an energy yielding process; this energy is trapped by the formation of ATP.' This is substrate-level phosphorylation."
},
{
  id: 81,
  topic: "Glycolysis",
  q: "At which two steps is ATP directly synthesised during glycolysis?",
  options: [
    "Glucose → G6P and F6P → F1,6-BP",
    "PGAL → BPGA and PGA → PEP",
    "BPGA → PGA and PEP → Pyruvic acid",
    "DHAP → PGAL and BPGA → PGA"
  ],
  correct: 2,
  explanation: "NCERT states ATP is synthesised during: (1) conversion of BPGA to PGA, and (2) conversion of PEP to pyruvic acid. Option A describes ATP-consuming steps. This distinction between ATP consumption and production is a major NEET trap."
},
{
  id: 82,
  topic: "Glycolysis",
  q: "How many ATP molecules are <b>directly synthesised</b> (gross) during glycolysis from one molecule of glucose?",
  options: [
    "2 ATP",
    "4 ATP",
    "6 ATP",
    "8 ATP"
  ],
  correct: 1,
  explanation: "ATP is produced at 2 steps (BPGA→PGA and PEP→pyruvate), but since one glucose gives 2 triose molecules, each step produces 2 ATP. Total = 2 + 2 = 4 ATP (gross). Net is 4 − 2 consumed = 2 ATP. The question asks for directly synthesised (gross), which is 4."
},
{
  id: 83,
  topic: "Glycolysis",
  q: "The <b>net gain</b> of ATP per glucose molecule during glycolysis is:",
  options: [
    "4 ATP",
    "2 ATP",
    "8 ATP",
    "6 ATP"
  ],
  correct: 1,
  explanation: "Gross ATP produced = 4 (2 from BPGA→PGA × 2, and 2 from PEP→pyruvate × 2). ATP consumed = 2 (glucose→G6P and F6P→F1,6-BP). Net gain = 4 − 2 = 2 ATP. This is one of the most commonly tested calculations in NEET."
},
{
  id: 84,
  topic: "Glycolysis",
  q: "How many molecules of NADH + H⁺ are produced per glucose molecule during glycolysis?",
  options: [
    "1",
    "2",
    "4",
    "6"
  ],
  correct: 1,
  explanation: "NADH + H⁺ is produced at one step (PGAL → BPGA), but since each glucose produces 2 PGAL molecules, total NADH + H⁺ produced = 2. Students sometimes forget to account for both triose molecules."
},
{
  id: 85,
  topic: "Glycolysis",
  q: "<b>Assertion (A):</b> Glycolysis involves partial oxidation of glucose.<br><b>Reason (R):</b> The end product of glycolysis is pyruvic acid, which still contains chemical energy that can be further oxidised.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both A and R are true. Glycolysis is partial oxidation (NCERT term). Pyruvic acid still has energy that can be released via Krebs cycle/fermentation. Since pyruvate retains energy, the oxidation was only partial — R correctly explains A."
},
{
  id: 86,
  topic: "Glycolysis",
  q: "Consider the following statements regarding glycolysis:<br>(I) It occurs in the mitochondrial matrix<br>(II) It consists of a chain of ten reactions<br>(III) It produces 2 molecules of pyruvic acid from one glucose<br>(IV) It is present in all living organisms<br>Which of the above are correct?",
  options: [
    "I, II and III",
    "II, III and IV",
    "I, III and IV",
    "I, II, III and IV"
  ],
  correct: 1,
  explanation: "Statement I is WRONG — glycolysis occurs in the CYTOPLASM, not the mitochondrial matrix. Statements II, III and IV are directly from NCERT. Confusing glycolysis location with Krebs cycle location is the most common NEET error."
},
{
  id: 87,
  topic: "Glycolysis",
  q: "Pyruvic acid produced during glycolysis can follow three major metabolic fates. These are:",
  options: [
    "Lactic acid fermentation, alcoholic fermentation and β-oxidation",
    "Lactic acid fermentation, alcoholic fermentation and aerobic respiration",
    "Gluconeogenesis, Krebs cycle and pentose phosphate pathway",
    "Alcoholic fermentation, photorespiration and aerobic respiration"
  ],
  correct: 1,
  explanation: "NCERT clearly states: 'There are three major ways in which different cells handle pyruvic acid — lactic acid fermentation, alcoholic fermentation and aerobic respiration.' β-oxidation, gluconeogenesis and photorespiration are not mentioned as fates of pyruvate in this context."
},
{
  id: 88,
  topic: "Glycolysis",
  q: "Fermentation takes place under:",
  options: [
    "Aerobic conditions in all eukaryotes",
    "Anaerobic conditions in many prokaryotes and unicellular eukaryotes",
    "Aerobic conditions only in prokaryotes",
    "Anaerobic conditions only in multicellular organisms"
  ],
  correct: 1,
  explanation: "NCERT states: 'Fermentation takes place under anaerobic conditions in many prokaryotes and unicellular eukaryotes.' It is not aerobic, and it is not limited to multicellular organisms."
},
{
  id: 89,
  topic: "Glycolysis",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Invertase &emsp;&emsp;&emsp;&emsp;&emsp; (P) Glucose → Glucose-6-phosphate<br>(ii) Hexokinase &emsp;&emsp;&emsp;&emsp; (Q) Sucrose → Glucose + Fructose<br>(iii) PGAL → BPGA &emsp;&emsp; (R) ATP synthesis<br>(iv) BPGA → PGA &emsp;&emsp;&emsp; (S) NADH + H⁺ formation<br><br>Select the correct match:",
  options: [
    "i-Q, ii-P, iii-S, iv-R",
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-S, ii-R, iii-P, iv-Q"
  ],
  correct: 0,
  explanation: "Invertase → Sucrose splitting (Q); Hexokinase → Phosphorylation of glucose (P); PGAL→BPGA → NADH+H⁺ formation (S); BPGA→PGA → ATP synthesis (R). Option C is a trap — it swaps NADH and ATP steps."
},
{
  id: 90,
  topic: "Glycolysis",
  q: "<b>Assertion (A):</b> In glycolysis, ATP is both consumed and produced.<br><b>Reason (R):</b> ATP is consumed during phosphorylation steps and produced during substrate-level phosphorylation steps.",
  options: [
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. ATP is consumed in 2 phosphorylation steps (glucose→G6P, F6P→F1,6-BP) and produced during 2 substrate-level phosphorylation steps (BPGA→PGA, PEP→pyruvate). R correctly explains A."
},
{
  id: 91,
  topic: "Glycolysis",
  q: "Glucose-6-phosphate isomerises to form:",
  options: [
    "Fructose 1,6-bisphosphate",
    "Fructose-6-phosphate",
    "3-phosphoglyceraldehyde",
    "Dihydroxyacetone phosphate"
  ],
  correct: 1,
  explanation: "NCERT states: 'This phosphorylated form of glucose then isomerises to produce fructose-6-phosphate.' Fructose 1,6-bisphosphate is formed by further phosphorylation of fructose-6-phosphate (another ATP consumed). Students confuse these two steps."
},
{
  id: 92,
  topic: "Glycolysis",
  q: "Which of the following is the correct sequence of intermediates in glycolysis?",
  options: [
    "Glucose → G6P → F6P → F1,6-BP → PGAL → BPGA → PGA → PEP → Pyruvate",
    "Glucose → F6P → G6P → F1,6-BP → BPGA → PGAL → PGA → PEP → Pyruvate",
    "Glucose → G6P → F1,6-BP → F6P → PGAL → PGA → BPGA → PEP → Pyruvate",
    "Glucose → G6P → F6P → PGAL → F1,6-BP → BPGA → PEP → PGA → Pyruvate"
  ],
  correct: 0,
  explanation: "The correct NCERT sequence is: Glucose → Glucose-6-phosphate → Fructose-6-phosphate → Fructose 1,6-bisphosphate → PGAL (+ DHAP) → BPGA → PGA → 2-PG → PEP → Pyruvate. Options B, C and D scramble the order."
},
{
  id: 93,
  topic: "Glycolysis",
  q: "For the complete oxidation of glucose to CO₂ and H₂O, organisms adopt:",
  options: [
    "Only glycolysis",
    "Only fermentation",
    "Krebs' cycle (aerobic respiration) which requires O₂ supply",
    "Alcoholic fermentation which requires O₂ supply"
  ],
  correct: 2,
  explanation: "NCERT states: 'For the complete oxidation of glucose to CO₂ and H₂O, organisms adopt Krebs' cycle which is also called as aerobic respiration. This requires O₂ supply.' Glycolysis alone gives only partial oxidation. Fermentation is anaerobic."
},
{
  id: 94,
  topic: "Glycolysis",
  q: "Consider the following statements:<br>(I) Sucrose is the end product of photosynthesis in plants<br>(II) Invertase converts sucrose into glucose and galactose<br>(III) Both glucose and fructose readily enter the glycolytic pathway<br>(IV) Hexokinase phosphorylates both glucose and fructose<br>Which statements are correct?",
  options: [
    "I, II and III",
    "I, III and IV",
    "I and III only",
    "I, II, III and IV"
  ],
  correct: 1,
  explanation: "Statement II is WRONG — invertase converts sucrose into glucose and FRUCTOSE, not galactose (lactose is split into glucose and galactose by lactase). Statements I, III and IV are directly from NCERT. Galactose vs fructose is a common trap."
},
{
  id: 95,
  topic: "Glycolysis",
  q: "The key product of glycolysis is:",
  options: [
    "Acetyl CoA",
    "Citric acid",
    "Pyruvic acid",
    "Lactic acid"
  ],
  correct: 2,
  explanation: "NCERT states: 'Pyruvic acid is then the key product of glycolysis.' Acetyl CoA is formed after pyruvate oxidation (link reaction). Citric acid is a Krebs cycle intermediate. Lactic acid is a fermentation product."
},
{
  id: 96,
  topic: "Glycolysis",
  q: "<b>Assertion (A):</b> The metabolic fate of pyruvate depends on the cellular need.<br><b>Reason (R):</b> All cells mandatorily channel pyruvate into aerobic respiration.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — NCERT states: 'What is the metabolic fate of pyruvate? This depends on the cellular need.' R is false — not all cells channel pyruvate into aerobic respiration. Some undergo fermentation (lactic acid or alcoholic) under anaerobic conditions."
},
{
  id: 97,
  topic: "Glycolysis",
  q: "How many carbon atoms are present in each molecule of pyruvic acid formed at the end of glycolysis?",
  options: [
    "6",
    "2",
    "3",
    "5"
  ],
  correct: 2,
  explanation: "Glucose is a 6-carbon molecule. It is split into two 3-carbon pyruvic acid molecules during glycolysis. This is evident from the figure: Glucose (6C) → 2 × Pyruvic acid (3C)."
},
{
  id: 98,
  topic: "Glycolysis",
  q: "Which of the following statements is <b>INCORRECT</b> regarding glycolysis?",
  options: [
    "It involves the partial oxidation of glucose",
    "It occurs in the cytoplasm of the cell",
    "It produces 2 molecules of pyruvic acid per glucose molecule",
    "It requires molecular oxygen for completion"
  ],
  correct: 3,
  explanation: "Glycolysis does NOT require molecular oxygen — it is an anaerobic process that can occur with or without O₂. NCERT states all organisms retain the machinery to partially oxidise glucose WITHOUT the help of oxygen. Options A, B and C are all correct."
},
{
  id: 99,
  topic: "Glycolysis",
  q: "Match the following regarding energy changes in glycolysis:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Glucose → G6P &emsp;&emsp;&emsp;&emsp; (P) NADH + H⁺ produced<br>(ii) F6P → F1,6-BP &emsp;&emsp;&emsp;&emsp; (Q) ATP consumed<br>(iii) PGAL → BPGA &emsp;&emsp;&emsp;&emsp; (R) ATP produced<br>(iv) PEP → Pyruvic acid &emsp;&emsp; (S) ATP consumed<br><br>Select the correct match:",
  options: [
    "i-Q, ii-S, iii-R, iv-P",
    "i-S, ii-Q, iii-P, iv-R",
    "i-Q, ii-S, iii-P, iv-R",
    "i-R, ii-P, iii-Q, iv-S"
  ],
  correct: 2,
  explanation: "Glucose→G6P: ATP consumed (Q); F6P→F1,6-BP: ATP consumed (S); PGAL→BPGA: NADH+H⁺ produced (P); PEP→Pyruvate: ATP produced (R). Note both (i) and (ii) consume ATP but from different options (Q and S). Option A wrongly assigns ATP production to PGAL→BPGA."
},
{
  id: 100,
  topic: "Glycolysis",
  q: "Consider the following about the net products of glycolysis from one glucose molecule:<br>(I) 2 ATP (net)<br>(II) 2 NADH + H⁺<br>(III) 2 Pyruvic acid<br>(IV) 2 CO₂<br>Which of the above are correct?",
  options: [
    "I, II, III and IV",
    "I, II and III only",
    "I and III only",
    "II and IV only"
  ],
  correct: 1,
  explanation: "Glycolysis produces: 2 ATP (net), 2 NADH + H⁺, and 2 pyruvic acid molecules from one glucose. CO₂ is NOT released during glycolysis — it is released during pyruvate oxidation and Krebs cycle. Statement IV is a major conceptual trap."
},
{
  id: 101,
  topic: "Fermentation",
  q: "Fermentation involves:",
  options: [
    "Complete oxidation of glucose under aerobic conditions",
    "Incomplete oxidation of glucose under anaerobic conditions",
    "Complete oxidation of glucose under anaerobic conditions",
    "Incomplete oxidation of glucose under aerobic conditions"
  ],
  correct: 1,
  explanation: "NCERT states: 'In fermentation, the incomplete oxidation of glucose is achieved under anaerobic conditions.' It is NOT complete oxidation (that requires aerobic respiration) and it is NOT aerobic. Both keywords — 'incomplete' and 'anaerobic' — must be correct."
},
{
  id: 102,
  topic: "Fermentation",
  q: "During alcoholic fermentation by yeast, pyruvic acid is converted to:",
  options: [
    "Lactic acid and CO₂",
    "CO₂ and ethanol",
    "Ethanol and H₂O",
    "Acetic acid and CO₂"
  ],
  correct: 1,
  explanation: "NCERT states: 'pyruvic acid is converted to CO₂ and ethanol' during alcoholic fermentation by yeast. Lactic acid is produced in a different type of fermentation. Acetic acid is not a product of alcoholic fermentation."
},
{
  id: 103,
  topic: "Fermentation",
  q: "The enzymes that catalyse alcoholic fermentation are:",
  options: [
    "Lactate dehydrogenase and pyruvic acid decarboxylase",
    "Alcohol dehydrogenase and lactate dehydrogenase",
    "Pyruvic acid decarboxylase and alcohol dehydrogenase",
    "Hexokinase and alcohol dehydrogenase"
  ],
  correct: 2,
  explanation: "NCERT specifically names: 'pyruvic acid decarboxylase and alcohol dehydrogenase catalyse these reactions.' Lactate dehydrogenase is involved in lactic acid fermentation, not alcoholic fermentation. This enzyme pairing is a common NEET trap."
},
{
  id: 104,
  topic: "Fermentation",
  q: "In animal muscle cells during vigorous exercise, when oxygen is inadequate, pyruvic acid is reduced to lactic acid by the enzyme:",
  options: [
    "Pyruvic acid decarboxylase",
    "Alcohol dehydrogenase",
    "Lactate dehydrogenase",
    "Invertase"
  ],
  correct: 2,
  explanation: "NCERT states: 'pyruvic acid is reduced to lactic acid by lactate dehydrogenase.' Pyruvic acid decarboxylase and alcohol dehydrogenase are involved in alcoholic fermentation (yeast), not lactic acid fermentation in muscles."
},
{
  id: 105,
  topic: "Fermentation",
  q: "<b>Assertion (A):</b> During fermentation, NADH+H⁺ is reoxidised to NAD⁺.<br><b>Reason (R):</b> NADH+H⁺ acts as the reducing agent in both lactic acid and alcoholic fermentation.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both are true and from NCERT. NADH+H⁺ is the reducing agent that reduces pyruvic acid to ethanol or lactic acid, and in doing so, NADH+H⁺ gets reoxidised to NAD⁺. R correctly explains why A occurs — the reoxidation happens because NADH donates its electrons during reduction."
},
{
  id: 106,
  topic: "Fermentation",
  q: "During fermentation, the percentage of energy in glucose that is released is:",
  options: [
    "More than 50 per cent",
    "About 40 per cent",
    "Less than seven per cent",
    "About 25 per cent"
  ],
  correct: 2,
  explanation: "NCERT states: 'less than seven per cent of the energy in glucose is released.' This exact figure is highly tested in NEET. Students often confuse this with the ~40% efficiency of aerobic respiration."
},
{
  id: 107,
  topic: "Fermentation",
  q: "Consider the following statements about fermentation:<br>(I) Less than 7% of the energy in glucose is released<br>(II) All of the released energy is trapped as high energy bonds of ATP<br>(III) Hazardous products like acid or alcohol are produced<br>(IV) Net 2 ATP molecules are synthesised per glucose molecule<br>Which of the above are correct?",
  options: [
    "I, II and III",
    "I, II and IV",
    "I, III and IV",
    "I, II, III and IV"
  ],
  correct: 2,
  explanation: "Statement II is WRONG — NCERT states 'not all of it is trapped as high energy bonds of ATP.' Statements I, III and IV are correct. The trap is designed to catch students who assume all released energy becomes ATP."
},
{
  id: 108,
  topic: "Fermentation",
  q: "The net ATP synthesised when one molecule of glucose is fermented to alcohol or lactic acid is:",
  options: [
    "4 ATP",
    "2 ATP",
    "38 ATP",
    "0 ATP"
  ],
  correct: 1,
  explanation: "During fermentation, ATP is produced only during glycolysis (gross 4 ATP − 2 ATP consumed = net 2 ATP). No additional ATP is produced during the conversion of pyruvate to ethanol or lactic acid. The 38 ATP figure is for complete aerobic respiration."
},
{
  id: 109,
  topic: "Fermentation",
  q: "Yeasts poison themselves to death when the concentration of alcohol reaches about:",
  options: [
    "5 per cent",
    "8 per cent",
    "13 per cent",
    "20 per cent"
  ],
  correct: 2,
  explanation: "NCERT states: 'Yeasts poison themselves to death when the concentration of alcohol reaches about 13 per cent.' This is why naturally fermented beverages cannot exceed ~13% alcohol content. This specific figure is frequently tested."
},
{
  id: 110,
  topic: "Fermentation",
  q: "The maximum concentration of alcohol in beverages that are naturally fermented would be approximately:",
  options: [
    "5%",
    "13%",
    "25%",
    "40%"
  ],
  correct: 1,
  explanation: "Since yeast dies at about 13% alcohol concentration, naturally fermented beverages cannot exceed this limit. Higher concentrations (like in spirits) are obtained by distillation, not natural fermentation. This is a direct NCERT-based application question."
},
{
  id: 111,
  topic: "Fermentation",
  q: "Alcoholic beverages with alcohol content greater than 13% are obtained by:",
  options: [
    "Using genetically modified yeast strains",
    "Allowing fermentation to continue for a longer period",
    "Distillation",
    "Adding more sugar to the fermentation mixture"
  ],
  correct: 2,
  explanation: "Since yeast dies at ~13% alcohol, natural fermentation cannot exceed this. NCERT implies that higher alcohol content beverages are obtained by distillation — a physical process of concentrating alcohol by evaporation and condensation."
},
{
  id: 112,
  topic: "Fermentation",
  q: "<b>Assertion (A):</b> Fermentation is described as a hazardous process.<br><b>Reason (R):</b> Either acid or alcohol is produced as end products of fermentation.",
  options: [
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false"
  ],
  correct: 1,
  explanation: "NCERT states: 'the processes are hazardous – either acid or alcohol is produced.' Both A and R are true, and the hazardous nature is specifically because of acid/alcohol production. R correctly explains A."
},
{
  id: 113,
  topic: "Fermentation",
  q: "Which of the following statements correctly distinguishes alcoholic fermentation from lactic acid fermentation?",
  options: [
    "CO₂ is released in lactic acid fermentation but not in alcoholic fermentation",
    "CO₂ is released in alcoholic fermentation but not in lactic acid fermentation",
    "Both release CO₂ as a byproduct",
    "Neither releases CO₂"
  ],
  correct: 1,
  explanation: "In alcoholic fermentation, pyruvic acid → CO₂ + ethanol (CO₂ IS released, catalysed by pyruvic acid decarboxylase). In lactic acid fermentation, pyruvic acid → lactic acid directly (NO CO₂ released). This is one of the most important distinctions tested in NEET."
},
{
  id: 114,
  topic: "Fermentation",
  q: "In which of the following conditions does lactic acid fermentation occur in animal muscles?",
  options: [
    "When oxygen supply is adequate",
    "During rest and relaxation",
    "When oxygen is inadequate for cellular respiration",
    "Only in cardiac muscles continuously"
  ],
  correct: 2,
  explanation: "NCERT states: 'in animal cells also, like muscles during exercise, when oxygen is inadequate for cellular respiration pyruvic acid is reduced to lactic acid.' This happens during vigorous exercise when O₂ demand exceeds supply."
},
{
  id: 115,
  topic: "Fermentation",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Pyruvic acid decarboxylase &emsp; (P) Lactic acid from pyruvic acid<br>(ii) Alcohol dehydrogenase &emsp;&emsp;&emsp; (Q) Decarboxylation of pyruvic acid<br>(iii) Lactate dehydrogenase &emsp;&emsp;&emsp; (R) Acetaldehyde to ethanol<br>(iv) Invertase &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (S) Sucrose to glucose + fructose<br><br>Select the correct match:",
  options: [
    "i-R, ii-Q, iii-P, iv-S",
    "i-Q, ii-R, iii-P, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-P, ii-R, iii-Q, iv-S"
  ],
  correct: 1,
  explanation: "Pyruvic acid decarboxylase → removes CO₂ from pyruvic acid, i.e., decarboxylation (Q). Alcohol dehydrogenase → converts acetaldehyde to ethanol (R). Lactate dehydrogenase → converts pyruvic acid to lactic acid (P). Invertase → sucrose splitting (S). Option A is a trap swapping (i) and (ii)."
},
{
  id: 116,
  topic: "Fermentation",
  q: "During both lactic acid and alcoholic fermentation, which of the following acts as the reducing agent?",
  options: [
    "FAD",
    "NAD⁺",
    "NADH+H⁺",
    "FADH₂"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'The reducing agent is NADH+H⁺ which is reoxidised to NAD⁺ in both the processes.' NAD⁺ is the oxidised form (not the reducing agent). FADH₂ and FAD are not involved in fermentation reactions."
},
{
  id: 117,
  topic: "Fermentation",
  q: "Consider the following about alcoholic fermentation:<br>(I) It occurs in yeast<br>(II) End products are CO₂ and ethanol<br>(III) Enzyme involved is lactate dehydrogenase<br>(IV) Pyruvic acid is the starting substrate<br>Which statements are correct?",
  options: [
    "I, II, III and IV",
    "I, II and IV only",
    "I and II only",
    "II, III and IV only"
  ],
  correct: 1,
  explanation: "Statement III is WRONG — lactate dehydrogenase is involved in lactic acid fermentation, NOT alcoholic fermentation. Alcoholic fermentation uses pyruvic acid decarboxylase and alcohol dehydrogenase. Statements I, II and IV are correct."
},
{
  id: 118,
  topic: "Fermentation",
  q: "During fermentation, NADH+H⁺ is reoxidised to NAD⁺. The biological significance of this reoxidation is:",
  options: [
    "To produce additional ATP molecules",
    "To regenerate NAD⁺ so that glycolysis can continue",
    "To release CO₂ from the cell",
    "To produce water as a byproduct"
  ],
  correct: 1,
  explanation: "NAD⁺ is required as an electron acceptor in glycolysis (PGAL → BPGA step). If NADH is not reoxidised back to NAD⁺, glycolysis would halt due to NAD⁺ depletion. Fermentation serves to regenerate NAD⁺ so glycolysis can continue producing ATP under anaerobic conditions."
},
{
  id: 119,
  topic: "Fermentation",
  q: "<b>Assertion (A):</b> During fermentation, not all the released energy is trapped as high energy bonds of ATP.<br><b>Reason (R):</b> Fermentation involves complete oxidation of glucose.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 1,
  explanation: "A is true — NCERT states 'not all of it is trapped as high energy bonds of ATP.' R is false — fermentation involves INCOMPLETE oxidation of glucose, not complete oxidation. Complete oxidation occurs only in aerobic respiration."
},
{
  id: 120,
  topic: "Fermentation",
  q: "Which organisms produce lactic acid from pyruvic acid during fermentation?",
  options: [
    "Yeast only",
    "Some bacteria",
    "All fungi",
    "All plants"
  ],
  correct: 1,
  explanation: "NCERT states: 'Other organisms like some bacteria produce lactic acid from pyruvic acid.' Yeast produces ethanol and CO₂ (alcoholic fermentation), not lactic acid. Not all fungi or plants carry out lactic acid fermentation."
},
{
  id: 121,
  topic: "Fermentation",
  q: "Aerobic respiration differs from fermentation in that:",
  options: [
    "It leads to incomplete oxidation of organic substances",
    "It does not require oxygen",
    "It leads to complete oxidation of organic substances in the presence of oxygen",
    "It produces less energy than fermentation"
  ],
  correct: 2,
  explanation: "NCERT states: 'Aerobic respiration is the process that leads to a complete oxidation of organic substances in the presence of oxygen, and releases CO₂, water and a large amount of energy.' Fermentation is incomplete oxidation and anaerobic."
},
{
  id: 122,
  topic: "Fermentation",
  q: "The products of aerobic respiration are:",
  options: [
    "Ethanol, CO₂ and small amount of energy",
    "Lactic acid and small amount of energy",
    "CO₂, water and a large amount of energy",
    "Pyruvic acid and NADH+H⁺"
  ],
  correct: 2,
  explanation: "NCERT states aerobic respiration 'releases CO₂, water and a large amount of energy present in the substrate.' Option A describes alcoholic fermentation. Option B describes lactic acid fermentation. Option D describes glycolysis products."
},
{
  id: 123,
  topic: "Fermentation",
  q: "In eukaryotes, the complete oxidation of glucose to CO₂ and H₂O takes place within:",
  options: [
    "Cytoplasm only",
    "Chloroplasts",
    "Mitochondria",
    "Ribosomes"
  ],
  correct: 2,
  explanation: "NCERT states: 'In eukaryotes these steps take place within the mitochondria and this requires O₂.' Glycolysis occurs in cytoplasm but the complete oxidation (Krebs cycle + ETC) occurs in mitochondria."
},
{
  id: 124,
  topic: "Fermentation",
  q: "<b>Assertion (A):</b> Yeasts poison themselves to death when alcohol concentration reaches about 13%.<br><b>Reason (R):</b> Alcohol at high concentration is toxic and denatures cellular enzymes of yeast.",
  options: [
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false"
  ],
  correct: 2,
  explanation: "A is directly from NCERT. R is true — high alcohol concentration is toxic to yeast cells, denaturing their enzymes and killing them. This is precisely why yeast dies at ~13% alcohol, making R the correct explanation of A."
},
{
  id: 125,
  topic: "Fermentation",
  q: "Which of the following statements is <b>INCORRECT</b> about fermentation?",
  options: [
    "It is an incomplete oxidation process",
    "It occurs under anaerobic conditions",
    "It releases a large amount of energy (more than 50% of glucose energy)",
    "Net 2 ATP molecules are produced per glucose molecule"
  ],
  correct: 2,
  explanation: "NCERT states LESS THAN 7% of energy is released during fermentation — not more than 50%. Options A, B and D are correct. This percentage trap is one of the most commonly tested facts from this section."
},
{
  id: 126,
  topic: "Fermentation",
  q: "Consider the following table:<br><br>| Feature | Alcoholic Fermentation | Lactic Acid Fermentation |<br>|---|---|---|<br>| CO₂ released | (I) | (II) |<br>| End product | (III) | (IV) |<br><br>Select the correct option:",
  options: [
    "I-Yes, II-Yes, III-Ethanol, IV-Lactic acid",
    "I-Yes, II-No, III-Ethanol, IV-Lactic acid",
    "I-No, II-Yes, III-Lactic acid, IV-Ethanol",
    "I-No, II-No, III-Ethanol, IV-Lactic acid"
  ],
  correct: 1,
  explanation: "In alcoholic fermentation: CO₂ IS released (Yes) and end product is ethanol. In lactic acid fermentation: CO₂ is NOT released (No) and end product is lactic acid. Option A is a major trap — students often wrongly assume CO₂ is released in both."
},
{
  id: 127,
  topic: "Fermentation",
  q: "The step of decarboxylation during alcoholic fermentation is catalysed by:",
  options: [
    "Alcohol dehydrogenase",
    "Lactate dehydrogenase",
    "Pyruvic acid decarboxylase",
    "Hexokinase"
  ],
  correct: 2,
  explanation: "Decarboxylation (removal of CO₂) from pyruvic acid is catalysed by pyruvic acid decarboxylase, forming acetaldehyde. Alcohol dehydrogenase then converts acetaldehyde to ethanol. The two enzymes act sequentially but have different roles."
},
{
  id: 128,
  topic: "Fermentation",
  q: "During lactic acid fermentation in muscle cells, pyruvic acid is:",
  options: [
    "Oxidised to lactic acid",
    "Reduced to lactic acid",
    "Decarboxylated to lactic acid",
    "Hydrolysed to lactic acid"
  ],
  correct: 1,
  explanation: "NCERT uses the term 'pyruvic acid is REDUCED to lactic acid.' NADH+H⁺ donates hydrogen atoms (electrons) to pyruvic acid, reducing it. This is a key concept — pyruvate is reduced while NADH is oxidised. Students often confuse oxidation and reduction here."
},
{
  id: 129,
  topic: "Fermentation",
  q: "How many of the following statements about fermentation are correct?<br>(I) It involves incomplete oxidation of glucose<br>(II) Less than 7% of energy in glucose is released<br>(III) It produces hazardous products<br>(IV) It occurs under aerobic conditions<br>(V) NADH+H⁺ is reoxidised to NAD⁺",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 2,
  explanation: "Statements I, II, III and V are correct (four statements). Statement IV is WRONG — fermentation occurs under ANAEROBIC conditions, not aerobic. This 'how many' format requires careful analysis of each statement."
},
{
  id: 130,
  topic: "Fermentation",
  q: "Which of the following is the correct sequence of events in alcoholic fermentation?",
  options: [
    "Pyruvic acid → Lactic acid → Ethanol + CO₂",
    "Pyruvic acid → Acetaldehyde + CO₂ → Ethanol",
    "Pyruvic acid → Ethanol → Acetaldehyde + CO₂",
    "Pyruvic acid → Ethanol + CO₂ (single step)"
  ],
  correct: 1,
  explanation: "Alcoholic fermentation is a two-step process: first, pyruvic acid decarboxylase removes CO₂ to form acetaldehyde; then alcohol dehydrogenase reduces acetaldehyde to ethanol using NADH+H⁺. It is NOT a single step and does NOT go through lactic acid."
},
{
  id: 131,
  topic: "Fermentation",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Yeast &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (P) Lactic acid production<br>(ii) Some bacteria &emsp;&emsp;&emsp; (Q) Ethanol + CO₂ production<br>(iii) Muscle cells &emsp;&emsp;&emsp;&emsp; (R) Complete oxidation of glucose<br>(iv) Aerobic respiration &emsp; (S) Lactic acid during O₂ deficiency<br><br>Select the correct match:",
  options: [
    "i-Q, ii-P, iii-S, iv-R",
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-S, iii-P, iv-R",
    "i-R, ii-P, iii-S, iv-Q"
  ],
  correct: 0,
  explanation: "Yeast → Ethanol + CO₂ (Q); Some bacteria → Lactic acid (P); Muscle cells → Lactic acid during O₂ deficiency (S); Aerobic respiration → Complete oxidation (R). Option C is a trap swapping bacteria and muscle cells."
},
{
  id: 132,
  topic: "Fermentation",
  q: "<b>Assertion (A):</b> Aerobic respiration is most common in higher organisms.<br><b>Reason (R):</b> Aerobic respiration releases a large amount of energy compared to fermentation.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true and from NCERT. Aerobic respiration is most common in higher organisms because it releases a large amount of energy needed for complex metabolic processes. Fermentation releases less than 7% — insufficient for higher organisms. R correctly explains A."
},
{
  id: 133,
  topic: "Fermentation",
  q: "Which of the following correctly represents the net equation for alcoholic fermentation?",
  options: [
    "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + 2ATP",
    "C₆H₁₂O₆ + O₂ → 2C₂H₅OH + 2CO₂ + Energy",
    "C₆H₁₂O₆ → 2CH₃CHOHCOOH + 2ATP",
    "C₆H₁₂O₆ → 2C₂H₅OH + 6CO₂ + 38ATP"
  ],
  correct: 0,
  explanation: "Alcoholic fermentation: Glucose → 2 Ethanol + 2CO₂ + 2ATP (net). Option B includes O₂ — fermentation is anaerobic. Option C represents lactic acid fermentation. Option D has incorrect stoichiometry (6CO₂ and 38ATP are for complete aerobic respiration)."
},
{
  id: 134,
  topic: "Fermentation",
  q: "Which of the following is common to BOTH lactic acid fermentation and alcoholic fermentation?",
  options: [
    "Release of CO₂",
    "Production of ethanol",
    "NADH+H⁺ is reoxidised to NAD⁺",
    "Involvement of pyruvic acid decarboxylase"
  ],
  correct: 2,
  explanation: "NCERT states: 'The reducing agent is NADH+H⁺ which is reoxidised to NAD⁺ in both the processes.' CO₂ is released only in alcoholic fermentation. Ethanol is produced only in alcoholic fermentation. Pyruvic acid decarboxylase is involved only in alcoholic fermentation."
},
{
  id: 135,
  topic: "Fermentation",
  q: "A student claims: 'During fermentation, since energy is released from glucose, fermentation is more efficient than aerobic respiration.' This claim is:",
  options: [
    "Correct, because fermentation is faster",
    "Correct, because fermentation does not need O₂",
    "Incorrect, because fermentation releases less than 7% of glucose energy whereas aerobic respiration releases much more",
    "Incorrect, because fermentation does not release any energy"
  ],
  correct: 2,
  explanation: "The claim is incorrect. NCERT states fermentation releases less than 7% of glucose energy and not all of it is trapped as ATP. Aerobic respiration releases much more energy through complete oxidation. Fermentation does release SOME energy (not zero), but it is highly inefficient."
},
{
  id: 136,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "For aerobic respiration to take place within the mitochondria, the final product of glycolysis must be transported from:",
  options: [
    "Mitochondrial matrix to the cytoplasm",
    "Cytoplasm to the chloroplast",
    "Cytoplasm into the mitochondria",
    "Inner mitochondrial membrane to the cytoplasm"
  ],
  correct: 2,
  explanation: "NCERT states: 'the final product of glycolysis, pyruvate is transported from the cytoplasm into the mitochondria.' Glycolysis occurs in cytoplasm; aerobic respiration continues in mitochondria. This transport step is essential."
},
{
  id: 137,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The two crucial events in aerobic respiration are:<br>(I) Complete oxidation of pyruvate by stepwise removal of all hydrogen atoms, leaving three molecules of CO₂<br>(II) Passing of electrons to molecular O₂ with simultaneous synthesis of ATP<br>Where do these events take place respectively?",
  options: [
    "Both in the mitochondrial matrix",
    "Both on the inner mitochondrial membrane",
    "I in the matrix; II on the inner mitochondrial membrane",
    "I on the inner membrane; II in the matrix"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'the first process takes place in the matrix of the mitochondria while the second process is located on the inner membrane of the mitochondria.' Option D reverses the locations — a classic NEET trap."
},
{
  id: 138,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The complete oxidation of pyruvate involves the stepwise removal of all hydrogen atoms, leaving behind:",
  options: [
    "Two molecules of CO₂",
    "Three molecules of CO₂",
    "Six molecules of CO₂",
    "One molecule of CO₂"
  ],
  correct: 1,
  explanation: "NCERT states: 'The complete oxidation of pyruvate by the stepwise removal of all the hydrogen atoms, leaving three molecules of CO₂.' Since pyruvate is a 3C compound, all 3 carbons are released as CO₂. Per glucose (2 pyruvates): 6 CO₂ total."
},
{
  id: 139,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Pyruvate undergoes oxidative decarboxylation in the mitochondrial matrix. This reaction is catalysed by:",
  options: [
    "Pyruvic acid decarboxylase",
    "Lactate dehydrogenase",
    "Pyruvic dehydrogenase",
    "Alcohol dehydrogenase"
  ],
  correct: 2,
  explanation: "NCERT states pyruvate 'undergoes oxidative decarboxylation by a complex set of reactions catalysed by pyruvic dehydrogenase.' Students often confuse this with pyruvic acid DECARBOXYLASE (involved in alcoholic fermentation). The key difference: dehydrogenase vs decarboxylase."
},
{
  id: 140,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "<b>Assertion (A):</b> Pyruvic acid decarboxylase and pyruvic dehydrogenase catalyse different reactions.<br><b>Reason (R):</b> Pyruvic acid decarboxylase is involved in alcoholic fermentation, while pyruvic dehydrogenase catalyses oxidative decarboxylation of pyruvate in aerobic respiration.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. Pyruvic acid decarboxylase acts in alcoholic fermentation (anaerobic) converting pyruvate to acetaldehyde + CO₂. Pyruvic dehydrogenase acts in aerobic respiration converting pyruvate to Acetyl CoA + CO₂ + NADH. R correctly explains why they catalyse different reactions."
},
{
  id: 141,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The coenzymes required for the reactions catalysed by pyruvic dehydrogenase include:",
  options: [
    "FAD and FMN",
    "NAD⁺ and Coenzyme A",
    "FADH₂ and cytochrome c",
    "Coenzyme Q and NAD⁺"
  ],
  correct: 1,
  explanation: "NCERT states: 'The reactions catalysed by pyruvic dehydrogenase require the participation of several coenzymes, including NAD⁺ and Coenzyme A.' FAD, FMN, cytochrome c and Coenzyme Q are involved in other steps (ETC)."
},
{
  id: 142,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The oxidative decarboxylation of pyruvic acid produces:",
  options: [
    "Pyruvic acid + CO₂ + FADH₂",
    "Acetyl CoA + CO₂ + NADH + H⁺",
    "Citric acid + CO₂ + NADH + H⁺",
    "Acetyl CoA + H₂O + FADH₂"
  ],
  correct: 1,
  explanation: "NCERT gives the equation: Pyruvic acid + CoA + NAD⁺ → Acetyl CoA + CO₂ + NADH + H⁺. FADH₂ is NOT produced in this step (it is produced in Krebs cycle). Citric acid is formed later when Acetyl CoA enters Krebs cycle."
},
{
  id: 143,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The cofactor required for the reaction catalysed by pyruvate dehydrogenase, as shown in the NCERT equation, is:",
  options: [
    "Fe²⁺",
    "Zn²⁺",
    "Mg²⁺",
    "Cu²⁺"
  ],
  correct: 2,
  explanation: "The NCERT equation shows Mg²⁺ above the arrow as a required cofactor for pyruvate dehydrogenase activity. This is a small but frequently tested detail that students overlook."
},
{
  id: 144,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "How many molecules of NADH are produced during the oxidative decarboxylation of pyruvic acid derived from one molecule of glucose?",
  options: [
    "1 NADH",
    "2 NADH",
    "4 NADH",
    "6 NADH"
  ],
  correct: 1,
  explanation: "NCERT states: 'two molecules of NADH are produced from the metabolism of two molecules of pyruvic acid (produced from one glucose molecule during glycolysis).' Each pyruvate produces 1 NADH, and one glucose gives 2 pyruvates, so total = 2 NADH."
},
{
  id: 145,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "How many molecules of CO₂ are released during the oxidative decarboxylation of pyruvic acid from one glucose molecule?",
  options: [
    "2 CO₂",
    "4 CO₂",
    "6 CO₂",
    "1 CO₂"
  ],
  correct: 0,
  explanation: "Each pyruvate releases 1 CO₂ during oxidative decarboxylation to form Acetyl CoA. One glucose produces 2 pyruvates, so 2 CO₂ are released in this step. The remaining 4 CO₂ are released during the Krebs cycle (2 per cycle × 2 turns)."
},
{
  id: 146,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Consider the following statements:<br>(I) Pyruvate is formed in the cytosol by glycolysis<br>(II) Pyruvate enters the mitochondrial matrix for oxidative decarboxylation<br>(III) Pyruvic dehydrogenase is located in the cytoplasm<br>(IV) Acetyl CoA is the product that enters Krebs' cycle<br>Which of the above are correct?",
  options: [
    "I, II and IV only",
    "I, II, III and IV",
    "I and IV only",
    "II, III and IV only"
  ],
  correct: 0,
  explanation: "Statement III is WRONG — pyruvic dehydrogenase is located in the mitochondrial matrix, not the cytoplasm. NCERT clearly states pyruvate enters the mitochondrial matrix where it undergoes oxidative decarboxylation. Statements I, II and IV are correct."
},
{
  id: 147,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The cyclic pathway entered by Acetyl CoA is called:",
  options: [
    "EMP pathway",
    "Pentose phosphate pathway",
    "Tricarboxylic acid cycle (Krebs' cycle)",
    "Calvin cycle"
  ],
  correct: 2,
  explanation: "NCERT states: 'The acetyl CoA then enters a cyclic pathway, tricarboxylic acid cycle, more commonly called as Krebs' cycle.' EMP pathway is glycolysis. Calvin cycle is part of photosynthesis. Pentose phosphate pathway is an alternative glucose oxidation pathway."
},
{
  id: 148,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Krebs' cycle was first elucidated by:",
  options: [
    "Gustav Embden",
    "Otto Meyerhof",
    "Hans Krebs",
    "J. Parnas"
  ],
  correct: 2,
  explanation: "NCERT states Krebs' cycle is 'called as Krebs' cycle after the scientist Hans Krebs who first elucidated it.' Embden, Meyerhof and Parnas are associated with glycolysis (EMP pathway)."
},
{
  id: 149,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "<b>Assertion (A):</b> The complete oxidation of pyruvate takes place in the mitochondrial matrix.<br><b>Reason (R):</b> The passing on of electrons to molecular O₂ with simultaneous ATP synthesis occurs on the inner mitochondrial membrane.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both A and R are true and directly from NCERT. However, R does NOT explain A — they describe two different processes at two different locations. A describes Krebs cycle (matrix) and R describes ETC (inner membrane). They are independent facts."
},
{
  id: 150,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Which of the following is the correct equation for oxidative decarboxylation of pyruvic acid?",
  options: [
    "Pyruvic acid + CoA + FAD → Acetyl CoA + CO₂ + FADH₂",
    "Pyruvic acid + CoA + NAD⁺ → Acetyl CoA + CO₂ + NADH + H⁺",
    "Pyruvic acid + NAD⁺ → Lactic acid + NADH + H⁺",
    "Pyruvic acid → Acetaldehyde + CO₂"
  ],
  correct: 1,
  explanation: "NCERT gives: Pyruvic acid + CoA + NAD⁺ → Acetyl CoA + CO₂ + NADH + H⁺ (catalysed by pyruvate dehydrogenase, Mg²⁺). Option A wrongly uses FAD. Option C represents lactic acid fermentation. Option D represents alcoholic fermentation (decarboxylation step)."
},
{
  id: 151,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The term 'oxidative decarboxylation' of pyruvate means:",
  options: [
    "Only removal of CO₂ from pyruvate",
    "Only oxidation of pyruvate without CO₂ release",
    "Simultaneous oxidation and removal of CO₂ from pyruvate",
    "Reduction of pyruvate with addition of CO₂"
  ],
  correct: 2,
  explanation: "'Oxidative decarboxylation' combines two processes: OXIDATION (removal of hydrogen/electrons, transferred to NAD⁺) and DECARBOXYLATION (removal of CO₂). Both happen simultaneously. Option A describes only decarboxylation. Option B describes only oxidation."
},
{
  id: 152,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Consider the following about the link reaction (oxidative decarboxylation of pyruvate):<br>(I) It takes place in the cytoplasm<br>(II) It produces Acetyl CoA<br>(III) It is catalysed by pyruvic dehydrogenase<br>(IV) It requires NAD⁺ and Coenzyme A<br>(V) It releases CO₂<br>How many of the above statements are correct?",
  options: [
    "Five",
    "Three",
    "Four",
    "Two"
  ],
  correct: 2,
  explanation: "Statement I is WRONG — it takes place in the mitochondrial matrix, NOT cytoplasm. Statements II, III, IV and V are all correct (four statements). This is a critical location trap — students confuse glycolysis (cytoplasm) with oxidative decarboxylation (matrix)."
},
{
  id: 153,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The number of carbon atoms in pyruvic acid and acetyl CoA respectively are:",
  options: [
    "3C and 2C",
    "2C and 3C",
    "3C and 3C",
    "4C and 2C"
  ],
  correct: 0,
  explanation: "Pyruvic acid is a 3-carbon compound. During oxidative decarboxylation, one carbon is removed as CO₂, leaving a 2-carbon acetyl group attached to CoA (Acetyl CoA). This carbon count is essential for understanding the stoichiometry of aerobic respiration."
},
{
  id: 154,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Which of the following statements is <b>INCORRECT</b> about the oxidative decarboxylation of pyruvate?",
  options: [
    "It is catalysed by pyruvic dehydrogenase",
    "It takes place in the mitochondrial matrix",
    "It produces FADH₂ as one of the products",
    "It requires NAD⁺ and Coenzyme A"
  ],
  correct: 2,
  explanation: "NCERT equation clearly shows NAD⁺ → NADH + H⁺, NOT FAD → FADH₂. FADH₂ is produced during the Krebs cycle (succinate → fumarate step), not during oxidative decarboxylation of pyruvate. This is a frequently asked NEET trap."
},
{
  id: 155,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "<b>Assertion (A):</b> During aerobic respiration, electrons removed from hydrogen atoms are ultimately passed to molecular O₂.<br><b>Reason (R):</b> This electron transfer to O₂ is coupled with simultaneous synthesis of ATP.",
  options: [
    "A is false but R is true",
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both statements are from NCERT: 'The passing on of the electrons removed as part of the hydrogen atoms to molecular O₂ with simultaneous synthesis of ATP.' The coupling of electron transfer to ATP synthesis (oxidative phosphorylation) is the key concept. R correctly explains the significance of A."
},
{
  id: 156,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Match the following processes with their locations:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Glycolysis &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (P) Inner mitochondrial membrane<br>(ii) Oxidative decarboxylation &emsp;&emsp; (Q) Cytoplasm<br>(iii) Complete oxidation of pyruvate &emsp;(R) Mitochondrial matrix<br>(iv) Electron transfer to O₂ &emsp;&emsp;&emsp;&emsp; (S) Mitochondrial matrix<br><br>Select the correct match:",
  options: [
    "i-Q, ii-R, iii-S, iv-P",
    "i-R, ii-Q, iii-P, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-P, ii-R, iii-S, iv-Q"
  ],
  correct: 0,
  explanation: "Glycolysis → Cytoplasm (Q); Oxidative decarboxylation → Mitochondrial matrix (R); Complete oxidation of pyruvate (Krebs cycle) → Mitochondrial matrix (S); Electron transfer to O₂ → Inner mitochondrial membrane (P). Option C swaps locations of (ii) and (iv)."
},
{
  id: 157,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Pyruvate is formed by the glycolytic catabolism of carbohydrates in the cytosol. The term 'cytosol' refers to:",
  options: [
    "Mitochondrial matrix",
    "The fluid portion of cytoplasm",
    "Inner mitochondrial membrane",
    "Nuclear matrix"
  ],
  correct: 1,
  explanation: "Cytosol refers to the fluid (aqueous) portion of the cytoplasm. NCERT uses 'cytosol' and 'cytoplasm' interchangeably in this context for the location of glycolysis. It is NOT the mitochondrial matrix or any organelle interior."
},
{
  id: 158,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Which of the following is <b>NOT</b> a reactant in the oxidative decarboxylation of pyruvate as per the NCERT equation?",
  options: [
    "Pyruvic acid",
    "CoA",
    "NAD⁺",
    "FADH₂"
  ],
  correct: 3,
  explanation: "The NCERT equation shows: Pyruvic acid + CoA + NAD⁺ → Acetyl CoA + CO₂ + NADH + H⁺. FADH₂ is NOT a reactant in this reaction; it is a product of the Krebs cycle. Pyruvic acid, CoA and NAD⁺ are the three reactants."
},
{
  id: 159,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Consider the following statements:<br>(I) Pyruvic dehydrogenase catalyses a simple, single-step reaction<br>(II) The reactions require participation of several coenzymes<br>(III) NAD⁺ and Coenzyme A are among the coenzymes involved<br>(IV) Mg²⁺ is required as a cofactor<br>Which of the above are correct?",
  options: [
    "I, II, III and IV",
    "I, III and IV only",
    "II, III and IV only",
    "I and II only"
  ],
  correct: 2,
  explanation: "Statement I is WRONG — NCERT states pyruvate 'undergoes oxidative decarboxylation by a COMPLEX SET of reactions', not a simple single-step reaction. Statements II, III and IV are all directly from NCERT."
},
{
  id: 160,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "During the complete oxidation of one molecule of glucose through aerobic respiration, CO₂ is released at which stages?",
  options: [
    "Glycolysis and Krebs cycle",
    "Oxidative decarboxylation of pyruvate and Krebs cycle",
    "Glycolysis and ETC",
    "Only during ETC"
  ],
  correct: 1,
  explanation: "CO₂ is NOT released during glycolysis or ETC. CO₂ is released during: (1) oxidative decarboxylation of pyruvate (2 CO₂ per glucose) and (2) Krebs cycle (4 CO₂ per glucose). Total 6 CO₂ per glucose. This is a very common NEET trap."
},
{
  id: 161,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "<b>Assertion (A):</b> Acetyl CoA is a 2-carbon compound attached to Coenzyme A.<br><b>Reason (R):</b> During oxidative decarboxylation, one carbon of the 3-carbon pyruvic acid is removed as CO₂.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Pyruvic acid (3C) loses one carbon as CO₂ during decarboxylation, leaving a 2C acetyl group. This 2C unit combines with CoA to form Acetyl CoA. R correctly explains why Acetyl CoA has only 2 carbons."
},
{
  id: 162,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The tricarboxylic acid cycle is also known as:",
  options: [
    "EMP pathway",
    "Krebs' cycle",
    "HMP shunt",
    "Cori cycle"
  ],
  correct: 1,
  explanation: "NCERT states: 'tricarboxylic acid cycle, more commonly called as Krebs' cycle after the scientist Hans Krebs.' EMP pathway = glycolysis. HMP shunt = pentose phosphate pathway. Cori cycle involves lactate recycling between muscles and liver."
},
{
  id: 163,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Which of the following correctly describes the fate of the hydrogen atoms removed during complete oxidation of pyruvate?",
  options: [
    "They combine directly with CO₂ to form carbohydrates",
    "They are released as H₂ gas from the cell",
    "Their electrons are passed on to molecular O₂ with simultaneous synthesis of ATP",
    "They are stored permanently in NADH without further use"
  ],
  correct: 2,
  explanation: "NCERT states: 'The passing on of the electrons removed as part of the hydrogen atoms to molecular O₂ with simultaneous synthesis of ATP.' This is the electron transport chain / oxidative phosphorylation process on the inner mitochondrial membrane."
},
{
  id: 164,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Consider the total NADH produced from one glucose molecule up to the Acetyl CoA stage (glycolysis + oxidative decarboxylation):",
  options: [
    "2 NADH",
    "4 NADH",
    "6 NADH",
    "8 NADH"
  ],
  correct: 1,
  explanation: "Glycolysis produces 2 NADH (per glucose). Oxidative decarboxylation produces 2 NADH (1 per pyruvate × 2 pyruvates per glucose). Total = 2 + 2 = 4 NADH up to the Acetyl CoA stage. Krebs cycle produces additional NADH."
},
{
  id: 165,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "The oxidative decarboxylation of pyruvate is often called the 'link reaction' because:",
  options: [
    "It links photosynthesis to respiration",
    "It links glycolysis (in cytoplasm) to Krebs cycle (in mitochondrial matrix)",
    "It links ETC to Krebs cycle",
    "It links fermentation to aerobic respiration"
  ],
  correct: 1,
  explanation: "The oxidative decarboxylation of pyruvate serves as a connecting step (link) between glycolysis (cytoplasm) and the Krebs cycle (mitochondrial matrix). It converts the glycolytic product (pyruvate) into the Krebs cycle substrate (Acetyl CoA)."
},
{
  id: 166,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Which of the following statements is <b>INCORRECT</b> about aerobic respiration?",
  options: [
    "It requires O₂",
    "The complete oxidation of pyruvate takes place in the mitochondrial matrix",
    "Electron transfer to O₂ occurs in the mitochondrial matrix",
    "It produces CO₂ and water as end products"
  ],
  correct: 2,
  explanation: "Electron transfer to O₂ occurs on the INNER MITOCHONDRIAL MEMBRANE, not in the mitochondrial matrix. NCERT clearly states: 'the second process is located on the inner membrane of the mitochondria.' Options A, B and D are correct."
},
{
  id: 167,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "Match the following scientists with their contributions:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Hans Krebs &emsp;&emsp;&emsp; (P) Glycolysis scheme<br>(ii) Embden &emsp;&emsp;&emsp;&emsp; (Q) TCA cycle<br>(iii) Meyerhof &emsp;&emsp;&emsp;&emsp; (R) Glycolysis scheme<br>(iv) Parnas &emsp;&emsp;&emsp;&emsp;&emsp; (S) Glycolysis scheme<br><br>Select the correct match:",
  options: [
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-R, iii-P, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-R, ii-S, iii-P, iv-Q"
  ],
  correct: 2,
  explanation: "Hans Krebs → TCA/Krebs cycle (Q); Embden → Glycolysis/EMP pathway (P); Meyerhof → Glycolysis/EMP pathway (R); Parnas → Glycolysis/EMP pathway (S). Option B is a trap swapping Embden and Meyerhof — though both contributed to glycolysis, the matching order matters."
},
{
  id: 168,
  topic: "Aerobic Respiration – Pyruvate Oxidation",
  q: "<b>Assertion (A):</b> During oxidative decarboxylation, NAD⁺ is reduced to NADH + H⁺.<br><b>Reason (R):</b> Hydrogen atoms removed from pyruvic acid are transferred to NAD⁺.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true and from NCERT. During oxidative decarboxylation, hydrogen atoms (with electrons) are removed from pyruvic acid and transferred to NAD⁺, reducing it to NADH + H⁺. R correctly explains the mechanism of how NAD⁺ gets reduced (A)."
},
{
  id: 169,
  topic: "Tricarboxylic Acid Cycle",
  q: "The TCA cycle starts with the condensation of acetyl group with:",
  options: [
    "Citric acid and water",
    "Succinyl-CoA and water",
    "Oxaloacetic acid (OAA) and water",
    "α-ketoglutaric acid and water"
  ],
  correct: 2,
  explanation: "NCERT states: 'The TCA cycle starts with the condensation of acetyl group with oxaloacetic acid (OAA) and water to yield citric acid.' OAA (4C) + Acetyl CoA (2C) → Citric acid (6C). This is the gateway reaction of the TCA cycle."
},
{
  id: 170,
  topic: "Tricarboxylic Acid Cycle",
  q: "The first reaction of TCA cycle is catalysed by the enzyme:",
  options: [
    "Isocitrate dehydrogenase",
    "Citrate synthase",
    "α-ketoglutarate dehydrogenase",
    "Succinate dehydrogenase"
  ],
  correct: 1,
  explanation: "NCERT states: 'The reaction is catalysed by the enzyme citrate synthase and a molecule of CoA is released.' This is the condensation of acetyl group with OAA and water to form citric acid. Students may confuse citrate synthase with other TCA enzymes."
},
{
  id: 171,
  topic: "Tricarboxylic Acid Cycle",
  q: "During the first reaction of TCA cycle, which molecule is released along with the formation of citric acid?",
  options: [
    "CO₂",
    "NADH + H⁺",
    "CoA",
    "GTP"
  ],
  correct: 2,
  explanation: "NCERT states: 'a molecule of CoA is released' during the first reaction. The acetyl group from Acetyl CoA condenses with OAA, and CoA is freed. CO₂, NADH, and GTP are released at other steps."
},
{
  id: 172,
  topic: "Tricarboxylic Acid Cycle",
  q: "Citrate is then converted to isocitrate by the process of:",
  options: [
    "Decarboxylation",
    "Oxidation",
    "Isomerisation",
    "Phosphorylation"
  ],
  correct: 2,
  explanation: "NCERT states: 'Citrate is then isomerised to isocitrate.' Isomerisation means rearrangement of atoms within the molecule without adding or removing atoms. No carbon is lost (both are 6C) and no oxidation/reduction occurs."
},
{
  id: 173,
  topic: "Tricarboxylic Acid Cycle",
  q: "How many successive steps of decarboxylation follow the formation of isocitrate in the TCA cycle?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "NCERT states: 'It is followed by two successive steps of decarboxylation, leading to the formation of α-ketoglutaric acid and then succinyl-CoA.' First: Isocitrate (6C) → α-ketoglutaric acid (5C) + CO₂. Second: α-ketoglutaric acid (5C) → Succinyl-CoA (4C) + CO₂."
},
{
  id: 174,
  topic: "Tricarboxylic Acid Cycle",
  q: "The two successive decarboxylation steps in TCA cycle lead to the formation of:",
  options: [
    "Citric acid and isocitrate",
    "Succinic acid and malic acid",
    "α-ketoglutaric acid and succinyl-CoA",
    "OAA and citric acid"
  ],
  correct: 2,
  explanation: "NCERT states: 'two successive steps of decarboxylation, leading to the formation of α-ketoglutaric acid and then succinyl-CoA.' First decarboxylation: isocitrate → α-ketoglutarate. Second: α-ketoglutarate → succinyl-CoA."
},
{
  id: 175,
  topic: "Tricarboxylic Acid Cycle",
  q: "During the conversion of succinyl-CoA to succinic acid, which high-energy molecule is synthesised?",
  options: [
    "ATP directly",
    "NADH + H⁺",
    "GTP",
    "FADH₂"
  ],
  correct: 2,
  explanation: "NCERT states: 'During the conversion of succinyl-CoA to succinic acid a molecule of GTP is synthesised. This is a substrate level phosphorylation.' GTP is then converted to ATP in a coupled reaction. The direct product is GTP, not ATP."
},
{
  id: 176,
  topic: "Tricarboxylic Acid Cycle",
  q: "The synthesis of GTP during the conversion of succinyl-CoA to succinic acid is an example of:",
  options: [
    "Oxidative phosphorylation",
    "Photophosphorylation",
    "Substrate level phosphorylation",
    "Chemiosmotic phosphorylation"
  ],
  correct: 2,
  explanation: "NCERT specifically states: 'This is a substrate level phosphorylation.' Unlike oxidative phosphorylation (which occurs in ETC), substrate level phosphorylation involves direct transfer of a phosphate group to form GTP/ATP without involvement of the electron transport chain."
},
{
  id: 177,
  topic: "Tricarboxylic Acid Cycle",
  q: "<b>Assertion (A):</b> During TCA cycle, GTP is synthesised during the conversion of succinyl-CoA to succinic acid.<br><b>Reason (R):</b> In a coupled reaction, GTP is converted to GDP with the simultaneous synthesis of ATP from ADP.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both A and R are true and directly from NCERT. However, R does not EXPLAIN A — R describes what happens to GTP after it is formed (a separate coupled reaction), not why GTP is formed. These are two related but independent facts."
},
{
  id: 178,
  topic: "Tricarboxylic Acid Cycle",
  q: "In the TCA cycle, NAD⁺ is reduced to NADH + H⁺ at how many points?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 2,
  explanation: "NCERT states: 'there are three points in the cycle where NAD⁺ is reduced to NADH + H⁺.' These occur at: (1) Isocitrate → α-ketoglutarate, (2) α-ketoglutarate → succinyl-CoA, (3) Malate → OAA. Students often confuse this with 4 NADH per pyruvate (which includes the link reaction NADH)."
},
{
  id: 179,
  topic: "Tricarboxylic Acid Cycle",
  q: "In the TCA cycle, FAD⁺ is reduced to FADH₂ at how many points?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 0,
  explanation: "NCERT states: 'one point where FAD⁺ is reduced to FADH₂.' This occurs during the conversion of succinic acid to fumarate (or as shown in figure: succinic acid → malic acid step). Only ONE FADH₂ per TCA turn — students often incorrectly state 2."
},
{
  id: 180,
  topic: "Tricarboxylic Acid Cycle",
  q: "The continued oxidation of acetyl CoA via the TCA cycle requires the continued replenishment of:",
  options: [
    "Citric acid",
    "α-ketoglutaric acid",
    "Succinyl-CoA",
    "Oxaloacetic acid (OAA)"
  ],
  correct: 3,
  explanation: "NCERT states: 'The continued oxidation of acetyl CoA via the TCA cycle requires the continued replenishment of oxaloacetic acid, the first member of the cycle.' OAA is regenerated at the end of each cycle when malate is oxidised."
},
{
  id: 181,
  topic: "Tricarboxylic Acid Cycle",
  q: "Besides the replenishment of OAA, the TCA cycle also requires regeneration of:",
  options: [
    "ATP and GTP",
    "Glucose and fructose",
    "NAD⁺ and FAD⁺ from NADH and FADH₂ respectively",
    "CoA and acetaldehyde"
  ],
  correct: 2,
  explanation: "NCERT states: 'it also requires regeneration of NAD⁺ and FAD⁺ from NADH and FADH₂ respectively.' This regeneration occurs via the electron transport chain. Without NAD⁺/FAD⁺ regeneration, the cycle would halt."
},
{
  id: 182,
  topic: "Tricarboxylic Acid Cycle",
  q: "Consider the summary equation for the TCA phase (per pyruvate):<br>Pyruvic acid + 4NAD⁺ + FAD⁺ + 2H₂O + ADP + Pi → ?<br>The products are:",
  options: [
    "3CO₂ + 4NADH + 4H⁺ + FADH₂ + ATP",
    "2CO₂ + 3NADH + 3H⁺ + FADH₂ + 2ATP",
    "3CO₂ + 3NADH + 3H⁺ + 2FADH₂ + ATP",
    "6CO₂ + 8NADH + 8H⁺ + 2FADH₂ + 2ATP"
  ],
  correct: 0,
  explanation: "NCERT gives the summary equation per pyruvate: → 3CO₂ + 4NADH + 4H⁺ + FADH₂ + ATP. This includes link reaction + TCA cycle. Option D represents the total for 2 pyruvates (i.e., per glucose), not per pyruvate."
},
{
  id: 183,
  topic: "Tricarboxylic Acid Cycle",
  q: "From one molecule of glucose, through the link reaction and TCA cycle combined, how many NADH + H⁺ molecules are produced?",
  options: [
    "4",
    "6",
    "8",
    "10"
  ],
  correct: 2,
  explanation: "Per pyruvate: 4 NADH (1 from link reaction + 3 from TCA). Per glucose: 4 × 2 = 8 NADH + H⁺. NCERT confirms: 'eight molecules of NADH + H⁺ have been synthesised.' This does NOT include the 2 NADH from glycolysis."
},
{
  id: 184,
  topic: "Tricarboxylic Acid Cycle",
  q: "From one molecule of glucose, how many FADH₂ molecules are produced in the TCA cycle?",
  options: [
    "1",
    "2",
    "4",
    "6"
  ],
  correct: 1,
  explanation: "NCERT states: 'two of FADH₂ have been synthesised.' One FADH₂ per TCA turn × 2 turns per glucose = 2 FADH₂. Students sometimes erroneously double this or confuse it with the NADH count."
},
{
  id: 185,
  topic: "Tricarboxylic Acid Cycle",
  q: "How many ATP molecules are directly synthesised in the TCA cycle (both turns) from one molecule of glucose?",
  options: [
    "1",
    "2",
    "4",
    "6"
  ],
  correct: 1,
  explanation: "NCERT states: 'two molecules of ATP in TCA cycle.' One GTP (equivalent to 1 ATP) per turn × 2 turns = 2 ATP via substrate level phosphorylation. The large number of ATP comes later via ETC and oxidative phosphorylation."
},
{
  id: 186,
  topic: "Tricarboxylic Acid Cycle",
  q: "Consider the following intermediates of TCA cycle and their carbon numbers:<br>(I) Citric acid – 6C<br>(II) α-ketoglutaric acid – 5C<br>(III) Succinyl-CoA – 4C<br>(IV) OAA – 6C<br>Which of the above are correct?",
  options: [
    "I, II and III only",
    "I, II, III and IV",
    "I and II only",
    "II, III and IV only"
  ],
  correct: 0,
  explanation: "Statement IV is WRONG — OAA is a 4C compound, not 6C. From the figure: OAA (4C) + Acetyl CoA (2C) → Citric acid (6C). Statements I (6C), II (5C) and III (4C) are correct. Confusing OAA carbon count is a common error."
},
{
  id: 187,
  topic: "Tricarboxylic Acid Cycle",
  q: "Match the following TCA cycle intermediates with their carbon numbers:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Citric acid &emsp;&emsp;&emsp;&emsp;&emsp; (P) 4C<br>(ii) α-ketoglutaric acid &emsp; (Q) 6C<br>(iii) OAA &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (R) 5C<br>(iv) Succinic acid &emsp;&emsp;&emsp;&emsp;(S) 4C<br><br>Select the correct match:",
  options: [
    "i-Q, ii-R, iii-S, iv-P",
    "i-Q, ii-R, iii-P, iv-S",
    "i-R, ii-Q, iii-P, iv-S",
    "i-P, ii-Q, iii-R, iv-S"
  ],
  correct: 1,
  explanation: "From the NCERT figure: Citric acid = 6C (Q); α-ketoglutaric acid = 5C (R); OAA = 4C (P); Succinic acid = 4C (S). Both OAA and succinic acid are 4C compounds. Option A is a trap — it assigns OAA to S and succinic acid to P, which is technically also correct since both P and S are 4C, but the standard matching follows the listed order."
},
{
  id: 188,
  topic: "Tricarboxylic Acid Cycle",
  q: "<b>Assertion (A):</b> The continued operation of the TCA cycle requires the regeneration of NAD⁺ and FAD⁺.<br><b>Reason (R):</b> NAD⁺ and FAD⁺ serve as electron acceptors in TCA cycle reactions, and their reduced forms (NADH, FADH₂) must be reoxidised.",
  options: [
    "A is false but R is true",
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 2,
  explanation: "Both are true. NCERT states the cycle 'requires regeneration of NAD⁺ and FAD⁺ from NADH and FADH₂ respectively.' Since NAD⁺ and FAD⁺ are needed as electron acceptors in multiple TCA steps, they must be regenerated (via ETC) for the cycle to continue. R correctly explains A."
},
{
  id: 189,
  topic: "Tricarboxylic Acid Cycle",
  q: "How many CO₂ molecules are released per turn of the TCA cycle (from one acetyl CoA)?",
  options: [
    "1",
    "2",
    "3",
    "4"
  ],
  correct: 1,
  explanation: "Per TCA turn: 2 CO₂ are released (one at isocitrate → α-ketoglutarate, one at α-ketoglutarate → succinyl-CoA). Note: the 3rd CO₂ from each pyruvate is released during the link reaction (oxidative decarboxylation), NOT during TCA cycle itself."
},
{
  id: 190,
  topic: "Tricarboxylic Acid Cycle",
  q: "How many total CO₂ molecules are released from one glucose molecule through link reaction + TCA cycle?",
  options: [
    "2",
    "4",
    "6",
    "8"
  ],
  correct: 2,
  explanation: "Per pyruvate: 1 CO₂ (link reaction) + 2 CO₂ (TCA) = 3 CO₂. Per glucose (2 pyruvates): 3 × 2 = 6 CO₂. This accounts for all 6 carbons of glucose being fully oxidised to CO₂. No CO₂ is released during glycolysis or ETC."
},
{
  id: 191,
  topic: "Tricarboxylic Acid Cycle",
  q: "Which of the following is the correct sequence of TCA cycle intermediates?",
  options: [
    "OAA → Citrate → Isocitrate → α-ketoglutarate → Succinyl-CoA → Succinate → Malate → OAA",
    "OAA → Isocitrate → Citrate → α-ketoglutarate → Succinate → Succinyl-CoA → Malate → OAA",
    "Citrate → OAA → Isocitrate → Succinyl-CoA → α-ketoglutarate → Succinate → Malate → OAA",
    "OAA → Citrate → α-ketoglutarate → Isocitrate → Succinyl-CoA → Malate → Succinate → OAA"
  ],
  correct: 0,
  explanation: "The correct NCERT sequence: OAA + Acetyl CoA → Citrate → Isocitrate → α-ketoglutarate → Succinyl-CoA → Succinate → Malate → OAA. Options B, C and D scramble the order — notably confusing citrate/isocitrate and succinate/succinyl-CoA positions."
},
{
  id: 192,
  topic: "Tricarboxylic Acid Cycle",
  q: "Which of the following statements about the TCA cycle is <b>INCORRECT</b>?",
  options: [
    "Citrate synthase catalyses the first reaction of TCA cycle",
    "Citrate is isomerised to isocitrate",
    "GTP is synthesised during the conversion of α-ketoglutarate to succinyl-CoA",
    "Succinyl-CoA is oxidised to OAA in the remaining steps"
  ],
  correct: 2,
  explanation: "GTP is synthesised during the conversion of SUCCINYL-CoA to SUCCINIC ACID, NOT α-ketoglutarate to succinyl-CoA. The step α-ketoglutarate → succinyl-CoA involves decarboxylation and NADH production, not GTP synthesis. This is a frequently set NEET trap."
},
{
  id: 193,
  topic: "Tricarboxylic Acid Cycle",
  q: "Consider the following about products from one glucose molecule through glycolysis, link reaction and TCA cycle combined:<br>(I) 10 NADH + H⁺<br>(II) 2 FADH₂<br>(III) 4 ATP (total from substrate level phosphorylation)<br>(IV) 6 CO₂<br>Which are correct?",
  options: [
    "I, II and III only",
    "I, II, III and IV",
    "I and IV only",
    "II, III and IV only"
  ],
  correct: 1,
  explanation: "Glycolysis: 2 NADH + 2 ATP. Link reaction: 2 NADH. TCA: 6 NADH + 2 FADH₂ + 2 ATP (GTP). Totals: 10 NADH, 2 FADH₂, 4 ATP (2 from glycolysis + 2 from TCA), 6 CO₂. All four statements are correct."
},
{
  id: 194,
  topic: "Tricarboxylic Acid Cycle",
  q: "<b>Assertion (A):</b> O₂ is not directly used in the TCA cycle.<br><b>Reason (R):</b> The role of O₂ is to act as the terminal electron acceptor in the electron transport chain, not in the TCA cycle.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT notes that even after TCA, 'neither O₂ has come into the picture.' O₂ is the terminal electron acceptor in ETC (inner mitochondrial membrane), not directly involved in TCA (matrix). R correctly explains why O₂ is absent from TCA."
},
{
  id: 195,
  topic: "Tricarboxylic Acid Cycle",
  q: "The first member (starting compound) of the TCA cycle that must be continually replenished is:",
  options: [
    "Citric acid",
    "Acetyl CoA",
    "α-ketoglutaric acid",
    "Oxaloacetic acid (OAA)"
  ],
  correct: 3,
  explanation: "NCERT states: 'requires the continued replenishment of oxaloacetic acid, the first member of the cycle.' Citric acid is the first product formed, not the starting compound that needs replenishment. Acetyl CoA comes from outside the cycle."
},
{
  id: 196,
  topic: "Tricarboxylic Acid Cycle",
  q: "From the NCERT figure, in which step of TCA cycle is FADH₂ produced?",
  options: [
    "Isocitrate → α-ketoglutarate",
    "α-ketoglutarate → Succinyl-CoA",
    "Succinic acid → Malic acid",
    "Malic acid → OAA"
  ],
  correct: 2,
  explanation: "From the NCERT figure, FAD⁺ → FADH₂ occurs during the conversion of succinic acid to malic acid. The other three options produce NADH + H⁺. This is the only step where FAD is the electron acceptor instead of NAD⁺."
},
{
  id: 197,
  topic: "Tricarboxylic Acid Cycle",
  q: "Which of the following statements is true regarding citric acid in the TCA cycle?",
  options: [
    "Citric acid is a 4-carbon compound",
    "Citric acid is formed by condensation of acetyl group (2C) with OAA (4C)",
    "Citric acid is directly decarboxylated to α-ketoglutaric acid",
    "Citric acid is the last intermediate of TCA cycle"
  ],
  correct: 1,
  explanation: "NCERT states: 'condensation of acetyl group with oxaloacetic acid (OAA) and water to yield citric acid.' Acetyl (2C) + OAA (4C) = Citric acid (6C), not 4C. Citrate is first isomerised to isocitrate before decarboxylation. Citric acid is the first product, not the last."
},
{
  id: 198,
  topic: "Tricarboxylic Acid Cycle",
  q: "<b>Assertion (A):</b> OAA is called the first member of the TCA cycle.<br><b>Reason (R):</b> OAA is a 6-carbon compound that condenses with acetyl CoA.",
  options: [
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 0,
  explanation: "A is true — NCERT calls OAA 'the first member of the cycle.' R is FALSE — OAA is a 4C compound (not 6C). It is citric acid that is 6C, formed after the condensation. Students commonly confuse the carbon count of OAA."
},
{
  id: 199,
  topic: "Tricarboxylic Acid Cycle",
  q: "Match the following TCA cycle steps with their products:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Isocitrate → α-ketoglutarate &emsp; (P) GTP<br>(ii) Succinyl-CoA → Succinate &emsp;&emsp; (Q) NADH + H⁺ + CO₂<br>(iii) Succinate → Malate &emsp;&emsp;&emsp;&emsp;&emsp; (R) FADH₂<br>(iv) Malate → OAA &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (S) NADH + H⁺<br><br>Select the correct match:",
  options: [
    "i-Q, ii-P, iii-R, iv-S",
    "i-P, ii-Q, iii-S, iv-R",
    "i-R, ii-S, iii-Q, iv-P",
    "i-S, ii-R, iii-P, iv-Q"
  ],
  correct: 0,
  explanation: "Isocitrate → α-ketoglutarate: decarboxylation + NADH (Q). Succinyl-CoA → Succinate: GTP formation (P). Succinate → Malate: FADH₂ (R). Malate → OAA: NADH+H⁺ without CO₂ (S). Option D reverses several matches."
},
{
  id: 200,
  topic: "Tricarboxylic Acid Cycle",
  q: "Up to the end of TCA cycle (from one glucose), no oxygen has been used. The role of the NADH + H⁺ and FADH₂ produced is to:",
  options: [
    "Be excreted as waste products",
    "Directly synthesise glucose via gluconeogenesis",
    "Donate electrons to the electron transport chain for ATP synthesis",
    "Reduce CO₂ back to glucose"
  ],
  correct: 2,
  explanation: "NCERT poses the question: 'what is the role of the NADH + H⁺ and FADH₂ that is synthesised?' Their electrons are passed through the ETC on the inner mitochondrial membrane to molecular O₂, driving ATP synthesis by oxidative phosphorylation."
},
{
  id: 201,
  topic: "Tricarboxylic Acid Cycle",
  q: "How many NADH + H⁺ molecules are produced per turn of the TCA cycle (NOT including the link reaction)?",
  options: [
    "2",
    "3",
    "4",
    "1"
  ],
  correct: 1,
  explanation: "NCERT states 'three points in the cycle where NAD⁺ is reduced to NADH + H⁺' — per TCA turn, 3 NADH are produced. The 4th NADH per pyruvate comes from the link reaction (not TCA itself). This distinction is critical for NEET calculations."
},
{
  id: 202,
  topic: "Tricarboxylic Acid Cycle",
  q: "Consider the following about substrate level phosphorylation in respiration:<br>(I) Conversion of BPGA → PGA in glycolysis<br>(II) Conversion of PEP → pyruvate in glycolysis<br>(III) Conversion of succinyl-CoA → succinic acid in TCA<br>(IV) ATP synthesis in ETC<br>Which of the above are examples of substrate level phosphorylation?",
  options: [
    "I, II and III only",
    "I, II, III and IV",
    "III and IV only",
    "III only"
  ],
  correct: 0,
  explanation: "Substrate level phosphorylation involves direct transfer of phosphate to ADP/GDP without ETC involvement. This occurs at: (I) BPGA → PGA, (II) PEP → pyruvate (both in glycolysis), and (III) succinyl-CoA → succinic acid (TCA). ATP synthesis in ETC is OXIDATIVE phosphorylation, NOT substrate level."
},
{
  id: 203,
  topic: "Tricarboxylic Acid Cycle",
  q: "Which of the following is the correct total tally of reduced coenzymes and ATP from complete oxidation of one glucose molecule up to the end of TCA cycle (glycolysis + link + TCA)?",
  options: [
    "8 NADH, 2 FADH₂, 2 ATP",
    "10 NADH, 2 FADH₂, 4 ATP",
    "10 NADH, 4 FADH₂, 4 ATP",
    "8 NADH, 4 FADH₂, 2 ATP"
  ],
  correct: 1,
  explanation: "Glycolysis: 2 NADH + 2 ATP. Link reaction: 2 NADH. TCA (×2 turns): 6 NADH + 2 FADH₂ + 2 ATP. Grand total: 10 NADH + 2 FADH₂ + 4 ATP. Option A misses glycolysis NADH and ATP. Option C incorrectly doubles FADH₂."
},
{
  id: 204,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The electron transport system (ETS) is present in the:",
  options: [
    "Outer mitochondrial membrane",
    "Mitochondrial matrix",
    "Inner mitochondrial membrane",
    "Cytoplasm"
  ],
  correct: 2,
  explanation: "NCERT states: 'the electron transport system (ETS) is present in the inner mitochondrial membrane.' The matrix houses the TCA cycle, and the outer membrane is permeable. This location fact is one of the most repeatedly tested in NEET."
},
{
  id: 205,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The metabolic pathway through which electrons pass from one carrier to another is called:",
  options: [
    "Krebs cycle",
    "Glycolysis",
    "Electron Transport System (ETS)",
    "Calvin cycle"
  ],
  correct: 2,
  explanation: "NCERT defines: 'The metabolic pathway through which the electron passes from one carrier to another, is called the electron transport system (ETS).' Krebs cycle and glycolysis are metabolic pathways but do not describe electron carrier chains."
},
{
  id: 206,
  topic: "ETS and Oxidative Phosphorylation",
  q: "NADH produced in the mitochondrial matrix during the citric acid cycle is oxidised by:",
  options: [
    "Complex II (Succinate dehydrogenase)",
    "Complex III (Cytochrome bc₁)",
    "Complex I (NADH dehydrogenase)",
    "Complex IV (Cytochrome c oxidase)"
  ],
  correct: 2,
  explanation: "NCERT states: 'Electrons from NADH produced in the mitochondrial matrix during citric acid cycle are oxidised by an NADH dehydrogenase (Complex I).' Complex II handles FADH₂ from succinate oxidation. Students commonly confuse Complexes I and II."
},
{
  id: 207,
  topic: "ETS and Oxidative Phosphorylation",
  q: "After electrons from NADH are accepted by Complex I, they are transferred to:",
  options: [
    "Cytochrome c",
    "Ubiquinone",
    "Complex IV directly",
    "Molecular O₂"
  ],
  correct: 1,
  explanation: "NCERT states: 'electrons are then transferred to ubiquinone located within the inner membrane.' Ubiquinone (Coenzyme Q) is the first mobile carrier that collects electrons from both Complex I and Complex II before passing them to Complex III."
},
{
  id: 208,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Ubiquinone receives reducing equivalents via FADH₂ through:",
  options: [
    "Complex I",
    "Complex II",
    "Complex III",
    "Complex IV"
  ],
  correct: 1,
  explanation: "NCERT states: 'Ubiquinone also receives reducing equivalents via FADH₂ (Complex II) that is generated during oxidation of succinate in the citric acid cycle.' FADH₂ bypasses Complex I entirely and enters at Complex II — this is why FADH₂ produces fewer ATP than NADH."
},
{
  id: 209,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The reduced ubiquinone (ubiquinol) transfers electrons to cytochrome c via:",
  options: [
    "Complex I (NADH dehydrogenase)",
    "Complex IV (Cytochrome c oxidase)",
    "Complex III (Cytochrome bc₁ complex)",
    "Complex V (ATP synthase)"
  ],
  correct: 2,
  explanation: "NCERT states: 'The reduced ubiquinone (ubiquinol) is then oxidised with the transfer of electrons to cytochrome c via cytochrome bc₁ complex (Complex III).' The electron path is: Complex I/II → Ubiquinone → Complex III → Cyt c → Complex IV."
},
{
  id: 210,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Cytochrome c is described in NCERT as:",
  options: [
    "A large protein embedded deep within the inner membrane",
    "An integral membrane protein forming a proton channel",
    "A small protein attached to the outer surface of the inner membrane acting as a mobile carrier",
    "A copper-containing enzyme in the mitochondrial matrix"
  ],
  correct: 2,
  explanation: "NCERT states: 'Cytochrome c is a small protein attached to the outer surface of the inner membrane and acts as a mobile carrier for transfer of electrons between complex III and IV.' It is NOT integral or matrix-located."
},
{
  id: 211,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Complex IV (Cytochrome c oxidase complex) contains:",
  options: [
    "Cytochromes b and c₁ with iron centres",
    "FMN and iron-sulphur clusters",
    "Cytochromes a and a₃, and two copper centres",
    "FAD and iron-sulphur clusters"
  ],
  correct: 2,
  explanation: "NCERT states: 'Complex IV refers to cytochrome c oxidase complex containing cytochromes a and a₃, and two copper centres.' Cytochromes b and c₁ are in Complex III. FMN is in Complex I. FAD is in Complex II."
},
{
  id: 212,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Match the following ETS complexes with their names:<br>Column I &emsp;&emsp;&emsp; Column II<br>(i) Complex I &emsp; (P) Cytochrome c oxidase<br>(ii) Complex II &emsp;(Q) NADH dehydrogenase<br>(iii) Complex III &emsp;(R) Succinate dehydrogenase<br>(iv) Complex IV &emsp;(S) Cytochrome bc₁<br><br>Select the correct match:",
  options: [
    "i-Q, ii-R, iii-P, iv-S",
    "i-R, ii-Q, iii-S, iv-P",
    "i-Q, ii-R, iii-S, iv-P",
    "i-P, ii-S, iii-R, iv-Q"
  ],
  correct: 2,
  explanation: "Complex I = NADH dehydrogenase (Q); Complex II = Succinate dehydrogenase (R); Complex III = Cytochrome bc₁ (S); Complex IV = Cytochrome c oxidase (P). Option A is a trap — it swaps Complex III and IV names."
},
{
  id: 213,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Oxidation of one molecule of NADH through the ETS gives rise to:",
  options: [
    "2 molecules of ATP",
    "3 molecules of ATP",
    "1 molecule of ATP",
    "4 molecules of ATP"
  ],
  correct: 1,
  explanation: "NCERT states: 'Oxidation of one molecule of NADH gives rise to 3 molecules of ATP.' FADH₂ gives 2 ATP. The difference is because FADH₂ enters at Complex II, bypassing Complex I and one proton-pumping site."
},
{
  id: 214,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Oxidation of one molecule of FADH₂ through the ETS produces:",
  options: [
    "3 molecules of ATP",
    "1 molecule of ATP",
    "2 molecules of ATP",
    "4 molecules of ATP"
  ],
  correct: 2,
  explanation: "NCERT states: 'one molecule of FADH₂ produces 2 molecules of ATP.' FADH₂ enters ETS at Complex II (not Complex I), so fewer protons are pumped across the membrane, resulting in fewer ATP compared to NADH (3 ATP)."
},
{
  id: 215,
  topic: "ETS and Oxidative Phosphorylation",
  q: "<b>Assertion (A):</b> FADH₂ produces fewer ATP (2) compared to NADH (3).<br><b>Reason (R):</b> FADH₂ donates electrons to Complex II, bypassing Complex I, while NADH donates electrons to Complex I.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. NADH enters at Complex I (3 proton pumping sites: I, III, IV) while FADH₂ enters at Complex II (only 2 proton pumping sites: III, IV), resulting in fewer protons pumped and fewer ATP. R correctly explains why FADH₂ yields less ATP."
},
{
  id: 216,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Although aerobic respiration requires oxygen, its role is limited to:",
  options: [
    "The TCA cycle in the mitochondrial matrix",
    "Glycolysis in the cytoplasm",
    "The terminal stage of the electron transport chain",
    "The link reaction between glycolysis and TCA"
  ],
  correct: 2,
  explanation: "NCERT states: 'the role of oxygen is limited to the terminal stage of the process.' O₂ is the final electron/hydrogen acceptor at Complex IV. It does not participate in glycolysis, TCA cycle, or the link reaction."
},
{
  id: 217,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Oxygen acts as the:",
  options: [
    "Initial electron donor in ETS",
    "Coenzyme for ATP synthase",
    "Final hydrogen acceptor in ETS",
    "Catalyst for Complex I"
  ],
  correct: 2,
  explanation: "NCERT states: 'Oxygen acts as the final hydrogen acceptor.' At Complex IV, electrons combine with H⁺ and O₂ to form H₂O. Without O₂, the entire ETS would halt as there would be no terminal acceptor to remove electrons."
},
{
  id: 218,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The presence of oxygen is vital in aerobic respiration because:",
  options: [
    "It directly participates in the TCA cycle reactions",
    "It drives the whole process by removing hydrogen from the system",
    "It is needed for glycolysis to proceed",
    "It converts NADH directly to ATP"
  ],
  correct: 1,
  explanation: "NCERT states: 'the presence of oxygen is vital, since it drives the whole process by removing hydrogen from the system.' By accepting electrons and H⁺ at the end of ETS, O₂ allows the chain to continue functioning and NADH/FADH₂ to be reoxidised."
},
{
  id: 219,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The process of ATP synthesis coupled to electron transport is called oxidative phosphorylation because:",
  options: [
    "Light energy is utilised to produce proton gradient",
    "The energy of oxidation-reduction is utilised for phosphorylation",
    "Oxygen directly phosphorylates ADP to ATP",
    "Substrate-level phosphate transfer occurs"
  ],
  correct: 1,
  explanation: "NCERT states: 'in respiration it is the energy of oxidation-reduction utilised for the same process. It is for this reason that the process is called oxidative phosphorylation.' In contrast, photophosphorylation uses light energy for the proton gradient."
},
{
  id: 220,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Which of the following correctly distinguishes oxidative phosphorylation from photophosphorylation?",
  options: [
    "Oxidative phosphorylation uses light energy; photophosphorylation uses oxidation-reduction energy",
    "Both use light energy for proton gradient production",
    "Oxidative phosphorylation uses energy of oxidation-reduction; photophosphorylation uses light energy",
    "Both use oxidation-reduction energy"
  ],
  correct: 2,
  explanation: "NCERT states: 'Unlike photophosphorylation where it is the light energy that is utilised for the production of proton gradient, in respiration it is the energy of oxidation-reduction utilised for the same process.' Option A reverses the two — a common trap."
},
{
  id: 221,
  topic: "ETS and Oxidative Phosphorylation",
  q: "ATP synthase (Complex V) consists of two major components:",
  options: [
    "F₁ and F₂",
    "F₀ and F₂",
    "F₁ and F₀",
    "Fa and Fb"
  ],
  correct: 2,
  explanation: "NCERT states: 'This complex consists of two major components, F₁ and F₀.' F₁ is the headpiece (peripheral) and F₀ is the membrane-embedded portion (integral). Students should remember the subscript is F₀ (letter 'O' for oligomycin sensitivity), not F-zero."
},
{
  id: 222,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The F₁ headpiece of ATP synthase is:",
  options: [
    "An integral membrane protein complex forming a proton channel",
    "A peripheral membrane protein complex containing the site for ATP synthesis",
    "A mobile electron carrier between Complex III and IV",
    "An enzyme that directly reduces O₂ to H₂O"
  ],
  correct: 1,
  explanation: "NCERT states: 'The F₁ headpiece is a peripheral membrane protein complex and contains the site for synthesis of ATP from ADP and inorganic phosphate.' F₀ (not F₁) is the integral membrane protein forming the proton channel."
},
{
  id: 223,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The F₀ component of ATP synthase is:",
  options: [
    "A peripheral membrane protein with catalytic activity",
    "A small mobile carrier protein",
    "An integral membrane protein complex that forms the channel through which protons cross the inner membrane",
    "A matrix-located enzyme"
  ],
  correct: 2,
  explanation: "NCERT states: 'F₀ is an integral membrane protein complex that forms the channel through which protons cross the inner membrane.' F₁ is peripheral (catalytic), F₀ is integral (channel). This distinction is heavily tested in NEET."
},
{
  id: 224,
  topic: "ETS and Oxidative Phosphorylation",
  q: "<b>Assertion (A):</b> F₁ is a peripheral membrane protein complex of ATP synthase.<br><b>Reason (R):</b> F₀ is an integral membrane protein complex forming a proton channel.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both A and R are true — both are directly from NCERT. However, R does not explain WHY F₁ is peripheral. They describe two separate structural features of two different components of ATP synthase. F₁ being peripheral is due to its position on the matrix side, not because F₀ forms a channel."
},
{
  id: 225,
  topic: "ETS and Oxidative Phosphorylation",
  q: "For each ATP produced by ATP synthase, how many protons (H⁺) pass through F₀ from the intermembrane space to the matrix?",
  options: [
    "2H⁺",
    "3H⁺",
    "4H⁺",
    "6H⁺"
  ],
  correct: 2,
  explanation: "NCERT states: 'For each ATP produced, 4H⁺ pass through F₀ from the intermembrane space to the matrix down the electrochemical proton gradient.' This specific number (4H⁺ per ATP) is frequently asked in NEET."
},
{
  id: 226,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The direction of proton flow through F₀ of ATP synthase during ATP synthesis is:",
  options: [
    "From matrix to intermembrane space",
    "From intermembrane space to matrix",
    "From cytoplasm to intermembrane space",
    "From matrix to cytoplasm"
  ],
  correct: 1,
  explanation: "NCERT states: 'protons cross the inner membrane... 4H⁺ pass through F₀ from the intermembrane space to the matrix.' Protons flow DOWN their electrochemical gradient (high concentration in intermembrane space → low in matrix). The reverse direction is wrong."
},
{
  id: 227,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Consider the following statements about the ETS:<br>(I) ETS is located on the inner mitochondrial membrane<br>(II) NADH is oxidised by Complex II<br>(III) FADH₂ donates electrons to Complex II<br>(IV) Cytochrome c transfers electrons between Complex III and IV<br>Which of the above are correct?",
  options: [
    "I, II and III",
    "I, III and IV",
    "I, II, III and IV",
    "II and IV only"
  ],
  correct: 1,
  explanation: "Statement II is WRONG — NADH is oxidised by Complex I (NADH dehydrogenase), NOT Complex II. Complex II handles FADH₂ from succinate oxidation. Statements I, III and IV are directly from NCERT."
},
{
  id: 228,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The correct sequence of electron flow in ETS is:",
  options: [
    "NADH → Complex I → Ubiquinone → Complex III → Cytochrome c → Complex IV → O₂",
    "NADH → Complex II → Ubiquinone → Complex I → Cytochrome c → Complex IV → O₂",
    "NADH → Complex I → Cytochrome c → Ubiquinone → Complex III → Complex IV → O₂",
    "NADH → Complex III → Ubiquinone → Complex I → Cytochrome c → Complex IV → O₂"
  ],
  correct: 0,
  explanation: "NCERT flow: NADH → Complex I → Ubiquinone → Complex III → Cytochrome c → Complex IV → O₂. Options B, C and D scramble the sequence. A critical point: ubiquinone comes BEFORE Complex III, and cytochrome c comes AFTER Complex III."
},
{
  id: 229,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Which of the following are mobile electron carriers in the ETS?",
  options: [
    "Complex I and Complex III",
    "Ubiquinone and Cytochrome c",
    "Complex II and Complex IV",
    "F₁ and F₀"
  ],
  correct: 1,
  explanation: "Ubiquinone is a mobile carrier within the inner membrane (shuttles electrons from Complex I/II to Complex III). Cytochrome c is a mobile carrier on the outer surface of the inner membrane (shuttles electrons from Complex III to IV). Complexes I-IV are fixed; F₁/F₀ form ATP synthase."
},
{
  id: 230,
  topic: "ETS and Oxidative Phosphorylation",
  q: "<b>Assertion (A):</b> The number of ATP molecules synthesised depends on the nature of the electron donor.<br><b>Reason (R):</b> NADH enters ETS at Complex I while FADH₂ enters at Complex II, resulting in different ATP yields.",
  options: [
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false"
  ],
  correct: 1,
  explanation: "Both are true. NCERT states: 'The number of ATP molecules synthesised depends on the nature of the electron donor.' Since NADH enters at Complex I (3 ATP) and FADH₂ at Complex II (2 ATP), the donor determines ATP yield. R correctly explains A."
},
{
  id: 231,
  topic: "ETS and Oxidative Phosphorylation",
  q: "The passage of protons through F₀ is coupled to:",
  options: [
    "Electron transfer from NADH to O₂",
    "The catalytic site of the F₁ component for ATP production",
    "Transport of pyruvate into mitochondria",
    "Reduction of NAD⁺ to NADH"
  ],
  correct: 1,
  explanation: "NCERT states: 'The passage of protons through the channel is coupled to the catalytic site of the F₁ component for the production of ATP.' The proton flow through F₀ drives conformational changes in F₁ that catalyse ATP synthesis."
},
{
  id: 232,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Which of the following correctly describes the chemiosmotic hypothesis in mitochondria?",
  options: [
    "ATP is synthesised by direct phosphate transfer from substrates",
    "Light energy creates a proton gradient for ATP synthesis",
    "Energy released during electron transport creates a proton gradient across the inner membrane, which drives ATP synthesis through ATP synthase",
    "Protons flow from matrix to intermembrane space through F₀ to produce ATP"
  ],
  correct: 2,
  explanation: "The chemiosmotic hypothesis (Mitchell) explains that ETS pumps protons from matrix to intermembrane space, creating an electrochemical gradient. Protons flow back through F₀ → F₁ (intermembrane space to matrix), driving ATP synthesis. Option D reverses the direction."
},
{
  id: 233,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Consider the following statements:<br>(I) Complex V is also called ATP synthase<br>(II) ATP synthase is located on the outer mitochondrial membrane<br>(III) F₁ contains the catalytic site for ATP synthesis<br>(IV) F₀ forms a channel for proton passage<br>Which statements are correct?",
  options: [
    "I, II, III and IV",
    "I, II and III only",
    "I, III and IV only",
    "II and IV only"
  ],
  correct: 2,
  explanation: "Statement II is WRONG — ATP synthase is located on the INNER mitochondrial membrane, not the outer membrane. Statements I, III and IV are directly from NCERT. This location trap is very commonly set in NEET exams."
},
{
  id: 234,
  topic: "ETS and Oxidative Phosphorylation",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) F₁ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (P) Integral membrane protein<br>(ii) F₀ &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (Q) Peripheral membrane protein<br>(iii) Cytochrome c &emsp;&emsp; (R) Mobile carrier between Complex III and IV<br>(iv) Ubiquinone &emsp;&emsp;&emsp; (S) Mobile carrier within inner membrane<br><br>Select the correct match:",
  options: [
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-P, iii-S, iv-R",
    "i-Q, ii-P, iii-R, iv-S",
    "i-R, ii-S, iii-Q, iv-P"
  ],
  correct: 2,
  explanation: "F₁ = Peripheral membrane protein (Q); F₀ = Integral membrane protein forming proton channel (P); Cytochrome c = Mobile carrier between Complex III and IV (R); Ubiquinone = Mobile carrier within the inner membrane (S). Option A reverses F₁ and F₀ — a classic trap."
},
{
  id: 235,
  topic: "ETS and Oxidative Phosphorylation",
  q: "When electrons pass through the ETS, they ultimately combine with:",
  options: [
    "CO₂ to form carbonic acid",
    "NAD⁺ to regenerate NADH",
    "Molecular O₂ resulting in the formation of H₂O",
    "ADP to form ATP"
  ],
  correct: 2,
  explanation: "NCERT states: 'the electrons are passed on to O₂ resulting in the formation of H₂O.' At Complex IV, electrons combine with H⁺ and O₂ → H₂O. This is why aerobic respiration requires oxygen as the terminal electron acceptor."
},
{
  id: 236,
  topic: "ETS and Oxidative Phosphorylation",
  q: "How many of the following statements are correct?<br>(I) Ubiquinone is located within the inner membrane<br>(II) Cytochrome c is attached to the outer surface of the inner membrane<br>(III) Complex IV contains two copper centres<br>(IV) FADH₂ donates electrons to Complex I<br>(V) 4H⁺ pass through F₀ per ATP produced",
  options: [
    "Five",
    "Four",
    "Three",
    "Two"
  ],
  correct: 1,
  explanation: "Statement IV is WRONG — FADH₂ donates electrons to Complex II (succinate dehydrogenase), NOT Complex I. Statements I, II, III and V are all correct (four statements). FADH₂ entry point is one of the most frequently tested NEET traps."
},
{
  id: 237,
  topic: "ETS and Oxidative Phosphorylation",
  q: "<b>Assertion (A):</b> Oxygen drives the whole process of aerobic respiration.<br><b>Reason (R):</b> Oxygen removes hydrogen from the system by acting as the final hydrogen acceptor, forming water.",
  options: [
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "NCERT states: 'the presence of oxygen is vital, since it drives the whole process by removing hydrogen from the system. Oxygen acts as the final hydrogen acceptor.' Both A and R are true, and R correctly explains HOW oxygen drives the entire respiratory process."
},
{
  id: 238,
  topic: "ETS and Oxidative Phosphorylation",
  q: "A student claims that FADH₂ produces 3 ATP per molecule, same as NADH, because both enter the ETS. This claim is:",
  options: [
    "Correct, because both are oxidised in ETS",
    "Correct, because both donate 2 electrons",
    "Incorrect, because FADH₂ enters at Complex II bypassing Complex I, thus producing only 2 ATP",
    "Incorrect, because FADH₂ is not oxidised in ETS at all"
  ],
  correct: 2,
  explanation: "The claim is incorrect. While both NADH and FADH₂ donate electrons to ETS, FADH₂ enters at Complex II (skipping Complex I), resulting in fewer protons being pumped and only 2 ATP per molecule (vs 3 for NADH). FADH₂ IS oxidised in ETS, so option D is wrong."
},
{
  id: 239,
  topic: "Respiratory Balance Sheet",
  q: "The theoretical net gain of ATP during aerobic respiration of one molecule of glucose is:",
  options: [
    "36 ATP",
    "40 ATP",
    "38 ATP",
    "34 ATP"
  ],
  correct: 2,
  explanation: "NCERT states: 'there can be a net gain of 38 ATP molecules during aerobic respiration of one molecule of glucose.' This is a theoretical figure based on certain assumptions. 36 ATP is sometimes cited in other references but NCERT clearly states 38."
},
{
  id: 240,
  topic: "Respiratory Balance Sheet",
  q: "The calculation of 38 ATP per glucose molecule is a theoretical exercise based on certain assumptions. Which of the following is <b>NOT</b> one of those assumptions?",
  options: [
    "There is a sequential, orderly pathway functioning",
    "NADH from glycolysis is transferred into mitochondria for oxidative phosphorylation",
    "Intermediates are freely withdrawn for synthesis of other compounds",
    "Only glucose is being respired with no alternative substrates entering"
  ],
  correct: 2,
  explanation: "NCERT lists the assumption as 'None of the intermediates in the pathway are utilised to synthesise any other compound.' Option C states the OPPOSITE — that intermediates ARE freely withdrawn. This reversal is a classic NEET trap in statement-based questions."
},
{
  id: 241,
  topic: "Respiratory Balance Sheet",
  q: "Consider the following assumptions for the respiratory balance sheet calculation:<br>(I) Sequential, orderly pathway functioning<br>(II) NADH from glycolysis transferred into mitochondria<br>(III) All intermediates freely used for other biosynthesis<br>(IV) Only glucose is being respired<br>Which of the above are correct assumptions as per NCERT?",
  options: [
    "I, II, III and IV",
    "I, II and IV only",
    "I and IV only",
    "II and III only"
  ],
  correct: 1,
  explanation: "Statement III is WRONG — the assumption is that NONE of the intermediates are utilised for other compound synthesis (opposite of III). Statements I, II and IV are the correct NCERT assumptions. This is a subtle reversal trap."
},
{
  id: 242,
  topic: "Respiratory Balance Sheet",
  q: "<b>Assertion (A):</b> The net gain of 38 ATP per glucose during aerobic respiration is only a theoretical value.<br><b>Reason (R):</b> In living systems, all pathways work simultaneously, substrates enter and are withdrawn as needed, and enzymatic rates are controlled by multiple means.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both statements are directly from NCERT. The 38 ATP figure is theoretical because the assumptions (sequential pathways, no substrate withdrawal, etc.) are not valid in real living systems. R correctly explains WHY the figure is only theoretical."
},
{
  id: 243,
  topic: "Respiratory Balance Sheet",
  q: "Which of the following is <b>INCORRECT</b> about the assumptions made for calculating ATP yield from glucose?",
  options: [
    "Pathways function sequentially — glycolysis, TCA and ETS follow one after another",
    "NADH from glycolysis is transferred into mitochondria",
    "Alternative substrates freely enter at any intermediary stage",
    "No intermediates are utilised to synthesise other compounds"
  ],
  correct: 2,
  explanation: "The assumption is that ONLY glucose is being respired and NO other alternative substrates are entering the pathway. Option C states the opposite — that alternative substrates freely enter. This contradicts the NCERT assumption."
},
{
  id: 244,
  topic: "Respiratory Balance Sheet",
  q: "Fermentation accounts for:",
  options: [
    "Complete breakdown of glucose to CO₂ and H₂O",
    "Partial breakdown of glucose",
    "Complete oxidation of pyruvate to CO₂",
    "Oxidative phosphorylation of NADH"
  ],
  correct: 1,
  explanation: "NCERT states: 'Fermentation accounts for only a partial breakdown of glucose whereas in aerobic respiration it is completely degraded to CO₂ and H₂O.' Fermentation ends at ethanol/lactic acid — glucose is not fully oxidised."
},
{
  id: 245,
  topic: "Respiratory Balance Sheet",
  q: "In fermentation, the net gain of ATP for each molecule of glucose degraded to pyruvic acid is:",
  options: [
    "4 molecules of ATP",
    "38 molecules of ATP",
    "2 molecules of ATP",
    "6 molecules of ATP"
  ],
  correct: 2,
  explanation: "NCERT states: 'In fermentation there is a net gain of only two molecules of ATP for each molecule of glucose degraded to pyruvic acid.' This comes from glycolysis alone (4 gross − 2 consumed = 2 net). No additional ATP is produced during fermentation steps."
},
{
  id: 246,
  topic: "Respiratory Balance Sheet",
  q: "Consider the following comparison between fermentation and aerobic respiration:<br>(I) Fermentation — partial breakdown; Aerobic — complete degradation<br>(II) Fermentation — net 2 ATP; Aerobic — 38 ATP<br>(III) NADH oxidised vigorously in fermentation; slowly in aerobic respiration<br>(IV) Fermentation is anaerobic; aerobic respiration requires O₂<br>Which statements are correct?",
  options: [
    "I, II, III and IV",
    "I and II only",
    "I, II and IV only",
    "I, II and III only"
  ],
  correct: 2,
  explanation: "Statement III is WRONG — NCERT states 'NADH is oxidised to NAD⁺ rather SLOWLY in fermentation, however the reaction is very VIGOROUS in case of aerobic respiration.' Option III REVERSES this. Statements I, II and IV are correct."
},
{
  id: 247,
  topic: "Respiratory Balance Sheet",
  q: "<b>Assertion (A):</b> NADH is oxidised to NAD⁺ rather slowly in fermentation.<br><b>Reason (R):</b> Fermentation lacks the electron transport system which vigorously oxidises NADH in aerobic respiration.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "A is true — NCERT states NADH oxidation is slow in fermentation. R is true — fermentation relies on pyruvate reduction to regenerate NAD⁺ (slow), whereas aerobic respiration uses ETS which vigorously oxidises NADH. R correctly explains why A is true."
},
{
  id: 248,
  topic: "Respiratory Balance Sheet",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Fermentation &emsp;&emsp;&emsp; (P) 38 ATP per glucose<br>(ii) Aerobic respiration &emsp;(Q) 2 ATP per glucose<br>(iii) Fermentation &emsp;&emsp;&emsp; (R) Complete degradation to CO₂ and H₂O<br>(iv) Aerobic respiration &emsp;(S) Partial breakdown of glucose<br><br>Select the correct match:",
  options: [
    "i-Q, ii-P, iii-S, iv-R",
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-R, iii-S, iv-P",
    "i-S, ii-R, iii-Q, iv-P"
  ],
  correct: 0,
  explanation: "Fermentation → 2 ATP (Q) and partial breakdown (S). Aerobic respiration → 38 ATP (P) and complete degradation to CO₂ + H₂O (R). Option B completely reverses fermentation and aerobic respiration values."
},
{
  id: 249,
  topic: "Respiratory Balance Sheet",
  q: "In the context of the respiratory balance sheet, which statement best reflects reality in a living system?",
  options: [
    "All pathways work sequentially, one after another",
    "No intermediates are ever withdrawn from the pathway",
    "All pathways work simultaneously, substrates enter and are withdrawn as and when necessary",
    "Only glucose is ever used as a respiratory substrate"
  ],
  correct: 2,
  explanation: "NCERT states: 'all pathways work simultaneously and do not take place one after another; substrates enter the pathways and are withdrawn from it as and when necessary.' This is the reality, unlike the sequential assumption used for theoretical calculation."
},
{
  id: 250,
  topic: "Respiratory Balance Sheet",
  q: "The total number of NADH molecules produced from one glucose molecule during glycolysis, link reaction and TCA cycle (for 38 ATP calculation) is:",
  options: [
    "8",
    "10",
    "12",
    "6"
  ],
  correct: 1,
  explanation: "Glycolysis: 2 NADH. Link reaction: 2 NADH. TCA cycle (×2 turns): 6 NADH. Total = 2 + 2 + 6 = 10 NADH. At 3 ATP per NADH = 30 ATP from NADH alone. Plus 2 FADH₂ × 2 = 4 ATP, plus 4 substrate-level ATP = 38 ATP total."
},
{
  id: 251,
  topic: "Respiratory Balance Sheet",
  q: "Calculate the total ATP yield from one glucose molecule:<br>10 NADH × 3 ATP = 30 ATP<br>2 FADH₂ × 2 ATP = 4 ATP<br>4 ATP (substrate level phosphorylation)<br>Total = ?",
  options: [
    "36 ATP",
    "34 ATP",
    "38 ATP",
    "40 ATP"
  ],
  correct: 2,
  explanation: "30 (from NADH) + 4 (from FADH₂) + 4 (substrate level: 2 from glycolysis + 2 from TCA) = 38 ATP. This matches the NCERT figure of 38 ATP net gain per glucose molecule during aerobic respiration."
},
{
  id: 252,
  topic: "Respiratory Balance Sheet",
  q: "Which of the following is the key assumption that makes the 38 ATP count possible (rather than a lower number)?",
  options: [
    "That pyruvate is converted to lactic acid",
    "That NADH synthesised in glycolysis is transferred into the mitochondria and undergoes oxidative phosphorylation",
    "That fermentation occurs alongside aerobic respiration",
    "That O₂ is not required at any stage"
  ],
  correct: 1,
  explanation: "NCERT specifically lists: 'The NADH synthesised in glycolysis is transferred into the mitochondria and undergoes oxidative phosphorylation.' If glycolytic NADH is not transferred, those 2 NADH × 3 ATP = 6 ATP would be lost, reducing the total. This is a critical assumption."
},
{
  id: 253,
  topic: "Amphibolic Pathway",
  q: "The favoured substrate for respiration is:",
  options: [
    "Fatty acids",
    "Amino acids",
    "Glucose",
    "Glycerol"
  ],
  correct: 2,
  explanation: "NCERT states: 'Glucose is the favoured substrate for respiration. All carbohydrates are usually first converted into glucose before they are used for respiration.' While other substrates can be respired, glucose is the preferred one."
},
{
  id: 254,
  topic: "Amphibolic Pathway",
  q: "When fats are used as respiratory substrates, they are first broken down into:",
  options: [
    "Amino acids and glycerol",
    "Glucose and fructose",
    "Glycerol and fatty acids",
    "Pyruvate and acetyl CoA"
  ],
  correct: 2,
  explanation: "NCERT states: 'Fats would need to be broken down into glycerol and fatty acids first.' Glycerol enters as PGAL and fatty acids are degraded to acetyl CoA. Fats are NOT directly converted to glucose or amino acids."
},
{
  id: 255,
  topic: "Amphibolic Pathway",
  q: "Fatty acids, when used as respiratory substrates, enter the respiratory pathway as:",
  options: [
    "Glucose-6-phosphate",
    "PGAL (glyceraldehyde-3-phosphate)",
    "Pyruvic acid",
    "Acetyl CoA"
  ],
  correct: 3,
  explanation: "NCERT states: 'If fatty acids were to be respired they would first be degraded to acetyl CoA and enter the pathway.' They enter at the Acetyl CoA stage, NOT at glucose or PGAL (that is where glycerol enters). This is a very commonly tested entry point question."
},
{
  id: 256,
  topic: "Amphibolic Pathway",
  q: "Glycerol, when used as a respiratory substrate, enters the respiratory pathway after being converted to:",
  options: [
    "Acetyl CoA",
    "Pyruvic acid",
    "PGAL (glyceraldehyde-3-phosphate)",
    "OAA"
  ],
  correct: 2,
  explanation: "NCERT states: 'Glycerol would enter the pathway after being converted to PGAL.' PGAL is a glycolytic intermediate (3C triose phosphate). Students commonly confuse glycerol entry (PGAL) with fatty acid entry (Acetyl CoA)."
},
{
  id: 257,
  topic: "Amphibolic Pathway",
  q: "Proteins used as respiratory substrates are first degraded by proteases to amino acids, which after deamination enter the respiratory pathway at:",
  options: [
    "Only at the glucose stage",
    "Some stage within the Krebs' cycle, or as pyruvate, or as acetyl CoA",
    "Only as PGAL in glycolysis",
    "Only at the ETS stage"
  ],
  correct: 1,
  explanation: "NCERT states: 'individual amino acids (after deamination) depending on their structure would enter the pathway at some stage within the Krebs' cycle or even as pyruvate or acetyl CoA.' The entry point depends on the specific amino acid structure."
},
{
  id: 258,
  topic: "Amphibolic Pathway",
  q: "Match the following substrates with their entry points in the respiratory pathway:<br>Column I &emsp;&emsp;&emsp;&emsp; Column II<br>(i) Fatty acids &emsp;&emsp; (P) PGAL<br>(ii) Glycerol &emsp;&emsp;&emsp; (Q) Acetyl CoA<br>(iii) Amino acids &emsp; (R) Krebs' cycle / Pyruvate / Acetyl CoA<br>(iv) Carbohydrates &emsp;(S) Glucose<br><br>Select the correct match:",
  options: [
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-Q, ii-R, iii-P, iv-S",
    "i-R, ii-P, iii-Q, iv-S"
  ],
  correct: 1,
  explanation: "Fatty acids → Acetyl CoA (Q); Glycerol → PGAL (P); Amino acids → Krebs/Pyruvate/Acetyl CoA depending on structure (R); Carbohydrates → Glucose (S). Option A reverses fatty acid and glycerol entry points — the most common NEET error."
},
{
  id: 259,
  topic: "Amphibolic Pathway",
  q: "The respiratory pathway has traditionally been considered as:",
  options: [
    "An anabolic pathway",
    "An amphibolic pathway",
    "A catabolic pathway",
    "A photosynthetic pathway"
  ],
  correct: 2,
  explanation: "NCERT states: 'Since respiration involves breakdown of substrates, the respiratory process has traditionally been considered a catabolic process.' However, NCERT goes on to argue it should be considered amphibolic. The question asks the TRADITIONAL view."
},
{
  id: 260,
  topic: "Amphibolic Pathway",
  q: "The respiratory pathway is better described as an amphibolic pathway because:",
  options: [
    "It is involved only in catabolism (breakdown)",
    "It is involved only in anabolism (synthesis)",
    "It is involved in both anabolism and catabolism",
    "It functions only when glucose is the substrate"
  ],
  correct: 2,
  explanation: "NCERT states: 'Because the respiratory pathway is involved in both anabolism and catabolism, it would hence be better to consider the respiratory pathway as an amphibolic pathway rather than as a catabolic one.' Intermediates are used for both breakdown and synthesis."
},
{
  id: 261,
  topic: "Amphibolic Pathway",
  q: "<b>Assertion (A):</b> The respiratory pathway is called amphibolic rather than just catabolic.<br><b>Reason (R):</b> Respiratory intermediates are used both during breakdown (catabolism) and synthesis (anabolism) of biomolecules like fatty acids and proteins.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true and directly from NCERT. The pathway is amphibolic because the same intermediates (e.g., acetyl CoA) serve both catabolic (fat breakdown → acetyl CoA) and anabolic (acetyl CoA → fat synthesis) functions. R correctly explains A."
},
{
  id: 262,
  topic: "Amphibolic Pathway",
  q: "When the organism needs to synthesise fatty acids, which respiratory intermediate is withdrawn from the pathway?",
  options: [
    "Pyruvic acid",
    "PGAL",
    "OAA",
    "Acetyl CoA"
  ],
  correct: 3,
  explanation: "NCERT states: 'when the organism needs to synthesise fatty acids, acetyl CoA would be withdrawn from the respiratory pathway for it.' Acetyl CoA is both the entry point for fat catabolism and the withdrawal point for fat anabolism."
},
{
  id: 263,
  topic: "Amphibolic Pathway",
  q: "Consider the following statements:<br>(I) Fatty acids are broken down to acetyl CoA during catabolism<br>(II) Acetyl CoA is withdrawn for fatty acid synthesis during anabolism<br>(III) The respiratory pathway functions only as a catabolic pathway<br>(IV) Respiratory intermediates link both breakdown and synthesis of proteins<br>Which of the above are correct?",
  options: [
    "I, II, III and IV",
    "I, II and IV only",
    "I and II only",
    "III and IV only"
  ],
  correct: 1,
  explanation: "Statement III is WRONG — NCERT argues that the respiratory pathway is AMPHIBOLIC (both catabolic and anabolic), not just catabolic. Statements I, II and IV are all correct and form the basis for calling it amphibolic."
},
{
  id: 264,
  topic: "Amphibolic Pathway",
  q: "The term 'deamination' refers to:",
  options: [
    "Addition of an amino group to a molecule",
    "Removal of an amino group from amino acids",
    "Conversion of fats to fatty acids",
    "Breakdown of glucose to pyruvate"
  ],
  correct: 1,
  explanation: "NCERT mentions that amino acids undergo deamination before entering respiratory pathway. Deamination is the removal of the amino group (-NH₂) from amino acids, allowing the carbon skeleton to enter metabolic pathways. Addition of amino group is called amination/transamination."
},
{
  id: 265,
  topic: "Amphibolic Pathway",
  q: "Which of the following correctly describes the entry of proteins into the respiratory pathway?",
  options: [
    "Proteins directly enter glycolysis as glucose",
    "Proteins are degraded by lipases to amino acids which enter Krebs' cycle",
    "Proteins are degraded by proteases to amino acids, which after deamination enter Krebs' cycle, pyruvate or acetyl CoA",
    "Proteins cannot be used as respiratory substrates"
  ],
  correct: 2,
  explanation: "NCERT states: 'The proteins would be degraded by proteases and the individual amino acids (after deamination) depending on their structure would enter the pathway at some stage within the Krebs' cycle or even as pyruvate or acetyl CoA.' Lipases degrade fats, not proteins."
},
{
  id: 266,
  topic: "Amphibolic Pathway",
  q: "<b>Assertion (A):</b> All carbohydrates are usually first converted into glucose before being used for respiration.<br><b>Reason (R):</b> Glucose is the favoured substrate for respiration.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and directly from NCERT. Because glucose is the preferred/favoured substrate for respiration, all carbohydrates are first converted to glucose. R correctly explains WHY carbohydrates are converted to glucose before respiration."
},
{
  id: 267,
  topic: "Amphibolic Pathway",
  q: "Other substrates (besides glucose) do not enter the respiratory pathway at the first step. This means:",
  options: [
    "They cannot be respired at all",
    "They enter at various intermediate points depending on their nature",
    "They must always be converted to glucose first",
    "They bypass the respiratory pathway entirely"
  ],
  correct: 1,
  explanation: "NCERT states: 'Other substrates can also be respired... but then they do not enter the respiratory pathway at the first step.' Fats enter as glycerol (PGAL) or fatty acids (Acetyl CoA), proteins enter at Krebs cycle/pyruvate/Acetyl CoA — all at different intermediate points."
},
{
  id: 268,
  topic: "Amphibolic Pathway",
  q: "Which of the following is <b>INCORRECT</b> regarding the amphibolic nature of the respiratory pathway?",
  options: [
    "Acetyl CoA is withdrawn for fatty acid synthesis",
    "Respiratory intermediates form the link during protein synthesis and breakdown",
    "The respiratory pathway is involved only in catabolism, not anabolism",
    "Glycerol enters the pathway as PGAL during fat catabolism"
  ],
  correct: 2,
  explanation: "NCERT explicitly argues AGAINST calling respiration purely catabolic: 'it would hence be better to consider the respiratory pathway as an amphibolic pathway rather than as a catabolic one.' Options A, B and D are correct statements from NCERT."
},
{
  id: 269,
  topic: "Amphibolic Pathway",
  q: "From the NCERT figure, the correct entry point of glycerol into the respiratory pathway is at:",
  options: [
    "Acetyl CoA level",
    "Krebs' cycle intermediates",
    "Dihydroxyacetone phosphate / Glyceraldehyde-3-phosphate (PGAL) level",
    "Pyruvic acid level"
  ],
  correct: 2,
  explanation: "From NCERT Figure 12.6, glycerol enters at the triose phosphate level (DHAP/PGAL) in glycolysis. This is because glycerol is a 3-carbon compound that can be phosphorylated and converted to PGAL. Fatty acids (NOT glycerol) enter at acetyl CoA."
},
{
  id: 270,
  topic: "Respiratory Balance Sheet & Amphibolic Pathway",
  q: "Consider the following statements:<br>(I) The 38 ATP figure is a theoretical calculation valid in living systems<br>(II) In living systems, substrates enter and are withdrawn from pathways as needed<br>(III) Respiration is an amphibolic pathway<br>(IV) Fatty acids enter the pathway as PGAL<br>How many of the above statements are correct?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "Statement I is WRONG — 38 ATP is theoretical and NOT really valid in living systems. Statement IV is WRONG — fatty acids enter as Acetyl CoA (glycerol enters as PGAL). Statements II and III are correct. So 2 correct statements."
},
{
  id: 271,
  topic: "Amphibolic Pathway",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Catabolism &emsp;&emsp; (P) Both breakdown and synthesis<br>(ii) Anabolism &emsp;&emsp;&emsp;(Q) Breakdown processes<br>(iii) Amphibolic &emsp;&emsp; (R) Synthesis processes<br>(iv) Proteases &emsp;&emsp;&emsp; (S) Degrade proteins to amino acids<br><br>Select the correct match:",
  options: [
    "i-R, ii-Q, iii-P, iv-S",
    "i-Q, ii-R, iii-P, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-P, ii-R, iii-Q, iv-S"
  ],
  correct: 1,
  explanation: "Catabolism = Breakdown (Q); Anabolism = Synthesis (R); Amphibolic = Both breakdown and synthesis (P); Proteases = Degrade proteins to amino acids (S). Option A reverses catabolism and anabolism — a trap for students who confuse the two terms."
},
{
  id: 272,
  topic: "Respiratory Balance Sheet",
  q: "Which of the following correctly compares NADH oxidation in fermentation vs aerobic respiration?",
  options: [
    "NADH is oxidised vigorously in fermentation and slowly in aerobic respiration",
    "NADH is not oxidised in either process",
    "NADH is oxidised at the same rate in both processes",
    "NADH is oxidised rather slowly in fermentation and very vigorously in aerobic respiration"
  ],
  correct: 3,
  explanation: "NCERT states: 'NADH is oxidised to NAD⁺ rather slowly in fermentation, however the reaction is very vigorous in case of aerobic respiration.' This is because fermentation uses only pyruvate reduction for NAD⁺ regeneration, while aerobic respiration uses the entire ETS."
},
{
  id: 273,
  topic: "Amphibolic Pathway",
  q: "<b>Assertion (A):</b> When fatty acids are used as respiratory substrates, they are degraded to acetyl CoA and enter the Krebs' cycle.<br><b>Reason (R):</b> When the organism needs to synthesise fatty acids, acetyl CoA is withdrawn from the respiratory pathway.",
  options: [
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 1,
  explanation: "Both A and R are true and directly from NCERT. However, R does NOT explain A. A describes fat catabolism (entry into pathway), while R describes fat anabolism (withdrawal from pathway). They are two independent, related facts that together illustrate the amphibolic nature of respiration."
},
{
  id: 274,
  topic: "Respiratory Quotient",
  q: "The respiratory quotient (RQ) is defined as:",
  options: [
    "Volume of O₂ consumed / Volume of CO₂ evolved",
    "Volume of CO₂ evolved / Volume of O₂ consumed",
    "Volume of CO₂ consumed / Volume of O₂ evolved",
    "Volume of O₂ evolved / Volume of CO₂ consumed"
  ],
  correct: 1,
  explanation: "NCERT states: 'The ratio of the volume of CO₂ evolved to the volume of O₂ consumed in respiration is called the respiratory quotient (RQ).' Option A is the most common NEET trap — it reverses the numerator and denominator. Always remember: CO₂ on top, O₂ on bottom."
},
{
  id: 275,
  topic: "Respiratory Quotient",
  q: "The respiratory quotient is also known as:",
  options: [
    "Respiratory coefficient",
    "Respiratory ratio",
    "Respiratory index",
    "Respiratory constant"
  ],
  correct: 1,
  explanation: "NCERT states RQ is 'called the respiratory quotient (RQ) or respiratory ratio.' The other terms (coefficient, index, constant) are not used in NCERT for this concept."
},
{
  id: 276,
  topic: "Respiratory Quotient",
  q: "The respiratory quotient depends upon:",
  options: [
    "The rate of breathing",
    "The amount of water produced",
    "The type of respiratory substrate used during respiration",
    "The temperature of the organism"
  ],
  correct: 2,
  explanation: "NCERT states: 'The respiratory quotient depends upon the type of respiratory substrate used during respiration.' Different substrates (carbohydrates, fats, proteins) have different RQ values because of their different chemical compositions."
},
{
  id: 277,
  topic: "Respiratory Quotient",
  q: "When carbohydrates are used as substrate and are completely oxidised, the RQ will be:",
  options: [
    "0.7",
    "0.9",
    "1.0",
    "More than 1"
  ],
  correct: 2,
  explanation: "NCERT states: 'When carbohydrates are used as substrate and are completely oxidised, the RQ will be 1.' This is because equal amounts of CO₂ and O₂ are evolved and consumed respectively (6CO₂/6O₂ = 1 for glucose)."
},
{
  id: 278,
  topic: "Respiratory Quotient",
  q: "The equation C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy gives an RQ of:",
  options: [
    "0.7",
    "0.9",
    "0.5",
    "1.0"
  ],
  correct: 3,
  explanation: "RQ = Volume of CO₂ evolved / Volume of O₂ consumed = 6CO₂ / 6O₂ = 1.0. This is the standard glucose oxidation equation. Equal volumes of CO₂ are produced and O₂ are consumed, giving RQ = 1."
},
{
  id: 279,
  topic: "Respiratory Quotient",
  q: "When fats are used as respiratory substrates, the RQ is:",
  options: [
    "Equal to 1",
    "Greater than 1",
    "Less than 1",
    "Equal to 0"
  ],
  correct: 2,
  explanation: "NCERT states: 'When fats are used in respiration, the RQ is less than 1.' Fats are highly reduced molecules (hydrogen-rich) and require more O₂ for complete oxidation than the CO₂ they release, making the ratio < 1."
},
{
  id: 280,
  topic: "Respiratory Quotient",
  q: "The RQ value for the fatty acid tripalmitin is:",
  options: [
    "1.0",
    "0.9",
    "0.7",
    "0.5"
  ],
  correct: 2,
  explanation: "NCERT gives the calculation: 2(C₅₁H₉₈O₆) + 145O₂ → 102CO₂ + 98H₂O + Energy. RQ = 102CO₂/145O₂ = 0.7. This specific value (0.7) is a frequently tested numerical fact in NEET."
},
{
  id: 281,
  topic: "Respiratory Quotient",
  q: "When proteins are used as respiratory substrates, the RQ would be about:",
  options: [
    "1.0",
    "0.7",
    "0.5",
    "0.9"
  ],
  correct: 3,
  explanation: "NCERT states: 'When proteins are respiratory substrates the ratio would be about 0.9.' This is an intermediate value between carbohydrates (1.0) and fats (0.7). The order to remember: Carbohydrates (1.0) > Proteins (0.9) > Fats (0.7)."
},
{
  id: 282,
  topic: "Respiratory Quotient",
  q: "<b>Assertion (A):</b> The RQ of fats is less than 1.<br><b>Reason (R):</b> Fats are highly reduced compounds and require more O₂ for oxidation relative to the CO₂ released.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. NCERT states RQ of fats < 1. Fats have a high proportion of hydrogen atoms and fewer oxygen atoms, requiring MORE O₂ for complete oxidation than the CO₂ produced. Thus the denominator (O₂) exceeds the numerator (CO₂), giving RQ < 1. R correctly explains A."
},
{
  id: 283,
  topic: "Respiratory Quotient",
  q: "Arrange the following respiratory substrates in decreasing order of their RQ values:",
  options: [
    "Fats > Proteins > Carbohydrates",
    "Carbohydrates > Proteins > Fats",
    "Proteins > Carbohydrates > Fats",
    "Carbohydrates > Fats > Proteins"
  ],
  correct: 1,
  explanation: "RQ values: Carbohydrates = 1.0, Proteins ≈ 0.9, Fats ≈ 0.7. Decreasing order: Carbohydrates (1.0) > Proteins (0.9) > Fats (0.7). This is a standard comparison tested repeatedly in NEET."
},
{
  id: 284,
  topic: "Respiratory Quotient",
  q: "Consider the following statements:<br>(I) RQ of carbohydrates = 1.0<br>(II) RQ of fats = 0.7<br>(III) RQ of proteins = 0.7<br>(IV) RQ depends on the type of respiratory substrate<br>Which of the above are correct?",
  options: [
    "I, II, III and IV",
    "I, II and IV only",
    "I and IV only",
    "I, III and IV only"
  ],
  correct: 1,
  explanation: "Statement III is WRONG — RQ of proteins is approximately 0.9, NOT 0.7. RQ of 0.7 is for fats (tripalmitin). Students commonly confuse the RQ values of proteins and fats. Statements I, II and IV are correct."
},
{
  id: 285,
  topic: "Respiratory Quotient",
  q: "In living organisms, respiratory substrates are:",
  options: [
    "Always only glucose",
    "Always only fats",
    "Often more than one type",
    "Always pure proteins"
  ],
  correct: 2,
  explanation: "NCERT states: 'in living organisms, respiratory substrates are often more than one.' Organisms use a mixture of carbohydrates, fats and proteins simultaneously. This is why the actual RQ in a living organism is not exactly 1.0, 0.7 or 0.9."
},
{
  id: 286,
  topic: "Respiratory Quotient",
  q: "Which of the following statements is correct as per NCERT?",
  options: [
    "Pure proteins are commonly used as respiratory substrates",
    "Pure fats are the preferred respiratory substrates",
    "Pure proteins or fats are never used as respiratory substrates",
    "Only carbohydrates can serve as respiratory substrates"
  ],
  correct: 2,
  explanation: "NCERT states: 'pure proteins or fats are never used as respiratory substrates.' In reality, organisms use a mixture of substrates. While glucose is the favoured substrate, pure forms of fats or proteins alone are never the sole respiratory substrate."
},
{
  id: 287,
  topic: "Respiratory Quotient",
  q: "<b>Assertion (A):</b> Pure proteins or fats are never used as respiratory substrates in living organisms.<br><b>Reason (R):</b> In living organisms, respiratory substrates are often more than one type.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and from NCERT. Because organisms always use a mixture of substrates (R), pure proteins or fats alone are never the sole respiratory substrate (A). R correctly explains why pure fats/proteins are not used alone."
},
{
  id: 288,
  topic: "Respiratory Quotient",
  q: "For the oxidation of tripalmitin: 2(C₅₁H₉₈O₆) + 145O₂ → 102CO₂ + 98H₂O + Energy. The RQ is calculated as:",
  options: [
    "145/102 = 1.42",
    "102/145 = 0.7",
    "98/145 = 0.67",
    "102/98 = 1.04"
  ],
  correct: 1,
  explanation: "RQ = CO₂ evolved / O₂ consumed = 102/145 = 0.7. Option A reverses the formula (O₂/CO₂). Option C incorrectly uses H₂O in the calculation. Option D uses H₂O instead of O₂. Only CO₂ and O₂ volumes are used in RQ calculation."
},
{
  id: 289,
  topic: "Respiratory Quotient",
  q: "If an organism has an RQ of exactly 1.0, it is most likely respiring:",
  options: [
    "Fats",
    "Proteins",
    "Carbohydrates",
    "A mixture of fats and proteins"
  ],
  correct: 2,
  explanation: "RQ = 1.0 is characteristic of carbohydrate respiration (glucose: 6CO₂/6O₂ = 1). Fats give RQ = 0.7 and proteins give RQ ≈ 0.9. A mixture of fats and proteins would give an RQ between 0.7 and 0.9, not exactly 1.0."
},
{
  id: 290,
  topic: "Respiratory Quotient",
  q: "An RQ value of 0.7 would indicate that the organism is primarily respiring:",
  options: [
    "Carbohydrates",
    "Proteins",
    "Fats",
    "Organic acids"
  ],
  correct: 2,
  explanation: "NCERT gives RQ = 0.7 for fats (tripalmitin calculation). Carbohydrates give RQ = 1.0 and proteins give RQ ≈ 0.9. An RQ of 0.7 specifically indicates fat is the primary respiratory substrate."
},
{
  id: 291,
  topic: "Respiratory Quotient",
  q: "Why is the RQ of carbohydrates equal to 1?",
  options: [
    "Because no O₂ is consumed during carbohydrate oxidation",
    "Because more CO₂ is evolved than O₂ consumed",
    "Because equal amounts of CO₂ are evolved and O₂ are consumed",
    "Because no CO₂ is produced during carbohydrate oxidation"
  ],
  correct: 2,
  explanation: "NCERT states: 'the RQ will be 1, because equal amounts of CO₂ and O₂ are evolved and consumed, respectively.' For glucose: 6 moles of O₂ consumed and 6 moles of CO₂ evolved → ratio = 1. The molecular structure of carbohydrates has a balanced C:H:O ratio."
},
{
  id: 292,
  topic: "Respiratory Quotient",
  q: "Match the following:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Carbohydrates &emsp; (P) RQ = 0.7<br>(ii) Fats &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (Q) RQ = 1.0<br>(iii) Proteins &emsp;&emsp;&emsp;&emsp;(R) RQ ≈ 0.9<br>(iv) Tripalmitin &emsp;&emsp;&emsp;(S) RQ = 0.7<br><br>Select the correct match:",
  options: [
    "i-Q, ii-P, iii-R, iv-S",
    "i-P, ii-Q, iii-R, iv-S",
    "i-Q, ii-R, iii-P, iv-S",
    "i-R, ii-P, iii-Q, iv-S"
  ],
  correct: 0,
  explanation: "Carbohydrates = RQ 1.0 (Q); Fats = RQ 0.7 (P); Proteins = RQ ~0.9 (R); Tripalmitin (a fat) = RQ 0.7 (S). Both fats generally and tripalmitin specifically have RQ = 0.7. Option B reverses carbohydrates and fats — the most common error."
},
{
  id: 293,
  topic: "Respiratory Quotient",
  q: "If the RQ of an organism is between 0.7 and 1.0, it is most likely that:",
  options: [
    "Only carbohydrates are being respired",
    "Only fats are being respired",
    "A mixture of carbohydrates and fats is being respired",
    "No respiration is occurring"
  ],
  correct: 2,
  explanation: "Since carbohydrate RQ = 1.0 and fat RQ = 0.7, an intermediate RQ (between 0.7 and 1.0) indicates a mixture of both is being used. NCERT states 'respiratory substrates are often more than one' in living organisms, making mixed RQ values the norm."
},
{
  id: 294,
  topic: "Respiratory Quotient",
  q: "<b>Assertion (A):</b> RQ value of carbohydrates is higher than that of fats.<br><b>Reason (R):</b> Fats have more hydrogen atoms per molecule relative to oxygen, requiring proportionally more O₂ for complete oxidation.",
  options: [
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false"
  ],
  correct: 2,
  explanation: "A is true (Carb RQ = 1.0 > Fat RQ = 0.7). R is true — fats are hydrogen-rich and oxygen-poor molecules, so they consume more O₂ per CO₂ produced. This increased O₂ consumption lowers the RQ. R correctly explains why fat RQ is lower."
},
{
  id: 295,
  topic: "Respiratory Quotient",
  q: "Which of the following has the highest RQ value?",
  options: [
    "Tripalmitin",
    "Glucose",
    "Proteins",
    "Fats in general"
  ],
  correct: 1,
  explanation: "Glucose (carbohydrate) has RQ = 1.0, which is the highest among the listed options. Proteins have RQ ≈ 0.9. Tripalmitin and fats in general have RQ = 0.7. Order: Glucose (1.0) > Proteins (0.9) > Fats (0.7)."
},
{
  id: 296,
  topic: "Respiratory Quotient",
  q: "Consider the following about RQ:<br>(I) RQ = Volume of CO₂ evolved / Volume of O₂ consumed<br>(II) RQ of glucose = 1.0<br>(III) RQ of tripalmitin = 0.9<br>(IV) RQ depends on the type of respiratory substrate<br>How many of the above statements are correct?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 2,
  explanation: "Statement III is WRONG — RQ of tripalmitin is 0.7, NOT 0.9 (0.9 is for proteins). Statements I, II and IV are correct (three statements). Confusing RQ values of different substrates is the most common trap in this topic."
},
{
  id: 297,
  topic: "Respiratory Quotient",
  q: "A plant tissue is found to have an RQ significantly less than 1. This indicates that the tissue is predominantly using which substrate for respiration?",
  options: [
    "Glucose",
    "Sucrose",
    "Starch",
    "Fats"
  ],
  correct: 3,
  explanation: "RQ significantly less than 1 indicates fat respiration (RQ = 0.7). All carbohydrates (glucose, sucrose, starch) would give RQ = 1.0 since they are all converted to glucose before respiration. Germinating oily seeds like castor typically show RQ < 1."
},
{
  id: 298,
  topic: "Respiratory Quotient",
  q: "In the equation for glucose oxidation, the number of O₂ molecules consumed equals the number of CO₂ molecules evolved. This number is:",
  options: [
    "3",
    "12",
    "6",
    "8"
  ],
  correct: 2,
  explanation: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + Energy. Both O₂ consumed and CO₂ evolved = 6 molecules each. This equality is why the RQ for glucose = 6/6 = 1.0."
},
{
  id: 299,
  topic: "Respiratory Quotient",
  q: "Which of the following is <b>INCORRECT</b> regarding respiratory quotient?",
  options: [
    "RQ of carbohydrates is 1.0",
    "RQ depends on the type of respiratory substrate",
    "RQ of fats is greater than 1",
    "RQ of proteins is approximately 0.9"
  ],
  correct: 2,
  explanation: "NCERT states RQ of fats is LESS than 1 (0.7 for tripalmitin), NOT greater than 1. Options A, B and D are all correct as per NCERT. Stating that fat RQ > 1 is a major conceptual error."
},
{
  id: 300,
  topic: "Respiratory Quotient",
  q: "The molecular formula of tripalmitin is C₅₁H₉₈O₆. From this formula, we can infer that tripalmitin:",
  options: [
    "Has equal numbers of H and O atoms",
    "Has very few hydrogen atoms relative to carbon",
    "Has a very high proportion of hydrogen atoms relative to oxygen atoms",
    "Has more oxygen atoms than hydrogen atoms"
  ],
  correct: 2,
  explanation: "Tripalmitin (C₅₁H₉₈O₆) has 98 hydrogen atoms but only 6 oxygen atoms — a very high H:O ratio. This means more O₂ is needed during oxidation to combine with the excess hydrogen, which is why fats have RQ < 1."
},
{
  id: 301,
  topic: "Respiratory Quotient",
  q: "<b>Assertion (A):</b> When carbohydrates are used as respiratory substrates, equal amounts of CO₂ and O₂ are evolved and consumed respectively.<br><b>Reason (R):</b> Carbohydrates have a general formula Cₙ(H₂O)ₙ, which already has hydrogen and oxygen in a 2:1 ratio similar to water.",
  options: [
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 1,
  explanation: "Both are true. A is directly from NCERT. R explains WHY: since carbohydrates already contain H and O in the same ratio as water, all the O₂ consumed goes only to oxidise carbon atoms, and each carbon produces one CO₂. Thus CO₂ = O₂ consumed. R correctly explains A."
},
{
  id: 302,
  topic: "Respiratory Quotient",
  q: "A student measured the RQ of germinating castor seeds (which store fats) and found it to be approximately:",
  options: [
    "1.0",
    "0.9",
    "0.7",
    "1.3"
  ],
  correct: 2,
  explanation: "Castor seeds store fats as their primary reserve. Since fats have RQ = 0.7 (as shown by tripalmitin calculation in NCERT), germinating castor seeds would show RQ ≈ 0.7. Germinating wheat/rice seeds (starch-storing) would show RQ ≈ 1.0."
},
{
  id: 303,
  topic: "Respiratory Quotient",
  q: "If an organism's RQ is exactly 0.9, it most likely indicates respiration of:",
  options: [
    "Carbohydrates",
    "Fats",
    "Proteins",
    "Organic acids"
  ],
  correct: 2,
  explanation: "NCERT states: 'When proteins are respiratory substrates the ratio would be about 0.9.' Carbohydrates give 1.0 and fats give 0.7. An RQ of exactly 0.9 points to protein respiration. However, NCERT also notes pure proteins are never used alone in living organisms."
},
{
  id: 304,
  topic: "Respiratory Quotient",
  q: "Consider the following table:<br><br>| Substrate | RQ Value |<br>|---|---|<br>| Carbohydrates | (I) |<br>| Fats | (II) |<br>| Proteins | (III) |<br><br>Select the correct set of RQ values:",
  options: [
    "I = 0.7, II = 0.9, III = 1.0",
    "I = 0.9, II = 0.7, III = 1.0",
    "I = 1.0, II = 0.9, III = 0.7",
    "I = 1.0, II = 0.7, III = 0.9"
  ],
  correct: 3,
  explanation: "NCERT values: Carbohydrates (I) = 1.0; Fats (II) = 0.7; Proteins (III) = 0.9. Option C is a trap — it swaps fat and protein values. The correct order: Carbs (1.0) > Proteins (0.9) > Fats (0.7)."
},
{
  id: 305,
  topic: "Respiratory Quotient",
  q: "Which of the following statements about RQ is correct?<br>(I) RQ can help determine the type of substrate being respired<br>(II) RQ is always exactly 1.0 in all living organisms<br>(III) RQ value changes depending on the respiratory substrate<br>(IV) An RQ of less than 1 indicates fat respiration",
  options: [
    "I, II, III and IV",
    "I and III only",
    "I, III and IV only",
    "II and IV only"
  ],
  correct: 2,
  explanation: "Statement II is WRONG — RQ is NOT always 1.0. It varies with the substrate (1.0 for carbs, 0.7 for fats, 0.9 for proteins). In living organisms, since mixed substrates are used, RQ varies. Statements I, III and IV are correct."
},
{
  id: 306,
  topic: "Respiratory Quotient",
  q: "In the tripalmitin oxidation equation, 145 molecules of O₂ are consumed but only 102 molecules of CO₂ are evolved. This difference exists because:",
  options: [
    "Some CO₂ is reabsorbed by the cell",
    "Additional O₂ is needed to oxidise the large number of hydrogen atoms in the fat molecule to form water",
    "Some O₂ is stored within the mitochondria",
    "CO₂ is converted back to glucose in the cell"
  ],
  correct: 1,
  explanation: "Tripalmitin (C₅₁H₉₈O₆) has 98 hydrogen atoms. These need O₂ to form H₂O (98H₂O produced). The extra O₂ consumed (beyond that needed for CO₂ production) goes to oxidise these abundant hydrogen atoms. This is why more O₂ is consumed than CO₂ released, giving RQ < 1."
},
{
  id: 307,
  topic: "Respiratory Quotient",
  q: "A researcher measures the RQ of a tissue and finds it to be 1.0. She can conclude that:",
  options: [
    "The tissue is not respiring",
    "The tissue is using only fats as substrate",
    "The tissue is likely using carbohydrates as the primary respiratory substrate",
    "The tissue is using only proteins as substrate"
  ],
  correct: 2,
  explanation: "RQ = 1.0 is characteristic of carbohydrate respiration. NCERT states: 'When carbohydrates are used as substrate and are completely oxidised, the RQ will be 1.' However, since living organisms use mixed substrates, 'likely using carbohydrates as the PRIMARY substrate' is the most accurate conclusion."
},
{
  id: 308,
  topic: "Respiratory Quotient",
  q: "<b>Assertion (A):</b> The actual RQ of a living organism is rarely exactly 1.0, 0.9 or 0.7.<br><b>Reason (R):</b> In living organisms, respiratory substrates are often more than one; pure proteins or fats are never used as respiratory substrates.",
  options: [
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. NCERT states organisms use mixed substrates, so the RQ reflects a blend of different substrate RQ values. Since pure substrates are never used alone, the actual RQ falls between the theoretical values. R correctly explains why A is true."
},
{
  id: 309,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Consider the following statements about respiration in plants:<br>(I) Plants have special systems for breathing like animals<br>(II) Stomata and lenticels allow gaseous exchange by diffusion<br>(III) Almost all living cells in a plant have their surfaces exposed to air<br>(IV) Cellular respiration involves breaking of C-C bonds by oxidation<br>Which of the above are correct?",
  options: [
    "I, II, III and IV",
    "II, III and IV only",
    "I and IV only",
    "I, II and III only"
  ],
  correct: 1,
  explanation: "Statement I is FALSE — NCERT clearly states 'Plants unlike animals have no special systems for breathing or gaseous exchange.' Statements II, III and IV are directly from the NCERT summary. This is the most fundamental concept of the chapter."
},
{
  id: 310,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "The correct sequence of events during aerobic respiration of glucose is:",
  options: [
    "Glycolysis → Krebs' cycle → Oxidative decarboxylation → ETS",
    "Glycolysis → Oxidative decarboxylation → Krebs' cycle → ETS",
    "Krebs' cycle → Glycolysis → ETS → Oxidative decarboxylation",
    "ETS → Glycolysis → Krebs' cycle → Oxidative decarboxylation"
  ],
  correct: 1,
  explanation: "The correct sequence is: Glycolysis (cytoplasm) → Oxidative decarboxylation of pyruvate to Acetyl CoA (matrix) → Krebs' cycle (matrix) → ETS (inner membrane). Option A skips the link reaction and places Krebs before oxidative decarboxylation."
},
{
  id: 311,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Match the following stages of respiration with their locations:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Glycolysis &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (P) Inner mitochondrial membrane<br>(ii) Oxidative decarboxylation &emsp;&emsp; (Q) Cytoplasm<br>(iii) Krebs' cycle &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(R) Mitochondrial matrix<br>(iv) ETS &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(S) Mitochondrial matrix<br><br>Select the correct match:",
  options: [
    "i-Q, ii-R, iii-S, iv-P",
    "i-R, ii-Q, iii-P, iv-S",
    "i-Q, ii-P, iii-R, iv-S",
    "i-P, ii-Q, iii-S, iv-R"
  ],
  correct: 0,
  explanation: "Glycolysis → Cytoplasm (Q); Oxidative decarboxylation → Matrix (R); Krebs' cycle → Matrix (S); ETS → Inner mitochondrial membrane (P). Both oxidative decarboxylation and Krebs cycle occur in the matrix, while ETS is on the inner membrane. This is the most important location-mapping question."
},
{
  id: 312,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "The fate of pyruvate produced during glycolysis depends on:",
  options: [
    "The amount of glucose available",
    "The availability of oxygen and the type of organism",
    "The number of mitochondria in the cell",
    "The temperature of the surroundings only"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'The fate of the pyruvate depends on the availability of oxygen and the organism.' Under anaerobic conditions → fermentation; under aerobic conditions → Acetyl CoA → Krebs' cycle. Different organisms handle pyruvate differently."
},
{
  id: 313,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Which of the following is <b>NOT</b> a site where fermentation occurs as per NCERT?",
  options: [
    "Many prokaryotes",
    "Unicellular eukaryotes",
    "Germinating seeds",
    "Mature photosynthesising leaves under normal conditions"
  ],
  correct: 3,
  explanation: "NCERT lists fermentation occurring in: prokaryotes, unicellular eukaryotes, and germinating seeds. Mature photosynthesising leaves under normal conditions carry out aerobic respiration (not fermentation). 'Germinating seeds' is often overlooked by students."
},
{
  id: 314,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "<b>Assertion (A):</b> Fermentation takes place in germinating seeds.<br><b>Reason (R):</b> Germinating seeds may experience anaerobic conditions when O₂ supply is limited.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. NCERT mentions germinating seeds among sites of fermentation. Seeds during early germination may experience O₂ limitation (especially when submerged or deeply buried), creating anaerobic conditions that favour fermentation. R correctly explains A."
},
{
  id: 315,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Consider the complete pathway of aerobic respiration. At which stage(s) is CO₂ released?",
  options: [
    "Glycolysis and ETS",
    "Oxidative decarboxylation of pyruvate and Krebs' cycle",
    "Glycolysis and Krebs' cycle",
    "Only during ETS"
  ],
  correct: 1,
  explanation: "CO₂ is released during: (1) Oxidative decarboxylation of pyruvate to Acetyl CoA, and (2) Krebs' cycle (two decarboxylation steps). CO₂ is NOT released during glycolysis (no carbon is lost) or ETS (electrons transferred to O₂ forming H₂O, not CO₂)."
},
{
  id: 316,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "The energy stored in NADH + H⁺ and FADH₂ is used to synthesise ATP through:",
  options: [
    "Glycolysis in the cytoplasm",
    "Krebs' cycle in the mitochondrial matrix",
    "The electron transport system (ETS) on the inner mitochondrial membrane",
    "Fermentation under anaerobic conditions"
  ],
  correct: 2,
  explanation: "NCERT states: 'The energy in these molecules... are used to synthesise ATP. This is accomplished through a system of electron carriers called electron transport system (ETS) located on the inner membrane of the mitochondria.' Glycolysis and Krebs cycle PRODUCE NADH/FADH₂; ETS USES them."
},
{
  id: 317,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "In the process of oxidative phosphorylation, O₂ serves as:",
  options: [
    "The initial electron donor",
    "A coenzyme for ATP synthase",
    "The ultimate acceptor of electrons, getting reduced to water",
    "A catalyst that speeds up glycolysis"
  ],
  correct: 2,
  explanation: "NCERT states: 'In this process O₂ is the ultimate acceptor of electrons and it gets reduced to water.' O₂ accepts electrons at the end of ETS (Complex IV) and combines with H⁺ to form H₂O. It is NOT involved in glycolysis."
},
{
  id: 318,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Consider the following integrated summary of aerobic respiration:<br>(I) Glycolysis occurs in the cytoplasm<br>(II) Pyruvate is converted to Acetyl CoA in the mitochondrial matrix<br>(III) Krebs' cycle operates on the inner mitochondrial membrane<br>(IV) ETS is located on the inner mitochondrial membrane<br>Which statements are correct?",
  options: [
    "I, II, III and IV",
    "I, II and IV only",
    "I and IV only",
    "I, III and IV only"
  ],
  correct: 1,
  explanation: "Statement III is WRONG — Krebs' cycle operates in the MATRIX of the mitochondria, NOT on the inner membrane. The inner membrane houses ETS. Statements I, II and IV are correct. This is the most critical location question in the entire chapter."
},
{
  id: 319,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Under anaerobic conditions, pyruvic acid can undergo:",
  options: [
    "Only lactic acid fermentation",
    "Only alcohol fermentation",
    "Either lactic acid fermentation or alcohol fermentation",
    "Oxidative phosphorylation"
  ],
  correct: 2,
  explanation: "NCERT states: 'Under anaerobic conditions either lactic acid fermentation or alcohol fermentation occurs.' The type of fermentation depends on the organism. Oxidative phosphorylation requires O₂ and occurs only under aerobic conditions."
},
{
  id: 320,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "<b>Assertion (A):</b> The respiratory pathway is called an amphibolic pathway.<br><b>Reason (R):</b> It involves only catabolism (breakdown of complex molecules).",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 1,
  explanation: "A is true — NCERT states 'The respiratory pathway is an amphibolic pathway.' R is FALSE — amphibolic means it involves BOTH anabolism AND catabolism, not ONLY catabolism. The Reason gives the traditional (incorrect) view that respiration is purely catabolic."
},
{
  id: 321,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Which of the following correctly lists ALL the products generated at the end of complete aerobic respiration of glucose?",
  options: [
    "CO₂, ethanol and ATP",
    "CO₂, H₂O and ATP (energy)",
    "Lactic acid, CO₂ and ATP",
    "CO₂, H₂O, ethanol and ATP"
  ],
  correct: 1,
  explanation: "Complete aerobic respiration produces CO₂ (from link reaction + Krebs), H₂O (from ETS when O₂ accepts electrons), and ATP (energy). Ethanol and lactic acid are products of fermentation (anaerobic), NOT aerobic respiration."
},
{
  id: 322,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Glucose is the favoured substrate for respiration. Besides glucose, which other macromolecules can also be broken down to yield energy?",
  options: [
    "Only fats",
    "Only proteins",
    "Fats and proteins",
    "Nucleic acids only"
  ],
  correct: 2,
  explanation: "NCERT states: 'Glucose is the favoured substrate for respiration. Fats and proteins can also be broken down to yield energy.' Both fats and proteins can serve as respiratory substrates, entering the pathway at different intermediate points."
},
{
  id: 323,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "How many molecules of pyruvic acid are produced from one molecule of glucose during glycolysis?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "NCERT states: 'Each glucose molecule is broken through a series of enzyme catalysed reactions into two molecules of pyruvic acid.' Glucose (6C) → 2 Pyruvic acid (3C each). This is a fundamental fact tested repeatedly."
},
{
  id: 324,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "The electrons moving through the ETS release energy that is trapped to synthesise ATP. This process is called:",
  options: [
    "Substrate level phosphorylation",
    "Photophosphorylation",
    "Oxidative phosphorylation",
    "Glycolytic phosphorylation"
  ],
  correct: 2,
  explanation: "NCERT states: 'The electrons, as they move through the system, release enough energy that are trapped to synthesise ATP. This is called oxidative phosphorylation.' Substrate level phosphorylation occurs in glycolysis and Krebs. Photophosphorylation is in photosynthesis."
},
{
  id: 325,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Match the following processes with their descriptions:<br>Column I &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; Column II<br>(i) Glycolysis &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; (P) Pyruvate → Acetyl CoA + CO₂<br>(ii) Oxidative decarboxylation &emsp;&emsp; (Q) Glucose → 2 Pyruvic acid<br>(iii) Krebs' cycle &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(R) NADH/FADH₂ → ATP via electron carriers<br>(iv) ETS &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;(S) Acetyl CoA → CO₂ + NADH + FADH₂<br><br>Select the correct match:",
  options: [
    "i-P, ii-Q, iii-S, iv-R",
    "i-Q, ii-P, iii-R, iv-S",
    "i-Q, ii-P, iii-S, iv-R",
    "i-S, ii-R, iii-Q, iv-P"
  ],
  correct: 2,
  explanation: "Glycolysis = Glucose → 2 Pyruvic acid (Q); Oxidative decarboxylation = Pyruvate → Acetyl CoA + CO₂ (P); Krebs' cycle = Acetyl CoA oxidation → CO₂ + NADH + FADH₂ (S); ETS = NADH/FADH₂ used for ATP via electron carriers (R). Option B swaps Krebs and ETS."
},
{
  id: 326,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Which of the following is the most comprehensive and correct definition of cellular respiration as per NCERT?",
  options: [
    "The process of breathing in O₂ and breathing out CO₂",
    "The breaking of C-C bonds of complex organic molecules by oxidation leading to the release of a lot of energy",
    "The synthesis of glucose from CO₂ and H₂O using light energy",
    "The transport of gases across cell membranes"
  ],
  correct: 1,
  explanation: "NCERT defines cellular respiration as: 'The breaking of C-C bonds of complex organic molecules by oxidation leading to the release of a lot of energy.' Option A describes breathing (ventilation), not cellular respiration. Option C describes photosynthesis."
},
{
  id: 327,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Consider the following integrated flow chart:<br>Glucose → (Process I in Cytoplasm) → 2 Pyruvic acid → (Process II in Matrix) → Acetyl CoA → (Process III in Matrix) → NADH + FADH₂ → (Process IV on Inner Membrane) → ATP<br><br>Processes I, II, III and IV are respectively:",
  options: [
    "Krebs' cycle, Glycolysis, ETS, Oxidative decarboxylation",
    "Glycolysis, Oxidative decarboxylation, Krebs' cycle, ETS/Oxidative phosphorylation",
    "ETS, Glycolysis, Oxidative decarboxylation, Krebs' cycle",
    "Glycolysis, Krebs' cycle, Oxidative decarboxylation, ETS"
  ],
  correct: 1,
  explanation: "Process I (Cytoplasm) = Glycolysis; Process II (Matrix, pyruvate → Acetyl CoA) = Oxidative decarboxylation; Process III (Matrix, Acetyl CoA → NADH/FADH₂) = Krebs' cycle; Process IV (Inner membrane, NADH → ATP) = ETS/Oxidative phosphorylation."
},
{
  id: 328,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "<b>Assertion (A):</b> Stomata and lenticels allow gaseous exchange by diffusion in plants.<br><b>Reason (R):</b> Almost all living cells in a plant have their surfaces exposed to air.",
  options: [
    "A is true but R is false",
    "A is false but R is true",
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is NOT the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both A and R are true and from NCERT. However, R does not EXPLAIN A. Stomata and lenticels facilitate gas exchange (A) due to their structure and position, not because all cells are exposed to air (R). R is an additional fact about plant cell arrangement, not the reason for stomatal/lenticular function."
},
{
  id: 329,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "NADH + H⁺ is generated at which of the following stages?<br>(I) Glycolysis<br>(II) Oxidative decarboxylation of pyruvate<br>(III) Krebs' cycle<br>(IV) ETS",
  options: [
    "I and III only",
    "I, II and III only",
    "III and IV only",
    "I, II, III and IV"
  ],
  correct: 1,
  explanation: "NADH + H⁺ is generated during: Glycolysis (PGAL → BPGA), Oxidative decarboxylation (pyruvate → Acetyl CoA), and Krebs' cycle (3 points). ETS CONSUMES NADH (oxidises it) to produce ATP — it does NOT generate NADH. This is a critical distinction."
},
{
  id: 330,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "FADH₂ is generated during:",
  options: [
    "Glycolysis",
    "Oxidative decarboxylation of pyruvate",
    "Krebs' cycle",
    "ETS"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'NADH + H⁺ and FADH₂ are generated in the Krebs' cycle.' FADH₂ is produced specifically during succinate → fumarate step. It is NOT generated during glycolysis (which produces NADH), link reaction (NADH), or ETS (which consumes FADH₂)."
},
{
  id: 331,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Which of the following statements correctly integrates the concepts of aerobic respiration?",
  options: [
    "Glycolysis produces Acetyl CoA which enters ETS directly",
    "Krebs' cycle occurs in the cytoplasm and produces ATP via substrate level phosphorylation only",
    "NADH from glycolysis and Krebs' cycle is used by ETS on the inner mitochondrial membrane to produce ATP via oxidative phosphorylation",
    "ETS occurs in the mitochondrial matrix and directly consumes O₂ to form CO₂"
  ],
  correct: 2,
  explanation: "NCERT states energy in NADH (from glycolysis and Krebs) is used via ETS (inner membrane) for ATP synthesis (oxidative phosphorylation). Option A is wrong (glycolysis produces pyruvate, not Acetyl CoA). Krebs is in matrix, not cytoplasm. ETS is on inner membrane, not matrix, and forms H₂O, not CO₂."
},
{
  id: 332,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "How many of the following statements are correct?<br>(I) Plants have no special systems for gaseous exchange<br>(II) Glycolysis takes place in the mitochondria<br>(III) Krebs' cycle operates in the matrix of mitochondria<br>(IV) O₂ is the ultimate electron acceptor in ETS<br>(V) The respiratory pathway is purely catabolic",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 1,
  explanation: "Statement II is WRONG (glycolysis occurs in CYTOPLASM). Statement V is WRONG (respiratory pathway is AMPHIBOLIC, not purely catabolic). Statements I, III and IV are correct = three correct statements. This tests comprehensive chapter understanding."
},
{
  id: 333,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "The respiratory quotient (RQ) depends upon:",
  options: [
    "The rate of ATP consumption in the cell",
    "The number of mitochondria per cell",
    "The type of respiratory substance used during respiration",
    "The amount of water produced during respiration"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'The respiratory quotient depends upon the type of respiratory substance used during respiration.' Different substrates (carbohydrates, fats, proteins) have different RQ values (1.0, 0.7, 0.9 respectively)."
},
{
  id: 334,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Consider the following about the role of O₂ in respiration:<br>(I) O₂ is consumed during glycolysis<br>(II) O₂ is consumed during Krebs' cycle<br>(III) O₂ is the ultimate electron acceptor in ETS<br>(IV) O₂ gets reduced to water in oxidative phosphorylation<br>Which are correct?",
  options: [
    "I and II only",
    "III and IV only",
    "I, II, III and IV",
    "I, III and IV only"
  ],
  correct: 1,
  explanation: "O₂ is NOT consumed during glycolysis (I is wrong — glycolysis is anaerobic) or directly in Krebs' cycle (II is wrong). O₂ is the terminal electron acceptor in ETS (III) and gets reduced to H₂O (IV). Both III and IV are from NCERT summary."
},
{
  id: 335,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "<b>Assertion (A):</b> Glycolysis is described as the initial stage of cellular respiration that takes place in the cytoplasm.<br><b>Reason (R):</b> Glycolysis is the most ancient metabolic pathway and does not require mitochondria.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states glycolysis is 'the initial stage of cellular respiration' occurring in cytoplasm. It evolved before mitochondria existed (in anaerobic conditions) and is present in all organisms. The fact that it doesn't require mitochondria (evolved before them) explains why it occurs in the cytoplasm."
},
{
  id: 336,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Which of the following is the correct integrated ATP balance for complete aerobic respiration of one glucose molecule (theoretical)?",
  options: [
    "Glycolysis: 2 ATP + Link reaction: 2 ATP + TCA: 2 ATP + ETS: 32 ATP = 38 ATP",
    "Glycolysis: 2 ATP + Link reaction: 0 ATP + TCA: 2 ATP + ETS: 34 ATP = 38 ATP",
    "Glycolysis: 4 ATP + Link reaction: 2 ATP + TCA: 4 ATP + ETS: 28 ATP = 38 ATP",
    "Glycolysis: 2 ATP + Link reaction: 0 ATP + TCA: 2 ATP + Oxidative phosphorylation of 10 NADH (30 ATP) + 2 FADH₂ (4 ATP) = 38 ATP"
  ],
  correct: 3,
  explanation: "The 38 ATP breakdown: Substrate level phosphorylation = 4 ATP (2 glycolysis + 2 TCA). Oxidative phosphorylation = 34 ATP (10 NADH × 3 = 30 ATP + 2 FADH₂ × 2 = 4 ATP). Total = 4 + 34 = 38 ATP. Link reaction doesn't directly produce ATP — it produces NADH which is counted in oxidative phosphorylation."
},
{
  id: 337,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Fermentation takes place under anaerobic conditions in all of the following <b>EXCEPT</b>:",
  options: [
    "Many prokaryotes",
    "Unicellular eukaryotes",
    "Germinating seeds",
    "All multicellular eukaryotes under normal aerobic conditions"
  ],
  correct: 3,
  explanation: "NCERT lists fermentation occurring in: many prokaryotes, unicellular eukaryotes, and germinating seeds. Multicellular eukaryotes under normal aerobic conditions carry out aerobic respiration, not fermentation. Fermentation occurs only when O₂ is unavailable."
},
{
  id: 338,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "The conversion of pyruvic acid to Acetyl CoA occurs in the:",
  options: [
    "Cytoplasm",
    "Mitochondrial matrix",
    "Inner mitochondrial membrane",
    "Outer mitochondrial membrane"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Pyruvic acid is transported into the mitochondria where it is converted into acetyl CoA with the release of CO₂.' This occurs in the mitochondrial matrix (catalysed by pyruvic dehydrogenase). NOT in cytoplasm (where glycolysis occurs) or inner membrane (where ETS occurs)."
},
{
  id: 339,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Consider the following comprehensive table:<br><br>| Stage | Location | Key Product |<br>|---|---|---|<br>| Glycolysis | (I) | 2 Pyruvic acid |<br>| Link reaction | (II) | Acetyl CoA + CO₂ |<br>| Krebs' cycle | (III) | NADH + FADH₂ + CO₂ |<br>| ETS | (IV) | ATP + H₂O |<br><br>The correct locations I, II, III, IV are:",
  options: [
    "Matrix, Cytoplasm, Inner membrane, Matrix",
    "Cytoplasm, Matrix, Matrix, Inner membrane",
    "Inner membrane, Matrix, Cytoplasm, Matrix",
    "Cytoplasm, Inner membrane, Matrix, Matrix"
  ],
  correct: 1,
  explanation: "I = Cytoplasm (Glycolysis); II = Mitochondrial matrix (Link reaction); III = Mitochondrial matrix (Krebs' cycle); IV = Inner mitochondrial membrane (ETS). This location sequence is the backbone of the entire chapter."
},
{
  id: 340,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "A student makes the following claims:<br>Claim 1: O₂ is consumed during glycolysis<br>Claim 2: CO₂ is released during ETS<br>Claim 3: H₂O is produced during ETS when O₂ accepts electrons<br>Which claim(s) is/are correct?",
  options: [
    "Claims 1 and 2 only",
    "Claims 1, 2 and 3",
    "Claim 3 only",
    "Claims 2 and 3 only"
  ],
  correct: 2,
  explanation: "Claim 1 is WRONG — glycolysis does not consume O₂ (it is anaerobic). Claim 2 is WRONG — CO₂ is released during link reaction and Krebs' cycle, NOT during ETS. Claim 3 is CORRECT — NCERT states 'O₂ is the ultimate acceptor of electrons and it gets reduced to water' in ETS."
},
{
  id: 341,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "<b>Assertion (A):</b> In eukaryotic organisms, aerobic respiration occurs in the presence of oxygen.<br><b>Reason (R):</b> O₂ is required as the terminal electron acceptor in the electron transport system.",
  options: [
    "A is false but R is true",
    "Both A and R are true but R is NOT the correct explanation of A",
    "A is true but R is false",
    "Both A and R are true and R is the correct explanation of A"
  ],
  correct: 3,
  explanation: "Both are true. Aerobic respiration needs O₂ because it serves as the terminal electron acceptor at the end of ETS. Without O₂, electrons cannot be removed from the chain, halting the entire process. R correctly explains the mechanistic reason WHY O₂ is essential."
},
{
  id: 342,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Which of the following statements best describes the amphibolic nature of the respiratory pathway?",
  options: [
    "It only breaks down glucose to CO₂ and H₂O",
    "It only synthesises complex molecules from simple ones",
    "It involves both anabolism (synthesis) and catabolism (breakdown)",
    "It functions exclusively under anaerobic conditions"
  ],
  correct: 2,
  explanation: "NCERT states: 'The respiratory pathway is an amphibolic pathway as it involves both anabolism and catabolism.' Intermediates of respiration can be withdrawn for biosynthesis (anabolism) or broken down for energy (catabolism). It is NOT limited to one direction."
},
{
  id: 343,
  topic: "Summary – Respiration in Plants (Integrative)",
  q: "Which of the following is the most accurate and complete summary of aerobic respiration as per NCERT?",
  options: [
    "Glucose → Pyruvate (cytoplasm) → Ethanol + CO₂ (anaerobic)",
    "Glucose → Pyruvate (cytoplasm) → Acetyl CoA (matrix) → Krebs' cycle (matrix) → NADH/FADH₂ → ETS (inner membrane) → ATP; O₂ is ultimate electron acceptor → H₂O",
    "Glucose → Pyruvate (cytoplasm) → Lactic acid (muscle cells) → ATP",
    "Glucose → Acetyl CoA (cytoplasm) → Krebs' cycle (inner membrane) → ETS (matrix) → ATP"
  ],
  correct: 1,
  explanation: "Option B accurately summarises the COMPLETE aerobic respiration pathway with correct locations and products. Option A describes alcoholic fermentation. Option C describes lactic acid fermentation. Option D has incorrect locations (Krebs is in matrix, not inner membrane; ETS is on inner membrane, not matrix)."
}
];
