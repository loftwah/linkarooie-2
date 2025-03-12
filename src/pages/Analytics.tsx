const Analytics = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Analytics Dashboard</h1>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-500 dark:text-blue-300 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Total Views</p>
                <p className="text-2xl font-bold">24,563</p>
                <p className="text-green-500 text-xs font-semibold flex items-center mt-1">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  8.2% vs last month
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900 text-green-500 dark:text-green-300 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Click-through Rate</p>
                <p className="text-2xl font-bold">42.3%</p>
                <p className="text-green-500 text-xs font-semibold flex items-center mt-1">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  3.5% vs last month
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 text-purple-500 dark:text-purple-300 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Unique Visitors</p>
                <p className="text-2xl font-bold">12,849</p>
                <p className="text-red-500 text-xs font-semibold flex items-center mt-1">
                  <svg className="w-3 h-3 mr-1 transform rotate-180" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  1.2% vs last month
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center">
              <div className="p-3 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-500 dark:text-yellow-300 mr-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">Avg. Time on Page</p>
                <p className="text-2xl font-bold">2m 36s</p>
                <p className="text-green-500 text-xs font-semibold flex items-center mt-1">
                  <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                  </svg>
                  12.3% vs last month
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Traffic Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Traffic Overview</h2>
          <div className="h-80 w-full">
            {/* Chart would go here */}
            <div className="w-full h-full flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded">
              <p className="text-gray-500 dark:text-gray-400">Chart visualization would render here</p>
            </div>
          </div>
        </div>

        {/* Top Links and Referrers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Top Performing Links</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-left text-gray-700 dark:text-gray-300">Link</th>
                    <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-left text-gray-700 dark:text-gray-300">Views</th>
                    <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-left text-gray-700 dark:text-gray-300">CTR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">/portfolio</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">8,432</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">56.2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">/blog</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">6,142</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">48.7%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">/shop</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">4,523</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">42.1%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">/about</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">3,890</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">39.6%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-300">/contact</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-300">1,576</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-300">28.4%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 border border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold mb-4">Top Referrers</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-left text-gray-700 dark:text-gray-300">Source</th>
                    <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-left text-gray-700 dark:text-gray-300">Visitors</th>
                    <th className="px-4 py-2 border-b border-gray-200 dark:border-gray-700 text-left text-gray-700 dark:text-gray-300">Conversion</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">Google</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">5,376</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">35.2%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">Twitter</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">3,891</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">28.3%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">Instagram</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">2,756</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">24.9%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">Facebook</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">1,893</td>
                    <td className="px-4 py-3 border-b border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-300">18.6%</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-300">Direct</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-300">933</td>
                    <td className="px-4 py-3 text-gray-800 dark:text-gray-300">12.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics; 