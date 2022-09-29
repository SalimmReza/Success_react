import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingBag, faLocation } from '@fortawesome/free-solid-svg-icons'


//to get data FROM LS

const getLocalData = () => {
    let list = localStorage.getItem('time');
    if (list) {
        return JSON.parse(localStorage.getItem('time'));
    } else {
        return [];
    }
}



const Cart = ({ cart }) => {
    // const [brk, setBrk] = useState([]);
    const [items, setItems] = useState(getLocalData());

    let total = 0;
    for (const product of cart) {
        total += product.time;

    }


    const handleBreakTime = (e) => {
        // const newCart = [e.target.innerText];
        // if (!items) {
        //     setItems(newCart);
        // } else {
        //     setItems([items]);
        //     setItems('');
        // }

        const newCart = [e.target.innerText];
        setItems(newCart);
        console.log(newCart)

    }



    //add data to local storage
    useEffect(() => {
        localStorage.setItem('time', JSON.stringify(items))
    }, [items]);


    return (
        //name
        <div className='sticky top-5'>
            <div className='flex mt-[70px] items-center' >
                <div>
                    <div className="avatar">
                        <div className="w-[55px] rounded-xl ring ring-primary">
                            <img src="https://images.unsplash.com/photo-1542027959157-98e6745f4ba7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt='' />
                        </div>
                    </div>
                </div>
                <div className='ml-3'>
                    <h4 className='font-semibold text-xl '>Md Salim Reza</h4>
                    <div className='flex items-center '>
                        <FontAwesomeIcon icon={faLocation}></FontAwesomeIcon>
                        <p className='ml-[2px] text-base'>Bangladesh</p>
                    </div>
                </div>
            </div>
            {/* local info */}
            <div className='mt-[50px] flex gap-10 rounded-lg bg-red-200 p-3'>
                <div>
                    <h3 className='text-lg'>10<span className='text-zinc-500'>kg</span></h3>
                    <p>Weight</p>
                </div>
                <div>
                    <h3 className='text-lg' >6.5</h3>
                    <p>Height</p>
                </div>
                <div>
                    <h3 className='text-lg'>15<span className='text-zinc-500'>yrs</span></h3>
                    <p>Age</p>
                </div>
            </div>


            {/* add a break */}
            <h2 className='mt-[50px] text-xl font-bold'>Add a Break</h2>

            <div className='mt-[10px] flex gap-3 rounded-lg bg-red-200 p-3 justify-between'>
                <h4 onClick={(e) => handleBreakTime(e)} className='rounded-full border-2 p-1 text-lg bg-slate-50'>1hr</h4>
                <h4 onClick={(e) => handleBreakTime(e)} className='rounded-full border-2 p-1 text-lg bg-slate-50'>2hr</h4>
                <h4 onClick={(e) => handleBreakTime(e)} className='rounded-full border-2 p-1 text-lg bg-slate-50'>3hr</h4>
                <h4 onClick={(e) => handleBreakTime(e)} className='rounded-full border-2 p-1 text-lg bg-slate-50'>4hr</h4>
                <h4 onClick={(e) => handleBreakTime(e)} className='rounded-full border-2 p-1 text-lg bg-slate-50'>5hr</h4>




            </div>


            {/* Study Details */}

            <h1 className='mt-[50px] text-xl font-bold' >Study Details</h1>
            <div className='mt-[10px] gap-3 rounded-lg bg-red-200 p-3'>

                <div className='flex  space-x-[120px]'>
                    <h2>Study Time</h2>
                    <h4>{total}<span>Hours</span></h4>
                </div>

            </div>
            {/* //breaktime */}
            <div className='mt-[20px] gap-3 rounded-lg bg-red-200 p-3 '>


                <div className='flex space-x-[135px]'>
                    <h2>Break Time</h2>
                    <h4>{items}<span></span></h4>
                </div>
            </div>

            <button className="bg-sky-800 w-full mt-20 h-10 btn btn-sm my-4">Activity Completed</button>
        </div>
    );
};

export default Cart;