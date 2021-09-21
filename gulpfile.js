var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

function compileSass(){
    return gulp.src('scss/app.scss')
        .pipe(autoprefixer())
        .pipe(sass())
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.stream())
}

function server() {
    // Archivos que se incluiran en el servidor
    browserSync.init({
        files: ["app/css/*.css", "app/js/*.js", "app/*.html"],
        server: {
            baseDir: "app"
        }
    })

    gulp.watch(['scss/*.scss'], compileSass)
    gulp.watch('app/*.html').on('change', browserSync.reload)
    gulp.watch('app/views/*.html').on('change', browserSync.reload)
}

exports.default = gulp.series(compileSass, server)