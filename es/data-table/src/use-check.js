import { computed, ref } from 'vue';
import { call } from '../../_utils';
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function useCheck(props, data) {
    const { paginatedDataRef, treeMateRef, selectionColumnRef } = data;
    const uncontrolledCheckedRowKeysRef = ref(props.defaultCheckedRowKeys);
    const mergedCheckState = computed(() => {
        const { checkedRowKeys } = props;
        return treeMateRef.value.getCheckedKeys(checkedRowKeys === undefined
            ? uncontrolledCheckedRowKeysRef.value
            : checkedRowKeys, {
            cascade: props.cascade,
            allowNotLoaded: props.allowCheckingNotLoaded
        });
    });
    const mergedCheckedRowKeysRef = computed(() => mergedCheckState.value.checkedKeys);
    const mergedInderminateRowKeysRef = computed(() => mergedCheckState.value.indeterminateKeys);
    const mergedCheckedRowKeySetRef = computed(() => {
        return new Set(mergedCheckedRowKeysRef.value);
    });
    const mergedInderminateRowKeySetRef = computed(() => {
        return new Set(mergedInderminateRowKeysRef.value);
    });
    const countOfCurrentPageCheckedRowsRef = computed(() => {
        const { value: mergedCheckedRowKeySet } = mergedCheckedRowKeySetRef;
        return paginatedDataRef.value.reduce((total, tmNode) => {
            const { key, disabled } = tmNode;
            return total + (!disabled && mergedCheckedRowKeySet.has(key) ? 1 : 0);
        }, 0);
    });
    const countOfCurrentPageDisabledRowsRef = computed(() => {
        return paginatedDataRef.value.filter((item) => item.disabled).length;
    });
    const someRowsCheckedRef = computed(() => {
        const { length } = paginatedDataRef.value;
        const { value: mergedInderminateRowKeySet } = mergedInderminateRowKeySetRef;
        return ((countOfCurrentPageCheckedRowsRef.value > 0 &&
            countOfCurrentPageCheckedRowsRef.value <
                length - countOfCurrentPageDisabledRowsRef.value) ||
            paginatedDataRef.value.some((rowData) => mergedInderminateRowKeySet.has(rowData.key)));
    });
    const allRowsCheckedRef = computed(() => {
        const { length } = paginatedDataRef.value;
        return (countOfCurrentPageCheckedRowsRef.value !== 0 &&
            countOfCurrentPageCheckedRowsRef.value ===
                length - countOfCurrentPageDisabledRowsRef.value);
    });
    const headerCheckboxDisabledRef = computed(() => {
        return paginatedDataRef.value.length === 0;
    });
    function doUpdateCheckedRowKeys(keys) {
        const { 'onUpdate:checkedRowKeys': _onUpdateCheckedRowKeys, onUpdateCheckedRowKeys, onCheckedRowKeysChange } = props;
        if (_onUpdateCheckedRowKeys)
            call(_onUpdateCheckedRowKeys, keys);
        if (onUpdateCheckedRowKeys)
            call(onUpdateCheckedRowKeys, keys);
        if (onCheckedRowKeysChange)
            call(onCheckedRowKeysChange, keys);
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
