# Proyecto de Pre Entrega Talento Tech

Este es un simple proyecto de consola que simula peticiones GET, POST y DELETE a la [Fake Store API](https://fakestoreapi.com/).


## Comentarios
Hola profe! le comento, trate de organizar el proyecto haciendolo tipo un MVC y le agregue algunas validaciones simples, capaz me complique un poco mas de lo que deberia.

Otro tema, en el index la unica solución que se me ocurrio era hacer todo como si fuera una función que se ejecuta directamente porque que queria hacer returns si no se cumplian ciertas cosas, probe con un switch pero me convencio hacerlo mas asi.


## Documentación basica

Ejecutar el proyecto desde la consola con el siguiente comando:

```bash
npm start <metodo> <recurso> [parametros]
```

### Metodos

*   `get`: Obtiene todos los productos o un producto por su id.
*   `post`: Agrega un nuevo producto.
*   `delete`: Elimina un producto por su id.

### Recursos

*   `products`: Para obtener todos los productos o agregar uno nuevo.
*   `products/<id>`: Para obtener o eliminar un producto especifico.

### Parametros

*   Para `post`: `[titulo] [precio] [categoria]`

