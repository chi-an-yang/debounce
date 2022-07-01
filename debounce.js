var _this = this;
var debounce = function (func, delay) {
    if (delay === void 0) { delay = 300; }
    var timer;
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timer);
        timer = setTimeout(function () {
            func.apply(_this, args);
        }, delay);
    };
};
//# sourceMappingURL=debounce.js.map