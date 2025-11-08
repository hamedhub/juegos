# 🎮 Carpeta de ROMs

Esta carpeta contiene las ROMs de los juegos retro.

## 📁 Estructura:

```
roms/
├── snes/              # ROMs de Super Nintendo
│   ├── super-castlevania-iv.sfc
│   ├── super-metroid.sfc
│   └── ...
├── genesis/           # ROMs de Sega Genesis/Mega Drive
│   ├── dr-robotnik-mean-bean.md
│   └── ...
└── README.md         # Este archivo
```

---

## 📥 Cómo Agregar tus ROMs:

### Paso 1: Obtén tus ROMs Legalmente

⚠️ **IMPORTANTE**: Solo debes usar ROMs de juegos que poseas legalmente.

**Opciones legales:**
1. Extrae ROMs de tus cartuchos físicos usando un dumper
2. Descarga de colecciones oficiales que hayas comprado
3. Usa homebrew o juegos de dominio público

---

### Paso 2: Renombra los Archivos

**Super Nintendo (SNES):**
- Extensión: `.sfc` o `.smc`
- Ejemplo: `super-castlevania-iv.sfc`

**Sega Genesis:**
- Extensión: `.md`, `.bin` o `.gen`
- Ejemplo: `dr-robotnik-mean-bean.md`

**Nombres actuales necesarios:**
```
roms/snes/super-castlevania-iv.sfc
roms/snes/super-metroid.sfc
roms/genesis/dr-robotnik-mean-bean.md
```

---

### Paso 3: Sube las ROMs a GitHub

#### Opción A: Interfaz Web de GitHub

1. Ve a tu repositorio en GitHub
2. Navega a `roms/snes/` o `roms/genesis/`
3. Click en "Add file" → "Upload files"
4. Arrastra tus archivos ROM
5. Click en "Commit changes"

#### Opción B: Línea de Comandos

```bash
# Copia tus ROMs a las carpetas
cp /path/to/super-castlevania-iv.sfc roms/snes/
cp /path/to/super-metroid.sfc roms/snes/
cp /path/to/dr-robotnik-mean-bean.md roms/genesis/

# Haz commit y push
git add roms/
git commit -m "Añadir ROMs de juegos retro"
git push
```

---

### Paso 4: Despliega

Una vez subidas las ROMs, despliega tu sitio:

```bash
# Si usas Cloudflare Pages
./deploy-cloudflare.sh

# O simplemente haz push (si ya configuraste auto-deploy)
git push
```

---

## 🎯 ROMs Necesarias por Juego:

| Juego | Archivo Necesario | Sistema | Extensión |
|-------|-------------------|---------|-----------|
| Super Castlevania IV | `super-castlevania-iv.sfc` | SNES | .sfc/.smc |
| Super Metroid | `super-metroid.sfc` | SNES | .sfc/.smc |
| Dr. Robotnik's Mean Bean Machine | `dr-robotnik-mean-bean.md` | Genesis | .md/.bin |

---

## 📦 Formato de Archivos:

### SNES:
- **.sfc** - Super Famicom (formato japonés)
- **.smc** - Super Mario Cart (formato US)
- Ambos funcionan, pero .sfc es más común

### Sega Genesis:
- **.md** - Mega Drive
- **.bin** - Binary ROM
- **.gen** - Genesis
- Todos funcionan igual

---

## 🔧 Agregar Más Juegos:

Para agregar más juegos retro:

1. **Crea un archivo HTML** en `games/` usando `emulator-template.html`
2. **Sube la ROM** a `roms/snes/` o `roms/genesis/`
3. **Actualiza `library.js`** con el nuevo juego
4. **Despliega**

**Ejemplo:**

```javascript
// En library.js
{
    id: 43,
    title: "Chrono Trigger",
    category: "retro",
    icon: "⏰",
    description: "RPG épico con viajes en el tiempo",
    url: "games/chrono-trigger.html",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
}
```

Luego sube: `roms/snes/chrono-trigger.sfc`

---

## ⚠️ Limitaciones de GitHub:

- **Tamaño máximo por archivo**: 100 MB
- **Tamaño máximo del repositorio**: 1 GB (recomendado)

**La mayoría de ROMs SNES/Genesis son < 5 MB**, así que no hay problema.

**Si tienes ROMs grandes** (como juegos de PlayStation):
- Usa Git LFS (Large File Storage)
- O hospeda las ROMs en otro lugar (Google Drive, etc.)

---

## 🔒 Privacidad:

Si quieres mantener las ROMs privadas:

1. **Haz el repositorio privado** en GitHub
2. Las ROMs solo se cargarán cuando TÚ accedas al sitio
3. Cloudflare Pages funciona con repositorios privados

---

## 🎮 Emuladores Soportados:

EmulatorJS soporta:
- ✅ NES
- ✅ SNES
- ✅ Game Boy / GBC / GBA
- ✅ Sega Genesis / Mega Drive
- ✅ Sega Master System / Game Gear
- ✅ Nintendo 64
- ✅ PlayStation 1
- ✅ Arcade (MAME)
- ✅ Atari 2600/7800

---

## 📝 Ejemplo Completo:

```bash
# 1. Descarga o extrae tus ROMs legalmente

# 2. Cópialas a la carpeta correcta
cp super-castlevania-iv.sfc roms/snes/
cp super-metroid.sfc roms/snes/
cp dr-robotnik-mean-bean.bin roms/genesis/

# 3. Renombra si es necesario
mv roms/genesis/dr-robotnik-mean-bean.bin roms/genesis/dr-robotnik-mean-bean.md

# 4. Commit y push
git add roms/
git commit -m "Añadir ROMs de SNES y Genesis"
git push

# 5. Despliega (si no es automático)
./deploy-cloudflare.sh
```

---

## ❓ Preguntas Frecuentes:

**P: ¿Dónde consigo ROMs legalmente?**
R: Debes extraerlas de tus cartuchos físicos o comprar colecciones oficiales.

**P: ¿Funcionarán las ROMs descargadas de Internet?**
R: Técnicamente sí, pero solo debes usar ROMs de juegos que poseas.

**P: ¿Puedo usar ROMs comprimidas (.zip)?**
R: No, deben estar descomprimidas (.sfc, .md, etc.)

**P: ¿Las ROMs se suben a GitHub públicamente?**
R: Solo si tu repositorio es público. Puedes hacerlo privado.

**P: ¿Qué pasa si la ROM no funciona?**
R: Verifica que:
  - El nombre del archivo coincida exactamente
  - La extensión sea correcta (.sfc, .md)
  - El archivo no esté corrupto
  - Está en la carpeta correcta (snes/ o genesis/)

---

**¡Listo! Ahora solo necesitas subir tus ROMs y podrás jugar directamente en tu sitio web! 🎮**
