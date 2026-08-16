# Instrucciones de Personalización

Guía paso a paso para personalizar tu portafolio con el proyecto "Gestor de Inventario y Personal".

## 🎯 Pasos para Personalizar

### 1. Actualizar Información Personal

En `index.html`, busca y reemplaza:

```html
<!-- Logo -->
<h1>Dev<span class="highlight">Portfolio</span></h1>
<!-- Cambia a tu nombre o marca personal -->

<!-- Hero Section -->
<h2>Desarrollador con enfoque en creación de sistemas de gestión livianos, 
interfaces de usuario intuitivas y automatización de procesos.</h2>
<!-- Ajusta según tu perfil específico -->
```

### 2. Configurar Proyecto Estrella

En la sección del proyecto destacado, actualiza:

```html
<!-- Imagen del proyecto -->
<div class="image-placeholder">
    <i class="fas fa-desktop"></i>
    <p>Captura de interfaz del sistema</p>
</div>
<!-- Reemplaza con: -->
<img src="assets/screenshots/gestor-inventario.png" alt="Gestor de Inventario y Personal">

<!-- Enlaces -->
<a href="ruta/a/tu/ejecutable.exe" class="btn btn-primary">
    <i class="fas fa-download"></i> Descargar .exe
</a>
<a href="https://github.com/tu-usuario/gestor-inventario" class="btn btn-secondary">
    <i class="fab fa-github"></i> Ver en GitHub
</a>
```

### 3. Agregar Capturas de Pantalla

1. Crea la carpeta `assets/screenshots/`
2. Toma capturas de tu aplicación mostrando:
   - Pantalla principal con interfaz táctica
   - Búsqueda instantánea por cédula
   - Gestión de inventario
   - Reportes y exportación

3. Nombra los archivos descriptivamente:
   - `gestor-inventario-main.png`
   - `gestor-inventario-search.png`
   - `gestor-inventario-inventory.png`
   - `gestor-inventario-reports.png`

### 4. Crear Video Demo

Para la sección de demo:

1. Graba un video de 15-30 segundos mostrando:
   - Velocidad de búsqueda
   - Funcionalidades principales
   - Interfaz responsive

2. Opciones de grabación:
   - **OBS Studio**: Gratuito y profesional
   - **Loom**: Fácil de usar en navegador
   - **Windows Game Bar**: Integrado en Windows 10/11

3. Formatos recomendados:
   - MP4 (H.264 codec)
   - Resolución: 1920x1080 o 1280x720
   - Duración: 15-30 segundos

4. Agrega el video:
```html
<div class="video-placeholder">
    <video controls width="100%" height="100%">
        <source src="assets/videos/gestor-inventario-demo.mp4" type="video/mp4">
        Tu navegador no soporta videos.
    </video>
</div>
```

### 5. Configurar Enlaces de Contacto

Actualiza en la sección de contacto:

```html
<a href="https://github.com/tu-usuario" target="_blank" class="contact-card">
    <i class="fab fa-github"></i>
    <h3>GitHub</h3>
    <p>Ver mis repositorios</p>
</a>

<a href="https://linkedin.com/in/tu-perfil" target="_blank" class="contact-card">
    <i class="fab fa-linkedin"></i>
    <h3>LinkedIn</h3>
    <p>Conectar profesionalmente</p>
</a>

<a href="assets/cv-tu-nombre.pdf" class="contact-card">
    <i class="fas fa-file-pdf"></i>
    <h3>CV</h3>
    <p>Descargar en PDF</p>
</a>
```

### 6. Preparar tu CV

1. Crea un CV profesional en PDF
2. Guárdalo como `assets/cv-tu-nombre.pdf`
3. Asegúrate de incluir:
   - Experiencia relevante
   - Tecnologías que dominas
   - Educación
   - Proyectos destacados

### 7. Ajustar Colores (Opcional)

Si quieres cambiar la paleta de colores, edita `styles.css`:

```css
:root {
    --primary-color: #2563eb;      /* Cambia este color */
    --secondary-color: #1e40af;    /* Cambia este color */
    --accent-color: #3b82f6;       /* Cambia este color */
}
```

Colores sugeridos para interfaz táctica:
- Azul militar: `#1e3a5f`
- Verde oliva: `#556b2f`
- Gris táctico: `#4a4a4a`

### 8. Optimizar para GitHub

Crea un `.gitignore`:

```
# Archivos grandes
assets/videos/*.mp4
assets/screenshots/*.png

# Si quieres incluir versiones optimizadas:
!assets/videos/*.webm
!assets/screenshots/*.jpg
```

## 📋 Checklist de Personalización

- [ ] Actualizar nombre y descripción personal
- [ ] Configurar enlaces a GitHub y LinkedIn
- [ ] Agregar capturas de pantalla del proyecto
- [ ] Crear y agregar video demo
- [ ] Preparar y enlazar CV en PDF
- [ ] Configurar enlace de descarga del .exe
- [ ] Probar responsive design en móviles
- [ ] Verificar todos los enlaces funcionan
- [ ] Optimizar imágenes para web
- [ ] Probar en diferentes navegadores

## 🎨 Recursos Adicionales

### Optimización de Imágenes
- **TinyPNG**: https://tinypng.com/ (Comprimir PNG)
- **Squoosh**: https://squoosh.app/ (Google, compresión avanzada)

### Generación de Videos
- **OBS Studio**: https://obsproject.com/
- **Loom**: https://www.loom.com/

### Herramientas de Diseño
- **Canva**: Para CV y elementos gráficos
- **Figma**: Para diseños más avanzados

## 🚀 Una vez Personalizado

1. **Prueba local**:
   ```bash
   python -m http.server 8000
   ```

2. **Sube a GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Inicializar portafolio personal"
   git branch -M main
   git remote add origin https://github.com/tu-usuario/portafolio.git
   git push -u origin main
   ```

3. **Activa GitHub Pages**:
   - Ve a Settings > Pages
   - Selecciona rama main
   - Tu portafolio estará en: `https://tu-usuario.github.io/portafolio`

## 💡 Tips Adicionales

### Para el Proyecto Gestor de Inventario

**Descripción técnica sugerida:**
> Sistema de gestión empresarial ligero para control de inventario y personal, optimizado para equipos de bajos recursos. Implementado con Electron para multiplataforma, SQLite para almacenamiento local eficiente, y Node.js para lógica de negocio.

**Características a destacar:**
- Búsqueda instantánea (< 100ms)
- Consumo de RAM < 50MB
- Interfaz responsive táctica
- Exportación a Excel/CSV
- Backup automático
- Modo offline

### SEO Básico

Actualiza los meta tags en `index.html`:

```html
<meta name="description" content="Portafolio de [Tu Nombre] - Desarrollador especializado en sistemas de gestión livianos con Electron, Node.js y SQLite.">
<meta name="keywords" content="desarrollador, software, electron, nodejs, sqlite, gestión, inventario">
<meta name="author" content="[Tu Nombre]">
```

---

**¡Listo para compartir tu portafolio profesional!** 🎉
