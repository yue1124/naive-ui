import { depx } from 'seemly';
import { formatLength } from '../../_utils';
export const selectionColWidth = 40;
export const expandColWidth = 40;
export function getNumberColWidth(col) {
    if (col.type === 'selection')
        return selectionColWidth;
    if (col.type === 'expand')
        return expandColWidth;
    if ('children' in col)
        return undefined;
    if (typeof col.width === 'string') {
        return depx(col.width);
    }
    return col.width;
}
export function getStringColWidth(col) {
    if (col.type === 'selection')
        return formatLength(selectionColWidth);
    if (col.type === 'expand')
        return formatLength(expandColWidth);
    if ('children' in col)
        return undefined;
    return formatLength(col.width);
}
export function getColKey(col) {
    if (col.type === 'selection')
        return '__n_selection__';
    if (col.type === 'expand')
        return '__n_expand__';
    return col.key;
}
export function createShallowClonedObject(object) {
    if (!object)
        return object;
    if (typeof object === 'object') {
        return Object.assign({}, object);
    }
    return object;
}
export function getFlagOfOrder(order) {
    if (order === 'ascend')
        return 1;
    else if (order === 'descend')
        return -1;
    return 0;
}
export function createCustomWidthStyle(column) {
    const width = getStringColWidth(column);
    return {
        width,
        minWidth: formatLength(column.minWidth) || width
    };
}
export function createRowClassName(row, index, rowClassName) {
    if (typeof rowClassName === 'function')
        return rowClassName(row, index);
    return rowClassName || '';
}
// for compatibility
// If column.filterOptionValues or column.defaultFilterOptionValues is set, use
// array value
export function shouldUseArrayInSingleMode(column) {
    return (column.filterOptionValues !== undefined ||
        (column.filterOptionValue === undefined &&
            column.defaultFilterOptionValues !== undefined));
}
export function isColumnSortable(column) {
    if ('children' in column)
        return false;
    return !!column.sorter;
}
export function isColumnFilterable(column) {
    if ('children' in column)
        return false;
    return (!!column.filter && (!!column.filterOptions || !!column.renderFilterMenu));
}
function getNextOrderOf(order) {
    if (!order)
        return 'descend';
    else if (order === 'descend')
        return 'ascend';
    return false;
}
export function createNextSorter(column, currentSortState) {
    if (column.sorter === undefined)
        return null;
    if (currentSortState === null || currentSortState.columnKey !== column.key) {
        return {
            columnKey: column.key,
            sorter: column.sorter,
            order: getNextOrderOf(false)
        };
    }
    else {
        return Object.assign(Object.assign({}, currentSortState), { order: getNextOrderOf(currentSortState.order) });
    }
}
export function isColumnSorting(column, mergedSortState) {
    return (mergedSortState.find((state) => state.columnKey === column.key && state.order) !== undefined);
}
