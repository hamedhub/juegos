#!/bin/bash

# Despliegue Rápido - Un Solo Comando
# Este script despliega tu sitio en Cloudflare Pages en menos de 5 minutos

clear

cat << "EOF"
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║   🎮  HYPACKEL GAMES - Despliegue en Cloudflare Pages  🎮   ║
║                                                              ║
║   Biblioteca de 30+ Juegos HTML5                            ║
║   Optimizado para VPN • Gratis • Sin Límites                ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

EOF

echo ""
echo "Este script desplegará tu sitio en Cloudflare Pages."
echo ""
echo "📋 REQUISITOS:"
echo "   ✅ Node.js y npm (ya instalados)"
echo "   ✅ Wrangler CLI (ya instalado)"
echo "   ❓ Cuenta de Cloudflare (gratis)"
echo ""
echo "⏱️  TIEMPO ESTIMADO: 3-5 minutos"
echo ""

# Verificar cuenta de Cloudflare
read -p "¿Tienes una cuenta de Cloudflare? (s/n): " tiene_cuenta
echo ""

if [ "$tiene_cuenta" != "s" ] && [ "$tiene_cuenta" != "S" ]; then
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📝 CREAR CUENTA DE CLOUDFLARE (2 minutos):"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. Abre: https://dash.cloudflare.com/sign-up"
    echo "2. Regístrate con tu email (100% gratis)"
    echo "3. Verifica tu email"
    echo "4. Vuelve aquí y ejecuta de nuevo:"
    echo "   ./deploy-now.sh"
    echo ""
    exit 0
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔐 AUTENTICACIÓN"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Se abrirá tu navegador para iniciar sesión en Cloudflare."
echo "Autoriza el acceso cuando se te solicite."
echo ""
read -p "Presiona ENTER para continuar..."

# Intentar login
wrangler login

if [ $? -ne 0 ]; then
    echo ""
    echo "❌ No se pudo completar la autenticación."
    echo ""
    echo "Opciones:"
    echo "1. Intenta manualmente: wrangler login"
    echo "2. Usa el dashboard web (sin terminal):"
    echo "   https://dash.cloudflare.com → Workers & Pages → Create"
    echo ""
    exit 1
fi

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 DESPLEGANDO..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Nombre del proyecto
PROJECT_NAME="hypackel-games-$(date +%s)"

echo "Proyecto: $PROJECT_NAME"
echo "Desplegando archivos..."
echo ""

# Desplegar
wrangler pages deploy . --project-name="$PROJECT_NAME"

if [ $? -eq 0 ]; then
    clear
    cat << "EOF"
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║              🎉  ¡DESPLIEGUE EXITOSO!  🎉                    ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

EOF
    echo ""
    echo "✅ Tu sitio está ONLINE en:"
    echo ""
    echo "   🌐  https://$PROJECT_NAME.pages.dev"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📱 PRÓXIMOS PASOS:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. 🌐 Abre tu navegador:"
    echo "   https://$PROJECT_NAME.pages.dev"
    echo ""
    echo "2. 🔒 Para usar en el trabajo (VPN):"
    echo "   • Descarga: https://1.1.1.1/"
    echo "   • Instala Cloudflare WARP"
    echo "   • Activa el VPN"
    echo "   • Accede a tu sitio sin restricciones"
    echo ""
    echo "3. 🎨 Dominio personalizado:"
    echo "   • Dashboard: https://dash.cloudflare.com"
    echo "   • Tu proyecto → Custom domains"
    echo "   • Añade: games.tudominio.com"
    echo ""
    echo "4. 🎮 ¡Disfruta de 30+ juegos!"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
else
    echo ""
    echo "❌ Hubo un error en el despliegue."
    echo ""
    echo "Alternativas:"
    echo ""
    echo "1. 🌐 Despliegue desde el navegador:"
    echo "   • Ve a: https://dash.cloudflare.com"
    echo "   • Workers & Pages → Create → Pages"
    echo "   • Upload assets → Arrastra los archivos"
    echo ""
    echo "2. 📞 Soporte:"
    echo "   • Docs: https://developers.cloudflare.com/pages/"
    echo "   • Community: https://community.cloudflare.com/"
    echo ""
    exit 1
fi

echo "✨ ¡Todo listo! ✨"
echo ""
