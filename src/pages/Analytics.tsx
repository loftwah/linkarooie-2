import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Analytics() {
  const { username } = useParams<{ username: string }>();
  const totalViews = 1024; // Replace with actual data
  const uniqueVisitors = 342; // Replace with actual data
  const avgTimeOnPage = 45; // Replace with actual data
  const linkStats = [
    { title: "GitHub", clicks: 156, ctr: "12.4%" },
    { title: "LinkedIn", clicks: 89, ctr: "8.7%" },
    { title: "Twitter", clicks: 203, ctr: "19.8%" }
  ]; // Replace with actual data

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-6">
          <Link 
            to={`/${username}`} 
            className="flex items-center text-blue-500 dark:text-lime-300 hover:text-blue-600 dark:hover:text-lime-400 transition-colors"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
            Back to Profile
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Analytics for {username}</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Total Views</h2>
            <p className="text-3xl font-bold text-blue-500 dark:text-lime-400">{totalViews}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Unique Visitors</h2>
            <p className="text-3xl font-bold text-blue-500 dark:text-lime-400">{uniqueVisitors}</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">Avg. Time on Page</h2>
            <p className="text-3xl font-bold text-blue-500 dark:text-lime-400">{avgTimeOnPage}s</p>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Traffic Over Time</h2>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-6 rounded-lg shadow">
            <div className="h-80">
              {/* Chart component would go here */}
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">Links Performance</h2>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100 dark:bg-gray-700">
                <tr>
                  <th className="text-left p-4 text-gray-700 dark:text-gray-300">Link</th>
                  <th className="text-left p-4 text-gray-700 dark:text-gray-300">Clicks</th>
                  <th className="text-left p-4 text-gray-700 dark:text-gray-300">CTR</th>
                </tr>
              </thead>
              <tbody>
                {linkStats.map((link, index) => (
                  <tr key={index} className="border-t border-gray-200 dark:border-gray-700">
                    <td className="p-4 text-gray-800 dark:text-gray-200">{link.title}</td>
                    <td className="p-4 text-gray-800 dark:text-gray-200">{link.clicks}</td>
                    <td className="p-4 text-gray-800 dark:text-gray-200">{link.ctr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 