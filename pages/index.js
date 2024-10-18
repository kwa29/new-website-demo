import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import PopularIssues from '../components/PopularIssues'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Head>
        <title>Next.js Support Directory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-foreground">Next.js Support Directory</h1>
        <SearchBar />
        <PopularIssues />
      </main>
    </div>
  )
}