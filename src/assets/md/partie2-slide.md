**La structure** — Un composant React est une fonction JavaScript dont le nom commence par une majuscule. Elle importe ses dépendances en haut, déclare sa logique au milieu, et retourne du JSX qui décrit l'interface.
---
**useState** — Le hook `useState(valeurInitiale)` retourne un tableau de deux éléments : la valeur actuelle et son setter. À chaque appel du setter, React re-rend automatiquement le composant avec la nouvelle valeur.
---
**Le JSX** — C'est du HTML enrichi de JavaScript. Les accolades `{ }` permettent d'injecter n'importe quelle expression JS directement dans le rendu. Les événements s'écrivent en camelCase (`onClick`, `onChange`…).

> **Règle d'or** — On ne modifie jamais l'état directement (`compteur = 1` est interdit). On passe toujours par le setter (`setCompteur(1)`), sinon React ne détecte pas le changement et n'actualise pas l'interface.