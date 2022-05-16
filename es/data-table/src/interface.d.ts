import { TreeNode } from 'treemate';
import { CSSProperties, Ref, VNodeChild, HTMLAttributes, Slots } from 'vue';
import { EllipsisProps } from '../../ellipsis/src/Ellipsis';
import { NLocale } from '../../locales';
import { MergedTheme } from '../../_mixins';
import { DataTableTheme } from '../styles';
import type { RowItem, ColItem } from './use-group-header';
import type { DataTableSelectionOption } from './TableParts/SelectionMenu';
export declare type FilterOptionValue = string | number;
export declare type ColumnKey = string | number;
export declare type RowKey = string | number;
export declare type SortOrderFlag = 1 | -1 | 0;
export declare type RowData = Record<string, any>;
export interface InternalRowData {
    [key: string]: unknown;
}
export declare type CreateRowKey<T = InternalRowData> = (row: T) => RowKey;
export declare type CreateRowClassName<T = InternalRowData> = (row: T, index: number) => string;
export declare type CreateRowProps<T = InternalRowData> = (row: T, index: number) => HTMLAttributes;
export declare type CreateCellProps<T = InternalRowData> = (row: T, index: number) => HTMLAttributes;
export declare type CompareFn<T = InternalRowData> = (row1: T, row2: T) => number;
export declare type Sorter<T = InternalRowData> = CompareFn<T> | SorterMultiple<T>;
export interface SorterMultiple<T = InternalRowData> {
    multiple: number;
    compare?: CompareFn<T> | 'default';
}
export declare type Filter<T = InternalRowData> = (filterOptionValue: FilterOptionValue, row: T) => boolean;
export interface FilterOption {
    label: string;
    value: FilterOptionValue;
}
export declare type TmNode = TreeNode<InternalRowData>;
export declare type SortOrder = 'ascend' | 'descend' | false;
export declare type Ellipsis = boolean | EllipsisProps;
export interface CommonColumnInfo<T = InternalRowData> {
    fixed?: 'left' | 'right';
    width?: number | string;
    minWidth?: number | string;
    className?: string;
    align?: 'left' | 'center' | 'right';
    ellipsis?: Ellipsis;
    cellProps?: (rowData: T, rowIndex: number) => HTMLAttributes;
}
export declare type TableColumnTitle = string | ((column: TableBaseColumn) => VNodeChild);
export declare type TableExpandColumnTitle = string | ((column: TableExpandColumn) => VNodeChild);
export declare type TableColumnGroupTitle = string | ((column: TableColumnGroup) => VNodeChild);
export declare type TableColumnGroup<T = InternalRowData> = {
    title?: TableColumnGroupTitle;
    type?: never;
    key: ColumnKey;
    children: Array<TableBaseColumn<T>>;
    filterOptions?: never;
} & CommonColumnInfo<T>;
export declare type TableBaseColumn<T = InternalRowData> = {
    title?: TableColumnTitle;
    titleColSpan?: number;
    type?: never;
    key: ColumnKey;
    sorter?: boolean | Sorter<T> | 'default';
    defaultSortOrder?: SortOrder;
    sortOrder?: SortOrder;
    filter?: 'default' | boolean | Filter<T>;
    filterOptions?: FilterOption[];
    filterOptionValues?: FilterOptionValue[] | null;
    filterOptionValue?: FilterOptionValue | null;
    filterMode?: 'or' | 'and';
    defaultFilterOptionValues?: FilterOptionValue[] | null;
    defaultFilterOptionValue?: FilterOptionValue | null;
    filterMultiple?: boolean;
    render?: (rowData: T, rowIndex: number) => VNodeChild;
    renderFilter?: RenderFilter;
    renderFilterIcon?: RenderFilterIcon;
    renderSorter?: RenderSorter;
    renderSorterIcon?: RenderSorterIcon;
    renderFilterMenu?: RenderFilterMenu;
    colSpan?: (rowData: T, rowIndex: number) => number;
    rowSpan?: (rowData: T, rowIndex: number) => number;
} & CommonColumnInfo<T>;
export declare type TableSelectionColumn<T = InternalRowData> = {
    type: 'selection';
    disabled?: (row: T) => boolean;
    options?: DataTableSelectionOptions;
    sorter?: never;
    filter?: never;
    filterOptions?: never;
    filterOptionValues?: never;
    filterOptionValue?: never;
    colSpan?: never;
    rowSpan?: never;
} & CommonColumnInfo<T>;
export declare type RenderExpand<T = InternalRowData> = (row: T, index: number) => VNodeChild;
export declare type Expandable<T = InternalRowData> = (row: T, index: number) => boolean;
export interface TableExpandColumn<T = InternalRowData> extends Omit<TableSelectionColumn<T>, 'type'> {
    type: 'expand';
    title?: TableExpandColumnTitle;
    renderExpand: RenderExpand<T>;
    expandable?: Expandable<T>;
}
export declare type TableColumn<T = InternalRowData> = TableColumnGroup<T> | TableBaseColumn<T> | TableSelectionColumn<T> | TableExpandColumn<T>;
export declare type TableColumns<T = InternalRowData> = Array<TableColumn<T>>;
export declare type DataTableSelectionOptions = Array<DataTableSelectionOption | {
    label: string;
    key: string | number;
    onSelect: () => void;
}>;
export interface DataTableInjection {
    slots: Slots;
    indentRef: Ref<number>;
    firstContentfulColIndexRef: Ref<number>;
    componentId: string;
    checkOptionsRef: Ref<DataTableSelectionOptions | undefined>;
    hoverKeyRef: Ref<RowKey | null>;
    mergedClsPrefixRef: Ref<string>;
    mergedThemeRef: Ref<MergedTheme<DataTableTheme>>;
    scrollXRef: Ref<string | number | undefined>;
    rowsRef: Ref<RowItem[][]>;
    colsRef: Ref<ColItem[]>;
    paginatedDataRef: Ref<TmNode[]>;
    leftFixedColumnsRef: Ref<TableColumns>;
    rightFixedColumnsRef: Ref<TableColumns>;
    leftActiveFixedColKeyRef: Ref<ColumnKey | null>;
    leftActiveFixedChildrenColKeysRef: Ref<ColumnKey[]>;
    rightActiveFixedColKeyRef: Ref<ColumnKey | null>;
    rightActiveFixedChildrenColKeysRef: Ref<ColumnKey[]>;
    fixedColumnLeftMapRef: Ref<Record<ColumnKey, {
        start: number;
        end: number;
    } | undefined>>;
    fixedColumnRightMapRef: Ref<Record<ColumnKey, {
        start: number;
        end: number;
    } | undefined>>;
    mergedCurrentPageRef: Ref<number>;
    someRowsCheckedRef: Ref<boolean>;
    allRowsCheckedRef: Ref<boolean>;
    mergedSortStateRef: Ref<SortState[]>;
    mergedFilterStateRef: Ref<FilterState>;
    loadingRef: Ref<boolean>;
    rowClassNameRef: Ref<string | CreateRowClassName | undefined>;
    mergedCheckedRowKeySetRef: Ref<Set<RowKey>>;
    mergedInderminateRowKeySetRef: Ref<Set<RowKey>>;
    localeRef: Ref<NLocale['DataTable']>;
    filterMenuCssVarsRef: Ref<CSSProperties>;
    mergedExpandedRowKeysRef: Ref<RowKey[]>;
    rowKeyRef: Ref<CreateRowKey | undefined>;
    renderExpandRef: Ref<undefined | RenderExpand>;
    summaryRef: Ref<undefined | CreateSummary>;
    rawPaginatedDataRef: Ref<InternalRowData[]>;
    virtualScrollRef: Ref<boolean>;
    bodyWidthRef: Ref<number | null>;
    scrollPartRef: Ref<'head' | 'body'>;
    mergedTableLayoutRef: Ref<'auto' | 'fixed'>;
    maxHeightRef: Ref<string | number | undefined>;
    minHeightRef: Ref<string | number | undefined>;
    rowPropsRef: Ref<CreateRowProps | undefined>;
    flexHeightRef: Ref<boolean>;
    headerCheckboxDisabledRef: Ref<boolean>;
    stripedRef: Ref<boolean>;
    onLoadRef: Ref<DataTableOnLoad | undefined>;
    loadingKeySetRef: Ref<Set<RowKey>>;
    paginationBehaviorOnFilterRef: Ref<'current' | 'first'>;
    doUpdatePage: (page: number) => void;
    doUpdateExpandedRowKeys: (keys: RowKey[]) => void;
    doUpdateFilters: (filters: FilterState, sourceColumn: TableBaseColumn) => void;
    deriveNextSorter: (sorter: SortState | null) => void;
    doUncheckAll: (checkWholeTable?: boolean) => void;
    doCheckAll: (checkWholeTable?: boolean) => void;
    doCheck: (rowKey: RowKey | RowKey[]) => void;
    doUncheck: (rowKey: RowKey | RowKey[]) => void;
    handleTableHeaderScroll: (e: Event) => void;
    handleTableBodyScroll: (e: Event) => void;
    syncScrollState: (deltaX?: number, deltaY?: number) => void;
    setHeaderScrollLeft: (scrollLeft: number) => void;
}
export declare const dataTableInjectionKey: import("vue").InjectionKey<DataTableInjection>;
export interface MainTableInjection {
    leftActiveFixedColKey: ColumnKey | null;
    rightActiveFixedColKey: ColumnKey | null;
}
export declare type RenderFilter = (props: {
    active: boolean;
    show: boolean;
}) => VNodeChild;
export declare type RenderFilterIcon = RenderFilter;
export declare type RenderSorter = (props: {
    order: SortOrder;
}) => VNodeChild;
export declare type RenderSorterIcon = RenderSorter;
export declare type RenderFilterMenu = (actions: {
    hide: () => void;
}) => VNodeChild;
export declare type OnUpdateExpandedRowKeys = (keys: RowKey[]) => void;
export declare type OnUpdateCheckedRowKeys = (keys: RowKey[]) => void;
export declare type OnUpdateSorter = (sortState: SortState & SortState[] & null) => void;
export declare type OnUpdateSorterImpl = (sortState: SortState | SortState[] | null) => void;
export declare type OnUpdateFilters = (filterState: FilterState, sourceColumn: TableBaseColumn) => void;
export interface SortState {
    columnKey: ColumnKey;
    order: SortOrder;
    sorter: Sorter | boolean | 'default';
}
export interface FilterState {
    [key: string]: FilterOptionValue[] | FilterOptionValue | null | undefined;
}
export interface MainTableRef {
    getHeaderElement: () => HTMLElement | null;
    getBodyElement: () => HTMLElement | null;
}
export interface MainTableBodyRef {
    getScrollContainer: () => HTMLElement | null;
}
export interface MainTableHeaderRef {
    $el: HTMLElement | null;
}
export declare type OnFilterMenuChange = <T extends FilterOptionValue[] & (FilterOptionValue | null)>(value: T) => void;
export declare type OnFilterMenuChangeImpl = (value: FilterOptionValue[] | FilterOptionValue | null) => void;
export interface DataTableInst {
    filter: (filters: FilterState | null) => void;
    filters: (filters: FilterState | null) => void;
    clearFilters: () => void;
    clearSorter: () => void;
    page: (page: number) => void;
    sort: (columnKey: ColumnKey, order: SortOrder) => void;
    /** @deprecated it but just leave it here, it does no harm */
    clearFilter: () => void;
}
export declare type CreateSummary<T = InternalRowData> = (pageData: T[]) => SummaryRowData | SummaryRowData[];
export interface SummaryCell {
    value?: VNodeChild;
    colSpan?: number;
    rowSpan?: number;
}
export interface SummaryRowData {
    [key: string]: SummaryCell;
}
export declare type DataTableOnLoad = (node: RowData) => Promise<void>;