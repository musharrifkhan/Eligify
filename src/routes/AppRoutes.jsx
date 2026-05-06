import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSiteLayout from "../layouts/MainSiteLayout";
import AuthLayout from "../layouts/AuthLayout";


import Home from "../pages/Home";
import Questionnaire from "../pages/Questionnaire";
import Results from "../pages/Results";
import SchemeDetails from "../pages/SchemeDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import SavedSchemes from "../pages/SavedSchemes";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainSiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/questionnaire" element={<Questionnaire />} />
          <Route path="/results" element={<Results />} />
          <Route path="/scheme/:id" element={<SchemeDetails />} />
          <Route path="/saved-schemes" element={<SavedSchemes />} />
        </Route>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;