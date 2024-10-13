const CampaignCard = ({ campaign }) => (
    <div className="card mb-3" style={{ width: '18rem' }}>
      <img className="card-img-top" src={campaign.image} alt={campaign.title} />
      <div className="card-body">
        <h5 className="card-title">{campaign.title}</h5>
        <p className="card-text">{campaign.description}</p>
        <p className="card-text">Goal: {campaign.goal}</p>
        <p className="card-text">Raised: {campaign.raised}</p>
        <a href={`/campaign/${campaign.id}`} className="btn btn-primary">View Details</a>
      </div>
    </div>
  );
  
  export default CampaignCard;
  