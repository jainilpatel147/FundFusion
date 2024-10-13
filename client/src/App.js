import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import ExploreCampaigns from './Components/ExploreCampaigns';
// import CreateCampaign from './Components/CreateCampaign';
import CampaignDetails from './Components/CampaignDetails';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<ExploreCampaigns />} />
          <Route path="/explore" element={<ExploreCampaigns />} />
          {/* <Route path="/create" element={<CreateCampaign />} /> */}
          <Route path="/campaign/:id" element={<CampaignDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
