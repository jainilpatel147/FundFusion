import { useState } from 'react';

const DonationForm = ({ campaignId }) => {
  const [amount, setAmount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // API call to process donation
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Amount to Donate</label>
        <input type="number" className="form-control" placeholder="Enter amount" onChange={(e) => setAmount(e.target.value)} />
      </div>
      <button type="submit" className="btn btn-success">Donate</button>
    </form>
  );
};

export default DonationForm;
