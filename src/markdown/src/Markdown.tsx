import { Parser } from 'commonmark'
import { computed, defineComponent, h, PropType } from 'vue'
import { ExtractPublicPropTypes } from '../../_utils'
import { render, RenderOptions } from './render'

const markdownProps = {
  value: String,
  softbreak: {
    type: String as PropType<'br' | 'n'>,
    default: 'br'
  },
  inlinecode: {
    type: String,
    default: 'text'
  },
  strong: {
    type: String as PropType<'html' | 'naive'>,
    default: 'html'
  },
  emph: {
    type: String as PropType<'html' | 'naive'>,
    default: 'html'
  },
  imgSrcPrefix: {
    type: String as PropType<string | null>,
    default: null
  }
} as const

export type MarkdownProps = ExtractPublicPropTypes<typeof markdownProps>

export default defineComponent({
  name: 'Markdown',
  props: markdownProps,
  setup (props) {
    const parser = new Parser()
    const ast = computed(() => {
      return parser.parse(props.value || '')
    })

    return {
      ast
    }
  },
  render () {
    const options: RenderOptions = {
      softbreak: this.softbreak,
      inlinecode: this.inlinecode,
      strong: this.strong,
      emph: this.emph,
      imgSrcPrefix: this.imgSrcPrefix
    }
    const walker = this.ast.walker()
    const result = render(walker, options)

    return result || h(<div>Some thing Wrong</div>)
  }
})
