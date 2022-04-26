import { VNodeChild, ExtractPropTypes, PropType, CSSProperties } from 'vue'
import type { ExtractPublicPropTypes } from '../../_utils'
import type { MessageOptions, MessageType } from './types'
declare type ContentType = string | (() => VNodeChild)
export interface MessageApiInjection {
  create: (content: ContentType, options?: MessageOptions) => MessageReactive
  info: (content: ContentType, options?: MessageOptions) => MessageReactive
  success: (content: ContentType, options?: MessageOptions) => MessageReactive
  warning: (content: ContentType, options?: MessageOptions) => MessageReactive
  error: (content: ContentType, options?: MessageOptions) => MessageReactive
  loading: (content: ContentType, options?: MessageOptions) => MessageReactive
  destroyAll: () => void
}
export interface MessageReactive {
  content?: ContentType
  duration?: number
  closable?: boolean
  keepAliveOnHover?: boolean
  type: MessageType
  icon?: () => VNodeChild
  showIcon?: boolean
  onClose?: () => void
  destroy: () => void
}
export declare type MessageProviderInst = MessageApiInjection
declare const messageProviderProps: {
  to: PropType<string | HTMLElement>
  duration: {
    type: NumberConstructor
    default: number
  }
  keepAliveOnHover: BooleanConstructor
  max: NumberConstructor
  placement: {
    type: PropType<
      | 'bottom'
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
    >
    default: string
  }
  closable: BooleanConstructor
  containerStyle: PropType<string | CSSProperties>
  theme: PropType<
    import('../../_mixins').Theme<
      'Message',
      {
        textColor: string
        textColorInfo: string
        textColorSuccess: string
        textColorError: string
        textColorWarning: string
        textColorLoading: string
        color: string
        colorInfo: string
        colorSuccess: string
        colorError: string
        colorWarning: string
        colorLoading: string
        boxShadow: string
        boxShadowInfo: string
        boxShadowSuccess: string
        boxShadowError: string
        boxShadowWarning: string
        boxShadowLoading: string
        iconColor: string
        iconColorInfo: string
        iconColorSuccess: string
        iconColorWarning: string
        iconColorError: string
        iconColorLoading: string
        closeColor: string
        closeColorHover: string
        closeColorPressed: string
        closeColorInfo: string
        closeColorHoverInfo: string
        closeColorPressedInfo: string
        closeColorSuccess: string
        closeColorHoverSuccess: string
        closeColorPressedSuccess: string
        closeColorError: string
        closeColorHoverError: string
        closeColorPressedError: string
        closeColorWarning: string
        closeColorHoverWarning: string
        closeColorPressedWarning: string
        closeColorLoading: string
        closeColorHoverLoading: string
        closeColorPressedLoading: string
        loadingColor: string
        lineHeight: string
        borderRadius: string
        margin: string
        padding: string
        maxWidth: string
        minWidth: string
        iconMargin: string
        closeMargin: string
        closeSize: string
        iconSize: string
        fontSize: string
      },
      any
    >
  >
  themeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Message',
        {
          textColor: string
          textColorInfo: string
          textColorSuccess: string
          textColorError: string
          textColorWarning: string
          textColorLoading: string
          color: string
          colorInfo: string
          colorSuccess: string
          colorError: string
          colorWarning: string
          colorLoading: string
          boxShadow: string
          boxShadowInfo: string
          boxShadowSuccess: string
          boxShadowError: string
          boxShadowWarning: string
          boxShadowLoading: string
          iconColor: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          iconColorLoading: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          closeColorLoading: string
          closeColorHoverLoading: string
          closeColorPressedLoading: string
          loadingColor: string
          lineHeight: string
          borderRadius: string
          margin: string
          padding: string
          maxWidth: string
          minWidth: string
          iconMargin: string
          closeMargin: string
          closeSize: string
          iconSize: string
          fontSize: string
        },
        any
      >
    >
  >
  builtinThemeOverrides: PropType<
    import('../../_mixins/use-theme').ExtractThemeOverrides<
      import('../../_mixins').Theme<
        'Message',
        {
          textColor: string
          textColorInfo: string
          textColorSuccess: string
          textColorError: string
          textColorWarning: string
          textColorLoading: string
          color: string
          colorInfo: string
          colorSuccess: string
          colorError: string
          colorWarning: string
          colorLoading: string
          boxShadow: string
          boxShadowInfo: string
          boxShadowSuccess: string
          boxShadowError: string
          boxShadowWarning: string
          boxShadowLoading: string
          iconColor: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          iconColorLoading: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          closeColorLoading: string
          closeColorHoverLoading: string
          closeColorPressedLoading: string
          loadingColor: string
          lineHeight: string
          borderRadius: string
          margin: string
          padding: string
          maxWidth: string
          minWidth: string
          iconMargin: string
          closeMargin: string
          closeSize: string
          iconSize: string
          fontSize: string
        },
        any
      >
    >
  >
}
export declare type MessageProviderProps = ExtractPublicPropTypes<
  typeof messageProviderProps
>
export declare type MessageProviderSetupProps = ExtractPropTypes<
  typeof messageProviderProps
