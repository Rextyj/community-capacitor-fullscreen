import { WebPlugin } from '@capacitor/core';
import type { FullscreenPlugin, SafeAreaInsets } from './definitions';
export declare class FullscreenWeb extends WebPlugin implements FullscreenPlugin {
    getSafeAreaInsets(): Promise<SafeAreaInsets>;
    setNavigationBarContrastColor(): Promise<void>;
    setStatusBarContrastColor(): Promise<void>;
}
