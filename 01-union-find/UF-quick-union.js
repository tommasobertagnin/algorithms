'use strict';

class UF {

  constructor ( size ) {
    this.id = [];
    for ( let i = 0; i < size; i++ )
      this.id.push( i );
  }

  root ( i ) {
    while ( this.id[i] !== i )
      i = this.id[i];
    return i;
  }

  connected ( p, q ) {
    return this.root( p ) == this.root( q );
  }

  union ( p, q ) {
    if ( ! this.connected( p, q ) ) {
      let rp = this.root( p );
      let rq = this.root( q );
      this.id[rp] = rq;
    }
  }

}

module.exports = UF;
