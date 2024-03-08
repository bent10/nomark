import stophtml from 'stophtml'
import stopmarkdown from 'stopmarkdown'

/**
 * Options for converting hypertext to plaintext.
 */
export interface NomarkOptions {
  /**
   * The [Unicode normalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize?retiredLocale=id#form) form to apply.
   *
   * @default 'NFC'
   */
  form?: 'NFC' | 'NFD' | 'NFKC' | 'NFKD'

  /**
   * Indicates whether to strip HTML tags from the text.
   *
   * @default false
   */
  stripHtml?: boolean

  /**
   * Indicates whether to strip Markdown syntax from the text.
   *
   * @default false
   */
  stripMarkdown?: boolean
}

/**
 * Transforms hypertext strings into plain text by applying [Unicode normalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize?retiredLocale=id#form),
 * stripping HTML tags, and removing Markdown syntax.
 *
 * @param input - The hypertext strings to transform.
 * @param options - Options for transforming the input.
 * @returns The transformed text.
 */
export default function nomark(input: string, options: NomarkOptions = {}) {
  const { form = 'NFC', stripHtml = false, stripMarkdown = false } = options

  let result = input.trim().normalize(form)

  if (stripMarkdown) {
    result = stopmarkdown(result).join('\n')
  }

  if (stripHtml) {
    result = stophtml(result).join('\n')
  }

  return result
}
