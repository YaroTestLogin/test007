const gulp = require('gulp');
const plugins = require('gulp-load-plugins')();
const browserSync = require('browser-sync').create();

gulp.task('clean', function() {
    return gulp.src('./dist', {read: false})
        .pipe(plugins.clean());
});

gulp.task('css', function() {
    return gulp.src([
        './src/sass/*.scss',
    ])
        // .pipe(plugins.sourcemaps.init())
        .pipe(plugins.sass().on('error', plugins.sass.logError))
        .pipe(plugins.cssmin())
        .pipe(plugins.autoprefixer())
        // .pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(browserSync.stream());
});

var gulps = require('gulp')
    , typescript = require('gulp-typescript')
    , typescriptLint = require('gulp-tslint');
   
// Lint all typescript files
gulp.task('typescript-lint', function () {
    return gulp.src(['src/**/*.ts']).pipe(typescriptLint({configuration: 'tslint.json'}))
                                                .pipe(typescriptLint.report('prose'));
});
   
// Build all typescript files
gulp.task('typescript-build', function () {
    var typescriptResult = gulp.src(['src/**/*.ts']).pipe(typescript(typescript.createProject('tsconfig.json')));
    return typescriptResult.js.pipe(gulp.dest('build'));
});

// Watch all typescript files for changes and rebuild everything
gulp.task('typescript-watch', function () {
    gulp.watch(['src/**/*.ts'], [
          'typescript-lint'
        , 'typescript-build'
    ]); 
});

// Default gulp task
gulp.task('default', [
      'typescript-lint'
    , 'typescript-build'
    , 'typescript-watch'
]);

// gulp.task('js', function(){
//     return gulp.src([
//         // './node_modules/jquery/dist/jquery.min.js',
//         // './node_modules/moment/min/moment.min.js',
//         'src/base/jquery.slim.min.js',
//         'src/base/bootstrap.min.js',
//         'src/base/scripts.js',
//         'src/base/app.js',
//         'src/js/magic.js',
//         'src/js/admin.js'
//     ])
//         .pipe(plugins.babel({
//             presets: ['es2015']
//         }))
//         // .pipe(plugins.sourcemaps.write())
//         .pipe(plugins.concat('all.js'))
//         // .pipe(plugins.uglify())
//         .pipe(gulp.dest('./dist/js'))
//         .pipe(browserSync.stream());
// });

gulp.task('watch', function(){
    gulp.watch('./src/sass/**/*.scss', ['css']);
    // gulp.watch('./src/js/*.js', ['js']);
});



gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });

    gulp.watch('*.html').on('change', browserSync.reload);
});



gulp.task('default', ['css', 'watch', 'serve']);