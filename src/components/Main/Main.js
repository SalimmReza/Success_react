import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Subject from '../Subject/Subject';

const Main = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, []);


    const handleAddToCart = (subject) => {
        console.log('clicked')

    }
    return (
        <div className='grid grid-cols-4 gap-10 '>
            <div className='col-span-3 gap-10 grid grid-cols-3'>
                <div className='col-span-3'>
                    <h1>Website Name</h1>
                    <h4>Select your subjects to study</h4>
                </div>
                {
                    subjects.map(subject => <Subject
                        subject={subject}
                        handleAddToCart={handleAddToCart}
                    ></Subject>)
                }

            </div>
            <div className='px-6'>
                <Cart></Cart>


            </div>
        </div>
    );
};

export default Main;