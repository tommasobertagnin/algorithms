'use strict';

class UF {

  constructor ( size ) {
    this.id = [];
    for ( let i = 0; i < size; i++ )
      this.id.push( i );
  }

  root ( i ) {
    while ( i !== this.id[i] )
      i = this.id[i];
    return i;
  }

  connected ( p, q ) {
    return this.root( p ) == this.root( q );
  }

  union ( p, q ) {
    let rp = this.root( p );
    let rq = this.root( q );
    this.id[rp] = rq;
  }

}

module.exports = UF;
