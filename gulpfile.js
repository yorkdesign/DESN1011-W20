var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

//style paths
var input = 'sass/**/*.sass',
    output = 'css/';

gulp.task('styles', function() {
    return gulp.src(input)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(gulp.dest(output));
});


// detect changes in input
gulp.task('watch', function(){
  gulp.watch(input,gulp.series('styles'));
});

// Run tasks
gulp.task('default',gulp.series('watch'));