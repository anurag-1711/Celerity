import React, { useState } from 'react'

const Logo = () => {
    return (
        <div className='w-44 h-10 font-bold text-4xl'>
            Shipmate.
        </div>
    )
}

const RightHeader = () => {

    const [isLogged, setLogged] = useState(false);

    return (
        <div className='right-header flex gap-7 p-0 w-72 justify-between h-10'>

            <button className=' justify-center w-32 bg-violet-500 rounded-xl'
                onClick={() => {
                    setLogged(!isLogged);
                }}
            >
                <p className='text-white'>{isLogged ? 'Logout' : 'Login'}</p>
            </button>


            {
                isLogged ?
                    <button className='border border-violet-500 justify-center w-32 rounded-xl'>
                        <p className=''>Track Shipment</p>
                    </button> :
                    <button className='border border-violet-500 justify-center w-32 rounded-xl'>
                        <p className=''>Learn more</p>
                    </button>

            }
        </div>

    )
}

const Header = () => {
    return (
        <div className='flex items-center p-5 justify-between mt-6 ml-9 mr-9 h-12 '>
            <Logo />
            <RightHeader />
        </div>
    )
};

export default Header;