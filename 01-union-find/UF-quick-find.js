
// first basic version of the union find class

class UF {

  constructor ( size ) {
    this.size = size;
    this.id = [];
    for ( let i = 0; i < this.size; i++ )
      this.id.push( i );
  }

  connected ( p, q ) {
    return this.id[ p ] === this.id[ q ];
  }

  union ( p, q ) {
    const initialValue = this.id[ p ];
    for ( let i = 0; i < this.size; i++ )
      if ( this.id[ i ] === initialValue )
        this.id[ i ] = this.id[ q ];
  }

};

module.exports = UF;
