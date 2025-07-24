# WhatsApp Clone - Desafío Frontend

Este proyecto es una simulación de una app de mensajería estilo WhatsApp, desarrollada en **React**.

Permite al usuario navegar entre distintos chats de personajes de la serie *Los Simpsons*, leer sus mensajes y enviar nuevos mensajes que se almacenan en memoria mediante el estado global del contexto.

---

## Características

1. Vista principal con lista de chats activos ordenados por hora del último mensaje.
2. Sistema de búsqueda para filtrar contactos.
3. Vista de chat individual con historial de mensajes.
4. Envío de mensajes que se muestran al instante.
5. Doble check en los mensajes enviados por el usuario.
6. Diseño responsivo basado en la experiencia WhatsApp Web.
7. Simulación de funciones en desarrollo como videollamadas y envío de archivos.

---

## Tecnologías y Librerías

- **React** — Librería principal para construir la interfaz de usuario.
- **React Context API** — Para el manejo del estado global de los chats.
- **Hooks** — `useState`, `useParams`, `useContext`.
- **React Router DOM** — Navegación entre vistas (Home y Chat).
- **CSS personalizado** — Estilos creados a medida en distintos archivos `.css`.

---

## Estructura del proyecto

src/
│
├── assets/ # Avatares de los personajes
├── components/
│ └── ChatList.jsx # Muestra lista de chats ordenados
├── context/
│ └── ChatContext.jsx # Estado global para todos los chats
├── pages/
│ ├── Home.jsx # Página principal con barra de búsqueda
│ └── Chat.jsx # Vista individual del chat seleccionado
├── styles/
│ ├── App.css
│ ├── Chat.css
│ ├── Chatlist.css
│ └── Home.css
└── App.jsx, main.jsx # Entradas principales de la app


---

## ¿Cómo se simulan los mensajes?

Los mensajes iniciales están precargados en `ChatContext.jsx` para cada personaje. Al escribir un nuevo mensaje en un chat:

- Se guarda en el estado global del contexto.
- Se marca automáticamente como enviado por el usuario (`from: "me"`).
- Se renderiza con el ícono de doble check.

---

## Dificultades presentadas

- Manejo del estado global para múltiples chats de forma eficiente.
- Mostrar correctamente los mensajes ordenados cronológicamente.
- Implementar íconos condicionales según el origen del mensaje (`from: "me"`).
- Evitar conflictos al renderizar múltiples íconos o llamadas a funciones aún no implementadas (como llamada por video o emojis).
- Crear una UI coherente y fiel a WhatsApp Web con CSS puro.

---

## Iniciación del proyecto (modo desarrollo)

```bash
npm install
npm run dev

## Links al proyecto

- Repositorio en GitHub: https://github.com/Pablorui93/MI-TP-FINAL-FRONTEND-CON-REACT.git
- Despliegue en Vercel: https://mi-tp-final-frontend-con-react.vercel.app/
