var gulp = require('gulp');
var del = require('del');
var mainBowerFiles = require('main-bower-files');
var less = require('gulp-less');
var path = require('path');
var rename = require("gulp-rename");
var merge = require("merge-stream");
var fs = require('fs');

gulp.task("clean", function (cb) {
    return del(['dist/*.*'], cb);
});

gulp.task("prepare-package", function () {
    var copyNewVariable = gulp.src('./src/less/styles.less')
        .pipe(gulp.dest('./bower_components/bootstrap/less'));
    var copyFonts = gulp.src('./bower_components/bootstrap/fonts/*.*')
        .pipe(gulp.dest('./dist/fonts'));
    var copyFonts = gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'));

    return merge(copyNewVariable, copyFonts);
});

gulp.task("bower-files", function () {
    gulp.src(mainBowerFiles({
        paths: {
            bowerDirectory: './bower_components',
            bowerrc: '.bowerrc',
            bowerJson: './bower.json'
        }
    }))
        .pipe(gulp.dest('dist'));
});
gulp.task("css", function () {
    //this should create the css
});

gulp.task('less', ["prepare-package"], function () {
    return gulp.src(['./bower_components/bootstrap/less/styles.less'])
        .pipe(less())
        .pipe(gulp.dest('./dist'));
});

gulp.task("css:min", function () {
    //this should create the minified css
});

gulp.task("serve", function () {
    //this should serve
});

gulp.task("watch", function () {
    //this should watch files changed
});

gulp.task('build', ["less", "bower-files"]);
gulp.task('rebuild', ["clean", 'build']);

gulp.task('default', ["rebuild"]);
