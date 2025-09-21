#!/usr/bin/env node

/**
 * Script pour normaliser les données des tuteurs selon les bonnes pratiques i18n
 */

const fs = require('fs');
const path = require('path');

const TUTOR_SEARCH_PATH = path.join(__dirname, '../components/tutors/tutor-search.tsx');

// Normalisation des données mockées selon les bonnes pratiques
const DATA_NORMALIZATION = {
  // Remplacement des données hardcodées par des clés normalisées
  search: /const mockTutors = \[\s*\{[\s\S]*?\}\s*\]/,
  replace: `const mockTutors = [
  {
    id: 1,
    name: "Prof. Jean Martin",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["mathematics", "physics"], // Clés normalisées
    level: ["high", "university"], // Clés normalisées
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 35,
    location: "Paris",
    languages: ["french", "english"], // Clés normalisées
    experience: 8,
    description: "Professeur agrégé de mathématiques avec 8 ans d'expérience. Spécialisé dans la préparation au baccalauréat et aux concours.",
    availability: "available", // Clé normalisée
    verified: true,
    responseTime: "< 1h",
    completedLessons: 450,
  },
  {
    id: 2,
    name: "Dr. Marie Leroy",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["physics", "chemistry"],
    level: ["middle", "high"],
    rating: 4.8,
    reviewCount: 89,
    hourlyRate: 40,
    location: "Lyon",
    languages: ["french"],
    experience: 12,
    description: "Docteur en physique, enseignante passionnée. Méthodes pédagogiques innovantes pour rendre les sciences accessibles.",
    availability: "available",
    verified: true,
    responseTime: "< 2h",
    completedLessons: 320,
  },
  {
    id: 3,
    name: "Mme. Sophie Rousseau",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["french", "literature"],
    level: ["middle", "high"],
    rating: 4.7,
    reviewCount: 156,
    hourlyRate: 30,
    location: "Marseille",
    languages: ["french", "spanish"],
    experience: 6,
    description: "Professeure de français certifiée. Spécialisée dans l'analyse littéraire et la préparation aux examens.",
    availability: "busy",
    verified: true,
    responseTime: "< 3h",
    completedLessons: 280,
  },
  {
    id: 4,
    name: "M. Pierre Dubois",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["history", "geography"],
    level: ["middle", "high"],
    rating: 4.6,
    reviewCount: 73,
    hourlyRate: 28,
    location: "Toulouse",
    languages: ["french", "english"],
    experience: 5,
    description: "Enseignant d'histoire-géographie passionné. Approche interactive et mémorisation facilitée.",
    availability: "available",
    verified: false,
    responseTime: "< 4h",
    completedLessons: 190,
  },
]`
};

// Corrections pour les filtres avec les nouvelles structures de données
const FILTER_CORRECTIONS = [
  // Correction du filtre de matières
  {
    search: /const matchesSubject = selectedSubject === "all" \|\| tutor\.subjects\.includes\(selectedSubject\)/,
    replace: `const matchesSubject = selectedSubject === "all" || tutor.subjects.includes(selectedSubject)`
  },
  
  // Correction du filtre de niveaux
  {
    search: /const matchesLevel = selectedLevel === "all" \|\| tutor\.level\.includes\(selectedLevel\)/,
    replace: `const matchesLevel = selectedLevel === "all" || tutor.level.includes(selectedLevel)`
  },
  
  // Correction du filtre de langues
  {
    search: /selectedLanguages\.some\(\(lang\) => tutor\.languages\.includes\(lang\)\)/,
    replace: `selectedLanguages.some((lang) => tutor.languages.includes(lang))`
  },
  
  // Correction du filtre de disponibilité
  {
    search: /const matchesAvailability = !onlyAvailable \|\| tutor\.availability === "Disponible"/,
    replace: `const matchesAvailability = !onlyAvailable || tutor.availability === "available"`
  },
  
  // Correction de l'affichage des matières dans les résultats
  {
    search: /\{selectedSubject !== "all" && `Matière: \$\{selectedSubject\}`\}/,
    replace: `{selectedSubject !== "all" && \`\${t('tutors.search.subject_')} \${subjects.find(s => s.key === selectedSubject)?.label || selectedSubject}\`}`
  },
  
  // Correction de l'affichage des niveaux dans les résultats
  {
    search: /\{selectedLevel !== "all" && ` • Niveau: \$\{selectedLevel\}`\}/,
    replace: `{selectedLevel !== "all" && \` • \${t('tutors.search.level_')} \${levels.find(l => l.key === selectedLevel)?.label || selectedLevel}\`}`
  }
];

function applyNormalization() {
  if (!fs.existsSync(TUTOR_SEARCH_PATH)) {
    console.error('❌ TutorSearch file not found');
    return false;
  }
  
  try {
    let content = fs.readFileSync(TUTOR_SEARCH_PATH, 'utf8');
    
    // Créer une sauvegarde
    const backupPath = TUTOR_SEARCH_PATH + '.backup-normalize';
    fs.writeFileSync(backupPath, content);
    console.log('📁 Backup created:', backupPath);
    
    // Appliquer la normalisation des données
    console.log('🔄 Normalizing mock data...');
    content = content.replace(DATA_NORMALIZATION.search, DATA_NORMALIZATION.replace);
    console.log('✅ Mock data normalized');
    
    // Appliquer les corrections des filtres
    console.log('🔄 Fixing filters...');
    let fixedCount = 0;
    FILTER_CORRECTIONS.forEach((correction, index) => {
      const beforeLength = content.length;
      content = content.replace(correction.search, correction.replace);
      const afterLength = content.length;
      
      if (beforeLength !== afterLength) {
        console.log(`✅ Applied filter correction ${index + 1}`);
        fixedCount++;
      }
    });
    
    // Écrire le contenu corrigé
    fs.writeFileSync(TUTOR_SEARCH_PATH, content);
    
    console.log(`\n🎯 Data normalization complete: ${fixedCount}/${FILTER_CORRECTIONS.length} corrections applied`);
    return true;
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    return false;
  }
}

function main() {
  console.log('🔧 Normalizing tutor data according to i18n best practices...\n');
  
  console.log('📋 Normalization includes:');
  console.log('  - Subject keys: mathematics, physics, etc.');
  console.log('  - Level keys: primary, middle, high, university');
  console.log('  - Language keys: french, english, spanish, etc.');
  console.log('  - Availability keys: available, busy');
  console.log('  - Filter logic updates\n');
  
  if (applyNormalization()) {
    console.log('\n🎉 Tutor data successfully normalized!');
    console.log('🌍 Ready for international deployment');
  }
}

if (require.main === module) {
  main();
}

module.exports = { applyNormalization };
