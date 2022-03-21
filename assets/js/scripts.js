
const baseURL = 'https://jsonplaceholder.typicode.com/';

const obtenerDatos = async () => {
  const arregloDatos = [];
  i=1;
  do{
    const datos = await fetch(`${baseURL}photos?id=${i}`);
    try{
      const json =  await datos.json();
      arregloDatos.push(json);
      i = i+1;
    }catch(error){
      console.log('error al encontrar promesa');
    }
  }while(i<21);
    return arregloDatos
}

obtenerDatos()
 .then((datos) => {
  datos.forEach( dato => console.log(`El Titulo del Id ${dato[0].id} es: ${dato[0].title}`) );
  mensaje(datos);
});


 const mensaje = (dato) => {
  const inforacion = console.log('Información Enviada');
  return new Promise((resolve) => {
      setTimeout(() => {
          if(dato){
              resolve(inforacion);
          }else{
            reject(`Sin informacion`);
        }
      },3000); 
  });
}





