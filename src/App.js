import "./App.css";
import "./quill.bubble.css";
import "./quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import UserMainPage from "./pages/UserMainPage";
import ProcessBasicInformation from "./pages/ProcessBasicInformation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<StartPage />} />
          <Route path="/user/:userId/processes" element={<UserMainPage />} />
          <Route
            path="/user/:userId/processes/:processId"
            element={<ProcessBasicInformation />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