>
declare const _default: import('vue').DefineComponent<
  {
    to: PropType<string | HTMLElement>
    duration: {
      type: NumberConstructor
      default: number
    }
    keepAliveOnHover: BooleanConstructor
    max: NumberConstructor
    placement: {
      type: PropType<
        | 'bottom'
        | 'top'
        | 'top-left'
        | 'top-right'
        | 'bottom-left'
        | 'bottom-right'
      >
      default: string
    }
    closable: BooleanConstructor
    containerStyle: PropType<string | CSSProperties>
    theme: PropType<
      import('../../_mixins').Theme<
        'Message',
        {
          textColor: string
          textColorInfo: string
          textColorSuccess: string
          textColorError: string
          textColorWarning: string
          textColorLoading: string
          color: string
          colorInfo: string
          colorSuccess: string
          colorError: string
          colorWarning: string
          colorLoading: string
          boxShadow: string
          boxShadowInfo: string
          boxShadowSuccess: string
          boxShadowError: string
          boxShadowWarning: string
          boxShadowLoading: string
          iconColor: string
          iconColorInfo: string
          iconColorSuccess: string
          iconColorWarning: string
          iconColorError: string
          iconColorLoading: string
          closeColor: string
          closeColorHover: string
          closeColorPressed: string
          closeColorInfo: string
          closeColorHoverInfo: string
          closeColorPressedInfo: string
          closeColorSuccess: string
          closeColorHoverSuccess: string
          closeColorPressedSuccess: string
          closeColorError: string
          closeColorHoverError: string
          closeColorPressedError: string
          closeColorWarning: string
          closeColorHoverWarning: string
          closeColorPressedWarning: string
          closeColorLoading: string
          closeColorHoverLoading: string
          closeColorPressedLoading: string
          loadingColor: string
          lineHeight: string
          borderRadius: string
          margin: string
          padding: string
          maxWidth: string
          minWidth: string
          iconMargin: string
          closeMargin: string
          closeSize: string
          iconSize: string
          fontSize: string
        },
        any
      >
    >
    themeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Message',
          {
            textColor: string
            textColorInfo: string
            textColorSuccess: string
            textColorError: string
            textColorWarning: string
            textColorLoading: string
            color: string
            colorInfo: string
            colorSuccess: string
            colorError: string
            colorWarning: string
            colorLoading: string
            boxShadow: string
            boxShadowInfo: string
            boxShadowSuccess: string
            boxShadowError: string
            boxShadowWarning: string
            boxShadowLoading: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            iconColorLoading: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            closeColorLoading: string
            closeColorHoverLoading: string
            closeColorPressedLoading: string
            loadingColor: string
            lineHeight: string
            borderRadius: string
            margin: string
            padding: string
            maxWidth: string
            minWidth: string
            iconMargin: string
            closeMargin: string
            closeSize: string
            iconSize: string
            fontSize: string
          },
          any
        >
      >
    >
    builtinThemeOverrides: PropType<
      import('../../_mixins/use-theme').ExtractThemeOverrides<
        import('../../_mixins').Theme<
          'Message',
          {
            textColor: string
            textColorInfo: string
            textColorSuccess: string
            textColorError: string
            textColorWarning: string
            textColorLoading: string
            color: string
            colorInfo: string
            colorSuccess: string
            colorError: string
            colorWarning: string
            colorLoading: string
            boxShadow: string
            boxShadowInfo: string
            boxShadowSuccess: string
            boxShadowError: string
            boxShadowWarning: string
            boxShadowLoading: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            iconColorLoading: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            closeColorLoading: string
            closeColorHoverLoading: string
            closeColorPressedLoading: string
            loadingColor: string
            lineHeight: string
            borderRadius: string
            margin: string
            padding: string
            maxWidth: string
            minWidth: string
            iconMargin: string
            closeMargin: string
            closeSize: string
            iconSize: string
            fontSize: string
          },
          any
        >
      >
    >
  },
  {
    mergedClsPrefix: import('vue').ComputedRef<string>
    messageRefs: import('vue').Ref<{
      [x: string]: {
        key: string
        hide: () => void
        content?: ContentType | undefined
        duration?: number | undefined
        closable?: boolean | undefined
        keepAliveOnHover?: boolean | undefined
        type: MessageType
        icon?: (() => VNodeChild) | undefined
        showIcon?: boolean | undefined
        onClose?: (() => void) | undefined
        destroy: () => void
      }
    }>
    messageList: import('vue').Ref<
      {
        key: string
        content?: ContentType | undefined
        duration?: number | undefined
        closable?: boolean | undefined
        keepAliveOnHover?: boolean | undefined
        type: MessageType
        icon?: (() => VNodeChild) | undefined
        showIcon?: boolean | undefined
        onClose?: (() => void) | undefined
        destroy: () => void
      }[]
    >
    handleAfterLeave: (key: string) => void
  } & MessageApiInjection,
  unknown,
  {},
  {},
  import('vue').ComponentOptionsMixin,
  import('vue').ComponentOptionsMixin,
  Record<string, any>,
  string,
  import('vue').VNodeProps &
    import('vue').AllowedComponentProps &
    import('vue').ComponentCustomProps,
  Readonly<
    ExtractPropTypes<{
      to: PropType<string | HTMLElement>
      duration: {
        type: NumberConstructor
        default: number
      }
      keepAliveOnHover: BooleanConstructor
      max: NumberConstructor
      placement: {
        type: PropType<
          | 'bottom'
          | 'top'
          | 'top-left'
          | 'top-right'
          | 'bottom-left'
          | 'bottom-right'
        >
        default: string
      }
      closable: BooleanConstructor
      containerStyle: PropType<string | CSSProperties>
      theme: PropType<
        import('../../_mixins').Theme<
          'Message',
          {
            textColor: string
            textColorInfo: string
            textColorSuccess: string
            textColorError: string
            textColorWarning: string
            textColorLoading: string
            color: string
            colorInfo: string
            colorSuccess: string
            colorError: string
            colorWarning: string
            colorLoading: string
            boxShadow: string
            boxShadowInfo: string
            boxShadowSuccess: string
            boxShadowError: string
            boxShadowWarning: string
            boxShadowLoading: string
            iconColor: string
            iconColorInfo: string
            iconColorSuccess: string
            iconColorWarning: string
            iconColorError: string
            iconColorLoading: string
            closeColor: string
            closeColorHover: string
            closeColorPressed: string
            closeColorInfo: string
            closeColorHoverInfo: string
            closeColorPressedInfo: string
            closeColorSuccess: string
            closeColorHoverSuccess: string
            closeColorPressedSuccess: string
            closeColorError: string
            closeColorHoverError: string
            closeColorPressedError: string
            closeColorWarning: string
            closeColorHoverWarning: string
            closeColorPressedWarning: string
            closeColorLoading: string
            closeColorHoverLoading: string
            closeColorPressedLoading: string
            loadingColor: string
            lineHeight: string
            borderRadius: string
            margin: string
            padding: string
            maxWidth: string
            minWidth: string
            iconMargin: string
            closeMargin: string
            closeSize: string
            iconSize: string
            fontSize: string
          },
          any
        >
      >
      themeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Message',
            {
              textColor: string
              textColorInfo: string
              textColorSuccess: string
              textColorError: string
              textColorWarning: string
              textColorLoading: string
              color: string
              colorInfo: string
              colorSuccess: string
              colorError: string
              colorWarning: string
              colorLoading: string
              boxShadow: string
              boxShadowInfo: string
              boxShadowSuccess: string
              boxShadowError: string
              boxShadowWarning: string
              boxShadowLoading: string
              iconColor: string
              iconColorInfo: string
              iconColorSuccess: string
              iconColorWarning: string
              iconColorError: string
              iconColorLoading: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              closeColorInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              closeColorSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              closeColorError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeColorWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              closeColorLoading: string
              closeColorHoverLoading: string
              closeColorPressedLoading: string
              loadingColor: string
              lineHeight: string
              borderRadius: string
              margin: string
              padding: string
              maxWidth: string
              minWidth: string
              iconMargin: string
              closeMargin: string
              closeSize: string
              iconSize: string
              fontSize: string
            },
            any
          >
        >
      >
      builtinThemeOverrides: PropType<
        import('../../_mixins/use-theme').ExtractThemeOverrides<
          import('../../_mixins').Theme<
            'Message',
            {
              textColor: string
              textColorInfo: string
              textColorSuccess: string
              textColorError: string
              textColorWarning: string
              textColorLoading: string
              color: string
              colorInfo: string
              colorSuccess: string
              colorError: string
              colorWarning: string
              colorLoading: string
              boxShadow: string
              boxShadowInfo: string
              boxShadowSuccess: string
              boxShadowError: string
              boxShadowWarning: string
              boxShadowLoading: string
              iconColor: string
              iconColorInfo: string
              iconColorSuccess: string
              iconColorWarning: string
              iconColorError: string
              iconColorLoading: string
              closeColor: string
              closeColorHover: string
              closeColorPressed: string
              closeColorInfo: string
              closeColorHoverInfo: string
              closeColorPressedInfo: string
              closeColorSuccess: string
              closeColorHoverSuccess: string
              closeColorPressedSuccess: string
              closeColorError: string
              closeColorHoverError: string
              closeColorPressedError: string
              closeColorWarning: string
              closeColorHoverWarning: string
              closeColorPressedWarning: string
              closeColorLoading: string
              closeColorHoverLoading: string
              closeColorPressedLoading: string
              loadingColor: string
              lineHeight: string
              borderRadius: string
              margin: string
              padding: string
              maxWidth: string
              minWidth: string
              iconMargin: string
              closeMargin: string
              closeSize: string
              iconSize: string
              fontSize: string
            },
            any
          >
        >
      >
    }>
  >,
  {
    duration: number
    placement:
      | 'bottom'
      | 'top'
      | 'top-left'
      | 'top-right'
      | 'bottom-left'
      | 'bottom-right'
    closable: boolean
    keepAliveOnHover: boolean
  }
>
export default _default
