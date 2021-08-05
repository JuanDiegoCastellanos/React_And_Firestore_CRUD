# REACT AND FIREBASE - FIRESTORE CRUD

**Proyecto en el cual se utiliza Firestore para almacenar los datos enviados por medio del Front-end con REACT**

## **Comenzando** 🚀

_Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas._

### **Pre-requisitos** 📋

_Dependencias que necesitas para ejecutar, construir y desarrollar_



```
>> npx create-react-app nombre_aplicacion

# En la Carpeta de la aplicación  React recién creada

# Esto es un framework para front-end, es multiplataforma y de muy fácil manejo. Lo recomiendo mucho:

>> yarn add bootstrap 

# Este es la dependencia para trabajar Firebase y sus Web services desde react: 

>> yarn add firebase 

# Depencia necesaria para trabajar Routs en React:

>> yarn add react-router-dom 

# Finalmente haz un gitclone de Este proyecto, si seguiste los pasos anteriores solo tendrías que  copiar La carpeta src de este repo en tu carpeta local  de App  React.

```

## Despliegue 📦

_Para Ejecutar y desplegar el proyecto necesitas:_

- Ir a la página oficial de [Firebase](https://console.firebase.google.com/), crear una cuenta o logearte con alguna y crear un proyecto.
- Teniendo un proyecto en Firebase, te diriges al proyecto >> configuraciones >> Buscas un apartado _SDK setup and configuration_ , de ahí copias el siguiente bloque de código:
![Image text]('')

- Ese bloque de código lo pegaras en un archivo nuevo que estará dentro de: _**/directorio_AppReact/src/firebase_config.js**_

```
# Archivo Firebase_Config.js

import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "xxxxxxxxxxxxxxxxxx",
    authDomain: "xxxxxxxxxxx.firebaseapp.com",
    databaseURL: "https://xxxxxxxxxxx-default-rtdb.firebaseio.com",
    projectId: "xxxxxxxxxx",
    storageBucket: "xxxxxxxxxxx.appspot.com",
    messagingSenderId: "xxxxxxxxxxx",
    appId: "1:xxxxxxxxxx:web:xxxxxxxxxxxxxxx",
    measurementId: "xx-xxxxxxxx"
  };
  firebase.initializeApp(firebaseConfig);
  const store = firebase.firestore()

  export {store}
```
## Construido con 🛠️

* [React](https://es.reactjs.org/) - El framework web usado
* [Firebase/Firestore](https://console.firebase.google.com/) - Database, Framework, and others.
* [Visual Studio Code](https://code.visualstudio.com/) - Editor de texto

## Autores ✒️

* **Juan Diego Castellanos Jerez** - *Owner and Developer* - [Juan Diego Castellanos Jerez](https://www.linkedin.com/in/juan-diego-castellanos-jerez-944267212/)

## Licencia 📄

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE.md](LICENSE.md) para detalles

## Expresiones de Gratitud 🎁

* Agradezco a quienes quiera apoyar con una donación [@JuanCaste02](https://paypal.me/JuanCaste02) 📢




---
Feliz Código!!