### 5. Cycle de vie du composant
**Les 3 phases** — Un composant monte (apparaît dans le DOM), se met à jour (re-rendu à chaque changement d'état ou de props), puis se démonte (disparaît). `useEffect` permet d'accrocher du code à chacune de ces phases.

![Props Drilling sans Context](./src/assets/images/cycle.png)
---
### 5. Cycle de vie du composant
**Le tableau de dépendances** — C'est lui qui contrôle quand `useEffect` se déclenche : `[]` = une seule fois au montage, `[dep]` = à chaque fois que `dep` change, rien = à chaque rendu. Le `return` à l'intérieur de l'effet sert de cleanup au démontage — indispensable pour annuler les timers et les listeners.
---
### 5. Cycle de vie du composant
**Le re-rendu** — Chaque `setState()`, changement de props ou mise à jour de Context ré-exécute la fonction du composant entièrement. React compare alors l'ancien et le nouveau vDOM, et ne touche que les nœuds qui ont réellement changé — c'est la réconciliation vue en début de formation, qui boucle le tout.