var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');

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

gulp.task('default', ['bower-files']);