"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTitleAttribute = exports.largerSize = exports.smallerSize = exports.throwError = exports.warnOnce = exports.warn = void 0;
var warn_1 = require("./warn");
Object.defineProperty(exports, "warn", { enumerable: true, get: function () { return warn_1.warn; } });
Object.defineProperty(exports, "warnOnce", { enumerable: true, get: function () { return warn_1.warnOnce; } });
Object.defineProperty(exports, "throwError", { enumerable: true, get: function () { return warn_1.throwError; } });
var prop_1 = require("./prop");
Object.defineProperty(exports, "smallerSize", { enumerable: true, get: function () { return prop_1.smallerSize; } });
Object.defineProperty(exports, "largerSize", { enumerable: true, get: function () { return prop_1.largerSize; } });
var attribute_1 = require("./attribute");
Object.defineProperty(exports, "getTitleAttribute", { enumerable: true, get: function () { return attribute_1.getTitleAttribute; } });
__exportStar(require("./window"), exports);
