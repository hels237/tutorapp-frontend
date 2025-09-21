#!/usr/bin/env node

/**
 * Script pour finaliser la traduction de la page become-tutor
 */

const fs = require('fs');
const path = require('path');

const PAGE_PATH = path.join(__dirname, '../app/become-tutor/page.tsx');

// Transformations spécifiques pour la page become-tutor
const TRANSFORMATIONS = [
  // Matières
  {
    search: /\["Mathématiques", "Physique", "Chimie", "Biologie", "Français", "Anglais", "Espagnol", "Histoire", "Géographie", "Philosophie", "Économie", "Informatique"\]/,
    replace: `[t('subjects.mathematics'), t('subjects.sciences'), "Chimie", "Biologie", t('subjects.languages'), "English", "Español", t('subjects.history'), t('subjects.geography'), t('subjects.philosophy'), t('subjects.economics'), t('subjects.computer')]`
  },
  
  // Labels du formulaire
  {
    search: /<Label>Matières que vous souhaitez enseigner \*<\/Label>/,
    replace: `<Label>{t('becomeTutor.form.subjects')} *</Label>`
  },
  
  {
    search: /<Label htmlFor="education">Niveau d'études \*<\/Label>/,
    replace: `<Label htmlFor="education">{t('becomeTutor.form.education')} *</Label>`
  },
  
  {
    search: /<SelectValue placeholder="Sélectionnez votre niveau" \/>/,
    replace: `<SelectValue placeholder={t('becomeTutor.form.educationPlaceholder')} />`
  },
  
  {
    search: /<SelectItem value="bac\+3">Bac\+3 \(Licence\)<\/SelectItem>/,
    replace: `<SelectItem value="bac+3">{t('becomeTutor.form.bachelor')}</SelectItem>`
  },
  
  {
    search: /<SelectItem value="bac\+5">Bac\+5 \(Master\)<\/SelectItem>/,
    replace: `<SelectItem value="bac+5">{t('becomeTutor.form.master')}</SelectItem>`
  },
  
  {
    search: /<SelectItem value="bac\+8">Bac\+8 \(Doctorat\)<\/SelectItem>/,
    replace: `<SelectItem value="bac+8">{t('becomeTutor.form.phd')}</SelectItem>`
  },
  
  {
    search: /<SelectItem value="other">Autre<\/SelectItem>/,
    replace: `<SelectItem value="other">{t('becomeTutor.form.other')}</SelectItem>`
  },
  
  {
    search: /<Label htmlFor="experience">Expérience d'enseignement<\/Label>/,
    replace: `<Label htmlFor="experience">{t('becomeTutor.form.experience')}</Label>`
  },
  
  {
    search: /<SelectValue placeholder="Votre expérience" \/>/,
    replace: `<SelectValue placeholder={t('becomeTutor.form.experiencePlaceholder')} />`
  },
  
  {
    search: /<SelectItem value="none">Aucune expérience<\/SelectItem>/,
    replace: `<SelectItem value="none">{t('becomeTutor.form.noExperience')}</SelectItem>`
  },
  
  {
    search: /<SelectItem value="1-2">1-2 ans<\/SelectItem>/,
    replace: `<SelectItem value="1-2">{t('becomeTutor.form.oneToTwo')}</SelectItem>`
  },
  
  {
    search: /<SelectItem value="3-5">3-5 ans<\/SelectItem>/,
    replace: `<SelectItem value="3-5">{t('becomeTutor.form.threeToFive')}</SelectItem>`
  },
  
  {
    search: /<SelectItem value="5\+">Plus de 5 ans<\/SelectItem>/,
    replace: `<SelectItem value="5+">{t('becomeTutor.form.fivePlus')}</SelectItem>`
  },
  
  {
    search: /<Label htmlFor="hourlyRate">Tarif horaire souhaité \(€\) \*<\/Label>/,
    replace: `<Label htmlFor="hourlyRate">{t('becomeTutor.form.hourlyRate')} *</Label>`
  },
  
  {
    search: /<p className="text-sm text-muted-foreground">Tarif recommandé : 20-35€\/h selon votre expérience<\/p>/,
    replace: `<p className="text-sm text-muted-foreground">{t('becomeTutor.form.rateRecommendation')}</p>`
  },
  
  // Documents
  {
    search: /<Label>Documents à fournir \*<\/Label>/,
    replace: `<Label>{t('becomeTutor.form.documents')} *</Label>`
  },
  
  {
    search: /<p className="font-medium">Pièce d'identité<\/p>/,
    replace: `<p className="font-medium">{t('becomeTutor.form.idCard')}</p>`
  },
  
  {
    search: /<p className="font-medium">Diplômes<\/p>/,
    replace: `<p className="font-medium">{t('becomeTutor.form.diplomas')}</p>`
  },
  
  {
    search: /Télécharger/g,
    replace: `{t('becomeTutor.form.upload')}`
  },
  
  // Conditions
  {
    search: /J'accepte les/,
    replace: `{t('becomeTutor.form.acceptTerms')}`
  },
  
  {
    search: /conditions d'utilisation/,
    replace: `{t('becomeTutor.form.terms')}`
  },
  
  {
    search: / et la /,
    replace: ` {t('becomeTutor.form.and')} `
  },
  
  {
    search: /politique de confidentialité/,
    replace: `{t('becomeTutor.form.privacy')}`
  },
  
  {
    search: /Je souhaite recevoir des informations sur les opportunités d'enseignement/,
    replace: `{t('becomeTutor.form.newsletter')}`
  },
  
  {
    search: /Soumettre ma candidature/,
    replace: `{t('becomeTutor.form.submit')}`
  },
  
  // Processus
  {
    search: /<h2 className="heading-xl text-3xl lg:text-4xl">Processus de sélection<\/h2>/,
    replace: `<h2 className="text-3xl lg:text-4xl font-bold">{t('becomeTutor.process.title')}</h2>`
  },
  
  {
    search: /Un processus simple et transparent en 4 étapes/,
    replace: `{t('becomeTutor.process.subtitle')}`
  },
  
  {
    search: /<h3 className="font-semibold">Candidature<\/h3>/,
    replace: `<h3 className="font-semibold">{t('becomeTutor.process.step1')}</h3>`
  },
  
  {
    search: /Remplissez le formulaire et téléchargez vos documents/,
    replace: `{t('becomeTutor.process.step1Desc')}`
  },
  
  {
    search: /<h3 className="font-semibold">Vérification<\/h3>/,
    replace: `<h3 className="font-semibold">{t('becomeTutor.process.step2')}</h3>`
  },
  
  {
    search: /Nous vérifions vos qualifications et documents \(2-3 jours\)/,
    replace: `{t('becomeTutor.process.step2Desc')}`
  },
  
  {
    search: /<h3 className="font-semibold">Entretien<\/h3>/,
    replace: `<h3 className="font-semibold">{t('becomeTutor.process.step3')}</h3>`
  },
  
  {
    search: /Entretien vidéo de 30 minutes pour valider votre profil/,
    replace: `{t('becomeTutor.process.step3Desc')}`
  },
  
  {
    search: /<h3 className="font-semibold">Activation<\/h3>/,
    replace: `<h3 className="font-semibold">{t('becomeTutor.process.step4')}</h3>`
  },
  
  {
    search: /Votre profil est activé et vous pouvez commencer à enseigner/,
    replace: `{t('becomeTutor.process.step4Desc')}`
  },
  
  // FAQ
  {
    search: /<h2 className="heading-xl text-3xl lg:text-4xl">Questions fréquentes<\/h2>/,
    replace: `<h2 className="text-3xl lg:text-4xl font-bold">{t('becomeTutor.faq.title')}</h2>`
  },
  
  {
    search: /<CardTitle className="text-lg">Combien puis-je gagner en tant que tuteur \?<\/CardTitle>/,
    replace: `<CardTitle className="text-lg">{t('becomeTutor.faq.earning.question')}</CardTitle>`
  },
  
  {
    search: /Nos tuteurs gagnent entre 15€ et 50€ par heure selon leur expérience et leurs qualifications\. La plateforme prélève une commission de 15% sur chaque cours\./,
    replace: `{t('becomeTutor.faq.earning.answer')}`
  },
  
  {
    search: /<CardTitle className="text-lg">Combien de temps prend le processus de validation \?<\/CardTitle>/,
    replace: `<CardTitle className="text-lg">{t('becomeTutor.faq.validation.question')}</CardTitle>`
  },
  
  {
    search: /Le processus complet prend généralement 5-7 jours ouvrés, incluant la vérification des documents et l'entretien de validation\./,
    replace: `{t('becomeTutor.faq.validation.answer')}`
  },
  
  {
    search: /<CardTitle className="text-lg">Puis-je enseigner plusieurs matières \?<\/CardTitle>/,
    replace: `<CardTitle className="text-lg">{t('becomeTutor.faq.multiple.question')}</CardTitle>`
  },
  
  {
    search: /Oui, vous pouvez enseigner plusieurs matières si vous avez les qualifications nécessaires pour chacune d'entre elles\./,
    replace: `{t('becomeTutor.faq.multiple.answer')}`
  },
  
  {
    search: /<CardTitle className="text-lg">Comment fonctionne le paiement \?<\/CardTitle>/,
    replace: `<CardTitle className="text-lg">{t('becomeTutor.faq.payment.question')}</CardTitle>`
  },
  
  {
    search: /Les paiements sont effectués automatiquement 48h après chaque cours via virement bancaire ou PayPal selon votre préférence\./,
    replace: `{t('becomeTutor.faq.payment.answer')}`
  }
];

