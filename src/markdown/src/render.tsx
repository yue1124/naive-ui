import { h, VNode } from 'vue'
import { NodeType, NodeWalker, Node } from 'commonmark'
import {
  NA,
  NBlockquote,
  NH1,
  NH2,
  NH3,
  NH4,
  NH5,
  NH6,
  NHr,
  NLi,
  NOl,
  NP,
  NText,
  NUl
} from '../../typography'
import { NCode } from '../../code'
import { NCard } from '../../card'
import { NScrollbar } from '../../scrollbar'
import { NImage } from '../../image'

export interface RenderOptions {
  softbreak: 'br' | 'n'
  inlinecode: string
  strong: 'html' | 'naive'
  emph: 'html' | 'naive'
  imgSrcPrefix: string | null
}

interface Renderer {
  render: (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ) => VNode | string
}

interface ContentRenderer extends Renderer {
  render: (node: Node, options: RenderOptions) => VNode | string
}

interface ContainerRenderer extends Renderer {
  render: (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ) => VNode
}

const blockQuoteRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    return h(<NBlockquote>{() => children}</NBlockquote>)
  }
}

const codeRenderer: ContentRenderer = {
  render (node: Node, options: RenderOptions): VNode {
    if (options.inlinecode === 'text') {
      return h(<NText code>{() => node.literal}</NText>)
    } else {
      return h(
        <NCode
          language={options.inlinecode}
          code={node.literal || undefined}
          inline
        />
      )
    }
  }
}

const codeBlockRenderer: ContentRenderer = {
  render (node: Node, options: RenderOptions): VNode {
    const info_words = node.info ? node.info.split(/\s+/) : []
    let language: string
    if (info_words.length > 0 && info_words[0].length > 0) {
      language = info_words[0]
    }

    return h(
      <NCard size="small">
        {{
          default: () => (
            <NScrollbar xScrollable>
              {{
                default: () => (
                  <div style="padding-bottom: 12px">
                    <NCode
                      language={language}
                      code={node.literal || undefined}
                    />
                  </div>
                )
              }}
            </NScrollbar>
          )
        }}
      </NCard>
    )
  }
}

const customBlockRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    return h(<div>{children}</div>)
  }
}

const customInlineRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    return h(<span>{children}</span>)
  }
}

const documentRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    return h(<div>{children}</div>)
  }
}

const emphRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    switch (options.emph) {
      case 'html':
        return h(<i>{children}</i>)
      case 'naive':
        return h(<NText italic>{() => children}</NText>)
    }
  }
}

const headingRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    switch (node.level) {
      case 1:
        return h(<NH1>{() => children}</NH1>)
      case 2:
        return h(<NH2>{() => children}</NH2>)
      case 3:
        return h(<NH3>{() => children}</NH3>)
      case 4:
        return h(<NH4>{() => children}</NH4>)
      case 5:
        return h(<NH5>{() => children}</NH5>)
      case 6:
        return h(<NH6>{() => children}</NH6>)
    }
  }
}

const htmlBlockRenderer: ContentRenderer = {
  render (node: Node): VNode {
    return h('div', { domProps: { innerHTML: node.literal } })
  }
}

const htmlInlineRenderer: ContentRenderer = {
  render (node: Node): VNode {
    return h('span', { domProps: { innerHTML: node.literal } })
  }
}

const imageRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    let alt
    let height: string = ''
    let width: string = ''
    if (
      children.length > 0 &&
      typeof children[0] === 'string' &&
      children[0].length > 0
    ) {
      alt = children[0]
      let pos = alt.search(';')
      while (pos !== -1) {
        const info = alt.slice(0, pos)
        if (info.startsWith('w:')) {
          width = info.slice(2)
        } else if (info.startsWith('h:')) {
          height = info.slice(2)
        }
        alt = alt.slice(pos + 1)
        pos = alt.search(';')
      }
    }

    let src = node.destination
    if (src === null || src.length === 0) {
      return h(<div>![{alt}]()</div>)
    } else {
      if (
        options.imgSrcPrefix &&
        options.imgSrcPrefix.length > 0 &&
        !src.startsWith('http://') &&
        !src.startsWith('https://')
      ) {
        src = src.startsWith('/')
          ? `${options.imgSrcPrefix}${src}`
          : `${options.imgSrcPrefix}/${src}`
      }
      return h(
        NImage,
        { alt, height, width, src, previewDisabled: true },
        () => {}
      )
    }
  }
}

const itemRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    return h(<NLi>{() => children}</NLi>)
  }
}

const linebreakRenderer: ContentRenderer = {
  render (): VNode {
    return h(<br />)
  }
}

const linkRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    let title: string
    if (
      children.length > 0 &&
      typeof children[0] === 'string' &&
      children[0].length > 0
    ) {
      title = children[0]
    }

    return h(NA, { href: node.destination, title: node.title }, () => title)
  }
}

const listRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    switch (node.listType) {
      case 'bullet':
        return h(<NUl>{() => children}</NUl>)
      case 'ordered':
        return h(<NOl>{() => children}</NOl>)
    }
  }
}

const paragraphRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    return h(<NP>{() => children}</NP>)
  }
}

const softbreakRenderer: ContentRenderer = {
  render (node: Node, options: RenderOptions): VNode | string {
    switch (options.softbreak) {
      case 'br':
        return h(<br />)
      case 'n':
        return '\n'
    }
  }
}

const strongRenderer: ContainerRenderer = {
  render (
    node: Node,
    options: RenderOptions,
    children: Array<VNode | string>
  ): VNode {
    switch (options.strong) {
      case 'html':
        return h(<strong>{children}</strong>)
      case 'naive':
        return h(<NText strong>{() => children}</NText>)
    }
  }
}

const textRenderer: ContentRenderer = {
  render (node: Node): string {
    return node.literal || ''
  }
}

const thematicBreakRenderer: ContentRenderer = {
  render (): VNode {
    return h(<NHr />)
  }
}

function createRenderer (type: NodeType): Renderer {
  switch (type) {
    case 'block_quote':
      return blockQuoteRenderer
    case 'code':
      return codeRenderer
    case 'code_block':
      return codeBlockRenderer
    case 'custom_block':
      return customBlockRenderer
    case 'custom_inline':
      return customInlineRenderer
    case 'document':
      return documentRenderer
    case 'emph':
      return emphRenderer
    case 'heading':
      return headingRenderer
    case 'html_block':
      return htmlBlockRenderer
    case 'html_inline':
      return htmlInlineRenderer
    case 'image':
      return imageRenderer
    case 'item':
      return itemRenderer
    case 'linebreak':
      return linebreakRenderer
    case 'link':
      return linkRenderer
    case 'list':
      return listRenderer
    case 'paragraph':
      return paragraphRenderer
    case 'softbreak':
      return softbreakRenderer
    case 'strong':
      return strongRenderer
    case 'text':
      return textRenderer
    case 'thematic_break':
      return thematicBreakRenderer
  }
}

export function render (
  walker: NodeWalker,
  options: RenderOptions
): VNode | string | false {
  const event = walker.next()
  if (event === null) {
    return false
  }

  const entering = event.entering
  if (!entering) {
    return false
  }

  const node = event.node
  const type = node.type

  const renderer = createRenderer(type)

  if (!node.isContainer) {
    return renderer.render(node, options, [])
  }

  const children = []
  while (true) {
    const child = render(walker, options)
    if (child) {
      children.push(child)
    } else {
      break
    }
  }

  return renderer.render(node, options, children)
}
