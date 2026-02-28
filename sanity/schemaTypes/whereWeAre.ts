import { defineField, defineType } from 'sanity'

export const whereWeAre = defineType({
  name: 'whereWeAre',
  title: 'Where We Are',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Where We Are',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Where We Are',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
      initialValue: 'Nestled in the heart of Heber Valley, surrounded by four world-class ski resorts and the natural beauty of Utah mountains.',
    }),
    defineField({
      name: 'mapImage',
      title: 'Map Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string' }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})