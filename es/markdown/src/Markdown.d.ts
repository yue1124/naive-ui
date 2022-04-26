/// <reference path="../../../src/markdown/src/commonmark.d.ts" />
import { PropType } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
declare const markdownProps: {
  readonly value: StringConstructor
  readonly softbreak: {
    readonly type: PropType<'br' | 'n'>
    readonly default: 'br'
  }
  readonly inlinecode: {
    readonly type: StringConstructor
    readonly default: 'text'
  }
  readonly strong: {
    readonly type: PropType<'html' | 'naive'>
    readonly default: 'html'
  }
  readonly emph: {
    readonly type: PropType<'html' | 'naive'>
    readonly default: 'html'
  }
  readonly imgSrcPrefix: {
    readonly type: PropType<string | null>
    readonly default: null
  }
}
export declare type MarkdownProps = ExtractPublicPropTypes<typeof markdownProps>
declare const _default: import('vue').DefineComponent<
  {
    readonly value: StringConstructor
    readonly softbreak: {
      readonly type: PropType<'br' | 'n'>
      readonly default: 'br'
    }
    readonly inlinecode: {
      readonly type: StringConstructor
      readonly default: 'text'
    }
    readonly strong: {
      readonly type: PropType<'html' | 'naive'>
      readonly default: 'html'
    }
    readonly emph: {
      readonly type: PropType<'html' | 'naive'>
      readonly default: 'html'
    }
    readonly imgSrcPrefix: {
      readonly type: PropType<string | null>
      readonly default: null
    }
  },
  {
    ast: import('vue').ComputedRef<import('commonmark').Node>
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
      readonly value: StringConstructor
      readonly softbreak: {
        readonly type: PropType<'br' | 'n'>
        readonly default: 'br'
      }
      readonly inlinecode: {
        readonly type: StringConstructor
        readonly default: 'text'
      }
      readonly strong: {
        readonly type: PropType<'html' | 'naive'>
        readonly default: 'html'
      }
      readonly emph: {
        readonly type: PropType<'html' | 'naive'>
        readonly default: 'html'
      }
      readonly imgSrcPrefix: {
        readonly type: PropType<string | null>
        readonly default: null
      }
    }>
  >,
  {
    strong: 'html' | 'naive'
    softbreak: 'br' | 'n'
    emph: 'html' | 'naive'
    inlinecode: string
    imgSrcPrefix: string | null
  }
>
export default _default
