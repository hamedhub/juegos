#!/bin/bash

# Despliegue en AWS CloudFront + S3
# Hypackel Games - Biblioteca de Juegos

clear

cat << "EOF"
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║     🎮  HYPACKEL GAMES - Despliegue en AWS CloudFront  🎮    ║
║                                                              ║
║   Biblioteca de 30+ Juegos HTML5                            ║
║   CloudFront CDN + S3 Storage                               ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

EOF

echo ""
echo "Este script desplegará tu sitio en AWS CloudFront + S3."
echo ""

# Colores
GREEN='\033[0;32m'
BLUE='\033[0;34m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Paso 1: Verificar archivos
echo -e "${BLUE}📁 Paso 1: Verificando archivos del proyecto...${NC}"
if [ ! -f "index.html" ] || [ ! -f "library.js" ] || [ ! -f "styles.css" ]; then
    echo -e "${RED}❌ Error: Archivos del proyecto no encontrados${NC}"
    exit 1
fi
echo -e "${GREEN}✅ Archivos encontrados${NC}"
echo ""

# Paso 2: Verificar/Instalar AWS CLI
echo -e "${BLUE}🔧 Paso 2: Verificando AWS CLI...${NC}"
if ! command -v aws &> /dev/null; then
    echo -e "${YELLOW}AWS CLI no está instalado. Instalando...${NC}"

    # Instalar AWS CLI v2
    if [[ "$OSTYPE" == "linux-gnu"* ]]; then
        curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
        unzip -q awscliv2.zip
        sudo ./aws/install
        rm -rf aws awscliv2.zip
    elif [[ "$OSTYPE" == "darwin"* ]]; then
        curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"
        sudo installer -pkg AWSCLIV2.pkg -target /
        rm AWSCLIV2.pkg
    else
        echo -e "${YELLOW}Instalación manual requerida. Visita: https://aws.amazon.com/cli/${NC}"
        exit 1
    fi
fi

aws --version
echo -e "${GREEN}✅ AWS CLI instalado${NC}"
echo ""

# Paso 3: Verificar cuenta AWS
echo -e "${BLUE}🔐 Paso 3: Verificación de cuenta AWS${NC}"
echo ""
echo -e "${YELLOW}⚠️  IMPORTANTE: Necesitas una cuenta de AWS${NC}"
echo ""
read -p "¿Tienes una cuenta de AWS? (s/n): " tiene_cuenta

if [ "$tiene_cuenta" != "s" ] && [ "$tiene_cuenta" != "S" ]; then
    echo ""
    echo -e "${YELLOW}📝 CREAR CUENTA DE AWS:${NC}"
    echo "   1. Ve a: https://aws.amazon.com/free/"
    echo "   2. Click en 'Crear una cuenta de AWS'"
    echo "   3. Completa el registro (requiere tarjeta de crédito*)"
    echo "   4. Activa el plan gratuito (Free Tier)"
    echo ""
    echo -e "${YELLOW}*Nota: AWS Free Tier incluye:${NC}"
    echo "   • 5GB de almacenamiento S3"
    echo "   • 50GB de transferencia CloudFront"
    echo "   • 12 meses gratis"
    echo ""
    exit 0
fi

# Paso 4: Configurar credenciales
echo ""
echo -e "${BLUE}🔑 Paso 4: Configuración de credenciales AWS${NC}"
echo ""
echo "Necesitas tus credenciales de AWS:"
echo ""
echo "Para obtenerlas:"
echo "1. Ve a: https://console.aws.amazon.com/iam/home#/security_credentials"
echo "2. Click en 'Access keys' → 'Create access key'"
echo "3. Copia: Access Key ID y Secret Access Key"
echo ""
read -p "¿Ya tienes tus credenciales? (s/n): " tiene_credenciales

if [ "$tiene_credenciales" != "s" ] && [ "$tiene_credenciales" != "S" ]; then
    echo ""
    echo -e "${YELLOW}Primero obtén tus credenciales y vuelve a ejecutar este script.${NC}"
    exit 0
fi

