import Head from 'next/head'
import SearchBar from '../components/SearchBar'
import PopularIssues from '../components/PopularIssues'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Car Listings - European Cars First</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Car Listings - European Cars First</h1>
        <SearchBar />
        <PopularIssues />
      </main>
    </div>
  )
}