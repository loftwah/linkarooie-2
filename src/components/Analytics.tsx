import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAnalytics from '../hooks/useAnalytics';

interface AnalyticsProps {
  handle: string;
}

const Analytics: React.FC<AnalyticsProps> = ({ handle }) => {
  const { 
    pageViews, 
    uniqueVisitors, 
    browsers, 
    locations, 
    linkClicks, 
    isLoading, 
    error 
  } = useAnalytics(handle);
  
  const [timeRange, setTimeRange] = useState('week');
  
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
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <h1 className="text-2xl font-bold mb-4 sm:mb-0 text-foreground dark:text-white">Analytics Dashboard</h1>
          
          <div className="flex items-center bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg p-1">
            <button 
              className={`px-3 py-1 text-sm rounded-md ${timeRange === 'day' ? 'bg-primary text-white' : 'text-foreground dark:text-white'}`}
              onClick={() => setTimeRange('day')}
            >
              Day
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded-md ${timeRange === 'week' ? 'bg-primary text-white' : 'text-foreground dark:text-white'}`}
              onClick={() => setTimeRange('week')}
            >
              Week
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded-md ${timeRange === 'month' ? 'bg-primary text-white' : 'text-foreground dark:text-white'}`}
              onClick={() => setTimeRange('month')}
            >
              Month
            </button>
            <button 
              className={`px-3 py-1 text-sm rounded-md ${timeRange === 'year' ? 'bg-primary text-white' : 'text-foreground dark:text-white'}`}
              onClick={() => setTimeRange('year')}
            >
              Year
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm p-4">
            <div className="text-muted dark:text-muted/80 text-sm font-medium mb-2">Total Clicks</div>
            <div className="text-2xl font-bold text-foreground dark:text-white">{pageViews.toLocaleString()}</div>
            <div className="text-primary dark:text-primary/80 text-sm font-medium mt-2">
              <i className="fas fa-arrow-up mr-1"></i>
              8.2% from last {timeRange}
            </div>
          </div>
          
          <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm p-4">
            <div className="text-muted dark:text-muted/80 text-sm font-medium mb-2">Unique Visitors</div>
            <div className="text-2xl font-bold text-foreground dark:text-white">{uniqueVisitors.toLocaleString()}</div>
            <div className="text-primary dark:text-primary/80 text-sm font-medium mt-2">
              <i className="fas fa-arrow-up mr-1"></i>
              5.3% from yesterday
            </div>
          </div>
          
          <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm p-4">
            <div className="text-muted dark:text-muted/80 text-sm font-medium mb-2">Top Performing Link</div>
            <div className="text-2xl font-bold text-foreground dark:text-white">Portfolio Website</div>
            <div className="text-primary dark:text-primary/80 text-sm font-medium mt-2">
              <i className="fas fa-check-circle mr-1"></i>
              4,289 clicks this {timeRange}
            </div>
          </div>
          
          <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm p-4">
            <div className="text-muted dark:text-muted/80 text-sm font-medium mb-2">Average CTR</div>
            <div className="text-2xl font-bold text-foreground dark:text-white">3.2%</div>
            <div className="text-primary dark:text-primary/80 text-sm font-medium mt-2">
              <i className="fas fa-arrow-up mr-1"></i>
              0.8% from last {timeRange}
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-white">Clicks Over Time</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {/* Implement clicks by day graph */}
            </div>
          </div>
          
          <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-white">Browser Distribution</h3>
            <div className="space-y-4">
              {browsers && Object.entries(browsers).map(([browser, count]) => {
                const percentage = totalBrowsers > 0 ? (count / totalBrowsers) * 100 : 0;
                return (
                  <div key={browser} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground dark:text-white">{browser}</span>
                      <span className="text-muted dark:text-muted/80">{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-primary dark:bg-primary/80 h-2 rounded-full" 
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        <div className="bg-background dark:bg-gray-800 border border-border dark:border-gray-700 rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4 text-foreground dark:text-white">Traffic Sources</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border dark:border-gray-700">
                  <th className="py-3 px-4 text-left text-foreground dark:text-white">Source</th>
                  <th className="py-3 px-4 text-right text-foreground dark:text-white">Clicks</th>
                  <th className="py-3 px-4 text-right text-foreground dark:text-white">Percentage</th>
                </tr>
              </thead>
              <tbody>
                {/* Implement traffic sources table */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 