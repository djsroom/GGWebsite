import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/WorkPlace/Companies/GreenGlassUS/website/images';
const files = fs.readdirSync(imagesDir);

const categories = [
  'Glass Railing',
  'Hotel',
  'Mixed-use',
  'Office Building',
  'Retail Building',
  'Senior Housing',
  'Tilt-up Building'
];

const results = {};
categories.forEach(cat => {
  results[cat] = [];
});
results['Uncategorized'] = [];

files.forEach(file => {
  // Exclude screenshots, logo, and other system images
  if (
    file.includes('screenshot') ||
    file.includes('logo') ||
    file.includes('architectural-curtain-wall') ||
    file.includes('breather') ||
    file.includes('kristine-weilert') ||
    file.includes('nico-villanueva') ||
    file.includes('nicolas-tissot') ||
    file.includes('pepe-nero') ||
    file.includes('sergio-rola') ||
    file.includes('the-anchor')
  ) {
    return;
  }

  let matched = false;
  
  // Try to match category based on prefix
  for (const cat of categories) {
    if (file.toLowerCase().startsWith(cat.toLowerCase())) {
      results[cat].push(file);
      matched = true;
      break;
    }
  }

  if (!matched) {
    // Check if it's a hotel image starting with '_'
    if (file.startsWith('_DSC') || file.startsWith('_')) {
      results['Hotel'].push(file);
    } else {
      results['Uncategorized'].push(file);
    }
  }
});

console.log(JSON.stringify(results, null, 2));
