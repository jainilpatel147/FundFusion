import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './Header';
import ExploreCampaigns from './ExploreCampaigns';
// import CreateCampaign from './Components/CreateCampaign';
import CampaignDetails from './CampaignDetails';

import Dashboard from './Dashboard';
import Footer from './Footer';


function Main(){
    return(
    <Router>
        <Header />
        <div className="container mt-4">
            <Routes>
            <Route path="/" element={<ExploreCampaigns />} />
            <Route path="/explore" element={<ExploreCampaigns />} />
            {/* <Route path="/create" element={<CreateCampaign />} /> */}
            <Route path="/campaign/:id" element={<CampaignDetails />} />
            <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
        <Footer />
    </Router>
    )
}

export default Main;