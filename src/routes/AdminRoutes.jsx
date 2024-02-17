






// AdminRoutes.jsx

import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminSettings from '../pages/Admin/AdminSettings';
import AdminUsers from '../pages/Admin/AdminUsers';
import AdminLogin from '../pages/Admin/AdminLogin';
import ScrollToTop from '../components/ScrollToTop';
import '../assets/admin/css/sb-admin-2.min.css';
import { AuthContext } from '../contexts/AuthContext';

const AdminRoutes = () => {
  console.log('Rendering Admin component');
  const { isAdminAuthenticated } = useContext(AuthContext);

  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route
          path="/dashboard"
          element={
            isAdminAuthenticated ? (
              <AdminDashboard />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />
        <Route
          path="/settings"
          element={
            isAdminAuthenticated ? (
              <AdminSettings />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />
        <Route path="/login" element={<AdminLogin />} />
        <Route
          path="/users"
          element={
            isAdminAuthenticated ? (
              <AdminUsers />
            ) : (
              <Navigate to="/admin/login" replace />
            )
          }
        />
      </Routes>
    </>
  );
};

export default AdminRoutes;


