import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ThemeProvider } from './contexts/ThemeContext';
import AuthGuard from './components/Auth/AuthGuard';
import Navbar from './components/Layout/Navbar';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import AddIntern from './pages/AddIntern';
import Directory from './pages/Directory';
import Members from './pages/Members';

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route
                path="/"
                element={
                  <AuthGuard>
                    <Dashboard />
                  </AuthGuard>
                }
              />
              <Route
                path="/add-intern"
                element={
                  <AuthGuard>
                    <AddIntern />
                  </AuthGuard>
                }
              />
              <Route
                path="/directory"
                element={
                  <AuthGuard>
                    <Directory />
                  </AuthGuard>
                }
              />
              <Route
                path="/members"
                element={
                  <AuthGuard>
                    <Members />
                  </AuthGuard>
                }
              />
            </Routes>
          </div>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
