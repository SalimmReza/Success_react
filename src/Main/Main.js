import React, { useEffect, useState } from 'react';
import './Main.css'

const Main = () => {

    const [subject, setSubject] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-10 '>
            <div className='col-span-3 gap 10'>
                <h1>Website Name</h1>
                <h4>Select your subjects to study</h4>
                <div className='grid grid-cols-3'>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src="https://placeimg.com/400/225/arch" alt="Shoes" className="rounded-xl" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div>
                <h1>Personal Info</h1>
            </div>
        </div>


    );
};

export default Main;