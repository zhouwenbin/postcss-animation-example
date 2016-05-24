var postcss = require('gulp-postcss');
var gulp = require('gulp');
var postcss_anmation = require('postcss-animation');

gulp.task('default', function () {
    var processors = [
        postcss_anmation()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});