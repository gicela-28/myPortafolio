/**
 * Transforma una URL estándar de Cloudinary en una ultra rápida.
 * @param {string} url - La URL original de la imagen.
 * @param {number} width - (Opcional) Ancho deseado en píxeles.
 */
function optimizarImagen(url, width = 800) {
  if (!url) return "";
  
  // Dividimos la URL en la palabra 'upload'
  const partes = url.split('/upload/');
  
  // Insertamos los parámetros de Cloudinary:
  // f_auto: Formato automático (WebP/AVIF)
  // q_auto: Calidad automática (compresión inteligente)
  // w_xxx: Redimensiona al ancho que necesites
  const parametros = `upload/f_auto,q_auto,w_${width}/`;
  
  return partes[0] + '/' + parametros + partes[1];
}