import React from 'react';

const Subject = ({ subject, handleAddToCart }) => {
    // console.log(subject, handleAddToCart)
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    Shoes!
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Age: { }</div>
                    <div className="badge badge-outline">Time Required: { }</div>
                </div>
                <button onClick={() => handleAddToCart(subject)} className="btn btn-sm">Small</button>
            </div>
        </div>
    );
};

export default Subject;