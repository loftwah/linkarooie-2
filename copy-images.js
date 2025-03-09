const fs = require('fs');
const path = require('path');

console.log('Vite projects typically access images directly from src/assets/images');
console.log('No image copying is needed because Vite\'s import system works directly with files in src/');
console.log('');
console.log('Your image files:');

// Source directory with your images
const sourceImagesDir = path.join(__dirname, 'src', 'assets', 'images');

// Check if source directory exists
if (!fs.existsSync(sourceImagesDir)) {
  console.error('Source directory src/assets/images does not exist!');
  process.exit(1);
}

// List all files in the directory
try {
  const files = fs.readdirSync(sourceImagesDir);
  
  files.forEach(file => {
    const sourcePath = path.join(sourceImagesDir, file);
    
    // Only list files, not directories
    if (fs.statSync(sourcePath).isFile()) {
      console.log(`- ${file}`);
    }
  });
  
  console.log('');
  console.log('Usage in your React components:');
  console.log('');
  console.log('import myImage from \'../assets/images/imageName.jpg\';');
  console.log('');
  console.log('Then use it in your component:');
  console.log('<img src={myImage} alt="Description" />');
  
} catch (error) {
  console.error('Error reading files:', error);
  process.exit(1);
} 