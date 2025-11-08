# 🎮 Hypackel Games - Biblioteca de Juegos en la Nube

Una biblioteca completa de juegos HTML5 embebidos, lista para desplegar en Cloudflare Pages. Accede a más de 30 juegos de alta calidad directamente desde tu navegador.

## 🌟 Características Principales

- ✅ **30+ Juegos de Alta Calidad** - Acción, Puzzle, Deportes, Carreras, IO Games y Clásicos
- ✅ **Búsqueda Inteligente** - Encuentra juegos rápidamente por nombre o categoría
- ✅ **Sistema de Categorías** - Filtra por tipo de juego
- ✅ **Modal de Pantalla Completa** - Juega con la mejor experiencia visual
- ✅ **Diseño Moderno** - Interfaz tipo Netflix/Steam
- ✅ **100% Responsive** - Funciona en móviles, tablets y PC
- ✅ **Sin Instalación** - Todo funciona directo en el navegador
- ✅ **Optimizado para Cloudflare** - Carga ultra rápida con CDN global

## 🎯 Categorías de Juegos

### 🎮 IO Games
- Slither.io, Agar.io, Diep.io, Krunker.io
- Paper.io 2, Surviv.io, Wings.io

### 🏃 Acción
- Zombs Royale, Shell Shockers, Venge.io
- 1v1.LOL, Subway Surfers

### 🧩 Puzzle
- 2048, Tetris, Sudoku, Cut the Rope
- Candy Crush, Bubble Shooter, Mahjong

### 🏎️ Carreras
- 3D Car Driver, Moto X3M

### ⚽ Deportes
- Basketball Stars, Soccer Skills, 8 Ball Pool

### 👾 Clásicos
- Pac-Man, Snake, Space Invaders, Breakout
- Solitaire, Chess

## 🚀 Despliegue en Cloudflare Pages

### Opción 1: Despliegue desde GitHub (Recomendado)

1. **El código ya está en GitHub**
   - Este repositorio está listo para desplegarse

2. **Configura Cloudflare Pages**
   - Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
   - Click en **"Workers & Pages"** → **"Create application"** → **"Pages"**
   - Selecciona **"Connect to Git"**
   - Autoriza GitHub y selecciona tu repositorio

3. **Configuración del Proyecto**
   ```
   Project name: hypackel-games (o el que prefieras)
   Production branch: main
   Framework preset: None
   Build command: (dejar vacío)
   Build output directory: / (raíz)
   ```

4. **Deploy**
   - Click en **"Save and Deploy"**
   - Espera 1-2 minutos
   - Tu sitio estará en: `https://hypackel-games.pages.dev`

### Opción 2: Wrangler CLI (Para Desarrolladores)

```bash
# Instalar Wrangler
npm install -g wrangler

# Autenticarse
wrangler login

# Desplegar
wrangler pages publish . --project-name=hypackel-games
```

### Opción 3: Upload Directo (Drag & Drop)

1. Descarga el repositorio como ZIP
2. Ve a Cloudflare Pages → "Upload assets"
3. Arrastra todos los archivos
4. Click en "Deploy site"

## 🔒 Uso con VPN en el Trabajo

### ¿Por qué funciona en redes corporativas?

