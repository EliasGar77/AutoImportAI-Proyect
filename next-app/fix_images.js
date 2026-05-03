const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk(path.join(__dirname, 'src'));
let count = 0;

for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    if (content.includes("'/assets/") || content.includes('"/assets/')) {
        content = content.replace(/'\/assets\//g, "'/AutoImportAI-Proyect/assets/");
        content = content.replace(/"\/assets\//g, '"/AutoImportAI-Proyect/assets/');
        fs.writeFileSync(file, content, 'utf8');
        count++;
    }
}
console.log(`Updated images in ${count} files.`);
