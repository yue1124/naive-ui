import type { ExtractPublicPropTypes } from '../../_utils'
declare const typeProps: {
  readonly label: import('vue').PropType<
    | string
    | number
    | import('vue').VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any
        }
      >
    | (() => import('vue').VNodeChild)
  >
  readonly name: {
    readonly type: import('vue').PropType<string | number>
    readonly required: true
  }
  readonly tab: import('vue').PropType<
    | string
    | number
    | import('vue').VNode<
        import('vue').RendererNode,
        import('vue').RendererElement,
        {
          [key: string]: any
        }
      >
    | (() => import('vue').VNodeChild)
  >
  readonly disabled: BooleanConstructor
  readonly closable: {
    readonly type: import('vue').PropType<boolean | undefined>
    readonly default: undefined
  }
  readonly tabProps: import('vue').PropType<import('vue').HTMLAttributes>
  readonly internalLeftPadded: BooleanConstructor
  readonly internalAddable: BooleanConstructor
  readonly internalCreatedByPane: BooleanConstructor
}
export declare type TabProps = ExtractPublicPropTypes<typeof typeProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly label: import('vue').PropType<
      | string
      | number
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => import('vue').VNodeChild)
    >
    readonly name: {
      readonly type: import('vue').PropType<string | number>
      readonly required: true
    }
    readonly tab: import('vue').PropType<
      | string
      | number
      | import('vue').VNode<
          import('vue').RendererNode,
          import('vue').RendererElement,
          {
            [key: string]: any
          }
        >
      | (() => import('vue').VNodeChild)
    >
    readonly disabled: BooleanConstructor
    readonly closable: {
      readonly type: import('vue').PropType<boolean | undefined>
      readonly default: undefined
    }
    readonly tabProps: import('vue').PropType<import('vue').HTMLAttributes>
    readonly internalLeftPadded: BooleanConstructor
    readonly internalAddable: BooleanConstructor
    readonly internalCreatedByPane: BooleanConstructor
  },
  {
    trigger: import('vue').Ref<'click' | 'hover'>
    mergedClosable: import('vue').ComputedRef<boolean>
    style: import('vue').Ref<string | import('vue').CSSProperties | undefined>
    clsPrefix: import('vue').Ref<string>
    value: import('vue').Ref<string | number | null>
    type: import('vue').Ref<import('./interface').TabsType>
    handleClose(e: MouseEvent): void
    activateTab(): void
  },
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
    import('vue').ExtractPropTypes<{
      readonly label: import('vue').PropType<
        | string
        | number
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => import('vue').VNodeChild)
      >
      readonly name: {
        readonly type: import('vue').PropType<string | number>
        readonly required: true
      }
      readonly tab: import('vue').PropType<
        | string
        | number
        | import('vue').VNode<
            import('vue').RendererNode,
            import('vue').RendererElement,
            {
              [key: string]: any
            }
          >
        | (() => import('vue').VNodeChild)
      >
      readonly disabled: BooleanConstructor
      readonly closable: {
        readonly type: import('vue').PropType<boolean | undefined>
        readonly default: undefined
      }
      readonly tabProps: import('vue').PropType<import('vue').HTMLAttributes>
      readonly internalLeftPadded: BooleanConstructor
      readonly internalAddable: BooleanConstructor
      readonly internalCreatedByPane: BooleanConstructor
    }>
  >,
  {
    disabled: boolean
    closable: boolean | undefined
    internalLeftPadded: boolean
    internalAddable: boolean
    internalCreatedByPane: boolean
  }
>
export default _default
