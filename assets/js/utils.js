export const averageYear = (songs) =>
  songs.reduce((acc, curr) => acc + curr.year, 0) / songs.length;


export const filter = (array, callback) => array.filter(callback) // callback -> ()=>{}

//10. Crear un módulo que exporte una función para calcular el promedio del año de lanzamiento de las canciones del array de entrada. (Consejo: usar reduce)
  export const promedio=(canciones)=>{
    return canciones.map(song=>song.year).reduce((a,b)=>a+b,0)/canciones.length;
  }
