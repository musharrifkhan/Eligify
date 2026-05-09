import { Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Questionnaire from "../pages/Questionnaire";
import Results from "../pages/Results";
import SavedSchemes from "../pages/SavedSchemes";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import SchemeDetails from "../pages/SchemeDetails";
const AppRoutes = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/results" element={<Results />} />
        <Route path="/saved" element={<SavedSchemes />} />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />

        {/* 404 PAGE */}
        <Route path="*" element={<NotFound />} />
        <Route path="/scheme/:id" element={<SchemeDetails />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
