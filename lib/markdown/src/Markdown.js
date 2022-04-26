"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commonmark_1 = require("commonmark");
const vue_1 = require("vue");
const render_1 = require("./render");
const markdownProps = {
    value: String,
    softbreak: {
        type: String,
        default: 'br'
    },
    inlinecode: {
        type: String,
        default: 'text'
    },
    strong: {
        type: String,
        default: 'html'
    },
    emph: {
        type: String,
        default: 'html'
    },
    imgSrcPrefix: {
        type: String,
        default: null
    }
};
exports.default = (0, vue_1.defineComponent)({
    name: 'Markdown',
    props: markdownProps,
    setup(props) {
        const parser = new commonmark_1.Parser();
        const ast = (0, vue_1.computed)(() => {
            return parser.parse(props.value || '');
        });
        return {
            ast
        };
    },
    render() {
        const options = {
            softbreak: this.softbreak,
            inlinecode: this.inlinecode,
            strong: this.strong,
            emph: this.emph,
            imgSrcPrefix: this.imgSrcPrefix
        };
        const walker = this.ast.walker();
        const result = (0, render_1.render)(walker, options);
        return result || (0, vue_1.h)((0, vue_1.h)("div", null, "Some thing Wrong"));
    }
});
