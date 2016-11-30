'use strict';

// the union find class
const UF = require('./UF');

// reference for the union find object
let uf;

// interface to read the file: $ node main.js < tinyUF.txt
const readline = require('readline')
  .createInterface( {
    input: process.stdin,
    output: process.stdout,
    terminal: false
  } );


readline.on( 'line', line => {

  if ( uf ) {
    let elem = line.split( ' ' );
    uf.union(...elem);
  }

  else {
    // the first line of the file contains the size of id
    uf = new UF( Number( line ) );
    console.log( 'before', uf.id );
  }

} );


readline.on( 'close', _ => {

  if ( uf )
    console.log( 'after ', uf.id );

} );
