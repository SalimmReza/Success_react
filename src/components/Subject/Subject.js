import React from 'react';

const Subject = ({ subject, handleAddToCart }) => {
    // console.log(props)
    // console.log(subject, handleAddToCart)
    const { img, maxage, minage, name, time, price } = subject;
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
                    <div className="badge badge-outline">
                        <h4>Time Required: {time}</h4></div>
                </div>
                <button onClick={() => handleAddToCart(subject)} className="btn btn-sm">Add To List</button>
            </div>
        </div>
    );
};

export default Subject;