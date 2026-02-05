import {groq} from 'next-sanity'

export const homePageQuery = groq`
	*[_type == "home"][0] {
		_id,
		title,
		heroTagline,
		"featuredEvents": featuredEvents[]-> {
			_id,
			title,
			"slug": slug.current,
			date,
			status,
			ticketUrl
		},
		"featuredArtists": featuredArtists[]-> {
			_id,
			name,
			"slug": slug.current,
			genres
		},
		seo {
			title,
			description
		}
	}
`
