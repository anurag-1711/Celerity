import React from 'react'

const ServiceCard = ({ name, desc }) => {
    return (
        <div className=' p-4 m-2 w-1/4 rounded-2xl shadow-xl'>
            <div className='text-center font-medium text-xl mt-1 mb-2'>{name}</div>
            <hr className=''/>
            <div className='font-normal m-2'>{desc}</div>
        </div>
    )
}

export default ServiceCard;