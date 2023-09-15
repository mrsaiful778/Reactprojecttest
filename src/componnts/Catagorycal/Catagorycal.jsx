import React from 'react';

const Catagorycal = ({courseCard}) => {
    // console.log(reciveData);
    return (
        
        <div className='md:1/4'>
           <h1 className='text-2xl font-semibold'>
            course name {courseCard.length}
            {
                courseCard.map(titleList => (<li > {titleList.title}</li>))
            }
           </h1>
           <hr />
        </div>
    );
};

export default Catagorycal;