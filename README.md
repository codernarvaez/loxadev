# Loxadev — Frontend

SPA en React (Create React App) para el sitio Loxadev: Redux, React Router, styled-components y Firebase (Analytics). El backend HTTP usa variables `REACT_APP_*`.

## Requisitos

- **Node.js** ≥ 20  
- **npm** ≥ 11.14 (alineado con Firebase App Hosting y `package-lock.json`; puedes usar `npx npm@11.14.0 ci`)

## Instalación y desarrollo en local

```bash
git clone <tu-repo>
cd loxadev-frontend
npx npm@11.14.0 ci
npm start
```

Abre [http://localhost:3000](http://localhost:3000). Los cambios recargan solos.

### Variables de entorno

Create React App solo incluye variables que empiezan por `REACT_APP_`.

| Archivo | Uso |
|--------|-----|
| `.env.development` | Valores por defecto para `npm start` (puede versionarse). |
| `.env.local` | Sobrescribe desarrollo; **no** subir secretos reales si el repo es público (está en `.gitignore`). |
| `.env.production` | Build de producción (`npm run build`). |
| `.env.test` | Tests (`npm test`). |

Plantilla sin valores reales: **`.env.example`**. Para una copia rápida en tu máquina:

```bash
cp .env.example .env.local
# edita .env.local con tus claves y URLs de API
```

Firebase y APIs se parametrizan así (no van hardcodeadas en el código):

- **Firebase**: `REACT_APP_FIREBASE_API_KEY`, `REACT_APP_FIREBASE_AUTH_DOMAIN`, `REACT_APP_FIREBASE_PROJECT_ID`, `REACT_APP_FIREBASE_STORAGE_BUCKET`, `REACT_APP_FIREBASE_MESSAGING_SENDER_ID`, `REACT_APP_FIREBASE_APP_ID`, `REACT_APP_FIREBASE_MEASUREMENT_ID`
- **APIs propias** (cuando existan backend definitivos): `REACT_APP_API_USERS_URI`, `REACT_APP_API_LOXADEV_SITE`

## Scripts útiles

| Comando | Descripción |
|--------|-------------|
| `npm start` | Servidor de desarrollo |
| `npm test` | Tests (CI: `CI=true npm test -- --watchAll=false`) |
| `npm run build` | Genera la carpeta `build/` en modo producción |
| `npm run start:prod` | Tras un build, sirve la carpeta `build` con `serve` (útil para comprobar el bundle localmente) |

## Despliegue en local (probar el mismo artefacto que producción)

### 1. Build de producción

```bash
npx npm@11.14.0 ci
npm run build
```

Se usa automáticamente **`.env.production`** (valores “producción” para Firebase y el cliente).

### 2. Servir el estático en tu máquina

Opción A — script del proyecto:

```bash
npm run start:prod
```

Por defecto **serve** usa la variable `PORT` si existe; si no, el puerto por defecto del paquete.

Opción B — CLI explícito:

```bash
npx serve -s build -l 3000
```

Abre la URL que imprime la consola (p. ej. `http://localhost:3000`). Las rutas del SPA las resuelve `serve -s` (fallback a `index.html`).

### 3. Desplegar a Firebase App Hosting desde tu PC (opcional)

Requiere [Firebase CLI](https://firebase.google.com/docs/cli) ≥ 14.4, proyecto en plan **Blaze** y backend de App Hosting ya creado y enlazado en `firebase.json`.

```bash
npm install -g firebase-tools
firebase login
firebase deploy --only apphosting:loxadev-web --project <TU_PROJECT_ID>
```

Si el `backendId` no es `loxadev-web`, cámbialo en `firebase.json` o usa `--only apphosting:<id>`.

El flujo sube el código y construye en la nube con la misma lógica que el repositorio conectado a GitHub; en local puedes validar antes con los pasos 1–2.

## CI en GitHub Actions

El workflow **CI** ejecuta `npm ci` (con npm 11.14), tests y `npm run build`. Los secretos de APIs para el build en la nube puedes definirlos en Firebase App Hosting (entorno del backend) o en GitHub Actions si usas despliegue manual.

## Referencias

- [Create React App — Variables de entorno](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Firebase App Hosting](https://firebase.google.com/docs/app-hosting)
