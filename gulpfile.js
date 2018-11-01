var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
var gulpTslint = require("gulp-tslint");
var tslint = require("tslint");
const mocha = require("gulp-mocha");
var gutil = require("gulp-util");
var webpack = require("webpack");
var del = require("del");
var karma =  require("karma").Server;
var webpackConfig = require(process.cwd() + "/webpack.config.js");
var tsconfig = require(process.cwd() + '/tsconfig.json');

gulp.task("lint", () => {
    var program = tslint.Linter.createProgram("./tsconfig.json");
    gulp.src("tsrc/**/*.ts", { base: "."})
    .pipe(gulpTslint({program}))
    .pipe(gulpTslint.report());
})

gulp.task("clear", () => {
    return del(["dist"]);
})

// compile ts to js
gulp.task("default", ["clear", "lint"], () => {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("webpack", function(callback) {
    // run webpack
    webpack(webpackConfig, function(err, stats) {
        if(err) throw new gutil.PluginError('webpack', err);
        gutil.log('[webpack]', stats.toString({
            // output options
        }));
        callback();
    });
});

gulp.task("karma:watch", function(done) {
    karma.start({
        configFile: __dirname + '/karma.config.js',
        singleRun: false,
    autoWatch: true,
    }, function() {
        done();
    });
});

gulp.task("karma", function(done) {
    karma.start({
        configFile: __dirname + '/karma.config.js',
        singleRun: true
    }, function() {
        done();
    });
});