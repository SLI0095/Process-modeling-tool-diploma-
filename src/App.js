import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import UserMainPage from "./pages/UserMainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<StartPage />} />
          <Route path="/user/:userId/processes" element={<UserMainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
