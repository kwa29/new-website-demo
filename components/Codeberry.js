import { useState } from 'react'

export default function Codeberry() {
  const [codeSnippet, setCodeSnippet] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    try {
      const response = await fetch('/api/process-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ codeSnippet }),
      })
      const data = await response.json()
      setResult(data.result)
    } catch (error) {
      console.error('Error processing code:', error)
      setError('An error occurred while processing the code.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-4">Codeberry</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="codeSnippet" className="block mb-2">
          Enter your code snippet:
        </label>
        <textarea
          id="codeSnippet"
          className="w-full p-2 border rounded"
          rows="5"
          value={codeSnippet}
          onChange={(e) => setCodeSnippet(e.target.value)}
          placeholder="Enter your code snippet here..."
          aria-label="Code snippet input"
        />
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-blue-300"
          disabled={isLoading}
        >
          {isLoading ? 'Processing...' : 'Submit'}
        </button>
      </form>
      {error && <p className="mt-2 text-red-600">{error}</p>}
      {result && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold">Result:</h3>
          <pre className="bg-gray-100 p-2 rounded">{result}</pre>
        </div>
      )}
    </div>
  )
}