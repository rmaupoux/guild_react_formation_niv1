## Le Context API

Le Context API permet de rendre une donnée **accessible à n'importe quel composant de l'arbre**, sans la faire passer manuellement de parent en enfant. C'est un "tunnel" qui court-circuite les intermédiaires.---

### Les 3 pièces du Context API

**1. Créer le contexte** — une seule fois, dans un fichier dédié :

```jsx
import { createContext } from 'react'

export const UserContext = createContext(null)
//                                        ↑ valeur par défaut
```

**2. Fournir la donnée avec le Provider** — on enveloppe la partie de l'arbre qui en a besoin :

```jsx
function App() {
  const [user] = useState({ name: 'Alice', photo: '...' })

  return (
    <UserContext.Provider value={user}>
      <Layout />  {/* plus besoin de passer user en prop */}
    </UserContext.Provider>
  )
}
```

**3. Consommer la donnée avec `useContext`** — directement là où c'est utile, sans intermédiaire :

```jsx
import { useContext } from 'react'
import { UserContext } from './UserContext'

function Avatar() {
  const user = useContext(UserContext)
  //     ↑ accès direct, peu importe la profondeur

  return <img src={user.photo} alt={user.name} />
}
```

---

### Ce que ça change

`<Layout>`, `<Sidebar>` et `<UserCard>` n'ont plus aucune connaissance de `user`. Leurs signatures sont propres, leur couplage est réduit. Si demain `user` change de forme, seuls `<App>` (qui le fournit) et `<Avatar>` (qui le consomme) sont concernés.

> **Quand l'utiliser ?** Le Context est fait pour des données **globales ou semi-globales** : utilisateur connecté, thème, langue, panier. Pour des données locales à deux ou trois composants, les props restent la bonne approche — elles sont explicites et plus faciles à tracer.