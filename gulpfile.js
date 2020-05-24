/* npm i gulp --save-dev */
/* npm i gulp-concat --save-dev */
/* npm i gulp-clean-css --save-dev */
/* npm i gulp-rename --save-dev */

const GULP = require('gulp');
const CONCAT = require('gulp-concat');
const CLEAN_CSS = require('gulp-clean-css');
const RENAME = require('gulp-rename');

GULP.task('concat-clean-css-rename', () => {
  return GULP.src('style/*.css')
    .pipe(CONCAT('style.css'))
    .pipe(CLEAN_CSS({ compatibility: 'ie8' }))
    .pipe(RENAME('style.min.css'))
    .pipe(GULP.dest('dist'));
});
