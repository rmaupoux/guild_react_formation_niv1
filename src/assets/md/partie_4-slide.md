
## 4. Context API
**La solution : le Context API** — Il repose sur trois éléments : `createContext` crée le tunnel, `Provider` l'enveloppe autour de l'arbre en y injectant la valeur, et `useContext` permet à n'importe quel composant enfant d'y accéder directement, sans intermédiaire.

![Props Drilling sans Context](./src/assets/images/props-drilling-no-context.png)

---
### 4. Context API
**Ce que ça change** — Les composants intermédiaires n'ont plus aucune connaissance de la donnée. Si elle évolue, seuls le fournisseur et le consommateur sont impactés. Le reste de l'arbre est découplé.

> **À retenir** — Le Context est fait pour des données globales (utilisateur connecté, thème, langue). Pour des données locales à deux ou trois composants, les props restent la bonne approche : elles sont explicites et plus faciles à tracer.