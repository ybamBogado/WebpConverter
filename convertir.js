const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

(async () => {
  const entrada = process.argv[2] || '.';
  const salida = path.join(entrada, 'convertidas');
  const formato = 'webp';
  const calidad = 80;
  const inicio = Date.now();

  const archivos = fs.readdirSync(entrada)
    .filter(f => /\.(jpg|jpeg|png)$/i.test(f) && !f.startsWith('.'));

  if (!archivos.length) {
    console.log('No se encontraron JPG/PNG en: ' + entrada);
    return;
  }

  if (!fs.existsSync(salida)) fs.mkdirSync(salida, { recursive: true });

  const total = archivos.length;
  let ok = 0;
  let fail = 0;
  const errores = [];

  for (let i = 0; i < total; i++) {
    const src = path.join(entrada, archivos[i]);
    const nombre = path.basename(archivos[i], path.extname(archivos[i])) + '.' + formato;
    const dst = path.join(salida, nombre);

    process.stdout.write(`${i+1}/${total} - ${nombre}  `);

    try {
      await sharp(src).withMetadata().toFormat(formato, { quality: calidad }).toFile(dst);
      ok++;
      process.stdout.write('\r');
    } catch (e) {
      fail++;
      errores.push(archivos[i] + ' -> ' + e.message);
      process.stdout.write('FALLÓ\n');
    }
  }

  console.log('\n=== Resumen ===');
  console.log('OK: ' + ok + ' | Fallos: ' + fail + ' | Tiempo: ' + ((Date.now()-inicio)/1000).toFixed(1) + 's');
  console.log('Destino: ' + salida);

  if (errores.length) {
    const logPath = path.join(salida, 'errores.txt');
    fs.writeFileSync(logPath, errores.join('\n'));
    console.log('Errores guardados en: ' + logPath);
  }
})();
