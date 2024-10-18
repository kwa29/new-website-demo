const issues = [
  {
    title: 'BMW 3 Series',
    description: 'Luxury compact sedan',
    region: 'Europe'
  },
  {
    title: 'Toyota Camry',
    description: 'Midsize sedan',
    region: 'Asia'
  },
  {
    title: 'Mercedes-Benz E-Class',
    description: 'Executive sedan',
    region: 'Europe'
  },
  {
    title: 'Ford Mustang',
    description: 'Sports car',
    region: 'America'
  },
  {
    title: 'Audi A4',
    description: 'Compact luxury sedan',
    region: 'Europe'
  },
  // Add more cars as needed
]

const sortedIssues = [...issues].sort((a, b) => {
  if (a.region === 'Europe' && b.region !== 'Europe') return -1;
  if (a.region !== 'Europe' && b.region === 'Europe') return 1;
  return 0;
});

export default function PopularIssues() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Car Listings</h2>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sortedIssues.map((issue, index) => (
          <li key={index} className="bg-white rounded-lg shadow p-4 transition duration-300 ease-in-out hover:shadow-lg hover:bg-gray-50">
            <div className="flex justify-between items-start">
              <h3 className="text-lg font-medium">{issue.title}</h3>
              {issue.region === 'Europe' && (
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">European</span>
              )}
            </div>
            <p className="text-gray-600 mt-1">{issue.description}</p>
            <p className="text-sm text-gray-500 mt-2">Region: {issue.region}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}