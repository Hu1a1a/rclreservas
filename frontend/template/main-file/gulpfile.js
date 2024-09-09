// Importing necessary modules from gulp
const { src, dest, series, watch } = require('gulp');
// Importing the gulp-sass plugin and configuring it to use Dart Sass
const sass = require('gulp-sass')(require('sass'));

// Task to compile SCSS files to CSS
function style() {
	return src('./sass/**/*.scss')  // Source directory for SCSS files
		.pipe(sass().on('error', sass.logError))  // Compile SCSS to CSS, with error handling
		.pipe(dest('./css/')); // Output directory for compiled CSS
}

// Task to watch for changes in SCSS files and trigger the style task
function watchFiles() {
	watch('./sass/**/*.scss', style); // Watch SCSS files and run the style task on change
}

// Exporting tasks to be callable from the command line
exports.style = style;  // Expose the style task
exports.watch = watchFiles;  // Expose the watchFiles task
exports.default = series(style, watchFiles);  // Define the default task as a series of style and watchFiles tasks