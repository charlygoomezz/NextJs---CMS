import type {Artist, Event, Home as HomeDoc, Seo} from '@/sanity.types'

type EventCard = Pick<Event, '_id' | 'title' | 'slug' | 'date' | 'status' | 'ticketUrl'>

type ArtistCard = Pick<Artist, '_id' | 'name' | 'slug' | 'genres'>

export type HomePage = Pick<HomeDoc, '_id' | 'title' | 'heroTagline'> & {
  featuredEvents?: EventCard[]
  featuredArtists?: ArtistCard[]
  seo?: Pick<Seo, 'title' | 'description'>
}
