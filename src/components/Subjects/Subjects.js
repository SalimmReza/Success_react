import React from 'react';

const Subjects = (props) => {
    const { img, maxage, minage, name, time } = props.subject
    // console.log(props.subject)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Age: {minage}</div>
                    <div className="badge badge-outline">Time Required: {time}</div>
                </div>
                <button className="btn btn-sm">Small</button>
            </div>
        </div>
    );
};

export default Subjects;