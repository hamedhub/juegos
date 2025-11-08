# 🎮 Gaming Zone - Página de Juegos HTML5

Una colección de juegos clásicos implementados en HTML5, CSS y JavaScript vanilla, listos para desplegar en Cloudflare Pages.

## 🕹️ Juegos Incluidos

- **🐍 Snake Classic** - El clásico juego de la serpiente
- **🧠 Memory Cards** - Juego de memoria con emojis
- **⭕ Tic Tac Toe** - Tres en raya
- **🧱 Breakout** - Rompe bloques con la pelota
- **🔢 2048** - El popular juego de combinar números
- **🟦 Tetris** - El legendario juego de bloques

## 🚀 Despliegue en Cloudflare Pages

### Método 1: Despliegue desde GitHub (Recomendado)

1. **Sube tu código a GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Gaming Zone"
   git push origin main
   ```

2. **Configura Cloudflare Pages**
   - Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
   - Selecciona "Workers & Pages" en el menú lateral
   - Click en "Create application" → "Pages" → "Connect to Git"
   - Selecciona tu repositorio de GitHub
   - Configura el proyecto:
     - **Project name**: gaming-zone (o el nombre que prefieras)
     - **Production branch**: main
     - **Build settings**: None (Framework preset)
     - **Build command**: (déjalo vacío)
     - **Build output directory**: / (raíz del proyecto)

3. **Despliega**
   - Click en "Save and Deploy"
   - Cloudflare construirá y desplegará tu sitio automáticamente
   - Tu sitio estará disponible en: `https://gaming-zone.pages.dev`

### Método 2: Despliegue Directo (Drag & Drop)

1. Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
2. Selecciona "Workers & Pages" → "Create application" → "Pages" → "Upload assets"
3. Arrastra la carpeta del proyecto (o selecciona los archivos)
4. Click en "Deploy site"

### Método 3: Usando Wrangler CLI

1. **Instala Wrangler**
   ```bash
   npm install -g wrangler
   ```

2. **Autentícate con Cloudflare**
   ```bash
   wrangler login
   ```

3. **Despliega el proyecto**
   ```bash
   wrangler pages publish . --project-name=gaming-zone
   ```

## 🌐 Configuración de Dominio Personalizado

1. En Cloudflare Pages, ve a tu proyecto
2. Click en "Custom domains"
3. Click en "Set up a custom domain"
4. Ingresa tu dominio (ejemplo: `games.tudominio.com`)
5. Cloudflare configurará automáticamente los registros DNS

## 🔒 Características de Seguridad

El proyecto incluye headers de seguridad configurados en `_headers`:
- Protección XSS
- Prevención de clickjacking
- Content Security Policy
- Cache optimizado

## 📱 Características

- ✅ 100% HTML5, CSS3 y JavaScript vanilla (sin dependencias)
- ✅ Responsive - funciona en móviles y tablets
- ✅ Sin necesidad de servidor backend
- ✅ Carga instantánea
- ✅ Funciona offline después de la primera carga
- ✅ Optimizado para Cloudflare CDN

## 🎯 Uso en el Trabajo con VPN

Si estás usando este sitio desde el trabajo:

1. **Con Cloudflare WARP/VPN:**
   - Instala [Cloudflare WARP](https://1.1.1.1/)
   - Activa el modo VPN
   - Accede a tu sitio normalmente

2. **Dominio personalizado:**
   - Usa un dominio personalizado en lugar de `.pages.dev`
   - Esto puede ayudar a evitar filtros corporativos

3. **Cloudflare Access (Opcional):**
   - Configura Cloudflare Access para proteger tu sitio con autenticación
   - Solo usuarios autorizados podrán acceder

## 🛠️ Desarrollo Local

Para probar localmente:

1. Clona el repositorio
   ```bash
   git clone https://github.com/tu-usuario/juegos.git
   cd juegos
   ```

2. Abre `index.html` en tu navegador
   ```bash
   # Con Python 3
   python3 -m http.server 8000

   # Con Node.js
   npx serve
   ```

3. Accede a `http://localhost:8000`

## 📝 Estructura del Proyecto

```
juegos/
├── index.html          # Página principal
├── styles.css          # Estilos
├── games.js            # Lógica de todos los juegos
├── _headers            # Configuración de headers HTTP
├── .gitignore          # Archivos ignorados por Git
└── README.md           # Este archivo
```

## 🎮 Controles de los Juegos

### Snake
- **Flechas del teclado**: Mover la serpiente

### Memory Cards
- **Click**: Voltear cartas

### Tic Tac Toe
- **Click**: Colocar X u O

### Breakout
- **Mouse**: Mover la paleta

### 2048
- **Flechas del teclado**: Mover fichas

### Tetris
- **Flechas izquierda/derecha**: Mover pieza
- **Flecha abajo**: Acelerar caída
- **Espacio**: Rotar pieza

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Siéntete libre de:
- Reportar bugs
- Sugerir nuevos juegos
- Mejorar el código existente
- Añadir nuevas características

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 🌟 Características Adicionales

- **Sin anuncios**: Todos los juegos son completamente gratuitos y sin publicidad
- **Sin registro**: No necesitas crear una cuenta
- **Sin instalación**: Todo funciona en el navegador
- **Privacidad**: No recopilamos datos personales

## 🔗 Enlaces Útiles

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Cloudflare WARP](https://1.1.1.1/)
- [Web Gaming APIs](https://developer.mozilla.org/en-US/docs/Games)

---

¡Disfruta jugando! 🎉
