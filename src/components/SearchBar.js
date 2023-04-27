import React from 'react'

const SearchBar = () => {
    return (
        <div className='text-center'>
            <input
                className='mt-5 w-11/12 h-16 px-6 text-center text-xl text-gray-800 placeholder-gray-500 rounded-xl shadow-lg'
                placeholder='Search Bar'
                input='text'
            />
        </div>
    )
}




export default SearchBar