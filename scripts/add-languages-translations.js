#!/usr/bin/env node

/**
 * Script pour ajouter les traductions de la page languages
 */

const fs = require('fs');
const path = require('path');

const I18N_PATH = path.join(__dirname, '../lib/i18n.ts');

// Traductions pour la page languages
const LANGUAGES_TRANSLATIONS = {
  fr: {
    // Page languages
    "subjects.languages.name": "Langues",
    "subjects.languages.hero.subtitle": "Ouvrez-vous au monde avec nos tuteurs natifs et passionnés. Apprenez une nouvelle langue ou perfectionnez vos compétences.",
    "subjects.languages.tutorCount": "312 tuteurs",
    "subjects.languages.languageCount": "6 langues",
    "subjects.languages.priceFrom": "À partir de 20€/h",
    "subjects.languages.availableTitle": "Langues Disponibles",
    "subjects.languages.availableSubtitle": "Choisissez parmi notre sélection de langues enseignées par des experts",
    "subjects.languages.methodsTitle": "Méthodes d'Apprentissage",
    "subjects.languages.methodsSubtitle": "Nos tuteurs utilisent des approches variées pour s'adapter à votre style d'apprentissage",
    "subjects.languages.ctaTitle": "Commencez Votre Apprentissage Aujourd'hui",
    "subjects.languages.ctaSubtitle": "Rejoignez des milliers d'étudiants qui ont déjà amélioré leurs compétences linguistiques",
    "subjects.languages.findTutor": "Trouver un Tuteur",
    "subjects.languages.freeTrial": "Cours d'Essai Gratuit",
    
    // Languages
    "subjects.languages.langs.french.name": "Français",
    "subjects.languages.langs.french.description": "Grammaire, orthographe, littérature, expression",
    "subjects.languages.langs.english.name": "Anglais",
    "subjects.languages.langs.english.description": "Conversation, grammaire, préparation examens",
    "subjects.languages.langs.spanish.name": "Espagnol",
    "subjects.languages.langs.spanish.description": "Expression orale, grammaire, culture hispanique",
    "subjects.languages.langs.german.name": "Allemand",
    "subjects.languages.langs.german.description": "Grammaire, vocabulaire, culture allemande",
    "subjects.languages.langs.italian.name": "Italien",
    "subjects.languages.langs.italian.description": "Conversation, grammaire, culture italienne",
    "subjects.languages.langs.chinese.name": "Chinois",
    "subjects.languages.langs.chinese.description": "Mandarin, caractères, culture chinoise",
    
    // Learning methods
    "subjects.languages.methods.conversation.title": "Conversation Interactive",
    "subjects.languages.methods.conversation.description": "Pratiquez avec des locuteurs natifs",
    "subjects.languages.methods.grammar.title": "Grammaire Structurée",
    "subjects.languages.methods.grammar.description": "Maîtrisez les règles fondamentales",
    "subjects.languages.methods.immersion.title": "Immersion Culturelle",
    "subjects.languages.methods.immersion.description": "Découvrez la culture et les traditions",
    "subjects.languages.methods.exams.title": "Préparation aux Examens",
    "subjects.languages.methods.exams.description": "TOEFL, DELE, DELF et autres certifications",
    
    // Levels
    "subjects.languages.levels.primary": "Primaire",
    "subjects.languages.levels.middle": "Collège",
    "subjects.languages.levels.high": "Lycée",
    "subjects.languages.levels.adult": "Adulte",
    "subjects.languages.levels.beginner": "Débutant",
    "subjects.languages.levels.intermediate": "Intermédiaire",
    
    // Common
    "subjects.languages.tutors": "tuteurs",
    "subjects.languages.levels": "Niveaux :",
    "subjects.languages.viewTutors": "Voir les tuteurs"
  },
  en: {
    // Page languages
    "subjects.languages.name": "Languages",
    "subjects.languages.hero.subtitle": "Open yourself to the world with our native and passionate tutors. Learn a new language or perfect your skills.",
    "subjects.languages.tutorCount": "312 tutors",
    "subjects.languages.languageCount": "6 languages",
    "subjects.languages.priceFrom": "From €20/h",
    "subjects.languages.availableTitle": "Available Languages",
    "subjects.languages.availableSubtitle": "Choose from our selection of languages taught by experts",
    "subjects.languages.methodsTitle": "Learning Methods",
    "subjects.languages.methodsSubtitle": "Our tutors use varied approaches to adapt to your learning style",
    "subjects.languages.ctaTitle": "Start Your Learning Today",
    "subjects.languages.ctaSubtitle": "Join thousands of students who have already improved their language skills",
    "subjects.languages.findTutor": "Find a Tutor",
    "subjects.languages.freeTrial": "Free Trial Lesson",
    
    // Languages
    "subjects.languages.langs.french.name": "French",
    "subjects.languages.langs.french.description": "Grammar, spelling, literature, expression",
    "subjects.languages.langs.english.name": "English",
    "subjects.languages.langs.english.description": "Conversation, grammar, exam preparation",
    "subjects.languages.langs.spanish.name": "Spanish",
    "subjects.languages.langs.spanish.description": "Oral expression, grammar, Hispanic culture",
    "subjects.languages.langs.german.name": "German",
    "subjects.languages.langs.german.description": "Grammar, vocabulary, German culture",
    "subjects.languages.langs.italian.name": "Italian",
    "subjects.languages.langs.italian.description": "Conversation, grammar, Italian culture",
    "subjects.languages.langs.chinese.name": "Chinese",
    "subjects.languages.langs.chinese.description": "Mandarin, characters, Chinese culture",
    
    // Learning methods
    "subjects.languages.methods.conversation.title": "Interactive Conversation",
    "subjects.languages.methods.conversation.description": "Practice with native speakers",
    "subjects.languages.methods.grammar.title": "Structured Grammar",
    "subjects.languages.methods.grammar.description": "Master the fundamental rules",
    "subjects.languages.methods.immersion.title": "Cultural Immersion",
    "subjects.languages.methods.immersion.description": "Discover culture and traditions",
    "subjects.languages.methods.exams.title": "Exam Preparation",
    "subjects.languages.methods.exams.description": "TOEFL, DELE, DELF and other certifications",
    
    // Levels
    "subjects.languages.levels.primary": "Primary",
    "subjects.languages.levels.middle": "Middle School",
    "subjects.languages.levels.high": "High School",
    "subjects.languages.levels.adult": "Adult",
    "subjects.languages.levels.beginner": "Beginner",
    "subjects.languages.levels.intermediate": "Intermediate",
    
    // Common
    "subjects.languages.tutors": "tutors",
    "subjects.languages.levels": "Levels:",
    "subjects.languages.viewTutors": "View Tutors"
  },
  es: {
    // Page languages
    "subjects.languages.name": "Idiomas",
    "subjects.languages.hero.subtitle": "Ábrete al mundo con nuestros tutores nativos y apasionados. Aprende un nuevo idioma o perfecciona tus habilidades.",
    "subjects.languages.tutorCount": "312 tutores",
    "subjects.languages.languageCount": "6 idiomas",
    "subjects.languages.priceFrom": "Desde €20/h",
    "subjects.languages.availableTitle": "Idiomas Disponibles",
    "subjects.languages.availableSubtitle": "Elige entre nuestra selección de idiomas enseñados por expertos",
    "subjects.languages.methodsTitle": "Métodos de Aprendizaje",
    "subjects.languages.methodsSubtitle": "Nuestros tutores utilizan enfoques variados para adaptarse a tu estilo de aprendizaje",
    "subjects.languages.ctaTitle": "Comienza Tu Aprendizaje Hoy",
    "subjects.languages.ctaSubtitle": "Únete a miles de estudiantes que ya han mejorado sus habilidades lingüísticas",
    "subjects.languages.findTutor": "Encontrar un Tutor",
    "subjects.languages.freeTrial": "Clase de Prueba Gratuita",
    
    // Languages
    "subjects.languages.langs.french.name": "Francés",
    "subjects.languages.langs.french.description": "Gramática, ortografía, literatura, expresión",
    "subjects.languages.langs.english.name": "Inglés",
    "subjects.languages.langs.english.description": "Conversación, gramática, preparación de exámenes",
    "subjects.languages.langs.spanish.name": "Español",
    "subjects.languages.langs.spanish.description": "Expresión oral, gramática, cultura hispánica",
    "subjects.languages.langs.german.name": "Alemán",
    "subjects.languages.langs.german.description": "Gramática, vocabulario, cultura alemana",
    "subjects.languages.langs.italian.name": "Italiano",
    "subjects.languages.langs.italian.description": "Conversación, gramática, cultura italiana",
    "subjects.languages.langs.chinese.name": "Chino",
    "subjects.languages.langs.chinese.description": "Mandarín, caracteres, cultura china",
    
    // Learning methods
    "subjects.languages.methods.conversation.title": "Conversación Interactiva",
    "subjects.languages.methods.conversation.description": "Practica con hablantes nativos",
    "subjects.languages.methods.grammar.title": "Gramática Estructurada",
    "subjects.languages.methods.grammar.description": "Domina las reglas fundamentales",
    "subjects.languages.methods.immersion.title": "Inmersión Cultural",
    "subjects.languages.methods.immersion.description": "Descubre la cultura y las tradiciones",
    "subjects.languages.methods.exams.title": "Preparación de Exámenes",
    "subjects.languages.methods.exams.description": "TOEFL, DELE, DELF y otras certificaciones",
    
    // Levels
    "subjects.languages.levels.primary": "Primaria",
    "subjects.languages.levels.middle": "Secundaria",
    "subjects.languages.levels.high": "Bachillerato",
    "subjects.languages.levels.adult": "Adulto",
    "subjects.languages.levels.beginner": "Principiante",
    "subjects.languages.levels.intermediate": "Intermedio",
    
    // Common
    "subjects.languages.tutors": "tutores",
    "subjects.languages.levels": "Niveles:",
    "subjects.languages.viewTutors": "Ver Tutores"
  }
};

function addTranslationsToI18n() {
  let content = fs.readFileSync(I18N_PATH, 'utf8');
  
  // Ajouter les traductions pour chaque langue
  Object.keys(LANGUAGES_TRANSLATIONS).forEach(lang => {
    const translations = LANGUAGES_TRANSLATIONS[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      // Vérifier si les traductions existent déjà
      if (p1.includes('subjects.languages.name')) {
        return match; // Déjà ajoutées
      }
      return p1 + '\n\n    // Languages page translations\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(I18N_PATH, content);
  console.log('✅ Traductions languages ajoutées à i18n.ts');
}

function main() {
  console.log('📝 Ajout des traductions pour la page languages...\n');
  
  addTranslationsToI18n();
  
  console.log('\n🎉 Traductions languages ajoutées avec succès !');
  console.log('✅ Support complet FR/EN/ES');
  console.log('🌍 ' + Object.keys(LANGUAGES_TRANSLATIONS.fr).length + ' clés de traduction ajoutées');
}

if (require.main === module) {
  main();
}

module.exports = { addTranslationsToI18n };
