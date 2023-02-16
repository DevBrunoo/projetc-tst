const gulp = require('gulp');
const uglify = require('gulp-uglify-es').default;
const concat = require('gulp-concat');
const sass = require('gulp-sass')(require('sass'));
const image = require('gulp-image');
const cssMin = require('gulp-css');
const sassdoc = require('sassdoc');

// sass.compiler = require('node-sass');

function scss(){
    return gulp.src([
        './src/assets/css/style.scss'
    ])
    .pipe(concat('main.css'))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css/vendors'));
}

function css(){
    return gulp.src([
        './src/assets/css/vendors/jquery.fancybox.min.css',
        './src/assets/css/vendors/main.css',
        './node_modules/animate.css/animate.css' 

    ])
    .pipe(concat('style.css'))
    .pipe(cssMin())
    .pipe(gulp.dest('./skeletor-theme/css'));
}

async function sequence_css(){
    return gulp.series(
        scss, css, docs
    )();
}

function images(){
    return gulp.src([
        './src/assets/img/*.jpg',
        './src/assets/img/*.png',
        './src/assets/img/**/*.jpg',
        './src/assets/img/**/*.png'
    ])
    .pipe(image())
    .pipe(gulp.dest('./skeletor-theme/images'))
}

function svg(){
    return gulp.src([
        './src/assets/img/*.svg',
        './src/assets/img/**/*.svg'
    ])
    .pipe(gulp.dest('./skeletor-theme/images'))
}

function scripts(){
    return gulp.src([
        //SCROLL MAGIC
        './node_modules/axios/dist/axios.js',
        './src/assets/js/vendors/scrollmagic/TweenMax.js',
        './src/assets/js/vendors/scrollmagic/scrollMagic.js',
        './src/assets/js/vendors/scrollmagic/animation.gsap.js',
        './src/assets/js/vendors/scrollmagic/scrollMagicDebug.js',


        './src/assets/js/vendors/jquery.js',
        './src/assets/js/vendors/jquery.flipster.min.js',
        './src/assets/js/vendors/jqueryMatchheight.min.js',
        './src/assets/js/vendors/waypoint.js',
        './node_modules/aos/dist/aos.js',
        './src/assets/js/vendors/jquery.fancybox.min.js',

        //SLICK SLIDER
        './node_modules/slick-carousel/slick/slick.min.js',
        './src/assets/js/animations.js',
        './src/assets/js/funcoes.js'
    ])
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./skeletor-theme/js'));
}

function watch() {
    gulp.watch(
        [
            './src/assets/js/animations.js',
            './src/assets/js/funcoes.js'

        ], scripts);

    gulp.watch([
        './src/assets/css/style.scss',
        './src/assets/css/_base.scss',
        './src/assets/css/_buttons.scss',
        './src/assets/css/_footer.scss',
        './src/assets/css/_form.scss',
        './src/assets/css/_global_modules.scss',
        './src/assets/css/_nav.scss',
        './src/assets/css/_spacing.scss',
        './src/assets/css/_typograph.scss',
        './src/assets/css/_utilities.scss',
        './src/assets/css/_variables.scss'
    ], sequence_css);

    gulp.watch([
        './src/assets/img/*.jpg',
        './src/assets/img/*.png',
        './src/assets/img/**/*.jpg',
        './src/assets/img/**/*.png'
    ], images);

    gulp.watch([
        './src/assets/img/*.svg',
        './src/assets/img/**/*.svg'
    ], svg);
}

function docs(){
    return gulp.src('./src/assets/**/*.scss')
    .pipe(sassdoc({ dest: './src/docs' }));
}

/*
'./assets/js/TweenMax.js',
        './assets/js/scrollMagic.js',
        './assets/js/animation.gsap.js',
        './assets/js/scrollMagicDebug.js',
        './assets/js/animations.js',
*/

// gulp.task('clean', () => del(['dist']));

var build = gulp.series(sequence_css, scripts,images, svg, docs);

// exports.clean = clean;
exports.sequence_css = sequence_css;
exports.css = css;
exports.scss = scss;
exports.images = images;
exports.images = svg;

exports.docs = docs;
exports.scripts = scripts;
exports.watch = watch;
exports.build = build;
exports.default = build;
