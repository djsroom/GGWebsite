import fs from 'fs';
import path from 'path';

const imagesDir = 'c:/WorkPlace/Companies/GreenGlassUS/website/public/images';
const files = fs.readdirSync(imagesDir);

const categoriesMap = {
  'glass railing': 'Glass Railing',
  'hotel': 'Hotel',
  'mixed-use': 'Mixed-use',
  'office building': 'Office Building',
  'retail building': 'Retail Building',
  'senior housing': 'Senior Housing',
  'tilt-up building': 'Tilt-up Building'
};

const items = [];
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

  // Determine category and clean name
  let category = '';
  let title = '';
  let location = '';

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
    // Check if it fits in other categories or we skip it (like DSC1856, DSC1863, DSC2802 which are small/screenshots)
    if (file.startsWith('DSC1856') || file.startsWith('DSC1863') || file.startsWith('DSC2802')) {
      // Small thumbnails or duplicate helper files, skip them
      return;
    }
    category = 'Uncategorized';
  }

  // Extract location from filename (usually after "--" or after "Hotel" or at the end)
  // Clean file name first: remove extension, replace multiple spaces with single space
  const nameWithoutExt = path.basename(file, path.extname(file));
  let cleanName = nameWithoutExt.replace(/\s+/g, ' ').trim();

  // Look for location pattern "--"
  if (cleanName.includes('--')) {
    const parts = cleanName.split('--');
    location = parts[parts.length - 1].trim();
    
    // Title is the part before "--", cleaned from prefixes
    let rawTitle = parts[0];
    // remove things like "Glass Railing_DSC2065-1 Glass Railing"
    // we want a clean title
    if (rawTitle.includes('_')) {
      const subParts = rawTitle.split('_');
      rawTitle = subParts[subParts.length - 1];
    }
    // remove DSC numbers
    rawTitle = rawTitle.replace(/DSC\d+-\d+/g, '').replace(/DSC\d+/g, '').trim();
    title = rawTitle;
  } else {
    // If no "--", let's deduce from title
    let rawTitle = cleanName;
    if (rawTitle.includes('_')) {
      const subParts = rawTitle.split('_');
      rawTitle = subParts[subParts.length - 1];
    }
    rawTitle = rawTitle.replace(/DSC\d+-\d+/g, '').replace(/DSC\d+/g, '').trim();

    // Check if it has a city name at the end
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
      location = 'Southern California'; // default location
    }
  }

  // Fix title and location formatting typos
  title = title.replace(/_/g, ' ').replace(/\s+/g, ' ').trim();
  // If title is just the category name, keep it simple
  if (title.toLowerCase() === category.toLowerCase() || title === '') {
    title = category;
  }
  // Mized-use typo fix
  if (title.toLowerCase().startsWith('mized-use')) {
    title = 'Mixed-use';
  }
  // Prosche typo fix
  if (location.toLowerCase().includes('prosche')) {
    location = location.replace(/prosche/i, 'Porsche');
  }
  if (title.toLowerCase().includes('prosche')) {
    title = title.replace(/prosche/i, 'Porsche');
  }
  // Wetchester typo fix
  if (location.toLowerCase() === 'wetchester') {
    location = 'Westchester';
  }

  // If title starts with a category name and is followed by details, keep it nice
  // Let's capitalize title nicely
  title = title.charAt(0).toUpperCase() + title.slice(1);
  if (title.startsWith('-') || title.startsWith('_')) {
    title = title.substring(1).trim();
  }

  // Let's refine specific image titles
  if (file === '_DSC2828-1   Glass Canopy--Costa Mesa.jpg') {
    title = 'Glass Canopy';
  } else if (file === '-DSC00000   Auto Dealer-- Prosche Beverly Hills.jpg') {
    title = 'Auto Dealer (Porsche)';
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

  // Clean empty titles
  if (!title || title.match(/^\d+$/) || title.startsWith('-') || title === 'Hotel' || title === 'Mixed-use' || title === 'Office Building' || title === 'Retail Building' || title === 'Senior Housing' || title === 'Tilt-up Building') {
    title = category;
  }

  items.push({
    id: idCounter++,
    category: category,
    image: `/images/${file}`,
    title: title,
    location: location,
    // Add large: true for visual variance in bento grid (about 20-30% of files)
    large: false 
  });
});

// Distribute "large" grid sizes for Bento Grid variance
// Let's assign 'large' to 1 or 2 items per category for nice layout
const catCounts = {};
items.forEach(item => {
  catCounts[item.category] = (catCounts[item.category] || 0) + 1;
});

// Let's make sure we flag some items as large
const targetLarge = {
  'Glass Railing': [1], // 2nd item
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
  const index = counts[cat] - 1;
  if (targetLarge[cat] && targetLarge[cat].includes(index)) {
    item.large = true;
  }
});

fs.writeFileSync('c:/WorkPlace/Companies/GreenGlassUS/website/scratch/gallery_items.json', JSON.stringify(items, null, 2));
console.log(`Successfully processed ${items.length} images.`);
const countsReport = {};
items.forEach(item => {
  countsReport[item.category] = (countsReport[item.category] || 0) + 1;
});
console.log('Counts per category:', countsReport);
