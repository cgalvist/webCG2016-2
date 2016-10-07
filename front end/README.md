# Front end del proyecto #

Desarrollado con Gulp y AngularJS.

## Ejecutar proyecto por primera vez ##
Asegúrese de que en el equipo tenga instalado npm y nodejs escribiendo las siguientes órdenes en la linea de comandos. Deberá aparecer el número de versión de cada una:

* node -v
* npm -v

NOTA: si el paquete "node" no se encuentra en los repositorios del sistema, instale el paquete "nodejs-legacy".

Luego se debe ubicar en la carpeta del proyecto y ejecutar el comando "npm install".

Después de unos minutos, se debe instalar Gulp en caso de no estarlo. Para esto se debe ejecutar la orden "sudo npm install -g gulp". Luego de realizarlo se verifica si versión escribiendo la orden "gulp -v".

## Ejecutar: ##
Con Gulp, puede ejecutar el servidor escribiendo "gulp" en la linea de comandos para entornos de desarrollo. También puede solo realizar las tareas de optimización escribiendo "gulp build" o escribir "gulp production" para ejecutar el proyecto en entornos de producción.

## Herramientas y módulos utilizados: ##

### Node: ###
* angular
* angular-material
* angular-ui-router

### Gulp: ###
* gulp-concat
* gulp-uglify
* gulp-imagemin
* imagemin-pngcrush
* gulp-watch
* gulp-connect
