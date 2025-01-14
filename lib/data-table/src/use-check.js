"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCheck = void 0;
const vue_1 = require("vue");
const _utils_1 = require("../../_utils");
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function useCheck(props, data) {
    const { paginatedDataRef, treeMateRef, selectionColumnRef } = data;
    const uncontrolledCheckedRowKeysRef = (0, vue_1.ref)(props.defaultCheckedRowKeys);
    const mergedCheckState = (0, vue_1.computed)(() => {
        const { checkedRowKeys } = props;
        return treeMateRef.value.getCheckedKeys(checkedRowKeys === undefined
            ? uncontrolledCheckedRowKeysRef.value
            : checkedRowKeys, {
            cascade: props.cascade,
            allowNotLoaded: props.allowCheckingNotLoaded
        });
    });
    const mergedCheckedRowKeysRef = (0, vue_1.computed)(() => mergedCheckState.value.checkedKeys);
    const mergedInderminateRowKeysRef = (0, vue_1.computed)(() => mergedCheckState.value.indeterminateKeys);
    const mergedCheckedRowKeySetRef = (0, vue_1.computed)(() => {
        return new Set(mergedCheckedRowKeysRef.value);
    });
    const mergedInderminateRowKeySetRef = (0, vue_1.computed)(() => {
        return new Set(mergedInderminateRowKeysRef.value);
    });
    const countOfCurrentPageCheckedRowsRef = (0, vue_1.computed)(() => {
        const { value: mergedCheckedRowKeySet } = mergedCheckedRowKeySetRef;
        return paginatedDataRef.value.reduce((total, tmNode) => {
            const { key, disabled } = tmNode;
            return total + (!disabled && mergedCheckedRowKeySet.has(key) ? 1 : 0);
        }, 0);
    });
    const countOfCurrentPageDisabledRowsRef = (0, vue_1.computed)(() => {
        return paginatedDataRef.value.filter((item) => item.disabled).length;
    });
    const someRowsCheckedRef = (0, vue_1.computed)(() => {
        const { length } = paginatedDataRef.value;
        const { value: mergedInderminateRowKeySet } = mergedInderminateRowKeySetRef;
        return ((countOfCurrentPageCheckedRowsRef.value > 0 &&
            countOfCurrentPageCheckedRowsRef.value <
                length - countOfCurrentPageDisabledRowsRef.value) ||
            paginatedDataRef.value.some((rowData) => mergedInderminateRowKeySet.has(rowData.key)));
    });
    const allRowsCheckedRef = (0, vue_1.computed)(() => {
        const { length } = paginatedDataRef.value;
        return (countOfCurrentPageCheckedRowsRef.value !== 0 &&
            countOfCurrentPageCheckedRowsRef.value ===
                length - countOfCurrentPageDisabledRowsRef.value);
    });
    const headerCheckboxDisabledRef = (0, vue_1.computed)(() => {
        return paginatedDataRef.value.length === 0;
    });
    function doUpdateCheckedRowKeys(keys) {
        const { 'onUpdate:checkedRowKeys': _onUpdateCheckedRowKeys, onUpdateCheckedRowKeys, onCheckedRowKeysChange } = props;
        if (_onUpdateCheckedRowKeys)
            (0, _utils_1.call)(_onUpdateCheckedRowKeys, keys);
        if (onUpdateCheckedRowKeys)
            (0, _utils_1.call)(onUpdateCheckedRowKeys, keys);
        if (onCheckedRowKeysChange)
            (0, _utils_1.call)(onCheckedRowKeysChange, keys);
        uncontrolledCheckedRowKeysRef.value = keys;
    }
    function doCheck(rowKey) {
        if (props.loading)
            return;
        doUpdateCheckedRowKeys(treeMateRef.value.check(rowKey, mergedCheckedRowKeysRef.value, {
            cascade: props.cascade,
            allowNotLoaded: props.allowCheckingNotLoaded
        }).checkedKeys);
    }
    function doUncheck(rowKey) {
        if (props.loading)
            return;
        doUpdateCheckedRowKeys(treeMateRef.value.uncheck(rowKey, mergedCheckedRowKeysRef.value, {
            cascade: props.cascade,
            allowNotLoaded: props.allowCheckingNotLoaded
        }).checkedKeys);
    }
    function doCheckAll(checkWholeTable = false) {
        const { value: column } = selectionColumnRef;
        if (!column || props.loading)
            return;
        const rowKeysToCheck = [];
        (checkWholeTable
            ? treeMateRef.value.treeNodes
            : paginatedDataRef.value).forEach((tmNode) => {
            if (!tmNode.disabled) {
                rowKeysToCheck.push(tmNode.key);
            }
        });
        // alway cascade, to emit correct row keys
        doUpdateCheckedRowKeys(treeMateRef.value.check(rowKeysToCheck, mergedCheckedRowKeysRef.value, {
            cascade: true,
            allowNotLoaded: props.allowCheckingNotLoaded
        }).checkedKeys);
    }
    function doUncheckAll(checkWholeTable = false) {
        const { value: column } = selectionColumnRef;
        if (!column || props.loading)
            return;
        const rowKeysToUncheck = [];
        (checkWholeTable
            ? treeMateRef.value.treeNodes
            : paginatedDataRef.value).forEach((tmNode) => {
            if (!tmNode.disabled) {
                rowKeysToUncheck.push(tmNode.key);
            }
        });
        // alway cascade, to emit correct row keys
        doUpdateCheckedRowKeys(treeMateRef.value.uncheck(rowKeysToUncheck, mergedCheckedRowKeysRef.value, {
            cascade: true,
            allowNotLoaded: props.allowCheckingNotLoaded
        }).checkedKeys);
    }
    return {
        mergedCheckedRowKeySetRef,
        mergedCheckedRowKeysRef,
        mergedInderminateRowKeySetRef,
        someRowsCheckedRef,
        allRowsCheckedRef,
        headerCheckboxDisabledRef,
        doUpdateCheckedRowKeys,
        doCheckAll,
        doUncheckAll,
        doCheck,
        doUncheck
    };
}
exports.useCheck = useCheck;
