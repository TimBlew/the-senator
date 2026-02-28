import { defineField, defineType } from 'sanity'

export const finalCta = defineType({
  name: 'finalCta',
  title: 'Final CTA',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Document Title',
      type: 'string',
      initialValue: 'Final CTA',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      initialValue: 'Ready to stay with us?',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'text',
      rows: 2,
      initialValue: 'Explore our rooms and check availability for your perfect mountain getaway.',
    }),
    defineField({
      name: 'ctaText',
      title: 'Button Text',
      type: 'string',
      initialValue: 'Check availability',
    }),
    defineField({
      name: 'ctaHref',
      title: 'Button Link',
      type: 'string',
      initialValue: '#',
    }),
  ],
  preview: {
    select: { title: 'title' },
  },
})