# nomark

A utility to transform hypertext strings (e.g., HTML, Markdown) into plain text, which is useful for natural language processing (NLP) normalization.

## Install

```bash
npm install nomark
```

Or yarn:

```bash
yarn add nomark
```

Alternatively, you can also include this module directly in your HTML file from CDN:

```yml
UMD: https://cdn.jsdelivr.net/npm/nomark/dist/index.umd.js
ESM: https://cdn.jsdelivr.net/npm/nomark/+esm
CJS: https://cdn.jsdelivr.net/npm/nomark/dist/index.cjs
```

## Usage

````js
import nomark from 'nomark'

const hypertext =
  '# Café <em>du</em> Monde\n\nThis is some **bold**, _italic_, and ~~strikethrough~~ text.\n\n## Headers\n\n### This is an H3 header\n\n#### This is an H4 header\n\n##### This is an H5 header\n\n###### This is an H6 header\n\n## Lists\n\n### Unordered List\n\n- Item 1\n- Item 2\n  - Subitem A\n  - Subitem B\n    - Sub-subitem 1\n    - Sub-subitem 2\n\n### Ordered List\n\n1. First item\n2. Second item\n   1. Nested item\n   2. Another nested item\n\n## Links and Images\n\n[Example](https://example.com)\n\n![Example Logo](https://example.com/favicon.ico)\n\n## Blockquotes\n\n> This is a blockquote.\n>\n> - John Doe\n\n## Code Blocks\n\n```javascript\nfunction greet(name) {\n  console.log(`Hello, ${name}!`)\n}\n\ngreet(\'World\')\n```\n\n## Tables\n\n| Name | Age | Gender |\n| ---- | --- | ------ |\n| John | 30  | Male   |\n| Jane | 25  | Female |\n\n## Task Lists\n\n- [x] Task 1\n- [ ] Task 2\n- [x] Task 3\n\n## Emoji\n\n:smiley: :rocket: :book:\n\n## Strikethrough\n\n~~This text is strikethrough.~~\n\n## HTML tags\n\nThis is a <span style="color:red;">red</span> text.\n\n<p>This is a paragraph.</p>\n\n<blockquote>This is a blockquote in HTML.</blockquote>\n\n<ul>\n  <li>HTML List Item 1</li>\n  <li>HTML List Item 2</li>\n</ul>\n\n<img src="https://example.com/image.jpg" alt="Example Image">\n\n## GitHub Flavored Markdown (GFM) Features\n\n### Code Blocks with Language Highlighting\n\n```typescript\ninterface Person {\n  name: string\n  age: number\n}\n\nconst person: Person = {\n  name: \'John Doe\',\n  age: 30\n}\n```\n\n### Task Lists in Tables\n\n| Task   | Status |\n| ------ | ------ |\n| Task 1 | [x]    |\n| Task 2 | [ ]    |\n| Task 3 | [x]    |\n\n### Mentioning Users\n\nHey @username, could you take a look at this?\n\n### URLs Automatically Linked\n\nhttps://example.com/foo/bar\n\n### Strikethrough in Tables\n\n| Item       | Price  |\n| ---------- | ------ |\n| Apple      | $2     |\n| Banana     | $1     |\n| ~~Orange~~ | ~~$3~~ |\n\n### Emoji in Headers\n\n## :sparkles: Features :sparkles:'

const plaintext = nomark(hypertext, {
  stripMarkdown: true,
  stripHtml: true
})

console.log(plaintext)
````

<details>
<summary>See the results:</summary>

```text
Café du Monde.
This is some bold, italic, and strikethrough text.
Headers.
This is an H3 header.
This is an H4 header.
This is an H5 header.
This is an H6 header.
Lists.
Unordered List.
Item 1.
Item 2.
Subitem A.
Subitem B.
Sub-subitem 1.
Sub-subitem 2.
Ordered List.
First item.
Second item.
Nested item.
Another nested item.
Links and Images.
Example.
Example Logo.
Blockquotes.
This is a blockquote.
John Doe.
Code Blocks.
function greet(name) {
  console.log(`Hello, ${name}!`)
}

greet('World')
Tables.
Name, Age, Gender.
John, 30, Male.
Jane, 25, Female.
Task Lists.
Task 1.
Task 2.
Task 3.
Emoji.
:smiley: :rocket: :book:
Strikethrough.
This text is strikethrough.
HTML tags.
This is a red text.
This is a paragraph.
This is a blockquote in HTML.
HTML List Item 1
HTML List Item 2
GitHub Flavored Markdown (GFM) Features.
Code Blocks with Language Highlighting.
interface Person {
  name: string
  age: number
}

const person: Person = {
  name: 'John Doe',
  age: 30
}
Task Lists in Tables.
Task, Status.
Task 1, [x].
Task 2, [ ].
Task 3, [x].
Mentioning Users.
Hey @username, could you take a look at this?
URLs Automatically Linked.
https://example.com/foo/bar.
Strikethrough in Tables.
Item, Price.
Apple, $2.
Banana, $1.
Orange, $3.
Emoji in Headers.
:sparkles: Features :sparkles:
```

</details>

## API

### `nomark(input: string, options?: NomarkOptions): string`

This function transforms hypertext strings into plain text by applying [Unicode normalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize?retiredLocale=id#form), stripping HTML tags, and removing Markdown syntax.

- `input`: The hypertext strings to transform.
- `options` (optional): Options for transforming the input.
  - `form` (optional): The [Unicode normalization](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize?retiredLocale=id#form) form to apply. Defaults to `'NFC'`.
  - `stripHtml` (optional): Indicates whether to strip HTML tags from the text. Defaults to `false`.
  - `stripMarkdown` (optional): Indicates whether to strip Markdown syntax from the text. Defaults to `false`.

## Related

- [boox](https://github.com/bent10/boox) – Performing full-text search across multiple documents by combining [TF-IDF](https://en.wikipedia.org/wiki/Tf%E2%80%93idf) score with [inverted index](https://en.wikipedia.org/wiki/Inverted_index) weight.
- [stophtml](https://github.com/bent10/stophtml) – Extracts plain text from an HTML string.
- [stopmarkdown](https://github.com/bent10/stopmarkdown) – Extracts plain text from an Markdown strings.
- [stopword](https://github.com/fergiemcdowall/stopword) – Allows you to strip stopwords from an input text (supports a ton of languages).

## Contributing

We 💛&nbsp; issues.

When committing, please conform to [the semantic-release commit standards](https://www.conventionalcommits.org/). Please install `commitizen` and the adapter globally, if you have not already.

```bash
npm i -g commitizen cz-conventional-changelog
```

Now you can use `git cz` or just `cz` instead of `git commit` when committing. You can also use `git-cz`, which is an alias for `cz`.

```bash
git add . && git cz
```

## License

![GitHub](https://img.shields.io/github/license/bent10/nomark)

A project by [Stilearning](https://stilearning.com) &copy; 2024.
