# 724 Events

## Description
L'application est le site d'une agence evenementielle.
## Pre-requis
- NodeJS  >= v16.14.1

## Installation
- `yarn install`

## Lancement de l'application
- `yarn start`

## Tests
- `yarn test`

### plan de non-regression
0. une non-régression testée est l'assurance manifeste 
    a. qu'une modification du code à 1 endroit fait dysfonctionner (casse) 0 fonctionnalité critique
    b. que le code ou les tests ne dépendent pas du contenu des données pour fonctionner correctement
1. les fonctionnalites critiques sont couvertes
    a. le menu est cliquable pour éviter
        i. une sortie immédiate du site
        ii. une perte de confiance durable
    b. le defilement est accessible  
    c. les tri & filtrage des evenements sont faits
    d. les articles & sections statiques sont affichees
    e. le formulaire est cliquable
    f. le bas de page est affiche
### cas spécifiques à ne pas oublier pour le cahier de recette
1. b.c.d.e.f.
    i. 0 image
    ii. image non-trouvee
    iii. format de données inconnu
        
    b. iv. pagination cliquable