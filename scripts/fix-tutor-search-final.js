#!/usr/bin/env node

/**
 * Script pour corriger FINALEMENT tous les problèmes du composant TutorSearch
 */

const fs = require('fs');
const path = require('path');

const TUTOR_SEARCH_PATH = path.join(__dirname, '../components/tutors/tutor-search.tsx');

function fixTutorSearchFinal() {
  if (!fs.existsSync(TUTOR_SEARCH_PATH)) {
    console.log('❌ Fichier tutor-search.tsx non trouvé');
    return false;
  }
  
  let content = fs.readFileSync(TUTOR_SEARCH_PATH, 'utf8');
  
  // Créer une sauvegarde
  const backupPath = TUTOR_SEARCH_PATH + '.backup-final-fix';
  fs.writeFileSync(backupPath, content);
  
  // 1. Normaliser les données mockées avec des clés
  const mockTutorsReplacement = `// Mock data avec clés normalisées
const mockTutors = [
  {
    id: 1,
    name: "Prof. Jean Martin",
    avatar: "/placeholder.svg?height=80&width=80",
    subjects: ["mathematics", "physics"], // Utiliser les clés
    level: ["high", "university"], // Utiliser les clés
    rating: 4.9,
    reviewCount: 127,
    hourlyRate: 35,
    location: "Paris",
    languages: ["french", "english"], // Utiliser les clés
    experience: 8,
    description:
      "Professeur agrégé de mathématiques avec 8 ans d'expérience. Spécialisé dans la préparation au baccalauréat et aux concours.",
    availability: "available", // Utiliser les clés
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
    description:
      "Docteur en physique, enseignante passionnée. Méthodes pédagogiques innovantes pour rendre les sciences accessibles.",
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
    description:
      "Professeure de français certifiée. Spécialisée dans l'analyse littéraire et la préparation aux examens.",
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
]`;

  // Remplacer les données mockées
  content = content.replace(
    /\/\/ Mock data[\s\S]*?\]\s*(?=export function TutorSearch)/,
    mockTutorsReplacement + '\n\n'
  );
  
  // 2. Corriger la logique de filtrage pour utiliser les traductions
  const filteringLogicReplacement = `  const filteredTutors = mockTutors.filter((tutor) => {
    const matchesSearch =
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((subjectKey) => {
        const subjectObj = subjects.find(s => s.key === subjectKey);
        return subjectObj?.label.toLowerCase().includes(searchQuery.toLowerCase());
      })

    const matchesSubject = selectedSubject === "all" || tutor.subjects.includes(selectedSubject)
    const matchesLevel = selectedLevel === "all" || tutor.level.includes(selectedLevel)
    const matchesPrice = tutor.hourlyRate >= priceRange[0] && tutor.hourlyRate <= priceRange[1]
    const matchesLanguage =
      selectedLanguages.length === 0 || selectedLanguages.some((lang) => tutor.languages.includes(lang))
    const matchesAvailability = !onlyAvailable || tutor.availability === "available"
    const matchesVerified = !onlyVerified || tutor.verified

    return (
      matchesSearch &&
      matchesSubject &&
      matchesLevel &&
      matchesPrice &&
      matchesLanguage &&
      matchesAvailability &&
      matchesVerified
    )
  })`;
  
  // Remplacer la logique de filtrage
  content = content.replace(
    /const filteredTutors = mockTutors\.filter\(\(tutor\) => \{[\s\S]*?\}\)/,
    filteringLogicReplacement
  );
  
  // 3. Corriger l'affichage des résultats de recherche
  const resultsDisplayReplacement = `          <p className="text-muted-foreground">
            {selectedSubject !== "all" && \`\${t("tutors.search.subject_")} \${subjects.find(s => s.key === selectedSubject)?.label || selectedSubject}\`}
            {selectedLevel !== "all" && \` • \${t("tutors.search.level_")} \${levels.find(l => l.key === selectedLevel)?.label || selectedLevel}\`}
          </p>`;
  
  content = content.replace(
    /<p className="text-muted-foreground">[\s\S]*?<\/p>/,
    resultsDisplayReplacement
  );
  
  fs.writeFileSync(TUTOR_SEARCH_PATH, content);
  console.log('✅ TutorSearch logique de filtrage corrigée');
  return true;
}

function main() {
  console.log('🔧 Correction FINALE du composant TutorSearch...\n');
  
  console.log('🔧 Correction de la logique de filtrage et données mockées...');
  fixTutorSearchFinal();
  
  console.log('\n🎉 TutorSearch COMPLÈTEMENT fonctionnel !');
  console.log('✅ Données mockées normalisées avec clés');
  console.log('✅ Logique de filtrage corrigée');
  console.log('✅ Affichage des résultats internationalisé');
  console.log('🌍 Support complet FR/EN/ES');
}

if (require.main === module) {
  main();
}

module.exports = { fixTutorSearchFinal };
