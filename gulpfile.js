var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();


gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "./app"
    });

    gulp.watch("app/*.html").on('change', browserSync.reload);
    gulp.watch("app/sass/*.scss", ['sass']).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("app/sass/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
});

gulp.task('default', ['serve']);