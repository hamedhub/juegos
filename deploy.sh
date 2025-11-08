#!/bin/bash

# Script de Despliegue Automatizado para Cloudflare Pages
# Hypackel Games - Biblioteca de Juegos

echo "🎮 =================================================="
echo "   HYPACKEL GAMES - Despliegue en Cloudflare Pages"
echo "================================================== 🎮"
echo ""

# Colores para output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Paso 1: Verificar que estamos en el directorio correcto
echo -e "${BLUE}📁 Paso 1: Verificando archivos del proyecto...${NC}"
if [ ! -f "index.html" ] || [ ! -f "library.js" ] || [ ! -f "styles.css" ]; then
    echo -e "${RED}❌ Error: Archivos del proyecto no encontrados${NC}"
    echo "Asegúrate de estar en el directorio /home/user/juegos"
    exit 1
fi
echo -e "${GREEN}✅ Archivos encontrados${NC}"
echo ""

# Paso 2: Verificar wrangler
echo -e "${BLUE}🔧 Paso 2: Verificando Wrangler CLI...${NC}"
if ! command -v wrangler &> /dev/null; then
    echo -e "${RED}❌ Wrangler no está instalado${NC}"
    echo "Instalando Wrangler..."
    npm install -g wrangler
fi
echo -e "${GREEN}✅ Wrangler instalado: $(wrangler --version)${NC}"
echo ""

# Paso 3: Autenticación
echo -e "${BLUE}🔐 Paso 3: Autenticación con Cloudflare${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANTE: Necesitas una cuenta de Cloudflare${NC}"
echo ""
echo "Opciones:"
echo "  1. Si ya tienes cuenta: Se abrirá tu navegador para autorizar"
echo "  2. Si NO tienes cuenta: Regístrate en https://dash.cloudflare.com/sign-up"
echo ""
read -p "¿Tienes una cuenta de Cloudflare? (s/n): " tiene_cuenta

if [ "$tiene_cuenta" != "s" ] && [ "$tiene_cuenta" != "S" ]; then
    echo ""
    echo -e "${YELLOW}📝 Pasos para crear cuenta:${NC}"
    echo "   1. Ve a: https://dash.cloudflare.com/sign-up"
    echo "   2. Regístrate con tu email (es GRATIS)"
    echo "   3. Verifica tu email"
    echo "   4. Vuelve a ejecutar este script"
    echo ""
    exit 0
fi

echo ""
echo -e "${BLUE}🔓 Iniciando proceso de autenticación...${NC}"
echo "Se abrirá tu navegador. Inicia sesión y autoriza el acceso."
echo ""
read -p "Presiona ENTER para continuar..."

wrangler login

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error en la autenticación${NC}"
    echo "Intenta de nuevo ejecutando: wrangler login"
    exit 1
fi

echo -e "${GREEN}✅ Autenticación exitosa${NC}"
echo ""

# Paso 4: Configurar nombre del proyecto
echo -e "${BLUE}🎮 Paso 4: Configuración del proyecto${NC}"
echo ""
echo "¿Cómo quieres llamar a tu proyecto?"
echo "(Solo letras minúsculas, números y guiones. Ejemplo: hypackel-games)"
echo ""
read -p "Nombre del proyecto [hypackel-games]: " project_name
project_name=${project_name:-hypackel-games}

# Validar nombre del proyecto
if [[ ! $project_name =~ ^[a-z0-9-]+$ ]]; then
    echo -e "${RED}❌ Nombre inválido. Solo usa: letras minúsculas, números y guiones${NC}"
    exit 1
fi

echo ""
echo -e "${GREEN}✅ Proyecto: $project_name${NC}"
echo ""

# Paso 5: Despliegue
echo -e "${BLUE}🚀 Paso 5: Desplegando en Cloudflare Pages...${NC}"
echo ""
echo "Esto puede tomar 1-2 minutos..."
echo ""

wrangler pages deploy . --project-name="$project_name" --branch=main

if [ $? -eq 0 ]; then
    echo ""
    echo -e "${GREEN}=================================================="
    echo "🎉 ¡DESPLIEGUE EXITOSO! 🎉"
    echo "==================================================${NC}"
    echo ""
    echo -e "Tu sitio está disponible en:"
    echo -e "${BLUE}https://$project_name.pages.dev${NC}"
    echo ""
    echo -e "${YELLOW}📱 Próximos pasos:${NC}"
    echo ""
    echo "1. 🌐 Abre tu navegador y visita:"
    echo "   https://$project_name.pages.dev"
    echo ""
    echo "2. 🔒 Para usar en el trabajo con VPN:"
    echo "   - Descarga Cloudflare WARP: https://1.1.1.1/"
    echo "   - Activa el VPN"
    echo "   - Accede a tu sitio sin restricciones"
    echo ""
    echo "3. 🎨 Para dominio personalizado:"
    echo "   - Ve a: https://dash.cloudflare.com"
    echo "   - Selecciona tu proyecto: $project_name"
    echo "   - Custom domains → Set up a custom domain"
    echo ""
    echo "4. 🎮 ¡Disfruta jugando!"
    echo ""
else
    echo ""
    echo -e "${RED}❌ Error en el despliegue${NC}"
    echo ""
    echo "Posibles soluciones:"
    echo "1. Verifica tu conexión a internet"
    echo "2. Intenta de nuevo con: wrangler pages deploy . --project-name=$project_name"
    echo "3. Revisa el dashboard: https://dash.cloudflare.com"
    echo ""
    exit 1
fi

echo -e "${GREEN}=================================================="
echo "✨ Script completado exitosamente ✨"
echo "==================================================${NC}"
