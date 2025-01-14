import { h, defineComponent, inject, Fragment } from 'vue';
import { happensIn, pxfy } from 'seemly';
import { formatLength } from '../../../_utils';
import { NCheckbox } from '../../../checkbox';
import { NEllipsis } from '../../../ellipsis';
import SortButton from '../HeaderButton/SortButton';
import FilterButton from '../HeaderButton/FilterButton';
import { isColumnSortable, isColumnFilterable, createNextSorter, getColKey, isColumnSorting } from '../utils';
import { dataTableInjectionKey } from '../interface';
import SelectionMenu from './SelectionMenu';
function renderTitle(column) {
    return typeof column.title === 'function'
        ? column.title(column)
        : column.title;
}
export default defineComponent({
    name: 'DataTableHeader',
    props: {
        discrete: {
            type: Boolean,
            default: true
        }
    },
    setup() {
        const { mergedClsPrefixRef, scrollXRef, fixedColumnLeftMapRef, fixedColumnRightMapRef, mergedCurrentPageRef, allRowsCheckedRef, someRowsCheckedRef, rowsRef, colsRef, mergedThemeRef, checkOptionsRef, mergedSortStateRef, componentId, scrollPartRef, mergedTableLayoutRef, headerCheckboxDisabledRef, handleTableHeaderScroll, deriveNextSorter, doUncheckAll, doCheckAll
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         } = inject(dataTableInjectionKey);
        function handleCheckboxUpdateChecked() {
            if (allRowsCheckedRef.value) {
                doUncheckAll();
            }
            else {
                doCheckAll();
            }
        }
        function handleColHeaderClick(e, column) {
            if (happensIn(e, 'dataTableFilter'))
                return;
            if (!isColumnSortable(column))
                return;
            const activeSorter = mergedSortStateRef.value.find((state) => state.columnKey === column.key) || null;
            const nextSorter = createNextSorter(column, activeSorter);
            deriveNextSorter(nextSorter);
        }
        function handleMouseenter() {
            scrollPartRef.value = 'head';
        }
        return {
            componentId,
            mergedSortState: mergedSortStateRef,
            mergedClsPrefix: mergedClsPrefixRef,
            scrollX: scrollXRef,
            fixedColumnLeftMap: fixedColumnLeftMapRef,
            fixedColumnRightMap: fixedColumnRightMapRef,
            currentPage: mergedCurrentPageRef,
            allRowsChecked: allRowsCheckedRef,
            someRowsChecked: someRowsCheckedRef,
            rows: rowsRef,
            cols: colsRef,
            mergedTheme: mergedThemeRef,
            checkOptions: checkOptionsRef,
            mergedTableLayout: mergedTableLayoutRef,
            headerCheckboxDisabled: headerCheckboxDisabledRef,
            handleMouseenter,
            handleCheckboxUpdateChecked,
            handleColHeaderClick,
            handleTableHeaderScroll
        };
    },
    render() {
        const { mergedClsPrefix, fixedColumnLeftMap, fixedColumnRightMap, currentPage, allRowsChecked, someRowsChecked, rows, cols, mergedTheme, checkOptions, componentId, discrete, mergedTableLayout, headerCheckboxDisabled, mergedSortState, handleColHeaderClick, handleCheckboxUpdateChecked } = this;
        let hasEllipsis = false;
        const theadVNode = (h("thead", { class: `${mergedClsPrefix}-data-table-thead`, "data-n-id": componentId }, rows.map((row) => {
            return (h("tr", { class: `${mergedClsPrefix}-data-table-tr` }, row.map(({ column, colSpan, rowSpan, isLast }) => {
                var _a, _b;
                const key = getColKey(column);
                const { ellipsis } = column;
                if (!hasEllipsis && ellipsis)
                    hasEllipsis = true;
                const leftFixed = key in fixedColumnLeftMap;
                const rightFixed = key in fixedColumnRightMap;
                return (h("th", { key: key, style: {
                        textAlign: column.align,
                        left: pxfy((_a = fixedColumnLeftMap[key]) === null || _a === void 0 ? void 0 : _a.start),
                        right: pxfy((_b = fixedColumnRightMap[key]) === null || _b === void 0 ? void 0 : _b.start)
                    }, colspan: colSpan, rowspan: rowSpan, "data-col-key": key, class: [
                        `${mergedClsPrefix}-data-table-th`,
                        (leftFixed || rightFixed) &&
                            `${mergedClsPrefix}-data-table-th--fixed-${leftFixed ? 'left' : 'right'}`,
                        {
                            [`${mergedClsPrefix}-data-table-th--hover`]: isColumnSorting(column, mergedSortState),
                            [`${mergedClsPrefix}-data-table-th--filterable`]: isColumnFilterable(column),
                            [`${mergedClsPrefix}-data-table-th--sortable`]: isColumnSortable(column),
                            [`${mergedClsPrefix}-data-table-th--selection`]: column.type === 'selection',
                            [`${mergedClsPrefix}-data-table-th--last`]: isLast
                        },
                        column.className
                    ], onClick: column.type !== 'selection' &&
                        column.type !== 'expand' &&
                        !('children' in column)
                        ? (e) => {
                            handleColHeaderClick(e, column);
                        }
                        : undefined },
                    column.type === 'selection' ? (h(Fragment, null,
                        h(NCheckbox, { key: currentPage, privateInsideTable: true, checked: allRowsChecked, indeterminate: someRowsChecked, disabled: headerCheckboxDisabled, onUpdateChecked: handleCheckboxUpdateChecked }),
                        checkOptions ? (h(SelectionMenu, { clsPrefix: mergedClsPrefix })) : null)) : ellipsis === true || (ellipsis && !ellipsis.tooltip) ? (h("div", { class: `${mergedClsPrefix}-data-table-th__ellipsis` }, renderTitle(column))) // eslint-disable-next-line @typescript-eslint/prefer-optional-chain
                        : ellipsis && typeof ellipsis === 'object' ? (h(NEllipsis, Object.assign({}, ellipsis, { theme: mergedTheme.peers.Ellipsis, themeOverrides: mergedTheme.peerOverrides.Ellipsis }), {
                            default: () => renderTitle(column)
                        })) : (renderTitle(column)),
                    isColumnSortable(column) ? (h(SortButton, { column: column })) : null,
                    isColumnFilterable(column) ? (h(FilterButton, { column: column, options: column.filterOptions })) : null));
            })));
        })));
        if (!discrete) {
            return theadVNode;
        }
        const { handleTableHeaderScroll, handleMouseenter, scrollX } = this;
        return (h("div", { class: `${mergedClsPrefix}-data-table-base-table-header`, onScroll: handleTableHeaderScroll, onMouseenter: handleMouseenter },
            h("table", { ref: "body", class: `${mergedClsPrefix}-data-table-table`, style: {
                    minWidth: formatLength(scrollX),
                    tableLayout: mergedTableLayout
                } },
                h("colgroup", null, cols.map((col) => (h("col", { key: col.key, style: col.style })))),
                theadVNode)));
    }
});
