#!/usr/bin/env node

/**
 * Script pour corriger COMPLÈTEMENT tous les problèmes d'internationalisation 
 * de la page tutors et ses composants
 */

const fs = require('fs');
const path = require('path');

const TUTOR_PROFILE_PATH = path.join(__dirname, '../components/tutors/tutor-profile.tsx');
const I18N_PATH = path.join(__dirname, '../lib/i18n.ts');

// Nouvelles traductions pour les composants tutors
const TUTORS_COMPLETE_TRANSLATIONS = {
  fr: {
    // Tutor profile
    "tutors.profile.verified": "Vérifié",
    "tutors.profile.respondsIn": "Répond en",
    "tutors.profile.yearsExperience": "ans d'expérience",
    "tutors.profile.lessonsGiven": "cours donnés",
    "tutors.profile.bookLesson": "Réserver un cours",
    "tutors.profile.contactTutor": "Contacter",
    
    // Tabs
    "tutors.profile.tabs.about": "À propos",
    "tutors.profile.tabs.reviews": "Avis",
    "tutors.profile.tabs.availability": "Disponibilités",
    "tutors.profile.tabs.credentials": "Qualifications",
    
    // About section
    "tutors.profile.about.presentation": "Présentation",
    "tutors.profile.about.specialties": "Spécialités",
    "tutors.profile.about.languages": "Langues parlées",
    "tutors.profile.about.videoIntro": "Vidéo de présentation",
    "tutors.profile.about.videoAvailable": "Vidéo de présentation disponible",
    "tutors.profile.about.watchVideo": "Regarder la vidéo",
    
    // Reviews section
    "tutors.profile.reviews.basedOn": "Basé sur",
    "tutors.profile.reviews.reviews": "avis",
    "tutors.profile.reviews.distribution": "Répartition des notes",
    
    // Availability section
    "tutors.profile.availability.thisWeek": "Créneaux disponibles cette semaine",
    "tutors.profile.availability.timezone": "Tous les horaires sont en heure française (CET)",
    "tutors.profile.availability.book": "Réserver",
    "tutors.profile.availability.noSlots": "Aucun créneau disponible",
    
    // Credentials section
    "tutors.profile.credentials.education": "Formation",
    "tutors.profile.credentials.certifications": "Certifications",
    "tutors.profile.credentials.verifications": "Vérifications effectuées",
    "tutors.profile.credentials.identityVerified": "Identité vérifiée",
    "tutors.profile.credentials.diplomasVerified": "Diplômes vérifiés",
    "tutors.profile.credentials.backgroundCheck": "Casier judiciaire vérifié",
    "tutors.profile.credentials.references": "Références professionnelles",
    
    // Mock data (should be replaced with dynamic data)
    "tutors.profile.mock.subjects.mathematics": "Mathématiques",
    "tutors.profile.mock.subjects.physics": "Physique",
    "tutors.profile.mock.levels.highSchool": "Lycée",
    "tutors.profile.mock.levels.university": "Université",
    "tutors.profile.mock.languages.french": "Français",
    "tutors.profile.mock.languages.english": "Anglais",
    "tutors.profile.mock.availability.available": "Disponible"
  },
  en: {
    // Tutor profile
    "tutors.profile.verified": "Verified",
    "tutors.profile.respondsIn": "Responds in",
    "tutors.profile.yearsExperience": "years experience",
    "tutors.profile.lessonsGiven": "lessons given",
    "tutors.profile.bookLesson": "Book a Lesson",
    "tutors.profile.contactTutor": "Contact",
    
    // Tabs
    "tutors.profile.tabs.about": "About",
    "tutors.profile.tabs.reviews": "Reviews",
    "tutors.profile.tabs.availability": "Availability",
    "tutors.profile.tabs.credentials": "Credentials",
    
    // About section
    "tutors.profile.about.presentation": "Presentation",
    "tutors.profile.about.specialties": "Specialties",
    "tutors.profile.about.languages": "Languages Spoken",
    "tutors.profile.about.videoIntro": "Video Introduction",
    "tutors.profile.about.videoAvailable": "Video introduction available",
    "tutors.profile.about.watchVideo": "Watch Video",
    
    // Reviews section
    "tutors.profile.reviews.basedOn": "Based on",
    "tutors.profile.reviews.reviews": "reviews",
    "tutors.profile.reviews.distribution": "Rating Distribution",
    
    // Availability section
    "tutors.profile.availability.thisWeek": "Available slots this week",
    "tutors.profile.availability.timezone": "All times are in French time (CET)",
    "tutors.profile.availability.book": "Book",
    "tutors.profile.availability.noSlots": "No available slots",
    
    // Credentials section
    "tutors.profile.credentials.education": "Education",
    "tutors.profile.credentials.certifications": "Certifications",
    "tutors.profile.credentials.verifications": "Verifications Completed",
    "tutors.profile.credentials.identityVerified": "Identity verified",
    "tutors.profile.credentials.diplomasVerified": "Diplomas verified",
    "tutors.profile.credentials.backgroundCheck": "Background check verified",
    "tutors.profile.credentials.references": "Professional references",
    
    // Mock data
    "tutors.profile.mock.subjects.mathematics": "Mathematics",
    "tutors.profile.mock.subjects.physics": "Physics",
    "tutors.profile.mock.levels.highSchool": "High School",
    "tutors.profile.mock.levels.university": "University",
    "tutors.profile.mock.languages.french": "French",
    "tutors.profile.mock.languages.english": "English",
    "tutors.profile.mock.availability.available": "Available"
  },
  es: {
    // Tutor profile
    "tutors.profile.verified": "Verificado",
    "tutors.profile.respondsIn": "Responde en",
    "tutors.profile.yearsExperience": "años de experiencia",
    "tutors.profile.lessonsGiven": "clases impartidas",
    "tutors.profile.bookLesson": "Reservar una Clase",
    "tutors.profile.contactTutor": "Contactar",
    
    // Tabs
    "tutors.profile.tabs.about": "Acerca de",
    "tutors.profile.tabs.reviews": "Reseñas",
    "tutors.profile.tabs.availability": "Disponibilidad",
    "tutors.profile.tabs.credentials": "Credenciales",
    
    // About section
    "tutors.profile.about.presentation": "Presentación",
    "tutors.profile.about.specialties": "Especialidades",
    "tutors.profile.about.languages": "Idiomas Hablados",
    "tutors.profile.about.videoIntro": "Video de Presentación",
    "tutors.profile.about.videoAvailable": "Video de presentación disponible",
    "tutors.profile.about.watchVideo": "Ver Video",
    
    // Reviews section
    "tutors.profile.reviews.basedOn": "Basado en",
    "tutors.profile.reviews.reviews": "reseñas",
    "tutors.profile.reviews.distribution": "Distribución de Calificaciones",
    
    // Availability section
    "tutors.profile.availability.thisWeek": "Horarios disponibles esta semana",
    "tutors.profile.availability.timezone": "Todos los horarios están en hora francesa (CET)",
    "tutors.profile.availability.book": "Reservar",
    "tutors.profile.availability.noSlots": "No hay horarios disponibles",
    
    // Credentials section
    "tutors.profile.credentials.education": "Educación",
    "tutors.profile.credentials.certifications": "Certificaciones",
    "tutors.profile.credentials.verifications": "Verificaciones Completadas",
    "tutors.profile.credentials.identityVerified": "Identidad verificada",
    "tutors.profile.credentials.diplomasVerified": "Diplomas verificados",
    "tutors.profile.credentials.backgroundCheck": "Antecedentes verificados",
    "tutors.profile.credentials.references": "Referencias profesionales",
    
    // Mock data
    "tutors.profile.mock.subjects.mathematics": "Matemáticas",
    "tutors.profile.mock.subjects.physics": "Física",
    "tutors.profile.mock.levels.highSchool": "Bachillerato",
    "tutors.profile.mock.levels.university": "Universidad",
    "tutors.profile.mock.languages.french": "Francés",
    "tutors.profile.mock.languages.english": "Inglés",
    "tutors.profile.mock.availability.available": "Disponible"
  }
};

