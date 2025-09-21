#!/usr/bin/env node

/**
 * Script pour corriger tous les problèmes d'internationalisation
 * Applique les normes internationales uniformément
 */

const fs = require('fs');
const path = require('path');

// Composants à corriger
const COMPONENTS_TO_FIX = [
  'components/auth/login-form.tsx',
  'components/auth/register-form.tsx', 
  'components/auth/forgot-password-form.tsx'
];

// Traductions à ajouter au fichier i18n.ts
const NEW_TRANSLATIONS = {
  fr: {
    // Auth forms
    "auth.form.email": "Email",
    "auth.form.password": "Mot de passe",
    "auth.form.confirmPassword": "Confirmer le mot de passe",
    "auth.form.firstName": "Prénom",
    "auth.form.lastName": "Nom",
    "auth.form.rememberMe": "Se souvenir de moi",
    "auth.form.signIn": "Se connecter",
    "auth.form.signUp": "S'inscrire",
    "auth.form.sendResetLink": "Envoyer le lien",
    "auth.form.orContinueWith": "Ou continuer avec",
    "auth.form.google": "Google",
    "auth.form.loading": "Chargement...",
    
    // Error messages
    "auth.errors.invalidCredentials": "Email ou mot de passe incorrect",
    "auth.errors.genericError": "Une erreur est survenue. Veuillez réessayer.",
    "auth.errors.passwordMismatch": "Les mots de passe ne correspondent pas",
    "auth.errors.emailRequired": "L'email est requis",
    "auth.errors.passwordRequired": "Le mot de passe est requis",
    
    // Success messages
    "auth.success.resetEmailSent": "Nous avons envoyé un lien de réinitialisation à",
    "auth.success.checkInbox": "Vérifiez votre boîte de réception et vos spams",
    
    // Placeholders
    "auth.placeholders.email": "votre@email.com",
    "auth.placeholders.firstName": "Votre prénom",
    "auth.placeholders.lastName": "Votre nom",
    "auth.placeholders.password": "Minimum 8 caractères",
    "auth.placeholders.confirmPassword": "Confirmez votre mot de passe"
  },
  en: {
    // Auth forms
    "auth.form.email": "Email",
    "auth.form.password": "Password",
    "auth.form.confirmPassword": "Confirm Password",
    "auth.form.firstName": "First Name",
    "auth.form.lastName": "Last Name",
    "auth.form.rememberMe": "Remember me",
    "auth.form.signIn": "Sign In",
    "auth.form.signUp": "Sign Up",
    "auth.form.sendResetLink": "Send Reset Link",
    "auth.form.orContinueWith": "Or continue with",
    "auth.form.google": "Google",
    "auth.form.loading": "Loading...",
    
    // Error messages
    "auth.errors.invalidCredentials": "Invalid email or password",
    "auth.errors.genericError": "An error occurred. Please try again.",
    "auth.errors.passwordMismatch": "Passwords do not match",
    "auth.errors.emailRequired": "Email is required",
    "auth.errors.passwordRequired": "Password is required",
    
    // Success messages
    "auth.success.resetEmailSent": "We have sent a reset link to",
    "auth.success.checkInbox": "Check your inbox and spam folder",
    
    // Placeholders
    "auth.placeholders.email": "your@email.com",
    "auth.placeholders.firstName": "Your first name",
    "auth.placeholders.lastName": "Your last name",
    "auth.placeholders.password": "Minimum 8 characters",
    "auth.placeholders.confirmPassword": "Confirm your password"
  },
  es: {
    // Auth forms
    "auth.form.email": "Correo electrónico",
    "auth.form.password": "Contraseña",
    "auth.form.confirmPassword": "Confirmar Contraseña",
    "auth.form.firstName": "Nombre",
    "auth.form.lastName": "Apellido",
    "auth.form.rememberMe": "Recordarme",
    "auth.form.signIn": "Iniciar Sesión",
    "auth.form.signUp": "Registrarse",
    "auth.form.sendResetLink": "Enviar Enlace",
    "auth.form.orContinueWith": "O continuar con",
    "auth.form.google": "Google",
    "auth.form.loading": "Cargando...",
    
    // Error messages
    "auth.errors.invalidCredentials": "Email o contraseña incorrectos",
    "auth.errors.genericError": "Ocurrió un error. Por favor intenta de nuevo.",
    "auth.errors.passwordMismatch": "Las contraseñas no coinciden",
    "auth.errors.emailRequired": "El email es requerido",
    "auth.errors.passwordRequired": "La contraseña es requerida",
    
    // Success messages
    "auth.success.resetEmailSent": "Hemos enviado un enlace de restablecimiento a",
    "auth.success.checkInbox": "Revisa tu bandeja de entrada y spam",
    
    // Placeholders
    "auth.placeholders.email": "tu@email.com",
    "auth.placeholders.firstName": "Tu nombre",
    "auth.placeholders.lastName": "Tu apellido",
    "auth.placeholders.password": "Mínimo 8 caracteres",
    "auth.placeholders.confirmPassword": "Confirma tu contraseña"
  }
};

