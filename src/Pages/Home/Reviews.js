import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import HorizontalLine from '../Shared/HorizontalLine';
import Loading from '../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('reviews', () => axios('http://localhost:5000/review')
        .then(data => data.data));

    if (isLoading) {
        return <Loading></Loading>
    }

    const threeReviews = reviews.slice(-3);

    return (
        <div className='max-w-7xl mx-auto lg:px-12 mt-20 md:mt-32'>
            <div className='px-4 md:px-5'>
                <h1 className="text-primary text-3xl md:text-4xl lg:text-5xl font-bold">All Reviews : {reviews?.length}</h1>
                <HorizontalLine></HorizontalLine>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    threeReviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;