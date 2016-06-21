var postcss = require('gulp-postcss');
var gulp = require('gulp');
var postcssAnimation = require('postcss-animation');

gulp.task('default', function () {
    var processors = [
        postcssAnimation()
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
