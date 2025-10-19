const { src, dest, series, parallel, watch } = require("gulp");
const babel = require("gulp-babel");
const uglify = require("gulp-uglify");
const imagemin = require("gulp-imagemin");
const del = require("del");
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const groupCssMediaQueries = require("gulp-group-css-media-queries");
const cleanCSS = require("gulp-clean-css");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const path = require("path");

const paths = {
  src: "src",
  dest: "build",
  pages: "src/pages/**/*.html",
  styles: "src/scss/**/*.scss",
  scripts: "src/js/**/*.js",
  img: "src/assets/img/**/*",
  fonts: "src/assets/fonts/**/*",
};

// clean build folder (using del)
function cleanBuild() {
  return del([paths.dest]);
}

// copy HTML pages
function pages() {
  return src(paths.pages).pipe(dest(paths.dest)).pipe(browserSync.stream());
}

// styles: SCSS -> autoprefix -> group media queries -> minify
function styles() {
  return (
    src(path.join(paths.src, "scss", "*.scss"))
      // return src(path.styles)
      .pipe(sourcemaps.init())
      .pipe(sass().on("error", sass.logError))
      .pipe(autoprefixer({ cascade: false }))
      .pipe(groupCssMediaQueries())
      .pipe(cleanCSS({ level: 2 }))
      .pipe(sourcemaps.write("."))
      .pipe(dest(path.join(paths.dest, "css")))
      .pipe(browserSync.stream())
  );
}

// scripts: babel -> uglify (keeps one file per source file)
function scripts() {
  return src(paths.scripts, { sourcemaps: true })
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(dest(path.join(paths.dest, "js")))
    .pipe(browserSync.stream());
}

// img: optimize and copy
function img() {
  return src(paths.img, {encoding: false})
    .pipe(
      imagemin([
        imagemin.mozjpeg({ progressive: true }),
        imagemin.optipng({ optimizationLevel: 5 }),
        imagemin.svgo(),
      ])
    )
    .pipe(dest(path.join(paths.dest, "img")))
    .pipe(browserSync.stream());
}

// fonts: simply copy to build
function fonts() {
  return src(paths.fonts, {encoding: false})
    .pipe(dest(path.join(paths.dest, "fonts")))
    .pipe(browserSync.stream());
}

// watch files and serve with BrowserSync
function serve() {
  browserSync.init({
    server: {
      baseDir: paths.dest,
    },
    notify: false,
    port: 3000,
    browser: "chrome",
  });

  watch(paths.pages, pages);
  watch(paths.styles, styles);
  watch(paths.scripts, scripts);
  watch(paths.img, img);
  watch(paths.fonts, fonts);
}

const build = series(cleanBuild, parallel(pages, styles, scripts, img, fonts));

exports.clean = cleanBuild;
exports.pages = pages;
exports.styles = styles;
exports.scripts = scripts;
exports.img = img;
exports.fonts = fonts;
exports.build = build;
exports.default = series(build, serve);
