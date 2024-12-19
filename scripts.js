/*CREAMOS UN VINCULO ENTRE CADA H5 y h3  A TRAVES DE  ID asi al dar click en un h5 va a su correspondiente h3*/
document.getElementById('RamosLateral').addEventListener('click', () => {document.getElementById('RamosCentral').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('FloresLateral').addEventListener('click', () => {document.getElementById('FloresCentral').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('EventosLateral').addEventListener('click', () => {document.getElementById('EventosCentral').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('DesayunosLateral').addEventListener('click', () => {document.getElementById('DesayunosCentral').scrollIntoView({ behavior: 'smooth' });});

/*AHORA HACEMOS LO MISMO ENTRE LOS Li Y H4*/
document.getElementById('RCLateral').addEventListener('click', () => {document.getElementById('RC00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('RRLateral').addEventListener('click', () => {document.getElementById('RR00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('RSLateral').addEventListener('click', () => {document.getElementById('RS00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('FLateral').addEventListener('click', () => {document.getElementById('F00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('BLateral').addEventListener('click', () => {document.getElementById('B00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('CLateral').addEventListener('click', () => {document.getElementById('C00').scrollIntoView({ behavior: 'smooth' });});

document.getElementById('FELateral').addEventListener('click', () => {document.getElementById('FE00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('FMLateral').addEventListener('click', () => {document.getElementById('FM00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('FLLateral').addEventListener('click', () => {document.getElementById('FL00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('FRLateral').addEventListener('click', () => {document.getElementById('FR00').scrollIntoView({ behavior: 'smooth' });});
document.getElementById('FFLateral').addEventListener('click', () => {document.getElementById('FF00').scrollIntoView({ behavior: 'smooth' });});