import { useState, useEffect } from 'react';
import CampaignCard from './CampaignCard';

const ExploreCampaigns = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    // Fetch campaigns from API (dummy data for now)
    setCampaigns([
      { id: 1, title: 'Help Build a School', description: 'Support us in building a school.', goal: 10000, raised: 5000, image: '/path/to/image' },
      { id: 2, title: 'Clean Water for All', description: 'Provide clean water to villages.', goal: 20000, raised: 12000, image: '/path/to/image' },
    ]);
  }, []);

  return (
    <div className="container">
      <h2>Explore Campaigns</h2>
      <div className="row">
        {campaigns.map(campaign => (
          <div key={campaign.id} className="col-md-4">
            <CampaignCard campaign={campaign} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreCampaigns;
