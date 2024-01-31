/**
 * Copyright (c) 1986-2023 Richard K. Wright. All rights reserved.
 *
 * This work is licensed under the terms of the MIT license.
 * For a copy, see <https://opensource.org/licenses/MIT>.
 *
 * math-ext
 *
 * Add some missing methods to the Math object
 */

//--- constants ---
const REVISION = '0.1.0';

Math.QUARTER_PI = Math.PI / 4;
Math.HALF_PI    = Math.PI / 2;
Math.TWO_PI     = Math.PI * 2;
Math.RAD2DEG    = 180 / Math.PI;
//Math.EPSILON    = 0.00001;

Math.sqr    = function (arg) { return arg*arg; };
Math.fmod   = function (a,b) { return Number((a - (Math.floor(a / b) * b)).toPrecision(8)); };
Math.toRad  = function (angle) { return angle * (Math.PI / 180); };
Math.toDeg  = function (angle) { return angle * (180 / Math.PI); };
Math.clamp  = function (cv, lo, hi) { return ((cv > hi) ? hi : ((cv < lo) ? lo : cv)); };
Math.hypot  = function (x, y) { return Math.sqrt(x * x + y * y); };
Math.roundi = function (a) { return (a < 0) ? Math.round(a - 0.5) : Math.round(a + 0.5); };

Math.wrapAng = function( arg, loLim, upLim, incr ) {
    while (arg > upLim)
        arg -= incr;

    while (arg < loLim)
        arg += incr;

    return arg;
}

Math.fpSign = function(arg) {
    return (arg < 0.0) ? -1.0 : 1.0;
}

Math.fpNear = function(a, b) {
    return (Math.abs(a - b) < 0.1);
}

