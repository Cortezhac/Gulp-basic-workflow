var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));

function compileSass(){
    return gulp.src('scss/app.scss')
        .pipe(sass({
            includedPaths: ['scss']
        }))
        .pipe(gulp.dest('app/css'))
}

exports.default = compileSass