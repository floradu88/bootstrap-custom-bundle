var gulp = require('gulp');
var del = require('del');
var mainBowerFiles = require('main-bower-files');

gulp.task("clean", function (cb) {
    return del(['dist'], cb);
});

gulp.task("prepare-package", function () {
    gulp.src('./src/**/*.*')
    .pipe(gulp.dest('./bower_components/bootstrap-custom-bundle'));
});

gulp.task("bower-files", function () {
    return gulp.src(mainBowerFiles({
        paths: {
            bowerDirectory: './bower_components',
            bowerrc: '.bowerrc',
            bowerJson: './bower.json'
        }
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('build', ["prepare-package", 'bower-files']);
gulp.task('rebuild', ["clean", 'build']);

gulp.task('default', ["rebuild"]);
