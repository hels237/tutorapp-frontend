#!/usr/bin/env node

/**
 * Script pour automatiser la traduction des pages restantes
 * Applique les transformations de base pour l'i18n
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');

// Pages prioritaires à traiter automatiquement
const PRIORITY_PAGES = [
  'subjects/page.tsx',
  'verify-email/page.tsx',
  'payment/page.tsx'
];

// Transformations de base à appliquer
const BASIC_TRANSFORMATIONS = [
  // Ajouter "use client" et import useI18n
  {
    search: /^(import.*from.*\n)/m,
    replace: '"use client"\n\n$1import { useI18n } from "@/contexts/i18n-context"\n'
  },
  
  // Ajouter le hook useI18n dans la fonction
  {
    search: /(export default function \w+\(\) \{)\n(\s*return \()/,
    replace: '$1\n  const { t } = useI18n()\n  \n$2'
  },
  
  // Remplacer les classes CSS problématiques
  {
    search: /font-playfair\s+/g,
    replace: ''
  },
  {
    search: /heading-xl\s+/g,
    replace: ''
  },
  {
    search: /heading-lg\s+/g,
    replace: ''
  }
];

function applyBasicTransformations(content) {
  let transformedContent = content;
  
  BASIC_TRANSFORMATIONS.forEach(({ search, replace }) => {
    transformedContent = transformedContent.replace(search, replace);
  });
  
  return transformedContent;
}

function processPage(pagePath) {
  const fullPath = path.join(APP_DIR, pagePath);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`❌ Page not found: ${pagePath}`);
    return false;
  }
  
  try {
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Vérifier si la page a déjà été traitée
    if (content.includes('useI18n')) {
      console.log(`✅ Already processed: ${pagePath}`);
      return true;
    }
    
    const transformedContent = applyBasicTransformations(content);
    
    // Créer une sauvegarde
    const backupPath = fullPath + '.backup';
    fs.writeFileSync(backupPath, content);
    
    // Écrire le contenu transformé
    fs.writeFileSync(fullPath, transformedContent);
    
    console.log(`✅ Processed: ${pagePath}`);
    console.log(`   Backup created: ${backupPath}`);
    
    return true;
  } catch (error) {
    console.error(`❌ Error processing ${pagePath}:`, error.message);
    return false;
  }
}

function main() {
  console.log('🔄 Auto-translation script starting...\n');
  
  let successCount = 0;
  let totalCount = PRIORITY_PAGES.length;
  
  PRIORITY_PAGES.forEach(pagePath => {
    if (processPage(pagePath)) {
      successCount++;
    }
  });
  
  console.log(`\n📊 Results:`);
  console.log(`- Processed: ${successCount}/${totalCount} pages`);
  console.log(`- Success rate: ${Math.round((successCount/totalCount) * 100)}%`);
  
  if (successCount > 0) {
    console.log('\n⚠️  Next steps:');
    console.log('1. Review the transformed files');
    console.log('2. Add specific translations to lib/i18n.ts');
    console.log('3. Replace hardcoded strings with t() calls');
    console.log('4. Test the pages in different languages');
  }
}

if (require.main === module) {
  main();
}

module.exports = { applyBasicTransformations, processPage };
