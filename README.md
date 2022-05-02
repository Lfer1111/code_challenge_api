# code_challenge_api
## LaunchX code challenge, creating API

<img src="https://github.com/Lfer1111/code_challenge_api/blob/master/Project-Design.png">

## Dependencias que estoy usando en este proyecto:

> - Express como dependency para el server
> - Jest como devDependency para las Unit-test
> - ESLint como devDependency to fix files with linter

## Diseño de mis componentes:

> code_challenge_api como la carpeta raiz
>
> Aqui se encuenta el DB visualpartners.json y el package.json
>
> Tambien se encuentran el archivo de rules del eslint y el gitignore
>
>> Carpeta lib
>>> En la carpeta lib encontramos los archivos logicos donde estan las clases, desde el Reader hasta el controlador
>>> Tambien encontramos el archivo del server.js
>
>> Carpeta test
>>> Aqui encontramos todas las pruebas unitarias de los archivos correspondientes

## Explicacion de mi API:

> Para poder consultarla, hay que entrar al link marcado por defecto y con el puerto dado (3000)
> 
> que en este caso seria: localhost:3000  (Solamente asi, el server devuelve una respuesta de saludo!) 
>
> **Y a continuación se especifican las rutas:**
>
> localhost:3000/v1/students *(Esta ruta nos devuelve el total de los estudiantes)*
> 
> localhost:3000/v1/students/emails *(Esta ruta nos devuelve los emails de los estudiantes certificados)*
>
> localhost:3000/v1/students/credits/:credits *(Esta ruta es cambiante, ya que nos devuelve los estudiantes con los creditos igual o mayores a los que especifique el usuario, ejemplo sustituyendo al final **/:credits** por **/500**)*
>
