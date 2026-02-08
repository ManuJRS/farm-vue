# Farm Vue – Headless WordPress Frontend

Frontend del sitio web de **Farm** construido con **Vue 3 + Vite + Tailwind CSS**, consumiendo contenido desde **WordPress Headless (ACF)** a través de API REST.

El proyecto está enfocado en ser:

- Rápido
- Escalable
- Fácil de mantener
- Totalmente desacoplado del CMS

---

## 🧱 Stack Tecnológico

- **Vue 3** (Composition API)
- **Vite**
- **TypeScript**
- **Tailwind CSS v4** (con tokens OKLCH)
- **WordPress Headless**
- **Advanced Custom Fields (ACF)**
- **Lucide Icons**
- **Arquitectura por dominios**

---

## 📁 Estructura del Proyecto

```txt
src/
├── api/                    # Servicios HTTP (WordPress API)
├── components/             # Componentes UI reutilizables
│   ├── hero/
│   └── home/
├── composables/             # Hooks de carga de datos
├── domain/                  # Lógica de dominio
│   └── home/
│       ├── models/          # Interfaces y modelos
│       └── mappers/         # Mappers ACF → Model
├── layouts/                 # Layouts base
├── views/                   # Vistas por ruta
├── assets/                  # Assets estáticos
├── styles/                  # Estilos globales
└── main.ts
```
