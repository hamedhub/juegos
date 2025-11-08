#!/bin/bash

# Despliegue Rápido en Cloudflare Pages
# Este script es interactivo y te guiará en el proceso

clear

echo "╔══════════════════════════════════════════════════════════════╗"
echo "║   🎮  DESPLIEGUE EN CLOUDFLARE PAGES - Hypackel Games  🎮   ║"
echo "╚══════════════════════════════════════════════════════════════╝"
echo ""
echo "Este script desplegará tu biblioteca de juegos en Cloudflare Pages."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Verificar autenticación
echo "🔐 Verificando autenticación con Cloudflare..."
echo ""

if wrangler whoami 2>&1 | grep -q "not authenticated"; then
    echo "⚠️  No estás autenticado con Cloudflare."
    echo ""
    echo "IMPORTANTE: Se abrirá tu navegador web."
    echo "Pasos a seguir:"
    echo ""
    echo "1. Se abrirá una página de Cloudflare"
    echo "2. Inicia sesión con tu cuenta de Cloudflare"
    echo "3. Autoriza el acceso haciendo click en 'Allow'"
    echo "4. Vuelve aquí a la terminal"
    echo ""
    read -p "Presiona ENTER para abrir el navegador y autenticarte..."

    # Intentar login
    wrangler login

    if [ $? -ne 0 ]; then
        echo ""
        echo "❌ Error en la autenticación."
        echo ""
        echo "ALTERNATIVA: Despliegue Manual desde Dashboard"
        echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
        echo ""
        echo "Si el navegador no se abre, puedes desplegar manualmente:"
        echo ""
        echo "1. Ve a: https://dash.cloudflare.com"
        echo "2. Click en: Workers & Pages → Create → Pages"
        echo "3. Click en: Connect to Git"
        echo "4. Selecciona tu repositorio de GitHub"
        echo "5. Configuración:"
        echo "   - Project name: hypackel-games"
        echo "   - Build command: (vacío)"
        echo "   - Build output: /"
        echo "6. Click en: Save and Deploy"
        echo ""
        echo "Tu sitio estará en: https://hypackel-games.pages.dev"
        echo ""
        exit 1
    fi
else
    echo "✅ Ya estás autenticado con Cloudflare"
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 DESPLEGANDO EN CLOUDFLARE PAGES..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Generar nombre único
PROJECT_NAME="hypackel-games-$(date +%s)"

echo "📦 Proyecto: $PROJECT_NAME"
echo "📁 Subiendo archivos..."
echo ""

# Desplegar
wrangler pages deploy . --project-name="$PROJECT_NAME"

if [ $? -eq 0 ]; then
    clear
    echo ""
    echo "╔══════════════════════════════════════════════════════════════╗"
    echo "║                🎉  ¡DESPLIEGUE EXITOSO!  🎉                  ║"
    echo "╚══════════════════════════════════════════════════════════════╝"
    echo ""
    echo "✅ Tu sitio está ONLINE en Cloudflare Pages!"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🌐 URL DE TU SITIO:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "   https://$PROJECT_NAME.pages.dev"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📱 PRÓXIMOS PASOS:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. 🌐 Abre tu navegador:"
    echo "   https://$PROJECT_NAME.pages.dev"
    echo ""
    echo "2. 🎮 Prueba los 30+ juegos disponibles"
    echo ""
    echo "3. 🔒 Para usar en el trabajo con VPN:"
    echo "   • Descarga: https://1.1.1.1/"
    echo "   • Instala Cloudflare WARP"
    echo "   • Activa el VPN"
    echo "   • Accede a tu sitio sin restricciones"
    echo ""
    echo "4. 🎨 Dominio personalizado (opcional):"
    echo "   • Dashboard: https://dash.cloudflare.com"
    echo "   • Tu proyecto → Custom domains"
    echo "   • Añade: games.tudominio.com"
    echo ""
    echo "5. 🔄 Ver tu proyecto en el dashboard:"
    echo "   https://dash.cloudflare.com"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "🎉 ¡Disfruta jugando! 🎉"
    echo ""
else
    echo ""
    echo "❌ Hubo un error en el despliegue."
    echo ""
    echo "SOLUCIONES:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. Intenta de nuevo:"
    echo "   ./deploy-cloudflare.sh"
    echo ""
    echo "2. Despliegue Manual desde Dashboard:"
    echo "   • Ve a: https://dash.cloudflare.com"
    echo "   • Workers & Pages → Create → Pages"
    echo "   • Connect to Git → Selecciona tu repo"
    echo "   • Deploy"
    echo ""
    echo "3. Verifica tu autenticación:"
    echo "   wrangler whoami"
    echo ""
    exit 1
fi
