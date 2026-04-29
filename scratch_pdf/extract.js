const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('../cyber-security.pdf');

pdf(dataBuffer).then(function(data) {
    fs.writeFileSync('extracted_text.txt', data.text);
    console.log("Extraction complete.");
}).catch(e => console.error(e));
