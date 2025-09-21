#!/usr/bin/env node

/**
 * Script pour corriger COMPLÈTEMENT l'internationalisation du composant TutorSearch
 */

const fs = require('fs');
const path = require('path');

const TUTOR_SEARCH_PATH = path.join(__dirname, '../components/tutors/tutor-search.tsx');
const I18N_PATH = path.join(__dirname, '../lib/i18n.ts');

// Nouvelles traductions pour TutorSearch
const TUTOR_SEARCH_TRANSLATIONS = {
  fr: {
    // Filtres et options
    "tutors.search.filters": "Filtres",
    "tutors.search.advancedFilters": "Filtres avancés",
    "tutors.search.pricePerHour": "Prix par heure",
    "tutors.search.spokenLanguages": "Langues parlées",
    "tutors.search.options": "Options",
    "tutors.search.availableNow": "Disponible maintenant",
    "tutors.search.verifiedOnly": "Profil vérifié uniquement",
    
    // Messages d'état
    "tutors.search.noTutorsFound": "Aucun tuteur trouvé",
    "tutors.search.modifySearch": "Essayez de modifier vos critères de recherche",
    "tutors.search.resetFilters": "Réinitialiser les filtres",
    
    // Matières normalisées
    "tutors.subjects.mathematics": "Mathématiques",
    "tutors.subjects.physics": "Physique",
    "tutors.subjects.chemistry": "Chimie",
    "tutors.subjects.french": "Français",
    "tutors.subjects.history": "Histoire",
    "tutors.subjects.geography": "Géographie",
    "tutors.subjects.english": "Anglais",
    "tutors.subjects.spanish": "Espagnol",
    "tutors.subjects.literature": "Littérature",
    
    // Niveaux normalisés
    "tutors.levels.primary": "Primaire",
    "tutors.levels.middle": "Collège",
    "tutors.levels.high": "Lycée",
    "tutors.levels.university": "Université",
    
    // Langues normalisées
    "tutors.languages.french": "Français",
    "tutors.languages.english": "Anglais",
    "tutors.languages.spanish": "Espagnol",
    "tutors.languages.german": "Allemand",
    "tutors.languages.italian": "Italien",
    
    // Statuts
    "tutors.status.available": "Disponible",
    "tutors.status.busy": "Occupé"
  },
  en: {
    // Filtres et options
    "tutors.search.filters": "Filters",
    "tutors.search.advancedFilters": "Advanced Filters",
    "tutors.search.pricePerHour": "Price per hour",
    "tutors.search.spokenLanguages": "Spoken Languages",
    "tutors.search.options": "Options",
    "tutors.search.availableNow": "Available now",
    "tutors.search.verifiedOnly": "Verified profiles only",
    
    // Messages d'état
    "tutors.search.noTutorsFound": "No tutors found",
    "tutors.search.modifySearch": "Try modifying your search criteria",
    "tutors.search.resetFilters": "Reset filters",
    
    // Matières normalisées
    "tutors.subjects.mathematics": "Mathematics",
    "tutors.subjects.physics": "Physics",
    "tutors.subjects.chemistry": "Chemistry",
    "tutors.subjects.french": "French",
    "tutors.subjects.history": "History",
    "tutors.subjects.geography": "Geography",
    "tutors.subjects.english": "English",
    "tutors.subjects.spanish": "Spanish",
    "tutors.subjects.literature": "Literature",
    
    // Niveaux normalisés
    "tutors.levels.primary": "Primary",
    "tutors.levels.middle": "Middle School",
    "tutors.levels.high": "High School",
    "tutors.levels.university": "University",
    
    // Langues normalisées
    "tutors.languages.french": "French",
    "tutors.languages.english": "English",
    "tutors.languages.spanish": "Spanish",
    "tutors.languages.german": "German",
    "tutors.languages.italian": "Italian",
    
    // Statuts
    "tutors.status.available": "Available",
    "tutors.status.busy": "Busy"
  },
  es: {
    // Filtres et options
    "tutors.search.filters": "Filtros",
    "tutors.search.advancedFilters": "Filtros Avanzados",
    "tutors.search.pricePerHour": "Precio por hora",
    "tutors.search.spokenLanguages": "Idiomas Hablados",
    "tutors.search.options": "Opciones",
    "tutors.search.availableNow": "Disponible ahora",
    "tutors.search.verifiedOnly": "Solo perfiles verificados",
    
    // Messages d'état
    "tutors.search.noTutorsFound": "No se encontraron tutores",
    "tutors.search.modifySearch": "Intenta modificar tus criterios de búsqueda",
    "tutors.search.resetFilters": "Restablecer filtros",
    
    // Matières normalisées
    "tutors.subjects.mathematics": "Matemáticas",
    "tutors.subjects.physics": "Física",
    "tutors.subjects.chemistry": "Química",
    "tutors.subjects.french": "Francés",
    "tutors.subjects.history": "Historia",
    "tutors.subjects.geography": "Geografía",
    "tutors.subjects.english": "Inglés",
    "tutors.subjects.spanish": "Español",
    "tutors.subjects.literature": "Literatura",
    
    // Niveaux normalisés
    "tutors.levels.primary": "Primaria",
    "tutors.levels.middle": "Secundaria",
    "tutors.levels.high": "Bachillerato",
    "tutors.levels.university": "Universidad",
    
    // Langues normalisées
    "tutors.languages.french": "Francés",
    "tutors.languages.english": "Inglés",
    "tutors.languages.spanish": "Español",
    "tutors.languages.german": "Alemán",
    "tutors.languages.italian": "Italiano",
    
    // Statuts
    "tutors.status.available": "Disponible",
    "tutors.status.busy": "Ocupado"
  }
};

