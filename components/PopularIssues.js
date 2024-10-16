const issues = [
  {
    title: 'How to handle API routes in Next.js',
    description: 'Learn how to create and use API routes in your Next.js application.'
  },
  {
    title: 'Implementing server-side rendering (SSR)',
    description: 'Understand the basics of SSR and how to implement it in Next.js.'
  },
  {
    title: 'Managing state with React hooks',
    description: 'Explore various React hooks for efficient state management in Next.js.'
  },
  // Add more issues as needed
]

export default function PopularIssues() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Popular Issues</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {issues.map((issue, index) => (
          <li key={index} className="bg-white rounded-lg shadow p-4 transition duration-300 ease-in-out hover:shadow-lg hover:bg-gray-50">
            <h3 className="text-lg font-medium">{issue.title}</h3>
            <p className="text-gray-600 mt-1">{issue.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}