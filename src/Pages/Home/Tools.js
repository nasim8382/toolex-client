import React from 'react';
import HorizontalLine from '../Shared/HorizontalLine';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import axios from 'axios';
import Tool from './Tool';

const Tools = () => {
    const { data: tools, isLoading } = useQuery('tools', () => axios('http://localhost:5000/tool')
        .then(data => data.data));

    if (isLoading) {
        return <Loading></Loading>
    }

    const threeTools = tools.slice(-6);

    return (
        <div className='max-w-7xl mx-auto lg:px-12 mt-20 md:mt-32'>
            <div className='px-4 md:px-5'>
                <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">All Tools : {tools?.length}</h1>
                <HorizontalLine></HorizontalLine>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    threeTools.map(tool => <Tool
                        key={tool._id}
                        tool={tool}
                    ></Tool>)
                }
            </div>
        </div>
    );
};

export default Tools;