# WebP Converter

Convierte JPG/PNG a WebP usando Sharp, manteniendo metadatos (GPS, fecha, orientacion).

## Uso

Arrastra una carpeta con fotos sobre `convertir.bat`:

```
Carpeta origen/
    IMG_001.jpg
    IMG_002.png
    ...

Resultado:

Carpeta origen/convertidas/
    IMG_001.webp
    IMG_002.webp
    ...
```

Si alguna conversion falla, se genera `errores.txt` dentro de la carpeta de salida.

## Instalacion

```bash
npm install
```

Requiere Node.js 14+ y npm.

## Dependencias

- [sharp](https://sharp.pixelplumbing.com/) - conversion a WebP con metadatos

## Estructura

```
convertir.bat        Script de entrada (doble clic o arrastrar carpeta)
convertir.js         Logica de conversion
package.json         Dependencias
```

## Notas

- Las imagenes originales no se modifican ni eliminan
- Los metadatos (GPS, fecha, etc.) se conservan en el WebP
- Compatible con JPEG y PNG
