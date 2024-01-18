import { registerPlugin } from '@capacitor/core';
const Fullscreen = registerPlugin('Fullscreen', {
    web: () => import('./web').then(m => new m.FullscreenWeb()),
});
export * from './definitions';
export { Fullscreen };
//# sourceMappingURL=index.js.map