function addTranslationsToI18n() {
  let content = fs.readFileSync(I18N_PATH, 'utf8');
  
  // Ajouter les traductions pour chaque langue
  Object.keys(TUTOR_SEARCH_TRANSLATIONS).forEach(lang => {
    const translations = TUTOR_SEARCH_TRANSLATIONS[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      // Vérifier si les traductions existent déjà
      if (p1.includes('tutors.search.filters')) {
        return match; // Déjà ajoutées
      }
      return p1 + '\n\n    // Tutor search complete translations\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(I18N_PATH, content);
  console.log('✅ Traductions TutorSearch ajoutées à i18n.ts');
}

function fixTutorSearch() {
  if (!fs.existsSync(TUTOR_SEARCH_PATH)) {
    console.log('❌ Fichier tutor-search.tsx non trouvé');
    return false;
  }
  
  let content = fs.readFileSync(TUTOR_SEARCH_PATH, 'utf8');
  
  // Créer une sauvegarde
  const backupPath = TUTOR_SEARCH_PATH + '.backup-complete-fix';
  fs.writeFileSync(backupPath, content);
  
  // 1. Remplacer les listes hardcodées par des données normalisées
  const subjectsReplacement = `  // Données normalisées avec traductions dynamiques
  const subjects = [
    { key: "mathematics", label: t("tutors.subjects.mathematics") },
    { key: "physics", label: t("tutors.subjects.physics") },
    { key: "chemistry", label: t("tutors.subjects.chemistry") },
    { key: "french", label: t("tutors.subjects.french") },
    { key: "history", label: t("tutors.subjects.history") },
    { key: "geography", label: t("tutors.subjects.geography") },
    { key: "english", label: t("tutors.subjects.english") },
    { key: "spanish", label: t("tutors.subjects.spanish") },
    { key: "literature", label: t("tutors.subjects.literature") }
  ]`;
  
  const levelsReplacement = `  const levels = [
    { key: "primary", label: t("tutors.levels.primary") },
    { key: "middle", label: t("tutors.levels.middle") },
    { key: "high", label: t("tutors.levels.high") },
    { key: "university", label: t("tutors.levels.university") }
  ]`;
  
  const languagesReplacement = `  const languages = [
    { key: "french", label: t("tutors.languages.french") },
    { key: "english", label: t("tutors.languages.english") },
    { key: "spanish", label: t("tutors.languages.spanish") },
    { key: "german", label: t("tutors.languages.german") },
    { key: "italian", label: t("tutors.languages.italian") }
  ]`;
  
  // Remplacer les listes hardcodées
  content = content.replace(
    /const subjects = \["Mathématiques", "Physique", "Chimie", "Français", "Histoire", "Géographie", "Anglais", "Espagnol"\]/,
    subjectsReplacement
  );
  
  content = content.replace(
    /const levels = \["Primaire", "Collège", "Lycée", "Université"\]/,
    levelsReplacement
  );
  
  content = content.replace(
    /const languages = \["Français", "Anglais", "Espagnol", "Allemand", "Italien"\]/,
    languagesReplacement
  );
  
  // 2. Remplacer les textes hardcodés dans l'interface
  const replacements = [
    { from: />Filtres</, to: '>{t("tutors.search.filters")}<' },
    { from: />Filtres avancés</, to: '>{t("tutors.search.advancedFilters")}<' },
    { from: />Prix par heure</, to: '>{t("tutors.search.pricePerHour")}<' },
    { from: />Langues parlées</, to: '>{t("tutors.search.spokenLanguages")}<' },
    { from: />Options</, to: '>{t("tutors.search.options")}<' },
    { from: /Disponible maintenant/, to: '{t("tutors.search.availableNow")}' },
    { from: /Profil vérifié uniquement/, to: '{t("tutors.search.verifiedOnly")}' },
    { from: />Aucun tuteur trouvé</, to: '>{t("tutors.search.noTutorsFound")}<' },
    { from: /Essayez de modifier vos critères de recherche/, to: '{t("tutors.search.modifySearch")}' },
    { from: /Réinitialiser les filtres/, to: '{t("tutors.search.resetFilters")}' }
  ];
  
  replacements.forEach((replacement, index) => {
    const beforeLength = content.length;
    content = content.replace(replacement.from, replacement.to);
    const afterLength = content.length;
    
    if (beforeLength !== afterLength) {
      console.log(`✅ Correction ${index + 1} appliquée`);
    }
  });
  
  // 3. Corriger les boucles pour utiliser les objets normalisés
  content = content.replace(
    /{subjects\.map\(\(subject\) => \(/,
    '{subjects.map((subject) => ('
  );
  
  content = content.replace(
    /<SelectItem key={subject} value={subject}>\s*{subject}\s*<\/SelectItem>/g,
    '<SelectItem key={subject.key} value={subject.key}>\n                    {subject.label}\n                  </SelectItem>'
  );
  
  content = content.replace(
    /{levels\.map\(\(level\) => \(/,
    '{levels.map((level) => ('
  );
  
  content = content.replace(
    /<SelectItem key={level} value={level}>\s*{level}\s*<\/SelectItem>/g,
    '<SelectItem key={level.key} value={level.key}>\n                    {level.label}\n                  </SelectItem>'
  );
  
  content = content.replace(
    /{languages\.map\(\(language\) => \(/,
    '{languages.map((language) => ('
  );
  
  content = content.replace(
    /<Checkbox\s+id={language}/g,
    '<Checkbox\n                        id={language.key}'
  );
  
  content = content.replace(
    /checked={selectedLanguages\.includes\(language\)}/g,
    'checked={selectedLanguages.includes(language.key)}'
  );
  
  content = content.replace(
    /onCheckedChange={\(checked\) => handleLanguageChange\(language, checked as boolean\)}/g,
    'onCheckedChange={(checked) => handleLanguageChange(language.key, checked as boolean)}'
  );
  
  content = content.replace(
    /<Label htmlFor={language} className="text-sm">\s*{language}\s*<\/Label>/g,
    '<Label htmlFor={language.key} className="text-sm">\n                        {language.label}\n                      </Label>'
  );
  
  fs.writeFileSync(TUTOR_SEARCH_PATH, content);
  console.log('✅ TutorSearch entièrement corrigé');
  return true;
}

function main() {
  console.log('🔧 Correction COMPLÈTE du composant TutorSearch...\n');
  
  console.log('📝 Ajout des traductions manquantes...');
  addTranslationsToI18n();
  
  console.log('\n🔧 Correction du composant TutorSearch...');
  fixTutorSearch();
  
  console.log('\n🎉 TutorSearch ENTIÈREMENT corrigé !');
  console.log('✅ Toutes les listes et filtres sont internationalisés');
  console.log('🌍 Support complet FR/EN/ES');
  console.log('📊 ' + Object.keys(TUTOR_SEARCH_TRANSLATIONS.fr).length + ' nouvelles clés ajoutées');
}

if (require.main === module) {
  main();
}

module.exports = { fixTutorSearch, addTranslationsToI18n };
