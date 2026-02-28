import { defineField, defineType } from 'sanity'

export const descriptionSection = defineType({
  name: 'descriptionSection',
  title: 'Description Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Description Section',
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
      rows: 5,
      initialValue: 'Built in 1902 by Utah State Senator Joseph Murdock...',
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})