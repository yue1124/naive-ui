import { ComputedRef, Ref } from 'vue';
import type { DataTableSetupProps } from './DataTable';
import type { ColumnKey, MainTableRef, TableColumn } from './interface';
export declare function useScroll(props: DataTableSetupProps, { mainTableInstRef, mergedCurrentPageRef, bodyWidthRef, scrollPartRef }: {
    scrollPartRef: Ref<'head' | 'body'>;
    bodyWidthRef: Ref<null | number>;
    mainTableInstRef: Ref<MainTableRef | null>;
    mergedCurrentPageRef: ComputedRef<number>;
}): {
    styleScrollXRef: ComputedRef<string | undefined>;
    fixedColumnLeftMapRef: ComputedRef<Record<ColumnKey, {
        start: number;
        end: number;
    } | undefined>>;
    fixedColumnRightMapRef: ComputedRef<Record<ColumnKey, {
        start: number;
        end: number;
    } | undefined>>;
    leftFixedColumnsRef: ComputedRef<TableColumn<any>[]>;
    rightFixedColumnsRef: ComputedRef<TableColumn<any>[]>;
    leftActiveFixedColKeyRef: Ref<ColumnKey | null>;
    leftActiveFixedChildrenColKeysRef: Ref<ColumnKey[]>;
    rightActiveFixedColKeyRef: Ref<ColumnKey | null>;
    rightActiveFixedChildrenColKeysRef: Ref<ColumnKey[]>;
    syncScrollState: () => void;
    handleTableBodyScroll: () => void;
    handleTableHeaderScroll: () => void;
    setHeaderScrollLeft: (left: number) => void;
};
