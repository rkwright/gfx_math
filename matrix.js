/**
 *
 */

'use strict';

/**
 * Constants
 */
class Matrix  {

    //--- constants ---
    REVISION = '1.0.0';

    //--- class methods ---
    constructor () {
        identmat();
    }

    matmult ( mata, matb ) {
        this.a = mata.a * matb.a + mata.b * matb.c;
        this.b = mata.a * matb.b + mata.b * matb.d;
        this.c = mata.c * matb.a + mata.d * matb.c;
        this.d = mata.c * matb.b + mata.d * matb.d;
        this.x = mata.x * matb.a + mata.y * matb.c + matb.x;
        this.y = mata.x * matb.b + mata.y * matb.d + matb.y;
    }

    identmat () {
        this.a = 1.0;
        this.b = 0.0;
        this.c = 0.0;
        this.d = 1.0;
        this.x = 0.0;
        this.y = 0.0;
    }


    translatemat ( x, y ) {
    }

}

