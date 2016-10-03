/*
 * Dependencias
 * para instalar por primera vez escriba:
 * npm install -save-dev NOMBRE_DEPENDENCIA
 */
var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin'),
    pngcrush = require('imagemin-pngcrush'),
    watch = require('gulp-watch'),
    connect = require('gulp-connect');

/*
 * Configuración de las tareas
 */

 /*
    tarea para recargar la página automaticamente
    cada vez que se haga un cambio en los archivos
  */
gulp.task('livereload', function() {

    //gulp.src(['./**/*.*'])
        //.pipe(watch(['./**/*.*']))
        //.pipe(connect.reload());
    gulp.src(['static/css/*.css','static/js/**/*.js','templates/**/*.html','index.html'])
        .pipe(watch(['static/css/*.css','static/js/**/*.js','templates/**/*.html','index.html']))
        .pipe(connect.reload());
});

/*
    tarea para minimizacion y concatenacion de javascript
*/
gulp.task('compress', function() {
    gulp.src('static/js/*.js')
        .pipe(concat('compilacion.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js/'))
});

/*
    tarea para optimizar imagenes
*/
gulp.task('images', function() {
  gulp.src('static/img/*.{png,jpg,jpeg,gif,svg}')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngcrush()]
    }))
    .pipe(gulp.dest('dist/img/'));
});

/*
    tarea para iniciar servidor
*/
gulp.task('webserver', function() {
    connect.server({
        root: '.',
        livereload: true,
        port: 8080
    });
});

gulp.task("default",["livereload","compress","images","webserver"]);
