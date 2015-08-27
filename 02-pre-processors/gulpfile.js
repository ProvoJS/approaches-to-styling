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



// VIEW MANAGEMENT
var views = {
	home: {
		styles: ["home.styl"],
		scripts: ["src/scripts/background-info.js"],
	},
	"404": {
		styles: ["src/styles/404.styl"],
		scripts: [],
	},
};

var baseStyles = [
	"src/styles/reset.styl", 
	"src/styles/global.styl"
];




// GLOBAL FUNCTIONS
function styles(view, renameFile) {
	return gulp.src( baseStyles.concat(views[view].styles) )
	.pipe(plumber())
	.pipe(sourcemaps.init())
	.pipe(concat("styles.styl"))
	.pipe(stylus())
	.pipe(sourcemaps.write())
	.pipe(autoprefixer())
	.pipe(minifyCss())
	.pipe(rename(renameFile))
	.pipe(gulp.dest('public/styles'));
}

function scripts(view, renameFile) {
	var _scripts = (["src/scripts/libs/*.js"]).concat(views[view].scripts);
	console.log("_scripts=>",_scripts)
	return gulp.src( (["src/scripts/libs/*.js"]).concat(views[view].scripts) )
	.pipe(plumber())
	.pipe(uglify())
	.pipe(concat(renameFile))
	.pipe(gulp.dest("public/scripts"));
}

function linter(view) {
	return gulp.src( views[view].scripts )
	.pipe(plumber())
	.pipe(eslint({"configFile": ".eslintrc"}))
	.pipe(eslint.format())
	.pipe(eslint.failOnError());
}





// STYLE TASKS
gulp.task('homeStyles', function(){
	return styles("home", "home.min.css");
});

gulp.task('404Styles', function(){
	return styles("404", "404.min.css");
});





// SCRIPT TASKS
gulp.task('homeScripts', ['homeLinter'], function(){
		return scripts("home", "scripts.min.js");
});

gulp.task('homeLinter', function(){
	return linter("home");
});



// WATCH TASK
gulp.task('watch', function(){
	gulp.watch("src/styles/*.styl", ["homeStyles, 404Styles"]);
	gulp.watch("src/scripts/*.js", ["homeScripts"]);
});


// DEFAULT TASK
gulp.task('default', ["homeStyles", "404Styles", "homeScripts", "watch"]);

