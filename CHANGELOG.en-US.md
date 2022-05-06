# CHANGELOG

## NEXT_VERSION

### Fixes

- Fix `n-menu`'s `dropdown-props` prop can't override `n-dropdown`'s `size` prop, closes [#2868](https://github.com/TuSimple/naive-ui/issues/2868).
- Fix `n-switch` abnormal loading animation when switching state, closes [#2870](https://github.com/TuSimple/naive-ui/issues/2870)
- Fix `n-data-table` doesn't show content when page is more than data's page, closes [#2840](https://github.com/TuSimple/naive-ui/issues/2840).
- Fix `n-data-table`'s `cellProps` doesn't has correct generic type.

### Feats

- `n-menu` adds `node-props` prop.
- `n-switch` adds `rubber-band` prop.
- `n-space`'s `justify` prop supports `'space-evenly'`.
- `n-popover` adds `content-style` prop.
- `n-popover` adds `header-style` prop.
- `n-popover` adds `scrollable` prop.
- `n-select` & `n-cascader` & `n-tree-select`'s overflow count tag's popover is scrollable.
- `n-data-table` adds `pagination-behavior-on-filter` prop.
- `n-date-picker`'s `type` prop supports `monthrange` option.
- `n-data-table`'s `columns`'s element supports `minWidth` prop.
- `n-tree` adds `checkbox-placement` prop.
- `n-modal` adds `block-scroll` prop, closes [#2556](https://github.com/TuSimple/naive-ui/issues/2556).
- `n-drawer` adds `block-scroll` prop, closes [#2556](https://github.com/TuSimple/naive-ui/issues/2556).
- `useDialog` supports `block-scroll` option, closes [#2556](https://github.com/TuSimple/naive-ui/issues/2556).
- `useDialog` supports `autoFocus` option.

## 2.28.2

### Fixes

- Fix `date-picker` `actions`'s type can't be `null`.
- Fix `time-picker` `actions`'s type can't be `null`.
- Fix `n-tree-select`'s meaningless warning.
- Fix `n-tree-select`'s `allow-checking-not-loaded` prop doesn't work.
- Fix `n-tree-select`'s menu position may not sync with trigger box if `:allow-checking-not-loaded="true"`.
- Fix `n-cascader`'s menu position may not sync with trigger box if `:allow-checking-not-loaded="true"`.

## 2.28.1

### Fixes

- Fix `notification` icon won't show after first notification is emitted in SSR mode, closes [#2793](https://github.com/TuSimple/naive-ui/issues/2793).
- Fix `dialog` icon won't show after first dialog is displayed in SSR mode.
- Fix `n-drawer` & `n-modal` may overflow screen on opening if `:autofocus="true"`.
- Fix `n-tree-select`'s filter not working correctly when `children-field` is not set, closed [#2789](https://github.com/TuSimple/naive-ui/issues/2789).
- Fix `n-tree-select`'s matched style is not cleared after filter value is cleared.
- Fix `n-tree-select`'s parent items in tree are selectable when `check-strategy="child"` and `:cascade="false"`, closes [#2780](https://github.com/TuSimple/naive-ui/issues/2780).
- Fix `n-select`'s `empty` slot can't let `n-input` focus inside, closes [#2812](https://github.com/TuSimple/naive-ui/issues/2812).
- Fix `n-select`'s menu is invisible in fullscreen mode, closes [#2722](https://github.com/TuSimple/naive-ui/issues/2722).
- Fix `n-color-picker`'s `value` prop can't be `null`.
- Fix `n-table`'s border color shifts when switch bewteen different props.

### Feats

- `n-input-number` adds `add-icon` and `minus-icon` slots, closes [#2668](https://github.com/TuSimple/naive-ui/issues/2668).
- `n-dynamic-input` adds `RTL` support.
- `n-table` adds `RTL` support.
- `n-collapse-transition` adds `RTL` support.
- `n-tree` adds `show-irrelevant-nodes` prop, closes [#2764](https://github.com/TuSimple/naive-ui/issues/2764).
- `n-tree-select` adds `allow-checking-not-loaded` prop.
- `n-cascader` adds `allow-checking-not-loaded` prop.
- `n-tree` adds `allow-checking-not-loaded` prop.
- `n-button-group` adds `RTL` support.

### i18n

- Add ptBR locale.
- Add koKR locale.

## 2.28.0

### Breaking Changes

- `n-time` uses `formatDistanceStrict` rather than `formatDistance` in `date-fns`, closes [#2703](https://github.com/TuSimple/naive-ui/issues/2703).

### Fixes

- Fix `n-tabs` has unexpected line animation when nested with `n-tabs`, closes [#2689](https://github.com/TuSimple/naive-ui/issues/2689).
- Fix `n-popconfirm` with no body content has wrong margin top, closes [#2690](https://github.com/TuSimple/naive-ui/issues/2690).
- Fix `n-tree-select` unexpected warning.
- Fix `n-calendar`'s disabled cells are clickable, closes [#2686](https://github.com/TuSimple/naive-ui/issues/2686).
- Fix message icon won't show after first message is emitted in SSR mode, closes [#2721](https://github.com/TuSimple/naive-ui/issues/2721).
- Fix `n-popconfirm`'s `positive-button-props` and `negative-button-props` props lack reactivity, closes [#2753](https://github.com/TuSimple/naive-ui/issues/2753).
- Fix `n-step` has unexpected theme variable class.
- Fix `n-steps` displays uncorrectly when nested in vertical & horizontal mode.
- Fix `n-popconfirm`'s `positive-text` & `negetive-text` props don't allow `null` type.
- Fix `n-color-picker` can't be closed if mousedown.stop is set when click outside, closes [#2709](https://github.com/TuSimple/naive-ui/issues/2709).
- Fix `n-tabs` switch animation is incorrect when `display-directive='show'`, closes [#2718](https://github.com/TuSimple/naive-ui/issues/2718).

### Feats

- `n-radio` adds `label` prop, closes [#2707](https://github.com/TuSimple/naive-ui/issues/2707).
- `n-drawer` adds `on-after-enter` and `on-after-leave` props, closes [#2698](https://github.com/TuSimple/naive-ui/issues/2698).
- `n-data-table` adds `paginate-single-page` prop , closes [#2043](https://github.com/TuSimple/naive-ui/issues/2043).
- `n-pagination` add `RTL` support.
- `n-alert` add `RTL` support.
- `n-data-table` adds `allow-checking-not-loaded` prop, closes [#2758](https://github.com/TuSimple/naive-ui/issues/2758).

## 2.27.0

### Breaking Changes

- `n-menu` has some style changes.

### Fixes

- Fix `n-data-table`‘s row disorder when using `expand` type, closes [#2631](https://github.com/TuSimple/naive-ui/issues/2631).
- Fix `n-popconfirm` doesn't has `setShow` & `syncPosition` methods.
- Fix `n-popselect` doesn't has `setShow` & `syncPosition` methods.
- Fix `n-menu` theme's peers missing `Dropdown`.
- Fix `n-color-picker` can't input 0 as unit's value, closes [#2680](https://github.com/TuSimple/naive-ui/issues/2680).
- Fix `n-tree`'s scrollbar overflows in virtual scroll mode, closes [#2673](https://github.com/TuSimple/naive-ui/issues/2673).
- Fix `n-layout-sider`'s `content-style` can't override `overflow: auto` prop, closes [#2671](https://github.com/TuSimple/naive-ui/issues/2671).
- Fix `n-date-picker` displays panel item abnormally with `month` and `quarter` type in dark mode.
- Fix `n-dropdown` `onUpdateShow` not working.
- Fix `n-auto-complete` `onSelect` is triggered after `onUpdate:value`.
- Fix `n-data-table` `initiatorColumn` in `onUpdate:filters`'s type is an optional parameter.

### Feats

- `n-tree-select` adds `on-load` prop, closes [#2550](https://github.com/TuSimple/naive-ui/issues/2550).
- `n-data-table` adds `on-load` prop.
- `n-cascader` adds `menu-props` prop, closes [#2600](https://github.com/TuSimple/naive-ui/issues/2600).
- `n-cascader` adds `filter-menu-props` prop, closes [#2600](https://github.com/TuSimple/naive-ui/issues/2600).
- `n-badge` adds `value` slot.
- `n-form` adds `validate-messages` prop.
- `n-data-table`'s column supports `cellProps` prop, closes [#2625](https://github.com/TuSimple/naive-ui/issues/2625).
- `n-step` adds class to distinguish status.
- `n-popconfirm` adds `negative-button-props` props, closes [#2642](https://github.com/TuSimple/naive-ui/issues/2642).
- `n-popconfirm` adds `positive-button-props` props, closes [#2642](https://github.com/TuSimple/naive-ui/issues/2642).
- `n-pagination` adds `goto` slot.
- `n-input` adds `password-visible-icon` slot.
- `n-input` adds `password-invisible-icon` slot.
- `n-select` adds `status` prop.
- `n-input-number` adds `status` prop.
- `n-auto-complete` adds `status` prop.
- `n-cascader` adds `status` prop.
- `n-date-picker` adds `status` prop.
- `n-time-picker` adds `status` prop.
- `n-mention` adds `status` prop.
- `n-tree-select` adds `status` prop.
- `n-menu` adds `showOption` method, closes [#2562](https://github.com/TuSimple/naive-ui/issues/2562).
- `n-dynamic-tags`'s `value` support object typed option.
- `n-dynamic-tags` adds `render-tag` prop, closes [#2526](https://github.com/TuSimple/naive-ui/issues/2526).
- `n-dynamic-tags` adds `on-create` prop, closes [#2576](https://github.com/TuSimple/naive-ui/issues/2576).
- `n-date-picker` adds `time-picker-props` props, closes [#2660](https://github.com/TuSimple/naive-ui/issues/2660).
- `n-tabs` adds `trigger` prop, closes [#2679](https://github.com/TuSimple/naive-ui/issues/2679).
- `n-menu` adds `itemColorHover`, `itemColorActiveHover`, `itemTextColorActiveHover`, `itemTextColorHorizontal`, `itemTextColorHoverHorizontal`, `itemTextColorActiveHorizontal`, `itemTextColorActiveHoverHorizontal`, `itemTextColorChildActiveHorizontal`, `itemIconColorActiveHover`, `itemIconColorHorizontal`, `itemIconColorHoverHorizontal`, `itemIconColorActiveHorizontal`, `itemIconColorActiveHoverHorizontal`, `itemIconColorChildActiveHorizontal`, `arrowColorActiveHover`, `itemColorHoverInverted`, `itemColorActiveHoverInverted`, `itemTextColorActiveHoverInverted`, `itemTextColorHorizontalInverted`, `itemTextColorHoverHorizontalInverted`, `itemTextColorChildActiveHorizontalInverted`, `itemTextColorActiveHorizontalInverted`, `itemTextColorActiveHoverHorizontalInverted`, `itemIconColorActiveHoverInverted`, `itemIconColorHorizontalInverted`, `itemIconColorHoverHorizontalInverted`, `itemIconColorActiveHorizontalInverted`, `itemIconColorActiveHoverHorizontalInverted`, `itemIconColorChildActiveHorizontalInverted`, `arrowColorActiveHoverInverted` theme variables, closes [#2598](https://github.com/TuSimple/naive-ui/issues/2598).
- `n-carousel` adds `next-slide-style` and `prev-slide-style` props, closes [#2340](https://github.com/TuSimple/naive-ui/issues/2340).
- `n-dialog` adds `negative-button-props` prop.
- `n-dialog` adds `positive-button-props` prop.
- `n-tabs` adds `animated` prop.

### i18n

- Add thTH locale.

## 2.26.4

### Fixes

- Fix `n-tree-select`s in `multiple` mode cannot delete options whose `default-value` attribute contains parent node, closes [#2605](https://github.com/TuSimple/naive-ui/issues/2605).
- Fix `n-tree` may throw error when node is removed, closes [#2597](https://github.com/TuSimple/naive-ui/issues/2597).
- Fix `useDialog` renders component with popup content with unexpected focus management behavior, closes [#2612](https://github.com/TuSimple/naive-ui/issues/2612).
- Fix `n-tree-select`'s node sometimes can't be clicked when `check-strategy` is `'child'`.
- Fix `n-tree-select`'s emitted value can be not corresponding to `check-strategy` when delete option in select box with `check-strategy` is not `'all'`.

### Feats

- `useDialog` supports `closeOnEsc` prop.
- `n-data-table` exports `DataTableFilterState` type.
- `n-data-table` exports `DataTableSortState` type.

## 2.26.3

### Fixes

- Fix `n-button`'s loading icon shifts.

## 2.26.2

### Fixes

- Fix `n-cascader` arrow's loading animation last for too long time.
- Fix `n-select` menu doesn't follow theme.
- Fix `n-tabs` throws error without child, closes [#809](https://github.com/TuSimple/naive-ui/issues/809).
- Fix `n-menu`'s font color is not changed after theme is changed in chrome 99, closes [#2563](https://github.com/TuSimple/naive-ui/issues/2563). This is actual a bug of chrome, however we used a workaround and fixed it.
- Fix `n-date-picker`'s date item click trigger area is as large as cell size only in `'date'` mode.

### Feats

- `n-dynamic-tags` `input` slot add `deactivate` prop, closes [#2575](https://github.com/TuSimple/naive-ui/issues/2575).
- `n-space` add `RTL` support.
- `n-avatar-group` add `RTL` support.
- `n-badge` add `RTL` support.
- `n-radio` add `RTL` support.
- `n-auto-complete` adds `focus` method.
- `n-auto-complete` adds `blur` method.

## 2.26.1

### Fixes

- Fix `base-loading` use css transition rather than svg animateTrantion to prevent js blocking, close [#2506](https://github.com/TuSimple/naive-ui/issues/2506).
- Fix `n-time` throws error caused by `getTimezoneOffset`, closes [#2545](https://github.com/TuSimple/naive-ui/issues/2545).
- Fix `n-modal`'s mask doesn't have enter & leave transition.
- Fix `n-timeline` has style conflict when vertical & horizontal `n-timeline` are nested, closes [#2549](https://github.com/TuSimple/naive-ui/issues/2549).
- Fix `n-tree`'s arrow & loading switch animation isn't complete.

### Feats

- `n-time-line-item` adds `line-type` prop, closes [#2548](https://github.com/TuSimple/naive-ui/issues/2548).
- `n-step` adds `icon` slot, closes [#2547](https://github.com/TuSimple/naive-ui/issues/2547).
- `n-input-number` adds `autofocus` prop, closes [#2551](https://github.com/TuSimple/naive-ui/issues/2551).
- `n-date-picker`'s date item click trigger area is as large as cell size, closes [#2552](https://github.com/TuSimple/naive-ui/issues/2552).

## 2.26.0

### Breaking Changes

- Fix `n-tooltip`'s gap between arrow and body. `n-tooltip` can't be translucent anymore.

### Feats

- `n-popover` adds `arrow-point-to-center` prop.
- `n-config-provider` adds `inline-theme-disabled` prop.

## 2.25.8

### Fixes

- Fix `useMessage` loses styles.

## 2.25.7

### Fixes

- Fix `n-time-picker` still shows action bar when `:actions="null"`.
- Fix `n-input`'s content may overflow when `type="text"` and `autosize` is enabled, closes [#2505](https://github.com/TuSimple/naive-ui/issues/2505).
- Fix `n-upload` put `file` field before other `FormData` fields, closes [#2504](https://github.com/TuSimple/naive-ui/issues/2504)
- Fix `n-button` rtl support.
- Fix `n-form-item-row` can't call `n-form-item`'s methods.

### Feats

- `n-collapse` add `RTL` support.
- `useMessage` adds `create` methods.
- `useMessage` adds `showIcon` prop, closes [#2495](https://github.com/TuSimple/naive-ui/issues/2495).
- `useMessage` supports `'default'` `type`.
- `n-checkbox` supports label line wrap, closes [#2419](https://github.com/TuSimple/naive-ui/issues/2419).
- `n-radio` supports label line wrap, closes [#2419](https://github.com/TuSimple/naive-ui/issues/2419).
- `n-checkbox` add `RTL` support.
- `n-input` add `RTL` support.
- `n-input-number` add `RTL` support.

## 2.25.5 (2022-02-24)

### Fixes

- Fix `n-col` can't be wrapped correctly when `span=6`, closes [#2497](https://github.com/TuSimple/naive-ui/issues/2497).
- Fix `n-tabs` doesn't display border-bottom in scroll area on large number of tabs, closes [#2500](https://github.com/TuSimple/naive-ui/issues/2500).

## 2.25.3 (2022-02-23)

### Fixes

- Fix `n-switch` can't use keyboard operation when checked value is customized.
- Fix `n-data-table`'s fixed column is covered by scroll content when placed inside popover.
- Fix `n-data-table` when the `filterOptions` value is 0, the filter will not take effect, closes [#2392](https://github.com/TuSimple/naive-ui/issues/2392).
- Fix `n-data-table` cannot click selection checkbox if the selection column is a column's child.
- Fix `n-table`'s `border-color` abnormal style when this added dynamically, closes [#2403](https://github.com/TuSimple/naive-ui/issues/2403).
- Fix `n-tree`'s `default-expand-all` prop doesn't work for dynamic data.
- Fix `n-form` when `model.xxx` is `undefined`, validator will use `null` as validation value, closes [#2486](https://github.com/TuSimple/naive-ui/issues/2486).
- Fix `n-input` focus style's priority is lower than hover style, closes [#2480](https://github.com/TuSimple/naive-ui/issues/2480).
- Fix `n-data-table` display issue when placed inside keep-alive component with virtual scroll, closes [#2183](https://github.com/TuSimple/naive-ui/issues/2183).
- Fix `notification` enter & leave animation.

### Feats

- `n-tree-select` adds `clear-filter-after-select` prop.
- `n-cascader` adds `clear-filter-after-select` prop.
- `n-switch` adds `icon` slot.
- `n-switch` adds `checked-icon` slot.
- `n-switch` adds `unchecked-icon` slot.
- `n-tabs` uses `n` as CSS vars prefix.
- Add `n-watermark` component, closes [#1745](https://github.com/TuSimple/naive-ui/issues/1745).
- `n-scrollbar` adds `scrollBy` method, closes [#2435](https://github.com/TuSimple/naive-ui/issues/2435).
- `n-data-table`'s `summary`'s `value` supports `VNodeChild`, closes [#2339](https://github.com/TuSimple/naive-ui/issues/2339).
- `n-input-number` adds hold click to increment, closes [#1293](https://github.com/TuSimple/naive-ui/issues/1293).
- `n-description` adds `titleTextColor` theme variable.

### i18n

- Add skSK locale.
- Fix frFR locale.

## 2.25.2 (2022-02-11)

### Fixes

- Remove useless `console.log` in `resolveSlot`.
- Fix `n-tag` misses background color when `checkable=true`.
- Fix `n-tree` throws `Image` error in `happydom` testing environment.
- Fix `n-select` `max-tag-count` tag size doesn't follow select size.

### Feats

- `n-progress` props `type` add type `dashboard`.
- `n-progress` adds `gap-degree` prop.
- `n-progress` adds `gap-offset-degree` prop.
- `n-select` adds `clear-filter-after-select` prop, closes [#2352](https://github.com/TuSimple/naive-ui/issues/2352).

### i18n

- Add plPL locale, closes [#2354](https://github.com/TuSimple/naive-ui/issues/2354).
- Add eo locale.

## 2.25.1 (2022-02-06)

### i18n

- Add enGB locale.
- Fix deDE locale.

## 2.25.0 (2022-02-04)

### Breaking Changes

- Refactor `n-carousel`'s style when `show-arrow` is true.

### Fixes

- Fix `n-color-picker`'s hue & alpha slider handle are influenced by rail's box-shadow.
- Fix `n-form-item` prevent feedback padding when empty.
- Fix `n-button` has extra margin in safari.
- Fix `n-form`'s rules and `n-form-item`'s rule about `validator` and `asyncValidator`'s `rule` type is not `FormItemRule`, closes [#2299](https://github.com/TuSimple/naive-ui/issues/2299).
- Fix `n-log` doesn't break line when line is too long, closes [#2298](https://github.com/TuSimple/naive-ui/issues/2298).
- Fix `n-log` doesn't export `LogInst` type.
- Fix `n-popselect` action slot & empty slot now working.
- Fix `n-data-table` can't use percent as column width.
- Fix `n-select` trigger shows blank for a while when `filterable=true` and menu is closing.
- Fix `n-select`'s being created option is not cleared after menu is closed.
- Fix `n-select` can't input content when `show=false` and `filterable=true`, closes [#1723](https://github.com/TuSimple/naive-ui/issues/1723).
- Fix `n-dropdown` has extra margin when `trigger="manual"`.
- Fix `web-types.json`'s `n-h1` ~ `n-h6` name.
- Fix `n-select` deletes option on backspace pressed while compisiting.
- Fix `n-select` uses disabled option as pending option after menu is opened.

### Feats

- `n-tabs` props `justify-content` add types `start` `center` `end`.
- `n-auto-complete` adds `placement` prop.
- `n-cascader` adds `placement` prop.
- `n-color-picker` adds `placement` prop.
- `n-date-picker` adds `placement` prop.
- `n-mention` adds `placement` prop.
- `n-select` adds `placement` prop.
- `n-slider` adds `placement` prop.
- `n-time-picker` adds `placement` prop.
- `n-tree-select` adds `placement` prop.
- `n-card` adds `header-extra-style` prop.
- `n-popover` adds `keep-alive-on-hover` prop, closes [#2326](https://github.com/TuSimple/naive-ui/issues/2326).
- `n-input` adds `status` prop.
- Add `n-icon-wrapper` component.
- `n-popover` exports `PopoverPlacement` type.
- `n-drawer` exports `DrawerPlacement` type.
- `n-dynamic-tags` adds `input-props` prop.
- `n-notification-provider` adds `container-style` prop.
- `n-notification-provider` exports `NotificationPlacement` type.
- `n-notification-provider` exports `NotificationType` type.
- `n-tabs` add `bar-width` prop.
- `n-dynamic-input` adds `create-button-props` props.
- `n-dynamic-input` adds `create-button-default` slot.
- `n-dynamic-input` adds `create-button-icon` slot.
- `n-dynamic-input` adds `show-sort-button` prop, closes [#2121](https://github.com/TuSimple/naive-ui/issues/2121).
- `n-select` can be used as tag input.
- `n-select` exports `SelectRenderLabel` type.
- `n-select` exports `SelectRenderOption` type.
- `n-select` exports `SelectRenderTag` type.
- `n-tree` adds `node-props` prop.

## 2.24.7 (2022-01-28)

### Fixes

- `n-popselect` doesn't work with `width="trigger"`.

### i18n

- Update jaJP locale.
- Update deDE locale.

## 2.24.6 (2022-01-26)

### Feats

- `n-icon` add `component` prop.

### Fixes

- Fix `n-dynamic-input` can add item when max is 0, closes [#2271](https://github.com/TuSimple/naive-ui/issues/2271).
- Fix `n-dialog` useless `console.log`.

## 2.24.5 (2022-01-25)

### Fixes

- `n-input` placeholder has no line-wrap in `textarea` type.
- `n-date-picker` lacks space between panel year & month.

### Feats

- `n-color-picker` adds `disabled` prop.
- `n-date-picker` adds trigger area for year & month quick jump.

## 2.24.4 (2022-01-24)

### Fixes

- Update vueuc version.

## 2.24.3 (2022-01-24)

### Fixes

- Fix `n-layout-sider` has no border transition.

## 2.24.2 (2022-01-24)

### Fixes

- Fix `n-layout-sider` still occupies 1px after collapsed.
- Fix `n-code` doesn't break word when `word-wrap=true`.
- Fix `n-tab-pane`'s tab label area inherits `attrs`, closes [#2221](https://github.com/TuSimple/naive-ui/issues/2221).
- Fix `n-image` preview popup background can still be scrolled, closes [#2241](https://github.com/TuSimple/naive-ui/issues/2241).
- Fix `n-input` shows placeholder when browser auto completes it, closes [#2234](https://github.com/TuSimple/naive-ui/issues/2234).
- Fix `n-input` placeholder word break issue with `type="textarea"`.
- Fix `n-avatar-group` extra count not correct after `max` is set, closes [#2244](https://github.com/TuSimple/naive-ui/issues/2244).
- Fix `n-calendar` doesn't trigger `on-panel-change` on today button clicked.
- Fix `n-drawer` can't be closed by esc key when `mask-closable=false`, closes [#2233](https://github.com/TuSimple/naive-ui/issues/2233).

### Feats

- `n-page-header` adds `back` slot, closes [#2176](https://github.com/TuSimple/naive-ui/issues/2176).
- `n-select` adds `reset-menu-on-options-change` prop, closes [#2168](https://github.com/TuSimple/naive-ui/issues/2168).
- `n-select` adds `arrow` slot, closes [#2201](https://github.com/TuSimple/naive-ui/issues/2201).
- `n-carousel` effect supports `'card'`.
- `n-input` doesn't use native scrollbar when `type="textarea"`, closes [#2242](https://github.com/TuSimple/naive-ui/issues/2242), [#1172](https://github.com/TuSimple/naive-ui/issues/1172).
- `n-number-animation` add `locale` prop, closes [#2181](https://github.com/TuSimple/naive-ui/issues/2181).
- `n-number-animation`'s locale follows config provider.
- Expose `lightTheme`.
- `n-time-picker` adds `icon` slot, closes [#2228](https://github.com/TuSimple/naive-ui/issues/2228).
- `n-tab-pane` adds `tab-props` prop, closes [#2221](https://github.com/TuSimple/naive-ui/issues/2221).
- Add `CustomThemeCommonVars` to customize `useThemeVars`.
- `n-slider` adds `show-tooltip` prop, closes [#2212](https://github.com/TuSimple/naive-ui/issues/2212).
- `n-select` adds `on-update:show` prop.
- `n-select` adds `focus` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-select` adds `blur` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-date-picker` adds `focus` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-date-picker` adds `blur` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-time-picker` adds `focus` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-time-picker` adds `blur` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-checkbox` adds `focus` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-checkbox` adds `blur` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-cascader` adds `focus` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-cascader` adds `blur` method, closes [#2202](https://github.com/TuSimple/naive-ui/issues/2202).
- `n-upload` adds `input-props` prop, closes [#2204](https://github.com/TuSimple/naive-ui/issues/2204).
- `n-data-table` col adds `render-sorter-icon` prop, closes [#1785](https://github.com/TuSimple/naive-ui/issues/1785).
- `n-data-table` col adds `render-sorter` prop, closes [#1785](https://github.com/TuSimple/naive-ui/issues/1785).
- `n-date-picker` easy navigation to specific month and year for `date` and `datetime` and `daterange` and `datetimerange` type.
- `n-modal` adds `close-on-esc` prop.
- `n-modal` adds `auto-focus` prop.
- `n-modal` adds `trap-focus` prop.
- `n-modal` adds `on-esc` prop.
- `n-drawer` adds `close-on-esc` prop.
- `n-drawer` adds `auto-focus` prop.
- `n-drawer` adds `trap-focus` prop.
- `n-drawer` adds `on-esc` prop.
- `n-upload` adds `clear` method, closes [#2247](https://github.com/TuSimple/naive-ui/issues/2247).
- Add volar types.

### i18n

- Add esAR locale.
- Add itIT locale.

## 2.24.1 (2022-01-12)

### Fixes

- Fix install error.

## 2.24.0 (2022-01-12)

### Breaking Changes

- Fix `type PageHeaderProps` name. It was mispelled as `PageHeaderPorps` before.
- `n-image`'s `iconColor` theme variable is renamed as `toolbarIconColor`.

### Fixes

- Fix `n-carousel` when Carousel is a single picture dot still existence, closes [#1777](https://github.com/TuSimple/naive-ui/issues/1777).
- Fix `n-upload` `on-finish` prop's `event` parameter type should be `ProgressEvent`.
- Fix `n-upload` doesn't allow 2xx status code except 200.
- Fix `n-form` when `validate` use `validateCallback`, cannot call Promise method.
- Fix `n-input-number` input integer end with 0 cannot update, closes [#2115](https://github.com/TuSimple/naive-ui/issues/2115).
- Fix `n-back-top` allow document to be passed to `listen-to` prop.
- Fix `n-data-table`'s content can be clicked when loading, closes [#2134](https://github.com/TuSimple/naive-ui/issues/2134).
- Fix `n-checkbox` doesn't show indeterminate icon in safari.
- Fix `n-progress`'s inner text of `line` type not aligned in center, closes[#2138](https://github.com/TuSimple/naive-ui/issues/2138).
- Fix `n-message`'s `MessageReactive` type lacks `type` parameter.
- Fix `n-select` has different `padding` with `n-input`, closes [#2149](https://github.com/TuSimple/naive-ui/issues/2149).
- Fix `n-tooltip` log errors in console when used in `n-select`'s `render-option`, closes [#1436](https://github.com/TuSimple/naive-ui/issues/1436).
- Fix `n-select` log ResizeObserver errors when using `render-option` in safari, closes [#1671](https://github.com/TuSimple/naive-ui/issues/1671).
- Fix `n-carousel` can't respond quickly and repeatedly on touch, closes [#1892](https://github.com/TuSimple/naive-ui/issues/1892).
- Fix `n-carousel` style of boundary, closes [#1866](https://github.com/TuSimple/naive-ui/issues/1866).
- Fix `n-carousel` cannot be clicked on the touchscreen, closes [#1882](https://github.com/TuSimple/naive-ui/issues/1882).
- Fix `n-color-picker` default mode can only be rgb is default value is empty.

### Feats

- `n-code` adds `word-wrap` prop, closes [#2111](https://github.com/TuSimple/naive-ui/issues/2111).
- `n-modal` adds `z-index` prop, closes [#2088](https://github.com/TuSimple/naive-ui/issues/2088).
- `n-drawer` adds `z-index` closes.
- `n-drawer` adds wai-aria support.
- `useMessage`'s option support `render` prop.
- `n-data-table` `TableColumn` supports `string` typed `width`, closes [#2102](https://github.com/TuSimple/naive-ui/issues/2102).
- `n-calendar` adds `on-panel-change` prop, closes [#2082](https://github.com/TuSimple/naive-ui/issues/2082).
- `n-upload` adds `on-error` prop.
- `n-pagination` adds `label` slot.
- `n-tabs` adds `syncBarPosition` method, closes [#2120](https://github.com/TuSimple/naive-ui/issues/2120).
- `n-form`, `n-form-item`'s `label-width` prop support `auto` option, closes [#2087](https://github.com/TuSimple/naive-ui/issues/2087).
- `n-result` adds `icon` slot, closes [#2130](https://github.com/TuSimple/naive-ui/issues/2130).
- `n-date-picker` adds `value-format` prop, closes [#2076](https://github.com/TuSimple/naive-ui/issues/2076).
- `n-date-picker` adds `formatted-value` prop.
- `n-date-picker` adds `default-formatted-value` prop.
- `n-date-picker` adds `on-update:formatted-value` prop.
- `n-date-picker`'s `on-update:value` prop will pass formatted value out.
- `n-image` adds `show-toolbar-tooltip` prop.
- `n-image` adds more theme variables, closes [#1531](https://github.com/TuSimple/naive-ui/issues/1531).
- `n-upload` adds `image-group-props` prop.
- `n-progress` adds `offset-degree` prop, closes [#2010](https://github.com/TuSimple/naive-ui/issues/2010).
- `n-form-item` adds `feedback` slot, closes [#1142](https://github.com/TuSimple/naive-ui/issues/1142).
- `n-form-item`'s `require-mark-placement` prop adds `'right-hanging'` option, closes [#2094](https://github.com/TuSimple/naive-ui/issues/2094).
- `n-cascader` adds `render-label` prop, closes [#2048](https://github.com/TuSimple/naive-ui/issues/2048).
- `n-auto-complete` adds `render-option` prop, closes [#1629](https://github.com/TuSimple/naive-ui/issues/1629).
- `n-auto-complete` adds `render-label` prop, closes [#1629](https://github.com/TuSimple/naive-ui/issues/1629).
- `n-tree` adds `render-switcher-icon` prop, closes [#1551](https://github.com/TuSimple/naive-ui/issues/1551).
- `n-message` exports `MessageType` type.
- `n-time-picker` adds `value-format` prop.
- `n-time-picker` adds `formatted-value` prop.
- `n-time-picker` adds `on-update:formatted-value` prop.
- `n-time-picker` adds `default-formatted-value` prop.
- `n-carousel` adds `default-index` prop.
- `n-carousel` adds `current-index` prop.
- `n-carousel` adds `show-arrow` prop.
- `n-carousel` adds `dot-type` prop, closes [#1931](https://github.com/TuSimple/naive-ui/issues/1931).
- `n-carousel` adds `dot-placement` prop, closes [#1462](https://github.com/TuSimple/naive-ui/issues/1462).
- `n-carousel` adds `slides-per-view` prop.
- `n-carousel` adds `space-between` prop.
- `n-carousel` adds `centered-slides` prop.
- `n-carousel` adds `direction` prop, closes [#1931](https://github.com/TuSimple/naive-ui/issues/1931).
- `n-carousel` adds `loop` prop.
- `n-carousel` adds `effect` prop, closes [#1159](https://github.com/TuSimple/naive-ui/issues/1159).
- `n-carousel` adds `transition-props` prop, closes [#1159](https://github.com/TuSimple/naive-ui/issues/1159).
- `n-carousel` adds `transition-style` prop, closes [#1159](https://github.com/TuSimple/naive-ui/issues/1159).
- `n-carousel` adds `draggable` prop.
- `n-carousel` adds `touchable` prop.
- `n-carousel` adds `mousewheel` prop.
- `n-carousel` adds `keyboard` prop.
- `n-carousel` adds `show-dots` prop.
- `n-carousel` adds `on-update:current-index` prop.
- `n-carousel` adds `arrow` slot.
- `n-carousel` adds `dots` slot.
- `n-form-item` adds `for` prop.
- `n-color-picker` adds `label` slot.
- `n-color-picker` adds `render-label` prop.
- `n-form-item` adds `label-props` prop.

## 2.23.2 (2021-12-29)

### Feats

- `<meta name="naive-ui-style" />` can be used to controll the component style's position.
- `n-empty` adds `show-icon` prop.
- `n-modal` adds a11y support, closes [#1877](https://github.com/TuSimple/naive-ui/issues/1877).
- Add `n-avatar-group` component.
- `n-input-number` supports `loading` state.
- Add `n-countdown` component.
- Add `n-number-animation` component, closes [#1465](https://github.com/TuSimple/naive-ui/issues/1465).
- `n-statistic` adds `tabular-nums` prop.
- `n-pagination` will give `itemCount` a approximate value derived from `pageSize` and `pageCount` if it's not set, closes [#2044](https://github.com/TuSimple/naive-ui/issues/2044).
- `n-cascader` adds `on-update:show` prop, closes [#2049](https://github.com/TuSimple/naive-ui/issues/2049).
- `n-scrollbar` uses `n` as CSS vars prefix.
- `n-popconfirm` uses `n` as CSS vars prefix.
- `n-gradient-text` uses `n` as CSS vars prefix.
- `n-form` uses `n` as CSS vars prefix.
- `n-pagination` uses `n` as CSS vars prefix.
- `n-loading-bar` uses `n` as CSS vars prefix.
- `n-empty` uses `n` as CSS vars prefix.
- `n-list` uses `n` as CSS vars prefix.
- `n-layout` uses `n` as CSS vars prefix.
- `n-message` uses `n` as CSS vars prefix.
- `n-mention` uses `n` as CSS vars prefix.
- `n-menu` uses `n` as CSS vars prefix.
- `n-popover` uses `n` as CSS vars prefix.
- `n-transfer` uses `n` as CSS vars prefix.
- `n-table` uses `n` as CSS vars prefix.
- `n-statistic` uses `n` as CSS vars prefix.
- `n-code` uses `n` as CSS vars prefix.
- `n-breadcrumb` uses `n` as CSS vars prefix.
- `n-slider` uses `n` as CSS vars prefix.
- `n-spin` uses `n` as CSS vars prefix.
- `n-select` uses `n` as CSS vars prefix.
- `n-result` uses `n` as CSS vars prefix.
- `n-calendar` uses `n` as CSS vars prefix.
- `n-card` uses `n` as CSS vars prefix.
- `n-cascader` uses `n` as CSS vars prefix.
- `n-color-picker` uses `n` as CSS vars prefix.
- `n-checkbox` uses `n` as CSS vars prefix.
- `n-data-table` uses `n` as CSS vars prefix.
- `n-date-picker` uses `n` as CSS vars prefix.
- `n-descriptions` uses `n` as CSS vars prefix.
- `n-drawer` uses `n` as CSS vars prefix.
- `n-dropdown` uses `n` as CSS vars prefix.
- `n-rate` uses `n` as CSS vars prefix.
- `n-radio` uses `n` as CSS vars prefix.
- `n-progress` uses `n` as CSS vars prefix.
- `n-skeleton` uses `n` as CSS vars prefix.
- `n-collapse` uses `n` as CSS vars prefix.
- `n-collapse-transition` uses `n` as CSS vars prefix.
- `n-thing` uses `n` as CSS vars prefix.
- `n-carousel` uses `n` as CSS vars prefix.
- `n-page-header` uses `n` as CSS vars prefix.
- `n-image` uses `n` as CSS vars prefix.
- `n-input` uses `n` as CSS vars prefix.
- `n-icon` uses `n` as CSS vars prefix.
- `n-modal` uses `n` as CSS vars prefix.
- `n-notification` uses `n` as CSS vars prefix.

### Fixes

- Fix `n-form-item-gi` 's `validate` doesn't work, closes [#1901](https://github.com/TuSimple/naive-ui/issues/1901).
- Fix `n-card` action's border-radius style.
- Fix `n-code`'s content is repeatly appended if language is not set, closes [#2034](https://github.com/TuSimple/naive-ui/issues/2034).
- Fix `n-tabs`'s `tabTextColorActiveSegment` and `tabTextColorHoverSegment` theme variables not working, closes [#2038](https://github.com/TuSimple/naive-ui/issues/2038).
- Fix `n-image` may keep keyboard handler after mounted.
- Fix `n-image` can't exit preview after esc is pressed when there's only 1 image, closes [#2042](https://github.com/TuSimple/naive-ui/issues/2042).
- Fix `n-drawer-content`'s content doesn't scroll by default, ref [#2003](https://github.com/TuSimple/naive-ui/issues/2003).
- Fix `n-popover` log warnings to console when manually set same zindex on multile instances and closes them, closes [#2050](https://github.com/TuSimple/naive-ui/issues/2050).
- Fix `n-transfer` has no scrollbar in virtual scroll mode.
- Fix `n-input-number` cannot input decimals end with 0.

## 2.23.1 (2021-12-20)

### Fixes

- Fix `n-transfer` list doesn't follow container height when style.height is set, closes [#1879](https://github.com/TuSimple/naive-ui/issues/1879).
- Fix `n-skeleton` & `n-gradient-text` cause runtime error in some old browsers, closes [#1867](https://github.com/TuSimple/naive-ui/issues/1867).
- Fix `n-data-table` `ellipsis` prop in column doesn't support all `n-ellipsis`'s props, closes [#1891](https://github.com/TuSimple/naive-ui/issues/1891).
- Fix `n-form`'s `blankHeightXxx` theme var doesn't follow `common.heightXxx`, closes [#1880](https://github.com/TuSimple/naive-ui/issues/1880).
- Fix `n-date-picker`'s panel doesn't use `dateFormat` in locale, closes [#1793](https://github.com/TuSimple/naive-ui/issues/1793).
- Fix `n-log` text color transition in theme switching.

### Feats

- `n-back-top` uses `n` as CSS vars prefix.
- `n-steps` uses `n` as CSS vars prefix.
- `n-switch` uses `n` as CSS vars prefix.
- `n-auto-complete` uses `n` as CSS vars prefix.
- `n-log` uses `n` as CSS vars prefix.
- `n-timeline` uses `n` as CSS vars prefix.
- `n-time-picker` uses `n` as CSS vars prefix.
- `n-avatar` uses `n` as CSS vars prefix.
- `n-dynamic-tags` uses `n` as CSS vars prefix.
- `n-tag` uses `n` as CSS vars prefix.
- `n-dialog` uses `n` as CSS vars prefix.
- `n-upload` uses `n` as CSS vars prefix.
- `n-tree` uses `n` as CSS vars prefix.
- `n-tree-select` uses `n` as CSS vars prefix.

## 2.23.0 (2021-12-17)

### Breaking Changes

- `n-switch` can no longer be clicked under `loading` status, closes [#1853](https://github.com/TuSimple/naive-ui/issues/1853).

### Fixes

- Fix `n-data-table` 's horizontal scrollbar disappears when max-height is not set, closes [#1857](https://github.com/TuSimple/naive-ui/issues/1857).
- Fix `n-input-number` cannot input negative decimals value, closes [#1858](https://github.com/TuSimple/naive-ui/issues/1858).
- Fix `n-dialog` open new dialog again when pressing `enter` key, closes [#1559](https://github.com/TuSimple/naive-ui/issues/1559).

### Feats

- `n-divider` uses `n` as CSS vars prefix.
- `typography` uses `n` as CSS vars prefix.
- `n-badge` uses `n` as CSS vars prefix.

## 2.22.0 (2021-12-15)

### Breaking Changes

- `n-button` can no longer be clicked under `loading` status, closes [#1628](https://github.com/TuSimple/naive-ui/issues/1628).

### Fixes

- Fix `n-alert`'s `header` slot unable to display normally.
- Fix `n-data-table`'s pagination `onUpdatePageSize` prop does't trigger, closes [#1774](https://github.com/TuSimple/naive-ui/issues/1774).
- Fix `n-data-table` can select rows when table is loading, closes [#1812](https://github.com/TuSimple/naive-ui/issues/1812).
- Fix `n-tag` line-height is too low that clamps the content.
- Fix `n-select` displays with mistake in input if `filterable` is `true`, closes [#1823](https://github.com/TuSimple/naive-ui/issues/1823).
- Fix `n-page-header`'s content has margin-top when header is not displayed, closes [#1795](https://github.com/TuSimple/naive-ui/issues/1795).
- Fix `n-avatar` `color` prop not working.
- Fix `n-avatar`'s inner icon has wrong size.
- Fix `n-image` lacks scoped style's scope-id, closes [#1788](https://github.com/TuSimple/naive-ui/issues/1788).
- Fix `n-radio` click event will be triggered twice, closes [#1680](https://github.com/TuSimple/naive-ui/issues/1680).
- Fix `n-data-table` layout display incorrect when the table is empty and min-height set, closes [#1809](https://github.com/TuSimple/naive-ui/issues/1809).
- Fix `n-data-table`'s summary has hover style.
- Fix `n-data-table` fixed group column box-shadow error and right fixed column order error, closes [#1832](https://github.com/TuSimple/naive-ui/issues/1832).
- Fix `n-anchor`'s hover & active style.
- Fix `n-data-table`'s header fixed column style on data is empty.

### Feats

- `n-tree-select` adds `menu-props` prop.
- `n-tree-select` adds `action` slot, closes [#1765](https://github.com/TuSimple/naive-ui/issues/1765).
- `n-tree-select` adds `empty` slot.
- `n-cascader` adds `empty` slot.
- `n-popselect` adds `action` slot.
- `n-popselect` adds `empty` slot.
- `n-data-table` will check all if indeterminate header checkbox is clicked, closes [#1827](https://github.com/TuSimple/naive-ui/issues/1827).
- `n-button` uses `n` as CSS vars prefix, closes [#1808](https://github.com/TuSimple/naive-ui/issues/1808).
- `n-date-picker` adds `default-time` prop.
- `n-alert` uses `n` as CSS vars prefix.
- `n-date-picker`'s `type` prop support `quarter` option.
- `n-anchor` uses `n` as CSS vars prefix.

### i18n

- Add zhTW locale.

## 2.21.5 (2021-12-07)

### Fixes

- Fix `n-input` click clear icon does't trigger `change` event, closes [#1754](https://github.com/TuSimple/naive-ui/issues/1754).
- Fix `n-input-number` the cursor moves when press arrow keys to change value, closes [#1759](https://github.com/TuSimple/naive-ui/issues/1759).

### Feats

- `n-date-picker`'s default format follows i18n.

### i18n

- Add frFR locale.

## 2.21.4 (2021-12-06)

### Fixes

- Fix `n-date-picker` has no placeholder when `type` is `year`.
- Fix `n-element` doesn't export `NEl` alias name.
- Fix `n-upload` still shows upload trigger when max limit is reached in `image-card` mode, closes [#1744](https://github.com/TuSimple/naive-ui/issues/1744).
- Fix `n-form`'s `FormValidate` type lacks `shouldRuleBeApplied` parameter, closes [#1747](https://github.com/TuSimple/naive-ui/issues/1747).
- Fix `n-upload` is displayed vertically in `n-form` in `image-card` mode, closes [#1746](https://github.com/TuSimple/naive-ui/issues/1746).
- Fix `n-upload`'s file list's top margin if trigger is hidden.
- Fix `n-upload` shows normal file status when response has 4xx status, closes [#1741](https://github.com/TuSimple/naive-ui/issues/1741).

### Feats

- `n-upload` adds `show-trigger` prop.
- `n-data-table` will ignore `children` with length 0 in tree data mode, closes [#1703](https://github.com/TuSimple/naive-ui/issues/1703).

## 2.21.3 (2021-12-03)

### Fixes

- Fix `n-theme-editor` throw error when click button component, closes [#1708](https://github.com/TuSimple/naive-ui/issues/1708).
- Fix `n-input`'s color is abnormal in Android WeChat, closes [#1705](https://github.com/TuSimple/naive-ui/issues/1705).
- Fix `n-input` 's `borderHover` theme variable doesn't work, closes [#1704](https://github.com/TuSimple/naive-ui/issues/1704).
- Fix `n-dialog`'s `content` word-break.
- Fix `n-input-number` cannot input decimals value.
- Fix `n-data-table`'s header & body may have wrong border radius, closes [#1712](https://github.com/TuSimple/naive-ui/issues/1712).
- Fix `n-button`'s `colorOpacityXxx` theme vars are not string typed.

### Feats

- `n-switch` adds `rail-style` prop, closes [#1718](https://github.com/TuSimple/naive-ui/issues/1718).
- `n-image` adds `preview-disabled` props, closes [#1647](https://github.com/TuSimple/naive-ui/issues/1647).
- `n-image` adds `on-load` & `on-error` prop.
- `n-image` adds `fallback-src` prop.
- `n-data-table` adds `on-update:expanded-row-keys` prop.
- `n-tree` adds `watch-props` prop.

## 2.21.2 (2021-11-29)

### Fixes

- Fix `n-slider` disabled tooltip at the wrong time.
- Fix `n-slider` incorrect fill color style, closes [#1670](https://github.com/TuSimple/naive-ui/issues/1670).
- Fix `n-data-table`'s pagination `onUpdatePage` prop trigger twice, closes [#1666](https://github.com/TuSimple/naive-ui/issues/1666).
- Fix `n-log`'s `trim` prop not being independent when used.
- Fix `n-slider` processing of step value precision.
- Fix `n-date-picker` throw error when `time-picker` input is empty, closes [#1678](https://github.com/TuSimple/naive-ui/issues/1678).
- Fix `n-popover` not working when `trigger` is `focus`.
- Fix `n-scrollbar`'s scrollbar will vanish if clicked.
- Fix `n-popover` has an invalid line in style.
- Fix `n-popover` `flip=false` doesn't work.
- Fix `n-input-number` can't accept indeterminate input value when `max` or `min` is set, closes [#1664](https://github.com/TuSimple/naive-ui/issues/1664).
- Fix `n-input-number`'s input value is not changed to a valid value if it's input exceeds min or max multiple times.

### Feats

- `n-input-number` adds `keyboard` prop.
- Add `tableColorStriped` theme variable, closes [#1686](https://github.com/TuSimple/naive-ui/issues/1686).
- `n-notification-provider` adds `max` & `placement` prop.
- `n-notification` adds `destroyAll` method, closes [#333](https://github.com/TuSimple/naive-ui/issues/333).
- `n-layout-sider` adds `on-after-enter` and `on-after-leave` props, closes [#1241](https://github.com/TuSimple/naive-ui/issues/1241).
- `n-upload` adds `custom-request` prop, closes [#1389](https://github.com/TuSimple/naive-ui/issues/1389).
- `n-data-table` adds `expanded-row-keys` prop.
- `n-popover` provides better auto position adjustment, closes [#1520](https://github.com/TuSimple/naive-ui/issues/1520), [#1643](https://github.com/TuSimple/naive-ui/issues/1643).
- `n-input-number` adds `update-value-on-input` prop, closes [#1662](https://github.com/TuSimple/naive-ui/issues/1662).
- `n-auto-complete` adds `prefix` & `suffix` slot.

## 2.21.1 (2021-11-23)

### Fixes

- Fix `n-image` drag the picture to move the position incorrectly when the zoom is large.
- Fix `n-data-table` style glitches after some rows are expanded.
- Fix `n-data-table` doesn't expand tree data correctly, closes [#1644](https://github.com/TuSimple/naive-ui/issues/1644).

## 2.21.0 (2021-11-21)

### Breaking Changes

- `NButton.fontWeightText` & `NButton.fontWeightGhost` theme vars are removed. If you want to change font weight, you can use `strong` prop of `n-button` instead.

### Feats

- `n-tag` adds `avatar` slot.
- `n-data-table` adds `striped` prop, closes [#1552](https://github.com/TuSimple/naive-ui/issues/1552).
- `n-table` adds `striped` prop, closes [#1552](https://github.com/TuSimple/naive-ui/issues/1552).
- `n-slider` adds `vertical` prop, closes [#1468](https://github.com/TuSimple/naive-ui/issues/1468).
- `n-slider` adds `reverse` prop.
- `n-slider`'s `step` prop support `mark` option.
- Bypass Vitejs bug on string extrapolation, ref [#636](https://github.com/TuSimple/naive-ui/issues/636).
- `n-button` adds `strong` prop.
- `n-button` adds `secondary` prop.
- `n-button` adds `tertiary` prop.
- `n-button` adds `quaternary` prop.
- `n-auto-complete` adds `input-props` prop, closes [#1610](https://github.com/TuSimple/naive-ui/issues/1610).
- `n-avatar` adds `fallback-src` prop, closes [#702](https://github.com/TuSimple/naive-ui/issues/702).
- `n-avatar` adds `on-error` prop.
- `n-input` adds `select` methods, closes [#1328](https://github.com/TuSimple/naive-ui/issues/1328).
- Add `n-tab` component, closes [#1630](https://github.com/TuSimple/naive-ui/issues/1630).
- `n-switch` adds `round` prop, closes [#1469](https://github.com/TuSimple/naive-ui/issues/1469).
- `n-step` adds `title` slot.
- `n-menu` support `divider` type option.

### Fixes

- Fix the default value of the `suffix` internal component's `loading` property.
- Fix `n-space` is shown when it has no children, closes [#1605](https://github.com/TuSimple/naive-ui/issues/1605).
- Fix `n-radio` has no `onUpdateChecked` prop.
- Fix `n-dropdown` animation flicker problem, closes [#1600](https://github.com/TuSimple/naive-ui/issues/1600).
- Fix `n-data-table`’s `clearSorter` method isn't exported properly.
- Fix `n-global-style` throws error in SSR.
- Fix `n-button` will trigger click event twice if pressed, closes [#1626](https://github.com/TuSimple/naive-ui/issues/1626).

## 2.20.3 (2021-11-15)

### Fixes

- Fix `n-grid` suffix NGridItem does not set right span when collapsed, closes [#1530](https://github.com/TuSimple/naive-ui/issues/1530).
- Fix `n-button` to shrink abnormally in certain scenarios when using the `circle` prop, closes [#1557](https://github.com/TuSimple/naive-ui/issues/1557).
- Fix `input-props` does affect `type` prop, closes [#1553](https://github.com/TuSimple/naive-ui/issues/1553)

### Feats

- `n-menu` adds a color distinction between selected and unselected arrow, closes [#1535](https://github.com/TuSimple/naive-ui/issues/1535).
- `n-menu` adds `watch-props` prop, closes [#1536](https://github.com/TuSimple/naive-ui/issues/1536).
- `n-date-picker`'s `type` prop support `year` option.

### i18n

- Add `createLocale` to make locale customizable, closes [#1525](https://github.com/TuSimple/naive-ui/issues/1525).

## 2.20.2 (2021-11-05)

### Feats

- `n-modal` adds `transform-origin` prop, closes [#1498](https://github.com/TuSimple/naive-ui/issues/1498).
- `n-tabs` adds `pane-class` prop, closes [#1500](https://github.com/TuSimple/naive-ui/issues/1500).

### Fixes

- Fix `n-alert` `contentTextColor` and `titleTextColor` type theme variable not working, closes [#1495](https://github.com/TuSimple/naive-ui/issues/1495).
- Fix `n-time-picker` not trigger blur event when the panel is closed by ok button, closes [#1499](https://github.com/TuSimple/naive-ui/issues/1499).
- Fix `n-upload` `UploadFileInfo`'s `thumbnailUrl` field not working, closes [#1495](https://github.com/TuSimple/naive-ui/issues/1245).
- Fix `n-button` `keyboard` prop does not work, closes [#1508](https://github.com/TuSimple/naive-ui/issues/1508).
- Fix `n-upload` instance misses `openOpenFileDialog` method.

### i18n

- Add deDE locale.
- Add nbNO locale.

## 2.20.1 (2021-11-01)

### Fixes

- Fix `n-tabs` switch tab does not work when adding a new tab, closes [#1417](https://github.com/TuSimple/naive-ui/issues/1417).
- Fix `n-tree`'s `filter` prop does not work when assigned `children-field` , closes [#1477](https://github.com/TuSimple/naive-ui/issues/1477).
- Fix `n-cascader` can't remove options when using customized fields in multiple mode.
- Fix `n-select`'s option created by `on-create` doesn't show correct label in trigger, closes [#1482](https://github.com/TuSimple/naive-ui/issues/1482)
- Fix `n-select` menu height shifts on close in `filterable` mode.

### Feats

- `n-select` adds `menu-props` prop, closes [#1475](https://github.com/TuSimple/naive-ui/issues/1475).
- `n-image`'s `toolbar` adds close icon, closes [#1412](https://github.com/TuSimple/naive-ui/issues/1412).
- `n-tree`'s `on-load` prop is triggered when the `expanded-keys` prop changes in `remote` mode, closes [#1339](https://github.com/TuSimple/naive-ui/issues/1339).

## 2.20.0 (2021-10-28)

### Breaking Changes

- `n-collapsed-transition`'s `collapsed` prop is deprecated, please use `show` instead, closes [#1407](https://github.com/TuSimple/naive-ui/issues/1407).

### Fixes

- Fix `n-log` `font-size` prop not working, closes [#1416](https://github.com/TuSimple/naive-ui/issues/1416).
- Fix `n-loading-bar` will show once even if `start` is not called when `loading-bar-style` is set.
- Fix `n-date-picker` `separator` prop not working, closes [#1456](https://github.com/TuSimple/naive-ui/issues/1456)

### Feats

- `n-data-table` optimize the logic of underlying rendering and improve component performance.
- `n-date-picker`'s `shortcuts` prop supports functional value.
- `n-tab-pane`'s `display-directive` props supports the `show:lazy` option, closes [#1374](https://github.com/TuSimple/naive-ui/issues/1374).
- `n-input` of text type supports `count` slots, closes [#1440](https://github.com/TuSimple/naive-ui/issues/1440).

### i18n

- Add idID locale.

## 2.19.11 (2021-10-21)

### Fixes

- Fix `n-upload`'s file can't be removed when file count limit is reached, closes [#1401](https://github.com/TuSimple/naive-ui/issues/1401).

### Feats

- `n-tabs` adds `on-before-leave` prop, closes [#1337](https://github.com/TuSimple/naive-ui/issues/1337).
- `n-color-picker` adds `show-preview` prop, closes [#1281](https://github.com/TuSimple/naive-ui/issues/1281).
- `n-tab-pane`'s `display-directive` prop support `show:lazy` option, closes [#1374](https://github.com/TuSimple/naive-ui/issues/1374).

## 2.19.9 (2021-10-18)

### Fixes

- Fix `n-collapse`'s expanded status is lost when using `v-if` with `n-collapse-item`, closes [#1387](https://github.com/TuSimple/naive-ui/issues/1387).
- Fix `n-dialog`'s close button will be overlayed with content, closes [#1381](https://github.com/TuSimple/naive-ui/issues/1381).
- Fix `n-upload` file is set to `null` after upload failure, closes [#1316](https://github.com/TuSimple/naive-ui/issues/1316).
- Fix `n-cascader`'s `filter` prop not working.
- Fix `n-cascader`'s `label-field` prop breaks filter.
- Fix `n-cascader`'s `separator` prop isn't appiled to filter select menu.

### Feats

- `n-menu` adds `dropdown-props` prop, closes [#1345](https://github.com/TuSimple/naive-ui/issues/1345).
- `n-input` adds `count` slot, closes [#1314](https://github.com/TuSimple/naive-ui/issues/1314).
- `n-time-picker` adds `use-12-hours` prop, closes [#547](https://github.com/TuSimple/naive-ui/issues/547).
- `n-input-number` adds `focus` & `blur` methods.

## 2.19.8 (2021-10-14)

### Fixes

- Fix `n-data-table` fixed style does not work in group header table, closes [#1341](https://github.com/TuSimple/naive-ui/issues/1341).
- Fix `n-data-table` has duplicate right border when it has multiple level headers.
- Fix `n-scrollbar` doesn't support `scrollTo`, closes [#1346](https://github.com/TuSimple/naive-ui/issues/1346).
- Fix `n-ellipsis`'s `expand-trigger` prop not show `pointer` cursor when content is short when `tooltip = false`, closes [#1299](https://github.com/TuSimple/naive-ui/issues/1299).
- Fix `n-upload`'s `disabled` prop's style not working, closes [#1237](https://github.com/TuSimple/naive-ui/issues/1237).
- `n-config-provider` adds `breakpoints` prop, closes [#1379](https://github.com/TuSimple/naive-ui/issues/1379).

### Feats

- `n-auto-complete` adds `get-show` prop, closes [#1292](https://github.com/TuSimple/naive-ui/issues/1292).
- `n-select` adds `input-props` prop, closes [#1351](https://github.com/TuSimple/naive-ui/issues/1351).
- `n-color-picker` adds `swatches` prop, ref [#1281](https://github.com/TuSimple/naive-ui/issues/1281).
- `n-upload` adds `max` prop.

### i18n

- Add jaJP locale.

## 2.19.7 (2021-10-12)

### Fixes

- Fix `n-ellipsis`'s `expand-trigger` prop not show `pointer` cursor when content is short, closes [#1299](https://github.com/TuSimple/naive-ui/issues/1299).
- Fix `n-select`'s `fallback-option` prop's type, closes [#1327](https://github.com/TuSimple/naive-ui/issues/1327).
- Fix `n-modal`'s `on-after-enter` prop not working.

## 2.19.6 (2021-10-10)

### Fixes

- Fix `n-menu`'s incorrect warning on `default-expanded-keys`.
- Fix `useThemeVars` is sometimes unusable, closes [#1309](https://github.com/TuSimple/naive-ui/issues/1309).
- Fix the `list-style` style of the `<ul>` element.

### Feats

- `n-cascader` provide all options paths in `update:value` callback function, closes [#1235](https://github.com/TuSimple/naive-ui/issues/1235).
- `n-layout` and `n-layout-sider` adds `on-scroll` prop, closes [#1232](https://github.com/TuSimple/naive-ui/issues/1232).

## 2.19.5 (2021-10-07)

### Fixes

- Fix `n-form-item`'s content is too long and the width is incorrect
- Fix `n-layout-sider`'s `arrow-circle`'s icon style.
- Fix `n-upload`'s `show-preview-button` prop not working, closes [#1238](https://github.com/TuSimple/naive-ui/issues/1238).
- Fix `n-date-picker`'s `date` type of `action` validate error.
- Fix `n-data-table` throws error when using `selection` and `summary` together, closes [#1276](https://github.com/TuSimple/naive-ui/issues/1276).
- Fix `n-data-table` selection column's width is collapsed when it is set to fixed, closes [#1283](https://github.com/TuSimple/naive-ui/issues/1283).
- Fix `n-popconfirm` can't be nested in `n-tooltip`, closes [#872](https://github.com/TuSimple/naive-ui/issues/872).
- Fix `n-popselect` checkmark overlays on option text, closes [#1282](https://github.com/TuSimple/naive-ui/issues/1282).
- Fix `n-pagination` `buttonColor` theme variable not working.

### Feats

- `n-breadcrumb-item` adds `href` prop.
- `n-descriptions` adds `separator` prop, closes [#1263](https://github.com/TuSimple/naive-ui/issues/1263).
- `n-dropdown` adds `key-field` prop.
- `n-dropdown` adds `label-field` prop.
- `n-dropdown` adds `children-field` prop.
- `n-menu` adds `key-field` prop.
- `n-menu` adds `label-field` prop.
- `n-menu` adds `children-field` prop.
- `n-data-table` supports using path of the property to get as column key, closes [#1271](https://github.com/TuSimple/naive-ui/issues/1271).
- `n-switch` adds `checked-value` prop, closes [#1234](https://github.com/TuSimple/naive-ui/issues/1234).
- `n-switch` adds `unchecked-value` prop, closes [#1234](https://github.com/TuSimple/naive-ui/issues/1234).
- `n-checkbox` adds `checked-value` prop, closes [#1234](https://github.com/TuSimple/naive-ui/issues/1234).
- `n-checkbox` adds `unchecked-value` prop, closes [#1234](https://github.com/TuSimple/naive-ui/issues/1234).
- Add `n-collapse-transition` component, closes [#829](https://github.com/TuSimple/naive-ui/issues/829).
- Add `n-scrollbar` component.
- `n-dropdown` support options with `type='render'`.
- `n-data-table` supports multiple column sorting.
- `n-date-picker` adds `first-day-of-week` prop.
- `n-date-picker`'s `type` prop support `month` option.
- `n-popover` adds `to` prop.
- `n-tree`'s `on-update:indeterminateKeys` prop adds option info.
- `n-tree`'s `on-update:expandedKeys` prop adds option info.
- `n-tree`'s `on-update:checkedKeys` prop adds option info.
- `n-tree`'s `on-update:selectedKeys` prop adds option info.

## 2.19.3 (2021-09-28)

### Fixes

- Fix `n-data-table` ellipsis not show when last column not set ellipsis, closes [#934](https://github.com/TuSimple/naive-ui/issues/934).
- Fix `n-grid-item` won't work with responsive config.
- Fix `n-tabs`'s scroll shadow is not updated when it's resized, closes [#1224](https://github.com/TuSimple/naive-ui/issues/1224).

### Feats

- `n-grid-item` won't display when `span` is 0, closes [#1220](https://github.com/TuSimple/naive-ui/issues/1220).
- `n-grid` adds `item-responsive` prop.

## 2.19.2 (2021-09-26)

### i18n

- Add ukUA locale.

### Fixes

- Fix `n-global-style` applies style transition on first mount.
- Fix `n-drawer` border transition, closes [#1211](https://github.com/TuSimple/naive-ui/issues/1211).
- Fix `n-input-number`'s `value` prop can't be `null` type.
- Fix components with rtl support throws error in SSR.
- Fix components with popover throws error in SSR.
- Fix global theme overrides not working for `n-select` trigger, closes [#1229](https://github.com/TuSimple/naive-ui/issues/1229).

### Feats

- `n-checkbox` adds aria support.
- `n-alert` aria support.

## 2.19.1 (2021-09-21)

### Fixes

- Fix `DialogReactive` props are readonly.
- Fix `n-tree-select` sets `check-strategy='child'` not working in single select mode.
- Fix `n-upload`'s trigger is compressed in `image-card` mode when it's the only item in the row.
- Fix `n-upload-dragger` has no border transition.
- Fix `n-upload` can't upload files.
- Fix `n-tree`'s `checkable` prop doesn't work when `cascade` is `false`.
- Fix `n-tree-select`'s `checkable` prop doesn't work when `cascade` or `multiple` is `false`.

## 2.19.0 (2021-09-19)

### Breaking Changes

- `n-layout-sider`'s `arrow-circle` trigger is changed into new style.

### Feats

- `n-layout-sider` adds `collapsed-trigger-style` prop.
- `n-menu` adds `accordion` prop , closes [#917](https://github.com/TuSimple/naive-ui/issues/917).
- `n-input-number` adds `readonly` prop , closes [#1198](https://github.com/TuSimple/naive-ui/issues/1198).
- `n-spin` adds `description` prop and slot.
- `n-anchor` adds `type` prop.
- `n-upload` adds `abstract` prop, adds `n-upload-trigger` 和 `n-upload-file-list` component, closes [#1102](https://github.com/TuSimple/naive-ui/issues/1102).
- `n-tree` adds `indeterminate-keys` prop.
- `n-tree-select` adds `indeterminate-keys` prop.
- `n-tree` adds `on-update:indeterminate-keys` prop.
- `n-tree-select` adds `on-update:indeterminate-keys` prop.
- `n-tabs` `type` prop adds `'segment'` option, closes [#1133](https://github.com/TuSimple/naive-ui/issues/1133).
- `n-popover` adds `z-index` prop, closes [#764](https://github.com/TuSimple/naive-ui/issues/764).
- `n-modal` adds `on-after-enter` prop.
- `n-modal` adds `on-after-leave` prop.

### Fixes

- Fix `n-select` focus input when closing tag with `filterable` , closes [#1170](https://github.com/TuSimple/naive-ui/issues/1170).
- Fix `n-button` border on hover conflicts with `n-badge`, closes [#1195](https://github.com/TuSimple/naive-ui/issues/1195).
- Fix `n-upload` prop `v-model:file-list` dosen't work well when prop `multiple` is `true`, closes [#418](https://github.com/TuSimple/naive-ui/issues/418).
- Fix `useThemeVars` doesn't apply theme overrides, closes [#1194](https://github.com/TuSimple/naive-ui/issues/1194), [#1176](https://github.com/TuSimple/naive-ui/issues/1176).
- Fix `n-tabs`'s left shadow isn't displayed in card type.

## 2.18.2 (2021-09-14)

### Feats

- `n-cascader` show `Empty` component when `options` prop is empty, closes [#1092](https://github.com/TuSimple/naive-ui/issues/1092).
- `n-cascader`'s `on-update:value` prop adds option info.
- `n-tree` adds `check-strategy` prop.
- `n-date-picker` adds `input-readonly` prop, closes [#1120](https://github.com/TuSimple/naive-ui/issues/1120).
- `n-time-picker` adds `input-readonly` prop, closes [#1120](https://github.com/TuSimple/naive-ui/issues/1120).
- `n-config-provider` adds global config of the `Empty` component, closes [#1092](https://github.com/TuSimple/naive-ui/issues/1092).
- `n-select` adds `on-update:show` prop.
- `n-auto-complete` exports `AutoCompleteOption` and `AutoCompleteGroupOption` types.
- `n-page-header` adds `RTL` support.
- `n-select` support variadic height option rendering.
- `n-tree-select`'s `on-update:value` prop adds option info.
- `n-select`'s `on-update:value` prop adds option info.
- `n-popselect`'s `on-update:value` prop adds option info.
- `n-card` adds `embedded` prop.

### Fixes

- Fix `n-p` warns when `depth` is number.
- Fix `n-date-picker`‘s type of `actions` prop.
- Fix `n-select` can't override `n-empty`'s theme variables.
- Fix `n-dynamic-tags` adds button is not disabled when it is disabled.
- Fix `n-select` closes menu when enter key is pressed in filterable mode without options data.
- Fix `n-auto-complete`'s `children` prop can't use `AutoCompleteOption` type.
- Fix `n-gi`'s `collapsed` does not work in `n-form-item-gi`, closes [#1160](https://github.com/TuSimple/naive-ui/issues/1160).

## 2.18.1 (2021-09-08)

### Feats

- `useDialog` option adds `style` prop, closes [#1054](https://github.com/TuSimple/naive-ui/issues/1054).
- `n-timeline` adds `icon` slot, closes [#1096](https://github.com/TuSimple/naive-ui/issues/1096).
- `n-timeline` adds `icon-size` prop.

### Fixes

- Fix `n-step` doesn't work with `v-for` children.
- Fix `n-input-number` cannot enter decimals when `step` is not a decimal.

## 2.18.0 (2021-09-07)

### Breaking Changes

- `n-form` & `n-form-item` split `show-require-mark` into `show-require-mark` and `require-mark-placement`.

### Feats

- `n-drawer` adds `on-mask-click` prop.
- `n-for` adds `require-mark-placement` prop, closes [#1055](https://github.com/TuSimple/naive-ui/issues/1055).
- `n-form-item` adds `require-mark-placement` prop, closes [#1055](https://github.com/TuSimple/naive-ui/issues/1055).

### Fixes

- Fix `n-step` must be passed with `internal-index`.
- Fix `n-radio-group`'s `on-update:value` and `on-update-value` can't be array.
- Fix `n-cascader` `check-strategy="child"` doesn't behaves the same as previous `leaf-only`.

## 2.17.2 (2021-09-06)

### Fixes

- Fix `n-tree-select` shows key not label when `show-path=true`, closes [#1095](https://github.com/TuSimple/naive-ui/issues/1095).

## 2.17.1 (2021-09-06)

### Fixes

- Fix `n-cascader` menu not showing correct checked keys.

## 2.17.0 (2021-09-05)

### Breaking Changes

- `n-tree-select`'s `leaf-only` prop is deprecated, please use `check-strategy="child"` instead.
- `n-cascader`'s `leaf-only` prop is deprecated, please use `check-strategy="child"` instead.
- `n-input`'s `show-password-toggle` is deprecated, please use `show-password-on="click"` instead.

### Fixes

- Fix `n-cascader` click tag to delete the sub option in multi selection mode, and the tree option is not updated.
- Fix `n-input` chinese input method not correct while mouse leave the input in `clearable` is true, closes [#905](https://github.com/TuSimple/naive-ui/issues/905).
- Fix `n-description`'s warning caused by `v-if` that should not appear, closes [#1083](https://github.com/TuSimple/naive-ui/issues/1083).
- Fix `n-layout`'s `sider-placement` doesn't work after build, closes [#978](https://github.com/TuSimple/naive-ui/issues/978).
- Fix `n-input-number`'s `step` calculate error when the value is decimal, closes [#1007](https://github.com/TuSimple/naive-ui/issues/1007).
- Fix `n-popselect`' s default placement and padding.
- Fix `n-calendar`'s text color of disabled date.

### Feats

- `n-cascader` adds `onUpdateValue` prop.
- `n-auto-complete` adds `onUpdateValue` prop.
- `n-data-table`'s column's `renderFilterMenu` adds `hide` param.
- `n-tree` adds `key-field` prop.
- `n-tree` adds `label-field` prop.
- `n-tree` adds `children-field` prop.
- `n-tree-select` adds `key-field` prop.
- `n-tree-select` adds `label-field` prop.
- `n-tree-select` adds `children-field` prop.
- `n-cascader` adds `key-field` prop.
- `n-cascader`adds `label-field` prop.
- `n-cascader` adds `children-field` prop.
- `n-dropdown` option adds `props` prop, closes [#813](https://github.com/TuSimple/naive-ui/issues/813).
- `n-data-table` supports multi-selection by holding down `shift`, closes [#554](https://github.com/TuSimple/naive-ui/issues/554).
- `n-tree-select` adds `check-strategy` prop, closes [#624](https://github.com/TuSimple/naive-ui/issues/624).
- `n-cascader` adds `check-strategy` prop.
- `n-message` option adds `keepAliveOnHover`, closes [#1036](https://github.com/TuSimple/naive-ui/issues/1036).
- `n-message-provider` adds `keep-alive-on-hover` prop, closes [#1036](https://github.com/TuSimple/naive-ui/issues/1036).
- `n-upload` export `UploadFile` type.
- `n-cascader` export `CascaderOption` type.
- `n-mention` export `MentionOption` type.
- `n-transfer` export `TransferOption` type.
- `n-pagination` export `PaginationInfo` type.
- `n-data-table` export `DataTableCreateSummary` type.
- `n-code` adds `inline` prop, closes [#834](https://github.com/TuSimple/naive-ui/issues/834)
- `n-collapse` adds `header-extra` slot, closes [#1046](https://github.com/TuSimple/naive-ui/issues/1046).
- `n-input` adds `show-password-on` prop.
- `n-upload` adds `list-type`, `show-preview-button`, `on-preview` and `create-thumbnail-url` prop.

## 2.16.7 (2021-08-27)

### Feats

- `n-mention` adds `focus` and `blur` methods.

### Fixes

- Fix `n-mention`'s menu is too far from text in input mode.
- Fix `n-tree` node can not expanded.

## 2.16.6 (2021-08-26)

### Feats

- `n-timeline` adds `horizontal` prop, closes [#887](https://github.com/TuSimple/naive-ui/issues/887).
- `n-image` adds `preview-src` prop, closes [#922](https://github.com/TuSimple/naive-ui/issues/922)
- `n-dynamic-tags` adds `input` and `add` slot, closes [#499](https://github.com/TuSimple/naive-ui/issues/499).
- `n-timeline-item` adds `color` prop.

### Fixes

- Fix `n-image` not initializing `rotate` after switching images, closes [#921](https://github.com/TuSimple/naive-ui/issues/921).
- Fix `n-data-table`'s loading is not centered, closes [#929](https://github.com/TuSimple/naive-ui/issues/929).
- Fix `n-tree` throws an exception when onLoad callback does not adds children, closes [#772](https://github.com/TuSimple/naive-ui/issues/772).
- Fix `n-input` will show placeholder and 0 simultaneously while passing `value=ref(0)` in n-input, closes [#914](https://github.com/TuSimple/naive-ui/issues/914).
- Fix `n-data-table` `flex-height` not working without `scroll-x`, closes [#952](https://github.com/TuSimple/naive-ui/issues/952).

## 2.16.5 (2021-08-20)

### Feats

- `n-input-number` adds `clearable` prop.
- `n-form` adds `show-label` prop, closes [#858](https://github.com/TuSimple/naive-ui/issues/858).

### Fixes

- Fix `n-notification`'s exported `NotificationReactive` type is not writable, closes [#876](https://github.com/TuSimple/naive-ui/issues/876).
- Fix `n-tabs` style glitches when different types tabs are nested, closes [#850](https://github.com/TuSimple/naive-ui/issues/850).
- Fix `n-dropdown`'s inner link click trigger area is not the entire option, closes [#823](https://github.com/TuSimple/naive-ui/issues/823).
- Fix `n-popover` arrow's misplacement when placed in nested popovers with different placement, closes [#916](https://github.com/TuSimple/naive-ui/issues/916).
- Fix `n-ellpisis` doesn't work after content is updated, closes [#776](https://github.com/TuSimple/naive-ui/issues/776).

## 2.16.4 (2021-08-16)

### Fixes

- Fix ruRU locale exports.

## 2.16.3 (2021-08-16)

### i18n

- Add ruRU locale [#852](https://github.com/TuSimple/naive-ui/pull/852).

### Feats

- `n-message-provider` adds `container-style` prop.
- `n-message-provider` adds `placement` prop.
- `n-message` adds class to distinguish type.
- `n-date-picker` adds `shortcuts` props, closes [#280](https://github.com/TuSimple/naive-ui/issues/280).

### Fixes

- Fix `n-rate` half star overlays star background in dark mode.
- Fix `n-menu` renders unexpectly when `render-icon` returns `true`.
- Fix `n-space` render empty placeholder while use `v-if`, closes [#824](https://github.com/TuSimple/naive-ui/issues/824).

## 2.16.2 (2021-08-09)

### Feats

- `n-message-provider` adds `closable` prop, closes [#795](https://github.com/TuSimple/naive-ui/issues/795).
- `n-tree-select` adds `show-path` prop, closes[#625](https://github.com/TuSimple/naive-ui/issues/623).
- `n-layout` adds `sider-placement` prop, closes [#566](https://github.com/TuSimple/naive-ui/issues/566).

### Fixes

- Fix `n-avatar`'s scale value is incorrect while use v-show, closes [#779](https://github.com/TuSimple/naive-ui/issues/779).
- Fix `n-menu` show a blue background when click the menu on mobile phone, closes [#799](https://github.com/TuSimple/naive-ui/issues/799).
- Fix `n-select` filterable select breaks, closes [#510](https://github.com/TuSimple/naive-ui/issues/510).
- Fix `n-data-table` When selectAll is selected, the state display of selectAll should not contain disabled rows, closes [#778](https://github.com/TuSimple/naive-ui/issues/778).
- Fix `n-color-picker`'s `on-complete` callback's argument `value` is incorrect, closes [#748](https://github.com/TuSimple/naive-ui/issues/748).

## 2.16.1 (2021-08-06)

### Feats

- `n-loading-bar-provider` adds `loading-bar-style` props, closes [#457](https://github.com/TuSimple/naive-ui/issues/457).
- `n-button` adds `text-color` prop.
- `n-form` export `FormValidationError` type.
- `n-popconfirm` support not show action components, closes [#770](https://github.com/TuSimple/naive-ui/issues/770).

### Fixes

- Fix `n-slider` loss floating point decimal precision, closes [#751](https://github.com/TuSimple/naive-ui/issues/751).
- Fix `n-data-table` `onUpdatePage` and `onUpdatePageSize` not triggered while using jsx.
- Fix `n-progress`'s `percentage` prop default value doesn't work with different types.
- Fix `n-select` hide close icon when option is disabled.
- Fix `n-modal` can't be closed when using custom content, closes [#788](https://github.com/TuSimple/naive-ui/issues/788).

## 2.16.0 (2021-08-02)

### Breaking Changes

- `useLoadingBar`'s `finish` method won't work if no `start` is called.
- `n-input`'s `type='input'` is renamed to `type='text'`.

### Feats

- `n-scrollbar` adds `scrollbarWidth`, `scrollbarHeight` and `scrollbarBorderRadius` common theme variables, closes [#649](https://github.com/TuSimple/naive-ui/issues/649).
- `n-menu` doesn't should icon placeholder when `render-icon` returns falsy value, closes [#722](https://github.com/TuSimple/naive-ui/issues/722).
- `n-menu` adds `render-extra` prop.
- `n-select` adds `on-clear` prop.
- `n-form` adds `disabled` prop, closes [#538](https://github.com/TuSimple/naive-ui/issues/538).
- `n-dynamic-tags` adds `max` prop.

### Fixes

- Fix `n-dropdown` click exception when using v-for.
- Fix `n-modal` cannot customize classes when use preset, closes [#744](https://github.com/TuSimple/naive-ui/issues/744).
- Fix `n-cascader` menu width shifts in virtual scroll mode, closes [#728](https://github.com/TuSimple/naive-ui/issues/728).

## 2.15.11 (2021-07-29)

### Fixes

- Fix `n-data-table` pagination's error.

## 2.15.10 (2021-07-29)

### Feats

- `n-pagination` adds `prev` and `next` slots, ref [#648](https://github.com/TuSimple/naive-ui/issues/648).
- `n-tag` adds `color` prop, closes [#693](https://github.com/TuSimple/naive-ui/issues/693).
- `n-dynamic-tags` adds `color`, closes [#693](https://github.com/TuSimple/naive-ui/issues/693).
- `n-time-picker` optimization the now button logic, closes [#401](https://github.com/TuSimple/naive-ui/issues/401).
- `n-pagination` `PaginationInfo` adds `itemCount` prop, closes [#585](https://github.com/TuSimple/naive-ui/issues/585).
- `n-select` adds `on-clear` prop.

### Fixes

- Fix `n-message`'s `destroyAll` method doesn't work.
- Fix `n-timeline`'s header slot is invalid when using alone.
- Fix `n-select` incorrect style when props has `disabled` and `filterable`, closes [#698](https://github.com/TuSimple/naive-ui/issues/698).
- Fix `n-upload` operation buttons displayed when has `file-list` & `disabled` props, closes [#668](https://github.com/TuSimple/naive-ui/issues/668).

## 2.15.9 (2021-07-28)

### Feats

- `n-message` adds `destroyAll` method.
- `n-input-number` adds `prefix`, `suffix` slots, closes [#609](https://github.com/TuSimple/naive-ui/issues/609).

### Fixes

- Fix `n-message` options' `duration` prop doesn't work.

## 2.15.8 (2021-07-27)

### Feats

- `n-menu` adds `expand-icon` prop, closes [#414](https://github.com/TuSimple/naive-ui/issues/414).
- `n-descriptions`, `n-descriptions-item` adds `label-style` and `content-style` props, closes [#536](https://github.com/TuSimple/naive-ui/issues/536).

### Fixes

- Fix `n-data-table` the style penetration of the `n-spin`, closes [#663](https://github.com/TuSimple/naive-ui/issues/663).

## 2.15.7 (2021-07-25)

### Feats

- `n-dropdown` adds `show-arrow` prop, closes [#647](https://github.com/TuSimple/naive-ui/issues/647).
- `n-time-picker` adds `actions` prop, closes [#401](https://github.com/TuSimple/naive-ui/issues/401).
- `n-mention` adds `render-label` prop.
- `n-switch` adds `checked`, `unchecked` slots.
- `n-switch` adds `loading` prop, closes [#301](https://github.com/TuSimple/naive-ui/issues/301).
- `n-select` pressing arrow down can open menu, ref [#300](https://github.com/TuSimple/naive-ui/issues/300).
- `n-tree-select` pressing arrow down can open menu, ref [#300](https://github.com/TuSimple/naive-ui/issues/300).
- `n-cascader` pressing arrow down can open menu, ref [#300](https://github.com/TuSimple/naive-ui/issues/300).
- `n-popover`'s `trigger` prop support `'focus'`, closes [#477](https://github.com/TuSimple/naive-ui/issues/477).
- `n-message-provider` adds `duration` and `max` props.
- `n-data-table` adds `flex-height` prop, closes [#596](https://github.com/TuSimple/naive-ui/issues/596).

### Fixes

- Fix `n-carousel` arrow buttons cannot be displayed in a specific browser, closes [#625](https://github.com/TuSimple/naive-ui/issues/625).
- Fix `n-layout-sider`'s `width` prop can't be string, closes [#607](https://github.com/TuSimple/naive-ui/issues/607).
- Fix `n-slider` prop `disabled` doesn't work, closes [#641](https://github.com/TuSimple/naive-ui/issues/641).
- Fix `n-input` show clear button when readonly.
- Fix `n-data-table` doesn't show scrollbar when table-layout is auto, closes [#518](https://github.com/TuSimple/naive-ui/issues/518).
- Fix `n-data-table`'s header checkbox always displays checked when data is empty.
- Fix `n-data-table` header and body's scrollings are not sync.

## 2.15.6 (2021-07-23)

### Feats

- `n-menu` adds `render-icon` prop.
- `n-upload` adds `show-file-list` prop.
- `n-dropdown` adds `render-icon` prop.
- `n-checkbox-group` adds `min` and `max` prop.
- `n-mention` adds `empty` slot.
- `useDialog` option adds `on-mask-click` prop, closes [#419](https://github.com/TuSimple/naive-ui/issues/419).
- `n-space` `justify` prop supports `center`, `space-around` and `space-between`.
- `n-date-picker` adds `close-on-select` prop, closes [#541](https://github.com/TuSimple/naive-ui/issues/541).
- `n-dialog` adds `action` prop, closes [#550](https://github.com/TuSimple/naive-ui/issues/550).
- `n-mention`’s `option.label` support render function.
- `n-color-picker` adds `actions` prop, closes [#319](https://github.com/TuSimple/naive-ui/issues/319).

### Fixes

- Fix `n-space`'s inner `display: grid` element breaks item height, closes `https://github.com/TuSimple/naive-ui/issues/546`.
- Fix `n-dropdown`'s `render-label` prop is invalid for group type option.
- Fix `n-datatable`'s `scroll-x` prop is setted, the table content width is not full of the container width, closes [#518](https://github.com/TuSimple/naive-ui/issues/518).
- Fix `n-descriptions` doesn't work with `v-for` children.
- Fix `n-dialog` display an empty button when `positive-text` is not set, closes [#549](https://github.com/TuSimple/naive-ui/issues/549).
- Fix `n-pagination` `PaginationInfo`'s `endIndex` data error, closes [#584](https://github.com/TuSimple/naive-ui/issues/584).
- Fix `n-data-table` `rowClassName` doesn't work when type is string, closes [#582](https://github.com/TuSimple/naive-ui/issues/582).

## 2.15.5 (2021-07-16)

### Feats

- `n-tree` adds `render-label`, `render-prefix` and `render-suffix` props.
- `n-rate` adds `allow-half` prop.
- `n-carousel` adds `show-arrow` prop.
- `n-slider` adds `format-tooltip` prop.
- `n-upload` adds `event` in `on-finish` callback params.
- `n-rate` adds `readonly` prop.
- `n-time-picker` adds `seconds`, `minutes`, `hours` props.
- `n-notification` export `NotificationApi`, `NotificationOptions` and `NotificationReactive` type.
- `n-avatar` adds `on-error` prop, closes [#394](https://github.com/TuSimple/naive-ui/issues/394).
- `n-image` adds `on-error` prop, closes [#394](https://github.com/TuSimple/naive-ui/issues/394).
- `n-image` adds `object-fit` prop, closes [#394](https://github.com/TuSimple/naive-ui/issues/394).
- `n-avatar` adds `object-fit` prop, closes [#394](https://github.com/TuSimple/naive-ui/issues/394).
- `n-menu` expands all the ascendant of selected item by default, closes [#481](https://github.com/TuSimple/naive-ui/issues/481).

### Fixes

- Fix `n-calendar`'s `default-value` prop cannot be used.
- Fix `n-pagination` page count is not correct when `item-count` is 0.
- Fix `n-scrollbar` `content-style` can not override the default width of style.
- Fix `n-select` placeholder transition.
- Fix `n-loading-bar` `useLoadingBar`'s return type can be undefined.
- Fix `n-tag`'s `type` prop adds `primary` type.
- Fix `n-dynamic-tags`'s `type` prop adds `primary` type.

## 2.15.4 (2021-07-09)

### Feats

- `n-steps` adds icon customization in `'finish'` and `'error'` status.
- `n-tree` exports `TreeDragInfo` & `TreeDropInfo` type.
- `n-empty` export `icon` slot.
- `useDialog` option adds `maskClosable` prop, closes [#420](https://github.com/TuSimple/naive-ui/issues/420).

### Fixes

- Fix `n-data-table` fixed column box-shadow doesn't update when there is only on side fixed.
- Fix `n-data-table` fixed column box-shadow doesn't update when `props.scrollX` is not set but each column's width is set.
- Fix `n-result` image doesn't show on Safari and mobile phone.
- Fix `n-drawer-content`'s `header-style` style not applied to header.
- Fix `n-dialog` instance throws error when calling `destroy`.
- Fix `n-image-group` initialize zoom scale when switching a picture [#423](https://github.com/TuSimple/naive-ui/issues/423).
- Fix `n-select` bug in using custom label, closes [#352](https://github.com/TuSimple/naive-ui/issues/352).
- Fix `n-carousel` when `autoplay` dot active status isn't displayed correctly, closes [#434](https://github.com/TuSimple/naive-ui/issues/434).
- Fix `n-input` fixed clearable position, closes [#428](https://github.com/TuSimple/naive-ui/issues/428).
- Fix `n-image` doesn't accept attributes.
- Fix `n-image` set border-radius not working, closes [#427](https://github.com/TuSimple/naive-ui/issues/427).
- Fix `n-tab-pane` throws error when there's no children.
- Fix `n-select` clear button is too big in `n-spin`, closes [#454](https://github.com/TuSimple/naive-ui/issues/454).
- Fix `n-select` options are not updated properly, closes [#441](https://github.com/TuSimple/naive-ui/issues/441).

## 2.15.3 (2021-07-05)

### Feats

- `n-loading-bar` export `LoadingBarApi` type.
- `n-image` adds `img-props` prop.
- Add native `title` attributes to some components to enhance the experience.
- `n-tree` adds `prefix` and `suffix` in TreeOption.
- `n-carousel` adds `dot-placement` prop.
- `n-auto-complete` adds `loading` prop, closes [#241](https://github.com/TuSimple/naive-ui/issues/241).
- `n-slider` adds `tooltip` prop, closes [#362](https://github.com/TuSimple/naive-ui/issues/362).
- `n-input` adds `loading` prop.

### Fixes

- Fix `n-upload` `multiple=false` doesn't work for drag & drop, closes [#363](https://github.com/TuSimple/naive-ui/issues/363).
- Fix `n-dropdown`'s inner `<a />`'s style.
- Fix `n-menu` tooltip's inner `<a />`'s style, closes [#338](https://github.com/TuSimple/naive-ui/issues/338).
- Fix `n-carousel` doesn't work with `v-for` children.
- Fix `n-form` `label-align` prop not working, closes [#213](https://github.com/TuSimple/naive-ui/issues/213)
- Fix `n-data-table` fixed column shadow doesn't work when `max-height` is set, closes [#376](https://github.com/TuSimple/naive-ui/issues/376).

## 2.15.2 (2021-07-02)

### Feats

- `n-carousel` adds `trigger` prop.
- `n-menu` adds `dropdown-placement` prop.
- `n-upload` adds `before-upload` prop.
- `n-image` adds `alt` prop.
- Support the enter key on the numeric keypad.
- `n-spin` support `icon` slot for icon customizing, closes[#260](https://github.com/TuSimple/naive-ui/issues/260).
- `n-spin` adds `rotate` prop fro slot icon to rotate.
- `n-form` export `FormItemRule` & `FormRules` type.
- `n-select` adds `render-tag` prop.

### Fixes

- Fix `n-log` warn on highlight.js when no language is set, closes [#327](https://github.com/TuSimple/naive-ui/issues/327).
- Remove `n-calendar`'s useless `console.log`.
- Fix loading-bar disappears unexpectl, closes [#343](https://github.com/TuSimple/naive-ui/issues/343).
- Fix `n-select` doesn't scroll to selected item when menu is opened, closes [#346](https://github.com/TuSimple/naive-ui/issues/346).
- Fix `n-tab-pane` throws error when using v-if.
- Fix `n-modal` still closes when `on-negative-click` returns `false`.
- Fix `n-collapse` `defaultExpandedNames` does not work in accordion mode, closes [#350](https://github.com/TuSimple/naive-ui/issues/350).
- Fix `n-tag` lacks `on-update-checked` prop.
- Fix `n-menu` `render-label` not working for dropdown in collapsed mode.

## 2.15.1 (2021-06-30)

- Fix no `web-types.json`.

## 2.15.0 (2021-06-29)

### Breaking Changes

- `n-select`'s `SelectOption`'s `render` no longer render label but the entire option.

### Feats

- `n-carousel` supports touch operation, closes [#271](https://github.com/TuSimple/naive-ui/issues/271).
- `n-input` adds `input-props` prop.
- `n-message` optimize the error message of `useMessage` when there is no `n-message-provider`, adds the related document link.
- Add `web-types.json` for webstorm, however I recommend using VSCode and Volar. `web-types.json` only provides limited information for coding.
- `n-tree-select` adds `leaf-only` prop.
- `n-tree` adds `leaf-only` prop.
- `n-select`'s `SelectOption`'s `label` supports render function.
- `n-select` adds `render-option` prop.
- `n-select` export `SelectOption` & `SelectGroupOption` type.
- `n-popover` adds `header` slot.
- `n-dropdown` adds `render-label` prop.

### Fixes

- Fix `n-date-picker` `n-provider` pass `date-locale` not work, closes [#250](https://github.com/TuSimple/naive-ui/issues/250).
- Fix `n-input` clear button placeholder prevent clicking on actual component [#288](https://github.com/TuSimple/naive-ui/issues/288)
- Fix `n-carousel` click the at current item button, the component behaves abnormally.
- Fix `n-menu` `render-label` not working for tooltip in collapsed mode.
- Fix `n-dropdown` can't render `n-popover` in option.

## 2.14.0 (2021-06-23)

### Breaking Changes

- `n-element` removes `abstract` prop.
- `n-element` doesn't return theme variables in default slot. Please use `useThemeVars` instead.

### Feats

- Add `n-carousel` component.
- Add `useThemeVars` composable to provide theme variables.
- `n-upload` adds `on-update:file-list` prop, closes [#135](https://github.com/TuSimple/naive-ui/issues/135).
- `n-date-picker` adds `update-value-on-close` prop.

### Fixes

- Fix `n-select` can't input in filterable mode in single mode in iOS Safari, closes [#230](https://github.com/TuSimple/naive-ui/issues/230)
- Fix `n-input-number` lacks `on-update-value` prop.
- Fix `n-input-number`'s value can't be null.
- Fix `n-input-number`'s button doesn't work after value is cleared, closes [#251](https://github.com/TuSimple/naive-ui/issues/251).
- Fix `n-data-table` expand trigger's cursor is not pointer, closes [#261](https://github.com/TuSimple/naive-ui/issues/261).

## Refactors

- `n-input-number` will focus directly, closes [#244](https://github.com/TuSimple/naive-ui/issues/244).

## 2.13.0 (2021-06-21)

### Feats

- `n-dropdown` adds `on-clickoutside` prop, closes [#123](https://github.com/TuSimple/naive-ui/issues/123).
- `n-menu` adds `render-label` prop, closes [#84](https://github.com/TuSimple/naive-ui/issues/84)
- `n-tree` supports keyboard operations.
- Add `n-tree-select` component.

### Fixes

- Fix `n-tree` drag over leaf node causes error, closes [#200](https://github.com/TuSimple/naive-ui/issues/200).
- Fix `n-tree` misses `on-update-expanded-keys`, `on-update-selected-keys`, `on-update-checked-keys` prop.
- Fix `n-tree`'s `selected-keys` prop influences original array.
- Fix `n-select`'s input has useless empty row in multiple filterable mode.
- Fix `n-button`'s loading icon doesn't show on iOS Safari, closes [#219](https://github.com/TuSimple/naive-ui/issues/219).
- Fix `n-date-picker` doesn't show icon when clearable.
- Fix `n-time-picker` icon mis-aligned when clearable, closes [#222](https://github.com/TuSimple/naive-ui/issues/222).

## 2.12.2 (2021-06-19)

### Fixes

- Fix `n-form-item` always show require mark.

## 2.12.1 (2021-06-19)

### Feats

- `n-form`, `n-form-item` enhance `show-require-mark` prop, closes [#171](https://github.com/TuSimple/naive-ui/issues/171)
- `n-dropdown` support class attr, closes [#180](https://github.com/TuSimple/naive-ui/issues/180).
- `n-input` adds `show-password-toggle` prop.
- `n-popselect` support class attr.
- `n-select` adds `render-label` prop.
- `n-popselect` adds `render-label` prop.

### Fixes

- Fix `n-input` baseline shifts when mix Chinese and English characters in input, closes [#174](https://github.com/TuSimple/naive-ui/issues/174).
- Fix `n-icon` use setup script, `$parent` is an empty object by default, and access `$parent.$options` will be `undefined`.
- Fix `n-notification` position not correct.
- Fix `n-message` content & option type not correct.

## 2.12.0 (2021-06-16)

### Breaking Changes

- `n-a`'s `to` prop is removed. Now if you want to use `n-a` like a router link, you can follow the doc site.

### Feats

- `n-tree` support `disabled` & `checkboxDisabled` on option.
- `n-input-number` support keyboard events ArrowUp and ArrowDown operations.

### Fixes

- Fix `n-cascader` text blur in win10 Chrome.
- Fix `n-tree` click on indent won't trigger select in block line mode.

## 2.11.12 (2021-06-16)

### Feats

- `n-drawer-content` adds `closable` prop, closes [#139](https://github.com/TuSimple/naive-ui/issues/139).
- `n-element` pass `themeVars` to default slot.
- `n-element` adds `abstract` prop.

### Fixes

- Fix `n-radio-group` doesn't trigger form item validation.
- Fix `n-auto-complete` customizing input not working.

## 2.11.11 (2021-06-15)

### Feats

- `n-tag` adds `RTL` support

### Fixes

- Move `vue` & `vue-router` to peer dependencies to avoid redundant bundle.

## 2.11.9 (2021-06-15)

### Feats

- `n-space` supports wai-aria.
- `n-button-group` supports wai-aria.
- `n-progress` supports wai-aria.
- `n-menu` supports use `<a />` and `<router-link />` as label, closes [#84](https://github.com/TuSimple/naive-ui/issues/84).
- `n-input-number` adds `show-button` prop.
- `n-rate` support `default` slot for icon customizing.
- `n-rate` adds color prop.
- `n-rate` adds size prop.

### Fixes

- Fix `n-card`'s `header-style` it not applied to header. [#103](https://github.com/TuSimple/naive-ui/issues/103)
- Fix `n-dialog` misses `destroyAll` method.
- Fix `n-data-table` misses `on-update-sorter`, `on-update-filters`, `on-update-page` and `on-update-page-size` props.

## 2.11.8 (2021-06-13)

### Feats

- `n-data-table` exports `DataTableCreateRowClassName`, `DataTableCreateRowKey` and `DataTableCreateRowProps` type.

### Fixes

- Fix `n-calendar`'s `on-update:value` prop type.
- Fix `n-form-item`'s style attribute `grid-template-columns` influence on the layout of child elements. [#93](https://github.com/TuSimple/naive-ui/pull/93)
- Fix `n-data-table`'s prop types of `rowKey`, `rowClassName`, `rowProps`, `summary` aren't compatible with expected value.

## 2.11.7 (2021-06-12)

### Fixes

- Fix `n-slider` doesn't prevent scrolling when touchstart.
- Fix `n-color-picker`'s default value doesn't follow modes.
- Fix not `lodash` & `lodash-es` type.

## 2.11.6 (2021-06-11)

### Feats

- `n-spin`'s `size` prop support number.
- `n-date-picker` adds `footer` slot.

### Fixes

- Fix `n-slider` doesn't support touch events
- Fix `n-button` causes crash when it's imported in script inside head tag. [#68](https://github.com/TuSimple/naive-ui/pull/68)
- Fix `n-spin` animation shifts.
- Fix `n-menu` lack `on-update-value` and `on-update-expanded-keys` props.
- Fix `n-popconfirm` icon slot not working.
- Fix `n-tabs` logs useless info.
- Fix `n-color-picker` set `modes` not working. [#77](https://github.com/TuSimple/naive-ui/issues/77)

## 2.11.5 (2021-06-10)

### Feats

- `n-dropdown` adds `disabled` prop
- `n-card` adds `:target` style

### Fixes

- Fix `n-popover` sometimes won't sync position in manual mode.
- Fix `n-transfer`'s empty icon is no toggling transition.
- Fix `n-message` API option is not optional.
- Fix `n-calendar` date calculate incorrectly.
- Fix `n-input` misses the `password` type declaration.
- Fix `n-menu` the type definition of `extra` property of menu and submenu.
- Fix `n-dropdown` mouse cursor is not pointer.

## 2.11.4

### Feats

- `n-button` supports wai-aria.
- `n-card` supports wai-aria.
- `n-switch` supports wai-aria.
- `n-menu` supports basic wai-aria.
- `n-divider` supports basic wai-aria.
- `n-data-table` adds `row-props` prop.
- `n-date-picker` adds `ranges` prop.

### Fixes

- Fix `n-tab-pane` `display-directive` not working.
- Fix `n-drawer` animation.
- Fix `n-scrollbar`'s track may be overlayed in chrome windows.

## 2.11.3

- Fix `n-collapse` `default-expanded-names` not working.

## 2.11.2

### Fixes

- Fix `n-dropdown` default placement is not `bottom`.
- Fix `n-date-picker`'s input theme is not set in `date` & `datetime` type.
- Fix `n-config-provider` doesn't merge inherited theme.

### Feats

- `n-collapse` adds `arrow` slot

## 2.11.1

Update package.json & README.md.

## 2.11.0

### Breaking Changes

- `n-affix`'s `listen-to` prop is `document` by default (first scrollable parent before).

### Feats

- `n-affix`'s `listen-to` prop support `Window | Document | HTMLElement`.
- `n-anchor` adds `offset-target` prop.
- `n-select` adds `virtual-scroll` prop.
- `n-select` adds `consistent-menu-width` prop.
- `n-date-picker` update value after confirm is clicked.

### Fixes

- Fix `n-date-picker` doesn't disable start date correctly when value is empty.
- Fix `n-input-number` not restore valid value after blur.
- Fix `n-date-picker` display selected date when value is null in date mode.

### Deprecated

- `n-affix`'s `offset-top` prop is deprecated, please use `trigger-top` instead.
- `n-affix`'s `offset-bottom` prop is deprecated, please use `trigger-bottom` instead.
- `n-anchor`'s `listen-to` prop is removed.

## 2.10.0

### Breaking Changes

- `n-popover`'s `placement` prop default value is set to `'top'`.

### Feats

- `n-tabs` adds `on-close` prop.
- `n-tabs` adds `on-add` prop.
- `n-tabs` adds `tab` slot.
- `n-tab-pane`'s `tab` prop support render function & VNode.
- `n-tabs`'s `type` prop support `'line'` option.
- `n-tabs` adds box shadow to indicate scroll status.
- `n-tabs` adds `pane-style` prop

### Fixes

- Fix `n-layout`'s `scrollTo` not working when using native scrollbar.

### Deprecated

- `n-tab-pane`'s `label` prop is deprecated. Please use `tab` prop instead.

## 2.9.0

### Breaking Changes

- `n-layout-sider` removed `show-content` prop. Please use `show-collapsed-content` instead.

### Feats

- `n-data-table` support tree data.
- `n-data-table` adds `cascade` prop.
- `n-data-table` adds `children-key` prop.
- `n-data-table` adds `indent` prop.
- `n-button` adds `tag` prop.
- `n-data-table` adds `table-layout` prop.
- `n-tree` adds `block-line` prop.
- `n-tree` support drag & drop.
- `n-menu` adds `inverted` prop.
- `n-dropdown` adds `inverted` prop.
- `n-tabs` adds `addable` prop.
- `n-tabs` adds `tab-style` prop.
- `n-tabs` adds `tabs-padding` prop.
- `n-tabs` adds `default-value` prop.
- `n-layout-sider` & `n-layout-footer` & `n-layout-header` adds `inverted` prop.
- `n-data-table`'s `max-height` & `min-height` prop accept CSS value.
- `n-layout` & `n-layout-content` adds `embedded` prop.

### Fixes

- `n-layout` & `n-layout-sider`'s `scrollTo` not working with native scrollbar.
- `n-layout-sider`'s `collapse-mode` not working.
- Internal selection component's theme peers has wrong key for popover.

## 2.8.0

### Perf

- Optimize `n-data-table` init render count.
- Optimize `n-select` open duration after first opening.
- Optimize `n-anchor` scroll performance.

### Feats

- `n-tree` adds `virtual-scroll` prop.
- `n-data-table` adds `virtual-scroll` prop.
- `n-cascader` adds `virtual-scroll` prop.
- `n-pagination` adds `item-count` prop.
- `n-pagination` adds `prefix` prop.
- `n-pagination` adds `prefix` slot.
- `n-pagination` adds `suffix` prop.
- `n-pagination` adds `suffix` slot.
- `n-input` adds `show-count` prop.

### Fixes

- Fix `n-layout-sider` doesn't show menu after collapsed.
- Fix `n-input-number` doesn't reset to origin value when blur with invalid value.
- Fix `n-pagination` doesn't update page in uncontrolled mode.

## 2.7.4

### Feats

- `n-form-item` works without `n-form`.

### Fixes

- Fix `n-checkbox` check mark not displayed.
- Fix `n-date-picker` icon transition style in trigger.
- Fix `n-p`, `n-ol`, `n-ul` margin bottom is not 0 when they are last child.
- Fix `n-checkbox-group` not working in uncontrolled mode.
- Fix `n-data-table` clear check all in table now working.

## 2.7.3

### Feats

- `n-data-table` highlight sorted col.
- `n-data-table` col adds `render-filter` prop.
- `n-data-table` col adds `render-filter-icon` prop.

### Fixes

- `n-data-table` fixed column box-shadow more clear in dark theme.
- Fix `n-color-picker` value has line wrap.
- Fix `n-form` FormRuleItem.trigger types.

## 2.7.2

### Feats

- `n-data-table` adds `summary` prop.
- `n-data-table` adds `options` on `'type=selection'` column.

### Fixes

- Fix `n-layout` overflow on horizontal direction.

## 2.7.1

### Feats

- `n-checkbox` adds `focusable` prop.
- `n-cascader` adds `action` slot.

### Fixes

- Fix `n-cascader` loading triggered when click checkbox.
- Fix `n-cascader` menu mask style.

## 2.7.0

### Breaking Changes

- `n-drawer` doesn't have padding by default. `n-drawer-content` is provided to fill the drawer.

## 2.6.0

### Feats

- `n-drawer` adds `content-style` prop.
- `n-layout` adds `content-style` prop.
- `n-layout-sider` adds `content-style` prop.

### Feats

- `n-config-provider` Add `cls-prefix` prop.

### Fixes

- Fix `n-popover` may influence other popover when static props is hoisted.

## 2.5.1

### Feats

- `n-color-picker` adds `show-alpha` prop.

### Fixes

- Fix `n-select` default `fallback-option` breaks the component.

## 2.5.0

### Feats

- Add `n-skeleton` component.
- Add `n-calendar` component.
- Add `n-color-picker` component.
- `n-date-picker` locale adds `firstDayOfWeek`.
- `n-select` adds `showArrow` prop.

### Fixes

- Fix `n-date-picker` trigger has no focus style in focus is in panel.
- Fix `n-button` loading's fade-in transtion drifts.
- Fix `n-time-picker` close animation drifts in `n-date-picker`.
- Fix detached components in popover should stay in popover.

## 2.4.2

### Feats

- Add `n-form-item-gi` component.

### Fixes

- Fix `n-ellipsis` & `n-data-table` ellpisis cell mis-vertical-aligned.
- Fix `n-select` filterable doesn't work with composite events.

## 2.4.1

### Fixes

- Fix `n-select` caret color in single filter mode.
- Fix `n-select` menu action part can't be focused.

## 2.4.0

### Feats

- Add `n-image` component.
- Add `n-global-style` component.
- Add `n-theme-editor` component.
- Add `n-page-header` component.
- `n-statistic` adds `label` slot.
- `n-breadcrumb-item` adds `separator` slot & prop.
- `n-button` adds `bordered` prop.
- `n-card` adds `footer-style` prop.

### Refactors

- Refactor `n-statistic`'s style
- `n-menu` adds `options` prop to replace `items` prop, `items` prop is deprecated.

### Fixes

- Fix `n-anchor` `ignore-gap` not working
- Fix `n-collapse` content is truncated by `overflow: hidden`.
- Fix `n-select` tag text overflow.
- Fix `n-popover` doesn't hide as expected in mobile phone.

## 2.3.1

### Fixes

- Fix `n-layout-sider` horizontal content overflows.

## 2.3.0

### Breaking Changes

- Collapsing won't work for `n-layout-sider` with `position="absolute"`.
- For `n-layout` contains `n-layout-sider` as a direct child `has-sider` must be set.

## 2.2.0

### Feats

- Add `n-mention` component.
- `n-data-table` supports expanding rows.

### Fixes

- Fix `n-input` focused background color not correct in warning & error status in dark theme.
- Fix `n-input` caret color not correct in warning & error status.
- Fix `n-select`'s namespace not correct.
- Fix `n-cascader`'s namespace not correct.
- Fix `n-input` in textarea mode can't select text.
- Fix `n-input` in textarea mode has no box-shadow.
- Fix `n-input` in textarea mode `autosize` line not correct due to inconsistant font family.
- Fix `n-input` in textarea mode `autosize` rows not changed if props.value is changed from outside.

### Refactors

- Change `n-empty`'s icon and make it size larger

## 2.1.3

### Fixes

- Fix `n-data-table` has no right border of non-last td.
- Fix `n-data-table` header has no enough width when table width is more than `scroll-x`

## 2.1.2

### Feats

- `n-data-table`'s column adds `colSpan` and `rowSpan` prop.
- `n-data-table`'s column adds `titleColSpan` prop.

### Fixes

- Fix `n-dropdown` with `x` and `y` set logs errors when mouse move outside it.

## 2.1.1

### Fixes

- Fix `n-select` selection overflow counter wrong popover trigger area

## 2.1.0

### Breaking Changes

- `n-popover` default `duration` is set to `100`.
- `n-popover` default `delay` is set to `100`.
- `n-tooltip` default `showArrow` is set to `true`.

### Feats

- `n-config-provider` prop `theme-overrides` support inheritance.
- `n-card` adds `hoverable` prop.
- `n-select` adds `max-tag-count` prop.
- `n-cascader` adds `max-tag-count` prop.
- `n-popover` adds `get-disabled` prop.
- adds `n-ellipsis` component.
- `n-popover`'s `width` prop adds `'trigger'` option.
- `n-data-table`'s columns's `ellipsis` prop can be set as props of `n-ellipsis`.

### Fixes

- Fix `n-cascader` menu appears after click clear button.
- Fix `n-card`'s action not placed at bottom after style height is set.
- Fix `n-popover`'s `duration` and `delay` prop works unexpectly.

## 2.0.1

### Feats

- `n-layout-sider` adds `default-collapsed` prop.
- `n-modal` support custom position.

### Fixes

- Fix `n-menu` tooltip of `n-menu-item` won't show when vertical collapsed.
- Fix `n-menu` `collapsed-icon-size` not working.
- Fix `n-menu` callback props validate array with error.
- Fix `n-layout-sider` toggle button is covered.

## 2.0.0

See vue3.md

## 1.6.0

### Fixes

- Fix the problem that `n-auto-complete`'s menu can't be closed when use `textarea` as input.
- Fix the problem that nested `n-icon` is not flattened.
- Fix the problem that `n-date-picker` has no year in panel when type is `date` and `datetime`.

### Feats

- `n-button` adds `dashed` props
- Add `n-space` component.
- Make `n-drawer` content scrollable.

### i18n

- Add zhCN for `n-log`

## 1.5.5 (2020-08-15)

### Breaking Changes

- Fix all typos of `separator`. (Originally it was `seperator`.)

### Fixes

- Fix the problem that when theme is not set, style errors will be logged.
- Fix the text color of `n-select`'s placeholder when `single` `filterable`.

## 1.5.4 (2020-08-08)

### Fixes

- Fix the problem that Message, Notification, Confirm doesn't follow theme change.

## 1.5.3 (2020-07-23)

### Fixes

- Fix the problem that `n-select` display with mistakes when `placeholder` is empty.

## 1.5.2 (2020-07-22)

### Fixes

- Fix the problem that `n-radio` can not be focused.
- Fix the problem that `n-data-table`'s `max-height` style is broken. <https://bugs.chromium.org/p/chromium/issues/detail?id=1107223>

### Refactors

- Refactor `n-tag` styles.

## 1.5.1 (2020-07-20)

### Feats

- Add `disabled` for `n-time-picker`.

### Fixes

- Fix the child elements of `n-radio` cannot focus.

## 1.5.0 (2020-07-09)

### Breaking Changes

- Refactor experimental setting primary color feature.

### Fixes

- Fix some style glitches.

## 1.4.1 (2020-06-23)

### Feats

- Add `autofocus` for `n-select`.

## 1.4.0 (2020-06-19)

### Breaking Changes

- `n-menu` doesn't support slot API anymore.

### Feats

- Add experimental setting primary color feature.

## 1.3.5 (2020-06-06)

### Feats

- Add `attr-type` for `n-button`

### Fixes

- Fix the problem that if `n-input` is too width, its inner input elements' width won't expand.
- Fix style glitches of border of a `n-input-number` inside a `n-input-group`.

## 1.3.4 (2020-06-05)

### Fixes

- Fix the problem that `n-a`'s `to` prop can't be a object.

## 1.3.3 (2020-06-03)

### Feats

- Add `$NOs.theme` to get the current theme of the OS.

## 1.3.2 (2020-06-02)

### Fixes

- Fix the problem that `n-log`'s loading indicator uses monospace font.
- Fix the problem that icon-related class name isn't applied properly.

## 1.3.1 (2020-06-01)

### Fixes

- Fix the problem that checkbox in the selection column of `n-data-table` is not center aligned.
- Fix the problem that header of `n-data-table` has no border-color transition.
- Fix the problem that `show-icon` & `closable` & `bordered` props of `$NConfirm` don't work.

### Feats

- Add and adjust some colors in the style scheme of `n-config-consumer`.

## 1.3.0 (2020-06-01)

### Breaking Changes

- Default UI CSS bundle won't include external font files. If you need using it you should import it explicitly.

### Feats

- Add `themed-style` prop on `n-layout`.

### Fixes

- Fix the problem that round toggle button won't rotate `n-layout-sider` when collapsed status is changed.
- Fix the problem that `n-form-item`'s feedback has no leave animation if it is set at first.
- Fix the problem that max-height related styles of `n-data-table` are applied all the time.
- Fix some style glitches.

### Refactors

- Refactor some components' styles in the light theme.

## 1.2.1 (2020-05-29)

### Fixes

- Fix the problem that `n-slider` tooltip has no z-index.

## 1.2.0 (2020-05-29)

### Feats

- Add `feedback` and `validation-status` props for `n-form-item`.

## 1.1.5 (2020-05-28)

### Feats

- Add `display-directive` prop for `n-collapse` and `n-collapse-item`.
- Add `class` and `style` prop for `n-select`'s `option`.
- Add `debug` prop for `n-select`.

### Fixes

- Fix the problem that `n-select` can still be cleared when disabled.

## 1.1.4 (2020-05-28)

### Fixes

- Fix the problem that the input value of `n-select` may be modified directly.

### Refactors

- An UI instance can be install to a Vue instance for no more than once.

## 1.1.3 (2020-05-20)

### Chores

- Update css-render dependencies.

### Fixes

- Fix the problem that `n-transfer`'s animation disorder when value changes.

## 1.1.2 (2020-05-19)

### Feats

- Add content slot for `n-step`.
- Add `label` prop for `n-checkbox`.

### Performance Improvements

- All placeable components register listeners on demand.
- Use cache when finding scrollable parent node.
- Imporve performance of `n-button`'s beforeDestroy.
- Reduce the useless re-rendering of `n-checkbox` when checked status isn't changed.
- Imporve performance of text typed `n-avatar`.

## 1.1.1 (2020-05-18)

### Fixes

- Update css-render dependencies.
- Color of default typed button icon.

### Performance Improvements

- Reduce useless re-renders of `n-menu-item`.
- Reduce useless re-renders of doc page.

### Refactors

- Refactor the codes of `n-nimbus-service-layout` for performance reason, may be there will be some bugs.

## 1.1.0 (2020-05-16)

### Feats

- `n-button` now accepts custom color.

### Refactors

- Replace all $slots by $scopedSlots for better robustness.
- Move some static button styles inside button component to create dynamically.

## 1.0.14 (2020-05-15)

### Fixes

- Fix the problem that `line` typed `n-tabs`'s line position stays still when `activeName` changes.
- Fix the problem that `n-tabs` scroll button is not triggered when tabs' width changes.
- Fix the problem that height change of `n-tabs` will unexpectly trigger some re-render callbacks.

## 1.0.13 (2020-05-14)

### Fixes

- Fix the problem that label slot of the `n-form-item-col` & `n-form-item-row` cannot display.

## 1.0.12 (2020-04-30)

### Fixes

- Fix the problem that some CSS length props are badly formated.

## 1.0.11 (2020-04-30)

### Feats

- Add `fallback-option` prop for `n-select` to deal with the value with no corresponding option.

### Fixes

- Fix the problem that `max-height` and `min-height` are ill displayed on `n-data-table`.

### Breaking Changes

- `n-data-table`'s `max-height` and `min-height` will be applied to the entire table part, not only body.
- `n-select` will display value with no corrensponding option.

## 1.0.10 (2020-04-28)

### Feats

- Add `arrow-placement` prop on `n-collapse`.
- Add `arrow` slot on `n-collapse-item`.

### Fixes

- Fix the problem that detachable components detached in wrong place when nested like `modal > drawer > component`.

## 1.0.9 (2020-04-23)

### Feats

- Add `autofocus` prop on `n-input`.
- Add `closable` option on `NMessage`.

### Fixes

- Fix the problem that the default value of `n-tag` `closable` is set to `true`.
- Fix the problem that `n-data-table` can't use all `pagination`'s props.
- Fix the problem that `n-pagination`'s `on-page-size-change` prop doesn't work.

## 1.0.8 (2020-04-22)

### Feats

- Add `n-dynamic-tags`.
- Add `tableHeaderOverlayBackgroundColor` & `inputOverlayBackgroundColor` to `styleScheme`

## 1.0.7 (2020-04-10)

### Feats

- Add `filter-option-value` prop for `n-data-table`'s `column` to better deal with single filter mode.

### Fixes

- Fix the problem that `n-collpase-item` don't support `number` typed `name`.

## 1.0.6 (2020-04-03)

### Fixes

- Fix the problem that all the `console` statements are striped in the bundle.

## 1.0.5 (2020-03-27)

### Feats

- Change the data type of `n-data-table`'s filters from Array to Object.

### Fixes

- `n-data-table` cannot be filtered correctly when there are multiple filtered columns.

## 1.0.4 (2020-03-26)

### Feats

- Filter menu in `n-data-table` is scrollable when there are too many items.

## 1.0.3 (2020-03-25)

### Feats

- `$NMessage`, `$NNotification`, `$NConfirm`'s theme will be applied on their children components.

### Fixes

- View measuring element will confict when multiple naive-ui exist.
- `validate` method of `n-form-item` won't be resolved for some validator.
- `$NConfirm`'s theme doesn't follow `n-config-provider`'s theme.

## 1.0.2 (2020-03-23)

### Fixes

- `n-transfer`'s options are not reinitialized after value changes.
- `n-nimbus-service-layout` (deprecated) doesn't deal with the compatibility of Vue Router(under 3.1)'s `push` method.

## 1.0.1 (2020-03-21)

### Feats

- Add `'bar'` & `'arrow-circle'` on `show-trigger` prop of `n-layout-sider`.

### Fixes

- Rails of `n-scrollbar` shadow mouse event.

### Feats

- `n-date-table` adds `empty` slot. [#86](https://github.com/TuSimple/naive-ui/issues/86)
