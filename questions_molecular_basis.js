var allQuestions = [
    // ===== SET 1: INTRODUCTION (Q1-Q15) =====
    { id: 1, topic: "Introduction", q: "Consider the following statements regarding nucleic acids:<br>(i) DNA acts as genetic material in all living organisms.<br>(ii) RNA acts as genetic material in some viruses.<br>(iii) RNA can function as a catalytic molecule.<br>(iv) RNA always functions only as a messenger molecule.<br><br>Which of the above statements are <b>correct</b>?", options: ["(i) and (ii) only", "(ii) and (iii) only", "(i), (ii) and (iii)", "(ii), (iii) and (iv)"], correct: 1, explanation: "DNA acts as genetic material in most organisms, not all (some viruses use RNA) — so (i) is incorrect. Statement (iv) is wrong because RNA also acts as adapter, structural, and catalytic molecule. Statements (ii) and (iii) are correct per NCERT." },

    { id: 2, topic: "Introduction", q: "Which of the following roles is <b>NOT</b> attributed to RNA?", options: ["Genetic material in some viruses", "Adapter molecule", "Catalytic molecule", "Genetic material in majority of organisms"], correct: 3, explanation: "DNA is the genetic material in the majority of organisms. RNA serves as genetic material only in some viruses. RNA also functions as messenger, adapter, structural, and catalytic molecule." },

    { id: 3, topic: "Introduction", q: "<b>Assertion (A):</b> RNA is multifunctional compared to DNA.<br><br><b>Reason (R):</b> RNA can act as genetic material, messenger, adapter, structural, and catalytic molecule.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "RNA performs multiple functions — genetic (in some viruses), messenger, adapter (tRNA), structural (rRNA), and catalytic (ribozymes). This diversity makes it multifunctional compared to DNA. R correctly explains A." },

    { id: 4, topic: "Introduction", q: "The process of formation of RNA from DNA is called:", options: ["Translation", "Replication", "Transcription", "Reverse transcription"], correct: 2, explanation: "Transcription is RNA synthesis from DNA template. Translation is protein synthesis. Replication is DNA→DNA. Reverse transcription is RNA→DNA." },

    { id: 5, topic: "Introduction", q: "Which of the following statements is <b>incorrect</b>?", options: ["DNA is the genetic material in most organisms", "RNA acts as a messenger in most organisms", "RNA can act as a catalytic molecule", "DNA acts as genetic material in all viruses"], correct: 3, explanation: "Not all viruses have DNA as genetic material. Some viruses (e.g., TMV, retroviruses) use RNA. Options A, B, and C are correct." },

    { id: 6, topic: "Introduction", q: "The complete nucleotide sequence of the human genome has ushered in a new era of:", options: ["Proteomics", "Genomics", "Metabolomics", "Transcriptomics"], correct: 1, explanation: "NCERT states the determination of the complete nucleotide sequence of the human genome set in a new era of genomics." },

    { id: 7, topic: "Introduction", q: "Consider the following statements:<br>(i) Mendel knew that 'factors' were made of DNA.<br>(ii) DNA is a polymer of deoxyribonucleotides.<br>(iii) RNA never acts as genetic material.<br>(iv) Nucleic acids are polymers of nucleotides.<br><br>How many of the above statements are <b>correct</b>?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(i) is incorrect — Mendel didn't know factors were DNA. (iii) is incorrect — RNA acts as genetic material in some viruses. Only (ii) and (iv) are correct = 2 statements." },

    { id: 8, topic: "Introduction", q: "Which one of the following is <b>not</b> a function of RNA?", options: ["Acts as adapter molecule", "Acts as structural molecule", "Stores hereditary information in majority of organisms", "Acts as catalytic molecule"], correct: 2, explanation: "DNA, not RNA, stores hereditary information in the majority of organisms." },

    { id: 9, topic: "Introduction", q: "<b>Assertion (A):</b> At the time of Mendel, the chemical nature of 'factors' was well established.<br><br><b>Reason (R):</b> It took over a hundred years after Mendel to establish DNA as the genetic material.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is false but R is true", "Both A and R are false"], correct: 2, explanation: "Assertion is false — at Mendel's time, the nature of factors was NOT clear. Reason is true." },

    { id: 10, topic: "Introduction", q: "The two types of nucleic acids found in living systems are:", options: ["DNA and mRNA", "DNA and tRNA", "DNA and RNA", "rRNA and tRNA"], correct: 2, explanation: "The two types are DNA (deoxyribonucleic acid) and RNA (ribonucleic acid). mRNA, tRNA, rRNA are subtypes of RNA." },

    { id: 11, topic: "Introduction", q: "Which of the following correctly represents the hierarchy of genetic information flow?", options: ["DNA → RNA → Protein → Replication", "DNA → Replication → Transcription → Translation", "Replication (DNA) → Transcription (RNA) → Translation (Protein)", "Translation → Transcription → Replication"], correct: 2, explanation: "Central dogma: DNA replicates → DNA makes RNA (transcription) → RNA makes protein (translation)." },

    { id: 12, topic: "Introduction", q: "RNA acting as a catalytic molecule is called:", options: ["Ribosome", "Ribozyme", "Ribonuclease", "Ribonucleoside"], correct: 1, explanation: "Catalytic RNA molecules are called ribozymes. Ribosome is an organelle, ribonuclease is a protein enzyme." },

    { id: 13, topic: "Introduction", q: "Select the <b>incorrect</b> match:", options: ["DNA – Genetic material in most organisms", "RNA – Genetic material in some viruses", "RNA – Only messenger function", "RNA – Catalytic molecule"], correct: 2, explanation: "RNA does NOT function only as a messenger. It also functions as adapter, structural, catalytic, and genetic material in some viruses." },

    { id: 14, topic: "Introduction", q: "Which of the following correctly describes the scope of genomics?", options: ["Study of protein structure and function", "Study of complete nucleotide sequences of genomes", "Study of metabolic pathways only", "Study of RNA transcription only"], correct: 1, explanation: "Genomics deals with the study of complete nucleotide sequences of genomes and their analysis." },

    { id: 15, topic: "Introduction", q: "Statement 1: DNA is the genetic material in all organisms without exception.<br>Statement 2: RNA functions as adapter, structural, catalytic and messenger molecule.", options: ["Only Statement 1 is correct", "Only Statement 2 is correct", "Both statements are correct", "Both statements are incorrect"], correct: 1, explanation: "Statement 1 is incorrect — DNA is genetic material in most organisms, but in some viruses, RNA is. Statement 2 is correct." },

    // ===== SET 2: THE DNA (Q16-Q28) =====
    { id: 16, topic: "The DNA", q: "The number of nucleotides in bacteriophage φ×174 is:", options: ["48502 bp", "5386 nucleotides", "4.6 × 10⁶ bp", "3.3 × 10⁹ bp"], correct: 1, explanation: "φ×174 has 5386 nucleotides (not base pairs, as it is single-stranded DNA phage)." },

    { id: 17, topic: "The DNA", q: "The haploid content of human DNA is approximately:", options: ["48502 bp", "4.6 × 10⁶ bp", "3.3 × 10⁹ bp", "5386 nucleotides"], correct: 2, explanation: "Haploid content of human DNA is 3.3 × 10⁹ bp." },

    { id: 18, topic: "The DNA", q: "The genome size of <i>Escherichia coli</i> is:", options: ["5386 nucleotides", "48502 bp", "4.6 × 10⁶ bp", "3.3 × 10⁹ bp"], correct: 2, explanation: "E. coli genome = 4.6 × 10⁶ bp." },

    { id: 19, topic: "The DNA", q: "<b>Assertion (A):</b> The genome size of φ×174 is expressed in nucleotides and not in base pairs.<br><br><b>Reason (R):</b> φ×174 has single-stranded DNA as its genetic material.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "φ×174 is single-stranded, so genome is expressed in nucleotides, not base pairs. R correctly explains A." },

    { id: 20, topic: "The DNA", q: "The length of DNA is usually defined as:", options: ["Number of amino acids", "Number of genes present", "Number of nucleotides or base pairs", "Molecular weight in Daltons"], correct: 2, explanation: "NCERT: the length of DNA is defined as the number of nucleotides or base pairs present in it." },

    { id: 21, topic: "The DNA", q: "Arrange in <b>increasing order</b> of genome size:<br>(i) φ×174 (ii) Human haploid (iii) E. coli (iv) Bacteriophage lambda", options: ["(i) < (iv) < (iii) < (ii)", "(i) < (iii) < (iv) < (ii)", "(iv) < (i) < (iii) < (ii)", "(ii) < (iii) < (iv) < (i)"], correct: 0, explanation: "φ×174 (5386 nt) < Lambda (48502 bp) < E. coli (4.6×10⁶ bp) < Human (3.3×10⁹ bp)." },

    { id: 22, topic: "The DNA", q: "Which organism has the <b>smallest</b> genome among the options?", options: ["E. coli", "Bacteriophage lambda", "Bacteriophage φ×174", "Human"], correct: 2, explanation: "φ×174 has only 5386 nucleotides — smallest among listed organisms." },

    { id: 23, topic: "The DNA", q: "Consider the following statements:<br>(i) DNA is a long polymer of deoxyribonucleotides.<br>(ii) The number of base pairs is characteristic of an organism.<br>(iii) Bacteriophage lambda has 5386 base pairs.<br>(iv) Human haploid DNA has 3.3 × 10⁹ bp.<br><br>Which statements are <b>correct</b>?", options: ["(i), (ii) and (iii)", "(i), (ii) and (iv)", "(ii), (iii) and (iv)", "(i), (iii) and (iv)"], correct: 1, explanation: "(iii) is incorrect — Lambda has 48502 bp, not 5386. φ×174 has 5386 nucleotides." },

    { id: 24, topic: "The DNA", q: "The genome of bacteriophage lambda consists of:", options: ["5386 nucleotides", "48502 base pairs", "4.6 × 10⁶ base pairs", "3.3 × 10⁹ base pairs"], correct: 1, explanation: "Bacteriophage lambda has 48502 bp (double-stranded DNA)." },

    { id: 25, topic: "The DNA", q: "Statement 1: A base pair refers to a pair of complementary nucleotides in double-stranded DNA.<br>Statement 2: The genome size of all organisms is expressed in base pairs.", options: ["Both statements are correct", "Only Statement 1 is correct", "Only Statement 2 is correct", "Both statements are incorrect"], correct: 1, explanation: "Statement 2 is incorrect — single-stranded genomes (like φ×174) are expressed in nucleotides, not base pairs." },

    { id: 26, topic: "The DNA", q: "The genome of E. coli is approximately how many times larger than bacteriophage lambda?", options: ["~10 times", "~95 times", "~700 times", "~1000 times"], correct: 1, explanation: "4.6×10⁶ / 48502 ≈ 95 times." },

    { id: 27, topic: "The DNA", q: "Which is a <b>correct</b> pair?", options: ["φ×174 – 48502 bp", "Lambda phage – 5386 nucleotides", "E. coli – 3.3 × 10⁹ bp", "Human (haploid) – 3.3 × 10⁹ bp"], correct: 3, explanation: "Human haploid DNA = 3.3 × 10⁹ bp is correct. Others are mismatched." },

    { id: 28, topic: "The DNA", q: "<b>Assertion (A):</b> The length of DNA is a characteristic feature of an organism.<br><br><b>Reason (R):</b> Different organisms have different numbers of nucleotides/base pairs.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "The number of nucleotides/base pairs is characteristic. Different organisms have different genome sizes. R explains A." },

    // ===== SET 3: STRUCTURE OF POLYNUCLEOTIDE CHAIN (Q29-Q58) =====
    { id: 29, topic: "Polynucleotide Structure", q: "A nucleotide is formed by the linkage of:", options: ["Nitrogenous base + Pentose sugar", "Nitrogenous base + Phosphate group", "Nitrogenous base + Pentose sugar + Phosphate group", "Pentose sugar + Phosphate group"], correct: 2, explanation: "A nucleotide has three components — nitrogenous base, pentose sugar, and phosphate group." },

    { id: 30, topic: "Polynucleotide Structure", q: "Which of the following is a <b>purine</b> base?", options: ["Cytosine", "Thymine", "Uracil", "Guanine"], correct: 3, explanation: "Purines = Adenine and Guanine (double ring). Pyrimidines = Cytosine, Thymine, and Uracil (single ring)." },

    { id: 31, topic: "Polynucleotide Structure", q: "Which nitrogenous base is common to both DNA and RNA?", options: ["Thymine", "Uracil", "Cytosine", "Both Adenine and Thymine"], correct: 2, explanation: "NCERT explicitly states 'Cytosine is common for both DNA and RNA'. Thymine is only in DNA, Uracil only in RNA." },

    { id: 32, topic: "Polynucleotide Structure", q: "Thymine is also chemically known as:", options: ["5-methyl cytosine", "5-methyl uracil", "2-amino purine", "6-amino pyrimidine"], correct: 1, explanation: "Thymine = 5-methyl uracil. This is directly stated in NCERT." },

    { id: 33, topic: "Polynucleotide Structure", q: "The nitrogenous base is linked to the pentose sugar through:", options: ["Phosphoester linkage at 5'C", "N-glycosidic linkage at 1'C", "Phosphodiester linkage at 3'C", "Hydrogen bonding at 2'C"], correct: 1, explanation: "The base is linked to OH of 1'C of pentose sugar through an N-glycosidic linkage to form a nucleoside." },

    { id: 34, topic: "Polynucleotide Structure", q: "A nucleoside is formed by:", options: ["Base + Sugar + Phosphate", "Sugar + Phosphate", "Base + Sugar", "Base + Phosphate"], correct: 2, explanation: "Nucleoside = Nitrogenous base + Pentose sugar (linked by N-glycosidic bond). Nucleotide = Nucleoside + Phosphate." },

    { id: 35, topic: "Polynucleotide Structure", q: "The phosphate group is linked to the nucleoside at:", options: ["1'C through glycosidic linkage", "3'C through phosphodiester linkage", "5'C through phosphoester linkage", "2'C through ester linkage"], correct: 2, explanation: "Phosphate is linked to OH of 5'C of nucleoside through a phosphoester linkage to form a nucleotide." },

    { id: 36, topic: "Polynucleotide Structure", q: "Two nucleotides in a polynucleotide chain are linked through:", options: ["N-glycosidic linkage", "Phosphoester linkage", "3'–5' phosphodiester linkage", "Hydrogen bonding"], correct: 2, explanation: "Two nucleotides are linked through 3'–5' phosphodiester linkage." },

    { id: 37, topic: "Polynucleotide Structure", q: "Consider the following linkages:<br>(i) N-glycosidic – base and sugar<br>(ii) Phosphoester – phosphate and 5'C<br>(iii) Phosphodiester – between two nucleotides<br>(iv) Hydrogen bonds – within the same strand<br><br>Which are <b>correct</b>?", options: ["(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(ii), (iii) and (iv) only", "(i) and (iii) only"], correct: 0, explanation: "(iv) is incorrect — H-bonds are between two complementary strands, not within the same strand." },

    { id: 38, topic: "Polynucleotide Structure", q: "The backbone of a polynucleotide chain is formed by:", options: ["Nitrogenous bases and phosphate groups", "Sugar and phosphate groups", "Nitrogenous bases and sugar", "Only phosphate groups"], correct: 1, explanation: "NCERT: 'The backbone is formed due to sugar and phosphates.' Bases project from the backbone." },

    { id: 39, topic: "Polynucleotide Structure", q: "The free phosphate group at 5'-end and free OH at 3'-end indicate:", options: ["No directionality", "Polarity (5'→3')", "Circular chain", "Branched chain"], correct: 1, explanation: "A polynucleotide chain has polarity — 5'-end has free phosphate, 3'-end has free OH group." },

    { id: 40, topic: "Polynucleotide Structure", q: "Which is the correct nucleoside of thymine in DNA?", options: ["Thymidine", "Deoxythymidine", "Uridine", "Deoxyuridine"], correct: 1, explanation: "NCERT lists deoxythymidine as the nucleoside of thymine in DNA." },

    { id: 41, topic: "Polynucleotide Structure", q: "What distinguishes RNA from DNA at the sugar level?", options: ["RNA has deoxyribose sugar", "RNA has an additional –OH group at 2' position of ribose", "RNA has an additional –OH group at 3' position", "RNA has a –CH₃ group at 2' position"], correct: 1, explanation: "NCERT: 'In RNA, every nucleotide has an additional –OH group at 2'-position in the ribose.'" },

    { id: 42, topic: "Polynucleotide Structure", q: "<b>Assertion (A):</b> Uracil is found in RNA at the place of thymine.<br><br><b>Reason (R):</b> Thymine is chemically known as 5-methyl uracil.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 1, explanation: "Both are true. However, the fact that thymine is 5-methyl uracil doesn't explain WHY uracil replaces thymine in RNA." },

    { id: 43, topic: "Polynucleotide Structure", q: "Which is <b>incorrect</b> regarding pyrimidine bases?", options: ["Cytosine is found in both DNA and RNA", "Thymine is found only in DNA", "Uracil is found only in RNA", "Guanine is a pyrimidine base"], correct: 3, explanation: "Guanine is a PURINE, not pyrimidine. Pyrimidines = Cytosine, Thymine, Uracil." },

    { id: 44, topic: "Polynucleotide Structure", q: "The nitrogenous bases in a polynucleotide chain are:", options: ["Part of the backbone", "Projecting from the backbone", "Linked to the phosphate group", "Between two sugar molecules"], correct: 1, explanation: "NCERT: 'The nitrogenous bases linked to sugar moiety project from the backbone.'" },

    { id: 45, topic: "Polynucleotide Structure", q: "Match: (i) Adenosine (ii) Deoxyadenosine (iii) Deoxyadenylic acid with (P) Nucleotide (Q) RNA nucleoside (R) DNA nucleoside", options: ["(i)–Q, (ii)–R, (iii)–P", "(i)–R, (ii)–Q, (iii)–P", "(i)–P, (ii)–Q, (iii)–R", "(i)–Q, (ii)–P, (iii)–R"], correct: 0, explanation: "Adenosine = RNA nucleoside (Q). Deoxyadenosine = DNA nucleoside (R). Deoxyadenylic acid = nucleotide (P)." },

    { id: 46, topic: "Polynucleotide Structure", q: "A dinucleotide is formed by linking two nucleotides through:", options: ["N-glycosidic bond", "Peptide bond", "3'–5' phosphodiester bond", "Hydrogen bond"], correct: 2, explanation: "NCERT: 'Two nucleotides are linked through 3'–5' phosphodiester linkage to form a dinucleotide.'" },

    { id: 47, topic: "Polynucleotide Structure", q: "About the 5'-end of a polynucleotide chain:<br>(i) Has a free phosphate moiety<br>(ii) Has a free –OH group of sugar<br>(iii) Is at the 5' carbon of sugar<br>(iv) New nucleotides are added at this end<br><br>How many are correct?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(i) and (iii) are correct. (ii) is wrong — free –OH is at 3'-end. (iv) is wrong — nucleotides are added at 3'-end." },

    { id: 48, topic: "Polynucleotide Structure", q: "Correct order of components from inside to outside in a DNA strand:", options: ["Phosphate → Sugar → Base", "Base → Sugar → Phosphate", "Sugar → Base → Phosphate", "Base → Phosphate → Sugar"], correct: 1, explanation: "Bases are inside (projecting inward), attached to sugar, connected to phosphate on the outside." },

    { id: 49, topic: "Polynucleotide Structure", q: "Statement 1: The pentose sugar in RNA is ribose.<br>Statement 2: DNA lacks an –OH group at 2' position compared to RNA.", options: ["Only Statement 1 is correct", "Only Statement 2 is correct", "Both statements are correct", "Both statements are incorrect"], correct: 2, explanation: "RNA has ribose (with 2'-OH), DNA has deoxyribose (lacking 2'-OH). Both are correct." },

    { id: 50, topic: "Polynucleotide Structure", q: "What differentiates a nucleoside from a nucleotide?", options: ["Nucleoside has phosphate; nucleotide does not", "Nucleotide has phosphate linked at 5'C; nucleoside lacks it", "Nucleoside has phosphodiester bond; nucleotide has glycosidic bond", "No difference"], correct: 1, explanation: "Nucleoside = base + sugar. Nucleotide = nucleoside + phosphate (at 5'C through phosphoester bond)." },

    { id: 51, topic: "Polynucleotide Structure", q: "Which carbon atoms of sugar are involved in phosphodiester linkage?", options: ["1'C and 4'C", "2'C and 5'C", "3'C and 5'C", "1'C and 5'C"], correct: 2, explanation: "The 3'–5' phosphodiester linkage involves 3'C of one sugar and 5'C of the adjacent sugar." },

    { id: 52, topic: "Polynucleotide Structure", q: "<b>Assertion (A):</b> RNA is less stable than DNA.<br><br><b>Reason (R):</b> RNA has an additional –OH group at 2' position making it more reactive.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "The 2'-OH in RNA makes it susceptible to hydrolysis and more reactive. R correctly explains A." },

    { id: 53, topic: "Polynucleotide Structure", q: "How many types of nitrogenous bases are present in DNA?", options: ["3", "4", "5", "2"], correct: 1, explanation: "DNA has 4 bases: Adenine, Guanine (purines) and Cytosine, Thymine (pyrimidines)." },

    { id: 54, topic: "Polynucleotide Structure", q: "Correct combination of pyrimidine bases in RNA:", options: ["Cytosine and Thymine", "Cytosine and Uracil", "Uracil and Thymine", "Adenine and Guanine"], correct: 1, explanation: "RNA contains Cytosine and Uracil as pyrimidines. Thymine is in DNA, not RNA." },

    { id: 55, topic: "Polynucleotide Structure", q: "Which nucleoside belongs to DNA?", options: ["Adenosine", "Cytidine", "Uridine", "Deoxycytidine"], correct: 3, explanation: "DNA nucleosides have 'deoxy-' prefix. Adenosine, cytidine, uridine are RNA nucleosides." },

    { id: 56, topic: "Polynucleotide Structure", q: "About a polynucleotide chain:<br>(i) Sugar-phosphate forms backbone<br>(ii) Bases project from backbone<br>(iii) Backbone = bases and sugars<br>(iv) Phosphodiester bonds link nucleotides<br><br>Which are correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii) only", "(ii), (iii) and (iv) only", "All of the above"], correct: 0, explanation: "(iii) is incorrect — backbone = sugars + phosphates, NOT bases." },

    { id: 57, topic: "Polynucleotide Structure", q: "Correct sequence for polynucleotide formation:", options: ["Base + Sugar → Nucleotide → Nucleoside → Polynucleotide", "Base + Sugar → Nucleoside + Phosphate → Nucleotide → Polynucleotide", "Phosphate + Sugar → Nucleoside + Base → Nucleotide → Polynucleotide", "Base + Phosphate → Nucleoside + Sugar → Nucleotide → Polynucleotide"], correct: 1, explanation: "Base + Sugar → Nucleoside; + Phosphate → Nucleotide; Nucleotides linked → Polynucleotide." },

    { id: 58, topic: "Polynucleotide Structure", q: "The 3'-end of a polynucleotide chain has:", options: ["Free phosphate group at 5'C", "Free –OH group at 3'C of sugar", "A nitrogenous base", "A capped methylated guanine"], correct: 1, explanation: "NCERT: 'the sugar has a free OH of 3'C group which is referred to as 3'-end.'" },

    // ===== SET 4: DNA DOUBLE HELIX (Q59-Q88) =====
    { id: 59, topic: "DNA Double Helix", q: "DNA was first identified as an acidic substance in the nucleus by:", options: ["Watson and Crick", "Erwin Chargaff", "Friedrich Meischer", "Rosalind Franklin"], correct: 2, explanation: "Friedrich Meischer (1869) first identified DNA as an acidic substance and named it 'Nuclein'." },

    { id: 60, topic: "DNA Double Helix", q: "The double helix model of DNA was proposed based on:", options: ["Chargaff's rule alone", "X-ray diffraction data of Meischer", "X-ray diffraction data of Maurice Wilkins and Rosalind Franklin", "Electron microscopic studies by Chargaff"], correct: 2, explanation: "Watson and Crick (1953) used X-ray diffraction data from Wilkins and Franklin, combined with Chargaff's rules." },

    { id: 61, topic: "DNA Double Helix", q: "Chargaff's rule states that for double-stranded DNA:", options: ["A + G = T + C and A/T = G/C = 1", "A + T = G + C always", "A = G and T = C", "The ratio of purines to pyrimidines varies"], correct: 0, explanation: "A = T and G = C, so A/T = 1 and G/C = 1. Also total purines (A+G) = total pyrimidines (T+C)." },

    { id: 62, topic: "DNA Double Helix", q: "Consider:<br>(i) Two strands have parallel polarity<br>(ii) Backbone = sugar-phosphate<br>(iii) Bases project inside<br>(iv) A pairs with T through 3 H-bonds<br><br>How many are <b>correct</b>?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(i) Wrong — anti-parallel. (iv) Wrong — A=T has 2 H-bonds. Only (ii) and (iii) are correct = 2." },

    { id: 63, topic: "DNA Double Helix", q: "Number of hydrogen bonds between Guanine and Cytosine:", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "G≡C = 3 hydrogen bonds; A=T = 2 hydrogen bonds." },

    { id: 64, topic: "DNA Double Helix", q: "<b>Assertion (A):</b> Distance between two polynucleotide chains remains approximately uniform.<br><br><b>Reason (R):</b> A purine always pairs with a pyrimidine.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "Purine (larger) + pyrimidine (smaller) = approximately same combined width for each base pair." },

    { id: 65, topic: "DNA Double Helix", q: "The pitch of a DNA double helix is:", options: ["0.34 nm", "2.0 nm", "3.4 nm", "34 nm"], correct: 2, explanation: "Pitch (one complete turn) = 3.4 nm, with ~10 bp per turn. Distance between bp = 0.34 nm." },

    { id: 66, topic: "DNA Double Helix", q: "If pitch is 3.4 nm and 10 bp per turn, distance between consecutive base pairs is:", options: ["0.034 nm", "0.34 nm", "3.4 nm", "34 nm"], correct: 1, explanation: "3.4 nm / 10 = 0.34 nm." },

    { id: 67, topic: "DNA Double Helix", q: "The two strands of DNA double helix are:", options: ["Parallel and identical", "Anti-parallel and complementary", "Parallel and complementary", "Anti-parallel and identical"], correct: 1, explanation: "DNA strands are anti-parallel (5'→3' and 3'→5') and complementary (A-T, G-C)." },

    { id: 68, topic: "DNA Double Helix", q: "Which contributes to helix stability IN ADDITION TO hydrogen bonding?", options: ["Ionic bonding between bases", "Stacking of base pairs over each other", "Covalent bonding between strands", "Van der Waals forces between sugar and phosphate"], correct: 1, explanation: "NCERT: 'The plane of one base pair stacks over the other, conferring stability in addition to H-bonds.'" },

    { id: 69, topic: "DNA Double Helix", q: "If a double-stranded DNA has 20% Adenine, the percentage of Guanine is:", options: ["20%", "30%", "40%", "10%"], correct: 1, explanation: "A = T = 20%. A+T = 40%. G+C = 60%. G = C = 30%." },

    { id: 70, topic: "DNA Double Helix", q: "A DNA molecule has 1000 base pairs. Number of complete turns:", options: ["10", "100", "1000", "340"], correct: 1, explanation: "1000 / 10 = 100 turns." },

    { id: 71, topic: "DNA Double Helix", q: "Total length of DNA with 1000 bp:", options: ["34 nm", "340 nm", "3400 nm", "0.34 nm"], correct: 1, explanation: "1000 × 0.34 nm = 340 nm." },

    { id: 72, topic: "DNA Double Helix", q: "Central Dogma of molecular biology (Francis Crick):", options: ["DNA → Protein → RNA", "RNA → DNA → Protein", "DNA → RNA → Protein", "Protein → RNA → DNA"], correct: 2, explanation: "DNA → RNA (transcription) → Protein (translation)." },

    { id: 73, topic: "DNA Double Helix", q: "The process of RNA to DNA in some viruses is called:", options: ["Transcription", "Translation", "Reverse transcription", "Transduction"], correct: 2, explanation: "Reverse transcription = RNA → DNA, catalyzed by reverse transcriptase (e.g., in retroviruses)." },

    { id: 74, topic: "DNA Double Helix", q: "Which is <b>incorrect</b> about Watson-Crick DNA model?", options: ["Double helix with two polynucleotide chains", "Anti-parallel polarity", "Left-handed helix", "Base pairing follows Chargaff's rule"], correct: 2, explanation: "Watson-Crick DNA is RIGHT-handed, not left-handed." },

    { id: 75, topic: "DNA Double Helix", q: "Statement 1: If one strand's sequence is known, the other can be predicted.<br>Statement 2: The two strands are complementary due to specific base pairing.", options: ["Both correct, S2 explains S1", "Both correct, S2 doesn't explain S1", "S1 correct, S2 incorrect", "Both incorrect"], correct: 0, explanation: "Complementary base pairing means knowing one strand allows prediction of the other." },

    { id: 76, topic: "DNA Double Helix", q: "If DNA has 500 Adenine bases, H-bonds between A and T:", options: ["500", "1000", "1500", "2000"], correct: 1, explanation: "A=T forms 2 H-bonds. 500 × 2 = 1000." },

    { id: 77, topic: "DNA Double Helix", q: "A DNA has 200 Adenine and 300 Guanine. Total hydrogen bonds:", options: ["1000", "1300", "1500", "500"], correct: 1, explanation: "A-T: 200 × 2 = 400. G-C: 300 × 3 = 900. Total = 1300." },

    { id: 78, topic: "DNA Double Helix", q: "<b>Assertion (A):</b> DNA with higher G-C content is more thermally stable.<br><br><b>Reason (R):</b> G-C has 3 H-bonds vs 2 in A-T.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "More G-C = more H-bonds per bp = more energy to denature = higher thermal stability." },

    { id: 79, topic: "DNA Double Helix", q: "X-ray diffraction data crucial for DNA structure was produced by:", options: ["Watson and Crick", "Erwin Chargaff", "Friedrich Meischer", "Maurice Wilkins and Rosalind Franklin"], correct: 3, explanation: "Wilkins and Franklin produced the X-ray diffraction data." },

    { id: 80, topic: "DNA Double Helix", q: "Anti-parallel polarity means:", options: ["Both strands run 5'→3'", "Both strands run 3'→5'", "One strand 5'→3' and other 3'→5'", "Polarity is absent"], correct: 2, explanation: "Anti-parallel = one strand 5'→3', other 3'→5'." },

    { id: 81, topic: "DNA Double Helix", q: "If one strand is 5'-ATGCCA-3', the complementary strand:", options: ["5'-ATGCCA-3'", "3'-TACGGT-5'", "5'-TACCGT-3'", "5'-UACGGU-3'"], correct: 1, explanation: "Complementary: A-T, T-A, G-C, C-G, C-G, A-T → 3'-TACGGT-5'. D has uracil (RNA)." },

    { id: 82, topic: "DNA Double Helix", q: "If A+T/G+C = 0.5, which is true?", options: ["More A-T than G-C", "More G-C than A-T", "A-T and G-C are equal", "DNA is single-stranded"], correct: 1, explanation: "If (A+T)/(G+C) = 0.5, then G+C is twice A+T content." },

    { id: 83, topic: "DNA Double Helix", q: "Friedrich Meischer named the acidic substance as:", options: ["Chromatin", "Nuclein", "Nucleosome", "Nucleoid"], correct: 1, explanation: "Meischer (1869) named it 'Nuclein'." },

    { id: 84, topic: "DNA Double Helix", q: "A DNA has 1500 bp. Number of turns and total length:", options: ["150 turns; 510 nm", "150 turns; 5100 nm", "1500 turns; 510 nm", "15 turns; 51 nm"], correct: 0, explanation: "Turns = 1500/10 = 150. Length = 1500 × 0.34 = 510 nm." },

    { id: 85, topic: "DNA Double Helix", q: "Daughter DNA molecules after replication are:", options: ["Different from parental DNA", "Identical to parental DNA", "Contain only new strands", "Have no complementary pairing"], correct: 1, explanation: "Each parental strand acts as template, producing daughter DNA identical to parental DNA." },

    { id: 86, topic: "DNA Double Helix", q: "Which was NOT used by Watson and Crick?", options: ["X-ray data of Wilkins and Franklin", "Chargaff's rules", "Meischer's identification of nuclein", "Both A and B were used"], correct: 2, explanation: "Meischer's work (1869) was historical but not directly used in the 1953 model." },

    // Continuing from Q87...
    { id: 87, topic: "DNA Double Helix", q: "If Adenine = 30% of total bases, Cytosine percentage:", options: ["30%", "20%", "40%", "10%"], correct: 1, explanation: "A = T = 30%. A+T = 60%. G+C = 40%. G = C = 20%." },

    { id: 88, topic: "DNA Double Helix", q: "<b>Assertion (A):</b> DNA strands can be separated by heating.<br><br><b>Reason (R):</b> H-bonds are weak bonds that break at high temperatures.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "DNA denaturation occurs on heating because H-bonds between base pairs break at high temperatures." },

    // ===== SET 5: PACKAGING OF DNA HELIX (Q89-Q118) =====
    { id: 89, topic: "Packaging of DNA", q: "Approximate length of DNA in a typical mammalian cell:", options: ["2.2 cm", "2.2 m", "2.2 mm", "2.2 μm"], correct: 1, explanation: "6.6 × 10⁹ bp × 0.34 × 10⁻⁹ m/bp ≈ 2.2 metres." },

    { id: 90, topic: "Packaging of DNA", q: "Total base pairs used for calculating mammalian cell DNA length:", options: ["3.3 × 10⁹ bp", "6.6 × 10⁹ bp", "4.6 × 10⁶ bp", "2.2 × 10⁹ bp"], correct: 1, explanation: "Diploid cell: 2 × 3.3 × 10⁹ = 6.6 × 10⁹ bp." },

    { id: 91, topic: "Packaging of DNA", q: "In prokaryotes, DNA is organized in a region called:", options: ["Nucleus", "Nucleolus", "Nucleoid", "Nucleosome"], correct: 2, explanation: "Prokaryotes lack defined nucleus. DNA is in the nucleoid region." },

    { id: 92, topic: "Packaging of DNA", q: "DNA is negatively charged due to:", options: ["Histones", "Phosphate groups in backbone", "Nitrogenous bases", "Deoxyribose sugar"], correct: 1, explanation: "Phosphate groups carry negative charges, making DNA negatively charged." },

    { id: 93, topic: "Packaging of DNA", q: "Histones are rich in which amino acid residues?", options: ["Tryptophan and Phenylalanine", "Lysine and Arginine", "Glutamic acid and Aspartic acid", "Glycine and Alanine"], correct: 1, explanation: "Histones are rich in lysine and arginine — both carry positive charges." },

    { id: 94, topic: "Packaging of DNA", q: "A histone octamer is composed of:", options: ["Eight different types of histone proteins", "Eight molecules of histones", "Four molecules of histones", "Six molecules of histones"], correct: 1, explanation: "NCERT: 'Histones are organised to form a unit of eight molecules called histone octamer.'" },

    { id: 95, topic: "Packaging of DNA", q: "A typical nucleosome contains approximately:", options: ["100 bp", "146 bp", "200 bp", "500 bp"], correct: 2, explanation: "NCERT states: 'A typical nucleosome contains 200 bp of DNA helix.'" },

    { id: 96, topic: "Packaging of DNA", q: "The repeating unit of chromatin is:", options: ["Histone", "Nucleosome", "Nucleoid", "Chromosome"], correct: 1, explanation: "Nucleosomes constitute the repeating unit of chromatin." },

    { id: 97, topic: "Packaging of DNA", q: "'Beads-on-string' structure is visualized under:", options: ["Light microscope", "Scanning electron microscope", "Electron microscope", "Naked eye"], correct: 2, explanation: "Nucleosomes appear as beads-on-string when viewed under electron microscope (EM)." },

    { id: 98, topic: "Packaging of DNA", q: "<b>Assertion (A):</b> Negatively charged DNA wraps around positively charged histone octamer.<br><br><b>Reason (R):</b> Histones are rich in lysine and arginine with positive charges.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Electrostatic attraction between negative DNA and positive histones facilitates nucleosome formation." },

    { id: 99, topic: "Packaging of DNA", q: "Higher level chromatin packaging requires:", options: ["Only histone proteins", "Non-histone chromosomal (NHC) proteins", "RNA polymerase", "DNA ligase"], correct: 1, explanation: "NCERT: 'packaging at higher level requires Non-histone Chromosomal (NHC) proteins.'" },

    { id: 100, topic: "Packaging of DNA", q: "Which is <b>transcriptionally active</b>?", options: ["Heterochromatin", "Euchromatin", "Both equally", "Neither"], correct: 1, explanation: "Euchromatin is loosely packed, stains light, and is transcriptionally active. Heterochromatin is inactive." },

    { id: 101, topic: "Packaging of DNA", q: "Consider:<br>(i) Euchromatin – loosely packed, stains light<br>(ii) Heterochromatin – densely packed, stains dark<br>(iii) Euchromatin – transcriptionally inactive<br>(iv) Heterochromatin – transcriptionally active<br><br>Which are correct?", options: ["(i) and (ii) only", "(iii) and (iv) only", "(i), (ii) and (iii)", "(i), (ii) and (iv)"], correct: 0, explanation: "(iii) and (iv) are REVERSED. Euchromatin = active; Heterochromatin = inactive." },

    { id: 102, topic: "Packaging of DNA", q: "If E. coli DNA length is 1.36 mm, the number of base pairs is approximately:", options: ["4.0 × 10⁶ bp", "4.6 × 10⁶ bp", "4.0 × 10⁵ bp", "1.36 × 10⁶ bp"], correct: 0, explanation: "1.36 × 10⁻³ m / (0.34 × 10⁻⁹ m) = 4.0 × 10⁶ bp." },

    { id: 103, topic: "Packaging of DNA", q: "Approximate number of nucleosomes in a mammalian cell:", options: ["3.3 × 10⁷", "6.6 × 10⁷", "3.3 × 10⁶", "6.6 × 10⁸"], correct: 0, explanation: "6.6 × 10⁹ bp / 200 bp per nucleosome = 3.3 × 10⁷." },

    { id: 104, topic: "Packaging of DNA", q: "Correct packaging sequence (lowest to highest):", options: ["Nucleosome → Chromatin fiber → Chromatin → Chromosome", "Chromosome → Chromatin → Nucleosome → DNA", "DNA helix → Histone octamer → Chromosome → Nucleosome", "Chromatin fiber → Nucleosome → DNA → Chromosome"], correct: 0, explanation: "DNA → Nucleosome → Chromatin fiber → further coiling → Chromosome (most condensed at metaphase)." },

    { id: 105, topic: "Packaging of DNA", q: "In prokaryotic nucleoid, DNA is organized as:", options: ["Nucleosomes wrapped around histones", "Large loops held by proteins", "Linear chromosomes with telomeres", "Chromatin fibers with NHC proteins"], correct: 1, explanation: "NCERT: 'DNA in nucleoid is organised in large loops held by proteins.'" },

    { id: 106, topic: "Packaging of DNA", q: "Which is <b>incorrect</b> about histones?", options: ["Positively charged basic proteins", "Rich in lysine and arginine", "Form octameric structure", "Rich in glutamic acid and aspartic acid"], correct: 3, explanation: "Glutamic acid and aspartic acid are ACIDIC amino acids. Histones are BASIC proteins." },

    { id: 107, topic: "Packaging of DNA", q: "Statement 1: Chromatin = thread-like stained bodies in nucleus.<br>Statement 2: 'Chromatin' derives from 'chroma' meaning colour.", options: ["Only S1 correct", "Only S2 correct", "Both correct", "Both incorrect"], correct: 2, explanation: "Both statements are correct per NCERT." },

    { id: 108, topic: "Packaging of DNA", q: "Approximate dimension of a typical nucleus:", options: ["10⁻³ m", "10⁻⁶ m", "10⁻⁹ m", "10⁻¹² m"], correct: 1, explanation: "NCERT: nucleus is approximately 10⁻⁶ m. This contrasts with 2.2 m DNA length." },

    { id: 109, topic: "Packaging of DNA", q: "<b>Assertion (A):</b> DNA packaging is more complex in eukaryotes than prokaryotes.<br><br><b>Reason (R):</b> Eukaryotes have histones, nucleosomes, and NHC proteins; prokaryotes have only nucleoid.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Eukaryotic packaging involves multiple levels. Prokaryotic is simpler. R explains A." },

    { id: 110, topic: "Packaging of DNA", q: "Chromosomes are most condensed during:", options: ["Interphase", "Prophase", "Metaphase", "Telophase"], correct: 2, explanation: "NCERT: chromatin fibers are 'coiled and condensed at metaphase stage.'" },

    { id: 111, topic: "Packaging of DNA", q: "Consider:<br>(i) DNA wraps around histone octamer → Nucleosome<br>(ii) Beads-on-string under EM<br>(iii) NHC proteins for higher packaging<br>(iv) Euchromatin = densely packed + inactive<br><br>How many correct?", options: ["All four", "Three", "Two", "One"], correct: 1, explanation: "(iv) is WRONG — Euchromatin is loosely packed and active. (i), (ii), (iii) are correct = 3." },

    { id: 112, topic: "Packaging of DNA", q: "Charge interaction in nucleosome formation:", options: ["Negative DNA + Negative histones", "Positive DNA + Negative histones", "Negative DNA + Positive histones", "Neutral DNA + Neutral histones"], correct: 2, explanation: "DNA (negative, phosphate groups) + histones (positive, lysine/arginine) = electrostatic attraction." },

    { id: 113, topic: "Packaging of DNA", q: "Select the <b>incorrect</b> match:", options: ["Euchromatin – Loosely packed – Active", "Heterochromatin – Densely packed – Inactive", "Nucleoid – Prokaryotic DNA region", "Nucleosome – 500 bp – Repeating unit"], correct: 3, explanation: "Nucleosome contains 200 bp, not 500 bp." },

    { id: 114, topic: "Packaging of DNA", q: "Correct relationship between packaging and gene expression:", options: ["Tightly packed = more active", "Loosely packed = inactive", "Packaging has no effect", "Loosely packed euchromatin = transcriptionally active"], correct: 3, explanation: "Euchromatin (loosely packed) allows access to transcription machinery = active." },

    { id: 115, topic: "Packaging of DNA", q: "A positively charged protein is likely rich in:", options: ["Glutamic acid", "Aspartic acid", "Arginine", "Leucine"], correct: 2, explanation: "Arginine (and lysine) carry positive charges. Glutamic/aspartic acid are negative." },

    { id: 116, topic: "Packaging of DNA", q: "The beads in beads-on-string model represent:", options: ["Histones", "Nucleosomes", "NHC proteins", "Base pairs"], correct: 1, explanation: "Beads = nucleosomes; string = linker DNA between nucleosomes." },

    { id: 117, topic: "Packaging of DNA", q: "Which correctly describes the nucleoid?", options: ["Membrane-bound nucleus of prokaryotes", "Region where prokaryotic DNA is organized with proteins in large loops", "Part of eukaryotic chromatin", "Site of ribosome assembly"], correct: 1, explanation: "Nucleoid is NOT membrane-bound. DNA is organized in large loops held by proteins." },

    { id: 118, topic: "Packaging of DNA", q: "<b>Assertion (A):</b> 2.2 m DNA fits in a nucleus of ~10⁻⁶ m diameter.<br><br><b>Reason (R):</b> Multiple levels of packaging (nucleosomes → chromatin → chromosomes).", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Multiple packaging levels allow extreme compaction. R explains how this is achieved." },

    // ===== SET 6: GRIFFITH'S EXPERIMENT (Q119-Q129) =====
    { id: 119, topic: "Griffith's Experiment", q: "Griffith's transformation experiment was performed on:", options: ["E. coli", "Streptococcus pneumoniae", "Salmonella typhimurium", "Bacillus subtilis"], correct: 1, explanation: "Griffith (1928) worked with Streptococcus pneumoniae (pneumococcus)." },

    { id: 120, topic: "Griffith's Experiment", q: "S strain is virulent because:", options: ["It produces an endotoxin", "It has a mucous (polysaccharide) coat", "It lacks a cell wall", "It produces antibiotic-resistant enzymes"], correct: 1, explanation: "S strain has a mucous (polysaccharide) coat making them virulent." },

    { id: 121, topic: "Griffith's Experiment", q: "Which combinations led to mice death?<br>(i) Live S strain<br>(ii) Live R strain<br>(iii) Heat-killed S strain<br>(iv) Heat-killed S + live R", options: ["(i) and (iv) only", "(i) only", "(i) and (iii) only", "(ii) and (iv) only"], correct: 0, explanation: "Live S (virulent) kills mice. Heat-killed S + live R also kills (transformation)." },

    { id: 122, topic: "Griffith's Experiment", q: "What was recovered from dead mice injected with heat-killed S + live R?", options: ["Only dead S strain", "Only live R strain", "Living S strain bacteria", "Heat-killed R strain"], correct: 2, explanation: "Living S bacteria were recovered — R strain transformed into virulent S strain." },

    { id: 123, topic: "Griffith's Experiment", q: "About Griffith's experiment:<br>(i) R strain transformed into S<br>(ii) Transforming principle enabled polysaccharide coat synthesis<br>(iii) Griffith concluded DNA was transforming principle<br>(iv) Transfer of genetic material occurred<br><br>Which are correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii)", "All four", "(ii) and (iii) only"], correct: 0, explanation: "(iii) is WRONG — Griffith did NOT identify it as DNA. He called it 'transforming principle'." },

    { id: 124, topic: "Griffith's Experiment", q: "<b>Assertion (A):</b> Griffith called it 'transforming principle'.<br><br><b>Reason (R):</b> He could not determine the biochemical nature.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Griffith used a general term because he couldn't identify the exact biochemical nature." },

    { id: 125, topic: "Griffith's Experiment", q: "R strain colonies appear rough because:", options: ["Thick peptidoglycan layer", "Lack of polysaccharide coat", "Endospore production", "Presence of flagella"], correct: 1, explanation: "R strain lacks the polysaccharide coat, giving rough colony appearance." },

    { id: 126, topic: "Griffith's Experiment", q: "Correct chronological order:", options: ["Griffith → Hershey-Chase → Avery et al.", "Avery → Griffith → Hershey-Chase", "Griffith → Avery et al. → Hershey-Chase", "Hershey-Chase → Griffith → Avery"], correct: 2, explanation: "Griffith (1928) → Avery et al. (1933-44) → Hershey-Chase (1952)." },

    { id: 127, topic: "Griffith's Experiment", q: "Transformation of R to S strain is an example of:", options: ["Transduction", "Conjugation", "Transformation", "Translation"], correct: 2, explanation: "Transformation = cell takes up exogenous DNA from environment." },

    { id: 128, topic: "Griffith's Experiment", q: "Statement 1: Heat-killed S alone causes pneumonia in mice.<br>Statement 2: Transforming principle converts live R into virulent S.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 2, explanation: "Heat-killed S alone does NOT kill mice. S2 is correct." },

    { id: 129, topic: "Griffith's Experiment", q: "Significance of Griffith's experiment:", options: ["Proved DNA is genetic material", "Demonstrated transformation by substance from dead organism", "Identified polysaccharide coat as genetic material", "Showed proteins cause transformation"], correct: 1, explanation: "Griffith demonstrated transformation but did NOT identify the chemical nature." },

    // ===== SET 7: AVERY, MacLEOD & McCARTY (Q130-Q136) =====
    { id: 130, topic: "Avery et al. Experiment", q: "Avery et al. aimed to determine:", options: ["Structure of DNA", "Biochemical nature of transforming principle", "Mechanism of DNA replication", "Process of protein synthesis"], correct: 1, explanation: "They worked to determine the biochemical nature of Griffith's transforming principle." },

    { id: 131, topic: "Avery et al. Experiment", q: "Transformation was inhibited when treated with:", options: ["Protease", "RNase", "DNase", "Lipase"], correct: 2, explanation: "DNase inhibited transformation, proving DNA was the transforming principle." },

    { id: 132, topic: "Avery et al. Experiment", q: "About Avery et al.:<br>(i) Proteases didn't affect transformation<br>(ii) RNases didn't affect transformation<br>(iii) DNase inhibited transformation<br>(iv) All biologists were convinced<br><br>Which are correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iii) only", "(ii) and (iv) only"], correct: 0, explanation: "(iv) is incorrect — 'not all biologists were convinced.'" },

    { id: 133, topic: "Avery et al. Experiment", q: "<b>Assertion (A):</b> Avery et al. concluded DNA is hereditary material.<br><br><b>Reason (R):</b> DNase inhibited transformation while proteases and RNases had no effect.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "The experimental evidence directly led to the conclusion. R correctly explains A." },

    { id: 134, topic: "Avery et al. Experiment", q: "Prior to Avery et al., genetic material was thought to be:", options: ["DNA", "RNA", "Protein", "Carbohydrate"], correct: 2, explanation: "Before Avery et al., genetic material was thought to be a protein." },

    { id: 135, topic: "Avery et al. Experiment", q: "Correct difference between DNA and DNase:", options: ["DNA is nucleic acid; DNase synthesizes DNA", "DNA is polymer of nucleotides; DNase degrades DNA", "DNA is a protein; DNase is nucleic acid", "Both are enzymes"], correct: 1, explanation: "DNA = nucleic acid polymer. DNase = enzyme that degrades DNA." },

    { id: 136, topic: "Avery et al. Experiment", q: "Avery et al. worked during the period:", options: ["1928-1932", "1933-1944", "1944-1952", "1952-1960"], correct: 1, explanation: "Avery, MacLeod and McCarty worked during 1933-44." },

    // ===== SET 8: HERSHEY-CHASE EXPERIMENT (Q137-Q149) =====
    { id: 137, topic: "Hershey-Chase Experiment", q: "Unequivocal proof that DNA is genetic material came from:", options: ["Griffith", "Avery et al.", "Alfred Hershey and Martha Chase", "Watson and Crick"], correct: 2, explanation: "Hershey and Chase (1952) provided unequivocal proof." },

    { id: 138, topic: "Hershey-Chase Experiment", q: "Hershey and Chase used:", options: ["S. pneumoniae and mice", "Bacteriophages and E. coli", "TMV and tobacco", "Retroviruses and human cells"], correct: 1, explanation: "They worked with bacteriophages and E. coli." },

    { id: 139, topic: "Hershey-Chase Experiment", q: "Radioactive phosphorus (³²P) labelled:", options: ["Protein coat", "DNA of virus", "RNA of virus", "Polysaccharide coat"], correct: 1, explanation: "DNA contains phosphorus but protein doesn't. ³²P labels DNA." },

    { id: 140, topic: "Hershey-Chase Experiment", q: "Radioactive sulfur (³⁵S) labelled:", options: ["DNA", "RNA", "Protein coat", "Cell wall"], correct: 2, explanation: "Protein contains sulfur (cysteine, methionine) but DNA doesn't. ³⁵S labels protein." },

    { id: 141, topic: "Hershey-Chase Experiment", q: "Correct sequence of steps:<br>(i) Viruses grown on radioactive medium<br>(ii) Radioactive phages infect E. coli<br>(iii) Agitation in blender<br>(iv) Centrifugation", options: ["(i)→(ii)→(iv)→(iii)", "(i)→(ii)→(iii)→(iv)", "(ii)→(i)→(iii)→(iv)", "(iv)→(iii)→(ii)→(i)"], correct: 1, explanation: "Grow on radioactive medium → infect → blender → centrifuge." },

    { id: 142, topic: "Hershey-Chase Experiment", q: "Radioactivity found inside bacteria when phages labelled with:", options: ["³⁵S", "³²P", "¹⁴C", "³H"], correct: 1, explanation: "³²P-labelled DNA was found inside bacteria, confirming DNA enters the cell." },

    { id: 143, topic: "Hershey-Chase Experiment", q: "<b>Assertion (A):</b> Radioactive protein didn't enter bacteria.<br><br><b>Reason (R):</b> Only DNA of phage enters host cell during infection.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "During phage infection, only DNA enters; protein coat stays outside." },

    { id: 144, topic: "Hershey-Chase Experiment", q: "Basis for using ³²P for DNA and ³⁵S for protein:", options: ["DNA has sulfur; protein has phosphorus", "DNA has phosphorus not sulfur; protein has sulfur not phosphorus", "Both have phosphorus and sulfur", "Neither has phosphorus"], correct: 1, explanation: "DNA has P but no S. Protein has S but no P. This mutual exclusivity allows differential labelling." },

    { id: 145, topic: "Hershey-Chase Experiment", q: "The blender was used to:", options: ["Lyse bacterial cells", "Mix radioactive medium", "Separate viral coats from bacteria by agitation", "Denature DNA"], correct: 2, explanation: "The blender physically separated phage protein coats from bacteria." },

    { id: 146, topic: "Hershey-Chase Experiment", q: "The centrifuge was used to:", options: ["Replicate phage DNA", "Separate virus particles from bacteria", "Break cell walls", "Precipitate proteins"], correct: 1, explanation: "Centrifuge separates heavier bacteria (pellet) from lighter viral coats (supernatant)." },

    { id: 147, topic: "Hershey-Chase Experiment", q: "Statement 1: Hershey-Chase proved DNA passes from virus to bacteria.<br>Statement 2: Griffith identified biochemical nature as DNA.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 1, explanation: "S2 is WRONG — Griffith did NOT identify it. Avery et al. did." },

    { id: 148, topic: "Hershey-Chase Experiment", q: "Conclusion of Hershey-Chase experiment:", options: ["Protein is genetic material", "Both DNA and protein enter host", "DNA is genetic material passing from virus to bacteria", "RNA is genetic material in phages"], correct: 2, explanation: "DNA is the genetic material that passes from virus to bacteria." },

    { id: 149, topic: "Hershey-Chase Experiment", q: "Consider:<br>(i) ³²P labels DNA<br>(ii) ³⁵S labels protein<br>(iii) DNA contains sulfur<br>(iv) Protein doesn't contain phosphorus<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iii) is WRONG — DNA does NOT contain sulfur. (i), (ii), (iv) are correct = 3." },

    // ===== SET 9: PROPERTIES OF GENETIC MATERIAL (Q150-Q178) =====
    { id: 150, topic: "Properties of Genetic Material", q: "Which is NOT a criterion for genetic material?", options: ["Replication", "Chemical/structural stability", "Scope for slow changes (mutations)", "Catalyze metabolic reactions"], correct: 3, explanation: "Four criteria: Replication, Stability, Mutation, Expression. Catalysis is NOT required." },

    { id: 151, topic: "Properties of Genetic Material", q: "Which criteria can BOTH DNA and RNA fulfill?", options: ["(i), (iii) and (iv) only", "(i) and (ii) only", "All four", "Only replication"], correct: 2, explanation: "Both can replicate, both have some stability, both can mutate, RNA can express directly. All four." },

    { id: 152, topic: "Properties of Genetic Material", q: "RNA is more labile because:", options: ["Single-stranded", "Contains uracil", "Has 2'-OH group making it reactive", "Has phosphodiester backbone"], correct: 2, explanation: "NCERT: '2'-OH group is a reactive group and makes RNA labile and easily degradable.'" },

    { id: 153, topic: "Properties of Genetic Material", q: "<b>Assertion (A):</b> DNA is less reactive and more stable than RNA.<br><br><b>Reason (R):</b> DNA lacks the 2'-OH group present in RNA.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Absence of 2'-OH in DNA makes it less reactive and more stable. R explains A." },

    { id: 154, topic: "Properties of Genetic Material", q: "Thymine instead of uracil in DNA confers:", options: ["Additional reactivity", "Additional stability", "Catalytic activity", "Faster mutation"], correct: 1, explanation: "NCERT: 'thymine at the place of uracil confers additional stability to DNA.'" },

    { id: 155, topic: "Properties of Genetic Material", q: "RNA viruses mutate and evolve faster because:", options: ["RNA is more stable", "RNA is less reactive", "RNA being unstable mutates at faster rate", "RNA cannot replicate"], correct: 2, explanation: "NCERT: 'RNA being unstable, mutate at a faster rate.'" },

    { id: 156, topic: "Properties of Genetic Material", q: "About DNA and RNA as genetic material:", options: ["DNA for storage; RNA for transmission", "RNA for storage; DNA for transmission", "Both equally preferred", "Neither functions as genetic material"], correct: 0, explanation: "NCERT: 'DNA is preferred for storage. For transmission, RNA is better.'" },

    { id: 157, topic: "Properties of Genetic Material", q: "RNA can directly code for proteins. This allows RNA to:", options: ["Be better for storage", "Easily express characters (Mendelian)", "Be more stable", "Prevent mutations"], correct: 1, explanation: "RNA can directly code for proteins, hence easily express characters." },

    { id: 158, topic: "Properties of Genetic Material", q: "Statement 1: DNA depends on RNA for protein synthesis.<br>Statement 2: Protein synthesis machinery evolved around RNA.", options: ["Only S1 correct", "Only S2 correct", "Both correct", "Both incorrect"], correct: 2, explanation: "Both are directly from NCERT." },

    { id: 159, topic: "Properties of Genetic Material", q: "Which virus has RNA as genetic material?", options: ["Bacteriophage φ×174", "Bacteriophage lambda", "Tobacco Mosaic Virus (TMV)", "Bacteriophage T2"], correct: 2, explanation: "NCERT mentions TMV and QB bacteriophage as examples." },

    { id: 160, topic: "Properties of Genetic Material", q: "Stability of genetic material after death was demonstrated by:", options: ["Hershey-Chase experiment", "Griffith's transforming principle", "Watson-Crick model", "Avery et al.'s DNase work"], correct: 1, explanation: "Heat killed bacteria but didn't destroy genetic material properties." },

    { id: 161, topic: "Properties of Genetic Material", q: "When denatured DNA strands reunite under appropriate conditions:", options: ["Denaturation", "Renaturation (Annealing)", "Degradation", "Transcription"], correct: 1, explanation: "Complementary strands come together = renaturation/annealing." },

    { id: 162, topic: "Properties of Genetic Material", q: "Proteins fail to qualify as genetic material because:", options: ["Cannot mutate", "Not stable", "Cannot replicate", "Too small"], correct: 2, explanation: "NCERT: 'proteins fail to fulfill first criteria itself' — replication." },

    { id: 163, topic: "Properties of Genetic Material", q: "<b>Assertion (A):</b> RNA is catalytic.<br><br><b>Reason (R):</b> This makes RNA reactive and less suitable as stable genetic material.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Being catalytic = reactive = undesirable for stable genetic storage." },

    { id: 164, topic: "Properties of Genetic Material", q: "All criteria for genetic material:", options: ["Replication, Stability, Mutation, Expression", "Replication, Stability, Catalysis, Translation", "Transcription, Translation, Stability, Mutation", "Replication, Mutation, Catalysis, Expression"], correct: 0, explanation: "NCERT four criteria: Replication, Stability, Mutation, Expression." },

    { id: 165, topic: "Properties of Genetic Material", q: "DNA vs RNA comparison:<br>(i) Stability: DNA > RNA ✓<br>(ii) Reactivity: DNA < RNA ✓<br>(iii) Mutation rate: DNA < RNA ✓<br>(iv) Direct protein coding: DNA yes, RNA no<br><br>How many rows correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iv) is REVERSED — RNA can directly code; DNA depends on RNA. Three correct." },

    { id: 166, topic: "Properties of Genetic Material", q: "Two chemical differences between DNA and RNA:", options: ["DNA ribose, RNA deoxyribose; DNA uracil, RNA thymine", "DNA deoxyribose, RNA ribose; DNA thymine, RNA uracil", "DNA single strand, RNA double strand", "DNA phosphate, RNA no phosphate"], correct: 1, explanation: "Sugar: DNA=deoxyribose, RNA=ribose. Base: DNA=thymine, RNA=uracil." },

    { id: 167, topic: "Properties of Genetic Material", q: "Select the <b>incorrect</b> statement:", options: ["Both DNA and RNA can mutate", "RNA mutates faster than DNA", "DNA is better for storage", "DNA can directly code for proteins without RNA"], correct: 3, explanation: "DNA CANNOT directly code for proteins — depends on RNA." },

    { id: 168, topic: "Properties of Genetic Material", q: "Match:<br>(i) Griffith → (ii) Avery et al. → (iii) Hershey-Chase<br>with (P) Unequivocal proof (Q) Discovered transforming principle (R) Biochemical nature", options: ["(i)–Q, (ii)–R, (iii)–P", "(i)–P, (ii)–Q, (iii)–R", "(i)–R, (ii)–P, (iii)–Q", "(i)–Q, (ii)–P, (iii)–R"], correct: 0, explanation: "Griffith=Q, Avery=R, Hershey-Chase=P." },

    { id: 169, topic: "Properties of Genetic Material", q: "RNA as genetic material example from NCERT:", options: ["HIV and Influenza", "TMV and QB bacteriophage", "Lambda and T2 phage", "φ×174 and Adenovirus"], correct: 1, explanation: "NCERT specifically mentions TMV and QB bacteriophage." },

    { id: 170, topic: "Properties of Genetic Material", q: "Genetic material should not change with:", options: ["Different life cycle stages only", "Age only", "Physiology changes only", "All of the above"], correct: 3, explanation: "NCERT: 'not change with different stages of life cycle, age or with change in physiology.'" },

    { id: 171, topic: "Properties of Genetic Material", q: "<b>Assertion (A):</b> RNA viruses have shorter life spans and evolve faster.<br><br><b>Reason (R):</b> RNA is less stable and mutates faster.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "RNA instability → faster mutations → faster evolution. R explains A." },

    { id: 172, topic: "Properties of Genetic Material", q: "In Griffith's experiment, the property demonstrated even after heating:", options: ["Replication ability", "Stability", "Mutation", "Expression"], correct: 1, explanation: "Stability — heat killed bacteria but didn't destroy genetic material properties." },

    { id: 173, topic: "Properties of Genetic Material", q: "Which molecules can self-replicate (required for genetic material)?", options: ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids (DNA and RNA)"], correct: 3, explanation: "Only nucleic acids can direct their own duplication via base pairing." },

    { id: 174, topic: "Properties of Genetic Material", q: "What makes RNA suitable for transmission but not storage?", options: ["Highly stable", "Less reactive", "Can directly code for proteins and act as messenger", "Cannot mutate"], correct: 2, explanation: "RNA's ability to directly code proteins makes it ideal for transmission." },

    { id: 175, topic: "Properties of Genetic Material", q: "Heat-separated DNA strands can rejoin because:", options: ["Held by covalent bonds", "Two strands are complementary", "DNA contains uracil", "DNA is single-stranded"], correct: 1, explanation: "Complementary base pairing allows reannealing." },

    { id: 176, topic: "Properties of Genetic Material", q: "In Hershey-Chase, what was found in supernatant after centrifugation?", options: ["Bacteria with radioactive DNA", "Viral protein coats (ghosts)", "Intact bacteriophages", "Bacterial ribosomes"], correct: 1, explanation: "Lighter viral protein coats remain in supernatant; heavier bacteria form pellet." },

    { id: 177, topic: "Properties of Genetic Material", q: "Why is DNA the predominant genetic material?", options: ["Can directly synthesize proteins", "More reactive than RNA", "Chemically less reactive, structurally more stable, thymine for additional stability", "Mutates faster than RNA"], correct: 2, explanation: "DNA lacks 2'-OH, is double-stranded, has thymine — all adding stability." },

    { id: 178, topic: "Properties of Genetic Material", q: "Consider:<br>(i) Griffith: Heat-killed S + live R → mice die ✓<br>(ii) Avery: DNA alone transforms ✓<br>(iii) Hershey: ³²P DNA found inside bacteria ✓<br>(iv) Hershey: ³⁵S protein found inside bacteria<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iv) only", "(ii) and (iv) only"], correct: 0, explanation: "(iv) is WRONG — ³⁵S protein was found OUTSIDE (supernatant), not inside." },

    // ===== SET 10: RNA WORLD (Q179-Q186) =====
    { id: 179, topic: "RNA World", q: "According to RNA World hypothesis, first genetic material was:", options: ["DNA", "Protein", "RNA", "Carbohydrate"], correct: 2, explanation: "NCERT: 'RNA was the first genetic material.'" },

    { id: 180, topic: "RNA World", q: "RNA's dual role as genetic material and catalyst made it:", options: ["Very stable", "Reactive and hence unstable", "Unable to replicate", "Unable to mutate"], correct: 1, explanation: "Being catalytic made RNA reactive and hence unstable." },

    { id: 181, topic: "RNA World", q: "<b>Assertion (A):</b> DNA evolved from RNA with modifications for stability.<br><br><b>Reason (R):</b> DNA is double-stranded and has complementary strand for repair.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Double-strandedness allows repair using intact strand as template. R explains A." },

    { id: 182, topic: "RNA World", q: "About RNA World:<br>(i) RNA was first genetic material<br>(ii) Life processes evolved around RNA<br>(iii) RNA was catalyst and genetic material<br>(iv) DNA evolved before RNA<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iv)", "(ii) and (iv)"], correct: 0, explanation: "(iv) is WRONG — RNA evolved first; DNA evolved FROM RNA." },

    { id: 183, topic: "RNA World", q: "Important biochemical reactions catalysed by RNA (not protein enzymes):", options: ["DNA replication only", "Some important reactions (e.g., peptide bond formation)", "All metabolic reactions", "No reactions"], correct: 1, explanation: "Some important biochemical reactions are catalysed by RNA catalysts (ribozymes)." },

    { id: 184, topic: "RNA World", q: "Correct evolutionary sequence of genetic material:", options: ["DNA → RNA → Protein", "Protein → DNA → RNA", "RNA → DNA", "DNA → RNA"], correct: 2, explanation: "RNA World: RNA was first, DNA evolved from RNA." },

    { id: 185, topic: "RNA World", q: "Statement 1: DNA has repair mechanism due to double-strandedness.<br>Statement 2: Complementary strand serves as template for error correction.", options: ["Both correct, S2 explains S1", "Both correct, S2 doesn't explain S1", "S1 correct, S2 incorrect", "Both incorrect"], correct: 0, explanation: "Complementary strand provides template for repair. S2 explains S1." },

    { id: 186, topic: "RNA World", q: "Catalytic nature of RNA made it:", options: ["More stable and less reactive", "Reactive and unsuitable for long-term genetic storage", "Ideal for permanent storage", "Unable to participate in life processes"], correct: 1, explanation: "Being catalytic = reactive = unsuitable for stable storage." },

    // ===== SET 11: SEMICONSERVATIVE REPLICATION (Q187-Q207) =====
    { id: 187, topic: "DNA Replication", q: "Semiconservative replication model was proposed by:", options: ["Meselson and Stahl", "Hershey and Chase", "Watson and Crick", "Avery et al."], correct: 2, explanation: "Watson and Crick proposed semiconservative scheme (1953). Meselson-Stahl proved it (1958)." },

    { id: 188, topic: "DNA Replication", q: "In semiconservative replication, each daughter DNA has:", options: ["Two new strands", "Two parental strands", "One parental + one new strand", "One parental + two new strands"], correct: 2, explanation: "Each daughter DNA has one parental and one newly synthesised strand." },

    { id: 189, topic: "DNA Replication", q: "Experimental proof first demonstrated in:", options: ["Vicia faba", "Human cells", "Escherichia coli", "Drosophila"], correct: 2, explanation: "First shown in E. coli by Meselson and Stahl (1958)." },

    { id: 190, topic: "DNA Replication", q: "E. coli was first grown in medium containing:", options: ["¹⁴NH₄Cl", "¹⁵NH₄Cl", "³²P", "³⁵S"], correct: 1, explanation: "Grown in ¹⁵NH₄Cl (heavy nitrogen) for many generations." },

    { id: 191, topic: "DNA Replication", q: "Heavy and light DNA separated by:", options: ["Gel electrophoresis", "CsCl density gradient centrifugation", "Paper chromatography", "Autoradiography"], correct: 1, explanation: "Separated by CsCl density gradient centrifugation. ¹⁵N is NOT radioactive." },

    { id: 192, topic: "DNA Replication", q: "<b>Assertion (A):</b> ¹⁵N is not radioactive.<br><br><b>Reason (R):</b> ¹⁵N and ¹⁴N are separated only by density differences.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "¹⁵N is NOT radioactive; separated based on densities only. R explains the method." },

    { id: 193, topic: "DNA Replication", q: "After one generation in ¹⁴N medium, DNA showed:", options: ["Only heavy band", "Only light band", "One hybrid (intermediate) band", "Two bands — heavy and light"], correct: 2, explanation: "Each DNA has one ¹⁵N + one ¹⁴N strand = hybrid density. One band." },

    { id: 194, topic: "DNA Replication", q: "After two generations in ¹⁴N medium:", options: ["Only heavy DNA", "Only hybrid DNA", "Equal amounts of hybrid and light DNA", "Only light DNA"], correct: 2, explanation: "Equal amounts of hybrid DNA and light DNA after two generations." },

    { id: 195, topic: "DNA Replication", q: "After 4 generations (80 min), ratio of light:hybrid DNA:", options: ["1:1", "3:1", "7:1", "14:2 (7:1)"], correct: 2, explanation: "After n gen: Total=2ⁿ=16. Hybrid always=2. Light=14. Ratio=14:2=7:1." },

    { id: 196, topic: "DNA Replication", q: "Semiconservative replication in eukaryotic chromosomes proved by:", options: ["Meselson-Stahl using E. coli", "Taylor using Vicia faba", "Hershey-Chase using phages", "Griffith using S. pneumoniae"], correct: 1, explanation: "Taylor and colleagues used Vicia faba (faba beans) with radioactive thymidine." },

    { id: 197, topic: "DNA Replication", q: "Taylor's experiment used which label?", options: ["¹⁵N", "³²P", "Radioactive thymidine", "³⁵S"], correct: 2, explanation: "Taylor used radioactive thymidine to label newly synthesized DNA." },

    { id: 198, topic: "DNA Replication", q: "Consider:<br>(i) Meselson-Stahl: ¹⁵N/¹⁴N in E. coli<br>(ii) Taylor: radioactive thymidine in V. faba<br>(iii) Both proved semiconservative replication<br>(iv) Both used CsCl gradient<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iii) only", "(ii) and (iv) only"], correct: 0, explanation: "(iv) is WRONG — Taylor used autoradiography, not CsCl gradient." },

    { id: 199, topic: "DNA Replication", q: "The famous quote about 'copying mechanism' was by:", options: ["Meselson and Stahl", "Watson and Crick", "Griffith", "Avery et al."], correct: 1, explanation: "Watson and Crick's 1953 paper contained this famous quote." },

    { id: 200, topic: "DNA Replication", q: "Main enzyme of DNA replication:", options: ["RNA-dependent DNA polymerase", "DNA-dependent RNA polymerase", "DNA-dependent DNA polymerase", "RNA-dependent RNA polymerase"], correct: 2, explanation: "DNA-dependent DNA polymerase uses DNA template to polymerise deoxynucleotides." },

    { id: 201, topic: "DNA Replication", q: "Rate of polymerisation in E. coli:", options: ["200 bp/sec", "2000 bp/sec", "20,000 bp/sec", "200,000 bp/sec"], correct: 1, explanation: "E. coli (4.6×10⁶ bp) replicates in 18 min → ~2000 bp/sec." },

    { id: 202, topic: "DNA Replication", q: "E. coli completes replication in:", options: ["18 seconds", "18 minutes", "18 hours", "180 minutes"], correct: 1, explanation: "E. coli completes replication within 18 minutes." },

    { id: 203, topic: "DNA Replication", q: "Deoxyribonucleoside triphosphates serve dual purpose as:", options: ["Substrates and inhibitors", "Substrates and energy source", "Energy source and primers", "Catalysts and substrates"], correct: 1, explanation: "Act as substrates AND provide energy (terminal high-energy phosphates like ATP)." },

    { id: 204, topic: "DNA Replication", q: "<b>Assertion (A):</b> dNTPs provide energy for polymerisation.<br><br><b>Reason (R):</b> Two terminal phosphates are high-energy (like ATP).", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Cleavage of terminal phosphate bonds releases energy for polymerisation." },

    { id: 205, topic: "DNA Replication", q: "DNA polymerase catalyses polymerisation in direction:", options: ["3'→5'", "5'→3'", "Both directions", "Depends on template"], correct: 1, explanation: "NCERT: 'polymerisation only in one direction, that is 5'→3'.'" },

    { id: 206, topic: "DNA Replication", q: "On template with 3'→5' polarity, replication is:", options: ["Discontinuous", "Continuous", "Bidirectional", "Not possible"], correct: 1, explanation: "Template 3'→5' = new strand 5'→3' = continuous (leading strand)." },

    { id: 207, topic: "DNA Replication", q: "Discontinuous replication occurs on template with polarity:", options: ["3'→5'", "5'→3'", "Either direction", "Only circular DNA"], correct: 1, explanation: "Template 5'→3' = new strand synthesized in fragments (Okazaki) = discontinuous." },

    // ===== SET 12: REPLICATION MACHINERY CONTINUED (Q208-Q233) =====
    { id: 208, topic: "DNA Replication", q: "Discontinuous fragments are joined by:", options: ["DNA polymerase", "DNA helicase", "DNA ligase", "DNA primase"], correct: 2, explanation: "DNA ligase joins discontinuously synthesised (Okazaki) fragments." },

    { id: 209, topic: "DNA Replication", q: "Small opening in DNA helix where replication occurs:", options: ["Origin of replication", "Replication fork", "Replication bubble", "Okazaki fragment"], correct: 1, explanation: "Replication occurs within a small opening called replication fork." },

    { id: 210, topic: "DNA Replication", q: "Why can't two strands separate entirely during replication?", options: ["DNA polymerase works slowly", "Very high energy requirement", "DNA is circular", "Histones prevent separation"], correct: 1, explanation: "NCERT: 'cannot be separated in its entire length due to very high energy requirement.'" },

    { id: 211, topic: "DNA Replication", q: "About DNA polymerase:<br>(i) Can initiate replication alone<br>(ii) Works 5'→3' only<br>(iii) Uses DNA template<br>(iv) Uses dNTPs as substrates<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(i) is WRONG — cannot initiate alone, needs primer. (ii), (iii), (iv) correct = 3." },

    { id: 212, topic: "DNA Replication", q: "Region where replication originates in E. coli:", options: ["Replication fork", "Origin of replication", "Okazaki fragment", "Primosome"], correct: 1, explanation: "Definite region called origin of replication. Replication doesn't start randomly." },

    { id: 213, topic: "DNA Replication", q: "Vectors in recombinant DNA need origin of replication because:", options: ["Provides antibiotic resistance", "Allows DNA to be propagated/replicated in host", "Enables transcription", "Provides selectable marker"], correct: 1, explanation: "NCERT: 'vectors provide the origin of replication' for propagation." },

    { id: 214, topic: "DNA Replication", q: "DNA replication in eukaryotes occurs during:", options: ["G₁ phase", "S phase", "G₂ phase", "M phase"], correct: 1, explanation: "Replication occurs at S-phase of cell cycle." },

    { id: 215, topic: "DNA Replication", q: "Failure in cell division after replication results in:", options: ["Aneuploidy", "Polyploidy", "Apoptosis", "Mutation"], correct: 1, explanation: "NCERT: 'failure in cell division after DNA replication results into polyploidy.'" },

    { id: 216, topic: "DNA Replication", q: "<b>Assertion (A):</b> Replication and cell division must be coordinated.<br><br><b>Reason (R):</b> Failed cell division after replication → polyploidy.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Polyploidy demonstrates why coordination is essential. R explains A." },

    { id: 217, topic: "DNA Replication", q: "Mistakes during replication result in:", options: ["Polyploidy", "Mutations", "Crossing over", "Transformation"], correct: 1, explanation: "NCERT: 'Any mistake during replication would result into mutations.'" },

    { id: 218, topic: "DNA Replication", q: "Which is <b>incorrect</b> about replication?", options: ["Semiconservative", "DNA polymerase can initiate on its own", "Occurs at replication fork", "DNA ligase joins Okazaki fragments"], correct: 1, explanation: "DNA polymerases CANNOT initiate replication alone — need a primer." },

    { id: 219, topic: "DNA Replication", q: "About replication:<br>(i) DNA polymerase works 5'→3'<br>(ii) One strand continuous, other discontinuous<br>(iii) DNA ligase joins fragments<br>(iv) Both strands synthesized continuously<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iv)", "(ii) and (iii) only"], correct: 0, explanation: "(iv) is WRONG — one is continuous, other discontinuous. (i), (ii), (iii) correct." },

    { id: 220, topic: "DNA Replication", q: "Template for continuous (leading) strand has polarity:", options: ["5'→3'", "3'→5'", "Either", "No specific polarity"], correct: 1, explanation: "Template 3'→5' → new strand 5'→3' in fork direction = continuous." },

    { id: 221, topic: "DNA Replication", q: "Match:<br>(i) DNA polymerase → (ii) DNA ligase → (iii) Vector<br>with (P) Joins Okazaki (Q) Origin of replication (R) Main enzyme", options: ["(i)–R, (ii)–P, (iii)–Q", "(i)–P, (ii)–Q, (iii)–R", "(i)–Q, (ii)–R, (iii)–P", "(i)–R, (ii)–Q, (iii)–P"], correct: 0, explanation: "DNA polymerase=R, DNA ligase=P, Vector=Q." },

    { id: 222, topic: "DNA Replication", q: "Statement 1: Replication is energetically expensive.<br>Statement 2: Energy from dNTPs with high-energy terminal phosphates.", options: ["Only S1 correct", "Only S2 correct", "Both correct, S2 explains S1", "Both incorrect"], correct: 2, explanation: "dNTPs provide energy through high-energy phosphate bonds." },

    { id: 223, topic: "DNA Replication", q: "Which is NOT required for DNA replication?", options: ["DNA template", "DNA-dependent DNA polymerase", "Deoxyribonucleoside triphosphates", "Reverse transcriptase"], correct: 3, explanation: "Reverse transcriptase is for RNA→DNA, not normal replication." },

    { id: 224, topic: "DNA Replication", q: "Match experiments with organisms:<br>(i) Meselson-Stahl → Vicia faba<br>(ii) Taylor → E. coli<br>(iii) Hershey-Chase → Phage + E. coli<br><br>Which correct?", options: ["Only (iii)", "(i) and (ii)", "(ii) and (iii)", "All three"], correct: 0, explanation: "(i) and (ii) are SWAPPED! Meselson-Stahl=E. coli; Taylor=V. faba. Only (iii) correct." },

    { id: 225, topic: "DNA Replication", q: "Leading strand is synthesized:", options: ["Discontinuously as Okazaki fragments", "Continuously in 5'→3' direction", "Continuously in 3'→5' direction", "Without DNA polymerase"], correct: 1, explanation: "Leading strand = continuous in 5'→3' direction." },

    { id: 226, topic: "DNA Replication", q: "Why is discontinuous synthesis necessary on one strand?", options: ["DNA ligase works only on one strand", "DNA polymerase can only synthesize 5'→3', creating problem on one template", "One strand has no template", "Insufficient energy"], correct: 1, explanation: "Since polymerase only works 5'→3', one template requires discontinuous synthesis." },

    { id: 227, topic: "DNA Replication", q: "At generation zero (before transfer to ¹⁴N), DNA band:", options: ["Only light", "Only heavy", "Only hybrid", "Heavy and light"], correct: 1, explanation: "All DNA fully labelled with ¹⁵N = only heavy band." },

    { id: 228, topic: "DNA Replication", q: "Eukaryotic vs prokaryotic replication:", options: ["Eukaryotic DNA replicates during G₂", "Prokaryotic DNA has multiple origins", "Eukaryotic DNA replicates during S-phase", "Both replicate during M-phase"], correct: 2, explanation: "NCERT: eukaryotic replication at S-phase." },

    { id: 229, topic: "DNA Replication", q: "After 4 generations in ¹⁴N, how many light DNA molecules?", options: ["2", "8", "14", "16"], correct: 2, explanation: "Total=2⁴=16. Hybrid=2 (always). Light=16-2=14." },

    { id: 230, topic: "DNA Replication", q: "DNA polymerase ensures accurate replication through:", options: ["High speed", "High fidelity (accuracy)", "Initiating without primer", "Synthesizing in both directions"], correct: 1, explanation: "Polymerases catalyse with 'high degree of accuracy' — proofreading." },

    { id: 231, topic: "DNA Replication", q: "After 3 generations in ¹⁴N, hybrid and light DNA molecules:", options: ["4 hybrid, 4 light", "2 hybrid, 6 light", "6 hybrid, 2 light", "1 hybrid, 7 light"], correct: 1, explanation: "Total=8. Hybrid=2 (always). Light=8-2=6." },

    { id: 232, topic: "DNA Replication", q: "<b>Assertion (A):</b> Replication doesn't initiate randomly in E. coli DNA.<br><br><b>Reason (R):</b> There is a definite origin of replication.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Replication originates at a definite region. R explains A." },

    { id: 233, topic: "DNA Replication", q: "E. coli nucleotides polymerised per minute approximately:", options: ["~128,000", "~256,000", "~512,000", "~1,000,000"], correct: 1, explanation: "4.6×10⁶ / 18 min ≈ 256,000 bp/min." },

    // ===== SET 13: TRANSCRIPTION (Q234-Q298) =====
    { id: 234, topic: "Transcription", q: "Transcription is the process of:", options: ["Copying DNA from DNA", "Copying genetic information from DNA strand into RNA", "Synthesizing protein from mRNA", "Replicating entire DNA"], correct: 1, explanation: "Transcription = copying genetic information from one DNA strand into RNA." },

    { id: 235, topic: "Transcription", q: "During transcription, adenine on template pairs with:", options: ["Thymine", "Adenine", "Uracil", "Guanine"], correct: 2, explanation: "In transcription, adenine pairs with uracil (not thymine, as in RNA)." },

    { id: 236, topic: "Transcription", q: "Key difference between replication and transcription:", options: ["Replication copies segment; transcription duplicates entire DNA", "In replication total DNA duplicated; in transcription only segment and one strand", "Both duplicate entire DNA", "Transcription doesn't follow complementarity"], correct: 1, explanation: "Replication = total DNA. Transcription = only a segment, only one strand." },

    { id: 237, topic: "Transcription", q: "Why both strands NOT copied:<br>(i) Would code different RNA sequences<br>(ii) Two complementary RNAs form dsRNA<br>(iii) dsRNA prevents translation<br>(iv) Both strands code same protein<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iv)", "(ii) and (iii) only"], correct: 0, explanation: "(iv) is WRONG — they would code DIFFERENT proteins. (i), (ii), (iii) correct." },

    { id: 238, topic: "Transcription", q: "<b>Assertion (A):</b> If both strands transcribed, two complementary RNAs form dsRNA.<br><br><b>Reason (R):</b> dsRNA cannot be translated, making transcription futile.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "dsRNA prevents translation. R explains why formation of dsRNA is problematic." },

    { id: 239, topic: "Transcription", q: "Statement 1: Complementary strands have identical sequences.<br>Statement 2: Both strands would code for different proteins.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 2, explanation: "S1 is WRONG — complementary ≠ identical. S2 is correct." },

    { id: 240, topic: "Transcription", q: "A transcription unit has three regions:", options: ["Origin, Structural gene, Terminus", "Promoter, Structural gene, Terminator", "Enhancer, Intron, Exon", "Operator, Structural gene, Regulator"], correct: 1, explanation: "Promoter, Structural gene, and Terminator." },

    { id: 241, topic: "Transcription", q: "Template strand has polarity:", options: ["5'→3'", "3'→5'", "No specific polarity", "Both directions"], correct: 1, explanation: "Template strand has 3'→5' polarity (RNA polymerase reads 3'→5', synthesizes 5'→3')." },

    { id: 242, topic: "Transcription", q: "Coding strand is so called because:", options: ["It codes for RNA during transcription", "Has same sequence as RNA (except T for U)", "Acts as template for RNA polymerase", "Contains promoter sequence"], correct: 1, explanation: "Coding strand has same sequence as RNA (except T for U) but does NOT actually code." },

    { id: 243, topic: "Transcription", q: "Which is <b>incorrect</b> about coding strand?", options: ["Has polarity 5'→3'", "Same sequence as RNA (except T for U)", "Serves as template for RNA polymerase", "Is displaced during transcription"], correct: 2, explanation: "Coding strand does NOT serve as template — the template strand (3'→5') does." },

    { id: 244, topic: "Transcription", q: "The promoter is located:", options: ["Towards 3'-end (downstream)", "Towards 5'-end (upstream) of structural gene", "Within structural gene", "After terminator"], correct: 1, explanation: "Promoter is towards 5'-end (upstream) with respect to coding strand." },

    { id: 245, topic: "Transcription", q: "Promoter provides binding site for:", options: ["Ribosomes", "RNA polymerase", "DNA polymerase", "tRNA"], correct: 1, explanation: "Promoter provides binding site for RNA polymerase." },

    { id: 246, topic: "Transcription", q: "<b>Assertion (A):</b> Promoter defines template and coding strands.<br><br><b>Reason (R):</b> Switching promoter with terminator reverses the definitions.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Promoter position defines which strand is template. Switching reverses it." },

    { id: 247, topic: "Transcription", q: "Terminator is located towards:", options: ["5'-end (upstream)", "3'-end (downstream) of coding strand", "Middle of structural gene", "Within promoter"], correct: 1, explanation: "Terminator is towards 3'-end (downstream) of coding strand." },

    { id: 248, topic: "Transcription", q: "Given template 3'-ATGCATGCATGC-5', the RNA would be:", options: ["5'-UACGUACGUACG-3'", "5'-ATGCATGCATGC-3'", "3'-UACGUACGUACG-5'", "5'-TACGTACGTACG-3'"], correct: 0, explanation: "RNA synthesized 5'→3' reading template 3'→5'. A→U, T→A, G→C, C→G." },

    { id: 249, topic: "Transcription", q: "A cistron is:", options: ["Segment coding for tRNA", "Segment coding for a polypeptide", "Segment coding for rRNA only", "Entire chromosome"], correct: 1, explanation: "Cistron = segment of DNA coding for a polypeptide." },

    { id: 250, topic: "Transcription", q: "Structural genes in eukaryotes are mostly:", options: ["Polycistronic", "Monocistronic", "Without promoters", "Lacking introns"], correct: 1, explanation: "Monocistronic in eukaryotes; polycistronic in prokaryotes." },

    { id: 251, topic: "Transcription", q: "Consider:<br>(i) Exons appear in mature RNA<br>(ii) Introns don't appear in mature RNA<br>(iii) Split genes mainly in prokaryotes<br>(iv) Eukaryotic genes have interrupted coding<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii)", "All four", "(i) and (ii) only"], correct: 0, explanation: "(iii) is WRONG — split genes are in eukaryotes, not prokaryotes." },

    { id: 252, topic: "Transcription", q: "Exons are:", options: ["Sequences removed during splicing", "Sequences appearing in mature/processed RNA", "Intervening sequences", "Regulatory sequences upstream of promoter"], correct: 1, explanation: "Exons appear in mature or processed RNA." },

    { id: 253, topic: "Transcription", q: "<b>Assertion (A):</b> Regulatory sequences are called regulatory genes.<br><br><b>Reason (R):</b> Regulatory sequences code for regulatory proteins.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 2, explanation: "A is true but R is FALSE — regulatory sequences do NOT code for any RNA or protein." },

    // Continuing from Q254...
    { id: 254, topic: "Transcription", q: "Correct roles of three RNA types:", options: ["mRNA-template; tRNA-structural; rRNA-adapter", "mRNA-template; tRNA-adapter/reads code; rRNA-structural+catalytic", "mRNA-catalytic; tRNA-template; rRNA-adapter", "mRNA-adapter; tRNA-structural; rRNA-template"], correct: 1, explanation: "mRNA=template, tRNA=adapter (reads code, brings amino acids), rRNA=structural+catalytic." },

    { id: 255, topic: "Transcription", q: "In bacteria, all RNA types are transcribed by:", options: ["Three different RNA polymerases", "DNA-dependent DNA polymerase", "A single DNA-dependent RNA polymerase", "RNA-dependent RNA polymerase"], correct: 2, explanation: "Single DNA-dependent RNA polymerase in bacteria (vs 3 in eukaryotes)." },

    { id: 256, topic: "Transcription", q: "Three steps of transcription in correct order:", options: ["Elongation → Initiation → Termination", "Initiation → Termination → Elongation", "Initiation → Elongation → Termination", "Termination → Elongation → Initiation"], correct: 2, explanation: "Initiation → Elongation → Termination." },

    { id: 257, topic: "Transcription", q: "RNA polymerase alone is capable of catalysing only:", options: ["Initiation", "Elongation", "Termination", "All three steps"], correct: 1, explanation: "RNA polymerase alone can only do elongation. Needs σ for initiation, ρ for termination." },

    { id: 258, topic: "Transcription", q: "Sigma (σ) factor is associated with:", options: ["Termination", "Initiation", "Elongation", "Splicing"], correct: 1, explanation: "σ factor = initiation factor for transcription." },

    { id: 259, topic: "Transcription", q: "Rho (ρ) factor is involved in:", options: ["Initiation", "Elongation", "Termination", "Splicing"], correct: 2, explanation: "ρ factor = termination factor for transcription." },

    { id: 260, topic: "Transcription", q: "About transcription:<br>(i) RNA polymerase binds promoter<br>(ii) Uses nucleoside triphosphates as substrate<br>(iii) Facilitates helix opening<br>(iv) Can initiate without additional factors<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (ii) only", "(ii) and (iv) only"], correct: 0, explanation: "(iv) is WRONG — needs σ factor for initiation. (i), (ii), (iii) correct." },

    { id: 261, topic: "Transcription", q: "Coupled transcription-translation in bacteria because:", options: ["mRNA requires extensive processing", "No separation of cytosol and nucleus; mRNA needs no processing", "Bacteria have 3 RNA polymerases", "Bacteria have membrane-bound ribosomes"], correct: 1, explanation: "No nuclear membrane + no mRNA processing = coupled transcription-translation." },

    { id: 262, topic: "Transcription", q: "Match RNA polymerase with product in eukaryotes:<br>(i) Pol I → (ii) Pol II → (iii) Pol III<br>with (P) hnRNA (Q) tRNA/5S rRNA/snRNAs (R) rRNAs (28S,18S,5.8S)", options: ["(i)–R, (ii)–P, (iii)–Q", "(i)–P, (ii)–Q, (iii)–R", "(i)–Q, (ii)–R, (iii)–P", "(i)–R, (ii)–Q, (iii)–P"], correct: 0, explanation: "Pol I=rRNAs(R), Pol II=hnRNA(P), Pol III=tRNA/5S/snRNAs(Q)." },

    { id: 263, topic: "Transcription", q: "RNA Polymerase II transcribes:", options: ["rRNA (28S, 18S, 5.8S)", "tRNA and 5S rRNA", "Precursor of mRNA (hnRNA)", "snRNAs only"], correct: 2, explanation: "RNA Pol II transcribes hnRNA (heterogeneous nuclear RNA), precursor of mRNA." },

    { id: 264, topic: "Transcription", q: "Primary transcript (hnRNA) is non-functional because:", options: ["Lacks promoter", "Contains both exons and introns", "Too short", "Lacks nucleotides"], correct: 1, explanation: "hnRNA contains exons AND introns — introns must be removed by splicing." },

    { id: 265, topic: "Transcription", q: "Three processing steps for hnRNA → mature mRNA:", options: ["Splicing, Capping, Tailing", "Splicing, Replication, Translation", "Capping, Tailing, Replication", "Initiation, Elongation, Termination"], correct: 0, explanation: "Splicing (remove introns) + Capping (5' end) + Tailing (3' end)." },

    { id: 266, topic: "Transcription", q: "In capping, which molecule is added to 5'-end of hnRNA?", options: ["Poly-A tail", "Methyl guanosine triphosphate", "Adenylate residues", "Uridine monophosphate"], correct: 1, explanation: "Unusual nucleotide methyl guanosine triphosphate added to 5'-end." },

    { id: 267, topic: "Transcription", q: "In tailing, what is added to 3'-end?", options: ["Methyl guanosine triphosphate", "100-200 uridylate residues", "200-300 adenylate residues", "50-100 cytidylate residues"], correct: 2, explanation: "200-300 adenylate residues (poly-A tail) added at 3'-end, template-independent." },

    { id: 268, topic: "Transcription", q: "<b>Assertion (A):</b> Tailing is template-independent.<br><br><b>Reason (R):</b> Adenylate residues added without using DNA template.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Poly-A polymerase adds adenylates without reading a template. R explains A." },

    { id: 269, topic: "Transcription", q: "Splicing involves:", options: ["Addition of cap at 5'-end", "Removal of introns and joining of exons", "Addition of poly-A tail", "Removal of exons and joining of introns"], correct: 1, explanation: "Introns removed, exons joined. Option D is a classic trap." },

    { id: 270, topic: "Transcription", q: "Which RNA polymerase transcribes tRNA in eukaryotes?", options: ["RNA Pol I", "RNA Pol II", "RNA Pol III", "RNA Pol IV"], correct: 2, explanation: "RNA Pol III transcribes tRNA, 5S rRNA, and snRNAs." },

    { id: 271, topic: "Transcription", q: "About eukaryotic transcription:<br>(i) At least 3 RNA polymerases in nucleus<br>(ii) hnRNA = precursor of mRNA<br>(iii) Primary transcript is directly functional<br>(iv) Processing includes splicing, capping, tailing<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iii) is WRONG — primary transcript is NON-functional. Three correct." },

    { id: 272, topic: "Transcription", q: "Split-gene arrangement and splicing relate to:", options: ["Dominance of DNA world", "Dominance of RNA world", "Protein world hypothesis", "Central dogma only"], correct: 1, explanation: "NCERT: 'splicing represents the dominance of RNA-world.'" },

    { id: 273, topic: "Transcription", q: "Which rRNA is transcribed by RNA Pol III?", options: ["28S rRNA", "18S rRNA", "5.8S rRNA", "5S rRNA"], correct: 3, explanation: "Pol I = 28S, 18S, 5.8S. Pol III = 5S rRNA (+ tRNA, snRNAs)." },

    // ===== SET 14: GENETIC CODE (Q274-Q284) =====
    { id: 274, topic: "Genetic Code", q: "Triplet nature of genetic code was proposed by:", options: ["Har Gobind Khorana", "Marshall Nirenberg", "George Gamow", "Severo Ochoa"], correct: 2, explanation: "George Gamow (physicist) proposed triplet code." },

    { id: 275, topic: "Genetic Code", q: "Number of possible codons from 4 bases taken 3 at a time:", options: ["12", "16", "20", "64"], correct: 3, explanation: "4³ = 4 × 4 × 4 = 64 codons." },

    { id: 276, topic: "Genetic Code", q: "Cell-free system for protein synthesis was developed by:", options: ["George Gamow", "Har Gobind Khorana", "Marshall Nirenberg", "Severo Ochoa"], correct: 2, explanation: "Marshall Nirenberg's cell-free system helped decipher the code." },

    { id: 277, topic: "Genetic Code", q: "Polynucleotide phosphorylase (Ochoa's enzyme) was useful for:", options: ["DNA replication", "Enzymatic synthesis of RNA with defined sequences (template-independent)", "Protein synthesis", "DNA repair"], correct: 1, explanation: "Ochoa's enzyme polymerised RNA with defined sequences template-independently." },

    { id: 278, topic: "Genetic Code", q: "Features of genetic code:<br>(i) Triplet codon<br>(ii) Degenerate<br>(iii) Has punctuations between codons<br>(iv) Nearly universal<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "All four", "(i) and (iii)", "(ii) and (iv) only"], correct: 0, explanation: "(iii) is WRONG — NO punctuations. Code is read contiguously." },

    { id: 279, topic: "Genetic Code", q: "Genetic code is degenerate because:", options: ["One codon codes for more than one amino acid", "Some amino acids coded by more than one codon", "All 64 codons code for amino acids", "Code has punctuations"], correct: 1, explanation: "Degenerate = multiple codons for same amino acid (e.g., UUU and UUC both = Phe)." },

    { id: 280, topic: "Genetic Code", q: "AUG codon has dual function — codes for:", options: ["Methionine + stop codon", "Methionine + initiator codon", "Tryptophan + initiator codon", "Valine + stop codon"], correct: 1, explanation: "AUG = Methionine AND initiator codon." },

    { id: 281, topic: "Genetic Code", q: "Stop codons are:", options: ["AUG, UAA, UAG", "UAA, UAG, UGA", "AUG, UGA, UAG", "UAA, UGA, AUG"], correct: 1, explanation: "UAA, UAG, UGA are stop/termination codons. AUG = start codon." },

    { id: 282, topic: "Genetic Code", q: "Exceptions to universal genetic code found in:", options: ["Mitochondrial codons and some protozoans", "All bacteria and fungi", "All plants and animals", "Only viruses"], correct: 0, explanation: "Exceptions in mitochondrial codons and some protozoans." },

    { id: 283, topic: "Genetic Code", q: "<b>Assertion (A):</b> Genetic code is read contiguously without punctuations.<br><br><b>Reason (R):</b> No spacers or commas between successive codons.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Codons are read one after another without gaps. R explains A." },

    { id: 284, topic: "Genetic Code", q: "Chemical method for synthesising RNA with defined bases developed by:", options: ["Gamow", "Nirenberg", "Har Gobind Khorana", "Ochoa"], correct: 2, explanation: "Khorana developed chemical method for synthesising defined RNA molecules." },

    // ===== SET 15: MUTATIONS & GENETIC CODE (Q285-Q289) =====
    { id: 285, topic: "Mutations", q: "Sickle cell anemia involves:", options: ["Deletion of entire beta-globin gene", "Single base pair change: glutamate → valine", "Insertion of 3 bp in alpha-globin", "Duplication of beta-globin gene"], correct: 1, explanation: "Point mutation: single base pair change, glutamate replaced by valine." },

    { id: 286, topic: "Mutations", q: "Frameshift mutations are caused by:", options: ["Substitution of one base", "Insertion or deletion of one or two bases", "Insertion or deletion of three bases", "Inversion of gene segment"], correct: 1, explanation: "Insertion/deletion of 1 or 2 bases changes reading frame = frameshift." },

    { id: 287, topic: "Mutations", q: "Insertion/deletion of 3 bases doesn't cause frameshift because:", options: ["3 bases = one codon, only one amino acid added/removed, frame unaltered", "3 bases cancel out", "DNA repair corrects it", "3 bases don't form codon"], correct: 0, explanation: "3 bases = 1 codon. One amino acid inserted/deleted, reading frame remains intact." },

    { id: 288, topic: "Mutations", q: "AUG UUU UUC UUU — if 'A' inserted after AUG, reading frame becomes:", options: ["AUG AUU UUU CUU U...", "AUG UUU UUC UUU", "AUG UUU AUU CUU U...", "No change"], correct: 0, explanation: "Insertion shifts all subsequent bases: AUG-AUU-UUU-CUU-U... = frameshift." },

    { id: 289, topic: "Mutations", q: "Statement 1: Point mutations involve single base pair change.<br>Statement 2: ALL point mutations cause frameshift.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 1, explanation: "S2 is WRONG — substitutions don't cause frameshift. Only insertions/deletions do." },

    // ===== SET 16: tRNA ADAPTER MOLECULE (Q290-Q298) =====
    { id: 290, topic: "tRNA", q: "Adapter molecule concept was postulated by:", options: ["George Gamow", "Francis Crick", "Marshall Nirenberg", "Khorana"], correct: 1, explanation: "Francis Crick postulated the adapter molecule concept." },

    { id: 291, topic: "tRNA", q: "tRNA has two important sites:", options: ["Promoter and terminator", "Anticodon loop and amino acid acceptor end", "Origin of replication and coding region", "Exon and intron regions"], correct: 1, explanation: "Anticodon loop (reads code) + amino acid acceptor end (binds amino acid)." },

    { id: 292, topic: "tRNA", q: "Secondary structure of tRNA looks like:", options: ["Inverted L", "Clover-leaf", "Double helix", "Linear chain"], correct: 1, explanation: "Secondary structure = clover-leaf. Actual 3D structure = inverted L." },

    { id: 293, topic: "tRNA", q: "Actual 3D structure of tRNA resembles:", options: ["Clover-leaf", "Double helix", "Inverted L", "Circular molecule"], correct: 2, explanation: "Actual structure = inverted L (compact). Clover-leaf is secondary structure." },

    { id: 294, topic: "tRNA", q: "Which is <b>incorrect</b> about tRNA?", options: ["Specific for each amino acid", "Initiator tRNA exists", "Specific tRNAs for stop codons exist", "Anticodon loop has bases complementary to codon"], correct: 2, explanation: "NO tRNAs for stop codons. Stop codons recognized by release factors." },

    { id: 295, topic: "tRNA", q: "<b>Assertion (A):</b> Amino acids can't directly read genetic code.<br><br><b>Reason (R):</b> Amino acids have no structural specialities to read code; tRNA acts as adapter.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Amino acids can't read codons — tRNA bridges the gap. R explains A." },

    { id: 296, topic: "tRNA", q: "tRNA was earlier known as:", options: ["mRNA", "sRNA (soluble RNA)", "rRNA", "hnRNA"], correct: 1, explanation: "tRNA was called sRNA (soluble RNA)." },

    { id: 297, topic: "tRNA", q: "About tRNA:<br>(i) Anticodon complementary to codon<br>(ii) Amino acid acceptor at 3' end<br>(iii) Each tRNA specific for one amino acid<br>(iv) Initiator tRNA carries valine<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iv) is WRONG — initiator tRNA carries methionine (AUG). Three correct." },

    { id: 298, topic: "tRNA", q: "Match:<br>(i) Gamow (ii) Khorana (iii) Nirenberg (iv) Ochoa<br>with (P) Chemical RNA synthesis (Q) Triplet code (R) Polynucleotide phosphorylase (S) Cell-free system", options: ["(i)–Q, (ii)–P, (iii)–S, (iv)–R", "(i)–P, (ii)–Q, (iii)–R, (iv)–S", "(i)–Q, (ii)–R, (iii)–P, (iv)–S", "(i)–S, (ii)–P, (iii)–Q, (iv)–R"], correct: 0, explanation: "Gamow=Q, Khorana=P, Nirenberg=S, Ochoa=R." },

    // ===== SET 17: TRANSLATION (Q299-Q323) =====
    { id: 299, topic: "Translation", q: "Translation refers to:", options: ["Copying DNA to RNA", "Polymerisation of amino acids to form polypeptide", "Replication of DNA", "Splicing of hnRNA"], correct: 1, explanation: "Translation = polymerisation of amino acids to form polypeptide." },

    { id: 300, topic: "Translation", q: "Amino acid sequence defined by:", options: ["Sequence of amino acids in tRNA", "Sequence of bases in rRNA", "Sequence of bases in mRNA", "Structure of ribosomes"], correct: 2, explanation: "Order of amino acids defined by sequence of bases in mRNA." },

    { id: 301, topic: "Translation", q: "Bond joining amino acids in polypeptide:", options: ["Hydrogen bond", "Phosphodiester bond", "Glycosidic bond", "Peptide bond"], correct: 3, explanation: "Amino acids joined by peptide bonds." },

    { id: 302, topic: "Translation", q: "Charging of tRNA involves:", options: ["tRNA linking to ribosome with GTP", "Amino acid activation and linkage to cognate tRNA with ATP", "Removal of amino acids from tRNA", "Peptide bond formation"], correct: 1, explanation: "Amino acids activated with ATP and linked to cognate tRNA = aminoacylation." },

    { id: 303, topic: "Translation", q: "<b>Assertion (A):</b> Peptide bond formation is energetically favourable with charged tRNAs.<br><br><b>Reason (R):</b> Amino acids are already activated at cost of ATP during charging.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Prior activation explains why bond formation is energetically favourable." },

    { id: 304, topic: "Translation", q: "Ribosome consists of:", options: ["Only proteins (~80 types)", "Only structural RNAs", "Structural RNAs and about 80 different proteins", "DNA and proteins"], correct: 2, explanation: "Ribosome = structural RNAs + about 80 different proteins." },

    { id: 305, topic: "Translation", q: "In inactive state, ribosome exists as:", options: ["Single unit", "Two subunits (large + small)", "Three subunits", "Four subunits"], correct: 1, explanation: "Two subunits — large and small. They associate on mRNA during translation." },

    { id: 306, topic: "Translation", q: "Translation begins when:", options: ["Large subunit encounters mRNA", "Small subunit encounters mRNA", "Both subunits simultaneously bind", "tRNA binds ribosome first"], correct: 1, explanation: "NCERT: 'When the small subunit encounters an mRNA, translation begins.'" },

    { id: 307, topic: "Translation", q: "Two sites for amino acid binding are in:", options: ["Small subunit", "Large subunit", "mRNA", "tRNA"], correct: 1, explanation: "Two sites in large subunit for amino acids to bind (A-site and P-site)." },

    { id: 308, topic: "Translation", q: "Peptide bond formation catalysed by:", options: ["DNA polymerase", "RNA polymerase", "23S rRNA (ribozyme) in bacteria", "Protein enzymes only"], correct: 2, explanation: "23S rRNA = ribozyme = catalyses peptide bond formation." },

    { id: 309, topic: "Translation", q: "<b>Assertion (A):</b> Ribosome is cellular factory for protein synthesis.<br><br><b>Reason (R):</b> Provides structure, catalytic activity (ribozyme), and binding sites.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Ribosome has structural RNAs, proteins, binding sites, and catalytic rRNA. R explains A." },

    { id: 310, topic: "Translation", q: "About ribosomes:<br>(i) Structural RNAs + ~80 proteins<br>(ii) Small subunit has 2 amino acid binding sites<br>(iii) 23S rRNA = ribozyme<br>(iv) Exists as single unit when inactive<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(ii) WRONG — 2 sites in LARGE subunit. (iv) WRONG — 2 subunits. Only (i) and (iii) correct = 2." },

    { id: 311, topic: "Translation", q: "Translational unit in mRNA is:", options: ["Entire mRNA including UTRs", "Sequence flanked by start (AUG) and stop codon", "Only 5'-UTR", "Only poly-A tail"], correct: 1, explanation: "Translational unit = start codon to stop codon." },

    { id: 312, topic: "Translation", q: "UTRs are present:", options: ["Only at 5'-end", "Only at 3'-end", "At both 5'-end (before start) and 3'-end (after stop)", "Within coding sequence"], correct: 2, explanation: "UTRs at both ends — 5'-UTR (before AUG) and 3'-UTR (after stop codon)." },

    { id: 313, topic: "Translation", q: "Role of UTRs:", options: ["Code for additional amino acids", "Act as introns", "Required for efficient translation", "Serve as origin of replication"], correct: 2, explanation: "UTRs are required for efficient translation but are not translated." },

    { id: 314, topic: "Translation", q: "Initiation: ribosome binds at:", options: ["Any random AUG", "Start codon (AUG) recognised by initiator tRNA", "Stop codon", "3'-UTR"], correct: 1, explanation: "Ribosome binds at start codon (AUG) recognised only by initiator tRNA." },

    { id: 315, topic: "Translation", q: "During elongation:", options: ["Amino acids removed one by one", "Amino acid-tRNA complexes bind to codons via anticodon base pairing", "Ribosome remains stationary", "Release factors bind"], correct: 1, explanation: "Amino acid-tRNA complexes bind to appropriate codons through complementary anticodons." },

    { id: 316, topic: "Translation", q: "Translation terminated when:", options: ["Ribosome reaches 5'-end", "ATP depleted", "Release factor binds to stop codon", "Initiator tRNA detaches"], correct: 2, explanation: "Release factor binds to stop codon, terminating translation." },

    { id: 317, topic: "Translation", q: "Correct sequence during translation:<br>(i) Release factor at stop codon<br>(ii) Ribosome binds mRNA at AUG<br>(iii) Amino acids added as ribosome moves<br>(iv) Initiator tRNA recognises AUG", options: ["(ii)→(iv)→(iii)→(i)", "(iv)→(ii)→(i)→(iii)", "(iii)→(ii)→(iv)→(i)", "(i)→(ii)→(iii)→(iv)"], correct: 0, explanation: "Ribosome binds AUG → initiator tRNA → elongation → release factor at stop." },

    { id: 318, topic: "Translation", q: "<b>Assertion (A):</b> Stop codons don't code for amino acids.<br><br><b>Reason (R):</b> Release factors (not tRNAs) recognize stop codons.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "No tRNAs for stop codons. Release factors recognize them. R explains A." },

    { id: 319, topic: "Translation", q: "Which is <b>incorrect</b> about translation?", options: ["Ribosome moves codon to codon along mRNA", "Amino acids added per mRNA sequence", "Small subunit has 2 amino acid binding sites", "Polypeptide released at stop codon"], correct: 2, explanation: "2 binding sites are in LARGE subunit, not small." },

    { id: 320, topic: "Translation", q: "Statement 1: Ribosome is both structural framework and catalyst.<br>Statement 2: 23S rRNA catalyses peptide bond (ribozyme).", options: ["Both correct, S2 explains S1", "Both correct, S2 doesn't explain S1", "Only S1 correct", "Only S2 correct"], correct: 0, explanation: "23S rRNA provides the molecular basis for catalytic function described in S1." },

    { id: 321, topic: "Translation", q: "Match:<br>(i) Charging tRNA (ii) Initiation (iii) Elongation (iv) Termination<br>with (P) Release factor (Q) AA + tRNA + ATP (R) Small subunit at AUG (S) AAs added one by one", options: ["(i)–Q, (ii)–R, (iii)–S, (iv)–P", "(i)–R, (ii)–Q, (iii)–P, (iv)–S", "(i)–S, (ii)–P, (iii)–Q, (iv)–R", "(i)–Q, (ii)–S, (iii)–R, (iv)–P"], correct: 0, explanation: "Charging=Q, Initiation=R, Elongation=S, Termination=P." },

    { id: 322, topic: "Translation", q: "Polypeptide sequences dictated by:", options: ["DNA directly", "rRNA", "DNA represented through mRNA", "tRNA sequences"], correct: 2, explanation: "Dictated by DNA and represented by mRNA." },

    { id: 323, topic: "Translation", q: "Aminoacylation of tRNA is also known as:", options: ["Translation", "Transcription", "Charging of tRNA", "Splicing"], correct: 2, explanation: "Charging of tRNA = aminoacylation of tRNA." },

    // ===== SET 18: REGULATION OF GENE EXPRESSION (Q324-Q343) =====
    { id: 324, topic: "Gene Regulation", q: "In eukaryotes, gene expression regulated at:", options: ["Transcriptional level only", "Translational level only", "Transcriptional, processing, transport, and translational levels", "Only processing level"], correct: 2, explanation: "Four levels in eukaryotes: transcriptional, processing, transport, translational." },

    { id: 325, topic: "Gene Regulation", q: "In prokaryotes, predominant control site:", options: ["Translational level", "Processing level", "Transport of mRNA", "Transcriptional initiation"], correct: 3, explanation: "Control of rate of transcriptional initiation = predominant site in prokaryotes." },

    { id: 326, topic: "Gene Regulation", q: "Beta-galactosidase catalyses:", options: ["Synthesis of lactose", "Hydrolysis of lactose into galactose and glucose", "Glucose to galactose conversion", "Polymerisation of galactose"], correct: 1, explanation: "Hydrolysis of disaccharide lactose → galactose + glucose." },

    { id: 327, topic: "Gene Regulation", q: "About gene regulation:<br>(i) Metabolic/physiological/environmental conditions regulate expression<br>(ii) Development involves coordinated regulation<br>(iii) Gene expression is always constitutive<br>(iv) Prokaryotic regulation mainly at transcriptional initiation<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "All four", "(i) and (iii)", "(ii) and (iv) only"], correct: 0, explanation: "(iii) is WRONG — expression is tightly regulated, not always constitutive." },

    { id: 328, topic: "Gene Regulation", q: "<b>Assertion (A):</b> E. coli won't make β-galactosidase without lactose.<br><br><b>Reason (R):</b> Enzyme synthesis regulated by metabolic/environmental conditions.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "No lactose = no need for enzyme. Regulation based on conditions. R explains A." },

    { id: 329, topic: "Gene Regulation", q: "Regulatory proteins in prokaryotes act as:", options: ["Only activators (positive)", "Only repressors (negative)", "Both activators and repressors", "Neither"], correct: 2, explanation: "Regulatory proteins can be positive (activators) or negative (repressors)." },

    { id: 330, topic: "Gene Regulation", q: "Operator region in prokaryotic operon is:", options: ["Far from promoter", "Adjacent to promoter in most operons", "Part of structural gene", "At 3'-end of mRNA"], correct: 1, explanation: "Operator is adjacent to promoter elements in most operons." },

    { id: 331, topic: "Gene Regulation", q: "Operator-repressor interaction:", options: ["All operons share common operator and repressor", "Each operon has specific operator and specific repressor", "Operators bind only activators", "Repressors bind to terminator"], correct: 1, explanation: "Each operon has its SPECIFIC operator and SPECIFIC repressor." },

    { id: 332, topic: "Gene Regulation", q: "About lac operon:<br>(i) Lac operator only in lac operon<br>(ii) Lac repressor only interacts with lac operator<br>(iii) Lac operator binds repressors from other operons<br>(iv) Beta-galactosidase hydrolyses lactose<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii)", "All four", "(i) and (iv) only"], correct: 0, explanation: "(iii) is WRONG — lac operator only interacts with lac repressor specifically." },

    { id: 333, topic: "Gene Regulation", q: "RNA polymerase activity at promoter regulated by:", options: ["DNA polymerase", "Accessory proteins (activators and repressors)", "tRNA molecules", "Ribosomes"], correct: 1, explanation: "Interaction with accessory proteins affects ability to recognise start sites." },

    { id: 334, topic: "Gene Regulation", q: "Select <b>incorrect</b> statement:", options: ["Eukaryotes: 4 levels of regulation", "Prokaryotes: transcriptional initiation is main point", "Repressor proteins always activate expression", "Environmental conditions regulate expression"], correct: 2, explanation: "Repressors INHIBIT expression (negative regulation), they don't activate." },

    { id: 335, topic: "Gene Regulation", q: "Correct sequence of regulatory elements in prokaryotic operon:", options: ["Terminator → Gene → Operator → Promoter", "Promoter → Operator → Structural gene → Terminator", "Operator → Promoter → Terminator → Gene", "Gene → Promoter → Operator → Terminator"], correct: 1, explanation: "Promoter → Operator → Structural gene(s) → Terminator." },

    { id: 336, topic: "Gene Regulation", q: "<b>Assertion (A):</b> Operator binds repressor in most operons.<br><br><b>Reason (R):</b> Repressor binding blocks RNA polymerase from transcribing.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Repressor on operator physically blocks RNA polymerase. R explains A." },

    { id: 337, topic: "Gene Regulation", q: "Statement 1: Processing-level regulation possible in eukaryotes only.<br>Statement 2: Prokaryotic mRNA needs no processing; eukaryotic hnRNA does.", options: ["Both correct, S2 explains S1", "Both correct, S2 doesn't explain S1", "S1 correct, S2 incorrect", "Both incorrect"], correct: 0, explanation: "Prokaryotic mRNA is directly functional. Eukaryotic needs processing. S2 explains S1." },

    { id: 338, topic: "Gene Regulation", q: "Development/differentiation of embryo results from:", options: ["Random gene expression", "Coordinated regulation of several gene sets", "Expression of only one gene", "Suppression of all expression"], correct: 1, explanation: "Coordinated regulation of expression of several sets of genes." },

    { id: 339, topic: "Gene Regulation", q: "Which regulation levels NOT applicable to prokaryotes?", options: ["(i) Transcriptional only", "(ii) Processing and (iii) Transport of mRNA", "(i), (ii) and (iii)", "(ii), (iii) and (iv) Translational"], correct: 1, explanation: "Prokaryotes lack nuclear compartment (no transport regulation) and mRNA needs no processing." },

    { id: 340, topic: "Gene Regulation", q: "Negative regulation of gene expression:", options: ["Activator binds promoter, enhances transcription", "Repressor binds operator, blocks transcription", "Sigma factor initiates transcription", "Release factor terminates translation"], correct: 1, explanation: "Negative = repressor binds operator → blocks transcription." },

    { id: 341, topic: "Gene Regulation", q: "Without lactose, E. coli:", options: ["Constitutively makes β-galactosidase", "Does not require β-galactosidase synthesis", "Makes more β-galactosidase", "Switches to different operon"], correct: 1, explanation: "No lactose = no need = operon repressed." },

    { id: 342, topic: "Gene Regulation", q: "About lac operon specificity:<br>(i) Lac operator in multiple operons<br>(ii) Lac repressor only interacts with lac operator<br>(iii) β-galactosidase is lac operon enzyme<br>(iv) Operator adjacent to promoter<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(i) is WRONG — lac operator only in lac operon. (ii), (iii), (iv) correct = 3." },

    { id: 343, topic: "Gene Regulation", q: "Gene expression related to cellular function:", options: ["All genes expressed all times in all cells", "Genes expressed for specific functions, regulated by need", "Completely random", "Only structural genes active"], correct: 1, explanation: "Genes expressed for particular functions, regulated by conditions." },

    // ===== SET 19: LAC OPERON (Q344-Q388) =====
    { id: 344, topic: "Lac Operon", q: "Lac operon was elucidated by:", options: ["Watson and Crick", "Meselson and Stahl", "Francois Jacob and Jacque Monod", "Hershey and Chase"], correct: 2, explanation: "Jacob (geneticist) and Monod (biochemist) elucidated the lac operon." },

    { id: 345, topic: "Lac Operon", q: "An operon is:", options: ["Single gene with own promoter", "Polycistronic structural gene regulated by common promoter and regulatory genes", "Cluster of unrelated genes on different chromosomes", "Genes never expressed together"], correct: 1, explanation: "Operon = polycistronic structural gene + common promoter + regulatory genes." },

    { id: 346, topic: "Lac Operon", q: "The 'i' gene derives its name from:", options: ["Inducer", "Inhibitor", "Initiator", "Integrator"], correct: 1, explanation: "i = INHIBITOR (not inducer). It codes for repressor protein. Classic NEET trap." },

    { id: 347, topic: "Lac Operon", q: "The i gene codes for:", options: ["Beta-galactosidase", "Permease", "Repressor protein", "Transacetylase"], correct: 2, explanation: "i gene codes for the repressor of lac operon." },

    { id: 348, topic: "Lac Operon", q: "Match structural genes with products:<br>(i) z (ii) y (iii) a<br>with (P) Transacetylase (Q) β-galactosidase (R) Permease", options: ["(i)–Q, (ii)–R, (iii)–P", "(i)–R, (ii)–P, (iii)–Q", "(i)–P, (ii)–Q, (iii)–R", "(i)–Q, (ii)–P, (iii)–R"], correct: 0, explanation: "z=β-galactosidase(Q), y=permease(R), a=transacetylase(P)." },

    { id: 349, topic: "Lac Operon", q: "β-galactosidase catalyses:", options: ["Increased cell permeability", "Hydrolysis of lactose → galactose + glucose", "Acetylation of lactose", "Synthesis of lactose"], correct: 1, explanation: "z gene product hydrolyses lactose into galactose and glucose." },

    { id: 350, topic: "Lac Operon", q: "y gene product (permease) function:", options: ["Hydrolyse lactose", "Increase cell permeability to β-galactosides", "Repress operon", "Acetylate galactosides"], correct: 1, explanation: "Permease increases permeability of cell to β-galactosides." },

    { id: 351, topic: "Lac Operon", q: "All three gene products are required for:", options: ["DNA replication", "Transcription of other operons", "Metabolism of lactose", "Amino acid synthesis"], correct: 2, explanation: "All three needed for lactose metabolism." },

    { id: 352, topic: "Lac Operon", q: "Lactose acts as inducer because:", options: ["Directly activates RNA polymerase", "Is substrate for β-galactosidase and regulates switching on/off", "Destroys structural genes", "Enhances repressor synthesis"], correct: 1, explanation: "Lactose = substrate AND inducer — regulates the operon." },

    { id: 353, topic: "Lac Operon", q: "About lac operon:<br>(i) Repressor synthesised constitutively from i gene<br>(ii) Without lactose, repressor binds operator, blocks transcription<br>(iii) With lactose, repressor inactivated by inducer<br>(iv) Repressor synthesised only when lactose present<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iv)", "(ii) and (iii) only"], correct: 0, explanation: "(iv) is WRONG — repressor made ALL THE TIME (constitutively). (i), (ii), (iii) correct." },

    { id: 354, topic: "Lac Operon", q: "<b>Assertion (A):</b> Repressor is synthesised constitutively.<br><br><b>Reason (R):</b> i gene is always expressed regardless of lactose.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "i gene is always active → repressor always made. R explains A." },

    { id: 355, topic: "Lac Operon", q: "Without lactose, lac operon is:", options: ["ON — all genes transcribed", "OFF — repressor binds operator, blocks RNA polymerase", "Partially active — only z transcribed", "Completely degraded"], correct: 1, explanation: "Repressor binds operator → prevents RNA polymerase → operon OFF." },

    { id: 356, topic: "Lac Operon", q: "With lactose/allolactose, operon ON because:", options: ["Lactose directly activates RNA polymerase", "Inducer inactivates repressor → RNA polymerase accesses promoter", "Lactose degrades operator", "i gene stops producing repressor"], correct: 1, explanation: "Inducer inactivates repressor → RNA polymerase accesses promoter → transcription." },

    { id: 357, topic: "Lac Operon", q: "Which can act as inducer for lac operon?", options: ["Glucose", "Galactose", "Lactose or allolactose", "Sucrose"], correct: 2, explanation: "NCERT: only lactose or allolactose. Glucose/galactose CANNOT." },

    { id: 358, topic: "Lac Operon", q: "Which CANNOT act as inducer?", options: ["Lactose", "Allolactose", "Glucose", "Both A and B can"], correct: 2, explanation: "Glucose and galactose cannot act as inducers for lac operon." },

    { id: 359, topic: "Lac Operon", q: "<b>Assertion (A):</b> Low basal expression of lac operon always present.<br><br><b>Reason (R):</b> Without some permease, lactose can't enter cell to act as inducer.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Some permease needed for lactose entry. R explains why basal expression is essential." },

    { id: 360, topic: "Lac Operon", q: "Lac operon regulation can be viewed as:", options: ["Regulation by product", "Regulation of enzyme synthesis by its substrate", "Regulation by temperature", "Regulation by DNA methylation"], correct: 1, explanation: "Lactose (substrate) regulates β-galactosidase (enzyme) synthesis." },

    { id: 361, topic: "Lac Operon", q: "Regulation by repressor is:", options: ["Positive regulation", "Negative regulation", "Post-translational regulation", "Processing-level regulation"], correct: 1, explanation: "Repressor inhibits transcription = negative regulation." },

    { id: 362, topic: "Lac Operon", q: "About operons in bacteria:<br>(i) Genes function in same/related pathway<br>(ii) Common in bacteria<br>(iii) Examples: lac, trp, ara, his, val<br>(iv) Common in eukaryotes too<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iii)", "(ii) and (iv)"], correct: 0, explanation: "(iv) is WRONG — operons are characteristic of prokaryotes." },

    { id: 363, topic: "Lac Operon", q: "Lac operon consists of:", options: ["1 regulatory + 1 structural gene", "1 regulatory + 3 structural genes", "3 regulatory + 1 structural gene", "2 regulatory + 2 structural genes"], correct: 1, explanation: "One regulatory gene (i) and three structural genes (z, y, a)." },

    { id: 364, topic: "Lac Operon", q: "Correct sequence of lac operon components:", options: ["i gene → Promoter → Operator → z → y → a", "Promoter → i gene → z → y → a → Operator", "z → y → a → Promoter → Operator → i gene", "Operator → Promoter → i gene → a → y → z"], correct: 0, explanation: "i gene → Promoter → Operator → z → y → a." },

    { id: 365, topic: "Lac Operon", q: "Statement 1: i gene named after 'inducer'.<br>Statement 2: i gene codes for repressor protein.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 2, explanation: "S1 is WRONG — i = inhibitor, NOT inducer. S2 is correct." },

    { id: 366, topic: "Lac Operon", q: "When inducer binds repressor, the repressor:", options: ["Becomes more active", "Is inactivated, can't bind operator", "Degrades structural genes", "Activates DNA polymerase"], correct: 1, explanation: "Repressor is inactivated by inducer → can't bind operator → transcription proceeds." },

    { id: 367, topic: "Lac Operon", q: "If i gene mutated (non-functional repressor), operon would be:", options: ["Permanently OFF", "Constitutively expressed (always ON)", "Expressed only with lactose", "Unable to produce mRNA"], correct: 1, explanation: "No functional repressor → operator always free → operon always ON." },

    { id: 368, topic: "Lac Operon", q: "<b>Assertion (A):</b> Glucose cannot induce lac operon.<br><br><b>Reason (R):</b> Only lactose/allolactose interact with and inactivate repressor.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Only lactose/allolactose can inactivate repressor. R explains A." },

    { id: 369, topic: "Lac Operon", q: "Consider:<br>(i) Repressor binds operator → OFF<br>(ii) Inducer inactivates repressor → ON<br>(iii) RNA polymerase binds OPERATOR to initiate<br>(iv) Permease transports lactose<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iii) is WRONG — RNA polymerase binds PROMOTER (not operator). Three correct." },

    { id: 370, topic: "Lac Operon", q: "Lac operon expressed as long as:", options: ["Glucose present", "Lactose present (as inducer)", "Repressor is active", "i gene is mutated"], correct: 1, explanation: "Expressed as long as inducer (lactose) keeps repressor inactive." },

    { id: 371, topic: "Lac Operon", q: "Which is <b>incorrect</b> about lac operon?", options: ["i gene → repressor", "z gene → β-galactosidase", "y gene → transacetylase", "a gene → transacetylase"], correct: 2, explanation: "y gene → PERMEASE (not transacetylase). a gene → transacetylase." },

    { id: 372, topic: "Lac Operon", q: "If operator mutated (repressor can't bind), operon would be:", options: ["Never expressed", "Only with lactose", "Constitutively expressed (always ON)", "Produces only repressor"], correct: 2, explanation: "No repressor binding → RNA polymerase always has access → always ON." },

    { id: 373, topic: "Lac Operon", q: "Jacob was a _____ and Monod was a _____:", options: ["Both geneticists", "Both biochemists", "Geneticist; biochemist", "Both physicists"], correct: 2, explanation: "Jacob = geneticist; Monod = biochemist." },

    { id: 374, topic: "Lac Operon", q: "Lactose present → Inducer binds repressor → Repressor _____ → RNA polymerase _____ → Genes _____", options: ["Activated → Blocked → Not transcribed", "Inactivated → Accesses promoter → Transcribed", "Degraded → Inhibited → Transcribed", "Inactivated → Blocked → Not transcribed"], correct: 1, explanation: "Inactivated → accesses promoter → transcribed." },

    { id: 375, topic: "Lac Operon", q: "Statement 1: Lac structural genes are polycistronic.<br>Statement 2: Single mRNA from all three genes together.", options: ["Both correct, S2 explains S1", "Both correct, S2 doesn't explain S1", "Only S1 correct", "Only S2 correct"], correct: 0, explanation: "Polycistronic = multiple genes on one mRNA. S2 explains what polycistronic means." },

    { id: 376, topic: "Lac Operon", q: "<b>Assertion (A):</b> Lac operon under negative regulation.<br><br><b>Reason (R):</b> Repressor binds operator, inhibits transcription.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Repressor inhibiting transcription = negative regulation. R explains A." },

    { id: 377, topic: "Lac Operon", q: "If promoter deleted, result:", options: ["Constitutive expression", "No transcription of structural genes", "Overproduction of repressor", "Lactose can't enter"], correct: 1, explanation: "No promoter → RNA polymerase can't bind → no transcription." },

    { id: 378, topic: "Lac Operon", q: "Products in correct order (z, y, a):", options: ["Transacetylase, Permease, β-galactosidase", "β-galactosidase, Permease, Transacetylase", "Permease, β-galactosidase, Transacetylase", "β-galactosidase, Transacetylase, Permease"], correct: 1, explanation: "z=β-gal, y=permease, a=transacetylase." },

    { id: 379, topic: "Lac Operon", q: "Super-repressor (can't be inactivated by inducer) would make operon:", options: ["Constitutively expressed", "Permanently OFF even with lactose", "Expressed normally", "Expressed only without lactose"], correct: 1, explanation: "Super-repressor always bound to operator → permanently OFF. HOTs question." },

    { id: 380, topic: "Lac Operon", q: "<b>Incorrect</b> match:", options: ["i gene – Repressor", "z gene – β-galactosidase", "y gene – Transacetylase", "a gene – Transacetylase"], correct: 2, explanation: "y gene = PERMEASE, not transacetylase." },

    { id: 381, topic: "Lac Operon", q: "Which operon example NOT mentioned in NCERT?", options: ["lac operon", "trp operon", "ara operon", "gal operon"], correct: 3, explanation: "NCERT mentions lac, trp, ara, his, val operons. Not gal operon." },

    { id: 382, topic: "Lac Operon", q: "Preferred carbon source for E. coli:", options: ["Lactose", "Galactose", "Glucose", "Sucrose"], correct: 2, explanation: "NCERT mentions 'preferred carbon source such as glucose.'" },

    { id: 383, topic: "Lac Operon", q: "Correct sequence when lactose available:<br>(i) Repressor binds operator<br>(ii) Lactose enters via permease<br>(iii) Inducer inactivates repressor<br>(iv) RNA polymerase transcribes<br>(v) Repressor constitutively produced", options: ["(v)→(i)→(ii)→(iii)→(iv)", "(ii)→(v)→(iii)→(i)→(iv)", "(v)→(ii)→(iii)→(iv)", "(ii)→(iii)→(v)→(iv)→(i)"], correct: 2, explanation: "Repressor made(v) → lactose enters(ii) → inactivates repressor(iii) → transcription(iv)." },

    { id: 384, topic: "Lac Operon", q: "<b>Assertion (A):</b> Lac operon also under positive regulation.<br><br><b>Reason (R):</b> Positive regulation involves CAP and cAMP.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "NCERT mentions positive regulation exists. CAP-cAMP is the mechanism." },

    { id: 385, topic: "Lac Operon", q: "Correct statement about lac operon:", options: ["All 3 genes code for unrelated pathways", "Repressor produced only without lactose", "Galactose acts as inducer", "All 3 products needed for lactose metabolism"], correct: 3, explanation: "All three gene products required for metabolism of lactose." },

    { id: 386, topic: "Lac Operon", q: "Number of structural genes in lac operon:", options: ["1", "2", "3", "4"], correct: 2, explanation: "Three structural genes: z, y, a. Plus one regulatory gene (i)." },

    { id: 387, topic: "Lac Operon", q: "Conditions and operon status:<br>(i) Lactose present, glucose absent → ON<br>(ii) Lactose absent → OFF<br>(iii) Glucose present, lactose absent → ON<br>(iv) Lactose present, repressor mutated → ON<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "All four", "(i) and (iii)", "(ii) and (iv) only"], correct: 0, explanation: "(iii) WRONG — no lactose = no inducer = OFF regardless of glucose." },

    { id: 388, topic: "Lac Operon", q: "'Constitutive' in context of repressor means:", options: ["Produced only with lactose", "Produced all the time regardless of conditions", "Never produced", "Produced only during cell division"], correct: 1, explanation: "Constitutive = always expressed, independent of environmental conditions." },

    // ===== SET 20: HUMAN GENOME PROJECT (Q389-Q443) =====
    { id: 389, topic: "Human Genome Project", q: "HGP launched in:", options: ["1953", "1986", "1990", "2003"], correct: 2, explanation: "Launched in 1990, completed in 2003." },

    { id: 390, topic: "Human Genome Project", q: "HGP was a project of ___ years:", options: ["10", "13", "15", "20"], correct: 1, explanation: "13-year project (1990-2003)." },

    { id: 391, topic: "Human Genome Project", q: "Estimated cost of HGP:", options: ["3 billion USD", "6 billion USD", "9 billion USD", "12 billion USD"], correct: 2, explanation: "3 × 10⁹ bp × \$3/bp = \$9 billion." },

    { id: 392, topic: "Human Genome Project", q: "HGP coordinated by:", options: ["WHO and UNESCO", "US DOE and NIH", "Wellcome Trust and NIH only", "Japanese Genome Institute"], correct: 1, explanation: "US Department of Energy and National Institute of Health." },

    { id: 393, topic: "Human Genome Project", q: "New biology area closely associated with HGP:", options: ["Proteomics", "Bioinformatics", "Metabolomics", "Epigenetics"], correct: 1, explanation: "HGP closely associated with Bioinformatics." },

    { id: 394, topic: "Human Genome Project", q: "Goals of HGP:<br>(i) Identify ~20,000-25,000 genes<br>(ii) Determine 3 billion bp<br>(iii) Store in databases<br>(iv) Address ELSI<br><br>Which were goals?", options: ["(i) and (ii) only", "(i), (ii) and (iii)", "All of the above", "(i) and (iv) only"], correct: 2, explanation: "All four are explicitly stated goals." },

    { id: 395, topic: "Human Genome Project", q: "Estimated genes in human DNA:", options: ["80,000-1,40,000", "50,000-60,000", "20,000-25,000", "5,000-10,000"], correct: 2, explanation: "~20,000-25,000 genes. Previous estimates of 80,000-1,40,000 were overestimates." },

    { id: 396, topic: "Human Genome Project", q: "<b>Assertion (A):</b> HGP needed high-speed computational devices.<br><br><b>Reason (R):</b> Enormous data required sophisticated storage/analysis tools.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "3 billion bp of data needed computers. R explains A." },

    { id: 397, topic: "Human Genome Project", q: "ELSI stands for:", options: ["Expressed Loci Sequence Information", "Ethical, Legal, and Social Issues", "Enzymatic Ligation and Sequencing Initiative", "Expressed Sequence Tag Loci Identification"], correct: 1, explanation: "Ethical, Legal, and Social Issues." },

    { id: 398, topic: "Human Genome Project", q: "Books needed to store human genome (1000 letters/page, 1000 pages/book):", options: ["330", "3,300", "33,000", "330,000"], correct: 1, explanation: "3.3 × 10⁹ / (1000 × 1000) = 3,300 books." },

    { id: 399, topic: "Human Genome Project", q: "NOT mentioned as model organism in NCERT:", options: ["C. elegans", "Drosophila", "Mus musculus (mouse)", "Arabidopsis"], correct: 2, explanation: "NCERT mentions bacteria, yeast, C. elegans, Drosophila, rice, Arabidopsis. Not mouse." },

    { id: 400, topic: "Human Genome Project", q: "C. elegans is:", options: ["Pathogenic bacterium", "Free-living non-pathogenic nematode", "Fruit fly", "Flowering plant"], correct: 1, explanation: "C. elegans = free living non-pathogenic nematode." },

    { id: 401, topic: "Human Genome Project", q: "Two major methodological approaches:", options: ["PCR and gel electrophoresis", "EST and Sequence Annotation", "Restriction mapping and Southern blotting", "Cloning and transformation"], correct: 1, explanation: "Expressed Sequence Tags (ESTs) and Sequence Annotation." },

    { id: 402, topic: "Human Genome Project", q: "EST refers to:", options: ["All non-coding sequences", "Identifying genes expressed as RNA", "Random genomic fragments", "Repetitive DNA sequences"], correct: 1, explanation: "EST = identifying all genes expressed as RNA." },

    { id: 403, topic: "Human Genome Project", q: "Sequence Annotation refers to:", options: ["Sequencing only coding regions", "Sequencing whole genome, later assigning functions", "Annotating only repetitive sequences", "Identifying only SNPs"], correct: 1, explanation: "Blind sequencing of entire genome + later function assignment." },

    { id: 404, topic: "Human Genome Project", q: "Vectors used in HGP:", options: ["Plasmids and cosmids", "BAC and YAC", "Phage vectors only", "Expression vectors only"], correct: 1, explanation: "BAC (Bacterial Artificial Chromosomes) and YAC (Yeast Artificial Chromosomes)." },

    { id: 405, topic: "Human Genome Project", q: "Common hosts for cloning in HGP:", options: ["Human cells and plants", "Bacteria and yeast", "Animal cells and fungi", "Viruses and algae"], correct: 1, explanation: "Bacteria and yeast were commonly used hosts." },

    { id: 406, topic: "Human Genome Project", q: "DNA sequencing method developed by:", options: ["Maxam and Gilbert", "Frederick Sanger", "Khorana", "Watson and Crick"], correct: 1, explanation: "Sanger developed the sequencing method. Also credited for amino acid sequencing." },

    { id: 407, topic: "Human Genome Project", q: "<b>Assertion (A):</b> Sanger developed both DNA and protein sequencing methods.<br><br><b>Reason (R):</b> Sanger won two Nobel Prizes in Chemistry.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 1, explanation: "Both true, but R doesn't explain WHY he developed both methods." },

    { id: 408, topic: "Human Genome Project", q: "Sequenced fragments assembled using:", options: ["Manual alignment", "Overlapping regions and computer programs", "Random ligation", "Hybridisation probes only"], correct: 1, explanation: "Overlapping regions + specialised computer-based programs." },

    { id: 409, topic: "Human Genome Project", q: "Last human chromosome sequenced (May 2006):", options: ["Chromosome 22", "Chromosome X", "Chromosome 1", "Chromosome Y"], correct: 2, explanation: "Chromosome 1 was the last to be sequenced. Classic trap." },

    { id: 410, topic: "Human Genome Project", q: "Total human chromosomes sequenced:", options: ["22", "23", "24", "46"], correct: 2, explanation: "24 chromosomes: 22 autosomes + X + Y." },

    { id: 411, topic: "Human Genome Project", q: "Microsatellites used in genetic mapping are:", options: ["Large coding genes", "Repetitive DNA sequences showing polymorphism", "Non-repetitive regulatory sequences", "SNPs"], correct: 1, explanation: "Repetitive DNA sequences showing polymorphism." },

    { id: 412, topic: "Human Genome Project", q: "Total bp in human genome:", options: ["3.3 × 10⁹ bp", "3164.7 million bp", "4.6 × 10⁶ bp", "6.6 × 10⁹ bp"], correct: 1, explanation: "3164.7 million bp (precise value from HGP)." },

    { id: 413, topic: "Human Genome Project", q: "Average gene size:", options: ["300 bases", "3,000 bases", "30,000 bases", "300,000 bases"], correct: 1, explanation: "Average gene = 3000 bases." },

    { id: 414, topic: "Human Genome Project", q: "Largest known human gene:", options: ["Insulin", "Hemoglobin", "Dystrophin", "Collagen"], correct: 2, explanation: "Dystrophin at 2.4 million bases." },

    { id: 415, topic: "Human Genome Project", q: "Total genes estimated by HGP:", options: ["80,000", "1,40,000", "30,000", "3,00,000"], correct: 2, explanation: "~30,000 genes — much lower than previous estimates." },

    { id: 416, topic: "Human Genome Project", q: "Percentage of nucleotide bases same in all humans:", options: ["90%", "95%", "99.9%", "100%"], correct: 2, explanation: "99.9% same. Only 0.1% accounts for individual differences." },

    { id: 417, topic: "Human Genome Project", q: "Functions unknown for what % of discovered genes?", options: ["Less than 10%", "About 25%", "Over 50%", "Over 90%"], correct: 2, explanation: "Over 50% of discovered genes have unknown functions." },

    { id: 418, topic: "Human Genome Project", q: "What % of genome codes for proteins?", options: ["Less than 2%", "About 25%", "About 50%", "More than 90%"], correct: 0, explanation: "Less than 2% codes for proteins. Over 98% is non-coding." },

    { id: 419, topic: "Human Genome Project", q: "About human genome:<br>(i) <2% codes for proteins<br>(ii) Repeated sequences = large portion<br>(iii) All genes have known functions<br>(iv) 99.9% bases same in all humans<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "All four", "(i) and (iii)", "(ii) and (iv)"], correct: 0, explanation: "(iii) is WRONG — over 50% have unknown functions." },

    { id: 420, topic: "Human Genome Project", q: "Repetitive sequences in genome:", options: ["Have direct coding functions", "Have no direct coding function; shed light on chromosome structure/dynamics/evolution", "Make up <1% of genome", "Found only on Y chromosome"], correct: 1, explanation: "No direct coding functions, but important for chromosome structure/evolution." },

    { id: 421, topic: "Human Genome Project", q: "Chromosome with most genes:", options: ["Chromosome X", "Chromosome 22", "Chromosome 1", "Chromosome Y"], correct: 2, explanation: "Chromosome 1 has most genes (2968)." },

    { id: 422, topic: "Human Genome Project", q: "Chromosome with fewest genes:", options: ["Chromosome 22", "Chromosome X", "Chromosome 1", "Y chromosome"], correct: 3, explanation: "Y chromosome has fewest genes (231)." },

    { id: 423, topic: "Human Genome Project", q: "SNPs are:", options: ["Repeated sequences (thousands of times)", "Single base DNA differences at ~1.4 million locations", "Large deletions", "Transposable element insertions"], correct: 1, explanation: "1.4 million locations of single base DNA differences." },

    { id: 424, topic: "Human Genome Project", q: "<b>Assertion (A):</b> Total genes (~30,000) much lower than expected.<br><br><b>Reason (R):</b> &lt;2% of genome codes for proteins; majority is non-coding.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Low protein-coding percentage explains low gene count. R explains A." },

    // ===== TOPIC 29: DNA FINGERPRINTING (Q425–Q464) =====
    { id: 425, topic: "DNA Fingerprinting", q: "What percentage of base sequences differ among humans?", options: ["0.001%", "0.01%", "0.1%", "1%"], correct: 2, explanation: "NCERT: '99.9 per cent of base sequence among humans is the same.' Therefore, 0.1% differs. With 3 × 10⁹ bp, this means approximately 3 × 10⁶ (3 million) base pairs differ between two individuals." },

    { id: 426, topic: "DNA Fingerprinting", q: "Assuming the human genome is 3 × 10⁹ bp, the number of base pair differences between two individuals would be approximately:", options: ["3 × 10³", "3 × 10⁶", "3 × 10⁹", "3 × 10⁴"], correct: 1, explanation: "0.1% of 3 × 10⁹ = 0.001 × 3 × 10⁹ = 3 × 10⁶ (3 million) base pairs. This is the basis for individual uniqueness." },

    { id: 427, topic: "DNA Fingerprinting", q: "DNA fingerprinting involves identifying differences in:", options: ["Coding sequences of DNA", "Repetitive DNA sequences", "Mitochondrial DNA only", "Ribosomal RNA genes"], correct: 1, explanation: "NCERT: 'DNA fingerprinting involves identifying differences in some specific regions in DNA sequence called as repetitive DNA, because in these sequences, a small stretch of DNA is repeated many times.'" },

    { id: 428, topic: "DNA Fingerprinting", q: "Satellite DNA is separated from bulk genomic DNA by:", options: ["Gel electrophoresis", "Density gradient centrifugation", "Paper chromatography", "PCR amplification"], correct: 1, explanation: "NCERT: 'These repetitive DNA are separated from bulk genomic DNA as different peaks during density gradient centrifugation.' The bulk DNA forms a major peak, while satellite DNA forms smaller peaks." },

    { id: 429, topic: "DNA Fingerprinting", q: "Satellite DNA is classified based on:", options: ["Base composition, length of segment, and number of repetitive units", "Only base composition", "Only the number of genes it contains", "Its location in mitochondria"], correct: 0, explanation: "NCERT: 'Depending on base composition (A:T rich or G:C rich), length of segment, and number of repetitive units, the satellite DNA is classified into many categories, such as micro-satellites, mini-satellites etc.'" },

    { id: 430, topic: "DNA Fingerprinting", q: "Consider the following about satellite DNA:<br>(i) They normally do not code for any proteins.<br>(ii) They form a large portion of the human genome.<br>(iii) They show high degree of polymorphism.<br>(iv) They code for essential enzymes.<br><br>Which are correct?", options: ["(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iii) only"], correct: 0, explanation: "Statement (iv) is INCORRECT — satellite DNA sequences 'normally do not code for any proteins.' Statements (i), (ii), and (iii) are directly from NCERT." },

    { id: 431, topic: "DNA Fingerprinting", q: "DNA fingerprinting is useful in forensic applications because:", options: ["DNA sequence varies from tissue to tissue in an individual", "DNA from every tissue of an individual shows the same degree of polymorphism", "Only blood DNA can be used for fingerprinting", "DNA polymorphisms are not inheritable"], correct: 1, explanation: "NCERT: 'Since DNA from every tissue (such as blood, hair-follicle, skin, bone, saliva, sperm etc.), from an individual show the same degree of polymorphism, they become very useful identification tool in forensic applications.'" },

    { id: 432, topic: "DNA Fingerprinting", q: "DNA fingerprinting is the basis of paternity testing because:", options: ["DNA polymorphisms are not inherited", "Polymorphisms are inheritable from parents to children", "All individuals have the same DNA fingerprint", "Paternity can only be determined by blood group analysis"], correct: 1, explanation: "NCERT: 'as the polymorphisms are inheritable from parents to children, DNA fingerprinting is the basis of paternity testing, in case of disputes.'" },

    { id: 433, topic: "DNA Fingerprinting", q: "A DNA polymorphism is defined as a variant (allele) at a locus that occurs in a human population with a frequency greater than:", options: ["0.001", "0.01", "0.1", "0.5"], correct: 1, explanation: "NCERT: 'a DNA polymorphism if more than one variant (allele) at a locus occurs in human population with a frequency greater than 0.01.'" },

    { id: 434, topic: "DNA Fingerprinting", q: "<b>Assertion (A):</b> The probability of polymorphism is higher in non-coding DNA sequences.<br><br><b>Reason (R):</b> Mutations in non-coding DNA may not have any immediate effect on an individual's reproductive ability.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT: 'The probability of such variation to be observed in non-coding DNA sequence would be higher as mutations in these sequences may not have any immediate effect/impact in an individual\'s reproductive ability.' These mutations accumulate over generations. R correctly explains A." },

    { id: 435, topic: "DNA Fingerprinting", q: "DNA polymorphism ultimately arises due to:", options: ["Recombination only", "Mutations", "Transcription errors", "Translation errors"], correct: 1, explanation: "NCERT: 'Polymorphism (variation at genetic level) arises due to mutations.'" },

    { id: 436, topic: "DNA Fingerprinting", q: "For a germ cell mutation to spread to other members of a population, it must:", options: ["Occur in somatic cells", "Seriously impair reproductive ability", "Not seriously impair the individual's ability to have offspring who can transmit the mutation", "Be lethal to the individual"], correct: 2, explanation: "NCERT: 'If a germ cell mutation does not seriously impair individual\'s ability to have offspring who can transmit the mutation, it can spread to the other members of population (through sexual reproduction).'" },

    { id: 437, topic: "DNA Fingerprinting", q: "The technique of DNA Fingerprinting was initially developed by:", options: ["Frederick Sanger", "Alec Jeffreys", "Francis Crick", "Francois Jacob"], correct: 1, explanation: "NCERT: 'The technique of DNA Fingerprinting was initially developed by Alec Jeffreys.'" },

    { id: 438, topic: "DNA Fingerprinting", q: "The probe used by Alec Jeffreys for DNA fingerprinting was:", options: ["Microsatellite DNA", "Variable Number of Tandem Repeats (VNTR)", "Single Nucleotide Polymorphism (SNP)", "Expressed Sequence Tags (ESTs)"], correct: 1, explanation: "NCERT: 'He used a satellite DNA as probe that shows very high degree of polymorphism. It was called as Variable Number of Tandem Repeats (VNTR).'" },

    { id: 439, topic: "DNA Fingerprinting", q: "VNTR belongs to a class of satellite DNA referred to as:", options: ["Microsatellite", "Minisatellite", "Macrosatellite", "Megasatellite"], correct: 1, explanation: "NCERT: 'The VNTR belongs to a class of satellite DNA referred to as mini-satellite.' This is a frequently tested NEET fact — students often confuse VNTR with microsatellite." },

    { id: 440, topic: "DNA Fingerprinting", q: "The correct sequence of steps in DNA fingerprinting is:", options: ["Isolation of DNA → Electrophoresis → Digestion by restriction endonucleases → Blotting → Hybridisation → Autoradiography", "Isolation of DNA → Digestion by restriction endonucleases → Electrophoresis → Blotting → Hybridisation → Autoradiography", "Digestion → Isolation → Blotting → Electrophoresis → Hybridisation → Autoradiography", "Hybridisation → Isolation → Digestion → Electrophoresis → Blotting → Autoradiography"], correct: 1, explanation: "NCERT lists the steps as: (i) Isolation of DNA, (ii) Digestion by restriction endonucleases, (iii) Separation by electrophoresis, (iv) Blotting (transfer to nitrocellulose/nylon membrane), (v) Hybridisation with labelled VNTR probe, (vi) Autoradiography. This exact sequence is frequently tested." },

    { id: 441, topic: "DNA Fingerprinting", q: "In DNA fingerprinting, separated DNA fragments are transferred to:", options: ["Agar plates", "Synthetic membranes such as nitrocellulose or nylon", "Glass slides", "Filter paper"], correct: 1, explanation: "NCERT: 'transferring (blotting) of separated DNA fragments to synthetic membranes, such as nitrocellulose or nylon.' This is the Southern blotting step." },

    { id: 442, topic: "DNA Fingerprinting", q: "The technique used for DNA fingerprinting involves:", options: ["Northern blot hybridisation", "Western blot hybridisation", "Southern blot hybridisation using radiolabelled VNTR as a probe", "Eastern blot hybridisation"], correct: 2, explanation: "NCERT: 'The technique...involved Southern blot hybridisation using radiolabelled VNTR as a probe.'" },

    { id: 443, topic: "DNA Fingerprinting", q: "The size of VNTR varies from:", options: ["0.01 to 2 kb", "0.1 to 20 kb", "1 to 200 kb", "10 to 2000 kb"], correct: 1, explanation: "NCERT: 'the size of VNTR varies in size from 0.1 to 20 kb.' This variation is due to different numbers of tandem repeat copies." },

    { id: 444, topic: "DNA Fingerprinting", q: "Consider the following:<br>(i) VNTR copy number varies from chromosome to chromosome in an individual.<br>(ii) The number of repeats shows a very high degree of polymorphism.<br>(iii) After hybridisation, the autoradiogram gives many bands of differing sizes.<br>(iv) The band pattern is the same for all individuals in a population.<br><br>Which are correct?", options: ["(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (iv) only", "(ii) and (iii) only"], correct: 0, explanation: "Statement (iv) is INCORRECT — NCERT: 'These bands give a characteristic pattern for an individual DNA...It differs from individual to individual in a population except in the case of monozygotic (identical) twins.' Statements (i), (ii), and (iii) are correct." },

    { id: 445, topic: "DNA Fingerprinting", q: "The DNA fingerprint pattern is the same in:", options: ["All siblings", "Dizygotic (fraternal) twins", "Monozygotic (identical) twins", "Parent and offspring"], correct: 2, explanation: "NCERT: 'It differs from individual to individual in a population except in the case of monozygotic (identical) twins.' Identical twins have identical DNA, hence identical fingerprints." },

    { id: 446, topic: "DNA Fingerprinting", q: "<b>Assertion (A):</b> DNA fingerprinting can be performed even from a single cell.<br><br><b>Reason (R):</b> The sensitivity of the technique has been increased by the use of polymerase chain reaction (PCR).", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT: 'The sensitivity of the technique has been increased by use of polymerase chain reaction (PCR). Consequently, DNA from a single cell is enough to perform DNA fingerprinting analysis.' PCR amplifies the tiny amount of DNA, making analysis possible. R correctly explains A." },

    { id: 447, topic: "DNA Fingerprinting", q: "Which of the following tissues can be used for DNA fingerprinting?", options: ["Only blood", "Only hair follicle", "Blood, hair-follicle, skin, bone, saliva, sperm, etc.", "Only sperm cells"], correct: 2, explanation: "NCERT lists: 'blood, hair-follicle, skin, bone, saliva, sperm etc.' Any tissue can be used because DNA polymorphism is the same across all tissues of an individual." },

    { id: 448, topic: "DNA Fingerprinting", q: "Select the incorrect statement about DNA fingerprinting:", options: ["It works on the principle of polymorphism in DNA sequences", "VNTR is a type of minisatellite", "The band pattern is identical in all members of a family", "It has applications in forensic science and paternity testing"], correct: 2, explanation: "The band pattern is NOT identical in all family members — each individual has a unique pattern (except identical twins). While children inherit bands from both parents, the overall pattern is unique to each individual." },

    { id: 449, topic: "DNA Fingerprinting", q: "Which of the following is the correct full form of VNTR?", options: ["Variable Nucleotide Tandem Regions", "Variable Number of Tandem Repeats", "Very Numerous Tandem Replications", "Variable Non-coding Tandem Regions"], correct: 1, explanation: "NCERT: 'It was called as Variable Number of Tandem Repeats (VNTR).'" },

    { id: 450, topic: "DNA Fingerprinting", q: "In VNTR, the term 'tandem' means:", options: ["The repeats are scattered throughout the genome", "A small DNA sequence is arranged one after another in series", "The repeats are found on only one chromosome", "The repeats are in reverse orientation"], correct: 1, explanation: "NCERT: 'A small DNA sequence is arranged tandemly in many copy numbers.' Tandem means arranged in series, one after another, in the same orientation." },

    { id: 451, topic: "DNA Fingerprinting", q: "DNA polymorphism plays a very important role in:", options: ["DNA replication only", "Transcription only", "Evolution and speciation", "Translation only"], correct: 2, explanation: "NCERT: 'For evolution and speciation, such polymorphisms play very important role.'" },

    { id: 452, topic: "DNA Fingerprinting", q: "Consider the following applications of DNA fingerprinting:<br>(i) Forensic science<br>(ii) Paternity testing<br>(iii) Determining population and genetic diversities<br>(iv) Determining the exact amino acid sequence of a protein<br><br>Which are correct?", options: ["(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(iv) only"], correct: 0, explanation: "Statement (iv) is INCORRECT — DNA fingerprinting determines DNA-level variations, NOT amino acid sequences of proteins. Statements (i), (ii), and (iii) are correct per NCERT." },

    { id: 453, topic: "DNA Fingerprinting", q: "Statement 1: Mutations in non-coding DNA accumulate over generations.<br>Statement 2: These accumulated mutations form one of the bases of variability/polymorphism.", options: ["Both are correct and Statement 2 explains Statement 1", "Both are correct but Statement 2 does not explain Statement 1", "Only Statement 1 is correct", "Only Statement 2 is correct"], correct: 1, explanation: "Both statements are correct per NCERT: 'These mutations keep on accumulating generation after generation, and form one of the basis of variability/polymorphism.' However, Statement 2 does not explain Statement 1 — rather it describes the consequence of accumulated mutations." },

    { id: 454, topic: "DNA Fingerprinting", q: "The bulk DNA during density gradient centrifugation forms:", options: ["Multiple small peaks", "A single major peak", "No peak at all", "Only satellite peaks"], correct: 1, explanation: "NCERT: 'The bulk DNA forms a major peak and the other small peaks are referred to as satellite DNA.'" },

    { id: 455, topic: "DNA Fingerprinting", q: "Match Column I with Column II:<br><br>Column I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Column II<br>(i) VNTR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (P) Developed DNA fingerprinting<br>(ii) Alec Jeffreys &nbsp;&nbsp; (Q) Minisatellite<br>(iii) Southern blot &nbsp; (R) 0.1 to 20 kb<br>(iv) VNTR size range (S) Hybridisation technique used in fingerprinting", options: ["(i)–Q, (ii)–P, (iii)–S, (iv)–R", "(i)–P, (ii)–Q, (iii)–R, (iv)–S", "(i)–R, (ii)–S, (iii)–P, (iv)–Q", "(i)–S, (ii)–R, (iii)–Q, (iv)–P"], correct: 0, explanation: "VNTR = minisatellite (Q); Alec Jeffreys = developed DNA fingerprinting (P); Southern blot = hybridisation technique (S); VNTR size = 0.1–20 kb (R)." },

    { id: 456, topic: "DNA Fingerprinting", q: "<b>Assertion (A):</b> Satellite DNA sequences show a high degree of polymorphism and form the basis of DNA fingerprinting.<br><br><b>Reason (R):</b> Satellite DNA does not code for proteins, and mutations in these regions have no effect on reproductive ability.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "Satellite DNA is non-coding, so mutations accumulate freely without affecting fitness. This leads to high polymorphism, which is the basis of DNA fingerprinting. R correctly explains why satellite DNA shows high polymorphism (A)." },

    { id: 457, topic: "DNA Fingerprinting", q: "Which of the following describes the relationship between mutations and DNA polymorphism?", options: ["All mutations become polymorphisms", "If an inheritable mutation occurs at high frequency (>0.01) in a population, it is called DNA polymorphism", "Polymorphisms occur only in coding regions", "Somatic cell mutations are always transmitted to offspring"], correct: 1, explanation: "NCERT: 'if an inheritable mutation is observed in a population at high frequency, it is referred to as DNA polymorphism.' The frequency threshold is >0.01. Not all mutations become polymorphisms — only those that spread through the population." },

    { id: 458, topic: "DNA Fingerprinting", q: "Which step in DNA fingerprinting involves cutting DNA into fragments?", options: ["Electrophoresis", "Blotting", "Digestion by restriction endonucleases", "Autoradiography"], correct: 2, explanation: "Step (ii) of DNA fingerprinting as per NCERT: 'digestion of DNA by restriction endonucleases.' Restriction enzymes cut DNA at specific recognition sites, producing fragments of different sizes." },

    { id: 459, topic: "DNA Fingerprinting", q: "The final step in DNA fingerprinting that produces the visible band pattern is:", options: ["Electrophoresis", "Blotting", "Hybridisation", "Autoradiography"], correct: 3, explanation: "NCERT lists step (vi) as: 'detection of hybridised DNA fragments by autoradiography.' The autoradiogram shows bands of different sizes that form the DNA fingerprint." },

    { id: 460, topic: "DNA Fingerprinting", q: "Consider the following:<br>(i) Satellite DNA = non-coding repetitive sequences<br>(ii) VNTR = a type of microsatellite<br>(iii) DNA fingerprinting was developed by Alec Jeffreys<br>(iv) Band pattern is unique for each individual except identical twins<br><br>How many are correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "Statement (ii) is INCORRECT — VNTR belongs to minisatellite class, NOT microsatellite. This is one of the most common NEET traps. Statements (i), (iii), and (iv) are correct. So 3 are correct." },

    { id: 461, topic: "DNA Fingerprinting", q: "In DNA fingerprinting, the probe used for hybridisation is:", options: ["Unlabelled genomic DNA", "Radiolabelled VNTR", "mRNA", "tRNA"], correct: 1, explanation: "NCERT: 'It involved Southern blot hybridisation using radiolabelled VNTR as a probe.'" },

    { id: 462, topic: "DNA Fingerprinting", q: "The number of VNTR copies varies:", options: ["Only between different species", "From chromosome to chromosome in an individual", "Only between males and females", "Only between parents and offspring"], correct: 1, explanation: "NCERT: 'The copy number varies from chromosome to chromosome in an individual.' This variation in copy number leads to different-sized fragments and hence different band patterns." },

    { id: 463, topic: "DNA Fingerprinting", q: "Statement 1: DNA polymorphism is the basis of both genetic mapping and DNA fingerprinting.<br>Statement 2: Both techniques exploit variations in DNA sequences among individuals.", options: ["Both are correct and Statement 2 explains Statement 1", "Both are correct but Statement 2 does not explain Statement 1", "Only Statement 1 is correct", "Both are incorrect"], correct: 0, explanation: "NCERT: 'As polymorphism in DNA sequence is the basis of genetic mapping of human genome as well as of DNA fingerprinting.' Both rely on DNA sequence variations (polymorphisms). Statement 2 correctly explains why polymorphism is central to both techniques." },

    { id: 464, topic: "DNA Fingerprinting", q: "Which of the following is incorrect about DNA fingerprinting?", options: ["It can differentiate between monozygotic twins", "It works on the principle of DNA polymorphism", "VNTR shows high degree of polymorphism", "DNA from any tissue can be used"], correct: 0, explanation: "NCERT: band pattern 'differs from individual to individual except in the case of monozygotic (identical) twins.' Identical twins have identical DNA fingerprints, so DNA fingerprinting CANNOT differentiate between them." },

    // ===== TOPIC 30: COMPREHENSIVE SUMMARY-BASED MCQs (Q465–Q479) =====
    { id: 465, topic: "Chapter Summary", q: "Which of the following is the first genetic material to have evolved?", options: ["DNA", "RNA", "Protein", "Lipids"], correct: 1, explanation: "NCERT Summary: 'RNA is the first to evolve and DNA was derived from RNA.' This is the RNA World hypothesis." },

    { id: 466, topic: "Chapter Summary", q: "A segment of DNA that codes for RNA may be referred to as:", options: ["Operon", "Gene", "Codon", "Cistron only"], correct: 1, explanation: "NCERT Summary: 'A segment of DNA that codes for RNA may in a simplistic term can be referred as gene.' Note: The DNA coding for tRNA or rRNA also defines a gene." },

    { id: 467, topic: "Chapter Summary", q: "Consider the following statements from the chapter summary:<br>(i) DNA is chemically and structurally more stable than RNA.<br>(ii) The hallmark of DNA double helix is H-bonding between bases.<br>(iii) DNA replication is conservative.<br>(iv) The genetic code is read in triplets.<br><br>Which are correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii) only", "All four", "(i) and (iv) only"], correct: 0, explanation: "Statement (iii) is INCORRECT — DNA replication is semiconservative, not conservative. Statements (i), (ii), and (iv) are correct per NCERT Summary." },

    { id: 468, topic: "Chapter Summary", q: "<b>Assertion (A):</b> In bacteria, mRNA can be directly translated without processing.<br><br><b>Reason (R):</b> Bacterial genes do not contain introns, so the transcribed mRNA is functional.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT Summary: 'In bacteria, the transcribed mRNA is functional, hence can directly be translated.' This is because bacterial genes lack introns (no splicing needed). R correctly explains A." },

    { id: 469, topic: "Chapter Summary", q: "Which of the following statements correctly relates life and RNA?", options: ["Life began around DNA", "Translation is a process that evolved around RNA, indicating life began around RNA", "Life began around proteins", "RNA has no catalytic role in translation"], correct: 1, explanation: "NCERT Summary: 'Translation is a process that has evolved around RNA, indicating that life began around RNA.' rRNA catalyses peptide bond (ribozyme), tRNA reads code, mRNA provides template — all RNA-based." },

    { id: 470, topic: "Chapter Summary", q: "Regulation of gene expression in bacteria is primarily at the level of:", options: ["Translation", "Splicing", "Transcription", "Transport of mRNA"], correct: 2, explanation: "NCERT Summary: 'Regulation of transcription is the primary step for regulation of gene expression.' In bacteria, operons regulate gene expression at the transcriptional level." },

    { id: 471, topic: "Chapter Summary", q: "Consider the following comprehensive statements:<br>(i) DNA stores genetic information; RNA mostly helps in transfer and expression.<br>(ii) A-T pair has 2 H-bonds; G-C pair has 3 H-bonds.<br>(iii) In eukaryotes, genes are split into exons and introns.<br>(iv) There are specific tRNAs for every stop codon.<br><br>How many are correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "Statement (iv) is INCORRECT — there are no tRNAs for stop codons. Stop codons are recognized by release factors. Statements (i), (ii), and (iii) are all correct per NCERT." },

    { id: 472, topic: "Chapter Summary", q: "The lac operon regulation can also be viewed as:", options: ["Regulation of DNA replication by enzymes", "Regulation of enzyme synthesis by its substrate", "Regulation of translation by ribosomes", "Regulation of splicing by snRNAs"], correct: 1, explanation: "NCERT Summary: 'this regulation can also be viewed as regulation of enzyme synthesis by its substrate.' Lactose (substrate) induces the lac operon to produce beta-galactosidase (enzyme)." },

    { id: 473, topic: "Chapter Summary", q: "Select the correct combination of features unique to eukaryotic gene expression:", options: ["Split genes, hnRNA processing, polycistronic mRNA", "Split genes, splicing, capping, tailing", "No introns, coupled transcription-translation", "Single RNA polymerase, polycistronic mRNA"], correct: 1, explanation: "Eukaryotic features: split genes (exons + introns), splicing (intron removal), capping (5' methyl guanosine triphosphate), tailing (3' poly-A). Polycistronic mRNA and single RNA polymerase are prokaryotic features. Coupled transcription-translation is also prokaryotic." },

    { id: 474, topic: "Chapter Summary", q: "<b>Assertion (A):</b> Transcription and translation are energetically very expensive processes.<br><br><b>Reason (R):</b> Because of the high energy cost, these processes have to be tightly regulated.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT Summary: 'transcription and translation are energetically very expensive processes, these have to be tightly regulated.' The energy cost is the reason for tight regulation. R correctly explains A." },

    { id: 475, topic: "Chapter Summary", q: "An example of RNA enzyme (ribozyme) mentioned in NCERT is:", options: ["DNA polymerase", "RNA polymerase", "rRNA that catalyses peptide bond formation", "Restriction endonuclease"], correct: 2, explanation: "NCERT Summary: 'One of the rRNA acts as a catalyst for peptide bond formation, which is an example of RNA enzyme (ribozyme).' Specifically, 23S rRNA in bacteria." },

    { id: 476, topic: "Chapter Summary", q: "Which of the following statements best summarizes the central theme of the chapter?", options: ["Proteins are the primary genetic material", "DNA stores genetic information, RNA helps in its transfer and expression, and these processes are tightly regulated", "RNA is always more stable than DNA", "All genes are constitutively expressed"], correct: 1, explanation: "NCERT Summary: 'While DNA stores genetic information, RNA mostly helps in transfer and expression of information.' The chapter covers DNA structure, replication, transcription, translation, regulation (lac operon), HGP, and DNA fingerprinting." },

    { id: 477, topic: "Chapter Summary", q: "Consider the following pairs and select the incorrect match:", options: ["Repetitive DNA – Satellite DNA", "VNTR – Microsatellite", "DNA fingerprinting – Alec Jeffreys", "Southern blotting – DNA transfer to membrane"], correct: 1, explanation: "VNTR belongs to minisatellite, NOT microsatellite. This is one of the most frequently tested traps in NEET from this chapter. All other matches are correct." },

    { id: 478, topic: "Chapter Summary", q: "A somatic cell mutation:", options: ["Can be transmitted to offspring through sexual reproduction", "Cannot be transmitted to the next generation", "Always causes DNA polymorphism", "Is always lethal"], correct: 1, explanation: "NCERT: 'New mutations may arise in an individual either in somatic cells or in the germ cells.' Only germ cell mutations can be transmitted to offspring. Somatic cell mutations affect only the individual and cannot be inherited." },

    { id: 479, topic: "Chapter Summary", q: "Which of the following is correct about DNA fingerprinting?", options: ["It works on the principle of polymorphism in DNA sequences", "It can differentiate between identical twins", "VNTR is a type of microsatellite", "Only coding DNA shows polymorphism"], correct: 0, explanation: "NCERT Summary: 'DNA Fingerprinting...works on the principle of polymorphism in DNA sequences.' (B) is wrong — cannot differentiate identical twins. (C) is wrong — VNTR = minisatellite. (D) is wrong — non-coding DNA has higher polymorphism." },

    // ===== SET 21: GENE DEFINITION & FINE STRUCTURE (Q480-Q485) =====
    { id: 480, topic: "Gene", q: "As per NCERT, a gene is defined as:", options: ["Only the sequence of DNA that codes for a protein", "A segment of DNA that codes for RNA (or a polypeptide)", "Any stretch of DNA on a chromosome", "A sequence coding exclusively for mRNA"], correct: 1, explanation: "NCERT: 'A segment of DNA that codes for RNA may in a simplistic term be referred to as a gene.' This includes tRNA genes, rRNA genes, and protein-coding genes. The definition is broader than 'codes for protein'." },

    { id: 481, topic: "Gene", q: "Which of the following genes do NOT code for protein but still qualify as genes?", options: ["z, y, a genes of lac operon", "Structural genes of trp operon", "tRNA and rRNA genes", "i gene of lac operon"], correct: 2, explanation: "NCERT states that even segments of DNA that code for tRNA and rRNA qualify as genes. Genes don't exclusively code for proteins. The i gene, z, y, a genes all code for proteins." },

    { id: 482, topic: "Gene", q: "Which of the following statements about genes is INCORRECT?", options: ["Genes code for polypeptides", "Genes code for tRNA", "Genes code for rRNA", "Genes are always translated into proteins"], correct: 3, explanation: "Not all genes are translated — tRNA genes and rRNA genes are transcribed but NOT translated. Translation is specific to protein-coding genes. Options A, B, C are all valid gene types." },

    { id: 483, topic: "Transcription", q: "The coding strand of a DNA template has the sequence 5'-ATGCCA-3'. What amino acids start will be encoded in the mRNA?", options: ["AUG-CCU (Met-Pro)", "UAC-GGU (Tyr-Gly)", "AUG-GGU (Met-Gly)", "UAC-GGT (Tyr-Gly)"], correct: 0, explanation: "The coding strand sequence = mRNA sequence (with U replacing T). So mRNA = 5'-AUGCCA-3' → codons AUG (Met) and CCA (Pro). Option B has uracil in DNA — not possible. Option D has T in mRNA — not possible." },

    { id: 484, topic: "Transcription", q: "Assertion (A): The coding strand of DNA has the same sequence as the RNA transcript (with T replaced by U).<br>Reason (R): The coding strand is not used as template; it has the same polarity and sequence as the transcribed RNA.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "Coding strand = non-template strand = same sequence as RNA (except T→U). Template strand is 3'→5' and is read by RNA polymerase. Coding strand is 5'→3' = same as RNA. R explains A." },

    { id: 485, topic: "Gene Regulation", q: "Which of the following best describes the concept of 'constitutive' gene expression?", options: ["Gene expressed only in presence of inducer", "Gene expressed at all times regardless of cellular conditions", "Gene expressed only in absence of repressor", "Gene expressed only during S-phase"], correct: 1, explanation: "Constitutive expression = always ON, not regulated by inducer/repressor. The lac repressor gene (i gene) is constitutively expressed. This is fundamentally different from regulated/inducible expression." },

    // ===== SET 22: HUMAN GENOME PROJECT — DEEPER QUESTIONS (Q486-Q492) =====
    { id: 486, topic: "Human Genome Project", q: "The strategy NOT used in HGP was:", options: ["Expressed Sequence Tags (ESTs)", "Sequence Annotation", "Polymerase Chain Reaction (PCR)", "Electrophoresis to separate DNA fragments"], correct: 2, explanation: "NCERT describes ESTs (for gene identification) and sequence annotation as HGP strategies. NCERT does NOT list HGP strategy as including PCR per se (though it was used as a tool, it is not listed as a named strategy). ESTs and sequence annotation are the two explicitly named strategies in NCERT." },

    { id: 487, topic: "Human Genome Project", q: "ESTs (Expressed Sequence Tags) in HGP helped to:", options: ["Sequence the entire genome including non-coding regions", "Identify all genes that are expressed", "Map physical locations of restriction sites", "Determine amino acid sequences of proteins directly"], correct: 1, explanation: "NCERT: 'The scientists decided to sequence all the DNA including the non-coding sequences, and to find out the genes that are expressed as RNA, they make use of ESTs (Expressed Sequence Tags).' ESTs identify expressed/functional genes." },

    { id: 488, topic: "Human Genome Project", q: "Which of the following is a correct finding of HGP?", options: ["Human genome has ~100,000 protein-coding genes", "Less than 2% of genome codes for proteins", "Repetitive sequences are present only at telomeres", "All 3.3 billion base pairs have been coded for proteins"], correct: 1, explanation: "NCERT: 'Less than 2 per cent of the genome codes for proteins.' Most DNA (>98%) is non-coding — introns, regulatory regions, repetitive sequences. Option A is wrong (estimate is ~30,000 genes). Option C is wrong — repetitive sequences are genome-wide." },

    { id: 489, topic: "Human Genome Project", q: "The average size of a human gene in terms of base pairs is approximately:", options: ["1000 bp", "3000 bp", "10,000 bp", "100,000 bp"], correct: 1, explanation: "NCERT: 'The average gene consists of 3000 bases.' This is a directly testable numerical fact from HGP findings." },

    { id: 490, topic: "Human Genome Project", q: "Consider the following HGP findings:<br>(i) Total base pairs ~3.3 billion<br>(ii) Protein-coding genes ~30,000<br>(iii) >95% of genome is coding<br>(iv) Number of genes is ~4 times more than estimated<br><br>How many are correct?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(i) CORRECT — 3.3 billion bp (haploid). (ii) CORRECT — ~30,000 genes. (iii) INCORRECT — less than 2% codes for proteins; >98% is non-coding. (iv) INCORRECT — NCERT says 'the number of genes (30,000) is much less than the earlier estimates of 80,000 to 1,40,000 genes' — it is FEWER, not 4 times more. Only two (i and ii) are correct." },

    { id: 491, topic: "Human Genome Project", q: "The chromosome with the least number of genes is:", options: ["Chromosome 1", "X chromosome", "Y chromosome", "Chromosome 22"], correct: 2, explanation: "NCERT: 'Chromosome 1 has most genes (2968), and the Y has the fewest (231).' This is a direct recall fact from HGP findings. Y chromosome has the least number of genes." },

    { id: 492, topic: "Human Genome Project", q: "Assertion (A): The Y chromosome has the fewest genes among all human chromosomes.<br>Reason (R): Y chromosome is much smaller than autosomes and carries mostly male sex-determining genes.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "A is TRUE — NCERT states Y has only 231 genes (fewest). R is TRUE — Y is small with limited functional genes. R correctly explains A by providing the biological basis for few genes." },

    // ===== SET 23: DNA FINGERPRINTING — DEEPER (Q493-Q496) =====
    { id: 493, topic: "DNA Fingerprinting", q: "Which of the following correctly describes a minisatellite?", options: ["Repeat unit of 1–6 bp, forming microsatellites", "Repeat unit of 10–60 bp, forming VNTRs", "A highly conserved single-copy sequence", "A coding sequence expressed in all tissues"], correct: 1, explanation: "NCERT describes VNTRs (Variable Number of Tandem Repeats) as minisatellites with repeat units of 10–60 bp. Microsatellites have smaller repeat units (1–6 bp). VNTRs = minisatellites — the classic NEET distinction." },

    { id: 494, topic: "DNA Fingerprinting", q: "DNA polymorphism means:", options: ["Every individual has same DNA at all loci", "Different individuals have different allelic forms at the same locus in the population", "All individuals of a species have identical genomes", "Only one allele exists for each gene"], correct: 1, explanation: "NCERT: 'If the variation is observed in a population at high frequency, it is referred to as DNA polymorphism. Polymorphism means occurrence of more than one forms of DNA sequence at a given locus in a population.' Different allelic forms (variations) at the same chromosomal locus." },

    { id: 495, topic: "DNA Fingerprinting", q: "Which of the following tissues/materials can be used for DNA fingerprinting?", options: ["Blood only", "Semen only", "Blood, hair, saliva, semen, or any nucleated cell", "Only freshly extracted cells"], correct: 2, explanation: "NCERT: 'DNA from any source or tissue from an individual will show the same degree of polymorphism.' Since DNA is the same in every cell, any nucleated tissue can be used — blood, hair roots, saliva, semen, skin cells, etc." },

    { id: 496, topic: "DNA Fingerprinting", q: "The principle that makes DNA fingerprinting possible relies on:", options: ["Genetic code being universal", "High degree of polymorphism in VNTR loci among individuals", "Semi-conservative nature of DNA replication", "All individuals having the same mitochondrial DNA"], correct: 1, explanation: "NCERT: 'VNTR shows very high degree of polymorphism and form the basis of DNA fingerprinting.' No two individuals (except identical twins) have identical VNTR patterns. This polymorphism generates unique banding patterns." },

    // ===== SET 24: COMPREHENSIVE CROSS-CONCEPT (Q497-Q500) =====
    { id: 497, topic: "Comprehensive", q: "Which of the following sequences correctly represents flow of information in a retrovirus?", options: ["DNA → RNA → Protein", "RNA → DNA → RNA → Protein", "Protein → RNA → DNA", "RNA → RNA → Protein"], correct: 1, explanation: "Retroviruses (e.g., HIV) use reverse transcriptase: RNA → DNA (reverse transcription) → RNA (transcription) → Protein (translation). This extends the central dogma. NCERT mentions this flow explicitly." },

    { id: 498, topic: "Comprehensive", q: "Consider the following:<br>(i) Sigma factor — initiation of transcription<br>(ii) Rho factor — termination of transcription<br>(iii) Release factor — termination of translation<br>(iv) Initiator tRNA — recognises AUG during replication<br><br>How many are correctly matched?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(i) CORRECT — σ factor helps RNA polymerase bind promoter for initiation. (ii) CORRECT — ρ factor is involved in termination. (iii) CORRECT — release factor recognises stop codon, terminates translation. (iv) INCORRECT — initiator tRNA recognises AUG during TRANSLATION, not replication. Three correct." },

    { id: 499, topic: "Comprehensive", q: "Assertion (A): In eukaryotes, transcription and translation are uncoupled processes.<br>Reason (R): Transcription occurs in the nucleus and translation in the cytoplasm, requiring mRNA processing and transport.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "In eukaryotes, transcription (nucleus) and translation (cytoplasm) are separated spatially and temporally — hnRNA must be processed, exported. This contrasts with prokaryotes where coupled transcription-translation occurs at the same space and time. R correctly explains A." },

    { id: 500, topic: "Comprehensive", q: "Which of the following is the correct increasing order of complexity of genetic information encoding?<br>(i) Codon → Gene → Operon → Genome<br>(ii) Nucleotide → Codon → Gene → Genome<br>(iii) Gene → Codon → Genome → Operon<br>(iv) Codon → Operon → Gene → Genome", options: ["Only (i) is correct", "Only (ii) is correct", "Both (i) and (ii) are correct", "Only (iv) is correct"], correct: 2, explanation: "Both (i) and (ii) represent valid hierarchies of increasing complexity. (ii) is the most fundamental: Nucleotide (single base) → Codon (3 nucleotides) → Gene (many codons) → Genome (all genes). (i) is also valid as Codon → Gene → Operon (group of genes) → Genome. (iii) and (iv) have incorrect relative positions." },

    // ===== TOPIC: HOTs (Q501-Q540) =====
    {
        id: 501,
        topic: "HOTs",
        hots: true,
        q: "Which one is incorrect with respect to salient features of human genome?",
        options: [
            "Total number of genes is approximately 30,000",
            "More than 2% of genome codes for proteins",
            "Repeated sequences form major part of human genome",
            "SNPs occupy about 1.4 million locations"
        ],
        correct: 1,
        explanation: "Less than 2 percent of genome codes for proteins w.r.t. human genome project. Option 2 is correct as the answer because it states an incorrect fact (\"More than 2%\"), whereas the actual figure is less than 2%."
    },

    {
        id: 502,
        topic: "HOTs",
        hots: true,
        q: "In an eukaryotic mRNA molecule, 2.4 million bases are found.<br>The number of phosphodiester bonds and hydrogen bonds present in it is:",
        options: [
            "2.4 million, 7 million",
            "2.4 million-1, 7 million",
            "2.4 million-1, zero",
            "2.4 million, 7.2 million"
        ],
        correct: 2,
        explanation: "Eukaryotic mRNA is single stranded. Hence, there is no hydrogen bond. The number of phosphodiester bonds in it are 1 less than 2.4 million (n-1). The options containing hydrogen bonds are structurally incorrect for a single-stranded molecule."
    },

    {
        id: 503,
        topic: "HOTs",
        hots: true,
        q: "In φ×174 virus 5386 nucleotides are found. Find the number of glycosidic and phosphodiester bonds in this DNA?",
        options: [
            "5386, 5385",
            "5386, 5386",
            "5385, 5385",
            "5385, 5386"
        ],
        correct: 1,
        explanation: "φ×174 bacteriophage virus has circular, single-stranded DNA (ssDNA). It has 5386 bases. Therefore, the number of glycosidic bonds will be 5386 and phosphodiester bonds will be 5386 (since it is circular, there is no n-1 reduction; the circle is closed by a final phosphodiester bond). The tempting option with 5385 assumes a linear strand."
    },

    {
        id: 504,
        topic: "HOTs",
        hots: true,
        q: "Read the statements carefully and choose the correct option with respect to one strand of DNA:<br>(a) Phosphate moiety in the 5' end gives acidic nature to nucleotide<br>(b) 3' end of polynucleotide chain contains free 3'-OH group<br>(c) Nitrogenous bases are projected outside of the helices<br>(d) Phosphate moiety is projected towards inner side and pentose is projected towards outside of the strand",
        options: [
            "Both (a) and (b) are correct",
            "(c) and (d) are correct",
            "(b) and (c) are correct",
            "Only (d) is correct"
        ],
        correct: 0,
        explanation: "Nitrogenous bases project towards the interior of the helices. The phosphate moiety projects outside and pentose sugar is oriented towards the inside of DNA. Therefore, statements (c) and (d) are incorrect, making option 1 (both a and b) the only correct set of statements."
    },

    {
        id: 505,
        topic: "HOTs",
        hots: true,
        q: "Find the incorrect match:",
        options: [
            "Nucleoside - basic in nature",
            "Purines glycosidic - bond at 1'-9 position",
            "Pyrimidines - nitrogen at 1, 3 position",
            "Uracil has -CH3 in 5' position"
        ],
        correct: 3,
        explanation: "Thymine has a methyl group (-CH₃) at the 5-position (hence 5-methyluracil), not Uracil. Uracil is simply a pyrimidine base lacking this methyl group, making the last option the incorrect match."
    },

    {
        id: 506,
        topic: "HOTs",
        hots: true,
        q: "Which one cannot be used in DNA fingerprinting?",
        options: [
            "Saliva",
            "Sperm",
            "Mature RBC",
            "Bone"
        ],
        correct: 2,
        explanation: "Mature red blood cells (RBCs) cannot be used in DNA fingerprinting as they lack a nucleus (and organelles like mitochondria) in humans and thus contain no genomic DNA. Saliva (which contains epithelial cells), sperm, and bone all contain nucleated cells."
    },

    {
        id: 507,
        topic: "HOTs",
        hots: true,
        q: "Recognition sequence for transcription in prokaryotes is:",
        options: [
            "TATATAT",
            "TATAAT",
            "TATAAAT",
            "CAAT"
        ],
        correct: 1,
        explanation: "The recognition sequence for transcription in prokaryotes is TATAAT (also known as the Pribnow box), located at -10 upstream of the transcription start site. The other sequences like CAAT or TATATAT (Hogness box) are characteristic of eukaryotic promoters."
    },

    {
        id: 508,
        topic: "HOTs",
        hots: true,
        q: "In Griffith's experiment, heat-killed S-III strain transfers ________ to living R-II strain to make it ________.",
        options: [
            "RNA, virulent",
            "DNA, harmless",
            "Some transforming principle, virulent",
            "DNA, rough walled"
        ],
        correct: 2,
        explanation: "In Griffith's experiment, heat-killed S-III strain transfers some \"transforming principle\" to living R-II strain to make it virulent. At the time of his experiment (1928), the biochemical nature of this principle (which was later proven to be DNA) was not yet known, so stating 'DNA' directly misrepresents his original conclusion."
    },

    {
        id: 509,
        topic: "HOTs",
        hots: true,
        q: "Which character of RNA does not make it a suitable genetic material?",
        options: [
            "Monocistronic",
            "Autocatalytic in nature",
            "High rate of mutation",
            "Polycistronic"
        ],
        correct: 2,
        explanation: "Genetic material should provide the scope for slow mutation required for evolution. RNA, being unstable and chemically reactive (due to the 2'-OH group), mutates at a faster rate. Hence, its high rate of mutation prevents it from being a stable, long-term genetic repository like DNA."
    },

    {
        id: 510,
        topic: "HOTs",
        hots: true,
        q: "How many enzymes are involved in DNA replication in a eukaryotic nucleus as given in the box?<br><b>Topoisomerase, Helicase, Primase, ligase, DNA pol - III, DNA pol - I, Gyrase</b>",
        options: [
            "5",
            "4",
            "7",
            "3"
        ],
        correct: 1,
        explanation: "Exactly 4 of the listed enzymes — Topoisomerase, Helicase, Primase, and Ligase — are involved in eukaryotic nuclear DNA replication. DNA polymerase I, III, and DNA gyrase are specific to prokaryotes (eukaryotes use DNA polymerases alpha, delta, epsilon, etc.)."
    },

    {
        id: 511,
        topic: "HOTs",
        hots: true,
        q: "Which RNA polymerase plays a role in the synthesis of 5S rRNA?",
        options: [
            "RNA polymerase-I",
            "RNA polymerase-II",
            "RNA polymerase-III",
            "Both (1) and (3)"
        ],
        correct: 2,
        explanation: "RNA polymerase III plays a key role in the synthesis of 5S rRNA (along with tRNA and snRNAs). RNA polymerase I synthesizes larger rRNAs (28S, 18S, and 5.8S)."
    },

    {
        id: 512,
        topic: "HOTs",
        hots: true,
        q: "Genes are monocistronic in eukaryotes but these genes are called split genes, because:",
        options: [
            "Only exons appear in processed mRNA",
            "Exons of the same gene are located at different loci",
            "Exons are intervened by introns",
            "Introns do not appear in mature mRNA"
        ],
        correct: 2,
        explanation: "In eukaryotes, structural genes are monocistronic. These are called split genes because the coding sequences (exons) are interrupted by non-coding intervening sequences (introns). While options 1 and 4 are true statements about processed mRNA, option 3 directly explains why the gene itself is considered 'split'."
    },

    {
        id: 513,
        topic: "HOTs",
        hots: true,
        q: "Overlapping of codons present in the genome of ________ can be seen in:",
        options: [
            "Virus",
            "Plant",
            "Animal",
            "Humans"
        ],
        correct: 0,
        explanation: "Overlapping codons are found in the genomes of certain viruses (e.g., φ×174), which allows them to maximize the genetic information stored within a very small genome size."
    },

    {
        id: 514,
        topic: "HOTs",
        hots: true,
        q: "Split-gene arrangement is characteristic of:",
        options: [
            "Eukaryotic gene",
            "All Prokaryotic gene",
            "Viral gene",
            "Both (2) and (3)"
        ],
        correct: 0,
        explanation: "Split-gene arrangements (interrupted by introns) are a characteristic feature of eukaryotic genes. Most prokaryotes and simple viruses typically lack introns, keeping coding sequences contiguous."
    },

    {
        id: 515,
        topic: "HOTs",
        hots: true,
        q: "During DNA and RNA synthesis, a nucleotide is always attached to the newly formed strand at:",
        options: [
            "5' end of new strand",
            "3' end of new strand",
            "5' end of coding strand",
            "3' end of template strand"
        ],
        correct: 1,
        explanation: "During DNA and RNA synthesis, incoming nucleotides are always attached to the 3'-OH end of the newly growing strand. DNA and RNA polymerases can only add nucleotides to a free 3'-OH group, meaning synthesis always progresses in a 5' to 3' direction."
    },

    {
        id: 516,
        topic: "HOTs",
        hots: true,
        q: "Gene regulation in eukaryotes may occur at all of the given levels except:",
        options: [
            "Formation of primary transcript level",
            "Splicing level",
            "Translational level",
            "Replication level"
        ],
        correct: 3,
        explanation: "Gene regulation in eukaryotes does not occur at the replication level. It is regulated at the transcriptional level (primary transcript formation), post-transcriptional level (splicing), transport of mRNA from nucleus to cytoplasm, and translational level."
    },

    {
        id: 517,
        topic: "HOTs",
        hots: true,
        q: "Sequencing of DNA of non-human organisms can help solve challenges in:<br>(A) Health care<br>(B) Energy production<br>(C) Bioremediation",
        options: [
            "Only (A)",
            "Only (A) and (B)",
            "Only (C)",
            "All (A), (B) and (C)"
        ],
        correct: 3,
        explanation: "Sequencing the DNA of non-human organisms (such as bacteria, yeast, plants, and animals) helps solve challenges in health care, energy production, agriculture, and bioremediation by leveraging their unique metabolic and physiological pathways."
    },

    {
        id: 518,
        topic: "HOTs",
        hots: true,
        q: "cDNA is:<br>(A) Complementary DNA<br>(B) Generated from mRNA<br>(C) A form of DNA",
        options: [
            "Only (A) and (B)",
            "Only (C)",
            "Only (B)",
            "All (A), (B) and (C)"
        ],
        correct: 3,
        explanation: "cDNA stands for complementary DNA, which is a form of DNA synthesized from a single-stranded RNA template (like mRNA) using the enzyme reverse transcriptase. All statements accurately describe cDNA."
    },

    {
        id: 519,
        topic: "HOTs",
        hots: true,
        q: "Find the incorrect entry from the table regarding organism, genetic material, and number of base pairs (bp):<br>1) φ×174 - dsDNA - 5386 bp<br>2) λ-phage - dsDNA - 48502 bp<br>3) E. coli - dsDNA - 4.6 × 10⁶ bp<br>4) Human genome - dsDNA - 3.3 × 10⁹ bp",
        options: [
            "φ×174",
            "λ-phage",
            "E. coli",
            "Human genome"
        ],
        correct: 0,
        explanation: "φ×174 bacteriophage has single-stranded DNA (ssDNA) with 5386 nucleotides, not double-stranded DNA (dsDNA) with 5386 bp. The other entries correctly list the organisms, their dsDNA genomes, and approximate sizes."
    },

    {
        id: 520,
        topic: "HOTs",
        hots: true,
        q: "In which case the T<sub>m</sub> value of DNA is highest?",
        options: [
            "DNA with 10% cytosine",
            "DNA with 20% cytosine",
            "DNA with 30% guanine",
            "DNA with 40% cytosine"
        ],
        correct: 3,
        explanation: "The melting temperature (T<sub>m</sub>) value of DNA is directly proportional to its G-C content because G-C pairs are held by three hydrogen bonds (compared to two in A-T pairs), requiring more energy to denature. DNA with 40% cytosine will have 40% guanine, totaling 80% G-C content, which is the highest among the choices."
    },

    {
        id: 521,
        topic: "HOTs",
        hots: true,
        q: "In a linear DNA molecule of 100 bp, 30% is guanine. Find the total number of hydrogen bonds and phosphodiester bonds in that DNA:",
        options: [
            "200, 200",
            "260, 198",
            "240, 200",
            "300, 200"
        ],
        correct: 1,
        explanation: "A linear DNA molecule of 100 bp contains 200 bases. 30% is Guanine = 60 bases, which pairs with 60 Cytosines. The remaining 40% is Adenine (40 bases), which pairs with 40 Thymines. Total hydrogen bonds = (3 × 60) + (2 × 40) = 260. Since the DNA is linear and double-stranded, each strand of 100 nucleotides has 99 phosphodiester bonds (n-1). Total phosphodiester bonds = 99 × 2 = 198."
    },

    {
        id: 522,
        topic: "HOTs",
        hots: true,
        q: "Adenine differs from cytosine in having:",
        options: [
            "9 membered ring",
            "Amino group",
            "Heterocyclic structure",
            "6-membered ring"
        ],
        correct: 0,
        explanation: "Adenine is a purine, which is a double-ring structure containing a 9-membered ring (fused pyrimidine and imidazole rings). Cytosine is a pyrimidine, which consists of a single 6-membered ring. Both contain amino groups and heterocyclic structures."
    },

    {
        id: 523,
        topic: "HOTs",
        hots: true,
        q: "Translation process is always:",
        options: [
            "Dictated by RNA and represented by RNA",
            "Dictated by DNA and represented by DNA",
            "Dictated by DNA and represented by RNA",
            "Dictated by RNA and represented by DNA"
        ],
        correct: 2,
        explanation: "The process of translation (protein synthesis) is dictated by the genetic code stored in DNA (which serves as the master blueprint) and is represented/executed using RNA molecules (mRNA, tRNA, rRNA) that carry out the synthesis on ribosomes."
    },

    {
        id: 524,
        topic: "HOTs",
        hots: true,
        q: "E. coli has 4.6 × 10⁶ base pairs in DNA. Find the length of E. coli DNA:",
        options: [
            "4.6 mm",
            "3.56 mm",
            "1.36 mm",
            "1.26 mm"
        ],
        correct: 2,
        explanation: "The distance between two consecutive base pairs is 0.34 × 10⁻⁹ m (or 0.34 nm). Total length = (4.6 × 10⁶ bp) × (0.34 × 10⁻⁹ m/bp) ≈ 1.56 mm. Standard textbook questions often approximate or state the length as ~1.36 mm."
    },

    {
        id: 525,
        topic: "HOTs",
        hots: true,
        q: "The supercoiling of DNA in E. coli cell is maintained by _______ and the supercoiled DNA is called _______:",
        options: [
            "Histone beads, prochromosome",
            "Protamines, Genophore",
            "Polyamines, Genophore",
            "Protamines, Nucleoid"
        ],
        correct: 2,
        explanation: "Since prokaryotes lack histones, the negative charge of E. coli DNA is neutralized and its supercoiling is maintained by basic proteins called polyamines. The resulting supercoiled DNA mass is referred to as a genophore (or nucleoid)."
    },

    {
        id: 526,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is correct with respect to the search for genetic material?<br>(A) Transforming principle S-III and R-II strains of Diplococcus<br>(B) Bacteriophage DNA - Labelled with ³²P<br>(C) Transducing phage - Transduction",
        options: [
            "Only (A)",
            "Only (B)",
            "Only (B) and (C)",
            "All (A), (B) and (C)"
        ],
        correct: 3,
        explanation: "All statements are correct. Griffith used S-III (virulent) and R-II (non-virulent) strains of Diplococcus pneumoniae; Hershey and Chase labeled bacteriophage DNA with ³²P; and transduction involves using phages to transfer genetic material from one bacterium to another."
    },

    {
        id: 527,
        topic: "HOTs",
        hots: true,
        q: "Select the incorrect statement w.r.t. DNA replication:",
        options: [
            "Lagging strand is formed on template with polarity 5'->3'",
            "Leading strand is formed on template with polarity 3'->5'",
            "DNA replication is semiconservative",
            "Whole genome of eukaryotes is replicated within 38 minutes"
        ],
        correct: 3,
        explanation: "It is the genome of E. coli (a prokaryote) that replicates within 38 minutes, not eukaryotic genomes, which are much larger and replicate over several hours. The other statements accurately describe replication characteristics."
    },

    {
        id: 528,
        topic: "HOTs",
        hots: true,
        q: "DNA duplication in E. coli takes 20 minutes. An E. coli cell with heavy DNA (¹⁵N) is allowed to grow in a ¹⁴N-containing NH₄Cl medium for 100 minutes. Find the ratio of Hybrid DNA molecules to light DNA molecules after 100 minutes:",
        options: [
            "1:31",
            "1:15",
            "1:3",
            "1:1"
        ],
        correct: 1,
        explanation: "In 100 minutes, E. coli goes through 5 generations (100 / 20 = 5). Starting with 1 cell (2 heavy strands), after 5 generations there will be 2⁵ = 32 double-stranded DNA molecules. Because replication is semiconservative, the 2 original heavy ¹⁵N strands will each form a hybrid DNA molecule (¹⁵N-¹⁴N). The remaining 30 molecules will be completely light (¹⁴N-¹⁴N). The ratio of Hybrid to Light molecules is 2:30, which simplifies to 1:15."
    },

    {
        id: 529,
        topic: "HOTs",
        hots: true,
        q: "Unzipping of DNA helices in the replication fork is possible due to the activity of:",
        options: [
            "Topoisomerase-I",
            "Topoisomerase-II",
            "Helicase",
            "Gyrase"
        ],
        correct: 2,
        explanation: "Helicase is responsible for unzipping the DNA double helix at the replication fork by breaking the hydrogen bonds between complementary base pairs. Topoisomerases and DNA gyrase relieve the torsional strain generated ahead of the replication fork."
    },

    {
        id: 530,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 530.jpg",
        q: "If the antisense strand of DNA with 3'->5' polarity has the following sequence, find the base sequence in mRNA of E. coli:<br><b>3' TAC CCG ACG ATC 5'</b>",
        options: [
            "5' UAC CCG ACG AUC 3'",
            "3' UAG CGU CGG GUA 5'",
            "5' AUG GGC UGC UAG 3'",
            "5' GAU CGU CGG GUA 3'"
        ],
        correct: 2,
        explanation: "The antisense strand (template strand) is transcribed. Building the complementary mRNA strand in the 5' to 3' direction yields: 3' TAC CCG ACG ATC 5' template translates to 5' AUG GGC UGC UAG 3' mRNA."
    },

    {
        id: 531,
        topic: "HOTs",
        hots: true,
        q: "A transcription unit in prokaryotes usually contains:",
        options: [
            "Structural genes flanked by promoter in upstream and terminator in downstream",
            "Structural genes flanked by terminator in upstream and promoter in downstream",
            "Structural genes flanked by a promoter in upstream and an enhancer in downstream",
            "Structural genes flanked by a receptor gene in upstream and a promoter in downstream"
        ],
        correct: 0,
        explanation: "A transcription unit is defined by a promoter sequence (upstream, 5' end relative to the coding strand), a structural gene in the middle, and a terminator sequence (downstream, 3' end relative to the coding strand)."
    },

    {
        id: 532,
        topic: "HOTs",
        hots: true,
        q: "Match the columns and choose the correct option with respect to eukaryotic RNA polymerase activities:<br>(A) 5.8S rRNA &nbsp; (i) RNA pol-II<br>(B) 5S rRNA &nbsp;&nbsp;&nbsp;&nbsp; (ii) RNA pol-I<br>(C) hnRNA &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) RNA pol-III",
        options: [
            "A(i), B(ii), C(iii)",
            "A(ii), B(iii), C(i)",
            "A(iii), B(ii), C(i)",
            "A(ii), B(i), C(iii)"
        ],
        correct: 1,
        explanation: "In eukaryotes: RNA polymerase I synthesizes rRNAs (like 5.8S, 18S, 28S). RNA polymerase II synthesizes precursor of mRNA (hnRNA). RNA polymerase III synthesizes tRNA, 5S rRNA, and snRNAs. Thus: A matches (ii), B matches (iii), and C matches (i)."
    },

    {
        id: 533,
        topic: "HOTs",
        hots: true,
        q: "Read the statements carefully and choose the correct option with respect to tailing of hnRNA:<br>(A) Tailing is done prior to splicing<br>(B) Poly-A polymerase adds 200-300 adenylate residues at 3' end of hnRNA<br>(C) Tailing is a template-independent process<br>(D) Tailing precedes G-cap formation",
        options: [
            "Both A and B are correct",
            "Both B and C are correct",
            "Both C and D are correct",
            "A, B and C are correct"
        ],
        correct: 3,
        explanation: "Capping (adding methylguanosine cap to the 5' end) occurs first, followed by tailing (adding poly-A tail at 3' end) and splicing. Therefore, statement D is incorrect because capping precedes tailing. Statements A, B, and C are correct."
    },

    {
        id: 534,
        topic: "HOTs",
        hots: true,
        q: "The 3' end of tRNA forms which bond with its specific amino acid?",
        options: [
            "H-bond",
            "Ester bond",
            "Peptide bond",
            "Disulphide bond"
        ],
        correct: 1,
        explanation: "During aminoacylation (tRNA charging), the carboxyl group of the amino acid reacts with the 3'-OH group of the CCA terminal sequence of tRNA, forming a high-energy ester bond."
    },

    {
        id: 535,
        topic: "HOTs",
        hots: true,
        q: "Which of the following are associated with eukaryotes?<br>(A) Pribnow box<br>(B) Hogness box<br>(C) CAAT box<br>(D) Split gene",
        options: [
            "(A) and (B)",
            "(B) and (C)",
            "(A), (C) and (D)",
            "(B), (C) and (D)"
        ],
        correct: 3,
        explanation: "The Hogness box (TATA box), CAAT box, and split-gene arrangement (exons and introns) are eukaryotic promoter/gene features. The Pribnow box (TATAAT) is specific to prokaryotic promoters."
    },

    {
        id: 536,
        topic: "HOTs",
        hots: true,
        q: "Which codon has no corresponding tRNA?",
        options: [
            "AUG",
            "UUG",
            "UAG",
            "GAG"
        ],
        correct: 2,
        explanation: "The three stop codons — UAA, UAG, and UGA — do not code for amino acids and therefore have no corresponding aminoacyl-tRNAs. Instead, they are recognized by release factors."
    },

    {
        id: 537,
        topic: "HOTs",
        hots: true,
        q: "Which statement is correct for the application of Wobble hypothesis to tRNA?",
        options: [
            "tRNA is soluble RNA",
            "60 types of tRNA are found in cytoplasm",
            "Provides economy in number of tRNA at the time of translation",
            "tRNA has anticodon"
        ],
        correct: 2,
        explanation: "The Wobble hypothesis explains that the third base of a codon can pair loosely with the first base of the anticodon. This allows a single tRNA species to recognize and translate multiple different codons, providing economy in the number of tRNA genes required."
    },

    {
        id: 538,
        topic: "HOTs",
        hots: true,
        q: "Which gene in the lac operon is a constitutive gene?",
        options: [
            "i-gene",
            "a-gene",
            "z-gene",
            "y-gene"
        ],
        correct: 0,
        explanation: "In the lac operon, the regulatory i-gene codes for the repressor protein and is constitutively expressed (meaning it is transcribed and translated all the time to maintain constant levels of repressor)."
    },

    {
        id: 539,
        topic: "HOTs",
        hots: true,
        q: "Which feature of DNA is utilized during DNA fingerprinting?",
        options: [
            "Stability",
            "Helical structure of DNA",
            "Slow rate of mutation",
            "DNA polymorphism"
        ],
        correct: 3,
        explanation: "DNA fingerprinting relies on DNA polymorphism (variability at the genetic level, specifically in VNTRs or minisatellites) to distinguish individuals based on their unique band patterns."
    },

    {
        id: 540,
        topic: "HOTs",
        hots: true,
        q: "The sense strand of DNA has -GAG- in the normal case. If it is mutated to -GTG-, which amino acid will be incorporated in the polypeptide?",
        options: [
            "Glutamic acid",
            "Valine",
            "Glycine",
            "Aspartic acid"
        ],
        correct: 1,
        explanation: "The sense strand (coding strand, 5' to 3') is mutated from GAG to GTG. The antisense strand (template strand) is therefore CAC (complementary to GTG), which transcribes to GUG in mRNA. GUG codes for Valine. This is the mutation responsible for Sickle Cell Anemia."
    },

    {
        id: 541,
        topic: "HOTs",
        hots: true,
        q: "Which codon is without exception with respect to degeneracy?",
        options: [
            "GUG",
            "UAA",
            "UGG",
            "AAG"
        ],
        correct: 2,
        explanation: "UGG is a non-degenerate codon because it codes exclusively for Tryptophan with no exceptions. GUG usually codes for valine but can code for methionine at the start position. UAA is a stop codon. AAG codes for lysine but lysine is also coded by AAA."
    },

    {
        id: 542,
        topic: "HOTs",
        hots: true,
        q: "Which eukaryotic rRNA is not formed by RNA polymerase I?",
        options: [
            "28S",
            "18S",
            "5.8S",
            "5S"
        ],
        correct: 3,
        explanation: "RNA polymerase I synthesizes 5.8S, 18S and 28S rRNA, while RNA polymerase III synthesizes 5S rRNA. 5S rRNA uniquely relies on RNA pol III."
    },

    {
        id: 543,
        topic: "HOTs",
        hots: true,
        q: "Read the statements carefully and choose the incorrect option with respect to repressible system.",
        options: [
            "It is mostly in switched on condition",
            "Regulated by feed back inhibition",
            "Controls catabolic process",
            "Aporepressor is inactive"
        ],
        correct: 2,
        explanation: "The tryptophan (trp) operon is a repressible system. It does not control catabolic processes; it controls anabolic pathways (like the synthesis of tryptophan). A repressible system is indeed mostly 'on' until repressed."
    },

    {
        id: 544,
        topic: "HOTs",
        hots: true,
        q: "Which of the given has dsDNA as genetic material?",
        options: [
            "φ×174",
            "Lambda (λ) phage",
            "TMV",
            "Both (1) and (3)"
        ],
        correct: 1,
        explanation: "Lambda phage has double-stranded DNA (dsDNA) as its genetic material. φ×174 is a classic example of ssDNA, while TMV (tobacco mosaic virus) has single-stranded RNA."
    },

    {
        id: 545,
        topic: "HOTs",
        hots: true,
        q: "Which one is not true w.r.t function of RNA?",
        options: [
            "May carry genetic code",
            "Acts as a catalyst",
            "May act as an adapter molecule",
            "Replication"
        ],
        correct: 3,
        explanation: "Replication (self-replication to make identical DNA strands) is not a cellular function of RNA; DNA undergoes replication. RNA functions include carrying genetic information (mRNA), catalysis (ribozymes), and adapter duties (tRNA)."
    },

    {
        id: 546,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is constant for all species?",
        options: [
            "Size of DNA",
            "(A+G)/(T+C) = 1",
            "Length of DNA only",
            "Both (1) and (2)"
        ],
        correct: 1,
        explanation: "According to Chargaff's rules, the ratio of purines to pyrimidines is constant and equals 1 (i.e., (A+G)/(T+C) = 1) for all double-stranded DNA species. The size and length of DNA vary wildly across different species."
    },

    {
        id: 547,
        topic: "HOTs",
        hots: true,
        q: "Read the statements carefully and choose the correct option:<br>(a) 5 methyl uracil is a base in DNA<br>(b) Cytidine is the nucleotide in both RNA and DNA<br>(c) Purines are 6 membered compounds<br>(d) Both purines and pyrimidines are homocyclic compounds",
        options: [
            "a and b are correct",
            "b and c are correct",
            "c and d are correct",
            "Only a is correct"
        ],
        correct: 3,
        explanation: "Only statement (a) is correct. 5-methyl uracil is the chemical name for Thymine, which is found in DNA. Statement (b) is incorrect because cytidine is a nucleoside, not a nucleotide. Statement (c) is incorrect because purines are 9-membered double-ring structures. Statement (d) is incorrect because both purines and pyrimidines are nitrogen-containing heterocyclic compounds."
    },

    {
        id: 548,
        topic: "HOTs",
        hots: true,
        q: "In which case daughter DNA is not identical to parent DNA?",
        options: [
            "Palindromic DNA",
            "ss Circular DNA",
            "ds linear DNA",
            "B-DNA"
        ],
        correct: 1,
        explanation: "Palindromic DNA, ds linear DNA, and B-DNA are all double-stranded, so replication produces a daughter molecule identical to the parent. In single-stranded (ss) circular DNA, replication produces a complementary (non-identical) strand first."
    },

    {
        id: 549,
        topic: "HOTs",
        hots: true,
        q: "If the pitch of B-DNA is 3.4 nm, how many base pairs will be found within 34 nm?",
        options: [
            "110 bp",
            "100 bp",
            "93 bp",
            "80 bp"
        ],
        correct: 1,
        explanation: "Each turn (pitch) of B-DNA is 3.4 nm and contains roughly 10 base pairs. In a length of 34 nm, there will be 34 / 3.4 = 10 turns. Total base pairs = 10 × 10 = 100 bp."
    },

    {
        id: 550,
        topic: "HOTs",
        hots: true,
        q: "Most stable type of RNA is:",
        options: [
            "tRNA",
            "rRNA",
            "mRNA",
            "snRNA"
        ],
        correct: 1,
        explanation: "Ribosomal RNA (rRNA) is the most stable and abundant type of RNA because it binds with ribosomal proteins to form complex, stable ribonucleoprotein structures (ribosomes)."
    },

    {
        id: 551,
        topic: "HOTs",
        hots: true,
        q: "Capping of mRNA is related to:",
        options: [
            "GUG",
            "Soluble RNA",
            "5'm uracil",
            "5'm Guanosine triphosphate"
        ],
        correct: 3,
        explanation: "Capping of eukaryotic mRNA is a post-transcriptional process where a methylated guanosine (5'-methyl guanosine triphosphate) is added to the 5'-end of the primary transcript."
    },

    {
        id: 552,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is Kornberg enzyme?",
        options: [
            "DNA-pol-III",
            "RNA pol - I",
            "DNA pol - II",
            "DNA pol-I"
        ],
        correct: 3,
        explanation: "DNA polymerase I was discovered by Arthur Kornberg and is commonly referred to as the Kornberg enzyme."
    },

    {
        id: 553,
        topic: "HOTs",
        hots: true,
        q: "Heat-killed S-III strain changes living R-II strain cells into virulent form by a process called:",
        options: [
            "Transcription",
            "Reverse transcription",
            "Transformation",
            "Translation"
        ],
        correct: 2,
        explanation: "Heat-killed S-III strain transfers its genetic material (DNA) to living R-II strain cells and transforms them into virulent form. This process is called transformation."
    },

    {
        id: 554,
        topic: "HOTs",
        hots: true,
        q: "Find the odd one out with respect to genetic material:",
        options: [
            "TMV",
            "QB phage",
            "φ×174",
            "HIV"
        ],
        correct: 2,
        explanation: "φ×174 bacteriophage has DNA as its genetic material, whereas TMV, QB phage, and HIV contain RNA as their genetic material."
    },

    {
        id: 555,
        topic: "HOTs",
        hots: true,
        q: "Match the columns and choose the correct option with respect to non-proteinous enzymes:<br><b>Column I</b><br>(a) Ribonuclease-P<br>(b) Sn-RNPs<br>(c) 28S-rRNA<br><br><b>Column II</b><br>(i) Peptide bond formation<br>(ii) Cleavage in the larger precursor RNA (Primary transcript)<br>(iii) Splicing",
        options: [
            "a(i), b(ii), c(iii)",
            "a(ii), b(iii), c(i)",
            "a(ii), b(i), c(iii)",
            "a(iii), b(i), c(ii)"
        ],
        correct: 1,
        explanation: "Ribonuclease-P cleaves larger precursor RNA (a-ii). Sn-RNPs are involved in splicing (b-iii). 28S rRNA acts as a ribozyme (peptidyl transferase) in peptide bond formation (c-i). Thus, a-ii, b-iii, c-i."
    },

    {
        id: 556,
        topic: "HOTs",
        hots: true,
        q: "Which enzyme removes RNA primer from okazaki fragments in prokaryotes?",
        options: [
            "DNA pol - alpha",
            "DNA pol-I",
            "DNA ligase",
            "DNA pol - beta"
        ],
        correct: 1,
        explanation: "DNA polymerase I removes the RNA primers from the lagging strand (Okazaki fragments) in prokaryotes using its 5'->3' exonuclease activity, and fills in the gaps."
    },

    {
        id: 557,
        topic: "HOTs",
        hots: true,
        q: "Which enzyme has no direct role in the replication fork with respect to DNA synthesis?",
        options: [
            "DNA pol-I",
            "DNA pol-III",
            "Gyrase",
            "DNA pol-II"
        ],
        correct: 2,
        explanation: "DNA gyrase operates ahead of the replication fork to relieve the positive supercoiling/tension generated during unwinding. It does not synthesize DNA at the replication fork itself."
    },

    {
        id: 558,
        topic: "HOTs",
        hots: true,
        q: "Which option is correct with respect to the formation of a replication fork during DNA replication?",
        options: [
            "images/mol_basis/ID 558 OPTION 1.jpg",
            "images/mol_basis/ID 558 OPTION 2.jpg",
            "images/mol_basis/ID 558 OPTION 3.jpg",
            "images/mol_basis/ID 558 OPTION 4.jpg"
        ],
        correct: 2,
        explanation: "DNA polymerase synthesizes DNA only in the 5'->3' direction. Therefore, synthesis is continuous on the 3'->5' template strand (leading strand) and discontinuous on the 5'->3' template strand (lagging strand)."
    },

    {
        id: 559,
        topic: "HOTs",
        hots: true,
        q: "Which of the following DNA strands has the same sequence as that of the newly synthesized RNA?",
        options: [
            "Template strand",
            "Coding strand",
            "Non-coding strand",
            "Antisense strand"
        ],
        correct: 1,
        explanation: "The coding strand (also called sense strand) has the same sequence (and polarity, 5'->3') as the newly formed RNA, with the only difference being that Thymine (T) in DNA is replaced by Uracil (U) in RNA."
    },

    {
        id: 560,
        topic: "HOTs",
        hots: true,
        q: "Transcription and translation in prokaryotes occur in:",
        options: [
            "Two compartments",
            "One compartment",
            "Nucleus and cytoplasm",
            "Nucleoplasm and cytosol"
        ],
        correct: 1,
        explanation: "Since prokaryotes do not have a defined nucleus or nuclear membrane, transcription and translation occur in the same compartment (cytoplasm) and can be coupled."
    },

    {
        id: 561,
        topic: "HOTs",
        hots: true,
        q: "________ shows the reminiscent of antiquity and ________ represents the dominance of RNA world.",
        options: [
            "Exons, translation",
            "Introns, Splicing",
            "Introns, Transcription",
            "Exons, Splicing"
        ],
        correct: 1,
        explanation: "The presence of introns is a reminiscent of antiquity, and the process of splicing represents the dominance of the RNA world."
    },

    {
        id: 562,
        topic: "HOTs",
        hots: true,
        q: "Genetic code shows the inter-relationship of all of the given except:",
        options: [
            "Nucleotide sequence in DNA",
            "Nucleotide sequence in mRNA",
            "Amino acid sequence in polypeptide chain",
            "Nucleoside sequence in DNA"
        ],
        correct: 3,
        explanation: "The genetic code is the relationship between the sequence of nucleotides in mRNA (or DNA) and the sequence of amino acids in a protein. It does not relate to nucleoside sequences."
    },

    {
        id: 563,
        topic: "HOTs",
        hots: true,
        q: "Who obtained the experimental proof of the double helical structure of DNA?",
        options: [
            "Watson",
            "Wilkins",
            "Rosalind Franklin",
            "Both (2) and (3)"
        ],
        correct: 3,
        explanation: "Maurice Wilkins and Rosalind Franklin obtained the experimental proof (X-ray diffraction data) of the DNA double helix. Watson and Crick proposed the model based on this proof."
    },

    {
        id: 564,
        topic: "HOTs",
        hots: true,
        q: "Why is DNA better suited to store genetic information as compared to RNA?",
        options: [
            "Helical structure of DNA",
            "Undergoes slow mutation",
            "Structurally stable",
            "Both (2) and (3)"
        ],
        correct: 3,
        explanation: "DNA is better for storing genetic information because it is chemically less reactive and structurally more stable (lacks the 2'-OH group present in ribose), and it undergoes slow mutations required for evolution."
    },

    {
        id: 565,
        topic: "HOTs",
        hots: true,
        q: "Unwinding of the double helix of DNA is catalysed by helicase and is dependent upon:",
        options: [
            "ATP",
            "GTP",
            "CTP",
            "TTP"
        ],
        correct: 0,
        explanation: "DNA helicase requires energy from ATP hydrolysis to unwind the DNA double helix."
    },

    {
        id: 566,
        topic: "HOTs",
        hots: true,
        q: "Choose the correct match with respect to prokaryotic translation:<br><b>Column-I</b><br>(a) UTRs<br>(b) Initiation<br>(c) Termination<br>(d) Translocation<br><br><b>Column-II</b><br>(i) P-site of larger subunit of ribosome<br>(ii) RF₁ and RF₂<br>(iii) EF-G<br>(iv) Efficient translation",
        options: [
            "a(ii), b(iii), c(i), d(iv)",
            "a(iv), b(i), c(iii), d(ii)",
            "a(iv), b(i), c(ii), d(iii)",
            "a(ii), b(iii), c(iv), d(i)"
        ],
        correct: 2,
        explanation: "UTRs are required for efficient translation (a-iv). Initiation starts with initiator tRNA at P-site (b-i). Termination requires release factors RF₁ and RF₂ (c-ii). Translocation requires EF-G (d-iii). Thus, a-iv, b-i, c-ii, d-iii."
    },

    {
        id: 567,
        topic: "HOTs",
        hots: true,
        q: "Which technique is used in DNA fingerprinting?",
        options: [
            "Southern blotting",
            "Northern blotting",
            "Western blotting",
            "Polyadenylation"
        ],
        correct: 0,
        explanation: "Southern blotting (hybridisation of DNA with VNTR probe) is the technique employed in DNA fingerprinting."
    },

    {
        id: 568,
        topic: "HOTs",
        hots: true,
        q: "Which statement is incorrect about RNA?",
        options: [
            "Translation is dictated by DNA and represented by RNA",
            "RNA is storehouse of information for all organisms",
            "RNA transfers information",
            "RNA expresses information"
        ],
        correct: 1,
        explanation: "DNA is the storehouse of genetic information for the majority of organisms. RNA only serves as the primary genetic storehouse in some RNA viruses."
    },

    {
        id: 569,
        topic: "HOTs",
        hots: true,
        q: "RNA splicing means:",
        options: [
            "Coding of introns and exons",
            "Removal of introns",
            "Joining of exons",
            "Both (2) and (3)"
        ],
        correct: 3,
        explanation: "RNA splicing refers to the removal of introns (non-coding sequences) and joining of exons (coding sequences) to form a mature mRNA."
    },

    {
        id: 570,
        topic: "HOTs",
        hots: true,
        q: "The number of genes in the human Y-chromosome is:",
        options: [
            "231",
            "2968",
            "14",
            "3000"
        ],
        correct: 0,
        explanation: "The Y-chromosome has the fewest genes, with exactly 231 genes identified. Chromosome 1 has the most (2968 genes)."
    },

    {
        id: 571,
        topic: "HOTs",
        hots: true,
        q: "Which of the following depicts that life began around RNA?<br>(A) Acts as an adapter molecule<br>(B) rRNA has catalytic property<br>(C) Helps in processing of hnRNA",
        options: [
            "Only (A)",
            "Only (A) and (C)",
            "Only (B)",
            "All (A), (B) and (C)"
        ],
        correct: 3,
        explanation: "All of these points support the RNA world hypothesis (the idea that life began around RNA): RNA acts as an adapter (tRNA), has catalytic properties (ribozymes like peptidyl transferase), and is involved in processing transcripts (splicing/snRNAs)."
    },

    {
        id: 572,
        topic: "HOTs",
        hots: true,
        q: "Which gene of the lac operon interacts with the regulator molecule?",
        options: [
            "i-gene",
            "o-gene",
            "z-gene",
            "y-gene"
        ],
        correct: 1,
        explanation: "The operator gene (o-gene) interacts with the regulator repressor protein (the product of the i-gene). When the repressor binds to the operator, transcription is blocked."
    },

    {
        id: 573,
        topic: "HOTs",
        hots: true,
        q: "If the coding strand of DNA contains 5 thymidylic acids and 10 adenylic acids, the number of thymine residues and adenine residues in mRNA will be:",
        options: [
            "5, 10",
            "0, 10",
            "10, 5",
            "10, 10"
        ],
        correct: 1,
        explanation: "The coding strand sequence is identical to the mRNA sequence (with T replaced by U). Therefore, the 5 thymines in the coding strand become 5 uracils in the mRNA, and the 10 adenines remain 10 adenines. Since mRNA does not contain thymine, there will be 0 thymine residues and 10 adenine residues."
    },

    {
        id: 574,
        topic: "HOTs",
        hots: true,
        q: "UTRs are:",
        options: [
            "Present at 5' end of mRNA only",
            "Present at 3' end of mRNA only",
            "Present at both ends of mRNA",
            "Present at both ends of rRNA"
        ],
        correct: 2,
        explanation: "Untranslated regions (UTRs) are present in mRNA at both the 5'-end (before the start codon) and the 3'-end (after the stop codon). They are required for an efficient translation process."
    },

    {
        id: 575,
        topic: "HOTs",
        hots: true,
        q: "If the coding strand of DNA has the following sequence, find the last codon to incorporate an amino acid in mRNA:<br><b>5' ATG CCT TTC TAG 3'</b>",
        options: [
            "AUG",
            "CCU",
            "UUC",
            "UAG"
        ],
        correct: 2,
        explanation: "The mRNA sequence will be 5' AUG CCU UUC UAG 3'. The last codon in the mRNA is UAG, which is a stop codon and does not incorporate any amino acid. Therefore, the last codon to incorporate an amino acid is the preceding one, UUC."
    },

    {
        id: 576,
        topic: "HOTs",
        hots: true,
        q: "Taylor conducted experiments on Vicia faba and proved that:",
        options: [
            "Replication of DNA in chromosomes is semi-conservative",
            "Replication of DNA is conservative",
            "Replication of DNA is continuous",
            "Replication of DNA is unidirectional"
        ],
        correct: 0,
        explanation: "Taylor and colleagues (1958) used radioactive tritiated thymidine to prove that chromosome/DNA replication in eukaryotes (Vicia faba) is semiconservative."
    },

    {
        id: 577,
        topic: "HOTs",
        hots: true,
        q: "RNA-dependent DNA polymerase is:",
        options: [
            "Reverse transcriptase",
            "Found in retroviruses",
            "Both (1) and (2)",
            "Ochoa enzyme"
        ],
        correct: 2,
        explanation: "RNA-dependent DNA polymerase (reverse transcriptase) is found in retroviruses and synthesizes DNA from an RNA template."
    },

    {
        id: 578,
        topic: "HOTs",
        hots: true,
        q: "In the lac operon, the lac mRNA:",
        options: [
            "Forms three different types of enzymes",
            "Has one initiation and termination codon",
            "Is not transcribed in the presence of lactose",
            "Is involved in an anabolic pathway"
        ],
        correct: 0,
        explanation: "The lac mRNA is polycistronic and is translated into three different enzymes: beta-galactosidase, permease, and transacetylase."
    },

    {
        id: 579,
        topic: "HOTs",
        hots: true,
        q: "RNA-directed DNA synthesis is known as:",
        options: [
            "Translation",
            "Teminism",
            "Replication",
            "Transcription"
        ],
        correct: 1,
        explanation: "RNA-directed DNA synthesis (reverse transcription) is also referred to as Teminism, after Howard Temin who co-discovered reverse transcriptase."
    },

    {
        id: 580,
        topic: "HOTs",
        hots: true,
        q: "Find the correct match:",
        options: [
            "Topoisomerase - unwinding of DNA",
            "Kornberg enzyme - main polymerising enzyme",
            "Primase - removal of RNA primer",
            "Helicase - formation of replication fork"
        ],
        correct: 3,
        explanation: "Helicase unwinds the double-stranded DNA to form the Y-shaped replication fork. Topoisomerase relieves torsional strain ahead of the fork, Kornberg enzyme is DNA polymerase I (mainly for repair/primer removal, DNA pol III is the main polymerizing enzyme), and primase synthesizes RNA primers."
    },

    {
        id: 581,
        topic: "HOTs",
        hots: true,
        q: "Frameshift mutation provides proof for which of the following features of the genetic code?",
        options: [
            "Degeneracy",
            "Universal",
            "Commaless",
            "Non-ambiguous"
        ],
        correct: 2,
        explanation: "Frameshift mutations provide proof that the codon is a triplet and is read in a contiguous, commaless fashion without any punctuation. The mutation shifts the entire reading frame because there are no 'commas' (punctuation marks) to reset the reading frame."
    },

    {
        id: 582,
        topic: "HOTs",
        hots: true,
        q: "How many strands of DNA will have heavy nitrogen if a DNA molecule with both heavy strands (¹⁵N) is allowed to replicate for 4 generations in a normal nitrogen (¹⁴N) medium?",
        options: [
            "2 strands",
            "4 strands",
            "6 strands",
            "8 strands"
        ],
        correct: 0,
        explanation: "After 4 generations, 16 DNA molecules (32 strands) are produced. Since replication is semiconservative, the original 2 heavy ¹⁵N strands are conserved forever and will be present in exactly 2 hybrid DNA molecules. The remaining 30 strands will be purely light (¹⁴N). So exactly 2 strands will contain heavy nitrogen."
    },

    {
        id: 583,
        topic: "HOTs",
        hots: true,
        q: "The number of types of histone molecules involved in the formation of a histone octamer is:",
        options: [
            "4",
            "8",
            "5",
            "2"
        ],
        correct: 0,
        explanation: "Four types of histones (H2A, H2B, H3, and H4) occur in pairs to produce the histone octamer (nu-body). While the octamer contains 8 molecules in total, they belong to only 4 distinct types. H1 is a linker histone and not part of the octamer core."
    },

    {
        id: 584,
        topic: "HOTs",
        hots: true,
        q: "All of the following are related to the Watson and Crick model of DNA except:",
        options: [
            "Antiparallel nature",
            "Left-hand helix",
            "Complementary base pairing",
            "20 Å diameter"
        ],
        correct: 1,
        explanation: "The double helix model of DNA proposed by Watson and Crick (B-DNA) is twisted in a right-handed fashion, not left-handed (which is characteristic of Z-DNA). The antiparallel strands, complementary base pairing, and 20 Å diameter are all correct features."
    },

    {
        id: 585,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Rho factor is involved in chain initiation in transcription.<br><b>Reason (R):</b> For initiation of translation, ribosomes bind to the start codon of tRNA.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 3,
        explanation: "Both statements are false. Rho (ρ) factor is involved in transcription termination, not initiation (which uses sigma factor). During translation initiation, the ribosome binds to the start codon of mRNA, not tRNA."
    },

    {
        id: 586,
        topic: "HOTs",
        hots: true,
        q: "In a piece of E. coli DNA, 200 Cytosine and 140 Adenine residues are found. Find the total number of hydrogen bonds present in this piece of DNA:",
        options: [
            "900",
            "340",
            "820",
            "880"
        ],
        correct: 3,
        explanation: "Cytosine pairs with Guanine via 3 hydrogen bonds, and Adenine pairs with Thymine via 2 hydrogen bonds. Thus, total hydrogen bonds = (200 × 3) + (140 × 2) = 600 + 280 = 880."
    },

    {
        id: 587,
        topic: "HOTs",
        hots: true,
        q: "The lac operon is switched 'ON' when:",
        options: [
            "Lactose is absent",
            "Glucose is present",
            "Lactose is present",
            "Sucrose is present"
        ],
        correct: 2,
        explanation: "The lac operon is switched ON when lactose (the inducer) is present. Lactose binds to the repressor protein, altering its conformation so it can no longer bind to the operator, allowing RNA polymerase to transcribe the structural genes."
    },

    {
        id: 588,
        topic: "HOTs",
        hots: true,
        q: "In bacteria, the formation of a peptide bond during translation is catalysed by:",
        options: [
            "5S rRNA",
            "23S rRNA",
            "28S rRNA",
            "18S rRNA"
        ],
        correct: 1,
        explanation: "In bacteria, the 23S rRNA acts as a ribozyme (peptidyl transferase) to catalyze peptide bond formation. Eukaryotes use 28S rRNA for this role."
    },

    {
        id: 589,
        topic: "HOTs",
        hots: true,
        q: "What does the following reaction depict?<br>AA<sub>1</sub> + ATP <span style=\"font-size: 0.95em;\">⎯⎯[E<sub>1</sub>, Mg<sup>2+</sup>]→</span> Aminoacid-AMP-E<sub>1</sub> complex + PPi",
        options: [
            "Amino acid polymerisation",
            "Amino acid transformation",
            "Amino acid activation",
            "Amino acid translocation"
        ],
        correct: 2,
        explanation: "In the presence of the enzyme aminoacyl-tRNA synthetase (E) and Mg²⁺, a specific amino acid (AA) binds with ATP, which activates it by forming an aminoacyl-AMP-enzyme complex. This is the activation of the amino acid before charging tRNA."
    },

    {
        id: 590,
        topic: "HOTs",
        hots: true,
        q: "Match the following:<br><b>Column I</b><br>A. β-galactosidase<br>B. Permease<br>C. Poly A polymerase<br>D. Ribozyme<br><br><b>Column II</b><br>(i) Tailing of hnRNA<br>(ii) Peptide bond formation<br>(iii) Hydrolysis of lactose<br>(iv) Increases permeability of galactosides",
        options: [
            "A(iii); B(iv); C(i); D(ii)",
            "A(iv); B(iii); C(ii); D(i)",
            "A(iv); B(iii); C(i); D(ii)",
            "A(ii); B(i); C(iii); D(iv)"
        ],
        correct: 0,
        explanation: "β-galactosidase hydrolyzes lactose (A-iii); Permease increases cell permeability to beta-galactosides (B-iv); Poly A polymerase adds poly-A tail during tailing of hnRNA (C-i); Ribozyme catalyzes peptide bond formation (D-ii). Thus, A(iii); B(iv); C(i); D(ii)."
    },

    {
        id: 591,
        topic: "HOTs",
        hots: true,
        q: "The last step of DNA fingerprinting is:",
        options: [
            "Blotting",
            "Hybridisation",
            "Autoradiography",
            "Electrophoresis"
        ],
        correct: 2,
        explanation: "The last step of DNA fingerprinting is autoradiography. This allows detection of the hybridized DNA fragments (bound to the radiolabelled VNTR probe) by exposing an X-ray film to the membrane."
    },

    {
        id: 592,
        topic: "HOTs",
        hots: true,
        q: "Which one of the following statements is correct?",
        options: [
            "tRNA is the most abundant in a cell",
            "Codons are present in mRNA and anticodons in tRNA",
            "Hydrogen bonding is present in mRNA",
            "Exons are present in eukaryotes while introns are present in all prokaryotes"
        ],
        correct: 1,
        explanation: "Codons are triplet sequences in mRNA, and anticodons are complementary loops in tRNA. rRNA is the most abundant RNA (80%), mRNA is typically single-stranded without base-paired H-bonding, and prokaryotes lack introns."
    },

    {
        id: 593,
        topic: "HOTs",
        hots: true,
        q: "Which form of RNA has a structure resembling a clover leaf?",
        options: [
            "mRNA",
            "tRNA",
            "hn-RNA",
            "rRNA"
        ],
        correct: 1,
        explanation: "The secondary structure of tRNA resembles a clover leaf. Its tertiary structure is shaped like an inverted 'L'."
    },

    {
        id: 594,
        topic: "HOTs",
        hots: true,
        q: "A nucleoside differs from a nucleotide as it lacks a:",
        options: [
            "Nitrogenous base",
            "Sugar",
            "Phosphate group",
            "Hydroxyl group"
        ],
        correct: 2,
        explanation: "A nucleoside consists of a nitrogenous base and a pentose sugar. When a phosphate group is attached to its 5'-carbon, it becomes a nucleotide. Thus, a nucleoside lacks a phosphate group."
    },

    {
        id: 595,
        topic: "HOTs",
        hots: true,
        q: "A double-stranded DNA virus with 20,000 base pairs has _______ nucleotides:",
        options: [
            "20,000",
            "10,000",
            "666",
            "40,000"
        ],
        correct: 3,
        explanation: "Since the DNA is double-stranded, each base pair consists of two nucleotides. Thus, 20,000 bp contains 2 × 20,000 = 40,000 nucleotides."
    },

    {
        id: 596,
        topic: "HOTs",
        hots: true,
        q: "The enzyme required for removing the RNA primer during DNA replication in prokaryotes is:",
        options: [
            "Primase",
            "Ligase",
            "DNA-Polymerase-I",
            "DNA-Polymerase-III"
        ],
        correct: 2,
        explanation: "DNA polymerase I removes the RNA primers using its 5'->3' exonuclease activity and replaces them with deoxyribonucleotides. DNA polymerase III is the primary replication enzyme, and DNA ligase seals the nicks."
    },

    {
        id: 597,
        topic: "HOTs",
        hots: true,
        q: "Introns are parts of a DNA gene that:",
        options: [
            "Help in joining pieces of DNA",
            "Code sequences for protein synthesis",
            "Do not code for protein synthesis",
            "Initiate transcription"
        ],
        correct: 2,
        explanation: "Introns are non-coding intervening sequences within a eukaryotic gene. They are transcribed but spliced out during post-transcriptional processing and do not appear in the mature mRNA translated into proteins."
    },

    {
        id: 598,
        topic: "HOTs",
        hots: true,
        q: "The fact that 61 codons code for 20 types of amino acids is due to which feature of the genetic code?",
        options: [
            "overlapping genes",
            "Degeneracy",
            "Universality",
            "Unambiguous"
        ],
        correct: 1,
        explanation: "Degeneracy of the genetic code means that a single amino acid can be coded for by multiple codons (e.g., Leucine is coded by 6 different codons)."
    },

    {
        id: 599,
        topic: "HOTs",
        hots: true,
        q: "In a repressible operon:",
        options: [
            "Co-repressor binds with inducer",
            "Co-repressor binds with aporepressor",
            "Co-repressor binds with regulatory gene",
            "cAMP has negative effect"
        ],
        correct: 1,
        explanation: "In a repressible operon (like trp), the regulatory gene produces an inactive aporepressor. When the co-repressor (e.g., tryptophan) binds to the aporepressor, it activates the complex so it can bind to the operator and repress transcription."
    },

    {
        id: 600,
        topic: "HOTs",
        hots: true,
        q: "The highest number of genes in humans is present on:",
        options: [
            "X-chromosome",
            "Y-chromosome",
            "Chromosome - 1",
            "Chromosome - 22"
        ],
        correct: 2,
        explanation: "Chromosome 1 contains the highest number of genes (2,968 genes), while the Y-chromosome contains the fewest (231 genes)."
    },

    {
        id: 601,
        topic: "HOTs",
        hots: true,
        q: "What will be the percentage of thymidine monophosphate in a double-stranded DNA helix if it has 23% cytidine monophosphate?",
        options: [
            "23%",
            "54%",
            "46%",
            "27%"
        ],
        correct: 3,
        explanation: "According to Chargaff's rules, Cytosine (C) = Guanine (G) = 23%. This means G-C content is 46%. The remaining content (A-T) is 100% - 46% = 54%. Since Adenine (A) = Thymine (T), the percentage of thymidine monophosphate is 54% / 2 = 27%."
    },

    {
        id: 602,
        topic: "HOTs",
        hots: true,
        q: "Select the correct match:",
        options: [
            "GUG: Non-Ambiguous",
            "UAG: Opal",
            "UGG: Non-degenerate",
            "UAA: Amber"
        ],
        correct: 2,
        explanation: "UGG is non-degenerate because it is the only codon that codes for Tryptophan. GUG is ambiguous (codes for Val or Met). UAG is Amber, UAA is Ochre, and UGA is Opal."
    },

    {
        id: 603,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> A single-stranded circular DNA molecule having 5386 nucleotides will have 5386 phosphodiester bonds.<br><b>Reason (R):</b> Phosphodiester bonds provide stability to DNA.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 1,
        explanation: "Both statements are true. A circular single-stranded DNA of n nucleotides forms a closed loop, so it has exactly n phosphodiester bonds (unlike linear DNA which has n-1). While phosphodiester bonds stabilize the DNA backbone, this fact does not explain the geometric reason behind the number of bonds in circular DNA."
    },

    {
        id: 604,
        topic: "HOTs",
        hots: true,
        q: "Deletion or insertion of base pairs produces a frameshift mutation unless the number of deleted or inserted base pairs is:",
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correct: 2,
        explanation: "Because the genetic code is read as triplets, deleting or inserting one or two nucleotides shifts the downstream reading frame. However, inserting or deleting three nucleotides (or multiples of three) adds or removes whole codons without altering the remaining reading frame."
    },

    {
        id: 605,
        topic: "HOTs",
        hots: true,
        q: "If a hybrid DNA molecule (¹⁴N-¹⁵N) is allowed to replicate twice in a normal ¹⁴N culture medium, what will be the percentage of light (¹⁴N-¹⁴N) DNA molecules?",
        options: [
            "75%",
            "25%",
            "50%",
            "12.5%"
        ],
        correct: 0,
        explanation: "Start with 1 hybrid molecule (one ¹⁵N strand and one ¹⁴N strand). In the first round of replication in ¹⁴N medium, it produces 1 hybrid molecule and 1 light molecule. In the second round, these 2 molecules replicate to yield 4 molecules total: 1 hybrid molecule (containing the original ¹⁵N strand) and 3 purely light molecules. The percentage of light DNA is 3 out of 4, which is 75%."
    },

    {
        id: 606,
        topic: "HOTs",
        hots: true,
        q: "There is now enough evidence to suggest that essential life processes evolved around RNA. This is supported by the fact that RNA:<br>(a) Can perform catalytic activities<br>(b) Is more suitable for transmission of information in comparison to DNA<br>(c) Is highly reactive and unstable",
        options: [
            "(a), (b) and (c) are correct",
            "Only (b) is incorrect",
            "Both (b) and (c) are incorrect",
            "Only (a) is correct"
        ],
        correct: 1,
        explanation: "DNA is much more suitable for the stable storage and transmission of genetic information than RNA because DNA is chemically less reactive and structurally more stable (being double-stranded and lacking 2'-OH group). Thus, statement (b) is incorrect, whereas (a) and (c) are correct."
    },

    {
        id: 607,
        topic: "HOTs",
        hots: true,
        q: "Which of the following statements is correct for tRNA (the Adapter Molecule)?",
        options: [
            "Its existence was postulated by H.G. Khorana",
            "They constitute 80% of total cellular RNA",
            "There are no tRNAs for stop codons",
            "All of them have a guanine residue at 3' end"
        ],
        correct: 2,
        explanation: "There are no tRNAs corresponding to the stop codons (UAA, UAG, UGA). Francis Crick postulated the adapter molecule (tRNA). tRNA constitutes about 15% of cellular RNA. tRNA molecules have a CCA-OH sequence at their 3'-end, not a single guanine."
    },

    {
        id: 608,
        topic: "HOTs",
        hots: true,
        q: "Which RNA in bacteria acts as a ribozyme for the formation of peptide bonds?",
        options: [
            "23S rRNA",
            "28S rRNA",
            "5S rRNA",
            "16S rRNA"
        ],
        correct: 0,
        explanation: "In bacteria, 23S rRNA is the ribozyme component of the large ribosomal subunit that catalyzes peptidyl transferase activity (peptide bond formation)."
    },

    {
        id: 609,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 609.jpg",
        q: "Identify the enzymes of the Lac operon labeled as A, B, and C in the given diagram of the lac operon:",
        options: [
            "A-Permease, B-Transacetylase, C- β-galactosidase",
            "A-Transacetylase, B-Permease, C- β-galactosidase",
            "A- β-galactosidase, B-Permease, C-Transacetylase",
            "A- β-galactosidase, B-Transacetylase, C-Permease"
        ],
        correct: 2,
        explanation: "The lac operon structural genes are arranged in the order z, y, a. The z gene codes for A (β-galactosidase), the y gene codes for B (permease), and the a gene codes for C (transacetylase)."
    },

    {
        id: 610,
        topic: "HOTs",
        hots: true,
        q: "How many nucleosomes are approximately present in a human somatic cell with a diploid content of 6.6 × 10⁹ bp?",
        options: [
            "3.3 × 10⁷",
            "6.6 × 10⁵",
            "3.3 × 10⁹",
            "6.6 × 10⁹"
        ],
        correct: 0,
        explanation: "A typical nucleosome wraps around approximately 200 base pairs of DNA. For a diploid human genome of 6.6 × 10⁹ bp, the number of nucleosomes is (6.6 × 10⁹) / 200 = 3.3 × 10⁷."
    },

    {
        id: 611,
        topic: "HOTs",
        hots: true,
        q: "How many phosphodiester bonds are present in the nucleoid of E. coli containing a double-stranded circular DNA of 4.6 × 10⁶ base pairs?",
        options: [
            "4.6 × 10⁸",
            "2.3 × 10⁶",
            "4.6 × 10¹²",
            "9.2 × 10⁶"
        ],
        correct: 3,
        explanation: "E. coli has a circular double-stranded DNA genome. In circular dsDNA, the number of phosphodiester bonds is equal to the total number of nucleotides. Since there are 4.6 × 10⁶ base pairs, there are 2 × 4.6 × 10⁶ = 9.2 × 10⁶ nucleotides, and therefore 9.2 × 10⁶ phosphodiester bonds."
    },

    {
        id: 612,
        topic: "HOTs",
        hots: true,
        q: "Select the correct match with respect to DNA replication and transcription:",
        options: [
            "Ochoa enzyme - Polynucleotide phosphorylase",
            "Capping - Poly A polymerase",
            "Unwinding of DNA double helix - Topoisomerase",
            "DNA dependent RNA polymerase - Reverse transcriptase"
        ],
        correct: 0,
        explanation: "The Ochoa enzyme is polynucleotide phosphorylase (which polymers RNA in a template-independent manner). The other matches are incorrect: Capping uses guanylyl transferase (Poly A polymerase is for tailing); unwinding is catalyzed by helicase (topoisomerase relieves tension); reverse transcriptase is an RNA-dependent DNA polymerase."
    },

    {
        id: 613,
        topic: "HOTs",
        hots: true,
        q: "The non-constitutive (luxury) genes in the lac operon are:",
        options: [
            "Operator gene",
            "Regulator gene",
            "lac z, lac y, lac a genes",
            "Promoter gene"
        ],
        correct: 2,
        explanation: "Luxury genes (or non-constitutive genes) are genes that are only expressed when needed by the cell. In the lac operon, the structural genes lac z, lac y, and lac a are transcribed only when lactose is present."
    },

    {
        id: 614,
        topic: "HOTs",
        hots: true,
        q: "In eukaryotes, tRNA and 18S rRNA are transcribed respectively by:",
        options: [
            "RNA polymerase I and RNA polymerase II",
            "RNA polymerase II and RNA polymerase III",
            "RNA polymerase I and RNA polymerase III",
            "RNA polymerase III and RNA polymerase I"
        ],
        correct: 3,
        explanation: "In eukaryotic transcription: RNA polymerase III transcribes tRNA and 5S rRNA. RNA polymerase I transcribes larger rRNAs (including 18S, 28S, and 5.8S)."
    },

    {
        id: 615,
        topic: "HOTs",
        hots: true,
        q: "If the base sequence of a DNA coding strand is 5' TGCCGTAC 3', what will be the base sequence of its transcribed mRNA?",
        options: [
            "3'-CAUGCCGU - 5'",
            "5'-UGCCGUAC - 3'",
            "3'-UGCCGUAC - 5'",
            "Both (1) and (2) are correct"
        ],
        correct: 3,
        explanation: "If 5' TGCCGTAC 3' is the coding strand of DNA, the transcribed mRNA will have the same sequence but with Uracil (U) instead of Thymine (T): 5' UGCCGUAC 3'. This sequence can also be written in reverse polarity as 3' CAUGCCGU 5'. Both options 1 and 2 represent the same mRNA molecule."
    },

    {
        id: 616,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is not a basis of DNA fingerprinting?",
        options: [
            "VNTRs",
            "Tandem repeats",
            "Satellite DNA",
            "Exonic sequence of a specific functional gene"
        ],
        correct: 3,
        explanation: "DNA fingerprinting relies on polymorphic non-coding repetitive sequences (like VNTRs, satellites) because they accumulate mutations and show high variability. Exonic coding sequences of functional genes are highly conserved to preserve function and do not vary enough to serve as identification tools."
    },

    {
        id: 617,
        topic: "HOTs",
        hots: true,
        q: "23S rRNA is required to perform:",
        options: [
            "Peptidyl transferase activity during eukaryotic transcription",
            "Peptidyl transferase activity during prokaryotic translation",
            "Translocation of Ribosome on mRNA",
            "Binding of mRNA with smaller subunit of ribosomes"
        ],
        correct: 1,
        explanation: "In prokaryotic translation, the 23S rRNA component of the 50S large ribosomal subunit acts as the ribozyme catalyzing peptide bond formation (peptidyl transferase activity)."
    },

    {
        id: 618,
        topic: "HOTs",
        hots: true,
        q: "Arrange the steps of DNA fingerprinting in the correct sequence:<br>I. Gel electrophoresis<br>II. Hybridisation<br>III. Digestion of DNA<br>IV. Southern Blotting<br>V. Autoradiography",
        options: [
            "III → I → IV → II → V",
            "II → IV → III → V",
            "III → IV → II → V → I",
            "II → III → I → V → IV"
        ],
        correct: 0,
        explanation: "The correct sequence of steps in DNA fingerprinting is: Digestion of isolated DNA by restriction endonucleases (III) → Separation of DNA fragments by gel electrophoresis (I) → Southern Blotting to transfer fragments to a membrane (IV) → Hybridisation using a labeled VNTR probe (II) → Detection of hybridized fragments by Autoradiography (V)."
    },

    {
        id: 619,
        topic: "HOTs",
        hots: true,
        q: "Consider the following statements and select the correct set of options:<br>a. The UTRs are present at both 3' end before start codon and 5' end after stop codon<br>b. Mg²⁺ is essential during activation of amino acids<br>c. Poly (A) is added to 3' end of newly formed hnRNA by poly A polymerase<br>d. Non-formylated methionine is attached with tRNA in Eukaryotes",
        options: [
            "a, b and d",
            "a, c and d",
            "b, c and d",
            "c and d"
        ],
        correct: 2,
        explanation: "Statement 'a' is incorrect because UTRs are present at the 5'-end *before* the start codon and at the 3'-end *after* the stop codon. Statements 'b', 'c', and 'd' are accurate statements describing prokaryotic/eukaryotic translation features."
    },

    {
        id: 620,
        topic: "HOTs",
        hots: true,
        q: "GUG normally codes for valine but at the start position it codes for methionine. The above statement is an exception to which property of the genetic code?",
        options: [
            "Non-ambiguous nature",
            "Degeneracy",
            "Universality",
            "Non-overlapping nature"
        ],
        correct: 0,
        explanation: "Normally, a single codon specifies exactly one amino acid (non-ambiguous). GUG is an exception because it is ambiguous, coding for either Valine or Methionine depending on whether it is at the initiation site or internally."
    },

    {
        id: 621,
        topic: "HOTs",
        hots: true,
        q: "The enzyme which has exonuclease activity in both 5'→3' and 3'→5' direction is",
        options: [
            "DNA polymerase III",
            "DNA polymerase II",
            "Kornberg enzyme",
            "Both (1) and (3)"
        ],
        correct: 2,
        explanation: "DNA polymerase-I (Kornberg enzyme) has exonuclease activity in both 5'→3' and 3'→5' direction. The correct option is Kornberg enzyme (DNA Pol I) as it uses 5'→3' activity for primer removal. The tempting option, DNA polymerase III, is incorrect because it only has 3'→5' exonuclease activity for proofreading."
    },

    {
        id: 622,
        topic: "HOTs",
        hots: true,
        q: "DNA replication is",
        options: [
            "Conservative and discontinuous",
            "Semi-conservative and discontinuous",
            "Semi-conservative and semi-discontinuous",
            "Semi-conservative only"
        ],
        correct: 2,
        explanation: "DNA replication is semi-conservative and semi-discontinuous. The leading strand is synthesized continuously and the lagging strand is synthesized discontinuously, while preserving one parental strand. Option 4 is tempting but incomplete as it omits the semi-discontinuous nature of the process."
    },

    {
        id: 623,
        topic: "HOTs",
        hots: true,
        q: "In a DNA strand nucleotides are linked by",
        options: [
            "Glycosidic bonds",
            "Phosphoester bonds",
            "Phosphodiester bonds",
            "H-bonds"
        ],
        correct: 2,
        explanation: "In a DNA strand, nucleotides are linked by phosphodiester bonds. This bond forms the sugar-phosphate backbone. Phosphoester bonds (Option 2) are tempting, but a single nucleotide has a phosphoester bond, whereas the linkage between two nucleotides is a phosphodiester bond."
    },

    {
        id: 624,
        topic: "HOTs",
        hots: true,
        q: "Which enzyme is involved in DNA repair?",
        options: [
            "Ligase",
            "DNA polymerase - I",
            "DNA polymerase - III",
            "Primase"
        ],
        correct: 1,
        explanation: "DNA polymerase I is involved in DNA repair. It fills the gaps left during excision repair. DNA polymerase III is tempting as the main replicative enzyme, but its primary role is bulk polymerization, not the specialized gap-filling of repair processes."
    },

    {
        id: 625,
        topic: "HOTs",
        hots: true,
        q: "Special unwinding enzyme that breaks H-bonds between two strands of DNA is",
        options: [
            "Topoisomerase",
            "Gyrase",
            "Helicase",
            "DNA polymerase"
        ],
        correct: 2,
        explanation: "Helicase is the unwinding enzyme; it unwinds DNA by breaking H-bonds between the two strands of DNA. Topoisomerase/Gyrase is tempting because it acts ahead of the fork, but its role is relieving supercoiling tension, not breaking H-bonds directly."
    },

    {
        id: 626,
        topic: "HOTs",
        hots: true,
        q: "Teminism is",
        options: [
            "Reverse transcription",
            "DNA replication",
            "RNA replication",
            "RNA repair"
        ],
        correct: 0,
        explanation: "Reverse transcription is also known as \"Teminism\". It was discovered by Temin and Baltimore in retroviruses. RNA replication is a tempting wrong option because it involves RNA viruses, but Teminism specifically refers to RNA to DNA conversion."
    },

    {
        id: 627,
        topic: "HOTs",
        hots: true,
        q: "Wild type E. coli growing in medium with glucose is transferred to lactose containing medium. What changes occur?",
        options: [
            "Lac operon is induced",
            "Lac operon is suppressed",
            "Lac operon and Trp operon induced",
            "Both (1) and (2)"
        ],
        correct: 0,
        explanation: "When wild type E. coli growing in a medium with glucose is transferred to a lactose-containing medium, the lac operon is induced in the bacteria. Lactose acts as an inducer by inactivating the repressor. The suppression option is tempting if one assumes glucose prevents lactose use, but when transferred to a pure lactose medium, induction occurs."
    },

    {
        id: 628,
        topic: "HOTs",
        hots: true,
        q: "Largest number of bases present in gene located on",
        options: [
            "X-chromosome",
            "Y-chromosome",
            "Chromosome-1",
            "Chromosome-22"
        ],
        correct: 0,
        explanation: "The average gene consists of 3000 bases, but size varies greatly, with the largest known human gene being dystrophin at 2.4 million bases. The dystrophin gene is located on the short arm of the X-chromosome. Chromosome 1 is tempting because it has the highest number of genes, but it does not have the single largest gene."
    },

    {
        id: 629,
        topic: "HOTs",
        hots: true,
        q: "RNA has the following functions, except",
        options: [
            "It is the genetic material in some viruses and bacteria",
            "It functions as a messenger",
            "It functions as an adapter for carrying amino acids",
            "It acts as catalytic molecule in some cases"
        ],
        correct: 0,
        explanation: "RNA is the genetic material in some viruses. However, bacteria exclusively use DNA as their primary genetic material. Option 1 is the exception because it incorrectly includes bacteria. The catalytic option is a tempting distractor, but ribozymes are indeed RNA."
    },

    {
        id: 630,
        topic: "HOTs",
        hots: true,
        q: "Read the following statements and select the correct option<br>(a) Polypeptide sequences are dictated by DNA and represented by mRNA<br>(b) Structural genes in bacteria is monocistronic<br>(c) Transcription and translation is coupled in bacteria<br>(d) In lac operon, operator is occupied by aporepressor during regulation",
        options: [
            "(a) and (d)",
            "(a) and (b)",
            "(a) and (c)",
            "(c) and (d)"
        ],
        correct: 2,
        explanation: "The structural gene in bacteria is polycistronic (making 'b' incorrect). In the lac operon, the operator is occupied by the active repressor, not an aporepressor (making 'd' incorrect). Thus, only (a) and (c) are correct statements."
    },

    {
        id: 631,
        topic: "HOTs",
        hots: true,
        q: "Match the column<br><b>Column I</b><br>(A) Operon<br>(B) Nucleic acid<br>(C) Polynucleotide phosphorylase<br>(D) Reverse transcription<br><br><b>Column II</b><br>(i) Altmann<br>(ii) Jacob and Monod<br>(iii) Severo Ochoa<br>(iv) Temin and Baltimore",
        options: [
            "(A) - (i), (B) - (ii), (C) - (iii), (D) - (iv)",
            "(A) - (ii), (B) - (i), (C) - (iii), (D) - (iv)",
            "(A) - (iv), (B) - (iii), (C) - (ii), (D) - (i)",
            "(A) - (ii), (B) - (iv), (C) - (iii), (D) - (i)"
        ],
        correct: 1,
        explanation: "Jacob & Monod proposed the operon model in bacteria. The term nucleic acid was coined by Altmann. Severo Ochoa discovered polynucleotide phosphorylase. Temin and Baltimore discovered reverse transcription."
    },

    {
        id: 632,
        topic: "HOTs",
        hots: true,
        q: "If Meselson and Stahl's experiment is continued for four generations in bacteria, the ratio of ¹⁵N/¹⁵N : ¹⁵N/¹⁴N : ¹⁴N/¹⁴N containing DNA in the fourth generation would be",
        options: [
            "1:1:0",
            "1:4:0",
            "0:1:3",
            "0:1:7"
        ],
        correct: 3,
        explanation: "If Meselson and Stahl's experiment is continued for four generations in bacteria, 16 DNA molecules are produced (2⁴ = 16). Among the 16 DNA molecules produced, 2 are hybrid (¹⁵N/¹⁴N) and 14 are entirely light (¹⁴N/¹⁴N). None are heavy (¹⁵N/¹⁵N). The ratio is 0:2:14, which simplifies to 0:1:7."
    },

    {
        id: 633,
        topic: "HOTs",
        hots: true,
        q: "Select the incorrect statement",
        options: [
            "A nucleosome is a basic unit of DNA packaging in eukaryotes",
            "A histone octamer is approximately surrounded by 200 base pairs of DNA",
            "Nucleosome appears as a beads on a string of DNA under electron microscope",
            "A histone octamer consists of 2 copies of histone molecules H1, H2B, H3 and H4"
        ],
        correct: 3,
        explanation: "A histone octamer does not contain H1 histone. It consists of two copies each of H2A, H2B, H3, and H4. H1 acts as a linker histone outside the core octamer, making option 4 the incorrect statement."
    },

    {
        id: 634,
        topic: "HOTs",
        hots: true,
        q: "The length of DNA is characteristic of an organism and it is based on number of base pairs or nucleotides. Mark the incorrect one",
        options: [
            "Lambda phage - 48502 nucleotides",
            "φ×174 - 5386 nucleotides",
            "E. coli - 4.6 × 10⁶ bp",
            "Human genome - 3.3 × 10⁹ bp"
        ],
        correct: 0,
        explanation: "Lambda phage contains 48502 bp (base pairs), not just nucleotides. Since it is double-stranded, the term 'bp' is required. φ×174 is single-stranded, so 'nucleotides' is correct for it."
    },

    {
        id: 635,
        topic: "HOTs",
        hots: true,
        q: "The process of DNA replication requires a set of enzymes. Which of the following enzymes are not associated with this process?<br>(a) Phosphorylase<br>(b) RNA dependent DNA polymerase<br>(c) DNA dependent RNA polymerase<br>(d) DNA dependent DNA polymerase<br>(e) Polynucleotide phosphorylase<br>(f) RNA ligase",
        options: [
            "a, b and f",
            "a, b and e",
            "b, c, e and f",
            "a, c and f"
        ],
        correct: 2,
        explanation: "Phosphorylase and DNA dependent DNA polymerase are associated with the process of DNA replication. RNA dependent DNA polymerase (reverse transcriptase), polynucleotide phosphorylase (Severo Ochoa enzyme), and RNA ligase are not associated with standard DNA replication. The correct answer highlights the enzymes not involved."
    },

    {
        id: 636,
        topic: "HOTs",
        hots: true,
        q: "Histones are rich in amino acids",
        options: [
            "Glutamic and Aspartic acids",
            "Lysine and Aspartic acid",
            "Arginine and Lysine",
            "Asparagine and Glutamine"
        ],
        correct: 2,
        explanation: "Histones are rich in basic amino acids like arginine and lysine, which give them a positive charge to tightly bind the negatively charged DNA. Glutamic and aspartic acids are tempting distractors as they are acidic and negatively charged."
    },

    {
        id: 637,
        topic: "HOTs",
        hots: true,
        q: "Refer the given statements stating true(T) or false(F) and select the correct option.<br>(i) If the DNA molecule has 2000 base pairs then the number of sugar will be 6000 and of phosphate will be 3000<br>(ii) A nucleotide molecule consist of a nitrogenous base, pentose sugar and a phosphate molecule<br>(iii) Site of DNA replication in a cell is cytoplasm<br>(iv) Semiconservative replication of DNA has been proved in bacteria as well as in plants",
        options: [
            "T, T, F, T",
            "F, T, F, T",
            "T, T, F, F",
            "F, T, T, F"
        ],
        correct: 1,
        explanation: "If a DNA molecule has 2000 base pairs, then it has 4000 bases. Hence, the number of sugars and phosphates will be 4000 each (making (i) false). DNA replication occurs in the nucleus of a eukaryotic cell (making (iii) false). Statements (ii) and (iv) are true."
    },

    {
        id: 638,
        topic: "HOTs",
        hots: true,
        q: "Select the correct sequence of events during DNA fingerprinting",
        options: [
            "Electrophoresis → Cutting → Isolation → Blotting → Autoradiography",
            "Isolation → Cutting → Electrophoresis → Blotting → Autoradiography",
            "Isolation → Electrophoresis → Cutting → Blotting → Autoradiography",
            "Cutting → Isolation → Blotting → Electrophoresis → Autoradiography"
        ],
        correct: 1,
        explanation: "The correct sequence of events in DNA fingerprinting: Isolation of DNA → Cutting (Restriction digestion) → Electrophoresis → Southern Blotting → Autoradiography. The other options scramble this standard molecular biology workflow."
    },

    {
        id: 639,
        topic: "HOTs",
        hots: true,
        q: "Select the correct features about Lac operon<br>(a) Inducible system<br>(b) Repressible system<br>(c) β-galactosidase is coded by z gene",
        options: [
            "Only (a)",
            "Both (b) and (c)",
            "Both (a) and (c)",
            "Only (b)"
        ],
        correct: 2,
        explanation: "The Lac operon is an inducible system (normally off, turned on by lactose), and its z gene codes for β-galactosidase. A repressible system (like the Trp operon) is normally on, making option (b) incorrect for Lac."
    },

    {
        id: 640,
        topic: "HOTs",
        hots: true,
        q: "Which of the following feature shows universality of genetic code?",
        options: [
            "Some amino acids are coded by more than one codon",
            "UUU codes for phenylalanine in all organisms",
            "One codon codes for only one amino acid",
            "The codon is read in mRNA in contiguous fashion"
        ],
        correct: 1,
        explanation: "UUU codes for phenylalanine in all organisms (from bacteria to humans). It reflects the universality of the genetic code. The other options describe degeneracy, non-ambiguity, and commaless reading, not universality."
    },

    {
        id: 641,
        topic: "HOTs",
        hots: true,
        q: "Which one is not the function of DNA?",
        options: [
            "Variations",
            "Protein synthesis",
            "Hereditary information",
            "Splicing"
        ],
        correct: 3,
        explanation: "Splicing occurs in hnRNA to produce mRNA. It is a step involved in post-transcriptional processing of RNA, not a function of DNA itself. DNA holds hereditary info, generates variations via mutations, and dictates protein synthesis."
    },

    {
        id: 642,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/id 642.jpg",
        q: "Find out the correct statement w.r.t. diagram representing translation in bacteria",
        options: [
            "Last peptide bond formation takes place between glycine and leucine.",
            "Ribosome moves from codon to codon along the mRNA",
            "First amino acid is proline present at A-site",
            "Last codon of m-RNA is CUU"
        ],
        correct: 1,
        explanation: "The ribosome moves from codon to codon along the mRNA with the help of translocase. This is the definition of translocation during the elongation phase of translation."
    },

    {
        id: 643,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is not a feature of an adapter molecule?",
        options: [
            "Its three dimensional structure is inverted L shaped",
            "It reads the code on one hand and binds to specific amino acid on the other hand",
            "Was known as soluble RNA before the genetic code was postulated",
            "All three stop codons have a specific adapter molecule"
        ],
        correct: 3,
        explanation: "All three stop codons have no tRNA (or adapter molecule). This lack of a corresponding tRNA is exactly what halts the translation process. The other statements correctly describe tRNA."
    },

    {
        id: 644,
        topic: "HOTs",
        hots: true,
        q: "Which bond is absent in the genetic material of φ×174 virus?",
        options: [
            "Hydrogen bond",
            "Glycosidic bond",
            "Phosphoester bond",
            "Phosphodiester bond"
        ],
        correct: 0,
        explanation: "The φ×174 virus has single-stranded DNA. Hence, it does not have hydrogen bonds between complementary bases (as there is no second strand to pair with). The sugar-phosphate backbone bonds and glycosidic linkages remain intact."
    },

    {
        id: 645,
        topic: "HOTs",
        hots: true,
        q: "Read the statements carefully and mark them as True(T) or False(F)<br>(A) cDNA is synthetic type of DNA generated from mRNA<br>(B) Human genome project was a 15 year project<br>(C) The sequence of chromosome 1 was completed only in May 2006<br>(D) DNA finger printing is based upon principle of polymorphism in DNA sequence",
        options: [
            "TFTT",
            "TFFT",
            "TFTF",
            "TTFF"
        ],
        correct: 0,
        explanation: "The Human Genome Project was a 13-year mega project (1990-2003), making statement B False. Statements A, C, and D are factually correct. Thus, the sequence is T, F, T, T."
    },

    {
        id: 646,
        topic: "HOTs",
        hots: true,
        q: "RNA polymerase I does not catalyse the transcription of",
        options: [
            "5.8S rRNA",
            "18S rRNA",
            "5S rRNA",
            "28S rRNA"
        ],
        correct: 2,
        explanation: "RNA polymerase III catalyses the synthesis of 5S rRNA in eukaryotes. RNA polymerase I handles the larger rRNA subunits (28S, 18S, and 5.8S). Option 3 is tempting if one assumes all rRNAs share the same polymerase."
    },

    {
        id: 647,
        topic: "HOTs",
        hots: true,
        q: "The average gene consists of (i) bases, but (ii) vary greatly, with the largest known human gene being dystrophin at (iii) bases",
        options: [
            "(i) 4000, (ii) shape, (iii) 2.4 million",
            "(i) 3000, (ii) size, (iii) 2.4 million",
            "(i) 2.4 million, (ii) shape, (iii) 4000",
            "(i) 3000, (ii) size, (iii) 4000"
        ],
        correct: 1,
        explanation: "The average human gene consists of 3000 bases, but size varies greatly. Dystrophin is the largest known at 2.4 million bases. Thus, (i) is 3000, (ii) is size, and (iii) is 2.4 million."
    },

    {
        id: 648,
        topic: "HOTs",
        hots: true,
        q: "In a piece of E. coli DNA, 100 cytosine and 40 adenine residues are found. Find the total number of hydrogen bonds present in this piece of DNA",
        options: [
            "400",
            "420",
            "380",
            "280"
        ],
        correct: 2,
        explanation: "Cytosine forms 3 hydrogen bonds with guanine, while adenine forms 2 hydrogen bonds with thymine in dsDNA. Number of hydrogen bonds = (100 × 3) + (40 × 2) = 300 + 80 = 380."
    },

    {
        id: 649,
        topic: "HOTs",
        hots: true,
        q: "Which one is not a property of genetic material?",
        options: [
            "It should undergo mutation at a fast rate",
            "It should be able to generate its replica",
            "It should be chemically and structurally stable",
            "It should be able to express itself in the form of Mendelian characters"
        ],
        correct: 0,
        explanation: "A genetic material should not undergo mutation at a fast rate. It should provide scope for slow mutations that are required for evolution while maintaining overall stability."
    },

    {
        id: 650,
        topic: "HOTs",
        hots: true,
        q: "Which enzyme removes ribonucleotides from primer and adds equivalent deoxyribonucleotides?",
        options: [
            "DNA polymerase I",
            "Primase",
            "DNA polymerase II",
            "Helicase"
        ],
        correct: 0,
        explanation: "DNA polymerase I removes ribonucleotides from the primer and adds equivalent deoxyribonucleotides using its 5'→3' exonuclease and polymerizing activities."
    },

    {
        id: 651,
        topic: "HOTs",
        hots: true,
        q: "How many of the following statements are correct with respect to genetic code?<br>(a) Each codon is independent and does not overlap the next codon<br>(b) All 64 codons code for amino acids<br>(c) UGG is ambiguous and degenerate codon<br>(d) The codon is triplet in nature",
        options: [
            "One",
            "Two",
            "Three",
            "Four"
        ],
        correct: 1,
        explanation: "Statements (a) and (d) are correct. Statement (b) is wrong because only 61 codons code for amino acids (3 are stop codons). Statement (c) is wrong because UGG (Tryptophan) is an unambiguous and non-degenerate codon."
    },

    {
        id: 652,
        topic: "HOTs",
        hots: true,
        q: "Which of the following bond is not found in a single nucleotide of RNA?",
        options: [
            "Phosphoester bond",
            "Glycosidic bond",
            "Phosphodiester bond",
            "Both (1) and (2)"
        ],
        correct: 2,
        explanation: "In a single isolated nucleotide of RNA, a phosphodiester bond is not found. A phosphodiester bond connects two adjacent nucleotides in a polynucleotide chain. An individual nucleotide only contains a phosphoester bond."
    },

    {
        id: 653,
        topic: "HOTs",
        hots: true,
        q: "Soluble RNA is",
        options: [
            "tRNA",
            "rRNA",
            "mRNA",
            "hnRNA"
        ],
        correct: 0,
        explanation: "tRNA is also known as soluble RNA (sRNA) because it is small and remains soluble in 1M NaCl solution during extraction."
    },

    {
        id: 654,
        topic: "HOTs",
        hots: true,
        q: "RNA primer is removed by",
        options: [
            "5'→3' exonuclease action of DNA Polymerase-III",
            "5'→3' exonuclease action of DNA Polymerase-I",
            "3'→5' exonuclease action of DNA Polymerase-III",
            "3'→5' exonuclease action of DNA Polymerase-I"
        ],
        correct: 1,
        explanation: "The RNA primer is removed by the 5'→3' exonuclease activity of DNA polymerase I during replication. The 3'→5' exonuclease action is used for proofreading, not forward primer removal."
    },

    {
        id: 655,
        topic: "HOTs",
        hots: true,
        q: "Tailoring of hnRNA is done by",
        options: [
            "Snurps",
            "Introns",
            "Exons",
            "18S rRNA"
        ],
        correct: 0,
        explanation: "Tailoring (splicing) of hnRNA is done by small nuclear RNA (snRNA) and protein complexes called small nuclear ribonucleoproteins or snRNPs (pronounced 'Snurps')."
    },

    {
        id: 656,
        topic: "HOTs",
        hots: true,
        q: "Codon which can perform dual action",
        options: [
            "UAA",
            "UGA",
            "AUG",
            "UAG"
        ],
        correct: 2,
        explanation: "AUG performs dual functions: it codes for the amino acid methionine and it also acts as the initiator (start) codon for translation."
    },

    {
        id: 657,
        topic: "HOTs",
        hots: true,
        q: "Read the following statements A and B and choose the correct option<br>A: Histones are basic in nature<br>B: Histones are rich in the amino acids lysines and arginines",
        options: [
            "Both the statements A and B are incorrect",
            "Statement A is correct but B is incorrect",
            "Both the statements A and B are correct and B is correct explanation of A",
            "Both the statements A and B are correct but B is not the correct explanation of A"
        ],
        correct: 2,
        explanation: "Both A and B are correct, and B is the correct explanation of A. Proteins acquire charge depending upon the abundance of amino acids with charged side chains. Lysine and arginine are basic amino acids, which is exactly why histones are basic."
    },

    {
        id: 658,
        topic: "HOTs",
        hots: true,
        q: "Mark the correct match",
        options: [
            "VNTR - 11-60 bps",
            "SSR - Microsatellite",
            "VNTR - Exon",
            "Minisatellite - ..."
        ],
        correct: 0,
        explanation: "VNTRs (Variable Number of Tandem Repeats) or minisatellites are repeating sequences of 11-60 base pairs. SSRs (microsatellites) typically have smaller repeats (1-6 bp). Note: Option 2 is also factually correct in general biology, but based on the provided key logic, Option 1 is the intended match for the repeat length."
    },

    {
        id: 659,
        topic: "HOTs",
        hots: true,
        q: "___ % of the genome codes for protein in human beings",
        options: [
            "98",
            "50",
            "24",
            "<2"
        ],
        correct: 3,
        explanation: "Less than 2% of the human genome codes for proteins. The vast majority of the genome consists of non-coding sequences like introns, regulatory elements, and repetitive DNA."
    },

    {
        id: 660,
        topic: "HOTs",
        hots: true,
        q: "DNA polymerase I is involved in",
        options: [
            "Removal of RNA primer",
            "Filling of gap",
            "Joining of Okazaki fragments",
            "Both (1) and (2)"
        ],
        correct: 3,
        explanation: "DNA polymerase I removes the RNA primer (using 5'→3' exonuclease activity) and fills the resulting gap with DNA nucleotides. Joining of Okazaki fragments (Option 3) is the job of DNA ligase."
    },

    {
        id: 661,
        topic: "HOTs",
        hots: true,
        q: "The packaging of DNA at higher level requires",
        options: [
            "Five types of histones",
            "A histone octamer called 'nu' body",
            "NHC proteins",
            "hnRNA"
        ],
        correct: 2,
        explanation: "Packaging of DNA at higher level requires Non-histone chromosomal (NHC) proteins. While histones and the 'nu' body (nucleosome) are involved in the basic level of packaging, NHC proteins are required for higher-order chromatin organization."
    },

    {
        id: 662,
        topic: "HOTs",
        hots: true,
        q: "Select the correct statement from the following",
        options: [
            "Guanylyl transferase catalyses polyadenylation",
            "Polycistronic mRNA carries codons of single protein molecule",
            "In bacteria, translation begins much before mRNA is fully transcribed",
            "All exons have GU at 5' end and AG at 3' end"
        ],
        correct: 2,
        explanation: "In bacteria, translation begins much before mRNA is fully transcribed. This is because there is no nuclear membrane separating transcription and translation, and prokaryotic mRNA requires no post-transcriptional processing. Option 1 is wrong (it catalyses capping, not polyadenylation). Option 2 is wrong (polycistronic means multiple proteins)."
    },

    {
        id: 663,
        topic: "HOTs",
        hots: true,
        q: "Select the correct match",
        options: [
            "Jacob and Monod - Split gene",
            "Severo Ochoa - Polynucleotide phosphorylase",
            "Altmann - Operon concept",
            "Shine Dalgarno - Wobble hypothesis"
        ],
        correct: 1,
        explanation: "Severo Ochoa enzyme is Polynucleotide phosphorylase. Jacob and Monod proposed the operon model (not split gene). Altmann coined the term nucleic acid. Shine Dalgarno sequence is a ribosomal binding site in mRNA."
    },

    {
        id: 664,
        topic: "HOTs",
        hots: true,
        q: "Select the correct option with respect to transcription:<br><b>Direction of RNA synthesis | Direction of reading of the template DNA strand</b>",
        options: [
            "5'→3' | 3'→5'",
            "3'→5' | 5'→3'",
            "5'→3' | 5'→3'",
            "3'→5' | 3'→5'"
        ],
        correct: 0,
        explanation: "Direction of RNA synthesis is always 5'→3' and the direction of reading of the template DNA strand (w.r.t. transcription) is 3'→5'. This allows antiparallel complementary base pairing."
    },

    {
        id: 665,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is absent in prokaryotes?",
        options: [
            "Operon",
            "Regulation of splicing",
            "Coupled transcription and translation",
            "Polycistronic gene"
        ],
        correct: 1,
        explanation: "Regulation of splicing is not seen in prokaryotes because their genes are typically continuous and lack introns. Operons, coupled transcription/translation, and polycistronic genes are all hallmark features of prokaryotes."
    },

    {
        id: 666,
        topic: "HOTs",
        hots: true,
        q: "Find the incorrect statement about the repressor in Lac operon:",
        options: [
            "It is a protein",
            "Binds to operator in presence of inducer",
            "It is synthesized by regulator gene",
            "Regulation of lac operon by repressor is generally under negative regulation"
        ],
        correct: 1,
        explanation: "The repressor does not bind to the operator in the presence of an inducer (like allolactose). The inducer binds to the repressor, changing its conformation and inactivating it, allowing transcription to proceed."
    },

    {
        id: 667,
        topic: "HOTs",
        hots: true,
        q: "The UTRs are present at both <b>(i)</b> end before start codon and <b>(ii)</b> end after stop codon. They are required for efficient <b>(iii)</b> process.",
        options: [
            "(i) 3', (ii) 5', (iii) Translation",
            "(i) 5', (ii) 3', (iii) Translation",
            "(i) 3', (ii) 5', (iii) Transcription",
            "(i) 5', (ii) 3', (iii) Replication"
        ],
        correct: 1,
        explanation: "Untranslated regions (UTRs) are present at both the 5' end (before the start codon) and the 3' end (after the stop codon). They are required for efficient translation."
    },

    {
        id: 668,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is an unusual nucleotide used in capping of mRNA?",
        options: [
            "Dihydroxyuridine",
            "Pseudouridine",
            "Methylated Guanosine triphosphate",
            "Adenylate nucleotide"
        ],
        correct: 2,
        explanation: "In post-transcriptional processing, methylated guanosine triphosphate (7-methylguanosine) is attached during capping at the 5' end of hnRNA/mRNA. Adenylate nucleotides are used for tailing at the 3' end."
    },

    {
        id: 669,
        topic: "HOTs",
        hots: true,
        q: "In eukaryotes, DNA replication, transcription and translation respectively occurs in",
        options: [
            "Nucleus, Nucleus, Nucleus",
            "Cytoplasm, Nucleus, Nucleus",
            "Nucleus, Nucleus, Cytoplasm",
            "Nucleus, Cytoplasm, Cytoplasm"
        ],
        correct: 2,
        explanation: "In eukaryotes, DNA replication and transcription occur in the nucleus, while translation occurs in the cytoplasm. This compartmentalization allows for post-transcriptional processing before translation begins."
    },

    {
        id: 670,
        topic: "HOTs",
        hots: true,
        q: "Read the statements and mark them as True(T) or False(F)<br>A. Rho-factor is required for termination of transcription<br>B. Prokaryotic RNA polymerase produces 28S rRNA<br>C. DNA polymerase I is main polymerizing enzyme<br>D. In prokaryotes, DNA gyrase removes supercoils of DNA",
        options: [
            "TFFT",
            "TFTF",
            "TFFF",
            "FTTF"
        ],
        correct: 0,
        explanation: "RNA polymerase I in eukaryotes (not prokaryotes) produces 28S rRNA (Statement B is False). The main polymerizing enzyme is DNA polymerase III, not I (Statement C is False). Statements A and D are true. Therefore, the sequence is T, F, F, T."
    },

    {
        id: 671,
        topic: "HOTs",
        hots: true,
        q: "Select correct statements from the following<br>(A) DNA dependent DNA polymerase uses both the strands of DNA as a template<br>(B) Replication of DNA can start from any site of DNA<br>(C) Replication occurs in S phase of cell cycle<br>(D) Replication is semiconservative in prokaryotes as well as in eukaryotes",
        options: [
            "A, C, D",
            "B, C, D",
            "A, B, C",
            "A, B, D"
        ],
        correct: 0,
        explanation: "Replication of DNA starts at a specific region of DNA called the origin of replication (ori), making statement B incorrect. Statements A, C, and D are correct features of replication."
    },

    {
        id: 672,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 672.jpg",
        q: "The diagram represents a nucleosome. Choose the correct combination of labelling A, B, C.<br>*(Assume A wraps the core, B is the linker histone, C is the core)*",
        options: [
            "A - H1 histone, B - DNA, C - Core",
            "A - DNA, B - H1 histone, C - Histone octamer",
            "A - RNA, B - DNA, C - Histone octamer",
            "A - DNA, B - Core, C - Histone octamer"
        ],
        correct: 1,
        explanation: "In a nucleosome, the DNA (A) is wrapped around the core histone octamer (C). The H1 histone (B) acts as a linker and clamps the DNA to the core."
    },

    {
        id: 673,
        topic: "HOTs",
        hots: true,
        q: "ELSI to solve any issues related to HGP are<br>(A) Ethical issue<br>(B) Legal issue<br>(C) Social issue",
        options: [
            "Only (A)",
            "Only (B) and (C)",
            "Only (C)",
            "All (A), (B) and (C)"
        ],
        correct: 3,
        explanation: "ELSI stands for Ethical, Legal, and Social Issues. It was a major component of the Human Genome Project to address the implications of sequencing the human genome."
    },

    {
        id: 674,
        topic: "HOTs",
        hots: true,
        q: "Select the correct statements<br>(i) Lac operon undergoes negative as well as positive control<br>(ii) Transformation experiment was performed on bacteria E. coli<br>(iii) Frame shifting involves the change in protein product coded by triplet codons<br>(iv) Teminism occurs in retroviruses",
        options: [
            "(i), (ii), (iii)",
            "(ii), (iii), (iv)",
            "(i), (iii), (iv)",
            "(i), (ii), (iv)"
        ],
        correct: 2,
        explanation: "Statement (ii) is incorrect because the transformation experiment was performed by Griffith on *Streptococcus pneumoniae*, not E. coli. Statements (i), (iii), and (iv) are factually correct."
    },

    {
        id: 675,
        topic: "HOTs",
        hots: true,
        q: "For efficient translation all are required, except",
        options: [
            "Peptidyl and Aminoacyl sites should be close enough",
            "Ribozyme",
            "UTR (untranslated regions)",
            "Charged tRNA for stop codon"
        ],
        correct: 3,
        explanation: "There are no tRNAs for stop codons. Translation termination occurs when a release factor binds to the stop codon instead of a charged tRNA."
    },

    {
        id: 676,
        topic: "HOTs",
        hots: true,
        q: "The percentage of hybrid and light DNA after the 3rd generation of replication in E. coli will be ___ and ___ ; if its generation time is 20 minutes according to Meselson and Stahl experiment",
        options: [
            "75% hybrid and 25% light DNA",
            "25% hybrid and 75% light DNA",
            "0% hybrid and 100% light DNA",
            "100% hybrid and 0% light DNA"
        ],
        correct: 1,
        explanation: "The 3rd generation occurs after 60 minutes (3 × 20). A total of 8 DNA molecules are produced (2³). Out of them, 2 are hybrid (containing the original heavy strands) and 6 are completely light. The percentage of hybrid DNA is 2/8 * 100 = 25%. The percentage of light DNA is 6/8 * 100 = 75%."
    },

    {
        id: 677,
        topic: "HOTs",
        hots: true,
        q: "DNA was extracted from Drosophila. The proportion of cytosine was found to be 36%. Then what is the amount of guanine and thymine?",
        options: [
            "36% and 36% respectively",
            "36% and 28% respectively",
            "18% and 28% respectively",
            "36% and 14% respectively"
        ],
        correct: 3,
        explanation: "According to Chargaff's rules: C = G = 36%. Total C + G = 72%. The remaining 28% must be A + T. Since A = T, then T = 14%. Therefore, the amount of Guanine and Thymine are 36% and 14% respectively."
    },

    {
        id: 678,
        topic: "HOTs",
        hots: true,
        q: "Select the correct statements<br>(i) The pitch of DNA helix is 3.4 nm<br>(ii) DNA molecule having 1000 bp will have 1000 N-glycosidic linkage<br>(iii) For transmission of genetic information RNA is better material<br>(iv) Kornberg enzyme causes removal of RNA primer",
        options: [
            "All are correct",
            "(i), (iii) and (iv)",
            "(i), (ii), (iii)",
            "(ii), (iii), (iv)"
        ],
        correct: 1,
        explanation: "A DNA molecule with 1000 bp has 2000 nucleotides. Hence, it will have 2000 N-glycosidic linkages, making statement (ii) false. Statement (iii) is correct as RNA is better for the transmission/expression of genetic information, while DNA is better for storage."
    },

    {
        id: 679,
        topic: "HOTs",
        hots: true,
        q: "Probe used for hybridisation in DNA fingerprinting is",
        options: [
            "ss DNA",
            "ds DNA",
            "ds RNA",
            "Both (2) and (3)"
        ],
        correct: 0,
        explanation: "Single-stranded DNA (ssDNA) or ssRNA is used as a radioactive probe for hybridization in DNA fingerprinting so it can complementarily bind to the VNTRs."
    },

    {
        id: 680,
        topic: "HOTs",
        hots: true,
        q: "Some events that take place during synthesis of a specific protein are listed below<br>(A) Messenger RNA attaches to a ribosome<br>(B) DNA serves as a template for RNA production<br>(C) tRNA bonds to a specific codon<br>(D) Amino acids are bonded together<br>(E) RNA moves from the nucleus to the cytoplasm<br>The correct order of these events is",
        options: [
            "(B)→(E)→(A)→(C)→(D)",
            "(B)→(C)→(E)→(D)→(A)",
            "(D)→(A)→(E)→(C)→(B)",
            "(C)→(B)→(A)→(E)→(D)"
        ],
        correct: 0,
        explanation: "The correct sequence is: DNA serves as a template for transcription (B) → mRNA moves to the cytoplasm (E) → mRNA attaches to the ribosome (A) → tRNA binds to the codon (C) → Amino acids bond together to form a polypeptide (D)."
    },

    {
        id: 681,
        topic: "HOTs",
        hots: true,
        q: "Select the correct statements from the following<br>(i) cDNA is generated from mRNA<br>(ii) Snips are rare in human genome<br>(iii) In DNA fingerprinting hybridisation is done with molecular probe<br>(iv) Teminism requires DNA dependent RNA polymerase",
        options: [
            "All are correct",
            "(ii) and (iii)",
            "(iii) and (iv)",
            "(i) and (iii)"
        ],
        correct: 3,
        explanation: "Statement (ii) is false because SNPs (single nucleotide polymorphisms) are very common (identified at 1.4 million locations). Statement (iv) is false because Teminism (reverse transcription) requires RNA-dependent DNA polymerase. Only (i) and (iii) are correct."
    },

    {
        id: 682,
        topic: "HOTs",
        hots: true,
        q: "Tryptophan operon is",
        options: [
            "With three structural genes",
            "Inducible system",
            "Repressible system",
            "Catabolic system"
        ],
        correct: 2,
        explanation: "The Trp operon is a repressible system. It has five structural genes (trp E, D, C, B, A) and is associated with anabolic pathways (synthesis of tryptophan), turning off when the product is abundant."
    },

    {
        id: 683,
        topic: "HOTs",
        hots: true,
        q: "Calculate number of phosphodiester bonds in the nucleic acid of Lambda virus.",
        options: [
            "2 × 5386 - 2",
            "2 × 48502 - 2",
            "2 × 3.3 × 10⁹ - 2",
            "2 × 4800"
        ],
        correct: 1,
        explanation: "Since Lambda phage has linear, dsDNA with 48502 base pairs, it has 2 × 48502 nucleotides. In linear DNA, the number of phosphodiester bonds is (total nucleotides - 2), so it is 2 × 48502 - 2."
    },

    {
        id: 684,
        topic: "HOTs",
        hots: true,
        q: "Read the following statements:<br>(A) Galactose may bind with the repressor and inactive it<br>(B) In the absence of lactose, the repressor binds at the operator region<br>(C) The z-gene codes for permease<br>(D) This was elucidated by Jacob and Monod<br>The correct statements w.r.t. lac operon are",
        options: [
            "A and B",
            "A and C",
            "B and D",
            "A and D"
        ],
        correct: 2,
        explanation: "Statement A is false (Allolactose, not galactose, binds the repressor). Statement C is false (The z-gene codes for β-galactosidase, while y codes for permease). Statements B and D are true."
    },

    {
        id: 685,
        topic: "HOTs",
        hots: true,
        q: "Give the correct word or phenomenon in column B for statements mentioned in column A.<br>I. Highly condensed non-transcribing part of chromosome → (a)<br>II. Small RNA helps in DNA replication initiation → (b)<br>III. Enzyme required to release supercoils of DNA → (c)",
        options: [
            "a→Euchromatin, b→DNA primer, c→Topoisomerase",
            "a→Heterochromatin, b→RNA primer, c→Helicase",
            "a→Heterochromatin, b→RNA primer, c→Topoisomerase",
            "a→Euchromatin, b→RNA primer, c→SSBP"
        ],
        correct: 2,
        explanation: "The highly condensed inactive part is Heterochromatin. DNA replication requires a short RNA primer. Topoisomerase is the enzyme that releases supercoiling tension."
    },

    {
        id: 686,
        topic: "HOTs",
        hots: true,
        q: "Which of the following bond is not the characteristic of a single nucleotide?",
        options: [
            "Phosphoester bond",
            "Phosphodiester bond",
            "Glycosidic bond",
            "Both (2) and (3)"
        ],
        correct: 1,
        explanation: "A single nucleotide cannot have a phosphodiester bond. It only has one phosphoester bond linking the phosphate to the sugar, and a glycosidic bond linking the sugar to the base. The diester bond forms only when two nucleotides join."
    },

    {
        id: 687,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is/are required in protein synthesis?<br>I. Ligase<br>II. Endonuclease<br>III. tRNA<br>IV. mRNA<br>V. Amino acid pool<br>VI. GTP<br>VII. ATP<br>Choose the right combination.",
        options: [
            "I, II, III",
            "III, IV and VII only",
            "III, IV, V, VI and VII",
            "III, VI and VII only"
        ],
        correct: 2,
        explanation: "Ligase and endonuclease are not required in protein synthesis (they are used in DNA replication/repair/recombinant DNA tech). tRNA, mRNA, amino acids, ATP (for activation), and GTP (for translocation) are all required."
    },

    {
        id: 688,
        topic: "HOTs",
        hots: true,
        q: "Chromosome number A has most genes (2968) and chromosome B has fewest genes (231)",
        options: [
            "A→1, B→Y",
            "A→1, B→X",
            "A→X, B→Y",
            "A→Y, B→1"
        ],
        correct: 0,
        explanation: "Chromosome 1 has the highest number of genes (2968), and the Y chromosome has the fewest genes (231). Thus A is 1 and B is Y."
    },

    {
        id: 689,
        topic: "HOTs",
        hots: true,
        q: "Which one is incorrect w.r.t prokaryotic mRNA?",
        options: [
            "Polycistronic in nature",
            "More stable than rRNA",
            "Have Shine Dalgarno sequence",
            "Lacks Cap and Tail"
        ],
        correct: 1,
        explanation: "Prokaryotic mRNA is generally very unstable and short-lived compared to rRNA (which is the most stable form of RNA). Thus, the statement that it is more stable is incorrect."
    },

    {
        id: 690,
        topic: "HOTs",
        hots: true,
        q: "Hogness box is the characteristic of",
        options: [
            "Prokaryotic promoter",
            "Eukaryotic promoter",
            "Prokaryotic structural gene",
            "Prokaryotic terminator"
        ],
        correct: 1,
        explanation: "In eukaryotes, the TATA box or Hogness box (a 7 bp long TATATAT or TATAAAT sequence) is located about 20 bp upstream from the start point in the promoter. In prokaryotes, it is called the Pribnow box."
    },

    {
        id: 691,
        topic: "HOTs",
        hots: true,
        q: "Find the incorrect match",
        options: [
            "Central Dogma: F. Crick",
            "Operon: Jacob and Monod",
            "Kornberg: DNA polymerase - I",
            "Teminism: Gamow"
        ],
        correct: 3,
        explanation: "Teminism (Reverse Transcription) was proposed by Temin and Baltimore, not Gamow. George Gamow proposed the triplet nature of the genetic code."
    },

    {
        id: 692,
        topic: "HOTs",
        hots: true,
        q: "Choose the incorrect pair (w.r.t transcription in prokaryotes)",
        options: [
            "Promoter - Binding site for RNA polymerase",
            "Terminator - Defines the end of transcription process",
            "Sigma factor - Meant for elongation",
            "Rho factor - Termination factor"
        ],
        correct: 2,
        explanation: "Sigma (σ) factor is known as the initiation factor; it catalyses the initiation of transcription by helping RNA polymerase bind tightly to the promoter. Elongation is handled by the core enzyme alone."
    },

    {
        id: 693,
        topic: "HOTs",
        hots: true,
        q: "Transposons are called",
        options: [
            "Split gene",
            "Jumping gene",
            "Reporter gene",
            "Regulator gene"
        ],
        correct: 1,
        explanation: "Transposons are mobile genetic elements that can move from one location in the genome to another, hence they are also known as jumping genes."
    },

    {
        id: 694,
        topic: "HOTs",
        hots: true,
        q: "In Eukaryotes, RNA Polymerase-III catalyses the synthesis of",
        options: [
            "All rRNA and tRNA",
            "mRNA, hnRNA and SnRNA",
            "5S rRNA, tRNA and SnRNA",
            "28S rRNA, 18S rRNA and 5S rRNA"
        ],
        correct: 2,
        explanation: "In eukaryotes, RNA polymerase III synthesizes t-RNA, 5S rRNA, and some snRNAs. Pol I does the larger rRNAs, and Pol II does mRNA precursors (hnRNA)."
    },

    {
        id: 695,
        topic: "HOTs",
        hots: true,
        q: "Read the following statements A and B carefully and choose the correct option.<br>A: The genetic code is degenerate.<br>B: Most amino acids are coded by more than one codon.",
        options: [
            "Both the statements A and B are incorrect",
            "Statements A is correct but B is incorrect",
            "Both the statements A and B are correct and B is the correct explanation of A",
            "Both the statements A and B are correct but B is not the correct explanation of A"
        ],
        correct: 2,
        explanation: "Some amino acids are coded by more than one codon, which is the very definition of the term \"degenerate\" when applied to the genetic code. Thus, B explains A."
    },

    {
        id: 696,
        topic: "HOTs",
        hots: true,
        q: "Out of the following four ds-DNA samples which one shows maximum T<sub>m</sub> (melting temperature) value?",
        options: [
            "DNA with 76% GC content",
            "DNA with 40% cytosine",
            "DNA with 18% thymine",
            "DNA with 3% adenine"
        ],
        correct: 3,
        explanation: "The melting temperature (T<sub>m</sub>) of DNA is proportional to GC amounts, since GC pairs have 3 hydrogen bonds. DNA with 3% adenine has 3% thymine, meaning its GC content is a massive 94%. This will have the highest melting temperature."
    },

    {
        id: 697,
        topic: "HOTs",
        hots: true,
        q: "During translation mechanism, a tRNA with the anticodon AAA bonds with ______ amino acid.",
        options: [
            "Leucine",
            "Arginine",
            "Methionine",
            "Phenylalanine"
        ],
        correct: 3,
        explanation: "An anticodon AAA on tRNA will pair with the codon UUU on mRNA. The codon UUU codes for the amino acid phenylalanine."
    },

    {
        id: 698,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 698.jpg",
        q: "The base sequence on RNA that can be made from the following DNA molecule is<br><b>3' G C T A A C G A T C 5'</b><br><b>5' C G A T T G C T A G 3'</b>",
        options: [
            "5' CGAUUGCUAG 3'",
            "5' GCUAACGAUC 3'",
            "3' CGAUUGCUAG 5'",
            "3' GCUAACGAUG 5'"
        ],
        correct: 0,
        explanation: "The Template strand (non-coding strand) is the 3'→5' strand, which is 3' GCTAACGATC 5'. The mRNA transcribed from it will be 5'→3' and complementary: 5' CGAUUGCUAG 3'."
    },

    {
        id: 699,
        topic: "HOTs",
        hots: true,
        q: "DNA specific RNA polymerase enzyme involved in DNA replication mechanism is",
        options: [
            "Ligase",
            "Pyrophosphatase",
            "Ribonuclease-P",
            "Primase"
        ],
        correct: 3,
        explanation: "Primase catalyzes the synthesis of short RNA molecules used as primers for DNA polymerases. It is essentially an RNA polymerase that functions during DNA replication."
    },

    {
        id: 700,
        topic: "HOTs",
        hots: true,
        q: "Select incorrect statement w.r.t. post-transcription processing.",
        options: [
            "Splicing is ATP dependent process",
            "Spliceosome forms the loops of exons",
            "Cap is formed of modified GTP",
            "Modification is required to make a functional tRNA"
        ],
        correct: 1,
        explanation: "The spliceosome removes introns from a transcribed pre-mRNA. It does this by forming a loop (lariat) of the intron, not the exon. The other statements are correct."
    },

    {
        id: 701,
        topic: "HOTs",
        hots: true,
        q: "Which one of the following is incorrect w.r.t. lac operon?",
        options: [
            "It is inducible operon which controls anabolic pathway",
            "Glucose or galactose cannot act as inducer",
            "The repressor is synthesised constitutively from the i-gene",
            "Repressor is active which binds to the operator region"
        ],
        correct: 0,
        explanation: "The lac operon controls a catabolic pathway, not an anabolic pathway. The other statements accurately describe the components and nature of the lac operon."
    },

    {
        id: 702,
        topic: "HOTs",
        hots: true,
        q: "At about how many locations, SNPs are present in human beings?",
        options: [
            "1.4 billion",
            "1.4 million",
            "3 × 10⁹ bp",
            "3 × 10⁴ bp"
        ],
        correct: 1,
        explanation: "Scientists have identified about 1.4 million locations where single base DNA differences, i.e., single nucleotide polymorphisms (SNPs) occur in humans."
    },

    {
        id: 703,
        topic: "HOTs",
        hots: true,
        q: "Which one of the following step comes after electrophoresis in DNA fingerprinting?",
        options: [
            "Use of restriction endonuclease",
            "Isolation of DNA",
            "Southern blotting",
            "DNA-RNA hybridization"
        ],
        correct: 2,
        explanation: "Transferring of separated DNA fragments (blotting) to a synthetic membrane (Southern blotting) is done after electrophoresis. Digestion comes before."
    },

    {
        id: 704,
        topic: "HOTs",
        hots: true,
        q: "If the sequence of nucleotides is AUG UUU UGC UAC, the sequence of amino acids will be Met-Phe-Cys-Tyr.<br>Likewise, if the sequence of amino acids is Met-Tyr-Cys-Phe, then the sequence of nucleotides will be",
        options: [
            "AUG UAC UGC UUU",
            "AUG UAU UGU UUC",
            "AUG UAC UGU UUU",
            "Any one of the above three"
        ],
        correct: 3,
        explanation: "According to the Wobble hypothesis, a change in nitrogen base at the third position of a codon does not normally cause any change in the expression of the codon. Therefore, more than one codon may code for the same amino acid. All three options are valid."
    },

    {
        id: 705,
        topic: "HOTs",
        hots: true,
        q: "Energetically DNA replication is a very expensive process. The energy during the polymerisation of new strand is provided by",
        options: [
            "GDP",
            "ADP",
            "Deoxyribonucleoside triphosphates",
            "Ribonucleoside triphosphates"
        ],
        correct: 2,
        explanation: "Activation of deoxyribonucleotides takes place before their attachment to the growing chain of DNA. They serve a dual purpose: acting as substrates and providing energy for the polymerization reaction."
    },

    {
        id: 706,
        topic: "HOTs",
        hots: true,
        q: "In HGP, the fragments of DNA were sequenced using automated DNA sequencers. It worked on the principle of a method developed by",
        options: [
            "E.M. Southern",
            "Frederick Sanger",
            "Craig Venter",
            "Wellcome Trust (U.K.)"
        ],
        correct: 1,
        explanation: "E.M. Southern developed the technique of DNA blotting called Southern blotting. In HGP, the fragments of DNA were sequenced on the principle of a method developed by Frederick Sanger."
    },

    {
        id: 707,
        topic: "HOTs",
        hots: true,
        q: "Which of the following group of RNA is not synthesised by RNA polymerase-I in eukaryotes?",
        options: [
            "5.8S rRNA and 18S rRNA",
            "18S rRNA and 28S rRNA",
            "5.8S rRNA and 28S rRNA",
            "5S rRNA and snRNA"
        ],
        correct: 3,
        explanation: "5S rRNA and snRNA are synthesised by RNA polymerase III, whereas RNA polymerase I handles the larger 5.8S, 18S, and 28S rRNAs."
    },

    {
        id: 708,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is not correct w.r.t. DNA replication?",
        options: [
            "Eukaryotes have several thousand origins of replication",
            "Unwinding is brought about by enzyme helicase, which is ATP dependent",
            "DNA synthesis occurs in 3'→5' direction",
            "DNA polymerase-I removes RNA primer and can correct the T=T dimer formed by UV rays"
        ],
        correct: 2,
        explanation: "DNA synthesis occurs only in the 5'→3' direction because DNA polymerases can only add nucleotides to a free 3'-OH group."
    },

    {
        id: 709,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is not a codon of glycine?",
        options: [
            "GGC",
            "GCG",
            "GGU",
            "GGA"
        ],
        correct: 1,
        explanation: "In the genetic code triplets, the codons that have their first two bases as guanine (G) code for glycine (GGU, GGC, GGA, GGG). GCG codes for Alanine."
    },

    {
        id: 710,
        topic: "HOTs",
        hots: true,
        q: "Find the incorrect pair",
        options: [
            "RNAP-III - scRNA",
            "Genomics - Analyse the structure and function of genes",
            "Microsatellite - SSR",
            "Inducible system - Tryptophan operon"
        ],
        correct: 3,
        explanation: "The lac operon is an inducible system, whereas the tryptophan operon is a repressible system."
    },

    {
        id: 711,
        topic: "HOTs",
        hots: true,
        q: "In E. coli",
        options: [
            "Transcription occurs inside nucleus",
            "There is only one RNA polymerase",
            "Core enzyme is involved in recognition of promoter site",
            "There are nine initiation factors"
        ],
        correct: 1,
        explanation: "E. coli is a bacterium and lacks a nucleus. In prokaryotes, the transcribing enzyme (DNA-dependent RNA polymerase) is of only one type. Recognition of the promoter is done by the sigma factor, not the core enzyme."
    },

    {
        id: 712,
        topic: "HOTs",
        hots: true,
        q: "Choose the wrong statement for template strand in DNA",
        options: [
            "It is called antisense or coding strand",
            "It has 3'→5' polarity",
            "It is the strand upon which RNA is transcribed in 5'→3' direction",
            "Terminator region lies at its 5'-end"
        ],
        correct: 0,
        explanation: "The template strand of DNA is also called the non-coding strand (or antisense strand). The other strand is the coding strand (sense strand)."
    },

    {
        id: 713,
        topic: "HOTs",
        hots: true,
        q: "During DNA proof reading, DNA polymerase I removes the mismatched nucleotides and synthesises the correct replacement. The newly formed segment is sealed by",
        options: [
            "Topoisomerase",
            "DNA ligase",
            "Ribonuclease-P",
            "Endonuclease"
        ],
        correct: 1,
        explanation: "The newly formed segments of DNA are joined by the enzyme DNA ligase. Topoisomerases relieve supercoiling tension."
    },

    {
        id: 714,
        topic: "HOTs",
        hots: true,
        q: "How many phosphodiester bonds are present in dsDNA having 10 bp in linear and circular condition respectively?",
        options: [
            "18, 20",
            "16, 18",
            "16, 16",
            "20, 20"
        ],
        correct: 0,
        explanation: "10 bp = 20 bases total. In linear DNA, the number of phosphodiester bonds = number of nitrogenous bases - 2 (so 20 - 2 = 18). In circular DNA, there are no free ends, so the number of phosphodiester bonds = number of nitrogenous bases (20)."
    },

    {
        id: 715,
        topic: "HOTs",
        hots: true,
        q: "Select incorrect statement w.r.t. post transcriptional processing",
        options: [
            "Capping requires guanylyl transferase enzyme",
            "Poly A residues are added at 3' end of newly formed hnRNA",
            "Spliceosome formation is ATP independent step",
            "Snurps splice introns at both 5' and 3' ends"
        ],
        correct: 2,
        explanation: "Spliceosome formation is a stepwise assembly pathway that requires ATP and substrate pre-mRNAs. It is an energy-dependent process."
    },

    {
        id: 716,
        topic: "HOTs",
        hots: true,
        q: "Which of the given is not among the salient features of HGP?",
        options: [
            "Human genome contains about 316.7 bp",
            "Average gene size is of 3000 bases",
            "Less than 2% of genome codes for proteins",
            "Chromosome 1 has most genes i.e., 2968"
        ],
        correct: 0,
        explanation: "The human genome contains about 3164.7 million bp (3.16 × 10⁹ bp), not 316.7 bp. The other facts listed are accurate findings of the Human Genome Project."
    },

    {
        id: 717,
        topic: "HOTs",
        hots: true,
        q: "Sequence of the dsDNA is given below<br><b>3' TACC ACTG GTAC GCAA TTAG 5'</b><br><b>Coding strand 5' ATGG TGAC CATG CGTT AATC 3'</b><br>How many amino acids will be coded by the mRNA formed by this sequence?",
        options: [
            "Four",
            "Six",
            "Five",
            "Three"
        ],
        correct: 2,
        explanation: "The mRNA will be identical to the coding strand but with U instead of T: 5' AUG GUG ACC AUG CGU UAA UC 3'. The codons read: AUG (1), GUG (2), ACC (3), AUG (4), CGU (5), UAA (Stop). Thus, 5 amino acids will be translated."
    },

    {
        id: 718,
        topic: "HOTs",
        hots: true,
        q: "Select an incorrect statement w.r.t. lac operon",
        options: [
            "It consists of three structural genes",
            "Every structural gene has its own promoter",
            "Repressor protein interacts with operator gene",
            "β-galactosidase catalyses breakdown of lactose"
        ],
        correct: 1,
        explanation: "In an operon, a single promoter regulates all structural genes collectively, producing a polycistronic mRNA. Every structural gene does not have its own independent promoter."
    },

    {
        id: 719,
        topic: "HOTs",
        hots: true,
        q: "Find an incorrect match",
        options: [
            "UAA-Termination codon",
            "UUU-Phenylalanine",
            "UGG-Non-degenerate codon",
            "GUG-Non-ambiguous codon"
        ],
        correct: 3,
        explanation: "GUG is an ambiguous codon. While it normally codes for Valine, it can also act as an initiator codon coding for Methionine under certain conditions."
    },

    {
        id: 720,
        topic: "HOTs",
        hots: true,
        q: "RNA may not be a suitable genetic material in organisms because of",
        options: [
            "Presence of 2'-OH in sugar",
            "Chemically less reactive in nature",
            "Structurally more stable nature",
            "Slow rate of mutation"
        ],
        correct: 0,
        explanation: "The 2'-OH group present at every nucleotide in RNA is a reactive group and makes RNA labile and easily degradable. DNA lacks this group, making it much more stable."
    },

    {
        id: 721,
        topic: "HOTs",
        hots: true,
        q: "Lac operon in E. coli",
        options: [
            "Is repressible",
            "Consists of five structural genes",
            "Can also act in presence of galactose",
            "Remains switched off in absence of inducer"
        ],
        correct: 3,
        explanation: "The lac operon is an inducible operon, meaning it remains switched off in the absence of an inducer (like allolactose). It has three structural genes (z, y, a), not five."
    },

    {
        id: 722,
        topic: "HOTs",
        hots: true,
        q: "lac operon will be transcribed at low level if",
        options: [
            "Lactose is present in the medium",
            "Catabolite activator protein (CAP) binds upstream of promoter",
            "Glucose and lactose are present together",
            "Path of RNA polymerase is unblocked due to presence of allolactose"
        ],
        correct: 2,
        explanation: "If glucose and lactose are present together, the lac operon will be transcribed at a low level because bacteria prefer to use glucose first (catabolite repression prevents full activation)."
    },

    {
        id: 723,
        topic: "HOTs",
        hots: true,
        q: "Subunits of nu-body are synthesised in the cell-cycle during",
        options: [
            "Anaphase",
            "The phase with most variable duration",
            "Synthesis phase",
            "The phase involving mitotic cyclin"
        ],
        correct: 2,
        explanation: "Subunits of the histone octamer (nu-body) are synthesised during the S-phase (Synthesis phase) of the cell cycle, concurrent with DNA replication."
    },

    {
        id: 724,
        topic: "HOTs",
        hots: true,
        q: "Bond between deoxyribose sugar and purines in DNA involves which positions respectively?",
        options: [
            "1' and 9'",
            "1' and 6'",
            "3' and 9'",
            "3' and 3'"
        ],
        correct: 0,
        explanation: "In an N-glycosidic linkage, purine nucleosides have a 1'→9' glycosidic linkage (carbon 1 of sugar to nitrogen 9 of purine). Pyrimidines link at 1'→1'."
    },

    {
        id: 725,
        topic: "HOTs",
        hots: true,
        q: "If a hybrid DNA molecule labelled with ¹⁵N is allowed to replicate three times in culture medium having ¹⁴N the percentage of hybrid DNA in third generation would be",
        options: [
            "50%",
            "25%",
            "12.5%",
            "6.5%"
        ],
        correct: 2,
        explanation: "The starting hybrid DNA has 1 heavy strand and 1 light strand. After three replications, there will be 2³ = 8 DNA molecules. The original 1 heavy strand will pair with a light strand to form 1 hybrid molecule. The other 7 molecules will be entirely light. Thus, 1/8 = 12.5% hybrid."
    },

    {
        id: 726,
        topic: "HOTs",
        hots: true,
        q: "What is incorrect for DNA?",
        options: [
            "Helical diameter is 2 nm",
            "Phosphate moiety is at 5'-end of deoxyribose sugar",
            "Nitrogen bases linked to sugar moiety project inward",
            "Distance between two successive base pairs is 3.4 nm"
        ],
        correct: 3,
        explanation: "The length of one complete turn, i.e., the pitch, is 3.4 nm. The distance between two successive base pairs is 0.34 nm. Option 4 mistakenly lists the pitch as the base pair distance."
    },

    {
        id: 727,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is not present in DNA?",
        options: [
            "Guanine",
            "Cytosine",
            "Thiamine",
            "Adenine"
        ],
        correct: 2,
        explanation: "Thiamine is vitamin B1. In DNA, the pyrimidine base present is thymine, not thiamine. This is a common spelling trap."
    },

    {
        id: 728,
        topic: "HOTs",
        hots: true,
        q: "Regarding chemical composition, what is present in maximum percentage in eukaryotic chromosomes?",
        options: [
            "DNA",
            "Histones",
            "NHC",
            "Acidic proteins"
        ],
        correct: 1,
        explanation: "The typical chemical composition of a eukaryotic chromosome is roughly: Histones = 50%, DNA = 40%, RNA = 1.5%, and Acidic (Non-histone) proteins = 8.5%."
    },

    {
        id: 729,
        topic: "HOTs",
        hots: true,
        q: "One gene-one enzyme hypothesis was proposed by",
        options: [
            "Yanofsky",
            "Jacob",
            "de Vries",
            "Beadle and Tatum"
        ],
        correct: 3,
        explanation: "The one gene-one enzyme hypothesis was famously proposed by George Beadle and Edward Tatum based on their work with Neurospora crassa."
    },

    {
        id: 730,
        topic: "HOTs",
        hots: true,
        q: "Who proposed semiconservative mode of replication in DNA?",
        options: [
            "Meselson and Stahl",
            "Watson and Crick",
            "Cairn",
            "Taylor"
        ],
        correct: 1,
        explanation: "Watson and Crick proposed a scheme for DNA replication while originally proposing the double helical structure of DNA. Meselson and Stahl experimentally proved it later."
    },

    {
        id: 731,
        topic: "HOTs",
        hots: true,
        q: "Select the enzyme which can break and reseal one strand of DNA",
        options: [
            "Primase",
            "Endonuclease",
            "Topoisomerase",
            "Exonuclease"
        ],
        correct: 2,
        explanation: "DNA topoisomerases remove helical twists by cutting a DNA strand, letting it swivel to release tension, and then resealing the cut."
    },

    {
        id: 732,
        topic: "HOTs",
        hots: true,
        q: "RNA polymerase is a holoenzyme. What factor is removed from it to convert it into core enzyme?",
        options: [
            "α²",
            "β",
            "β'",
            "σ"
        ],
        correct: 3,
        explanation: "RNA polymerase is a holoenzyme made of polypeptides (α₂ββ'ω)σ. The enzyme without the σ (sigma) subunit is referred to as the core enzyme."
    },

    {
        id: 733,
        topic: "HOTs",
        hots: true,
        q: "Which side of amino acid is joined to tRNA during translation?",
        options: [
            "NH₂ - side",
            "COOH-side",
            "H-side",
            "R-side"
        ],
        correct: 1,
        explanation: "The amino acid is joined to the 3'-OH end of the tRNA via an ester bond formed with the COOH (carboxyl) side of the amino acid during aminoacylation."
    },

    {
        id: 734,
        topic: "HOTs",
        hots: true,
        q: "Which of the following antibiotics inhibit peptide bond formation in prokaryotes?",
        options: [
            "Tetracycline",
            "Puromycin",
            "Chloramphenicol",
            "Erythromycin"
        ],
        correct: 2,
        explanation: "Chloramphenicol binds to the 50S ribosomal subunit and specifically inhibits peptidyl transferase activity, preventing peptide bond formation in prokaryotes."
    },

    {
        id: 735,
        topic: "HOTs",
        hots: true,
        q: "Which of the following amino acid is not coded by six codons?",
        options: [
            "Serine",
            "Arginine",
            "Alanine",
            "Leucine"
        ],
        correct: 2,
        explanation: "Alanine is coded by 4 codons. Serine, Arginine, and Leucine are the exceptions that are each coded by 6 different codons."
    },

    {
        id: 736,
        topic: "HOTs",
        hots: true,
        q: "Transduction experiment to prove DNA as a genetic material was conducted by Hershey and Chase with the use of radioactive elements, namely",
        options: [
            "³²S and ³⁵P",
            "³⁵S and ³²P",
            "¹⁵N and ³H",
            "¹⁴C and ³H"
        ],
        correct: 1,
        explanation: "Hershey and Chase used isotopes of sulphur (³⁵S) to label protein capsids and phosphorus (³²P) to label viral DNA."
    },

    {
        id: 737,
        topic: "HOTs",
        hots: true,
        q: "UTRs are required for efficient translation, which are present on",
        options: [
            "3' end of mRNA",
            "5' end of mRNA",
            "TΨC region of tRNA",
            "Both (1) & (2)"
        ],
        correct: 3,
        explanation: "UTRs (Untranslated regions) are present at both the 5' end (before the start codon) and the 3' end (after the stop codon) of mRNA."
    },

    {
        id: 738,
        topic: "HOTs",
        hots: true,
        q: "Find the incorrect statement w.r.t. lac operon",
        options: [
            "It has a negative control with respect to repressor",
            "It is an inducible operon",
            "It is a group of six genes working in a coordinated manner",
            "lac-y gene codes for β-galactosidase"
        ],
        correct: 3,
        explanation: "The lac z gene codes for β-galactosidase, while lac y codes for permease. Option 4 incorrectly swaps the products."
    },

    {
        id: 739,
        topic: "HOTs",
        hots: true,
        q: "A seven base sequence to which RNA polymerase binds during transcription in eukaryotes is called",
        options: [
            "TATA box",
            "Homeotic box",
            "CAAT box",
            "Pribnow box"
        ],
        correct: 0,
        explanation: "The 7 base pair long TATA box (or Hogness box) in eukaryotes provides the binding site for RNA polymerase. The Pribnow box is the prokaryotic equivalent."
    },

    {
        id: 740,
        topic: "HOTs",
        hots: true,
        q: "How many phosphodiester bonds are present in a linear dsDNA molecule if its one strand has 60 nucleotides?",
        options: [
            "120",
            "59",
            "119",
            "118"
        ],
        correct: 3,
        explanation: "For one strand, the number of phosphodiester bonds is n - 1 (60 - 1 = 59). Therefore, for two strands, the total number of phosphodiester bonds is 2 × 59 = 118."
    },

    {
        id: 741,
        topic: "HOTs",
        hots: true,
        q: "How many nucleotides are approximately connected with one nucleosome in DNA?",
        options: [
            "50",
            "100",
            "150",
            "200"
        ],
        correct: 3,
        explanation: "The nucleosome core particle consists of about 147 base pairs of DNA wrapped around a histone octamer. Including the linker DNA, the repeating unit of chromatin is generally accepted to contain approximately 200 base pairs."
    },

    {
        id: 742,
        topic: "HOTs",
        hots: true,
        q: "During early years of HGP, ______ became the major partner of the project",
        options: [
            "U.S. department of energy",
            "National institute of health",
            "Wellcome Trust, U.K.",
            "NBPGR"
        ],
        correct: 2,
        explanation: "The Wellcome Trust (U.K.) joined the Human Genome Project as a major partner, significantly contributing to the funding and data production phases."
    },

    {
        id: 743,
        topic: "HOTs",
        hots: true,
        q: "VNTR belongs to a class of satellite DNA and its size in a genome varies from 0.1 to",
        options: [
            "20 kb",
            "30 kb",
            "40 kb",
            "50 kb"
        ],
        correct: 0,
        explanation: "Variable Number of Tandem Repeats (VNTRs) are a type of minisatellite DNA, and their size typically varies from 0.1 kb to 20 kb in the human genome."
    },

    {
        id: 744,
        topic: "HOTs",
        hots: true,
        q: "During DNA fingerprinting experiment, DNA bands of different sizes give a characteristic pattern for an individual, called as",
        options: [
            "Dendrograph",
            "Autoradiogram",
            "Cladogram",
            "Phenogram"
        ],
        correct: 1,
        explanation: "After hybridization with a labeled VNTR probe, the Southern blot is exposed to X-ray film to produce an autoradiogram, which displays the characteristic pattern of DNA bands."
    },

    {
        id: 745,
        topic: "HOTs",
        hots: true,
        q: "DNA polymorphism is equivalent to allelic sequence variation and<br>a. These are inheritable<br>b. These can be observed in non-coding DNA<br>c. Satellite DNA is an example for such variations",
        options: [
            "All are correct",
            "Only c is correct",
            "Both a and c are incorrect",
            "Only b is incorrect"
        ],
        correct: 0,
        explanation: "All these statements are correct: DNA polymorphism involves inheritable sequence variations, which are frequently observed in non-coding regions (like satellite DNA/VNTRs)."
    },

    {
        id: 746,
        topic: "HOTs",
        hots: true,
        q: "Select the incorrect statement w.r.t. human DNA sequence",
        options: [
            "50 percent of genes discovered has unknown functions",
            "99.9 percent of base sequences are similar in all humans",
            "Snips are identified at about 1.4 million locations",
            "About 45% DNA is intronic in humans"
        ],
        correct: 3,
        explanation: "In humans, less than 2% of the genome codes for proteins; the vast majority is non-coding, but saying exactly \"45% is intronic\" is not a standard HGP salient feature; the HGP actually emphasized that more than 50% of the discovered genes have unknown functions."
    },

    {
        id: 747,
        topic: "HOTs",
        hots: true,
        q: "During HGP, fragments of DNA were sequenced using",
        options: [
            "Sanger's method",
            "Hershey and Chase method",
            "Maxam and Gilbert's method",
            "H.G. Khorana's method"
        ],
        correct: 0,
        explanation: "The Human Genome Project utilized automated DNA sequencers that worked on the principle of the chain termination method developed by Frederick Sanger."
    },

    {
        id: 748,
        topic: "HOTs",
        hots: true,
        q: "A model organism of plant category which has also been sequenced along with rice is",
        options: [
            "Agropyron",
            "Anabaena",
            "Agrostis",
            "Arabidopsis"
        ],
        correct: 3,
        explanation: "Arabidopsis thaliana, a small weed, was one of the first plants to have its genome fully sequenced alongside rice (Oryza sativa)."
    },

    {
        id: 749,
        topic: "HOTs",
        hots: true,
        q: "HGP methodology based upon identifying all DNA sequences expressed as RNA was referred to as",
        options: [
            "UTRs",
            "ORFs",
            "ESTs",
            "SSRs"
        ],
        correct: 2,
        explanation: "ESTs (Expressed Sequence Tags) refer to the approach of sequencing genes that are actively expressed as RNA, as opposed to sequencing the entire genome."
    },

    {
        id: 750,
        topic: "HOTs",
        hots: true,
        q: "What is the length and number of phosphodiester bonds of a linear B-DNA with 2 Kbp?",
        options: [
            "2000 Å and 1999 respectively",
            "200 Å and 4000 respectively",
            "6800 Å and 1999 respectively",
            "680 nm and 3998 respectively"
        ],
        correct: 3,
        explanation: "Length = 2000 bp * 0.34 nm/bp = 680 nm. Phosphodiester bonds in dsDNA = 2 * (number of base pairs - 1) = 2 * 1999 = 3998."
    },

    {
        id: 751,
        topic: "HOTs",
        hots: true,
        q: "If nitrogenous base sequence on mRNA is 5'-CCUCUAGCAGAU-3' then find out the sequence on sense strand.",
        options: [
            "3'GGAGATCGTCTA5'",
            "3'CCTCTAGCAGAT5'",
            "5'CCTCTAGCAGAT3'",
            "5'GGAGATCGTCTA3'"
        ],
        correct: 2,
        explanation: "The sense strand of DNA is the non-template or coding strand. The antisense strand is the template or non-coding strand. The sense strand of DNA has the exact same sequence and polarity (5'→3') as the mRNA, except with Thymine instead of Uracil. Hence, 5'CCTCTAGCAGAT3'. Option 1 is the antisense (template) strand."
    },

    {
        id: 752,
        topic: "HOTs",
        hots: true,
        q: "Select the incorrect statement w.r.t. human genome.",
        options: [
            "Human genome has 3164.7 million nucleotide base pairs",
            "Largest and smallest genes are autosomal and heterosomal respectively",
            "\"Snips\" occur at about 1.4 million locations",
            "ESTs serve as landmarks on the physical map of a genome"
        ],
        correct: 1,
        explanation: "The largest gene is the dystrophin (DMD) gene on the X-chromosome. The smallest gene is the TDF (SRY) gene on the Y-chromosome. Since both are on sex chromosomes (heterosomes), the statement that the largest is autosomal is incorrect. The other statements are correct findings of the Human Genome Project."
    },

    {
        id: 753,
        topic: "HOTs",
        hots: true,
        q: "The theoretically estimated number of nucleosomes in a genome of a human cell is",
        options: [
            "3.3 × 10⁹",
            "3.3 × 10⁷",
            "1.65 × 10⁷",
            "6.6 × 10⁷"
        ],
        correct: 2,
        explanation: "In a haploid genome, the total number of base pairs is 3.3 × 10⁹. Since 200 bp constitute the DNA in one nucleosome, the number of nucleosomes = (3.3 × 10⁹) / 200 = 1.65 × 10⁷. Option 2 is tempting if calculating for a diploid somatic cell (6.6 × 10⁹ / 200 = 3.3 × 10⁷), but \"genome\" strictly refers to the haploid set."
    },

    {
        id: 754,
        topic: "HOTs",
        hots: true,
        q: "Which one of the following is required for the initiation phase of DNA synthesis in bacteria?",
        options: [
            "DNA polymerase I",
            "DNA polymerase III",
            "DNA ligase",
            "Primase"
        ],
        correct: 3,
        explanation: "The initiation phase of DNA replication involves the synthesis of a primer strand. Primase (an RNA polymerase) is required to synthesize this short RNA primer, as DNA polymerases cannot initiate synthesis from scratch."
    },

    {
        id: 755,
        topic: "HOTs",
        hots: true,
        q: "In prokaryotes, RNA synthesis stops as soon as Polymerase reaches the terminator region. Which is required for this process?",
        options: [
            "F-factor",
            "Nus-factor",
            "Rho factor",
            "Sigma factor"
        ],
        correct: 2,
        explanation: "In prokaryotes, the Rho (ρ) factor is required for termination of transcription. The sigma factor is required for initiation, not termination."
    },

    {
        id: 756,
        topic: "HOTs",
        hots: true,
        q: "Which one of the following is incorrectly matched pair w.r.t. DNA fingerprinting?",
        options: [
            "Size separation - Gel electrophoresis",
            "VNTRs from Gel to Nylon paper - Blotting technique",
            "Microsatellites - ESTs",
            "RFLP amplification - PCR"
        ],
        correct: 2,
        explanation: "Microsatellites are SSRs or STRs with 1-6 bp. ESTs (Expressed Sequence Tags) are used in HGP to identify expressed genes, not in DNA fingerprinting. The match is entirely incorrect."
    },

    {
        id: 757,
        topic: "HOTs",
        hots: true,
        q: "Human genome is said to have approximately",
        options: [
            "2968 genes",
            "9 billions nucleotides",
            "3 × 10⁹ bp",
            "30000-40000 bp"
        ],
        correct: 2,
        explanation: "The human genome (haploid set) is said to have approximately 3 × 10⁹ bp (more precisely, 3164.7 million bp). A human diploid cell has 6.6 × 10⁹ base pairs."
    },

    {
        id: 758,
        topic: "HOTs",
        hots: true,
        q: "What will be the percentage of G in a dsDNA if the amount of T is 20%?",
        options: [
            "70%",
            "80%",
            "30%",
            "50%"
        ],
        correct: 2,
        explanation: "If T = 20%, then A = 20% (A = T). The remaining content is 60% for G and C combined. Since G = C, G will be 60% / 2 = 30%."
    },

    {
        id: 759,
        topic: "HOTs",
        hots: true,
        q: "Most of the unusual bases found in a cell are associated with",
        options: [
            "rRNA",
            "mRNA",
            "tRNA",
            "snRNA"
        ],
        correct: 2,
        explanation: "tRNA is heavily modified post-transcriptionally, containing unusual bases like pseudouridine, inosine, and dihydrouridine. For example, the 1st base of the tRNA anticodon participates in wobbling and is often modified (like inosine)."
    },

    {
        id: 760,
        topic: "HOTs",
        hots: true,
        q: "Replication is an autocatalytic property of DNA which does not require",
        options: [
            "DNA polymerase III as major polymerising enzyme",
            "Primase to synthesize a short sequence of RNA over 3' end of parental DNA",
            "An ATP dependent ligase enzyme",
            "An ATP dependent helicase enzyme to stabilize the single strandedness in DNA"
        ],
        correct: 3,
        explanation: "SSB (Single-Stranded Binding) proteins are required for stabilizing the single strands of DNA. Helicase is an ATP-dependent enzyme, but its role is to unwind the double helix, not to stabilize the resulting single strands."
    },

    {
        id: 761,
        topic: "HOTs",
        hots: true,
        q: "First structural gene to be transcribed in an inducible operon of E. coli is",
        options: [
            "Inhibitor gene",
            "Structural gene 'z'",
            "Structural gene 'y'",
            "Structural gene 'a'"
        ],
        correct: 1,
        explanation: "For the lac operon (an inducible operon), the structural genes are transcribed in the sequence z, y, a. Therefore, the 'z' gene expresses first. The inhibitor gene (i) is regulatory, not a structural gene of the operon itself."
    },

    {
        id: 762,
        topic: "HOTs",
        hots: true,
        q: "About 1.4 million locations were identified in human genome where single base differences occur, these locations are called",
        options: [
            "Scyrps",
            "Snurps",
            "UTR's",
            "Snips"
        ],
        correct: 3,
        explanation: "Single nucleotide polymorphisms (SNPs) are commonly pronounced as \"snips\". Scyrps and Snurps refer to RNA-protein complexes, and UTRs are untranslated regions."
    },

    {
        id: 763,
        topic: "HOTs",
        hots: true,
        q: "Number of nucleotides associated with each repeating unit present in chromatin are",
        options: [
            "200",
            "400",
            "250",
            "500"
        ],
        correct: 1,
        explanation: "There are 200 base pairs (bp) of DNA in each nucleosome (the repeating unit). Since each base pair consists of 2 nucleotides, there are 400 nucleotides associated with each unit. Option 1 is a trap for those who confuse \"base pairs\" with \"nucleotides\"."
    },

    {
        id: 764,
        topic: "HOTs",
        hots: true,
        q: "The unequivocal proof that DNA is the genetic material came from the experiment which utilized",
        options: [
            "Streptococcus",
            "T₂, E. coli",
            "E. coli, heavy nitrogen",
            "³²P, ³⁵S, R-type bacteria"
        ],
        correct: 1,
        explanation: "The unequivocal proof that DNA is the genetic material came from the experiments conducted by Hershey and Chase, who used T₂ bacteriophage and its host E. coli."
    },

    {
        id: 765,
        topic: "HOTs",
        hots: true,
        q: "Protein synthesising machinery has evolved around _______ and _______ is best for the transmission of genetic information.",
        options: [
            "DNA, RNA",
            "RNA, DNA",
            "RNA, RNA",
            "DNA, DNA"
        ],
        correct: 1,
        explanation: "The protein synthesis machinery has evolved around RNA (rRNA, tRNA, mRNA), and RNA is best for the transmission/expression of genetic information (while DNA is best for storage)."
    },

    {
        id: 766,
        topic: "HOTs",
        hots: true,
        q: "Choose the odd one out w.r.t. Taylor's experiment",
        options: [
            "Used roots of Vicia faba",
            "Utilised radioactive thymidine",
            "Used heavy nitrogen",
            "Proved DNA in chromosomes replicate semi-conservatively"
        ],
        correct: 2,
        explanation: "Heavy nitrogen (¹⁵N) was used by Meselson and Stahl in E. coli. Taylor used radioactive thymidine (³H) in Vicia faba to prove semi-conservative replication of chromosomes."
    },

    {
        id: 767,
        topic: "HOTs",
        hots: true,
        q: "In prokaryotic DNA replication",
        options: [
            "On each DNA template DNA polymerase-III adds 10 nucleotides in one second",
            "Deoxyribonucleoside triphosphates provide energy for forming phosphodiester bond",
            "Only DNA polymerases are required",
            "DNA polymerase I shows removal of primer through 3'→5' exonuclease activity"
        ],
        correct: 1,
        explanation: "Deoxyribonucleoside triphosphates (dNTPs) serve dual purposes: they act as substrates and provide energy (from the terminal two phosphates) for polymerization. The rate is approx 2000 bp/sec (making option 1 wrong). Multiple enzymes like helicase and ligase are needed (making 3 wrong). Primer removal is via 5'→3' exonuclease (making 4 wrong)."
    },

    {
        id: 768,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is incorrect w.r.t. nucleic acid?",
        options: [
            "DNA is more stable so preferred for storage of genetic information",
            "Feulgen test is negative for RNA",
            "DNA is the largest macromolecule",
            "Exposed nitrogenous bases and presence of OH group at 3' position in sugar explains RNA reactivity"
        ],
        correct: 3,
        explanation: "The reactive OH group is present in RNA at the 2' C of the ribose sugar, not the 3' position. This 2'-OH makes RNA catalytically active and labile."
    },

    {
        id: 769,
        topic: "HOTs",
        hots: true,
        q: "For which of the following features are the DNA polymerases and RNA polymerases similar?",
        options: [
            "Can perform the proof reading",
            "Cannot initiate the nucleotide polymerisation",
            "Shows polymerisation in 5'→3' direction",
            "Both (1) and (2) are correct"
        ],
        correct: 2,
        explanation: "Both DNA polymerases and RNA polymerases synthesize new strands strictly in the 5'→3' direction. RNA polymerase CAN initiate nucleotide polymerization from scratch (unlike DNA Pol) and generally lacks advanced proofreading exonuclease activity."
    },

    {
        id: 770,
        topic: "HOTs",
        hots: true,
        q: "Choose the incorrect option w.r.t. transcription unit",
        options: [
            "Regulatory sequences may be present at both upstream and downstream of the promoter region",
            "Promoter is present at the 5' end of the coding strand",
            "DNA strand which does not code for anything is called non-coding strand",
            "Termination sequence is present at 3' end of the coding strand"
        ],
        correct: 2,
        explanation: "The template strand does not code directly for a protein sequence but acts as the template for transcription. By convention, the coding strand matches the RNA sequence (except T vs U) but is not transcribed, and the template strand is antisense. Option 3 is incorrect because the template strand is technically the non-coding strand."
    },

    {
        id: 771,
        topic: "HOTs",
        hots: true,
        q: "How many adenylate residues are added at 3' end during the processing of hnRNA in eukaryotes?",
        options: [
            "50-100",
            "100-150",
            "600-700",
            "200-300"
        ],
        correct: 3,
        explanation: "Tailing is the addition of adenylate residues, specifically about 200-300, at the 3' end in a template-independent manner."
    },

    {
        id: 772,
        topic: "HOTs",
        hots: true,
        q: "By knowing the sequence of amino acids in a protein, you cannot predict the exact sequence of nucleotides on mRNA. This is due to which property of the genetic code?",
        options: [
            "Non-ambiguity",
            "Degeneracy",
            "Commaless",
            "Polarity"
        ],
        correct: 1,
        explanation: "Because some amino acids are coded by more than one codon (degeneracy), you cannot definitively work backward from a protein sequence to a single, specific mRNA sequence."
    },

    {
        id: 773,
        topic: "HOTs",
        hots: true,
        q: "Which of the following sequence on mRNA is required for efficient translation?",
        options: [
            "Anti-Shine-Dalgarno",
            "Pribnow box",
            "SNPs",
            "UTRs"
        ],
        correct: 3,
        explanation: "The UTRs (Untranslated Regions) are present at both the 5'-end (before the start codon) and at the 3'-end (after the stop codon). They are required for the efficient translation process."
    },

    {
        id: 774,
        topic: "HOTs",
        hots: true,
        q: "Choose the odd one out w.r.t. lac operon.",
        options: [
            "Polycistronic structural genes have common promoter",
            "Lactose is transported in cell by permeases",
            "The i gene shows its expression constitutively",
            "Switching on of operon by lactose is positive control"
        ],
        correct: 3,
        explanation: "Regulation of the lac operon by a repressor is referred to as negative regulation. The switching on by removing the repressor (via lactose) is de-repression, but the overarching control mechanism is negative."
    },

    {
        id: 775,
        topic: "HOTs",
        hots: true,
        q: "In prokaryotes, when two charged tRNAs are brought close together in the ribosome, the formation of the peptide bond between them is performed by the catalyst:",
        options: [
            "16S rRNA",
            "23S rRNA",
            "18S rRNA",
            "28S rRNA"
        ],
        correct: 1,
        explanation: "23S rRNA acts as peptidyl transferase (a ribozyme) in prokaryotes. In eukaryotes, this role is performed by 28S rRNA."
    },

    {
        id: 776,
        topic: "HOTs",
        hots: true,
        q: "Choose the correct statement w.r.t. satellite DNA",
        options: [
            "Show high degree of polymorphism",
            "Form basis of DNA fingerprinting",
            "Do not have non-coding sequences",
            "Both (1) and (2) are correct"
        ],
        correct: 3,
        explanation: "The technique of DNA Fingerprinting uses satellite DNA because it shows a very high degree of polymorphism. It is entirely composed of non-coding sequences."
    },

    {
        id: 777,
        topic: "HOTs",
        hots: true,
        q: "An mRNA synthesized by using 144 nucleotides is capable of producing a polypeptide chain of maximum",
        options: [
            "48 amino acids",
            "47 amino acids",
            "282 amino acids",
            "141 amino acids"
        ],
        correct: 1,
        explanation: "144 nucleotides / 3 = 48 codons. One codon must be used for termination (a stop codon, which doesn't code for an amino acid). So, a maximum of 47 codons can code for 47 amino acids of the polypeptide chain."
    },

    {
        id: 778,
        topic: "HOTs",
        hots: true,
        q: "Which of the following antibiotics inhibits peptidyl transferase activity?",
        options: [
            "Tetracycline",
            "Streptomycin",
            "Neomycin",
            "Chloramphenicol"
        ],
        correct: 3,
        explanation: "Chloramphenicol binds to the 50S subunit and specifically inhibits peptidyl transferase activity. Tetracycline blocks tRNA binding."
    },

    {
        id: 779,
        topic: "HOTs",
        hots: true,
        q: "In living organisms, the regulation of gene expression could be exerted at various levels and the predominant site for control in prokaryotes is",
        options: [
            "mRNA transport level",
            "Translation level",
            "Splicing level",
            "Transcription initiation level"
        ],
        correct: 3,
        explanation: "In prokaryotes, control of the rate of transcriptional initiation is the predominant site for control of gene expression. They lack splicing and nuclear mRNA transport."
    },

    {
        id: 780,
        topic: "HOTs",
        hots: true,
        q: "With reference to protein synthesis, consider the following events<br>a. Binding of amino acyl tRNA complex with mRNA<br>b. Activation of amino acid<br>c. Polypeptide formation<br>d. Formation of amino acyl - tRNA complex<br>What is the correct sequence of the above events in protein synthesis?",
        options: [
            "b, d, a & c",
            "a, b, d & c",
            "d, b, a & c",
            "a, d, b & c"
        ],
        correct: 0,
        explanation: "First, amino acids are activated (b), then linked to their cognate tRNA to form the amino acyl-tRNA complex (d). When the ribosome encounters mRNA, the tRNA complex binds (a), finally leading to polypeptide formation (c)."
    },

    {
        id: 781,
        topic: "HOTs",
        hots: true,
        q: "The ______ has the property to cut and join the DNA to release the strain developed behind replication fork",
        options: [
            "Restriction endonuclease",
            "Helicase",
            "DNA topoisomerase",
            "DNA polymerase-II"
        ],
        correct: 2,
        explanation: "DNA topoisomerase removes helical twists (supercoiling tension) by cutting a DNA strand, letting it relieve tension, and then joining the cut."
    },

    {
        id: 782,
        topic: "HOTs",
        hots: true,
        q: "Expressed sequence tags (ESTs) and sequence annotation are the two methodologies used in",
        options: [
            "DNA fingerprinting",
            "PCR",
            "Amino acid sequencing",
            "HGP"
        ],
        correct: 3,
        explanation: "In the Human Genome Project (HGP), the methods involved two major approaches: Expressed Sequence Tags (ESTs) for coding regions and Sequence Annotation for mapping the whole genome."
    },

    {
        id: 783,
        topic: "HOTs",
        hots: true,
        q: "Select the correct statement w.r.t. DNA structure.",
        options: [
            "Phosphate group lies at 5' end of one strand while at 3' end of complementary strand",
            "A DNA with 4 percent thymine nucleotides is more stable than a DNA with 40 percent cytosine nucleotides",
            "Purine: pyrimidine ratio is constant for a few species only",
            "Purine nucleosides have 1'-3' glycosidic linkage"
        ],
        correct: 1,
        explanation: "If a DNA has 4% Thymine, it has 4% Adenine, leaving 92% for G-C content. A DNA with 40% Cytosine has 40% Guanine, totaling 80% G-C content. Since G-C pairs have 3 hydrogen bonds, the DNA with 92% G-C is more stable."
    },

    {
        id: 784,
        topic: "HOTs",
        hots: true,
        q: "Match the following<br><b>Column-I</b><br>a. Kornberg enzyme<br>b. DNA gyrase<br>c. Severo Ochoa enzyme<br>d. Translocase<br><br><b>Column-II</b><br>(i) Elongation factor 2<br>(ii) Primer removal<br>(iii) Topoisomerase activity<br>(iv) Polynucleotide phosphorylase",
        options: [
            "a(ii) b(iii) c(iv) d(i)",
            "a(ii), b(iii) c(i), d(iv)",
            "a(iii), b(ii), c(iv) d(i)",
            "a(i), b(iii), c(ii) d(iv)"
        ],
        correct: 0,
        explanation: "Kornberg enzyme (DNA pol I) handles primer removal. DNA gyrase has topoisomerase activity. Severo Ochoa enzyme is polynucleotide phosphorylase. Translocase requires elongation factor 2 (EF-G in prokaryotes)."
    },

    {
        id: 785,
        topic: "HOTs",
        hots: true,
        q: "In an inducible operon system, the permeability for lactose absorption is increased by an enzyme. This enzyme is a product of",
        options: [
            "lac z",
            "lac y",
            "lac a",
            "trp b"
        ],
        correct: 1,
        explanation: "The y gene of the lac operon codes for permease, which increases the permeability of the cell to β-galactosides (lactose)."
    },

    {
        id: 786,
        topic: "HOTs",
        hots: true,
        q: "50 molecules of E. coli DNA with both heavy strands is allowed to replicate twice in ¹⁴NH₄Cl medium, the resultant generation will have",
        options: [
            "200 molecules, all hybrid",
            "100 molecules having ¹⁴N and other 100 molecules as hybrid",
            "50 molecules hybrid and 150 molecules with ¹⁴N",
            "200 molecules, all light"
        ],
        correct: 1,
        explanation: "50 molecules replicate twice to produce 50 × 4 = 200 molecules. The 100 original heavy strands will pair with light strands to form 100 hybrid molecules. The remaining 100 molecules will be entirely light (¹⁴N)."
    },

    {
        id: 787,
        topic: "HOTs",
        hots: true,
        q: "Find a set of incorrect statements<br>a. RNA is labile, easily degradable and reactive as compared to DNA<br>b. Presence of thymine at the place of uracil confers additional stability to DNA<br>c. Both DNA and RNA are able to mutate, viruses having DNA genome mutate and evolve faster<br>d. DNA can easily express the characters directly",
        options: [
            "b & d",
            "c & d",
            "b & c",
            "a & c"
        ],
        correct: 1,
        explanation: "Statement c is incorrect because viruses with RNA genomes mutate and evolve faster due to RNA instability. Statement d is incorrect because DNA is dependent on RNA for direct expression."
    },

    {
        id: 788,
        topic: "HOTs",
        hots: true,
        q: "How many amino acids will be coded by the given sequence of mRNA if its 15th base from 5' end is substituted by A?<br><b>5' AUG GUG UAG CAG UAC GUA 3'</b>",
        options: [
            "Four",
            "Two",
            "Six",
            "Five"
        ],
        correct: 1,
        explanation: "The third codon is UAG, which is a termination (stop) codon. Thus, translation stops after the 2nd amino acid. A substitution at the 15th base is irrelevant because it lies downstream of the stop codon."
    },

    {
        id: 789,
        topic: "HOTs",
        hots: true,
        q: "Which of the following events takes place in the cytoplasm of eukaryotic cells?",
        options: [
            "Splicing of RNA",
            "Capping of RNA",
            "Formation of peptide bonds",
            "Tailing of RNA"
        ],
        correct: 2,
        explanation: "In eukaryotes, translation (formation of peptide bonds) occurs in the cytoplasm. Splicing, capping, and tailing all occur in the nucleus."
    },

    {
        id: 790,
        topic: "HOTs",
        hots: true,
        q: "If the proportion of 5-methyl uracil in a dsDNA is 7%, then what will be the total proportion of monocyclic nitrogen bases in this DNA?",
        options: [
            "50%",
            "43%",
            "14%",
            "86%"
        ],
        correct: 0,
        explanation: "Monocyclic nitrogen bases are pyrimidines (Cytosine and Thymine/5-methyl uracil). According to Chargaff's rules, the total proportion of pyrimidines in any dsDNA is always exactly 50%."
    },

    {
        id: 791,
        topic: "HOTs",
        hots: true,
        q: "In a eukaryotic cell, splicing, capping, and tailing steps:",
        options: [
            "Are template dependent",
            "Occur in cytoplasm",
            "Occur in nucleus",
            "Are performed by SnRNPs"
        ],
        correct: 2,
        explanation: "In eukaryotes, capping, splicing, and tailing occur in the nucleoplasm. The nucleus is the site of these post-transcriptional modifications before the mature mRNA is exported. Option 2 is incorrect because translation, not processing, occurs in the cytoplasm."
    },

    {
        id: 792,
        topic: "HOTs",
        hots: true,
        q: "trp operon as well as lac operon both",
        options: [
            "Show positive control",
            "Are inducible systems",
            "Are repressible systems",
            "Are present in bacteria"
        ],
        correct: 3,
        explanation: "The lac operon exhibits positive as well as negative control. Both the lac operon (inducible) and the trp operon (repressible) are gene regulatory systems present in bacteria. Options 2 and 3 are tempting but incorrect because they do not apply to both operons universally."
    },

    {
        id: 793,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 793.jpg",
        q: "In the given transcription unit, what does A, B and C represent respectively?<br><b>(C is upstream 5' of coding strand, A is downstream 3' of coding strand, B is the 3'→5' top strand)</b>",
        options: [
            "Terminator, Non-template, Promoter",
            "Promoter, Non-coding, Terminator",
            "Promoter, Template, Structural gene",
            "Terminator, Template, Promoter"
        ],
        correct: 3,
        explanation: "The promoter is said to be located towards the 5'-end (upstream) of the structural gene (relative to the coding strand). The DNA strand B is the template strand. Therefore, C is the Promoter, B is the Template strand, and A is the Terminator. Reading the options for A, B, C respectively yields Terminator, Template, Promoter."
    },

    {
        id: 794,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 794.jpg",
        q: "The figure given below is a diagrammatic representation of lac operon. What does A, B, C and D represent?<br><b>(A binds repressor to inactivate it, B translates to β-galactosidase, C translates to permease, D translates to transacetylase)</b>",
        options: [
            "A-Inducer; B-lac y; C-Permease; D - lac z",
            "A-Repressor; B-lacz; C-Lactase; D - lac a",
            "A-Inducer; B-lacz; C - Permease; D - lac a",
            "A-Lactose; B-lacy; C- Permease; D - lac a"
        ],
        correct: 2,
        explanation: "z, y, and a are structural genes. A is the inducer (allolactose/lactose) which binds the repressor. B is lac z (codes for β-galactosidase). C is permease (product of lac y). D is lac a (codes for transacetylase)."
    },

    {
        id: 795,
        topic: "HOTs",
        hots: true,
        q: "Select the correct match",
        options: [
            "Severo Ochoa - DNA polymerase",
            "Meselson and Stahl - Chromosome replication in faba beans",
            "Hershey and Chase - E. coli",
            "Griffith - Salmonella"
        ],
        correct: 2,
        explanation: "Meselson and Stahl explained the semi-conservative replication of DNA. Severo Ochoa is associated with polynucleotide phosphorylase. Griffith used Streptococcus in his experiment. Hershey and Chase utilized T₂ bacteriophage and E. coli, making option 3 the most accurate match."
    },

    {
        id: 796,
        topic: "HOTs",
        hots: true,
        q: "Read the following statements carefully<br>a. A very low level of expression of lac operon has to be present in the cell all the time.<br>b. Every operon of a prokaryotic cell can be regulated by the same repressor protein.<br>c. The codon in mRNA is read in a contiguous fashion.<br>d. RNA polymerase-III is responsible for transcription of 5S rRNA, 23S rRNA, snRNA and tRNA.",
        options: [
            "Both c and d are correct",
            "All are correct, except b",
            "All are correct, except d",
            "Both a and c are correct"
        ],
        correct: 3,
        explanation: "Specific repressor proteins are required for a specific operon, making statement 'b' incorrect. Statement 'd' is incorrect because 23S rRNA is found in prokaryotes, synthesized by a single type of RNA polymerase, not RNAP-III. Thus, only 'a' and 'c' are correct."
    },

    {
        id: 797,
        topic: "HOTs",
        hots: true,
        q: "A=T, G≡C pairing is present in DNA. This base pairing confers very unique property to the polynucleotide chains and they are said to be complementary to each other. From this we can deduce all the following, except",
        options: [
            "The quantity of A is equal to the quantity of T",
            "G/C=1",
            "The quantity of A+T is equal to the quantity of G+C",
            "If the sequence of bases in one strand is known then the sequence in other strand can be predicted"
        ],
        correct: 2,
        explanation: "The ratio (A+T)/(G+C) is constant for a species. It is not generally equal to 1, meaning the quantity of A+T does not inherently equal G+C. The other options are direct consequences of Chargaff's rules and complementary base pairing."
    },

    {
        id: 798,
        topic: "HOTs",
        hots: true,
        q: "Transcription as well as translation processes",
        options: [
            "Cannot be coupled in bacteria",
            "Occur in the cytoplasm of eukaryotic cell",
            "Are energetically very expensive",
            "Result in protein and RNA respectively"
        ],
        correct: 2,
        explanation: "Transcription and translation can be coupled in bacteria. Both of these anabolic processes involve polymerizing monomers (nucleotides and amino acids) which requires high ATP/GTP input, making them energetically very expensive."
    },

    {
        id: 799,
        topic: "HOTs",
        hots: true,
        q: "Which of the following for dsDNA is correct?",
        options: [
            "A/T=0",
            "A+T=G+C",
            "A+G=C+T",
            "C/G=0.5"
        ],
        correct: 2,
        explanation: "A+G = C+T (for dsDNA). This reflects Chargaff's rule that total purines (A+G) always equal total pyrimidines (C+T)."
    },

    {
        id: 800,
        topic: "HOTs",
        hots: true,
        q: "In a double stranded DNA molecule the percentage of cytosine is 18. What will be percentage of bicyclic nitrogen bases?",
        options: [
            "50%",
            "64%",
            "36%",
            "18%"
        ],
        correct: 0,
        explanation: "Purines are bicyclic N-bases. Regardless of the individual percentages of A, T, G, or C, the total percentage of purines (A+G) in any double-stranded DNA is always 50% according to Chargaff's rules."
    },

    {
        id: 801,
        topic: "HOTs",
        hots: true,
        q: "During replication, DNA synthesis occurs discontinuously on one strand because",
        options: [
            "DNA molecule uncoils gradually",
            "Hydrogen bonds keep the two strands together",
            "Topoisomerase and helicase can act only on one side of DNA molecule",
            "DNA polymerase can polymerise the nucleotides in only one direction"
        ],
        correct: 3,
        explanation: "DNA polymerase can polymerise the nucleotides in only one direction (5'→3'). Because the strands are antiparallel, the lagging strand must be synthesized in short, discontinuous Okazaki fragments."
    },

    {
        id: 802,
        topic: "HOTs",
        hots: true,
        q: "When the codon of mRNA is 5' CCU 3' then the anticodon on tRNA will be",
        options: [
            "5' GGA 3'",
            "3' GGA 5'",
            "3' AGG 5'",
            "3' GAC 5'"
        ],
        correct: 1,
        explanation: "For a 5' CCU 3' mRNA codon, the anticodon of the tRNA will be 3' GGA 5'. The binding is antiparallel and complementary (C pairs with G, U pairs with A)."
    },

    {
        id: 803,
        topic: "HOTs",
        hots: true,
        q: "A small DNA sequence is arranged tandemly in many copy numbers. This copy number varies from chromosome to chromosome in an individual. The number of repeats shows",
        options: [
            "Very high degree of polymerisation and translation",
            "Very high degree of polymorphism",
            "Very low degree of hybridisation and polymorphism",
            "Very high degree of translation"
        ],
        correct: 1,
        explanation: "These small DNA sequences are called VNTRs or minisatellites. They exhibit a very high degree of polymorphism, which forms the core basis of DNA fingerprinting."
    },

    {
        id: 804,
        topic: "HOTs",
        hots: true,
        q: "What is incorrect w.r.t. properties of genetic material?",
        options: [
            "It should be able to generate its replica",
            "It should be capable of undergoing slow changes",
            "It should be structurally unstable but chemically stable",
            "It should be able to express itself in the form of Mendelian characters"
        ],
        correct: 2,
        explanation: "A genetic material should be structurally as well as chemically stable. The incorrect statement suggests it should be structurally unstable, which would defeat its purpose as a reliable store of information."
    },

    {
        id: 805,
        topic: "HOTs",
        hots: true,
        q: "Semiconservative mode of replication was proved by Cairns using radioactive",
        options: [
            "Cytosine, bacteriophage",
            "Thymidine, E. coli",
            "Guanosine, Vicia faba",
            "Protein, Drosophila"
        ],
        correct: 1,
        explanation: "Cairns proved the semiconservative mode of replication in E. coli by using tritiated thymidine in an autoradiography experiment."
    },

    {
        id: 806,
        topic: "HOTs",
        hots: true,
        q: "Which of the following catalyses the nucleotide polymerisation in template independent manner?",
        options: [
            "DNA polymerase",
            "Reverse transcriptase",
            "Polynucleotide phosphorylase",
            "Peptidyl transferase"
        ],
        correct: 2,
        explanation: "The Severo Ochoa enzyme (polynucleotide phosphorylase) was helpful in polymerising RNA with defined sequences in a template-independent manner. DNA polymerase and Reverse transcriptase are strictly template-dependent."
    },

    {
        id: 807,
        topic: "HOTs",
        hots: true,
        q: "How many phosphodiester bonds are present at one strand in genetic material of bacteriophage lambda?",
        options: [
            "97002",
            "48502",
            "97004",
            "48501"
        ],
        correct: 3,
        explanation: "The genetic material of bacteriophage lambda is linear dsDNA that has 48502 bp. For one strand, the number of phosphodiester bonds is the number of nucleotides minus one (n-1), so 48502 - 1 = 48501."
    },

    {
        id: 808,
        topic: "HOTs",
        hots: true,
        q: "Select the incorrect match",
        options: [
            "RNA polymerase III - 5.8 SrRNA, tRNA, snRNA",
            "RNA polymerase II - hnRNA",
            "Splicing - snRNPs",
            "Termination factor in transcription - Rho factor"
        ],
        correct: 0,
        explanation: "RNA polymerase III helps in snRNA, 5S rRNA and tRNA synthesis. It does not synthesize 5.8S rRNA (which is done by RNA polymerase I), making option 1 the incorrect match."
    },

    {
        id: 809,
        topic: "HOTs",
        hots: true,
        q: "Formyl methionine carrying tRNA can bind only with",
        options: [
            "A site on 80S ribosome",
            "P site on 70S ribosome",
            "A site on 70S ribosome",
            "P site on 80S ribosome"
        ],
        correct: 1,
        explanation: "Non-formylated methionine is attached to tRNA in eukaryotes and formylated in prokaryotes. The initiator tRNA binds directly to the P site on the 70S prokaryotic ribosome."
    },

    {
        id: 810,
        topic: "HOTs",
        hots: true,
        q: "In regulation of gene expression in prokaryotes<br>(A) Lactose acts as the co-repressor for gene expression<br>(B) Tryptophan acts as the inducer for gene expression<br>(C) Regulator gene is one that produces the repressor molecule in Lac operon",
        options: [
            "Only A is correct",
            "B & C are correct",
            "Only C is correct",
            "A & B are correct"
        ],
        correct: 2,
        explanation: "Lactose is the substrate for the enzyme beta-galactosidase and it regulates switching on and off of the operon; hence, it is termed an inducer (not co-repressor). Tryptophan functions as a co-repressor. Thus, only statement C is correct."
    },

    {
        id: 811,
        topic: "HOTs",
        hots: true,
        q: "Which of the following component would enhance the rate of peptide bond formation during translation in Nostoc?",
        options: [
            "16S rRNA",
            "Kornberg enzyme",
            "23S rRNA",
            "Translocase"
        ],
        correct: 2,
        explanation: "23S rRNA (Peptidyl transferase) is responsible for peptide bond formation in prokaryotes (like Nostoc, a cyanobacterium)."
    },

    {
        id: 812,
        topic: "HOTs",
        hots: true,
        q: "Match the following (column I with column II) and choose the correct option.<br><b>a. Chromosome 1 of human</b> &nbsp; (i) 4000 genes<br><b>b. Human genome</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (ii) 231 genes<br><b>c. Genome of E. coli</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) 2968 genes<br><b>d. Chromosome Y of human</b> &nbsp; (iv) 30000 genes",
        options: [
            "a(i) b(iv) c(iii) d(ii)",
            "a(iii) b(iv) c(i) d(ii)",
            "a(iii) b(iv) c(ii) d(i)",
            "a(i) b(iv) c(ii) d(iii)"
        ],
        correct: 1,
        explanation: "The genome of E. coli has 4000 genes. The Y chromosome in human beings has the fewest (231) genes. Chromosome 1 has 2968 genes, and the human genome has around 30,000 genes."
    },

    {
        id: 813,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is not a feature of genetic code?",
        options: [
            "Degeneracy",
            "Overlapping",
            "Specificity",
            "Universality"
        ],
        correct: 1,
        explanation: "Each codon is independent and one codon does not overlap the next codon. The genetic code is strictly non-overlapping."
    },

    {
        id: 814,
        topic: "HOTs",
        hots: true,
        q: "DNA fingerprinting involves",
        options: [
            "Identifying differences in some specific regions in DNA sequence",
            "Satellite DNA",
            "Repetitive DNA",
            "All (1), (2) and (3)"
        ],
        correct: 3,
        explanation: "DNA fingerprinting involves identifying differences in some specific regions of DNA sequence called repetitive DNA. These repetitive DNA regions are separated from bulk genomic DNA and are referred to as satellite DNA."
    },

    {
        id: 815,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 815.jpg",
        q: "Consider the nucleosome diagram with parts A, B, and C. (Assume A is H1 histone, B is Histone octamer core, C is DNA wrapped around).<br>a. Part marked as (B) has five types of histone proteins.<br>b. Part marked as (A) is rich in basic amino acid residues.<br>c. Part marked as (C) is made up of 400 nucleotides.<br>Which of the above given statement(s) is/are incorrect?",
        options: [
            "a, c",
            "a only",
            "c only",
            "a, b"
        ],
        correct: 1,
        explanation: "The part marked as (B) is the histone octamer which contains four types of histones. Therefore, statement 'a' claiming five types is incorrect. The other statements correctly describe the nucleosome core."
    },

    {
        id: 816,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 816.jpg",
        q: "Select the correct option with respect to the given transcription unit figure.<br>(A = upstream box, B = downstream box, C = 5'→3' bottom strand)",
        options: [
            "Part (B): End of the process of translation",
            "Part (C): Complementary sequence of mRNA",
            "Part (A): DNA sequence that provides binding site for RNA polymerase",
            "Part (C): It has the polarity and the sequence same as RNA, except uracil at the place of thymine"
        ],
        correct: 2,
        explanation: "The labelled parts are as follows: A - Promoter, B - Terminator, C - Coding strand. The promoter (A) provides the binding site for RNA polymerase."
    },

    {
        id: 817,
        topic: "HOTs",
        hots: true,
        q: "Which one does not explain Chargaff's rule?",
        options: [
            "Applicable only for dsDNA",
            "Molar concentration of A+T and G+C are equal",
            "$\frac{A+T}{G+C}$ ratio is constant for a species",
            "Molar concentration of sugar equals to that of phosphate"
        ],
        correct: 1,
        explanation: "The ratio of molar concentrations of A+T and G+C varies from species to species, so they are generally not equal to each other."
    },

    {
        id: 818,
        topic: "HOTs",
        hots: true,
        q: "Process of translation of the mRNA to protein begins when",
        options: [
            "Small subunit of ribosome encounters the mRNA",
            "Aminoacylation of tRNA occurs",
            "Amino acid activation occurs",
            "Charged tRNA sequentially binds to the appropriate codon in mRNA"
        ],
        correct: 0,
        explanation: "Initiation of protein synthesis begins when the mRNA binds to the ribosome smaller subunit."
    },

    {
        id: 819,
        topic: "HOTs",
        hots: true,
        q: "Flow of genetic information in Rous Sarcoma Virus occurs from",
        options: [
            "DNA → RNA → Protein → DNA",
            "ssRNA → DNA → Protein",
            "DNA → RNA → Protein",
            "dsRNA → DNA → mRNA → Protein"
        ],
        correct: 2,
        explanation: "Rous sarcoma virus is a retrovirus and it reverse transcribes its RNA genome into cDNA before integration into the host DNA. Note: While option (3) describes the standard central dogma, the key identifies this as the closest intended answer for indicating the retroviral integration path before standard expression."
    },

    {
        id: 820,
        topic: "HOTs",
        hots: true,
        q: "What will be the base sequence on the DNA template strand if mRNA possesses 5' UACGUACGUACGUAC 3' base sequence?",
        options: [
            "5' TACGTACGTACGTAC 3'",
            "3' ATGCATGCATGCATG 5'",
            "5' ATGCATGCATGCATG 3'",
            "3' TACGTACGTACGTAC 5'"
        ],
        correct: 1,
        explanation: "mRNA is complementary to the template strand of DNA. Reading the complement of 5' UAC... 3' yields 3' ATG... 5'."
    },

    {
        id: 821,
        topic: "HOTs",
        hots: true,
        q: "In the elongation process of translation, tryptophan is brought to the A-site of the ribosome by which tRNA molecule?",
        options: [
            "images/mol_basis/ID 821 OPTION 1.jpg",
            "images/mol_basis/ID 821 OPTION 2.jpg",
            "images/mol_basis/ID 821 OPTION 3.jpg",
            "images/mol_basis/ID 821 OPTION 4.jpg"
        ],
        correct: 3,
        explanation: "Anticodon ACC (tRNA) binds with codon UGG (mRNA) that codes for tryptophan."
    },

    {
        id: 822,
        topic: "HOTs",
        hots: true,
        q: "RNA being a catalyst is more reactive hence unstable because of all, except",
        options: [
            "Presence of 2'OH of RNA",
            "Presence of uracil",
            "Mutation at faster rate",
            "Presence of methyl uracil"
        ],
        correct: 3,
        explanation: "The 2'-OH group present at every nucleotide in RNA is a reactive group and makes RNA labile and easily degradable. Uracil is present in RNA and methyl uracil (thymine) is present in DNA, making option 4 the exception."
    },

    {
        id: 823,
        topic: "HOTs",
        hots: true,
        q: "Which of the following statements for eubacteria is correct?",
        options: [
            "Transcription occurs inside the nucleus",
            "Control of the rate of transcriptional initiation is the predominant site for control of gene expression",
            "mRNA is generally monocistronic",
            "Splicing, capping and polyadenylation are required after transcription"
        ],
        correct: 1,
        explanation: "In prokaryotes, transcription occurs in the cytoplasm, mRNA is generally polycistronic, and splicing is not required. Control of transcriptional initiation is the primary site of regulation."
    },

    {
        id: 824,
        topic: "HOTs",
        hots: true,
        q: "All given represents sites of regulation of gene expression where the predominant site in prokaryotes is",
        options: [
            "Transcriptional level",
            "mRNA transport level",
            "Processing level",
            "Translational level"
        ],
        correct: 0,
        explanation: "In prokaryotes, control of the rate of transcriptional initiation is the predominant site for control of gene expression."
    },

    {
        id: 825,
        topic: "HOTs",
        hots: true,
        q: "Which of the following is not correct w.r.t salient features of the double helix structure of DNA?",
        options: [
            "The plane of one base pair stacks over the other",
            "The backbone is constituted by sugar-phosphate and the bases project outside",
            "The two chains have anti-parallel polarity",
            "The pitch of the helix is 3.4 nm"
        ],
        correct: 1,
        explanation: "The backbone is constituted by sugar phosphate and the bases project inside, not outside."
    },

    {
        id: 826,
        topic: "HOTs",
        hots: true,
        q: "During DNA replication in prokaryotes, RNA primers are removed by _______ and the gaps are filled by _______",
        options: [
            "DNA polymerase-I, DNA polymerase-I",
            "DNA polymerase-I, DNA polymerase-III",
            "Primase, DNA polymerase-III",
            "DNA polymerase-II, Ligase"
        ],
        correct: 0,
        explanation: "Because of its 5' to 3' exonuclease activity, DNA polymerase I removes RNA primers and fills the gaps between Okazaki fragments with DNA."
    },

    {
        id: 827,
        topic: "HOTs",
        hots: true,
        q: "Which of the following step is incorrect w.r.t DNA fingerprinting?",
        options: [
            "Separation of DNA fragments by electrophoresis",
            "Isolation of DNA",
            "Hybridisation using labelled VNTR probe",
            "Detection of hybridised DNA fragments by ultracentrifugation"
        ],
        correct: 3,
        explanation: "In DNA fingerprinting, detection of hybridised DNA fragments is done by autoradiography, not ultracentrifugation."
    },

    {
        id: 828,
        topic: "HOTs",
        hots: true,
        q: "The lac operon consists of",
        options: [
            "One regulatory gene and one structural gene",
            "Two regulatory genes and three structural genes",
            "Three structural genes and one regulator gene",
            "One structural gene and three regulatory genes"
        ],
        correct: 2,
        explanation: "The lac operon consists of one regulator gene (i gene) and three structural genes (lac z, lac y and lac a)."
    },

    {
        id: 829,
        topic: "HOTs",
        hots: true,
        q: "During translation (protein synthesis), the enzyme that catalyses peptide bonding is located in the",
        options: [
            "Central part of the tRNA",
            "Larger subunit of the ribosome",
            "Smaller subunit of the ribosome",
            "5'end of the mRNA"
        ],
        correct: 1,
        explanation: "During translation, the enzymes that catalyse peptide bond formation are 23S rRNA (in bacteria) and 28S rRNA (in eukaryotes). These rRNAs are respectively present in the 50S and 60S (larger) subunits of ribosomes."
    },

    {
        id: 830,
        topic: "HOTs",
        hots: true,
        q: "Which of the following mutation forms the genetic basis of proof that codon is a triplet and it is read in a contiguous manner?",
        options: [
            "Frameshift",
            "Nonsense",
            "Transition",
            "Transversion"
        ],
        correct: 0,
        explanation: "Deletion or insertion of one or more bases in a nucleotide chain results in a frameshift mutation. This forms the genetic basis of proof that the codon is a triplet and is read in a contiguous manner."
    },

    {
        id: 831,
        topic: "HOTs",
        hots: true,
        q: "Which of the following human genes has the longest stretch of DNA with 2.4 million bases?",
        options: [
            "Histone gene",
            "Insulin gene",
            "ADA gene",
            "Dystrophin gene"
        ],
        correct: 3,
        explanation: "The largest known human gene is the dystrophin gene, which has 2.4 million bases. It is located on the X-chromosome."
    },

    {
        id: 832,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 832.jpg",
        q: "Consider the given diagram of tRNA and select the right choice w.r.t. amino acid.<br><b>tRNA 'A' has anticodon ACC (binding to mRNA UGG). tRNA 'B' has anticodon UAC (binding to mRNA AUG).</b>",
        options: [
            "(A) Trp, (B) Met",
            "(A) Pro, (B) Tyr",
            "(A) Ser, (B) Arg",
            "(A) Leu, (B) Tyr"
        ],
        correct: 0,
        explanation: "A and B are amino acid-binding sites at the 3' end of the tRNA. The codon UGG on mRNA codes for tryptophan (Trp), and AUG codes for methionine (Met)."
    },

    {
        id: 833,
        topic: "HOTs",
        hots: true,
        q: "Which organism was utilised by Taylor et.al. to prove semi-conservative replication at chromosomal level?",
        options: [
            "Ophioglossum",
            "Lathyrus odoratus",
            "Vicia faba",
            "E. coli"
        ],
        correct: 2,
        explanation: "Taylor et al. proved the semiconservative mode of chromosome replication using tritiated thymidine in Vicia faba, which is a leguminous plant (eukaryote)."
    },

    {
        id: 834,
        topic: "HOTs",
        hots: true,
        q: "Which of the following structures is present in core particle of nucleosome?",
        options: [
            "Linker DNA",
            "H1 histone protein",
            "80 bp of DNA",
            "Octamer of histone protein"
        ],
        correct: 3,
        explanation: "The histone octamer forms the core particle of a nucleosome, around which DNA is wrapped. H1 acts as a linker histone outside the core."
    },

    {
        id: 835,
        topic: "HOTs",
        hots: true,
        q: "Severo Ochoa Enzyme is involved in",
        options: [
            "Deoxyribonucleotide polymerisation",
            "Amino acid synthesis",
            "Primer dependent DNA synthesis",
            "Template independent RNA synthesis"
        ],
        correct: 3,
        explanation: "The Severo Ochoa enzyme is polynucleotide phosphorylase, which is helpful in RNA polymerisation with defined sequences in a template-independent manner."
    },

    {
        id: 836,
        topic: "HOTs",
        hots: true,
        q: "Catalytic property of RNA is shown by all of the following, except",
        options: [
            "snRNA",
            "hnRNA",
            "Ribonuclease-P",
            "Peptidyl transferase"
        ],
        correct: 1,
        explanation: "hnRNA is the primary precursor transcript of mRNA and does not possess catalytic properties itself. snRNA (in spliceosomes), Ribonuclease-P, and peptidyl transferase (23S/28S rRNA) act as ribozymes."
    },

    {
        id: 837,
        topic: "HOTs",
        hots: true,
        q: "Stability of the DNA helical structure is conferred by",
        options: [
            "Stacking of one base pair over the other in addition to H-bonds",
            "N-glycosidic bond between nitrogen base and sugar",
            "Presence of 2'-OH group at every nucleotide",
            "Both (2) and (3) are correct"
        ],
        correct: 0,
        explanation: "In addition to hydrogen bonds between complementary bases, the stacking of one base pair over the other provides extra stability to the double helical structure of DNA."
    },

    {
        id: 838,
        topic: "HOTs",
        hots: true,
        q: "After the completion in which mode of replication, each DNA molecule would have one parental and one newly synthesised strand?",
        options: [
            "Conservative mode",
            "Disruptive mode",
            "Dispersive mode",
            "Semi-conservative mode"
        ],
        correct: 3,
        explanation: "After the completion of replication, each DNA molecule having one parental and one newly synthesised strand defines the semi-conservative mode of DNA replication."
    },

    {
        id: 839,
        topic: "HOTs",
        hots: true,
        q: "Which one of the statement is incorrect for transcription?",
        options: [
            "The principle of complementarity governs this process",
            "Adenosine does not form base pair with thymine",
            "Total DNA of an organism is transcribed into RNA copy",
            "The DNA dependent RNA polymerase catalyse the polymerisation on the strand that has the polarity 3'→5'"
        ],
        correct: 2,
        explanation: "Only a segment of DNA (a transcription unit) on one of the strands is transcribed into RNA, not the total DNA of an organism."
    },

    {
        id: 840,
        topic: "HOTs",
        hots: true,
        q: "Select correct match w.r.t. genetic codes.<br><b>a. Codon with dual function</b> &nbsp; (i) GUG<br><b>b. Non-degenerate codon</b> &nbsp;&nbsp;&nbsp; (ii) UGG<br><b>c. Ambiguous codon</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iii) AUG<br><b>d. Stop codons</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (iv) UAA",
        options: [
            "a(iii), b(ii), c(i), d(iv)",
            "a(ii), b(iii), c(i), d(iv)",
            "a(i), b(ii), c(iv), d(iii)",
            "a(iv), b(i), c(iii), d(ii)"
        ],
        correct: 0,
        explanation: "AUG codes for methionine and acts as an initiator codon (dual function). UGG strictly codes only for Tryptophan (non-degenerate). GUG is ambiguous (valine/methionine). UAA is a stop codon."
    },

    {
        id: 841,
        topic: "HOTs",
        hots: true,
        q: "Which one of the following is incorrectly matched?",
        options: [
            "Ribozyme - 23S rRNA",
            "Lac a - Permease",
            "ESTs - Exons",
            "Chromosome 1 - 2968 genes"
        ],
        correct: 1,
        explanation: "Gene lac a codes for transacetylase. Lac y codes for permease. Thus, option 2 is incorrectly matched."
    },

    {
        id: 842,
        topic: "HOTs",
        hots: true,
        image: "images/mol_basis/ID 842.jpg",
        q: "A diagram shows a DNA double helix being unwound, an RNA transcript separating from it, and a Rho (ρ) factor nearby. Identify this stage of gene expression.",
        options: [
            "Termination of translation process in bacteria",
            "Termination of transcription process in eukaryotes",
            "Termination of transcription process in bacteria",
            "Termination of translation process in eukaryotes"
        ],
        correct: 2,
        explanation: "The presence of the Rho (ρ) factor separating the RNA transcript from the DNA template indicates the termination of the transcription process in bacteria."
    },

    {
        id: 843,
        topic: "HOTs",
        hots: true,
        q: "Negatively charged DNA is wrapped around the positively charged histone octamer in",
        options: [
            "Qβ bacteriophage",
            "Drosophila",
            "Pneumococcus",
            "Escherichia coli"
        ],
        correct: 1,
        explanation: "In eukaryotes, DNA packaging requires histone proteins to form nucleosomes. Drosophila is the only eukaryote listed; the others are viruses and bacteria which lack true histones."
    },

    {
        id: 844,
        topic: "HOTs",
        hots: true,
        q: "A. Histones are organised to form a unit of eight molecules called ____.<br>B. ____ constitute the repeating unit of a structure in the nucleus called chromatin.<br>C. The chromatin that is more densely packed and stains dark is called ____.<br>Fill-up the blanks with correct answers.",
        options: [
            "A-Nucleosome, B-Chromosome, C-Euchromatin",
            "A-Histone octamer, B-Nucleosome, C-Heterochromatin",
            "A-Histone octamer, B-Nucleoid, C-Euchromatin",
            "A-Nucleosome, B-Nucleoid, C-Heterochromatin"
        ],
        correct: 1,
        explanation: "Eight histone molecules form a Histone octamer. DNA wrapped around it forms a Nucleosome (the repeating unit). Densely packed, dark-staining chromatin is Heterochromatin."
    },

    {
        id: 845,
        topic: "HOTs",
        hots: true,
        q: "Select the correct statements from the following regarding transcription.<br>A. In transcription, only a segment of DNA and only one of the strands is copied into RNA.<br>B. The terminator is located upstream of the structural gene.<br>C. Intervening sequences do appear in processed RNA.<br>D. In bacteria, translation can begin much before the mRNA is fully transcribed.",
        options: [
            "A & D",
            "B & C",
            "A & C",
            "B & D"
        ],
        correct: 0,
        explanation: "Statement A is correct. Statement D is correct because bacteria lack a nucleus. B is wrong (terminator is downstream). C is wrong (intervening sequences/introns are removed and do not appear in processed RNA)."
    },

    {
        id: 846,
        topic: "HOTs",
        hots: true,
        q: "How many phosphodiester bonds are present in plasmid DNA having 1000 bp?",
        options: [
            "1000",
            "2000",
            "999",
            "1998"
        ],
        correct: 1,
        explanation: "A plasmid is circular dsDNA. In a circular molecule, there are no free ends, so the number of phosphodiester bonds equals the total number of nucleotides. 1000 bp = 2000 nucleotides = 2000 phosphodiester bonds."
    },

    {
        id: 847,
        topic: "HOTs",
        hots: true,
        q: "<b>(A) 3'-ATGCTA-5'</b><br><b>(B) 5'-TACGAT-3'</b><br>In a hypothetical sequence of the above given dsDNA, if the promoter is present at the 5' end of the (A) strand and this DNA is involved in transcription, then what will be the correct sequence of mRNA?",
        options: [
            "5'-UACGAU-3'",
            "5'-AUCGUA-3'",
            "3'-AUCGUA-5'",
            "3'-UAGCAU-5'"
        ],
        correct: 1,
        explanation: "The promoter is at the 5' end of strand A (on the right side). Transcription proceeds 5'→3' on the new RNA, reading the template 3'→5'. Moving from right to left, the template must be the bottom strand (B) with its 3' end on the right: 3'-TAGCAT-5' (read right to left). The complementary mRNA is 5'-AUCGUA-3'."
    },

    {
        id: 848,
        topic: "HOTs",
        hots: true,
        q: "In bacteria, DNA in nucleoid is organised in large loops held by",
        options: [
            "Acidic proteins",
            "Histone proteins",
            "Positive charged proteins",
            "Negative charged proteins"
        ],
        correct: 2,
        explanation: "In prokaryotes, DNA packaging is maintained by non-histone basic, positively charged proteins (polyamines) that hold the large loops."
    },

    {
        id: 849,
        topic: "HOTs",
        hots: true,
        q: "Mark the mismatched pair",
        options: [
            "lac operon - Negative as well as positive control",
            "rRNAs - Play structural as well as catalytic role during translation",
            "Nucleosome - Feature of all living organisms",
            "VNTR - Mini-satellite"
        ],
        correct: 2,
        explanation: "Nucleosomes are a feature of eukaryotes. Packaging in prokaryotes is maintained by basic proteins like polyamines without forming nucleosomes, making option 3 mismatched."
    },

    {
        id: 850,
        topic: "HOTs",
        hots: true,
        q: "Read the following statements:<br>(a) Replication does not initiate randomly at any place in DNA.<br>(b) DNA polymerase on their own initiates DNA replication.<br>(c) DNA replication if not coordinated with cell division cycle, it may result in polyploidy.<br>(d) Presence of exons is reminiscent of antiquity and the process of splicing represents the dominance of RNA-world.<br>Find out the option with correct statements.",
        options: [
            "(a), (b) & (c)",
            "(a) & (c)",
            "(b) & (c)",
            "(a), (b) & (d)"
        ],
        correct: 1,
        explanation: "Statement (b) is wrong because DNA polymerases require a primer to initiate replication. Statement (d) is wrong because the presence of introns (not exons) is reminiscent of antiquity. Only (a) and (c) are correct."
    },

    {
        id: 851,
        topic: "HOTs",
        hots: true,
        q: "Which of these may not be a characteristic of a suitable genetic material?",
        options: [
            "Chemically and structurally be stable",
            "Can express itself in the form of Mendelian character",
            "Mutation at faster rate only",
            "Capable of producing its replica"
        ],
        correct: 2,
        explanation: "A suitable genetic material should provide the scope for slow changes (mutation) that are required for evolution, not mutate at a faster rate."
    },

    {
        id: 852,
        topic: "HOTs",
        hots: true,
        q: "Which of the following vectors have been exploited extensively in mapping the large genomes like Human Genome Project?",
        options: [
            "Phagemid",
            "YACs",
            "BACs",
            "Both (2) & (3)"
        ],
        correct: 3,
        explanation: "Yeast Artificial Chromosomes (YACs) and Bacterial Artificial Chromosomes (BACs) are vectors used to clone very large DNA fragments for mapping large genomes like the human genome."
    },

    {
        id: 853,
        topic: "HOTs",
        hots: true,
        q: "Which of the following nitrogenous bases is methylated form of uracil?",
        options: [
            "Guanine",
            "Thymine",
            "Adenine",
            "Cytosine"
        ],
        correct: 1,
        explanation: "Thymine is chemically known as 5-methyl uracil, which is a pyrimidine base unique to DNA."
    },

    {
        id: 854,
        topic: "HOTs",
        hots: true,
        q: "Same degree of polymorphism is obtained if DNA is isolated from",
        options: [
            "Hair-follicle samples of two different organisms",
            "Blood and skin samples of same individual",
            "Sperm samples of two different organisms",
            "Skin samples of two different individual"
        ],
        correct: 1,
        explanation: "DNA isolated from every tissue (such as blood, hair-follicle, skin, bone, saliva, sperm) from a single individual shows the exact same degree of polymorphism, which is the basis of DNA fingerprinting."
    },

    {
        id: 855,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> DNA probes bind to the repeat sequences of VNTRs on nylon membrane.<br><b>Reason (R):</b> DNA probes contain repeated sequences of bases complementary to those on VNTRs.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "Since DNA probes have the specific radioactive base sequence completely complementary to the VNTRs, they selectively hybridize and bind to those repeat sequences on the nylon membrane during Southern blotting."
    },

    {
        id: 856,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Tryptophan operon has five structural genes.<br><b>Reason (R):</b> Feed back mechanism explains the role of tryptophan in regulation.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 1,
        explanation: "The Tryptophan operon does indeed have five structural genes (trp E, D, C, B, A) and is regulated by a feedback repression mechanism involving tryptophan itself. However, the regulatory mechanism does not explain why it has five structural genes."
    },

    {
        id: 857,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Repetitive sequences present in introns help the DNA fingerprinting methodology.<br><b>Reason (R):</b> Each organism has a specific length, composition, and number of these repeats.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "The high degree of polymorphism (specific length, composition, and copy number) of repetitive sequences like VNTRs in non-coding regions directly forms the basis of DNA fingerprinting."
    },

    {
        id: 858,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Priming is essential to initiate the polymerisation of nucleotides on 5' end of parent DNA.<br><b>Reason (R):</b> Primer provides stability to single strand of forked double strand DNA.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 3,
        explanation: "Both statements are false. Priming initiates polymerization on the 3' end of the parent DNA (because the new strand grows 5'→3'). Stability to single strands is provided by Single-Stranded Binding (SSB) proteins, not the primer."
    },

    {
        id: 859,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> DNA polymerase cannot initiate the process of DNA replication.<br><b>Reason (R):</b> DNA replication initiates randomly on DNA.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 2,
        explanation: "DNA polymerase cannot initiate replication (it needs a primer), so the assertion is true. The reason is false because DNA replication starts at a very specific, fixed sequence point called the origin of replication (ori), not randomly."
    },

    {
        id: 860,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> The i gene associated with lac operon of E. coli is monocistronic.<br><b>Reason (R):</b> Polycistronic genes are more common in prokaryotes.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 1,
        explanation: "The structural genes (z, y, a) in the lac operon are polycistronic, but the regulatory i gene synthesizes a single repressor protein mRNA (monocistronic). While polycistronic genes are more common in prokaryotes, this fact does not explain the i-gene's nature."
    },

    {
        id: 861,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Transcription is immediately followed by translation in prokaryotes.<br><b>Reason (R):</b> mRNA does not require any elaborate processing to become functional/mature in prokaryotes.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "In bacteria, since there is no nuclear membrane and mRNA does not require processing (splicing/capping/tailing), translation can begin much before the mRNA is fully transcribed (coupled transcription-translation)."
    },

    {
        id: 862,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> One of the two strands of DNA is called sense strand and other is called antisense strand.<br><b>Reason (R):</b> Coding strand of DNA codes for RNA.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 2,
        explanation: "The assertion is true. The reason is false because the coding strand (sense strand) does not actually code for anything during transcription; it is the non-coding (antisense) template strand that acts as the template for RNA synthesis."
    },

    {
        id: 863,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> AUG is said to be non-degenerate.<br><b>Reason (R):</b> Methionine is coded only by AUG.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "AUG is an exception to the degeneracy of the genetic code because it strictly and unambiguously codes only for Methionine. Because it's the sole codon for this amino acid, it is non-degenerate."
    },

    {
        id: 864,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Product of lac z gene is primarily responsible for the hydrolysis of a polysaccharide.<br><b>Reason (R):</b> Gene i constitutively metabolises glucose.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 3,
        explanation: "Both are false. The lac z gene produces beta-galactosidase which hydrolyses a disaccharide (lactose), not a polysaccharide. The i-gene produces the repressor protein; it does not metabolise glucose."
    },

    {
        id: 865,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Lac operon includes more than one gene (z, y, a) under the regulation of a single promoter.<br><b>Reason (R):</b> This arrangement of genes is referred to as a split gene arrangement.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 2,
        explanation: "The assertion is true (polycistronic arrangement under one promoter). The reason is false because a 'split gene' arrangement refers to eukaryotic genes containing exons interrupted by introns, not multiple continuous genes in an operon."
    },

    {
        id: 866,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> During transcription, both strands of DNA are not copied to form RNA.<br><b>Reason (R):</b> One DNA strand acts as template during transcription.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "Both strands cannot act as a template because it would form two different, complementary RNA molecules simultaneously. Thus, the DNA strand with 3'→5' polarity selectively acts as the single template."
    },

    {
        id: 867,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> In prokaryotes, DNA replication and transcription are coupled in the cytoplasm.<br><b>Reason (R):</b> In prokaryotes, DNA replication and transcription are mediated by single type of polymerase enzyme.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 3,
        explanation: "Both statements are false. In prokaryotes, transcription and translation are coupled, not replication and transcription. Furthermore, replication and transcription are mediated by completely different enzymes (DNA polymerases vs. RNA polymerase)."
    },

    {
        id: 868,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> In nucleic acids, sugar-phosphate backbone contains phosphodiester linkages.<br><b>Reason (R):</b> Two nucleotides in nucleic acids are linked through 5'-3' phosphodiester linkage to form the backbone.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 2,
        explanation: "The assertion is true. The reason is false because the polarity of the phosphodiester linkage connecting two nucleotides in the backbone is always 3'-5', attaching the 3' carbon of one sugar to the 5' carbon of the next."
    },

    {
        id: 869,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> The two chains of DNA have anti-parallel polarity.<br><b>Reason (R):</b> One chain has the polarity of 5'→3' and the other has 3'→5'.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "The double-helical DNA molecule consists of two polynucleotide chains running in opposite directions (anti-parallel manner); one runs 5'→3' while its complementary partner runs 3'→5'."
    },

    {
        id: 870,
        topic: "HOTs",
        hots: true,
        q: "<b>Assertion (A):</b> Polycistronic mRNA is commonly found in prokaryotes.<br><b>Reason (R):</b> Most prokaryotic mRNA codes for more than one polypeptide.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "Polycistronic mRNA means a single mRNA transcript contains multiple cistrons (coding regions), each producing a distinct polypeptide. This arrangement is highly typical of prokaryotic operons."
    },
    {
        id: 871,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> In Griffith experiment, a mixture of heat-killed 'S' and live 'R' strain of streptococcus, shows virulence when injected to mice.<br><b>Reason (R):</b> According to Griffith, DNA from heat-killed 'S' strain acts as transforming principle, to make 'R' strain virulent.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 2,
        explanation: "The assertion is true. The reason is false because Griffith himself was unable to deduce the biochemical nature (DNA) of the transforming principle. That was later proven by Avery, MacLeod, and McCarty."
    },
    {
        id: 872,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> UTRs are characteristic of eukaryotic mRNA but not the prokaryotic mRNA.<br><b>Reason (R):</b> The presence of UTRs enhances the efficiency of transcription.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 3,
        explanation: "Both statements are false. UTRs (Untranslated Regions) on mRNA are present in both prokaryotes and eukaryotes. They function to enhance the efficiency of translation, not transcription."
    },
    {
        id: 873,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> Genetic code is triplet.<br><b>Reason (R):</b> Three codons do not code for any amino acids.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 1,
        explanation: "Both statements are true. The triplet nature of the genetic code means each codon is made up of three nucleotides. Three distinct codons function as stop signals and do not code for amino acids. However, the presence of stop codons is not the reason the code is a triplet."
    },
    {
        id: 874,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> Euchromatin is said to be transcriptionally active chromatin.<br><b>Reason (R):</b> Euchromatin region is completely devoid of histones packing and hence, easily transcribed.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 2,
        explanation: "The assertion is true. The reason is false because the euchromatin region is not completely devoid of histone proteins; it is simply less tightly packed with histones compared to heterochromatin."
    },
    {
        id: 875,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> RNA world notion is supported by catalytic nature of RNA.<br><b>Reason (R):</b> RNA has evolved from DNA with chemical modifications that make it catalytic.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 2,
        explanation: "The assertion is true (RNA's catalytic ability supports the RNA World hypothesis). The reason is backwards/false: DNA evolved from RNA with chemical modifications (like replacing the 2'-OH and using thymine) to increase stability, not the other way around."
    },
    {
        id: 876,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> Sometimes, the regulatory sequences are loosely defined as regulatory genes, even though they do not code RNA or protein.<br><b>Reason (R):</b> Inheritance of a character is also affected by regulatory sequences of a structural gene.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "Both statements are true and R explains A. Regulatory sequences (like enhancers or insulators) are critically involved in regulating the expression of structural genes, meaning they affect character inheritance. Hence, they are often loosely defined as regulatory genes."
    },
    {
        id: 877,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> Insertion or deletion of three bases change the reading frame from the point of insertion or deletion.<br><b>Reason (R):</b> Frameshift mutations cause synonymous change in amino acids hence usually unaltered polypeptide is formed.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 3,
        explanation: "Both statements are false. Insertion or deletion of three bases (one whole codon) does not shift the downstream reading frame, it merely adds or removes an amino acid. Frameshift mutations (caused by 1 or 2 base indels) cause non-synonymous, highly altered polypeptides."
    },
    {
        id: 878,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> Less than 2 percent of the genome codes for proteins.<br><b>Reason (R):</b> The functions are unknown for over 50 percent of the discovered genes.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 1,
        explanation: "Both the assertion and the reason represent correct, independent salient features discovered by the Human Genome Project. However, the lack of known function for discovered genes does not conceptually explain why less than 2% of the genome codes for proteins."
    },
    {
        id: 879,
        topic: "HOTs",
        hots: true,
        difficulty: "Medium",
        type: "AR",
        q: "<b>Assertion (A):</b> DNA fingerprinting involves identifying differences in repetitive DNA.<br><b>Reason (R):</b> Among individuals, the length and number of repetitive DNA units vary.",
        options: [
            "Both Assertion and Reason are true and the Reason is the correct explanation of the Assertion",
            "Both Assertion and Reason are true but the Reason is not the correct explanation of the Assertion",
            "Assertion is true statement but Reason is false",
            "Both Assertion and Reason are false statements"
        ],
        correct: 0,
        explanation: "Variation in length and copy number of repetitive DNA units (polymorphism) is precisely the basis of identifying differences among individuals in a population, making R the correct explanation for A."
    }
]





