



















// AdminRoutes.jsx

import React from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';
import AdminNavbar from '../components/AdminNavbar';
import AdminFooter from '../components/AdminFooter';
import AdminDashboard from '../pages/Admin/AdminDashboard';
import AdminSettings from '../pages/Admin/AdminSettings';
import AdminUsers from '../pages/Admin/AdminUsers';
import ScrollToTop from '../components/ScrollToTop';
import  '../assets/admin/css/sb-admin-2.min.css';

const AdminRoutes = () => {
  console.log('Rendering Admin component');

  return (
    <>
      <ScrollToTop />
      <AdminNavbar />
      <Routes>
      <Route path="/*" element={<Navigate to="dashboard" replace />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/settings" element={<AdminSettings />} />
        <Route path="/users" element={<AdminUsers />} />
       
      </Routes>
      <AdminFooter />
    </>
  );
};

export default AdminRoutes;
