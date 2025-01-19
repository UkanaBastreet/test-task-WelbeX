import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import AuthPage from "./pages/auth.page";
import { AuthProvider } from "./context/auth.context";
import LoginForm from "./components/LoginForm.component";
import RegistrationForm from "./components/RegistrationForm.component";

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
