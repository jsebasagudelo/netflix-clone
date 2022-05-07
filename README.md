# "MOVIE " website - "NETFLIX SCALAB" 

Technologies

  ## DEPENDENCIAS USADAS PARA EL PROYECTO:
- [axios](https://www.npmjs.com/package/axios) for data fetching
- [react-router-dom](https://www.npmjs.com/package/react-router-dom) for routing
- [prop-types]





##  API UTILIZADO  
- https://www.themoviedb.org/




## PATRONES DE DISEÑO
Render Props, Provider, Style Component


## Arquitectura
Por estados

https://api.themoviedb.org/3/movie/top_rated?api_key=a3f405c037b3877af91a264045307fa3&language=en-US


//contex => contexts/ parcel (objetos globales por pagina)
//context => flux /reducer  useReducer(rootReducer,state)



actions(acciones) en realidad y a la función que está en el archivo index.js llamada setPokemos es un action creator(creador de acción)

-Como norma los actions son constantes de solo lectura que vamos a importar para ser usadas en su action creator y en su reducer correspondientes.
-Los action creator son funciones que regresan un objeto, que por norma tienen como estructura:
{ type: MI_ACTION }
pero además se les pueden pasar datos útiles(es a lo que llamamos payload) y, por tanto, el creador de acción de la clase queda así:



