import React from 'react'

const UserBox = () => {
    const URL = 'https://pbs.twimg.com/profile_images/1320727601418280960/50Dj-HdE_400x400.jpg'
    return (
        <div className='flex justify-between items-center mb-6 hover:bg-primary-light cursor-pointer rounded-full py-2 px-4 transform transition-colors duration-200 '>
            <img src={URL} className='w-11 h-11 rounded-full' alt="profil-photo" />
            <div className='flex flex-col'>
                <span className='font-bold text-md text-black'>Faruk Türkoğlu</span>
                <span className='text-sm text-gray-dark'  >@hawk435</span>
                
            </div>
                <div className='flex space-x-1'>
                    <div className='w-1 h-1  bg-gray-900 rounded-full'></div>
                    <div className='w-1 h-1 rounded-full bg-gray-900'></div>
                    <div className='w-1 h-1 rounded-full bg-gray-900'></div>
                </div>
        </div>
    )
}

export default UserBox
