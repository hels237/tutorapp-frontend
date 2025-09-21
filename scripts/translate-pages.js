#!/usr/bin/env node

/**
 * Script pour identifier les pages qui ont besoin d'être traduites
 * et générer un rapport des textes hardcodés
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');

// Pages déjà traduites
const TRANSLATED_PAGES = [
  'page.tsx', // page principale
  'login/page.tsx',
  'register/page.tsx',
  'become-tutor/page.tsx'
];

// Fonction pour lire récursivement tous les fichiers page.tsx
function findPageFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      findPageFiles(fullPath, files);
    } else if (item === 'page.tsx') {
      const relativePath = path.relative(APP_DIR, fullPath);
      files.push(relativePath);
    }
  }
  
  return files;
}

// Fonction pour analyser le contenu d'un fichier et détecter les textes hardcodés
function analyzePageContent(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  
  // Patterns pour détecter les textes hardcodés français
  const frenchTextPatterns = [
    /[">]\s*([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ][a-zàáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ\s]+[a-zàáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ])\s*[<"]/g,
    /title[^>]*>([^<]+)</g,
    /placeholder[^>]*"([^"]+)"/g,
  ];
  
  const hardcodedTexts = [];
  
  frenchTextPatterns.forEach(pattern => {
    let match;
    while ((match = pattern.exec(content)) !== null) {
      const text = match[1].trim();
      if (text.length > 2 && !text.includes('{') && !text.includes('t(')) {
        hardcodedTexts.push(text);
      }
    }
  });
  
  return {
    hasHardcodedText: hardcodedTexts.length > 0,
    hardcodedTexts: [...new Set(hardcodedTexts)], // Remove duplicates
    hasUseI18n: content.includes('useI18n'),
    hasClientDirective: content.includes('"use client"')
  };
}

// Main execution
function main() {
  console.log('🔍 Analyse des pages à traduire...\n');
  
  const allPages = findPageFiles(APP_DIR);
  const untranslatedPages = allPages.filter(page => !TRANSLATED_PAGES.includes(page));
  
  console.log(`📊 Statistiques:`);
  console.log(`- Total des pages: ${allPages.length}`);
  console.log(`- Pages traduites: ${TRANSLATED_PAGES.length}`);
  console.log(`- Pages à traduire: ${untranslatedPages.length}\n`);
  
  console.log('✅ Pages déjà traduites:');
  TRANSLATED_PAGES.forEach(page => {
    console.log(`  - ${page}`);
  });
  
  console.log('\n🔄 Pages nécessitant une traduction:');
  
  const analysisResults = [];
  
  untranslatedPages.forEach(page => {
    const fullPath = path.join(APP_DIR, page);
    const analysis = analyzePageContent(fullPath);
    
    analysisResults.push({
      page,
      ...analysis
    });
    
    const status = analysis.hasHardcodedText ? '❌' : '✅';
    const i18nStatus = analysis.hasUseI18n ? '🌐' : '⚪';
    
    console.log(`  ${status} ${i18nStatus} ${page}`);
    
    if (analysis.hasHardcodedText && analysis.hardcodedTexts.length > 0) {
      console.log(`      Textes hardcodés: ${analysis.hardcodedTexts.slice(0, 3).join(', ')}${analysis.hardcodedTexts.length > 3 ? '...' : ''}`);
    }
  });
  
  // Générer un rapport détaillé
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalPages: allPages.length,
      translatedPages: TRANSLATED_PAGES.length,
      untranslatedPages: untranslatedPages.length,
      pagesWithHardcodedText: analysisResults.filter(r => r.hasHardcodedText).length
    },
    pages: analysisResults
  };
  
  // Sauvegarder le rapport
  const reportPath = path.join(__dirname, 'translation-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  console.log(`\n📋 Rapport détaillé sauvegardé: ${reportPath}`);
  console.log('\n🎯 Pages prioritaires à traduire:');
  
  const priorityPages = analysisResults
    .filter(r => r.hasHardcodedText)
    .sort((a, b) => b.hardcodedTexts.length - a.hardcodedTexts.length)
    .slice(0, 5);
    
  priorityPages.forEach((page, index) => {
    console.log(`  ${index + 1}. ${page.page} (${page.hardcodedTexts.length} textes hardcodés)`);
  });
}

if (require.main === module) {
  main();
}

module.exports = { findPageFiles, analyzePageContent };
