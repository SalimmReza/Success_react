import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';
import './Main.css'

const Main = () => {
    const [subjects, setSubjects] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, []);


    const handleAddToCart = (subject) => {
        console.log(subject)
        const newArray = [...cart, subject];
        setCart(newArray);

    }



    return (
        <div className='grid   sm:grid-cols-1 lg:grid-cols-4 gap-10 container '>
            <div className=' sm:col-span-1 lg:col-span-3  gap-10 sm:grid grid-cols-1  lg:grid-cols-3'>
                <div className='col-span-3'>
                    <h1>Website Name</h1>
                    <h4>Select your subjects to study</h4>
                </div>
                {
                    subjects.map(subject => <Subject
                        subject={subject}
                        key={subject.id}
                        handleAddToCart={handleAddToCart}
                    ></Subject>)
                }

            </div>
            <div className='px-6 sm:mb-10 lg:mb-0 bg-white-100 shadow-lg shadow-indigo-500/50 '>
                <Cart cart={cart}></Cart>


            </div>
        </div>
    );
};

export default Main;