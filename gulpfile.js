const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('default', function() {
  // Run ESLint
  gulp.src(["public/**/*.js"])
    .pipe(eslint())
    .pipe(eslint.format());
});
