import LandingPage from './pages/LandingPage';
import {Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import TeamPage from './team_components/TeamPage';
import BoardPage from './board_components/BoardPage';
import ProfilePage from './kb-components/ProfilePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/profilepage" element={<Layout> <ProfilePage/> </Layout>} />
        <Route path="/teampage/:id" element={<Layout> <TeamPage/> </Layout>}/>
        <Route path="/boardpage/:teamid/:id" element={<Layout><BoardPage/></Layout>}/>
        <Route path="/*" element={<LandingPage />} />
      </Routes>

    </div>
  );
}

export default App;
