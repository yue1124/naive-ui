"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const cssr_1 = require("../../../_utils/cssr");

exports.default = (0, cssr_1.c)([(0, cssr_1.cB)('watermark-container', `
 position: relative;
 `, [(0, cssr_1.cNotM)('selectable', 'user-select: none;')]), (0, cssr_1.cB)('watermark', `
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 pointer-events: none;
 background-repeat: repeat;
 `, [(0, cssr_1.cM)('fullscreen', `
 position: fixed;
 `)])]);