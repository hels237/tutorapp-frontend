# 🐳 Guide Docker - TutorApp

## Installation de Docker

### Windows
1. Télécharger [Docker Desktop](https://docs.docker.com/desktop/windows/install/)
2. Installer et redémarrer
3. Vérifier : `docker --version`

### macOS
1. Télécharger [Docker Desktop](https://docs.docker.com/desktop/mac/install/)
2. Installer et lancer Docker Desktop
3. Vérifier : `docker --version`

### Linux (Ubuntu/Debian)
```bash
# Installation rapide
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Ajouter l'utilisateur au groupe docker
sudo usermod -aG docker $USER

# Redémarrer la session
newgrp docker
```

## Lancement de l'application

### Méthode 1 : Script automatique (Recommandé)
```bash
./docker-run.sh
```

### Méthode 2 : Commandes manuelles
```bash
# Construire et lancer
docker-compose up --build -d

# Voir les logs
docker-compose logs -f

# Arrêter
docker-compose down
```

### Méthode 3 : Docker simple
```bash
# Construire l'image
docker build -t tutorapp .

# Lancer le conteneur
docker run -p 3000:3000 tutorapp
```

## Commandes utiles

```bash
# Voir les conteneurs en cours
docker ps

# Voir les logs en temps réel
docker-compose logs -f tutorapp

# Redémarrer l'application
docker-compose restart

# Reconstruire complètement
docker-compose up --build --force-recreate

# Nettoyer les images inutilisées
docker system prune
```

## Accès à l'application

Une fois lancée, l'application est accessible sur :
- **URL** : http://localhost:3000
- **Port** : 3000

## Dépannage

### Port déjà utilisé
```bash
# Changer le port dans docker-compose.yml
ports:
  - "3001:3000"  # Utilise le port 3001 au lieu de 3000
```

### Problème de permissions (Linux)
```bash
sudo chown -R $USER:$USER .
```

### Reconstruire complètement
```bash
docker-compose down
docker system prune -f
docker-compose up --build
```