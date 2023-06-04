import { defineDocumentType, makeSource } from '@contentlayer/source-files'
import { format } from 'date-fns';

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/doc/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
  shortDate: {
    type: "string",
    resolve: (doc) => format(new Date(doc.date), 'yyMMdd'),
  }
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: false },
  },
  computedFields,
  // computedFields: {
  //   url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
  // },
}))

export default makeSource({ contentDirPath: 'content', documentTypes: [Post] })