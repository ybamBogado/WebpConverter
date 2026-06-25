=
 WebP Converter
JPG/PNG -> WebP
=

Conversor de imagenes que usa Sharp para transformar JPG/PNG a WebP con
alta compresion, manteniendo metadatos (GPS, fecha, orientacion).

----------------------------------------------------------------------
USO
----------------------------------------------------------------------

  1. Arrastra una carpeta con fotos sobre convertir.bat

  2. El script busca todos los JPG/PNG en esa carpeta y los convierte
     a WebP con calidad 80%

  3. Las imagenes convertidas se guardan en:

        {carpeta}\convertidas\

  4. Si alguna falla, se genera errores.txt dentro de esa misma carpeta

----------------------------------------------------------------------
EJEMPLO
----------------------------------------------------------------------

  F:\celular\fotos\            (arrastras esta carpeta al .bat)
      -> IMG_001.jpg
      -> IMG_002.png
      -> ...

  Resultado:

  F:\celular\fotos\convertidas\
      -> IMG_001.webp
      -> IMG_002.webp
      -> ...

----------------------------------------------------------------------
INSTALACION
----------------------------------------------------------------------

  npm install

  Requiere Node.js 14+ y npm instalados en el sistema.

----------------------------------------------------------------------
DEPENDENCIAS
----------------------------------------------------------------------

  - sharp (conversion a WebP con metadatos)

----------------------------------------------------------------------
ESTRUCTURA DEL PROYECTO
----------------------------------------------------------------------

  convertir.bat        - Script de entrada (doble clic o arrastrar carpeta)
  convertir.js         - Logica de conversion
  package.json         - Dependencias del proyecto

----------------------------------------------------------------------
NOTAS
----------------------------------------------------------------------

  - Las imagenes originales NO se modifican ni eliminan
  - Los metadatos (GPS, fecha, etc.) se conservan en el WebP
  - Compatible con JPEG y PNG
