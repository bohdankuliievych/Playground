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
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const buffer = require("vinyl-buffer");
const babelify = require("babelify");

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
// styles (dev): includes sourcemaps
function stylesDev() {
  return src(path.join(paths.src, "scss", "*.scss"))
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(groupCssMediaQueries())
    .pipe(cleanCSS({ level: 2 }))
    .pipe(sourcemaps.write("."))
    .pipe(dest(path.join(paths.dest, "css")))
    .pipe(browserSync.stream());
}

// styles (prod): no sourcemaps
function stylesProd() {
  return src(path.join(paths.src, "scss", "*.scss"))
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({ cascade: false }))
    .pipe(groupCssMediaQueries())
    .pipe(cleanCSS({ level: 2 }))
    .pipe(dest(path.join(paths.dest, "css")));
}

// scripts: bundle with browserify + babelify
// scripts (dev): includes sourcemaps
function scriptsDev() {
  const entry = path.join(paths.src, "js", "main.js"); // change if your entry is different
  return browserify({ entries: entry, debug: true })
    .transform(babelify, {
      presets: ["@babel/preset-env"],
      sourceMaps: true,
    })
    .bundle()
    .on("error", function (err) {
      console.error(err.toString());
      this.emit("end");
    })
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(dest(path.join(paths.dest, "js")))
    .pipe(browserSync.stream());
}

// scripts (prod): no sourcemaps
function scriptsProd() {
  const entry = path.join(paths.src, "js", "main.js"); // change if needed
  return browserify({ entries: entry, debug: false })
    .transform(babelify, {
      presets: ["@babel/preset-env"],
    })
    .bundle()
    .on("error", function (err) {
      console.error(err.toString());
      this.emit("end");
    })
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(dest(path.join(paths.dest, "js")));
}

// img: optimize and copy
function img() {
  return src(paths.img, { encoding: false })
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
  return src(paths.fonts, { encoding: false })
    .pipe(dest(path.join(paths.dest, "fonts")))
    .pipe(browserSync.stream());
}

// watch files and serve with BrowserSync (dev)
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
  watch(paths.styles, stylesDev);
  watch(paths.scripts, scriptsDev);
  watch(paths.img, img);
  watch(paths.fonts, fonts);
}

// Composite tasks
const build = series(
  cleanBuild,
  parallel(pages, stylesProd, scriptsProd, img, fonts)
);

const dev = series(
  cleanBuild,
  parallel(pages, stylesDev, scriptsDev, img, fonts),
  serve
);

// Exports
exports.clean = cleanBuild;
exports.pages = pages;
exports.stylesDev = stylesDev;
exports.stylesProd = stylesProd;
exports.scriptsDev = scriptsDev;
exports.scriptsProd = scriptsProd;
exports.img = img;
exports.fonts = fonts;
exports.build = build;
exports.default = dev;
