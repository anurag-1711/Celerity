import React from 'react'
import ServiceCard from './ServiceCard'

const arr = [
    {
        name: 'Freight Services',
        desc: 'Open new Opportunites to grow your busniess. Enter new markets and discover new contitnents, We are with you, door-to-door.'
    },
    {
        name: 'Business Services',
        desc: 'We support your goals for growth with cargo insurance, online payments and paperless workflow. Take your business to the next level.'
    },
    {
        name: 'Shipping & Logistics',
        desc: 'Find powerful solutions to meet your diverse transportation needs. Agile solutions to handle all your supply chain needs.'
    },
    {
        name: '24/7 Support',
        desc: 'Receive support from our experts all over the world at every stage of the process, 24/7.'
    }
]

const Services = () => {
    return (
        <div className='mt-10 items-center'>
            <p className='font-semibold text-4xl text-center'
            >Services
            </p>

            {/* <div className='flex m-4'>

            </div> */}

            <div className='flex m-4'>
                {
                    arr.map((item, index) => {
                        return (
                            <ServiceCard key={index} name={item.name} desc={item.desc} />
                        );
                    })
                }
            </div>

        </div>
    )
}

export default Services