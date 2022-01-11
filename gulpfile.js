
const{ series, src, dest, watch, parallel } = require('gulp');// Sirve para importar
var sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const notify = require('gulp-notify');
const webp = require('gulp-webp');
const concat = require('gulp-concat');
//const sass = require('gulp-sass');
//Función que compila SASS

const paths = {
    imagenes: 'src/img/**/*',
    scss: 'src/scss/**/*.scss',
    js: 'src/js/**/*.js'
}

function css( ){
    return src(paths.scss)
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(dest('./build/css'))
}

function imagenes(){
    return src(paths.imagenes)
    .pipe( imagemin() )
    .pipe( dest('./build/img') )
    .pipe( notify({message: 'Imagene minificada'}) )
}

function versionWebp(){
    return src(paths.imagenes)
    .pipe( webp() )
    .pipe( dest('./build/img'))
    .pipe(notify( {message: 'Versión webp lista'} ));
}

function watchArchivos(){
    watch(paths.scss, css); // * carpeta actual, para que visite las nuevas carpetas es **/*.scss
    watch(paths.js, javaScript);
}

function javaScript(){
    return src(paths.js)
    .pipe( concat('bundle.js') )
    .pipe( dest('./build/js') );
}

exports.css = css //holaM();
exports.imagenes = imagenes;
exports.watchArchivos = watchArchivos;

exports.default = series(css, javaScript, imagenes, versionWebp, watchArchivos);