# 🚀 Guía Completa - Despliegue en AWS CloudFront

## ¿Qué es AWS CloudFront?

**AWS CloudFront** es el servicio CDN (Content Delivery Network) de Amazon Web Services, similar a Cloudflare pero con la infraestructura de AWS.

### Ventajas de CloudFront:

- ✅ **CDN Global**: 400+ ubicaciones en todo el mundo
- ✅ **Free Tier**: 50GB de transferencia gratis/mes (primer año)
- ✅ **Integración S3**: Almacenamiento confiable
- ✅ **HTTPS Gratis**: Certificado SSL incluido
- ✅ **DDoS Protection**: Seguridad incluida
- ✅ **Rápido**: Latencia ultra baja
- ✅ **URLs Aleatorias**: Difícil de bloquear en redes corporativas

---

## 🎯 Método 1: Script Automatizado (MÁS FÁCIL)

```bash
./deploy-aws.sh
```

### ¿Qué hace el script?

1. ✅ Verifica archivos del proyecto
2. ✅ Instala AWS CLI (si no está instalado)
3. ✅ Configura credenciales AWS
4. ✅ Crea bucket S3
5. ✅ Sube archivos
6. ✅ Crea distribución CloudFront
7. ✅ Te da la URL final

**Tiempo:** 15-20 minutos (CloudFront tarda en activarse)

---

## 📋 Requisitos Previos

### 1. Cuenta de AWS

**Crear cuenta (GRATIS):**
1. Ve a: https://aws.amazon.com/free/
2. Click en "Crear una cuenta de AWS"
3. Completa el registro (requiere tarjeta de crédito)
4. Selecciona plan "Basic Support - Free"

**AWS Free Tier incluye:**
- 🎁 50GB transferencia CloudFront/mes (12 meses)
- 🎁 5GB almacenamiento S3 (siempre gratis)
- 🎁 20,000 requests HTTP/mes (siempre gratis)
- 🎁 2,000 requests HTTPS/mes (siempre gratis)

### 2. Credenciales AWS (Access Keys)

**Obtener credenciales:**
1. Ve a: https://console.aws.amazon.com/iam/home#/security_credentials
2. Inicia sesión
3. Click en "Access keys"
4. Click en "Create access key"
5. Selecciona "Command Line Interface (CLI)"
6. Click en "Create access key"
7. **GUARDA**:
   - Access Key ID: `AKIA...`
   - Secret Access Key: `wJalrXUtn...`

⚠️ **IMPORTANTE**: Guarda estas credenciales en un lugar seguro. No las compartas.

---

## 🚀 Despliegue Paso a Paso

### Paso 1: Ejecutar el Script

```bash
./deploy-aws.sh
```

### Paso 2: Configurar Credenciales

Cuando el script te pida:

```
AWS Access Key ID: AKIA... (pega tu Access Key)
AWS Secret Access Key: wJalrXUtn... (pega tu Secret Key)
Default region name: us-east-1
Default output format: json
```

### Paso 3: Esperar el Despliegue

- S3 bucket: ~1 minuto
- Subir archivos: ~2 minutos
- CloudFront distribution: ~10-15 minutos

### Paso 4: Acceder a tu Sitio

Tu sitio estará en dos URLs:

**S3 (disponible inmediatamente):**
```
http://tu-bucket.s3-website-us-east-1.amazonaws.com
```

**CloudFront (tarda 10-15 min, más rápido y con HTTPS):**
```
https://d1a2b3c4d5e6f7.cloudfront.net
```

---

## 🎮 Método 2: Desde la Consola Web (Sin Terminal)

### Paso 1: Crear Bucket S3

1. Ve a: https://s3.console.aws.amazon.com/s3/
2. Click en "Create bucket"
3. Configuración:
   - **Bucket name**: `hypackel-games-tu-nombre`
   - **Region**: US East (N. Virginia) us-east-1
   - **Desmarcar**: "Block all public access"
   - **Marcar**: "I acknowledge..."
4. Click en "Create bucket"

### Paso 2: Configurar Bucket para Website

1. Entra al bucket creado
2. Tab "Properties"
3. Scroll hasta "Static website hosting"
4. Click en "Edit"
5. Configuración:
   - **Enable**: Static website hosting
   - **Hosting type**: Host a static website
   - **Index document**: index.html
6. Click en "Save changes"

### Paso 3: Hacer Bucket Público

