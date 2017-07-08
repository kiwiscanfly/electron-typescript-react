var gulp = require('gulp'),
    inSequence = require('run-sequence'),
    del = require('del'),
    inject = require('gulp-inject'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    sourcemaps = require('gulp-sourcemaps'),
    typescript = require('gulp-typescript');

gulp.task('default', function (done) {

    inSequence(
        'clear',
        [
            'build-vendor',
            'build-main',
            'build-render',
            'copy-app-package-file'
        ],
        'build-html'
    );
});

gulp.task('clear', function (done) {
    del.sync(['dist/**/*', '!dist/README.md'], { force: true });
    done();
});

gulp.task('copy-app-package-file', function () {
    return gulp.src('src/render/app.package.json')
        .pipe(rename('package.json'))
        .pipe(gulp.dest('dist/render'));
});

gulp.task('build-vendor', function(){

    return gulp.src([
        "node_modules/systemjs/dist/system.src.js",
    ])
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build-main', function () {

    var project = typescript.createProject('src/main/tsconfig.json', { sortOutput: true });

    var tsResult = project.src()
        .pipe(sourcemaps.init())
        .pipe(project());

    return tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/main'));
});

gulp.task('build-render', function () {

    var project = typescript.createProject('src/render/tsconfig.json', { sortOutput: true });

    var tsResult = project.src()
        .pipe(sourcemaps.init())
        .pipe(project());

    return tsResult.js
            .pipe(sourcemaps.write())
            .pipe(gulp.dest('dist/render'));
});

gulp.task('build-html', function () {

    var sources = gulp.src(['dist/js/vendor.js', 'dist/js/app.js'], { read: false });

    return gulp.src('src/render/index.html')
        .pipe(inject(sources, {ignorePath: 'dist',  addRootSlash: false }))
        .pipe(gulp.dest('dist/render'));
});

gulp.task('copy-html', function () {
    return gulp.src('src/render/**/*.html')
            .pipe(gulp.dest('dist/render'));
});