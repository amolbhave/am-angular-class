let gulp     = require( 'gulp' ),
    markdown = require( 'gulp-markdown' ),
    concat   = require( 'gulp-concat' ),
    wrap     = require( 'gulp-wrap' ),
    del      = require( 'del' ),
    opn      = require( 'opn' ),
    fs       = require( 'fs' ),
    path     = require( 'path' ),
    minimist = require( 'minimist' );

let home            = path.resolve( __dirname ),
    src             = 'src/',
    app             = 'app/',
    appSrc          = `${home}/banking-app/${src}`,
    appAssets       = `${appSrc}assets/`,
    appApp          = `${appSrc}${app}`,
    exercises       = `${home}/exercises/`,
    begin           = '/begin/',
    solution        = '/solution/',
    instructions    = '-instructions.md',
    instructionsOut = 'instructions.html',
    files           = '**/*.+(ts|js|html|css|gif)',
    notData         = '!' + appSrc + 'environments/**/*',
    allFiles        = '**/*';

let options = minimist( process.argv.slice( 2 ) );

// TODO: Write a backup-files target/task

gulp.task( 'start-exercise', [ 'clean-all' ], function() {
  if ( options.src ) {
    const baseDir = exercises + options.src + begin;
    gulp.src( baseDir + src + files )
        .pipe( gulp.dest( appSrc ) );
    console.log( 'Testing ' + baseDir + options.src + instructions );
    if ( fs.existsSync( baseDir + options.src + instructions ) ) {
      console.log( 'Building instructions....: ', baseDir + options.src + instructions );
      gulp.src( baseDir + options.src + instructions )
          .pipe( markdown() )
          .pipe( wrap( { src: exercises + 'instructions-template.html' } ) )
          .pipe( concat( instructionsOut ) )
          .pipe( gulp.dest( appAssets ) )
          .pipe( gulp.dest( appAssets + 'doc' ) );

      gulp.src( exercises + 'instructions.css' )
          .pipe( gulp.dest( appAssets ) )
          .pipe( gulp.dest( appAssets + 'doc' ) );

      console.log(`\n\n *** Instructions available at file://${appAssets}doc/${instructionsOut} *** \n\n`);
      // console.log( 'opening: ', `file://${appAssets}doc/${instructionsOut}` );
      // opn( `file://${appAssets}doc/${instructionsOut}` );

      // opn seems to hang up gulp, this exits after a (relatively safe?) 2 seconds
      setTimeout( () => {
        process.exit( 0 );
      }, 2000 );
    } else {
      console.warn( 'Could not find ' + baseDir + options.src + instructions );
    }

  }
} );

gulp.task( 'show-solution', [ 'clean-all' ], function() {
  if ( options.src ) {
    gulp.src( exercises + options.src + solution + src + files )
        .pipe( gulp.dest( appSrc ) );
  }
} );

gulp.task( 'copy-to-begin', [ 'clean-begin' ], () => {
  if ( options.dest ) {
    gulp.src( [ appSrc + files, notData ] )
        .pipe( gulp.dest( exercises + options.dest + begin + src ) );
  }
} );

gulp.task( 'copy-to-solution', [ 'clean-solution' ], () => {
  if ( options.dest ) {
    // TODO: Make sure that the data folder is not included
    gulp.src( [ appSrc + files, notData ] )
        .pipe( gulp.dest( exercises + options.dest + solution + src ) );
  }
} );

gulp.task( 'clean-solution', () => {
  return del( [ exercises + options.dest + solution + src ] );
} );

gulp.task( 'clean-begin', () => {
  return del( [ exercises + options.dest + begin + src ] );
} );

gulp.task( 'clean-src', () => {
  console.log( 'Cleaning: ', [ appApp + allFiles, appAssets + files, notData ] );
  return del( [ appApp + allFiles, appAssets, notData ] );
} );

gulp.task( 'clean-all', [ 'clean-src' ] );

gulp.task( 'swap', function() {
  if ( options.src && options.dest && options.ex ) {
    let base = `${exercises}${options.ex}/`;
    gulp.src( base + options.src + '/**/*', { base: base + options.src } )
        .pipe( gulp.dest( base + options.dest ) );
  }
} );
