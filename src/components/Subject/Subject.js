import React from 'react';

const Subject = ({ subject, handleAddToCart }) => {
    // console.log(props)
    // console.log(subject, handleAddToCart)
    const { img, maxage, minage, name, time, description, old } = subject;
    return (
        <div className="card w-100% bg-base-100 shadow-xl mt-4">
            <figure><img src={img} className="h-[250px] w-full" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}
                    <div className="badge badge-secondary">{old}</div>
                </h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline">Age: {minage} - {maxage}</div>
                    <div className="badge badge-outline">
                        <h4>Spent Time: {time}hr</h4></div>
                </div>
                <button onClick={() => handleAddToCart(subject)} className="bg-sky-800 btn btn-sm mt-4">Add To List</button>
            </div>
        </div>
    );
};

export default Subject;