# Configurar AWS CLI
echo ""
echo "Configurando AWS CLI..."
echo ""
aws configure

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error en la configuración${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Credenciales configuradas${NC}"
echo ""

# Paso 5: Configurar nombre del proyecto
echo -e "${BLUE}🎮 Paso 5: Configuración del proyecto${NC}"
echo ""
echo "¿Cómo quieres llamar a tu bucket S3?"
echo "(Solo letras minúsculas, números y guiones. Debe ser único globalmente)"
echo ""
read -p "Nombre del bucket [hypackel-games-$(date +%s)]: " bucket_name
bucket_name=${bucket_name:-hypackel-games-$(date +%s)}

# Validar nombre
if [[ ! $bucket_name =~ ^[a-z0-9-]+$ ]]; then
    echo -e "${RED}❌ Nombre inválido${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Bucket: $bucket_name${NC}"
echo ""

# Paso 6: Crear bucket S3
echo -e "${BLUE}📦 Paso 6: Creando bucket S3...${NC}"

aws s3 mb s3://$bucket_name --region us-east-1

if [ $? -ne 0 ]; then
    echo -e "${RED}❌ Error creando bucket. Prueba con otro nombre.${NC}"
    exit 1
fi

echo -e "${GREEN}✅ Bucket creado${NC}"
echo ""

# Paso 7: Configurar bucket para website hosting
echo -e "${BLUE}🌐 Paso 7: Configurando bucket para website...${NC}"

# Configurar website
aws s3 website s3://$bucket_name --index-document index.html

# Hacer bucket público
cat > /tmp/bucket-policy.json <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$bucket_name/*"
    }
  ]
}
EOF

aws s3api put-bucket-policy --bucket $bucket_name --policy file:///tmp/bucket-policy.json
rm /tmp/bucket-policy.json

# Desactivar block public access
aws s3api put-public-access-block \
    --bucket $bucket_name \
    --public-access-block-configuration \
    "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"

echo -e "${GREEN}✅ Bucket configurado${NC}"
echo ""

# Paso 8: Subir archivos
echo -e "${BLUE}📤 Paso 8: Subiendo archivos a S3...${NC}"

aws s3 sync . s3://$bucket_name \
    --exclude ".git/*" \
    --exclude "*.sh" \
    --exclude "*.md" \
    --exclude ".gitignore" \
    --cache-control "max-age=3600" \
    --metadata-directive REPLACE

echo -e "${GREEN}✅ Archivos subidos${NC}"
echo ""

# Paso 9: Crear distribución CloudFront
echo -e "${BLUE}🚀 Paso 9: Creando distribución CloudFront...${NC}"
echo "Esto puede tomar 10-15 minutos..."
echo ""

# Configuración CloudFront
cat > /tmp/cloudfront-config.json <<EOF
{
  "CallerReference": "$bucket_name-$(date +%s)",
  "Comment": "Hypackel Games - CloudFront Distribution",
  "Enabled": true,
  "Origins": {
    "Quantity": 1,
    "Items": [
      {
        "Id": "S3-$bucket_name",
        "DomainName": "$bucket_name.s3-website-us-east-1.amazonaws.com",
        "CustomOriginConfig": {
          "HTTPPort": 80,
          "HTTPSPort": 443,
          "OriginProtocolPolicy": "http-only"
        }
      }
    ]
  },
  "DefaultRootObject": "index.html",
  "DefaultCacheBehavior": {
    "TargetOriginId": "S3-$bucket_name",
    "ViewerProtocolPolicy": "redirect-to-https",
    "AllowedMethods": {
      "Quantity": 2,
      "Items": ["GET", "HEAD"],
      "CachedMethods": {
        "Quantity": 2,
        "Items": ["GET", "HEAD"]
      }
    },
    "Compress": true,
    "MinTTL": 0,
    "ForwardedValues": {
      "QueryString": false,
      "Cookies": {
        "Forward": "none"
      }
    },
    "TrustedSigners": {
      "Enabled": false,
      "Quantity": 0
    }
  },
  "ViewerCertificate": {
    "CloudFrontDefaultCertificate": true
  }
}
EOF

# Crear distribución
DISTRIBUTION_OUTPUT=$(aws cloudfront create-distribution --distribution-config file:///tmp/cloudfront-config.json 2>&1)

if [ $? -eq 0 ]; then
    CLOUDFRONT_DOMAIN=$(echo $DISTRIBUTION_OUTPUT | grep -oP '"DomainName": "\K[^"]+' | head -1)
    DISTRIBUTION_ID=$(echo $DISTRIBUTION_OUTPUT | grep -oP '"Id": "\K[^"]+' | head -1)

    rm /tmp/cloudfront-config.json

    clear
    cat << "EOF"
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║              🎉  ¡DESPLIEGUE EXITOSO!  🎉                    ║
║                                                              ║
╚══════════════════════════════════════════════════════════════╝

EOF
    echo ""
    echo -e "${GREEN}✅ Tu sitio está DESPLEGADO en AWS CloudFront!${NC}"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🌐 URLs:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "  S3 Website:"
    echo "  http://$bucket_name.s3-website-us-east-1.amazonaws.com"
    echo ""
    echo "  CloudFront CDN (puede tomar 10-15 min en activarse):"
    echo "  https://$CLOUDFRONT_DOMAIN"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📋 Información del Despliegue:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "  Bucket S3: $bucket_name"
    echo "  Región: us-east-1"
    echo "  CloudFront ID: $DISTRIBUTION_ID"
    echo "  Dominio: $CLOUDFRONT_DOMAIN"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📱 Próximos Pasos:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. 🌐 Accede a tu sitio:"
    echo "   https://$CLOUDFRONT_DOMAIN"
    echo "   (Espera 10-15 min si no carga aún)"
    echo ""
    echo "2. 🔒 Para usar en el trabajo:"
    echo "   • Usa cualquier VPN (CloudFront es difícil de bloquear)"
    echo "   • La URL CloudFront es aleatoria y no está en listas de bloqueo"
    echo ""
    echo "3. 🎨 Dominio personalizado:"
    echo "   • Console AWS → CloudFront → $DISTRIBUTION_ID"
    echo "   • Alternate Domain Names (CNAMEs)"
    echo "   • Añade tu dominio"
    echo ""
    echo "4. 🔄 Actualizar contenido:"
    echo "   aws s3 sync . s3://$bucket_name --exclude '.git/*'"
    echo "   aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'"
    echo ""
    echo "5. 💰 Costos (Free Tier):"
    echo "   • 50GB transferencia/mes: GRATIS (primer año)"
    echo "   • 5GB almacenamiento S3: GRATIS (siempre)"
    echo "   • Después: ~\$0.50/mes para tráfico normal"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""

    # Guardar info
    cat > aws-deployment-info.txt <<INFO
Hypackel Games - AWS CloudFront Deployment

Fecha: $(date)
Bucket: $bucket_name
Región: us-east-1
CloudFront ID: $DISTRIBUTION_ID
Dominio CloudFront: $CLOUDFRONT_DOMAIN

URLs:
- S3: http://$bucket_name.s3-website-us-east-1.amazonaws.com
- CloudFront: https://$CLOUDFRONT_DOMAIN

Comandos útiles:
- Actualizar archivos: aws s3 sync . s3://$bucket_name --exclude '.git/*'
- Invalidar cache: aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths '/*'
- Ver distribución: aws cloudfront get-distribution --id $DISTRIBUTION_ID
INFO

    echo -e "${GREEN}✅ Información guardada en: aws-deployment-info.txt${NC}"
    echo ""
else
    echo -e "${RED}❌ Error creando distribución CloudFront${NC}"
    echo ""
    echo "Tu sitio está disponible en S3:"
    echo "http://$bucket_name.s3-website-us-east-1.amazonaws.com"
    echo ""
    echo "Puedes crear la distribución CloudFront manualmente:"
    echo "https://console.aws.amazon.com/cloudfront/"
    exit 1
fi

echo -e "${GREEN}🎉 ¡Despliegue completado! 🎉${NC}"
echo ""
