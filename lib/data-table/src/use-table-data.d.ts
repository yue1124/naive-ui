import { ComputedRef } from 'vue';
import type { DataTableSetupProps } from './DataTable';
import type { ColumnKey, FilterState, TableBaseColumn, TableSelectionColumn, InternalRowData, TmNode, TableExpandColumn, RowKey } from './interface';
import type { PaginationProps } from '../../pagination/src/Pagination';
export declare function useTableData(props: DataTableSetupProps, { dataRelatedColsRef }: {
    dataRelatedColsRef: ComputedRef<Array<TableSelectionColumn | TableBaseColumn | TableExpandColumn>>;
}): {
    treeMateRef: ComputedRef<import("treemate").TreeMate<InternalRowData, InternalRowData, InternalRowData>>;
    mergedCurrentPageRef: ComputedRef<number>;
    mergedPaginationRef: ComputedRef<PaginationProps>;
    paginatedDataRef: ComputedRef<TmNode[]>;
    rawPaginatedDataRef: ComputedRef<InternalRowData[]>;
    mergedFilterStateRef: ComputedRef<FilterState>;
    mergedSortStateRef: ComputedRef<{
        columnKey: ColumnKey;
        order: import("./interface").SortOrder;
        sorter: boolean | "default" | import("./interface").CompareFn<InternalRowData> | {
            multiple: number;
            compare?: "default" | import("./interface").CompareFn<InternalRowData> | undefined;
        };
    }[]>;
    hoverKeyRef: import("vue").Ref<RowKey | null>;
    selectionColumnRef: ComputedRef<TableSelectionColumn<InternalRowData> | null>;
    firstContentfulColIndexRef: ComputedRef<number>;
    doUpdateFilters: (filters: FilterState, sourceColumn: TableBaseColumn) => void;
    deriveNextSorter: (sortState: import("./interface").SortState | null) => void;
    doUpdatePageSize: (pageSize: number) => void;
    doUpdatePage: (page: number) => void;
    filter: (filters: FilterState | null) => void;
    filters: (filters: FilterState | null) => void;
    clearFilter: () => void;
    clearFilters: () => void;
    clearSorter: () => void;
    page: (page: number) => void;
    sort: (columnKey: ColumnKey, order?: import("./interface").SortOrder) => void;
};
