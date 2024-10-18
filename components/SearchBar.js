import { useState } from 'react'

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSearch = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      console.log('Searching for:', searchTerm)
      // Implement actual search functionality here
    } catch (err) {
      setError('An error occurred while searching. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mb-8">
      <form onSubmit={handleSearch}>
        <label htmlFor="search" className="sr-only">Search issues</label>
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-input bg-background text-foreground shadow-sm focus:border-primary focus:ring-primary"
          placeholder="Search for issues..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          disabled={isLoading}
          aria-label="Search for issues"
          aria-describedby="search-description"
        />
        <p id="search-description" className="sr-only">
          Enter keywords to search for common Next.js development issues
        </p>
      </form>
      {isLoading && <p className="mt-2 text-muted-foreground">Searching...</p>}
      {error && <p className="mt-2 text-destructive">{error}</p>}
    </div>
  )
}