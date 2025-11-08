# 🚀 Guía de Despliegue Rápido - Hypackel Games

## Método 1: Script Automatizado (MÁS FÁCIL) ⭐

```bash
# Ejecutar el script de despliegue automatizado
./deploy.sh
```

El script te guiará paso a paso:
1. ✅ Verifica los archivos
2. ✅ Verifica Wrangler CLI
3. ✅ Te ayuda a autenticarte con Cloudflare
4. ✅ Despliega tu sitio automáticamente
5. ✅ Te da la URL de tu sitio

**Tiempo estimado: 3-5 minutos**

---

## Método 2: Comandos Manuales

### Paso 1: Autenticarse con Cloudflare

```bash
wrangler login
```

Se abrirá tu navegador. Inicia sesión en Cloudflare.

### Paso 2: Desplegar

```bash
wrangler pages deploy . --project-name=hypackel-games
```

### Paso 3: Acceder

Tu sitio estará en: `https://hypackel-games.pages.dev`

---

## Método 3: Desde el Dashboard de Cloudflare (Sin Terminal)

### Opción A: Conectar con GitHub

1. Ve a: https://dash.cloudflare.com
2. Click en **"Workers & Pages"**
3. Click en **"Create application"** → **"Pages"**
4. Click en **"Connect to Git"**
5. Selecciona tu repositorio de GitHub
6. Configuración:
   - **Project name**: hypackel-games
   - **Branch**: main (o claude/cloudflare-vpn-gaming-page-011CUvi15gDnzGFYsJMcdHn7)
   - **Build command**: (dejar vacío)
   - **Build output directory**: `/`
7. Click en **"Save and Deploy"**
8. Espera 1-2 minutos
9. ✅ Tu sitio estará en: `https://hypackel-games.pages.dev`

### Opción B: Upload Directo (Drag & Drop)

1. Ve a: https://dash.cloudflare.com
2. Click en **"Workers & Pages"** → **"Create application"** → **"Pages"**
3. Click en **"Upload assets"**
4. Arrastra estos archivos:
   - `index.html`
   - `styles.css`
   - `library.js`
   - `_headers`
   - Carpeta `games/` completa
5. Click en **"Deploy site"**
6. ✅ Listo!

---

## 📋 Requisitos Previos

- ✅ Cuenta de Cloudflare (gratis): https://dash.cloudflare.com/sign-up
- ✅ Wrangler CLI instalado (el script lo instala automáticamente)
- ✅ Node.js y npm (ya instalados)

---

## 🔒 Configurar para Usar en el Trabajo

### 1. Instalar Cloudflare WARP (VPN)

```bash
# Descargar desde
https://1.1.1.1/
```

- Instala en tu PC o móvil
- Activa el modo VPN
- Ahora puedes acceder a tu sitio desde el trabajo sin restricciones

### 2. Dominio Personalizado (Opcional)

1. En Cloudflare Dashboard, ve a tu proyecto
2. Click en **"Custom domains"**
3. Click en **"Set up a custom domain"**
4. Añade tu dominio: `games.tudominio.com`
5. Cloudflare configurará automáticamente DNS y SSL

**Ventaja**: Los filtros corporativos no bloquearán tu dominio personalizado

---

## ❓ Solución de Problemas

### Error: "Not authorized"

```bash
wrangler logout
wrangler login
```

### Error: "Project name already exists"

Cambia el nombre del proyecto:

```bash
wrangler pages deploy . --project-name=mis-juegos-2024
```

### Error: "No Internet connection"

Verifica tu conexión y vuelve a intentar.

### No puedo ejecutar ./deploy.sh

```bash
chmod +x deploy.sh
./deploy.sh
```

---

## 🎯 Después del Despliegue

Tu sitio estará disponible en:
```
https://tu-proyecto.pages.dev
```

**Características**:
- ✅ HTTPS automático (certificado SSL gratis)
- ✅ CDN global (300+ ubicaciones)
- ✅ 99.99% uptime
- ✅ DDoS protection
- ✅ Tráfico ilimitado
- ✅ Despliegues ilimitados

---

## 🔗 Enlaces Útiles

- Dashboard: https://dash.cloudflare.com
- Docs: https://developers.cloudflare.com/pages/
- WARP VPN: https://1.1.1.1/
- Soporte: https://community.cloudflare.com/

---

## 🎮 ¡Listo para Jugar!

Una vez desplegado:
1. Abre tu navegador
2. Ve a `https://tu-proyecto.pages.dev`
3. Busca juegos
4. Click para jugar
5. ¡Disfruta! 🎉
