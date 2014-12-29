var gulp = require('gulp'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload');

gulp.task('sass', function () {
    gulp.src('app/styles/scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('build/styles'))
        .pipe(livereload());
});

gulp.task('reload', function () {
    gulp.src('app/**/*.{html,js}')
        .pipe(livereload());
});

gulp.task('default', function() {
    livereload.listen();
    gulp.watch('app/styles/scss/*.scss', ['sass']);
    gulp.watch('app/**/*.{html,js}', ['reload']);
});