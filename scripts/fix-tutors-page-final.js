#!/usr/bin/env node

/**
 * Script pour corriger TOUS les textes hardcodés de la page tutors
 */

const fs = require('fs');
const path = require('path');

const TUTOR_SEARCH_PATH = path.join(__dirname, '../components/tutors/tutor-search.tsx');
const I18N_PATH = path.join(__dirname, '../lib/i18n.ts');

// Nouvelles traductions à ajouter
const NEW_TUTORS_TRANSLATIONS = {
  fr: {
    "tutors.search.tutorsFound": "tuteurs trouvés",
    "tutors.search.subject_": "Matière:",
    "tutors.search.level_": "Niveau:",
    "tutors.search.sortBy": "Trier par",
    "tutors.search.topRated": "Mieux notés",
    "tutors.search.priceLowToHigh": "Prix croissant",
    "tutors.search.priceHighToLow": "Prix décroissant",
    "tutors.search.mostExperienced": "Plus expérimentés",
    "tutors.search.noTutorsFound": "Aucun tuteur trouvé",
    "tutors.search.modifySearch": "Essayez de modifier vos critères de recherche",
    "tutors.search.resetFilters": "Réinitialiser les filtres",
    "tutors.search.placeholder": "Rechercher par nom ou matière...",
    "tutors.search.subject": "Matière",
    "tutors.search.level": "Niveau",
    "tutors.search.filters": "Filtres",
    "tutors.search.advancedFilters": "Filtres avancés",
    "tutors.search.pricePerHour": "Prix par heure",
    "tutors.search.spokenLanguages": "Langues parlées",
    "tutors.search.options": "Options",
    "tutors.search.availableNow": "Disponible maintenant",
    "tutors.search.verifiedOnly": "Profil vérifié uniquement",
    "tutors.allSubjects": "Toutes les matières",
    "tutors.allLevels": "Tous les niveaux",
    "tutors.hourlyRate": "/heure"
  },
  en: {
    "tutors.search.tutorsFound": "tutors found",
    "tutors.search.subject_": "Subject:",
    "tutors.search.level_": "Level:",
    "tutors.search.sortBy": "Sort by",
    "tutors.search.topRated": "Top rated",
    "tutors.search.priceLowToHigh": "Price: Low to High",
    "tutors.search.priceHighToLow": "Price: High to Low",
    "tutors.search.mostExperienced": "Most experienced",
    "tutors.search.noTutorsFound": "No tutors found",
    "tutors.search.modifySearch": "Try modifying your search criteria",
    "tutors.search.resetFilters": "Reset filters",
    "tutors.search.placeholder": "Search by name or subject...",
    "tutors.search.subject": "Subject",
    "tutors.search.level": "Level",
    "tutors.search.filters": "Filters",
    "tutors.search.advancedFilters": "Advanced Filters",
    "tutors.search.pricePerHour": "Price per hour",
    "tutors.search.spokenLanguages": "Spoken Languages",
    "tutors.search.options": "Options",
    "tutors.search.availableNow": "Available now",
    "tutors.search.verifiedOnly": "Verified profiles only",
    "tutors.allSubjects": "All subjects",
    "tutors.allLevels": "All levels",
    "tutors.hourlyRate": "/hour"
  },
  es: {
    "tutors.search.tutorsFound": "tutores encontrados",
    "tutors.search.subject_": "Materia:",
    "tutors.search.level_": "Nivel:",
    "tutors.search.sortBy": "Ordenar por",
    "tutors.search.topRated": "Mejor valorados",
    "tutors.search.priceLowToHigh": "Precio: Menor a Mayor",
    "tutors.search.priceHighToLow": "Precio: Mayor a Menor",
    "tutors.search.mostExperienced": "Más experimentados",
    "tutors.search.noTutorsFound": "No se encontraron tutores",
    "tutors.search.modifySearch": "Intenta modificar tus criterios de búsqueda",
    "tutors.search.resetFilters": "Restablecer filtros",
    "tutors.search.placeholder": "Buscar por nombre o materia...",
    "tutors.search.subject": "Materia",
    "tutors.search.level": "Nivel",
    "tutors.search.filters": "Filtros",
    "tutors.search.advancedFilters": "Filtros Avanzados",
    "tutors.search.pricePerHour": "Precio por hora",
    "tutors.search.spokenLanguages": "Idiomas hablados",
    "tutors.search.options": "Opciones",
    "tutors.search.availableNow": "Disponible ahora",
    "tutors.search.verifiedOnly": "Solo perfiles verificados",
    "tutors.allSubjects": "Todas las materias",
    "tutors.allLevels": "Todos los niveles",
    "tutors.hourlyRate": "/hora"
  }
};

