// node cloneSpecies.cjs orc

const fs = require('fs');
const path = require('path');

const targetName = process.argv[2];
if (!targetName) {
  console.error('❌ Please provide a target name, e.g.: node cloneSpecies.cjs orc');
  process.exit(1);
}

const sourceRace = 'elven';
const sourceDir = `src/app/races/${sourceRace}`;
const targetDir = `src/app/races/${targetName}`;

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const newName = item.replace(new RegExp(sourceRace, 'g'), targetName);
    const destPath = path.join(dest, newName);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      if (fs.existsSync(destPath)) {
        console.log(`⚠️ Skipping existing file: ${destPath}`);
        continue;
      }

      const content = fs.readFileSync(srcPath, 'utf8').replace(new RegExp(sourceRace, 'g'), targetName);
      fs.writeFileSync(destPath, content);
    }
  }
}

if (!fs.existsSync(sourceDir)) {
  console.error(`❌ Source directory does not exist: ${sourceDir}`);
  process.exit(1);
}

copyDir(sourceDir, targetDir);
console.log(`✅ Created ${targetName}/ folder from ${sourceRace}/`);
