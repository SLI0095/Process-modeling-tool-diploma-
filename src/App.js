import "./App.css";
import "./quill.bubble.css";
import "./quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import UserMainPage from "./pages/UserMainPage";
import ProcessBasicInformation from "./pages/Process/ProcessBasicInformation";
import NewProcess from "./pages/Process/NewProcess";
import ProcessMetrics from "./pages/Process/ProcessMetrics";

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
          <Route path="/user/:userId/newProcess" element={<NewProcess />} />
          <Route path="/test" element={<ProcessMetrics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
