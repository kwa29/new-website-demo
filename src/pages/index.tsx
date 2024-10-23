import { Layout } from '../components/Layout';
import { SearchBar } from '../components/SearchBar';
import { PopularIssues } from '../components/PopularIssues';

export default function Home() {
  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-xl text-gray-600 mb-6">
            Find solutions to common Next.js development issues
          </h2>
          <SearchBar />
        </div>
        
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900">Popular Issues</h2>
          <PopularIssues />
        </section>
      </div>
    </Layout>
  );
}