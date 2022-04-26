import { h, computed, defineComponent } from 'vue'
import { useMemo } from 'vooks'
import { render } from '../../_utils'
import { NTooltip } from '../../tooltip'
import NMenuOptionContent from './MenuOptionContent'
import { useMenuChild } from './use-menu-child'
import { useMenuChildProps } from './use-menu-child-props'
export const menuItemProps = Object.assign(
  Object.assign({}, useMenuChildProps),
  {
    tmNode: {
      type: Object,
      required: true
    },
    disabled: Boolean,
    icon: Function,
    onClick: Function
  }
)
export const NMenuOption = defineComponent({
  name: 'MenuOption',
  props: menuItemProps,
  setup(props) {
    const MenuChild = useMenuChild(props)
    const { NSubmenu, NMenu } = MenuChild
    const { props: menuProps, mergedClsPrefixRef, mergedCollapsedRef } = NMenu
    const submenuDisabledRef = NSubmenu
      ? NSubmenu.mergedDisabledRef
      : { value: false }
    const mergedDisabledRef = computed(() => {
      return submenuDisabledRef.value || props.disabled
    })
    function doClick(e) {
      const { onClick } = props
      if (onClick) onClick(e)
    }
    function handleClick(e) {
      if (!mergedDisabledRef.value) {
        NMenu.doSelect(props.internalKey, props.tmNode.rawNode)
        doClick(e)
      }
    }
    return {
      mergedClsPrefix: mergedClsPrefixRef,
      dropdownPlacement: MenuChild.dropdownPlacement,
      paddingLeft: MenuChild.paddingLeft,
      iconMarginRight: MenuChild.iconMarginRight,
      maxIconSize: MenuChild.maxIconSize,
      activeIconSize: MenuChild.activeIconSize,
      mergedTheme: NMenu.mergedThemeRef,
      menuProps,
      dropdownEnabled: useMemo(() => {
        return (
          props.root &&
          mergedCollapsedRef.value &&
          menuProps.mode !== 'horizontal' &&
          !mergedDisabledRef.value
        )
      }),
      // Vue has bug when using vooks.useMemo
      // menu item state won't be updated...
      // a minimal reproduction is needed
      selected: computed(() => {
        if (NMenu.mergedValueRef.value === props.internalKey) return true
        return false
      }),
      mergedDisabled: mergedDisabledRef,
      handleClick
    }
  },
  render() {
    const {
      mergedClsPrefix,
      mergedTheme,
      tmNode,
      menuProps: { renderLabel }
    } = this
    return h(
      'div',
      { role: 'menuitem', class: [`${mergedClsPrefix}-menu-item`] },
      h(
        NTooltip,
        {
          theme: mergedTheme.peers.Tooltip,
          themeOverrides: mergedTheme.peerOverrides.Tooltip,
          trigger: 'hover',
          placement: this.dropdownPlacement,
          disabled: !this.dropdownEnabled || this.title === undefined,
          internalExtraClass: ['menu-tooltip']
        },
        {
          default: () =>
            renderLabel ? renderLabel(tmNode.rawNode) : render(this.title),
          trigger: () =>
            h(NMenuOptionContent, {
              tmNode: tmNode,
              clsPrefix: mergedClsPrefix,
              paddingLeft: this.paddingLeft,
              iconMarginRight: this.iconMarginRight,
              maxIconSize: this.maxIconSize,
              activeIconSize: this.activeIconSize,
              selected: this.selected,
              title: this.title,
              extra: this.extra,
              disabled: this.mergedDisabled,
              icon: this.icon,
              onClick: this.handleClick
            })
        }
      )
    )
  }
})
