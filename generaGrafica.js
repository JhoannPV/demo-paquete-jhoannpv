const { promedio, desviacionEstandar } = require('@jhoannpv/actions-codigofacilito4/estadisticas');
const { generarGrafico } = require('@jhoannpv/actions-codigofacilito4/graficas');

const datos = [10, 20, 30, 40, 50];
const etiquetas = ['Ene', 'Feb', 'Mar', 'Abr', 'May'];

console.log('Promedio:', promedio(datos));
console.log('Desviación estándar:', desviacionEstandar(datos));

generarGrafico('./public/grafica.png', etiquetas, datos).then(() => {
    console.log('Gráfica generada exitosamente');
});
