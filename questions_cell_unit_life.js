// ===== CHAPTER: Cell: The Unit of Life =====
const allQuestions = [
{
  "id": 1,
  "topic": "Introduction to Cell Biology",
  "q": "Which of the following best describes the concept of <b>'Reductionist Biology'</b>?",
  "options": [
    "Studying organisms by observing their behaviour in natural habitats",
    "Applying concepts and techniques of physics and chemistry to understand biology",
    "Studying the diversity of living forms through morphological descriptions",
    "Understanding biology through evolutionary and ecological principles"
  ],
  "correct": 1,
  "explanation": "Reductionist Biology is the physico-chemical approach to study and understand living organisms. It applies concepts and techniques of physics and chemistry to biology. Option A describes ecology/ethology, C describes taxonomy/morphology, D describes evolutionary biology."
},
{
  "id": 2,
  "topic": "Introduction to Cell Biology",
  "q": "Consider the following statements:<br>(i) Cell theory emphasised the diversity underlying the unity of forms.<br>(ii) A physico-chemical approach uses cell-free systems to investigate living processes.<br>(iii) Reductionist biology describes various processes in molecular terms.<br>Which of the above statements is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (i) is INCORRECT – Cell theory emphasised the UNITY underlying the DIVERSITY of forms, not 'diversity underlying unity.' This is a classic NCERT wording trap. Statements (ii) and (iii) are correct as per NCERT."
},
{
  "id": 3,
  "topic": "Introduction to Cell Biology",
  "q": "G.N. Ramachandran is best known for his contribution in determining the structure of:",
  "options": [
    "DNA double helix",
    "α-helix of proteins",
    "Triple helical structure of collagen",
    "β-sheet structure of proteins"
  ],
  "correct": 2,
  "explanation": "G.N. Ramachandran discovered the triple helical structure of collagen (published in Nature, 1954). The DNA double helix was discovered by Watson and Crick. The α-helix and β-sheet structures were proposed by Linus Pauling. This is a common confusion point in NEET."
},
{
  "id": 4,
  "topic": "Introduction to Cell Biology",
  "q": "<b>Assertion (A):</b> Cell is considered the fundamental structural and functional unit of all living organisms.<br><b>Reason (R):</b> Anything less than a complete structure of a cell ensures independent living.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "Both A and R are false"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – cell is indeed the fundamental structural and functional unit. Reason is FALSE – NCERT clearly states 'anything less than a complete structure of a cell does NOT ensure independent living.' The word 'does not' is replaced by 'ensures' making R false. Classic NEET trap using negation."
},
{
  "id": 5,
  "topic": "Introduction to Cell Biology",
  "q": "The 'Ramachandran plot' is used for the analysis of:",
  "options": [
    "Allowed conformations of nucleic acids",
    "Tertiary structure of lipids",
    "Allowed conformations of proteins",
    "Secondary metabolites in plants"
  ],
  "correct": 2,
  "explanation": "The Ramachandran plot is specifically used for the analysis of allowed conformations of proteins. It plots the phi (φ) and psi (ψ) dihedral angles of amino acid residues in a protein structure. It is NOT related to nucleic acids, lipids, or secondary metabolites."
},
{
  "id": 6,
  "topic": "Introduction to Cell Biology",
  "q": "Who among the following first saw and described a <b>live cell</b>?",
  "options": [
    "Robert Hooke",
    "Robert Brown",
    "Antonie Von Leeuwenhoek",
    "Schleiden and Schwann"
  ],
  "correct": 2,
  "explanation": "Antonie Von Leeuwenhoek first saw and described a LIVE cell. Robert Hooke observed dead cork cells. Robert Brown discovered the nucleus. Schleiden and Schwann proposed the cell theory. NEET frequently tests 'live cell' vs 'cell' distinction – Hooke saw dead cells, Leeuwenhoek saw live cells."
},
{
  "id": 7,
  "topic": "Introduction to Cell Biology",
  "q": "Which of the following is <b>NOT</b> a characteristic feature of unicellular organisms as mentioned in NCERT?",
  "options": [
    "They are capable of independent existence",
    "They can perform essential functions of life",
    "They always form colonies for survival",
    "A single cell constitutes their body"
  ],
  "correct": 2,
  "explanation": "As per NCERT, unicellular organisms are capable of (i) independent existence and (ii) performing essential functions of life. They do NOT always form colonies for survival – they can exist independently. Option C is incorrect and hence the answer."
},
{
  "id": 8,
  "topic": "Introduction to Cell Biology",
  "q": "The structural details of the cell were revealed by:",
  "options": [
    "Simple microscope only",
    "Compound light microscope only",
    "Improvement in microscopy leading to electron microscope",
    "Naked eye observations and dissection"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'the invention of the microscope and its improvement leading to the electron microscope revealed ALL the structural details of the cell.' The key word is 'all structural details' which required electron microscopy, not just light microscopy."
},
{
  "id": 9,
  "topic": "Introduction to Cell Biology",
  "q": "Consider the following statements about G.N. Ramachandran:<br>(i) He received his Ph.D. from Oxford University.<br>(ii) His discovery of the triple helical structure of collagen was published in 1954.<br>(iii) He was influenced by Linus Pauling's work on α-helix and β-sheet structures.<br>(iv) He was the founder of the 'Madras school' of conformational analysis of biopolymers.<br>Which of the above statements are <b>correct</b>?",
  "options": [
    "(i), (ii) and (iii)",
    "(ii), (iii) and (iv)",
    "(i), (iii) and (iv)",
    "All of the above"
  ],
  "correct": 1,
  "explanation": "Statement (i) is INCORRECT – Ramachandran received his Ph.D. from CAMBRIDGE University, not Oxford. Statements (ii), (iii), and (iv) are all correct as per NCERT. This is a factual trap testing careful reading."
},
{
  "id": 10,
  "topic": "Introduction to Cell Biology",
  "q": "The cell theory created a sense of mystery around living phenomena because:",
  "options": [
    "It showed that cells can be created from non-living matter",
    "It required the integrity of cellular organisation for living phenomena to be demonstrated",
    "It proved that viruses are living organisms",
    "It demonstrated that all cells arise from pre-existing cells spontaneously"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Cell theory also created a sense of mystery around living phenomena... this mystery was the requirement of integrity of cellular organisation for living phenomena to be demonstrated or observed.' This means living processes need intact cellular organization to function."
},
{
  "id": 11,
  "topic": "Introduction to Cell Biology",
  "q": "The molecular basis of physiological processes can explain:<br>(i) Normal processes like digestion and excretion<br>(ii) Abnormal processes during diseased conditions<br>(iii) Behavioural processes like memory and recognition<br>Select the <b>correct</b> option:",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 3,
  "explanation": "As per NCERT, the physico-chemical approach can explain gross physiological processes like digestion, excretion, memory, defense, recognition (covering i and iii) AND can also explain abnormal processes during diseased conditions (covering ii). All three are correct."
},
{
  "id": 12,
  "topic": "Introduction to Cell Biology",
  "q": "<b>Assertion (A):</b> Reductionist biology involves using cell-free systems to investigate living processes.<br><b>Reason (R):</b> This approach describes various processes in molecular terms by applying physico-chemical concepts.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both statements are TRUE and R correctly explains A. Reductionist biology uses cell-free systems (A is true) because the approach applies physico-chemical concepts to describe processes in molecular terms (R is true and explains why cell-free systems are used)."
},
{
  "id": 13,
  "topic": "Introduction to Cell Biology",
  "q": "Which of the following processes is <b>NOT</b> mentioned in NCERT as an example of gross physiological processes studied through molecular approach?",
  "options": [
    "Digestion",
    "Photosynthesis",
    "Defense",
    "Memory"
  ],
  "correct": 1,
  "explanation": "NCERT specifically mentions digestion, excretion, memory, defense, and recognition as examples of gross physiological processes. Photosynthesis is NOT mentioned in this particular context in the introduction. This tests careful reading of NCERT text."
},
{
  "id": 14,
  "topic": "Introduction to Cell Biology",
  "q": "The detailed description of form and appearance of living organisms primarily brought out their:",
  "options": [
    "Unity",
    "Cellular organisation",
    "Diversity",
    "Molecular composition"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The detailed description of their form and appearance only brought out their DIVERSITY.' It was the cell theory that emphasised the UNITY underlying this diversity. This is a subtle but important distinction tested in NEET."
},
{
  "id": 15,
  "topic": "Introduction to Cell Biology",
  "q": "Robert Brown is credited with the discovery of:",
  "options": [
    "Cell",
    "Live cell",
    "Nucleus",
    "Electron microscope"
  ],
  "correct": 2,
  "explanation": "Robert Brown discovered the nucleus. Robert Hooke discovered the cell (dead cork cells). Leeuwenhoek first described live cells. The electron microscope was developed by Ernst Ruska and Max Knoll."
},
{
  "id": 16,
  "topic": "Introduction to Cell Biology",
  "q": "In the context of studying living organisms, the correct sequence of the reductionist approach is:",
  "options": [
    "Analysis of compounds → Analysis of elements → Molecular basis of processes → Understanding physiological processes",
    "Analysis of living tissues for elements and compounds → Identifying organic compounds → Understanding their role in the cell → Explaining physiological processes at molecular level",
    "Observing organisms → Classifying them → Studying their habitats → Molecular analysis",
    "Studying behaviour → Studying physiology → Studying anatomy → Molecular analysis"
  ],
  "correct": 1,
  "explanation": "As per NCERT, the reductionist approach follows: (1) Analysis of living tissues for elements and compounds → (2) Identifying types of organic compounds in living organisms → (3) Understanding what these compounds do inside a cell → (4) Explaining gross physiological processes at molecular level."
},
{
  "id": 17,
  "topic": "Introduction to Cell Biology",
  "q": "G.N. Ramachandran's father was a professor of:",
  "options": [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'His father was a professor of mathematics at a local college and thus had considerable influence in shaping Ramachandran's interest in mathematics.' This is a factual detail from the given passage."
},
{
  "id": 18,
  "topic": "Introduction to Cell Biology",
  "q": "Consider the following matches:<br>(i) Leeuwenhoek – First observed live cell<br>(ii) Robert Brown – Discovered nucleus<br>(iii) Robert Hooke – Proposed cell theory<br>(iv) G.N. Ramachandran – Triple helix of collagen<br>Which of the above are <b>correctly</b> matched?",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(ii), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 1,
  "explanation": "Match (iii) is INCORRECT – Robert Hooke observed cells (dead cork cells), he did NOT propose the cell theory. The cell theory was proposed by Schleiden and Schwann. Matches (i), (ii), and (iv) are all correct."
},
{
  "id": 19,
  "topic": "Introduction to Cell Biology",
  "q": "<b>Assertion (A):</b> Unicellular organisms are capable of independent existence.<br><b>Reason (R):</b> A complete cellular structure is essential for independent living.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Unicellular organisms can exist independently because they possess a complete cellular structure. NCERT states 'anything less than a complete structure of a cell does not ensure independent living,' confirming that complete cellular structure (R) is the reason for independent existence (A). R correctly explains A."
},
{
  "id": 20,
  "topic": "Introduction to Cell Biology",
  "q": "G.N. Ramachandran graduated as the top-ranking student in:",
  "options": [
    "B.Sc. (Honors) Chemistry from University of Calcutta",
    "B.Sc. (Honors) Physics from University of Madras",
    "B.Sc. (Honors) Mathematics from University of Madras",
    "B.Sc. (Honors) Physics from Cambridge University"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Ramachandran graduated in 1942 as the top-ranking student in the B.Sc. (Honors) Physics course of the University of Madras.' He later received his Ph.D. from Cambridge, but his graduation was from Madras."
},
{
  "id": 21,
  "topic": "Introduction to Cell Biology",
  "q": "Which of the following correctly describes the relationship between diversity and unity in biology?",
  "options": [
    "Cell theory brought out the diversity of living forms",
    "Description of form and appearance emphasised unity of organisms",
    "Cell theory emphasised the unity underlying the diversity of forms through cellular organisation",
    "Diversity and unity are unrelated concepts in biology"
  ],
  "correct": 2,
  "explanation": "As per NCERT: 'Description of form and appearance only brought out their DIVERSITY. It is the cell theory that emphasised the UNITY underlying this diversity of forms, i.e., the cellular organisation of all life forms.' Option A reverses the concept, B reverses the concept, D is wrong."
},
{
  "id": 22,
  "topic": "Introduction to Cell Biology",
  "q": "The meeting of G.N. Ramachandran with which scientist directed his attention to solving the structure of collagen?",
  "options": [
    "James Watson",
    "Francis Crick",
    "Linus Pauling",
    "Rosalind Franklin"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'While at Cambridge, Ramachandran met Linus Pauling and was deeply influenced by his publications on models of the α-helix and β-sheet structures that directed his attention to solving the structure of collagen.'"
},
{
  "id": 23,
  "topic": "Introduction to Cell Biology",
  "q": "Which of the following is the <b>correct</b> statement regarding the cell?",
  "options": [
    "Only multicellular organisms have cells as their structural unit",
    "Cell is only the structural unit but not the functional unit of life",
    "Cell is the fundamental structural and functional unit of all living organisms",
    "Viruses have complete cellular organisation"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'cell is the fundamental structural and functional unit of ALL living organisms.' Option A is wrong because unicellular organisms also have cells. Option B is wrong because cell is both structural AND functional unit. Option D is wrong because viruses lack cellular organisation."
},
{
  "id": 24,
  "topic": "Introduction to Cell Biology",
  "q": "The Ramachandran plot and the triple helical structure of collagen are contributions that rank among the most outstanding in the field of:",
  "options": [
    "Molecular genetics",
    "Structural biology",
    "Evolutionary biology",
    "Developmental biology"
  ],
  "correct": 1,
  "explanation": "As per NCERT, Ramachandran's contributions 'rank among the most outstanding contributions in STRUCTURAL BIOLOGY.' This is a direct NCERT statement."
},
{
  "id": 25,
  "topic": "Introduction to Cell Biology",
  "q": "Which year was the triple helical structure of collagen published in the journal <i>Nature</i>?",
  "options": [
    "1942",
    "1949",
    "1953",
    "1954"
  ],
  "correct": 3,
  "explanation": "The triple helical structure of collagen was published in Nature in 1954. 1942 – Ramachandran graduated B.Sc. 1949 – He received Ph.D. from Cambridge. 1953 – Watson and Crick published DNA structure (common distractor). This tests careful reading vs. year confusion."
},
{
  "id": 26,
  "topic": "Introduction to Cell Biology",
  "q": "The physico-chemical approach in biology is established by:",
  "options": [
    "Observing organisms in their natural habitat",
    "Analysis of living tissues for elements and compounds",
    "Studying fossil records",
    "Comparing anatomical features of different organisms"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the approach is established by analysis of living tissues for elements and compounds.' This is the starting point of the reductionist approach to biology."
},
{
  "id": 27,
  "topic": "Introduction to Cell Biology",
  "q": "Consider the following statements:<br>(i) All organisms are composed of cells.<br>(ii) Organisms composed of a single cell are called multicellular organisms.<br>(iii) Organisms composed of many cells are called multicellular organisms.<br>Which of the above statements is/are <b>incorrect</b>?",
  "options": [
    "Only (i)",
    "Only (ii)",
    "Only (iii)",
    "(i) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (ii) is INCORRECT – organisms composed of a single cell are called UNICELLULAR organisms, not multicellular. Statement (i) and (iii) are correct as per NCERT. This is a simple word-swap trap commonly set in NEET."
},
{
  "id": 28,
  "topic": "Introduction to Cell Biology",
  "q": "<b>Assertion (A):</b> The detailed description of form and appearance of organisms emphasised the unity of life.<br><b>Reason (R):</b> Cell theory emphasised cellular organisation as the basis of unity in living forms.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  "correct": 2,
  "explanation": "Assertion is FALSE – the description of form and appearance brought out DIVERSITY, not unity. Reason is TRUE – cell theory did emphasise cellular organisation as the basis of unity. This is a classic NCERT wording reversal trap."
},
{
  "id": 29,
  "topic": "Introduction to Cell Biology",
  "q": "Which of the following is <b>NOT</b> mentioned as a gross physiological process in the given NCERT text?",
  "options": [
    "Excretion",
    "Recognition",
    "Reproduction",
    "Defense"
  ],
  "correct": 2,
  "explanation": "NCERT specifically mentions digestion, excretion, memory, defense, and recognition as examples of gross physiological processes. Reproduction is NOT mentioned in this particular list in the introduction. Students often assume reproduction must be listed."
},
{
  "id": 30,
  "topic": "Introduction to Cell Biology",
  "q": "G.N. Ramachandran was born near which city on the coast of India?",
  "options": [
    "Chennai",
    "Cochin",
    "Mangalore",
    "Thiruvananthapuram"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'He was born on October 8, 1922, in a small town, not far from Cochin on the southwestern coast of India.' Note: The question says 'near' which city – and the text says 'not far from Cochin.'"
},
{
  "id": 31,
  "topic": "Cell Theory",
  "q": "Which of the following scientists first explained that new cells are formed from pre-existing cells?",
  "options": [
    "Matthias Schleiden",
    "Theodore Schwann",
    "Rudolf Virchow",
    "Robert Brown"
  ],
  "correct": 2,
  "explanation": "Rudolf Virchow (1855) first explained that cells divided and new cells are formed from pre-existing cells (Omnis cellula-e cellula). Schleiden and Schwann formulated the cell theory but it did not explain how new cells were formed. This is one of the most commonly tested facts in NEET."
},
{
  "id": 32,
  "topic": "Cell Theory",
  "q": "Consider the following statements:<br>(i) Schleiden observed that all plants are composed of different kinds of cells.<br>(ii) Schwann reported that cells had a thin outer layer called the cell wall.<br>(iii) Schwann concluded that the presence of cell wall is a unique character of plant cells.<br>Which of the above statements is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 2,
  "explanation": "Statement (ii) is INCORRECT – Schwann reported that cells had a thin outer layer known as the 'PLASMA MEMBRANE', NOT cell wall. The cell wall was identified as unique to plant cells (statement iii). This is a classic NEET trap where students confuse plasma membrane with cell wall in Schwann's observations."
},
{
  "id": 33,
  "topic": "Cell Theory",
  "q": "The cell theory as understood today includes:<br>(i) All living organisms are composed of cells and products of cells.<br>(ii) All cells arise from pre-existing cells.<br>(iii) All cells contain DNA as genetic material.<br>(iv) The cell is the fundamental unit of structure and organisation in organisms.<br>Select the <b>correct</b> option as per NCERT:",
  "options": [
    "(i), (ii), (iii) and (iv)",
    "(i) and (ii) only",
    "(i), (ii) and (iv) only",
    "(i), (ii) and (iii) only"
  ],
  "correct": 1,
  "explanation": "As per NCERT, the cell theory as understood today includes ONLY two tenets: (i) all living organisms are composed of cells and products of cells, and (ii) all cells arise from pre-existing cells. Statements (iii) and (iv) are true facts but are NOT listed as part of the cell theory in NCERT. Students commonly add extra tenets – a frequent NEET trap."
},
{
  "id": 34,
  "topic": "Cell Theory",
  "q": "<b>Assertion (A):</b> Schleiden and Schwann together formulated the cell theory.<br><b>Reason (R):</b> Their theory explained how new cells are formed from pre-existing cells.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – Schleiden and Schwann did formulate the cell theory. Reason is FALSE – their theory did NOT explain how new cells were formed. It was Rudolf Virchow (1855) who later explained that cells arise from pre-existing cells and gave the cell theory its final shape. Classic NEET trap."
},
{
  "id": 35,
  "topic": "Cell Theory",
  "q": "Match the following:<br>(a) Schleiden – (i) 1855<br>(b) Schwann – (ii) 1838<br>(c) Virchow – (iii) 1839<br>Select the correct matching:",
  "options": [
    "a-(ii), b-(iii), c-(i)",
    "a-(iii), b-(ii), c-(i)",
    "a-(i), b-(ii), c-(iii)",
    "a-(ii), b-(i), c-(iii)"
  ],
  "correct": 0,
  "explanation": "Schleiden (1838) examined plants; Schwann (1839) studied animal cells; Virchow (1855) proposed Omnis cellula-e cellula. The correct match is a-(ii), b-(iii), c-(i). Year-based matching is a frequently tested pattern in NEET."
},
{
  "id": 36,
  "topic": "Cell Theory",
  "q": "The Latin phrase '<b>Omnis cellula-e cellula</b>' means:",
  "options": [
    "All organisms are composed of cells",
    "All cells contain a nucleus",
    "All cells arise from pre-existing cells",
    "All cells have a cell membrane"
  ],
  "correct": 2,
  "explanation": "'Omnis cellula-e cellula' was proposed by Rudolf Virchow and means 'all cells arise from pre-existing cells.' This was the modification that gave the cell theory its final shape. Option A describes the Schleiden-Schwann hypothesis, not Virchow's addition."
},
{
  "id": 37,
  "topic": "Cell Theory",
  "q": "Theodore Schwann is associated with all of the following <b>EXCEPT</b>:",
  "options": [
    "Studying different types of animal cells",
    "Reporting the thin outer layer of cells known as plasma membrane",
    "Concluding that cell wall is unique to plant cells",
    "First explaining that cells arise from pre-existing cells"
  ],
  "correct": 3,
  "explanation": "Schwann studied animal cells (A), reported plasma membrane (B), and concluded cell wall is unique to plants (C). However, it was Rudolf Virchow, NOT Schwann, who first explained that cells arise from pre-existing cells. This is a commonly confused point in NEET."
},
{
  "id": 38,
  "topic": "Cell Theory",
  "q": "Which of the following is the delimiting structure of the human cheek cell?",
  "options": [
    "Cell wall",
    "Plasma membrane",
    "Nuclear membrane",
    "Tonoplast"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The cells of the human cheek have an outer membrane as the delimiting structure of the cell.' Human cheek cells are animal cells and lack a cell wall. The outer boundary is the plasma membrane. Tonoplast is the membrane of the vacuole."
},
{
  "id": 39,
  "topic": "Cell Theory",
  "q": "Consider the following statements about eukaryotic and prokaryotic cells:<br>(i) Both have a semi-fluid matrix called cytoplasm.<br>(ii) Both have membrane-bound organelles.<br>(iii) Both contain ribosomes.<br>(iv) Both have membrane-bound nuclei.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i) and (iii) only",
    "(i), (ii) and (iii)",
    "(i), (iii) and (iv)",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Only (i) and (iii) are correct. Both prokaryotic and eukaryotic cells have cytoplasm and ribosomes. Statement (ii) is wrong – prokaryotic cells LACK membrane-bound organelles. Statement (iv) is wrong – prokaryotic cells LACK membrane-bound nuclei. This distinction is the defining difference between the two."
},
{
  "id": 40,
  "topic": "Cell Theory",
  "q": "Ribosomes are found in all of the following locations <b>EXCEPT</b>:",
  "options": [
    "Cytoplasm",
    "Chloroplasts",
    "Lysosomes",
    "Mitochondria"
  ],
  "correct": 2,
  "explanation": "As per NCERT, ribosomes are found in the cytoplasm, within chloroplasts (in plants), within mitochondria, and on rough ER. Ribosomes are NOT found in lysosomes. This is a frequently tested NEET question on ribosome distribution."
},
{
  "id": 41,
  "topic": "Cell Theory",
  "q": "The smallest cells known are:",
  "options": [
    "Red blood cells",
    "Bacteria",
    "Mycoplasmas",
    "Nerve cells"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Mycoplasmas, the smallest cells, are only 0.3 μm in length.' Bacteria are 3–5 μm, human RBCs are about 7.0 μm in diameter, and nerve cells are among the longest cells. Students often confuse smallest organism with smallest cell."
},
{
  "id": 42,
  "topic": "Cell Theory",
  "q": "The largest isolated single cell is:",
  "options": [
    "Egg of a hen",
    "Nerve cell of a whale",
    "Egg of an ostrich",
    "Acetabularia"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The largest isolated single cell is the egg of an ostrich.' Note the word 'isolated' – meaning a single, free cell. Nerve cells may be longer but are not isolated single cells. Hen's egg is large but ostrich egg is the largest."
},
{
  "id": 43,
  "topic": "Cell Theory",
  "q": "<b>Assertion (A):</b> Ribosomes are found in both prokaryotic and eukaryotic cells.<br><b>Reason (R):</b> Ribosomes are membrane-bound organelles essential for protein synthesis.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – ribosomes are found in both prokaryotic and eukaryotic cells. Reason is FALSE – ribosomes are NON-membrane bound organelles, not membrane-bound. The fact that they are non-membrane bound is precisely why they can exist in prokaryotic cells which lack membrane-bound organelles."
},
{
  "id": 44,
  "topic": "Cell Theory",
  "q": "Which of the following is a <b>non-membrane bound</b> organelle found exclusively in <b>animal cells</b>?",
  "options": [
    "Ribosome",
    "Centrosome",
    "Lysosome",
    "Mitochondria"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Animal cells contain another non-membrane bound organelle called centrosome which helps in cell division.' Ribosomes are found in both plant and animal cells. Lysosomes and mitochondria are membrane-bound organelles. Centrosome is non-membrane bound and found in animal cells."
},
{
  "id": 45,
  "topic": "Cell Theory",
  "q": "The diameter of human red blood cells is approximately:",
  "options": [
    "0.3 μm",
    "3–5 μm",
    "7.0 μm",
    "10.0 μm"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'human red blood cells are about 7.0 μm in diameter.' 0.3 μm is the size of Mycoplasma, 3–5 μm is the size range of bacteria. These size values are frequently asked in NEET."
},
{
  "id": 46,
  "topic": "Cell Theory",
  "q": "The cytoplasm is described in NCERT as:",
  "options": [
    "A solid matrix found only in eukaryotic cells",
    "A semi-fluid matrix that occupies the volume of the cell",
    "A fluid found only between the organelles",
    "A rigid matrix surrounding the nucleus"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'a semi-fluid matrix called cytoplasm occupies the volume of the cell.' Key points: it is SEMI-FLUID (not solid or rigid), and it occupies the volume of the cell in BOTH prokaryotic and eukaryotic cells."
},
{
  "id": 47,
  "topic": "Cell Theory",
  "q": "Which of the following correctly describes the hypothesis proposed by Schwann?",
  "options": [
    "All cells arise from pre-existing cells",
    "The bodies of animals and plants are composed of cells and products of cells",
    "All plants are composed of different kinds of cells forming tissues",
    "Cells contain a nucleus with genetic material"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Schwann proposed the hypothesis that the bodies of animals and plants are composed of cells and products of cells.' Option A is Virchow's contribution. Option C is Schleiden's observation. Option D is not attributed to Schwann."
},
{
  "id": 48,
  "topic": "Cell Theory",
  "q": "Consider the following organelles:<br>(a) Endoplasmic reticulum<br>(b) Ribosomes<br>(c) Golgi complex<br>(d) Centrosome<br>(e) Mitochondria<br>Which of the above are <b>membrane-bound</b> organelles?",
  "options": [
    "(a), (c) and (e) only",
    "(a), (b), (c) and (e)",
    "(a), (c), (d) and (e)",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Membrane-bound organelles include ER (a), Golgi complex (c), and mitochondria (e). Ribosomes (b) and centrosome (d) are NON-membrane bound organelles as clearly stated in NCERT. This classification is a very high-weightage NEET concept."
},
{
  "id": 49,
  "topic": "Cell Theory",
  "q": "The nucleus of a cell contains chromosomes which in turn contain:",
  "options": [
    "RNA only",
    "Proteins only",
    "DNA",
    "Lipids"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'This nucleus contains the chromosomes which in turn contain the genetic material, DNA.' While chromosomes also contain proteins (histones), the NCERT text specifically mentions DNA as the genetic material contained in chromosomes."
},
{
  "id": 50,
  "topic": "Cell Theory",
  "q": "Which of the following is <b>NOT</b> listed as a membrane-bound organelle in the NCERT text?",
  "options": [
    "Lysosomes",
    "Microbodies",
    "Vacuoles",
    "Ribosomes"
  ],
  "correct": 3,
  "explanation": "NCERT lists ER, Golgi complex, lysosomes, mitochondria, microbodies, and vacuoles as membrane-bound organelles. Ribosomes are specifically stated as NON-membrane bound organelles. This is a direct NCERT fact tested frequently in NEET."
},
{
  "id": 51,
  "topic": "Cell Theory",
  "q": "A cell that has a membrane-bound nucleus is called:",
  "options": [
    "Prokaryotic",
    "Eukaryotic",
    "Acellular",
    "Syncytial"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Cells that have membrane bound nuclei are called eukaryotic whereas cells that lack a membrane bound nucleus are prokaryotic.' The presence or absence of a membrane-bound nucleus is the fundamental distinction."
},
{
  "id": 52,
  "topic": "Cell Theory",
  "q": "<b>Assertion (A):</b> The onion peel cell has a cell wall as its outer boundary and just within it is the cell membrane.<br><b>Reason (R):</b> The presence of cell wall is a unique character of plant cells as concluded by Schwann.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. The onion cell (plant cell) has cell wall as outer boundary with cell membrane within it (A is true). Schwann concluded that cell wall is unique to plant cells (R is true). R correctly explains why the onion cell (being a plant cell) has a cell wall as its outer boundary."
},
{
  "id": 53,
  "topic": "Cell Theory",
  "q": "Schleiden was a:",
  "options": [
    "German Zoologist",
    "British Botanist",
    "German Botanist",
    "French Physician"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Matthias Schleiden, a German botanist, examined a large number of plants.' Schwann was a German Zoologist. Students frequently interchange the professions of Schleiden and Schwann in NEET."
},
{
  "id": 54,
  "topic": "Cell Theory",
  "q": "Which of the following correctly represents the size of bacteria?",
  "options": [
    "0.3 μm",
    "3 to 5 μm",
    "7.0 μm",
    "0.3 mm"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'bacteria could be 3 to 5 μm.' Mycoplasma is 0.3 μm, human RBC is 7.0 μm. Note: NCERT mentions Mycoplasma size as '0.3 mm' in the text but this is likely meant as 0.3 μm based on context. Bacteria are clearly 3–5 μm."
},
{
  "id": 55,
  "topic": "Cell Theory",
  "q": "Consider the following:<br>(i) Cytoplasm is the main arena of cellular activities.<br>(ii) Various chemical reactions occur in cytoplasm to keep the cell in the 'living state'.<br>(iii) Cytoplasm is found only in eukaryotic cells.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct as per NCERT – cytoplasm is the main arena of cellular activities and various chemical reactions occur in it. Statement (iii) is INCORRECT – NCERT clearly states cytoplasm is found in BOTH prokaryotic and eukaryotic cells."
},
{
  "id": 56,
  "topic": "Cell Theory",
  "q": "Nerve cells are described in NCERT as some of the:",
  "options": [
    "Smallest cells",
    "Largest cells",
    "Longest cells",
    "Most spherical cells"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Nerve cells are some of the longest cells.' Note the distinction: longest ≠ largest. The largest isolated single cell is the ostrich egg. The smallest cells are Mycoplasmas. Students often confuse 'longest' with 'largest.'"
},
{
  "id": 57,
  "topic": "Cell Theory",
  "q": "Which of the following statements about ribosomes is <b>INCORRECT</b>?",
  "options": [
    "They are non-membrane bound organelles",
    "They are found in both prokaryotic and eukaryotic cells",
    "They are found within chloroplasts and mitochondria",
    "They are found only in the cytoplasm of cells"
  ],
  "correct": 3,
  "explanation": "Option D is INCORRECT. As per NCERT, 'Within the cell, ribosomes are found not only in the cytoplasm but also within the two organelles – chloroplasts and mitochondria and on rough ER.' So ribosomes are NOT found only in the cytoplasm – they have multiple locations."
},
{
  "id": 58,
  "topic": "Cell Theory",
  "q": "The shape of cells may vary with:",
  "options": [
    "The age of the organism",
    "The function they perform",
    "The habitat of the organism",
    "The season of the year"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The shape of the cell may vary with the function they perform.' This is a direct NCERT statement. Cells can be disc-like, polygonal, columnar, cuboid, thread-like, or irregular depending on their function."
},
{
  "id": 59,
  "topic": "Cell Theory",
  "q": "Which of the following is <b>NOT</b> a cell shape mentioned in the NCERT text?",
  "options": [
    "Disc-like",
    "Columnar",
    "Stellate",
    "Polygonal"
  ],
  "correct": 2,
  "explanation": "NCERT mentions disc-like, polygonal, columnar, cuboid, thread-like, and irregular as cell shapes. 'Stellate' (star-shaped) is NOT mentioned in the given NCERT text, although it is a valid cell shape found in biology."
},
{
  "id": 60,
  "topic": "Cell Theory",
  "q": "<b>Assertion (A):</b> Prokaryotic cells lack membrane-bound organelles but contain ribosomes.<br><b>Reason (R):</b> Ribosomes are non-membrane bound organelles essential for all cells.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Prokaryotic cells lack membrane-bound organelles but do contain ribosomes (A is true). Ribosomes are non-membrane bound (R is true), and this is precisely why they can exist in prokaryotic cells that lack membrane-bound structures. R correctly explains A."
},
{
  "id": 61,
  "topic": "Prokaryotic Cells",
  "q": "Which of the following is <b>NOT</b> a prokaryotic organism?",
  "options": [
    "Blue-green algae",
    "Mycoplasma",
    "Mucor",
    "PPLO"
  ],
  "correct": 2,
  "explanation": "Mucor is a eukaryotic fungus, not a prokaryote. Blue-green algae (cyanobacteria), Mycoplasma, and PPLO (Pleuro Pneumonia Like Organisms) are all prokaryotic organisms as stated in NCERT. Students sometimes confuse blue-green algae as eukaryotic – they are prokaryotic."
},
{
  "id": 62,
  "topic": "Prokaryotic Cells",
  "q": "Match the bacterial shapes with their descriptions:<br>(a) Bacillus – (i) Spiral<br>(b) Coccus – (ii) Rod-like<br>(c) Vibrio – (iii) Spherical<br>(d) Spirillum – (iv) Comma-shaped<br>Select the correct matching:",
  "options": [
    "a-(ii), b-(iii), c-(iv), d-(i)",
    "a-(i), b-(iii), c-(iv), d-(ii)",
    "a-(ii), b-(iv), c-(iii), d-(i)",
    "a-(ii), b-(iii), c-(i), d-(iv)"
  ],
  "correct": 0,
  "explanation": "Bacillus = rod-like (ii), Coccus = spherical (iii), Vibrio = comma-shaped (iv), Spirillum = spiral (i). The most common NEET trap is confusing vibrio (comma) with spirillum (spiral). Remember: Vibrio cholera is comma-shaped."
},
{
  "id": 63,
  "topic": "Prokaryotic Cells",
  "q": "All prokaryotes have a cell wall surrounding the cell membrane <b>except</b>:",
  "options": [
    "Bacteria",
    "Blue-green algae",
    "Mycoplasma",
    "PPLO"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'All prokaryotes have a cell wall surrounding the cell membrane except in mycoplasma.' This is one of the most frequently tested facts in NEET. Note: PPLO and Mycoplasma are often considered the same group, but NCERT specifically names mycoplasma as the exception."
},
{
  "id": 64,
  "topic": "Prokaryotic Cells",
  "q": "Consider the following statements about prokaryotic genetic material:<br>(i) The genetic material is basically naked, not enveloped by a nuclear membrane.<br>(ii) The genomic DNA is a single linear chromosome.<br>(iii) Plasmids are small circular DNA outside the genomic DNA.<br>(iv) Plasmid DNA confers resistance to antibiotics.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i), (ii) and (iii)",
    "(i), (iii) and (iv)",
    "(ii), (iii) and (iv)",
    "All of the above"
  ],
  "correct": 1,
  "explanation": "Statement (ii) is INCORRECT – the genomic DNA is a single CIRCULAR chromosome, not linear. NCERT states 'the single chromosome/circular DNA.' Statements (i), (iii), and (iv) are all correct. Linear vs circular DNA is a classic NEET trap for prokaryotes."
},
{
  "id": 65,
  "topic": "Prokaryotic Cells",
  "q": "<b>Assertion (A):</b> Plasmid DNA is used to monitor bacterial transformation with foreign DNA.<br><b>Reason (R):</b> Plasmid DNA confers certain unique phenotypic characters like resistance to antibiotics.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 1,
  "explanation": "Both A and R are true. Plasmid DNA is used for bacterial transformation (A is true) and it confers unique phenotypic characters like antibiotic resistance (R is true). However, R does not DIRECTLY explain why plasmid is used for transformation – its use is due to its ability to replicate independently and carry foreign DNA, not just because of antibiotic resistance."
},
{
  "id": 66,
  "topic": "Prokaryotic Cells",
  "q": "Mesosomes are formed by:",
  "options": [
    "Infoldings of the cell wall",
    "Extensions of the nuclear membrane",
    "Extensions of plasma membrane into the cell",
    "Independent membrane-bound structures in cytoplasm"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'A special membranous structure is the mesosome which is formed by the extensions of plasma membrane into the cell.' They are NOT independent organelles or cell wall infoldings. NCERT also describes them as 'infoldings of cell membrane' – key distinction from cell wall."
},
{
  "id": 67,
  "topic": "Prokaryotic Cells",
  "q": "Mesosomes are present in the form of:<br>(i) Vesicles<br>(ii) Tubules<br>(iii) Lamellae<br>(iv) Cristae<br>Select the <b>correct</b> option:",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(ii), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "As per NCERT, mesosome extensions are in the form of vesicles, tubules, and lamellae. Cristae are the infoldings of the inner mitochondrial membrane in eukaryotes, NOT a form of mesosomes. This is a common trap – students confuse mesosomes with mitochondrial cristae."
},
{
  "id": 68,
  "topic": "Prokaryotic Cells",
  "q": "Which of the following is <b>NOT</b> a function of mesosomes as per NCERT?",
  "options": [
    "Cell wall formation",
    "DNA replication and distribution to daughter cells",
    "Photosynthesis",
    "Respiration"
  ],
  "correct": 2,
  "explanation": "NCERT lists mesosome functions as: cell wall formation, DNA replication and distribution to daughter cells, respiration, secretion processes, increasing surface area of plasma membrane, and enzymatic content. Photosynthesis is NOT listed – chromatophores (not mesosomes) contain pigments in cyanobacteria."
},
{
  "id": 69,
  "topic": "Prokaryotic Cells",
  "q": "The cell envelope of a bacterial cell consists of (from outermost to innermost):",
  "options": [
    "Cell wall → Glycocalyx → Plasma membrane",
    "Plasma membrane → Cell wall → Glycocalyx",
    "Glycocalyx → Cell wall → Plasma membrane",
    "Glycocalyx → Plasma membrane → Cell wall"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The cell envelope consists of a tightly bound three layered structure i.e., the outermost glycocalyx followed by the cell wall and then the plasma membrane.' Order: Glycocalyx (outermost) → Cell wall → Plasma membrane (innermost). This sequence is very frequently tested in NEET."
},
{
  "id": 70,
  "topic": "Prokaryotic Cells",
  "q": "Bacteria are classified as Gram positive or Gram negative based on:",
  "options": [
    "Differences in their flagellar arrangement",
    "Differences in cell envelopes and response to Gram staining procedure",
    "Differences in their plasmid content",
    "Differences in their ribosome size"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Bacteria can be classified into two groups on the basis of the differences in the cell envelopes and the manner in which they respond to the staining procedure developed by Gram.' It is specifically the cell envelope composition that determines Gram staining response."
},
{
  "id": 71,
  "topic": "Prokaryotic Cells",
  "q": "The glycocalyx, when it is thick and tough, is called:",
  "options": [
    "Slime layer",
    "Capsule",
    "Pellicle",
    "Cell wall"
  ],
  "correct": 1,
  "explanation": "As per NCERT, glycocalyx 'could be a loose sheath called the slime layer in some, while in others it may be thick and tough, called the capsule.' Loose = slime layer; Thick & tough = capsule. This distinction is a high-frequency NEET question."
},
{
  "id": 72,
  "topic": "Prokaryotic Cells",
  "q": "<b>Assertion (A):</b> The cell wall of bacteria provides a strong structural support.<br><b>Reason (R):</b> The cell wall prevents the bacterium from bursting or collapsing.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. As per NCERT, 'The cell wall determines the shape of the cell and provides a strong structural support to prevent the bacterium from bursting or collapsing.' R correctly explains A by stating the specific protective function."
},
{
  "id": 73,
  "topic": "Prokaryotic Cells",
  "q": "Chromatophores are found in:",
  "options": [
    "All bacteria",
    "Mycoplasma",
    "Some prokaryotes like cyanobacteria",
    "All eukaryotic cells"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In some prokaryotes like cyanobacteria, there are other membranous extensions into the cytoplasm called chromatophores which contain pigments.' They are NOT found in all bacteria or all prokaryotes – only in some, like cyanobacteria."
},
{
  "id": 74,
  "topic": "Prokaryotic Cells",
  "q": "The bacterial flagellum is composed of three parts. Which of the following is the <b>longest</b> portion?",
  "options": [
    "Hook",
    "Basal body",
    "Filament",
    "Pili"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Bacterial flagellum is composed of three parts – filament, hook and basal body. The filament is the longest portion and extends from the cell surface to the outside.' Pili is NOT a part of flagellum."
},
{
  "id": 75,
  "topic": "Prokaryotic Cells",
  "q": "Consider the following statements:<br>(i) Pili are elongated tubular structures made of a special protein.<br>(ii) Fimbriae are small bristle-like fibres sprouting out of the cell.<br>(iii) Both pili and fimbriae play a role in bacterial motility.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct as per NCERT. Statement (iii) is INCORRECT – NCERT clearly states 'pili and fimbriae are also surface structures of the bacteria but do NOT play a role in motility.' Only flagella are responsible for motility. This is a very important NEET trap."
},
{
  "id": 76,
  "topic": "Prokaryotic Cells",
  "q": "Fimbriae help bacteria to:",
  "options": [
    "Move in liquid medium",
    "Transfer genetic material",
    "Attach to rocks in streams and host tissues",
    "Carry out respiration"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In some bacteria, they (fimbriae) are known to help attach the bacteria to rocks in streams and also to the host tissues.' Fimbriae do NOT help in motility (that's flagella) or genetic transfer (that's primarily pili in conjugation)."
},
{
  "id": 77,
  "topic": "Prokaryotic Cells",
  "q": "Bacterial flagella arise from:",
  "options": [
    "Plasma membrane",
    "Cell wall",
    "Glycocalyx",
    "Cytoplasm"
  ],
  "correct": 1,
  "explanation": "As per NCERT, bacteria 'have thin filamentous extensions from their cell wall called flagella.' Bacterial flagella arise from the cell wall, unlike eukaryotic flagella which arise from basal bodies. This is an important structural distinction."
},
{
  "id": 78,
  "topic": "Prokaryotic Cells",
  "q": "Which of the following statements about prokaryotic cells is <b>INCORRECT</b>?",
  "options": [
    "They are generally smaller than eukaryotic cells",
    "They multiply more rapidly than eukaryotic cells",
    "They have a well-defined nucleus with a nuclear membrane",
    "They may vary greatly in shape and size"
  ],
  "correct": 2,
  "explanation": "Option C is INCORRECT. As per NCERT, prokaryotic cells have 'no well-defined nucleus' and the genetic material is 'not enveloped by a nuclear membrane.' This is the defining characteristic of prokaryotes. Options A, B, and D are all correct statements from NCERT."
},
{
  "id": 79,
  "topic": "Prokaryotic Cells",
  "q": "The only organelle found in prokaryotic cells (similar to eukaryotes) is:",
  "options": [
    "Mitochondria",
    "Endoplasmic reticulum",
    "Ribosome",
    "Golgi complex"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'No organelles, like the ones in eukaryotes, are found in prokaryotic cells except for ribosomes.' Ribosomes are the only organelles common to both prokaryotic and eukaryotic cells. All other listed options are membrane-bound organelles found only in eukaryotes."
},
{
  "id": 80,
  "topic": "Prokaryotic Cells",
  "q": "<b>Assertion (A):</b> Prokaryotic cells have inclusions as unique structures.<br><b>Reason (R):</b> Prokaryotic cells have membrane-bound organelles like eukaryotes.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – NCERT states 'Prokaryotes have something unique in the form of inclusions.' Reason is FALSE – prokaryotic cells LACK membrane-bound organelles like those in eukaryotes. Ribosomes are the only exception and they are non-membrane bound."
},
{
  "id": 81,
  "topic": "Prokaryotic Cells",
  "q": "The cell wall of bacteria:",
  "options": [
    "Is selectively permeable in nature",
    "Determines the shape of the cell",
    "Contains pigments for photosynthesis",
    "Helps in DNA replication"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The cell wall determines the shape of the cell and provides a strong structural support to prevent the bacterium from bursting or collapsing.' Selective permeability is a function of the plasma membrane, not cell wall. Pigments are in chromatophores. DNA replication is aided by mesosomes."
},
{
  "id": 82,
  "topic": "Prokaryotic Cells",
  "q": "The plasma membrane of prokaryotes is:",
  "options": [
    "Freely permeable to all substances",
    "Structurally different from that of eukaryotes",
    "Selectively permeable and structurally similar to that of eukaryotes",
    "Absent in all prokaryotes"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The plasma membrane is selectively permeable in nature and interacts with the outside world. This membrane is similar structurally to that of the eukaryotes.' Two key points: (1) selectively permeable, and (2) structurally similar to eukaryotic plasma membrane."
},
{
  "id": 83,
  "topic": "Prokaryotic Cells",
  "q": "Consider the following structures and their compositions:<br>(a) Pili – Special protein<br>(b) Fimbriae – Bristle-like fibres<br>(c) Flagella – Thin filamentous extensions<br>(d) Glycocalyx – Always thick and tough<br>Which of the above are <b>correctly</b> described?",
  "options": [
    "(a), (b) and (c) only",
    "(a), (b) and (d) only",
    "(b), (c) and (d) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Statements (a), (b), and (c) are correct as per NCERT. Statement (d) is INCORRECT – glycocalyx is NOT always thick and tough. It 'could be a loose sheath called slime layer in some, while in others it may be thick and tough, called the capsule.' It varies in composition and thickness."
},
{
  "id": 84,
  "topic": "Prokaryotic Cells",
  "q": "Which of the following is <b>NOT</b> a function of mesosomes as stated in NCERT?",
  "options": [
    "Secretion processes",
    "Increasing the surface area of plasma membrane",
    "Motility of the bacterial cell",
    "Enzymatic content"
  ],
  "correct": 2,
  "explanation": "NCERT lists mesosome functions as: cell wall formation, DNA replication, distribution to daughter cells, respiration, secretion processes, increasing surface area, and enzymatic content. Motility is the function of FLAGELLA, not mesosomes. This is a frequently tested distinction."
},
{
  "id": 85,
  "topic": "Prokaryotic Cells",
  "q": "PPLO stands for:",
  "options": [
    "Pleuro Pneumonia Like Organelles",
    "Pleuro Pneumonia Like Organisms",
    "Plasma Pneumonia Like Organisms",
    "Pleuro Pulmonary Like Organisms"
  ],
  "correct": 1,
  "explanation": "PPLO stands for Pleuro Pneumonia Like Organisms as stated in NCERT. They are among the prokaryotic organisms along with bacteria, blue-green algae, and mycoplasma. Students often confuse 'Organisms' with 'Organelles' – a common NEET trap."
},
{
  "id": 86,
  "topic": "Prokaryotic Cells",
  "q": "Consider the following statements about the cell envelope of bacteria:<br>(i) It consists of a tightly bound three-layered structure.<br>(ii) Each layer performs distinct functions independently.<br>(iii) All three layers act together as a single protective unit.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (iii)",
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 3,
  "explanation": "All three statements are correct. NCERT states the cell envelope is a 'tightly bound three layered structure' (i), 'each layer of the envelope performs distinct function' (ii), and 'they act together as a single protective unit' (iii). Note: performing distinct functions AND acting together are NOT contradictory."
},
{
  "id": 87,
  "topic": "Prokaryotic Cells",
  "q": "A comma-shaped bacterium is termed as:",
  "options": [
    "Bacillus",
    "Spirillum",
    "Coccus",
    "Vibrio"
  ],
  "correct": 3,
  "explanation": "As per NCERT, the four basic shapes are: bacillus (rod-like), coccus (spherical), vibrio (comma-shaped), and spirillum (spiral). Vibrio = comma-shaped. The most common error is confusing vibrio with spirillum."
},
{
  "id": 88,
  "topic": "Prokaryotic Cells",
  "q": "<b>Assertion (A):</b> Mycoplasma lacks a cell wall.<br><b>Reason (R):</b> All prokaryotes have a cell wall surrounding the cell membrane.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "Both A and R are false"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – Mycoplasma is the exception among prokaryotes that lacks a cell wall. Reason is FALSE – NCERT states 'All prokaryotes have a cell wall surrounding the cell membrane EXCEPT in mycoplasma.' The word 'except' makes R an incorrect generalization."
},
{
  "id": 89,
  "topic": "Prokaryotic Cells",
  "q": "Chromatophores in cyanobacteria are:",
  "options": [
    "Membranous extensions of the cell wall containing enzymes",
    "Membranous extensions into the cytoplasm containing pigments",
    "Non-membranous structures containing DNA",
    "Part of the flagellar apparatus"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'In some prokaryotes like cyanobacteria, there are other membranous extensions into the cytoplasm called chromatophores which contain pigments.' They are membranous extensions (not cell wall) and contain pigments (not DNA or enzymes specifically)."
},
{
  "id": 90,
  "topic": "Prokaryotic Cells",
  "q": "Which of the following statements about prokaryotic cells is <b>correct</b>?",
  "options": [
    "They have a well-defined nucleus enveloped by a nuclear membrane",
    "They multiply more slowly than eukaryotic cells",
    "The organisation of the prokaryotic cell is fundamentally similar even though they exhibit a wide variety of shapes and functions",
    "They always lack any circular DNA"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The organisation of the prokaryotic cell is fundamentally similar even though prokaryotes exhibit a wide variety of shapes and functions.' Option A is wrong – no well-defined nucleus. Option B is wrong – they multiply MORE RAPIDLY. Option D is wrong – they have circular genomic DNA and plasmids."
},
{
  "id": 91,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "The prokaryotic ribosome is made of two subunits with sedimentation coefficients of:",
  "options": [
    "40S and 60S",
    "30S and 50S",
    "40S and 50S",
    "30S and 60S"
  ],
  "correct": 1,
  "explanation": "Prokaryotic ribosomes are 70S, made of two subunits – 50S (large) and 30S (small). Eukaryotic ribosomes are 80S with 60S and 40S subunits. This is one of the most frequently tested NEET facts. Remember: sedimentation coefficients are NOT additive (50+30 ≠ 80, they give 70S)."
},
{
  "id": 92,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "In prokaryotes, ribosomes are associated with:",
  "options": [
    "Nuclear membrane",
    "Endoplasmic reticulum",
    "Plasma membrane of the cell",
    "Cell wall"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In prokaryotes, ribosomes are associated with the plasma membrane of the cell.' Prokaryotes lack nuclear membrane and ER. In eukaryotes, ribosomes are found on rough ER and free in cytoplasm. This association with plasma membrane is unique to prokaryotes."
},
{
  "id": 93,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "The size of prokaryotic ribosomes is approximately:",
  "options": [
    "10 nm by 15 nm",
    "20 nm by 25 nm",
    "15 nm by 20 nm",
    "25 nm by 30 nm"
  ],
  "correct": 2,
  "explanation": "As per NCERT, prokaryotic ribosomes are 'about 15 nm by 20 nm in size.' This is a direct factual question frequently asked in NEET. Students often confuse this with other organelle sizes."
},
{
  "id": 94,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "A chain formed by several ribosomes attached to a single mRNA is called:",
  "options": [
    "Polysome or polyribosome",
    "Ribosomal RNA complex",
    "Nucleosome",
    "Mesosome"
  ],
  "correct": 0,
  "explanation": "As per NCERT, 'Several ribosomes may attach to a single mRNA and form a chain called polyribosomes or polysome.' The ribosomes of a polysome translate the mRNA into proteins. Nucleosome is a DNA-histone complex, and mesosome is a plasma membrane extension in prokaryotes."
},
{
  "id": 95,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Consider the following statements about polysomes:<br>(i) Several ribosomes attach to multiple mRNAs to form a polysome.<br>(ii) The ribosomes of a polysome translate the mRNA into proteins.<br>(iii) Polysomes increase the efficiency of protein synthesis.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 2,
  "explanation": "Statement (i) is INCORRECT – several ribosomes attach to a SINGLE mRNA (not multiple mRNAs) to form a polysome. Statement (ii) is correct – NCERT states polysomes translate mRNA into proteins. Statement (iii) is correct – multiple ribosomes on one mRNA increases translational efficiency. Classic word-swap trap."
},
{
  "id": 96,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Inclusion bodies in prokaryotic cells are characterised by all of the following <b>EXCEPT</b>:",
  "options": [
    "They store reserve material",
    "They are not bound by any membrane system",
    "They lie free in the cytoplasm",
    "They are bound by a single membrane"
  ],
  "correct": 3,
  "explanation": "As per NCERT, inclusion bodies 'are not bound by any membrane system and lie free in the cytoplasm.' Option D is INCORRECT because inclusion bodies are specifically stated to be NON-membrane bound. This is a defining characteristic that distinguishes them from eukaryotic organelles."
},
{
  "id": 97,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Which of the following is <b>NOT</b> an example of inclusion bodies mentioned in NCERT?",
  "options": [
    "Phosphate granules",
    "Cyanophycean granules",
    "Glycogen granules",
    "Starch granules"
  ],
  "correct": 3,
  "explanation": "NCERT mentions phosphate granules, cyanophycean granules, and glycogen granules as examples of inclusion bodies. Starch granules are NOT mentioned in the NCERT text as prokaryotic inclusion bodies. Starch is typically stored in plant cell plastids (eukaryotes)."
},
{
  "id": 98,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Gas vacuoles are found in:",
  "options": [
    "All prokaryotic cells",
    "Only in blue-green bacteria",
    "Blue-green and purple and green photosynthetic bacteria",
    "Only in eukaryotic plant cells"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Gas vacuoles are found in blue green and purple and green photosynthetic bacteria.' They are NOT found in all prokaryotes or only in blue-green bacteria. NEET often tests whether students remember all three groups – blue-green, purple, AND green photosynthetic bacteria."
},
{
  "id": 99,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "<b>Assertion (A):</b> The sedimentation coefficient of the prokaryotic ribosome is 70S.<br><b>Reason (R):</b> The sedimentation coefficients of the two subunits (50S and 30S) are directly additive.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – prokaryotic ribosomes are 70S. Reason is FALSE – sedimentation coefficients are NOT directly additive (50+30=80, not 70). The 'S' value depends on size, shape, and density and is not a simple arithmetic sum. This is one of the most classic conceptual traps in NEET."
},
{
  "id": 100,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "The eukaryotes include all of the following <b>EXCEPT</b>:",
  "options": [
    "Protists",
    "Fungi",
    "Cyanobacteria",
    "Animals"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The eukaryotes include all the protists, plants, animals and fungi.' Cyanobacteria (blue-green algae) are PROKARYOTES, not eukaryotes. This is a frequently tested distinction in NEET – despite the name 'algae,' cyanobacteria are prokaryotic."
},
{
  "id": 101,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Extensive compartmentalisation of cytoplasm in eukaryotic cells is achieved through:",
  "options": [
    "Presence of inclusion bodies",
    "Presence of cell wall",
    "Presence of membrane-bound organelles",
    "Presence of ribosomes"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In eukaryotic cells there is an extensive compartmentalisation of cytoplasm through the presence of membrane bound organelles.' Inclusion bodies are prokaryotic, ribosomes are non-membrane bound, and cell wall is not involved in cytoplasmic compartmentalisation."
},
{
  "id": 102,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Which of the following structures is present in plant cells but absent in animal cells?<br>(i) Cell wall<br>(ii) Plastids<br>(iii) Large central vacuole<br>(iv) Centrioles<br>Select the <b>correct</b> option:",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(ii), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "As per NCERT, plant cells possess cell wall (i), plastids (ii), and a large central vacuole (iii) which are absent in animal cells. Centrioles (iv) are present in ANIMAL cells and absent in almost all plant cells – so (iv) is the opposite. This is a very common NEET question."
},
{
  "id": 103,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Regarding centrioles, NCERT states that they are:",
  "options": [
    "Present in all plant and animal cells",
    "Absent in all plant cells without exception",
    "Absent in almost all plant cells",
    "Present only in prokaryotic cells"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'animal cells have centrioles which are absent in ALMOST ALL plant cells.' The phrase 'almost all' is critical – it means some plant cells (like those of lower plants) may have centrioles. NEET frequently tests this subtle NCERT wording. Option B says 'all' which is too absolute."
},
{
  "id": 104,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "<b>Assertion (A):</b> Eukaryotic cells possess an organised nucleus with a nuclear envelope.<br><b>Reason (R):</b> Prokaryotic cells also have their genetic material organised into chromosomes within a nuclear envelope.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – NCERT states eukaryotic cells have 'an organised nucleus with a nuclear envelope.' Reason is FALSE – prokaryotic cells do NOT have a nuclear envelope, and their genetic material (naked circular DNA) is NOT organised into chromosomes in the eukaryotic sense."
},
{
  "id": 105,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "In eukaryotic cells, the genetic material is organised into:",
  "options": [
    "Plasmids",
    "Nucleoid",
    "Chromosomes",
    "Inclusion bodies"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Their genetic material is organised into chromosomes.' Plasmids are small circular DNA in prokaryotes. Nucleoid is the region of genetic material in prokaryotes without a membrane. Inclusion bodies are reserve materials in prokaryotes."
},
{
  "id": 106,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Consider the following statements:<br>(i) Ribosomes are the site of protein synthesis.<br>(ii) 50S and 30S subunits together form 80S prokaryotic ribosomes.<br>(iii) Ribosomes in prokaryotes are associated with the plasma membrane.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 2,
  "explanation": "Statement (ii) is INCORRECT – 50S and 30S subunits form 70S prokaryotic ribosomes, NOT 80S. 80S ribosomes are eukaryotic (60S + 40S). Statements (i) and (iii) are correct as per NCERT. This is the most classic numerical trap in cell biology for NEET."
},
{
  "id": 107,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Which of the following is a characteristic feature that distinguishes eukaryotic cells from prokaryotic cells?",
  "options": [
    "Presence of ribosomes",
    "Presence of cytoplasm",
    "Extensive compartmentalisation of cytoplasm through membrane-bound organelles",
    "Presence of genetic material"
  ],
  "correct": 2,
  "explanation": "Ribosomes (A), cytoplasm (B), and genetic material (D) are found in BOTH prokaryotic and eukaryotic cells. The distinguishing feature of eukaryotic cells is the 'extensive compartmentalisation of cytoplasm through the presence of membrane bound organelles' as stated in NCERT."
},
{
  "id": 108,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Reserve material in prokaryotic cells is stored as:",
  "options": [
    "Membrane-bound vesicles in the cytoplasm",
    "Inclusion bodies that lie free in the cytoplasm",
    "Vacuoles bound by tonoplast",
    "Granules within the nucleus"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Reserve material in prokaryotic cells are stored in the cytoplasm in the form of inclusion bodies. These are not bound by any membrane system and lie free in the cytoplasm.' They are NOT membrane-bound, NOT in vacuoles, and NOT in the nucleus."
},
{
  "id": 109,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Eukaryotic cells have complex locomotory and cytoskeletal structures. Which of the following is <b>NOT</b> a feature of eukaryotic cells as per NCERT?",
  "options": [
    "Organised nucleus with nuclear envelope",
    "Membrane-bound organelles",
    "Complex locomotory and cytoskeletal structures",
    "Presence of mesosomes"
  ],
  "correct": 3,
  "explanation": "Mesosomes are characteristic of PROKARYOTIC cells (formed by extensions of plasma membrane). Eukaryotic cells have an organised nucleus (A), membrane-bound organelles (B), and complex locomotory and cytoskeletal structures (C) – all mentioned in NCERT."
},
{
  "id": 110,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "<b>Assertion (A):</b> Inclusion bodies in prokaryotes are not bound by any membrane system.<br><b>Reason (R):</b> Prokaryotic cells generally lack membrane-bound organelles.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Inclusion bodies are indeed not membrane-bound (A is true). Prokaryotic cells lack membrane-bound organelles (R is true), and this general absence of membrane systems in prokaryotes explains why their reserve materials (inclusion bodies) are also non-membrane bound. R correctly explains A."
},
{
  "id": 111,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Consider the following differences between plant and animal cells:<br>(i) Plant cells have cell wall; animal cells lack cell wall.<br>(ii) Plant cells have plastids; animal cells lack plastids.<br>(iii) Plant cells have centrioles; animal cells lack centrioles.<br>(iv) Plant cells have a large central vacuole; animal cells lack it.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i), (ii) and (iv) only",
    "(i), (ii) and (iii) only",
    "(i), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Statement (iii) is INCORRECT – it is REVERSED. Animal cells have centrioles, and centrioles are absent in almost all plant cells. Statements (i), (ii), and (iv) are correct as per NCERT. This reversal of plant/animal features is one of the most common NEET traps."
},
{
  "id": 112,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "The function of ribosomes in a polysome is to:",
  "options": [
    "Replicate DNA",
    "Translate mRNA into proteins",
    "Transcribe DNA into mRNA",
    "Synthesize lipids"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The ribosomes of a polysome translate the mRNA into proteins.' Ribosomes are the site of protein synthesis (translation). DNA replication and transcription occur in the nucleus (eukaryotes) or nucleoid region (prokaryotes). Lipid synthesis occurs in smooth ER."
},
{
  "id": 113,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Cyanophycean granules are an example of:",
  "options": [
    "Membrane-bound organelles",
    "Gas vacuoles",
    "Inclusion bodies",
    "Mesosomes"
  ],
  "correct": 2,
  "explanation": "As per NCERT, cyanophycean granules are specifically mentioned as an example of inclusion bodies along with phosphate granules and glycogen granules. They are non-membrane bound and lie free in the cytoplasm of prokaryotic cells."
},
{
  "id": 114,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Which of the following statements is <b>INCORRECT</b> about eukaryotic cells?",
  "options": [
    "All eukaryotic cells are identical in structure",
    "Eukaryotic cells possess an organised nucleus with a nuclear envelope",
    "Eukaryotic cells have membrane-bound organelles",
    "Eukaryotic genetic material is organised into chromosomes"
  ],
  "correct": 0,
  "explanation": "As per NCERT, 'All eukaryotic cells are NOT identical.' Plant and animal cells differ significantly. Option A is INCORRECT. Options B, C, and D are all correct features of eukaryotic cells as stated in NCERT."
},
{
  "id": 115,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "When 50S and 30S ribosomal subunits come together in prokaryotes, the complete ribosome formed has a sedimentation coefficient of:",
  "options": [
    "80S",
    "100S",
    "60S",
    "70S"
  ],
  "correct": 3,
  "explanation": "As per NCERT, '50S and 30S units which when present together form 70S prokaryotic ribosomes.' Sedimentation coefficients are NOT arithmetically additive because S values depend on size, shape, and molecular weight. 50S + 30S = 70S (not 80S). 80S is the eukaryotic ribosome."
},
{
  "id": 116,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Consider the following:<br>(a) Protists<br>(b) Bacteria<br>(c) Plants<br>(d) Fungi<br>(e) Animals<br>Which of the above are classified as eukaryotes?",
  "options": [
    "(a), (b), (c) and (d)",
    "(a), (c), (d) and (e)",
    "(b), (c), (d) and (e)",
    "All of the above"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The eukaryotes include all the protists, plants, animals and fungi.' Bacteria are PROKARYOTES, not eukaryotes. So (a), (c), (d), and (e) are eukaryotes. Option B is correct."
},
{
  "id": 117,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "<b>Assertion (A):</b> All eukaryotic cells have centrioles.<br><b>Reason (R):</b> Centrioles are present in animal cells and absent in almost all plant cells.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  "correct": 2,
  "explanation": "Assertion is FALSE – NOT all eukaryotic cells have centrioles; they are absent in almost all plant cells. Reason is TRUE – NCERT states 'animal cells have centrioles which are absent in almost all plant cells.' R directly contradicts the generalization in A, confirming A is false."
},
{
  "id": 118,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Gas vacuoles found in photosynthetic bacteria help in:",
  "options": [
    "Protein synthesis",
    "Buoyancy regulation",
    "DNA replication",
    "Cell wall formation"
  ],
  "correct": 1,
  "explanation": "Gas vacuoles in blue-green and purple and green photosynthetic bacteria help in buoyancy regulation, allowing the organisms to float at optimal depths for photosynthesis. While NCERT mentions their presence, their functional significance (buoyancy) is a well-established concept tested in NEET."
},
{
  "id": 119,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Which of the following correctly describes the nature of inclusion bodies in prokaryotic cells?",
  "options": [
    "They are membrane-bound storage organelles",
    "They are non-membrane bound reserve materials lying free in the cytoplasm",
    "They are part of the cell envelope",
    "They are always composed of lipids"
  ],
  "correct": 1,
  "explanation": "As per NCERT, inclusion bodies 'are not bound by any membrane system and lie free in the cytoplasm.' They store reserve material and include phosphate granules, cyanophycean granules, and glycogen granules – not always lipids. They are NOT membrane-bound and NOT part of the cell envelope."
},
{
  "id": 120,
  "topic": "Ribosomes and Inclusion Bodies / Eukaryotic Cells",
  "q": "Which of the following is a feature common to <b>BOTH</b> plant and animal eukaryotic cells?",
  "options": [
    "Cell wall",
    "Plastids",
    "Membrane-bound organelles",
    "Large central vacuole"
  ],
  "correct": 2,
  "explanation": "Cell wall (A), plastids (B), and large central vacuole (D) are present in plant cells but absent in animal cells. Membrane-bound organelles (C) are present in BOTH plant and animal eukaryotic cells as they are a defining feature of all eukaryotic cells."
},
{
  "id": 121,
  "topic": "Cell Membrane",
  "q": "The detailed structure of the cell membrane was studied after the advent of:",
  "options": [
    "Simple microscope",
    "Compound microscope",
    "Electron microscope in the 1950s",
    "Phase contrast microscope in the 1960s"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The detailed structure of the membrane was studied only after the advent of the electron microscope in the 1950s.' The electron microscope provided the resolution necessary to visualize membrane ultrastructure. The decade (1950s) is a commonly tested factual detail."
},
{
  "id": 122,
  "topic": "Cell Membrane",
  "q": "Chemical studies on cell membrane composition were carried out especially in:",
  "options": [
    "Human nerve cells",
    "Human red blood cells (RBCs)",
    "Plant epidermal cells",
    "Bacterial cells"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'chemical studies on the cell membrane, especially in human red blood cells (RBCs), enabled the scientists to deduce the possible structure of plasma membrane.' RBCs were ideal because they have a simple plasma membrane without organellar membranes to confound analysis."
},
{
  "id": 123,
  "topic": "Cell Membrane",
  "q": "The cell membrane is mainly composed of:",
  "options": [
    "Lipids and carbohydrates",
    "Proteins and carbohydrates",
    "Lipids and proteins",
    "Nucleic acids and lipids"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'These studies showed that the cell membrane is mainly composed of lipids and proteins.' While carbohydrates are also present, the MAIN components are lipids and proteins. The word 'mainly' is key – NEET tests precise NCERT wording."
},
{
  "id": 124,
  "topic": "Cell Membrane",
  "q": "In the phospholipid bilayer of the cell membrane, the arrangement of lipids is such that:",
  "options": [
    "Polar heads face inward and hydrophobic tails face outward",
    "Polar heads face the outer sides and hydrophobic tails face the inner part",
    "Both polar heads and hydrophobic tails face outward",
    "Hydrophobic tails face the aqueous environment"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the lipids are arranged within the membrane with the polar head towards the outer sides and the hydrophobic tails towards the inner part.' This arrangement protects the nonpolar tails from the aqueous environment. Option A reverses the arrangement – a classic NEET trap."
},
{
  "id": 125,
  "topic": "Cell Membrane",
  "q": "In the human erythrocyte membrane, the approximate percentage of protein and lipid respectively is:",
  "options": [
    "40% and 52%",
    "52% and 40%",
    "60% and 30%",
    "50% and 50%"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the membrane of the erythrocyte has approximately 52 per cent protein and 40 per cent lipids.' Protein (52%) > Lipid (40%) in human RBC membrane. Students often reverse these values – NEET tests this specific ratio frequently."
},
{
  "id": 126,
  "topic": "Cell Membrane",
  "q": "Consider the following statements about membrane proteins:<br>(i) Peripheral proteins are partially buried in the membrane.<br>(ii) Integral proteins are partially or totally buried in the membrane.<br>(iii) Membrane proteins are classified based on the ease of extraction.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "Only (i) and (ii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (i) is INCORRECT – peripheral proteins LIE ON THE SURFACE of the membrane, they are NOT buried. Integral proteins are partially or totally buried (ii is correct). Classification is based on ease of extraction (iii is correct). Confusing peripheral with integral protein positions is a very common NEET error."
},
{
  "id": 127,
  "topic": "Cell Membrane",
  "q": "The Fluid Mosaic Model of cell membrane was proposed by:",
  "options": [
    "Schleiden and Schwann",
    "Watson and Crick",
    "Singer and Nicolson (1972)",
    "Robertson (1959)"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'An improved model of the structure of cell membrane was proposed by Singer and Nicolson (1972) widely accepted as fluid mosaic model.' This is one of the most fundamental NEET facts. Robertson proposed the unit membrane model, Watson-Crick proposed DNA structure."
},
{
  "id": 128,
  "topic": "Cell Membrane",
  "q": "According to the Fluid Mosaic Model, the lateral movement of proteins within the bilayer is enabled by:",
  "options": [
    "The rigid nature of the lipid bilayer",
    "The quasi-fluid nature of lipid",
    "The presence of carbohydrates",
    "The presence of cholesterol only"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the quasi-fluid nature of lipid enables lateral movement of proteins within the overall bilayer.' The key word is 'quasi-fluid' (semi-fluid), not rigid. Cholesterol modulates fluidity but the NCERT specifically attributes lateral movement to the quasi-fluid nature of lipids."
},
{
  "id": 129,
  "topic": "Cell Membrane",
  "q": "The ability of membrane components to move within the membrane is measured as its:",
  "options": [
    "Permeability",
    "Selectivity",
    "Viscosity",
    "Fluidity"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'This ability to move within the membrane is measured as its fluidity.' Fluidity specifically refers to the movement of membrane components (lipids and proteins) within the bilayer. Permeability and selectivity relate to transport, not movement of components."
},
{
  "id": 130,
  "topic": "Cell Membrane",
  "q": "The fluid nature of the cell membrane is important for all of the following <b>EXCEPT</b>:",
  "options": [
    "Cell growth",
    "DNA replication",
    "Endocytosis",
    "Formation of intercellular junctions"
  ],
  "correct": 1,
  "explanation": "As per NCERT, the fluid nature is important for 'cell growth, formation of intercellular junctions, secretion, endocytosis, cell division etc.' DNA replication is NOT mentioned as a function dependent on membrane fluidity. DNA replication occurs in the nucleus/nucleoid region."
},
{
  "id": 131,
  "topic": "Cell Membrane",
  "q": "<b>Assertion (A):</b> The plasma membrane is selectively permeable.<br><b>Reason (R):</b> All molecules can freely pass through the membrane without any energy requirement.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – NCERT states 'The membrane is selectively permeable to some molecules present on either side of it.' Reason is FALSE – NOT all molecules can freely pass; polar molecules need carrier proteins, and active transport requires ATP. The word 'all' and 'freely' make R incorrect."
},
{
  "id": 132,
  "topic": "Cell Membrane",
  "q": "Passive transport across the membrane is characterised by:",
  "options": [
    "Movement against concentration gradient with ATP",
    "Movement from lower to higher concentration",
    "Movement without any requirement of energy",
    "Movement exclusively through carrier proteins"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Many molecules can move briefly across the membrane without any requirement of energy and this is called the passive transport.' It occurs along the concentration gradient (higher to lower). Active transport is against the gradient with ATP. Not all passive transport requires carriers."
},
{
  "id": 133,
  "topic": "Cell Membrane",
  "q": "Movement of water by diffusion across the membrane is called:",
  "options": [
    "Plasmolysis",
    "Simple diffusion",
    "Active transport",
    "Osmosis"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'Movement of water by diffusion is called osmosis.' Osmosis is specifically the diffusion of WATER molecules across a selectively permeable membrane from higher water concentration to lower water concentration. Simple diffusion is for neutral solutes."
},
{
  "id": 134,
  "topic": "Cell Membrane",
  "q": "Neutral solutes move across the membrane by:",
  "options": [
    "Active transport against the concentration gradient",
    "Osmosis from lower to higher concentration",
    "Simple diffusion along the concentration gradient",
    "Endocytosis"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Neutral solutes may move across the membrane by the process of simple diffusion along the concentration gradient, i.e., from higher concentration to the lower.' This is a form of passive transport requiring no energy."
},
{
  "id": 135,
  "topic": "Cell Membrane",
  "q": "Polar molecules cannot pass through the nonpolar lipid bilayer and therefore require:",
  "options": [
    "ATP energy directly",
    "A carrier protein of the membrane",
    "Cholesterol molecules for passage",
    "Carbohydrate channels"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'As the polar molecules cannot pass through the nonpolar lipid bilayer, they require a carrier protein of the membrane to facilitate their transport across the membrane.' This is facilitated transport. ATP is needed for active transport, not facilitated transport."
},
{
  "id": 136,
  "topic": "Cell Membrane",
  "q": "Active transport is characterised by all of the following <b>EXCEPT</b>:",
  "options": [
    "Transport against concentration gradient",
    "Energy dependent process",
    "ATP is utilised",
    "Movement from higher to lower concentration"
  ],
  "correct": 3,
  "explanation": "Option D describes PASSIVE transport (diffusion), not active transport. As per NCERT, active transport involves movement 'from lower to the higher concentration' (against gradient), is energy dependent, and uses ATP. The Na⁺/K⁺ Pump is a classic example."
},
{
  "id": 137,
  "topic": "Cell Membrane",
  "q": "An example of active transport mentioned in NCERT is:",
  "options": [
    "Simple diffusion",
    "Osmosis",
    "Na⁺/K⁺ Pump",
    "Facilitated diffusion"
  ],
  "correct": 2,
  "explanation": "As per NCERT, active transport is 'an energy dependent process, in which ATP is utilised and is called active transport, e.g., Na⁺/K⁺ Pump.' Simple diffusion and osmosis are passive transport. Facilitated diffusion uses carrier proteins but does not require ATP."
},
{
  "id": 138,
  "topic": "Cell Membrane",
  "q": "Consider the following statements:<br>(i) The cell membrane contains phospholipids and cholesterol.<br>(ii) The cell membrane contains proteins and carbohydrates.<br>(iii) The ratio of protein and lipid is the same in all cell types.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct – NCERT mentions phospholipids, cholesterol, proteins, and carbohydrates. Statement (iii) is INCORRECT – NCERT clearly states 'The ratio of protein and lipid varies considerably in different cell types.' The RBC example (52% protein, 40% lipid) is given."
},
{
  "id": 139,
  "topic": "Cell Membrane",
  "q": "<b>Assertion (A):</b> The nonpolar tails of phospholipids are protected from the aqueous environment.<br><b>Reason (R):</b> The hydrophobic tails are arranged towards the inner part of the bilayer with polar heads facing outward.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. NCERT states that the arrangement 'ensures that the nonpolar tail of saturated hydrocarbons is protected from the aqueous environment' (A is true). This protection is achieved because 'hydrophobic tails face the inner part' while 'polar heads face outer sides' (R is true and correctly explains A)."
},
{
  "id": 140,
  "topic": "Cell Membrane",
  "q": "Which of the following is <b>NOT</b> mentioned in NCERT as a function dependent on the fluid nature of the membrane?",
  "options": [
    "Secretion",
    "Cell division",
    "Protein synthesis",
    "Endocytosis"
  ],
  "correct": 2,
  "explanation": "NCERT lists cell growth, formation of intercellular junctions, secretion, endocytosis, and cell division as functions dependent on membrane fluidity. Protein synthesis occurs on ribosomes and is NOT dependent on membrane fluidity. This is a subtle but important distinction."
},
{
  "id": 141,
  "topic": "Cell Membrane",
  "q": "In the Fluid Mosaic Model, the term 'mosaic' refers to:",
  "options": [
    "The bilayer arrangement of phospholipids",
    "The pattern of proteins embedded in the lipid bilayer like tiles in a mosaic",
    "The movement of lipids across the membrane",
    "The rigid structure of the membrane"
  ],
  "correct": 1,
  "explanation": "In the Fluid Mosaic Model, 'fluid' refers to the quasi-fluid nature of lipids enabling lateral movement, and 'mosaic' refers to the pattern created by various proteins (integral and peripheral) embedded in the lipid bilayer, resembling tiles in a mosaic pattern."
},
{
  "id": 142,
  "topic": "Cell Membrane",
  "q": "Integral proteins of the cell membrane are:",
  "options": [
    "Found lying on the surface of the membrane",
    "Easily extracted from the membrane",
    "Partially or totally buried in the membrane",
    "Found only on the outer surface"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'the integral proteins are partially or totally buried in the membrane.' Peripheral proteins lie on the surface and are more easily extracted. The classification is based on 'ease of extraction.' Integral proteins are deeply embedded and harder to extract."
},
{
  "id": 143,
  "topic": "Cell Membrane",
  "q": "Which of the following transport mechanisms moves molecules from lower to higher concentration?",
  "options": [
    "Simple diffusion",
    "Osmosis",
    "Facilitated diffusion",
    "Active transport"
  ],
  "correct": 3,
  "explanation": "As per NCERT, in active transport 'a few ions or molecules are transported across the membrane against their concentration gradient, i.e., from lower to the higher concentration.' Simple diffusion, osmosis, and facilitated diffusion all move substances from higher to lower concentration (passive)."
},
{
  "id": 144,
  "topic": "Cell Membrane",
  "q": "Consider the following transport processes:<br>(a) Simple diffusion – (i) Requires ATP<br>(b) Osmosis – (ii) Diffusion of water<br>(c) Active transport – (iii) Along concentration gradient of neutral solutes<br>Select the correct matching:",
  "options": [
    "a-(iii), b-(ii), c-(i)",
    "a-(ii), b-(iii), c-(i)",
    "a-(i), b-(ii), c-(iii)",
    "a-(iii), b-(i), c-(ii)"
  ],
  "correct": 0,
  "explanation": "Simple diffusion = along concentration gradient of neutral solutes (iii). Osmosis = diffusion of water (ii). Active transport = requires ATP (i). The correct match is a-(iii), b-(ii), c-(i). This matching is directly from NCERT definitions."
},
{
  "id": 145,
  "topic": "Cell Membrane",
  "q": "<b>Assertion (A):</b> In the human RBC membrane, protein content is higher than lipid content.<br><b>Reason (R):</b> The ratio of protein and lipid is constant across all cell types.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – human RBC membrane has approximately 52% protein and 40% lipid, so protein > lipid. Reason is FALSE – NCERT states the ratio 'varies considerably in different cell types.' The ratio is NOT constant. This tests both factual recall and careful reading."
},
{
  "id": 146,
  "topic": "Cell Membrane",
  "q": "In addition to phospholipids, the cell membrane also contains:",
  "options": [
    "Only cholesterol",
    "Only proteins",
    "Cholesterol, proteins, and carbohydrates",
    "Only nucleic acids"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the membrane contains phospholipids (major lipid), cholesterol (additional lipid), proteins, and carbohydrates. NCERT mentions each separately: 'membrane also contains cholesterol' and 'cell membranes also possess protein and carbohydrate.' All three additional components are mentioned."
},
{
  "id": 147,
  "topic": "Cell Membrane",
  "q": "Which of the following statements about osmosis is <b>correct</b>?",
  "options": [
    "It is the movement of solute molecules across the membrane",
    "It is the diffusion of water from lower to higher water concentration",
    "It is the movement of water by diffusion across the membrane",
    "It requires ATP for transport of water"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Movement of water by diffusion is called osmosis.' It involves water molecules (not solutes), moves from higher to lower water concentration, and is a passive process (no ATP required). Option B incorrectly states 'lower to higher.'"
},
{
  "id": 148,
  "topic": "Cell Membrane",
  "q": "The major lipids present in the cell membrane that are arranged in a bilayer are:",
  "options": [
    "Cholesterol",
    "Triglycerides",
    "Phospholipids",
    "Glycolipids"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The major lipids are phospholipids that are arranged in a bilayer.' While cholesterol is also present in the membrane, phospholipids are specifically stated as the MAJOR lipids forming the bilayer structure."
},
{
  "id": 149,
  "topic": "Cell Membrane",
  "q": "Which of the following is an <b>INCORRECT</b> statement about membrane transport?",
  "options": [
    "Passive transport requires no energy",
    "Simple diffusion moves neutral solutes along the concentration gradient",
    "Active transport moves molecules from higher to lower concentration using ATP",
    "Polar molecules require carrier proteins for transport"
  ],
  "correct": 2,
  "explanation": "Option C is INCORRECT – active transport moves molecules from LOWER to HIGHER concentration (against the gradient), not higher to lower. Higher to lower is passive transport. NCERT states active transport involves transport 'from lower to the higher concentration.' This reversal is one of the most common NEET traps."
},
{
  "id": 150,
  "topic": "Cell Membrane",
  "q": "The classification of membrane proteins into integral and peripheral is based on:",
  "options": [
    "Their molecular weight",
    "Their function in the cell",
    "The ease of extraction from the membrane",
    "Their amino acid composition"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Depending on the ease of extraction, membrane proteins can be classified as integral and peripheral.' Peripheral proteins are easily extracted (loosely attached to surface), while integral proteins are difficult to extract (partially or totally buried). The basis of classification is extraction ease, not weight, function, or composition."
},
{
  "id": 151,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The cell wall is described in NCERT as:",
  "options": [
    "A living flexible structure covering the plasma membrane",
    "A non-living rigid structure forming an outer covering for the plasma membrane",
    "A semi-permeable membrane surrounding the cytoplasm",
    "A fluid structure that changes shape with cell growth"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'a non-living rigid structure called the cell wall forms an outer covering for the plasma membrane of fungi and plants.' Key words: NON-LIVING and RIGID. The plasma membrane is living; the cell wall is not. This distinction is frequently tested in NEET."
},
{
  "id": 152,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Which of the following is <b>NOT</b> a function of the cell wall as per NCERT?",
  "options": [
    "Gives shape to the cell",
    "Protects from mechanical damage and infection",
    "Selective transport of molecules",
    "Provides barrier to undesirable macromolecules"
  ],
  "correct": 2,
  "explanation": "NCERT lists cell wall functions as: gives shape, protects from mechanical damage and infection, helps in cell-to-cell interaction, and provides barrier to undesirable macromolecules. Selective transport of molecules is a function of the PLASMA MEMBRANE, not the cell wall."
},
{
  "id": 153,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The cell wall of algae is made of:<br>(i) Cellulose<br>(ii) Galactans<br>(iii) Mannans<br>(iv) Calcium carbonate<br>(v) Hemicellulose<br>Select the <b>correct</b> combination:",
  "options": [
    "(i), (ii), (iii) and (iv)",
    "(i), (ii), (iv) and (v)",
    "(i), (iii), (iv) and (v)",
    "(i), (ii), (iii) and (v)"
  ],
  "correct": 0,
  "explanation": "As per NCERT, 'Algae have cell wall, made of cellulose, galactans, mannans and minerals like calcium carbonate.' Hemicellulose is a component of OTHER plant cell walls, not algae. This distinction between algal and plant cell wall composition is a frequently tested NEET concept."
},
{
  "id": 154,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The cell wall of plants (other than algae) consists of:",
  "options": [
    "Cellulose, galactans, mannans and calcium carbonate",
    "Cellulose, hemicellulose, pectins and proteins",
    "Cellulose, chitin, pectins and lipids",
    "Cellulose, hemicellulose, galactans and minerals"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'in other plants it consists of cellulose, hemicellulose, pectins and proteins.' Galactans, mannans, and calcium carbonate are components of ALGAL cell walls. Chitin is found in fungal cell walls, not plant cell walls."
},
{
  "id": 155,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The secondary wall of a plant cell is formed on the:",
  "options": [
    "Outer side of the primary wall",
    "Inner side of the primary wall, towards the membrane",
    "Middle lamella region",
    "Outer surface of the middle lamella"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the secondary wall is formed on the inner (towards membrane) side of the cell.' The sequence from outside to inside is: middle lamella → primary wall → secondary wall → plasma membrane. Students often confuse the position of secondary wall."
},
{
  "id": 156,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The middle lamella is mainly composed of:",
  "options": [
    "Calcium carbonate",
    "Cellulose",
    "Calcium pectate",
    "Hemicellulose"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The middle lamella is a layer mainly of calcium pectate which holds or glues the different neighbouring cells together.' Students often confuse calcium pectate with pectin or calcium carbonate. Calcium carbonate is found in algal cell walls."
},
{
  "id": 157,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Plasmodesmata are structures that:",
  "options": [
    "Connect the nucleus to the cell wall",
    "Connect the cytoplasm of neighbouring cells through cell wall and middle lamellae",
    "Connect the ER to the Golgi apparatus",
    "Connect the plasma membrane to the tonoplast"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The cell wall and middle lamellae may be traversed by plasmodesmata which connect the cytoplasm of neighbouring cells.' Plasmodesmata are cytoplasmic bridges that allow communication between adjacent plant cells."
},
{
  "id": 158,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "<b>Assertion (A):</b> The primary wall of a young plant cell is capable of growth.<br><b>Reason (R):</b> As the cell matures, growth capacity gradually diminishes and the secondary wall is formed.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. NCERT states 'the primary wall is capable of growth, which gradually diminishes as the cell matures and the secondary wall is formed.' R correctly explains why the primary wall's growth capacity changes – maturation leads to secondary wall formation."
},
{
  "id": 159,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The endomembrane system includes all of the following <b>EXCEPT</b>:",
  "options": [
    "Endoplasmic reticulum",
    "Golgi complex",
    "Mitochondria",
    "Lysosomes"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The endomembrane system include endoplasmic reticulum, golgi complex, lysosomes and vacuoles. Since the functions of the mitochondria, chloroplast and peroxisomes are not coordinated with the above components, these are not considered as part of the endomembrane system.' Mitochondria are EXCLUDED."
},
{
  "id": 160,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Which of the following organelles are <b>NOT</b> part of the endomembrane system?<br>(i) Mitochondria<br>(ii) Chloroplast<br>(iii) Peroxisomes<br>(iv) Lysosomes<br>(v) Vacuoles",
  "options": [
    "(i), (ii) and (iii)",
    "(i), (ii) and (iv)",
    "(i), (iii) and (v)",
    "(ii), (iv) and (v)"
  ],
  "correct": 0,
  "explanation": "As per NCERT, mitochondria (i), chloroplast (ii), and peroxisomes (iii) are NOT part of the endomembrane system because their functions are not coordinated with the other components. Lysosomes (iv) and vacuoles (v) ARE part of the endomembrane system. This is one of the most frequently tested NEET questions."
},
{
  "id": 161,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The endoplasmic reticulum divides the intracellular space into two distinct compartments namely:",
  "options": [
    "Nuclear and cytoplasmic compartments",
    "Luminal and extra-luminal compartments",
    "Cis and trans compartments",
    "Inner and outer membrane compartments"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'ER divides the intracellular space into two distinct compartments, i.e., luminal (inside ER) and extra luminal (cytoplasm) compartments.' Cis and trans refer to Golgi apparatus faces, not ER compartments."
},
{
  "id": 162,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "RER is frequently observed in cells actively involved in:",
  "options": [
    "Lipid synthesis and steroidal hormone production",
    "Protein synthesis and secretion",
    "Carbohydrate storage",
    "Detoxification of drugs"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'RER is frequently observed in the cells actively involved in protein synthesis and secretion.' RER has ribosomes for protein synthesis. SER is the site of lipid synthesis and steroidal hormone production. This RER vs SER function distinction is extremely high-yield for NEET."
},
{
  "id": 163,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Consider the following statements:<br>(i) RER is continuous with the outer membrane of the nucleus.<br>(ii) SER is the major site for synthesis of lipid.<br>(iii) In animal cells, steroidal hormones are synthesised in RER.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct. Statement (iii) is INCORRECT – NCERT states 'In animal cells lipid-like steroidal hormones are synthesised in SER,' NOT RER. Confusing SER with RER for steroidal hormone synthesis is a classic NEET trap."
},
{
  "id": 164,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Golgi bodies were first observed by:",
  "options": [
    "Robert Brown",
    "Singer and Nicolson",
    "Camillo Golgi (1898)",
    "Rudolf Virchow"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Camillo Golgi (1898) first observed densely stained reticular structures near the nucleus. These were later named Golgi bodies after him.' The year 1898 is a commonly tested factual detail."
},
{
  "id": 165,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The Golgi cisternae are concentrically arranged near the nucleus with:",
  "options": [
    "Convex trans face and concave cis face",
    "Convex cis face (forming face) and concave trans face (maturing face)",
    "Both faces are convex",
    "Both faces are concave"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'distinct convex cis or the forming face and concave trans or the maturing face.' Cis = convex = forming face; Trans = concave = maturing face. Students frequently reverse cis/trans with convex/concave – a very common NEET trap."
},
{
  "id": 166,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Materials from the ER fuse with which face of the Golgi apparatus?",
  "options": [
    "Trans face (maturing face)",
    "Cis face (forming face)",
    "Both cis and trans faces simultaneously",
    "Lateral face of cisternae"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Materials to be packaged in the form of vesicles from the ER fuse with the cis face of the golgi apparatus and move towards the maturing face.' ER vesicles arrive at the CIS (forming) face and processed materials leave from the TRANS (maturing) face."
},
{
  "id": 167,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The Golgi apparatus is an important site of formation of:",
  "options": [
    "Nucleic acids and nucleotides",
    "Glycoproteins and glycolipids",
    "Phospholipids and cholesterol",
    "Steroidal hormones"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Golgi apparatus is the important site of formation of glycoproteins and glycolipids.' Phospholipids and steroidal hormones are synthesised in SER. Nucleic acid synthesis occurs in the nucleus. Glycosylation (adding sugar moieties) is a key Golgi function."
},
{
  "id": 168,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The diameter of Golgi cisternae ranges from:",
  "options": [
    "0.1 µm to 0.5 µm",
    "0.5 µm to 1.0 µm",
    "1.0 µm to 2.0 µm",
    "2.0 µm to 5.0 µm"
  ],
  "correct": 1,
  "explanation": "As per NCERT, Golgi bodies 'consist of many flat, disc-shaped sacs or cisternae of 0.5 µm to 1.0 µm diameter.' This is a direct factual detail from NCERT that can appear in NEET."
},
{
  "id": 169,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "<b>Assertion (A):</b> The Golgi apparatus remains in close association with the endoplasmic reticulum.<br><b>Reason (R):</b> Vesicles from the ER fuse with the cis face of the Golgi apparatus for packaging.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. NCERT explicitly states 'This explains, why the golgi apparatus remains in close association with the endoplasmic reticulum.' The close association (A) is because ER vesicles fuse with the cis face for packaging (R). R directly and correctly explains A."
},
{
  "id": 170,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Lysosomes are formed by the process of packaging in the:",
  "options": [
    "Endoplasmic reticulum",
    "Golgi apparatus",
    "Nucleus",
    "Mitochondria"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'These are membrane bound vesicular structures formed by the process of packaging in the golgi apparatus.' Lysosomes are formed in the Golgi apparatus, not in the ER directly or nucleus."
},
{
  "id": 171,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Lysosomal enzymes are optimally active at:",
  "options": [
    "Neutral pH",
    "Alkaline pH",
    "Acidic pH",
    "Any pH"
  ],
  "correct": 2,
  "explanation": "As per NCERT, lysosomal vesicles are 'very rich in almost all types of hydrolytic enzymes (hydrolases – lipases, proteases, carbohydrases) optimally active at the acidic pH.' The acidic pH of lysosomes (~pH 5) is maintained by proton pumps and is essential for enzyme activity."
},
{
  "id": 172,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Lysosomal enzymes are capable of digesting all of the following <b>EXCEPT</b>:",
  "options": [
    "Carbohydrates",
    "Proteins",
    "Minerals",
    "Nucleic acids"
  ],
  "correct": 2,
  "explanation": "As per NCERT, lysosomal enzymes 'are capable of digesting carbohydrates, proteins, lipids and nucleic acids.' Minerals are inorganic substances that cannot be digested by hydrolytic enzymes. NCERT mentions four substrates: carbohydrates, proteins, lipids, and nucleic acids."
},
{
  "id": 173,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Consider the following hydrolases found in lysosomes:<br>(i) Lipases<br>(ii) Proteases<br>(iii) Carbohydrases<br>(iv) Oxidases<br>Which of the above are mentioned in NCERT as lysosomal enzymes?",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(ii), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "NCERT specifically mentions 'hydrolases – lipases, proteases, carbohydrases' as lysosomal enzymes. Oxidases are NOT mentioned as lysosomal enzymes. Oxidases are found in peroxisomes and mitochondria. Lysosomes specifically contain HYDROLYTIC enzymes."
},
{
  "id": 174,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The membrane that bounds a vacuole is called:",
  "options": [
    "Plasma membrane",
    "Nuclear membrane",
    "Tonoplast",
    "Thylakoid membrane"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The vacuole is bound by a single membrane called tonoplast.' Tonoplast is specifically the vacuolar membrane. Plasma membrane bounds the cell, nuclear membrane bounds the nucleus, and thylakoid membrane is found in chloroplasts."
},
{
  "id": 175,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "In plant cells, vacuoles can occupy up to what percentage of the cell volume?",
  "options": [
    "50 per cent",
    "70 per cent",
    "80 per cent",
    "90 per cent"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'In plant cells the vacuoles can occupy up to 90 per cent of the volume of the cell.' This is a frequently tested factual detail. The large central vacuole is a distinguishing feature of plant cells."
},
{
  "id": 176,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The tonoplast facilitates transport of ions and other materials into the vacuole by:",
  "options": [
    "Simple diffusion along concentration gradient",
    "Osmosis",
    "Active transport against concentration gradient",
    "Passive transport only"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'the tonoplast facilitates the transport of a number of ions and other materials against concentration gradients into the vacuole, hence their concentration is significantly higher in the vacuole than in the cytoplasm.' This is ACTIVE transport (against gradient)."
},
{
  "id": 177,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The contractile vacuole in Amoeba is important for:",
  "options": [
    "Digestion and absorption",
    "Photosynthesis",
    "Osmoregulation and excretion",
    "Protein synthesis"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In Amoeba, the contractile vacuole is important for osmoregulation and excretion.' It helps in removing excess water and waste products. Note: NCERT mentions BOTH osmoregulation AND excretion – students often remember only one function."
},
{
  "id": 178,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Food vacuoles are formed by engulfing food particles in:",
  "options": [
    "Plant cells only",
    "Bacterial cells only",
    "Many cells, as in protists",
    "All eukaryotic cells"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In many cells, as in protists, food vacuoles are formed by engulfing the food particles.' NCERT specifically mentions protists as examples. Not all eukaryotic cells form food vacuoles, and plant/bacterial cells typically do not."
},
{
  "id": 179,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "<b>Assertion (A):</b> Mitochondria are not considered part of the endomembrane system.<br><b>Reason (R):</b> The functions of mitochondria are not coordinated with the components of the endomembrane system.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. NCERT explicitly states 'Since the functions of the mitochondria, chloroplast and peroxisomes are not coordinated with the above components, these are not considered as part of the endomembrane system.' R correctly explains why mitochondria are excluded (A)."
},
{
  "id": 180,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Consider the following statements about the Golgi apparatus:<br>(i) Proteins synthesised by ribosomes on ER are modified in the Golgi cisternae.<br>(ii) Modified proteins are released from the cis face.<br>(iii) The Golgi principally performs the function of packaging materials.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (ii) is INCORRECT – modified proteins are released from the TRANS face (maturing face), NOT the cis face. As per NCERT, proteins are 'modified in the cisternae of the golgi apparatus before they are released from its trans face.' Statements (i) and (iii) are correct."
},
{
  "id": 181,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Which of the following correctly describes the contents of a vacuole?",
  "options": [
    "DNA, RNA and ribosomes",
    "Water, sap, excretory product and other materials not useful for the cell",
    "Hydrolytic enzymes active at acidic pH",
    "Stacked cisternae and vesicles"
  ],
  "correct": 1,
  "explanation": "As per NCERT, the vacuole 'contains water, sap, excretory product and other materials not useful for the cell.' Option C describes lysosomes, Option D describes Golgi apparatus, and Option A describes components found in the nucleus/ribosomes."
},
{
  "id": 182,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The cell wall of fungi and plants forms an outer covering for:",
  "options": [
    "The nucleus",
    "The cytoplasm directly",
    "The plasma membrane",
    "The tonoplast"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'a non-living rigid structure called the cell wall forms an outer covering for the plasma membrane of fungi and plants.' The cell wall is external to the plasma membrane. This is a basic but important structural concept."
},
{
  "id": 183,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Which of the following statements about the cell wall is <b>INCORRECT</b>?",
  "options": [
    "It helps in cell-to-cell interaction",
    "It is a living flexible structure",
    "It provides barrier to undesirable macromolecules",
    "It gives shape to the cell"
  ],
  "correct": 1,
  "explanation": "Option B is INCORRECT – the cell wall is described as a 'NON-LIVING RIGID structure' in NCERT, NOT living and flexible. Options A, C, and D are all correct functions of the cell wall as stated in NCERT."
},
{
  "id": 184,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "The membranous organelles considered together as the endomembrane system because:",
  "options": [
    "They are all identical in structure",
    "Their functions are coordinated",
    "They all contain hydrolytic enzymes",
    "They are all found only in plant cells"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'many of these are considered together as an endomembrane system because their functions are coordinated.' The key reason is functional coordination, not structural similarity. They are distinct in structure and function but work together as a coordinated system."
},
{
  "id": 185,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "<b>Assertion (A):</b> The concentration of ions is significantly higher in the vacuole than in the cytoplasm of plant cells.<br><b>Reason (R):</b> The tonoplast facilitates transport of ions against concentration gradients into the vacuole.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. NCERT states 'the tonoplast facilitates the transport of a number of ions and other materials against concentration gradients into the vacuole, hence their concentration is significantly higher in the vacuole than in the cytoplasm.' R directly explains why A occurs."
},
{
  "id": 186,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "RER is extensive and continuous with:",
  "options": [
    "The inner membrane of the nucleus",
    "The smooth endoplasmic reticulum only",
    "The outer membrane of the nucleus",
    "The plasma membrane"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'They (RER) are extensive and continuous with the outer membrane of the nucleus.' This continuity with the OUTER nuclear membrane is a crucial structural detail. Students often confuse outer with inner nuclear membrane."
},
{
  "id": 187,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "In animal cells, lipid-like steroidal hormones are synthesised in:",
  "options": [
    "Rough endoplasmic reticulum",
    "Golgi apparatus",
    "Smooth endoplasmic reticulum",
    "Lysosomes"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In animal cells lipid-like steroidal hormones are synthesised in SER.' RER is involved in protein synthesis and secretion, not lipid/steroidal hormone synthesis. The Golgi modifies and packages but does not synthesise steroidal hormones."
},
{
  "id": 188,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Which of the following is the correct sequence of layers from outside to inside in a mature plant cell?",
  "options": [
    "Middle lamella → Primary wall → Secondary wall → Plasma membrane",
    "Primary wall → Middle lamella → Secondary wall → Plasma membrane",
    "Secondary wall → Primary wall → Middle lamella → Plasma membrane",
    "Middle lamella → Secondary wall → Primary wall → Plasma membrane"
  ],
  "correct": 0,
  "explanation": "The correct sequence from outermost to innermost is: Middle lamella (outermost, glues cells) → Primary wall → Secondary wall (formed on inner side, towards membrane) → Plasma membrane. NCERT states secondary wall forms on 'the inner side of the cell' towards the membrane."
},
{
  "id": 189,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Which of the following correctly describes the Golgi apparatus structure?",
  "options": [
    "It consists of tubular structures scattered in the cytoplasm",
    "It consists of many flat, disc-shaped sacs or cisternae stacked parallel to each other",
    "It consists of membrane-bound vesicular structures with hydrolytic enzymes",
    "It consists of a network of interconnected tubules and vesicles"
  ],
  "correct": 1,
  "explanation": "As per NCERT, Golgi bodies 'consist of many flat, disc-shaped sacs or cisternae... stacked parallel to each other.' Option A describes ER, Option C describes lysosomes, Option D also partially describes ER. The flat, disc-shaped, stacked parallel arrangement is unique to Golgi."
},
{
  "id": 190,
  "topic": "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles",
  "q": "Consider the following:<br>(i) Cell wall helps in cell-to-cell interaction.<br>(ii) Middle lamella holds neighbouring cells together.<br>(iii) Plasmodesmata connect the nuclei of neighbouring cells.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct. Statement (iii) is INCORRECT – plasmodesmata connect the CYTOPLASM (not nuclei) of neighbouring cells. NCERT states 'plasmodesmata which connect the cytoplasm of neighbouring cells.' Confusing cytoplasm with nucleus is a common NEET trap."
},
{
  "id": 191,
  "topic": "Mitochondria",
  "q": "Mitochondria are not easily visible under the microscope unless:",
  "options": [
    "Viewed under electron microscope only",
    "Specifically stained",
    "The cell is fixed in formalin",
    "Viewed under phase contrast microscope only"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Mitochondria, unless specifically stained, are not easily visible under the microscope.' Specific staining (e.g., Janus Green B) is required to visualise mitochondria under light microscope. This is a direct NCERT factual detail."
},
{
  "id": 192,
  "topic": "Mitochondria",
  "q": "The number of mitochondria per cell is variable depending on:",
  "options": [
    "The size of the cell",
    "The age of the organism",
    "The physiological activity of the cells",
    "The type of tissue only"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The number of mitochondria per cell is variable depending on the physiological activity of the cells.' Cells with high metabolic activity (e.g., muscle cells) have more mitochondria. It is NOT dependent on cell size or organism age as stated in NCERT."
},
{
  "id": 193,
  "topic": "Mitochondria",
  "q": "The typical shape of mitochondria is described as:",
  "options": [
    "Disc-shaped or flattened",
    "Spherical or oval only",
    "Sausage-shaped or cylindrical",
    "Star-shaped or irregular"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Typically it is sausage-shaped or cylindrical.' While mitochondria show considerable variability in shape and size, the TYPICAL shape mentioned in NCERT is sausage-shaped or cylindrical. This exact NCERT wording is tested in NEET."
},
{
  "id": 194,
  "topic": "Mitochondria",
  "q": "The average diameter of a mitochondrion is:",
  "options": [
    "0.2 µm",
    "0.5 µm",
    "1.0 µm",
    "4.1 µm"
  ],
  "correct": 1,
  "explanation": "As per NCERT, mitochondria have 'a diameter of 0.2-1.0 µm (average 0.5 µm).' The AVERAGE diameter is 0.5 µm. 0.2 µm and 1.0 µm are the range limits. 4.1 µm is the upper limit of LENGTH, not diameter. Students often confuse diameter values with length values."
},
{
  "id": 195,
  "topic": "Mitochondria",
  "q": "The length of a mitochondrion ranges from:",
  "options": [
    "0.2 to 1.0 µm",
    "0.5 to 2.0 µm",
    "1.0 to 4.1 µm",
    "2.0 to 5.0 µm"
  ],
  "correct": 2,
  "explanation": "As per NCERT, mitochondria have a 'length 1.0-4.1 µm.' The range 0.2-1.0 µm refers to diameter, not length. This diameter vs length confusion is a commonly set trap in NEET questions."
},
{
  "id": 196,
  "topic": "Mitochondria",
  "q": "Each mitochondrion is a double membrane-bound structure that divides its lumen into:",
  "options": [
    "Three aqueous compartments",
    "Two aqueous compartments – outer compartment and inner compartment",
    "A single continuous aqueous compartment",
    "Four distinct compartments"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the outer membrane and the inner membrane dividing its lumen distinctly into two aqueous compartments, i.e., the outer compartment and the inner compartment.' TWO compartments – outer (inter-membrane space) and inner (matrix). NOT three or four."
},
{
  "id": 197,
  "topic": "Mitochondria",
  "q": "The inner compartment of the mitochondrion is filled with:",
  "options": [
    "A fluid called stroma",
    "A dense homogeneous substance called the matrix",
    "Thylakoid membranes",
    "Cristae fluid"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The inner compartment is filled with a dense homogeneous substance called the matrix.' Stroma is found in chloroplasts, not mitochondria. Thylakoids are also chloroplast structures. Matrix is the correct term for the mitochondrial inner compartment."
},
{
  "id": 198,
  "topic": "Mitochondria",
  "q": "Cristae in mitochondria are:",
  "options": [
    "Infoldings of the outer membrane towards the cytoplasm",
    "Extensions of the matrix into the outer compartment",
    "Infoldings of the inner membrane towards the matrix",
    "Flat disc-shaped structures floating in the matrix"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The inner membrane forms a number of infoldings called the cristae towards the matrix.' Cristae are formed by the INNER membrane (not outer) and fold TOWARDS the matrix. This is a very high-frequency NEET question. Confusing inner with outer membrane is a classic trap."
},
{
  "id": 199,
  "topic": "Mitochondria",
  "q": "The primary function of cristae in mitochondria is to:",
  "options": [
    "Store genetic material",
    "Increase the surface area",
    "Protect the matrix",
    "Synthesize lipids"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The cristae increase the surface area.' Increased surface area allows for more ATP-generating reactions (oxidative phosphorylation) on the inner membrane. This functional significance of cristae is a commonly tested concept."
},
{
  "id": 200,
  "topic": "Mitochondria",
  "q": "Which of the following forms the continuous limiting boundary of the mitochondrion?",
  "options": [
    "Inner membrane",
    "Cristae",
    "Matrix",
    "Outer membrane"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'The outer membrane forms the continuous limiting boundary of the organelle.' The inner membrane is folded into cristae and does not form the continuous boundary. The outer membrane is smooth and forms the external limit of the organelle."
},
{
  "id": 201,
  "topic": "Mitochondria",
  "q": "Mitochondria are called the 'power houses' of the cell because:",
  "options": [
    "They are the sites of anaerobic respiration",
    "They produce cellular energy in the form of ATP through aerobic respiration",
    "They store large amounts of glucose",
    "They synthesize all cellular proteins"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Mitochondria are the sites of aerobic respiration. They produce cellular energy in the form of ATP, hence they are called power houses of the cell.' They are specifically involved in AEROBIC respiration, not anaerobic. ATP production is the key reason for this name."
},
{
  "id": 202,
  "topic": "Mitochondria",
  "q": "The mitochondrial matrix possesses all of the following <b>EXCEPT</b>:",
  "options": [
    "Single circular DNA molecule",
    "80S ribosomes",
    "A few RNA molecules",
    "Components required for protein synthesis"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The matrix also possesses single circular DNA molecule, a few RNA molecules, ribosomes (70S) and the components required for the synthesis of proteins.' Mitochondrial ribosomes are 70S (prokaryotic type), NOT 80S (eukaryotic type). This is an extremely high-yield NEET fact."
},
{
  "id": 203,
  "topic": "Mitochondria",
  "q": "The ribosomes found in mitochondria are:",
  "options": [
    "80S type",
    "70S type",
    "60S type",
    "50S type"
  ],
  "correct": 1,
  "explanation": "As per NCERT, the matrix possesses 'ribosomes (70S).' Mitochondrial ribosomes are 70S, similar to prokaryotic ribosomes. This supports the endosymbiotic theory. 80S ribosomes are found in the cytoplasm of eukaryotic cells. 60S and 50S are subunits, not complete ribosomes."
},
{
  "id": 204,
  "topic": "Mitochondria",
  "q": "The DNA molecule found in the mitochondrial matrix is:",
  "options": [
    "Double linear chromosome",
    "Multiple circular DNA molecules",
    "Single circular DNA molecule",
    "Single linear DNA molecule"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the matrix possesses a 'single circular DNA molecule.' Key points: SINGLE (not multiple), CIRCULAR (not linear). This is similar to prokaryotic DNA and is very frequently tested in NEET. Students confuse it with nuclear DNA which is linear."
},
{
  "id": 205,
  "topic": "Mitochondria",
  "q": "Mitochondria divide by:",
  "options": [
    "Mitosis",
    "Meiosis",
    "Budding",
    "Fission"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'The mitochondria divide by fission.' Fission is a simple division process similar to bacterial binary fission, NOT mitosis or meiosis (which are nuclear division processes). This supports the semi-autonomous nature and endosymbiotic origin of mitochondria."
},
{
  "id": 206,
  "topic": "Mitochondria",
  "q": "<b>Assertion (A):</b> Mitochondria are considered semi-autonomous organelles.<br><b>Reason (R):</b> Mitochondria possess their own circular DNA, 70S ribosomes, RNA molecules, and components for protein synthesis.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Mitochondria are semi-autonomous because they possess their own genetic material (circular DNA), 70S ribosomes, RNA, and protein synthesis machinery (R is true). This self-sufficiency in protein synthesis is what makes them semi-autonomous (A is true). R correctly explains A."
},
{
  "id": 207,
  "topic": "Mitochondria",
  "q": "Consider the following statements about mitochondria:<br>(i) They have a single membrane-bound structure.<br>(ii) The outer and inner membranes have their own specific enzymes.<br>(iii) They are the sites of aerobic respiration.<br>(iv) Cristae are infoldings of the outer membrane.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i) and (iv) only",
    "(ii) and (iii) only",
    "(i), (ii) and (iii) only",
    "All of the above"
  ],
  "correct": 1,
  "explanation": "Statement (i) is INCORRECT – mitochondria are DOUBLE membrane-bound. Statement (iv) is INCORRECT – cristae are infoldings of the INNER membrane, not outer. Statements (ii) and (iii) are correct. NCERT states 'The two membranes have their own specific enzymes' and mitochondria are 'sites of aerobic respiration.'"
},
{
  "id": 208,
  "topic": "Mitochondria",
  "q": "Which of the following features of mitochondria is similar to prokaryotic cells?<br>(i) Circular DNA<br>(ii) 70S ribosomes<br>(iii) Division by fission<br>(iv) 80S ribosomes<br>Select the <b>correct</b> option:",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(i) and (iii) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Mitochondria share circular DNA (i), 70S ribosomes (ii), and division by fission (iii) with prokaryotes – supporting the endosymbiotic theory. 80S ribosomes (iv) are characteristic of EUKARYOTIC cytoplasm, not prokaryotes or mitochondria. Only (i), (ii), and (iii) are correct."
},
{
  "id": 209,
  "topic": "Mitochondria",
  "q": "<b>Assertion (A):</b> The number of mitochondria is higher in metabolically active cells like muscle cells.<br><b>Reason (R):</b> The number of mitochondria per cell depends on the physiological activity of the cells.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Metabolically active cells need more ATP and therefore have more mitochondria (A is true). NCERT states the number depends on 'physiological activity of the cells' (R is true). R directly explains why active cells have more mitochondria."
},
{
  "id": 210,
  "topic": "Mitochondria",
  "q": "Consider the following statements:<br>(i) Mitochondria produce cellular energy in the form of GTP.<br>(ii) The inner compartment of mitochondria is called the matrix.<br>(iii) The two membranes of mitochondria have their own specific enzymes.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (i) is INCORRECT – mitochondria produce cellular energy in the form of ATP, not GTP. NCERT specifically says 'They produce cellular energy in the form of ATP.' Statements (ii) and (iii) are correct as per NCERT."
},
{
  "id": 211,
  "topic": "Mitochondria",
  "q": "Which of the following is <b>INCORRECT</b> about mitochondria?",
  "options": [
    "They are sausage-shaped or cylindrical",
    "They show considerable degree of variability in shape and size",
    "They are single membrane-bound structures",
    "They are the sites of aerobic respiration"
  ],
  "correct": 2,
  "explanation": "Option C is INCORRECT – mitochondria are DOUBLE membrane-bound structures, not single membrane-bound. NCERT states 'Each mitochondrion is a double membrane-bound structure with the outer membrane and the inner membrane.' This is one of the most fundamental facts about mitochondrial structure."
},
{
  "id": 212,
  "topic": "Mitochondria",
  "q": "The outer compartment of the mitochondrion is the space between:",
  "options": [
    "The two layers of the inner membrane",
    "The outer membrane and the inner membrane",
    "The cristae and the matrix",
    "The matrix and the DNA"
  ],
  "correct": 1,
  "explanation": "The outer compartment (also called inter-membrane space) is the space between the outer membrane and the inner membrane. NCERT describes two aqueous compartments: outer compartment (between the two membranes) and inner compartment (matrix, inside the inner membrane)."
},
{
  "id": 213,
  "topic": "Mitochondria",
  "q": "Which of the following combinations correctly represents the components found in the mitochondrial matrix?",
  "options": [
    "Linear DNA, 80S ribosomes, and RNA molecules",
    "Circular DNA, 70S ribosomes, and RNA molecules",
    "Circular DNA, 80S ribosomes, and histones",
    "Linear DNA, 70S ribosomes, and tRNA only"
  ],
  "correct": 1,
  "explanation": "As per NCERT, the matrix possesses 'single circular DNA molecule, a few RNA molecules, ribosomes (70S) and the components required for the synthesis of proteins.' Circular DNA (not linear), 70S ribosomes (not 80S), and RNA molecules – Option B is the only correct combination."
},
{
  "id": 214,
  "topic": "Mitochondria",
  "q": "The diameter of mitochondria ranges from:",
  "options": [
    "0.5 to 1.0 µm",
    "1.0 to 4.1 µm",
    "0.2 to 1.0 µm",
    "0.1 to 0.5 µm"
  ],
  "correct": 2,
  "explanation": "As per NCERT, mitochondria have 'a diameter of 0.2-1.0 µm (average 0.5 µm).' The range 1.0-4.1 µm refers to LENGTH, not diameter. Option A (0.5-1.0) is incomplete. This diameter vs length value confusion is a frequently tested trap."
},
{
  "id": 215,
  "topic": "Mitochondria",
  "q": "<b>Assertion (A):</b> Cristae increase the efficiency of aerobic respiration in mitochondria.<br><b>Reason (R):</b> Cristae are infoldings of the inner membrane that increase the surface area.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Cristae increase the surface area available for enzymes involved in aerobic respiration (oxidative phosphorylation), thereby increasing efficiency (A is true). NCERT states 'The inner membrane forms a number of infoldings called the cristae... The cristae increase the surface area' (R is true and correctly explains A)."
},
{
  "id": 216,
  "topic": "Mitochondria",
  "q": "Which of the following organelles is <b>NOT</b> part of the endomembrane system but possesses its own DNA and ribosomes?",
  "options": [
    "Endoplasmic reticulum",
    "Golgi apparatus",
    "Mitochondria",
    "Lysosomes"
  ],
  "correct": 2,
  "explanation": "Mitochondria are NOT part of the endomembrane system (as stated in the previous chapter section) but possess their own circular DNA and 70S ribosomes. ER, Golgi, and lysosomes are all part of the endomembrane system and do not have their own DNA/ribosomes."
},
{
  "id": 217,
  "topic": "Mitochondria",
  "q": "Consider the following about mitochondrial membranes:<br>(i) The outer membrane forms the continuous limiting boundary.<br>(ii) The inner membrane forms cristae towards the outer compartment.<br>(iii) Both membranes have their own specific enzymes.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (ii) is INCORRECT – the inner membrane forms cristae towards the MATRIX (inner compartment), NOT towards the outer compartment. NCERT states 'infoldings called the cristae towards the matrix.' Statements (i) and (iii) are correct as per NCERT."
},
{
  "id": 218,
  "topic": "Mitochondria",
  "q": "Which of the following is <b>NOT</b> found in the mitochondrial matrix as per NCERT?",
  "options": [
    "Circular DNA",
    "RNA molecules",
    "Histones",
    "70S ribosomes"
  ],
  "correct": 2,
  "explanation": "NCERT mentions circular DNA, RNA molecules, 70S ribosomes, and components for protein synthesis in the matrix. Histones are NOT mentioned as mitochondrial matrix components. Mitochondrial DNA is naked/circular (like prokaryotic DNA), without histone association. Histones are characteristic of eukaryotic nuclear DNA."
},
{
  "id": 219,
  "topic": "Mitochondria",
  "q": "The matrix of mitochondria is described as:",
  "options": [
    "A fluid-filled space with thylakoids",
    "A dense homogeneous substance",
    "A semi-fluid matrix with no inclusions",
    "A clear transparent liquid"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The inner compartment is filled with a dense homogeneous substance called the matrix.' It is DENSE and HOMOGENEOUS – not fluid, transparent, or containing thylakoids. Thylakoids are found in chloroplasts, not mitochondria."
},
{
  "id": 220,
  "topic": "Mitochondria",
  "q": "Which of the following correctly lists ALL the features of mitochondria as per NCERT?<br>(i) Double membrane-bound<br>(ii) Possess 70S ribosomes<br>(iii) Contain single circular DNA<br>(iv) Divide by fission<br>(v) Site of anaerobic respiration",
  "options": [
    "(i), (ii), (iii) and (iv) only",
    "(i), (ii), (iii) and (v) only",
    "(i), (iii), (iv) and (v) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Statement (v) is INCORRECT – mitochondria are the sites of AEROBIC respiration, NOT anaerobic. NCERT states 'Mitochondria are the sites of aerobic respiration.' Statements (i), (ii), (iii), and (iv) are all correct as per NCERT. Confusing aerobic with anaerobic is a NEET trap."
},
{
  "id": 221,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Plastids are found in all plant cells and in:",
  "options": [
    "Fungi",
    "All protists",
    "Euglenoides",
    "Bacteria"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Plastids are found in all plant cells and in euglenoides.' Euglenoids are protists that possess plastids. Fungi, bacteria, and most other protists do not have plastids. Students often forget euglenoides as the non-plant group possessing plastids – a frequently tested NEET fact."
},
{
  "id": 222,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Plastids are classified into chloroplasts, chromoplasts and leucoplasts based on:",
  "options": [
    "Their shape and size",
    "Their location in the plant",
    "The type of pigments they contain",
    "Their function in metabolism"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Based on the type of pigments plastids can be classified into chloroplasts, chromoplasts and leucoplasts.' The classification is based on PIGMENT TYPE, not shape, size, location, or function. Leucoplasts are colourless (no pigment), chloroplasts have chlorophyll, chromoplasts have carotenoids."
},
{
  "id": 223,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The chloroplasts contain which of the following pigments?<br>(i) Chlorophyll<br>(ii) Carotenoid<br>(iii) Xanthophyll only<br>Select the <b>correct</b> option:",
  "options": [
    "Only (i)",
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The chloroplasts contain chlorophyll and carotenoid pigments which are responsible for trapping light energy essential for photosynthesis.' Chloroplasts contain chlorophyll AND carotenoids. Xanthophylls are specifically mentioned under chromoplasts as fat-soluble carotenoid pigments, not as a separate chloroplast pigment category."
},
{
  "id": 224,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The pigments present in chromoplasts are:",
  "options": [
    "Water-soluble anthocyanin pigments",
    "Fat-soluble carotenoid pigments like carotene and xanthophylls",
    "Chlorophyll a and chlorophyll b",
    "Phycobilins like phycocyanin"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'In the chromoplasts, fat soluble carotenoid pigments like carotene, xanthophylls and others are present.' Key detail: FAT SOLUBLE is specifically mentioned. These pigments give yellow, orange, or red colour. Anthocyanins are vacuolar pigments, not chromoplast pigments."
},
{
  "id": 225,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Match the leucoplast types with their stored nutrients:<br>(a) Amyloplasts – (i) Proteins<br>(b) Elaioplasts – (ii) Carbohydrates (starch)<br>(c) Aleuroplasts – (iii) Oils and fats<br>Select the correct matching:",
  "options": [
    "a-(ii), b-(iii), c-(i)",
    "a-(i), b-(ii), c-(iii)",
    "a-(iii), b-(i), c-(ii)",
    "a-(ii), b-(i), c-(iii)"
  ],
  "correct": 0,
  "explanation": "As per NCERT: Amyloplasts store carbohydrates/starch (ii), Elaioplasts store oils and fats (iii), Aleuroplasts store proteins (i). The correct match is a-(ii), b-(iii), c-(i). NEET frequently tests this matching. Remember: Amylo = starch, Elaio = oil, Aleuro = protein."
},
{
  "id": 226,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "An example of a plant organ that stores starch in amyloplasts is:",
  "options": [
    "Rose petals",
    "Green leaves",
    "Potato",
    "Carrot"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Amyloplasts store carbohydrates (starch), e.g., potato.' Potato tubers are the specific NCERT example for amyloplasts. Rose petals would have chromoplasts, green leaves have chloroplasts, and carrot root has chromoplasts (carotene)."
},
{
  "id": 227,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The majority of chloroplasts in green plants are found in:",
  "options": [
    "Root cortex cells",
    "Epidermal cells of stem",
    "Mesophyll cells of leaves",
    "Guard cells only"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Majority of the chloroplasts of the green plants are found in the mesophyll cells of the leaves.' While guard cells also contain chloroplasts, the MAJORITY are in mesophyll cells. Root cells generally lack chloroplasts."
},
{
  "id": 228,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The number of chloroplasts per cell in the mesophyll of higher plants is:",
  "options": [
    "1 per cell",
    "5-10 per cell",
    "20-40 per cell",
    "100-200 per cell"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the number 'varies from 1 per cell of the Chlamydomonas, a green alga to 20-40 per cell in the mesophyll.' 1 per cell is for Chlamydomonas (an alga), while mesophyll cells of higher plants have 20-40 per cell. This distinction is frequently tested."
},
{
  "id": 229,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The length and width of chloroplasts respectively are:",
  "options": [
    "2-4 µm and 5-10 µm",
    "5-10 µm and 2-4 µm",
    "1-5 µm and 0.5-2 µm",
    "10-20 µm and 5-10 µm"
  ],
  "correct": 1,
  "explanation": "As per NCERT, chloroplasts have 'variable length (5-10 µm) and width (2-4 µm).' Option A reverses the values (length and width swapped) – a classic NEET trap. Length is always greater than width for these organelles."
},
{
  "id": 230,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The space limited by the inner membrane of the chloroplast is called:",
  "options": [
    "Matrix",
    "Lumen",
    "Stroma",
    "Cytoplasm"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The space limited by the inner membrane of the chloroplast is called the stroma.' Matrix is the inner space of mitochondria. Lumen is the space inside thylakoid membranes. Students frequently confuse stroma (chloroplast) with matrix (mitochondria) – a high-frequency NEET trap."
},
{
  "id": 231,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Consider the following statements about thylakoids:<br>(i) They are organised flattened membranous sacs present in the stroma.<br>(ii) Thylakoids arranged in stacks are called grana.<br>(iii) The membrane of thylakoids encloses a space called stroma.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct. Statement (iii) is INCORRECT – the membrane of thylakoids encloses a space called a LUMEN, not stroma. NCERT states 'The membrane of the thylakoids enclose a space called a lumen.' Stroma is the space outside thylakoids within the inner membrane. This is a very common NEET confusion."
},
{
  "id": 232,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Stroma lamellae are:",
  "options": [
    "Stacked thylakoids forming grana",
    "Flat membranous tubules connecting the thylakoids of different grana",
    "Infoldings of the inner chloroplast membrane",
    "Extensions of the outer chloroplast membrane"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'there are flat membranous tubules called the stroma lamellae connecting the thylakoids of the different grana.' Stroma lamellae (also called intergranal lamellae or fret channels) provide structural and functional connections between different grana."
},
{
  "id": 233,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The stroma of chloroplasts contains all of the following <b>EXCEPT</b>:",
  "options": [
    "Enzymes for carbohydrate synthesis",
    "Small double-stranded circular DNA molecules",
    "Chlorophyll pigments",
    "Ribosomes"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Chlorophyll pigments are present in the thylakoids,' NOT in the stroma. The stroma contains enzymes for carbohydrate and protein synthesis, double-stranded circular DNA, and ribosomes. This is an extremely important distinction – pigments in thylakoids, enzymes/DNA/ribosomes in stroma."
},
{
  "id": 234,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The DNA found in chloroplasts is:",
  "options": [
    "Single-stranded linear DNA",
    "Double-stranded linear DNA",
    "Single-stranded circular DNA",
    "Small double-stranded circular DNA"
  ],
  "correct": 3,
  "explanation": "As per NCERT, the stroma 'contains small, double-stranded circular DNA molecules.' Note TWO key descriptors: DOUBLE-STRANDED and CIRCULAR. Mitochondrial DNA is described as 'single circular DNA' without specifying double-stranded. Chloroplast DNA is specifically 'double-stranded circular.' This subtle difference can appear in NEET."
},
{
  "id": 235,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The ribosomes of chloroplasts are:",
  "options": [
    "Larger than cytoplasmic ribosomes (80S vs 70S)",
    "Same size as cytoplasmic ribosomes (80S)",
    "Smaller than cytoplasmic ribosomes (70S vs 80S)",
    "Non-functional and inactive"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The ribosomes of the chloroplasts are smaller (70S) than the cytoplasmic ribosomes (80S).' Chloroplast ribosomes are 70S (like prokaryotic and mitochondrial ribosomes), while cytoplasmic ribosomes are 80S. This supports the endosymbiotic theory."
},
{
  "id": 236,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "<b>Assertion (A):</b> Chloroplasts are considered semi-autonomous organelles.<br><b>Reason (R):</b> Chloroplasts possess their own double-stranded circular DNA, 70S ribosomes, and enzymes for protein synthesis.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Chloroplasts are semi-autonomous because they possess their own genetic machinery – double-stranded circular DNA, 70S ribosomes, and enzymes for protein synthesis (R is true). This self-sufficiency makes them semi-autonomous (A is true). R correctly explains A."
},
{
  "id": 237,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The inner membrane of chloroplast compared to the outer membrane is:",
  "options": [
    "More permeable",
    "Equally permeable",
    "Relatively less permeable",
    "Completely impermeable"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Of the two, the inner chloroplast membrane is relatively less permeable.' This selective barrier function of the inner membrane helps maintain the unique chemical environment of the stroma. 'Relatively less permeable' is the NCERT-specific wording."
},
{
  "id": 238,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Ribosomes were first observed as dense particles under the electron microscope by:",
  "options": [
    "Robert Brown",
    "Camillo Golgi",
    "George Palade (1953)",
    "Singer and Nicolson"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Ribosomes are the granular structures first observed under the electron microscope as dense particles by George Palade (1953).' Robert Brown discovered the nucleus, Golgi discovered Golgi bodies, Singer-Nicolson proposed the fluid mosaic model."
},
{
  "id": 239,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Ribosomes are composed of:",
  "options": [
    "DNA and proteins",
    "RNA and lipids",
    "Ribonucleic acid (RNA) and proteins",
    "DNA and carbohydrates"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'They are composed of ribonucleic acid (RNA) and proteins and are not surrounded by any membrane.' Ribosomes contain rRNA and proteins. They do NOT contain DNA, lipids, or carbohydrates. This composition is a frequently tested NEET fact."
},
{
  "id": 240,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The two subunits of 80S eukaryotic ribosomes are:",
  "options": [
    "50S and 30S",
    "60S and 40S",
    "70S and 10S",
    "45S and 35S"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The two subunits of 80S ribosomes are 60S and 40S while that of 70S ribosomes are 50S and 30S.' 80S = 60S + 40S (eukaryotic); 70S = 50S + 30S (prokaryotic). Remember: S values are NOT additive (60+40≠100, they give 80S)."
},
{
  "id": 241,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The 'S' in Svedberg's Unit stands for the:",
  "options": [
    "Size coefficient",
    "Sedimentation coefficient",
    "Structural coefficient",
    "Solubility coefficient"
  ],
  "correct": 1,
  "explanation": "As per NCERT, ''S' (Svedberg's Unit) stands for the sedimentation coefficient; it is indirectly a measure of density and size.' It is NOT a direct measure of size – it INDIRECTLY measures density and size. This subtle point is tested in NEET."
},
{
  "id": 242,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "<b>Assertion (A):</b> The Svedberg unit (S) is indirectly a measure of density and size of ribosomes.<br><b>Reason (R):</b> The sedimentation coefficients of ribosomal subunits are directly additive.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – NCERT states 'S' is 'indirectly a measure of density and size.' Reason is FALSE – sedimentation coefficients are NOT directly additive (50S + 30S = 70S, not 80S; 60S + 40S = 80S, not 100S). This non-additive nature is one of the most commonly tested traps in NEET."
},
{
  "id": 243,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The cytoskeleton consists of:<br>(i) Microtubules<br>(ii) Microfilaments<br>(iii) Intermediate filaments<br>(iv) Centrioles<br>Select the <b>correct</b> option as per NCERT:",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(i), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "As per NCERT, the cytoskeleton consists of 'microtubules, microfilaments and intermediate filaments.' Centrioles are separate organelles involved in cell division and are NOT listed as cytoskeletal components in NCERT. Only three components are mentioned."
},
{
  "id": 244,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The cytoskeleton is composed of:",
  "options": [
    "Carbohydrate structures",
    "Lipid-based structures",
    "Filamentous proteinaceous structures",
    "Nucleic acid-based structures"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the cytoskeleton is 'an elaborate network of filamentous proteinaceous structures.' It is made of PROTEINS – all three components (microtubules, microfilaments, intermediate filaments) are proteinaceous in nature."
},
{
  "id": 245,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The functions of cytoskeleton include all of the following <b>EXCEPT</b>:",
  "options": [
    "Mechanical support",
    "Motility",
    "Protein synthesis",
    "Maintenance of the shape of the cell"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the cytoskeleton is 'involved in many functions such as mechanical support, motility, maintenance of the shape of the cell.' Protein synthesis is the function of RIBOSOMES, not the cytoskeleton. This is a straightforward elimination question."
},
{
  "id": 246,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Consider the following comparisons between chloroplasts and mitochondria:<br>(i) Both are double membrane-bound.<br>(ii) Both contain 70S ribosomes.<br>(iii) Both contain circular DNA.<br>(iv) Both have cristae as infoldings of inner membrane.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(i), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Statements (i), (ii), and (iii) are correct – both are double membrane-bound, contain 70S ribosomes, and have circular DNA. Statement (iv) is INCORRECT – CRISTAE are specifically mitochondrial inner membrane infoldings. Chloroplasts have THYLAKOIDS, not cristae. This is a classic NEET trap comparing the two organelles."
},
{
  "id": 247,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Leucoplasts are described as:",
  "options": [
    "Coloured plastids with carotenoid pigments",
    "Green plastids with chlorophyll",
    "Colourless plastids of varied shapes and sizes with stored nutrients",
    "Plastids found only in flowers"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The leucoplasts are the colourless plastids of varied shapes and sizes with stored nutrients.' They lack pigments and function in storage. Chloroplasts are green with chlorophyll, and chromoplasts are coloured with carotenoids."
},
{
  "id": 248,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "<b>Assertion (A):</b> Chloroplasts and mitochondria are not part of the endomembrane system.<br><b>Reason (R):</b> Both chloroplasts and mitochondria possess their own DNA, ribosomes, and can divide independently by fission.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 1,
  "explanation": "Both A and R are true. Chloroplasts and mitochondria are NOT part of the endomembrane system (A is true). They possess own DNA, ribosomes, and divide by fission (R is true). However, R does NOT correctly explain A – the reason they are excluded from the endomembrane system is that 'their functions are not coordinated' with endomembrane components, not because they have their own DNA/ribosomes."
},
{
  "id": 249,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Chromoplasts impart which of the following colours to the plant parts?",
  "options": [
    "Green only",
    "Blue and violet",
    "Yellow, orange or red",
    "Brown and black"
  ],
  "correct": 2,
  "explanation": "As per NCERT, chromoplasts 'give the part of the plant a yellow, orange or red colour.' This is due to fat-soluble carotenoid pigments like carotene and xanthophylls. Green colour is due to chloroplasts. Blue-violet is due to anthocyanins (vacuolar pigments, not chromoplast)."
},
{
  "id": 250,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Which of the following statements about ribosomes is <b>INCORRECT</b> as per NCERT?",
  "options": [
    "They are granular structures",
    "They are composed of RNA and proteins",
    "They are surrounded by a single membrane",
    "They were first observed by George Palade"
  ],
  "correct": 2,
  "explanation": "Option C is INCORRECT – NCERT clearly states ribosomes 'are not surrounded by any membrane.' Ribosomes are NON-membrane bound organelles. This is a fundamental fact. Options A, B, and D are all correct as per NCERT."
},
{
  "id": 251,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Chlamydomonas, a green alga, has how many chloroplasts per cell?",
  "options": [
    "20-40",
    "5-10",
    "1",
    "100"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Their number varies from 1 per cell of the Chlamydomonas, a green alga to 20-40 per cell in the mesophyll.' Chlamydomonas has a single large cup-shaped chloroplast. 20-40 is the number in mesophyll cells."
},
{
  "id": 252,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Consider the following about chloroplasts:<br>(i) They are lens-shaped, oval, spherical, discoid or ribbon-like.<br>(ii) They are single membrane-bound organelles.<br>(iii) Chlorophyll pigments are present in the thylakoids.<br>(iv) The stroma contains enzymes for carbohydrate and protein synthesis.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i), (ii) and (iii)",
    "(i), (iii) and (iv)",
    "(ii), (iii) and (iv)",
    "All of the above"
  ],
  "correct": 1,
  "explanation": "Statement (ii) is INCORRECT – chloroplasts are DOUBLE membrane-bound, not single membrane-bound. NCERT states 'the chloroplasts are also double membrane bound.' Statements (i), (iii), and (iv) are all correct as per NCERT."
},
{
  "id": 253,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Thylakoids arranged in stacks like piles of coins are called:",
  "options": [
    "Stroma lamellae",
    "Cristae",
    "Grana",
    "Cisternae"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Thylakoids are arranged in stacks like the piles of coins called grana (singular: granum).' Stroma lamellae connect thylakoids of different grana. Cristae are mitochondrial structures. Cisternae are Golgi apparatus structures."
},
{
  "id": 254,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "The space enclosed by the thylakoid membrane is called:",
  "options": [
    "Stroma",
    "Matrix",
    "Cytoplasm",
    "Lumen"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'The membrane of the thylakoids enclose a space called a lumen.' Stroma is the space outside thylakoids within the inner membrane of chloroplast. Matrix is the inner space of mitochondria. Confusing lumen with stroma is a very common NEET error."
},
{
  "id": 255,
  "topic": "Plastids, Ribosomes, Cytoskeleton",
  "q": "Which of the following correctly represents the comparison of stroma (chloroplast) and matrix (mitochondria)?<br>(i) Both are spaces within the inner membrane.<br>(ii) Both contain circular DNA and 70S ribosomes.<br>(iii) Stroma contains thylakoids; matrix contains cristae.<br>Select the <b>correct</b> option:",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct – both stroma and matrix are spaces within the inner membrane, and both contain circular DNA and 70S ribosomes. Statement (iii) is INCORRECT – while stroma contains thylakoids (correct), the matrix does NOT contain cristae. Cristae are infoldings of the inner membrane INTO the matrix, not structures contained in it."
},
{
  "id": 256,
  "topic": "Cilia and Flagella",
  "q": "Cilia and flagella are described in NCERT as:",
  "options": [
    "Hair-like outgrowths of the cell wall",
    "Hair-like outgrowths of the cell membrane",
    "Filamentous extensions of the cytoskeleton",
    "Membranous extensions of the nucleus"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Cilia and flagella are hair-like outgrowths of the cell membrane.' They are NOT outgrowths of the cell wall (which is non-living), cytoskeleton, or nucleus. This specific NCERT wording is important – they originate from the cell membrane."
},
{
  "id": 257,
  "topic": "Cilia and Flagella",
  "q": "Cilia are described as small structures which work like:",
  "options": [
    "Propellers",
    "Oars",
    "Paddles",
    "Springs"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Cilia are small structures which work like oars, causing the movement of either the cell or the surrounding fluid.' The oar-like beating pattern is characteristic of cilia. This specific analogy is a commonly tested NCERT detail."
},
{
  "id": 258,
  "topic": "Cilia and Flagella",
  "q": "Which of the following correctly differentiates cilia from flagella?",
  "options": [
    "Cilia are longer than flagella",
    "Flagella are comparatively longer than cilia and responsible for cell movement",
    "Cilia lack the 9+2 arrangement while flagella possess it",
    "Flagella work like oars while cilia are for cell movement"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Cilia are small structures... Flagella are comparatively longer and responsible for cell movement.' Option A reverses the size relationship. Option C is wrong – both have 9+2 arrangement. Option D reverses the oar function (cilia work like oars, not flagella)."
},
{
  "id": 259,
  "topic": "Cilia and Flagella",
  "q": "Consider the following statements:<br>(i) Prokaryotic bacteria possess flagella that are structurally similar to eukaryotic flagella.<br>(ii) Both cilia and flagella are covered with plasma membrane.<br>(iii) The core of cilia and flagella is called the axoneme.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (i) is INCORRECT – NCERT states prokaryotic flagella 'are structurally DIFFERENT from that of the eukaryotic flagella.' Statements (ii) and (iii) are correct – both are covered with plasma membrane and have an axoneme as core. Prokaryotic vs eukaryotic flagella comparison is a classic NEET trap."
},
{
  "id": 260,
  "topic": "Cilia and Flagella",
  "q": "The axoneme of cilia and flagella possesses microtubules arranged in:",
  "options": [
    "9+0 array",
    "9+2 array",
    "9+3 array",
    "8+2 array"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Such an arrangement of axonemal microtubules is referred to as the 9+2 array.' Nine doublets of radially arranged peripheral microtubules + a pair of centrally located microtubules = 9+2 array. Note: 9+0 array is found in centrioles/basal bodies, not in cilia/flagella."
},
{
  "id": 261,
  "topic": "Cilia and Flagella",
  "q": "The 9+2 array of the axoneme consists of:",
  "options": [
    "Nine singlets of peripheral microtubules and two central doublets",
    "Nine doublets of radially arranged peripheral microtubules and a pair of centrally located microtubules",
    "Nine triplets of peripheral microtubules and two central singlets",
    "Nine doublets of central microtubules and two peripheral singlets"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The axoneme usually has nine doublets of radially arranged peripheral microtubules, and a pair of centrally located microtubules.' Peripheral = DOUBLETS (9 sets of 2); Central = PAIR (2 singlets). Confusing doublets/singlets/triplets is a common NEET error."
},
{
  "id": 262,
  "topic": "Cilia and Flagella",
  "q": "The total number of microtubules in the axoneme of a cilium is:",
  "options": [
    "11",
    "18",
    "20",
    "22"
  ],
  "correct": 2,
  "explanation": "The 9+2 array has 9 peripheral DOUBLETS (9×2=18 microtubules) + 2 central microtubules = 20 total microtubules. Students often incorrectly calculate this as 9+2=11 (forgetting that peripheral structures are DOUBLETS). This numerical question frequently appears in NEET."
},
{
  "id": 263,
  "topic": "Cilia and Flagella",
  "q": "The central tubules in the axoneme are connected by:",
  "options": [
    "Linkers",
    "Radial spokes",
    "Bridges",
    "Dynein arms"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The central tubules are connected by bridges and is also enclosed by a central sheath.' Bridges connect the two central tubules to each other. Radial spokes connect the central sheath to peripheral doublets. Linkers interconnect peripheral doublets to each other."
},
{
  "id": 264,
  "topic": "Cilia and Flagella",
  "q": "The number of radial spokes in the axoneme is:",
  "options": [
    "Two",
    "Seven",
    "Nine",
    "Eighteen"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'the central sheath is connected to one of the tubules of each peripheral doublets by a radial spoke. Thus, there are nine radial spokes.' Since there are 9 peripheral doublets and each is connected by one radial spoke, there are exactly 9 radial spokes."
},
{
  "id": 265,
  "topic": "Cilia and Flagella",
  "q": "The radial spoke connects:",
  "options": [
    "The two central tubules to each other",
    "The peripheral doublets to each other",
    "The central sheath to one of the tubules of each peripheral doublet",
    "The plasma membrane to the axoneme"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'the central sheath, which is connected to one of the tubules of each peripheral doublets by a radial spoke.' The radial spoke connects the CENTRAL SHEATH to ONE tubule of each PERIPHERAL DOUBLET. Central tubules are connected by bridges, and peripheral doublets are connected by linkers."
},
{
  "id": 266,
  "topic": "Cilia and Flagella",
  "q": "The peripheral doublets of the axoneme are interconnected by:",
  "options": [
    "Bridges",
    "Radial spokes",
    "Central sheath",
    "Linkers"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'The peripheral doublets are also interconnected by linkers.' This is a critical structural distinction: Bridges connect central tubules, radial spokes connect central sheath to peripheral doublets, and LINKERS connect peripheral doublets to each other."
},
{
  "id": 267,
  "topic": "Cilia and Flagella",
  "q": "Both cilia and flagella emerge from a centriole-like structure called:",
  "options": [
    "Centrosome",
    "Kinetochore",
    "Basal bodies",
    "Aster"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Both the cilium and flagellum emerge from centriole-like structure called the basal bodies.' Note the NCERT wording: 'centriole-LIKE' – basal bodies are similar to centrioles but are specifically the structures from which cilia/flagella originate."
},
{
  "id": 268,
  "topic": "Cilia and Flagella",
  "q": "<b>Assertion (A):</b> Prokaryotic flagella and eukaryotic flagella are structurally identical.<br><b>Reason (R):</b> Both prokaryotic and eukaryotic flagella have a 9+2 axonemal arrangement.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  "correct": 3,
  "explanation": "Both A and R are FALSE. NCERT clearly states prokaryotic flagella 'are structurally DIFFERENT from that of the eukaryotic flagella' (A is false). The 9+2 axonemal arrangement is characteristic of EUKARYOTIC cilia/flagella only; prokaryotic flagella are made of flagellin protein without the 9+2 array (R is false)."
},
{
  "id": 269,
  "topic": "Cilia and Flagella",
  "q": "Consider the following structural components of the axoneme:<br>(a) Bridges – Connect central tubules<br>(b) Radial spokes – Connect peripheral doublets to each other<br>(c) Linkers – Connect central sheath to peripheral doublets<br>(d) Central sheath – Encloses central tubules<br>Which of the above are <b>correctly</b> matched?",
  "options": [
    "Only (a) and (d)",
    "Only (b) and (c)",
    "Only (a), (b) and (d)",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "(a) is correct – bridges connect central tubules. (d) is correct – central sheath encloses central tubules. (b) is INCORRECT – radial spokes connect central sheath to peripheral doublets, NOT peripheral doublets to each other. (c) is INCORRECT – linkers connect peripheral doublets to each other, NOT central sheath to peripheral doublets. The functions of radial spokes and linkers are swapped in (b) and (c)."
},
{
  "id": 270,
  "topic": "Cilia and Flagella",
  "q": "Cilia cause the movement of:",
  "options": [
    "Only the cell itself",
    "Only the surrounding fluid",
    "Either the cell or the surrounding fluid",
    "Neither the cell nor the surrounding fluid"
  ],
  "correct": 2,
  "explanation": "As per NCERT, cilia are 'small structures which work like oars, causing the movement of either the cell or the surrounding fluid.' They can do BOTH – move the cell (e.g., Paramecium) OR move the surrounding fluid (e.g., ciliated epithelium in trachea). The word 'either...or' is key."
},
{
  "id": 271,
  "topic": "Cilia and Flagella",
  "q": "The core of a cilium or flagellum is called:",
  "options": [
    "Centriole",
    "Axoneme",
    "Basal body",
    "Central sheath"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Their core called the axoneme, possesses a number of microtubules running parallel to the long axis.' The axoneme is the CORE structure. Basal body is the base from which cilia/flagella emerge. Central sheath encloses only the central tubules within the axoneme."
},
{
  "id": 272,
  "topic": "Cilia and Flagella",
  "q": "<b>Assertion (A):</b> Both cilia and flagella emerge from basal bodies.<br><b>Reason (R):</b> Basal bodies are centriole-like structures present at the base of cilia and flagella.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. NCERT states 'Both the cilium and flagellum emerge from centriole-like structure called the basal bodies' (A is true). Basal bodies are indeed centriole-like structures (R is true) and this explains their role as the origin point for cilia and flagella. R correctly explains A."
},
{
  "id": 273,
  "topic": "Cilia and Flagella",
  "q": "The microtubules in the axoneme run:",
  "options": [
    "Perpendicular to the long axis",
    "In a spiral pattern around the core",
    "Parallel to the long axis",
    "Randomly throughout the structure"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the axoneme 'possesses a number of microtubules running parallel to the long axis.' The parallel arrangement provides structural support and facilitates the bending movements of cilia and flagella."
},
{
  "id": 274,
  "topic": "Cilia and Flagella",
  "q": "Which of the following is <b>NOT</b> a structural component of the axoneme as per NCERT?",
  "options": [
    "Radial spokes",
    "Central sheath",
    "Dynein arms",
    "Linkers"
  ],
  "correct": 2,
  "explanation": "NCERT mentions bridges, central sheath, radial spokes, and linkers as structural components of the axoneme. Dynein arms are NOT specifically mentioned in this NCERT text, though they are known in advanced biology. NCERT-level questions should only include components mentioned in the text."
},
{
  "id": 275,
  "topic": "Cilia and Flagella",
  "q": "Consider the following:<br>(i) Cilia are covered with plasma membrane.<br>(ii) Flagella are covered with cell wall material.<br>(iii) The axoneme possesses the 9+2 array of microtubules.<br>(iv) There are nine radial spokes in the axoneme.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i), (ii) and (iii)",
    "(i), (iii) and (iv)",
    "(ii), (iii) and (iv)",
    "All of the above"
  ],
  "correct": 1,
  "explanation": "Statement (ii) is INCORRECT – both cilia and flagella are covered with PLASMA MEMBRANE, not cell wall material. NCERT states 'they are covered with plasma membrane.' Statements (i), (iii), and (iv) are all correct as per NCERT."
},
{
  "id": 276,
  "topic": "Cilia and Flagella",
  "q": "Which of the following correctly describes the peripheral arrangement in the 9+2 array?",
  "options": [
    "Nine singlets of microtubules arranged radially",
    "Nine triplets of microtubules arranged radially",
    "Nine doublets of microtubules arranged radially",
    "Nine pairs of doublets arranged randomly"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the axoneme has 'nine doublets of radially arranged peripheral microtubules.' The peripheral microtubules are DOUBLETS (pairs of two), arranged RADIALLY (like spokes of a wheel). Singlets are the central ones, and triplets are found in centrioles/basal bodies."
},
{
  "id": 277,
  "topic": "Cilia and Flagella",
  "q": "<b>Assertion (A):</b> Basal bodies are identical to centrioles.<br><b>Reason (R):</b> NCERT describes basal bodies as centriole-like structures.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  "correct": 2,
  "explanation": "Assertion is FALSE – basal bodies are NOT identical to centrioles; they are 'centriole-LIKE' structures (similar but not identical). Reason is TRUE – NCERT does describe them as 'centriole-like structure.' The word 'like' indicates similarity, not identity. This subtle wording distinction is a NEET trap."
},
{
  "id": 278,
  "topic": "Cilia and Flagella",
  "q": "Which of the following is the correct structural hierarchy from outside to inside of a cilium?",
  "options": [
    "Axoneme → Plasma membrane → Central sheath",
    "Plasma membrane → Axoneme → Central sheath → Central tubules",
    "Central sheath → Axoneme → Plasma membrane",
    "Plasma membrane → Central tubules → Axoneme"
  ],
  "correct": 1,
  "explanation": "The structural hierarchy from outside to inside is: Plasma membrane (outermost covering) → Axoneme (core with 9+2 microtubules) → Central sheath (encloses central tubules) → Central tubules (innermost). This layered organization is key to understanding cilium architecture."
},
{
  "id": 279,
  "topic": "Cilia and Flagella",
  "q": "Which of the following statements about flagella is <b>INCORRECT</b>?",
  "options": [
    "They are comparatively longer than cilia",
    "They are responsible for cell movement",
    "They are covered with plasma membrane",
    "Prokaryotic and eukaryotic flagella are structurally similar"
  ],
  "correct": 3,
  "explanation": "Option D is INCORRECT – NCERT states 'The prokaryotic bacteria also possess flagella but these are structurally different from that of the eukaryotic flagella.' Prokaryotic flagella are made of flagellin protein without the 9+2 array, while eukaryotic flagella have the 9+2 microtubular arrangement."
},
{
  "id": 280,
  "topic": "Cilia and Flagella",
  "q": "Consider the following connections in the axoneme:<br>(a) Central tubules ↔ Central tubules: Connected by ____<br>(b) Central sheath ↔ Peripheral doublets: Connected by ____<br>(c) Peripheral doublets ↔ Peripheral doublets: Connected by ____<br>Select the correct option:",
  "options": [
    "a-Bridges, b-Radial spokes, c-Linkers",
    "a-Radial spokes, b-Bridges, c-Linkers",
    "a-Linkers, b-Radial spokes, c-Bridges",
    "a-Bridges, b-Linkers, c-Radial spokes"
  ],
  "correct": 0,
  "explanation": "As per NCERT: (a) Central tubules are connected by BRIDGES; (b) Central sheath is connected to peripheral doublets by RADIAL SPOKES; (c) Peripheral doublets are interconnected by LINKERS. This three-way connection system is a very frequently tested structural detail in NEET. Option A is the only correct combination."
},
{
  "id": 281,
  "topic": "Cilia and Flagella",
  "q": "Electron microscopic study of cilia and flagella revealed that their axoneme possesses microtubules made of:",
  "options": [
    "Actin protein",
    "Keratin protein",
    "Tubulin protein",
    "Flagellin protein"
  ],
  "correct": 2,
  "explanation": "Microtubules are made of tubulin protein. While NCERT doesn't explicitly name tubulin in this section, microtubules (which form the axoneme) are universally composed of tubulin. Actin forms microfilaments, keratin forms intermediate filaments, and flagellin makes up prokaryotic flagella."
},
{
  "id": 282,
  "topic": "Cilia and Flagella",
  "q": "The cilia function in causing movement of the surrounding fluid is seen in:",
  "options": [
    "Prokaryotic cells only",
    "Cells lining the trachea in humans",
    "Red blood cells",
    "Nerve cells"
  ],
  "correct": 1,
  "explanation": "NCERT states cilia cause 'the movement of either the cell or the surrounding fluid.' Ciliated epithelium lining the trachea in humans is a classic example where cilia move mucus (surrounding fluid) rather than the cell itself. RBCs and nerve cells do not have cilia."
},
{
  "id": 283,
  "topic": "Cilia and Flagella",
  "q": "The term 'axoneme' refers to:",
  "options": [
    "The basal body from which cilia emerge",
    "The plasma membrane covering of cilia",
    "The core of cilia or flagella possessing microtubules",
    "The central sheath enclosing central tubules"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Their core called the axoneme, possesses a number of microtubules running parallel to the long axis.' Axoneme = the core structure of cilia/flagella. It is NOT the basal body, plasma membrane covering, or central sheath (which is a component within the axoneme)."
},
{
  "id": 284,
  "topic": "Cilia and Flagella",
  "q": "<b>Assertion (A):</b> The 9+2 array of microtubules is characteristic of the axoneme of eukaryotic cilia and flagella.<br><b>Reason (R):</b> The arrangement consists of nine doublets of peripheral microtubules and a pair of central microtubules.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. The 9+2 array is indeed characteristic of eukaryotic cilia and flagella (A is true). NCERT describes it as 'nine doublets of radially arranged peripheral microtubules, and a pair of centrally located microtubules' (R is true). R correctly describes and explains the 9+2 arrangement mentioned in A."
},
{
  "id": 285,
  "topic": "Cilia and Flagella",
  "q": "Which of the following statements is <b>correct</b> regarding basal bodies?",
  "options": [
    "They are found only at the base of flagella, not cilia",
    "They are membrane-bound organelles",
    "They are centriole-like structures from which both cilia and flagella emerge",
    "They possess the 9+2 microtubular arrangement"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Both the cilium and flagellum emerge from centriole-like structure called the basal bodies.' They are at the base of BOTH cilia and flagella (not just flagella). Basal bodies typically have a 9+0 arrangement (9 triplets, no central pair), not 9+2. They are non-membrane bound centriole-like structures."
},
{
  "id": 286,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "A centrosome usually contains:",
  "options": [
    "One cylindrical centriole",
    "Two cylindrical centrioles surrounded by amorphous pericentriolar materials",
    "Three centrioles arranged in a triangle",
    "Multiple centrioles arranged randomly"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Centrosome is an organelle usually containing two cylindrical structures called centrioles. They are surrounded by amorphous pericentriolar materials.' Key details: TWO centrioles + surrounded by pericentriolar materials."
},
{
  "id": 287,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The two centrioles in a centrosome are oriented:",
  "options": [
    "Parallel to each other",
    "At 45 degrees to each other",
    "Perpendicular to each other",
    "At 120 degrees to each other"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Both the centrioles in a centrosome lie perpendicular to each other in which each has an organisation like the cartwheel.' Perpendicular = at right angles (90°). This spatial arrangement is a frequently tested structural detail."
},
{
  "id": 288,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Each centriole has an organisation like a:",
  "options": [
    "Wheel and axle",
    "Cartwheel",
    "Spiral staircase",
    "Stack of coins"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'each has an organisation like the cartwheel.' The cartwheel structure refers to the hub-and-spoke arrangement when viewed in cross-section. Stack of coins describes grana in chloroplasts."
},
{
  "id": 289,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The peripheral fibrils of a centriole are:",
  "options": [
    "Nine evenly spaced doublets of tubulin protein",
    "Nine evenly spaced triplets of tubulin protein",
    "Nine evenly spaced singlets of tubulin protein",
    "Eleven evenly spaced triplets of actin protein"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'They are made up of nine evenly spaced peripheral fibrils of tubulin protein. Each of the peripheral fibril is a triplet.' Centrioles have TRIPLETS (not doublets like cilia axoneme or singlets). The protein is TUBULIN (not actin). This centriole vs cilia distinction is extremely high-yield for NEET."
},
{
  "id": 290,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Consider the following comparison:<br>(a) Centriole – 9 triplets of peripheral microtubules<br>(b) Cilia axoneme – 9 doublets of peripheral microtubules + 2 central microtubules<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (a)",
    "Only (b)",
    "Both (a) and (b)",
    "Neither (a) nor (b)"
  ],
  "correct": 2,
  "explanation": "Both are correct. Centrioles have 9 triplets of peripheral fibrils (no central microtubules – 9+0 arrangement). Cilia/flagella axoneme has 9 doublets + 2 central microtubules (9+2 arrangement). This comparison between centriolar and ciliary microtubular arrangement is one of the most frequently tested NEET concepts."
},
{
  "id": 291,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The central part of the proximal region of the centriole is called:",
  "options": [
    "Axoneme",
    "Hub",
    "Central sheath",
    "Basal body"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The central part of the proximal region of the centriole is also proteinaceous and called the hub, which is connected with tubules of the peripheral triplets by radial spokes made of protein.' Hub is unique to the centriole description, while central sheath is part of the cilia axoneme."
},
{
  "id": 292,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The centrioles form all of the following <b>EXCEPT</b>:",
  "options": [
    "Basal body of cilia",
    "Basal body of flagella",
    "Spindle fibres during cell division",
    "Cristae in mitochondria"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'The centrioles form the basal body of cilia or flagella, and spindle fibres that give rise to spindle apparatus during cell division in animal cells.' Cristae are infoldings of the inner mitochondrial membrane and have NO relation to centrioles. Options A, B, and C are all centriole functions."
},
{
  "id": 293,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Nucleus as a cell organelle was first described by:",
  "options": [
    "Robert Hooke (1665)",
    "Antonie Van Leeuwenhoek",
    "Robert Brown (1831)",
    "Flemming"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Nucleus as a cell organelle was first described by Robert Brown as early as 1831.' Flemming named CHROMATIN but did not discover the nucleus. Robert Hooke observed dead cork cells. Leeuwenhoek observed live cells. Brown-nucleus association is very frequently tested."
},
{
  "id": 294,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The material of the nucleus stained by basic dyes was named chromatin by:",
  "options": [
    "Robert Brown",
    "Flemming",
    "Schleiden",
    "Virchow"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the material of the nucleus stained by the basic dyes was given the name chromatin by Flemming.' Robert Brown described the nucleus, but Flemming named chromatin. Students frequently confuse who named what – a common NEET trap."
},
{
  "id": 295,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The interphase nucleus contains all of the following <b>EXCEPT</b>:",
  "options": [
    "Chromatin",
    "Nuclear matrix",
    "Nucleoli",
    "Structured chromosomes"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'The interphase nucleus has highly extended and elaborate nucleoprotein fibres called chromatin, nuclear matrix and one or more spherical bodies called nucleoli.' Structured CHROMOSOMES are visible only in DIVIDING cells, not in interphase. During interphase, chromatin exists as loose fibres."
},
{
  "id": 296,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The nuclear envelope consists of:",
  "options": [
    "A single membrane with pores",
    "Two parallel membranes with a perinuclear space of 10 to 50 nm",
    "Three layered membrane like the cell envelope of bacteria",
    "Two membranes without any space between them"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'the nuclear envelope, which consists of two parallel membranes with a space between (10 to 50 nm) called the perinuclear space.' Key details: TWO parallel membranes, space between them = perinuclear space, width = 10-50 nm. All four details are frequently tested."
},
{
  "id": 297,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The outer membrane of the nuclear envelope is characterized by:",
  "options": [
    "Being continuous with the Golgi apparatus",
    "Lacking any ribosomes on its surface",
    "Being continuous with the endoplasmic reticulum and bearing ribosomes",
    "Being continuous with the plasma membrane"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'The outer membrane usually remains continuous with the endoplasmic reticulum and also bears ribosomes on it.' Two important features: (1) continuous with ER, and (2) bears ribosomes. This is why the outer nuclear membrane often appears rough (like RER)."
},
{
  "id": 298,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Nuclear pores are formed by:",
  "options": [
    "Invagination of the outer membrane only",
    "Dissolution of the inner membrane only",
    "Fusion of the two membranes of the nuclear envelope",
    "Breakage of the nuclear matrix"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'the nuclear envelope is interrupted by minute pores, which are formed by the fusion of its two membranes.' Nuclear pores are formed where the outer and inner membranes FUSE, creating channels for molecular transport."
},
{
  "id": 299,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Through nuclear pores, the movement of molecules takes place:",
  "options": [
    "Only from nucleus to cytoplasm",
    "Only from cytoplasm to nucleus",
    "In both directions between nucleus and cytoplasm",
    "Only during cell division"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'These nuclear pores are the passages through which movement of RNA and protein molecules takes place in both directions between the nucleus and the cytoplasm.' BOTH directions – RNA moves out to cytoplasm, proteins (like histones) move into the nucleus. This bidirectional transport is frequently tested."
},
{
  "id": 300,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Which of the following molecules move through nuclear pores?",
  "options": [
    "Only RNA molecules",
    "Only protein molecules",
    "RNA and protein molecules",
    "Lipid and carbohydrate molecules only"
  ],
  "correct": 2,
  "explanation": "As per NCERT, nuclear pores allow 'movement of RNA and protein molecules.' Both RNA and proteins pass through nuclear pores. mRNA, tRNA, rRNA move out; histones, polymerases move in. NCERT specifically mentions these two types of molecules."
},
{
  "id": 301,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Consider the following statements about the nucleolus:<br>(i) It is a membrane-bound structure within the nucleus.<br>(ii) It is a site for active ribosomal RNA synthesis.<br>(iii) Larger and more numerous nucleoli are present in cells actively carrying out protein synthesis.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "Statement (i) is INCORRECT – NCERT states 'it is not a membrane bound structure.' The nucleolus LACKS a membrane. Statements (ii) and (iii) are correct – it is the site of rRNA synthesis, and larger/more numerous nucleoli indicate active protein synthesis. This non-membrane-bound nature is a classic NEET trap."
},
{
  "id": 302,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "<b>Assertion (A):</b> The nucleolus is a site for active ribosomal RNA synthesis.<br><b>Reason (R):</b> Larger and more numerous nucleoli are present in cells actively carrying out protein synthesis.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. The nucleolus synthesizes rRNA (A is true). Cells actively making proteins need more ribosomes, hence more rRNA, leading to larger/more numerous nucleoli (R is true). R correctly explains the correlation between nucleolar size and protein synthesis activity."
},
{
  "id": 303,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Chromatin contains all of the following <b>EXCEPT</b>:",
  "options": [
    "DNA",
    "Histones",
    "Lipids",
    "RNA"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'Chromatin contains DNA and some basic proteins called histones, some non-histone proteins and also RNA.' FOUR components: DNA + histones + non-histone proteins + RNA. Lipids are NOT a component of chromatin. Students often forget that RNA is also present in chromatin."
},
{
  "id": 304,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "A single human cell has approximately how much DNA distributed among how many chromosomes?",
  "options": [
    "One metre long DNA in 44 chromosomes",
    "Two metre long DNA in 46 chromosomes",
    "Three metre long DNA in 48 chromosomes",
    "Two metre long DNA in 23 chromosomes"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'A single human cell has approximately two metre long thread of DNA distributed among its forty six (twenty three pairs) chromosomes.' 2 metres of DNA in 46 chromosomes (23 pairs). Option D gives 23 which is the haploid number, not diploid."
},
{
  "id": 305,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Kinetochores are:",
  "options": [
    "Thread-like structures connecting two chromosomes",
    "Disc-shaped structures present on the sides of the centromere",
    "Spherical bodies found in the nucleoplasm",
    "Membrane-bound structures surrounding the nucleus"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'disc shaped structures called kinetochores are present' on the sides of the centromere. Key details: DISC-SHAPED and located on SIDES OF CENTROMERE. Kinetochores are attachment points for spindle fibres during cell division."
},
{
  "id": 306,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Based on the position of the centromere, a chromosome with the centromere in the middle forming two equal arms is called:",
  "options": [
    "Sub-metacentric",
    "Acrocentric",
    "Telocentric",
    "Metacentric"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'The metacentric chromosome has middle centromere forming two equal arms of the chromosome.' Metacentric = middle centromere = equal arms. Sub-metacentric = slightly away from middle = unequal arms. Acrocentric = near end. Telocentric = terminal."
},
{
  "id": 307,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "A sub-metacentric chromosome is characterised by:",
  "options": [
    "Centromere in the middle forming two equal arms",
    "Centromere slightly away from the middle resulting in one shorter and one longer arm",
    "Centromere close to the end forming one extremely short and one very long arm",
    "Terminal centromere"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The sub-metacentric chromosome has centromere slightly away from the middle of the chromosome resulting into one shorter arm and one longer arm.' The centromere is NOT exactly in the middle (metacentric) and NOT near the end (acrocentric)."
},
{
  "id": 308,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Match the chromosome type with its centromere position:<br>(a) Metacentric – (i) Terminal centromere<br>(b) Acrocentric – (ii) Middle centromere<br>(c) Telocentric – (iii) Close to the end<br>(d) Sub-metacentric – (iv) Slightly away from the middle<br>Select the correct matching:",
  "options": [
    "a-(ii), b-(iii), c-(i), d-(iv)",
    "a-(i), b-(ii), c-(iii), d-(iv)",
    "a-(ii), b-(iv), c-(i), d-(iii)",
    "a-(iii), b-(ii), c-(iv), d-(i)"
  ],
  "correct": 0,
  "explanation": "Metacentric = middle (ii); Acrocentric = close to end (iii); Telocentric = terminal (i); Sub-metacentric = slightly away from middle (iv). This four-type classification based on centromere position is one of the most frequently tested NEET matching questions."
},
{
  "id": 309,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "An acrocentric chromosome has:",
  "options": [
    "Two equal arms",
    "One shorter arm and one longer arm",
    "One extremely short arm and one very long arm",
    "No visible arms"
  ],
  "correct": 2,
  "explanation": "As per NCERT, 'In case of acrocentric chromosome the centromere is situated close to its end forming one extremely short and one very long arm.' The key distinction from sub-metacentric is: acrocentric has 'extremely short' and 'very long' arms (more extreme inequality)."
},
{
  "id": 310,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The telocentric chromosome has a centromere that is:",
  "options": [
    "In the middle",
    "Slightly away from the middle",
    "Close to the end",
    "Terminal"
  ],
  "correct": 3,
  "explanation": "As per NCERT, 'the telocentric chromosome has a terminal centromere.' Terminal means at the very END of the chromosome. Close to the end = acrocentric. Slightly away from middle = sub-metacentric. Middle = metacentric. The difference between 'close to end' and 'terminal' distinguishes acrocentric from telocentric."
},
{
  "id": 311,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Satellite chromosomes have:",
  "options": [
    "Staining primary constrictions at variable locations",
    "Non-staining secondary constrictions at a constant location",
    "Multiple centromeres",
    "No centromere"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Sometimes a few chromosomes have non-staining secondary constrictions at a constant location. This gives the appearance of a small fragment called the satellite.' Key details: NON-STAINING, SECONDARY constriction, CONSTANT location. Primary constriction = centromere."
},
{
  "id": 312,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Which of the following mature cells lack a nucleus?<br>(i) Erythrocytes of many mammals<br>(ii) Sieve tube cells of vascular plants<br>(iii) Nerve cells of humans<br>Select the <b>correct</b> option:",
  "options": [
    "Only (i)",
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Some mature cells even lack nucleus, e.g., erythrocytes of many mammals and sieve tube cells of vascular plants.' Nerve cells DO have nuclei (they are among the most metabolically active cells). Note: 'erythrocytes of MANY mammals' – not all mammals."
},
{
  "id": 313,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "<b>Assertion (A):</b> The perinuclear space is the space between the two parallel membranes of the nuclear envelope.<br><b>Reason (R):</b> The width of the perinuclear space is 10 to 50 nm.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 1,
  "explanation": "Both A and R are true. The perinuclear space IS the space between the two membranes (A is true). Its width IS 10-50 nm (R is true). However, R does not EXPLAIN A – it merely provides an additional measurement detail about the perinuclear space. R describes a property of A but does not explain why it exists."
},
{
  "id": 314,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Microbodies are:",
  "options": [
    "Non-membrane bound structures found only in plant cells",
    "Membrane-bound minute vesicles containing various enzymes found in both plant and animal cells",
    "Large membrane-bound organelles found only in animal cells",
    "Non-membrane bound granules found in prokaryotic cells"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Many membrane bound minute vesicles called microbodies that contain various enzymes, are present in both plant and animal cells.' Key details: MEMBRANE-BOUND, MINUTE vesicles, contain ENZYMES, found in BOTH plant AND animal cells."
},
{
  "id": 315,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Consider the following statements about chromatin and chromosomes:<br>(i) Chromatin is visible as a loose network in interphase nucleus.<br>(ii) Chromosomes are visible only in dividing cells.<br>(iii) Chromatin and chromosomes are chemically different substances.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct – chromatin exists as loose fibres in interphase, and chromosomes are visible in dividing cells. Statement (iii) is INCORRECT – chromatin and chromosomes are the SAME material (DNA + histones + non-histone proteins + RNA) in different states of condensation. This is a very important conceptual point."
},
{
  "id": 316,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The hub of the centriole is connected with tubules of the peripheral triplets by:",
  "options": [
    "Linkers",
    "Bridges",
    "Radial spokes made of protein",
    "Central sheath"
  ],
  "correct": 2,
  "explanation": "As per NCERT, the hub 'is connected with tubules of the peripheral triplets by radial spokes made of protein.' Note: Both centrioles and cilia have radial spokes, but in centrioles they connect the hub to peripheral TRIPLETS, while in cilia they connect the central sheath to peripheral DOUBLETS."
},
{
  "id": 317,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "<b>Assertion (A):</b> Chromosomes are visible only during cell division.<br><b>Reason (R):</b> During interphase, the nucleoprotein fibres exist as loose and indistinct chromatin network.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 0,
  "explanation": "Both A and R are true. Chromosomes are visible only in dividing cells (A is true). NCERT states 'the interphase nucleus has a loose and indistinct network of nucleoprotein fibres called chromatin' (R is true). During division, chromatin condenses into visible chromosomes, so the loose chromatin state (R) explains why chromosomes aren't visible in interphase (A). R correctly explains A."
},
{
  "id": 318,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The centromere of a chromosome holds together:",
  "options": [
    "Two homologous chromosomes",
    "Two chromatids of a chromosome",
    "Two nucleoli",
    "Two satellite bodies"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'Centromere holds two chromatids of a chromosome.' The centromere is the primary constriction that holds the two sister chromatids together. Homologous chromosomes are held together by chiasmata during meiosis, not by centromere."
},
{
  "id": 319,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "The adjacent triplets of centriolar peripheral fibrils are:",
  "options": [
    "Freely floating without connections",
    "Linked to each other",
    "Connected only through the hub",
    "Separated by membranes"
  ],
  "correct": 1,
  "explanation": "As per NCERT, 'The adjacent triplets are also linked.' The peripheral triplets of the centriole are interconnected with each other through linkers, maintaining the structural integrity of the centriole."
},
{
  "id": 320,
  "topic": "Centrosome, Centrioles, Nucleus, Microbodies",
  "q": "Which of the following statements about the nucleus is <b>INCORRECT</b>?",
  "options": [
    "Normally there is only one nucleus per cell",
    "Variations in the number of nuclei are frequently observed",
    "All mature mammalian cells have a nucleus",
    "Sieve tube cells of vascular plants lack a nucleus"
  ],
  "correct": 2,
  "explanation": "Option C is INCORRECT – NOT all mature mammalian cells have a nucleus. NCERT states 'erythrocytes of many mammals' lack nucleus. Options A, B, and D are all correct as per NCERT. This enucleated cell concept is frequently tested in NEET."
},
{
  "id": 321,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Based on the presence or absence of which of the following, cells can be classified as eukaryotic or prokaryotic?",
  "options": [
    "Cell wall and ribosomes",
    "Membrane-bound nucleus and other organelles",
    "Cytoplasm and genetic material",
    "Plasma membrane and cytoskeleton"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'Based on the presence or absence of a membrane bound nucleus and other organelles, cells and hence organisms can be named as eukaryotic or prokaryotic.' The key criterion is MEMBRANE-BOUND nucleus and organelles – not just any structure. Ribosomes, cytoplasm, and genetic material are found in both."
},
{
  "id": 322,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "A typical eukaryotic cell consists of:",
  "options": [
    "Cell wall, nucleus and cytoplasm",
    "Cell membrane, nucleus and cytoplasm",
    "Cell wall, cell membrane and nucleus only",
    "Cell membrane, ribosomes and nucleoid"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'A typical eukaryotic cell consists of a cell membrane, nucleus and cytoplasm.' Cell wall is additional in plant cells only (not typical of ALL eukaryotic cells). Option D describes prokaryotic features. The three basic components are: cell membrane + nucleus + cytoplasm."
},
{
  "id": 323,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The endoplasmic reticulum helps in all of the following <b>EXCEPT</b>:",
  "options": [
    "Transport of substances",
    "Synthesis of proteins",
    "Synthesis of lipoproteins and glycogen",
    "Digestion of macromolecules"
  ],
  "correct": 3,
  "explanation": "As per NCERT summary, 'ER helps in the transport of substances, synthesis of proteins, lipoproteins and glycogen.' Digestion of macromolecules is the function of LYSOSOMES, not ER. This summary adds lipoproteins and glycogen synthesis as ER functions – important additions often tested in NEET."
},
{
  "id": 324,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Consider the following functions of the Endoplasmic Reticulum as stated in the NCERT summary:<br>(i) Transport of substances<br>(ii) Synthesis of proteins<br>(iii) Synthesis of lipoproteins<br>(iv) Synthesis of glycogen<br>(v) Packaging of secretions<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i), (ii), (iii) and (iv) only",
    "(i), (ii), (iii) and (v) only",
    "(ii), (iii), (iv) and (v) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "As per NCERT summary, ER functions include transport of substances (i), synthesis of proteins (ii), lipoproteins (iii), and glycogen (iv). Packaging of secretions (v) is the function of the GOLGI BODY, not ER. NCERT states 'The secretions of cells are packed in them (Golgi).' Only (i)-(iv) are ER functions."
},
{
  "id": 325,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Lysosomes are described in the NCERT summary as:",
  "options": [
    "Double membrane structures containing enzymes for synthesis of macromolecules",
    "Single membrane structures containing enzymes for digestion of all types of macromolecules",
    "Non-membrane bound structures with hydrolytic enzymes",
    "Double membrane structures for oxidative phosphorylation"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'Lysosomes are single membrane structures containing enzymes for digestion of all types of macromolecules.' Key details: SINGLE membrane (not double), DIGESTION (not synthesis), ALL TYPES of macromolecules. Double membrane = mitochondria/chloroplasts."
},
{
  "id": 326,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The nucleus not only controls the activities of organelles but also plays a major role in:",
  "options": [
    "Photosynthesis",
    "Osmotic regulation",
    "Heredity",
    "Lipid synthesis"
  ],
  "correct": 2,
  "explanation": "As per NCERT summary, the nucleus 'not only controls the activities of organelles but also plays a major role in heredity.' Two functions of nucleus: (1) controls organelle activities, and (2) heredity (due to DNA/chromosomes). Photosynthesis is a chloroplast function, lipid synthesis is SER function."
},
{
  "id": 327,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Mitochondria help in:",
  "options": [
    "Photophosphorylation and generation of NADPH",
    "Oxidative phosphorylation and generation of adenosine triphosphate",
    "Glycolysis and generation of pyruvate",
    "Substrate level phosphorylation only"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'Mitochondria help in oxidative phosphorylation and generation of adenosine triphosphate.' The specific term 'oxidative phosphorylation' (not photophosphorylation) and 'adenosine triphosphate' (ATP) are used. Photophosphorylation occurs in chloroplasts."
},
{
  "id": 328,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "In mitochondria, the outer membrane is smooth and the inner one folds into:",
  "options": [
    "Thylakoids",
    "Grana",
    "Several cristae",
    "Stroma lamellae"
  ],
  "correct": 2,
  "explanation": "As per NCERT summary, mitochondria 'are bound by double membrane; the outer membrane is smooth and inner one folds into several cristae.' Cristae are specifically mitochondrial. Thylakoids, grana, and stroma lamellae are chloroplast structures. Students confusing cristae with thylakoids is a common error."
},
{
  "id": 329,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "In chloroplasts, the site of light reactions and dark reactions respectively are:",
  "options": [
    "Stroma and grana",
    "Grana and stroma",
    "Thylakoid lumen and stroma",
    "Stroma lamellae and grana"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'The grana, in the plastid, is the site of light reactions and the stroma of dark reactions.' GRANA = light reactions; STROMA = dark reactions. This is one of the most frequently reversed and incorrectly answered NEET questions. Students commonly swap grana and stroma."
},
{
  "id": 330,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "<b>Assertion (A):</b> Grana in chloroplasts is the site of dark reactions.<br><b>Reason (R):</b> Stroma of chloroplasts is the site of light reactions.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is false but R is false",
    "A is true but R is true"
  ],
  "correct": 2,
  "explanation": "BOTH A and R are FALSE. As per NCERT summary, grana is the site of LIGHT reactions (not dark), and stroma is the site of DARK reactions (not light). Both statements have the reactions REVERSED. This is the most classic reversal trap in NEET cell biology."
},
{
  "id": 331,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The secretions of cells are packed in and transported from the cell by:",
  "options": [
    "Endoplasmic reticulum",
    "Golgi body",
    "Lysosomes",
    "Vacuoles"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'The golgi body is a membranous organelle composed of flattened sacs. The secretions of cells are packed in them and transported from the cell.' While ER is involved in synthesis and initial transport, the PACKAGING and final transport out of the cell is a Golgi function."
},
{
  "id": 332,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Consider the following:<br>(i) Chloroplasts contain chlorophyll.<br>(ii) Chromoplasts may contain carotene and xanthophyll.<br>(iii) Leucoplasts contain chlorophyll and carotenoids.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "Only (i) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct as per NCERT summary. Statement (iii) is INCORRECT – leucoplasts are COLOURLESS plastids that store nutrients; they do NOT contain chlorophyll or carotenoids. Chlorophyll is in chloroplasts, carotenoids are in chromoplasts."
},
{
  "id": 333,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Ribosomes are involved in protein synthesis and occur:",
  "options": [
    "Only freely in the cytoplasm",
    "Only associated with the endoplasmic reticulum",
    "Freely in the cytoplasm or associated with ER",
    "Only within the nucleus"
  ],
  "correct": 2,
  "explanation": "As per NCERT summary, 'Ribosomes are involved in protein synthesis. These occur freely in the cytoplasm or are associated with ER.' BOTH locations are correct. Free ribosomes synthesize proteins for intracellular use, while ER-bound ribosomes synthesize proteins for secretion."
},
{
  "id": 334,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The nucleus is enclosed by the nuclear envelope which is:",
  "options": [
    "A single membrane structure with nuclear pores",
    "A double membrane structure without pores",
    "A double membrane structure with nuclear pores",
    "A triple-layered structure like the cell envelope"
  ],
  "correct": 2,
  "explanation": "As per NCERT summary, 'The nucleus is enclosed by nuclear envelope, a double membrane structure with nuclear pores.' Three key features: DOUBLE membrane + WITH nuclear pores. Option A is wrong (single), Option B is wrong (without pores), Option D describes bacterial cell envelope."
},
{
  "id": 335,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The inner membrane of the nuclear envelope encloses:",
  "options": [
    "Only the nucleoplasm",
    "Only the chromatin material",
    "The nucleoplasm and the chromatin material",
    "The cytoplasm and organelles"
  ],
  "correct": 2,
  "explanation": "As per NCERT summary, 'The inner membrane encloses the nucleoplasm and the chromatin material.' BOTH nucleoplasm AND chromatin are enclosed by the inner nuclear membrane. Not just one or the other."
},
{
  "id": 336,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "In animal cells, centrioles form all of the following <b>EXCEPT</b>:",
  "options": [
    "Basal body of cilia",
    "Basal body of flagella",
    "Spindle apparatus during cell division",
    "Grana in chloroplasts"
  ],
  "correct": 3,
  "explanation": "As per NCERT summary, 'Centrosome and centriole form the basal body of cilia and flagella... In animal cells, centrioles also form spindle apparatus during cell division.' Grana are stacks of thylakoids in chloroplasts and have NO connection to centrioles. This is an obvious distractor but tests concept clarity."
},
{
  "id": 337,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The nucleus of a cell contains:",
  "options": [
    "Nucleoli and ribosomes only",
    "Nucleoli and chromatin network",
    "Chromatin network and mitochondria",
    "Nucleoli, chromatin and golgi bodies"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'Nucleus contains nucleoli and chromatin network.' Only nucleoli and chromatin are specifically stated as nuclear contents. Ribosomes are found on the outer nuclear membrane and in cytoplasm. Mitochondria and Golgi are cytoplasmic organelles."
},
{
  "id": 338,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "<b>Assertion (A):</b> Plant cells have a cell wall outside the cell membrane.<br><b>Reason (R):</b> Cell wall is a living, flexible structure that provides selective permeability.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – NCERT states 'Plant cells have a cell wall outside the cell membrane.' Reason is FALSE – the cell wall is a NON-LIVING, RIGID structure (not living and flexible). Selective permeability is a function of the PLASMA MEMBRANE, not the cell wall."
},
{
  "id": 339,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Consider the following statements from the NCERT summary:<br>(i) The plasma membrane is selectively permeable.<br>(ii) The plasma membrane facilitates transport of several molecules.<br>(iii) All cell organelles perform different but specific functions.<br>(iv) Plastids are found in both plant and animal cells.<br>Which of the above are <b>correct</b>?",
  "options": [
    "(i), (ii) and (iii) only",
    "(i), (ii) and (iv) only",
    "(i), (iii) and (iv) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Statement (iv) is INCORRECT – NCERT summary states 'Plastids are pigment containing organelles found in plant cells only' (though earlier text mentions euglenoides too). Statements (i), (ii), and (iii) are all correct as stated in the NCERT summary."
},
{
  "id": 340,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The Golgi body is described in the NCERT summary as:",
  "options": [
    "A non-membranous organelle composed of tubules",
    "A membranous organelle composed of flattened sacs",
    "A double membrane-bound organelle with cristae",
    "A single membrane vesicle with hydrolytic enzymes"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'The golgi body is a membranous organelle composed of flattened sacs.' Option C describes mitochondria. Option D describes lysosomes. The Golgi is specifically composed of FLATTENED SACS (cisternae), not tubules."
},
{
  "id": 341,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Which of the following correctly represents the relationship between cell structure and life?",
  "options": [
    "Cell is only the structural unit of life",
    "Cell is only the functional unit of life",
    "Cell is the structural and functional unit of life",
    "Cell is neither structural nor functional unit"
  ],
  "correct": 2,
  "explanation": "As per NCERT summary, 'Thus, cell is the structural and functional unit of life.' The cell is BOTH structural (provides organization) AND functional (carries out life processes). This concluding statement of the chapter is the core concept of cell biology."
},
{
  "id": 342,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Consider the following organelles and their membrane structure:<br>(a) Lysosomes – Single membrane<br>(b) Mitochondria – Double membrane<br>(c) Nucleus – Double membrane<br>(d) Ribosomes – Single membrane<br>Which of the above are <b>correctly</b> matched?",
  "options": [
    "(a), (b) and (c) only",
    "(a), (b) and (d) only",
    "(b), (c) and (d) only",
    "All of the above"
  ],
  "correct": 0,
  "explanation": "Lysosomes = single membrane (a-correct), Mitochondria = double membrane (b-correct), Nucleus = double membrane with nuclear envelope (c-correct). Ribosomes are NON-membrane bound (d-INCORRECT). Options (a), (b), and (c) are correctly matched."
},
{
  "id": 343,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "<b>Assertion (A):</b> Centrosome and centriole form the basal body of cilia and flagella.<br><b>Reason (R):</b> In animal cells, centrioles also form spindle apparatus during cell division.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 1,
  "explanation": "Both A and R are true as per NCERT summary. However, R does NOT explain A – the formation of spindle apparatus (R) is an ADDITIONAL function of centrioles, not the reason why they form basal bodies of cilia/flagella (A). These are two SEPARATE functions of centrioles."
},
{
  "id": 344,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The green coloured plastids are called _____ which contain _____:",
  "options": [
    "Chromoplasts, which contain carotene",
    "Chloroplasts, which contain chlorophyll",
    "Leucoplasts, which contain stored nutrients",
    "Chloroplasts, which contain xanthophyll only"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'The green coloured plastids are chloroplasts, which contain chlorophyll.' Chromoplasts are OTHER coloured (yellow/orange/red) plastids. Leucoplasts are colourless. Chloroplasts are specifically green due to chlorophyll."
},
{
  "id": 345,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Which of the following pairs of organelles are bound by double membranes?",
  "options": [
    "Mitochondria and lysosomes",
    "Mitochondria and nucleus",
    "Lysosomes and Golgi complex",
    "Vacuoles and ribosomes"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, mitochondria are 'bound by double membrane' and the nucleus is enclosed by 'nuclear envelope, a double membrane structure.' Lysosomes are single membrane, Golgi is membranous but not double membrane, vacuoles are single membrane (tonoplast), ribosomes are non-membrane bound."
},
{
  "id": 346,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Consider the following summary statements:<br>(i) All organisms are made of cells or aggregates of cells.<br>(ii) Cells vary in their shape, size and activities/functions.<br>(iii) All cells are identical in structure and function.<br>Which of the above is/are <b>correct</b>?",
  "options": [
    "Only (i) and (ii)",
    "Only (i) and (iii)",
    "Only (ii) and (iii)",
    "All – (i), (ii) and (iii)"
  ],
  "correct": 0,
  "explanation": "Statements (i) and (ii) are correct as per NCERT summary. Statement (iii) is INCORRECT – the summary explicitly states cells 'vary in their shape, size and activities/functions,' meaning they are NOT identical. Cell diversity is a fundamental concept."
},
{
  "id": 347,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Chromoplasts may contain pigments like:",
  "options": [
    "Chlorophyll a and chlorophyll b",
    "Carotene and xanthophyll",
    "Phycocyanin and phycoerythrin",
    "Anthocyanin and flavonoids"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'the other coloured plastids are chromoplasts, which may contain pigments like carotene and xanthophyll.' Chlorophylls are in chloroplasts. Phycobilins are in cyanobacteria. Anthocyanins are vacuolar pigments. Only carotene and xanthophyll are specifically stated as chromoplast pigments."
},
{
  "id": 348,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "Which of the following organelles facilitates locomotion?",
  "options": [
    "Mitochondria",
    "Lysosomes",
    "Cilia and flagella",
    "Golgi complex"
  ],
  "correct": 2,
  "explanation": "As per NCERT summary, 'Centrosome and centriole form the basal body of cilia and flagella that facilitate locomotion.' Cilia and flagella are specifically involved in locomotion. Mitochondria provide energy (ATP), lysosomes digest, and Golgi packages – none directly facilitate locomotion."
},
{
  "id": 349,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "The endomembrane system as per NCERT summary includes:",
  "options": [
    "ER, Golgi complex, mitochondria and vacuoles",
    "ER, Golgi complex, lysosomes and vacuoles",
    "ER, Golgi complex, lysosomes and chloroplasts",
    "ER, Golgi complex, lysosomes and peroxisomes"
  ],
  "correct": 1,
  "explanation": "As per NCERT summary, 'The endomembrane system includes ER, golgi complex, lysosomes and vacuoles.' Mitochondria, chloroplasts, and peroxisomes are explicitly EXCLUDED from the endomembrane system as their functions are not coordinated with these components."
},
{
  "id": 350,
  "topic": "Summary – Cell: The Unit of Life",
  "q": "<b>Assertion (A):</b> Lysosomes contain enzymes for digestion of all types of macromolecules.<br><b>Reason (R):</b> Lysosomes are double membrane structures formed by the Golgi apparatus.",
  "options": [
    "Both A and R are true and R correctly explains A",
    "Both A and R are true but R does not correctly explain A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  "correct": 2,
  "explanation": "Assertion is TRUE – NCERT summary states lysosomes contain 'enzymes for digestion of all types of macromolecules.' Reason is FALSE – lysosomes are SINGLE membrane structures, not double membrane. NCERT summary clearly states 'Lysosomes are single membrane structures.' This single vs double membrane distinction is one of the most crucial NEET traps."
}
];
