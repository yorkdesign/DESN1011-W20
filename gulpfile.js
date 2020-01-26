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


///GRID
//style paths
var ginput = 'assets/grid_example/sass/**/*.sass',
    goutput = 'assets/grid_example/css/';

gulp.task('gstyles', function() {
    return gulp.src(ginput)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(gulp.dest(goutput));
});


// detect changes in input
gulp.task('gwatch', function(){
  gulp.watch(ginput,gulp.series('gstyles'));
});

// Run tasks
gulp.task('default',gulp.series('gwatch'));



///HTML
//style paths
var hinput = 'assets/html_example/sass/**/*.sass',
    houtput = 'assets/html_example/css/';

gulp.task('hstyles', function() {
    return gulp.src(hinput)
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(autoprefixer())
		.pipe(gulp.dest(houtput));
});


// detect changes in input
gulp.task('hwatch', function(){
  gulp.watch(hinput,gulp.series('hstyles'));
});

// Run tasks
gulp.task('default',gulp.series('hwatch'));