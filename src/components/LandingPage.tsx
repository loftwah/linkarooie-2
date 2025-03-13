import React from 'react';
import { Helmet } from 'react-helmet';

const LandingPage: React.FC = () => {
  return (
    <div>
      <Helmet>
        <title>Linkarooie - All Your Links in One Place</title>
        <meta name="description" content="Simplify your online presence with a single, customizable link page that showcases all your content." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Linkarooie - All Your Links in One Place" />
        <meta property="og:description" content="Simplify your online presence with a single, customizable link page that showcases all your content." />
        <meta property="og:image" content={heroImage} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
    </div>
  );
};

export default LandingPage; 