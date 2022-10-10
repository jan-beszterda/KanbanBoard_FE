import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import TeamPage from "./team_components/TeamPage";
import BoardPage from "./board_components/BoardPage";
import ProfilePage from "./kb-components/ProfilePage";
import InvitationsPage from "./page_partials/InvitationsPage";

function App() {
  return (
    <div>
      <Routes>
        // Skapa guardrouter för att skydda sidor som bara ska vara tillgängliga
        för inloggade användare
        <Route
          path="/profilepage"
          element={
            <Layout>
              {" "}
              <ProfilePage />{" "}
            </Layout>
          }
        />
        <Route
          path="/invitations"
          element={
            <Layout>
              {" "}
              <InvitationsPage />{" "}
            </Layout>
          }
        />
        <Route
          path="/teampage/:id"
          element={
            <Layout>
              {" "}
              <TeamPage />{" "}
            </Layout>
          }
        />
        <Route
          path="/boardpage/:id"
          element={
            <Layout>
              {" "}
              <BoardPage />{" "}
            </Layout>
          }
        />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
