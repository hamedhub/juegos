# 🕹️ Guía Completa de EmulatorJS

## ¿Qué es EmulatorJS?

**EmulatorJS** es un emulador web de código abierto que permite jugar juegos retro directamente en el navegador. Soporta múltiples sistemas y no requiere instalación.

---

## ✅ Lo que Ya Está Configurado:

### Juegos con EmulatorJS Integrado:

1. **Super Castlevania IV** (SNES)
   - Archivo: `games/super-castlevania-iv.html`
   - ROM necesaria: `roms/snes/super-castlevania-iv.sfc`

2. **Super Metroid** (SNES)
   - Archivo: `games/super-metroid.html`
   - ROM necesaria: `roms/snes/super-metroid.sfc`

3. **Dr. Robotnik's Mean Bean Machine** (Genesis)
   - Archivo: `games/dr-robotnik-mean-bean.html`
   - ROM necesaria: `roms/genesis/dr-robotnik-mean-bean.md`

---

## 🚀 Cómo Funciona:

### 1. El Usuario Hace Click en un Juego

```
Usuario → Click en "Super Metroid" → Abre games/super-metroid.html
```

### 2. El HTML Carga EmulatorJS

```html
<script src="https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/loader.js"></script>
```

### 3. EmulatorJS Descarga la ROM

```javascript
EJS_gameUrl = '../roms/snes/super-metroid.sfc';
```

### 4. El Emulador Arranca

```
EmulatorJS → Carga el core SNES → Lee la ROM → Inicia el juego
```

---

## 📥 Cómo Subir tus ROMs:

### Paso 1: Obtén las ROMs

⚠️ **Solo usa ROMs que poseas legalmente**

### Paso 2: Renombra los Archivos

**SNES:**
```
Super Castlevania IV.sfc → super-castlevania-iv.sfc
Super Metroid.sfc → super-metroid.sfc
```

**Genesis:**
```
Dr Robotnik's Mean Bean Machine.bin → dr-robotnik-mean-bean.md
```

### Paso 3: Sube a GitHub

#### Opción A: Interfaz Web

1. Ve a tu repo en GitHub
2. Navega a `roms/snes/` o `roms/genesis/`
3. Click "Add file" → "Upload files"
4. Arrastra tus ROMs
5. Commit

#### Opción B: Terminal

```bash
# Copia las ROMs
cp /path/to/super-castlevania-iv.sfc roms/snes/
cp /path/to/super-metroid.sfc roms/snes/
cp /path/to/dr-robotnik-mean-bean.bin roms/genesis/

# Renombra si es necesario
mv roms/genesis/dr-robotnik-mean-bean.bin roms/genesis/dr-robotnik-mean-bean.md

# Commit y push
git add roms/
git commit -m "Añadir ROMs de juegos retro"
git push
```

### Paso 4: Despliega

```bash
# Si usas Cloudflare Pages con auto-deploy
git push  # Ya está!

# Si no, despliega manualmente
./deploy-cloudflare.sh
```

---

## ➕ Agregar Más Juegos:

### Ejemplo: Agregar Chrono Trigger

#### 1. Crea el HTML del Juego

**Archivo:** `games/chrono-trigger.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Chrono Trigger - Hypackel Games</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: Arial, sans-serif;
            overflow: hidden;
        }
        #game-container {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
        #game {
            width: 100%;
            max-width: 1024px;
            height: 100%;
            max-height: 768px;
        }
        .game-title {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 10px 30px;
            border-radius: 8px;
            font-size: 24px;
            z-index: 1000;
            border: 2px solid #667eea;
            font-weight: bold;
        }
        .controls-info {
            position: absolute;
            bottom: 10px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(0, 0, 0, 0.9);
            color: #fff;
            padding: 10px 20px;
            border-radius: 8px;
            font-size: 13px;
            z-index: 1000;
            border: 2px solid #667eea;
        }
    </style>
</head>
<body>
    <div class="game-title">⏰ Chrono Trigger</div>

    <div id="game-container">
        <div id="game"></div>
    </div>

    <div class="controls-info">
        🎮 Controles: Flechas = Mover | Z = A | X = B | A = X | S = Y | Enter = Start
    </div>

    <script>
        EJS_player = '#game';
        EJS_core = 'snes';
        EJS_gameUrl = '../roms/snes/chrono-trigger.sfc';
        EJS_pathtodata = 'https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/';
        EJS_startOnLoaded = true;
        EJS_gameID = 'chrono-trigger';
        EJS_color = '#667eea';
        EJS_backgroundColor = '#0a0a0a';
        EJS_volume = 0.5;
    </script>

    <script src="https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/loader.js"></script>
</body>
</html>
```

#### 2. Actualiza library.js

```javascript
{
    id: 43,
    title: "Chrono Trigger",
    category: "retro",
    icon: "⏰",
    description: "RPG épico con viajes en el tiempo",
    url: "games/chrono-trigger.html",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
},
```

#### 3. Sube la ROM

```bash
cp chrono-trigger.sfc roms/snes/
git add roms/snes/chrono-trigger.sfc games/chrono-trigger.html library.js
git commit -m "Añadir Chrono Trigger"
git push
```

---

## 🎮 Sistemas Soportados:

