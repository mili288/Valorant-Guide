import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import ForgotPassword from './components/ForgotPassword';
import Agents from './pages/Agents';
import Maps from './pages/Maps';
import Weapons from './pages/Weapons';
import Sprays from './pages/Sprays';
import Player from './pages/Player';
import AgentDetails from './pages/AgentDetails';
import MapDetails from './pages/MapDetails';
import Gamemodes from './pages/Gamemodes';
import { GamemodesContextProvider } from './componetsContext/GamemodesContext';
import { MapDetailsContextProvider } from './componetsContext/MapDetailsContext';
import { PlayerContextProvider } from './componetsContext/PlayerContext';
import { SpraysContextProvider } from './componetsContext/SpraysContext';
import { WeaponsContextProvider } from './componetsContext/WeaponsContext';
import { MapsContextProvider } from './componetsContext/MapsContext';
import { AgentsContextProvider } from './components/AgentsContext';
import { UserAuthContextProvider } from "./contexts/UserAuthContext";

function App() {
  return (
    <Router>
      <GamemodesContextProvider>
      <MapDetailsContextProvider>
      <PlayerContextProvider>
      <SpraysContextProvider>
      <WeaponsContextProvider>
      <MapsContextProvider>
        <AgentsContextProvider>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/gamemodes" element={<Gamemodes/>}/>
              <Route path="/maps/:uuid" element={<MapDetails/>}/>
              <Route path="/details/:uuid" element={<AgentDetails/>}/>
              <Route path="/player" element={<Player/>}/>
              <Route path="/sprays" element={<Sprays/>}/>
              <Route path="/weapons" element={<Weapons/>}/>
              <Route path="/maps" element={<Maps/>}/>
              <Route path="/agents" element={<Agents/>}/>
              <Route path="/forgotpassword" element={<ForgotPassword/>}/>
              <Route path="/" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </UserAuthContextProvider>
          </AgentsContextProvider>
          </MapsContextProvider>
          </WeaponsContextProvider>
          </SpraysContextProvider>
          </PlayerContextProvider>
          </MapDetailsContextProvider>
          </GamemodesContextProvider>
    </Router>
  );
}

export default App;