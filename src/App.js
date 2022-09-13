import "./App.css";
import "./quill.bubble.css";
import "./quill.snow.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./pages/StartPage";
import Processes from "./pages/Process/Processes";
import ProcessBasicInformation from "./pages/Process/ProcessBasicInformation";
import NewProcess from "./pages/Process/NewProcess";
import ProcessSettings from "./pages/Process/ProcessSettings";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<StartPage />} />
          <Route path="/user/:userId/processes" element={<Processes />} />
          <Route
            path="/user/:userId/processes/:processId"
            element={<ProcessBasicInformation />}
          />
          <Route path="/user/:userId/newProcess" element={<NewProcess />} />
          <Route path="/test" element={<ProcessSettings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
