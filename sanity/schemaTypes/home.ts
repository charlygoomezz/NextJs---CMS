import {defineField, defineType} from 'sanity'
import { House } from 'lucide-react'

export const home = defineType({
  name: 'home',
  title: 'Home',
  icon: House,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'heroTagline',
      title: 'Hero Tagline',
      type: 'string',
    }),
    defineField({
      name: 'featuredEvents',
      title: 'Featured Events',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'event'}]}],
    }),
    defineField({
      name: 'featuredArtists',
      title: 'Featured Artists',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'artist'}]}],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
  ],
})
