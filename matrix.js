/**
 *  * Copyright (c) 1986-2023 Richard K. Wright. All rights reserved.
 *
 * This work is licensed under the terms of the MIT license.
 * For a copy, see <https://opensource.org/licenses/MIT>.
 *
 * matrix.jx
 *
 * A very simple implementation of a 2D 3x3 homegenous matrix library.
 * Very PostScript-like (for obvious reasons)
 */

'use strict';

/**
 * Constants
 */
class Matrix  {

    //--- constants ---
    REVISION = '0.1.0';

    //--- class methods ---
    constructor () {
        identmat();
    }

    /**
     * This concatentates mata onto matb. The result is stored in this object,
     * so neither mata nor matb are modified.
     *
     * @param mata
     * @param matb
     */
    matmult ( mata, matb ) {
        this.a = mata.a * matb.a + mata.b * matb.c;
        this.b = mata.a * matb.b + mata.b * matb.d;
        this.c = mata.c * matb.a + mata.d * matb.c;
        this.d = mata.c * matb.b + mata.d * matb.d;
        this.x = mata.x * matb.a + mata.y * matb.c + matb.x;
        this.y = mata.x * matb.b + mata.y * matb.d + matb.y;
    }

    /**
     * Simply fills out the matrix as a CTM-style identity matrix.
     */
    identity () {
        this.a = 1.0;
        this.b = 0.0;
        this.c = 0.0;
        this.d = 1.0;
        this.x = 0.0;
        this.y = 0.0;
    }

    /**
     * Translate the current matrix by the values specified
     *
     * @param tx
     * @param ty
     */
    translate ( tx, ty ) {
        this.x += tx * a + ty * c;
        this.y += tx * b + ty * d;
    }

    /**
     * Scale the current matrix by the values given.
     *
     * @param sx
     * @param sy
     */
    scale ( sx, sy ) {
        this.a *= sx;
        this.b *= sx;
        this.c *= sy;
        this.d *= sy;
    }

    /**
     * Rotate the current matrix by the specified angle, which is in DEGREES.
     *
     * @param angle
     */
    rotate ( angle ) {
        var 	radians;
        var 	tmp = new Matrix();

        if (angle === 0.0)
            return;

        radians = angle * RADCONV;

        tmp.a = cos(radians);
        tmp.b = sin(radians);
        tmp.c = -tmp.b;
        tmp.d = tmp.a;
        tmp.x = 0.0;
        tmp.y = 0.0;

        matmult( tmp, this );
    }

    /**
     *   Transform the point (x, y) by the current matrix.
     *   Returns the value as an on-the-fly tuple.
     *
     * @param x
     * @param y
     */
    transform ( x, y ) {
        var rx = this.a * x + this.c * y + this.x;
        var ry = this.b * x + this.d * y + this.y;

        return { x : rx, y : ry };
    }
}

