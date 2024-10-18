import { useState, useEffect } from 'react';

interface Issue {
  title: string;
  description: string;
}

export default function PopularIssues() {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        // In a real application, this would be an API call
        const response = await fetch('/api/popular-issues');
        if (!response.ok) {
          throw new Error('Failed to fetch popular issues');
        }
        const data = await response.json();
        setIssues(data);
      } catch (err) {
        setError('Failed to load popular issues. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchIssues();
  }, []);

  if (isLoading) {
    return <div>Loading popular issues...</div>;
  }

  if (error) {
    return <div className="text-red-600">{error}</div>;
  }

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
  );
}