| Sistema | Core | Extensiones | Ejemplo |
|---------|------|-------------|---------|
| **NES** | `nes` | .nes | `EJS_core = 'nes'` |
| **SNES** | `snes` | .sfc, .smc | `EJS_core = 'snes'` |
| **Game Boy** | `gb` | .gb | `EJS_core = 'gb'` |
| **Game Boy Color** | `gbc` | .gbc | `EJS_core = 'gbc'` |
| **Game Boy Advance** | `gba` | .gba | `EJS_core = 'gba'` |
| **Genesis/MD** | `segaMD` | .md, .bin, .gen | `EJS_core = 'segaMD'` |
| **Master System** | `segaMS` | .sms | `EJS_core = 'segaMS'` |
| **Game Gear** | `segaGG` | .gg | `EJS_core = 'segaGG'` |
| **Nintendo 64** | `n64` | .n64, .z64 | `EJS_core = 'n64'` |
| **PlayStation** | `psx` | .bin, .cue | `EJS_core = 'psx'` |
| **Atari 2600** | `atari2600` | .a26 | `EJS_core = 'atari2600'` |

---

## 🎨 Personalización:

### Colores

```javascript
EJS_color = '#e94560';  // Color principal
EJS_backgroundColor = '#0a0a0a';  // Fondo
```

### Volumen

```javascript
EJS_volume = 0.5;  // 0.0 - 1.0
```

### Auto-Start

```javascript
EJS_startOnLoaded = true;  // Inicia automáticamente
```

### Gamepad Virtual (Móvil)

```javascript
EJS_VirtualGamepadSettings = {
    joystickSize: 100,
    buttonSize: 60,
    opacity: 0.7
};
```

---

## 🔧 Configuración Avanzada:

### BIOS (Para algunos sistemas)

```javascript
// PlayStation necesita BIOS
EJS_biosUrl = '../roms/bios/scph1001.bin';
```

### Cheats

```javascript
EJS_CheatsURLs = [
    '../cheats/game.cht'
];
```

### Save States

EmulatorJS guarda automáticamente en el navegador (localStorage).

---

## 📱 Controles:

### Teclado:

| Acción | Tecla |
|--------|-------|
| Arriba | ↑ o W |
| Abajo | ↓ o S |
| Izquierda | ← o A |
| Derecha | → o D |
| A (Aceptar) | Z o K |
| B (Cancelar) | X o J |
| X | A o C |
| Y | S o V |
| L | Q |
| R | E |
| Start | Enter |
| Select | Shift |
| Menú EmulatorJS | ESC |

### Gamepad:

EmulatorJS soporta gamepads USB automáticamente.

### Móvil:

Controles táctiles virtuales aparecen automáticamente.

---

## 📦 Extensiones de ROMs por Sistema:

### SNES:
- **.sfc** - Super Famicom (recomendado)
- **.smc** - Super Mario Cart

### Genesis:
- **.md** - Mega Drive (recomendado)
- **.bin** - Binary
- **.gen** - Genesis

### Game Boy:
- **.gb** - Game Boy
- **.gbc** - Game Boy Color
- **.gba** - Game Boy Advance

### Nintendo 64:
- **.n64** - Nintendo 64
- **.z64** - Z64 format

### PlayStation:
- **.bin** + **.cue** - Requiere ambos archivos
- **.iso** - Imagen ISO

---

## 🔍 Troubleshooting:

### El juego no carga:

1. **Verifica la ruta del ROM:**
   ```javascript
   EJS_gameUrl = '../roms/snes/nombre-exacto.sfc';
   ```

2. **Verifica que el archivo existe** en GitHub

3. **Verifica la extensión:**
   - SNES: .sfc o .smc
   - Genesis: .md, .bin o .gen

4. **Limpia caché del navegador** (Ctrl + Shift + Del)

### El emulador se ve mal:

1. **Ajusta el tamaño:**
   ```css
   #game {
       max-width: 1024px;
       max-height: 768px;
   }
   ```

2. **Cambia colores:**
   ```javascript
   EJS_color = '#tu-color';
   ```

### El juego va lento:

1. **Baja la resolución** del navegador
2. **Cierra otras pestañas**
3. **Usa un navegador moderno** (Chrome, Firefox, Edge)

### No hay sonido:

1. **Verifica el volumen:**
   ```javascript
   EJS_volume = 0.5;
   ```

2. **Interactúa con la página** (algunos navegadores requieren click primero)

---

## 📋 Checklist Rápido:

Para agregar un juego nuevo:

- [ ] Crear archivo HTML en `games/`
- [ ] Configurar `EJS_core` correcto
- [ ] Configurar `EJS_gameUrl` correcto
- [ ] Subir ROM a `roms/sistema/`
- [ ] Agregar juego a `library.js`
- [ ] Commit y push
- [ ] Probar en el sitio desplegado

---

## 🌐 CDN de EmulatorJS:

Usamos el CDN oficial:
```
https://cdn.jsdelivr.net/gh/EmulatorJS/EmulatorJS@latest/data/
```

**Ventajas:**
- ✅ Siempre actualizado
- ✅ Rápido (CDN global)
- ✅ Gratis
- ✅ No necesitas descargar nada

---

## 📚 Recursos:

- **GitHub**: https://github.com/EmulatorJS/EmulatorJS
- **Documentación**: https://github.com/EmulatorJS/EmulatorJS/wiki
- **Demo**: https://emulatorjs.org/

---

## ⚖️ Legal:

- Solo usa ROMs que poseas legalmente
- No distribuyas ROMs con copyright
- EmulatorJS es código abierto (GPL-3.0)
- Los emuladores están bajo sus propias licencias

---

**¡Ya puedes jugar tus juegos retro directamente en tu sitio web! 🎮**
