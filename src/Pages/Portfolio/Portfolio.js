import React from 'react';
import project1 from '../../images/bikes-2-ride.jpg';
import bPhotography1 from '../../images/be-photography1.jpg';
import bPhotography2 from '../../images/be-photography2.jpg';
import bPhotography3 from '../../images/be-photography3.jpg';
import bPhotography4 from '../../images/be-photography4.jpg';
import bPhotography5 from '../../images/be-photography5.jpg';
import bEye1 from '../../images/birds-eye1.jpg';
import bEye2 from '../../images/birds-eye2.jpg';
import bEye3 from '../../images/birds-eye3.jpg';
import bEye4 from '../../images/birds-eye4.jpg';
import bEye5 from '../../images/birds-eye5.jpg';

const Portfolio = () => {
    return (
        <div className="max-w-7xl mx-auto px-5 md:px-12 mt-10 md:mt-16">

            <div className="card max-w-lg bg-secondary shadow-xl mx-auto px-12 py-16">
                <h2 className='text-3xl md:text-5xl text-center font-bold text-primary mb-8'>My Information</h2>
                <div  className='text-primary font-semibold'>
                <h1 className="text-xl mt-3">
                    <span className="text-accent font-bold text-2xl">Name:</span> Md. Nasim Reza
                </h1>
                <p className="text-xl mt-6">
                    <span className="text-accent font-bold text-2xl">Email:</span>{" "}
                    nasim8382@gmail.com
                </p>
                <p className="text-xl mt-6">
                <span className="text-accent font-bold text-2xl">Education: </span>
                    BSC in Computer Science & Engineering
                 </p>
                <p className="text-xl mt-6">
                    <span className="text-accent font-bold text-2xl">Versity: </span>
                    Green University of Bangladesh
                </p>
                <p className="text-xl mt-6">
                <span className="text-accent font-bold text-2xl">Address: </span>
                    Meherpur, Bangladesh
                </p>
                <p className="text-xl mt-6">
                    <span className="text-accent font-bold text-2xl">
                    LinkedIn: 
                    </span>
                    <a className='text-blue-500' href="https://www.linkedin.com/in/nasim8382/" target="_blank" rel="noopener noreferrer"> Profile Link</a>
                </p>
                <p className="text-xl mt-6">
                <span className="text-accent font-bold text-2xl">Skills: </span>
                HTML5, CSS3, Tailwind CSS, Bootstrap-5, Javascript, ES6, React JS, Firebase, Node.js, Express.js, MongoDB.
                </p>
                </div>
            </div>

            <h2 className='text-3xl md:text-5xl text-center mt-16 font-bold text-accent'>My projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6 md:mt-16">
                <div className='shadow-lg card'>
                    <h1 className='text-center text-secondary font-semibold text-2xl'>Bikes 2 Ride</h1>
                    <a className='text-blue-500 text-center my-4'  href="https://bikes-2-ride.web.app/" target="_blank" rel="noopener noreferrer">Live Website Link</a>
                    <img src={project1} alt="" />
                </div>
                <div className='shadow-lg card'>
                    <h1 className='text-center text-secondary font-semibold text-2xl'>Be Photography</h1>
                    <a className='text-blue-500 text-center my-4' href="https://be-photography-98213.web.app/" target="_blank" rel="noopener noreferrer">Live Website Link</a>
                    <img src={bPhotography1} alt="" />
                    <img src={bPhotography2} alt="" />
                    <img src={bPhotography3} alt="" />
                    <img src={bPhotography4} alt="" />
                    <img src={bPhotography5} alt="" />
                </div>
                <div className='shadow-lg card'>
                    <h1 className='text-center text-secondary font-semibold text-2xl'>Bird's Eye</h1>
                    <a className='text-blue-500 text-center my-4'  href="https://birds-eye-site.netlify.app/" target="_blank" rel="noopener noreferrer">Live Website Link</a>
                    <img src={bEye1} alt="" />
                    <img src={bEye2} alt="" />
                    <img src={bEye3} alt="" />
                    <img src={bEye4} alt="" />
                    <img src={bEye5} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Portfolio;