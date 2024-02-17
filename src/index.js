// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from "./routes/Root";
import AdminRoutes from "./routes/AdminRoutes"; // Import AdminRoutes component
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext"; // Import AuthProvider

console.log('Starting application initialization');

// Create routes
const routes = (
  <Router>
    <AuthProvider> {/* Wrap your routes with AuthProvider */}
      <Routes>
        <Route path="/*" element={<Root />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </AuthProvider>
  </Router>
);

// Render the application
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>
);

console.log('Application initialized successfully');
