
const fs = require('fs');
function extract(file) {
    const text = fs.readFileSync(file, 'utf8');
    const regex = /topic:\s*"(.*?)"/g;
    const counts = {};
    let match;
    while ((match = regex.exec(text)) !== null) {
        counts[match[1]] = (counts[match[1]] || 0) + 1;
    }
    console.log('--- ' + file + ' ---');
    console.log(JSON.stringify(counts, null, 2));
}
extract('questions_plant_kingdom.js');
extract('questions_morphology_flowering.js');

