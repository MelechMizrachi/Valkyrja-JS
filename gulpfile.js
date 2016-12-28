var
    gulp     = require('gulp')
    // Concatenate files
    , concat = require('gulp-concat')
    // JS Uglify (minifier)
    , uglify = require('gulp-uglify')
    // Rename files
    , rename = require('gulp-rename')
    ;

// Concatenate & Minify JS
gulp.task(
    'scripts', function ()
    {
        return gulp.src(
            [
                'src/Config.js',
                'src/is.js',
                'src/Logger.js',
                'src/Utils.js',
                'src/Array.js',
                'src/Object.js',
                'src/String.js',
                'src/Http.js',
                'src/Auth.js',
                'src/Cache.js',
                'src/Cookies.js',
                'src/Dom.js',
                'src/Router.js',
                'src/Template.js',
                'src/Topics.js',
                'src/UserAgent.js'
            ]
        )
                   .pipe(concat('valkyrja.js'))
                   .pipe(gulp.dest('.'))
                   .pipe(rename('valkyrja.min.js'))
                   .pipe(uglify())
                   .pipe(gulp.dest('.'))
            ;
    }
);

// Watch Files For Changes
gulp.task(
    'watch', function ()
    {
        gulp.watch('src/*.js', ['scripts']);
    }
);

// Default Task
gulp.task('default', ['scripts']);