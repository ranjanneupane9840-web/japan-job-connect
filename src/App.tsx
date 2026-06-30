import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home.tsx";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import ResumeBuilder from "./pages/ResumeBulider.tsx";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="grow">
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/jobs" element={<Jobs />} />

          <Route path="/jobs/:id" element={<JobDetails />} />

          <Route
            path="/resume"
            element={<ResumeBuilder />}
          />

          <Route
            path="/dashboard"
            element={<Dashboard />}
          />

          <Route path="/login" element={<Login />} />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          {/* 404 Page */}
          <Route
            path="*"
            element={
              <div className="text-center py-20">
                <h1 className="text-5xl font-bold text-red-500">
                  404
                </h1>

                <p className="text-xl mt-4">
                  Page Not Found
                </p>
              </div>
            }
          />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;