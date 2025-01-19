import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./pages/auth.page";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<AuthPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
