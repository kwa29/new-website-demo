import { popularIssues } from '../data/popularIssues';
import { IssueCard } from './IssueCard';

export const PopularIssues = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {popularIssues.map((issue) => (
        <IssueCard key={issue.id} issue={issue} />
      ))}
    </div>
  );
};