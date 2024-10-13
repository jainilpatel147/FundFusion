import { useState } from 'react';

const CreateCampaign = () => {
  const [form, setForm] = useState({ title: '', description: '', goal: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit form logic (e.g., API call to create campaign)
    console.log(form);
  };

  return (
    <form onSubmit={handleSubmit} className="container">
      <h2>Create a New Campaign</h2>
      <div className="form-group">
        <label>Title</label>
        <input name="title" className="form-control" placeholder="Campaign Title" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea name="description" className="form-control" placeholder="Description" onChange={handleChange} />
      </div>
      <div className="form-group">
        <label>Goal Amount</label>
        <input name="goal" type="number" className="form-control" placeholder="Goal Amount" onChange={handleChange} />
      </div>
      <button type="submit" className="btn btn-primary">Create Campaign</button>
    </form>
  );
};

export default CreateCampaign;
