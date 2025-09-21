#!/usr/bin/env node

/**
 * Script pour ajouter les traductions manquantes pour TutorCard
 */

const fs = require('fs');
const path = require('path');

const I18N_PATH = path.join(__dirname, '../lib/i18n.ts');

// Traductions pour TutorCard
const TUTOR_CARD_TRANSLATIONS = {
  fr: {
    // TutorCard
    "tutors.card.available": "Disponible",
    "tutors.card.busy": "Occupé",
    "tutors.card.verified": "Vérifié",
    "tutors.card.respondsIn": "Répond en",
    "tutors.card.yearsExperience": "ans d'expérience",
    "tutors.card.lessonsGiven": "cours donnés",
    "tutors.card.viewProfile": "Voir profil",
    "tutors.card.book": "Réserver",
    "tutors.hourlyRate": "/heure",
    
    // Subjects pour TutorCard (si pas déjà présents)
    "subjects.mathematics": "Mathématiques",
    "subjects.physics": "Physique",
    "subjects.chemistry": "Chimie",
    "subjects.biology": "Biologie",
    "subjects.french": "Français",
    "subjects.literature": "Littérature",
    "subjects.history": "Histoire",
    "subjects.geography": "Géographie",
    "subjects.philosophy": "Philosophie",
    "subjects.economics": "Économie",
    "subjects.computer": "Informatique",
    "subjects.english": "Anglais",
    "subjects.spanish": "Espagnol",
    "subjects.german": "Allemand",
    "subjects.italian": "Italien",
    
    // Languages pour TutorCard
    "languages.french": "Français",
    "languages.english": "Anglais",
    "languages.spanish": "Espagnol",
    "languages.german": "Allemand",
    "languages.italian": "Italien"
  },
  en: {
    // TutorCard
    "tutors.card.available": "Available",
    "tutors.card.busy": "Busy",
    "tutors.card.verified": "Verified",
    "tutors.card.respondsIn": "Responds in",
    "tutors.card.yearsExperience": "years experience",
    "tutors.card.lessonsGiven": "lessons given",
    "tutors.card.viewProfile": "View Profile",
    "tutors.card.book": "Book",
    "tutors.hourlyRate": "/hour",
    
    // Subjects pour TutorCard
    "subjects.mathematics": "Mathematics",
    "subjects.physics": "Physics",
    "subjects.chemistry": "Chemistry",
    "subjects.biology": "Biology",
    "subjects.french": "French",
    "subjects.literature": "Literature",
    "subjects.history": "History",
    "subjects.geography": "Geography",
    "subjects.philosophy": "Philosophy",
    "subjects.economics": "Economics",
    "subjects.computer": "Computer Science",
    "subjects.english": "English",
    "subjects.spanish": "Spanish",
    "subjects.german": "German",
    "subjects.italian": "Italian",
    
    // Languages pour TutorCard
    "languages.french": "French",
    "languages.english": "English",
    "languages.spanish": "Spanish",
    "languages.german": "German",
    "languages.italian": "Italian"
  },
  es: {
    // TutorCard
    "tutors.card.available": "Disponible",
    "tutors.card.busy": "Ocupado",
    "tutors.card.verified": "Verificado",
    "tutors.card.respondsIn": "Responde en",
    "tutors.card.yearsExperience": "años de experiencia",
    "tutors.card.lessonsGiven": "clases impartidas",
    "tutors.card.viewProfile": "Ver Perfil",
    "tutors.card.book": "Reservar",
    "tutors.hourlyRate": "/hora",
    
    // Subjects pour TutorCard
    "subjects.mathematics": "Matemáticas",
    "subjects.physics": "Física",
    "subjects.chemistry": "Química",
    "subjects.biology": "Biología",
    "subjects.french": "Francés",
    "subjects.literature": "Literatura",
    "subjects.history": "Historia",
    "subjects.geography": "Geografía",
    "subjects.philosophy": "Filosofía",
    "subjects.economics": "Economía",
    "subjects.computer": "Informática",
    "subjects.english": "Inglés",
    "subjects.spanish": "Español",
    "subjects.german": "Alemán",
    "subjects.italian": "Italiano",
    
    // Languages pour TutorCard
    "languages.french": "Francés",
    "languages.english": "Inglés",
    "languages.spanish": "Español",
    "languages.german": "Alemán",
    "languages.italian": "Italiano"
  }
};

function addTranslationsToI18n() {
  let content = fs.readFileSync(I18N_PATH, 'utf8');
  
  // Ajouter les traductions pour chaque langue
  Object.keys(TUTOR_CARD_TRANSLATIONS).forEach(lang => {
    const translations = TUTOR_CARD_TRANSLATIONS[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      // Vérifier si les traductions existent déjà
      if (p1.includes('tutors.card.available')) {
        return match; // Déjà ajoutées
      }
      return p1 + '\n\n    // Tutor card translations\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(I18N_PATH, content);
  console.log('✅ Traductions TutorCard ajoutées à i18n.ts');
}

function main() {
  console.log('📝 Ajout des traductions pour TutorCard...\n');
  
  addTranslationsToI18n();
  
  console.log('\n🎉 Traductions TutorCard ajoutées avec succès !');
  console.log('✅ Support complet FR/EN/ES');
  console.log('🌍 ' + Object.keys(TUTOR_CARD_TRANSLATIONS.fr).length + ' clés de traduction ajoutées');
}

if (require.main === module) {
  main();
}

module.exports = { addTranslationsToI18n };
