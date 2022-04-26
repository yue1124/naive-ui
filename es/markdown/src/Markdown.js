import { Parser } from 'commonmark'
import { computed, defineComponent, h } from 'vue'
import { render } from './render'
const markdownProps = {
  value: String,
  softbreak: {
    type: String,
    default: 'br'
  },
  inlinecode: {
    type: String,
    default: 'text'
  },
  strong: {
    type: String,
    default: 'html'
  },
  emph: {
    type: String,
    default: 'html'
  },
  imgSrcPrefix: {
    type: String,
    default: null
  }
}
export default defineComponent({
  name: 'Markdown',
  props: markdownProps,
  setup(props) {
    const parser = new Parser()
    const ast = computed(() => {
      return parser.parse(props.value || '')
    })
    return {
      ast
    }
  },
  render() {
    const options = {
      softbreak: this.softbreak,
      inlinecode: this.inlinecode,
      strong: this.strong,
      emph: this.emph,
      imgSrcPrefix: this.imgSrcPrefix
    }
    const walker = this.ast.walker()
    const result = render(walker, options)
    return result || h(h('div', null, 'Some thing Wrong'))
  }
})