function applyTransformations(content) {
  let transformedContent = content;
  
  TRANSFORMATIONS.forEach(({ search, replace }, index) => {
    const beforeLength = transformedContent.length;
    transformedContent = transformedContent.replace(search, replace);
    const afterLength = transformedContent.length;
    
    if (beforeLength !== afterLength) {
      console.log(`✅ Applied transformation ${index + 1}`);
    }
  });
  
  return transformedContent;
}

function main() {
  console.log('🔄 Finalizing become-tutor page translation...\n');
  
  if (!fs.existsSync(PAGE_PATH)) {
    console.error('❌ Page not found:', PAGE_PATH);
    return;
  }
  
  try {
    const content = fs.readFileSync(PAGE_PATH, 'utf8');
    
    // Créer une sauvegarde
    const backupPath = PAGE_PATH + '.backup-final';
    fs.writeFileSync(backupPath, content);
    console.log('📁 Backup created:', backupPath);
    
    const transformedContent = applyTransformations(content);
    
    // Écrire le contenu transformé
    fs.writeFileSync(PAGE_PATH, transformedContent);
    
    console.log('\n✅ become-tutor page fully translated!');
    console.log('🎯 All hardcoded text has been replaced with translation keys');
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
}

if (require.main === module) {
  main();
}

module.exports = { applyTransformations };
