/* npm i gulp --save-dev */
/* npm i gulp-clean-css --save-dev */

const GULP = require('gulp');
const CLEAN_CSS = require('gulp-clean-css');

GULP.task('minify-css', () => {
  return GULP.src('style/*.css')
    .pipe(CLEAN_CSS({ compatibility: 'ie8' }))
    .pipe(GULP.dest('dist'));
});
