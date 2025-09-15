# Guide de Style - TutorApp

## Système de Layout

### Conteneurs
- **`.container`** : Conteneur principal avec marges automatiques
- **`.safe-area`** : Marges sécurisées pour mobile (évite les bords d'écran)

### Espacements de Section
- **`.section-padding`** : Espacement vertical standard pour les sections
  - Mobile : 64px (4rem)
  - Tablet : 80px (5rem) 
  - Desktop : 96px (6rem)

### Grilles
- **`.grid-gap-sm`** : 16px
- **`.grid-gap-md`** : 24px → 32px (responsive)
- **`.grid-gap-lg`** : 32px → 48px (responsive)

### Largeurs de Contenu
- **`.content-width-sm`** : 672px (42rem) - optimal pour la lecture
- **`.content-width-md`** : 768px (48rem)
- **`.content-width-lg`** : 896px (56rem)
- **`.content-width-xl`** : 1024px (64rem)

## Typographie

### Classes de Titres
- **`.heading-hero`** : Font-weight 800, letter-spacing -0.02em
- **`.heading-xl`** : Font-weight 700, letter-spacing -0.01em
- **`.heading-lg`** : Font-weight 600, letter-spacing -0.005em
- **`.heading-md`** : Font-weight 600
- **`.heading-sm`** : Font-weight 500

### Police
- **Inter** pour tous les titres (comme OpenClassrooms)
- Poids disponibles : 400, 500, 600, 700, 800

## Composants de Layout

### PageLayout
```tsx
<PageLayout>
  <div>Contenu de la page</div>
</PageLayout>
```

### CenteredPageLayout
```tsx
<CenteredPageLayout maxWidth="max-w-lg">
  <div>Contenu centré</div>
</CenteredPageLayout>
```

### SectionLayout
```tsx
<SectionLayout 
  title="Titre de la section"
  description="Description optionnelle"
>
  <div>Contenu de la section</div>
</SectionLayout>
```

## Breakpoints

- **sm** : 640px
- **md** : 768px  
- **lg** : 1024px
- **xl** : 1200px (largeur optimale)
- **2xl** : 1400px

## Marges de Sécurité

### Mobile
- Minimum 16px sur les côtés
- Utilise `env(safe-area-inset-*)` pour les écrans avec encoche

### Desktop
- Marges progressives selon la taille d'écran
- Maximum 1400px de largeur pour la lisibilité

## Bonnes Pratiques

1. **Toujours utiliser** `.container .safe-area` pour le contenu principal
2. **Utiliser** `.section-padding` pour l'espacement vertical des sections
3. **Préférer** les composants de layout pour la cohérence
4. **Respecter** les largeurs de contenu pour la lisibilité
5. **Tester** sur mobile pour vérifier les marges