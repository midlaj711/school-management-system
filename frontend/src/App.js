import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignupPage from "./components/SignupPage";
import LoginPage from "./components/LoginPage/LoginPage";

// Corrected HomePage Component
const HomePage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center bg-gray-200 py-4 px-6 shadow-md">
        <div className="text-2xl font-bold text-green-600">
          School Management System
        </div>
        <div className="flex space-x-6">
          <Link to="/login/admin" className="text-lg text-green-600 hover:text-green-800">
            Admin
          </Link>
          <Link to="/login/office" className="text-lg text-green-600 hover:text-green-800">
            Office Staff
          </Link>
          <Link to="/login/librarian" className="text-lg text-green-600 hover:text-green-800">
            Librarian
          </Link>
          <Link to="/login/student" className="text-lg text-green-600 hover:text-green-800">
            Student
          </Link>
          <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div
  className="flex flex-col justify-center items-center h-screen bg-[url('https://static.vecteezy.com/system/resources/previews/015/529/452/non_2x/100th-day-of-school-cartoon-colored-clipart-free-vector.jpg')] bg-cover bg-center"
>
  <h1 className="text-7xl font-bold text-green-700 mb-8 bg-white bg-opacity-80 p-6 mt-36 rounded-lg">
    School Management
  </h1>
</div>

    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login/admin" element={<LoginPage role="Admin" />} />
        <Route path="/login/office" element={<LoginPage role="Office Staff" />} />
        <Route path="/login/librarian" element={<LoginPage role="Librarian" />} />
        <Route path="/login/student" element={<LoginPage role="Student" />} />
      </Routes>
    </Router>
  );
}

export default App;
