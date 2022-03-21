
const baseURL = 'https://jsonplaceholder.typicode.com/';



const obtenerDatos = async () => {
  const arregloDatos = [];
  for (let i = 1; i < 21; i++) {
    const datos = await fetch(`${baseURL}photos?id=${i}`);
    const json =  await datos.json();
    arregloDatos.push(json);
  }
  return arregloDatos
}


obtenerDatos()
 .then((datos) => {
  datos.forEach( dato => console.log(`El Titulo del Id ${dato[0].id} es: ${dato[0].title}`) );
});




