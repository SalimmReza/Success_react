import React from 'react';

const Questions = () => {
    return (
        <div className='my-10 w-[60%] m-auto'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <strong>How Does React work</strong>
                </div>
                <div className="collapse-content">
                    <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <strong>Props vs State</strong>
                </div>
                <div className="collapse-content">
                    <p><strong>props</strong>
                        Props (short for properties) are a Component's configuration. They are received from above and immutable as far as the Component receiving them is concerned. A Component cannot change its props, but it is responsible for putting together the props of its child Components. Props do not have to just be data -- callback functions may be passed in as props.</p>

                    <p><strong>State</strong>
                        The state is a data structure that starts with a default value when a Component mounts. It may be mutated across time, mostly as a result of user events.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    <strong>useEffect </strong>
                </div>
                <div className="collapse-content">
                    <p>Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects. Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before</p>
                </div>
            </div>
        </div>
    );
};

export default Questions;