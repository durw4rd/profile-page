var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();

// optimizers
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');

var cache = require('gulp-cache');
var del = require('del');


gulp.task('sass', function(){
  return gulp.src('_project/app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('_project/app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function(done) {
  browserSync.init({
    server: {
      baseDir: '_project/app'
    },
  });
  done();
})

gulp.task('watch', function(){
  gulp.watch('_project/app/sass/**/*.scss', gulp.series('sass'));
  gulp.watch('_project/app/*.html', browserSync.reload);
  gulp.watch('_project/app/js/**/*.js', browserSync.reload);
})

gulp.task('default', gulp.series('sass', 'browserSync', 'watch'));


gulp.task('useref', function(){
  return gulp.src('_project/app/*.html')
    .pipe(useref())
    // Minifies only if it's a JavaScript/CSS file
    .pipe(gulpIf('*.js', uglify()))
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('_project/dist'))
});

gulp.task('images', function(){
  return gulp.src('_project/app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(cache(imagemin()))
  .pipe(gulp.dest('_project/dist/images'))
});

gulp.task('fonts', function() {
  return gulp.src('_project/app/fonts/**/*')
  .pipe(gulp.dest('_project/dist/fonts'))
});

gulp.task('clean:dist', function() {
  return del(['_project/dist']);
});

gulp.task('cache:clear', function (callback) {
  return cache.clearAll(callback)
});

// build task merging several of the above functions together
gulp.task('build', gulp.series('clean:dist', gulp.parallel('sass', 'useref', 'images', 'fonts')));
