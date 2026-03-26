/*
Ejercicios
Consejos:
1. Para mostrar el resultado de cada ejercicio, escribí un console.log con el formato: console.log('Ex 1.', valor o función).
2. Investigá un poco sobre el uso de reduce.
3. Creá un archivo js llamado utils.js y colocá allí todas las funciones auxiliares. (Ej. 10 y 14)
-------------------------------------------------------------------------------------------------------------------------------------
*/
//1.
import songs from '/assets/js/songs.js';
console.log(songs)

//2. Usar la función map para crear un nuevo array con el título de cada canción en letras mayúsculas.
const nuevotitulo=songs.map(song=>song.title.toUpperCase())
console.log(nuevotitulo)

//3. Usar la función filter para crear un nuevo array con todas las canciones lanzadas antes de 1975.
const cancionesAntes=songs.filter(song=>song.year<1975);
console.log(cancionesAntes)

//4. Usar destructuring para crear una variable que almacene el título de la primera canción del array.
const{title}=songs[0];
console.log(title)

//5. Usar la función find para obtener el objeto que representa la canción "Hotel California".
const cancioncalifornia=songs.find(song=>song.title==='Hotel California')
console.log(cancioncalifornia)

//6. Usar el operador rest para crear una función que reciba cualquier cantidad de argumentos y devuelva su suma. (Consejo: usar reduce)
function operator(...valores){
   return valores.reduce((a,b)=>a+b,0);
}
console.log(operator(2,2))

//7. Usar la función map y template literals para crear un nuevo array con strings en el formato "Título - Artista (Año)" para cada canción.
const cancionTemplate=songs.map(song=>`Titulo:${song.title}-Artista:${song.artist}(${song.year})`)
console.log(cancionTemplate)

//8. Usar destructuring y la función filter para crear un nuevo array con los títulos de todas las canciones de The Beatles.
const cancionesBeatles=songs.filter(song=>{
    const{artist}=song
    return artist ==='The Beatles'
 }).map(song=>song.title)
 console.log(cancionesBeatles)

//9. Usar arrow functions y la función reduce para calcular la cantidad total de años entre las fechas de lanzamiento de todas las canciones. (Consejo: usar reduce)
const years=songs.map(song=>{
  return song.year;
})
const total=years.reduce((a,b)=>a+b,0);
console.log(total)

//10. Crear un módulo que exporte una función para calcular el promedio del año de lanzamiento de las canciones del array de entrada. (Consejo: usar reduce)
import { promedio } from '/assets/js/utils.js';
console.log(promedio(songs))

//11. Usar la función find para obtener el objeto que representa la canción con el título más largo.
const titulos=songs.map(song=>song.title.length)
const numeroMayor=Math.max(...titulos)
//console.log(numeroMayor)
const tituloLargo=songs.find(song=>{
  return song.title.length>=numeroMayor; 
})
console.log(tituloLargo)

//12. Usar destructuring y template literals para mostrar en consola el título, artista y año del primer elemento del array.
const {artist,year}=songs[0];
const templateSongs= `Titulo: ${title}, Artista:${artist} y Año:${year}`;
console.log(templateSongs)

//13. Usar el operador rest para crear un nuevo array sin el primer elemento.
const [primerCancion,...restoDeCanciones] = songs;//en primer cancion guardo la primera posicion
console.log(restoDeCanciones)

//14. Importar la función filter() desde un módulo utils.js y usarla para crear un nuevo array con todas las canciones que tengan "Love" en el título.
import {filter} from '/assets/js/utils.js';
function cancionLove(cancion){
   return cancion.title.includes("Love")
}
console.log(filter(songs,cancionLove))

//15. Usar el método every() para verificar si todas las canciones tienen títulos de 10 o más caracteres.
const pelisMasDeCinco=(canciones)=>canciones.title.length>=5;
console.log(songs.every(pelisMasDeCinco))

//16. Usar el método some() para verificar si hay alguna canción de los años 80.
const cancionDeLos80=(canciones)=>canciones.year>=1980 && canciones.year<=1989;
console.log(songs.some(cancionDeLos80))

//17. Usar un template literal para crear un string que diga "The Beatles lanzó Let It Be en 1970."
songs.forEach(song=>{
  if(song.artist==="The Beatles" && song.title==="Let It Be"){
    console.log(`${song.artist} lanzo ${song.title} en ${song.year}`)
  }
})

//18. Usar el método map() para crear un nuevo array solo con los nombres de los artistas.
const artists=songs.map(song=>song.artist)
console.log(artists)

//19. Crear una función llamada randomSong que devuelva una canción del array songs de forma aleatoria. Mostrar en consola la llamada a esta función 3 veces.
function randomSong(arr){
  const aleatorio=Math.floor(Math.random()*arr.length)
  return arr[aleatorio]
}
console.log(randomSong(songs))
console.log(randomSong(songs))
console.log(randomSong(songs))

//20. Escribir tu propia función usando al menos 3 conceptos.
  //Como conceptos uso map(), filter() y template literals.
function cancion(arr){
  const cancionesDeLos70=arr.filter(song=>song.year>=1970 && song.year<=1979).map(song=>song.artist);
  return `Los artistas que lanzaron canciones en los años 70' son: ${cancionesDeLos70}`;
}
console.log(cancion(songs))

//21. Generar una canción tomando un artista random, un año random y un título random.
function random(arr){
  const tituloRandom=Math.floor(Math.random()*arr.length);
  const artistaRandom=Math.floor(Math.random()*arr.length);
  const añoRandom=Math.floor(Math.random()*arr.length);
  return `Titulo: ${arr[tituloRandom].title}, artista: ${arr[artistaRandom].artist} y año: ${arr[añoRandom].year}`;
}
console.log(random(songs))

/*22. Mostrar el mensaje 'El clima en [ciudad] es de [temperatura] [unidadd]'*/
const clima = {
  ciudad: "buenos Aires",
  temperatura: 30,
  unidad: "Grados Centígrados",
};
const mostrarClima = () => {
  return `El clima en ${clima.ciudad} es de ${clima.temperatura} ${clima.unidad}`
}
console.log(mostrarClima())