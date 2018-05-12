const gulp = require("gulp");



gulp.task("copyHTML", function(){
    gulp.src("./src/*.html")
        .pipe(gulp.dest("./dist"))
});

gulp.task("copyCSS", function(){
    gulp.src("./src/css/**/*.css")
        .pipe(gulp.dest("./dist/css"))
});

gulp.task("copyJS", function(){
    gulp.src("./src/js/**/*.js")
        .pipe(gulp.dest("./dist/js"))
});

gulp.task("readyIMG", function(){
    gulp.src("./src/img/*.{jpg,gif,png}")
        .pipe(gulp.dest("./dist/img"))
});

gulp.task("readyIMG2", function(){
    gulp.src("./src/img/icons/*.{jpg,gif,png}")
        .pipe(gulp.dest("./dist/img/icons"))
});

gulp.task("readyIMG3", function(){
    gulp.src("./src/img/persons/*.{jpg,gif,png}")
        .pipe(gulp.dest("./dist/img/persons"))
});


gulp.task("default", ["copyHTML", "copyCSS", "copyJS", "readyIMG", "readyIMG2", "readyIMG3"]);