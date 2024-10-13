import { useParams } from 'react-router-dom';

const CampaignDetails = () => {
  const { id } = useParams();  // Get campaign ID from URL params

  const campaign = {
    title: 'Help Build a School',
    description: 'Support us in building a school for underprivileged children.',
    goal: 10000,
    raised: 5000,
    image: '/path/to/image',
  };  // Simulated data, replace with API call based on ID

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={campaign.image} alt={campaign.title} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{campaign.title}</h1>
          <p>{campaign.description}</p>
          <h4>Goal: {campaign.goal}</h4>
          <h4>Raised: {campaign.raised}</h4>
          {/* Donation Form goes here */}
        </div>
      </div>
    </div>
  );
};

export default CampaignDetails;
