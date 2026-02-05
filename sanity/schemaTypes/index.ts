import type {SchemaTypeDefinition} from 'sanity'

import {artist} from './artist'
import {event} from './event'
import {home} from './home'
import {post} from './post'
import {seo} from './seo'
import {socialPost} from './socialPost'
import {venue} from './venue'

export const schema: {types: SchemaTypeDefinition[]} = {
  types: [seo, artist, venue, event, post, socialPost, home],
}
