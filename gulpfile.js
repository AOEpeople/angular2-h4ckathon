var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var tsc = require('gulp-typescript');
var tslint = require('gulp-tslint');
var del = require('del');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var tsProject = tsc.createProject('src/tsconfig.json');
var config = require('./gulp.config')();

var browserSync = require('browser-sync');
var superstatic = require('superstatic');

gulp.task('ts-lint', function() {
    return gulp.src(config.source.ts)
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            emitError: false
        }))
})

gulp.task('compile-ts', function() {
    var sourceTsFiles = [
        config.source.ts,
        config.source.typings
    ];

    var tsResult = gulp
        .src(sourceTsFiles)
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject));

    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(config.dist.js));
});


// Delete the dist directory
gulp.task('clean', function() {
    del('app/');
});


gulp.task('copy', function() {
    return gulp.src(config.source.html)
        .pipe(gulp.dest(config.dist.dir));
});

gulp.task('sass', function() {
    gulp.src(config.source.scss)
        .pipe(sass())
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.dist.css));
});



gulp.task('serve', ['clean', 'ts-lint', 'sass', 'compile-ts'], function() {

    gulp.watch([config.source.ts, config.source.scss, config.source.html], ['ts-lint', 'sass', 'compile-ts', 'copy' ]);

    browserSync({
        port: 3000,
        files: ['index.html', '**/*.js'],
        injectChanges: true,
        logFileChanges: false,
        logLevel: 'silent',
        notify: true,
        reloadDelay: 0,
        server: {
            baseDir: './app',
            middleware: superstatic({ debug: false})
        }
    });

});

gulp.task('default', ['clean','copy', 'serve']);
