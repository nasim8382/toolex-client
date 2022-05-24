import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const Purchase = () => {
    const {id} =  useParams();
    // const [tool, setTool] = useState([]);
    // const [singleTool, setSingleTool] = useState(null);

    const { isLoading, data: tool } = useQuery(['tool', id], () =>
     fetch(`http://localhost:5000/tool/${id}`)
        .then(res => res.json())
   );

   if (isLoading) {
    return <Loading></Loading>
    }

    /* useEffect( () => {
        axios.get(`http://localhost:5000//tool/${id}`)
            .then(res => setTool(res.data));
    }, [ id, tool ]); */

    return (
        <div>
            <h2 className='text-5xl text-center mt-20 font-bold text-secondary'>This tool name is: {tool.name}</h2>
        </div>
    );
};

export default Purchase;