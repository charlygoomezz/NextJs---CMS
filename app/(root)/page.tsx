import NavBar from '@/components/Shared/NavBar'
import {homePageQuery} from '@/lib/sanity/queries/home'
import type {HomePage} from '@/lib/sanity/types'
import {client} from '@/sanity/lib/client'

export default async function Home() {
  const data = await client.fetch<HomePage | null>(homePageQuery)

  return (
    <main className="space-y-12">
     <NavBar/>
    </main>
  )
}
