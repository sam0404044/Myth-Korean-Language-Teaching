const fs = require('fs');
const path = require('path');
const src = path.join(__dirname, '..', 'assets');
const dest = path.join(__dirname, 'public', 'assets');
function copyDir(s, d) {
  if (!fs.existsSync(s)) return;
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
  fs.readdirSync(s).forEach((name) => {
    const sp = path.join(s, name);
    const dp = path.join(d, name);
    if (fs.statSync(sp).isDirectory()) copyDir(sp, dp);
    else fs.copyFileSync(sp, dp);
  });
}
copyDir(src, dest);
console.log('Copied assets to public/assets');
