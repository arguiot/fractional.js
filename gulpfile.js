const gulp = require("gulp")
const rename = require("gulp-rename");
const uglify = require("gulp-uglify");
const babel = require("gulp-babel")
gulp.task("minify", () => {
    gulp.src("fractional.js")
        .pipe(babel({
            presets: ["env"]
        }))
        .pipe(uglify())
        .pipe(rename({
            basename: "fractional",
            suffix: ".min"
        }))
        .pipe(gulp.dest("."));
});
gulp.task("default", ["minify"])
