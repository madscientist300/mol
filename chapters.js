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
        file: null,
        questionCount: 0,
        topics: ["Biodiversity", "Nomenclature", "Taxonomy", "Classification Keys"],
        status: "coming-soon"
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
        file: null,
        questionCount: 0,
        topics: ["Algae", "Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"],
        status: "coming-soon"
    },
    {
        id: "morphology_flowering",
        class: "11th",
        unit: "Unit III",
        emoji: "🌸",
        name: "Morphology of Flowering Plants",
        file: null,
        questionCount: 0,
        topics: ["Root", "Stem", "Leaf", "Flower", "Fruit", "Seed"],
        status: "coming-soon"
    },
    {
        id: "anatomy_flowering",
        class: "11th",
        unit: "Unit III",
        emoji: "🔭",
        name: "Anatomy of Flowering Plants",
        file: null,
        questionCount: 0,
        topics: ["Tissues", "Xylem", "Phloem", "Cambium", "Cross-sections"],
        status: "coming-soon"
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
        file: null,
        questionCount: 0,
        topics: ["Light Reactions", "Calvin Cycle", "C4 Plants", "CAM", "Photorespiration"],
        status: "coming-soon"
    },
    {
        id: "respiration_plants",
        class: "11th",
        unit: "V",
        emoji: "💨",
        name: "Respiration in Plants",
        file: null,
        questionCount: 0,
        topics: ["Glycolysis", "Krebs Cycle", "ETS", "ATP Yield", "RQ"],
        status: "coming-soon"
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
        file: null,
        questionCount: 0,
        topics: ["Food Chain", "Energy Flow", "Nutrient Cycling", "Productivity", "Succession"],
        status: "coming-soon"
    },
    {
        id: "biodiversity",
        class: "12th",
        unit: "Unit X",
        emoji: "🌏",
        name: "Biodiversity and Conservation",
        file: null,
        questionCount: 0,
        topics: ["Hotspots", "IUCN", "Conservation", "Mass Extinction", "Biosphere Reserves"],
        status: "coming-soon"
    }
];
