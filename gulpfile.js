/* npm i gulp */
const GULP = require('gulp');
/* npm i gulp-responsive */
const RESPONSIVE = require('gulp-responsive');

GULP.task('default', ['responsive']);

GULP.task('responsive', () => {
  return GULP
    .src('img/*.{jpg,png}')
    .pipe(RESPONSIVE({
    }))
    .pipe(GULP.dest('dist'));
});
