import { Link } from 'react-router-dom';
import useAnalytics from '../hooks/useAnalytics';

interface AnalyticsProps {
  handle: string;
}

const Analytics = ({ handle }: AnalyticsProps) => {
  const { 
    pageViews, 
    uniqueVisitors, 
    browsers, 
    locations, 
    linkClicks, 
    isLoading, 
    error 
  } = useAnalytics(handle);
  
  // Calculate browser percentages
  const totalBrowsers = Object.values(browsers).reduce((sum, count) => sum + count, 0);
  
  // Calculate location percentages
  const totalLocations = Object.values(locations).reduce((sum, count) => sum + count, 0);
  
  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Analytics for @{handle}</h1>
          <Link 
            to={`/${handle}`}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            Back to Profile
          </Link>
        </div>
        <div className="text-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading analytics data...</p>
        </div>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Analytics for @{handle}</h1>
          <Link 
            to={`/${handle}`}
            className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
          >
            Back to Profile
          </Link>
        </div>
        <div className="bg-red-50 border border-red-200 text-red-700 p-4 rounded-lg">
          <p>{error}</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Analytics for @{handle}</h1>
        <Link 
          to={`/${handle}`}
          className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
        >
          Back to Profile
        </Link>
      </div>
      
      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Page Views</h2>
          <p className="text-3xl font-bold text-indigo-600">{pageViews.toLocaleString()}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Unique Visitors</h2>
          <p className="text-3xl font-bold text-indigo-600">{uniqueVisitors.toLocaleString()}</p>
        </div>
      </div>
      
      {/* Browser Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Browser Breakdown</h2>
        <div className="space-y-3">
          {Object.entries(browsers).map(([browser, count]) => {
            const percentage = totalBrowsers > 0 ? (count / totalBrowsers) * 100 : 0;
            return (
              <div key={browser}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">{browser}</span>
                  <span className="text-sm text-gray-500">{percentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-indigo-600 h-2 rounded-full" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Geographic Breakdown */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Geographic Breakdown</h2>
        <div className="space-y-3">
          {Object.entries(locations).map(([location, count]) => {
            const percentage = totalLocations > 0 ? (count / totalLocations) * 100 : 0;
            return (
              <div key={location}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">{location}</span>
                  <span className="text-sm text-gray-500">{percentage.toFixed(1)}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-green-500 h-2 rounded-full" 
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
      {/* Link Clicks */}
      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Link Clicks</h2>
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="text-left text-sm font-medium text-gray-500">Link ID</th>
              <th className="text-right text-sm font-medium text-gray-500">Clicks</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {Object.entries(linkClicks).map(([linkId, count]) => (
              <tr key={linkId}>
                <td className="py-3 text-sm text-gray-800">{linkId}</td>
                <td className="py-3 text-sm text-gray-800 text-right">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Analytics; 