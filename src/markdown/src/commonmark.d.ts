declare module 'commonmark' {
  export type NodeType =
    | 'text'
    | 'softbreak'
    | 'linebreak'
    | 'emph'
    | 'strong'
    | 'html_inline'
    | 'link'
    | 'image'
    | 'code'
    | 'document'
    | 'paragraph'
    | 'block_quote'
    | 'item'
    | 'list'
    | 'heading'
    | 'code_block'
    | 'html_block'
    | 'thematic_break'
    | 'custom_inline'
    | 'custom_block'

  export interface NodeWalkerNext {
    entering: boolean
    node: Node
  }

  export interface NodeWalker {
    next: () => NodeWalkerNext | null
  }

  export class Node {
    readonly isContainer: boolean
    readonly type: NodeType

    literal: string | null
    info: string | null
    destination: string | null
    title: string | null
    level: 1 | 2 | 3 | 4 | 5 | 6
    listType: 'bullet' | 'ordered'

    walker (): NodeWalker
  }

  export class Parser {
    parse (input: string): Node
  }
}
