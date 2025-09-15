# 📤 Partage du Projet TutorApp

## Pour votre ami en France

### 📦 Fichiers à envoyer
Envoyez tout le dossier `TutorApp` ou créez une archive :

```bash
# Créer une archive (optionnel)
tar -czf tutorapp.tar.gz TutorApp/
# ou
zip -r tutorapp.zip TutorApp/
```

### 🚀 Instructions pour votre ami

1. **Extraire le projet** (si archive)
2. **Ouvrir un terminal** dans le dossier TutorApp
3. **Lancer une seule commande** :
   ```bash
   ./docker-run.sh
   ```

C'est tout ! L'application sera accessible sur http://localhost:3000

### 📋 Prérequis pour votre ami
- Docker installé (voir DOCKER-GUIDE.md)
- Aucune connaissance technique requise

### 🔧 Si problème
Votre ami peut utiliser les commandes alternatives :
```bash
# Si le script ne fonctionne pas
docker-compose up --build

# Ou installation locale
./setup.sh
pnpm dev
```

### 📞 Support
- Logs : `docker-compose logs -f`
- Arrêter : `docker-compose down`
- Redémarrer : `docker-compose restart`

## 🎯 Avantages Docker
- ✅ Pas besoin d'installer Node.js
- ✅ Pas de problème de versions
- ✅ Environnement identique partout
- ✅ Lancement en une commande
- ✅ Isolation complète