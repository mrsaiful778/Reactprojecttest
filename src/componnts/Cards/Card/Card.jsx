import React from 'react';

const Card = ({courseCard, handlebtn}) => {
    console.log(handlebtn);
    const {image, title, details, price, credit}=courseCard;
    return (
        
        <div className='border-1 shadow-xl rounded-lg p-4 '>
            <img src={image} alt="" />
            <h1 className='text-3xl mb-4 pt-4'>{title}</h1>
            <p className='mb-4 pt-4'>{details}</p>
            <div className='flex justify-between pb-3'>
                <p>$ {price}</p>
                <p>{credit}hr</p>
            </div>
            <button className='bg-[#2F80ED] p-2 rounded-lg text-white w-[250px] text-lg font-semibold pt-2' onClick={()=>handlebtn(courseCard)}>Selected </button>
        </div>
    );
};

export default Card;