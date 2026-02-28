import { defineField, defineType } from 'sanity'

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'The Heber Senator',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 3,
      initialValue: 'A historic bed & breakfast shaped by the pace of Heber Valley and the mountains that surround it.',
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary Button Text',
      type: 'string',
      initialValue: 'View Our Rooms',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary Button Text',
      type: 'string',
      initialValue: 'Book your stay',
    }),
  ],
  preview: {
    select: { title: 'heading' },
  },
})