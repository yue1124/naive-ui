/* eslint-disable @typescript-eslint/restrict-template-expressions */
import CSSRender from 'css-render';
import BEMPlugin from '@css-render/plugin-bem';
const namespace = 'n';
const prefix = `.${namespace}-`;
const elementPrefix = '__';
const modifierPrefix = '--';
const cssr = CSSRender();
const plugin = BEMPlugin({
    blockPrefix: prefix,
    elementPrefix,
    modifierPrefix
});
cssr.use(plugin);
const { c, find } = cssr;
const { cB, cE, cM, cNotM } = plugin;
function insideModal(style) {
    return c(({ props: { bPrefix } }) => `${bPrefix || prefix}modal, ${bPrefix || prefix}drawer`, [style]);
}
function insidePopover(style) {
    return c(({ props: { bPrefix } }) => `${bPrefix || prefix}popover:not(${bPrefix || prefix}tooltip)`, [style]);
}
function asModal(style) {
    return c(({ props: { bPrefix } }) => `&${bPrefix || prefix}modal`, style);
}
// child block
const cCB = ((...args) => {
    return c('>', [cB(...args)]);
});
export { c, cB, cE, cM, cNotM, cCB, insideModal, insidePopover, asModal, prefix, namespace, find };
export { createKey } from './create-key';
