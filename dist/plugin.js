var capacitorFullscreen = (function (exports, core) {
    'use strict';

    /// <reference types="@capacitor/cli" />
    exports.Contrast = void 0;
    (function (Contrast) {
        Contrast["light"] = "light";
        Contrast["dark"] = "dark";
    })(exports.Contrast || (exports.Contrast = {}));

    const Fullscreen = core.registerPlugin('Fullscreen', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.FullscreenWeb()),
    });

    class FullscreenWeb extends core.WebPlugin {
        async getSafeAreaInsets() {
            throw new Error('not implemented');
        }
        async setNavigationBarContrastColor() {
            throw new Error('not implemented');
        }
        async setStatusBarContrastColor() {
            throw new Error('not implemented');
        }
    }

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        FullscreenWeb: FullscreenWeb
    });

    exports.Fullscreen = Fullscreen;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({}, capacitorExports);
//# sourceMappingURL=plugin.js.map
