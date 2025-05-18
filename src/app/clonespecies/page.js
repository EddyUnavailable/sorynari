const fs = require('fs');
const path = require('path');

const sourceDir = 'src/app/races/humans';
const targetName = 'formivarn';
const targetDir = `src/app/races/${targetName}`;

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });
  for (const item of fs.readdirSync(src)) {
    const srcPath = path.join(src, item);
    const newName = item.replace(/human/g, targetName);
    const destPath = path.join(dest, newName);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      const content = fs.readFileSync(srcPath, 'utf8').replace(/human/g, targetName);
      fs.writeFileSync(destPath, content);
    }
  }
}

copyDir(sourceDir, targetDir);
console.log(`✅ Created ${targetName}/ folder from humans/`);