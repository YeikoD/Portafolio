# Portafolio Personal

Portafolio web profesional diseñado para showcase de proyectos de desarrollo de software, con enfoque en sistemas de gestión livianos y interfaces de usuario intuitivas.

![Portafolio Preview](https://via.placeholder.com/800x400/2563eb/ffffff?text=Portafolio+Preview)

## 🌟 Características

- **Diseño Moderno y Responsivo**: Interfaz limpia que se adapta a cualquier dispositivo
- **Proyecto Estrella Destacado**: Sección especial para el proyecto más importante
- **Demo Integrada**: Espacio para video demostrativo de proyectos
- **Enlaces Directos**: Acceso rápido a GitHub, LinkedIn y descarga de CV
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Navegación Intuitiva**: Menú responsive con smooth scroll
- **Optimizado para SEO**: Estructura semántica y meta tags

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Estilos modernos con variables CSS y Flexbox/Grid
- **JavaScript**: Interactividad y animaciones
- **Font Awesome**: Iconos vectoriales
- **Google Fonts**: Tipografía profesional

## 📁 Estructura del Proyecto

```
portafolio/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
├── README.md           # Documentación
└── assets/             # Imágenes y recursos (opcional)
    ├── screenshots/    # Capturas de proyectos
    └── videos/         # Videos demostrativos
```

## 🛠️ Instalación y Uso

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/portafolio.git
   cd portafolio
   ```

2. **Personalizar el contenido**:
   - Editar `index.html` para cambiar tu información personal
   - Actualizar enlaces a GitHub, LinkedIn y CV
   - Reemplazar placeholders de imágenes con tus capturas reales
   - Agregar el video demostrativo de tu proyecto

3. **Personalizar estilos**:
   - Modificar `styles.css` para ajustar colores y diseño
   - Las variables CSS al principio del archivo facilitan la personalización

4. **Ejecutar localmente**:
   ```bash
   # Usando un servidor simple de Python
   python -m http.server 8000
   
   # O usando Node.js con http-server
   npx http-server
   ```

5. **Abrir en el navegador**:
   ```
   http://localhost:8000
   ```

## 📝 Personalización

### Información Personal
Actualiza los siguientes elementos en `index.html`:
- Tu nombre en el logo
- Descripción en la sección hero
- Enlaces a tus redes sociales
- Información del proyecto estrella

### Colores y Tema
Modifica las variables CSS en `styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Color principal */
    --secondary-color: #1e40af;    /* Color secundario */
    --accent-color: #3b82f6;       /* Color de acento */
    --dark-bg: #0f172a;            /* Fondo oscuro */
    --light-bg: #f8fafc;           /* Fondo claro */
}
```

### Agregar Más Proyectos
Copia la estructura del `div` con clase `project` y ajusta el contenido según tus necesidades.

## 🎯 Secciones del Portafolio

### 1. Hero Section
Presentación personal breve y directa con llamadas a la acción.

### 2. Proyectos
- **Proyecto Estrella**: Tu proyecto más importante destacado
- **Demo**: Video o capturas mostrando funcionalidades
- **Características**: Lista de tecnologías y beneficios

### 3. Contacto
Enlaces directos a:
- GitHub (repositorios)
- LinkedIn (perfil profesional)
- CV (descarga en PDF)

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Dispositivos móviles (< 480px)
- 📱 Tablets (480px - 768px)
- 💻 Desktops (> 768px)

## 🎨 Características de Diseño

- **Tipografía Limpia**: Fuente Sans-serif moderna
- **Contraste Accesible**: Colores que cumplen estándares WCAG
- **Micro-interacciones**: Efectos hover y transiciones suaves
- **Loading Animation**: Transición de entrada elegante
- **Smooth Scroll**: Navegación fluida entre secciones

## 🚀 Despliegue

### GitHub Pages
1. Sube el código a tu repositorio
2. Ve a Settings > Pages
3. Selecciona la rama main
4. Tu portafolio estará disponible en `https://tu-usuario.github.io/portafolio`

### Netlify
1. Arrastra la carpeta del proyecto a Netlify
2. Configura el dominio personalizado si lo deseas
3. Listo para compartir

### Vercel
```bash
vercel deploy
```

## 📞 Contacto

- **GitHub**: [tu-usuario](https://github.com/tu-usuario)
- **LinkedIn**: [tu-perfil](https://linkedin.com/in/tu-perfil)
- **Email**: tu-email@ejemplo.com

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Siéntete libre de usarlo como base para tu propio portafolio.

## 🙏 Agradecimientos

- Diseño inspirado en mejores prácticas de UI/UX
- Iconos de Font Awesome
- Fuente de Google Fonts

---

**Creado con ❤️ para destacar tu trabajo como desarrollador**
