import { VNode } from 'vue';
import { NodeWalker } from 'commonmark';
export interface RenderOptions {
    softbreak: 'br' | 'n';
    inlinecode: string;
    strong: 'html' | 'naive';
    emph: 'html' | 'naive';
    imgSrcPrefix: string | null;
}
export declare function render(walker: NodeWalker, options: RenderOptions): VNode | string | false;
