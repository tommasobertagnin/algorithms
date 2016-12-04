'use strict';

class UF {

  constructor ( size ) {

    this.id = [];
    this.sz = [];

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

    if ( rp === rq ) return;

    if ( this.sz[rp] < this.sz[rq] ) {
      this.id[rp] = rq;
      this.sz[rq] += this.sz[rp];
    }
    else {
      this.id[rq] = rp;
      this.sz[rp] += this.sz[rq];
    }
    
  }

}

module.exports = UF;
