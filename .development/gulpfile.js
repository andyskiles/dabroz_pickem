var gulp = require('gulp'),

    rename = require('gulp-rename'),
    sass = require('gulp-ruby-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer-core'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');


// Compile SASS
gulp.task('styles', function() {
  return sass('scss/main.scss', {
    // we use susy, feel free to remove this
    require: "susy",
    style: "compressed"
  })
    .pipe(postcss([ autoprefixer({ browsers: ['last 2 version'] }) ]))
    .pipe(gulp.dest('../client/css'));
});




// // Scripts
// gulp.task('scripts', function() {
//   return gulp.src('js/main.js')
//     .pipe(concat('main.js'))
//     .pipe(jshint())
//     .pipe(jshint.reporter('jshint-stylish'))
//     .pipe(rename('other.js'))
//     .pipe(gulp.dest('../'));
// });
 



// Watch for changes
gulp.task('watch', function () {
    // Watch .scss files
    gulp.watch('scss/**/*.scss', ['styles']);
    // Watch .js files
    // gulp.watch('js/main.js', ['scripts']);
})
 
 


// Run gulp in terminal to start all of the following processes
gulp.task('default', ['styles', 'watch']);