1. Tab "Permissions"
2. Click en "Bucket Policy"
3. Pega esto (reemplaza `TU-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::TU-BUCKET-NAME/*"
    }
  ]
}
```

4. Click en "Save changes"

### Paso 4: Subir Archivos

1. Tab "Objects"
2. Click en "Upload"
3. Arrastra estos archivos:
   - index.html
   - styles.css
   - library.js
   - _headers
   - Carpeta games/ completa
4. Click en "Upload"

### Paso 5: Crear Distribución CloudFront

1. Ve a: https://console.aws.amazon.com/cloudfront/
2. Click en "Create distribution"
3. Configuración:

   **Origin domain**: Selecciona tu bucket S3 website endpoint
   - Formato: `tu-bucket.s3-website-us-east-1.amazonaws.com`

   **Protocol**: HTTP only

   **Viewer protocol policy**: Redirect HTTP to HTTPS

   **Compress objects automatically**: Yes

   **Default root object**: index.html

4. Click en "Create distribution"
5. Espera 10-15 minutos

### Paso 6: Obtener URL

1. En la lista de distribuciones, copia el "Domain name"
2. Tu sitio: `https://d1a2b3c4d5e6f7.cloudfront.net`

---

## 🔒 Usar en el Trabajo con VPN

### ¿Por qué CloudFront funciona en redes corporativas?

1. **URLs Aleatorias**:
   - CloudFront genera dominios aleatorios: `d1a2b3c4d5e6f7.cloudfront.net`
   - No están en listas de bloqueo corporativas

2. **Infraestructura AWS**:
   - Miles de empresas usan AWS
   - Bloquear CloudFront = bloquear AWS completo
   - IT corporativo no puede bloquearlo

3. **HTTPS por Defecto**:
   - Todo el tráfico está cifrado
   - Inspección de paquetes no puede ver el contenido

### Configuración Recomendada:

```
1. Despliega en CloudFront (pasos de arriba)
2. Usa la URL aleatoria de CloudFront
3. (Opcional) Activa un VPN genérico si es necesario
4. Accede desde el trabajo sin problemas
```

---

## 🎨 Dominio Personalizado

### Paso 1: Configurar Dominio en CloudFront

1. Console → CloudFront → Tu distribución
2. Tab "General" → "Edit"
3. "Alternate domain names (CNAMEs)": `games.tudominio.com`
4. "SSL certificate": Request certificate (gratis)
5. Sigue el proceso de validación
6. "Save changes"

### Paso 2: Configurar DNS

En tu proveedor de dominios (GoDaddy, Namecheap, etc.):

```
Type: CNAME
Name: games
Value: d1a2b3c4d5e6f7.cloudfront.net
TTL: 3600
```

---

## 🔄 Actualizar Contenido

### Opción 1: Con AWS CLI

```bash
# Subir archivos nuevos
aws s3 sync . s3://tu-bucket --exclude '.git/*'

# Limpiar cache de CloudFront
aws cloudfront create-invalidation \
  --distribution-id TU-DISTRIBUTION-ID \
  --paths '/*'
```

### Opción 2: Consola Web

1. S3 Console → Tu bucket → Upload → Nuevos archivos
2. CloudFront Console → Tu distribución → Invalidations → Create invalidation → Path: `/*`

---

## 💰 Costos

### Free Tier (Primer Año):
- ✅ 50GB transferencia: **GRATIS**
- ✅ 5GB almacenamiento S3: **GRATIS**
- ✅ 2M requests: **GRATIS**

### Después del Free Tier:
Para un sitio de juegos con tráfico moderado (10GB/mes):
- CloudFront: ~$1.00/mes
- S3 almacenamiento: ~$0.10/mes
- S3 requests: ~$0.05/mes
- **Total: ~$1.15/mes**

### Optimización de Costos:
- Activa compresión (reduce transferencia)
- Usa cache headers (menos requests)
- CloudFront cache (menos hits a S3)

---

## ❓ Solución de Problemas

### Error: "Bucket name already exists"
- Los nombres de bucket son globales
- Usa: `hypackel-games-tu-nombre-$(date +%s)`

### Error: "Access Denied"
- Verifica la bucket policy
- Asegúrate de desmarcar "Block all public access"

### CloudFront no carga
- Espera 10-15 minutos después de crear la distribución
- Status debe decir "Deployed"

### Archivos viejos se muestran
- Crea una invalidation en CloudFront
- Path: `/*`

### Credenciales inválidas
```bash
aws configure
# Vuelve a ingresar tus credenciales
```

---

## 🔗 Enlaces Útiles

- **AWS Console**: https://console.aws.amazon.com/
- **S3 Console**: https://s3.console.aws.amazon.com/
- **CloudFront Console**: https://console.aws.amazon.com/cloudfront/
- **IAM Credentials**: https://console.aws.amazon.com/iam/home#/security_credentials
- **AWS Free Tier**: https://aws.amazon.com/free/
- **Documentación CloudFront**: https://docs.aws.amazon.com/cloudfront/
- **Documentación S3**: https://docs.aws.amazon.com/s3/

---

## 📊 Comparación: Cloudflare vs CloudFront

| Característica | Cloudflare Pages | AWS CloudFront |
|---|---|---|
| **Free Tier** | Ilimitado siempre | 50GB/mes (1 año) |
| **Despliegue** | Más fácil | Más complejo |
| **Git Integration** | Sí | No (requiere CI/CD) |
| **Custom Domain** | Gratis | Requiere certificado |
| **Velocidad** | Muy rápido | Muy rápido |
| **Bloqueo corporativo** | Moderado | Bajo (difícil de bloquear) |
| **Control** | Menos | Más (AWS completo) |

**Recomendación:**
- **Cloudflare**: Si quieres facilidad y gratis siempre
- **CloudFront**: Si quieres máxima compatibilidad en redes corporativas

---

## 🎉 ¡Listo para Desplegar!

**Ejecuta el script:**
```bash
./deploy-aws.sh
```

O sigue la guía manual paso a paso.

**Tu sitio estará online en 15-20 minutos con:**
- ✅ 30+ juegos
- ✅ CDN global
- ✅ HTTPS gratis
- ✅ URL difícil de bloquear
- ✅ Compatible con VPN

---

**¿Problemas? Abre un issue o consulta la documentación de AWS.**
