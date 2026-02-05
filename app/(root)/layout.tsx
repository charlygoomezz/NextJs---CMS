import {ClerkProvider} from '@clerk/nextjs'
import React from 'react'

export default function appLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <div className="min-h-screen">
       

        <main className="min-h-screen">
          <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-28">
            {children}
          </div>
        </main>
      </div>
    </ClerkProvider>
  )
}
