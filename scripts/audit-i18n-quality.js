#!/usr/bin/env node

/**
 * Script d'audit de la qualité de l'internationalisation
 * Vérifie si les normes internationales sont appliquées partout
 */

const fs = require('fs');
const path = require('path');

const APP_DIR = path.join(__dirname, '../app');
const COMPONENTS_DIR = path.join(__dirname, '../components');

// Pages supposées traduites
const TRANSLATED_PAGES = [
  'page.tsx',
  'login/page.tsx', 
  'register/page.tsx',
  'become-tutor/page.tsx',
  'forgot-password/page.tsx',
  'tutors/page.tsx'
];

// Composants critiques à vérifier
const CRITICAL_COMPONENTS = [
  'components/auth/login-form.tsx',
  'components/auth/register-form.tsx',
  'components/auth/forgot-password-form.tsx',
  'components/layout/header.tsx',
  'components/layout/footer.tsx'
];

// Patterns pour détecter les problèmes d'i18n
const I18N_ISSUES = [
  {
    name: 'Texte français hardcodé',
    pattern: /[">]\s*([A-ZÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ][a-zàáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ\s]{3,}[a-zàáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ])\s*[<"]/g,
    severity: 'high'
  },
  {
    name: 'Placeholder français',
    pattern: /placeholder\s*=\s*["']([^"']*[àáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ][^"']*)["']/g,
    severity: 'high'
  },
  {
    name: 'Messages d\'erreur hardcodés',
    pattern: /(setError|throw new Error)\s*\(\s*["']([^"']+)["']\s*\)/g,
    severity: 'medium'
  },
  {
    name: 'Console.log avec texte français',
    pattern: /console\.(log|error|warn)\s*\(\s*["']([^"']*[àáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ][^"']*)["']/g,
    severity: 'low'
  },
  {
    name: 'Manque useI18n hook',
    pattern: /export\s+(default\s+)?function\s+\w+.*\{[\s\S]*?\}/,
    check: (content) => {
      const hasUseI18n = content.includes('useI18n');
      const hasFrenchText = /[àáâãäåæçèéêëìíîïðñòóôõöùúûüýÿ]/.test(content);
      return !hasUseI18n && hasFrenchText;
    },
    severity: 'high'
  }
];

function analyzeFile(filePath) {
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const issues = [];

  I18N_ISSUES.forEach(issue => {
    if (issue.check) {
      if (issue.check(content)) {
        issues.push({
          type: issue.name,
          severity: issue.severity,
          matches: ['Hook useI18n manquant']
        });
      }
    } else {
      let match;
      const matches = [];
      while ((match = issue.pattern.exec(content)) !== null) {
        matches.push(match[1] || match[2] || match[0]);
      }
      if (matches.length > 0) {
        issues.push({
          type: issue.name,
          severity: issue.severity,
          matches: matches.slice(0, 5) // Limiter à 5 exemples
        });
      }
    }
  });

  return {
    file: filePath,
    hasUseI18n: content.includes('useI18n'),
    hasClientDirective: content.includes('"use client"'),
    issues: issues,
    score: calculateScore(issues)
  };
}

function calculateScore(issues) {
  let score = 100;
  issues.forEach(issue => {
    const penalty = issue.severity === 'high' ? 20 : 
                   issue.severity === 'medium' ? 10 : 5;
    score -= penalty * issue.matches.length;
  });
  return Math.max(0, score);
}

function findAllFiles(dir, extension = '.tsx') {
  const files = [];
  
  function scanDir(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
        scanDir(fullPath);
      } else if (item.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  }
  
  scanDir(dir);
  return files;
}

function main() {
  console.log('🔍 Audit de la qualité d\'internationalisation...\n');
  
  // Analyser les pages traduites
  console.log('📄 Pages supposées traduites:');
  const pageResults = [];
  
  TRANSLATED_PAGES.forEach(page => {
    const fullPath = path.join(APP_DIR, page);
    const result = analyzeFile(fullPath);
    
    if (result) {
      pageResults.push(result);
      const status = result.score >= 90 ? '✅' : result.score >= 70 ? '⚠️' : '❌';
      console.log(`  ${status} ${page} (Score: ${result.score}/100)`);
      
      if (result.issues.length > 0) {
        result.issues.forEach(issue => {
          const icon = issue.severity === 'high' ? '🔴' : 
                      issue.severity === 'medium' ? '🟡' : '🟢';
          console.log(`    ${icon} ${issue.type}: ${issue.matches.slice(0, 2).join(', ')}`);
        });
      }
    }
  });
  
  // Analyser les composants critiques
  console.log('\n🧩 Composants critiques:');
  const componentResults = [];
  
  CRITICAL_COMPONENTS.forEach(component => {
    const fullPath = path.join(__dirname, '..', component);
    const result = analyzeFile(fullPath);
    
    if (result) {
      componentResults.push(result);
      const status = result.score >= 90 ? '✅' : result.score >= 70 ? '⚠️' : '❌';
      console.log(`  ${status} ${component} (Score: ${result.score}/100)`);
      
      if (result.issues.length > 0) {
        result.issues.forEach(issue => {
          const icon = issue.severity === 'high' ? '🔴' : 
                      issue.severity === 'medium' ? '🟡' : '🟢';
          console.log(`    ${icon} ${issue.type}: ${issue.matches.slice(0, 2).join(', ')}`);
        });
      }
    }
  });
  
  // Statistiques globales
  const allResults = [...pageResults, ...componentResults];
  const avgScore = allResults.reduce((sum, r) => sum + r.score, 0) / allResults.length;
  const highIssues = allResults.reduce((sum, r) => sum + r.issues.filter(i => i.severity === 'high').length, 0);
  
  console.log('\n📊 Résumé de l\'audit:');
  console.log(`  Score moyen: ${Math.round(avgScore)}/100`);
  console.log(`  Problèmes critiques: ${highIssues}`);
  console.log(`  Fichiers analysés: ${allResults.length}`);
  
  // Recommandations
  console.log('\n💡 Recommandations:');
  if (avgScore < 80) {
    console.log('  🔧 Appliquer les normes internationales manquantes');
    console.log('  📝 Ajouter les traductions manquantes');
    console.log('  🎯 Refactoriser les composants avec score < 70');
  } else {
    console.log('  ✅ Qualité d\'internationalisation satisfaisante');
  }
  
  // Sauvegarder le rapport
  const report = {
    timestamp: new Date().toISOString(),
    averageScore: avgScore,
    highIssues: highIssues,
    pages: pageResults,
    components: componentResults
  };
  
  const reportPath = path.join(__dirname, 'i18n-quality-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n📋 Rapport détaillé: ${reportPath}`);
}

if (require.main === module) {
  main();
}

module.exports = { analyzeFile, I18N_ISSUES };
