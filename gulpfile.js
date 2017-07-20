const gulp = require('gulp');
const inlineNg2Template = require('gulp-inline-ng2-template');
const rimraf = require('rimraf');
const ngc = require('gulp-ngc');
const gulpSequence = require('gulp-sequence');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const saasImporter = require('node-sass-magic-importer');
const through = require('through2');
const autoprefixer = require('gulp-autoprefixer');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');
const rename = require("gulp-rename");
const replace = require('gulp-replace');
const debug = require('gulp-debug');

gulp.task('svgstore', ['clean'], function () {
	return gulp
		.src('src/**/*.svg')
		.pipe(rename((path)=>{
			path.basename = "icon-" +path.basename;
		}))
		.pipe(svgmin(function (file) {
			var prefix = path.basename(file.relative, path.extname(file.relative));
			return {
				plugins: [{
					cleanupIDs: {
						prefix: prefix + '-',
						minify: true
					}
				}]
			}
		}))
		.pipe(svgstore({ inlineSvg: true }))
		.pipe(rename("icons.svg"))
		.pipe(gulp.dest('dist'));
});

gulp.task('dev', ['build'], () => {
  return gulp.watch('./src/**/*{ts,html,scss,css}', ['ngc']);
});

gulp.task('clean', (cb) => {
  rimraf('*(dist|inlined)', cb);
});

gulp.task('inline_components', [], () => {
	return gulp.src(['./src/**/*.ts','!./src/**/*.spec.ts'])
  .pipe(inlineNg2Template({
                            useRelativePaths: true,
                            styleProcessor: function (path, ext, file, cb) {
                              return gulp.src(path)
                              .pipe(sass({importer: saasImporter(), errLogToConsole: true}).on('error', sass.logError))
                              .pipe(autoprefixer())
                              .pipe(through.obj(function (file, enc, done) {
                                cb(null, file.contents);
                                done();
                              }));
                            }
                          }))
  .pipe(gulp.dest('./inlined'))
});

gulp.task('ngc', ['inline_components'], () => {
  return ngc('tsconfig.aot.json');
});


gulp.task('build', gulpSequence('clean',['svgstore','ngc']));
