const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '..', 'public/hero-frames');
const outputDir = path.join(__dirname, '..', 'public/hero-frames-jpg');

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir)
  .filter(f => f.endsWith('.png'))
  .sort();

console.log(`Converting ${files.length} frames to JPEG...`);

async function convertAll() {
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace('.png', '.jpg');
    const outputPath = path.join(outputDir, outputName);

    await sharp(inputPath)
      .jpeg({ quality: 72, mozjpeg: true })
      .toFile(outputPath);

    if ((i + 1) % 10 === 0 || i === files.length - 1) {
      console.log(`  Done ${i + 1}/${files.length}: ${outputName}`);
    }
  }
  console.log('All frames converted!');
}

convertAll().catch(console.error);
