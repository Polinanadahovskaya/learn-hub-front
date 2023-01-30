import gulp from 'gulp';
import babel from 'gulp-babel';
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import image from 'gulp-image';

const sass = gulpSass(dartSass);

gulp.task('js', () => {
  return gulp
    .src('src/js/*.js')
    .pipe(
      babel({
        presets: ['@babel/env'],
      }),
    )
    .pipe(gulp.dest('dist/js/'));
});

gulp.task('html', () => {
  return gulp.src('src/html/*.html').pipe(gulp.dest('dist/html/'));
});

gulp.task('images', () => {
  return gulp.src('src/imgs/*').pipe(image()).pipe(gulp.dest('dist/imgs/'));
});

gulp.task('styles', () => {
  return gulp
    .src('src/styles/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/styles/css/'));
});

gulp.task('watch', () => {
  return gulp.watch(
    ['src/js/*.js', 'src/html/*.html', 'src/styles/scss/*.scss', 'src/imgs/*'],
    gulp.parallel(['js', 'html', 'styles', 'images']),
  );
});
