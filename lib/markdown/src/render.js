"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.render = void 0;
const vue_1 = require("vue");
const typography_1 = require("../../typography");
const code_1 = require("../../code");
const card_1 = require("../../card");
const scrollbar_1 = require("../../scrollbar");
const blockQuoteRenderer = {
    render(node, options, children) {
        return (0, vue_1.h)((0, vue_1.h)(typography_1.NBlockquote, null, () => children));
    }
};
const codeRenderer = {
    render(node, options) {
        if (options.inlinecode === 'text') {
            return (0, vue_1.h)((0, vue_1.h)(typography_1.NText, { code: true }, () => node.literal));
        }
        else {
            return (0, vue_1.h)((0, vue_1.h)(code_1.NCode, { language: options.inlinecode, code: node.literal || undefined, inline: true }));
        }
    }
};
const codeBlockRenderer = {
    render(node, options) {
        const info_words = node.info ? node.info.split(/\s+/) : [];
        let language;
        if (info_words.length > 0 && info_words[0].length > 0) {
            language = info_words[0];
        }
        return (0, vue_1.h)((0, vue_1.h)(card_1.NCard, { size: "small" }, {
            default: () => ((0, vue_1.h)(scrollbar_1.NScrollbar, { xScrollable: true }, {
                default: () => ((0, vue_1.h)("div", { style: "padding-bottom: 12px" },
                    (0, vue_1.h)(code_1.NCode, { language: language, code: node.literal || undefined })))
            }))
        }));
    }
};
const customBlockRenderer = {
    render(node, options, children) {
        return (0, vue_1.h)((0, vue_1.h)("div", null, children));
    }
};
const customInlineRenderer = {
    render(node, options, children) {
        return (0, vue_1.h)((0, vue_1.h)("span", null, children));
    }
};
const documentRenderer = {
    render(node, options, children) {
        return (0, vue_1.h)((0, vue_1.h)("div", null, children));
    }
};
const emphRenderer = {
    render(node, options, children) {
        switch (options.emph) {
            case 'html':
                return (0, vue_1.h)((0, vue_1.h)("i", null, children));
            case 'naive':
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NText, { italic: true }, () => children));
        }
    }
};
const headingRenderer = {
    render(node, options, children) {
        switch (node.level) {
            case 1:
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NH1, null, () => children));
            case 2:
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NH2, null, () => children));
            case 3:
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NH3, null, () => children));
            case 4:
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NH4, null, () => children));
            case 5:
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NH5, null, () => children));
            case 6:
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NH6, null, () => children));
        }
    }
};
const htmlBlockRenderer = {
    render(node) {
        return (0, vue_1.h)('div', { domProps: { innerHTML: node.literal } });
    }
};
const htmlInlineRenderer = {
    render(node) {
        return (0, vue_1.h)('span', { domProps: { innerHTML: node.literal } });
    }
};
const imageRenderer = {
    render(node, options, children) {
        let alt;
        if (children.length > 0 &&
            typeof children[0] === 'string' &&
            children[0].length > 0) {
            alt = children[0];
        }
        let src = node.destination;
        if (src === null || src.length === 0) {
            return (0, vue_1.h)((0, vue_1.h)("div", null,
                "![",
                alt,
                "]()"));
        }
        else {
            if (options.imgSrcPrefix &&
                options.imgSrcPrefix.length > 0 &&
                !src.startsWith('http://') &&
                !src.startsWith('https://')) {
                src = src.startsWith('/')
                    ? `${options.imgSrcPrefix}${src}`
                    : `${options.imgSrcPrefix}/${src}`;
            }
            return (0, vue_1.h)((0, vue_1.h)("img", { src: src, alt: alt, title: node.title || alt }));
        }
    }
};
const itemRenderer = {
    render(node, options, children) {
        return (0, vue_1.h)((0, vue_1.h)(typography_1.NLi, null, () => children));
    }
};
const linebreakRenderer = {
    render() {
        return (0, vue_1.h)((0, vue_1.h)("br", null));
    }
};
const linkRenderer = {
    render(node, options, children) {
        let title;
        if (children.length > 0 &&
            typeof children[0] === 'string' &&
            children[0].length > 0) {
            title = children[0];
        }
        return (0, vue_1.h)(typography_1.NA, { href: node.destination, title: node.title }, () => title);
    }
};
const listRenderer = {
    render(node, options, children) {
        switch (node.listType) {
            case 'bullet':
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NUl, null, () => children));
            case 'ordered':
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NOl, null, () => children));
        }
    }
};
const paragraphRenderer = {
    render(node, options, children) {
        return (0, vue_1.h)((0, vue_1.h)(typography_1.NP, null, () => children));
    }
};
const softbreakRenderer = {
    render(node, options) {
        switch (options.softbreak) {
            case 'br':
                return (0, vue_1.h)((0, vue_1.h)("br", null));
            case 'n':
                return '\n';
        }
    }
};
const strongRenderer = {
    render(node, options, children) {
        switch (options.strong) {
            case 'html':
                return (0, vue_1.h)((0, vue_1.h)("strong", null, children));
            case 'naive':
                return (0, vue_1.h)((0, vue_1.h)(typography_1.NText, { strong: true }, () => children));
        }
    }
};
const textRenderer = {
    render(node) {
        return node.literal || '';
    }
};
const thematicBreakRenderer = {
    render() {
        return (0, vue_1.h)((0, vue_1.h)(typography_1.NHr, null));
    }
};
function createRenderer(type) {
    switch (type) {
        case 'block_quote':
            return blockQuoteRenderer;
        case 'code':
            return codeRenderer;
        case 'code_block':
            return codeBlockRenderer;
        case 'custom_block':
            return customBlockRenderer;
        case 'custom_inline':
            return customInlineRenderer;
        case 'document':
            return documentRenderer;
        case 'emph':
            return emphRenderer;
        case 'heading':
            return headingRenderer;
        case 'html_block':
            return htmlBlockRenderer;
        case 'html_inline':
            return htmlInlineRenderer;
        case 'image':
            return imageRenderer;
        case 'item':
            return itemRenderer;
        case 'linebreak':
            return linebreakRenderer;
        case 'link':
            return linkRenderer;
        case 'list':
            return listRenderer;
        case 'paragraph':
            return paragraphRenderer;
        case 'softbreak':
            return softbreakRenderer;
        case 'strong':
            return strongRenderer;
        case 'text':
            return textRenderer;
        case 'thematic_break':
            return thematicBreakRenderer;
    }
}
function render(walker, options) {
    const event = walker.next();
    if (event === null) {
        return false;
    }
    const entering = event.entering;
    if (!entering) {
        return false;
    }
    const node = event.node;
    const type = node.type;
    const renderer = createRenderer(type);
    if (!node.isContainer) {
        return renderer.render(node, options, []);
    }
    const children = [];
    while (true) {
        const child = render(walker, options);
        if (child) {
            children.push(child);
        }
        else {
            break;
        }
    }
    return renderer.render(node, options, children);
}
exports.render = render;
