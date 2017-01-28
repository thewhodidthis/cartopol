var cartopol = (function () {
  'use strict';

  function cartopol() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

    return {
      theta: Math.atan2(y, x),
      r: Math.sqrt(x * x + y * y)
    };
  }

  return cartopol;

}());
//# sourceMappingURL=cartopol.js.map
