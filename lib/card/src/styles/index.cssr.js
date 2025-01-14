"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr"); // vars:
// --n-bezier
// --n-border-radius
// --n-color
// --n-color-modal
// --n-color-popover
// --n-text-color
// --n-line-height
// --n-padding-top
// --n-padding-bottom
// --n-padding-left
// --n-font-size
// --n-action-color
// --n-title-font-weight
// --n-title-font-size
// --n-title-text-color
// --n-close-color
// --n-close-color-hover
// --n-close-color-pressed
// --n-border-color
// --n-close-size
// --n-box-shadow


exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('card', `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [(0, cssr_1.cM)('hoverable', [(0, cssr_1.c)('&:hover', 'box-shadow: var(--n-box-shadow);')]), (0, cssr_1.cM)('content-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('content', {
  paddingTop: 'var(--n-padding-bottom)'
})])]), (0, cssr_1.cM)('content-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('content', `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), (0, cssr_1.cM)('footer-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('footer', {
  paddingTop: 'var(--n-padding-bottom)'
})])]), (0, cssr_1.cM)('footer-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('footer', `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), (0, cssr_1.c)('>', [(0, cssr_1.cB)('card-header', `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [(0, cssr_1.cE)('main', `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), (0, cssr_1.cE)('extra', `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), (0, cssr_1.cE)('close', `
 font-size: var(--n-close-size);
 transition: color .3s var(--n-bezier);
 `)]), (0, cssr_1.cE)('action', `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), (0, cssr_1.cE)('content', 'flex: 1;'), (0, cssr_1.cE)('content, footer', `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [(0, cssr_1.c)('&:first-child', {
  paddingTop: 'var(--n-padding-bottom)'
})]), (0, cssr_1.cE)('action', `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), (0, cssr_1.cB)('card-cover', `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [(0, cssr_1.c)('img', `
 display: block;
 width: 100%;
 `)]), (0, cssr_1.cM)('bordered', `
 border: 1px solid var(--n-border-color);
 `, [(0, cssr_1.c)('&:target', 'border-color: var(--n-color-target);')]), (0, cssr_1.cM)('action-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('action', [(0, cssr_1.c)('&:not(:first-child)', {
  borderTop: '1px solid var(--n-border-color)'
})])])]), (0, cssr_1.cM)('content-segmented, content-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('content', {
  transition: 'border-color 0.3s var(--n-bezier)'
}, [(0, cssr_1.c)('&:not(:first-child)', {
  borderTop: '1px solid var(--n-border-color)'
})])])]), (0, cssr_1.cM)('footer-segmented, footer-soft-segmented', [(0, cssr_1.c)('>', [(0, cssr_1.cE)('footer', {
  transition: 'border-color 0.3s var(--n-bezier)'
}, [(0, cssr_1.c)('&:not(:first-child)', {
  borderTop: '1px solid var(--n-border-color)'
})])])])]), (0, cssr_1.insideModal)((0, cssr_1.cB)('card', {
  background: 'var(--n-color-modal)'
})), (0, cssr_1.insidePopover)((0, cssr_1.cB)('card', {
  background: 'var(--n-color-popover)'
})), (0, cssr_1.cB)('card', [(0, cssr_1.asModal)({
  background: 'var(--n-color-modal)'
})])]);