import React from 'react';
import loader from '../../images/loader.gif';

const Loading = () => {
    return (
        <div className="flex items-center justify-center ">
            <img src={loader} alt="" />
        </div>
    );
};

export default Loading;