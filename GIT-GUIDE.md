# 📚 Guide Git - TutorApp

## 🚀 Pousser sur GitHub/GitLab

### 1. Créer un repo sur GitHub/GitLab
1. Aller sur [GitHub](https://github.com) ou [GitLab](https://gitlab.com)
2. Cliquer sur "New repository" / "Nouveau projet"
3. Nommer le repo : `tutorapp-frontend`
4. **NE PAS** initialiser avec README (le projet existe déjà)
5. Copier l'URL du repo (ex: `https://github.com/username/tutorapp-frontend.git`)

### 2. Connecter le repo local au distant
```bash
# Remplacer par votre URL
git remote add origin https://github.com/VOTRE_USERNAME/tutorapp-frontend.git

# Vérifier la connexion
git remote -v
```

### 3. Pousser le code
```bash
# Première fois (créer la branche main)
git branch -M main
git push -u origin main

# Prochaines fois
git push
```

## 🔄 Commandes Git utiles

### Ajouter des modifications
```bash
# Voir les changements
git status

# Ajouter tous les fichiers modifiés
git add .

# Ou ajouter un fichier spécifique
git add nom-du-fichier.tsx

# Commit avec message
git commit -m "✨ Add new feature"

# Pousser vers GitHub/GitLab
git push
```

### Messages de commit recommandés
```bash
git commit -m "✨ Add new feature"
git commit -m "🐛 Fix bug in login form"
git commit -m "💄 Update UI design"
git commit -m "📱 Improve mobile responsiveness"
git commit -m "🔧 Update configuration"
git commit -m "📝 Update documentation"
```

### Voir l'historique
```bash
# Voir les commits
git log --oneline

# Voir les différences
git diff
```

## 🌿 Branches (optionnel)
```bash
# Créer une nouvelle branche
git checkout -b feature/nouvelle-fonctionnalite

# Changer de branche
git checkout main

# Fusionner une branche
git merge feature/nouvelle-fonctionnalite
```

## 🆘 En cas de problème

### Annuler le dernier commit (avant push)
```bash
git reset --soft HEAD~1
```

### Forcer un push (attention !)
```bash
git push --force-with-lease
```

### Cloner le projet ailleurs
```bash
git clone https://github.com/VOTRE_USERNAME/tutorapp-frontend.git
```

## 📋 Checklist première fois
- [ ] Créer le repo sur GitHub/GitLab
- [ ] Copier l'URL du repo
- [ ] `git remote add origin URL`
- [ ] `git branch -M main`
- [ ] `git push -u origin main`
- [ ] Vérifier sur GitHub/GitLab que les fichiers sont bien là

## 🎯 Prochaines étapes
Une fois sur GitHub/GitLab, vous pourrez :
- Partager le lien avec votre ami
- Configurer des Actions/CI pour le déploiement automatique
- Créer des Issues pour tracker les bugs/features
- Collaborer avec d'autres développeurs