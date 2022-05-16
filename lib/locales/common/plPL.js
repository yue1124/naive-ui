"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const plPL = {
    name: 'pl-PL',
    global: {
        undo: 'Cofnij',
        redo: 'Ponów',
        confirm: 'Potwierdź'
    },
    Popconfirm: {
        positiveText: 'Potwierdź',
        negativeText: 'Anuluj'
    },
    Cascader: {
        placeholder: 'Wybierz',
        loading: 'Ładowanie',
        loadingRequiredMessage: (label) => `Proszę załadować wszystkie ${label}'s elementy przed sprawdzeniem.`
    },
    Time: {
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss'
    },
    DatePicker: {
        yearFormat: 'yyyy',
        monthFormat: 'MMM',
        dayFormat: 'eeeeee',
        yearTypeFormat: 'yyyy',
        monthTypeFormat: 'yyyy-MM',
        dateFormat: 'yyyy-MM-dd',
        dateTimeFormat: 'yyyy-MM-dd HH:mm:ss',
        quarterFormat: 'yyyy-qqq',
        clear: 'Wyczyść',
        now: 'Teraz',
        confirm: 'Potwierdź',
        selectTime: 'Wybierz czas',
        selectDate: 'Wybierz datę',
        datePlaceholder: 'Wybierz datę',
        datetimePlaceholder: 'Wybierz datę i czas',
        monthPlaceholder: 'Wybierz miesiąc',
        yearPlaceholder: 'Wybierz rok',
        quarterPlaceholder: 'Wybierz kwartał',
        startDatePlaceholder: 'Data rozpoczęcia',
        endDatePlaceholder: 'Data zakończenia',
        startDatetimePlaceholder: 'Data i godzina rozpoczęcia',
        endDatetimePlaceholder: 'Data i godzina zakończenia',
        // FIXME: translation needed
        startMonthPlaceholder: 'Start Month',
        endMonthPlaceholder: 'End Month',
        monthBeforeYear: true,
        firstDayOfWeek: 6,
        today: 'Dziś'
    },
    DataTable: {
        checkTableAll: 'Zaznacz wszystkie w tabeli',
        uncheckTableAll: 'Odznacz wszystkie w tabeli',
        confirm: 'Potwierdź',
        clear: 'Wyczyść'
    },
    Transfer: {
        sourceTitle: 'Źródło',
        targetTitle: 'Cel'
    },
    Empty: {
        description: 'Brak danych'
    },
    Select: {
        placeholder: 'Wybierz'
    },
    TimePicker: {
        placeholder: 'Wybierz czas',
        positiveText: 'Potwierdź',
        negativeText: 'Anuluj',
        now: 'Teraz'
    },
    Pagination: {
        goto: 'Idź do',
        selectionSuffix: 'strona'
    },
    DynamicTags: {
        add: 'Dodaj'
    },
    Log: {
        loading: 'Ładowanie'
    },
    Input: {
        placeholder: 'Wprowadź dane'
    },
    InputNumber: {
        placeholder: 'Wprowadź dane'
    },
    DynamicInput: {
        create: 'Utwórz'
    },
    ThemeEditor: {
        title: 'Edytor motywów',
        clearAllVars: 'Wyczyść wszystkie zmienne',
        clearSearch: 'Wyczyść wyszukiwanie',
        filterCompName: 'Nazwa komponentu filtra',
        filterVarName: 'Nazwa zmiennej filtra',
        import: 'Importuj',
        export: 'Eksportuj',
        restore: 'Przywróć ustawienia domyślne'
    },
    Image: {
        tipPrevious: 'Poprzednie zdjęcie (←)',
        tipNext: 'Następne zdjęcie (→)',
        tipCounterclockwise: 'Przeciwnie do ruchu wskazówek zegara',
        tipClockwise: 'Zgodnie z ruchem wskazówek zegara',
        tipZoomOut: 'Powiększ',
        tipZoomIn: 'Pomniejsz',
        tipClose: 'Zamknij (Esc)'
    }
};
exports.default = plPL;