import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='pl-1 md:px-12 lg:px-24'>
            <h2 className="text-4xl text-center pt-8 pb-5 font-bold text-secondary">All Users: {users.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th className='text-xl text-semibold'>No</th>
                            <th className='text-xl text-semibold'>Email</th>
                            <th className='text-xl text-semibold'>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                           users.map( (user, index) =><UserRow
                           key={user._id}
                           user={user}
                           index={index}
                           refetch={refetch}
                           ></UserRow>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;