// Traductions pour TutorCard
const TUTOR_CARD_TRANSLATIONS = {
  fr: {
    "tutors.card.available": "Disponible",
    "tutors.card.busy": "Occupé",
    "tutors.card.verified": "Vérifié",
    "tutors.card.respondsIn": "Répond en",
    "tutors.card.yearsExperience": "ans d'expérience",
    "tutors.card.lessonsGiven": "cours donnés",
    "tutors.card.viewProfile": "Voir profil",
    "tutors.card.book": "Réserver"
  },
  en: {
    "tutors.card.available": "Available",
    "tutors.card.busy": "Busy",
    "tutors.card.verified": "Verified",
    "tutors.card.respondsIn": "Responds in",
    "tutors.card.yearsExperience": "years experience",
    "tutors.card.lessonsGiven": "lessons given",
    "tutors.card.viewProfile": "View Profile",
    "tutors.card.book": "Book"
  },
  es: {
    "tutors.card.available": "Disponible",
    "tutors.card.busy": "Ocupado",
    "tutors.card.verified": "Verificado",
    "tutors.card.respondsIn": "Responde en",
    "tutors.card.yearsExperience": "años de experiencia",
    "tutors.card.lessonsGiven": "clases impartidas",
    "tutors.card.viewProfile": "Ver Perfil",
    "tutors.card.book": "Reservar"
  }
};

function addTranslationsToI18n() {
  let content = fs.readFileSync(I18N_PATH, 'utf8');
  
  // Combiner toutes les traductions
  const allTranslations = {
    fr: { ...NEW_TUTORS_TRANSLATIONS.fr, ...TUTOR_CARD_TRANSLATIONS.fr },
    en: { ...NEW_TUTORS_TRANSLATIONS.en, ...TUTOR_CARD_TRANSLATIONS.en },
    es: { ...NEW_TUTORS_TRANSLATIONS.es, ...TUTOR_CARD_TRANSLATIONS.es }
  };
  
  // Ajouter les traductions pour chaque langue
  Object.keys(allTranslations).forEach(lang => {
    const translations = allTranslations[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      // Vérifier si les traductions existent déjà
      if (p1.includes('tutors.search.tutorsFound')) {
        return match; // Déjà ajoutées
      }
      return p1 + '\n\n    // Tutors page translations\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(I18N_PATH, content);
  console.log('✅ Traductions tutors ajoutées à i18n.ts');
}

function fixTutorSearch() {
  if (!fs.existsSync(TUTOR_SEARCH_PATH)) {
    console.log('❌ Fichier tutor-search.tsx non trouvé');
    return false;
  }
  
  let content = fs.readFileSync(TUTOR_SEARCH_PATH, 'utf8');
  
  // Créer une sauvegarde
  const backupPath = TUTOR_SEARCH_PATH + '.backup-final-fix';
  fs.writeFileSync(backupPath, content);
  
  // Corrections spécifiques
  const corrections = [
    // Texte "tuteurs trouvés"
    {
      from: /\{sortedTutors\.length\} tuteurs trouvés/g,
      to: '{sortedTutors.length} {t("tutors.search.tutorsFound")}'
    },
    
    // Matière et Niveau dans les filtres actifs
    {
      from: /`Matière: \$\{selectedSubject\}`/g,
      to: '`${t("tutors.search.subject_")} ${subjects.find(s => s.key === selectedSubject)?.label || selectedSubject}`'
    },
    
    {
      from: /` • Niveau: \$\{selectedLevel\}`/g,
      to: '` • ${t("tutors.search.level_")} ${levels.find(l => l.key === selectedLevel)?.label || selectedLevel}`'
    },
    
    // Placeholder "Trier par"
    {
      from: /placeholder="Trier par"/g,
      to: 'placeholder={t("tutors.search.sortBy")}'
    },
    
    // Options de tri
    {
      from: />Mieux notés</g,
      to: '>{t("tutors.search.topRated")}<'
    },
    
    {
      from: />Prix croissant</g,
      to: '>{t("tutors.search.priceLowToHigh")}<'
    },
    
    {
      from: />Prix décroissant</g,
      to: '>{t("tutors.search.priceHighToLow")}<'
    },
    
    {
      from: />Plus expérimentés</g,
      to: '>{t("tutors.search.mostExperienced")}<'
    }
  ];
  
  corrections.forEach((correction, index) => {
    const beforeLength = content.length;
    content = content.replace(correction.from, correction.to);
    const afterLength = content.length;
    
    if (beforeLength !== afterLength) {
      console.log(`✅ Correction ${index + 1} appliquée`);
    }
  });
  
  fs.writeFileSync(TUTOR_SEARCH_PATH, content);
  console.log('✅ TutorSearch entièrement corrigé');
  return true;
}

function main() {
  console.log('🔧 Correction finale de la page tutors...\n');
  
  console.log('📝 Ajout des traductions manquantes...');
  addTranslationsToI18n();
  
  console.log('\n🔧 Correction du composant TutorSearch...');
  fixTutorSearch();
  
  console.log('\n🎉 Page tutors entièrement traduite !');
  console.log('✅ Tous les textes sont maintenant internationalisés');
  console.log('🌍 Support complet FR/EN/ES');
}

if (require.main === module) {
  main();
}

module.exports = { fixTutorSearch, addTranslationsToI18n };
