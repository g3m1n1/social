var gulp = require('gulp'),
	stylus = require('gulp-stylus'),
	livereload = require('gulp-livereload'),
	nib = require('nib');




gulp.task('compile-stylus',function(){
	return gulp.src('./assets/stylus/**/*.styl')
	.pipe(stylus({
		use: [nib()]
	}))

	.pipe(gulp.dest('./assets/css'))

	.pipe(livereload())
});