1. **Cloudflare WARP/VPN**
   - Instala [Cloudflare WARP](https://1.1.1.1/)
   - Activa el modo VPN
   - Tu tráfico está cifrado y pasa por Cloudflare
   - Los filtros corporativos no pueden bloquear contenido específico

2. **Dominio Personalizado** (Opcional pero recomendado)
   - Configura un dominio propio: `games.tudominio.com`
   - Los filtros corporativos generalmente solo bloquean dominios conocidos
   - Tu dominio personalizado no estará en las listas de bloqueo

3. **HTTPS por Defecto**
   - Todo el tráfico está cifrado con SSL/TLS
   - Los proxies corporativos ven solo conexiones HTTPS seguras
   - No pueden inspeccionar el contenido sin romper el certificado

### Configuración Recomendada

```
1. Despliega en Cloudflare Pages
2. Activa Cloudflare WARP en tu dispositivo
3. (Opcional) Configura dominio personalizado
4. Accede desde el trabajo sin restricciones
```

## 🌐 Configurar Dominio Personalizado

1. En tu proyecto de Cloudflare Pages:
   ```
   Custom domains → Set up a custom domain
   ```

2. Añade tu dominio:
   ```
   Ejemplo: games.midominio.com
   ```

3. Cloudflare configurará automáticamente:
   - Certificado SSL gratuito
   - DNS
   - CDN global

## 📱 Características Técnicas

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Sin Backend**: Todo es estático
- **CDN Global**: Cloudflare tiene 300+ ubicaciones
- **HTTPS**: Certificado SSL gratuito y automático
- **Headers de Seguridad**: Configurados en `_headers`
- **Caché Optimizado**: Tiempos de carga mínimos

## 🛠️ Desarrollo Local

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/juegos.git
cd juegos

# Servidor local (opción 1 - Python)
python3 -m http.server 8000

# Servidor local (opción 2 - Node.js)
npx serve

# Acceder
http://localhost:8000
```

## 📁 Estructura del Proyecto

```
juegos/
├── index.html          # Página principal con biblioteca
├── styles.css          # Estilos modernos tipo Netflix
├── library.js          # Base de datos de juegos y funcionalidad
├── games/              # Juegos HTML5 nativos
│   ├── snake.html
│   ├── tetris.html
│   └── breakout.html
├── _headers            # Configuración de seguridad HTTP
├── .gitignore          # Archivos ignorados
└── README.md           # Este archivo
```

## 🎮 Cómo Usar

1. **Buscar Juegos**
   - Usa la barra de búsqueda en el header
   - Escribe el nombre del juego o palabra clave

2. **Filtrar por Categoría**
   - Click en las categorías del header
   - Los juegos se filtran automáticamente

3. **Jugar**
   - Click en cualquier juego
   - Se abre en un modal de pantalla completa
   - Usa el botón "Pantalla Completa" para mejor experiencia

4. **Cerrar**
   - Click en la X o fuera del modal
   - Presiona ESC en el teclado

## 🔧 Personalización

### Añadir Nuevos Juegos

Edita `library.js` y añade un nuevo objeto al array `gamesDatabase`:

```javascript
{
    id: 31,
    title: "Mi Juego",
    category: "action",
    icon: "🎮",
    description: "Descripción del juego",
    url: "https://url-del-juego.com",
    gradient: "linear-gradient(135deg, #color1 0%, #color2 100%)"
}
```

### Cambiar Colores

Edita `styles.css` y modifica las variables de color:

```css
/* Color principal */
#e94560 → tu color

/* Degradados */
linear-gradient(135deg, #e94560 0%, #ff6b9d 100%)
```

## 🔐 Seguridad y Privacidad

- ✅ No recopilamos datos personales
- ✅ No hay cookies de tracking
- ✅ No hay anuncios
- ✅ Sin registro de usuarios
- ✅ Headers de seguridad configurados
- ✅ HTTPS obligatorio
- ✅ Política de privacidad de Cloudflare

## ⚠️ Nota Legal

Todos los juegos embebidos pertenecen a sus respectivos creadores. Este proyecto es solo una biblioteca/agregador que facilita el acceso a juegos web gratuitos disponibles públicamente.

## 🌟 Ventajas de Cloudflare Pages

1. **Gratis**: 500 builds/mes incluidos
2. **Rápido**: CDN con 300+ ubicaciones
3. **Confiable**: 99.99% uptime
4. **Seguro**: DDoS protection incluido
5. **Fácil**: Deploy automático desde Git
6. **Escalable**: Millones de requests sin costo adicional

## 🤝 Contribuciones

¿Quieres añadir juegos o mejorar el proyecto?

1. Fork el repositorio
2. Crea una rama: `git checkout -b nueva-caracteristica`
3. Commit: `git commit -m 'Añadir nuevo juego'`
4. Push: `git push origin nueva-caracteristica`
5. Abre un Pull Request

## 📞 Soporte

- **Issues**: [GitHub Issues](https://github.com/tu-usuario/juegos/issues)
- **Docs Cloudflare**: [developers.cloudflare.com/pages](https://developers.cloudflare.com/pages/)
- **Cloudflare WARP**: [1.1.1.1](https://1.1.1.1/)

## 📄 Licencia

MIT License - Usa este proyecto libremente para fines personales o comerciales.

## 🔗 Enlaces Útiles

- [Cloudflare Pages](https://pages.cloudflare.com/)
- [Cloudflare Dashboard](https://dash.cloudflare.com/)
- [Cloudflare WARP](https://1.1.1.1/)
- [Web Gaming](https://developer.mozilla.org/en-US/docs/Games)

---

**¡Disfruta jugando! 🎉**

Hecho con ❤️ para la comunidad gamer
