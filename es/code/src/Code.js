import { defineComponent, h, toRef, watch, onMounted, ref, computed } from 'vue';
import { useTheme, useHljs, useConfig, useThemeClass } from '../../_mixins';
import { codeLight } from '../styles';
import style from './styles/index.cssr';
const codeProps = Object.assign(Object.assign({}, useTheme.props), { language: String, code: {
        type: String,
        default: ''
    }, trim: {
        type: Boolean,
        default: true
    }, hljs: Object, uri: Boolean, inline: Boolean, wordWrap: Boolean, 
    // In n-log, we only need to mount code's style for highlight
    internalFontSize: Number, internalNoHighlight: Boolean });
export default defineComponent({
    name: 'Code',
    props: codeProps,
    setup(props, { slots }) {
        const { internalNoHighlight } = props;
        const { mergedClsPrefixRef, inlineThemeDisabled } = useConfig();
        const codeRef = ref(null);
        const hljsRef = internalNoHighlight ? { value: undefined } : useHljs(props);
        const createCodeHtml = (language, code, trim) => {
            const { value: hljs } = hljsRef;
            if (!hljs) {
                return null;
            }
            if (!(language && hljs.getLanguage(language))) {
                return null;
            }
            return hljs.highlight(trim ? code.trim() : code, {
                language
            }).value;
        };
        const setCode = () => {
            if (slots.default)
                return;
            const { value: codeEl } = codeRef;
            if (!codeEl)
                return;
            const { language } = props;
            const code = props.uri
                ? window.decodeURIComponent(props.code)
                : props.code;
            if (language) {
                const html = createCodeHtml(language, code, props.trim);
                if (html !== null) {
                    codeEl.innerHTML = props.inline ? html : `<pre>${html}</pre>`;
                    return;
                }
            }
            if (props.inline) {
                codeEl.textContent = code;
                return;
            }
            const maybePreEl = codeEl.children[0];
            if (maybePreEl && maybePreEl.tagName === 'PRE') {
                maybePreEl.textContent = code;
            }
            else {
                const warp = document.createElement('pre');
                warp.textContent = code;
                codeEl.innerHTML = '';
                codeEl.appendChild(warp);
            }
        };
        onMounted(setCode);
        watch(toRef(props, 'language'), setCode);
        watch(toRef(props, 'code'), setCode);
        if (!internalNoHighlight)
            watch(hljsRef, setCode);
        const themeRef = useTheme('Code', '-code', style, codeLight, props, mergedClsPrefixRef);
        const cssVarsRef = computed(() => {
            const { common: { cubicBezierEaseInOut, fontFamilyMono }, self: { textColor, fontSize, fontWeightStrong, 
            // extracted from hljs atom-one-light.scss
            'mono-3': $1, 'hue-1': $2, 'hue-2': $3, 'hue-3': $4, 'hue-4': $5, 'hue-5': $6, 'hue-5-2': $7, 'hue-6': $8, 'hue-6-2': $9 } } = themeRef.value;
            const { internalFontSize } = props;
            return {
                '--n-font-size': internalFontSize ? `${internalFontSize}px` : fontSize,
                '--n-font-family': fontFamilyMono,
                '--n-font-weight-strong': fontWeightStrong,
                '--n-bezier': cubicBezierEaseInOut,
                '--n-text-color': textColor,
                '--n-mono-3': $1,
                '--n-hue-1': $2,
                '--n-hue-2': $3,
                '--n-hue-3': $4,
                '--n-hue-4': $5,
                '--n-hue-5': $6,
                '--n-hue-5-2': $7,
                '--n-hue-6': $8,
                '--n-hue-6-2': $9
            };
        });
        const themeClassHandle = inlineThemeDisabled
            ? useThemeClass('code', computed(() => {
                return `${props.internalFontSize || 'a'}`;
            }), cssVarsRef, props)
            : undefined;
        return {
            mergedClsPrefix: mergedClsPrefixRef,
            codeRef,
            cssVars: inlineThemeDisabled ? undefined : cssVarsRef,
            themeClass: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.themeClass,
            onRender: themeClassHandle === null || themeClassHandle === void 0 ? void 0 : themeClassHandle.onRender
        };
    },
    render() {
        const { mergedClsPrefix, wordWrap, onRender } = this;
        onRender === null || onRender === void 0 ? void 0 : onRender();
        return (h("code", { class: [
                `${mergedClsPrefix}-code`,
                this.themeClass,
                wordWrap && `${mergedClsPrefix}-code--word-wrap`
            ], style: this.cssVars, ref: "codeRef" }, this.$slots));
    }
});
