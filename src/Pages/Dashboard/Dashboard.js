import React from 'react';
import { Link, Outlet } from 'react-router-dom';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import auth from '../../firebase.init';
// import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    // const [user] = useAuthState(auth);
    // const [admin] = useAdmin(user);

    return (
        <div className='max-w-7xl mx-auto px-12'>
        <div className="drawer drawer-mobile mt-12">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-6xl text-center mt-6 font-bold text-purple-500'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-52 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    <li><Link to="/dashboard/myorders">My Orders</Link></li>
                    <li><Link to="/dashboard/review">Add review</Link></li>
                    <li><Link to="/dashboard/manageorders">Manage Orders</Link></li>
                    <li><Link to="/dashboard/addproduct">Add Product</Link></li>
                    <li><Link to="/dashboard/manageproducts">Manage Products</Link></li>
                    <li><Link to="/dashboard/users">Make Admin</Link></li>

                    {/* { admin && <li><Link to="/dashboard/users">All Users</Link></li>} */}
                </ul>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;