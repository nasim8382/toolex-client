import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch, index }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if(res.status === 403){
                    toast.error('Failed to Make an admin');
                }
                return res.json()})
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success(`Successfully made an admin`);
                }

            })
    }

    return (
        <tr>
            <th>{index+1}</th>
            <td>{email}</td>

            <td>{role !== 'admin' ? <button onClick={makeAdmin} className="cursor-pointer rounded-md bg-secondary py-1 px-2 text-center text-sm font-bold uppercase text-gray-700 transition duration-200 ease-in-out hover:bg-primary hover:text-white">Make Admin</button> : <span className='text-secondary ml-2 uppercase text-lg font-semibold'>An Admin</span>}</td>
        </tr>
    );
};

export default UserRow;
