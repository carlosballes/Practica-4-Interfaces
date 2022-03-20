# Practica-4-Interfaces

Practica realizada por Carlos Ballesteros y Jaime Tello

## Como Iniciar el Backend

1ºModificar el archivo end.example con los campos requeridos para acceder a la base de datos de mongo

```
USERNAME=
PASSWORD=
DB_NAME=
TABLE=
```
2ºPoner en la consola.
```
npm run dev
```
## Como iniciar el Frontend

 1º Instalar las dependencias necesarias usando:
 
 ```
npm install
```

2º Hacer funcionar el codigo usando:
 
 ```
npm start
```
### SI VEMOS EL ERROR : net::ERR_UNSAFE_PORT
 Tendremos que añadir en nuestro navegador:

  ```
   --explicitly-allowed-ports=6000
```
#### Como añadirlo:
 Click derecho en el enlace de nuestro navegador y accedemos a propiedades, en ellas iremos al campo destino y al final le añadiremos el comando anterior

 
