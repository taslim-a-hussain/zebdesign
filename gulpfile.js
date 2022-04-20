const {src, dest, watch, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglifycss = require('gulp-uglifycss');

const build = () => {
    return src(['src/sass/**/*.scss', '!src/sass/**/variables.scss'])
        .pipe(sass())
        // .pipe(uglifycss())
        .pipe(dest('css-dist'));
};


const watchTask = () => {
    watch(['src/**/*.scss', '*.html'], build);
};



exports.default = series(build, watchTask);