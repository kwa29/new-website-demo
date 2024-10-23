import { Issue } from '../types/issues';

interface IssueCardProps {
  issue: Issue;
}

export const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white">
      <h3 className="text-xl font-semibold text-gray-900">{issue.title}</h3>
      <p className="text-gray-600 mt-2 text-sm leading-relaxed">{issue.description}</p>
      <div className="mt-4 flex items-center justify-between">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
          {issue.category}
        </span>
        <div className="flex items-center text-sm text-gray-500">
          <svg
            className="h-4 w-4 mr-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          {issue.views.toLocaleString()} views
        </div>
      </div>
    </div>
  );
};