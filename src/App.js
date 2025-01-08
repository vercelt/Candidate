import "./App.css";
import Dashboard from "./dashboard/Dashboard.js";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Routes, Navigate } from "react-router-dom";
import Loading from "./load/LoadingPage.js";
import UserProfile from "./dashboard/profile/UserProfile.js";
import UserSettings from "./dashboard/settings/UserSettings.js";
import Overview from "./dashboard/overview/Overview.js";
import AllCandidates from "./dashboard/candiates/AllCandidates.js";

function App() {
  const { isAuthenticated } = useAuth0();
  console.log("isAuthenticated", isAuthenticated);
  return (
    <div>
      <Routes>
        {isAuthenticated && (
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="/dashboard/overview" element={<Overview />} />
            <Route
              path="/dashboard/allcandidates"
              element={<AllCandidates />}
            />
            <Route path="/dashboard/profile" element={<UserProfile />} />
            <Route path="/dashboard/settings" element={<UserSettings />} />
            <Route
              index
              element={<Navigate to="/dashboard/overview" replace />}
            />
          </Route>
        )}
        <Route path="/" element={<Loading />} />
      </Routes>
    </div>
  );
}

export default App;
