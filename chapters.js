// ─────────────────────────────────────────────────────────────
//  NEET Biology – Chapter Registry
//  To add a new chapter: set status:"available" and provide file
// ─────────────────────────────────────────────────────────────

const CHAPTERS = [

    // ══════════════ CLASS XI ══════════════
    {
        id: "living_world", chNumber: 1,
        class: "11th",
        unit: "Unit I",
        emoji: "🌍",
        name: "The Living World",
        file: "questions_the_living_world.js",
        questionCount: 223,
        topics: ["Introduction - The Living World","Diversity in the Living World","Taxonomic Categories","Species","Genus","Family","Order","Class","Phylum","Kingdom","Family, Order, Class - Integrated","Phylum & Kingdom - Integrated","Family, Order, Class, Phylum, Kingdom - Integrated","Summary & Table 1.1"],
        status: "available"
    },
    {
        id: "bio_classification", chNumber: 2,
        class: "11th",
        unit: "Unit I",
        emoji: "🔬",
        name: "Biological Classification",
        file: "questions_biological_classification.js",
        questionCount: 338,
        topics: ["Biological Classification - Introduction", "Kingdom Monera", "Kingdom Monera - Cyanobacteria", "Kingdom Monera - Bacterial Shapes", "Kingdom Monera - Soil Bacteria", "Kingdom Protista", "Kingdom Fungi", "Kingdom Plantae", "Kingdom Animalia", "Viruses", "Viruses - Genetic Material Detail", "Viruses - Translation", "Viruses - Host Cell Interaction", "Viruses - Plant Virus Qualifier", "Viroids", "Prions", "Lichens", "Kingdom Monera – Mycoplasma", "Viruses – TMV History", "Viruses – Scientists Match", "Viruses – Virus Facts", "Viruses – Genetic Material", "Viruses – Diseases", "Viroids – Discovery", "Viroids – Structure", "Viroids – AR", "Cross-Concept", "Summary"],
        status: "available"
    },
    {
        id: "plant_kingdom", chNumber: 3,
        class: "11th",
        unit: "Unit I",
        emoji: "🌱",
        name: "Plant Kingdom",
        file: "questions_plant_kingdom.js",
        questionCount: 316,
        topics: ["Introduction – Plant Kingdom","Algae","Bryophytes","Pteridophytes","Gymnosperms","Gymnosperm Reproduction","Angiosperms","Plant Kingdom Summary – Comparative"],
        status: "available"
    },
    {
        id: "morphology_flowering", chNumber: 5,
        class: "11th",
        unit: "Unit III",
        emoji: "🌸",
        name: "Morphology of Flowering Plants",
        file: "questions_morphology_flowering.js",
        questionCount: 502,
        topics: ["Introduction", "The Root", "The Stem", "The Leaf", "The Inflorescence", "The Flower", "Parts of a Flower", "Androecium", "Gynoecium", "The Fruit", "The Seed", "Semi-technical Description of a Flowering Plant", "Solanaceae", "Summary"],
        status: "available"
    },
    {
        id: "anatomy_flowering", chNumber: 6,
        class: "11th",
        unit: "Unit III",
        emoji: "🔭",
        name: "Anatomy of Flowering Plants",
        file: "questions_anatomy_flowering.js",
        questionCount: 244,
        topics: [
            "Introduction to Plant Anatomy", 
            "The Tissue System", 
            "Epidermal Tissue System",
            "The Ground Tissue System",
            "The Vascular Tissue System",
            "Dicotyledonous Root",
            "Monocotyledonous Root",
            "Dicotyledonous Stem",
            "Monocotyledonous Stem",
            "Dorsiventral (Dicotyledonous) Leaf",
            "Isobilateral (Monocotyledonous) Leaf",
            "Summary",
            "Secondary Growth"
        ],
        status: "available"
    },
    {
        id: "cell_unit_life", chNumber: 8,
        class: "11th",
        unit: "Unit IV",
        emoji: "🧫",
        name: "Cell: The Unit of Life",
        file: "questions_cell_unit_life.js",
        questionCount: 350,
        topics: ["Introduction to Cell Biology", "Cell Theory", "Prokaryotic Cells", "Ribosomes and Inclusion Bodies / Eukaryotic Cells", "Cell Membrane", "Cell Wall, Endomembrane System, Golgi, Lysosomes, Vacuoles", "Plastids, Ribosomes, Cytoskeleton", "Cilia and Flagella", "Centrosome, Centrioles, Nucleus, Microbodies", "Organelles", "Plasma Membrane", "Nucleus", "Mitochondria", "Chloroplast", "Summary – Cell: The Unit of Life"],
        status: "available"
    },
    {
        id: "cell_cycle", chNumber: 10,
        class: "11th",
        unit: "Unit IV",
        emoji: "🔄",
        name: "Cell Cycle and Cell Division",
        file: "questions_cell_cycle.js",
        questionCount: 282,
        topics: ["Mitosis", "Meiosis", "Interphase", "Checkpoints", "Cell Cycle", "Phases of Cell Cycle", "Karyokinesis - Prophase", "Karyokinesis - Metaphase", "Karyokinesis - Anaphase", "Karyokinesis - Telophase", "Karyokinesis - General", "Cytokinesis", "Significance of Mitosis", "Meiosis - Introduction", "Meiosis - Prophase I", "Meiosis - Metaphase I", "Meiosis - Anaphase I", "Meiosis - Telophase I", "Meiosis - Interkinesis", "Meiosis - General", "Meiosis II - Prophase II", "Meiosis II - Metaphase II", "Meiosis II - Anaphase II", "Meiosis II - Telophase II", "Meiosis II - General", "Significance of Meiosis", "Summary - Cell Cycle", "Summary - Interphase", "Summary - Mitosis", "Summary - Meiosis", "Summary - Integrative"],
        status: "available"
    },
    {
        id: "photosynthesis", chNumber: 13,
        class: "11th",
        unit: "V",
        emoji: "☀️",
        name: "Photosynthesis in Higher Plants",
        file: "questions_photosynthesis.js",
        questionCount: 625,
        topics: ["Introduction - Photosynthesis Overview", "What Do We Know - Basic Requirements of Photosynthesis", "Early Experiments", "Where Does Photosynthesis Take Place?", "Photosynthetic Pigments", "What is Light Reaction?", "The Electron Transport", "Splitting of Water", "Cyclic and Non-cyclic Photo-phosphorylation", "Chemiosmotic Hypothesis", "Where Are ATP and NADPH Used?", "The Primary Acceptor of CO₂", "The Calvin Cycle", "C₄ Pathway", "Photorespiration", "Factors Affecting Photosynthesis", "Summary"],
        status: "available"
    },
    {
        id: "respiration_plants", chNumber: 14,
        class: "11th",
        unit: "V",
        emoji: "💨",
        name: "Respiration in Plants",
        file: "questions_respiration_plants.js",
        questionCount: 343,
        topics: ["Introduction – Respiration in Plants", "Do Plants Breathe?", "Glycolysis", "Fermentation", "Aerobic Respiration – Pyruvate Oxidation", "Tricarboxylic Acid Cycle", "ETS and Oxidative Phosphorylation", "Respiratory Balance Sheet", "Amphibolic Pathway", "Respiratory Quotient", "Summary – Respiration in Plants (Integrative)"],
        status: "available"
    },
    {
        id: "plant_growth", chNumber: 15,
        class: "11th",
        unit: "V",
        emoji: "🌾",
        name: "Plant Growth and Development",
        file: "questions_plant_growth.js",
        questionCount: 315,
        topics: ["Plant Growth and Development", "Phases of Growth", "Growth Rates", "Conditions for Growth", "Differentiation", "Dedifferentiation", "Redifferentiation", "Open Differentiation", "Differentiation, Dedifferentiation, Redifferentiation", "Development", "Plant Growth Regulators", "PGR Discovery", "PGR", "Auxins", "Gibberellins", "Cytokinins", "Ethylene", "ABA", "All PGRs", "Summary", "Cross-Concept"],
        status: "available"
    },

    // ══════════════ CLASS XII ══════════════
    {
        id: "sexual_reproduction", chNumber: 2,
        class: "12th",
        unit: "Unit VI",
        emoji: "🌺",
        name: "Sexual Reproduction in Flowering Plants",
        file: "questions_sexual_reproduction.js",
        questionCount: 526,
        topics: ["Introduction", "Pre-fertilisation: Structures and Events", "The Pistil, Megasporangium (Ovule) and Embryo Sac", "Pollination", "Agents of Pollination", "Outbreeding Devices", "Pollen-Pistil Interaction", "Double Fertilisation", "Post-fertilisation: Structures and Events", "Seed", "Apomixis and Polyembryony", "HOTs", "Summary - Comprehensive Revision", "Cross-Concept"],
        status: "available"
    },
    {
        id: "inheritance_variation", chNumber: 5,
        class: "12th",
        unit: "Unit VI",
        emoji: "🧪",
        name: "Principles of Inheritance and Variation",
        file: "questions_inheritance_variation.js",
        questionCount: 642,
        topics: ["Introduction", "Mendel's Laws of Inheritance", "Inheritance of One Gene", "Law of Dominance", "Law of Segregation", "Incomplete Dominance", "Concept of Dominance", "Codominance", "Inheritance of Two Genes", "Law of Independent Assortment", "Chromosomal Theory of Inheritance", "Linkage and Recombination", "Polygenic Inheritance", "Pleiotropy", "Sex Determination", "Sex Determination in Humans", "Sex Determination in Honey Bee", "Mutation", "Pedigree Analysis", "Mutation and Pedigree Analysis", "Mendelian Disorders", "Chromosomal Disorders", "Summary - Comprehensive", "Numerical Genetics", "Comprehensive", "HOTs"],
        status: "available"
    },
    {
        id: "mol_basis", chNumber: 6,
        class: "12th",
        unit: "Unit VI",
        emoji: "🧬",
        name: "Molecular Basis of Inheritance",
        file: "questions_molecular_basis.js",
        questionCount: 500,
        topics: ["Introduction", "The DNA", "Polynucleotide Structure", "DNA Double Helix", "Packaging of DNA", "Griffith's Experiment", "Avery et al. Experiment", "Hershey-Chase Experiment", "Properties of Genetic Material", "RNA World", "DNA Replication", "Transcription", "Genetic Code", "Mutations", "tRNA", "Translation", "Gene Regulation", "Lac Operon", "Human Genome Project", "DNA Fingerprinting", "Chapter Summary", "Gene", "Comprehensive"],
        status: "available"
    },
    {
        id: "microbes", chNumber: 10,
        class: "12th",
        unit: "Unit VIII",
        emoji: "🦠",
        name: "Microbes in Human Welfare",
        file: "questions_microbes.js",
        questionCount: 276,
        topics: ["Introduction", "Microbes in Household Products", "Microbes in Industrial Products – Beverages", "Antibiotics", "Chemicals, Enzymes and Other Bioactive Molecules", "Microbes in Sewage Treatment", "Microbes in Production of Biogas", "Microbes as Biocontrol Agents", "Microbes as Biofertilisers", "Chapter Summary – Comprehensive Revision"],
        status: "available"
    },
    {
        id: "organisms_populations", chNumber: 13,
        class: "12th",
        unit: "Unit X",
        emoji: "🐾",
        name: "Organisms and Populations",
        file: "questions_organisms_populations.js",
        questionCount: 370,
        topics: ["Habitat", "Niche", "Biome", "Population Attributes", "Interactions", "Introduction - Organisms and Population", "Populations - Population Attributes", "Population Growth", "Growth Models", "Life History Variation", "Population Interactions", "Predation", "Competition", "Parasitism", "Commensalism", "Mutualism", "Summary - Revision"],
        status: "available"
    },
    {
        id: "ecosystem", chNumber: 14,
        class: "12th",
        unit: "Unit X",
        emoji: "🌳",
        name: "Ecosystem",
        file: "questions_ecosystem.js",
        questionCount: 240,
        topics: ["Ecosystem – Introduction & Structure and Function", "Decomposition", "Food Chain", "Energy Flow", "Ecological Pyramids", "Ecosystem – Summary", "Nutrient Cycling", "Productivity", "Succession"],
        status: "available"
    },
    {
        id: "biodiversity", chNumber: 15,
        class: "12th",
        unit: "Unit X",
        emoji: "🌏",
        name: "Biodiversity and Conservation",
        file: "questions_biodiversity.js",
        questionCount: 385,
        topics: ["Introduction to Biodiversity & Levels of Biodiversity", "World's Biodiversity & India's Biodiversity", "Patterns of Biodiversity", "The Importance of Species Diversity to the Ecosystem", "Loss of Biodiversity", "Biodiversity Conservation – Why Conserve?", "How Do We Conserve Biodiversity?", "Summary – Biodiversity and Conservation"],
        status: "available"
    }
];
