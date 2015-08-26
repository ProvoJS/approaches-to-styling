var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var plumber = require('gulp-plumber');
var minifyCss = require('gulp-minify-css');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var eslint = require('gulp-eslint');


// FILES OBJECTS
var styles = {
	src: 'src/styles',
	dest: 'public/styles',
	srcFiles: ["reset.styl", "global.styl", '*.styl'],
	getFiles: function(){
		var files = [];
		this.srcFiles.forEach(function(file){
			files.push(styles.src + "/" + file);
		});
		return files;
	}
};

var scripts = {
	src: 'src/scripts',
	dest: 'public/scripts',
	srcFiles: ['*.js'],
	libs: ["*.js"],
	getFiles: function(includeLibs){
		var files = [];

		if(includeLibs){
			this.libs.forEach(function(file){
				files.push(scripts.src + "/libs/" + file);
			});
		}

		this.srcFiles.forEach(function(file){
			files.push(scripts.src + "/" + file);
		});

		return files;
	}
};



// GULP TASKS
gulp.task('styles', function() {
	return gulp.src(styles.getFiles())
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(concat("styles.styl"))
	.pipe(stylus())
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(minifyCss())
	.pipe(rename("styles.min.css"))
	.pipe(gulp.dest(styles.dest));
});


gulp.task('scripts', ['scriptLinter'], function(){
	return gulp.src(scripts.getFiles(true))
	.pipe(plumber())
	.pipe(uglify())
	.pipe(concat("scripts.min.js"))
	.pipe(gulp.dest(scripts.dest));
});


gulp.task('scriptLinter', function(){
	console.log("* ESLint ON *");
	return gulp.src(scripts.getFiles(false))
	.pipe(plumber())
	.pipe(eslint({"configFile":".eslintrc"}))
	.pipe(eslint.format())
	.pipe(eslint.failOnError());
});


gulp.task('watch', function(){
	gulp.watch(styles.src+"/*.styl", ["styles"]);
	gulp.watch(scripts.src+"/*.js", ["scripts"]);
})

gulp.task('default', ["styles", "scripts", "watch"]);
