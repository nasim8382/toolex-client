import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './Dashboard.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    return (
        <div className='max-w-7xl mx-auto px-3 md:px-8 lg:px-12'>
        <div className="drawer drawer-mobile mt-8">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl md:text-5xl text-center mt-3 font-bold text-lime-700'>Welcome to your Dashboard</h2>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-56 bg-secondary text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li><Link to="/dashboard">My Profile</Link></li>
                    { !admin && <li><Link to="/dashboard/myorders">My Orders</Link></li>}
                    { !admin && <li><Link to="/dashboard/review">Add review</Link></li>}
                    { admin && <li><Link to="/dashboard/manageorders">Manage Orders</Link></li>}
                    { admin && <li><Link to="/dashboard/addtool">Add Tool</Link></li>}
                    { admin && <li><Link to="/dashboard/managetools">Manage Tools</Link></li>}
                    { admin && <li><Link to="/dashboard/users">Make Admin</Link></li>}
                </ul>

            </div>
        </div>
        </div>
    );
};

export default Dashboard;