import { defineField, defineType } from 'sanity'

export const featuredRooms = defineType({
  name: 'featuredRooms',
  title: 'Featured Rooms',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Featured Rooms',
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'Featured Rooms',
    }),
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'string',
      initialValue: 'Each suite and room is thoughtfully designed with historic charm and modern comfort.',
    }),
    defineField({
      name: 'rooms',
      title: 'Rooms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Room Name', type: 'string' }),
            defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'features', title: 'Features', type: 'array', of: [{ type: 'string' }] }),
            defineField({ name: 'description', title: 'Description', type: 'text', rows: 3 }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
            defineField({ name: 'image', title: 'Room Image', type: 'image', options: { hotspot: true } }),
          ],
          preview: {
            select: { title: 'name' },
          },
        },
      ],
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})