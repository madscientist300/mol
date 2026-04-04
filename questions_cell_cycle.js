// ===== CHAPTER: Cell Cycle and Cell Division =====
const allQuestions = [
{
  id: 1,
  topic: "Cell Cycle",
  q: "Which of the following is the correct sequence of events in a cell cycle?",
  options: [
    "Cell division → DNA replication → Cell growth",
    "DNA replication → Cell growth → Cell division",
    "Cell growth → DNA replication → Cell division",
    "Cell growth → Cell division → DNA replication"
  ],
  correct: 2,
  explanation: "In a cell cycle, the cell first grows (G1), then replicates its DNA (S phase), continues preparation (G2), and finally divides (M phase). So the correct sequence is cell growth → DNA replication → cell division."
},
{
  id: 2,
  topic: "Cell Cycle",
  q: "The cell cycle is defined as the sequence of events by which a cell:<br>(i) Duplicates its genome<br>(ii) Synthesises other constituents<br>(iii) Eventually divides into two daughter cells<br><br>Which of the above is/are correct?",
  options: [
    "Only (i) and (iii)",
    "Only (i) and (ii)",
    "Only (ii) and (iii)",
    "All — (i), (ii) and (iii)"
  ],
  correct: 3,
  explanation: "As per NCERT, the cell cycle involves duplication of the genome, synthesis of other cell constituents, and eventual division into two daughter cells. All three are part of the definition."
},
{
  id: 3,
  topic: "Cell Cycle",
  q: "Which of the following statements is <b>incorrect</b> regarding the cell cycle?",
  options: [
    "DNA synthesis occurs throughout the cell cycle",
    "Cell growth in terms of cytoplasmic increase is a continuous process",
    "Events of cell division are under genetic control",
    "Replicated chromosomes are distributed by a complex series of events"
  ],
  correct: 0,
  explanation: "DNA synthesis does NOT occur throughout the cell cycle. It occurs only during one specific stage — the S phase. Cell growth (cytoplasmic increase) is continuous, but DNA synthesis is restricted to S phase."
},
{
  id: 4,
  topic: "Cell Cycle",
  q: "<b>Assertion (A):</b> All cells reproduce by dividing into two daughter cells.<br><b>Reason (R):</b> Cycles of growth and division allow a single cell to form a structure consisting of millions of cells.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both statements are true as per NCERT. However, R explains how organisms grow from one cell to millions of cells — it is a consequence of A, not the reason why cells divide into two. The reason cells divide into two is a fundamental biological property, not explained by R."
},
{
  id: 5,
  topic: "Cell Cycle",
  q: "Consider the following statements:<br>(a) Cell division, DNA replication, and cell growth occur in a coordinated manner.<br>(b) This coordination ensures formation of progeny cells with intact genomes.<br>(c) DNA replication is a continuous process like cytoplasmic growth.<br><br>Which of the above statements is/are <b>correct</b>?",
  options: [
    "Only (a) and (b)",
    "Only (b) and (c)",
    "Only (a) and (c)",
    "All — (a), (b) and (c)"
  ],
  correct: 0,
  explanation: "Statements (a) and (b) are correct as per NCERT. Statement (c) is wrong because DNA replication occurs only during S phase, whereas cytoplasmic growth is continuous."
},
{
  id: 6,
  topic: "Cell Cycle",
  q: "Which of the following best describes why cell division, DNA replication, and cell growth must be coordinated?",
  options: [
    "To ensure faster cell division",
    "To ensure correct division and formation of progeny cells containing intact genomes",
    "To reduce the duration of the cell cycle",
    "To ensure that cytoplasmic growth stops during DNA replication"
  ],
  correct: 1,
  explanation: "NCERT specifically states that coordination of these processes is needed to ensure correct division and formation of progeny cells containing intact genomes."
},
{
  id: 7,
  topic: "Cell Cycle",
  q: "A student states: 'Growth and reproduction are characteristics of cells, but not of all living organisms.' This statement is:",
  options: [
    "Correct, as some organisms do not grow",
    "Correct, as unicellular organisms do not reproduce",
    "Incorrect, as growth and reproduction are characteristics of all living organisms",
    "Incorrect, as only multicellular organisms show growth"
  ],
  correct: 2,
  explanation: "As per NCERT, growth and reproduction are characteristics of cells, indeed of ALL living organisms. The student's statement is therefore incorrect."
},
{
  id: 8,
  topic: "Cell Cycle",
  q: "<b>Assertion (A):</b> Although cell growth is a continuous process, DNA synthesis occurs only during one specific stage in the cell cycle.<br><b>Reason (R):</b> The events of cell division are under genetic control.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both statements are independently true as per NCERT. However, R (genetic control of cell division events) does not directly explain why DNA synthesis is restricted to S phase while growth is continuous. They are separate facts."
},
{
  id: 9,
  topic: "Cell Cycle",
  q: "Each parental cell gives rise to ______ daughter cells each time they divide.",
  options: [
    "Four",
    "Two",
    "Eight",
    "Variable number depending on cell type"
  ],
  correct: 1,
  explanation: "As per NCERT, all cells reproduce by dividing into two, with each parental cell giving rise to two daughter cells each time they divide."
},
{
  id: 10,
  topic: "Cell Cycle",
  q: "Which of the following processes occurs only during a specific stage of the cell cycle, and not continuously?",
  options: [
    "Cytoplasmic growth",
    "Protein synthesis",
    "DNA synthesis",
    "RNA transcription"
  ],
  correct: 2,
  explanation: "NCERT clearly states that cell growth (cytoplasmic increase) is continuous, but DNA synthesis occurs only during one specific stage — the S phase. This is a frequently tested concept in NEET."
},
{
  id: 11,
  topic: "Cell Cycle",
  q: "A new cell population formed by growth and division of a single parental cell and its progeny demonstrates which fundamental property of life?",
  options: [
    "Metabolism only",
    "Growth and reproduction",
    "Homeostasis",
    "Adaptation"
  ],
  correct: 1,
  explanation: "The formation of a cell population from a single cell through cycles of growth and division exemplifies the fundamental properties of growth and reproduction."
},
{
  id: 12,
  topic: "Cell Cycle",
  q: "The distribution of replicated chromosomes to daughter nuclei involves:",
  options: [
    "A simple passive process",
    "Random segregation without any control",
    "A complex series of events under genetic control",
    "Only cytokinesis"
  ],
  correct: 2,
  explanation: "NCERT states that replicated chromosomes are distributed to daughter nuclei by a complex series of events during cell division, and these events are themselves under genetic control."
},
{
  id: 13,
  topic: "Phases of Cell Cycle",
  q: "A typical human cell in culture divides once in approximately every 24 hours. Out of this, cell division proper (M phase) lasts for about:",
  options: [
    "12 hours",
    "6 hours",
    "1 hour",
    "30 minutes"
  ],
  correct: 2,
  explanation: "NCERT states that in the 24-hour average duration of cell cycle of a human cell, cell division proper lasts for only about an hour. The interphase lasts more than 95% of the duration."
},
{
  id: 14,
  topic: "Phases of Cell Cycle",
  q: "The interphase of cell cycle occupies approximately what percentage of the total cell cycle duration in a human cell?",
  options: [
    "50%",
    "75%",
    "More than 95%",
    "Less than 5%"
  ],
  correct: 2,
  explanation: "As per NCERT, the interphase lasts more than 95% of the duration of the cell cycle. This is a commonly tested numerical fact in NEET."
},
{
  id: 15,
  topic: "Phases of Cell Cycle",
  q: "Consider the following statements about interphase:<br>(a) It is also called the resting phase.<br>(b) The cell does not undergo any activity during interphase.<br>(c) The cell prepares for division by undergoing cell growth and DNA replication.<br><br>Which of the above is/are correct?",
  options: [
    "Only (a) and (c)",
    "Only (b) and (c)",
    "Only (a)",
    "All — (a), (b) and (c)"
  ],
  correct: 0,
  explanation: "Interphase is called the 'resting phase' (a — correct), but this is a misnomer because the cell is actively preparing for division (c — correct). Statement (b) is incorrect — the cell is metabolically very active during interphase. This is a common NEET trap."
},
{
  id: 16,
  topic: "Phases of Cell Cycle",
  q: "Yeast can progress through the cell cycle in about:",
  options: [
    "24 hours",
    "12 hours",
    "90 minutes",
    "45 minutes"
  ],
  correct: 2,
  explanation: "NCERT mentions that yeast can progress through the cell cycle in only about 90 minutes, in contrast to approximately 24 hours for human cells in culture."
},
{
  id: 17,
  topic: "Phases of Cell Cycle",
  q: "The M phase of the cell cycle starts with ______ and usually ends with ______.",
  options: [
    "Cytokinesis; Karyokinesis",
    "Karyokinesis; Cytokinesis",
    "DNA replication; Cytokinesis",
    "G2 phase; G1 phase"
  ],
  correct: 1,
  explanation: "NCERT clearly states that M phase starts with nuclear division (karyokinesis) and usually ends with division of cytoplasm (cytokinesis)."
},
{
  id: 18,
  topic: "Phases of Cell Cycle",
  q: "During the S phase, if the initial DNA content is 2C, the DNA content after S phase becomes:",
  options: [
    "2C",
    "4C",
    "8C",
    "C"
  ],
  correct: 1,
  explanation: "During S phase, DNA replication occurs and the amount of DNA per cell doubles from 2C to 4C. This is directly stated in NCERT."
},
{
  id: 19,
  topic: "Phases of Cell Cycle",
  q: "A cell at G1 phase has a diploid (2n) chromosome number. After S phase, the chromosome number will be:",
  options: [
    "4n",
    "n",
    "2n",
    "8n"
  ],
  correct: 2,
  explanation: "This is a classic NEET trap. During S phase, DNA content doubles (2C → 4C), but chromosome number remains the same (2n). Each chromosome now consists of two sister chromatids joined at the centromere."
},
{
  id: 20,
  topic: "Phases of Cell Cycle",
  q: "<b>Assertion (A):</b> After S phase, DNA content doubles but chromosome number remains unchanged.<br><b>Reason (R):</b> During S phase, each chromosome replicates to form two sister chromatids that remain joined at the centromere and are counted as one chromosome.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. R correctly explains A — DNA doubles because each chromosome replicates, but since sister chromatids remain attached at the centromere, they are counted as a single chromosome, so chromosome number stays 2n."
},
{
  id: 21,
  topic: "Phases of Cell Cycle",
  q: "G1 phase corresponds to the interval between:",
  options: [
    "S phase and G2 phase",
    "G2 phase and mitosis",
    "Mitosis and initiation of DNA replication",
    "Two successive S phases"
  ],
  correct: 2,
  explanation: "NCERT defines G1 phase as the interval between mitosis and initiation of DNA replication."
},
{
  id: 22,
  topic: "Phases of Cell Cycle",
  q: "During G1 phase, which of the following occurs?<br>(a) Cell is metabolically active<br>(b) Cell continuously grows<br>(c) DNA replication takes place<br>(d) Centriole duplicates",
  options: [
    "Only (a) and (b)",
    "Only (a), (b) and (c)",
    "Only (c) and (d)",
    "All of the above"
  ],
  correct: 0,
  explanation: "During G1 phase, the cell is metabolically active and continuously grows but does NOT replicate its DNA. DNA replication occurs in S phase. Centriole duplication also occurs during S phase (in animal cells)."
},
{
  id: 23,
  topic: "Phases of Cell Cycle",
  q: "In animal cells, centriole duplication occurs during which phase?",
  options: [
    "G1 phase",
    "S phase",
    "G2 phase",
    "M phase"
  ],
  correct: 1,
  explanation: "NCERT specifically states that in animal cells, during the S phase, DNA replication begins in the nucleus, and the centriole duplicates in the cytoplasm."
},
{
  id: 24,
  topic: "Phases of Cell Cycle",
  q: "During G2 phase, which of the following events take place?<br>(a) Proteins are synthesised in preparation for mitosis<br>(b) Cell growth continues<br>(c) DNA replication takes place<br>(d) Centriole duplicates",
  options: [
    "Only (a) and (b)",
    "Only (c) and (d)",
    "Only (a), (b) and (c)",
    "All of the above"
  ],
  correct: 0,
  explanation: "During G2 phase, proteins are synthesised in preparation for mitosis while cell growth continues. DNA replication and centriole duplication occur during S phase, not G2."
},
{
  id: 25,
  topic: "Phases of Cell Cycle",
  q: "Cells that do not divide further exit G1 phase to enter:",
  options: [
    "S phase",
    "G2 phase",
    "Quiescent stage (G0)",
    "M phase"
  ],
  correct: 2,
  explanation: "NCERT states that cells which do not divide further exit G1 phase to enter an inactive stage called quiescent stage (G0) of the cell cycle."
},
{
  id: 26,
  topic: "Phases of Cell Cycle",
  q: "Which of the following is <b>true</b> about cells in the G0 (quiescent) stage?",
  options: [
    "They are metabolically inactive",
    "They are metabolically active but no longer proliferate unless required",
    "They are dead cells",
    "They are actively dividing cells"
  ],
  correct: 1,
  explanation: "NCERT clearly states that cells in G0 remain metabolically active but no longer proliferate unless called on to do so depending on the requirement of the organism. A common trap is to think G0 cells are metabolically inactive."
},
{
  id: 27,
  topic: "Phases of Cell Cycle",
  q: "Which of the following is an example of cells that enter G0 phase in adult animals?",
  options: [
    "Bone marrow cells",
    "Heart cells",
    "Skin epithelial cells",
    "Cells of intestinal lining"
  ],
  correct: 1,
  explanation: "NCERT gives heart cells as an example of cells in adult animals that do not appear to exhibit division and enter G0 phase."
},
{
  id: 28,
  topic: "Phases of Cell Cycle",
  q: "<b>Assertion (A):</b> In animals, mitotic cell division is only seen in diploid somatic cells.<br><b>Reason (R):</b> Haploid cells can never undergo mitosis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — in animals, mitotic division is generally seen only in diploid somatic cells. However, R is false — haploid cells CAN undergo mitosis. NCERT gives examples: male honey bees (animals, exception) and plants show mitotic divisions in both haploid and diploid cells."
},
{
  id: 29,
  topic: "Phases of Cell Cycle",
  q: "Which of the following is an exception where haploid cells divide by mitosis in animals?",
  options: [
    "Female honey bees",
    "Male honey bees",
    "Human RBCs",
    "Human WBCs"
  ],
  correct: 1,
  explanation: "NCERT mentions male honey bees as an exception where haploid cells divide by mitosis in animals. Male honey bees (drones) develop from unfertilized haploid eggs."
},
{
  id: 30,
  topic: "Phases of Cell Cycle",
  q: "In plants, mitotic divisions can occur in:",
  options: [
    "Only diploid cells",
    "Only haploid cells",
    "Both haploid and diploid cells",
    "Neither haploid nor diploid cells"
  ],
  correct: 2,
  explanation: "NCERT states that plants can show mitotic divisions in both haploid and diploid cells. This is in contrast to animals where mitosis generally occurs only in diploid somatic cells."
},
{
  id: 31,
  topic: "Phases of Cell Cycle",
  q: "Mitosis is also called equational division because:",
  options: [
    "The cell size remains equal",
    "The number of chromosomes in parent and progeny cells is the same",
    "The cytoplasm is equally divided",
    "DNA content doubles during the process"
  ],
  correct: 1,
  explanation: "Mitosis is called equational division because the number of chromosomes in the parent and progeny cells remains the same."
},
{
  id: 32,
  topic: "Phases of Cell Cycle",
  q: "Karyokinesis involves the following four stages in correct order:",
  options: [
    "Metaphase → Prophase → Anaphase → Telophase",
    "Prophase → Anaphase → Metaphase → Telophase",
    "Prophase → Metaphase → Anaphase → Telophase",
    "Telophase → Anaphase → Metaphase → Prophase"
  ],
  correct: 2,
  explanation: "The correct sequence of karyokinesis stages is Prophase → Metaphase → Anaphase → Telophase (PMAT)."
},
{
  id: 33,
  topic: "Phases of Cell Cycle",
  q: "Which of the following statements about mitosis is <b>correct</b>?",
  options: [
    "Clear-cut lines can be drawn between various stages of mitosis",
    "Cell division is a progressive process and clear-cut lines cannot be drawn between various stages",
    "Mitosis involves only three stages",
    "Karyokinesis always follows cytokinesis"
  ],
  correct: 1,
  explanation: "NCERT emphasises that cell division is a progressive process and very clear-cut lines cannot be drawn between various stages. The division into stages is for convenience of study."
},
{
  id: 34,
  topic: "Phases of Cell Cycle",
  q: "An onion root tip cell has 16 chromosomes. What will be the chromosome number and DNA content at the following stages?<br><br>Select the <b>correct</b> combination:",
  options: [
    "G1: 16 chromosomes, 2C; After S: 16 chromosomes, 4C; After M: 16 chromosomes, 2C",
    "G1: 16 chromosomes, 2C; After S: 32 chromosomes, 4C; After M: 16 chromosomes, 2C",
    "G1: 16 chromosomes, 4C; After S: 16 chromosomes, 4C; After M: 16 chromosomes, 2C",
    "G1: 8 chromosomes, 2C; After S: 16 chromosomes, 4C; After M: 8 chromosomes, 2C"
  ],
  correct: 0,
  explanation: "At G1: 16 chromosomes, 2C DNA. After S phase: chromosomes remain 16 (DNA doubles to 4C). After M phase: 16 chromosomes, 2C DNA. Chromosome number does NOT change after S phase — only DNA content doubles."
},
{
  id: 35,
  topic: "Phases of Cell Cycle",
  q: "Consider the following statements:<br>(a) Interphase is the phase between two successive M phases.<br>(b) M phase represents actual cell division.<br>(c) Interphase is shorter than M phase.<br>(d) Duration of cell cycle is same in all organisms.<br><br>How many of the above statements are <b>correct</b>?",
  options: [
    "One",
    "Two",
    "Three",
    "Four"
  ],
  correct: 1,
  explanation: "Only (a) and (b) are correct. (c) is wrong — interphase is much longer (>95% of cell cycle). (d) is wrong — cell cycle duration varies from organism to organism and cell type to cell type."
},
{
  id: 36,
  topic: "Phases of Cell Cycle",
  q: "Which of the following correctly represents the two basic phases of the cell cycle?",
  options: [
    "Karyokinesis and Cytokinesis",
    "G1 phase and G2 phase",
    "Interphase and M phase",
    "S phase and M phase"
  ],
  correct: 2,
  explanation: "NCERT states that the cell cycle is divided into two basic phases: Interphase and M Phase (Mitosis phase)."
},
{
  id: 37,
  topic: "Phases of Cell Cycle",
  q: "A cell biologist observes that a particular cell type divides only occasionally, as needed to replace cells lost due to injury. Such cells are most likely in:",
  options: [
    "Continuous S phase",
    "G0 phase",
    "Permanent M phase",
    "G2 phase"
  ],
  correct: 1,
  explanation: "Cells that divide only occasionally to replace lost cells are in the G0 (quiescent) phase. They exit G1 and remain metabolically active but do not proliferate unless needed."
},
{
  id: 38,
  topic: "Phases of Cell Cycle",
  q: "<b>Assertion (A):</b> Interphase is called the resting phase of the cell cycle.<br><b>Reason (R):</b> During interphase, the cell is neither growing nor metabolically active.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — interphase is indeed called the resting phase. But R is false — during interphase, the cell is actively growing, metabolically active, and preparing for division (undergoing DNA replication and protein synthesis). The term 'resting' is a misnomer."
},
{
  id: 39,
  topic: "Phases of Cell Cycle",
  q: "Which of the following correctly matches the cell cycle phase with its key event?<br><br>(a) G1 — Metabolically active, cell grows, no DNA replication<br>(b) S — DNA replication, centriole duplication (in animal cells)<br>(c) G2 — Protein synthesis for mitosis, cell growth continues<br>(d) M — Actual cell division",
  options: [
    "Only (a) and (d)",
    "Only (a), (b) and (c)",
    "Only (b), (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 3,
  explanation: "All four matchings are correct as per NCERT. G1: growth without DNA replication; S: DNA replication + centriole duplication; G2: protein synthesis + continued growth; M: actual division."
},
{
  id: 40,
  topic: "Phases of Cell Cycle",
  q: "Select the <b>incorrect</b> statement:",
  options: [
    "Cells in G0 phase are metabolically active",
    "Heart cells in adult animals typically enter G0 phase",
    "G0 cells can re-enter the cell cycle if required by the organism",
    "G0 phase occurs after G2 phase"
  ],
  correct: 3,
  explanation: "G0 phase occurs when cells exit G1 phase, not after G2 phase. This is a common student error. All other statements are correct as per NCERT."
},
{
  id: 41,
  topic: "Phases of Cell Cycle",
  q: "In a cell with 2n = 20 chromosomes, what will be the DNA content during G2 phase if the DNA content after M phase is 2C?",
  options: [
    "2C",
    "C",
    "4C",
    "8C"
  ],
  correct: 2,
  explanation: "After M phase: 2C. During G1: 2C. After S phase: 4C (DNA doubles). G2 phase follows S phase, so DNA content remains 4C during G2."
},
{
  id: 42,
  topic: "Phases of Cell Cycle",
  q: "Which of the following is the most dramatic period of the cell cycle involving major reorganisation of virtually all cell components?",
  options: [
    "G1 phase",
    "S phase",
    "G2 phase",
    "M phase"
  ],
  correct: 3,
  explanation: "NCERT describes M phase as the most dramatic period of the cell cycle, involving a major reorganisation of virtually all components of the cell."
},
{
  id: 43,
  topic: "Phases of Cell Cycle",
  q: "The correct sequence of interphase sub-stages is:",
  options: [
    "S → G1 → G2",
    "G2 → S → G1",
    "G1 → S → G2",
    "G1 → G2 → S"
  ],
  correct: 2,
  explanation: "Interphase consists of three sub-phases in the order: G1 (Gap 1) → S (Synthesis) → G2 (Gap 2). This is followed by M phase."
},
{
  id: 44,
  topic: "Phases of Cell Cycle",
  q: "A student claims: 'After S phase, a diploid cell becomes tetraploid.' This statement is:",
  options: [
    "Correct, because both DNA content and chromosome number double",
    "Correct, because chromosome number doubles to 4n",
    "Incorrect, because only DNA content doubles while chromosome number remains 2n",
    "Incorrect, because neither DNA content nor chromosome number changes"
  ],
  correct: 2,
  explanation: "This is a classic NEET trap. After S phase, DNA content doubles (2C → 4C), but chromosome number remains 2n because sister chromatids stay joined at the centromere and are counted as one chromosome. The cell does NOT become tetraploid."
},
{
  id: 45,
  topic: "Cell Cycle",
  q: "Which of the following statements is <b>true</b> regarding cell cycle?",
  options: [
    "DNA replication and cytoplasmic growth both occur continuously throughout the cell cycle",
    "DNA replication occurs continuously but cytoplasmic growth is restricted to specific stages",
    "Cytoplasmic growth is continuous but DNA replication occurs only during S phase",
    "Both DNA replication and cytoplasmic growth are restricted to S phase"
  ],
  correct: 2,
  explanation: "NCERT states: 'Although cell growth (in terms of cytoplasmic increase) is a continuous process, DNA synthesis occurs only during one specific stage in the cell cycle' (i.e., S phase)."
},
{
  id: 46,
  topic: "Phases of Cell Cycle",
  q: "Consider the following:<br>Cell X — Divides continuously<br>Cell Y — Does not divide, metabolically active<br>Cell Z — Divides occasionally when needed<br><br>Which cells are most likely in G0 phase?",
  options: [
    "Only Cell Y",
    "Only Cell Z",
    "Both Cell Y and Cell Z",
    "All three cells"
  ],
  correct: 2,
  explanation: "Both Cell Y (non-dividing but metabolically active, like heart cells) and Cell Z (divides only occasionally as needed) are in G0 phase. NCERT describes both types as cells that exit G1 to enter G0."
},
{
  id: 47,
  topic: "Phases of Cell Cycle",
  q: "Which of the following statements regarding mitosis in plants and animals is <b>correct</b>?",
  options: [
    "In both plants and animals, mitosis occurs only in diploid cells",
    "In plants, mitosis occurs in both haploid and diploid cells; in animals, generally only in diploid somatic cells",
    "In animals, mitosis occurs in both haploid and diploid cells; in plants, only in diploid cells",
    "Mitosis never occurs in haploid cells of any organism"
  ],
  correct: 1,
  explanation: "NCERT states that in animals, mitotic cell division is only seen in diploid somatic cells (with exceptions like male honey bees). However, plants can show mitotic divisions in both haploid and diploid cells."
},
{
  id: 48,
  topic: "Phases of Cell Cycle",
  q: "Karyokinesis refers to:",
  options: [
    "Division of cytoplasm",
    "Division of cell organelles",
    "Division of nucleus (separation of daughter chromosomes)",
    "Duplication of DNA"
  ],
  correct: 2,
  explanation: "Karyokinesis refers to nuclear division, corresponding to the separation of daughter chromosomes. Cytokinesis refers to the division of cytoplasm."
},
{
  id: 49,
  topic: "Phases of Cell Cycle",
  q: "If a cell at G1 has DNA content of 2C, the correct DNA content at different phases would be:",
  options: [
    "G1 = 2C, S = 2C→4C, G2 = 4C, After M = 2C",
    "G1 = 2C, S = 2C→4C, G2 = 2C, After M = 2C",
    "G1 = 4C, S = 4C→8C, G2 = 8C, After M = 4C",
    "G1 = 2C, S = 2C→4C, G2 = 4C, After M = 4C"
  ],
  correct: 0,
  explanation: "G1: 2C. During S phase DNA doubles from 2C to 4C. G2: remains 4C (no further replication). After M phase (mitosis): back to 2C as the cell divides."
},
{
  id: 50,
  topic: "Phases of Cell Cycle",
  q: "How many stages of karyokinesis are described during M phase?",
  options: [
    "Two",
    "Three",
    "Four",
    "Five"
  ],
  correct: 2,
  explanation: "Karyokinesis involves four stages: Prophase, Metaphase, Anaphase, and Telophase."
},
{
  id: 51,
  topic: "Phases of Cell Cycle",
  q: "The duration of the cell cycle can vary from:<br>(a) Organism to organism<br>(b) Cell type to cell type within the same organism<br><br>Which is correct?",
  options: [
    "Only (a)",
    "Only (b)",
    "Both (a) and (b)",
    "Neither (a) nor (b)"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'this duration of cell cycle can vary from organism to organism and also from cell type to cell type.' Both factors influence cell cycle duration."
},
{
  id: 52,
  topic: "Phases of Cell Cycle",
  q: "Which of the following represents the correct relationship between karyokinesis and cytokinesis during M phase?",
  options: [
    "Cytokinesis always precedes karyokinesis",
    "Karyokinesis and cytokinesis occur simultaneously",
    "Karyokinesis usually precedes cytokinesis",
    "Karyokinesis and cytokinesis are the same process"
  ],
  correct: 2,
  explanation: "NCERT states that M phase starts with nuclear division (karyokinesis) and usually ends with division of cytoplasm (cytokinesis). So karyokinesis usually precedes cytokinesis."
},
{
  id: 53,
  topic: "Cell Cycle",
  q: "<b>Assertion (A):</b> All organisms, even the largest, start their life from a single cell.<br><b>Reason (R):</b> Cycles of growth and division allow a single cell to form a structure consisting of millions of cells.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both A and R are true statements from NCERT. However, R explains how organisms become multicellular, not why organisms start from a single cell. The starting from a single cell is related to fertilization/reproduction, not growth and division cycles."
},
{
  id: 54,
  topic: "Phases of Cell Cycle",
  q: "Which of the following is <b>NOT</b> a sub-phase of interphase?",
  options: [
    "G1 phase",
    "S phase",
    "G2 phase",
    "M phase"
  ],
  correct: 3,
  explanation: "Interphase consists of three sub-phases: G1, S, and G2. M phase is a separate basic phase of the cell cycle and is NOT a part of interphase."
},
{
  id: 55,
  topic: "Phases of Cell Cycle",
  q: "A researcher observes a cell in which DNA content is 4C and chromosome number is 2n. The cell is most likely in:",
  options: [
    "G1 phase",
    "S phase or G2 phase",
    "G0 phase",
    "Early G1 after mitosis"
  ],
  correct: 1,
  explanation: "DNA content of 4C with 2n chromosomes indicates that DNA has replicated (doubled from 2C to 4C) but chromosomes haven't separated yet. This occurs during/after S phase and during G2 phase."
},
{
  id: 56,
  topic: "Phases of Cell Cycle",
  q: "Read the following statements and select the correct option:<br>(I) G0 cells exit from G1 phase<br>(II) G0 cells are metabolically inactive<br>(III) G0 cells can re-enter cell cycle if needed<br>(IV) Heart cells are examples of G0 cells",
  options: [
    "I, II and IV are correct",
    "I, III and IV are correct",
    "II, III and IV are correct",
    "All are correct"
  ],
  correct: 1,
  explanation: "Statements I, III, and IV are correct as per NCERT. Statement II is wrong — G0 cells remain metabolically ACTIVE but no longer proliferate. This is a very important distinction frequently tested in NEET."
},
{
  id: 57,
  topic: "Phases of Cell Cycle",
  q: "Which of the following correctly describes the event unique to S phase in animal cells?",
  options: [
    "Only DNA replication",
    "DNA replication in nucleus and centriole duplication in cytoplasm",
    "Only centriole duplication",
    "Protein synthesis for mitosis preparation"
  ],
  correct: 1,
  explanation: "NCERT specifically mentions that in animal cells, during S phase, DNA replication begins in the nucleus AND the centriole duplicates in the cytoplasm. Both events occur during S phase."
},
{
  id: 58,
  topic: "Phases of Cell Cycle",
  q: "Select the <b>correct</b> statement about cell division in organisms:",
  options: [
    "All cells in adult animals continue to divide throughout life",
    "All cells in plants divide all the time",
    "Some cells in adult animals do not appear to exhibit division, e.g., heart cells",
    "Cells that stop dividing become metabolically inactive immediately"
  ],
  correct: 2,
  explanation: "NCERT states that some cells in adult animals do not appear to exhibit division (e.g., heart cells). Not all cells divide continuously. Cells in G0 remain metabolically active."
},
{
  id: 59,
  topic: "Phases of Cell Cycle",
  q: "During which phase of cell cycle do cells primarily synthesise proteins needed for mitosis?",
  options: [
    "G1 phase",
    "S phase",
    "G2 phase",
    "Prophase of M phase"
  ],
  correct: 2,
  explanation: "NCERT states that during the G2 phase, proteins are synthesised in preparation for mitosis while cell growth continues."
},
{
  id: 60,
  topic: "Phases of Cell Cycle",
  q: "Match the following and select the correct option:<br>(a) Interphase — (i) Actual cell division<br>(b) M Phase — (ii) Phase between two successive M phases<br>(c) G0 — (iii) Quiescent stage<br>(d) Karyokinesis — (iv) Nuclear division",
  options: [
    "a-ii, b-i, c-iii, d-iv",
    "a-i, b-ii, c-iv, d-iii",
    "a-iii, b-iv, c-ii, d-i",
    "a-ii, b-iv, c-iii, d-i"
  ],
  correct: 0,
  explanation: "Interphase is the phase between two successive M phases (a-ii). M phase is actual cell division (b-i). G0 is the quiescent stage (c-iii). Karyokinesis is nuclear division (d-iv)."
},
{
  id: 61,
  topic: "Cell Cycle",
  q: "The term 'cell cycle' refers to:",
  options: [
    "Only the M phase of cell division",
    "Only the interphase when the cell prepares for division",
    "The sequence of events by which a cell duplicates its genome, synthesises other constituents, and divides into two daughter cells",
    "The time taken for DNA replication only"
  ],
  correct: 2,
  explanation: "The cell cycle is defined by NCERT as the sequence of events by which a cell duplicates its genome, synthesises the other constituents of the cell, and eventually divides into two daughter cells."
},
{
  id: 62,
  topic: "Phases of Cell Cycle",
  q: "If a human cell in culture has completed the S phase, which of the following would be true?",
  options: [
    "DNA content = 2C, Chromosome number = 2n",
    "DNA content = 4C, Chromosome number = 4n",
    "DNA content = 4C, Chromosome number = 2n",
    "DNA content = 2C, Chromosome number = 4n"
  ],
  correct: 2,
  explanation: "After S phase, DNA content doubles from 2C to 4C but chromosome number remains 2n because replicated chromatids are held together at the centromere and counted as one chromosome."
},
{
  id: 63,
  topic: "Karyokinesis - Prophase",
  q: "Prophase of mitosis follows which phases of interphase?",
  options: [
    "G1 and S phases",
    "S and G2 phases",
    "G1 and G2 phases",
    "Only S phase"
  ],
  correct: 1,
  explanation: "NCERT clearly states that prophase is the first stage of karyokinesis and follows the S and G2 phases of interphase."
},
{
  id: 64,
  topic: "Karyokinesis - Prophase",
  q: "During S and G2 phases of interphase, the new DNA molecules formed are:",
  options: [
    "Fully condensed and distinct",
    "Not distinct but intertwined",
    "Already separated as individual chromosomes",
    "Visible as compact mitotic chromosomes"
  ],
  correct: 1,
  explanation: "NCERT states that in the S and G2 phases, the new DNA molecules formed are not distinct but intertwined. They become distinct only during prophase when condensation begins."
},
{
  id: 65,
  topic: "Karyokinesis - Prophase",
  q: "Prophase is marked by the initiation of:",
  options: [
    "DNA replication",
    "Cytokinesis",
    "Condensation of chromosomal material",
    "Disintegration of nuclear envelope"
  ],
  correct: 2,
  explanation: "NCERT states: 'Prophase is marked by the initiation of condensation of chromosomal material.' The chromosomal material becomes untangled during chromatin condensation. Nuclear envelope disintegration occurs at the start of metaphase, not prophase."
},
{
  id: 66,
  topic: "Karyokinesis - Prophase",
  q: "Which of the following is <b>NOT</b> a characteristic event at the completion of prophase?",
  options: [
    "Chromosomal material condenses to form compact mitotic chromosomes",
    "Centrosome begins to move towards opposite poles",
    "Nuclear envelope completely disintegrates",
    "Chromosomes are seen composed of two chromatids attached at the centromere"
  ],
  correct: 2,
  explanation: "Complete disintegration of nuclear envelope marks the start of METAPHASE, not prophase. During prophase, the nuclear envelope is still present but begins to break down towards the end. This is a very common NEET trap."
},
{
  id: 67,
  topic: "Karyokinesis - Prophase",
  q: "The centrosome undergoes duplication during which phase?",
  options: [
    "Prophase of M phase",
    "G1 phase of interphase",
    "S phase of interphase",
    "G2 phase of interphase"
  ],
  correct: 2,
  explanation: "NCERT states: 'The centrosome, which had undergone duplication during S phase of interphase, now begins to move towards opposite poles of the cell.' Duplication occurs in S phase; movement starts in prophase."
},
{
  id: 68,
  topic: "Karyokinesis - Prophase",
  q: "Each centrosome radiates out microtubules called:",
  options: [
    "Spindle fibres",
    "Asters",
    "Kinetochore fibres",
    "Centriolar tubules"
  ],
  correct: 1,
  explanation: "NCERT states: 'Each centrosome radiates out microtubules called asters.' The two asters together with spindle fibres form the mitotic apparatus."
},
{
  id: 69,
  topic: "Karyokinesis - Prophase",
  q: "The mitotic apparatus is formed by:",
  options: [
    "Asters only",
    "Spindle fibres only",
    "Two asters together with spindle fibres",
    "Kinetochores and centromeres"
  ],
  correct: 2,
  explanation: "NCERT clearly states: 'The two asters together with spindle fibres forms mitotic apparatus.'"
},
{
  id: 70,
  topic: "Karyokinesis - Prophase",
  q: "At the end of prophase, which of the following cell structures are <b>NOT</b> visible under the microscope?<br>(a) Golgi complexes<br>(b) Endoplasmic reticulum<br>(c) Nucleolus<br>(d) Nuclear envelope<br>(e) Mitochondria",
  options: [
    "Only (a), (b) and (c)",
    "Only (a), (b), (c) and (d)",
    "(a), (b), (c), (d) and (e)",
    "Only (c) and (d)"
  ],
  correct: 1,
  explanation: "NCERT states: 'Cells at the end of prophase, when viewed under the microscope, do not show golgi complexes, endoplasmic reticulum, nucleolus and the nuclear envelope.' Mitochondria are NOT mentioned in this list. This is a detail-based trap."
},
{
  id: 71,
  topic: "Karyokinesis - Prophase",
  q: "<b>Assertion (A):</b> During prophase, chromosomal material becomes untangled.<br><b>Reason (R):</b> Chromatin condensation occurs during prophase.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states: 'The chromosomal material becomes untangled during the process of chromatin condensation.' Condensation (R) is the process by which the intertwined DNA becomes untangled (A), making R the correct explanation of A."
},
{
  id: 72,
  topic: "Karyokinesis - Prophase",
  q: "Consider the following statements about prophase:<br>(I) Centrosome duplication occurs during prophase<br>(II) Chromosomes appear as two chromatids joined at the centromere<br>(III) Nuclear envelope completely disintegrates<br>(IV) Chromatin condensation is initiated<br><br>Which of the above are correct?",
  options: [
    "I and III",
    "II and IV",
    "I, II and IV",
    "II, III and IV"
  ],
  correct: 1,
  explanation: "Only II and IV are correct. Statement I is wrong — centrosome duplication occurs during S phase of interphase, not prophase (it only starts moving during prophase). Statement III is wrong — nuclear envelope disintegration marks the start of metaphase."
},
{
  id: 73,
  topic: "Karyokinesis - Metaphase",
  q: "The start of metaphase is marked by:",
  options: [
    "Initiation of chromatin condensation",
    "Complete disintegration of the nuclear envelope",
    "Splitting of centromeres",
    "Decondensation of chromosomes"
  ],
  correct: 1,
  explanation: "NCERT states: 'The complete disintegration of the nuclear envelope marks the start of the second phase of mitosis (metaphase).'"
},
{
  id: 74,
  topic: "Karyokinesis - Metaphase",
  q: "The morphology of chromosomes is most easily studied at which stage of mitosis?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 1,
  explanation: "NCERT states: 'This then, is the stage (metaphase) at which morphology of chromosomes is most easily studied.' This is because condensation is complete and chromosomes are clearly visible under the microscope."
},
{
  id: 75,
  topic: "Karyokinesis - Metaphase",
  q: "Kinetochores are:",
  options: [
    "Large spherical structures present on chromosome arms",
    "Small disc-shaped structures at the surface of the centromeres",
    "Sites of DNA replication on chromosomes",
    "Protein complexes found at telomeres"
  ],
  correct: 1,
  explanation: "NCERT defines kinetochores as 'small disc-shaped structures at the surface of the centromeres' that serve as sites of attachment of spindle fibres to chromosomes."
},
{
  id: 76,
  topic: "Karyokinesis - Metaphase",
  q: "Kinetochores serve as the sites of attachment of:",
  options: [
    "Asters to the centrosome",
    "Chromatids to each other",
    "Spindle fibres to the chromosomes",
    "Nuclear envelope to the chromosomes"
  ],
  correct: 2,
  explanation: "NCERT states: 'These structures (kinetochores) serve as the sites of attachment of spindle fibres to the chromosomes.'"
},
{
  id: 77,
  topic: "Karyokinesis - Metaphase",
  q: "At metaphase, the arrangement of chromosomes is such that:",
  options: [
    "Both chromatids of each chromosome are connected to the same pole",
    "One chromatid is connected via kinetochore to one pole and the sister chromatid to the opposite pole",
    "Chromosomes are randomly scattered throughout the cytoplasm",
    "Chromosomes are clustered at one pole only"
  ],
  correct: 1,
  explanation: "NCERT states that at metaphase, one chromatid of each chromosome is connected by its kinetochore to spindle fibres from one pole and its sister chromatid is connected by its kinetochore to spindle fibres from the opposite pole."
},
{
  id: 78,
  topic: "Karyokinesis - Metaphase",
  q: "The plane of alignment of chromosomes at metaphase is referred to as:",
  options: [
    "Equatorial plane",
    "Cell plate",
    "Metaphase plate",
    "Division plate"
  ],
  correct: 2,
  explanation: "NCERT specifically uses the term 'metaphase plate' to describe the plane of alignment of chromosomes at metaphase."
},
{
  id: 79,
  topic: "Karyokinesis - Metaphase",
  q: "Which of the following are the key features of metaphase?<br>(a) Spindle fibres attach to kinetochores<br>(b) Chromosomes align along metaphase plate<br>(c) Centromeres split<br>(d) Nuclear envelope reforms",
  options: [
    "Only (a) and (b)",
    "Only (a), (b) and (c)",
    "Only (c) and (d)",
    "All of the above"
  ],
  correct: 0,
  explanation: "Only (a) and (b) are key features of metaphase. Centromere splitting (c) occurs at anaphase, and nuclear envelope reformation (d) occurs at telophase."
},
{
  id: 80,
  topic: "Karyokinesis - Metaphase",
  q: "<b>Assertion (A):</b> At metaphase, chromosomes are spread through the cytoplasm of the cell.<br><b>Reason (R):</b> The nuclear envelope has completely disintegrated by this stage.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states that the complete disintegration of the nuclear envelope marks the start of metaphase, hence chromosomes are spread through the cytoplasm. The disintegration of the nuclear envelope (R) directly causes chromosomes to be in the cytoplasm (A)."
},
{
  id: 81,
  topic: "Karyokinesis - Metaphase",
  q: "At metaphase, a chromosome is composed of:",
  options: [
    "A single chromatid",
    "Two sister chromatids held together by kinetochore",
    "Two sister chromatids held together by centromere",
    "Four chromatids forming a bivalent"
  ],
  correct: 2,
  explanation: "NCERT states: 'At this stage, metaphase chromosome is made up of two sister chromatids, which are held together by the centromere.' Kinetochores are disc-shaped structures ON the centromere, not what holds chromatids together. Four chromatids forming a bivalent is a feature of meiosis."
},
{
  id: 82,
  topic: "Karyokinesis - Metaphase",
  q: "Which of the following is <b>incorrect</b> about metaphase?",
  options: [
    "Condensation of chromosomes is completed",
    "Chromosomes can be observed clearly under the microscope",
    "It is the best stage to study chromosome morphology",
    "Chromosomes begin to decondense at this stage"
  ],
  correct: 3,
  explanation: "Chromosomes do NOT decondense at metaphase — they are at their most condensed state. Decondensation occurs during telophase. This is a common conceptual trap."
},
{
  id: 83,
  topic: "Karyokinesis - Anaphase",
  q: "At the onset of anaphase, the chromosomes at the metaphase plate:",
  options: [
    "Begin to condense further",
    "Are split simultaneously and daughter chromatids migrate to opposite poles",
    "Align more precisely at the equator",
    "Reform the nuclear envelope"
  ],
  correct: 1,
  explanation: "NCERT states: 'At the onset of anaphase, each chromosome arranged at the metaphase plate is split simultaneously and the two daughter chromatids begin their migration towards the two opposite poles.'"
},
{
  id: 84,
  topic: "Karyokinesis - Anaphase",
  q: "During anaphase, the separated chromatids are now referred to as:",
  options: [
    "Sister chromatids",
    "Homologous chromosomes",
    "Daughter chromosomes",
    "Bivalents"
  ],
  correct: 2,
  explanation: "NCERT states: 'the two daughter chromatids, now referred to as daughter chromosomes of the future daughter nuclei, begin their migration towards the two opposite poles.'"
},
{
  id: 85,
  topic: "Karyokinesis - Anaphase",
  q: "During anaphase, as each chromosome moves away from the equatorial plate, which part leads the movement?",
  options: [
    "Arms of the chromosome",
    "Telomere",
    "Centromere",
    "Kinetochore fibres only"
  ],
  correct: 2,
  explanation: "NCERT states: 'the centromere of each chromosome remains directed towards the pole and hence at the leading edge, with the arms of the chromosome trailing behind.' The centromere leads the movement."
},
{
  id: 86,
  topic: "Karyokinesis - Anaphase",
  q: "During anaphase, the shape of migrating chromosomes appears like:",
  options: [
    "Spherical bodies",
    "V, J, L or I shapes with centromere at the leading edge and arms trailing behind",
    "Compact round structures",
    "Elongated thread-like structures"
  ],
  correct: 1,
  explanation: "Since the centromere is at the leading edge and arms trail behind, chromosomes appear as V-shaped (metacentric), J-shaped (submetacentric), L-shaped (acrocentric), or I-shaped (telocentric) depending on centromere position."
},
{
  id: 87,
  topic: "Karyokinesis - Anaphase",
  q: "The key events of anaphase are:<br>(a) Centromeres split and chromatids separate<br>(b) Chromatids move to opposite poles<br>(c) Nuclear envelope reforms<br>(d) Condensation of chromosomes is completed<br><br>Which are correct?",
  options: [
    "Only (a) and (b)",
    "Only (a), (b) and (c)",
    "Only (c) and (d)",
    "All of the above"
  ],
  correct: 0,
  explanation: "Only (a) and (b) are key events of anaphase as per NCERT. Nuclear envelope reformation (c) occurs in telophase. Condensation completion (d) occurs by metaphase."
},
{
  id: 88,
  topic: "Karyokinesis - Anaphase",
  q: "<b>Assertion (A):</b> At anaphase, all chromosomes at the metaphase plate split simultaneously.<br><b>Reason (R):</b> Simultaneous splitting ensures equal distribution of genetic material to daughter cells.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states that each chromosome is split simultaneously. This simultaneous splitting is essential to ensure that each daughter cell receives an identical and complete set of chromosomes — hence R correctly explains the biological significance of A."
},
{
  id: 89,
  topic: "Karyokinesis - Anaphase",
  q: "Which of the following is <b>incorrect</b> about anaphase?",
  options: [
    "Centromeres split",
    "Sister chromatids separate and move to opposite poles",
    "Centromere is at the leading edge during chromosome movement",
    "Chromosomes begin to condense during this phase"
  ],
  correct: 3,
  explanation: "Chromosomes do NOT begin to condense during anaphase. Condensation begins in prophase and is completed by metaphase. During anaphase, separated chromatids (now daughter chromosomes) migrate to poles."
},
{
  id: 90,
  topic: "Karyokinesis - Telophase",
  q: "During telophase, chromosomes that have reached their respective poles:",
  options: [
    "Further condense and become more compact",
    "Decondense and lose their individuality",
    "Split again to form four sets",
    "Remain as compact mitotic chromosomes"
  ],
  correct: 1,
  explanation: "NCERT states: 'the chromosomes that have reached their respective poles decondense and lose their individuality. The individual chromosomes can no longer be seen.'"
},
{
  id: 91,
  topic: "Karyokinesis - Telophase",
  q: "Which of the following events occur during telophase?<br>(a) Chromosomes cluster at opposite spindle poles and lose identity as discrete elements<br>(b) Nuclear envelope develops around chromosome clusters at each pole<br>(c) Nucleolus, Golgi complex and ER reform<br>(d) Spindle fibres attach to kinetochores",
  options: [
    "Only (a), (b) and (c)",
    "Only (a) and (b)",
    "Only (b), (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 0,
  explanation: "Statements (a), (b), and (c) are key events of telophase as per NCERT. Statement (d) — attachment of spindle fibres to kinetochores — is a characteristic of metaphase, not telophase."
},
{
  id: 92,
  topic: "Karyokinesis - Telophase",
  q: "During telophase, the nuclear envelope develops around:",
  options: [
    "Each individual chromosome separately",
    "The metaphase plate",
    "The chromosome clusters at each pole, forming two daughter nuclei",
    "Only one pole, forming a single nucleus"
  ],
  correct: 2,
  explanation: "NCERT states: 'Nuclear envelope develops around the chromosome clusters at each pole forming two daughter nuclei.'"
},
{
  id: 93,
  topic: "Karyokinesis - Telophase",
  q: "Which cell organelles/structures reform during telophase?",
  options: [
    "Only nucleolus",
    "Only Golgi complex and ER",
    "Nucleolus, Golgi complex and ER",
    "Centrosome and asters"
  ],
  correct: 2,
  explanation: "NCERT states: 'Nucleolus, golgi complex and ER reform' during telophase. These structures had disappeared by the end of prophase."
},
{
  id: 94,
  topic: "Karyokinesis - Telophase",
  q: "<b>Assertion (A):</b> During telophase, individual chromosomes can no longer be seen.<br><b>Reason (R):</b> Chromosomes decondense and each set of chromatin material collects at each of the two poles.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and R correctly explains A. Because chromosomes decondense (R), they lose their individuality as discrete elements and can no longer be seen as individual chromosomes (A)."
},
{
  id: 95,
  topic: "Karyokinesis - Telophase",
  q: "Telophase can be considered as the <b>reverse</b> of which stage of mitosis?",
  options: [
    "Metaphase",
    "Anaphase",
    "Prophase",
    "S phase"
  ],
  correct: 2,
  explanation: "Telophase is essentially the reverse of prophase. In prophase: chromatin condenses, nuclear envelope breaks down, nucleolus disappears. In telophase: chromosomes decondense, nuclear envelope reforms, nucleolus reappears."
},
{
  id: 96,
  topic: "Karyokinesis - General",
  q: "Match the stage of karyokinesis with its key event:<br>(a) Prophase — (i) Centromeres split<br>(b) Metaphase — (ii) Chromatin condensation begins<br>(c) Anaphase — (iii) Chromosomes align at metaphase plate<br>(d) Telophase — (iv) Nuclear envelope reforms",
  options: [
    "a-ii, b-iii, c-i, d-iv",
    "a-i, b-ii, c-iii, d-iv",
    "a-iii, b-i, c-iv, d-ii",
    "a-iv, b-iii, c-ii, d-i"
  ],
  correct: 0,
  explanation: "Prophase: chromatin condensation begins (a-ii). Metaphase: chromosomes align at metaphase plate (b-iii). Anaphase: centromeres split (c-i). Telophase: nuclear envelope reforms (d-iv)."
},
{
  id: 97,
  topic: "Karyokinesis - General",
  q: "The correct chronological order of events during karyokinesis is:",
  options: [
    "Nuclear envelope disintegration → Chromatin condensation → Chromosome alignment → Chromatid separation",
    "Chromatin condensation → Nuclear envelope disintegration → Chromosome alignment → Chromatid separation → Nuclear envelope reformation",
    "Chromosome alignment → Chromatin condensation → Chromatid separation → Nuclear envelope disintegration",
    "Chromatid separation → Chromatin condensation → Chromosome alignment → Nuclear envelope reformation"
  ],
  correct: 1,
  explanation: "The correct order is: Chromatin condensation (prophase) → Nuclear envelope disintegration (start of metaphase) → Chromosome alignment at metaphase plate (metaphase) → Chromatid separation (anaphase) → Nuclear envelope reformation (telophase)."
},
{
  id: 98,
  topic: "Karyokinesis - General",
  q: "A student observes a cell under the microscope and notes that chromosomes are at their most condensed state and aligned at the equator of the cell. The cell is in which stage?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 1,
  explanation: "Chromosomes are most condensed and aligned at the equator (metaphase plate) during metaphase. This is why metaphase is the best stage for studying chromosome morphology."
},
{
  id: 99,
  topic: "Karyokinesis - General",
  q: "A student observes a cell where chromosomes appear to be moving towards opposite poles with centromeres leading. This cell is in:",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 2,
  explanation: "Movement of chromosomes towards opposite poles with centromeres at the leading edge is characteristic of anaphase."
},
{
  id: 100,
  topic: "Karyokinesis - General",
  q: "Which of the following structures disappear during prophase and reappear during telophase?<br>(a) Golgi complex<br>(b) ER<br>(c) Nucleolus<br>(d) Nuclear envelope<br>(e) Mitotic spindle",
  options: [
    "Only (a), (b) and (c)",
    "Only (c) and (d)",
    "(a), (b), (c) and (d)",
    "All — (a), (b), (c), (d) and (e)"
  ],
  correct: 2,
  explanation: "Golgi complex, ER, nucleolus, and nuclear envelope all disappear by end of prophase and reform during telophase. The mitotic spindle forms during prophase/metaphase and disassembles during telophase — it does NOT disappear during prophase."
},
{
  id: 101,
  topic: "Karyokinesis - General",
  q: "Consider the following statements:<br>(I) Condensation of chromosomes begins in prophase and is completed by metaphase<br>(II) Decondensation of chromosomes occurs in telophase<br>(III) Nuclear envelope breaks down during prophase<br>(IV) Nuclear envelope reforms during telophase<br><br>Which statements are correct?",
  options: [
    "I, II and IV only",
    "I, III and IV only",
    "I, II, III and IV",
    "II and IV only"
  ],
  correct: 0,
  explanation: "Statements I, II, and IV are correct. Statement III is tricky — NCERT says nuclear envelope is not visible at the end of prophase, but the COMPLETE disintegration of nuclear envelope marks the START of metaphase. So technically, the nuclear envelope breaks down at the prophase-metaphase transition, and its complete disintegration is a metaphase event."
},
{
  id: 102,
  topic: "Karyokinesis - Prophase",
  q: "Select the <b>correct</b> statement about centrosome behaviour during cell division:",
  options: [
    "Centrosome duplicates during prophase and moves to poles during metaphase",
    "Centrosome duplicates during S phase and begins moving to opposite poles during prophase",
    "Centrosome duplicates during G2 phase and moves to poles during anaphase",
    "Centrosome duplicates during G1 phase and moves to poles during prophase"
  ],
  correct: 1,
  explanation: "NCERT clearly states that the centrosome duplicates during S phase of interphase and begins to move towards opposite poles during prophase."
},
{
  id: 103,
  topic: "Karyokinesis - Metaphase",
  q: "After complete disintegration of the nuclear envelope at the start of metaphase, the chromosomes are:",
  options: [
    "Still enclosed within the nucleus",
    "Spread through the cytoplasm of the cell",
    "Immediately aligned at the metaphase plate",
    "Decondensed and invisible"
  ],
  correct: 1,
  explanation: "NCERT states: 'The complete disintegration of the nuclear envelope marks the start of the second phase of mitosis, hence the chromosomes are spread through the cytoplasm of the cell.' They are then moved to the metaphase plate by spindle fibres."
},
{
  id: 104,
  topic: "Karyokinesis - General",
  q: "<b>Assertion (A):</b> Kinetochores and centromeres are the same structure.<br><b>Reason (R):</b> Kinetochores are disc-shaped structures at the surface of centromeres.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is false but R is true",
    "Both A and R are false"
  ],
  correct: 2,
  explanation: "A is false — kinetochores and centromeres are NOT the same. R is true — NCERT states kinetochores are small disc-shaped structures at the surface of centromeres. The centromere is the primary constriction holding chromatids together, while kinetochores are protein structures on the centromere surface where spindle fibres attach."
},
{
  id: 105,
  topic: "Karyokinesis - General",
  q: "In which stage of mitosis are chromosomes moved to the spindle equator through spindle fibres attached to both poles?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 1,
  explanation: "NCERT states that during metaphase, chromosomes are moved to spindle equator and get aligned along the metaphase plate through spindle fibres to both poles."
},
{
  id: 106,
  topic: "Karyokinesis - General",
  q: "Which of the following correctly describes the state of chromatin/chromosomes in the given phases?<br><br>(a) Interphase: Intertwined, not distinct<br>(b) Prophase: Condensation begins<br>(c) Metaphase: Most condensed<br>(d) Telophase: Decondensed, lose individuality",
  options: [
    "Only (a) and (b) are correct",
    "Only (b), (c) and (d) are correct",
    "Only (a), (c) and (d) are correct",
    "All are correct"
  ],
  correct: 3,
  explanation: "All four descriptions are correct as per NCERT. During S and G2, DNA molecules are intertwined. Prophase initiates condensation. Metaphase has fully condensed chromosomes. Telophase shows decondensation."
},
{
  id: 107,
  topic: "Karyokinesis - Anaphase",
  q: "During anaphase, the orientation of a moving chromosome is best described as:",
  options: [
    "Arms leading, centromere trailing",
    "Centromere at the leading edge, arms trailing behind",
    "Random orientation with no specific pattern",
    "Telomeres at the leading edge"
  ],
  correct: 1,
  explanation: "NCERT states: 'the centromere of each chromosome remains directed towards the pole and hence at the leading edge, with the arms of the chromosome trailing behind.'"
},
{
  id: 108,
  topic: "Karyokinesis - General",
  q: "Consider the following features:<br>(I) Chromosomes visible as two chromatids joined at centromere<br>(II) Centrosome moves to opposite poles<br>(III) Asters and spindle fibres form mitotic apparatus<br>(IV) Golgi complex and ER not visible<br><br>All these are features of which stage?",
  options: [
    "Metaphase",
    "Prophase",
    "Anaphase",
    "Telophase"
  ],
  correct: 1,
  explanation: "All four features are characteristic of prophase as described in NCERT. During prophase: chromosomes condense and appear as two chromatids (I), centrosome moves to poles (II), asters + spindle fibres form mitotic apparatus (III), and Golgi, ER, nucleolus, nuclear envelope are not visible by end of prophase (IV)."
},
{
  id: 109,
  topic: "Karyokinesis - General",
  q: "A cell is observed under a microscope showing two groups of chromosomes at opposite poles, nuclear envelope beginning to form around them, and nucleolus reappearing. The cell is in:",
  options: [
    "Late prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 3,
  explanation: "Nuclear envelope reformation around chromosome clusters at each pole and reappearance of nucleolus are characteristic events of telophase."
},
{
  id: 110,
  topic: "Karyokinesis - General",
  q: "Which of the following is the <b>correct</b> sequence of events during mitosis?",
  options: [
    "Condensation → Alignment at equator → Nuclear envelope breakdown → Chromatid separation → Decondensation",
    "Nuclear envelope breakdown → Condensation → Alignment → Separation → Reformation",
    "Condensation → Nuclear envelope breakdown → Alignment at equator → Chromatid separation → Decondensation and nuclear envelope reformation",
    "Alignment → Condensation → Separation → Nuclear envelope breakdown → Reformation"
  ],
  correct: 2,
  explanation: "The correct sequence is: Condensation begins (prophase) → Nuclear envelope breaks down (late prophase/early metaphase) → Chromosomes align at equator (metaphase) → Chromatids separate (anaphase) → Decondensation + nuclear envelope reformation (telophase)."
},
{
  id: 111,
  topic: "Karyokinesis - General",
  q: "How many daughter nuclei are formed at the end of karyokinesis in mitosis?",
  options: [
    "One",
    "Two",
    "Four",
    "Eight"
  ],
  correct: 1,
  explanation: "At the end of karyokinesis, two daughter nuclei are formed — one at each pole. NCERT states: 'Nuclear envelope develops around the chromosome clusters at each pole forming two daughter nuclei.'"
},
{
  id: 112,
  topic: "Karyokinesis - Metaphase",
  q: "Why is metaphase considered the best stage for karyotyping?",
  options: [
    "Because chromosomes are decondensed and spread out",
    "Because chromosomes are at their most condensed state and can be observed clearly under the microscope",
    "Because nuclear envelope is intact and protects chromosomes",
    "Because chromosomes are moving and easier to count"
  ],
  correct: 1,
  explanation: "At metaphase, condensation of chromosomes is completed and they can be observed clearly under the microscope. NCERT states this is the stage at which morphology of chromosomes is most easily studied."
},
{
  id: 113,
  topic: "Karyokinesis - General",
  q: "Select the <b>incorrect</b> match:",
  options: [
    "Prophase — Chromatin condensation initiation",
    "Metaphase — Centromere splitting",
    "Anaphase — Daughter chromosomes migrate to poles",
    "Telophase — Nuclear envelope reformation"
  ],
  correct: 1,
  explanation: "Centromere splitting occurs at the onset of ANAPHASE, not metaphase. At metaphase, chromosomes align at the equator with intact centromeres holding sister chromatids together."
},
{
  id: 114,
  topic: "Karyokinesis - General",
  q: "<b>Assertion (A):</b> Telophase is often described as the reverse of prophase.<br><b>Reason (R):</b> Events that occur in prophase (condensation, nuclear envelope breakdown, nucleolus disappearance) are reversed in telophase (decondensation, nuclear envelope reformation, nucleolus reappearance).",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and R correctly explains A. Telophase essentially undoes what prophase did — chromosomes decondense, nuclear envelope reforms, and nucleolus/Golgi/ER reappear."
},
{
  id: 115,
  topic: "Karyokinesis - Prophase",
  q: "During prophase, which of the following is true about chromosomes?",
  options: [
    "They appear as single chromatid structures",
    "They are composed of two chromatids attached together at the centromere",
    "They are aligned at the metaphase plate",
    "They have split centromeres"
  ],
  correct: 1,
  explanation: "NCERT states: 'Chromosomes are seen to be composed of two chromatids attached together at the centromere' during prophase. This is because DNA replication has already occurred in S phase."
},
{
  id: 116,
  topic: "Karyokinesis - General",
  q: "A cell biologist treats cells with a drug that prevents spindle fibre formation. At which stage will mitosis be arrested?",
  options: [
    "Prophase — chromosomes won't condense",
    "Metaphase — chromosomes cannot align at the equator or separate",
    "Anaphase — chromosomes have already separated",
    "Telophase — nuclear envelope won't reform"
  ],
  correct: 1,
  explanation: "Spindle fibres are essential for chromosome movement to the metaphase plate and subsequent separation. Without spindle fibres, chromosomes cannot align at the equator (metaphase arrest) and cannot be pulled to poles. This is the principle behind colchicine treatment used in karyotyping."
},
{
  id: 117,
  topic: "Karyokinesis - General",
  q: "The chromatin material tends to collect at each of the two poles during:",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 3,
  explanation: "NCERT states: 'each set of chromatin material tends to collect at each of the two poles' during telophase, after chromosomes have decondensed."
},
{
  id: 118,
  topic: "Karyokinesis - Prophase",
  q: "Which of the following correctly describes the role of asters during mitosis?",
  options: [
    "Asters are microtubules radiated by kinetochores",
    "Asters are microtubules radiated by each centrosome",
    "Asters are formed during telophase for nuclear envelope reformation",
    "Asters connect the two chromatids of a chromosome"
  ],
  correct: 1,
  explanation: "NCERT states: 'Each centrosome radiates out microtubules called asters.' They are part of the mitotic apparatus along with spindle fibres."
},
{
  id: 119,
  topic: "Karyokinesis - General",
  q: "Read the following statements carefully:<br>(I) During prophase, chromosomal material condenses<br>(II) During metaphase, nuclear envelope has completely disintegrated<br>(III) During anaphase, chromosomes split sequentially one after another<br>(IV) During telophase, chromosomes decondense<br><br>Which statement is <b>incorrect</b>?",
  options: [
    "Statement I",
    "Statement II",
    "Statement III",
    "Statement IV"
  ],
  correct: 2,
  explanation: "Statement III is incorrect. NCERT states that at the onset of anaphase, each chromosome is split SIMULTANEOUSLY, not sequentially one after another. This simultaneous splitting is a key feature of anaphase."
},
{
  id: 120,
  topic: "Karyokinesis - General",
  q: "Which of the following stages of mitosis is characterised by the formation of two daughter nuclei?",
  options: [
    "Prophase",
    "Metaphase",
    "Anaphase",
    "Telophase"
  ],
  correct: 3,
  explanation: "During telophase, nuclear envelope develops around the chromosome clusters at each pole, forming two daughter nuclei."
},
{
  id: 121,
  topic: "Karyokinesis - General",
  q: "Consider the following events:<br>(a) Asters form<br>(b) Kinetochores attach to spindle fibres<br>(c) Centromeres split<br>(d) Nucleolus reforms<br><br>The correct sequence of these events during mitosis is:",
  options: [
    "a → b → c → d",
    "b → a → c → d",
    "c → a → b → d",
    "d → a → b → c"
  ],
  correct: 0,
  explanation: "Asters form during prophase (a) → Kinetochores attach to spindle fibres during metaphase (b) → Centromeres split during anaphase (c) → Nucleolus reforms during telophase (d)."
},
{
  id: 122,
  topic: "Karyokinesis - General",
  q: "<b>Assertion (A):</b> Metaphase is the best stage for counting the number of chromosomes.<br><b>Reason (R):</b> At metaphase, chromosomes are spread through the cytoplasm randomly without any alignment.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — metaphase is the best stage for studying chromosome morphology and counting. R is false — at metaphase, chromosomes are NOT randomly spread; they are precisely aligned at the metaphase plate. The reason metaphase is ideal is that chromosomes are at maximum condensation and clearly visible."
},
{
  id: 123,
  topic: "Cytokinesis",
  q: "Cytokinesis refers to:",
  options: [
    "Division of nucleus into two daughter nuclei",
    "Separation of cytoplasm to form two daughter cells",
    "Duplication of DNA during S phase",
    "Condensation of chromosomes during prophase"
  ],
  correct: 1,
  explanation: "NCERT defines cytokinesis as the separation of cytoplasm that divides the cell into two daughter cells. Karyokinesis is the division of the nucleus."
},
{
  id: 124,
  topic: "Cytokinesis",
  q: "In animal cells, cytokinesis is achieved by:",
  options: [
    "Formation of a cell plate from the centre",
    "Appearance of a furrow in the plasma membrane that deepens and joins in the centre",
    "Formation of a new cell wall from the periphery",
    "Direct splitting of the cell wall"
  ],
  correct: 1,
  explanation: "NCERT states: 'In an animal cell, this is achieved by the appearance of a furrow in the plasma membrane. The furrow gradually deepens and ultimately joins in the centre dividing the cell cytoplasm into two.'"
},
{
  id: 125,
  topic: "Cytokinesis",
  q: "In plant cells, cytokinesis occurs by:",
  options: [
    "Cleavage furrow formation from outside to inside",
    "Cell plate formation starting from the centre and growing outward to meet lateral walls",
    "Cell plate formation starting from the periphery and growing inward",
    "Constriction of plasma membrane"
  ],
  correct: 1,
  explanation: "NCERT states: 'In plant cells, wall formation starts in the centre of the cell and grows outward to meet the existing lateral walls.' This is the opposite direction of animal cell cytokinesis."
},
{
  id: 126,
  topic: "Cytokinesis",
  q: "Why do plant cells undergo cytokinesis by a different mechanism than animal cells?",
  options: [
    "Because plant cells lack a plasma membrane",
    "Because plant cells are enclosed by a relatively inextensible cell wall",
    "Because plant cells do not have organelles",
    "Because plant cells lack a nucleus"
  ],
  correct: 1,
  explanation: "NCERT states: 'Plant cells however, are enclosed by a relatively inextensible cell wall, therefore they undergo cytokinesis by a different mechanism.' The rigid cell wall prevents furrow formation."
},
{
  id: 127,
  topic: "Cytokinesis",
  q: "The cell plate formed during cytokinesis in plant cells represents:",
  options: [
    "The primary cell wall",
    "The secondary cell wall",
    "The middle lamella between the walls of two adjacent cells",
    "The plasma membrane"
  ],
  correct: 2,
  explanation: "NCERT states: 'the formation of a simple precursor, called the cell-plate that represents the middle lamella between the walls of two adjacent cells.'"
},
{
  id: 128,
  topic: "Cytokinesis",
  q: "<b>Assertion (A):</b> In animal cells, cytokinesis occurs by cleavage furrow formation (centripetal — outside to inside).<br><b>Reason (R):</b> In plant cells, cytokinesis occurs by cell plate formation (centrifugal — inside to outside).",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 1,
  explanation: "Both A and R are true — animal cells form a cleavage furrow (outside to inside) and plant cells form a cell plate (centre to periphery). However, R does not explain A; they are independent mechanisms in different cell types."
},
{
  id: 129,
  topic: "Cytokinesis",
  q: "During cytokinesis, which of the following organelles get distributed between the two daughter cells?",
  options: [
    "Only mitochondria",
    "Only plastids",
    "Mitochondria and plastids",
    "Only ribosomes"
  ],
  correct: 2,
  explanation: "NCERT states: 'At the time of cytoplasmic division, organelles like mitochondria and plastids get distributed between the two daughter cells.'"
},
{
  id: 130,
  topic: "Cytokinesis",
  q: "A multinucleate condition called syncytium arises when:",
  options: [
    "Cytokinesis occurs without karyokinesis",
    "Karyokinesis is not followed by cytokinesis",
    "Both karyokinesis and cytokinesis fail to occur",
    "DNA replication occurs without cell division"
  ],
  correct: 1,
  explanation: "NCERT states: 'In some organisms karyokinesis is not followed by cytokinesis as a result of which multinucleate condition arises leading to the formation of syncytium.'"
},
{
  id: 131,
  topic: "Cytokinesis",
  q: "Which of the following is an example of a syncytium?",
  options: [
    "Onion root tip cells",
    "Human red blood cells",
    "Liquid endosperm in coconut",
    "Guard cells of stomata"
  ],
  correct: 2,
  explanation: "NCERT gives 'liquid endosperm in coconut' as an example of syncytium, where karyokinesis is not followed by cytokinesis, resulting in a multinucleate condition."
},
{
  id: 132,
  topic: "Cytokinesis",
  q: "Consider the following statements about cytokinesis:<br>(I) In animal cells, furrow forms from outside to inside<br>(II) In plant cells, cell plate forms from inside to outside<br>(III) In plant cells, cell plate represents the primary wall<br>(IV) Syncytium is formed when cytokinesis does not follow karyokinesis<br><br>Which statements are correct?",
  options: [
    "I, II and IV only",
    "I, II and III only",
    "I, III and IV only",
    "All are correct"
  ],
  correct: 0,
  explanation: "Statements I, II, and IV are correct. Statement III is wrong — the cell plate represents the middle lamella, NOT the primary wall."
},
{
  id: 133,
  topic: "Cytokinesis",
  q: "Which of the following is <b>incorrect</b> about cytokinesis?",
  options: [
    "It completes cell division after karyokinesis",
    "In animal cells, a cleavage furrow is formed",
    "In plant cells, the cell plate forms from the periphery towards the centre",
    "Organelles like mitochondria and plastids are distributed between daughter cells"
  ],
  correct: 2,
  explanation: "This is incorrect — in plant cells, the cell plate forms from the CENTRE and grows OUTWARD to meet the existing lateral walls, not from periphery to centre. This is a frequently tested trap in NEET."
},
{
  id: 134,
  topic: "Cytokinesis",
  q: "<b>Assertion (A):</b> Liquid endosperm in coconut is a syncytium.<br><b>Reason (R):</b> In syncytium, cytokinesis follows karyokinesis normally.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — liquid endosperm in coconut is a syncytium. R is false — in syncytium, karyokinesis is NOT followed by cytokinesis (cytokinesis fails to occur), which is why the multinucleate condition arises."
},
{
  id: 135,
  topic: "Significance of Mitosis",
  q: "Mitosis or equational division is usually restricted to:",
  options: [
    "Haploid cells only",
    "Diploid cells only",
    "Both haploid and diploid cells equally",
    "Tetraploid cells only"
  ],
  correct: 1,
  explanation: "NCERT states: 'Mitosis or the equational division is usually restricted to the diploid cells only.' However, exceptions exist in some lower plants and social insects where haploid cells also divide by mitosis."
},
{
  id: 136,
  topic: "Significance of Mitosis",
  q: "Which of the following is <b>NOT</b> a significance of mitosis as per NCERT?",
  options: [
    "Growth of multicellular organisms",
    "Cell repair and replacement",
    "Production of genetic variation",
    "Restoration of nucleo-cytoplasmic ratio"
  ],
  correct: 2,
  explanation: "Production of genetic variation is a significance of MEIOSIS (through crossing over and independent assortment), not mitosis. Mitosis produces daughter cells with identical genetic complement."
},
{
  id: 137,
  topic: "Significance of Mitosis",
  q: "Mitosis usually results in the production of:",
  options: [
    "Haploid daughter cells with recombined genetic material",
    "Diploid daughter cells with identical genetic complement",
    "Four genetically different cells",
    "Cells with half the chromosome number"
  ],
  correct: 1,
  explanation: "NCERT states: 'Mitosis usually results in the production of diploid daughter cells with identical genetic complement.'"
},
{
  id: 138,
  topic: "Significance of Mitosis",
  q: "Cell growth disturbs the ratio between which two cellular components, making cell division essential?",
  options: [
    "Mitochondria and chloroplasts",
    "Nucleus and cytoplasm",
    "Cell wall and plasma membrane",
    "ER and Golgi complex"
  ],
  correct: 1,
  explanation: "NCERT states: 'Cell growth results in disturbing the ratio between the nucleus and the cytoplasm. It therefore becomes essential for the cell to divide to restore the nucleo-cytoplasmic ratio.'"
},
{
  id: 139,
  topic: "Significance of Mitosis",
  q: "Which of the following cells are being constantly replaced by mitotic division?<br>(a) Cells of upper layer of epidermis<br>(b) Cells of the lining of the gut<br>(c) Blood cells<br>(d) Heart cells",
  options: [
    "Only (a) and (b)",
    "Only (a), (b) and (c)",
    "Only (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 1,
  explanation: "NCERT mentions cells of upper layer of epidermis, lining of gut, and blood cells as being constantly replaced. Heart cells do NOT divide (they enter G0 phase)."
},
{
  id: 140,
  topic: "Significance of Mitosis",
  q: "Continuous growth of plants throughout their life is due to mitotic divisions in:",
  options: [
    "All cells of the plant body",
    "Only epidermal cells",
    "Meristematic tissues — apical and lateral cambium",
    "Only root cells"
  ],
  correct: 2,
  explanation: "NCERT states: 'Mitotic divisions in the meristematic tissues – the apical and the lateral cambium, result in a continuous growth of plants throughout their life.'"
},
{
  id: 141,
  topic: "Significance of Mitosis",
  q: "<b>Assertion (A):</b> Cell repair is a significant contribution of mitosis.<br><b>Reason (R):</b> Cells of the upper layer of epidermis, gut lining, and blood cells are constantly replaced.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and R correctly explains A. Cell repair is achieved through mitotic replacement of damaged or dead cells, as exemplified by the constant replacement of epidermal, gut lining, and blood cells."
},
{
  id: 142,
  topic: "Significance of Mitosis",
  q: "In which of the following organisms do haploid cells divide by mitosis?<br>(a) Some lower plants<br>(b) Some social insects<br>(c) All mammals<br>(d) All flowering plants",
  options: [
    "Only (a) and (b)",
    "Only (c) and (d)",
    "Only (a)",
    "All of the above"
  ],
  correct: 0,
  explanation: "NCERT states: 'in some lower plants and in some social insects haploid cells also divide by mitosis.' This does not apply to all mammals or all flowering plants."
},
{
  id: 143,
  topic: "Meiosis - Introduction",
  q: "Meiosis is a specialised kind of cell division that:",
  options: [
    "Maintains the chromosome number",
    "Doubles the chromosome number",
    "Reduces the chromosome number by half",
    "Has no effect on chromosome number"
  ],
  correct: 2,
  explanation: "NCERT states: 'This specialised kind of cell division that reduces the chromosome number by half results in the production of haploid daughter cells.'"
},
{
  id: 144,
  topic: "Meiosis - Introduction",
  q: "Which of the following correctly describes the role of meiosis and fertilisation in sexually reproducing organisms?",
  options: [
    "Meiosis restores diploid phase; fertilisation produces haploid phase",
    "Meiosis ensures haploid phase; fertilisation restores diploid phase",
    "Both meiosis and fertilisation produce haploid phase",
    "Both meiosis and fertilisation restore diploid phase"
  ],
  correct: 1,
  explanation: "NCERT states: 'Meiosis ensures the production of haploid phase in the life cycle of sexually reproducing organisms whereas fertilisation restores the diploid phase.'"
},
{
  id: 145,
  topic: "Meiosis - Introduction",
  q: "How many cycles of DNA replication occur during meiosis?",
  options: [
    "Two cycles — one before meiosis I and one before meiosis II",
    "Only a single cycle of DNA replication",
    "Three cycles of DNA replication",
    "No DNA replication occurs"
  ],
  correct: 1,
  explanation: "NCERT states: 'Meiosis involves two sequential cycles of nuclear and cell division called meiosis I and meiosis II but only a single cycle of DNA replication.' This is a frequently tested NEET concept."
},
{
  id: 146,
  topic: "Meiosis - Introduction",
  q: "How many haploid cells are formed at the end of meiosis II?",
  options: [
    "Two",
    "Three",
    "Four",
    "Eight"
  ],
  correct: 2,
  explanation: "NCERT states: 'Four haploid cells are formed at the end of meiosis II.'"
},
{
  id: 147,
  topic: "Meiosis - Introduction",
  q: "Which of the following is a key feature of meiosis?<br>(a) Pairing of homologous chromosomes<br>(b) Recombination between non-sister chromatids of homologous chromosomes<br>(c) Two cycles of DNA replication<br>(d) Production of four haploid cells",
  options: [
    "Only (a), (b) and (d)",
    "Only (a) and (b)",
    "Only (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 0,
  explanation: "Statements (a), (b), and (d) are correct key features of meiosis. Statement (c) is WRONG — meiosis involves only a SINGLE cycle of DNA replication, not two. This is a classic NEET trap."
},
{
  id: 148,
  topic: "Meiosis - Introduction",
  q: "<b>Assertion (A):</b> Meiosis I is initiated after parental chromosomes have replicated to produce identical sister chromatids at S phase.<br><b>Reason (R):</b> DNA replication occurs during interkinesis between meiosis I and meiosis II.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 2,
  explanation: "A is true — NCERT states meiosis I is initiated after chromosome replication during S phase. R is false — there is NO replication of DNA during interkinesis. This is a critical concept frequently tested in NEET."
},
{
  id: 149,
  topic: "Meiosis - Introduction",
  q: "Meiosis occurs during which process in plants and animals?",
  options: [
    "Vegetative reproduction",
    "Gametogenesis",
    "Regeneration",
    "Budding"
  ],
  correct: 1,
  explanation: "NCERT states: 'We come across meiosis during gametogenesis in plants and animals. This leads to the formation of haploid gametes.'"
},
{
  id: 150,
  topic: "Meiosis - Prophase I",
  q: "Prophase I of meiosis is subdivided into five phases. The correct sequence is:",
  options: [
    "Leptotene → Pachytene → Zygotene → Diplotene → Diakinesis",
    "Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis",
    "Zygotene → Leptotene → Pachytene → Diakinesis → Diplotene",
    "Leptotene → Zygotene → Diplotene → Pachytene → Diakinesis"
  ],
  correct: 1,
  explanation: "The correct sequence of prophase I sub-stages is: Leptotene → Zygotene → Pachytene → Diplotene → Diakinesis. Remember: 'Lazy Zebras Play During Daytime.'"
},
{
  id: 151,
  topic: "Meiosis - Prophase I",
  q: "During which sub-stage of prophase I do chromosomes become gradually visible under the light microscope?",
  options: [
    "Zygotene",
    "Leptotene",
    "Pachytene",
    "Diplotene"
  ],
  correct: 1,
  explanation: "NCERT states: 'During leptotene stage the chromosomes become gradually visible under the light microscope. The compaction of chromosomes continues throughout leptotene.'"
},
{
  id: 152,
  topic: "Meiosis - Prophase I",
  q: "Synapsis refers to:",
  options: [
    "Separation of homologous chromosomes",
    "Crossing over between non-sister chromatids",
    "Pairing of homologous chromosomes",
    "Dissolution of synaptonemal complex"
  ],
  correct: 2,
  explanation: "NCERT states: 'During this stage (zygotene), chromosomes start pairing together and this process of association is called synapsis.'"
},
{
  id: 153,
  topic: "Meiosis - Prophase I",
  q: "Synapsis occurs during which sub-stage of prophase I?",
  options: [
    "Leptotene",
    "Zygotene",
    "Pachytene",
    "Diplotene"
  ],
  correct: 1,
  explanation: "NCERT clearly states that synapsis (pairing of homologous chromosomes) occurs during the zygotene stage."
},
{
  id: 154,
  topic: "Meiosis - Prophase I",
  q: "The complex structure formed during chromosome synapsis is called:",
  options: [
    "Recombination nodule",
    "Synaptonemal complex",
    "Chiasmata",
    "Kinetochore"
  ],
  correct: 1,
  explanation: "NCERT states: 'chromosome synapsis is accompanied by the formation of complex structure called synaptonemal complex.'"
},
{
  id: 155,
  topic: "Meiosis - Prophase I",
  q: "A bivalent consists of:",
  options: [
    "Two non-homologous chromosomes paired together",
    "A pair of synapsed homologous chromosomes",
    "Four separated chromatids",
    "A single chromosome with two arms"
  ],
  correct: 1,
  explanation: "NCERT states: 'The complex formed by a pair of synapsed homologous chromosomes is called a bivalent or a tetrad.'"
},
{
  id: 156,
  topic: "Meiosis - Prophase I",
  q: "A bivalent is also called a tetrad because:",
  options: [
    "It consists of four bivalents",
    "It contains four homologous chromosomes",
    "It contains four chromatids (two from each homologous chromosome)",
    "It undergoes four rounds of crossing over"
  ],
  correct: 2,
  explanation: "A bivalent is called a tetrad because each bivalent consists of two homologous chromosomes, each with two sister chromatids, totaling four chromatids."
},
{
  id: 157,
  topic: "Meiosis - Prophase I",
  q: "During pachytene, the four chromatids of each bivalent become clearly visible as tetrads. This stage is also characterised by:",
  options: [
    "Synapsis of homologous chromosomes",
    "Appearance of recombination nodules where crossing over occurs",
    "Terminalisation of chiasmata",
    "Dissolution of synaptonemal complex"
  ],
  correct: 1,
  explanation: "NCERT states: 'This stage (pachytene) is characterised by the appearance of recombination nodules, the sites at which crossing over occurs between non-sister chromatids of the homologous chromosomes.'"
},
{
  id: 158,
  topic: "Meiosis - Prophase I",
  q: "Crossing over occurs between:",
  options: [
    "Sister chromatids of the same chromosome",
    "Non-sister chromatids of homologous chromosomes",
    "Non-homologous chromosomes",
    "Chromatids and the synaptonemal complex"
  ],
  correct: 1,
  explanation: "NCERT states: 'crossing over occurs between non-sister chromatids of the homologous chromosomes.' It does NOT occur between sister chromatids."
},
{
  id: 159,
  topic: "Meiosis - Prophase I",
  q: "Crossing over is an enzyme-mediated process. The enzyme involved is called:",
  options: [
    "Helicase",
    "Recombinase",
    "Ligase",
    "Topoisomerase"
  ],
  correct: 1,
  explanation: "NCERT states: 'Crossing over is also an enzyme-mediated process and the enzyme involved is called recombinase.'"
},
{
  id: 160,
  topic: "Meiosis - Prophase I",
  q: "Recombination between homologous chromosomes is completed by the end of:",
  options: [
    "Leptotene",
    "Zygotene",
    "Pachytene",
    "Diplotene"
  ],
  correct: 2,
  explanation: "NCERT states: 'Recombination between homologous chromosomes is completed by the end of pachytene, leaving the chromosomes linked at the sites of crossing over.'"
},
{
  id: 161,
  topic: "Meiosis - Prophase I",
  q: "The beginning of diplotene is recognised by:<br>(a) Dissolution of the synaptonemal complex<br>(b) Tendency of recombined homologous chromosomes to separate from each other<br>(c) Chromosomes remaining linked at sites of crossovers (chiasmata)<br><br>Which of the above is/are correct?",
  options: [
    "Only (a)",
    "Only (a) and (b)",
    "Only (b) and (c)",
    "All — (a), (b) and (c)"
  ],
  correct: 3,
  explanation: "All three are correct. NCERT states diplotene is recognised by dissolution of synaptonemal complex, tendency of homologous chromosomes to separate except at crossover sites (chiasmata)."
},
{
  id: 162,
  topic: "Meiosis - Prophase I",
  q: "The X-shaped structures seen during diplotene are called:",
  options: [
    "Synaptonemal complexes",
    "Recombination nodules",
    "Chiasmata",
    "Bivalents"
  ],
  correct: 2,
  explanation: "NCERT states: 'These X-shaped structures, are called chiasmata.' They represent the sites of crossing over where homologous chromosomes remain linked."
},
{
  id: 163,
  topic: "Meiosis - Prophase I",
  q: "In oocytes of some vertebrates, which sub-stage of prophase I can last for months or years?",
  options: [
    "Leptotene",
    "Zygotene",
    "Pachytene",
    "Diplotene"
  ],
  correct: 3,
  explanation: "NCERT states: 'In oocytes of some vertebrates, diplotene can last for months or years.' This is a specific fact frequently asked in NEET."
},
{
  id: 164,
  topic: "Meiosis - Prophase I",
  q: "Diakinesis is characterised by:<br>(a) Terminalisation of chiasmata<br>(b) Chromosomes are fully condensed<br>(c) Meiotic spindle is assembled<br>(d) Nucleolus disappears and nuclear envelope breaks down<br><br>Which of the above is/are correct?",
  options: [
    "Only (a) and (b)",
    "Only (a), (b) and (c)",
    "Only (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 3,
  explanation: "All four are correct features of diakinesis as per NCERT: terminalisation of chiasmata, full condensation, meiotic spindle assembly, and disappearance of nucleolus and nuclear envelope."
},
{
  id: 165,
  topic: "Meiosis - Prophase I",
  q: "Terminalisation of chiasmata occurs during which sub-stage of prophase I?",
  options: [
    "Pachytene",
    "Diplotene",
    "Diakinesis",
    "Zygotene"
  ],
  correct: 2,
  explanation: "NCERT states: 'The final stage of meiotic prophase I is diakinesis. This is marked by terminalisation of chiasmata.'"
},
{
  id: 166,
  topic: "Meiosis - Prophase I",
  q: "Diakinesis represents transition to:",
  options: [
    "Diplotene",
    "Metaphase I",
    "Anaphase I",
    "Telophase I"
  ],
  correct: 1,
  explanation: "NCERT states: 'Diakinesis represents transition to metaphase.'"
},
{
  id: 167,
  topic: "Meiosis - Prophase I",
  q: "<b>Assertion (A):</b> Prophase I of meiosis is typically longer and more complex than prophase of mitosis.<br><b>Reason (R):</b> Prophase I involves synapsis, crossing over, and recombination which do not occur in mitotic prophase.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states prophase I is 'typically longer and more complex when compared to prophase of mitosis.' This is because of the additional events of synapsis, crossing over, and recombination (R), which correctly explains the increased complexity (A)."
},
{
  id: 168,
  topic: "Meiosis - Prophase I",
  q: "Match the sub-stage of prophase I with its key event:<br>(a) Leptotene — (i) Synapsis<br>(b) Zygotene — (ii) Chromosomes become visible<br>(c) Pachytene — (iii) Chiasmata visible<br>(d) Diplotene — (iv) Crossing over<br>(e) Diakinesis — (v) Terminalisation of chiasmata",
  options: [
    "a-ii, b-i, c-iv, d-iii, e-v",
    "a-i, b-ii, c-iii, d-iv, e-v",
    "a-ii, b-i, c-iii, d-iv, e-v",
    "a-i, b-ii, c-iv, d-iii, e-v"
  ],
  correct: 0,
  explanation: "Leptotene: chromosomes become visible (a-ii). Zygotene: synapsis occurs (b-i). Pachytene: crossing over at recombination nodules (c-iv). Diplotene: chiasmata become visible (d-iii). Diakinesis: terminalisation of chiasmata (e-v)."
},
{
  id: 169,
  topic: "Meiosis - Prophase I",
  q: "The first two stages of prophase I (leptotene and zygotene) are relatively short-lived compared to:",
  options: [
    "Diplotene",
    "Diakinesis",
    "Pachytene",
    "Metaphase I"
  ],
  correct: 2,
  explanation: "NCERT states: 'The first two stages of prophase I are relatively short-lived compared to the next stage that is pachytene.'"
},
{
  id: 170,
  topic: "Meiosis - Prophase I",
  q: "During which sub-stage of prophase I does the synaptonemal complex dissolve?",
  options: [
    "Zygotene",
    "Pachytene",
    "Diplotene",
    "Diakinesis"
  ],
  correct: 2,
  explanation: "NCERT states: 'The beginning of diplotene is recognised by the dissolution of the synaptonemal complex.' The synaptonemal complex forms during zygotene and dissolves at diplotene."
},
{
  id: 171,
  topic: "Meiosis - Prophase I",
  q: "Consider the following statements:<br>(I) Synaptonemal complex forms during zygotene<br>(II) Synaptonemal complex dissolves during pachytene<br>(III) Recombination is completed by end of pachytene<br>(IV) Chiasmata become visible during diplotene<br><br>Which statements are correct?",
  options: [
    "I, II and III",
    "I, III and IV",
    "II, III and IV",
    "All are correct"
  ],
  correct: 1,
  explanation: "Statements I, III, and IV are correct. Statement II is wrong — synaptonemal complex dissolves during DIPLOTENE, not pachytene."
},
{
  id: 172,
  topic: "Meiosis - Prophase I",
  q: "Crossing over leads to:",
  options: [
    "Increase in chromosome number",
    "Recombination of genetic material on the two chromosomes",
    "Formation of synaptonemal complex",
    "Synapsis of homologous chromosomes"
  ],
  correct: 1,
  explanation: "NCERT states: 'Crossing over leads to recombination of genetic material on the two chromosomes.' This is the genetic significance of crossing over — creating new combinations of alleles."
},
{
  id: 173,
  topic: "Meiosis - Prophase I",
  q: "Which of the following is <b>incorrect</b> about pachytene?",
  options: [
    "Four chromatids of each bivalent become distinct as tetrads",
    "Recombination nodules appear",
    "Crossing over occurs between non-sister chromatids",
    "Chiasmata become visible and synaptonemal complex dissolves"
  ],
  correct: 3,
  explanation: "Chiasmata become visible and synaptonemal complex dissolves during DIPLOTENE, not pachytene. During pachytene, crossing over occurs but the visible evidence (chiasmata) appears only at diplotene. This is a key conceptual trap."
},
{
  id: 174,
  topic: "Meiosis - Metaphase I",
  q: "During metaphase I, bivalent chromosomes align on:",
  options: [
    "The cell plate",
    "The equatorial plate",
    "The spindle poles",
    "The nuclear envelope"
  ],
  correct: 1,
  explanation: "NCERT states: 'The bivalent chromosomes align on the equatorial plate' during metaphase I."
},
{
  id: 175,
  topic: "Meiosis - Metaphase I",
  q: "During metaphase I, the microtubules from opposite poles of the spindle attach to:",
  options: [
    "The kinetochore of sister chromatids of the same chromosome",
    "The kinetochore of homologous chromosomes",
    "The arms of the chromosomes",
    "The telomeres of the chromosomes"
  ],
  correct: 1,
  explanation: "NCERT states: 'The microtubules from the opposite poles of the spindle attach to the kinetochore of homologous chromosomes.' This differs from mitosis where spindle fibres attach to kinetochores of sister chromatids."
},
{
  id: 176,
  topic: "Meiosis - Metaphase I",
  q: "<b>Assertion (A):</b> During metaphase I, microtubules from the same pole attach to the kinetochores of both sister chromatids of a chromosome.<br><b>Reason (R):</b> During metaphase I, homologous chromosomes (not sister chromatids) are to be separated.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. In metaphase I, microtubules from the same pole attach to both sister chromatid kinetochores of one homolog, while microtubules from the opposite pole attach to the other homolog. This arrangement ensures that homologous chromosomes (not sister chromatids) separate during anaphase I. R correctly explains this arrangement."
},
{
  id: 177,
  topic: "Meiosis - Anaphase I",
  q: "During anaphase I, which of the following separates?",
  options: [
    "Sister chromatids",
    "Homologous chromosomes",
    "Non-homologous chromosomes",
    "Centromeres"
  ],
  correct: 1,
  explanation: "NCERT states: 'The homologous chromosomes separate, while sister chromatids remain associated at their centromeres.' This is a key difference from anaphase of mitosis where sister chromatids separate."
},
{
  id: 178,
  topic: "Meiosis - Anaphase I",
  q: "<b>Assertion (A):</b> During anaphase I, sister chromatids remain associated at their centromeres.<br><b>Reason (R):</b> Centromeres do not split during anaphase I.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Sister chromatids remain together (A) because centromeres do not split during anaphase I (R). Centromere splitting occurs only during anaphase II. R correctly explains A."
},
{
  id: 179,
  topic: "Meiosis - Anaphase I",
  q: "Which is the key difference between anaphase of mitosis and anaphase I of meiosis?",
  options: [
    "In mitosis, homologous chromosomes separate; in meiosis I, sister chromatids separate",
    "In mitosis, sister chromatids separate; in meiosis I, homologous chromosomes separate",
    "In both, sister chromatids separate",
    "In both, homologous chromosomes separate"
  ],
  correct: 1,
  explanation: "In anaphase of mitosis, centromeres split and sister chromatids separate. In anaphase I of meiosis, homologous chromosomes separate while sister chromatids remain joined at their centromeres."
},
{
  id: 180,
  topic: "Meiosis - Telophase I",
  q: "During telophase I, which of the following events occur?<br>(a) Nuclear membrane reappears<br>(b) Nucleolus reappears<br>(c) Cytokinesis follows<br>(d) DNA replication occurs",
  options: [
    "Only (a), (b) and (c)",
    "Only (a) and (b)",
    "Only (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 0,
  explanation: "NCERT states: 'The nuclear membrane and nucleolus reappear, cytokinesis follows.' DNA replication does NOT occur during telophase I or the subsequent interkinesis."
},
{
  id: 181,
  topic: "Meiosis - Telophase I",
  q: "The product of meiosis I (after telophase I and cytokinesis) is called:",
  options: [
    "Monad",
    "Dyad of cells",
    "Tetrad of cells",
    "Bivalent"
  ],
  correct: 1,
  explanation: "NCERT states: 'cytokinesis follows and this is called as dyad of cells.' A dyad consists of two cells, each with half the chromosome number."
},
{
  id: 182,
  topic: "Meiosis - Telophase I",
  q: "After telophase I, the chromosomes:",
  options: [
    "Reach the extremely extended state of the interphase nucleus",
    "May undergo some dispersion but do not reach the extremely extended state of interphase nucleus",
    "Remain fully condensed as in metaphase",
    "Completely disappear"
  ],
  correct: 1,
  explanation: "NCERT states: 'Although in many cases the chromosomes do undergo some dispersion, they do not reach the extremely extended state of the interphase nucleus.' This is a subtle but testable detail."
},
{
  id: 183,
  topic: "Meiosis - Interkinesis",
  q: "The stage between the two meiotic divisions is called:",
  options: [
    "Interphase",
    "Interkinesis",
    "Cytokinesis",
    "G0 phase"
  ],
  correct: 1,
  explanation: "NCERT states: 'The stage between the two meiotic divisions is called interkinesis.' It is NOT the same as interphase."
},
{
  id: 184,
  topic: "Meiosis - Interkinesis",
  q: "Which of the following is true about interkinesis?",
  options: [
    "It is a long phase with extensive DNA replication",
    "It is generally short lived with no replication of DNA",
    "It involves complete chromosome condensation",
    "It is identical to the interphase before meiosis I"
  ],
  correct: 1,
  explanation: "NCERT states: 'interkinesis...is generally short lived. There is no replication of DNA during interkinesis.' This is crucial — if DNA replicated again, the chromosome number would not be halved."
},
{
  id: 185,
  topic: "Meiosis - Interkinesis",
  q: "<b>Assertion (A):</b> There is no DNA replication during interkinesis.<br><b>Reason (R):</b> Meiosis involves two sequential divisions but only a single cycle of DNA replication.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true and R correctly explains A. Since meiosis involves only one round of DNA replication (before meiosis I), there is no DNA replication during interkinesis between the two divisions."
},
{
  id: 186,
  topic: "Meiosis - Interkinesis",
  q: "Interkinesis is followed by:",
  options: [
    "Meiosis I",
    "S phase",
    "Prophase II",
    "Metaphase I"
  ],
  correct: 2,
  explanation: "NCERT states: 'Interkinesis is followed by prophase II, a much simpler prophase than prophase I.'"
},
{
  id: 187,
  topic: "Meiosis - General",
  q: "Consider the following statements:<br>(I) Meiosis involves two sequential cycles of nuclear division<br>(II) Meiosis involves two cycles of DNA replication<br>(III) Meiosis involves pairing of homologous chromosomes<br>(IV) Four haploid cells are formed at the end of meiosis<br><br>Which statements are <b>incorrect</b>?",
  options: [
    "Only (I)",
    "Only (II)",
    "Only (III)",
    "Only (II) and (IV)"
  ],
  correct: 1,
  explanation: "Only statement II is incorrect. Meiosis involves only a SINGLE cycle of DNA replication, not two. Statements I, III, and IV are all correct key features of meiosis as per NCERT."
},
{
  id: 188,
  topic: "Meiosis - Prophase I",
  q: "Which of the following events occurs in the correct chronological order during prophase I?",
  options: [
    "Crossing over → Synapsis → Chiasmata visible → Terminalisation",
    "Synapsis → Crossing over → Chiasmata visible → Terminalisation",
    "Chiasmata visible → Crossing over → Synapsis → Terminalisation",
    "Terminalisation → Chiasmata visible → Crossing over → Synapsis"
  ],
  correct: 1,
  explanation: "The correct order is: Synapsis (zygotene) → Crossing over (pachytene) → Chiasmata become visible (diplotene) → Terminalisation of chiasmata (diakinesis)."
},
{
  id: 189,
  topic: "Meiosis - Prophase I",
  q: "A student confuses the sub-stages and states: 'Chiasmata are first formed during pachytene.' This statement is:",
  options: [
    "Correct, as crossing over occurs during pachytene",
    "Incorrect, as chiasmata become visible only during diplotene",
    "Correct, as chiasmata form at recombination nodules",
    "Incorrect, as chiasmata form during leptotene"
  ],
  correct: 1,
  explanation: "While crossing over occurs during pachytene, the X-shaped structures called chiasmata become VISIBLE only during diplotene, when the synaptonemal complex dissolves and homologous chromosomes begin to separate except at crossover sites. This is a very important distinction."
},
{
  id: 190,
  topic: "Meiosis - General",
  q: "Select the <b>correct</b> difference between meiosis I and meiosis II:",
  options: [
    "DNA replication occurs before both meiosis I and meiosis II",
    "Homologous chromosomes separate in meiosis I; sister chromatids separate in meiosis II",
    "Sister chromatids separate in meiosis I; homologous chromosomes separate in meiosis II",
    "Both meiosis I and II are reductional divisions"
  ],
  correct: 1,
  explanation: "In meiosis I, homologous chromosomes separate (reductional division). In meiosis II, sister chromatids separate (equational division). DNA replication occurs only before meiosis I."
},
{
  id: 191,
  topic: "Meiosis - Prophase I",
  q: "Recombination nodules are sites at which:",
  options: [
    "Synaptonemal complex forms",
    "Synapsis of homologous chromosomes occurs",
    "Crossing over occurs between non-sister chromatids",
    "Terminalisation of chiasmata occurs"
  ],
  correct: 2,
  explanation: "NCERT states: 'This stage (pachytene) is characterised by the appearance of recombination nodules, the sites at which crossing over occurs between non-sister chromatids of the homologous chromosomes.'"
},
{
  id: 192,
  topic: "Meiosis - Prophase I",
  q: "By the end of diakinesis, which of the following events have occurred?<br>(a) Nucleolus disappears<br>(b) Nuclear envelope breaks down<br>(c) Meiotic spindle is assembled<br>(d) Chiasmata have terminalised<br>(e) DNA replication has occurred for the second time",
  options: [
    "Only (a), (b), (c) and (d)",
    "Only (a) and (b)",
    "All — (a), (b), (c), (d) and (e)",
    "Only (c), (d) and (e)"
  ],
  correct: 0,
  explanation: "Events (a), (b), (c), and (d) all occur by the end of diakinesis as per NCERT. Statement (e) is incorrect — DNA replication occurs only once (before meiosis I), not during diakinesis."
},
{
  id: 193,
  topic: "Cytokinesis",
  q: "The direction of cytokinesis in animal and plant cells can be described as:",
  options: [
    "Centripetal in both animal and plant cells",
    "Centrifugal in both animal and plant cells",
    "Centripetal in animal cells and centrifugal in plant cells",
    "Centrifugal in animal cells and centripetal in plant cells"
  ],
  correct: 2,
  explanation: "In animal cells, cleavage furrow forms from the periphery inward (centripetal). In plant cells, cell plate forms from the centre outward (centrifugal). This is a classic comparison question in NEET."
},
{
  id: 194,
  topic: "Significance of Mitosis",
  q: "The nucleo-cytoplasmic ratio is restored by:",
  options: [
    "DNA replication",
    "Cell division (mitosis)",
    "Protein synthesis",
    "Cell growth"
  ],
  correct: 1,
  explanation: "NCERT states: 'Cell growth results in disturbing the ratio between the nucleus and the cytoplasm. It therefore becomes essential for the cell to divide to restore the nucleo-cytoplasmic ratio.'"
},
{
  id: 195,
  topic: "Meiosis - Prophase I",
  q: "Which of the following is the correct chronological relationship between synaptonemal complex and chiasmata?",
  options: [
    "Chiasmata form first, then synaptonemal complex",
    "Both form simultaneously during pachytene",
    "Synaptonemal complex forms during zygotene; chiasmata become visible during diplotene after synaptonemal complex dissolves",
    "Both form during diplotene simultaneously"
  ],
  correct: 2,
  explanation: "Synaptonemal complex forms during zygotene (facilitating synapsis). After crossing over in pachytene, the synaptonemal complex dissolves at the beginning of diplotene, and chiasmata become visible at the points where crossing over occurred."
},
{
  id: 196,
  topic: "Meiosis - Prophase I",
  q: "If a cell with 2n = 14 enters meiosis, the number of bivalents formed during zygotene/pachytene would be:",
  options: [
    "14",
    "7",
    "28",
    "4"
  ],
  correct: 1,
  explanation: "A bivalent is formed by the pairing of two homologous chromosomes. If 2n = 14, there are 7 pairs of homologous chromosomes, so 7 bivalents will be formed."
},
{
  id: 197,
  topic: "Meiosis - Prophase I",
  q: "If a cell with 2n = 14 enters meiosis, the number of chromatids in a single tetrad would be:",
  options: [
    "2",
    "4",
    "7",
    "14"
  ],
  correct: 1,
  explanation: "A tetrad (bivalent) consists of two homologous chromosomes, each with two sister chromatids = 4 chromatids per tetrad. This is why it's called a tetrad."
},
{
  id: 198,
  topic: "Meiosis - General",
  q: "Which of the following correctly distinguishes metaphase I of meiosis from metaphase of mitosis?",
  options: [
    "In metaphase I, individual chromosomes align; in mitotic metaphase, bivalents align",
    "In metaphase I, bivalents align on the equatorial plate; in mitotic metaphase, individual chromosomes align",
    "There is no difference between the two",
    "In metaphase I, spindle fibres do not form; in mitotic metaphase, they form"
  ],
  correct: 1,
  explanation: "In metaphase I, bivalent chromosomes (paired homologs) align on the equatorial plate. In mitotic metaphase, individual chromosomes (each with two sister chromatids) align at the metaphase plate."
},
{
  id: 199,
  topic: "Meiosis - Telophase I",
  q: "Which of the following is <b>incorrect</b> about telophase I?",
  options: [
    "Nuclear membrane and nucleolus reappear",
    "Cytokinesis follows to form a dyad of cells",
    "Chromosomes reach the extremely extended state of interphase nucleus",
    "Chromosomes may undergo some dispersion"
  ],
  correct: 2,
  explanation: "NCERT specifically states that although chromosomes may undergo some dispersion, they do NOT reach the extremely extended state of the interphase nucleus. This is a testable detail."
},
{
  id: 200,
  topic: "Meiosis - General",
  q: "Prophase II is described as:",
  options: [
    "More complex than prophase I",
    "Identical to prophase I in all respects",
    "A much simpler prophase than prophase I",
    "Longer than prophase I"
  ],
  correct: 2,
  explanation: "NCERT states: 'Interkinesis is followed by prophase II, a much simpler prophase than prophase I.' This is because events like synapsis, crossing over, and recombination do not occur in prophase II."
},
{
  id: 201,
  topic: "Cytokinesis",
  q: "Consider the following comparison between cytokinesis in animal and plant cells:<br>(I) Animal cells: Furrow formation; Plant cells: Cell plate formation<br>(II) Animal cells: Outside to inside; Plant cells: Inside to outside<br>(III) Animal cells: Cell plate forms; Plant cells: Furrow forms<br>(IV) Cell plate represents middle lamella in plant cells<br><br>Which statements are correct?",
  options: [
    "I, II and IV",
    "I, II and III",
    "II, III and IV",
    "All are correct"
  ],
  correct: 0,
  explanation: "Statements I, II, and IV are correct. Statement III is wrong — it reverses the mechanisms. Animal cells form furrows (not cell plates) and plant cells form cell plates (not furrows)."
},
{
  id: 202,
  topic: "Meiosis - Prophase I",
  q: "A student observes a meiotic cell where homologous chromosomes are paired and X-shaped structures are visible, but the synaptonemal complex has dissolved. The cell is most likely in:",
  options: [
    "Zygotene",
    "Pachytene",
    "Diplotene",
    "Diakinesis"
  ],
  correct: 2,
  explanation: "The combination of dissolved synaptonemal complex + visible chiasmata (X-shaped structures) + homologous chromosomes still partially paired is characteristic of diplotene."
},
{
  id: 203,
  topic: "Meiosis - Prophase I",
  q: "A researcher observes a cell in prophase I where chromosomes are fully condensed, nuclear envelope is breaking down, and chiasmata appear to be moving towards chromosome ends. The cell is in:",
  options: [
    "Leptotene",
    "Pachytene",
    "Diplotene",
    "Diakinesis"
  ],
  correct: 3,
  explanation: "Fully condensed chromosomes + nuclear envelope breakdown + terminalisation of chiasmata (movement towards chromosome ends) are all characteristic features of diakinesis."
},
{
  id: 204,
  topic: "Meiosis - General",
  q: "Which of the following events is common to both the end of prophase (mitosis) and the end of diakinesis (meiosis)?<br>(a) Nucleolus disappears<br>(b) Nuclear envelope breaks down<br>(c) Crossing over occurs<br>(d) Chromosomes are condensed",
  options: [
    "Only (a), (b) and (d)",
    "Only (c)",
    "Only (a) and (b)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 0,
  explanation: "Events (a), (b), and (d) are common to both. Crossing over (c) is exclusive to meiosis (pachytene of prophase I) and does NOT occur during mitotic prophase."
},
{
  id: 205,
  topic: "Significance of Mitosis",
  q: "Consider the following:<br>(I) Growth of multicellular organisms<br>(II) Cell repair<br>(III) Restoring nucleo-cytoplasmic ratio<br>(IV) Production of genetic variation<br>(V) Continuous growth in meristematic tissues<br><br>Which of the above are significances of mitosis?",
  options: [
    "I, II, III and V only",
    "I, II, III, IV and V",
    "I, III and IV only",
    "II and IV only"
  ],
  correct: 0,
  explanation: "I, II, III, and V are all significances of mitosis as per NCERT. IV (genetic variation) is a significance of meiosis, not mitosis. Mitosis produces genetically identical daughter cells."
},
{
  id: 206,
  topic: "Meiosis - Prophase I",
  q: "Crossing over is defined as:",
  options: [
    "Pairing of homologous chromosomes",
    "Exchange of genetic material between two homologous chromosomes",
    "Separation of homologous chromosomes",
    "Formation of synaptonemal complex"
  ],
  correct: 1,
  explanation: "NCERT defines: 'Crossing over is the exchange of genetic material between two homologous chromosomes.'"
},
{
  id: 207,
  topic: "Meiosis - Prophase I",
  q: "The correct sequence of events in prophase I is:",
  options: [
    "Chromosome compaction → Synapsis → Synaptonemal complex formation → Crossing over → Synaptonemal complex dissolution → Chiasmata visible → Terminalisation",
    "Synapsis → Chromosome compaction → Crossing over → Terminalisation → Chiasmata visible",
    "Crossing over → Synapsis → Chiasmata → Terminalisation → Synaptonemal complex",
    "Synaptonemal complex → Synapsis → Terminalisation → Crossing over → Chiasmata"
  ],
  correct: 0,
  explanation: "The correct sequence is: Chromosome compaction (leptotene) → Synapsis + synaptonemal complex formation (zygotene) → Crossing over at recombination nodules (pachytene) → Synaptonemal complex dissolution + chiasmata visible (diplotene) → Terminalisation of chiasmata (diakinesis)."
},
{
  id: 208,
  topic: "Meiosis - Anaphase I",
  q: "Select the <b>correct</b> statement about anaphase I:",
  options: [
    "Sister chromatids separate and move to opposite poles",
    "Centromeres split during this stage",
    "Homologous chromosomes separate while sister chromatids remain associated at centromeres",
    "Chromosomes align at the equatorial plate"
  ],
  correct: 2,
  explanation: "NCERT states: 'The homologous chromosomes separate, while sister chromatids remain associated at their centromeres.' Centromeres do NOT split during anaphase I — this is a critical difference from mitotic anaphase."
},
{
  id: 209,
  topic: "Meiosis - General",
  q: "Gametes are formed from:",
  options: [
    "Specialised haploid cells",
    "Specialised diploid cells",
    "Any somatic cell",
    "Only stem cells"
  ],
  correct: 1,
  explanation: "NCERT states: 'Gametes are formed from specialised diploid cells.' These diploid cells undergo meiosis to produce haploid gametes."
},
{
  id: 210,
  topic: "Meiosis - Prophase I",
  q: "<b>Assertion (A):</b> During diplotene, homologous chromosomes of the bivalents tend to separate from each other.<br><b>Reason (R):</b> The synaptonemal complex dissolves at the beginning of diplotene.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The dissolution of the synaptonemal complex (R) causes the homologous chromosomes to tend to separate (A). However, they remain linked at the sites of crossing over (chiasmata)."
},
{
  id: 211,
  topic: "Meiosis - General",
  q: "The production of offspring by sexual reproduction involves the fusion of two gametes, each with:",
  options: [
    "A complete diploid set of chromosomes",
    "A complete haploid set of chromosomes",
    "A random number of chromosomes",
    "Double the normal chromosome number"
  ],
  correct: 1,
  explanation: "NCERT states: 'The production of offspring by sexual reproduction includes the fusion of two gametes, each with a complete haploid set of chromosomes.'"
},
{
  id: 212,
  topic: "Meiosis - Prophase I",
  q: "During which sub-stage are bivalents/tetrads most clearly visible?",
  options: [
    "Leptotene",
    "Zygotene",
    "Pachytene",
    "Diakinesis"
  ],
  correct: 2,
  explanation: "NCERT states that bivalents form during zygotene but notes 'these are more clearly visible at the next stage' — i.e., pachytene, where the four chromatids of each bivalent become distinct and clearly appear as tetrads."
},
{
  id: 213,
  topic: "Meiosis II - Prophase II",
  q: "Meiosis II is initiated:",
  options: [
    "After a long interphase with complete chromosome elongation",
    "Immediately after cytokinesis, usually before chromosomes have fully elongated",
    "Only after complete DNA replication in interkinesis",
    "After chromosomes have reached the extremely extended interphase state"
  ],
  correct: 1,
  explanation: "NCERT states: 'Meiosis II is initiated immediately after cytokinesis, usually before the chromosomes have fully elongated.'"
},
{
  id: 214,
  topic: "Meiosis II - Prophase II",
  q: "Meiosis II resembles:",
  options: [
    "Meiosis I",
    "A normal mitosis",
    "S phase of interphase",
    "G1 phase of interphase"
  ],
  correct: 1,
  explanation: "NCERT states: 'In contrast to meiosis I, meiosis II resembles a normal mitosis.' This is because meiosis II involves separation of sister chromatids, just like mitosis."
},
{
  id: 215,
  topic: "Meiosis II - Prophase II",
  q: "During prophase II, which of the following events occur?<br>(a) Nuclear membrane disappears<br>(b) Chromosomes become compact<br>(c) Synapsis of homologous chromosomes occurs<br>(d) Crossing over takes place",
  options: [
    "Only (a) and (b)",
    "Only (a), (b) and (c)",
    "Only (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 0,
  explanation: "Only (a) and (b) occur during prophase II. Synapsis (c) and crossing over (d) are exclusive to prophase I of meiosis. Prophase II is a much simpler prophase."
},
{
  id: 216,
  topic: "Meiosis II - Prophase II",
  q: "<b>Assertion (A):</b> Prophase II is a much simpler prophase than prophase I.<br><b>Reason (R):</b> Events like synapsis, crossing over, and recombination do not occur in prophase II.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Prophase II is simpler because the complex events of prophase I (synapsis, crossing over, recombination, synaptonemal complex formation) do not occur. R correctly explains A."
},
{
  id: 217,
  topic: "Meiosis II - Metaphase II",
  q: "During metaphase II, which of the following aligns at the equator?",
  options: [
    "Bivalent chromosomes",
    "Homologous chromosome pairs",
    "Individual chromosomes (each with two sister chromatids)",
    "Tetrads"
  ],
  correct: 2,
  explanation: "During metaphase II, individual chromosomes (each consisting of two sister chromatids) align at the equator, NOT bivalents. Bivalents align at the equator during metaphase I."
},
{
  id: 218,
  topic: "Meiosis II - Metaphase II",
  q: "During metaphase II, microtubules from opposite poles of the spindle get attached to:",
  options: [
    "Kinetochores of homologous chromosomes",
    "Kinetochores of sister chromatids",
    "Arms of the chromosomes",
    "Centromeres directly"
  ],
  correct: 1,
  explanation: "NCERT states: 'the microtubules from opposite poles of the spindle get attached to the kinetochores of sister chromatids.' This is similar to mitotic metaphase. In metaphase I, they attach to kinetochores of homologous chromosomes."
},
{
  id: 219,
  topic: "Meiosis II - Metaphase II",
  q: "Which of the following correctly compares metaphase I and metaphase II?",
  options: [
    "In both, bivalents align at the equator",
    "In metaphase I, bivalents align; in metaphase II, individual chromosomes align",
    "In metaphase I, individual chromosomes align; in metaphase II, bivalents align",
    "In both, individual chromosomes align at the equator"
  ],
  correct: 1,
  explanation: "In metaphase I, bivalents (paired homologs) align at the equatorial plate. In metaphase II, individual chromosomes align at the equator with microtubules attached to kinetochores of sister chromatids."
},
{
  id: 220,
  topic: "Meiosis II - Anaphase II",
  q: "Anaphase II begins with:",
  options: [
    "Separation of homologous chromosomes",
    "Simultaneous splitting of the centromere of each chromosome",
    "Formation of synaptonemal complex",
    "Dissolution of nuclear envelope"
  ],
  correct: 1,
  explanation: "NCERT states: 'It begins with the simultaneous splitting of the centromere of each chromosome (which was holding the sister chromatids together).'"
},
{
  id: 221,
  topic: "Meiosis II - Anaphase II",
  q: "During anaphase II, sister chromatids move toward opposite poles by:",
  options: [
    "Elongation of microtubules attached to kinetochores",
    "Shortening of microtubules attached to kinetochores",
    "Dissolution of the nuclear envelope",
    "Formation of the cell plate"
  ],
  correct: 1,
  explanation: "NCERT states: 'allowing them to move toward opposite poles of the cell by shortening of microtubules attached to kinetochores.'"
},
{
  id: 222,
  topic: "Meiosis II - Anaphase II",
  q: "<b>Assertion (A):</b> During anaphase II, sister chromatids separate.<br><b>Reason (R):</b> The centromere of each chromosome splits simultaneously during anaphase II.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Sister chromatids separate (A) because the centromere splits (R). R is the direct cause of A."
},
{
  id: 223,
  topic: "Meiosis II - Anaphase II",
  q: "Which of the following correctly compares anaphase I and anaphase II?",
  options: [
    "In anaphase I, centromeres split; in anaphase II, they do not",
    "In anaphase I, sister chromatids separate; in anaphase II, homologous chromosomes separate",
    "In anaphase I, homologous chromosomes separate; in anaphase II, sister chromatids separate",
    "In both, homologous chromosomes separate"
  ],
  correct: 2,
  explanation: "In anaphase I, homologous chromosomes separate (centromeres do NOT split). In anaphase II, centromeres split and sister chromatids separate. This is a very important NEET comparison."
},
{
  id: 224,
  topic: "Meiosis II - Telophase II",
  q: "Meiosis ends with:",
  options: [
    "Telophase I",
    "Anaphase II",
    "Telophase II",
    "Interkinesis"
  ],
  correct: 2,
  explanation: "NCERT states: 'Meiosis ends with telophase II.'"
},
{
  id: 225,
  topic: "Meiosis II - Telophase II",
  q: "During telophase II, the two groups of chromosomes:",
  options: [
    "Further condense and remain compact",
    "Get enclosed by a nuclear envelope",
    "Undergo another round of DNA replication",
    "Form bivalents again"
  ],
  correct: 1,
  explanation: "NCERT states: 'the two groups of chromosomes once again get enclosed by a nuclear envelope; cytokinesis follows.'"
},
{
  id: 226,
  topic: "Meiosis II - Telophase II",
  q: "The final product of meiosis is:",
  options: [
    "Two diploid daughter cells",
    "Two haploid daughter cells",
    "Four diploid daughter cells",
    "Four haploid daughter cells (tetrad of cells)"
  ],
  correct: 3,
  explanation: "NCERT states: 'cytokinesis follows resulting in the formation of tetrad of cells i.e., four haploid daughter cells.'"
},
{
  id: 227,
  topic: "Meiosis II - Telophase II",
  q: "The term 'tetrad of cells' refers to:",
  options: [
    "Four chromatids in a bivalent during pachytene",
    "Four haploid daughter cells formed at the end of meiosis II",
    "Four homologous chromosomes paired together",
    "Four bivalents during metaphase I"
  ],
  correct: 1,
  explanation: "NCERT uses 'tetrad of cells' to refer to the four haploid daughter cells formed at the end of meiosis II. Note: 'tetrad' can also refer to four chromatids of a bivalent during pachytene — context matters!"
},
{
  id: 228,
  topic: "Meiosis II - General",
  q: "Which of the following events occurs in anaphase II but NOT in anaphase I?",
  options: [
    "Movement of chromosomes towards poles",
    "Splitting of centromeres",
    "Separation of homologous chromosomes",
    "Shortening of spindle fibres"
  ],
  correct: 1,
  explanation: "Centromeres split during anaphase II but NOT during anaphase I. In anaphase I, homologous chromosomes separate while sister chromatids remain joined at their centromeres."
},
{
  id: 229,
  topic: "Meiosis II - General",
  q: "Consider the following statements:<br>(I) Meiosis II resembles normal mitosis<br>(II) In meiosis II, sister chromatids separate<br>(III) DNA replication occurs before meiosis II<br>(IV) Four haploid cells are formed at the end of meiosis II<br><br>Which statements are correct?",
  options: [
    "I, II and IV only",
    "I, II, III and IV",
    "I and IV only",
    "II, III and IV only"
  ],
  correct: 0,
  explanation: "Statements I, II, and IV are correct. Statement III is wrong — there is NO DNA replication before meiosis II (no replication during interkinesis). This is a classic NEET trap."
},
{
  id: 230,
  topic: "Meiosis II - General",
  q: "The correct sequence of events during meiosis II is:",
  options: [
    "Prophase II → Anaphase II → Metaphase II → Telophase II",
    "Prophase II → Metaphase II → Telophase II → Anaphase II",
    "Prophase II → Metaphase II → Anaphase II → Telophase II",
    "Metaphase II → Prophase II → Anaphase II → Telophase II"
  ],
  correct: 2,
  explanation: "The sequence is the same as mitosis: Prophase II → Metaphase II → Anaphase II → Telophase II."
},
{
  id: 231,
  topic: "Meiosis II - General",
  q: "<b>Assertion (A):</b> Meiosis II is called an equational division.<br><b>Reason (R):</b> During meiosis II, the chromosome number is maintained (not reduced) as sister chromatids separate.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. Meiosis II is equational because the chromosome number remains the same before and after the division (sister chromatids separate, not homologs). R correctly explains why it is equational."
},
{
  id: 232,
  topic: "Meiosis II - General",
  q: "During meiosis, the actual reduction in chromosome number occurs during:",
  options: [
    "Meiosis II",
    "Meiosis I",
    "Interkinesis",
    "Both meiosis I and meiosis II equally"
  ],
  correct: 1,
  explanation: "The actual reduction in chromosome number occurs during meiosis I (specifically anaphase I) when homologous chromosomes separate. Meiosis II is equational — chromosome number is maintained."
},
{
  id: 233,
  topic: "Significance of Meiosis",
  q: "Meiosis is the mechanism by which:",
  options: [
    "Chromosome number is doubled in each generation",
    "Conservation of specific chromosome number of each species is achieved across generations",
    "Identical daughter cells are produced",
    "Only diploid cells are formed"
  ],
  correct: 1,
  explanation: "NCERT states: 'Meiosis is the mechanism by which conservation of specific chromosome number of each species is achieved across generations in sexually reproducing organisms.'"
},
{
  id: 234,
  topic: "Significance of Meiosis",
  q: "Which of the following is a paradox about meiosis as described by NCERT?",
  options: [
    "It conserves chromosome number but actually increases it",
    "It conserves specific chromosome number across generations but per se results in reduction of chromosome number by half",
    "It produces diploid cells but is called reduction division",
    "It occurs in haploid cells to produce diploid cells"
  ],
  correct: 1,
  explanation: "NCERT states: 'Meiosis is the mechanism by which conservation of specific chromosome number...is achieved...even though the process, per se, paradoxically, results in reduction of chromosome number by half.' The paradox is that halving actually conserves the species' chromosome number when combined with fertilisation."
},
{
  id: 235,
  topic: "Significance of Meiosis",
  q: "Meiosis increases genetic variability in the population through which processes?",
  options: [
    "Only DNA replication",
    "Crossing over and independent assortment of chromosomes",
    "Only cytokinesis",
    "Cell growth during interphase"
  ],
  correct: 1,
  explanation: "NCERT states meiosis 'increases the genetic variability in the population of organisms from one generation to the next.' This occurs through crossing over (recombination) and independent assortment of homologous chromosomes."
},
{
  id: 236,
  topic: "Significance of Meiosis",
  q: "Why are variations important according to NCERT?",
  options: [
    "They are not important",
    "They are important only for growth",
    "They are very important for the process of evolution",
    "They are important only for cell repair"
  ],
  correct: 2,
  explanation: "NCERT states: 'Variations are very important for the process of evolution.'"
},
{
  id: 237,
  topic: "Significance of Meiosis",
  q: "<b>Assertion (A):</b> Meiosis reduces chromosome number by half.<br><b>Reason (R):</b> This reduction is essential to conserve the specific chromosome number when gametes fuse during fertilisation.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. If meiosis did not reduce chromosome number by half (A), fusion of gametes during fertilisation would double the chromosome number each generation. The reduction (A) is essential for conservation of chromosome number (R). R correctly explains the biological significance of A."
},
{
  id: 238,
  topic: "Significance of Meiosis",
  q: "Consider the following significances:<br>(I) Conservation of species-specific chromosome number<br>(II) Increases genetic variability<br>(III) Produces identical daughter cells<br>(IV) Important for evolution<br><br>Which are significances of meiosis?",
  options: [
    "I, II and IV only",
    "I, II and III only",
    "III and IV only",
    "All are correct"
  ],
  correct: 0,
  explanation: "I, II, and IV are correct significances of meiosis. III is wrong — meiosis does NOT produce identical daughter cells; it produces genetically variable haploid cells. Production of identical cells is a feature of mitosis."
},
{
  id: 239,
  topic: "Significance of Meiosis",
  q: "In sexually reproducing organisms, the diploid phase is restored by:",
  options: [
    "Meiosis",
    "Mitosis",
    "Fertilisation",
    "DNA replication"
  ],
  correct: 2,
  explanation: "NCERT states: 'Meiosis ensures the production of haploid phase...whereas fertilisation restores the diploid phase.'"
},
{
  id: 240,
  topic: "Summary - Cell Cycle",
  q: "According to the cell theory, cells arise from:",
  options: [
    "Non-living matter",
    "Preexisting cells",
    "Spontaneous generation",
    "Chemical reactions only"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'According to the cell theory, cells arise from preexisting cells. The process by which this occurs is called cell division.'"
},
{
  id: 241,
  topic: "Summary - Cell Cycle",
  q: "Any sexually reproducing organism starts its life cycle from:",
  options: [
    "A multicellular embryo",
    "A single-celled zygote",
    "A haploid gamete",
    "A diploid somatic cell"
  ],
  correct: 1,
  explanation: "NCERT states: 'Any sexually reproducing organism starts its life cycle from a single-celled zygote.'"
},
{
  id: 242,
  topic: "Summary - Cell Cycle",
  q: "Cell division in an organism:",
  options: [
    "Stops with the formation of the mature organism",
    "Occurs only during embryonic development",
    "Does not stop with the formation of the mature organism but continues throughout its life cycle",
    "Occurs only in reproductive organs"
  ],
  correct: 2,
  explanation: "NCERT states: 'Cell division does not stop with the formation of the mature organism but continues throughout its life cycle.'"
},
{
  id: 243,
  topic: "Summary - Cell Cycle",
  q: "The stages through which a cell passes from one division to the next is called:",
  options: [
    "Cell division",
    "Cell cycle",
    "Cell growth",
    "Cell differentiation"
  ],
  correct: 1,
  explanation: "NCERT states: 'The stages through which a cell passes from one division to the next is called the cell cycle.'"
},
{
  id: 244,
  topic: "Summary - Interphase",
  q: "Most of the organelle duplication occurs during which phase of interphase?",
  options: [
    "S phase",
    "G1 phase",
    "G2 phase",
    "M phase"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'G1 phase is the period when the cell grows and carries out normal metabolism. Most of the organelle duplication also occurs during this phase.'"
},
{
  id: 245,
  topic: "Summary - Interphase",
  q: "S phase is marked by:",
  options: [
    "Cell growth and normal metabolism",
    "Cytoplasmic growth only",
    "DNA replication and chromosome duplication",
    "Protein synthesis for mitosis"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'S phase marks the phase of DNA replication and chromosome duplication.'"
},
{
  id: 246,
  topic: "Summary - Interphase",
  q: "G2 phase is the period of:",
  options: [
    "DNA replication",
    "Organelle duplication",
    "Cytoplasmic growth",
    "Nuclear division"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'G2 phase is the period of cytoplasmic growth.'"
},
{
  id: 247,
  topic: "Summary - Mitosis",
  q: "During prophase of mitosis, which of the following events occur simultaneously?<br>(a) Chromosome condensation<br>(b) Centrioles move to opposite poles<br>(c) Nuclear envelope and nucleolus disappear<br>(d) Spindle fibres start appearing",
  options: [
    "Only (a) and (b)",
    "Only (a), (b) and (d)",
    "Only (c) and (d)",
    "All — (a), (b), (c) and (d)"
  ],
  correct: 3,
  explanation: "NCERT summary states all four events occur during prophase: chromosome condensation, centrioles moving to opposite poles, disappearance of nuclear envelope and nucleolus, and spindle fibre formation."
},
{
  id: 248,
  topic: "Summary - Mitosis",
  q: "During anaphase of mitosis, which events occur?<br>(a) Centromeres divide<br>(b) Chromatids start moving towards two opposite poles<br>(c) Chromosomes align at equatorial plate<br>(d) Nuclear membrane reappears",
  options: [
    "Only (a) and (b)",
    "Only (c) and (d)",
    "Only (a), (b) and (c)",
    "All of the above"
  ],
  correct: 0,
  explanation: "Only (a) and (b) are anaphase events. Alignment at equatorial plate (c) is a metaphase event. Nuclear membrane reappearance (d) is a telophase event."
},
{
  id: 249,
  topic: "Summary - Mitosis",
  q: "Which of the following correctly describes telophase of mitosis as per NCERT summary?<br>(a) Chromatids reach the two poles<br>(b) Chromosomal elongation starts<br>(c) Nucleolus and nuclear membrane reappear",
  options: [
    "Only (a) and (b)",
    "Only (b) and (c)",
    "Only (a) and (c)",
    "All — (a), (b) and (c)"
  ],
  correct: 3,
  explanation: "NCERT summary states: 'Once the chromatids reach the two poles, the chromosomal elongation starts, nucleolus and the nuclear membrane reappear. This stage is called the telophase.' All three are correct."
},
{
  id: 250,
  topic: "Summary - Mitosis",
  q: "Mitosis is called equational division because:",
  options: [
    "It produces four daughter cells",
    "It reduces chromosome number by half",
    "The chromosome number of the parent is conserved in the daughter cell",
    "It occurs only in haploid cells"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'Mitosis thus, is the equational division in which the chromosome number of the parent is conserved in the daughter cell.'"
},
{
  id: 251,
  topic: "Summary - Meiosis",
  q: "Meiosis occurs in which type of cells?",
  options: [
    "All somatic cells",
    "Diploid cells destined to form gametes",
    "Only haploid cells",
    "All cells undergoing growth"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'meiosis occurs in the diploid cells, which are destined to form gametes.'"
},
{
  id: 252,
  topic: "Summary - Meiosis",
  q: "Meiosis is called the reduction division because:",
  options: [
    "It increases the chromosome number",
    "It conserves the chromosome number",
    "It reduces the chromosome number by half while making gametes",
    "It produces identical daughter cells"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'It is called the reduction division since it reduces the chromosome number by half while making the gametes.'"
},
{
  id: 253,
  topic: "Summary - Meiosis",
  q: "In sexual reproduction, when two gametes fuse:",
  options: [
    "Chromosome number is halved",
    "Chromosome number is restored to the value in the parent",
    "Chromosome number is doubled beyond parent value",
    "Chromosome number remains at haploid level"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'In sexual reproduction when the two gametes fuse the chromosome number is restored to the value in the parent.'"
},
{
  id: 254,
  topic: "Summary - Meiosis",
  q: "During anaphase I of meiosis, homologous chromosomes move to opposite poles with:",
  options: [
    "Only one chromatid each",
    "Both their chromatids (sister chromatids remain joined)",
    "No chromatids",
    "Four chromatids each"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'homologous chromosomes move to the opposite poles with both their chromatids.' This means sister chromatids do NOT separate in anaphase I."
},
{
  id: 255,
  topic: "Summary - Meiosis",
  q: "Each pole receives how many chromosomes after anaphase I?",
  options: [
    "The same number as the parent cell (2n)",
    "Half the chromosome number of the parent cell",
    "Double the chromosome number of the parent cell",
    "A random number of chromosomes"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Each pole receives half the chromosome number of the parent cell.'"
},
{
  id: 256,
  topic: "Summary - Integrative",
  q: "Consider the following comparison between mitosis and meiosis:<br>(I) Mitosis is equational; Meiosis is reductional<br>(II) Mitosis produces 2 cells; Meiosis produces 4 cells<br>(III) Mitosis occurs in somatic cells; Meiosis in cells destined for gamete formation<br>(IV) Both involve crossing over<br><br>Which statements are correct?",
  options: [
    "I, II and III only",
    "I, II, III and IV",
    "II, III and IV only",
    "I and III only"
  ],
  correct: 0,
  explanation: "Statements I, II, and III are correct. Statement IV is wrong — crossing over occurs only in meiosis (prophase I), NOT in mitosis."
},
{
  id: 257,
  topic: "Summary - Integrative",
  q: "Which of the following correctly pairs the division type with its outcome?",
  options: [
    "Mitosis → 4 haploid cells; Meiosis → 2 diploid cells",
    "Mitosis → 2 diploid identical cells; Meiosis → 4 haploid genetically variable cells",
    "Mitosis → 2 haploid cells; Meiosis → 4 diploid cells",
    "Mitosis → 4 diploid cells; Meiosis → 2 haploid cells"
  ],
  correct: 1,
  explanation: "Mitosis produces 2 diploid daughter cells with identical genetic complement. Meiosis produces 4 haploid daughter cells with genetic variability due to crossing over and independent assortment."
},
{
  id: 258,
  topic: "Summary - Integrative",
  q: "Match the following:<br>(a) G1 phase — (i) DNA replication<br>(b) S phase — (ii) Cytoplasmic growth<br>(c) G2 phase — (iii) Cell growth, metabolism, organelle duplication<br>(d) M phase — (iv) Actual cell division",
  options: [
    "a-iii, b-i, c-ii, d-iv",
    "a-i, b-ii, c-iii, d-iv",
    "a-ii, b-iii, c-i, d-iv",
    "a-iv, b-i, c-ii, d-iii"
  ],
  correct: 0,
  explanation: "G1: cell growth, metabolism, organelle duplication (a-iii). S: DNA replication (b-i). G2: cytoplasmic growth (c-ii). M: actual cell division (d-iv)."
},
{
  id: 259,
  topic: "Summary - Integrative",
  q: "Nuclear division followed by cytoplasmic division is the correct order. These are called respectively:",
  options: [
    "Cytokinesis and karyokinesis",
    "Karyokinesis and cytokinesis",
    "Mitosis and meiosis",
    "Interphase and M phase"
  ],
  correct: 1,
  explanation: "NCERT summary states: 'Nuclear division is then followed by the cytoplasmic division and is called cytokinesis.' Nuclear division = karyokinesis; cytoplasmic division = cytokinesis."
},
{
  id: 260,
  topic: "Summary - Integrative",
  q: "A cell has 2n = 24 chromosomes. After meiosis I, each daughter cell will have ______ chromosomes, and after meiosis II, each cell will have ______ chromosomes.",
  options: [
    "24; 24",
    "12; 12",
    "12; 6",
    "24; 12"
  ],
  correct: 1,
  explanation: "After meiosis I (reductional division): chromosome number is halved from 24 to 12. After meiosis II (equational division): chromosome number remains 12. Meiosis II separates sister chromatids, not homologs."
},
{
  id: 261,
  topic: "Summary - Integrative",
  q: "If a cell with DNA content 2C undergoes meiosis, the DNA content at the end of meiosis I and meiosis II will be respectively:",
  options: [
    "2C and C",
    "C and C",
    "4C and 2C",
    "2C and 2C"
  ],
  correct: 0,
  explanation: "Before meiosis: DNA replicates to 4C during S phase. After meiosis I: each cell has 2C. After meiosis II: each cell has C. But if the question says initial content is 2C (meaning at G1), then: S phase → 4C → after meiosis I → 2C → after meiosis II → C."
},
{
  id: 262,
  topic: "Summary - Integrative",
  q: "<b>Assertion (A):</b> Meiosis II is similar to mitosis.<br><b>Reason (R):</b> During anaphase II, sister chromatids separate, just like in anaphase of mitosis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. NCERT states 'Meiosis II is similar to mitosis' and 'During anaphase II the sister chromatids separate.' The separation of sister chromatids (R) is the key event that makes meiosis II similar to mitosis (A)."
},
{
  id: 263,
  topic: "Summary - Integrative",
  q: "Consider the following events and identify which occur in meiosis but NOT in mitosis:<br>(a) Bivalent formation<br>(b) Crossing over<br>(c) Separation of sister chromatids<br>(d) Synapsis<br>(e) Formation of four haploid cells",
  options: [
    "Only (a), (b) and (c)",
    "Only (a), (b), (d) and (e)",
    "Only (c) and (e)",
    "All — (a), (b), (c), (d) and (e)"
  ],
  correct: 1,
  explanation: "Bivalent formation (a), crossing over (b), synapsis (d), and formation of four haploid cells (e) are exclusive to meiosis. Separation of sister chromatids (c) occurs in BOTH mitosis (anaphase) and meiosis II (anaphase II)."
},
{
  id: 264,
  topic: "Summary - Integrative",
  q: "The correct sequence of prophase I sub-stages and their key events is:<br>Select the INCORRECT pairing:",
  options: [
    "Leptotene — Chromosomes become visible",
    "Zygotene — Synapsis and synaptonemal complex formation",
    "Pachytene — Terminalisation of chiasmata",
    "Diplotene — Chiasmata become visible"
  ],
  correct: 2,
  explanation: "Pachytene is characterised by crossing over at recombination nodules, NOT terminalisation of chiasmata. Terminalisation of chiasmata occurs during diakinesis."
},
{
  id: 265,
  topic: "Meiosis II - General",
  q: "Which of the following is common to both anaphase of mitosis and anaphase II of meiosis?",
  options: [
    "Separation of homologous chromosomes",
    "Splitting of centromeres and separation of sister chromatids",
    "Formation of bivalents",
    "Crossing over between non-sister chromatids"
  ],
  correct: 1,
  explanation: "Both anaphase of mitosis and anaphase II of meiosis involve splitting of centromeres and separation of sister chromatids. This is why meiosis II is said to resemble mitosis."
},
{
  id: 266,
  topic: "Summary - Integrative",
  q: "A cell with 2n = 46 chromosomes undergoes meiosis. How many chromosomes and chromatids will be present in each cell at metaphase II?",
  options: [
    "46 chromosomes, 92 chromatids",
    "23 chromosomes, 46 chromatids",
    "23 chromosomes, 23 chromatids",
    "46 chromosomes, 46 chromatids"
  ],
  correct: 1,
  explanation: "After meiosis I, each cell has 23 chromosomes (n). At metaphase II, each chromosome still consists of 2 sister chromatids (not yet separated), so: 23 chromosomes and 46 chromatids."
},
{
  id: 267,
  topic: "Summary - Integrative",
  q: "Select the correct statement:",
  options: [
    "Mitosis is the reduction division and meiosis is the equational division",
    "Mitosis occurs in gamete-forming cells and meiosis in somatic cells",
    "In mitosis, chromosome number is conserved; in meiosis, it is halved",
    "Both mitosis and meiosis involve crossing over"
  ],
  correct: 2,
  explanation: "Mitosis conserves chromosome number (equational division). Meiosis reduces chromosome number by half (reduction division). Mitosis occurs in somatic cells; meiosis in cells destined for gamete formation."
},
{
  id: 268,
  topic: "Summary - Integrative",
  q: "During meiosis, DNA replication occurs during:",
  options: [
    "Prophase I",
    "S phase before meiosis I",
    "Interkinesis (between meiosis I and II)",
    "Prophase II"
  ],
  correct: 1,
  explanation: "DNA replication occurs during S phase before meiosis I begins. There is no DNA replication during interkinesis or at any other point during meiosis."
},
{
  id: 269,
  topic: "Summary - Integrative",
  q: "Which of the following is a key difference between interphase (before mitosis) and interkinesis (between meiosis I and II)?",
  options: [
    "DNA replication occurs in interphase but NOT in interkinesis",
    "DNA replication occurs in interkinesis but NOT in interphase",
    "Both involve DNA replication",
    "Neither involves DNA replication"
  ],
  correct: 0,
  explanation: "DNA replication occurs during S phase of interphase but does NOT occur during interkinesis. This ensures that the chromosome number is reduced to haploid after meiosis II."
},
{
  id: 270,
  topic: "Meiosis II - General",
  q: "A student states: 'During metaphase II, bivalents align at the equatorial plate.' This statement is:",
  options: [
    "Correct, as meiosis II deals with bivalents",
    "Incorrect, because individual chromosomes (with two sister chromatids) align at the equator during metaphase II",
    "Correct, as homologous chromosomes are still paired in meiosis II",
    "Incorrect, because no chromosomes align at the equator in meiosis II"
  ],
  correct: 1,
  explanation: "Bivalents align during metaphase I, NOT metaphase II. During metaphase II, individual chromosomes (each consisting of two sister chromatids) align at the equator. Homologous chromosomes have already separated in meiosis I."
},
{
  id: 271,
  topic: "Summary - Integrative",
  q: "How many times does centromere splitting occur during the complete process of meiosis (meiosis I + meiosis II)?",
  options: [
    "Once — during anaphase I only",
    "Once — during anaphase II only",
    "Twice — during both anaphase I and anaphase II",
    "Never — centromeres do not split during meiosis"
  ],
  correct: 1,
  explanation: "Centromeres split only ONCE during meiosis — during anaphase II. In anaphase I, homologous chromosomes separate but centromeres do NOT split (sister chromatids remain joined)."
},
{
  id: 272,
  topic: "Summary - Integrative",
  q: "Consider the following comprehensive comparison:<br><br>Feature | Mitosis | Meiosis<br>(I) Number of divisions | 1 | 2<br>(II) Daughter cells | 2 diploid | 4 haploid<br>(III) Crossing over | Absent | Present<br>(IV) Synapsis | Present | Absent<br><br>Which row is INCORRECT?",
  options: [
    "Row I",
    "Row II",
    "Row III",
    "Row IV"
  ],
  correct: 3,
  explanation: "Row IV is incorrect — it is reversed. Synapsis is ABSENT in mitosis and PRESENT in meiosis (during zygotene of prophase I). Rows I, II, and III are all correct."
},
{
  id: 273,
  topic: "Meiosis II - Prophase II",
  q: "The nuclear membrane disappears by the end of:",
  options: [
    "Prophase I only",
    "Prophase II only",
    "Both prophase I (diakinesis) and prophase II",
    "Only during metaphase II"
  ],
  correct: 2,
  explanation: "Nuclear membrane disappears at the end of diakinesis (prophase I) and also by the end of prophase II, as stated by NCERT: 'The nuclear membrane disappears by the end of prophase II.'"
},
{
  id: 274,
  topic: "Summary - Integrative",
  q: "A cell with 2n = 20 undergoes meiosis. Fill in the correct values:<br><br>After S phase: _____ chromosomes, _____ DNA content<br>After Meiosis I: _____ chromosomes<br>After Meiosis II: _____ chromosomes",
  options: [
    "20 chromosomes, 4C; 10 chromosomes; 10 chromosomes",
    "40 chromosomes, 4C; 20 chromosomes; 10 chromosomes",
    "20 chromosomes, 2C; 20 chromosomes; 10 chromosomes",
    "20 chromosomes, 4C; 20 chromosomes; 10 chromosomes"
  ],
  correct: 0,
  explanation: "After S phase: 20 chromosomes (unchanged), 4C DNA. After meiosis I: 10 chromosomes (halved). After meiosis II: 10 chromosomes (maintained). DNA content: 4C → 2C (after MI) → C (after MII)."
},
{
  id: 275,
  topic: "Significance of Meiosis",
  q: "Which of the following is <b>NOT</b> a significance of meiosis?",
  options: [
    "Conservation of chromosome number across generations",
    "Genetic variability in the population",
    "Production of identical daughter cells for growth",
    "Providing raw material for evolution through variations"
  ],
  correct: 2,
  explanation: "Production of identical daughter cells for growth is a significance of MITOSIS, not meiosis. Meiosis produces genetically variable haploid cells."
},
{
  id: 276,
  topic: "Summary - Integrative",
  q: "During which phase of meiosis I do homologous chromosomes pair to form bivalents and undergo crossing over?",
  options: [
    "Metaphase I",
    "Anaphase I",
    "Prophase I",
    "Telophase I"
  ],
  correct: 2,
  explanation: "NCERT summary states: 'In the first meiotic division the homologous chromosomes pair to form bivalents, and undergo crossing over' — these events occur during prophase I."
},
{
  id: 277,
  topic: "Meiosis II - Anaphase II",
  q: "The mechanism by which sister chromatids move toward opposite poles during anaphase II is:",
  options: [
    "Elongation of spindle fibres",
    "Shortening of microtubules attached to kinetochores",
    "Dissolution of centromeres",
    "Action of recombinase enzyme"
  ],
  correct: 1,
  explanation: "NCERT states chromatids move 'toward opposite poles of the cell by shortening of microtubules attached to kinetochores.'"
},
{
  id: 278,
  topic: "Summary - Integrative",
  q: "<b>Assertion (A):</b> Meiosis results in reduction of chromosome number by half, yet conserves the species-specific chromosome number across generations.<br><b>Reason (R):</b> Fertilisation restores the diploid chromosome number that was halved by meiosis.",
  options: [
    "Both A and R are true and R is the correct explanation of A",
    "Both A and R are true but R is not the correct explanation of A",
    "A is true but R is false",
    "A is false but R is true"
  ],
  correct: 0,
  explanation: "Both are true. The paradox described in NCERT is resolved by R — meiosis halves the number, but fertilisation restores it, thus conserving species-specific chromosome number across generations."
},
{
  id: 279,
  topic: "Meiosis II - General",
  q: "If a cell undergoing meiosis has 10 bivalents during metaphase I, how many chromosomes will each cell have at the end of meiosis II?",
  options: [
    "20",
    "10",
    "5",
    "40"
  ],
  correct: 1,
  explanation: "10 bivalents means 2n = 20. After meiosis I: n = 10 chromosomes per cell. After meiosis II: still 10 chromosomes per cell (equational division). Four cells, each with 10 chromosomes."
},
{
  id: 280,
  topic: "Summary - Integrative",
  q: "Which of the following is the correct complete sequence of a meiotic division?",
  options: [
    "Prophase I → Metaphase I → Anaphase I → Telophase I → Interkinesis → Prophase II → Metaphase II → Anaphase II → Telophase II",
    "Prophase I → Metaphase I → Anaphase I → Interkinesis → Prophase II → Metaphase II → Anaphase II → Telophase II",
    "Prophase I → Anaphase I → Metaphase I → Telophase I → Prophase II → Anaphase II → Metaphase II → Telophase II",
    "Prophase I → Metaphase I → Anaphase I → Telophase I → S phase → Prophase II → Metaphase II → Anaphase II → Telophase II"
  ],
  correct: 0,
  explanation: "The correct sequence includes all stages of meiosis I, followed by interkinesis (NO DNA replication), then all stages of meiosis II. Option D is wrong because there is no S phase between the two divisions."
},
{
  id: 281,
  topic: "Summary - Integrative",
  q: "Select the option that has all <b>correct</b> statements:<br>(a) Mitosis produces genetically identical diploid cells<br>(b) Meiosis produces genetically variable haploid cells<br>(c) Crossing over occurs in both mitosis and meiosis<br>(d) Meiosis involves only one cycle of DNA replication<br>(e) Mitosis is called reduction division",
  options: [
    "(a), (b) and (d) only",
    "(a), (b), (c) and (d)",
    "(a), (c), (d) and (e)",
    "All are correct"
  ],
  correct: 0,
  explanation: "Statements (a), (b), and (d) are correct. (c) is wrong — crossing over occurs only in meiosis. (e) is wrong — mitosis is equational division; meiosis is the reduction division."
},
{
  id: 282,
  topic: "Meiosis II - General",
  q: "Which of the following structures is NOT formed during meiosis II?",
  options: [
    "Spindle apparatus",
    "Metaphase plate",
    "Synaptonemal complex",
    "Nuclear envelope (at telophase II)"
  ],
  correct: 2,
  explanation: "Synaptonemal complex forms during ZYGOTENE of prophase I only, facilitating synapsis of homologous chromosomes. It does NOT form during meiosis II because there are no homologous chromosomes to pair."
}
];
