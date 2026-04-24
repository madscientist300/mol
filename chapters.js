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
        file: "questions_biological_classification.js",
        questionCount: 338,
        topics: ["Biological Classification - Introduction", "Kingdom Monera", "Kingdom Monera - Cyanobacteria", "Kingdom Monera - Bacterial Shapes", "Kingdom Monera - Soil Bacteria", "Kingdom Protista", "Kingdom Protista - Chrysophytes", "Kingdom Protista - Dinoflagellates", "Kingdom Protista - Euglenoids", "Kingdom Protista - Euglenoids Detail", "Kingdom Protista - Slime Moulds", "Kingdom Protista - Protozoans", "Kingdom Protista - Flagellated Protozoans", "Kingdom Protista - Ciliated Protozoan Detail", "Kingdom Protista - Cross-concept", "Kingdom Protista - Conceptual", "Kingdom Fungi", "Kingdom Fungi - Phycomycetes", "Kingdom Fungi - Phycomycetes Gametes", "Kingdom Fungi - Ascomycetes", "Kingdom Fungi - Ascomycetes Detail", "Kingdom Fungi - Basidiomycetes", "Kingdom Fungi - Basidiomycetes Detail", "Kingdom Fungi - Deuteromycetes", "Kingdom Fungi - Cross-concept", "Kingdom Fungi - Absorption", "Kingdom Fungi - Puccinia", "Kingdom Fungi - Habitat Preference", "Kingdom Fungi - Practical Application", "Kingdom Fungi - Classification Basis", "Kingdom Fungi - Sexual Spore Matching", "Kingdom Fungi - Sexual Cycle Detail", "Kingdom Fungi - Common Examples", "Kingdom Plantae", "Kingdom Animalia", "Viruses", "Viruses - Genetic Material Detail", "Viruses - Translation", "Viruses - Host Cell Interaction", "Viruses - Plant Virus Qualifier", "Viroids", "Prions", "Lichens", "Cross-topic - Prokaryotic vs Eukaryotic", "Cross-topic - Nutrition Comparison", "Cross-topic - Cell Wall Comparison", "Cross-topic - Examples Classification", "Cross-topic - Comprehensive Classification", "Cross-topic - Silica Structures", "Cross-topic - Saprophytes vs Parasites", "Cross-topic - Endogenous vs Exogenous", "Cross-topic - Fungal Classes Comparison", "Cross-topic - Disease and Organism", "Cross-topic - Body Organisation", "Cross-topic - Complete Kingdom Comparison", "Cross-topic - Comprehensive Organism-Kingdom", "Cross-topic - Partially Heterotrophic", "Cross-topic: Plantae vs Animalia", "Cross-topic: All Five Kingdoms", "Cross-topic: Cell Wall Comparison", "Cross-topic: Nutrition Across Kingdoms", "Cross-topic: Storage Products", "Cross-topic: Five Kingdoms Overview", "Cross-topic: Comprehensive", "Cross-topic: Virus vs Viroid vs Prion", "Cross-topic: Virus-Viroid-Prion-Lichen Comprehensive", "Cross-topic: Years and Scientists", "Cross-topic: Complete Chapter Integration", "Cross-topic: Cosmopolitan Organisms", "Cross-topic: Comprehensive Spore Comparison", "Cross-topic: Endogenous vs Exogenous Complete", "Cross-topic: Organism Examples — Ultimate Test", "Cross-topic: Virus Meaning vs CVF", "Cross-topic: Comprehensive Disease-Organism-Kingdom", "Cross-topic: Ultimate Chapter Integration", "Summary - Historical", "Summary - Historical Sequence", "Summary - Monera", "Summary - Fungi", "Summary - Fungi Classification", "Summary - Animalia", "Summary - Excluded Organisms", "Summary - Cross-concept", "Summary - Comprehensive", "Summary - Protista", "Summary - Plantae", "Summary - Cross Kingdom Comparison", "Summary - Comprehensive Revision", "Summary - Whittaker's Classification", "Summary - Plantae Detail", "Summary - Complete Chapter Revision", "Summary - Comprehensive Integration", "Summary - Virus/Viroid/Lichen Exclusion", "Summary - Chapter Consolidation", "Summary - Ultimate Revision", "Summary - Final Integration", "Summary - Final Comprehensive", "Kingdom Monera – Mycoplasma", "Kingdom Protista – Chrysophytes", "Kingdom Protista – Dinoflagellates", "Kingdom Protista – Red Tides", "Kingdom Protista – Protozoans", "Kingdom Protista – Protozoan Types", "Kingdom Protista – Connecting Link", "Kingdom Fungi – Mycelium", "Kingdom Fungi – Nutrition", "Kingdom Fungi – Phycomycetes", "Kingdom Fungi – Classes Match", "Kingdom Fungi – Neurospora", "Kingdom Fungi – Basidiomycetes", "Kingdom Fungi – Imperfect Fungi", "Kingdom Fungi – Alternaria", "Kingdom Fungi – Lichens AR", "Kingdom Fungi – Lichen Partners", "Kingdom Fungi – Reproduction", "Viruses – TMV History", "Viruses – Scientists Match", "Viruses – Virus Facts", "Viruses – Genetic Material", "Viruses – Diseases", "Viroids – Discovery", "Viroids – Structure", "Viroids – AR", "Cross-topic: Kingdom Comparison", "Cross-topic: Comprehensive Comparison", "Cross-topic: All Kingdoms", "Cross-topic: Disease-Kingdom", "Cross-topic: Comprehensive Chapter 2", "Cross-topic: Lichen Statements", "Cross-topic: Reproduction in Kingdoms", "Cross-topic: Comprehensive Revision", "Cross-topic: Grand Finale"],
        status: "available"
    },
    {
        id: "plant_kingdom",
        class: "11th",
        unit: "Unit I",
        emoji: "🌱",
        name: "Plant Kingdom",
        file: "questions_plant_kingdom.js",
        questionCount: 316,
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
        questionCount: 502,
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
        file: "questions_plant_growth.js",
        questionCount: 315,
        topics: ["Plant Growth and Development – Introduction", "Plant Growth and Development – Growth", "Phases of Growth", "Growth Rates", "Phases of Growth + Growth Rates (Cross-Concept)", "Conditions for Growth", "Differentiation", "Dedifferentiation", "Redifferentiation", "Open Differentiation", "Differentiation, Dedifferentiation, Redifferentiation", "Conditions for Growth + Differentiation (Cross-Concept)", "Dedifferentiation + Redifferentiation", "Conditions for Growth + Open Differentiation (Cross-Concept)", "Development", "Development – Plasticity", "Development – Heterophylly", "Plant Growth Regulators – Characteristics", "Plant Growth Regulators – Chemical Nature", "Plant Growth Regulators – Classification", "Plant Growth Regulators – Ethylene", "PGR Discovery – Auxin", "PGR Discovery – Gibberellin", "PGR Discovery – Cytokinin", "PGR Discovery – ABA", "PGR Discovery – Ethylene", "PGR Discovery – Darwin", "PGR Discovery – All Five", "PGR Discovery – All (Cross-Concept)", "PGR Discovery – Comprehensive", "PGR – Chemical Nature", "PGR – Ethylene", "PGR – Chemical Nature + Discovery (Cross-Concept)", "PGR – Chemical Nature + Classification (Cross-Concept)", "Development + PGR Classification (Cross-Concept)", "Development + PGR (Cross-Concept)", "Development + PGR (Cross-Concept Integration)", "Development + PGR (Ultimate Cross-Concept)", "Auxins", "Auxins – Apical Dominance", "Auxins – Comprehensive", "Auxins – Applications", "Auxins – 2,4-D", "Auxins – Stage-Dependent Effects", "Auxins – Xylem Differentiation", "Gibberellins", "Gibberellins – Sugarcane", "Gibberellins – Bolting", "Gibberellins – Comprehensive", "Gibberellins – Conifers", "Gibberellins – Apple", "Gibberellins – Numerical", "Cytokinins", "Cytokinins – Kinetin vs Zeatin", "Cytokinins – Nutrient Mobilisation", "Cytokinins – Effects", "Ethylene", "Ethylene – Effects", "Ethylene – Ethephon", "Ethylene – Ethephon Applications", "Ethylene – Pineapple", "Ethylene – Triple Response", "Ethylene – Comprehensive", "Ethylene – Potato and Peanut", "ABA", "ABA – Stress Hormone", "ABA – Antagonist", "Auxin vs Cytokinin – Apical Dominance", "Auxin vs Ethylene – Pineapple", "ABA vs Ethylene – Dormancy/Germination", "All PGRs – Senescence", "All PGRs – Dormancy", "All PGRs – Comprehensive Effects", "All PGRs – Interactions", "All PGRs – Cross-Concept", "All PGRs – Elongation Effects", "All PGRs – Intrinsic Control", "All PGRs – Flowering", "All PGRs – Plant-PGR Association", "All PGRs – Discovery Sources", "All PGRs – Comprehensive Integration", "All PGRs – Ultimate Integration", "GA – Malting", "Auxins + Ethylene – Abscission", "Summary – Growth Definition", "Summary – Meristems and Elongation", "Summary – Growth Parameters", "Summary – Phases of Growth", "Summary – Differentiation Trigger", "Summary – Indeterminate Growth", "Summary – Development", "Summary – PGR Interactions", "Summary – Meristems and Growth Types", "Summary – Differentiation Sequence", "Summary – External Factors", "Summary – Comprehensive", "Summary – PGR Classification", "Summary – Open Differentiation", "Summary – Protoplasm", "Summary – PGR Effects", "Summary – Comprehensive Integration", "Summary – Growth Rate", "Summary – PGR Groups", "Summary – Comprehensive Cross-Concept", "Summary – Differentiation Principles", "Summary – Growth and Differentiation", "Summary – PGRs as Intrinsic Factors", "Summary – Growth Characteristics", "Summary – Meristems", "Summary – Flexible Development", "Summary – Arithmetic vs Geometric Growth", "Summary – Complete Integration", "Summary – Senescent Phase", "Summary – PGR Diversity", "Summary – Five PGR Groups", "Summary – Growth Site", "Summary – Structure and Function", "Summary – Complete Recap", "Summary – Ultimate Comprehensive", "Summary – Growth Not Sustained", "Summary – Complete Factor Classification", "Summary – Grand Finale Integration"],
        status: "available"
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
        questionCount: 400,
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
        questionCount: 500,
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
        questionCount: 370,
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
