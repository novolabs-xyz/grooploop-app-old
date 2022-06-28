# Novo X - Template Starter

## _Repositorio base para proyectos Frontend con Next JS_

En este repositorio encontraremos configuraciones iniciales para un proyecto desde cero con Next JS como framework, Material UI v5 como UI Kit y Firebase como libreria para manejo de autenticacion.

## ✨Features

-  Registro / Login / Recuero de contraseña
-  Protección de rutas
-  Manejo de traducciones
-  Paginas para handleo de errores
-  Prettier y ESLint para convencion de codigo

## ⚙️ Instalación

1. En GitHub.com, visita la página principal del repositorio.
2. Encima de la lista de archivos, haga clic en _"Use this template"_.
3. Utiliza el menú desplegable de Propietario y selecciona la cuenta que quieres sea propietaria del repositorio.
4. Teclea el nombre de tu repositorio, y una descripción opcional.
5. Elige la visibilidad del repositorio. Para obtener más información, consulta la sección [acerca de los repositorios](https://docs.github.com/es/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).
6. Opcionalmente, para incluir la estructura de directorios y los archivos de todas las ramas en la plantilla, y no solo la rama predeterminada, seleccione _"Include all branches"_.
7. Opcionalmente, si la cuenta personal o la organización en la que estás haciendo esta creación utiliza cualquier GitHub Apps de GitHub Marketplace, selecciona cualquier app que quieras utilizar en el repositorio.

Luego de generar el repositorio, debemos instalar las dependencias del mismo (dependencies and devDependencies)

```sh
cd [nombre_del_proyecto]
npm install
```

Para inicializar el servidor debemos ejecutar el siguiente comando...

```sh
npm run dev
```

## 🧪 Scripts

| Comando         | Reseña                                                       |
| --------------- | ------------------------------------------------------------ |
| npm run build   | _Compila el codigo_                                          |
| npm start       | _Inicia el servidor con los archivos previamente compilados_ |
| npm run lint    | _Analiza y repara errores de sintaxis_                       |
| npm run formatt | _Analiza y repara errores de formato en el código_           |

Ademas de los scripts aqui nombrados, el proyecto tiene instalada la libreria [Husky](https://github.com/typicode/husky) para generar hooks ejecutables durante las interacciones del repositorio con Github.

Estructura correcta para un commit

```sh
[tipo_de_feature](contexto):descripcion
```

Por ejemplo:

```sh
feat(auth):implement signup and signin with firebaste
```

Sumado a la convencion para los commits, este template tiene instalado un hook para limpiar el codigo automaticamente al ser commiteado con las herramientas ESlint y Prettier.

## 📂 Estructura de carpetas

```sh
├── pages  # Paginas de nuestra app (Publicas y privadas)
├── public  # Ficheros publicos + workers + manifest
├── src  # Ficheros fuente
├── ├── components  # Componentes
├── ├─── ├── atoms  # Componentes atómicos reutilizables (UI Kit)
├── ├─── ├── molecules # Componentes reutilizables. Conjunto de componentes atomos
├── ├─── ├── organisms # Componentes no reutilizables. Estructuras (layout)
├── ├── context # Contextos de React aplicados.
├── ├─── ├── AuthContext.tsx # Contexto para manejo de autenticacion de usuario y sesion
├── ├── hooks # Custom hooks para reutilziacion de logica
├── ├── interfaces # Tipado
├── ├── libs # Implementacion de librerias de terceros (firebase, google location, etc)
├── ├── styles # Theming y estilos globales
├── ├── translations # Traducciones
├── ├── utils # Funciones utiles modularizadas para reutilizar
├── .env.example # Variables de entorno
└── README.md
```

## 🗝️ Autenticación

[![authUser.jpg](https://i.postimg.cc/x8GjKXqP/authUser.jpg)](https://postimg.cc/jn5rTdHW)

### 👤 Manejo de usuario

Como paso principal, debemos configurar las variables de entorno relacionadas a Firebase, de acuerdo a cada proyecto.

Luego, dentro del fichero `@libs/firebase` encontramos las funciones necesarias para autenticar al usuario.
Para poder recuperar la informacion del mismo, empleamos el contexto anteriormente mencionado `@context/AuthContex` el cual nos retornará el objeto `currentUser` con la data mappeada como asi tambien, una variable `loading` y un objeto `error`.

Desde cualquier archivo podemos importar el `currentUser` que nos provee nuestro contexto para saber si hay usuario en sesion o no y poder recuperar la informacion a mostrar.

Por ejemplo, desde un componente `Navbar.tsx` podemos hacer lo siguiente

```tsx
import { useContext } from 'react'

export const Navbar = () => {
   const { currentUser } = useContext(AuthContext)

   return (
    <nav>
         <p>Navbar</p>

         <div>
            <a href="/">
               Home
            </a>
            <a href="/">
               ..
            </a>
         </div>

         {currentUser && (
            <>
               <a href="/user/profile">
                  Perfil
               </a>
               <strong>{currentUser.email}</strong>
               <LogOutBtn />
            </>
         )}
      </>)
```

Para el caso de la autenticacion, debemos importar la funcion y pasarle los parametros necesarios para poder ejecutarla.

Por ejemplo, en el componente `SignIn.tsx` podemos hacer lo siguiente.

```tsx
import { logInWithEmailAndPassword } from '@libs/firebase'

const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
   event.preventDefault()
   const { error } = await logInWithEmailAndPassword(email, password.text)
   if (error.status) {
      setErrorSignin(error.message)
   } else {
      // ...
   }
}
```

## 🗺️ Traducciones

Para poder manejar las traducciones dentro de nuestra aplicacion debemos hacer uso del custom hook `@hooks/useTranslate` el cual reconoce el idioma del navegador y devuelve un objeto con las traducciones.

```sh
├── translations # Traducciones
├── ├── es
├── ├── ├── index.ts
├── ├── en
├── ├── ├── index.ts
```

```ts
// en
export default {
   example_title: 'My title',
} as const

// es
export default {
   example_title: 'Mi titulo',
} as const
```

Para utilizar el texto traducido dentro de un componente, basta con importar el custom hook y renderizar el texto accediendo al mismo a traves de la llave dentro del objeto

Por ejemplo, en un componente `Title.tsx`

```tsx
import { useTranslate } from '@hooks/useTranslate

const Title = () => {
  const { t } = useTranslate()

  return <h1>{t.example_title}</h1>
}

export default Title

```

## 🛡️ Proteccíon de rutas

La estrategia utilizada para proteger las rutas es de un componente padre (de jerarquia superior) el cual envuelve a sus componentes hijos, encargado de analizar si se encuentra un usuario en sesion o no y hacer las redirecciones pertinentes.

```tsx
import { AuthContext } from '@context/AuthContext'
import { useRouter } from 'next/router'
import { FC, useContext } from 'react'

const AuthRoute: FC = ({ children }) => {
   const { currentUser } = useContext(AuthContext)
   const router = useRouter()

   if (currentUser) {
      return <>{children}</>
   } else {
      router.replace('/signin')
      return <></>
   }
}

export default AuthRoute
```

Para proteger una pagina (ruta ej. `/user/profile`) debemos hacerlo de la siguiente manera

```tsx
const PrivatePage: NextPage = () => {
   return (
      <PrivateRoute>
         <Layout>
            <Container maxWidth="lg">
               <Typography variant="h1" gutterBottom>
                  USER Profile
               </Typography>
            </Container>
         </Layout>
      </PrivateRoute>
   )
}
```

## 💫 Proximamente

-  Implementacion de test automaticos
-  Creacion de estructura de servicios custom
-  UI Components
