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
0. 1 non-regression testee est l'assurance manifeste que
    a. 1 modification du code à 1 endroit fait dysfonctionner (casse) 0 fonctionnalite critique
    b. le code et les tests ne dependent pas 
        i. des donnees ni 
        ii. de leur contenu 
    pour fonctionner correctement.
1. les fonctionnalites critiques sont couvertes
    a. le menu est cliquable pour eviter
        i. une sortie immediate du site
        ii. une perte de confiance durable
    b. le defilement est accessible  
    c. le filtrage des evenements fonctionne
    d. les articles & sections statiques sont affichees
    e. le formulaire est cliquable
    f. le bas de page est affiche
### cas supplementaires a ne pas oublier pour le cahier de recette de bout en bout
1. b.c.d.e.f. qu'affiche le site internet si
    i. 0 image?
    ii. image non-trouvee?
    iii. format de donnees inconnu?