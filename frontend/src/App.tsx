import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./pages/auth.page";
import { AuthProvider } from "./context/auth.context";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<AuthPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
