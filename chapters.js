// ─────────────────────────────────────────────────────────────
//  NEET Biology – Chapter Registry
//  To add a new chapter: set status:"available" and provide file
// ─────────────────────────────────────────────────────────────

const CHAPTERS = [

    // ══════════════ CLASS XI ══════════════
    {
        id: "living_world",
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
        id: "bio_classification",
        class: "11th",
        unit: "Unit I",
        emoji: "🔬",
        name: "Biological Classification",
        file: null,
        questionCount: 0,
        topics: ["Five Kingdoms", "Monera", "Protista", "Fungi", "Viruses"],
        status: "coming-soon"
    },
    {
        id: "plant_kingdom",
        class: "11th",
        unit: "Unit I",
        emoji: "🌱",
        name: "Plant Kingdom",
        file: "questions_plant_kingdom.js",
        questionCount: 286,
        topics: ["Introduction – Plant Kingdom","Algae","Bryophytes","Pteridophytes","Gymnosperms","Gymnosperm Reproduction","Plant Kingdom Summary – Comparative"],
        status: "available"
    },
    {
        id: "morphology_flowering",
        class: "11th",
        unit: "Unit III",
        emoji: "🌸",
        name: "Morphology of Flowering Plants",
        file: "questions_morphology_flowering.js",
        questionCount: 477,
        topics: ["Introduction", "Root", "Stem", "Leaf", "Flower", "Fruit", "Seed", "Semi-technical Description of a Flowering Plant", "Solanaceae"],
        status: "available"
    },
    {
        id: "anatomy_flowering",
        class: "11th",
        unit: "Unit III",
        emoji: "🔭",
        name: "Anatomy of Flowering Plants",
        file: "questions_anatomy_flowering.js",
        questionCount: 224,
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
            "Summary"
        ],
        status: "available"
    },
    {
        id: "cell_unit_life",
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
        id: "cell_cycle",
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
        id: "photosynthesis",
        class: "11th",
        unit: "V",
        emoji: "☀️",
        name: "Photosynthesis in Higher Plants",
        file: "questions_photosynthesis.js",
        questionCount: 625,
        topics: [
            "Introduction - Photosynthesis Overview",
            "What Do We Know - Basic Requirements of Photosynthesis",
            "Early Experiments - Joseph Priestley",
            "Early Experiments - Jan Ingenhousz",
            "Early Experiments - Julius von Sachs",
            "Early Experiments - T.W. Engelmann",
            "Early Experiments - Key Features Known by Mid-19th Century",
            "Early Experiments - Empirical Equation",
            "Early Experiments - Cornelius van Niel",
            "Early Experiments - Correct Equation of Photosynthesis",
            "Early Experiments - Scientist Contributions",
            "Early Experiments - Conceptual Integration",
            "Where Does Photosynthesis Take Place?",
            "Photosynthetic Pigments",
            "What is Light Reaction?",
            "The Electron Transport",
            "Splitting of Water",
            "Cyclic and Non-cyclic Photo-phosphorylation",
            "Chemiosmotic Hypothesis",
            "Where Are ATP and NADPH Used?",
            "The Primary Acceptor of CO₂",
            "The Calvin Cycle",
            "C₄ Pathway",
            "Photorespiration",
            "Factors Affecting Photosynthesis - Introduction",
            "Factors Affecting Photosynthesis - Law of Limiting Factors",
            "Factors Affecting Photosynthesis - Light",
            "Factors Affecting Photosynthesis - CO₂ Concentration",
            "Factors Affecting Photosynthesis - Temperature",
            "Factors Affecting Photosynthesis - Water",
            "Factors Affecting Photosynthesis - Comprehensive",
            "Summary - Comprehensive Revision",
            "Summary - Error Detection (NCERT Summary)",
            "Summary - Error Detection"
        ],
        status: "available"
    },
    {
        id: "respiration_plants",
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
        id: "plant_growth",
        class: "11th",
        unit: "V",
        emoji: "🌾",
        name: "Plant Growth and Development",
        file: null,
        questionCount: 0,
        topics: ["Hormones", "Auxins", "Gibberellins", "Cytokinins", "Seed Dormancy"],
        status: "coming-soon"
    },

    // ══════════════ CLASS XII ══════════════
    {
        id: "sexual_reproduction",
        class: "12th",
        unit: "Unit VI",
        emoji: "🌺",
        name: "Sexual Reproduction in Flowering Plants",
        file: "questions_sexual_reproduction.js",
        questionCount: 268,
        topics: ["Pollination", "Fertilisation", "Embryo Development", "Apomixis"],
        status: "available"
    },
    {
        id: "inheritance_variation",
        class: "12th",
        unit: "Unit VI",
        emoji: "🧪",
        name: "Principles of Inheritance and Variation",
        file: "questions_inheritance_variation.js",
        questionCount: 370,
        topics: ["Mendel's Laws", "Dominance", "Blood Groups", "Linkage", "Mutations"],
        status: "available"
    },
    {
        id: "mol_basis",
        class: "12th",
        unit: "Unit VI",
        emoji: "🧬",
        name: "Molecular Basis of Inheritance",
        file: "questions.js",
        questionCount: 479,
        topics: ["DNA Structure", "Replication", "Transcription", "Translation", "Lac Operon", "HGP", "DNA Fingerprinting"],
        status: "available"
    },
    {
        id: "microbes",
        class: "12th",
        unit: "Unit VIII",
        emoji: "🦠",
        name: "Microbes in Human Welfare",
        file: "questions_microbes.js",
        questionCount: 276,
        topics: ["Antibiotics", "Biogas", "Fermentation", "Sewage Treatment", "Vaccines"],
        status: "available"
    },
    {
        id: "organisms_populations",
        class: "12th",
        unit: "Unit X",
        emoji: "🐾",
        name: "Organisms and Populations",
        file: "questions_organisms_populations.js",
        questionCount: 350,
        topics: ["Habitat", "Niche", "Biome", "Population Attributes", "Interactions", "Introduction - Organisms and Population", "Populations - Population Attributes", "Population Growth", "Growth Models", "Life History Variation", "Population Interactions", "Predation", "Competition", "Parasitism", "Commensalism", "Mutualism", "Summary - Revision"],
        status: "available"
    },
    {
        id: "ecosystem",
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
        id: "biodiversity",
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
