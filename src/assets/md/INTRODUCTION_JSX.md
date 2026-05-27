# Le JSX

## Qu'est-ce que c'est ?

<div class="two-columns">
  <div>
JSX est une syntaxe qui permet d'écrire du <strong>code HTML/XML directement en JavaScript</strong>.<br/><br/> C'est l'une des caractéristiques principales de React qui rend le développement de composants plus intuitif et lisible.
  </div>
  <div>
<img src="./src/assets/images/jsx.jpeg" alt="JSX Overview" />
  </div>
</div>
---

## Règles de Base du JSX

### 1. **Un seul élément racine**
Chaque composant JSX doit retourner un seul élément parent. Si vous avez plusieurs éléments, enveloppez-les dans un `<>` (Fragment) ou une `<div>`.

```jsx
// ❌ Incorrect
return (
  <h1>Titre</h1>
  <p>Contenu</p>
);

// ✅ Correct
return (
  <>
    <h1>Titre</h1>
    <p>Contenu</p>
  </>
);
```
---

### 2. **Les attributs sont en camelCase**
Les attributs HTML sont écrits en camelCase, pas en kebab-case.

```jsx
// ❌ Incorrect
<div class="container" data-value="test"></div>

// ✅ Correct
<div className="container" data-value="test"></div>
<input maxLength={10} />
```
---
### 3. **Les expressions JavaScript entre accolades**
Pour utiliser des variables ou des expressions JavaScript, utilisez des accolades `{}`.

```jsx
const name = "Alice";
const count = 5;

return (
  <div>
    <h1>Bonjour {name}!</h1>
    <p>Vous avez {count} messages</p>
    <p>Résultat: {2 + 3}</p>
  </div>
);
```
---
### 4. **Les conditions avec les opérateurs ternaires**
Utilisez les opérateurs ternaires `? :` ou `&&` pour le rendu conditionnel.

```jsx
// Avec l'opérateur ternaire
return (
  <div>
    {isLoggedIn ? <Welcome /> : <Login />}
  </div>
);

// Avec &&
return (
  <div>
    {isAdmin && <AdminPanel />}
  </div>
);
```
---
### 5. **Les listes avec .map()**
Pour afficher une liste d'éléments, utilisez la méthode `.map()`.

```jsx
const items = ["Pomme", "Banane", "Orange"];

return (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```
---
### 6. **Les attributs de style**
Les styles doivent être des objets JavaScript, pas des chaînes.

```jsx
// ❌ Incorrect
<div style="color: red; font-size: 16px;"></div>

// ✅ Correct
const styles = { color: "red", fontSize: "16px" };
<div style={styles}></div>

// Ou directement
<div style={{ color: "red", fontSize: "16px" }}></div>
```
---
### 7. **Les événements sont en camelCase**
Les gestionnaires d'événements doivent être en camelCase et pointer vers une fonction.

```jsx
// ❌ Incorrect
<button onclick={handleClick}>Cliquer</button>

// ✅ Correct
<button onClick={handleClick}>Cliquer</button>
<input onChange={(e) => setText(e.target.value)} />
```
---
### 8. **Fermeture obligatoire des balises**
Toutes les balises doivent être fermées, y compris les balises auto-fermantes.

```jsx
// ❌ Incorrect
<img src="image.png">
<input type="text">

// ✅ Correct
<img src="image.png" />
<input type="text" />
```
---
## Résumé des Points Clés

| Règle | Exemple |
|-------|---------|
| Un élément racine | `<>...</>` ou `<div>...</div>` |
| camelCase pour attributs | `className`, `maxLength`, `onClick` |
| Variables en {} | `{variableName}` |
| Conditions | `{condition ? true : false}` |
| Listes | `.map()` avec une `key` |
| Styles | Objet JavaScript `{{ color: "red" }}` |
| Événements | `onClick`, `onChange`, `onSubmit` |
| Balises fermées | `<img />`, `<input />` |

---

Avec ces règles, vous êtes prêt à écrire du JSX efficace et lisible ! 🚀