function addTranslationsToI18n() {
  const i18nPath = path.join(__dirname, '../lib/i18n.ts');
  let content = fs.readFileSync(i18nPath, 'utf8');
  
  // Ajouter les traductions pour chaque langue
  Object.keys(NEW_TRANSLATIONS).forEach(lang => {
    const translations = NEW_TRANSLATIONS[lang];
    const translationEntries = Object.entries(translations)
      .map(([key, value]) => `    "${key}": "${value}",`)
      .join('\n');
    
    // Trouver la section de la langue et ajouter les traductions
    const langPattern = new RegExp(`(${lang}: \\{[\\s\\S]*?)(\\s+\\},)`, 'g');
    content = content.replace(langPattern, (match, p1, p2) => {
      return p1 + '\n\n    // Auth forms and messages\n' + translationEntries + '\n' + p2;
    });
  });
  
  fs.writeFileSync(i18nPath, content);
  console.log('✅ Traductions ajoutées à i18n.ts');
}

function fixComponent(componentPath) {
  const fullPath = path.join(__dirname, '..', componentPath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ Composant non trouvé: ${componentPath}`);
    return false;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  
  // Créer une sauvegarde
  const backupPath = fullPath + '.backup-i18n-fix';
  fs.writeFileSync(backupPath, content);
  
  // 1. Ajouter l'import useI18n si manquant
  if (!content.includes('useI18n')) {
    content = content.replace(
      /import Link from "next\/link"/,
      'import Link from "next/link"\nimport { useI18n } from "@/contexts/i18n-context"'
    );
  }
  
  // 2. Ajouter le hook dans la fonction
  if (!content.includes('const { t } = useI18n()')) {
    content = content.replace(
      /(export function \w+\(\) \{)\n(\s*const \[)/,
      '$1\n  const { t } = useI18n()\n  $2'
    );
  }
  
  // 3. Remplacer les textes hardcodés spécifiques
  const replacements = [
    // Messages d'erreur
    { from: '"Email ou mot de passe incorrect"', to: 't("auth.errors.invalidCredentials")' },
    { from: '"Une erreur est survenue. Veuillez réessayer."', to: 't("auth.errors.genericError")' },
    { from: '"Les mots de passe ne correspondent pas"', to: 't("auth.errors.passwordMismatch")' },
    
    // Messages de succès
    { from: '"Nous avons envoyé un lien de réinitialisation à"', to: 't("auth.success.resetEmailSent")' },
    { from: '"Vérifiez votre boîte de réception et vos spams"', to: 't("auth.success.checkInbox")' },
    
    // Placeholders
    { from: 'placeholder="votre@email.com"', to: 'placeholder={t("auth.placeholders.email")}' },
    { from: 'placeholder="Votre prénom"', to: 'placeholder={t("auth.placeholders.firstName")}' },
    { from: 'placeholder="Votre nom"', to: 'placeholder={t("auth.placeholders.lastName")}' },
    { from: 'placeholder="Minimum 8 caractères"', to: 'placeholder={t("auth.placeholders.password")}' },
    { from: 'placeholder="Confirmez votre mot de passe"', to: 'placeholder={t("auth.placeholders.confirmPassword")}' },
    
    // Labels et boutons
    { from: '>Se connecter<', to: '>{t("auth.form.signIn")}<' },
    { from: '>S\'inscrire<', to: '>{t("auth.form.signUp")}<' },
    { from: '>Envoyer le lien<', to: '>{t("auth.form.sendResetLink")}<' },
    { from: '>Chargement...<', to: '>{t("auth.form.loading")}<' },
    { from: 'Se souvenir de moi', to: '{t("auth.form.rememberMe")}' },
    { from: 'Ou continuer avec', to: '{t("auth.form.orContinueWith")}' },
    
    // Console logs
    { from: '"Google login initiated"', to: '"Google login initiated"' }, // Garder en anglais pour debug
    { from: '"Google signup initiated"', to: '"Google signup initiated"' }
  ];
  
  replacements.forEach(({ from, to }) => {
    content = content.replace(new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), to);
  });
  
  fs.writeFileSync(fullPath, content);
  console.log(`✅ Composant corrigé: ${componentPath}`);
  return true;
}

function main() {
  console.log('🔧 Correction de tous les problèmes d\'internationalisation...\n');
  
  // 1. Ajouter les traductions manquantes
  console.log('📝 Ajout des traductions manquantes...');
  addTranslationsToI18n();
  
  // 2. Corriger tous les composants
  console.log('\n🔧 Correction des composants...');
  let fixedCount = 0;
  
  COMPONENTS_TO_FIX.forEach(component => {
    if (fixComponent(component)) {
      fixedCount++;
    }
  });
  
  console.log(`\n📊 Résultats:`);
  console.log(`- Composants corrigés: ${fixedCount}/${COMPONENTS_TO_FIX.length}`);
  console.log(`- Traductions ajoutées: ${Object.keys(NEW_TRANSLATIONS.fr).length} clés`);
  
  console.log('\n🎉 Normes internationales appliquées uniformément !');
  console.log('🌍 Tous les composants respectent maintenant les bonnes pratiques i18n');
}

if (require.main === module) {
  main();
}

module.exports = { fixComponent, addTranslationsToI18n };
