import { defineField, defineType } from 'sanity'

export const ourStory = defineType({
  name: 'ourStory',
  title: 'Our Story',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Our Story',
    }),
    defineField({
      name: 'body',
      title: 'Body Text',
      type: 'text',
      rows: 4,
      initialValue: 'Built in 1902 by Utah State Senator Joseph R. Murdock for his wife Margaret and eleven children, the Heber Senator preserves the character and warmth of its historic origins.',
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Learn about our story',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Button Link',
      type: 'string',
      initialValue: '/our-story',
    }),
    defineField({
      name: 'images',
      title: 'Images (3)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
      validation: Rule => Rule.max(3),
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})