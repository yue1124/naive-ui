"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vue_1 = require("vue");
const icons_1 = require("../../../_internal/icons");
const _internal_1 = require("../../../_internal");
exports.default = (0, vue_1.defineComponent)({
    name: 'DataTableExpandTrigger',
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        expanded: Boolean,
        loading: Boolean,
        onClick: {
            type: Function,
            required: true
        }
    },
    render() {
        return ((0, vue_1.h)(_internal_1.NBaseIcon, { class: `${this.clsPrefix}-data-table-expand-trigger`, clsPrefix: this.clsPrefix, onClick: this.onClick }, {
            default: () => {
                return ((0, vue_1.h)(_internal_1.NIconSwitchTransition, null, {
                    default: () => this.loading ? ((0, vue_1.h)(_internal_1.NBaseLoading, { clsPrefix: this.clsPrefix, radius: 85, strokeWidth: 15, scale: 0.88 })) : ((0, vue_1.h)(icons_1.ChevronRightIcon, { class: `${this.clsPrefix}-data-table-expand-trigger__icon`, style: this.expanded
                            ? 'transform: rotate(90deg);'
                            : undefined }))
                }));
            }
        }));
    }
});
