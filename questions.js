const allQuestions = [
    // ===== SET 1: INTRODUCTION (Q1-Q15) =====
    { id: 1, topic: "Introduction", q: "Consider the following statements regarding nucleic acids:<br>(i) DNA acts as genetic material in all living organisms.<br>(ii) RNA acts as genetic material in some viruses.<br>(iii) RNA can function as a catalytic molecule.<br>(iv) RNA always functions only as a messenger molecule.<br><br>Which of the above statements are <b>correct</b>?", options: ["(i) and (ii) only", "(ii) and (iii) only", "(i), (ii) and (iii)", "(ii), (iii) and (iv)"], correct: 1, explanation: "DNA acts as genetic material in most organisms, not all (some viruses use RNA) — so (i) is incorrect. Statement (iv) is wrong because RNA also acts as adapter, structural, and catalytic molecule. Statements (ii) and (iii) are correct per NCERT." },

    { id: 2, topic: "Introduction", q: "Which of the following roles is <b>NOT</b> attributed to RNA?", options: ["Genetic material in some viruses", "Adapter molecule", "Catalytic molecule", "Genetic material in majority of organisms"], correct: 3, explanation: "DNA is the genetic material in the majority of organisms. RNA serves as genetic material only in some viruses. RNA also functions as messenger, adapter, structural, and catalytic molecule." },

    { id: 3, topic: "Introduction", q: "<b>Assertion (A):</b> RNA is multifunctional compared to DNA.<br><b>Reason (R):</b> RNA can act as genetic material, messenger, adapter, structural, and catalytic molecule.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "RNA performs multiple functions — genetic (in some viruses), messenger, adapter (tRNA), structural (rRNA), and catalytic (ribozymes). This diversity makes it multifunctional compared to DNA. R correctly explains A." },

    { id: 4, topic: "Introduction", q: "The process of formation of RNA from DNA is called:", options: ["Translation", "Replication", "Transcription", "Reverse transcription"], correct: 2, explanation: "Transcription is RNA synthesis from DNA template. Translation is protein synthesis. Replication is DNA→DNA. Reverse transcription is RNA→DNA." },

    { id: 5, topic: "Introduction", q: "Which of the following statements is <b>incorrect</b>?", options: ["DNA is the genetic material in most organisms", "RNA acts as a messenger in most organisms", "RNA can act as a catalytic molecule", "DNA acts as genetic material in all viruses"], correct: 3, explanation: "Not all viruses have DNA as genetic material. Some viruses (e.g., TMV, retroviruses) use RNA. Options A, B, and C are correct." },

    { id: 6, topic: "Introduction", q: "The complete nucleotide sequence of the human genome has ushered in a new era of:", options: ["Proteomics", "Genomics", "Metabolomics", "Transcriptomics"], correct: 1, explanation: "NCERT states the determination of the complete nucleotide sequence of the human genome set in a new era of genomics." },

    { id: 7, topic: "Introduction", q: "Consider the following statements:<br>(i) Mendel knew that 'factors' were made of DNA.<br>(ii) DNA is a polymer of deoxyribonucleotides.<br>(iii) RNA never acts as genetic material.<br>(iv) Nucleic acids are polymers of nucleotides.<br><br>How many of the above statements are <b>correct</b>?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(i) is incorrect — Mendel didn't know factors were DNA. (iii) is incorrect — RNA acts as genetic material in some viruses. Only (ii) and (iv) are correct = 2 statements." },

    { id: 8, topic: "Introduction", q: "Which one of the following is <b>not</b> a function of RNA?", options: ["Acts as adapter molecule", "Acts as structural molecule", "Stores hereditary information in majority of organisms", "Acts as catalytic molecule"], correct: 2, explanation: "DNA, not RNA, stores hereditary information in the majority of organisms." },

    { id: 9, topic: "Introduction", q: "<b>Assertion (A):</b> At the time of Mendel, the chemical nature of 'factors' was well established.<br><b>Reason (R):</b> It took over a hundred years after Mendel to establish DNA as the genetic material.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is false but R is true", "Both A and R are false"], correct: 2, explanation: "Assertion is false — at Mendel's time, the nature of factors was NOT clear. Reason is true." },

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

    { id: 19, topic: "The DNA", q: "<b>Assertion (A):</b> The genome size of φ×174 is expressed in nucleotides and not in base pairs.<br><b>Reason (R):</b> φ×174 has single-stranded DNA as its genetic material.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "φ×174 is single-stranded, so genome is expressed in nucleotides, not base pairs. R correctly explains A." },

    { id: 20, topic: "The DNA", q: "The length of DNA is usually defined as:", options: ["Number of amino acids", "Number of genes present", "Number of nucleotides or base pairs", "Molecular weight in Daltons"], correct: 2, explanation: "NCERT: the length of DNA is defined as the number of nucleotides or base pairs present in it." },

    { id: 21, topic: "The DNA", q: "Arrange in <b>increasing order</b> of genome size:<br>(i) φ×174 (ii) Human haploid (iii) E. coli (iv) Bacteriophage lambda", options: ["(i) < (iv) < (iii) < (ii)", "(i) < (iii) < (iv) < (ii)", "(iv) < (i) < (iii) < (ii)", "(ii) < (iii) < (iv) < (i)"], correct: 0, explanation: "φ×174 (5386 nt) < Lambda (48502 bp) < E. coli (4.6×10⁶ bp) < Human (3.3×10⁹ bp)." },

    { id: 22, topic: "The DNA", q: "Which organism has the <b>smallest</b> genome among the options?", options: ["E. coli", "Bacteriophage lambda", "Bacteriophage φ×174", "Human"], correct: 2, explanation: "φ×174 has only 5386 nucleotides — smallest among listed organisms." },

    { id: 23, topic: "The DNA", q: "Consider the following statements:<br>(i) DNA is a long polymer of deoxyribonucleotides.<br>(ii) The number of base pairs is characteristic of an organism.<br>(iii) Bacteriophage lambda has 5386 base pairs.<br>(iv) Human haploid DNA has 3.3 × 10⁹ bp.<br><br>Which statements are <b>correct</b>?", options: ["(i), (ii) and (iii)", "(i), (ii) and (iv)", "(ii), (iii) and (iv)", "(i), (iii) and (iv)"], correct: 1, explanation: "(iii) is incorrect — Lambda has 48502 bp, not 5386. φ×174 has 5386 nucleotides." },

    { id: 24, topic: "The DNA", q: "The genome of bacteriophage lambda consists of:", options: ["5386 nucleotides", "48502 base pairs", "4.6 × 10⁶ base pairs", "3.3 × 10⁹ base pairs"], correct: 1, explanation: "Bacteriophage lambda has 48502 bp (double-stranded DNA)." },

    { id: 25, topic: "The DNA", q: "Statement 1: A base pair refers to a pair of complementary nucleotides in double-stranded DNA.<br>Statement 2: The genome size of all organisms is expressed in base pairs.", options: ["Both statements are correct", "Only Statement 1 is correct", "Only Statement 2 is correct", "Both statements are incorrect"], correct: 1, explanation: "Statement 2 is incorrect — single-stranded genomes (like φ×174) are expressed in nucleotides, not base pairs." },

    { id: 26, topic: "The DNA", q: "The genome of E. coli is approximately how many times larger than bacteriophage lambda?", options: ["~10 times", "~95 times", "~700 times", "~1000 times"], correct: 1, explanation: "4.6×10⁶ / 48502 ≈ 95 times." },

    { id: 27, topic: "The DNA", q: "Which is a <b>correct</b> pair?", options: ["φ×174 – 48502 bp", "Lambda phage – 5386 nucleotides", "E. coli – 3.3 × 10⁹ bp", "Human (haploid) – 3.3 × 10⁹ bp"], correct: 3, explanation: "Human haploid DNA = 3.3 × 10⁹ bp is correct. Others are mismatched." },

    { id: 28, topic: "The DNA", q: "<b>Assertion (A):</b> The length of DNA is a characteristic feature of an organism.<br><b>Reason (R):</b> Different organisms have different numbers of nucleotides/base pairs.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "The number of nucleotides/base pairs is characteristic. Different organisms have different genome sizes. R explains A." },

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

    { id: 42, topic: "Polynucleotide Structure", q: "<b>Assertion (A):</b> Uracil is found in RNA at the place of thymine.<br><b>Reason (R):</b> Thymine is chemically known as 5-methyl uracil.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 1, explanation: "Both are true. However, the fact that thymine is 5-methyl uracil doesn't explain WHY uracil replaces thymine in RNA." },

    { id: 43, topic: "Polynucleotide Structure", q: "Which is <b>incorrect</b> regarding pyrimidine bases?", options: ["Cytosine is found in both DNA and RNA", "Thymine is found only in DNA", "Uracil is found only in RNA", "Guanine is a pyrimidine base"], correct: 3, explanation: "Guanine is a PURINE, not pyrimidine. Pyrimidines = Cytosine, Thymine, Uracil." },

    { id: 44, topic: "Polynucleotide Structure", q: "The nitrogenous bases in a polynucleotide chain are:", options: ["Part of the backbone", "Projecting from the backbone", "Linked to the phosphate group", "Between two sugar molecules"], correct: 1, explanation: "NCERT: 'The nitrogenous bases linked to sugar moiety project from the backbone.'" },

    { id: 45, topic: "Polynucleotide Structure", q: "Match: (i) Adenosine (ii) Deoxyadenosine (iii) Deoxyadenylic acid with (P) Nucleotide (Q) RNA nucleoside (R) DNA nucleoside", options: ["(i)–Q, (ii)–R, (iii)–P", "(i)–R, (ii)–Q, (iii)–P", "(i)–P, (ii)–Q, (iii)–R", "(i)–Q, (ii)–P, (iii)–R"], correct: 0, explanation: "Adenosine = RNA nucleoside (Q). Deoxyadenosine = DNA nucleoside (R). Deoxyadenylic acid = nucleotide (P)." },

    { id: 46, topic: "Polynucleotide Structure", q: "A dinucleotide is formed by linking two nucleotides through:", options: ["N-glycosidic bond", "Peptide bond", "3'–5' phosphodiester bond", "Hydrogen bond"], correct: 2, explanation: "NCERT: 'Two nucleotides are linked through 3'–5' phosphodiester linkage to form a dinucleotide.'" },

    { id: 47, topic: "Polynucleotide Structure", q: "About the 5'-end of a polynucleotide chain:<br>(i) Has a free phosphate moiety<br>(ii) Has a free –OH group of sugar<br>(iii) Is at the 5' carbon of sugar<br>(iv) New nucleotides are added at this end<br><br>How many are correct?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(i) and (iii) are correct. (ii) is wrong — free –OH is at 3'-end. (iv) is wrong — nucleotides are added at 3'-end." },

    { id: 48, topic: "Polynucleotide Structure", q: "Correct order of components from inside to outside in a DNA strand:", options: ["Phosphate → Sugar → Base", "Base → Sugar → Phosphate", "Sugar → Base → Phosphate", "Base → Phosphate → Sugar"], correct: 1, explanation: "Bases are inside (projecting inward), attached to sugar, connected to phosphate on the outside." },

    { id: 49, topic: "Polynucleotide Structure", q: "Statement 1: The pentose sugar in RNA is ribose.<br>Statement 2: DNA lacks an –OH group at 2' position compared to RNA.", options: ["Only Statement 1 is correct", "Only Statement 2 is correct", "Both statements are correct", "Both statements are incorrect"], correct: 2, explanation: "RNA has ribose (with 2'-OH), DNA has deoxyribose (lacking 2'-OH). Both are correct." },

    { id: 50, topic: "Polynucleotide Structure", q: "What differentiates a nucleoside from a nucleotide?", options: ["Nucleoside has phosphate; nucleotide does not", "Nucleotide has phosphate linked at 5'C; nucleoside lacks it", "Nucleoside has phosphodiester bond; nucleotide has glycosidic bond", "No difference"], correct: 1, explanation: "Nucleoside = base + sugar. Nucleotide = nucleoside + phosphate (at 5'C through phosphoester bond)." },

    { id: 51, topic: "Polynucleotide Structure", q: "Which carbon atoms of sugar are involved in phosphodiester linkage?", options: ["1'C and 4'C", "2'C and 5'C", "3'C and 5'C", "1'C and 5'C"], correct: 2, explanation: "The 3'–5' phosphodiester linkage involves 3'C of one sugar and 5'C of the adjacent sugar." },

    { id: 52, topic: "Polynucleotide Structure", q: "<b>Assertion (A):</b> RNA is less stable than DNA.<br><b>Reason (R):</b> RNA has an additional –OH group at 2' position making it more reactive.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "The 2'-OH in RNA makes it susceptible to hydrolysis and more reactive. R correctly explains A." },

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

    { id: 64, topic: "DNA Double Helix", q: "<b>Assertion (A):</b> Distance between two polynucleotide chains remains approximately uniform.<br><b>Reason (R):</b> A purine always pairs with a pyrimidine.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "Purine (larger) + pyrimidine (smaller) = approximately same combined width for each base pair." },

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

    { id: 78, topic: "DNA Double Helix", q: "<b>Assertion (A):</b> DNA with higher G-C content is more thermally stable.<br><b>Reason (R):</b> G-C has 3 H-bonds vs 2 in A-T.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "More G-C = more H-bonds per bp = more energy to denature = higher thermal stability." },

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

    { id: 88, topic: "DNA Double Helix", q: "<b>Assertion (A):</b> DNA strands can be separated by heating.<br><b>Reason (R):</b> H-bonds are weak bonds that break at high temperatures.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "DNA denaturation occurs on heating because H-bonds between base pairs break at high temperatures." },

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

    { id: 98, topic: "Packaging of DNA", q: "<b>Assertion (A):</b> Negatively charged DNA wraps around positively charged histone octamer.<br><b>Reason (R):</b> Histones are rich in lysine and arginine with positive charges.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Electrostatic attraction between negative DNA and positive histones facilitates nucleosome formation." },

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

    { id: 109, topic: "Packaging of DNA", q: "<b>Assertion (A):</b> DNA packaging is more complex in eukaryotes than prokaryotes.<br><b>Reason (R):</b> Eukaryotes have histones, nucleosomes, and NHC proteins; prokaryotes have only nucleoid.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Eukaryotic packaging involves multiple levels. Prokaryotic is simpler. R explains A." },

    { id: 110, topic: "Packaging of DNA", q: "Chromosomes are most condensed during:", options: ["Interphase", "Prophase", "Metaphase", "Telophase"], correct: 2, explanation: "NCERT: chromatin fibers are 'coiled and condensed at metaphase stage.'" },

    { id: 111, topic: "Packaging of DNA", q: "Consider:<br>(i) DNA wraps around histone octamer → Nucleosome<br>(ii) Beads-on-string under EM<br>(iii) NHC proteins for higher packaging<br>(iv) Euchromatin = densely packed + inactive<br><br>How many correct?", options: ["All four", "Three", "Two", "One"], correct: 1, explanation: "(iv) is WRONG — Euchromatin is loosely packed and active. (i), (ii), (iii) are correct = 3." },

    { id: 112, topic: "Packaging of DNA", q: "Charge interaction in nucleosome formation:", options: ["Negative DNA + Negative histones", "Positive DNA + Negative histones", "Negative DNA + Positive histones", "Neutral DNA + Neutral histones"], correct: 2, explanation: "DNA (negative, phosphate groups) + histones (positive, lysine/arginine) = electrostatic attraction." },

    { id: 113, topic: "Packaging of DNA", q: "Select the <b>incorrect</b> match:", options: ["Euchromatin – Loosely packed – Active", "Heterochromatin – Densely packed – Inactive", "Nucleoid – Prokaryotic DNA region", "Nucleosome – 500 bp – Repeating unit"], correct: 3, explanation: "Nucleosome contains 200 bp, not 500 bp." },

    { id: 114, topic: "Packaging of DNA", q: "Correct relationship between packaging and gene expression:", options: ["Tightly packed = more active", "Loosely packed = inactive", "Packaging has no effect", "Loosely packed euchromatin = transcriptionally active"], correct: 3, explanation: "Euchromatin (loosely packed) allows access to transcription machinery = active." },

    { id: 115, topic: "Packaging of DNA", q: "A positively charged protein is likely rich in:", options: ["Glutamic acid", "Aspartic acid", "Arginine", "Leucine"], correct: 2, explanation: "Arginine (and lysine) carry positive charges. Glutamic/aspartic acid are negative." },

    { id: 116, topic: "Packaging of DNA", q: "The beads in beads-on-string model represent:", options: ["Histones", "Nucleosomes", "NHC proteins", "Base pairs"], correct: 1, explanation: "Beads = nucleosomes; string = linker DNA between nucleosomes." },

    { id: 117, topic: "Packaging of DNA", q: "Which correctly describes the nucleoid?", options: ["Membrane-bound nucleus of prokaryotes", "Region where prokaryotic DNA is organized with proteins in large loops", "Part of eukaryotic chromatin", "Site of ribosome assembly"], correct: 1, explanation: "Nucleoid is NOT membrane-bound. DNA is organized in large loops held by proteins." },

    { id: 118, topic: "Packaging of DNA", q: "<b>Assertion (A):</b> 2.2 m DNA fits in a nucleus of ~10⁻⁶ m diameter.<br><b>Reason (R):</b> Multiple levels of packaging (nucleosomes → chromatin → chromosomes).", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Multiple packaging levels allow extreme compaction. R explains how this is achieved." },

    // ===== SET 6: GRIFFITH'S EXPERIMENT (Q119-Q129) =====
    { id: 119, topic: "Griffith's Experiment", q: "Griffith's transformation experiment was performed on:", options: ["E. coli", "Streptococcus pneumoniae", "Salmonella typhimurium", "Bacillus subtilis"], correct: 1, explanation: "Griffith (1928) worked with Streptococcus pneumoniae (pneumococcus)." },

    { id: 120, topic: "Griffith's Experiment", q: "S strain is virulent because:", options: ["It produces an endotoxin", "It has a mucous (polysaccharide) coat", "It lacks a cell wall", "It produces antibiotic-resistant enzymes"], correct: 1, explanation: "S strain has a mucous (polysaccharide) coat making them virulent." },

    { id: 121, topic: "Griffith's Experiment", q: "Which combinations led to mice death?<br>(i) Live S strain<br>(ii) Live R strain<br>(iii) Heat-killed S strain<br>(iv) Heat-killed S + live R", options: ["(i) and (iv) only", "(i) only", "(i) and (iii) only", "(ii) and (iv) only"], correct: 0, explanation: "Live S (virulent) kills mice. Heat-killed S + live R also kills (transformation)." },

    { id: 122, topic: "Griffith's Experiment", q: "What was recovered from dead mice injected with heat-killed S + live R?", options: ["Only dead S strain", "Only live R strain", "Living S strain bacteria", "Heat-killed R strain"], correct: 2, explanation: "Living S bacteria were recovered — R strain transformed into virulent S strain." },

    { id: 123, topic: "Griffith's Experiment", q: "About Griffith's experiment:<br>(i) R strain transformed into S<br>(ii) Transforming principle enabled polysaccharide coat synthesis<br>(iii) Griffith concluded DNA was transforming principle<br>(iv) Transfer of genetic material occurred<br><br>Which are correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii)", "All four", "(ii) and (iii) only"], correct: 0, explanation: "(iii) is WRONG — Griffith did NOT identify it as DNA. He called it 'transforming principle'." },

    { id: 124, topic: "Griffith's Experiment", q: "<b>Assertion (A):</b> Griffith called it 'transforming principle'.<br><b>Reason (R):</b> He could not determine the biochemical nature.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Griffith used a general term because he couldn't identify the exact biochemical nature." },

    { id: 125, topic: "Griffith's Experiment", q: "R strain colonies appear rough because:", options: ["Thick peptidoglycan layer", "Lack of polysaccharide coat", "Endospore production", "Presence of flagella"], correct: 1, explanation: "R strain lacks the polysaccharide coat, giving rough colony appearance." },

    { id: 126, topic: "Griffith's Experiment", q: "Correct chronological order:", options: ["Griffith → Hershey-Chase → Avery et al.", "Avery → Griffith → Hershey-Chase", "Griffith → Avery et al. → Hershey-Chase", "Hershey-Chase → Griffith → Avery"], correct: 2, explanation: "Griffith (1928) → Avery et al. (1933-44) → Hershey-Chase (1952)." },

    { id: 127, topic: "Griffith's Experiment", q: "Transformation of R to S strain is an example of:", options: ["Transduction", "Conjugation", "Transformation", "Translation"], correct: 2, explanation: "Transformation = cell takes up exogenous DNA from environment." },

    { id: 128, topic: "Griffith's Experiment", q: "Statement 1: Heat-killed S alone causes pneumonia in mice.<br>Statement 2: Transforming principle converts live R into virulent S.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 2, explanation: "Heat-killed S alone does NOT kill mice. S2 is correct." },

    { id: 129, topic: "Griffith's Experiment", q: "Significance of Griffith's experiment:", options: ["Proved DNA is genetic material", "Demonstrated transformation by substance from dead organism", "Identified polysaccharide coat as genetic material", "Showed proteins cause transformation"], correct: 1, explanation: "Griffith demonstrated transformation but did NOT identify the chemical nature." },

    // ===== SET 7: AVERY, MacLEOD & McCARTY (Q130-Q136) =====
    { id: 130, topic: "Avery et al. Experiment", q: "Avery et al. aimed to determine:", options: ["Structure of DNA", "Biochemical nature of transforming principle", "Mechanism of DNA replication", "Process of protein synthesis"], correct: 1, explanation: "They worked to determine the biochemical nature of Griffith's transforming principle." },

    { id: 131, topic: "Avery et al. Experiment", q: "Transformation was inhibited when treated with:", options: ["Protease", "RNase", "DNase", "Lipase"], correct: 2, explanation: "DNase inhibited transformation, proving DNA was the transforming principle." },

    { id: 132, topic: "Avery et al. Experiment", q: "About Avery et al.:<br>(i) Proteases didn't affect transformation<br>(ii) RNases didn't affect transformation<br>(iii) DNase inhibited transformation<br>(iv) All biologists were convinced<br><br>Which are correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iii) only", "(ii) and (iv) only"], correct: 0, explanation: "(iv) is incorrect — 'not all biologists were convinced.'" },

    { id: 133, topic: "Avery et al. Experiment", q: "<b>Assertion (A):</b> Avery et al. concluded DNA is hereditary material.<br><b>Reason (R):</b> DNase inhibited transformation while proteases and RNases had no effect.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "The experimental evidence directly led to the conclusion. R correctly explains A." },

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

    { id: 143, topic: "Hershey-Chase Experiment", q: "<b>Assertion (A):</b> Radioactive protein didn't enter bacteria.<br><b>Reason (R):</b> Only DNA of phage enters host cell during infection.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "During phage infection, only DNA enters; protein coat stays outside." },

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

    { id: 153, topic: "Properties of Genetic Material", q: "<b>Assertion (A):</b> DNA is less reactive and more stable than RNA.<br><b>Reason (R):</b> DNA lacks the 2'-OH group present in RNA.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Absence of 2'-OH in DNA makes it less reactive and more stable. R explains A." },

    { id: 154, topic: "Properties of Genetic Material", q: "Thymine instead of uracil in DNA confers:", options: ["Additional reactivity", "Additional stability", "Catalytic activity", "Faster mutation"], correct: 1, explanation: "NCERT: 'thymine at the place of uracil confers additional stability to DNA.'" },

    { id: 155, topic: "Properties of Genetic Material", q: "RNA viruses mutate and evolve faster because:", options: ["RNA is more stable", "RNA is less reactive", "RNA being unstable mutates at faster rate", "RNA cannot replicate"], correct: 2, explanation: "NCERT: 'RNA being unstable, mutate at a faster rate.'" },

    { id: 156, topic: "Properties of Genetic Material", q: "About DNA and RNA as genetic material:", options: ["DNA for storage; RNA for transmission", "RNA for storage; DNA for transmission", "Both equally preferred", "Neither functions as genetic material"], correct: 0, explanation: "NCERT: 'DNA is preferred for storage. For transmission, RNA is better.'" },

    { id: 157, topic: "Properties of Genetic Material", q: "RNA can directly code for proteins. This allows RNA to:", options: ["Be better for storage", "Easily express characters (Mendelian)", "Be more stable", "Prevent mutations"], correct: 1, explanation: "RNA can directly code for proteins, hence easily express characters." },

    { id: 158, topic: "Properties of Genetic Material", q: "Statement 1: DNA depends on RNA for protein synthesis.<br>Statement 2: Protein synthesis machinery evolved around RNA.", options: ["Only S1 correct", "Only S2 correct", "Both correct", "Both incorrect"], correct: 2, explanation: "Both are directly from NCERT." },

    { id: 159, topic: "Properties of Genetic Material", q: "Which virus has RNA as genetic material?", options: ["Bacteriophage φ×174", "Bacteriophage lambda", "Tobacco Mosaic Virus (TMV)", "Bacteriophage T2"], correct: 2, explanation: "NCERT mentions TMV and QB bacteriophage as examples." },

    { id: 160, topic: "Properties of Genetic Material", q: "Stability of genetic material after death was demonstrated by:", options: ["Hershey-Chase experiment", "Griffith's transforming principle", "Watson-Crick model", "Avery et al.'s DNase work"], correct: 1, explanation: "Heat killed bacteria but didn't destroy genetic material properties." },

    { id: 161, topic: "Properties of Genetic Material", q: "When denatured DNA strands reunite under appropriate conditions:", options: ["Denaturation", "Renaturation (Annealing)", "Degradation", "Transcription"], correct: 1, explanation: "Complementary strands come together = renaturation/annealing." },

    { id: 162, topic: "Properties of Genetic Material", q: "Proteins fail to qualify as genetic material because:", options: ["Cannot mutate", "Not stable", "Cannot replicate", "Too small"], correct: 2, explanation: "NCERT: 'proteins fail to fulfill first criteria itself' — replication." },

    { id: 163, topic: "Properties of Genetic Material", q: "<b>Assertion (A):</b> RNA is catalytic.<br><b>Reason (R):</b> This makes RNA reactive and less suitable as stable genetic material.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Being catalytic = reactive = undesirable for stable genetic storage." },

    { id: 164, topic: "Properties of Genetic Material", q: "All criteria for genetic material:", options: ["Replication, Stability, Mutation, Expression", "Replication, Stability, Catalysis, Translation", "Transcription, Translation, Stability, Mutation", "Replication, Mutation, Catalysis, Expression"], correct: 0, explanation: "NCERT four criteria: Replication, Stability, Mutation, Expression." },

    { id: 165, topic: "Properties of Genetic Material", q: "DNA vs RNA comparison:<br>(i) Stability: DNA > RNA ✓<br>(ii) Reactivity: DNA < RNA ✓<br>(iii) Mutation rate: DNA < RNA ✓<br>(iv) Direct protein coding: DNA yes, RNA no<br><br>How many rows correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iv) is REVERSED — RNA can directly code; DNA depends on RNA. Three correct." },

    { id: 166, topic: "Properties of Genetic Material", q: "Two chemical differences between DNA and RNA:", options: ["DNA ribose, RNA deoxyribose; DNA uracil, RNA thymine", "DNA deoxyribose, RNA ribose; DNA thymine, RNA uracil", "DNA single strand, RNA double strand", "DNA phosphate, RNA no phosphate"], correct: 1, explanation: "Sugar: DNA=deoxyribose, RNA=ribose. Base: DNA=thymine, RNA=uracil." },

    { id: 167, topic: "Properties of Genetic Material", q: "Select the <b>incorrect</b> statement:", options: ["Both DNA and RNA can mutate", "RNA mutates faster than DNA", "DNA is better for storage", "DNA can directly code for proteins without RNA"], correct: 3, explanation: "DNA CANNOT directly code for proteins — depends on RNA." },

    { id: 168, topic: "Properties of Genetic Material", q: "Match:<br>(i) Griffith → (ii) Avery et al. → (iii) Hershey-Chase<br>with (P) Unequivocal proof (Q) Discovered transforming principle (R) Biochemical nature", options: ["(i)–Q, (ii)–R, (iii)–P", "(i)–P, (ii)–Q, (iii)–R", "(i)–R, (ii)–P, (iii)–Q", "(i)–Q, (ii)–P, (iii)–R"], correct: 0, explanation: "Griffith=Q, Avery=R, Hershey-Chase=P." },

    { id: 169, topic: "Properties of Genetic Material", q: "RNA as genetic material example from NCERT:", options: ["HIV and Influenza", "TMV and QB bacteriophage", "Lambda and T2 phage", "φ×174 and Adenovirus"], correct: 1, explanation: "NCERT specifically mentions TMV and QB bacteriophage." },

    { id: 170, topic: "Properties of Genetic Material", q: "Genetic material should not change with:", options: ["Different life cycle stages only", "Age only", "Physiology changes only", "All of the above"], correct: 3, explanation: "NCERT: 'not change with different stages of life cycle, age or with change in physiology.'" },

    { id: 171, topic: "Properties of Genetic Material", q: "<b>Assertion (A):</b> RNA viruses have shorter life spans and evolve faster.<br><b>Reason (R):</b> RNA is less stable and mutates faster.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "RNA instability → faster mutations → faster evolution. R explains A." },

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

    { id: 181, topic: "RNA World", q: "<b>Assertion (A):</b> DNA evolved from RNA with modifications for stability.<br><b>Reason (R):</b> DNA is double-stranded and has complementary strand for repair.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Double-strandedness allows repair using intact strand as template. R explains A." },

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

    { id: 192, topic: "DNA Replication", q: "<b>Assertion (A):</b> ¹⁵N is not radioactive.<br><b>Reason (R):</b> ¹⁵N and ¹⁴N are separated only by density differences.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "¹⁵N is NOT radioactive; separated based on densities only. R explains the method." },

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

    { id: 204, topic: "DNA Replication", q: "<b>Assertion (A):</b> dNTPs provide energy for polymerisation.<br><b>Reason (R):</b> Two terminal phosphates are high-energy (like ATP).", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Cleavage of terminal phosphate bonds releases energy for polymerisation." },

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

    { id: 216, topic: "DNA Replication", q: "<b>Assertion (A):</b> Replication and cell division must be coordinated.<br><b>Reason (R):</b> Failed cell division after replication → polyploidy.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Polyploidy demonstrates why coordination is essential. R explains A." },

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

    { id: 232, topic: "DNA Replication", q: "<b>Assertion (A):</b> Replication doesn't initiate randomly in E. coli DNA.<br><b>Reason (R):</b> There is a definite origin of replication.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Replication originates at a definite region. R explains A." },

    { id: 233, topic: "DNA Replication", q: "E. coli nucleotides polymerised per minute approximately:", options: ["~128,000", "~256,000", "~512,000", "~1,000,000"], correct: 1, explanation: "4.6×10⁶ / 18 min ≈ 256,000 bp/min." },

    // ===== SET 13: TRANSCRIPTION (Q234-Q298) =====
    { id: 234, topic: "Transcription", q: "Transcription is the process of:", options: ["Copying DNA from DNA", "Copying genetic information from DNA strand into RNA", "Synthesizing protein from mRNA", "Replicating entire DNA"], correct: 1, explanation: "Transcription = copying genetic information from one DNA strand into RNA." },

    { id: 235, topic: "Transcription", q: "During transcription, adenine on template pairs with:", options: ["Thymine", "Adenine", "Uracil", "Guanine"], correct: 2, explanation: "In transcription, adenine pairs with uracil (not thymine, as in RNA)." },

    { id: 236, topic: "Transcription", q: "Key difference between replication and transcription:", options: ["Replication copies segment; transcription duplicates entire DNA", "In replication total DNA duplicated; in transcription only segment and one strand", "Both duplicate entire DNA", "Transcription doesn't follow complementarity"], correct: 1, explanation: "Replication = total DNA. Transcription = only a segment, only one strand." },

    { id: 237, topic: "Transcription", q: "Why both strands NOT copied:<br>(i) Would code different RNA sequences<br>(ii) Two complementary RNAs form dsRNA<br>(iii) dsRNA prevents translation<br>(iv) Both strands code same protein<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iv)", "(ii) and (iii) only"], correct: 0, explanation: "(iv) is WRONG — they would code DIFFERENT proteins. (i), (ii), (iii) correct." },

    { id: 238, topic: "Transcription", q: "<b>Assertion (A):</b> If both strands transcribed, two complementary RNAs form dsRNA.<br><b>Reason (R):</b> dsRNA cannot be translated, making transcription futile.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "dsRNA prevents translation. R explains why formation of dsRNA is problematic." },

    { id: 239, topic: "Transcription", q: "Statement 1: Complementary strands have identical sequences.<br>Statement 2: Both strands would code for different proteins.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 2, explanation: "S1 is WRONG — complementary ≠ identical. S2 is correct." },

    { id: 240, topic: "Transcription", q: "A transcription unit has three regions:", options: ["Origin, Structural gene, Terminus", "Promoter, Structural gene, Terminator", "Enhancer, Intron, Exon", "Operator, Structural gene, Regulator"], correct: 1, explanation: "Promoter, Structural gene, and Terminator." },

    { id: 241, topic: "Transcription", q: "Template strand has polarity:", options: ["5'→3'", "3'→5'", "No specific polarity", "Both directions"], correct: 1, explanation: "Template strand has 3'→5' polarity (RNA polymerase reads 3'→5', synthesizes 5'→3')." },

    { id: 242, topic: "Transcription", q: "Coding strand is so called because:", options: ["It codes for RNA during transcription", "Has same sequence as RNA (except T for U)", "Acts as template for RNA polymerase", "Contains promoter sequence"], correct: 1, explanation: "Coding strand has same sequence as RNA (except T for U) but does NOT actually code." },

    { id: 243, topic: "Transcription", q: "Which is <b>incorrect</b> about coding strand?", options: ["Has polarity 5'→3'", "Same sequence as RNA (except T for U)", "Serves as template for RNA polymerase", "Is displaced during transcription"], correct: 2, explanation: "Coding strand does NOT serve as template — the template strand (3'→5') does." },

    { id: 244, topic: "Transcription", q: "The promoter is located:", options: ["Towards 3'-end (downstream)", "Towards 5'-end (upstream) of structural gene", "Within structural gene", "After terminator"], correct: 1, explanation: "Promoter is towards 5'-end (upstream) with respect to coding strand." },

    { id: 245, topic: "Transcription", q: "Promoter provides binding site for:", options: ["Ribosomes", "RNA polymerase", "DNA polymerase", "tRNA"], correct: 1, explanation: "Promoter provides binding site for RNA polymerase." },

    { id: 246, topic: "Transcription", q: "<b>Assertion (A):</b> Promoter defines template and coding strands.<br><b>Reason (R):</b> Switching promoter with terminator reverses the definitions.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Promoter position defines which strand is template. Switching reverses it." },

    { id: 247, topic: "Transcription", q: "Terminator is located towards:", options: ["5'-end (upstream)", "3'-end (downstream) of coding strand", "Middle of structural gene", "Within promoter"], correct: 1, explanation: "Terminator is towards 3'-end (downstream) of coding strand." },

    { id: 248, topic: "Transcription", q: "Given template 3'-ATGCATGCATGC-5', the RNA would be:", options: ["5'-UACGUACGUACG-3'", "5'-ATGCATGCATGC-3'", "3'-UACGUACGUACG-5'", "5'-TACGTACGTACG-3'"], correct: 0, explanation: "RNA synthesized 5'→3' reading template 3'→5'. A→U, T→A, G→C, C→G." },

    { id: 249, topic: "Transcription", q: "A cistron is:", options: ["Segment coding for tRNA", "Segment coding for a polypeptide", "Segment coding for rRNA only", "Entire chromosome"], correct: 1, explanation: "Cistron = segment of DNA coding for a polypeptide." },

    { id: 250, topic: "Transcription", q: "Structural genes in eukaryotes are mostly:", options: ["Polycistronic", "Monocistronic", "Without promoters", "Lacking introns"], correct: 1, explanation: "Monocistronic in eukaryotes; polycistronic in prokaryotes." },

    { id: 251, topic: "Transcription", q: "Consider:<br>(i) Exons appear in mature RNA<br>(ii) Introns don't appear in mature RNA<br>(iii) Split genes mainly in prokaryotes<br>(iv) Eukaryotic genes have interrupted coding<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii)", "All four", "(i) and (ii) only"], correct: 0, explanation: "(iii) is WRONG — split genes are in eukaryotes, not prokaryotes." },

    { id: 252, topic: "Transcription", q: "Exons are:", options: ["Sequences removed during splicing", "Sequences appearing in mature/processed RNA", "Intervening sequences", "Regulatory sequences upstream of promoter"], correct: 1, explanation: "Exons appear in mature or processed RNA." },

    { id: 253, topic: "Transcription", q: "<b>Assertion (A):</b> Regulatory sequences are called regulatory genes.<br><b>Reason (R):</b> Regulatory sequences code for regulatory proteins.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 2, explanation: "A is true but R is FALSE — regulatory sequences do NOT code for any RNA or protein." },

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

    { id: 268, topic: "Transcription", q: "<b>Assertion (A):</b> Tailing is template-independent.<br><b>Reason (R):</b> Adenylate residues added without using DNA template.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Poly-A polymerase adds adenylates without reading a template. R explains A." },

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

    { id: 283, topic: "Genetic Code", q: "<b>Assertion (A):</b> Genetic code is read contiguously without punctuations.<br><b>Reason (R):</b> No spacers or commas between successive codons.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Codons are read one after another without gaps. R explains A." },

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

    { id: 295, topic: "tRNA", q: "<b>Assertion (A):</b> Amino acids can't directly read genetic code.<br><b>Reason (R):</b> Amino acids have no structural specialities to read code; tRNA acts as adapter.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Amino acids can't read codons — tRNA bridges the gap. R explains A." },

    { id: 296, topic: "tRNA", q: "tRNA was earlier known as:", options: ["mRNA", "sRNA (soluble RNA)", "rRNA", "hnRNA"], correct: 1, explanation: "tRNA was called sRNA (soluble RNA)." },

    { id: 297, topic: "tRNA", q: "About tRNA:<br>(i) Anticodon complementary to codon<br>(ii) Amino acid acceptor at 3' end<br>(iii) Each tRNA specific for one amino acid<br>(iv) Initiator tRNA carries valine<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iv) is WRONG — initiator tRNA carries methionine (AUG). Three correct." },

    { id: 298, topic: "tRNA", q: "Match:<br>(i) Gamow (ii) Khorana (iii) Nirenberg (iv) Ochoa<br>with (P) Chemical RNA synthesis (Q) Triplet code (R) Polynucleotide phosphorylase (S) Cell-free system", options: ["(i)–Q, (ii)–P, (iii)–S, (iv)–R", "(i)–P, (ii)–Q, (iii)–R, (iv)–S", "(i)–Q, (ii)–R, (iii)–P, (iv)–S", "(i)–S, (ii)–P, (iii)–Q, (iv)–R"], correct: 0, explanation: "Gamow=Q, Khorana=P, Nirenberg=S, Ochoa=R." },

    // ===== SET 17: TRANSLATION (Q299-Q323) =====
    { id: 299, topic: "Translation", q: "Translation refers to:", options: ["Copying DNA to RNA", "Polymerisation of amino acids to form polypeptide", "Replication of DNA", "Splicing of hnRNA"], correct: 1, explanation: "Translation = polymerisation of amino acids to form polypeptide." },

    { id: 300, topic: "Translation", q: "Amino acid sequence defined by:", options: ["Sequence of amino acids in tRNA", "Sequence of bases in rRNA", "Sequence of bases in mRNA", "Structure of ribosomes"], correct: 2, explanation: "Order of amino acids defined by sequence of bases in mRNA." },

    { id: 301, topic: "Translation", q: "Bond joining amino acids in polypeptide:", options: ["Hydrogen bond", "Phosphodiester bond", "Glycosidic bond", "Peptide bond"], correct: 3, explanation: "Amino acids joined by peptide bonds." },

    { id: 302, topic: "Translation", q: "Charging of tRNA involves:", options: ["tRNA linking to ribosome with GTP", "Amino acid activation and linkage to cognate tRNA with ATP", "Removal of amino acids from tRNA", "Peptide bond formation"], correct: 1, explanation: "Amino acids activated with ATP and linked to cognate tRNA = aminoacylation." },

    { id: 303, topic: "Translation", q: "<b>Assertion (A):</b> Peptide bond formation is energetically favourable with charged tRNAs.<br><b>Reason (R):</b> Amino acids are already activated at cost of ATP during charging.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Prior activation explains why bond formation is energetically favourable." },

    { id: 304, topic: "Translation", q: "Ribosome consists of:", options: ["Only proteins (~80 types)", "Only structural RNAs", "Structural RNAs and about 80 different proteins", "DNA and proteins"], correct: 2, explanation: "Ribosome = structural RNAs + about 80 different proteins." },

    { id: 305, topic: "Translation", q: "In inactive state, ribosome exists as:", options: ["Single unit", "Two subunits (large + small)", "Three subunits", "Four subunits"], correct: 1, explanation: "Two subunits — large and small. They associate on mRNA during translation." },

    { id: 306, topic: "Translation", q: "Translation begins when:", options: ["Large subunit encounters mRNA", "Small subunit encounters mRNA", "Both subunits simultaneously bind", "tRNA binds ribosome first"], correct: 1, explanation: "NCERT: 'When the small subunit encounters an mRNA, translation begins.'" },

    { id: 307, topic: "Translation", q: "Two sites for amino acid binding are in:", options: ["Small subunit", "Large subunit", "mRNA", "tRNA"], correct: 1, explanation: "Two sites in large subunit for amino acids to bind (A-site and P-site)." },

    { id: 308, topic: "Translation", q: "Peptide bond formation catalysed by:", options: ["DNA polymerase", "RNA polymerase", "23S rRNA (ribozyme) in bacteria", "Protein enzymes only"], correct: 2, explanation: "23S rRNA = ribozyme = catalyses peptide bond formation." },

    { id: 309, topic: "Translation", q: "<b>Assertion (A):</b> Ribosome is cellular factory for protein synthesis.<br><b>Reason (R):</b> Provides structure, catalytic activity (ribozyme), and binding sites.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Ribosome has structural RNAs, proteins, binding sites, and catalytic rRNA. R explains A." },

    { id: 310, topic: "Translation", q: "About ribosomes:<br>(i) Structural RNAs + ~80 proteins<br>(ii) Small subunit has 2 amino acid binding sites<br>(iii) 23S rRNA = ribozyme<br>(iv) Exists as single unit when inactive<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 1, explanation: "(ii) WRONG — 2 sites in LARGE subunit. (iv) WRONG — 2 subunits. Only (i) and (iii) correct = 2." },

    { id: 311, topic: "Translation", q: "Translational unit in mRNA is:", options: ["Entire mRNA including UTRs", "Sequence flanked by start (AUG) and stop codon", "Only 5'-UTR", "Only poly-A tail"], correct: 1, explanation: "Translational unit = start codon to stop codon." },

    { id: 312, topic: "Translation", q: "UTRs are present:", options: ["Only at 5'-end", "Only at 3'-end", "At both 5'-end (before start) and 3'-end (after stop)", "Within coding sequence"], correct: 2, explanation: "UTRs at both ends — 5'-UTR (before AUG) and 3'-UTR (after stop codon)." },

    { id: 313, topic: "Translation", q: "Role of UTRs:", options: ["Code for additional amino acids", "Act as introns", "Required for efficient translation", "Serve as origin of replication"], correct: 2, explanation: "UTRs are required for efficient translation but are not translated." },

    { id: 314, topic: "Translation", q: "Initiation: ribosome binds at:", options: ["Any random AUG", "Start codon (AUG) recognised by initiator tRNA", "Stop codon", "3'-UTR"], correct: 1, explanation: "Ribosome binds at start codon (AUG) recognised only by initiator tRNA." },

    { id: 315, topic: "Translation", q: "During elongation:", options: ["Amino acids removed one by one", "Amino acid-tRNA complexes bind to codons via anticodon base pairing", "Ribosome remains stationary", "Release factors bind"], correct: 1, explanation: "Amino acid-tRNA complexes bind to appropriate codons through complementary anticodons." },

    { id: 316, topic: "Translation", q: "Translation terminated when:", options: ["Ribosome reaches 5'-end", "ATP depleted", "Release factor binds to stop codon", "Initiator tRNA detaches"], correct: 2, explanation: "Release factor binds to stop codon, terminating translation." },

    { id: 317, topic: "Translation", q: "Correct sequence during translation:<br>(i) Release factor at stop codon<br>(ii) Ribosome binds mRNA at AUG<br>(iii) Amino acids added as ribosome moves<br>(iv) Initiator tRNA recognises AUG", options: ["(ii)→(iv)→(iii)→(i)", "(iv)→(ii)→(i)→(iii)", "(iii)→(ii)→(iv)→(i)", "(i)→(ii)→(iii)→(iv)"], correct: 0, explanation: "Ribosome binds AUG → initiator tRNA → elongation → release factor at stop." },

    { id: 318, topic: "Translation", q: "<b>Assertion (A):</b> Stop codons don't code for amino acids.<br><b>Reason (R):</b> Release factors (not tRNAs) recognize stop codons.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "No tRNAs for stop codons. Release factors recognize them. R explains A." },

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

    { id: 328, topic: "Gene Regulation", q: "<b>Assertion (A):</b> E. coli won't make β-galactosidase without lactose.<br><b>Reason (R):</b> Enzyme synthesis regulated by metabolic/environmental conditions.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "No lactose = no need for enzyme. Regulation based on conditions. R explains A." },

    { id: 329, topic: "Gene Regulation", q: "Regulatory proteins in prokaryotes act as:", options: ["Only activators (positive)", "Only repressors (negative)", "Both activators and repressors", "Neither"], correct: 2, explanation: "Regulatory proteins can be positive (activators) or negative (repressors)." },

    { id: 330, topic: "Gene Regulation", q: "Operator region in prokaryotic operon is:", options: ["Far from promoter", "Adjacent to promoter in most operons", "Part of structural gene", "At 3'-end of mRNA"], correct: 1, explanation: "Operator is adjacent to promoter elements in most operons." },

    { id: 331, topic: "Gene Regulation", q: "Operator-repressor interaction:", options: ["All operons share common operator and repressor", "Each operon has specific operator and specific repressor", "Operators bind only activators", "Repressors bind to terminator"], correct: 1, explanation: "Each operon has its SPECIFIC operator and SPECIFIC repressor." },

    { id: 332, topic: "Gene Regulation", q: "About lac operon:<br>(i) Lac operator only in lac operon<br>(ii) Lac repressor only interacts with lac operator<br>(iii) Lac operator binds repressors from other operons<br>(iv) Beta-galactosidase hydrolyses lactose<br><br>Which correct?", options: ["(i), (ii) and (iv) only", "(i), (ii) and (iii)", "All four", "(i) and (iv) only"], correct: 0, explanation: "(iii) is WRONG — lac operator only interacts with lac repressor specifically." },

    { id: 333, topic: "Gene Regulation", q: "RNA polymerase activity at promoter regulated by:", options: ["DNA polymerase", "Accessory proteins (activators and repressors)", "tRNA molecules", "Ribosomes"], correct: 1, explanation: "Interaction with accessory proteins affects ability to recognise start sites." },

    { id: 334, topic: "Gene Regulation", q: "Select <b>incorrect</b> statement:", options: ["Eukaryotes: 4 levels of regulation", "Prokaryotes: transcriptional initiation is main point", "Repressor proteins always activate expression", "Environmental conditions regulate expression"], correct: 2, explanation: "Repressors INHIBIT expression (negative regulation), they don't activate." },

    { id: 335, topic: "Gene Regulation", q: "Correct sequence of regulatory elements in prokaryotic operon:", options: ["Terminator → Gene → Operator → Promoter", "Promoter → Operator → Structural gene → Terminator", "Operator → Promoter → Terminator → Gene", "Gene → Promoter → Operator → Terminator"], correct: 1, explanation: "Promoter → Operator → Structural gene(s) → Terminator." },

    { id: 336, topic: "Gene Regulation", q: "<b>Assertion (A):</b> Operator binds repressor in most operons.<br><b>Reason (R):</b> Repressor binding blocks RNA polymerase from transcribing.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Repressor on operator physically blocks RNA polymerase. R explains A." },

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

    { id: 354, topic: "Lac Operon", q: "<b>Assertion (A):</b> Repressor is synthesised constitutively.<br><b>Reason (R):</b> i gene is always expressed regardless of lactose.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "i gene is always active → repressor always made. R explains A." },

    { id: 355, topic: "Lac Operon", q: "Without lactose, lac operon is:", options: ["ON — all genes transcribed", "OFF — repressor binds operator, blocks RNA polymerase", "Partially active — only z transcribed", "Completely degraded"], correct: 1, explanation: "Repressor binds operator → prevents RNA polymerase → operon OFF." },

    { id: 356, topic: "Lac Operon", q: "With lactose/allolactose, operon ON because:", options: ["Lactose directly activates RNA polymerase", "Inducer inactivates repressor → RNA polymerase accesses promoter", "Lactose degrades operator", "i gene stops producing repressor"], correct: 1, explanation: "Inducer inactivates repressor → RNA polymerase accesses promoter → transcription." },

    { id: 357, topic: "Lac Operon", q: "Which can act as inducer for lac operon?", options: ["Glucose", "Galactose", "Lactose or allolactose", "Sucrose"], correct: 2, explanation: "NCERT: only lactose or allolactose. Glucose/galactose CANNOT." },

    { id: 358, topic: "Lac Operon", q: "Which CANNOT act as inducer?", options: ["Lactose", "Allolactose", "Glucose", "Both A and B can"], correct: 2, explanation: "Glucose and galactose cannot act as inducers for lac operon." },

    { id: 359, topic: "Lac Operon", q: "<b>Assertion (A):</b> Low basal expression of lac operon always present.<br><b>Reason (R):</b> Without some permease, lactose can't enter cell to act as inducer.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Some permease needed for lactose entry. R explains why basal expression is essential." },

    { id: 360, topic: "Lac Operon", q: "Lac operon regulation can be viewed as:", options: ["Regulation by product", "Regulation of enzyme synthesis by its substrate", "Regulation by temperature", "Regulation by DNA methylation"], correct: 1, explanation: "Lactose (substrate) regulates β-galactosidase (enzyme) synthesis." },

    { id: 361, topic: "Lac Operon", q: "Regulation by repressor is:", options: ["Positive regulation", "Negative regulation", "Post-translational regulation", "Processing-level regulation"], correct: 1, explanation: "Repressor inhibits transcription = negative regulation." },

    { id: 362, topic: "Lac Operon", q: "About operons in bacteria:<br>(i) Genes function in same/related pathway<br>(ii) Common in bacteria<br>(iii) Examples: lac, trp, ara, his, val<br>(iv) Common in eukaryotes too<br><br>Which correct?", options: ["(i), (ii) and (iii) only", "All four", "(i) and (iii)", "(ii) and (iv)"], correct: 0, explanation: "(iv) is WRONG — operons are characteristic of prokaryotes." },

    { id: 363, topic: "Lac Operon", q: "Lac operon consists of:", options: ["1 regulatory + 1 structural gene", "1 regulatory + 3 structural genes", "3 regulatory + 1 structural gene", "2 regulatory + 2 structural genes"], correct: 1, explanation: "One regulatory gene (i) and three structural genes (z, y, a)." },

    { id: 364, topic: "Lac Operon", q: "Correct sequence of lac operon components:", options: ["i gene → Promoter → Operator → z → y → a", "Promoter → i gene → z → y → a → Operator", "z → y → a → Promoter → Operator → i gene", "Operator → Promoter → i gene → a → y → z"], correct: 0, explanation: "i gene → Promoter → Operator → z → y → a." },

    { id: 365, topic: "Lac Operon", q: "Statement 1: i gene named after 'inducer'.<br>Statement 2: i gene codes for repressor protein.", options: ["Both correct", "Only S1 correct", "Only S2 correct", "Both incorrect"], correct: 2, explanation: "S1 is WRONG — i = inhibitor, NOT inducer. S2 is correct." },

    { id: 366, topic: "Lac Operon", q: "When inducer binds repressor, the repressor:", options: ["Becomes more active", "Is inactivated, can't bind operator", "Degrades structural genes", "Activates DNA polymerase"], correct: 1, explanation: "Repressor is inactivated by inducer → can't bind operator → transcription proceeds." },

    { id: 367, topic: "Lac Operon", q: "If i gene mutated (non-functional repressor), operon would be:", options: ["Permanently OFF", "Constitutively expressed (always ON)", "Expressed only with lactose", "Unable to produce mRNA"], correct: 1, explanation: "No functional repressor → operator always free → operon always ON." },

    { id: 368, topic: "Lac Operon", q: "<b>Assertion (A):</b> Glucose cannot induce lac operon.<br><b>Reason (R):</b> Only lactose/allolactose interact with and inactivate repressor.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Only lactose/allolactose can inactivate repressor. R explains A." },

    { id: 369, topic: "Lac Operon", q: "Consider:<br>(i) Repressor binds operator → OFF<br>(ii) Inducer inactivates repressor → ON<br>(iii) RNA polymerase binds OPERATOR to initiate<br>(iv) Permease transports lactose<br><br>How many correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "(iii) is WRONG — RNA polymerase binds PROMOTER (not operator). Three correct." },

    { id: 370, topic: "Lac Operon", q: "Lac operon expressed as long as:", options: ["Glucose present", "Lactose present (as inducer)", "Repressor is active", "i gene is mutated"], correct: 1, explanation: "Expressed as long as inducer (lactose) keeps repressor inactive." },

    { id: 371, topic: "Lac Operon", q: "Which is <b>incorrect</b> about lac operon?", options: ["i gene → repressor", "z gene → β-galactosidase", "y gene → transacetylase", "a gene → transacetylase"], correct: 2, explanation: "y gene → PERMEASE (not transacetylase). a gene → transacetylase." },

    { id: 372, topic: "Lac Operon", q: "If operator mutated (repressor can't bind), operon would be:", options: ["Never expressed", "Only with lactose", "Constitutively expressed (always ON)", "Produces only repressor"], correct: 2, explanation: "No repressor binding → RNA polymerase always has access → always ON." },

    { id: 373, topic: "Lac Operon", q: "Jacob was a _____ and Monod was a _____:", options: ["Both geneticists", "Both biochemists", "Geneticist; biochemist", "Both physicists"], correct: 2, explanation: "Jacob = geneticist; Monod = biochemist." },

    { id: 374, topic: "Lac Operon", q: "Lactose present → Inducer binds repressor → Repressor _____ → RNA polymerase _____ → Genes _____", options: ["Activated → Blocked → Not transcribed", "Inactivated → Accesses promoter → Transcribed", "Degraded → Inhibited → Transcribed", "Inactivated → Blocked → Not transcribed"], correct: 1, explanation: "Inactivated → accesses promoter → transcribed." },

    { id: 375, topic: "Lac Operon", q: "Statement 1: Lac structural genes are polycistronic.<br>Statement 2: Single mRNA from all three genes together.", options: ["Both correct, S2 explains S1", "Both correct, S2 doesn't explain S1", "Only S1 correct", "Only S2 correct"], correct: 0, explanation: "Polycistronic = multiple genes on one mRNA. S2 explains what polycistronic means." },

    { id: 376, topic: "Lac Operon", q: "<b>Assertion (A):</b> Lac operon under negative regulation.<br><b>Reason (R):</b> Repressor binds operator, inhibits transcription.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Repressor inhibiting transcription = negative regulation. R explains A." },

    { id: 377, topic: "Lac Operon", q: "If promoter deleted, result:", options: ["Constitutive expression", "No transcription of structural genes", "Overproduction of repressor", "Lactose can't enter"], correct: 1, explanation: "No promoter → RNA polymerase can't bind → no transcription." },

    { id: 378, topic: "Lac Operon", q: "Products in correct order (z, y, a):", options: ["Transacetylase, Permease, β-galactosidase", "β-galactosidase, Permease, Transacetylase", "Permease, β-galactosidase, Transacetylase", "β-galactosidase, Transacetylase, Permease"], correct: 1, explanation: "z=β-gal, y=permease, a=transacetylase." },

    { id: 379, topic: "Lac Operon", q: "Super-repressor (can't be inactivated by inducer) would make operon:", options: ["Constitutively expressed", "Permanently OFF even with lactose", "Expressed normally", "Expressed only without lactose"], correct: 1, explanation: "Super-repressor always bound to operator → permanently OFF. HOTs question." },

    { id: 380, topic: "Lac Operon", q: "<b>Incorrect</b> match:", options: ["i gene – Repressor", "z gene – β-galactosidase", "y gene – Transacetylase", "a gene – Transacetylase"], correct: 2, explanation: "y gene = PERMEASE, not transacetylase." },

    { id: 381, topic: "Lac Operon", q: "Which operon example NOT mentioned in NCERT?", options: ["lac operon", "trp operon", "ara operon", "gal operon"], correct: 3, explanation: "NCERT mentions lac, trp, ara, his, val operons. Not gal operon." },

    { id: 382, topic: "Lac Operon", q: "Preferred carbon source for E. coli:", options: ["Lactose", "Galactose", "Glucose", "Sucrose"], correct: 2, explanation: "NCERT mentions 'preferred carbon source such as glucose.'" },

    { id: 383, topic: "Lac Operon", q: "Correct sequence when lactose available:<br>(i) Repressor binds operator<br>(ii) Lactose enters via permease<br>(iii) Inducer inactivates repressor<br>(iv) RNA polymerase transcribes<br>(v) Repressor constitutively produced", options: ["(v)→(i)→(ii)→(iii)→(iv)", "(ii)→(v)→(iii)→(i)→(iv)", "(v)→(ii)→(iii)→(iv)", "(ii)→(iii)→(v)→(iv)→(i)"], correct: 2, explanation: "Repressor made(v) → lactose enters(ii) → inactivates repressor(iii) → transcription(iv)." },

    { id: 384, topic: "Lac Operon", q: "<b>Assertion (A):</b> Lac operon also under positive regulation.<br><b>Reason (R):</b> Positive regulation involves CAP and cAMP.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "NCERT mentions positive regulation exists. CAP-cAMP is the mechanism." },

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

    { id: 396, topic: "Human Genome Project", q: "<b>Assertion (A):</b> HGP needed high-speed computational devices.<br><b>Reason (R):</b> Enormous data required sophisticated storage/analysis tools.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "3 billion bp of data needed computers. R explains A." },

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

    { id: 407, topic: "Human Genome Project", q: "<b>Assertion (A):</b> Sanger developed both DNA and protein sequencing methods.<br><b>Reason (R):</b> Sanger won two Nobel Prizes in Chemistry.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 1, explanation: "Both true, but R doesn't explain WHY he developed both methods." },

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

    { id: 424, topic: "Human Genome Project", q: "<b>Assertion (A):</b> Total genes (~30,000) much lower than expected.<br><b>Reason (R):</b> &lt;2% of genome codes for proteins; majority is non-coding.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], correct: 0, explanation: "Low protein-coding percentage explains low gene count. R explains A." },

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

    { id: 434, topic: "DNA Fingerprinting", q: "<b>Assertion (A):</b> The probability of polymorphism is higher in non-coding DNA sequences.<br><b>Reason (R):</b> Mutations in non-coding DNA may not have any immediate effect on an individual's reproductive ability.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT: 'The probability of such variation to be observed in non-coding DNA sequence would be higher as mutations in these sequences may not have any immediate effect/impact in an individual\'s reproductive ability.' These mutations accumulate over generations. R correctly explains A." },

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

    { id: 446, topic: "DNA Fingerprinting", q: "<b>Assertion (A):</b> DNA fingerprinting can be performed even from a single cell.<br><b>Reason (R):</b> The sensitivity of the technique has been increased by the use of polymerase chain reaction (PCR).", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT: 'The sensitivity of the technique has been increased by use of polymerase chain reaction (PCR). Consequently, DNA from a single cell is enough to perform DNA fingerprinting analysis.' PCR amplifies the tiny amount of DNA, making analysis possible. R correctly explains A." },

    { id: 447, topic: "DNA Fingerprinting", q: "Which of the following tissues can be used for DNA fingerprinting?", options: ["Only blood", "Only hair follicle", "Blood, hair-follicle, skin, bone, saliva, sperm, etc.", "Only sperm cells"], correct: 2, explanation: "NCERT lists: 'blood, hair-follicle, skin, bone, saliva, sperm etc.' Any tissue can be used because DNA polymorphism is the same across all tissues of an individual." },

    { id: 448, topic: "DNA Fingerprinting", q: "Select the incorrect statement about DNA fingerprinting:", options: ["It works on the principle of polymorphism in DNA sequences", "VNTR is a type of minisatellite", "The band pattern is identical in all members of a family", "It has applications in forensic science and paternity testing"], correct: 2, explanation: "The band pattern is NOT identical in all family members — each individual has a unique pattern (except identical twins). While children inherit bands from both parents, the overall pattern is unique to each individual." },

    { id: 449, topic: "DNA Fingerprinting", q: "Which of the following is the correct full form of VNTR?", options: ["Variable Nucleotide Tandem Regions", "Variable Number of Tandem Repeats", "Very Numerous Tandem Replications", "Variable Non-coding Tandem Regions"], correct: 1, explanation: "NCERT: 'It was called as Variable Number of Tandem Repeats (VNTR).'" },

    { id: 450, topic: "DNA Fingerprinting", q: "In VNTR, the term 'tandem' means:", options: ["The repeats are scattered throughout the genome", "A small DNA sequence is arranged one after another in series", "The repeats are found on only one chromosome", "The repeats are in reverse orientation"], correct: 1, explanation: "NCERT: 'A small DNA sequence is arranged tandemly in many copy numbers.' Tandem means arranged in series, one after another, in the same orientation." },

    { id: 451, topic: "DNA Fingerprinting", q: "DNA polymorphism plays a very important role in:", options: ["DNA replication only", "Transcription only", "Evolution and speciation", "Translation only"], correct: 2, explanation: "NCERT: 'For evolution and speciation, such polymorphisms play very important role.'" },

    { id: 452, topic: "DNA Fingerprinting", q: "Consider the following applications of DNA fingerprinting:<br>(i) Forensic science<br>(ii) Paternity testing<br>(iii) Determining population and genetic diversities<br>(iv) Determining the exact amino acid sequence of a protein<br><br>Which are correct?", options: ["(i), (ii) and (iii) only", "(i), (ii), (iii) and (iv)", "(i) and (ii) only", "(iv) only"], correct: 0, explanation: "Statement (iv) is INCORRECT — DNA fingerprinting determines DNA-level variations, NOT amino acid sequences of proteins. Statements (i), (ii), and (iii) are correct per NCERT." },

    { id: 453, topic: "DNA Fingerprinting", q: "Statement 1: Mutations in non-coding DNA accumulate over generations.<br>Statement 2: These accumulated mutations form one of the bases of variability/polymorphism.", options: ["Both are correct and Statement 2 explains Statement 1", "Both are correct but Statement 2 does not explain Statement 1", "Only Statement 1 is correct", "Only Statement 2 is correct"], correct: 1, explanation: "Both statements are correct per NCERT: 'These mutations keep on accumulating generation after generation, and form one of the basis of variability/polymorphism.' However, Statement 2 does not explain Statement 1 — rather it describes the consequence of accumulated mutations." },

    { id: 454, topic: "DNA Fingerprinting", q: "The bulk DNA during density gradient centrifugation forms:", options: ["Multiple small peaks", "A single major peak", "No peak at all", "Only satellite peaks"], correct: 1, explanation: "NCERT: 'The bulk DNA forms a major peak and the other small peaks are referred to as satellite DNA.'" },

    { id: 455, topic: "DNA Fingerprinting", q: "Match Column I with Column II:<br><br>Column I &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Column II<br>(i) VNTR &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (P) Developed DNA fingerprinting<br>(ii) Alec Jeffreys &nbsp;&nbsp; (Q) Minisatellite<br>(iii) Southern blot &nbsp; (R) 0.1 to 20 kb<br>(iv) VNTR size range (S) Hybridisation technique used in fingerprinting", options: ["(i)–Q, (ii)–P, (iii)–S, (iv)–R", "(i)–P, (ii)–Q, (iii)–R, (iv)–S", "(i)–R, (ii)–S, (iii)–P, (iv)–Q", "(i)–S, (ii)–R, (iii)–Q, (iv)–P"], correct: 0, explanation: "VNTR = minisatellite (Q); Alec Jeffreys = developed DNA fingerprinting (P); Southern blot = hybridisation technique (S); VNTR size = 0.1–20 kb (R)." },

    { id: 456, topic: "DNA Fingerprinting", q: "<b>Assertion (A):</b> Satellite DNA sequences show a high degree of polymorphism and form the basis of DNA fingerprinting.<br><b>Reason (R):</b> Satellite DNA does not code for proteins, and mutations in these regions have no effect on reproductive ability.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "Satellite DNA is non-coding, so mutations accumulate freely without affecting fitness. This leads to high polymorphism, which is the basis of DNA fingerprinting. R correctly explains why satellite DNA shows high polymorphism (A)." },

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

    { id: 468, topic: "Chapter Summary", q: "<b>Assertion (A):</b> In bacteria, mRNA can be directly translated without processing.<br><b>Reason (R):</b> Bacterial genes do not contain introns, so the transcribed mRNA is functional.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT Summary: 'In bacteria, the transcribed mRNA is functional, hence can directly be translated.' This is because bacterial genes lack introns (no splicing needed). R correctly explains A." },

    { id: 469, topic: "Chapter Summary", q: "Which of the following statements correctly relates life and RNA?", options: ["Life began around DNA", "Translation is a process that evolved around RNA, indicating life began around RNA", "Life began around proteins", "RNA has no catalytic role in translation"], correct: 1, explanation: "NCERT Summary: 'Translation is a process that has evolved around RNA, indicating that life began around RNA.' rRNA catalyses peptide bond (ribozyme), tRNA reads code, mRNA provides template — all RNA-based." },

    { id: 470, topic: "Chapter Summary", q: "Regulation of gene expression in bacteria is primarily at the level of:", options: ["Translation", "Splicing", "Transcription", "Transport of mRNA"], correct: 2, explanation: "NCERT Summary: 'Regulation of transcription is the primary step for regulation of gene expression.' In bacteria, operons regulate gene expression at the transcriptional level." },

    { id: 471, topic: "Chapter Summary", q: "Consider the following comprehensive statements:<br>(i) DNA stores genetic information; RNA mostly helps in transfer and expression.<br>(ii) A-T pair has 2 H-bonds; G-C pair has 3 H-bonds.<br>(iii) In eukaryotes, genes are split into exons and introns.<br>(iv) There are specific tRNAs for every stop codon.<br><br>How many are correct?", options: ["One", "Two", "Three", "Four"], correct: 2, explanation: "Statement (iv) is INCORRECT — there are no tRNAs for stop codons. Stop codons are recognized by release factors. Statements (i), (ii), and (iii) are all correct per NCERT." },

    { id: 472, topic: "Chapter Summary", q: "The lac operon regulation can also be viewed as:", options: ["Regulation of DNA replication by enzymes", "Regulation of enzyme synthesis by its substrate", "Regulation of translation by ribosomes", "Regulation of splicing by snRNAs"], correct: 1, explanation: "NCERT Summary: 'this regulation can also be viewed as regulation of enzyme synthesis by its substrate.' Lactose (substrate) induces the lac operon to produce beta-galactosidase (enzyme)." },

    { id: 473, topic: "Chapter Summary", q: "Select the correct combination of features unique to eukaryotic gene expression:", options: ["Split genes, hnRNA processing, polycistronic mRNA", "Split genes, splicing, capping, tailing", "No introns, coupled transcription-translation", "Single RNA polymerase, polycistronic mRNA"], correct: 1, explanation: "Eukaryotic features: split genes (exons + introns), splicing (intron removal), capping (5' methyl guanosine triphosphate), tailing (3' poly-A). Polycistronic mRNA and single RNA polymerase are prokaryotic features. Coupled transcription-translation is also prokaryotic." },

    { id: 474, topic: "Chapter Summary", q: "<b>Assertion (A):</b> Transcription and translation are energetically very expensive processes.<br><b>Reason (R):</b> Because of the high energy cost, these processes have to be tightly regulated.", options: ["Both A and R are true and R is the correct explanation of A", "Both A and R are true but R is not the correct explanation of A", "A is true but R is false", "A is false but R is true"], correct: 0, explanation: "NCERT Summary: 'transcription and translation are energetically very expensive processes, these have to be tightly regulated.' The energy cost is the reason for tight regulation. R correctly explains A." },

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

    { id: 500, topic: "Comprehensive", q: "Which of the following is the correct increasing order of complexity of genetic information encoding?<br>(i) Codon → Gene → Operon → Genome<br>(ii) Nucleotide → Codon → Gene → Genome<br>(iii) Gene → Codon → Genome → Operon<br>(iv) Codon → Operon → Gene → Genome", options: ["Only (i) is correct", "Only (ii) is correct", "Both (i) and (ii) are correct", "Only (iv) is correct"], correct: 2, explanation: "Both (i) and (ii) represent valid hierarchies of increasing complexity. (ii) is the most fundamental: Nucleotide (single base) → Codon (3 nucleotides) → Gene (many codons) → Genome (all genes). (i) is also valid as Codon → Gene → Operon (group of genes) → Genome. (iii) and (iv) have incorrect relative positions." }
]
