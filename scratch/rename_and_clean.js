import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/WorkPlace/Companies/GreenGlassUS/website/public/images';
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

const categoryKeys = {
  'Glass Railing': 'glass-railing',
  'Hotel': 'hotel',
  'Mixed-use': 'mixed-use',
  'Office Building': 'office-building',
  'Retail Building': 'retail-building',
  'Senior Housing': 'senior-housing',
  'Tilt-up Building': 'tilt-up-building'
};

const items = [];
const categoryCounters = {};
categories.forEach(cat => {
  categoryCounters[cat] = 1;
});

let idCounter = 1;

files.forEach(file => {
  // Exclude system screenshots, logos, and specific placeholder templates
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

  // Determine category
  let category = '';
  const lowerFile = file.toLowerCase();

  if (lowerFile.startsWith('glass railing')) {
    category = 'Glass Railing';
  } else if (lowerFile.startsWith('mixed-use')) {
    category = 'Mixed-use';
  } else if (lowerFile.startsWith('office building')) {
    category = 'Office Building';
  } else if (lowerFile.startsWith('retail building')) {
    category = 'Retail Building';
  } else if (lowerFile.startsWith('senior housing')) {
    category = 'Senior Housing';
  } else if (lowerFile.startsWith('tilt-up building') || lowerFile.startsWith('tilt-up')) {
    category = 'Tilt-up Building';
  } else if (lowerFile.startsWith('_dsc') || lowerFile.startsWith('_') || lowerFile.includes('hotel')) {
    category = 'Hotel';
  } else if (lowerFile.startsWith('-dsc00000   auto dealer')) {
    category = 'Retail Building';
  } else {
    // Skip small thumbnails or duplicate helper files
    if (file.startsWith('DSC1856') || file.startsWith('DSC1863') || file.startsWith('DSC2802')) {
      return;
    }
    category = 'Uncategorized';
  }

  if (category === 'Uncategorized') {
    return;
  }

  // 1. Extract title and location
  let title = '';
  let location = '';
  const nameWithoutExt = path.basename(file, path.extname(file));
  let cleanName = nameWithoutExt.replace(/\s+/g, ' ').trim();

  if (cleanName.includes('--')) {
    const parts = cleanName.split('--');
    location = parts[parts.length - 1].trim();
    let rawTitle = parts[0];
    if (rawTitle.includes('_')) {
      const subParts = rawTitle.split('_');
      rawTitle = subParts[subParts.length - 1];
    }
    rawTitle = rawTitle.replace(/DSC\d+-\d+/g, '').replace(/DSC\d+/g, '').trim();
    title = rawTitle;
  } else {
    let rawTitle = cleanName;
    if (rawTitle.includes('_')) {
      const subParts = rawTitle.split('_');
      rawTitle = subParts[subParts.length - 1];
    }
    rawTitle = rawTitle.replace(/DSC\d+-\d+/g, '').replace(/DSC\d+/g, '').trim();

    const cities = ['Glendale', 'West Hollywood', 'North Hollywood', 'Westwood', 'Pasadena', 'Irvine', 'Costa Mesa', 'Culver City', 'Brea', 'Mid Wilshire', 'Huntington Beach', 'Wetchester', 'Seal Beach', 'Rolling Hills', 'West Covina', 'Pacoima', 'Redlands', 'Ontario', 'Redondo Beach', 'Riverside'];
    let cityFound = '';
    for (const city of cities) {
      if (rawTitle.endsWith(city) || rawTitle.includes(city)) {
        cityFound = city;
        break;
      }
    }

    if (cityFound) {
      location = cityFound;
      title = rawTitle.replace(cityFound, '').trim();
    } else {
      title = rawTitle;
      location = 'Southern California';
    }
  }

  title = title.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  if (title.toLowerCase() === category.toLowerCase() || title === '') {
    title = category;
  }
  if (title.toLowerCase().startsWith('mized-use')) {
    title = 'Mixed-use';
  }
  if (location.toLowerCase().includes('prosche')) {
    location = location.replace(/prosche/i, 'Porsche');
  }
  if (title.toLowerCase().includes('prosche')) {
    title = title.replace(/prosche/i, 'Porsche');
  }
  if (location.toLowerCase() === 'wetchester') {
    location = 'Westchester';
  }

  title = title.charAt(0).toUpperCase() + title.slice(1);
  if (title.startsWith('-') || title.startsWith('_')) {
    title = title.substring(1).trim();
  }

  if (file === '_DSC2828-1   Glass Canopy--Costa Mesa.jpg') {
    title = 'Glass Canopy';
  } else if (file === '-DSC00000   Auto Dealer-- Prosche Beverly Hills.jpg') {
    title = 'Auto Dealer (Porsche)';
    location = 'Porsche Beverly Hills';
  } else if (file === '_DSC1971-1   Hotel --Hyatt Riverside.jpg') {
    title = 'Hyatt Hotel';
    location = 'Riverside';
  } else if (file === '_DSC00000   Hotel Redondo Beach.jpg') {
    title = 'Boutique Hotel';
    location = 'Redondo Beach';
  } else if (file === '_DSC00000  Hotel.jpg') {
    title = 'Luxury Hotel';
    location = 'Southern California';
  }

  if (!title || title.match(/^\d+$/) || title.startsWith('-') || title === 'Hotel' || title === 'Mixed-use' || title === 'Office Building' || title === 'Retail Building' || title === 'Senior Housing' || title === 'Tilt-up Building') {
    title = category;
  }

  // 2. Generate clean filename
  const extension = path.extname(file).toLowerCase();
  const catKey = categoryKeys[category];
  const index = categoryCounters[category]++;
  const newFilename = `${catKey}-${index}${extension}`;

  // 3. Rename file physically
  const oldPath = path.join(imagesDir, file);
  const newPath = path.join(imagesDir, newFilename);
  fs.renameSync(oldPath, newPath);

  items.push({
    id: idCounter++,
    category: category,
    image: `/images/${newFilename}`,
    title: title,
    location: location,
    large: false
  });
});

// Distribute large flags for Bento Grid variance
const targetLarge = {
  'Glass Railing': [1],
  'Hotel': [2, 7],
  'Mixed-use': [0, 5, 11],
  'Office Building': [0],
  'Retail Building': [2, 5],
  'Senior Housing': [0],
  'Tilt-up Building': [1]
};

const counts = {};
items.forEach(item => {
  const cat = item.category;
  counts[cat] = (counts[cat] || 0) + 1;
  const idx = counts[cat] - 1;
  if (targetLarge[cat] && targetLarge[cat].includes(idx)) {
    item.large = true;
  }
});

// Write galleryData.js
const galleryDataContent = `export const galleryCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'Glass Railing', label: 'Glass Railing' },
  { key: 'Hotel', label: 'Hotel' },
  { key: 'Mixed-use', label: 'Mixed-use' },
  { key: 'Office Building', label: 'Office Building' },
  { key: 'Retail Building', label: 'Retail Building' },
  { key: 'Senior Housing', label: 'Senior Housing' },
  { key: 'Tilt-up Building', label: 'Tilt-up Building' }
];

export const galleryItems = ${JSON.stringify(items, null, 2)};
`;

fs.writeFileSync('c:/WorkPlace/Companies/GreenGlassUS/website/src/data/galleryData.js', galleryDataContent);
console.log(`Successfully renamed ${items.length} images and generated galleryData.js.`);