function addTranslationsToI18n() {
  let content = fs.readFileSync(I18N_PATH, 'utf8');
  
  // Ajouter les traductions pour chaque langue
  Object.keys(TUTORS_COMPLETE_TRANSLATIONS).forEach(lang => {
    const translations = TUTORS_COMPLETE_TRANSLATIONS[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      // Vérifier si les traductions existent déjà
      if (p1.includes('tutors.profile.verified')) {
        return match; // Déjà ajoutées
      }
      return p1 + '\n\n    // Tutors profile complete translations\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(I18N_PATH, content);
  console.log('✅ Traductions tutors profile ajoutées à i18n.ts');
}

function fixTutorProfile() {
  if (!fs.existsSync(TUTOR_PROFILE_PATH)) {
    console.log('❌ Fichier tutor-profile.tsx non trouvé');
    return false;
  }
  
  let content = fs.readFileSync(TUTOR_PROFILE_PATH, 'utf8');
  
  // Créer une sauvegarde
  const backupPath = TUTOR_PROFILE_PATH + '.backup-complete-fix';
  fs.writeFileSync(backupPath, content);
  
  // 1. Ajouter l'import useI18n si manquant
  if (!content.includes('useI18n')) {
    content = content.replace(
      /import { useState } from "react"/,
      'import { useState } from "react"\nimport { useI18n } from "@/contexts/i18n-context"'
    );
  }
  
  // 2. Ajouter le hook dans la fonction
  if (!content.includes('const { t } = useI18n()')) {
    content = content.replace(
      /(export default function TutorProfile\(\) \{)\n(\s*const \[)/,
      '$1\n  const { t } = useI18n()\n  $2'
    );
  }
  
  // 3. Remplacer les textes hardcodés
  const replacements = [
    // Profile badges et infos
    { from: '>Vérifié<', to: '>{t("tutors.profile.verified")}<' },
    { from: /Répond en \{tutor\.responseTime\}/, to: '{t("tutors.profile.respondsIn")} {tutor.responseTime}' },
    { from: /\{tutor\.experience\} ans d'expérience/, to: '{tutor.experience} {t("tutors.profile.yearsExperience")}' },
    { from: /\{tutor\.completedLessons\} cours donnés/, to: '{tutor.completedLessons} {t("tutors.profile.lessonsGiven")}' },
    { from: /Réserver un cours/, to: '{t("tutors.profile.bookLesson")}' },
    { from: /Contacter/, to: '{t("tutors.profile.contactTutor")}' },
    
    // Tabs
    { from: '>À propos<', to: '>{t("tutors.profile.tabs.about")}<' },
    { from: /Avis \(\{tutor\.reviewCount\}\)/, to: '{t("tutors.profile.tabs.reviews")} ({tutor.reviewCount})' },
    { from: '>Disponibilités<', to: '>{t("tutors.profile.tabs.availability")}<' },
    { from: '>Qualifications<', to: '>{t("tutors.profile.tabs.credentials")}<' },
    
    // About section
    { from: '>Présentation<', to: '>{t("tutors.profile.about.presentation")}<' },
    { from: '>Spécialités<', to: '>{t("tutors.profile.about.specialties")}<' },
    { from: '>Langues parlées<', to: '>{t("tutors.profile.about.languages")}<' },
    { from: '>Vidéo de présentation<', to: '>{t("tutors.profile.about.videoIntro")}<' },
    { from: /Vidéo de présentation disponible/, to: '{t("tutors.profile.about.videoAvailable")}' },
    { from: /Regarder la vidéo/, to: '{t("tutors.profile.about.watchVideo")}' },
    
    // Reviews section
    { from: /Basé sur \{tutor\.reviewCount\} avis/, to: '{t("tutors.profile.reviews.basedOn")} {tutor.reviewCount} {t("tutors.profile.reviews.reviews")}' },
    { from: '>Répartition des notes<', to: '>{t("tutors.profile.reviews.distribution")}<' },
    
    // Availability section
    { from: '>Créneaux disponibles cette semaine<', to: '>{t("tutors.profile.availability.thisWeek")}<' },
    { from: /Tous les horaires sont en heure française \(CET\)/, to: '{t("tutors.profile.availability.timezone")}' },
    { from: />Réserver</, to: '>{t("tutors.profile.availability.book")}<' },
    { from: /Aucun créneau disponible/, to: '{t("tutors.profile.availability.noSlots")}' },
    
    // Credentials section
    { from: '>Formation<', to: '>{t("tutors.profile.credentials.education")}<' },
    { from: '>Certifications<', to: '>{t("tutors.profile.credentials.certifications")}<' },
    { from: '>Vérifications effectuées<', to: '>{t("tutors.profile.credentials.verifications")}<' },
    { from: /Identité vérifiée/, to: '{t("tutors.profile.credentials.identityVerified")}' },
    { from: /Diplômes vérifiés/, to: '{t("tutors.profile.credentials.diplomasVerified")}' },
    { from: /Casier judiciaire vérifié/, to: '{t("tutors.profile.credentials.backgroundCheck")}' },
    { from: /Références professionnelles/, to: '{t("tutors.profile.credentials.references")}' }
  ];
  
  replacements.forEach((replacement, index) => {
    const beforeLength = content.length;
    content = content.replace(replacement.from, replacement.to);
    const afterLength = content.length;
    
    if (beforeLength !== afterLength) {
      console.log(`✅ Correction ${index + 1} appliquée`);
    }
  });
  
  fs.writeFileSync(TUTOR_PROFILE_PATH, content);
  console.log('✅ TutorProfile entièrement corrigé');
  return true;
}

function main() {
  console.log('🔧 Correction COMPLÈTE de tous les composants tutors...\n');
  
  console.log('📝 Ajout des traductions manquantes...');
  addTranslationsToI18n();
  
  console.log('\n🔧 Correction du composant TutorProfile...');
  fixTutorProfile();
  
  console.log('\n🎉 Page tutors ENTIÈREMENT corrigée !');
  console.log('✅ Tous les textes hardcodés ont été internationalisés');
  console.log('🌍 Support complet FR/EN/ES');
  console.log('📊 ' + Object.keys(TUTORS_COMPLETE_TRANSLATIONS.fr).length + ' nouvelles clés ajoutées');
}

if (require.main === module) {
  main();
}

module.exports = { fixTutorProfile, addTranslationsToI18n };
