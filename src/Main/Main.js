import React, { useEffect, useState } from 'react';
import Personal from '../components/PersonalInfo/Personal';
import Subjects from '../components/Subjects/Subjects';
import './Main.css'

const Main = () => {

    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('activities.json')
            .then(res => res.json())
            .then(data => setSubjects(data))
    }, [])
    return (
        <div className='grid grid-cols-4 gap-10 '>
            <div className='col-span-3 gap-10 grid grid-cols-3'>
                <div className='col-span-3'>
                    <h1>Website Name</h1>
                    <h4>Select your subjects to study</h4>
                </div>
                {
                    subjects.map(subject => <Subjects
                        subject={subject}
                        key={subject.id}
                    ></Subjects>)
                }

            </div>
            <div className='px-6'>
                <Personal></Personal>
            </div>
        </div>


    );
};

export default Main;