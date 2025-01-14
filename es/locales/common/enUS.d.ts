declare const enUS: {
    name: string;
    global: {
        undo: string;
        redo: string;
        confirm: string;
    };
    Popconfirm: {
        positiveText: string;
        negativeText: string;
    };
    Cascader: {
        placeholder: string;
        loading: string;
        loadingRequiredMessage: (label: string) => string;
    };
    Time: {
        dateFormat: string;
        dateTimeFormat: string;
    };
    DatePicker: {
        yearFormat: string;
        monthFormat: string;
        dayFormat: string;
        yearTypeFormat: string;
        monthTypeFormat: string;
        dateFormat: string;
        dateTimeFormat: string;
        quarterFormat: string;
        clear: string;
        now: string;
        confirm: string;
        selectTime: string;
        selectDate: string;
        datePlaceholder: string;
        datetimePlaceholder: string;
        monthPlaceholder: string;
        yearPlaceholder: string;
        quarterPlaceholder: string;
        startDatePlaceholder: string;
        endDatePlaceholder: string;
        startDatetimePlaceholder: string;
        endDatetimePlaceholder: string;
        startMonthPlaceholder: string;
        endMonthPlaceholder: string;
        monthBeforeYear: boolean;
        firstDayOfWeek: 0 | 2 | 1 | 3 | 4 | 5 | 6;
        today: string;
    };
    DataTable: {
        checkTableAll: string;
        uncheckTableAll: string;
        confirm: string;
        clear: string;
    };
    Transfer: {
        sourceTitle: string;
        targetTitle: string;
    };
    Empty: {
        description: string;
    };
    Select: {
        placeholder: string;
    };
    TimePicker: {
        placeholder: string;
        positiveText: string;
        negativeText: string;
        now: string;
    };
    Pagination: {
        goto: string;
        selectionSuffix: string;
    };
    DynamicTags: {
        add: string;
    };
    Log: {
        loading: string;
    };
    Input: {
        placeholder: string;
    };
    InputNumber: {
        placeholder: string;
    };
    DynamicInput: {
        create: string;
    };
    ThemeEditor: {
        title: string;
        clearAllVars: string;
        clearSearch: string;
        filterCompName: string;
        filterVarName: string;
        import: string;
        export: string;
        restore: string;
    };
    Image: {
        tipPrevious: string;
        tipNext: string;
        tipCounterclockwise: string;
        tipClockwise: string;
        tipZoomOut: string;
        tipZoomIn: string;
        tipClose: string;
    };
};
export declare type NLocale = typeof enUS;
export default enUS;
