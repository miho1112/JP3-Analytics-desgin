// gulp 読み込み
gulp     = require('gulp');

// Sass コンパイル
compass  = require('gulp-compass');

// bower 読み込み
bower    = require('main-bower-files');
concat   = require('gulp-concat');

// live reload 実行用
browserSync = require('browser-sync');


//
// compass
// sassからcssを生成
//
gulp.task('compass', function() {
	// Compass 実行
	gulp.src('sass/*.scss')
		.pipe(compass({
			style: 'expanded',
			comments: true,
			css: 'client/css/',
			sass: 'sass/',
			require: ['modular-scale']
		}));
});


//
// bowerJS
// JadeからHTMLを生成
//
gulp.task('bowerJS', function() {
	return gulp.src([
		'bower_components/angular/angular.min.js',
		'bower_components/angular-ui-router/release/angular-ui-router.js',
		'bower_components/angular-resource/angular-resource.js'
	])
		.pipe(concat('lib.js'))
		.pipe(gulp.dest('client/js/'));
});

//
// LiveReload
//
gulp.task('browser-sync', function() {
  browserSync({
	  port: 8888, //localhost 指定
    server: {
      baseDir: "client",   // 対象ディレクトリ
      index  : "index.html" // インデックスファイル
    }
  });
});

//
// ブラウザリロード
//
gulp.task('reload', function () {
  browserSync.reload();
});


//
// 監視ファイル
//
gulp.task('default', ['browser-sync'], function () {
	gulp.watch('sass/*.scss', ['compass']);
	gulp.watch('sass/**/*.scss', ['compass']);
	gulp.watch('sass/common/**/*.scss', ['compass']);
	gulp.watch("client/*.html", ['reload']);
	gulp.watch("client/view/login/*.html", ['reload']);
	gulp.watch("client/view/search/*.html", ['reload']);
	gulp.watch("client/css/*.css", ['reload']);
	gulp.watch("client/js/*.js",   ['reload']);
	gulp.watch("client/js/controller/*.js",   ['reload']);
});

