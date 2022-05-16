/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { h, ref, defineComponent, inject, watchEffect, onUnmounted, computed, Fragment } from 'vue';
import { pxfy, repeat } from 'seemly';
import { VirtualList, VResizeObserver } from 'vueuc';
import { useMemo } from 'vooks';
import { cssrAnchorMetaName } from '../../../_mixins/common';
import { c } from '../../../_utils/cssr';
import { NScrollbar } from '../../../_internal';
import { formatLength, resolveSlot } from '../../../_utils';
import { NEmpty } from '../../../empty';
import { dataTableInjectionKey } from '../interface';
import { createRowClassName, getColKey, isColumnSorting } from '../utils';
import Cell from './Cell';
import ExpandTrigger from './ExpandTrigger';
import RenderSafeCheckbox from './BodyCheckbox';
import TableHeader from './Header';
function flatten(rowInfos, expandedRowKeys) {
    const fRows = [];
    function traverse(rs) {
        rs.forEach((r) => {
            if (r.children && expandedRowKeys.has(r.key)) {
                fRows.push({
                    tmNode: r,
                    striped: false,
                    key: r.key
                });
                traverse(r.children);
            }
            else {
                fRows.push({
                    key: r.key,
                    tmNode: r,
                    striped: false
                });
            }
        });
    }
    rowInfos.forEach((rowInfo) => {
        fRows.push(rowInfo);
        const { children } = rowInfo.tmNode;
        if (children && expandedRowKeys.has(rowInfo.key)) {
            traverse(children);
        }
    });
    return fRows;
}
const VirtualListItemWrapper = defineComponent({
    props: {
        clsPrefix: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        cols: {
            type: Array,
            required: true
        },
        onMouseenter: Function,
        onMouseleave: Function
    },
    render() {
        const { clsPrefix, id, cols, onMouseenter, onMouseleave } = this;
        return (h("table", { style: { tableLayout: 'fixed' }, class: `${clsPrefix}-data-table-table`, onMouseenter: onMouseenter, onMouseleave: onMouseleave },
            h("colgroup", null, cols.map((col) => (h("col", { key: col.key, style: col.style })))),
            h("tbody", { "data-n-id": id, class: `${clsPrefix}-data-table-tbody` }, this.$slots)));
    }
});
export default defineComponent({
    name: 'DataTableBody',
    props: {
        onResize: Function,
        showHeader: Boolean,
        flexHeight: Boolean,
        bodyStyle: Object
    },
    setup(props) {
        const { slots: dataTableSlots, mergedExpandedRowKeysRef, mergedClsPrefixRef, mergedThemeRef, scrollXRef, colsRef, paginatedDataRef, rawPaginatedDataRef, fixedColumnLeftMapRef, fixedColumnRightMapRef, mergedCurrentPageRef, rowClassNameRef, leftActiveFixedColKeyRef, leftActiveFixedChildrenColKeysRef, rightActiveFixedColKeyRef, rightActiveFixedChildrenColKeysRef, renderExpandRef, hoverKeyRef, summaryRef, mergedSortStateRef, virtualScrollRef, componentId, scrollPartRef, mergedTableLayoutRef, firstContentfulColIndexRef, indentRef, rowPropsRef, maxHeightRef, stripedRef, loadingRef, onLoadRef, loadingKeySetRef, setHeaderScrollLeft, doUpdateExpandedRowKeys, handleTableBodyScroll, doCheck, doUncheck
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
         } = inject(dataTableInjectionKey);
        const scrollbarInstRef = ref(null);
        const virtualListRef = ref(null);
        const emptyElRef = ref(null);
        const emptyRef = useMemo(() => paginatedDataRef.value.length === 0);
        // If header is not inside & empty is displayed, no table part would be
        // shown. So to collect a body width, we need to put a ref on empty element
        const shouldDisplaySomeTablePartRef = useMemo(() => props.showHeader || !emptyRef.value);
        // If no body is shown, we shouldn't show scrollbar
        const bodyShowHeaderOnlyRef = useMemo(() => {
            return props.showHeader || emptyRef.value;
        });
        let lastSelectedKey = '';
        const mergedExpandedRowKeySetRef = computed(() => {
            return new Set(mergedExpandedRowKeysRef.value);
        });
        function handleCheckboxUpdateChecked(tmNode, checked, shiftKey) {
            if (shiftKey) {
                const lastIndex = paginatedDataRef.value.findIndex((item) => item.key === lastSelectedKey);
                if (lastIndex !== -1) {
                    const currentIndex = paginatedDataRef.value.findIndex((item) => item.key === tmNode.key);
                    const start = Math.min(lastIndex, currentIndex);
                    const end = Math.max(lastIndex, currentIndex);
                    const rowKeysToCheck = [];
                    paginatedDataRef.value.slice(start, end + 1).forEach((r) => {
                        if (!r.disabled) {
                            rowKeysToCheck.push(r.key);
                        }
                    });
                    if (checked) {
                        doCheck(rowKeysToCheck);
                    }
                    else {
                        doUncheck(rowKeysToCheck);
                    }
                    lastSelectedKey = tmNode.key;
                    return;
                }
            }
            if (checked) {
                doCheck(tmNode.key);
            }
            else {
                doUncheck(tmNode.key);
            }
            lastSelectedKey = tmNode.key;
        }
        function getScrollContainer() {
            if (!shouldDisplaySomeTablePartRef.value) {
                const { value: emptyEl } = emptyElRef;
                if (emptyEl) {
                    return emptyEl;
                }
                else {
                    return null;
                }
            }
            if (virtualScrollRef.value) {
                return virtualListContainer();
            }
            const { value } = scrollbarInstRef;
            if (value)
                return value.containerRef;
            return null;
        }
        // For table row with children, tmNode is non-nullable
        // For table row is expandable but is not tree data, tmNode is null
        function handleUpdateExpanded(key, tmNode) {
            var _a;
            if (loadingKeySetRef.value.has(key))
                return;
            const { value: mergedExpandedRowKeys } = mergedExpandedRowKeysRef;
            const index = mergedExpandedRowKeys.indexOf(key);
            const nextExpandedKeys = Array.from(mergedExpandedRowKeys);
            if (~index) {
                nextExpandedKeys.splice(index, 1);
                doUpdateExpandedRowKeys(nextExpandedKeys);
            }
            else {
                if (tmNode && !tmNode.isLeaf && !tmNode.shallowLoaded) {
                    loadingKeySetRef.value.add(key);
                    void ((_a = onLoadRef
                        .value) === null || _a === void 0 ? void 0 : _a.call(onLoadRef, tmNode.rawNode).then(() => {
                        const { value: futureMergedExpandedRowKeys } = mergedExpandedRowKeysRef;
                        const futureNextExpandedKeys = Array.from(futureMergedExpandedRowKeys);
                        const index = futureNextExpandedKeys.indexOf(key);
                        if (!~index) {
                            futureNextExpandedKeys.push(key);
                        }
                        doUpdateExpandedRowKeys(futureNextExpandedKeys);
                    }).finally(() => {
                        loadingKeySetRef.value.delete(key);
                    }));
                }
                else {
                    nextExpandedKeys.push(key);
                    doUpdateExpandedRowKeys(nextExpandedKeys);
                }
            }
        }
        function handleMouseleaveTable() {
            hoverKeyRef.value = null;
        }
        function handleMouseenterTable() {
            scrollPartRef.value = 'body';
        }
        function virtualListContainer() {
            const { value } = virtualListRef;
            return value === null || value === void 0 ? void 0 : value.listElRef;
        }
        function virtualListContent() {
            const { value } = virtualListRef;
            return value === null || value === void 0 ? void 0 : value.itemsElRef;
        }
        function handleVirtualListScroll(e) {
            var _a;
            handleTableBodyScroll(e);
            (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
        }
        function handleVirtualListResize(e) {
            var _a;
            const { onResize } = props;
            if (onResize)
                onResize(e);
            (_a = scrollbarInstRef.value) === null || _a === void 0 ? void 0 : _a.sync();
        }
        const exposedMethods = {
            getScrollContainer
        };
        // manually control shadow style to avoid rerender
        const style = c([
            ({ props: cProps }) => {
                const createActiveLeftFixedStyle = (leftActiveFixedColKey) => {
                    if (leftActiveFixedColKey === null)
                        return null;
                    return c(`[data-n-id="${cProps.componentId}"] [data-col-key="${leftActiveFixedColKey}"]::after`, { boxShadow: 'var(--n-box-shadow-after)' });
                };
                const createActiveRightFixedStyle = (rightActiveFixedColKey) => {
                    if (rightActiveFixedColKey === null)
                        return null;
                    return c(`[data-n-id="${cProps.componentId}"] [data-col-key="${rightActiveFixedColKey}"]::before`, { boxShadow: 'var(--n-box-shadow-before)' });
                };
                return c([
                    createActiveLeftFixedStyle(cProps.leftActiveFixedColKey),
                    createActiveRightFixedStyle(cProps.rightActiveFixedColKey),
                    cProps.leftActiveFixedChildrenColKeys.map((leftActiveFixedColKey) => createActiveLeftFixedStyle(leftActiveFixedColKey)),
                    cProps.rightActiveFixedChildrenColKeys.map((rightActiveFixedColKey) => createActiveRightFixedStyle(rightActiveFixedColKey))
                ]);
            }
        ]);
        let fixedStyleMounted = false;
        watchEffect(() => {
            const { value: leftActiveFixedColKey } = leftActiveFixedColKeyRef;
            const { value: leftActiveFixedChildrenColKeys } = leftActiveFixedChildrenColKeysRef;
            const { value: rightActiveFixedColKey } = rightActiveFixedColKeyRef;
            const { value: rightActiveFixedChildrenColKeys } = rightActiveFixedChildrenColKeysRef;
            if (!fixedStyleMounted &&
                leftActiveFixedColKey === null &&
                rightActiveFixedColKey === null) {
                return;
            }
            const cProps = {
                leftActiveFixedColKey,
                leftActiveFixedChildrenColKeys,
                rightActiveFixedColKey,
                rightActiveFixedChildrenColKeys,
                componentId
            };
            style.mount({
                id: `n-${componentId}`,
                force: true,
                props: cProps,
                anchorMetaName: cssrAnchorMetaName
            });
            fixedStyleMounted = true;
        });
        onUnmounted(() => {
            style.unmount({
                id: `n-${componentId}`
            });
        });
        return Object.assign({ dataTableSlots,
            componentId,
            scrollbarInstRef,
            virtualListRef,
            emptyElRef, summary: summaryRef, mergedClsPrefix: mergedClsPrefixRef, mergedTheme: mergedThemeRef, scrollX: scrollXRef, cols: colsRef, loading: loadingRef, bodyShowHeaderOnly: bodyShowHeaderOnlyRef, shouldDisplaySomeTablePart: shouldDisplaySomeTablePartRef, empty: emptyRef, paginatedDataAndInfo: computed(() => {
                const { value: striped } = stripedRef;
                let hasChildren = false;
                const data = paginatedDataRef.value.map(striped
                    ? (tmNode, index) => {
                        if (!tmNode.isLeaf)
                            hasChildren = true;
                        return {
                            tmNode,
                            key: tmNode.key,
                            striped: index % 2 === 1
                        };
                    }
                    : (tmNode) => {
                        if (!tmNode.isLeaf)
                            hasChildren = true;
                        return {
                            tmNode,
                            key: tmNode.key,
                            striped: false
                        };
                    });
                return {
                    data,
                    hasChildren
                };
            }), rawPaginatedData: rawPaginatedDataRef, fixedColumnLeftMap: fixedColumnLeftMapRef, fixedColumnRightMap: fixedColumnRightMapRef, currentPage: mergedCurrentPageRef, rowClassName: rowClassNameRef, renderExpand: renderExpandRef, mergedExpandedRowKeySet: mergedExpandedRowKeySetRef, hoverKey: hoverKeyRef, mergedSortState: mergedSortStateRef, virtualScroll: virtualScrollRef, mergedTableLayout: mergedTableLayoutRef, firstContentfulColIndex: firstContentfulColIndexRef, indent: indentRef, rowProps: rowPropsRef, maxHeight: maxHeightRef, loadingKeySet: loadingKeySetRef, setHeaderScrollLeft,
            handleMouseenterTable,
            handleVirtualListScroll,
            handleVirtualListResize,
            handleMouseleaveTable,
            virtualListContainer,
            virtualListContent,
            handleTableBodyScroll,
            handleCheckboxUpdateChecked,
            handleUpdateExpanded }, exposedMethods);
    },
    render() {
        const { mergedTheme, scrollX, mergedClsPrefix, virtualScroll, maxHeight, mergedTableLayout, flexHeight, loadingKeySet, onResize, setHeaderScrollLeft } = this;
        const scrollable = scrollX !== undefined || maxHeight !== undefined || flexHeight;
        // For a basic table with auto layout whose content may overflow we will
        // make it scrollable, which differs from browser's native behavior.
        // For native behavior, see
        // https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout
        const isBasicAutoLayout = !scrollable && mergedTableLayout === 'auto';
        const xScrollable = scrollX !== undefined || isBasicAutoLayout;
        const contentStyle = {
            minWidth: formatLength(scrollX) || '100%'
        };
        if (scrollX)
            contentStyle.width = '100%';
        const tableNode = (h(NScrollbar, { ref: "scrollbarInstRef", scrollable: scrollable || isBasicAutoLayout, class: `${mergedClsPrefix}-data-table-base-table-body`, style: this.bodyStyle, theme: mergedTheme.peers.Scrollbar, themeOverrides: mergedTheme.peerOverrides.Scrollbar, contentStyle: contentStyle, container: virtualScroll ? this.virtualListContainer : undefined, content: virtualScroll ? this.virtualListContent : undefined, horizontalRailStyle: { zIndex: 3 }, verticalRailStyle: { zIndex: 3 }, xScrollable: xScrollable, onScroll: virtualScroll ? undefined : this.handleTableBodyScroll, internalOnUpdateScrollLeft: setHeaderScrollLeft, onResize: onResize }, {
            default: () => {
                // coordinate to pass if there are cells that cross row & col
                const cordToPass = {};
                // coordinate to related hover keys
                const cordKey = {};
                const { cols, paginatedDataAndInfo, mergedTheme, fixedColumnLeftMap, fixedColumnRightMap, currentPage, rowClassName, mergedSortState, mergedExpandedRowKeySet, componentId, firstContentfulColIndex, rowProps, handleMouseenterTable, handleMouseleaveTable, renderExpand, summary, handleCheckboxUpdateChecked, handleUpdateExpanded } = this;
                const { length: colCount } = cols;
                let mergedData;
                // if there is children in data, we should expand mergedData first
                const { data: paginatedData, hasChildren } = paginatedDataAndInfo;
                const mergedPaginationData = hasChildren
                    ? flatten(paginatedData, mergedExpandedRowKeySet)
                    : paginatedData;
                if (summary) {
                    const summaryRows = summary(this.rawPaginatedData);
                    if (Array.isArray(summaryRows)) {
                        mergedData = [
                            ...mergedPaginationData,
                            ...summaryRows.map((row, i) => ({
                                isSummaryRow: true,
                                key: `__n_summary__${i}`,
                                tmNode: {
                                    rawNode: row,
                                    disabled: true
                                }
                            }))
                        ];
                    }
                    else {
                        mergedData = [
                            ...mergedPaginationData,
                            {
                                isSummaryRow: true,
                                key: '__n_summary__',
                                tmNode: {
                                    rawNode: summaryRows,
                                    disabled: true
                                }
                            }
                        ];
                    }
                }
                else {
                    mergedData = mergedPaginationData;
                }
                const indentStyle = hasChildren
                    ? { width: pxfy(this.indent) }
                    : undefined;
                // Tile the data of the expanded row
                const displayedData = [];
                mergedData.forEach((rowInfo) => {
                    if (renderExpand && mergedExpandedRowKeySet.has(rowInfo.key)) {
                        displayedData.push(rowInfo, {
                            isExpandedRow: true,
                            key: `${rowInfo.key}-expand`,
                            tmNode: rowInfo.tmNode
                        });
                    }
                    else {
                        displayedData.push(rowInfo);
                    }
                });
                const { length: rowCount } = displayedData;
                const rowIndexToKey = {};
                paginatedData.forEach(({ tmNode }, rowIndex) => {
                    rowIndexToKey[rowIndex] = tmNode.key;
                });
                const renderRow = (rowInfo, rowIndex, isVirtual) => {
                    if ('isExpandedRow' in rowInfo) {
                        const { tmNode: { key, rawNode } } = rowInfo;
                        return (h("tr", { class: `${mergedClsPrefix}-data-table-tr`, key: `${key}__expand` },
                            h("td", { class: [
                                    `${mergedClsPrefix}-data-table-td`,
                                    `${mergedClsPrefix}-data-table-td--last-col`,
                                    rowIndex + 1 === rowCount &&
                                        `${mergedClsPrefix}-data-table-td--last-row`
                                ], colspan: colCount }, renderExpand(rawNode, rowIndex))));
                    }
                    const isSummary = 'isSummaryRow' in rowInfo;
                    const striped = !isSummary && rowInfo.striped;
                    const { tmNode, key: rowKey } = rowInfo;
                    const { rawNode: rowData } = tmNode;
                    const expanded = mergedExpandedRowKeySet.has(rowKey);
                    const props = rowProps ? rowProps(rowData, rowIndex) : undefined;
                    const mergedRowClassName = typeof rowClassName === 'string'
                        ? rowClassName
                        : createRowClassName(rowData, rowIndex, rowClassName);
                    const row = (h("tr", Object.assign({ onMouseenter: () => {
                            this.hoverKey = rowKey;
                        }, key: rowKey, class: [
                            `${mergedClsPrefix}-data-table-tr`,
                            isSummary && `${mergedClsPrefix}-data-table-tr--summary`,
                            striped && `${mergedClsPrefix}-data-table-tr--striped`,
                            mergedRowClassName
                        ] }, props), cols.map((col, colIndex) => {
                        var _a, _b, _c, _d, _e;
                        if (!isVirtual && rowIndex in cordToPass) {
                            const cordOfRowToPass = cordToPass[rowIndex];
                            const indexInCordOfRowToPass = cordOfRowToPass.indexOf(colIndex);
                            if (~indexInCordOfRowToPass) {
                                cordOfRowToPass.splice(indexInCordOfRowToPass, 1);
                                return null;
                            }
                        }
                        // TODO: Simplify row calculation
                        const { column } = col;
                        const colKey = getColKey(col);
                        const { rowSpan, colSpan } = column;
                        const mergedColSpan = isSummary
                            ? ((_a = rowInfo.tmNode.rawNode[colKey]) === null || _a === void 0 ? void 0 : _a.colSpan) || 1 // optional for #1276
                            : colSpan
                                ? colSpan(rowData, rowIndex)
                                : 1;
                        const mergedRowSpan = isSummary
                            ? ((_b = rowInfo.tmNode.rawNode[colKey]) === null || _b === void 0 ? void 0 : _b.rowSpan) || 1 // optional for #1276
                            : rowSpan
                                ? rowSpan(rowData, rowIndex)
                                : 1;
                        const isLastCol = colIndex + mergedColSpan === colCount;
                        const isLastRow = rowIndex + mergedRowSpan === rowCount;
                        const isCrossRowTd = mergedRowSpan > 1;
                        if (isCrossRowTd) {
                            cordKey[rowIndex] = {
                                [colIndex]: []
                            };
                        }
                        if (mergedColSpan > 1 || isCrossRowTd) {
                            for (let i = rowIndex; i < rowIndex + mergedRowSpan; ++i) {
                                if (isCrossRowTd) {
                                    cordKey[rowIndex][colIndex].push(rowIndexToKey[i]);
                                }
                                for (let j = colIndex; j < colIndex + mergedColSpan; ++j) {
                                    if (i === rowIndex && j === colIndex)
                                        continue;
                                    if (!(i in cordToPass)) {
                                        cordToPass[i] = [j];
                                    }
                                    else {
                                        cordToPass[i].push(j);
                                    }
                                }
                            }
                        }
                        const hoverKey = isCrossRowTd ? this.hoverKey : null;
                        const { ellipsis, cellProps } = column;
                        const resolvedCellProps = cellProps === null || cellProps === void 0 ? void 0 : cellProps(rowData, rowIndex);
                        return (h("td", Object.assign({}, resolvedCellProps, { key: colKey, style: [
                                {
                                    textAlign: column.align || undefined,
                                    left: pxfy((_c = fixedColumnLeftMap[colKey]) === null || _c === void 0 ? void 0 : _c.start),
                                    right: pxfy((_d = fixedColumnRightMap[colKey]) === null || _d === void 0 ? void 0 : _d.start)
                                },
                                (resolvedCellProps === null || resolvedCellProps === void 0 ? void 0 : resolvedCellProps.style) || ''
                            ], colspan: mergedColSpan, rowspan: isVirtual ? undefined : mergedRowSpan, "data-col-key": colKey, class: [
                                `${mergedClsPrefix}-data-table-td`,
                                column.className,
                                resolvedCellProps === null || resolvedCellProps === void 0 ? void 0 : resolvedCellProps.class,
                                isSummary &&
                                    `${mergedClsPrefix}-data-table-td--summary`,
                                ((hoverKey !== null &&
                                    cordKey[rowIndex][colIndex].includes(hoverKey)) ||
                                    isColumnSorting(column, mergedSortState)) &&
                                    `${mergedClsPrefix}-data-table-td--hover`,
                                column.fixed &&
                                    `${mergedClsPrefix}-data-table-td--fixed-${column.fixed}`,
                                column.align &&
                                    `${mergedClsPrefix}-data-table-td--${column.align}-align`,
                                {
                                    [`${mergedClsPrefix}-data-table-td--ellipsis`]: ellipsis === true ||
                                        // don't add ellipsis class if tooltip exists
                                        (ellipsis && !ellipsis.tooltip),
                                    [`${mergedClsPrefix}-data-table-td--selection`]: column.type === 'selection',
                                    [`${mergedClsPrefix}-data-table-td--expand`]: column.type === 'expand',
                                    [`${mergedClsPrefix}-data-table-td--last-col`]: isLastCol,
                                    [`${mergedClsPrefix}-data-table-td--last-row`]: isLastRow
                                }
                            ] }),
                            hasChildren && colIndex === firstContentfulColIndex
                                ? [
                                    repeat(isSummary ? 0 : rowInfo.tmNode.level, h("div", { class: `${mergedClsPrefix}-data-table-indent`, style: indentStyle })),
                                    isSummary || rowInfo.tmNode.isLeaf ? (h("div", { class: `${mergedClsPrefix}-data-table-expand-placeholder` })) : (h(ExpandTrigger, { class: `${mergedClsPrefix}-data-table-expand-trigger`, clsPrefix: mergedClsPrefix, expanded: expanded, loading: loadingKeySet.has(rowInfo.key), onClick: () => {
                                            handleUpdateExpanded(rowKey, rowInfo.tmNode);
                                        } }))
                                ]
                                : null,
                            column.type === 'selection' ? (!isSummary ? (h(RenderSafeCheckbox, { key: currentPage, rowKey: rowKey, disabled: rowInfo.tmNode.disabled, onUpdateChecked: (checked, e) => handleCheckboxUpdateChecked(rowInfo.tmNode, checked, e.shiftKey) })) : null) : column.type === 'expand' ? (!isSummary ? (!column.expandable ||
                                ((_e = column.expandable) === null || _e === void 0 ? void 0 : _e.call(column, rowData, rowIndex)) ? (h(ExpandTrigger, { clsPrefix: mergedClsPrefix, expanded: expanded, onClick: () => handleUpdateExpanded(rowKey, null) })) : null) : null) : (h(Cell, { index: rowIndex, row: rowData, column: column, isSummary: isSummary, mergedTheme: mergedTheme }))));
                    })));
                    return row;
                };
                if (!virtualScroll) {
                    return (h("table", { class: `${mergedClsPrefix}-data-table-table`, onMouseleave: handleMouseleaveTable, onMouseenter: handleMouseenterTable, style: {
                            tableLayout: this.mergedTableLayout
                        } },
                        h("colgroup", null, cols.map((col) => (h("col", { key: col.key, style: col.style })))),
                        this.showHeader ? h(TableHeader, { discrete: false }) : null,
                        !this.empty ? (h("tbody", { "data-n-id": componentId, class: `${mergedClsPrefix}-data-table-tbody` }, displayedData.map((rowInfo, rowIndex) => {
                            return renderRow(rowInfo, rowIndex, false);
                        }))) : null));
                }
                else {
                    return (h(VirtualList, { ref: "virtualListRef", items: displayedData, itemSize: 28, visibleItemsTag: VirtualListItemWrapper, visibleItemsProps: {
                            clsPrefix: mergedClsPrefix,
                            id: componentId,
                            cols,
                            onMouseenter: handleMouseenterTable,
                            onMouseleave: handleMouseleaveTable
                        }, showScrollbar: false, onResize: this.handleVirtualListResize, onScroll: this.handleVirtualListScroll, itemsStyle: contentStyle, itemResizable: true }, {
                        default: ({ item, index }) => renderRow(item, index, true)
                    }));
                }
            }
        }));
        if (this.empty) {
            const createEmptyNode = () => (h("div", { class: [
                    `${mergedClsPrefix}-data-table-empty`,
                    this.loading && `${mergedClsPrefix}-data-table-empty--hide`
                ], style: this.bodyStyle, ref: "emptyElRef" }, resolveSlot(this.dataTableSlots.empty, () => [
                h(NEmpty, { theme: this.mergedTheme.peers.Empty, themeOverrides: this.mergedTheme.peerOverrides.Empty })
            ])));
            if (this.shouldDisplaySomeTablePart) {
                return (h(Fragment, null,
                    tableNode,
                    createEmptyNode()));
            }
            else {
                return (h(VResizeObserver, { onResize: this.onResize }, { default: createEmptyNode }));
            }
        }
        return tableNode;
    }
});