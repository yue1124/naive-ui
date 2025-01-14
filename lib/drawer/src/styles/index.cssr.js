"use strict";

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr");

const slide_in_from_right_1 = __importDefault(require("../../../_styles/transitions/slide-in-from-right"));

const slide_in_from_left_1 = __importDefault(require("../../../_styles/transitions/slide-in-from-left"));

const slide_in_from_top_1 = __importDefault(require("../../../_styles/transitions/slide-in-from-top"));

const slide_in_from_bottom_1 = __importDefault(require("../../../_styles/transitions/slide-in-from-bottom"));

const fade_in_cssr_1 = __importDefault(require("../../../_styles/transitions/fade-in.cssr")); // vars:
// --n-line-height
// --n-color
// --n-text-color
// --n-box-shadow
// --n-bezier
// --n-bezier-out
// --n-bezier-in
// --n-body-padding
// --n-header-padding
// --n-footer-padding
// --n-title-font-size
// --n-title-text-color
// --n-title-font-weight
// --n-header-border-bottom
// --n-footer-border-top
// --n-close-color
// --n-close-color-hover
// --n-close-color-pressed
// --n-close-size


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('drawer', `
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `, [(0, slide_in_from_right_1.default)(), (0, slide_in_from_left_1.default)(), (0, slide_in_from_top_1.default)(), (0, slide_in_from_bottom_1.default)(), (0, cssr_1.cM)('native-scrollbar', [(0, cssr_1.cB)('drawer-content-wrapper', `
 overflow: auto;
 height: 100%;
 `)]), (0, cssr_1.cB)('drawer-content-wrapper', `
 box-sizing: border-box;
 `), (0, cssr_1.cB)('drawer-content', `
 height: 100%;
 display: flex;
 flex-direction: column;
 `, [(0, cssr_1.cM)('native-scrollbar', [(0, cssr_1.cB)('drawer-body-content-wrapper', `
 height: 100%;
 overflow: auto;
 `)]), (0, cssr_1.cB)('drawer-body', `
 flex: 1 0 0;
 overflow: hidden;
 `), (0, cssr_1.cB)('drawer-body-content-wrapper', `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `), (0, cssr_1.cB)('drawer-header', `
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `, [(0, cssr_1.cE)('close', `
 transition: color .3s var(--n-bezier);
 font-size: var(--n-close-size);
 `)]), (0, cssr_1.cB)('drawer-footer', `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]), (0, cssr_1.cM)('right-placement', `
 top: 0;
 bottom: 0;
 right: 0;
 `), (0, cssr_1.cM)('left-placement', `
 top: 0;
 bottom: 0;
 left: 0;
 `), (0, cssr_1.cM)('top-placement', `
 top: 0;
 left: 0;
 right: 0;
 `), (0, cssr_1.cM)('bottom-placement', `
 left: 0;
 bottom: 0;
 right: 0;
 `)]), (0, cssr_1.c)('body', [(0, cssr_1.c)('>', [(0, cssr_1.cB)('drawer-container', {
  position: 'fixed'
})])]), (0, cssr_1.cB)('drawer-container', `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `, [(0, cssr_1.c)('> *', {
  pointerEvents: 'all'
})]), (0, cssr_1.cB)('drawer-mask', `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [(0, fade_in_cssr_1.default)({
  enterDuration: '0.2s',
  leaveDuration: '0.2s',
  enterCubicBezier: 'var(--n-bezier-in)',
  leaveCubicBezier: 'var(--n-bezier-out)'
})])]);