import fs from 'fs';
import path from 'path';

const srcDir = 'c:/WorkPlace/Companies/GreenGlassUS/website/images';
const destDir = 'c:/WorkPlace/Companies/GreenGlassUS/website/public/images';
const dataFilePath = 'c:/WorkPlace/Companies/GreenGlassUS/website/src/data/galleryData.js';

// Ensure destination directory exists
if (!fs.existsSync(destDir)) {
  fs.mkdirSync(destDir, { recursive: true });
}

// 1. Define standard categories
const galleryCategories = [
  { key: 'all', label: 'All Projects' },
  { key: 'Glass Railing', label: 'Glass Railing' },
  { key: 'Hotel', label: 'Hotel' },
  { key: 'Mixed-use', label: 'Mixed-use' },
  { key: 'Office Building', label: 'Office Building' },
  { key: 'Parking Lot', label: 'Parking Lot' },
  { key: 'Retail Building', label: 'Retail Building' },
  { key: 'Senior Housing', label: 'Senior Housing' },
  { key: 'Tilt-up Building', label: 'Tilt-up Building' }
];

// Helper to categorize
function getCategory(fileNameLower) {
  if (fileNameLower.startsWith('glass railing')) return 'Glass Railing';
  if (fileNameLower.startsWith('hotel')) return 'Hotel';
  if (fileNameLower.startsWith('mixed-use') || fileNameLower.startsWith('mixed use') || fileNameLower.startsWith('mized-use')) return 'Mixed-use';
  if (fileNameLower.startsWith('office building')) return 'Office Building';
  if (fileNameLower.startsWith('parking lot')) return 'Parking Lot';
  if (fileNameLower.startsWith('retail building') || fileNameLower.startsWith('retail')) return 'Retail Building';
  if (fileNameLower.startsWith('senior housing')) return 'Senior Housing';
  if (fileNameLower.startsWith('tilt-up building') || fileNameLower.startsWith('tilt-up')) return 'Tilt-up Building';
  return 'Uncategorized';
}

// Helper to extract clean location and project info
function getProjectDetails(filename) {
  const ext = path.extname(filename);
  const name = path.basename(filename, ext).replace(/\s+/g, ' ').trim();
  const lowerName = name.toLowerCase();

  let category = getCategory(lowerName);
  let rawLocation = '';

  if (name.includes('--')) {
    const parts = name.split('--');
    rawLocation = parts[parts.length - 1].trim();
  } else {
    // Special cases without '--'
    if (lowerName === 'hotel') {
      rawLocation = 'Southern California';
    } else if (lowerName.startsWith('hotel ')) {
      rawLocation = name.substring(6).trim();
    } else {
      rawLocation = name;
    }
  }

  // Clean location from suffixes like (2), 2, 3, etc.
  let location = rawLocation
    .replace(/\s*\(\d+\)\s*$/, '') // removes " (2)"
    .replace(/\d+$/, '')          // removes trailing digits like "2" or "3"
    .trim();

  // Normalize location names
  if (location === 'Wetchester') {
    location = 'Westchester';
  } else if (location.toLowerCase() === 'prosche beverly hills') {
    location = 'Porsche Beverly Hills';
  }

  // Determine standard title and location
  let title = category;
  if (category === 'Hotel') {
    if (location === 'Riverside' || location.includes('Hyatt')) {
      title = 'Hotel';
      location = 'Riverside';
    } else {
      title = 'Hotel';
    }
  } else if (category === 'Mixed-use') {
    if (location.includes('Toll Brothers') || location.includes('Anaheim')) {
      if (location.includes('Toll Brothers')) {
        title = 'Toll Brothers';
        location = 'Anaheim';
      } else if (name.includes('Toll Brothers')) {
        title = 'Toll Brothers';
        location = 'Anaheim';
      } else if (location === 'ZIA Anaheim') {
        title = 'ZIA Anaheim';
        location = 'Anaheim';
      } else {
        title = 'Mixed-use Development';
      }
    } else if (location === 'AVA Arts District') {
      title = 'AVA Arts District';
      location = 'Los Angeles';
    } else if (location === 'Aria') {
      title = 'Aria';
      location = 'Los Angeles';
    } else {
      title = 'Mixed-use Development';
    }
  } else if (category === 'Retail Building') {
    if (location === 'Panda Inn') {
      title = 'Panda Inn';
      location = 'Pasadena';
    } else if (location.includes('Shake Shack')) {
      title = 'Shake Shack';
      location = 'Pasadena';
    } else if (location === 'Porsche Beverly Hills') {
      title = 'Auto Dealer (Porsche)';
    }
  } else if (category === 'Parking Lot') {
    title = 'Parking Structure';
  } else if (category === 'Tilt-up Building') {
    title = 'Tilt-up Building';
  } else if (category === 'Office Building') {
    title = 'Office Building';
  } else if (category === 'Glass Railing') {
    title = 'Glass Railing';
  } else if (category === 'Senior Housing') {
    title = 'Senior Housing';
  }

  // Generate unique project ID
  const projectId = `${category.toLowerCase().replace(/\s+/g, '-')}-${location.toLowerCase().replace(/\s+/g, '-')}`;

  return {
    projectId,
    category,
    title,
    location
  };
}

// Read directory
const files = fs.readdirSync(srcDir);
const projectsMap = {};

files.forEach(file => {
  const filePath = path.join(srcDir, file);
  if (!fs.statSync(filePath).isFile()) return;

  const ext = path.extname(file).toLowerCase();
  if (ext !== '.jpg' && ext !== '.jpeg') return; // Only process .jpg / .jpeg files

  const { projectId, category, title, location } = getProjectDetails(file);

  if (category === 'Uncategorized') return;

  // Sanitize copy destination file name
  const cleanFileName = file.replace(/\s+/g, ' ').trim();
  const destPath = path.join(destDir, cleanFileName);

  // Copy file
  fs.copyFileSync(filePath, destPath);

  if (!projectsMap[projectId]) {
    projectsMap[projectId] = {
      id: projectId,
      category: category,
      title: title,
      location: location,
      images: []
    };
  }

  projectsMap[projectId].images.push(`/images/${cleanFileName}`);
});

// Convert map to array
const galleryProjects = Object.values(projectsMap);

// Define large/hero projects for Bento grid styling
const targetLargeProjects = [
  'glass-railing-costa-mesa',
  'hotel-riverside',
  'mixed-use-glendale',
  'mixed-use-pasadena',
  'mixed-use-irvine',
  'office-building-west-hollywood',
  'retail-building-pasadena',
  'retail-building-westchester',
  'senior-housing-rolling-hills',
  'tilt-up-building-redlands'
];

galleryProjects.forEach(proj => {
  proj.large = targetLargeProjects.includes(proj.id);
});

// Output format
const outputContent = `// Re-generated by rebuild_gallery.js
export const galleryCategories = ${JSON.stringify(galleryCategories, null, 2)};

export const galleryProjects = ${JSON.stringify(galleryProjects, null, 2)};
`;

fs.writeFileSync(dataFilePath, outputContent);
console.log(`Successfully grouped ${files.length} files into ${galleryProjects.length} projects.`);
console.log(`Generated ${dataFilePath}`);
