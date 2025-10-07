# Práctica 03 - Frameworks de Front-End

🍿 **CineFlix** - Catálogo de películas estilo Netflix desarrollado con React y Vite

## 🎬 Descripción del Proyecto

CineFlix es una aplicación web que simula un catálogo de películas estilo Netflix. Permite a los usuarios explorar un catálogo de películas, ver detalles, buscar por título o director, filtrar por género, y gestionar una lista de favoritos.

## ✨ Características Principales

### 🎭 Catálogo de Películas
- **Películas Destacadas** - Sección especial con las mejores películas
- **Grid Responsivo** - Visualización adaptable a diferentes tamaños de pantalla
- **Información Detallada** - Año, duración, calificación, género y director

### 🔍 Sistema de Búsqueda y Filtros
- **Búsqueda por Texto** - Buscar por título de película o director
- **Filtro por Género** - Drama, Ciencia Ficción, Acción, Fantasía, etc.
- **Ordenamiento** - Por título, año de estreno o calificación

### ❤️ Sistema de Favoritos
- **Agregar/Quitar Favoritos** - Gestión completa de películas favoritas
- **Estadísticas Personales** - Duración total, calificación promedio, género favorito
- **Distribución por Géneros** - Visualización gráfica de preferencias

### 📱 Detalles de Películas
- **Vista Detallada** - Información completa de cada película
- **Sinopsis Completa** - Descripción detallada de la trama
- **Acciones Interactivas** - Reproducir, agregar a favoritos, compartir

## 🛠️ Tecnologías Utilizadas

- **React 18** - Biblioteca de JavaScript para UI
- **Vite** - Herramienta de construcción ultrarrápida
- **CSS3** - Estilos modernos con tema Netflix
- **Hooks de React** - useState, useEffect para gestión de estado
- **Responsive Design** - Adaptable a móviles y desktop

## � Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar o descargar el proyecto
# Navegar al directorio del proyecto

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# El servidor estará disponible en http://localhost:3000
```

### Scripts Disponibles
```bash
npm run dev      # Servidor de desarrollo
npm run build    # Construcción para producción
npm run preview  # Vista previa de la construcción
npm run lint     # Análisis de código
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/
│   ├── Header.jsx          # Encabezado principal
│   ├── MovieCatalog.jsx    # Catálogo principal de películas
│   ├── MovieDetails.jsx    # Vista detallada de película
│   └── Favorites.jsx       # Gestión de favoritos
├── App.jsx                 # Componente principal
├── App.css                 # Estilos de la aplicación
├── main.jsx               # Punto de entrada
└── index.css              # Estilos globales
```

## 🎯 Funcionalidades Implementadas

### 🎬 Catálogo Principal
- ✅ **8 películas clásicas** con información completa
- ✅ **Sección destacada** con las mejores películas
- ✅ **Cards interactivas** con hover effects
- ✅ **Navegación fluida** entre vistas

### 🔍 Búsqueda y Filtros
- ✅ **Búsqueda en tiempo real** por título y director
- ✅ **Filtro por género** con dropdown
- ✅ **Ordenamiento múltiple** (título, año, calificación)
- ✅ **Contador de resultados** dinámico

### ❤️ Sistema de Favoritos
- ✅ **Agregar/quitar favoritos** con un click
- ✅ **Lista personalizada** de películas favoritas
- ✅ **Estadísticas automáticas** (total, duración, promedio)
- ✅ **Análisis de géneros** con barras de progreso

### 📱 Vista de Detalles
- ✅ **Información completa** de cada película
- ✅ **Diseño tipo Netflix** con poster grande
- ✅ **Acciones interactivas** (reproducir, favoritos, compartir)
- ✅ **Navegación intuitiva** con botón de regreso

## 🎨 Diseño Visual

### 🌟 Tema Netflix
- **Colores:** Rojo Netflix (#e50914), negro (#141414), grises
- **Tipografía:** Moderna y legible
- **Layouts:** Grid responsivo y flexbox
- **Efectos:** Hover, transformaciones, gradientes

### 📱 Responsive Design
- **Mobile First** - Optimizado para dispositivos móviles
- **Breakpoints** - Adaptación a tablets y desktop
- **Grid Dinámico** - Ajuste automático de columnas

## 🔧 Conceptos de React Demostrados

### 🪝 Hooks Utilizados
- ✅ **useState** - Gestión de estado local
- ✅ **useEffect** - Efectos secundarios y ciclo de vida

### 🎯 Patrones de React
- ✅ **Componentes Funcionales** - Arquitectura moderna
- ✅ **Props y Callbacks** - Comunicación entre componentes
- ✅ **Renderizado Condicional** - UI dinámica
- ✅ **Listas y Keys** - Renderizado eficiente
- ✅ **Event Handling** - Interacciones del usuario
- ✅ **Estado Derivado** - Cálculos basados en estado

## � Características Técnicas

### ⚡ Rendimiento
- **Vite** para desarrollo ultrarrápido
- **Lazy Loading** de componentes
- **Optimización de re-renders**

### 🧹 Calidad de Código
- **ESLint** configurado para React
- **Código limpio** y bien estructurado
- **Comentarios** explicativos

### 🎯 Experiencia de Usuario
- **Transiciones suaves** en todas las interacciones
- **Feedback visual** inmediato
- **Navegación intuitiva** y consistente

## 📚 Objetivos de Aprendizaje Cumplidos

Este proyecto demuestra el dominio de:

- ✅ **Componentes React** y composición
- ✅ **Gestión de estado** con hooks
- ✅ **Manejo de eventos** y formularios
- ✅ **Renderizado de listas** y filtrado
- ✅ **Navegación entre vistas** sin router
- ✅ **CSS moderno** y responsive design
- ✅ **Arquitectura de aplicación** escalable

## 🎬 Datos de Películas

El catálogo incluye 8 películas clásicas:
- El Padrino (1972) - Drama
- Pulp Fiction (1994) - Crimen
- El Señor de los Anillos (2001) - Fantasía
- Forrest Gump (1994) - Drama
- Inception (2010) - Ciencia Ficción
- Matrix (1999) - Ciencia Ficción
- Interstellar (2014) - Ciencia Ficción
- Gladiator (2000) - Acción

## 🤝 Contribución

Este es un proyecto educativo para aprender React y desarrollo frontend. 

## 📄 Licencia

Proyecto con fines educativos - Práctica 03 de Frameworks de Front-End