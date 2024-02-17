


















import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext'; // Update the path to AuthContext


const AdminUsers = () => {
    const { setIsAdminAuthenticated } = useContext(AuthContext); // Access setIsAdminAuthenticated from AuthContext
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogout = () => {
    // Clear authentication state
    setIsAdminAuthenticated(false);
    // Redirect to login page
    navigate('/admin/login');
  };


  return (
<>
<div id="wrapper">
    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/admin/">
          <div >
          </div>
          <div className="sidebar-brand-text mx-3">R R R Admin 
          </div>
        </Link>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/admin/settings">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Settings</span>
          </Link>
        </li>
        <li className="nav-item  active">
          <Link className="nav-link" to="/admin/users">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Users</span>
          </Link>
        </li>
       <li className="nav-item">
        
       <button className="nav-link" onClick={handleLogout}>
       <i className="fas fa-fw fa-tachometer-alt"></i>
        <span>Logout</span></button>
       </li>
        
        
    
      </ul>
      <div id="content-wrapper" class="d-flex flex-column">

        <div id="content">
            {/* Topbar */}
            <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/* Sidebar Toggle (Topbar) */}
               

              
                {/* Topbar Navbar */}
                <ul className="navbar-nav ml-auto">
       <li> <button onClick={handleLogout}>Logout</button></li>

                </ul>
            </nav>
            {/* End of Topbar */}

            {/* Begin Page Content */}
            <div className="container-fluid">
                {/* Page Heading */}
                <h1 className="h3 mb-4 text-gray-800">Users</h1>
            </div>
            {/* /.container-fluid */}
        </div>

            <footer className="sticky-footer bg-white">
    <div className="container my-auto">
        <div className="copyright text-center my-auto">
            <span>Copyright &copy; Ramos Recruiting Resources</span>
        </div>
    </div>
</footer>
      </div>    

</div>
</>
  )
}

export default AdminUsers